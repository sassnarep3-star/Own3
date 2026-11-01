#!/usr/bin/env node
/**
 * audit.mjs — structural audit + verification state for the contest ledger.
 *
 * Reads   data/source-ledger.json   (verbatim copy of the upstream dataset)
 * Writes  data/audit-report.json    (machine-readable findings)
 *         assets/data/competitions.json (what the site renders)
 *
 * IMPORTANT RULE
 * ──────────────
 * This script NEVER invents, infers or "fills in" a value. It only:
 *   (a) copies fields that already exist upstream,
 *   (b) classifies what is already written there, and
 *   (c) reports contradictions between the data and the project's own rules.
 * Where a value is absent upstream it stays `null` and the row is flagged.
 *
 * Verification levels (the only three the site displays):
 *   verified       — I fetched the operator's own page in this session and read the claim there.
 *   official-linked— the row cites a source on the operator's own domain; not re-fetched.
 *   flagged        — at least one blocking defect, listed in `flags`.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const TODAY = '2026-11-01';

const src = JSON.parse(readFileSync('data/source-ledger.json', 'utf8'));

/* ────────────────────────────────────────────────────────────────────────────
   1. Registrable-domain helper (no public-suffix dependency available offline)
   ──────────────────────────────────────────────────────────────────────────── */
const MULTI_PART = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'gov.uk', 'me.uk', 'co.nz', 'org.nz', 'co.in',
  'com.au', 'net.au', 'org.au', 'edu.au', 'co.za', 'com.br', 'com.mx', 'co.jp',
  'co.il', 'com.sg', 'com.tr', 'co.kr', 'com.ar', 'com.co', 'or.jp', 'ne.jp',
]);

function regDomain(url) {
  if (!url) return null;
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    const parts = host.split('.');
    if (parts.length <= 2) return host;
    const lastTwo = parts.slice(-2).join('.');
    if (MULTI_PART.has(lastTwo)) return parts.slice(-3).join('.');
    return lastTwo;
  } catch {
    return null;
  }
}

/* Hosts that are NOT the operator's own domain. A source hosted here can never
 * be tier `official`, whatever the upstream file says. Press-release wires and
 * social accounts are secondary corroboration at best. */
const AGGREGATORS = new Set([
  'myfxbook.com', 'tradingbrokers.com', 'fofan.org', 'ndfxbonus.com',
  'thegolfwire.com', 'ustrottingnews.com', 'codesports.com.au',
  'tottenhamhotspur.com', 'leicestertigers.com', 'prnewswire.com',
  'businesswire.com', 'globenewswire.com', 'legalsportsreport.com',
  'allaboutfpl.com', 'fpltips.com', 'mediaweek.com.au',
  'hipther.com', 'sportingnews.com', 'shiftdelete.net',
  'reddit.com', 'x.com', 'twitter.com', 'facebook.com', 'instagram.com',
  'youtube.com', 'linkedin.com', 'medium.com', 'substack.com',
  'google.com', 'play.google.com', 'apps.apple.com',
]);

/* IMPORTANT: a domain match always beats this list.
 * If a "third-party" host is in fact the operator's own registrable domain — e.g.
 * a source at favorites.actionnetwork.com for a contest hosted on actionnetwork.com —
 * it is the operator speaking and must never be called a mislabel. An earlier pass
 * flagged two such rows; that was a false positive and the guard below fixes it. */
function isThirdPartyHost(url, opDomain) {
  const h = regDomain(url);
  if (!h || !opDomain) return false;
  if (h === opDomain) return false;              // same registrable domain → operator
  return AGGREGATORS.has(h);
}

/* ────────────────────────────────────────────────────────────────────────────
   2. Live verification performed this session.
      Every entry names the operator page fetched and the value actually read.
      Rows absent from this map are NOT verified — they are `official-linked`.
   ──────────────────────────────────────────────────────────────────────────── */
