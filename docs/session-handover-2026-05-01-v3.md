# UK Mortgages Worldwide - Session Handover, 1 May 2026 (v3)

## How I Work - Read First

- No preamble. No fluff. No "Great question". No session-closing language.
- Brief explanations. Three sentences max unless building a major spec.
- Cook. Pick the answer, go. Less hedging, less option-laying-out.
- Get to the point. Recommend, don't list. Push back honestly when I'm wrong.
- British English. No em-dashes. No semicolons. Comma restraint. No "get" or "got".
- Plain numbered instructions. Tell me exactly what to type or click.
- Never write "ask Claude Code to do X". Tell me what to paste in.
- Format every Claude Code prompt as a single copyable code block. Triple-backtick fenced. No prose between paragraphs of the same prompt.
- ALWAYS paste prompts directly in chat. Never tell me to "open the README" or "look in the zip".
- File delivery: I tell you the destination path, you move them. No Staging-based unzip steps in Claude Code prompts.
- I work 12-14 hours a day. Sessions don't close, I just stop.
- Tables and short bullets fine. No long prose unless the answer needs it.
- Don't describe your reasoning unless I ask.
- Push back honestly. Quality over safe.
- Never describe the project as "ours" or "our". It's mine.
- Goal: meaningful traffic and conversions. Filter every suggestion through that lens.

## Project Status as of 1 May 2026 (end of session)

### Live and working
- Domain: https://ukmortgagesworldwide.com (Vercel + Squarespace DNS)
- Repo: mbmoffat/worldwide-uk-mortgages on main, auto-deploys on push
- Vercel build is GREEN
- 33+ pages live

### Pages built
- 1 homepage
- 7 hub pages: /expat-mortgages, /non-uk-resident-mortgages, /uk-mortgage-foreign-income, /uk-mortgage-living-abroad, /seafarer-mortgages, /uk-mortgage-for-foreign-nationals, /expat-mortgages/buy-to-let
- 14 country pages: /expat-mortgages/countries/{australia, canada, dubai, germany, hong-kong, netherlands, new-zealand, norway, qatar, saudi-arabia, singapore, south-africa, switzerland, usa}
- 9 SEO pages: /expat-mortgages/rates, /expat-mortgage-broker, /non-uk-resident-mortgages/buy-to-let, /lenders/hsbc-expat, /expat-mortgages/remortgage, /expat-mortgages/buy-to-let-from-abroad, /uk-mortgage-foreign-income/halifax, /expat-mortgages/deposit, /expat-mortgages/process
- 2 situation pages: /expat-mortgages/returning-to-uk, /expat-mortgages/no-uk-credit-history
- 6 operational pages: /about, /contact, /privacy, /cookies, /terms, /introducer-disclosure (4 still placeholder, blocked on consultant)
- 2 calculators: /tools/stamp-duty-calculator, /tools/expat-mortgage-calculator
- 1 public sitemap (/sitemap), 1 XML sitemap (/sitemap-index.xml)

### Visual system
- Headings: Playfair Display 700 (and 800 for header wordmark)
- Body and buttons: Lora 400 / 700
- UI chrome: Inter
- Background: #FBF6EF cream / Accent: #8B2331 burgundy / Text: #1A1612
- Body container: 820px max-width
- All H1s centred, eyebrow + meta on single line above
- Pull quote: 3rem auto external margins
- Favicon: burgundy "UK" monogram (placeholder)

### Header navigation
Six top-level items: Mortgages, Countries, Calculators, Guides, About, Contact (burgundy CTA right). Lenders dropdown was added then removed; lender pages remain crawlable but not promoted in nav.

### Contact form
5 fields: First name, WhatsApp/phone, Email, What country do you mostly live in?, What can we help with? (optional). Submit "Talk to a broker" (centred, max-width 320px). Single trust line: "A mortgage broker will usually respond immediately."

### CtaBlock (site-wide standard)
Heading "Talk to a broker about your situation", button "Send an enquiry", caption "A mortgage broker will usually respond immediately." Supporting paragraph removed. Placed AFTER "Who this page is for" section. NOT used on the expat calculator page (form sits directly under results instead).

### SEO infrastructure (complete)
- Search Console verified under mbmoffat@gmail.com
- Sitemap submitted
- Schema markup site-wide: Organization, FAQPage, BreadcrumbList, Service, Article, WebApplication
- Canonical URLs every page
- OG and Twitter Card meta every page
- Internal linking density across hub, country, situation, SEO pages
- 1 backlink from Mortgage One (contextual in-body)
- noindex REMOVED, site is indexable
- 6 priority URLs queued for crawling (quota hit, finish tomorrow)

### GA4
NOT set up. Decided against. Search Console is enough.

### Email forwarding
Squarespace alias enquiry@ukmortgagesworldwide.com forwards to mm@mortgageonefinance.co.uk. Verification PENDING. Form still posts to mbmoffat@gmail.com. Switch when verified.

### Standing copy rules
- British English, no em-dashes, no semicolons, comma restraint, no "get/got"
- Use country-appropriate currency. UK loans/prices in GBP only.
- No lender lists on hub pages. Lender pages exist as independent guides.
- Standard CTA: "Talk to a broker about your situation" / button "Send an enquiry" / caption "A mortgage broker will usually respond immediately."
- WhatsApp pill: "WhatsApp a Mortgage Broker"
- Persona: "we" editorial, "a mortgage broker" advisory
- No Quilter or Mortgage One references
- 20% standard haircut, no-haircut access via specialist broker = conversion lever

### Open backlog (ranked on traffic + conversions)
1. Switch form destination once forwarding verifies
2. Tomorrow: complete URL inspections in Search Console (quota reset)
3. Compliance pages content (privacy, cookies, terms, introducer disclosure) - blocked
4. Real favicon
5. Brand naming (R001)
6. More backlinks (separate workstream)
7. Affordability and ICR calculators if needed

### Things that broke and were fixed (don't repeat)
- GitHub MCPs are dead to us. All writes via Claude Code on iMac.
- `claude` runs bypass-permissions automatically (alias in ~/.bash_profile).
- Don't batch unrelated tasks in Claude Code. Identical-structure batches OK (13 country pages, 9 SEO pages).
- /api/enquiry.ts edge function broke build. Form posts directly to formsubmit.co.
- Apostrophes in JS strings broke build. Use double quotes.
- @astrojs/sitemap needed package-lock.json committed.
- Vercel MCP cannot reach team. Build error logs need pasted from dashboard.

### Live MCPs available in this chat
- Ahrefs (Lite plan)
- Vercel (limited, no team access)
- Cloudflare Developer Platform
- Claude in Chrome
GitHub MCP dead. Workflow: Claude.ai drafts, Matt pastes into Claude Code on iMac.

## How to start a new chat / Claude Code session

1. Open Terminal.
2. Type: `cd ~/Projects/worldwide-uk-mortgages && claude`
3. Press Enter.
4. Type prompt at the `>` prompt.

## What I want from this assistant in the next chat

Pick up where this stopped. Backlog ranked above. Cook. Brief. Don't describe reasoning. One task per Claude Code run, screenshot, review, next.
