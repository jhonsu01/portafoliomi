# -*- coding: utf-8 -*-
"""Genera privacy.html y terms.html multilenguje para SafeVault desde los .md del zip."""
import re, io, os

SRC = r"C:/Users/Jhon Supelano/AppData/Local/Temp/safevault_legal/legal"
OUT = r"D:/ProyectosConIA/SitesClodflare/portafoliomi/src/safevault"
LANGS = [("es","Español"),("en","English"),("pt","Português"),("fr","Français"),
         ("ru","Русский"),("zh","中文（简体）"),("ja","日本語"),("ko","한국어")]
FILES = {  # (doc, {lang: filename})
  "privacy": {"es":"politica-de-privacidad.md","en":"privacy-policy.md","pt":"politica-de-privacidade.md",
              "fr":"politique-de-confidentialite.md","ru":"politika-konfidencialnosti.md",
              "zh":"privacy-policy.md","ja":"privacy-policy.md","ko":"privacy-policy.md"},
  "terms": {"es":"terminos-de-uso.md","en":"terms-of-use.md","pt":"termos-de-uso.md",
            "fr":"conditions-d-utilisation.md","ru":"usloviya-ispolzovaniya.md",
            "zh":"terms-of-use.md","ja":"terms-of-use.md","ko":"terms-of-use.md"},
}
BACK = {"privacy":"/safevault/","terms":"/safevault/"}
OTHER = {"privacy":("terms","TermsLinkPlaceholder"),"terms":("privacy","PrivacyLinkPlaceholder")}

def inline(t):
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2" target="_blank" rel="noopener">\1</a>', t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    return t

def md2html(md):
    lines = md.splitlines()
    h1 = ""
    meta_lines, body = [], []
    i = 0
    # header: hasta el primer '## '
    while i < len(lines):
        ln = lines[i].strip()
        if ln.startswith("## "): break
        if ln.startswith("# ") and not h1: h1 = ln[2:].strip()
        elif re.match(r"^\*\*.*:\*\*", ln): meta_lines.append(ln)
        i += 1
    meta_html = "<br>\n    ".join(inline(m) for m in meta_lines)
    out, sec = [], 0
    table_buf = []
    def flush_table():
        nonlocal table_buf
        if not table_buf: return
        rows = [ [c.strip() for c in r.strip().strip("|").split("|")] for r in table_buf ]
        rows = [r for r in rows if not all(re.match(r"^:?-{2,}:?$", c) for c in r)]
        if rows:
            t = ['<table>']
            t.append("<tr>" + "".join(f"<th>{inline(c)}</th>" for c in rows[0]) + "</tr>")
            for r in rows[1:]:
                t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            t.append("</table>")
            out.append("\n".join(t))
        table_buf = []
    ul_open = False
    def close_ul():
        nonlocal ul_open
        if ul_open: out.append("</ul>"); ul_open = False
    while i < len(lines):
        ln = lines[i].rstrip(); s = ln.strip()
        if s.startswith("|"):
            close_ul(); table_buf.append(s); i += 1; continue
        flush_table()
        if not s or s.startswith("---") or s.startswith(">"):
            i += 1; continue
        if s.startswith("## "):
            close_ul(); sec += 1
            title = inline(s[3:].strip())
            out.append(f'<h2 id="s{sec}">{title}</h2>')
        elif s.startswith("- "):
            if not ul_open: out.append("<ul>"); ul_open = True
            out.append(f"<li>{inline(s[2:])}</li>")
        elif re.match(r"^\d+\. ", s):
            if not ul_open: out.append("<ul>"); ul_open = True
            out.append(f"<li>{inline(re.sub(r'^\\d+\\. ','',s))}</li>")
        else:
            close_ul(); out.append(f"<p>{inline(s)}</p>")
        i += 1
    flush_table(); close_ul()
    return h1, meta_html, "\n".join(out)

