// Build-time content guards (V1 protocol). Runs postbuild.
//
// Scans the built `dist` output plus the `src/content/news` source and
// self-checks six invariants. Prints PASS or FAIL per guard with the
// offending files, and exits 1 if any guard trips so the build fails.
//
// Guards:
//   G1 Third-party links  - no external <a> inside a news article body
//   G2 Source lines       - no "Source: http(s)://" leaking into rendered HTML
//   G3 JSON-LD            - every ld+json parses; news pages carry an Article
//   G4 FAQ count          - FAQPage mainEntity count matches rendered questions
//   G5 Sources presence   - every news md defines `sources` as an array
//   G6 Internal 404s      - every internal /href resolves to a built file
//   G7 Trailing slashes   - no internal /href ends with a trailing slash
//
// HTML is parsed with parse5 (spec-compliant) rather than regex so the
// DOM scoping for G1 and G4 is reliable.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parse } from 'parse5';

const DIST = 'dist';
const NEWS_DIR = join('src', 'content', 'news');
const ALLOWED_HOST = 'ukmortgagesworldwide.com';

// --- parse5 helpers ---------------------------------------------------------

const isElement = (node) => typeof node.tagName === 'string';

function getAttr(node, name) {
  if (!node.attrs) return undefined;
  const a = node.attrs.find((x) => x.name === name);
  return a ? a.value : undefined;
}

function classList(node) {
  const c = getAttr(node, 'class');
  return c ? c.split(/\s+/).filter(Boolean) : [];
}

function hasClass(node, cls) {
  return classList(node).includes(cls);
}

// Depth-first walk over every element node. `prune(node)` returning true
// stops descent into that node's subtree (the node itself is still visited).
function walk(node, visit, prune) {
  const kids = node.childNodes || [];
  for (const child of kids) {
    if (isElement(child)) {
      visit(child);
      if (prune && prune(child)) continue;
    }
    if (child.childNodes) walk(child, visit, prune);
  }
}

function findFirst(node, pred) {
  let found = null;
  walk(node, (el) => {
    if (!found && pred(el)) found = el;
  });
  return found;
}

function findAll(node, pred, prune) {
  const out = [];
  walk(node, (el) => {
    if (pred(el)) out.push(el);
  }, prune);
  return out;
}

function textContent(node) {
  let out = '';
  for (const child of node.childNodes || []) {
    if (child.nodeName === '#text') out += child.value;
    else if (child.childNodes) out += textContent(child);
  }
  return out;
}

// --- file collection --------------------------------------------------------

function walkFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walkFiles(full, out);
    else out.push(full);
  }
  return out;
}

const allDistFiles = existsSync(DIST) ? walkFiles(DIST) : [];
// Relative paths with forward slashes, for O(1) existence checks (G6).
const distFileSet = new Set(
  allDistFiles.map((f) => relative(DIST, f).split(sep).join('/'))
);
const htmlFiles = allDistFiles.filter((f) => f.endsWith('.html'));

// Parse every HTML page once; reuse across guards.
const pages = htmlFiles.map((file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  return { file, rel, html, doc: parse(html) };
});

// A news article page: under news/, but not the news index or archive.
function isNewsArticle(rel) {
  if (!rel.startsWith('news/')) return false;
  const rest = rel.slice('news/'.length);
  if (rest === 'index.html') return false;
  if (rest === 'archive.html' || rest.startsWith('archive/')) return false;
  return true;
}

// --- JSON-LD extraction -----------------------------------------------------

function ldScripts(doc) {
  return findAll(doc, (el) =>
    el.tagName === 'script' &&
    (getAttr(el, 'type') || '').toLowerCase() === 'application/ld+json'
  );
}

// Flatten a parsed JSON-LD value into a list of plain objects, expanding
// arrays and @graph so @type lookups work regardless of nesting shape.
function flattenLd(value, out = []) {
  if (Array.isArray(value)) {
    for (const v of value) flattenLd(v, out);
  } else if (value && typeof value === 'object') {
    out.push(value);
    if (Array.isArray(value['@graph'])) flattenLd(value['@graph'], out);
  }
  return out;
}

function typeMatches(obj, name) {
  const t = obj['@type'];
  if (Array.isArray(t)) return t.includes(name);
  return t === name;
}

// NewsArticle, BlogPosting etc. are all Article subtypes.
function isArticleType(obj) {
  const t = obj['@type'];
  const types = Array.isArray(t) ? t : [t];
  return types.some((x) => typeof x === 'string' && /Article$/.test(x));
}

// --- guards -----------------------------------------------------------------

const results = [];
function record(id, label, failures) {
  results.push({ id, label, failures });
}

