# nav-page

静态导航页("黄页"),部署地址:https://nav.cyberniuma.com

## 文件

- `index.html`:页面本身,一般不用改。
- `sites.js`:数据文件,定义 `window.START_PAGE`(含 `categories` 和 `sites`)。

两个文件必须在仓库根目录,通过 `<script src="sites.js">` 加载,不依赖任何构建工具。

## 增删站点

编辑 `sites.js`,照着已有格式增删 `sites` 里的条目,可改的字段有 `name`、`url`、`cat`、`desc`、`note`、`tags`、`price`。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署

部署在 Cloudflare Pages,连接此 GitHub 仓库:

- 构建命令:无
- 输出目录:`/`(仓库根目录)

push 到 `main` 即自动部署。
