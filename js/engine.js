// 匹配引擎 + 数据层（2a.1 步骤 D，2026-08-02）
// 纯逻辑与纯数据，不碰 DOM；UI 渲染/事件/持久化在 app.js，字段定义在 fields.js。
// 加载顺序（index.html）：data/*.js → fields.js → engine.js → app.js
// 依赖：window.ZCT_DATA（data 文件挂载的政策数据）

// 数据版本：任何政策数据变更后更新此值（同步更新自诊断报告页脚日期戳）
// ============================================================
const DATA_VERSION = '2026-08-14'; // 环境时钟口径：P1 修复日（断言补 city / region 封顶 / cert 键统一 / 紧迫提示单源 / kjxqy 批次补全）

// 政策库：由 data/ 目录按部门汇总（2a.1 数据分离，2026-08-02）
// 汇总后按 order 字段恢复原数组顺序；新增政策按部门写入 data/ 对应文件，order 取当前最大值+1
const POLICIES = [
  ...(window.ZCT_DATA.national.most || []),
  ...(window.ZCT_DATA.national.miit || []),
  ...(window.ZCT_DATA.national.ndrc || []),
  ...(window.ZCT_DATA.guangdong || []),
  ...(window.ZCT_DATA.city || [])
].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

// Phase 4 条件模板库（2026-08-14）：展开 { tpl, params } 引用为完整条件项（模板字段被 item 显式字段覆盖）
// 依赖 js/templates.js（window.ZCT_TEMPLATES.expandPolicyTemplates）；模板缺失的条件保留原样（数据校验脚本负责报错）
if (window.ZCT_TEMPLATES?.expandPolicyTemplates) POLICIES.forEach(window.ZCT_TEMPLATES.expandPolicyTemplates);

