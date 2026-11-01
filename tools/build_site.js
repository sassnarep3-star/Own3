#!/usr/bin/env node
// Static site generator. Reads data/competitions.json, data/stats.json, data/bestbets.json, data/verification.json
// and writes the HTML pages at the repository root and in categories/. No dependencies.
const fs = require('fs');
const path = require('path');
const { ROOT } = require('./lib');

const D = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/competitions.json'), 'utf8'));
const S = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/stats.json'), 'utf8'));
const B = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/bestbets.json'), 'utf8'));
const V = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/verification.json'), 'utf8'));
const ASOF = V._meta.checkedOn;
const REPO_URL = 'https://github.com/sassnarep3-star/Own3';
const UP_REPO = D.provenance.referenceRepository;
const UP_COMMIT = D.provenance.sourceCommit;

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const byId = Object.fromEntries(D.listings.map(l => [l.id, l]));
const LEVEL_ORDER = { verified: 0, partial: 1, contradicted: 2, unverified: 3 };
const LEVEL_TEXT = { verified: 'Verified', partial: 'Partial', contradicted: 'Contradicted', unverified: 'Unverified' };
const STATUS_TEXT = { open: 'Open', ended: 'Ended', closed: 'Closed', upcoming: 'Opens soon', unconfirmed: 'Status not confirmed' };
const tableRows = D.listings.filter(l => !l.quarantined);
const quarantined = D.listings.filter(l => l.quarantined);
const counts = { total: D.listings.length, checked: D.listings.filter(l => l.verificationLevel !== 'unverified').length };
['verified', 'partial', 'contradicted', 'unverified'].forEach(k => counts[k] = D.listings.filter(l => l.verificationLevel === k).length);
counts.quarantined = quarantined.length;
counts.inTables = tableRows.length;
counts.withPrize = D.listings.filter(l => l.prize).length;
const FLAG_ORDER = ['CONTRADICTED', 'NO_OFFICIAL_SOURCE', 'THIRD_PARTY_OFFICIAL', 'SIGNUP_THIRD_PARTY', 'SIGNUP_DOMAIN_MISMATCH', 'ENDED_UPSTREAM', 'CAUTION_UPSTREAM', 'NON_CASH_OR_MIXED', 'NON_USD', 'SHARED_URL', 'NON_HTTPS', 'STALE'];
const FLAG_TITLE = {
  CONTRADICTED: 'Official page differs from the upstream ledger on at least one field (9 rows contradicted outright; others noted)',
  NO_OFFICIAL_SOURCE: 'No usable official source (row quarantined)',
  THIRD_PARTY_OFFICIAL: 'Upstream labels a third-party site as "official"',
  SIGNUP_THIRD_PARTY: 'Upstream "Official site" button points to a third-party site',
  SIGNUP_DOMAIN_MISMATCH: 'Upstream "Official site" domain differs from its official source domain',
  ENDED_UPSTREAM: 'Upstream itself marks the entry ended',
  CAUTION_UPSTREAM: 'Upstream marks the entry "caution"',
  NON_CASH_OR_MIXED: 'Prize text mentions non-cash items though stamped "Free USD path"',
  NON_USD: 'Prize text uses a non-USD currency (field is named prizeUsd)',
  SHARED_URL: 'Several rows share one signup URL',
  NON_HTTPS: 'Signup link is not HTTPS',
  STALE: 'Upstream last-checked date is older than 60 days'
};
const flagCount = c => D.listings.filter(l => l.flags.some(f => f.code === c)).length;

