import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/competitions.json'), 'utf8'));
const failures = [];
const assert = (ok, message) => { if (!ok) failures.push(message); };
const categories = new Map(catalog.categories.map(item => [item.id, item]));
const ids = new Set();
let insecureSourceCount = 0;

assert(catalog.listings.length === catalog.provenance.extractedRecordCount, 'record count does not match recorded source count');
assert(catalog.categories.length === 9, 'expected nine source-catalog categories');
for (const item of catalog.categories) {
  assert(fs.existsSync(path.join(root, `categories/${item.id}.html`)), `missing category page: ${item.id}`);
}
for (const row of catalog.listings) {
  assert(!ids.has(row.id), `duplicate candidate id: ${row.id}`);
  ids.add(row.id);
  assert(categories.has(row.category), `${row.id}: unknown category ${row.category}`);
  assert(row.categoryName === categories.get(row.category)?.name, `${row.id}: category label mismatch`);
  assert(row.verificationStatus === 'Unverified' && row.flagged === true, `${row.id}: every listing must remain unverified and flagged`);
  assert(Boolean(row.sourceUrl), `${row.id}: missing source URL`);
  try {
    const source = new URL(row.sourceUrl);
    assert(['https:', 'http:'].includes(source.protocol), `${row.id}: source must use HTTP(S)`);
    if (source.protocol === 'http:') {
      insecureSourceCount += 1;
      assert(row.flagged === true && row.sourceBasis.toLowerCase().includes('http'), `${row.id}: insecure HTTP source must carry an explicit flag`);
    }
  } catch { assert(false, `${row.id}: malformed source URL`); }
  for (const key of ['entryCost', 'prize', 'eligibility', 'availability', 'payout', 'effort', 'expectedValue']) {
    assert(row[key] === '', `${row.id}: ${key} must stay blank until verified`);
  }
}
for (const category of catalog.categories) {
  const count = catalog.listings.filter(row => row.category === category.id).length;
  assert(count > 0, `${category.id}: category has no entries`);
}

// Check every local href and script/stylesheet reference in published HTML.
const htmlFiles = ['index.html', 'executive-summary.html', 'flagged-for-review.html', 'COORDINATION.md', ...catalog.categories.map(c => `categories/${c.id}.html`)];
const linkPattern = /\b(?:href|src)="([^"]+)"/g;
for (const file of htmlFiles.filter(file => file.endsWith('.html'))) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of text.matchAll(linkPattern)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(value)) continue;
    const local = value.split(/[?#]/, 1)[0];
    if (!local) continue;
    const target = path.resolve(root, path.dirname(file), decodeURIComponent(local));
    assert(target.startsWith(root + path.sep) && fs.existsSync(target), `${file}: broken local link ${value}`);
  }
}

if (failures.length) {
  console.error(`Catalog validation failed (${failures.length} issue${failures.length === 1 ? '' : 's'}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`PASS: ${catalog.listings.length} candidate rows; ${catalog.categories.length} categories; all rows remain unverified with blank claim fields; source URLs are HTTP(S) (${catalog.listings.length - insecureSourceCount} HTTPS, ${insecureSourceCount} HTTP explicitly flagged); local page links resolve.`);
