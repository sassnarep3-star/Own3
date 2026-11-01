# Prize Scout — archived build

This folder preserves the **Prize Scout** site built by session `arena/ca773c6b-own3`, which
occupied the repository root from 2026-11-01 and is deployed at the root of
<https://sassnarep3-star.github.io/Own3/> in its original form. It is kept here, unchanged and
still validating, rather than deleted.

It is reachable in full at:

- Dashboard — `archive/prize-scout/index.html`
- Executive summary — `archive/prize-scout/executive-summary.html`
- Flagged for review — `archive/prize-scout/flagged-for-review.html`
- Category pages — `archive/prize-scout/categories/*.html`

**Why it was moved.** Both sessions produced a site from the same 206-row upstream ledger. Prize
Scout carried the names and categories over but deliberately left every prize, eligibility, status
and payout field blank, reporting **0 independently verified rows**. The replacement build at the
repository root keeps the upstream values, labels each row `verified` / `official-linked` /
`flagged`, and publishes every defect. The two are complements — Prize Scout is the most
conservative possible reading of the source, the new build is the most informative — so the
archived version is retained for comparison.

**What still validates.** `scripts/validate-catalog.mjs` now points at this folder, so the
archived catalogue, its nine category pages and their local links are checked on every CI run.

**Live coordination board** for the whole repository: [`../../COORDINATION.md`](../../COORDINATION.md).
