// 政策数据：广东省省级（由 index.html 汇总为 POLICIES）
// 来源：index.html 2a.1 数据分离（2026-08-02，纯搬家，内容未改）
window.ZCT_DATA = window.ZCT_DATA || {};
window.ZCT_DATA.guangdong = window.ZCT_DATA.guangdong || [];
window.ZCT_DATA.guangdong.push(
  {
    id: "gdgreenfactory",
    order: 4,
    column: "green",
    name: "广东省级绿色工厂",
    issuingBody: "广东省工信厅",
    level: "省级",
    deadline: "每年 1 批：各地市 6 月 30 日前通过管理平台推荐至省厅（4 号文第十三条）。2026 年度申报已结束（2026-06-05 启动、各地市 6 月中下旬截止），下一批次预计 2027 年 5-6 月启动",
    effort: "Medium",
    updated: "2026-08-14",
    // 批次日期：供匹配页申报窗口紧迫度计算；2026 年度已截止 → 不渲染（防过期误导）；2027 年度启动时更新
    batches: [
      { label: "2026 年度推荐截止", date: "2026-06-30" }
    ],
    source: { name: "《广东省绿色工厂梯度培育管理实施细则》（粤工信规字〔2024〕4 号，省政府公报）", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" },
    notice: { name: "《广东省工业和信息化厅关于开展 2026 年度省级绿色工厂绿色工业园区申报工作的通知》（粤工信节能函〔2026〕21 号）", url: "https://gdii.gd.gov.cn/zwgk/tzgg1011/content/post_4908393.html", timeline: "2026-06-05 发布。流程：企业登录管理平台（green.miit.gov.cn）自评价 → 市级遴选发布市级绿色制造名单（4 号文第十二条）→ 各地市 6 月 30 日前通过管理平台推荐至省厅 → 省厅符合性审核、列为省级培育对象（有效期三年，第十四条）→ 评审公示公布省级名单（第十五条）→ 择优推荐国家级（第十六条）" },
    summary: "广东省梯度培育「市→省→国家」的中间层：申报省级绿色工厂须先经市级遴选、由地市 6 月 30 日前推荐（4 号文第十二、十三条），获评省级是后续择优推荐国家级绿色工厂的前提（第十六条）。2026 年度申报：53 个重点行业（钢铁、石化化工、有色、建材、机械、轻工、纺织、电子）按对应行业评价要求自评价，其他行业按《绿色工厂通用建设指南》及 GB/T 36132-2025 自评价（2026 通知）。获评后享专项资金申请、政府采购、绿色金融等支持（第二十四条），部分地市另有一次性奖励。已获国家级绿色工厂的企业自动列入省级名单（第十七条），无需重复申报。",
    subsidy: "省级无统一现金补贴：获评后享规划布局、技术改造、专项资金申请、政府采购、试点示范、金融服务、品牌宣传等支持（4 号文第二十四条）；鼓励各地运用财政、产业、土地、规划、金融、税收、用能等政策扶持（第二十五条），部分地市给予一次性奖励（以当地政策为准）。",
    applicableIndustries: ["制造业（通用）","化工","汽车","电子信息","消费品","新能源与节能","资源与环境","新材料"],
    conditions: [
      {
        category: "基础合规（4 号文第七条 + 第十八条负面清单 + GB/T 36132 基本要求）",
        items: [
          { name: "注册地和实际生产场所在广东省、独立法人制造企业", required: true, weight: 3, description: "4 号文第七条（一）：注册地和实际生产场所在广东省行政区域范围内，依法设立并具有独立法人资格或者视同法人的独立核算单位，且从事实际生产的制造型企业；2026 通知申报要求同口径", basis: { name: "4 号文第七条（一）· 2026 通知申报要求", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本（含统一社会信用代码）" }, // 表单四种企业类型均为依法设立的企业，此条件自动通过；未选类型时归为未核验
          { name: "正常经营生产（未注销、未连续停产 12 个月以上）", required: true, weight: 2, veto: true, description: "4 号文第十八条（一）+ 2026 通知不得申报情形 1：工商注销、连续停产 12 个月以上、被列入经营异常名单且未被移出等不得申报", basis: { name: "4 号文第十八条（一）· 2026 通知不得申报情形 1", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, evidence: "国家企业信用信息公示系统（gsxt.gov.cn）查询结果（登记状态与经营异常名录）" },
          { name: "近三年无安全、质量、环境污染事故及偷漏税", required: true, weight: 3, veto: true, description: "4 号文第十八条（二）+ 2026 通知不得申报情形 2：发生安全（含网络安全、数据安全）、质量、环境污染等事故以及偷漏税等违法违规行为的不得申报（参照「信用中国」「国家企业信用信息公示系统」）", basis: { name: "4 号文第十八条（二）· 2026 通知不得申报情形 2", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "未被动态调整出绿色制造名单、督查无严重问题、节能监察整改已完成", required: true, weight: 2, veto: true, description: "4 号文第十八条（三）-（五）+ 2026 通知不得申报情形 3-5：被动态调整出绿色制造名单、在国务院及有关部委督查工作中被发现存在严重问题、被列入工业节能监察整改名单且未按要求完成整改的均不得申报", basis: { name: "4 号文第十八条（三）-（五）· 2026 通知不得申报情形 3-5", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, evidence: "属地工信部门确认或自检说明（含节能监察整改完成证明，如适用）" },
          { name: "未被列为失信被执行人", required: true, weight: 2, veto: true, description: "4 号文第十八条（六）+ 2026 通知不得申报情形 6：企业被列为失信被执行人的不得申报", basis: { name: "4 号文第十八条（六）· 2026 通知不得申报情形 6", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, evidence: "「信用中国」（creditchina.gov.cn）被执行人查询结果" },
          { name: "污染物排放持续达标", required: true, weight: 3, veto: true, description: "2026 通知申报流程（一）：其他行业企业依据《绿色工厂通用建设指南》及《绿色工厂评价通则》（GB/T 36132-2025）自评价；通则环境排放要求——大气/水/噪声排放符合相关标准，需提供近一年监测数据", basis: { name: "2026 通知申报流程（一）· GB/T 36132-2025", url: "https://gdii.gd.gov.cn/zwgk/tzgg1011/content/post_4908393.html" }, autoMatch: "emission", rule: v => v === "是", evidence: "近一年第三方环境监测报告 + 环评批复及验收文件" },
          { name: "依法取得排污许可证", required: true, weight: 2, veto: true, description: "GB/T 36132 基本要求（与国家级同源）：按《排污许可管理条例》（国务院令第 736 号）应领尽领；未取得排污许可证的不得排放污染物（条例第二条）", basis: { name: "GB/T 36132-2025 · 《排污许可管理条例》第二条", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "排污许可证（正本及副本）" }
        ]
      },
      {
        category: "管理体系（GB/T 36132 第 6 章基本要求，与国家级同源）",
        items: [
          { name: "已建立质量管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持质量管理体系（GB/T 19001/ISO9001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO9001"), evidence: "质量管理体系认证证书（在有效期内）" },
          { name: "已建立环境管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持环境管理体系（GB/T 24001/ISO14001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO14001"), evidence: "环境管理体系认证证书（在有效期内）" },
          { name: "已建立能源管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持能源管理体系（GB/T 23331/ISO50001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO50001"), evidence: "能源管理体系认证证书（在有效期内）" },
          { name: "已建立职业健康安全管理体系", required: true, weight: 1, description: "GB/T 36132 第 6 章：建立并保持职业健康安全管理体系（ISO45001，OHSAS18001 已于 2021 年停发，有效期内的旧证仍认可）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO45001") || v.includes("OHSAS18001"), evidence: "职业健康安全管理体系认证证书（在有效期内，含未到期 OHSAS18001 旧证）" }
        ]
      },
      {
        category: "梯度培育前置",
        items: [
          { name: "已纳入市级绿色工厂名单（市级遴选后推荐省级）", required: true, weight: 3, description: "4 号文第十二条：地市工信主管部门按管理平台申报材料遴选发布市级绿色制造名单；第十三条：各市于每年 6 月 30 日前将市级名单通过管理平台推荐至省厅——申报省级须先入选市级名单", basis: { name: "4 号文第十二条、第十三条", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, evidence: "市级绿色制造名单公告或入选证明" }
        ]
      },
      {
        category: "绿色绩效自评价",
        items: [
          { name: "按对应评价标准完成自评价并达标", required: true, weight: 3, description: "2026 通知申报流程（一）：53 个重点行业（钢铁、石化化工、有色、建材、机械、轻工、纺织、电子）按对应行业绿色工厂评价要求自评价；其他行业依据《绿色工厂通用建设指南》及 GB/T 36132-2025 自评价；管理平台（green.miit.gov.cn）如实填报申报表并上传佐证材料", basis: { name: "2026 通知申报流程（一）", url: "https://gdii.gd.gov.cn/zwgk/tzgg1011/content/post_4908393.html" }, evidence: "管理平台自评价填报数据与佐证材料（按评价指标逐项）" },
          { name: "能源、资源利用绩效达到基准值要求", required: true, weight: 2, description: "GB/T 36132-2025 绩效指标（与国家级绿色工厂同源：4 号文第七条（二）指向《绿色工厂梯度培育及管理暂行办法》第十四条第一款标准要求）：能耗、水耗、污染物产生量等以基准值/引领值评分；需提供能源审计报告、水平衡测试报告、环评及验收文件", basis: { name: "4 号文第七条（二）· GB/T 36132-2025", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/13/content/post_4442996.html" }, evidence: "能源审计报告或能耗统计台账 + 水平衡测试报告或用水台账 + 环评批复及验收文件" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 2026 通知申报流程 + 4 号文梯度培育要求；管理平台线上填报上传）
    materials: [
      { name: "绿色工厂申报表（管理平台 green.miit.gov.cn「绿色工厂（梯度培育）」栏目填报）", required: true, basis: { name: "粤工信节能函〔2026〕21 号申报流程（一）", url: "https://gdii.gd.gov.cn/zwgk/tzgg1011/content/post_4908393.html" } },
      { name: "自评价佐证材料（按评价指标要求上传，53 行业按行业要求、其他行业按通则）", required: true },
      { name: "企业营业执照副本", required: true },
      { name: "排污许可证（按《排污许可管理条例》应领尽领）", required: true },
      { name: "质量/环境/能源/职业健康安全管理体系认证证书（四体系）", required: true, basis: { name: "GB/T 36132-2025（第 6 章管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" } },
      { name: "能源审计报告或节能评估报告 + 近一年能耗统计台账", required: true },
      { name: "水平衡测试报告或近一年用水台账", required: true },
      { name: "环评批复及验收文件 + 近一年第三方环境监测报告", required: true },
      { name: "一般工业固废台账与综合利用去向证明", required: true },
      { name: "「信用中国」报告 + 国家企业信用信息公示系统查询结果（负面清单核查）", required: true },
      { name: "市级绿色工厂名单入选证明", required: true, note: "须先经市级遴选、由地市推荐至省厅（4 号文第十二、十三条）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "申报全程线上：登录工业节能与绿色发展管理平台（green.miit.gov.cn）注册后，在「绿色工厂（梯度培育）」栏目查询评价要求，如实填报申报表完成自评价并上传佐证材料，通过管理平台逐级提交",
      "年度节奏：各地市 6 月 30 日前通过管理平台推荐至省厅，各地市截止通常更早（以属地通知为准）；2026 年度已截止，下一批预计 2027 年 5-6 月启动",
      "53 个重点行业按对应行业绿色工厂评价要求自评价，其他行业按《绿色工厂通用建设指南》及 GB/T 36132-2025 自评价",
      "获评后动态管理：每年 4 月 15 日前通过管理平台填报年度动态管理表（4 号文第十九条）；省级培育对象有效期三年（第十四条）",
      "已获国家级绿色工厂的企业自动列入省级名单，无需重复申报（4 号文第十七条）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：负面清单六项拆为可三态判定的独立条件，新增管理体系（四体系）与排污许可证条件（GB/T 36132 基本要求，与国家级同源），全部条件补 evidence，新增 materials 与 diagNotes", basis: "粤工信节能函〔2026〕21 号 · 4 号文第十八条 · GB/T 36132-2025" }
    ],
    changesTitle: "2026 年度申报要点",
    changesNote: "2026 年度申报通知已发布（粤工信节能函〔2026〕21 号），逐条有官方依据",
    changes: [
      "2026 年度申报已启动：2026-06-05 发布通知，各地市 6 月 30 日前通过管理平台推荐至省厅；各地市截止早于省级（阳江 6.18、惠州 6.22、肇庆 6.25 等）",
      "评价依据分行业：53 个重点行业按对应行业绿色工厂评价要求自评价，其他行业按《绿色工厂通用建设指南》+ GB/T 36132-2025 自评价（2026 通知申报流程）",
      "梯度培育三级联动：市级遴选发布市级名单（第十二条）→ 各市 6.30 前推荐省级（第十三条）→ 省级择优推荐国家级（第十六条）",
      "已获国家级绿色工厂自动列入省级名单，无需重复申报（4 号文第十七条）",
      "动态管理：获评后每年 4 月 15 日前通过管理平台填报年度动态管理表（4 号文第十九条）",
      "省级培育对象有效期三年，有效期内持续对照标准开展绿色化改造提升（4 号文第十四条）"
    ],
    tips: "广东梯度培育（市→省→国家）的中间层：申报省级前先进入市级绿色工厂名单，由市里 6.30 前统一推荐到省厅。评价标准与国家级同源——53 个重点行业按行业标准、其他行业按 GB/T 36132-2025 通则自评价，核心还是能耗、水耗、污染物这些硬指标；四体系认证（质量/环境/能源/职业健康）与排污许可证是通则基本要求，缺证一票否决。已获国家级绿色工厂的企业不用重复申报省级（自动列入）。省级无统一现金补贴，但地市奖励、专项资金申请资格都有；想冲国家级绿色工厂的，省级是必经台阶。"
  },
  {
    id: "innovative",
    order: 6,
    column: "zjt",
    name: "创新型中小企业评价入库",
    issuingBody: "广东省工信厅（全国标准工信部制定）",
    level: "省级",
    deadline: "广东省每年 1 批：2026 年度评价（复核）申报 2026-07-01~07-31 已截止，各地 8.31 前报送省厅（粤工信融资函〔2026〕39 号）；下一批 2027 年度预计 2027 年 6-7 月",
    effort: "Easy",
    updated: "2026-08-14",
    source: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" },
    basis: [
      { name: "《优质中小企业梯度培育管理暂行办法》（工信部企业〔2022〕63 号）附件 1 创新型中小企业评价标准——现行评价细则（2 号文第三十条：合并新标准发布前沿用本标准）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" },
      { name: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" },
      { name: "《广东省工业和信息化厅关于开展2026年度创新型中小企业评价和复核工作的通知》（粤工信融资函〔2026〕39 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }
    ],
    notice: { name: "《广东省工业和信息化厅关于开展 2026 年度创新型中小企业评价和复核工作的通知》（粤工信融资函〔2026〕39 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html", timeline: "2026-06-23 发布。流程：企业 2026-07-01 至 07-31 在优质中小企业梯度培育平台（zjtx.miit.gov.cn）线上申报 → 各地审核、官网公示 5 天 → 各地 8.31 前将推荐名单报省厅（各地市提前截止：阳江 7.24、汕头 8.5、惠州 8.6、东莞 8.10、茂名 8.10 等）→ 深圳市自行组织、报省厅备案。2023 年第一至第三批创新型中小企业可提出复核申请；2026 年度申报已截止，下一批 2027 年 6-7 月" },
    summary: "专精特新梯度培育的第一层（基础层），入库是申报省级专精特新、小巨人的起点。2026 年起新口径将科技型中小企业一并纳入。谁能报：广东省注册、符合中小企业划型、合规经营的企业。怎么过（二选一）：① 满足 4 项直通条件之一（近三年国家级/省级科技奖励、高企等有效期内荣誉、省部级研发机构、新增股权融资 ≥500 万元）；② 评价得分 ≥60 分（创新能力 40 分 + 成长性 30 分 + 专业化 30 分，且创新能力 ≥20 分、成长性及专业化均 ≥15 分）。广东省按《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）组织实施：每年 1 批、线上自评（培育平台 zjtx.miit.gov.cn）、市级审核公示后省厅公告；深圳市自行组织评价并报省厅备案。资质有效期 3 年，到期需重新评价。无中央统一资金奖补。",
    subsidy: "无中央统一资金奖补；部分省市对首次入库有奖励（以属地政策为准）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规（39 号文申报条件，须同时满足）",
        items: [
          { name: "广东省注册、独立法人、符合中小企业划型", required: true, weight: 3, description: "39 号文申报条件（一）（三）：广东省注册登记、具有独立法人资格的企业；符合《中小企业划型标准规定》（工信部联企业〔2011〕300 号）", basis: { name: "粤工信融资函〔2026〕39 号申报条件（一）（三）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "企业营业执照扫描件" },
          { name: "未被列入经营异常名录/严重失信名单", required: true, weight: 3, description: "39 号文申报条件（二）：未被列入经营异常名录或严重失信主体名单；以国家企业信用信息公示系统、信用中国为准", basis: { name: "粤工信融资函〔2026〕39 号申报条件（二）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "国家企业信用信息公示系统（gsxt.gov.cn）查询结果 + 「信用中国」（creditchina.gov.cn）报告" },
          { name: "近三年无较大安全事故、重大网络安全事件、重大环境违法、严重质量问题", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "39 号文申报条件（二）：近三年未发生较大生产安全事故、重大网络和数据安全事件、重大环境违法行为、严重质量问题、严重违反相关行业管理规定", basis: { name: "粤工信融资函〔2026〕39 号申报条件（二）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "「信用中国」报告 + 国家企业信用信息公示系统查询结果 + 事故情况自检说明" },
          { name: "产品不属于国家禁止、限制或淘汰类", required: true, weight: 2, description: "39 号文申报条件（二）：提供的产品（服务）不属于国家禁止、限制或淘汰类", basis: { name: "粤工信融资函〔2026〕39 号申报条件（二）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "主导产品（服务）情况说明" }
        ]
      },
      {
        // 二选一路径结构（paths）：直通条件 或 评分路径，满足其一即过
        // 依据：工信部企业〔2022〕63 号附件 1《创新型中小企业评价标准》+ 粤工信规字〔2024〕5 号 + 39 号文附件 5/6
        // 2026 年 2 号文第三十条：科技和创新型合并新标准发布前，沿用本评价标准
        category: "评价路径（二选一：直通条件 或 评分 ≥60 分）",
        anyOf: true,
        paths: [
          {
            name: "直通条件（满足 4 项中任意 1 项）",
            anyOf: true,
            autoMatch: "direct",
            items: [
              { name: "近三年内获得国家级或省级科技奖励", required: true, weight: 5, description: "63 号文附件 1 直通条件（一）：以获奖证书落款时间为准（近三年内），获奖证书需体现企业名称（39 号文附件 5）", basis: { name: "63 号文附件 1 · 39 号文附件 5", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "国家级或省级科技奖励获奖证书（2023 年以来，体现企业名称）" },
              { name: "高企/国家级技术创新示范企业/知识产权优势(示范)企业等荣誉（有效期内）", required: true, weight: 5, description: "63 号文附件 1 直通条件（二）：高新技术企业、国家级技术创新示范企业、知识产权优势企业和知识产权示范企业等，均须处于有效期内", basis: { name: "63 号文附件 1 · 39 号文附件 5", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "有效期内的高新技术企业/国家级技术创新示范企业/知识产权优势（示范）企业证书" },
              { name: "拥有经认定的省部级以上研发机构", required: true, weight: 5, description: "63 号文附件 1 直通条件（三）：如重点实验室、工程技术研究中心、企业技术中心等，以认定文件为准", basis: { name: "63 号文附件 1 · 39 号文附件 5", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "省部级以上研发机构认定文件" },
              { name: "近三年新增股权融资（合格机构投资者实缴）≥500 万元", required: true, weight: 5, description: "63 号文附件 1 直通条件（四）：2023-2025 年新增股权融资总额 500 万元以上，合格机构投资者的实缴出资额，需验资/审计佐证", basis: { name: "63 号文附件 1 · 39 号文附件 5", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" }, evidence: "合格机构投资者备案材料 + 投（融）资协议 + 银行到账凭证 + 出让股权不超过 30% 证明材料" }
            ]
          },
          {
            name: "评分路径（综合评价 ≥60 分，且创新能力 ≥20、成长性及专业化均 ≥15）",
            scoreBased: true,
            minScore: 60,
            minParts: { "创新能力": 20, "成长性": 15, "专业化": 15 },
            items: [
              { name: "① 有效知识产权数量（与主导产品相关）", part: "创新能力", scoreOptions: [
                  { label: "A Ⅰ类高价值 ≥1 项", score: 20 }, { label: "B 自主研发Ⅰ类 ≥1 项", score: 15 },
                  { label: "C Ⅰ类 ≥1 项", score: 10 }, { label: "D Ⅱ类 ≥1 项", score: 5 }, { label: "E 无", score: 0 }],
                description: "Ⅰ类=发明(含国防专利)/植物新品种/国家级农作物品种/国家新药/国家一级中药保护品种/集成电路布图设计专有权；转让未满 1 年不计入；Ⅰ类高价值=海外同族专利(G20 成员、新加坡、欧专局经实质审查授权)或维持超 10 年或高额质押融资或获国家科技奖/中国专利奖；Ⅱ类=软著(不含商标)、授权后维持超 2 年的实用新型/外观", basis: { name: "63 号文附件 1 评价指标（创新能力）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "知识产权证书（不含转让未满 1 年；Ⅰ类高价值按 39 号文附件 2 说明提供证明材料）" },
              { name: "② 上年度研发费用占营收比重", part: "创新能力", scoreOptions: [
                  { label: "A ≥5%", score: 20 }, { label: "B 3%-5%", score: 15 }, { label: "C 2%-3%", score: 10 },
                  { label: "D 1%-2%", score: 5 }, { label: "E <1%", score: 0 }],
                description: "边界值按高分档计分（如恰好 3% 按 B 档 15 分；「以上/以下」含本数）", basis: { name: "63 号文附件 1 评价指标（创新能力）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "2025 年审计报告（财政部注册会计师统一监管平台备案，研发费用口径）" },
              { name: "③ 上年度主营业务收入增长率", part: "成长性", scoreOptions: [
                  { label: "A ≥15%", score: 20 }, { label: "B 10%-15%", score: 15 }, { label: "C 5%-10%", score: 10 },
                  { label: "D 0%-5%", score: 5 }, { label: "E <0%", score: 0 }],
                description: "=（上年主营收入−上上年主营收入）÷上上年主营收入×100%；边界值按高分档计分", basis: { name: "63 号文附件 1 评价指标（成长性）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "2024、2025 年审计报告（主营业务收入数据）" },
              { name: "④ 上年度资产负债率", part: "成长性", scoreOptions: [
                  { label: "A ≤55%", score: 10 }, { label: "B 55%-75%", score: 5 }, { label: "C >75%", score: 0 }],
                description: "边界值按高分档计分（恰好 55% 按 A 档 10 分）", basis: { name: "63 号文附件 1 评价指标（成长性）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "2025 年审计报告（资产负债数据）" },
              { name: "⑤ 主导产品所属领域", part: "专业化", scoreOptions: [
                  { label: "A 属《战略性新兴产业分类》", score: 10 }, { label: "B 其他领域", score: 5 }],
                description: "以《战略性新兴产业分类》目录为准", basis: { name: "63 号文附件 1 评价指标（专业化）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "主导产品所属领域情况说明（500 字以内；属战略性新兴产业的对照《战略性新兴产业分类》说明）" },
              { name: "⑥ 上年度主营收入占总营收比重", part: "专业化", scoreOptions: [
                  { label: "A ≥70%", score: 20 }, { label: "B 60%-70%", score: 15 }, { label: "C 55%-60%", score: 10 },
                  { label: "D 50%-55%", score: 5 }, { label: "E <50%", score: 0 }],
                description: "边界值按高分档计分；主导产品=核心技术发挥重要作用且产品收入合计占营收 >50%", basis: { name: "63 号文附件 1 评价指标（专业化）", url: "http://www.fugou.gov.cn/sitesources/fgx/upload/e993ee5bb9db00399e2d13cc4193f965/1700817874037.pdf" }, evidence: "审计报告（须体现主营业务收入；未体现的需会计师事务所出具主营业务收入专项说明）" }
            ]
          }
        ]
      },
      {
        // 已入库企业复核/维护自检（粤工信规字〔2024〕5 号 13-15 条）；初次申报企业可跳过
        category: "资质维护（已入库/复核适用）",
        items: [
          { name: "资质在 3 年有效期内（到期前重新评价/复核，复核通过再延 3 年）", required: false, weight: 1, description: "创新型中小企业有效期 3 年（粤工信规字〔2024〕5 号第十三条）；复核期间原名单继续有效", basis: { name: "粤工信规字〔2024〕5 号第十三条", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }, evidence: "培育平台名单有效期信息（zjtx.miit.gov.cn 查询）" },
          { name: "每年 4 月 30 日前已在培育平台更新企业信息", required: false, weight: 1, description: "未及时更新的取消复核资格（第十四条）", basis: { name: "粤工信规字〔2024〕5 号第十四条", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }, evidence: "培育平台企业信息更新记录" },
          { name: "重大变化（更名/合并/重组/跨省迁移等）3 个月内已在平台报告", required: false, weight: 1, description: "未及时报告的取消复核资格或直接取消公告/认定（第十五条）", basis: { name: "粤工信规字〔2024〕5 号第十五条", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }, evidence: "培育平台变更报告记录" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 39 号文附件 5/6 官方佐证材料清单；以 PDF 压缩包上传培育平台）
    materials: [
      { name: "《创新型中小企业自评表》扫描件（平台填写后下载打印：封面企业名称处加盖公章，真实性声明处法定代表人签字并加盖公章，数据与平台填报一致）", required: true, basis: { name: "粤工信融资函〔2026〕39 号附件 5/6", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4915/post_4915026.html" } },
      { name: "企业营业执照扫描件", required: true },
      { name: "2025 年 12 月企业社会保险缴费人数证明", required: true, note: "要求体现社保缴费人数；企业以合并财务报表数据申报的，需提供母公司及合并子公司的证明" },
      { name: "审计报告（直通路径：2025 年度；评分路径：2024、2025 年度）", required: true, note: "须在财政部注册会计师统一监管平台（acc.mof.gov.cn）备案；评分路径审计报告须体现主营业务收入，未体现的需提供会计师事务所出具的主营业务收入专项说明" },
      { name: "直通车证明材料（获奖证书 / 有效期内高企等证书 / 研发机构认定文件 / 股权融资证明材料，四项之一）", required: false, note: "满足直通条件时提供（39 号文附件 5）" },
      { name: "与主导产品相关的有效知识产权佐证材料", required: false, note: "评分路径提供（39 号文附件 6）：知识产权证书，均不含转让未满 1 年；Ⅰ类高价值按通知附件 2 说明提供证明材料" },
      { name: "主导产品所属领域情况说明", required: false, note: "评分路径提供（500 字以内；属战略性新兴产业的对照《战略性新兴产业分类》说明）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "申报全程线上：登录优质中小企业梯度培育平台（zjtx.miit.gov.cn）完整填写《创新型中小企业自评表》，按 39 号文附件 5/6 清单以 PDF 文件压缩包方式上传佐证材料",
      "2026 年度申报时间 2026-07-01 至 07-31（已截止），各地审核并官网公示 5 天，各地 8 月 31 日前将推荐名单报送省工信厅；下一批 2027 年度预计 6-7 月",
      "2023 年第一至第三批创新型中小企业可提出复核申请（2026 年度）；深圳市自行组织评价、结果报省厅备案",
      "申报免费，不委托任何中介机构办理"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：全部条件补 basis/evidence（39 号文申报条件 + 63 号文附件 1 + 粤 5 号文），基础合规措辞对齐 39 号文，新增 materials（39 号文附件 5/6 官方佐证材料清单）与 diagNotes", basis: "粤工信融资函〔2026〕39 号" }
    ],
    tips: "对初创企业最友好的一层：免费、门槛低。最快路径是查自己是否已具备直通条件——比如高企还在有效期内，直接满足第 ② 项。没有直通条件的，评分路径里「研发费用占比」和「Ⅰ类知识产权」分值最大，初创期就要注意留存研发费用归集台账。广东省每年 1 批（2026 年度 7 月 1 日-31 日线上申报，已截止；2027 年度预计 6-7 月），佐证材料按 39 号文附件 5/6 官方清单以 PDF 压缩包上传培育平台；深圳市由深圳市自行组织评价。入库满 3 年需重新评价。"
  },
  {
    id: "prov",
    order: 7,
    column: "zjt",
    name: "专精特新中小企业认定（广东省）",
    issuingBody: "广东省工业和信息化厅",
    level: "省级",
    deadline: "每年 1 批：2026 年度认定（复核）工作已启动（广州市 2026-07-03 遴选评审机构、要求 2026-10-30 前完成认定复核）；省级通知以省厅官网为准（2025 年为粤工信融资函〔2025〕4 号）",
    effort: "Medium",
    updated: "2026-08-15",
    source: { name: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" },
    alert: {
      level: "danger",
      text: "2026-04-01 起按《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）执行：专精特新认定条件全面更新——细分市场 ≥3 年、营收 ≥1500 万（或股权投资 ≥2000 万）、主营占比 ≥80%、资产负债率 ≤80%、Ⅰ类知识产权 ≥1 项（可豁免）、评价得分 ≥50 分（培育平台自动计算）；原 63 号文认定标准、直通条件与广东特色化 15 分已废止",
      link: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html",
      linkLabel: "查看 2 号文全文"
    },
    notice: { name: "《广东省工业和信息化厅关于组织开展 2025 年创新型中小企业评价（复核）和专精特新中小企业认定（复核）工作的通知》（粤工信融资函〔2025〕4 号）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4681/mpost_4681999.html", timeline: "每年 1 批；2026 年度省级认定通知尚未发布，以省厅官网通知为准；申报全程线上（培育平台 zjtx.miit.gov.cn）、无需纸质材料" },
    summary: "广东省专精特新梯度培育的中间层：省级认定，申报前提为已入库科技和创新型中小企业（3 年有效期内）。2026-04-01 起按工信部企业〔2026〕2 号新办法执行（原 63 号文认定标准废止）。认定条件（须同时满足）：①已获科技和创新型中小企业称号且截至上年末从事细分市场 ≥3 年；②上年度营收 ≥1500 万元（不足 1500 万但近两年新增股权投资 ≥2000 万元的除外），主营占比 ≥80%、上年末资产负债率 ≤80%；③近两年研发费用均 ≥100 万元且每年占营收比重 ≥3%；④拥有 ≥1 项与主导产品相关的Ⅰ类知识产权且实际应用产生经济效益（近三年省部级以上科技奖励排名前三或省部级以上研发机构可豁免）；⑤主导产品市场占有率较为靠前；⑥本年度专精特新发展评价得分 ≥50 分（培育平台自动计算，登录 zjtx.miit.gov.cn 查询）。认定有效期 3 年，每年 5 月 31 日前在培育平台更新企业信息。广东省培育目标：到 2027 年累计培育约 2 万家专精特新中小企业。",
    basis: [
      { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" },
      { name: "《中小企业专精特新发展评价指标体系》（工信厅企业〔2024〕75 号）", url: "http://gxj.xinxiang.gov.cn/zwgk/public/6638681/9530434.html" }
    ],
    subsidy: "无统一现金奖补；省制造业当家重点任务保障等专项资金对符合条件的专精特新企业项目予以支持；部分地市有一次性奖励，以属地政策为准",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规",
        items: [
          { name: "广东省注册、独立法人、符合中小企业划型", required: true, weight: 3, description: "符合《中小企业划型标准规定》（工信部联企业〔2011〕300 号）" , basis: { name: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }},
          { name: "合规经营", required: true, weight: 3, description: "未被列入经营异常名录或严重失信主体名单；产品（服务）不属于国家禁止、限制或淘汰类", evidence: "国家企业信用信息公示系统（gsxt.gov.cn）查询结果 + 信用中国（creditchina.gov.cn）报告" , basis: { name: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }},
          { name: "近三年无重大事故及偷漏税", required: true, weight: 2, veto: true, autoMatch: "accident", rule: v => v === "无", description: "重大及以上安全（含网络安全、数据安全）、质量、环境污染事故（偷漏税需人工核验）", evidence: "国家企业信用信息公示系统（gsxt.gov.cn）查询结果 + 信用中国（creditchina.gov.cn）报告" , basis: { name: "《广东省优质中小企业梯度培育管理实施细则》（粤工信规字〔2024〕5 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4459/mpost_4459794.html" }}
        ]
      },
      {
        category: "认定条件（须同时满足，工信部企业〔2026〕2 号）",
        items: [
          { name: "已获科技和创新型中小企业称号（3 年有效期内）", required: true, weight: 3, autoMatch: "level", rule: v => v >= 1, description: "2 号文第一层「科技和创新型中小企业」——含有效期内科技型中小企业和创新型中小企业（2 号文第三十条口径）；合并新标准未发布前，已按原标准认定的创新型中小企业在有效期内继续有效" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "截至上年末从事特定细分市场 ≥3 年", required: true, weight: 3, autoMatch: "segYears", rule: v => v === "3-5年" || v === "5-10年" || v === ">10年", description: "2 号文由原「2 年以上」提高至 3 年；以从事细分市场的实际年限计，非成立年限" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "上年度营业收入 ≥1500 万元，或近两年新增股权投资 ≥2000 万元", required: true, weight: 3, autoMatch: "revenue", rule: (v, profile) => { if (v === "2000万-5000万" || v === "5000万-1亿" || v === "1亿-4亿" || v === ">4亿") return true; if (profile.equity === "≥2000万") return true; if (v === "<500万" || profile.equity === "<2000万") return false; return undefined; }, description: "不足 1500 万但近两年新增股权投资（合格机构投资者实缴额）总额 ≥2000 万元的除外；「500万-2000万」档跨 1500 万线，选该档且无股权融资豁免时从严按未达标计", evidence: "近两年审计报告（财政部监管平台报备赋码）；股权融资达标的附银行到账凭证与合格机构投资者证明材料" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "主营业务收入占比 ≥80%", required: true, weight: 2, autoMatch: "mainRatio", rule: v => v === "≥90%" ? true : v === "80%-90%" ? true : v === "<80%" ? false : undefined, description: "上年度主营业务收入总额占营业收入总额比重，2 号文新增硬条件", evidence: "审计报告须体现主营业务收入指标" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "上年末资产负债率 ≤80%", required: true, weight: 2, autoMatch: "debt", rule: v => v === "≤55%" || v === "55%-75%" || v === "75%-80%", description: "2 号文新增硬条件", evidence: "上年末审计报告" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "近两年研发费用均 ≥100 万元且每年占营收比重 ≥3%", required: true, weight: 3, autoMatch: "rd", rule: (v, profile) => v === "<3%" ? false : (profile.rdTotal === "≥1200万" || profile.rdTotal === "100万-1200万") ? true : profile.rdTotal === "<100万" ? false : undefined, description: "两年每年均须达标（原标准仅查上年度）；金额与占比双重要求，以审计报告为准", evidence: "近两年审计报告（未体现研发费用的需另附研发专项审计报告）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "主导产品市场占有率较为靠前", required: true, weight: 2, autoMatch: "marketShare", rule: v => v === "全球前3" || v === "国内前三或≥10%" || v === "较为靠前", description: "在国内或国际细分市场占有率较为靠前，享有一定知名度、影响力；无统一量化标准，以评审认定为准，需如实说明并提供佐证", evidence: "细分市场占有率说明（界定细分市场范围、规模、本企业占有率，数据注明出处）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
          { name: "专精特新发展评价得分 ≥50 分", required: true, weight: 3, autoMatch: "eval", rule: v => v === "未查询" ? undefined : v === "≥60分" || v === "50-60分", description: "由培育平台按《中小企业专精特新发展评价指标体系》（工信厅企业〔2024〕75 号）自动计算，登录 zjtx.miit.gov.cn 查询本年度得分，无需自行测算；未查询前此项无法核验", evidence: "培育平台系统自动计算得分（仅一次填报机会），登录 zjtx.miit.gov.cn 查询结果" , basis: { name: "《中小企业专精特新发展评价指标体系》（工信厅企业〔2024〕75 号）", url: "http://gxj.xinxiang.gov.cn/zwgk/public/6638681/9530434.html" }}
        ]
      },
      {
        category: "Ⅰ类知识产权 ≥1 项（或满足豁免条件）",
        anyOf: true,
        paths: [
          {
            name: "知识产权条件（正常路径）",
            anyOf: true,
            autoMatch: "ipr",
            rule: v => v === "1-5" || v === "6-15" || v === ">15",
            items: [
              { name: "拥有 ≥1 项与主导产品相关的Ⅰ类知识产权且实际应用产生经济效益", required: true, weight: 3, description: "Ⅰ类=发明专利（含国防专利）、植物新品种、国家级农作物品种、国家新药、国家一级中药保护品种、集成电路布图设计专有权", evidence: "知识产权证书复印件（不含转让未满 1 年）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }}
            ]
          },
          {
            name: "豁免条件（满足 2 项中任意 1 项）",
            anyOf: true,
            hint: "满足以下 2 项中任意 1 项即可豁免知识产权条件",
            items: [
              { name: "近三年获得省部级以上科学技术奖励（获奖单位排名前三）", required: true, weight: 2, description: "以获奖证书落款时间为准（近三年内）", evidence: "获奖证书复印件" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }},
              { name: "拥有经认定的省部级以上研发机构", required: true, weight: 2, description: "如重点实验室、工程技术研究中心、企业技术中心等，以认定文件为准", evidence: "研发机构认定文件" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号，2026-04-01 起实施）", url: "https://gxj.gz.gov.cn/fw/gzzxqyzhfwpt/zcfw/zhzc/content/post_10654994.html" }}
            ]
          }
        ]
      },
    ],
    // zct-diag 2026-08-14：申报材料清单（依据粤工信融资函〔2025〕4 号附件 4 官方清单；2026 年度广东认定通知尚未发布，清单以 2025 年官方底稿为准，发布后回填更新）
    materials: [
      { name: "真实性声明和合规经营承诺", required: true },
      { name: "申请表（培育平台下载打印，数据与平台一致，法定代表人签字并封面加盖公章）", required: true },
      { name: "企业营业执照副本复印件", required: true },
      { name: "近两年（2023、2024 年度）审计报告", required: true, note: "须在财政部注册会计师行业统一监管平台（acc.mof.gov.cn）报备赋码；未体现研发费用的需另附研发专项审计报告；2023 年度审计未体现 2022 年度主营收入的还须补 2022 年度审计报告", basis: { name: "粤工信融资函〔2025〕4 号附件 4", url: "http://gdii.gd.gov.cn/zwgk/tzgg1011/content/mpost_4682000.html" } },
      { name: "上年度 12 月缴纳社保人数证明", required: true },
      { name: "知识产权证书复印件", required: true, note: "不含转让未满 1 年的知识产权；走豁免路径的无需本项" },
      { name: "股权融资到账凭证 + 合格机构投资者证明材料", required: false, note: "营收不足 1500 万、靠近两年新增股权投资 ≥2000 万元达标时提供（银行到账凭证）" },
      { name: "细分市场占有率说明", required: false, note: "界定细分市场范围、规模与本企业占有率，数据注明出处" },
      { name: "数字化水平测评结果", required: false, note: "培育平台数字化水平测评证书截图" },
      { name: "质量管理水平佐证", required: false, note: "省级以上质量奖 / ISO9001 等体系认证 / 自主品牌注册证 / 参与制修订标准" },
      { name: "研发机构佐证", required: false, note: "省部级以上研发机构认定文件（不含牌匾照片）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息不是企业可核验的资格属性，仅作提示展示）
    diagNotes: [
      "申报全程线上：登录优质中小企业梯度培育平台（zjtx.miit.gov.cn）填报，审计报告须在财政部注册会计师行业统一监管平台（acc.mof.gov.cn）报备赋码",
      "2026 年度广东省专精特新认定通知尚未发布，以省厅官网通知为准（2025 年为粤工信融资函〔2025〕4 号）"
    ],
    tips: "广东特色：2026-04-01 起认定条件按 2 号文全面更新，申报前务必确认以新标准为准（旧「70 分 + 直通条件 + 特色化 15 分」已废止）。「专精特新发展评价得分」由培育平台按大数据自动计算，登录培育平台（zjtx.miit.gov.cn）即可查询本年度得分，无需自行测算；Ⅰ类知识产权是硬条件，但近三年省部级以上科技奖励（排名前三）或省部级以上研发机构可豁免。2026 年度广东省认定通知尚未发布，建议提前准备上一年度审计报告（须报备赋码）与研发费用归集台账。"
  },
  {
    id: "gdtech",
    order: 10,
    column: "zjzj",
    name: "广东省企业技术改造资金",
    issuingBody: "广东省工业和信息化厅 · 广东省财政厅",
    level: "省级",
    deadline: "项目库入库制、每年 1 批：2027 年度入库申报 2026 年 7 月底启动，各地市 8 月 10-15 日截止（揭阳 8.14、中山 8.11、汕尾 8.15，以属地通知为准）；收 2025-01-01 至 2025-12-31 完工项目",
    effort: "Medium",
    updated: "2026-08-14",
    // 批次日期：供匹配页申报窗口紧迫度计算；当前 2027 年度申报进行中 → 渲染紧迫提示；截止后由数据更新移除
    batches: [
      { label: "2027 年度项目库申报截止（各地市 8 月 10-15 日，以属地通知为准）", date: "2026-08-15" }
    ],
    source: { name: "《广东省工业和信息化厅 广东省财政厅关于制造业当家重点任务保障专项企业技术改造资金管理实施细则》（粤工信规字〔2024〕7 号，省政府公报）", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" },
    notice: { name: "《广东省工业和信息化厅关于组织2027年广东省制造业当家重点任务保障专项企业技术改造资金项目入选项目库的通知》（粤工信技改函〔2026〕40 号，中山市转发含附件）", url: "http://www.zs.gov.cn/gxj/wgk/glgk/content/post_2636156.html", timeline: "2026-07-22 各地市转发启动。流程：企业登录「数字工信」平台（gdii.gd.gov.cn/szgx/）线上申报 + 纸质材料按附件 2 顺序装订成册（加盖公章）报属地工信部门 → 地市 8 月中下旬组织完工评价与竞争性评审 → 地市 9 月 30 日前报省厅 → 省厅编制资金分配方案、公示后下达" },
    summary: "广东制造业当家重点任务保障专项的技改口资金：支持企业以「新技术、新工艺、新材料、新设备」四新手段开展技术改造（实施细则粤工信规字〔2024〕7 号，2025-01-01 起实施、有效期 3 年，替代原先进制造业发展专项资金（企业技术改造）粤工信规字〔2021〕5 号）。事后奖励制——项目须先完工再申报入库。5 种支持方式：设备奖励（珠三角按新设备购置额不含税 ≤20%、粤东西北 ≤30%，单项目上限 1500 万；门槛珠三角 ≥700 万、粤东西北 ≥400 万）、银行贷款贴息（利息 ≤30%、贴息期 ≤3 年、单企业单自然年最高 200 万）、保险增信补贴（保费 ≤50%、单企业每年最高 40 万）、融资租赁补贴（合同额×签约时 LPR 的 15% 一次性、单企业单自然年最高 200 万、合同额 ≥500 万）、贷款风险补偿（面向合作银行）。同一项目可挑选贴息/保险增信/融资租赁三选一，可同时申报设备奖励。2027 年度项目库收 2025-01-01 至 2025-12-31 完工且完工在备案建设期内的项目。重点支持十五五重点产业、规上工业企业、专精特新、单项冠军、链主企业等；优先支持新赛道产业生产端技改；淘汰类和落后产能项目、严重失信企业项目不支持。",
    subsidy: "事后奖励/补贴：①设备奖励——珠三角新设备购置额（不含税）≤20%、粤东粤西粤北 ≤30%，单个项目上限 1500 万；②银行贷款贴息——按已支付利息额 ≤30%，贴息期 ≤3 年，单企业单自然年最高 200 万（贷款 ≥100 万）；③保险增信补贴——按已支付保费 ≤50%，单企业每年最高 40 万；④融资租赁补贴——按合同额×签约时 LPR 的 15% 一次性，单企业单自然年最高 200 万（合同额 ≥500 万）；⑤贷款风险补偿——面向合作银行，分担 ≤本金损失 50%。入库项目不等同于最终获得资金（竞争性评审、择优支持）。",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","高技术服务","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规（实施细则第九条（一）1）",
        items: [
          { name: "广东省内注册、生产经营的工业企业", required: true, weight: 3, description: "第九条（一）1：依法登记注册且在广东省生产经营、具有独立承担民事责任能力、诚信经营、依法纳税的工业企业（含民企、国企、中央驻粤企业、港澳台投资企业、外商投资企业）", basis: { name: "细则第九条（一）1 · 2027 通知支持范围", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本" }, // 表单四种企业类型均为依法设立的企业，此条件自动通过；未选类型时归为未核验
          { name: "未被纳入严重失信主体名单或经营异常名录", required: true, weight: 3, veto: true, description: "第九条（一）1：不存在严重违法失信行为，可提供公共信用信息报告（无违法违规证明版）为重要佐证；2027 通知明确不得支持纳入「信用中国」严重失信主体名单企业的项目", basis: { name: "细则第九条（一）1 · 2027 通知不得支持情形", url: "https://www.jieyang.gov.cn/jyjxj/tzgg/qttz/content/post_1036551.html" }, evidence: "《无违法违规证明公共信用信息报告》（信用广东）+ 「信用中国」查询结果" },
          { name: "近三年无重大违法违规、未被追回财政资金", required: true, weight: 3, veto: true, description: "第三十七条：申请单位存在违法违规行为的，追回资金并将失信信息纳入社会信用记录；2027 通知不得支持淘汰类和落后产能项目", basis: { name: "细则第三十七条 · 2027 通知不得支持情形", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "违法违规情况自检说明 + 公共信用信息报告" }
        ]
      },
      {
        category: "项目条件（细则第九条（一）2-6 · 2027 年度入库要求）",
        items: [
          { name: "项目在广东省内实施、取得工信部门技改备案/核准/审批文件", required: true, weight: 3, autoMatch: "projectType", rule: v => v === "技改或设备更新" ? true : v === "不清楚" ? undefined : false, description: "第九条（一）2：符合国家和省产业政策，具备在工业和信息化主管部门备案、核准或审批等文件；2027 通知同口径；表单拟申报项目类型选「技改或设备更新」即满足，其余类型项目不属于四新技改支持范围", basis: { name: "细则第九条（一）2", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "技术改造项目备案（核准/审批）文件" },
          { name: "项目按规定纳入技术改造投资统计", required: true, weight: 2, description: "第九条（一）3：企业技术改造项目按规定纳入技术改造投资统计", basis: { name: "细则第九条（一）3", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "项目投资纳入技术改造投资统计证明（统计联网直报平台 206 表等）" },
          { name: "项目及申报奖励的设备投资未获得过省工信领域其他财政资金支持", required: true, weight: 3, description: "第九条（一）4：不得多头申报；已获省级技改资金支持但未按规定完工验收的企业不得申报（2027 通知）；项目投资未获得过超长期特别国债资金支持（40 号文附件 1）", basis: { name: "细则第九条（一）4 · 2027 通知入库要求", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "未获省工信领域财政资金支持承诺（申报承诺书）" },
          { name: "2025-01-01 至 2025-12-31 期间完工且完工日期在备案建设期内（2027 年度）", required: true, weight: 3, autoMatch: "projectStatus", rule: v => v === "已完工" ? true : v === "不清楚" ? undefined : false, description: "第九条（一）5：在规定时间内完工，且完工日期在项目备案证建设期内；2027 年度项目库要求 2025-01-01（含）至 2025-12-31（含）期间完工（粤工信技改函〔2026〕40 号）；表单拟申报项目实施状态选「已完工」即满足，完工年度是否在窗口内需人工核验", basis: { name: "细则第九条（一）5 · 粤工信技改函〔2026〕40 号入库要求", url: "https://www.jieyang.gov.cn/jyjxj/tzgg/qttz/content/post_1036551.html" }, evidence: "项目完工证明（完工日期在备案建设期内；备案证变更的不超过前备案证完工日期）" }
        ]
      },
      {
        category: "支持方式（细则第十一/十三/十六/十八条 + 40 号文附件 1，满足越多可获支持越多）",
        items: [
          { name: "设备奖励：新设备购置额（不含税）珠三角 ≥700 万、粤东西北 ≥400 万", required: false, weight: 3, autoMatch: "investAmount", rule: v => v === "1000万-2000万" || v === "2000万-1亿" || v === ">1亿" ? true : v === "<500万" ? false : undefined, description: "第九条（一）6 + 第十一条 + 40 号文附件 1：符合条件的新设备购置总额（不含税）珠三角 ≥700 万、粤东粤西粤北 ≥400 万；按 ≤20%（珠三角）/≤30%（粤东西北）奖励，单项目上限 1500 万，新赛道产业生产端技改适当提高比例；奖励比例由地市自主确定；表单投资额选「1000万-2000万」及以上即满足，500万-1000万 档珠三角是否达 700 万线需人工核验；奖励设备为备案通过日后至完工日期间购置（发票时间，最长不超过 3 年），不支持非生产用设备、二手设备、安装和服务费、工程费用", basis: { name: "细则第九条（一）6、第十一条 · 40 号文附件 1", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "项目设备购置明细表（附件 3-1）+ 设备购置发票（不含税、发票与付款从小；备案通过日后至完工日期间购置）" },
          { name: "银行贷款贴息：固定资产贷款 ≥100 万", required: false, weight: 2, description: "第十二条、第十三条：从银行获得固定资产贷款且额度 ≥100 万（含），贴息期内无不良信贷记录；事后补贴按已支付利息额 ≤30%，贴息期 ≤3 年，单企业单自然年最高 200 万；同一笔贷款只能享受一次省财政贴息；逾期利息、加息罚息、流动资金借款不予贴息", basis: { name: "细则第十二条、第十三条", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "固定资产贷款合同 + 银行利息支付凭证" },
          { name: "保险增信补贴：通过保险增信获得固定资产贷款", required: false, weight: 2, description: "第十五条、第十六条 + 40 号文附件 1：通过保险增信方式从银行获得固定资产贷款，补贴期内无不良信贷记录；事后补贴按完工日前 5 年（含完工日当年度）任一年度已支付保险费用的 ≤50%，单企业每年最高 40 万；同一笔保险增信贷款只能享受一次补贴", basis: { name: "细则第十五条、第十六条 · 40 号文附件 1", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "保险增信贷款合同 + 保单及保费支付凭证（保费明细表附件 3-2）" },
          { name: "融资租赁补贴：设备融资租赁合同额 ≥500 万", required: false, weight: 2, description: "第十七条、第十八条 + 40 号文附件 1：通过直接融资租赁购入生产及生产配套设备（不含家具电器、办公耗材、车辆、非专用电脑等日常办公设备），单项目合同额 ≥500 万；按合同额×签约时银行同期（五年期以上）LPR 的 15% 一次性补贴，补贴期 ≤3 年（不足 1 年按实际月数核算），单企业单自然年最高 200 万", basis: { name: "细则第十七条、第十八条 · 40 号文附件 1", url: "http://www.gd.gov.cn/zwgk/gongbao/2025/1/content/post_4652307.html" }, evidence: "设备融资租赁合同（附件 3-3 明细表）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 40 号文附件 1 入库要求 + 中山转发附件 2 申请材料结构）
    materials: [
      { name: "项目申报书/资金申请报告（按 40 号文附件 2 要求顺序装订成册、加盖单位公章）", required: true, basis: { name: "粤工信技改函〔2026〕40 号（中山转发附件 2）", url: "http://www.zs.gov.cn/gxj/wgk/glgk/content/post_2636156.html" } },
      { name: "技术改造项目备案（核准/审批）文件", required: true, note: "备案证发生变更的，提交变更时间不超过前备案证明确的完工日期（40 号文附件 1）" },
      { name: "项目设备购置明细表（附件 3-1）+ 设备购置发票", required: true, note: "奖励设备为备案通过日后至完工日期间购置（发票时间为准，最长不超过 3 年）；遵循发票金额与付款金额从小原则、票据不含税；不支持非生产用设备、二手设备、安装和服务费、工程费用" },
      { name: "项目完工证明（2025-01-01 至 2025-12-31 期间完工，完工日期在备案建设期内）", required: true },
      { name: "项目投资纳入技术改造投资统计证明", required: true },
      { name: "项目申报承诺书（附件 4）", required: true },
      { name: "《无违法违规证明公共信用信息报告》（信用广东）", required: true },
      { name: "财务报表或审计报告", required: true },
      { name: "保险增信：保单及保费支付凭证（附件 3-2）；融资租赁：设备融资租赁合同（附件 3-3）", required: false, note: "按申报的支持方式提供（保险增信补贴/融资租赁补贴二选一，可同时申报设备奖励）" },
      { name: "项目汇总表（附件 5，属地工信部门填写）", required: true }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "项目库入库制：未纳入项目库且未在系统录入的项目原则上不安排预算；入库项目不等同于最终获得省级财政资金支持（细则第二十二、二十五条 + 40 号文附件 1）",
      "数字工信平台（gdii.gd.gov.cn/szgx/）线上申报 + 纸质材料按附件 2 顺序装订成册（加盖公章）报属地工信部门；2027 年度各地市 8 月 10-15 日截止（中山 8.11、揭阳 8.14、汕尾 8.15，以属地通知为准），未在规定时间登录平台提交的项目不得纳入项目库（40 号文工作程序）",
      "支持方式组合规则：同一项目可选择保险增信补贴、融资租赁补贴中的一种申报，可同时申报设备奖励；同一申报主体同一年度原则上只能申报一个设备奖励项目（40 号文附件 1）",
      "设备奖励为竞争性评审：地市组织第三方机构开展完工评价、投资核算及评审入库；重点支持十五五重点产业、规上工业、专精特新、单项冠军、链主企业等，优先支持新赛道产业生产端技改（40 号文）",
      "申报免费：省、市工信部门从未委托任何机构或个人代理申报，严禁接受违规服务代理，省级企业技术改造资金不得用于支付委托代理申报的报酬（40 号文其他要求）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报要求」类 2 条流程条件（平台申报+纸质、完工评价）移出 conditions 进 diagNotes，基础合规与项目条件全部补 evidence，新增 materials（40 号文附件 1/2 材料要求）与 diagNotes，支持方式口径按 40 号文附件 1 更新", basis: "粤工信技改函〔2026〕40 号" }
    ],
    changesTitle: "2027 年度申报要点",
    changesNote: "粤工信技改函〔2026〕40 号 · 细则（粤工信规字〔2024〕7 号），逐条有官方依据",
    changes: [
      "项目库入库制：未纳入项目库的项目原则上不安排预算；入库项目不等同于最终获得资金（细则第二十二条、第二十五条）",
      "2027 年度收 2025-01-01（含）至 2025-12-31（含）期间完工项目，完工日期须在备案建设期内——先完工、后申报的事后奖励制（粤工信技改函〔2026〕40 号）",
      "支持方式：设备奖励 + 保险增信补贴 + 融资租赁补贴（2027 通知明确）；同一项目保险增信、融资租赁二选一，可同时申报设备奖励；银行贷款贴息按细则仍有效（2027 通知未单列）",
      "设备奖励门槛与标准：珠三角新设备购置额（不含税）≥700 万、粤东粤西粤北 ≥400 万；奖励 ≤20%（珠三角）/≤30%（粤东西北），单项目上限 1500 万（细则第十一条 + 40 号文附件 1）",
      "重点支持：十五五重点产业与重点行业、规上工业企业、自主品牌企业、出口引领企业、专精特新企业、制造业单项冠军、链主企业、苏区老区民族地区项目；优先支持新赛道产业生产端技改（粤工信技改函〔2026〕40 号支持范围）",
      "不得支持：淘汰类和落后产能项目、纳入信用中国严重失信主体名单企业的项目；项目投资未获得过超长期特别国债资金支持（粤工信技改函〔2026〕40 号支持范围）",
      "申报渠道：数字工信平台（gdii.gd.gov.cn/szgx/）线上 + 纸质一式五份；各地市 8 月中下旬组织完工评价与竞争性评审，9 月 30 日前报省厅（粤工信技改函〔2026〕40 号工作程序）",
      "免费申报：省、市工信部门从未委托任何机构或个人代理申报，不得支付代理报酬，谨防中介（粤工信技改函〔2026〕40 号工作程序）"
    ],
    tips: "技改资金是「事后奖励」——项目先干完、再申报拿钱：2027 年度项目库收 2025 年完工的项目，2025 年有完工技改项目的企业现在正是申报窗口（各地市 8 月 10-15 日截止，以属地通知为准）。申报前对照四件事：技改备案（核准/审批）文件、纳入技改投资统计、设备投资未拿过省工信其他资金（也未拿过超长期特别国债资金）、完工日期在备案建设期内。设备奖励是竞争性评审、地市有名额限制（珠三角每市原则上不超过 90 个设备奖励项目），「四新」改造方向、规上工业、出口引领、专精特新、新赛道生产端是加分方向，材料要突出改造成效。贷款买设备的企业看贴息/保险增信/融资租赁三种金融方式（三选一、可叠加设备奖励）：贴息按利息 30% 但单企业单年最高 200 万，融资租赁要求合同额 ≥500 万。防骗提醒：申报全程免费，省市工信部门从未委托任何机构代理，谨防「包入库」「内部渠道」收费。"
  },
  {
    id: "gdrecycle",
    order: 11,
    column: "zjzj",
    name: "绿美广东·绿色循环发展专项资金（工业固废资源化利用）",
    issuingBody: "广东省工业和信息化厅",
    level: "省级",
    deadline: "事后奖励制（先完工后申报）：2026 年度入库已结束（粤工信节能函〔2025〕34 号 2025-06-16 发布，各地市 6 月下旬-7 月上旬截止，韶关 2025-06-24）；2027 年度入库通知截至 2026-08 尚未发布，按年度节奏（省厅约 6 月中旬发文、各地市 7 月上旬截止）关注省工信厅（gdii.gd.gov.cn）及属地工信部门官网",
    effort: "Medium",
    updated: "2026-08-14",
    // 批次日期：2027 年度入库通知未发布，无确切日期 → 不渲染紧迫度（防过期误导）；通知发布后更新
    source: { name: "《广东省省级财政专项资金管理办法（修订）》（粤府〔2023〕34 号，省政府门户）", url: "https://www.gd.gov.cn/gkmlpt/content/4/4180/post_4180761.html" },
    notice: { name: "《广东省工业和信息化厅关于开展2026年绿美广东生态建设重点任务保障专项资金（绿色循环发展）项目入库的通知》（粤工信节能函〔2025〕34 号，广州市转发含申报材料要求）", url: "https://www.gz.gov.cn/xw/tzgg/content/post_10320571.html", timeline: "2025-06-16 省厅发布。流程：企业登录「数字工信」平台（gdii.gd.gov.cn/szgx/ywtb-gzc/cms/index）线上申报 + 纸质材料报属地工信部门（各地市 6 月下旬-7 月上旬截止，韶关 2025-06-24、中山 6-23、广州 6-26、江门 7-01）→ 地市形式审查、评审论证、现场审查、集体审议 → 公示入库 → 省厅切块分配、下达计划（2026 年度计划 2026-02 下达，中山 2026-03-26 资助 4 家合计 23 万）" },
    summary: "广东省绿美广东生态建设重点任务保障专项资金（绿色循环发展），省工信厅经管，依据粤府〔2023〕34 号《广东省省级财政专项资金管理办法（修订）》。事后奖励制——项目须先完工再申报入库。每年入库分 2 个方向：①工业固体废物资源化利用项目（一般工业固废资源化利用、新能源汽车废旧动力电池再生利用、工业窑炉/水泥窑协同处置固废（含生活垃圾、垃圾焚烧飞灰）、绿色园区/绿色工厂固废减量化）；②粤港清洁生产伙伴项目（获 2024 年度「粤港清洁生产伙伴」标志的在粤港资企业一次性奖励）。2026 年度（粤工信节能函〔2025〕34 号）收 2024-07-01（含）至 2025-06-30（含）完工项目。奖励按设备投资额珠三角 ≤20%、粤东粤西粤北 ≤30%，下限 60 万、上限 1000 万。2025 年度全省地市合计安排 7600 万（工业固废 13 个项目 7039 万 + 清洁生产 111 家企业 561 万，粤工信节能函〔2025〕3 号）。能力门槛为硬指标（一般工业固废 ≥10 万吨/年等）。",
    subsidy: "事后奖励：①工业固废资源化利用项目——按项目设备投资额（不含非生产性交通运输车辆购置）珠三角 ≤20%、粤东粤西粤北 ≤30%，下限不低于 60 万、上限不超过 1000 万（2026 年度入库申报指南，2025 年度通知同口径）；②粤港清洁生产伙伴项目——获 2024 年度「优越伙伴（制造业）」标志 8 万/个、「伙伴（制造业）」标志 5 万/个，一次性奖励，已获过的不再支持。入库项目不等同于最终获得资金（切块分配、排序优选、谁评审谁负责）。",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","高技术服务","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规（粤工信节能函〔2025〕34 号 · 不予支持情形）",
        items: [
          { name: "广东省内登记注册并实际生产经营的工业企业", required: true, weight: 2, autoMatch: "type", rule: () => true, description: "申报主体为在省内登记注册并生产经营、具有独立民事责任能力、诚信纳税的工业企业；粤港清洁生产伙伴方向为获 2024 年度「粤港清洁生产伙伴（制造业）」标志的在粤港资企业；表单四种企业类型均为依法设立的企业，此条件自动通过，未选类型时归为未核验", basis: { name: "2026 年度入库申报指南（附件）", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "单位法人营业执照、机构代码证（复印件）" },
          { name: "项目不属于淘汰类和落后产能项目", required: true, weight: 2, veto: true, description: "不予支持情形：淘汰类和落后产能项目不得申报", basis: { name: "粤工信节能函〔2025〕34 号 · 不予支持情形", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "项目与产业政策对照自检说明" },
          { name: "非环保信用「环保不良企业」及「信用中国（广东）」受惩戒黑名单企业", required: true, weight: 2, veto: true, description: "不予支持情形：环保信用评价为「环保不良企业」及「信用中国（广东）」受惩戒黑名单企业不得申报", basis: { name: "粤工信节能函〔2025〕34 号 · 不予支持情形", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "「信用中国（广东）」查询结果 + 环保信用评价查询结果" },
          { name: "项目未通过其他渠道获得省级财政资金支持，且无省工信厅经管专项资金逾期未验收项目", required: true, weight: 2, veto: true, description: "不予支持情形：已通过其他渠道获得省级财政资金支持的项目不得申报；存在省工信厅经管专项资金项目逾期未验收情况的单位不得申报", basis: { name: "粤工信节能函〔2025〕34 号 · 不予支持情形", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "未获省级财政资金支持与无逾期未验收项目自检说明（承诺书）" }
        ]
      },
      {
        category: "项目条件（2026 年度入库申报指南）",
        items: [
          { name: "项目已完工，完工时间 2024-07-01（含）至 2025-06-30（含）", required: true, weight: 3, autoMatch: "projectStatus", rule: v => v === "已完工" ? true : v === "不清楚" ? undefined : false, description: "事后奖励制：项目须已完工，完工时间在 2024 年 7 月 1 日（含）至 2025 年 6 月 30 日（含）之间（2026 年度口径）；表单拟申报项目实施状态选「已完工」即满足，完工时间是否在窗口内需人工核验", basis: { name: "2026 年度入库申报指南 · 申报条件", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "项目完工评价报告（完工时间在 2024-07-01 至 2025-06-30 窗口内）" },
          { name: "项目属于支持范围四类之一（一般工业固废 / 动力电池再生利用 / 协同处置 / 绿色园区·绿色工厂固废减量化）", required: true, weight: 3, autoMatch: "projectType", rule: v => v === "固废资源化利用" ? true : v === "不清楚" ? undefined : false, description: "支持范围：一般工业固体废物资源化利用项目；新能源汽车废旧动力电池综合利用（再生利用）项目；工业窑炉、水泥窑等设施协同处置固体废物（含一般工业固体废物、生活垃圾、垃圾焚烧飞灰）项目；绿色园区、绿色工厂过程中实施的固体废弃物减量化项目；表单拟申报项目类型选「固废资源化利用」即满足，其余类型项目不属于本专项支持范围", basis: { name: "2026 年度入库申报指南 · 支持范围", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "项目申请报告（支持范围四类对应说明）" },
          { name: "设备投资额达门槛：珠三角 ≥600 万、粤东粤西粤北 ≥300 万", required: true, weight: 3, autoMatch: "investAmount", rule: v => v === "<500万" ? undefined : true, description: "项目设备投资额珠三角不低于 600 万（东莞指南口径）、粤东粤西粤北不低于 300 万（韶关口径），不含非生产性交通运输车辆购置，遵循发票金额与付款金额从小原则；新能源汽车废旧动力电池回收网点建设项目按固定资产投资额不低于 300 万，同一主体多个网点可合并计算；表单投资额选「500万-1000万」及以上即满足粤东西北门槛，珠三角 600 万线需人工核验（发票与付款从小认定）", basis: { name: "2026 年度入库申报指南 · 申报条件", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "项目专项审计报告（设备投资额，发票与付款从小、不含非生产性交通运输车辆）" },
          { name: "综合利用能力达硬门槛（固废 ≥10 万吨/年等）", required: true, weight: 3, description: "单个项目固体废物综合利用能力不低于：一般工业固体废物 10 万吨/年；新能源汽车废旧动力电池再生利用 1 万吨/年；生活垃圾 5 万吨/年或垃圾焚烧飞灰 3 万吨/年；绿色园区、绿色工厂的工业固体废物综合利用率达到工信部公布的绿色园区、绿色工厂相关标准要求", basis: { name: "2026 年度入库申报指南 · 申报条件", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "综合利用能力证明（处理量数据、固废台账、生产线产能文件）" },
          { name: "涉及新建、改建、扩建投资项目的符合节能审查要求", required: true, weight: 2, description: "涉及新建、改建、扩建投资项目的，应符合固定资产投资项目节能审查相关要求", basis: { name: "2026 年度入库申报指南 · 申报条件", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "节能审查文件（涉及新建、改建、扩建投资项目时）" }
        ]
      },
      {
        category: "申报要求（粤工信节能函〔2025〕34 号 · 工作程序）",
        items: [
          { name: "同一申报主体同一年度原则上只申报一个项目，不得多头申报、不得多个独立法人联合申报", required: true, weight: 2, description: "同一申报主体同一年度原则上只能申报一个项目；不得多头申报和多个独立法人单位联合申报", basis: { name: "粤工信节能函〔2025〕34 号 · 申报程序", url: "https://www.sg.gov.cn/zsyz/tzzc/sbtz/content/post_2752835.html" }, evidence: "同年度申报项目情况自检说明" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 34 号文广州转发官方清单：工业固废 9 项 + 清洁生产 3 项）
    materials: [
      { name: "项目申请报告", required: true, basis: { name: "粤工信节能函〔2025〕34 号（广州转发申报材料要求）", url: "https://www.gz.gov.cn/xw/tzgg/content/post_10320571.html" } },
      { name: "申报单位基本情况表", required: true },
      { name: "项目基本情况表", required: true },
      { name: "项目专项审计报告（设备投资额佐证）", required: true },
      { name: "上年度财务审计报告（2024 年度）", required: true },
      { name: "单位法人营业执照、机构代码证（复印件）", required: true },
      { name: "专项资金项目申请承诺书", required: true },
      { name: "绩效表", required: true },
      { name: "项目完工评价报告", required: true },
      { name: "其他相关佐证材料（设备购置发票、综合利用能力证明、节能审查文件等）", required: true },
      { name: "粤港清洁生产伙伴项目材料（基本情况表 + 营业执照 + 「粤港清洁生产伙伴」标志证书复印件）", required: false, note: "粤港清洁生产伙伴方向适用（一次性奖励）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "网上填报：数字工信平台（gdii.gd.gov.cn/szgx/ywtb-gzc/cms/index）线上申报 + 纸质材料报属地工信部门；广州使用「广州市工业和信息化发展专项资金项目管理系统」（shenbao.gxj.gz.gov.cn）——以属地通知为准（34 号文 + 广州转发）",
      "2026 年度入库已结束（2025-06-16 发布、各地市 6 月下旬-7 月上旬截止）；2027 年度入库通知截至 2026-08-14 尚未发布，按年度节奏（省厅约 6 月中旬发文）关注省工信厅及属地工信部门官网",
      "所有推荐项目均需现场审查，不得以书面摸底、建表等形式代替；按谁审批、谁负责原则，地市对项目真实性和符合性负责（34 号文审核要求）",
      "入库项目经省厅切块分配、排序优选后下达；未纳入项目库且未在系统完成录入的项目原则上不安排预算——入库 ≠ 最终获得资金（34 号文）",
      "申报免费：未委托任何机构代理申报（34 号文）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报要求」类 2 条流程条件（平台申报、现场审查）移出 conditions 进 diagNotes（保留数量限制条件），基础合规与项目条件全部补 evidence，新增 materials（34 号文广州转发官方清单）与 diagNotes", basis: "粤工信节能函〔2025〕34 号" }
    ],
    changesTitle: "2026 年度申报要点",
    changesNote: "粤工信节能函〔2025〕34 号（2026 年度入库通知，2025-06-16 发布），逐条有官方依据",
    changes: [
      "项目库入库制：未纳入项目库且未在系统完成录入的项目原则上不安排预算；入库项目不等同于最终获得省财政资金支持（粤工信节能函〔2025〕34 号）",
      "事后奖励制：2026 年度收 2024-07-01（含）至 2025-06-30（含）完工项目——先完工、后申报",
      "支持范围四类：一般工业固废资源化利用、新能源汽车废旧动力电池再生利用、工业窑炉/水泥窑协同处置固废（含生活垃圾、垃圾焚烧飞灰）、绿色园区/绿色工厂固废减量化",
      "奖励标准：按设备投资额珠三角 ≤20%、粤东粤西粤北 ≤30%，下限 60 万、上限 1000 万（2026 年度入库申报指南）",
      "能力门槛硬指标：一般工业固废 ≥10 万吨/年；动力电池再生利用 ≥1 万吨/年；生活垃圾 ≥5 万吨/年或垃圾焚烧飞灰 ≥3 万吨/年；绿色园区/绿色工厂固废综合利用率达相关标准",
      "粤港清洁生产伙伴方向：获 2024 年度「优越伙伴（制造业）」8 万/个、「伙伴（制造业）」5 万/个一次性奖励，已获过的不再支持",
      "现场审查全覆盖：所有推荐项目均需现场审查，不得以书面摸底代替（34 号文审核要求）",
      "2025 年度全省安排 7600 万：工业固废 13 个项目 7039 万 + 清洁生产 111 家企业 561 万（粤工信节能函〔2025〕3 号）"
    ],
    tips: "绿色循环专项资金是「事后奖励」——项目先干完、再申报拿钱（2026 年度收 2024-07-01 至 2025-06-30 完工项目）。四个方向对照自查：一般工业固废资源化利用、动力电池再生利用、工业窑炉/水泥窑协同处置（含生活垃圾、飞灰）、绿色园区/绿色工厂固废减量化。硬指标先看产能：一般工业固废综合利用能力 ≥10 万吨/年、动力电池再生利用 ≥1 万吨/年、生活垃圾协同处置 ≥5 万吨/年或飞灰 ≥3 万吨/年——产能不足直接出局。设备投资门槛：珠三角 ≥600 万、粤东西北 ≥300 万（发票与付款从小、不含非生产性交通运输车辆），要有专项审计报告。奖励比例珠三角 ≤20%、粤东西北 ≤30%，单项目 60 万-1000 万。提醒三点：①同一申报主体同一年度只能报一个项目，不得多头申报；②所有项目都要现场审查，材料别造假；③入库 ≠ 拿钱——切块分配、排序优选。2026 年度已截止，2027 年度通知预计 2026 年 6 月中旬发布，建议按窗口期（预计 2026-07-01 至 2027-06-30 完工）倒排项目进度。申报免费，谨防中介收费。"
  },
  {
    id: "gdadvanced",
    order: 12,
    column: "zjzj",
    name: "广东省先进制造业发展专项资金（普惠性制造业投资奖励）",
    issuingBody: "广东省工业和信息化厅 · 广东省财政厅",
    level: "省级",
    deadline: "「十四五」（2021-2025）投资奖励最后一年：2026 年度组织于 2025 年完成（粤工信技改函〔2025〕13 号，各地市 2025-06-25 前报省厅），2026-01-07 省厅下达 2026 年资金计划（粤工信技改函〔2026〕2 号）；2026 年 6-7 月各地市组织「十四五」清算申报（惠州 2026-07-24、云浮 7-30、珠海 2026-08-03 截止，以属地通知为准）。实施细则（粤工信技改函〔2022〕7 号）2022-06-18 印发、有效期 5 年，2027-06-18 到期，到期后政策延续性以省厅新文件为准",
    effort: "Medium",
    updated: "2026-08-14",
    // 批次日期：当前申报窗口为「十四五」最后一年清算（各地市 2026-07 下旬-08 上旬截止，珠海 8-3），已近结束 → 不渲染紧迫度（防过期误导）；新窗口启动时更新
    source: { name: "《广东省先进制造业发展专项资金（普惠性制造业投资奖励）管理实施细则（修订本）》（粤工信技改函〔2022〕7 号，省工信厅·省财政厅 2022-06-18 印发）", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" },
    notice: { name: "《广东省工业和信息化厅关于组织实施2026年广东省制造业当家重点任务保障专项资金普惠性制造业投资奖励的函》（粤工信技改函〔2025〕13 号，省工信厅）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4690/post_4690813.html", timeline: "2025-04-01 省厅发文组织 2026 年度奖励：各地市按工作指引评审遴选测算项目，2025-06-25 前将测算项目汇总表、绩效目标表和支持项目清单正式行文报省厅（数字工信平台 gdii.gd.gov.cn/szgx 同步报送）→ 2026-01-07 省厅下达 2026 年资金项目计划（粤工信技改函〔2026〕2 号）→ 2026 年为申报「十四五」奖励最后一年，各地市 2026 年 6-7 月组织五年投资清算申报（珠海 2026-06-26 通知、网上 2026-08-03 截止；惠州 7-24、云浮 7-30，以属地通知为准）→ 奖励资金由地市政府统筹用于制造业项目引进建设（降低用地或生产运营成本、科研投入、产业园发展、设备奖励、贷款贴息、人才奖励等）" },
    summary: "广东省先进制造业发展专项资金（普惠性制造业投资奖励）：省财政对 2021-01-01 至 2025-12-31（「十四五」）期间符合条件的制造业项目新增实际固定资产投资额，按不超过 2% 的比例核算奖励资金额度、对地级以上市政府予以事后奖励，由地市政府按规定用途统筹用于支持制造业项目引进建设（实施细则修订本粤工信技改函〔2022〕7 号第十、十二条，2022-06-18 印发、有效期 5 年）。项目分两级：测算项目（经地市政府评审、用于测算奖励额度）与支持项目（按资金使用范围评审遴选后予以支持，可从测算项目中产生）——测算项目仅用于测算，不等同于支持项目（第三条）。投资门槛：广州、珠海、佛山、惠州、东莞、中山、江门、肇庆市制造业项目立项和「十四五」期间完成总投资须 10 亿元以上；汕头、韶关、河源、梅州、汕尾、阳江、湛江、茂名、清远、潮州、揭阳、云浮市须 5 亿元以上（第十一条（二））。2026 年是申报「十四五」奖励的最后一年，各地市 6-7 月组织五年投资清算申报（清算奖励额 = 2021-2025 年累计实际固定资产投资额 × 2% − 累计已下达奖励资金）；政策实施期满后按「十四五」投资完成情况清算，未按规定完成投资的测算项目所获奖励资金予以清算收回（第十三条）。重点遴选先进制造业项目，聚焦十大战略性支柱产业集群和十大战略性新兴产业集群，优先支持专精特新企业、制造业单项冠军企业、「小巨人」、「链主」企业（粤工信技改函〔2025〕13 号）。",
    subsidy: "对地级以上市政府事后奖励（非直接补贴企业）：按 2021-01-01 至 2025-12-31 期间新增实际固定资产投资额不超过 2% 的比例核算奖励资金额度，由地市政府统筹用于制造业项目引进建设——降低用地或生产运营成本、科研投入、产业园发展、配套建设、公共服务平台、设备奖励、贷款贴息、人才奖励、用工或职业技能培训、「工改工」等（实施细则第十二条、第十四条）。2026 年清算口径：本次申请清算奖励额 = 2021-2025 年累计实际固定资产投资额 × 2% − 累计已下达奖励资金（多退少补，珠海 2026 通知）。土地资产、非生产性交通运输设备、因固定资产投资形成的税款不计入测算和奖励范围；资金不得用于已获得省级财政资金支持过的固定资产（第十四条（二））。以测算项目核算的奖励额度仅作编制预算参考，不等同于最终安排的资金额度（第十八条）；入库支持项目不等同于最终获得资金支持。",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规（实施细则第十一条 · 2026 年通知测算项目条件）",
        items: [
          { name: "广东省内注册、生产经营的工业企业", required: true, weight: 3, description: "第十一条（三）+ 珠海 2026 通知：项目单位为制造业企业，依法登记注册且在广东省生产经营、经营活动正常、财务状况良好、不存在重大经营风险", basis: { name: "细则第十一条（三）· 珠海 2026 通知测算项目条件", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本（注册地核验）" }, // 表单四种企业类型均为依法设立的企业，此条件自动通过；未选类型时归为未核验
          { name: "项目单位主营业务为制造业（国民经济行业分类制造业行业）", required: true, weight: 3, description: "珠海 2026 通知测算项目条件 2：项目行业类型属国民经济行业分类（GB/T4754-2017）「制造业」行业，项目单位主营业务须为制造业；项目投资按规定纳入制造业投资统计", basis: { name: "珠海 2026 通知测算项目条件 2", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "主营业务与国民经济行业分类（GB/T4754-2017）制造业对照说明" },
          { name: "近三年无重大质量、安全、环保事故", required: true, weight: 3, veto: true, description: "第十一条（三）：项目单位近 3 年内在质量、安全、环保等方面未发生重大事故；珠海 2026 通知同口径（近 5 年来专项资金申报、管理、使用过程中无违法违规行为）", basis: { name: "细则第十一条（三）· 珠海 2026 通知测算项目条件 5", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "《无违法违规证明公共信用信息报告》 + 事故情况自检说明" },
          { name: "非失信被执行人、非环保不良企业、非「信用中国（广东）」惩戒黑名单企业", required: true, weight: 3, veto: true, description: "第十一条（三）+ 珠海 2026 通知：项目单位不属于失信被执行人；项目申报至公示期满期间不属于环保信用评价「环保不良企业」及「信用中国（广东）」失信惩戒黑名单企业", basis: { name: "细则第十一条（三）· 珠海 2026 通知测算项目条件 5", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "「信用中国（广东）」查询结果 + 环保信用评价查询结果" },
          { name: "未获得过省重大制造业项目投资奖励支持", required: true, weight: 2, veto: true, description: "第十一条（一）：测算项目未获得过省重大制造业项目投资奖励的支持", basis: { name: "细则第十一条（一）", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" }, evidence: "历史获得奖励情况自检说明（承诺书）" },
          { name: "项目及申报奖励的固定资产投资未获得过省工业和信息化领域财政资金支持", required: true, weight: 2, veto: true, description: "珠海 2026 通知测算项目条件 6：项目及申报奖励的固定资产投资未获得过省工业和信息化领域财政资金的支持；细则第十四条（二）同口径（资金不得用于已获省级财政资金支持过的固定资产）", basis: { name: "珠海 2026 通知测算项目条件 6 · 细则第十四条（二）", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "未获省工业和信息化领域财政资金支持承诺（资金申报承诺书）" }
        ]
      },
      {
        category: "项目条件（实施细则第十一条（二）· 珠海 2026 通知）",
        items: [
          { name: "项目已取得投资主管部门核准、审批和备案等立项文件", required: true, weight: 3, description: "珠海 2026 通知测算项目条件 1：项目实施地在申报地市境内，并已取得投资主管部门核准、审批和备案等立项文件", basis: { name: "珠海 2026 通知测算项目条件 1", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "项目立项文件（投资主管部门核准/审批/备案）" },
          { name: "投资门槛：珠三角核心 8 市立项和「十四五」期间完成总投资 ≥10 亿元、粤东西北 12 市 ≥5 亿元", required: true, weight: 3, description: "第十一条（二）：广州、珠海、佛山、惠州、东莞、中山、江门、肇庆市制造业项目立项和「十四五」期间完成总投资须 10 亿元以上；汕头、韶关、河源、梅州、汕尾、阳江、湛江、茂名、清远、潮州、揭阳、云浮市须 5 亿元以上；项目建设地发生变更的，按项目最终实际建设地申报条件和标准执行", basis: { name: "细则第十一条（二）", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" }, evidence: "专项审计报告（2021-2025 年总投资和固定资产投资）+ 统计联网直报平台 206 表" },
          { name: "项目不存在多头或重复申报", required: true, weight: 2, description: "珠海 2026 通知测算项目条件 5：项目不存在多头或重复申报的情形；项目应符合国家和省相关发展建设规划、产业政策、市场准入标准及环保、节能、安全、土地等有关政策法规要求", basis: { name: "珠海 2026 通知测算项目条件 5", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "多头/重复申报自检说明（承诺书）" }
        ]
      },
      {
        category: "奖励口径（实施细则第十、十二、十四条 · 2026 年清算口径）",
        items: [
          { name: "奖励核算：按 2021-01-01 至 2025-12-31 新增实际固定资产投资额 ≤2%", required: false, weight: 3, description: "第十条、第十二条：对 2021-01-01 至 2025-12-31 期间符合条件的制造业项目新增实际固定资产投资额，省财政按不超过 2% 的比例核算奖励资金额度、对地级以上市政府事后奖励；2026 年清算口径——本次申请清算奖励额 = 2021-2025 年累计实际固定资产投资额 × 2% − 累计已下达奖励资金（多退少补，珠海 2026 通知）", basis: { name: "细则第十条、第十二条 · 珠海 2026 通知支持方式及标准", url: "https://gdii.gd.gov.cn/gkmlpt/content/3/3953/mmpost_3953652.html" }, evidence: "专项审计报告（2021-2025 年新增实际固定资产投资额分年度数据）" },
          { name: "投资额口径：土地资产、非生产性交通运输设备、固定资产形成税款不计入", required: false, weight: 1, description: "珠海 2026 通知：土地资产和非生产性交通运输设备不计入测算和奖励范围，因固定资产投资形成的税款不计入；申请奖励的固定资产投资额以发票等合法票据时间为准、票据不含税，遵循发票金额与付款金额从小原则，发票开票时间、进口设备海关进口报关单时间须在 2021-01-01 至 2025-12-31 期间", basis: { name: "珠海 2026 通知 · 投资额口径", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" }, evidence: "固定资产投资发票与付款凭证（从小原则、不含税、2021-2025 期间）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据珠海 2026 通知申报材料要求）
    materials: [
      { name: "测算项目基本情况表", required: true, basis: { name: "珠海 2026 通知申报材料", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3919/post_3919196.html" } },
      { name: "资金申报承诺书", required: true },
      { name: "项目立项文件（投资主管部门核准/审批/备案）", required: true },
      { name: "专项审计报告（2021-2025 年总投资和固定资产投资佐证）", required: true },
      { name: "统计联网直报平台 206 表", required: true },
      { name: "《无违法违规证明公共信用信息报告》", required: true },
      { name: "绩效目标表（地市填报）", required: true },
      { name: "纸质版一式两份 + 光盘一式两份", required: true, note: "珠海 2026 通知报送要求；各地市以属地通知为准" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "奖励对象是地级以上市政府（非直接补贴企业）：省财政按 ≤2% 核算奖励额度对市政府事后奖励、市政府统筹用于制造业项目引进建设——企业通过属地工信部门申报项目支持",
      "2026 年为「十四五」最后一年：各地市 6-7 月组织五年投资清算申报（珠海 8-03 截止——网上 2026-08-03 前、纸质 8-03 18:00 前；惠州 7-24、云浮 7-30，以属地通知为准）",
      "数字工信平台（gdii.gd.gov.cn/szgx/）线上申报 + 纸质版一式两份、光盘一式两份报属地工信部门（珠海 2026 通知）",
      "测算项目 ≠ 支持项目 ≠ 最终获得资金：测算项目仅用于测算奖励额度；支持项目经地市政府评审遴选后入库；未纳入项目库的项目原则上不安排预算（细则第三、十五、十八条）",
      "五年投资清算：实际总投资未达门槛（珠三角核心 8 市 10 亿元/粤东西北 12 市 5 亿元）的，收回以该项目为依据获得的全部奖励资金（细则第十三条）",
      "申报免费：各级工信部门从未委托任何机构代理申报，奖励资金不得用于支付委托第三方代理申报的报酬（珠海 2026 通知）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报要求」类 3 条流程条件（平台申报+纸质、专家评审、五年清算）移出 conditions 进 diagNotes，基础合规与项目条件全部补 evidence，新增 materials（珠海 2026 通知申报材料要求）与 diagNotes", basis: "珠海 2026 通知 · 细则第三、十三、十五、十八条" }
    ],
    changesTitle: "2026 年度（「十四五」最后一年）申报要点",
    changesNote: "粤工信技改函〔2025〕13 号 · 实施细则修订本（粤工信技改函〔2022〕7 号）· 珠海 2026 年清算申报通知，逐条有官方依据",
    changes: [
      "「十四五」最后一年：2026 年是申报省普惠性制造业投资奖励的最后一年，各地市 2026 年 6-7 月组织五年投资清算申报（惠州 2026-07-24、云浮 7-30、珠海 8-03 截止——珠海网上申报 2026-08-03 前、纸质版 8-03 18:00 前，以属地通知为准）（珠海 2026 通知）",
      "清算口径：本次申请清算奖励额 = 2021-2025 年累计实际固定资产投资额 × 2% − 累计已下达奖励资金（多退少补）；实际总投资未达门槛（珠三角核心 8 市 10 亿元/粤东西北 12 市 5 亿元）的，收回以该项目为依据获得的全部奖励资金（实施细则第十一条（二）、第十三条 · 珠海 2026 通知）",
      "奖励对象是地级以上市政府：省财政对市政府事后奖励（≤2%）、由市政府统筹用于制造业项目引进建设——降低用地或生产运营成本、科研投入、产业园发展、配套建设、公共服务平台、设备奖励、贷款贴息、人才奖励、用工或职业技能培训、「工改工」等（实施细则第十、十二条）",
      "测算项目 ≠ 支持项目 ≠ 最终获得资金：测算项目仅用于测算奖励额度；支持项目按资金使用范围经地市政府评审遴选后入库；未纳入项目库的项目原则上不安排预算（实施细则第三条、第十五条、第十八条）",
      "重点遴选方向：先进制造业项目，聚焦十大战略性支柱产业集群和十大战略性新兴产业集群；优先支持专精特新企业、制造业单项冠军企业、「小巨人」、「链主」企业（粤工信技改函〔2025〕13 号）",
      "投资额口径从严：发票金额与付款金额从小原则、票据不含税，发票开票时间/进口设备报关单时间须在 2021-01-01 至 2025-12-31 期间；土地资产、非生产性交通运输设备、固定资产形成税款不计入（珠海 2026 通知）",
      "申报材料：测算项目基本情况表、资金申报承诺书、立项文件、专项审计报告（2021-2025 年总投资和固定资产投资佐证）、统计联网直报平台 206 表、无违法违规证明公共信用信息报告等（珠海 2026 通知）",
      "免费申报：各级工信部门从未委托任何机构或个人代理申报，严禁收取任何费用；奖励资金不得用于支付委托第三方代理申报的报酬（珠海 2026 通知）",
      "政策时效：实施细则（粤工信技改函〔2022〕7 号）2022-06-18 印发、有效期 5 年（2027-06-18 到期），到期后是否延续以省厅新文件为准"
    ],
    tips: "普惠性制造业投资奖励是广东「制造业当家」的大项目奖补：针对 2021-2025 年（「十四五」）投资建设的制造业项目，省财政按新增实际固定资产投资额 ≤2% 核算奖励、对地级以上市政府事后奖励，市政府再统筹用于企业项目（用地成本、科研投入、设备奖励、贷款贴息、人才奖励等）——不是直接打给企业的现金，而是通过市政府申报项目支持。门槛高：珠三角核心 8 市（广州、珠海、佛山、惠州、东莞、中山、江门、肇庆）立项和「十四五」完成总投资 ≥10 亿元、粤东西北 12 市 ≥5 亿元。2026 年是申报「十四五」奖励的最后一年，同时开展五年投资清算：未达到投资门槛的，已获得的奖励资金会被收回。流程：企业报属地工信部门 → 市里组织专家评审和现场核查 → 选为测算项目（用于测算奖励额度）→ 再按使用范围评审遴选为支持项目入库 → 省厅核定额度、下达资金计划。测算项目 ≠ 支持项目 ≠ 最终拿到钱。提醒三点：①发票与付款金额从小原则、票据不含税，2021-2025 年的合同发票付款凭证要完整留存（还要专项审计报告）；②土地、非生产性交通运输设备、税款不计入投资额；③申报全程免费，省市区工信部门从未委托任何机构代理，谨防「包入库」「内部渠道」收费。"
  },
  {
    id: "gdjszx",
    order: 18,
    column: "gjpt",
    name: "广东省企业技术中心",
    issuingBody: "广东省工业和信息化厅",
    level: "省级",
    deadline: "每年 1 批（6 号文第六条：省工信厅原则上每年组织一次认定并发布认定工作通知）。2025 年第 24 批已结束（2025-03-31 至 06-30 网上申报）；2026 年度（第 25 批）通知截至 2026-08-03 尚未发布（省工信厅已开展 2026-2027 年度认定职能转移，拟仍由赛宝认证承接），以省工信厅（gdii.gd.gov.cn）当年通知为准",
    effort: "Medium",
    updated: "2026-08-14",
    // 无 batches：2025 年第 24 批已截止、2026 年度通知未发布，无未截止批次 → 不渲染紧迫度（防过期误导）；通知发布后更新
    source: { name: "《广东省工业和信息化厅关于印发省级企业技术中心管理办法的通知》（粤工信规字〔2022〕6 号，2022-12-22 印发，2023-01-01 施行、有效期 5 年，废止 2021 年 4 号文；陆河县人民政府官网转发全文及附件）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" },
    notice: { name: "《广东省工业和信息化厅关于开展2025年省级企业技术中心（第24批）认定的通知》（便函〔2025〕562 号，2025-03-13 成文、03-17 发布，省工信厅官网）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4681/mpost_4681782.html", timeline: "认定依据 6 号文（粤工信规字〔2022〕6 号）。流程：网上申报（数字工信平台 gdii.gd.gov.cn/szgx/ywtb-gzc/cms/index，2025 年第 24 批 3 月 31 日零时开放、6 月 30 日 24 时前提交至地市审核，逾期不受理）→ 纸质材料（地市初审通过后从系统导出带水印最终版，盖章后按地市规定日期报送）→ 地市初审（7 月 8 日 18 时前完成）→ 推荐上报（7 月 10 日前报省工信厅制造业创新处 + 抄送赛宝认证）→ 认定审核（省厅委托省级企业技术中心认定职能转移承接单位——广州赛宝认证中心服务有限公司，采取书面评审、现场核查、陈述答辩等）→ 公示 → 发布认定名单。2025 年 11 月 26 日公布第 24 批认定名单" },
    summary: "广东省省级企业创新平台资质：省工信厅认定，依据《广东省工业和信息化厅关于省级企业技术中心管理办法》（粤工信规字〔2022〕6 号，2023-01-01 施行、有效期 5 年），认定范围为广东省境内（不含深圳市）。认定基本条件（第七条，须同时满足）：①在广东省境内（不含深圳市）依法注册、独立承担民事责任，已建立企业技术中心并正常运作一年以上；②技术中心组织体系健全、与高校或科研院所建立稳定合作渠道、拥有自主知识产权的核心技术和品牌、技术标准体系完善；③年主营业务收入 ≥1 亿元；④研发投入三选一——年营收 ≥10 亿元的年度研发经费支出额 ≥3000 万元、年营收 <10 亿元的研发经费占营收比重 ≥3% 且 ≥800 万元、建筑业企业比重 ≥0.5% 且 ≥800 万元；⑤专职研发人员 ≥50 人（建筑业 ≥60 人）；⑥技术开发仪器设备原值及研发用软件购置费 ≥800 万元（建筑业 ≥1000 万元）；⑦两年内（申请截止日起向前推算两年）无严重违法失信行为、无因技术或管理原因发生的重大质量/生产安全/环境安全事故。认定程序（第九条）：企业申请 → 地市初审 → 认定审核（省厅委托赛宝认证书面评审/现场核查/陈述答辩，建筑业企业由省住建厅出具意见）→ 公示 → 发布认定名单；原则上每年组织一次（第六条）。获评后管理：原则上每两年运行评价一次（第十条），评价不合格、逾期未报送材料、提供虚假材料、严重违法失信、发生重大安全事故等将被撤销资格（第十六条），因虚假材料/违法失信/安全事故被撤销的三年内不得再次申请（第十七条）。已评为国家企业技术中心的企业可不参与省级评价（第十条）。",
    subsidy: "无省级统一现金奖补。政策价值（6 号文第十三、十四条）：①鼓励开展创新能力项目建设；②纳入人才激励、融资贷款等政策扶持范围；③支持牵头或参与组建制造业创新中心、主导或参与制订国际/国家/地方/行业/团体标准；④支持申报国家企业技术中心、技术创新示范企业、产业技术基础公共服务平台、专精特新中小企业、制造业单项冠军等。部分地市对首次获评有一次性奖励，以属地现行政策为准",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","建材","电力","钢铁","有色","石化","机械","消费品","高技术服务"],
    conditions: [
      {
        category: "基本条件（6 号文第七条，须同时满足）",
        items: [
          { name: "广东省境内（不含深圳市）依法注册、独立承担民事责任", required: true, weight: 3, description: "第七条（一）：在广东省境内（不含深圳市）依法注册，具有独立承担民事责任的能力；第二条认定范围为广东省境内（不含深圳市）——深圳市企业不在本政策认定范围，需人工确认注册地", basis: { name: "6 号文第二条、第七条（一）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "企业营业执照副本（注册地核验）" },
          { name: "已建立企业技术中心并正常运作一年以上", required: true, weight: 2, description: "第七条（一）：已建立企业技术中心并正常运作一年以上；以技术中心成立文件、组织架构及运行记录核实", basis: { name: "6 号文第七条（一）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "企业技术中心成立相关证明文件 + 组织架构与运行记录" },
          { name: "年主营业务收入 ≥1 亿元", required: true, weight: 3, autoMatch: "revenue", rule: v => v === "1亿-4亿" || v === ">4亿" ? true : v === "2000万-5000万" || v === "5000万-1亿" || v === "<500万" || v === "500万-2000万" ? false : undefined, description: "第七条（三）：企业年主营业务收入不低于 1 亿元；「5000万-1亿」档低于 1 亿门槛明确不满足；「<500万」「500万-2000万」「2000万-5000万」同理不满足", basis: { name: "6 号文第七条（三）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "报告年度财务审计报告（主营业务收入数据）" },
          { name: "研发投入达标：营收 ≥10 亿 → 年度研发经费 ≥3000 万；营收 <10 亿 → 研发经费占营收比重 ≥3% 且 ≥800 万（建筑业 ≥0.5% 且 ≥800 万）", required: true, weight: 3, autoMatch: "rd", rule: v => v === "3%-5%" || v === "5%-8%" || v === ">8%" ? true : v === "<3%" ? false : undefined, description: "第七条（四）：①年营收 10 亿元及以上 → 年度研究与试验发展经费支出额 ≥3000 万元；②年营收 10 亿元以下 → 研发经费占营收比重 ≥3% 且 ≥800 万元；③建筑业企业比重 ≥0.5% 且 ≥800 万元。表单研发占比档 ≥3% 判达标，但金额门槛（≥800 万/≥3000 万）与营收 ≥10 亿元企业的金额口径（表单无年度研发费用金额字段）、建筑业 0.5% 口径（表单行业无建筑业选项）需人工按审计报告与行业核实", basis: { name: "6 号文第七条（四）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "报告年度财务审计报告（研发经费与主营业务收入；未披露研发费用的附研发费用专项审计报告）" },
          { name: "专职研发人员 ≥50 人（建筑业企业 ≥60 人）", required: true, weight: 2, description: "第七条（五）：企业专职研究与试验发展人员数不少于 50 人（建筑业企业不少于 60 人）；表单无研发人员数字段，需人工按研究与试验发展人员统计口径核实（职工花名册、社保等佐证）", basis: { name: "6 号文第七条（五）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "专职研究与试验发展人员证明材料（社保 + 学历证明，按 562 号文附件 1 口径）" },
          { name: "技术开发仪器设备原值及研发用软件购置费 ≥800 万元（建筑业企业 ≥1000 万元）", required: true, weight: 2, description: "第七条（六）：企业技术开发仪器设备原值及研发用软件购置费不低于 800 万元（建筑业企业不低于 1000 万元）；表单无设备原值字段，需人工按资产台账核实", basis: { name: "6 号文第七条（六）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "技术开发仪器设备原值及研发用软件购置费证明材料（发票与财务账面一致，所有权属申报单位；购置 10 年以上未达折旧年限的附使用状况证明）" },
          { name: "两年内无严重违法失信行为，无因技术或管理原因发生的重大质量、生产安全、环境安全事故", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "第七条（七）：申请截止日起向前推算两年内未发生①司法、行政机关认定的严重违法、失信行为；②因企业技术或管理原因发生的重大质量、生产安全、环境安全事故。表单口径「近三年无重大事故（含经营异常/失信/重大违法违规）」覆盖两年期要求，选「无」判满足、选「有」从严判不满足", basis: { name: "6 号文第七条（七）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" }
        ]
      },
      {
        category: "组织体系与创新实力（6 号文第七条（二））",
        items: [
          { name: "技术中心组织体系健全、管理规范，与高校或科研院所建立稳定合作渠道", required: true, weight: 2, description: "第七条（二）：企业技术中心组织体系健全，管理规范，发展规划和发展目标明确，与高校或科研院所建立稳定的合作渠道；以产学研合作协议、技术中心管理制度与规划文件核实", basis: { name: "6 号文第七条（二）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "产学研合作协议 + 技术中心管理制度与发展规划文件" },
          { name: "拥有自主知识产权的核心技术和品牌", required: true, weight: 2, autoMatch: "ipr", rule: v => v === "0" ? false : undefined, description: "第七条（二）：创新成果显著，知识产权管理水平较高，拥有自主知识产权的核心技术和品牌；表单知产档「无」明确不满足，1 件及以上是否构成核心技术与品牌需人工核实", basis: { name: "6 号文第七条（二）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "有效知识产权证明材料（含发明专利清单）+ 品牌商标注册证" },
          { name: "技术标准体系完善，能将科技成果及时转化为技术标准", required: true, weight: 1, description: "第七条（二）：技术标准体系完善，能将科技成果及时转化为技术标准；以标准制定/参与文件核实", basis: { name: "6 号文第七条（二）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "近三/五年主持和参加制定的标准证明材料" }
        ]
      },
      {
        category: "运行评价与动态管理（6 号文第十、十六、十七条）",
        items: [
          { name: "获评后每两年接受运行评价（评价不合格将撤销资格）", required: false, weight: 1, description: "第十条：省工信厅原则上每两年组织一次运行评价；评价分四档——优秀（≥90 分）、良好（70-90 分）、合格（60-70 分）、不合格（<60 分或研发投入/人员/设备不达标）；第十六条（一）（二）：评价不合格、逾期未报送评价材料将撤销资格", basis: { name: "6 号文第十条、第十六条（一）（二）", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "运行评价填报材料（按评价通知要求）" },
          { name: "已评为国家企业技术中心的企业可不参与省级评价", required: false, weight: 1, description: "第十条：现有省级企业技术中心且已评为国家企业技术中心所在企业，可不参与省级评价，按国家企业技术中心运行评价要求管理并报送结果；被撤销国家企业技术中心资格的仍需参加省级评价", basis: { name: "6 号文第十条", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "国家企业技术中心认定文件（如适用）" },
          { name: "获评后按期申报变更、避免撤销情形（虚假材料/严重违法失信/重大安全事故三年内不得再申请）", required: false, weight: 1, description: "第十五条：地市每年审核省级企业技术中心所在企业更名、重组等变更情况并汇总上报；第十六条：提供虚假材料和数据、严重违法失信、重大质量/生产安全/环境安全事故等撤销资格；第十七条：因虚假材料、违法失信、安全事故被撤销的三年内不得再次申请", basis: { name: "6 号文第十五、十六、十七条", url: "http://www.luhe.gov.cn/swlhkgxj/gkmlpt/content/0/922/post_922229.html" }, evidence: "企业变更证明材料（附件 6 要求）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 562 号文附件 1 认定工作指南官方清单；系统材料 9 项 + 纸质要求）
    materials: [
      { name: "广东省省级企业技术中心认定及数据表（系统填写，制造业及其他行业参照附件 3-1、建筑业参照附件 3-2）", required: true, basis: { name: "便函〔2025〕562 号附件 1 认定工作指南", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4681/mpost_4681782.html" } },
      { name: "项目承诺书（附件 2，签字盖章后扫描 PDF）", required: true },
      { name: "广东省省级企业技术中心认定申请报告（附件 4 提纲，盖章扫描 PDF）", required: true },
      { name: "企业「三证合一」工商营业执照（PDF）", required: true },
      { name: "107-1《企业研究开发项目情况》、107-2《企业研究开发活动及相关情况》（带统计局水印；未列入国家统计局规模以上统计范围的企业参照表格格式填报）", required: true },
      { name: "报告年度企业财务审计报告（须有有效备案二维码；未披露研发费用的同步提交研发费用专项审计报告）", required: true },
      { name: "报告年度完税证明（需有税务部门公章）", required: true },
      { name: "企业技术中心成立相关证明文件", required: true },
      { name: "认定表及数据表相关指标的必要证明材料（职工总数 / 专职研发人员 / 外部专家 / 技术开发仪器设备原值及研发用软件购置费 / 有效知产 / 受理知产 / 标准 / 国家级省级研发平台 / 奖项等，逐个 PDF）", required: true, note: "职工总数提供 12 月份个税缴纳人数汇总截图（加盖公司章）或社保缴纳人数证明（社保部门公章）；专职研发人员须提供社保和学历证明" },
      { name: "纸质材料：系统导出的带水印最终版，封面及骑缝加盖公章，书脊注明申报企业名称", required: true, note: "地市初审通过后导出，一份（562 号文附件 1 纸质材料要求）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "纸质与网上申报相结合：登录「广东省数字工信平台」（gdii.gd.gov.cn/szgx/ywtb-gzc/cms/index）在线提交；2025 年第 24 批系统 3 月 31 日零时开放、6 月 30 日 24 时前提交至地市审核，逾期不予受理；地市初审通过后从系统导出带水印最终版打印盖章报送（562 号文）",
      "2026 年度（第 25 批）通知截至 2026-08-14 尚未发布：省工信厅已开展 2026-2027 年度认定职能转移（拟仍由广州赛宝认证中心服务有限公司承接），申报安排以省工信厅当年通知为准",
      "认定审核由省厅委托赛宝认证采取书面评审、现场核查、陈述答辩等相结合形式开展；建筑业企业认定结果由省住建厅出具意见（6 号文第九条（三））",
      "获评后原则上每两年运行评价一次（四档），评价不合格、逾期未报送评价材料撤销资格；因虚假材料/违法失信/重大安全事故被撤销的三年内不得再次申请（第十、十六、十七条）",
      "申报免费：省工信厅从未委托任何机构或个人代理申报，谨防「包认定」「内部渠道」收费（6 号文）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「认定程序」类 3 条流程条件移出 conditions 进 diagNotes，基本条件与组织体系全部补 evidence，新增 materials（562 号文附件 1 认定工作指南官方 9 项系统材料 + 纸质要求）与 diagNotes", basis: "便函〔2025〕562 号附件 1" }
    ],
    changesTitle: "2025 年度申报要点",
    changesNote: "粤工信规字〔2022〕6 号（管理办法）· 便函〔2025〕562 号（2025 年第 24 批认定通知），逐条有官方依据",
    changes: [
      "每年 1 批：省工信厅原则上每年组织一次认定并发布认定工作通知（6 号文第六条）；2025 年第 24 批网上申报 3 月 31 日零时开放、6 月 30 日 24 时前提交至地市审核，逾期不予受理（便函〔2025〕562 号）",
      "2026 年度（第 25 批）通知截至 2026-08-03 尚未发布：省工信厅已开展 2026-2027 年度认定职能转移（拟仍由广州赛宝认证中心服务有限公司承接），申报安排以省工信厅当年通知为准",
      "硬性指标（第七条，须同时满足）：年主营业务收入 ≥1 亿元；研发投入三选一（营收 ≥10 亿 → 年度研发经费 ≥3000 万，营收 <10 亿 → 占比 ≥3% 且 ≥800 万，建筑业 → ≥0.5% 且 ≥800 万）；专职研发人员 ≥50 人（建筑业 ≥60 人）；仪器设备原值及研发用软件购置费 ≥800 万（建筑业 ≥1000 万）；技术中心正常运作一年以上",
      "认定范围不含深圳市（6 号文第二条）——深圳市企业不在本政策认定范围",
      "申报渠道：数字工信平台（gdii.gd.gov.cn/szgx/ywtb-gzc/cms/index）线上 + 纸质材料报送属地工信部门；材料含上年度财务审计报告（须有备案二维码）、统计局 107-1/107-2 表、完税证明、技术中心成立证明等（便函〔2025〕562 号）",
      "认定审核由赛宝认证承接：书面评审、现场核查、陈述答辩等相结合（6 号文第九条（三））",
      "获评后管理：原则上每两年运行评价一次，评价不合格、逾期未报送材料等撤销资格；因虚假材料/违法失信/重大安全事故被撤销的三年内不得再次申请（第十、十六、十七条）",
      "衔接链条：获评省级企业技术中心是申报国家技术创新示范企业的前提之一（工信部联科〔2010〕540 号第六条（三）），也是培育国家企业技术中心的省级台阶",
      "免费申报：省工信厅从未委托任何机构或个人代理申报，谨防「包认定」「内部渠道」收费"
    ],
    tips: "广东省企业技术中心是「认平台不奖钱」的省级创新平台资质：无省级统一现金奖补，价值在于省级创新平台背书 + 申报国家企业技术中心、国家技术创新示范企业（申报前提之一）、专精特新、制造业单项冠军等的衔接基础。每年 1 批，硬指标五件套先自查（第六条/第七条）：①年主营业务收入 ≥1 亿元；②研发投入——营收 10 亿以下的企业研发占比 ≥3% 且金额 ≥800 万（营收 ≥10 亿的按年度研发经费 ≥3000 万）；③专职研发人员 ≥50 人；④仪器设备原值及研发用软件购置费 ≥800 万；⑤技术中心成立并运作满一年。注意三点：①认定范围不含深圳市（深圳企业走深圳自己的技术中心体系）；②建筑业企业有单独门槛（研发占比 ≥0.5% 且 ≥800 万、研发人员 ≥60 人、设备 ≥1000 万）；③申报走「数字工信平台网上 + 纸质」双通道，由地市初审推荐，超时不再受理——2025 年第 24 批是 3 月 31 日开放、6 月 30 日截止，2026 年度通知截至 2026-08-03 尚未发布，建议提前备好上年度审计报告（备案二维码）、统计 107-1/107-2 表、技术中心成立文件与研发人员花名册。获评不是一劳永逸：每两年运行评价一次，不合格撤销资格。申报全程免费，谨防中介收费。"
  },
  {
    id: "gdgczx",
    order: 19,
    column: "gjpt",
    name: "广东省工程技术研究中心",
    issuingBody: "广东省科学技术厅",
    level: "省级",
    deadline: "每年 1 批（12 号文：按省科技厅年度申报指南组织申报）。2025 年度申报已结束（2025-08-06 发布通知、2025-09-05 17:00 截止，认定结果 2026-01-27 公布 478 家）；2026 年度申报通知截至 2026-08-03 尚未发布（2025 年度按 8 月初发文、9 月初截止的节奏，预计 2026 年 8-9 月启动），以省科技厅（gdstc.gd.gov.cn）官网通知为准",
    // 无 deadlineDate（2026-08-13 移除推算值）：2026 年度通知未发布，推算值会在时间轴渲染误导性紧迫提示；往年节奏（约 8-9 月启动）见 deadline 文本，通知发布后按实际截止补录
    effort: "Medium",
    updated: "2026-08-14",
    revisions: [
      { at: "2026-08-13", note: "移除推算截止日期 2026-09-30（官方 2027 年度通知发布前窗口未定，往年节奏保留在 deadline 文本）", basis: "P1-2 数据口径修复" },
      { at: "2026-08-14", note: "zct-diag 细化：原「申报程序」类 3 条流程条件（在线申报、主管审核推荐、配合评审）移出 conditions 进 diagNotes（保留「只能申报 1 个」数量限制条件），申报条件与科研条件全部补 evidence，新增 materials（1523 号文申报程序）与 diagNotes", basis: "粤科函产字〔2025〕1523 号" }
    ],
    // 无 batches：2025 年度申报已截止、2026 年度通知未发布，无未截止批次 → 不渲染紧迫度（防过期误导）；通知发布后更新
    source: { name: "《广东省工程技术研究中心管理办法》（粤科规范字〔2022〕12号，2022-12-14 成文、2022-12-15 施行、有效期 5 年，省科技厅官网）", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" },
    notice: { name: "《广东省科学技术厅关于组织申报2025年度广东省工程技术研究中心的通知》（粤科函产字〔2025〕1523号，2025-08-04 成文、08-06 发布，省科技厅官网）", url: "https://gdstc.gd.gov.cn/gkmlpt/content/4/4755/post_4755191.html", timeline: "2025-08-04 成文、08-06 发布。流程：广东省科技业务管理阳光政务平台（pro.gdstc.gd.gov.cn）在线申报、无纸化（不接收纸质材料，申报截止 2025-09-05 17:00）→ 经单位财务、负责人审核提交至主管部门 → 各级主管部门审核择优推荐（推荐截止 2025-09-17 17:00）→ 省科技厅会同专业机构评审（形式审查 → 专家综合评审）→ 依据专家评审意见择优确定列入建设名单并公示 → 2026-01-27 印发认定 478 家名单（粤科函产字〔2026〕178 号），2025 年度认定通过的工程中心须于 2026-02-13 前登录「广东省工程技术研究中心创新服务平台」（www.gdetrc.net）注册备案，实行网络化管理" },
    summary: "广东省省级科研平台资质：省科技厅认定（管理办法粤科规范字〔2022〕12号，2022-12-15 施行、有效期 5 年，废止粤科函政字〔2013〕1513 号）。工程中心是依托具有较强科技创新能力的法人单位建设的科研实体，申报单位须为广东省注册登记的企业、高校、科研机构、医院等法人单位，主要科研场所设在广东省内（第八条），原则上已建有市（区）级及以上科研平台（第九条）。申报条件（第九条 + 1523 号通知，须同时满足）：①企业上一年度主营业务收入原则上 ≥5000 万元；②上一年度研发经费 ≥主营业务收入 3%（研发经费超 3000 万元不受该比例限制）；高校、科研机构类为近 3 年本领域研发经费总额 ≥3000 万且上年度 ≥1000 万；③建有专门研发机构，本领域自主知识产权 ≥5 项且近三年获得 ≥3 项；④研发设备原值原则上 ≥300 万元（不含生产设备）；⑤专职科研人员珠三角 ≥20 人、粤东西北 ≥10 人，本科以上学历或中级以上职称 ≥50%；⑥未因严重违法失信行为被列入联合惩戒对象名单、近三年未发生重大环保安全等责任事故及学术诚信问题。认定程序（第十条）：主管单位审核推荐 → 省科技厅会同专业机构评审 → 依据专家评审意见择优确定列入建设名单并公示。每年 1 批（2025 年度申报 2025-09-05 截止、2026-01-27 认定 478 家）。获评后网络化管理（www.gdetrc.net 注册备案、178 号第三条）、年度报告制度（每年 6 月 30 日前提交上年度报告、第十八条）、定期评估（5 年一个评估周期、第十九条）。",
    subsidy: "无省级统一现金奖补（省科技厅未设工程中心专项建设经费）。政策价值（12 号文第十七、二十条）：①鼓励各地市、县（市、区）根据区域创新发展需要出台支持政策，在资金、人才、税收、土地等方面给予支持；②动态评估优秀等级的工程中心纳入人才激励、融资贷款等政策扶持范围。部分地市对首次获评有一次性奖励或配套支持，以属地现行政策为准",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","建材","电力","钢铁","有色","石化","机械","消费品","高技术服务"],
    conditions: [
      {
        category: "申报条件（12 号文第八、九条 · 1523 号通知，须同时满足）",
        items: [
          { name: "广东省内注册登记且主要科研场所设在广东省内（企业/高校/科研机构/医院等法人单位）", required: true, weight: 3, description: "第八条：申报单位须为广东省注册登记的企业、高校、科研机构、医院等法人单位，主要科研场所设在广东省内；1523 号通知申报对象同口径。表单四种企业类型均为依法设立的企业，此条件自动通过", basis: { name: "12 号文第八条 · 1523 号申报对象", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本（注册地核验）" }, // 表单四种企业类型均为依法设立的企业，此条件自动通过；未选类型时归为未核验
          { name: "上一年度主营业务收入 ≥5000 万元", required: true, weight: 3, autoMatch: "revenue", rule: v => v === "5000万-1亿" || v === "1亿-4亿" || v === ">4亿" ? true : v === "<500万" || v === "500万-2000万" || v === "2000万-5000万" ? false : undefined, description: "第九条（一）：企业上一年度主营业收入原则上不低于 5000 万元；「2000万-5000万」档明确低于 5000 万门槛不满足", basis: { name: "12 号文第九条（一）· 1523 号单位规模", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "上一年度审计报告（主营业务收入数据）" },
          { name: "上一年度研发经费 ≥主营业务收入 3%（研发经费超 3000 万元不受比例限制）", required: true, weight: 3, autoMatch: "rd", rule: v => v === "3%-5%" || v === "5%-8%" || v === ">8%" ? true : v === "<3%" ? false : undefined, description: "第九条（一）：企业上一年度研发经费不低于主营业务收入的 3%，研发经费超过 3000 万元的，不受该比例限制；表单研发占比档 ≥3% 判达标，研发经费 >3000 万豁免比例的金额口径表单无字段，需人工按审计报告核实", basis: { name: "12 号文第九条（一）· 1523 号单位规模", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "上一年度审计报告（研发经费与主营业务收入数据）" },
          { name: "建有专门研发机构，本领域自主知识产权 ≥5 项且近三年获得 ≥3 项", required: true, weight: 3, autoMatch: "ipr", rule: v => v === "0" ? false : undefined, description: "第九条（二）：建有专门研发机构，研究方向和技术领域明确，本领域自主知识产权不少于 5 项；1523 号（三）科研成果口径：拥有 5 项（含）以上自主知识产权，且近三年获得的知识产权不少于 3 项。表单知产档「无」明确不满足；1 件及以上是否达到 5 项及近三年新增 3 项需人工按证书数量与时间核实", basis: { name: "12 号文第九条（二）· 1523 号科研成果", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "自主知识产权证书清单（含授权时间，核对近三年 ≥3 项）" },
          { name: "研发设备原值 ≥300 万元（不含生产设备）", required: true, weight: 2, description: "第九条（三）：有相对集中的工程试验用房和场地，具备开展工程化研发、设计和试验的综合能力，研发设备原值原则上不低于 300 万元；1523 号（二）：用于实验、检测、分析、试验的研发设备（不含生产设备）原值不低于 300 万元。表单无设备原值字段，需人工按资产台账核实", basis: { name: "12 号文第九条（三）· 1523 号科研条件", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "研发设备台账与发票（实验、检测、分析、试验用途，不含生产设备；佐证材料需经第三方认证）" },
          { name: "专职科研人员珠三角 ≥20 人、粤东西北 ≥10 人（本科以上学历或中级以上职称 ≥50%）", required: true, weight: 2, description: "第九条（四）：工程技术队伍中的专职科研人员数，珠三角地区申报单位不少于 20 人，粤东西北地区不少于 10 人；1523 号（二）：具有本科（含）以上学历或中级（含）以上职称的人员不低于专职科研总人数的 50%。表单无人员字段，需人工按花名册、社保、学历职称佐证核实", basis: { name: "12 号文第九条（四）· 1523 号科研条件", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "专职科研人员花名册（社保/劳动合同 + 学历职称证明，比例计算表）" },
          { name: "原则上已建有市（区）级及以上科研平台", required: true, weight: 2, description: "第九条前置：申报单位原则上已建有市（区）级及以上科研平台，科研管理体制和运行机制比较完善；1523 号（四）体制机制同口径（具有完善的管理架构和运行管理机制，有健全的研发体系和人才激励、知识产权管理等制度）。以平台认定文件核实", basis: { name: "12 号文第九条 · 1523 号体制机制", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "市（区）级及以上科研平台认定文件 + 人才激励、知识产权管理制度文件" },
          { name: "未列入联合惩戒对象名单，近三年无重大环保、安全等责任事故及学术诚信问题", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "第九条（五）（六）：未因严重违法失信行为被司法、行政机关依法列入联合惩戒对象名单；近三年未发生重大环保、安全等责任事故，未出现严重学术诚信问题；1523 号（六）同口径并新增工程中心主任近三年无科研失信记录、未受过刑事处罚（需人工核验）。表单口径「近三年无重大事故（含经营异常/失信/重大违法违规）」覆盖事故与失信，选「无」判满足、选「有」从严判不满足", basis: { name: "12 号文第九条（五）（六）· 1523 号其他条件", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果 + 科研诚信自检说明" },
          { name: "企业、科研院所、医院只能申报 1 个工程中心；已建有工程中心的单位原则上不再受理申报", required: true, weight: 2, description: "1523 号申报对象（二）：企业、科研院所、医院只能申报 1 个工程中心，已建有工程中心的单位原则上不再受理申报；高校在未建有工程中心的专业类可申报 1 个。以是否已获认定核实", basis: { name: "1523 号申报对象", url: "https://gdstc.gd.gov.cn/gkmlpt/content/4/4755/post_4755191.html" }, evidence: "已获工程中心/平台认定情况自检说明" }
        ]
      },
      {
        category: "科研条件与体制机制（1523 号（二）（三）（四））",
        items: [
          { name: "具备科技成果转化能力，能开展工程化研发、设计和试验", required: true, weight: 2, description: "第九条（二）：研究方向和技术领域明确，具备科技成果转化能力；1523 号（二）：具备进行工程化研发、设计和试验的综合能力。以建设方案、转化案例、检测试验记录核实", basis: { name: "12 号文第九条（二）· 1523 号科研条件", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "建设方案 + 科技成果转化案例 + 工程化研发检测试验记录" },
          { name: "工程中心主任为全职科技人员、入职依托单位 ≥3 年，近三年无科研失信记录、未受过刑事处罚", required: true, weight: 2, description: "1523 号（二）（六）：工程中心主任入职依托单位的时间不低于 3 年；近三年未有科研失信行为记录、未受过刑事处罚；12 号文第十二条：工程中心主任应由依托单位具有较高影响力和较强组织管理能力的全职科技人员担任。以主任简历、劳动合同、社保及任职文件核实", basis: { name: "1523 号科研条件、其他条件 · 12 号文第十二条", url: "https://gdstc.gd.gov.cn/gkmlpt/content/4/4755/post_4755191.html" }, evidence: "工程中心主任简历、劳动合同、社保及任职文件" },
          { name: "高校、科研机构、医院类申报单位：近三年牵头或参与省级及以上科研项目，与企业产学研标志性成果 ≥3 项", required: false, weight: 1, description: "1523 号（三）科研成果：申报单位为高校、科研机构、医院的，近三年须牵头或参与承担过本领域省级及以上科研项目，且与企业开展产学研合作形成的标志性成果不少于 3 项。企业类申报单位不适用此条", basis: { name: "1523 号科研成果", url: "https://gdstc.gd.gov.cn/gkmlpt/content/4/4755/post_4755191.html" }, evidence: "省级及以上科研项目立项证明 + 产学研标志性成果清单" }
        ]
      },
      {
        category: "运行管理（12 号文第十八-二十一条 · 178 号第三条）",
        items: [
          { name: "获评后及时在创新服务平台（www.gdetrc.net）注册备案，变更通过平台办理", required: false, weight: 1, description: "178 号第三条：工程中心实行网络化管理，相关信息发布及过程管理依托「广东省工程技术研究中心创新服务平台」（www.gdetrc.net）实施，2025 年度认定通过的工程中心须于 2026-02-13 前登录该平台注册备案；后续依托单位更名、所属地或工程中心主任变更及资格撤销等通过服务平台办理。12 号文第十六条：重大调整、重组须报主管单位审核、省科技厅备案", basis: { name: "178 号第三条 · 12 号文第十六条", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4850/post_4850285.html" }, evidence: "创新服务平台注册备案记录" },
          { name: "每年 6 月 30 日前在服务平台提交上年度报告（年度报告制度）", required: false, weight: 1, description: "第十八条：工程中心执行年度报告制度，每年 6 月 30 日前按要求在服务平台提交上一年度报告；第二十一条（七）：未按要求提交年度报告，经提醒后 30 个自然日内仍未提交的，取消工程中心资格", basis: { name: "12 号文第十八条、第二十一条（七）", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "上年度报告提交记录" },
          { name: "配合定期评估（5 年一个评估周期；基本合格限期 1 年整改，不合格取消资格）", required: false, weight: 1, description: "第十九条：省科技厅委托专业机构定期评估，5 年为一个评估周期，每年按申报年份、分领域开展，重点评估运行情况、研发条件、科研能力、建设成效；第二十条：评估结果分优秀、合格、基本合格、不合格 4 个等级，优秀纳入人才激励、融资贷款等政策扶持范围，基本合格限期 1 年整改；第二十一条（一）-（六）：逾期未参加定期评估、评估不合格、整改不合格、严重科研诚信问题、依托单位重大变故、重大安全环保责任事故等取消工程中心资格", basis: { name: "12 号文第十九条、第二十条、第二十一条", url: "http://gdstc.gd.gov.cn/gkmlpt/content/4/4067/post_4067201.html" }, evidence: "定期评估填报材料（按评估通知要求）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 1523 号文申报程序；在线申报、无纸化，附件明细以系统内申报指引为准）
    materials: [
      { name: "申报信息（阳光政务平台按系统要求填写：单位信息、工程中心建设方案等）", required: true, basis: { name: "1523 号申报程序（二）", url: "https://gdstc.gd.gov.cn/gkmlpt/content/4/4755/post_4755191.html" } },
      { name: "分类上传的附件材料（按系统申报指引：审计报告、知识产权证书、研发设备台账、人员花名册、市（区）级平台认定文件等）", required: true, note: "2025 年度申报指引需登录阳光政务平台查看（1523 号附件），附件明细以系统内指引为准；佐证材料须经第三方认证" },
      { name: "真实性承诺函", required: true, note: "申报单位对申报材料真实性和合法性负责（1523 号有关要求（一））" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "在线申报、无纸化，不接收纸质材料：项目负责人登录广东省科技业务管理阳光政务平台（pro.gdstc.gd.gov.cn）填写申报信息、分类上传相关附件材料并提交，经单位财务管理人员、单位负责人审核提交至主管部门（1523 号申报程序）",
      "形式审查不合格的不予受理：材料不齐全、佐证材料未经第三方认证、内容前后不一致、印盖章签名不规范、扫描文档不清晰不完整、工程中心名称命名不规范等（1523 号有关要求（三））",
      "2025 年度申报已结束（2025-09-05 17:00 截止，推荐截止 09-17，认定 478 家 2026-01-27 公布）；2026 年度通知截至 2026-08-14 尚未发布（按节奏约 8-9 月启动），以省科技厅官网通知为准",
      "申报免费：省科技厅未委托任何中介机构代理申报，申报单位自主申报 + 真实性承诺函；弄虚作假一经查实取消申报资格并列入科研诚信不良信用记录（1523 号有关要求（一））",
      "获评后管理：2025 年度获评工程中心须于 2026-02-13 前在 www.gdetrc.net 注册备案；每年 6 月 30 日前提交上年度报告，5 年定期评估周期，未报年度报告或评估不合格取消资格（12 号文第十八至二十一条、178 号第三条）"
    ],
    changesTitle: "2025 年度申报要点",
    changesNote: "粤科函产字〔2025〕1523号（申报通知）· 粤科规范字〔2022〕12号（管理办法）· 粤科函产字〔2026〕178号（认定通知），逐条有官方依据",
    changes: [
      "2025 年度申报已结束：2025-08-06 发布通知、2025-09-05 17:00 截止（阳光政务平台在线申报、无纸化，不接收纸质材料），推荐审核截止 09-17；认定结果 2026-01-27 公布（粤科函产字〔2026〕178 号，478 家），获评单位须 2026-02-13 前在 www.gdetrc.net 注册备案（178 号第三条）",
      "2026 年度申报通知截至 2026-08-03 尚未发布：按年度节奏（2025 年度 8 月初发文、9 月初截止），预计 2026 年 8-9 月启动，以省科技厅官网（gdstc.gd.gov.cn）通知公告为准",
      "硬指标自查六件套（1523 号申报条件，须同时满足）：①企业上年度主营业务收入 ≥5000 万元；②上年度研发经费 ≥主营收入 3%（研发经费 >3000 万元不受比例限制；高校、科研机构类为近 3 年总额 ≥3000 万且上年度 ≥1000 万）；③本领域自主知识产权 ≥5 项且近三年获得 ≥3 项；④研发设备原值 ≥300 万元（不含生产设备）；⑤专职科研人员珠三角 ≥20 人、粤东西北 ≥10 人（本科以上学历或中级以上职称 ≥50%）；⑥原则上已建有市（区）级科研平台",
      "申报数量限制：企业、科研院所、医院只能申报 1 个工程中心；已建有工程中心的单位原则上不再受理申报（1523 号申报对象）",
      "粤东西北倾斜：鼓励粤东西北地区企业与高校院所联合共建工程中心，共建单位在申报领域的实验设备和研发人员可纳入核算；惠州博罗/惠东/龙门、江门台山/鹤山/开平/恩平、肇庆四会/广宁/怀集/封开/德庆按粤东西北地区申报条件申报（1523 号（五））",
      "工程中心主任硬要求：全职科技人员、入职依托单位 ≥3 年，近三年无科研失信记录、未受过刑事处罚（1523 号（二）（六））",
      "运行管理：获评后网络化管理（gdetrc.net 注册备案）、每年 6 月 30 日前提交上年度报告（第十八条）、定期评估 5 年一个周期（第十九条）、基本合格限期 1 年整改（第二十条）",
      "免费申报：省科技厅未委托任何中介机构代理申报，申报单位自主申报 + 提供真实性承诺函；弄虚作假一经查实取消申报资格并列入科研诚信不良信用记录（1523 号有关要求（一））"
    ],
    tips: "广东省工程技术研究中心（省工程中心）是省科技厅认定的省级科研平台资质：不直接奖钱，价值在创新平台背书——鼓励地市出台资金、人才、税收、土地配套支持（12 号文第十七条），动态评估优秀等级纳入人才激励、融资贷款等政策扶持范围（第二十条），也是企业研发实力证明和后续申报国家级平台的衔接基础。每年 1 批，先对照硬指标自查六件套（第九条 + 1523 号通知）：①营收 ≥5000 万；②研发经费 ≥主营收入 3%（超 3000 万豁免比例）；③知产 ≥5 项（近三年新增 ≥3 项）；④研发设备原值 ≥300 万（不算生产设备）；⑤专职科研人员珠三角 ≥20 人、粤东西北 ≥10 人；⑥原则上已建有市（区）级科研平台。注意四点：①企业只能申报 1 个，已建有工程中心的单位原则上不再受理——别重复报；②全程阳光政务平台（pro.gdstc.gd.gov.cn）在线申报、无纸化，不接收纸质材料；③工程中心主任要全职、入职满 3 年；④粤东西北（含惠州博罗/惠东/龙门、江门台山/鹤山/开平/恩平、肇庆四会/广宁/怀集/封开/德庆）鼓励与高校院所联合共建，共建设备和人员可合并算。2025 年度申报 9 月初截止、2026-01 公布认定 478 家；2026 年度通知截至 2026-08-03 尚未发布（按节奏约 8-9 月启动），建议现在备齐审计报告、知产证书、人员花名册与平台认定文件。获评后每年 6 月 30 日前提交年度报告、5 年一次定期评估，评估不合格或逾期未报会被取消资格。申报全程免费，省科技厅未委托任何中介代理，谨防「包认定」「内部渠道」收费。"
  },
  {
    id: "gdchampion",
    order: 24,
    column: "zjt",
    name: "广东省制造业单项冠军",
    issuingBody: "广东省工业和信息化厅",
    level: "省级",
    deadline: "原则上每年 1 批：2026 年度申报（粤工信规划政策函〔2026〕12 号）省级截止 2026-05-28 已过（各地市 5 月中下旬提前截止），2023 年认定企业须参加 2026 年复核（未提交复核材料撤销认定）；下一批（2027 年度）预计 2027 年 3-4 月启动",
    effort: "Heavy",
    updated: "2026-08-14",
    source: { name: "《广东省制造业单项冠军企业遴选管理办法》（粤工信规字〔2024〕1 号，省政府公报 2024 年 6 期）", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" },
    notice: { name: "《广东省工业和信息化厅关于组织开展 2026 年省级制造业单项冠军企业遴选认定及复核评价工作的通知》（粤工信规划政策函〔2026〕12 号）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4881/post_4881441.html", timeline: "2026-04-09 发布。流程：企业通过「数字工信」平台（gdii.gd.gov.cn/szgx/）线上填报申请书 → 各地市工信部门初审（各市提前截止：广州 5.22、珠海 5.13、深圳线上 5.6 等）→ 省级 5.28 前寄送材料 → 省厅组织第三方评审、必要时实地核查 → 官网公示 7 个工作日 → 发布遴选结果。2023 年认定的省级单项冠军企业（含示范企业和冠军产品）须参加 2026 年复核，未提交复核材料的撤销认定" },
    summary: "广东省制造业单项冠军是专精特新梯度链条在广东的省级顶层荣誉（国家级单项冠军 2025 年起暂无遴选通知，省级是目前企业现实可申报的最高层级）。认定条件（1 号文第六条，须同时满足）：①从事相关细分产品制造领域 ≥5 年（新产品 ≥3 年）；②产品市场占有率全国前 3 位或全球前 5 位；③年度研发经费占主营收入 ≥3% 或行业领先，设研发机构、拥有两项以上有效发明专利；④近三年平均主营收入 ≥4 亿元（专精特新「小巨人」企业 ≥1 亿元）；⑤近 3 年无不良信用记录、无重大安全质量环境事故，产品非禁限淘汰类。支持措施（1 号文第五章）：纳入省单项冠军企业库、纳入省级「企业直通车」服务范围、优先推荐申报国家级单项冠军（获国家称号企业给予资金奖励）、在产业空间/技改/金融/土地人才等领域重点支持。动态管理（1 号文第六章）：获评企业每年 5 月 31 日前在数字工信平台更新信息（一年未更新纳入观察名单、连续两年取消复核资格）、每 3 年组织一次复核。2026 年度申报省级 5.28 已截止；每年 1 批，2027 年度预计 2027 年 3-4 月启动。",
    subsidy: "无省级统一现金奖补；纳入省单项冠军企业库、优先推荐申报国家级（获国家称号企业给予资金奖励，1 号文第五章）；部分地市对省级单项冠军给予一次性奖励，以属地政策为准",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工"],
    conditions: [
      {
        category: "基础合规",
        items: [
          { name: "广东省注册、独立法人（制造业企业或生产性服务业企业）", required: true, weight: 3, description: "1 号文第五条：在广东省注册、具有独立法人资格，具备工业产品研发、设计和生产制造能力的制造业企业或从事生产性服务业的企业；表单无注册地维度，需人工核验注册地", basis: { name: "1 号文第五条 · 2026 通知申报基本条件 1", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "企业营业执照副本（注册地与法人信息）" },
          { name: "产品不属于国家禁止、限制或淘汰类", required: true, weight: 2, description: "主导产品合规（1 号文第六条（六））", basis: { name: "1 号文第六条（六）· 2026 通知申报基本条件 7", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "主导产品情况说明（对照国家产业政策目录）" },
          { name: "近 3 年无重大安全/质量/环境事故及偷漏税等违法违规", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "1 号文第六条（六）：近 3 年无不良信用记录，未发生重大安全、质量、环境污染等事故及重大税收违法失信、数据造假等违法违规行为（以信用广东平台信用报告等为准）", basis: { name: "1 号文第六条（六）· 2026 通知申报基本条件 7", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "信用广东平台（credit.gd.gov.cn）信用报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" }
        ]
      },
      {
        category: "认定标准（1 号文第六条）",
        items: [
          { name: "从事细分领域 ≥5 年（新产品 ≥3 年）", required: true, weight: 3, autoMatch: "segYears", rule: v => v === ">10年" || v === "5-10年" ? true : v === "3-5年" ? undefined : false, description: "1 号文第六条（一）：从事相关细分产品制造领域时间达 5 年及以上；新产品（近 3 年研发上市且无法归入《统计用产品分类目录》）应达 3 年及以上——选「3-5 年」档时若为新产品场景可能满足，需人工核实", basis: { name: "1 号文第六条（一）· 2026 通知申报基本条件 2", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "从事申请产品相关领域时间说明（起始年份与累计年限，注册时间不一致时附说明，申请书三、专业化发展情况）" },
          { name: "产品市场占有率全国前 3 位或全球前 5 位", required: true, weight: 3, autoMatch: "marketShare", rule: v => v === "全球前3" ? true : v === "国内前三或≥10%" ? undefined : v === "较为靠前" || v === "一般" ? false : undefined, description: "1 号文第六条（二）：按《统计用产品分类目录》界定，需权威佐证（行业协会/海关数据等）；选「国内前三或≥10%」档时无法区分「国内前三」（满足）与「仅≥10%」（不满足），需人工核实", basis: { name: "1 号文第六条（二）· 2026 通知申报基本条件 3", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "申请产品全球及国内市场占有率说明（1500 字内：细分市场范围界定、占有率与排名数据及出处）" },
          { name: "近三年平均主营收入 ≥4 亿元（小巨人 ≥1 亿）", required: true, weight: 3, autoMatch: "revenue", rule: v => v === ">4亿" ? true : v === "1亿-4亿" ? undefined : false, description: "1 号文第六条（五）：近三年平均主营业务收入 4 亿元以上；专精特新「小巨人」企业最低要求 1 亿元以上——选「1 亿-4 亿」档时若为小巨人可能满足，需人工核实", basis: { name: "1 号文第六条（五）· 2026 通知申报基本条件 6", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "近三年年度审计报告（主营业务收入数据）" },
          { name: "年度研发经费占主营收入 ≥3% 或行业领先", required: true, weight: 3, autoMatch: "rd", rule: v => v === "<3%" ? undefined : true, description: "1 号文第六条（三）：年度研发经费支出占主营业务收入原则上达 3% 以上或处于行业领先水平；选「<3%」档时若处于行业领先水平可能满足，需人工核实", basis: { name: "1 号文第六条（三）· 2026 通知申报基本条件 4", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "审计报告或研发专项数据（研发经费支出与主营收入口径）" },
          { name: "拥有两项以上有效发明专利", required: true, weight: 3, autoMatch: "ipr", rule: v => v === "0" ? false : v === "1-5" ? undefined : true, description: "1 号文第六条（三）：拥有两项以上有效发明专利；选「1-5」档无法区分是否 ≥2 项，需人工核实", basis: { name: "1 号文第六条（三）· 2026 通知申报基本条件 4", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "有效发明专利清单及证书" },
          { name: "设立研发机构、主导或参与制定国际/国家/行业标准", required: true, weight: 2, description: "1 号文第六条（三）：设立研发机构；主导或参与制定相关标准（申报材料需研发机构佐证 + 标准制定材料）", basis: { name: "1 号文第六条（三）· 2026 通知申报基本条件 4", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "研发机构设立文件 + 参与制定国际/国家/行业标准佐证（标准文本或参与证明）" },
          { name: "产品质量精良、关键技术参数国际先进国内领先", required: true, weight: 2, description: "1 号文第六条（四）：产品质量精良，关键技术参数处于国际先进国内领先水平（申报材料需详细说明）", basis: { name: "1 号文第六条（四）· 2026 通知申报基本条件 5", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "产品质量与关键技术参数说明（国际先进/国内领先对照）" }
        ]
      },
      {
        category: "动态管理（1 号文第六章）",
        items: [
          { name: "有效期内每年 5 月 31 日前在数字工信平台更新企业信息", required: false, weight: 1, description: "1 号文第二十三条：获评企业每年 5 月 31 日前通过数字工信平台更新信息并提交上年度发展报告；一年未更新纳入观察名单、连续两年未提交取消复核资格", basis: { name: "1 号文第二十三条", url: "http://www.gd.gov.cn/zwgk/gongbao/2024/6/content/post_4388189.html" }, evidence: "数字工信平台信息更新记录" },
          { name: "每 3 年参加复核（2023 年认定企业 2026 年须复核）", required: false, weight: 1, description: "1 号文第二十五条：每三年组织一次复核，未通过复核的企业取消称号并移出企业库；2023 年认定的省级单项冠军企业（含示范企业和冠军产品）须参加 2026 年复核（12 号文）", basis: { name: "1 号文第二十五条 · 2026 通知复核评价工作", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4881/post_4881441.html" }, evidence: "复核申请书（未提交复核材料撤销认定）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 2025 年 22 号文珠海转发：附件 3 顺序排版 PDF + 光盘；申请书附件 2）
    materials: [
      { name: "《广东省制造业单项冠军企业申请书（2025/2026 年）》（数字工信平台填报下载打印，加盖企业公章与骑缝章）", required: true, basis: { name: "粤工信规划政策函〔2025〕22 号（珠海转发）", url: "https://www.zhuhai.gov.cn/gxj/gkmlpt/content/3/3815/post_3815824.html" } },
      { name: "企业营业执照", required: true },
      { name: "近三年年度审计报告", required: true, note: "申请书财务指标栏：销售收入、净利润、资产负债率、研发经费等逐年对应" },
      { name: "市场占有率说明与佐证（全国前 3 或全球前 5）", required: true, note: "1500 字内说明 + 权威数据出处（行业协会/海关等）" },
      { name: "有效发明专利清单及证书", required: true, note: "两项以上有效发明专利" },
      { name: "研发机构设立文件与研发经费佐证", required: true },
      { name: "产品质量与关键技术参数说明", required: true },
      { name: "参与制修订国际/国家/行业标准佐证", required: false },
      { name: "品牌与荣誉证书（高企、绿色工厂、技术创新示范企业等）", required: false },
      { name: "申请汇总表（属地工信部门填写，加盖公章正式上报）", required: true, note: "各地市 8 月 8 日前报市工信局（2025 年度节奏）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "申报采取线上填报和线下报送相结合：数字工信平台（gdii.gd.gov.cn/szgx/）在线填写申请书，下载打印后确保线上线下材料一致；其他申报材料及佐证材料按通知附件 3 的顺序制成一个 PDF 文件，光盘需包含可编辑版申请书及含附件完整版 PDF；纸质材料一式两份（含公章与骑缝章申请书及附件）+ 光盘一式一份报属地工信部门",
      "2026 年度申报已截止（省级 5.28、各地市 5 月中下旬提前截止：广州 5.22、珠海 5.13、深圳线上 5.6）；下一批 2027 年度预计 2027 年 3-4 月启动，以省厅官网通知为准",
      "2023 年认定的省级单项冠军企业（含示范企业和冠军产品）须参加 2026 年复核，未提交复核申请材料的依据管理办法撤销认定",
      "有效期内省级单项冠军优先推荐申报国家级单项冠军（1 号文第五章）；已认定企业每年 5 月 31 日前在数字工信平台更新企业信息",
      "申报免费：相关政府部门、协会不得以任何形式向企业收取费用；数字工信平台向申报单位提供 1 年免费电子签章服务（22 号文）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：全部条件补 evidence（申请书栏目口径），新增 materials（22 号文申报材料要求：附件 3 顺序 PDF + 光盘 + 纸质一式两份）与 diagNotes（平台流程、复核、信息更新、免费申报）", basis: "粤工信规划政策函〔2025〕22 号 · 2026 通知（12 号文）" }
    ],
    tips: "广东省制造业单项冠军是梯度链条在广东的省级顶层荣誉——国家级单项冠军 2025 年起暂无遴选通知，省级是目前可申报的最高层级，且有效期内的省级单冠优先推荐申报国家级。核心自查：①细分领域 ≥5 年；②市占率全国前 3 或全球前 5（需要权威佐证，行业协会/海关数据，不要凭感觉）；③研发占比 ≥3%、≥2 项有效发明专利、设研发机构；④近三年平均营收 ≥4 亿（小巨人 ≥1 亿）；⑤合规。重点提示：①每年 1 批、约 3-4 月发布通知、5 月中下旬截止（2026 年度已截止、2027 年度预计 2027 年 3-4 月启动）；②申报材料按附件 3 顺序制成一个 PDF + 光盘（可编辑版申请书+完整 PDF）+ 纸质一式两份（公章+骑缝章）；③已认定企业每年 5 月 31 日前在数字工信平台更新信息，连续两年未提交取消复核资格；④每 3 年复核一次，2023 年认定企业 2026 年已须复核、未提交撤销认定；⑤申报免费，省厅未委托任何中介，谨防「包认定」「内部渠道」收费。"
  },
  {
    id: "gdinterest",
    order: 25,
    column: "zjzj",
    name: "专精特新中小企业贷款贴息（广东省）",
    issuingBody: "广东省工业和信息化厅",
    level: "省级",
    deadline: "项目库入库制、每年 1 批：2026 年度入库（粤工信融资函〔2025〕26 号，利息发生期 2024-05-01~2025-04-30）已于 2025-08-30 截止、贴息资金 2026 年度下达；2027 年度入库通知预计 2026 年 8 月前后发布（利息发生期约 2025-05-01~2026-04-30），建议提前备齐贷款合同与利息单",
    // 无 deadlineDate（2026-08-13 移除推算值）：2027 年度入库通知未发布，推算值会在时间轴渲染误导性紧迫提示；往年节奏（约 7-8 月发通知、8 月中下旬截止）见 deadline 文本，通知发布后按实际截止补录
    effort: "Medium",
    updated: "2026-08-14",
    revisions: [
      { at: "2026-08-13", note: "移除推算截止日期 2026-08-31（官方 2027 年度通知发布前窗口未定，往年节奏保留在 deadline 文本）", basis: "P1-2 数据口径修复" },
      { at: "2026-08-14", note: "zct-diag 细化：原「申报材料」类条件移出 conditions（材料清单进 materials、流程进 diagNotes），全部条件补 evidence", basis: "粤工信融资函〔2025〕26 号附件 1" }
    ],
    source: { name: "《广东省工业和信息化厅关于做好 2026 年专精特新中小企业贷款贴息项目入库工作的通知》（粤工信融资函〔2025〕26 号）", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" },
    notice: { name: "2026 年度入库通知（粤工信融资函〔2025〕26 号）+ 各地市执行（东莞 2025-08-08 转发，截止 8.11）", url: "https://im.dg.gov.cn/gkmlpt/content/4/4416/mpost_4416036.html", timeline: "每年 1 批、约 7-8 月发布入库通知：2025-07-17 省厅发布 26 号文 → 各地市 7-8 月组织申报（东莞 8.11、惠州 8.11、中山 8.3 线上等，以属地通知为准）→ 各地市 8.30 前通过数字工信平台报省厅 → 全面实行项目库管理，未纳入项目库原则上不安排预算 → 9 月起各地公示入库名单 → 贴息资金次年下达（2026 年度资金 2026 年下达）。2027 年度入库预计 2026 年 8 月前后启动" },
    summary: "省级专精特新中小企业最直接的资金奖补：对利息总额达到 30 万元及以上的商业银行人民币贷款，按单个企业补助比例最高不超过利息的 50%、最高不超过 100 万元给予补助（粤工信融资函〔2025〕26 号）。资格前提：广东省注册登记、有效期内的省级专精特新中小企业（不含国家「小巨人」企业、不含已获过贴息企业；不含深圳市——深圳参照执行）。入库制：先入库后支持、入库不等于最终获资（全省入库名额原则上不超过 2000 家，按评审标准择优排序）。评审标准（26 号文附件 1）：主导产品属于制造业核心基础零部件/元器件/关键软件/先进基础工艺/关键基础材料/产业技术基础等领域；近 2 年主营业务收入平均增长率为正；上年度研发经费占营业收入比重珠三角 ≥4%、粤东西北 ≥3%；重点支持十大战略性支柱/新兴产业集群、人工智能与机器人领域企业。每年 1 批、约 8 月前后发布入库通知。",
    subsidy: "贷款利息补助：利息总额 ≥30 万元 → 按利息支出 ≤50% 补助、单个企业最高 100 万元；全省入库名额 ≤2000 家、择优排序支持（粤工信融资函〔2025〕26 号）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","高技术服务","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "申报资格（26 号文奖补对象）",
        items: [
          { name: "广东省注册登记、有效期内的省级专精特新中小企业", required: true, weight: 3, autoMatch: "level", rule: v => v === 2, description: "26 号文奖补对象：广东省注册登记（不含深圳市，深圳参照执行）、有效期内的省级专精特新中小企业；不含国家专精特新「小巨人」企业及已获得专精特新企业贷款贴息的企业——表单「已获资质」选「省级专精特新」档即满足，小巨人及以上不满足（level 字段为数值档位）", basis: { name: "26 号文奖补对象 · 附件 1 入库工作指引", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "省级专精特新中小企业证书或认定文件（有效期内）" },
          { name: "贷款利息总额 ≥30 万元（利息发生期）", required: true, weight: 3, description: "26 号文扶持范围：企业获得商业银行人民币贷款，在利息发生期内实际发生的利息总额达到 30 万元及以上的支出给予补助；2026 年度口径为 2024-05-01 至 2025-04-30 期间（2027 年度预计为 2025-05-01 至 2026-04-30），以利息单实际发生额为准，需人工核验", basis: { name: "26 号文扶持范围及额度", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "银行利息单复印件（字迹清晰且无涂改，否则视为无效）+ 贷款合同" },
          { name: "未获得过专精特新企业贷款贴息", required: true, weight: 2, description: "26 号文奖补对象明确不含已获得专精特新企业贷款贴息的企业（广州市进一步明确不含 2019-2024 年已获贴息及 2025 年已入库成功的企业），需人工核验", basis: { name: "26 号文奖补对象", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "历史贴息获得情况自检说明" }
        ]
      },
      {
        category: "评审标准（26 号文附件 1 入库指引，择优排序）",
        items: [
          { name: "主导产品领域符合要求", required: true, weight: 2, description: "26 号文附件 1 入库评审标准：主导产品属于制造业核心基础零部件、元器件、关键软件、先进基础工艺、关键基础材料和产业技术基础；或符合制造强国战略十大重点产业领域；或属于网络强国建设的信息基础设施、关键核心技术、网络安全、数据安全领域，需人工核验", basis: { name: "26 号文附件 1 入库评审标准", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "主导产品领域对应说明（对照重点领域清单）" },
          { name: "近 2 年主营业务收入平均增长率为正", required: true, weight: 2, autoMatch: "growth", rule: v => v === "≥5%" ? true : undefined, description: "26 号文附件 1 专业化指标：近 2 年（2023 年和 2024 年）主营业务收入平均增长率为正增长——选「<5%」或「不清楚」档无法区分正负增长，需人工核实", basis: { name: "26 号文附件 1 入库评审标准", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "近两年审计报告（主营业务收入逐年数据）" },
          { name: "上年度研发经费占营业收入 ≥4%（珠三角；粤东西北 ≥3%）", required: true, weight: 2, autoMatch: "rd", rule: v => v === "<3%" ? false : v === "3%-5%" ? undefined : true, description: "26 号文附件 1 创新能力指标：上年度研发经费占营业收入比重珠三角 4% 以上、粤东西北 3% 以上——选「3%-5%」档无法区分是否达珠三角 4% 线，需人工核实", basis: { name: "26 号文附件 1 入库评审标准", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "上年度审计报告（研发经费与营业收入数据）" },
          { name: "优先支持十大战略性支柱/新兴产业集群、人工智能与机器人领域企业", required: false, weight: 1, description: "26 号文附件 1：重点支持属于十大战略性支柱产业集群和十大战略性新兴产业集群的企业；同等条件下优先安排拥有国家级产业人才的企业、人工智能与机器人产业领域的企业", basis: { name: "26 号文附件 1 入库评审标准", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" }, evidence: "所属产业集群与领域说明（对照十大战略性支柱/新兴产业集群清单）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 26 号文附件 1「四、申报材料」官方 6 项 + 各地市可增补）
    materials: [
      { name: "项目真实性承诺函", required: true, basis: { name: "26 号文附件 1 四、申报材料", url: "https://gdii.gd.gov.cn/gkmlpt/content/4/4746/post_4746140.html" } },
      { name: "二级项目绩效目标表", required: true },
      { name: "申报单位的法人证书或营业执照", required: true },
      { name: "贷款合同", required: true },
      { name: "税务申报表", required: true },
      { name: "银行利息单复印件", required: true, note: "字迹需清晰且无涂改，否则视为无效（26 号文附件 1 原文明示）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "项目库入库制：先入库后支持，入库不等于最终获资；全省入库名额原则上不超过 2000 家，各地市推荐入库超总名额时由省工信厅统筹安排（26 号文附件 1）",
      "数字工信平台（gdii.gd.gov.cn/szgx/）线上填报，申报截止日期由各地市根据实际情况设定、不得晚于正式报送省工信厅时间（26 号文四（二））",
      "不得以同一项目重复申报或多头申报专项资金（26 号文附件 1 五）；贴息资金主要用于支付企业融资成本",
      "2026 年度入库已截止（2025-08-30 报省厅）；2027 年度入库通知预计 2026 年 8 月前后发布（利息发生期约 2025-05-01 至 2026-04-30），建议提前备齐贷款合同与利息单"
    ],
    tips: "省级专精特新的直接「钱」政策：利息 ≥30 万可补最高 50%、最高 100 万。关键认知：①入库制——先入库后支持，入库不等于最终获资，全省 ≤2000 家择优排序；②每年 1 批、约 7-8 月发通知、各地 8 月中下旬截止，2026 年度入库已截止、2027 年度预计 2026 年 8 月前后启动；③利息发生期口径要盯紧（按年度通知的实际发生期），平时保存好贷款合同和银行利息单（字迹清晰无涂改，否则视为无效）；④前提是有效期内的省级专精特新（不含小巨人、不含深圳）；⑤申报免费，通过数字工信平台线上申报，严禁中介代理、严禁收费。"
  },
  {
    id: "gdnewmat",
    order: 30,
    column: "zjzj",
    name: "广东省重点领域研发计划「重点新材料」专项项目",
    issuingBody: "广东省科学技术厅",
    level: "省级",
    deadline: "2027 年度申报：网上集中申报 2026-07-22 至 2026-08-21 17:00（粤科函资字〔2026〕1312 号）；地市科技部门网上审核推荐 8 月 31 日 17:00 前",
    deadlineDate: "2026-08-21",
    effort: "Heavy",
    updated: "2026-08-15",
    source: { name: "《广东省科学技术厅关于组织申报2027年度省重点领域研发计划「重点新材料」专项项目的通知》（粤科函资字〔2026〕1312 号，2026-07-21 发布）", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" },
    notice: { name: "珠海市科技创新局转发通知（2026-07-23，含地市审核推荐口径）", url: "https://www.zhuhai.gov.cn/kjcxj/gkmlpt/content/3/3926/post_3926828.html", timeline: "2026-07-22 启动网上集中申报（广东省科技业务管理阳光政务平台 pro.gdstc.gd.gov.cn 或省政务服务网，在线申报、无纸化）→ 2026-08-21 17:00 网上申报截止 → 地市科技部门 8-31 17:00 前完成网上审核推荐 → 省科技厅组织第三方专业机构评审论证（技术创新就绪度评估 + 知识产权评议 + 大数据查重与先进性分析）→ 立项后纳入项目库管理，视年度预算分批出库、分阶段拨付" },
    summary: "广东省科技厅科技计划体系中的重点项目支持计划：省重点领域研发计划设若干专项，「重点新材料」专项 2027 年度申报（粤科函资字〔2026〕1312 号）——项目制、竞争择优，支持新材料领域关键核心技术攻关与产业化。立项后纳入项目库管理、视年度财政预算及项目落地情况分批出库支持、分阶段拨付财政资金（立项项目资助最高 1000 万元/项，以申报指南为准）。牵头单位须为省内注册的独立法人单位（企业、科研院所、高校、其他事业单位和行业组织；港澳特区高等院校和科研机构可参与），鼓励产学研联合申报（同一项目牵头+参与单位总数原则上不超过 5 家）；项目须有一定技术就绪度基础（支持 3～6 级项目、完成时应达 7～9 级、原则上应有 3 级以上提高）；企业牵头项目自筹经费原则上不低于总投入 70%。同一方向有效申报不足 3 家视为竞争性不足不进入评审，达 3 家及以上的经评审后原则上只立项支持 1 项——竞争激烈，适合在新材料细分领域有真实技术积累和产业化基础的企业。",
    subsidy: "立项项目资助最高 1000 万元/项（以附件申报指南为准）；立项后纳入项目库管理，视年度财政预算及项目落地情况分批出库支持、结合项目进展分阶段拨付财政资金。省外企业不参与分配财政资金（可作参与单位）。",
    applicableIndustries: ["新材料","先进制造与自动化","化工","建材","新能源与节能","电子信息","生物与新医药","资源与环境"],
    conditions: [
      {
        category: "基础合规（1312 号通知申报要求）",
        items: [
          { name: "牵头单位为广东省内注册的独立法人单位（企业/科研院所/高校/事业单位/行业组织；港澳高校科研机构可参与）", required: true, weight: 3, description: "1312 号通知申报要求：牵头申报单位须为省内注册、具有独立法人资格的企业、科研院所、高校、其他事业单位和行业组织，以及港澳特区高等院校和科研机构。表单四种企业类型均为依法设立的企业，此条件自动通过；科研院所/高校牵头需在自诊断中核实", basis: { name: "粤科函资字〔2026〕1312 号", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本（牵头单位注册地核验）" },
          { name: "无科研失信记录、未列入社会信用「黑名单」，负责人无逾期未验收省级项目", required: true, weight: 3, veto: true, description: "1312 号通知禁止申报情形：存在科研失信或社会信用「黑名单」等记录的不得申报；项目负责人有 3 项以上省级项目未完成验收、有项目逾期一年未验收或当年度已申报 2 项的不得申报；有在研省重大科技专项或重点领域研发计划项目未验收的不能再任负责人", basis: { name: "粤科函资字〔2026〕1312 号禁止申报情形", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "科研诚信与黑名单自检说明（负责人项目验收情况逐项核对）" },
          { name: "同一法人单位（高校除外）同一专项牵头及参与原则上不超过 3 项", required: true, weight: 2, description: "1312 号通知限项规则：同一法人单位（高校除外）在同一专项中牵头及参与原则上不超过 3 项；近三年年均研发费用不低于 5000 万元的高新技术企业可放宽至牵头及参与不超过 6 项（其中牵头不超过 2 项）——需人工核对本单位在研/已报项目数", basis: { name: "粤科函资字〔2026〕1312 号限项规则", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "本单位在研/已报省级项目清单（限项核对）" }
        ]
      },
      {
        category: "项目条件（1312 号通知申报要求）",
        items: [
          { name: "产学研联合申报：同一项目牵头+参与单位总数原则上不超过 5 家", required: true, weight: 2, description: "1312 号通知：鼓励产学研联合申报，原则上同一项目牵头单位与参与单位总数不超过 5 家；牵头单位原则上应分配最大财政资金份额，省外企业不参与分配财政资金", basis: { name: "粤科函资字〔2026〕1312 号", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "产学研合作协议（联合申报单位清单与分工）" },
          { name: "项目技术就绪度 3～6 级起步，完成时应达 7～9 级，原则上提高 3 级以上", required: true, weight: 2, description: "1312 号通知三（一）+ 附件 2《技术创新就绪度评价标准及细则》：TIRL 技术创新就绪度 13 级（前 9 级对应 TRL 技术就绪度、属研究开发阶段，后 4 级属应用/产业化/商业化阶段）；本专项支持 3～6 级起步、项目完成时一般应达 7～9 级、原则上应有 3 级以上提高；就绪度自评按附件 2 表 1 通用等级定义 + 对应分类细则（表 2 硬件 / 表 3 软件 / 表 4 技术方法 / 表 5 医疗器械）逐级对照——在可行性报告中阐述并提供佐证支撑材料", basis: { name: "粤科函资字〔2026〕1312 号评审说明 · 附件 2", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "技术就绪度自评（按附件 2 表 1 通用定义 + 表 2-5 分类细则逐级对照，3～6 级起步、完成 7～9 级、提高 ≥3 级，随可行性报告提交佐证支撑材料）" },
          { name: "提出高质量知识产权目标（不以专利/论文数量简单作为目标）", required: true, weight: 2, description: "1312 号通知三（三）+ 附件 3《高质量知识产权分析评议指引》：评议从三方面综合评价——自有知识产权（权属清晰、权利有效，权属人可合法处分；项目组人员与项目技术匹配）、专利风险分析（现有技术检索、同方向主要申请人/专利权人分析、专利竞争热度与产业竞争状况调查、核心技术的知产风险与竞争关系）、知识产权管理能力（较完善的管理制度和专职人员）；项目研究成果一般应有高质量知识产权，勿简单以专利数量、论文数量作为项目目标——在可行性报告中阐述并提供佐证支撑材料", basis: { name: "粤科函资字〔2026〕1312 号评审说明 · 附件 3", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "可行性研究报告中的知识产权情况说明（自有知产/专利风险/管理能力三方面）+ 高质量知识产权目标与产出规划" },
          { name: "企业牵头项目自筹经费原则上不低于总投入的 70%（未明确须企业牵头的 ≥50%）", required: true, weight: 2, description: "1312 号通知经费要求：指南明确须由企业牵头的，自筹经费原则上不低于总投入的 70%；未明确须企业牵头的，自筹经费原则上不低于 50%——需评估企业自筹资金能力", basis: { name: "粤科函资字〔2026〕1312 号经费要求", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "自筹经费能力证明（资金安排计划与财务报表）" },
          { name: "近三年年均研发费用不低于 5000 万元的高企（限项放宽条款，非申报门槛）", required: false, weight: 1, description: "1312 号通知限项规则：近三年年均研发费用不低于 5000 万元的高新技术企业，同一专项牵头及参与可放宽至不超过 6 项（牵头不超过 2 项）——普通企业按 ≤3 项执行", basis: { name: "粤科函资字〔2026〕1312 号限项规则", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" }, evidence: "近三年研发费用证明（高企适用限项放宽条款时提供）" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 1312 号通知申报方式；在线申报、无纸化）
    materials: [
      { name: "可行性研究报告（提纲在阳光政务平台下载；须含技术路线图、技术就绪度阐述与佐证（附件 2 标准）、知识产权情况说明（附件 3 指引三方面））", required: true, basis: { name: "粤科函资字〔2026〕1312 号三（一）（三）", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" } },
      { name: "《申报材料真实性承诺函》（阳光政务平台下载模板，加盖单位公章）", required: true, basis: { name: "粤科函资字〔2026〕1312 号一（五）", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" } },
      { name: "上一年度企业所得税纳税申报表（企业牵头申报须上传）", required: true },
      { name: "产学研合作协议（联合申报单位）", required: false, note: "鼓励产学研联合申报（牵头+参与 ≤5 家）" },
      { name: "自筹经费能力证明（企业牵头 ≥70%）", required: true },
      { name: "技术就绪度自评材料（按附件 2《技术创新就绪度评价标准及细则》：TIRL 13 级，前 9 级=TRL 研发阶段、后 4 级=产业化商业化；硬件/软件/技术方法/医疗器械四类细则；3～6 级起步、完成 7～9 级、提高 ≥3 级）", required: true, basis: { name: "1312 号通知附件 2", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" } },
      { name: "知识产权评议相关材料（按附件 3《高质量知识产权分析评议指引》：自有知产/专利风险/管理能力三方面；在可行性研究报告中填写知识产权情况说明）", required: true, basis: { name: "1312 号通知附件 3", url: "http://gdstc.gd.gov.cn/zwgk_n/tzgg/content/post_4927741.html" } }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "在线申报、无纸化：2026-07-22 至 08-21 17:00 通过「广东省政务服务网」或阳光政务平台（pro.gdstc.gd.gov.cn）提交；地市科技部门 8-31 17:00 前完成网上审核推荐；确有不宜网络提交的可书面申请线下申报，立项后任务书纸质件另行通知报送（1312 号通知）",
      "竞争择优规则：同一方向有效申报不足 3 家视为竞争性不足、不进入评审；达 3 家及以上经评审后原则上只立项支持 1 项——申报前先评估细分方向竞争格局（1312 号通知评审及立项说明）",
      "立项后纳入项目库管理，视年度财政预算及项目落地情况分批出库支持、结合项目进展分阶段拨付财政资金——资金不是申报即有",
      "评审论证：省科技厅组织第三方专业机构开展技术创新就绪度评估（附件 2：支持 3～6 级起步、完成 7～9 级、提高 ≥3 级）+ 知识产权分析评议（附件 3：自有知产/专利风险/管理能力三方面）+ 大数据查重与先进性分析（1312 号通知三）",
      "申报全程免费，未委托任何中介机构代理申报" ,
      "《申报材料真实性承诺函》须在阳光政务平台下载模板并加盖单位公章（1312 号通知一（五））；项目一经立项，技术、产品、经济等考核指标无正当理由不予修改调整"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报程序」类 3 条条件移出（在线申报/竞争择优进 diagNotes，所得税申报表进 materials），基础合规与项目条件全部补 evidence，新增 materials 与 diagNotes", basis: "粤科函资字〔2026〕1312 号" },
      { at: "2026-08-15", note: "A 类待补回填：附件 2《技术创新就绪度评价标准及细则》与附件 3《高质量知识产权分析评议指引》官方 PDF 到位（用户提供），就绪度/知产目标条件与材料按附件实际口径细化；materials 补《申报材料真实性承诺函》漏项；可行性研究报告明确含附件 2/3 要求内容", basis: "粤科函资字〔2026〕1312 号附件 2/3" }
    ],
    tips: "省科技厅重点项目「项目制」申报而非「资质认定」——比技术方案、就绪度提升和知识产权目标，不是比企业规模资质。三点入门认知：①竞争激烈：同一方向只立 1 项、不足 3 家申报直接不评审，先想清楚细分赛道有没有胜算再动手；②时间紧：网上申报 8-21 17:00 截止（距发布仅 1 个月），技术路线图、就绪度自评（3～6 级起步、提高 ≥3 级）、高质量知识产权目标、合作协议、自筹资金安排（企业牵头 ≥70%）要尽快组织；③申报全程线上无纸化（阳光政务平台），企业须传上一年度企业所得税申报表；负责人有 3 项以上省级项目未验收或逾期未验收的不能申报；立项后纳入项目库、视预算分批出库拨付——资金不是申报即有。限项规则提前核对：同一法人单位同一专项牵头+参与 ≤3 项（近三年年均研发费 ≥5000 万的高企可放宽至 6 项、牵头 ≤2 项）。与高企、专精特新等资质类政策的区别：本项目一企最多牵头 2 项，属「冲方向」型申报，企业宜聚焦最有把握的新材料细分方向。"
  },
  {
    id: "gdloan",
    order: 36,
    column: "zjzj",
    name: "广东省制造业和高新技术企业贷款贴息",
    issuingBody: "广东省地方金融管理局 · 省发展改革委 · 省科技厅 · 省工信厅 · 省财政厅 · 广东金融监管局",
    level: "省级",
    deadline: "银行经办、按季度申报：贴息期 2025-05-01 至 2027-12-31（期间发放的贷款）；经办银行每季度结束后 10 个工作日内申报，省金融管理局 10 个工作日内拨付（细则至 2027-12-31 截止）",
    effort: "Easy",
    updated: "2026-08-15",
    source: { name: "《广东省制造业和高新技术企业贷款贴息实施细则》（粤金管〔2025〕15号，2025-07-31 印发）", url: "https://www.gdjr.gov.cn/gdjr/zwgk/tzgg/content/mpost_38655.html" },
    notice: { name: "细则转发与解读（云浮市科技局转发全文）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html", timeline: "贴息期 2025-05-01 至 2027-12-31（期间经办银行发放的合格贷款）；银行按季度申报（季度结束后 10 个工作日内），省金融管理局按季度预拨 80%、审核后 10 个工作日内拨付剩余 20%；细则至 2027-12-31 截止" },
    summary: "广东省制造业和高新技术企业贷款贴息（粤金管〔2025〕15号，6 部门联合，2025-07-31 印发）：对广东省内注册的制造业企业（工商登记 C 制造业）和有效期内高新技术企业，在 2025-05-01 至 2027-12-31 期间通过经办银行获得的合格贷款给予财政贴息。贴息标准：贴息金额 = 单笔放款本金 × 贷款年利率 × 35%（不足一年按实际付息天数折算）；单个企业年度贴息最高 2000 万元，单笔贷款合同可享受不超过 1 年贴息；省财政年度贴息对应贷款总规模控制在 2000 亿元以内（三年 6000 亿）、额度用完即止。贴息范围：新增银行贷款用于建设厂房、购买设备、技术改造、科技研发等；制造业企业贷款须为固定资产贷款、投向广东省辖内；高企主营业务须属于《产业结构调整指导目录（2024年本）》鼓励类。负面清单：不得用于借新还旧、偿还股东借款或其他银行贷款、购地及非生产性固定资产投资、金融投资（理财/股票/虚拟货币）、购买个人房产/用车、房地产开发、城市改造、市政工程等。规则：企业同属制造业和高企的只能选一个领域申请；同一笔贷款只能选择一项省级贴息政策；已享中央财政大规模设备更新再贷款贴息的贷款不再纳入。贴息由经办银行主导申报（企业向经办银行提交贴息申请书及承诺书），银行按季度向平台报送，省金融管理局预拨 80% 贴息、银行收息后 3 个工作日内拨付企业。深圳市自行制定贴息政策、不纳入本细则。",
    subsidy: "财政贴息：单笔放款本金 × 年利率 × 35%（按实际付息天数折算）；单企业年度最高 2000 万、单笔合同 ≤1 年；年度总规模 2000 亿、用完即止（粤金管〔2025〕15号第十二条）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品","高技术服务"],
    conditions: [
      {
        category: "贴息资格（细则第十条）",
        items: [
          { name: "广东省内注册的制造业企业（工商登记 C 制造业）或有效期内高企（二选一）", required: true, weight: 3, description: "细则第十条：制造业企业指广东省内注册、工商登记行业类别属于国民经济行业分类（GB/T 4754-2017）C 制造业项下的企业；高新技术企业指省内注册、申请贴息时处于有效期内的企业（以省科技厅、财政厅、税务局相关名单为准）；企业同属制造业和高企的只能选择其中一个领域申请（第十二条（三））", basis: { name: "细则第十条、第十二条（三）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, autoMatch: "type", rule: v => v !== "科技型中小企业" ? true : undefined, evidence: "营业执照（行业类别）+ 高企证书（如按高企申请）" },
          { name: "未被列入严重失信主体名单", required: true, weight: 3, veto: true, description: "细则第十条（三）：贴息申报时，被列入严重失信主体名单的经营主体，不予发放贷款贴息", basis: { name: "细则第十条（三）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」查询结果" }
        ]
      },
      {
        category: "贴息范围与合规（细则第十一条）",
        items: [
          { name: "贷款在 2025-05-01 至 2027-12-31 期间由经办银行发放", required: true, weight: 3, description: "细则第二条、第十一条（一）：对经办银行在 2025-05-01 至 2027-12-31 发放的、符合贴息条件的贷款所产生的利息支出给予财政贴息；经办银行含 21 家全国性银行在粤分支机构、5 家地方城商行和广东各家农商银行（细则第六条）", basis: { name: "细则第二条、第六条、第十一条（一）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "贷款合同与放款凭证（发放日期在贴息期内、经办银行在名单内）" },
          { name: "贷款用途合规：建设厂房/购买设备/技改/科技研发；制造业须固定资产贷款且投向省内", required: true, weight: 3, description: "细则第十一条（一）：新增银行贷款用于建设厂房、购买设备、技术改造、科技研发等方面；制造业企业贷款为固定资产贷款，贷款须投向广东省辖内；高企主营业务应属于《产业结构调整指导目录（2024年本）》鼓励类", basis: { name: "细则第十一条（一）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "贷款合同用途条款 + 投向说明" },
          { name: "贷款用途不在负面清单内", required: true, weight: 2, description: "细则第十一条（三）负面清单制：贷款不得用于借新还旧、偿还股东借款或其他银行贷款（含过桥资金）、偿还其他债务、购买土地及非生产性固定资产投资、金融投资（理财/股票/虚拟货币等套利）、购买个人房产、个人用车、房地产开发、城市改造、市政工程等，不得用于投资国家产业政策禁止和限制的项目", basis: { name: "细则第十一条（三）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "资金用途合规自检说明" },
          { name: "未享受中央设备更新再贷款贴息；同一笔贷款未申请其他省级贴息政策", required: true, weight: 2, description: "细则第十二条（三）：同一笔贷款符合省内不同贷款贴息政策条件的只能选择其中一项申请；已享受中央财政大规模设备更新再贷款贴息政策的贷款不再纳入本次省级贴息范围；同一笔贷款在贴息年度内获得的各级财政贴息资金总额不得超过贷款利息支付总额", basis: { name: "细则第十二条（三）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "贴息政策重叠情况自检说明" }
        ]
      },
      {
        category: "贴息标准（细则第十二条，供测算）",
        items: [
          { name: "贴息金额 = 本金 × 年利率 × 35%（不足一年按天折算）", required: false, weight: 1, description: "细则第十二条（一）：贴息期为整年的，贴息金额 = 单笔放款的本金金额 × 贷款年利率 × 35%；不足一年按天计算：本金 × 年利率 × 35% ×（实际付息天数/365）", basis: { name: "细则第十二条（一）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "贷款合同利率条款 + 付息明细" },
          { name: "上限：单企业年度 ≤2000 万、单笔合同 ≤1 年贴息", required: false, weight: 1, description: "细则第十二条（二）：单个企业年度贴息金额最高 2000 万元，政策执行期内单笔贷款合同可享受不超过 1 年贴息；省财政年度贴息对应贷款总规模控制在 2000 亿元以内（三年 6000 亿）、额度用完即止", basis: { name: "细则第十二条（二）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" }, evidence: "贷款规模测算（对照年度额度）" }
        ]
      }
    ],
    // zct-diag 2026-08-15：申报材料清单（细则第八条、第十四条附件 2-5）
    materials: [
      { name: "贴息申请书（企业版，向经办银行提交）", required: true, basis: { name: "细则第八条、第十四条（一）", url: "https://www.yunfu.gov.cn/kjj/zwgk/zcfg/content/post_1981972.html" } },
      { name: "承诺书", required: true },
      { name: "贷款合同与放款凭证（发放日期、用途、利率条款）", required: true },
      { name: "企业营业执照 + 高企证书（按高企领域申请时）", required: true },
      { name: "付息明细（银行利息回单）", required: true },
      { name: "贴息申请明细表（银行填报，附件 5）", required: false, note: "银行端申报材料；企业侧主要提供申请书与承诺书" }
    ],
    diagNotes: [
      "银行经办制：企业向经办银行提交贴息申请书及承诺书，由银行审核资质、贷款投向、资金使用及利息收支后按季度向平台申报（细则第八条、第十四条）——企业侧动作轻，关键是贷款发放时就与经办银行确认贴息资格",
      "资金节奏：省金融管理局按季度向经办银行预拨 80% 贴息，经办银行向客户收取利息之日起 3 个工作日内拨付财政贴息资金，审核后 10 个工作日内结算剩余 20%（细则第十三条、第十四条）——贴息到账快，随利息支付节奏走",
      "深圳市自行制定贷款贴息政策，该市辖内企业不纳入本细则贴息范围（细则第十九条）；省财政贴息总规模年度 2000 亿元、三年 6000 亿元，额度用完即止（细则第十二条（二））",
      "防止政策重叠：同一笔贷款只能享受一项省级贴息政策；已享中央大规模设备更新再贷款贴息的贷款不重复纳入；各级财政贴息合计不得超过利息支付总额（细则第十二条（三）、第十六条）"
    ],
    revisions: [
      { at: "2026-08-15", note: "新增收录（第 1 批政策扩充）：依据粤金管〔2025〕15号（2025-07-31 印发，6 部门联合），贴息资格/范围/标准/流程条件收录", basis: "粤金管〔2025〕15号" }
    ],
    tips: "这是广东 2025 年 7 月新上线的普惠贴息政策，覆盖面极广（制造业 + 高企都算），贴息率 35% 固定、单个企业一年最高 2000 万——比专精特新贴息（gdinterest，50%/100 万）门槛低得多，是「有贷款就能蹭」的政策。五个认知点：①银行主导——不用企业主动去政府申报，贷款发放时让经办银行确认贴息资格、提交贴息申请书+承诺书即可，放款后按季度自动滚动；②贷款用途必须合规——建厂房/买设备/技改/研发可以，借新还旧、买地、理财炒股、买楼买车都不行（负面清单制），用途写在合同里；③制造业贷款必须是固定资产贷款并投向省内，高企则要求主营业务在鼓励类目录；④先到先得——年度 2000 亿总额度用完即止，越早贷款越稳；⑤注意排他——同一笔贷款不能同时享受省级其他贴息（如专精特新贴息）和中央设备更新再贷款贴息，贷款时想清楚走哪条线。深圳企业不适用（深圳自定政策）。"
  }

);