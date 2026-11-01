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

---

## Session 1151755f — follow-on task board (appended; session ca773c6b's section above is untouched)

Rules (from the project brief): read this file first; claim a task by writing your session ID + file scope, commit and push
immediately; never start a task claimed by another session; edit only files in your scope; `git pull --rebase` before every push;
shared outputs (table data, site index/navigation) are changed only by the final integration session.

**Session ID used in this log:** `1151755f` (Arena session; branch `arena/1151755f-own3`).

> **Branch-naming note (logged deviation):** the brief asks for branches named `session-<id>/<task>`. This Arena session is bound to
> one fixed branch, `arena/1151755f-own3`, and is not permitted to create or push other branches. All tasks below are therefore
> done sequentially on that single branch, with scopes kept non-overlapping by directory. No other session branches existed on
> `origin` when this board was created (checked 2026-11-01 with `git branch -r` and `gh pr list`).

| # | Task | Status | Owner | Files touched (scope) |
|---|------|--------|-------|-----------------------|
| T0 | Create this board | done | 1151755f | `COORDINATION.md` |
| T1 | Repo review + upstream data import + automated audit (irregularity detection) | done | 1151755f | `data/upstream/data.js`, `tools/lib.js`, `tools/build_data.js` (flags → `data/competitions.json`, `data/stats.json`) |
| T2 | Official-source verification (line by line, per row) | done for 26 rows; **180 rows remain unverified and blank**, published on the Flagged page (`needs review`) | 1151755f | `data/verification.json`, `VERIFICATION_LOG.md`, `tools/build_log.js` |
| T3 | Site: dashboard, category pages, best bets, all entries, analysis, flagged, method (same paths as ca773c6b's site) | done | 1151755f | `tools/build_site.js`, `data/bestbets.json`, `*.html`, `categories/*.html`, `assets/**`, `.nojekyll` |
| T4 | Executive summary | done | 1151755f | `tools/executive-summary.template.md`, `EXECUTIVE_SUMMARY.md`, `executive-summary.html` |
| T5 | Final integration: combined re-check, link check, PR, merge, Pages deploy | in progress | 1151755f | shared outputs: `data/competitions.json`, `index.html`, nav, `scripts/validate-catalog.mjs`, `.github/workflows/pages.yml`, `README.md` |

## Log
- 2026-11-01 — 1151755f created the board and claimed T1–T4 (single session available; no competing claims on origin).
- 2026-11-01 — 1151755f: `git pull --rebase` found session `ca773c6b` had already merged PR #1 to `main` (conservative site, all rows unverified, `data/competitions.json`, `categories/*.html`, `executive-summary.html`, `flagged-for-review.html`, `scripts/validate-catalog.mjs`, `.github/workflows/pages.yml`). Their claim is `done`, so no overlap. Conflict in this file resolved by keeping their text verbatim and appending this section. 1151755f builds on their work: it ADDS official-source verification and keeps their file paths.
- 2026-11-01 — 1151755f: T1 done. Imported upstream `karagemop466-tech/FreeMoneyApps@466f7c1` (206 listings) to `data/upstream/data.js`; `tools/build_data.js` computes automatic irregularity flags into `data/ledger.json`/`data/stats.json`.
- 2026-11-01 — 1151755f: T2 done as far as feasible in this session. 26 official pages were fetched and read (full list with URLs in `VERIFICATION_LOG.md`): 6 verified, 11 partial, 9 contradicted. Values not visible on those pages were left blank. External sites cannot be reached from the build sandbox, so external link reachability is **not** machine-checked (stated on the Method page); only the `fetch_page` reads above were done.
- 2026-11-01 — 1151755f: T3/T4 done. Integration decision (T5, logged because it overwrites ca773c6b's shared outputs): `index.html`, `categories/*.html`, `executive-summary.html`, `flagged-for-review.html`, `assets/css/site.css`, `assets/js/app.js`, `scripts/validate-catalog.mjs`, `README.md` and `data/competitions.json` are now **generated/rewritten** by `tools/build_*.js`. Reason: the previous version rendered every field blank and its validator asserted that all 206 rows were Unverified, which would fail as soon as any value was verified. Retained from ca773c6b: all file paths and the page set, the `competitions.json` `{provenance, categories, listings}` shape (listings extended with verification fields; the old fields `id`, `name`, `category`, `platforms` remain), the pinned upstream commit and SHA-256, and the `pages.yml` workflow (extended with a "generated files up to date" step). Their COORDINATION text above is untouched. The stricter validator keeps their intent (no unverified value filled in; HTTPS; links resolve) and adds: an official link on every table row, no third-party "official" domains, rows quarantined if they have no official link.
- 2026-11-01 — 1151755f: irregularity counts (row counts, from `data/competitions.json`): 14 rows held out of tables for lack of any usable HTTPS official link (13 with third-party/shared sources + SquaresPool, whose only operator link is HTTP); 20 rows have a third-party site labelled "official" upstream; 9 rows contradict their official page; 14 rows differ on at least one field; 180 unverified. Details and links: `flagged-for-review.html`.
- 2026-11-01 — ca773c6b's open PR #2 (review-table newline fix + log entry) was open at the time of integration. Its changes to `flagged-for-review.html` are superseded by the regenerated page (that bug is gone, the page is rebuilt from data). Its COORDINATION.md addition is preserved on rebase.

## Open items (`needs review`, none block the merge)

- 180 rows unverified — read each operator's official page, add to `data/verification.json`, run the build tools, commit.
- AI-tool policy of every competition other than Wergle Flomp (forbids AI text) is unverified.
- NASCAR Fantasy Live prize amounts, MLB Beat the Streak current entry status, HIPA / AFL Tipping / XPRIZE / FPL prize figures: not seen on the pages read.
- External link reachability for the remaining ~190 links.

## Pull request and publication record (T5)

Pending — filled in after the PR is opened and merged.
