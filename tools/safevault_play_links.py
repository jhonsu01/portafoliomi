# -*- coding: utf-8 -*-
"""Actualiza la landing SafeVault a 'publicado en Google Play' en los 8 idiomas."""
import io

PLAY = "https://play.google.com/store/apps/details?id=com.jhonsu.safevault"
A = "<a href='%s' target='_blank' rel='noopener'>%%s</a>" % PLAY

p = r"D:/ProyectosConIA/SitesClodflare/portafoliomi/src/safevault/index.html"
s = io.open(p, encoding="utf-8").read()

H = [
('<span class="badge-play" data-i="badge"></span>',
 '<a href="%s" class="badge-play" target="_blank" rel="noopener" data-i="badge"></a>' % PLAY),
('<a href="#funciones" class="btn btn-primary" data-i="cta1"></a>\n      <a href="#privacidad" class="btn btn-ghost" data-i="cta2"></a>',
 '<a href="%s" class="btn btn-primary" target="_blank" rel="noopener" data-i="cta0"></a>\n      <a href="#funciones" class="btn btn-ghost" data-i="cta1"></a>\n      <a href="#privacidad" class="btn btn-ghost" data-i="cta2"></a>' % PLAY),
('<span class="btn btn-ghost" style="opacity:.7;cursor:default" data-i="c1_btn"></span>',
 '<a href="%s" class="btn btn-ghost" target="_blank" rel="noopener" data-i="c1_btn"></a>' % PLAY),
('<span class="btn btn-marca" data-i="c2_btn"></span>',
 '<a href="%s" class="btn btn-marca" target="_blank" rel="noopener" data-i="c2_btn"></a>' % PLAY),
('<a href="https://serviciosconiabyjhonsu.com" class="btn btn-primary" data-i="cta_dev"></a>',
 '<a href="%s" class="btn btn-primary" target="_blank" rel="noopener" data-i="cta0"></a>\n      <a href="https://serviciosconiabyjhonsu.com" class="btn btn-ghost" data-i="cta_dev"></a>' % PLAY),
]

LINKS = {
 "es": "ficha de SafeVault en Google Play",
 "en": "SafeVault on Google Play",
 "fr": "la fiche SafeVault sur Google Play",
 "pt": "ficha do SafeVault no Google Play",
 "ru": "странице SafeVault в Google Play",
 "zh": "Google Play 上的 SafeVault",
 "ja": "Google PlayのSafeVault",
 "ko": "Google Play의 SafeVault",
}

