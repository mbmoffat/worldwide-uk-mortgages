# UK Mortgages Worldwide - Session Handover, 1 May 2026 (v2)

## How I Work - Read First

- No preamble. No fluff. No "Great question". No session-closing language.
- Get to the point. Recommend, don't list every option. Push back honestly when I'm wrong.
- British English. No em-dashes. No semicolons. Comma restraint. No "get" or "got".
- Plain numbered instructions. Tell me exactly what to type or click.
- Never write "ask Claude Code to do X". Tell me what to paste in.
- Format every Claude Code prompt as a single copyable code block I can paste in one go. Use triple-backtick fenced blocks. No prose between paragraphs of the same prompt.
- ALWAYS paste prompts directly in chat. Never tell me to "open the README" or "look in the zip".
- File delivery convention: when there are files to move into the repo, the assistant tells me the destination path. I move them. Don't write Staging-based unzip steps into Claude Code prompts.
- I work 12-14 hours a day. Sessions don't close, I just stop.
- Tables and short bullets fine. No long prose unless the answer needs it.
- Don't describe your reasoning unless I ask.
- Push back honestly. I want quality, not safe answers.
- Never describe the project as "ours" or "our". It's mine.
- The goal is meaningful traffic and conversions. Filter every suggestion through that lens. Anything that doesn't move toward indexing, ranking, or converting goes lower in priority.

## Project Status as of 1 May 2026

### Live and working
- Domain: https://ukmortgagesworldwide.com (Vercel + Squarespace DNS)
- Repo: mbmoffat/worldwide-uk-mortgages on main, auto-deploys on push
- 1 homepage (/)
- 7 hub pages: /expat-mortgages, /non-uk-resident-mortgages, /uk-mortgage-foreign-income, /uk-mortgage-living-abroad, /seafarer-mortgages, /uk-mortgage-for-foreign-nationals, /expat-mortgages/buy-to-let
- 2 situation pages: /expat-mortgages/returning-to-uk, /expat-mortgages/no-uk-credit-history
- 14 country pages: /expat-mortgages/countries/{australia, canada, dubai, germany, hong-kong, netherlands, new-zealand, norway, qatar, saudi-arabia, singapore, south-africa, switzerland, usa}
- 9 SEO pages just added (post-deploy of seo-pages-batch): /expat-mortgages/rates, /expat-mortgage-broker, /non-uk-resident-mortgages/buy-to-let, /lenders/hsbc-expat, /expat-mortgages/remortgage, /expat-mortgages/buy-to-let-from-abroad, /uk-mortgage-foreign-income/halifax, /expat-mortgages/deposit, /expat-mortgages/process
- 6 operational pages: /about, /contact, /privacy, /cookies, /terms, /introducer-disclosure (privacy/cookies/terms/disclosure are PLACEHOLDER, blocked on consultant)
- 1 calculator: /tools/stamp-duty-calculator
- 1 public sitemap: /sitemap (HTML)
- 1 XML sitemap: /sitemap-index.xml (auto-generated)
- Contact form on every page, posts to formsubmit.co/mbmoffat@gmail.com (will switch to enquiry@ukmortgagesworldwide.com once Squarespace forwarding verifies)
- WhatsApp toggle pill, Cloudflare Worker
- Vercel build is GREEN

### Visual system
- Headings: Playfair Display 700 (and 800 for header wordmark only)
- Body and buttons: Lora 400 / 700
- UI chrome (form labels, eyebrow text, footer text, sub-headings): Inter
- Page background: #FBF6EF cream
- Accent: #8B2331 burgundy
- Text: #1A1612 primary, #6B6358 secondary
- Body container: 820px max-width
- All H1s centred. Eyebrow + meta line on a single line above H1, comma-separated
- Pull quote: 3rem auto external margins
- Bullet list spacing parked, slightly off vs body, not blocking
- Favicon: burgundy "UK" monogram SVG (placeholder)

### Header navigation (current structure as of latest deploy)
Six top-level items in this order (after the 9-page batch goes live):
- Mortgages (dropdown): hub pages + non-UK-resident BTL
- Countries (dropdown): 14 country pages alphabetical
- Calculators (dropdown): stamp duty
- Lenders (dropdown, NEW): HSBC Expat, Halifax (Foreign Income)
- Guides (dropdown): situations + new SEO guide pages
- About (single link)
- Contact (burgundy CTA on right)

Wordmark "UK Mortgages Worldwide" is Playfair 800. Nav links and Contact button are Lora 700.

