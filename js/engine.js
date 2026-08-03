// 匹配引擎 + 数据层（2a.1 步骤 D，2026-08-02）
// 纯逻辑与纯数据，不碰 DOM；UI 渲染/事件/持久化在 app.js，字段定义在 fields.js。
// 加载顺序（index.html）：data/*.js → fields.js → engine.js → app.js
// 依赖：window.ZCT_DATA（data 文件挂载的政策数据）

// 数据版本：任何政策数据变更后更新此值（同步更新自诊断报告页脚日期戳）
// ============================================================
const DATA_VERSION = '2026-08-03';

// 政策库：由 data/ 目录按部门汇总（2a.1 数据分离，2026-08-02）
// 汇总后按 order 字段恢复原数组顺序；新增政策按部门写入 data/ 对应文件，order 取当前最大值+1
const POLICIES = [
  ...(window.ZCT_DATA.national.most || []),
  ...(window.ZCT_DATA.national.miit || []),
  ...(window.ZCT_DATA.national.ndrc || []),
  ...(window.ZCT_DATA.guangdong || [])
].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

// 启动断言：数据挂载完整性（缺失即报错，避免静默空库）
if (!(window.ZCT_DATA?.national?.most?.length > 0 && window.ZCT_DATA?.national?.miit?.length > 0 && window.ZCT_DATA?.national?.ndrc?.length > 0 && window.ZCT_DATA?.guangdong?.length > 0)) {
  console.error('[政策通] 数据文件未完整加载，POLICIES 可能为空。请检查 data/ 目录文件。');
}
const COLUMNS = [
  { id: "zjt", name: "专精特新梯度培育", desc: "5 层梯度链条：创新型 → 省级专精特新 → 小巨人 → 重点小巨人/单项冠军（末两层并列方向；创新型与省级按广东省细则，粤工信规字〔2024〕5 号）", countLabel: "6 条政策 + 5 层链条" },
  { id: "gxjs", name: "高新技术企业", desc: "国家级税收优惠资质体系：企业所得税减按 15% 征收", countLabel: "1 条政策" },
  { id: "green", name: "绿色制造与循环利用", desc: "绿色制造体系评价 + 资源循环利用白名单", countLabel: "3 条政策" },
  { id: "zjzj", name: "专项资金与项目支持", desc: "财政专项资金：省级技改/绿色循环/先进制造奖补 + 国家级超长期国债设备更新 + 中央预算内节能降碳投资补助", countLabel: "5 条政策" },
  { id: "gjpt", name: "企业创新平台", desc: "企业创新平台资质：国家/省级企业技术中心 + 国家技术创新示范企业 + 省工程技术研究中心，研发投入高门槛 + 运行评价动态管理（39 号令 / 粤工信规字〔2022〕6 号 / 粤科规范字〔2022〕12号）", countLabel: "4 条政策" }
];