D = {
"es": {
 "badge": ["\U0001F4F1 En revisión en Google Play", "\U0001F4F1 Disponible en Google Play"],
 "cta01": ['cta1:"Ver funciones →",cta2:"Privacidad"', 'cta0:"Descargar en Google Play →",cta1:"Ver funciones →",cta2:"Privacidad"'],
 "c1": ['c1_btn:"Incluido al instalar"', 'c1_btn:"Descargar gratis"'],
 "c2": ['c2_btn:"Próximamente en Google Play"', 'c2_btn:"Conseguirla en Google Play"'],
 "faq": ['["¿Cuándo estará en Google Play?","Está en proceso de aprobación. Mientras tanto, aquí puedes conocer todas las funciones."]',
         '["¿Dónde descargo la app?","Ya está disponible y aprobada en la {L}. La descarga y el primer vault son gratuitos."]'],
 "cta_p": ["SafeVault llegará pronto a Google Play. Protección con IA local y cifrado real, en 8 idiomas.",
           "SafeVault ya está disponible en Google Play. Protección con IA local y cifrado real, en 8 idiomas."],
},
"en": {
 "badge": ["\U0001F4F1 In review on Google Play", "\U0001F4F1 Available on Google Play"],
 "cta01": ['cta1:"See features →",cta2:"Privacy"', 'cta0:"Download on Google Play →",cta1:"See features →",cta2:"Privacy"'],
 "c1": ['c1_btn:"Included on install"', 'c1_btn:"Download free"'],
 "c2": ['c2_btn:"Coming soon to Google Play"', 'c2_btn:"Get it on Google Play"'],
 "faq": ['["When will it be on Google Play?","It\'s under review. In the meantime, you can explore all the features here."]',
         '["Where do I download the app?","It\'s now available and approved on {L}. The download and your first vault are free."]'],
 "cta_p": ["SafeVault is coming soon to Google Play. On-device AI protection and real encryption, in 8 languages.",
           "SafeVault is now available on Google Play. On-device AI protection and real encryption, in 8 languages."],
},
"fr": {
 "badge": ["\U0001F4F1 En cours de revue sur Google Play", "\U0001F4F1 Disponible sur Google Play"],
 "cta01": ['cta1:"Voir les fonctions →",cta2:"Confidentialité"', 'cta0:"Télécharger sur Google Play →",cta1:"Voir les fonctions →",cta2:"Confidentialité"'],
 "c1": ['c1_btn:"Inclus à l\'installation"', 'c1_btn:"Télécharger gratuitement"'],
 "c2": ['c2_btn:"Bientôt sur Google Play"', 'c2_btn:"L\'obtenir sur Google Play"'],
 "faq": ['["Quand sur Google Play ?","En cours d\'examen. En attendant, découvrez toutes les fonctions ici."]',
         '["Où télécharger l\'app ?","Elle est déjà disponible et approuvée sur {L}. Le téléchargement et votre premier coffre sont gratuits."]'],
 "cta_p": ["SafeVault arrive bientôt sur Google Play. Protection par IA locale et vrai chiffrement, en 8 langues.",
           "SafeVault est désormais disponible sur Google Play. Protection par IA locale et vrai chiffrement, en 8 langues."],
},
"pt": {
 "badge": ["\U0001F4F1 Em revisão no Google Play", "\U0001F4F1 Disponível no Google Play"],
 "cta01": ['cta1:"Ver funções →",cta2:"Privacidade"', 'cta0:"Baixar no Google Play →",cta1:"Ver funções →",cta2:"Privacidade"'],
 "c1": ['c1_btn:"Incluído na instalação"', 'c1_btn:"Baixar grátis"'],
 "c2": ['c2_btn:"Em breve no Google Play"', 'c2_btn:"Obter no Google Play"'],
 "faq": ['["Quando chega ao Google Play?","Está em processo de aprovação. Enquanto isso, conheça todas as funções aqui."]',
         '["Onde baixo o app?","Já está disponível e aprovado na {L}. O download e o primeiro vault são gratuitos."]'],
 "cta_p": ["O SafeVault chega em breve ao Google Play. Proteção com IA local e criptografia real, em 8 idiomas.",
           "O SafeVault já está disponível no Google Play. Proteção com IA local e criptografia real, em 8 idiomas."],
},
"ru": {
 "badge": ["\U0001F4F1 На проверке в Google Play", "\U0001F4F1 Доступно в Google Play"],
 "cta01": ['cta1:"Возможности →",cta2:"Приватность"', 'cta0:"Скачать в Google Play →",cta1:"Возможности →",cta2:"Приватность"'],
 "c1": ['c1_btn:"Включено при установке"', 'c1_btn:"Скачать бесплатно"'],
 "c2": ['c2_btn:"Скоро в Google Play"', 'c2_btn:"Забрать в Google Play"'],
 "faq": ['["Когда в Google Play?","На проверке. А пока изучите все возможности здесь."]',
         '["Где скачать приложение?","Оно уже доступно и одобрено на {L}. Загрузка и первый сейф бесплатны."]'],
 "cta_p": ["SafeVault скоро появится в Google Play. Защита локальным ИИ и настоящее шифрование на 8 языках.",
           "SafeVault уже доступен в Google Play. Защита локальным ИИ и настоящее шифрование на 8 языках."],
},
"zh": {
 "badge": ["\U0001F4F1 Google Play 审核中", "\U0001F4F1 已上架 Google Play"],
 "cta01": ['cta1:"查看功能 →",cta2:"隐私"', 'cta0:"在 Google Play 下载 →",cta1:"查看功能 →",cta2:"隐私"'],
 "c1": ['c1_btn:"安装即含"', 'c1_btn:"免费下载"'],
 "c2": ['c2_btn:"即将上架 Google Play"', 'c2_btn:"在 Google Play 获取"'],
 "faq": ['["什么时候上架 Google Play？","正在审核中。届时可在此了解全部功能。"]',
         '["在哪里下载应用？","已通过审核并上架 {L}。下载和第一个保险库免费。"]'],
 "cta_p": ["SafeVault 即将上架 Google Play。本地 AI 保护与真正加密，支持 8 种语言。",
           "SafeVault 已上架 Google Play。本地 AI 保护与真正加密，支持 8 种语言。"],
},
"ja": {
 "badge": ["\U0001F4F1 Google Play 審査中", "\U0001F4F1 Google Play で配信中"],
 "cta01": ['cta1:"機能を見る →",cta2:"プライバシー"', 'cta0:"Google Playでダウンロード →",cta1:"機能を見る →",cta2:"プライバシー"'],
 "c1": ['c1_btn:"インストール時に含まれる"', 'c1_btn:"無料でダウンロード"'],
 "c2": ['c2_btn:"近日 Google Play 登場"', 'c2_btn:"Google Playで入手"'],
 "faq": ['["いつ Google Play に？","現在審査中です。それまで全機能をここでご確認いただけます。"]',
         '["どこでダウンロードできますか？","審査を通過し{L}で配信中です。ダウンロードと最初のVaultは無料です。"]'],
 "cta_p": ["SafeVault はまもなく Google Play に登場します。端末内 AI による保護と本物の暗号化を、8 言語で。",
           "SafeVault は Google Play で配信中です。端末内 AI による保護と本物の暗号化を、8 言語で。"],
},
"ko": {
 "badge": ["\U0001F4F1 Google Play 심사 중", "\U0001F4F1 Google Play 출시"],
 "cta01": ['cta1:"기능 보기 →",cta2:"개인정보"', 'cta0:"Google Play에서 다운로드 →",cta1:"기능 보기 →",cta2:"개인정보"'],
 "c1": ['c1_btn:"설치 시 포함"', 'c1_btn:"무료 다운로드"'],
 "c2": ['c2_btn:"곧 Google Play 출시"', 'c2_btn:"Google Play에서 받기"'],
 "faq": ['["언제 Google Play에?","현재 심사 중입니다. 그동안 모든 기능을 여기서 확인하세요."]',
         '["어디서 다운로드하나요?","심사를 통과해 {L}에 출시되었습니다. 다운로드와 첫 볼트는 무료입니다."]'],
 "cta_p": ["SafeVault가 곧 Google Play에 출시됩니다. 온디바이스 AI 보호와 진짜 암호화를 8개 언어로.",
           "SafeVault가 Google Play에 출시되었습니다. 온디바이스 AI 보호와 진짜 암호화를 8개 언어로."],
},
}

hmiss = []
for a, b in H:
    if a in s:
        s = s.replace(a, b)
    else:
        hmiss.append(a[:50])

dmiss = []
for lang, d in D.items():
    root = '"zh":{' if lang == "zh" else lang + ":{"
    i = s.find(root)
    if i < 0:
        dmiss.append(lang + ":root")
        continue
    j = s.find("\n},", i)
    block = s[i:j]
    nb = block
    for key in ("badge", "cta01", "c1", "c2", "faq", "cta_p"):
        old, new = d[key]
        if key == "faq":
            new = new.replace("{L}", A % LINKS[lang])
        if old in nb:
            nb = nb.replace(old, new)
        else:
            dmiss.append(lang + ":" + key)
    s = s[:i] + nb + s[j:]

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("HTML missing:", hmiss)
print("DICT missing:", dmiss)
