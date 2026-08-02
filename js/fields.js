// 字段注册表（2a.1 步骤 C，2026-08-03）
// 单源原则：字段定义只此一份，匹配表单渲染 / 规划表单渲染 / getMatchProfile / getPlanProfile /
// MATCH_FIELD_IDS / PLAN_FIELD_IDS / 持久化键 全部由此派生。
// 新增字段：只改此数组（以及政策数据里的 autoMatch 引用），其余位置不再手工维护。
//
// 字段结构：
//   key        逻辑键（与政策条件 autoMatch 对应）
//   id         匹配表单元素 id（规划表单 id 推导：'p' + id.slice(1)，如 mRevenue → pRevenue）
//   label      匹配表单标签文案
//   planLabel  规划表单标签文案（缺省同 label；仅 ipr/segYears 两处与匹配表单不同）
//   tier       basic=基础区（默认展开）/ advanced=进阶区（默认折叠）——仅匹配表单
//   match      是否出现在智能匹配表单
//   plan       是否出现在培育规划表单
//   options    选项数组：字符串 v==t；二元数组 [value, text]（value 与旧表单完全一致，脚本依赖）
//   dynamic    选项由 JS 动态生成（industry：与筛选栏同源，避免两处维护分叉）
//   type       'checkbox' 多选（certs 特例），缺省 'select'
//
// tier 划分（用户确认基础 7 项建议 → 映射现有字段 5 项）：
//   行业/规模/年限/营收/研发占比/知识产权 → industry/revenue/years/rd/ipr
//   「注册地」现有表单与政策条件均无此维度，不新增字段；「规模」与「营收」同字段（revenue）。
const FIELDS = [
  // ===== 基础区（basic，默认展开）=====
  { key: 'industry', id: 'mIndustry', label: '所属行业', tier: 'basic', match: true, plan: false, dynamic: true },
  { key: 'revenue', id: 'mRevenue', label: '上年度营业收入', tier: 'basic', match: true, plan: true, options: [['<500万', '< 500 万'], ['500万-2000万', '500 万 - 2000 万'], ['2000万-5000万', '2000 万 - 5000 万'], ['5000万-1亿', '5000 万 - 1 亿'], ['1亿-4亿', '1 亿 - 4 亿'], ['>4亿', '> 4 亿']] },
  { key: 'years', id: 'mYears', label: '成立年限', tier: 'basic', match: true, plan: true, options: [['<1年', '< 1 年'], ['1-3年', '1 - 3 年'], ['3-5年', '3 - 5 年'], ['>5年', '> 5 年']] },
  { key: 'rd', id: 'mRD', label: '研发费用占营收比例', tier: 'basic', match: true, plan: true, options: [['<3%', '< 3%'], ['3%-5%', '3% - 5%'], ['5%-8%', '5% - 8%'], ['>8%', '> 8%']] },
  { key: 'ipr', id: 'mIPR', label: '有效知识产权数量', planLabel: '有效知识产权数量（专利总数，≥6 件从严覆盖 4 项Ⅰ类）', tier: 'basic', match: true, plan: true, options: [['0', '无'], ['1-5', '1 - 5 件'], ['6-15', '6 - 15 件'], ['>15', '> 15 件']] },

  // ===== 进阶区（advanced，默认折叠）=====
  { key: 'type', id: 'mType', label: '企业类型', tier: 'advanced', match: true, plan: false, options: ['规模以上工业企业', '科技型中小企业', '大型企业（营收>4亿）', '中小微企业'] },
  { key: 'level', id: 'mLevel', label: '已获得资质（选最高一级）', tier: 'advanced', match: true, plan: true, options: [['0', '还没入库创新型（从零开始）'], ['1', '已入库创新型中小企业'], ['2', '已获省级专精特新中小企业'], ['3', '已是专精特新「小巨人」'], ['4', '已是重点「小巨人」（中央财政支持）'], ['5', '已是制造业单项冠军']] },
  { key: 'accident', id: 'mAccident', label: '近三年有无重大安全/环保/质量事故（含经营异常/失信/重大违法违规）', tier: 'advanced', match: true, plan: true, options: ['无', '有'] },
  { key: 'emission', id: 'mEmission', label: '污染物排放是否达标', tier: 'advanced', match: true, plan: false, options: ['是', '否'] },
  { key: 'segYears', id: 'mSegYears', label: '从事特定细分市场年限（省级与小巨人 ≥3 年、单项冠军 ≥10 年）', planLabel: '从事特定细分市场年限（2/3/5 层判断：省级与小巨人 ≥3 年、单项冠军 ≥10 年）', tier: 'advanced', match: true, plan: true, options: [['<3年', '< 3 年'], ['3-5年', '3 - 5 年'], ['5-10年', '5 - 10 年'], ['>10年', '> 10 年'], ['不清楚', '不清楚']] },
  { key: 'mainRatio', id: 'mMainRatio', label: '主营业务收入占营收比例（省级 ≥80%、小巨人 ≥90%）', tier: 'advanced', match: true, plan: true, options: [['≥90%', '≥ 90%'], ['80%-90%', '80% - 90%'], ['<80%', '< 80%'], ['不清楚', '不清楚']] },
  { key: 'growth', id: 'mGrowth', label: '近两年营业收入复合增长率（小巨人要求 ≥5%）', tier: 'advanced', match: true, plan: true, options: [['≥5%', '≥ 5%'], ['<5%', '< 5%'], ['不清楚', '不清楚']] },
  { key: 'debt', id: 'mDebt', label: '上年末资产负债率（省级 ≤80%、小巨人 ≤75%）', tier: 'advanced', match: true, plan: true, options: [['≤55%', '≤ 55%'], ['55%-75%', '55% - 75%'], ['75%-80%', '75% - 80%'], ['>80%', '> 80%'], ['不清楚', '不清楚']] },
  { key: 'equity', id: 'mEquity', label: '近两年新增股权投资（合格机构投资者实缴；省级营收不足 1500 万时 ≥2000 万可豁免）', tier: 'advanced', match: true, plan: true, options: [['≥2000万', '≥ 2000 万'], ['<2000万', '< 2000 万'], ['不清楚', '不清楚']] },
  { key: 'rdTotal', id: 'mRDTotal', label: '近两年研发费用合计金额（省级 ≥100 万、小巨人 ≥1200 万）', tier: 'advanced', match: true, plan: true, options: [['<100万', '< 100 万'], ['100万-1200万', '100 万 - 1200 万'], ['≥1200万', '≥ 1200 万'], ['不清楚', '不清楚']] },
  { key: 'eval', id: 'mEval', label: '专精特新发展评价得分（培育平台 zjtx.miit.gov.cn 查询，省级 ≥50、小巨人 ≥60）', tier: 'advanced', match: true, plan: true, options: [['≥60分', '≥ 60 分'], ['50-60分', '50 - 60 分'], ['<50分', '< 50 分'], ['未查询', '未查询（需登录平台自查）']] },
  { key: 'marketShare', id: 'mMarketShare', label: '主导产品市场占有率（省级靠前、小巨人 ≥10% 或国内前三、单项冠军全球前 3）', tier: 'advanced', match: true, plan: true, options: [['全球前3', '全球前 3'], ['国内前三或≥10%', '国内前三或 ≥10%'], ['较为靠前', '较为靠前（无量化）'], ['一般', '一般'], ['不清楚', '不清楚']] },
  { key: 'sixBase', id: 'mSixBase', label: '主导产品是否属于六基/产业链关键环节（小巨人硬条件）', tier: 'advanced', match: true, plan: true, options: ['是', '否', '不清楚'] },
  { key: 'listed', id: 'mListed', label: '是否在境内外公开发行股票（重点小巨人资格：须未上市）', tier: 'advanced', match: true, plan: true, options: ['未上市', '已上市', '不清楚'] },
  { key: 'invest', id: 'mInvest', label: '是否已编制「三新一强」推进计划且投资总额 >2000 万（重点小巨人核心要件）', tier: 'advanced', match: true, plan: true, options: [['已编制且>2000万', '已编制且投资 >2000 万'], ['未编制或不足', '未编制或投资不足'], ['不清楚', '不清楚']] },
  { key: 'direct', id: 'mDirect', label: '是否满足创新型直通条件（高企有效期内/省级以上科技奖励/省部级研发机构/股权融资 ≥500 万，满足任一即可）', tier: 'advanced', match: true, plan: true, options: [['是', '是，满足至少一项'], ['否', '否'], ['不清楚', '不清楚']] },
  { key: 'certs', id: 'mCert', label: '现有认证（多选）', tier: 'advanced', match: true, plan: false, type: 'checkbox', options: [['ISO9001', 'ISO9001'], ['ISO14001', 'ISO14001'], ['ISO50001', 'ISO50001'], ['ISO45001', 'ISO45001（含旧证 OHSAS18001）']] }
];

