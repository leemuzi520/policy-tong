// ============================================================
// UI 交互层（2a.1 步骤 D，2026-08-02）：渲染 / 事件 / 持久化
// 依赖：fields.js（字段注册表）、engine.js（POLICIES/COLUMNS/PLAN_LAYERS/evaluatePolicyConditions）
// ============================================================

// ============================================================
// 工具函数
// ============================================================
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

// ============================================================
// 标签切换
// ============================================================
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    $$('.tab-panel').forEach(p => p.classList.remove('active'));
    $(`#tab-${btn.dataset.tab}`).classList.add('active');
    // 切换到匹配/诊断标签时隐藏方法论横幅
    $('#methodologyBanner').style.display = btn.dataset.tab === 'browse' ? '' : 'none';
  });
});

// ============================================================
// 标签1：政策库 - 渲染与筛选
// ============================================================
// 行业选项从政策数据自动生成（单一数据源，筛选栏与匹配表单共用，避免词表分叉）
function industryOptionsHTML() {
  const industries = [...new Set(POLICIES.flatMap(p => p.applicableIndustries))].sort();
  return industries.map(ind => `<option value="${ind}">${ind}</option>`).join('');
}

function populateIndustryFilter() {
  $('#filterIndustry').innerHTML = '<option value="">全部行业</option>' + industryOptionsHTML();
}

// 2b.3 多维筛选（2026-08-06）：部门按发文机关动态收集；申报月份按 policyWindowMonths 动态生成（滚动/未定政策不入月份选项，归时间轴专区）
function populateDeptFilter() {
  const depts = [...new Set(POLICIES.map(p => p.issuingBody))].sort();
  $('#filterDept').innerHTML = '<option value="">全部部门</option>' +
    depts.map(d => `<option value="${d}">${d}</option>`).join('');
}

// 2b.3 级别筛选动态化：静态选项原只有国家级/省级，第 4 批市级政策（city.js）需「市级」选项才能按级别筛到
function populateLevelFilter() {
  const levels = ['国家级', '省级', '市级'].filter(lv => POLICIES.some(p => p.level === lv));
  $('#filterLevel').innerHTML = '<option value="">全部级别</option>' +
    levels.map(lv => `<option value="${lv}">${lv}</option>`).join('');
}

function populateMonthFilter() {
  const months = [...new Set(POLICIES.flatMap(p => policyWindowMonths(p)))].sort();
  $('#filterMonth').innerHTML = '<option value="">全部月份</option>' +
    months.map(m => `<option value="${m}">${Number(m.slice(0, 4))} 年 ${Number(m.slice(5, 7))} 月</option>`).join('');
}

// ============================================================
// 政策库专栏（P4：按政策体系分专栏；链条视图归属专精特新专栏）
// ============================================================

// 政策卡片三维标签（2b.2，2026-08-05）：effort 档位 + 截止状态；数据缺失兜底显示
function effortTagHTML(p) {
  const info = getEffortInfo(p);
  const color = info.level === 'Easy' ? 'var(--success)' : info.level === 'Heavy' ? 'var(--danger)' : 'var(--warning)';
  const bg = info.level === 'Easy' ? 'var(--bg-success)' : info.level === 'Heavy' ? 'var(--bg-danger)' : 'var(--bg-warning)';
  return `<span class="tag" style="background:${bg};color:${color};border:1px solid ${color};" title="申报成本：材料复杂度档位">成本 ${info.label}</span>`;
}
function timingTagHTML(p) {
  const t = getTimingInfo(p);
  if (!t.has) return `<span class="tag" style="color:var(--text-secondary);border:1px solid var(--border);" title="无固定窗口，以官方通知为准">${t.label}</span>`;
  if (t.rolling) return `<span class="tag" style="background:var(--bg-success);color:var(--success);border:1px solid var(--success);" title="滚动申报、无固定截止">滚动申报</span>`;
  const color = t.days <= 14 ? 'var(--danger)' : t.days <= 30 ? 'var(--warning)' : 'var(--success)';
  const bg = t.days <= 14 ? 'var(--bg-danger)' : t.days <= 30 ? 'var(--bg-warning)' : 'var(--bg-success)';
  return `<span class="tag" style="background:${bg};color:${color};border:1px solid ${color};" title="距最近未截止批次 ${t.date} 剩 ${t.days} 天">距截止 ${t.days} 天</span>`;
}

