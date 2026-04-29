# Page Map v1.0

**Project:** Worldwide UK Mortgages (working name)
**Phase:** 1 (Architecture)
**Version:** 1.0
**Date:** 29 April 2026
**Status:** Draft. To be ratified and committed to `/docs/page-map-v1.0.md`.
**Companion document:** `/docs/keyword-universe-v1.0.md`

---

## 1. Purpose

This document is the working architecture of the site at maturity. It defines every page that will exist, the template each page uses, how pages link to each other, what schema each carries, and the order in which they get built.

It is the second of three foundational architecture documents. Keyword universe was first. Brand and tone come third. Build work in Phase 2 will reference this document directly. When the page map changes, this document changes and the version increments.

## 2. Architecture principles

Five principles drive every decision below.

**Two anchor vocabularies, equal weight.** The site is built around `/expat-mortgages` and `/non-uk-resident-mortgages` as co-equal anchors, not synonyms. Each owns its own URL root, its own internal link structure, and its own breadcrumb trail. They cross-link as related territory, not as the same page under a different name.

**Hub and spoke, never flat.** Anchor pages hub. Sub-niche, situation, country, currency and lender pages spoke. Every spoke links up to its parent hub and sideways to siblings. No orphan pages.

**Programmatic where the data justifies it.** Country, currency and lender pages share a template and a content shape. They scale by data, not by hand-crafted prose. Hand-crafted exceptions exist where the long tail justifies the effort, Australia being the obvious one.

**Calculators are conversion machines.** Tools live in their own URL space at `/tools/`. Every calculator has a single primary purpose and a strong CTA. Calculators that do not convert get rebuilt or retired, not patched.

**Editorial authority lives in `/guides/`.** The article layer carries topical authority. Articles link out to hubs, hubs link in to articles. The two layers are interdependent. Neither works without the other.

## 3. URL structure rules

URL slugs follow these rules without exception.

Hubs and anchors are flat at the root. `/expat-mortgages`, `/non-uk-resident-mortgages`, `/uk-mortgage-living-abroad`, `/uk-mortgage-foreign-income`, `/seafarer-mortgages`, `/uk-mortgage-for-foreign-nationals`.

Spokes nest under their parent. `/expat-mortgages/buy-to-let`, `/expat-mortgages/returning-to-uk`, `/expat-mortgages/no-uk-credit-history`. Two levels deep is the maximum. Three-level URLs are forbidden.

Programmatic page sets nest under their parent with a clear category segment. `/uk-mortgage-foreign-income/lenders/halifax`, `/uk-mortgage-foreign-income/currencies/usd`, `/expat-mortgages/countries/australia`. The category segment makes the parent-child relationship legible and gives breadcrumbs somewhere sensible to land.

Tools live at `/tools/`. Articles live at `/guides/`. Both are flat. No nested categories at this stage. If `/guides/` exceeds 60 articles, we will introduce category segments at that point, not before.

Slugs are lower case, hyphenated, no trailing slashes, no file extensions. Country and currency slugs use the common English name, not the ISO code, with one exception: where the ISO code is the more recognised search term (`/usd`, `/eur`, `/aed`), use the ISO code. This will be confirmed against actual search data per page.

## 4. Site tree at a glance

