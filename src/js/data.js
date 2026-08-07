/* ============================================================================
 *  Portafolio Jhon Supelano — Datos
 *  Edita este archivo para añadir/cambiar proyectos o info de perfil.
 * ============================================================================ */

const PROFILE = {
  name: "Jhon Supelano",
  fullName: "Jhon Jaiver Supelano Rojas",
  roles: [
    "Desarrollador de Aplicaciones de IA",
    "Senior DevOps Engineer",
    "Especialista en Blockchain & Cripto",
    "Tecnólogo en Producción Multimedia"
  ],
  tagline: "Construyo aplicaciones inteligentes que combinan IA, seguridad y experiencia de producto.",
  location: "Colombia",
  email: "jhonsu777@gmail.com",
  phone: "+57 3022068371",
  bio: `Especialista en Inteligencia Artificial y Automatización de Procesos con experiencia full stack: desarrollo Android nativo (Kotlin), C#, TypeScript, JavaScript y PHP. Domino la orquestación de agentes de IA, integración de modelos LLM (Claude, GPT, GLM) y arquitecturas de seguridad con cifrado AES-256. Enfocado en soluciones tecnológicas escalables, desde aplicaciones móviles hasta sistemas inteligentes de producción.`,
  highlights: [
    "10+ años creando contenido tecnológico en YouTube",
    "Ganador del Reto de Ciberseguridad 'Revolución Mr. Robot'",
    "Reconocido como Emprendedor Tecnológico por Apps.co",
    "Ex-Desarrollador Senior de IA en Sunsam"
  ],
  social: {
    github:    "https://github.com/jhonsu01",
    linkedin:  "https://www.linkedin.com/in/jhonsupelano",
    youtube:   "https://www.youtube.com/channel/UCfZIXT8Vur29d4bW0LiAyiw",
    twitter:   "https://twitter.com/JHONSU777",
    telegram:  "https://t.me/jhonsu777",
    whatsapp:  "https://wa.me/qr/4QCHGEUHYPXCK1",
    keybase:   "https://keybase.io/cryptojhonsu",
    instagram: "https://www.instagram.com/jhonsu777/"
  }
};

const SKILLS = [
  { name: "Kotlin / Android",        level: 95, group: "Móvil" },
  { name: "C# / .NET 8 / WPF",       level: 88, group: "Desktop" },
  { name: "TypeScript / JavaScript", level: 85, group: "Web" },
  { name: "Python",                  level: 82, group: "Backend" },
  { name: "Node.js / Express",       level: 80, group: "Backend" },
  { name: "Next.js / Tauri / Rust",  level: 75, group: "Web" },
  { name: "Orquestación de Agentes IA", level: 90, group: "IA" },
  { name: "LLM Integration (Claude/GPT/GLM)", level: 88, group: "IA" },
  { name: "Criptografía AES-256 / PBKDF2", level: 85, group: "Seguridad" },
  { name: "Blockchain / Smart Contracts", level: 78, group: "Web3" },
  { name: "DevOps / Linux / Servidores", level: 87, group: "Infra" },
  { name: "GitHub Actions / CI-CD",  level: 85, group: "Infra" }
];

