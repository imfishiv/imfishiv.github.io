const STREAM_URL = "https://listen2.centreforceradio.com:8830/192";
const VOL_KEY = "implod_volume";
const MASK_SRC = "data:image/png;base64,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";

/* ---- tunables ---- */
const ROT       = 0;     // resting tilt (deg)
const FAN_SPEED = 0.5;   // RGB flow speed (deg/frame)
const FAKE_BPM  = 125;   // tempo it bounces at when audio can't be read
let SENS        = 0.80;  // beat sensitivity (lower = more beats)
let MIN_GAP     = 200;   // ms min between detected beats
/* scale spring — KICK_S = stretch intensity, lower DAMP_S = bouncier */
let STIFF_S     = 140;   // scale spring stiffness
let DAMP_S      = 9.0;   // scale spring damping
let KICK_S      = 22;    // scale impulse per beat
let VIZ_maxH    = 126;   // max bar height (px)
let VIZ_Ri      = 73;    // inner radius — where bars start

const sub=document.getElementById("sub"), vis=document.getElementById("vis"), hint=document.getElementById("hint");
const subwrap=document.getElementById("subwrap"), glowB=document.getElementById("glowB"), glowC=document.getElementById("glowC");
// Circular RGB visualizer canvas — sits behind the submarine
const vizCv=document.createElement('canvas');
const _dpr=window.devicePixelRatio||1;
vizCv.width=420*_dpr; vizCv.height=420*_dpr;
vizCv.style.cssText='position:absolute;top:50%;left:50%;width:420px;height:420px;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity 0.6s;';
const vizCtx=vizCv.getContext('2d');
vizCtx.scale(_dpr,_dpr);

// Inner scale wrapper: subwrap handles rotation (center origin), subscale handles scale (bottom-center origin)
const subscale=document.createElement('div');
subscale.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:50% 100%;will-change:transform;';
while(subwrap.firstChild)subscale.appendChild(subwrap.firstChild);

// Stack: viz canvas (behind) → subscale with submarine (front)
subwrap.appendChild(vizCv);
subwrap.appendChild(subscale);

// Remove old RGB glow outline
glowB.style.display='none'; glowC.style.display='none';
const volEl=document.getElementById("vol"), volOut=document.getElementById("volOut");
const statusEl=document.getElementById("status"), statusText=document.getElementById("statusText");
const note=document.getElementById("note");
glowB.style.setProperty("--m",`url("${MASK_SRC}")`);
glowC.style.setProperty("--m",`url("${MASK_SRC}")`);

let audio, audioCtx, analyser, freq, sourceNode;
let wired=false, usingCors=true, visualizerLive=false, triedFallback=false;
let playing=false, rafId=null;
let timerStart=null, timerAccum=0;
const reduceMotion=matchMedia("(prefers-reduced-motion:reduce)").matches;

/* volume (persisted) */
function loadVolume(){let v=parseFloat(localStorage.getItem(VOL_KEY));if(!isFinite(v))v=0.25;return Math.min(1,Math.max(0,v));}
function applyVolume(v){if(audio)audio.volume=v;volEl.value=Math.round(v*100);volOut.textContent=Math.round(v*100);}
let volume=loadVolume();
volEl.addEventListener("input",()=>{volume=volEl.value/100;applyVolume(volume);try{localStorage.setItem(VOL_KEY,volume.toString());}catch(_){}});

/* audio */
function makeAudio(withCors){
  const a=new Audio();a.preload="none";if(withCors)a.crossOrigin="anonymous";
  a.src=STREAM_URL;a.volume=volume;
  a.addEventListener("playing",()=>setStatus(true));
  a.addEventListener("waiting",()=>setStatus("wait"));
  a.addEventListener("error",onAudioError);
  return a;
}
audio=makeAudio(true);applyVolume(volume);
function setStatus(s){statusEl.dataset.on=s===true?"true":s==="wait"?"wait":"false";
  statusText.textContent=s===true?"on air":s==="wait"?"buffering":"off air";}