// 启动断言：数据挂载完整性（缺失即报错，避免静默空库）
// 2026-08-14 修复：补 city 文件检查（2b.1 新增 city.js 后断言未同步，city 缺失时静默空转）
if (!(window.ZCT_DATA?.national?.most?.length > 0 && window.ZCT_DATA?.national?.miit?.length > 0 && window.ZCT_DATA?.national?.ndrc?.length > 0 && window.ZCT_DATA?.guangdong?.length > 0 && window.ZCT_DATA?.city?.length > 0)) {
  console.error('[政策通] 数据文件未完整加载，POLICIES 可能为空。请检查 data/ 目录文件。');
}
const COLUMNS = [
  { id: "zjt", name: "专精特新梯度培育", desc: "5 层梯度链条：创新型 → 省级专精特新 → 小巨人 → 重点小巨人/单项冠军（末两层并列方向；创新型与省级按广东省细则，粤工信规字〔2024〕5 号；单项冠军含国家级与广东省省级两级）", countLabel: "7 条政策 + 5 层链条" },
  { id: "gxjs", name: "高新技术企业", desc: "国家级税收优惠资质体系：企业所得税减按 15% 征收", countLabel: "1 条政策" },
  { id: "green", name: "绿色制造与循环利用", desc: "绿色制造体系评价 + 资源循环利用白名单", countLabel: "3 条政策" },
  { id: "zjzj", name: "专项资金与项目支持", desc: "财政专项资金：省级技改/绿色循环/先进制造奖补/专精特新贷款贴息 + 国家级超长期国债设备更新 + 中央预算内节能降碳投资补助", countLabel: "6 条政策" },
  { id: "gjpt", name: "企业创新平台", desc: "企业创新平台资质：国家/省级企业技术中心 + 国家技术创新示范企业 + 国家工程研究中心 + 国家级工业设计中心 + 省工程技术研究中心，研发投入高门槛 + 运行评价动态管理（39 号令 / 粤工信规字〔2022〕6 号 / 粤科规范字〔2022〕12号 / 发改委令第 34 号 / 工信部政法〔2023〕93 号）", countLabel: "6 条政策" },
  { id: "fwzz", name: "服务型制造与两业融合", desc: "先进制造业与现代服务业深度融合示范认定：国家级服务型制造示范（企业/平台/城市三类），服务收入占比 ≥30% 硬门槛 + 名额制属地推荐（工信部联政法〔2020〕101 号 / 工信厅政法函〔2023〕42 号 / 工信部联政法〔2025〕202 号）", countLabel: "1 条政策" },
  { id: "lhxx", name: "两化融合与数字化转型", desc: "国家两化融合与数字化转型案例征集：物联网赋能行业发展典型案例（工信部科技司，476 号集中征集 14 类之一，4 领域 14 方向）——国家级案例荣誉，无资金奖补，年度征集 + 名额制属地推荐（工信厅办函〔2025〕476 号 / 工厅科〔2024〕300 号 / 工信厅科函〔2026〕299 号）", countLabel: "1 条政策" },
  { id: "city", name: "珠三角地市专项", desc: "深圳/东莞/佛山市级财政专项：深圳技改扶持（重大/设备更新/智能化/贴息 + 1 号文加力）、东莞技改资金（新设备购置 ≤10%）、佛山中小企业数字化转型试点（投入 30%、最高 70 万）、东莞设备更新贷款贴息（1pct、最高 500 万）", countLabel: "4 条政策" }
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

// 政策可自动判断权重（有 autoMatch 的条件权重和）：核验进度分母
// 与 evaluatePolicyConditions 的 verifiedWeight 同口径；scoreBased 路径恒未核验（权重 0 不进）
function autoCheckableWeight(policy) {
  let w = 0;
  policy.conditions.forEach(cat => {
    if (cat.paths) {
      cat.paths.forEach(pt => {
        if (pt.scoreBased) return;
        if (pt.autoMatch) w += pt.items.reduce((s, i) => s + i.weight, 0);
      });
    } else {
      cat.items.forEach(it => { if (it.autoMatch) w += it.weight; });
    }
  });
  return w;
}

function evaluatePolicyConditions(policy, profile) {
  let totalWeight = 0;
  let verifiedWeight = 0; // 已核验条件权重（可自动判断且表单已填）
  let matchedWeight = 0;
  let requiredTotal = 0; // 必选条件总数（含二选一路径），供展示「已核验 X/Y 项必选」
  let verifiedRequired = 0; // 已核验且三态已定的必选数
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
        if (path.scoreBased) {
          // 评分路径需逐档自评（自诊断标签），表单无法自动算分 → 恒未核验，引导去自诊断核实
          // 子项为评分档位（scoreOptions）无权重：不进总权重分母，否则求和得 NaN（2026-08-13 修复）
          requiredTotal += 1;
          unverifiedRequired.push(label);
          items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: false, unverified: true, weight: 0 });
          return;
        }
        const pathWeight = path.items.reduce((s, i) => s + i.weight, 0);
        totalWeight += pathWeight;
        requiredTotal += 1;
        // 2026-08-13 P1：「不清楚」统一三态拦截——任何 rule 都不对「不清楚」判定，归未核验而非未通过/通过。
        // 一处拦截覆盖所有字段（含白名单型 rule 如 segYears/rd，原会误判未通过；ipr v!=="0" 型原会误判满足）
        const canAutoCheck = !!path.autoMatch && profile[path.autoMatch] !== undefined && profile[path.autoMatch] !== '' && profile[path.autoMatch] !== '不清楚';
        if (canAutoCheck) {
          verifiedWeight += pathWeight;
          // 2026-08-02 拆细：paths 类支持 path.rule（档位/组合判定，如知产数量档、层级前提 level），无 rule 时保持「是/否」三态语义
          const verdict = path.rule ? path.rule(profile[path.autoMatch], profile) :
            (profile[path.autoMatch] === "是" ? true : profile[path.autoMatch] === "否" ? false : undefined);
          if (verdict !== undefined) verifiedRequired += 1;
          if (verdict === true) {
            matchedWeight += pathWeight;
            matchedItems.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: true, auto: true, unverified: false, weight: pathWeight, autoMatch: path.autoMatch });
          } else if (verdict === undefined) {
            // 「不清楚」三态：归未核验而非未通过
            unverifiedRequired.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: true, unverified: true, weight: pathWeight, autoMatch: path.autoMatch });
          } else {
            failedRequired.push(label);
            items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: true, unverified: false, weight: pathWeight, autoMatch: path.autoMatch });
          }
        } else {
          unverifiedRequired.push(label);
          items.push({ name: label, category: cat.category, required: true, veto: false, matched: false, auto: false, unverified: true, weight: pathWeight });
        }
      });
      return; // 该类别的子项由自诊断逐条渲染，匹配/规划页不展开
    }
    cat.items.forEach(item => {
      totalWeight += item.weight;
      if (item.required) requiredTotal += 1;
      let matched = false;
      let verdict; // 判定结果：true/false，或 undefined（3 态字段选「不清楚」= 无法判断）

      // 三态取值：checkbox 多选（certs）空数组等价于未填 → 未核验；其余字段按值判
      // 2026-08-14 修复：autoMatch 键统一为注册表键名（cert → certs），删除特判；数组空检查通用化（未来 checkbox 字段同样生效）
      const autoVal = profile[item.autoMatch];
      const canAutoCheck = !!item.autoMatch && autoVal !== undefined && autoVal !== '' && autoVal !== '不清楚' && !(Array.isArray(autoVal) && autoVal.length === 0); // 2026-08-13 P1：同上，items 分支统一拦截
      if (canAutoCheck) {
        verifiedWeight += item.weight;
        if (item.autoMatch === 'industry') {
          verdict = item.rule(profile.industry, policy);
        } else {
          verdict = item.rule(profile[item.autoMatch], profile);
        }
        matched = verdict === true;
        if (verdict !== undefined) verifiedRequired += 1;
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

      items.push({ name: item.name, category: cat.category, required: item.required, veto: item.veto, matched, auto: canAutoCheck, unverified: !canAutoCheck || verdict === undefined, weight: item.weight, autoMatch: item.autoMatch });
    });
  });

  // 匹配度 = 已核验条件内的达成率（未核验条件不进分母，避免分数被无法自动判断的条件稀释）
  // 2026-08-01 修复：原口径 matchedWeight/totalWeight 使各政策理论最高分仅 12%-65%，「推荐申报」档永远不可达
  const score = verifiedWeight > 0 ? Math.round((matchedWeight / verifiedWeight) * 100) : 0;
  // 已核验权重占全部条件权重的比例，用于「信息不足」判定
  const coverage = totalWeight > 0 ? verifiedWeight / totalWeight : 0;
  // 已核验覆盖 < 15%（或一个条件都没核验到）→ 信息不足，不做推荐判断
  const insufficient = verifiedWeight === 0 || coverage < 0.15;

  return { totalWeight, verifiedWeight, matchedWeight, score, coverage, insufficient, requiredTotal, verifiedRequired, failedRequired, failedVeto, unverifiedRequired, unverifiedVeto, matchedItems, unmatchedOptional, items };
}