CSS = """<style>
:root{
  --papel:#fffdf7; --crema:#f7f1e3; --hundido:#f2ead9; --borde:#e5dbc8; --borde-s:#d4c7ac;
  --tinta:#241f1b; --fuerte:#4a4139; --texto:#5d524b; --apagado:#71675d; --apoyo:#8e8070;
  --bronce:#8c5a31; --bronce-suave:#f6e9dc;
  --display:"Instrument Serif",Georgia,serif; --ui:"Red Hat Mono",ui-monospace,monospace; --prosa:ui-sans-serif,system-ui,sans-serif;
  --radio:6px;
}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--crema);color:var(--texto);font-family:var(--prosa);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:var(--bronce)}
code{background:var(--hundido);padding:.1em .4em;border-radius:3px;font-size:.9em;font-family:var(--ui);color:var(--fuerte)}
.wrap{max-width:760px;margin:0 auto;padding:0 24px 80px}
.nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(16px);background:rgba(247,241,227,.88);border-bottom:1px solid var(--borde)}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;height:58px;padding:0 24px;gap:12px}
h2[id]{scroll-margin-top:80px}
.brand{display:flex;align-items:center;gap:9px;font-weight:600;font-size:14px;color:var(--tinta);font-family:var(--ui);text-decoration:none}
.brand .mark{width:28px;height:28px;border-radius:7px;background:var(--tinta);color:var(--crema);display:grid;place-items:center;font-size:14px}
.nav-right{display:flex;align-items:center;gap:10px}
.langsel{font-family:var(--ui);font-size:12px;color:var(--fuerte);background:var(--papel);border:1px solid var(--borde-s);border-radius:99px;padding:5px 10px;cursor:pointer}
.back{font-size:13px;color:var(--apagado);font-family:var(--ui);text-decoration:none;white-space:nowrap}
.back:hover{color:var(--tinta)}
.legal-head{padding:48px 0 28px;border-bottom:1px solid var(--borde);margin-bottom:32px}
.legal-head .kicker{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--bronce);font-weight:500;font-family:var(--ui);margin-bottom:8px}
.legal-head h1{font-family:var(--display);font-size:clamp(2rem,5vw,2.8rem);font-weight:400;color:var(--tinta);letter-spacing:-.03em;line-height:1.1;margin-bottom:14px}
.meta{color:var(--apoyo);font-size:13.5px;font-family:var(--ui);line-height:1.6}
.meta strong{color:var(--fuerte);font-weight:600}
h2{font-family:var(--display);font-size:1.45rem;font-weight:400;color:var(--tinta);letter-spacing:-.02em;margin:36px 0 12px}
.lang-block > h2:first-of-type{margin-top:32px}
p{margin-bottom:14px;color:var(--texto)}
ul{padding-left:1.3rem;margin-bottom:14px}
li{margin-bottom:8px;color:var(--texto)}
li strong,p strong{color:var(--tinta)}
table{width:100%;border-collapse:collapse;margin:14px 0 18px;font-size:14px;background:var(--papel);border:1px solid var(--borde);border-radius:var(--radio);overflow:hidden}
th{background:var(--hundido);text-align:left;padding:10px 14px;font-family:var(--ui);font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--apagado)}
td{padding:10px 14px;border-top:1px solid var(--borde);color:var(--texto);vertical-align:top}
.lang-block{display:none}
.lang-block.active{display:block}
.lang-note{text-align:center;margin-top:30px;font-size:13px;color:var(--apoyo);font-family:var(--ui)}
footer{border-top:1px solid var(--borde);padding:24px;text-align:center;color:var(--apoyo);font-size:12.5px;font-family:var(--ui)}
footer a{color:var(--bronce)}
</style>"""

