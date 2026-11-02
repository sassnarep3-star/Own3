#!/usr/bin/env node
// Validates the published catalog and static site. Zero dependencies.
// Rules enforced:
//  1. Every competition row shown in a table has an https official-source link (never a known third-party domain).
//  2. No unverified value is filled in: claim fields are non-null only if the row was read on its official page
//     (data/verification.json) and the stored value is identical to the verification record.
//  3. Quarantined rows (no official link) never appear in a table and are all listed on the Flagged page.
//  4. Every internal link, asset and #anchor in every HTML page resolves; no placeholder links.
//  5. Best-bets rows are verified, open/upcoming (tiers A/B), have a verified prize, and point to the checked page.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { THIRD_PARTY, regDomain } = require(path.join(root, 'tools/lib.js'));
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const errors = [];
const fail = m => errors.push(m);

const data = JSON.parse(read('data/competitions.json'));
const ver = JSON.parse(read('data/verification.json'));
const best = JSON.parse(read('data/bestbets.json'));
const CLAIMS = ['freeEntry', 'prize', 'eligibility', 'dates', 'status'];
const cats = new Set(data.categories.map(c => c.id));
const ids = new Set();

if (data.listings.length !== data.provenance.extractedRecordCount) fail(`listing count ${data.listings.length} != provenance ${data.provenance.extractedRecordCount}`);
for (const l of data.listings) {
  if (ids.has(l.id)) fail(`duplicate id ${l.id}`); ids.add(l.id);
  if (!cats.has(l.category)) fail(`${l.id}: unknown category`);
  const v = ver.entries[l.id];
  if (!v && l.verificationLevel !== 'unverified') fail(`${l.id}: marked ${l.verificationLevel} without a verification record`);
  if (v && l.verificationLevel !== v.level) fail(`${l.id}: level mismatch with verification.json`);
  if (v && l.checkedOn !== (v.checkedOn || ver._meta.checkedOn)) fail(`${l.id}: check date mismatch with verification.json`);
  if (l.verificationLevel === 'unverified') for (const k of CLAIMS) if (l[k] != null) fail(`${l.id}: unverified row has ${k} filled in`);
  if (v) for (const k of CLAIMS) if ((l[k] ?? null) !== (v[k] ?? null)) fail(`${l.id}: ${k} differs from verification record`);
  for (const k of CLAIMS) if (l[k] != null && !(l.official && l.official.checked)) fail(`${l.id}: ${k} filled but official page not checked`);
  if (l.quarantined) { if (l.official) fail(`${l.id}: quarantined row has an official link`); continue; }
  if (!l.official) { fail(`${l.id}: no official link and not quarantined`); continue; }
  let u; try { u = new URL(l.official.url); } catch { fail(`${l.id}: invalid official URL`); continue; }
  if (u.protocol !== 'https:') fail(`${l.id}: official URL not https`);
  if (THIRD_PARTY.has(regDomain(l.official.url))) fail(`${l.id}: official URL on third-party domain ${u.hostname}`);
  if (v && l.official.url !== v.sourceUrl) fail(`${l.id}: official URL differs from verified page`);
  if (l.official.checked !== !!v) fail(`${l.id}: official.checked inconsistent`);
}

// Best-bet dates must match their own research snapshot, not imply already-closed entries are open.
if (best._meta.asOf !== JSON.parse(read('data/stats.json')).generatedOn) fail('bestbets asOf differs from site generatedOn');
// best bets
for (const p of best.picks) {
  const l = data.listings.find(x => x.id === p.id);
  if (!l) { fail(`bestbets: unknown id ${p.id}`); continue; }
  if (['A', 'B'].includes(p.tier) && p.deadline && p.deadline < best._meta.asOf) fail(`bestbets: ${p.id} has expired deadline ${p.deadline}`);
  if (l.quarantined || !l.official?.checked) fail(`bestbets: ${p.id} not checked on official page`);
  if (['A', 'B'].includes(p.tier)) {
    if (!l.prize) fail(`bestbets: ${p.id} lacks verified prize`);
    if (!['open', 'upcoming'].includes(l.status)) fail(`bestbets: ${p.id} status ${l.status} is not open/upcoming`);
  }
  if (p.tier === 'A' && !l.freeEntry) fail(`bestbets: tier A ${p.id} lacks verified free entry`);
}

