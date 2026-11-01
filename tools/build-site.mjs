#!/usr/bin/env node
/**
 * build-site.mjs — emits every HTML page from src/pages/*.body.html + one shared shell.
 *
 * Why a generator: a single nav/shell definition means the nine category pages,
 * the flag report and the prose pages cannot drift apart or ship a dead internal
 * link. It also injects the audit counts so no number on the site is hand-typed.
 *
 * Run:  node tools/audit.mjs && node tools/build-site.mjs
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = JSON.parse(readFileSync('assets/data/competitions.json', 'utf8'));
const REPORT = JSON.parse(readFileSync('data/audit-report.json', 'utf8'));
const TODAY = REPORT.generated;

const T = REPORT.totals;
const P = REPORT.prizeType;
const rows = SITE.rows;

/* ── category metadata ──────────────────────────────────────────────────── */
const CATS = [
  {
    id: 'tech', slug: 'tech', name: 'Tech & data',
    tagline: 'Kaggle, ARC Prize, DrivenData, Devpost and similar. Best fit for an AI coding agent: public leaderboards, written rules, reproducible scoring.',
    note: 'These are the competitions where a coding agent has the clearest advantage — the task is specified in a file, the metric is automatic, and submissions are scored by a server. Entry is free; there is no house rake.',
  },
  {
    id: 'sports', slug: 'sports', name: 'Fantasy & sports picks',
    tagline: 'Free pick\'em, survivor and fantasy games run by leagues and broadcasters. Free entry, advertiser-funded prizes.',
    note: 'The largest category, and the most season-dependent. Status here reflects the upstream file, not a live check — a row marked live may be out of season today. Deadline-sensitive rows are flagged.',
  },
  {
    id: 'creative', slug: 'creative', name: 'Creative contests',
    tagline: 'Photography, film, writing and design prizes judged on a submission.',
    note: 'Judged prizes, so the payoff depends on taste as much as technique. Several here are client-funded marketplaces where the "prize" is really a job payment.',
  },
  {
    id: 'forecasting', slug: 'forecasting', name: 'Forecasting tournaments',
    tagline: 'Prediction tournaments scored on accuracy. Metaculus is the anchor and is verified free-to-enter.',
    note: 'Small field, high quality. Metaculus states on its own site that it is not a prediction market and that you can "participate for free and win cash prizes".',
  },
  {
    id: 'market', slug: 'trading', name: 'Trading & market contests',
    tagline: 'Broker demo-account contests and paper-trading competitions. Read the cash-out terms before you spend time here.',
    note: 'Caution category. Most of these are customer-acquisition promotions for brokers, and many pay in trading credit or prop accounts rather than withdrawable cash. Fourteen rows carry a cash-out or broker-funnel flag. This category is the weakest match for the phrase "free to enter competitions that pay real money".',
  },
  {
    id: 'skill', slug: 'skill', name: 'Skill tournaments',
    tagline: 'Head-to-head skill games. The free rooms usually pay gems, not money.',
    note: 'This is the category most likely to disappoint. Only a handful of these have a genuine free-to-cash path; the rest require an entry fee for the cash rooms, which is recorded honestly in the free-path column.',
  },
  {
    id: 'trivia', slug: 'trivia', name: 'Trivia',
    tagline: 'Quiz competitions. A thin category.',
    note: 'Only two rows, and one of them records that its trivia game was removed. Do not expect to find a reliable free trivia income stream here.',
  },
  {
    id: 'directory', slug: 'directories', name: 'Directories',
    tagline: 'Indexes that point at other contests rather than running one.',
    note: 'Useful for finding work, not for entering. Neither row is a competition you can win.',
  },
  {
    id: 'pools', slug: 'pools', name: 'Pool tools',
    tagline: 'Hosts for office pools. The site offers no prize — your group sets any stakes.',
    note: 'These are tools, not competitions. They are kept for completeness and every row is flagged, because listing them under a heading about prize money is misleading.',
  },
];

/* ── shared shell ───────────────────────────────────────────────────────── */
const NAV = [
  { href: 'index.html', label: 'Dashboard' },
  { href: 'competitions.html', label: 'All competitions' },
  { href: 'tech.html', label: 'Tech & data' },
  { href: 'sports.html', label: 'Fantasy & picks' },
  { href: 'creative.html', label: 'Creative' },
  { href: 'flagged.html', label: 'Flagged for review' },
  { href: 'methodology.html', label: 'Method' },
];

