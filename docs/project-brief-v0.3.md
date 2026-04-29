# Lead Generation Site – Project Brief

**Version:** 0.3
**Status:** Living document. Update at the end of every working session.
**Last updated:** 29 April 2026

---

## 1. What this project is

A standalone, unregulated mortgage lead generation website. Distinct brand identity. No FCA authorisation, no advice given on the site, no public association with any other entity Matt is connected to.

Operates as an introducer. The site captures enquiries from long-tail organic search traffic and passes them to FCA-authorised brokers for the regulated conversation.

---

## 2. Strategic positioning

- Lead generation only. Not advice. Not a recommendation engine.
- Separate brand, separate domain, separate visual identity.
- Owning entity: TBC with accountant.
- Revenue model: introducer fees from receiving brokers. Commercial terms TBC.
- Niche: UK expats and non-UK residents (dual primary), with seafarer as specialism page.

---

## 3. Core constraints

- No regulated advice. No recommendations. No "best deal" or "right for you" claims. No rate selection or comparison logic that implies suitability.
- No mention of any other connected entities or "authorised and regulated" wording anywhere on the site.
- Clear introducer disclosure on appropriate pages (likely About, Privacy, footer).
- ICO registration must be in place before any data capture goes live.
- Privacy policy, cookies policy, and terms must be GDPR-compliant and specific to this entity.
- Compliance position to be confirmed by a consultant before launch. Currently parked.
- Standing rules for all output: British English, no em-dashes, comma restraint, no Quilter or Mortgage One references in any output for this project.

---

## 4. Technical architecture

- Site framework: Astro v5 (static site generator)
- Hosting: Vercel (Hobby plan)
- Source control: GitHub, repo `mbmoffat/worldwide-uk-mortgages`
- DNS and edge: Cloudflare (idle until domain registered)
- Form capture: TBD (Vercel native or Formspree, decided in Phase 2)
- Analytics: Google Search Console + GA4 (Phase 4+)
- Keyword research: Ahrefs (Lite plan, MCP-enabled)
- Working files: Strategy and architecture docs in `/docs` inside the repo. Google Drive used for loose working material only.

---

## 5. Live environments

- GitHub repo: https://github.com/mbmoffat/worldwide-uk-mortgages
- Vercel preview URL: https://worldwide-uk-mortgages-tue4.vercel.app/
- Local working folder: `~/Projects/worldwide-uk-mortgages`
- Repo visibility: Public (temporary, flip to private once write-permissions issue is no longer a factor)

---

## 6. How to change the website

This is the practical guide. Day-to-day, all build work happens in Claude Code on the iMac. Vercel auto-deploys whatever lands on the `main` branch.

### Every session, in three steps

1. Open Terminal.
2. Type: `cd ~/Projects/worldwide-uk-mortgages && claude`
3. At the `>` prompt, tell Claude Code what to change in plain English.

Claude Code edits files, commits to GitHub, pushes. Vercel rebuilds. Live URL updates within 1-2 minutes.

### Useful Claude Code shortcuts

- Press `shift+tab` once at the start of each session to enter "accept edits on" mode. Stops it asking permission for every routine file edit.
- `/exit` to leave Claude Code.
- `/help` for command reference.
- Prefix any command with `!` to run it as a shell command (e.g. `!git log` to see commit history).

### Example prompts

Practical changes you might ask Claude Code to make:

- "Change the homepage headline to 'UK Mortgages for Expats and Non-Residents'."
- "Add a new page at /expat-mortgages about UK expat mortgage applications."
- "Add a contact form to the homepage with name, email, message fields, sending to mbmoffat@gmail.com."
- "The status section on the homepage looks too cluttered. Simplify it."
- "What does the build look like right now? Show me the homepage running locally."
- "Roll back the last commit, the change broke the layout."
- "Add Open Graph meta tags to the homepage for sharing on social."

Vague prompts also work. "The homepage looks dated, modernise it" will produce options.

### Safety

- All changes are tracked in git. Anything Claude Code does can be undone. Worst case, ask it to roll back the last commit.
- Branch previews. Ask Claude Code to "work on a branch called X" before risky changes. Vercel will deploy that branch to a separate preview URL without touching the live URL.
- Vercel deploys are atomic. A broken push on `main` will fail to build rather than break a working live site.

