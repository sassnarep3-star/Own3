# Live verification log

Session: `arena/6fc21fe0` · date: 2026-11-01

Method: each operator page below was fetched directly and the quoted claim read on the page.
Only what appears on the page is recorded. Everything not in this table is marked
`official-linked` on the site — sourced, but **not** re-opened this session.

**9 of 206 rows were verified.**

| Listing | Operator page | What the page says | Prize / eligibility confirmed | Note |
|---|---|---|---|---|
| `metaculus` | <https://www.metaculus.com/tournaments/> | Page states "We are not a prediction market. You can participate for free and win cash prizes for being accurate." Live pools include FutureEval Bot Fall 2026 $50,000, Labor Automation $35,000, Forecasting Our World in Data $20,000, POTUS Predictions $15,000, US Midterms 2026 $10,000, ACX 2026 $10,000, Market Pulse 26Q4 $7,500, Metaculus Cup Fall 2026 $5,000, AI Pathways $5,000, Sagan Space $5,000, Climate Tipping Points $5,000, Animal Futures $3,400. | Free to enter, pays cash. Prize range $3,400–$50,000. | Upstream range "$3,000 to $50,000" holds, but the floor is now $3,400. Cosmetic drift only. |
| `drivendata` | <https://www.drivendata.org/competitions/> | Live prize competition: Geologic Enhanced Mapping System (GEMS) Prize Challenge — "$300,000 in prizes", 4 weeks left. Recently completed: DaT Parkinson's Challenge €25,000; Children's Speech Recognition Challenge $120,000. | Free to enter, pays cash. | Upstream says "$10,000–$200,000 total purses". The live pot is $300,000, so the stated range is stale — it understates the current top prize. |
| `arcprize` | <https://arcprize.org/> | Homepage: "Enter ARC Prize 2026 — Now $2,000,000 in prizes!"; "In partnership with Kaggle, over $2M is up for grabs." Three tracks. | $2,000,000 across three 2026 tracks, entered via Kaggle. | — |
| `cbs-pro-pickem` | <https://www.cbssports.com/fantasy/football/games/pickem/rules> | Official 2026 rules: "The Challenge is FREE to play. No purchase, wireless device or entry fee necessary to enter or win." Eligibility: registered CBS user, 50 US states + DC (PR and territories expressly excluded), 18+. 18 weekly contests, 9 Sep 2026 – 10 Jan 2027. Prizes: 18 Weekly Prizes of US$1,000 each; Season Long Prize US$5,000; Contingency Prize US$100,000 for a perfect weekly slate. | $1,000/week × 18 + $5,000 season + $100,000 perfect week. Free entry. US 50 + DC, 18+. | — |
| `mlb-beat-the-streak` | <https://www.mlb.com/apps/beat-the-streak/official-rules> | 2026 Official Rules: "NO PURCHASE NECESSARY TO ENTER OR WIN." Eligibility: US incl. commonwealths/territories/possessions and Canada excluding Quebec, 21+, registered MLB.com user. Grand Prize US$5,600,000, payable as a 30-year annuity of US$186,667/yr or a lump sum of US$3,000,000 (present value as of 12 Mar 2026); awarded only for a 57-game streak. Top Streak Prize US$10,000; awarded only if no Grand Prize and a streak of at least 20 is reached. Entry period 24 Mar 2026 to the end of the 2026 regular season. | $5,600,000 headline / $3,000,000 lump sum; $10,000 Top Streak. Free entry. US + Canada excl. Quebec, 21+. | Prize and eligibility figures are exactly right. Only the status is stale, and it is the status that matters to a reader deciding where to spend an afternoon. |
| `kaggle` | <https://www.kaggle.com/competitions> | Open prize events on the page: ARC Prize 2026 Paper Track $450,000 (8 days to go), NFL Big Data Bowl 2027 $100,000 (2 months to go), Gemma 4 Developer Agent Paper Track $35,000 (11 days to go). "Getting Started" competitions (Titanic, House Prices, Spaceship Titanic) carry no prize money. | Free to enter, pays cash on Featured/Hackathon tracks; no cash on Getting Started. | — |
| `squarespool` | <https://www.squarespool.com/> | Marketing page: "Get your own pool page in minutes — completely free." It is a squares-pool host. No prize is offered by the site; the entity running the pool sets any stakes. Upstream prize field itself says "Prizes decided by your group". | Free tool. NOT a competition and NOT a source of prize money. | Sits in a list titled competitions that pay real money, but offers no prize. Also the only non-HTTPS signup URL upstream (it does redirect to https). |
| `aflw-fantasy` | <https://aflwfantasy.afl/> | Resolves to the AFL iD OAuth sign-in flow at login.id.afl, then rendered "The page has timed out". It is genuinely an AFL-operated login, but it is not a usable public entry page. | Official AFL property; signup URL is a login redirect, not a landing page. | The record’s signup URL is a raw OAuth redirect rather than a public entry page. The canonical entry point is https://fantasy.afl.com.au/. |
| `zindi` | <https://zindi.world/competitions> | Competitions board live at zindi.world (the .africa domain now redirects here). Page lists open and past challenges. | Live, free to enter platform. | Upstream already uses zindi.world. No action needed — recorded so it is not "corrected" by mistake. |

---

Nothing else in the dataset was verified by opening a page. Where a figure could not be
sourced to an operator page, the site shows it blank and flags the row; see
`flagged.html` and `data/audit-report.json`.
