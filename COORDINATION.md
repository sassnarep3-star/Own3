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
| T3 | Live verification against official pages | in progress | `arena-6fc21fe0` | `data/verification-live.md` | Operator pages fetched with a real browser UA; only observed values recorded |
| T4 | Executive summary | in progress | `arena-6fc21fe0` | `EXECUTIVE_SUMMARY.md`, `executive-summary.html` | Built from T2 + T3 only |
| T5 | Site: landing dashboard + category subpages | in progress | `arena-6fc21fe0` | `index.html`, `competitions.html`, `<category>.html`, `assets/**` | Mobile-first, no external font/CSS dependencies |
| T6 | Flagged for Review page | in progress | `arena-6fc21fe0` | `flagged.html`, `data/flags.json` | Every flagged row with source links and reason code |
| T7 | Methodology + sources page | in progress | `arena-6fc21fe0` | `methodology.html` | Verification rules, tier definitions, scoring rubric |
| T8 | Integration: build check, broken-link check, publish | in progress | `arena-6fc21fe0` | repo root | Merges T1–T7; runs `tools/check-links.mjs`; publishes to GitHub Pages |

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