### Where files live

Inside `~/Projects/worldwide-uk-mortgages`:

- `src/pages/` - one file per page (`.astro`)
- `src/layouts/` - shared page wrappers (head, header, footer)
- `src/components/` - reusable bits (buttons, forms, cards)
- `src/styles/` - global CSS
- `public/` - images, favicon, static assets
- `docs/` - strategy, architecture, keyword research, page maps
- `astro.config.mjs` - site config and constants like `SITE_NAME`
- `package.json` - dependencies

You don't need to know this to work with Claude Code. You can ask "where's the homepage code?" and it'll tell you.

---

## 7. Two Claudes – division of labour

Claude.ai web (this interface):
- Strategy and planning
- Copy drafting and review (paste in copy for me to edit)
- SEO research and keyword analysis (with Ahrefs MCP)
- Lender criteria research
- Compliance review of public-facing content (Phase 4+)
- Anything that doesn't directly touch the codebase

Claude Code (Terminal):
- All file edits and commits
- Page templates and components
- Calculator builds
- Local testing
- Git operations
- Anything that needs to read or write files in the repo

A common pattern: draft copy with me here, copy it across, ask Claude Code to put it into the right page.

---

## 8. Working method

Each session typically:

1. Matt opens Claude Code in the project folder.
2. Agrees scope of the session (with me here, or directly with Claude Code).
3. Claude Code does the work, commits, pushes.
4. Vercel auto-builds. Matt reviews on the live URL or a branch preview URL.
5. If good, leave on `main`. If not, Claude Code rolls back or iterates.
6. Resource Engine and Build Log updated at session end (here in Claude.ai web).

---

## 9. Resource Engine

Live working layer of the project.

### 9.1 Open Requests

| ID | What | Why needed | Raised | Status |
|---|---|---|---|---|
| R001 | Real brand name and `.com` domain | Replace working name "Worldwide UK Mortgages" before launch | 29 Apr 2026 | Open. Constraint added: avoid heavily expat-led names that would undermine ownership of the non-resident vocabulary. |
| R002 | Form submission service decision (Vercel native vs Formspree) | Phase 2 build trigger | 29 Apr 2026 | Open |
| R003 | Tone-of-voice references (existing copy Matt likes the feel of) | Inform homepage and hub page copy | 29 Apr 2026 | Open |
| R004 | Visual brand direction (mood, photographic style) | Phase 1 template design | 29 Apr 2026 | Open |
| R005 | Niche page priorities (which expat / seafarer angle first) | Phase 1 page map | 29 Apr 2026 | Resolved (see `/docs/keyword-universe-v1.0.md`) |

### 9.2 Decisions Made

| ID | Decision | Date | Rationale |
|---|---|---|---|
| D001 | Niche: UK expats, seafarers, UK residential | 29 Apr 2026 | Defined by Matt at session 1 |
| D002 | Stack: Astro + Vercel + GitHub + Cloudflare | 29 Apr 2026 | Performance, programmatic page generation, low running cost, branch-preview workflow |
| D003 | Working name: Worldwide UK Mortgages | 29 Apr 2026 | Anchor Mortgages name was already in commercial use. Placeholder for development; real brand TBD |
| D004 | Form submission destination: `mbmoffat@gmail.com` | 29 Apr 2026 | Clean separation from existing inboxes during dev. Will swap to `enquiries@[realdomain]` post-launch |
| D005 | Build interface: Claude Code on iMac (not Claude.ai custom MCP) | 29 Apr 2026 | Custom MCP for GitHub on Claude.ai is read-only. Claude Code provides full local read/write via system git/gh, no token management |
| D006 | Ahrefs Lite annual subscription, $99/month | 29 Apr 2026 | Unlocks MCP-driven keyword research for this project plus ongoing SEO work for Mortgage One. Single tool covering both. |
| D007 | Lead niche is UK expats AND non-UK residents (dual anchor). Seafarer is specialism page only, not lead. | 29 Apr 2026 | Ahrefs data: seafarer cluster under 200 monthly searches total. Expat plus non-resident clusters together carry 3,500+ monthly searches of qualified intent. |
| D008 | Architecture uses two primary anchors with separate URL roots: `/expat-mortgages` and `/non-uk-resident-mortgages` | 29 Apr 2026 | Different searcher vocabularies, same audience. Both must be owned. Most competitors only target the first. |
| D009 | Strategy and architecture documents live in `/docs` inside the repo. Google Drive used for loose working material only. | 29 Apr 2026 | `/docs` travels with the build, version-controlled by git, accessible to Claude Code. |

