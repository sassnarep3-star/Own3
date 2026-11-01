(() => {
  const body = document.body;
  const url = body.dataset.data;
  const fixedCategory = body.dataset.category || '';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const safeUrl = value => {
    try { const parsed = new URL(value); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : ''; }
    catch { return ''; }
  };
  const blank = '<span class="empty" aria-label="Unverified; intentionally blank">—</span>';
  const categoryPath = id => `categories/${encodeURIComponent(id)}.html`;

  fetch(url).then(response => {
    if (!response.ok) throw new Error(`Catalog could not be loaded (${response.status})`);
    return response.json();
  }).then(data => {
    const rows = data.listings;
    const cats = data.categories;
    const totals = Object.fromEntries(cats.map(c => [c.id, rows.filter(r => r.category === c.id).length]));
    document.querySelectorAll('.nav-count').forEach(el => { el.textContent = String(rows.length); });

    if (body.dataset.page === 'home') {
      const stats = document.querySelector('#stats');
      if (stats) stats.innerHTML = `<div class="stat"><b>${rows.length}</b><span>Candidate listings</span></div><div class="stat"><b>${cats.length}</b><span>Browseable categories</span></div><div class="stat"><b>${rows.filter(r => r.verificationStatus !== 'Unverified').length}</b><span>Independently verified</span></div>`;
      const grid = document.querySelector('#category-grid');
      if (grid) grid.innerHTML = cats.map(c => `<a class="category-card" href="${categoryPath(c.id)}"><span class="category-card-top"><strong>${esc(c.name)}</strong><span class="count-pill">${totals[c.id]}</span></span><p>${esc(c.description)}</p><span class="card-foot"><span>Open category</span><span aria-hidden="true">→</span></span></a>`).join('');
      const select = document.querySelector('#category-filter');
      if (select) select.insertAdjacentHTML('beforeend', cats.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join(''));
    }

    const search = document.querySelector('#search');
    const filter = document.querySelector('#category-filter');
    const mount = document.querySelector('#table-mount');
    const count = document.querySelector('#result-count');
    if (!mount) return;
    const render = () => {
      const needle = (search?.value || '').trim().toLowerCase();
      const category = fixedCategory || filter?.value || '';
      const visible = rows.filter(item => (!category || item.category === category) && (!needle || `${item.name} ${item.categoryName}`.toLowerCase().includes(needle)));
      if (count) count.textContent = `${visible.length} of ${rows.filter(item => !category || item.category === category).length} candidates`;
      if (!visible.length) { mount.innerHTML = '<div class="empty-state">No matching listings. Try another search.</div>'; return; }
      mount.innerHTML = `<table><thead><tr><th scope="col">Candidate</th><th scope="col">Type</th><th scope="col">Prize</th><th scope="col">Entry cost</th><th scope="col">Eligibility</th><th scope="col">Availability</th><th scope="col">Payout / effort</th><th scope="col">Evidence</th><th scope="col">Source</th></tr></thead><tbody>${visible.map(item => {
        const link = safeUrl(item.sourceUrl);
        const source = link ? `<a href="${esc(link)}" target="_blank" rel="noopener noreferrer">${esc(item.sourceTitle || 'Official source link')} ↗</a><small>${esc(item.sourceBasis)}</small>` : '<span class="status-pill">Source URL unavailable</span>';
        return `<tr><th scope="row">${esc(item.name)}<div style="margin-top:6px"><a class="flag-link" href="${body.dataset.page === 'category' ? '../flagged-for-review.html' : 'flagged-for-review.html'}">Review flag ↗</a></div></th><td>${esc(item.categoryName)}</td><td class="empty">${blank}</td><td class="empty">${blank}</td><td class="empty">${blank}</td><td class="empty">${blank}</td><td class="empty">${blank}</td><td><span class="status-pill">${esc(item.verificationStatus)}</span><small style="display:block;margin-top:5px;color:#738198">${esc(item.reviewNote)}</small></td><td class="source-cell">${source}</td></tr>`;
      }).join('')}</tbody></table>`;
    };
    search?.addEventListener('input', render);
    filter?.addEventListener('change', render);
    render();
  }).catch(error => {
    const mount = document.querySelector('#table-mount');
    if (mount) mount.innerHTML = `<div class="empty-state">Catalog unavailable: ${esc(error.message)}. Open the <a href="${esc(url)}">catalog data</a> directly or refresh this page.</div>`;
  });
})();
