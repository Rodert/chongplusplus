# 大象Token Website

大象Token 官网前端工程，基于 `Vite + HTML/CSS/JS`，用于展示 Token 充值、Key 管理、模型接入与教程支持。

## 功能说明

- 官网单页：品牌首屏、GPT-5.5 / Claude Opus 4.7 支持、充值入口、接入流程、FAQ、CTA
- 响应式布局：桌面端和移动端适配
- GitHub Pages 自动部署：推送 `main` 后自动构建发布
- 自定义域名：通过 `public/CNAME` 固定发布域名

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```txt
http://localhost:5173
```

## 构建与预览

```bash
npm run build
npm run preview
```

## GitHub Pages 部署

工作流文件：`.github/workflows/pages.yml`

触发方式：

- push 到 `main`
- 手动触发 `workflow_dispatch`

仓库设置要求：

1. 打开 GitHub 仓库 `Settings -> Pages`
2. `Build and deployment` 的 `Source` 选择 `GitHub Actions`
3. 确保域名 DNS 已正确指向 GitHub Pages（`CNAME` 对应 `<username>.github.io`）

## 目录结构

```txt
.
├── .github/workflows/pages.yml
├── public/
│   ├── CNAME
│   └── favicon.svg
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```
