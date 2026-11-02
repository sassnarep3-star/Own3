# Executive summary

> Data as of 2026-11-01. Every figure below comes from `data/competitions.json` / `data/stats.json`; values not confirmed on an official page are blank, never estimated.

## The short version

- The **Free Money & Contest Ledger** (source site) lists **206** free-entry cash competitions. It was re-checked against operators' own pages: **27** rows (13%) were read on an official page, **6** fully verified, **11** partially, **10** contradicted by the operator's own page. **179** rows remain unverified and are shown blank.
- **Do not trust the ledger's headline numbers.** Its "189 true free" count includes 26 ended and 10 cautioned rows, and at least one "free" contest (Tom Howard poetry) charges a $27 fee.
- **14** rows have no usable official source and are held out of the tables (see [Flagged for Review](flagged-for-review.html#quarantined)). The other **192** rows each carry an official link.
- The best verified opportunities for an AI-assisted entrant are in [Best bets](best-bets.html): **9** Tier A (free entry confirmed) and **4** Tier B (large prize, entry terms still to read).

## What to do first

1. Open [Best bets](best-bets.html) and start with Tier A; check each competition's rules before entering.
2. Time-sensitive: FundedFast championship joining runs 2026-11-04 to 2026-11-09; NASCAR Fantasy Live closes 2026-11-08; Sony World Photography Student category closes 2026-11-27; ESPN College Pick'em ends 2026-12-06.
3. **AI-agent rule check:** the only AI rule read on an official page is Winning Writers' ban on AI-generated text (Wergle Flomp). All other competitions' AI-tool policies are unverified.

## Key findings

| Finding | Detail |
|---|---|
| Ledger is stale | All 206 rows carry a 2026-08-19 check date, 74 days before this review. |
| Contradictions | 10 of 27 checked rows contradict their official page: a fee, an ended contest, a different prize or a dead link. [Details](flagged-for-review.html#contradicted). |
| "Free USD cash" overstated | 65 rows stamped free mention non-cash prizes and 30 use non-USD currency (keyword flags). |
| Source quality | 20 rows tag a third-party site (news, press release, social, aggregator) as "official". These are not accepted as official links. |
| Shared links | 19 rows share a signup URL with another row, so the link is a platform, not the specific contest. |
| Already ended | 27 rows are marked ended by the ledger itself. |
| Weighting | Sports picks are 129 of 206 rows; the largest verified prizes are in code/ML and hackathon competitions. |
| Site usability | The source page shows all entries as one long page with no search or filters (its own text says so); this site adds search, filters, category pages and mobile card tables. |

## Scope and honesty

- Verified means read on the operator's official page on 2026-11-01. Method and the full log of pages read: [Method & sources](method.html).
- Win odds are not published on the pages read, so "best" means largest verified prize with free entry and open status, not expected value.
- External link reachability could not be machine-tested from the build environment; internal links are validated in CI.
- Source repository pinned at commit `466f7c1`.

## Where to go next

- [Dashboard](index.html) · [All entries](all-entries.html) · [Analysis](analysis.html) · [Flagged for Review](flagged-for-review.html) · [Method](method.html)