function onAudioError(){
  if(usingCors&&!triedFallback){
    triedFallback=true;usingCors=false;visualizerLive=false;
    try{audio.pause();}catch(_){}
    // Reuse the same element rather than creating a new one. iOS Safari only
    // allows .play() without a gesture on an element already activated by one;
    // a brand-new element would be blocked.
    audio.crossOrigin=null;
    audio.src=STREAM_URL;
    setNote('<b>No CORS headers</b> — can\'t read the audio, so it bounces on a fixed tempo. Playback still works.');
    if(playing)audio.play().catch(()=>{});
    return;
  }
  setNote('<b>Stream error</b> — the URL may be down or not a direct stream.',true);
  playing=false;vis.setAttribute("aria-label","Play");hint.dataset.hide="false";setStatus(false);
}
function setNote(html,isErr){note.innerHTML=html||"";note.classList.toggle("err",!!isErr);}

function ensureGraph(){
  if(!usingCors)return;
  if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state==="suspended")audioCtx.resume();
  if(!wired){
    try{
      sourceNode=audioCtx.createMediaElementSource(audio);
      analyser=audioCtx.createAnalyser();analyser.fftSize=1024;analyser.smoothingTimeConstant=0.55;
      freq=new Uint8Array(analyser.frequencyBinCount);
      prevFreq=new Uint8Array(analyser.frequencyBinCount);
      sourceNode.connect(analyser);analyser.connect(audioCtx.destination);
      wired=true;visualizerLive=true;
    }catch(e){visualizerLive=false;}
  }
}
function formatTimer(ms){
  const s=Math.floor(ms/1000), h=Math.floor(s/3600), m=Math.floor((s%3600)/60), ss=s%60;
  return h>0?`${h}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`:`${m}:${String(ss).padStart(2,'0')}`;
}
function toggle(){
  if(!playing){
    ensureGraph();
    audio.play().then(()=>{
      playing=true;vis.setAttribute("aria-label","Pause");hint.dataset.hide="true";
      if(usingCors&&!note.textContent)setNote("");startLoop();
      timerStart=Date.now();
      const t=document.getElementById('listenTimer');if(t)t.style.visibility='visible';
    }).catch(()=>onAudioError());
  }else{
    audio.pause();playing=false;vis.setAttribute("aria-label","Play");hint.dataset.hide="false";setStatus(false);
    if(timerStart!==null){timerAccum+=Date.now()-timerStart;timerStart=null;}
  }
}
vis.addEventListener("click",toggle);
document.addEventListener("keydown",e=>{if(e.code==="Space"&&e.target.tagName!=="INPUT"){e.preventDefault();toggle();}});

/* ---- animation: spring-driven bounce, kicked on the beat ---- */
let ang=0, sy_pos=0, sy_vel=0, lastT=performance.now();
let beatInterval=60000/FAKE_BPM, nextFake=performance.now()+beatInterval, lastBeat=-9999, energyAvg=0, fluxAvg=0;
let dbgBassStart=1, dbgBassEnd=5, dbgBeatTime=0;
let prevFreq=null, dbgFlux=0, dbgFluxAvg=0;
const clamp=(v,a,b)=>v<a?a:v>b?b:v;

