# Prize Scout

A mobile-friendly GitHub Pages research dashboard for free-entry cash-prize competition candidates. It is intentionally evidence-first: a listing is not a recommendation, and unverified facts are left blank rather than guessed.

## Current catalog status (2026-11-01)

- 206 candidate records from the reference ledger; 192 have an official-source link and appear in the nine category pages and the all-entries table. 14 have no usable official source and are held out on the [Flagged for Review](flagged-for-review.html) page.
- **26 rows were read on an official page on 2026-11-01**: 6 fully verified, 11 partially verified, 9 contradicted by the operator's own page. **180 rows remain unverified**, with prize, entry, dates and eligibility left blank by design.
- A value appears in a table only if it was read on the official page named in the row. Nothing is inferred. The reference ledger's own claims are kept in `data/competitions.json` under `upstream` for audit only.
- Pages: [Dashboard](index.html), [Best bets](best-bets.html), [All entries](all-entries.html), nine category pages, [Analysis](analysis.html), [Executive summary](executive-summary.html), [Flagged for Review](flagged-for-review.html), [Method & sources](method.html). Full log of pages read: [VERIFICATION_LOG.md](VERIFICATION_LOG.md).

The live reference catalog is [Free Money & Contest Ledger](https://karagemop466-tech.github.io/FreeMoneyApps/). Its public repository is [karagemop466-tech/FreeMoneyApps](https://github.com/karagemop466-tech/FreeMoneyApps), pinned for this extraction to commit [`466f7c1e7a14b52b4a0d36beb84a00d68fd409b7`](https://github.com/karagemop466-tech/FreeMoneyApps/commit/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7). The source includes an [audit dated 2026-08-19](https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/AUDIT_2026-08-19.md) and a separate [document explicitly marked superseded](https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/100_VERIFIED_CONTESTS.md). See the site's [executive summary](executive-summary.html) and [Flagged for Review](flagged-for-review.html) for the scope and reported irregularities.

## Run and verify locally

The published site is static HTML. Serve the repository root with any static HTTP server (for example, `python3 -m http.server 8000`).

Rebuild from source data (Node 18+, no dependencies):

```sh
node tools/build_data.js      # data/verification.json + data/upstream/data.js -> data/competitions.json, data/stats.json
node tools/build_log.js       # -> VERIFICATION_LOG.md
node tools/build_site.js      # -> all HTML pages and EXECUTIVE_SUMMARY.md
node scripts/validate-catalog.mjs
```

The validator enforces: an https official link on every table row (never a known news/affiliate/social domain); no value filled in unless the row was read on its official page and matches `data/verification.json`; quarantined rows never in a table; all internal links and anchors resolve; best-bets rows are verified, open and carry a verified prize. It does **not** test whether external websites are reachable (the build environment cannot reach them) — see the Method page.

To verify more rows: read the operator's official page, add an entry to `data/verification.json` with only the values actually seen, then rebuild.

## Other builds kept in this repository

Parallel sessions produced two earlier builds. Both are preserved intact and still validated in CI, but **neither is the published root site**:

- [`archive/audited-ledger/`](archive/audited-ledger/index.html) — flat-page ledger that shows the upstream values "as stated" with verification labels, plus its own structural audit ([flag list](archive/audited-ledger/flagged.html)).
- [`archive/prize-scout/`](archive/prize-scout/index.html) — first build, every claim field blank, 0 verified rows.

The reason the root uses the strict build is logged in [COORDINATION.md](COORDINATION.md).

## Deployment

`.github/workflows/pages.yml` builds/validates the static files and publishes the repository root to GitHub Pages after changes land on `main`. Pull requests run the validation job. Enable GitHub Pages with **GitHub Actions** as the build and deployment source in repository settings if it is not already enabled.
