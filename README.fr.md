# Portefolio Jhon Supelano 🚀

> Site personnel et portefolio professionnel de **Jhon Jaiver Supelano Rojas** — développeur d'applications IA, DevOps senior et spécialiste Blockchain.

🌐 **En ligne :** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | **Français** | [Português](README.pt.md) | [Русский](README.ru.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ Caractéristiques

- **8 langues** — espagnol, anglais, français, portugais, russe, chinois, japonais et coréen, avec détection automatique de la langue du navigateur et sélecteur manuel.
- **Deux thèmes** — « Papel » (clair, chaleureux) et « Aurora » (sombre, bleu/violet), avec le raccourci clavier `T`.
- **Piloté par les données** — profil, projets, compétences et certifications vivent dans `src/js/data.js`. Modifier le portefolio = modifier des données.
- **100 % statique** — sans build ni dépendances : HTML, CSS et JS purs.
- **Constellation de certifications** — canvas interactif de 44 certifications groupées par institution.
- **Responsive et accessible** — respecte `prefers-reduced-motion` ; fonctionne sur mobile, tablette et desktop.
- **SEO + Open Graph** — balises meta complètes.

## 📱 Sous-sites d'applications

- Chaque app publiée a sa landing + politique de confidentialité sous des routes du domaine principal :
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — site complet en 8 langues
- **Auditoría Apps** — `/auditoriaapps/` — page tunnel du service de revue technique

## 📂 Structure

```
src/
├── index.html           # Structure de la page
├── css/style.css        # Styles et thèmes
├── js/
│   ├── data.js          # 👈 Modifiez ici : profil, compétences, projets
│   ├── i18n.js          # 🌍 Traductions (7 langues, es = base)
│   ├── app.js           # Rendu dynamique + i18n + animations
│   └── constellation.js # Constellation des certifications
├── img/                 # Couvertures des projets en vedette
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # Générateurs (légal multilingue SafeVault)
```

## 🛠️ Comment modifier le portefolio

1. Ouvrez `src/js/data.js` et modifiez `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE` ou `CERTS`.
2. Pour ajouter une langue ou changer un texte traduit, éditez `src/js/i18n.js`.
3. Incrémentez le compteur de cache `?v=NNN` dans `src/index.html` lors de changements CSS/JS.
4. Les changements apparaissent au rechargement — rien à compiler.

## 🌍 Langues

- L'espagnol est la langue de base (dans le HTML et `data.js`). Les traductions des 7 autres langues sont dans `src/js/i18n.js`.
- Au chargement, le site détecte la langue du navigateur ; l'utilisateur peut la changer avec le sélecteur 🌐 près du bouton de thème.
- Le choix est conservé dans `localStorage` et survit aux rechargements.

## 🚀 Releases et déploiement

- **Déploiement :** `git push origin main` + `git pull` sur le serveur. Le site est servi statiquement, sans redémarrage.
- **Chaque release** empaquette le site complet (`portafolio-X.Y.Z.zip`) et supprime automatiquement les précédentes : seule la dernière reste.
- Nouvelle release : `git tag v0.2.0 && git push origin v0.2.0` (GitHub Actions fait le reste).

## 📜 Licence

MIT © Jhon Supelano.