function policyCardHtml(p) {
  return `
    <div class="policy-card" id="card-${p.id}">
      <div class="policy-card-header" onclick="togglePolicy('${p.id}')">
        <div>
          <div class="policy-name">${p.name}</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:2px;">${p.issuingBody}</div>
        </div>
        <div class="policy-meta">
          <span class="tag tag-level">${p.level}</span>
          <span class="tag tag-body">${p.issuingBody.split(' / ')[0]}</span>
          <span class="tag tag-deadline">${p.deadline}</span>
          ${effortTagHTML(p)}
          ${timingTagHTML(p)}
        </div>
      </div>
      <div class="policy-card-body">
        ${p.alert ? `<div class="policy-alert ${p.alert.level}"><strong>⚠️ 政策重要变更</strong>：${p.alert.text} <a href="${p.alert.link}" target="_blank" rel="noopener">${p.alert.linkLabel}</a></div>` : ''}
        <div class="policy-summary"><strong>政策简介</strong>：${p.summary}</div>
        ${p.changes ? `<div class="policy-changes"><strong>${p.changesTitle || '2026 新标准变化要点'}</strong>（${p.changesNote || '依据《优质中小企业梯度培育管理办法》2026 年 2 号文，门槛总体提高'}）：<ul>${p.changes.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}
        <div style="margin-bottom:10px;font-size:13px;color:var(--text-secondary);">
          适用行业：${p.applicableIndustries.join(' / ')} &nbsp;|&nbsp; 奖补：${p.subsidy} &nbsp;|&nbsp; 数据更新：${p.updated}
        </div>
        ${p.conditions.map(cat => `
          <div class="condition-category">
            <div class="condition-cat-title">${cat.category}</div>
            ${cat.paths
              ? cat.paths.map(path => `
                  <div style="font-size:12.5px;font-weight:600;color:#1e3a5f;margin:6px 0 2px;">${path.name}</div>
                  ${path.items.map(item => `
                    <div class="condition-item">
                      <span class="dot ${item.required ? 'required' : 'optional'}" title="${item.required ? '必选条件' : '可选条件'}"></span>
                      <div>
                        <span style="font-weight:500;">${item.name}</span>
                        ${item.required ? '<span style="font-size:11px;color:var(--danger);margin-left:4px;">[必选]</span>' : '<span style="font-size:11px;color:var(--warning);margin-left:4px;">[可选]</span>'}
                        <div class="desc">${item.description}</div>
                      </div>
                    </div>`).join('')}
                `).join('')
              : cat.items.map(item => `
                  <div class="condition-item">
                    <span class="dot ${item.required ? 'required' : 'optional'}" title="${item.required ? '必选条件' : '可选条件'}"></span>
                    <div>
                      <span style="font-weight:500;">${item.name}</span>
                      ${item.required ? '<span style="font-size:11px;color:var(--danger);margin-left:4px;">[必选]</span>' : '<span style="font-size:11px;color:var(--warning);margin-left:4px;">[可选]</span>'}
                      <div class="desc">${item.description}</div>
                    </div>
                  </div>
                `).join('')}
          </div>
        `).join('')}
        <div class="policy-tips">
          <strong>实操提醒（来自 49 家企业申报经验）</strong>：${p.tips}
        </div>
        <div class="policy-source">
          <span class="src-tag">政策原文</span>
          <div class="src-docs">
            <div class="src-doc"><a href="${p.source.url}" target="_blank" rel="noopener">${p.source.name}（政府官网）</a></div>
            ${p.notice ? `<div class="src-doc"><a href="${p.notice.url}" target="_blank" rel="noopener">${p.notice.name}（政府官网）</a>${p.notice.timeline ? `<span class="src-note">｜${p.notice.timeline}</span>` : ''}</div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPolicyList() {
  const searchTerm = ($('#policySearch')?.value || '').trim();
  const levelFilter = ($('#filterLevel')?.value || '');
  const industryFilter = ($('#filterIndustry')?.value || '');
  const deptFilter = ($('#filterDept')?.value || '');
  const monthFilter = ($('#filterMonth')?.value || '');
  const sortMode = ($('#filterSort')?.value || '');

  const filtered = POLICIES.filter(p => {
    const matchSearch = policyMatchesSearch(p, searchTerm); // 2b.3 全文检索：政策名 + 发文机关 + 条件描述
    const matchLevel = !levelFilter || p.level === levelFilter;
    const matchIndustry = !industryFilter || p.applicableIndustries.includes(industryFilter);
    const matchDept = !deptFilter || p.issuingBody === deptFilter;
    const matchMonth = !monthFilter || policyWindowMonths(p).includes(monthFilter);
    return matchSearch && matchLevel && matchIndustry && matchDept && matchMonth;
  });

  // 2b.3 排序：专栏分组不变、组内按截止日升序（滚动/无窗口排尾）；默认路径恒等现状
  const sortCards = cards => sortMode === 'deadline'
    ? cards.slice().sort((a, b) =>
        (getTimingInfo(a).date || '9999-99-99').localeCompare(getTimingInfo(b).date || '9999-99-99') || a.order - b.order)
    : cards;

  const container = $('#policyList');
  container.innerHTML = COLUMNS.map(col => {
    const cards = sortCards(filtered.filter(p => p.column === col.id));
    if (cards.length === 0) return ''; // 过滤后空专栏整块隐藏（含其链条视图）
    return `
      <div class="policy-column" data-column="${col.id}">
        <div class="column-head">
          <div class="column-title">${col.name}</div>
          <div class="column-desc">${col.desc}</div>
          <span class="column-count">${col.countLabel}</span>
        </div>
        ${col.id === 'zjt' ? '<div id="gradientChain"></div>' : ''}
        ${cards.map(policyCardHtml).join('')}
      </div>`;
  }).join('') || '<div class="empty-tip">没有符合条件的政策——试试清空搜索或筛选条件</div>';

  renderGradientChain(); // 容器在专精特新专栏内；专栏被过滤隐藏时函数内已判空
}

function togglePolicy(id) {
  const card = document.getElementById(`card-${id}`);
  card.classList.toggle('open');
}

function renderGradientChain() {
  const container = $('#gradientChain');
  if (!container) return;
  container.innerHTML = `
    <div class="gradient-chain">
      <div class="chain-title">专精特新梯度培育全链条（5 层：前三层逐级申报，末两层并列方向）</div>
      ${GRADIENT_CHAIN.map((n, i) => `
        <div class="chain-node">
          <div class="chain-node-head">
            <span class="chain-badge">${i + 1}</span>
            <span class="chain-name">${n.name}</span>
            <span class="chain-level">${n.level}</span>
          </div>
          <div class="chain-row"><span class="chain-k">谁评</span>${n.org}</div>
          <div class="chain-row"><span class="chain-k">文件依据</span>${n.doc}</div>
          <div class="chain-row"><span class="chain-k">解读指标</span>${n.std}</div>
          <div class="chain-row"><span class="chain-k">申报窗口</span>${n.window}</div>
          <div class="chain-row"><span class="chain-k">申报了有什么用</span>${n.value}</div>
          ${n.policyId ? `<button class="btn btn-primary" style="margin-top:6px;padding:4px 12px;font-size:12px;" onclick="goPolicy('${n.policyId}')">查看该层政策详情</button>` : '<div class="chain-no-card">省级细则以属地为准</div>'}
        </div>
        ${i < GRADIENT_CHAIN.length - 1 ? `<div class="chain-arrow ${i >= 3 ? 'branch' : ''}">${i >= 3 ? '↳ 并列方向（与小巨人衔接，非前后递进）' : '↓ 逐级申报'}</div>` : ''}
      `).join('')}
    </div>`;
}

// 2b.3 申报时间轴（2026-08-06）：未来 12 个月申报窗口一览 + 滚动申报/窗口未定分区
// 独立渲染不与筛选/搜索联动（29 条固定全量，避免每击键重算）；点击政策复用 goPolicy（跳转前清空筛选）
function renderTimeline() {
  const body = $('#timelineBody');
  if (!body) return;
  const now = new Date();
  const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const pad = n => String(n).padStart(2, '0');
  const today = ymd(now);

  // 未来 12 个月（当月起）
  const months = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    months.push({ key: `${d.getFullYear()}-${pad(d.getMonth() + 1)}`, label: `${d.getFullYear()} 年 ${d.getMonth() + 1} 月` });
  }

  // 申报事件：batches 未来批次 + 未来 deadlineDate（与 policyWindowMonths 同口径）
  const events = [];
  POLICIES.forEach(p => {
    (p.batches || []).forEach(b => { if (b.date >= today) events.push({ month: b.date.slice(0, 7), p, date: b.date, note: b.label }); });
    if (p.deadlineDate && p.deadlineDate >= today) events.push({ month: p.deadlineDate.slice(0, 7), p, date: p.deadlineDate, note: '' });
  });

  const byMonth = months.map(mo => ({
    ...mo,
    list: events.filter(e => e.month === mo.key).sort((a, b) => a.date.localeCompare(b.date))
  }));
  const withEvent = new Set(events.map(e => e.p.id));
  const rolling = POLICIES.filter(p => p.is_rolling);
  const undecided = POLICIES.filter(p => !p.is_rolling && !withEvent.has(p.id));

  const itemBtn = e => `<button type="button" class="timeline-item" title="${e.p.name}｜${e.date}${e.note ? '｜' + e.note : ''}" onclick="goPolicy('${e.p.id}')">${e.p.name}（${e.date.slice(5)}）</button>`;

  body.innerHTML =
    `<div class="timeline-grid">` +
    byMonth.map(mo => `
      <div class="timeline-month">
        <div class="timeline-month-title">${mo.label}</div>
        ${mo.list.map(itemBtn).join('') || '<span class="timeline-empty">暂无申报窗口</span>'}
      </div>`).join('') +
    `</div>` +
    (rolling.length ? `<div class="timeline-zone"><b>滚动申报（随时可报）</b>：${rolling.map(p => `<button type="button" class="timeline-item" style="display:inline-block;width:auto;" onclick="goPolicy('${p.id}')">${p.name}</button>`).join('')}</div>` : '') +
    (undecided.length ? `<div class="timeline-zone"><b>窗口未定（${undecided.length} 条）</b>：${undecided.map(p => p.name).join('、')}，以官方通知为准</div>` : '');
}

function toggleTimeline() {
  const body = $('#timelineBody');
  if (!body) return;
  const hidden = body.hasAttribute('hidden');
  if (hidden) body.removeAttribute('hidden'); else body.setAttribute('hidden', '');
  const btn = $('#windowTimeline .timeline-toggle');
  if (btn) btn.textContent = hidden ? '📅 申报窗口时间轴 · 未来 12 个月 ▴' : '📅 申报窗口时间轴 · 未来 12 个月 ▾';
}

function goPolicy(id) {
  // 清空浏览筛选（搜索/部门/层级/行业/月份）：筛选状态下目标政策卡可能被过滤掉，导致 card 为 null 崩溃
  // 2b.3：filterSort 不清——排序不影响卡片是否渲染
  ['policySearch', 'filterDept', 'filterLevel', 'filterIndustry', 'filterMonth'].forEach(key => {
    const el = $(`#${key}`);
    if (el) el.value = '';
  });
  renderPolicyList();
  const btn = [...$$('.tab-btn')].find(b => b.dataset.tab === 'browse');
  if (btn) btn.click();
  togglePolicy(id);
  const card = document.getElementById(`card-${id}`);
  if (card) card.scrollIntoView({ behavior: 'smooth' });
}