### Contact form spec
5 fields:
1. First name (required)
2. WhatsApp or phone number (required)
3. Email (required)
4. What country do you mostly live in? (required, free text)
5. What can we help with? (optional textarea)
Submit: "Talk to a broker"
Single trust line below button, centred: "A mortgage broker will usually respond immediately."

### CtaBlock spec (site-wide)
- Heading: "Talk to a broker about your situation" (Playfair, centred)
- Button: "Send an enquiry" (burgundy, Lora 700)
- Caption: "A mortgage broker will usually respond immediately."
- Supporting paragraph removed.
- Placement: AFTER "Who this page is for" section, BEFORE next H2.

### SEO and analytics
- **Search Console: VERIFIED** under mbmoffat@gmail.com via DNS TXT record. Property type: Domain.
- **Sitemap submitted**: https://ukmortgagesworldwide.com/sitemap-index.xml
- **GA4: NOT set up.** Skipped, can revisit post-launch when there's traffic to analyse.
- **noindex robots tag still in place** on every page. Removal is the single biggest pre-launch action.

### Email forwarding
- Squarespace alias enquiry@ukmortgagesworldwide.com forwards to mm@mortgageonefinance.co.uk
- Status: PENDING verification last we checked
- Once verified: form action URL switches from formsubmit.co/mbmoffat@gmail.com to formsubmit.co/enquiry@ukmortgagesworldwide.com
- Matt has decided MortgageOne destination is fine because he IS the broker the site refers to

### Standing copy rules
- British English, no em-dashes, no semicolons, comma restraint, no "get/got"
- Use the appropriate currency for the country being discussed (USD for USA expats, AED for Dubai, etc.). UK loan amounts and UK property prices in GBP.
- No lender lists on hub pages. Lender pages (/lenders/...) are independent guides, not promotional copy.
- Standard CTA: "Talk to a broker about your situation" / button "Send an enquiry" / caption "A mortgage broker will usually respond immediately."
- WhatsApp pill: "WhatsApp a Mortgage Broker"
- Persona: "we" for editorial only, "a mortgage broker" for response/advice
- No Quilter or Mortgage One references in any output for this project
- 20% standard currency haircut, no-haircut access via specialist broker relationships is the conversion lever

### Open backlog (recommended order, prioritised on traffic + conversions)
1. **Remove noindex robots meta tag** — the single biggest blocker to traffic. Until removed, Google can't rank the site.
2. Switch form destination to enquiry@ukmortgagesworldwide.com once email forwarding verifies
3. Submit URL inspection requests in Search Console for homepage + top 5 commercial pages once noindex is removed (forces a faster crawl)
4. Internal linking density: cross-link country pages to each other and to hubs (passes authority, signals topical clusters)
5. Schema markup (FAQPage, Article, Breadcrumb) for rich results
6. Foreign-income mortgage calculator (highest-intent tool)
7. Affordability and ICR calculators
8. First backlinks from relevant external sites
9. Replace placeholder copy on /privacy, /cookies, /terms, /introducer-disclosure (compliance consultant - parked)
10. Real favicon (placeholder is current)
11. Brand naming exercise (R001) - replace working name "UK Mortgages Worldwide"

### Things that broke and were fixed (don't repeat)
- Anthropic GitHub Integration MCP is read-only. GitHub Custom MCP gave 7 fights. We do NOT use any MCP for repo writes. All writes via Claude Code on the iMac.
- Don't run `claude --dangerously-skip-permissions` — already aliased in ~/.bash_profile, just `claude` works.
- Don't batch more than 2 tasks at a time in Claude Code in normal flow. Big batches with identical structure (like the 13-country and 9-SEO page batches) can run as one batch.
- /api/enquiry.ts edge function broke build for hours. Form posts directly to formsubmit.co. No edge functions.
- Apostrophes in JS string literals broke build. Always double quotes for JS strings with apostrophes.
- @astrojs/sitemap install needed package-lock.json committed. Lockfile now in repo.
- Vercel MCP cannot reach Matt's team via this connector account. Build error logs need pasted from the dashboard.

### Live MCPs available in this chat
- Ahrefs (active, Lite plan, used heavily)
- Vercel (limited - cannot reach team)
- Cloudflare Developer Platform
- Claude in Chrome
GitHub MCP dead. Workflow: Claude.ai drafts, Matt pastes into Claude Code on iMac.

## How to start a new chat / Claude Code session

1. Open Terminal.
2. Type: `cd ~/Projects/worldwide-uk-mortgages && claude`
3. Press Enter. Claude Code launches in bypass-permissions mode automatically.
4. Type the prompt at the `>` prompt.

## What I want from this assistant in the next chat

Pick up where this stopped. Backlog ranked above. Recommend before listing options. One task per Claude Code run, screenshot, review, next.