```
/
│
├── /expat-mortgages
│   ├── /expat-mortgages/buy-to-let
│   ├── /expat-mortgages/returning-to-uk
│   ├── /expat-mortgages/no-uk-credit-history
│   ├── /expat-mortgages/joint-application-foreign-spouse
│   ├── /expat-mortgages/first-time-buyer
│   ├── /expat-mortgages/interest-only
│   ├── /expat-mortgages/large-mortgages
│   ├── /expat-mortgages/remortgage
│   └── /expat-mortgages/countries/
│       ├── /australia
│       ├── /usa
│       ├── /uae
│       ├── /singapore
│       ├── /hong-kong
│       ├── /saudi-arabia
│       ├── /qatar
│       ├── /switzerland
│       ├── /germany
│       ├── /netherlands
│       ├── /norway
│       ├── /canada
│       ├── /new-zealand
│       └── /south-africa
│
├── /non-uk-resident-mortgages
│   ├── /non-uk-resident-mortgages/buy-to-let
│   ├── /non-uk-resident-mortgages/joint-application
│   └── /non-uk-resident-mortgages/foreign-national
│
├── /uk-mortgage-living-abroad
│
├── /uk-mortgage-foreign-income
│   ├── /uk-mortgage-foreign-income/lenders/
│   │   ├── /halifax
│   │   ├── /santander
│   │   ├── /natwest
│   │   ├── /hsbc
│   │   ├── /barclays
│   │   ├── /nationwide
│   │   ├── /skipton-international
│   │   └── /keystone
│   └── /uk-mortgage-foreign-income/currencies/
│       ├── /usd
│       ├── /eur
│       ├── /aed
│       ├── /sgd
│       ├── /hkd
│       ├── /chf
│       ├── /sar
│       ├── /qar
│       ├── /aud
│       ├── /nok
│       └── /cad
│
├── /seafarer-mortgages
│   ├── /seafarer-mortgages/seafarers-earnings-deduction
│   ├── /seafarer-mortgages/captain
│   ├── /seafarer-mortgages/deck-officer
│   ├── /seafarer-mortgages/chief-engineer
│   ├── /seafarer-mortgages/superyacht-crew
│   └── /seafarer-mortgages/offshore-wind
│
├── /uk-mortgage-for-foreign-nationals
│
├── /tools/
│   ├── /tools/expat-mortgage-calculator
│   ├── /tools/expat-buy-to-let-calculator
│   ├── /tools/foreign-income-mortgage-calculator
│   ├── /tools/stamp-duty-calculator
│   ├── /tools/seafarer-mortgage-calculator
│   └── /tools/returning-expat-calculator
│
├── /guides/
│   └── (40+ articles, see section 7)
│
├── /about
├── /contact
├── /enquiry
├── /privacy-policy
├── /cookies-policy
├── /terms
└── /introducer-disclosure
```

Page count at maturity: roughly 110 pages. Phase 2 build target: 25 pages.

## 5. Template inventory

The whole site runs on seven templates. Adding an eighth requires a deliberate decision and a recorded reason. Template proliferation is the enemy of consistency and the friend of bloat.

**T1: Home.** The homepage. One instance only. Purpose: orient the visitor in under five seconds and route them to the most relevant anchor. Hero, four anchor cards, three calculator cards, social proof block, founder bio block, FAQ block, CTA. Word count target 800 to 1,200.

**T2: Hub.** The four anchor pages plus the sub-niche hubs. Two-column long-form layout with a sticky right-hand CTA. Includes hero, situation summary, criteria summary, lender appetite block, eligibility block, application steps, foreign-income or geographic angle as relevant, FAQs, related pages, CTA. Word count target 2,000 to 3,000.

**T3: Situation.** Tier 4 stage and situation pages. Same shape as T2 but lighter. Word count target 1,200 to 1,800. Same conversion mechanics.

**T4: Programmatic.** Country, currency, lender pages. Data-driven. Each page populated from a structured data file (lender object, currency object, country object) so that consistency is enforced and updates are bulk-editable. Word count target 800 to 1,200, of which roughly 400 to 600 is genuinely unique per page and the remainder is structural framing.

**T5: Calculator.** Single calculator per page. Inputs panel, results panel, explanation block underneath, "what next" CTA driving to enquiry form. No advice text. All calculators carry an explicit calculator-not-advice notice. Word count target 600 to 900 around the calculator UI itself.

**T6: Article.** Editorial guide pages at `/guides/`. Standard long-form article shape. Author byline (founder), published date, last reviewed date, table of contents for articles over 1,500 words, FAQs at end, CTA at end, related articles. Word count target 1,500 to 2,500.

**T7: Operational.** About, Contact, Enquiry, Privacy, Cookies, Terms, Introducer Disclosure. Lighter editorial pages with operational purpose. Word count target varies by page.

## 6. Page inventory by template

Phase numbers indicate build order, not importance.

### T1: Home

| URL | Phase | Notes |
|---|---|---|
| `/` | 2 | Built last in Phase 2 once anchor pages exist to link to |

### T2: Hub

| URL | Cluster | Phase | Build priority |
|---|---|---|---|
| `/non-uk-resident-mortgages` | B | 2 | First. Lowest difficulty, biggest opportunity |
| `/uk-mortgage-living-abroad` | C | 2 | Second. Builds topical authority |
| `/expat-mortgages` | A | 2 | Third. Brand-recognised anchor |
| `/uk-mortgage-foreign-income` | D | 2 | Fourth. Highest conversion intent |
| `/expat-mortgages/buy-to-let` | F | 2 | Fifth. Highest lead value |
| `/seafarer-mortgages` | H | 2 | Sixth. Specialism signal |
| `/uk-mortgage-for-foreign-nationals` | E | 2 | Seventh |

