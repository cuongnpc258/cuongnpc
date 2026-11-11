const tools = [
  {
    id: 'kpi-nhan-vien', title: 'KPI nhân viên', group: 'nhan-vien', groupLabel: 'Nhân viên', icon: '↗', color: 'blue',
    description: 'Doanh số, HOT, bill, thuốc và lượt khách theo nhân viên.',
    source: 'Tải file Excel', status: 'Cần file dữ liệu',
    url: 'https://script.google.com/macros/s/AKfycbwYOFhkHeyp_t6EgwDRcVoTroEXLjkkFEHTtII91t6w25I1NYiLNP7OEzsM0covHIRv1Q/exec',
    alternate: 'https://sssslc.blogspot.com/p/push-kpi-shop.html', tags: ['doanh số', 'HOT', 'bill', 'lượt khách']
  },
  {
    id: 'kpi-duoc-si-ve-tinh', title: 'KPI dược sĩ vệ tinh', group: 'nhan-vien', groupLabel: 'Nhân viên', icon: '◎', color: 'teal',
    description: '% hoàn thành doanh thu, shop vệ tinh, xếp hạng và mốc 130%.',
    source: 'Tải file Excel', status: 'Cần file dữ liệu',
    url: 'https://script.google.com/macros/s/AKfycbwy_M-SD0Qh4P0HOEfdn60k5M6uNi9hOp3cOHGwGfaK4vWK0R0Pr2bN_BXRKBP4qYbVGQ/exec', tags: ['doanh thu', 'vệ tinh', 'xếp hạng']
  },
  {
    id: 'data-bau', title: 'Data & bill thuốc bầu', group: 'nhan-vien', groupLabel: 'Nhân viên', icon: '◈', color: 'rose',
    description: 'Tỷ lệ nhập data bầu theo ngày, nhân viên và shop vệ tinh.',
    source: 'Tải file Excel', status: 'Cần file dữ liệu',
    url: 'https://sssslc.blogspot.com/p/bao-cao-data-bau-input-cua-nv-kv32.html', tags: ['data bầu', 'bill thuốc bầu', 'tỷ lệ']
  },
  {
    id: 'nhan-su', title: 'Quản trị nhân sự', group: 'nhan-vien', groupLabel: 'Nhân viên', icon: '♙', color: 'purple',
    description: 'Nhân sự, headcount, chức danh, level CM và luân chuyển.',
    source: 'Google Sheet & Excel', status: 'Có dữ liệu tại nguồn',
    url: 'https://script.google.com/macros/s/AKfycbwIh0QBhNLTXB74HLdHo6fHGG45NTxW0_Iq64sM8bkMlL_g78Q2iQuCB7JwuZ1CFLHoew/exec', tags: ['headcount', 'level CM', 'shop', 'nhân sự']
  },
  {
    id: 'asm-shop', title: 'KPI quản lý shop', group: 'nha-thuoc', groupLabel: 'Nhà thuốc', icon: '▣', color: 'orange',
    description: 'Dashboard và biểu đồ ping push, xếp loại KPI từng shop.',
    source: 'Tải file Excel', status: 'Cần file dữ liệu',
    url: 'https://sssslc.blogspot.com/p/asm-push-kpi-ql-shop.html', tags: ['ASM', 'shop', 'KPI', 'biểu đồ']
  },
  {
    id: 'can-date-qa', title: 'Cận date & QA phản hồi', group: 'nha-thuoc', groupLabel: 'Nhà thuốc', icon: '◷', color: 'amber',
    description: 'Theo dõi sản phẩm cận date và tra cứu kết quả QA theo mã shop.',
    source: 'Excel & Google Sheet', status: 'Hai luồng dữ liệu',
    url: 'https://sssslc.blogspot.com/p/bao-cao-can-date.html', tags: ['cận date', 'QA', 'mã shop']
  },
  {
    id: 'kpi-trung-tam', title: 'KPI trung tâm tiêm chủng', group: 'trung-tam', groupLabel: 'Trung tâm', icon: '✚', color: 'green',
    description: 'Phân tích và báo cáo hiệu suất trung tâm tiêm chủng.',
    source: 'Tải file Excel', status: 'Cần file dữ liệu',
    url: 'https://script.google.com/macros/s/AKfycbwoyn4xSJlpUj7a9uI_9emlWE3iH4l4r8VTT6hvAP5hyjiohGSivFrg-w2MmVdjYBvA/exec', tags: ['trung tâm', 'tiêm chủng', 'doanh thu']
  },
  {
    id: 'chi-tieu-tvv', title: 'Quản lý chỉ tiêu TVV', group: 'tu-van-vien', groupLabel: 'Tư vấn viên', icon: '◇', color: 'purple',
    description: 'Nhập chỉ tiêu TVV, theo dõi shop, nhân viên và dashboard ASM.',
    source: 'Google Sheet', status: 'Dashboard ASM có khóa',
    url: 'https://script.google.com/macros/s/AKfycbzsbv0hvnXUwGaVjsuVLZ0rFYMxTiigrq8B9_KrRQ96WHPyHIEvfRzPJaaq7O3mgrjHmg/exec', tags: ['TVV', 'chỉ tiêu', 'ASM']
  },
  {
    id: 'ping-tvv', title: 'Ping Push TVV', group: 'tu-van-vien', groupLabel: 'Tư vấn viên', icon: '⌁', color: 'blue',
    description: 'Chỉ tiêu, doanh số, HOT, bill, gói, lượt khách, KH nhi và bầu.',
    source: 'Tải 4 file Excel', status: 'Cần file dữ liệu',
    url: 'https://script.google.com/macros/s/AKfycbxHPTdKqQduqz0As7cbEq4KOsmh9LTo4Km_RaCFK4OK4JexX-EHqecsbBEnmNq6B_7E/exec', tags: ['TVV', 'gói', 'KH nhi', 'bầu']
  },
  {
    id: 'vaccine-crm', title: 'Chăm sóc khách hàng vaccine', group: 'vaccine', groupLabel: 'Vaccine & KH', icon: '✳', color: 'rose',
    description: 'Dashboard KH, lịch hẹn, doanh số theo TAG và nhân viên; chăm sóc sau tiêm.',
    source: 'Google Sheet', status: 'Dashboard có mật khẩu',
    url: 'https://sssslc.blogspot.com/p/cham-soc-khach-hang-vaccine.html', tags: ['vaccine', 'khách hàng', 'lịch hẹn', 'chăm sóc']
  },
  {
    id: 'goi-vaccine', title: 'Gói vaccine theo độ tuổi', group: 'vaccine', groupLabel: 'Vaccine & KH', icon: '▤', color: 'teal',
    description: 'Tra cứu gói tiêm theo độ tuổi và in, tải hoặc chia sẻ lịch tiêm.',
    source: 'Danh mục tham khảo', status: 'Mở trực tiếp',
    url: 'https://sssslc.blogspot.com/p/goi-vaccine-theo-do-tuoi.html', tags: ['gói tiêm', 'độ tuổi', 'in A5']
  }
];

