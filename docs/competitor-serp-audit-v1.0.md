# Competitor SERP Audit v1.0

**Project:** UK Mortgages Worldwide
**Phase:** 1 (Architecture)
**Version:** 1.0
**Date:** 29 April 2026
**Status:** Draft. To be ratified and committed to `/docs/competitor-serp-audit-v1.0.md`.
**Companion documents:** `/docs/keyword-universe-v1.0.md`, `/docs/page-map-v1.0.md`
**Source:** Ahrefs SERP Overview tool (GB locale) via MCP, queried 29 April 2026.

---

## 1. Purpose

This document examines who currently owns the search results for the highest-volume keyword in each of the four anchor clusters, plus the highest-value sub-cluster (expat buy-to-let). The findings sharpen the Phase 2 build order, expose where the existing page map needs adjustment, and define the content depth each hub page must achieve to compete.

The audit is done now, before Phase 2 build, because building blind to who is already ranking wastes effort. SERPs tell us which battles are winnable, which need flanking, and which are wrong battles altogether.

## 2. Methodology

Five keyword SERPs pulled from Ahrefs at GB locale, top 10 results per keyword:

| Cluster | Keyword | Volume | KD |
|---|---|---|---|
| A | expat mortgage | 300 | 9 |
| A | expat mortgage uk | 200 | 5 |
| B | non resident mortgage uk | 150 | 2 |
| C | uk mortgage for property abroad | 150 | 42 |
| D | uk mortgage with foreign income | 90 | 0 |
| F | expat buy to let mortgage | 150 | 0 |

Total ranking pages reviewed: 60+. Per page, the audit captured: domain rating, URL rating, backlink count, referring domains, traffic, keyword count, page type. SERP features (AI Overview, People Also Ask boxes, video, sitelinks) were noted per SERP.

What this audit did not do: read every ranking page in full, run backlink gap analysis, or check Google Search Console for our own ranking baseline. Those are next-pass questions. This audit is the strategic read.

## 3. Headline findings

Six findings change how we build.

**Finding 1: Cluster D is essentially uncontested.** The "foreign income" SERP is full of sites with domain ratings of 0, 2, 5, and 29. Two of the top ten ranking pages have a DR of 5 or below. The keyword universe predicted this. The SERP confirms it. A comprehensive, well-structured foreign income hub page can plausibly rank in the top three within months, not years.

**Finding 2: Cluster B is softer than Cluster A.** Both anchors are dominated by HSBC and Skipton International at the top, but Cluster B has Wise.com ranking with a single backlink and the The Mortgage Hut ranking on a 31 DR. The implication is that authority alone is not winning Cluster B. Content quality on a focused page is competitive. Cluster A by contrast has multiple banks plus brokers consolidated at the top.

**Finding 3: Cluster C has an audience mismatch problem.** "uk mortgage for property abroad" is dominated by content about UK residents getting mortgages to buy property overseas, which is the exact audience the keyword universe excludes (section 8 of that document). The page map currently routes this query at `/uk-mortgage-living-abroad`. The target keyword needs to change.

**Finding 4: HSBC Expat and Skipton International own the head.** Across four of the five SERPs audited, both lenders appear in the top five. Their domain ratings (83 and 40 respectively) and the breadth of their internal architecture make them difficult to displace at the head. The opportunity is in the long tail and in vocabulary they do not own (foreign income, non-resident, country and currency variants).

**Finding 5: Building societies are visible everywhere.** Suffolk BS, Family BS, Mansfield BS, Cambridge BS, Skipton, Nottingham BS, Newcastle BS, Saffron BS. Their pages are typically short, lender-criteria-focused, and cover a single product. They rank because their domains carry moderate DR and they target specific phrases without contesting head terms. We will sit alongside them on the SERP, not replace them.

**Finding 6: AI Overviews appear on every anchor SERP.** Google is summarising answers from multiple sources at the top of the page. Pages cited in AI Overview get residual click share. To be cited, content needs to be scannable, definitive, and structured. FAQ schema and clear plain-English answers matter more than ever.

## 4. Per-cluster analysis

### Cluster A: Expat mortgage

**Top ranking pages:**

