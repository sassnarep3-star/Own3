/* ==========================================================================
   app.js — renders the competition table, search, filters and sorts.
   Plain ES2020, no dependencies. Data comes from assets/data/competitions.json.
   Progressive: if JS is off the page still shows its static content and links.
   ========================================================================== */
(function () {
  'use strict';

  var DATA_URL = 'assets/data/competitions.json';
  var state = {
    data: null,
    query: '',
    type: 'all',
    prize: 'all',
    status: 'all',
    level: 'all',
    sort: 'cash',        // cash | prize | name | category | checked
    order: 'desc',
  };

  /* ── helpers ─────────────────────────────────────────────────────────── */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function money(n) {
    if (n == null) return '';
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
    if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
    return '$' + n;
  }

  var TYPE_LABEL = {
    skill: 'Skill tournaments', trivia: 'Trivia', sports: 'Fantasy & picks',
    creative: 'Creative contests', forecasting: 'Forecasting', market: 'Market / trading',
    tech: 'Tech & data', directory: 'Directories', pools: 'Pool tools',
  };
  var STATUS_LABEL = { live: 'Live', mixed: 'Mixed', caution: 'Caution', ended: 'Ended' };
  var STATUS_CLASS = { live: 'live', mixed: 'mixed-s', caution: 'caution', ended: 'ended' };
  var FREE_LABEL = { full: 'Free', partial: 'Some free', 'paid-cash': 'Fee needed' };
  var FREE_CLASS = { full: 'free', partial: 'partial', 'paid-cash': 'paid' };
  var PRIZE_LABEL = { cash: 'Cash', mixed: 'Cash + other', 'non-cash': 'Non-cash', unstated: 'Unstated' };
  var PRIZE_CLASS = { cash: 'cash', mixed: 'mixed', 'non-cash': 'noncash', unstated: 'unstated' };
  var LEVEL_LABEL = { verified: 'Verified here', 'official-linked': 'Official source', flagged: 'Flagged' };
  var LEVEL_CLASS = { verified: 'verified', 'official-linked': 'official', flagged: 'flagged' };
  var LEVEL_HELP = {
    verified: 'I opened the operator’s own page on the review date and read this claim there.',
    'official-linked': 'Cites a source on the operator’s own domain, but I did not re-open it this session.',
    flagged: 'At least one high-severity defect — see the reason below.',
  };

  /* ── filtering ───────────────────────────────────────────────────────── */
  function matches(r) {
    if (state.type !== 'all' && r.type !== state.type) return false;
    if (state.prize !== 'all' && r.prizeType !== state.prize) return false;
    if (state.status !== 'all' && r.status !== state.status) return false;
    if (state.level !== 'all' && r.verifyLevel !== state.level) return false;
    if (state.query) {
      var q = state.query.toLowerCase();
      var hay = [r.name, r.short, r.prizeUsd, r.eligibility, r.restricted,
        TYPE_LABEL[r.type] || r.type, r.status,
        (r.payoutMethods || []).join(' ')].join(' ').toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function compare(a, b) {
    var d = state.order === 'asc' ? 1 : -1;
    switch (state.sort) {
      case 'name': return a.name.localeCompare(b.name) * d;
      case 'prize': return ((a.maxPrizeUsd || 0) - (b.maxPrizeUsd || 0)) * d || b.score - a.score;
      case 'category': return (a.type.localeCompare(b.type)) * d || b.score - a.score;
      case 'checked': return String(a.lastChecked).localeCompare(String(b.lastChecked)) * d || b.score - a.score;
      default: return (a.score - b.score) * d;
    }
  }

  /* ── record card (mobile) ────────────────────────────────────────────── */
  function badge(text, cls, title) {
    return el('span', { class: 'badge ' + cls, text: text, title: title || null });
  }

  function field(label, value, extraClass) {
    var dd = el('dd', { class: value ? (extraClass || '') : 'empty' });
    dd.textContent = value || 'Not stated';
    var div = el('div', { class: 'rec-field' }, [
      el('dt', { text: label }), dd,
    ]);
    return div;
  }

  function card(r) {
    var isFlagged = r.verifyLevel === 'flagged';
    var node = el('article', {
      class: 'rec' + (isFlagged ? ' has-flags' : r.verifyLevel === 'verified' ? ' verified' : ''),
      id: 'row-' + r.id,
    });

    var badges = el('div', { class: 'rec-badges' }, [
      badge(PRIZE_LABEL[r.prizeType] || r.prizeType, PRIZE_CLASS[r.prizeType] || 'unstated'),
      badge(FREE_LABEL[r.freePath] || r.freePath, FREE_CLASS[r.freePath] || 'unstated'),
      badge(STATUS_LABEL[r.status] || r.status, STATUS_CLASS[r.status] || 'ended'),
      badge(TYPE_LABEL[r.type] || r.type, 'unstated'),
      badge(LEVEL_LABEL[r.verifyLevel], LEVEL_CLASS[r.verifyLevel], LEVEL_HELP[r.verifyLevel]),
    ]);

    var prizeText = r.prizeUsd
      ? (r.maxPrizeUsd ? money(r.maxPrizeUsd) + ' — ' + r.prizeUsd : r.prizeUsd)
      : null;

    var main = el('div', { class: 'rec-main' }, [
      el('div', { class: 'rec-head' }, [
        el('div', {}, [
          el('h3', { class: 'rec-title' }, [
            el('a', { href: r.signupUrl || '#', text: r.name, target: '_blank', rel: 'noopener nofollow' }),
          ]),
          el('p', { class: 'rec-sub', text: r.short || '' }),
        ]),
      ]),
      badges,
      el('dl', { class: 'rec-fields' }, [
        field('Prize', prizeText),
        field('Cash out', r.minCashout),
        field('Who can enter', r.eligibility),
        field('Limits', r.restricted),
        field('Last checked', r.lastChecked),
      ]),
    ]);

    /* links */
    var links = el('div', { class: 'rec-links' });
    if (r.signupUrl) links.appendChild(el('a', { class: 'link-btn primary', href: r.signupUrl, target: '_blank', rel: 'noopener nofollow', text: 'Official site →' }));
    if (r.rulesUrl && r.rulesUrl !== r.signupUrl) links.appendChild(el('a', { class: 'link-btn', href: r.rulesUrl, target: '_blank', rel: 'noopener nofollow', text: 'Rules' }));
    if (r.tosUrl) links.appendChild(el('a', { class: 'link-btn', href: r.tosUrl, target: '_blank', rel: 'noopener nofollow', text: 'Terms' }));
    if (r.iosUrl) links.appendChild(el('a', { class: 'link-btn', href: r.iosUrl, target: '_blank', rel: 'noopener nofollow', text: 'iOS app' }));
    main.appendChild(links);

    node.appendChild(main);

    /* verification note */
    if (r.verifyLevel === 'verified' && r.verifiedSource) {
      var v = el('div', { class: 'rec-verified' }, [
        el('h4', { text: 'Verified against the operator’s page' }),
        el('p', { html: '<strong>Read there:</strong> ' + esc(r.verifiedSource.read) }),
        el('p', { html: '<a href="' + esc(r.verifiedSource.url) + '" target="_blank" rel="noopener nofollow">' + esc(r.verifiedSource.url) + '</a>' }),
      ]);
      if (r.verifiedSource.note) v.appendChild(el('p', { html: '<strong>Note:</strong> ' + esc(r.verifiedSource.note) }));
      node.appendChild(v);
    }

    /* flags */
    if (r.flags && r.flags.length) {
      var ul = el('ul');
      r.flags.forEach(function (f) {
        var li = el('li');
        li.appendChild(el('code', { text: f.code }));
        li.appendChild(document.createTextNode(f.detail));
        ul.appendChild(li);
      });
      node.appendChild(el('div', { class: 'rec-flags' }, [
        el('h4', { text: 'Flagged for review (' + r.flags.length + ')' }), ul,
      ]));
    }

    /* deep detail */
    var hasDetail = r.detail && (r.detail.signupSteps.length || r.detail.howToWin.length ||
      r.detail.howToGetMoney.length || r.detail.tosNotes.length);
    if (hasDetail || (r.redFlags && r.redFlags.length) || (r.sources && r.sources.length)) {
      var body = el('div', { class: 'more-body' });

      function block(title, items) {
        if (!items || !items.length) return;
        body.appendChild(el('h5', { text: title }));
        var l = el('ul');
        items.forEach(function (t) { l.appendChild(el('li', { text: t })); });
        body.appendChild(l);
      }
      if (r.detail) {
        block('How to sign up', r.detail.signupSteps);
        block('How the competition works', r.detail.howToWin);
        block('How you get paid', r.detail.howToGetMoney);
        block('Terms notes', r.detail.tosNotes);
      }
      block('Watch-outs', r.redFlags);

      if (r.sources && r.sources.length) {
        body.appendChild(el('h5', { text: 'Sources' }));
        var sl = el('ul', { class: 'src-list' });
        r.sources.forEach(function (s) {
          var li = el('li');
          li.appendChild(el('span', { class: 'tier ' + s.tier, text: s.tier }));
          li.appendChild(el('a', {
            href: s.url, target: '_blank', rel: 'noopener nofollow',
            text: s.title || s.url,
          }));
          if (!s.hostIsOperator) {
            li.appendChild(el('span', {
              class: 'small muted', text: ' (third-party host)',
            }));
          }
          sl.appendChild(li);
        });
        body.appendChild(sl);
      }

      if (r.verificationLevel) {
        body.appendChild(el('h5', { text: 'Verification level' }));
        body.appendChild(el('p', { class: 'small', text: r.verificationLevel + ' — ' + (r.verificationSteps.join(' ') || '') }));
      }

      var det = el('details', { class: 'more' }, [
        el('summary', { text: 'Details, sources and watch-outs' }),
        body,
      ]);
      node.appendChild(det);
    }

    return node;
  }

  /* ── table row (desktop) ─────────────────────────────────────────────── */
  function trow(r) {
    var tr = el('tr', { class: r.verifyLevel === 'flagged' ? 'row-flagged' : '', id: 'trow-' + r.id });
    var nameCell = el('td', { class: 'name' });
    nameCell.appendChild(el('a', { href: r.signupUrl || '#', target: '_blank', rel: 'noopener nofollow', text: r.name }));
    nameCell.appendChild(el('div', {}, [badge(LEVEL_LABEL[r.verifyLevel], LEVEL_CLASS[r.verifyLevel], LEVEL_HELP[r.verifyLevel])]));

    var prizeCell = el('td', { class: 'prize' });
    if (r.maxPrizeUsd) prizeCell.appendChild(el('div', { class: 'prize-amt', text: money(r.maxPrizeUsd) }));
    prizeCell.appendChild(el('div', { class: 'small muted', text: r.prizeUsd || 'Not stated' }));

    var catCell = el('td', { class: 'nowrap' }, [el('div', { text: TYPE_LABEL[r.type] || r.type })]);
    catCell.appendChild(badge(PRIZE_LABEL[r.prizeType], PRIZE_CLASS[r.prizeType]));

    var statusCell = el('td', { class: 'nowrap' }, [badge(STATUS_LABEL[r.status] || r.status, STATUS_CLASS[r.status] || 'ended')]);
    statusCell.appendChild(el('div', {}, [badge(FREE_LABEL[r.freePath] || r.freePath, FREE_CLASS[r.freePath] || 'unstated')]));

    var eligCell = el('td', { class: 'notes', text: r.eligibility || 'Not stated' });

    var flagCell = el('td', { class: 'notes' });
    if (r.flags && r.flags.length) {
      flagCell.appendChild(el('span', { class: 'badge flagged', text: r.flags.length + ' flag' + (r.flags.length > 1 ? 's' : '') }));
      flagCell.appendChild(el('div', { class: 'small muted', text: r.flags[0].detail.slice(0, 110) + (r.flags[0].detail.length > 110 ? '…' : '') }));
    } else {
      flagCell.appendChild(el('span', { class: 'muted small', text: '—' }));
    }

    var linkCell = el('td', { class: 'nowrap' });
    if (r.rulesUrl) linkCell.appendChild(el('a', { href: r.rulesUrl, target: '_blank', rel: 'noopener nofollow', text: 'Rules' }));
    else linkCell.appendChild(el('span', { class: 'muted small', text: 'No rules link' }));

    tr.appendChild(nameCell);
    tr.appendChild(prizeCell);
    tr.appendChild(catCell);
    tr.appendChild(statusCell);
    tr.appendChild(eligCell);
    tr.appendChild(flagCell);
    tr.appendChild(linkCell);
    return tr;
  }

  /* ── controls ────────────────────────────────────────────────────────── */
  function buildControls(host, opts) {
    opts = opts || {};
    var row = el('div', { class: 'controls-row' });

    var box = el('div', { class: 'search-box' });
    box.innerHTML =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">' +
      '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>';
    var input = el('input', {
      type: 'search', id: 'q', placeholder: 'Search name, prize, eligibility…',
      'aria-label': 'Search competitions', autocomplete: 'off',
    });
    input.value = state.query;
    input.addEventListener('input', function () { state.query = input.value; render(); });
    box.appendChild(input);
    row.appendChild(box);

    if (!opts.hideType) {
      var selType = el('select', { 'aria-label': 'Filter by category' });
      selType.appendChild(el('option', { value: 'all', text: 'All categories' }));
      var typeCounts = {};
      state.data.rows.forEach(function (r) { typeCounts[r.type] = (typeCounts[r.type] || 0) + 1; });
      Object.keys(TYPE_LABEL).forEach(function (k) {
        if (!typeCounts[k]) return;
        var o = el('option', { value: k, text: TYPE_LABEL[k] + ' (' + typeCounts[k] + ')' });
        if (state.type === k) o.selected = true;
        selType.appendChild(o);
      });
      selType.addEventListener('change', function () { state.type = selType.value; render(); });
      row.appendChild(selType);
    }

    var selPrize = el('select', { 'aria-label': 'Filter by prize type' });
    [['all', 'Any prize type'], ['cash', 'Cash only'], ['mixed', 'Cash + other'],
      ['non-cash', 'Non-cash only'], ['unstated', 'Prize unstated']].forEach(function (p) {
      var o = el('option', { value: p[0], text: p[1] });
      if (state.prize === p[0]) o.selected = true;
      selPrize.appendChild(o);
    });
    selPrize.addEventListener('change', function () { state.prize = selPrize.value; render(); });
    row.appendChild(selPrize);

    var selLevel = el('select', { 'aria-label': 'Filter by verification level' });
    [['all', 'Any verification'], ['verified', 'Verified here'],
      ['official-linked', 'Official source'], ['flagged', 'Flagged only']].forEach(function (p) {
      var o = el('option', { value: p[0], text: p[1] });
      if (state.level === p[0]) o.selected = true;
      selLevel.appendChild(o);
    });
    selLevel.addEventListener('change', function () { state.level = selLevel.value; render(); });
    row.appendChild(selLevel);

    if (!opts.hideStatus) {
      var selStatus = el('select', { 'aria-label': 'Filter by status' });
      [['all', 'Any status'], ['live', 'Live'], ['caution', 'Caution'],
        ['mixed', 'Mixed'], ['ended', 'Ended']].forEach(function (p) {
        var o = el('option', { value: p[0], text: p[1] });
        if (state.status === p[0]) o.selected = true;
        selStatus.appendChild(o);
      });
      selStatus.addEventListener('change', function () { state.status = selStatus.value; render(); });
      row.appendChild(selStatus);
    }

    var selSort = el('select', { 'aria-label': 'Sort by' });
    [['cash', 'Best use of time'], ['prize', 'Largest prize'], ['name', 'Name A–Z'],
      ['category', 'Category'], ['checked', 'Recently checked']].forEach(function (p) {
      var o = el('option', { value: p[0], text: p[1] });
      if (state.sort === p[0]) o.selected = true;
      selSort.appendChild(o);
    });
    selSort.addEventListener('change', function () { state.sort = selSort.value; render(); });
    row.appendChild(selSort);

    host.appendChild(row);

    var chips = el('div', { class: 'chips' });
    var defs = [
      ['all', 'Everything'],
      ['cash', 'Cash prizes only'],
      ['verified', 'Verified here'],
      ['flagged', 'Flagged'],
    ];
    defs.forEach(function (d) {
      var b = el('button', { class: 'chip', type: 'button', 'aria-pressed': 'false', text: d[1] });
      b.addEventListener('click', function () {
        if (d[0] === 'verified' || d[0] === 'flagged') {
          state.level = state.level === d[0] ? 'all' : d[0];
        } else if (d[0] === 'cash') {
          state.prize = state.prize === 'cash' ? 'all' : 'cash';
        } else if (d[0] === 'all') {
          state.query = ''; state.type = 'all'; state.prize = 'all';
          state.level = 'all'; state.status = 'all';
          var q = $('#q'); if (q) q.value = '';
        }
        syncSelects();
        render();
        syncChips();
      });
      b.dataset.kind = d[0];
      chips.appendChild(b);
    });
    host.appendChild(chips);

    function syncChips() {
      Array.prototype.forEach.call(chips.querySelectorAll('.chip'), function (b) {
        var k = b.dataset.kind, on = false;
        if (k === 'verified' || k === 'flagged') on = state.level === k;
        else if (k === 'cash') on = state.prize === 'cash';
        else on = state.prize === 'all' && state.level === 'all' && state.type === 'all' && state.status === 'all' && !state.query;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    function syncSelects() {
      var sels = host.querySelectorAll('select');
      Array.prototype.forEach.call(sels, function (s) {
        var label = s.getAttribute('aria-label');
        if (label === 'Filter by category') s.value = state.type;
        if (label === 'Filter by prize type') s.value = state.prize;
        if (label === 'Filter by verification level') s.value = state.level;
        if (label === 'Filter by status') s.value = state.status;
      });
    }
    host._syncChips = syncChips;
    host._syncSelects = syncSelects;
    syncChips();
  }

  /* ── render ──────────────────────────────────────────────────────────── */
  var controlsHost, recordsHost, tableBody, countHost, tableWrap;

  function render() {
    var rows = state.data.rows.filter(matches).sort(compare);

    recordsHost.innerHTML = '';
    if (tableBody) tableBody.innerHTML = '';

    if (!rows.length) {
      recordsHost.appendChild(el('div', { class: 'empty', text: 'No competition matches those filters. Try clearing the search or choosing “Everything”.' }));
      if (tableBody) {
        var t = el('tr');
        var td = el('td', { colspan: '7', class: 'notes', text: 'No rows match those filters.' });
        t.appendChild(td); tableBody.appendChild(t);
      }
    } else {
      var frag = document.createDocumentFragment();
      rows.forEach(function (r) { frag.appendChild(card(r)); });
      recordsHost.appendChild(frag);
      if (tableBody) {
        var tf = document.createDocumentFragment();
        rows.forEach(function (r) { tf.appendChild(trow(r)); });
        tableBody.appendChild(tf);
      }
    }

    var flagged = rows.filter(function (r) { return r.verifyLevel === 'flagged'; }).length;
    countHost.innerHTML = 'Showing <strong>' + rows.length + '</strong> of <strong>' +
      state.data.rows.length + '</strong> competitions' +
      (flagged ? ' · <span class="muted">' + flagged + ' flagged</span>' : '');
    if (controlsHost && controlsHost._syncChips) controlsHost._syncChips();
  }

  /* ── boot ────────────────────────────────────────────────────────────── */
  function boot() {
    var root = $('#ledger');
    if (!root) return;

    var presetType = root.getAttribute('data-filter-type');
    var presetLevel = root.getAttribute('data-filter-level');
    var presetPrize = root.getAttribute('data-filter-prize');
    var presetSort = root.getAttribute('data-filter-sort');

    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        state.data = data;
        if (presetType) state.type = presetType;
        if (presetLevel) state.level = presetLevel;
        if (presetPrize) state.prize = presetPrize;
        if (presetSort) state.sort = presetSort;

        controlsHost = $('#controls');
        recordsHost = $('#records');
        tableBody = $('#table-body');
        countHost = $('#result-count');
        tableWrap = $('#table-wrap');

        if (controlsHost) {
          buildControls(controlsHost, {
            hideType: !!presetType,
            hideStatus: false,
          });
        }
        render();

        /* fill any <span data-stat="..."> in the page */
        document.querySelectorAll('[data-stat]').forEach(function (n) {
          var k = n.getAttribute('data-stat');
          var v = null;
          if (k === 'total') v = data.rows.length;
          else if (k === 'verified') v = data.rows.filter(function (r) { return r.verifyLevel === 'verified'; }).length;
          else if (k === 'flagged') v = data.rows.filter(function (r) { return r.verifyLevel === 'flagged'; }).length;
          else if (k === 'cash') v = data.rows.filter(function (r) { return r.prizeType === 'cash' && r.freePath === 'full' && r.status === 'live'; }).length;
          else if (k === 'official') v = data.rows.filter(function (r) { return r.verifyLevel === 'official-linked'; }).length;
          else if (k === 'rows-any-flag') v = data.rows.filter(function (r) { return r.flags.length > 0; }).length;
          if (v != null) n.textContent = v;
        });
      })
      .catch(function (err) {
        root.innerHTML = '';
        root.appendChild(el('div', {
          class: 'callout bad',
          html: '<strong>The table could not load.</strong> ' +
            'The data file <code>assets/data/competitions.json</code> did not load (' +
            esc(err.message) + '). If you opened this file directly from disk, serve it over ' +
            'HTTP instead — browsers block local file reads. Every competition also appears on its ' +
            'category page and on the <a href="flagged.html">Flagged for review</a> page.',
        }));
      });
  }

  /* ── mobile nav ──────────────────────────────────────────────────────── */
  function nav() {
    var btn = $('#nav-toggle'), menu = $('#site-nav');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { nav(); boot(); });
  } else { nav(); boot(); }
})();