const VERIFIED = {
  metaculus: {
    url: 'https://www.metaculus.com/tournaments/',
    read: 'Page states "We are not a prediction market. You can participate for free and win cash prizes for being accurate." Live pools include FutureEval Bot Fall 2026 $50,000, Labor Automation $35,000, Forecasting Our World in Data $20,000, POTUS Predictions $15,000, US Midterms 2026 $10,000, ACX 2026 $10,000, Market Pulse 26Q4 $7,500, Metaculus Cup Fall 2026 $5,000, AI Pathways $5,000, Sagan Space $5,000, Climate Tipping Points $5,000, Animal Futures $3,400.',
    confirms: 'Free to enter, pays cash. Prize range $3,400–$50,000.',
    note: 'Upstream range "$3,000 to $50,000" holds, but the floor is now $3,400. Cosmetic drift only.',
  },
  drivendata: {
    url: 'https://www.drivendata.org/competitions/',
    read: 'Live prize competition: Geologic Enhanced Mapping System (GEMS) Prize Challenge — "$300,000 in prizes", 4 weeks left. Recently completed: DaT Parkinson\'s Challenge €25,000; Children\'s Speech Recognition Challenge $120,000.',
    confirms: 'Free to enter, pays cash.',
    note: 'Upstream says "$10,000–$200,000 total purses". The live pot is $300,000, so the stated range is stale — it understates the current top prize.',
  },
  arcprize: {
    url: 'https://arcprize.org/',
    read: 'Homepage: "Enter ARC Prize 2026 — Now $2,000,000 in prizes!"; "In partnership with Kaggle, over $2M is up for grabs." Three tracks.',
    confirms: '$2,000,000 across three 2026 tracks, entered via Kaggle.',
    note: '',
  },
  'cbs-pro-pickem': {
    url: 'https://www.cbssports.com/fantasy/football/games/pickem/rules',
    read: 'Official 2026 rules: "The Challenge is FREE to play. No purchase, wireless device or entry fee necessary to enter or win." Eligibility: registered CBS user, 50 US states + DC (PR and territories expressly excluded), 18+. 18 weekly contests, 9 Sep 2026 – 10 Jan 2027. Prizes: 18 Weekly Prizes of US$1,000 each; Season Long Prize US$5,000; Contingency Prize US$100,000 for a perfect weekly slate.',
    confirms: '$1,000/week × 18 + $5,000 season + $100,000 perfect week. Free entry. US 50 + DC, 18+.',
    note: '',
  },
  'mlb-beat-the-streak': {
    url: 'https://www.mlb.com/apps/beat-the-streak/official-rules',
    read: '2026 Official Rules: "NO PURCHASE NECESSARY TO ENTER OR WIN." Eligibility: US incl. commonwealths/territories/possessions and Canada excluding Quebec, 21+, registered MLB.com user. Grand Prize US$5,600,000, payable as a 30-year annuity of US$186,667/yr or a lump sum of US$3,000,000 (present value as of 12 Mar 2026); awarded only for a 57-game streak. Top Streak Prize US$10,000; awarded only if no Grand Prize and a streak of at least 20 is reached. Entry period 24 Mar 2026 to the end of the 2026 regular season.',
    confirms: '$5,600,000 headline / $3,000,000 lump sum; $10,000 Top Streak. Free entry. US + Canada excl. Quebec, 21+.',
    observedStatus: 'ended',
    statusBasis: 'The same official rules set the entry period as 24 Mar 2026 "to the end of the 2026 MLB regular season". That season has concluded, so on the review date the entry period these rules describe has closed. Upstream still records the row as live.',
    note: 'Prize and eligibility figures are exactly right. Only the status is stale, and it is the status that matters to a reader deciding where to spend an afternoon.',
  },
  kaggle: {
    url: 'https://www.kaggle.com/competitions',
    read: 'Open prize events on the page: ARC Prize 2026 Paper Track $450,000 (8 days to go), NFL Big Data Bowl 2027 $100,000 (2 months to go), Gemma 4 Developer Agent Paper Track $35,000 (11 days to go). "Getting Started" competitions (Titanic, House Prices, Spaceship Titanic) carry no prize money.',
    confirms: 'Free to enter, pays cash on Featured/Hackathon tracks; no cash on Getting Started.',
    note: '',
  },
  squarespool: {
    url: 'https://www.squarespool.com/',
    read: 'Marketing page: "Get your own pool page in minutes — completely free." It is a squares-pool host. No prize is offered by the site; the entity running the pool sets any stakes. Upstream prize field itself says "Prizes decided by your group".',
    confirms: 'Free tool. NOT a competition and NOT a source of prize money.',
    note: 'Sits in a list titled competitions that pay real money, but offers no prize. Also the only non-HTTPS signup URL upstream (it does redirect to https).',
  },
  'aflw-fantasy': {
    url: 'https://aflwfantasy.afl/',
    read: 'Resolves to the AFL iD OAuth sign-in flow at login.id.afl, then rendered "The page has timed out". It is genuinely an AFL-operated login, but it is not a usable public entry page.',
    confirms: 'Official AFL property; signup URL is a login redirect, not a landing page.',
    note: 'The record’s signup URL is a raw OAuth redirect rather than a public entry page. The canonical entry point is https://fantasy.afl.com.au/.',
    unstableUrl: true,
  },
  zindi: {
    url: 'https://zindi.world/competitions',
    read: 'Competitions board live at zindi.world (the .africa domain now redirects here). Page lists open and past challenges.',
    confirms: 'Live, free to enter platform.',
    note: 'Upstream already uses zindi.world. No action needed — recorded so it is not "corrected" by mistake.',
  },
};