| Pos | URL | Type | DR | Traffic |
|---|---|---|---|---|
| 1 | AI Overview | Feature | – | – |
| 2 | expat.hsbc.com/mortgages | Service page | 83 | 471 |
| 3 | skiptoninternational.com/expat | Service page | 40 | 657 |
| 4 | suffolkbuildingsociety.co.uk/mortgages/expat | Article/guide | 41 | 271 |
| 5 | expatmortgages-uk.com | Service page | 11 | 459 |
| 6 | familybuildingsociety.co.uk/mortgages/expat-mortgages | Service page | 45 | 37 |
| 7 | charcol.co.uk/mortgage-calculators/expat-mortgage-calculator | Calculator | 40 | 83 |
| 9 | thenottingham.com/intermediaries/propositions/foreign-nationals | Service page | 48 | 110 |
| 10 | mortgagelane.com/mortgages/expat-mortgages | Service page | 29 | 65 |

**Pattern:** Service pages dominate. Two banks at the top, multiple building societies in the middle, broker pages filling the lower half. Average DR of organic results is around 40. The AI Overview cites at least 12 sources, which fragments click share.

**What our `/expat-mortgages` hub must do:** match the depth of HSBC Expat and Skipton, beat the conversion-friendliness of the building society pages, structure content to be cited in the AI Overview. Realistic ranking expectation: page 1 long-tail wins quickly, head term ("expat mortgage") slow burn requiring backlinks. Quick wins are in the long-tail variants like "uk expat mortgage" and "expat mortgage rates" which carry less competitive intensity.

**Notable competitor:** expatmortgages-uk.com. DR 11 but 1,171 backlinks from 134 referring domains. Substantial historic SEO investment despite low DR. Worth deeper backlink analysis.

### Cluster B: Non-UK resident mortgage

**Top ranking pages:**

| Pos | URL | Type | DR | Traffic |
|---|---|---|---|---|
| 1 | hsbc.co.uk/mortgages/non-uk-residents | Service page | 79 | 562 |
| 2 | skiptoninternational.com/non-resident-uk-mortgage | Service page | 40 | 190 |
| 3 | natwestinternational.com/international-banking/mortgages | Service page | 44 | 448 |
| 4 | AI Overview | Feature | – | – |
| 5 | wise.com/gb/blog/mortgage-for-foreigners-in-the-uk | Article | 89 | 170 |
| 6 | togethermoney.com/non-uk-residents | Service page | 55 | 45 |
| 7 | suffolkbuildingsociety.co.uk/mortgages/expat | Service page | 41 | 271 |
| 8 | santanderinternational.co.uk/personal/products/mortgages | Service page | 30 | 199 |
| 9 | better.co.uk/mortgages/buying-property-in-the-uk-from-abroad | Article | 51 | 359 |
| 10 | themortgagehut.co.uk/expert-articles/first-time-buyers/29 | Article | 31 | 58 |

**Pattern:** Bank service pages plus moderate-DR articles. Wise.com ranks with one backlink, suggesting topical authority and brand strength matter as much as raw link count for this query. Better.co.uk and The Mortgage Hut both rank with article-format content.

**What our `/non-uk-resident-mortgages` hub must do:** comprehensive scope (better than Wise), specific lender behaviour (better than the bank pages, which can only cover their own product), clear answers to the natural questions ("Can I get a UK mortgage as a non-resident?", "What deposit do I need?", "Which UK lenders accept non-residents?"). Format: hub-style hybrid with Service Page structure plus FAQ section plus criteria comparison. Realistic ranking expectation: faster wins than Cluster A. The keyword universe predicted the lower difficulty. The SERP confirms.

**Note on Suffolk BS appearing in both A and B SERPs:** their single `/mortgages/expat` page ranks for both vocabularies. This validates our dual-anchor architecture (D008): the search vocabularies are different, but the audience overlaps. We need separate pages for our own internal targeting and routing, but the underlying audience is the same one Suffolk are converting from one page.

### Cluster C: UK mortgage for property abroad – AUDIENCE MISMATCH

**Top ranking pages:**

| Pos | URL | Topic |
|---|---|---|
| 1 | expat.hsbc.com/mortgages/getting-an-overseas-mortgage | Buying overseas property |
| 3 | internationalservices.hsbc.com/buy-property-abroad | Buying overseas property |
| 4 | lumonpay.com/articles/mortgage-for-overseas-property | Buying overseas property |
| 5 | wise.com/gb/blog/mortgage-for-overseas-property | Buying overseas property |
| 6 | gov.uk/guidance/guidance-for-buying-property-abroad | Buying overseas property |
| 7 | international.barclays.com/mortgages | Buying overseas property |
| 8 | knightfrankfinance.co.uk/private-office/overseas-property | Buying overseas property |
| 9 | which.co.uk/money/mortgages/types-of-mortgage/overseas-mortgages-explained | Buying overseas property |
| 10 | upscoreapp.com/which-uk-banks-offer-overseas-mortgages | Buying overseas property |

