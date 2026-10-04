# Jhon Supelano ポートフォリオ 🚀

> **Jhon Jaiver Supelano Rojas** の個人サイト兼プロフェッショナル・ポートフォリオ — AIアプリケーション開発者・シニアDevOps・ブロックチェーンスペシャリスト。

🌐 **公開中：** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | [Français](README.fr.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [中文](README.zh.md) | **日本語** | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ 特徴

- **8言語対応** — スペイン語・英語・フランス語・ポルトガル語・ロシア語・中国語・日本語・韓国語。ブラウザ言語を自動検出し、手動切り替えも可能。
- **2つのテーマ** — 「Papel」（ライト・ウォーム）と「Aurora」（ダーク・青/紫）、ショートカット `T`。
- **データ駆動** — プロフィール・プロジェクト・スキル・資格は `src/js/data.js` に格納。ポートフォリオの編集＝データの編集。
- **100%静的** — ビルド不要・依存関係なし：純粋なHTML・CSS・JS。
- **資格の星座** — 44の資格を機関別にグループ化したインタラクティブcanvas。
- **レスポンシブ＆アクセシブル** — `prefers-reduced-motion` を尊重。モバイル・タブレット・デスクトップで動作。
- **SEO + Open Graph** — 完全なmetaタグ。

## 📱 アプリのサブサイト

- 公開中の各アプリには、メインドメインのルート下に独自のランディング＋プライバシーポリシーがあります：
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — 8言語対応の完全サイト
- **Auditoría Apps** — `/auditoriaapps/` — 技術レビューサービスのファネルページ

## 📂 構成

```
src/
├── index.html           # ページ構造
├── css/style.css        # スタイルとテーマ
├── js/
│   ├── data.js          # 👈 ここを編集：プロフィール・スキル・プロジェクト
│   ├── i18n.js          # 🌍 翻訳（7言語、esがベース）
│   ├── app.js           # 動的レンダリング + i18n + アニメーション
│   └── constellation.js # 資格の星座
├── img/                 # 注目プロジェクトのカバー画像
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # ジェネレーター（SafeVault多言語リーガル）
```

## 🛠️ ポートフォリオの編集方法

1. `src/js/data.js` を開き、`PROFILE`・`PROJECTS`・`SKILLS`・`EXPERIENCE`・`CERTS` を変更します。
2. 言語の追加や翻訳の変更は `src/js/i18n.js` を編集します。
3. CSS/JS を変更したら `src/index.html` のキャッシュカウンター `?v=NNN` を上げてください。
4. リロードで反映 — コンパイルは不要です。

## 🌍 言語

- スペイン語がベース（HTMLと `data.js` にあります）。他7言語の翻訳は `src/js/i18n.js` に。
- 読み込み時にブラウザ言語を自動検出。テーマボタン横の 🌐 セレクターで切り替え可能です。
- 選択は `localStorage` に保存され、リロード後も保持されます。

## 🚀 リリースとデプロイ

- **デプロイ：** `git push origin main` + サーバーで `git pull`。静的配信のため再起動不要。
- **各リリース** はサイト全体をパッケージ化（`portafolio-X.Y.Z.zip`）し、旧リリースを自動削除：最新のみ残ります。
- 新リリース：`git tag v0.2.0 && git push origin v0.2.0`（残りはGitHub Actionsが処理）。

## 📜 ライセンス

MIT © Jhon Supelano。
