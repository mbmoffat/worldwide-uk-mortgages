# UK Mortgages Worldwide - Operational Brief v2.0

**Status:** Living document. Update at the end of every working session.
**Last updated:** 05 May 2026
**Replaces:** operational-brief-v1.0.md and UKMW_TRANSPLANT.md reconciliation.

---

## 1. What this is

A standalone marketing website for Mortgage One, targeting UK expats, non-UK residents, and people earning in foreign currency who need a UK mortgage. Built as an SEO-led lead generation engine. All enquiries land at Mortgage One.

- **Brand:** UK Mortgages Worldwide (UKMW)
- **Domain:** ukmortgagesworldwide.com (main domain, not a subdomain)
- **Operating entity:** Mortgage One, a trading style of Sandsea Capital Ltd, an appointed representative of Quilter Financial Services Limited (FCA Register No. 440703). Mortgage One FCA Register No. 1031867.

UKMW is Mortgage One's autonomous marketing channel for the international audience. It is not a separate trading style on the FCA register and does not need to be. **There is no introducer language anywhere on UKMW.** Enquiries land directly with Mortgage One.

**Commercial goal:** generate qualified mortgage enquiries from overseas-based prospects. Every page, change, decision, and content addition is filtered through that lens.

---

## 2. Stack and infrastructure

| Layer | Tool | Notes |
|---|---|---|
| Static site generator | Astro v5 | Content collections used for /news |
| Hosting | Vercel (Hobby plan) | Auto-deploys from main branch on push |
| Source control | GitHub | Repo: `mbmoffat/worldwide-uk-mortgages`, public |
| DNS / CDN | Cloudflare + Squarespace DNS | Squarespace handles email forwarding (broken, see §13) |
| Form submission | formsubmit.co | POSTs to mbmoffat@gmail.com (intended target: enquiry@ukmortgagesworldwide.com once forwarding fixed) |
| Analytics | Google Search Console | GA4 not configured, intentionally |
| Keyword research | Ahrefs Lite ($99/mo annual) | MCP-enabled in Claude.ai |
| Build interface | Claude Code on iMac | Full local read/write via system git/gh |

- Working folder: `~/Projects/worldwide-uk-mortgages/`
- Documentation: `docs/` inside the repo (NOT Google Drive)
- Browser downloads: `~/Documents/Cowork-Safe/Staging` (NOT Downloads folder)

---

## 3. Architecture

### 3.1 Site structure (67 pages live as of 03 May 2026)

- 1 homepage
- 7 hub pages (residence and income type)
- 24 country pages (5 regional groups: Europe, Gulf, Asia-Pacific, Americas, Others)
- 4 visa-status pages (under foreign nationals hub)
- 16 SEO/lender/situation pages
- 4 guide pages + 1 guides hub
- 5 news pages (1 hub + 1 archive + 3 articles)
- 6 operational pages (about, contact, complaints, terms, sitemap, all countries hub)
- 2 calculators (stamp duty, expat mortgage)
- 2 sitemaps (XML index + human-readable HTML)

### 3.2 URL convention

```
/expat-mortgages                          - hub
/expat-mortgages/countries                - all countries index
/expat-mortgages/countries/[country]      - 24 country pages
/expat-mortgages/[situation]              - rates, deposit, process, etc.
/expat-mortgages/buy-to-let               - BTL hub
/non-uk-resident-mortgages                - parallel hub
/uk-mortgage-foreign-income               - foreign income hub
/uk-mortgage-living-abroad                - living abroad hub
/uk-mortgage-for-foreign-nationals        - foreign nationals hub
/uk-mortgage-for-foreign-nationals/[visa] - 4 visa pages
/seafarer-mortgages                       - specialism hub
/lenders/[lender-slug]                    - 3 lender pages
/news                                     - news hub
/news/archive                             - full news index
/news/[article-slug]                      - individual articles
/guides                                   - guides hub
/guides/[guide-slug]                      - individual guides
/tools/[calculator]                       - 2 calculators
/about, /contact, /complaints, /terms, /sitemap - operational
```

### 3.3 Component architecture

Shared components in `src/components/`:

- `RiskWarning.astro` - top-of-page MCOB risk warning. Variants: residential, btl, fees, residential-fees, btl-fees
- `TerritorialScope.astro` - Quilter-mandated UK soil disclaimer
- `ComplianceFooter.astro` - Sandsea/Quilter firm disclosure block, sitewide
- `CtaBlock.astro` - "Talk to a broker about your situation" CTA
- `ContactForm.astro` - 5-field enquiry form
- `Layout.astro` - main page wrapper (header, nav, footer)
- `HubLayout.astro` - hub/country/situation page layout
- `MidPageCta.astro` - inline CTA for mid-content placement
- `PullQuote.astro` - editorial pull quote