// 从匹配结果跳转到自诊断并预选政策（2026-08-02 P1-2，黄条直达按钮）
function goDiag(id) {
  const btn = [...$$('.tab-btn')].find(b => b.dataset.tab === 'diagnose');
  if (btn) btn.click();
  $('#diagPolicySelect').value = id;
  loadDiagnosis();
  $('#diagnosisChecklist').scrollIntoView({ behavior: 'smooth' });
}

// 绑定搜索与筛选
document.addEventListener('DOMContentLoaded', () => {
  // 2a.1 步骤 C：字段表单由注册表渲染（须在 populate 之前，选项就绪后才能 restore）
  renderFormFields('matchFormFields', 'match');
  renderFormFields('planFormFields', 'plan');
  populateIndustryFilter();
  populateLevelFilter();
  populateDeptFilter();
  populateMonthFilter();
  renderTimeline();
  renderGradientChain();
  renderPolicyList();
  populateDiagSelect();
  // 恢复上次会话状态（P0-1.4 持久化；须在 populate 之后，选项就绪才能赋值）
  restoreMatchState();
  restoreDiagState();
  restorePlanState();
  // 字段联动：加载后补一次，规划表单空字段自动带入匹配表单已填值（跨刷新也生效）
  syncMatchToPlan();
});
$('#policySearch')?.addEventListener('input', renderPolicyList);
$('#filterLevel')?.addEventListener('change', renderPolicyList);
$('#filterIndustry')?.addEventListener('change', renderPolicyList);
$('#filterDept')?.addEventListener('change', renderPolicyList);
$('#filterMonth')?.addEventListener('change', renderPolicyList);
$('#filterSort')?.addEventListener('change', renderPolicyList);

// ============================================================
// 标签2：智能匹配
// ============================================================
function getMatchProfile() {
  const p = {};
  FIELDS.filter(f => f.match && f.type !== 'checkbox').forEach(f => { p[f.key] = document.getElementById(f.id).value; });
  // level 未选时返回 undefined 而非 0：数字 0 会被「已获称号」条件误判为未通过（用户只是没填，不是明确否）
  p.level = document.getElementById('mLevel').value === '' ? undefined : Number(document.getElementById('mLevel').value);
  p.certs = Array.from(document.querySelectorAll('.mCert:checked')).map(cb => cb.value);
  return p;
}

// 逐条件评估公共函数（智能匹配 runMatch 与培育规划 runPlan 共用，规则单源，避免两处判定分叉）
// 返回：score（已核验内达成率）/ coverage（已核验覆盖）/ insufficient + 聚合数组 + items（逐条明细，供培育规划差距清单）

// 申报窗口紧迫度（2026-08-02 P1-1）：数据驱动，无 batches 字段的政策不渲染
// 取最近一个未截止批次：≤7 天红色、≤30 天橙色、更远绿色；批次全截止则不显示（避免过期误导）
function windowUrgencyHTML(policy) {
  if (!policy.batches || !policy.batches.length) return '';
  const now = new Date();
  const upcoming = policy.batches
    .map(b => {
      const [y, m, d] = b.date.split('-').map(Number);
      return { b, t: new Date(y, m - 1, d, 23, 59, 59).getTime() - now.getTime() };
    })
    .filter(x => x.t > 0)
    .sort((a, b) => a.t - b.t);
  if (!upcoming.length) return '';
  const { b, t } = upcoming[0];
  const days = Math.ceil(t / 86400000);
  const color = days <= 7 ? 'var(--danger)' : days <= 30 ? 'var(--warning)' : 'var(--success)';
  const bg = days <= 7 ? 'var(--bg-danger)' : days <= 30 ? 'var(--bg-warning)' : 'var(--bg-success)';
  const tip = days <= 7 ? `仅剩 ${days} 天` : `剩 ${days} 天`;
  return `<div style="color:${color};font-weight:600;margin-bottom:6px;padding:8px 12px;background:${bg};border-radius:4px;">⏰ 申报窗口：${b.label}（${b.date}）材料截止，${tip}</div>`;
}