// ============================================================
// 2b.2 三维评分（2026-08-05）：Fit(50%) + Timing(25%) + Effort(25%)
// 设计参考：国际竞品 financing-starts-now 三维加权模型（[[知识库/国际竞品与最佳实践#实践 4]]）
// 单源：effort 档位与分数定义在 fields.js POLICY_FIELDS（window.ZCT_FIELDS）
// ============================================================

// Timing 分段评分（国际竞品实践 5）：<14天=20 / <30天=50 / <90天=80 / <180天=95 / ≥180天=100 / 滚动=90
// 数据来源优先级：batches（取最近未截止批次，与 windowUrgencyHTML 同口径）→ deadlineDate → is_rolling → 无
// 返回 { has }：无可用截止数据时 has=false，Timing 维度不参与加权（「无 deadline 政策兜底不崩」）
function getTimingInfo(policy, now = new Date()) {
  const deadlineMs = dateStr => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d, 23, 59, 59).getTime() - now.getTime();
  };
  let date = null;
  let batchLabel = ''; // 最近未截止批次的 label（app.js windowUrgencyHTML 展示用，2026-08-14 口径统一）
  if (policy.batches && policy.batches.length) {
    const upcoming = policy.batches
      .filter(b => deadlineMs(b.date) > 0)
      .sort((a, b) => deadlineMs(a.date) - deadlineMs(b.date));
    if (upcoming.length) { date = upcoming[0].date; batchLabel = upcoming[0].label; }
  } else if (policy.deadlineDate && deadlineMs(policy.deadlineDate) > 0) {
    date = policy.deadlineDate;
  }
  if (date) {
    const days = Math.ceil(deadlineMs(date) / 86400000);
    const score = days < 14 ? 20 : days < 30 ? 50 : days < 90 ? 80 : days < 180 ? 95 : 100;
    const label = days < 14 ? '非常紧迫' : days < 30 ? '紧迫' : days < 90 ? '较从容' : '从容';
    return { has: true, days, date, score, label, batchLabel };
  }
  if (policy.is_rolling) return { has: true, rolling: true, score: 90, label: '滚动申报' };
  return { has: false, label: '窗口未定' };
}

