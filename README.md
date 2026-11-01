# Prize Scout

A mobile-friendly GitHub Pages research dashboard for free-entry cash-prize competition candidates. It is intentionally evidence-first: a listing is not a recommendation, and unverified facts are left blank rather than guessed.

## Current catalog status

- 206 candidate records grouped into nine category pages.
- **0 independently verified contest rows** in this build.
- Every row is flagged `Unverified`. Prize, entry cost, eligibility, availability, payout, effort and expected-value fields are blank by design.
- Each candidate links to an operator/source URL present in the lead data. The lead catalog's "official" label and the destination itself have not been independently confirmed in this pass.
- The source snapshot and its commit are recorded in [`data/competitions.json`](data/competitions.json).

The live reference catalog is [Free Money & Contest Ledger](https://karagemop466-tech.github.io/FreeMoneyApps/). Its public repository is [karagemop466-tech/FreeMoneyApps](https://github.com/karagemop466-tech/FreeMoneyApps), pinned for this extraction to commit [`466f7c1e7a14b52b4a0d36beb84a00d68fd409b7`](https://github.com/karagemop466-tech/FreeMoneyApps/commit/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7). The source includes an [audit dated 2026-08-19](https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/AUDIT_2026-08-19.md) and a separate [document explicitly marked superseded](https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/100_VERIFIED_CONTESTS.md). See the site's [executive summary](executive-summary.html) and [Flagged for Review](flagged-for-review.html) for the scope and reported irregularities.

## Run and verify locally

This is a static site and needs no package installation. Serve the repository root with any static HTTP server (for example, `python3 -m http.server 8000`) and open `http://localhost:8000/`.

Run the catalog and internal-link checks with:

```sh
node scripts/validate-catalog.mjs
```

The check validates catalog shape, IDs, categories, blank unverified fields, HTTPS source URLs, category subpages and local page links. It does **not** establish that outside websites still work, that a source link is truly official, or that a prize/entry claim is true. Every external contest needs a fresh, manual check against the operator's own current rules before any financial field can be populated.

## Deployment

`.github/workflows/pages.yml` builds/validates the static files and publishes the repository root to GitHub Pages after changes land on `main`. Pull requests run the validation job. Enable GitHub Pages with **GitHub Actions** as the build and deployment source in repository settings if it is not already enabled.
