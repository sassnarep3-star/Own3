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

| # | Task | Status | Owner | File scope | Notes |
|---|---|---|---|---|---|
| T1 | Read source ledger, capture canonical dataset | done | `arena-6fc21fe0` | `data/source-ledger.json`, `data/PROVENANCE.md` | 206 listings imported from karagemop466-tech/FreeMoneyApps `assets/data.js` @ `466f7c1` |
| T2 | Structural audit of all 206 rows (programmatic) | done | `arena-6fc21fe0` | `tools/audit.mjs`, `data/audit-report.json` | Tiers, URLs, field coverage, prize types, duplicates |
| T3 | Live verification against official pages | done | `arena-6fc21fe0` | `data/verification-live.md` | 9 operator pages fetched; only values read on the page are recorded |
| T4 | Executive summary | done | `arena-6fc21fe0` | `EXECUTIVE_SUMMARY.md`, `executive-summary.html` | Generated from the audit report so no number is hand-typed |
| T5 | Site: landing dashboard + category subpages | done | `arena-6fc21fe0` | `index.html`, `competitions.html`, `<category>.html`, `all-entries.html`, `assets/**` | Mobile-first, no external font/CSS dependencies, no build step at runtime |
| T6 | Flagged for Review page | done | `arena-6fc21fe0` | `flagged.html` | 117 rows / 200+ findings, grouped by severity with source links and reason codes |
| T7 | Methodology + sources page | done | `arena-6fc21fe0` | `methodology.html` | Verification rules, tier definitions, every check, explicit limits |
| T8 | Integration: build check, broken-link check, publish | in progress | `arena-6fc21fe0` | repo root | `tools/check-links.mjs` gates the build; publishing to GitHub Pages |

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