// HTML
const htmlFiles = [];
(function walk(d) { for (const e of fs.readdirSync(path.join(root, d), { withFileTypes: true })) {
  if (['.git', 'node_modules', 'data', 'tools', 'scripts', '.github', 'archive'].includes(e.name)) continue;
  const rel = path.posix.join(d, e.name);
  if (e.isDirectory()) walk(rel); else if (e.name.endsWith('.html')) htmlFiles.push(rel); } })('.');
const idsByFile = {};
const pageHtml = {};
for (const f of htmlFiles) {
  const h = read(f); pageHtml[f] = h;
  idsByFile[f] = new Set([...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
}
let rowTotal = 0;
for (const f of htmlFiles) {
  const h = pageHtml[f];
  for (const m of h.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const raw = m[1].replace(/&amp;/g, '&');
    if (raw === '' || raw === '#' || raw.startsWith('javascript:')) { fail(`${f}: placeholder link "${raw}"`); continue; }
    if (/^(https?:)?\/\//.test(raw)) {
      let u; try { u = new URL(raw); } catch { fail(`${f}: malformed URL ${raw}`); continue; }
      if (u.protocol !== 'https:') fail(`${f}: non-HTTPS link ${raw}`);
      continue;
    }
    if (/^(mailto:|tel:)/.test(raw)) continue;
    const [p0, frag] = raw.split('#');
    const target = p0 ? path.posix.normalize(path.posix.join(path.posix.dirname(f), p0)) : f;
    if (target.startsWith('..')) { fail(`${f}: link escapes site ${raw}`); continue; }
    if (!fs.existsSync(path.join(root, target))) { fail(`${f}: broken link ${raw}`); continue; }
    if (frag) {
      const ids2 = idsByFile[target];
      if (!ids2 || !ids2.has(frag)) fail(`${f}: missing anchor ${raw}`);
    }
  }
  // table rows that are competition rows (data-level) need an official external link
  for (const m of h.matchAll(/<tr data-level="[^"]*"[\s\S]*?<\/tr>/g)) {
    rowTotal++;
    if (!/<td data-label="Official source" class="src"><a href="https:\/\/[^"]+" target="_blank" rel="noopener noreferrer">/.test(m[0])) fail(`${f}: competition row without official link: ${m[0].slice(0, 120).replace(/\s+/g, ' ')}`);
  }
}
const nonQ = data.listings.filter(l => !l.quarantined);
const allRows = (pageHtml['all-entries.html'].match(/<tr data-level=/g) || []).length;
if (allRows !== nonQ.length) fail(`all-entries.html has ${allRows} rows, expected ${nonQ.length}`);
let catRows = 0;
for (const c of data.categories) {
  const f = `categories/${c.id}.html`;
  if (!pageHtml[f]) { fail(`missing ${f}`); continue; }
  const n = (pageHtml[f].match(/<tr data-level=/g) || []).length;
  const exp = nonQ.filter(l => l.category === c.id).length;
  if (n !== exp) fail(`${f}: ${n} rows, expected ${exp}`);
  catRows += n;
}
if (catRows !== nonQ.length) fail(`category pages total ${catRows} rows != ${nonQ.length}`);
for (const need of ['index.html', 'best-bets.html', 'all-entries.html', 'analysis.html', 'flagged-for-review.html', 'executive-summary.html', 'method.html', '.nojekyll', 'assets/css/site.css', 'assets/js/app.js'])
  if (!fs.existsSync(path.join(root, need))) fail(`missing ${need}`);
// quarantined rows must be on flagged page and not in tables
const flagged = pageHtml['flagged-for-review.html'] || '';
for (const l of data.listings.filter(x => x.quarantined)) {
  const nm = l.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  if (!flagged.includes(nm)) fail(`flagged page does not list quarantined row ${l.name}`);
  if ((pageHtml['all-entries.html'] || '').includes(`<span class="nm">${nm}</span>`)) fail(`quarantined row ${l.name} appears in all-entries`);
}
for (const l of data.listings.filter(x => x.verificationLevel === 'contradicted')) {
  const nm = l.name.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  if (!flagged.includes(nm)) fail(`flagged page does not list contradicted row ${l.name}`);
}

if (errors.length) { console.error(`Catalog validation FAILED (${errors.length}):`); for (const e of errors) console.error(' - ' + e); process.exit(1); }
console.log(`Catalog validation passed: ${data.listings.length} listings, ${nonQ.length} table rows with official links, ${data.listings.length - nonQ.length} quarantined, ${htmlFiles.length} HTML pages, all internal links/anchors resolve.`);
