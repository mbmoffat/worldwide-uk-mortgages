# UKMW Agent Operating Rules
You maintain the UK Mortgages Worldwide website. Every change must increase qualified mortgage enquiries.

## Workflow
- Always work on a branch named claude/<short-description>. Cloud and web sessions: never push to main, branch and PR only. Local iMac sessions acting on Matt's explicit instruction may commit and push directly to main.
- Run npm run build and fix any failure before opening a PR.
- One PR per task, titled [area]: [action]. Never batch unrelated changes.

## Never edit
- src/components/ContactForm.astro (enquiry routing). Never change the form action or destination.
- Redirects, sitemap config or build config in astro.config.mjs, unless the task is explicitly about them.
- Content guards run postbuild via scripts/check-content-guards.mjs. Never weaken, bypass or delete them.

## SEO and identity (hard rules)
- Never link to mortgageonefinance.co.uk anywhere in body copy.
- Keep UKMW visual identity distinct. Do not reuse Mortgage One artwork or wordmark.
- Byline is "UKMW Editorial". Never use a person's name.
- Every new page must earn its place. Check existing pages first. No cannibalising or duplicating.
- Strengthen internal links to and from any page you create or edit.

### Firm name on operational pages (regulatory disclosure)
- Operational pages (about, contact, complaints, terms) MUST name Mortgage One, a trading style of Sandsea Capital Ltd, an appointed representative of Quilter Financial Services Limited. This is a regulatory firm-disclosure requirement.
- The "keep UKMW visual identity distinct, do not reuse Mortgage One artwork or wordmark" rule applies to visual design only (hero art, logo, wordmark, colours). It does NOT mean removing the Mortgage One firm name from operational page copy or disclosures.
- Marketing pages (hubs, country, situation, guide, news) use anonymous editorial "we" and do not name Mortgage One in body copy. Operational pages are the exception and must name it.
- PR #40 wrongly stripped Mortgage One from the complaints page citing the visual-identity rule. Reverted. Do not repeat.

## House style
- British English. No em-dashes. No double hyphens. No semicolons. Restrained commas.
- SEO titles and meta descriptions: capitalise major words.
- Read as a senior mortgage broker wrote it for that topic on that day. No template drift.

## Page anatomy
Follow the existing site structure: eyebrow, centred H1, body, mid-page CTAs, FAQ with FAQPage schema, contact form, related-pages panel.

## Using Ahrefs and GSC well (target the highest-value opportunities)
Units are not a constraint. Use the data fully to make the best decision. Do not ration calls.

When choosing what to build or improve each run, prioritise in this order:
1. Striking-distance wins. Pages already ranking in positions 5 to 20 for a commercial-intent keyword, checked in GSC and Ahrefs organic keywords. A small improvement here moves traffic fastest.
2. Genuine content gaps. Use Ahrefs to find commercial-intent expat and non-UK-resident mortgage keywords that competitors rank for, UKMW does not, and no existing UKMW page already targets.
3. Winnable over high-volume. Weigh keyword difficulty and traffic potential against UKMW's authority. Prefer a winnable high-intent term over a high-volume term UKMW cannot realistically rank for. Conversion intent beats raw volume.

Before drafting or rewriting a page, check the live SERP for the target keyword and match the dominant intent so the page can compete. Confirm an existing UKMW page does not already target that term.

## URL policy
- Canonical URL form: non-www, no trailing slash. The Vercel edge 308-redirects every other form to it.
- Every internal href must use the canonical form exactly. Never add trailing slashes to internal links. The site root "/" is the only exception.
- A slashed internal link forces a 308 on every click and crawl and splits ranking signals. Fixed sitewide on 10 Jun 2026, reversing PR #33. Do not "correct" links to the slashed form under any rationale.
- If an Ahrefs or Site Audit finding appears to suggest slashed URLs (e.g. "Canonical URL has no incoming internal links"), the canonical setup is non-slash and enforced at the edge. Resolve such findings toward non-slash, never by adding slashes.
- Build guard G7 fails any build containing a slashed internal href. If a change trips G7, the change is wrong, not the guard. Guards must never be weakened, bypassed or deleted.

## Topic exclusions
- UK mortgage rate statistics (Bank of England base rate history, average UK mortgage rate, UK mortgage rate history and close variants) belongs to advice.mortgageonefinance.co.uk, not UKMW. Never build, rebuild or propose a UKMW page targeting this cluster. PR #77 was closed for this reason. Do not treat the absence of this page as a content gap.