function draw(){
  const now=performance.now();
  const dt=clamp((now-lastT)/1000, 0, 0.04); lastT=now;

  // Beat detection: bass-focused bins (roughly 60–550 Hz)
  let impulse=0, lvl=0.9;
  if(visualizerLive&&playing&&analyser){
    analyser.getByteFrequencyData(freq);
    const _bc=Math.max(1,dbgBassEnd-dbgBassStart+1);
    let e=0, flux=0;
    for(let i=dbgBassStart;i<=dbgBassEnd;i++){
      e+=freq[i];
      const d=freq[i]-prevFreq[i]; if(d>0) flux+=d;  // spectral flux: onset energy only
    }
    e/=_bc; flux/=_bc;
    prevFreq.set(freq);
    energyAvg=energyAvg*0.92+e*0.08;
    fluxAvg=fluxAvg*0.90+flux*0.10;
    dbgFlux=flux; dbgFluxAvg=fluxAvg;
    lvl=0.7+(flux/50)*0.8;
    let beat=(flux>fluxAvg*SENS && flux>5 && now-lastBeat>MIN_GAP);
    if(beat){
      const iv=now-lastBeat; if(iv>240&&iv<1000)beatInterval=iv;
      lastBeat=now; dbgBeatTime=now; impulse=KICK_S*lvl; nextFake=now+beatInterval;
    }
  }

  // Advance color angle
  if(!reduceMotion) ang=(ang+FAN_SPEED)%360;

  // Radial RGB visualizer — mirrored symmetric bars, additive glow, breathing idle
  {
    const W=420,H=420,CX=210,CY=210;
    vizCtx.clearRect(0,0,W,H);
    const N=36, Ri=VIZ_Ri, maxH=VIZ_maxH;
    const nowMs=performance.now();

    if(freq&&analyser&&playing&&!reduceMotion){
      const bins=analyser.frequencyBinCount;
      const half=N/2;
      const usedBins=Math.floor(bins*0.5); // use lower half of spectrum

      // Bars — additive compositing for natural glow, no per-bar shadowBlur
      vizCtx.globalCompositeOperation='lighter';
      vizCtx.lineCap='round';
      vizCtx.lineWidth=3;

      for(let i=0;i<N;i++){
        // Mirror: bars 0..half map bins low→high, bars half..N mirror back high→low
        const freqI = i<=half ? i : N-i;
        const binI  = Math.min(usedBins-1, Math.floor(freqI*usedBins/half));
        const v     = freq[binI]/255;
        if(v<0.018) continue;

        const theta = (i/N)*Math.PI*2 - Math.PI/2;
        const hue   = (i/N*360 + ang*1.5)%360;
        const r2    = Ri + maxH*v;

        vizCtx.globalAlpha   = 0.38+v*0.62;
        vizCtx.strokeStyle   = `hsl(${hue},100%,${52+v*28}%)`;
        vizCtx.beginPath();
        vizCtx.moveTo(CX+Ri*Math.cos(theta), CY+Ri*Math.sin(theta));
        vizCtx.lineTo(CX+r2*Math.cos(theta), CY+r2*Math.sin(theta));
        vizCtx.stroke();
      }

    } else {
      // Breathing idle: gentle sine ripple, keeps page alive
      const breath = 0.5+0.5*Math.sin(nowMs*0.0012);
      vizCtx.globalCompositeOperation='lighter';
      vizCtx.lineCap='round';
      vizCtx.lineWidth=3;
      for(let i=0;i<36;i++){
        const theta = (i/36)*Math.PI*2 - Math.PI/2;
        const v     = breath*(0.18+0.14*Math.sin(i/36*Math.PI*4+nowMs*0.0008));
        const hue   = (i/36*360 + ang*1.5)%360;
        vizCtx.globalAlpha = 0.07+v*0.13;
        vizCtx.strokeStyle = `hsl(${hue},100%,65%)`;
        vizCtx.beginPath();
        vizCtx.moveTo(CX+Ri*Math.cos(theta),       CY+Ri*Math.sin(theta));
        vizCtx.lineTo(CX+(Ri+24*v)*Math.cos(theta),CY+(Ri+24*v)*Math.sin(theta));
        vizCtx.stroke();
      }
    }

    vizCtx.globalCompositeOperation='source-over';
    vizCtx.globalAlpha=1;
  }

  // Timer
  if(timerStart!==null){
    const el=document.getElementById('listenTimer');
    if(el) el.textContent=formatTimer(timerAccum+(Date.now()-timerStart));
  }

  // Scale spring: beat kicks sub TALLER + THINNER, spring returns it with slight squash
  if(!reduceMotion){
    if(impulse>0) sy_vel += impulse;
    const acc = -STIFF_S*sy_pos - DAMP_S*sy_vel;
    sy_vel += acc*dt;
    sy_pos += sy_vel*dt;
  }
  // Subtle beat pulse on the visualizer canvas
  const sp = clamp(sy_pos, -0.1, 1.4);
  const cScale = 1 + Math.max(0, sp) * 0.14;
  vizCv.style.transform=`translate(-50%,-50%) scale(${cScale.toFixed(3)})`;
  subwrap.style.transform=`rotate(${ROT}deg)`;
}

