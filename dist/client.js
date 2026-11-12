window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Do=Object.create;var U=Object.defineProperty;var Ao=Object.getOwnPropertyDescriptor;var Io=Object.getOwnPropertyNames;var Fo=Object.getPrototypeOf,Oo=Object.prototype.hasOwnProperty;var Zo=(t,i)=>{for(var n in i)U(t,n,{get:i[n],enumerable:!0})},vo=(t,i,n,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Io(i))!Oo.call(t,s)&&s!==n&&U(t,s,{get:()=>i[s],enumerable:!(p=Ao(i,s))||p.enumerable});return t};var mo=(t,i,n)=>(n=t!=null?Do(Fo(t)):{},vo(i||!t||!t.__esModule?U(n,"default",{value:t,enumerable:!0}):n,t)),Ho=t=>vo(U({},"__esModule",{value:!0}),t);var Yo={};Zo(Yo,{apply:()=>Wo,inject:()=>Go});module.exports=Ho(Yo);var f=mo(require("react"),1);var go=`.podwave-root {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: #0c0c0f;
  color: #ececef;
  font-size: 14px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  --bg: #0c0c0f;
  --sidebar: #09090c;
  --elev: #131318;
  --hover: #17171d;
  --line: #212129;
  --line-soft: #1a1a21;
  --text: #ececef;
  --muted: #8f8f9a;
  --dim: #63636d;
  --accent: #e6a54a;
  --accent-soft: rgba(230, 165, 74, 0.12);
  --danger: #e57c7c;
  --radius: 8px;
  --player-h: 92px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

.podwave-root * { box-sizing: border-box; }

.podwave-root button { font-family: inherit; }

.podwave-root button:focus-visible,
.podwave-root input:focus-visible,
.podwave-root select:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.podwave-root .shell {
  display: grid;
  grid-template-columns: 248px minmax(0, 1fr);
  height: 100%;
  min-height: 0;
  padding-bottom: var(--player-h);
}

/* ---------- sidebar ---------- */

.podwave-root .sidebar {
  background: var(--sidebar);
  border-right: 1px solid var(--line);
  padding: 20px 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;
  top: auto;
  height: 100%;
  min-height: 0;
  overflow-y: auto;
}

.podwave-root .brand {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 4px 8px;
}

.podwave-root .brand-mark {
  color: var(--accent);
  display: inline-flex;
  align-items: center;
}

.podwave-root .brand-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.podwave-root .brand-version {
  font-size: 10px;
  color: var(--dim);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0 4px;
  line-height: 15px;
}

.podwave-root .nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.podwave-root .nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--muted);
  font-size: 13.5px;
  cursor: pointer;
  text-align: left;
}

.podwave-root .nav-item:hover { background: var(--hover); color: var(--text); }

.podwave-root .nav-item.active {
  background: var(--accent-soft);
  color: var(--text);
  box-shadow: inset 2px 0 0 var(--accent);
}

.podwave-root .nav-count {
  font-size: 11px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

.podwave-root .side-section {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.podwave-root .side-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 11.5px;
  letter-spacing: 0.4px;
  color: var(--dim);
}

.podwave-root .side-empty {
  margin: 2px 8px;
  font-size: 12.5px;
  color: var(--dim);
  line-height: 1.7;
}

.podwave-root .folder-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}

.podwave-root .folder-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px;
  border-radius: 7px;
  color: var(--muted);
  font-size: 12.5px;
}

.podwave-root .folder-list li:hover { background: var(--hover); color: var(--text); }

.podwave-root .folder-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .folder-remove {
  border: 0;
  background: transparent;
  color: var(--dim);
  font-size: 15px;
  cursor: pointer;
  padding: 0 2px;
  opacity: 0;
}

.podwave-root .folder-list li:hover .folder-remove { opacity: 1; }
.podwave-root .folder-remove:hover { color: var(--danger); }

.podwave-root .side-foot {
  border-top: 1px solid var(--line-soft);
  padding: 14px 8px 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 11.5px;
  color: var(--dim);
}

.podwave-root .side-foot strong {
  color: var(--muted);
  font-weight: 500;
}

/* ---------- main ---------- */

.podwave-root .main {
  padding: 30px 34px 46px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
}

.podwave-root .topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
}

.podwave-root .topbar h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.podwave-root .subline {
  margin: 6px 0 0;
  font-size: 12.5px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

.podwave-root .tools {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.podwave-root .search {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--elev);
  color: var(--dim);
}

.podwave-root .search:focus-within { border-color: rgba(230, 165, 74, 0.45); }

.podwave-root .search input {
  width: 190px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font-size: 13px;
}

.podwave-root .search input::placeholder { color: var(--dim); }

.podwave-root .sort {
  height: 34px;
  padding: 0 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--elev);
  color: var(--muted);
  font-size: 12.5px;
  cursor: pointer;
}

.podwave-root .banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius);
  font-size: 13px;
  margin-bottom: 18px;
  cursor: pointer;
}

.podwave-root .banner.error {
  color: #f0aaaa;
  background: rgba(229, 124, 124, 0.08);
  border: 1px solid rgba(229, 124, 124, 0.25);
}

.podwave-root .banner-dismiss { color: var(--dim); font-size: 12px; }

/* ---------- continue ---------- */

.podwave-root .continue { margin-bottom: 26px; }

.podwave-root .continue h2 {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: var(--dim);
}

.podwave-root .continue-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.podwave-root .continue-card {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-align: left;
  min-width: 0;
}

.podwave-root .continue-card:hover { background: var(--hover); border-color: var(--line); }
.podwave-root .continue-card.is-current { border-color: rgba(230, 165, 74, 0.35); }

.podwave-root .continue-text { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 4px; }

.podwave-root .continue-title {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .continue-meta {
  font-size: 11.5px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .continue-text .mini-track { margin-top: 3px; }

/* ---------- list ---------- */

.podwave-root .list-section { border-top: 1px solid var(--line-soft); }

.podwave-root .list-head,
.podwave-root .row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 96px 120px;
  gap: 12px;
  align-items: center;
}

.podwave-root .list-head {
  height: 38px;
  padding: 0 8px;
  font-size: 11px;
  color: var(--dim);
  letter-spacing: 0.4px;
  border-bottom: 1px solid var(--line-soft);
}

.podwave-root .col-index { text-align: right; }
.podwave-root .col-duration { text-align: right; }
.podwave-root .col-progress { text-align: right; }

.podwave-root .episode-list { display: flex; flex-direction: column; }

.podwave-root .row {
  width: 100%;
  min-height: 62px;
  padding: 8px;
  border: 0;
  border-bottom: 1px solid var(--line-soft);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-align: left;
  border-radius: 0;
}

.podwave-root .row:hover { background: var(--hover); }

.podwave-root .row.is-current { background: rgba(230, 165, 74, 0.055); }
.podwave-root .row.is-current .row-title { color: var(--accent); }

.podwave-root .row-index {
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
  text-align: right;
  padding-right: 2px;
}

.podwave-root .row-main {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.podwave-root .row-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.podwave-root .row-title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .row-meta {
  font-size: 11.5px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .row-duration {
  font-size: 12px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.podwave-root .row-progress { display: flex; justify-content: flex-end; align-items: center; }

.podwave-root .mini-track {
  display: block;
  width: 100%;
  max-width: 100px;
  height: 3px;
  border-radius: 3px;
  background: #26262e;
  overflow: hidden;
}

.podwave-root .mini-track > span,
.podwave-root .mini-track > div {
  display: block;
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
}

.podwave-root .finished-mark {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  color: var(--dim);
}

.podwave-root .playing-bars {
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  height: 12px;
  justify-content: center;
}

.podwave-root .playing-bars i {
  display: block;
  width: 2.5px;
  height: 4px;
  background: var(--accent);
  border-radius: 1px;
  animation: bars 1s ease-in-out infinite;
}

.podwave-root .playing-bars i:nth-child(2) { animation-delay: 0.25s; }
.podwave-root .playing-bars i:nth-child(3) { animation-delay: 0.5s; }

@keyframes bars {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}

/* ---------- cover ---------- */

.podwave-root .cover {
  border-radius: 7px;
  object-fit: cover;
  flex-shrink: 0;
  background: #1c1c23;
  display: block;
}

.podwave-root .cover-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 15px;
  font-weight: 600;
  user-select: none;
}

/* ---------- empty ---------- */

.podwave-root .empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 72px 20px;
  color: var(--muted);
  font-size: 14px;
}

.podwave-root .empty p { margin: 0; }
.podwave-root .empty-hint { color: var(--dim); font-size: 12.5px; max-width: 380px; text-align: center; }
.podwave-root .empty .btn { margin-top: 10px; }

/* ---------- player ---------- */

.podwave-root .player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--player-h);
  background: #0b0b0e;
  border-top: 1px solid var(--line);
  padding: 0 22px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 20;
}

.podwave-root .seek-wrap { position: relative; height: 16px; display: flex; align-items: center; }

.podwave-root .seek-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 3px;
  margin-top: -1.5px;
  background: #26262e;
  border-radius: 3px;
  overflow: hidden;
  pointer-events: none;
}

.podwave-root .seek-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
}

.podwave-root .seek {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 14px;
  margin: 0;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
}

.podwave-root .seek::-webkit-slider-runnable-track { height: 3px; background: transparent; }
.podwave-root .seek::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: -4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  border: 0;
  opacity: 0;
  transition: opacity 0.12s ease;
}

.podwave-root .player:hover .seek::-webkit-slider-thumb { opacity: 1; }

.podwave-root .seek::-moz-range-track { height: 3px; background: transparent; }
.podwave-root .seek::-moz-range-thumb {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  border: 0;
  opacity: 0;
}

.podwave-root .player:hover .seek::-moz-range-thumb { opacity: 1; }

.podwave-root .player-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  height: 58px;
}

.podwave-root .now {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.podwave-root .now-text { min-width: 0; }

.podwave-root .now-title {
  font-size: 13.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .now-artist {
  font-size: 11.5px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .now-empty { color: var(--dim); font-size: 12.5px; }

.podwave-root .transport {
  display: flex;
  align-items: center;
  gap: 10px;
}

.podwave-root .icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
}

.podwave-root .icon-btn:hover { background: var(--hover); color: var(--text); }

.podwave-root .skip-btn {
  height: 30px;
  min-width: 40px;
  padding: 0 8px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--muted);
  font-size: 11.5px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}

.podwave-root .skip-btn:hover { background: var(--hover); color: var(--text); }

.podwave-root .play-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background: var(--accent);
  color: #191204;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.podwave-root .play-btn:hover { transform: scale(1.04); }
.podwave-root .play-btn:active { transform: scale(0.97); }
.podwave-root .play-btn:disabled { opacity: 0.4; cursor: default; transform: none; }

.podwave-root .player-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  min-width: 0;
}

.podwave-root .time {
  font-size: 11.5px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.podwave-root .rate-btn {
  height: 26px;
  padding: 0 7px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 11.5px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}

.podwave-root .rate-btn:hover { color: var(--text); border-color: #33333d; }

.podwave-root .volume {
  width: 72px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* ---------- dialog / toast ---------- */

.podwave-root .overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 4, 6, 0.66);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
  padding: 20px;
}

.podwave-root .dialog {
  width: 430px;
  max-width: 100%;
  background: #121216;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.podwave-root .dialog h2 { margin: 0; font-size: 16px; font-weight: 600; }

.podwave-root .dialog-hint {
  margin: 0;
  font-size: 12.5px;
  color: var(--dim);
  line-height: 1.6;
}

.podwave-root .dialog input {
  height: 38px;
  padding: 0 11px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #0d0d11;
  color: var(--text);
  font-size: 13px;
  outline: 0;
}

.podwave-root .dialog input:focus { border-color: rgba(230, 165, 74, 0.5); }
.podwave-root .dialog input::placeholder { color: var(--dim); }

.podwave-root .dialog-error { color: var(--danger); font-size: 12.5px; }

.podwave-root .dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 4px;
}

.podwave-root .btn {
  height: 34px;
  padding: 0 16px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  font-size: 13px;
  cursor: pointer;
}

.podwave-root .btn.primary { background: var(--accent); color: #191204; border-color: var(--accent); }
.podwave-root .btn.primary:hover { filter: brightness(1.05); }
.podwave-root .btn.primary:disabled { opacity: 0.45; cursor: default; }

.podwave-root .btn.ghost { background: transparent; border-color: var(--line); color: var(--muted); }
.podwave-root .btn.ghost:hover { color: var(--text); border-color: #33333d; }

.podwave-root .toast {
  position: absolute;
  left: 50%;
  bottom: calc(var(--player-h) + 14px);
  transform: translateX(-50%);
  background: #1a1a21;
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 12.5px;
  padding: 9px 14px;
  border-radius: 8px;
  z-index: 30;
}

/* ---------- scrollbars / responsive ---------- */

.podwave-root ::-webkit-scrollbar { width: 10px; height: 10px; }
.podwave-root ::-webkit-scrollbar-thumb { background: #26262e; border-radius: 6px; border: 2px solid var(--bg); }
.podwave-root ::-webkit-scrollbar-thumb:hover { background: #33333d; }
.podwave-root ::-webkit-scrollbar-track { background: transparent; }

@media (max-width: 980px) {
  .podwave-root .continue-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .podwave-root .shell { grid-template-columns: 210px minmax(0, 1fr); }
  .podwave-root .main { padding: 24px 22px 40px; }
}

@media (max-width: 760px) {
  .podwave-root .shell { grid-template-columns: 1fr; }
  .podwave-root .sidebar { display: none; }
  .podwave-root .tools .search input { width: 120px; }
  .podwave-root .list-head, .podwave-root .row { grid-template-columns: 28px minmax(0, 1fr) 76px 0; }
  .podwave-root .row-progress, .podwave-root .list-head .col-progress { display: none; }
  .podwave-root .player-body { grid-template-columns: minmax(0, 1fr) auto; }
  .podwave-root .player-right { display: none; }
}
`;var o=mo(require("react"),1),b="/podwave/api",R=[.75,1,1.25,1.5,1.75,2];async function fo(t){let i=await fetch(t);if(!i.ok){let n=await i.json().catch(()=>({}));throw new Error(n.error||i.statusText)}return i.json()}async function V(t,i,n){let p=await fetch(t,{method:i,headers:n?{"Content-Type":"application/json"}:void 0,body:n?JSON.stringify(n):void 0});if(!p.ok){let s=await p.json().catch(()=>({}));throw new Error(s.error||p.statusText)}return p.json()}function xo(t){if(!Number.isFinite(t)||t<0)return"0:00";let i=Math.floor(t),n=Math.floor(i/3600),p=Math.floor(i%3600/60),s=i%60;return n>0?`${n}:${String(p).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${p}:${String(s).padStart(2,"0")}`}function Vo(t){if(!t)return"\u2014";let i=Math.floor(t/3600),n=Math.round(t%3600/60);return i>0?`${i} \u5C0F\u65F6 ${n} \u5206`:`${Math.max(1,n)} \u5206\u949F`}function Bo(t){if(!t)return"";let i=new Date(t),n=Date.now()-t;return n<60*1e3?"\u521A\u521A":n<3600*1e3?`${Math.floor(n/6e4)} \u5206\u949F\u524D`:n<1440*60*1e3?`${Math.floor(n/36e5)} \u5C0F\u65F6\u524D`:n<10080*60*1e3?`${Math.floor(n/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Ko(t){let i=String(t||"").trim();return i?i.charAt(0).toUpperCase():"\xB7"}function Jo(t){let i=String(t).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}function oo({item:t,size:i=44,className:n=""}){let p={width:i,height:i};return t&&t.hasCover?o.default.createElement("img",{className:`cover ${n}`,style:p,src:`${b}/episodes/${t.id}/cover`,alt:"",loading:"lazy",draggable:!1}):o.default.createElement("div",{className:`cover cover-fallback ${n}`,style:p,"aria-hidden":!0},Ko(t&&t.title))}function w({name:t,size:i=18}){let n={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(t){case"play":return o.default.createElement("svg",{...n,fill:"currentColor",stroke:"none"},o.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return o.default.createElement("svg",{...n,fill:"currentColor",stroke:"none"},o.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),o.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return o.default.createElement("svg",{...n,fill:"currentColor",stroke:"none"},o.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),o.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return o.default.createElement("svg",{...n,fill:"currentColor",stroke:"none"},o.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),o.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return o.default.createElement("svg",{...n},o.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return o.default.createElement("svg",{...n},o.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),o.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return o.default.createElement("svg",{...n},o.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return o.default.createElement("svg",{...n},o.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),o.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return o.default.createElement("svg",{...n},o.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),o.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"check":return o.default.createElement("svg",{...n},o.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return o.default.createElement("svg",{...n,fill:"currentColor",stroke:"none"},o.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),o.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),o.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),o.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),o.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));default:return null}}function qo({onSubmit:t,onClose:i}){let[n,p]=(0,o.useState)(""),[s,j]=(0,o.useState)(!1),[M,O]=(0,o.useState)(""),x=(0,o.useRef)(null);return(0,o.useEffect)(()=>{x.current?.focus();let u=L=>{L.key==="Escape"&&i()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[i]),o.default.createElement("div",{className:"overlay",onMouseDown:u=>{u.target===u.currentTarget&&i()}},o.default.createElement("form",{className:"dialog",onSubmit:async u=>{if(u.preventDefault(),!(!n.trim()||s)){j(!0),O("");try{await t(n.trim()),i()}catch(L){O(L.message),j(!1)}}}},o.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),o.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u3001\u4E0A\u4F20\u6216\u4FEE\u6539\u5B83\u4EEC\u3002"),o.default.createElement("input",{ref:x,value:n,onChange:u=>p(u.target.value),placeholder:"~/Music/\u64AD\u5BA2 \u6216 /Users/\u4F60/Downloads/\u8282\u76EE",spellCheck:!1}),M?o.default.createElement("div",{className:"dialog-error"},M):null,o.default.createElement("div",{className:"dialog-actions"},o.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),o.default.createElement("button",{type:"submit",className:"btn primary",disabled:s||!n.trim()},s?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0"))))}function eo(){let[t,i]=(0,o.useState)([]),[n,p]=(0,o.useState)([]),[s,j]=(0,o.useState)({}),[M,O]=(0,o.useState)({running:!1}),[x,B]=(0,o.useState)({rate:1,volume:.9,lastEpisodeId:null}),[u,L]=(0,o.useState)(""),[Z,ho]=(0,o.useState)("recent"),[N,wo]=(0,o.useState)("all"),[v,ro]=(0,o.useState)(null),[to,K]=(0,o.useState)(!1),[J,T]=(0,o.useState)(0),[z,q]=(0,o.useState)(0),[no,ao]=(0,o.useState)(!0),[bo,X]=(0,o.useState)(!1),[io,Q]=(0,o.useState)(""),[so,lo]=(0,o.useState)(""),m=(0,o.useRef)(null),l=(0,o.useRef)(null),y=(0,o.useRef)(0),$=(0,o.useRef)(x),P=(0,o.useRef)(0),po=(0,o.useRef)(0),co=(0,o.useRef)(0),yo=(0,o.useRef)(!1);(0,o.useEffect)(()=>{$.current=x},[x]),(0,o.useEffect)(()=>{l.current=v},[v]),(0,o.useEffect)(()=>{y.current=z},[z]);let W=(0,o.useCallback)(e=>{lo(e),window.clearTimeout(co.current),co.current=window.setTimeout(()=>lo(""),2600)},[]),S=(0,o.useCallback)(async()=>{let e=await fo(`${b}/episodes`);return i(e.items||[]),p(e.folders||[]),j(e.progress||{}),O(e.scan||{running:!1}),e},[]);(0,o.useEffect)(()=>{let e=!1;return(async()=>{try{let r=await fo(`${b}/state`);if(e)return;B(r.settings),p(r.folders||[]);let a=await S();if(e)return;let d=r.settings?.lastEpisodeId,c=d?(a.items||[]).find(h=>h.id===d):null;if(c){ro(c),q(c.duration||0);let h=a.progress?.[c.id]?.position||0;P.current=h>5?h:0,T(P.current);let F=m.current;F&&(F.src=`${b}/episodes/${c.id}/audio`,F.load(),F.playbackRate=r.settings?.rate||1,F.volume=r.settings?.volume??.9)}ao(!1),yo.current=!0}catch(r){e||(Q(r.message),ao(!1))}})(),()=>{e=!0}},[S]),(0,o.useEffect)(()=>{if(!M.running)return;let e=setInterval(()=>{S().catch(()=>{})},1500);return()=>clearInterval(e)},[M.running,S]);let C=(0,o.useCallback)((e,r,a,d=!1)=>{if(!e)return;let c=Date.now();!d&&c-po.current<4e3||(po.current=c,V(`${b}/progress/${e}`,"PUT",{position:r,duration:a}).catch(()=>{}),j(h=>({...h,[e]:{position:r,duration:a,updatedAt:c}})))},[]),k=(0,o.useCallback)(e=>{B(r=>({...r,...e})),V(`${b}/settings`,"PATCH",e).catch(()=>{})},[]),g=(0,o.useMemo)(()=>{let e=[...t];return Z==="title"?e.sort((r,a)=>r.title.localeCompare(a.title,"zh-Hans-CN")):Z==="duration"?e.sort((r,a)=>(a.duration||0)-(r.duration||0)):e.sort((r,a)=>a.mtime-r.mtime),e},[t,Z]),E=(0,o.useMemo)(()=>{let e=u.trim().toLowerCase();return g.filter(r=>{if(e&&!`${r.title} ${r.artist} ${r.album}`.toLowerCase().includes(e))return!1;let d=s[r.id]?.position||0,c=r.duration||0,h=c?d/c:0;return N==="inprogress"?d>5&&h<.97:N==="finished"?h>=.97:!0})},[g,u,N,s]),G=(0,o.useMemo)(()=>t.filter(e=>{let r=s[e.id];return!r||!r.position||r.position<5?!1:e.duration?r.position/e.duration<.97:!0}).sort((e,r)=>(s[r.id]?.updatedAt||0)-(s[e.id]?.updatedAt||0)).slice(0,4),[t,s]),ko=(0,o.useMemo)(()=>t.reduce((e,r)=>e+(r.duration||0),0),[t]),No=Math.round(ko/3600*10)/10,zo=N==="inprogress"?"\u7EE7\u7EED\u6536\u542C":N==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",$o=no?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":M.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${E.length} \u96C6 \xB7 \u5171 ${No} \u5C0F\u65F6 \xB7 ${n.length} \u4E2A\u6587\u4EF6\u5939`,_o=(0,o.useMemo)(()=>v?g.findIndex(e=>e.id===v.id):-1,[g,v]),D=(0,o.useCallback)(()=>{let e=m.current;if(e){if(!l.current){let r=E[0]||g[0];r&&A(r,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[E,g]),A=(0,o.useCallback)((e,r=!0)=>{let a=m.current;if(!a||!e)return;if(l.current&&l.current.id===e.id){r&&D();return}l.current&&!a.ended&&a.currentTime>1&&C(l.current.id,a.currentTime,a.duration||y.current,!0),l.current=e,ro(e),q(e.duration||0);let d=s[e.id]?.position||0,c=d>5&&(!e.duration||d<e.duration-10)?d:0;P.current=c,T(c),a.src=`${b}/episodes/${e.id}/audio`,a.load(),a.playbackRate=$.current.rate||1,a.volume=$.current.volume??.9,r&&a.play().catch(()=>{}),k({lastEpisodeId:e.id})},[s,C,k,D]),Co=(0,o.useCallback)(e=>{let r=m.current;if(!r||!l.current)return;let a=Math.max(0,Math.min(e,r.duration||e));r.currentTime=a,T(a),C(l.current.id,a,r.duration||y.current,!0)},[C]),I=(0,o.useCallback)(e=>{let r=m.current;if(!r||!l.current)return;let a=Math.max(0,Math.min((r.currentTime||0)+e,(r.duration||y.current||0)-1));r.currentTime=a,T(a)},[]),Y=(0,o.useCallback)(e=>{if(!g.length)return;let a=((l.current?g.findIndex(d=>d.id===l.current.id):-1)+e+g.length)%g.length;A(g[a],!0)},[g,A]),Mo=(0,o.useCallback)(()=>{let e=R.indexOf($.current.rate),r=R[(e+1)%R.length],a=m.current;a&&(a.playbackRate=r),k({rate:r})},[k]),H=(0,o.useCallback)(e=>{let r=Math.max(0,Math.min(1,e)),a=m.current;a&&(a.volume=r),k({volume:r})},[k]),To=(0,o.useCallback)(()=>{let e=m.current,r=$.current.volume>0?0:.9;e&&(e.volume=r),k({volume:r})},[k]),So=()=>{let e=m.current;!e||!l.current||(T(e.currentTime),C(l.current.id,e.currentTime,e.duration||y.current))},Eo=()=>{let e=m.current,r=l.current;if(!e||!r)return;let a=Number.isFinite(e.duration)?e.duration:r.duration||0;q(a);let d=P.current;P.current=0,d>0&&d<a-1&&(e.currentTime=d,T(d))},jo=()=>{let e=m.current;l.current&&C(l.current.id,e?.duration||y.current||0,e?.duration||y.current||0,!0),Y(1)},Lo=async e=>{await V(`${b}/folders`,"POST",{path:e}),await S(),W("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Po=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await V(`${b}/folders`,"DELETE",{path:e}),await S(),W("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(r){Q(r.message)}};(0,o.useEffect)(()=>{let e=r=>{let a=r.target?.tagName;a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||r.metaKey||r.ctrlKey||r.altKey||(r.code==="Space"?(r.preventDefault(),D()):r.key==="ArrowRight"?(r.preventDefault(),I(15)):r.key==="ArrowLeft"?(r.preventDefault(),I(-15)):r.key==="ArrowUp"?(r.preventDefault(),H($.current.volume+.05)):r.key==="ArrowDown"?(r.preventDefault(),H($.current.volume-.05)):r.key==="/"&&(r.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[D,I,H]);let _=e=>{let r=s[e.id];return!r||!e.duration?!1:r.position/e.duration>=.97},uo=e=>{let r=s[e.id];return!r||!e.duration?0:Math.min(100,Math.max(0,r.position/e.duration*100))};return o.default.createElement("div",{className:"shell"},o.default.createElement("aside",{className:"sidebar"},o.default.createElement("div",{className:"brand"},o.default.createElement("span",{className:"brand-mark"},o.default.createElement(w,{name:"wave",size:20})),o.default.createElement("span",{className:"brand-name"},"Podwave"),o.default.createElement("span",{className:"brand-version"},"0.1")),o.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",t.length],["inprogress","\u7EE7\u7EED\u6536\u542C",G.length],["finished","\u5DF2\u64AD\u5B8C",t.filter(_).length]].map(([e,r,a])=>o.default.createElement("button",{key:e,className:`nav-item ${N===e?"active":""}`,onClick:()=>wo(e)},o.default.createElement("span",null,r),o.default.createElement("span",{className:"nav-count"},a||"")))),o.default.createElement("div",{className:"side-section"},o.default.createElement("div",{className:"side-head"},o.default.createElement("span",null,"\u6587\u4EF6\u5939"),o.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>X(!0)},o.default.createElement(w,{name:"plus",size:16}))),n.length===0?o.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",o.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):o.default.createElement("ul",{className:"folder-list"},n.map(e=>o.default.createElement("li",{key:e,title:e},o.default.createElement(w,{name:"folder",size:16}),o.default.createElement("span",{className:"folder-name"},Jo(e)),o.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Po(e)},"\xD7"))))),o.default.createElement("div",{className:"side-foot"},o.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),o.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),o.default.createElement("main",{className:"main"},o.default.createElement("header",{className:"topbar"},o.default.createElement("div",null,o.default.createElement("h1",null,zo),o.default.createElement("p",{className:"subline"},$o)),o.default.createElement("div",{className:"tools"},o.default.createElement("label",{className:"search"},o.default.createElement(w,{name:"search",size:16}),o.default.createElement("input",{value:u,onChange:e=>L(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),o.default.createElement("select",{className:"sort",value:Z,onChange:e=>ho(e.target.value)},o.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),o.default.createElement("option",{value:"title"},"\u6807\u9898"),o.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),io?o.default.createElement("div",{className:"banner error",onClick:()=>Q("")},io," ",o.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,N==="all"&&!u&&G.length>0?o.default.createElement("section",{className:"continue"},o.default.createElement("h2",null,"\u63A5\u7740\u542C"),o.default.createElement("div",{className:"continue-row"},G.map(e=>{let r=uo(e);return o.default.createElement("button",{key:e.id,className:`continue-card ${v?.id===e.id?"is-current":""}`,onClick:()=>A(e,!0)},o.default.createElement(oo,{item:e,size:64}),o.default.createElement("div",{className:"continue-text"},o.default.createElement("div",{className:"continue-title"},e.title),o.default.createElement("div",{className:"continue-meta"},e.artist),o.default.createElement("div",{className:"mini-track"},o.default.createElement("div",{style:{width:`${r}%`}}))))}))):null,o.default.createElement("section",{className:"list-section"},o.default.createElement("div",{className:"list-head"},o.default.createElement("span",{className:"col-index"},"#"),o.default.createElement("span",null,"\u5355\u96C6"),o.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),o.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),no?o.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):E.length===0?o.default.createElement("div",{className:"empty"},o.default.createElement("p",null,t.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),o.default.createElement("p",{className:"empty-hint"},t.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),t.length===0?o.default.createElement("button",{className:"btn primary",onClick:()=>X(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):o.default.createElement("div",{className:"episode-list"},E.map((e,r)=>{let a=uo(e),d=v?.id===e.id;return o.default.createElement("button",{key:e.id,className:`row ${d?"is-current":""} ${_(e)?"is-finished":""}`,onClick:()=>A(e,!0)},o.default.createElement("span",{className:"col-index row-index"},d&&to?o.default.createElement("span",{className:"playing-bars"},o.default.createElement("i",null),o.default.createElement("i",null),o.default.createElement("i",null)):r+1),o.default.createElement("span",{className:"row-main"},o.default.createElement(oo,{item:e,size:40}),o.default.createElement("span",{className:"row-text"},o.default.createElement("span",{className:"row-title"},e.title),o.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Bo(e.mtime)))),o.default.createElement("span",{className:"col-duration row-duration"},Vo(e.duration)),o.default.createElement("span",{className:"col-progress row-progress"},_(e)?o.default.createElement("span",{className:"finished-mark"},o.default.createElement(w,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):a>0?o.default.createElement("span",{className:"mini-track"},o.default.createElement("span",{style:{width:`${a}%`}})):null))})))),o.default.createElement("footer",{className:"player"},o.default.createElement("div",{className:"seek-wrap"},o.default.createElement("div",{className:"seek-track"},o.default.createElement("div",{className:"seek-fill",style:{width:`${z?Math.min(100,Math.max(0,J/z*100)):0}%`}})),o.default.createElement("input",{className:"seek",type:"range",min:0,max:z||0,step:.05,value:Math.min(J,z||0),onChange:e=>Co(Number(e.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),o.default.createElement("div",{className:"player-body"},o.default.createElement("div",{className:"now"},v?o.default.createElement(o.default.Fragment,null,o.default.createElement(oo,{item:v,size:48}),o.default.createElement("div",{className:"now-text"},o.default.createElement("div",{className:"now-title",title:v.title},v.title),o.default.createElement("div",{className:"now-artist"},v.artist))):o.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),o.default.createElement("div",{className:"transport"},o.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Y(-1)},o.default.createElement(w,{name:"prev"})),o.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>I(-15)},"\u221215"),o.default.createElement("button",{className:"play-btn",onClick:D,disabled:!v&&E.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},o.default.createElement(w,{name:to?"pause":"play",size:20})),o.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>I(15)},"+15"),o.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Y(1)},o.default.createElement(w,{name:"next"}))),o.default.createElement("div",{className:"player-right"},o.default.createElement("span",{className:"time"},xo(J)," / ",xo(z)),o.default.createElement("button",{className:"rate-btn",onClick:Mo,title:"\u64AD\u653E\u901F\u5EA6"},x.rate,"\xD7"),o.default.createElement("button",{className:"icon-btn",onClick:To,title:"\u9759\u97F3"},o.default.createElement(w,{name:x.volume>0?"volume":"mute"})),o.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:x.volume,onChange:e=>H(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),bo?o.default.createElement(qo,{onClose:()=>X(!1),onSubmit:Lo}):null,so?o.default.createElement("div",{className:"toast"},so):null,o.default.createElement("audio",{ref:m,preload:"metadata",onPlay:()=>K(!0),onPause:()=>{K(!1);let e=m.current;l.current&&e&&e.currentTime>0&&!e.ended&&C(l.current.id,e.currentTime,e.duration||y.current,!0)},onTimeUpdate:So,onLoadedMetadata:Eo,onEnded:jo,onError:()=>{K(!1),W("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}function Xo({size:t=16}){return f.default.createElement("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},f.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),f.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),f.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),f.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),f.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Qo(){return f.default.createElement("div",{className:"podwave-root"},f.default.createElement("style",null,go),f.default.createElement(eo,null))}function Wo(t){t.slots.inject("main",()=>t.slots.register({name:"main",key:"podwave"},Qo)),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Xo))}var Go=["slots"];

return module.exports}})