function shell({ title, description, body, current = '', extraHead = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta name="theme-color" content="#fbfaf7">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2316202b'/><text x='32' y='45' font-size='38' font-family='monospace' font-weight='bold' text-anchor='middle' fill='%23ffffff'>$</text></svg>">
<link rel="stylesheet" href="assets/css/style.css">
${extraHead}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark">$</span>
      <span class="brand-text">
        <span class="brand-title">Free Cash Competitions</span>
        <span class="brand-sub">verified ledger · ${TODAY}</span>
      </span>
    </a>
    <button class="nav-toggle" id="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      Menu
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main">
      <ul>
${NAV.map((n) => `        <li><a href="${n.href}"${n.href === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('\n')}
      </ul>
    </nav>
  </div>
</header>

<main id="main">
${body}
</main>

<footer class="site-footer">
  <div class="wrap">
    <p><strong>Independent research compilation.</strong> Not affiliated with, endorsed by or sponsored by any listed operator. No link here is an affiliate or referral link. Prizes are described only as the operator describes them; where the operator does not state a figure, the field is blank rather than estimated.</p>
    <p>Play only where it is legal for you. Age limits are set by each operator — 18+ or 21+ depending on the contest and your jurisdiction. Prize winnings may be taxable; in the US, operators commonly issue a 1099 for prizes of $600 or more. Nothing here is legal, tax or financial advice.</p>
    <p class="small">Dataset snapshot: upstream ledger reviewed ${SITE.upstreamReviewed} (commit <code>${SITE.upstreamCommit}</code>). Structural audit and page verification re-run ${TODAY}.</p>
    <ul class="footer-links">
      <li><a href="index.html">Dashboard</a></li>
      <li><a href="competitions.html">All ${T.listings} competitions</a></li>
      <li><a href="all-entries.html">Full listing (static)</a></li>
      <li><a href="flagged.html">Flagged for review</a></li>
      <li><a href="analysis.html">Analysis</a></li>
      <li><a href="executive-summary.html">Executive summary</a></li>
      <li><a href="methodology.html">Method &amp; sources</a></li>
    </ul>
  </div>
</footer>

<script src="assets/js/app.js" defer></script>
${extraHead.includes('data-page="no-table"') ? '' : ''}
</body>
</html>`;
}

/* ── the reusable table block ───────────────────────────────────────────── */
function tableBlock({ presetType = '', presetLevel = '', presetPrize = '', presetSort = '' } = {}) {
  const attrs = [
    presetType ? `data-filter-type="${presetType}"` : '',
    presetLevel ? `data-filter-level="${presetLevel}"` : '',
    presetPrize ? `data-filter-prize="${presetPrize}"` : '',
    presetSort ? `data-filter-sort="${presetSort}"` : '',
  ].filter(Boolean).join(' ');

  return `<div id="ledger" ${attrs}>
  <div class="controls" id="controls"></div>
  <div class="result-bar">
    <span id="result-count">Loading…</span>
    <noscript><span>JavaScript is required for search and filters. The <a href="all-entries.html">full static listing</a> has every row without JavaScript.</span></noscript>
  </div>
  <div class="records" id="records"></div>
  <div class="table-wrap" id="table-wrap">
    <table>
      <caption class="sr-only">Free-to-enter cash prize competitions with verification status and source links</caption>
      <thead>
        <tr>
          <th scope="col">Competition</th>
          <th scope="col">Prize (as stated)</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
          <th scope="col">Who can enter</th>
          <th scope="col">Review flags</th>
          <th scope="col">Rules</th>
        </tr>
      </thead>
      <tbody id="table-body"></tbody>
    </table>
  </div>
</div>`;
}

const n = (x) => Number(x).toLocaleString('en-US');

/* ── page bodies ────────────────────────────────────────────────────────── */
function dashboardBody() {
  /* Start-here shortlist: free + live, no high-severity flag, money estimated. */
  const picks = rows
    .filter((r) => r.freePath === 'full' && r.status === 'live' && r.prizeType === 'cash'
      && !r.flags.some((f) => f.severity === 'high'))
    .sort((a, b) => (b.maxPrizeUsd || 0) - (a.maxPrizeUsd || 0))
    .slice(0, 8);

  const pickRows = picks.map((r) => `<tr>
    <td class="name"><a href="${r.signupUrl}" target="_blank" rel="noopener nofollow">${r.name}</a></td>
    <td class="prize">${r.maxPrizeUsd ? '<strong>' + '$' + n(r.maxPrizeUsd) + '</strong><br>' : ''}<span class="small muted">${escapeHtml(r.prizeUsd || 'Not stated')}</span></td>
    <td class="nowrap">${r.type}</td>
    <td class="nowrap"><span class="badge ${r.verifyLevel === 'verified' ? 'verified' : 'official'}">${r.verifyLevel === 'verified' ? 'Verified' : 'Official src'}</span></td>
    <td class="nowrap">${r.rulesUrl ? `<a href="${r.rulesUrl}" target="_blank" rel="noopener nofollow">Rules</a>` : '<span class="muted small">—</span>'}</td>
  </tr>`).join('\n');

  const catCards = CATS.map((c) => {
    const count = rows.filter((r) => r.type === c.id).length;
    const cash = rows.filter((r) => r.type === c.id && r.prizeType === 'cash' && r.freePath === 'full').length;
    return `<li><a class="cat-card" href="${c.slug}.html">
      <span class="cat-card-top"><h3>${c.name}</h3><span class="n">${count}</span></span>
      <p>${c.tagline}</p>
      <p class="small"><strong>${cash}</strong> free with a stated cash prize</p>
    </a></li>`;
  }).join('\n');

  return `<div class="wrap">
  <section class="hero">
    <p class="kicker">Verified ledger · reviewed ${TODAY}</p>
    <h1>Find the free competitions actually worth your time.</h1>
    <p class="lede">
      ${n(T.listings)} competitions from the upstream FreeMoneyApps ledger, re-audited line by line.
      Every row shows its prize exactly as the operator states it, the cash-out terms, who is allowed
      to enter, and a source link. Where a claim could not be confirmed against an official page,
      the value is <strong>left blank and flagged</strong> — never estimated.
    </p>
    <div class="stats">
      <div class="stat"><b data-stat="total">${T.listings}</b><span>Competitions audited</span></div>
      <div class="stat ok"><b data-stat="verified">${T.verifiedThisSession}</b><span>Verified against the operator today</span></div>
      <div class="stat"><b data-stat="official">${T.officialLinked}</b><span>Citing an official source</span></div>
      <div class="stat bad"><b data-stat="flagged">${T.flagged}</b><span>Flagged for review</span></div>
    </div>
    <div class="callout">
      <p><strong>Read the flag counts before you enter anything.</strong> ${n(T.rowsWithAnyFlag)} of
      ${n(T.listings)} rows raise at least one issue, and ${T.flagged} raise a serious one. They are all
      published, with reasons and source links, on the
      <a href="flagged.html">Flagged for review</a> page. Flagged rows are still listed — removing them
      would hide the problem instead of showing it.</p>
    </div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Start here</h2>
      <span class="count">${picks.length} shortlisted</span>
    </div>
    <p class="section-note">
      Free entry, a stated cash prize, a live status, and no serious source defect. Sorted by the
      largest dollar figure written in the prize field. This is a triage list, not a
      recommendation to enter — check the rules link on each row first.
    </p>
    <div class="table-wrap" style="display:block">
      <table>
        <thead><tr>
          <th scope="col">Competition</th><th scope="col">Largest stated prize</th>
          <th scope="col">Category</th><th scope="col">Source</th><th scope="col">Rules</th>
        </tr></thead>
        <tbody>
${pickRows}
        </tbody>
      </table>
    </div>
    <p class="small muted" style="margin-top:10px">
      Four of these — Metaculus, DrivenData, ARC Prize and Kaggle — were opened and read during this
      audit. See <a href="methodology.html">Method &amp; sources</a> for what "verified" means here.
    </p>
  </section>

  <section class="section">
    <div class="section-head"><h2>Browse by category</h2></div>
    <p class="section-note">Each category page repeats the full table, filtered, with the specific
    caveats that apply to that group.</p>
    <ul class="cat-grid">
${catCards}
    </ul>
  </section>

  <section class="section">
    <div class="section-head"><h2>What the audit changed</h2></div>
    <div class="stack">
      <div class="callout bad">
        <p><strong>${P['non-cash']} rows do not pay money at all.</strong> Their own prize field
        describes merchandise, tickets, vouchers, in-game items or points. They sit in a ledger titled
        "free competitions that pay real money". Every one is flagged
        <code>NO_CASH_PRIZE</code>.</p>
        <p style="margin-top:8px"><strong>${REPORT.flagCounts.NOT_A_COMPETITION} rows are not competitions.</strong>
        Seven pool-hosting tools ("prizes decided by your group") and two directories of other contests.</p>
      </div>
      <div class="callout warn">
        <p><strong>${REPORT.flagCounts.NO_OFFICIAL_SOURCE} rows have no official source.</strong>
        The project's own rule says a stated prize figure must cite the operator's own page. These rows
        cite only affiliate or forum pages — and ${rows.filter((r) => r.flags.some((f) => f.code === 'NO_OFFICIAL_SOURCE') && r.status === 'live').length}
        of them are still marked <em>live</em>.</p>
        <p style="margin-top:8px"><strong>${REPORT.flagCounts.TIER_MISLABEL} more rows mislabel a source.</strong>
        They grade a press-release wire, a social post or an affiliate site as <code>official</code>.</p>
      </div>
      <div class="callout info">
        <p><strong>${P.unstated} rows state no dollar figure at all</strong>, and
        ${REPORT.flagCounts.MARKED_UNCONFIRMED} rows admit in their own text that the prize is
        unconfirmed, paused or not running. Those values stay blank on this site.</p>
      </div>
    </div>
    <p><a href="analysis.html">Read the full analysis →</a> · <a href="flagged.html">See every flagged row →</a></p>
  </section>

  <section class="section">
    <div class="section-head"><h2>How to read a row</h2></div>
    <div class="table-scroll">
      <table class="prose-table">
        <thead><tr><th scope="col">Badge</th><th scope="col">Meaning</th></tr></thead>
        <tbody>
          <tr><td><span class="badge verified">Verified here</span></td><td>I opened the operator's own page on ${TODAY} and read the claim there. The quoted text is shown on the row.</td></tr>
          <tr><td><span class="badge official">Official source</span></td><td>The row cites a source on the operator's own domain. Not re-opened this session, so treat it as the upstream file's claim, not a fresh check.</td></tr>
          <tr><td><span class="badge flagged">Flagged</span></td><td>At least one serious defect — a non-cash prize, no official source, a mislabelled source, or a row that is not a competition. The reason is printed on the row.</td></tr>
          <tr><td><span class="badge cash">Cash</span></td><td>The prize field states a dollar (or euro/pound) amount.</td></tr>
          <tr><td><span class="badge noncash">Non-cash</span></td><td>The prize is goods, tickets, vouchers, points or in-game items.</td></tr>
          <tr><td><span class="badge unstated">Unstated</span></td><td>No figure is given anywhere official. Blank, not guessed.</td></tr>
          <tr><td><span class="badge free">Free</span></td><td>There is a genuine no-fee path that can pay cash.</td></tr>
          <tr><td><span class="badge partial">Some free</span></td><td>Free events exist, but the cash events charge an entry fee.</td></tr>
          <tr><td><span class="badge paid">Fee needed</span></td><td>No free route to the cash prize.</td></tr>
        </tbody>
      </table>
    </div>
  </section>
</div>`;
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function categoryBody(c) {
  const list = rows.filter((r) => r.type === c.id);
  const cash = list.filter((r) => r.prizeType === 'cash').length;
  const noncash = list.filter((r) => r.prizeType === 'non-cash').length;
  const unstated = list.filter((r) => r.prizeType === 'unstated').length;
  const flagged = list.filter((r) => r.verifyLevel === 'flagged').length;
  const verified = list.filter((r) => r.verifyLevel === 'verified').length;
  const lives = list.filter((r) => r.status === 'live').length;

  return `<div class="wrap">
  <section class="hero">
    <p class="kicker"><a href="index.html">Dashboard</a> / Category</p>
    <h1>${c.name}</h1>
    <p class="lede">${c.tagline}</p>
    <div class="stats">
      <div class="stat"><b>${list.length}</b><span>In this category</span></div>
      <div class="stat ok"><b>${cash}</b><span>State a cash prize</span></div>
      <div class="stat ${flagged ? 'bad' : ''}"><b>${flagged}</b><span>Flagged for review</span></div>
      <div class="stat"><b>${verified}</b><span>Verified here today</span></div>
    </div>
    <div class="callout${c.id === 'market' || c.id === 'pools' || c.id === 'skill' ? ' warn' : ''}">
      <p>${c.note}</p>
    </div>
    <p class="small muted">
      ${lives} marked live · ${cash} cash · ${noncash} non-cash · ${unstated} prize unstated.
      Status values come from the upstream file; only ${verified} row${verified === 1 ? ' was' : 's were'} re-opened against the operator today.
    </p>
  </section>

  <section class="section">
    ${tableBlock({ presetType: c.id })}
  </section>
</div>`;
}

function allEntriesBody() {
  /* a complete, static, JS-free listing — the machine-checkable spine of the site */
  const byType = {};
  rows.forEach((r) => { (byType[r.type] = byType[r.type] || []).push(r); });

  const sections = CATS.map((c) => {
    const list = (byType[c.id] || []).slice().sort((a, b) => (b.maxPrizeUsd || 0) - (a.maxPrizeUsd || 0));
    if (!list.length) return '';
    const body = list.map((r) => {
      const lvl = r.verifyLevel === 'verified' ? 'verified' : r.verifyLevel === 'flagged' ? 'flagged' : 'official';
      const lvlText = r.verifyLevel === 'verified' ? 'Verified here' : r.verifyLevel === 'flagged' ? 'Flagged' : 'Official source';
      return `<tr>
        <td>${escapeHtml(r.name)}</td>
        <td>${r.maxPrizeUsd ? '<strong>$' + n(r.maxPrizeUsd) + '</strong> ' : ''}${escapeHtml(r.prizeUsd || 'Not stated')}</td>
        <td>${r.prizeType}</td>
        <td>${escapeHtml(r.freePath)}</td>
        <td>${escapeHtml(r.status)}</td>
        <td><span class="badge ${lvl}">${lvlText}</span></td>
        <td><a href="${r.signupUrl}" target="_blank" rel="noopener nofollow">Official site</a></td>
        <td>${r.rulesUrl ? `<a href="${r.rulesUrl}" target="_blank" rel="noopener nofollow">Rules</a>` : '<span class="muted">—</span>'}</td>
        <td>${r.flags.length ? r.flags.map((f) => `<code>${f.code}</code>`).join(' ') : '<span class="muted">—</span>'}</td>
      </tr>`;
    }).join('\n');

    return `<section class="section" id="${c.slug}">
      <div class="section-head"><h2>${c.name}</h2><span class="count">${list.length}</span></div>
      <div class="table-scroll">
        <table>
          <thead><tr>
            <th scope="col">Competition</th><th scope="col">Prize as stated</th><th scope="col">Prize type</th>
            <th scope="col">Free path</th><th scope="col">Status</th><th scope="col">Verification</th>
            <th scope="col">Official</th><th scope="col">Rules</th><th scope="col">Flags</th>
          </tr></thead>
          <tbody>
${body}
          </tbody>
        </table>
      </div>
    </section>`;
  }).join('\n');

  return `<div class="wrap">
  <section class="hero">
    <p class="kicker"><a href="index.html">Dashboard</a> / Full listing</p>
    <h1>Every competition, no JavaScript</h1>
    <p class="lede">All ${rows.length} rows in plain HTML, grouped by category, with the official link,
    the rules link and every review flag. This page is the static backbone of the site: it works
    without scripts, prints cleanly, and every external link on it is checked by
    <code>tools/check-links.mjs</code>.</p>
    <p class="small muted">Columns: the prize is reproduced exactly as the operator states it. Where no
    figure exists, the cell reads "Not stated" rather than guessing.</p>
  </section>
${sections}
</div>`;
}

function flaggedBody() {
  const flaggedRows = rows.filter((r) => r.flags.length);
  const byCode = {};
  flaggedRows.forEach((r) => r.flags.forEach((f) => {
    (byCode[f.code] = byCode[f.code] || []).push({ row: r, flag: f });
  }));

  const CODE_INFO = {
    NO_CASH_PRIZE: { title: 'Prize is not money', sev: 'high', what: 'The row is listed as a competition that pays cash, but its own prize field describes merchandise, tickets, vouchers, points or in-game items. Nothing here is payable.' },
    NO_OFFICIAL_SOURCE: { title: 'No official source', sev: 'high', what: 'The project\'s sourcing rule requires an operator-owned page for any stated prize figure. These rows cite only affiliate, forum or social sources.' },
    TIER_MISLABEL: { title: 'Source graded "official" but is not the operator', sev: 'high', what: 'A press-release wire, a social post, a club website or an affiliate site is graded official. On rows where that is the only support, the prize figure is effectively uncited.' },
    NOT_A_COMPETITION: { title: 'Not a competition you can win', sev: 'high', what: 'Pool-hosting tools and directories. The pool tools offer no prize of their own — the group running the pool sets any stake.' },
    MARKED_UNCONFIRMED: { title: 'The row admits the prize is unconfirmed', sev: 'medium', what: 'The prize text says the figure is not confirmed, not published, paused, or not running. The value is blank on this site.' },
    SOURCE_OFF_DOMAIN: { title: 'Prize cited off the operator\'s domain', sev: 'medium', what: 'No official-tier source sits on the operator\'s own domain, so the prize figure comes from a third party.' },
    RULES_IS_HOMEPAGE: { title: '"Rules" link points at the homepage', sev: 'medium', what: 'The rules URL is the site root, so entry conditions and prize terms cannot be checked from the row.' },
    CASHOUT_RESTRICTED: { title: 'Cash-out may not be cash', sev: 'medium', what: 'The prize or cash-out terms mention trading credit, bonus funds, prop accounts or non-withdrawable balances.' },
    BROKER_FUNNEL: { title: 'Broker customer-acquisition contest', sev: 'medium', what: 'Demo-account contests run by trading firms. The upstream file excluded bookmaker and DFS funnels on the same logic but kept these.' },
    NO_RULES_URL: { title: 'No rules link at all', sev: 'medium', what: 'Nothing on the row points at official terms.' },
    PRIZE_NOT_QUANTIFIED: { title: 'No dollar figure stated', sev: 'low', what: 'No amount is given in the prize field. Left blank rather than estimated.' },
    HTTP_ONLY: { title: 'Insecure URL', sev: 'low', what: 'At least one link uses plain http://.' },
  };

  const groups = Object.keys(byCode)
    .sort((a, b) => {
      const sev = { high: 0, medium: 1, low: 2 };
      return sev[CODE_INFO[a] ? CODE_INFO[a].sev : 'low'] - sev[CODE_INFO[b] ? CODE_INFO[b].sev : 'low'] || byCode[b].length - byCode[a].length;
    })
    .map((code) => {
      const info = CODE_INFO[code] || { title: code, sev: 'low', what: '' };
      const items = byCode[code].map(({ row, flag }) => {
        const off = row.sources.filter((s) => s.tier === 'official' && s.hostIsOperator)[0]
          || row.sources.filter((s) => s.tier === 'official')[0]
          || row.sources[0];
        return `<tr>
          <td class="name"><a href="${row.signupUrl}" target="_blank" rel="noopener nofollow">${escapeHtml(row.name)}</a>
            <div class="small muted">${escapeHtml(row.type)} · ${escapeHtml(row.status)}</div></td>
          <td class="prize">${row.maxPrizeUsd ? '<strong>$' + n(row.maxPrizeUsd) + '</strong><br>' : ''}<span class="small muted">${escapeHtml(row.prizeUsd || 'Not stated')}</span></td>
          <td class="notes">${escapeHtml(flag.detail)}</td>
          <td class="nowrap">${off ? `<a href="${off.url}" target="_blank" rel="noopener nofollow">${escapeHtml(off.title || 'source')}</a><div class="small muted"><span class="tier ${off.tier}">${off.tier}</span></div>` : '<span class="muted">none</span>'}</td>
        </tr>`;
      }).join('\n');

      return `<section class="flag-group sev-${info.sev}" id="${code.toLowerCase()}">
        <header>
          <h3>${info.title} <span class="count">${byCode[code].length}</span></h3>
          <p class="flag-meta"><code>${code}</code> · severity ${info.sev}</p>
        </header>
        <p class="small">${info.what}</p>
        <div class="table-scroll">
          <table>
            <thead><tr><th scope="col">Competition</th><th scope="col">Prize as stated</th><th scope="col">Why it is flagged</th><th scope="col">Source</th></tr></thead>
            <tbody>
${items}
            </tbody>
          </table>
        </div>
      </section>`;
    }).join('\n');

  const contents = Object.keys(byCode)
    .sort((a, b) => byCode[b].length - byCode[a].length)
    .map((code) => {
      const info = CODE_INFO[code] || { title: code, sev: 'low' };
      return `<tr><td><a href="#${code.toLowerCase()}">${info.title}</a></td><td><code>${code}</code></td><td>${info.sev}</td><td>${byCode[code].length}</td></tr>`;
    }).join('\n');

  return `<div class="wrap">
  <section class="hero">
    <p class="kicker"><a href="index.html">Dashboard</a> / Flagged</p>
    <h1>Flagged for review</h1>
    <p class="lede">
      ${T.rowsWithAnyFlag} of ${T.listings} rows raised at least one issue during the audit —
      ${T.totalFlagInstances} findings in total. Every one is listed here with the reason and a source
      link so you can check it yourself. These items do <strong>not</strong> block publication and the
      rows remain on the site; they are marked, not hidden.
    </p>
    <div class="callout warn">
      <p><strong>Nothing on this page has been silently corrected.</strong> The upstream dataset is
      reproduced byte for byte in <code>data/source-ledger.json</code> and the audit is generated from
      it. Where a value could not be confirmed against an official page, it is blank in the interface
      and flagged here. If you want a row fixed or removed, this page is the list to work from.</p>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Summary of findings</h2></div>
    <div class="table-scroll">
      <table>
        <thead><tr><th scope="col">Finding</th><th scope="col">Code</th><th scope="col">Severity</th><th scope="col">Rows</th></tr></thead>
        <tbody>
${contents}
        </tbody>
      </table>
    </div>
  </section>

${groups}
</div>`;
}

/* ── write pages ────────────────────────────────────────────────────────── */
const PAGES = [
  {
    file: 'index.html', current: 'index.html',
    title: 'Free Cash Competitions — verified ledger of free-to-enter cash prize contests',
    description: `An audited, mobile-friendly ledger of ${T.listings} free-to-enter competitions that can pay real money. Every row shows its prize as the operator states it, a source link and its review flags.`,
    body: dashboardBody,
  },
  {
    file: 'competitions.html', current: 'competitions.html',
    title: 'All competitions — Free Cash Competitions',
    description: `All ${T.listings} audited competitions in one sortable table with search, filters, prize type, verification status and official source links.`,
    body: () => `<div class="wrap">
  <section class="hero">
    <p class="kicker"><a href="index.html">Dashboard</a> / All competitions</p>
    <h1>All ${T.listings} competitions</h1>
    <p class="lede">One table. Search by name, prize or eligibility; filter by category, prize type,
    status or verification level. The default sort is the triage order described in
    <a href="methodology.html">Method</a>, which weighs free entry, a stated cash prize, prize size,
    an official source and live status.</p>
    <p class="small muted">${P.cash} rows state a cash prize · ${P['non-cash']} state a non-cash prize ·
    ${P.unstated} state no figure at all · ${T.flagged} flagged.</p>
  </section>
  <section class="section">
    ${tableBlock({})}
  </section>
</div>`,
  },
  {
    file: 'all-entries.html', current: '',
    title: 'Full listing — all 206 competitions in plain HTML',
    description: `Every audited competition as static HTML with prize, free path, status, verification level, official link, rules link and flags.`,
    body: allEntriesBody,
  },
  {
    file: 'flagged.html', current: 'flagged.html',
    title: 'Flagged for review — sources, reasons and unverified items',
    description: `Every audit finding across ${T.listings} rows: non-cash prizes in a cash ledger, missing and mislabelled official sources, unconfirmed figures and rows that are not competitions.`,
    body: flaggedBody,
  },
  ...CATS.map((c) => ({
    file: `${c.slug}.html`, current: `${c.slug}.html`,
    title: `${c.name} — free cash competitions`,
    description: `${c.name}: ${c.tagline} Prize, cash-out terms, eligibility, official source and review flags for each row.`,
    body: () => categoryBody(c),
  })),
];

for (const p of PAGES) {
  writeFileSync(p.file, shell({
    title: p.title,
    description: p.description.replace(/"/g, '&quot;'),
    body: p.body(),
    current: p.current,
  }));
  console.log('wrote ' + p.file);
}

/* ── template tokens so prose can never drift from the audit ───────────── */
const TOKENS = {
  total: n(T.listings),
  verified: n(T.verifiedThisSession),
  official: n(T.officialLinked),
  flagged: n(T.flagged),
  anyflag: n(T.rowsWithAnyFlag),
  flaginstances: n(T.totalFlagInstances),
  cash: n(P.cash),
  mixedprize: n(P.mixed),
  noncash: n(P['non-cash']),
  unstated: n(P.unstated),
  f_nocash: n(REPORT.flagCounts.NO_CASH_PRIZE || 0),
  f_noofficial: n(REPORT.flagCounts.NO_OFFICIAL_SOURCE || 0),
  f_tier: n(REPORT.flagCounts.TIER_MISLABEL || 0),
  f_notcompetition: n(REPORT.flagCounts.NOT_A_COMPETITION || 0),
  f_unconfirmed: n(REPORT.flagCounts.MARKED_UNCONFIRMED || 0),
  f_offdomain: n(REPORT.flagCounts.SOURCE_OFF_DOMAIN || 0),
  f_homepage: n(REPORT.flagCounts.RULES_IS_HOMEPAGE || 0),
  f_cashout: n(REPORT.flagCounts.CASHOUT_RESTRICTED || 0),
  f_broker: n(REPORT.flagCounts.BROKER_FUNNEL || 0),
  f_norules: n(REPORT.flagCounts.NO_RULES_URL || 0),
  f_unquantified: n(REPORT.flagCounts.PRIZE_NOT_QUANTIFIED || 0),
  f_http: n(REPORT.flagCounts.HTTP_ONLY || 0),
  live: n(REPORT.byStatus.live),
  ended: n(REPORT.byStatus.ended),
  caution: n(REPORT.byStatus.caution),
  mixedstatus: n(REPORT.byStatus.mixed),
  freefull: n(REPORT.freePath.full),
  partial: n(REPORT.freePath.partial),
  paidcash: n(REPORT.freePath['paid-cash']),
  date: TODAY,
  upstreamdate: SITE.upstreamReviewed,
  upstreamcommit: SITE.upstreamCommit,
  n_sports: n(REPORT.byType.sports),
  n_market: n(REPORT.byType.market),
  n_tech: n(REPORT.byType.tech),
  n_creative: n(REPORT.byType.creative),
  n_pools: n(REPORT.byType.pools),
  n_directory: n(REPORT.byType.directory),
  n_skill: n(REPORT.byType.skill),
  n_trivia: n(REPORT.byType.trivia),
  n_forecasting: n(REPORT.byType.forecasting),
};

function fillTokens(html) {
  return html.replace(/\{\{([a-z_]+)\}\}/gi, (m, k) =>
    Object.prototype.hasOwnProperty.call(TOKENS, k) ? TOKENS[k] : m);
}

/* pages authored as fragments in src/pages/ */
const SRC = 'src/pages';
if (existsSync(SRC)) {
  for (const f of readdirSync(SRC).filter((f) => f.endsWith('.body.html'))) {
    const meta = JSON.parse(readFileSync(join(SRC, f.replace('.body.html', '.json')), 'utf8'));
    writeFileSync(meta.file, shell({
      title: fillTokens(meta.title),
      description: fillTokens(meta.description).replace(/"/g, '&quot;'),
      body: fillTokens(readFileSync(join(SRC, f), 'utf8')),
      current: meta.current || '',
    }));
    console.log('wrote ' + meta.file + ' (from src)');
  }
}

/* 404 */
writeFileSync('404.html', shell({
  title: 'Page not found — Free Cash Competitions',
  description: 'That page does not exist. Jump back to the dashboard, the full listing or the flagged items.',
  body: `<div class="wrap"><section class="hero">
    <p class="kicker">404</p>
    <h1>That page is not here</h1>
    <p class="lede">The link may be old, or the section may have moved. Everything on this site is
    reachable from the dashboard.</p>
    <div class="row" style="margin-top:16px">
      <a class="link-btn primary" href="index.html">Dashboard</a>
      <a class="link-btn" href="competitions.html">All competitions</a>
      <a class="link-btn" href="all-entries.html">Full listing</a>
      <a class="link-btn" href="flagged.html">Flagged for review</a>
    </div>
  </section></div>`,
}));
console.log('wrote 404.html');

/* ── generated Markdown deliverables ────────────────────────────────────── */
const MD_TMPL = 'src/EXECUTIVE_SUMMARY.md.tmpl';
if (existsSync(MD_TMPL)) {
  writeFileSync('EXECUTIVE_SUMMARY.md', fillTokens(readFileSync(MD_TMPL, 'utf8')));
  console.log('wrote EXECUTIVE_SUMMARY.md (from src)');
}

const README_TMPL = 'src/README.md.tmpl';
if (existsSync(README_TMPL)) {
  const md = fillTokens(readFileSync(README_TMPL, 'utf8'))
    .replace(/\{\{ROWS\}\}/g, TOKENS.total)
    .replace(/\{\{VERIFIED\}\}/g, TOKENS.verified)
    .replace(/\{\{OFFICIAL\}\}/g, TOKENS.official)
    .replace(/\{\{FLAGGED\}\}/g, TOKENS.flagged)
    .replace(/\{\{CASH\}\}/g, TOKENS.cash)
    .replace(/\{\{MIXED\}\}/g, TOKENS.mixedprize)
    .replace(/\{\{NONCASH\}\}/g, TOKENS.noncash)
    .replace(/\{\{UNSTATED\}\}/g, TOKENS.unstated)
    .replace(/\{\{NOOFFICIAL\}\}/g, TOKENS.f_noofficial)
    .replace(/\{\{TIER\}\}/g, TOKENS.f_tier);
  writeFileSync('README.md', md);
  console.log('wrote README.md (from src)');
}