### T3: Situation

| URL | Parent | Phase |
|---|---|---|
| `/expat-mortgages/returning-to-uk` | Expat | 2 |
| `/expat-mortgages/no-uk-credit-history` | Expat | 2 |
| `/expat-mortgages/first-time-buyer` | Expat | 3 |
| `/expat-mortgages/joint-application-foreign-spouse` | Expat | 3 |
| `/expat-mortgages/interest-only` | Expat | 3 |
| `/expat-mortgages/large-mortgages` | Expat | 3 |
| `/expat-mortgages/remortgage` | Expat | 3 |
| `/non-uk-resident-mortgages/buy-to-let` | Non-resident | 3 |
| `/non-uk-resident-mortgages/joint-application` | Non-resident | 3 |
| `/non-uk-resident-mortgages/foreign-national` | Non-resident | 3 |
| `/seafarer-mortgages/seafarers-earnings-deduction` | Seafarer | 3 |

### T4: Programmatic, country pages

Australia is the only Phase 2 country page, hand-crafted. The remainder are Phase 3 programmatic builds from a single template populated by per-country data.

| URL | Phase | Notes |
|---|---|---|
| `/expat-mortgages/countries/australia` | 2 | Hand-crafted. Highest country volume in Cluster G |
| `/expat-mortgages/countries/usa` | 3 | Programmatic |
| `/expat-mortgages/countries/uae` | 3 | Programmatic |
| `/expat-mortgages/countries/singapore` | 3 | Programmatic |
| `/expat-mortgages/countries/hong-kong` | 3 | Programmatic |
| `/expat-mortgages/countries/saudi-arabia` | 3 | Programmatic |
| `/expat-mortgages/countries/qatar` | 3 | Programmatic |
| `/expat-mortgages/countries/switzerland` | 3 | Programmatic |
| `/expat-mortgages/countries/germany` | 3 | Programmatic |
| `/expat-mortgages/countries/netherlands` | 3 | Programmatic |
| `/expat-mortgages/countries/norway` | 3 | Programmatic. Strong tie-in with offshore worker content |
| `/expat-mortgages/countries/canada` | 3 | Programmatic |
| `/expat-mortgages/countries/new-zealand` | 3 | Programmatic |
| `/expat-mortgages/countries/south-africa` | 3 | Programmatic |

A second wave of country candidates needs validation before build: Bahrain, Oman, Kuwait, France, Spain, Japan, Thailand. France and Spain skew retiree, lower mortgage demand. Japan and Thailand have lender restrictions that reduce conversion probability. Bahrain, Oman and Kuwait are likely worth building but volume needs sizing.

### T4: Programmatic, currency pages

| URL | Phase | Notes |
|---|---|---|
| `/uk-mortgage-foreign-income/currencies/usd` | 3 | Highest priority |
| `/uk-mortgage-foreign-income/currencies/eur` | 3 | |
| `/uk-mortgage-foreign-income/currencies/aed` | 3 | High intent, UAE-resident expats |
| `/uk-mortgage-foreign-income/currencies/sgd` | 3 | |
| `/uk-mortgage-foreign-income/currencies/hkd` | 3 | |
| `/uk-mortgage-foreign-income/currencies/chf` | 3 | |
| `/uk-mortgage-foreign-income/currencies/sar` | 3 | |
| `/uk-mortgage-foreign-income/currencies/qar` | 3 | |
| `/uk-mortgage-foreign-income/currencies/aud` | 3 | Pairs with Australia country page |
| `/uk-mortgage-foreign-income/currencies/nok` | 3 | Pairs with offshore wind content |
| `/uk-mortgage-foreign-income/currencies/cad` | 3 | |

### T4: Programmatic, lender pages

Lender pages target the criteria-led "[lender] mortgage foreign income" vocabulary. They sit under the foreign-income anchor for that reason. Branded lender pages are commercially powerful but need a quick check that they sit comfortably within the introducer position. Parked under P001 in the project Resource Engine until compliance review.