**Pattern:** Every single ranking page is about UK residents wanting to buy property OVERSEAS, financed via UK or international banks. This is the audience the keyword universe explicitly excluded (section 8: "do not target overseas mortgage and mortgage for overseas property" because we cannot place those leads).

**Implication:** the head term "uk mortgage for property abroad" (volume 150, KD 42) cannot be the target keyword for the `/uk-mortgage-living-abroad` page. Google has decided this query means the wrong thing. We would either fail to rank, or rank for queries from the wrong audience.

**Recommended action:** the `/uk-mortgage-living-abroad` page targets the question cluster (the long-tail variants like "can I get a UK mortgage if I live abroad", "uk mortgage living abroad", "can you get a UK mortgage if working abroad") and explicitly does not target "uk mortgage for property abroad". The content focuses on UK nationals living abroad who want UK property, which is our real Cluster C audience. The head term is dropped.

This adjustment should be reflected in a v1.1 of the page map.

### Cluster D: UK mortgage with foreign income – OPEN GOAL

**Top ranking pages:**

| Pos | URL | DR | Traffic |
|---|---|---|---|
| 1 | AI Overview (12+ cited sources) | – | – |
| 2 | themortgagemum.co.uk/uk-mortgage-foreign-income | 29 | 33 |
| 3 | cliftonpf.co.uk/blog/.../uk-mortgage-foreign-income | 41 | 35 |
| 4 | hsbc.co.uk/mortgages/non-uk-residents | 79 | 562 (cross-rank) |
| 5 | themortgagestop.co.uk/uk-mortgage-foreign-income | 5 | 14 |
| 6 | skiptoninternational.com/non-resident-uk-mortgage | 40 | 190 (cross-rank) |
| 8 | mintmp.co.uk/mortgages/mortgages-for-foreign-income | 2 | 13 |
| 9 | accordmortgages.com/criteria/foreign-income | 43 | 8 |
| 10 | huxmor.com/uk-mortgage-foreign-income | 0 | 5 |

**Pattern:** Multiple sites ranking with DR below 30, two below DR 5. The HSBC and Skipton pages that rank are cross-ranking from their non-resident hubs, not dedicated foreign-income content. Accord Mortgages is the only lender with a dedicated foreign income page in the top 10, and even it ranks with eight monthly traffic.

**The opportunity:** there is no comprehensive, authoritative, well-structured page on UK mortgages with foreign income in the top ten. Every result is either a thin broker article or a bank page that only covers its own criteria. A purpose-built hub covering currency haircuts, lender-by-lender appetite, evidence requirements, and worked examples would have an immediate authority advantage.

**What our `/uk-mortgage-foreign-income` hub must do:** be the definitive resource. Cover every lender that accepts foreign income (Halifax, Santander, NatWest, HSBC, Barclays, Skipton, Nationwide). List currency haircuts. Show worked examples in three currencies. Add FAQ section answering the long-tail Cluster D questions. Schema-mark it for AI Overview citation.

**Realistic ranking expectation:** top three within six months of launch, top one possible within twelve. This is the easiest substantial win in the build.

**Build order implication:** consider promoting `/uk-mortgage-foreign-income` from position 4 in the Phase 2 sequence to position 2 or 3. Faster ranking on this page builds topical authority that lifts everything else.

### Cluster F: Expat buy-to-let mortgage

**Top ranking pages:**

| Pos | URL | Type | DR | Traffic |
|---|---|---|---|---|
| 1 | expat.hsbc.com/mortgages/buy-to-let | Service page | 83 | 391 |
| 2 | skiptoninternational.com/expat | Service page | 40 | 657 |
| 3 | mortgagelane.com/expat-buy-to-let-mortgage-uk | Article/guide | 29 | 40 |
| 4 | mansfieldbs.co.uk/mortgage/buy-to-let-expat | Service page | 35 | 59 |
| 5 | AI Overview | Feature | – | – |
| 6 | cambridgeforintermediaries.co.uk/news/.../expat-buy-to-let | News | 10 | 27 |
| 7 | wise.com/gb/blog/buy-to-let-mortgage-non-residents | Article | 89 | 73 |
| 9 | skiptoninternational.com/.../uk-btl-criteria-leaflet | PDF/guide | 40 | 137 |
| 10 | expatmortgages-uk.com/secure-buy-to-let-mortgage-uk-expats | Service page | 11 | 5 |

