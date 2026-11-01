#!/usr/bin/env node
// Builds data/ledger.json (+ flags + stats) from data/upstream/data.js and data/verification.json
const fs = require('fs');
const path = require('path');
const { ROOT, loadUpstream, regDomain, THIRD_PARTY, NON_CASH_RE, NON_USD_RE } = require('./lib');

const TODAY = '2026-11-01';
const U = loadUpstream();
const V = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/verification.json'), 'utf8'));
const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);

const sharedUrl = {};
U.listings.forEach(x => { const k = x.signupUrl.replace(/\/$/, ''); (sharedUrl[k] = sharedUrl[k] || []).push(x.id); });

const typeName = Object.fromEntries(U.types.map(t => [t.id, t.name]));

const rows = U.listings.map(x => {
  const v = V.entries[x.id] || null;
  const flags = [];
  const add = (code, text) => flags.push({ code, text });

  // ---- official link selection (never inferred) ----
  const officialSrcs = x.sources.filter(s => s.tier === 'official');
  const usable = officialSrcs.filter(s => !THIRD_PARTY.has(regDomain(s.url)) && /^https:\/\//.test(s.url));
  const rejected = officialSrcs.filter(s => THIRD_PARTY.has(regDomain(s.url)));
  rejected.forEach(s => add('THIRD_PARTY_OFFICIAL', `Upstream tags ${s.url} as "official" but ${regDomain(s.url)} is a third-party site (news / press release / social / aggregator), not the contest operator.`));
  let official = null;
  if (v && v.sourceUrl && v.level !== 'unchecked') official = { url: v.sourceUrl, label: v.sourceLabel, checked: true };
  else {
    const same = usable.find(s => regDomain(s.url) === regDomain(x.signupUrl));
    const pick = same || usable[0];
    if (pick) official = { url: pick.url, label: pick.title, checked: false, kind: 'official-source' };
    else if (/^https:\/\//.test(x.signupUrl) && !THIRD_PARTY.has(regDomain(x.signupUrl)) && sharedUrl[x.signupUrl.replace(/\/$/, '')].length === 1)
      // Fallback: the row's own signup link is on a domain that is not third-party and not shared with other rows.
      // It is shown as the operator's site, clearly labelled as "contest page not confirmed".
      official = { url: x.signupUrl, label: 'Operator site (upstream signup link; contest page not confirmed)', checked: false, kind: 'operator-site' };
  }
  if (official && !official.kind) official.kind = 'verified-page';
  const quarantined = !official;
  if (quarantined) add('NO_OFFICIAL_SOURCE', 'No official-tier source on an operator domain and no unshared operator signup link. Row is excluded from the category tables (rule: every table row needs an official source link; HTTP-only links are not accepted).');
  if (THIRD_PARTY.has(regDomain(x.signupUrl))) add('SIGNUP_THIRD_PARTY', `Upstream "Official site" button points to ${x.signupUrl}, a third-party domain.`);
  if (usable.length && !usable.some(s => regDomain(s.url) === regDomain(x.signupUrl)) && !THIRD_PARTY.has(regDomain(x.signupUrl)))
    add('SIGNUP_DOMAIN_MISMATCH', `Upstream "Official site" button (${regDomain(x.signupUrl)}) differs from the official source domain(s) (${[...new Set(usable.map(s => regDomain(s.url)))].join(', ')}).`);
  if (!/^https:/.test(x.signupUrl)) add('NON_HTTPS', `Upstream signup link is not HTTPS: ${x.signupUrl}`);
  if (x.status === 'ended') add('ENDED_UPSTREAM', 'Upstream itself marks this as ended / out of season, yet it is counted in the upstream "189 true free paths" headline.');
  if (x.status === 'caution') add('CAUTION_UPSTREAM', 'Upstream marks this entry "caution".');
  if (NON_USD_RE.test(x.prizeUsd)) add('NON_USD', 'Prize text is in a non-USD currency or mixes currencies; the upstream field is named "prizeUsd".');
  if (x.freePath === 'full' && NON_CASH_RE.test(x.prizeUsd + ' ' + x.prizeNote)) add('NON_CASH_OR_MIXED', 'Prize text mentions non-cash items (trips, vouchers, gift cards, equipment, etc.) but the row is stamped "Free USD path" upstream.');
  const k = x.signupUrl.replace(/\/$/, '');
  if (sharedUrl[k].length > 1) add('SHARED_URL', `Same signup URL is used by ${sharedUrl[k].length} rows (${sharedUrl[k].filter(i => i !== x.id).slice(0, 4).join(', ')}${sharedUrl[k].length > 5 ? ', …' : ''}).`);
  const age = daysBetween(x.lastChecked, TODAY);
  if (age > 60) add('STALE', `Upstream last-checked date ${x.lastChecked} is ${age} days before ${TODAY}; time-limited contests may have changed.`);
  if (v) v.discrepancies.forEach(d => add('CONTRADICTED', `${d.field}: upstream said "${d.upstream}" — official source says: ${d.official}`));

  // ---- verified fields only (blank when unverified) ----
  const verification = v ? {
    level: v.level, checkedOn: V._meta.checkedOn,
    freeEntry: v.freeEntry, prize: v.prize, eligibility: v.eligibility, dates: v.dates, status: v.status, notes: v.notes
  } : { level: 'unverified', checkedOn: null, freeEntry: null, prize: null, eligibility: null, dates: null, status: null, notes: [] };

  const unverifiedFields = ['freeEntry', 'prize', 'eligibility', 'dates', 'status'].filter(f => !verification[f]);

  return {
    id: x.id, name: x.name, type: x.type, typeName: typeName[x.type],
    platforms: x.platforms, official, quarantined,
    verification, unverifiedFields, flags,
    // Raw upstream claims are kept ONLY for audit/comparison. They are never rendered as facts.
    upstream: {
      status: x.status, freePath: x.freePath, prizeUsd: x.prizeUsd, prizeNote: x.prizeNote,
      eligibility: x.eligibility, minCashout: x.minCashout, verificationLevel: x.verification && x.verification.level,
      signupUrl: x.signupUrl, rulesUrl: x.rulesUrl || null, lastChecked: x.lastChecked,
      sources: x.sources
    }
  };
});

// ---------- stats on the upstream dataset (counts of upstream claims, not facts) ----------
const L = U.listings;
const count = (arr, f) => arr.reduce((m, x) => { const k = f(x); m[k] = (m[k] || 0) + 1; return m; }, {});
const stats = {
  generatedOn: TODAY,
  upstreamCommit: '466f7c1e7a14b52b4a0d36beb84a00d68fd409b7',
  totalRows: L.length,
  byType: count(L, x => x.type),
  byUpstreamStatus: count(L, x => x.status),
  byUpstreamFreePath: count(L, x => x.freePath),
  headline: {
    upstreamFree189: L.filter(x => x.freePath === 'full').length,
    upstreamFreeAndEnded: L.filter(x => x.freePath === 'full' && x.status === 'ended').length,
    upstreamFreeAndCaution: L.filter(x => x.freePath === 'full' && x.status === 'caution').length,
    upstreamIos62: L.filter(x => x.platforms.includes('ios') && x.status !== 'inactive' && x.status !== 'ended').length,
    listingsWithIosUrl: L.filter(x => x.iosUrl).length,
    listingsListingAndroid: L.filter(x => x.platforms.includes('android')).length,
    addedThisPassCLength: (U.addedThisPassC || []).length
  },
  rowFlags: count(rows.flatMap(r => r.flags), f => f.code),
  rowsWithAnyFlag: rows.filter(r => r.flags.length).length,
  quarantined: rows.filter(r => r.quarantined).length,
  verifiedLevels: count(rows, r => r.verification.level),
  rowsWithVerifiedPrize: rows.filter(r => r.verification.prize).length,
  rowsWithOfficialLink: rows.filter(r => r.official).length
};

const LEVEL_LABEL = { verified: 'Verified', partial: 'Partially verified', contradicted: 'Contradicted by official source', unverified: 'Unverified' };
const listings = rows.map(r => ({
  id: r.id, name: r.name, category: r.type, categoryName: r.typeName, platforms: r.platforms,
  verificationStatus: LEVEL_LABEL[r.verification.level], verificationLevel: r.verification.level,
  official: r.official, quarantined: r.quarantined,
  checkedOn: r.verification.checkedOn,
  freeEntry: r.verification.freeEntry, prize: r.verification.prize, eligibility: r.verification.eligibility,
  dates: r.verification.dates, status: r.verification.status, notes: r.verification.notes,
  unverifiedFields: r.unverifiedFields, flags: r.flags, upstream: r.upstream
}));
const out = {
  provenance: {
    referencePage: 'https://karagemop466-tech.github.io/FreeMoneyApps/',
    referenceRepository: 'https://github.com/karagemop466-tech/FreeMoneyApps',
    sourceFile: 'assets/data.js',
    sourceCommit: stats.upstreamCommit,
    sourceSha256: require('crypto').createHash('sha256').update(fs.readFileSync(path.join(ROOT, 'data/upstream/data.js'))).digest('hex'),
    leadCatalogReviewDate: U.reviewed,
    extractedRecordCount: L.length,
    verificationDate: V._meta.checkedOn,
    verificationMethod: V._meta.method,
    note: 'Fields freeEntry, prize, eligibility, dates and status are filled ONLY when read from the official page named in official.url on the verification date. Blank (null) means unverified. The "upstream" object keeps the lead catalog\'s own claims for audit comparison only; they are not facts and are never shown as facts on the site.'
  },
  categories: U.types.map(t => ({ id: t.id, name: t.name, description: t.blurb })),
  listings
};
fs.writeFileSync(path.join(ROOT, 'data/competitions.json'), JSON.stringify(out, null, 1) + '\n');
fs.writeFileSync(path.join(ROOT, 'data/stats.json'), JSON.stringify(stats, null, 1) + '\n');
console.log('wrote data/competitions.json (' + listings.length + ' listings) and data/stats.json');
console.log(JSON.stringify({ verifiedLevels: stats.verifiedLevels, quarantined: stats.quarantined, flags: stats.rowFlags }));