| URL | Phase | Notes |
|---|---|---|
| `/uk-mortgage-foreign-income/lenders/halifax` | 3 | Highest branded volume in cluster |
| `/uk-mortgage-foreign-income/lenders/santander` | 3 | |
| `/uk-mortgage-foreign-income/lenders/natwest` | 3 | |
| `/uk-mortgage-foreign-income/lenders/hsbc` | 3 | Includes HSBC Expat |
| `/uk-mortgage-foreign-income/lenders/barclays` | 3 | |
| `/uk-mortgage-foreign-income/lenders/nationwide` | 3 | |
| `/uk-mortgage-foreign-income/lenders/skipton-international` | 3 | Specialist, different angle |
| `/uk-mortgage-foreign-income/lenders/keystone` | 3 | BTL specialist |

### T5: Calculator

| URL | Phase | Notes |
|---|---|---|
| `/tools/expat-mortgage-calculator` | 2 | Primary conversion magnet. Affordability with foreign-currency haircut option |
| `/tools/expat-buy-to-let-calculator` | 2 | ICR-based, expat lender stress rates |
| `/tools/stamp-duty-calculator` | 2 | Cheap to build, drives backlinks. Includes 2% non-resident surcharge logic |
| `/tools/foreign-income-mortgage-calculator` | 2 | Currency haircut applied across major currencies |
| `/tools/seafarer-mortgage-calculator` | 3 | Different intent flag than standard expat |
| `/tools/returning-expat-calculator` | 3 | Sub-set of expat audience |

### T6: Article

The article layer at `/guides/` builds topical authority and supports every hub page. Articles split into three batches.

**Phase 2 article batch (priority 8, before launch):**

- `how-to-get-a-uk-mortgage-as-a-british-expat`
- `how-long-does-an-expat-mortgage-take`
- `what-documents-do-i-need-for-an-expat-mortgage`
- `what-deposit-do-i-need-for-an-expat-mortgage`
- `how-is-foreign-income-converted-for-uk-mortgages`
- `can-i-get-a-uk-mortgage-with-no-uk-credit-history`
- `common-reasons-expat-mortgages-get-declined`

**Phase 3 article batch (post-launch, content scale):**

- `what-is-the-seafarers-earnings-deduction`
- `how-to-claim-sed-while-keeping-uk-mortgage-eligibility`
- `how-to-remortgage-from-abroad-when-your-fix-ends`
- `returning-to-uk-what-to-do-six-months-out-for-your-mortgage`
- `how-exchange-rate-movement-affects-expat-affordability`
- `high-risk-countries-and-uk-mortgage-applications`
- `non-uk-resident-vs-expat-which-applies-to-you`
- `lender-stress-tests-explained-for-expats`
- `interest-only-vs-repayment-for-expat-buy-to-let`
- `expat-btl-portfolio-landlord-rules-explained`

**Phase 3 article batch (programmatic question pages):**

A larger set of question-led articles answering individual long-tail variants from Cluster C. Generated from a question template populated with the specific question, context and answer. Roughly 25 to 40 pages depending on validation. Examples:

- `can-you-get-a-uk-mortgage-if-you-work-abroad`
- `can-i-get-a-uk-mortgage-if-i-live-abroad`
- `can-you-have-a-uk-mortgage-if-you-live-abroad`
- `uk-mortgage-living-abroad-tax-implications`

### T7: Operational

| URL | Phase | Notes |
|---|---|---|
| `/about` | 2 | Founder bio, introducer position stated, who handles regulated advice (FCA-authorised broker, name TBC) |
| `/contact` | 2 | Form and contact details |
| `/enquiry` | 2 | Dedicated long-form enquiry page, deeper qualifying questions than the inline forms |
| `/privacy-policy` | 2 | GDPR-compliant, specific to this entity. ICO registration referenced |
| `/cookies-policy` | 2 | Specific to this entity |
| `/terms` | 2 | Site terms of use |
| `/introducer-disclosure` | 2 | Plain-English explanation of the introducer relationship and how leads are passed |

## 7. Navigation architecture

### Header

Primary navigation, left to right after the logo:

- **Mortgages** (drop-down)
  - Expat Mortgages
  - Non-UK Resident Mortgages
  - UK Mortgage Living Abroad
  - Foreign Income Mortgages
  - Buy-to-Let for Expats
  - Foreign Nationals in UK
  - Seafarer Mortgages