/* loop, gated on tab visibility */
function frame(){if(document.hidden){rafId=null;return;}draw();rafId=requestAnimationFrame(frame);}
function startLoop(){if(rafId==null&&!document.hidden){lastT=performance.now();nextFake=performance.now()+beatInterval;rafId=requestAnimationFrame(frame);}}
function stopLoop(){if(rafId!=null){cancelAnimationFrame(rafId);rafId=null;}}
document.addEventListener("visibilitychange",()=>{document.hidden?stopLoop():startLoop();});

// Listen timer — sits between implod.ing and the on-air status
document.querySelector('.dom').insertAdjacentHTML('afterend',
  '<span id="listenTimer" style="visibility:hidden;font:11px/1 monospace;letter-spacing:.18em;color:var(--txt-dim,#666);text-transform:uppercase;text-align:center;">0:00</span>');

// Mute + Resync buttons
document.querySelector('.vol').insertAdjacentHTML('afterend',
`<div style="display:flex;gap:10px;justify-content:center;margin:6px 0 2px;">
  <button id="muteBtn" style="background:#111;color:#888;border:1px solid #333;padding:3px 18px;border-radius:5px;cursor:pointer;letter-spacing:.12em;font:11px/1.8 monospace;text-transform:uppercase;">mute</button>
  <button id="resyncBtn" style="background:#111;color:#888;border:1px solid #333;padding:3px 18px;border-radius:5px;cursor:pointer;letter-spacing:.12em;font:11px/1.8 monospace;text-transform:uppercase;">resync</button>
</div>`);
document.getElementById('muteBtn').onclick=()=>{
  audio.muted=!audio.muted;
  const b=document.getElementById('muteBtn');
  b.textContent=audio.muted?'unmute':'mute';
  b.style.color=audio.muted?'var(--amber,#f90)':'#888';
};
document.getElementById('resyncBtn').onclick=()=>{
  if(!playing)return;
  // Cache-bust URL forces a fresh connection to the live stream
  audio.src=STREAM_URL+'?_r='+Date.now();
  audio.play().catch(()=>{});
};

startLoop();