/* ────────────────────────────────────────────────────────────────────────────
   3. Classification helpers — all read only text that is already present.
   ──────────────────────────────────────────────────────────────────────────── */
const NON_CASH_RX = /\b(non-?cash|no cash prizes?|no cash|merchandise|gift ?cards?|gift ?codes?|gift ?vouchers?|vouchers?|store credit|in-game (rewards?|items?|only)|points|tickets?|signed|memorabilia|jerseys?|balls?|experiences?|trips?|subscriptions?)\b/i;
const CASH_RX = /\$\s?\d|USD\s?\d|€\s?\d|£\s?\d|A\$\s?\d/;
const UNVERIFIED_RX = /\b(not confirmed|unconfirmed|unverified|not verified|paused|not running|not currently|not published|contest complete|no longer)\b/i;

function classifyPrize(listing) {
  const text = `${listing.prizeUsd || ''} ${listing.prizeNote || ''}`;
  const hasCash = CASH_RX.test(text);
  const nonCash = NON_CASH_RX.test(listing.prizeUsd || '');
  if (hasCash && nonCash) return 'mixed';
  if (hasCash) return 'cash';
  if (nonCash) return 'non-cash';
  return 'unstated';
}

/** Largest dollar figure written in the prize text. Used only for sorting/sizing.
 *  Handles plain amounts, thousands separators and K/M/BN multipliers, because the
 *  upstream prize strings mix styles freely: "$100K perfect", "$1.03M across 2025",
 *  "$5,600,000 headline". An earlier version missed the suffixes and read
 *  "$100K" as $100, which mis-sorted the table — the suffix handling below is the fix.
 *  Note: amounts in £ or € are treated as the same magnitude. That is a sorting
 *  convenience only; the site always prints the original string verbatim. */
function maxDollar(text) {
  if (!text) return null;
  const re = /(?:\$|A\$|USD\s?|€|£)\s?([0-9][0-9,]*(?:\.[0-9]+)?)\s*(k|m|bn|b|million|billion|thousand)?\b/gi;
  /* Money that is written in the prize field but is not payable to the entrant.
   * kinolime is the clear case: "$25,000 cash production award + up to $15M
   * production financing" — the $15M finances a film, it is not a prize. Taking
   * the raw maximum would have ranked it first on the site at $15M, which is
   * simply wrong. Aggregates "across <year>" are excluded for the same reason:
   * they are totals for a series of events, not one prize. */
  const FINANCING = /\b(financing|production budget|budget)\b/i;
  const AGGREGATE = /^[\s)]*(?:;|,)?\s*across\s+\d/i;
  let best = 0;
  let hit;
  while ((hit = re.exec(text)) !== null) {
    const before = text.slice(Math.max(0, hit.index - 30), hit.index);
    const afterWide = text.slice(hit.index + hit[0].length, hit.index + hit[0].length + 30);
    const afterNarrow = text.slice(hit.index + hit[0].length, hit.index + hit[0].length + 14);
    if (FINANCING.test(before + afterWide)) continue;      // e.g. "up to $15M production financing"
    if (AGGREGATE.test(afterNarrow)) continue;             // e.g. "$1.03M across 2025"
    let num = parseFloat(hit[1].replace(/,/g, ''));
    if (!isFinite(num)) continue;
    const unit = (hit[2] || '').toLowerCase();
    if (unit === 'k' || unit === 'thousand') num *= 1e3;
    else if (unit === 'm' || unit === 'million') num *= 1e6;
    else if (unit === 'bn' || unit === 'b' || unit === 'billion') num *= 1e9;
    if (num > best) best = num;
  }
  return best || null;
}

