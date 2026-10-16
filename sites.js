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
    { id: "ai", name: "AI" },
    { id: "fin", name: "金融" },
    { id: "exch", name: "交易所" },
    { id: "bank", name: "银行" },
    { id: "news", name: "资讯" },
    { id: "video", name: "视频" }
  ],

  sites: [
    // ---------- AI ----------
    {
      name: "Claude",
      url: "https://claude.ai",
      cat: "ai",
      desc: "Anthropic 的 AI 助手，擅长写作、编程和长文档分析。",
      note: "写代码、改文章、读长 PDF 都很强，回答风格克制。国内访问需要科学上网，注册需要海外手机号。",
      tags: ["AI", "编程", "写作"],
      price: "部分免费"
    },
    {
      name: "ChatGPT",
      url: "https://chatgpt.com",
      cat: "ai",
      desc: "OpenAI 的 AI 助手，功能最全面的通用聊天机器人。",
      note: "生态最完整：画图、语音、联网搜索、自定义 GPTs 都有。国内访问需要科学上网。",
      tags: ["AI", "画图", "语音"],
      price: "部分免费"
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com",
      cat: "ai",
      desc: "Google 的 AI 助手，和 Gmail、文档、YouTube 等 Google 服务打通。",
      note: "上下文窗口很长，适合一次丢进大量资料；和 Google 全家桶配合最顺。国内访问需要科学上网。",
      tags: ["AI", "长文档"],
      price: "部分免费"
    },
    {
      name: "Grok",
      url: "https://grok.com",
      cat: "ai",
      desc: "xAI 的 AI 助手，能实时读取 X（推特）上的内容。",
      note: "想知道“现在大家在聊什么”时比较有用，回答风格比较随性。国内访问需要科学上网。",
      tags: ["AI", "实时资讯"],
      price: "部分免费"
    },
    {
      name: "豆包",
      url: "https://www.doubao.com",
      cat: "ai",
      desc: "字节跳动的 AI 助手，国内用户最多的 AI 应用之一。",
      note: "国内直接访问，免费额度足，日常问答、写作、搜索都够用；手机 App 的语音通话很好用。",
      tags: ["AI", "国内可用"],
      price: "免费"
    },
    {
      name: "千问",
      url: "https://www.qianwen.com",
      cat: "ai",
      desc: "阿里巴巴的 AI 助手（原通义千问），背后是开源的 Qwen 模型。",
      note: "国内直接访问，免费。读长文档、总结网页比较方便；Qwen 模型本身也开源，可以自己部署。",
      tags: ["AI", "国内可用", "开源"],
      price: "免费"
    },
    {
      name: "DeepSeek",
      url: "https://chat.deepseek.com",
      cat: "ai",
      desc: "深度求索的 AI 助手，推理和编程能力强，模型开源。",
      note: "国内直接访问，免费。打开“深度思考”能看到推理过程，适合数学和逻辑题；高峰期偶尔会提示服务繁忙。",
      tags: ["AI", "国内可用", "开源", "编程"],
      price: "免费"
    },
    // ---------- 金融 ----------
    {
      name: "Visual Capitalist",
      url: "https://www.visualcapitalist.com/category/markets/",
      cat: "fin",
      desc: "把市场、行业、公司市值做成图的网站。",
      note: "适合小白建立直觉。每张图下面看数据来源和日期：市值、份额变化快，别把旧图当现状；也要看口径是市值、收入还是用户数。",
      tags: ["可视化", "占比"],
      price: "免费"
    },
    {
      name: "Finviz 期货",
      url: "https://finviz.com/futures",
      cat: "fin",
      desc: "期货行情总览：指数、能源、金属、农产品等。",
      note: "免费版行情有延迟、有广告。",
      tags: ["期货", "行情"],
      price: "部分免费"
    },
    {
      name: "TradingView",
      url: "https://www.tradingview.com",
      cat: "fin",
      desc: "以图表和技术分析为主的平台。",
      note: "Premium 主要升级图表功能，基本面入口藏得深：个股的 Symbol 页面看财务和收入拆分，Products 菜单里有 Heatmaps 和 Stock Screener。菜单位置可能会变。",
      tags: ["图表", "筛选器", "热力图"],
      price: "付费"
    },
    {
      name: "Investopedia",
      url: "https://www.investopedia.com",
      cat: "fin",
      desc: "金融和投资术语词典，附入门教程。",
      note: "遇到不懂的词先来查。Stock Basics 教程从零讲起，适合建立基本概念。",
      tags: ["术语", "入门"],
      price: "免费"
    },
    // ---------- 交易所 ----------
    {
      name: "Kraken",
      url: "https://www.kraken.com",
      cat: "exch",
      desc: "加密货币交易所。",
      tags: ["加密货币"],
      price: "需开户"
    },
    {
      name: "Bybit",
      url: "https://www.bybit.com",
      cat: "exch",
      desc: "加密货币交易所。",
      tags: ["加密货币"],
      price: "需开户"
    },
    {
      name: "Binance",
      url: "https://www.binance.com",
      cat: "exch",
      desc: "加密货币交易所。",
      tags: ["加密货币"],
      price: "需开户"
    },
    {
      name: "OKX",
      url: "https://www.okx.com",
      cat: "exch",
      desc: "加密货币交易所。",
      tags: ["加密货币"],
      price: "需开户"
    },
    {
      name: "盈透证券 IBKR 美国",
      url: "https://www.interactivebrokers.com",
      cat: "exch",
      desc: "券商，可交易全球多个市场的股票、期货、期权等。",
      tags: ["券商"],
      price: "需开户"
    },
    {
      name: "嘉信理财 Schwab",
      url: "https://www.schwab.com",
      cat: "exch",
      desc: "券商，官网有研究板块，交易平台是 thinkorswim。",
      note: "有 Morningstar 等第三方研究，多数要开户才能看。非美国居民开户限制多，真想交易再考虑。",
      tags: ["券商", "研究"],
      price: "需开户"
    },
    {
      name: "TradingView",
      url: "https://www.tradingview.com",
      cat: "exch",
      desc: "以图表和技术分析为主的平台，也可连接券商交易。",
      tags: ["图表"],
      price: "付费"
    },
    {
      name: "Polymarket",
      url: "https://polymarket.com",
      cat: "exch",
      desc: "预测市场，对事件结果下注。",
      tags: ["预测市场"],
      price: "需开户"
    },
    // ---------- 银行 ----------
    {
      name: "汇丰 HSBC 香港",
      url: "https://www.hsbc.com.hk",
      cat: "bank",
      desc: "银行。",
      tags: ["银行"],
      price: "需开户"
    },
    {
      name: "Capital One",
      url: "https://www.capitalone.com",
      cat: "bank",
      desc: "银行和信用卡。",
      tags: ["银行"],
      price: "需开户"
    },
    {
      name: "Wise",
      url: "https://wise.com",
      cat: "bank",
      desc: "跨境汇款和多币种账户。",
      tags: ["汇款", "多币种"],
      price: "需开户"
    },
    {
      name: "N26",
      url: "https://n26.com",
      cat: "bank",
      desc: "欧洲数字银行。",
      tags: ["银行"],
      price: "需开户"
    },
    // ---------- 资讯 ----------
    {
      name: "小红书",
      url: "https://www.xiaohongshu.com",
      cat: "news",
      desc: "生活方式和经验分享社区。",
      tags: ["社区"],
      price: "免费"
    },
    {
      name: "X",
      url: "https://x.com",
      cat: "news",
      desc: "社交媒体，实时消息和讨论。",
      tags: ["社交"],
      price: "免费"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      cat: "news",
      desc: "视频平台，也是重要的资讯来源。",
      tags: ["视频"],
      price: "免费"
    },
    {
      name: "Hacker News",
      url: "https://news.ycombinator.com",
      cat: "news",
      desc: "技术和创业社区，AI 相关讨论很多。",
      tags: ["AI", "技术", "社区"],
      price: "免费"
    },
    // ---------- 视频 ----------
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      cat: "video",
      desc: "视频平台。",
      tags: ["视频"],
      price: "免费"
    },
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      cat: "video",
      desc: "流媒体影视平台。",
      tags: ["影视"],
      price: "付费"
    },
    {
      name: "huangguoai",
      url: "https://huangguoai.com",
      cat: "video",
      desc: "成人网站。",
      tags: ["成人"],
      price: "免费"
    },
    {
      name: "Pornhub",
      url: "https://www.pornhub.com",
      cat: "video",
      desc: "成人网站。",
      tags: ["成人"],
      price: "免费"
    },
    {
      name: "XVideos",
      url: "https://www.xvideos.com",
      cat: "video",
      desc: "成人网站。",
      tags: ["成人"],
      price: "免费"
    },
    {
      name: "bad.news",
      url: "https://bad.news",
      cat: "video",
      desc: "成人网站。",
      tags: ["成人"],
      price: "免费"
    }
  ]
};
