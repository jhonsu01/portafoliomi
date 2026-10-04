# Портфолио Jhon Supelano 🚀

> Личный сайт и профессиональное портфолио **Jhon Jaiver Supelano Rojas** — разработчика ИИ-приложений, senior DevOps-инженера и специалиста по блокчейну.

🌐 **Онлайн:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | [Français](README.fr.md) | [Português](README.pt.md) | **Русский** | [中文](README.zh.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ Возможности

- **8 языков** — испанский, английский, французский, португальский, русский, китайский, японский и корейский, с автоопределением языка браузера и ручным селектором.
- **Две темы** — «Papel» (светлая, тёплая) и «Aurora» (тёмная, синяя/фиолетовая), горячая клавиша `T`.
- **Данные отдельно от кода** — профиль, проекты, навыки и сертификаты живут в `src/js/data.js`. Редактировать портфолио = редактировать данные.
- **100% статика** — без сборки и зависимостей: чистые HTML, CSS и JS.
- **Созвездие сертификатов** — интерактивный canvas с 44 сертификатами, сгруппированными по учебным заведениям.
- **Адаптивность и доступность** — уважает `prefers-reduced-motion`; работает на телефоне, планшете и компьютере.
- **SEO + Open Graph** — полные мета-теги.

## 📋 Подсайты приложений

- У каждого опубликованного приложения своя landing-страница + политика конфиденциальности на маршрутах основного домена:
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — полноценный сайт на 8 языках
- **Auditoría Apps** — `/auditoriaapps/` — воронка услуги технического аудита

## 📂 Структура

```
src/
├── index.html           # Структура страницы
├── css/style.css        # Стили и темы
├── js/
│   ├── data.js          # 👈 Редактируйте здесь: профиль, навыки, проекты
│   ├── i18n.js          # 🌍 Переводы (7 языков, es = база)
│   ├── app.js           # Динамический рендер + i18n + анимации
│   └── constellation.js # Созвездие сертификатов
├── img/                 # Обложки избранных проектов
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # Генераторы (мультиязычная юридическая документация SafeVault)
```

## 🛠️ Как редактировать портфолио

1. Откройте `src/js/data.js` и измените `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE` или `CERTS`.
2. Чтобы добавить язык или изменить перевод, правьте `src/js/i18n.js`.
3. Увеличьте счётчик кэша `?v=NNN` в `src/index.html` при изменении CSS/JS.
4. Изменения появляются после перезагрузки — компилировать ничего не нужно.

## 🌍 Языки

- Испанский — базовый язык (живёт в HTML и `data.js`). Переводы остальных 7 языков — в `src/js/i18n.js`.
- При загрузке сайт определяет язык браузера; пользователь может сменить его селектором 🌐 рядом с кнопкой темы.
- Выбор сохраняется в `localStorage` и переживает перезагрузки.

## 🚀 Релизы и развёртывание

- **Развёртывание:** `git push origin main` + `git pull` на сервере. Сайт отдаётся статикой, без перезапусков.
- **Каждый релиз** упаковывает весь сайт (`portafolio-X.Y.Z.zip`) и автоматически удаляет предыдущие: остаётся только последний.
- Новый релиз: `git tag v0.2.0 && git push origin v0.2.0` (остальное делает GitHub Actions).

## 📜 Лицензия

MIT © Jhon Supelano.