// G1: no third-party links inside the news article body. The body wrapper
// is `.t7-body` (from T7Layout). News articles are identified by the
// `.news-article-date` element the news layout renders unconditionally -
// this is what scopes G1 to *news* articles and not the other T7 pages
// (complaints, terms, guides) that legitimately link out to the FCA,
// the Financial Ombudsman, the FSCS etc. Header/footer/compliance footer
// live outside `.t7-body` already; the non-editorial components injected
// *into* the body (risk warning, territorial scope, mid-page CTA, contact
// form) are pruned so only the article's own links are checked.
{
  const NON_BODY = ['risk-warning', 'territorial-scope', 'cta-block', 'contact'];
  const failures = [];
  for (const page of pages) {
    const isNews = findFirst(page.doc, (el) => hasClass(el, 'news-article-date'));
    if (!isNews) continue;
    const body = findFirst(page.doc, (el) => hasClass(el, 't7-body'));
    if (!body) continue;
    const prune = (el) => NON_BODY.some((c) => hasClass(el, c));
    // If the body root itself is a pruned component, skip; otherwise gather
    // anchors that are not inside a pruned subtree.
    const anchors = findAll(body, (el) => el.tagName === 'a', prune).filter(
      (a) => !NON_BODY.some((c) => hasClass(a, c))
    );
    for (const a of anchors) {
      const href = getAttr(a, 'href');
      if (!href) continue;
      const offender = checkExternal(href);
      if (offender) failures.push(`${page.rel}  ->  ${href}`);
    }
  }
  record('G1', 'Third-party links in news article body', failures);
}

// Returns true if href points to a host other than ALLOWED_HOST.
// Relative/internal hrefs, fragments, mailto and tel are allowed.
function checkExternal(href) {
  const h = href.trim();
  if (h.startsWith('#')) return false;
  if (h.startsWith('/') && !h.startsWith('//')) return false; // root-relative
  if (/^(mailto:|tel:)/i.test(h)) return false;
  if (/^https?:\/\//i.test(h) || h.startsWith('//')) {
    try {
      const url = new URL(h.startsWith('//') ? `https:${h}` : h);
      return url.hostname !== ALLOWED_HOST;
    } catch {
      return true; // unparseable absolute URL -> treat as offending
    }
  }
  // Scheme-relative path like "foo" or "./foo" -> internal, allowed.
  if (/^[a-z][a-z0-9+.-]*:/i.test(h)) return true; // some other scheme
  return false;
}

// G2: no "Source: http(s)://" leaking into rendered HTML.
{
  const re = /Source:\s*https?:\/\//;
  const failures = [];
  for (const page of pages) {
    if (re.test(page.html)) failures.push(page.rel);
  }
  record('G2', 'Source lines in rendered HTML', failures);
}

// G3: every ld+json parses; news pages additionally carry an Article object
// with headline and datePublished.
{
  const failures = [];
  for (const page of pages) {
    const scripts = ldScripts(page.doc);
    const parsed = [];
    let parseOk = true;
    for (const s of scripts) {
      const raw = textContent(s).trim();
      if (!raw) continue;
      try {
        parsed.push(JSON.parse(raw));
      } catch (e) {
        parseOk = false;
        failures.push(`${page.rel}  ->  invalid JSON-LD: ${e.message}`);
      }
    }
    if (parseOk && isNewsArticle(page.rel)) {
      const objs = parsed.flatMap((p) => flattenLd(p));
      const article = objs.find(
        (o) => isArticleType(o) && o.headline && o.datePublished
      );
      if (!article) {
        failures.push(
          `${page.rel}  ->  missing Article with headline + datePublished`
        );
      }
    }
  }
  record('G3', 'JSON-LD parses; news pages carry Article', failures);
}

// G4: on pages with FAQPage JSON-LD, mainEntity count must equal the number
// of rendered FAQ question elements (h3 inside .faq).
{
  const failures = [];
  for (const page of pages) {
    const objs = ldScripts(page.doc)
      .map((s) => {
        try {
          return JSON.parse(textContent(s).trim() || 'null');
        } catch {
          return null;
        }
      })
      .flatMap((p) => flattenLd(p));
    const faqObjs = objs.filter((o) => typeMatches(o, 'FAQPage'));
    if (!faqObjs.length) continue;
    const schemaCount = faqObjs.reduce(
      (n, o) => n + (Array.isArray(o.mainEntity) ? o.mainEntity.length : 0),
      0
    );
    const faqContainers = findAll(page.doc, (el) => hasClass(el, 'faq'));
    let rendered = 0;
    for (const c of faqContainers) {
      rendered += findAll(c, (el) => el.tagName === 'h3').length;
    }
    if (schemaCount !== rendered) {
      failures.push(
        `${page.rel}  ->  FAQPage mainEntity ${schemaCount} vs rendered questions ${rendered}`
      );
    }
  }
  record('G4', 'FAQPage count matches rendered FAQ questions', failures);
}

