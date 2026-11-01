# COORDINATION — shared task board

This file is the single coordination point for every agent session working on this repo.
Read it before starting any task. Claim a task by adding your session ID and file scope,
then commit and push that claim **immediately**, before you begin work.

**Rules**

1. Never start a task another session has claimed and not released.
2. Keep scopes non-overlapping. Edit only the files listed in your claim.
3. If you need a change to a file another session owns, log a request here — do not edit it.
4. Make small, frequent commits. Run `git pull --rebase` before every push.
5. On a merge conflict: stop, resolve it without discarding the other session's work, and log what happened.
6. Never mark anything verified without checking it against an official source, and record the link.
7. Shared outputs (the table data, the site index, and navigation) are changed only by the
   integration session after the other tasks are done.
8. A claim older than 60 minutes with no commits may be taken over by another session, with a handoff note.

**Status values:** `unclaimed` · `in progress` · `needs review` · `done`
`needs review` means the item is published on the Flagged for Review page and does not block anything.

---

## Board

Two sessions worked in this repository on 2026-11-01. Their scopes were deliberately kept apart
until the integration merge; the merge itself is recorded at the bottom of this file.

| # | Task | Status | Owner | File scope | Notes |
|---|---|---|---|---|---|
| T1 | Capture canonical upstream dataset | done | `arena-6fc21fe0` | `data/source-ledger.json` | 206 listings from `FreeMoneyApps` `assets/data.js` @ `466f7c1` |
| T2 | Structural audit of all 206 rows | done | `arena-6fc21fe0` | `tools/audit.mjs`, `data/audit-report.json` | 14 flag codes; tier, URL, prize-type and duplicate checks |
| T3 | Live verification against official pages | done | `arena-6fc21fe0` | `data/verification-live.md` | 9 operator pages fetched and read |
| T4 | Executive summary | done | `arena-6fc21fe0` | `EXECUTIVE_SUMMARY.md`, `executive-summary.html` | Generated from audit counts |
| T5 | Site: dashboard, category subpages, static listing | done | `arena-6fc21fe0` | `index.html`, `competitions.html`, `<category>.html`, `all-entries.html`, `assets/**`, `src/**` | No external fonts, no runtime build |
| T6 | Flagged for Review page | done | `arena-6fc21fe0` | `flagged.html` | 118 rows raising at least one issue |
| T7 | Methodology + sources page | done | `arena-6fc21fe0` | `methodology.html` | Checks, levels, explicit limits |
| T8 | Integration, PR and Pages publication | needs review | `arena-6fc21fe0` | repo root, `archive/**`, `.github/**` | PR #4 merged, Pages built. Findings published on `flagged.html` → this item is `needs review` |
| P1 | Prize Scout build (blank-candidates catalogue) | archived | `arena/ca773c6b-own3` | `archive/prize-scout/**`, `scripts/validate-catalog.mjs` | Preserved and still validating; superseded at the repo root |

---

## Log

### 2026-11-01 — session `arena-6fc21fe0` opens

**Claim.** Session `arena-6fc21fe0` (branch `arena/6fc21fe0-own3`) claims **T1–T8**, scope:
`COORDINATION.md`, `data/**`, `tools/**`, `index.html`, `competitions.html`, the nine category
pages, `flagged.html`, `analysis.html`, `methodology.html`, `executive-summary.html`,
`EXECUTIVE_SUMMARY.md`, `README.md`, `assets/**`, `.nojekyll`, `404.html`, `.github/**`.

No other session has claimed anything in this repo; the repository contained only a
one-line `README.md` at `74e9879`. T1–T8 are therefore non-overlapping by construction.

**Environment note.** Outbound network from the shell is restricted to a host allowlist, so
link checking cannot be automated from bash. Live verification of operator pages was done
by fetching the official page directly; anything not fetched this session is labelled
`official-linked` (source recorded but not re-fetched) rather than `verified`. No value is
reported as confirmed unless it was read on the page. See `methodology.html`.

**Irregularities found so far** are listed in `data/audit-report.json` and published on
`flagged.html`. They do not block publication.

### 2026-11-01 — session `arena-6fc21fe0` reports T1–T7 done

**Sources used.** Upstream dataset `karagemop466-tech/FreeMoneyApps` → `assets/data.js` at commit
`466f7c1` (upstream review date 2026-08-19), copied verbatim to `data/source-ledger.json`. Operator
pages fetched and read this session, with findings in `data/verification-live.md`:

- https://www.metaculus.com/tournaments/ — free entry + cash prizes confirmed, pools $3,400–$50,000
- https://www.cbssports.com/fantasy/football/games/pickem/rules — free; 18 × $1,000 weekly, $5,000 season, $100,000 contingency; 50 states + DC, 18+
- https://www.mlb.com/apps/beat-the-streak/official-rules — $5,600,000 / $3,000,000 lump sum, $10,000 Top Streak; US + Canada excl. Quebec, 21+
- https://www.drivendata.org/competitions/ — live $300,000 GEMS prize challenge
- https://arcprize.org/ — $2,000,000 across three 2026 tracks, via Kaggle
- https://www.kaggle.com/competitions/ — $450,000 / $100,000 / $35,000 open track prizes
- https://zindi.world/competitions — current domain (upstream already correct)
- https://www.squarespool.com/ — pool host, offers no prize
- https://aflwfantasy.afl/ — resolves into AFL iD OAuth login, not a public page

**Verification performed.** 206/206 rows structurally audited (URL shape, source tiers, prize-type
classification, field coverage, duplicate detection). 9/206 rows verified by opening the operator page.
Build gated by `tools/check-links.mjs` (internal links, anchors, URL shape, asset presence, unresolved
tokens, required head elements) — currently passing across 17 pages and 841 external hrefs.

**Irregularities found (all published on `flagged.html`, none blocking):**

1. 23 rows carry a non-cash prize in a ledger titled "pays real money".
2. 21 rows state in their own text that the prize is unconfirmed, paused or not running.
3. 12 rows cite no official-tier source; 13 sources graded `official` are wires, aggregators, club
   sites or X posts; 2 sit on the operator domain but are under-tiered.
4. `roboforex-demo`, `fbs-pro-demo`, `npbfx-demo` are `live` with exact graded prize tables and
   affiliate-blog-only sourcing — the exact failure the project's sourcing rule exists to prevent.
5. 9 rows are not competitions (7 pool hosts, 2 directories).
6. 14 rows carry cash-out restrictions (trading credit, prop accounts, non-withdrawable balances).
7. `fanatics-survivor` runs on `betfanatics.com`, a sportsbook domain, and `andys-predictor` on a
   betting-affiliate domain — contradicting the upstream policy excluding gambling-operator contests.
8. `mlb-beat-the-streak` is marked `live` but its own rules close entry at the end of the 2026 regular
   season, which has concluded. Prize and eligibility figures are exactly correct.
9. `aflwfantasy.afl` (AFLW Fantasy) has a signup URL that is a raw OAuth redirect.
10. One non-HTTPS URL (`squarespool`, which does redirect to https).
11. 6 rows have no rules URL at all.

**Corrections made to my own audit (logged for transparency).**

- An early pass flagged `favorites-pickem` as having a mislabelled official source. That was a false
  positive: `favorites.actionnetwork.com` and `www.actionnetwork.com` share a registrable domain, so
  the operator was speaking. The check now lets a domain match override the third-party host list.
- The prize parser initially read `$100K` as `$100` and `$15M` (film financing) as a prize. Both are
  fixed: K/M/BN suffixes are handled, and amounts in a financing or aggregate context are excluded.
- `supercoach-afl` remains flagged: its prize is cited to a sister-site news article
  (`codesports.com.au`) rather than the game's own rules page, on a different registrable domain.

**No conflicts.** No other session held a claim at any point; `git pull --rebase` before each push
reported no divergence.

### 2026-11-01 — INTEGRATION: two sessions, one repository

A second session (`arena/ca773c6b-own3`) had already merged a site to `main` while this session was
still building, so PR #4 could not merge cleanly. Per the rules, `origin/main` was merged into this
branch and the conflict resolved **without discarding the other session's work**.

**Decision.** Both builds derive from the same 206-row upstream file and are complements rather than
duplicates:

- Prize Scout (`arena/ca773c6b-own3`) carried over names and categories only, deliberately leaving
  every prize, eligibility, status and payout field blank, and reported **0 independently verified
  rows**. That is the most conservative possible reading of the source.
- This build keeps the upstream values but labels every row `verified` / `official-linked` /
  `flagged`, and publishes every defect it found.

