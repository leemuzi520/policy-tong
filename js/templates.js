// 条件模板库（Phase 4，2026-08-14）
// 设计参考：OpenFisca DRY Variables——高频条件跨政策复用，修改一处全局生效（https://openfisca.org/doc/，AGPL）
// 用法：条件项写 { tpl: '模板id', params: {…}, name/description/weight/required 等显式字段覆盖模板默认 }
// 展开：engine.js 在 POLICIES 构建后调用 expandPolicyTemplates 逐条展开——
//       item 显式字段优先（name/description 保留原文 → 渲染文本零变化）；
//       rule 包装为 (v, profile) => baseRule(v, profile, params)，并挂 _tplBase 供核源检查（rule↔描述对齐）。
// 语义约定：模板 rule 对表单「不清楚」一律返回 undefined（三态=未核验，2026-08-13 P1 统一口径）。

(function () {
  // 各字段档位升序表（用于「≥min / ≤max」语义；不含「不清楚」——三态单独拦截）
  const LEVELS = {
    revenue: ['<500万', '500万-2000万', '2000万-5000万', '5000万-1亿', '1亿-4亿', '>4亿'],
    years: ['<1年', '1-3年', '3-5年', '>5年'],
    segYears: ['<3年', '3-5年', '5-10年', '>10年'],
    mainRatio: ['<80%', '80%-90%', '≥90%'],
    debt: ['≤55%', '55%-75%', '75%-80%', '>80%'],
    growth: ['<5%', '≥5%'],
    eval: ['<50分', '50-60分', '≥60分'],
    rd: ['<3%', '3%-5%', '5%-8%', '>8%'],
    ipr: ['0', '1-5', '6-15', '>15'],
    rdTotal: ['<100万', '100万-1200万', '≥1200万']
  };
  // 参数化档位判定工厂：rule 调用时解析 params（p.min/max/want 优先，缺省用模板默认值）——
  // 2026-08-14 修复：此前闭包固定默认值，item.params 从未生效（xjr mainRatio/debt/eval 边界误判）
  const ge = (key, minDefault) => (v, profile, p) => {
    const min = p && p.min !== undefined ? p.min : minDefault;
    const lv = LEVELS[key] || [];
    const i = lv.indexOf(min);
    if (v === '不清楚') return undefined;
    if (i < 0) return undefined; // 参数不在档位表（数据错误，按未核验处理，不武断判定）
    if (!lv.includes(v)) return undefined; // 值不在档位表（如 eval「未查询」）= 无法按档位判定 → 未核验
    return lv.slice(i).includes(v);
  };
  const le = (key, maxDefault) => (v, profile, p) => {
    const max = p && p.max !== undefined ? p.max : maxDefault;
    const lv = LEVELS[key] || [];
    const i = lv.indexOf(max);
    if (v === '不清楚') return undefined;
    if (i < 0) return undefined;
    if (!lv.includes(v)) return undefined; // 同上：非档位值按未核验处理
    return lv.slice(0, i + 1).includes(v);
  };
  const eq = (key, wantDefault) => (v, profile, p) => {
    const want = p && p.want !== undefined ? p.want : wantDefault;
    const lv = LEVELS[key] || [];
    const i = lv.indexOf(want);
    if (v === '不清楚') return undefined;
    if (i < 0) return undefined;
    if (!lv.includes(v)) return undefined; // 同上
    return lv.slice(i).includes(v);
  };

  window.ZCT_TEMPLATES = {
    // 近三年无重大事故（一票否决）：accident='无' 即满足
    no_accident: {
      autoMatch: 'accident', veto: true, required: true, weight: 3,
      rule: v => v === '无'
    },
    // 上年度营业收入 ≥ min 档（revenue 升序切片）
    revenue_min: {
      autoMatch: 'revenue', required: true, weight: 2,
      rule: ge('revenue', '5000万-1亿')
    },
    // 成立年限 ≥ min 档
    years_min: {
      autoMatch: 'years', required: true, weight: 2,
      rule: ge('years', '1-3年')
    },
    // 从事特定细分市场年限 ≥ min 档
    seg_years_min: {
      autoMatch: 'segYears', required: true, weight: 3,
      rule: ge('segYears', '3-5年')
    },
    // 主营业务收入占营收 ≥ min 档
    main_ratio_min: {
      autoMatch: 'mainRatio', required: true, weight: 2,
      rule: ge('mainRatio', '80%-90%')
    },
    // 上年末资产负债率 ≤ max 档
    debt_max: {
      autoMatch: 'debt', required: true, weight: 1,
      rule: le('debt', '75%-80%')
    },
    // 近两年营收复合增长率 ≥ min 档
    growth_min: {
      autoMatch: 'growth', required: true, weight: 2,
      rule: ge('growth', '≥5%')
    },
    // 专精特新发展评价得分 ≥ min 档（未查询=未核验）
    eval_min: {
      autoMatch: 'eval', required: true, weight: 3,
      rule: ge('eval', '50-60分')
    },
    // 研发费用占营收比例 ≥ min 档（单字段口径；复合口径如「合计金额+占比」不模板化）
    rd_min: {
      autoMatch: 'rd', required: true, weight: 3,
      rule: ge('rd', '3%-5%')
    },
    // Ⅰ类知识产权数量 ≥ min 档（ipr 档位）
    ipr_min: {
      autoMatch: 'ipr', required: true, weight: 3,
      rule: ge('ipr', '6-15')
    },
    // 近两年研发费用合计金额 ≥ min 档
    rd_total_min: {
      autoMatch: 'rdTotal', required: true, weight: 2,
      rule: ge('rdTotal', '100万-1200万')
    },
    // 持有某认证（certs 数组包含 cert 参数；rule 判定型号须与描述呼应——核源检查项）
    cert_has: {
      autoMatch: 'certs', required: false, weight: 1,
      rule: (v, profile, p) => Array.isArray(v) && v.includes(p.cert)
    }
  };

  // 展开单个条件项（无 tpl 原样返回）
  function expandConditionItem(it) {
    if (!it || !it.tpl) return it;
    const t = window.ZCT_TEMPLATES?.[it.tpl];
    if (!t) return it; // 模板缺失：保留原样（数据校验脚本负责报错）
    const params = it.params || {};
    const out = Object.assign({}, t, it);
    delete out.tpl;
    delete out.params;
    const baseRule = t.rule;
    if (baseRule && Object.keys(params).length) {
      out.rule = (v, profile) => baseRule(v, profile, params);
      out.rule._tplBase = baseRule; // 核源检查（rule↔描述对齐）递归查看底层模板 rule
    }
    return out;
  }

  // 展开整条政策（含 paths 二选一路径）
  function expandPolicyTemplates(policy) {
    policy.conditions.forEach(cat => {
      if (cat.paths) cat.paths.forEach(pt => { pt.items = pt.items.map(expandConditionItem); });
      else cat.items = cat.items.map(expandConditionItem);
    });
    return policy;
  }

  window.ZCT_TEMPLATES.expandConditionItem = expandConditionItem;
  window.ZCT_TEMPLATES.expandPolicyTemplates = expandPolicyTemplates;
})();
