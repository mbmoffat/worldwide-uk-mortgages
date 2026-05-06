# UK Mortgages Worldwide - Session Handover, 2 May 2026 (v2, end of session)

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
- File delivery: I tell you the destination path, you move them. No Staging-based unzip steps.
- DO NOT suggest "stop for the day". I work 12-14 hours. Sessions don't close.
- Tables and short bullets fine.
- Don't describe your reasoning unless I ask.
- Push back honestly. Quality over safe.
- Never describe the project as "ours" or "our". It's mine.
- Goal: meaningful traffic and conversions. Filter every suggestion through that lens.
- "UK Mortgages Worldwide" IS the brand. Not a working name.
- Currency rule: country-appropriate currency where the country is the subject (USD for USA, AED for Dubai, etc.). UK loans/prices in GBP only.

## Project Status (end of 2 May 2026)

### Stack
- Domain: https://ukmortgagesworldwide.com (Vercel + Squarespace DNS)
- Repo: mbmoffat/worldwide-uk-mortgages on main, auto-deploys on push
- Vercel build: GREEN
- Sitemap submitted to Search Console: 42 pages discovered, status Success

### Pages live (~43)
- 1 homepage
- 7 hub pages: /expat-mortgages, /non-uk-resident-mortgages, /uk-mortgage-foreign-income, /uk-mortgage-living-abroad, /seafarer-mortgages, /uk-mortgage-for-foreign-nationals, /expat-mortgages/buy-to-let
- 14 country pages: /expat-mortgages/countries/{australia, canada, dubai, germany, hong-kong, netherlands, new-zealand, norway, qatar, saudi-arabia, singapore, south-africa, switzerland, usa}
- 9 SEO/lender pages from Phase 2: /expat-mortgages/rates, /expat-mortgage-broker, /non-uk-resident-mortgages/buy-to-let, /lenders/hsbc-expat, /expat-mortgages/remortgage, /expat-mortgages/buy-to-let-from-abroad, /uk-mortgage-foreign-income/halifax, /expat-mortgages/deposit, /expat-mortgages/process
- 7 Phase 3 pages added today: /guides/non-resident-landlord-scheme, /guides/nrl1-form-explained, /guides/buying-uk-property-from-overseas, /expat-mortgages/buy-to-let/rates, /expat-mortgages/first-time-buyer, /lenders/skipton-international, /lenders/natwest-international
- 2 situation pages: /expat-mortgages/returning-to-uk, /expat-mortgages/no-uk-credit-history
- 1 guides hub: /guides (full content directory)
- 6 operational pages: /about, /contact, /privacy, /cookies, /terms, /introducer-disclosure (last 4 are pre-launch drafts with [ENTITY NAME TBD] placeholders)
- 2 calculators: /tools/stamp-duty-calculator, /tools/expat-mortgage-calculator
- 1 public sitemap (/sitemap), 1 XML sitemap (/sitemap-index.xml)