- **Calculators** (drop-down)
  - Expat Mortgage Calculator
  - Expat Buy-to-Let Calculator
  - Foreign Income Calculator
  - Stamp Duty Calculator
- **Guides**
- **About**
- **Contact** (CTA-styled button)

The drop-downs are accessibility-friendly mega-menus, keyboard operable, with the most important target first.

### Footer

Four columns plus a bottom strip.

Column 1: Mortgages (links to all hub pages)
Column 2: Calculators (links to all calculators)
Column 3: Popular Guides (links to top 6 articles, hand-curated)
Column 4: Information (About, Contact, Privacy, Cookies, Terms, Introducer Disclosure)

Bottom strip: copyright line, ICO registration number, plain-English introducer notice, "We do not provide regulated mortgage advice. We pass enquiries to FCA-authorised mortgage brokers."

## 8. Internal linking rules

Internal linking is structural, not editorial. The link structure is defined here so that every page knows what to link to without per-page decisions.

**From an anchor hub.** Link down to every direct child sub-niche, every situation page sitting under it, every relevant programmatic page (countries from `/expat-mortgages`, currencies and lenders from `/uk-mortgage-foreign-income`), every relevant calculator, and the top 3 articles in `/guides/` covering that territory. Cross-link sideways to the other anchor hubs as related vocabulary.

**From a sub-niche or situation page.** Link up to parent anchor (breadcrumb plus contextual in-body link). Link sideways to two or three sibling pages. Link to one calculator, one article. Do not link down to programmatic pages from situation pages, this gets noisy.

**From a programmatic page.** Link up to parent anchor. Link sideways to three to five sibling programmatic pages of the same type (other countries, other currencies, other lenders), chosen to be the most relevant comparisons rather than alphabetical. Link to one calculator. Link to one article.

**From a calculator.** Link up to the most relevant hub. Link to the enquiry form. No other body links. Calculators are conversion-focused.

**From an article.** Link to the most relevant hub at least twice (early and late). Link to one or two related articles. Link to a calculator if the topic naturally warrants one.

**Breadcrumbs.** Every page below the root carries a breadcrumb. Breadcrumb depth follows URL depth, never deeper.

**Footer links.** Every page in the site links to every page in the footer. The footer carries the operational pages and the most-trafficked discovery routes.

## 9. Schema mapping per template

Schema is applied at template level, not per page, except where a page-specific override is recorded.

