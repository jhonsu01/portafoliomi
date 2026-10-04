# Jhon Supelano 作品集 🚀

> **Jhon Jaiver Supelano Rojas** 的个人网站与专业作品集 — AI 应用开发者、高级 DevOps 工程师、区块链专家。

🌐 **在线：** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | [Français](README.fr.md) | [Português](README.pt.md) | [Русский](README.ru.md) | **中文** | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ 特性

- **8 种语言** — 西班牙语、英语、法语、葡萄牙语、俄语、中文、日语和韩语，自动检测浏览器语言并支持手动切换。
- **双主题** — 「Papel」（浅色暖调）与「Aurora」（深色蓝紫），快捷键 `T`。
- **数据驱动** — 个人资料、项目、技能与认证都在 `src/js/data.js` 中。改作品集 = 改数据。
- **100% 静态** — 无构建步骤、无依赖：纯 HTML、CSS 和 JS。
- **认证星座** — 交互式 canvas，44 项认证按机构分组。
- **响应式且无障碍** — 尊重 `prefers-reduced-motion`，适配手机、平板与桌面。
- **SEO + Open Graph** — 完整的 meta 标签。

## 📱 应用子站

- 每个已发布的应用都在主域名的路由下拥有自己的落地页 + 隐私政策：
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — 支持 8 种语言的完整站点
- **Auditoría Apps** — `/auditoriaapps/` — 技术评审服务营销页

## 📂 目录结构

```
src/
├── index.html           # 页面结构
├── css/style.css        # 样式与主题
├── js/
│   ├── data.js          # 👈 在此编辑：资料、技能、项目
│   ├── i18n.js          # 🌍 翻译（7 种语言，es 为基础）
│   ├── app.js           # 动态渲染 + i18n + 动画
│   └── constellation.js # 认证星座
├── img/                 # 精选项目封面
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # 生成器（SafeVault 多语言法务文档）
```

## 🛠️ 如何编辑作品集

1. 打开 `src/js/data.js`，修改 `PROFILE`、`PROJECTS`、`SKILLS`、`EXPERIENCE` 或 `CERTS`。
2. 新增语言或修改译文请编辑 `src/js/i18n.js`。
3. 修改 CSS/JS 后请提升 `src/index.html` 中的 `?v=NNN` 缓存版本号。
4. 刷新即可看到更改——无需编译。

## 🌍 语言

- 西班牙语为基础语言（位于 HTML 和 `data.js`）。其他 7 种语言的翻译在 `src/js/i18n.js`。
- 加载时网站自动检测浏览器语言；用户可通过主题按钮旁的 🌐 选择器切换。
- 选择保存在 `localStorage` 中，刷新后依然有效。

## 🚀 发布与部署

- **部署：** `git push origin main` + 在服务器上 `git pull`。站点纯静态提供，无需重启。
- **每个 release** 打包完整站点（`portafolio-X.Y.Z.zip`）并自动删除旧版：只保留最新一个。
- 新版本：`git tag v0.2.0 && git push origin v0.2.0`（其余交给 GitHub Actions）。

## 📜 许可证

MIT © Jhon Supelano。
