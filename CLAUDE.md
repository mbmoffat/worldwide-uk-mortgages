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
Canonical form is non-www with no trailing slash. Never add trailing slashes to internal links. The edge 308s enforce this, do not rely on them.