### 9.3 Resources Provided

| ID | Resource | Location | Date provided |
|---|---|---|---|
| RP001 | GitHub account | `mbmoffat` | 29 Apr 2026 |
| RP002 | GitHub repo | `mbmoffat/worldwide-uk-mortgages` | 29 Apr 2026 |
| RP003 | Vercel account, project linked to repo | Vercel dashboard | 29 Apr 2026 |
| RP004 | Cloudflare account | Cloudflare dashboard | 29 Apr 2026 |
| RP005 | Claude Code installed on iMac | `~/Projects/worldwide-uk-mortgages` | 29 Apr 2026 |
| RP006 | gh CLI authenticated | macOS Keychain | 29 Apr 2026 |
| RP007 | Vercel and Cloudflare MCP connected to Claude.ai | Settings > Connectors | 29 Apr 2026 |
| RP008 | Ahrefs Lite subscription | Annual billing, MCP-enabled | 29 Apr 2026 |
| RP009 | Keyword universe v1.0 | `/docs/keyword-universe-v1.0.md` in repo | 29 Apr 2026 |

### 9.4 Parked

| ID | Item | Why parked | Review when |
|---|---|---|---|
| P001 | Compliance consultant engagement and FCA perimeter confirmation | Deferred per Matt | Before any data capture goes live |
| P002 | Switch form destination from `mbmoffat@gmail.com` to `enquiries@[realdomain]` | Pending real domain registration | Phase 4 launch prep |
| P003 | Flip repo from public back to private | Pending verification that workflow doesn't depend on public access | After 2-3 successful Claude Code sessions |

### 9.5 Likely future request categories

- Brand naming brief and final selection (with constraint: avoid heavily expat-led names that would undermine ownership of the non-resident vocabulary)
- Tone-of-voice references
- Visual brand direction
- Commercial structure (entity, lead handover, fee terms)
- Compliance sign-off on introducer position
- Domain registration
- Imagery licensing
- Policy documents (privacy, cookies, terms, introducer disclosure)
- Calculator scope and inputs
- Schema markup decisions per template
- Competitor SERP audit and backlink analysis (to refine Phase 2 build order)
- Country-specific keyword sweeps for Cluster G (Phase 3 country pages)

---

## 10. Phase plan

Phase 0 – Foundation. COMPLETE. Stack confirmed. Niche defined. Working name in place. Build pipeline live (GitHub > Vercel auto-deploy). Claude Code wired up. Compliance parked.

Phase 1 – Architecture. CURRENT. Site spec written. Page map drafted. Keyword universe mapped (via Ahrefs). Template designs agreed. Brand direction set.
- Keyword universe: complete (v1.0)
- Niche priorities: resolved
- Page map proper: not started
- Brand direction: not started
- Tone-of-voice: not started
- Competitor SERP audit: not started

Phase 2 – Build. Templates coded. Calculators built. Homepage, hub pages, and core niche landing pages live on staging.

Phase 3 – Content scale. Long-tail landing page network generated. Content hub articles published.

Phase 4 – Launch. Real domain registered. Brand finalised. Compliance signed off. Search Console and GA4 wired. Forms tested end-to-end.

Phase 5 – Maintain and grow. Ongoing content. Performance optimisation. New niche expansions.

---

## 11. Build Log

| Date | Session focus | Outcome | Next |
|---|---|---|---|
| 29 Apr 2026 | Foundation. Stack confirm, niche set, accounts created, Claude Code installed, scaffold pushed, first Vercel deploy | Phase 0 complete. Live preview URL active | Phase 1 architecture: page map, keyword universe, brand direction |
| 29 Apr 2026 (PM) | Phase 1 keyword research | Ahrefs Lite subscribed. Full keyword universe research completed via MCP across nine seed sweeps. Four-vocabulary architecture identified (expat, non-UK resident, mortgage abroad, foreign income). Document v1.0 produced, committed to `/docs`, supersedes v0.1. R005 resolved. | Brand naming brief, page map proper, competitor SERP audit |
