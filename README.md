# nav-page

静态导航页("黄页"),部署地址:https://nav.cyberniuma.com

## 文件

- `index.html`:页面本身,一般不用改。
- `sites.js`:数据文件,定义 `window.START_PAGE`(含 `categories` 和 `sites`)。

两个文件必须在仓库根目录,通过 `<script src="sites.js">` 加载,不依赖任何构建工具。

## 增删站点

编辑 `sites.js`,照着已有格式增删 `sites` 里的条目,可改的字段有 `name`、`url`、`cat`、`desc`、`note`、`tags`、`price`。

## 页面

终端风格,两套主题:羊皮纸藏宝图(默认)和暖炭灰,右上角切换,选择会记在浏览器里;也可以用 `?theme=dark` / `?theme=parchment` 指定。
桌面悬停站点方块显示详情,手机点一下从底部弹出详情面板。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署

和 home、finance 一起部署在 VPS 的 Docker(Caddy)里。在 `~/code/other/finance_learn` 运行:

```bash
deploy/deploy.sh
```

脚本会把本仓库的 `index.html` 和 `sites.js` 同步到服务器(不含 `.git`、`README.md`)。

以前用的 Cloudflare Pages 项目 `nav-page` 已解除 `nav.cyberniuma.com` 的绑定,push 后它仍会自动构建到 `nav-page-1oi.pages.dev`,但没有域名指向它,可以在 Cloudflare 后台断开或删除。