const metrics = [
  { name: 'Doanh số & bill', owner: 'Nhân viên', source: 'KPI nhân viên', toolId: 'kpi-nhan-vien', icon: '↗', color: 'blue' },
  { name: '% HT doanh thu', owner: 'Dược sĩ vệ tinh', source: 'KPI dược sĩ vệ tinh', toolId: 'kpi-duoc-si-ve-tinh', icon: '◎', color: 'teal' },
  { name: 'Xếp loại KPI shop', owner: 'Nhà thuốc', source: 'KPI quản lý shop', toolId: 'asm-shop', icon: '▣', color: 'orange' },
  { name: 'Hiệu suất trung tâm', owner: 'Trung tâm tiêm chủng', source: 'KPI trung tâm', toolId: 'kpi-trung-tam', icon: '✚', color: 'green' },
  { name: 'Chỉ tiêu & gói TVV', owner: 'Tư vấn viên', source: 'Ping Push TVV', toolId: 'ping-tvv', icon: '◇', color: 'purple' },
  { name: 'Headcount & Level CM', owner: 'Nhân sự', source: 'Quản trị nhân sự', toolId: 'nhan-su', icon: '♙', color: 'rose' }
];

const groups = [
  ['all', 'Tất cả'], ['nhan-vien', 'Nhân viên'], ['nha-thuoc', 'Nhà thuốc'],
  ['trung-tam', 'Trung tâm'], ['tu-van-vien', 'Tư vấn viên'], ['vaccine', 'Vaccine & KH']
];
const byId = Object.fromEntries(tools.map(tool => [tool.id, tool]));
let currentGroup = 'all';
let searchTerm = '';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function renderMetrics() {
  document.getElementById('metricGrid').innerHTML = metrics.map(metric => {
    const target = byId[metric.toolId];
    return `<article class="metric-card"><span class="metric-icon ${metric.color}">${metric.icon}</span><div class="metric-main"><span class="metric-owner">${escapeHtml(metric.owner)}</span><h3>${escapeHtml(metric.name)}</h3><span class="metric-value">— <small>Chưa kết nối</small></span></div><a href="${target.url}" target="_blank" rel="noopener noreferrer" aria-label="Mở nguồn ${escapeHtml(metric.source)}">Nguồn: ${escapeHtml(metric.source)} <span aria-hidden="true">↗</span></a></article>`;
  }).join('');
}

