/* ============================================================================
 *  Constelación neuronal de certificaciones
 *
 *  Cada institución es una "neurona": un soma (núcleo) rodeado de anillos de
 *  dendritas (sus certificaciones). Las neuronas se repelen entre sí para
 *  quedar separadas y bien distribuidas; las dendritas orbitan su soma con
 *  física suave. Al respirar, el conjunto deriva lo que he aprendido.
 *
 *  Colores: la paleta se lee del tema activo (cálido/apagado en Papel,
 *  vibrante en Aurora) → los círculos se adaptan al cambiar de tema.
 *
 *  Interacciones:
 *    - Hover dendrita → tooltip (nombre · institución · fecha · categoría)
 *    - Hover neuron  → resalta su cluster, atenúa los demás
 *    - Click dendrita → la "fija"
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

  let W=0, H=0, dpr=Math.min(window.devicePixelRatio||1, 2);
  let neurons=[], nodes=[];
  let mouse={x:-9999,y:-9999};
  let hoverNode=null, focusNeuron=null;
  let raf=null;

  /* ---------- Paleta según tema ----------
   * Cada institución mantiene un HUE fijo (identidad), pero la saturación/
   * luminosidad dependen del tema: Papel = tonos muted cálidos; Aurora =
   * vibrantes. Así los círculos siempre "se adaptan" al tema. */
  const HUES = {
    "Platzi":                                       265,
    "Servicio Nacional de Aprendizaje (SENA)":      120,
    "Amazon Web Services (AWS)":                     32,
    "Huawei":                                         0,
    "Cisco Networking Academy":                     197,
    "Coursera":                                     217,
    "NASA - National Aeronautics and Space Administration": 224,
    "Universidad Distrital Francisco José de Caldas": 277,
    "Bancolombia":                                   49,
    "Bancoldex":                                     20,
    "bvc-Bolsa de Valores de Colombia S.A.":        217,
    "Superintendencia Financiera de Colombia":      150,
    "Cámara de Comercio de Casanare":                41,
    "CertiProf":                                    168,
    "LinkedIn":                                     210,
    "CodeAI":                                       338
  };
  function hueFor(issuer){ return HUES[issuer] != null ? HUES[issuer] : (issuer.length * 37) % 360; }

  function palette(){
    const dark = document.documentElement.getAttribute('data-theme') === 'aurora';
    return dark
      ? { sat:80, light:62, alpha:1.0, halo:0.35, link:0.30, dim:0.18, somaLight:70 }
      : { sat:48, light:42, alpha:0.92, halo:0.22, link:0.30, dim:0.16, somaLight:32 };
  }
  function color(hue, p, lightOverride, alphaOverride){
    const l = lightOverride != null ? lightOverride : p.light;
    const a = alphaOverride != null ? alphaOverride : p.alpha;
    return `hsla(${hue},${p.sat}%,${l}%,${a})`;
  }

  /* ---------- Build ---------- */
  function build(){
    neurons=[]; nodes=[];
    const groups={};
    CERTS.forEach(c=>{
      if(!groups[c.issuer]) groups[c.issuer]={ issuer:c.issuer, certs:[] };
      groups[c.issuer].certs.push(c);
    });
    const arr = Object.values(groups).sort((a,b)=> b.certs.length - a.certs.length);

    const cx=W/2, cy=H/2;
    const R = Math.min(W,H) * 0.34;
    arr.forEach((g,i)=>{
      const n = g.certs.length;
      const ang = (i/arr.length)*Math.PI*2 - Math.PI/2;
      // soma más grande cuantas más dendritas
      const somaR = 7 + Math.min(14, n*1.1);
      neurons.push({
        id:g.issuer, label:(ISSUERS[g.issuer]||{short:g.issuer}).short,
        hue:hueFor(g.issuer), count:n,
        x: cx + Math.cos(ang)*R,
        y: cy + Math.sin(ang)*R,
        baseAng: ang, somaR
      });
      // dendritas en anillos concéntricos
      g.certs.forEach((c,j)=>{
        const ring = Math.floor(j/6);                 // anillo 0,1,2...
        const idxInRing = j - ring*6;
        const perRing = Math.min(6, n - ring*6);
        const ringAng = (idxInRing/(perRing||1))*Math.PI*2;
        const ringR = somaR + 16 + ring*16;
        nodes.push({
          cert:c, neuron:g.issuer, hue:hueFor(g.issuer),
          x: cx + Math.cos(ang)*R + Math.cos(ringAng)*ringR,
          y: cy + Math.sin(ang)*R + Math.sin(ringAng)*ringR,
          homeR: ringR, homeAng: ringAng,
          vx:0, vy:0, r: 3.4 + (ring===0?1.4:0),
          phase: Math.random()*Math.PI*2
        });
      });
    });
    // separación inicial entre somas (repulsión en reposo)
    for(let it=0; it<60; it++){
      for(let a=0;a<neurons.length;a++){
        for(let b=a+1;b<neurons.length;b++){
          const A=neurons[a],B=neurons[b];
          let dx=A.x-B.x, dy=A.y-B.y; let d=Math.hypot(dx,dy)||1;
          const minD = A.somaR+B.somaR+70;
          if(d<minD){ const f=(minD-d)*0.5; A.x+=dx/d*f; A.y+=dy/d*f; B.x-=dx/d*f; B.y-=dy/d*f; }
        }
      }
    }
    // reasignar home relativo al soma
    nodes.forEach(n=>{
      const nr = neurons.find(m=>m.id===n.neuron);
      n.dx = n.x - nr.x; n.dy = n.y - nr.y;
    });
  }

  /* ---------- Resize ---------- */
  function resize(){
    const rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W*dpr; canvas.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    build();
  }

  /* ---------- Física ---------- */
  function step(){
    const t = performance.now()*0.0002;
    const cx=W/2, cy=H/2;
    const R = Math.min(W,H)*0.34;

    // somas derivan a su órbita ideal + repulsión mutua (neuronas separadas)
    for(let a=0;a<neurons.length;a++){
      const A=neurons[a];
      const ang = A.baseAng + Math.sin(t + a*0.7)*0.12;
      const tx = cx+Math.cos(ang)*R, ty = cy+Math.sin(ang)*R;
      A.x += (tx-A.x)*0.02; A.y += (ty-A.y)*0.02;
      for(let b=a+1;b<neurons.length;b++){
        const B=neurons[b];
        let dx=A.x-B.x, dy=A.y-B.y; const d=Math.hypot(dx,dy)||1;
        const minD = A.somaR+B.somaR+64;
        if(d<minD){ const f=(minD-d)*0.018; A.vx=(A.vx||0)+dx/d*f; A.vy=(A.vy||0)+dy/d*f;
                   B.vx=(B.vx||0)-dx/d*f; B.vy=(B.vy||0)-dy/d*f; }
      }
    }
    neurons.forEach(A=>{
      if(A.vx){ A.x+=A.vx; A.y+=A.vy; A.vx*=0.85; A.vy*=0.85; }
    });

    // dendritas orbitan su soma
    const byId = {}; neurons.forEach(m=> byId[m.id]=m);
    for(const n of nodes){
      const soma = byId[n.neuron];
      // posición home relativa al soma + deriva orbital
      n.phase += 0.006;
      const hx = soma.x + n.dx, hy = soma.y + n.dy;
      const dx = hx - n.x, dy = hy - n.y;
      n.vx += dx*0.02 + Math.cos(n.phase)*0.02;
      n.vy += dy*0.02 + Math.sin(n.phase)*0.02;
      // repulsión dendrita-dendrita
      for(let k=0;k<nodes.length;k++){
        const m=nodes[k]; if(m===n) continue;
        const rx=n.x-m.x, ry=n.y-m.y, rd=rx*rx+ry*ry;
        if(rd<340){ const d=Math.sqrt(rd)||1, f=(340-rd)/340*0.06;
          n.vx+=rx/d*f; n.vy+=ry/d*f; }
      }
      n.vx*=0.82; n.vy*=0.82; n.x+=n.vx; n.y+=n.vy;
    }
  }

  /* ---------- Render ---------- */
  function draw(){
    const p = palette();
    ctx.clearRect(0,0,W,H);

    // 1. axones (líneas dendrita→soma)
    ctx.lineWidth = 0.8;
    for(const n of nodes){
      const soma = neurons.find(m=>m.id===n.neuron);
      const dim = focusNeuron && n.neuron!==focusNeuron;
      ctx.globalAlpha = dim ? p.dim*0.7 : p.link;
      ctx.strokeStyle = color(n.hue, p, p.light+10);
      ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(soma.x,soma.y); ctx.stroke();
    }

    // 2. somas (neuronas)
    neurons.forEach(s=>{
      const focus = focusNeuron===s.id;
      const dim = focusNeuron && !focus;
      ctx.globalAlpha = dim ? p.dim : 1;
      // halo
      const haloR = s.somaR + s.count*2 + 8;
      const g = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,haloR);
      g.addColorStop(0, color(s.hue, p, p.light+6, focus? p.halo*1.6 : p.halo));
      g.addColorStop(1, color(s.hue, p, p.light, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(s.x,s.y,haloR,0,Math.PI*2); ctx.fill();
      // núcleo
      ctx.fillStyle = color(s.hue, p, p.somaLight);
      ctx.beginPath(); ctx.arc(s.x,s.y,s.somaR,0,Math.PI*2); ctx.fill();
      // anillo dendrítico decorativo
      ctx.strokeStyle = color(s.hue, p, p.light+14, focus?0.6:0.3);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.somaR+4,0,Math.PI*2); ctx.stroke();
      // etiqueta
      ctx.globalAlpha = dim ? p.dim : 1;
      ctx.font = '600 11px "Red Hat Mono", ui-monospace, monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--tinta').trim() || '#241f1b';
      ctx.textAlign = 'center';
      ctx.fillText(s.label, s.x, s.y - s.somaR - 8);
      ctx.font = '500 10px "Red Hat Mono", monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--apoyo').trim() || '#8e8070';
      ctx.fillText(s.count+' cert.', s.x, s.y + s.somaR + 16);
    });

    // 3. dendritas (certificaciones) — más grandes
    for(const n of nodes){
      const hover = n===hoverNode;
      const focus = focusNeuron===n.neuron;
      const dim = focusNeuron && !focus;
      ctx.globalAlpha = dim ? p.dim : 1;
      // halo pequeño al hover
      if(hover){
        const hg = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r+10);
        hg.addColorStop(0, color(n.hue, p, p.light+12, 0.5));
        hg.addColorStop(1, color(n.hue, p, p.light, 0));
        ctx.fillStyle = hg;
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r+10,0,Math.PI*2); ctx.fill();
      }
      ctx.fillStyle = color(n.hue, p, p.light+6);
      ctx.beginPath();
      ctx.arc(n.x,n.y, hover ? n.r+2 : n.r, 0, Math.PI*2);
      ctx.fill();
      if(hover){
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--tinta').trim() || '#241f1b';
        ctx.lineWidth = 1.4; ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  /* ---------- Loop ---------- */
  function loop(){ step(); draw(); if(!reduce) raf=requestAnimationFrame(loop); }

  /* ---------- Hit testing ---------- */
  function nodeAt(x,y){
    for(let i=nodes.length-1;i>=0;i--){
      const n=nodes[i];
      if(Math.hypot(x-n.x,y-n.y) <= n.r+5) return n;
    }
    return null;
  }
  function somaAt(x,y){
    for(const s of neurons){ if(Math.hypot(x-s.x,y-s.y) <= s.somaR+6) return s; }
    return null;
  }

  /* ---------- Interacción ---------- */
  canvas.addEventListener('mousemove', e=>{
    const r=canvas.getBoundingClientRect();
    mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top;
    const n=nodeAt(mouse.x,mouse.y);
    hoverNode=n;
    if(n){ focusNeuron=n.neuron; canvas.style.cursor='pointer';
      if(tooltip){ tooltip.style.display='block';
        tooltip.style.left=Math.min(mouse.x+14,W-200)+'px';
        tooltip.style.top=Math.max(mouse.y-44,8)+'px';
        const short = (ISSUERS[n.cert.issuer]||{short:n.cert.issuer}).short;
        tooltip.innerHTML=`<b>${n.cert.name}</b><span>${short} · ${n.cert.date} · ${n.cert.cat}</span>`; }
    } else {
      const s=somaAt(mouse.x,mouse.y);
      focusNeuron = s ? s.id : null;
      canvas.style.cursor = s ? 'pointer' : 'default';
      if(tooltip) tooltip.style.display='none';
    }
    if(reduce) draw();
  });
  canvas.addEventListener('mouseleave', ()=>{
    hoverNode=null; focusNeuron=null; mouse.x=-9999;
    if(tooltip) tooltip.style.display='none';
    if(reduce) draw();
  });
  canvas.addEventListener('click', e=>{
    const r=canvas.getBoundingClientRect();
    if(nodeAt(e.clientX-r.left,e.clientY-r.top)) { if(reduce) draw(); }
  });

  /* La leyenda la genera app.js (paleta dinámica por tema) */

  window.addEventListener('themechange', ()=>{ draw(); });
  let rT; window.addEventListener('resize', ()=>{ clearTimeout(rT); rT=setTimeout(resize,200); });

  /* ---------- Init ---------- */
  function init(){
    resize();
    if(reduce) draw(); else loop();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
