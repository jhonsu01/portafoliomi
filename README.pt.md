# Portfólio Jhon Supelano 🚀

> Site pessoal e portfólio profissional de **Jhon Jaiver Supelano Rojas** — desenvolvedor de aplicações de IA, DevOps Sênior e especialista em Blockchain.

🌐 **Ao vivo:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | [Français](README.fr.md) | **Português** | [Русский](README.ru.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ Características

- **8 idiomas** — espanhol, inglês, francês, português, russo, chinês, japonês e coreano, com detecção automática do idioma do navegador e seletor manual.
- **Dois temas** — «Papel» (claro, acolhedor) e «Aurora» (escuro, azul/violeta), com atalho de teclado `T`.
- **Data-driven** — perfil, projetos, skills e certificações vivem em `src/js/data.js`. Editar o portfólio = editar dados.
- **100% estático** — sem build step nem dependências: HTML, CSS e JS puros.
- **Constelação de certificações** — canvas interativo com 44 certificações agrupadas por instituição.
- **Responsive e acessível** — respeita `prefers-reduced-motion`; funciona em celular, tablet e desktop.
- **SEO + Open Graph** — meta tags completos.

## 📱 Subsites de aplicações

- Cada app publicada tem sua landing + política de privacidade sob rotas do domínio principal:
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — site completo em 8 idiomas
- **Auditoría Apps** — `/auditoriaapps/` — página de funil do serviço de revisão técnica

## 📂 Estrutura

```
src/
├── index.html           # Estrutura da página
├── css/style.css        # Estilos e temas
├── js/
│   ├── data.js          # 👈 Edite aqui: perfil, skills, projetos
│   ├── i18n.js          # 🌍 Traduções (7 idiomas, es = base)
│   ├── app.js           # Render dinâmico + i18n + animações
│   └── constellation.js # Constelação de certificações
├── img/                 # Capas dos projetos em destaque
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # Geradores (legal multilíngue SafeVault)
```

## 🛠️ Como editar o portfólio

1. Abra `src/js/data.js` e modifique `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE` ou `CERTS`.
2. Para adicionar um idioma ou mudar textos traduzidos, edite `src/js/i18n.js`.
3. Incremente o contador de cache `?v=NNN` em `src/index.html` ao mudar CSS/JS.
4. As mudanças aparecem ao recarregar — sem compilar nada.

## 🌍 Idiomas

- O espanhol é o idioma base (vive no HTML e em `data.js`). As traduções dos outros 7 idiomas estão em `src/js/i18n.js`.
- Ao carregar, o site detecta o idioma do navegador; o usuário pode trocá-lo com o seletor 🌐 ao lado do botão de tema.
- A escolha fica salva em `localStorage` e sobrevive a recarregamentos.

## 🚀 Releases e deploy

- **Deploy:** `git push origin main` + `git pull` no servidor. O site é servido estaticamente, sem reinícios.
- **Cada release** empacota o site completo (`portafolio-X.Y.Z.zip`) e apaga automaticamente as anteriores: só fica a última.
- Nova release: `git tag v0.2.0 && git push origin v0.2.0` (GitHub Actions faz o resto).

## 📜 Licença

MIT © Jhon Supelano.