// ============================================================
// 专精特新梯度培育全链条（5 层视图：前三层逐级申报，末两层并列方向，政策库顶部）
// 每层内容均以官方文件为准：粤工信规字〔2024〕5 号（1-2 层广东省细则）/ 工信部企业〔2026〕2 号（全国框架）/
// 财建〔2024〕148 号（重点小巨人）/ 工信部政法〔2023〕138 号（单项冠军）
// ============================================================
const GRADIENT_CHAIN = [
  { level: "第一层 · 评价入库", name: "科技和创新型中小企业", org: "工信部定标准 · 广东省工信厅组织评价（深圳自行组织）", doc: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）+ 工信部企业〔2026〕2 号（新标准未发布前沿用 63 号文）", std: "直通条件 4 项任一，或评价 ≥60 分（创新能力 ≥20 分、成长性及专业化均 ≥15 分）", window: "广东省每年 1 批（2025 年：各地 7.15 前报送推荐）", value: "入库是申报省级专精特新前提；资质有效期 3 年", policyId: "innovative" },
  { level: "第二层 · 认定", name: "省级专精特新中小企业", org: "广东省工业和信息化厅认定", doc: "工信部企业〔2026〕2 号（2026-04-01 起实施，替代 63 号文认定标准）+ 粤工信规字〔2024〕5 号细则（冲突条款按 2 号文）", std: "细分 ≥3 年、营收 ≥1500 万（或股权投资 ≥2000 万）、主营占比 ≥80%、研发近两年均 ≥100 万且占比 ≥3%、Ⅰ类知产 ≥1 项（可豁免）、评价 ≥50 分", window: "以省厅年度认定通知为准（2025 年批次：广佛莞 10.15 前、其他地市 9.25 前报送推荐）", value: "省级荣誉 + 省专项资金项目支持；是小巨人前提；有效期 3 年", policyId: "prov" },
  { level: "第三层 · 认定", name: "专精特新「小巨人」", org: "工信部认定（广东省组织推荐）", doc: "工信部企业〔2026〕2 号办法 + 工信厅企业函〔2026〕117 号年度通知", std: "营收 ≥5000 万、主营占比 ≥90%、研发两年合计 ≥1200 万、Ⅰ类知产 ≥4 项、评价 ≥60 分", window: "每年 1 批（2026 第八批 4.25-5.25 填报）", value: "国家级最高层级称号，是重点小巨人/单项冠军的前提", policyId: "xjr" },
  { level: "方向一 · 中央财政专项", name: "重点「小巨人」", org: "财政部 + 工信部（地方按名额评审推荐）", doc: "财建〔2024〕148 号（2024-2026 三年、分三批次）", std: "有效期内小巨人 + 「三新一强」推进计划 + 投资 >2000 万（不含土地厂房）", window: "2024-2026 三年三批次；第三批（2026 年度）遴选推荐已于上半年完成，本批次申报窗口已结束", value: "中央奖补 600 万/家·三年（绩效挂钩）", policyId: "keygiant", branch: true },
  { level: "方向二 · 最高荣誉", name: "制造业单项冠军", org: "工信部认定（小巨人优先推荐）", doc: "工信部政法〔2023〕138 号办法 + 工信厅政法函〔2024〕328 号遴选通知", std: "细分 ≥10 年（新产品 ≥5 年）、近 3 年平均主营 ≥4 亿（省级以上专精特新 2 亿）、市占率全球前 3", window: "原则上每年 1 次；国家级遴选 2025 起暂无新通知（以公告为准）", value: "细分领域天花板名片；省级有对应奖励", policyId: "champion", branch: true }
];

// ============================================================
// 标签4：培育规划（P5，P6 扩为 5 层 + 末两层并列方向）
// 输入企业现状 → 判断梯度层位 → 输出「下一步申报什么 + 差距清单 + 节奏」
// 依据：粤工信规字〔2024〕5 号（广东省细则）/ 工信部企业〔2026〕2 号 / 工信厅企业函〔2026〕117 号 / 财建〔2024〕148 号 / 工信部政法〔2023〕138 号
// 差距判定复用 evaluatePolicyConditions（与智能匹配同源规则），层级名与链条视图一致
// ============================================================
const PLAN_LAYERS = [
  { id: 0, label: '尚未入库（链条外）', next: { badge: '第 1 层', name: '创新型中小企业评价入库（广东省）', policyId: 'innovative', window: '广东省每年 1 批（2025 年：各地 7 月 15 日前报送推荐；珠海等市企业 6 月初前完成自评）', step: '先自查直通条件——高企/国家级技术创新示范企业等有效期内荣誉、省级以上科技奖励、省部级研发机构、新增股权融资 ≥500 万，满足任一项直接入库；无直通则走评分路径（评价 ≥60 分：创新能力 ≥20 分、成长性及专业化均 ≥15 分），建议从现在起留存研发费用归集台账——评分路径中研发占比与Ⅰ类知识产权分值最大。申报全程线上（培育平台 zjtx.miit.gov.cn），无需纸质材料' } },
  { id: 1, label: '创新型中小企业', next: { badge: '第 2 层', name: '专精特新中小企业认定（广东省）', policyId: 'prov', window: '以省厅年度认定通知为准（2025 年批次：广佛莞 10 月 15 日前、其他地市 9 月 25 日前报送推荐）', step: '2026-04-01 起按工信部企业〔2026〕2 号新标准执行（原 63 号文口径废止），六项条件须同时满足：①已获科技和创新型中小企业称号且细分市场 ≥3 年；②营收 ≥1500 万（或近两年新增股权投资 ≥2000 万）+ 主营占比 ≥80% + 资产负债率 ≤80%；③近两年研发费用均 ≥100 万且每年占比 ≥3%；④Ⅰ类知识产权 ≥1 项且实际应用产生经济效益（近三年省部级以上科技奖励排名前三或省部级以上研发机构可豁免）；⑤主导产品市场占有率较为靠前；⑥专精特新发展评价得分 ≥50 分（培育平台自动算分，登录 zjtx.miit.gov.cn 查询）。科技和创新型中小企业资质有效期 3 年，注意在有效期内申报' } },
  { id: 2, label: '省级专精特新中小企业', next: { badge: '第 3 层', name: '专精特新「小巨人」企业认定', policyId: 'xjr', window: '每年 1 批（2026 第八批 4.25-5.25 线上填报 → 6.30 材料寄送截止）', step: '小巨人每年 1 批，材料建议提前半年准备：营收与研发费用的审计数据口径（近两年研发合计 ≥1200 万且每年占比 ≥3%）、Ⅰ类知识产权 ≥4 项、专精特新发展评价得分 ≥60 分（培育平台自动计算，登录 zjtx.miit.gov.cn 查询）' } },
  { id: 3, label: '专精特新「小巨人」', next: [
    { badge: '第 4 层 · 方向一', name: '重点「小巨人」（中央财政专项）', policyId: 'keygiant', window: '2024-2026 三年分三批次；第三批（2026 年度）遴选推荐已于上半年完成（广东 2 月 9 日启动、3 月上旬省级评审），本批次申报窗口已结束', step: '推荐制专项：先参加地方预申报摸底，由地方工信部门按名额评审推荐（非公开申报）。核心要件：「三新一强」推进计划 + 投资总额 >2000 万元（设备购置/研发投入/产学研/人才引育，土地厂房不计入）。奖补 600 万/家·三年（期初 50% + 期末绩效 50%），投资未达 2000 万收回资金——计划务必可兑现' },
    { badge: '第 5 层 · 方向二', name: '制造业单项冠军（最高荣誉方向）', policyId: 'champion', window: '原则上每年 1 次；国家级遴选 2025 起暂无新通知（以工信部公告为准）', step: '小巨人可优先推荐。硬门槛：从事细分领域 ≥10 年（新产品 ≥5 年）、近 3 年平均主营收入 ≥4 亿元（省级以上专精特新可降至 2 亿）、申请产品市占率全球前 3（需权威第三方佐证）、生产技术或工艺国际先进。市占率佐证要严谨，不要凭感觉填报' }
  ] },
  { id: 4, label: '重点「小巨人」', next: null, top: '你已进入中央财政支持专项：财建〔2024〕148 号支持周期三年、分两次下达（期初 50% + 期末绩效 50%），按申报书承诺推进「三新一强」计划并配合年度绩效评价；投资未达 2000 万元将被收回资金。另一并列方向：制造业单项冠军（近 3 年平均主营 ≥4 亿、市占率全球前 3），如符合可关注国家级遴选批次。' },
  { id: 5, label: '制造业单项冠军', next: null, top: '你已到梯度链条顶层：单项冠军证书有效期 3 年，有效期内每年 5 月 31 日前在培育平台更新企业信息，关注复核评价安排。另一并列方向：重点「小巨人」专项（中央奖补 600 万/家·三年），如未申报可关注批次预申报。' }
];

function evaluatePolicyConditions(policy, profile) {
  let totalWeight = 0;
  let verifiedWeight = 0; // 已核验条件权重（可自动判断且表单已填）
  let matchedWeight = 0;
  const failedRequired = [];
  const failedVeto = [];
  const unverifiedRequired = [];
  const unverifiedVeto = [];
  const matchedItems = [];
  const unmatchedOptional = []; // 未匹配/未核验的可选条件（渲染为差距提示）
  const items = []; // 逐条明细

  policy.conditions.forEach(cat => {
    // 二选一路径结构（如创新型「评价路径」）：整类按子路径合成输出，
    // 避免匹配/规划页差距清单出现直通 4 项 + 评分 6 项共 10 条噪音（2026-08-02 自诊断拆细）
    if (cat.paths) {
      cat.paths.forEach(path => {
        const label = path.name;
        const pathWeight = path.items.reduce((s, i) => s + i.weight, 0);
        totalWeight += pathWeight;
        if (path.scoreBased) {
          // 评分路径需逐档自评（自诊断标签），表单无法自动算分 → 恒未核验，引导去自诊断核实
          unverifiedRequired.push(label);
          items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: false, unverified: true });
          return;
        }
        const canAutoCheck = !!path.autoMatch && profile[path.autoMatch] !== undefined && profile[path.autoMatch] !== '';
        if (canAutoCheck) {
          verifiedWeight += pathWeight;
          // 2026-08-02 拆细：paths 类支持 path.rule（档位/组合判定，如知产数量档、层级前提 level），无 rule 时保持「是/否」三态语义
          const verdict = path.rule ? path.rule(profile[path.autoMatch], profile) :
            (profile[path.autoMatch] === "是" ? true : profile[path.autoMatch] === "否" ? false : undefined);
          if (verdict === true) {
            matchedWeight += pathWeight;
            matchedItems.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: true, auto: true, unverified: false });
          } else if (verdict === undefined) {
            // 「不清楚」三态：归未核验而非未通过
            unverifiedRequired.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: true, unverified: true });
          } else {
            failedRequired.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: true, unverified: false });
          }
        } else {
          unverifiedRequired.push(label);
          items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: false, unverified: true });
        }
      });
      return; // 该类别的子项由自诊断逐条渲染，匹配/规划页不展开
    }
    cat.items.forEach(item => {
      totalWeight += item.weight;
      let matched = false;
      let verdict; // 判定结果：true/false，或 undefined（3 态字段选「不清楚」= 无法判断）

      // cert 类条件（autoMatch:'cert'）取值在 profile.certs 数组而非 profile['cert']：数组非空才算可自动判断，空数组等价于未填 → 未核验
      const autoVal = item.autoMatch === 'cert'
        ? (Array.isArray(profile.certs) && profile.certs.length > 0 ? '1' : '')
        : profile[item.autoMatch];
      const canAutoCheck = !!item.autoMatch && autoVal !== undefined && autoVal !== '';
      if (canAutoCheck) {
        verifiedWeight += item.weight;
        if (item.autoMatch === 'cert') {
          verdict = item.rule(profile.certs);
        } else if (item.autoMatch === 'industry') {
          verdict = item.rule(profile.industry, policy);
        } else {
          verdict = item.rule(profile[item.autoMatch], profile);
        }
        matched = verdict === true;
      }
      // 无法自动判断的条件（无 autoMatch / 表单字段未填 / 3 态字段选「不清楚」）：视为「未核验」而非「未通过」，
      // 渲染时单独黄色提示，驱动用户去自诊断标签逐条核实

      if (matched) {
        matchedWeight += item.weight;
        matchedItems.push(item.name);
      } else if (!canAutoCheck || verdict === undefined) {
        if (item.veto) unverifiedVeto.push(item.name);
        if (item.required) unverifiedRequired.push(item.name);
        if (!item.required) unmatchedOptional.push(item.name);
      } else {
        if (item.veto) failedVeto.push(item.name);
        if (item.required) failedRequired.push(item.name);
        if (!item.required) unmatchedOptional.push(item.name);
      }

      items.push({ name: item.name, category: cat.category, required: item.required, veto: item.veto, matched, auto: canAutoCheck, unverified: !canAutoCheck || verdict === undefined });
    });
  });

  // 匹配度 = 已核验条件内的达成率（未核验条件不进分母，避免分数被无法自动判断的条件稀释）
  // 2026-08-01 修复：原口径 matchedWeight/totalWeight 使各政策理论最高分仅 12%-65%，「推荐申报」档永远不可达
  const score = verifiedWeight > 0 ? Math.round((matchedWeight / verifiedWeight) * 100) : 0;
  // 已核验权重占全部条件权重的比例，用于「信息不足」判定
  const coverage = totalWeight > 0 ? verifiedWeight / totalWeight : 0;
  // 已核验覆盖 < 15%（或一个条件都没核验到）→ 信息不足，不做推荐判断
  const insufficient = verifiedWeight === 0 || coverage < 0.15;

  return { totalWeight, verifiedWeight, matchedWeight, score, coverage, insufficient, failedRequired, failedVeto, unverifiedRequired, unverifiedVeto, matchedItems, unmatchedOptional, items };
}