// Effort 档位分数与短标签（单源：fields.js POLICY_FIELDS；缺省中档 70 兜底，防数据缺失崩）
function getEffortInfo(policy) {
  const def = (window.ZCT_FIELDS?.POLICY_FIELDS || []).find(f => f.key === 'effort');
  const level = policy.effort || 'Medium';
  const opt = def?.options?.find(o => o[0] === level);
  return { level, score: def?.score?.[level] ?? 70, label: opt ? opt[1].split('（')[0] : '中' };
}

// 三维加权总分：Fit(50%) + Timing(25%) + Effort(25%)；缺失维度按剩余维度权重归一化，
// 避免「窗口未定」政策因未知维度被无谓拉低（如 100 分制下 0.5+0.25+0.25 满分为 100）
function scorePolicy(policy, profile, now = new Date()) {
  const ev = evaluatePolicyConditions(policy, profile);
  const timing = getTimingInfo(policy, now);
  const effort = getEffortInfo(policy);
  const W = { fit: 0.5, timing: 0.25, effort: 0.25 };
  const denom = W.fit + (timing.has ? W.timing : 0) + W.effort;
  const total = Math.round((ev.score * W.fit + (timing.has ? timing.score * W.timing : 0) + effort.score * W.effort) / denom);
  return { ...ev, fit: ev.score, timing, effort, total };
}

// ============================================================
// 2b.3 全文检索 + 申报窗口月份（2026-08-06）：纯逻辑，供筛选栏/时间轴共用单源
// ============================================================

// 归一化文本：小写 + 去首尾空白 + 去全部空白（中文分句空格不影响命中）
function normText(s) {
  return String(s || '').toLowerCase().trim().replace(/\s+/g, '');
}

// 全文检索：政策名 + 发文机关 + 条件描述（category + items 的 name/description）
// paths 二选一路径结构须展平（xjr/kjxqy/greenfactory/gysjzx/gdgczx 均含）；summary/tips 不在检索范围（需求口径）
function policyMatchesSearch(policy, term) {
  const t = normText(term);
  if (!t) return true;
  if (normText(policy.name).includes(t) || normText(policy.issuingBody).includes(t)) return true;
  return policy.conditions.some(cat => {
    if (normText(cat.category).includes(t)) return true;
    const items = cat.paths
      ? cat.paths.flatMap(path => (path.name ? [path.name] : []).concat(path.items || []))
      : (cat.items || []);
    return items.some(it => normText(it.name).includes(t) || normText(it.description).includes(t));
  });
}

// 申报窗口月份（YYYY-MM 集合）：batches 未来批次 + deadlineDate（未来），与 getTimingInfo 同口径
// 供 #filterMonth 选项与时间轴共用；滚动申报/窗口未定政策返回空数组（归时间轴「滚动/未定」区）
function policyWindowMonths(policy, now = new Date()) {
  const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = ymd(now);
  const months = new Set();
  (policy.batches || []).forEach(b => { if (b.date >= today) months.add(b.date.slice(0, 7)); });
  if (policy.deadlineDate && policy.deadlineDate >= today) months.add(policy.deadlineDate.slice(0, 7));
  return [...months].sort();
}