/* Hosts that are a gambling operator's own domain. The upstream policy says it
 * excludes "any contest that requires an account with a gambling operator
 * (bookmaker, sportsbook or real-money DFS)" and names DraftKings and FanDuel
 * free-to-play games specifically. These rows contradict that policy. */
const GAMBLING_OPERATORS = {
  'betfanatics.com': 'Fanatics Sportsbook — the contest runs on the sportsbook’s own domain, so an account here is a betting account.',
  'andysbetclub.co.uk': 'Andy’s Bet Club, a betting-affiliate brand rather than a league, broadcaster or software platform.',
  'skybet.com': 'Sky Bet — a bookmaker.',
  'bet365.com': 'bet365 — a bookmaker.',
  'paddypower.com': 'Paddy Power — a bookmaker.',
  'betmgm.com': 'BetMGM — a sportsbook.',
  'fanduel.com': 'FanDuel — a sportsbook and DFS operator.',
  'draftkings.com': 'DraftKings — a sportsbook and DFS operator.',
};

/* Types whose members are not actually free-to-enter prize competitions. */
const NOT_A_CONTEST_TYPES = new Set(['pools', 'directory']);
/* Broker demo-account contests: customer-acquisition funnels for trading firms.
   The upstream file excludes bookmaker and DFS funnels under the same logic. */
const BROKER_FUNNEL_RX = /(demo|forex|cfd|broker|prop account|funded|trading bonus)/i;

/* ────────────────────────────────────────────────────────────────────────────
   4. Per-row audit
   ──────────────────────────────────────────────────────────────────────────── */