function renderFilters() {
  document.getElementById('filterBar').innerHTML = groups.map(([id, label]) => `<button type="button" class="filter-chip ${currentGroup === id ? 'selected' : ''}" data-filter="${id}" aria-pressed="${currentGroup === id}">${label}</button>`).join('');
}

function renderTools() {
  const visible = tools.filter(tool => {
    const matchGroup = currentGroup === 'all' || tool.group === currentGroup;
    const haystack = [tool.title, tool.groupLabel, tool.description, tool.source, ...tool.tags].join(' ').toLocaleLowerCase('vi');
    return matchGroup && haystack.includes(searchTerm);
  });
  document.getElementById('toolGrid').innerHTML = visible.map(tool => `<article class="tool-card"><div class="tool-top"><span class="tool-icon ${tool.color}">${tool.icon}</span><span class="tool-group">${escapeHtml(tool.groupLabel)}</span></div><h3>${escapeHtml(tool.title)}</h3><p>${escapeHtml(tool.description)}</p><div class="tool-meta"><span>${escapeHtml(tool.source)}</span><span class="status-dot"></span><span>${escapeHtml(tool.status)}</span></div><div class="tool-actions"><a class="tool-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Mở công cụ <span aria-hidden="true">↗</span></a>${tool.alternate ? `<a class="alternate-link" href="${tool.alternate}" target="_blank" rel="noopener noreferrer" title="Mở qua Blogspot">Trang Blog ↗</a>` : ''}</div></article>`).join('');
  document.getElementById('emptyState').hidden = visible.length > 0;
}

function setGroup(group) {
  currentGroup = groups.some(([id]) => id === group) ? group : 'all';
  renderFilters(); renderTools();
  document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === group));
  if (group === 'all') document.querySelector('[data-nav="tong-quan"]').classList.add('active');
}

document.getElementById('filterBar').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (button) setGroup(button.dataset.filter);
});
document.getElementById('searchInput').addEventListener('input', event => {
  searchTerm = event.target.value.trim().toLocaleLowerCase('vi'); renderTools();
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault(); document.getElementById('searchInput').focus();
  }
});
document.querySelectorAll('[data-nav]').forEach(link => link.addEventListener('click', event => {
  const group = link.dataset.nav;
  if (group !== 'tong-quan') { event.preventDefault(); setGroup(group); document.getElementById('cong-cu').scrollIntoView({behavior:'smooth'}); }
  else setGroup('all');
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('menuButton').setAttribute('aria-expanded', 'false');
}));
document.getElementById('menuButton').addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
  document.getElementById('menuButton').setAttribute('aria-expanded', String(sidebar.classList.contains('open')));
});

renderMetrics(); renderFilters(); renderTools();