// ============================================================
// 2b.3 近失配恢复（2026-08-05）：全部结果落到 low/veto 档时的兜底建议
// 触发：runMatch 全结果无 high/medium（信息不足属 medium 档，不触发——先补数据而非放松）
// 放松规则：仅「已核验确认未通过的普通必选条件」可放松——一票否决为事实性硬伤（事故/排放等）
//   不可放松须正面攻破；未核验条件不在 failedRequired 内（引导去自诊断）；paths 类整路径失败
//   在 items 无对应条目（label 非条件名），自动排除
// 放松顺序：按约束影响面从小到大——条件维度 autoMatch 在全部政策中的出现次数，
//   出现越少影响面越小越优先放松；同一政策内多个失败条件按影响面升序前缀逐级放松
// 重算口径：假设放松条件满足 → matchedWeight += 其 weight → 分档规则与 runMatch 同款
//   （industry 不匹配封顶 69 中档；≥75 高 / ≥50 中 / <50 低）
// 差异标注：放松条件名 + 条件描述（含要求值）+ 用户当前档位文本（fields 注册表反向查）
// 返回：按「放松数 → 放松后档位 → 放松后总分」排序的候选（最多 5 个），无可放松候选返回 []
// 算法参考：financing-starts-now near-miss recovery（[[知识库/国际竞品与最佳实践#实践 2]]）
function nearMissRecovery(results, profile) {
  // 约束影响面：维度 autoMatch → 全部政策中该维度条件出现次数（含 paths 类子项）
  const freq = {};
  POLICIES.forEach(p => p.conditions.forEach(cat => {
    const items = cat.paths ? cat.paths.flatMap(pt => pt.items || []) : (cat.items || []);
    items.forEach(it => { if (it.autoMatch) freq[it.autoMatch] = (freq[it.autoMatch] || 0) + 1; });
  }));
  // 用户当前档位文本（fields 注册表 [value, text] 反向查；checkbox/未填返回空串不渲染）
  const labelOf = key => {
    const f = (window.ZCT_FIELDS?.FIELDS || []).find(x => x.key === key);
    if (!f) return '';
    const v = profile[key];
    const opt = (f.options || []).find(o => (Array.isArray(o) ? o[0] : o) === v);
    return opt ? (Array.isArray(opt) ? opt[1] : opt) : '';
  };
  const cands = [];
  results.forEach(r => {
    // 一票否决未通过：放松普通必选不消除否决，仍不具备资格 → 不参与放松
    if (r.failedVeto.length) return;
    // 可放松条件：failedRequired 中能命中 items 且 auto 已核验的（未核验/unverified 不在 failedRequired）
    const relaxable = r.failedRequired
      .map(name => r.items.find(it => it.name === name && it.auto))
      .filter(Boolean)
      .sort((a, b) => (freq[a.autoMatch] ?? 99) - (freq[b.autoMatch] ?? 99) || a.weight - b.weight);
    // 前缀逐级放松：放松前 k 个影响面最小的条件，求最少放松数达到 medium 及以上
    let addW = 0;
    for (let k = 1; k <= relaxable.length; k++) {
      addW += relaxable[k - 1].weight;
      const s = Math.round((r.matchedWeight + addW) / r.verifiedWeight * 100);
      // 2026-08-14 修复：region 与 industry 同口径封顶（runMatch 对两者均 soft 降档 medium cap 69）——
      // 此前只封 industry，地区不匹配的市级政策放松后可能虚高到推荐档
      const tier = (r.industryMatch && r.regionMatch)
        ? (s >= 75 ? 'high' : s >= 50 ? 'medium' : 'low')
        : (s >= 50 ? 'medium' : 'low'); // 行业/地区不匹配封顶中档（与 runMatch 同款，得分本身无意义）
      if (tier === 'high' || tier === 'medium') {
        cands.push({
          policy: r.policy,
          relaxCount: k,
          tier,
          score: (r.industryMatch && r.regionMatch) ? s : Math.min(s, 69),
          gaps: relaxable.slice(0, k).map(it => ({ name: it.name, desc: it.description, want: labelOf(it.autoMatch) }))
        });
        break; // 该政策取最少放松数
      }
    }
  });
  cands.sort((a, b) =>
    a.relaxCount - b.relaxCount ||
    (a.tier === b.tier ? b.score - a.score : a.tier === 'high' ? -1 : 1));
  return cands.slice(0, 5);
}

