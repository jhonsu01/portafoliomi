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

/* --- Emisores con color e info (para la nube de constelación) --- */
const ISSUERS = {
  "Platzi":                                       { short:"Platzi",   color:"#7c3aed", kind:"Tech" },
  "Servicio Nacional de Aprendizaje (SENA)":      { short:"SENA",     color:"#39a935", kind:"Formal" },
  "Amazon Web Services (AWS)":                    { short:"AWS",      color:"#ff9900", kind:"Cloud" },
  "Huawei":                                       { short:"Huawei",   color:"#c8102e", kind:"Telco" },
  "Cisco Networking Academy":                     { short:"Cisco",    color:"#1ba0d7", kind:"Seguridad" },
  "Coursera":                                     { short:"Coursera", color:"#0056d3", kind:"Gestión" },
  "NASA - National Aeronautics and Space Administration": { short:"NASA", color:"#0b3d91", kind:"Hackathon" },
  "Universidad Distrital Francisco José de Caldas": { short:"U. Distrital", color:"#8a2be2", kind:"Académico" },
  "Bancolombia":                                  { short:"Bancolombia", color:"#ffd200", kind:"Finanzas" },
  "Bancoldex":                                    { short:"Bancoldex", color:"#e87722", kind:"Negocios" },
  "bvc-Bolsa de Valores de Colombia S.A.":        { short:"bvc",      color:"#0046a8", kind:"Finanzas" },
  "Superintendencia Financiera de Colombia":      { short:"SFC",      color:"#0a6b3b", kind:"Finanzas" },
  "Cámara de Comercio de Casanare":               { short:"Cámara",   color:"#b8860b", kind:"Negocios" },
  "CertiProf":                                    { short:"CertiProf",color:"#16a085", kind:"Agile" },
  "LinkedIn":                                     { short:"LinkedIn", color:"#0a66c2", kind:"Soft skills" },
  "CodeAI":                                       { short:"CodeAI",   color:"#e91e63", kind:"Programación" }
};

/* --- 44 certificaciones (orden: por emisor, luego fecha desc) ---
   cat = categoría temática derivada del título (para tooltip/leyenda) */
