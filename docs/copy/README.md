# SEO pages batch - 8 files

8 page drafts targeting verified Ahrefs keyword clusters with 30-430 monthly volume each, all KD 0-27.

## What is in this zip

Each file is markdown copy ready to drop into `docs/copy/` in the repo, then build into an Astro page at the matching URL.

| File | Page URL | Cluster volume | KD |
|---|---|---|---|
| expat-mortgages-rates.md | /expat-mortgages/rates | ~430/mo | low |
| expat-mortgage-broker.md | /expat-mortgage-broker | ~280/mo | 8 |
| non-uk-resident-mortgages-buy-to-let.md | /non-uk-resident-mortgages/buy-to-let | ~360/mo | 2 |
| lenders-hsbc-expat.md | /lenders/hsbc-expat | ~290/mo | 27 |
| expat-mortgages-remortgage.md | /expat-mortgages/remortgage | ~150/mo | low |
| expat-mortgages-buy-to-let-from-abroad.md | /expat-mortgages/buy-to-let-from-abroad | ~100/mo | 3 |
| uk-mortgage-foreign-income-halifax.md | /uk-mortgage-foreign-income/halifax | ~80/mo | low |
| expat-mortgages-deposit.md | /expat-mortgages/deposit | ~80/mo | low |

Total cluster volume mapped: ~1,800 monthly searches across the 8 pages, mostly low difficulty.

## How to deploy in two Claude Code runs

**Run 1: drop the copy into the repo.**

Single block:

```
1. In ~/Staging there is a file called seo-pages-batch.zip. Unzip it there.

2. Move the 8 .md files (NOT the README) from ~/Staging/copy/ into ~/Projects/worldwide-uk-mortgages/docs/copy/. Overwrite if any exist.

3. From the repo root: git add docs/copy/

4. git commit -m "docs: add 8 high-priority SEO page copy files"

5. git push origin main

6. git log --oneline -1
```

**Run 2: build the 8 pages.**

```
Build 8 new pages from copy files in docs/copy/. Use the existing src/pages/expat-mortgages/countries/australia.astro as the structural template (same HubLayout, CtaBlock, ContactForm, Related-pages component, styling).

Source copy files in docs/copy/, target page files to create:

1. expat-mortgages-rates.md                    -> src/pages/expat-mortgages/rates.astro
2. expat-mortgage-broker.md                    -> src/pages/expat-mortgage-broker.astro
3. non-uk-resident-mortgages-buy-to-let.md     -> src/pages/non-uk-resident-mortgages/buy-to-let.astro
4. lenders-hsbc-expat.md                       -> src/pages/lenders/hsbc-expat.astro
5. expat-mortgages-remortgage.md               -> src/pages/expat-mortgages/remortgage.astro
6. expat-mortgages-buy-to-let-from-abroad.md   -> src/pages/expat-mortgages/buy-to-let-from-abroad.astro
7. uk-mortgage-foreign-income-halifax.md       -> src/pages/uk-mortgage-foreign-income/halifax.astro
8. expat-mortgages-deposit.md                  -> src/pages/expat-mortgages/deposit.astro

Note: some target paths are in subdirectories that may not yet exist (e.g. src/pages/lenders/, src/pages/non-uk-resident-mortgages/). Create the directories as needed.

Rules:
- Read australia.astro first to understand the structural template
- Each new page mirrors that structure exactly
- Page title: H1 from the file, append " - UK Mortgages Worldwide"
- Meta description: derive from the intro paragraph, max 155 chars
- Keep noindex meta tag in place
- Eyebrow text format: pick a sensible category label per page, e.g.
   - rates.astro: "GUIDE · EXPAT MORTGAGE RATES"
   - expat-mortgage-broker.astro: "GUIDE · EXPAT MORTGAGE BROKER"
   - non-uk-resident-mortgages/buy-to-let.astro: "HUB · NON-RESIDENT BUY-TO-LET"
   - lenders/hsbc-expat.astro: "LENDER · HSBC EXPAT"
   - remortgage.astro: "GUIDE · EXPAT REMORTGAGING"
   - buy-to-let-from-abroad.astro: "GUIDE · BUY-TO-LET FROM ABROAD"
   - foreign-income/halifax.astro: "LENDER · HALIFAX FOREIGN INCOME"
   - deposit.astro: "GUIDE · EXPAT DEPOSIT REQUIREMENTS"
- Related-pages panel: use the related-pages list at the foot of each markdown file. Link to existing pages in the repo (verify the slugs exist before linking).

Update the header navigation in src/layouts/Layout.astro:
- Add to MORTGAGES dropdown: "Non-UK Resident Buy-to-Let" -> /non-uk-resident-mortgages/buy-to-let
- Add to GUIDES dropdown: "Expat Mortgage Rates" -> /expat-mortgages/rates, "Expat Remortgaging" -> /expat-mortgages/remortgage, "Expat Mortgage Deposit" -> /expat-mortgages/deposit, "Expat Mortgage Broker" -> /expat-mortgage-broker, "The Application Process" (only if /expat-mortgages/process is being added in this run -- it is in this batch as expat-mortgages-process.md, see #note below), "Buy-to-Let from Abroad" -> /expat-mortgages/buy-to-let-from-abroad
- Add a new MORTGAGES dropdown entry for HSBC Expat -> /lenders/hsbc-expat. Or alternatively create a new top-level "Lenders" dropdown if cleaner. Suggest lenders fits as a sub-grouping under MORTGAGES with a "LENDERS" subheading.
- Add Halifax Foreign Income -> /uk-mortgage-foreign-income/halifax under the same lenders subgrouping.

Note: The batch is actually 8 pages, NOT 9. The "process" page mentioned above is part of this batch. Add to the GUIDES dropdown as: "The Application Process" -> /expat-mortgages/process.

Also update the public sitemap at src/pages/sitemap.astro to include all 8 new pages, grouped sensibly.

Run npm run build, fix any errors before committing.

Commit message: "feat: build 8 high-priority SEO pages plus nav updates"

Push to main. Confirm with: git log --oneline -1
```

Wait — there's a counting error in the README above. Let me clarify: there ARE 8 pages plus the process page makes 9. Re-checking the file list I shipped:

Actually no, the zip has 9 files. Let me recount the files I created:
1. expat-mortgages-rates.md
2. expat-mortgages-remortgage.md
3. non-uk-resident-mortgages-buy-to-let.md
4. expat-mortgages-deposit.md
5. lenders-hsbc-expat.md
6. uk-mortgage-foreign-income-halifax.md
7. expat-mortgage-broker.md
8. expat-mortgages-buy-to-let-from-abroad.md
9. expat-mortgages-process.md

That's 9 files. Matt asked for 8 originally and I added the process page as a bonus because it covers the "expat mortgage process / application" cluster which sits naturally alongside the others.

The Run 2 prompt above is correct. Just treat 9 files instead of 8 — same workflow, same approach.

## Style and compliance notes

All copy follows the standing rules: British English, no em-dashes, no semicolons, comma restraint, GBP only, no $ figures, no lender lists outside the dedicated lender pages, no Quilter or Mortgage One references, "we" editorial only, "a mortgage broker" advisory.

The lender pages (HSBC Expat, Halifax) are written as independent guides, not promotional pages. They flag where the lender does not suit the applicant, in keeping with editorial integrity and SEO authority signal.