// ============================================================
// Phase 3.1 渐进式问卷（2026-08-05）：自适应问卷（Akinator-Style）
// 设计参考：FörderFunke matching engine 自适应问卷（[[知识库/国际竞品与最佳实践#实践 9]]）
// 流程：先问 3 个核心字段（行业/规模/成立年限）→ 硬淘汰（行业不匹配 / 必选与一票否决已确认不满足）→
//       分析剩余政策条件依赖 → 追问「被最多政策需要且未问」的字段 → 收敛（剩余 ≤5 或无可问字段）
// 核心字段与选项均来自 fields.js 注册表（window.ZCT_FIELDS），无硬编码词表
// 返回 { done, remaining, eliminated, nextKey, nextCount }；done=true 时 remaining 为收敛结果
// ============================================================
function progressiveCoreKeys() {
  const core = ['industry', 'revenue', 'years'];
  const fields = window.ZCT_FIELDS?.FIELDS || [];
  return core.filter(k => fields.some(f => f.key === k && f.match));
}

function progressiveStep(profile, askedKeys) {
  const remaining = POLICIES.filter(p => {
    // 硬淘汰 1：适用行业不匹配（applicableIndustries 非空的政策才生效）
    if (profile.industry && p.applicableIndustries.length && !p.applicableIndustries.includes(profile.industry)) return false;
    // 2b.4 硬淘汰 3：地区不匹配（2026-08-13）——市级政策限定适用市，企业所在地已填且不符 → 淘汰；
    // 未填所在地或政策无 regions（省级/国家级）不淘汰
    if (profile.region && p.regions && p.regions.length && !p.regions.includes(profile.region)) return false;
    // 硬淘汰 2：必选/一票否决条件已确认不满足（未核验不淘汰，引导补数据而非误杀）
    const r = evaluatePolicyConditions(p, profile);
    return r.failedRequired.length === 0 && r.failedVeto.length === 0;
  });
  const eliminated = POLICIES.length - remaining.length;
  const asked = new Set(askedKeys);
  // 核心字段优先追问（industry → revenue → years），未答且未问过的
  const coreNext = progressiveCoreKeys().find(k => !asked.has(k) && !profile[k]);
  if (coreNext) return { done: false, remaining, eliminated, nextKey: coreNext, nextCount: null };
  // 收敛：剩余 ≤5 或没有可问字段
  const fields = (window.ZCT_FIELDS?.FIELDS || []).filter(f => f.match && f.type !== 'checkbox');
  const askable = fields.filter(f => !asked.has(f.key) && !profile[f.key]);
  if (remaining.length <= 5 || askable.length === 0) {
    return { done: true, remaining, eliminated, nextKey: null, nextCount: 0 };
  }
  // 锚点优先（2026-08-13 方案 A）：拟申报项目类型是资金/资质分流的锚点。
  // 纯引用计数下 projectType 引用数（3）远低于 accident/rd/ipr 等通用字段，资金字段会被排到第 8-10 问；
  // 剩余政策中仍有项目制政策（引用 projectType）时先问它，答后硬淘汰 2 自动淘汰类型不符的政策，
  // 后续引用计数自然在兼容子集内分流——资金类追问项目字段（projectStatus/investAmount）、资质类追问资质字段
  const hasProjectPolicies = remaining.some(p => p.conditions.some(cat => {
    const items = cat.paths ? cat.paths.flatMap(pt => pt.items || []) : (cat.items || []);
    return items.some(it => it.autoMatch === 'projectType');
  }));
  if (hasProjectPolicies && !asked.has('projectType') && !profile.projectType) {
    return { done: false, remaining, eliminated, nextKey: 'projectType', nextCount: null };
  }
  // P2（2026-08-13）：记忆字段优先追问——用户零成本直觉可答的字段（industry/revenue/years 已由 coreNext 覆盖）
  // 排在查询字段（需查报表/数证书/专业概念）之前。理由：引用计数只优化收敛步数，「答不出的问题」
  // 让用户中途放弃的代价远大于多问一个能答的问题。连续跳过已由 progSkip 处理，无需在此处理。
  // region 无 autoMatch 引用（筛选/硬淘汰专用），但答后立即硬淘汰市级政策（收敛效率最高）→ 无条件优先
  if (!asked.has('region') && !profile.region) {
    return { done: false, remaining, eliminated, nextKey: 'region', nextCount: null };
  }
  const MEMORY_KEYS = ['type'];
  const memDemand = {};
  remaining.forEach(p => p.conditions.forEach(cat => {
    const mItems = cat.paths ? cat.paths.flatMap(pt => pt.items || []) : (cat.items || []);
    mItems.forEach(it => {
      if (it.autoMatch && MEMORY_KEYS.includes(it.autoMatch) && askable.some(f => f.key === it.autoMatch)) {
        memDemand[it.autoMatch] = (memDemand[it.autoMatch] || 0) + 1;
      }
    });
  }));
  const memBest = Object.entries(memDemand).sort((a, b) => b[1] - a[1])[0];
  if (memBest) return { done: false, remaining, eliminated, nextKey: memBest[0], nextCount: memBest[1] };
  // 追问：被最多剩余政策依赖的未问字段（autoMatch 引用计数，含 paths 子项）
  const demand = {};
  remaining.forEach(p => p.conditions.forEach(cat => {
    const items = cat.paths ? cat.paths.flatMap(pt => pt.items || []) : (cat.items || []);
    items.forEach(it => { if (it.autoMatch && askable.some(f => f.key === it.autoMatch)) demand[it.autoMatch] = (demand[it.autoMatch] || 0) + 1; });
  }));
  const best = Object.entries(demand).sort((a, b) => b[1] - a[1])[0];
  return { done: !best, remaining, eliminated, nextKey: best ? best[0] : null, nextCount: best ? best[1] : 0 };
}

