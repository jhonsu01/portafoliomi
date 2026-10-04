# Jhon Supelano 포트폴리오 🚀

> **Jhon Jaiver Supelano Rojas**의 개인 웹사이트이자 전문 포트폴리오 — AI 애플리케이션 개발자, 시니어 DevOps, 블록체인 전문가.

🌐 **라이브:** [serviciosconiabyjhonsu.com](https://serviciosconiabyjhonsu.com)

[Español](README.md) | [English](README.en.md) | [Français](README.fr.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [中文](README.zh.md) | [日本語](README.ja.md) | **한국어**

![Versión](https://img.shields.io/badge/version-v0.2.0-6e8cff)
![License](https://img.shields.io/badge/license-MIT-9d7cff)
![Status](https://img.shields.io/badge/status-activo-5fd0c3)

---

## ✨ 특징

- **8개 언어** — 스페인어, 영어, 프랑스어, 포르투갈어, 러시아어, 중국어, 일본어, 한국어. 브라우저 언어 자동 감지 + 수동 선택기.
- **두 가지 테마** — «Papel»(밝고 따뜻함)과 «Aurora»(어두운 남색/보라), 단축키 `T`.
- **데이터 기반** — 프로필·프로젝트·스킬·자격증은 `src/js/data.js`에 있습니다. 포트폴리오 수정 = 데이터 수정.
- **100% 정적** — 빌드도 의존성도 없음: 순수 HTML·CSS·JS.
- **자격증 별자리** — 44개 자격증을 기관별로 묶은 인터랙티브 canvas.
- **반응형 및 접근성** — `prefers-reduced-motion` 존중; 모바일·태블릿·데스크톱 지원.
- **SEO + Open Graph** — 완전한 메타 태그.

## 📱 앱 하위 사이트

- 출시된 각 앱은 메인 도메인 경로 아래에 자체 랜딩 페이지 + 개인정보 처리방침을 갖습니다:
- **PrintOrganize** — `/printorganize/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.printorganize) + Microsoft Store
- **Docu Scaner 150%** — `/docuscaner/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.docuscaner)
- **Cuentero Infinito** — `/cuentero/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.cuenteroinfinito)
- **OnionHost** — `/onionhost/` · [Google Play](https://play.google.com/store/apps/details?id=com.jhonsu01.onionhost) + Microsoft Store
- **SafeVault** — `/safevault/` — 8개 언어를 지원하는 완전한 사이트
- **Auditoría Apps** — `/auditoriaapps/` — 기술 리뷰 서비스 퍼널 페이지

## 📂 구조

```
src/
├── index.html           # 페이지 구조
├── css/style.css        # 스타일과 테마
├── js/
│   ├── data.js          # 👈 여기를 수정: 프로필·스킬·프로젝트
│   ├── i18n.js          # 🌍 번역 (7개 언어, es가 기본)
│   ├── app.js           # 동적 렌더링 + i18n + 애니메이션
│   └── constellation.js # 자격증 별자리
├── img/                 # 주요 프로젝트 커버
├── printorganize/ docuscaner/ cuentero/ onionhost/ safevault/ auditoriaapps/
└── tools/               # 생성기 (SafeVault 다국어 법률 문서)
```

## 🛠️ 포트폴리오 수정 방법

1. `src/js/data.js`를 열고 `PROFILE`, `PROJECTS`, `SKILLS`, `EXPERIENCE`, `CERTS`를 수정하세요.
2. 언어 추가나 번역 변경은 `src/js/i18n.js`를 편집하세요.
3. CSS/JS를 변경하면 `src/index.html`의 캐시 카운터 `?v=NNN`을 올리세요.
4. 새로고침하면 반영됩니다 — 컴파일 불필요.

## 🌍 언어

- 스페인어가 기본 언어입니다(HTML과 `data.js`에 있음). 나머지 7개 언어 번역은 `src/js/i18n.js`에.
- 로드 시 브라우저 언어를 감지하며, 테마 버튼 옆의 🌐 선택기로 변경할 수 있습니다.
- 선택은 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

## 🚀 릴리스와 배포

- **배포:** `git push origin main` + 서버에서 `git pull`. 정적으로 제공되어 재시작이 필요 없습니다.
- **각 릴리스**는 전체 사이트를 패키징(`portafolio-X.Y.Z.zip`)하고 이전 릴리스를 자동 삭제: 최신만 남습니다.
- 새 릴리스: `git tag v0.2.0 && git push origin v0.2.0` (나머지는 GitHub Actions가 처리).

## 📜 라이선스

MIT © Jhon Supelano.