/* ===== DEBUG PANEL ===== */
{
  document.body.insertAdjacentHTML('beforeend',`
<div id="_dbg" style="position:fixed;bottom:24px;left:0;right:0;z-index:9999;font:11px/1.5 monospace;opacity:0;pointer-events:none;display:flex;flex-direction:column;align-items:center;">
  <div id="_dbgPanel" style="display:none;margin-bottom:10px;background:#0b0b0b;border:1px solid #2a2a2a;border-radius:10px;padding:14px;width:340px;box-shadow:0 4px 24px #000a;">
    <div style="color:#555;font-size:10px;margin-bottom:6px;letter-spacing:.1em;">SPECTRUM — blue = bass bins, red line = beat threshold</div>
    <canvas id="_dbgCv" width="314" height="90" style="display:block;width:314px;height:90px;background:#060606;border-radius:5px;margin-bottom:8px;"></canvas>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <div style="flex:1;height:8px;border-radius:4px;background:#111;overflow:hidden;"><div id="_dbgFlash" style="height:100%;width:0%;border-radius:4px;background:#0f0;"></div></div>
      <span id="_dbgStats" style="color:#444;font-size:10px;min-width:140px;text-align:right;"></span>
    </div>
    <div id="_dbgSliders" style="display:grid;gap:7px;"></div>
  </div>
  <button id="_dbgBtn" title="debug" style="background:transparent;border:none;padding:0;cursor:pointer;display:block;opacity:0.4;transition:opacity 0.2s;" onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='0.4'"><img id="_dbgImg" style="height:52px;width:auto;display:block;filter:grayscale(1) brightness(2.8) contrast(0.85);"></button>
</div>`);

  let dbgOpen=false;
  document.getElementById('_dbgBtn').onclick=()=>{
    dbgOpen=!dbgOpen;
    const panel=document.getElementById('_dbgPanel');
    if(dbgOpen){
      panel.style.cssText='display:block;position:fixed;right:14px;bottom:14px;width:340px;background:#0b0b0b;border:1px solid #2a2a2a;border-radius:10px;padding:14px;box-shadow:0 4px 24px #000a;z-index:10000;';
    } else {
      panel.style.display='none';
      panel.style.position='';
    }
  };

  const SLIDERS=[
    ['SENS',      'Sensitivity',     0.8,  2.5,  0.01, ()=>SENS,       v=>SENS=v],
    ['MIN_GAP',   'Min gap (ms)',     50,   600,  10,   ()=>MIN_GAP,    v=>MIN_GAP=v],
    ['bassS',     'Bass bin start',   0,    30,   1,    ()=>dbgBassStart,v=>{dbgBassStart=v|0}],
    ['bassE',     'Bass bin end',     1,    60,   1,    ()=>dbgBassEnd,  v=>{dbgBassEnd=v|0}],
    ['smooth',    'FFT smoothing',    0,    0.95, 0.05, ()=>analyser?analyser.smoothingTimeConstant:0.55, v=>{if(analyser)analyser.smoothingTimeConstant=v}],
    ['maxH',      'Bar height',        40,   220,  2,    ()=>VIZ_maxH,   v=>VIZ_maxH=v],
    ['Ri',        'Inner radius',      20,   160,  1,    ()=>VIZ_Ri,     v=>VIZ_Ri=v],
    ['KICK_S',    'Kick strength',    1,    80,   1,    ()=>KICK_S,     v=>KICK_S=v],
    ['STIFF_S',   'Stiffness',        10,   400,  5,    ()=>STIFF_S,    v=>STIFF_S=v],
    ['DAMP_S',    'Damping',          1,    30,   0.5,  ()=>DAMP_S,     v=>DAMP_S=v],
  ];

  const grid=document.getElementById('_dbgSliders');
  const inputs={};
  for(const [id,label,min,max,step,get,set] of SLIDERS){
    const row=document.createElement('div');
    row.style.cssText='display:grid;grid-template-columns:110px 1fr 46px;align-items:center;gap:6px;';
    const lbl=document.createElement('span');lbl.style.color='#666';lbl.textContent=label;
    const inp=document.createElement('input');
    inp.type='range';inp.min=min;inp.max=max;inp.step=step;inp.value=get();
    inp.style.cssText='width:100%;accent-color:#4af;cursor:pointer;';
    const val=document.createElement('span');val.style.cssText='color:#ccc;text-align:right;font-size:11px;';
    val.textContent=Number(get()).toFixed(step<1?2:0);
    inp.oninput=()=>{ const v=parseFloat(inp.value); set(v); val.textContent=v.toFixed(step<1?2:0); };
    row.append(lbl,inp,val); grid.appendChild(row);
    inputs[id]={inp,val,get,step};
  }

  const cv=document.getElementById('_dbgCv');
  const cx=cv.getContext('2d');
  const flashEl=document.getElementById('_dbgFlash');
  const statsEl=document.getElementById('_dbgStats');

  function drawDbg(){
    requestAnimationFrame(drawDbg);
    if(!dbgOpen) return;
    const W=314,H=90;
    cx.clearRect(0,0,W,H);
    cx.fillStyle='#060606'; cx.fillRect(0,0,W,H);

    if(!freq||!analyser){
      cx.fillStyle='#444'; cx.font='11px monospace';
      cx.fillText('no analyser — press play first',8,48); return;
    }

    const bins=analyser.frequencyBinCount;
    const show=Math.min(bins,100);
    const bw=W/show;
    for(let i=0;i<show;i++){
      const v=freq[i]/255, h=v*H;
      const inRange=i>=dbgBassStart&&i<=dbgBassEnd;
      cx.fillStyle=inRange?`rgba(40,160,255,${0.4+v*0.6})`:`rgba(100,60,180,${0.25+v*0.5})`;
      cx.fillRect(i*bw, H-h, Math.max(1,bw-1), h);
    }

    // threshold line
    if(energyAvg>0){
      const thY=H-(energyAvg*SENS/255)*H;
      cx.strokeStyle='rgba(255,70,70,0.75)'; cx.lineWidth=1;
      cx.setLineDash([3,3]); cx.beginPath(); cx.moveTo(0,thY); cx.lineTo(W,thY); cx.stroke(); cx.setLineDash([]);
    }

    // current bass energy line
    const _bc=Math.max(1,dbgBassEnd-dbgBassStart+1);
    let e=0; for(let i=dbgBassStart;i<=dbgBassEnd;i++) e+=freq[i]; e/=_bc;
    const eY=H-(e/255)*H;
    cx.strokeStyle='rgba(255,200,0,0.85)'; cx.lineWidth=1;
    cx.beginPath(); cx.moveTo(0,eY); cx.lineTo(W,eY); cx.stroke();

    // beat flash bar
    const age=performance.now()-dbgBeatTime;
    const pct=Math.max(0,1-age/250);
    flashEl.style.width=(pct*100)+'%';
    flashEl.style.background=pct>0.6?'#0f0':pct>0.3?'#8f0':'#480';

    // stats
    const ratio=dbgFlux/(dbgFluxAvg*SENS+0.001);
    statsEl.textContent=`flux:${dbgFlux.toFixed(1)}  avg:${dbgFluxAvg.toFixed(1)}  ratio:${ratio.toFixed(2)}`;
  }
  drawDbg();
}