// ============================================================
// Phase 3.2 申报路线图（2026-08-05）：三层递进 + 三维评分
// 设计参考：企蒜蒜「初算→精算→深算」三层框架（[[知识库/政策通 竞品分析报告#竞品 3]]）
//           + financing-starts-now Fit/Timing/Effort 三维排序（[[知识库/国际竞品与最佳实践#实践 4]]）
// 分层规则（最小可用版，消费 2b.2 三维评分 + 2b.3 申报窗口期）：
//   近期可申报（0-6 月）：无否决 + 无必选缺口 + fit ≥70（缺口已清零，窗口 180 天内/滚动/未定均可行动）
//   中期可冲刺（6-12 月）：无否决 + 缺 1-2 个关键必选条件（缺口有明确补齐路径，按缺口数升序）
//   长期培育（1-3 年）：无否决的其余（缺 ≥3 条件或需前置资质/系统性建设）
//   否决政策独立列出（一票否决 = 硬性资格线，任何时间线都不具备资格）
//   信息不足不参与分层（先补数据，与近失配触发口径一致：insufficient 需补数据而非规划）
// 返回 { near, mid, long, vetoed, insufficient } 四组 scorePolicy 结果
// ============================================================
function buildRoadmap(profile, now = new Date()) {
  const layers = { near: [], mid: [], long: [], vetoed: [], insufficient: [] };
  POLICIES.forEach(p => {
    const r = Object.assign(scorePolicy(p, profile, now), { policy: p }); // 挂 policy 供 UI 渲染（政策名/详情跳转）
    if (r.failedVeto.length) { layers.vetoed.push(r); return; }
    // 2026-08-14 修复（遗留 #18）：核验进度门槛与匹配页 high 档同口径（方案 B progress≥0.7）——
    // 此前近层仅 fit≥70，只填 4 个字段也能大量落「近期可申报」（虚高）；progress 不足归「信息不足」先补数据
    const progress = autoCheckableWeight(p) > 0 ? r.verifiedWeight / autoCheckableWeight(p) : 0;
    if (r.insufficient || progress < 0.7) { layers.insufficient.push(r); return; }
    const gapCount = r.failedRequired.length;
    if (r.fit >= 70 && gapCount === 0) { layers.near.push(r); return; }
    if (gapCount <= 2) { layers.mid.push(r); return; }
    layers.long.push(r);
  });
  layers.near.sort((a, b) => b.total - a.total);
  layers.mid.sort((a, b) => a.failedRequired.length - b.failedRequired.length || b.total - a.total);
  layers.long.sort((a, b) => a.failedRequired.length - b.failedRequired.length || b.total - a.total);
  layers.vetoed.sort((a, b) => b.total - a.total);
  layers.insufficient.sort((a, b) => b.coverage - a.coverage);
  return layers;
}

