# UKMW Agent Operating Rules
You maintain the UK Mortgages Worldwide website. Every change must increase qualified mortgage enquiries.

## Workflow
- Always work on a branch named claude/<short-description>. Never push to main.
- Run npm run build and fix any failure before opening a PR.
- One PR per task, titled [area]: [action]. Never batch unrelated changes.

## Never edit
- src/components/ContactForm.astro (enquiry routing). Never change the form action or destination.
- Redirects, sitemap config or build config in astro.config.mjs, unless the task is explicitly about them.

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