const PROJECTS = [
  {
    name: "OpenCallShield",
    repo: "https://github.com/jhonsu01/OpenCallShield",
    image: "https://raw.githubusercontent.com/jhonsu01/OpenCallShield/main/assets/banner.png",
    category: "Seguridad",
    tagline: "Bloqueo de llamadas SPAM con privacidad first",
    description: "App Android open source que intercepta llamadas entrantes mediante CallScreeningService para silenciarlas o rechazarlas según un motor de reglas. Sincroniza con una base de datos colaborativa pública en GitHub sin comprometer la privacidad.",
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "WorkManager"],
    features: [
      "Bloqueo automático con CallScreeningService (Android 10+)",
      "Motor de reglas: contactos, listas negras, números reportados",
      "Sincronización colaborativa diaria con blocklist pública",
      "Login con GitHub para reportar números SPAM"
    ]
  },
  {
    name: "OpenWirelessDisplay",
    repo: "https://github.com/jhonsu01/OpenWirelessDisplay",
    image: "https://raw.githubusercontent.com/jhonsu01/OpenWirelessDisplay/main/assets/banner.png",
    category: "Productividad",
    tagline: "Tu Android como monitor inalámbrico de tu PC",
    description: "Alternativa open source a Spacedesk: convierte un dispositivo Android en un monitor secundario inalámbrico para PC Windows. Soporta espejo y modo extendido real mediante un controlador de pantalla virtual, con emparejamiento seguro por PIN.",
    tech: ["Kotlin", ".NET 8", "WPF", "C#", "C++", "mDNS"],
    features: [
      "Modo extendido real con driver de pantalla virtual",
      "Emparejamiento por PIN de 6 dígitos con rotación",
      "Autodetección en LAN vía mDNS/DNS-SD",
      "Baja latencia con descarte de cuadros atrasados"
    ]
  },
  {
    name: "CompartirArchivosRED",
    repo: "https://github.com/jhonsu01/CompartirArchivosRED",
    image: "https://raw.githubusercontent.com/jhonsu01/CompartirArchivosRED/main/assets/banner.png",
    category: "Productividad",
    tagline: "Comparte archivos por red local sin nube ni cables",
    description: "Transferencia inalámbrica de archivos entre Android y Windows en la misma red local. Descubrimiento automático por UDP broadcast y transferencia robusta por TCP, con autorización por PIN expirable.",
    tech: ["Kotlin", "Jetpack Compose", ".NET 8", "WPF", "TCP/UDP"],
    features: [
      "Descubrimiento automático de dispositivos (UDP)",
      "Emparejamiento seguro por PIN de 6 dígitos",
      "Transferencias grandes con barra de progreso",
      "Multiplataforma: APK y MSI"
    ]
  },
  {
    name: "IDPersonalSecure",
    repo: "https://github.com/jhonsu01/IDPersonalSecure",
    image: "https://raw.githubusercontent.com/jhonsu01/IDPersonalSecure/main/assets/banner.png",
    category: "Seguridad",
    tagline: "Bóveda digital personal cifrada AES-256",
    description: "Bóveda digital y gestor de identidad offline-first, multiplataforma (Android + Windows). Cifra documentos de identidad nativamente con AES-256-GCM y permite transferir bóvedas entre dispositivos de forma segura.",
    tech: ["Kotlin", "C#", ".NET 8", "Fluent UI", "AES-256-GCM"],
    features: [
      "Cifrado AES-256-GCM con clave derivada vía PBKDF2",
      "Dos apps nativas con UI moderna y modo oscuro",
      "Exporta/importa bóvedas .securevault cifradas",
      "Offline-first: ningún dato sale del dispositivo"
    ]
  },
  {
    name: "PayBioApp",
    repo: "https://github.com/jhonsu01/PayBioApp",
    image: "https://raw.githubusercontent.com/jhonsu01/PayBioApp/main/assets/banner.png",
    category: "Productividad",
    tagline: "Tarjetero virtual de cobros potenciado por IA on-device",
    description: "Bóveda virtual offline que gestiona métodos de pago (criptos, bancos, billeteras) y los muestra como tarjetas con códigos QR. Usa IA on-device (ML Kit) para extraer datos de pago desde imágenes, con modo kiosko para TV y mostradores.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "SQLCipher", "ML Kit"],
    features: [
      "Ingesta inteligente: IA extrae datos de pago desde imágenes",
      "Catálogo por país con bancos y blockchains (BTC, ETH, Solana)",
      "Modo kiosko para Android TV y mostradores",
      "Backups cifrados en .zip local sin nube"
    ]
  },
  {
    name: "klanly",
    repo: "https://github.com/jhonsu01/klanly",
    image: "https://raw.githubusercontent.com/jhonsu01/klanly/main/assets/banner.png",
    category: "Plataformas",
    tagline: "Plataforma de comunidades de pago tipo Skool",
    description: "Plataforma open source de comunidades de pago con tres roles (Admin, Productor, Usuario). Entrega multiplataforma: apps de escritorio (Tauri), móviles (Android) y web (Next.js), con cobros duales por pasarela y comprobantes manuales.",
    tech: ["Next.js", "Tauri v2", "Rust", "Kotlin", "JWT", "Wompi"],
    features: [
      "Entrega multiplataforma: MSI, APK y web",
      "Cobros duales: pasarela + comprobantes manuales",
      "Releases CI/CD automatizadas con GitHub Actions",
      "Acceso basado en roles con JWT"
    ]
  },
  {
    name: "TurnosDespachoDispensario",
    repo: "https://github.com/jhonsu01/TurnosDespachoDispensario",
    image: "https://raw.githubusercontent.com/jhonsu01/TurnosDespachoDispensario/main/assets/banner.png",
    category: "Productividad",
    tagline: "Turnos de farmacia con OCR de fórmulas por IA",
    description: "Sistema de gestión de colas para farmacias. Los pacientes toman fotos de fórmulas y el personal usa OCR por IA (OpenAI Vision) para leer medicamentos, cruzarlos con inventario y descontar stock por FEFO. Opera offline por red local.",
    tech: ["Kotlin", "Electron", "Node.js", "SQLite", "OpenAI Vision"],
    features: [
      "OCR por IA para extraer medicamentos de fórmulas",
      "Inventario FEFO: descuenta por lote y vencimiento",
      "Emparejamiento seguro con PIN y token revocable",
      "Descubrimiento UDP automático del servidor"
    ]
  },
  {
    name: "ReciclajeApp",
    repo: "https://github.com/jhonsu01/ReciclajeApp",
    image: "https://raw.githubusercontent.com/jhonsu01/ReciclajeApp/main/assets/banner.png",
    category: "Productividad",
    tagline: "Gestión integral de centros de reciclaje offline",
    description: "Sistema offline-first de gestión de centros de reciclaje. Componente de escritorio como servidor local y panel admin, apps Android como interfaces de cliente y estaciones de pesaje, y una app Android TV como tablón público de la cola.",
    tech: ["Electron", "Express", "WebSocket", "Kotlin", "SQLite"],
    features: [
      "Arquitectura offline-first con reintentos automáticos",
      "Auto-descubrimiento UDP del servidor local",
      "Recibos firmados criptográficamente (HMAC-SHA256)",
      "Manifiestos de envío en PDF/JSON"
    ]
  }
];

