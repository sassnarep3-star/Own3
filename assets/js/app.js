/* Prize Scout — progressive enhancement only. All content is static HTML; this adds search/filter. */
(function () {
  var grid = document.getElementById('grid');
  if (!grid) return;
  var q = document.getElementById('q'), vf = document.getElementById('vf'), count = document.getElementById('count');
  var rows = Array.prototype.slice.call(grid.tBodies[0].rows);
  function apply() {
    var term = (q.value || '').trim().toLowerCase(), f = vf.value, shown = 0;
    rows.forEach(function (r) {
      var lvl = r.getAttribute('data-level');
      var ok = (!term || (r.getAttribute('data-search') || '').indexOf(term) !== -1) &&
        (!f || (f === 'checked' ? lvl !== 'unverified' : f === 'verified' ? lvl === 'verified' : lvl === 'unverified'));
      r.classList.toggle('hidden', !ok);
      if (ok) shown++;
    });
    count.textContent = 'Showing ' + shown + ' of ' + rows.length;
  }
  q.addEventListener('input', apply); vf.addEventListener('change', apply);
  var m = /[?&]q=([^&]*)/.exec(location.search); if (m) q.value = decodeURIComponent(m[1].replace(/\+/g, ' '));
  apply();
})();