// ============================================================
// Phase 3.3 申报作战手册数据辅助（2026-08-05）
// 材料清单：通用材料 + 条件描述中含外部佐证关键词（报告/证明/证书/审计/检测等）的专项提示
// 时间节点倒推：截止日 → 逆推 8/4/2/1 周筹备节点；滚动申报/窗口未定给对应口径
// ============================================================
const MANUAL_COMMON_MATERIALS = [
  '企业营业执照副本（加盖公章）',
  '法定代表人身份证明',
  '近两年财务审计报告（由具执业资质的会计师事务所出具）',
  '纳税证明 / 完税证明（税务部门出具）',
  '申报书 / 申请表（按官方通知模板填写）',
  '真实性承诺书（法定代表人签字 + 盖章）'
];

// 专项佐证提示：优先取条件项的 evidence 字段（2026-08-14 zct-diag 细化后数据）；
// 无 evidence 的政策回退关键词粗筛（description 含报告/证明/证书等外部材料字样的条件）——其他政策零影响
function extractSupportDocs(policy) {
  const kw = /报告|证明|证书|审计|检测|评估|备案|登记|批复|认定书/;
  const hits = [];
  policy.conditions.forEach(cat => {
    const items = cat.paths ? cat.paths.flatMap(pt => pt.items || []) : (cat.items || []);
    items.forEach(it => {
      if (it.evidence) { hits.push({ name: it.name, desc: it.evidence, basis: it.basis }); return; }
      if (it.description && kw.test(it.description)) hits.push({ name: it.name, desc: it.description, basis: it.basis });
    });
  });
  return hits;
}

// 时间节点倒推：{ rolling | undecided | { date, steps:[{when,todo}] } }
function manualTimeline(policy, now = new Date()) {
  const t = getTimingInfo(policy, now);
  if (t.rolling) return { rolling: true };
  if (!t.has) return { undecided: true };
  const fmt = d => `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
  const at = days => {
    const d = new Date(t.date);
    d.setDate(d.getDate() - days);
    return fmt(d);
  };
  return {
    date: fmt(new Date(t.date)),
    steps: [
      { when: `截止前 8 周（${at(56)}）`, todo: '启动专项审计 / 第三方报告（如需）；确认申报书关键数据口径（营收、研发费用）' },
      { when: `截止前 4 周（${at(28)}）`, todo: '收集认证证书、检测报告、无事故证明等佐证材料（注意证明类材料有效期）' },
      { when: `截止前 2 周（${at(14)}）`, todo: '申报材料初稿完成；内部审批、用章、负责人签字' },
      { when: `截止前 1 周（${at(7)}）`, todo: '系统填报 + 附件上传（截止当日 17:00 前提交；留意地市推荐截止早于省级）' }
    ]
  };
}
