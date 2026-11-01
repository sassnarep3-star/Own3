// Shared helpers for the build tools. No external dependencies.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function loadUpstream() {
  const src = fs.readFileSync(path.join(ROOT, 'data/upstream/data.js'), 'utf8');
  const sandbox = { window: {} };
  new Function('window', src)(sandbox.window);
  return sandbox.window.LEDGER;
}

// registrable-domain approximation (handles co.uk / com.au style suffixes)
function regDomain(u) {
  let h;
  try { h = new URL(u).hostname.replace(/^www\./, '').split('.'); } catch (e) { return 'INVALID'; }
  if (h.length >= 3 && /^(co|com|org|gov|ac|net)$/.test(h[h.length - 2])) return h.slice(-3).join('.');
  return h.slice(-2).join('.');
}

// Domains that upstream sometimes labels "official" but which are NOT the contest operator
// (news/press-release/affiliate/forum/social/aggregator). A link on these domains is never
// accepted as the row's "official source".
const THIRD_PARTY = new Set([
  'prnewswire.com', 'myfxbook.com', 'news.com.au', 'codesports.com.au', 'ustrottingnews.com', 'x.com',
  'vocal.media', 'reedsy.com', 'truthinadvertising.org', 'gambling.com', 'nasdaq.com', 'google.com',
  'actionnetwork.com', 'legalsportsreport.com', 'americasbestracing.net', 'thegolfwire.com',
  'sportingnews.com', 'mediaweek.com.au', 'hipther.com', 'tradingbrokers.com', 'fofan.org',
  'ndfxbonus.com', 'shiftdelete.net', 'allaboutfpl.com', 'fpltips.com', 'reddit.com', 'thelines.com',
  'bridgewater.com' // placeholder never matches; kept empty-effect
]);
THIRD_PARTY.delete('bridgewater.com');

const NON_CASH_RE = /no cash|non-cash|gift card|gift certificate|merchandise|voucher|store credit|credit\b|trip|tickets?\b|jersey|memorabilia|bonus (cash|funds|bets?)|points|gems|\bARV\b|Toyota|Mercedes|iPhone|laptop|buggy|Stark Varg|equipment/i;
const NON_USD_RE = /[£€₹¥]|\b(GBP|EUR|AUD|CAD|INR|NZD)\b|A\$|AU\$|C\$|USD \$|AUD \$|¥|CNY|NZ\$/;

module.exports = { ROOT, loadUpstream, regDomain, THIRD_PARTY, NON_CASH_RE, NON_USD_RE };