// ---------------- layout ----------------
function page({ file, title, desc, body, active, extraClass = '' }) {
  const depth = file.split('/').length - 1;
  const r = depth ? '../' : '';
  const nav = [
    ['index.html', 'Dashboard', 'home'], ['best-bets.html', 'Best bets', 'best'], ['all-entries.html', 'All entries', 'all'],
    ['analysis.html', 'Analysis', 'analysis'], ['executive-summary.html', 'Executive summary', 'summary'],
    ['flagged-for-review.html', `Flagged for review`, 'flagged'], ['method.html', 'Method & sources', 'method']
  ].map(([h, t, k]) => `<a href="${r}${h}"${active === k ? ' aria-current="page"' : ''}>${t}${k === 'flagged' ? ` <span class="nav-count">${counts.contradicted + counts.quarantined}+</span>` : ''}</a>`).join('');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${esc(desc)}">
<title>${esc(title)} — Prize Scout</title>
<link rel="stylesheet" href="${r}assets/css/site.css">
</head>
<body class="${extraClass}">
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <a class="brand" href="${r}index.html"><span class="brand-mark">PS</span><span><strong>Prize Scout</strong><small>Free-entry cash competitions · verified from official sources</small></span></a>
  <nav aria-label="Main navigation">${nav}</nav>
</header>
<main id="main" class="shell">
${body}
</main>
<footer class="site-footer"><div class="shell footer-inner">
<span>Independent research · not affiliated with any listed operator · data as of ${ASOF}</span>
<span><a href="${r}flagged-for-review.html">Flagged for review</a> · <a href="${r}method.html">Method</a> · <a href="${r}data/competitions.json">Data (JSON)</a> · <a href="${REPO_URL}">Repo</a></span>
</div></footer>
<script src="${r}assets/js/app.js" defer></script>
</body>
</html>
`;
  const out = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

const badge = (l) => `<span class="badge lvl-${l.verificationLevel}">${LEVEL_TEXT[l.verificationLevel]}</span>`;
const statusBadge = (l) => l.status ? `<span class="badge st-${l.status}">${STATUS_TEXT[l.status]}</span>` : '';
const cell = (label, v, cls = '') => v ? `<td data-label="${label}" class="${cls}">${v}</td>` : `<td data-label="${label}" class="blank ${cls}"></td>`;
const extLink = (u, t) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} <span aria-hidden="true">↗</span></a>`;

function detailsFor(l, r) {
  const parts = [];
  if (l.notes && l.notes.length) parts.push(`<p class="dh">Notes from the official-source check</p><ul>${l.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>`);
  const contra = l.flags.filter(f => f.code === 'CONTRADICTED');
  if (contra.length) parts.push(`<p class="dh">Contradictions found</p><ul>${contra.map(f => `<li>${esc(f.text)}</li>`).join('')}</ul>`);
  const other = l.flags.filter(f => !['CONTRADICTED', 'STALE'].includes(f.code));
  if (other.length) parts.push(`<p class="dh">Automatic flags</p><ul>${other.map(f => `<li>${esc(f.text)}</li>`).join('')}</ul>`);
  if (l.unverifiedFields.length) parts.push(`<p class="dh">Unverified (left blank)</p><p>${l.unverifiedFields.map(f => ({ freeEntry: 'free entry', prize: 'prize', eligibility: 'eligibility', dates: 'dates', status: 'status' }[f])).join(', ')}</p>`);
  if (!parts.length) return '';
  const n = (l.notes ? l.notes.length : 0) + contra.length + other.length;
  return `<details class="more"><summary>Notes &amp; flags${n ? ` (${n})` : ''}</summary>${parts.join('')}</details>`;
}

function entryTable(list, { showCat = false, r = '' } = {}) {
  const sorted = [...list].sort((a, b) => LEVEL_ORDER[a.verificationLevel] - LEVEL_ORDER[b.verificationLevel] || a.name.localeCompare(b.name));
  const head = `<tr><th scope="col">Competition</th>${showCat ? '<th scope="col">Category</th>' : ''}<th scope="col">Prize <small>(verified)</small></th><th scope="col">Free entry <small>(verified)</small></th><th scope="col">Dates &amp; status <small>(verified)</small></th><th scope="col">Eligibility <small>(verified)</small></th><th scope="col">Verification</th><th scope="col">Official source</th></tr>`;
  const rows = sorted.map(l => {
    const when = (l.status ? statusBadge(l) : '') + (l.dates ? `<div>${esc(l.dates)}</div>` : '');
    const src = l.official ? `${extLink(l.official.url, l.official.checked ? 'Page checked' : (l.official.kind === 'operator-site' ? 'Operator site (unchecked)' : 'Official link (unchecked)'))}<small>${esc(l.official.label)}</small>` : '';
    return `<tr data-level="${l.verificationLevel}" data-cat="${l.category}" data-search="${esc((l.name + ' ' + l.categoryName).toLowerCase())}">
<th scope="row" data-label="Competition"><span class="nm">${esc(l.name)}</span>${detailsFor(l)}</th>
${showCat ? `<td data-label="Category"><a href="${r}categories/${l.category}.html">${esc(l.categoryName)}</a></td>` : ''}
${cell('Prize', l.prize ? esc(l.prize) : '', 'prize')}
${cell('Free entry', l.freeEntry ? esc(l.freeEntry) : '')}
${cell('Dates & status', when)}
${cell('Eligibility', l.eligibility ? esc(l.eligibility) : '')}
<td data-label="Verification">${badge(l)}${l.checkedOn ? `<small>checked ${l.checkedOn}</small>` : '<small>not yet checked</small>'}</td>
<td data-label="Official source" class="src">${src}</td>
</tr>`;
  }).join('\n');
  return `<div class="filters" role="search">
<label class="grow">Search<input type="search" id="q" placeholder="Name or category" autocomplete="off"></label>
<label>Show<select id="vf"><option value="">All rows</option><option value="checked">Checked against official page</option><option value="verified">Fully verified only</option><option value="unverified">Unverified only</option></select></label>
<span class="count" id="count" aria-live="polite"></span>
</div>
<div class="table-wrap"><table class="grid responsive" id="grid"><thead>${head}</thead><tbody>
${rows}
</tbody></table></div>
<p class="foot">A blank cell means <b>unverified</b>: the value could not be confirmed on an official page, so nothing was filled in. Rows are sorted verified-first.</p>`;
}

// ---------------- pages ----------------
function pct(n, d) { return Math.round(100 * n / d); }

function kpi(num, label, cls = '') { return `<div class="kpi ${cls}"><b>${num}</b><span>${label}</span></div>`; }

function bestBetRows(tier, limit) {
  return B.picks.filter(p => p.tier === tier).slice(0, limit || 99).map(p => {
    const l = byId[p.id];
    return `<tr data-search="${esc(l.name.toLowerCase())}">
<th scope="row" data-label="Competition"><span class="nm">${esc(l.name)}</span><small class="cat"><a href="categories/${l.category}.html">${esc(l.categoryName)}</a></small></th>
<td data-label="Prize (verified)" class="prize">${esc(p.prizeShort)}</td>
<td data-label="Free entry">${l.freeEntry ? esc(l.freeEntry) : '<span class="muted">Not stated on page read</span>'}</td>
<td data-label="When (official page)">${esc(p.whenLabel)}</td>
<td data-label="Analyst note"><span class="note">${esc(p.note)}</span></td>
<td data-label="Official source" class="src">${extLink(l.official.url, 'Official page')}<small>${esc(l.official.label)}</small></td>
</tr>`;
  }).join('\n');
}
function bestTable(tier, limit) {
  return `<div class="table-wrap"><table class="grid responsive"><thead><tr><th scope="col">Competition</th><th scope="col">Prize <small>(verified)</small></th><th scope="col">Free entry <small>(official page)</small></th><th scope="col">When <small>(official page)</small></th><th scope="col">Analyst note <small>(judgment)</small></th><th scope="col">Official source</th></tr></thead><tbody>
${bestBetRows(tier, limit)}
</tbody></table></div>`;
}

// ---- index ----
function buildIndex() {
  const closing = B.picks.filter(p => p.deadline && p.tier !== 'C' || p.id === 'nascar-fantasy-live').sort((a, b) => (a.deadline || '9').localeCompare(b.deadline || '9')).slice(0, 6);
  const cats = D.categories.map(c => {
    const rows = D.listings.filter(l => l.category === c.id);
    const chk = rows.filter(l => l.verificationLevel !== 'unverified').length;
    return `<a class="cat-card" href="categories/${c.id}.html"><h3>${esc(c.name)}</h3><p>${esc(c.description)}</p><div class="cat-meta"><span><b>${rows.length}</b> entries</span><span><b>${chk}</b> checked</span></div></a>`;
  }).join('');
  const body = `
<section class="hero">
  <div class="eyebrow">Dashboard · data as of ${ASOF}</div>
  <h1>Find free-entry cash competitions worth your time.</h1>
  <p class="hero-copy">${counts.total} competitions collected from the Free Money &amp; Contest Ledger, re-checked against each operator's <b>own</b> page. Where a value could not be confirmed on an official page it is left <b>blank and flagged unverified</b> — never guessed.</p>
  <div class="cta"><a class="btn primary" href="best-bets.html">See best bets</a><a class="btn" href="all-entries.html">Browse all entries</a><a class="btn" href="flagged-for-review.html">Flagged for review</a></div>
  <div class="kpis">
    ${kpi(counts.total, 'competitions collected')}
    ${kpi(counts.checked, 'checked on official pages')}
    ${kpi(counts.verified, 'fully verified', 'good')}
    ${kpi(counts.contradicted, 'contradicted by their own site', 'bad')}
    ${kpi(counts.unverified, 'still unverified (blank)', 'warn')}
  </div>
</section>

<section>
  <div class="sec-head"><div><div class="eyebrow">Start here</div><h2>Best bets right now</h2></div><a class="back" href="best-bets.html">All best bets →</a></div>
  <p class="lead">Open now, cash prize read from the official page, and free entry stated on that page. Headline prize is not expected value — odds were not published.</p>
  ${bestTable('A', 5)}
</section>

<section>
  <div class="sec-head"><div><div class="eyebrow">Time-sensitive</div><h2>Dates to watch</h2></div></div>
  <ul class="watch">${closing.map(p => `<li><b>${esc(byId[p.id].name)}</b> — ${esc(p.whenLabel)} <a href="${esc(byId[p.id].official.url)}" target="_blank" rel="noopener noreferrer">official page ↗</a></li>`).join('')}</ul>
</section>

<section id="categories">
  <div class="sec-head"><div><div class="eyebrow">Browse</div><h2>By category</h2></div></div>
  <div class="cat-grid">${cats}</div>
</section>

<section class="two">
  <div class="panel"><h2>How to read this site</h2>
  <ul>
  <li><span class="badge lvl-verified">Verified</span> free entry, prize and open status were all read on the official page.</li>
  <li><span class="badge lvl-partial">Partial</span> some fields read; the rest are blank.</li>
  <li><span class="badge lvl-contradicted">Contradicted</span> the official page disagrees with the old ledger (fee, ended, wrong figure, dead link).</li>
  <li><span class="badge lvl-unverified">Unverified</span> not checked yet — prize, entry, dates, eligibility are blank.</li>
  </ul></div>
  <div class="panel"><h2>What is flagged</h2>
  <p>${counts.contradicted} rows contradict their own official page, ${counts.quarantined} rows have no usable official source and are held out of the tables, and ${flagCount('ENDED_UPSTREAM')} rows were already marked ended by the old ledger.</p>
  <p><a class="btn small" href="flagged-for-review.html">Open the Flagged for Review page</a></p></div>
</section>`;
  page({ file: 'index.html', title: 'Dashboard', desc: 'Free-entry cash-prize competitions, verified against official sources; unverified values left blank.', body, active: 'home' });
}

// ---- best bets ----
function buildBest() {
  const body = `
<div class="eyebrow">Shortlist · data as of ${ASOF}</div>
<h1>Best bets</h1>
<p class="lead">The competitions worth your time <b>today</b>, using only facts read from official pages. This is a shortlist, not a promise of winnings.</p>
<div class="panel"><h2>How these were chosen</h2><ol>${B._meta.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ol></div>

<h2 class="tier">Tier A — free entry stated on the official page · open now</h2>
${bestTable('A')}
<h2 class="tier">Tier B — prize and open status confirmed · entry fee not stated on the page read</h2>
<p class="foot">Larger prizes, mostly code/ML competitions. Read each competition's own rules for entry terms, AI-tool policy and team size before investing time.</p>
${bestTable('B')}
<h2 class="tier">Tier C — free entry confirmed · prize or open status not confirmed</h2>
${bestTable('C')}

<div class="panel warn"><h2>Cautions that apply to every row</h2><ul>
<li>Prizes are headline figures. Win odds, field sizes, tax withholding and payout timing were not on the pages read.</li>
<li><b>AI-agent use:</b> only one official rule was read that addresses AI — Winning Writers (Wergle Flomp) forbids AI-generated text. Every other competition's AI-tool policy is <b>unverified</b>; check the rules before using an agent.</li>
<li>Tax treatment, payout timing and any ID or KYC requirements were not reviewed for most rows. Read each operator's rules.</li>
<li>Rows whose official page shows the contest ended, closed or charges a fee (e.g. Tom Howard poetry, EWC Play, TradingView Leap) are <b>excluded</b> from this list. Where only the figures differed from the old ledger (CheckMate, FundedFast), the official page's figures are used. See <a href="flagged-for-review.html">Flagged for Review</a>.</li>
</ul></div>`;
  page({ file: 'best-bets.html', title: 'Best bets', desc: 'Shortlist of open competitions with verified prizes, ranked transparently.', body, active: 'best' });
}

// ---- all entries ----
function buildAll() {
  const body = `
<div class="eyebrow">Register · ${counts.inTables} entries</div>
<h1>All entries</h1>
<p class="lead">Every collected competition that has an official source link (${counts.inTables} of ${counts.total}). ${counts.quarantined} rows with no usable official link are held out and listed on the <a href="flagged-for-review.html#quarantined">Flagged for Review</a> page.</p>
${entryTable(tableRows, { showCat: true, r: '' })}`;
  page({ file: 'all-entries.html', title: 'All entries', desc: 'Searchable table of all collected competitions with verification status.', body, active: 'all' });
}

// ---- categories ----
function buildCategories() {
  D.categories.forEach(c => {
    const all = D.listings.filter(l => l.category === c.id);
    const rows = all.filter(l => !l.quarantined);
    const q = all.filter(l => l.quarantined);
    const chk = all.filter(l => l.verificationLevel !== 'unverified').length;
    const tabs = D.categories.map(x => `<a href="${x.id}.html"${x.id === c.id ? ' aria-current="page"' : ''}>${esc(x.name)}</a>`).join('');
    const body = `
<div class="crumb"><a href="../index.html">Dashboard</a> / ${esc(c.name)}</div>
<nav class="tabs" aria-label="Categories">${tabs}</nav>
<h1>${esc(c.name)}</h1>
<p class="lead">${esc(c.description)} <span class="muted">(Category description from the upstream ledger.)</span></p>
<div class="kpis small">${kpi(all.length, 'entries')}${kpi(chk, 'checked on official pages')}${kpi(all.length - chk, 'unverified (blank)', 'warn')}${q.length ? kpi(q.length, 'held out (no official link)', 'bad') : ''}</div>
${entryTable(rows, { r: '../' })}
${q.length ? `<p class="foot">Held out of this table (no usable official source): ${q.map(l => esc(l.name)).join(', ')}. See <a href="../flagged-for-review.html#quarantined">Flagged for Review</a>.</p>` : ''}`;
    page({ file: `categories/${c.id}.html`, title: c.name, desc: `${c.name}: competitions with verification status and official source links.`, body, active: 'home' });
  });
}

// ---- analysis ----
function bar(n, d, cls) { return `<div class="bar"><span class="${cls}" style="width:${Math.max(2, pct(n, d))}%"></span></div>`; }
function buildAnalysis() {
  const h = S.headline;
  const typeRows = D.categories.map(c => {
    const rs = D.listings.filter(l => l.category === c.id);
    const ch = rs.filter(l => l.verificationLevel !== 'unverified').length;
    const pz = rs.filter(l => l.prize).length;
    return `<tr><th scope="row" data-label="Category"><a href="categories/${c.id}.html">${esc(c.name)}</a></th><td data-label="Entries">${rs.length}</td><td data-label="Share of ledger">${pct(rs.length, counts.total)}%</td><td data-label="Checked">${ch}</td><td data-label="With verified prize">${pz}</td></tr>`;
  }).join('');
  const contra = D.listings.filter(l => l.verificationLevel === 'contradicted');
  const body = `
<div class="eyebrow">Findings · data as of ${ASOF}</div>
<h1>Analysis &amp; findings</h1>
<p class="lead">What the official-source re-check found, and how the old ledger's headline numbers hold up. Counts of upstream claims are labelled as such — they are the old ledger's own labels, not verified facts.</p>

<h2>1. Verification coverage</h2>
<div class="kpis">${kpi(counts.checked + ' / ' + counts.total, 'rows checked on an official page')}${kpi(counts.verified, 'fully verified', 'good')}${kpi(counts.partial, 'partially verified')}${kpi(counts.contradicted, 'contradicted', 'bad')}${kpi(counts.unverified, 'unverified (blank)', 'warn')}</div>
${bar(counts.checked, counts.total, 'fill-ok')}
<p class="foot">${pct(counts.checked, counts.total)}% of rows have been read against an official page. The checked rows are the most prominent entries (large prizes, widely shared platforms, headline examples); the remaining ${counts.unverified} stay blank until checked.</p>

<h2>2. What the official pages said (vs. the old ledger)</h2>
<p>Of ${counts.checked} rows checked, <b>${counts.contradicted}</b> contradicted the old ledger on a material point (${pct(counts.contradicted, counts.checked)}%). All nine:</p>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Old ledger said</th><th>Official page says</th><th>Source</th></tr></thead><tbody>
${contra.map(l => { const d = l.flags.filter(f => f.code === 'CONTRADICTED').map(f => f.text); const dd = (V.entries[l.id].discrepancies || [])[0] || {}; return `<tr><th scope="row" data-label="Competition">${esc(l.name)}</th><td data-label="Old ledger said">${esc(dd.upstream || '')}</td><td data-label="Official page says">${esc(dd.official || '')}</td><td data-label="Source" class="src">${extLink(l.official.url, 'Official page')}</td></tr>`; }).join('\n')}
</tbody></table></div>

<h2 id="headline-numbers">3. Do the old ledger's headline numbers hold up?</h2>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Old headline</th><th>What the data file shows</th><th>Issue</th></tr></thead><tbody>
<tr><th scope="row" data-label="Old headline">"189 true free paths"</th><td data-label="Data file shows">${h.upstreamFree189} rows stamped "full" free path; <b>${h.upstreamFreeAndEnded}</b> of them are also marked ended and <b>${h.upstreamFreeAndCaution}</b> marked caution.</td><td data-label="Issue">The headline counts ended and cautioned entries as "true free". The Tom Howard poetry contest (stamped "full") charges a $27 fee, so the stamp is not reliable.</td></tr>
<tr><th scope="row" data-label="Old headline">Free "USD path"</th><td data-label="Data file shows">${flagCount('NON_CASH_OR_MIXED')} rows stamped "full" mention non-cash items (trips, vouchers, gift cards, equipment…) in their prize text; ${flagCount('NON_USD')} rows use non-USD currency in a field named "prizeUsd".</td><td data-label="Issue">The "Free USD path" label overstates cash prizes. (Keyword match on the old text — a flag for review, not a verdict per row.)</td></tr>
<tr><th scope="row" data-label="Old headline">"62 iOS options"</th><td data-label="Data file shows">${h.upstreamIos62} rows list iOS and are not ended, but only ${h.listingsWithIosUrl} rows carry an App Store link.</td><td data-label="Issue">Most "iOS" labels are not backed by a store link. The old page's script also renders every non-iOS platform (including ${h.listingsListingAndroid} that list Android) as "Browser".</td></tr>
<tr><th scope="row" data-label="Old headline">"60 added this pass"</th><td data-label="Data file shows">The counter reads the length of the pass-C list (${h.addedThisPassCLength}); the data file's latest pass (S) lists 10 additions.</td><td data-label="Issue">The "added" counter is stale relative to the pass it names.</td></tr>
<tr><th scope="row" data-label="Old headline">Last checked 2026-08-19</th><td data-label="Data file shows">All ${counts.total} rows carry the same date, 74 days before this review.</td><td data-label="Issue">Seasonal contests change quickly; several verified rows contradict a 2026-08-19 "live" status.</td></tr>
</tbody></table></div>

<h2>4. Source quality</h2>
<ul>
<li><b>${flagCount('THIRD_PARTY_OFFICIAL')} rows</b> have a source the old ledger tags "official" that sits on a third-party domain (press-release wires, news sites, social posts, aggregators). These are not accepted as official links here.</li>
<li><b>${counts.quarantined} rows</b> have no usable official source and are held out of the tables (listed on the Flagged page). Another ${D.listings.filter(l => l.official && l.official.kind === 'operator-site').length} rows are shown with the operator's own site as an <em>unchecked</em> link only.</li>
<li><b>${flagCount('SHARED_URL')} rows</b> share a signup URL with other rows (11 third-party FPL league listings all point to fantasy.premierleague.com), so that link is the platform, not the league.</li>
<li>${flagCount('SIGNUP_DOMAIN_MISMATCH')} rows' "Official site" button is on a different domain than the row's own official source.</li>
</ul>

<h2>5. Where the ledger's weight sits</h2>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Category</th><th>Entries</th><th>Share</th><th>Checked</th><th>With verified prize</th></tr></thead><tbody>${typeRows}</tbody></table></div>
<p class="foot">Sports picks dominate the old ledger (${S.byType.sports} of ${counts.total}). Counts are of the ledger's own category labels.</p>

<h2>6. Review of the source site and repository</h2>
<ul>
<li><b>Usability.</b> The old site's home page renders all ${counts.total} entries as expanded cards on one page and states "No search box, no filters". Our fetch of the page text spans 28 chunks. We did not test it on physical phones, so mobile defects are not itemised — the structural cause (very long single page, no filtering) is.</li>
<li><b>Contradictory documents.</b> Its review page says the ledger "runs to 119 listings" while the data and README say ${counts.total}; it also lists Reddit threads (r/beermoney, r/sweepstakes, r/FantasyPL, r/EarnExtraIncome) among its sources, although its own README source-tier table says forum/Reddit is "context only". (Older documents such as <code>100_VERIFIED_CONTESTS.md</code> are clearly labelled superseded upstream and are not counted as an irregularity.)</li>
<li><b>Links.</b> Broken or dead links found: Zindi's rules link (HTTP 404) and Challenge.gov (platform sunset 2026-03-30). Reachability of the remaining external links could not be tested from this environment — see the method page.</li>
<li><b>Source repo pinned at</b> <a href="${UP_REPO}/commit/${UP_COMMIT}">${UP_COMMIT.slice(0, 7)}</a>; a copy of its data file is in <code>data/upstream/data.js</code> (SHA-256 recorded in <code>data/competitions.json</code>).</li>
</ul>

<h2>7. Implications for an AI-assisted entrant</h2>
<ul>
<li>The largest <em>verified</em> prizes are in code/ML and hackathon competitions (Kaggle, ARC Prize, DrivenData, Devpost). Those are where an AI coding agent is most plausibly useful — but the AI-tool policy of each is <b>unverified</b>.</li>
<li>Judged creative contests may forbid AI: Winning Writers' official rules prohibit AI-generated text.</li>
<li>Pick'em contests (ESPN, CBS) have large verified prize pools but also large public fields; no odds were published on the pages read, so their expected value is unknown.</li>
</ul>`;
  page({ file: 'analysis.html', title: 'Analysis & findings', desc: 'Findings from the official-source re-check and a review of the original ledger.', body, active: 'analysis' });
}

// ---- flagged ----
function buildFlagged() {
  const contraRows = D.listings.filter(l => l.verificationLevel === 'contradicted');
  const thirdParty = D.listings.filter(l => l.flags.some(f => f.code === 'THIRD_PARTY_OFFICIAL'));
  const flagSummary = FLAG_ORDER.map(c => `<tr><th scope="row" data-label="Flag"><a href="#${{ CONTRADICTED: 'contradicted', NO_OFFICIAL_SOURCE: 'quarantined', STALE: 'summary' }[c] || 'f-' + c}">${esc(FLAG_TITLE[c])}</a></th><td data-label="Rows">${flagCount(c)}</td></tr>`).join('');
  const flagSections = FLAG_ORDER.filter(c => !['CONTRADICTED', 'NO_OFFICIAL_SOURCE', 'STALE'].includes(c)).map(c => {
    const rs = D.listings.filter(l => l.flags.some(f => f.code === c));
    return `<details id="f-${c}" class="fold"><summary><b>${esc(FLAG_TITLE[c])}</b> — ${rs.length} rows</summary>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Why flagged</th><th>Link</th></tr></thead><tbody>${rs.map(l => `<tr><th scope="row" data-label="Competition">${esc(l.name)}</th><td data-label="Why flagged">${esc(l.flags.find(f => f.code === c).text)}</td><td data-label="Link" class="src">${l.official ? extLink(l.official.url, l.official.checked ? 'Page checked' : 'Official link (unchecked)') : '<span class="muted">none</span>'}</td></tr>`).join('')}</tbody></table></div></details>`;
  }).join('\n');
  const qRows = quarantined.map(l => {
    const reasons = l.flags.filter(f => ['THIRD_PARTY_OFFICIAL', 'SIGNUP_THIRD_PARTY', 'SHARED_URL', 'SIGNUP_DOMAIN_MISMATCH', 'NON_HTTPS'].includes(f.code)).map(f => f.text);
    const links = l.upstream.sources.map(s => /^https:/.test(s.url) ? `${s.tier}: ${extLink(s.url, new URL(s.url).hostname.replace(/^www\./, ''))}` : `${s.tier}: <code>${esc(s.url)}</code> (HTTP only — shown as text, not linked)`).join('<br>');
    return `<tr><th scope="row" data-label="Competition">${esc(l.name)}<small class="cat">${esc(l.categoryName)}</small></th><td data-label="Why held out">${reasons.length ? reasons.map(esc).join('<br>') : 'No official source on an operator domain.'}</td><td data-label="Sources the old ledger cites (not accepted as official)" class="src">${links}</td></tr>`;
  }).join('');
  const body = `
<div class="eyebrow">Flagged for Review · data as of ${ASOF}</div>
<h1>Flagged for Review</h1>
<p class="lead">Everything that could not be confirmed, or that the official sources contradict. Flagged items do not block the site; they are published here with source links so they can be reviewed and corrected. <b>Nothing on this page has been silently dropped.</b></p>
<div class="kpis">${kpi(counts.contradicted, 'contradicted by official page', 'bad')}${kpi(counts.quarantined, 'held out (no official link)', 'bad')}${kpi(counts.unverified, 'unverified rows (blank)', 'warn')}${kpi(flagCount('THIRD_PARTY_OFFICIAL'), 'third-party "official" labels', 'warn')}</div>

<h2 id="summary">A. Flag summary</h2>
<div class="table-wrap"><table class="grid responsive narrow"><thead><tr><th>Flag</th><th>Rows</th></tr></thead><tbody>${flagSummary}</tbody></table></div>
<p class="foot">The "last-checked older than 60 days" flag applies to all ${counts.total} rows (every upstream row says 2026-08-19, 74 days before ${ASOF}); it is shown in the table above but not repeated per row.</p>

<h2 id="contradicted">B. Contradicted by an official source (${contraRows.length})</h2>
<p>Each row below was read on an official page on ${ASOF}. Review the linked page to confirm.</p>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Field</th><th>Old ledger said</th><th>Official page says</th><th>Source</th></tr></thead><tbody>
${contraRows.map(l => V.entries[l.id].discrepancies.map((d, i) => `<tr><th scope="row" data-label="Competition">${i === 0 ? esc(l.name) : ''}</th><td data-label="Field">${esc(d.field)}</td><td data-label="Old ledger said">${esc(d.upstream)}</td><td data-label="Official page says">${esc(d.official)}</td><td data-label="Source" class="src">${i === 0 ? extLink(l.official.url, 'Official page') : ''}</td></tr>`).join('')).join('\n')}
</tbody></table></div>
<p class="foot">Also noted: ${D.listings.filter(l => l.verificationLevel !== 'contradicted' && V.entries[l.id] && V.entries[l.id].discrepancies.length).map(l => esc(l.name)).join('; ')} — differences from the old ledger recorded in each row's notes (see All entries).</p>

<h2 id="site">C. Irregularities in the original site and repository</h2>
<ul>
<li><b>Headline counts misleading</b> — see <a href="analysis.html#headline-numbers">Analysis §3</a>: 189 "true free" includes ${S.headline.upstreamFreeAndEnded} ended rows; "62 iOS" vs ${S.headline.listingsWithIosUrl} App Store links; "60 added this pass" is stale.</li>
<li><b>Page script mislabels platforms</b>: <a href="${UP_REPO}/blob/${UP_COMMIT}/assets/js/app.js">assets/js/app.js</a> shows any platform that is not "ios" as "Browser" (${S.headline.listingsListingAndroid} rows list Android).</li>
<li><b>Contradictory documents</b>: review page says 119 listings (<a href="${UP_REPO}/blob/${UP_COMMIT}/review.html">review.html</a>); data and README say ${counts.total}.</li>
<li><b>Stale dates</b>: all rows last checked 2026-08-19.</li>
<li><b>Possible policy gap</b>: the upstream README says contests that require an account with a gambling operator were removed. The <code>fanatics-survivor</code> row uses a <code>betfanatics.com</code> signup link (a sportsbook domain), and ${S.byType.market} "market" rows are broker/prop-firm contests. Whether these require an operator or brokerage account was <b>not verified</b> — review against the upstream policy.</li>
<li><b>Dead / moved links</b>: Zindi rules (<a href="https://zindi.world/rules">zindi.world/rules</a>, HTTP 404 on ${ASOF}); Challenge.gov (<a href="https://www.challenge.gov/">platform sunset 2026-03-30</a>).</li>
<li><b>Page integrity</b>: the AIcrowd challenges page shows spam tags and an XSS-test string as visible text — <a href="https://www.aicrowd.com/challenges">official page</a>.</li>
</ul>

<h2 id="quarantined">D. Held out of the tables — no usable official source (${quarantined.length})</h2>
<p>Rule: every table row needs a link to an official site. These ${quarantined.length} rows have only third-party sources (affiliate, forum, news) or a shared platform link. They are listed here with the links the old ledger cited, labelled by its own tier, so they can be reviewed manually.</p>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Why held out</th><th>Sources the old ledger cites</th></tr></thead><tbody>${qRows}</tbody></table></div>

<h2 id="third-party">E. "Official" labels on third-party sites (${thirdParty.length} rows)</h2>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Third-party link labelled official upstream</th><th>Handling</th></tr></thead><tbody>
${thirdParty.map(l => `<tr><th scope="row" data-label="Competition">${esc(l.name)}</th><td data-label="Link" class="src">${l.flags.filter(f => f.code === 'THIRD_PARTY_OFFICIAL').map(f => { const m = f.text.match(/https?:\/\/\S+/); return m ? extLink(m[0], new URL(m[0]).hostname.replace(/^www\./, '')) : ''; }).join('<br>')}</td><td data-label="Handling">${l.quarantined ? 'Row held out (no other official source)' : 'Replaced by another official-tier link'}</td></tr>`).join('')}
</tbody></table></div>

<h2 id="more-flags">F. Other automatic flags by row</h2>
<p>Keyword/URL checks over the old ledger's text. They flag rows for review; they do not prove an error.</p>
${flagSections}

<h2 id="unverified">G. Unverified rows (${counts.unverified})</h2>
<p>These rows have prize, free-entry, dates, eligibility and status left blank. They are visible in <a href="all-entries.html">All entries</a> (use “Unverified only”), each with the operator link the old ledger cites, marked <em>unchecked</em>.</p>

<h2 id="other-audits">H. Other audits in this repository</h2>
<p>A parallel session's structural audit of all ${counts.total} rows (URL shape, source tiers, prize-type classification, duplicates) is preserved at <a href="archive/audited-ledger/flagged.html">archive/audited-ledger/flagged.html</a> (118 rows raising at least one issue) with its <a href="archive/audited-ledger/methodology.html">methodology</a>. It is a different, looser check: it does not blank unverified values. Treat it as additional review leads.</p>

<h2 id="limits">I. What could not be checked in this pass</h2>
<ul>
<li>Only ${counts.checked} of ${counts.total} rows were read on an official page; ${counts.unverified} remain unverified.</li>
<li>For long official rules (CBS, MLB, NASCAR, TradingView) only the pages needed for the fields shown were read; fields not seen are blank.</li>
<li>Reachability of external links cannot be tested from the build environment (outbound access is limited to GitHub and package registries). The validator checks every <em>internal</em> link and that every external link is well-formed HTTPS.</li>
<li>AI-tool policies of nearly all competitions are unverified.</li>
</ul>`;
  page({ file: 'flagged-for-review.html', title: 'Flagged for Review', desc: 'Contradictions, held-out rows, source-quality problems and unverified items, with source links.', body, active: 'flagged' });
}

// ---- method ----
function buildMethod() {
  const log = Object.entries(V.entries).map(([id, e]) => `<tr><th scope="row" data-label="Competition">${esc(byId[id].name)}</th><td data-label="Page read" class="src">${extLink(e.sourceUrl, e.sourceLabel)}</td><td data-label="Result">${badge(byId[id])}</td><td data-label="Fields confirmed">${['freeEntry', 'prize', 'eligibility', 'dates', 'status'].filter(f => e[f]).map(f => ({ freeEntry: 'free entry', prize: 'prize', eligibility: 'eligibility', dates: 'dates', status: 'status' }[f])).join(', ') || 'none'}</td></tr>`).join('');
  const body = `
<div class="eyebrow">Method · data as of ${ASOF}</div>
<h1>Method &amp; sources</h1>
<h2>Rules this site follows</h2>
<ol>
<li>A value is shown only if it was read on an official page on ${ASOF}. Otherwise the cell is <b>blank</b> and the row says <b>unverified</b>. Nothing is inferred or filled in.</li>
<li>Every table row carries an official link. Links on news, press-release, social, affiliate or forum domains are never accepted as official; rows with no other source are held out and flagged.</li>
<li>The old ledger's own claims are kept only in <code>data/competitions.json → upstream</code> for audit; the site never renders them as facts.</li>
<li>Contradictions between the old ledger and an official page are published on the Flagged for Review page.</li>
</ol>
<h2>Data pipeline</h2>
<ol>
<li><b>Source:</b> <a href="${UP_REPO}">karagemop466-tech/FreeMoneyApps</a> at commit <a href="${UP_REPO}/commit/${UP_COMMIT}">${UP_COMMIT.slice(0, 7)}</a>; <code>assets/data.js</code> copied to <code>data/upstream/data.js</code> (SHA-256 <code>${D.provenance.sourceSha256.slice(0, 16)}…</code>).</li>
<li><b>Verification:</b> hand-recorded in <code>data/verification.json</code> (page URL, fields confirmed, notes, discrepancies).</li>
<li><b>Audit:</b> <code>tools/build_data.js</code> computes automatic flags and writes <code>data/competitions.json</code>.</li>
<li><b>Site:</b> <code>tools/build_site.js</code> writes the static HTML; <code>scripts/validate-catalog.mjs</code> checks it (CI runs it on every push and pull request).</li>
</ol>
<h2>Verification log (${Object.keys(V.entries).length} pages read on ${ASOF})</h2>
<div class="table-wrap"><table class="grid responsive"><thead><tr><th>Competition</th><th>Official page read</th><th>Result</th><th>Fields confirmed</th></tr></thead><tbody>${log}</tbody></table></div>
<h2>Limits</h2>
<ul>
<li>Pages were read with a page-text fetcher; scripts did not run, so values rendered by JavaScript may be missing (these are left blank, not guessed).</li>
<li>Long rules were read in parts. Fields in unread parts are blank.</li>
<li>"Closing soon" labels such as "8 days to go" are quoted from the official listing as of ${ASOF}.</li>
<li>Analyst notes on the Best bets page are judgment and are labelled as such.</li>
</ul>
<h2>Reference sources</h2>
<ul>
<li>Original site: <a href="${D.provenance.referencePage}">${D.provenance.referencePage}</a></li>
<li>Original repository: <a href="${UP_REPO}">${UP_REPO}</a>, commit <code>${UP_COMMIT}</code></li>
<li>Coordination log and PR record: <a href="${REPO_URL}/blob/main/COORDINATION.md">COORDINATION.md</a></li>
<li>Other builds from parallel sessions, preserved unchanged: <a href="archive/audited-ledger/index.html">audited ledger (shows the old ledger's values "as stated"; includes its own structural audit)</a> and its <a href="archive/audited-ledger/flagged.html">118-row flag list</a>; <a href="archive/prize-scout/index.html">first Prize Scout build (every field blank)</a>. Their values are <b>not</b> part of this site's verified tables.</li>
</ul>`;
  page({ file: 'method.html', title: 'Method & sources', desc: 'How the data was verified, with a log of every official page read.', body, active: 'method' });
}

// ---- executive summary (markdown → html, also written as EXECUTIVE_SUMMARY.md) ----
function inline(s) {
  return esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => `<a href="${u.replace(/&amp;/g, '&')}">${t}</a>`).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
}
function md2html(md) {
  const lines = md.split('\n'); let out = []; let i = 0;
  while (i < lines.length) {
    const ln = lines[i];
    if (/^# /.test(ln)) { out.push(`<h1>${inline(ln.slice(2))}</h1>`); i++; }
    else if (/^## /.test(ln)) { out.push(`<h2>${inline(ln.slice(3))}</h2>`); i++; }
    else if (/^\|/.test(ln)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = cells(rows[0]); const body = rows.slice(2).map(cells);
      out.push(`<div class="table-wrap"><table class="grid responsive"><thead><tr>${head.map(h => `<th>${inline(h)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map((c, j) => j === 0 ? `<th scope="row" data-label="${esc(head[j])}">${inline(c)}</th>` : `<td data-label="${esc(head[j])}">${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    }
    else if (/^- /.test(ln)) { const items = []; while (i < lines.length && /^- /.test(lines[i])) { items.push(lines[i].slice(2)); i++; } out.push(`<ul>${items.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`); }
    else if (/^\d+\. /.test(ln)) { const items = []; while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, '')); i++; } out.push(`<ol>${items.map(x => `<li>${inline(x)}</li>`).join('')}</ol>`); }
    else if (/^> /.test(ln)) { out.push(`<div class="panel callout">${inline(ln.slice(2))}</div>`); i++; }
    else if (ln.trim() === '') i++;
    else { out.push(`<p>${inline(ln)}</p>`); i++; }
  }
  return out.join('\n');
}
function buildSummary() {
  const tpl = fs.readFileSync(path.join(ROOT, 'tools/executive-summary.template.md'), 'utf8');
  const vars = {
    ASOF, TOTAL: counts.total, CHECKED: counts.checked, VERIFIED: counts.verified, PARTIAL: counts.partial, CONTRA: counts.contradicted,
    UNVER: counts.unverified, QUAR: counts.quarantined, INTABLES: counts.inTables, FREE189: S.headline.upstreamFree189, FREEEND: S.headline.upstreamFreeAndEnded,
    FREECAUT: S.headline.upstreamFreeAndCaution, NONCASH: flagCount('NON_CASH_OR_MIXED'), NONUSD: flagCount('NON_USD'), THIRD: flagCount('THIRD_PARTY_OFFICIAL'),
    ENDEDUP: flagCount('ENDED_UPSTREAM'), CHECKEDPCT: pct(counts.checked, counts.total), SPORTS: S.byType.sports, UPCOMMIT: UP_COMMIT.slice(0, 7), SHARED: flagCount('SHARED_URL'),
    BESTA: B.picks.filter(p => p.tier === 'A').length, BESTB: B.picks.filter(p => p.tier === 'B').length
  };
  const md = tpl.replace(/\{\{(\w+)\}\}/g, (m, k) => { if (!(k in vars)) throw new Error('missing var ' + k); return vars[k]; });
  fs.writeFileSync(path.join(ROOT, 'EXECUTIVE_SUMMARY.md'), md);
  const body = `<div class="eyebrow">Decision brief · ${ASOF}</div>\n<div class="prose">${md2html(md)}</div>\n<p class="foot">Also available as <a href="EXECUTIVE_SUMMARY.md">EXECUTIVE_SUMMARY.md</a> in the repository.</p>`;
  page({ file: 'executive-summary.html', title: 'Executive summary', desc: 'Executive summary: what was reviewed, what was verified, what is flagged, and what to do next.', body, active: 'summary' });
}

buildIndex(); buildBest(); buildAll(); buildCategories(); buildAnalysis(); buildFlagged(); buildMethod(); buildSummary();
console.log('site built');