### Visual system (LOCKED)
- Headings: Playfair Display 700 (and 800 for header wordmark only)
- Body and buttons: Lora 400 / 700
- UI chrome: Inter
- Background: #FBF6EF cream / Card bg: #FAEFE3 / Accent: #8B2331 burgundy / Text: #1A1612
- Body container: 820px max-width
- All H1s centred, eyebrow + meta on single line above
- Pull quote: 3rem auto external margins
- Primary buttons: 280px width, 0.95rem 1.5rem padding, centred, full-width on mobile <600px
- Calculator card: #FAEFE3 bg, 1px subtle burgundy border, soft shadow, 12px radius, max-width 640px
- Under-button captions: small Inter, secondary colour, centred. Identical style across all CTAs site-wide.
- Favicon: burgundy square (#8B2331) with "UK" top + "MW" bottom in Playfair 800 cream

### Header navigation
Six top-level: Mortgages | Countries | Calculators | Guides | About | Contact (burgundy CTA right)
- Lenders dropdown was added then removed. Lender pages remain crawlable but not promoted in nav.
- Guides dropdown: 14 entries in flat list (no section headings), max-height 70vh with scroll. Items: All Guides, Expat Mortgage Rates, Expat Mortgage Deposit, The Application Process, Expat Remortgaging, Expat Mortgage Broker, Expat First-Time Buyer, Buy-to-Let from Abroad, Expat BTL Rates, Non-Resident Landlord Scheme, NRL1 Form Explained, Buying UK Property from Overseas, Returning to the UK, No UK Credit History.
- Calculators dropdown: Stamp Duty Calculator first, Expat Mortgage Calculator second.

### Contact form
5 fields: First name, WhatsApp/phone, Email, "What country do you mostly live in?", "What can we help with?" (optional). Submit "Talk to a broker" centred. Trust line below: "A mortgage broker will usually respond immediately."
- Currently posts to formsubmit.co/mbmoffat@gmail.com
- Form working confirmed
- Email forwarding enquiry@ukmortgagesworldwide.com to mm@mortgageonefinance.co.uk is BROKEN (Squarespace alias not delivering). Reverted to gmail destination.

### CtaBlock (site-wide standard)
Heading "Talk to a broker about your situation", button "Send an enquiry", caption "A mortgage broker will usually respond immediately." Placed AFTER "Who this page is for" section. Not used on expat calculator (form sits directly under results).

### SEO infrastructure
- Search Console verified under mbmoffat@gmail.com via DNS TXT record (domain property type)
- Sitemap submitted: https://ukmortgagesworldwide.com/sitemap-index.xml. Status: Success. 42 pages discovered.
- Schema markup site-wide: Organization, FAQPage, BreadcrumbList, Service, Article, WebApplication, WebSite (with SearchAction on homepage)
- Canonical URLs every page
- OG and Twitter Card meta every page (og-default.png placeholder)
- Internal linking density across hub/country/situation/SEO pages
- 1 backlink from MortgageOneFinance.co.uk (single contextual in-body link only - DO NOT add more)
- noindex REMOVED site-wide
- 12 priority URL inspection requests submitted in batches as quota allowed
- 6 broken seafarer sub-page links removed from site (caught via Ahrefs Site Audit)

### URL inspection - status
Submitted in earlier sessions (top 6) and today (next 6, up to first-time-buyer page). Remaining 6 deferred when quota exceeded:
- /expat-mortgages/buy-to-let-from-abroad
- /expat-mortgages/remortgage
- /expat-mortgages/buy-to-let/rates
- /uk-mortgage-living-abroad
- /non-uk-resident-mortgages
- /expat-mortgages

NOTE: Search Console URL inspection shows "URL is unknown to Google" for newly built pages, which is normal for brand-new pages. The submitted sitemap will pick them up over the next 1-3 weeks regardless of manual inspection. Manual inspection just speeds up the most important ones.

### Standing copy rules
- British English, no em-dashes, no semicolons, comma restraint, no "get/got"
- Country-appropriate currency. UK loans/prices in GBP only.
- No lender lists on hub pages. Lender pages exist as independent guides.
- WhatsApp pill: "WhatsApp a Mortgage Broker"
- Persona: "we" editorial, "a mortgage broker" advisory
- NO Quilter or Mortgage One references on UKMW
- 20% standard haircut, no-haircut access via specialist broker = THE conversion lever

### Open backlog (ranked on traffic + conversions impact)

1. **Tomorrow: complete remaining URL inspections** (when GSC quota resets - list above)
2. **Build 4 visa-status pages** - identified via Ahrefs as the next highest-value cluster (~1,080/mo at KD 0):
   - /uk-mortgage-for-foreign-nationals/skilled-worker-visa (~700/mo, KD 0)
   - /uk-mortgage-for-foreign-nationals/spouse-visa (~250/mo, KD 0)
   - /uk-mortgage-for-foreign-nationals/without-ilr (~80/mo, KD 0)
   - /uk-mortgage-for-foreign-nationals/bno-visa (~50/mo, low)
   These outrank any tier-2 country page builds. France/Spain/Ireland country pages are tiny volume (20-80/mo at low intent), not worth building.
3. **Switch form destination** to enquiry@ukmortgagesworldwide.com (waiting on Squarespace forwarding fix - currently broken, not delivering)
4. **Compliance pages consultant review** - 4 drafts in repo (privacy, cookies, terms, introducer-disclosure) with [ENTITY NAME TBD] and [REGISTERED ADDRESS TBD] placeholders. Need entity setup + legal review.
5. **More backlinks** (separate workstream, not Claude Code). Mortgage One backlink is single contextual link only - do not add more from there.
6. **Visibility decision pending**: Matt asked about indexing without searchability. Three options offered (Vercel password protection, noindex tag, robots.txt Disallow). No decision made. Site currently indexable.

### Decisions/closures from this session and previous
- R001 closed: UK Mortgages Worldwide IS the brand
- GA4: NOT setting up. Search Console enough.
- Mortgage One Squarespace migration: REJECTED
- Parallel duplicate Mortgage One site: REJECTED (cannibalisation risk)
- Lenders dropdown: REMOVED (lender pages stay crawlable, not in nav)
- Single MortgageOne backlink only - that's the ceiling
- Compliance docs drafted as pre-launch drafts (no legal entity exists yet)
- Calculator UX iteration complete: scroll behaviour, button widths, captions standardised
- Footer cleaned: nav above disclaimer, disclaimer centred, redundant repeat removed
- Favicon: burgundy UK/MW square deployed
- 6 broken seafarer sub-page links found via Ahrefs Site Audit and removed (the linked sub-pages were never built)
- 15 SEO audit fixes applied (WebSite/SearchAction schema, WebApplication on stamp duty calc, Service on broker page, 12 meta descriptions trimmed)
- 7 Phase 3 pages built and deployed (NRL Scheme cluster + first-time buyer + 2 lender pages)
- /guides hub page built as full content directory

### Things that broke (don't repeat)
- GitHub MCPs are dead. All writes via Claude Code on iMac.
- `claude` runs bypass-permissions automatically (alias in ~/.bash_profile)
- /api/enquiry.ts edge function broke build for hours. Form posts directly to formsubmit.co.
- Apostrophes in JS strings broke build. Use double quotes.
- @astrojs/sitemap needed package-lock.json committed.
- Vercel MCP cannot reach Matt's team. Build error logs need pasted from dashboard.
- Don't batch unrelated tasks in Claude Code. Identical-structure batches OK (13 country pages, 9 SEO pages, 7 Phase 3 pages).
- Squarespace email forwarding to mm@mortgageonefinance.co.uk DOES NOT WORK reliably. Form points to gmail.

### Public connection to Matt
- Site presents as anonymous editorial.
- Connection discoverable via: Companies House (when entity exists - currently no entity), WHOIS, the MortgageOne backlink, email replies from mm@mortgageonefinance.co.uk, FCA register cross-reference.
- For casual visitor: invisible. For determined investigator: 5 minutes.
- Right level for an introducer site.
- Matt confirmed introducer model legally fine because he IS the receiving broker.

### Live MCPs available
- Ahrefs (Lite plan, used heavily for keyword research, ~21 units per matching-terms call)
- Vercel (limited, no team access - cannot reach Matt's team via this connector)
- Cloudflare Developer Platform
- Claude in Chrome
GitHub MCP dead.

### File workflow
- I tell you the destination path. You move files. No Staging-based unzip in Claude Code prompts.
- Browser downloads land in ~/Staging.
- Project files live in ~/Projects/worldwide-uk-mortgages/
- Copy files in docs/copy/, handover docs in docs/

## How to start a new chat / Claude Code session

1. Open Terminal.
2. Type: `cd ~/Projects/worldwide-uk-mortgages && claude`
3. Press Enter (alias handles bypass-permissions).
4. Paste prompt at the `>` prompt.

## What I want from this assistant in the next chat

Pick up the backlog above. Cook. Brief. One task per Claude Code run, screenshot, review, next.

Top of list: visa-status pages (4 pages, ~1,080/mo cluster volume, KD 0).
