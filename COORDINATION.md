# Coordination board

No prior coordination board or task claims existed when this session began. No other active agent claims were visible.

| Task | Status | Owner/session | Files in scope |
|---|---|---|---|
| Audit supplied Free Money & Contest Ledger and build source-conscious competition dashboard, findings, and executive summary | done | `arena/ca773c6b-own3` (current Arena session branch) | Repository files for this task |

## Workflow note

This workspace is pinned to branch `arena/ca773c6b-own3`; Arena requires work and any push to remain on this branch. The requested per-session branch naming (`session-<id>/<task>`) cannot be used here. The task was claimed on the pinned branch to avoid working unclaimed. No other session claims were present when the task began.

## Sources reviewed

- Published reference site: <https://karagemop466-tech.github.io/FreeMoneyApps/> (page text retrieved during this task).
- Reference repository: <https://github.com/karagemop466-tech/FreeMoneyApps>, pinned at commit `466f7c1e7a14b52b4a0d36beb84a00d68fd409b7`.
- Lead dataset: <https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/assets/data.js> (SHA-256 `13986a17b8b9aa7b3240232e6138155967cfa9347256faa7b5c7d1565ed73211`).
- Source audit: <https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/AUDIT_2026-08-19.md>.
- Prior list explicitly marked superseded by its source: <https://github.com/karagemop466-tech/FreeMoneyApps/blob/466f7c1e7a14b52b4a0d36beb84a00d68fd409b7/100_VERIFIED_CONTESTS.md>.
- Per-entry source links are preserved in `data/competitions.json`. A source classification supplied by the lead catalog is not treated as independent verification.

## Verification performed

- Confirmed the pinned source data parses to 206 records across 9 categories; extracted candidate names/category assignments and per-record source URLs only. No contest prize, free-entry status, availability, payout, eligibility, effort or expected-value claim has been promoted as verified.
- Every row in this site remains `Unverified`, is flagged, has a source URL, and has blank claim/value fields. 205 listed source URLs use HTTPS; the single HTTP URL (SquaresPool) is explicitly flagged because a secure destination was not confirmed.
- Built nine category subpages, a searchable/filterable all-candidate table, executive summary, and clearly labeled Flagged for Review page.
- Ran `node scripts/validate-catalog.mjs`: PASS (206 rows, 9 categories, all blank/unverified fields retained, URL protocols checked, local HTML links resolve).
- Ran `node --check` on site and validation JavaScript: PASS.
- Ran `git diff --check`: PASS.
- Parsed all 12 published HTML pages with Python's standard-library HTML parser: PASS.
- Served the site locally and confirmed HTTP 200 for the home page, catalog JSON, representative category pages, executive summary and review page.
- External competition destination pages were not individually fetched or verified. Accordingly, this site reports **0 independently verified competition rows**; external URL reachability, accuracy and present-day rules remain open checks.

## Irregularities published for review

- The upstream audit reports broken/unsupported entries, contests marked active after ending, old FPL codes/season data, prize and eligibility mismatches, sparse supporting details, and cross-document contradictions. These are clearly attributed to that audit and were not independently re-tested here.
- The live reference page advertises 206 listings, 189 true-free paths, 62 iOS options and 60 additions. The pinned file count of 206 was confirmed; other headline metrics were not independently recalculated against current operator rules.
- The pinned lead dataset has 206 rows while the dated audit document describes 119 listings; this scope/document mismatch is flagged.
- 12 of 206 lead records have no source labeled `official` in the lead dataset; their linked platform/operator page is only a starting point, not contest-specific proof.
- One source URL uses HTTP (SquaresPool); no HTTPS destination was established.

## Pull request and publication record

Pending: create the pull request from `arena/ca773c6b-own3` to `main`, merge after checks, and confirm the GitHub Pages deployment. Record the PR URL, merge result, Actions/deployment run and public site URL here after completion.