**Pattern:** Similar shape to Cluster A. HSBC and Skipton at the top, building society and broker pages filling the rest. Mortgage Lane is the strongest broker presence with a guide-format page. The Cambridge BS news article ranking at position six is interesting: a news piece outranking dedicated service pages because it carries fresh content authority.

**What our `/expat-mortgages/buy-to-let` page must do:** combine the criteria depth of Skipton, the calculator-and-illustration of a broker page, and ICR and stress test specifics. Phase 2 build order is correct (this is the highest-value lead niche so quality matters more than ranking speed).

## 5. Recommended adjustments

Three adjustments to the existing architecture.

**Adjustment A: Update the Phase 2 build order.** The keyword universe and original page map listed `/uk-mortgage-foreign-income` as the fourth page to build. Given Cluster D's competitive softness, promote it to second or third. Revised order:

1. `/non-uk-resident-mortgages` (B – lowest difficulty, biggest opportunity, confirmed)
2. `/uk-mortgage-foreign-income` (D – open goal, fastest to rank, pulls topical authority across the site)
3. `/expat-mortgages` (A – brand-recognised anchor)
4. `/uk-mortgage-living-abroad` (C – with revised target keyword set, see Adjustment B)
5. `/expat-mortgages/buy-to-let` (F – highest lead value)

Continue with Phase 2 sequence positions 6 onward as in page map v1.0.

**Adjustment B: Re-target the `/uk-mortgage-living-abroad` page.** Drop "uk mortgage for property abroad" from the target keyword list. Replace with the Cluster C question cluster: "can I get a uk mortgage if I live abroad", "uk mortgage living abroad", "can you get a uk mortgage if working abroad", and the long tail of question variants. Page intent: "UK national living abroad, wanting UK property". Page intent explicitly NOT: "UK national wanting overseas property". This must be reflected in v1.1 of the page map.

**Adjustment C: Add FAQ schema and AI Overview structuring as a template requirement.** Every hub page (T2) and programmatic page (T4) must include FAQ schema with the relevant Cluster questions. Content must be structured so that key answers are scannable in 2-3 sentences, ready to be cited by AI Overview. Add this as a non-negotiable in the template specifications when they are written.

## 6. Open questions and future work

**Backlink gap analysis.** This audit looked at on-page and SERP positioning. It did not look at where competitors get their links from. expatmortgages-uk.com (1,171 backlinks at DR 11) is the most interesting case. Ahrefs Site Explorer can pull the referring domains and identify link sources we could replicate ethically. Recommend a separate session.

**Content depth audit on the top three competitors.** This audit did not read full pages. A second pass would crawl HSBC Expat, Skipton International, and at least one strong broker page in detail to extract content patterns: word counts, section structures, calculator and tool integration, lead-capture mechanics, internal linking. Useful before Phase 2 hub-page copy is drafted.

**SERP feature analysis.** People Also Ask boxes appeared in every SERP. We did not log the specific questions. Doing so would seed the FAQ section of every hub page with the right questions. Quick Ahrefs query, worth doing in the same session as content depth audit.

**Cluster H (seafarer) SERP audit not done.** Low priority because Cluster H is small in volume terms, but worth a single SERP pull before the seafarer hub is built.

**Country and currency programmatic-page SERP sampling.** Before Phase 3, sample 2-3 country and 2-3 currency SERPs to validate that the data shape and competitive intensity are as predicted. Cheap to do, prevents building a template against a wrong assumption.

## 7. Document control

Committed to `/docs/competitor-serp-audit-v1.0.md` once ratified. Increments by version on substantive update. Triggers an update to page map (v1.1) to reflect Adjustment B above.

Companion documents:

- `/docs/keyword-universe-v1.0.md` (ratified)
- `/docs/page-map-v1.0.md` (ratified, due v1.1 update from this audit)
- `/docs/competitor-serp-audit-v1.0.md` (this document)
- `/docs/brand-and-tone-v1.0.md` (not yet drafted)
- `/docs/template-specs-v1.0.md` (not yet drafted)

---

*Document ends. Status: draft v1.0 awaiting ratification.*
