/* ============================================================================
 *  Portafolio Jhon Supelano — i18n
 *  Español = base (data.js). Aquí las traducciones de los otros 7 idiomas.
 *  Estructura por idioma:
 *    ui        → textos estáticos del index.html (data-i) y botones
 *    profile   → roles, tagline, bio, highlights
 *    cats      → categorías de proyecto visibles
 *    groups    → grupos de skills
 *    projects  → { "Nombre exacto": {t: tagline, d: description} }
 *    exp       → [{r: role, d: desc}] en el mismo orden que EXPERIENCE
 *    studies   → [{t: title, s: status, n: nota|null}] mismo orden que STUDIES
 * ============================================================================ */
window.PORTFOLIO_I18N = {

/* ============================== ENGLISH ============================== */
en: {
docTitle:"Jhon Supelano — AI, DevOps & Blockchain Developer",
ui:{
  greet:"Hi, I'm",
  navAbout:"About", navSkills:"Skills", navProjects:"Projects", navExp:"Career", navContact:"Contact",
  eyebrow:"Available for new projects",
  btnProjects:"View projects →", btnContact:"Get in touch",
  aboutK:"About", aboutH:"An engineer bridging AI, product and security",
  skillsK:"Capabilities", skillsH:"Technologies I master", skillsP:"A complete stack to build, ship and secure intelligent applications.",
  projectsK:"Portfolio", projectsH:"Featured projects", projectsP:"Apps published on Google Play and open-source projects focused on privacy, AI and productivity.",
  expK:"Career", expH:"Professional experience",
  studiesK:"Education", studiesH:"Academic background", studiesP:"From technical high school to multimedia engineering — a decade of non-stop learning.",
  certsK:"44 certifications", certsH:"What I have learned", certsP:"Each dot is a certification; each color, an institution. Hover over the constellation.",
  hint:"💡 Hover a dot to see the certification · each color groups by issuing institution.",
  contactH:'Shall we build something <span class="grad">extraordinary</span>?',
  contactBtn:"Email me ✦",
  contactText:"Whether it's an AI product, a secure app or a technical consultation — let's talk.",
  footerMade:"Built with AI in Colombia 🇨🇴",
  stats:["Open-source projects","Years in tech","Military-grade encryption","Offline-first"],
  achTitle:"Career highlights", location:"Colombia",
  viewGithub:"View on GitHub →", viewPlay:"View on Play Store →", msStore:"Microsoft Store →", more:"Learn more →",
  langBtn:"Language"
},
profile:{
  roles:["AI Application Developer","Senior DevOps Engineer","Blockchain & Crypto Specialist","Multimedia Production Technologist"],
  tagline:"I build intelligent applications that combine AI, security and product experience.",
  bio:"AI and Process Automation specialist with full-stack experience: native Android development (Kotlin), C#, TypeScript, JavaScript and PHP. I master AI agent orchestration, LLM integration (Claude, GPT, GLM) and security architectures with AES-256 encryption. Focused on scalable technology solutions, from mobile apps to intelligent production systems.",
  highlights:["10+ years creating tech content on YouTube","Winner of the 'Revolución Mr. Robot' Cybersecurity Challenge","Recognized as Tech Entrepreneur by Apps.co","Former Senior AI Developer at Sunsam"]
},
cats:{"Tienda de Apps":"App Store","Productividad":"Productivity","Seguridad":"Security","Privacidad":"Privacy","Entretenimiento":"Entertainment","Plataformas":"Platforms"},
groups:{"Móvil":"Mobile","Desktop":"Desktop","Web":"Web","Backend":"Backend","IA":"AI","Seguridad":"Security","Web3":"Web3","Infra":"Infra"},
projects:{
  "Sunsam Apps Store":{t:"The showcase of all my applications, in one store",d:"Own app store compiling every project by the developer: a page per app with description, screenshots and direct APK download. Web version deployed on GitHub Pages plus a store APK for Android."},
  "OnionHost":{t:"Your website on the Tor network, from your phone or PC",d:"App published on Google Play and Microsoft Store that turns any folder with an index.html into a site with its own .onion address (hidden services v3). Tor is embedded, the web server runs on the device itself and files never leave it: zero data collection."},
  "Cuentero Infinito":{t:"AI stories born and read aloud on your phone",d:"App published on Google Play where a language model (LFM2-1.2B) runs inside the phone via llama.cpp: ask for a story, it invents one from scratch and reads it aloud. Spanish or English, kids mode with content filter and PIN, and continuous mode for sleeping. No connection, no accounts, nothing leaves the device."},
  "PrintOrganize":{t:"Images at exact physical sizes, ready to print",d:"App published on Google Play and Microsoft Store (Android and Windows) that arranges a folder's images into a grid inside a Word document, each at an exact physical size in centimeters. The .docx is generated in streaming on the device: no cloud, no accounts, no storage permissions."},
  "Docu Scaner 150%":{t:"Scan, enlarge to 150% and print ID documents",d:"Android app published on Google Play that scans ID documents with on-device AI (ML Kit), enlarges them to 150% on Letter-size paper at 300 DPI and prints straight from the phone. Offline-first: AES-256 encrypted vault, biometric lock and no servers."},
  "OpenCallShield":{t:"SPAM call blocking with privacy first",d:"Open-source Android app that screens incoming calls through CallScreeningService to silence or reject them based on a rules engine. Syncs with a public collaborative blocklist on GitHub without compromising privacy."},
  "OpenWirelessDisplay":{t:"Your Android as a wireless monitor for your PC",d:"Open-source alternative to Spacedesk: turns an Android device into a wireless secondary monitor for a Windows PC. Supports real mirror and extended mode through a virtual display driver, with secure PIN pairing."},
  "CompartirArchivosRED":{t:"Share files over the local network, no cloud or cables",d:"Wireless file transfer between Android and Windows on the same local network. Automatic discovery via UDP broadcast and robust TCP transfer, with expirable PIN authorization."},
  "IDPersonalSecure":{t:"Personal digital vault encrypted with AES-256",d:"Offline-first digital vault and identity manager, cross-platform (Android + Windows). Encrypts identity documents natively with AES-256-GCM and securely transfers vaults between devices."},
  "PayBioApp":{t:"Virtual payment card holder powered by on-device AI",d:"Offline virtual vault that manages payment methods (crypto, banks, wallets) and displays them as cards with QR codes. Uses on-device AI (ML Kit) to extract payment data from images, with kiosk mode for TVs and counters."},
  "klanly":{t:"Skool-style paid-community platform",d:"Open-source paid-community platform with three roles (Admin, Producer, User). Multi-platform delivery: desktop apps (Tauri), mobile (Android) and web (Next.js), with dual payments via gateway and manual receipts."},
  "TurnosDespachoDispensario":{t:"Pharmacy queues with AI OCR of prescriptions",d:"Queue management system for pharmacies. Patients photograph prescriptions and staff use AI OCR (OpenAI Vision) to read medications, cross-check inventory and deduct stock by FEFO. Runs offline over the local network."},
  "ReciclajeApp":{t:"Complete offline management for recycling centers",d:"Offline-first management system for recycling centers. A desktop component acts as local server and admin panel, Android apps as customer and weighing-station interfaces, and an Android TV app as the public queue board."}
},
exp:[
  {r:"Senior AI Applications Developer",d:"End-to-end development of AI apps with multi-agent orchestration, LLM integration (Claude, GPT, GLM) and architectures separating deterministic from stochastic processes."},
  {r:"Options Trader",d:"Options trading on tech stocks with implied-volatility analysis and risk management."},
  {r:"DeFi Protocol Analyst",d:"Analysis of decentralized protocols, yield farming and airdrops with portfolio management in the Web3 ecosystem."},
  {r:"Tech Content Creator",d:"Over 10 years producing educational content about cryptography, blockchain, AI and emerging technologies."},
  {r:"Independent Crypto Trader",d:"Spot trading and market analysis across multiple cryptocurrency pairs."},
  {r:"WordPress Web Developer",d:"LMS platform on WordPress with custom PHP and MySQL features."},
  {r:"Smart Contracts Developer",d:"Development and deployment of ERC-20 smart contracts on the Ethereum blockchain."},
  {r:"IT Support Technician",d:"On-site and remote technical support, Windows/Linux administration and LAN/WiFi networks."}
],
studies:[
  {t:"Multimedia Engineering",s:"Ongoing",n:"SENA credit-transfer agreement 012/2019"},
  {t:"Technologist in International Physical Distribution",s:"Graduate",n:null},
  {t:"Artificial Intelligence",s:"Completed",n:null},
  {t:"Blockchain and Cryptocurrencies",s:"Completed",n:null},
  {t:"Specialization in Online Marketing & Business Models",s:"Graduate",n:null},
  {t:"Multimedia Production Technologist",s:"Graduate",n:null},
  {t:"PC Assembly & Configuration Assistant",s:"Graduate",n:"Professional Aptitude Certificate"},
  {t:"Technical High School Diploma in Electricity (Electronics)",s:"High school",n:"Internship in equipment maintenance"}
]
},

/* ============================== FRANÇAIS ============================== */
fr: {
docTitle:"Jhon Supelano — Développeur IA, DevOps & Blockchain",
ui:{
  greet:"Bonjour, je suis",
  navAbout:"À propos", navSkills:"Skills", navProjects:"Projets", navExp:"Parcours", navContact:"Contact",
  eyebrow:"Disponible pour de nouveaux projets",
  btnProjects:"Voir les projets →", btnContact:"Contactez-moi",
  aboutK:"À propos", aboutH:"Un ingénieur qui réunit IA, produit et sécurité",
  skillsK:"Compétences", skillsH:"Les technologies que je maîtrise", skillsP:"Une pile complète pour construire, déployer et sécuriser des applications intelligentes.",
  projectsK:"Portfolio", projectsH:"Projets à la une", projectsP:"Des apps publiées sur Google Play et des projets open source axés sur la confidentialité, l'IA et la productivité.",
  expK:"Parcours", expH:"Expérience professionnelle",
  studiesK:"Formation", studiesH:"Parcours académique", studiesP:"Du bac technique au génie multimédia — une décennie à apprendre sans arrêt.",
  certsK:"44 certifications", certsH:"Ce que j'ai appris", certsP:"Chaque point est une certification ; chaque couleur, une institution. Survolez la constellation.",
  hint:"💡 Survolez un point pour voir la certification · chaque couleur regroupe par institution émettrice.",
  contactH:'Construisons quelque chose <span class="grad">d\u2019extraordinaire</span> ?',
  contactBtn:"Écrivez-moi ✦",
  contactText:"Produit IA, application sécurisée ou consultance technique — discutons-en.",
  footerMade:"Fait avec IA en Colombie 🇨🇴",
  stats:["Projets open source","Années en tech","Chiffrement de niveau militaire","Offline-first"],
  achTitle:"Faits marquants", location:"Colombie",
  viewGithub:"Voir sur GitHub →", viewPlay:"Voir sur Play Store →", msStore:"Microsoft Store →", more:"En savoir plus →",
  langBtn:"Langue"
},
profile:{
  roles:["Développeur d'applications IA","Ingénieur DevOps Senior","Spécialiste Blockchain & Crypto","Technologue en production multimédia"],
  tagline:"Je construis des applications intelligentes qui allient IA, sécurité et expérience produit.",
  bio:"Spécialiste de l'IA et de l'automatisation des processus, avec une expérience full stack : développement Android natif (Kotlin), C#, TypeScript, JavaScript et PHP. Je maîtrise l'orchestration d'agents IA, l'intégration de LLM (Claude, GPT, GLM) et les architectures de sécurité avec chiffrement AES-256. Concentré sur des solutions technologiques évolutives, des applications mobiles aux systèmes de production intelligents.",
  highlights:["10+ ans de contenu tech sur YouTube","Vainqueur du défi de cybersécurité « Revolución Mr. Robot »","Reconnu entrepreneur tech par Apps.co","Ex-développeur IA senior chez Sunsam"]
},
cats:{"Tienda de Apps":"Boutique d'apps","Productividad":"Productivité","Seguridad":"Sécurité","Privacidad":"Confidentialité","Entretenimiento":"Divertissement","Plataformas":"Plateformes"},
groups:{"Móvil":"Mobile","Desktop":"Desktop","Web":"Web","Backend":"Backend","IA":"IA","Seguridad":"Sécurité","Web3":"Web3","Infra":"Infra"},
projects:{
  "Sunsam Apps Store":{t:"La vitrine de toutes mes applications, en une seule boutique",d:"Boutique d'applications personnelle qui recueille tous les projets du développeur : une fiche par app avec description, captures et téléchargement direct de l'APK. Version web sur GitHub Pages et APK de la boutique pour Android."},
  "OnionHost":{t:"Votre site web sur le réseau Tor, depuis votre téléphone ou PC",d:"App publiée sur Google Play et Microsoft Store qui transforme n'importe quel dossier avec un index.html en site doté de sa propre adresse .onion (services cachés v3). Tor est embarqué, le serveur web tourne sur l'appareil et les fichiers ne le quittent jamais : zéro collecte de données."},
  "Cuentero Infinito":{t:"Des histoires d'IA nées et lues sur votre téléphone",d:"App publiée sur Google Play où un modèle de langage (LFM2-1.2B) tourne dans le téléphone via llama.cpp : demandez une histoire, il l'invente de zéro et la lit à voix haute. Espagnol ou anglais, mode enfants avec filtre de contenu et PIN, et mode continu pour s'endormir. Sans connexion, sans comptes, rien ne quitte l'appareil."},
  "PrintOrganize":{t:"Des images à la taille physique exacte, prêtes à imprimer",d:"App publiée sur Google Play et Microsoft Store (Android et Windows) qui organise les images d'un dossier en grille dans un document Word, chacune à une taille physique exacte en centimètres. Le .docx est généré en streaming sur l'appareil : pas de cloud, pas de comptes, pas de permission de stockage."},
  "Docu Scaner 150%":{t:"Scannez, agrandissez à 150 % et imprimez vos pièces d'identité",d:"App Android publiée sur Google Play qui scanne les pièces d'identité avec une IA sur l'appareil (ML Kit), les agrandit à 150 % sur papier Letter à 300 DPI et imprime directement depuis le téléphone. Offline-first : coffre chiffré AES-256, verrou biométrique et aucun serveur."},
  "OpenCallShield":{t:"Blocage d'appels SPAM avec la confidentialité d'abord",d:"App Android open source qui filtre les appels entrants via CallScreeningService pour les silencer ou les rejeter selon un moteur de règles. Se synchronise avec une blocklist collaborative publique sur GitHub sans compromettre la vie privée."},
  "OpenWirelessDisplay":{t:"Votre Android comme écran sans fil pour votre PC",d:"Alternative open source à Spacedesk : transforme un appareil Android en écran secondaire sans fil pour un PC Windows. Miroir et vrai mode étendu grâce à un pilote d'écran virtuel, avec appariement sécurisé par PIN."},
  "CompartirArchivosRED":{t:"Partagez des fichiers en réseau local, sans cloud ni câbles",d:"Transfert de fichiers sans fil entre Android et Windows sur le même réseau local. Découverte automatique par broadcast UDP et transfert TCP robuste, avec autorisation par PIN expirable."},
  "IDPersonalSecure":{t:"Coffre numérique personnel chiffré en AES-256",d:"Coffre numérique et gestionnaire d'identité offline-first, multiplateforme (Android + Windows). Chiffre nativement les pièces d'identité en AES-256-GCM et transfère les coffres entre appareils en toute sécurité."},
  "PayBioApp":{t:"Portefeuille de cartes de paiement dopé à l'IA locale",d:"Coffre virtuel hors ligne qui gère les moyens de paiement (cryptos, banques, portefeuilles) et les affiche en cartes avec QR. Utilise l'IA locale (ML Kit) pour extraire les données de paiement depuis des images, avec mode kiosque pour TV et comptoirs."},
  "klanly":{t:"Plateforme de communautés payantes façon Skool",d:"Plateforme open source de communautés payantes à trois rôles (Admin, Producteur, Utilisateur). Diffusion multiplateforme : apps desktop (Tauri), mobiles (Android) et web (Next.js), avec paiements doubles par passerelle et reçus manuels."},
  "TurnosDespachoDispensario":{t:"Files d'attente de pharmacie avec OCR IA des ordonnances",d:"Système de gestion de files pour pharmacies. Les patients photographient leurs ordonnances et le personnel utilise l'OCR IA (OpenAI Vision) pour lire les médicaments, croiser l'inventaire et décompter le stock par FEFO. Fonctionne hors ligne en réseau local."},
  "ReciclajeApp":{t:"Gestion complète et hors ligne des centres de recyclage",d:"Système offline-first de gestion de centres de recyclage. Un composant desktop sert de serveur local et de panneau admin, des apps Android d'interfaces client et stations de pesée, et une app Android TV d'affichage public de la file."}
},
exp:[
  {r:"Développeur senior d'applications IA",d:"Développement de bout en bout d'applications IA avec orchestration multi-agents, intégration de LLM (Claude, GPT, GLM) et architectures séparant processus déterministes et stochastiques."},
  {r:"Trader d'options",d:"Trading d'options sur actions tech avec analyse de volatilité implicite et gestion du risque."},
  {r:"Analyste de protocoles DeFi",d:"Analyse de protocoles décentralisés, yield farming et airdrops avec gestion de portefeuille dans l'écosystème Web3."},
  {r:"Créateur de contenu tech",d:"Plus de 10 ans de contenu éducatif sur la cryptographie, la blockchain, l'IA et les technologies émergentes."},
  {r:"Trader indépendant de cryptoactifs",d:"Trading spot et analyse de marché sur plusieurs paires de cryptomonnaies."},
  {r:"Développeur web WordPress",d:"Plateforme LMS sur WordPress avec fonctionnalités personnalisées en PHP et MySQL."},
  {r:"Développeur de smart contracts",d:"Développement et déploiement de contrats intelligents ERC-20 sur la blockchain Ethereum."},
  {r:"Technicien support informatique",d:"Support technique sur site et à distance, administration Windows/Linux et réseaux LAN/WiFi."}
],
studies:[
  {t:"Génie multimédia",s:"En cours",n:"Accord d'équivalence SENA 012/2019"},
  {t:"Technologue en distribution physique internationale",s:"Diplômé",n:null},
  {t:"Intelligence artificielle",s:"Terminé",n:null},
  {t:"Blockchain et cryptomonnaies",s:"Terminé",n:null},
  {t:"Spécialisation en marketing et modèles d'affaires en ligne",s:"Diplômé",n:null},
  {t:"Technologue en production multimédia",s:"Diplômé",n:null},
  {t:"Assistant en assemblage et configuration de PC",s:"Diplômé",n:"Certificat d'aptitude professionnelle"},
  {t:"Baccalauréat technique en électricité (électronique)",s:"Baccalauréat",n:"Stage en maintenance d'équipements"}
]
},

/* ============================ PORTUGUÊS ============================ */
pt: {
docTitle:"Jhon Supelano — Desenvolvedor de IA, DevOps & Blockchain",
ui:{
  greet:"Olá, eu sou",
  navAbout:"Sobre mim", navSkills:"Skills", navProjects:"Projetos", navExp:"Trajetória", navContact:"Contato",
  eyebrow:"Disponível para novos projetos",
  btnProjects:"Ver projetos →", btnContact:"Fale comigo",
  aboutK:"Sobre mim", aboutH:"Engenheiro que une IA, produto e segurança",
  skillsK:"Capacidades", skillsH:"Tecnologias que domino", skillsP:"Stack completo para construir, implantar e proteger aplicações inteligentes.",
  projectsK:"Portfólio", projectsH:"Projetos em destaque", projectsP:"Apps publicadas no Google Play e projetos open source focados em privacidade, IA e produtividade.",
  expK:"Trajetória", expH:"Experiência profissional",
  studiesK:"Formação", studiesH:"Trajetória acadêmica", studiesP:"Do ensino técnico à engenharia de multimídia — uma década aprendendo sem parar.",
  certsK:"44 certificações", certsH:"O que aprendi", certsP:"Cada ponto é uma certificação; cada cor, uma instituição. Passe o cursor pela constelação.",
  hint:"💡 Passe o cursor sobre um ponto para ver a certificação · cada cor agrupa por instituição emissora.",
  contactH:'Vamos construir algo <span class="grad">extraordinário</span>?',
  contactBtn:"Envie um e-mail ✦",
  contactText:"Seja um produto com IA, um app seguro ou uma consultoria técnica — vamos conversar.",
  footerMade:"Feito com IA no Brasil vizinho Colômbia 🇨🇴",
  stats:["Projetos open source","Anos em tecnologia","Criptografia de nível militar","Offline-first"],
  achTitle:"Conquistas", location:"Colômbia",
  viewGithub:"Ver no GitHub →", viewPlay:"Ver na Play Store →", msStore:"Microsoft Store →", more:"Saiba mais →",
  langBtn:"Idioma"
},
profile:{
  roles:["Desenvolvedor de Aplicações de IA","Engenheiro DevOps Sênior","Especialista em Blockchain & Cripto","Tecnólogo em Produção Multimídia"],
  tagline:"Construo aplicações inteligentes que combinam IA, segurança e experiência de produto.",
  bio:"Especialista em Inteligência Artificial e Automação de Processos com experiência full stack: desenvolvimento Android nativo (Kotlin), C#, TypeScript, JavaScript e PHP. Domino orquestração de agentes de IA, integração de LLMs (Claude, GPT, GLM) e arquiteturas de segurança com criptografia AES-256. Focado em soluções tecnológicas escaláveis, de apps móveis a sistemas inteligentes de produção.",
  highlights:["10+ anos criando conteúdo tecnológico no YouTube","Vencedor do Desafio de Cibersegurança 'Revolución Mr. Robot'","Reconhecido como Empreendedor Tecnológico pelo Apps.co","Ex-desenvolvedor Sênior de IA na Sunsam"]
},
cats:{"Tienda de Apps":"Loja de Apps","Productividad":"Produtividade","Seguridad":"Segurança","Privacidad":"Privacidade","Entretenimiento":"Entretenimento","Plataformas":"Plataformas"},
groups:{"Móvil":"Móvel","Desktop":"Desktop","Web":"Web","Backend":"Backend","IA":"IA","Segurança":"Segurança","Web3":"Web3","Infra":"Infra"},
projects:{
  "Sunsam Apps Store":{t:"A vitrine de todos os meus aplicativos, em uma só loja",d:"Loja de aplicativos própria que reúne todos os projetos do desenvolvedor: uma ficha por app com descrição, capturas e download direto do APK. Versão web no GitHub Pages e APK da loja para Android."},
  "OnionHost":{t:"Seu site na rede Tor, do seu telefone ou PC",d:"App publicada no Google Play e na Microsoft Store que transforma qualquer pasta com um index.html em um site com endereço .onion próprio (hidden services v3). Tor é embutido, o servidor web roda no próprio dispositivo e os arquivos nunca saem dele: zero coleta de dados."},
  "Cuentero Infinito":{t:"Histórias de IA que nascem e são lidas no seu telefone",d:"App publicada no Google Play onde um modelo de linguagem (LFM2-1.2B) roda dentro do telefone via llama.cpp: peça uma história, ele a inventa do zero e a lê em voz alta. Espanhol ou inglês, modo infantil com filtro de conteúdo e PIN, e modo contínuo para dormir. Sem conexão, sem contas, nada sai do dispositivo."},
  "PrintOrganize":{t:"Imagens no tamanho físico exato, prontas para imprimir",d:"App publicada no Google Play e na Microsoft Store (Android e Windows) que organiza as imagens de uma pasta em grade dentro de um documento Word, cada uma no tamanho físico exato em centímetros. O .docx é gerado em streaming no dispositivo: sem nuvem, sem contas, sem permissões de armazenamento."},
  "Docu Scaner 150%":{t:"Escaneie, amplie 150% e imprima documentos de identidade",d:"App Android publicada no Google Play que escaneia documentos de identidade com IA no dispositivo (ML Kit), amplia 150% em papel Carta a 300 DPI e imprime direto do celular. Offline-first: cofre criptografado AES-256, bloqueio biométrico e sem servidores."},
  "OpenCallShield":{t:"Bloqueio de chamadas SPAM com privacidade em primeiro lugar",d:"App Android open source que intercepta chamadas recebidas via CallScreeningService para silenciá-las ou rejeitá-las conforme um motor de regras. Sincroniza com uma blocklist colaborativa pública no GitHub sem comprometer a privacidade."},
  "OpenWirelessDisplay":{t:"Seu Android como monitor sem fio do seu PC",d:"Alternativa open source ao Spacedesk: transforma um Android em monitor secundário sem fio para PC Windows. Espelho e modo estendido real via driver de tela virtual, com pareamento seguro por PIN."},
  "CompartirArchivosRED":{t:"Compartilhe arquivos na rede local, sem nuvem nem cabos",d:"Transferência sem fio de arquivos entre Android e Windows na mesma rede local. Descoberta automática por broadcast UDP e transferência TCP robusta, com autorização por PIN expirável."},
  "IDPersonalSecure":{t:"Cofre digital pessoal criptografado com AES-256",d:"Cofre digital e gerenciador de identidade offline-first, multiplataforma (Android + Windows). Criptografa documentos de identidade nativamente com AES-256-GCM e transfere cofres entre dispositivos com segurança."},
  "PayBioApp":{t:"Carteira virtual de cobranças turbinada por IA local",d:"Cofre virtual offline que gerencia meios de pagamento (cripto, bancos, carteiras) e os exibe como cartões com QR. Usa IA local (ML Kit) para extrair dados de pagamento de imagens, com modo quiosque para TV e balcões."},
  "klanly":{t:"Plataforma de comunidades pagas tipo Skool",d:"Plataforma open source de comunidades pagas com três papéis (Admin, Produtor, Usuário). Entrega multiplataforma: apps desktop (Tauri), móveis (Android) e web (Next.js), com cobranças duplas por gateway e comprovantes manuais."},
  "TurnosDespachoDispensario":{t:"Filas de farmácia com OCR de IA nas receitas",d:"Sistema de gestão de filas para farmácias. Pacientes fotografam receitas e a equipe usa OCR com IA (OpenAI Vision) para ler medicamentos, cruzar com o estoque e baixar por FEFO. Opera offline na rede local."},
  "ReciclajeApp":{t:"Gestão completa e offline de centros de reciclagem",d:"Sistema offline-first de gestão de centros de reciclagem. Componente desktop como servidor local e painel admin, apps Android como interfaces de cliente e estações de pesagem, e um app Android TV como painel público da fila."}
},
exp:[
  {r:"Desenvolvedor Sênior de Aplicações de IA",d:"Desenvolvimento end-to-end de apps de IA com orquestração multiagente, integração de LLMs (Claude, GPT, GLM) e arquiteturas que separam processos determinísticos de estocásticos."},
  {r:"Operador de Opções",d:"Trading de opções sobre ações de tecnologia com análise de volatilidade implícita e gestão de risco."},
  {r:"Analista de Protocolos DeFi",d:"Análise de protocolos descentralizados, yield farming e airdrops com gestão de carteira no ecossistema Web3."},
  {r:"Criador de Conteúdo Tecnológico",d:"Mais de 10 anos produzindo conteúdo educativo sobre criptografia, blockchain, IA e tecnologias emergentes."},
  {r:"Trader Independente de Criptoativos",d:"Trading spot e análise de mercado em múltiplos pares de criptomoedas."},
  {r:"Desenvolvedor Web WordPress",d:"Plataforma LMS sobre WordPress com funcionalidades personalizadas em PHP e MySQL."},
  {r:"Desenvolvedor de Smart Contracts",d:"Desenvolvimento e implantação de contratos inteligentes ERC-20 na blockchain Ethereum."},
  {r:"Técnico de Suporte de TI",d:"Suporte técnico presencial e remoto, administração Windows/Linux e redes LAN/WiFi."}
],
studies:[
  {t:"Engenharia de Multimídia",s:"Em andamento",n:"Acordo de homologação SENA 012/2019"},
  {t:"Tecnólogo em Distribuição Física Internacional",s:"Graduado",n:null},
  {t:"Inteligência Artificial",s:"Concluído",n:null},
  {t:"Blockchain e Criptomoedas",s:"Concluído",n:null},
  {t:"Especialização em Marketing e Modelos de Negócio Online",s:"Graduado",n:null},
  {t:"Tecnólogo em Produção de Multimídia",s:"Graduado",n:null},
  {t:"Auxiliar em Montagem e Configuração de PCs",s:"Graduado",n:"Certificado de Aptidão Profissional"},
  {t:"Ensino Médio Técnico em Eletricidade (Eletrônica)",s:"Ensino Médio",n:"Prática em manutenção de equipamentos"}
]
},

/* ============================== РУССКИЙ ============================== */
ru: {
docTitle:"Jhon Supelano — разработчик ИИ, DevOps и блокчейн",
ui:{
  greet:"Привет, я",
  navAbout:"Обо мне", navSkills:"Skills", navProjects:"Проекты", navExp:"Карьера", navContact:"Контакт",
  eyebrow:"Открыт к новым проектам",
  btnProjects:"Смотреть проекты →", btnContact:"Связаться",
  aboutK:"Обо мне", aboutH:"Инженер на стыке ИИ, продукта и безопасности",
  skillsK:"Компетенции", skillsH:"Технологии, которыми я владею", skillsP:"Полный стек для создания, развёртывания и защиты интеллектуальных приложений.",
  projectsK:"Портфолио", projectsH:"Избранные проекты", projectsP:"Приложения в Google Play и open-source-проекты о приватности, ИИ и продуктивности.",
  expK:"Карьера", expH:"Профессиональный опыт",
  studiesK:"Образование", studiesH:"Академический путь", studiesP:"От технического колледжа до мультимедиа-инженерии — десятилетие непрерывного обучения.",
  certsK:"44 сертификата", certsH:"Чему я научился", certsP:"Каждая точка — сертификат; каждый цвет — учебное заведение. Наведите курсор на созвездие.",
  hint:"💡 Наведите на точку, чтобы увидеть сертификат · каждый цвет — группа одного эмитента.",
  contactH:'Создадим что-то <span class="grad">выдающееся</span>?',
  contactBtn:"Написать ✦",
  contactText:"Продукт с ИИ, защищённое приложение или техническая консультация — давайте обсудим.",
  footerMade:"Сделано с ИИ в Колумбии 🇨🇴",
  stats:["Open-source проекты","Лет в технологиях","Шифрование военного уровня","Offline-first"],
  achTitle:"Ключевые достижения", location:"Колумбия",
  viewGithub:"Смотреть на GitHub →", viewPlay:"Смотреть в Play Store →", msStore:"Microsoft Store →", more:"Подробнее →",
  langBtn:"Язык"
},
profile:{
  roles:["Разработчик ИИ-приложений","Senior DevOps-инженер","Специалист по блокчейну и крипто","Технолог мультимедиа-продакшена"],
  tagline:"Создаю интеллектуальные приложения, объединяющие ИИ, безопасность и продуктовый опыт.",
  bio:"Специалист по ИИ и автоматизации процессов с full-stack-опытом: нативная разработка под Android (Kotlin), C#, TypeScript, JavaScript и PHP. Владею оркестрацией ИИ-агентов, интеграцией LLM (Claude, GPT, GLM) и архитектурами безопасности с шифрованием AES-256. Ориентирован на масштабируемые технологические решения — от мобильных приложений до интеллектуальных производственных систем.",
  highlights:["10+ лет техноблога на YouTube","Победитель челленджа по кибербезопасности «Revolución Mr. Robot»","Признан Apps.co технологическим предпринимателем","Бывший senior-разработчик ИИ в Sunsam"]
},
cats:{"Tienda de Apps":"Магазин приложений","Productividad":"Продуктивность","Seguridad":"Безопасность","Privacidad":"Приватность","Entretenimiento":"Развлечения","Plataformas":"Платформы"},
groups:{"Móvil":"Мобильная","Desktop":"Десктоп","Web":"Веб","Backend":"Бэкенд","IA":"ИИ","Seguridad":"Безопасность","Web3":"Web3","Infra":"Инфра"},
projects:{
  "Sunsam Apps Store":{t:"Витрина всех моих приложений в одном магазине",d:"Собственный магазин приложений, собирающий все проекты разработчика: карточка каждого приложения с описанием, скриншотами и прямым скачиванием APK. Веб-версия на GitHub Pages и APK магазина для Android."},
  "OnionHost":{t:"Ваш сайт в сети Tor — с телефона или ПК",d:"Приложение в Google Play и Microsoft Store, превращающее любую папку с index.html в сайт с собственным адресом .onion (hidden services v3). Tor встроен, веб-сервер работает на самом устройстве, файлы его не покидают: нулевой сбор данных."},
  "Cuentero Infinito":{t:"Истории от ИИ, которые рождаются и читаются на телефоне",d:"Приложение в Google Play, где языковая модель (LFM2-1.2B) работает внутри телефона через llama.cpp: попросите историю — она придумает её с нуля и прочитает вслух. Испанский или английский, детский режим с фильтром и PIN-кодом, непрерывный режим для засыпания. Без интернета, без аккаунтов, ничего не покидает устройство."},
  "PrintOrganize":{t:"Изображения точного физического размера, готовые к печати",d:"Приложение в Google Play и Microsoft Store (Android и Windows), раскладывающее изображения из папки в сетку документа Word с точным физическим размером в сантиметрах. DOCX генерируется потоково на устройстве: без облака, аккаунтов и прав на хранилище."},
  "Docu Scaner 150%":{t:"Сканируйте, увеличивайте на 150% и печатайте документы",d:"Android-приложение в Google Play: сканирует документы с помощью ИИ на устройстве (ML Kit), увеличивает на 150% на бумагу Letter в 300 DPI и печатает прямо с телефона. Offline-first: сейф AES-256, биометрия, без серверов."},
  "OpenCallShield":{t:"Блокировка спам-звонков с приоритетом приватности",d:"Открытое Android-приложение, фильтрующее входящие вызовы через CallScreeningService: глушит или отклоняет их по движку правил. Синхронизируется с публичным совместным блок-листом на GitHub, не жертвуя приватностью."},
  "OpenWirelessDisplay":{t:"Ваш Android — беспроводной монитор для ПК",d:"Открытая альтернатива Spacedesk: превращает Android во второй беспроводной монитор для Windows. Реальные режимы зеркала и расширения через виртуальный видеодрайвер с защищённым PIN-сопряжением."},
  "CompartirArchivosRED":{t:"Обмен файлами по локальной сети без облака и проводов",d:"Беспроводная передача файлов между Android и Windows в одной сети. Автообнаружение через UDP-broadcast и надёжная передача TCP с авторизацией по истекающему PIN."},
  "IDPersonalSecure":{t:"Личный цифровой сейф с шифрованием AES-256",d:"Offline-first цифровой сейф и менеджер удостоверений личности, кроссплатформенный (Android + Windows). Шифрует документы нативно AES-256-GCM и безопасно переносит сейфы между устройствами."},
  "PayBioApp":{t:"Виртуальный кошелёк карточек с локальным ИИ",d:"Офлайн-сейф, управляющий способами оплаты (крипто, банки, кошельки) и отображающий их карточками с QR. Локальный ИИ (ML Kit) извлекает платёжные данные из изображений; киоск-режим для ТВ и стоек."},
  "klanly":{t:"Платформа платных сообществ в духе Skool",d:"Открытая платформа платных сообществ с тремя ролями (админ, продюсер, пользователь). Доставка на все платформы: десктоп (Tauri), мобильные (Android) и веб (Next.js), двойная оплата через шлюз и ручные квитанции."},
  "TurnosDespachoDispensario":{t:"Очереди аптеки с ИИ-OCR рецептов",d:"Система управления очередями аптек. Пациенты фотографируют рецепты, персонал через ИИ-OCR (OpenAI Vision) читает препараты, сверяет с остатками и списывает по FEFO. Работает офлайн в локальной сети."},
  "ReciclajeApp":{t:"Полное офлайн-управление пунктами приёма вторсырья",d:"Offline-first система управления пунктами переработки. Десктоп-компонент — локальный сервер и админка, Android-приложения — интерфейсы клиентов и весовых, Android TV — публичное табло очереди."}
},
exp:[
  {r:"Senior-разработчик ИИ-приложений",d:"Сквозная разработка ИИ-приложений: мультиагентная оркестрация, интеграция LLM (Claude, GPT, GLM), архитектуры с разделением детерминированных и стохастических процессов."},
  {r:"Трейдер опционов",d:"Торговля опционами на технологические акции с анализом подразумеваемой волатильности и управлением риском."},
  {r:"Аналитик DeFi-протоколов",d:"Анализ децентрализованных протоколов, yield farming и эйрдропов с управлением портфелем в Web3."},
  {r:"Техноблогер",d:"Более 10 лет образовательного контента о криптографии, блокчейне, ИИ и новых технологиях."},
  {r:"Независимый криптотрейдер",d:"Спот-трейдинг и анализ рынка по нескольким криптопарам."},
  {r:"WordPress-разработчик",d:"LMS-платформа на WordPress с кастомным PHP и MySQL."},
  {r:"Разработчик смарт-контрактов",d:"Разработка и развёртывание смарт-контрактов ERC-20 в блокчейне Ethereum."},
  {r:"ИТ-специалист поддержки",d:"Очная и удалённая поддержка, администрирование Windows/Linux и сети LAN/WiFi."}
],
studies:[
  {t:"Мультимедиа-инженерия",s:"В процессе",n:"Соглашение о перезачёте SENA 012/2019"},
  {t:"Технолог международной физической дистрибуции",s:"Выпускник",n:null},
  {t:"Искусственный интеллект",s:"Завершено",n:null},
  {t:"Блокчейн и криптовалюты",s:"Завершено",n:null},
  {t:"Специализация по онлайн-маркетингу и бизнес-моделям",s:"Выпускник",n:null},
  {t:"Технолог мультимедиа-продакшена",s:"Выпускник",n:null},
  {t:"Помощник по сборке и настройке ПК",s:"Выпускник",n:"Сертификат профпригодности"},
  {t:"Технический аттестат по электрике (электроника)",s:"Аттестат",n:"Практика обслуживания оборудования"}
]
},

/* ============================== 中文 ============================== */
zh: {
docTitle:"Jhon Supelano — AI、DevOps 与区块链开发者",
ui:{
  greet:"你好，我是",
  navAbout:"关于我", navSkills:"Skills", navProjects:"项目", navExp:"经历", navContact:"联系",
  eyebrow:"可承接新项目",
  btnProjects:"查看项目 →", btnContact:"联系我",
  aboutK:"关于我", aboutH:"连接 AI、产品与安全的工程师",
  skillsK:"能力", skillsH:"我掌握的技术", skillsP:"构建、部署和保护智能应用的完整技术栈。",
  projectsK:"作品集", projectsH:"精选项目", projectsP:"已上架 Google Play 的应用与专注隐私、AI 与生产力的开源项目。",
  expK:"经历", expH:"职业经验",
  studiesK:"教育", studiesH:"学习经历", studiesP:"从技术高中到多媒体工程——十年不停歇的学习。",
  certsK:"44 项认证", certsH:"我的学习成果", certsP:"每个点是一项认证，每种颜色代表一家机构。将光标移到星座上。",
  hint:"💡 将光标悬停在点上查看认证 · 颜色按颁发机构分组。",
  contactH:'一起打造<span class="grad">非凡之作</span>？',
  contactBtn:"给我发邮件 ✦",
  contactText:"无论是 AI 产品、安全应用还是技术咨询，欢迎聊聊。",
  footerMade:"在哥伦比亚用 AI 打造 🇨🇴",
  stats:["开源项目","科技行业年数","军用级加密","Offline-first"],
  achTitle:"重要成就", location:"哥伦比亚",
  viewGithub:"在 GitHub 查看 →", viewPlay:"在 Play Store 查看 →", msStore:"Microsoft Store →", more:"了解更多 →",
  langBtn:"语言"
},
profile:{
  roles:["AI 应用开发者","高级 DevOps 工程师","区块链与加密专家","多媒体制作技术师"],
  tagline:"我构建融合 AI、安全与产品体验的智能应用。",
  bio:"人工智能与流程自动化专家，具备全栈经验：原生 Android 开发（Kotlin）、C#、TypeScript、JavaScript 与 PHP。精通 AI 智能体编排、LLM 集成（Claude、GPT、GLM）以及采用 AES-256 加密的安全架构。专注于可扩展的技术解决方案，从移动应用到智能生产系统。",
  highlights:["10+ 年 YouTube 科技内容创作","“Revolución Mr. Robot”网络安全挑战赛冠军","获 Apps.co 认证的科技创业者","曾任 Sunsam 高级 AI 开发者"]
},
cats:{"Tienda de Apps":"应用商店","Productividad":"生产力","Seguridad":"安全","Privacidad":"隐私","Entretenimiento":"娱乐","Plataformas":"平台"},
groups:{"Móvil":"移动","Desktop":"桌面","Web":"Web","Backend":"后端","IA":"AI","Seguridad":"安全","Web3":"Web3","Infra":"基础设施"},
projects:{
  "Sunsam Apps Store":{t:"我的所有应用，尽在一个商店",d:"自有应用商店，收录开发者的全部项目：每个应用一页，含简介、截图与 APK 直接下载。网页版部署于 GitHub Pages，并提供 Android 商店 APK。"},
  "OnionHost":{t:"从手机或电脑把网站发布到 Tor 网络",d:"已上架 Google Play 与 Microsoft Store。将任何含 index.html 的文件夹变成拥有专属 .onion 地址（v3 隐藏服务）的网站。Tor 内置，Web 服务器运行在设备本身，文件永不外传：零数据收集。"},
  "Cuentero Infinito":{t:"在手机上诞生并被朗读的 AI 故事",d:"已上架 Google Play：语言模型（LFM2-1.2B）通过 llama.cpp 在手机内运行——点一个故事，它从零创作并朗读。支持中英之外的四语界面、带内容过滤与 PIN 的儿童模式、以及伴睡的连续模式。无需联网、无需账号，任何数据都不离开设备。"},
  "PrintOrganize":{t:"精确物理尺寸的图片，打印即用",d:"已上架 Google Play 与 Microsoft Store（Android 与 Windows）：把文件夹中的图片排入 Word 文档网格，每张都有精确的厘米级物理尺寸。DOCX 在设备上流式生成：无云端、无账号、无存储权限。"},
  "Docu Scaner 150%":{t:"扫描、放大 150% 并打印证件",d:"已上架 Google Play 的 Android 应用：用端内 AI（ML Kit）扫描证件，按 Letter 纸 300 DPI 放大 150%，并直接从手机打印。离线优先：AES-256 加密保险库、生物识别锁、无服务器。"},
  "OpenCallShield":{t:"隐私优先的垃圾来电拦截",d:"开源 Android 应用，通过 CallScreeningService 拦截来电，按规则引擎静音或拒接。与 GitHub 上的公共协作黑名单同步，且不牺牲隐私。"},
  "OpenWirelessDisplay":{t:"把 Android 变成电脑的无线显示器",d:"Spacedesk 的开源替代：将 Android 设备变为 Windows PC 的无线副屏。通过虚拟显示驱动支持真实镜像与扩展模式，并以 PIN 安全配对。"},
  "CompartirArchivosRED":{t:"局域网传文件，无云无线",d:"Android 与 Windows 在同一局域网内的无线文件传输。UDP 广播自动发现，TCP 稳健传输，并支持可过期 PIN 授权。"},
  "IDPersonalSecure":{t:"AES-256 加密的个人数字保险库",d:"离线优先的数字保险库与身份管理器，跨平台（Android + Windows）。以 AES-256-GCM 原生加密身份证件，并可在设备间安全传输保险库。"},
  "PayBioApp":{t:"由端内 AI 驱动的虚拟收款卡包",d:"离线虚拟保险库，管理支付方式（加密货币、银行、钱包）并以带二维码的卡片展示。端内 AI（ML Kit）可从图片提取支付数据，并提供 TV 与柜台的大屏模式。"},
  "klanly":{t:"Skool 式付费社区平台",d:"开源付费社区平台，三种角色（管理员、创作者、用户）。多端交付：桌面（Tauri）、移动（Android）与网页（Next.js），支持网关与手动凭证双重收款。"},
  "TurnosDespachoDispensario":{t:"药房排队与 AI 处方识别",d:"药房排队管理系统。患者拍摄处方，员工用 AI OCR（OpenAI Vision）读取药品、核对库存并按 FEFO 扣减。通过局域网离线运行。"},
  "ReciclajeApp":{t:"回收站的完整离线管理",d:"离线优先的回收中心管理系统。桌面端作为本地服务器与管理面板，Android 应用作为客户端与称重台界面，Android TV 应用作为公共排队看板。"}
},
exp:[
  {r:"高级 AI 应用开发者",d:"端到端开发 AI 应用：多智能体编排、LLM 集成（Claude、GPT、GLM），以及确定性与随机性过程分离的架构。"},
  {r:"期权交易员",d:"科技股期权交易，含隐含波动率分析与风险管理。"},
  {r:"DeFi 协议分析师",d:"分析去中心化协议、收益耕作与空投，并在 Web3 生态中管理投资组合。"},
  {r:"科技内容创作者",d:"十余年制作关于密码学、区块链、AI 与新兴技术的教育内容。"},
  {r:"独立加密货币交易员",d:"多个加密货币交易对的现货交易与市场分析。"},
  {r:"WordPress 网站开发者",d:"基于 WordPress 的 LMS 平台，含定制 PHP 与 MySQL 功能。"},
  {r:"智能合约开发者",d:"在以太坊区块链上开发并部署 ERC-20 智能合约。"},
  {r:"IT 支持技术员",d:"现场与远程技术支持，Windows/Linux 管理与局域网/无线网络。"}
],
studies:[
  {t:"多媒体工程",s:"在读",n:"SENA 学分互认协议 012/2019"},
  {t:"国际物流分销技术师",s:"毕业",n:null},
  {t:"人工智能",s:"已完成",n:null},
  {t:"区块链与加密货币",s:"已完成",n:null},
  {t:"在线营销与商业模式专精",s:"毕业",n:null},
  {t:"多媒体制作技术师",s:"毕业",n:null},
  {t:"电脑组装与配置助理",s:"毕业",n:"职业能力证书"},
  {t:"电气（电子）技术高中",s:"高中毕业",n:"设备维护实习"}
]
},

/* ============================== 日本語 ============================== */
ja: {
docTitle:"Jhon Supelano — AI・DevOps・ブロックチェーン開発者",
ui:{
  greet:"こんにちは、",
  navAbout:"私について", navSkills:"Skills", navProjects:"プロジェクト", navExp:"経歴", navContact:"お問い合わせ",
  eyebrow:"新規プロジェクト受付中",
  btnProjects:"プロジェクトを見る →", btnContact:"お問い合わせ",
  aboutK:"私について", aboutH:"AI・プロダクト・セキュリティをつなぐエンジニア",
  skillsK:"スキル", skillsH:"習得した技術", skillsP:"インテリジェントなアプリを構築・デプロイ・保護するフルスタック。",
  projectsK:"ポートフォリオ", projectsH:"注目プロジェクト", projectsP:"Google Play 公開アプリと、プライバシー・AI・生産性に特化したオープンソースプロジェクト。",
  expK:"経歴", expH:"職務経歴",
  studiesK:"学歴", studiesH:"学業の歩み", studiesP:"工業高校からマルチメディア工学まで——学び続けた10年。",
  certsK:"44の資格", certsH:"学んできたこと", certsP:"各ドットは資格、各色は機関を表します。星座にカーソルを合わせてください。",
  hint:"💡 ドットにカーソルを合わせると資格が表示されます · 色は発行機関ごとのグループ。",
  contactH:'何か<span class="grad">素晴らしいもの</span>を作りませんか？',
  contactBtn:"メールを送る ✦",
  contactText:"AI製品、セキュアなアプリ、技術コンサルティング——何でもご相談ください。",
  footerMade:"AIでコロンビアから作りました 🇨🇴",
  stats:["オープンソースプロジェクト","テック業界の年数","軍事級暗号化","Offline-first"],
  achTitle:"主な実績", location:"コロンビア",
  viewGithub:"GitHubで見る →", viewPlay:"Play Storeで見る →", msStore:"Microsoft Store →", more:"詳しく見る →",
  langBtn:"言語"
},
profile:{
  roles:["AIアプリケーション開発者","シニアDevOpsエンジニア","ブロックチェーン・暗号資産スペシャリスト","マルチメディア制作テクノロジスト"],
  tagline:"AI・セキュリティ・プロダクト体験を融合したインテリジェントなアプリを構築します。",
  bio:"AIとプロセス自動化のスペシャリスト。フルスタックの経験を持ち、ネイティブAndroid開発（Kotlin）、C#、TypeScript、JavaScript、PHPを扱います。AIエージェントのオーケストレーション、LLM統合（Claude、GPT、GLM）、AES-256暗号化によるセキュリティアーキテクチャに熟練。モバイルアプリからインテリジェントな生産システムまで、スケーラブルな技術ソリューションに注力しています。",
  highlights:["10年以上のYouTubeテックコンテンツ制作","サイバーセキュリティチャレンジ「Revolución Mr. Robot」優勝","Apps.co認定テック起業家","Sunsam元シニアAI開発者"]
},
cats:{"Tienda de Apps":"アプリストア","Productividad":"仕事効率化","Seguridad":"セキュリティ","Privacidad":"プライバシー","Entretenimiento":"エンタメ","Plataformas":"プラットフォーム"},
groups:{"Móvil":"モバイル","Desktop":"デスクトップ","Web":"Web","Backend":"バックエンド","IA":"AI","Seguridad":"セキュリティ","Web3":"Web3","Infra":"インフラ"},
projects:{
  "Sunsam Apps Store":{t:"すべてのアプリを一つのストアに",d:"開発者の全プロジェクトを集めた自作アプリストア。各アプリの紹介ページには説明・スクリーンショット・APKの直接ダウンロード。Web版はGitHub Pages、ストアAPKも提供。"},
  "OnionHost":{t:"スマホやPCからTorネットワークにウェブサイトを公開",d:"Google PlayとMicrosoft Storeで公開中。index.html入りのフォルダを、独自の.onionアドレス（v3隠しサービス）を持つサイトに変えます。Torを内蔵し、ウェブサーバーは端末そのもので動作。ファイルは端末の外に出ません：データ収集ゼロ。"},
  "Cuentero Infinito":{t:"スマホの中で生まれ、読み上げられるAIの物語",d:"Google Playで公開中。言語モデル（LFM2-1.2B）がllama.cppでスマホの中で動作します。物語をリクエストすると、ゼロから創作して読み上げます。スペイン語・英語対応、コンテンツフィルターとPIN付きのキッズモード、眠るための連続モードも。接続不要・アカウント不要。"},
  "PrintOrganize":{t:"正確な物理サイズの画像を、印刷できる形に",d:"Google PlayとMicrosoft Storeで公開中（Android・Windows）。フォルダ内の画像をWord文書のグリッドに配置し、それぞれセンチ単位の正確なサイズに。DOCXは端末上でストリーミング生成：クラウド不要、アカウント不要、ストレージ権限不要。"},
  "Docu Scaner 150%":{t:"身分証をスキャン、150%拡大、印刷",d:"Google Play公開のAndroidアプリ。端末内AI（ML Kit）で身分証をスキャンし、レターサイズ・300DPIで150%に拡大、そのまま印刷します。オフラインファースト：AES-256暗号化ボールト、生体認証ロック、サーバーなし。"},
  "OpenCallShield":{t:"プライバシー最優先の迷惑電話ブロック",d:"オープンソースのAndroidアプリ。CallScreeningServiceで着信を検査し、ルールエンジンでミュートまたは拒否。GitHub上の公開協力ブロックリストと同期しつつプライバシーを守ります。"},
  "OpenWirelessDisplay":{t:"AndroidをPCのワイヤレスモニターに",d:"Spacedeskのオープンソース代替。Android端末をWindows PCのワイヤレスサブモニターに変えます。仮想ディスプレイドライバでミラーと拡張の両モードに対応し、PINで安全にペアリング。"},
  "CompartirArchivosRED":{t:"クラウドもケーブルも不要なLAN内ファイル共有",d:"同一LAN内のAndroidとWindows間のワイヤレスファイル転送。UDPブロードキャストで自動検出、TCPで堅牢な転送、期限付きPINで承認。"},
  "IDPersonalSecure":{t:"AES-256で暗号化された個人デジタルボールト",d:"オフラインファーストのデジタルボールト兼ID管理。クロスプラットフォーム（Android + Windows）。身分証をAES-256-GCMでネイティブ暗号化し、端末間で安全にボールトを転送できます。"},
  "PayBioApp":{t:"端末内AI搭載のバーチャル決済カードホルダー",d:"オフラインのバーチャルボールトで、決済手段（暗号資産・銀行・ウォレット）をQR付きカードとして管理。端末内AI（ML Kit）が画像から決済情報を抽出。TVやカウンター向けキオスクモードも。"},
  "klanly":{t:"Skool型の有料コミュニティプラットフォーム",d:"3つのロール（管理者・作成者・ユーザー）を持つオープンソースの有料コミュニティ。デスクトップ（Tauri）・モバイル（Android）・Web（Next.js）のマルチプラットフォームで、ゲートウェイと手動領収書の二重決済に対応。"},
  "TurnosDespachoDispensario":{t:"AI-OCRで処方箋を読む薬局の順番待ちシステム",d:"薬局向けキュー管理。患者が処方箋を撮影し、スタッフはAI-OCR（OpenAI Vision）で薬剤を読み取り、在庫と照合してFEFOで扣減。LAN内でオフライン動作。"},
  "ReciclajeApp":{t:"リサイクルセンター向けオフライン完結の管理システム",d:"オフラインファーストのリサイクルセンター管理。デスクトップがローカルサーバー兼管理パネル、Androidが客側・計量ステーションのインターフェース、Android TVが公開順番ボード。"}
},
exp:[
  {r:"シニアAIアプリケーション開発者",d:"マルチエージェントオーケストレーション、LLM統合（Claude・GPT・GLM）、決定論的/確率的プロセス分離アーキテクチャによるAIアプリのエンドツーエンド開発。"},
  {r:"オプショントレーダー",d:"テック株のオプション取引。インプライドボラティリティ分析とリスク管理。"},
  {r:"DeFiプロトコルアナリスト",d:"分散型プロトコル、Yield Farming、エアドロップの分析とWeb3エコシステムでのポートフォリオ管理。"},
  {r:"テックコンテンツクリエイター",d:"10年以上にわたり暗号・ブロックチェーン・AI・新技術に関する教育コンテンツを制作。"},
  {r:"独立暗号資産トレーダー",d:"複数の暗号通貨ペアでのスポット取引と市場分析。"},
  {r:"WordPressウェブ開発者",d:"PHPとMySQLのカスタム機能を備えたWordPressのLMSプラットフォーム。"},
  {r:"スマートコントラクト開発者",d:"Ethereumブロックチェーン上でのERC-20スマートコントラクトの開発とデプロイ。"},
  {r:"ITサポート技術者",d:"オンサイト・リモートの技術サポート、Windows/Linux管理、LAN/WiFiネットワーク。"}
],
studies:[
  {t:"マルチメディア工学",s:"履修中",n:"SENA単位互換協定 012/2019"},
  {t:"国際物流テクノロジスト",s:"卒業",n:null},
  {t:"人工知能",s:"修了",n:null},
  {t:"ブロックチェーンと暗号通貨",s:"修了",n:null},
  {t:"オンラインマーケティング・ビジネスモデル専攻",s:"卒業",n:null},
  {t:"マルチメディア制作テクノロジスト",s:"卒業",n:null},
  {t:"PC組み立て・設定アシスタント",s:"卒業",n:"職業適性証明書"},
  {t:"電気（電子）工業高校",s:"高校卒業",n:"設備保守の実習"}
]
},

/* ============================== 한국어 ============================== */
ko: {
docTitle:"Jhon Supelano — AI·DevOps·블록체인 개발자",
ui:{
  greet:"안녕하세요, 저는",
  navAbout:"소개", navSkills:"Skills", navProjects:"프로젝트", navExp:"경력", navContact:"연락",
  eyebrow:"새 프로젝트 가능",
  btnProjects:"프로젝트 보기 →", btnContact:"연락하기",
  aboutK:"소개", aboutH:"AI, 제품, 보안을 하나로 잇는 엔지니어",
  skillsK:"역량", skillsH:"내가 다루는 기술", skillsP:"지능형 앱을 구축·배포·보호하는 완전한 스택.",
  projectsK:"포트폴리오", projectsH:"주요 프로젝트", projectsP:"Google Play에 출시된 앱과 프라이버시·AI·생산성에 집중한 오픈소스 프로젝트.",
  expK:"경력", expH:"실무 경력",
  studiesK:"학력", studiesH:"학업 경력", studiesP:"기술고등학교부터 멀티미디어 공학까지——멈추지 않고 배운 10년.",
  certsK:"44개 자격증", certsH:"내가 배운 것", certsP:"각 점이 자격증, 각 색이 기관입니다. 별자리에 커서를 올려보세요.",
  hint:"💡 점 위에 커서를 올리면 자격증이 표시됩니다 · 색은 발급 기관별 그룹.",
  contactH:'함께 <span class="grad">특별한 것</span>을 만들어볼까요?',
  contactBtn:"이메일 보내기 ✦",
  contactText:"AI 제품, 보안 앱, 기술 컨설팅 무엇이든 이야기해요.",
  footerMade:"AI로 콜롬비아에서 제작 🇨🇴",
  stats:["오픈소스 프로젝트","IT 경력","군사급 암호화","Offline-first"],
  achTitle:"주요 성과", location:"콜롬비아",
  viewGithub:"GitHub에서 보기 →", viewPlay:"Play Store에서 보기 →", msStore:"Microsoft Store →", more:"자세히 보기 →",
  langBtn:"언어"
},
profile:{
  roles:["AI 애플리케이션 개발자","시니어 DevOps 엔지니어","블록체인·크립토 전문가","멀티미디어 제작 기술자"],
  tagline:"AI, 보안, 제품 경험을 결합한 지능형 앱을 만듭니다.",
  bio:"AI 및 프로세스 자동화 전문가로 풀스택 경험 보유: 네이티브 Android 개발(Kotlin), C#, TypeScript, JavaScript, PHP. AI 에이전트 오케스트레이션, LLM 통합(Claude, GPT, GLM), AES-256 암호화 보안 아키텍처에 능숙합니다. 모바일 앱부터 지능형 생산 시스템까지 확장 가능한 기술 솔루션에 집중합니다.",
  highlights:["10년 이상 YouTube 테크 콘텐츠 제작","사이버보안 챌린지 'Revolución Mr. Robot' 우승","Apps.co 선정 기술 창업가","Sunsam 전 시니어 AI 개발자"]
},
cats:{"Tienda de Apps":"앱 스토어","Productividad":"생산성","Seguridad":"보안","Privacidad":"프라이버시","Entretenimiento":"엔터테인먼트","Plataformas":"플랫폼"},
groups:{"Móvil":"모바일","Desktop":"데스크톱","Web":"웹","Backend":"백엔드","IA":"AI","Seguridad":"보안","Web3":"Web3","Infra":"인프라"},
projects:{
  "Sunsam Apps Store":{t:"내 모든 앱을 하나의 스토어에서",d:"개발자의 모든 프로젝트를 모은 자체 앱 스토어. 앱마다 설명·스크린샷·APK 직접 다운로드가 있는 페이지를 제공합니다. GitHub Pages 웹 버전과 Android용 스토어 APK."},
  "OnionHost":{t:"휴대폰이나 PC에서 Tor 네트워크로 웹사이트 게시",d:"Google Play와 Microsoft Store 출시. index.html이 있는 폴더를 고유한 .onion 주소(v3 히든 서비스)를 가진 사이트로 바꿉니다. Tor를 내장했고 웹 서버는 기기 자체에서 실행되며 파일은 절대 밖으로 나가지 않습니다: 데이터 수집 제로."},
  "Cuentero Infinito":{t:"휴대폰 안에서 태어나 읽어주는 AI 이야기",d:"Google Play 출시. 언어 모델(LFM2-1.2B)이 llama.cpp로 휴대폰 안에서 작동합니다. 이야기를 요청하면 처음부터 창작해 소리 내어 읽어줍니다. 스페인어·영어, 콘텐츠 필터와 PIN이 있는 키즈 모드, 잠들 때를 위한 연속 모드. 연결도 계정도 필요 없고 아무것도 기기를 떠나지 않습니다."},
  "PrintOrganize":{t:"정확한 실물 크기의 이미지, 바로 인쇄",d:"Google Play와 Microsoft Store 출시(Android·Windows). 폴더의 이미지를 Word 문서 그리드에 배치하고 각각 센티미터 단위의 정확한 실물 크기를 지정합니다. DOCX는 기기에서 스트리밍 생성: 클라우드·계정·저장소 권한 없음."},
  "Docu Scaner 150%":{t:"신분증 스캔, 150% 확대, 인쇄",d:"Google Play 출시 Android 앱. 기기 내 AI(ML Kit)로 신분증을 스캔하고 Letter 용지 300DPI로 150% 확대해 휴대폰에서 바로 인쇄합니다. 오프라인 우선: AES-256 암호화 볼트, 생체 인증 잠금, 서버 없음."},
  "OpenCallShield":{t:"프라이버시 우선 스팸 전화 차단",d:"오픈소스 Android 앱. CallScreeningService로 수신 전화를 검사해 규칙 엔진에 따라 음소거하거나 거부합니다. GitHub의 공개 협업 차단 목록과 동기화하면서 프라이버시를 지킵니다."},
  "OpenWirelessDisplay":{t:"Android를 PC의 무선 모니터로",d:"Spacedesk의 오픈소스 대안. Android 기기를 Windows PC의 무선 보조 모니터로 바꿉니다. 가상 디스플레이 드라이버로 미러와 확장 모드를 모두 지원하며 PIN으로 안전하게 페어링합니다."},
  "CompartirArchivosRED":{t:"클라우드도 케이블도 없는 LAN 파일 공유",d:"같은 LAN 안의 Android와 Windows 간 무선 파일 전송. UDP 브로드캐스트 자동 발견과 안정적인 TCP 전송, 만료 가능한 PIN 인증."},
  "IDPersonalSecure":{t:"AES-256 암호화 개인 디지털 볼트",d:"오프라인 우선 디지털 볼트이자 신원 관리자, 크로스 플랫폼(Android + Windows). 신분 증명 서류를 AES-256-GCM으로 네이티브 암호화하고 기기 간 볼트를 안전하게 전송합니다."},
  "PayBioApp":{t:"온디바이스 AI 기반 가상 결제 카드 지갑",d:"결제 수단(크립토·은행·월렛)을 QR이 있는 카드로 관리하는 오프라인 가상 볼트. 온디바이스 AI(ML Kit)가 이미지에서 결제 정보를 추출하며 TV·카운터용 키오스크 모드도 제공."},
  "klanly":{t:"Skool 스타일 유료 커뮤니티 플랫폼",d:"세 가지 역할(관리자·생산자·사용자)을 가진 오픈소스 유료 커뮤니티 플랫폼. 데스크톱(Tauri)·모바일(Android)·웹(Next.js) 멀티 플랫폼으로 배포되며 게이트웨이와 수동 영수증 이중 결제를 지원."},
  "TurnosDespachoDispensario":{t:"AI OCR로 처방전을 읽는 약국 대기열",d:"약국용 대기열 관리 시스템. 환자가 처방전을 촬영하면 직원이 AI OCR(OpenAI Vision)으로 약품을 읽고 재고와 대조해 FEFO로 차감합니다. LAN에서 오프라인으로 작동."},
  "ReciclajeApp":{t:"재활용 센터를 위한 완전한 오프라인 관리",d:"오프라인 우선 재활용 센터 관리 시스템. 데스크톱은 로컬 서버 겸 관리 패널, Android 앱은 고객·계량대 인터페이스, Android TV 앱은 공개 대기열 보드입니다."}
},
exp:[
  {r:"시니어 AI 애플리케이션 개발자",d:"멀티 에이전트 오케스트레이션, LLM 통합(Claude, GPT, GLM), 결정론적/확률적 프로세스 분리 아키텍처로 AI 앱을 엔드투엔드 개발."},
  {r:"옵션 트레이더",d:"내재변동성 분석과 리스크 관리를 활용한 기술주 옵션 매매."},
  {r:"DeFi 프로토콜 애널리스트",d:"탈중앙 프로토콜, Yield Farming, 에어드랍 분석과 Web3 생태계 포트폴리오 관리."},
  {r:"테크 콘텐츠 크리에이터",d:"10년 이상 암호학·블록체인·AI·신흥 기술에 대한 교육 콘텐츠 제작."},
  {r:"독립 크립토 트레이더",d:"여러 암호화폐 페어의 현물 매매와 시장 분석."},
  {r:"WordPress 웹 개발자",d:"PHP와 MySQL 커스텀 기능을 갖춘 WordPress LMS 플랫폼."},
  {r:"스마트 컨트랙트 개발자",d:"Ethereum 블록체인에서 ERC-20 스마트 컨트랙트 개발 및 배포."},
  {r:"IT 지원 기술자",d:"현장·원격 기술 지원, Windows/Linux 관리, LAN/WiFi 네트워크."}
],
studies:[
  {t:"멀티미디어 공학",s:"재학 중",n:"SENA 학점 인정 협정 012/2019"},
  {t:"국제 물류 기술자",s:"졸업",n:null},
  {t:"인공지능",s:"수료",n:null},
  {t:"블록체인과 암호화폐",s:"수료",n:null},
  {t:"온라인 마케팅·비즈니스 모델 전문화",s:"졸업",n:null},
  {t:"멀티미디어 제작 기술자",s:"졸업",n:null},
  {t:"PC 조립·설정 보조",s:"졸업",n:"직업 적성 증명서"},
  {t:"전기(전자) 기술고등학교",s:"고등학교 졸업",n:"장비 유지보수 실습"}
]
}
};