function runMatch() {
  const profile = getMatchProfile();

  // 验证至少填写了关键字段
  if (!profile.industry && !profile.type && !profile.years) {
    $('#matchResults').innerHTML = '<div class="card" style="color:var(--danger);">请至少填写行业、企业类型和成立年限后再进行匹配。</div>';
    return;
  }

  const results = POLICIES.map(policy => {
    // 行业匹配检查（数据里没有用「全部」通配的政策，无需特殊处理）
    const industryMatch = policy.applicableIndustries.includes(profile.industry);

    // 三维评分（2b.2，2026-08-05）：Fit 50% + Timing 25% + Effort 25%；缺失维度按剩余维度权重归一化
    const sp = scorePolicy(policy, profile);
    const { matchedItems, failedRequired, failedVeto, unmatchedOptional, unverifiedRequired, unverifiedVeto } = sp;
    const score = sp.total;
    const coverage = sp.coverage;
    const insufficient = sp.insufficient;
    const hasFailRequired = failedRequired.length > 0;
    const hasFailVeto = failedVeto.length > 0;
    const hasUnverifiedRequired = sp.unverifiedRequired.length > 0;

    // 一票否决条件确认未通过 → 直接归为不通过
    // 其他必选条件确认未通过 → 降为低匹配
    // 已核验信息不足 → 归为「信息不足」档，提示完善信息（不武断判定）
    // 行业不匹配 → 统一降为「需补齐」档（高企的行业条件是必选条件，已在 failRequired 分支处理）
    // 注：存在无法自动判断的必选条件（未核验）不再封顶降档，改为黄条提示引导去自诊断核实
    //     （匹配页定位是快速筛选，严谨判定由自诊断承担；否则所有政策永远到不了推荐申报档）
    let tier, adjustedScore;
    if (hasFailVeto) {
      tier = 'veto';
      adjustedScore = Math.min(score, 30);
    } else if (hasFailRequired) {
      tier = 'low';
      adjustedScore = Math.min(score, 45);
    } else if (insufficient) {
      tier = 'medium';
      adjustedScore = score;
    } else if (!industryMatch) {
      tier = 'medium';
      adjustedScore = Math.min(score, 69);
    } else if (score >= 75) {
      tier = 'high';
      adjustedScore = score;
    } else if (score >= 50) {
      tier = 'medium';
      adjustedScore = score;
    } else {
      tier = 'low';
      adjustedScore = score;
    }

    return {
      policy,
      score: adjustedScore,
      tier,
      industryMatch,
      insufficient,
      coverage,
      fit: sp.fit,
      timing: sp.timing,
      effort: sp.effort,
      matchedItems,
      failedRequired,
      failedVeto,
      unverifiedRequired,
      unverifiedVeto,
      unmatchedOptional
    };
  });

  // 按匹配度排序
  results.sort((a, b) => b.score - a.score);

  const container = $('#matchResults');
  container.innerHTML = '<h3 style="margin-bottom:14px;font-size:16px;">匹配结果（按匹配度从高到低）</h3>' +
    results.map((r, i) => `
      <div class="match-item ${r.tier}">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <div>
            <span class="match-score ${r.tier}">${r.score}%</span>
            <span style="font-weight:600;">${r.policy.name}</span>
            <span style="font-size:12px;color:var(--text-secondary);margin-left:8px;">${r.policy.issuingBody}</span>
          </div>
          <span style="font-size:12px;padding:4px 10px;border-radius:12px;font-weight:500;
            ${r.tier === 'high' ? 'background:var(--bg-success);color:var(--success);' : ''}
            ${r.tier === 'medium' ? 'background:var(--bg-warning);color:var(--warning);' : ''}
            ${r.tier === 'low' ? 'background:var(--bg-danger);color:var(--danger);' : ''}
            ${r.tier === 'veto' ? 'background:var(--bg-danger);color:var(--danger);border:1px solid var(--danger);' : ''}
          ">
            ${r.tier === 'high' ? '推荐申报' : r.tier === 'medium' ? (r.insufficient ? '信息不足，暂无法评估' : '部分匹配，需补齐') : r.tier === 'veto' ? '存在一票否决条件不满足' : '暂不建议申报'}
          </span>
        </div>
        <div class="match-detail" style="margin-top:10px;">
          <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px;color:var(--text-secondary);margin-bottom:6px;">
            <span>匹配 <strong style="color:var(--text-primary);">${r.fit}</strong></span>
            <span>时效 <strong style="color:${r.timing.has ? (r.timing.days <= 14 ? 'var(--danger)' : r.timing.days <= 30 ? 'var(--warning)' : 'var(--success)') : 'var(--text-secondary)'};">${r.timing.has ? r.timing.score : '—'}</strong>${r.timing.has ? `（${r.timing.label}${r.timing.days ? `，剩 ${r.timing.days} 天` : ''}）` : `（${r.timing.label}）`}</span>
            <span>成本 <strong style="color:var(--text-primary);">${r.effort.label}</strong>（${r.effort.score}）</span>
            <span style="color:var(--text-secondary);">三维总分 ${r.score}%</span>
          </div>
          ${windowUrgencyHTML(r.policy)}
          ${r.policy.alert ? `<div style="color:var(--danger);margin-bottom:6px;padding:8px 12px;background:var(--bg-danger);border-left:3px solid var(--danger);border-radius:4px;"><strong>⚠️ 政策重要变更</strong>：${r.policy.alert.text} <a href="${r.policy.alert.link}" target="_blank" rel="noopener" style="color:var(--danger);font-weight:600;">${r.policy.alert.linkLabel}</a></div>` : ''}
          ${r.insufficient ? `<div style="color:var(--warning);margin-bottom:6px;padding:8px 12px;background:var(--bg-warning);border-radius:4px;">已核验条件不足（覆盖 ${Math.round(r.coverage * 100)}%），暂无法评估匹配度。建议填写更多企业信息，或到「自诊断」逐条核实。</div>` : ''}
          ${!r.industryMatch ? '<div style="color:var(--danger);margin-bottom:4px;">注意：行业不完全匹配，仍可参考条件差距</div>' : ''}
          ${r.failedVeto.length > 0 ? `<div style="color:var(--danger);font-weight:600;margin-bottom:6px;padding:8px 12px;background:var(--bg-danger);border-radius:4px;">一票否决条件未通过（独立否决项，任一不满足即不具备申报资格）：${r.failedVeto.join('、')}</div>` : ''}
          ${r.unverifiedVeto.length > 0 ? `<div style="color:var(--warning);margin-bottom:6px;padding:8px 12px;background:var(--bg-warning);border-radius:4px;">一票否决条件无法自动判断，须人工核实（任一不满足即不具备申报资格）：${r.unverifiedVeto.join('、')} <button class="btn btn-primary" style="margin-left:8px;padding:2px 10px;font-size:12px;" onclick="goDiag('${r.policy.id}')">去自诊断核实</button></div>` : ''}
          ${r.matchedItems.length > 0 ? `<div style="margin-bottom:4px;">已匹配条件（${r.matchedItems.length} 项）：${r.matchedItems.join('、')}</div>` : ''}
          ${r.failedRequired.length > 0 ? `<div style="color:var(--danger);margin-bottom:4px;">未通过的必选条件：${r.failedRequired.join('、')}</div>` : ''}
          ${r.unverifiedRequired.length > 0 ? `<div style="color:var(--warning);margin-bottom:4px;">以下必选条件无法自动判断，建议在自诊断中逐条核实：${r.unverifiedRequired.join('、')} <button class="btn btn-primary" style="margin-left:8px;padding:2px 10px;font-size:12px;" onclick="goDiag('${r.policy.id}')">去自诊断核实</button></div>` : ''}
          ${r.unmatchedOptional.length > 0 ? `<div style="margin-bottom:4px;">未匹配的可选条件（${r.unmatchedOptional.length} 项）：${r.unmatchedOptional.join('、')}</div>` : ''}
          <div style="font-size:12px;color:var(--text-secondary);">提示：自动匹配仅覆盖部分可量化条件，建议在"自诊断"标签中逐条手动核实以获得精确结果。</div>
        </div>
      </div>
    `).join('') + `
    <div class="no-print" style="margin-top:16px;padding:12px 14px;background:var(--bg-info);border-radius:6px;border:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="window.print()">打印 / 导出 PDF</button>
      <span style="font-size:12px;color:var(--text-secondary);">打印匹配结果。打印时请选择「另存为 PDF」即可导出。如需单政策深度诊断，请切换到「自诊断」标签。</span>
    </div>`;

  // 滚动到结果
  container.scrollIntoView({ behavior: 'smooth' });
}

function resetMatch() {
  $$('#tab-match select').forEach(s => s.value = '');
  $$('.mCert:checked').forEach(cb => cb.checked = false);
  $('#matchResults').innerHTML = '';
  storageRemove(LS_MATCH); // 重置时同步清除已保存的匹配表单
}

// ============================================================
// 标签3：自诊断
// ============================================================
function populateDiagSelect() {
  const sel = $('#diagPolicySelect');
  sel.innerHTML = '<option value="">-- 请选择一项政策 --</option>' +
    POLICIES.map(p => `<option value="${p.id}">${p.name} — ${p.issuingBody}</option>`).join('');
}

