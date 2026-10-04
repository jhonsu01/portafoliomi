# Jhon Supelano Portfolio 🚀

> Personal website and professional portfolio of **Jhon Jaiver Supelano Rojas** — AI application developer, Senior DevOps and Blockchain specialist.

🌐 **Live:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | **English** | [Français](README.fr.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ Features

- **8 languages** — Spanish, English, French, Portuguese, Russian, Chinese, Japanese and Korean, with automatic browser-language detection and a manual selector.
- **Two themes** — "Papel" (light, warm) and "Aurora" (dark, blue/violet), with the `T` keyboard shortcut.
- **Data-driven** — profile, projects, skills and certifications live in `src/js/data.js`. Editing the portfolio = editing data.
- **100% static** — no build step, no dependencies: plain HTML, CSS and JS.
- **Certification constellation** — interactive canvas with 44 certifications grouped by institution.
- **Responsive & accessible** — respects `prefers-reduced-motion`; works on mobile, tablet and desktop.
- **SEO + Open Graph** — full meta tags.

## 📱 App subsites

- Every published app has its own landing + privacy policy under routes of the main domain:
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — full site in 8 languages
- **Auditoría Apps** — `/auditoriaapps/` — funnel page for the technical review service

## 📂 Structure

```
src/
├── index.html           # Page structure
├── css/style.css        # Styles and themes
├── js/
│   ├── data.js          # 👈 Edit here: profile, skills, projects
│   ├── i18n.js          # 🌍 Translations (7 languages, es = base)
│   ├── app.js           # Dynamic render + i18n + animations
│   └── constellation.js # Certification constellation
├── img/                 # Featured project covers
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # Generators (SafeVault multilingual legal)
```

## 🛠️ How to edit the portfolio

1. Open `src/js/data.js` and modify `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE` or `CERTS`.
2. To add a language or change translated strings, edit `src/js/i18n.js`.
3. Bump the `?v=NNN` cache counter in `src/index.html` when changing CSS/JS.
4. Changes appear on reload — nothing to compile.

## 🌍 Languages

- Spanish is the base language (lives in the HTML and `data.js`). Translations for the other 7 languages live in `src/js/i18n.js`.
- On load the site detects the browser language; users can switch it with the 🌐 selector next to the theme button.
- The choice is stored in `localStorage` and survives reloads.

## 🚀 Releases & deployment

- **Deploy:** `git push origin main` + `git pull` on the server. The site is served statically, no restarts.
- **Every release** packages the full site (`portafolio-X.Y.Z.zip`) and automatically deletes previous ones: only the latest remains.
- New release: `git tag v0.2.0 && git push origin v0.2.0` (GitHub Actions does the rest).

## 📜 License

MIT © Jhon Supelano.