// G5: every news markdown file defines `sources` as an array.
{
  const failures = [];
  const newsFiles = existsSync(NEWS_DIR)
    ? readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    : [];
  for (const name of newsFiles) {
    const raw = readFileSync(join(NEWS_DIR, name), 'utf8');
    if (!sourcesIsArray(raw)) failures.push(join(NEWS_DIR, name));
  }
  record('G5', 'News markdown defines sources as an array', failures);
}

// Inspect the YAML frontmatter and decide whether `sources` is an array
// (inline `[]`/`[...]` or a block `-` list). A scalar, null or missing
// `sources` fails.
function sourcesIsArray(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return false;
  const lines = m[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const km = lines[i].match(/^sources:(.*)$/);
    if (!km) continue;
    const rest = km[1].trim();
    if (rest.startsWith('[')) return true; // inline array, incl []
    if (rest !== '') return false; // scalar value
    // Block form: look for at least one indented list item before the next key.
    for (let j = i + 1; j < lines.length; j++) {
      const l = lines[j];
      if (l.trim() === '') continue;
      if (/^\s+-\s/.test(l)) return true;
      if (/^\S/.test(l)) return false; // next top-level key -> sources was null
      return false;
    }
    return false;
  }
  return false; // no sources key
}

// G6: every internal href (starting with /) resolves to a built file.
// Handles directory (foo/index.html) and file (foo.html) formats; root maps
// to index.html. mailto/tel/external/protocol-relative are ignored.
{
  const failures = new Set();
  for (const page of pages) {
    const anchors = findAll(page.doc, (el) => el.tagName === 'a');
    for (const a of anchors) {
      const href = getAttr(a, 'href');
      if (!href) continue;
      const h = href.trim();
      if (!h.startsWith('/') || h.startsWith('//')) continue; // internal only
      const path = h.split('#')[0].split('?')[0];
      if (path === '') continue; // pure fragment/query on same page
      if (!resolvesInDist(path)) {
        failures.add(`${page.rel}  ->  ${href}`);
      }
    }
  }
  record('G6', 'Internal links resolve to built files', [...failures]);
}

function resolvesInDist(path) {
  if (path === '/') return distFileSet.has('index.html');
  let rel = path.replace(/^\//, '');
  const candidates = [];
  if (rel.endsWith('/')) {
    candidates.push(`${rel}index.html`);
  } else {
    candidates.push(rel); // direct asset, e.g. /favicon.svg
    candidates.push(`${rel}/index.html`); // directory format
    candidates.push(`${rel}.html`); // file format
  }
  return candidates.some((c) => distFileSet.has(c));
}

// G7: no internal href carries a trailing slash. Canonical URL form is
// non-www with no trailing slash; the edge 308s every slashed form to it,
// so a slashed internal link forces a redirect on every click and crawl.
// A href is internal if it starts with "/" and not "//". Query and fragment
// are stripped before testing. The site root "/" is the only allowed slash.
{
  const offenders = [];
  for (const page of pages) {
    const anchors = findAll(page.doc, (el) => el.tagName === 'a');
    for (const a of anchors) {
      const href = getAttr(a, 'href');
      if (!href) continue;
      const h = href.trim();
      if (!h.startsWith('/') || h.startsWith('//')) continue; // internal only
      const path = h.split('#')[0].split('?')[0];
      if (path === '/') continue; // root is the only allowed slash
      if (path.endsWith('/')) offenders.push(`${page.rel}  ->  ${href}`);
    }
  }
  const failures = [];
  if (offenders.length) {
    failures.push(`${offenders.length} trailing-slash internal links`);
    failures.push(...offenders.slice(0, 20));
  }
  record('G7', 'trailing-slash internal links', failures);
}

// --- report -----------------------------------------------------------------

let anyFail = false;
console.log('Content guards (postbuild):\n');
for (const r of results) {
  const ok = r.failures.length === 0;
  if (!ok) anyFail = true;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${r.id}  ${r.label}`);
  if (!ok) {
    for (const f of r.failures) console.log(`          - ${f}`);
  }
}
console.log('');

if (anyFail) {
  console.error('Content guards FAILED. Build rejected.');
  process.exit(1);
} else {
  console.log(`All ${results.length} content guards PASS.`);
}