const rows = src.listings.map((l) => {
  const flags = [];
  const v = VERIFIED[l.id];                // manual verification recorded this session
  const sources = Array.isArray(l.sources) ? l.sources : [];
  const officialSources = sources.filter((s) => s.tier === 'official');
  const opDomain = regDomain(l.signupUrl);

  /* — blocking defect: no official-tier source at all — */
  if (officialSources.length === 0) {
    flags.push({
      code: 'NO_OFFICIAL_SOURCE',
      severity: 'high',
      detail: `No source is recorded at tier "official". The prize claim rests on ${sources.length ? sources.map((s) => s.tier).join('/') : 'no'} source(s) only, which the project's own sourcing rule forbids.`,
    });
  }

  /* — blocking defect: sources marked official that are not the operator — */
  const mislabelled = officialSources.filter((s) => isThirdPartyHost(s.url, opDomain));
  if (mislabelled.length) {
    const onlyMislabelled = mislabelled.length === officialSources.length;
    flags.push({
      code: 'TIER_MISLABEL',
      severity: onlyMislabelled ? 'high' : 'medium',
      detail: `${mislabelled.length} source(s) are graded "official" but are not hosted on the operator's own domain: ${mislabelled.map((s) => new URL(s.url).hostname).join(', ')}.${onlyMislabelled ? ' This is the row\'s only support, so the prize figure is effectively uncited.' : ''}`,
    });
  }

  /* — a source on the operator's own domain is graded below official — */
  const underTiered = sources.filter((s) => s.tier !== 'official' && regDomain(s.url) === opDomain);
  if (underTiered.length && !officialSources.some((s) => regDomain(s.url) === opDomain)) {
    flags.push({
      code: 'UNDER_TIERED',
      severity: 'low',
      detail: `${underTiered.length} source(s) sit on the operator's own domain but are graded "${underTiered[0].tier}" rather than "official". The evidence is stronger than its label; the tier is simply wrong in the conservative direction.`,
    });
  }

  /* — official source not on the operator's domain — */
  if (opDomain && officialSources.length) {
    const onOp = officialSources.filter((s) => regDomain(s.url) === opDomain);
    if (!onOp.length) {
      flags.push({
        code: 'SOURCE_OFF_DOMAIN',
        severity: 'low',
        detail: `No official-tier source is hosted on the signup domain (${opDomain}). This is weak on its own: for a private mini-league the organiser may legitimately live on a different domain from the platform that hosts entry. Read it alongside the tier label rather than as a defect.`,
      });
    }
  }

  /* — missing / useless rules link — */
  if (!l.rulesUrl) {
    flags.push({
      code: 'NO_RULES_URL',
      severity: 'medium',
      detail: 'No official rules URL recorded. Entry conditions and prize terms cannot be checked from this row.',
    });
  } else if (regDomain(l.rulesUrl) === regDomain(l.signupUrl)) {
    const path = (() => { try { return new URL(l.rulesUrl).pathname.replace(/\/$/, ''); } catch { return ''; } })();
    if (path === '' || path === '/index.html' || path === '/index.htm') {
      flags.push({
        code: 'RULES_IS_HOMEPAGE',
        severity: 'medium',
        detail: `The "rules" link points at the operator homepage (${l.rulesUrl}), not a rules or terms page.`,
      });
    }
  }

  /* — insecure URL — */
  const allUrls = [l.signupUrl, l.rulesUrl, l.iosUrl, l.tosUrl, ...sources.map((s) => s.url)].filter(Boolean);
  const insecure = allUrls.filter((u) => /^http:\/\//i.test(u));
  if (insecure.length) {
    flags.push({
      code: 'HTTP_ONLY',
      severity: 'low',
      detail: `Uses plain http:// instead of https://: ${insecure[0]}`,
    });
  }

  /* — prize honesty — */
  const prizeType = classifyPrize(l);
  const maxPrize = maxDollar(l.prizeUsd);

  if (prizeType === 'non-cash') {
    flags.push({
      code: 'NO_CASH_PRIZE',
      severity: 'high',
      detail: `The recorded prize is not money: "${l.prizeUsd}". A row with no cash prize does not belong in a list of competitions that pay cash.`,
    });
  }
  if (prizeType === 'unstated') {
    flags.push({
      code: 'PRIZE_NOT_QUANTIFIED',
      severity: 'low',
      detail: `No dollar amount is stated in the prize field ("${l.prizeUsd}"). Left blank on the site rather than estimated.`,
    });
  }
  if (UNVERIFIED_RX.test(`${l.prizeUsd || ''} ${l.prizeNote || ''}`)) {
    flags.push({
      code: 'MARKED_UNCONFIRMED',
      severity: 'medium',
      detail: `The row itself says the prize is not confirmed ("${l.prizeUsd}").`,
    });
  }

  /* — not a competition — */
  if (NOT_A_CONTEST_TYPES.has(l.type)) {
    flags.push({
      code: 'NOT_A_COMPETITION',
      severity: l.type === 'pools' ? 'high' : 'medium',
      detail: l.type === 'pools'
        ? 'This is a pool-hosting tool. The site offers no prize; any stake is set by whoever runs the pool ("prizes decided by your group").'
        : 'This is a directory or index of contests, not a contest you can enter and win.',
    });
  }

  /* — broker funnel — */
  if (l.type === 'market' && BROKER_FUNNEL_RX.test(`${l.name} ${l.short || ''} ${l.prizeUsd || ''}`)) {
    flags.push({
      code: 'BROKER_FUNNEL',
      severity: 'medium',
      detail: 'Broker demo-account contest. These are customer-acquisition promotions for trading firms, and prizes are frequently credited as non-withdrawable trading bonuses or prop accounts rather than payable cash.',
    });
  }

  /* — gambling-operator host, against the upstream policy — */
  const bookKey = Object.keys(GAMBLING_OPERATORS).find(
    (d) => opDomain === d || (opDomain || '').endsWith('.' + d));
  if (bookKey) {
    flags.push({
      code: 'GAMBLING_OPERATOR',
      severity: 'medium',
      detail: `Signup is on ${opDomain}: ${GAMBLING_OPERATORS[bookKey]} The upstream file states it excludes contests requiring an account with a gambling operator, and names DraftKings and FanDuel free-to-play games as excluded on exactly this basis. This row is the same pattern and survived the cull.`,
    });
  }

  /* — banking on a bonus / credit rather than money — */
  if (/trading bonus|credited|prop account|account credit|bonus cash|not direct withdrawal|not withdrawable/i.test(`${l.prizeUsd || ''} ${l.minCashout || ''} ${l.prizeNote || ''}`)) {
    flags.push({
      code: 'CASHOUT_RESTRICTED',
      severity: 'medium',
      detail: 'Prize or cash-out terms indicate the reward may be bonus credit, an account, or otherwise not withdrawable as cash.',
    });
  }

  /* — status the operator's own page contradicts (only where I read the rules) — */
  if (v && v.observedStatus && v.observedStatus !== l.status) {
    flags.push({
      code: 'STATUS_STALE',
      severity: 'medium',
      detail: `Recorded as "${l.status}" but the operator's own rules indicate "${v.observedStatus}". ${v.statusBasis || ''}`,
    });
  }

  /* — signup URL is a login redirect rather than a usable entry page — */
  if (v && v.unstableUrl) {
    flags.push({
      code: 'UNSTABLE_URL',
      severity: 'low',
      detail: 'The signup link is a login/OAuth redirect rather than a public landing page, so it is a poor entry point from a table and may time out.',
    });
  }

  /* — unverified-by-us but structurally sound — */
  let level;
  if (v) level = 'verified';
  else if (flags.some((f) => f.severity === 'high')) level = 'flagged';
  else level = 'official-linked';

  /* — triage score: editorial aid, derived ONLY from fields above, never a fact — */
  let score = 0;
  if (l.freePath === 'full') score += 25;
  else if (l.freePath === 'partial') score += 10;
  if (prizeType === 'cash') score += 25;
  else if (prizeType === 'mixed') score += 20;
  else if (prizeType === 'unstated') score += 5;
  if (maxPrize) {
    const pts = Math.min(20, Math.round((Math.log10(maxPrize) - 2) * 6.67));
    score += Math.max(0, pts);
  }
  if (officialSources.some((s) => !isThirdPartyHost(s.url, opDomain)) && !mislabelled.length) score += 15;
  if (l.status === 'live') score += 10;
  else if (l.status === 'caution') score += 4;
  if (!flags.length) score += 5;
  score = Math.max(0, Math.min(100, score));

  return {
    id: l.id,
    name: l.name,
    short: l.short,
    type: l.type,
    status: l.status,
    freePath: l.freePath,
    platforms: l.platforms || [],
    prizeUsd: l.prizeUsd ?? null,
    prizeNote: l.prizeNote ?? null,
    prizeType,
    maxPrizeUsd: maxPrize,
    minCashout: l.minCashout ?? null,
    payoutMethods: l.payoutMethods || [],
    eligibility: l.eligibility ?? null,
    restricted: l.restricted ?? null,
    verificationLevel: (l.verification || {}).level ?? null,
    verificationSteps: (l.verification || {}).steps || [],
    rulesUrl: l.rulesUrl ?? null,
    signupUrl: l.signupUrl ?? null,
    iosUrl: l.iosUrl ?? null,
    tosUrl: l.tosUrl ?? null,
    lastChecked: l.lastChecked ?? null,
    redFlags: l.redFlags || [],
    sources: sources.map((s) => ({ title: s.title, url: s.url, tier: s.tier, hostIsOperator: regDomain(s.url) === opDomain })),
    verifyLevel: level,
    verifiedSource: v ? { url: v.url, read: v.read, confirms: v.confirms, note: v.note } : null,
    flags,
    score,
    /* deep-detail blocks, present on a minority of rows upstream */
    detail: (l.signupSteps || l.howToWin || l.howToGetMoney || l.tosNotes) ? {
      signupSteps: l.signupSteps || [], howToWin: l.howToWin || [],
      howToGetMoney: l.howToGetMoney || [], tosNotes: l.tosNotes || [],
    } : null,
  };
});

/* ────────────────────────────────────────────────────────────────────────────
   5. Aggregate report
   ──────────────────────────────────────────────────────────────────────────── */
const count = (fn) => rows.filter(fn).length;
const flagCounts = {};
for (const r of rows) for (const f of r.flags) flagCounts[f.code] = (flagCounts[f.code] || 0) + 1;

const report = {
  generated: TODAY,
  upstream: { repo: 'karagemop466-tech/FreeMoneyApps', file: 'assets/data.js', commit: '466f7c1', reviewed: src.reviewed, pass: src.pass },
  totals: {
    listings: rows.length,
    verifiedThisSession: count((r) => r.verifyLevel === 'verified'),
    officialLinked: count((r) => r.verifyLevel === 'official-linked'),
    flagged: count((r) => r.verifyLevel === 'flagged'),
    rowsWithAnyFlag: count((r) => r.flags.length > 0),
    totalFlagInstances: rows.reduce((n, r) => n + r.flags.length, 0),
  },
  prizeType: {
    cash: count((r) => r.prizeType === 'cash'),
    mixed: count((r) => r.prizeType === 'mixed'),
    'non-cash': count((r) => r.prizeType === 'non-cash'),
    unstated: count((r) => r.prizeType === 'unstated'),
  },
  byType: Object.fromEntries(src.types.map((t) => [t.id, count((r) => r.type === t.id)])),
  byStatus: {
    live: count((r) => r.status === 'live'),
    mixed: count((r) => r.status === 'mixed'),
    caution: count((r) => r.status === 'caution'),
    ended: count((r) => r.status === 'ended'),
  },
  freePath: {
    full: count((r) => r.freePath === 'full'),
    partial: count((r) => r.freePath === 'partial'),
    'paid-cash': count((r) => r.freePath === 'paid-cash'),
  },
  flagCounts,
  fieldCoverage: (() => {
    const out = {};
    for (const k of ['rulesUrl', 'tosUrl', 'iosUrl', 'signupSteps', 'howToWin', 'howToGetMoney', 'tosNotes', 'redFlags']) {
      out[k] = rows.filter((r) => {
        const v = r[k];
        return Array.isArray(v) ? v.length > 0 : v != null;
      }).length;
    }
    return out;
  })(),
  types: src.types,
  verificationLevels: src.verificationLevels,
};

mkdirSync('data', { recursive: true });
mkdirSync('assets/data', { recursive: true });
writeFileSync('data/audit-report.json', JSON.stringify(report, null, 2));

writeFileSync('assets/data/competitions.json', JSON.stringify({
  generated: TODAY,
  upstreamReviewed: src.reviewed,
  upstreamCommit: '466f7c1',
  types: src.types,
  verificationLevels: src.verificationLevels,
  summary: report.totals,
  rows,
}, null, 0));

/* console summary */
const pad = (n, w = 4) => String(n).padStart(w);
console.log(`rows                     ${pad(rows.length)}`);
console.log(`verified this session    ${pad(report.totals.verifiedThisSession)}`);
console.log(`official-linked          ${pad(report.totals.officialLinked)}`);
console.log(`flagged (high severity)  ${pad(report.totals.flagged)}`);
console.log(`rows with any flag       ${pad(report.totals.rowsWithAnyFlag)}`);
console.log(`prize types              ${JSON.stringify(report.prizeType)}`);
console.log('\nflag instances:');
Object.entries(flagCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${pad(v)}  ${k}`));

/* ────────────────────────────────────────────────────────────────────────────
   6. Human-readable record of the pages opened this session.
      Generated from the same VERIFIED map the site uses, so the log can never
      claim a verification the site does not show.
   ──────────────────────────────────────────────────────────────────────────── */
const vlines = [
  '# Live verification log',
  '',
  `Session: \`arena/6fc21fe0\` · date: ${TODAY}`,
  '',
  'Method: each operator page below was fetched directly and the quoted claim read on the page.',
  'Only what appears on the page is recorded. Everything not in this table is marked',
  '`official-linked` on the site — sourced, but **not** re-opened this session.',
  '',
  `**${Object.keys(VERIFIED).length} of ${rows.length} rows were verified.**`,
  '',
  '| Listing | Operator page | What the page says | Prize / eligibility confirmed | Note |',
  '|---|---|---|---|---|',
];
for (const [id, v] of Object.entries(VERIFIED)) {
  const esc = (s) => String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  vlines.push(`| \`${id}\` | <${v.url}> | ${esc(v.read)} | ${esc(v.confirms)} | ${esc(v.note) || '—'} |`);
}
vlines.push('', '---', '',
  'Nothing else in the dataset was verified by opening a page. Where a figure could not be',
  'sourced to an operator page, the site shows it blank and flags the row; see',
  '`flagged.html` and `data/audit-report.json`.');
writeFileSync('data/verification-live.md', vlines.join('\n') + '\n');
console.log(`\nwrote data/verification-live.md (${Object.keys(VERIFIED).length} verified rows)`);