// ===== 派生：表单元素 id 映射（key → id，旧逻辑单点替换）=====
// 匹配表单：注册表原样；规划表单：'p' + id.slice(1)（如 mRevenue → pRevenue）
const MATCH_FIELD_IDS = Object.fromEntries(FIELDS.filter(f => f.match && f.type !== 'checkbox').map(f => [f.key, f.id]));
const PLAN_FIELD_IDS = Object.fromEntries(FIELDS.filter(f => f.plan).map(f => [f.key, 'p' + f.id.slice(1)]));

// ===== 渲染：生成匹配/规划表单字段（替换原静态 HTML，结构/文案/元素 id 与旧版一致）=====
// scope: 'match'（含基础/进阶折叠）或 'plan'（无折叠）
function renderFormFields(containerId, scope) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const fields = FIELDS.filter(f => f[scope] && f[scope] !== false);
  const group = fs => fs.map(f => {
    const elId = scope === 'plan' ? 'p' + f.id.slice(1) : f.id;
    const label = scope === 'plan' ? (f.planLabel || f.label) : f.label;
    if (f.type === 'checkbox') {
      return `<div class="form-group"><label>${label}</label><div style="display:flex;flex-wrap:wrap;gap:8px;padding-top:6px;">` +
        f.options.map(o => {
          const [v, t] = Array.isArray(o) ? o : [o, o];
          return `<label style="font-weight:400;font-size:13px;"><input type="checkbox" class="mCert" value="${v}"> ${t}</label>`;
        }).join('') + `</div></div>`;
    }
    const opts = f.dynamic ? '<option value="">请选择</option>' :
      '<option value="">请选择</option>' + f.options.map(o => {
        const [v, t] = Array.isArray(o) ? o : [o, o];
        return `<option value="${v}">${t}</option>`;
      }).join('');
    return `<div class="form-group"><label>${label}</label><select id="${elId}">${opts}</select></div>`;
  }).join('');

  if (scope === 'plan') {
    container.innerHTML = `<div class="form-grid">${group(fields)}</div>`;
    return;
  }
  // match：基础区默认展开 + 进阶区默认折叠
  const basic = fields.filter(f => f.tier === 'basic');
  const adv = fields.filter(f => f.tier === 'advanced');
  container.innerHTML = `<div class="form-grid">${group(basic)}</div>` +
    `<div class="form-fold collapsed" id="advFold"><button type="button" class="form-fold-toggle" onclick="toggleAdvFields()">展开进阶指标（${adv.length} 项）▾</button><div class="form-grid form-adv">${group(adv)}</div></div>`;
  // 动态字段选项（industry：与筛选栏同源）
  if (fields.some(f => f.dynamic)) {
    const el = document.getElementById('mIndustry');
    if (el) el.innerHTML = '<option value="">请选择</option>' + window.industryOptionsHTML();
  }
}

function toggleAdvFields() {
  const fold = document.getElementById('advFold');
  if (!fold) return;
  const collapsed = fold.classList.toggle('collapsed');
  const btn = fold.querySelector('.form-fold-toggle');
  if (btn) btn.textContent = collapsed ? '展开进阶指标（' + FIELDS.filter(f => f.match && f.tier === 'advanced').length + ' 项）▾' : '收起进阶指标 ▴';
}

window.ZCT_FIELDS = { FIELDS, MATCH_FIELD_IDS, PLAN_FIELD_IDS, renderFormFields, toggleAdvFields };