### 3.4 Visual system (locked)

| Element | Spec |
|---|---|
| Headings font | Playfair Display 700 (800 for header wordmark) |
| Body font | Lora 400 / 700 |
| UI chrome font | Inter |
| Background | Cream `#FBF6EF` |
| Card background | `#FAEFE3` |
| Accent (burgundy) | `#8B2331` |
| Body text | `#1A1612` |
| Muted text | `rgba(26, 22, 18, 0.65)` |
| Body container | 820px max-width |
| Footer container | wider (~1200px) |
| Calculator card | 640px max-width, 12px radius, soft shadow |
| Primary button | 280px desktop / full-width mobile, 0.95rem padding, centred |

H1s centred site-wide. Eyebrow + meta on single line above H1. Pull quote: 3rem auto external margins. Favicon: burgundy square with "UK" top + "MW" bottom in Playfair 800 cream.

UKMW visual identity is deliberately distinct from mortgageonefinance.co.uk to avoid Google entity-merge signals. Don't reuse M1 hero artwork or wordmark.

### 3.5 Header navigation

Top-level: Mortgages | Countries | Calculators | Guides | News | About | Contact (burgundy CTA)

**Mortgages dropdown** (12 items, fixed order): UK Mortgages for Expats, UK Mortgages for Non-UK Residents, UK Mortgages with Foreign Income, UK Mortgages Living Abroad, Seafarer Mortgages, Expat Buy-to-Let, Non-UK Resident Buy-to-Let, Foreign Nationals in UK, [indented] Skilled Worker Visa, Spouse Visa, Without ILR, BNO Visa.

**Countries dropdown** (regional grouping): All Countries (top link); EUROPE: France, Germany, Ireland, Netherlands, Norway, Portugal, Spain, Switzerland; GULF: Bahrain, Dubai / UAE, Kuwait, Oman, Qatar, Saudi Arabia; ASIA-PACIFIC: Australia, Hong Kong, Japan, Malaysia, New Zealand, Singapore, Thailand; AMERICAS: Canada, USA; OTHERS: South Africa.

**Calculators dropdown:** Stamp Duty Calculator, Expat Mortgage Calculator.

**Guides dropdown:** All Guides + 13 individual guides.

### 3.6 Footer

Two-row centred nav: About | Contact | Sitemap | Complaints | Privacy Notice | Terms and Conditions

ComplianceFooter component below renders Sandsea/Quilter firm details, FCA register numbers, risk warning, and Quilter approver line (currently shows `[Approval Date TBC]` placeholder).

---

## 4. Compliance

UKMW operates under Mortgage One's Quilter AR authorisation. The site is a financial promotion under MCOB 3A. **UKMW shares Mortgage One's compliance footprint. There is no separate UKMW compliance footprint.**

### 4.1 Approved footer wording

```
©2026 UK Mortgages Worldwide. All rights reserved.
UK Mortgages Worldwide is a website operated by Mortgage One,
a trading style of Sandsea Capital Ltd, an appointed representative
of Quilter Financial Services Limited, which is authorised and regulated
by the Financial Conduct Authority Register No. 440703.
Sandsea Capital Ltd is registered in England and Wales CRN No. 11374947.
Registered Office: 555-557 Cranbrook Road, Gants Hill, Ilford, Essex,
England IG2 6HE. Approver: Quilter Financial Services Limited
- [Approval Date TBC].
YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
Some Buy-to-Let, Holiday-Let Mortgages, House in Multiple Occupation,
Bridging Loans, Mezzanine Finance, Inheritance Tax Planning and Tax Planning
are not regulated by the Financial Conduct Authority.
Mortgage One is only able to provide regulated mortgage advice to clients
who are physically present in the UK at the time the advice is given.
```

### 4.2 What is in place

- Sandsea/Quilter firm disclosure on every page (footer)
- FCA Register Numbers displayed (Quilter 440703, Mortgage One 1031867)
- Risk warning on every content page (RiskWarning component)
- Territorial scope disclaimer on every overseas-relevant page (TerritorialScope component)
- Complaints procedure page mirroring Mortgage One's Quilter-routed process
- Full T&Cs page based on M1's published T&Cs
- Privacy notice link in footer points to Quilter AR Privacy Notice
- Form GDPR disclosure clause directly above submit button
- All marketing copy aligned with Mortgage One brokerage positioning, no introducer language