| Template | Schema types |
|---|---|
| T1 Home | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` (single root crumb) |
| T2 Hub | `Service`, `WebPage`, `BreadcrumbList`, `FAQPage` (where FAQs are present) |
| T3 Situation | `Service`, `WebPage`, `BreadcrumbList`, `FAQPage` (where present) |
| T4 Programmatic | `Service`, `WebPage`, `BreadcrumbList`, `FAQPage` |
| T5 Calculator | `WebApplication`, `WebPage`, `BreadcrumbList` |
| T6 Article | `Article`, `WebPage`, `BreadcrumbList`, `FAQPage` (where present) |
| T7 Operational | `WebPage`, `BreadcrumbList`, `AboutPage` for `/about`, `ContactPage` for `/contact` |

`Organization` schema is rendered once on the home template only. `WebSite` schema with `SearchAction` is rendered once on the home template only. Both are referenced by ID from every other page so that the relationship is explicit.

## 10. Conversion architecture

Conversion is the reason the site exists. The architecture below is defined now so it does not get retrofitted later.

**Inline forms** appear on every hub page (T2), every situation page (T3), every programmatic page (T4), and every article (T6). Three fields: name, email, message. The form copy varies by page context so that the question matches the page intent. Submission destination: `mbmoffat@gmail.com` during development, swapping to `enquiries@[realdomain]` post-launch (parked under P002).

**Calculator forms** appear at the bottom of every calculator (T5). Triggered by a "Get help with your numbers" CTA. Pre-populates with the calculator inputs so the broker receiving the enquiry sees the figures the visitor was working with.

**Dedicated `/enquiry` page** is the long-form route. Five to seven qualifying questions (current location, target property location, deposit available, foreign income currency, employment type, target purchase timeline). This is the page linked from every header CTA and every footer.

**Sticky right-hand CTA** on hub and situation pages. Single primary action (open inline form on the same page) with secondary action (link to `/enquiry`).

**No phone number on the site at launch.** Contact is form-only until the operational handover with the receiving broker is defined. Phase 4 decision.

**No live chat at launch.** Re-evaluate at Phase 5.

## 11. Phase 2 build sequence

Strict order. Each item must be complete and live on the preview URL before the next begins. Dependencies noted.

1. **Templates first.** T2 hub template, T3 situation template, T7 operational template. Built once, populated many times.
2. **`/non-uk-resident-mortgages`** (T2). First content page. Easiest cluster, biggest opportunity.
3. **`/uk-mortgage-living-abroad`** (T2). Second. Builds topical authority.
4. **`/expat-mortgages`** (T2). Third. Brand-recognised anchor.
5. **`/uk-mortgage-foreign-income`** (T2). Fourth. Conversion intent.
6. **`/expat-mortgages/buy-to-let`** (T2). Fifth. Highest lead value.
7. **`/tools/expat-mortgage-calculator`** (T5). Conversion magnet. Slots in here so it has hub pages to link from.
8. **Phase 2 article batch.** Seven articles in `/guides/`. Topical authority for the hubs.
9. **`/seafarer-mortgages`** (T2). Specialism signal.
10. **`/uk-mortgage-for-foreign-nationals`** (T2).
11. **`/expat-mortgages/returning-to-uk`** (T3).
12. **`/expat-mortgages/no-uk-credit-history`** (T3).
13. **`/expat-mortgages/countries/australia`** (T2 hand-crafted, not the country template). Highest country volume justifies hand-build.
14. **Remaining Phase 2 calculators.** Expat BTL, Stamp Duty, Foreign Income.
15. **Operational pages.** About, Contact, Enquiry, Privacy, Cookies, Terms, Introducer Disclosure.
16. **Home page** (T1). Built last so it links to live pages, not placeholders.
17. **Sitemap, robots.txt, schema validation, internal-link audit.**
18. **Pre-launch review.** Compliance sign-off. ICO registration confirmed live. Forms tested end-to-end.

Phase 2 deliverable: 25 pages live on preview URL. Real domain registration and launch is Phase 4, after compliance sign-off.

## 12. Phase 3 build sequence outline

Phase 3 is content scale. Order is less prescriptive because pages can be built in parallel.

1. **Programmatic templates.** T4 country, T4 currency, T4 lender. Built once, populated by data files.
2. **Country pages**, populated from country data file. Order by volume signal.
3. **Currency pages**, populated from currency data file. USD first.
4. **Lender pages**, populated from lender data file. Halifax first. Subject to compliance check (P001).
5. **Question hub article batch**, programmatic from question template.
6. **Phase 3 article batch**, hand-crafted long-form articles.
7. **Phase 3 calculators.** Seafarer calculator, Returning Expat calculator.
8. **Tier 4 situation pages** not built in Phase 2.
9. **Seafarer profession pages**, validated first against Cluster H volume data.

## 13. Decisions still open

The page map cannot fully resolve until the following are decided.

**Brand and domain.** Some architectural choices flex with the brand. A heavily expat-led brand name biases the anchor weighting toward Cluster A and weakens the "non UK resident" positioning. Recommend holding final architecture sign-off until brand is set. Page map structure remains valid in either case, the on-page emphasis and homepage hero copy do not.

**Form submission service.** Vercel native or Formspree. Phase 2 trigger. Open as R002.

**Calculator scope detail.** This document lists six calculators. Each one needs its own input/output specification before build. Recommend a dedicated session per calculator.

**Lender pages and the introducer position.** Branded lender pages may sit awkwardly with an introducer-only position depending on how compliance reads it. Parked under P001.

**Country page volume sizing for second-wave countries.** Bahrain, Oman, Kuwait need a fresh Ahrefs sweep before build. Not blocking Phase 2.

**SEO title and meta description templates per page type.** Not in this document. Will be drafted alongside the brand and tone work, then populated against the page inventory above.

## 14. Document control

This document is committed to `/docs/page-map-v1.0.md` once ratified. Changes increment the version. Major changes (new template, restructured URL roots) trigger a new minor version. Page additions and reordering within phase do not.

Companion documents:

- `/docs/keyword-universe-v1.0.md` (ratified)
- `/docs/page-map-v1.0.md` (this document)
- `/docs/brand-and-tone-v1.0.md` (not yet drafted)
- `/docs/template-specs-v1.0.md` (not yet drafted, drafts in Phase 2)

---

*Document ends. Status: draft v1.0 awaiting ratification.*
