# Portafolio Jhon Supelano 🚀

> Sitio web personal y portafolio profesional de **Jhon Jaiver Supelano Rojas** — Desarrollador de aplicaciones de IA, Senior DevOps y especialista en Blockchain.

🌐 **En vivo:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

**Español** | [English](README.en.md) | [Français](README.fr.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ Características

- **8 idiomas** — español, inglés, francés, portugués, ruso, chino, japonés y coreano, con detección automática del idioma del navegador y selector manual.
- **Dos temas** — «Papel» (claro, cálido) y «Aurora» (oscuro, azul/violeta), con atajo de teclado `T`.
- **Data-driven** — perfil, proyectos, skills y certificaciones viven en `src/js/data.js`. Editar el portafolio = editar datos.
- **100% estático** — sin build step ni dependencias: HTML, CSS y JS vanilla.
- **Constelación de certificaciones** — canvas interactivo con 44 certificaciones agrupadas por institución.
- **Responsive y accesible** — respeta `prefers-reduced-motion` y funciona en móvil, tablet y desktop.
- **SEO + Open Graph** — meta tags completos.

## 📱 Subsitios de aplicaciones

- Cada app publicada tiene su propia landing + política de privacidad bajo rutas del dominio principal:
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — sitio completo en 8 idiomas
- **Auditoría Apps** — `/auditoriaapps/` — página de embudo del servicio de revisión técnica

## 📂 Estructura

```
src/
├── index.html           # Estructura de la página
├── css/style.css        # Estilos y temas
├── js/
│   ├── data.js          # 👈 Edita aquí: perfil, skills, proyectos
│   ├── i18n.js          # 🌍 Traducciones (7 idiomas, es = base)
│   ├── app.js           # Render dinámico + i18n + animaciones
│   └── constellation.js # Constelación de certificaciones
├── img/                 # Portadas de los proyectos destacados
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # Generadores (legal multilingüe SafeVault)
```

## 🛠️ Cómo editar el portafolio

1. Abre `src/js/data.js` y modifica `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE` o `CERTS`.
2. Para añadir un idioma o cambiar textos traducidos, edita `src/js/i18n.js`.
3. Sube el contador de caché `?v=NNN` en `src/index.html` al cambiar CSS/JS.
4. Los cambios se reflejan al recargar — sin compilar nada.

## 🌍 Idiomas

- El español es el idioma base (vive en el HTML y `data.js`). Las traducciones de los otros 7 idiomas están en `src/js/i18n.js`.
- Al cargar, la web detecta el idioma del navegador; el usuario puede cambiarlo con el selector 🌐 junto al botón de tema.
- La elección se guarda en `localStorage` y sobrevive recargas.

## 🚀 Releases y despliegue

- **Deploy:** `git push origin main` + `git pull` en el servidor. El sitio se sirve estático, sin reinicios.
- **Cada release** empaqueta el sitio completo (`portafolio-X.Y.Z.zip`) y borra automáticamente las anteriores: solo queda la última.
- Nueva release: `git tag v0.2.0 && git push origin v0.2.0` (GitHub Actions hace el resto).

## 📜 Licencia

MIT © Jhon Supelano.
