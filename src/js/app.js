/* ============================================================================
 *  Portafolio Jhon Supelano — Render dinámico + interacciones
 * ============================================================================ */
/* ---------- Selector de tema ---------- */
(function(){
  "use strict";
  const THEMES = {
    papel:  { name:'Papel',  color:'#f7f1e3', swatch:'linear-gradient(135deg,#f7f1e3,#fffdf7)' },
    aurora: { name:'Aurora', color:'#0a0b14', swatch:'linear-gradient(135deg,#0a0b14,#6e8cff)' }
  };
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn');
  const menu = document.getElementById('themeMenu');
  const swatch = document.getElementById('themeSwatch');
  const nameEl = document.getElementById('themeName');
  const metaTheme = document.getElementById('meta-theme');

  function current(){ return root.getAttribute('data-theme') || 'papel'; }

  function apply(theme){
    if(!THEMES[theme]) theme = 'papel';
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch(e){}
    const t = THEMES[theme];
    if(swatch) swatch.style.background = t.swatch;
    if(nameEl) nameEl.textContent = t.name;
    if(metaTheme) metaTheme.setAttribute('content', t.color);
    // marca la opción activa
    document.querySelectorAll('.theme-opt').forEach(o => {
      o.classList.toggle('active', o.dataset.theme === theme);
    });
    // avisa a componentes (constelación) para que re-rendericen con el nuevo tema
    window.dispatchEvent(new Event('themechange'));
  }

  function toggle(open){
    const isOpen = open !== undefined ? open : !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  if(btn && menu){
    btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });
    document.querySelectorAll('.theme-opt').forEach(o => {
      o.addEventListener('click', () => { apply(o.dataset.theme); toggle(false); });
    });
    document.addEventListener('click', e => {
      if(!menu.contains(e.target) && !btn.contains(e.target)) toggle(false);
    });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') toggle(false); });
  }

  // sincroniza el botón con el tema ya aplicado por el script anti-FOUC
  apply(current());

  // Atajo de teclado: T para ciclar temas
  document.addEventListener('keydown', e => {
    if(e.key.toLowerCase() === 't' && !/input|textarea/i.test(e.target.tagName)){
      apply(current() === 'papel' ? 'aurora' : 'papel');
    }
  });
})();

