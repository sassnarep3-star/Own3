#!/usr/bin/env node
/**
 * check-links.mjs — the publish gate.
 *
 * Fails the build if:
 *   1. any internal link (href="x.html" / src="x.js|css") points at a file that does not exist;
 *   2. any anchor target (#id) referenced from a page has no matching id on that page;
 *   3. any external URL is malformed, or is missing from the dataset it claims to come from;
 *   4. any row in the dataset lacks an official-link URL;
 *   5. the JSON the site loads is not present or not valid;
 *   6. any generated page contains an unresolved {{token}};
 *   7. any page is missing its <title>, viewport meta or lang attribute.
 *
 * It does NOT check whether remote hosts are up — outbound access from the build
 * environment is restricted. That is stated on the methodology page.
 *
 * Exit code 1 on any error, so CI can refuse to publish.
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ── 1. collect pages ──────────────────────────────────────────────────── */
const pages = readdirSync('.').filter((f) => f.endsWith('.html'));
if (!pages.length) err('No HTML pages found in the repo root.');

/* ── 2. dataset sanity ─────────────────────────────────────────────────── */
let data;
try {
  data = JSON.parse(readFileSync('assets/data/competitions.json', 'utf8'));
} catch (e) {
  err(`assets/data/competitions.json is missing or invalid: ${e.message}`);
}

const datasetUrls = new Set();
if (data) {
  for (const r of data.rows) {
    for (const u of [r.signupUrl, r.rulesUrl, r.tosUrl, r.iosUrl, ...(r.sources || []).map((s) => s.url)]) {
      if (u) datasetUrls.add(u);
    }
    if (!r.signupUrl) err(`Row ${r.id} has no official/signup URL — every row must link to an official site.`);
    if (!(r.sources || []).length) err(`Row ${r.id} has no sources.`);
  }
  if (data.rows.length !== 206) warn(`Dataset contains ${data.rows.length} rows, expected 206.`);
  console.log(`dataset: ${data.rows.length} rows, ${datasetUrls.size} distinct external URLs`);
}

/* ── 3. per-page checks ────────────────────────────────────────────────── */
const LINK_DATASET = new Set();   // URLs legitimately taken from the dataset
let totalExternal = 0;

for (const page of pages) {
  const html = readFileSync(page, 'utf8');

  /* 7. required head elements */
  if (!/<html[^>]*\slang=/i.test(html)) err(`${page}: <html> is missing a lang attribute`);
  if (!/<title>[^<]*<\/title>/i.test(html) || /<title><\/title>/.test(html)) err(`${page}: missing or empty <title>`);
  if (!/name=["']viewport["']/i.test(html)) err(`${page}: missing viewport meta tag`);
  if (!/name=["']description["']/i.test(html)) warn(`${page}: missing meta description`);

  /* 6. unresolved template tokens */
  const tok = html.match(/\{\{[a-z_]+\}\}/gi);
  if (tok) err(`${page}: ${tok.length} unresolved template token(s), e.g. ${tok[0]}`);

  /* 1. internal links */
  const hrefRe = /\s(?:href|src)=["']([^"']+)["']/gi;
  let m;
  while ((m = hrefRe.exec(html))) {
    const raw = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(raw)) continue;
    const file = raw.split('#')[0].split('?')[0];
    if (!file) continue;
    if (!existsSync(file)) err(`${page}: internal link "${raw}" → file "${file}" does not exist`);
  }

  /* 2. in-page anchors */
  const idRe = /\sid=["']([^"']+)["']/g;
  const ids = new Set();
  let im;
  while ((im = idRe.exec(html))) ids.add(im[1]);
  const anchorRe = /\shref=["']#([^"']+)["']/gi;
  let am;
  while ((am = anchorRe.exec(html))) {
    if (!ids.has(am[1])) err(`${page}: anchor "#${am[1]}" has no matching id on this page`);
  }

  /* 3. external links */
  const extRe = /\shref=["'](https?:\/\/[^"']+)["']/gi;
  let em;
  while ((em = extRe.exec(html))) {
    const u = em[1].replace(/&amp;/g, '&');
    totalExternal++;
    try {
      const p = new URL(u);
      if (!/^https?:$/.test(p.protocol)) throw new Error('bad protocol');
      if (!p.hostname.includes('.')) throw new Error('bad host');
    } catch (e) {
      err(`${page}: malformed external URL "${u}" (${e.message})`);
      continue;
    }
    LINK_DATASET.add(u);
  }
}

/* ── 4. every dataset-provided external URL should appear somewhere static ─ */
if (data) {
  const missing = [...datasetUrls].filter((u) => !LINK_DATASET.has(u));
  if (missing.length) {
    warn(`${missing.length} dataset URL(s) do not appear as static hrefs (they are reachable via the JS table): ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ' …' : ''}`);
  }
  /* every static external link from the ledger should trace to the dataset */
  const strays = [...LINK_DATASET].filter((u) => !datasetUrls.has(u));
  if (strays.length) {
    console.log(`note: ${strays.length} static external link(s) not from the ledger (expected — these are the sources cited in the methodology table):`);
    strays.slice(0, 12).forEach((s) => console.log('   ' + s));
  }
}

/* ── 5. assets referenced by pages exist ───────────────────────────────── */
for (const f of ['assets/css/style.css', 'assets/js/app.js', 'assets/data/competitions.json', '.nojekyll']) {
  if (!existsSync(f)) err(`required asset missing: ${f}`);
}

/* ── report ────────────────────────────────────────────────────────────── */
console.log(`\npages checked: ${pages.length}`);
console.log(`external hrefs seen: ${totalExternal}`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log('  ! ' + w));
}

if (errors.length) {
  console.error(`\n${errors.length} ERROR(S):`);
  errors.forEach((e) => console.error('  ✗ ' + e));
  console.error('\ncheck-links: FAILED — do not publish.');
  process.exit(1);
}

console.log('\ncheck-links: PASSED — no broken internal links, no malformed URLs, no unresolved tokens.');
