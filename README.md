# Free Cash Competitions

An audited, mobile-first ledger of **free-to-enter competitions that can pay real money** — rebuilt
from the [Free Money & Contest Ledger](https://karagemop466-tech.github.io/FreeMoneyApps/) so that
every prize figure is sourced, every gap is visible, and the whole thing is usable on a phone.

**Live site:** <https://sassnarep3-star.github.io/Own3/>

- 📊 **[Executive summary](EXECUTIVE_SUMMARY.md)** — what was found and what to do about it
- 🚩 **[Flagged for review](https://sassnarep3-star.github.io/Own3/flagged.html)** — every defect, with sources
- 🔬 **[Method & sources](https://sassnarep3-star.github.io/Own3/methodology.html)** — what "verified" means

---

## What this is

| | |
|---|---|
| **206** listings | copied verbatim from the upstream dataset, not rescraped |
| **9** verified | opened at the operator on 2026-11-01 and the claim read on the page |
| **151** official-sourced | cites a source on the operator's own domain; not re-opened |
| **46** flagged | at least one serious defect — published, not hidden |

The site splits the ledger by **what is actually paid**. On the upstream file, a third of the
entries do not pay cash at all:

| Prize type | Rows |
|---|---|
| Cash | 122 |
| Cash mixed with goods or credit | 26 |
| Non-cash only | 23 |
| No figure stated anywhere | 35 |

## Why it exists

The upstream ledger is good research with a bad interface: 206 entries in one long scroll, no
search, no filters, external font loading that hurts on mobile, and prize figures that are not
always traceable to an operator page even though the project's own README says they must be.

It also has **two honest categories of problem** worth surfacing rather than hiding:

1. **23 rows carry no cash prize** — merchandise, tickets, vouchers, in-game items. Each row
   says so itself, but they sit in a ledger whose purpose is cash, so the headline count oversells.
2. **12 rows cite no official source**, and **13 sources are mislabelled
   `official`** — press-release wires, a broker review aggregator, affiliate bonus blogs, club sites
   and X posts standing in for the operator's own words.

Every one of those rows is published on the
[Flagged for review](https://sassnarep3-star.github.io/Own3/flagged.html) page with the reason and a
source link. Nothing was silently corrected and no value was estimated.

## Recommendation

Concentrate on **tech & data** (Kaggle, DrivenData, ARC Prize) and **forecasting** (Metaculus) —
those are the categories with automated scoring, public leaderboards, text-readable rules, free
entry with no rake, and prizes paid as cash. They are also the categories where a coding agent can
actually compound an advantage. Deprioritise **trading** and **skill** contests despite their larger
headline numbers: fees, rakes and bonus-credit terms absorb the expected value.

## Site structure

```
index.html              dashboard: stats, shortlist, category cards, legend
competitions.html       all rows — search, filters, sort
tech.html sports.html creative.html forecasting.html trading.html
skill.html trivia.html directories.html pools.html        nine category pages
all-entries.html        every row as static HTML (no JS) — the link-check spine
flagged.html            all findings by severity, with sources
analysis.html           composition, sourcing quality, category verdicts
methodology.html        provenance, verification levels, checks, limits
executive-summary.html  the summary as a page
404.html
assets/css/style.css    mobile-first, no external fonts
assets/js/app.js        table render, search, filters, sort (~600 lines, no deps)
assets/data/competitions.json   generated dataset the site renders
```

## Repository layout

```
data/source-ledger.json   verbatim copy of upstream assets/data.js → window.LEDGER
data/audit-report.json    generated: counts, flag tallies, field coverage
data/verification-live.md notes from each operator page opened
tools/audit.mjs           classifies rows, raises flags, assigns verification levels
tools/build-site.mjs      renders every HTML page from one shared shell
tools/check-links.mjs     publish gate: internal links, anchors, URL shape, tokens
src/pages/*.body.html     prose page bodies (tokens filled at build time)
src/EXECUTIVE_SUMMARY.md.tmpl
COORDINATION.md           shared task board for parallel agent sessions
```

## Build

Needs Node 18+. No dependencies.

```bash
node tools/audit.mjs        # data → flags + verification levels
node tools/build-site.mjs   # → every .html page and EXECUTIVE_SUMMARY.md
node tools/check-links.mjs  # fails the build on a broken internal link or bad URL
```

Or `npm run build`. Nothing is published unless `check-links.mjs` exits 0.

Preview locally:

```bash
python3 -m http.server 8080
```

## How verification is labelled

| Badge | Meaning |
|---|---|
| **Verified here** | The operator's own page was opened on 2026-11-01 and the claim read there. The quoted sentence appears on the row. |
| **Official source** | The row cites a source on the operator's own registrable domain. Not re-opened this session — as-reported, not freshly confirmed. |
| **Flagged** | At least one serious defect. The reason is printed on the row. |

Where no official figure exists, **the cell is blank**. There is no inference, no averaging and no
"approximately" anywhere in the table. See [methodology.html](methodology.html) for the full list of
checks and the explicit limits of the audit.

## Sources

Primary dataset: <https://github.com/karagemop466-tech/FreeMoneyApps> — `assets/data.js`, commit
`466f7c1`, upstream review date 2026-08-19.

Operator pages opened and read during this audit:

- <https://www.metaculus.com/tournaments/>
- <https://www.cbssports.com/fantasy/football/games/pickem/rules>
- <https://www.mlb.com/apps/beat-the-streak/official-rules>
- <https://www.drivendata.org/competitions/>
- <https://arcprize.org/>
- <https://www.kaggle.com/competitions>
- <https://zindi.world/competitions>
- <https://www.squarespool.com/>
- <https://aflwfantasy.afl/>

## Licence and disclaimer

Independent compilation. Not affiliated with, endorsed by or sponsored by any listed operator. No
link is an affiliate or referral link. Prizes are described only as the operator describes them; the
operator's rules win every argument. Play only where it is legal for you — age limits are 18+ or 21+
depending on the contest and your jurisdiction. Winnings may be taxable. Nothing here is legal, tax
or financial advice.
