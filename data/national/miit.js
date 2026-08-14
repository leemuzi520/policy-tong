// 政策数据：工信部门国家级（由 index.html 汇总为 POLICIES）
// 来源：index.html 2a.1 数据分离（2026-08-02，纯搬家，内容未改）
window.ZCT_DATA = window.ZCT_DATA || {};
window.ZCT_DATA.national = window.ZCT_DATA.national || {};
window.ZCT_DATA.national.miit = window.ZCT_DATA.national.miit || [];
window.ZCT_DATA.national.miit.push(
  {
    id: "xjr",
    order: 2,
    column: "zjt",
    name: "专精特新「小巨人」企业认定",
    issuingBody: "工信部",
    level: "国家级",
    deadline: "每年 1 批 · 2026 第八批 4.25-5.25 填报",
    effort: "Heavy",
    updated: "2026-08-02",
    source: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" },
    notice: { name: "《关于开展 2026 年度专精特新「小巨人」企业认定和复核工作的通知》（工信厅企业函〔2026〕117 号）", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html", timeline: "2026 第八批：4.25-5.25 线上填报 → 5.25-6.30 省级初核推荐 → 6.30 材料寄送截止" },
    basis: [
      { name: "《中小企业专精特新发展评价指标体系》（工信厅企业〔2024〕75 号）", url: "http://gxj.xinxiang.gov.cn/zwgk/public/6638681/9530434.html" }
    ],
    summary: "专精特新梯度培育的最高层级荣誉。认定本身无中央直接奖补；中央财政奖补针对「重点小巨人」专项（财建〔2024〕148 号）：每家企业连续支持三年、合计 600 万元测算，绩效挂钩、95% 以上直达企业；地方配套以各省当年政策为准。前提：先获省级「专精特新」中小企业称号。认定条件（2026-04-01 起按《优质中小企业梯度培育管理办法》附件 2 七项指标执行，同时满足）：已获专精特新称号且细分市场 ≥3 年；营收 ≥5000 万元、主营占比 ≥90%、近两年营收复合增长率 ≥5%（复核企业不考查）、上年末资产负债率 ≤75%；近两年研发费用合计 ≥1200 万元且每年占比 ≥3%；Ⅰ类知识产权 ≥4 项（近三年国家级科技奖励排名前三可豁免）；市占率 ≥10% 或国内前三；主导产品属于六基/产业链关键环节；专精特新发展评价 ≥60 分（培育平台自动计算）。新申请按 2 号文标准，2026 年度复核仍按 2022 年 63 号文标准把握（117 号通知）。申报每年 1 批；2026 年第八批 4 月 25 日-5 月 25 日线上填报、省级初核推荐至 6 月 30 日。申报免费，材料建议提前半年准备。",
    subsidy: "认定「小巨人」本身无中央直接奖补；中央奖补为「重点小巨人」专项（财建〔2024〕148 号）：每家企业连续三年合计 600 万元测算、分两次下达、绩效挂钩、95% 以上直达企业；地方配套以各省当年政策为准。",
    applicableIndustries: ["电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","制造业（通用）"],
    conditions: [
      {
        category: "基础合规",
        items: [
          { name: "在境内注册、独立法人", required: true, weight: 3, description: "符合《中小企业划型标准规定》（工信部联企业〔2011〕300 号）" },
          { name: "已获专精特新中小企业称号（3 年有效期内）", required: true, weight: 3, autoMatch: "level", rule: v => v >= 2, description: "2 号文附件 2（一）：申报「小巨人」须先认定为省级专精特新中小企业，且在有效期内" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "截至上年末从事特定细分市场 ≥3 年", required: true, weight: 3, tpl: "seg_years_min", params: { min: "3-5年" }, description: "2 号文附件 2（一）；原 63 号文「关键领域补短板/填空白企业可放宽至 2 年」条款已废止；以从事细分市场的实际年限计，非成立年限" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "近三年无重大安全/质量/环境事故", required: true, weight: 3, veto: true, description: "含较大生产安全事故、重大网络和数据安全事件、重大环境违法行为、严重质量问题、数据造假等（2 号文附件 3 说明）；数据造假将取消创新型/专精特新/小巨人称号且三年内不得再申报（117 号通知）", evidence: "信用中国（creditchina.gov.cn）报告 + 全国企业信用信息公示系统（gsxt.gov.cn）查询结果", tpl: "no_accident" , basis: { name: "工信厅企业函〔2026〕117 号《关于开展 2026 年度专精特新「小巨人」企业认定和复核工作的通知》", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html" }},
          { name: "非制造业单项冠军企业", required: true, weight: 3, description: "已获制造业单项冠军示范企业或单项冠军产品的企业，不再推荐新申请（117 号通知推荐要求（四））" , basis: { name: "工信厅企业函〔2026〕117 号《关于开展 2026 年度专精特新「小巨人」企业认定和复核工作的通知》", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html" }},
          { name: "无控股/同质关联冲突", required: true, weight: 3, description: "与已认定「小巨人」企业存在控股关系的企业、同一集团内生产相似主导产品的企业不予推荐（117 号通知推荐要求（四））" , basis: { name: "工信厅企业函〔2026〕117 号《关于开展 2026 年度专精特新「小巨人」企业认定和复核工作的通知》", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html" }}
        ]
      },
      {
        category: "认定条件（须同时满足，2 号文附件 2 七项指标）",
        items: [
          { name: "上年度营业收入 ≥ 5000 万元", required: true, weight: 2, description: "2 号文附件 2（二）经营规模门槛；以审计报告为准", evidence: "近三年（2023-2025）审计报告（财政部注册会计师行业统一监管平台 acc.mof.gov.cn 报备赋码）", tpl: "revenue_min", params: { min: "5000万-1亿" } , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "主营业务收入占营收 ≥ 90%", required: true, weight: 2, description: "2 号文附件 2（二），由原 70% 提高；主营业务收入、主营业务成本须纳入审计报告（117 号通知）", evidence: "审计报告须单独体现主营业务收入、主营业务成本两项指标", tpl: "main_ratio_min", params: { min: "≥90%" } , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "近两年营业收入复合增长率 ≥ 5%", required: true, weight: 2, tpl: "growth_min", params: { min: "≥5%" }, description: "2 号文附件 2（二）；复核企业不考查该项指标", evidence: "近两年审计报告（营业收入口径与填报数据一致）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "上年末资产负债率 ≤ 75%", required: true, weight: 1, tpl: "debt_max", params: { max: "55%-75%" }, description: "2 号文附件 2（二）财务健康指标", evidence: "上年末审计报告" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "近两年研发费用合计 ≥1200 万元且每年占营收比重 ≥3%", required: true, weight: 3, autoMatch: "rd", rule: (v, profile) => v === "<3%" ? false : profile.rdTotal === "≥1200万" ? true : profile.rdTotal === "100万-1200万" || profile.rdTotal === "<100万" ? false : undefined, description: "2 号文附件 2（三）；两年合计金额与每年占比均须达标，以审计报告为准", evidence: "近两年审计报告（研发费用合计与占比口径）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "主导产品市占率 ≥10% 或国内前三", required: true, weight: 3, autoMatch: "marketShare", rule: v => v === "全球前3" || v === "国内前三或≥10%", description: "2 号文附件 2（五）：在国内或国际细分市场占有率达到 10% 以上或国内前三名，且享有较高知名度、影响力；企业如实说明即可，无需第三方证明（附件 3 说明 + 117 号通知）", evidence: "细分市场占有率如实说明（界定细分市场范围、规模、本企业占有率，数据注明出处）" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "主导产品属于六基/产业链关键环节", required: true, weight: 3, autoMatch: "sixBase", rule: v => v === "是" ? true : v === "否" ? false : undefined, description: "2 号文附件 2（六）：属于制造业核心基础零部件、核心基础元器件、关键软件、先进基础工艺、关键基础材料、产业技术基础，或属于改造提升传统产业、培育壮大新兴产业、布局建设未来产业，位于产业链关键环节，对提升产业链供应链韧性和安全水平发挥重要作用" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "专精特新发展评价得分 ≥ 60 分", required: true, weight: 3, tpl: "eval_min", params: { min: "≥60分" }, description: "由培育平台按《中小企业专精特新发展评价指标体系》（工信厅企业〔2024〕75 号）自动计算，登录 zjtx.miit.gov.cn 查询本年度得分，无需自行测算；未查询前此项无法核验。复核企业近两年任意一年达 60 分以上即可（2 号文附件 2（七））" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }}
        ]
      },
      {
        category: "Ⅰ类知识产权 ≥4 项（或满足豁免条件）",
        anyOf: true,
        paths: [
          {
            name: "知识产权条件（正常路径）",
            anyOf: true,
            autoMatch: "ipr",
            rule: v => v === "6-15" || v === ">15", // 专利总数 ≥6 件从严覆盖 4 项Ⅰ类（表单标签口径；具体Ⅰ类构成以自诊断逐项核实为准）
            items: [
              { name: "拥有 ≥4 项与主导产品相关的Ⅰ类知识产权且实际应用产生经济效益", required: true, weight: 3, description: "Ⅰ类=发明专利（含国防专利）、植物新品种、国家级农作物品种、国家新药、国家一级中药保护品种、集成电路布图设计专有权；不含转入的Ⅰ类知产，企业应在权利人排名前三（附件 3 说明）；专利数据以国家知识产权局数据为准，涉及布图设计等其他Ⅰ类知产仍需提供证书（117 号通知）", evidence: "Ⅰ类知识产权清单及实际应用效益说明（每项 500 字内）；布图设计等其他Ⅰ类知产提供证书；发明专利数据以国家知识产权局为准" , basis: { name: "工信厅企业函〔2026〕117 号《关于开展 2026 年度专精特新「小巨人」企业认定和复核工作的通知》", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html" }}
            ]
          },
          {
            name: "豁免条件（满足 1 项即可）",
            anyOf: true,
            hint: "满足以下 1 项即可豁免知识产权条件",
            items: [
              { name: "近三年获得国家级科技奖励（获奖单位排名前三）", required: true, weight: 2, description: "国家级科技奖励包括国家科学技术进步奖、国家自然科学奖、国家技术发明奖，以及国防科技奖（附件 3 说明）；以获奖证书落款时间为准（近三年内）" , basis: { name: "2 号文附件 3（说明）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }}
            ]
          }
        ]
      },
      {
        category: "加分项（非认定硬条件）",
        items: [
          { name: "取得质量管理体系认证", required: false, weight: 1, description: "如 ISO9001 或同等级别质量管理体系认证；2 号文七项指标不含此项，但复核企业按 63 号文标准仍会考查（精细化指标）", tpl: "cert_has", params: { cert: "ISO9001" } , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "拥有自主品牌", required: false, weight: 2, description: "拥有注册商标或品牌；63 号文复核标准特色化指标要求，2 号文新申请非硬性" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "产品通过国际/国内权威认证", required: false, weight: 1, description: "如 CE、UL、CCC 等产品认证；63 号文复核标准精细化指标（管理体系认证或发达国家和地区产品认证）" },
          { name: "自建或联合建立研发机构", required: false, weight: 2, description: "如技术中心、实验室、博士后工作站等；63 号文复核标准创新能力一般性条件，2 号文新申请非硬性" , basis: { name: "《优质中小企业梯度培育管理办法》（工信部企业〔2026〕2 号）", url: "https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_2aa4981e3c9248379bc210c62dbb0569.html" }},
          { name: "主持或参与制修订标准", required: false, weight: 2, description: "国际/国家/行业标准均可" }
        ]
      },
    ],
    // zct-diag 2026-08-14：申报材料清单（依据广州南沙 2026 年度通知附件 7 官方清单 + 117 号文；装订要求：A4 双面、加封面目录、胶装、公章/骑缝章齐备）
    materials: [
      { name: "《第八批专精特新「小巨人」企业申请书》（线上填报后下载打印，封面盖公章、法定代表人签字，线上线下数据一致）", required: true, note: "申请书单独装订一份", basis: { name: "广州南沙区 2026 年度小巨人认定通知附件 7", url: "http://www.gzns.gov.cn/zwgk/tzgg/content/post_10769343.html" } },
      { name: "真实性声明和合规经营承诺", required: true },
      { name: "营业执照副本扫描件", required: true },
      { name: "上年度 12 月缴纳社保人数证明", required: true, note: "合并报表财务数据的需补子公司证明" },
      { name: "近三年（2023-2025）审计报告", required: true, note: "须在财政部注册会计师行业统一监管平台（acc.mof.gov.cn）报备赋码，并体现主营业务收入、主营业务成本两项指标", basis: { name: "工信厅企业函〔2026〕117 号", url: "https://wap.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_83857a4773ac4583bd1540eeb78bcbcb.html" } },
      { name: "信用中国报告 + 国家企业信用信息公示系统报告", required: true, note: "申报期间未被列入经营异常名录或严重失信主体名单", basis: { name: "广州南沙区 2026 年度小巨人认定通知附件 7", url: "http://www.gzns.gov.cn/zwgk/tzgg/content/post_10769343.html" } },
      { name: "集成电路布图设计等其他Ⅰ类知识产权证书", required: false, note: "涉及则必需；国内发明专利由知识产权局数据核验，无需证书" },
      { name: "近三年国家级科技奖励证明材料", required: false, note: "申请豁免知识产权条件时必需（获奖单位排名前三）" },
      { name: "细分市场占有率说明（2024、2025 年度）", required: false, note: "评分佐证；界定细分市场范围、规模与本企业占有率，数据注明出处" },
      { name: "质量管理体系认证、产品权威认证、制修订标准、研发机构等评分佐证", required: false, note: "自建研发机构需设立文件、研发人员及设备清单、研发场地照片" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "培育平台（zjtx.miit.gov.cn）线上填报 4.25-5.25，线下以属地要求为准，线上与线下数据应保持一致",
      "审计报告须在财政部注册会计师行业统一监管平台（acc.mof.gov.cn）报备赋码后上传电子原件；主营业务收入、主营业务成本纳入审计报告",
      "无需第三方市占率证明与国内发明专利证书——如实说明市占率并填报专利数量（专利数据以国家知识产权局为准）",
      "申报免费；工信部未委托任何机构办理申报业务，谨防「内部渠道」「包过」收费"
    ],
    changes: [
      "上年度营业收入 ≥5000 万元——2026 年新标准新增经营规模门槛",
      "主营业务收入占营收 ≥90%——由旧办法的 70% 提高",
      "研发费用：近两年合计 ≥1200 万元且每年占比 ≥3%——2026 年新标准统一口径",
      "拥有 4 项以上Ⅰ类知识产权——新增量化要求（近三年国家级科技奖励排名前三可豁免）",
      "上年末资产负债率 ≤75%——新增财务健康指标",
      "专精特新发展评价得分 ≥60 分——新增，培育平台自动计算（75 号文指标体系）",
      "从事细分市场 3 年不再有「补短板/填空白可放宽至 2 年」例外——2 号文已删除该条款",
      "质量管理体系认证、自主品牌、自建研发机构等不再是认定硬条件——2 号文七项指标不含；2026 年度复核仍按 63 号文标准把握（117 号通知）",
      "材料简化：无需第三方市占率证明与国内发明专利证书（2026 年起）"
    ],
    tips: "小巨人评审最看重专业化程度和细分市场地位。认定条件按 2 号文附件 2 七项指标逐项核对（营收/主营占比/增长率/负债率/研发/市占率/六基/评价得分）；注意：①「专精特新发展评价得分」由培育平台自动计算，登录 zjtx.miit.gov.cn 查询即可，无需自行测算；②Ⅰ类知识产权不含转入、权利人须排名前三，近三年国家级科技奖励（前三）可豁免本项；③质量认证、自主品牌、研发机构等已不是认定硬条件（复核企业按 63 号文标准仍会考查）；④从事细分市场 3 年无放宽例外。申报完全免费，工信部不委托任何机构办理申报业务，谨防不良中介以「内部渠道」「包过」名义收费（117 号通知明确提醒）。2026 年起材料简化：无需第三方市场占有率证明和国内发明专利证书，如实说明市占率并填报发明专利数量即可，专利数据以国家知识产权局数据为准。财务数据须依据会计师事务所审计报告，并上传财政部注册会计师行业统一监管平台（acc.mof.gov.cn）已赋码电子原件。建议重点准备：营收与研发费用的审计数据口径（研发费用须近两年合计 ≥1200 万元且每年占比 ≥3%）。复核安排：2023 年认定的第五批及复核通过的第二批企业须参加 2026 年度复核，复核按 2022 年 63 号文标准把握（117 号通知）。"
  },
  {
    id: "greenfactory",
    order: 3,
    column: "green",
    name: "国家级绿色工厂",
    issuingBody: "工信部",
    level: "国家级",
    deadline: "每年 3-6 月地方申报（各省组织）· 省级 7 月 31 日前推荐至工信部（13 号文第十二条）· 9-11 月国家评审公示",
    effort: "Heavy",
    updated: "2026-08-02",
    source: { name: "《绿色工厂梯度培育及管理暂行办法》（工信部节〔2024〕13 号）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" },
    notice: { name: "《关于公布绿色工厂、绿色工业园区（2025年度）名单的通知》（工信厅节函〔2026〕97 号）", url: "https://www.miit.gov.cn/jgsj/jns/gzdt/art/2026/art_ff0367abfedd4a4d86d56599878d2ff3.html", timeline: "2026-03-18 公布：新培育绿色工厂 2038 家、绿色工业园区 128 家；动态管理调整：132 家绿色工厂移出名单、92 家变更名称。年度节奏（13 号文）：各省 3-6 月组织申报 → 省级 7 月 31 日前推荐 → 国家评审、公示 15 日 → 年底公布名单" },
    summary: "国家级绿色制造体系的核心荣誉，梯度培育「国家/省/市三级」逐级推荐（13 号文）。无直接资金补贴，但入选后享受环保分级管控豁免、错峰生产豁免、政府优先采购、绿色信贷与绿色债券等融资支持（2025-11-20 两部门绿色金融通知）等政策红利，部分省市另有 20-50 万一次性奖励（如福州 20 万、宿州 30 万、广州黄埔/山东平度 50 万，省市区可叠加，以当地政策为准）。2026 年度起按新版《绿色工厂评价通则》GB/T 36132-2025 评价：新五化指标体系（能源低碳化、资源高效化、生产洁净化、产品绿色化、用地集约化），定量指标权重占比高达 60%，以「基准值/引领值」量化评分。硬门槛：依法取得排污许可证、近三年无较大及以上事故、四体系管理认证（质量/环境/能源/职业健康安全，通则第 6 章）。申报方式（2025 年度起，390 号文）：登录管理平台（green.miit.gov.cn）自主填报申报表完成自评价，不再要求提交第三方评价报告；须先纳入省层面绿色工厂名单，由省级 7 月 31 日前择优推荐（13 号文第十一、十二条）。动态管理有进有出：获评后每年 4 月 15 日前填报动态管理表（13 号文第十六条），得分连续三年处于后 5% 的移出名单（390 号文）。适合能耗管理水平较好的制造业企业。",
    subsidy: "无直接资金补贴，可享受环保分级管控豁免、错峰生产豁免、政府优先采购、绿色信贷/绿色债券等融资支持（2025-11-20 工信部办公厅与央行办公厅《关于用好绿色金融政策支持绿色工厂建设的通知》）。部分省市有 20-50 万一次性奖励（省市区可叠加，以当地政策为准）。",
    applicableIndustries: ["制造业（通用）","化工","汽车","电子信息","消费品","新能源与节能","资源与环境","新材料"],
    conditions: [
      {
        category: "基础合规（13 号文第七条培育对象 + 第十五条负面清单 + GB/T 36132 基本要求）",
        items: [
          { name: "依法设立、正常运营的制造业企业", required: true, weight: 3, description: "具有独立法人资格（或视同法人的独立核算单位），从事实际生产（13 号文第七条培育对象条件）", basis: { name: "13 号文第七条（培育对象条件）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, autoMatch: "type", rule: () => true, evidence: "营业执照副本（含统一社会信用代码）" }, // 表单四种企业类型均为依法设立的正常企业，此条件自动通过；未选类型时归为未核验
          { name: "正常经营生产（未注销、未连续停产 12 个月以上）", required: true, weight: 2, veto: true, description: "13 号文第十五条负面清单（一）：工商注销、连续停产 12 个月以上、被市场监督管理部门列入经营异常名单且未被移出等情形，不得申请、推荐和列入绿色制造名单", basis: { name: "13 号文第十五条（一）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, evidence: "国家企业信用信息公示系统（gsxt.gov.cn）查询结果（登记状态与经营异常名录）" },
          { name: "近三年无安全、质量、环境污染事故及偷漏税", required: true, weight: 3, veto: true, description: "13 号文第十五条负面清单（二）：近三年发生安全（含网络安全、数据安全）、质量、环境污染等事故以及偷漏税等违法违规行为的不得申报（以「信用中国」和「国家企业信用信息公示系统」为准）", basis: { name: "13 号文第十五条（二）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "未被列为失信被执行人", required: true, weight: 2, veto: true, description: "13 号文第十五条负面清单（六）：企业被列为失信被执行人的不得申报", basis: { name: "13 号文第十五条（六）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, evidence: "「信用中国」（creditchina.gov.cn）被执行人查询结果" },
          { name: "未被动态调整出绿色制造名单、督查无严重问题、节能监察整改已完成", required: true, weight: 2, veto: true, description: "13 号文第十五条负面清单（三）（四）（五）：被动态调整出绿色制造名单的、在国务院及有关部委相关督查工作中被发现存在严重问题的、被列入工业节能监察整改名单且未按要求完成整改的，均不得申报", basis: { name: "13 号文第十五条（三）（四）（五）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, evidence: "属地工信部门确认或自检说明（含节能监察整改完成证明，如适用）" },
          { name: "污染物排放持续达标", required: true, weight: 3, veto: true, description: "大气/水/噪声排放符合相关标准及区域排放总量控制要求（GB/T 36132 环境排放要求，需提供近一年监测数据）", basis: { name: "GB/T 36132-2025（环境排放要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "emission", rule: v => v === "是", evidence: "近一年第三方环境监测报告 + 环评批复及验收文件" },
          { name: "依法取得排污许可证", required: true, weight: 2, veto: true, description: "按《排污许可管理条例》（国务院令第 736 号）应领尽领；未取得排污许可证的不得排放污染物（条例第二条）", basis: { name: "《排污许可管理条例》第二条", url: "https://www.gov.cn/zhengce/zhengceku/2021-01/29/content_5583525.htm" }, evidence: "排污许可证（正本及副本）" }
        ]
      },
      {
        category: "梯度培育前置（逐级推荐，13 号文第十一、十二条）",
        items: [
          { name: "已纳入省级（省层面）绿色工厂名单", required: true, weight: 3, description: "13 号文第十一条、第十二条：国家级绿色工厂由省级工信主管部门从本地区省层面绿色工厂名单中择优推荐（不是企业直接向国家申报）；广东按粤 4 号文第十二、十三条：须先经市级遴选（纳入市级绿色制造名单），由地市每年 6 月 30 日前通过管理平台推荐至省厅", basis: { name: "13 号文第十一、十二条 · 粤工信规字〔2024〕4 号第十二、十三条", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" }, evidence: "省级绿色工厂名单公告（广东企业另附市级绿色制造名单入选证明）" }
        ]
      },
      {
        category: "管理体系（GB/T 36132 第 6 章基本要求）",
        items: [
          { name: "已建立质量管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持质量管理体系（GB/T 19001/ISO9001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO9001"), evidence: "质量管理体系认证证书（在有效期内）" },
          { name: "已建立环境管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持环境管理体系（GB/T 24001/ISO14001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO14001"), evidence: "环境管理体系认证证书（在有效期内）" },
          { name: "已建立能源管理体系", required: true, weight: 2, description: "GB/T 36132 第 6 章：建立并保持能源管理体系（GB/T 23331/ISO50001）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO50001"), evidence: "能源管理体系认证证书（在有效期内）" },
          { name: "已建立职业健康安全管理体系", required: true, weight: 1, description: "GB/T 36132 第 6 章：建立并保持职业健康安全管理体系（ISO45001，OHSAS18001 已于 2021 年停发，有效期内的旧证仍认可）", basis: { name: "GB/T 36132-2025（管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, autoMatch: "certs", rule: v => v.includes("ISO45001") || v.includes("OHSAS18001"), evidence: "职业健康安全管理体系认证证书（在有效期内，含未到期 OHSAS18001 旧证）" }
        ]
      },
      {
        category: "绿色绩效（硬指标，基准值/引领值评分）",
        items: [
          { name: "单位产品综合能耗达到基准值要求", required: true, weight: 3, description: "GB/T 36132-2025 绩效指标（能源低碳化）：实际数据与基准值/引领值对比评分；工业重点领域优先推荐能效达到标杆水平、其他行业优先推荐能源消耗限额标准先进值或 1 级水平（13 号文第十四条）；需提供能源审计报告或节能评估报告", basis: { name: "GB/T 36132-2025（能源低碳化指标）· 13 号文第十四条", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "能源审计报告或节能评估报告 + 近一年能耗统计台账（综合能耗与产品产量数据）" },
          { name: "单位产品取水量达到基准值要求", required: true, weight: 2, description: "GB/T 36132-2025 绩效指标（资源高效化）：以基准值/引领值评分；需提供水平衡测试报告", basis: { name: "GB/T 36132-2025（资源高效化指标）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "水平衡测试报告或近一年用水台账（取水量与产品产量数据）" },
          { name: "主要污染物排放达到基准值要求", required: true, weight: 3, description: "GB/T 36132-2025 绩效指标（生产洁净化）：单位产品主要污染物产生量，以基准值/引领值评分；需提供环评批复 + 验收文件 + 近两年监测报告", basis: { name: "GB/T 36132-2025（生产洁净化指标）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "环评批复及验收文件 + 近两年第三方监测报告（主要污染物产生量数据）" },
          { name: "一般工业固废综合利用率达到行业先进水平", required: true, weight: 2, description: "GB/T 36132-2025 绩效指标（资源高效化）：工业固体废物综合利用率，综合绩效应达到行业先进水平；需提供固废台账和综合利用去向证明", basis: { name: "GB/T 36132-2025（资源高效化指标）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "一般工业固废台账 + 综合利用去向证明（处置合同、转移联单等）" }
        ]
      },
      {
        category: "绿色设计与采购（提高性要求）",
        items: [
          { name: "开展了绿色设计或生态设计", required: false, weight: 2, description: "GB/T 36132 产品要求：宜按 GB/T 24256 开展生态设计（官方为「宜」，属提高性要求）；有绿色设计产品或绿色设计示范企业资质为佳", basis: { name: "GB/T 36132-2025（产品绿色化要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "绿色设计产品目录/生态设计相关认证或设计文件" },
          { name: "建立了绿色供应链管理制度", required: false, weight: 1, description: "GB/T 36132 采购要求：绿色采购与供应商管理；对供应商有绿色准入要求", basis: { name: "GB/T 36132-2025（采购与供应链要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "绿色采购管理制度、供应商绿色准入要求文件" },
          { name: "使用清洁能源或可再生能源", required: false, weight: 2, description: "GB/T 36132 基础设施与能源投入要求：可再生能源利用，如分布式光伏、绿电购买合同等", basis: { name: "GB/T 36132-2025（能源低碳化要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" }, evidence: "分布式光伏并网协议/绿电交易合同/可再生能源证书等" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 13 号文第十条 + 工信厅节函〔2025〕390 号；管理平台线上填报，导出纸质版报属地工信部门）
    materials: [
      { name: "绿色工厂申报表（管理平台 green.miit.gov.cn 填报，导出上报材料纸质版报送属地工信部门）", required: true, basis: { name: "工信厅节函〔2025〕390 号（东莞转发）", url: "https://im.dg.gov.cn/zwgk/zxgk/content/post_4448066.html" } },
      { name: "自评价报告（管理平台自主填报完成自评价后生成；2025 年度起不再要求提交第三方评价报告）", required: true, basis: { name: "13 号文第十条 · 工信厅节函〔2025〕390 号（厦门转发）", url: "https://gxj.xm.gov.cn/xwzx/tzgg/202510/t20251011_2959669.htm" } },
      { name: "企业营业执照副本", required: true },
      { name: "排污许可证（按《排污许可管理条例》应领尽领）", required: true, basis: { name: "《排污许可管理条例》第二条", url: "https://www.gov.cn/zhengce/zhengceku/2021-01/29/content_5583525.htm" } },
      { name: "质量/环境/能源/职业健康安全管理体系认证证书（四体系）", required: true, basis: { name: "GB/T 36132-2025（第 6 章管理体系要求）", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=535D5F459D0F02217D3216CF849E3822" } },
      { name: "能源审计报告或节能评估报告 + 近一年能耗统计台账", required: true },
      { name: "水平衡测试报告或近一年用水台账", required: true },
      { name: "环评批复及验收文件 + 近一年第三方环境监测报告", required: true },
      { name: "一般工业固废台账与综合利用去向证明", required: true },
      { name: "「信用中国」报告 + 国家企业信用信息公示系统查询结果（负面清单核查）", required: true, basis: { name: "13 号文第十五条（负面清单）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_aab179dea60b4b77a05070e796c4c994.html" } },
      { name: "分布式光伏/绿电购买合同等可再生能源佐证", required: false, note: "申报前已建设或购买绿电的提供，属评分加分" },
      { name: "绿色设计/生态设计、绿色供应链管理佐证", required: false, note: "属提高性要求，有则提供" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "申报全程线上：登录工业节能与绿色发展管理平台（green.miit.gov.cn）自主填报申报表并完成自评价，导出上报材料纸质版报送属地工信部门；2025 年度起不再要求提交第三方评价报告（工信厅节函〔2025〕390 号）",
      "年度节奏：各省 3-6 月组织申报，省级每年 7 月 31 日前将省层面绿色工厂择优推荐至工信部，工信部组织专家评审、公示 15 日（13 号文第十二条）；各地市截止通常早于省级（以属地通知为准）",
      "53 个重点行业按对应行业评价要求自评价，其他行业按 GB/T 36132-2025 通则自评价（390 号文）",
      "自愿申报、全程免费；管理平台提供申报政策解读和填报说明视频；不委托任何机构代理申报",
      "获评后动态管理：每年 4 月 15 日前通过管理平台填报动态管理表（13 号文第十六条），得分连续三年处于后 5% 的从名单移出（390 号文）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：负面清单六项拆为可三态判定的独立条件（原合并为一条），新增「已纳入省层面绿色工厂名单」梯度培育前置硬条件，全部条件补 evidence，新增 materials 官方材料清单与 diagNotes；申报方式更新——2025 年度起不再要求第三方评价报告", basis: "13 号文第十条、第十五条 · 工信厅节函〔2025〕390 号" }
    ],
    changesTitle: "2026 新标准变化要点",
    changesNote: "自 2026 年度申报起按新版标准评价，逐条有官方依据",
    changes: [
      "评价标准换版：《绿色工厂评价通则》GB/T 36132-2025 于 2025-12-31 实施，2026 年度申报按新标准评价（国家标准发布信息）",
      "指标体系重构：「新五化」一级指标——能源低碳化、资源高效化、生产洁净化、产品绿色化、用地集约化，定量指标权重占比高达 60%",
      "评分方式优化：引入「基准值/引领值」量化评分，企业实际数据与基准值/引领值对比得出分数",
      "梯度培育机制：国家/省/市三级逐级推荐，国家级申报须先纳入省层面名单（13 号文第七条、第十一条）",
      "申报方式调整（2025 年度起）：管理平台自主填报自评价，不再要求提交第三方评价报告（工信厅节函〔2025〕390 号）",
      "时间节奏：省级每年 7 月 31 日前推荐至工信部，国家组织专家评审、公示 15 日（13 号文第十二条）",
      "动态管理「有进有出」：获评后每年 4 月 15 日前填报动态管理表；得分连续三年后 5% 移出名单；2025 年度名单移出 132 家（13 号文第十六条、97 号文、390 号文）",
      "绿色金融支持：绿色工厂可享绿色信贷、绿色债券等融资支持（2025-11-20 工信部办公厅与央行办公厅通知）"
    ],
    tips: "2026 年度起按新标准 GB/T 36132-2025 评价：新五化指标体系、定量指标权重占比高达 60%，核心还是一个字——省。对照「基准值/引领值」逐项打分，建议用单位产品指标而非总量指标做申报数据——总量指标会因产能波动被评审老师扣分。申报前先确认自己是「省层面绿色工厂名单」成员——国家级申报由省级择优推荐，广东企业还要先过市级遴选这一关。申报方式（2025 年度起）：管理平台自主填报自评价即可，不再要求第三方评价报告，评价费用门槛降低。获评不是终点：每年 4 月 15 日前填报动态管理表，得分连续三年后 5% 移出名单（2025 年度名单移出 132 家）。排污许可证是最基础的合规门槛，缺证直接一票否决；质量/环境/能源/职业健康安全四体系管理认证是通则第 6 章基本要求；负面清单六项（未正常经营、事故偷漏税、被动态调整、督查问题、节能监察未整改、失信被执行人）逐项自查，一票否决。"
  },
  {
    id: "battery",
    order: 5,
    column: "green",
    name: "动力电池回收白名单（新能源汽车废旧动力电池综合利用行业规范条件）",
    issuingBody: "工信部",
    level: "国家级",
    deadline: "自愿申请制、无固定批次：企业编制《综合利用行业规范公告申请书》经工业节能与绿色发展管理平台提交，省级工信部门核实后报工信部，工信部组织专家复审、公示无异议后公告（42 号公告监督管理条款）。2026-07-30 起仅再生利用企业可申请（20 号公告废止梯次利用条款）",
    is_rolling: true,
    effort: "Medium",
    updated: "2026-08-02",
    alert: {
      level: "danger",
      text: "2026-07-30 工信部第 20 号公告：废止《综合利用行业规范条件（2024 年本）》「梯次利用」条款，不再开展「梯次利用」企业公告管理，100 家梯次利用企业已移出名单；仅再生利用企业可申请公告，废旧动力电池不得用于电动自行车等禁止领域（73 号令第二十二条）。",
      link: "https://wap.miit.gov.cn/jgsj/jns/gzdt/art/2026/art_32f208d1a4854de7ac0126039d21a5bd.html",
      linkLabel: "查看第 20 号公告原文"
    },
    source: { name: "《新能源汽车废旧动力电池综合利用行业规范条件（2024 年本）》（工信部公告 2024 年第 42 号）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" },
    notice: { name: "《新能源汽车废旧动力电池回收和综合利用管理暂行办法》（六部门令第 73 号，国务院公报）", url: "https://www.gov.cn/gongbao/2026/issue_12686/202604/content_7066104.html", timeline: "2026-04-01 施行，同时废止 43 号文（2018 回收利用管理暂行办法）、35 号公告（溯源管理暂行规定）、46 号公告（回收服务网点指南）、114 号文（梯次利用管理办法）；2026-07-30 第 20 号公告废止梯次利用条款、100 家梯次利用企业移出名单，已公告再生利用企业名单继续有效" },
    summary: "工信部对动力电池综合利用企业的行业引导性公告名单（俗称「白名单」）：企业自愿申请、审核通过后公告（42 号公告规范条件总则（四）明确定位为「引导性文件，不具有行政审批的前置性和强制性」）——白名单不是强制准入。现行监管框架（73 号令第十八条）强制的是合规手续：办理投资核准/备案、完成环评、取得排污许可，未办理不得从事综合利用活动；上游企业回收的废旧动力电池须交由依法设立的综合利用企业（第十九条）。入选白名单的实际价值：地方奖励挂钩（如福建每家一次性 20 万 + 按回收量 1000 元/吨即约 6.6 元/kWh 补助最高 1000 万；成都再生利用按年度采购金额 5% 奖励最高 100 万，均以当地现行政策为准）+ 供应链回收渠道的合作背书；且违规受行政处罚后两年内不得申报公告（73 号令第四十二条）。硬门槛（42 号规范条件）：独立法人、投产 1 年及以上、注册资本 ≥1000 万（实缴 ≥500 万）、再生利用产能原则上 ≥5000 吨/年、铜铝回收率 ≥98%、电极粉料回收率 ≥98%、锂 ≥90%、镍钴锰 ≥98%、溯源系统接入全国新能源汽车动力电池溯源信息平台。⚠️ 2026-07-30 起「梯次利用」条款废止，仅再生利用（拆解、破碎、分选、冶炼）可申请。",
    subsidy: "无中央统一资金补贴。入选白名单后可享地方奖励（以当地现行政策为准）：福建每家一次性 20 万 + 按回收量 1000 元/吨（约 6.6 元/kWh）补助、单家最高 1000 万（闽工信规〔2024〕6 号）；成都再生利用按年度废旧动力电池采购金额 5% 奖励、年度最高 100 万（要求列入白名单或省市级示范企业名单）。",
    applicableIndustries: ["新能源与节能","资源与环境","汽车","先进制造与自动化"],
    conditions: [
      {
        category: "基础合规",
        items: [
          { name: "在中国境内注册、独立法人", required: true, weight: 3, description: "42 号公告规范条件监督管理：以具备独立法人资格的企业为申请主体；集团公司旗下具有独立法人资格的子公司需单独申请", basis: { name: "42 号公告规范条件（监督管理）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "企业营业执照副本 + 注册资本与实缴资本证明（章程/验资报告）" },
          { name: "已投产 1 年以上", required: true, weight: 2, description: "42 号公告规范条件监督管理：企业申报时应投产 1 年及以上", basis: { name: "42 号公告规范条件（监督管理）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "投产时间证明（环评验收文件、运行记录、投产日期说明）" },
          { name: "近三年无较大及以上安全事故", required: true, weight: 3, veto: true, description: "42 号公告规范条件第六章安全生产：近三年未发生较大及以上安全事故；73 号令第四十二条：违规受行政处罚后两年内不得申报公告、已列入的予以撤销", basis: { name: "42 号公告规范条件（安全生产）· 73 号令第四十二条", url: "https://www.gov.cn/gongbao/2026/issue_12686/202604/content_7066104.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "已办理投资核准/备案、环评并取得排污许可", required: true, weight: 3, veto: true, description: "73 号令第十八条：未依法办理投资核准或者备案手续、完成环境影响评价、建设配套环保安全设施并取得排污许可（或办理排污登记）的，不得从事废旧动力电池综合利用活动", basis: { name: "73 号令第十八条", url: "https://www.gov.cn/gongbao/2026/issue_12686/202604/content_7066104.html" }, autoMatch: "emission", rule: v => v === "是", evidence: "投资核准/备案文件 + 环评批复及验收文件 + 排污许可证（或排污登记回执）" }
        ]
      },
      {
        category: "技术能力",
        items: [
          { name: "具备再生利用产业化工艺能力", required: true, weight: 3, description: "42 号公告规范条件再生利用企业要求：具备安全拆解机械化作业平台及湿法、火法或材料修复等产业化工艺；应兼顾处理电动自行车废锂离子电池等（梯次利用条款已于 2026-07-30 废止）", basis: { name: "42 号公告规范条件（再生利用企业要求）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "工艺设备清单、拆解机械化作业平台与产线运行记录" },
          { name: "产能原则上不低于 5000 吨/年", required: true, weight: 3, description: "42 号公告规范条件综合利用能力通用要求：再生利用企业产能原则上不低于 5000 吨/年；注册资本不少于 1000 万元、实缴资本不少于 500 万元（梯次利用产能要求已随 2026 年第 20 号公告废止）", basis: { name: "42 号公告规范条件（综合利用能力）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "产能设计文件（环评批复产能/备案产能）+ 近一年实际处理量数据" },
          { name: "主要金属回收率达标", required: true, weight: 3, description: "42 号公告规范条件再生利用企业要求：铜、铝回收率不低于 98%，电极粉料回收率不低于 98%，锂回收率不低于 90%，镍、钴、锰回收率不低于 98%；碳酸锂生产综合能耗低于 2200 千克标准煤/吨", basis: { name: "42 号公告规范条件（再生利用企业要求）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "回收率检测报告或第三方验证数据（铜/铝/电极粉料/锂/镍钴锰逐项）" },
          { name: "原料来源合法（供应商管理）", required: true, weight: 2, description: "42 号公告规范条件社会责任：加强供应商管理，确保原料来源合法；不得接收来源不明废旧动力电池", basis: { name: "42 号公告规范条件（社会责任）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "供应商管理制度 + 原料采购台账与来源证明" }
        ]
      },
      {
        category: "环保合规",
        items: [
          { name: "废水/废气/噪声达标排放", required: true, weight: 3, description: "73 号令第十八条 + 42 号公告规范条件环境保护：执行环评制度与「三同时」要求，取得排污许可证，排放符合相关标准；需提供近一年第三方检测报告", basis: { name: "73 号令第十八条 · 42 号公告规范条件（环境保护）", url: "https://www.gov.cn/gongbao/2026/issue_12686/202604/content_7066104.html" }, autoMatch: "emission", rule: v => v === "是", evidence: "近一年第三方环境检测报告（废水/废气/噪声逐项）" },
          { name: "一般工业固废和危废依法处置", required: true, weight: 3, description: "42 号公告规范条件环境保护：贮存设施符合相关污染控制标准，危废交有资质单位处置并保留转移联单；再生利用企业定期开展清洁生产审核", basis: { name: "42 号公告规范条件（环境保护）", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" }, evidence: "危废处置合同与转移联单 + 清洁生产审核报告 + 固废贮存设施说明" },
          { name: "建立完整的溯源管理体系", required: true, weight: 2, description: "73 号令第四条：全国新能源汽车动力电池溯源信息平台，全生命周期流向监控；第二十四条（七）：综合利用企业接收废旧动力电池后 30 日内报送入库信息、综合利用产品移交出库后 30 日内报送出库信息", basis: { name: "73 号令第四条、第二十四条", url: "https://www.gov.cn/gongbao/2026/issue_12686/202604/content_7066104.html" }, evidence: "溯源系统接入证明（全国新能源汽车动力电池溯源信息平台）+ 30 日入库/出库报送记录" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 42 号公告监督管理（一）申请流程 + 73 号令合规手续）
    materials: [
      { name: "《新能源汽车废旧动力电池综合利用行业规范公告申请书》（42 号公告附 1）", required: true, basis: { name: "42 号公告监督管理（一）2", url: "https://www.miit.gov.cn/jgsj/jns/wjfb/art/2024/art_a05ad4164f20482088a97fcbff80b987.html" } },
      { name: "通过「工业节能与绿色发展管理平台」（green.miit.gov.cn）提供的相关材料", required: true },
      { name: "企业营业执照、注册资本与实缴资本证明", required: true, note: "注册资本不少于 1000 万元、实缴不少于 500 万元" },
      { name: "投资核准/备案文件 + 环评批复及验收文件 + 排污许可证", required: true, note: "73 号令第十八条合规手续，未办理不得从事综合利用活动" },
      { name: "主要金属回收率检测/第三方验证报告", required: true, note: "铜铝 ≥98%、电极粉料 ≥98%、锂 ≥90%、镍钴锰 ≥98%" },
      { name: "投产 1 年以上证明（环评验收文件与运行记录）", required: true },
      { name: "溯源系统接入证明与 30 日入库/出库报送记录", required: true },
      { name: "危废处置合同与转移联单、安全生产设施佐证", required: true },
      { name: "供应商管理与原料来源台账", required: true },
      { name: "上年度《规范条件执行情况和企业发展年度报告》（42 号公告附 2）", required: false, note: "已公告企业每年第一季度结束前通过管理平台提交" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "自愿申请：编制《综合利用行业规范公告申请书》经「工业节能与绿色发展管理平台」提交 → 省级工信主管部门核实并出具审核意见 → 工信部组织专家复审和现场核查 → 公示无异议后公告（42 号公告监督管理（一））",
      "已公告企业每年第一季度结束前通过管理平台提交上年度《年度报告》（附 2）；不能保持规范条件、不按要求提交年度报告、报送材料弄虚作假、拒绝接受监督检查、主体生产设备连续 2 年关停或开工负荷不足 10% 的责令限期整改，1 年整改不到位撤销公告",
      "被撤销公告的企业原则上自整改完成之日起 2 年后方可重新提出申请；发生一般及以上安全、环保等事故，或严重违反法律法规的，撤销公告",
      "2026-07-30 起仅再生利用企业可申请公告（第 20 号公告废止梯次利用条款）；废旧动力电池不得用于电动自行车等禁止领域（73 号令第二十二条）",
      "白名单为自愿申请的行业引导性公告；73 号令第十八条的合规手续（投资核准/备案 + 环评 + 排污许可）是强制底线，未办理不得从事综合利用活动"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：全部条件补 evidence（工艺/回收率/环保/溯源佐证），新增 materials（42 号公告申请书 + 平台材料 + 合规手续证明）与 diagNotes（申请流程、年度报告、撤销与重新申请规则）", basis: "42 号公告监督管理（一）· 73 号令第十八条" }
    ],
    changesTitle: "2026 监管框架变化要点",
    changesNote: "73 号令 + 第 20 号公告落地，逐条有官方依据",
    changes: [
      "定位更正：白名单为行业引导性公告、自愿申请，非强制准入（42 号公告规范条件总则（四）：「引导性文件，不具有行政审批的前置性和强制性」）",
      "新监管框架：73 号令（六部门令）2026-04-01 施行，废止 43 号文等 4 件旧规；强制的是合规手续——投资核准/备案 + 环评 + 排污许可，未办理不得从事综合利用（第十八条）",
      "梯次利用废止：20 号公告（2026-07-30）废止梯次利用条款、100 家梯次利用企业移出名单，已公告再生利用企业名单继续有效",
      "回收率门槛（42 号规范条件）：铜铝 ≥98%、电极粉料 ≥98%、锂 ≥90%、镍钴锰 ≥98%",
      "信息报送：综合利用企业接收废旧动力电池 30 日内报入库、综合利用产品出库 30 日内报出库（73 号令第二十四条）"
    ],
    tips: "先把定位说清楚：白名单是工信部的行业引导性公告，自愿申请，不是强制准入（42 号公告规范条件原文明说「不具有行政审批的前置性和强制性」）。强制的是合规手续——投资核准/备案 + 环评 + 排污许可，办不下来谁都不能干（73 号令第十八条）。那白名单的价值在哪？① 地方奖励大多挂钩白名单（福建每家 20 万 + 按回收量最高 1000 万、成都再生利用按采购金额 5%）；② 整车厂/电池厂回收的废旧电池要「交由依法设立的综合利用企业」（73 号令第十九条），白名单是行业里最好的信任背书；③ 监管趋严后（73 号令 + 20 号公告落地），白名单企业是回收渠道和采购订单的优先选择。硬指标（42 号规范条件）：再生利用产能原则上 ≥5000 吨/年、铜铝回收率 ≥98%、锂 ≥90%、镍钴锰 ≥98%、溯源平台 30 日内入库/出库报送。注意锂回收率是 ≥90%（不是旧口径 85%），别按旧数据准备。环评+排污许可+危废处置+溯源系统四样是合规底线。申请流程：编制申请书经管理平台提交 → 省级核实 → 工信部专家复审+现场核查 → 公示公告；已公告企业每年第一季度结束前交年度报告，别漏——不交年度报告会限期整改，1 年整改不到位撤销公告。"
  },
  {
    id: "champion",
    order: 8,
    column: "zjt",
    name: "制造业单项冠军企业认定",
    issuingBody: "工信部",
    level: "国家级",
    deadline: "原则上每年 1 次；国家级遴选 2025-2026 暂无新通知（以工信部公告为准）",
    effort: "Heavy",
    updated: "2026-08-01",
    source: { name: "《制造业单项冠军企业认定管理办法》（工信部政法〔2023〕138 号）", url: "http://gxj.anshan.gov.cn/html/GXJ/202310/0169830047576117.html" },
    notice: { name: "《关于开展 2024 年制造业单项冠军企业遴选认定和复核评价工作的通知》（工信厅政法函〔2024〕328 号）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_af92d3d91e2342cd91b2221c9348580b.html", timeline: "最近一次国家级遴选（2024 年）：培育平台 excellent-ent.cn 线上填报，2024-10-27 前报送；2025 年起暂无国家级遴选新通知" },
    summary: "制造业细分领域的天花板级荣誉：单项产品（生产性服务）市场占有率全球前 3。硬门槛（138 号文附件 1）：从事细分领域 ≥10 年（新产品 ≥5 年）、近 3 年平均主营收入 ≥4 亿元（省级以上专精特新可降至 2 亿）、申请产品市占率全球前 3、生产技术或工艺国际先进。专精特新「小巨人」企业可优先推荐——从梯度培育链条走向顶层的官方通道。原则上每年认定一次，证书有效期 3 年，有效期内每年 5 月 31 日前在培育平台更新企业信息。国家级遴选 2025-2026 年暂无新通知，申报安排以工信部公告为准。",
    subsidy: "无中央统一资金奖补；部分省市对国家级/省级单项冠军给予一次性奖励（50-100 万元级，各地不一，以属地政策为准）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工"],
    conditions: [
      {
        category: "基础合规（138 号文第十三条动态管理口径）",
        items: [
          { name: "境内注册、独立法人", required: true, weight: 3, description: "未被列入经营异常名录或严重失信主体名单（第十三条动态管理口径：严重失信撤销认定）", basis: { name: "138 号文第十三条", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "企业营业执照副本（统一社会信用代码）" },
          { name: "未被列入经营异常名录或严重失信主体名单", required: true, weight: 2, description: "138 号文第十三条：严重失信等违法违规行为经核实后撤销认定，3 年内不得再次申报；以「信用中国」和「国家企业信用信息公示系统」为准", basis: { name: "138 号文第十三条", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "产品不属于国家禁止、限制或淘汰类", required: true, weight: 2, description: "主导产品（生产性服务）合规", basis: { name: "138 号文附件 1（认定标准）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "主导产品（生产性服务）情况说明" },
          { name: "近 3 年无重大安全/质量/环境事故、严重失信、偷漏税及数据造假", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "138 号文第十三条：发生重大安全（含网络安全、数据安全、安全保密）、质量、环境污染等事故，或严重失信、偷漏税等违法违规行为，或数据造假，经核实后撤销认定、3 年内不得再次申报", basis: { name: "138 号文第十三条", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "「信用中国」报告 + 国家企业信用信息公示系统查询结果 + 事故情况自检说明" }
        ]
      },
      {
        category: "认定标准（138 号文附件 1，专业发展/市场竞争/自主创新/经营管理）",
        items: [
          { name: "从事细分领域 ≥10 年（新产品 ≥5 年）", required: true, weight: 3, autoMatch: "segYears", rule: v => v === ">10年" ? true : v === "5-10年" ? undefined : false, description: "附件 1 专业发展 1：截至上年末从事相关领域时间达到 10 年及以上，属于新产品的应达到 5 年及以上；选「5-10 年」档时无法区分新产品 ≥5 年场景，需人工核实", basis: { name: "138 号文附件 1（专业发展 1）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "从事相关领域年限说明（细分市场界定与经营起始时间，以审计报告等佐证）" },
          { name: "近 3 年平均主营收入 ≥4 亿元", required: true, weight: 3, autoMatch: "revenue", rule: v => v === ">4亿", description: "附件 1 专业发展 2：近 3 年平均主营业务收入须达到 4 亿元及以上；表单按 >4 亿档从严判定（省级以上专精特新可降至 2 亿需人工核实）", basis: { name: "138 号文附件 1（专业发展 2）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "近 3 年年度审计报告（主营业务收入数据）" },
          { name: "申请产品市占率全球前 3 位", required: true, weight: 3, description: "附件 1 市场竞争 1：申请产品（生产性服务）市场占有率位居全球前 3 位；按《统计用产品分类目录》8 位或 10 位代码界定，需权威佐证（行业协会/海关数据等）", autoMatch: "marketShare", rule: v => v === "全球前3" ? true : v === "国内前三或≥10%" || v === "较为靠前" || v === "一般" ? false : undefined, basis: { name: "138 号文附件 1（市场竞争 1）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "细分市场界定与全球市占率佐证（行业协会、海关数据、咨询机构报告等权威来源，注明口径与出处）" },
          { name: "生产技术或工艺国际先进", required: true, weight: 2, description: "附件 1 市场竞争 2：申请产品质量精良，生产技术或制造工艺国际先进，关键性能指标处于国际同类产品领先水平，主导产品能耗达到行业能耗限额标准先进值", basis: { name: "138 号文附件 1（市场竞争 2）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "关键性能指标与国际同类产品对比说明 + 能耗数据（行业能耗限额先进值对照）" },
          { name: "拥有高水平研发机构与核心自主知识产权", required: true, weight: 2, description: "附件 1 自主创新 1、2：拥有高水平研发机构，研发投入强度行业领先；拥有核心自主知识产权，国际、国内专利数量行业领先", basis: { name: "138 号文附件 1（自主创新 1、2）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "研发机构设立文件与研发投入数据 + 核心知识产权证书及专利清单" },
          { name: "科技成果转化成效明显（知产实际应用产生经济效益）", required: false, weight: 1, description: "附件 1 自主创新 3：科技成果转化成效明显，相关知识产权已实际应用并产生经济效益", basis: { name: "138 号文附件 1（自主创新 3）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "知识产权应用与效益说明（产品收入对应关系）" },
          { name: "重视国际化经营和品牌战略（国际业务收入行业领先）", required: false, weight: 1, description: "附件 1 市场竞争 3：重视并实施国际化经营和品牌战略，国际业务收入行业领先，全球资源配置能力强", basis: { name: "138 号文附件 1（市场竞争 3）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "国际业务收入数据、海外布局与品牌注册佐证" },
          { name: "经营业绩优秀（主营收入或利润行业领先）", required: false, weight: 1, description: "附件 1 经营管理 1：经营业绩优秀，主营业务收入或利润行业领先", basis: { name: "138 号文附件 1（经营管理 1）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "近 3 年审计报告（主营收入、利润与行业对比）" },
          { name: "主导或参与制定国际/国家/行业标准", required: false, weight: 2, description: "附件 1 自主创新 2：主导或参与制定国际、国家和行业标准（加分项：参与国家重大创新平台、强链补链行动、卡脖子技术攻关等）", basis: { name: "138 号文附件 1（自主创新 2）", url: "http://jyh.huangshi.gov.cn/pub/hsjxj/cyks/cyzck/cyzckwjfb/202309/t20230927_1054867.html" }, evidence: "标准文本（起草单位排序）或参与证明" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 328 号文报送要求 + 申请书附件 1 佐证项；申请书线上填报后线下纸质一致报送）
    materials: [
      { name: "制造业单项冠军企业申请书（培育平台 excellent-ent.cn 填报下载，申请企业加盖公章与骑缝章）", required: true, basis: { name: "工信厅政法函〔2024〕328 号", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2024/art_af92d3d91e2342cd91b2221c9348580b.html" } },
      { name: "企业营业执照副本", required: true },
      { name: "近 3 年年度审计报告（主营业务收入数据）", required: true },
      { name: "市场占有率全球前 3 位佐证材料", required: true, note: "行业协会、海关数据、咨询机构报告等权威来源，注明统计口径与数据出处" },
      { name: "核心自主知识产权清单及证书", required: true },
      { name: "研发机构与研发投入佐证", required: true },
      { name: "参与制定国际/国家/行业标准佐证", required: false },
      { name: "质量管理体系认证、产品认证等经营管理佐证", required: false },
      { name: "国际化经营与品牌战略佐证", required: false },
      { name: "重点领域（附件 3）佐证", required: false, note: "属重点领域的企业优先推荐，附领域对应说明" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示）
    diagNotes: [
      "报送方式：培育平台（excellent-ent.cn）线上填报 + 线下纸质报送，线上线下材料应保持一致；申请书纸质版加盖公章与骑缝章，佐证材料扫描电子版（光盘）一并报送（328 号文）",
      "省级推荐名额有上限（328 号文附件 2），重点领域（附件 3）企业优先推荐；2024 年批次 10 月 27 日前报送，2025 年起暂无国家级遴选新通知，以工信部公告为准",
      "申请不收取任何费用、没有特殊通道或捷径；填写内容为生产经营数据，无需第三方机构辅助（328 号文），谨防不良机构散播虚假信息非法牟利",
      "有效期内每年 5 月 31 日前通过培育平台更新企业信息，经提示仍未更新的取消复核资格（138 号文第十一条）",
      "证书有效期 3 年，到期由工信部组织复核（含实地抽查），通过延长 3 年（138 号文第十条）；发生重大变化（更名/分立/合并/重组等）3 个月内报告（第十二条）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：基础合规拆出「未被列入经营异常/严重失信」独立条件并对齐 138 号文第十三条，认定标准按附件 1 补齐科技成果转化/国际化经营/经营业绩等评价维度，全部条件补 evidence/basis，新增 materials（328 号文报送要求）与 diagNotes", basis: "138 号文附件 1 · 工信厅政法函〔2024〕328 号" }
    ],
    tips: "链条顶层，通常是从小巨人成长 3-5 年后的目标（138 号文明确小巨人优先推荐）。国家级遴选 2025 年起暂无新通知，申报安排务必以工信部最新公告为准，谨防不良中介。各省有省级单项冠军认定（标准低于国家级，如市占率国内领先即可），可先冲省级。市占率全球前 3 需要严谨的第三方佐证，不要凭感觉填报——按《统计用产品分类目录》8 位或 10 位代码界定细分市场，数据注明口径与出处。申报填写内容为生产经营数据，无需第三方机构辅助，申请不收费、无特殊通道。证书有效期 3 年，每年 5 月 31 日前要在培育平台更新企业信息，否则取消复核资格。"
  },
  {
    id: "keygiant",
    order: 9,
    column: "zjt",
    name: "重点「小巨人」企业（中央财政支持专精特新中小企业）",
    issuingBody: "财政部 · 工业和信息化部",
    level: "国家级",
    deadline: "2024-2026 三年分三批次；第三批（2026 年度）遴选推荐已于 2026 年上半年完成（广东 2026-02-09 启动、3 月上旬省级评审），本批次申报窗口已结束、入选企业进入三年实施期；后续支持以工信部最新通知为准",
    effort: "Medium",
    updated: "2026-08-02",
    source: { name: "《财政部 工业和信息化部关于进一步支持专精特新中小企业高质量发展的通知》（财建〔2024〕148 号）", url: "https://www.miit.gov.cn/jgsj/qyj/bszn/art/2024/art_afa307276f6e40e58b8bc651b1d4cf32.html" },
    notice: { name: "《广州市工业和信息化局关于做好新一轮第三批重点「小巨人」企业遴选推荐工作的通知》（2026-02-12）", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html", timeline: "第三批遴选推荐：广东 2026-02-09 发文（粤工信融资函〔2026〕5 号），广州 2026-02-12 发文，各区 2026-03-06 前报送，工信部 3 月上旬完成省级评审；预申报（摸底）为 2026-01-25 前（广州 gxj.gz.gov.cn/content/post_10609188）。本批次已结束，下一轮以工信部最新通知为准" },
    summary: "从有效期内「小巨人」企业中择优支持：聚焦重点产业链、工业「六基」、战略性新兴产业与未来产业领域，由地方工信部门按名额评审推荐（推荐制，企业不能直接申报）。申报要件（财建〔2024〕148 号）：提出「三新一强」推进计划（打造新动能、攻坚新技术、开发新产品、强化产业链配套），推进计划投资总额超过 2000 万元（设备购置、研发投入、产学研建设、人才引育等；土地购置与厂房建设费用不计入）。中央财政奖补：每家企业连续支持三年、合计最高 600 万元（实施期初下达 50%，实施期末按绩效评价情况下达剩余 50%），95% 以上直达企业；投资未达 2000 万元收回资金。政策周期 2024-2026 年、分三批次开展；第三批（2026 年度）遴选推荐已于 2026 年上半年完成。",
    subsidy: "中央财政综合奖补：600 万元/家·三年（分两次下达、绩效挂钩），95% 以上直达企业",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工"],
    conditions: [
      {
        category: "申报资格（须全部满足，148 号文 + 2026 第三批要求）",
        items: [
          { name: "工信部认定的有效期内专精特新「小巨人」企业", required: true, weight: 3, autoMatch: "level", rule: v => v >= 3, description: "已获「小巨人」认定且证书在有效期内（广州第三批通知申报对象）", basis: { name: "财建〔2024〕148 号 · 广州第三批通知", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html" }, evidence: "「小巨人」证书或培育平台认定信息截图" },
          { name: "未在境内外公开发行股票", required: true, weight: 2, autoMatch: "listed", rule: v => v === "未上市" ? true : v === "已上市" ? false : undefined, description: "未在上交所、深交所、北交所，以及境外公开发行股票（广州第三批通知申报对象）", basis: { name: "广州第三批通知申报对象", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html" }, evidence: "上市状态自检说明（证券代码/股权结构核查）" },
          { name: "未获过前轮支持", required: true, weight: 2, description: "财建〔2021〕2 号文（上一轮）及新一轮第一、二批已获支持的「小巨人」不再重复支持（2026 第三批口径）", basis: { name: "广州第三批通知申报对象", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html" }, evidence: "历史获支持情况自检说明（前轮支持名单核对）" },
          { name: "未列入经营异常名录、严重失信主体名单，近三年无重大违法违规行为", required: true, weight: 2, autoMatch: "accident", rule: v => v === "无", description: "2026 年第三批遴选明确要求；以信用中国、国家企业信用信息公示系统查询结果为准", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" }
        ]
      },
      {
        category: "申报要件——「三新一强」推进计划（财建〔2024〕148 号）",
        items: [
          { name: "提出「三新」「一强」推进计划", required: true, weight: 5, autoMatch: "invest", rule: v => v === "已编制且>2000万" ? true : v === "未编制或不足" ? false : undefined, description: "打造新动能、攻坚新技术、开发新产品、强化产业链配套；可覆盖单个或多个方面，须分别提出绩效目标（广州第三批通知支持内容）", basis: { name: "财建〔2024〕148 号 · 广州第三批通知", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html" }, evidence: "「三新一强」推进计划文本（绩效目标与投资安排）" },
          { name: "主导产品/业务聚焦重点领域", required: true, weight: 3, description: "重点产业链、工业「六基」及战略性新兴产业、未来产业领域（148 号文称「重点领域」）；与培育规划六基筛选项口径略有差异，需人工确认", basis: { name: "财建〔2024〕148 号", url: "https://www.miit.gov.cn/jgsj/qyj/bszn/art/2024/art_afa307276f6e40e58b8bc651b1d4cf32.html" }, evidence: "主导产品所属重点领域对应说明" },
          { name: "推进计划投资总额超过 2000 万元", required: true, weight: 5, autoMatch: "invest", rule: v => v === "已编制且>2000万" ? true : v === "未编制或不足" ? false : undefined, description: "土地购置与厂房建设费用不计入；投资未达 2000 万元将被收回奖补资金", basis: { name: "财建〔2024〕148 号", url: "https://www.miit.gov.cn/jgsj/qyj/bszn/art/2024/art_afa307276f6e40e58b8bc651b1d4cf32.html" }, evidence: "推进计划投资测算表（设备购置、研发投入、产学研建设、人才引育等分项）" },
          { name: "投资方向合规且计划可实施", required: true, weight: 3, description: "投资用于设备购置、研发投入、产学研建设、人才引育等；计划须具体可行、有操作性，年度投资安排合理有序", basis: { name: "财建〔2024〕148 号", url: "https://www.miit.gov.cn/jgsj/qyj/bszn/art/2024/art_afa307276f6e40e58b8bc651b1d4cf32.html" }, evidence: "年度投资安排与实施计划说明" }
        ]
      },
      {
        category: "加分项（非硬性门槛，省级评审佐证材料）",
        items: [
          { name: "主持（参与）制修订标准", required: false, weight: 1, description: "国家标准、行业标准、团体标准等，佐证行业话语权", evidence: "标准文本（起草单位排序）" },
          { name: "通过管理体系认证", required: false, weight: 1, description: "如 ISO9001 质量管理体系、ISO14001 环境管理体系等", evidence: "体系认证证书" },
          { name: "产品通过国际认证", required: false, weight: 1, description: "如 CE、UL、FCC 等国际权威认证", evidence: "产品认证证书" },
          { name: "已实际应用的有效发明专利（含「补短板」「填空白」成果）", required: false, weight: 1, description: "专利须实际应用并产生效益；主导产品「补短板」「填空白」情况是省级评审重要佐证", evidence: "已实际应用的有效发明专利清单和证书" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据广州第三批通知官方 11 项清单；信息表+佐证按顺序装订成册）
    materials: [
      { name: "企业信息表（含「三新」「一强」推进计划，作为信息表附件一并装订）", required: true, note: "3 份（1 份信息表 + 1 份佐证材料按顺序装订成册）", basis: { name: "广州第三批通知三、申报材料", url: "https://gxj.gz.gov.cn/zzzq/xmzj/content/post_10690028.html" } },
      { name: "企业营业执照", required: true },
      { name: "2023、2024、2025 年年度审计报告", required: true, note: "内容需包含营业收入、主营业务收入、销售费用、管理费用、主营业务成本、净利润总额、资产总额、负债总额、研发费用等" },
      { name: "2023、2024、2025 年 12 月底社保缴纳人数证明", required: true },
      { name: "主持（参与）制修订国际、国家、行业标准情况", required: true },
      { name: "企业管理体系认证情况", required: true },
      { name: "产品通过发达国家和地区产品认证情况", required: true },
      { name: "已实际应用的有效发明专利清单和证书情况", required: true },
      { name: "主导产品「补短板」「填空白」情况", required: true },
      { name: "与行业龙头企业协同创新、技术先进性情况", required: true },
      { name: "产业链配套、强链补链稳链作用情况", required: true }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（推荐制流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "推荐制专项：先参加地方预申报/摸底，再由地方按分配名额评审推荐，企业不能直接向国家申报。2026 第三批流程：企业填报 → 市级初审 → 省级评审（材料初审、专家评审答辩、实地核查）；广东 2 月 9 日启动、各区 3 月 6 日前报送，3 月上旬完成省级评审——本批次已结束",
      "企业应如实、自主申报，不得借助第三方机构申请；各区防范不良中介机构围绕申报企业谋取不当利益（广州第三批通知四（一）（二））",
      "奖补绩效挂钩：实施期初下达 50%、实施期末按绩效评价情况下达剩余 50%；推进计划投资未达 2000 万元的收回资金——投资计划务必可兑现，不要虚报",
      "2024-2026 三年三批次申报已全部结束，入选企业处于三年实施期；下一轮支持以工信部最新通知为准，谨防不良中介借新批次名义行骗"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「属地遴选与申报材料」类 2 条流程条件移出 conditions（推荐制流程、材料清单分别进 diagNotes/materials），申报资格与推进计划要件全部补 evidence/basis，新增 materials（广州第三批通知官方 11 项清单）与 diagNotes", basis: "财建〔2024〕148 号 · 广州第三批通知（2026-02-12）" }
    ],
    tips: "这是推荐制专项，不是公开申报：先参加地方预申报摸底，再由地方按名额评审推荐（2026 第三批流程：企业填报 → 市级初审 → 省级评审，省级环节含材料初审、专家评审答辩、实地核查）。奖补绩效挂钩：推进计划投资未达 2000 万元会被收回资金，投资计划务必可兑现——不要为拿奖补虚报投资。申报全程免费，不得委托第三方中介机构代理申报。2024-2026 三年三批次申报已全部结束，入选企业正在三年实施期；下一轮支持以工信部最新通知为准，谨防不良中介借新批次名义行骗。"
  },
  {
    id: "kjxqy",
    order: 15,
    column: "zjt",
    name: "科技型中小企业评价入库",
    issuingBody: "工信部中小企业局（2023 年机构改革后组织实施）· 评价办法制定：科技部/财政部/税务总局",
    level: "国家级",
    deadline: "2026 年度：全国系统开放 2026-06-01 至 08-31；广东分 3 批（6-8 月每月一批，批次截止=当月最后一日），8 月 31 日全面停止填报",
    effort: "Easy",
    // 2026 年度广东 3 批完整序列（2026-08-14 补全第 1/2 批；引擎只取未来批次，历史批次供数据对照与巡检）
    batches: [
      { label: "2026 年度·广东第 1 批", date: "2026-06-30" },
      { label: "2026 年度·广东第 2 批", date: "2026-07-31" },
      { label: "2026 年度·广东第 3 批（最后一批）", date: "2026-08-31" }
    ],
    updated: "2026-08-03",
    revisions: [
      { at: "2026-08-14", note: "补全 2026 年度广东 3 批申报批次（6.30 / 7.31 / 8.31，此前仅保留最后一批）", basis: "粤科函产字〔2026〕1055 号" },
      { at: "2026-08-14", note: "zct-diag 细化：原「申报要求」类 4 条流程条件移出 conditions 进 diagNotes（流程信息不计分、不设必选），全部条件补 evidence，新增 materials 与 diagNotes", basis: "160 号文 · 粤科函产字〔2026〕1055 号 · 江科〔2026〕94 号" }
    ],
    source: { name: "《科技型中小企业评价办法》（国科发政〔2017〕115 号，科技部/财政部/税务总局 2017-05-03 印发）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" },
    notice: { name: "《工业和信息化部中小企业局关于开展2026年度科技型中小企业评价工作的通知》（工企业函〔2026〕160 号）", url: "https://zjtx.miit.gov.cn/zxqySy/tzggView?id=0b50ccb0a4584f2b8878a4ec33fd1444", timeline: "2026-06-01 发布；评价系统开放 2026-06-01 至 08-31；广东转发粤科函产字〔2026〕1055 号（2026-06-08）：分 3 批（6-8 月每月一批，批次截止=当月最后一日），10 月 15 日前完成全部批次公示" },
    basis: [
      { name: "《广东省科学技术厅转发〈工业和信息化部中小企业局关于开展2026年度科技型中小企业评价工作的通知〉的通知》（粤科函产字〔2026〕1055 号）", url: "https://www.zhuhai.gov.cn/zhskjcxj/content/post_3916026.html" },
      { name: "《佛山市科学技术局关于开展2026年科技型中小企业评价工作的通知》", url: "https://fskjj.foshan.gov.cn/gkmlpt/content/7/7174/post_7174068.html" }
    ],
    summary: "国家级评价入库（非认定、无证书：进入全国科技型中小企业信息库并获入库登记编号）。入库是申报专精特新中小企业的基础（160 号文：有效期内的科技型中小企业可申报专精特新中小企业）。谁能报：境内（不含港澳台）注册居民企业 + 职工 ≤500 人、年销售收入 ≤2 亿、资产总额 ≤2 亿 + 产品服务不属于禁止/限制/淘汰类 + 上一年及当年无重大事故、未列入经营异常和严重违法失信名单。怎么过（二选一）：① 直通确认（第八条）：有效期内高企证书 / 近五年国家级科技奖励排名前三 / 省部级以上研发机构 / 近五年主导制定国际·国家·行业标准，满足任一；② 综合评价 ≥60 分（满分 100：科技人员指标 20 分 + 研发投入指标 50 分二选一 + 科技成果指标 30 分），且科技人员指标得分 ≠0（即占比 ≥10%）。2026 年度评价由工信部中小企业局组织实施（2023 年机构改革划转），登录优质中小企业梯度培育平台（zjtx.miit.gov.cn）线上填报、全流程网上办理，不得通过第三方机构申报；广东分 3 批（6-8 月每月一批）。入库编号有效期一年，每年 3 月底前须更新信息并重新自主评价。",
    subsidy: "无中央直接奖补。核心价值：研发费用加计扣除 100%（该优惠 2023 年起对全部符合条件企业普惠，非科技型中小企业专属）+ 申报专精特新中小企业的基础（160 号文）+ 部分省市对首次入库有奖励（以属地政策为准）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","消费品"],
    conditions: [
      {
        category: "基础合规（115 号文第六条，须同时满足）",
        items: [
          { name: "境内注册居民企业（不含港澳台）", required: true, weight: 3, description: "第六条（一）：在中国境内（不包括港、澳、台地区）注册的居民企业", basis: { name: "115 号文第六条（一）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "营业执照副本（统一社会信用代码）" },
          { name: "职工 ≤500 人、年销售收入 ≤2 亿、资产总额 ≤2 亿", required: true, weight: 3, autoMatch: "revenue", rule: v => { if (!v) return undefined; if (v === ">4亿") return false; if (v === "1亿-4亿") return undefined; return true; }, description: "第六条（二）：表单营收「>4 亿」明确超 2 亿上限判不满足；「1 亿-4 亿」跨 2 亿分界无法精确判断，需人工核营收与职工数/资产总额（表单无职工数、资产总额字段）", basis: { name: "115 号文第六条（二）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "上年度企业所得税纳税申报表或财务报表（职工人数、销售收入、资产总额数据来源）" },
          { name: "产品和服务不属于国家禁止、限制、淘汰类", required: true, weight: 2, description: "第六条（三）：企业提供的产品和服务不属于国家规定的禁止、限制和淘汰类", basis: { name: "115 号文第六条（三）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "主导产品（服务）情况说明（对照国家产业政策目录）" },
          { name: "上一年及当年无重大事故，未列入经营异常/严重违法失信名单", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "第六条（四）：表单口径「近三年无事故」严于办法「上一年及当年」，从严判断；经营异常/严重违法失信名单需人工核验（国家企业信用信息公示系统、信用中国）", basis: { name: "115 号文第六条（四）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" }
        ]
      },
      {
        category: "评价路径（二选一：直通确认 或 综合评价 ≥60 分）",
        anyOf: true,
        paths: [
          {
            name: "直通确认（第八条，满足下列 4 项任一）",
            anyOf: true,
            items: [
              { name: "拥有有效期内高新技术企业资格证书", required: true, weight: 5, description: "第八条（一）：企业拥有有效期内高新技术企业资格证书", basis: { name: "115 号文第八条（一）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "有效期内高新技术企业证书" },
              { name: "近五年内获得国家级科技奖励且排名前三", required: true, weight: 5, description: "第八条（二）：企业近五年内获得过国家级科技奖励，并在获奖单位中排在前三名", basis: { name: "115 号文第八条（二）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "国家级科技奖励获奖证书（获奖单位排名前三）" },
              { name: "拥有经认定的省部级以上研发机构", required: true, weight: 5, description: "第八条（三）：企业拥有经认定的省部级以上研发机构", basis: { name: "115 号文第八条（三）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "省部级以上研发机构认定文件" },
              { name: "近五年内主导制定国际标准、国家标准或行业标准", required: true, weight: 5, description: "第八条（四）：企业近五年内主导制定过国际标准、国家标准或行业标准", basis: { name: "115 号文第八条（四）", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "标准文本（主导制定证明，含起草单位排序）" }
            ]
          },
          {
            name: "评分路径（综合评价 ≥60 分，且科技人员指标 ≠0 分）",
            scoreBased: true,
            minScore: 60,
            minParts: { "科技人员": 1 },
            items: [
              { name: "① 科技人员占职工总数比例", part: "科技人员", scoreOptions: [
                  { label: "A ≥30%", score: 20 }, { label: "B 25%-30%", score: 16 }, { label: "C 20%-25%", score: 12 },
                  { label: "D 15%-20%", score: 8 }, { label: "E 10%-15%", score: 4 }, { label: "F <10%", score: 0 }],
                description: "第七条科技人员指标（20 分）：按科技人员数占职工总数比例分档；10% 以下为 0 分（对应第六条（五）「科技人员指标得分不得为 0 分」，即占比须 ≥10%）；科技人员含在职、兼职、临时聘用（兼职/临时聘用全年累计工作 ≥6 个月）", basis: { name: "115 号文第七条科技人员指标", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "职工总数与科技人员名单及占比说明（科技人员含在职、兼职、临时聘用，兼职/临时聘用全年累计工作 ≥6 个月）" },
              { name: "② 研发费用占销售收入比例（或占成本费用比例，二选一）", part: "研发投入", scoreOptions: [
                  { label: "A ≥6%", score: 50 }, { label: "B 5%-6%", score: 40 }, { label: "C 4%-5%", score: 30 },
                  { label: "D 3%-4%", score: 20 }, { label: "E 2%-3%", score: 10 }, { label: "F <2%", score: 0 }],
                description: "第七条研发投入指标（50 分），两项选择其一评分：① 研发费用占销售收入比例（本表档位）；② 研发费用占成本费用支出比例：≥30% 50 分 / 25%-30% 40 / 20%-25% 30 / 15%-20% 20 / 10%-15% 10 / <10% 0，企业可择高分项；研发费用按财税〔2015〕119 号归集", basis: { name: "115 号文第七条研发投入指标", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "上年度财务报表或审计报告 + 研发费用辅助核算账目（按财税〔2015〕119 号归集口径）" },
              { name: "③ 与主要产品（服务）相关的有效知识产权", part: "科技成果", scoreOptions: [
                  { label: "A Ⅰ类 ≥1 项", score: 30 }, { label: "B Ⅱ类 ≥4 项", score: 24 }, { label: "C Ⅱ类 3 项", score: 18 },
                  { label: "D Ⅱ类 2 项", score: 12 }, { label: "E Ⅱ类 1 项", score: 6 }, { label: "F 无", score: 0 }],
                description: "第七条科技成果指标（30 分）：与主要产品（服务）相关、在有效期内、无争议或纠纷的知识产权；Ⅰ类=发明专利、植物新品种、国家级农作物品种、国家新药、国家一级中药保护品种、集成电路布图设计专有权；Ⅱ类=实用新型、外观设计、软件著作权", basis: { name: "115 号文第七条科技成果指标", url: "https://most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170510_132709.html" }, evidence: "知识产权证书（与主要产品相关、有效期内、无争议或纠纷）" }
            ]
          }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（全流程线上办理、无书面材料；按 160 号文/江门 94 号文系统上传要求）
    materials: [
      { name: "企业信息与自主评价数据（系统填报：查账征收、研发辅助账、企业研发项目、主要产品及知识产权等）", required: true, basis: { name: "江科〔2026〕94 号（江门转发）", url: "https://www.jiangmen.gov.cn/jmkjj/gkmlpt/content/3/3505/post_3505805.html" } },
      { name: "加盖企业公章的相关佐证材料（按评价系统指标要求上传 PDF）", required: true, basis: { name: "粤科函产字〔2026〕1055 号（珠海转发）", url: "https://www.zhuhai.gov.cn/zhskjcxj/content/post_3916026.html" } },
      { name: "盖章封面（自评得分 ≥60 分后上传并上报）", required: true },
      { name: "直通条件佐证（高企证书 / 国家级科技奖励 / 省部级以上研发机构认定 / 主导制定标准证明）", required: false, note: "走直通确认路径时提供（满足 4 项任一）" },
      { name: "知识产权资料（系统「获取知识产权信息」或人工新增上传）", required: true, note: "系统无法自动获取时须人工上传证书" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "2026 年度系统开放 2026-06-01 至 08-31；广东分 3 批（6-8 月每月一批，批次截止=当月最后一日），8 月 31 日全面停止填报（1055 号文）",
      "登录优质中小企业梯度培育平台（zjtx.miit.gov.cn）「科技型中小企业」评价系统注册并填报，上传加盖公章的相关佐证材料，全流程网上办理、无需书面材料（160 号文）",
      "不得通过第三方中介机构申报；弄虚作假取消本年度评价资格、三年内不得参与评价（160 号文）",
      "实地核查 5 种情形（公示前须核查）：职工 ≤5 人、知识产权 0、年度研发费用 <10 万、近三年严重违法失信或撤销入库编号、首次参评；每批次按 ≥5% 比例集中随机抽查（160 号文）",
      "入库编号有效期一年：每年 3 月底前在系统更新信息并重新自主评价（115 号办法第十一条）"
    ],
    changesTitle: "2026 年度评价要点",
    changesNote: "依据工企业函〔2026〕160 号 + 广东转发粤科函产字〔2026〕1055 号；评价条件仍按 2017 年 115 号办法执行，无门槛变化",
    changes: [
      "2023 年机构改革后评价组织实施由科技部划转工信部中小企业局，2024 年度起通知由工信部发布（2026 年度：工企业函〔2026〕160 号）",
      "2026 年度系统开放 2026-06-01 至 08-31；广东分 3 批（6-8 月每月一批，批次截止=当月最后一日），8 月 31 日全面停止填报",
      "全流程线上办理：登录优质中小企业梯度培育平台（zjtx.miit.gov.cn）填报，无需报送书面材料",
      "不得通过第三方中介机构申报；弄虚作假取消本年度评价资格、三年内不得参与评价",
      "实地核查 5 种情形（职工 ≤5 人 / 知产 0 / 年研发费用 <10 万 / 近三年严重违法失信或撤销编号 / 首次参评）；每批次按 ≥5% 比例集中随机抽查",
      "工信部企业〔2026〕2 号《优质中小企业梯度培育管理办法》第三十条：科技型与创新型合并新标准发布前，评价沿用 115 号办法 + 63 号文创新型评价细则"
    ]
  },
  {
    id: "gjsf",
    order: 17,
    column: "gjpt",
    name: "国家技术创新示范企业",
    issuingBody: "工业和信息化部（会同财政部）",
    level: "国家级",
    deadline: "原则上每年 1 次（540 号文第三章）；最近批次为 2023 年度（2023-10-30 报送截止）；2024 年度起国家层面暂无新认定通知（截至 2026-08-03，以工信部最新公告为准）",
    effort: "Heavy",
    updated: "2026-08-03",
    source: { name: "《技术创新示范企业认定管理办法（试行）》（工信部联科〔2010〕540 号，工信部/财政部 2010-09-13 印发）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" },
    notice: { name: "《工业和信息化部办公厅关于组织开展2023年国家技术创新示范企业认定及国家技术创新示范企业复核评价工作的通知》（工信厅科函〔2023〕260 号，2023-10-09 发布）", url: "https://www.miit.gov.cn/jgsj/kjs/jscx/art/2023/art_e177228281514552bffa2caf3046b3cd.html", timeline: "2023 年度（最近批次）：2023-09-21 成文 → 10-09 发布 → 10-30 材料报送截止（广东：各地市 10-20 前报省工信厅制造业创新处，广州 ≤3 家、其他地市 ≤2 家）→ 2024-01-17 公布名单：68 家新认定、248 家复核通过、5 家撤销称号（工信部科函〔2024〕7 号）。2024 年度起国家层面暂未组织新认定（截至 2026-08-03 未检索到 2024/2025/2026 年度通知与名单），申报安排以工信部最新公告为准" },
    basis: [
      { name: "《工业和信息化部关于公布2023年国家技术创新示范企业名单和国家技术创新示范企业复核评价结果的通知》（工信部科函〔2024〕7 号，2024-01-17）", url: "https://www.miit.gov.cn/threestrategy/zcgh/zcfg/art/2024/art_38e449006d9f4bd8b49e50c327a94832.html" },
      { name: "《广东省工业和信息化厅关于组织开展2023年国家技术创新示范企业认定及复核评价工作的通知》（2023-09-28）", url: "http://www.yangjiang.gov.cn/zfxxgkml/yjsgyhxxhj/gzdt/gzbg/content/post_743085.html" }
    ],
    summary: "工信部（会同财政部）认定的国家级企业创新荣誉（540 号文）：工业主要产业中技术创新能力较强、创新业绩显著、具有重要示范和导向作用的企业，原则上每年组织一次认定。认定链条与创新平台相关：申报前提之一是「已认定为省级以上企业技术中心」（第六条（三）），与省级企业技术中心、国家企业技术中心（[[国家企业技术中心]]）一脉相承。申报条件（第六条，须同时满足）：独立法人且财务管理制度健全、会计/纳税/银行信用良好；在国内建有科研、生产基地且中方拥有控制权；已认定为省级以上企业技术中心；技术创新成果通过实施技术改造取得较显著成效；生产经营规模——从业人员 ≥300 人、年销售收入 ≥3000 万元、资产总额 ≥4000 万元。认定标准（第七条六项，须同时满足）：①核心竞争能力和领先地位——掌握核心技术并具有自主知识产权、技术水平居行业领先、积极主导或参与国际/国家/行业标准制定；②持续创新能力和研发投入——研发投入占年销售收入比例 ≥3%，有健全研发机构或与大学/科研机构长期稳定合作；③行业带动作用和自主品牌；④盈利能力和管理水平——近 3 年连续盈利、财务状况良好、建有较完善的知识产权管理体系和质量保证体系；⑤应用新技术能力——积极实施技术改造、具有重大科技成果转化能力、节能减排降耗有较强示范作用；⑥创新发展战略和创新文化。程序（第三章）：企业向省级工信部门申报 → 省级联合同级财政部门审查推荐（推荐名额：省 ≤3 家、已开展省级认定的 ≤4 家，计划单列市/新疆生产建设兵团/央企各 1 家，260 号文）→ 工信部委托中介机构或组织专家初评 → 会同财政部综合审查或实地考察 → 公示 15 个工作日 → 集中认定授牌。动态管理（第四章）：每三年复核评价一次（2023 年复核：248 家通过、5 家撤销称号，工信部科函〔2024〕7 号），不合格撤销称号并摘牌；企业每年 4 月 30 日前上报上年度技术创新发展情况；弄虚作假除撤销称号外，暂停所在省（区、市、计划单列市）下一年度申报。⚠️ 时效：最近批次为 2023 年度，2024 年度起国家层面暂未组织新认定（截至 2026-08-03），以工信部最新公告为准。",
    subsidy: "无中央统一资金奖补。政策价值：国家级创新平台资质与荣誉背书（行业示范效应、招投标与融资加分）；部分省市对获评企业给予一次性奖励（如贵州：国家级 100 万元、省级 50 万元，黔经信〔2014〕52 号），以属地现行政策为准",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","建材","电力","钢铁","有色","石化","机械","消费品","高技术服务"],
    conditions: [
      {
        category: "申报基本条件（540 号文第六条，须同时满足）",
        items: [
          { name: "在中国境内注册、独立法人资格，财务管理制度健全", required: true, weight: 3, autoMatch: "type", rule: () => true, description: "第六条（一）：具有独立法人资格，财务管理制度健全；表单四种企业类型均为依法设立独立法人，此条件自动通过；会计信用、纳税信用和银行信用良好需人工核实（国家企业信用信息公示系统、信用中国）", basis: { name: "540 号文第六条（一）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "企业营业执照副本 + 财务报表或审计报告（财务管理制度健全）" },
          { name: "在国内建有科研、生产基地且中方拥有控制权", required: true, weight: 3, description: "第六条（二）；外资参股但中方控股/中方实际控制的企业通常符合，需按股权结构人工核实", basis: { name: "540 号文第六条（二）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "股权结构与科研/生产基地情况说明" },
          { name: "已认定为省级以上企业技术中心", required: true, weight: 3, description: "第六条（三）；含省级企业技术中心和国家企业技术中心（后者见政策库「国家企业技术中心」）；企业技术中心认定与有效情况需人工核实", basis: { name: "540 号文第六条（三）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "省级以上企业技术中心认定文件（含有效期）" },
          { name: "技术创新成果通过实施技术改造取得较显著成效", required: true, weight: 2, description: "第六条（四）；需提供技术改造项目与创新成果佐证材料", basis: { name: "540 号文第六条（四）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "技术改造项目立项/验收文件与创新成果佐证" },
          { name: "生产经营规模：从业人员 ≥300 人、年销售收入 ≥3000 万元、资产总额 ≥4000 万元", required: true, weight: 3, autoMatch: "revenue", rule: v => v === ">4亿" || v === "1亿-4亿" || v === "5000万-1亿" ? true : v === "2000万-5000万" ? undefined : false, description: "第六条（五）：表单营收档「2000万-5000万」跨 3000 万元分界无法精确判断，需人工核年销售收入与从业人员数、资产总额（表单无后两字段）；<500 万/500 万-2000 万明确不满足", basis: { name: "540 号文第六条（五）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "年度审计报告（销售收入、资产总额）+ 从业人员人数证明" }
        ]
      },
      {
        category: "认定基本标准（540 号文第七条，须同时满足）",
        items: [
          { name: "掌握核心技术并具有自主知识产权，技术水平居行业领先", required: true, weight: 3, autoMatch: "ipr", rule: v => v === "6-15" || v === ">15" ? true : v === "1-5" ? undefined : false, description: "第七条（一）：核心技术领先无法仅凭知产数量判定，1-5 件时需人工核实是否掌握行业领先核心技术；0 件明确不满足", basis: { name: "540 号文第七条（一）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "核心技术与自主知识产权说明（技术领先对照）+ 知识产权证书清单" },
          { name: "积极主导或参与国际、国家或行业技术标准制定", required: true, weight: 2, description: "第七条（一）；需提供标准制定佐证（标准文本、参与证明等）", basis: { name: "540 号文第七条（一）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "标准文本（起草单位排序）或参与证明" },
          { name: "研发投入占年销售收入比例 ≥3%", required: true, weight: 3, autoMatch: "rd", rule: v => v === "3%-5%" || v === "5%-8%" || v === ">8%", description: "第七条（二）：研发投入占年销售收入比例 3% 以上；以审计报告研发费用口径核实", basis: { name: "540 号文第七条（二）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "年度审计报告（研发投入与销售收入口径）" },
          { name: "建有健全研发机构或与大学/科研机构长期稳定合作", required: true, weight: 2, description: "第七条（二）；需提供研发机构设立文件或产学研合作协议", basis: { name: "540 号文第七条（二）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "研发机构设立文件或产学研合作协议" },
          { name: "在行业发展中具有较强带动性，形成有知名度的自主品牌", required: true, weight: 2, description: "第七条（三）；需提供品牌知名度佐证（商标注册、行业排名等）", basis: { name: "540 号文第七条（三）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "商标注册证、品牌知名度与行业排名佐证" },
          { name: "近 3 年连续盈利、财务状况良好", required: true, weight: 2, description: "第七条（四）；以近三年审计报告核实", basis: { name: "540 号文第七条（四）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "近三年年度审计报告（连续盈利）" },
          { name: "建有较完善的知识产权管理体系和质量保证体系", required: true, weight: 2, autoMatch: "certs", rule: v => v.includes("ISO9001"), description: "第七条（四）：ISO9001 认证可佐证质量保证体系部分，知识产权管理体系需人工核实（如贯标/知识产权管理体系认证）", basis: { name: "540 号文第七条（四）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "ISO9001 认证证书 + 知识产权管理体系认证/贯标文件" },
          { name: "积极实施技术改造，具有重大科技成果转化能力，节能减排降耗有较强示范作用", required: true, weight: 2, description: "第七条（五）；需提供技改项目、成果转化与节能降耗佐证", basis: { name: "540 号文第七条（五）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "技改项目、科技成果转化、节能降耗佐证材料" },
          { name: "把技术创新和自主品牌创新作为经营发展战略的重要内容", required: true, weight: 1, description: "第七条（六）；需提供企业发展战略与创新规划文件", basis: { name: "540 号文第七条（六）", url: "https://wap.miit.gov.cn/gyhxxhb/jgsj/kjs/wzpz/ztzl/gjjscxsfqy/tzgg/art/2020/art_1cd6b9bf44444bedb642f08a52f3eaba.html" }, evidence: "企业发展战略与技术创新规划文件" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 260 号文附件 4 + 广东转发；纸质一式两份/广东一式三份 + 光盘）
    materials: [
      { name: "《国家技术创新示范企业申报书》（含《企业基本情况表》：资产总额、负债总额、主营业务收入、新产品销售收入、上缴税金等；申报单位公章 + 推荐单位公章）", required: true, basis: { name: "广东转发 260 号文附件 4", url: "http://www.yangjiang.gov.cn/zfxxgkml/yjsgyhxxhj/gzdt/gzbg/content/post_743085.html" } },
      { name: "《企业技术创新评价指标》表（创新机制 30 分 + 技术与人才 30 分 + 产出与效益 40 分）", required: true },
      { name: "经会计师事务所审计的上年度会计报表", required: true, note: "财务数据按已审计的最近年度报表填写" },
      { name: "推荐企业汇总表（推荐单位填写，盖章正式上报）", required: true, basis: { name: "260 号文附件 3", url: "https://www.miit.gov.cn/jgsj/kjs/jscx/art/2023/art_e177228281514552bffa2caf3046b3cd.html" } },
      { name: "名称变更或重组证明材料", required: false, note: "发生更名或重组的企业提供（260 号文复核评价要求）" },
      { name: "复核评价材料（附件 5）", required: false, note: "复核评价企业适用：评价材料填报 + 必需的附件及证明材料（数据截至 2022 年底）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "名额制：各省 ≤3 家（已开展省级认定 ≤4 家），计划单列市/新疆生产建设兵团/中央企业各 1 家；广东：广州 ≤3 家、其他地市 ≤2 家，各地市 10 月 20 日前报省工信厅（制造业创新处），省属企业在注册地申报（260 号文 + 广东转发）",
      "报送方式：申请认定企业汇总表及申报材料（纸质版一式两份、电子版光盘一份；广东纸质一式三份）正式报工信部，材料收集委托机械工业信息研究院受理；2023 年度批次 10 月 30 日前报送",
      "最近批次为 2023 年度（2024-01-17 公布 68 家新认定）；2024 年度起国家层面暂未组织新认定，申报安排以工信部最新公告为准，谨防不良中介借「新年度申报」名义收费",
      "获评后动态管理：每三年复核评价一次（2023 年复核 248 家通过、5 家撤销称号），不合格撤销称号并摘牌；每年 4 月 30 日前上报上年度技术创新发展情况（540 号文第四章）",
      "弄虚作假：撤销批复文件和称号，并暂停其所在省（区、市、计划单列市）下一年度的申报工作（540 号文第四章）"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「认定程序与动态管理」类 4 条流程/义务条件移出 conditions（推荐流程、材料清单、复核评价、年度上报分别进 diagNotes/materials），申报与认定标准全部补 evidence，新增 materials 与 diagNotes", basis: "540 号文 · 260 号文附件 3/4" }
    ],
    changesTitle: "时效性说明",
    changesNote: "依据工信部联科〔2010〕540 号 + 工信厅科函〔2023〕260 号 + 工信部科函〔2024〕7 号",
    changes: [
      "最近批次为 2023 年度（2023-10-30 报送截止，2024-01-17 公布 68 家新认定名单）；2024 年度起国家层面暂未组织新认定（截至 2026-08-03 未检索到 2024/2025/2026 年度通知与名单），申报安排以工信部最新公告为准",
      "认定机制（540 号文第三章）：每年组织 1 次；申报前提之一是「已认定为省级以上企业技术中心」（第六条（三））——与省级企业技术中心、国家企业技术中心形成创新平台认定链条",
      "推荐名额（260 号文）：各省 ≤3 家（已开展省级认定的 ≤4 家），计划单列市、新疆生产建设兵团、中央企业各 1 家；广东各地市：广州 ≤3 家、其他地市 ≤2 家",
      "动态管理（第四章）：每三年复核评价一次——2023 年复核 248 家通过、5 家撤销称号（工信部科函〔2024〕7 号）；企业每年 4 月 30 日前上报上年度技术创新发展情况",
      "弄虚作假：撤销批复文件和称号，并暂停其所在省（区、市、计划单列市）下一年度的申报工作（540 号文第四章）"
    ],
    tips: "这是「认荣誉不奖钱」的国家级创新平台资质：无中央统一资金奖补，价值在国家级荣誉背书与创新平台链条——申报前提之一是已认定为省级以上企业技术中心（第六条（三）），与国家企业技术中心（研发经费 ≥3000 万门槛）同链条，中小企业通常从省级企业技术中心起步。申报硬门槛（第六条）：营收 ≥3000 万、从业 ≥300 人、资产 ≥4000 万 + 省级以上企业技术中心 + 研发占比 ≥3%；第七条六项认定标准须同时满足，材料要求实证（核心技术、标准制定、品牌、连续盈利、技改与节能降耗佐证）。名额制是核心竞争点：每省 ≤3 家（广东：广州 ≤3、其他地市 ≤2），属地工信部门先遴选，不是报了就评——建议先与属地工信部门沟通本年度是否有申报安排。⚠️ 时效：最近批次为 2023 年度（2023-10-30 截止），2024 年度起国家层面暂未组织新认定（截至 2026-08-03），申报安排以工信部最新公告为准，谨防不良中介借「2026 年度申报」名义收费。获评后非一劳永逸：每三年复核评价一次（2023 年 5 家被撤销称号），每年 4 月 30 日前上报上年度技术创新发展情况。"
  },
  {
    id: "gysjzx",
    order: 21,
    column: "gjpt",
    name: "国家级工业设计中心",
    issuingBody: "工业和信息化部",
    level: "国家级",
    deadline: "每 2 年认定一次（93 号文第九条）· 最近批次为 2023 年第六批（省级 2023-08-31 前报送截止）· 第七批认定安排以工信部通知为准（截至 2026-08-04 未检索到第七批通知/名单）",
    effort: "Medium",
    updated: "2026-08-04",
    // 无 batches：认定无固定批次日期（每 2 年一次，批次由工信部通知），不渲染紧迫度（数据驱动，防过期误导）
    source: { name: "《国家级工业设计中心认定管理办法》（工信部政法〔2023〕93 号，2023-07-07 成文，废止 2012 年 422 号试行办法）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" },
    notice: { name: "《工业和信息化部办公厅关于组织开展第六批国家级工业设计中心认定和第一批、第二批、第四批复核工作的通知》（工信厅政法函〔2023〕199 号，2023-07-20 印发）", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html", timeline: "第六批流程（最近批次）：2023-07-20 通知印发 → 属地工信部门 8 月中旬前报送省级（各地不同，如深圳 8-14、苏州 8-15、福建 8-15 初审）→ 省级主管部门 2023-08-31 前以正式文件报送工信部（产业政策与法规司）→ 工信部专家评审、必要的现场考查、公示五个工作日 → 2023-11-24 公布名单（工信部政法函〔2023〕332 号，第六批新认定 + 第一批/第二批/第四批复核）。第七批：按 93 号文第九条每 2 年认定一次，截至 2026-08-04 未检索到第七批认定通知与名单，申报安排以工信部公告为准" },
    basis: [
      { name: "《工业和信息化部关于公布第六批和通过复核的第一批、第二批、第四批国家级工业设计中心名单的通告》（工信部政法函〔2023〕332 号，2023-11-24）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tg/art/2023/art_3664d5e509ce4ed69121212bdaa3c4b4.html" }
    ],
    summary: "工信部认定的国家级工业设计平台资质（93 号文第三条）：工业设计创新力强、业绩突出、发展水平领先的工业设计机构，分两类——制造业企业等单位设立的、主要为本单位提供工业设计服务的企业工业设计中心；面向市场需求提供工业设计服务的工业设计企业。认定每 2 年一次（第九条），认定及复核有效期 4 年（第十一条），省级主管部门为唯一推荐渠道（第八条），工信部组织专家评审、必要的现场考查、征求行业协会意见、公示五个工作日。硬性申报条件（第六条，须同时满足）：已认定为省级工业设计中心（第六条（一）——梯度培育「省级→国家级」逐级申报）；工业设计中心稳定运营 3 年（截至申报日期），有固定工作场所、良好软硬件条件、健全管理制度、稳定人员配置；3 年内无重大环保、质量和安全事故，未被列为严重失信主体，无重大违法行为；企业工业设计中心须是专门成立、独立运行的分支机构或内设部门（第六条（三））。两类中心量化门槛（199 号文第六批申报要求）：企业工业设计中心——设计团队人员 ≥50 人、具有工业设计学科本科及以上学历或取得工业设计专业技术职称的人员比例 ≥50%、近三年获得国内外授权专利及版权年均 ≥15 项（或成立以来累计 ≥100 项）；工业设计企业——设计团队人员 ≥70 人、学历/职称人员比例 ≥50%、近三年工业设计服务年均营业收入 ≥2000 万元且占企业总营收比例 ≥50%。评价按 93 号文附件 1 指标体系（设计投入、设计水平、政策导向 3 类 7 项：设计费用投入及占比、团队人员数量及素质、获奖质量及数量、知识产权数量、制定标准数量、完成项目质量及数量，含公共服务加分项）。推荐名额（199 号文）：已开展省级工业设计中心认定的省 ≤10 家、未开展 ≤6 家、计划单列市 ≤3 家。申报全程免费，通过工业设计中心管理系统（www.id-center.org.cn）在线填报。动态管理（第十一条）：未按规定参加复核/复核不合格/自行要求撤销 → 公布撤销、2 年内不得重新申报；弄虚作假/重大环保质量安全事故/严重失信 → 公布撤销、4 年内不得重新申报。现状：最近批次为 2023 年第六批（2023-08-31 省级报送截止、2023-11-24 公布名单）；截至 2026-08-04 未检索到第七批认定通知，以工信部公告为准。适合已获省级工业设计中心称号、设计团队与设计投入积累扎实的制造业企业及工业设计企业。",
    subsidy: "无中央统一资金奖补。政策价值：国家级工业设计平台资质与荣誉背书（行业示范效应、设计服务市场信用、招投标与融资加分）；部分省市对国家级工业设计中心给予一次性奖励或建设投入比例支持（以属地现行政策为准）",
    applicableIndustries: ["先进制造与自动化","制造业（通用）","化工","建材","新材料","新能源与节能","有色","机械","汽车","消费品","生物与新医药","电力","电子信息","石化","航空航天","资源与环境","钢铁","高技术服务"],
    conditions: [
      {
        category: "基础合规（93 号文第六条、第七条）",
        items: [
          { name: "境内注册、独立法人（或不具备法人资格的中心由设立单位申报）", required: true, weight: 3, description: "第七条：申报主体需在中华人民共和国境内注册，具备独立法人资格；制造业企业等单位设立的不具备法人资格的企业工业设计中心，由其具备法人资格的设立单位申报。表单四种企业类型均为依法设立的独立法人，此条件自动通过；未选类型时归为未核验", basis: { name: "93 号文第七条", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本" },
          { name: "已认定为省级工业设计中心（核心前置条件）", required: true, weight: 3, description: "第六条（一）：申报国家级工业设计中心须为省级工业设计中心；梯度培育「省级→国家级」逐级申报（第十条）。尚未开展省级工业设计中心认定的地区，原可于办法印发后 2 年内从非省级中心择优推荐（93 号文印发通知），该过渡期已于 2025-07 结束。表单无省级工业设计中心字段，需人工核实省级认定文件", basis: { name: "93 号文第六条（一）· 第十条", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "省级工业设计中心认定文件（有效期内）" },
          { name: "工业设计中心稳定运营满 3 年（截至申报日期）", required: true, weight: 3, description: "第六条：需稳定运营 3 年（截至申报日期），有固定的工作场所、良好的软硬件条件、健全的管理制度、稳定的人员配置，满足评价指标（附件 1）要求。运营年限自工业设计中心设立起算（非企业成立年限），需人工按设立文件核实", basis: { name: "93 号文第六条", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "工业设计中心设立文件（运营起始时间）+ 工作场所与软硬件条件说明" },
          { name: "3 年内无重大环保、质量和安全事故，未被列为严重失信主体", required: true, weight: 3, veto: true, autoMatch: "accident", rule: v => v === "无", description: "第六条（二）：遵守国家法律法规，3 年内未发生重大环保、质量和安全事故，未被列为严重失信主体，没有重大违法行为或涉嫌重大违法正在接受有关部门审查的情况。表单口径「近三年无重大事故（含经营异常/失信/重大违法违规）」与本条一致，选「有」从严判不满足", basis: { name: "93 号文第六条（二）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "企业工业设计中心为专门成立、独立运行的分支机构或内设部门", required: true, weight: 2, description: "第六条（三）：制造业企业等单位设立的企业工业设计中心需是专门成立、独立运行的分支机构或内设部门——需提供设立文件、组织架构、独立运行证明；工业设计企业类型不适用本项", basis: { name: "93 号文第六条（三）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "工业设计中心设立文件、组织架构与独立运行证明" }
        ]
      },
      {
        category: "认定量化门槛（199 号文第六批申报要求，两类中心二选一）",
        anyOf: true,
        paths: [
          {
            name: "企业工业设计中心（制造业企业设立，主要为本单位提供设计服务）",
            anyOf: true,
            items: [
              { name: "设计团队人员 ≥50 人", required: true, weight: 3, description: "199 号文第六批申报要求（企业工业设计中心）：设计团队人员 50 人以上；需提供设计人员名单及任职证明，人工核实", basis: { name: "199 号文申报要求（企业工业设计中心）", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" }, evidence: "设计团队人员名单及任职证明" },
              { name: "具有工业设计学科本科及以上学历或工业设计专业技术职称人员比例 ≥50%", required: true, weight: 3, description: "199 号文申报要求；工业设计学科口径见 93 号文附件 1 注释（《普通高等学校本科专业目录（2020 年版）》艺术学设计学类相关专业、工学机械类工业设计专业；《研究生教育学科专业目录（2022 年）》艺术学设计类、交叉学科设计学相关专业）；需提供学历/职称证书，人工核实", basis: { name: "199 号文申报要求 · 93 号文附件 1 注释", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "设计团队学历证书/工业设计专业技术职称证书（比例计算表）" },
              { name: "近三年获得国内外授权专利及版权年均 ≥15 项，或成立以来累计 ≥100 项", required: true, weight: 3, description: "199 号文申报要求；知识产权含专利（外观、实用新型、发明专利）与登记版权（产品设计图纸及说明、设计造型图像等，附件 1 注释）；表单「有效知识产权数量」为存量专利总数口径，与本条「近三年年均新增专利及版权」不同，需人工按专利版权清单核实", basis: { name: "199 号文申报要求 · 93 号文附件 1 注释", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" }, evidence: "近三年专利及版权清单（专利号、权利人、授权单位、授权时间）" }
            ]
          },
          {
            name: "工业设计企业（面向市场提供工业设计服务）",
            anyOf: true,
            items: [
              { name: "设计团队人员 ≥70 人", required: true, weight: 3, description: "199 号文第六批申报要求（工业设计企业）：设计团队人员 70 人以上；需提供设计人员名单及任职证明，人工核实", basis: { name: "199 号文申报要求（工业设计企业）", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" }, evidence: "设计团队人员名单及任职证明" },
              { name: "学历/职称人员比例 ≥50%", required: true, weight: 3, description: "199 号文申报要求：具有工业设计学科本科及以上学历或取得工业设计专业技术职称的人员比例合计不低于 50%；需提供学历/职称证书，人工核实", basis: { name: "199 号文申报要求（工业设计企业）", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" }, evidence: "设计团队学历证书/职称证书（比例计算表）" },
              { name: "近三年工业设计服务年均营业收入 ≥2000 万元且占企业总营收比例 ≥50%", required: true, weight: 3, description: "199 号文申报要求；需提供前三年度专项审计报告中的设计经营数据、服务业绩核实，人工核实", basis: { name: "199 号文申报要求（工业设计企业）", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" }, evidence: "前三年度专项审计报告（工业设计服务营收及占比数据）" }
            ]
          }
        ]
      },
      {
        category: "加分项（93 号文附件 1 评价指标）",
        items: [
          { name: "设计费用投入规模及占比行业领先", required: false, weight: 1, description: "附件 1 设计投入类：设计费用投入及占比；设计费用口径见附件 1 注释（设计人员工资奖金津贴等人工费用、市场咨询/样品试制/检验检测等直接投入、设备折旧与无形资产摊销等）", basis: { name: "93 号文附件 1（设计投入）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "前三年度专项审计报告（设计费用投入及占比）" },
          { name: "近三年获国家级/省部级工业设计奖项、牵头或参与制定设计相关标准", required: false, weight: 1, description: "附件 1 设计水平类（获奖质量及数量 + 制定标准数量）：国家级奖项=经党中央、国务院批准开展的工业设计评奖工作，省部级=国务院各组成部门、各省级人民政府批准开展的设计类评奖（附件 1 注释）；标准指工业设计、产品设计直接相关的国家标准、行业标准、团体标准", basis: { name: "93 号文附件 1（设计水平）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "工业设计成果获奖证书复印件 + 牵头或参与制定标准清单及佐证" },
          { name: "完成重要工业设计项目且成果产业化、面向产业链开放设计", required: false, weight: 1, description: "附件 1 设计水平类（完成项目质量及数量）+ 政策导向加分项（公共服务）：完成的工业设计项目及成果产业化情况，需提供项目与产业化佐证；面向产业链供应链中小企业开放设计项目、增强产业链协同设计能力（第十条工信部推动方向）", basis: { name: "93 号文附件 1（设计水平 + 政策导向加分项）· 第十条", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2023/art_6266a1ce99974ffa920e5533e0b3aab3.html" }, evidence: "重要工业设计项目及主要成果产业化佐证材料" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 199 号文附件官方清单：企业工业设计中心 9 项 / 工业设计企业 8 项）
    materials: [
      { name: "《国家级工业设计中心申请表》（工业设计中心管理系统在线填报）", required: true, basis: { name: "199 号文附件《国家级工业设计中心申报材料清单》", url: "https://www.miit.gov.cn/jgsj/zfs/gzdt/art/2023/art_2904e3c40f1c46d28e986eaa91d54ce1.html" } },
      { name: "前三年度专项审计报告（含企业生产经营主要数据、工业设计中心前三年度运营主要情况；工业设计企业另含设计经营数据、工业设计服务业绩）", required: true },
      { name: "企业设立独立的工业设计中心佐证材料", required: true, note: "企业工业设计中心适用（第六条（三）独立运行要求）" },
      { name: "工业设计中心设计团队人员情况（含学历、工业设计专业技术职称等佐证材料）", required: true },
      { name: "工业设计成果获奖证书复印件", required: true },
      { name: "工业设计成果获得专利、版权等清单（含产品或项目名称、专利名称、专利号、权利人、授权单位、授权时间等）", required: true },
      { name: "牵头或参与制定标准清单及佐证材料", required: true, note: "企业工业设计中心清单第 7 项；设计企业适用第 6 项获奖+第 7 项项目产业化" },
      { name: "重要工业设计项目及主要成果产业化佐证材料", required: true },
      { name: "企业管理、知识产权保护、发展规划等方面材料", required: false, note: "工业设计企业适用" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "申报经省级主管部门初审：省级向初审合格的申报主体分配网上登录账号，申报主体通过工业设计中心管理系统（www.id-center.org.cn）在线填报所需信息；在线打印申报材料一式一份、加盖推荐单位（省级主管部门）公章，以正式文件报送工信部（199 号文）",
      "推荐名额（199 号文）：已开展省级工业设计中心认定的省 ≤10 家、未开展 ≤6 家、计划单列市 ≤3 家——属地先遴选，不是报了就评；第六批 2023-08-31 前报送，第七批以工信部公告为准",
      "申报推荐和复核相关工作中，不得以任何形式向企业收取费用（199 号文）；工信部不委托任何机构代理申报",
      "认定及复核有效期 4 年；动态管理（93 号文第十一条）：未按规定参加复核/复核不合格/自行要求撤销 → 公布撤销、2 年内不得重新申报；弄虚作假/重大环保质量安全事故/严重失信 → 公布撤销、4 年内不得重新申报"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报程序」类 3 条流程条件移出 conditions（省级推荐、在线填报、免费申报进 diagNotes，材料清单进 materials），基础合规与量化门槛全部补 evidence，新增 materials（199 号文官方清单）与 diagNotes", basis: "93 号文 · 199 号文附件申报材料清单" }
    ],
    changesTitle: "认定机制与申报现状要点",
    changesNote: "工信部政法〔2023〕93 号 + 工信厅政法函〔2023〕199 号 + 工信部政法函〔2023〕332 号，逐条有官方依据",
    changes: [
      "办法换版：2023-07 工信部政法〔2023〕93 号印发施行，废止 2012 年 422 号试行办法——评价指标改作附件（附件 1：设计投入/设计水平/政策导向 3 类 7 项），每 2 年认定一次，认定及复核有效期 4 年，省级主管部门为唯一推荐渠道",
      "指标门槛提高（93 号文）：提高知识产权数、工业设计服务年营业收入等指标；新增获奖质量及数量、制定标准数量、完成项目质量及数量、经营质量指标；增加公共服务加分项",
      "梯度培育硬性化：国家级申报须先获评省级工业设计中心（第六条（一））；尚未开展省级认定的地区 2 年过渡例外（93 号文印发通知）已于 2025-07 结束",
      "最近批次：2023 年第六批（199 号文 2023-07-20 印发、省级 2023-08-31 前报送；2023-11-24 公布名单，332 号通告）",
      "截至 2026-08-04 未检索到第七批认定通知与名单（每 2 年认定一次，申报安排以工信部公告为准）",
      "动态管理（第十一条）：未按规定参加复核/复核不合格/自行要求撤销 → 公布撤销、2 年内不得重新申报；弄虚作假/重大环保质量安全事故/严重失信 → 公布撤销、4 年内不得重新申报"
    ],
    tips: "这是「认资质不奖钱」的国家级工业设计平台荣誉：无中央统一资金奖补，价值在国家级平台资质背书与设计服务市场信用，部分省市对获评企业有一次性奖励或建设投入比例支持（以属地现行政策为准）。三点入门认知：①前置硬门槛是省级工业设计中心——梯度培育「省级→国家级」逐级申报（第六条（一）），没有省级中心的先申报省级；②量化门槛按 199 号文第六批口径提前自查——企业工业设计中心：设计团队 ≥50 人、学历/职称比例 ≥50%、近三年专利及版权年均 ≥15 项（或累计 ≥100 项）；工业设计企业：团队 ≥70 人、设计服务年均营收 ≥2000 万且占比 ≥50%；③名额制竞争——已开展省级认定省份每家 ≤10 家（未开展 ≤6 家、计划单列市 ≤3 家），属地工信部门先遴选，不是报了就评，建议先与属地工信部门确认本批次申报安排。材料核心：前三年度专项审计报告（设计费用单独核算）、设计团队学历/职称名册、获奖证书、专利版权清单、标准清单、项目产业化佐证。注意三点：运营满 3 年从设计中心设立起算（非企业成立年限）；专利版权口径是近三年年均新增（表单存量专利数仅供参考）；获评后有效期 4 年、到期复核，弄虚作假 4 年内不得重新申报（第十一条）。⚠️ 时效：最近批次为 2023 年第六批（2023-08-31 报送截止），截至 2026-08-04 未检索到第七批通知，申报安排以工信部公告为准，谨防不良中介借「第七批申报」名义收费。申报全程免费、在线填报（www.id-center.org.cn），工信部不委托任何机构代理申报。"
  },
  {
    id: "fwzz",
    order: 22,
    column: "fwzz",
    name: "服务型制造示范（国家级）",
    issuingBody: "工业和信息化部（产业政策与法规司）",
    level: "国家级",
    deadline: "遴选机制持续开展（101 号文第十六条「开展示范推广」）· 最近批次为 2023 年第五批（2023-05-31 省级报送截止）· 2024 年起国家层面暂无新遴选通知（截至 2026-08-04，以工信部公告为准）",
    effort: "Medium",
    updated: "2026-08-04",
    honorOnly: true, // 案例/荣誉类（无资金奖补）——匹配结果标注（2026-08-14 遗留 #19）
    // 无 batches：无固定批次日期（批次由工信部通知），不渲染紧迫度（数据驱动，防过期误导）
    source: { name: "《关于进一步促进服务型制造发展的指导意见》（工信部联政法〔2020〕101 号，十五部门 2020-06-30 成文）", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2020/art_6e2411a497f34aabb9091dba3e542129.html" },
    notice: { name: "《工业和信息化部办公厅关于开展2023年服务型制造示范遴选和评估评价工作的通知》（工信厅政法函〔2023〕42 号，2023-03-02 成文）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html", timeline: "第五批流程（最近批次）：2023-03-09 发布 → 2023-05-31 省级报送截止（工信部产业政策与法规司）→ 2023-11-16 名单公示 → 2023-11-29 印发名单（工信厅政法函〔2023〕332 号：110 家示范企业、51 个示范平台、9 个示范城市）。2024 年起国家层面暂无新遴选通知（截至 2026-08-04，以工信部公告为准）；2025-09-15 七部门印发《深入推动服务型制造创新发展实施方案（2025—2028年）》（202 号文）：到 2028 年培育 100 家服务型制造龙头企业和 50 个领军品牌" },
    basis: [
      { name: "《工业和信息化部办公厅关于公布第五批服务型制造示范名单的通知》（工信厅政法函〔2023〕332 号，2023-11-29 印发）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2023/art_efc18d1b8a684aba8d33224e22a91241.html" },
      { name: "《深入推动服务型制造创新发展实施方案（2025—2028年）》（工信部联政法〔2025〕202 号，七部门 2025-09-15 印发）", url: "https://app.www.gov.cn/govdata/gov/202510/11/538265/article.html" }
    ],
    summary: "服务型制造是制造与服务融合发展的新型制造模式和产业形态（101 号文第一条），工信部（产业政策与法规司）组织国家级服务型制造示范遴选：示范企业、示范平台、示范城市三类（42 号文）。示范企业须为具有鲜明服务型制造特点的制造业企业，通过战略规划、组织保障、技术创新、流程再造等措施实现转型升级并取得显著成效，原则上服务收入占企业营业收入比重达 30% 以上（42 号文示范企业申报条件）。共性条件（42 号文第五批口径）：境内注册、独立法人、运营和财务状况良好、自 2021 年 1 月 1 日至今无重大质量/环保/安全事故、无违法行为或涉嫌违法正在接受审查。名额制：各省（区、市）及新疆生产建设兵团推荐示范企业不超过 10 个、计划单列市不超过 3 个（42 号文）——属地工信部门先遴选，不是报了就评。程序：在服务型制造公共服务平台（selection.csoma.org.cn）注册并填报材料 → 省级初审择优推荐（申报书加盖公章）→ 报工信部产业政策与法规司 → 工信部组织专家评审及现场考查。最近批次：第五批（2023 年）公布 110 家示范企业、51 个示范平台、9 个示范城市（工信厅政法函〔2023〕332 号）。2025-09-15 七部门印发《深入推动服务型制造创新发展实施方案（2025—2028年）》（工信部联政法〔2025〕202 号）：到 2028 年培育 100 家服务型制造龙头企业和 50 个领军品牌、完成 20 项标准制定、建设 100 个创新发展高地。⚠️ 时效：2024 年起国家层面暂无新遴选通知（截至 2026-08-04，以工信部公告为准）。申报全程免费。适合服务收入占比高（原则上 ≥30%）、服务化转型成效显著的制造业企业。",
    subsidy: "无中央统一资金奖补。政策价值：国家级「制造+服务」融合示范荣誉背书（行业示范效应、招投标与融资加分）；部分省市对获评国家级示范企业给予一次性奖励（如惠州：第五批国家级示范企业通力科技获 50 万元奖励，惠州市工信局 2024-07-05 下达专项资金安排计划，以属地现行政策为准）",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","建材","电力","钢铁","有色","石化","机械","消费品","高技术服务"],
    conditions: [
      {
        category: "基础合规（42 号文共性条件，第五批口径）",
        items: [
          { name: "境内注册、独立法人", required: true, weight: 3, description: "42 号文申报条件（共性）：申报主体应在中华人民共和国境内注册，具有独立法人资格；表单四种企业类型均为依法设立的独立法人，此条件自动通过；未选类型时归为未核验", basis: { name: "42 号文申报条件（共性）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本" },
          { name: "运营和财务状况良好", required: true, weight: 2, description: "42 号文申报条件（共性）：运营和财务状况良好；以近年度审计报告核实", basis: { name: "42 号文申报条件（共性）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, evidence: "近年度审计报告/财务报表" },
          { name: "自 2021-01-01 至今无重大质量/环保/安全事故、无违法行为", required: true, weight: 3, veto: true, description: "42 号文申报条件（共性）：自 2021 年 1 月 1 日至今未发生重大质量、环保或安全事故，没有违法行为或涉嫌违法正在接受审查的情况；表单口径「近三年无重大事故（含经营异常/失信/重大违法违规）」与本条基本一致，选「有」从严判不满足", basis: { name: "42 号文申报条件（共性）", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" }
        ]
      },
      {
        category: "示范企业专项条件（42 号文）",
        items: [
          { name: "具有鲜明服务型制造特点的制造业企业", required: true, weight: 3, description: "42 号文示范企业申报条件：应为具有鲜明服务型制造特点的制造业企业；纯服务业企业、第三方平台不属于示范企业类别（平台走示范平台通道）", basis: { name: "42 号文示范企业申报条件", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, evidence: "服务型制造模式说明（对照十种模式）" },
          { name: "服务收入占营业收入比重原则上 ≥30%", required: true, weight: 3, description: "42 号文示范企业申报条件：原则上服务收入占企业营业收入比重达 30% 以上（核心量化门槛）；表单无服务收入字段，需人工按统计/审计口径核实服务收入占比（含定制化服务、供应链管理、检验检测认证、全生命周期管理、总集成总承包、节能环保、生产性金融等模式收入）", basis: { name: "42 号文示范企业申报条件", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, evidence: "服务收入占比计算说明（按十种服务模式口径，审计/统计佐证）" },
          { name: "通过战略规划、组织保障、技术创新、流程再造等措施实现转型升级并取得显著成效", required: true, weight: 2, description: "42 号文示范企业申报条件：通过战略规划、组织保障、技术创新、流程再造等措施实现转型升级并取得显著成效；需提供转型举措与成效佐证材料", basis: { name: "42 号文示范企业申报条件", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" }, evidence: "转型举措与成效佐证材料（案例文本、数据对比）" }
        ]
      },
      {
        category: "加分项（非硬性门槛）",
        items: [
          { name: "服务型制造创新模式典型（十大模式）", required: false, weight: 2, description: "42 号文遴选方向：定制化服务、供应链管理、检验检测认证服务、全生命周期管理、总集成总承包、节能环保服务、生产性金融服务及其他创新模式；101 号文第二条列举工业设计服务、定制化服务、供应链管理、共享制造、检验检测认证服务、全生命周期管理、总集成总承包、节能环保服务、生产性金融服务、其他创新模式十种", basis: { name: "42 号文遴选类别 · 101 号文第二条", url: "https://www.miit.gov.cn/jgsj/zfs/wjfb/art/2020/art_6e2411a497f34aabb9091dba3e542129.html" }, evidence: "创新模式典型说明（对应十大模式之一）" },
          { name: "已获省级服务型制造示范认定", required: false, weight: 1, description: "广东省级服务型制造示范遴选 2024 年起持续开展（粤工信生产合作函〔2024〕2 号，2024-09-02 公布名单）；国家层面各批各地转发通知普遍优先推荐已获省级示范的企业（如海南、福建、深圳等 42 号文转发口径）", basis: { name: "粤工信生产合作函〔2024〕2 号 · 42 号文各地转发口径", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4393/post_4393707.html" }, evidence: "省级服务型制造示范认定文件" },
          { name: "深化数字化与工业互联网应用", required: false, weight: 1, description: "2025—2028 实施方案任务七：深化「5G+工业互联网」融合应用，按需布局算力基础设施，推动人工智能技术与服务型制造融合创新；任务六：打造 100 个服务型制造创新发展高地（以省级及以上高新区、工业园区、产业集群为载体先行先试）", basis: { name: "2025—2028 实施方案（任务六、任务七）", url: "https://app.www.gov.cn/govdata/gov/202510/11/538265/article.html" }, evidence: "数字化与工业互联网应用佐证" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 42 号文申报程序；平台填报 + 纸质报送）
    materials: [
      { name: "服务型制造示范申报书（服务型制造公共服务平台 selection.csoma.org.cn 填报，通过省级初审后下载打印并加盖公章）", required: true, basis: { name: "42 号文申报程序", url: "http://gdii.gd.gov.cn/gkmlpt/content/4/4140/post_4140407.html" } },
      { name: "申报汇总表（省级主管部门填报，正式行文报送）", required: true },
      { name: "佐证材料（服务收入占比计算口径、转型举措与成效证明、近年度审计报告等）", required: true },
      { name: "省级服务型制造示范认定文件", required: false, note: "已获省级示范的企业优先推荐（各地转发口径）" }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "名额制：示范企业——各省（区、市）及新疆生产建设兵团不超过 10 个、计划单列市不超过 3 个；共享制造类平台各省 ≤1 个、其他类 ≤3 个；示范城市综合类/工业设计特色类各 ≤1 个——属地工信部门先遴选，不是报了就评（42 号文）",
      "流程：服务型制造公共服务平台（selection.csoma.org.cn）注册并填报材料 → 省级初审择优推荐（申报书加盖公章，一式 1 份）→ 各省级主管部门报送工信部（产业政策与法规司）→ 工信部组织专家评审及现场考查（42 号文申报程序）",
      "最近批次为 2023 年第五批（2023-05-31 省级报送截止、2023-11-29 印发 110 家示范企业名单）；2024 年起国家层面暂无新遴选通知（截至 2026-08-14），以工信部公告为准，谨防不良中介借「新年度申报」名义收费",
      "新上位文件：2025-09-15 七部门印发《深入推动服务型制造创新发展实施方案（2025—2028年）》（202 号文）：到 2028 年培育 100 家服务型制造龙头企业和 50 个领军品牌、建设 100 个创新发展高地，示范遴选机制持续深化",
      "申报全程免费，工信部不委托任何机构代理申报"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报程序」类 2 条流程条件（属地名额、平台填报）移出 conditions 进 diagNotes/materials，基础合规与专项条件全部补 evidence，新增 materials 与 diagNotes", basis: "42 号文申报程序" }
    ],
    changesTitle: "遴选机制与时效要点",
    changesNote: "依据工信部联政法〔2020〕101 号 + 工信厅政法函〔2023〕42 号 + 工信厅政法函〔2023〕332 号 + 工信部联政法〔2025〕202 号，逐条有官方依据",
    changes: [
      "最近批次为 2023 年第五批（42 号文 2023-03-09 发布、2023-05-31 省级报送截止、2023-11-29 印发名单）；2024 年起国家层面暂无新遴选通知（截至 2026-08-04），申报安排以工信部公告为准",
      "硬门槛（42 号文示范企业申报条件）：原则上服务收入占企业营业收入比重达 30% 以上；示范平台正式投入运营须满 2 年；示范城市分综合类与工业设计特色类",
      "名额制（42 号文）：示范企业各省 ≤10 个、计划单列市 ≤3 个；共享制造类平台各省 ≤1 个、其他类 ≤3 个；示范城市综合类/工业设计特色类各 ≤1 个",
      "新上位文件：2025-09-15 七部门印发《深入推动服务型制造创新发展实施方案（2025—2028年）》（202 号文，2025-10-11 gov.cn 发布）：到 2028 年培育 100 家服务型制造龙头企业和 50 个领军品牌、完成 20 项标准制定、建设 100 个创新发展高地，示范遴选机制持续深化",
      "无中央直接资金奖补；部分省市对获评国家级示范企业给予一次性奖励（如惠州 50 万元，以属地现行政策为准）"
    ],
    tips: "这是「两业融合」国家级示范荣誉：无中央直接奖补，价值在国家级示范背书与地方奖励（部分省市一次性奖励，如惠州 50 万元，以属地为准）。三点入门认知：①核心硬门槛是服务收入占比——示范企业原则上服务收入占营业收入比重达 30% 以上（42 号文），先算清自己的服务收入口径（定制化服务、供应链管理、检验检测认证、全生命周期管理、总集成总承包、节能环保、生产性金融等十种模式，101 号文第二条）；服务收入占比不足 30% 的企业先冲省级示范或把服务化模式做实再报国家级；②名额制竞争——各省推荐企业不超过 10 个（计划单列市 3 个），属地工信部门先遴选，建议先与属地工信部门确认本批次申报安排；③省级是前置积累——广东省级服务型制造示范遴选 2024 年起持续开展（粤工信生产合作函〔2024〕2 号），各地转发通知普遍优先推荐已获省级示范的企业。申报流程：服务型制造公共服务平台（selection.csoma.org.cn）线上填报 → 省级初审推荐（申报书盖章）→ 工信部专家评审及现场考查。⚠️ 时效：最近批次为 2023 年第五批，2024 年起国家层面暂无新遴选通知（截至 2026-08-04），以工信部公告为准，谨防不良中介借「2026 年度申报」名义收费。申报全程免费，工信部不委托任何机构代理申报。"
  },
  {
    id: "wlwsf",
    order: 23,
    column: "lhxx",
    name: "物联网赋能行业发展典型案例（国家级）",
    issuingBody: "工业和信息化部（科技司）",
    level: "国家级",
    deadline: "年度征集制（2024 年起每年 1 批）· 最近批次为 2025 年度：2025-12-15 部级报送截止，名单已于 2026-06-26 公布（82 项）· 2026 年度征集安排以工信部通知为准（截至 2026-08-05 未检索到）",
    effort: "Easy",
    updated: "2026-08-05",
    honorOnly: true, // 案例/荣誉类（无资金奖补）——匹配结果标注（2026-08-14 遗留 #19）
    // 无 batches：征集批次由工信部年度通知确定，不渲染紧迫度（数据驱动，防过期误导）
    source: { name: "《工业和信息化部办公厅关于集中组织开展典型案例征集工作的通知》（工信厅办函〔2025〕476 号，2025-11-15 成文，物联网赋能行业发展典型案例为 14 类之一）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" },
    notice: { name: "《工业和信息化部办公厅关于公布2025年物联网赋能行业发展典型案例名单的通知》（工信厅科函〔2026〕299 号，2026-06-26 成文）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2026/art_60e93ef1697040fa98bb05fdf0ccafba.html", timeline: "最近批次（2025 年度）流程：2025-11-15 工信部办公厅印发 476 号集中征集通知（14 类典型案例，物联网赋能行业发展典型案例为附件 4）→ 申报主体登录征集系统（www.iotproj.cesi.cn）线上填报并上传加盖公章材料（河北口径 12-07 前，各地略早于部级）→ 推荐单位（省级工信主管部门/通信管理局）审核后于 2025-12-15 前报送至部内相应主责司局 → 形式审查、专家评审和网上公示 → 2026-06-26 印发 299 号通知公布名单（82 个项目）。2026 年度征集安排以工信部通知为准（截至 2026-08-05 未检索到）" },
    basis: [
      { name: "《工业和信息化部办公厅关于组织开展2024年物联网赋能行业发展典型案例征集工作的通知》（工厅科〔2024〕300 号，含 4 领域 14 方向逐条原文与申报条件）", url: "https://wap.miit.gov.cn/jgsj/kjs/wjfb/art/2024/art_9713399301944dcc8273339cec19e0af.html" },
      { name: "河北省工业和信息化厅 2025 年度转发通知（附件 4 申报口径：案例须已落地并取得成效、征集系统填报要求）", url: "https://gxt.hebei.gov.cn/sme/xmsb/2025122408510614445/index.html" }
    ],
    summary: "工信部（科技司）组织的国家级典型案例征集，表彰物联网在行业应用、社会治理、民生消费、与新产业融合四大领域的优秀应用案例。系列沿革：2021-2022 年度为「物联网示范项目」（工科函〔2021〕877 号，关键技术攻关类 + 融合应用创新类）；2023 年起更名「物联网赋能行业发展典型案例」；2025 年度起并入工信部办公厅集中征集（工信厅办函〔2025〕476 号，与人工智能、数字化转型等共 14 类并行）。最近批次（2025 年度）：2025-11-15 印发征集通知 → 2025-12-15 部级报送截止 → 2026-06-26 工信厅科函〔2026〕299 号公布名单 82 个项目。核心条件（476 号申报基本条件 + 300 号原文）：境内注册独立法人、近三年财务状况良好、无重大违法违规行为、未发生较大及以上生产安全事故和环境污染事故（476 号（一））；案例已落地并取得成效、实施效果显著、带动作用强（300 号（二））、具有较强代表性创新性和可推广性（476 号（二））、属于 4 领域 14 个具体方向（300 号（一）：智能制造/智慧农业/智慧物流/智慧能源/智能建造/智能交通/城市管理/绿色环保/智能网联汽车/智慧家居/智慧文旅/智慧健康/新兴产业/未来产业）、未曾入围往年工信部物联网示范项目和典型案例（300 号（二））、每个申报单位限申报 1 项（300 号（四））。流程：征集系统（www.iotproj.cesi.cn）线上填报 → 属地省级工信主管部门/通信管理局审核推荐（名额竞争，300 号口径：省 ≤10 项、计划单列市/央企 ≤5 项）→ 形式审查、专家评审、网上公示 → 公布名单。价值：无中央直接资金奖补，属国家级案例荣誉（299 号通知要求各地在技术创新、应用落地、政府服务等方面对入选案例加大支持，推动优秀成果规模化应用）。适合有已落地并取得成效的物联网应用场景（设备互联、远程运维、能耗管控、智能巡检等）的企事业单位。",
    subsidy: "无中央直接资金奖补。政策价值：国家级典型案例荣誉背书 + 299 号通知明确要求各地在技术创新、应用落地、政府服务等方面对入选案例加大支持力度、推动优秀成果规模化应用",
    applicableIndustries: ["制造业（通用）","电子信息","生物与新医药","航空航天","新材料","新能源与节能","资源与环境","先进制造与自动化","汽车","化工","建材","电力","钢铁","有色","石化","机械","消费品","高技术服务"],
    conditions: [
      {
        category: "基础合规（476 号通知申报基本条件）",
        items: [
          { name: "境内注册、独立法人", required: true, weight: 3, description: "476 号通知申报基本条件（一）：申报主体为企事业单位的，应在中华人民共和国境内注册，具备独立法人资格；表单四种企业类型均为依法设立的独立法人，此条件自动通过；未选类型时归为未核验", basis: { name: "476 号通知申报基本条件（一）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" }, autoMatch: "type", rule: () => true, evidence: "企业营业执照副本" },
          { name: "近三年财务状况良好", required: true, weight: 2, description: "476 号通知申报基本条件（一）：近三年财务状况良好；以近三年审计报告/财务报表核实", basis: { name: "476 号通知申报基本条件（一）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" }, evidence: "近三年审计报告/财务报表" },
          { name: "近三年无重大违法违规行为、未发生较大及以上生产安全事故和环境污染事故", required: true, weight: 3, veto: true, description: "476 号通知申报基本条件（一）：近三年无重大违法违规行为、未发生较大及以上生产安全事故和环境污染事故；表单口径「近三年有无重大安全/环保/质量事故（含经营异常/失信/重大违法违规）」与本条基本一致，选「有」从严判不满足", basis: { name: "476 号通知申报基本条件（一）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" }, autoMatch: "accident", rule: v => v === "无", evidence: "「信用中国」（creditchina.gov.cn）报告 + 国家企业信用信息公示系统（gsxt.gov.cn）查询结果" },
          { name: "案例符合国家法律法规及相关政策要求、可对外公开", required: true, weight: 1, description: "476 号通知申报基本条件（三）：案例应重点突出、表述准确、资料翔实，符合国家有关法律法规及相关政策要求，可对外公开", basis: { name: "476 号通知申报基本条件（三）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" }, evidence: "案例内容合规与可公开声明" }
        ]
      },
      {
        category: "案例要求（476 号（二）+ 300 号（二）原文口径）",
        items: [
          { name: "案例已落地并取得成效、实施效果显著、带动作用强", required: true, weight: 3, description: "300 号通知申报条件（二）：应用案例须已落地并取得成效，在物联网融合应用中取得创新性突破，实施效果显著，带动作用强；河北转发附件 4 口径：须已落地并取得成效，能充分体现物联网的技术特点，高度聚焦实际场景应用需求和重点问题，示范效应良好", basis: { name: "300 号通知申报条件（二）· 河北转发附件 4 口径", url: "https://gxt.hebei.gov.cn/sme/xmsb/2025122408510614445/index.html" }, evidence: "案例落地与成效证明材料（实施效果数据、用户反馈等）" },
          { name: "案例具有较强代表性、创新性和可推广性", required: true, weight: 2, description: "476 号通知申报基本条件（二）：案例应具有较强的代表性、创新性和可推广性，对相关地区、行业、企业具有较强的借鉴意义和推广价值", basis: { name: "476 号通知申报基本条件（二）", url: "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2025/art_529cd59e4e864dadb51d299d9d797315.html" }, evidence: "案例文本（代表性、创新性、可推广性阐述）" },
          { name: "案例属于 4 领域 14 个具体方向之一", required: true, weight: 3, description: "300 号通知（一）4 领域 14 方向原文：行业应用（智能制造/智慧农业/智慧物流/智慧能源/智能建造）、社会治理（智能交通/城市管理/绿色环保）、民生消费（智能网联汽车/智慧家居/智慧文旅/智慧健康）、与新产业融合（新兴产业：物联网与 5G、大数据、云计算、人工智能、区块链、卫星互联网等融合；未来产业：与元宇宙、脑机接口、量子信息、人形机器人、生物制造等融合）；2025 年度经 476 号附件 4 延续", basis: { name: "300 号通知（一）14 方向原文", url: "https://wap.miit.gov.cn/jgsj/kjs/wjfb/art/2024/art_9713399301944dcc8273339cec19e0af.html" }, evidence: "案例方向对应说明（4 领域 14 方向对照）" },
          { name: "案例未曾入围往年工信部物联网示范项目和典型案例", required: true, weight: 2, description: "300 号通知申报条件（二）：应用案例须未曾入围往年工业和信息化部物联网示范项目和典型案例（防重复申报）；往期已获评的企业以新案例申报", basis: { name: "300 号通知申报条件（二）", url: "https://wap.miit.gov.cn/jgsj/kjs/wjfb/art/2024/art_9713399301944dcc8273339cec19e0af.html" }, evidence: "案例未曾入围往年示范项目/典型案例的声明" }
        ]
      },
      {
        category: "加分项（非硬性门槛）",
        items: [
          { name: "案例已获省级/行业示范或典型案例认定", required: false, weight: 1, description: "各省转发通知普遍优先推荐已落地见效、示范效应良好的案例（如河北口径）；此前获省级案例/示范荣誉可作为佐证材料加分，非硬性条件（以当年度通知为准）", basis: { name: "河北转发附件 4 口径", url: "https://gxt.hebei.gov.cn/sme/xmsb/2025122408510614445/index.html" }, evidence: "省级/行业示范或典型案例认定文件" },
          { name: "案例融入新一代信息技术融合创新（5G/大数据/AI/区块链等）", required: false, weight: 1, description: "300 号通知（一）新兴产业方向：聚焦物联网与 5G、大数据、云计算、人工智能、区块链、卫星互联网等新一代信息技术融合应用，征集促进新一代信息技术产业发展、形成新质生产力的案例", basis: { name: "300 号通知（一）新兴产业方向", url: "https://wap.miit.gov.cn/jgsj/kjs/wjfb/art/2024/art_9713399301944dcc8273339cec19e0af.html" }, evidence: "新一代信息技术融合创新应用佐证" }
        ]
      }
    ],
    // zct-diag 2026-08-14：申报材料清单（依据 300 号（三）申报流程 + 河北转发平台要求）
    materials: [
      { name: "案例申报材料（征集系统 www.iotproj.cesi.cn 线上填报并加盖公章上传，纸质版与线上填报内容一致）", required: true, basis: { name: "300 号通知（三）申报流程 · 河北转发平台要求", url: "https://gxt.hebei.gov.cn/sme/xmsb/2025122408510614445/index.html" } },
      { name: "案例落地与成效佐证材料（实施效果数据、带动作用证明等）", required: true },
      { name: "申报单位资质材料（营业执照、近三年财务报表）", required: true },
      { name: "案例未曾入围往年工信部物联网示范项目和典型案例的声明", required: true }
    ],
    // 2026-08-14 修复：申报要求从诊断条件拆出（流程信息仅作提示展示，不进 conditions、不计分）
    diagNotes: [
      "流程：征集系统（www.iotproj.cesi.cn）线上填报并加盖公章上传 → 属地省级工信主管部门/通信管理局审核推荐 → 形式审查、专家评审和网上公示 → 公布名单；每个申报单位限申报 1 项（300 号（三）（四））",
      "名额竞争（300 号口径）：各省 ≤10 项、计划单列市/新疆生产建设兵团/中央企业/部属单位 ≤5 项；无锡高新区、重庆南岸区、杭州高新区（滨江）、福州经开区、江西鹰潭五个物联网示范基地各可独立推荐 ≤5 项",
      "2025 年度批次：476 号 2025-11-15 印发 → 推荐单位 2025-12-15 前报送部内相应主责司局 → 2026-06-26 公布名单 82 项（工信厅科函〔2026〕299 号）；2026 年度征集安排以工信部通知为准（截至 2026-08-14 未检索到）",
      "价值：无中央直接奖补，属国家级案例荣誉；299 号通知要求各地在技术创新、应用落地、政府服务等方面对入选案例加大支持力度，推动优秀成果规模化应用",
      "申报全程免费，谨防「包入选」中介收费"
    ],
    revisions: [
      { at: "2026-08-14", note: "zct-diag 细化：原「申报程序」类 2 条流程条件（属地推荐、征集系统填报）移出 conditions 进 diagNotes/materials，基础合规与案例要求全部补 evidence，新增 materials 与 diagNotes", basis: "476 号通知 · 300 号通知（三）（四）" }
    ],
    changesTitle: "征集机制与时效要点",
    changesNote: "依据工信厅办函〔2025〕476 号 + 工厅科〔2024〕300 号 + 工信厅科函〔2026〕299 号 + 河北转发口径，逐条有官方依据",
    changes: [
      "系列沿革：2021-2022 年度为「物联网示范项目」（工科函〔2021〕877 号，关键技术攻关类 + 融合应用创新类）；2023 年起更名「物联网赋能行业发展典型案例」（300 号（二）「未曾入围往年工业和信息化部物联网示范项目和典型案例」可证两系列先后关系）；2025 年度起并入工信部办公厅 476 号集中征集（14 类典型案例之一，申报渠道与节奏统一）",
      "2025 年度批次关键时点：476 号 2025-11-15 印发 → 推荐单位 2025-12-15 前报送部内相应主责司局 → 形式审查、专家评审、网上公示 → 工信厅科函〔2026〕299 号 2026-06-26 公布名单（82 个项目）",
      "征集方向（300 号（一）4 领域 14 方向原文）：行业应用（智能制造/智慧农业/智慧物流/智慧能源/智能建造）+ 社会治理（智能交通/城市管理/绿色环保）+ 民生消费（智能网联汽车/智慧家居/智慧文旅/智慧健康）+ 与新产业融合（新兴产业/未来产业）",
      "名额竞争（300 号（三））：各省 ≤10 项、计划单列市/新疆兵团/中央企业/部属单位 ≤5 项；五个物联网示范基地（无锡高新区、重庆南岸区、杭州高新区（滨江）、福州经开区、江西鹰潭）各可独立推荐 ≤5 项",
      "每个申报单位限申报 1 项（300 号（四））；案例须已落地并取得成效、未曾入围往年示范项目/典型案例（300 号（二））",
      "无中央直接资金奖补；299 号通知要求各地在技术创新、应用落地、政府服务等方面对入选案例加大支持，推动优秀成果规模化应用"
    ],
    tips: "这是「案例荣誉」型国家级征集：不奖钱，价值在国家级案例背书与各地支持（299 号通知要求各地在技术创新、应用落地、政府服务等方面对入选案例加大支持）。先自查硬条件：①案例必须已落地并取得成效（300 号（二））——纯规划、在建案例出局，要有实施效果数据；②属于 4 领域 14 方向（智能制造、智慧农业、智慧物流、智慧能源、智能建造、智能交通、城市管理、绿色环保、智能网联汽车、智慧家居、智慧文旅、智慧健康、新兴产业、未来产业）——先对号入座选方向；③未曾入围往年示范项目和典型案例（防重复申报）；④每个申报单位限 1 项（300 号（四））——选最有说服力的场景报。流程：征集系统（www.iotproj.cesi.cn）线上填报盖章 → 属地省级工信/通信管理局审核推荐（名额竞争：省 ≤10 项）→ 工信部形式审查、专家评审、公示。2025 年度批次已结束（2026-06-26 公布 82 项），2026 年度征集以工信部通知为准（截至 2026-08-05 未检索到），建议平时攒好案例数据（设备接入量、降本增效数据、用户反馈）。申报全程免费，谨防「包入选」中介收费。"
  }
);
