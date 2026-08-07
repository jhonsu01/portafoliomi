# Portafolio Jhon Supelano 🚀

> Sitio web personal y portafolio profesional de **Jhon Jaiver Supelano Rojas** — Desarrollador de aplicaciones de IA, Senior DevOps y especialista en Blockchain.

🌐 **En vivo:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

![Versión](https://img.shields.io/badge/version-v0.1.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-en%20desarrollo-5fd0c3)

---

## ✨ Características

- **Diseño estilo microsoft.ai / Claude Desktop** — limpio, premium, con gradientes sutiles y tipografía refinada.
- **Data-driven** — los proyectos y la info de perfil viven en `src/js/data.js`. Editar el portafolio = editar un JSON.
- **100% estático** — sin build step, sin dependencias. Solo HTML, CSS y JS vanilla.
- **Responsive** — se ve perfecto en móvil, tablet y desktop.
- **Accesible** — respeta `prefers-reduced-motion` y `prefers-color-scheme`.
- **SEO + Open Graph** — meta tags completos para redes sociales.

## 📂 Estructura

```
portafoliomi/
├── src/
│   ├── index.html          # Estructura de la página
│   ├── css/style.css       # Estilos (estilo microsoft.ai)
│   ├── js/
│   │   ├── data.js         # 👈 Edita aquí: perfil, skills, proyectos
│   │   └── app.js          # Render dinámico + animaciones
├── .github/workflows/
│   └── release.yml         # CI: empaqueta + publica release + cleanup
├── CHANGELOG.md            # Historial de versiones
└── README.md
```

## 🛠️ Cómo editar el portafolio

1. Abre `src/js/data.js`
2. Modifica `PROFILE` (tu info), `PROJECTS` (tus apps), `SKILLS`, `EXPERIENCE` o `CERTS`
3. Los cambios se reflejan al recargar — sin compilar nada

## 🚀 Releases

Este repositorio publica releases versionadas que empaquetan el sitio web completo.

- **Cada release** incluye:
  - `portafolio-X.Y.Z.zip` — el sitio listo para servir
  - `CHANGELOG.md` — con los cambios de la versión
- **Auto-cleanup:** al publicar una nueva versión, las releases anteriores se eliminan automáticamente. Solo se mantiene la última.
- Para crear una nueva release, basta con crear y push un tag: `git tag v0.2.0 && git push origin v0.2.0`

## 📜 Licencia

MIT © Jhon Supelano