// 渲染二选一路径类（2026-08-02 自诊断拆细）：
// 直通路径 = checkbox 组（任一勾选即满足）；评分路径 = 档位 radio 组（选档计分，合计达 minScore 且分项达底线）
// 双计数器：inputIdx 每个 input（含每个 radio 档位）独立序号，供持久化精确恢复；itemIdx 条件项序号，供报告按项映射
function renderPathCategory(cat, policy, nextInput, nextItem) {
  return cat.paths.map(path => {
    const head = `<div style="font-weight:600;font-size:13.5px;color:#1e3a5f;padding:10px 14px 2px;margin-top:4px;">${path.name}</div>`;
    if (path.scoreBased) {
      const minInfo = path.minParts ? `分项底线：${Object.entries(path.minParts).map(([k, v]) => `${k} ≥${v} 分`).join('、')}` : '';
      return head +
        `<div style="font-size:12px;color:var(--text-secondary);padding:0 14px 6px;">选档计分，合计需 ≥${path.minScore} 分 · ${minInfo}；未选档位按 0 分计</div>` +
        path.items.map(item => {
          const iIdx = nextItem();
          const maxScore = item.scoreOptions.reduce((s, o) => s + o.score, 0);
          return `
            <div class="checklist-item" style="display:block;">
              <div class="cond-label">
                <strong>${item.name}</strong>（满分 ${maxScore} 分）
                <span class="cond-tag required-tag">计分项</span>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">${item.description}</div>
                ${item.basis ? `<div style="font-size:12px;margin-top:2px;">政策依据：<a href="${item.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${item.basis.name}</a></div>` : ''}
              </div>
              <div style="margin-top:6px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:4px;">
                ${item.scoreOptions.map((opt, oi) => `
                  <label style="display:flex;align-items:center;gap:6px;font-size:13px;padding:5px 8px;background:var(--bg);border:1px solid var(--border);border-radius:4px;cursor:pointer;">
                    <input type="radio" name="diag-score-${policy.id}-${iIdx}" class="diag-score" data-idx="${nextInput()}" data-item="${iIdx}" data-policy="${policy.id}" value="${oi}">
                    ${opt.label}（${opt.score} 分）
                  </label>
                `).join('')}
              </div>
            </div>`;
        }).join('');
    }
    // 多选一路径：n 项中任意 1 项勾选即满足（hint 可自定义，如创新型「直通」、专精特新「豁免」）
    const pathHint = path.hint || (path.items.length > 1 ? `满足以下 ${path.items.length} 项中任意 1 项即可直通` : '');
    return head +
      (pathHint ? `<div style="font-size:12px;color:var(--text-secondary);padding:0 14px 6px;">${pathHint}</div>` : '') +
      path.items.map(item => {
        const iIdx = nextItem();
        return `
          <label class="checklist-item">
            <input type="checkbox" class="diag-check" data-idx="${nextInput()}" data-item="${iIdx}" data-policy="${policy.id}">
            <span class="cond-label">
              ${item.name}
              <span class="cond-tag required-tag">必选</span>
              <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">${item.description}</div>
              ${item.basis ? `<div style="font-size:12px;margin-top:2px;">政策依据：<a href="${item.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${item.basis.name}</a></div>` : ''}
            </span>
          </label>`;
      }).join('');
  }).join('');
}

function loadDiagnosis() {
  const id = $('#diagPolicySelect').value;
  $('#diagnosisReport').innerHTML = '';

  if (!id) {
    $('#diagnosisChecklist').innerHTML = '';
    return;
  }

  const policy = POLICIES.find(p => p.id === id);
  let inputIndex = 0, itemIndex = 0;
  const nextInput = () => inputIndex++;
  const nextItem = () => itemIndex++;

  $('#diagnosisChecklist').innerHTML = `
    <div style="margin-top:12px;">
      <div style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">
        ${policy.issuingBody} · ${policy.level} · ${policy.deadline} · 数据更新：${policy.updated}
      </div>
      <div style="font-size:13px;margin-bottom:12px;line-height:1.9;">
        <div>政策原文：<a href="${policy.source.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${policy.source.name}</a></div>
        ${policy.notice ? `<div>申报通知：<a href="${policy.notice.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${policy.notice.name}</a>${policy.notice.timeline ? `<div style="font-size:12px;color:var(--text-secondary);">${policy.notice.timeline}</div>` : ''}</div>` : ''}
      </div>
      ${policy.alert ? `<div class="policy-alert ${policy.alert.level}"><strong>⚠️ 政策重要变更</strong>：${policy.alert.text} <a href="${policy.alert.link}" target="_blank" rel="noopener">${policy.alert.linkLabel}</a></div>` : ''}
    </div>
    <div class="diagnosis-checklist">
      ${policy.conditions.map(cat => cat.paths ? renderPathCategory(cat, policy, nextInput, nextItem) : `
        <div style="font-weight:600;font-size:14px;color:var(--primary);padding:10px 14px 4px;margin-top:6px;border-left:3px solid var(--primary-light);">${cat.category}${cat.anyOf ? '（满足其中 1 项即可）' : ''}</div>
        ${cat.items.map(item => {
          const iIdx = nextItem();
          return `
            <label class="checklist-item">
              <input type="checkbox" class="diag-check" data-idx="${nextInput()}" data-item="${iIdx}" data-policy="${policy.id}">
              <span class="cond-label">
                ${item.name}
                ${item.veto ? '<span class="cond-tag" style="background:var(--bg-danger);color:var(--danger);border:1px solid var(--danger);">一票否决</span>' : ''}
                <span class="cond-tag ${item.required ? 'required-tag' : 'optional-tag'}">${item.required ? '必选' : '可选'}</span>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">${item.description}</div>
                ${item.basis ? `<div style="font-size:12px;margin-top:2px;">政策依据：<a href="${item.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${item.basis.name}</a></div>` : ''}
              </span>
            </label>
          `;
        }).join('')}
      `).join('')}
    </div>
    <button class="btn btn-primary" onclick="generateReport('${policy.id}')" style="margin-top:16px;">生成诊断报告</button>
  `;

  // 恢复该政策已保存的勾选状态（P0-1.4 持久化：checkbox 与评分档位 radio 共用索引，页面刷新或切换政策回来时生效）
  const savedDiag = getDiagState();
  (savedDiag.checked[id] || []).forEach(idx => {
    const el = document.querySelector(`.diag-check[data-policy="${id}"][data-idx="${idx}"], .diag-score[data-policy="${id}"][data-idx="${idx}"]`);
    if (el) el.checked = true;
  });
}

function generateReport(policyId) {
  const policy = POLICIES.find(p => p.id === policyId);
  let totalRequired = 0, metRequired = 0;
  let totalOptional = 0, metOptional = 0;
  let totalWeight = 0, metWeight = 0;
  const gaps = [];
  // 展平条件列表（含二选一路径类的子项，带路径上下文）；路径类整体判定，子项不计入逐项统计
  const flatItems = [];
  policy.conditions.forEach(cat => {
    if (cat.paths) cat.paths.forEach(path => path.items.forEach(item => flatItems.push({ ...item, category: cat.category, pathName: path.name })));
    else cat.items.forEach(item => flatItems.push({ ...item, category: cat.category }));
  });
  // 采集 checkbox 与评分档位 radio，按 data-item 映射到条件项（2026-08-02 拆细：同一项可对应多个 radio 档位）
  const selState = {}; // itemIndex -> { checked, opt, score }
  $$(`[data-policy="${policyId}"].diag-check, [data-policy="${policyId}"].diag-score`).forEach(el => {
    // data-item 优先；旧结构（无 data-item）按 data-idx 兜底，保证其他政策回归
    const itemIdx = el.dataset.item !== undefined ? Number(el.dataset.item) : Number(el.dataset.idx);
    const item = flatItems[itemIdx];
    if (!item) return;
    if (el.checked) {
      if (item.scoreOptions) {
        const opt = item.scoreOptions[Number(el.value)];
        selState[itemIdx] = { checked: true, opt, score: opt ? opt.score : 0 };
      } else {
        selState[itemIdx] = { checked: true };
      }
    } else if (!selState[itemIdx]) {
      selState[itemIdx] = item.scoreOptions ? { checked: false, score: 0 } : { checked: false };
    }
  });

  const pathCats = policy.conditions.filter(c => c.paths);
  const pathCatNames = new Set(pathCats.map(c => c.category));

  // 逐项统计（路径类整体判定，跳过）
  flatItems.forEach((item, idx) => {
    if (pathCatNames.has(item.category)) return;
    const st = selState[idx] || { checked: false };
    totalWeight += item.weight;
    if (st.checked) {
      metWeight += item.weight;
      if (item.required) metRequired++;
      else metOptional++;
    } else {
      gaps.push(item);
    }
    if (item.required) totalRequired++;
    else totalOptional++;
  });

  // 二选一路径类判定（2026-08-02 拆细）：类内任一路径满足 → 整类满足（创新型：直通/评分；专精特新：知识产权/豁免）
  let pathScoreInfo = null; // 评分路径明细（报告区块用）
  let pathMetCount = 0; // 已满足的路径类数量（用于基础合规必选通过率独立计算）
  const pathCatResults = []; // 每类的判定结果 { cat, subMet, met }
  const pathReasons = [];
  pathCats.forEach(cat => {
    totalRequired++; // 路径类整体计 1 条必选
    totalWeight += cat.paths.reduce((s, p) => s + p.items.reduce((t, i) => t + i.weight, 0), 0);
    const subMet = [];
    cat.paths.forEach(path => {
      const pathIdx = [];
      flatItems.forEach((it, i) => { if (it.pathName === path.name) pathIdx.push(i); });
      if (path.scoreBased) {
        let sum = 0;
        const parts = {};
        const partMax = {}; // 各分项满分（最高档，非档位分值和——2026-08-02 修复）
        const rows = [];
        const pathMax = pathIdx.reduce((s, i) => s + Math.max(...flatItems[i].scoreOptions.map(o => o.score)), 0);
        pathIdx.forEach(i => {
          const it = flatItems[i];
          const st = selState[i] || { checked: false, score: 0 };
          const s = st.score || 0;
          sum += s;
          parts[it.part] = (parts[it.part] || 0) + s;
          partMax[it.part] = (partMax[it.part] || 0) + Math.max(...it.scoreOptions.map(o => o.score));
          rows.push({ item: it, opt: st.opt || null, score: s });
        });
        pathScoreInfo = { name: path.name, sum, parts, partMax, pathMax, rows, minScore: path.minScore, minParts: path.minParts };
        const partFails = Object.entries(path.minParts || {}).filter(([k, v]) => (parts[k] || 0) < v);
        const ok = sum >= path.minScore && partFails.length === 0;
        subMet.push(ok);
        if (!ok) pathReasons.push(`评分路径：预估 ${sum}/${pathMax} 分${partFails.length ? `（${partFails.map(([k, v]) => `${k} ${parts[k] || 0} 分 < 底线 ${v} 分`).join('、')}）` : `（未达 ${path.minScore} 分）`}`);
      } else {
        const anyMet = pathIdx.some(i => (selState[i] || {}).checked);
        subMet.push(anyMet);
        if (!anyMet) pathReasons.push(`${path.name}：${path.items.length} 项均未勾选`);
      }
    });
    const catMet = subMet.some(Boolean);
    pathCatResults.push({ cat, subMet, met: catMet });
    if (catMet) {
      metRequired++;
      pathMetCount++;
      // 已满足的路径按自身权重计入（创新型直通 4×5=20、评分按实际得分；专精特新豁免按子项权重）
      cat.paths.forEach((p, pIdx) => {
        if (subMet[pIdx]) metWeight += p.scoreBased ? (pathScoreInfo ? pathScoreInfo.sum : 0) : p.items.reduce((s, i) => s + i.weight, 0);
      });
    } else {
      gaps.push({ name: cat.category, required: true, weight: 0, category: cat.category, description: pathReasons.join('；') });
    }
  });

  const score = totalWeight > 0 ? Math.round((metWeight / totalWeight) * 100) : 0;
  const reqScore = totalRequired > 0 ? Math.round((metRequired / totalRequired) * 100) : 100;
  // 基础合规必选通过率（不含二选一路径类，路径类由路径判定独立负责，避免 reqScore 分支截胡路径结论）
  const baseReqScore = (totalRequired - pathCats.length) > 0
    ? Math.round(((metRequired - pathMetCount) / (totalRequired - pathCats.length)) * 100) : 100;

  const vetoGaps = gaps.filter(g => g.veto);
  const hasVetoGap = vetoGaps.length > 0;

  let tier, tierColor, suggestion;
  if (hasVetoGap) {
    tier = '存在一票否决条件不满足';
    tierColor = 'var(--danger)';
    suggestion = '以下条件为独立否决项，任一不满足即不具备申报资格。其他条件无论完成度如何，当前均不建议申报。请优先攻克以下一票否决条件。';
  } else if (baseReqScore < 100) {
    tier = '暂不具备申报条件';
    tierColor = 'var(--danger)';
    suggestion = '存在必选条件未满足，建议优先补齐以下标注为"关键缺口"的条件后再申报。';
  } else if (pathCatResults.some(r => !r.met)) {
    // 路径类未达标（创新型：直通/评分均未满足；专精特新：知识产权/豁免均未满足）
    const unmetNames = pathCatResults.filter(r => !r.met).map(r => r.cat.category.replace(/（.*/, '')).join('、');
    tier = `暂不具备申报资格（${unmetNames}未达标）`;
    tierColor = 'var(--danger)';
    suggestion = `基础合规已满足，但 ${unmetNames} 未达标。建议：该类为「满足任意 1 条路径即可」结构——${pathCatResults.flatMap(r => r.cat.paths.map(p => p.name)).join('；')}，请对照逐一核实，优先补齐最容易达成的一条。`;
  } else if (pathCatResults.length > 0) {
    // 路径已满足：综合匹配度受未选评分档位影响而偏低，结论直接按路径达标给成熟档
    tier = '申报条件成熟';
    tierColor = 'var(--success)';
    suggestion = '基础合规通过且认定条件全部满足，建议启动申报材料准备。注意留存研发费用归集台账与审计报告等佐证。';
  } else if (score >= 85) {
    tier = '申报条件成熟';
    tierColor = 'var(--success)';
    suggestion = '条件基本具备，建议启动申报材料准备工作，重点关注申报时间节点和材料清单。';
  } else if (score >= 65) {
    tier = '基本具备，建议补齐加分项';
    tierColor = 'var(--warning)';
    suggestion = '必选条件已通过，但存在较多可选条件未满足。建议在申报前集中补齐以提升评审竞争力。';
  } else {
    tier = '条件差距较大';
    tierColor = 'var(--danger)';
    suggestion = '建议先制定分阶段补齐计划，不宜仓促申报。可优先攻克必选条件中的关键缺口。';
  }

  const criticalGaps = gaps.filter(g => g.required && !g.veto);
  const optionalGaps = gaps.filter(g => !g.required);

  const today = new Date().toLocaleDateString('zh-CN', { year:'numeric', month:'long', day:'numeric' });

  $('#diagnosisReport').innerHTML = `
    <div class="diagnosis-report">
      <!-- 打印专用头部 -->
      <div class="print-only" style="text-align:center;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #1e3a5f;">
        <div style="font-size:18px;font-weight:700;color:#1e3a5f;">政策通 — 企业申报条件诊断报告</div>
        <div style="font-size:12px;color:#666;margin-top:4px;">目标政策：${policy.name}（${policy.issuingBody}）</div>
        <div style="font-size:12px;color:#666;">生成日期：${today}</div>
      </div>

      <div class="report-score" style="color:${tierColor};">${tier}</div>
      <div style="text-align:center;margin-bottom:8px;">
        综合匹配度 <strong style="font-size:28px;color:${tierColor};">${score}%</strong>
        &nbsp;|&nbsp; 必选条件通过率 <strong>${metRequired}/${totalRequired}</strong>
        &nbsp;|&nbsp; 可选条件完成率 <strong>${metOptional}/${totalOptional}</strong>
      </div>
      <div style="text-align:center;color:var(--text-secondary);font-size:14px;margin-bottom:16px;">${suggestion}</div>

      ${pathCatResults.length > 0 ? `<div style="text-align:center;color:var(--text-secondary);font-size:14px;margin-bottom:16px;">${pathCatResults.map(r => `${r.cat.category}：${r.met ? '✅ 已满足' : '❌ 未满足'}`).join(' · ')}</div>` : ''}

      ${policy.alert ? `<div class="policy-alert ${policy.alert.level}" style="margin-bottom:16px;"><strong>⚠️ 政策重要变更</strong>：${policy.alert.text} <a href="${policy.alert.link}" target="_blank" rel="noopener">${policy.alert.linkLabel}</a></div>` : ''}

      ${vetoGaps.length > 0 ? `
      <div class="report-section">
        <h4 style="color:var(--danger);">一票否决条件未满足（独立否决项 · ${vetoGaps.length} 项）</h4>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">这些条件单项即可否决申报资格，须最优先解决</div>
        <ul>
          ${vetoGaps.map(g => `<li class="gap-critical">[${g.category}] ${g.name} — ${g.description}${g.basis ? ` <a href="${g.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">政策依据：${g.basis.name}</a>` : ''}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      ${pathCatResults.length > 0 ? pathCatResults.map(r => `
      <div class="report-section">
        <h4>${r.cat.category.replace(/（.*/, '')}判定</h4>
        <div style="font-size:13px;margin-bottom:6px;line-height:1.8;">
          ${r.cat.paths.map((p, i) => {
            const met = r.subMet[i];
            let s = `${p.name}：${met ? '✅ 已满足' : '❌ 未满足'}`;
            if (p.items.length > 1) s += met ? `（${p.items.length} 项中勾选至少 1 项）` : `（${p.items.length} 项均未勾选）`;
            if (p.scoreBased && pathScoreInfo && pathScoreInfo.name === p.name) {
              s += met ? `，✅ 预估 ${pathScoreInfo.sum}/${pathScoreInfo.pathMax} 分，达标` : `，❌ 预估 ${pathScoreInfo.sum}/${pathScoreInfo.pathMax} 分，未达标`;
              if (pathScoreInfo.minParts) s += `（${Object.entries(pathScoreInfo.minParts).map(([k, v]) => `${k} ${pathScoreInfo.parts[k] || 0}/${pathScoreInfo.partMax[k] || 0} 底线 ${v} ${(pathScoreInfo.parts[k] || 0) >= v ? '✓' : '✗'}`).join(' · ')}）`;
            }
            return s;
          }).join('<br>')}
        </div>
        ${pathScoreInfo ? `
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px;">评分明细（未选档位按 0 分计）：</div>
        <ul style="font-size:13px;">
          ${pathScoreInfo.rows.map(rr => `<li>${rr.item.name} — ${rr.opt ? `已选 ${rr.opt.label}（${rr.score} 分）` : '<span style="color:var(--text-secondary);">未选择（0 分）</span>'}</li>`).join('')}
        </ul>` : ''}
        <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">该类别满足其中任意 1 条路径即视为满足；已满足路径的资格结论不受未达标路径影响。</div>
      </div>
      `).join('') : ''}

      ${criticalGaps.length > 0 ? `
      <div class="report-section">
        <h4 style="color:var(--danger);">关键缺口（必选条件未满足 · ${criticalGaps.length} 项）</h4>
        <ul>
          ${criticalGaps.map(g => `<li class="gap-critical">[${g.category}] ${g.name} — ${g.description}${g.basis ? ` <a href="${g.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">政策依据：${g.basis.name}</a>` : ''}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      ${optionalGaps.length > 0 ? `
      <div class="report-section">
        <h4 style="color:var(--warning);">建议补齐（可选条件 · ${optionalGaps.length} 项）</h4>
        <ul>
          ${optionalGaps.map(g => `<li class="gap-important">[${g.category}] ${g.name} — ${g.description}${g.basis ? ` <a href="${g.basis.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">政策依据：${g.basis.name}</a>` : ''}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      ${gaps.length === 0 ? `
      <div class="report-section" style="text-align:center;color:var(--success);font-weight:600;font-size:15px;">
        全部条件已满足，建议尽快启动申报流程。
      </div>
      ` : ''}

      <div class="report-section" style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border);">
        <h4>后续建议</h4>
        <ol style="padding-left:20px;font-size:14px;color:var(--text-secondary);line-height:2;">
          <li>将诊断报告中的关键缺口转化为具体的补齐任务清单，设定责任人和完成时间</li>
          <li>对于涉及第三方证明的条件（如无事故证明、排污检测报告），提前预留取得周期（通常 2-4 周）</li>
          <li>对于涉及体系认证的条件（如 ISO14001），评估认证周期（通常 3-6 个月）是否赶得上申报截止时间</li>
          <li>建议打印此报告作为内部申报筹备会的讨论底稿</li>
        </ol>
      </div>

      <div class="report-section" style="margin-top:12px;font-size:13px;color:var(--text-secondary);">
        <h4>政策依据</h4>
        <div>申报依据文件：<a href="${policy.source.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${policy.source.name}</a>（点击查看政府官网原文）</div>
        ${(policy.basis || []).map(b => `<div style="margin-top:4px;">评价细则依据：<a href="${b.url}" target="_blank" rel="noopener" style="color:#1e3a5f;">${b.name}</a></div>`).join('')}
      </div>

      <!-- 打印专用尾部 -->
      <div class="print-only" style="margin-top:16px;padding-top:10px;border-top:1px solid #ccc;font-size:11px;color:#999;text-align:center;">
        报告由「政策通」自动生成 · ${today} · 条件数据最后更新：${DATA_VERSION}
      </div>

      <!-- 导出按钮（打印时隐藏） -->
      <div class="no-print" style="margin-top:16px;padding:12px 14px;background:var(--bg-info);border-radius:6px;border:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="window.print()">打印 / 导出 PDF 报告</button>
        <span style="font-size:12px;color:var(--text-secondary);">含诊断结果、缺口清单、日期戳和否决条件标记。打印时请选择「另存为 PDF」即可导出。</span>
      </div>
    </div>
  `;

  $('#diagnosisReport').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// 键盘快捷键
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === '1' && !e.target.closest('input, select')) {
    $$('.tab-btn')[0].click();
  } else if (e.key === '2' && !e.target.closest('input, select')) {
    $$('.tab-btn')[1].click();
  } else if (e.key === '3' && !e.target.closest('input, select')) {
    $$('.tab-btn')[2].click();
  } else if (e.key === '4' && !e.target.closest('input, select')) {
    $$('.tab-btn')[3].click();
  }
});

const LS_PLAN = 'zct_v1_plan2'; // 2026-08-02 筛选项拆细：字段集增删（pGlobalShare→pMarketShare、mainRatio 档位变）+ 新增 10 字段，升键一次性清旧值

function savePlanState() {
  const st = {};
  Object.keys(PLAN_FIELD_IDS).forEach(k => { st[k] = document.getElementById(PLAN_FIELD_IDS[k]).value; });
  storageSet(LS_PLAN, JSON.stringify(st));
}

function restorePlanState() {
  try {
    const saved = JSON.parse(storageGet(LS_PLAN) || 'null');
    if (!saved) return;
    Object.keys(PLAN_FIELD_IDS).forEach(k => {
      const el = document.getElementById(PLAN_FIELD_IDS[k]);
      if (el && saved[k] !== undefined && saved[k] !== '') el.value = saved[k];
    });
  } catch (e) { /* 历史数据损坏时静默降级，不阻塞页面 */ }
}

function getPlanProfile() {
  const p = {};
  FIELDS.filter(f => f.plan).forEach(f => { p[f.key] = document.getElementById('p' + f.id.slice(1)).value; });
  return p;
}

function planGapMark(it) {
  if (it.unverified) return ['maybe', '❓', '需人工核实'];
  if (it.matched) return ['ok', '✅', '已达标'];
  return ['no', '❌', '未达标'];
}

function runPlan() {
  const levelSel = $('#pLevel');
  if (!levelSel || !levelSel.value) {
    $('#planResult').innerHTML = '<div class="card" style="color:var(--danger);">请先选择「已获得资质（选最高一级）」后再生成培育规划。</div>';
    return;
  }
  const cur = PLAN_LAYERS[Number(levelSel.value)];
  const targets = Array.isArray(cur.next) ? cur.next : (cur.next ? [cur.next] : null);
  const itemDesc = (target, name) => {
    // 2026-08-02 拆细：paths 类（无 items）子项在 c.paths 下，统一展平
    const items = target.conditions.flatMap(c => c.paths ? c.paths.flatMap(p => p.items) : (c.items || []));
    const item = items.find(i => i.name === name);
    return item ? item.description : '';
  };

  let html = `
    <div class="plan-card">
      <h4><span class="plan-tier-badge">第 ${cur.id} 层 · ${cur.label}</span>当前层位</h4>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">判断依据：已获得资质 = 「${levelSel.selectedOptions[0].text}」。资质有效期提醒：创新型入库/省级认定 3 年、小巨人/单项冠军证书 3 年，均须关注到期复核安排。</div>
    </div>`;

  if (!targets) {
    html += `
      <div class="plan-card">
        <h4>已到梯度顶层 · ${cur.label}</h4>
        <div class="plan-window">${cur.top}</div>
      </div>`;
  } else {
    html += targets.map(next => {
      const target = POLICIES.find(p => p.id === next.policyId);
      let gapsHtml;
      if (target) {
        // 注入 level：目标政策中的「已获 xxx 称号」前提条件按当前层位自动判定（如 prov 需已获创新型、xjr 需已获省级）
        const ev = evaluatePolicyConditions(target, Object.assign(getPlanProfile(), { level: cur.id }));
        const noCount = ev.items.filter(i => i.auto && !i.unverified && !i.matched).length;
        const maybeCount = ev.items.filter(i => i.unverified).length;
        gapsHtml = ev.items.map(it => {
          const [cls, mark] = planGapMark(it);
          return `<div class="plan-gap ${cls}"><span class="plan-mark">${mark}</span><div><span class="plan-gap-name">${it.name}</span>${it.required ? '<span style="font-size:11px;color:var(--danger);margin-left:4px;">[必选]</span>' : ''}<div class="plan-gap-desc">${itemDesc(target, it.name)}</div></div></div>`;
        }).join('') + `<div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">小结：❌ 未达标 ${noCount} 项、❓ 需人工核实 ${maybeCount} 项（未填或选「不清楚」的必选项，建议到「自诊断」逐条核实）。</div>`;
      } else {
        gapsHtml = `<div style="font-size:13px;color:#92400e;padding:8px 12px;background:#fef9c3;border-left:3px solid #eab308;border-radius:4px;line-height:1.7;">该层级暂未收录独立条件条目，请以官方通知为准。</div>`;
      }
      return `
        <div class="plan-card">
          <h4><span class="plan-tier-badge">${next.badge || '下一层'}</span>下一目标：${next.name}</h4>
          <div class="plan-window"><strong>申报窗口</strong>：${next.window}</div>
          <div style="margin-bottom:6px;font-size:13px;color:var(--text-secondary);">差距清单（✅ 已达标 / ❌ 未达标 / ❓ 需人工核实）：</div>
          ${gapsHtml}
          <div class="plan-pace"><strong>节奏建议</strong>：${next.step}</div>
          ${target ? `<div style="margin-top:10px;font-size:12.5px;color:var(--text-secondary);">查看政策详情：<button class="btn" style="padding:3px 10px;font-size:12px;" onclick="goPolicy('${target.id}')">${target.name}</button> <a href="${target.source.url}" target="_blank" rel="noopener" style="margin-left:8px;">政策原文（政府官网）</a></div>` : ''}
        </div>`;
    }).join('');
  }

  $('#planResult').innerHTML = html;
  $('#planResult').scrollIntoView({ behavior: 'smooth' });
}

function resetPlan() {
  $$('#tab-plan select').forEach(s => s.value = '');
  $('#planResult').innerHTML = '';
  storageRemove(LS_PLAN); // 重置时同步清除已保存的规划表单
}

// ============================================================
// 字段联动（遗留事项 7，2026-08-03）：匹配表单已填同 key 字段 → 规划表单自动带入
// 只填规划表单空字段，不覆盖用户已填值（无覆盖误伤）；不同 key 字段天然隔离
// （同 key 由字段注册表 match+plan 双标志派生，见 fields.js，不手工维护映射）
// ============================================================
function syncMatchToPlan() {
  FIELDS.filter(f => f.match && f.plan).forEach(f => {
    const mEl = document.getElementById(f.id);
    const pEl = document.getElementById('p' + f.id.slice(1));
    if (mEl && pEl && mEl.value !== '' && pEl.value === '') pEl.value = mEl.value;
  });
}

// ============================================================
// 状态持久化（P0-1.4）：匹配表单 + 诊断勾选，关闭浏览器不丢失
// 存储不可用时（隐私模式/测试环境）静默降级，不影响页面功能
// ============================================================
const LS_MATCH = 'zct_v1_matchForm2'; // 2026-08-02 匹配页字段拆细：新增 13 字段（level/segYears/mainRatio/growth/debt/equity/rdTotal/eval/marketShare/sixBase/listed/invest/direct），升键一次性清旧值
// 2026-08-02 自诊断拆细：索引语义由「条件项序号」变为「input 序号」，升键 v2 一次性清掉旧索引，避免旧 0-5 错勾到新渲染项；xjr 拆细再次改变 xjr 索引映射，升键 v3 一次性清旧勾选；keygiant 拆细 6→14 项改变索引映射，升键 v4 一次性清旧勾选
const LS_DIAG = 'zct_v1_diag4';

function storageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* 存储不可用时静默降级 */ } }
function storageRemove(key) { try { localStorage.removeItem(key); } catch (e) { /* 同上 */ } }

function saveMatchState() {
  storageSet(LS_MATCH, JSON.stringify(getMatchProfile()));
}

function restoreMatchState() {
  try {
    const saved = JSON.parse(storageGet(LS_MATCH) || 'null');
    if (!saved) return;
    Object.keys(MATCH_FIELD_IDS).forEach(key => {
      const el = document.getElementById(MATCH_FIELD_IDS[key]);
      if (el && saved[key] !== undefined && saved[key] !== '') el.value = saved[key];
    });
    (saved.certs || []).forEach(c => {
      const cb = document.querySelector(`.mCert[value="${c}"]`);
      if (cb) cb.checked = true;
    });
  } catch (e) { /* 历史数据损坏时静默降级，不阻塞页面 */ }
}

// 诊断状态：{ sel: 当前选中政策, checked: { 政策id: [勾选索引...] } }
// 勾选索引与 loadDiagnosis 渲染的 data-idx 一致，按政策分别保存，切换政策不丢失
function getDiagState() {
  try { return JSON.parse(storageGet(LS_DIAG)) || { sel: '', checked: {} }; }
  catch (e) { return { sel: '', checked: {} }; }
}

function saveDiagCheck(policyId) {
  const st = getDiagState();
  // 2026-08-02 拆细：诊断清单含 checkbox（diag-check）与评分档位 radio（diag-score），统一按已选中的 data-idx 保存
  st.checked[policyId] = Array.from(document.querySelectorAll(`[data-policy="${policyId}"]:checked`))
    .map(el => Number(el.dataset.idx));
  storageSet(LS_DIAG, JSON.stringify(st));
}

function saveDiagSel(id) {
  const st = getDiagState();
  st.sel = id;
  storageSet(LS_DIAG, JSON.stringify(st));
}

function restoreDiagState() {
  const st = getDiagState();
  if (!st.sel) return;
  const sel = document.getElementById('diagPolicySelect');
  if (sel && Array.from(sel.options).some(o => o.value === st.sel)) {
    sel.value = st.sel;
    loadDiagnosis(); // 内部会恢复该政策已保存的勾选状态
  }
}

// 统一委托监听（change 事件冒泡，覆盖动态渲染的诊断勾选）
document.addEventListener('change', e => {
  const t = e.target;
  if (t.id === 'diagPolicySelect') { saveDiagSel(t.value); return; }
  if (t.matches('#tab-match select, #tab-match .mCert')) { saveMatchState(); syncMatchToPlan(); return; }
  if (t.matches('#tab-plan select')) { savePlanState(); return; }
  if (t.classList.contains('diag-check')) saveDiagCheck(t.dataset.policy);
});

// ===== 风格切换（5 套设计：a 政务金蓝 / b 深空科技 / c 水墨 / d 杂志 / e 玻璃） =====
(function () {
  var LS_STYLE = 'zct_v1_style';
  var STYLES = ['a', 'b', 'c', 'd', 'e'];
  function applyStyle(s, save) {
    if (STYLES.indexOf(s) === -1) s = 'a';
    document.body.dataset.style = s;
    var btns = document.querySelectorAll('.sw-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].dataset.style === s);
    }
    if (save) { try { localStorage.setItem(LS_STYLE, s); } catch (e) {} }
  }
  function initStyle() {
    var saved = null;
    try { saved = localStorage.getItem(LS_STYLE); } catch (e) {}
    var btns = document.querySelectorAll('.sw-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { applyStyle(this.dataset.style, true); });
    }
    applyStyle((saved && STYLES.indexOf(saved) !== -1) ? saved : 'a', false);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStyle);
  } else {
    initStyle();
  }
})();