(function(){
  "use strict";
  const D = window.PORTFOLIO_DATA;
  const P = D.PROFILE, SK = D.SKILLS, PR = D.PROJECTS, EX = D.EXPERIENCE, CE = D.CERTS,
        ISSUERS = D.ISSUERS, STUDIES = D.STUDIES;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const $ = s => document.querySelector(s);
  const el = (tag, cls, html) => { const e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* ---------- Hero ---------- */
  $('#heroLead').textContent = P.tagline;

  // Stats
  const stats = $('#stats');
  const statsData = [
    {num: '100+', lbl: 'Proyectos open source'},
    {num: '10+', lbl: 'Años en tecnología'},
    {num: 'AES-256', lbl: 'Cifrado de grado militar'},
    {num: '100%', lbl: 'Offline-first'}
  ];
  statsData.forEach(s => stats.appendChild(el('div','stat',
    `<div class="num">${s.num}</div><div class="lbl">${s.lbl}</div>`)));

  // Role rotator (typewriter)
  (function(){
    const host = $('#roleRotator');
    let i=0, c=0, del=false;
    function tick(){
      const cur = P.roles[i];
      host.textContent = cur.slice(0,c);
      if(!del){ c++; if(c>cur.length){del=true; return setTimeout(tick, reduce?400:1800);} }
      else { c--; if(c<0){del=false; i=(i+1)%P.roles.length;} }
      setTimeout(tick, del?40:70);
    }
    tick();
  })();

  /* ---------- About ---------- */
  const bio = $('#aboutBio');
  P.bio.split('\n').forEach(p => p.trim() && bio.appendChild(el('p',null,esc(p))));
  const card = $('#aboutCard');
  card.appendChild(el('h3',null,'Logros destacados'));
  const ul = el('ul');
  P.highlights.forEach(h => ul.appendChild(el('li',null,esc(h))));
  card.appendChild(ul);
  // datos contacto
  card.appendChild(el('h3',{style:'margin-top:22px'},'📍 ' + P.location));
  const socialMap = [
    ['github','GitHub'],['linkedin','LinkedIn'],['youtube','YouTube'],
    ['twitter','X'],['telegram','Telegram'],['whatsapp','WhatsApp'],
    ['keybase','Keybase'],['instagram','Instagram']
  ];
  const socials = el('div','social-row');
  socialMap.forEach(([k,lbl]) => {
    if(!P.social[k]) return;
    const a = el('a'); a.href = P.social[k]; a.target='_blank'; a.rel='noopener'; a.title=lbl;
    a.appendChild(svgIcon(k));
    socials.appendChild(a);
  });
  card.appendChild(socials);

  /* ---------- Skills ---------- */
  const sg = $('#skillsGrid');
  SK.forEach(s => {
    const it = el('div','skill');
    it.innerHTML = `<div class="skill-group">${s.group}</div>
      <div class="skill-top"><span class="skill-name">${esc(s.name)}</span><span class="skill-pct">${s.level}%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-w="${s.level}"></div></div>`;
    sg.appendChild(it);
  });

  /* ---------- Projects ---------- */
  const pg = $('#projectsGrid');
  PR.forEach(p => {
    const c = el('article','project reveal');
    const onerr = "this.onerror=null;this.parentNode.style.display='none'";
    c.innerHTML = `
      <div class="project-img">
        <span class="project-cat">${esc(p.category)}</span>
        <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="${onerr}">
      </div>
      <div class="project-body">
        <h3>${esc(p.name)}</h3>
        <div class="project-tag">${esc(p.tagline)}</div>
        <p class="project-desc">${esc(p.description)}</p>
        <div class="project-tech">${p.tech.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>
        <div class="project-links">
          ${p.play
            ? `<a class="project-link" href="${esc(p.play)}" target="_blank" rel="noopener">Ver en Play Store →</a>`
            : `<a class="project-link" href="${esc(p.repo)}" target="_blank" rel="noopener">Ver en GitHub →</a>`}
          ${p.site ? `<a class="project-link alt" href="${esc(p.site)}">Ver más →</a>` : ''}
        </div>
      </div>`;
    pg.appendChild(c);
  });

  /* ---------- Experience ---------- */
  const tl = $('#timeline');
  EX.forEach(e => tl.appendChild(el('div','tl-item reveal',
    `<div class="tl-role">${esc(e.role)}</div>
     <div class="tl-org">${esc(e.org)} · <span class="tl-period">${esc(e.period)}</span></div>
     <div class="tl-desc">${esc(e.desc)}</div>`)));

  /* ---------- Estudios (timeline académica) ---------- */
  const stTl = $('#studiesTimeline');
  if(stTl){
    STUDIES.forEach(s => {
      const item = el('div','tl-item reveal');
      const statusCls = s.status === 'En curso' ? 'study-status ongoing' : 'study-status';
      item.innerHTML =
        `<div class="tl-role">${esc(s.title)}</div>
         <div class="tl-org">${esc(s.school)} · <span class="tl-period">${esc(s.period)}</span></div>
         <div class="study-meta"><span class="${statusCls}">${esc(s.status)}</span>
           ${s.note ? `<span class="study-note">${esc(s.note)}</span>` : ''}</div>
         ${s.skills ? `<div class="study-skills">${s.skills.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div>` : ''}`;
      stTl.appendChild(item);
    });
  }

  /* ---------- Leyenda de la constelación (paleta dinámica por tema) ---------- */
  function renderLegend(){
    const legend = $('#certLegend');
    if(!legend) return;
    const dark = document.documentElement.getAttribute('data-theme') === 'aurora';
    const sat = dark ? 80 : 48, light = dark ? 62 : 42;
    const HUES = { "Platzi":265,"Servicio Nacional de Aprendizaje (SENA)":120,"Amazon Web Services (AWS)":32,"Huawei":0,"Cisco Networking Academy":197,"Coursera":217,"NASA - National Aeronautics and Space Administration":224,"Universidad Distrital Francisco José de Caldas":277,"Bancolombia":49,"Bancoldex":20,"bvc-Bolsa de Valores de Colombia S.A.":217,"Superintendencia Financiera de Colombia":150,"Cámara de Comercio de Casanare":41,"CertiProf":168,"LinkedIn":210,"CodeAI":338 };
    const groups = {};
    CE.forEach(c => (groups[c.issuer] = groups[c.issuer] || []).push(c));
    const sorted = Object.entries(groups).sort((a,b) => b[1].length - a[1].length);
    legend.innerHTML = sorted.map(([iss, list]) => {
      const info = ISSUERS[iss] || { short: iss };
      const hue = HUES[iss] != null ? HUES[iss] : (iss.length * 37) % 360;
      const col = `hsl(${hue},${sat}%,${light+8}%)`;
      return `<span class="legend-item" title="${esc(iss)}">
        <span class="legend-dot" style="background:${col};color:${col}"></span>${esc(info.short)} <em>${list.length}</em></span>`;
    }).join('');
  }
  renderLegend();
  window.addEventListener('themechange', renderLegend);

  /* ---------- Contact ---------- */
  $('#contactText').textContent = 'Ya sea para un producto con IA, una app segura o una consultoría técnica, conversemos.';
  const cs = $('#contactSocial');
  socialMap.slice(0,6).forEach(([k,lbl]) => {
    if(!P.social[k]) return;
    const a = el('a'); a.href=P.social[k]; a.target='_blank'; a.rel='noopener'; a.title=lbl;
    a.appendChild(svgIcon(k));
    cs.appendChild(a);
  });

  /* ---------- Year ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll + skill bars ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add('in');
        en.target.querySelectorAll && en.target.querySelectorAll('.skill-fill').forEach(f => {
          f.style.width = f.dataset.w + '%';
        });
        io.unobserve(en.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(r => io.observe(r));

  /* ---------- Iconos SVG inline (sin dependencias) ---------- */
  function svgIcon(name){
    const paths = {
      github:'<path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>',
      linkedin:'<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/>',
      youtube:'<path d="M23 12s0-3.5-.4-5.2c-.3-1-1-1.7-2-2C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.6.4c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 1 1.7 2 2 1.8.4 8.6.4 8.6.4s6.8 0 8.6-.4c1-.3 1.7-1 2-2 .4-1.7.4-5.2.4-5.2zM9.8 15.3V8.7l5.7 3.3z"/>',
      twitter:'<path d="M18.9 5.2c.8-.5 1.5-1.3 1.8-2.2-.8.5-1.6.8-2.5 1-.7-.8-1.7-1.3-2.9-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.2-1.7-8.2-4.2-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.7 2.8-1.4 1.1-3.1 1.7-5 1.7H2c1.8 1.1 3.9 1.8 6.2 1.8 7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.5-2.3.6z"/>',
      telegram:'<path d="M22 3.4l-3.3 15.6c-.3 1.2-.9 1.5-1.9.9l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.3-5.3 9.6-8.7c.4-.4-.1-.6-.6-.2L5.9 13.2.7 11.6c-1.1-.3-1.1-1.1.2-1.6L20.7 2c.9-.4 1.7.2 1.3 1.4z"/>',
      whatsapp:'<path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.3-3.6-.8-3-1.3-4.9-4.4-5-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5-.4.4c-.1.1-.3.3-.1.5.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.4z"/>',
      keybase:'<path d="M10.5 1.4l-.4.6c-.2.4-.2.8-.1 1.2L7.5 5.5c-.6-.5-1.5-.6-2.2-.2-.9.5-1.2 1.6-.8 2.5-2 1.4-3 3.8-2.6 6.2.4 2.7 2.6 4.9 5.3 5.3.3 0 .6.1.9.1 1.4 0 2.7-.4 3.8-1.2l.4.4c.3.4.8.5 1.3.5h2.8c.6 0 1.1-.3 1.4-.8l.5-.9c.1-.2.1-.4.1-.6v-1c.4-.3.7-.7.9-1.2.5-1.3 0-2.7-1.2-3.4.4-1.3.2-2.6-.5-3.7l1.8-1.8c.4.1.8.1 1.2-.1l.6-.4-.6-.6c-.6-.6-1.4-1-2.3-1.1-.9-.1-1.7.1-2.5.5-.2-.8-.6-1.6-1.1-2.3l-.6-.6zM8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>',
      instagram:'<path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.5 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.5-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.5-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.5 2.3-.5C9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 4 .1s3 0 4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-4s0-3-.1-4c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-4-.1zm0 3.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 8.4a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>'
    };
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('width','18'); svg.setAttribute('height','18');
    svg.setAttribute('fill','currentColor');
    svg.innerHTML = paths[name] || '';
    return svg;
  }
})();
