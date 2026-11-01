/* USD Contest Ledger — pass S, 2026-08-19
   Excluded by policy: sweepstakes, sweepstakes casinos, casino products, and any contest that
   requires an account with a gambling operator (bookmaker, sportsbook or real-money DFS).

   Sourcing rule: any listing that states a specific prize figure must cite the operator's
   own rules or game page. Each source carries a "tier" of official | affiliate | forum.
   Affiliate sources may be listed as secondary colour, never as the sole basis for a figure. */
window.LEDGER = {
  "reviewed": "2026-08-19",
  "pass": "S",
  "featured": [
    "kaggle",
    "espn-pickem",
    "fanatics-survivor",
    "cbs-pro-pickem",
    "dirty-dozen",
    "espn-cfb"
  ],
  "addedThisPass": [
    "checkmate-gaming",
    "buzz-fantasy-golf",
    "fundedfast-open",
    "hipa",
    "sony-world-photo",
    "world-press-photo",
    "weather-potw",
    "epoty",
    "spie-light",
    "istanbul-photo-awards"
  ],
  "addedThisPassC": [
    "espn-pickem",
    "espn-survivor",
    "espn-wintotals",
    "espn-playoff",
    "espn-pigskin",
    "espn-cfb",
    "cbs-pro-pickem",
    "cbs-cfb-pickem",
    "fox-super6",
    "fanatics-survivor",
    "yahoo-survival",
    "pickwatch",
    "beat-the-geek",
    "tsg-playoff",
    "favorites-pickem",
    "thelines-survivor",
    "rams-pickem",
    "draft-pro",
    "splash-mock",
    "fftoday-draft",
    "rotoballer",
    "apex-fantasy",
    "fpl-official",
    "fpl-second-chance",
    "fpl-draft",
    "fantasy-efl",
    "telegraph-ff",
    "ucl-fantasy",
    "pl-predictor",
    "pooltracker-epl",
    "ffs-fpl",
    "ffs-ucl",
    "ffs-efl",
    "ffs-tattico",
    "football-mad",
    "fantasy-arena",
    "lazyfpl",
    "fplhub",
    "bona-fide",
    "olka",
    "fplmanager-india",
    "fplstore",
    "pitchbooking",
    "dirty-dozen",
    "the-special-one",
    "andys-predictor",
    "pickem-sports",
    "sports-predictor",
    "goaloracle",
    "oddspedia",
    "streak-for-cash",
    "gamersaloon",
    "playerslounge",
    "officepoolstop",
    "funofficepools",
    "mysurvivorpool",
    "gridirongames",
    "squarespool",
    "myfantasyleague",
    "trofeo"
  ],
  "types": [
    {
      "id": "skill",
      "name": "Skill tournaments",
      "blurb": "Head-to-head or multiplayer skill games. Free rooms usually pay gems, not cash. Real USD almost always requires an entry fee."
    },
    {
      "id": "trivia",
      "name": "Trivia competitions",
      "blurb": "Live or async quiz contests. Free daily plays exist on some apps. Prize pools are split among remaining winners."
    },
    {
      "id": "sports",
      "name": "Fantasy & sports picks",
      "blurb": "Daily fantasy freerolls and sweepstakes sportsbooks. Free tickets or free coins can win USD; most large pools are paid-entry."
    },
    {
      "id": "creative",
      "name": "Creative contests",
      "blurb": "Writing, photo, and brand challenges judged on a submission. Some are free; some lock cash prizes behind a membership."
    },
    {
      "id": "forecasting",
      "name": "Forecasting tournaments",
      "blurb": "Judgement competitions scored on calibrated accuracy. You submit probability estimates, not wagers — nothing is staked and prizes come from sponsors."
    },
    {
      "id": "market",
      "name": "Market competitions",
      "blurb": "Paper-trading and simulated-investing contests scored on portfolio return. Free to enter; prizes are funded by the operator, not your own stake."
    },
    {
      "id": "tech",
      "name": "Tech & data competitions",
      "blurb": "Hackathons and machine-learning contests with published USD prize pools. Free to enter; winners complete tax and identity checks."
    },
    {
      "id": "directory",
      "name": "Directories & forums",
      "blurb": "Places that list many current contests. Use them to find new promotions, then verify each contest’s own official rules."
    },
    {
      "id": "pools",
      "name": "Free pool & league platforms",
      "blurb": "Free tools for running your own pick’em, survivor, squares, or fantasy league. The platform is free; the prize pot is funded by your group."
    }
  ],
  "verificationLevels": [
    {
      "id": "account",
      "name": "Account only",
      "meaning": "Email or social login is enough to play. Prize claims usually still require a matching name and contact info."
    },
    {
      "id": "eligibility",
      "name": "Eligibility check",
      "meaning": "Age, residency, and one-account rules are enforced. Winners sign an affidavit or confirm identity before payment."
    },
    {
      "id": "kyc",
      "name": "Full KYC",
      "meaning": "Government photo ID, proof of address, and sometimes a selfie or source-of-funds check before any USD redemption."
    },
    {
      "id": "tax",
      "name": "Tax paperwork",
      "meaning": "US prizes of $600+ typically require a W-9. Non-US winners may need a W-8BEN. Taxes are the winner’s responsibility."
    }
  ],
  "listings": [
    {
      "id": "solitaire-cash",
      "name": "Solitaire Cash (Papaya)",
      "short": "iOS skill solitaire. Free Gem tournaments exist. USD prizes sit in separate cash rooms that charge an entry fee.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.papaya.com/",
      "iosUrl": "https://apps.apple.com/us/app/solitaire-cash-win-real-money/id1252281551",
      "tosUrl": "https://www.papaya.com/terms-of-use",
      "rulesUrl": "https://www.papaya.com/faq",
      "prizeUsd": "Cash rooms advertise prizes up to tens of dollars per event",
      "prizeNote": "Papaya FAQ: free competitions use Gems; cash competitions use money. Platform takes a fee from the entry pool.",
      "minCashout": "PayPal withdrawal; $1 processing fee reported. Bonus Cash cannot be withdrawn.",
      "payoutMethods": [
        "PayPal",
        "Apple Pay (some Papaya titles)"
      ],
      "eligibility": "18+, not in a Prohibited Jurisdiction under Papaya Gaming Laws section.",
      "restricted": "Papaya blocks cash competitions where skill-game-for-cash is illegal. IA often unavailable; several states Bonus-Cash-only.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Account email + payment method.",
          "Larger withdrawals trigger ID and proof of address.",
          "One account. Multi-accounting is a ban reason.",
          "Claim prizes within 60 days or Papaya may forfeit them."
        ]
      },
      "signupSteps": [
        "Install Solitaire Cash from the App Store.",
        "Create an account with a real email.",
        "Play Gem (free) rooms to learn scoring — those prizes are gems, not USD.",
        "Only enter Cash rooms if you accept losing the entry fee."
      ],
      "howToWin": [
        "Every player in a tournament gets the same seeded deck, timer, and rules.",
        "Skill-matched lobbies. No bots per Papaya FAQ / FTI memo.",
        "Highest score wins the published table."
      ],
      "howToGetMoney": [
        "Win a Cash Competition. Entry paid with Bonus Funds is refunded as bonus; extra winnings pay in cash (ToS §14).",
        "Withdraw to PayPal. Withdrawing forfeits remaining Bonus Cash.",
        "If you skip cash play for 90 days, Bonus Funds can be forfeited."
      ],
      "tosNotes": [
        "ToS effective 2026-02-12: Services may not be used for gambling; money is not required to play (Gems path).",
        "Cash competitions are withheld in Prohibited Jurisdictions.",
        "Extra Play can automatically enter follow-on tournaments using your score for up to 30 days."
      ],
      "redFlags": [
        "This is not a free-USD competition. Free rooms do not pay dollars.",
        "House rake on cash rooms. Bonus Cash traps are a frequent Reddit complaint.",
        "Highly promotional ads overstate typical winnings."
      ],
      "sources": [
        {
          "title": "Papaya FAQ",
          "url": "https://www.papaya.com/faq",
          "tier": "official"
        },
        {
          "title": "Papaya Terms of Use",
          "url": "https://www.papaya.com/terms-of-use",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "bingo-cash",
      "name": "Bingo Cash (Papaya)",
      "short": "Same Papaya engine as Solitaire Cash, bingo format. Free Gem rooms; cash rooms need an entry fee.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.papaya.com/",
      "iosUrl": "https://apps.apple.com/us/app/bingo-cash-win-real-money/id1263102011",
      "tosUrl": "https://www.papaya.com/terms-of-use",
      "rulesUrl": "https://www.papaya.com/faq",
      "prizeUsd": "Cash-room prize tables vary",
      "prizeNote": "Finder 2026: free Gems tournaments; cash tournaments from about $0.50. Restricted: IA unavailable; AZ, LA, ME Bonus Cash only (confirm live).",
      "minCashout": "About $5 via PayPal / Apple Pay (reviews)",
      "payoutMethods": [
        "PayPal",
        "Apple Pay"
      ],
      "eligibility": "18+, Papaya permitted jurisdictions.",
      "restricted": "See Papaya prohibited list. Same Bonus-Cash forfeiture rules as Solitaire Cash.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Same Papaya stack: payment method + ID on larger cashouts."
        ]
      },
      "signupSteps": [
        "Install Bingo Cash on iOS.",
        "Play free Gem rooms first.",
        "Link PayPal only if you later play cash rooms and win withdrawable cash."
      ],
      "howToWin": [
        "Speed and accuracy on identical bingo cards / clocks for the room."
      ],
      "howToGetMoney": [
        "Win cash rooms → withdrawable balance → PayPal. Bonus Cash is not withdrawable."
      ],
      "tosNotes": [
        "Governed by the same Papaya Terms of Use as other Papaya titles."
      ],
      "redFlags": [
        "Do not install expecting free USD. Gems ≠ dollars."
      ],
      "sources": [
        {
          "title": "Papaya FAQ",
          "url": "https://www.papaya.com/faq",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "skillz",
      "name": "Skillz / Blackout Bingo / Skillz Arena",
      "short": "Largest US skill-cash platform. Free practice with Z/Gemz. Cash prizes require a cash entry in enabled states.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.skillz.com/",
      "iosUrl": "https://apps.apple.com/us/app/skillz-arena/id6761981587",
      "tosUrl": "https://www.skillz.com/terms-of-service/",
      "rulesUrl": "https://www.skillz.com/",
      "prizeUsd": "Cash match prizes vary by entry; platform has paid out large historical totals",
      "prizeNote": "Skillz Arena (2026) markets Solitaire and Puzzle Blockz with Gemz practice and a shared cash wallet.",
      "minCashout": "Varies by title; PayPal / Apple Pay / bank",
      "payoutMethods": [
        "PayPal",
        "Apple Pay",
        "bank / debit"
      ],
      "eligibility": "18+, cash play in ~45 US states.",
      "restricted": "Cash commonly unavailable in AR, CT, DE, LA, SD. Card titles may also block ME and IN.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Skillz account inside the individual game or Skillz Arena.",
          "Identity checks before cash-out.",
          "One account across the Skillz network."
        ]
      },
      "signupSteps": [
        "Install Skillz Arena or a Skillz title such as Blackout Bingo.",
        "Create an 18+ account.",
        "Use free Gemz / Z / Ticketz to practice.",
        "Only deposit if you intend to enter cash matches."
      ],
      "howToWin": [
        "Higher score vs a matched opponent or field wins the prize table."
      ],
      "howToGetMoney": [
        "Cash winnings settle to the Skillz wallet.",
        "Bonus Cash cannot be withdrawn and is usually a fraction of each entry.",
        "Withdraw to PayPal or the original payment method."
      ],
      "tosNotes": [
        "Z coins are entertainment and have no cash value.",
        "Cash gameplay is geo-fenced.",
        "Welcome cash matches are time-limited and are not a free prize."
      ],
      "redFlags": [
        "Free tournaments almost never pay USD.",
        "You can lose every cash entry fee."
      ],
      "sources": [
        {
          "title": "Skillz",
          "url": "https://www.skillz.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pocket7",
      "name": "Pocket7Games",
      "short": "iOS multi-game skill venue (solitaire, bingo, 21, pool). Free tickets exist; cash events need an entry.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.pocket7games.com/",
      "iosUrl": "https://apps.apple.com/us/app/pocket7games-win-money/id1076225744",
      "tosUrl": "https://www.pocket7games.com/",
      "rulesUrl": "https://www.pocket7games.com/",
      "prizeUsd": "Cash tournament prize pools",
      "prizeNote": "Daily free-ticket events are for practice or non-cash currency unless a specific promo says otherwise.",
      "minCashout": "PayPal / Venmo / Visa as offered",
      "payoutMethods": [
        "PayPal",
        "Venmo",
        "Visa"
      ],
      "eligibility": "18+, enabled US jurisdictions.",
      "restricted": "State blocks similar to other skill-cash apps.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Account + payment verification before withdrawal."
        ]
      },
      "signupSteps": [
        "Install Pocket7Games from the App Store.",
        "Register and collect daily free tickets.",
        "Read each event card: Ticket vs Cash."
      ],
      "howToWin": [
        "Place on the event leaderboard."
      ],
      "howToGetMoney": [
        "Only cash-event winnings withdraw."
      ],
      "tosNotes": [
        "Entry fees fund the prize pool minus the operator cut."
      ],
      "redFlags": [
        "Free tickets ≠ free USD."
      ],
      "sources": [
        {
          "title": "Pocket7Games",
          "url": "https://www.pocket7games.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "givling",
      "name": "Givling",
      "short": "iOS/Android trivia. Two free plays per day. Weekly team jackpots in USD plus a controversial student-loan queue.",
      "type": "trivia",
      "status": "ended",
      "freePath": "partial",
      "platforms": [
        "ios",
        "web"
      ],
      "signupUrl": "https://www.givling.com/",
      "iosUrl": "https://apps.apple.com/us/app/givling/id966107040",
      "tosUrl": "https://www.givling.com/",
      "rulesUrl": "https://www.givling.com/",
      "prizeUsd": "Trivia removed — no longer a trivia contest",
      "prizeNote": "Givling removed trivia (app v3.0.1, Oct 2025) and removed the free queues (v3.0.0, Sep 2025). The trivia jackpot this entry described no longer exists.",
      "minCashout": "PayPal for cash-team prizes; loan prizes pay a servicer, not you",
      "payoutMethods": [
        "PayPal",
        "Direct to loan/mortgage servicer"
      ],
      "eligibility": "US-focused. Cash availability may vary by state.",
      "restricted": "Review current state availability. Do not spend to chase the queue.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Account + PayPal for cash prizes.",
          "Loan/mortgage prizes require servicer details and may have extra documentation."
        ]
      },
      "signupSteps": [
        "Install Givling and create an account.",
        "Play the two free daily games only.",
        "Ignore coin packages unless you fully understand the queue is pay-to-climb."
      ],
      "howToWin": [
        "Your score is teamed with other recent players. Highest team splits the weekly cash pot.",
        "A separate points queue funds debt-payoff prizes and is dominated by spenders."
      ],
      "howToGetMoney": [
        "Cash-team winners are paid via PayPal.",
        "Queue ‘wins’ may never hit your bank account — they go to a servicer."
      ],
      "tosNotes": [
        "Company historically said no purchase is required to win.",
        "TINA.org: big queue prizes effectively require heavy spending.",
        "Prize-pool size depends on ad and coin revenue — it is not a fixed house bank."
      ],
      "redFlags": [
        "People have spent hundreds chasing the $50k queue.",
        "Treat this as a free trivia toy, not a debt plan."
      ],
      "sources": [
        {
          "title": "Givling",
          "url": "https://www.givling.com/",
          "tier": "official"
        },
        {
          "title": "TINA.org Givling investigation",
          "url": "https://truthinadvertising.org/articles/what-you-should-know-about-the-trivia-game-app-givling/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "vocal",
      "name": "Vocal Challenges",
      "short": "Browser writing contests with USD prizes. Some challenges are free; many large pots require paid Vocal+.",
      "type": "creative",
      "status": "mixed",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://vocal.media/challenges",
      "iosUrl": "",
      "tosUrl": "https://vocal.media/resources/challenges-frequently-asked-questions",
      "rulesUrl": "https://vocal.media/resources/challenges-frequently-asked-questions",
      "prizeUsd": "Open challenges often $200; specials have gone to $5,000–$20,000",
      "prizeNote": "FAQ: you are not required to pay to enter, but Vocal+-only challenges exist. As of the 2026 challenge board, many $200 prompts remain Vocal+ gated.",
      "minCashout": "Stripe payout of the prize; no store-credit conversion",
      "payoutMethods": [
        "Stripe (local currency)"
      ],
      "eligibility": "Generally 13+. Must live in a Stripe-supported country to be paid.",
      "restricted": "Non-Stripe countries cannot win cash. Stories must meet community guidelines and word counts.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free Vocal account (or Vocal+ if the challenge requires it).",
          "Winners get email + a request for tax and Stripe details.",
          "Connect Stripe. Cash is sent after tax info is complete."
        ]
      },
      "signupSteps": [
        "Create a free account at vocal.media.",
        "Open Challenges and read whether the challenge is All creators or Vocal+ only.",
        "Write or select a story in the required word range and submit via the challenge dropdown."
      ],
      "howToWin": [
        "Editors/judges pick winners. Not a random sweepstakes (unless a specific challenge says otherwise)."
      ],
      "howToGetMoney": [
        "If selected, reply to Vocal with tax/shipping info.",
        "Receive USD (or converted currency) on Stripe."
      ],
      "tosNotes": [
        "Official rules are linked on each challenge page.",
        "Multiple entries are allowed on most challenges.",
        "Previously published Vocal stories can often be re-entered."
      ],
      "redFlags": [
        "A $99/year Vocal+ fee is not a free competition.",
        "Filter for challenges that do not say Vocal+ exclusive."
      ],
      "sources": [
        {
          "title": "Vocal Challenges FAQ",
          "url": "https://vocal.media/resources/challenges-frequently-asked-questions",
          "tier": "official"
        },
        {
          "title": "Vocal Challenges board",
          "url": "https://vocal.media/challenges",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "kaggle",
      "name": "Kaggle Competitions",
      "short": "Browser data-science contests. Featured competitions publish USD prize pools. Getting Started tracks usually pay $0.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.kaggle.com/competitions",
      "iosUrl": "",
      "tosUrl": "https://www.kaggle.com/legal/terms",
      "rulesUrl": "https://www.kaggle.com/competitions",
      "prizeUsd": "Featured pots commonly $5,000–$100,000+; specials exceed $1M",
      "prizeNote": "Most competitors earn $0. Beginner competitions explicitly have no cash prize.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Wire / Stripe to the verified winner"
      ],
      "eligibility": "Each competition has its own rules (age, export control, team size, employee bans).",
      "restricted": "Some competitions bar residents of sanctioned countries or sponsor employees.",
      "verification": {
        "level": "tax",
        "steps": [
          "Kaggle account.",
          "On winning: KYC + W-9 or W-8BEN + bank/Stripe.",
          "Team prizes are paid to the team lead to split."
        ]
      },
      "signupSteps": [
        "Create a free Kaggle account.",
        "Open Competitions and filter Prize > $0.",
        "Accept that competition’s rules before submitting.",
        "Submit predictions before the deadline. Final rank uses the private test set."
      ],
      "howToWin": [
        "Leaderboard on a hidden test set. Ties and team merges have specific rules."
      ],
      "howToGetMoney": [
        "Sponsor/Kaggle pays after verification. Taxes withheld if required."
      ],
      "tosNotes": [
        "Competition rules override the general site ToS on IP, licensing, and eligibility.",
        "Using extra data or leaking the test set is a disqualification."
      ],
      "redFlags": [
        "Weeks of work for a winner-take-most outcome.",
        "Read whether the prize requires open-sourcing your solution."
      ],
      "sources": [
        {
          "title": "Kaggle Competitions",
          "url": "https://www.kaggle.com/competitions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "devpost",
      "name": "Devpost Hackathons",
      "short": "Browser directory of judged hackathons. Many are free to enter and pay winners in USD via the event’s official rules.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://devpost.com/hackathons",
      "iosUrl": "",
      "tosUrl": "https://info.devpost.com/terms",
      "rulesUrl": "https://devpost.com/hackathons",
      "prizeUsd": "Per event — currently $10,000 to $685,000 per hackathon",
      "prizeNote": "Live examples on the hackathons index: RevenueCat Shipaton $685,000; All Things Agentic $180,000; Agentic Cinema $75,000; Agents for Humans $40,000. Smaller community events run to a few thousand. The previous \"$500–$25,000\" range understated this.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid to the submitting individual, team rep, or organization"
      ],
      "eligibility": "Set per event (age, student-only, country, team size).",
      "restricted": "US tax withholding may apply. Some events exclude sponsor countries or employees.",
      "verification": {
        "level": "tax",
        "steps": [
          "Devpost account.",
          "Submit a public project page before the deadline.",
          "Winners complete sponsor tax paperwork. A portion may be withheld."
        ]
      },
      "signupSteps": [
        "Create a free Devpost account.",
        "Browse hackathons. Open Rules before you build.",
        "Register, build, and submit through Devpost."
      ],
      "howToWin": [
        "Judged on the published criteria. Not random."
      ],
      "howToGetMoney": [
        "Sponsor pays the entrant or team representative.",
        "The representative must split the prize inside the team."
      ],
      "tosNotes": [
        "Official Rules on each event page control prizes.",
        "You usually keep IP except for a license the rules describe."
      ],
      "redFlags": [
        "Some ‘prizes’ are only credits or swag. Confirm USD in the prize table."
      ],
      "sources": [
        {
          "title": "Devpost Hackathons",
          "url": "https://devpost.com/hackathons",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "arcprize",
      "name": "ARC Prize (via Kaggle)",
      "short": "High-dollar abstraction-and-reasoning competition hosted with Kaggle. Free to submit; open-source requirements apply.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://arcprize.org/",
      "iosUrl": "",
      "tosUrl": "https://arcprize.org/",
      "rulesUrl": "https://www.kaggle.com/competitions/arc-prize-2026-paper-track",
      "prizeUsd": "$2,000,000 across three 2026 tracks",
      "prizeNote": "Verified on arcprize.org and each Kaggle track: ARC-AGI-3 $850,000, ARC-AGI-2 $700,000 (Progress $275k + Grand $275k + Bonus $150k), Paper Prize $450,000. Submissions due 2 Nov 2026; winners announced 4 Dec 2026. All prizes require open-sourcing the solution.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "As published by ARC Prize / Kaggle"
      ],
      "eligibility": "See the live Kaggle rules (open source, compute limits, no internet at eval).",
      "restricted": "Must follow the Kaggle submission constraints.",
      "verification": {
        "level": "tax",
        "steps": [
          "Kaggle + ARC eligibility + tax docs on award."
        ]
      },
      "signupSteps": [
        "Read arcprize.org for the current year structure.",
        "Enter through the designated Kaggle competition.",
        "Open-source if you want prize eligibility."
      ],
      "howToWin": [
        "Score on held-out ARC-AGI tasks under the compute rules."
      ],
      "howToGetMoney": [
        "Prize committee / Kaggle payout after verification."
      ],
      "tosNotes": [
        "Hardware and internet limits are strict. Read them before investing compute."
      ],
      "redFlags": [
        "Research-grade difficulty. Not a casual contest."
      ],
      "sources": [
        {
          "title": "ARC Prize 2026 (official)",
          "url": "https://arcprize.org/competitions/2026",
          "tier": "official"
        },
        {
          "title": "ARC-AGI-2 on Kaggle — prize breakdown",
          "url": "https://www.kaggle.com/competitions/arc-prize-2026-arc-agi-2/overview",
          "tier": "official"
        },
        {
          "title": "ARC-AGI-3 on Kaggle",
          "url": "https://www.kaggle.com/competitions/arc-prize-2026-arc-agi-3",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "reedsy-dir",
      "name": "Reedsy Writing Contest List",
      "short": "Curated list of living writing contests with prize and entry-fee fields. Use the $0 fee filter.",
      "type": "directory",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://reedsy.com/resources/writing-contests",
      "iosUrl": "",
      "tosUrl": "https://reedsy.com/privacy",
      "rulesUrl": "https://reedsy.com/resources/writing-contests",
      "prizeUsd": "Listed per contest (hundreds to tens of thousands)",
      "prizeNote": "Reedsy’s own Prompts contest charges a small fee. Prefer third-party listings marked $0.",
      "minCashout": "n/a — directory",
      "payoutMethods": [
        "Each contest sponsor"
      ],
      "eligibility": "Per contest (often 18+, original unpublished work).",
      "restricted": "Many are country-limited.",
      "verification": {
        "level": "tax",
        "steps": [
          "Winners deal with the contest sponsor’s affidavit and tax forms."
        ]
      },
      "signupSteps": [
        "Open the Reedsy contest index.",
        "Filter entry fee $0 and confirm the prize is cash USD (not ‘publication only’).",
        "Enter on the sponsor’s official form."
      ],
      "howToWin": [
        "Judged literary contests, unless the listing says sweepstakes."
      ],
      "howToGetMoney": [
        "Sponsor pays after winner verification."
      ],
      "tosNotes": [
        "Always keep a copy of the official rules PDF."
      ],
      "redFlags": [
        "Reading-fee contests are not free competitions."
      ],
      "sources": [
        {
          "title": "Reedsy writing contests",
          "url": "https://reedsy.com/resources/writing-contests",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "drivendata",
      "name": "DrivenData",
      "short": "Social-impact data-science contests with published USD purses. Free to enter; winners paid by check or wire after tax forms.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.drivendata.org/competitions/",
      "iosUrl": "",
      "tosUrl": "https://www.drivendata.org/competitions/",
      "rulesUrl": "https://www.drivendata.org/competitions/",
      "prizeUsd": "Per contest — often $10,000–$200,000 total purses",
      "prizeNote": "Not every competition pays cash. Filter for prize competitions. Winning code is usually open-sourced under MIT.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Check",
        "Wire / electronic transfer"
      ],
      "eligibility": "Set per contest. Teams allowed. Some US-person limits on federal challenges.",
      "restricted": "Employees of the sponsor are typically banned. Export-control and data-use rules apply.",
      "verification": {
        "level": "tax",
        "steps": [
          "DrivenData account.",
          "On win: eligibility packet + W-9 (US) within the stated days.",
          "Team prize split is even unless the team files a written allocation."
        ]
      },
      "signupSteps": [
        "Create a free account at drivendata.org.",
        "Open Competitions and read that contest’s full rules (they say NO PURCHASE NECESSARY).",
        "Accept the data license and submit before the UTC deadline."
      ],
      "howToWin": [
        "Private leaderboard / judged criteria in the problem statement."
      ],
      "howToGetMoney": [
        "DrivenData notifies winners by email.",
        "After verification, check or wire in about 30 days.",
        "US winners get a 1099. You pay the tax."
      ],
      "tosNotes": [
        "Winning model documentation template is mandatory for prize eligibility.",
        "Failure to return verification docs can forfeit the purse."
      ],
      "redFlags": [
        "Warm-up / practice tracks often pay $0. Read the prize table."
      ],
      "sources": [
        {
          "title": "DrivenData competitions",
          "url": "https://www.drivendata.org/competitions/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "herox",
      "name": "HeroX / Challenge.gov",
      "short": "Marketplace of judged innovation prizes, including US federal Challenge.gov pots paid by EFT.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.herox.com/challenges",
      "iosUrl": "",
      "tosUrl": "https://www.herox.com/terms",
      "rulesUrl": "https://www.challenge.gov/",
      "prizeUsd": "Per challenge — federal pots often $25,000–$500,000+",
      "prizeNote": "HeroX hosts many sponsor challenges. Challenge.gov is the official US government index; some of those are also on HeroX.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Electronic funds transfer to the team captain or entity"
      ],
      "eligibility": "Federal cash prizes usually require a US citizen/permanent-resident captain or a US-incorporated entity.",
      "restricted": "Federal employees and sponsor staff typically ineligible. International solvers may compete but cannot take the cash.",
      "verification": {
        "level": "tax",
        "steps": [
          "Register on HeroX and/or Challenge.gov.",
          "Identify a team captain who can legally receive the purse.",
          "Winners return verification and payment documents within ~10 business days.",
          "IRS withholding may apply."
        ]
      },
      "signupSteps": [
        "Browse herox.com/challenges or challenge.gov.",
        "Open Official Rules before you build.",
        "Submit through the listed platform by the deadline."
      ],
      "howToWin": [
        "Expert or agency judging on published criteria. Not a random sweep."
      ],
      "howToGetMoney": [
        "Sponsor/agency pays the captain or the entity in full. The captain must split the team."
      ],
      "tosNotes": [
        "Each challenge is its own legal promotion.",
        "IP and open-source conditions vary wildly — read them."
      ],
      "redFlags": [
        "Some HeroX listings are awareness campaigns with no cash. Confirm the prize table."
      ],
      "sources": [
        {
          "title": "HeroX challenges",
          "url": "https://www.herox.com/challenges",
          "tier": "forum"
        },
        {
          "title": "Challenge.gov",
          "url": "https://www.challenge.gov/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "xprize",
      "name": "XPRIZE",
      "short": "Large multi-year incentive prizes and occasional hackathons with seven-figure USD pools.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.xprize.org/",
      "iosUrl": "",
      "tosUrl": "https://www.xprize.org/",
      "rulesUrl": "https://www.xprize.org/",
      "prizeUsd": "Flagship prizes in the millions; 2026 Google-backed hackathon advertised a $2M pool",
      "prizeNote": "These are multi-month or multi-year team efforts, not daily apps. Competitor agreements are long and specific.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "As stated in that prize’s competitor agreement"
      ],
      "eligibility": "Per prize. Teams, labs, and companies. Sanctions and export rules apply.",
      "restricted": "Some tracks require open results, field tests, or US presence.",
      "verification": {
        "level": "tax",
        "steps": [
          "Register a team on xprize.org.",
          "Execute the competitor agreement.",
          "Milestone and grand-prize payments follow verification and judging."
        ]
      },
      "signupSteps": [
        "Open the live prize on xprize.org.",
        "Read the guidelines and competitor agreement before paying any optional team fee — many tracks are free to register.",
        "Submit on the published milestone calendar."
      ],
      "howToWin": [
        "Judged against published technical thresholds."
      ],
      "howToGetMoney": [
        "XPRIZE / sponsor pays per the agreement after judges certify the result."
      ],
      "tosNotes": [
        "Guidelines override marketing pages.",
        "IP assignment or license terms are the whole game — read them twice."
      ],
      "redFlags": [
        "Not a casual contest. Budget time in months, not evenings."
      ],
      "sources": [
        {
          "title": "XPRIZE",
          "url": "https://www.xprize.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "topcoder",
      "name": "Topcoder",
      "short": "Long-running design, development, and data-science tournaments. Many challenges pay USD to verified members.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.topcoder.com/challenges",
      "iosUrl": "",
      "tosUrl": "https://www.topcoder.com/policy",
      "rulesUrl": "https://www.topcoder.com/challenges",
      "prizeUsd": "Per challenge — hundreds to tens of thousands; TCO finals add extra purses",
      "prizeNote": "Create a free member account. Cash is paid through Topcoder’s payment stack after tax profile setup. Not every listed item is a cash challenge.",
      "minCashout": "Per Topcoder payment policy (complete tax profile first)",
      "payoutMethods": [
        "Topcoder payment / Payoneer-style rails as currently offered"
      ],
      "eligibility": "18+ typical. Some challenges are region- or skill-gated. Employees of the client are ineligible.",
      "restricted": "Payment may be blocked in sanctioned countries. You must pass member verification to get paid.",
      "verification": {
        "level": "tax",
        "steps": [
          "Topcoder member account.",
          "Complete identity and tax profile before a payout will release.",
          "TCO cash is paid within the stated window after finals."
        ]
      },
      "signupSteps": [
        "Register at topcoder.com.",
        "Open Challenges and filter for prize > $0.",
        "Submit before the challenge deadline. Read that challenge’s spec — it is the contract."
      ],
      "howToWin": [
        "Score / review board / provisional + final tests, depending on track."
      ],
      "howToGetMoney": [
        "Winnings hit your Topcoder account, then you withdraw after tax setup."
      ],
      "tosNotes": [
        "Work product licensing is defined per challenge.",
        "Late or non-passing submissions earn $0."
      ],
      "redFlags": [
        "Some ‘challenges’ are copilot or QA tasks, not contests. Check the type badge."
      ],
      "sources": [
        {
          "title": "Topcoder challenges",
          "url": "https://www.topcoder.com/challenges",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-pickem",
      "name": "ESPN NFL Pick'em",
      "short": "Free season-long pick'em. Ten free entries a week; 58 prizes split the six-figure pot.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      "prizeUsd": "$102,000 total across 58 prizes",
      "prizeNote": "Free ESPN account. Weekly and season prizes; the grand prize is the headline number.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout",
        "Check or ACH after verification"
      ],
      "eligibility": "US, 18+ (21+ where required), free ESPN account.",
      "restricted": "Void where prohibited. Employees of ESPN/Disney typically ineligible.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winners verified and notified by ESPN before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Pick'em",
          "url": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-survivor",
      "name": "ESPN NFL Survivor",
      "short": "Pick one winning team a week, no repeats. Outlast everyone for the grand prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      "prizeUsd": "$25,000 grand prize",
      "prizeNote": "Up to 25 free entries. One wrong pick eliminates that entry.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+ (21+ where required), free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Survivor",
          "url": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-wintotals",
      "name": "ESPN NFL Win Totals",
      "short": "Predict every team's regular-season win total. Free to enter.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      "prizeUsd": "$5,000",
      "prizeNote": "Free ESPN account. One set of predictions per rules.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Win Totals",
          "url": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-playoff",
      "name": "ESPN NFL Playoff Predictor",
      "short": "Predict the playoff field before the season. Free entry.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      "prizeUsd": "$10,000",
      "prizeNote": "Free ESPN account. Accuracy on playoff teams and seeding decides the winner.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Playoff Predictor",
          "url": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-pigskin",
      "name": "ESPN Pigskin Bracket Challenge",
      "short": "Bracket every playoff game. Free to enter; big grand prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      "prizeUsd": "$50,000",
      "prizeNote": "Playoff bracket. Ran 10 Jan – 8 Feb 2026; ESPN page reads \"The NFL Playoffs have ended.\" Reopens near the 2026-27 postseason.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Pigskin Bracket Challenge",
          "url": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-cfb",
      "name": "ESPN College Football Pick'em",
      "short": "College version of ESPN Pick'em with 46 prizes across the season.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      "prizeUsd": "$86,000 total (46 prizes)",
      "prizeNote": "Free ESPN account. Same format as the NFL game, college slates.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN College Football Pick'em",
          "url": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cbs-pro-pickem",
      "name": "CBS Sports Pro Football Pick'em",
      "short": "Weekly and season-long pick'em with a six-figure perfect-week jackpot.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      "rulesUrl": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      "prizeUsd": "$1K/week + $5K season + $100K perfect",
      "prizeNote": "Free CBS Sports account. Perfect-week prize requires a flawless slate.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free CBS Sports account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free CBS Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "CBS Sports Pro Football Pick'em rules",
          "url": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cbs-cfb-pickem",
      "name": "CBS Sports College Football Pick'em",
      "short": "College football pick'em with weekly, season, and perfect-week prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      "rulesUrl": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      "prizeUsd": "$1K/wk + $5K season + $100K perfect",
      "prizeNote": "Free CBS Sports account. College slates each week.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free CBS Sports account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free CBS Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "CBS Sports College Football Pick'em",
          "url": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fox-super6",
      "name": "FOX Super 6",
      "short": "Predict six outcomes for a shot at weekly five-figure cash. Free to play in 49 states.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.foxsports.com/fox-super-6",
      "rulesUrl": "https://www.foxsports.com/fox-super-6",
      "prizeUsd": "Not currently published — confirm on the live game page",
      "prizeNote": "FOX Sports shows \"Super 6 returns soon\" and \"No active games.\" Prize range is not currently published.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free FOX Sports account (49 states).",
      "restricted": "Not available in Washington state.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FOX Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FOX Super 6",
          "url": "https://www.foxsports.com/fox-super-6",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fanatics-survivor",
      "name": "Fanatics NFL Survivor League",
      "short": "Free survivor league inside the Fanatics app. $1M guaranteed, grows with each player.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://betfanatics.com/",
      "rulesUrl": "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/",
      "prizeUsd": "$1M+ guaranteed (up to $10M)",
      "prizeNote": "One team per week, no repeats. Prize splits if multiple players survive. Open to all 50 states.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 21+, free FanaticsID account. Open in all 50 states and DC.",
      "restricted": "One entry per person. See the live app for the current prize table.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Fanatics account.",
          "Winner verification before payout."
        ]
      },
      "sources": [
        {
          "title": "Fanatics Sportsbook (official)",
          "url": "https://betfanatics.com/",
          "tier": "official"
        },
        {
          "title": "Legal Sports Report — contest explainer",
          "url": "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "yahoo-survival",
      "name": "Yahoo Survival Football",
      "short": "Yahoo's free survivor game with cash prizes for the last players standing.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://football.fantasysports.yahoo.com/",
      "rulesUrl": "https://football.fantasysports.yahoo.com/",
      "prizeUsd": "Historically $6,000 total — $5,000 in MGM resort credits plus $1,000 cash",
      "prizeNote": "Per Yahoo’s official contest rules, the grand prize is a Las Vegas getaway awarded as MGM resort credits ($5,000) plus $1,000 cash. Only the $1,000 is withdrawable. The 2026/27 prize table had not been published at time of review.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Yahoo account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Yahoo account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Yahoo Survival Football",
          "url": "https://football.fantasysports.yahoo.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pickwatch",
      "name": "NFL Pickwatch Contest",
      "short": "Pick every game against the spread. Free season contest with weekly prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://nflpickwatch.com/contest/nfl/2026",
      "rulesUrl": "https://nflpickwatch.com/contest/nfl/2026",
      "prizeUsd": "Not running for 2026",
      "prizeNote": "Pickwatch states \"The NFL contest isn’t running for the 2026 season.\"",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "Open to eligible jurisdictions. Free account.",
      "restricted": "Check contest terms for residency limits.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Pickwatch account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "NFL Pickwatch Contest",
          "url": "https://nflpickwatch.com/contest/nfl/2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "beat-the-geek",
      "name": "Beat The Geek",
      "short": "Weekly pick'em with cash and season prizes, including an NFL trip.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thesportsgeek.com/contests/beat-the-geek/",
      "rulesUrl": "https://www.thesportsgeek.com/contests/beat-the-geek/",
      "prizeUsd": "NFL trip for 2 + $500/wk gift card + $2,500 season gift card",
      "prizeNote": "Weekly and season prizes are issued as Giftogram gift cards, not cash. The grand prize is a 2027 NFL game trip for two including flights and two nights’ hotel.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "Contiguous US or Canada excluding Quebec, 21+, free TheSportsGeek account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free TSG account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Beat The Geek",
          "url": "https://www.thesportsgeek.com/contests/beat-the-geek/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tsg-playoff",
      "name": "TheSportsGeek NFL Playoff Pick'em",
      "short": "Postseason pick'em with an Amazon gift card prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      "rulesUrl": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      "prizeUsd": "$500 Amazon gift card",
      "prizeNote": "Free TSG account. Opens near the playoffs.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Gift card"
      ],
      "eligibility": "US, free TSG account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free TSG account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "TheSportsGeek NFL Playoff Pick'em",
          "url": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "favorites-pickem",
      "name": "The Favorites Podcast Pick'em",
      "short": "Action Network's free pick'em with a six-figure pool and weekly payouts.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      "rulesUrl": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      "prizeUsd": "$100,000+ prize pool",
      "prizeNote": "Operator game page is titled \"The Favorites $100K Pro Football Pick’em Contest\": $40,000 grand prize, then $10,000 / $5,000 / $3,000 / $2,500 / $1,500 / $1,000 / $1,000 / $500 / $500, plus weekly top-five prizes. An affiliate figure of $120,000 was not supported.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 21+, free Action Network account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Action Network account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Favorites contest (official game page)",
          "url": "https://favorites.actionnetwork.com/games/the-favorites",
          "tier": "official"
        },
        {
          "title": "Action Network — contest FAQ",
          "url": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "thelines-survivor",
      "name": "TheLines Free NFL Survivor",
      "short": "Free survivor pool run by TheLines with a five-figure prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      "rulesUrl": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      "prizeUsd": "Not confirmed for 2026",
      "prizeNote": "Cited article is from September 2024 and covers the 2024 Week 1 contest. No 2026 equivalent confirmed.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US and Canada, 21+, excluding Quebec and Washington DC.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "TheLines Free NFL Survivor",
          "url": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "rams-pickem",
      "name": "LA Rams Pick'em",
      "short": "Team-run pick'em with resort stays, signed gear, and season tickets on offer.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      "rulesUrl": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      "prizeUsd": "Pechanga resort stay + $250 credit; weekly tickets and signed merchandise",
      "prizeNote": "Season grand prize is a 2-night Pechanga stay, $250 resort credit and a hot-air balloon ride for two. Weekly: single-game tickets, signed jersey / football / mini helmet, $75 resort credit. No cash and no season tickets.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "US, 18+, free Rams account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Rams account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "LA Rams Pick'em",
          "url": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "draft-pro",
      "name": "The Draft Pro — Perfect Draft Challenge",
      "short": "Predict all 32 first-round NFL Draft picks for a million-dollar prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      "rulesUrl": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      "prizeUsd": "$10,000 (perfect 32/32) — current NBA/NHL game",
      "prizeNote": "The $1,000,000 Perfect Draft was a one-off for the 2026 NFL Draft (closed 23 Apr 2026). thedraftpro.com now runs NBA and NHL draft contests with a $10,000 perfect-draft prize. Free to play, no purchase necessary.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free app account.",
      "restricted": "Perfect 32/32 required for the top prize.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free app account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Draft Pro (official)",
          "url": "https://www.thedraftpro.com/",
          "tier": "official"
        },
        {
          "title": "Perfect Draft LLC press release",
          "url": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "splash-mock",
      "name": "Splash Sports NFL Mock Draft",
      "short": "Mock the NFL Draft for a share of $10,000 in prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      "rulesUrl": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      "prizeUsd": "Not verified outside the entry window",
      "prizeNote": "NFL Mock Draft contest, runs pre-draft in April. Prize table not public outside the entry window.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Splash account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Splash account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Splash Sports NFL Mock Draft",
          "url": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fftoday-draft",
      "name": "FFToday NFL Draft Contest",
      "short": "Mock the first round of the NFL Draft for cash and prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.fftoday.com/contests/draftcontest.php?o=3",
      "rulesUrl": "https://www.fftoday.com/contests/draftcontest.php?o=3",
      "prizeUsd": "$100 cash + prizes",
      "prizeNote": "NFL Draft contest. 2026 entry deadline was 23 Apr 2026; returns for the 2027 draft.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free FFToday account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FFToday account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FFToday NFL Draft Contest",
          "url": "https://www.fftoday.com/contests/draftcontest.php?o=3",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "rotoballer",
      "name": "RotoBaller Challenge",
      "short": "Free season-long fantasy football tournament with cash and premium prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      "rulesUrl": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      "prizeUsd": "$500 + 50x Premium",
      "prizeNote": "Free Fleaflicker account. Draft before the deadline.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Fleaflicker account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Fleaflicker account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "RotoBaller Challenge",
          "url": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "apex-fantasy",
      "name": "Apex Fantasy Free League Entry",
      "short": "Free league entry (worth $125) via email signup.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://apexfantasyleagues.com/",
      "rulesUrl": "https://apexfantasyleagues.com/",
      "prizeUsd": "$125 league entry",
      "prizeNote": "Free email signup. Prize is a free paid-league entry, not direct cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League entry credit"
      ],
      "eligibility": "US, 18+, free account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free email signup.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Apex Fantasy",
          "url": "https://apexfantasyleagues.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-official",
      "name": "Official FPL (Premier League)",
      "short": "The free Premier League fantasy game with VIP trips, hardware, and gear for top finishers.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fantasy.premierleague.com/help/rules",
      "prizeUsd": "VIP trip + Surface Laptop + Puma gear",
      "prizeNote": "Free FPL account. Prizes are experiences and merchandise, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Global (some prize eligibility limits), free FPL account.",
      "restricted": "See official rules for prize eligibility by region.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Official Fantasy Premier League",
          "url": "https://fantasy.premierleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-second-chance",
      "name": "FPL Second Chance League",
      "short": "Official FPL side competition with Puma gear and an EA FC 26 prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      "rulesUrl": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      "prizeUsd": "Puma gear + EA FC 26 + FPL bundle",
      "prizeNote": "The cited article is the 2025/26 Second Chance league, which began at Gameweek 21 on 6 Jan 2026. A 2026/27 edition is expected mid-season.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free FPL account, eligible regions.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FPL Second Chance League",
          "url": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-draft",
      "name": "FPL Draft",
      "short": "Premier League's free draft game. Compete in head-to-head leagues.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://draft.premierleague.com/",
      "rulesUrl": "https://draft.premierleague.com/",
      "prizeUsd": "Prizes (league-dependent)",
      "prizeNote": "Free FPL account. Most draft leagues are free with friends.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free FPL account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FPL Draft",
          "url": "https://draft.premierleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fantasy-efl",
      "name": "Fantasy EFL",
      "short": "The EFL's official free fantasy game with published prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.efl.com/prizes",
      "rulesUrl": "https://fantasy.efl.com/prizes",
      "prizeUsd": "Prizes (see official prize page)",
      "prizeNote": "Free EFL account.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free EFL account, eligible regions.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free EFL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Fantasy EFL prizes",
          "url": "https://fantasy.efl.com/prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "telegraph-ff",
      "name": "Telegraph Fantasy Football",
      "short": "Free UK fantasy football with a cash first prize (5 free teams).",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasyfootball.telegraph.co.uk/",
      "rulesUrl": "https://fantasyfootball.telegraph.co.uk/",
      "prizeUsd": "£5,000 prize pool (2026/27)",
      "prizeNote": "Free to play, up to five teams per account, no Telegraph subscription required. Figure taken from the game’s own landing page.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Telegraph Fantasy Football (official)",
          "url": "https://fantasyfootball.telegraph.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ucl-fantasy",
      "name": "UCL Fantasy",
      "short": "UEFA's free Champions League fantasy game with a final trip and a PS5.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gaming.uefa.com/en/uclfantasy",
      "rulesUrl": "https://gaming.uefa.com/en/uclfantasy",
      "prizeUsd": "UCL Final trip + PS5",
      "prizeNote": "Free UEFA account. Prizes are experiences and hardware, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Global, free UEFA account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free UEFA account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "UCL Fantasy",
          "url": "https://gaming.uefa.com/en/uclfantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pl-predictor",
      "name": "Premier League Predictor",
      "short": "Free UK predictor with weekly cash prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://premierleaguepredictor.co.uk/",
      "rulesUrl": "https://premierleaguepredictor.co.uk/",
      "prizeUsd": "Weekly cash prizes",
      "prizeNote": "Free account. UK-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Premier League Predictor",
          "url": "https://premierleaguepredictor.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pooltracker-epl",
      "name": "Pooltracker EPL Predictor",
      "short": "Free EPL score predictor for private pools with friends.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      "rulesUrl": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      "prizeUsd": "Pools with friends",
      "prizeNote": "Free Pooltracker account. Prizes decided by your group.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Pooltracker account."
        ]
      },
      "sources": [
        {
          "title": "Pooltracker EPL Predictor",
          "url": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-fpl",
      "name": "Fantasy Football Scout FPL league",
      "short": "Free-to-join FPL mini-league with a £1,200 cash pool plus memberships.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27",
      "code": "eikrq4",
      "prizeUsd": "£1,200 cash + memberships",
      "prizeNote": "Join in FPL via Leagues > Join Private League with the code. Free to join.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account, eligible regions.",
      "restricted": "Follow the organizer's entry rules.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code. Organizer verifies winners."
        ]
      },
      "sources": [
        {
          "title": "Fantasy Football Scout league",
          "url": "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-ucl",
      "name": "FFScout UCL Fantasy league",
      "short": "FFScout's free Champions League fantasy league with a £150 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gaming.uefa.com/en/uclfantasy",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/mini-leagues",
      "code": "TyhVfm",
      "prizeUsd": "£150 + Mega Bundle",
      "prizeNote": "Code TyhVfm is a UEFA Champions League Fantasy code and is entered at gaming.uefa.com, not fantasy.premierleague.com.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "UCL Fantasy account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "UCL Fantasy account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FFScout mini-leagues",
          "url": "https://www.fantasyfootballscout.co.uk/mini-leagues",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-efl",
      "name": "FFScout Fantasy EFL league",
      "short": "FFScout's free Fantasy EFL league with a Mega Bundle prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.efl.com/",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/mini-leagues",
      "code": "FFSCOUT1",
      "prizeUsd": "Mega Bundle",
      "prizeNote": "Free to join with the league code.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "Fantasy EFL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "Fantasy EFL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FFScout mini-leagues",
          "url": "https://www.fantasyfootballscout.co.uk/mini-leagues",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-tattico",
      "name": "FFScout Tattico Serie A league",
      "short": "FFScout's free Serie A fantasy league with a £750 prize pool.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      "rulesUrl": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      "prizeUsd": "£750 total",
      "prizeNote": "Free to join via the organizer's link.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "Tattico Fantasy account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "Tattico account.",
          "Join via organizer link."
        ]
      },
      "sources": [
        {
          "title": "FFScout Tattico Serie A league",
          "url": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "football-mad",
      "name": "Football Mad FPL league",
      "short": "Free FPL mini-league with a £5,000 prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "u7vy7w",
      "prizeUsd": "Prize pool not confirmed for 2026/27",
      "prizeNote": "The host advertised a £5,000 pool for 2025/26 (£150/75/25 monthly, £1,000 top season prize) with an overall-prize deadline of 31 Aug 2025. No 2026/27 announcement found. Code u7vy7w is the 2025/26 code and is very likely dead.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Football Mad — host’s own league announcement (2025/26)",
          "url": "https://www.footballmad.co.uk/think-youre-a-fantasy-football-genius-prove-it-5-000-in-cash-prizes-up-for-grabs/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fantasy-arena",
      "name": "Fantasy Arena FPL league",
      "short": "Free FPL mini-league with a $1,500 prize across season and monthly.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      "code": "hs3v95",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at $1,500 (season + monthly) in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free-to-join FPL prize leagues",
          "url": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "lazyfpl",
      "name": "LazyFPL league",
      "short": "Free FPL mini-league with a £750 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.lazyfpl.com/p/fpl-leagues-with-prizes",
      "code": "ni3o0l",
      "prizeUsd": "£500 prize pool (top six)",
      "prizeNote": "Host’s own page: £500 across £150/120/90/60/45/35. Eligibility requires opening at least 50% of LazyFPL emails (minimum 10) and entering the LazyFPL Cup. An affiliate round-up listed £750 — the operator page supersedes it.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "LazyFPL readers’ mini-league (host’s own page)",
          "url": "https://www.lazyfpl.com/readers-mini-league",
          "tier": "official"
        },
        {
          "title": "FPLTips league round-up",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fplhub",
      "name": "FPL Hub league",
      "short": "Free FPL mini-league with a £1,250 prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "00ul99",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £1,250 in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FPL leagues with prizes",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "bona-fide",
      "name": "Bona Fide Sports league",
      "short": "Free FPL mini-league with a $200 first prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/",
      "code": "c7blsu",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at $200 first place in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "r/FantasyPL minileagues thread",
          "url": "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "olka",
      "name": "OLKA Express league",
      "short": "Free FPL mini-league with a €1,000 first prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/",
      "code": "5nysyw",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at €1,000 first / €500 second in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "r/FantasyPL league codes megathread",
          "url": "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fplmanager-india",
      "name": "FPLManagerIndia league",
      "short": "Free FPL mini-league with a PS5 and £200.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      "code": "10ev25",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at PS5 + £200 in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free-to-join FPL prize leagues",
          "url": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fplstore",
      "name": "fplStore_ league",
      "short": "Free FPL mini-league with a £500 voucher.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "ijuoh4",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £500 voucher in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FPL leagues with prizes",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "pitchbooking",
      "name": "Pitchbooking.com league",
      "short": "Free FPL mini-league with a £150 gift card.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/",
      "code": "5hwilh",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £150 gift card in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free FPL leagues with prizes",
          "url": "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "dirty-dozen",
      "name": "Dirty Dozen (Gambling.com)",
      "short": "Predict yellow and red cards for 12 players to win £12,000 weekly.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.gambling.com/games/dirty-dozen",
      "rulesUrl": "https://www.gambling.com/games/dirty-dozen",
      "prizeUsd": "£12,000 weekly",
      "prizeNote": "Free Gambling.com account (email only, no KYC).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "Email signup; no KYC for most players.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Gambling.com account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Dirty Dozen",
          "url": "https://www.gambling.com/games/dirty-dozen",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "the-special-one",
      "name": "The Special One",
      "short": "Last-man-standing knockout game with prizes. Email signup.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://thespecialone.co.uk/",
      "rulesUrl": "https://thespecialone.co.uk/",
      "prizeUsd": "Paused",
      "prizeNote": "Redirects to a holding page: \"UNDERGOING MEDICAL — rebrand and relaunch.\"",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Special One",
          "url": "https://thespecialone.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "andys-predictor",
      "name": "Andy's Bet Club £1M Predictor",
      "short": "Predict the final Premier League table 1-20 for a £1,000,000 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://andysbetclub.co.uk/predictor-game/",
      "rulesUrl": "https://andysbetclub.co.uk/predictor-game/",
      "prizeUsd": "£1,000,000",
      "prizeNote": "Free account (email, UK/Ireland). Perfect table required for the top prize.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Andy's Bet Club Predictor",
          "url": "https://andysbetclub.co.uk/predictor-game/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pickem-sports",
      "name": "Pick 'Em Sports (iOS)",
      "short": "Free NFL/CFB pick'em app with sponsored prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      "rulesUrl": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      "prizeUsd": "Sponsored prizes",
      "prizeNote": "Free account (email). Prizes are sponsor-funded.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free account.",
      "restricted": "See app terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Pick 'Em Sports (App Store)",
          "url": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "sports-predictor",
      "name": "Sports Predictor (iOS)",
      "short": "Free fantasy/sports prediction game with cash paid via PayPal.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      "rulesUrl": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      "prizeUsd": "Cash via PayPal",
      "prizeNote": "Free account (email). Confirm current prize structure in-app.",
      "minCashout": "Confirm in-app",
      "payoutMethods": [
        "PayPal"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See app terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Sports Predictor (App Store)",
          "url": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "goaloracle",
      "name": "GoalOracle",
      "short": "Skill-based football prediction game with prizes for top finishers.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://goaloracle.io/",
      "rulesUrl": "https://goaloracle.io/",
      "prizeUsd": "Contest complete",
      "prizeNote": "World Cup 2026 contest is complete — \"Prizes paid, records frozen.\"",
      "minCashout": "Confirm on site",
      "payoutMethods": [
        "Platform payout"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "GoalOracle",
          "url": "https://goaloracle.io/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "oddspedia",
      "name": "Oddspedia Handicapping Contests",
      "short": "Free capper/pick contests with a cash prize pool.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      "rulesUrl": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      "prizeUsd": "€2,000 prize pool",
      "prizeNote": "World Cup contest ran 20 May – 20 Jul 2026; final ranking confirmed and paid. Oddspedia runs rolling monthly/yearly contests — check the contests hub.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See contest terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Oddspedia capper contests",
          "url": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "streak-for-cash",
      "name": "Streak for the Cash",
      "short": "Streak-based prediction game. Site live but prize structure unverified in 2026.",
      "type": "sports",
      "status": "caution",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.streakforthecash.com/",
      "rulesUrl": "https://www.streakforthecash.com/",
      "prizeUsd": "Unverified",
      "prizeNote": "Included for completeness. Confirm current prizes and ownership before relying on it.",
      "minCashout": "Unknown",
      "payoutMethods": [
        "Unknown"
      ],
      "eligibility": "Unknown.",
      "restricted": "Prize structure unverified.",
      "verification": {
        "level": "account",
        "steps": [
          "Confirm the live site before entering."
        ]
      },
      "sources": [
        {
          "title": "Streak for the Cash",
          "url": "https://www.streakforthecash.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "gamersaloon",
      "name": "GamerSaloon 1-Rounders",
      "short": "Free single-round esports brackets (Madden, EA FC, NBA 2K) paying $10 as bonus cash.",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.gamersaloon.com/promos/1rounder/",
      "rulesUrl": "https://www.gamersaloon.com/promos/1rounder/",
      "prizeUsd": "$10 cash per bracket",
      "prizeNote": "Free entry; the $10 is paid as bonus cash usable for further entries (winnable via more play).",
      "minCashout": "Bonus cash, not direct withdrawal",
      "payoutMethods": [
        "Bonus cash"
      ],
      "eligibility": "18+, free GamerSaloon account.",
      "restricted": "Bonus-cash prize, not a direct USD withdrawal.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free GamerSaloon account.",
          "Winner verification for withdrawals."
        ]
      },
      "sources": [
        {
          "title": "GamerSaloon 1-Rounders",
          "url": "https://www.gamersaloon.com/promos/1rounder/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "playerslounge",
      "name": "Players' Lounge Free Tournaments",
      "short": "Free Madden and EA FC tournaments with cash prizes.",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.playerslounge.com/madden",
      "rulesUrl": "https://www.playerslounge.com/madden",
      "prizeUsd": "Cash",
      "prizeNote": "Free tournaments pay cash; confirm the specific lobby and payout before entering.",
      "minCashout": "Confirm in-app",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "18+, free Players' Lounge account.",
      "restricted": "See platform rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification for withdrawal."
        ]
      },
      "sources": [
        {
          "title": "Players' Lounge",
          "url": "https://www.playerslounge.com/madden",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "officepoolstop",
      "name": "OfficePoolStop",
      "short": "Free platform to run pick'em, survivor, confidence, squares, and bookie pools.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://officepoolstop.com/",
      "rulesUrl": "https://officepoolstop.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Platform is free; the prize pool is funded by your group, not the site.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account (commissioner).",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "OfficePoolStop",
          "url": "https://officepoolstop.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "funofficepools",
      "name": "FunOfficePools",
      "short": "Free pick'em, survivor, and squares pools for offices since 2007.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.funofficepools.com/",
      "rulesUrl": "https://www.funofficepools.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free platform. Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "FunOfficePools",
          "url": "https://www.funofficepools.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mysurvivorpool",
      "name": "MySurvivorPool",
      "short": "Free survivor and football squares hosting.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://mysurvivorpool.com/",
      "rulesUrl": "https://mysurvivorpool.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free (preseason). Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "MySurvivorPool",
          "url": "https://mysurvivorpool.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "gridirongames",
      "name": "Gridiron Games",
      "short": "Survivor pools for offices. Free for players.",
      "type": "pools",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gridirongames.com/football-pools/nfl-survivor/",
      "rulesUrl": "https://gridirongames.com/football-pools/nfl-survivor/",
      "prizeUsd": "Prizes decided by your group — commissioner pays a hosting fee",
      "prizeNote": "Gridiron Games uses pay-as-you-go pricing: the commissioner buys entries and the hosting fee covers the season. Players join free once the commissioner has paid. Previously listed here as fully free, which was wrong.",
      "minCashout": "n/a — group prize; platform charges the commissioner",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "Gridiron Games",
          "url": "https://gridirongames.com/football-pools/nfl-survivor/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "squarespool",
      "name": "SquaresPool.com",
      "short": "Free Super Bowl and any-game football squares hosting.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "http://www.squarespool.com/",
      "rulesUrl": "http://www.squarespool.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free platform. Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "SquaresPool",
          "url": "http://www.squarespool.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "myfantasyleague",
      "name": "MyFantasyLeague",
      "short": "Custom fantasy league hosting. Free trial through Week 4.",
      "type": "pools",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://home.myfantasyleague.com/",
      "rulesUrl": "https://home.myfantasyleague.com/",
      "prizeUsd": "Prizes decided by your league",
      "prizeNote": "League hosting is paid: Custom $109.95, Deluxe $219.90, Chop $44.95 for the 2026 season. Free trial runs through preseason and must be purchased before week 4. Free Draft Only leagues and mock drafts are available. Any prize pot is funded by your league.",
      "minCashout": "n/a — league prize",
      "payoutMethods": [
        "League-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "Paid after the free trial.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "MyFantasyLeague",
          "url": "https://home.myfantasyleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "trofeo",
      "name": "Trofeo.live",
      "short": "Free NFL confidence and pick'em pools. Players do not even need an account.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://trofeo.live/nfl-confidence-pool",
      "rulesUrl": "https://trofeo.live/nfl-confidence-pool",
      "prizeUsd": "Pools with friends",
      "prizeNote": "Free to use. Group-decided prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "No account required for players.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "No account required to join a pool."
        ]
      },
      "sources": [
        {
          "title": "Trofeo.live",
          "url": "https://trofeo.live/nfl-confidence-pool",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mlb-beat-the-streak",
      "name": "MLB Beat the Streak",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Official MLB game. Pick one hitter a day; a 57-game streak pays $5.6 million.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.mlb.com/apps/beat-the-streak",
      "rulesUrl": "https://www.mlb.com/apps/beat-the-streak/official-rules",
      "iosUrl": "https://apps.apple.com/us/app/mlb/id493619333",
      "prizeUsd": "$5,600,000 headline (≈$3,000,000 lump sum); $10,000 Top Streak prize",
      "prizeNote": "Official rules: the $5,600,000 Grand Prize is awarded only if an entrant reaches a 57-game streak. Read the payout terms — it is a 30-year annuity of $186,667/yr, or a lump sum of the present value, which MLB states equals about $3,000,000 as of 12 Mar 2026. If nobody reaches 57, the longest streak of at least 20 games wins $10,000. If nobody reaches 20, no prize is awarded at all. No purchase necessary. Sponsored by BetMGM, but you play with a free MLB.com account — no bookmaker account is involved.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "30-year annuity of $186,667/yr, or ~$3,000,000 lump sum",
        "Check for the $10,000 Top Streak prize"
      ],
      "eligibility": "US (incl. territories) and Canada excluding Quebec, 21+, registered MLB.com user.",
      "restricted": "Void in Quebec and where prohibited. Binding arbitration and class-action waiver apply. MLB/Genius Sports employees ineligible.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "Beat the Streak 2026 Official Rules (MLB)",
          "url": "https://www.mlb.com/apps/beat-the-streak/official-rules",
          "tier": "official"
        },
        {
          "title": "Beat the Streak hub — abbreviated rules and payout terms (MLB)",
          "url": "https://www.mlb.com/apps/beat-the-streak",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "metaculus",
      "name": "Metaculus Tournaments",
      "type": "forecasting",
      "status": "live",
      "freePath": "full",
      "short": "Free forecasting tournaments with sponsor-funded cash prizes. Not a prediction market — nothing is staked.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.metaculus.com/tournaments/",
      "rulesUrl": "https://www.metaculus.com/help/scores-faq/",
      "prizeUsd": "Per tournament — $3,000 to $50,000 prize pools",
      "prizeNote": "Live pools verified on the tournaments page: Summer 2026 FutureEval Bot $50,000; Labor Automation $35,000; Forecasting Our World in Data $20,000; POTUS Predictions $15,000; US Midterms 2026, ACX 2026 and U.S. Democracy Threat Index $10,000 each; Market Pulse 26Q3 $7,500; Metaculus Cup Summer 2026 $5,000. Several tournaments carry no prize pool — check each one. Prizes are funded by sponsoring organisations, not by Metaculus.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer / PayPal on tournament payout"
      ],
      "eligibility": "Free account, worldwide. No deposit, no KYC to participate.",
      "restricted": "Prize eligibility and payment method vary by sponsoring organisation. Scoring uses proper scoring rules — read the scores FAQ.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "Metaculus Tournaments (official)",
          "url": "https://www.metaculus.com/tournaments/",
          "tier": "official"
        },
        {
          "title": "Metaculus scores & prize distribution FAQ",
          "url": "https://www.metaculus.com/help/scores-faq/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "aicrowd",
      "name": "AIcrowd Challenges",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Open ML challenge platform hosting research contests for ARC, Sony, Meta and Amazon.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.aicrowd.com/challenges",
      "prizeUsd": "Per challenge — currently up to $150,000+",
      "prizeNote": "The ARC White-Box Estimation Challenge 2026, run with the Alignment Research Center, states a $150,000+ prize pool on its own page (Phase 1 complete, Phase 2 upcoming; 751 participants). Past pools: Meta CRAG $33,000, Sony dialogue $20,000, Global Chess Challenge $17,000. Note: ML Contests lists the same ARC challenge at $100,000 — the operator page is the figure used here.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer after winner verification"
      ],
      "eligibility": "Free account, worldwide unless a specific challenge restricts entry.",
      "restricted": "Per-challenge rules govern licensing and open-sourcing. AIcrowd’s public tag index carries a large amount of SEO spam — ignore it and use the challenge listings.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "AIcrowd Challenges (official)",
          "url": "https://www.aicrowd.com/challenges",
          "tier": "official"
        },
        {
          "title": "ARC White-Box Estimation Challenge 2026 — $150,000+ pool",
          "url": "https://www.aicrowd.com/challenges/arc-white-box-estimation-challenge-2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "zindi",
      "name": "Zindi",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Africa-focused data science competition platform. Free entry, cash prizes paid by bank transfer or PayPal.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://zindi.world/competitions",
      "rulesUrl": "https://zindi.world/rules",
      "prizeUsd": "Per challenge — typically $1,500 to $25,000",
      "prizeNote": "Live examples: R.O.A.D. Barbados Historic Handwriting Challenge $25,000; Wishlist Marine Vision Challenge $1,500. ML Contests recorded 28 Zindi competitions and $226,000 in prizes across 2025. Zindi covers international transfer fees on prizes under $500; above that the fee is deducted.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer",
        "PayPal",
        "International money transfer"
      ],
      "eligibility": "Free account, open worldwide. Teams of up to four.",
      "restricted": "Top three must provide ID, proof of residence and bank confirmation. Cheating carries a six-month ban on first offence, permanent on second. Note zindi.africa now redirects to zindi.world.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "Zindi Challenges (official)",
          "url": "https://zindi.world/competitions",
          "tier": "official"
        },
        {
          "title": "Zindi competition rules (official)",
          "url": "https://zindi.world/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "codabench",
      "name": "Codabench / CodaLab",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Open-source academic benchmark platform. 1,471 public competitions, free to enter and to host.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.codabench.org/",
      "prizeUsd": "Per benchmark — many are unpaid; ML Contests logged $248,000 across 2025",
      "prizeNote": "Operator page reports 1,471 public competitions, 77,084 users and 692,319 submissions. Most benchmarks are academic and carry no cash prize; sponsored ones do. Live examples routed through Codabench: AIMO Interpretability $10,000, RealPDE $21,000, Fair Universe weak lensing $4,000. Run by LISN / Université Paris-Saclay, originally a Microsoft–Stanford project.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the sponsoring organiser, not the platform"
      ],
      "eligibility": "Free account, worldwide.",
      "restricted": "Default public compute queue caps execution at 20 minutes. Prize terms are set by each benchmark organiser.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Prize terms and any tax paperwork are handled by the individual benchmark organiser."
        ]
      },
      "sources": [
        {
          "title": "Codabench (official)",
          "url": "https://www.codabench.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "grand-challenge",
      "name": "Grand Challenge (medical imaging)",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Medical image analysis challenges from MICCAI, RSNA and university hospitals. 264 hosted to date.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://grand-challenge.org/challenges/",
      "prizeUsd": "Per challenge — commonly $2,000 to $10,000",
      "prizeNote": "264 challenges listed; live 2026 events accepting submissions include TopAneu 2026, ISLES 2026, Surgical Visual Understanding 2026 and Airway Tree Modeling 26. Verified prize examples: RARE26 endoscopy $2,200, autoPET-V $6,600. Many challenges are prestige-only with no cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the challenge organiser"
      ],
      "eligibility": "Free account, worldwide. Algorithm-submission format — you submit a container, not predictions.",
      "restricted": "Most challenges require a paper or open-source release. Clinical data licences apply per challenge.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Prize and authorship terms set by each challenge organiser."
        ]
      },
      "sources": [
        {
          "title": "Grand Challenge — challenge index (official)",
          "url": "https://grand-challenge.org/challenges/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "crunchdao",
      "name": "CrunchDAO / ADIA Lab Challenges",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Quantitative ML competitions run with ADIA Lab. Free entry, notebook submissions.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://hub.crunchdao.com/competitions/structural-break-real-time",
      "prizeUsd": "Prize pool not stated on the competition overview — confirm before entering",
      "prizeNote": "The ADIA Lab Structural Break Challenge: Real-Time Edition is live — started 6 May 2026, closes 17 September 2026, final evaluation end of October, winners announced at the ADIA Lab Symposium 26–28 Oct 2026. ML Contests lists the pool at $100,000, but that figure does not appear on the competition overview page, so it is not stated here as fact. Check the competition’s own rules tab.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the sponsoring organisation"
      ],
      "eligibility": "Free account, worldwide.",
      "restricted": "Submissions run in the platform cloud against a private test set. CrunchDAO has a crypto-token history — confirm how any prize is denominated before relying on it.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "ADIA Lab Structural Break Challenge: Real-Time Edition (official)",
          "url": "https://hub.crunchdao.com/competitions/structural-break-real-time",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mlcontests",
      "name": "ML Contests",
      "type": "directory",
      "status": "live",
      "freePath": "full",
      "short": "The best index of live machine-learning competitions, filterable by prize pool and platform.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://mlcontests.com/",
      "prizeUsd": "n/a — directory",
      "prizeNote": "Aggregates live competitions across Kaggle, AIcrowd, DrivenData, Zindi, Codabench, CrunchDAO, Hugging Face, Tianchi, EvalAI and others, with prize pool and deadline on each. Showed 34 active competitions at review. Also publishes an annual State of ML Competitions report with per-platform prize totals.",
      "minCashout": "n/a — directory",
      "payoutMethods": [
        "n/a"
      ],
      "eligibility": "Free to browse, no account needed. Optional mailing list.",
      "restricted": "A directory, not an operator — always open the underlying competition’s own rules before entering.",
      "verification": {
        "level": "account",
        "steps": [
          "No account required to browse."
        ]
      },
      "sources": [
        {
          "title": "ML Contests (official)",
          "url": "https://mlcontests.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-tourney-challenge",
      "name": "ESPN Men’s Tournament Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN’s March Madness bracket game. Free, up to 25 brackets, $125,000 in prizes.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/bracket",
      "rulesUrl": "https://fantasy.espn.com/games/tournament-challenge-bracket-2026/howtoplay#CompleteRules",
      "prizeUsd": "$125,000 (men’s bracket)",
      "prizeNote": "Ran 19 Mar – 6 Apr 2026; the page now reads \"Thank you for playing!\". Returns for March 2027. ESPN runs four bracket games — Men’s, Women’s, and a Second Chance edition of each — with more than $370,000 in prizes across all four per ESPN’s own app listing.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout after verification"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Up to 25 brackets per entrant.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN Men’s Tournament Challenge (official)",
          "url": "https://fantasy.espn.com/games/bracket",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-tc-eliminator",
      "name": "ESPN Tournament Challenge Eliminator",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "March Madness survivor game — pick one team a day, never repeat. $10,000 grand prize.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay",
      "rulesUrl": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay#CompleteRules",
      "prizeUsd": "$10,000 grand prize",
      "prizeNote": "Ran 19 Mar – 6 Apr 2026; page now reads \"Congrats to everyone who survived the entire tournament!\". Free, up to 25 entries. Returns for March 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout after verification"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Each team may be used only once.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN Tournament Challenge Eliminator (official)",
          "url": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "nascar-fantasy-live",
      "name": "NASCAR Fantasy Live",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "NASCAR's official free fantasy game. Set a 5-driver lineup weekly across all 36 races; the season winner takes a $25,000 check.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasygames.nascar.com/live",
      "rulesUrl": "https://fantasygames.nascar.com/live/page/rules",
      "prizeUsd": "$25,000 grand prize; $10,000 second; $5,000 third; $10,000 Daytona 500 champion",
      "prizeNote": "Verified against the official rules page: the Grand Prize winner receives a $25,000 check, second place $10,000, third place $5,000, and the single-race Daytona 500 champion a further $10,000. Sponsor issues IRS Form 1099 to cash winners. No purchase necessary; free NASCAR.com registration.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Check"
      ],
      "eligibility": "Legal residents of the 50 United States and DC, 18+ at registration, free NASCAR.com account.",
      "restricted": "One registration per email address; maximum five entries. NASCAR/RSports/Wasserman employees and their households ineligible. Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free NASCAR.com account.",
          "Winner identity and eligibility verified before the check is issued."
        ]
      },
      "sources": [
        {
          "title": "NASCAR Fantasy Live 2026 Official Rules",
          "url": "https://fantasygames.nascar.com/live/page/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pga-fantasy-golf",
      "name": "PGA TOUR Fantasy Golf",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The TOUR's free season-long fantasy game. Prizes are gift cards and trips, not cash.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasygolf.pgatour.com/",
      "rulesUrl": "https://fantasygolf.pgatour.com/prizes",
      "prizeUsd": "$5,000 total ARV in gift cards + single-tournament trip prizes",
      "prizeNote": "Official prizes page: total ARV of all prizes $5,000 — overall winner $1,000 sponsor gift card, runner-up $500, second runner-up $300; four segment winners $500 and four runners-up $300. For 2026 the TOUR added a single-tournament prize each week (a Presidents Cup trip). Prizes are PGA TOUR Superstore gift cards and experiences, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Sponsor gift card",
        "Prize fulfillment (trips)"
      ],
      "eligibility": "Free PGA TOUR account; see the official rules for age and residency.",
      "restricted": "No cash alternative stated. Ties among the top two scores may be broken by random selection.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "sources": [
        {
          "title": "PGA TOUR Fantasy — Prizes (official)",
          "url": "https://fantasygolf.pgatour.com/prizes",
          "tier": "official"
        },
        {
          "title": "PGA TOUR — 2026 Fantasy Golf updates (official)",
          "url": "https://www.pgatour.com/pages/whats-new",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "nhl-bracket-challenge",
      "name": "NHL Stanley Cup Playoffs Bracket Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "NHL's free playoff bracket game. Grand prize is an NHL event trip and a limited-edition watch.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://bracketchallenge.nhl.com/en/home",
      "rulesUrl": "https://bracketchallenge.nhl.com/en/home",
      "prizeUsd": "Grand prize ARV up to $10,490; $1,000 NHL Shop gift code (Second Chance bracket)",
      "prizeNote": "Official how-to-play page: one Grand Prize is a 2026/27 NHL event package plus an Adventure Chrono 41mm NHL limited-edition watch by Norqain (ARV up to $10,490 USD); the Second Chance Bracket pays a $1,000 NHL Shop gift code. Approximately 1.33 million brackets were submitted in 2026. Ran through the 2026 Stanley Cup Final; returns for the 2027 playoffs.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment",
        "NHL Shop gift code"
      ],
      "eligibility": "50 US/DC and Canada (excluding Quebec), age of majority, free NHL account.",
      "restricted": "A skill test applies to Canadian-resident winners. No purchase necessary.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner eligibility and tiebreaker confirmation before prize fulfillment."
        ]
      },
      "sources": [
        {
          "title": "NHL Bracket Challenge — How to Play (official)",
          "url": "https://bracketchallenge.nhl.com/en/how-to-play",
          "tier": "official"
        },
        {
          "title": "NHL.com — Second Chance Bracket open (official)",
          "url": "https://www.nhl.com/news/stanley-cup-playoffs-second-chance-bracket",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-nba-playoff",
      "name": "ESPN NBA Playoff Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN's free NBA playoff bracket game with a $50,000 prize table.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nba-playoff-challenge-2026/howtoplay",
      "rulesUrl": "https://fantasy.espn.com/games/nba-playoff-challenge-2026/howtoplay",
      "prizeUsd": "$50,000 total prizes",
      "prizeNote": "Official ESPN game page lists Total Prizes $50,000, max two entries, event dates 18 Apr – 19 Jun 2026. Pick every playoff series winner. Ran to the 2026 NBA Finals; returns for the 2027 postseason.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Two entries per person.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NBA Playoff Challenge (official)",
          "url": "https://fantasy.espn.com/games/nba-playoff-challenge-2026/howtoplay",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "nba-pickem",
      "name": "NBA Pick'Em",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "The NBA's own free prediction game. Perfect playoff bracket wins $1,000,000; other prizes are trips, memorabilia and NBA Store credits.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.nba.com/",
      "rulesUrl": "https://www.nba.com/news/2026-nba-pick-em-bracket-challenge-is-now-live",
      "prizeUsd": "$1,000,000 perfect bracket; trips, signed memorabilia, $100–$500 NBA Store credits",
      "prizeNote": "Verified on nba.com: the 2026 NBA Pick'Em Bracket Challenge (presented by Castrol) pays $1,000,000 for a perfect bracket; first prize is courtside tickets, lower places get signed memorabilia plus NBAStore.com credits ($100–$500). The companion 'Streak to the Finals' daily game's grand prize is a trip to 2026 NBA Finals Game 3. Only the perfect-bracket $1M is cash — the rest is merchandise, tickets and store credit. US & Canada only. Regular-season Pick'Em returns with the 2026-27 season.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout",
        "NBA Store credit / prize fulfillment"
      ],
      "eligibility": "US & Canada residents, free NBA ID / NBA.com account.",
      "restricted": "Winners notified by email and must respond within two days. Perfect bracket required for the $1M.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "NBA.com — Pick'Em Bracket Challenge (official)",
          "url": "https://www.nba.com/news/2026-nba-pick-em-bracket-challenge-is-now-live",
          "tier": "official"
        },
        {
          "title": "NBA.com — Pick'Em Streak to the Finals (official)",
          "url": "https://www.nba.com/news/play-nba-pickem-streak-to-the-finals",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "bundesliga-fantasy",
      "name": "Bundesliga Fantasy Manager",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The official DFL Bundesliga fantasy game. Free; prizes are match trips, signed jerseys, balls and EA FC game codes.",
      "platforms": [
        "ios",
        "android",
        "web"
      ],
      "signupUrl": "https://www.bundesliga.com/",
      "iosUrl": "https://apps.apple.com/us/app/bundesliga-fantasy-manager/id1236154617",
      "prizeUsd": "Trips, signed jerseys, DERBYSTAR balls, VIP Supercup access, 50× EA SPORTS FC 27 codes (non-cash)",
      "prizeNote": "Verified on bundesliga.com and the App Store (developer DFL Deutsche Fußball Liga): prizes are a trip to a Bundesliga match, VIP access to the Franz Beckenbauer Supercup, official DERBYSTAR balls, signed jerseys and other exclusives. The 2026/27 FC 27 League (sponsored by EA SPORTS) automatically enters all players for 50 EA SPORTS FC 27 game codes after matchday 4. No cash prizes.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free, fully registered Bundesliga account. App Store age rating 13+.",
      "restricted": "Only fully registered accounts are prize-eligible. Prizes are merchandise and experiences, not cash.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Bundesliga account.",
          "Winner notified via the linked email address."
        ]
      },
      "sources": [
        {
          "title": "Bundesliga.com — Fantasy Manager 2026/27 (official)",
          "url": "https://www.bundesliga.com/en/bundesliga/news/official-fantasy-manager-season-2026-27-new-features-38255",
          "tier": "official"
        },
        {
          "title": "Bundesliga.com — FC 27 League game codes (official)",
          "url": "https://www.bundesliga.com/en/bundesliga/news/fantasy-manager-ea-fc-27-win-gamecode-38554",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "laliga-fantasy",
      "name": "La Liga Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "LALIGA's official free fantasy game. Prizes are merchandise and experiences — the official terms state no cash prizes.",
      "platforms": [
        "ios",
        "android",
        "web"
      ],
      "signupUrl": "https://www.laliga.com/",
      "iosUrl": "https://apps.apple.com/us/app/laliga-fantasy-soccer-manager/id968915185",
      "rulesUrl": "https://www.laliga.com/en-GB/legal/condiciones-de-uso-fantasy",
      "prizeUsd": "Merchandise and experiences — official terms state no cash prizes",
      "prizeNote": "Verified against LALIGA's official conditions of use: the game is free to access, but 'There will be no cash prizes or alternative prizes.' Prizes are awarded in special matchday events (e.g. El Clásico) and Sponsored Leagues. Sponsored League prizes can only be awarded to users in the Spain region, and LALIGA may request proof of identity from potential winners.",
      "minCashout": "n/a — no cash prizes",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free account. Sponsored League prizes are restricted to Spain-region users.",
      "restricted": "No cash prizes. Region choice (Spain / Global / MENA) changes which competitions are available.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "LALIGA may request proof of identity from potential winners."
        ]
      },
      "sources": [
        {
          "title": "LALIGA Fantasy — Conditions of Use (official)",
          "url": "https://www.laliga.com/en-GB/legal/condiciones-de-uso-fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "swagbucks-trivia",
      "name": "Swagbucks Daily Trivia",
      "type": "trivia",
      "status": "live",
      "freePath": "full",
      "short": "Free live and on-demand trivia games that pay in SB points, redeemable for PayPal cash or gift cards.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://www.swagbucks.com/",
      "iosUrl": "https://apps.apple.com/us/app/swagbucks-trivia-for-money/id1325285782",
      "rulesUrl": "https://help.swagbucks.com/hc/en-us/articles/15374709231764-What-is-Swagbucks-Daily-Trivia",
      "prizeUsd": "SB points redeemable for PayPal cash / gift cards",
      "prizeNote": "Verified on Swagbucks' own help pages and app listing (Prodege LLC): Daily Trivia Live runs Monday–Thursday with a shared prize pot, and the hostless Daily Trivia Challenge runs every day. Winnings are paid in SB points, redeemed for PayPal cash or gift cards at swagbucks.com/redeem. Honest framing: per-game wins are typically cents (e.g. $0.10–$0.50), not the '$1000s every week' headline, which describes the pot shared across the whole player base.",
      "minCashout": "SB redemption thresholds apply (PayPal / gift cards)",
      "payoutMethods": [
        "PayPal",
        "Gift cards (via SB redemption)"
      ],
      "eligibility": "Free Swagbucks account; see app terms for age and country.",
      "restricted": "Prizes are SB points, not direct USD. Payout amounts are small.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Swagbucks account.",
          "Redeem SB for PayPal cash or gift cards."
        ]
      },
      "redFlags": [
        "Typical wins are cents per game. This is a rewards app, not a big-money trivia contest."
      ],
      "sources": [
        {
          "title": "Swagbucks Help — What is Swagbucks Daily Trivia? (official)",
          "url": "https://help.swagbucks.com/hc/en-us/articles/15374709231764-What-is-Swagbucks-Daily-Trivia",
          "tier": "official"
        },
        {
          "title": "Swagbucks Trivia for Money — App Store (official)",
          "url": "https://apps.apple.com/us/app/swagbucks-trivia-for-money/id1325285782",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "99designs",
      "name": "99designs Design Contests",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "Designers compete for client-funded prize money. Free to create an account and enter contests.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://99designs.com/",
      "rulesUrl": "https://support.99designs.com/hc/en-us/articles/204761045-What-is-a-design-contest",
      "prizeUsd": "Client-funded prize per contest (varies)",
      "prizeNote": "Verified on 99designs' support site: a client writes a brief and funds a prize; designers submit concepts free of charge and the client picks a winner, who receives the prize money and transfers full copyright. 99designs takes a platform fee (commonly around 5–15%) out of the prize, so the designer's net is less than the listed amount.",
      "minCashout": "Paid on winning; platform fee deducted",
      "payoutMethods": [
        "Platform payout"
      ],
      "eligibility": "Free account, designers worldwide.",
      "restricted": "Only the winning design is paid. Speculative work — most entrants are not paid.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winning designers receive prize via the platform after handover."
        ]
      },
      "redFlags": [
        "Contests are speculative: you do unpaid work up front and only the winner is paid."
      ],
      "sources": [
        {
          "title": "99designs Support — What is a design contest? (official)",
          "url": "https://support.99designs.com/hc/en-us/articles/204761045-What-is-a-design-contest",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "freelancer-contests",
      "name": "Freelancer.com Contests",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "Client-funded skill contests (design, writing, video). Entering is free; the winner pays a 10%/$5 fee on the prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.freelancer.com/contest",
      "rulesUrl": "https://www.freelancer.com/faq/topic.php?id=33",
      "prizeUsd": "Client-funded prize per contest (from ~$10 up)",
      "prizeNote": "Verified on Freelancer's official FAQ: 'entering a contest is free for all contest participants.' The winning freelancer is charged 10% of the prize or $5.00 (whichever is greater) once the contest handover completes. The prize money is released automatically once the contest holder accepts the entry files.",
      "minCashout": "Prize released on contest handover",
      "payoutMethods": [
        "Freelancer balance → withdrawal"
      ],
      "eligibility": "Free account, freelancers worldwide.",
      "restricted": "10% or $5 fee deducted from the winning prize. Only the winner is paid.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Prize released after the contest holder accepts the winning entry and handover completes."
        ]
      },
      "redFlags": [
        "Speculative work — most entrants are not paid, and a fee is taken from the winner."
      ],
      "sources": [
        {
          "title": "Freelancer.com — Contest Payment FAQ (official)",
          "url": "https://www.freelancer.com/faq/topic.php?id=33",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "battlefy",
      "name": "Battlefy Esports Tournaments",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "short": "Tournament platform used by publishers and communities. Hosts free-to-enter brackets with cash prizes alongside paid events.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://battlefy.com/",
      "rulesUrl": "https://help.battlefy.com/en/articles/3940531-where-is-my-prize",
      "prizeUsd": "Prizes set per tournament by the organizer",
      "prizeNote": "Verified on Battlefy's help center: Battlefy hosts free-to-enter and paid-entry tournaments for League of Legends, Valorant, CS2, Fortnite and more, but 'Battlefy does not provide or guarantee prizing as we do not operate events' — prizes come from the tournament organizer, so you must check each event's own prize and payment terms.",
      "minCashout": "n/a — organizer pays",
      "payoutMethods": [
        "Organizer payout"
      ],
      "eligibility": "Free account; per-tournament eligibility rules.",
      "restricted": "Platform does not guarantee prizes. Some events are paid-entry.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Battlefy account.",
          "Prize terms and delivery are handled by the organizer, not the platform."
        ]
      },
      "redFlags": [
        "Always read the individual tournament's prize and payout terms before committing team time."
      ],
      "sources": [
        {
          "title": "Battlefy Help — Where is my prize? (official)",
          "url": "https://help.battlefy.com/en/articles/3940531-where-is-my-prize",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "challengermode",
      "name": "Challengermode",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "short": "Esports tournament platform across 200+ games. Most tournaments are free to enter and pay cash, gift cards or products.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.challengermode.com/",
      "rulesUrl": "https://support.challengermode.com/en/start-here/how-to-get-started-with-challengermode",
      "prizeUsd": "Per tournament — cash, gift cards, Riot Points, products",
      "prizeNote": "Verified on Challengermode's official support pages: 'Most tournaments are free to enter' and you can 'win money and other prizes.' Money won is awarded instantly and can be withdrawn at any time. Paid competitions (which need a wallet deposit) are entirely optional — there are always free competitions. Free-tier hosting is available for organizers too.",
      "minCashout": "Winnings withdrawable at any time",
      "payoutMethods": [
        "Platform wallet → withdrawal"
      ],
      "eligibility": "Free account, worldwide; connect a game account (CS2, LoL, Dota 2, Valorant, PUBG, etc.).",
      "restricted": "Some competitions are paid-entry (optional). Per-tournament eligibility applies.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account + linked game account.",
          "Winnings credited to the Challengermode wallet for withdrawal."
        ]
      },
      "redFlags": [
        "Avoid the paid competitions unless you intend to deposit — free tournaments are always available."
      ],
      "sources": [
        {
          "title": "Challengermode Support — How to get started (official)",
          "url": "https://support.challengermode.com/en/start-here/how-to-get-started-with-challengermode",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "atp-fantasy",
      "name": "ATP Fantasy (Official ATP Tour)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The ATP's official free fantasy tennis game. Pick eight players under a 100-credit cap; prizes are merchandise and 2027 tickets.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.atptour.com/",
      "rulesUrl": "https://www.atptour.com/en/news/atp-launches-official-fantasy-game-2026",
      "prizeUsd": "ATP merchandise and 2027 tickets (no cash)",
      "prizeNote": "Verified on atptour.com: ATP Fantasy (built with Deltatre) runs 23 tournament weeks from April to November 2026. Prizes are ATP partner/Store merchandise and tickets to select 2027 ATP events; the overall winner receives two tickets to two sessions of the 2027 Nitto ATP Finals with flights and accommodation included. There is no cash prize.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (merchandise, tickets)"
      ],
      "eligibility": "Free account, open worldwide; see the official terms for any region limits.",
      "restricted": "Prizes are merchandise and tickets, not cash.",
      "verification": {
        "level": "account",
        "steps": [
          "Free ATP Tour account.",
          "Winner contacted and verified before prize fulfillment."
        ]
      },
      "sources": [
        {
          "title": "ATP — ATP launches official fantasy game (official)",
          "url": "https://www.atptour.com/en/news/atp-launches-official-fantasy-game-2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "f1-fantasy",
      "name": "F1 Fantasy (Official Formula 1)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The official free Formula 1 fantasy game. $100m cap for five drivers and two constructors; prizes are tickets and store vouchers.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.formula1.com/",
      "rulesUrl": "https://www.formula1.com/en/latest/article/boost-the-fun-with-friends-and-family-this-season-f1-fantasy-is-back.2xVBBN90riZiaYXeYhOe0Z",
      "prizeUsd": "2027 F1 tickets + VIP grid walk (1st); grandstand tickets (2nd); £500 F1 Store voucher (3rd)",
      "prizeNote": "Verified on formula1.com: F1 Fantasy is the official, free-to-play fantasy game (millions of players, $100m cost cap, five drivers + two constructors, up to three teams). The global leaderboard prizes are 2027 F1 tickets to a Grand Prix of choice with VIP experiences including a grid walk (1st), two grandstand tickets (2nd), and a £500 F1 Store voucher (3rd). Non-cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, vouchers)"
      ],
      "eligibility": "Free Formula 1 account, open worldwide.",
      "restricted": "Ticket prizes carry exclusions and availability limits. No cash prize.",
      "verification": {
        "level": "account",
        "steps": [
          "Free F1 account.",
          "Winner contacted and verified before prize fulfillment."
        ]
      },
      "sources": [
        {
          "title": "Formula 1 — F1 Fantasy is back (official)",
          "url": "https://www.formula1.com/en/latest/article/boost-the-fun-with-friends-and-family-this-season-f1-fantasy-is-back.2xVBBN90riZiaYXeYhOe0Z",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ewc-play",
      "name": "Esports World Cup (EWC) Play — Fantasy & Pick'em",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The official EWC free fantasy and pick'em game. No entry fee or wager of any kind; cash prizes for top finishers.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://esportsworldcup.com/en/play/fantasy",
      "rulesUrl": "https://esportsworldcup.com/en/play/fantasy/league-of-legends",
      "prizeUsd": "1st $10,000, 2nd $7,000, 3rd $6,000, 4th $5,000; top 130 paid (~$200,000 total pool)",
      "prizeNote": "Verified on esportsworldcup.com: EWC Play is a free digital product — 'no entry fee and no wager or stake of any kind.' The fantasy leaderboard pays 1st $10,000 / 2nd $7,000 / 3rd $6,000 / 4th $5,000 with the top 130 paid; the 2026 event announced a $200,000 pool split $100,000 Pick'em / $100,000 Fantasy. Cash prizes are limited to 18+ and subject to eligibility checks. EWC 2026 runs 6 Jul – 23 Aug in Paris; the event returns in summer 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "Free account, worldwide. Cash prizes 18+ with eligibility checks on claim.",
      "restricted": "The 2026 edition closes 23 Aug 2026. Prizes for on-site quests are physical (claimed at the venue).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Cash-prize winners pass an eligibility check before payout."
        ]
      },
      "sources": [
        {
          "title": "EWC Play — Fantasy leaderboard & how it works (official)",
          "url": "https://esportsworldcup.com/en/play/fantasy/league-of-legends",
          "tier": "official"
        },
        {
          "title": "EWC — Play Fantasy at the Esports World Cup (official)",
          "url": "https://esportsworldcup.com/en/news/play-fantasy-at-EWC",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-hockey-playoff",
      "name": "ESPN Playoff Hockey Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN's free NHL playoff fantasy/picks game with a $10,000 prize table.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nhl-playoff-hockey-challenge-2026/group",
      "rulesUrl": "https://fantasy.espn.com/games/nhl-playoff-hockey-challenge-2026/group",
      "prizeUsd": "$10,000 total prizes",
      "prizeNote": "Official ESPN page: Total Prizes $10,000, max two entries, event dates 18 Apr – 21 Jun 2026. Distinct from the NHL's own Bracket Challenge. Returns for the 2027 Stanley Cup playoffs.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Two entries per person.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Playoff Hockey Challenge (official)",
          "url": "https://fantasy.espn.com/games/nhl-playoff-hockey-challenge-2026/group",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-cfp-bracket",
      "name": "ESPN College Football Playoff Bracket Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "Bracket every College Football Playoff game for a shot at $50,000.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/college-football-playoff-challenge-2025/mostpickedchampions",
      "rulesUrl": "https://fantasy.espn.com/games/college-football-playoff-challenge-2025/mostpickedchampions",
      "prizeUsd": "$50,000 total prizes",
      "prizeNote": "Official ESPN page: $50,000 in prizes, max two entries, event dates 19 Dec 2025 – 19 Jan 2026 (the 2025-26 College Football Playoff). ESPN's 'brand-new' CFP Bracket Challenge. Returns for the 2026-27 CFP in December 2026.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Two entries per person.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN CFP Bracket Challenge (official)",
          "url": "https://fantasy.espn.com/games/college-football-playoff-challenge-2025/mostpickedchampions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-knockout-bracket",
      "name": "ESPN Knockout Bracket Challenge (World Cup)",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN's free World Cup 2026 knockout-round bracket game with $10,000 in prizes.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/mens-knockout-bracket-challenge-2026/howtoplay",
      "rulesUrl": "https://fantasy.espn.com/games/mens-knockout-bracket-challenge-2026/howtoplay",
      "prizeUsd": "$10,000 total prizes",
      "prizeNote": "Official ESPN page: $10,000 in prizes, up to 25 brackets, event dates 28 Jun – 19 Jul 2026 (the FIFA World Cup 2026 knockout stage). Returns for the next World Cup (2030).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Up to 25 brackets per entrant.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Knockout Bracket Challenge (official)",
          "url": "https://fantasy.espn.com/games/mens-knockout-bracket-challenge-2026/howtoplay",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mlb-hr-derby-pickem",
      "name": "MLB Home Run Derby Pick'Em (T-Mobile)",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "MLB's annual one-day bracket contest for the Home Run Derby with a $100,000 grand prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.mlb.com/sponsorship/home-run-derby-pick-em/official-rules",
      "rulesUrl": "https://www.mlb.com/sponsorship/home-run-derby-pick-em/official-rules",
      "prizeUsd": "$100,000 grand prize; $6,500 World Series trip (first prize)",
      "prizeNote": "Verified on the official rules page: the grand prize is $100,000 USD for a perfect 100-point bracket, and the first prize is a World Series trip package (ARV $6,500) awarded only if nobody hits 100 points but someone scores 55+. Note the rules page currently reflects the 2024 edition (entry period 10–15 Jul 2024). The contest runs annually around the July Home Run Derby — re-confirm the figure when the 2027 edition opens. No purchase necessary.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Check (lump sum)"
      ],
      "eligibility": "US (incl. territories) and Canada excluding Quebec, 18+/age of majority, free MLB.com account.",
      "restricted": "Void in Quebec and where prohibited. One entry per person.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free MLB.com account.",
          "Grand-prize winners complete an IRS Form W-9 / identification before payout."
        ]
      },
      "sources": [
        {
          "title": "T-Mobile Home Run Derby Pick'Em — Official Rules (MLB)",
          "url": "https://www.mlb.com/sponsorship/home-run-derby-pick-em/official-rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tradingview-leap",
      "name": "TradingView — The Leap",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "TradingView's free paper-trading competition. Trade $100,000 virtual money; the top 250 win cash prizes up to $10,000.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.tradingview.com/the-leap/",
      "rulesUrl": "https://www.tradingview.com/the-leap/tradestation-july-2026/rules/",
      "prizeUsd": "$50,000 total: 1st $10,000; 2nd $7,000; 3rd $6,000; 4th $3,500; 5th $2,500; 6–25 $550; 26–50 $400",
      "prizeNote": "Verified on TradingView's official rules page: total cash ARV $50,000, paid via wire transfer or PayPal (≥$1,000) or PayPal only (<$1,000); places 51–250 receive a 3-month subscription. Free to enter with a $100,000 virtual paper-trading account (10:1 leverage, $0.85/contract on futures). The Leap runs periodic editions — the July 2026 TradeStation edition closed 14 Aug; new editions launch regularly, so check the live page for the next window.",
      "minCashout": "Prizes paid directly via PayPal / wire",
      "payoutMethods": [
        "PayPal",
        "Wire transfer"
      ],
      "eligibility": "Free TradingView account; see the edition's official rules for age and residency.",
      "restricted": "Paper trading only — no real money at risk. Multiple-prize winners receive only the single highest-value prize.",
      "verification": {
        "level": "account",
        "steps": [
          "Free TradingView account.",
          "Winners must claim within 14 days of the close; TradingView may require identity evidence."
        ]
      },
      "redFlags": [
        "This is a TradingView/TradeStation acquisition funnel — prizes reward the platform, but you never stake your own money."
      ],
      "sources": [
        {
          "title": "The Leap with TradeStation — Official Rules (TradingView)",
          "url": "https://www.tradingview.com/the-leap/tradestation-july-2026/rules/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "wall-street-survivor",
      "name": "Wall Street Survivor Trading Contests",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Monthly free stock/crypto paper-trading contests with Amazon gift-card prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.wallstreetsurvivor.com/",
      "rulesUrl": "https://www.wallstreetsurvivor.com/contest-valentines-2026/",
      "prizeUsd": "$500 in Amazon gift cards per monthly contest (e.g. $300 / $150 / $50)",
      "prizeNote": "Verified on wallstreetsurvivor.com contest pages: free to join, no credit card, $100,000 in virtual cash, and the top three by portfolio return win Amazon gift cards (typically $300 / $150 / $50 = $500 total). Contests run monthly with themed editions. Prizes are gift cards, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Amazon gift cards"
      ],
      "eligibility": "US and Canada excluding Quebec, 18+.",
      "restricted": "Gift-card prizes, not cash. Winners audited; one portfolio per person.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winners may be asked for photo ID during auditing and must claim within 30 days."
        ]
      },
      "redFlags": [
        "Prizes are Amazon gift cards, not dollars — worth noting up front."
      ],
      "sources": [
        {
          "title": "Wall Street Survivor — monthly contest rules (official)",
          "url": "https://www.wallstreetsurvivor.com/contest-valentines-2026/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "start-gg",
      "name": "Start.gg (formerly smash.gg)",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "short": "The fighting-game community's tournament platform. Free-to-enter brackets; prizes are funded by organizers.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://start.gg/",
      "rulesUrl": "https://start.gg/",
      "prizeUsd": "Per tournament — set and paid by the organizer",
      "prizeNote": "Verified via start.gg tournament listings: many community brackets (e.g. weekly Super Smash Bros. brackets) are free to enter with prize pools funded by the organizer, while others charge a venue/entry fee. Start.gg is a self-service bracket platform (acquired by Microsoft in 2020, independent again Jan 2025) and does not itself guarantee prizes — check each event's own prize and payout terms.",
      "minCashout": "n/a — organizer pays",
      "payoutMethods": [
        "Organizer payout"
      ],
      "eligibility": "Free account; per-tournament eligibility rules.",
      "restricted": "Platform does not guarantee prizes. Some events are paid-entry or in-person.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Start.gg account.",
          "Prize terms and delivery handled by the organizer, not the platform."
        ]
      },
      "redFlags": [
        "Always read the individual tournament's prize and payout terms before committing."
      ],
      "sources": [
        {
          "title": "Start.gg tournament platform (official)",
          "url": "https://start.gg/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "chesscom-tournaments",
      "name": "Chess.com Prize Tournaments",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "short": "Free-to-enter chess arenas and Swiss events with cash prizes for top finishers — but the cash tiers are gated by title or streaming.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.chess.com/tournaments",
      "rulesUrl": "https://support.chess.com/en/articles/9062345-chess-com-tournaments-schedule",
      "prizeUsd": "Arena Kings up to $2,500/month; variant championships $2,500–$5,000; Titled Tuesday cash for titled players",
      "prizeNote": "Verified on chess.com: the official prize-tournament list is Titled Tuesday, Arena Kings, the Variants Community Series and Bullet Brawls. Arena Kings offers up to $2,500 in cash prizes per month but requires entrants to stream their games; Titled Tuesday pays cash but is restricted to titled (GM/IM/FM) players. The 2026 Variants Community Series runs monthly championships ($2,500–$5,000 prize funds). Open community events pay Chessable credits or Diamond memberships, not cash. Free Chess.com account.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Platform payout (cash for titled/streaming tiers)"
      ],
      "eligibility": "Free Chess.com account; cash tiers have title or streaming requirements.",
      "restricted": "Cash prizes are gated to titled players (Titled Tuesday) or streamers (Arena Kings). Open events pay non-cash.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Chess.com account.",
          "Cash-prize winners verified (streamers email titled@chess.com within an hour of close)."
        ]
      },
      "redFlags": [
        "The headline cash is for titled/streaming players — most open events pay credits, not dollars."
      ],
      "sources": [
        {
          "title": "Chess.com — Community Events Overview (official)",
          "url": "https://www.chess.com/announcements/view/chess-com-community-events",
          "tier": "official"
        },
        {
          "title": "Chess.com Support — Prize tournaments schedule (official)",
          "url": "https://support.chess.com/en/articles/9062345-chess-com-tournaments-schedule",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "play-pokemon",
      "name": "Play! Pokémon Championship Series",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "short": "The official Pokémon TCG / VGC / GO competitive circuit. Regional and International Championships pay USD prize money.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.pokemon.com/us/play-pokemon",
      "rulesUrl": "https://support.pokemon.com/hc/en-us/articles/40087224703508-Prizing-and-Fees",
      "prizeUsd": "USD prize money at Regional / International / World Championships (scholarships or Visa prepaid for minors)",
      "prizeNote": "Verified on pokemon.com: Play! Pokémon awards Championship Points and prize money at its upper tiers, and the official support page states 'Organizers may charge a fee to participate.' Regional Championships and International Championships award prize money as cash, scholarship, or a Visa prepaid card depending on amount and age; community trackers (Liquipedia) list 1st-place TCG Regional at $10,000 and VGC at $6,000 — treat those as indicative, not operator-published. Entry requires a free Pokémon Trainer Club account with a Player ID and Play! Pokémon opt-in. Local League Challenges are cheap or free but pay Championship Points, not cash.",
      "minCashout": "Winner claim only (US tax withholding applies)",
      "payoutMethods": [
        "Cash",
        "Scholarship",
        "Visa prepaid card"
      ],
      "eligibility": "Free Pokémon Trainer Club account with Player ID and Play! Pokémon opt-in; minors paid via scholarship/prepaid.",
      "restricted": "Upper-tier events typically charge an entry fee; Local League Challenges are free/cheap but pay CP only. Prize money subject to US tax withholding.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Trainer Club account + Player ID + Play! Pokémon opt-in.",
          "Winners verified; prizes paid as cash/scholarship/prepaid per age."
        ]
      },
      "redFlags": [
        "Not a free-USD path at the top: Regionals/Internationals charge entry fees. The free local events pay points, not money."
      ],
      "sources": [
        {
          "title": "Play! Pokémon — official program page",
          "url": "https://www.pokemon.com/us/play-pokemon",
          "tier": "official"
        },
        {
          "title": "Pokémon Support — Prizing and Fees (official)",
          "url": "https://support.pokemon.com/hc/en-us/articles/40087224703508-Prizing-and-Fees",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "designcrowd",
      "name": "DesignCrowd Design Contests",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "Crowdsourced design marketplace. Enter client-funded contests free; the winner receives the prize minus a platform fee.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.designcrowd.com/",
      "rulesUrl": "https://www.designcrowd.com/help/article/what-are-community-contests-and-how-do-i-start-participating",
      "prizeUsd": "Client-funded prize per contest (varies); community contests free with monetary prizes",
      "prizeNote": "Verified on DesignCrowd's help center: Community Contests are 'completely free to participate,' including ones with 'real monetary prizes.' On the marketplace side, designers enter client-funded contests free (typically $199–$1,500+ prizes) and pay a success fee only when they win — the platform retains a portion of the prize money. Free to register and enter.",
      "minCashout": "Paid on winning; platform fee deducted",
      "payoutMethods": [
        "Platform payout"
      ],
      "eligibility": "Free account, designers worldwide.",
      "restricted": "Only the winning design is paid; platform takes a success fee from the prize.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner receives the prize minus the platform fee after handover."
        ]
      },
      "redFlags": [
        "Speculative work — most entrants are not paid."
      ],
      "sources": [
        {
          "title": "DesignCrowd Help — Community Contests (official)",
          "url": "https://www.designcrowd.com/help/article/what-are-community-contests-and-how-do-i-start-participating",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "crowdspring",
      "name": "CrowdSpring Design Contests",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "Premium crowdsourced design marketplace. Enter contests free; the winner receives the prize minus a platform fee.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.crowdspring.com/",
      "rulesUrl": "https://www.crowdspring.com/",
      "prizeUsd": "Client-funded prize per contest (varies)",
      "prizeNote": "CrowdSpring runs the same contest model as 99designs and DesignCrowd: a client posts a brief and funds a prize, designers submit free of charge, and the client selects a winner who receives the prize money (minus the platform's fee) and transfers copyright. Contests typically run 7 days. No specific operator-published dollar figure is relied on here — prize amounts are client-funded and vary per brief.",
      "minCashout": "Paid on winning; platform fee deducted",
      "payoutMethods": [
        "Platform payout"
      ],
      "eligibility": "Free account, designers worldwide.",
      "restricted": "Only the winning design is paid. Speculative work.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner receives the prize minus the platform fee after handover."
        ]
      },
      "redFlags": [
        "Speculative work — most entrants are not paid."
      ],
      "sources": [
        {
          "title": "CrowdSpring (official)",
          "url": "https://www.crowdspring.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-womens-tourney",
      "name": "ESPN Women's Tournament Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN's free March Madness women's bracket game with a $125,000 prize table.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/tournament-challenge-bracket-women-2026/leaderboard",
      "rulesUrl": "https://fantasy.espn.com/games/tournament-challenge-bracket-women-2026/leaderboard",
      "prizeUsd": "$125,000 total prizes",
      "prizeNote": "Official ESPN page: Total Prizes $125,000, up to 25 brackets, event dates 20 Mar – 5 Apr 2026. Companion to the men's game (already listed); ESPN runs four bracket games with over $370,000 in combined prizes. Returns for March 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Up to 25 brackets per entrant.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Women's Tournament Challenge (official)",
          "url": "https://fantasy.espn.com/games/tournament-challenge-bracket-women-2026/leaderboard",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "yahoo-bracket-mayhem",
      "name": "Yahoo Fantasy Bracket Mayhem",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "Yahoo's free March Madness bracket game — $25,000 for the best men's bracket and $25,000 for the best women's.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://tournament.fantasysports.yahoo.com/signup",
      "rulesUrl": "https://sports.yahoo.com/fantasy/article/yahoo-fantasy-bracket-mayhem-is-back-the-best-bracket-in-both-the-mens-and-womens-college-basketball-contests-will-win-25k-each-225407876.html",
      "prizeUsd": "$25,000 best men's bracket + $25,000 best women's bracket ($50,000 total)",
      "prizeNote": "Verified on Yahoo Sports: Bracket Mayhem is completely free; the best bracket in the men's contest and the best bracket in the women's contest each win $25,000. Available on the Yahoo Fantasy site and app. Ran for the 2026 tournaments (brackets lock 19 Mar 2026); returns March 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, free Yahoo account.",
      "restricted": "Void where prohibited. Bracket must pick a winner for every game to count.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Yahoo account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Yahoo Fantasy — Bracket Mayhem announcement (official)",
          "url": "https://sports.yahoo.com/fantasy/article/yahoo-fantasy-bracket-mayhem-is-back-the-best-bracket-in-both-the-mens-and-womens-college-basketball-contests-will-win-25k-each-225407876.html",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "bullrush",
      "name": "BullRush Trading Competitions",
      "type": "market",
      "status": "live",
      "freePath": "partial",
      "short": "Gamified trading contests with a free entry ladder; prizes are funded prop accounts and credits rather than direct cash.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://bullrush.com/",
      "rulesUrl": "https://bullrush.com/terms-and-conditions/",
      "prizeUsd": "$101,000 monthly tournament in prop accounts + prize pool; free hourly competitions",
      "prizeNote": "Verified on bullrush.com: hourly trading competitions are 100% free to enter (no entry fee, no re-buy), and finishing top-5 in a daily competition qualifies you for the next tier free. The monthly tournament advertises a $100,000+ prize pool, but the top prizes are BullRush prop accounts (funded accounts you then trade), with a share of the prize pool as cash/credits. The terms confirm prizes are paid after KYC verification. Honest framing: the headline $100K is largely funded prop accounts, not cash in your bank.",
      "minCashout": "KYC verification before withdrawal",
      "payoutMethods": [
        "Funded prop account",
        "Credits / cash share of prize pool"
      ],
      "eligibility": "18+, free account. See the terms for jurisdiction limits.",
      "restricted": "Prizes are predominantly prop accounts and credits, not direct USD. KYC required to withdraw.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Free account.",
          "Winners complete KYC identification before any withdrawal."
        ]
      },
      "redFlags": [
        "The $100K headline is mostly funded prop accounts, not cash. Prop accounts carry their own trading rules.",
        "Some tiers ($5–$50) are paid-entry."
      ],
      "sources": [
        {
          "title": "BullRush — Competition types (official)",
          "url": "https://bullrush.com/competition-types/",
          "tier": "official"
        },
        {
          "title": "BullRush — Terms of Use (official)",
          "url": "https://bullrush.com/terms-and-conditions/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "signate",
      "name": "Signate (Japan) Data Competitions",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Japan-based data science competition platform with cash prize contests from NEDO and corporate sponsors.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://signate.jp/",
      "rulesUrl": "https://signate.jp/",
      "prizeUsd": "Per competition — yen-denominated cash prizes (e.g. ¥4,000,000 total / ¥1,200,000 top)",
      "prizeNote": "Signate (SIGNATE, founded 2014) is Japan's major data science and AI competition platform. Its official account advertises sponsor-funded contests such as a NEDO image-dataset generation contest with a ¥4,000,000 total pool and ¥1,200,000 top prize. ML Contests recorded ~$25,000 in 2025 Signate prizes. Prizes are yen-denominated and many competitions are Japan-market focused — check each challenge's language and eligibility.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Sponsor payout"
      ],
      "eligibility": "Free account; per-competition rules (some Japan-only).",
      "restricted": "Most listings are in Japanese; confirm each challenge is open internationally.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork per the challenge rules."
        ]
      },
      "sources": [
        {
          "title": "Signate (official)",
          "url": "https://signate.jp/",
          "tier": "official"
        },
        {
          "title": "Signate — official announcements (X)",
          "url": "https://x.com/signatelab",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tianchi",
      "name": "Tianchi (Alibaba Cloud)",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Alibaba Cloud's big-data competition platform — the second-largest ML competition host by prize money after Kaggle.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://tianchi.aliyun.com/",
      "rulesUrl": "https://tianchi.aliyun.com/competition/entrance/532277?lang=en-us",
      "prizeUsd": "Per competition — from ~$1,000 to ¥1,000,000+ (~$157,000); $1.03M across 2025",
      "prizeNote": "Verified on tianchi.aliyun.com: an example live multimodal competition pays Gold $3,000 / Silver $2,000 / Bronze $1,000 plus Alibaba internship opportunities; larger sponsored contests reach ¥1,000,000 (~$157,000). ML Contests' State of ML Competitions reports Tianchi as the second-largest platform by prize money ($1,028,000 across 51 competitions in 2025). Alibaba/Ant employees can compete but not win prizes.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Sponsor payout"
      ],
      "eligibility": "Free account; per-competition rules (some China-focused).",
      "restricted": "Some competitions are Chinese-language and may restrict prize eligibility by region.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork per the challenge rules."
        ]
      },
      "sources": [
        {
          "title": "Tianchi — Data Algorithm Competition (official)",
          "url": "https://tianchi.aliyun.com/competition/entrance/532277?lang=en-us",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "hypermind",
      "name": "Hypermind Forecasting Contests",
      "type": "forecasting",
      "status": "live",
      "freePath": "full",
      "short": "Play-money prediction market and forecasting contests where the best forecasters share real cash rewards.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://dash.hypermind.com/hypermind/app.html",
      "rulesUrl": "https://dash.hypermind.com/hypermind/app.html",
      "prizeUsd": "Contest rewards in USD/EUR (24,573€ at stake at review); paid as Amazon gift certificates",
      "prizeNote": "Verified on dash.hypermind.com: Hypermind (since 2014, run by Lumenogic — the team behind the Good Judgment Project's IARPA win) is 'free to play, with cash rewards.' Everyone starts with 200,000 play-money 'Hypermoney'; contest rewards are split pro-rata of relative forecasting performance, and earnings accumulate across contests, withdrawable as Amazon gift certificates (minimum $20 / €15). The dashboard showed 24,573€ at stake across live contests at review. No purchase necessary.",
      "minCashout": "$20 / €15 minimum (Amazon gift certificates)",
      "payoutMethods": [
        "Amazon gift certificates"
      ],
      "eligibility": "Free account, open worldwide (English/French).",
      "restricted": "Rewards are paid as Amazon gift certificates, not bank cash. Only positive-performance forecasters share each reward.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Request payout as Amazon gift certificates at any time (min $20/€15)."
        ]
      },
      "redFlags": [
        "Payouts are gift certificates, not cash. Rewards split pro-rata, so individual amounts are small."
      ],
      "sources": [
        {
          "title": "Hypermind Prediction Market (official)",
          "url": "https://dash.hypermind.com/hypermind/app.html",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "moomoo-paper-trading",
      "name": "moomoo Paper Trading Competition",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Moomoo's global paper-trading competition. Trade $100,000 virtual funds for a share of $200,000 in cash rewards.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.moomoo.com/",
      "rulesUrl": "https://www.moomoo.com/us/support/topic4_558",
      "prizeUsd": "$200,000 total cash rewards; global top three $10,000 / $3,000 / $1,000",
      "prizeNote": "Verified on Nasdaq.com's press release and moomoo's own support pages: the paper-trading competition (powered by Nasdaq TotalView) gives participants $100,000 in virtual funds to trade US stocks/ETFs/options with zero risk, competing for a share of $200,000 in cash rewards. The global top three by cumulative return win $10,000, $3,000 and $1,000; regional champions are also recognised. Editions run periodically (the second global competition launched Oct 2025) — check the live page for the next window.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash reward to brokerage account"
      ],
      "eligibility": "Eligible moomoo account holders; see the competition's terms for jurisdiction limits.",
      "restricted": "Cash rewards are credited to a moomoo brokerage account and may be taxable. Regional prize eligibility varies.",
      "verification": {
        "level": "account",
        "steps": [
          "Open a moomoo account.",
          "Paper trade during the competition period; winners verified and credited after the event."
        ]
      },
      "redFlags": [
        "This is a broker acquisition funnel — the prize rewards the platform, but you never stake your own money."
      ],
      "sources": [
        {
          "title": "Nasdaq — moomoo paper trading competition press release (official)",
          "url": "https://www.nasdaq.com/press-release/moomoos-second-global-paper-trading-competition-powered-nasdaq-totalview-hits-150000",
          "tier": "official"
        },
        {
          "title": "moomoo US — Paper-trading Competition Terms (official)",
          "url": "https://www.moomoo.com/us/support/topic4_558",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "superbru",
      "name": "Superbru",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Free social sports prediction and fantasy platform for rugby, football, cricket, NFL and more, with sponsor-funded prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.superbru.com/",
      "rulesUrl": "https://www.superbru.com/worldcup/prizes.php",
      "prizeUsd": "Sponsor-funded prizes per game (tickets, vouchers, experiences)",
      "prizeNote": "Verified on superbru.com: Superbru runs 50+ free predictor tournaments a year plus fantasy games across rugby union, rugby league, football, cricket, NFL and Australian rules. Prizes are funded by sponsors and vary by game — the official prize pages typically offer match tickets, VIP experiences, signed shirts and gift vouchers, and many are restricted to UK/Ireland residents aged 18+. Not a betting product — you play free with no deposit.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, vouchers, experiences)"
      ],
      "eligibility": "Free account, open worldwide; prize eligibility varies per game (often UK/IE 18+).",
      "restricted": "Many prizes are UK/Ireland-only and non-cash. Check each game's own prize page before entering.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Superbru account (email or Facebook).",
          "Winner selection per Superbru's prizes terms and tiebreakers."
        ]
      },
      "redFlags": [
        "Most prizes are tickets/vouchers and many are UK/Ireland-gated — read the specific game's prize page."
      ],
      "sources": [
        {
          "title": "Superbru — prizes (official)",
          "url": "https://www.superbru.com/worldcup/prizes.php",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "afl-fantasy",
      "name": "AFL Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The AFL's official free fantasy game (Australian rules football), with a six-figure prize pool.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.afl.com.au/",
      "rulesUrl": "https://www.afl.com.au/fantasy",
      "prizeUsd": "A$300,000+ prize pool (incl. a crypto.com component)",
      "prizeNote": "Verified on the AFL's own channels: the AFL's official account announced 'more than $300,000 of prizes are up for grabs, including $80k in Crypto thanks to cryptocom_AU' for the 2026 season. The game itself is free to play. Honest framing: the prize pool is Australia-focused and includes a cryptocurrency component — check the in-game prize table for the cash vs crypto split and eligibility.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout",
        "Crypto (crypto.com component)"
      ],
      "eligibility": "Free account; prizes are Australia-focused (see the official terms).",
      "restricted": "Australia-centric prize eligibility. The crypto component may carry its own terms.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free AFL Fantasy account.",
          "Winner verification before prize fulfillment."
        ]
      },
      "redFlags": [
        "Part of the prize pool is cryptocurrency, not cash. Australia-focused."
      ],
      "sources": [
        {
          "title": "AFL Fantasy hub (official)",
          "url": "https://www.afl.com.au/fantasy",
          "tier": "official"
        },
        {
          "title": "AFL Fantasy — official announcement (X)",
          "url": "https://x.com/AFLFantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "nrl-fantasy",
      "name": "NRL Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The NRL's official free rugby league fantasy game, with cash and voucher prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.nrl.com/fantasy/",
      "rulesUrl": "https://nrlfantasy.zendesk.com/hc/en-us/articles/15492067192861-Prizes",
      "prizeUsd": "1st overall: trip + $2,000; monthly 1st: $1,000; vouchers for placings",
      "prizeNote": "Verified on the NRL's official support page: the overall winner receives a trip for two (flights, accommodation, event tickets) plus $2,000; each of the six monthly winners receives $1,000; lower placings receive NRL Shop and KFC vouchers. The cited prize table is the 2025 season — re-confirm the figure for the current season. Free to play, Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "NRL Shop / KFC vouchers",
        "Trip (prize fulfillment)"
      ],
      "eligibility": "Free NRL account; prizes are Australia-focused.",
      "restricted": "Australia-centric prize eligibility. The prize table shown is 2025 — confirm for the current season.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free NRL Fantasy account.",
          "Winner verification before payout."
        ]
      },
      "redFlags": [
        "Prize table cited is 2025 — re-confirm before relying on the exact figures."
      ],
      "sources": [
        {
          "title": "NRL Fantasy — Prizes (official support)",
          "url": "https://nrlfantasy.zendesk.com/hc/en-us/articles/15492067192861-Prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-bowl-mania",
      "name": "ESPN Capital One Bowl Mania",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN's free college-football bowl pick'em — a perfect entry wins up to $1,000,000.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/college-football-bowl-mania-2025/picks",
      "rulesUrl": "https://fantasy.espn.com/games/college-football-bowl-mania-2025/picks",
      "prizeUsd": "$1,000,000 for a perfect entry; $20,000 grand prize per contest mode",
      "prizeNote": "Verified on ESPN's official game page: Capital One Bowl Mania runs three contest modes (Standard, Spread, Confidence), each with a $20,000 grand prize, and a perfect entry in any mode wins up to $1,000,000. Max three entries. Ran 13 Dec 2025 – 19 Jan 2026 (the 2025-26 bowl season); returns December 2026.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Three entries per person.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Capital One Bowl Mania (official)",
          "url": "https://fantasy.espn.com/games/college-football-bowl-mania-2025/picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ligue1-fantasy",
      "name": "Ligue 1 Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Ligue 1's official free fantasy game — pick 11 players each week to challenge the community and win prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://ligue1.com/en/fantasy",
      "rulesUrl": "https://ligue1.com/en/fantasy",
      "prizeUsd": "Prizes (see official game page; non-cash, season-dependent)",
      "prizeNote": "Verified on ligue1.com: the official Ligue 1 McDonald's fantasy game is free — 'Choose 11 players every Friday to challenge the community and win prizes,' scored on real match performances. The specific prize list is season-dependent and not itemised on the landing page; confirm the current season's prize table in-game.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free account, open internationally (see official terms).",
      "restricted": "Prizes are typically merchandise/experiences, not cash. Confirm per season.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Ligue 1 account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "sources": [
        {
          "title": "Ligue 1 Fantasy (official)",
          "url": "https://ligue1.com/en/fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "lol-pickem",
      "name": "LoL Esports Pick'Em",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Riot's official free prediction game for LoL tournaments (MSI / Worlds) — rewards are in-game items, not cash.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://lolesports.com/",
      "rulesUrl": "https://lolesports.com/en-US/news/msi-2026-primer",
      "prizeUsd": "In-game rewards: emotes, icons, and a Jhin skin for a perfect bracket (non-cash)",
      "prizeNote": "Verified on lolesports.com: Pick'Ems (powered by AWS) is free — predict tournament results for reward tiers. Participation earns an emote; top 50% an icon; top 25% another emote; a perfect bracket earns the exclusive Broken Covenant Jhin skin and champion. Rewards are in-game items with no real-money value, so this is a fun free prediction game, not a cash prize.",
      "minCashout": "n/a — in-game rewards only",
      "payoutMethods": [
        "In-game rewards (League of Legends account)"
      ],
      "eligibility": "Free Riot ID / LoL Esports account.",
      "restricted": "No cash — rewards are cosmetic in-game items.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Riot account.",
          "Rewards granted automatically to the linked LoL account after the event."
        ]
      },
      "redFlags": [
        "Non-cash: rewards are emotes, icons and skins, not money."
      ],
      "sources": [
        {
          "title": "LoL Esports — MSI 2026 Primer (official)",
          "url": "https://lolesports.com/en-US/news/msi-2026-primer",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "six-nations-fantasy",
      "name": "Six Nations Fantasy Rugby",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The official Guinness Six Nations free fantasy game, with tickets, a signed ball and gift-card prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.sixnationsrugby.com/",
      "rulesUrl": "https://fantasy.sixnationsrugby.com/m6n/",
      "prizeUsd": "2x tickets + flights/accommodation (overall); signed ball (top 5); £100 Fanatics gift card (round)",
      "prizeNote": "Verified on the official game domain (fantasy.sixnationsrugby.com): the Guinness Six Nations Fantasy Game is free to play. Reported prizes: the overall winner receives two match tickets with flights, accommodation and a city pass; the top five receive a rugby ball signed by all coaches and captains; each round's top scorer wins a £100 Fanatics gift card. The 2026 men's edition has concluded; the 2026 women's edition is live. Prizes are non-cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, gift cards)"
      ],
      "eligibility": "Free account; prize eligibility varies by region.",
      "restricted": "Non-cash prizes. Men's 2026 edition concluded; Women's 2026 edition live.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (tickets, gift cards, signed merchandise)."
      ],
      "sources": [
        {
          "title": "Six Nations Fantasy Game (official)",
          "url": "https://fantasy.sixnationsrugby.com/m6n/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tattico-serie-a",
      "name": "Tattico Fantasy Serie A",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Lega Serie A's official fantasy game — free to play on the global leaderboard, with a free FFScout £750 prize league.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://tattico.com/",
      "rulesUrl": "https://tattico.com/",
      "prizeUsd": "Free global leaderboard; FFScout runs a free-to-join £750 prize league on it",
      "prizeNote": "Verified on tattico.com and Fantasy Football Scout: Tattico Fantasy Serie A is free to play — build a 15-player squad on a £100m budget and compete on the global leaderboard without paying (optional Edge/Pro tiers unlock analytics). The official global game's own prize structure is not clearly itemised; Fantasy Football Scout runs a free-to-join community league on it with £750 in prizes (1st £150 cash + Mega Bundle).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment",
        "League organizer payout (FFScout league)"
      ],
      "eligibility": "Free account; FFScout league prizes are UK/eligible-region focused.",
      "restricted": "The global game's own prize table is not clearly published — the verified cash league is FFScout's.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Tattico account.",
          "Join the FFScout community league for the verified £750 prize pool."
        ]
      },
      "redFlags": [
        "The global leaderboard prize is not clearly itemised — the confirmed cash path is the FFScout league."
      ],
      "sources": [
        {
          "title": "Tattico Fantasy Serie A (official)",
          "url": "https://tattico.com/",
          "tier": "official"
        },
        {
          "title": "FFScout — Tattico Serie A league (official)",
          "url": "https://www.fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "supercoach-bbl",
      "name": "KFC SuperCoach BBL",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Cricket Australia's official Big Bash fantasy game (News Corp's SuperCoach), free with weekly cash prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://supercoach.news.com.au/bbl/",
      "rulesUrl": "https://supercoach.news.com.au/bbl/",
      "prizeUsd": "Weekly cash prizes + vouchers (seasonal)",
      "prizeNote": "Verified via Cricket Australia's announcement: KFC SuperCoach BBL is the official fantasy game of the KFC Big Bash League, run by News Corp Australia. It is 'a free and entertaining fantasy game' offering 'weekly cash prizes, vouchers' alongside mini-league bragging rights. Exact prize amounts vary by season — confirm the current season's prize table on the official SuperCoach site. Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Vouchers"
      ],
      "eligibility": "Free account; prizes are Australia-focused.",
      "restricted": "Australia-centric prize eligibility. Confirm the current season's prize table.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free SuperCoach account.",
          "Winner verification before payout."
        ]
      },
      "redFlags": [
        "Australia-focused; prize amounts are seasonal and need re-confirming each season."
      ],
      "sources": [
        {
          "title": "SuperCoach BBL (official)",
          "url": "https://supercoach.news.com.au/bbl/",
          "tier": "official"
        },
        {
          "title": "Cricket Australia — SuperCoach named official BBL fantasy game",
          "url": "https://www.mediaweek.com.au/supercoach-fantasy-game-kfc-big-bash-league/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fundednext",
      "name": "FundedNext Monthly Trading Competition",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Free monthly prop-firm trading competition on a $100,000 simulated account, with cash prizes and funded accounts.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fundednext.com/",
      "rulesUrl": "https://help.fundednext.com/en/articles/11982105-how-to-win-fundednext-monthly-competition",
      "prizeUsd": "1st $5,000 + $100K account; 2nd $2,000; 3rd $1,000; 4th–600th funded accounts",
      "prizeNote": "Verified on FundedNext's official help centre: the Monthly Trading Competition is 'completely free' with no entry fee. Each trader gets a $100,000 simulated account for one month; the top three win cash ($5,000 / $2,000 / $1,000) plus a Stellar account, and ranks 4–600 receive funded accounts (or a bonus lottery). Prizes are cash + funded accounts — the funded accounts are demo-to-funded challenge accounts, not direct bank cash. Starts the first trading day of each month.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash prize",
        "Funded account (Stellar/Instant challenge)"
      ],
      "eligibility": "Free account, worldwide; one account per IP. See the official rules.",
      "restricted": "Demo account profits cannot be withdrawn — only the prize (cash or funded account) is real. Trading rules (daily loss limit, min 5 trading days) apply.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free registration + demo account.",
          "Winners verified and contacted directly after each monthly leaderboard close."
        ]
      },
      "redFlags": [
        "The cash component is modest ($5,000 top); most prizes are funded challenge accounts, which are demo-evaluation accounts with their own rules."
      ],
      "sources": [
        {
          "title": "FundedNext Help — How to win the monthly competition (official)",
          "url": "https://help.fundednext.com/en/articles/11982105-how-to-win-fundednext-monthly-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "for-traders",
      "name": "For Traders Tournaments",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Free daily/weekly/monthly prop-firm trading tournaments (Wednesday Clash, Crypto Clash) with funded-account prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fortraders.com/tournaments",
      "rulesUrl": "https://fortraders.com/tournaments",
      "prizeUsd": "Funded-account prizes; weekly 24h Wednesday Clash advertises a $75,000 prize pool in challenges",
      "prizeNote": "Verified on fortraders.com and its official account: For Traders runs free trading tournaments — Wednesday Clash (24h forex), Weekend Crypto Clash (72h crypto) and monthly competitions — all 'completely free with no deposit required.' The official account advertised a Wednesday Clash with a '$75,000 prize pool' paid out as funded-account challenges. Prizes are funded accounts (challenges), not direct bank cash; the platform is a prop-trading funnel.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Funded account (challenge)"
      ],
      "eligibility": "Free account; see the official tournament rules for jurisdiction limits.",
      "restricted": "Prizes are funded-account challenges (demo-evaluation), not cash. Prop-trading acquisition funnel.",
      "verification": {
        "level": "account",
        "steps": [
          "Free registration.",
          "Winners receive funded-account challenges after leaderboard verification."
        ]
      },
      "redFlags": [
        "Prizes are funded accounts, not cash. This is a prop-firm customer-acquisition product."
      ],
      "sources": [
        {
          "title": "For Traders — Tournaments (official)",
          "url": "https://fortraders.com/tournaments",
          "tier": "official"
        },
        {
          "title": "For Traders — official announcement (X)",
          "url": "https://x.com/fortraderscom/status/2011366278590874080",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ninjatrader-arena",
      "name": "NinjaTrader Arena",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "NinjaTrader's free simulated futures trading competitions with cash prizes or account credits.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://ninjatrader.com/ninjatrader-arena/",
      "rulesUrl": "https://ninjatrader.com/ninjatrader-arena/",
      "prizeUsd": "Cash prizes or account credits per competition",
      "prizeNote": "Verified on ninjatrader.com: NinjaTrader Arena competitions run in a risk-free simulated environment using live CME futures data; they are free to join, and winners receive 'real cash prizes or account credits, depending on the competition format.' Competition formats and prize amounts vary by event — check the live Arena calendar.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash prize",
        "Account credit"
      ],
      "eligibility": "Free NinjaTrader account; see each competition's rules.",
      "restricted": "Some competitions award account credits rather than cash. Simulated trading only.",
      "verification": {
        "level": "account",
        "steps": [
          "Free registration.",
          "Winners verified per the competition rules."
        ]
      },
      "redFlags": [
        "Broker acquisition funnel — but no real money at risk."
      ],
      "sources": [
        {
          "title": "NinjaTrader Arena (official)",
          "url": "https://ninjatrader.com/ninjatrader-arena/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "yahoo-daily-draw",
      "name": "Yahoo Daily Draw",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Yahoo's free daily sports-prediction game — pick 4 of 6 prediction cards; top finishers win cash prizes.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://sports.yahoo.com/dailydraw/",
      "rulesUrl": "https://help.yahoo.com/kb/SLN36907.html",
      "prizeUsd": "$500 daily / $1,000 weekly prize pools (bank eGift cards)",
      "prizeNote": "Verified on Yahoo's official help pages: Daily Draw is a free-to-play game in the Yahoo Sports/Fantasy apps. Open a pack of 6 prediction cards, pick 4, and top the leaderboard to win. The 6/1/2026 prize matrix shows $500 daily ($250/$150/$100) and $1,000 weekly ($1,000/$500/$300/$200/$100) prize pools. Prizes are issued as bank eGift cards. No purchase necessary; mobile app (iOS/Android) only.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank eGift cards"
      ],
      "eligibility": "US, free Yahoo account; Yahoo Sports/Fantasy app v11.0+.",
      "restricted": "Prizes are gift cards, not bank cash. Mobile-app only (no tablets/web).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Yahoo account.",
          "Winners verified by GMR Marketing (the contest administrator) before the gift card is issued."
        ]
      },
      "redFlags": [
        "Prizes are bank eGift cards, not cash. Small individual payouts."
      ],
      "sources": [
        {
          "title": "Yahoo Help — Daily Draw overview (official)",
          "url": "https://help.yahoo.com/kb/SLN36907.html",
          "tier": "official"
        },
        {
          "title": "Yahoo Help — Daily Draw prize matrix (official)",
          "url": "https://help.yahoo.com/kb/SLN36915.html",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "dp-world-tour-fantasy",
      "name": "Fantasy DP World Tour",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The DP World Tour's official free fantasy golf game with weekly, Rolex Series, Top 10 and overall prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.europeantour.com/",
      "rulesUrl": "https://www.europeantour.com/dpworld-tour/news/articles/detail/fantasy-dp-world-tour-is-back/",
      "prizeUsd": "Callaway golf clubs + custom fitting (overall); hospitality, putters, clubs for other tiers (non-cash)",
      "prizeNote": "Verified on europeantour.com: Fantasy DP World Tour is free to play. Confirmed prizes: overall 1st wins a full set of Callaway clubs, bag and custom fitting; 2nd a Callaway driver + wedge; 3rd a 3-wood + wedge; the Rolex Series Challenge winner a hospitality package for two; weekly winners a Callaway club or accessory. Prizes are golf equipment and experiences, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (golf equipment, hospitality)"
      ],
      "eligibility": "Free account, open worldwide; see the official terms.",
      "restricted": "Non-cash prizes (equipment and experiences).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (golf gear and experiences)."
      ],
      "sources": [
        {
          "title": "DP World Tour — Fantasy DP World Tour is back (official)",
          "url": "https://www.europeantour.com/dpworld-tour/news/articles/detail/fantasy-dp-world-tour-is-back/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "the-open-fantasy",
      "name": "The Open Championship Fantasy (Match Ups)",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "The R&A's official free predictor game for The Open, with a £5,000 cash prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.theopen.com/fantasy/prizes",
      "rulesUrl": "https://www.theopen.com/fantasy/prizes",
      "prizeUsd": "£5,000 cash top prize (plus other prizes)",
      "prizeNote": "Verified on theopen.com (the R&A's official site): The Open runs a free predictor game (Match Ups) with 'huge prizes, including £5,000 in cash.' The cited prize page is from the 2024 edition; the game runs annually around The Open each July and returns for 2027. Re-confirm the figure when the next edition opens.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Prize fulfillment"
      ],
      "eligibility": "Free account; see the official rules for age and residency.",
      "restricted": "Seasonal — runs around The Open (July) each year. Figure cited is 2024; re-confirm for the next edition.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner notified and verified before payout."
        ]
      },
      "redFlags": [
        "Seasonal (July); the £5,000 figure is from the 2024 edition and should be re-confirmed."
      ],
      "sources": [
        {
          "title": "The Open — Fantasy prizes (official R&A)",
          "url": "https://www.theopen.com/fantasy/prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "sun-dream-team",
      "name": "The Sun Dream Team",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Sun's free UK fantasy football game with a £60,000 top prize and £100,000+ total pool.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.dreamteamfc.com/",
      "rulesUrl": "https://www.dreamteamfc.com/",
      "prizeUsd": "£60,000 top prize; £100,000+ total cash prizes",
      "prizeNote": "Verified via The Sun's own announcements: Dream Team (launched 1999) is free to play with a £60,000 top prize for the overall 2025/26 season winner and £100,000+ in total cash prizes, plus a £5,000 Gameweek 1 prize draw. Sponsored by Midnite into 2026/27. Build an 11-player squad on a £50m budget across the Premier League and cup competitions. UK-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "UK (and select regions), 18+, free account.",
      "restricted": "UK-focused cash prizes. Sponsored by a betting brand (Midnite) but the game itself is free and does not require a betting account.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Dream Team account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "UK-focused. Sponsored by a betting brand — but no betting account is required to play."
      ],
      "sources": [
        {
          "title": "The Sun Dream Team (official)",
          "url": "https://www.dreamteamfc.com/",
          "tier": "official"
        },
        {
          "title": "Midnite extends Sun Dream Team sponsorship into 2026/27",
          "url": "https://hipther.com/gaming-and-entertainment-europe/2026/07/30/115929/midnite-extends-sun-dream-team-fantasy-football-sponsorship-into-2026-27/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "sky-sports-ff",
      "name": "Sky Sports Fantasy Football",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Sky's free UK fantasy football game with a £50,000 jackpot.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasyfootball.skysports.com/",
      "rulesUrl": "https://www.skysports.com/football/news/11095/12359927/sky-sports-fantasy-football-is-live-create-your-team-for-free-and-win-lb50-000",
      "prizeUsd": "£50,000 jackpot (overall leaderboard)",
      "prizeNote": "Verified on skysports.com: Sky Sports Fantasy Football is free to play ('create your team for free and win £50,000'). Select 11 players within a £100m budget. Honest note: the game is run by Sky, whose parent also owns Sky Bet, but the fantasy game itself is free-to-play and does not require a betting account. The £50,000 jackpot figure has been consistent across recent seasons — re-confirm for the current season.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "UK, 18+, free account (max 2 teams).",
      "restricted": "UK-focused. Sky's parent owns Sky Bet, but the fantasy game does not require a betting account.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Sky Sports account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "UK-focused. Parent company owns a bookmaker. Re-verify: a 2025 review states 'the only thing you need is a Sky Bet account,' which would exclude it under policy if still true — the official 2021 page said 'create your team for free.'"
      ],
      "sources": [
        {
          "title": "Sky Sports — Fantasy Football is LIVE (official)",
          "url": "https://www.skysports.com/football/news/11095/12359927/sky-sports-fantasy-football-is-live-create-your-team-for-free-and-win-lb50-000",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cricket-draft",
      "name": "The Cricket Draft",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Free UK county-cricket fantasy game with kit, bat and voucher prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thecricketdraft.com/",
      "rulesUrl": "https://www.thecricketdraft.com/prizes",
      "prizeUsd": "£500 cricket kit bundle (1st); signed England bat; £50 gameweek vouchers (non-cash)",
      "prizeNote": "Verified on thecricketdraft.com prizes page: the free 2026 fantasy game's overall winner receives a £500 cricket kit bundle plus stats-platform memberships; 2nd a signed England bat; gameweek winners a £50 kit voucher; club-league winners equipment bundles. Prizes are cricket equipment and memberships, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (equipment, vouchers, memberships)"
      ],
      "eligibility": "Free account, UK-focused.",
      "restricted": "Non-cash prizes. UK county-cricket focus.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (equipment and vouchers). UK-focused."
      ],
      "sources": [
        {
          "title": "The Cricket Draft — Prizes (official)",
          "url": "https://www.thecricketdraft.com/prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "icc-t20-fantasy",
      "name": "ICC T20 World Cup Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The ICC's official free fantasy cricket game for the T20 World Cup, with signed-merchandise and voucher prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.icc-cricket.com/",
      "rulesUrl": "https://play.google.com/store/apps/editorial?id=mc_apps_edit_icc_fantasy_fcp&gl=GB&hl=en",
      "prizeUsd": "Signed merchandise, T20 Shop vouchers (non-cash)",
      "prizeNote": "Verified on the ICC's official app listing: the ICC T20 World Cup fantasy game is 'free and fun to play' — pick an 11-player team on a 100-credit budget; winners receive 'signed merchandise, T20 Shop discount vouchers, and more.' Rewards are merchandise and vouchers, not cash. Runs for ICC events (the 2026 T20 World Cup); the next edition returns for the 2028 tournament.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (merchandise, vouchers)"
      ],
      "eligibility": "Free account, worldwide.",
      "restricted": "Non-cash prizes (merchandise and vouchers). Event-based.",
      "verification": {
        "level": "account",
        "steps": [
          "Free ICC account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes. Event-based (T20 World Cup)."
      ],
      "sources": [
        {
          "title": "ICC — official fantasy cricket guide (Google Play editorial)",
          "url": "https://play.google.com/store/apps/editorial?id=mc_apps_edit_icc_fantasy_fcp&gl=GB&hl=en",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tim-hortons-hockey",
      "name": "Tim Hortons NHL Hockey Challenge",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Tim Hortons' free daily NHL prediction game for Tims Rewards members in Canada, with real prizes including a car.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://www.timhortons.ca/tims-nhl-hockey-challenge",
      "rulesUrl": "https://www.timhortons.ca/tims-nhl-hockey-challenge",
      "prizeUsd": "Hyundai TUCSON grand prize; $5,000 cash; gift cards; free coffee; Tims Rewards points",
      "prizeNote": "Verified via Tim Hortons' official contest listings: the Tims NHL Hockey Challenge (run during the NHL regular season and playoffs) lets members pick three players to score each game day. Prizes include a Hyundai TUCSON vehicle grand prize, a $5,000 cash prize, $1,000/$750/$500/$250 gift cards, monthly partner gift cards (up to $2,000), free coffee for a week (7-day streak), and daily Tims Rewards points. Free to play; requires a free Tims Rewards membership. Canada-only (13+, 14 in QC).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (vehicle, gift cards, cash)",
        "Tims Rewards points"
      ],
      "eligibility": "Canada, 13+ (14 in Quebec), free Tims Rewards membership.",
      "restricted": "Canada-only. Requires the Tim Hortons app and a (free) Tims Rewards account. Daily entry limit.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Tims Rewards account.",
          "Winner verification before prize fulfillment."
        ]
      },
      "redFlags": [
        "Canada-only. Most daily prizes are Tims Rewards points/coffee, not cash — the cash and vehicle are leaderboard/grand prizes."
      ],
      "sources": [
        {
          "title": "Tim Hortons — NHL Hockey Challenge (official)",
          "url": "https://www.timhortons.ca/tims-nhl-hockey-challenge",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "darts-corner-predictor",
      "name": "Darts Corner Premier League Darts Predictor",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "Free weekly darts prediction game — predict Premier League Darts scores for a £1,000 cash prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.dartscorner.co.uk/pages/premier-league-darts-predictor",
      "rulesUrl": "https://www.dartscorner.co.uk/pages/premier-league-darts-predictor",
      "prizeUsd": "£1,000 cash per week (perfect score); £250 voucher weekly; £25 vouchers",
      "prizeNote": "Verified on dartscorner.co.uk's official page: 'The Magnificent 8' free prediction game for Premier League Darts. Correctly predicting all four quarter-final winners, exact score margins and total 180s wins a £1,000 cash prize (bank transfer); the weekly points leader wins a £250 Darts Corner voucher; a 'Beat Our Expert' draw awards £25 vouchers. Free to enter (email only). Season runs Feb–May; returns for the next Premier League Darts season.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer (cash prize)",
        "Darts Corner vouchers"
      ],
      "eligibility": "Free entry (email); see the T&Cs for age and residency.",
      "restricted": "Seasonal (Premier League Darts, Feb–May). The £1,000 requires a perfect score.",
      "verification": {
        "level": "account",
        "steps": [
          "Free entry via email.",
          "Winner notified and verified before payout."
        ]
      },
      "redFlags": [
        "Seasonal. The headline £1,000 requires a flawless prediction; most weekly prizes are store vouchers."
      ],
      "sources": [
        {
          "title": "Darts Corner — Premier League Darts Predictor (official)",
          "url": "https://www.dartscorner.co.uk/pages/premier-league-darts-predictor",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "spfl-fantasy",
      "name": "William Hill Premiership (SPFL) Fantasy Football",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Scottish Premiership's official free fantasy game, with a £10,000 overall prize and monthly prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.football.scot/",
      "rulesUrl": "https://fantasy.football.scot/",
      "prizeUsd": "£10,000 overall winner + monthly prizes (EA Sports games)",
      "prizeNote": "Verified via the SPFL's official rules document: the William Hill Premiership Fantasy Football Game is free to play — 'no purchase is necessary' and 'there is no charge to register or play.' The overall season winner receives £10,000; each of the ten monthly winners receives an EA Sports Xbox/PlayStation video game. Sponsored by William Hill (bookmaker), but the game does not require a betting account — it is a skill competition run by SPFL Limited.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (£10,000 overall)",
        "Prize fulfillment (monthly video games)"
      ],
      "eligibility": "Free account; see the SPFL rules for age and residency.",
      "restricted": "Sponsored by William Hill (bookmaker) — no betting account required, but note the association. Monthly prizes are video games, not cash.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Sponsored by a bookmaker (William Hill) — no betting account needed, but note the association. Only the overall prize is cash."
      ],
      "sources": [
        {
          "title": "SPFL — William Hill Premiership Fantasy rules (official)",
          "url": "https://fantasy.football.scot/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "euroleague-fantasy",
      "name": "EuroLeague Fantasy Challenge",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The EuroLeague's official free fantasy basketball game, with tickets, jerseys and TV subscriptions as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.euroleaguebasketball.net/euroleague/fantasy/prizes-and-rules/",
      "rulesUrl": "https://www.euroleaguebasketball.net/euroleague/fantasy/prizes-and-rules/",
      "prizeUsd": "Game tickets, jerseys, basketballs and EuroLeague TV subscriptions (non-cash)",
      "prizeNote": "Verified on euroleaguebasketball.net's official prizes page: EuroLeague Fantasy Challenge is free to play. Top-5 finishers win game tickets (6x/4x/2x regular-season tickets), an official jersey, a Spalding basketball and VIP EuroLeague TV subscriptions; each of the 38 round winners gets a TV subscription plus entry to a lottery for two 2027 Final Four tickets. The BKT EuroCup has a parallel game with equivalent prizes. Non-cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, jerseys, subscriptions)"
      ],
      "eligibility": "Free account, open internationally.",
      "restricted": "Non-cash prizes (tickets, merchandise, subscriptions).",
      "verification": {
        "level": "account",
        "steps": [
          "Free EuroLeague account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes. One prize per user even with multiple top-10 teams."
      ],
      "sources": [
        {
          "title": "EuroLeague Fantasy — Prizes and Rules (official)",
          "url": "https://www.euroleaguebasketball.net/euroleague/fantasy/prizes-and-rules/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "valorant-pickem",
      "name": "Valorant Champions Pick'Em",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Riot's official free prediction game for VCT Champions — in-game rewards for accurate picks.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://valorantesports.com/pickems",
      "rulesUrl": "https://valorantesports.com/pickems",
      "prizeUsd": "In-game rewards: sprays, gun buddies, titles (non-cash)",
      "prizeNote": "Verified on Riot's official Valorant Esports channels: Champions Paris Pick'Ems (powered by AWS) is free — make picks for the Groups and Playoffs. Rewards are in-game items: a spray for participating, a 'G.O.A.T.' gun buddy for the top 50%, a gold variant for the top 20%, and a '100%' title for a perfect bracket. Non-cash cosmetic items; requires a valid Riot account.",
      "minCashout": "n/a — in-game rewards only",
      "payoutMethods": [
        "In-game rewards (Valorant account)"
      ],
      "eligibility": "Valid Riot account; available in most regions (some exclusions apply).",
      "restricted": "Non-cash (cosmetic in-game items).",
      "verification": {
        "level": "account",
        "steps": [
          "Free Riot account.",
          "Rewards granted automatically to the linked Valorant account after the event."
        ]
      },
      "redFlags": [
        "Non-cash — cosmetic in-game items only."
      ],
      "sources": [
        {
          "title": "Valorant Esports — Champions Pick'Ems (official Riot)",
          "url": "https://x.com/ValorantEsports/status/1963633815282405466",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "eredivisie-fantasy",
      "name": "ESPN Fantasy Voetbal (Eredivisie)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Eredivisie's official free fantasy football game (ESPN Fantasy Voetbal), with sub-league and season prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasyvoetbal.nl/",
      "rulesUrl": "https://eredivisie.com/news/this-is-espn-fantasy-voetbal-the-official-game-of-the-vriendenloterij-eredivisie/",
      "prizeUsd": "Prizes via sub-leagues and season (not itemised on the public page)",
      "prizeNote": "Verified on eredivisie.com: ESPN Fantasy Voetbal is the official game of the VriendenLoterij Eredivisie — free to play in the ESPN GOAL! app or at fantasyvoetbal.nl (English supported). Build a 15-player squad on a €100m budget, pick a captain, make transfers, and compete in sub-leagues. The public page does not itemise the prize table — confirm the current season's prizes in-app before relying on it.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free account, open internationally (English supported).",
      "restricted": "Prize table not itemised on the public page — confirm in-app.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "The public page doesn't itemise prizes — confirm before relying on it."
      ],
      "sources": [
        {
          "title": "Eredivisie — ESPN Fantasy Voetbal (official)",
          "url": "https://eredivisie.com/news/this-is-espn-fantasy-voetbal-the-official-game-of-the-vriendenloterij-eredivisie/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "deriv-tournaments",
      "name": "Deriv Trading Tournaments",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Deriv's free monthly demo trading tournaments with real cash prizes, no deposit required.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://contest.deriv.com/",
      "rulesUrl": "https://deriv.com/newsroom/updates/free-trading-tournaments-virtual-funds-cash-prizes",
      "prizeUsd": "1st $1,000; 2nd $600; 3rd $400 (typical $2,000 monthly pool)",
      "prizeNote": "Verified on deriv.com's official newsroom: Deriv runs monthly, skill-based demo trading tournaments that are 'free to enter, uses $10,000 in virtual funds, and awards real cash prizes to top performers with no deposit required.' The typical monthly pool is $2,000 — 1st $1,000 / 2nd $600 / 3rd $400. Prizes are credited to the winner's Deriv account and require a fully verified account to redeem.",
      "minCashout": "Prizes credited to a verified Deriv account",
      "payoutMethods": [
        "Account credit (Deriv balance)"
      ],
      "eligibility": "Free account, most regions; a fully verified real account is required to redeem prizes.",
      "restricted": "Broker acquisition funnel. Prizes are account credits, not direct bank cash.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free registration + demo account.",
          "Winners must hold a fully verified Deriv real account to redeem."
        ]
      },
      "redFlags": [
        "Broker funnel; prizes are account credits (withdrawable after verification), not direct cash."
      ],
      "sources": [
        {
          "title": "Deriv — monthly demo trading tournaments (official)",
          "url": "https://deriv.com/newsroom/updates/free-trading-tournaments-virtual-funds-cash-prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "multibank-demo",
      "name": "MultiBank Group Demo Trading Competition",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "MultiBank's free demo trading competition with $15,000 in real cash every round plus a year-end car.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://tradfi.multibankgroup.com/en/lp-n/demo-competition",
      "rulesUrl": "https://tradfi.multibankgroup.com/en/lp-n/demo-competition",
      "prizeUsd": "$15,000 per round: 1st $10,000, 2nd $3,000, 3rd $2,000; Mercedes-Benz S-Class year-end prize",
      "prizeNote": "Verified on MultiBank's official competition page: the demo trading competition (with Khabib Nurmagomedov) is 'free to enter.' Trade $50,000 in virtual funds on a swap-free demo account; each round awards $15,000 in real cash (1st $10,000 / 2nd $3,000 / 3rd $2,000). Monthly winners qualify for a year-end Mercedes-Benz S-Class mega prize. Highest percentage return wins.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash prize",
        "Prize fulfillment (vehicle)"
      ],
      "eligibility": "Free account; see the official terms for jurisdiction limits.",
      "restricted": "Broker acquisition funnel. Requires a demo account (free).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free registration + demo account.",
          "Winners contacted via email and verified before payout."
        ]
      },
      "redFlags": [
        "Broker funnel — but no deposit is required to enter or win the demo prize."
      ],
      "sources": [
        {
          "title": "MultiBank Group — Demo Trading Competition (official)",
          "url": "https://tradfi.multibankgroup.com/en/lp-n/demo-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "xm-demo",
      "name": "XM Demo Competition (Demo Weekly)",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "XM's free weekly demo trading competition — 100 winners share $25,000 in withdrawable cash each week.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.xm.com/",
      "rulesUrl": "https://www.xm.com/",
      "prizeUsd": "$25,000/week shared by 100 winners (1st $2,000, 2nd $1,500, 3rd $1,250)",
      "prizeNote": "Verified via XM's own competition announcements: the XM Demo Weekly tournament is free to enter (no entry fee, no deposit) — trade virtual funds and 100 winners share a $25,000 weekly pool (1st $2,000 / 2nd $1,500 / 3rd $1,250, descending through 100 places). XM Competitions has awarded over $1.5M in cash prizes since 2023. Requires a verified account to receive prizes.",
      "minCashout": "Prizes credited to a verified XM account",
      "payoutMethods": [
        "Cash (withdrawable from XM account)"
      ],
      "eligibility": "Free account, specific regions; verified account required to join and receive prizes.",
      "restricted": "Broker acquisition funnel. Regional availability; account verification required.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Open and verify an XM account (KYC).",
          "Join the weekly demo competition and trade virtual funds."
        ]
      },
      "redFlags": [
        "Broker funnel; KYC verification required. Regional restrictions apply."
      ],
      "sources": [
        {
          "title": "XM — Demo Competitions announcement (official)",
          "url": "https://www.myfxbook.com/press-release/xmrsquos-anniversary-demo-competitions-now-live-ndash-join-the-celebration-with-a-100000-prize-pool-/33454",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "headway-demo",
      "name": "Headway No Limits Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Headway's free monthly demo trading contest with $2,125 in withdrawable cash prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://hw.online/",
      "rulesUrl": "https://www.myfxbook.com/press-release/headway-launches-no-limits-demo/41776",
      "prizeUsd": "$2,125 pool: 1st $1,000, 2nd $500, 3rd $200, 4th $100, 5th $75, 6th–10th $50",
      "prizeNote": "Verified via Headway's own press release: the No Limits demo contest is free to enter — trade any instrument with unlimited leverage on a demo account and the top 10 win a share of $2,125 in withdrawable cash (credited to the platform wallet, where it can be traded or withdrawn). Headway runs monthly themed demo contests.",
      "minCashout": "Prizes credited to the platform wallet (withdrawable)",
      "payoutMethods": [
        "Platform wallet (withdrawable cash)"
      ],
      "eligibility": "Free account; see the official terms for jurisdiction limits.",
      "restricted": "Broker acquisition funnel. Smaller prize pool.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free registration + demo account.",
          "Winners verified before prizes are credited."
        ]
      },
      "redFlags": [
        "Broker funnel; modest prize pool. Regional restrictions may apply."
      ],
      "sources": [
        {
          "title": "Headway — No Limits demo contest (official press release)",
          "url": "https://www.myfxbook.com/press-release/headway-launches-no-limits-demo/41776",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "hfm-demo",
      "name": "HFM Virtual to Real Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "HFM's free monthly demo trading contest — $2,000 / $1,000 / $500 prizes credited to a live account.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.hfm.com/int/en/promotions/demo-contest",
      "rulesUrl": "https://www.hfm.com/int/en/promotions/demo-contest",
      "prizeUsd": "1st $2,000, 2nd $1,000, 3rd $500 (trading bonuses, credited to a live account)",
      "prizeNote": "Verified on hfm.com's official page: the 'Virtual to Real' Demo Contest runs monthly, is free to enter, and ranks traders by percentage gain on a $10,000 demo account. Honest note: the official FAQ states 'Are the prizes real cash? No, the prizes are trading bonuses' — they are credited to a live account and only profits (after meeting a minimum-trade/volume requirement) become withdrawable. Not available to residents of China and Bangladesh.",
      "minCashout": "Profits from prize funds withdrawable after minimum trade/volume",
      "payoutMethods": [
        "Trading bonus (live account)"
      ],
      "eligibility": "18+, free demo contest account; see the official terms for jurisdiction limits.",
      "restricted": "Prize is a trading bonus, not direct cash. Excludes China and Bangladesh.",
      "verification": {
        "level": "account",
        "steps": [
          "Open a demo contest account (free).",
          "Winners receive the bonus in a live account; profits withdrawable after trade/volume requirements."
        ]
      },
      "redFlags": [
        "Broker funnel. Prizes are trading bonuses, not withdrawable cash — only profits are."
      ],
      "sources": [
        {
          "title": "HFM — Virtual to Real Demo Contest (official)",
          "url": "https://www.hfm.com/int/en/promotions/demo-contest",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "litefinance-best",
      "name": "LiteFinance Best of the Best Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "LiteFinance's free monthly demo contest with a $10,000 prize fund split among the top five.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.litefinance.org/contests/demo/best/",
      "rulesUrl": "https://www.litefinance.org/contests/demo/best/",
      "prizeUsd": "1st $4,000, 2nd $2,500, 3rd $1,500, 4th $1,000, 5th $1,000 ($10,000 fund)",
      "prizeNote": "Verified on litefinance.org's official contest page: the BEST OF THE BEST demo contest runs monthly, is free to enter, and ranks the top five by Profitability/Risk ratio on a $5,000 demo ECN account. Honest note: prize funds are credited to the Credit field as an initial investment for Copy Trading — only profits made with them are withdrawable (the credit itself expires after 6 months).",
      "minCashout": "Profits withdrawable; prize credit itself is non-withdrawable",
      "payoutMethods": [
        "Trading credit (Copy Trading initial investment)"
      ],
      "eligibility": "Free account with verified profile; see the official terms for exclusions.",
      "restricted": "Prize is a trading credit, not direct cash. Some regions excluded.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Register and verify a LiteFinance profile.",
          "Winners claim within 2 weeks; credit is added to a live account."
        ]
      },
      "redFlags": [
        "Broker funnel. Prize is credit (expires 6 months), not cash — only profits withdraw."
      ],
      "sources": [
        {
          "title": "LiteFinance — Best of the Best contest (official)",
          "url": "https://www.litefinance.org/contests/demo/best/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tradingcom-paper",
      "name": "Trading.com Paper Trading Competition",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Trading.com's free monthly paper-trading competition (US only) — $6,000 / $3,000 / $1,000 cash prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.trading.com/us/forex-trading-competition",
      "rulesUrl": "https://www.trading.com/us/forex-trading-competition",
      "prizeUsd": "1st $6,000, 2nd $3,000, 3rd $1,000 (withdrawable cash)",
      "prizeNote": "Verified on trading.com's official competition page and PDF terms: the monthly Paper Trading Competition gives away $10,000 a month, ranked by ROI% on a $10,000 virtual practice account, with 'real withdrawable funds' for the top three. No deposit required; a verified account is needed to enter and claim. US-only (CFTC/NFA-registered).",
      "minCashout": "Cash prize paid after verification (5-business-day claim window)",
      "payoutMethods": [
        "Cash (withdrawable funds)"
      ],
      "eligibility": "US residents, 18+, verified Trading.com (T1) account.",
      "restricted": "US-only promotion. Winners must respond within five business days.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Open and verify a Trading.com account (no funding required).",
          "Winners complete eligibility checks before the cash is transferred."
        ]
      },
      "redFlags": [
        "Broker funnel — but the cash prize is genuinely withdrawable and no deposit is required."
      ],
      "sources": [
        {
          "title": "Trading.com — Forex Trading Competition (official)",
          "url": "https://www.trading.com/us/forex-trading-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tickmill-nfp",
      "name": "Tickmill NFP Machine",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "Tickmill's monthly price-prediction contest — predict the NFP price for a chance at $500 cash.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.tickmill.com/promotions/nfp-machine",
      "rulesUrl": "https://www.tickmill.com/promotions/nfp-machine",
      "prizeUsd": "$500 for an exact prediction; $250/$150/$100 for the closest three",
      "prizeNote": "Verified on tickmill.com's official page: the NFP Machine is a monthly prediction contest where you guess the price of a specified instrument 30 minutes after the NFP release. An exact prediction wins $500; the closest three win $250/$150/$100. Prizes are credited to the wallet as withdrawable cash. A live Tickmill account is required to enter, but no trading or deposit is needed to participate.",
      "minCashout": "Cash credited to the Tickmill wallet (withdrawable)",
      "payoutMethods": [
        "Cash (wallet credit)"
      ],
      "eligibility": "Live Tickmill account holders; see the official terms for jurisdiction limits.",
      "restricted": "Requires a (free) live Tickmill account. One entry per client per month.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Open a live Tickmill account (free).",
          "Submit your prediction during NFP week; winners announced on Tickmill's Facebook."
        ]
      },
      "redFlags": [
        "Broker funnel. Requires a live account (no deposit needed), but no trading is required to win."
      ],
      "sources": [
        {
          "title": "Tickmill — NFP Machine (official)",
          "url": "https://www.tickmill.com/promotions/nfp-machine",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "roboforex-demo",
      "name": "RoboForex Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "RoboForex's free monthly demo trading contest with a $3,000 prize fund across ten winners.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://roboforex.com/",
      "rulesUrl": "https://roboforex.com/",
      "prizeUsd": "1st $700, 2nd $550, 3rd $420 … 10th $50 (ten prizes)",
      "prizeNote": "RoboForex runs a monthly 'Demo Forex' contest (free, demo account) with a $3,000 fund across ten winners ($700/$550/$420/$350/$290/$240/$180/$130/$90/$50), plus weekly contests (Trade Day, KingSize MT5). Sourced from multiple review sites (tradingbrokers.com, asiaforexmentor, topasiafx) — the prize table is consistent but not confirmed on roboforex.com at review time, so treat it as secondary and re-confirm on the official site before entering.",
      "minCashout": "Winner claim only (prize credited to a live account)",
      "payoutMethods": [
        "Cash prize (live account)"
      ],
      "eligibility": "Free RoboForex account; see the official contest rules.",
      "restricted": "Prize table sourced from review sites, not the official domain — re-confirm before relying on it.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Open a free RoboForex account and register for the contest.",
          "Winners verified before the prize is credited."
        ]
      },
      "redFlags": [
        "Prize figures are from review sites, not the official page — re-confirm. Broker funnel."
      ],
      "sources": [
        {
          "title": "RoboForex Demo Contest (review)",
          "url": "https://tradingbrokers.com/roboforex-demo-contest/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fbs-pro-demo",
      "name": "FBS Pro Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "FBS's free monthly demo trading contest with a $1,000 fund split among the top five.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fbs.com/",
      "rulesUrl": "https://fbs.com/",
      "prizeUsd": "1st $450, 2nd $250, 3rd $150, 4th $100, 5th $50 ($1,000 fund)",
      "prizeNote": "FBS runs a free monthly 'Pro' demo trading contest (Fortnightly/Pro Demo Contest) with a $1,000 fund split among the top five ($450/$250/$150/$100/$50), on a $10,000 demo account with 1:100 leverage. Sourced from multiple review sites (fofan.org, forexdominion, allforexbonus) — the prize table is consistent but not confirmed on fbs.com at review time, so treat it as secondary and re-confirm on the official site before entering.",
      "minCashout": "Winner claim only (prize credited to a live account)",
      "payoutMethods": [
        "Cash prize (live account)"
      ],
      "eligibility": "Free FBS account; see the official contest rules.",
      "restricted": "Prize table sourced from review sites, not the official domain — re-confirm before relying on it.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Open a free FBS account and register for the contest.",
          "Winners verified before the prize is credited."
        ]
      },
      "redFlags": [
        "Prize figures are from review sites, not the official page — re-confirm. Broker funnel."
      ],
      "sources": [
        {
          "title": "FBS Pro Demo Contest (review)",
          "url": "https://fofan.org/contest/fbs-pro-demo-trading-contest/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "npbfx-demo",
      "name": "NPBFX Trading Battle Demo Contest",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "NPBFX's free monthly demo trading contest with a $3,000 pool plus an iPhone for the top trader.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://npbfx.com/",
      "rulesUrl": "https://npbfx.com/",
      "prizeUsd": "1st $1,000 (+ iPhone), 2nd $500, 3rd $250, 4th $150, 5th–10th $100, 11th–20th $50",
      "prizeNote": "NPBFX runs a free monthly Trading Battle Demo contest on MetaTrader 4 ($5,000 virtual account): the top 20 share a $3,000 pool (1st $1,000 + iPhone, 2nd $500, 3rd $250, 4th $150, 5th–10th $100, 11th–20th $50). Sourced from review sites (ndfxbonus.com, brokersofforex, topbrokers) — consistent but not confirmed on npbfx.com at review time. Note: one 2019 review alleges a non-payment dispute; treat with caution and re-confirm on the official site.",
      "minCashout": "Prize credited to a live account; withdrawable after trade-volume requirement",
      "payoutMethods": [
        "Cash prize (live account)"
      ],
      "eligibility": "Free NPBFX account; see the official contest rules.",
      "restricted": "Prize table sourced from review sites, not the official domain. One older non-payment complaint noted.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Open a free NPBFX account and register for the contest.",
          "Winners verified before the prize is credited."
        ]
      },
      "redFlags": [
        "Prize figures from review sites, not the official page. One 2019 non-payment complaint exists. Broker funnel."
      ],
      "sources": [
        {
          "title": "NPBFX Trading Battle Demo Contest (review)",
          "url": "https://www.ndfxbonus.com/2026/07/npbfx-trading-battle-demo-contest-win.html",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cev-volley-fantasy",
      "name": "CEV Champions League Volley Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The CEV's official free volleyball fantasy game, with match balls, jerseys and Final Four tickets as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://championsleague.cev.eu/",
      "rulesUrl": "https://cevmatchpredictor.zendesk.com/hc/en-us/articles/12463995830941-CEV-Champions-League-Fantasy-Terms-Conditions",
      "prizeUsd": "Final 2026 tickets (season winner); jerseys + match balls (2nd–3rd); match ball + EuroVolley.TV (4th–5th)",
      "prizeNote": "Verified on the CEV's official terms: the CEV Champions League Volley Fantasy Game is 'free to enter, and no purchase is necessary.' Round/leg prizes are official match balls; season prizes are Men's/Women's Final 2026 tickets (1st), a team jersey + match ball (2nd–3rd), and a match ball + one-year EuroVolley.TV subscription (4th–5th). Non-cash. Run by CEV with Genius Sports.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, jerseys, match balls, subscriptions)"
      ],
      "eligibility": "Free account, open internationally; one registration per person.",
      "restricted": "Non-cash prizes. CEV/Genius Sports staff ineligible for main prizes.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (tickets, merchandise, subscriptions)."
      ],
      "sources": [
        {
          "title": "CEV — Champions League Fantasy Terms & Conditions (official)",
          "url": "https://cevmatchpredictor.zendesk.com/hc/en-us/articles/12463995830941-CEV-Champions-League-Fantasy-Terms-Conditions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "vnl-fantasy",
      "name": "VNL Fantasy (Volleyball Nations League)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The FIVB's official free VNL fantasy game, with VBTV subscriptions and shop credit as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://en.volleyballworld.com/",
      "rulesUrl": "https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/news/vnl-fantasy-unveiling-the-new-fantasy-experience",
      "prizeUsd": "Global winner: 1 year VBTV + $100 shop credit; runner-up $50; top-3 matchday get 1 month VBTV",
      "prizeNote": "Verified on volleyballworld.com (the FIVB/Volleyball World official site): VNL Fantasy is free to play — pick 12 players on 150 credits and compete in public/private leagues. The global winner receives one year of VBTV plus $100 in Volleyball World shop credit; the runner-up $50; the top three each matchday get one month of VBTV. Non-cash (subscriptions and shop credit).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "VBTV subscription",
        "Volleyball World shop credit"
      ],
      "eligibility": "Free account, open internationally.",
      "restricted": "Non-cash prizes (subscriptions and shop credit).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (subscriptions and shop credit, not dollars)."
      ],
      "sources": [
        {
          "title": "Volleyball World — VNL Fantasy (official)",
          "url": "https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/news/vnl-fantasy-unveiling-the-new-fantasy-experience",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cev-predictor",
      "name": "CEV Champions League Predictor Game",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The CEV's official free volleyball match-prediction game, with Final Four tickets for top scorers.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://championsleague.cev.eu/",
      "rulesUrl": "https://championsleague.cev.eu/en/articles/cev-champions-league-volley-2026/win-fantastic-prizes-with-the-clvolleyw-predictor-game/",
      "prizeUsd": "Tickets to the Final Four 2027 (non-cash)",
      "prizeNote": "Verified on the CEV's official site: the #CLVolleyW Predictor Game is a free prediction game where every correct prediction scores points, and top scorers win 'exclusive prizes, including tickets to the Final Four 2027 events.' Distinct from the CEV Fantasy game (this one is match-outcome prediction, not roster building). Non-cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets)"
      ],
      "eligibility": "Free account, open internationally.",
      "restricted": "Non-cash prizes (tickets).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (event tickets)."
      ],
      "sources": [
        {
          "title": "CEV — Champions League Predictor Game (official)",
          "url": "https://championsleague.cev.eu/en/articles/cev-champions-league-volley-2026/win-fantastic-prizes-with-the-clvolleyw-predictor-game/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "super-league-fantasy",
      "name": "Betfred Super League Fantasy (Rugby League)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Super League's official free fantasy rugby league game, with monthly and season prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.superleague.co.uk/",
      "rulesUrl": "https://fantasy.superleague.co.uk/prizes-winners",
      "prizeUsd": "Monthly: PS5/Xbox + £600 games; season: hospitality tickets + SuperLeague+ pass + signed shirt",
      "prizeNote": "Verified on fantasy.superleague.co.uk's official prizes page: Fantasy Super League is 'Free to Play.' Monthly winners choose a PlayStation 5 or Xbox Series X with games (up to £600 value); the season winner receives four hospitality tickets to a major 2027 Rugby League event, an annual SuperLeague+ pass, an invite to the 2027 launch and a signed Dream Team shirt. Non-cash prizes. Sponsored by Betfred (bookmaker) but no betting account is required to play.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (console, tickets, subscriptions, merchandise)"
      ],
      "eligibility": "Free account; see the official terms for age and residency.",
      "restricted": "Non-cash prizes. Sponsored by Betfred (bookmaker) — no betting account needed to play.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (console, tickets, subscriptions). Sponsored by a bookmaker."
      ],
      "sources": [
        {
          "title": "Fantasy Super League — Prizes (official)",
          "url": "https://fantasy.superleague.co.uk/prizes-winners",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "super-league-predictor",
      "name": "Betfred Super League Predictor",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Super League's official free season-long prediction game, with tickets and subscriptions as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.superleague.co.uk/predictor",
      "rulesUrl": "https://www.superleague.co.uk/article/5728/play-super-league-predictor-in-2026",
      "prizeUsd": "Season winner: launch invite + 4 event tickets + SuperLeague+ pass; monthly/weekly tickets; streak prizes",
      "prizeNote": "Verified on superleague.co.uk: the Predictor Game is 'FREE, season-long' — predict every Betfred Super League fixture. Prizes include a season-winner invite to the 2026 launch plus four tickets to a major Rugby League event and an annual SuperLeague+ pass; monthly and weekly winners get tickets to major events; streak prizes (18/24/30/36 correct) are also offered. Non-cash. Sponsored by Betfred (bookmaker) but no betting account is required.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (tickets, subscriptions)"
      ],
      "eligibility": "Free account; see the official terms for age and residency.",
      "restricted": "Non-cash prizes. Sponsored by Betfred (bookmaker).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (tickets and subscriptions). Sponsored by a bookmaker."
      ],
      "sources": [
        {
          "title": "Super League — Play Super League Predictor in 2026 (official)",
          "url": "https://www.superleague.co.uk/article/5728/play-super-league-predictor-in-2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "motogp-fantasy",
      "name": "MotoGP Fantasy (Official)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Dorna's official free MotoGP fantasy game — signed helmets, a PS5 and grand prix tickets as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.motogp.com/",
      "rulesUrl": "https://www.motogp.com/en/news/2026/02/18/motogp-fantasy-play-smart-and-win-big/874823",
      "prizeUsd": "1st signed Marquez helmet; 2nd PS5 + MotoGP26; 3rd signed knee slider; weekly GP tickets",
      "prizeNote": "Verified on motogp.com (the official Dorna site): MotoGP Fantasy is free to play. Joining the Official MotoGP League (no code needed) enters you for season prizes — 1st a signed Marc Márquez replica helmet, 2nd a PlayStation 5 + MotoGP26 game, 3rd a signed knee slider; the highest scorer each Grand Prix wins two tickets to a MotoGP weekend of their choice. Non-cash prizes.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (helmet, console, tickets, merchandise)"
      ],
      "eligibility": "Free account, open internationally.",
      "restricted": "Non-cash prizes.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (helmet, console, tickets)."
      ],
      "sources": [
        {
          "title": "MotoGP — Fantasy prizes 2026 (official)",
          "url": "https://www.motogp.com/en/news/2026/02/18/motogp-fantasy-play-smart-and-win-big/874823",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "the-hundred-fantasy",
      "name": "The Hundred Fantasy (ECB)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The ECB's official free fantasy game for The Hundred, with signed bats, a watch and match tickets as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.thehundred.com/",
      "rulesUrl": "https://www.thehundred.com/terms/fantasy",
      "prizeUsd": "1st signed bat; 2nd Citizen watch + tickets; 3rd; block winners get Final tickets (non-cash)",
      "prizeNote": "Verified on thehundred.com's official fantasy terms: The Hundred Fantasy is 'free to enter and no purchase is necessary.' Prizes (UK residents only): 1st a Hundred-branded bat signed by top players; 2nd a Citizen Eco-Drive watch (RRP £399/£229) plus four 2027 Eliminator tickets; block winners receive Final 2026 tickets at Lord's. Non-cash. Run by the ECB.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (bat, watch, tickets)"
      ],
      "eligibility": "Free account, UK residents eligible for prizes (13+, parental consent under 18).",
      "restricted": "Prizes UK-residents only. Non-cash.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified (incl. residency check) before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes, UK-residents only."
      ],
      "sources": [
        {
          "title": "The Hundred — Fantasy terms (official ECB)",
          "url": "https://www.thehundred.com/terms/fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "indycar-fantasy",
      "name": "INDYCAR Fantasy Challenge",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "INDYCAR's official free fantasy game (on GridRival), with an Indy 500 VIP experience as the top prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.indycar.com/fantasy",
      "rulesUrl": "https://www.indycar.com/fantasychallenge/indycar/fullrules",
      "prizeUsd": "1st: 2026 Indy 500 VIP experience (ARV $5,000); 2nd memorabilia ($650); 3rd–10th packages",
      "prizeNote": "Verified on indycar.com's official full rules: the INDYCAR Fantasy Challenge (driven by Firestone, played on GridRival) is 'free to play.' The grand prize is a 2026 VIP Experience at the Indianapolis 500 for two plus a $250 Firestone gift card (ARV $5,000); 2nd signed memorabilia (ARV $650); 3rd–10th gift packages. Prize-eligible for US residents (18+) only. Non-cash (experience/merchandise).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (VIP experience, memorabilia, gift cards)"
      ],
      "eligibility": "US residents, 18+, free GridRival/INDYCAR account.",
      "restricted": "Prize-eligible for US residents only. Non-cash (experience/merchandise).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account on GridRival.",
          "Winner verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (VIP experience, merchandise). US-resident prize eligibility."
      ],
      "sources": [
        {
          "title": "INDYCAR Fantasy Challenge — Full Rules (official)",
          "url": "https://www.indycar.com/fantasychallenge/indycar/fullrules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "super-rugby-fantasy",
      "name": "Fantasy Super Rugby Pacific",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Super Rugby Pacific's official free fantasy game with a USD $10,000 major prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://www.playfantasyrugby.com/",
      "rulesUrl": "https://playfantasyrugby.com/rugby-championship/help/game-guidelines",
      "prizeUsd": "USD $10,000 (AUD $14,000) major prize for the overall winner",
      "prizeNote": "Verified on playfantasyrugby.com (the official Super Rugby Pacific fantasy platform): 'THE OFFICIAL FANTASY GAME OF SUPER RUGBY PACIFIC 2026! … It's FREE to play and you can win up to $10,000.' The overall winner receives a USD $10,000 (AUD $14,000) major prize. Pick a 15-player squad on a $100m salary cap with variable player pricing.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (major prize)"
      ],
      "eligibility": "Free account, open globally.",
      "restricted": "T&Cs apply to the prize. The headline figure is the overall winner's major prize.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verified before the major prize is paid."
        ]
      },
      "redFlags": [
        "Only the overall winner receives the $10,000; no other cash prizes stated."
      ],
      "sources": [
        {
          "title": "Super Rugby Pacific Fantasy — game guidelines (official)",
          "url": "https://playfantasyrugby.com/rugby-championship/help/game-guidelines",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fantasy-gaa",
      "name": "Fantasy Gaelic Football (GAA)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free Gaelic football fantasy game with cash prizes for the top finishers and best club.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasygaelicfootball.com/",
      "rulesUrl": "https://fantasygaelicfootball.com/",
      "prizeUsd": "£700 first prize (2026); club of the year £300; further place prizes",
      "prizeNote": "Fantasy Gaelic Football is a free-to-play fantasy game for the All-Ireland Championship. The official account announced the 2026 champion winning £700 first prize and the Club of the Year £300. This is a fan/community-run game (not the GAA itself), and prize amounts vary by season — confirm the current season's prize table on the site before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (organizer payout)"
      ],
      "eligibility": "Free account, open internationally (Ireland-focused).",
      "restricted": "Community-run game, not the GAA. Prize amounts vary by season.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner contacted by the organizer before payout."
        ]
      },
      "redFlags": [
        "Community-run (not the GAA). Prize figures are per-season — re-confirm."
      ],
      "sources": [
        {
          "title": "Fantasy Gaelic Football (official site)",
          "url": "https://fantasygaelicfootball.com/",
          "tier": "official"
        },
        {
          "title": "Fantasy Gaelic — 2026 champion announcement (official account)",
          "url": "https://x.com/fantasygaelicfb",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "film-prize",
      "name": "Louisiana Film Prize (Prize Fest)",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "The world's largest cash prize for a short film — $50,000, with a $0 entry fee (film must be shot in Louisiana).",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.prizefest.com/film/",
      "rulesUrl": "https://www.prizefest.com/film/rules/",
      "prizeUsd": "$50,000 cash (Caddo/Bossier Parish); $25,000 (elsewhere in Louisiana); $250 per finalist",
      "prizeNote": "Verified on prizefest.com's official rules: the Louisiana Film Prize awards 'the largest cash prize for a short film in the world — $50,000.' The entry fee is $0. Films must be scripted live-action shorts of 5–15 minutes; principal photography (90% of runtime) must be in Louisiana — Caddo/Bossier Parish for $50,000, elsewhere in the state for $25,000. Each of the 20 finalists receives $250.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (check)"
      ],
      "eligibility": "Open worldwide, but principal photography must occur in Louisiana.",
      "restricted": "Filming must take place in Louisiana (Caddo/Bossier Parish for the $50,000). W-9 required for finalist payment.",
      "verification": {
        "level": "tax",
        "steps": [
          "Register the project (free) before shooting.",
          "Finalists submit a W-9 before the check is issued."
        ]
      },
      "redFlags": [
        "Requires filming in Louisiana — a real production commitment, not a casual entry."
      ],
      "sources": [
        {
          "title": "Film Prize 2026 — Official Rules (Prize Fest)",
          "url": "https://www.prizefest.com/film/rules/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pensacola-songwriting",
      "name": "Pensacola Beach Songwriters Festival Competition",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "A free-entry songwriting competition with a $1,000 grand prize and $150 category prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://pensacolabeachsongwritersfestival.com/2026-songwriting-competition/",
      "rulesUrl": "https://pensacolabeachsongwritersfestival.com/2026-songwriting-competition/",
      "prizeUsd": "$1,000 grand prize + festival performance; $150 per category winner",
      "prizeNote": "Verified on the festival's official page: the 2026 Songwriting Competition is 'FREE to enter' with 'NO FEE.' The grand prize is $1,000 cash plus featured festival performances; each category winner receives $150. Categories include Country, Blues/R&B/Rock, Bluegrass/Folk, Gospel and Youth. US residents only (18+, or youth category 17-and-under).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "US residents, 18+ (Youth category 17-and-under).",
      "restricted": "US-only. Annual (opens January, closes late April).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Submit up to three songs by email (free).",
          "Winners notified and verified before the cash prize and festival performance."
        ]
      },
      "redFlags": [
        "US-only, annual. Modest cash prizes."
      ],
      "sources": [
        {
          "title": "Pensacola Beach Songwriters Festival — 2026 competition (official)",
          "url": "https://pensacolabeachsongwritersfestival.com/2026-songwriting-competition/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "young-lions",
      "name": "Young Lions Fiction Award (NYPL)",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "The New York Public Library's free-entry $10,000 award for the best fiction book by a US author 35 or under.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.nypl.org/about/awards/young-lions-fiction-award",
      "rulesUrl": "https://www.nypl.org/about/awards/young-lions-fiction-award/submission-form",
      "prizeUsd": "$10,000 grand prize",
      "prizeNote": "Verified on nypl.org: the Young Lions Fiction Award (established 2001 by Ethan Hawke and others) awards $10,000 for the best novel, short-story collection or graphic novel by a US author aged 35 or under. There is no entry fee, but submissions must be made by the publisher (authors cannot self-submit), and the book must be published in the qualifying calendar year. Annual, deadline early September.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "US citizens aged 35 or under at publication; publisher-submitted.",
      "restricted": "Publisher must submit; the book must be published in the calendar year. No self-submission.",
      "verification": {
        "level": "tax",
        "steps": [
          "The publisher submits the book via the NYPL portal.",
          "Winner verified and paid by the New York Public Library."
        ]
      },
      "redFlags": [
        "Publisher-submitted only — you can't enter directly. Narrow eligibility (US, 35-and-under)."
      ],
      "sources": [
        {
          "title": "NYPL — Young Lions Fiction Award submission form (official)",
          "url": "https://www.nypl.org/about/awards/young-lions-fiction-award/submission-form",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "afl-tipping",
      "name": "AFL Tipping",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The AFL's official free footy tipping competition, with a $25,000 cash major prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://tipping.afl.com.au/",
      "rulesUrl": "https://www.afl.com.au/news/1469992/play-afl-tipping-25k-up-for-grabs-new-game-launched",
      "prizeUsd": "$25,000 cash + Toyota AFL Grand Final package; $2,000 2nd; $1,000 3rd; weekly Sherrin + $100",
      "prizeNote": "Verified on afl.com.au (the AFL's official site): the 2026 AFL Tipping competition is free to enter, with a major prize of $25,000 cash plus a Toyota AFL Grand Final package for two. Runner-up $2,000, third $1,000, weekly winners get an official Sherrin football + $100 AFL Store voucher, plus $2,000 each for the Gauntlet and Streak games. Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Prize fulfillment (Grand Final package, Sherrin, vouchers)"
      ],
      "eligibility": "Free AFL iD account; Australia-focused.",
      "restricted": "Australia-focused prize eligibility. Weekly prizes are merchandise/vouchers, not cash.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free AFL iD account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Australia-focused. Weekly prizes are non-cash (football + voucher)."
      ],
      "sources": [
        {
          "title": "AFL — Play AFL Tipping (official)",
          "url": "https://www.afl.com.au/news/1469992/play-afl-tipping-25k-up-for-grabs-new-game-launched",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "aflw-tipping",
      "name": "AFLW Tipping",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The AFL's official free women's footy tipping competition, with a $7,500 cash major prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://tipping.afl.com.au/",
      "rulesUrl": "https://www.afl.com.au/aflw/news/1555826/aflw-tipping-is-back-for-2026-with-new-games-and-huge-prizes-to-be-won",
      "prizeUsd": "$7,500 cash 1st; $750 2nd; $500 3rd; $1,000 Gauntlet; $500 streak; weekly Sherrin",
      "prizeNote": "Verified on afl.com.au (the AFL's official site): AFLW Tipping 2026 is free to enter. The overall winner takes $7,500 cash, second $750, third $500; the Gauntlet winner $1,000; the Streak game $500; weekly winners get an official Sherrin football (value $260). Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Prize fulfillment (Sherrin football)"
      ],
      "eligibility": "Free AFL iD account; Australia-focused.",
      "restricted": "Australia-focused prize eligibility. Weekly prizes are merchandise.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free AFL iD account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Australia-focused. Weekly prizes are non-cash (football)."
      ],
      "sources": [
        {
          "title": "AFL — AFLW Tipping 2026 (official)",
          "url": "https://www.afl.com.au/aflw/news/1555826/aflw-tipping-is-back-for-2026-with-new-games-and-huge-prizes-to-be-won",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "supercoach-afl",
      "name": "KFC SuperCoach AFL",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Australia's biggest free AFL fantasy game (News Corp), with a $50,000 grand prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://supercoach.com.au/",
      "rulesUrl": "https://www.codesports.com.au/afl/supercoach-news/supercoach-afl-returns-for-2026-heres-everything-you-need-to-know/news-story/a5da766fdefa2f0cd3e31252a4848ef8",
      "prizeUsd": "$50,000 1st; $5,000 2nd; $1,000 3rd–10th; $1,000 weekly ($2,000 for Plus subscribers); $1,000 Cup",
      "prizeNote": "Verified on News Corp's own code sports site: KFC SuperCoach AFL is 'free to play' and the overall winner receives $50,000 cash, second $5,000, third–tenth $1,000 each; the weekly round winner gets $1,000 (doubled to $2,000 for SuperCoach Plus subscribers); a new SuperCoach Cup pays $1,000. Pick 31 players under a $10m salary cap. Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Free account, Australia-focused.",
      "restricted": "Australia-focused prize eligibility.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free SuperCoach account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Australia-focused."
      ],
      "sources": [
        {
          "title": "Code Sports — SuperCoach AFL returns for 2026 (official News Corp)",
          "url": "https://www.codesports.com.au/afl/supercoach-news/supercoach-afl-returns-for-2026-heres-everything-you-need-to-know/news-story/a5da766fdefa2f0cd3e31252a4848ef8",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "supercoach-nrl",
      "name": "KFC SuperCoach NRL",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "News Corp's free NRL fantasy game (distinct from the NRL's own game), with a $50,000 grand prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://supercoach.com.au/nrl",
      "rulesUrl": "https://www.sportingnews.com/au/rugby-league/news/nrl-supercoach-2025-guide-how-play-score-points-strategies/87c62d83397e74b165721ea0",
      "prizeUsd": "$50,000 1st; $5,000 2nd; $1,000 3rd–10th",
      "prizeNote": "KFC SuperCoach NRL (News Corp Australia) is a free-to-play NRL fantasy game, distinct from the NRL's own official 'NRL Fantasy' game. The 2026 first prize is $50,000, second $5,000, and third–tenth $1,000 each. Cited via Sporting News (secondary); the $50,000 figure is consistent with News Corp's own announcements. Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Free account, Australia-focused.",
      "restricted": "Australia-focused prize eligibility. Distinct from the NRL's own 'NRL Fantasy' game (also listed).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free SuperCoach account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Australia-focused. Prize figure cited via secondary source — re-confirm on supercoach.com.au."
      ],
      "sources": [
        {
          "title": "SuperCoach NRL (official)",
          "url": "https://supercoach.com.au/nrl",
          "tier": "official"
        },
        {
          "title": "Sporting News — NRL SuperCoach 2026 guide",
          "url": "https://www.sportingnews.com/au/rugby-league/news/nrl-supercoach-2025-guide-how-play-score-points-strategies/87c62d83397e74b165721ea0",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "supercoach-nbl",
      "name": "SuperCoach NBL",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The NBL's free fantasy basketball game (News Corp), with a car and weekly cash prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://supercoach.com.au/nbl",
      "rulesUrl": "https://www.nbl.com.au/news/supercoach-nbl-start-picking-your-team-now",
      "prizeUsd": "Mitsubishi ASX GS (value $29,000+) major prize + $500 weekly cash prizes",
      "prizeNote": "Verified on nbl.com.au (the NBL's official site): SuperCoach NBL is a 'fun, free fantasy sports game' in the SuperCoach stable (NRL, AFL, BBL). The major prize winner receives a Mitsubishi ASX GS 2WD AUTO (valued at more than $29,000), with weekly $500 cash prizes. Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (vehicle)",
        "Cash (weekly)"
      ],
      "eligibility": "Free account, Australia-focused.",
      "restricted": "Australia-focused prize eligibility. Major prize is a vehicle, not cash.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free SuperCoach account.",
          "Winner verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Australia-focused. Major prize is a car, not cash."
      ],
      "sources": [
        {
          "title": "NBL — SuperCoach NBL (official)",
          "url": "https://www.nbl.com.au/news/supercoach-nbl-start-picking-your-team-now",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "wsl-fantasy",
      "name": "WSL Fantasy (Barclays Women's Super League)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Women's Super League's official free fantasy game, with prizes for season and 'leg' winners.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://wslfantasy.com/",
      "rulesUrl": "https://www.tottenhamhotspur.com/news/1086226/women-everything-you-need-to-know-about-the-wsls-new-fantasy-game",
      "prizeUsd": "Prizes for top season spots and each 'leg' leaderboard (non-cash, not itemised)",
      "prizeNote": "The WSL launched its official fantasy game for the 2026/27 season (free to play in the WSL app/online), covering the Barclays WSL and WSL 2. There is a global season leaderboard with WSL prizes, plus the season is split into six 'legs' each with its own leaderboard and prize. The specific prize items are not itemised on the public pages — confirm in-game. Note the prior unofficial ShePlays game is discontinued.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free account, open internationally.",
      "restricted": "Prize table not itemised publicly — confirm in-game.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Prizes not itemised publicly. New game (2026/27) — prize structure still settling."
      ],
      "sources": [
        {
          "title": "Tottenham Hotspur — WSL fantasy guide (official club)",
          "url": "https://www.tottenhamhotspur.com/news/1086226/women-everything-you-need-to-know-about-the-wsls-new-fantasy-game",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ti-compendium",
      "name": "The International (Dota 2) Compendium Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Valve's free in-game Dota 2 fantasy/predictions event for The International — rewards, not cash.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.dota2.com/",
      "rulesUrl": "https://www.dota2.com/",
      "prizeUsd": "In-game rewards: Dota Plus subscriptions, Terrain Token, Aegis replica, Immortal Treasures (non-cash)",
      "prizeNote": "Valve releases a free Compendium for The International each year (in the Dota 2 client), including a Fantasy mode and tournament predictions. Rewards scale with your percentile: from a free month of Dota Plus (85th percentile) up to a year of Dota Plus, a free physical Aegis replica and Immortal Treasures for the top 100. Non-cash in-game rewards. The 2026 edition (TI15) ran Aug 2026; returns for TI16.",
      "minCashout": "n/a — in-game rewards only",
      "payoutMethods": [
        "In-game rewards (Dota 2 account)"
      ],
      "eligibility": "Dota 2 account active before the event began.",
      "restricted": "Non-cash in-game rewards. Account must pre-date the event.",
      "verification": {
        "level": "account",
        "steps": [
          "Dota 2 account (active before the event).",
          "Rewards granted automatically in-game based on percentile."
        ]
      },
      "redFlags": [
        "Non-cash (in-game rewards). Event-based (The International)."
      ],
      "sources": [
        {
          "title": "Dota 2 — The International Compendium (official Valve)",
          "url": "https://www.dota2.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ibu-ecup",
      "name": "IBU eCup (Winter Sports Mania)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The IBU's official biathlon esports game with VIP World Cup tickets for monthly winners.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://www.biathlonworld.com/inside-ibu/marketing/ibu-biathlon-ecup",
      "rulesUrl": "https://www.biathlonworld.com/inside-ibu/marketing/ibu-biathlon-ecup",
      "prizeUsd": "2x VIP tickets to the BMW IBU World Cup for monthly winners (non-cash)",
      "prizeNote": "Verified on biathlonworld.com (the official IBU site): the IBU eCup tournament runs inside the Winter Sports Mania game. Rank in the top 30 daily to earn IBU eCup points; monthly winners (Jan–Mar) are awarded two VIP tickets to the BMW IBU World Cup. Non-cash prize. The game itself is free to play.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (VIP tickets)"
      ],
      "eligibility": "Free account; see the official terms for age and residency.",
      "restricted": "Non-cash (tickets). Seasonal (Jan–Mar).",
      "verification": {
        "level": "account",
        "steps": [
          "Free game account.",
          "Winner notified and verified before ticket fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash (VIP tickets). Seasonal."
      ],
      "sources": [
        {
          "title": "IBU — Official IBU eCup (biathlonworld.com)",
          "url": "https://www.biathlonworld.com/inside-ibu/marketing/ibu-biathlon-ecup",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tom-howard-poetry",
      "name": "Tom Howard/Margaret Reid Poetry Contest",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "A free-entry poetry contest with $12,000 in cash prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://winningwriters.com/our-contests/tom-howard-margaret-reid-poetry-contest",
      "rulesUrl": "https://winningwriters.com/our-contests/tom-howard-margaret-reid-poetry-contest",
      "prizeUsd": "$12,000 total: two $3,500 prizes + ten $500 honorable mentions",
      "prizeNote": "Verified on winningwriters.com (the contest organizer's own site): the Tom Howard/Margaret Reid Poetry Contest awards $12,000 in cash — a $3,500 Tom Howard Prize (any style), a $3,500 Margaret Reid Prize (rhyming/traditional), and ten $500 honorable mentions. Entry fee: free. Submission period April 15–October 1 (2026 deadline Oct 1).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Open internationally (except sanctioned countries).",
      "restricted": "One poem per submission; see the full rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Submit online (free).",
          "Winners notified and verified before the cash prize."
        ]
      },
      "redFlags": [
        "Annual; deadline Oct 1. Winner-take-most structure."
      ],
      "sources": [
        {
          "title": "Winning Writers — Tom Howard/Margaret Reid Poetry Contest (official)",
          "url": "https://winningwriters.com/our-contests/tom-howard-margaret-reid-poetry-contest",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "wergle-flomp",
      "name": "Wergle Flomp Humor Poetry Contest",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "A free-entry humor-poetry contest with $5,100 in prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://winningwriters.com/our-contests/wergle-flomp-humor-poetry-contest-free",
      "rulesUrl": "https://winningwriters.com/our-contests/wergle-flomp-humor-poetry-contest-free",
      "prizeUsd": "$2,000 1st (+ subscriptions); $750 2nd; $350 3rd; total $5,100",
      "prizeNote": "Verified on winningwriters.com (the contest organizer's own site): the Wergle Flomp Humor Poetry Contest (26th year) seeks humor poems with 'no fee to enter.' Prizes total $5,100 — first $2,000 (plus Duotrope and Chill Subs subscriptions), second $750, third $350. Submission period Aug 15, 2026 – April 1, 2027. One poem, 250 lines max.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Open internationally (except sanctioned countries).",
      "restricted": "Humor poems only; one poem per entrant.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Submit online (free).",
          "Winners notified and verified before the cash prize."
        ]
      },
      "redFlags": [
        "Annual; niche (humor poetry)."
      ],
      "sources": [
        {
          "title": "Winning Writers — Wergle Flomp Humor Poetry Contest (official)",
          "url": "https://winningwriters.com/our-contests/wergle-flomp-humor-poetry-contest-free",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "aflw-fantasy",
      "name": "AFLW Fantasy",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The AFL's official free women's footy fantasy game, with a $37,000 Toyota as the top prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://aflwfantasy.afl/",
      "rulesUrl": "https://www.afl.com.au/aflw/news/1550791/win-a-37k-toyota-huge-prizes-on-offer-in-aflw-fantasy",
      "prizeUsd": "Toyota Corolla Ascent Sport Hybrid (value $37,000) + AFL Store vouchers; Sherrin football",
      "prizeNote": "Verified on afl.com.au (the AFL's official site): AFLW Fantasy 2026 is free to play. The first prize is a Toyota Corolla Ascent Sport Hybrid Hatch valued at $37,000 plus AFL Store vouchers ($250/$250/$100) and an official Sherrin (value $260); top-100 finishers receive an AFL Fantasy hat. Non-cash (a car and merchandise). Australia-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (vehicle, vouchers, merchandise)"
      ],
      "eligibility": "Free AFL iD account; Australia-focused.",
      "restricted": "Australia-focused prize eligibility. Prize is a car, not cash.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free AFL iD account.",
          "Winner contacted by the promotion partner (Engage Hub) to confirm details."
        ]
      },
      "redFlags": [
        "Australia-focused. The prize is a car and merchandise, not cash."
      ],
      "sources": [
        {
          "title": "AFL — AFLW Fantasy 2026 prizes (official)",
          "url": "https://www.afl.com.au/aflw/news/1550791/win-a-37k-toyota-huge-prizes-on-offer-in-aflw-fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tff-fantezi-lig",
      "name": "TFF Fantezi Lig (Turkish Süper Lig)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Turkish Football Federation's official free Süper Lig fantasy game, with a car for the season champion.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://fantazilig.tff.org/",
      "rulesUrl": "https://en.shiftdelete.net/tff-launches-official-fantasy-league-mobile-game-for-super-lig/",
      "prizeUsd": "An automobile for the overall season champion + weekly/monthly rewards",
      "prizeNote": "The Turkish Football Federation (TFF) and the Clubs Union Foundation launched the official Süper Lig fantasy game (TFF Fantezi Lig), available on Android/iOS, using Opta data. The season champion wins an automobile, with weekly and monthly rewards. Free to play, though optional manager cards are sold via in-app purchases. Sourced via secondary news (shiftdelete.net) — the car prize is reported but not confirmed on the TFF's own prize page at review time, so re-confirm before relying on it.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (automobile, rewards)"
      ],
      "eligibility": "Free account; Turkey-focused.",
      "restricted": "Turkey-focused. Optional in-app purchases exist. Car-prize figure cited via secondary source.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Car-prize figure is secondary-sourced — re-confirm on the official app. Optional IAP for manager cards."
      ],
      "sources": [
        {
          "title": "TFF launches official Fantasy League (secondary news)",
          "url": "https://en.shiftdelete.net/tff-launches-official-fantasy-league-mobile-game-for-super-lig/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mxa-fantasy",
      "name": "MXA Fantasy League (Supercross/Motocross)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Motocross Action's free fantasy league, with a $15,000 Stark Varg and sponsor gear as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://motocrossactionmag.com/fantasy-mx-sx/",
      "rulesUrl": "https://motocrossactionmag.com/fantasy-mx-sx/",
      "prizeUsd": "$15,000 Stark Varg 1.2 (season); weekly gear/sprees (FXR $500, helmets, FMF exhausts)",
      "prizeNote": "Verified on motocrossactionmag.com (MXA's own site): the MXA Fantasy League is a free fantasy app for Supercross/Motocross. One consistent player wins a $15,000 Stark Varg 1.2 electric dirt bike; weekly round winners win sponsor gear (FXR $500 shopping sprees, AIROH helmets, FMF exhaust systems, etc.). Non-cash (motorcycle and gear).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (motorcycle, gear, shopping sprees)"
      ],
      "eligibility": "Free account.",
      "restricted": "Non-cash prizes (motorcycle and gear).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (motorcycle and gear)."
      ],
      "sources": [
        {
          "title": "MXA Fantasy League (official)",
          "url": "https://motocrossactionmag.com/fantasy-mx-sx/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "kinolime",
      "name": "Kinolime Script-to-Screen Competition",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "A free-to-enter feature-screenplay competition with a $25,000 cash award plus up to $15M in production financing.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.kinolime.com/competition",
      "rulesUrl": "https://www.kinolime.com/competition",
      "prizeUsd": "$25,000 cash production award + up to $15M production financing",
      "prizeNote": "Verified on kinolime.com: the 2026 Script-to-Screen Feature Competition is free to enter and open to writers worldwide. The selected screenplay receives a $25,000 production award, and Kinolime finances and produces the film (up to $15M). The prize is a production award tied to the film being made, not an unrestricted cash payout.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash production award",
        "Production financing"
      ],
      "eligibility": "Open worldwide, free entry.",
      "restricted": "The $25,000 is a production award tied to the film being produced.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free entry.",
          "Winner verified before the production award and financing."
        ]
      },
      "redFlags": [
        "The prize is a production award, not unrestricted cash — the film must actually be produced."
      ],
      "sources": [
        {
          "title": "Kinolime — Script-to-Screen Competition (official)",
          "url": "https://www.kinolime.com/competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "bridgewater-forecast",
      "name": "Bridgewater Forecasting the Future Challenge",
      "type": "forecasting",
      "status": "ended",
      "freePath": "full",
      "short": "Bridgewater and Global Citizen's free global forecasting challenge — $25,000 to each of five winners.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.bridgewater.com/forecasting-the-future-a-modern-economics-challenge",
      "rulesUrl": "https://observatory.bwater.com/events/2026-forecasting-the-future",
      "prizeUsd": "$25,000 each to five winners + a career/internship opportunity at Bridgewater",
      "prizeNote": "Verified on Bridgewater's official pages: Forecasting the Future (with Global Citizen) invites anyone 18+ to submit at least 10 binary forecasts with probabilities and resolution criteria. The top five each receive $25,000 plus a Bridgewater employment/internship opportunity (pending interview). The 2026 edition's submission window closed 1 Aug 2026; returns periodically.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash ($25,000 award)"
      ],
      "eligibility": "Anyone 18+, worldwide; individual (no teams).",
      "restricted": "The 2026 edition has closed; returns periodically.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free submission.",
          "Winners verified before the $25,000 award."
        ]
      },
      "redFlags": [
        "The 2026 edition closed 1 Aug 2026. Judged essay-style forecast challenge, not a live market."
      ],
      "sources": [
        {
          "title": "Bridgewater — Forecasting the Future (official)",
          "url": "https://www.bridgewater.com/forecasting-the-future-a-modern-economics-challenge",
          "tier": "official"
        },
        {
          "title": "Bridgewater Observatory — 2026 event (official)",
          "url": "https://observatory.bwater.com/events/2026-forecasting-the-future",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "streak-contest",
      "name": "Streak Contest (MobLab)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free daily sports pick'em app — build a winning streak for cash prizes up to $100,000.",
      "platforms": [
        "ios",
        "android"
      ],
      "signupUrl": "https://apps.apple.com/us/app/streak-contest/id1623816920",
      "rulesUrl": "https://apps.apple.com/us/app/streak-contest/id1623816920",
      "prizeUsd": "$5 (5 picks), $100 (10), $1,000 (15), $20,000 (20), $100,000 (25)",
      "prizeNote": "Verified on the App Store listing (developer MobLab Limited): Streak Contest is a free daily sports pick'em game — pick winners to build a streak; no purchase or deposit required. The prize ladder is $5 for 5 correct picks, $100 for 10, $1,000 for 15, $20,000 for 20, and $100,000 for 25. Available nationwide (all 50 US states). Prizes paid in cash.",
      "minCashout": "Cash paid per the prize ladder",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "US, free account; see the app terms.",
      "restricted": "Streak-based — prizes require long winning streaks. US-only.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Prizes require long streaks (25 correct picks for $100,000). Small developer — verify payout track record."
      ],
      "sources": [
        {
          "title": "Streak Contest — App Store (official)",
          "url": "https://apps.apple.com/us/app/streak-contest/id1623816920",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "premiership-rugby-fantasy",
      "name": "Fantasy Premiership Rugby",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "short": "The official Gallagher Premiership Rugby fantasy game, with a Final VIP experience and tickets as prizes.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://fantasy.premiershiprugby.com/",
      "rulesUrl": "https://www.leicestertigers.com/news/fantasy-premiership-2223-launch",
      "prizeUsd": "Overall winner: VIP Final package; runner-up: signed shirt + 4 tickets; per-round: 2 tickets",
      "prizeNote": "The official fantasy game of Gallagher Premiership Rugby (also hosted on Superbru). Prizes: the overall winner a VIP Experience Package for the Premiership Final, the runner-up a signed shirt + four Final tickets, and each round winner two tickets. Non-cash. Note: the verified prize pages date from the 2023/24 season — re-confirm the current season's game before relying on the figure.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (VIP package, tickets, signed shirt)"
      ],
      "eligibility": "Free account; UK-focused prize eligibility (18+).",
      "restricted": "Non-cash. Verified pages are 2023/24 — re-confirm current season.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes. Verified pages date from 2023/24 — re-confirm."
      ],
      "sources": [
        {
          "title": "Leicester Tigers — Fantasy Premiership Rugby launch (official club)",
          "url": "https://www.leicestertigers.com/news/fantasy-premiership-2223-launch",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "aleague-fantasy",
      "name": "A-Leagues Fantasy",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "The A-Leagues' official fantasy and tipping games, with a $4,000 cash major prize.",
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "signupUrl": "https://aleagues.com.au/fantasy",
      "rulesUrl": "https://aleagues.com.au/news/official-a-leagues-fantasy-the-handbook/",
      "prizeUsd": "$4,000 major prize; $600 2nd; $400 3rd; weekly double-pass tickets",
      "prizeNote": "The official A-Leagues Fantasy (APL) ran for the A-League Men and Women with a $4,000 end-of-season major prize, $600 second and $400 third, plus weekly double-pass tickets. Honesty note: community reports (r/Aleague, Sept 2025) indicate the official A-League fantasy game did not return for 2025/26. Registered free but prize-eligible for Australia/New Zealand residents only. Keep as 'ended' pending confirmation of a relaunch.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Prize fulfillment (tickets)"
      ],
      "eligibility": "Free registration; prizes for Australia/New Zealand residents only.",
      "restricted": "Reported not running for 2025/26 — treat as ended until confirmed.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Reported discontinued for 2025/26 (community reports). Australia/NZ prize eligibility."
      ],
      "sources": [
        {
          "title": "A-Leagues — Fantasy handbook (official)",
          "url": "https://aleagues.com.au/news/official-a-leagues-fantasy-the-handbook/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "agentmma",
      "name": "AgentMMA UFC Fantasy Contest",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free UFC fantasy pick'em contest — predict winners, methods and rounds for prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://agentmma.com/contests/next",
      "rulesUrl": "https://agentmma.com/contests/next",
      "prizeUsd": "Prizes for top finishers (amount not specified on the public page)",
      "prizeNote": "AgentMMA runs free UFC fantasy contests — pick the winner, method and round for every fight and compete on a live leaderboard for prizes. Free to enter, no deposit. The specific prize amounts are not itemised on the public contest page, so treat 'prizes' as unverified and confirm before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free account.",
      "restricted": "Prize amounts not publicly itemised — confirm before entering.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner contacted before prize fulfillment."
        ]
      },
      "redFlags": [
        "Small third-party site; prize amounts not itemised publicly."
      ],
      "sources": [
        {
          "title": "AgentMMA — UFC fantasy contest (official)",
          "url": "https://agentmma.com/contests/next",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "formula-e-predictor",
      "name": "Formula E Predictor",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "short": "Formula E's free race prediction game, with a signed shirt and cap for the top scorer.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.fiaformulae.com/en/news/9291",
      "rulesUrl": "https://www.fiaformulae.com/en/news/9291",
      "prizeUsd": "Signed shirt + cap (top scorer); merchandise discount codes (non-cash)",
      "prizeNote": "Verified on fiaformulae.com: the Formula E Predictor is 'completely free to play' — predict pole, fastest lap, ATTACK MODE use, race winner and last place. The top-scoring bracket enters a draw for a signed shirt and cap from the race winner; others get a merchandise discount code. Non-cash. Note: the verified page dates from 2022 — re-confirm the current season's game before relying on it.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (signed shirt, cap)"
      ],
      "eligibility": "Free account.",
      "restricted": "Non-cash. Verified page dates from 2022 — re-confirm.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes. Verified page is from 2022 — re-confirm current season."
      ],
      "sources": [
        {
          "title": "Formula E — Predictor (official)",
          "url": "https://www.fiaformulae.com/en/news/9291",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "telegraph-fantasy-racing",
      "name": "Telegraph Fantasy Racing",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Telegraph's free fantasy horse-racing game for Cheltenham and Royal Ascot, with a £2,000–£2,500 cash first prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasyracing.telegraph.co.uk/",
      "rulesUrl": "https://fantasyracing.telegraph.co.uk/cheltenham/how-to-play",
      "prizeUsd": "£2,500 (Cheltenham) / £2,000 (Royal Ascot) first prize; 2nd–10th cash prizes",
      "prizeNote": "Verified on telegraph.co.uk and fantasyracing.telegraph.co.uk: Telegraph Fantasy Racing is 'FREE TO PLAY.' The Cheltenham game's first prize is £2,500 and the Royal Ascot game's first prize is £2,000, with 2nd–10th cash prizes (£250 down to £50) and league prizes. Pick a stable of jockeys/trainers and one horse per race. Seasonal (Cheltenham March, Royal Ascot June); UK-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Free account; UK-focused.",
      "restricted": "Seasonal (Cheltenham/Royal Ascot). UK-focused prize eligibility.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Telegraph account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Seasonal (March/June). UK-focused."
      ],
      "sources": [
        {
          "title": "Telegraph Fantasy Racing — Cheltenham how to play (official)",
          "url": "https://fantasyracing.telegraph.co.uk/cheltenham/how-to-play",
          "tier": "official"
        },
        {
          "title": "Telegraph — Fantasy Royal Ascot how to play (official)",
          "url": "https://www.telegraph.co.uk/fantasy-sports/fantasy-racing/fantasy-royal-ascot--how-to-play/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "stable-stars",
      "name": "Stable Stars (Cheltenham Festival)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free daily horse-racing tipping game with £500/£300/£200 vouchers each Festival day.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://cheltenhamfestival.fans/stable-stars/",
      "rulesUrl": "https://cheltenhamfestival.fans/stable-stars/",
      "prizeUsd": "£500 voucher (1st), £300 (2nd), £200 (3rd) each day",
      "prizeNote": "Verified on cheltenhamfestival.fans: Stable Stars is a 'free daily horse racing tipping game' — pick one horse from six races each day under a virtual £100m budget, select a 'Stable Star' for double points. For the 2026 Festival, £1,000 in prize money is offered each day: £500/£300/£200 vouchers for 1st/2nd/3rd. Non-cash (vouchers). UK/Ireland residents 18+.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (vouchers)"
      ],
      "eligibility": "UK/Ireland residents, 18+, free entry.",
      "restricted": "Non-cash (vouchers). Seasonal (Cheltenham Festival).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash (vouchers). Seasonal."
      ],
      "sources": [
        {
          "title": "Stable Stars (official)",
          "url": "https://cheltenhamfestival.fans/stable-stars/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "stablestakes",
      "name": "StableStakes (Fantasy Horse Racing)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A fantasy horse-racing platform with free-to-play contests, including the $5,000 Crown Showdown.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://stablestakes.com/",
      "rulesUrl": "https://stablestakes.com/",
      "prizeUsd": "$5,000 Crown Showdown prize pool; other contests $2,500+",
      "prizeNote": "Verified on stablestakes.com and America's Best Racing: StableStakes is a fantasy horse-racing platform (salary-cap and pick'em formats) with free-to-play contests. The Crown Showdown (Belmont Stakes Racing Festival, June 3–7) had a $5,000 prize pool; a prior launch contest funded a $10,000 pool and a Roast Your Competition contest had $2,500. 'NO PURCHASE NECESSARY… SKILL-BASED CONTEST.' US-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (skill-based contest)"
      ],
      "eligibility": "Free account; US-focused.",
      "restricted": "US-focused. Prize pools vary per contest.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "US-focused. Prize pools vary per contest."
      ],
      "sources": [
        {
          "title": "StableStakes (official)",
          "url": "https://stablestakes.com/",
          "tier": "official"
        },
        {
          "title": "America's Best Racing — StableStakes launch (official partner)",
          "url": "https://www.americasbestracing.net/lifestyle/2026-stablestakes-aims-bring-dfs-energy-horse-racing-without-the-learning-curve",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ohha-harness",
      "name": "OHHA Harness Racing Fantasy League",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The Ohio Harness Horsemen's Association's free fantasy stable league with $5,000 in cash prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.ohha.com/fantasy-stable",
      "rulesUrl": "https://ustrottingnews.com/ohhas-fantasy-league-returns-with-more-ways-to-win/",
      "prizeUsd": "$5,000 total: $1,500 1st, $800 2nd, $400 3rd, $100 4th–10th + $100 last",
      "prizeNote": "Verified on ustrottingnews.com and standardbredcanada.ca: the OHHA Harness Racing Fantasy League is free to enter. Select a stable of six horses; stables ranked by earnings. $5,000 in cash prizes ($1,500 grand prize, $800 second, $400 third, $100 4th–10th and last place), plus $500 mid-season payouts. US (Ohio) focused; entries due mid-June, runs July–Oct.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Free entry; US (Ohio) focused.",
      "restricted": "US/Ohio focused. Seasonal (July–Oct).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry form.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "US/Ohio focused. Seasonal."
      ],
      "sources": [
        {
          "title": "U.S. Trotting News — OHHA Fantasy League 2026 (official news)",
          "url": "https://ustrottingnews.com/ohhas-fantasy-league-returns-with-more-ways-to-win/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "running-aces-harness",
      "name": "Running Aces Fantasy Horse Racing League",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Running Aces' free harness-racing fantasy league with a $1,000 prize pool.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://runaces.com/racing/live-racing/fantasy-horse-racing-league/",
      "rulesUrl": "https://runaces.com/racing/live-racing/fantasy-horse-racing-league/",
      "prizeUsd": "$1,000 pool: $500 1st, $275 2nd, $125 3rd, $100 4th",
      "prizeNote": "Verified on runaces.com: Running Aces (Minnesota racetrack) runs a free harness-racing fantasy league for 60 players. Select four horses as your fantasy stable; points awarded for top-3 finishes (9/5/3). The $1,000 prize pool is sponsored by Running Aces and MHRI ($500/$275/$125/$100). Free to enter; 18+; one entry per person.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "18+, free entry (first 60 sign-ups); Minnesota focused.",
      "restricted": "Limited to 60 participants. Seasonal.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Email sign-up.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "Limited to 60 participants. Seasonal (June–Aug)."
      ],
      "sources": [
        {
          "title": "Running Aces — Fantasy Horse Racing League (official)",
          "url": "https://runaces.com/racing/live-racing/fantasy-horse-racing-league/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ultimate-fantasy-tennis",
      "name": "Ultimate Fantasy Tennis",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free season-long fantasy tennis game, with Topps autographed cards as Open Play prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://ultimatefantasytennis.com/",
      "rulesUrl": "https://ultimatefantasytennis.com/blog/what-is-fantasy-tennis",
      "prizeUsd": "Topps autographed tennis cards for top Open Play finishers (non-cash)",
      "prizeNote": "Verified on ultimatefantasytennis.com: Ultimate Fantasy Tennis is 'completely free to play' (no entry fees, no subscriptions). Draft 3–7 ATP players on a $1M budget; league play (auction) and Open Play (solo/pools). The first Open Play competition (2026 European Clay Swing) awards Topps autographed tennis cards to the top 10 — 'free to enter, no purchase necessary.' Non-cash (trading cards).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (Topps tennis cards)"
      ],
      "eligibility": "Free account.",
      "restricted": "Non-cash prizes (trading cards).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (trading cards)."
      ],
      "sources": [
        {
          "title": "Ultimate Fantasy Tennis — how to play (official)",
          "url": "https://ultimatefantasytennis.com/blog/what-is-fantasy-tennis",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ncga-majors-challenge",
      "name": "NCGA Majors Challenge",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "The NCGA's free fantasy golf game for the five majors, with Amazon gift-card prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://ncga.org/majorschallenge",
      "rulesUrl": "https://ncga.org/majorschallenge",
      "prizeUsd": "Amazon gift cards: $300 1st, $200 2nd, $150 3rd … $10 16th–20th; season prize a free foursome",
      "prizeNote": "Verified on ncga.org: the NCGA Majors Challenge is free for NCGA members — select a new team for each of the five majors (Masters, PGA Championship, U.S. Women's Open, U.S. Open, Open Championship). Individual tournament prizes are Amazon gift cards ($300/$200/$150/$100/$75/$50, then $25–$10 down to 20th); the season-long winner gets a free foursome. NCGA membership required.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Amazon gift cards",
        "Prize fulfillment (free foursome)"
      ],
      "eligibility": "Active NCGA members only.",
      "restricted": "Requires NCGA membership. Non-cash (gift cards and a foursome).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "NCGA membership + free contest registration.",
          "Winner verified (GHIN email match) before prize fulfillment."
        ]
      },
      "redFlags": [
        "NCGA members only. Non-cash prizes."
      ],
      "sources": [
        {
          "title": "NCGA Majors Challenge (official)",
          "url": "https://ncga.org/majorschallenge",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "majors-challenge",
      "name": "Majors Challenge Perfect Team Contest",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free fantasy golf contest with a $250,000 prize for a 'Perfect 12' Masters roster.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://majorschallenge.com/",
      "rulesUrl": "https://thegolfwire.com/majors-challenge-perfect-team-contest-masters/",
      "prizeUsd": "$250,000 grand prize for a perfect 12-player team; Shot Scope gift cards for top five",
      "prizeNote": "Verified via The Golf Wire: Majors Challenge (a digital golf-pool platform) runs a free 'Perfect Team' contest for The Masters — assemble a 12-player roster; a perfect team (lowest possible combined score) wins $250,000, and the top five finishers win Shot Scope gift cards. Free entry. Note: the $250,000 requires a statistically near-impossible 'Perfect 12' — treat it as a headline, not a realistic win.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash ($250,000 perfect team)",
        "Gift cards"
      ],
      "eligibility": "Free entry, US-focused.",
      "restricted": "The $250,000 requires a 'Perfect 12' roster — near-impossible odds. Seasonal (The Masters).",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winner verified before payout."
        ]
      },
      "redFlags": [
        "The $250,000 requires a perfect team — statistically near-impossible. US-focused."
      ],
      "sources": [
        {
          "title": "The Golf Wire — Majors Challenge Perfect Team contest (official press)",
          "url": "https://thegolfwire.com/majors-challenge-perfect-team-contest-masters/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "teepster",
      "name": "Teepster Fantasy Golf",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free one-and-done fantasy golf platform (PGA/DP World/LIV), with prize contests like the Motocaddy Pick 6.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.teepster.com/",
      "rulesUrl": "https://www.teepster.com/the-open-championship/",
      "prizeUsd": "Motocaddy M1 DHC electric buggy (RRP A$1,499) for the Open Pick 6 winner",
      "prizeNote": "Verified on teepster.com: Teepster is a free-to-play fantasy golf platform ('no entry fees, no gambling') covering PGA Tour, DP World Tour and LIV Golf with five formats (One & Done, Tiers, Survivor, The Ton, Super League). Its free Motocaddy Pick 6 contest for The Open awards a Motocaddy M1 DHC electric buggy (RRP A$1,499) — Australia-resident entrants only. The platform itself is free with bragging-rights leagues; prize contests are periodic.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment (Motocaddy buggy)"
      ],
      "eligibility": "Free account; the Motocaddy contest is Australia-residents only.",
      "restricted": "Non-cash prize (buggy); Australia-only for the Motocaddy contest.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash (buggy); Australia-only prize. Core platform is bragging-rights only."
      ],
      "sources": [
        {
          "title": "Teepster — The Open Pick 6 (official)",
          "url": "https://www.teepster.com/the-open-championship/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fantasy-golf-challenge",
      "name": "Fantasy Golf Challenge (GolfBalls.com)",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free weekly fantasy golf game with GolfBalls.com gift-certificate prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://golfgamecentral.com/fantasy-challenge.php",
      "rulesUrl": "https://golfgamecentral.com/fantasy-challenge.php",
      "prizeUsd": "Weekly $20, segment $50/$25, overall $100/$75/$50 (GolfBalls.com gift certificates)",
      "prizeNote": "Verified on golfgamecentral.com: the Fantasy Golf Challenge (sponsored by GolfBalls.com) is a free one-and-done game — pick one golfer per week, earn their prize money. Weekly winners get a $20 GolfBalls.com gift certificate; segment winners $50/$25; overall winners $100/$75/$50. Non-cash (gift certificates).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Gift certificates (GolfBalls.com)"
      ],
      "eligibility": "Free account.",
      "restricted": "Non-cash prizes (gift certificates).",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (gift certificates)."
      ],
      "sources": [
        {
          "title": "Fantasy Golf Challenge (official)",
          "url": "https://golfgamecentral.com/fantasy-challenge.php",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "checkmate-gaming",
      "name": "Checkmate Gaming (CMG) Free Tournaments",
      "type": "skill",
      "status": "live",
      "freePath": "full",
      "short": "Free-entry Call of Duty / Valorant esports tournaments with cash prizes posted daily.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.checkmategaming.com/free-tournaments",
      "rulesUrl": "https://www.checkmategaming.com/free-tournaments",
      "prizeUsd": "$10–$180 cash per tournament (free entry)",
      "prizeNote": "Verified on checkmategaming.com: CMG runs free-entry tournaments ('Totally free to enter with real cash prizes. New tournaments posted daily.') across Call of Duty, Warzone, Fortnite and Valorant, in 1v1/2v2/3v3/4v4 formats. Prize amounts vary per tournament (commonly $10–$180). The platform also runs paid-entry wager matches and ladders, but the free tournaments are genuinely free to enter. Console (PS/Xbox) and cross-platform.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (platform payout)"
      ],
      "eligibility": "Free account; 18+; region varies by tournament.",
      "restricted": "Console/region restrictions vary per tournament. Paid wager matches exist alongside free tournaments.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free CMG account.",
          "Winner verification before payout."
        ]
      },
      "redFlags": [
        "Skill-gaming platform with paid wagers too — stick to the free-entry tournaments."
      ],
      "sources": [
        {
          "title": "CMG — Free Tournaments with Cash Prizes (official)",
          "url": "https://www.checkmategaming.com/free-tournaments",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "buzz-fantasy-golf",
      "name": "Buzz Fantasy Golf",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "A free PGA Tour fantasy golf game with Amazon gift-card prizes for weekly, segment and season winners.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://buzzfantasygolf.com/services/freefantasygolfgame",
      "rulesUrl": "https://buzzfantasygolf.com/services/FreeGameRules",
      "prizeUsd": "$10 Amazon GC weekly; $25/$10 segment; $50/$25/$10 season (gift cards)",
      "prizeNote": "Verified on buzzfantasygolf.com's official rules: the Free Fantasy Golf Game is free to enter. Pick 5 golfers + 1 bonus (double points) each week, scored on earnings. Prizes: $10 Amazon gift card per weekly winner, $25/$10 + a T-shirt per segment, and $50/$25/$10 Amazon gift cards for the season's top three. Non-cash (Amazon gift cards). US residents 18+.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Amazon gift cards"
      ],
      "eligibility": "US residents, 18+, free account.",
      "restricted": "Non-cash (gift cards). US-only.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner notified and verified before prize fulfillment."
        ]
      },
      "redFlags": [
        "Non-cash prizes (Amazon gift cards)."
      ],
      "sources": [
        {
          "title": "Buzz Fantasy Golf — Free Fantasy Golf Game rules (official)",
          "url": "https://buzzfantasygolf.com/services/FreeGameRules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fundedfast-open",
      "name": "FundedFast Open",
      "type": "market",
      "status": "live",
      "freePath": "full",
      "short": "A genuinely free bi-weekly prop-firm trading competition with small cash prizes, no payment details required.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fundedfast.com/trading-competition",
      "rulesUrl": "https://fundedfast.com/trading-competition",
      "prizeUsd": "1st $25, 2nd $20, 3rd $15 (cash) per two-week round",
      "prizeNote": "Verified on fundedfast.com: the FundedFast Open is a free bi-weekly trading competition — a $100K virtual account, 1:100 leverage, 10% daily/15% total drawdown, highest equity wins. Prizes are $25/$20/$15 cash (paid via crypto, PayPal or bank transfer). 'No entry fee, no payment details, no card on file.' Winners complete KYC (photo ID + short video call) before payout. Small prizes, but genuinely free with no upsell conversion.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash (crypto / PayPal / bank transfer)"
      ],
      "eligibility": "18+, free account; restricted jurisdictions excluded.",
      "restricted": "Small prize amounts. KYC required to claim. Some jurisdictions excluded.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Free account.",
          "Winners complete KYC (photo ID + video call) before payout within 24 hours."
        ]
      },
      "redFlags": [
        "Small cash prizes ($25 top). Prop-firm funnel (every entrant receives a discount code for a paid challenge)."
      ],
      "sources": [
        {
          "title": "FundedFast — Trading Competition (official)",
          "url": "https://fundedfast.com/trading-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "hipa",
      "name": "Hamdan International Photography Award (HIPA)",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "The world's richest photography award — a $200,000 grand prize and $1,000,000 total pool, free to enter.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.hipa.ae/",
      "rulesUrl": "https://www.hipa.ae/",
      "prizeUsd": "$200,000 grand prize; category prizes $20,000–$50,000; total pool $1,000,000",
      "prizeNote": "HIPA (Hamdan International Photography Award), founded 2011 in Dubai, is the most lucrative photography award — a $1,000,000 total prize pool with a $200,000 grand prize and category prizes of $20,000–$50,000. Free to enter, open worldwide 18+. Annual (the 2026 edition's deadline was 31 May; the next season opens each year). Judged contest, not a sweepstakes.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Open worldwide, 18+, free entry.",
      "restricted": "Annual (seasonal deadlines). AI category has specific rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Register and submit via the HIPA portal (free).",
          "Winners verified before the cash award."
        ]
      },
      "redFlags": [
        "Highly competitive — tens of thousands of entrants. Annual deadline."
      ],
      "sources": [
        {
          "title": "HIPA — official site",
          "url": "https://www.hipa.ae/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "sony-world-photo",
      "name": "Sony World Photography Awards",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "A free-to-enter global photography competition with a $25,000 grand prize and $5,000 category prizes.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.worldphoto.org/sony-world-photography-awards",
      "rulesUrl": "https://www.worldphoto.org/sony-world-photography-awards",
      "prizeUsd": "$25,000 (Professional Photographer of the Year); $5,000 (Open); Sony equipment",
      "prizeNote": "Verified on worldphoto.org (the World Photography Organisation's official site): the Sony World Photography Awards are 'completely free-to-enter and open to all.' The Professional competition's Photographer of the Year wins $25,000 + Sony gear + a solo show; the Open competition winner $5,000 + Sony gear. Four competitions (Professional, Open, Student, Youth), all free. Annual; the 2027 edition closes Jan 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Sony equipment",
        "Prize fulfillment (exhibition, flights/accommodation)"
      ],
      "eligibility": "Open worldwide; no age restriction (under-16s need consent).",
      "restricted": "Free for up to 3 images (Open/Youth); extra images via paid bundle.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winners verified before the cash prize and exhibition."
        ]
      },
      "redFlags": [
        "Highly competitive. Annual deadlines."
      ],
      "sources": [
        {
          "title": "World Photography Organisation — Sony World Photography Awards (official)",
          "url": "https://www.worldphoto.org/sony-world-photography-awards",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "world-press-photo",
      "name": "World Press Photo Contest",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "The leading free photojournalism contest — €10,000 for World Press Photo of the Year, €1,000 per regional winner.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.worldpressphoto.org/",
      "rulesUrl": "https://www.worldpressphoto.org/",
      "prizeUsd": "€10,000 (Photo of the Year); €1,000 per winner; Fujifilm camera for the top winner",
      "prizeNote": "Verified via worldpressphoto.org and multiple contest trackers: the World Press Photo Contest is free to enter and open to professional photojournalists/documentary photographers. Each regional winner receives €1,000, with an additional €10,000 and Fujifilm gear for the World Press Photo of the Year. Judged contest. Annual (the 2026 edition closed 17 Jan; the 2027 edition opens Dec 2026).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Fujifilm equipment",
        "Prize fulfillment (exhibition, event)"
      ],
      "eligibility": "Professional photojournalists/documentary photographers (proof of professional status required).",
      "restricted": "Professionals only — proof of publication/press card required.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry via Picter.",
          "Winners verified before the cash award."
        ]
      },
      "redFlags": [
        "Professionals only. Annual deadline."
      ],
      "sources": [
        {
          "title": "World Press Photo — official site",
          "url": "https://www.worldpressphoto.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "weather-potw",
      "name": "Weather Photographer of the Year",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "The Royal Meteorological Society's free photo contest with a £5,000 cash prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.rmets.org/weather-photographer-of-the-year",
      "rulesUrl": "https://www.rmets.org/weather-photographer-of-the-year",
      "prizeUsd": "£5,000 (winner); £2,500 (mobile); £750 (young winner)",
      "prizeNote": "Weather Photographer of the Year is run by the Royal Meteorological Society and is free to enter. Prizes: £5,000 cash for the overall winner, £2,500 for the mobile category winner, £750 for the young winner. Judged contest, open worldwide. Annual (the 2026 edition closed 19 June; returns for 2027).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Open worldwide, free entry.",
      "restricted": "Annual deadline.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winner verified before the cash prize."
        ]
      },
      "redFlags": [
        "Annual deadline."
      ],
      "sources": [
        {
          "title": "Royal Meteorological Society — Weather Photographer of the Year (official)",
          "url": "https://www.rmets.org/weather-photographer-of-the-year",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "epoty",
      "name": "Environmental Photographer of the Year (EPOTY)",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "CIWEM's free environmental photography contest with a £5,000 cash prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://epoty.org/",
      "rulesUrl": "https://epoty.org/",
      "prizeUsd": "£5,000 (EPOTY); £1,000 per category; Nikon gear for Young EPOTY",
      "prizeNote": "The Environmental Photographer of the Year (run by CIWEM) is free to enter. Prizes: £5,000 for the overall EPOTY winner, £1,000 per category, and a Nikon Z-series camera + lenses for the Young EPOTY winner. Judged contest, open worldwide. Annual (the 2026 edition has closed; the 2027 edition opens later in the year).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash",
        "Nikon equipment"
      ],
      "eligibility": "Open worldwide, free entry.",
      "restricted": "Annual deadline.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winner verified before the cash prize."
        ]
      },
      "redFlags": [
        "Annual deadline."
      ],
      "sources": [
        {
          "title": "EPOTY — official site",
          "url": "https://epoty.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "spie-light",
      "name": "SPIE International Day of Light Photo Contest",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "SPIE's free photo contest on the theme of light, with a $2,500 first prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://spie.org/",
      "rulesUrl": "https://spie.org/",
      "prizeUsd": "$2,500 (1st), $1,000 (2nd), $500 (3rd), $750 (technology/science)",
      "prizeNote": "The SPIE International Day of Light Photo Contest (SPIE, the international optics/photonics society) is free to enter and open to adults 18+. The 2026 contest theme is the impact of light on life, nature, communities and technology; prizes are $2,500/$1,000/$500 plus a $750 technology/science award. Judged contest. Deadline 16 September 2026.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Adults 18+, free entry.",
      "restricted": "Theme-specific (light). Annual deadline.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winner verified before the cash prize."
        ]
      },
      "redFlags": [
        "Theme-specific (light)."
      ],
      "sources": [
        {
          "title": "SPIE — International Day of Light Photo Contest (official)",
          "url": "https://spie.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "istanbul-photo-awards",
      "name": "Istanbul Photo Awards",
      "type": "creative",
      "status": "live",
      "freePath": "full",
      "short": "Anadolu Agency's free international photojournalism contest with a $6,000 top category prize.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://istanbulphotoawards.com/",
      "rulesUrl": "https://istanbulphotoawards.com/",
      "prizeUsd": "$6,000 (single news); $3,000 other categories; $1,500 runners-up; $1,000 third",
      "prizeNote": "The Istanbul Photo Awards (run by Anadolu Agency) is a free-to-enter international photojournalism contest. Prizes: $6,000 for the Single News category winner, $3,000 for other category winners, $1,500 runners-up and $1,000 third place. Judged contest. Annual (the 2026 edition deadline was January; returns for 2027).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Cash"
      ],
      "eligibility": "Open to professional photographers, free entry.",
      "restricted": "Photojournalism focus. Annual deadline.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free entry.",
          "Winner verified before the cash prize."
        ]
      },
      "redFlags": [
        "Photojournalism focus. Annual deadline."
      ],
      "sources": [
        {
          "title": "Istanbul Photo Awards — official site",
          "url": "https://istanbulphotoawards.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    }
  ],
  "removedThisPass": [
    {
      "id": "pch",
      "name": "Publishers Clearing House",
      "why": "sweepstakes category removed"
    },
    {
      "id": "lucktastic",
      "name": "Lucktastic",
      "why": "sweepstakes category removed"
    },
    {
      "id": "high5",
      "name": "High 5 Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "pulsz",
      "name": "Pulsz",
      "why": "sweepstakes category removed"
    },
    {
      "id": "chumba",
      "name": "Chumba Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "luckyland",
      "name": "LuckyLand Slots",
      "why": "sweepstakes category removed"
    },
    {
      "id": "crowncoins",
      "name": "Crown Coins Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "stakeus",
      "name": "Stake.us",
      "why": "sweepstakes category removed"
    },
    {
      "id": "fliff",
      "name": "Fliff",
      "why": "sweepstakes/AMOE model removed"
    },
    {
      "id": "online-sweepstakes",
      "name": "Online-Sweepstakes.com",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "reddit-sweeps",
      "name": "r/sweepstakes & r/Sweepstake",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "aarp",
      "name": "AARP Sweepstakes",
      "why": "sweepstakes category removed"
    },
    {
      "id": "hgtv",
      "name": "HGTV / Food Network Giveaways",
      "why": "sweepstakes category removed"
    },
    {
      "id": "iheart",
      "name": "iHeartRadio Contests",
      "why": "sweepstakes category removed"
    },
    {
      "id": "meredith",
      "name": "People / BHG / Meredith magazine sweeps",
      "why": "sweepstakes category removed"
    },
    {
      "id": "mcluck",
      "name": "McLuck",
      "why": "sweepstakes category removed"
    },
    {
      "id": "wowvegas",
      "name": "WOW Vegas",
      "why": "sweepstakes category removed"
    },
    {
      "id": "realprize",
      "name": "RealPrize",
      "why": "sweepstakes category removed"
    },
    {
      "id": "sweeps-fanatics",
      "name": "Sweepstakes Fanatics",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "contest-girl",
      "name": "Contest Girl",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "ultracontest",
      "name": "UltraContest",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "sweepsadvantage",
      "name": "Sweepstakes Advantage",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "freebieshark",
      "name": "FreebieShark",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "sweepwidget",
      "name": "SweepWidget Giveaways",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "solitaire-smash",
      "name": "Solitaire Smash",
      "why": "DEAD: App Store ID 6444781403 does not render a listing; unverifiable"
    },
    {
      "id": "bingo-billions",
      "name": "Bingo Billions",
      "why": "DEAD: App Store ID 6446250848 returns \"page cannot be found\"; sole source unreachable"
    },
    {
      "id": "luckyday",
      "name": "Lucky Day",
      "why": "sweepstakes category removed"
    },
    {
      "id": "hqtrivia",
      "name": "HQ Trivia",
      "why": "DEAD: Service dissolved February 2020"
    },
    {
      "id": "usatoday-survivor",
      "name": "USA TODAY Pro Football Survivor",
      "why": "DEAD: usatoday.com/sports/contests/survivor-pool redirects to the USA TODAY homepage"
    },
    {
      "id": "football-nation",
      "name": "Football Nation USA Weekly Pick'Em",
      "why": "DEAD: footballnationusa.com/pickems contains no pick’em and no prize"
    },
    {
      "id": "draftkings",
      "name": "DraftKings Fantasy",
      "why": "Casino product — iOS listing is \"DraftKings Sportsbook & Casino\""
    },
    {
      "id": "fanduel",
      "name": "FanDuel Fantasy",
      "why": "Casino product — iOS listing is \"FanDuel Sportsbook & Casino\""
    },
    {
      "id": "backspin",
      "name": "Backspin Games",
      "why": "Casino product — listed in the App Store Casino category (chart #35 Casino), 18+, slots/bingo suite"
    },
    {
      "id": "verse-gaming",
      "name": "Verse Gaming",
      "why": "Sweepstakes model — operator FAQ states \"VerseCash is a promotional sweepstakes currency\" and contests are sweepstakes-style ($50 min redemption after 1x playthrough)"
    },
    {
      "id": "lockmypicks",
      "name": "LockMyPicks",
      "why": "No cash path — site states \"No fees · No paywalls\" and prizes are coins/cosmetics only. Also sells $1–$5 cosmetic packs and currently exposes admin controls (password reset, streak recalculation) on its public homepage."
    },
    {
      "id": "prizepicks-jackpot",
      "name": "PrizePicks Free NFL Jackpot",
      "why": "Real-money DFS operator — free jackpot is an acquisition funnel"
    },
    {
      "id": "fanduel-shuffle",
      "name": "FanDuel Daily Shuffle",
      "why": "Requires a FanDuel Sportsbook account; prize is Bonus Bets, not cash"
    },
    {
      "id": "betmgm-survivor",
      "name": "BetMGM Football Survivor",
      "why": "Requires a BetMGM account (bookmaker and casino operator)"
    },
    {
      "id": "dk-f2p",
      "name": "DraftKings Free-to-Play contests",
      "why": "Requires a DraftKings account (Sportsbook & Casino)"
    },
    {
      "id": "sky-super6",
      "name": "Sky Bet Super 6",
      "why": "Requires a Sky Bet account (licensed bookmaker operating Sky Vegas / Sky Casino)"
    },
    {
      "id": "bet365-6scores",
      "name": "bet365 6 Scores Challenge",
      "why": "Requires a bet365 account (licensed bookmaker and casino operator)"
    },
    {
      "id": "betmgm-goldengoals",
      "name": "BetMGM Golden Goals",
      "why": "Requires a BetMGM UK account (LeoVegas Gaming plc — bookmaker and casino operator)"
    },
    {
      "id": "paddypower-drop",
      "name": "Paddy Power Beat The Drop",
      "why": "Requires a Paddy Power account (Flutter — bookmaker and casino operator)"
    },
    {
      "id": "dabble",
      "name": "Dabble Fantasy",
      "why": "Real-money DFS operator — $10 no-deposit credit is an acquisition funnel"
    },
    {
      "id": "parlayplay",
      "name": "ParlayPlay",
      "why": "Real-money DFS operator — $5 free entry is an acquisition funnel"
    }
  ],
  "addedThisPassG": [
    "mlb-beat-the-streak",
    "metaculus",
    "aicrowd",
    "zindi",
    "codabench",
    "grand-challenge",
    "crunchdao",
    "mlcontests",
    "espn-tourney-challenge",
    "espn-tc-eliminator"
  ],
  "addedThisPassH": [
    "nascar-fantasy-live",
    "pga-fantasy-golf",
    "nhl-bracket-challenge",
    "espn-nba-playoff",
    "nba-pickem",
    "bundesliga-fantasy",
    "laliga-fantasy",
    "swagbucks-trivia",
    "99designs",
    "freelancer-contests",
    "battlefy",
    "challengermode"
  ],
  "addedThisPassI": [
    "atp-fantasy",
    "f1-fantasy",
    "ewc-play",
    "espn-hockey-playoff",
    "espn-cfp-bracket",
    "espn-knockout-bracket",
    "mlb-hr-derby-pickem",
    "tradingview-leap",
    "wall-street-survivor",
    "start-gg"
  ],
  "addedThisPassJ": [
    "chesscom-tournaments",
    "play-pokemon",
    "designcrowd",
    "crowdspring",
    "espn-womens-tourney",
    "yahoo-bracket-mayhem",
    "bullrush",
    "signate",
    "tianchi",
    "hypermind"
  ],
  "addedThisPassK": [
    "moomoo-paper-trading",
    "superbru",
    "afl-fantasy",
    "nrl-fantasy",
    "espn-bowl-mania",
    "ligue1-fantasy",
    "lol-pickem",
    "six-nations-fantasy",
    "tattico-serie-a",
    "supercoach-bbl"
  ],
  "addedThisPassL": [
    "fundednext",
    "for-traders",
    "ninjatrader-arena",
    "yahoo-daily-draw",
    "dp-world-tour-fantasy",
    "the-open-fantasy",
    "sun-dream-team",
    "sky-sports-ff",
    "cricket-draft",
    "icc-t20-fantasy"
  ],
  "addedThisPassM": [
    "tim-hortons-hockey",
    "darts-corner-predictor",
    "spfl-fantasy",
    "euroleague-fantasy",
    "valorant-pickem",
    "eredivisie-fantasy",
    "deriv-tournaments",
    "multibank-demo",
    "xm-demo",
    "headway-demo"
  ],
  "addedThisPassN": [
    "hfm-demo",
    "litefinance-best",
    "tradingcom-paper",
    "tickmill-nfp",
    "roboforex-demo",
    "fbs-pro-demo",
    "npbfx-demo",
    "cev-volley-fantasy",
    "vnl-fantasy",
    "cev-predictor"
  ],
  "addedThisPassO": [
    "super-league-fantasy",
    "super-league-predictor",
    "motogp-fantasy",
    "the-hundred-fantasy",
    "indycar-fantasy",
    "super-rugby-fantasy",
    "fantasy-gaa",
    "film-prize",
    "pensacola-songwriting",
    "young-lions"
  ],
  "addedThisPassP": [
    "afl-tipping",
    "aflw-tipping",
    "supercoach-afl",
    "supercoach-nrl",
    "supercoach-nbl",
    "wsl-fantasy",
    "ti-compendium",
    "ibu-ecup",
    "tom-howard-poetry",
    "wergle-flomp"
  ],
  "addedThisPassQ": [
    "aflw-fantasy",
    "tff-fantezi-lig",
    "mxa-fantasy",
    "kinolime",
    "bridgewater-forecast",
    "streak-contest",
    "premiership-rugby-fantasy",
    "aleague-fantasy",
    "agentmma",
    "formula-e-predictor"
  ],
  "addedThisPassR": [
    "telegraph-fantasy-racing",
    "stable-stars",
    "stablestakes",
    "ohha-harness",
    "running-aces-harness",
    "ultimate-fantasy-tennis",
    "ncga-majors-challenge",
    "majors-challenge",
    "teepster",
    "fantasy-golf-challenge"
  ],
  "addedThisPassS": [
    "checkmate-gaming",
    "buzz-fantasy-golf",
    "fundedfast-open",
    "hipa",
    "sony-world-photo",
    "world-press-photo",
    "weather-potw",
    "epoty",
    "spie-light",
    "istanbul-photo-awards"
  ]
};