### 4.3 What is pending

- **Quilter financial promotion approval.** Footer shows `[Approval Date TBC]` placeholder. Approval has not been formally requested or granted. The site uses Quilter's name on a financial promotion they have not signed off. Single biggest outstanding compliance item. Parked at Matt's request.

### 4.4 Key compliance rules

- British English, no em-dashes, no semicolons, comma restraint, no "get/got"
- Country-appropriate currency in body copy (USD for USA, AED for Dubai, etc.). UK loans/prices in GBP only
- No lender lists on hub pages
- Persona: editorial "we" (Mortgage One), advisory "we" or "your broker"
- 20% standard haircut vs no-haircut access = the conversion lever
- Referral mechanism for non-UK soil clients: scheduled UK advice meeting OR referral to a firm authorised in their country of residence
- Operational pages (about, contact, complaints, terms) carry firm name; marketing pages (hubs, country, situation, guide) use "we" without naming Mortgage One in body copy
- Critical child safety: not applicable for this audience
- Investment advice: not provided, redirect to broker conversation

---

## 5. SEO architecture

### 5.1 Indexing strategy

- Site indexable (no global noindex)
- Sitemap at `/sitemap-index.xml` submitted to Google Search Console (non-www)
- Sitemap config includes lastmod, changefreq, priority per URL via `serialize()` function in `astro.config.mjs`
- Priority allocation: homepage 1.0, hubs 0.9, country pages 0.8, calculators/situation pages 0.7, news 0.6, operational 0.4
- Schema markup: Organization, BreadcrumbList, FAQPage, Service, Article, WebApplication, WebSite (with SearchAction)
- Canonical URLs on every page (non-www)
- OG and Twitter Card meta on every page

### 5.2 Internal linking

- Each hub links to relevant country pages
- Each country page cross-links to neighbouring countries in same region
- Each news article cross-links to relevant hub
- All pages link to /expat-mortgages and /uk-mortgage-foreign-income via related-pages panel
- Footer privacy/terms/about links present on every page
- Related-pages panel on every content page (5-6 cards)

### 5.3 Backlink and cross-domain link position

- **Single contextual in-body link from mortgageonefinance.co.uk.** Do not add more from M1. The single link is the ceiling. Future backlinks must come from external sources.
- **UKMW does not link out to mortgageonefinance.co.uk** in body copy. UKMW is autonomous; cross-linking back to M1 weakens the autonomy signal and triggers entity-merge risk.
- No third-party links in news article body copy. See §6.5 for source attribution rule.

### 5.4 Keyword research

- Ahrefs Lite, MCP-enabled in Claude.ai
- ~21 units per matching-terms call
- 25,000 units/month
- Upgrading plan does not require reconnecting MCP
- Primary keyword universe documented in `docs/keyword-universe-v1.0.md`

---

## 6. Content strategy

### 6.1 Page templates

All content pages follow a standard template:

1. Eyebrow + H1 (centred)
2. RiskWarning component (residential or btl variant)
3. TerritorialScope component (where overseas-relevant)
4. Subheading paragraph
5. "Who this page is for" section
6. MidPageCta hero variant (after intro)
7. Body sections with H2s
8. PullQuote (one per page, mid-content)
9. MidPageCta default
10. Common questions (FAQ section, with FAQPage schema)
11. CtaBlock
12. ContactForm
13. Related pages panel (5-6 cards)
14. ComplianceFooter (sitewide via Layout)

### 6.2 Country page content

Each country page is researched individually, not cookie-cutter. Variants by country: income tax position (tax-free Gulf vs progressive European), currency volatility and lender attitude, employer profile (oil/gas, finance, tech, multinational), visa/residency reality, property buying behaviour, specific lender appetite quirks, cultural touchpoints.

### 6.3 Markdown reference files

Each new content page generates BOTH a markdown reference at `docs/copy/countries/[name].md` AND the live `.astro` file. The markdown is a checkpoint for future tone-of-voice and reuse. Existing flat-named files in `docs/copy/` (e.g. `expat-mortgages-countries-australia.md`) remain in place.

### 6.4 News articles - storage and rendering

Stored as markdown in `src/content/news/` using Astro Content Collections. Each article:

- Frontmatter: `title`, `description`, `pubDate`, `image` (optional), `tags` (optional), `hideRiskWarning` (optional), `sources` (array, see §7.3)
- Body in markdown
- Renders via `src/pages/news/[...slug].astro`
- Auto-included in `/news` index (5 most recent), `/news/archive` (all), and the XML sitemap

### 6.5 Working method for new content

1. Matt asks for new content here in Claude.ai
2. I research keywords (Ahrefs MCP) and draft
3. Matt reviews, requests changes
4. I write a Claude Code prompt with the final content embedded
5. Matt pastes into Claude Code in Terminal
6. Claude Code creates files, commits, pushes
7. Vercel auto-deploys (60-90 seconds)
8. Matt screenshots live URL
9. Repeat or move on

---

## 7. News article publishing protocol (V1)

V1 is the article-publishing protocol used on UKMW news. The "V" doesn't imply iteration, there is no V2. V1 is the protocol. Adapted from the M1 News V1 protocol with UKMW-specific changes (anonymous byline, no cross-domain link to M1).

### 7.1 Per-article workflow

1. Keyword check (Ahrefs MCP, confirm topic has search demand and isn't cannibalising an existing UKMW page)
2. Source verification (every factual claim traces to a named, dated, public source)
3. Produce delivery in single chat turn: markdown + V1.docx + Claude Code prompt + SEO summary
4. Publish via Claude Code
5. Request indexing in Google Search Console

### 7.2 V1.docx record artefact

V1.docx is a per-article record artefact for Matt. Goes to Matt's records. He routes it onward at his discretion. **Never gates publication. Never labelled "for FP review" or similar.**

**V1.docx contains:**
- H1
- Article body (paragraphs, headings, bold for risk warning and disclaimer)
- CTAs as plain text (key elements bold, no hyperlinks)
- In-body source citations: "Source: " label as plain text + URL as clickable Word hyperlink
- Sources list at end: publisher, title, clickable URL, accessed date
- Byline at end: "UKMW Editorial" (no hyperlink)

**V1.docx does NOT contain:**
- Any SEO block, primary keyword, meta, slug, or frontmatter data
- A published date or "Published: ..." line
- Any internal links to UKMW pages (references appear as plain text)
- Any "Back to ..." hub links
- Any embedded hyperlinks except: source URLs and (where applicable) the byline

### 7.3 Source citation rule

- Cite only on paragraphs containing a specific, checkable fact (rate change, named lender, named regulator, named statistic)
- Format in V1.docx: `Source: https://...` on the line below the paragraph
- Maximum one source per paragraph
- The published markdown article does NOT carry `Source:` lines in body. Sources travel into a `sources` array in the frontmatter for audit consistency
- Sources list at the end of V1.docx is for the record artefact only, not rendered on the published page

### 7.4 Build-time guards

These run at build and fail the build if any check trips. Implementation is on the backlog (see §9). Until built, rules are observed manually.

1. **Third-party link guard.** Fails build if any `<a>` in news article body points to a domain outside the UKMW allow-list
2. **Source: line strip check.** Fails build if `Source:\s*https?://` pattern appears anywhere in rendered HTML
3. **JSON-LD validation.** Fails build if Article schema JSON-LD is malformed
4. **FAQ count match.** Fails build if FAQPage schema FAQ count differs from rendered FAQ count on the page
5. **Frontmatter source consistency.** Fails build if `sources` array in frontmatter is empty when the body cites facts that should have sources
6. **Internal link 404 check.** Fails build if any internal link points to a non-existent UKMW page

### 7.5 Author attribution

- UKMW byline: "UKMW Editorial", no hyperlink, no named author
- **Do not** use Matt's name on UKMW news articles
- **Do not** link any UKMW byline to Matt's personal LinkedIn
- About page is anonymous editorial. No named adviser, no photo, no LinkedIn cross-link from UKMW

### 7.6 Cross-domain rules (strict)

- UKMW news articles do not link to mortgageonefinance.co.uk
- UKMW news articles do not link to news subdomains of M1 if/when M1 News exists
- UKMW news articles can link to other UKMW pages (hub-and-spoke), follow §5.2 internal linking patterns

---

## 8. Operational workflow

### 8.1 Day-to-day editing

Open Terminal:

```
cd ~/Projects/worldwide-uk-mortgages && claude
```

`claude` runs with `--dangerously-skip-permissions` (alias in `~/.bash_profile`). At the `>` prompt, paste prompt verbatim.

### 8.2 File workflow rules

- Browser downloads land in `~/Documents/Cowork-Safe/Staging`, never `~/Downloads`
- Project files live in `~/Projects/worldwide-uk-mortgages/`
- Copy reference files in `docs/copy/`
- Handover documents in `docs/`
- I tell Matt the destination path, Matt drags from Staging to repo folder in Finder, Claude Code or Terminal handles git operations
- No Staging-based unzip in Claude Code prompts

### 8.3 Commit and push convention

Each Claude Code prompt should result in:

1. Build locally (verify no errors)
2. Commit with descriptive message
3. Push to main
4. Vercel auto-deploys
5. Matt screenshots within 60-90 seconds

Commit message format: `[area]: [action]` e.g. `country pages: add Bahrain, Oman, Kuwait`, `compliance: add fees and complaints pages`, `nav: restructure Countries dropdown`.

### 8.4 Risk management

- All changes are in git. Anything Claude Code does can be reverted
- For risky changes, ask Claude Code to work on a branch first
- Vercel deploys are atomic, broken push fails to build, doesn't break live site
- Pattern that has burned us: identical-structure batches OK (multiple country pages, multiple SEO pages); avoid bundling unrelated changes
- Known build-breakers: Vercel edge functions incompatible with static Astro builds; apostrophes inside single-quoted JS strings in Astro frontmatter
- Persistence pattern bug in Claude Code: parallel Edit operations sometimes don't persist to disk. Re-read after edit before next operation

### 8.5 Two Claudes division

**Claude.ai web (this interface):**
- Strategy and planning
- Copy drafting and review
- SEO research and keyword analysis (Ahrefs MCP)
- Lender criteria research
- Compliance review of content
- Drafting Claude Code prompts
- V1.docx generation for news articles
- Anything that doesn't directly touch the codebase

**Claude Code (Terminal):**
- All file edits and commits
- Page templates and components
- Calculator builds
- Local testing
- Git operations
- Build-time guard implementation
- Anything that needs to read or write files

---

## 9. Active backlog

Ranked by traffic + conversion impact.

### Open

1. **Quilter financial promotion approval.** Footer carries Quilter name pre-approval. Parked at Matt's request. Compliance risk acknowledged
2. **`[Approval Date TBC]` placeholder** in footer and T&Cs. Replace once Quilter approval received
3. **Form destination switch** to enquiry@ukmortgagesworldwide.com, waiting on Squarespace email forwarding fix. Currently posts to mbmoffat@gmail.com
4. **About page positioning.** Anonymous editorial confirmed (no named adviser). Page may need rewording to read deliberately editorial rather than "missing" detail
5. **More backlinks** (separate workstream, not Claude Code). Mortgage One link is single contextual only, do not add more
6. **News article cadence.** Drafted articles: Welcome, Specialist Lenders Hold Rates Steady, Gulf Expats Returning. Cadence aim: 1-2 articles per week
7. **V1 protocol implementation:**
   - Build-time guards (six checks listed in §7.4)
   - V1.docx generator template
   - `sources` array added to news article frontmatter schema
   - Backfill V1.docx for the three existing articles, OR document that protocol applies from next article forward
8. **Visibility decision pending.** Matt has asked about indexing without searchability. Three options offered (Vercel password protection, noindex tag, robots.txt Disallow). No decision made. Site currently indexable

### Possible expansion areas

- More country pages (India, Israel, Bahrain commuters Saudi-side, smaller GCC)
- More guide content (specific lender criteria deep-dives, tax topics, regulatory updates)
- News article series (currency commentary, lender criteria changes, market updates)
- Comparison content (residential vs BTL, expat vs UK resident, hard vs soft currency)
- Calculator additions (LTV calculator, affordability calculator, ICR calculator)
- Buyer journey content (first-time buyer guide expanded, complete return-to-UK guide)
- Country-specific guide articles (NHR for Portugal, Beckham Law for Spain, etc.)

---

## 10. Decisions made (do not revisit without strong reason)

- Niche: dual primary anchor (UK expats + non-UK residents), seafarer as specialism only
- Stack: Astro v5 + Vercel + GitHub + Cloudflare
- Brand: UK Mortgages Worldwide (not a working name, this IS the brand)
- Form destination: mbmoffat@gmail.com via formsubmit.co
- Build interface: Claude Code on iMac
- Currency rule: country-appropriate currency where the country is the subject
- 20% standard haircut vs no-haircut access = THE conversion lever
- No GA4 (Search Console enough)
- No Mortgage One Squarespace migration (rejected)
- No parallel duplicate Mortgage One site (cannibalisation risk)
- Single Mortgage One backlink only (do not add more, do not link back from UKMW)
- Compliance: site repapered as Mortgage One marketing channel (not a separate trading style on FCA register)
- **No introducer language anywhere on UKMW** (enquiries land directly with Mortgage One, no introducer pathway framing)
- Lenders dropdown: removed (lender pages stay crawlable, not in nav)
- Body container: 820px max-width
- All buttons: "Talk to a broker" CTA, "Send Enquiry" submit button
- Footer privacy notice: external link to Quilter AR Privacy Notice (not a separate UKMW privacy page)
- Public connection to Matt: discoverable via Companies House / WHOIS / FCA register / mortgageonefinance reply-from email. For casual visitor: invisible. For determined investigator: 5 minutes
- **News byline:** "UKMW Editorial", anonymous, no Matt LinkedIn link, no named author. About page anonymous editorial
- **News protocol:** V1 (V1.docx record artefact, build-time guards, source citation format). Adopted 05 May 2026
- **Staging path:** `~/Documents/Cowork-Safe/Staging` (aligned with M1 News workflow)
- **Cross-domain links from UKMW:** none. UKMW does not link out to mortgageonefinance.co.uk in body copy

---

## 11. Resources and tools

| Resource | Detail |
|---|---|
| GitHub repo | https://github.com/mbmoffat/worldwide-uk-mortgages |
| Vercel project | Connected to repo, auto-deploy on push |
| Cloudflare account | DNS only, otherwise idle |
| Ahrefs Lite | Annual, $99/mo, MCP-enabled |
| Domain | ukmortgagesworldwide.com (registered) |
| Email | enquiry@ukmortgagesworldwide.com (forwarding broken, see §13) |
| WhatsApp | +44 7395 549408, controlled by Cloudflare Worker shared with Mortgage One |
| Hammerspoon | `⌃⌥⌘W` toggles WhatsApp pill availability |
| Search Console | Verified for ukmortgagesworldwide.com (non-www), sitemap submitted |

---

## 12. Communication standards

### Style
- Direct, no preamble, no fluff, no "great question"
- British English throughout
- No em-dashes, no semicolons
- Comma restraint
- Plain numbered instructions
- Tables and short bullets fine
- No "get/got"
- No flattery, no apologies for being a model

### Format
- Every Claude Code prompt: single triple-backtick fenced code block, paste-ready, no surrounding prose, prefaced with "Paste into Claude Code:"
- Every Terminal command: triple-backtick fenced, paste-ready, prefaced with "Paste into Terminal:"
- Never describe a task abstractly when concrete instructions can replace it
- Never write "ask Claude Code to...", write the prompt
- Every file: tell Matt the exact destination path. Format: "Download X to `~/Documents/Cowork-Safe/Staging`, drag to `~/Projects/worldwide-uk-mortgages/[exact subfolder]`"
- Every browser action: exact URL and click path
- Zip files: state explicitly which of "Leave it zipped", "This Terminal command unzips it: [command]", or "Unzip it manually and upload the contents back to me" applies

### Decisions
- One recommended path, not a menu, unless Matt's input is genuinely required (cost, risk, strategic direction, irreversible action)
- Make a reasonable assumption, state it in one line, proceed
- Push back when Matt is wrong
- Sessions do not close. Never suggest "stop for the day"

### Response mode
- Executive brief. Lead with action. No recap. Stop when answered.

---

## 13. Things that have broken (do not repeat)

- GitHub MCPs are dead. All writes via Claude Code on iMac
- Vercel edge functions incompatible with static Astro builds (broke `/api/enquiry.ts`)
- Apostrophes inside single-quoted JS strings in Astro frontmatter break the build
- `@astrojs/sitemap` needs `package-lock.json` committed to function correctly
- Vercel MCP cannot reach Matt's team account
- Squarespace email forwarding to mm@mortgageonefinance.co.uk does not work reliably
- Don't batch unrelated tasks in Claude Code (identical-structure batches OK)
- Claude Code parallel Edit operations occasionally don't persist, run residual grep after bulk edits
- The "Approver: Quilter Financial Services Limited" line on a financial promotion Quilter has not approved is a real compliance risk. Documented but parked at Matt's request

---

## 14. Filing this brief

Save in `docs/operational-brief-v2.0.md`. Update at the end of every working session.

When updating, change the date and increment the version. Old versions stay in `docs/` for audit trail. Do not delete the previous brief.

After saving, also paste this brief into the Claude.ai Project Instructions field so it loads at the start of every new session.

**End of brief.**