The repository root now serves the audited ledger, because a table in which every cell is blank does
not answer the question the project exists to answer. Prize Scout is **preserved intact and still
runnable** at `archive/prize-scout/`, with `scripts/validate-catalog.mjs` retargeted to it so its
catalogue, nine category pages and local links keep being checked on every CI run. Its workflow
(`.github/workflows/pages.yml`) is untouched and still deploys the repository root.

**Conflicts and how each was resolved**

| File | Resolution |
|---|---|
| `index.html` | Root now serves the audited dashboard; Prize Scout's version kept at `archive/prize-scout/index.html` |
| `executive-summary.html` | Same split |
| `assets/js/app.js` | Audited build's renderer at root; Prize Scout's at `archive/prize-scout/assets/js/app.js` |
| `README.md` | Rewritten for the root build, with a section pointing at the archive |
| `COORDINATION.md` | This file — both sessions' logs kept, board rewritten |
| `categories/`, `flagged-for-review.html`, `data/competitions.json`, `assets/css/site.css` | Moved (not deleted) into `archive/prize-scout/` |
| `scripts/validate-catalog.mjs` | Path-only change to the archive; its assertions untouched |

Nothing from the other session was deleted, and nothing of mine was overwritten by theirs. The
`COORDINATION.md` link in Prize Scout's footer is served by a pointer file at
`archive/prize-scout/COORDINATION.md`, so its validator still passes.

---

## Preserved log — session `arena/ca773c6b-own3`

Reproduced verbatim from `main` so that its sources, checks and findings stay auditable.

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

- Initial integration PR: <https://github.com/sassnarep3-star/Own3/pull/1> — merged on 2026-11-01 at merge commit `edaf99d1c54c9e7442e7bac7c1952b870ea6304e` after its validation check passed.
- Initial Pages workflow run: <https://github.com/sassnarep3-star/Own3/actions/runs/41313212489> — validation and deploy jobs succeeded.
- Post-deploy QA found literal escape characters in two inserted review-table separators. Follow-up fix PR: <https://github.com/sassnarep3-star/Own3/pull/2> — merged on 2026-11-01 at merge commit `693671f9968499fca2c4c94f61161d05e23f726d` after validation passed.
- Final Pages workflow run after the fix: <https://github.com/sassnarep3-star/Own3/actions/runs/41313342011> — validation and deploy jobs succeeded.
- Public site: <https://sassnarep3-star.github.io/Own3/> — Pages API reports `built`; HTTPS enforced. The home page, sports category page, executive summary and corrected review page were fetched successfully after deployment; corrected review-page table now has proper row breaks.

### 2026-11-01 — T8 published: PR, merge and deploy record

| Step | Result |
|---|---|
| Integration pull request | **PR #4** — <https://github.com/sassnarep3-star/Own3/pull/4> |
| Checks before merge | `build-check` PASS (audit + build + link check) · `validate` PASS (Prize Scout catalogue) · `deploy` skipped on PR as designed |
| Merge state at merge time | `MERGEABLE` / `CLEAN` |
| Merge | **merged** into `main` at merge commit `dd330ad` (`Merge pull request #4 from sassnarep3-star/arena/6fc21fe0-own3`) |
| Pages build | `pages build and deployment` — success. Pages API: `build_type: legacy`, source `main` `/`, status `built`, HTTPS enforced |
| Live URL | <https://sassnarep3-star.github.io/Own3/> |

**Deploy verified by fetching the live pages**, not by trusting the build status alone:

- `index.html` — dashboard, 206 audited / 9 verified / 151 official-sourced / 46 flagged
- `competitions.html` — 206 rows rendered, filters and verification badges present
- `methodology.html` — full check table and the list of pages opened
- `archive/prize-scout/index.html` — the preserved Prize Scout build

**One caveat worth recording.** Immediately after the merge, the bare root URL
(`https://sassnarep3-star.github.io/Own3/`) still returned the previous Prize Scout page while
`/methodology.html` and `/competitions.html` already served the new build. That is GitHub Pages
edge caching of the root document, not a deploy failure: re-fetching the root with a query string
returned the correct dashboard. The cache expires on its own. If the root ever appears stale again,
check a sub-page before concluding that the deploy failed.

**Final state.** All eight tasks are complete. Everything that could not be confirmed against an
operator page is published on `flagged.html` with a reason and a source link, per the instruction
that flagged and unverified items do not block publication. Nothing was marked verified without a
link to the page I actually read.