const EXPERIENCE = [
  { role: "Desarrollador Senior de Aplicaciones de IA", org: "Sunsam", period: "2026 — 8 meses", desc: "Desarrollo end-to-end de apps de IA con orquestación multiagente, integración de LLMs (Claude, GPT, GLM) y arquitecturas que separan procesos determinísticos de estocásticos." },
  { role: "Operador Bursátil de Opciones", org: "tastytrade", period: "2025–2026", desc: "Trading de opciones sobre acciones tecnológicas con análisis de volatilidad implícita y gestión de riesgo." },
  { role: "Analista de Protocolos DeFi", org: "DeFi / Web 3.0", period: "2020–2024", desc: "Análisis de protocolos descentralizados, yield farming y airdrops con gestión de cartera en el ecosistema Web3." },
  { role: "Creador de Contenido Tecnológico", org: "YouTube", period: "2016 — Actualidad", desc: "Más de 10 años produciendo contenido educativo sobre criptografía, blockchain, IA y tecnologías emergentes." },
  { role: "Trader Independiente de Criptoactivos", org: "Binance", period: "2019–2022", desc: "Trading spot y análisis de mercado en múltiples pares de criptomonedas." },
  { role: "Desarrollador Web WordPress", org: "Huvid", period: "2019–2020", desc: "Plataforma LMS sobre WordPress con funcionalidades personalizadas en PHP y MySQL." },
  { role: "Desarrollador de Smart Contracts", org: "Ethereum", period: "2018–2019", desc: "Desarrollo y despliegue de contratos inteligentes ERC-20 en la blockchain de Ethereum." },
  { role: "Técnico de Soporte de TI", org: "Independiente", period: "2013–2019", desc: "Soporte técnico presencial y remoto, administración de Windows/Linux y redes LAN/WiFi." }
];

const CERTS = [
  "Introduction to Cybersecurity",
  "Google Cloud Platform para E-commerce",
  "Curso de Docker",
  "Blockchain y Criptomonedas (Platzi)",
  "Inteligencia Artificial (Platzi)",
  "Marketing y Modelos de Negocio Online (SENA)"
];

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = { PROFILE, SKILLS, PROJECTS, EXPERIENCE, CERTS };
}