const CERTS = [
  { name:"Capacitación Financiera", issuer:"Bancolombia", date:"2026-07", cat:"Finanzas" },
  { name:"Monetización avanzada multiplataforma", issuer:"Universidad Distrital Francisco José de Caldas", date:"2026-06", cat:"Negocios" },
  { name:"Galactic Problem Solver — Space Apps Challenge", issuer:"NASA - National Aeronautics and Space Administration", date:"2025-10", cat:"Hackathon" },
  { name:"Fundamentos de la gestión de proyectos", issuer:"Coursera", date:"2024-08", cat:"Gestión" },
  { name:"Prework para Desarrollo de Aplicaciones Blockchain", issuer:"Platzi", date:"2021-11", cat:"Blockchain" },
  { name:"Introducción al Desarrollo Blockchain: Smart Contracts", issuer:"Platzi", date:"2021-11", cat:"Blockchain" },
  { name:"Ethereum para Developers", issuer:"Platzi", date:"2021-11", cat:"Blockchain" },
  { name:"DeFi: Inversiones en Finanzas Descentralizadas", issuer:"Platzi", date:"2021-11", cat:"Blockchain" },
  { name:"Creación de NFTs", issuer:"Platzi", date:"2021-11", cat:"Blockchain" },
  { name:"HCIA-5G Course", issuer:"Huawei", date:"2021-03", cat:"Telecom" },
  { name:"Redes Informáticas de Internet", issuer:"Platzi", date:"2021-02", cat:"Infraestructura" },
  { name:"Inglés Técnico para Profesionales", issuer:"Platzi", date:"2021-02", cat:"Idiomas" },
  { name:"Administración de Servidores Linux", issuer:"Platzi", date:"2021-02", cat:"DevOps" },
  { name:"Jenkins", issuer:"Platzi", date:"2021-01", cat:"DevOps" },
  { name:"Docker", issuer:"Platzi", date:"2021-01", cat:"DevOps" },
  { name:"ICO: Initial Coin Offering", issuer:"Platzi", date:"2020-12", cat:"Blockchain" },
  { name:"Google Cloud Platform para E-commerce", issuer:"Platzi", date:"2020-12", cat:"Cloud" },
  { name:"Finanzas Personales para el Futuro", issuer:"Platzi", date:"2020-12", cat:"Finanzas" },
  { name:"Finanzas Personales", issuer:"Platzi", date:"2020-11", cat:"Finanzas" },
  { name:"Web Development Engineer", issuer:"Amazon Web Services (AWS)", date:"2020-08", cat:"Cloud" },
  { name:"Habilidades para teletrabajo", issuer:"LinkedIn", date:"2020-07", cat:"Soft skills" },
  { name:"Scrum Foundations Professional (SFPC)", issuer:"CertiProf", date:"2020-06", cat:"Agile" },
  { name:"Inteligencia Artificial con IBM Watson", issuer:"Platzi", date:"2020-05", cat:"IA" },
  { name:"Ingeniería de datos con Python", issuer:"Platzi", date:"2020-05", cat:"Datos" },
  { name:"Deployment Best Practices for Amazon WorkSpaces", issuer:"Amazon Web Services (AWS)", date:"2020-05", cat:"Cloud" },
  { name:"Bolsa para principiantes", issuer:"bvc-Bolsa de Valores de Colombia S.A.", date:"2020-04", cat:"Finanzas" },
  { name:"Fintech para emprendedores", issuer:"Superintendencia Financiera de Colombia", date:"2020-04", cat:"Finanzas" },
  { name:"Python", issuer:"Platzi", date:"2020-04", cat:"Programación" },
  { name:"Machine Learning Aplicado con Python", issuer:"Platzi", date:"2020-04", cat:"IA" },
  { name:"Introduction to Cybersecurity", issuer:"Cisco Networking Academy", date:"2020-04", cat:"Seguridad" },
  { name:"Fundamentos Matemáticos para IA", issuer:"Platzi", date:"2020-03", cat:"IA" },
  { name:"Estructuración de modelos de negocio", issuer:"Bancoldex", date:"2019-11", cat:"Negocios" },
  { name:"Software Development Engineer — DevOps", issuer:"Amazon Web Services (AWS)", date:"2019-11", cat:"Cloud" },
  { name:"Gerente en microempresas en etapa temprana", issuer:"Cámara de Comercio de Casanare", date:"2019-10", cat:"Negocios" },
  { name:"Controladores Lógicos Programables PLC 1", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2018-07", cat:"Industrial" },
  { name:"Teletrabajo para independientes", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2016-05", cat:"Soft skills" },
  { name:"The Hour of Code — Computer Science", issuer:"CodeAI", date:"2014-11", cat:"Programación" },
  { name:"Trámites legales para constitución de empresa", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2014-06", cat:"Negocios" },
  { name:"Programación de dispositivos móviles", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2011-12", cat:"Programación" },
  { name:"Sistemas de gestión de calidad — SST", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2011-11", cat:"Calidad" },
  { name:"English Discoveries Intermedio I", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2010-07", cat:"Idiomas" },
  { name:"Controles y seguridad informática", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2010-04", cat:"Seguridad" },
  { name:"Diseño Web con Adobe Dreamweaver", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2009-09", cat:"Diseño" },
  { name:"Ensamble y mantenimiento de computadoras", issuer:"Servicio Nacional de Aprendizaje (SENA)", date:"2009-07", cat:"Hardware" }
];

/* --- Trayectoria académica (8 títulos, orden cronológico inverso) --- */
const STUDIES = [
  { title:"Ingeniería de Multimedia", school:"Universidad Nacional Abierta y a Distancia (UNAD)", period:"2026 – 2029", status:"En curso", note:"Acuerdo de homologación SENA 012/2019", skills:["Programación","Producción Multimedia","Sistemas"] },
  { title:"Tecnólogo en Distribución Física Internacional", school:"SENA", period:"2021 – 2023", status:"Titulado", skills:["Importación/Exportación","Aduanas","Logística"] },
  { title:"Inteligencia Artificial", school:"Platzi (alianza MinTIC)", period:"2020", status:"Completado", skills:["IA","Tecnologías científicas"] },
  { title:"Blockchain y Criptomonedas", school:"Platzi", period:"2020", status:"Completado", skills:["Blockchain","DeFi"] },
  { title:"Especialización en Marketing y Modelos de Negocio Online", school:"SENA", period:"2019", status:"Titulado", skills:["Marketing digital","Negocios"] },
  { title:"Tecnólogo en Producción de Multimedia", school:"SENA", period:"2016 – 2018", status:"Titulado", skills:["Multimedia","Producción audiovisual"] },
  { title:"Auxiliar en Ensamble y Configuración de PCs", school:"SENA", period:"2007 – 2008", status:"Titulado", note:"Certificado de Aptitud Profesional", skills:["Hardware","Soporte"] },
  { title:"Bachiller Técnico en Electricidad (Electrónica)", school:"Colegio Juan José Rondón", period:"2007 – 2008", status:"Bachiller", note:"Práctica en mantenimiento de equipos", skills:["Electricidad","Electrónica"] }
];

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = { PROFILE, SKILLS, PROJECTS, EXPERIENCE, CERTS, ISSUERS, STUDIES };
}
