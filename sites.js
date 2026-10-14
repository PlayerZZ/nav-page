/*
 * 黄页数据文件。页面本身不用改，加站点只需要在 sites 里加一条。
 *
 * 每个站点的字段：
 *   name   名称（必填）
 *   url    链接，要 http:// 或 https:// 开头（必填）
 *   cat    所属分类，对应 categories 里的 id（必填）
 *   desc   一句话：这是干嘛的
 *   note   你自己的解读：怎么用、有什么坑、为什么收藏
 *   tags   标签，数组，用来筛选和搜索
 *   price  收费情况，写“免费”会显示成空心标记，其他文字显示成实心标记
 *   icon   可选，自己指定图标的网址；不写就自动取网站的 favicon，取不到就显示首字
 *
 * openInNewTab：true 表示点击后在新标签页打开，false 表示在当前页打开。
 * iconFallback：true 表示图标取不到时用备用图标服务补一次。
 */
window.START_PAGE = {
  title: "黄页",
  openInNewTab: true,
  // 网站自己没有 favicon 时，是否用 DuckDuckGo 的图标服务补一次（会把域名发给它）。不想用就改成 false。
  iconFallback: true,

  categories: [
    { id: "learn", name: "学习入门" },
    { id: "industry", name: "行业与市场数据" },
    { id: "company", name: "公司与财报" },
    { id: "platform", name: "图表与平台" },
    { id: "zh", name: "中文资源" }
  ],

  sites: [
    // ---------- 学习入门 ----------
    {
      name: "Investopedia",
      url: "https://www.investopedia.com",
      cat: "learn",
      desc: "金融和投资术语词典，附入门教程。",
      note: "遇到不懂的词先来查。Stock Basics 教程从零讲起，适合建立基本概念。",
      tags: ["术语", "入门"],
      price: "免费"
    },
    {
      name: "可汗学院 经济学",
      url: "https://www.khanacademy.org/economics-finance-domain",
      cat: "learn",
      desc: "免费的微观经济学、宏观经济学和金融课程。",
      note: "系统又通俗，想补经济学底子就从这里开始。",
      tags: ["经济学", "课程", "入门"],
      price: "免费"
    },
    {
      name: "Marginal Revolution University",
      url: "https://mru.org",
      cat: "learn",
      desc: "免费的在线经济学课程。",
      note: "和可汗学院搭配着看。",
      tags: ["经济学", "课程"],
      price: "免费"
    },
    {
      name: "巴菲特致股东信",
      url: "https://www.berkshirehathaway.com/letters/letters.html",
      cat: "learn",
      desc: "伯克希尔·哈撒韦官网公开的历年致股东信。",
      note: "价值投资的第一手材料，免费公开。",
      tags: ["价值投资", "原文"],
      price: "免费"
    },
    {
      name: "Morningstar",
      url: "https://www.morningstar.com",
      cat: "learn",
      desc: "晨星官网，有偏价值投资视角的文章，讲“护城河”等概念。",
      note: "免费文章适合入门；深度研究报告和评级的大部分内容要付费。",
      tags: ["价值投资", "护城河", "研究"],
      price: "部分免费"
    },
    {
      name: "Visual Capitalist",
      url: "https://www.visualcapitalist.com/category/markets/",
      cat: "learn",
      desc: "把市场、行业、公司市值做成图的网站。",
      note: "适合小白建立直觉。每张图下面看数据来源和日期：市值、份额变化快，别把旧图当现状；也要看口径是市值、收入还是用户数。",
      tags: ["可视化", "入门", "占比"],
      price: "免费"
    },

    // ---------- 行业与市场数据 ----------
    {
      name: "Damodaran Online",
      url: "https://pages.stern.nyu.edu/~adamodar/",
      cat: "industry",
      desc: "纽约大学 Damodaran 教授的主页，估值课程、讲义和数据全部免费。",
      note: "数据页按行业给出利润率、市盈率、增长率，最适合横向比较行业。比较专业，有些基础再用。",
      tags: ["估值", "行业对比", "价值投资", "数据"],
      price: "免费"
    },
    {
      name: "Finviz",
      url: "https://finviz.com/groups.ashx",
      cat: "industry",
      desc: "美股可视化工具：热力图、行业分组、筛选器。",
      note: "Groups 页默认画的是各行业涨跌幅，不是占比。热力图里方块大小是市值，只能看大小关系；要百分比得用 Groups 表里的总市值自己算。免费版行情有延迟、有广告。",
      tags: ["热力图", "行业", "筛选器"],
      price: "部分免费"
    },
    {
      name: "Slickcharts",
      url: "https://www.slickcharts.com/sp500",
      cat: "industry",
      desc: "列出标普 500 每家公司占指数的权重百分比。",
      note: "想知道 Alphabet、苹果占整个指数多少，在这里查。注意这是占指数的市值权重，不是行业市场份额。",
      tags: ["占比", "标普500"],
      price: "免费"
    },
    {
      name: "SPDR 板块 ETF",
      url: "https://www.ssga.com",
      cat: "industry",
      desc: "道富的 Select Sector SPDR 系列，每个板块一只 ETF，页面列出持仓和占比。",
      note: "想看某个行业里头部公司各占多少，来看对应板块 ETF 的持仓，比如科技板块的 XLK。",
      tags: ["占比", "板块", "ETF"],
      price: "免费"
    },
    {
      name: "标普道琼斯指数",
      url: "https://www.spglobal.com/spdji/en/",
      cat: "industry",
      desc: "标普指数官方网站。",
      note: "S&P 500 页面通常有各板块权重。概览免费，更细的数据可能要注册或付费。",
      tags: ["占比", "标普500", "板块"],
      price: "部分免费"
    },
    {
      name: "StatCounter Global Stats",
      url: "https://gs.statcounter.com",
      cat: "industry",
      desc: "搜索引擎、浏览器、操作系统等的全球市场份额。",
      note: "谷歌在搜索领域占多少，直接查这里。口径是访问量份额，不是收入份额。",
      tags: ["市场份额", "搜索引擎"],
      price: "免费"
    },
    {
      name: "Companies Market Cap",
      url: "https://companiesmarketcap.com",
      cat: "industry",
      desc: "按行业、国家查看公司市值排名。",
      note: "看某个行业里谁最大。",
      tags: ["市值", "排名"],
      price: "免费"
    },
    {
      name: "Synergy Research Group",
      url: "https://www.srgresearch.com",
      cat: "industry",
      desc: "云计算等行业的市场份额研究。",
      note: "常在新闻稿里免费公布份额数据；完整报告要付费。",
      tags: ["市场份额", "云计算"],
      price: "部分免费"
    },
    {
      name: "Similarweb",
      url: "https://www.similarweb.com",
      cat: "industry",
      desc: "网站流量和竞争对手对比。",
      note: "免费版信息有限，看个大概。",
      tags: ["流量", "竞争对手"],
      price: "部分免费"
    },
    {
      name: "Our World in Data",
      url: "https://ourworldindata.org",
      cat: "industry",
      desc: "全球经济、社会数据的可视化。",
      note: "偏宏观，适合了解大背景。",
      tags: ["宏观", "可视化"],
      price: "免费"
    },

    // ---------- 公司与财报 ----------
    {
      name: "SEC EDGAR",
      url: "https://www.sec.gov/edgar/search/",
      cat: "company",
      desc: "美国证监会的上市公司文件库。",
      note: "10-K 年报里有分部收入，比如 Alphabet 的搜索、YouTube、云各占多少，是最权威的细分来源，往往比第三方报告更准。",
      tags: ["财报", "10-K", "分部收入"],
      price: "免费"
    },
    {
      name: "Yahoo Finance",
      url: "https://finance.yahoo.com",
      cat: "company",
      desc: "行情、财报和基本面数据。",
      note: "查单家公司的数据很方便。",
      tags: ["行情", "财报"],
      price: "免费"
    },
    {
      name: "Macrotrends",
      url: "https://www.macrotrends.net",
      cat: "company",
      desc: "公司财务和历史数据的图表。",
      note: "看一家公司多年的收入、利润变化。",
      tags: ["财报", "历史数据"],
      price: "免费"
    },

    // ---------- 图表与平台 ----------
    {
      name: "TradingView",
      url: "https://www.tradingview.com",
      cat: "platform",
      desc: "以图表和技术分析为主的平台。",
      note: "Premium 主要升级图表功能，基本面入口藏得深：个股的 Symbol 页面看财务和收入拆分，Products 菜单里有 Heatmaps 和 Stock Screener。菜单位置可能会变。",
      tags: ["图表", "筛选器", "热力图"],
      price: "付费"
    },
    {
      name: "嘉信理财 Schwab",
      url: "https://www.schwab.com",
      cat: "platform",
      desc: "券商，官网有研究板块，交易平台是 thinkorswim。",
      note: "有 Morningstar 等第三方研究，多数要开户才能看。非美国居民开户限制多，真想交易再考虑。",
      tags: ["券商", "研究"],
      price: "需开户"
    },

    // ---------- 中文资源 ----------
    {
      name: "雪球",
      url: "https://xueqiu.com",
      cat: "zh",
      desc: "国内投资社区，价值投资的讨论很多。",
      note: "也有财报数据。社区观点良莠不齐，当线索看。",
      tags: ["社区", "价值投资"],
      price: "免费"
    },
    {
      name: "东方财富",
      url: "https://www.eastmoney.com",
      cat: "zh",
      desc: "行情和财报数据。",
      note: "国内常用的数据来源之一。",
      tags: ["行情", "财报"],
      price: "免费"
    },
    {
      name: "国家统计局",
      url: "https://www.stats.gov.cn",
      cat: "zh",
      desc: "官方宏观和行业统计数据。",
      note: "要权威数据时用。",
      tags: ["宏观", "官方数据"],
      price: "免费"
    },
    {
      name: "艾瑞咨询",
      url: "https://www.iresearch.cn",
      cat: "zh",
      desc: "互联网等行业的研究报告。",
      note: "有免费摘要，完整报告要付费。",
      tags: ["行业报告", "市场份额"],
      price: "部分免费"
    },
    {
      name: "前瞻产业研究院",
      url: "https://www.qianzhan.com",
      cat: "zh",
      desc: "行业规模和市场份额的研究。",
      note: "有免费摘要，完整报告要付费。",
      tags: ["行业报告", "市场规模"],
      price: "部分免费"
    }
  ]
};
