/* ============================================================================
 *  ConstellationCloud — Nube de certificaciones tipo "constelación/cerebro"
 *
 *  Cada emisor es un nodo central (cluster). Sus certificaciones orbitan como
 *  partículas con física suave (atracción al centro del cluster + repulsión
 *  entre nodos cercanos). El conjunto respira: deriva lo que he aprendido.
 *
 *  Interacciones:
 *    - Hover partícula → tooltip con nombre + fecha
 *    - Hover cluster   → resalta su grupo y atenúa los demás
 *    - Click partícula → la "fija" (toggle pin)
 *    - Responsive + respeta prefers-reduced-motion
 * ============================================================================ */
(function(){
  "use strict";
  const canvas = document.getElementById('certCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const tooltip = document.getElementById('certTooltip');
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  const D = window.PORTFOLIO_DATA;
  const CERTS = D.CERTS, ISSUERS = D.ISSUERS;

  // CSS vars leídas del tema activo
  function cssVar(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

  let W=0, H=0, dpr=Math.min(window.devicePixelRatio||1, 2);
  let nodes=[];      // partículas (certificaciones)
  let hubs=[];       // centros de cluster (emisores)
  let mouse={x:-9999,y:-9999,active:false};
  let hoverNode=null, pinnedNode=null;
  let raf=null;

  /* ---------- Setup de datos ---------- */
  function buildNodes(){
    hubs=[]; nodes=[];
    // agrupar certs por emisor
    const groups={};
    CERTS.forEach(c=>{
      const iss = ISSUERS[c.issuer] || { short:c.issuer, color:'#888', kind:'Otro' };
      if(!groups[c.issuer]) groups[c.issuer]={ issuer:c.issuer, info:iss, certs:[] };
      groups[c.issuer].certs.push(c);
    });
    const groupArr = Object.values(groups).sort((a,b)=> b.certs.length - a.certs.length);

    // colocar hubs en círculo alrededor del centro
    const cx=W/2, cy=H/2;
    const R = Math.min(W,H) * 0.30;
    groupArr.forEach((g,i)=>{
      const ang = (i/groupArr.length)*Math.PI*2 - Math.PI/2;
      hubs.push({
        id:g.issuer, label:g.info.short, color:g.info.color, kind:g.info.kind,
        count:g.certs.length,
        x: cx + Math.cos(ang)*R,
        y: cy + Math.sin(ang)*R,
        ang
      });
      // partículas de este hub
      g.certs.forEach((c,j)=>{
        nodes.push({
          cert:c, hub:g.issuer, color:g.info.color,
          x: cx + Math.cos(ang)*R + (Math.random()-.5)*40,
          y: cy + Math.sin(ang)*R + (Math.random()-.5)*40,
          vx:0, vy:0, r: 2 + Math.min(4, g.certs.length===1?3: (5 - j*0.1)),
          phase: Math.random()*Math.PI*2
        });
      });
    });
  }

  /* ---------- Resize ---------- */
  function resize(){
    const rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W*dpr; canvas.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    buildNodes();
  }

  /* ---------- Física suave ---------- */
  function step(){
    const cx=W/2, cy=H/2;
    const myHubById = {}; hubs.forEach(h=> myHubById[h.id]=h);

    for(const n of nodes){
      const hub = myHubById[n.hub];
      // atracción al hub del emisor
      const dx = hub.x - n.x, dy = hub.y - n.y;
      const dist = Math.hypot(dx,dy)||1;
      // distancia objetivo del hub según nº de partículas (órbita)
      const target = 14 + (n.cert && 1) ? 0 : 0;
      const orbitR = 16 + (nodes.filter(x=>x.hub===n.hub).indexOf(n)) * 6;
      const desired = Math.max(orbitR, 16);
      const pull = (dist - desired) * 0.012;
      n.vx += (dx/dist) * pull;
      n.vy += (dy/dist) * pull;

      // deriva orbital suave (respiración)
      n.phase += 0.008;
      n.vx += Math.cos(n.phase) * 0.015;
      n.vy += Math.sin(n.phase) * 0.015;

      // repulsión entre partículas cercanas
      for(let k=0;k<nodes.length;k++){
        const m = nodes[k]; if(m===n) continue;
        const rx = n.x-m.x, ry=n.y-m.y;
        const rd = rx*rx+ry*ry;
        if(rd < 260){
          const d = Math.sqrt(rd)||1;
          const f = (260-rd)/260 * 0.05;
          n.vx += (rx/d)*f; n.vy += (ry/d)*f;
        }
      }

      // repulsión al borde
      if(n.x<10) n.vx += 0.3; if(n.x>W-10) n.vx -= 0.3;
      if(n.y<10) n.vy += 0.3; if(n.y>H-10) n.vy -= 0.3;

      // amortiguación + integración
      n.vx *= 0.86; n.vy *= 0.86;
      n.x += n.vx; n.y += n.vy;
    }

    // hubs también derivan lentamente hacia su posición ideal (respiración del conjunto)
    const t = performance.now()*0.0002;
    hubs.forEach((h,i)=>{
      const ang = h.ang + Math.sin(t + i)*0.15;
      const R = Math.min(W,H)*0.30;
      const tx = cx + Math.cos(ang)*R, ty = cy + Math.sin(ang)*R;
      h.x += (tx-h.x)*0.02; h.y += (ty-h.y)*0.02;
    });
  }

  /* ---------- Render ---------- */
  function draw(){
    const ink = cssVar('--texto') || '#5d524b';
    const apagado = cssVar('--apoyo') || '#8e8070';
    ctx.clearRect(0,0,W,H);

    // líneas de conexión partícula→hub
    ctx.lineWidth = 0.6;
    const focusHub = hoverNode ? hoverNode.hub : null;
    for(const n of nodes){
      const hub = hubs.find(h=>h.id===n.hub);
      if(focusHub && n.hub!==focusHub){ ctx.globalAlpha = 0.05; } else { ctx.globalAlpha = 0.22; }
      ctx.strokeStyle = n.color;
      ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(hub.x,hub.y); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // hubs (núcleos de cada emisor)
    hubs.forEach(h=>{
      const isFocus = focusHub === h.id;
      const isDim = focusHub && !isFocus;
      ctx.globalAlpha = isDim ? 0.25 : 1;
      // halo
      const grad = ctx.createRadialGradient(h.x,h.y,0,h.x,h.y,h.count*3+12);
      grad.addColorStop(0, hexA(h.color, isFocus?0.45:0.28));
      grad.addColorStop(1, hexA(h.color,0));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(h.x,h.y, h.count*3+14, 0, Math.PI*2); ctx.fill();
      // núcleo
      ctx.fillStyle = h.color;
      ctx.beginPath(); ctx.arc(h.x,h.y, 4 + Math.min(6,h.count*0.4), 0, Math.PI*2); ctx.fill();
      // etiqueta
      ctx.font = '500 10px "Red Hat Mono", ui-monospace, monospace';
      ctx.fillStyle = cssVar('--tinta') || '#241f1b';
      ctx.textAlign = 'center';
      ctx.fillText(h.label, h.x, h.y - 12);
      ctx.font = '10px "Red Hat Mono", monospace';
      ctx.fillStyle = apagado;
      ctx.fillText(h.count, h.x, h.y + 22);
    });

    // partículas
    for(const n of nodes){
      const isHover = n===hoverNode;
      const isFocus = focusHub === n.hub;
      const isDim = focusHub && !isFocus;
      ctx.globalAlpha = isDim ? 0.2 : 1;
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(n.x,n.y, isHover? n.r+2 : n.r, 0, Math.PI*2);
      ctx.fill();
      if(isHover){
        ctx.strokeStyle = cssVar('--tinta')||'#241f1b';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  /* ---------- Loop ---------- */
  function loop(){ step(); draw(); if(!reduce) raf = requestAnimationFrame(loop); }

  /* ---------- Helpers ---------- */
  function hexA(hex,a){
    // hex (#rgb o #rrggbb) → rgba
    let h = hex.replace('#','');
    if(h.length===3) h = h.split('').map(c=>c+c).join('');
    const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function nodeAt(x,y){
    for(let i=nodes.length-1;i>=0;i--){
      const n=nodes[i]; if(Math.hypot(x-n.x,y-n.y) <= n.r+4) return n;
    }
    return null;
  }

  /* ---------- Interacción ---------- */
  canvas.addEventListener('mousemove', e=>{
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    mouse.active = true;
    const n = nodeAt(mouse.x, mouse.y);
    hoverNode = n;
    canvas.style.cursor = n ? 'pointer' : 'default';
    if(n && tooltip){
      tooltip.style.display='block';
      tooltip.style.left = Math.min(mouse.x+14, W-180) + 'px';
      tooltip.style.top = Math.max(mouse.y-40, 8) + 'px';
      tooltip.innerHTML = `<b>${n.cert.name}</b><span>${n.cert.issuer.replace(/\s*\(.*\)/,'')} · ${n.cert.date} · ${n.cert.cat}</span>`;
    } else if(tooltip){ tooltip.style.display='none'; }
  });
  canvas.addEventListener('mouseleave', ()=>{ mouse.active=false; hoverNode=null; if(tooltip) tooltip.style.display='none'; });
  canvas.addEventListener('click', e=>{
    const r = canvas.getBoundingClientRect();
    const n = nodeAt(e.clientX-r.left, e.clientY-r.top);
    if(n){ pinnedNode = (pinnedNode===n)? null : n; if(reduce) draw(); }
  });

  // re-render al cambiar de tema (los colores se leen de CSS vars)
  window.addEventListener('themechange', ()=>{ draw(); });

  let rT;
  window.addEventListener('resize', ()=>{ clearTimeout(rT); rT=setTimeout(resize, 200); });

  /* ---------- Init ---------- */
  resize();
  if(reduce){ draw(); }
  else { loop(); }
})();