SELECTOR_JS = """<script>
(function(){
  var LANGS=["es","en","pt","fr","ru","zh","ja","ko"];
  function qs(n){try{return new URLSearchParams(location.search).get(n)}catch(e){return null}}
  var saved=null;try{saved=localStorage.getItem("safevault-lang")}catch(e){}
  var q=qs("lang");var lang=(q&&LANGS.indexOf(q)>=0)?q:(saved||"es");
  var sel=document.getElementById("langsel");
  function apply(l){
    document.documentElement.lang=(l==="zh"?"zh-Hans":l);
    document.querySelectorAll(".lang-block").forEach(function(b){b.classList.toggle("active",b.dataset.lang===l)});
    try{localStorage.setItem("safevault-lang",l)}catch(e){}
  }
  sel.value=lang;apply(lang);
  sel.addEventListener("change",function(){apply(sel.value)});
})();
</script>"""

OPTIONS = "".join(f'<option value="{c}">{n}</option>' for c,n in LANGS)

def build(doc):
    h1s, blocks = {}, []
    for code,_ in LANGS:
        md = io.open(os.path.join(SRC, code, FILES[doc][code]), encoding="utf-8").read()
        h1, meta, body = md2html(md)
        h1s[code] = h1
        blocks.append(f'<div class="lang-block" data-lang="{code}" dir="auto">\n{body}\n</div>')
    if doc=="privacy":
        kicker, other_link = "Legal", '<a class="back" href="/safevault/terms.html" data-any>Términos</a>'
    else:
        kicker, other_link = "Legal", '<a class="back" href="/safevault/privacy.html" data-any>Privacidad</a>'
    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SafeVault — {'Política de Privacidad' if doc=='privacy' else 'Términos de Uso'} (multilenguaje)</title>
<meta name="description" content="SafeVault: política legal multilingüe (español, english, português, français, русский, 中文, 日本語, 한국어). La IA y el cifrado ocurren dentro del teléfono.">
<meta name="theme-color" content="#f7f1e3">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%23241f1b'/><text x='50' y='70' font-size='48' fill='%238c5a31' text-anchor='middle'>🛡️</text></svg>">
{CSS}
</head>
<body>

<nav class="nav">
  <div class="wrap">
    <a href="/safevault/" class="brand"><span class="mark">🛡️</span> SafeVault</a>
    <div class="nav-right">
      <select id="langsel" class="langsel" aria-label="Language">{OPTIONS}</select>
      {other_link}
      <a href="/safevault/" class="back">← SafeVault</a>
    </div>
  </div>
</nav>

<div class="wrap">

<header class="legal-head">
  <div class="kicker">{kicker} · 8 idiomas</div>
  <h1 id="doc-title">SafeVault</h1>
  <p class="meta" id="doc-meta"></p>
</header>

{chr(10).join(blocks)}

<p class="lang-note" dir="ltr">Español · English · Português · Français · Русский · 中文（简体） · 日本語 · 한국어</p>

</div>

<footer>
  © 2026 SafeVault · jhonsu01 · <a href="mailto:jaiverbot77@gmail.com">jaiverbot77@gmail.com</a>
</footer>

{SELECTOR_JS}
<script>
(function(){{
  // título y meta por idioma (extraído del primer encabezado de cada documento)
  var T={{json_titles}};
  var M={{json_metas}};
  var base=document.getElementById("doc-title"),bmeta=document.getElementById("doc-meta");
  function rt(l){{ if(T[l]){{base.innerHTML=T[l];bmeta.innerHTML=M[l];}} }}
  var sel=document.getElementById("langsel");
  rt(sel.value);
  sel.addEventListener("change",function(){{rt(sel.value)}});
}})();
</script>
</body>
</html>"""
    return html

import json
for doc in ("privacy","terms"):
    titles, metas = {}, {}
    for code,_ in LANGS:
        md = io.open(os.path.join(SRC, code, FILES[doc][code]), encoding="utf-8").read()
        h1, meta, _body = md2html(md)
        titles[code] = h1; metas[code] = meta
    html = build(doc).replace("{json_titles}", json.dumps(titles, ensure_ascii=False)).replace("{json_metas}", json.dumps(metas, ensure_ascii=False))
    out = os.path.join(OUT, f"{doc}.html")
    io.open(out, "w", encoding="utf-8", newline="\n").write(html)
    print("OK", out, f"{os.path.getsize(out):,} bytes")