/* ===== INTRO SUBMARINE ===== */
(function(){
  const dbgDiv = document.getElementById('_dbg');

  // Grey submarine icon sitting in the centre of the visualiser
  const introSub = document.createElement('img');
  introSub.src = MASK_SRC;
  introSub.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:70px;width:auto;opacity:0.4;pointer-events:none;will-change:transform;z-index:10;';
  subwrap.appendChild(introSub);
  requestAnimationFrame(()=>{ vizCv.style.opacity='1'; });

  // Hook into the existing vis button click (which already calls toggle)
  vis.addEventListener('click', function onFirstPlay(){
    // Snapshot position before it moves, create a fixed floater for the animation
    const r = introSub.getBoundingClientRect();
    const floater = document.createElement('img');
    floater.src = MASK_SRC;
    floater.style.cssText = 'position:fixed;top:'+(r.top+r.height/2)+'px;left:'+(r.left+r.width/2)+'px;transform:translate(-50%,-50%);height:70px;width:auto;opacity:0.4;pointer-events:none;z-index:500;will-change:transform,top,left;';
    document.body.appendChild(floater);
    introSub.style.display = 'none';

    // Phase 1: Wait 0.33s, then compress
    setTimeout(() => {
      floater.style.transition = 'transform 0.4s cubic-bezier(0.36,0.07,0.19,0.97)';
      floater.style.transform  = 'translate(-50%,-50%) scaleX(0.38) scaleY(0.14) skewX(16deg) skewY(4deg)';
      setTimeout(() => {
        // Phase 2: Fall while holding crushed shape
        const dr = dbgDiv.getBoundingClientRect();
        floater.style.transition = 'top 1.1s cubic-bezier(0.4,0,0.9,1)';
        floater.style.top  = (dr.top  + dr.height/2) + 'px';
        floater.style.left = (dr.left + dr.width /2) + 'px';
        setTimeout(() => {
          // Phase 3: Fade out crushed, reveal debug button
          floater.style.transition = 'opacity 0.3s';
          floater.style.opacity    = '0';
          document.getElementById('_dbgImg').src = 'titan2.png';
          dbgDiv.style.transition   = 'opacity 0.4s';
          dbgDiv.style.opacity      = '1';
          dbgDiv.style.pointerEvents = 'auto';
          setTimeout(() => floater.remove(), 350);
        }, 1150);
      }, 420);
    }, 330);
  }, {once:true});
})();
