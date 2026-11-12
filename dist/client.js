window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Po=Object.create;var Te=Object.defineProperty;var Do=Object.getOwnPropertyDescriptor;var Eo=Object.getOwnPropertyNames;var Io=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty;var jo=(r,s)=>{for(var a in s)Te(r,a,{get:s[a],enumerable:!0})},ro=(r,s,a,d)=>{if(s&&typeof s=="object"||typeof s=="function")for(let p of Eo(s))!Ao.call(r,p)&&p!==a&&Te(r,p,{get:()=>s[p],enumerable:!(d=Do(s,p))||d.enumerable});return r};var Ue=(r,s,a)=>(a=r!=null?Po(Io(r)):{},ro(s||!r||!r.__esModule?Te(a,"default",{value:r,enumerable:!0}):a,r)),Oo=r=>ro(Te({},"__esModule",{value:!0}),r);var Wo={};jo(Wo,{apply:()=>Vo,inject:()=>Qo});module.exports=Oo(Wo);var H=Ue(require("react"),1);var Pe=`.podwave-root {
  position: relative;
  container-type: inline-size;
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


/* \u5B57\u5E55\u9762\u677F */
.podwave-root .subs-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #d8d8de;
  font-size: 12px;
  cursor: pointer;
}
.podwave-root .subs-btn:hover { background: #1f1f27; }
.podwave-root .subs-btn.active { border-color: #e6a54a; color: #e6a54a; }
.podwave-root .subs-btn:disabled { opacity: .45; cursor: default; }

.podwave-root .transcript-panel {
  position: absolute;
  right: 18px;
  bottom: 104px;
  width: min(560px, 52%);
  max-height: 58%;
  display: flex;
  flex-direction: column;
  background: #121217;
  border: 1px solid #2a2a32;
  border-radius: 12px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, .5);
  z-index: 30;
  overflow: hidden;
}
.podwave-root .transcript-head {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid #23232b;
}
.podwave-root .transcript-head h3 { margin: 0; font-size: 13px; font-weight: 600; color: #e8e8ee; }
.podwave-root .transcript-meta { color: #8b8b96; font-size: 12px; }
.podwave-root .transcript-actions { margin-left: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.podwave-root .mini-link {
  color: #c9c9d2;
  font-size: 12px;
  text-decoration: none;
  border: 1px solid #2b2b33;
  border-radius: 6px;
  padding: 3px 8px;
}
.podwave-root .mini-link:hover { border-color: #e6a54a; color: #e6a54a; }
.podwave-root .transcript-close { border: 0; background: none; color: #8b8b96; cursor: pointer; font-size: 16px; line-height: 1; padding: 2px 4px; }
.podwave-root .transcript-body { overflow-y: auto; padding: 6px 0; }
.podwave-root .seg-row {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 6px 12px;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
  font: inherit;
}
.podwave-root .seg-row:hover { background: #191920; }
.podwave-root .seg-row.active { background: #201c14; }
.podwave-root .seg-time { flex: none; width: 56px; color: #8b8b96; font-variant-numeric: tabular-nums; font-size: 12px; padding-top: 2px; }
.podwave-root .seg-text { font-size: 13px; line-height: 1.55; color: #dcdce3; }
.podwave-root .seg-row.active .seg-text { color: #f2e7d2; }
.podwave-root .transcript-status { padding: 16px; font-size: 13px; color: #9a9aa5; line-height: 1.6; }
.podwave-root .transcript-status .err { color: #e08a8a; white-space: pre-wrap; }


/* \u7FFB\u8BD1 */
.podwave-root .tr-select {
  height: 26px;
  border-radius: 6px;
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #c9c9d2;
  font-size: 12px;
  padding: 0 4px;
}
.podwave-root .seg-trans { display: block; margin-top: 2px; color: #8f9aa6; font-size: 12px; line-height: 1.5; }
.podwave-root .tr-running { padding: 8px 12px; color: #e6a54a; font-size: 12px; }
.podwave-root .tr-running.err { color: #e08a8a; white-space: pre-wrap; }
.podwave-root .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; font-size: 12px; color: #a8a8b2; }
.podwave-root .field select, .podwave-root .field input {
  height: 34px;
  border-radius: 8px;
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #e6e6ec;
  padding: 0 10px;
  font-size: 13px;
}

/* \u5355\u96C6\u8BE6\u60C5\uFF1A\u5C01\u9762 + \u5B57\u5E55\u5E76\u6392 */
.podwave-root .detail-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.podwave-root .back-link { border: 0; background: none; color: #9a9aa6; font-size: 13px; padding: 4px 0; cursor: pointer; }
.podwave-root .back-link:hover { color: #e8e8ee; }
.podwave-root .detail-count { color: #6f6f7a; font-size: 12px; }
.podwave-root .episode-view { display: flex; gap: 26px; align-items: flex-start; }
.podwave-root .episode-left { flex: 0 0 240px; width: 240px; display: flex; flex-direction: column; gap: 8px; }
.podwave-root .episode-cover { width: 100%; aspect-ratio: 1 / 1; border-radius: 14px; overflow: hidden; border: 1px solid #26262e; background: #17171d; }
.podwave-root .episode-cover .cover { width: 100% !important; height: 100% !important; object-fit: cover; border-radius: 0; }
.podwave-root .episode-title { margin: 8px 0 0; font-size: 19px; line-height: 1.35; color: #f2f2f5; }
.podwave-root .episode-sub { margin: 0; color: #b9b9c4; font-size: 13px; }
.podwave-root .episode-path { margin: 0; color: #6f6f7a; font-size: 11.5px; word-break: break-all; }
.podwave-root .episode-stats { margin: 0; color: #8a8a96; font-size: 12px; }
.podwave-root .episode-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
.podwave-root .episode-right { flex: 1; min-width: 0; }
.podwave-root .transcript-panel.inline { position: static; width: auto; max-height: none; height: min(560px, calc(100vh - 300px)); min-height: 340px; box-shadow: none; }
@media (max-width: 1024px) {
  .podwave-root .episode-view { flex-direction: column; align-items: stretch; }
  .podwave-root .episode-left { flex: auto; width: 100%; }
  .podwave-root .episode-cover { max-width: 240px; }
  .podwave-root .episode-right { width: 100%; flex: none; }
  .podwave-root .transcript-panel.inline { width: 100%; height: 420px; }
}

/* \u8BBE\u7F6E\u9875\uFF1A\u8DDF\u968F DSH \u8BBE\u7F6E\u9762\u677F\u7684\u914D\u8272\u4E0E\u6392\u7248\uFF0C\u4E0D\u8986\u76D6\u80CC\u666F */
.podwave-root .podwave-settings { height: auto; overflow: visible; padding: 4px 0 24px; color: inherit; font-size: 14px; }
.podwave-root .podwave-settings .settings-head h1 { margin: 0 0 4px; font-size: 15px; font-weight: 600; color: inherit; }
.podwave-root .podwave-settings .settings-head p { margin: 0; font-size: 13px; color: color-mix(in srgb, currentColor 58%, transparent); }
.podwave-root .podwave-settings .settings-message { margin-top: 10px; font-size: 13px; color: color-mix(in srgb, currentColor 75%, transparent); }
.podwave-root .podwave-settings .settings-card { margin-top: 0; padding: 18px 0 4px; border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent); }
.podwave-root .podwave-settings .settings-card:first-of-type { margin-top: 16px; }
.podwave-root .podwave-settings .settings-card h2 { margin: 0 0 4px; font-size: 14px; font-weight: 600; color: inherit; }
.podwave-root .podwave-settings .settings-hint { margin: 0 0 12px; font-size: 13px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .settings-empty { margin: 4px 0 0; font-size: 13px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-list { list-style: none; margin: 2px 0 0; padding: 0; }
.podwave-root .podwave-settings .history-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 9px 0; border-top: 1px solid color-mix(in srgb, currentColor 8%, transparent); }
.podwave-root .podwave-settings .history-row:first-child { border-top: 0; padding-top: 2px; }
.podwave-root .podwave-settings .history-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .history-title { font-size: 13.5px; color: inherit; }
.podwave-root .podwave-settings .history-meta { font-size: 12.5px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-date { font-size: 12.5px; white-space: nowrap; color: color-mix(in srgb, currentColor 45%, transparent); }
.podwave-root .podwave-settings .settings-fields { display: flex; flex-direction: column; gap: 10px; }
.podwave-root .podwave-settings .field-row { display: flex; align-items: center; gap: 12px; min-width: 0; }
.podwave-root .podwave-settings .field-row > span:first-child { flex: 0 0 118px; font-size: 13px; color: color-mix(in srgb, currentColor 75%, transparent); }
.podwave-root .podwave-settings .field-row select,
.podwave-root .podwave-settings .field-row input { min-width: 0; flex: 1 1 auto; max-width: 320px; height: 32px; padding: 0 10px; color: inherit; background: color-mix(in srgb, currentColor 6%, transparent); border: 1px solid color-mix(in srgb, currentColor 13%, transparent); border-radius: 8px; font-size: 13.5px; outline: none; }
.podwave-root .podwave-settings .field-row select:focus,
.podwave-root .podwave-settings .field-row input:focus { border-color: color-mix(in srgb, currentColor 34%, transparent); }
.podwave-root .podwave-settings .field-row select option { color: #f2f2f5; background: #2c2c2e; }
.podwave-root .podwave-settings .settings-status { flex: none; font-size: 12.5px; color: color-mix(in srgb, currentColor 50%, transparent); }
.podwave-root .podwave-settings .settings-actions { display: flex; align-items: center; gap: 12px; margin-top: 14px; }
.podwave-root .podwave-settings .settings-btn { height: 30px; padding: 0 14px; border: 0; border-radius: 8px; color: inherit; background: color-mix(in srgb, currentColor 11%, transparent); font-size: 13.5px; font-weight: 500; cursor: pointer; }
.podwave-root .podwave-settings .settings-btn:hover { background: color-mix(in srgb, currentColor 17%, transparent); }
.podwave-root .podwave-settings .settings-btn:disabled { opacity: 0.5; cursor: default; }
.podwave-root .podwave-settings .check-row { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: inherit; }
.podwave-root .podwave-settings .check-row input { width: 15px; height: 15px; accent-color: #7aa7ff; }

/* --- \u4FA7\u8FB9\u680F\u6536\u8D77 --- */
.podwave-root .shell {
  position: relative;
}
.podwave-root .shell.nav-collapsed {
  grid-template-columns: minmax(0, 1fr);
}
.podwave-root .shell.nav-collapsed .sidebar {
  display: none;
}
.podwave-root .brand-collapse {
  margin-left: auto;
}
.podwave-root .nav-reopen {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--elev);
  color: var(--muted);
  cursor: pointer;
}
.podwave-root .nav-reopen:hover {
  color: var(--text);
  background: var(--hover);
}

/* \u9762\u677F\u88AB\u6324\u7A84\u65F6\uFF08\u6BD4\u5982 DSH \u5206\u680F\u3001\u53F3\u4FA7\u8FB9\u680F\u6253\u5F00\uFF09\uFF0C
   \u81EA\u52A8\u9690\u85CF\u64AD\u5BA2\u81EA\u5DF1\u7684\u4FA7\u680F\uFF0C\u5E76\u8BA9\u8BE6\u60C5\u9875\u4E0A\u4E0B\u5806\u53E0\uFF0C\u907F\u514D\u88C1\u5207\u3002 */
@container (max-width: 820px) {
  .podwave-root .shell {
    grid-template-columns: minmax(0, 1fr);
  }
  .podwave-root .sidebar {
    display: none;
  }
  .podwave-root .main {
    min-width: 0;
  }
}
@container (max-width: 900px) {
  .podwave-root .episode-view {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
  .podwave-root .episode-left {
    flex: none;
    width: 100%;
    max-width: 360px;
  }
  .podwave-root .episode-right {
    flex: none;
    width: 100%;
  }
  .podwave-root .transcript-panel.inline {
    width: 100%;
    height: 420px;
    min-height: 0;
  }
}

/* --- \u6587\u4EF6\u5939\u9009\u62E9 / \u62D6\u62FD\u5BFC\u5165 --- */
.podwave-root .path-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.podwave-root .path-row input {
  flex: 1;
  min-width: 0;
}
.podwave-root .drop-hint {
  position: absolute;
  inset: 10px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--accent);
  border-radius: 14px;
  background: rgba(12, 12, 15, 0.86);
  color: var(--accent);
  font-size: 15px;
  pointer-events: none;
  text-align: center;
}
.podwave-root .drop-hint span:last-child {
  font-size: 12px;
  color: var(--muted);
}
`;var e=Ue(require("react"),1),m="/podwave/api",qe=[.75,1,1.25,1.5,1.75,2];async function Z(r){let s=await fetch(r);if(!s.ok){let a=await s.json().catch(()=>({}));throw new Error(a.error||s.statusText)}return s.json()}async function V(r,s,a){let d=await fetch(r,{method:s,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!d.ok){let p=await d.json().catch(()=>({}));throw new Error(p.error||d.statusText)}return d.json()}function Be(r){if(!Number.isFinite(r)||r<0)return"0:00";let s=Math.floor(r),a=Math.floor(s/3600),d=Math.floor(s%3600/60),p=s%60;return a>0?`${a}:${String(d).padStart(2,"0")}:${String(p).padStart(2,"0")}`:`${d}:${String(p).padStart(2,"0")}`}function no(r){if(!r)return"\u2014";let s=Math.floor(r/3600),a=Math.round(r%3600/60);return s>0?`${s} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function ao(r){if(!r)return"";let s=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${s.getMonth()+1} \u6708 ${s.getDate()} \u65E5`}function Ko(r){let s=String(r||"").trim();return s?s.charAt(0).toUpperCase():"\xB7"}function Fo(r){let s=String(r).split("/").filter(Boolean);return s.length<=2?`/${s.join("/")}`:`${s.slice(-2).join("/")}`}function De({item:r,size:s=44,className:a=""}){let d={width:s,height:s};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${a}`,style:d,src:`${m}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${a}`,style:d,"aria-hidden":!0},Ko(r&&r.title))}function j({name:r,size:s=18}){let a={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...a},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"check":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}function Uo({onSubmit:r,onPick:s,onClose:a}){let[d,p]=(0,e.useState)(""),[g,v]=(0,e.useState)(!1),[T,w]=(0,e.useState)(!1),[z,N]=(0,e.useState)(""),O=(0,e.useRef)(null);return(0,e.useEffect)(()=>{O.current?.focus();let u=F=>{F.key==="Escape"&&a()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:u=>{u.target===u.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async u=>{if(u.preventDefault(),!(!d.trim()||g)){v(!0),N("");try{await r(d.trim()),a()}catch(F){N(F.message),v(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!T){w(!0),N("");try{let u=await s();if(u?.canceled)return;if(u?.error)throw new Error(u.error);u?.path&&(await r(u.path),a())}catch(u){N(u.message)}finally{w(!1)}}},disabled:T,autoFocus:!0},T?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:O,value:d,onChange:u=>p(u.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!d.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),z?e.default.createElement("div",{className:"dialog-error"},z):null))}function so({transcript:r,status:s,elapsed:a,error:d,position:p,onSeek:g,onClose:v,onStart:T,target:w,job:z,onChangeTarget:N,onOpenSettings:O,inline:x=!1}){let L=(0,e.useRef)(null),u=r?.lines?.findIndex(k=>p>=k.start&&p<k.end)??-1;(0,e.useEffect)(()=>{if(u<0||!L.current)return;L.current.querySelector(`[data-seg="${u}"]`)?.scrollIntoView({block:"nearest"})},[u]);let F=s==="queued"||s==="running";return e.default.createElement("section",{className:`transcript-panel ${x?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:w,onChange:k=>N(k.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:O},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("a",{className:"mini-link",href:`${m}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${m}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,x?null:e.default.createElement("button",{className:"transcript-close",onClick:v,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:L},z?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,z?.status==="error"?e.default.createElement("div",{className:"tr-running err"},z.error):null,r?r.lines.map((k,U)=>e.default.createElement("button",{key:k.id,"data-seg":U,className:`seg-row ${U===u?"active":""}`,onClick:()=>g(k.start)},e.default.createElement("span",{className:"seg-time"},Be(k.start)),e.default.createElement("span",{className:"seg-text"},k.text,k.translations?.[w]?e.default.createElement("span",{className:"seg-trans"},k.translations[w]):null))):F?e.default.createElement("div",{className:"transcript-status"},"\u6B63\u5728\u8F6C\u5199\u2026 \u5DF2\u7528 ",Math.round((a||0)/1e3)," \u79D2",e.default.createElement("br",null),"\u957F\u64AD\u5BA2\u9700\u8981\u51E0\u5206\u949F\uFF0C\u5148\u653E\u7740\u542C\u4E5F\u884C\uFF0C\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"):d?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},d),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:T},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:T},"\u5F00\u59CB\u8F6C\u5199"))))}function qo({config:r,onClose:s,onSave:a}){let[d,p]=(0,e.useState)(r?.provider||"api"),[g,v]=(0,e.useState)(""),[T,w]=(0,e.useState)(!1),[z,N]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async x=>{x.preventDefault(),w(!0),N("");try{await a({provider:d,apiKey:g||void 0})}catch(L){N(L.message),w(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:d,onChange:x=>p(x.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),d==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:x=>v(x.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),z?e.default.createElement("div",{className:"dialog-error"},z):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:T},"\u4FDD\u5B58"))))}function He(){let[r,s]=(0,e.useState)([]),[a,d]=(0,e.useState)([]),[p,g]=(0,e.useState)({}),[v,T]=(0,e.useState)({running:!1}),[w,z]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[N,O]=(0,e.useState)(""),[x,L]=(0,e.useState)("recent"),[u,F]=(0,e.useState)("all"),[k,U]=(0,e.useState)(null),[h,re]=(0,e.useState)(null),[ne,ae]=(0,e.useState)(!1),[Q,J]=(0,e.useState)(0),[M,q]=(0,e.useState)(0),[de,pe]=(0,e.useState)(!0),[xe,P]=(0,e.useState)(!1),[ce,W]=(0,e.useState)(""),[be,ye]=(0,e.useState)(""),[I,X]=(0,e.useState)(null),[C,se]=(0,e.useState)("none"),[ue,i]=(0,e.useState)(0),[B,K]=(0,e.useState)(""),[ke,ve]=(0,e.useState)(!1),[io,Ve]=(0,e.useState)(null),[Ne,lo]=(0,e.useState)(""),[Ce,ge]=(0,e.useState)({status:"none"}),[po,$e]=(0,e.useState)(!1),[Qe,We]=(0,e.useState)(!1),[Xe,Ie]=(0,e.useState)(!1),D=(0,e.useRef)(null),f=(0,e.useRef)(null),Y=(0,e.useRef)(0),ee=(0,e.useRef)(w),fe=(0,e.useRef)(0),Ye=(0,e.useRef)(0),_e=(0,e.useRef)(0),co=(0,e.useRef)(!1);(0,e.useEffect)(()=>{ee.current=w},[w]),(0,e.useEffect)(()=>{f.current=h},[h]),(0,e.useEffect)(()=>{Y.current=M},[M]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await Z(`${m}/ui-settings`);!o&&t&&We(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Ge=(0,e.useCallback)(()=>{We(o=>{let t=!o;return fetch(`${m}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),E=(0,e.useCallback)(o=>{ye(o),window.clearTimeout(_e.current),_e.current=window.setTimeout(()=>ye(""),2600)},[]),_=(0,e.useCallback)(async()=>{let o=await Z(`${m}/episodes`);return s(o.items||[]),d(o.folders||[]),g(o.progress||{}),T(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await Z(`${m}/state`);if(o)return;z(t.settings),d(t.folders||[]);let l=await _();if(o)return;let c=t.settings?.lastEpisodeId,b=c?(l.items||[]).find(S=>S.id===c):null;if(b){re(b),q(b.duration||0);let S=l.progress?.[b.id]?.position||0;fe.current=S>5?S:0,J(fe.current);let R=D.current;R&&(R.src=`${m}/episodes/${b.id}/audio`,R.load(),R.playbackRate=t.settings?.rate||1,R.volume=t.settings?.volume??.9)}pe(!1),co.current=!0}catch(t){o||(W(t.message),pe(!1))}})(),()=>{o=!0}},[_]),(0,e.useEffect)(()=>{if(!v.running)return;let o=setInterval(()=>{_().catch(()=>{})},1500);return()=>clearInterval(o)},[v.running,_]),(0,e.useEffect)(()=>{let o=!1;return X(null),K(""),i(0),h?.id?((async()=>{try{let t=await Z(`${m}/episodes/${h.id}/transcript`);if(o)return;se(t.status),t.status==="done"&&t.transcript?X(t.transcript):t.status==="queued"||t.status==="running"?i(t.elapsedMs||0):t.status==="error"&&K(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||K(t.message)}})(),()=>{o=!0}):(se("none"),()=>{o=!0})},[h?.id]),(0,e.useEffect)(()=>{Z(`${m}/translate/settings`).then(Ve).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(C!=="queued"&&C!=="running")return;let o=!1,t=setInterval(async()=>{let l=f.current?.id;if(l)try{let c=await Z(`${m}/episodes/${l}/transcript`);if(o)return;se(c.status),i(c.elapsedMs||0),c.status==="done"&&c.transcript?(X(c.transcript),ve(!0),E("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&K(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[C,E]),(0,e.useEffect)(()=>{if(Ce.status!=="running")return;let o=!1,t=setInterval(async()=>{let l=f.current?.id;if(l)try{let c=await Z(`${m}/episodes/${l}/translate?target=${Ne}`);if(o)return;if(ge(c),c.status==="done"){let b=await Z(`${m}/episodes/${l}/transcript`);!o&&b.transcript&&X(b.transcript),E("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[Ce.status,Ne,E]);let oe=(0,e.useCallback)((o,t,l,c=!1)=>{if(!o)return;let b=Date.now();!c&&b-Ye.current<4e3||(Ye.current=b,V(`${m}/progress/${o}`,"PUT",{position:t,duration:l}).catch(()=>{}),g(S=>({...S,[o]:{position:t,duration:l,updatedAt:b}})))},[]),G=(0,e.useCallback)(o=>{z(t=>({...t,...o})),V(`${m}/settings`,"PATCH",o).catch(()=>{})},[]),me=(0,e.useCallback)(async()=>{if(f.current){K(""),ve(!0);try{let o=await V(`${m}/episodes/${f.current.id}/transcribe`,"POST",{});se(o.status||"queued")}catch(o){K(o.message)}}},[]),uo=(0,e.useCallback)(()=>{if(I){ve(o=>!o);return}if(C==="queued"||C==="running"){ve(!0);return}me()},[I,C,me]),ze=(0,e.useCallback)(async()=>{let o=f.current?.id;if(!o)return;let t=await Z(`${m}/episodes/${o}/transcript`);t.transcript&&X(t.transcript)},[]),Re=(0,e.useCallback)(async o=>{if(f.current?.id){ge({status:"running"});try{let t=await V(`${m}/episodes/${f.current.id}/translate`,"POST",{target:o});ge(t),t.status==="done"&&(await ze(),E("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){ge({status:"error",error:t.message})}}},[ze,E]),eo=(0,e.useCallback)(async o=>{if(lo(o),!o)return;if(I?.lines?.some(l=>l.translations?.[o])){ge({status:"done"}),await ze();return}await Re(o)},[I,Re,ze]),A=(0,e.useMemo)(()=>{let o=[...r];return x==="title"?o.sort((t,l)=>t.title.localeCompare(l.title,"zh-Hans-CN")):x==="duration"?o.sort((t,l)=>(l.duration||0)-(t.duration||0)):o.sort((t,l)=>l.mtime-t.mtime),o},[r,x]),ie=(0,e.useMemo)(()=>{let o=N.trim().toLowerCase();return A.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let c=p[t.id]?.position||0,b=t.duration||0,S=b?c/b:0;return u==="inprogress"?c>5&&S<.97:u==="finished"?S>=.97:!0})},[A,N,u,p]),Ae=(0,e.useMemo)(()=>r.filter(o=>{let t=p[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(p[t.id]?.updatedAt||0)-(p[o.id]?.updatedAt||0)).slice(0,4),[r,p]),vo=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),go=Math.round(vo/3600*10)/10,fo=u==="inprogress"?"\u7EE7\u7EED\u6536\u542C":u==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",$=k?r.find(o=>o.id===k)||(h?.id===k?h:null):null,mo=de?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":v.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${ie.length} \u96C6 \xB7 \u5171 ${go} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,Xo=(0,e.useMemo)(()=>h?A.findIndex(o=>o.id===h.id):-1,[A,h]),le=(0,e.useCallback)(()=>{let o=D.current;if(o){if(!f.current){let t=ie[0]||A[0];t&&he(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[ie,A]),he=(0,e.useCallback)((o,t=!0)=>{let l=D.current;if(!l||!o)return;if(f.current&&f.current.id===o.id){t&&le();return}f.current&&!l.ended&&l.currentTime>1&&oe(f.current.id,l.currentTime,l.duration||Y.current,!0),f.current=o,re(o),U(S=>S&&o.id),q(o.duration||0);let c=p[o.id]?.position||0,b=c>5&&(!o.duration||c<o.duration-10)?c:0;fe.current=b,J(b),l.src=`${m}/episodes/${o.id}/audio`,l.load(),l.playbackRate=ee.current.rate||1,l.volume=ee.current.volume??.9,t&&l.play().catch(()=>{}),G({lastEpisodeId:o.id})},[p,oe,G,le]),oo=(0,e.useCallback)((o,t=!0)=>{o&&(he(o,t),U(o.id))},[he]),je=(0,e.useCallback)(o=>{let t=D.current;if(!t||!f.current)return;let l=Math.max(0,Math.min(o,t.duration||o));t.currentTime=l,J(l),oe(f.current.id,l,t.duration||Y.current,!0)},[oe]),we=(0,e.useCallback)(o=>{let t=D.current;if(!t||!f.current)return;let l=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||Y.current||0)-1));t.currentTime=l,J(l)},[]),Oe=(0,e.useCallback)(o=>{if(!A.length)return;let l=((f.current?A.findIndex(c=>c.id===f.current.id):-1)+o+A.length)%A.length;he(A[l],!0)},[A,he]),ho=(0,e.useCallback)(()=>{let o=qe.indexOf(ee.current.rate),t=qe[(o+1)%qe.length],l=D.current;l&&(l.playbackRate=t),G({rate:t})},[G]),Se=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),l=D.current;l&&(l.volume=t),G({volume:t})},[G]),wo=(0,e.useCallback)(()=>{let o=D.current,t=ee.current.volume>0?0:.9;o&&(o.volume=t),G({volume:t})},[G]),xo=()=>{let o=D.current;!o||!f.current||(J(o.currentTime),oe(f.current.id,o.currentTime,o.duration||Y.current))},bo=()=>{let o=D.current,t=f.current;if(!o||!t)return;let l=Number.isFinite(o.duration)?o.duration:t.duration||0;q(l);let c=fe.current;fe.current=0,c>0&&c<l-1&&(o.currentTime=c,J(c))},yo=()=>{let o=D.current;f.current&&oe(f.current.id,o?.duration||Y.current||0,o?.duration||Y.current||0,!0),Oe(1)},ko=async o=>{await V(`${m}/folders`,"POST",{path:o}),await _(),E("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},No=async()=>{let o=await fetch(`${m}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},Co=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),Xe||Ie(!0))},$o=o=>{o.currentTarget.contains(o.relatedTarget)||Ie(!1)},zo=async o=>{o.preventDefault(),Ie(!1);let t=o.dataTransfer,l=[...t?.files||[]],c=l.map(y=>y.path).filter(y=>typeof y=="string"&&y),b=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(y=>y.trim()).filter(y=>y.startsWith("file://")).map(y=>decodeURIComponent(y.replace(/^file:\/\//,""))),S=[...new Set([...c,...b])];if(S.length){try{let y=await V(`${m}/import/paths`,"POST",{paths:S});await _(),E(y.added?`\u5DF2\u6DFB\u52A0 ${y.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(y){W(y.message)}return}let R=l.filter(y=>y.size>0);if(!R.length){E("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Mo=`drop-${Date.now()}`,Me="",Fe=0;for(let y of R)try{let to=await fetch(`${m}/import/upload?name=${encodeURIComponent(y.name)}&batch=${Mo}`,{method:"POST",body:y}),To=await to.json();to.ok&&(Me=To.folder||Me,Fe+=1)}catch{}if(Me)try{await V(`${m}/folders`,"POST",{path:Me})}catch{}await _(),E(Fe?`\u5DF2\u5BFC\u5165 ${Fe} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},So=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await V(`${m}/folders`,"DELETE",{path:o}),await _(),E("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){W(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let l=t.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),le()):t.key==="ArrowRight"?(t.preventDefault(),we(15)):t.key==="ArrowLeft"?(t.preventDefault(),we(-15)):t.key==="ArrowUp"?(t.preventDefault(),Se(ee.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),Se(ee.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[le,we,Se]);let Le=o=>{let t=p[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},Ke=o=>{let t=p[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${Qe?"nav-collapsed":""}`,onDragOver:Co,onDragLeave:$o,onDrop:zo},Xe?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,Qe?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Ge},e.default.createElement(j,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(j,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.3"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Ge},e.default.createElement(j,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Ae.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Le).length]].map(([o,t,l])=>e.default.createElement("button",{key:o,className:`nav-item ${u===o?"active":""}`,onClick:()=>F(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},l||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>P(!0)},e.default.createElement(j,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(j,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Fo(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>So(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,fo),e.default.createElement("p",{className:"subline"},mo)),e.default.createElement("div",{className:"tools"},e.default.createElement("label",{className:"search"},e.default.createElement(j,{name:"search",size:16}),e.default.createElement("input",{value:N,onChange:o=>O(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:x,onChange:o=>L(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),ce?e.default.createElement("div",{className:"banner error",onClick:()=>W("")},ce," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,$?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>U(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},$.artist,$.album?` \xB7 ${$.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(De,{item:$,size:288})),e.default.createElement("h2",{className:"episode-title"},$.title),e.default.createElement("p",{className:"episode-sub"},$.artist,$.album?` \xB7 ${$.album}`:""),e.default.createElement("p",{className:"episode-path",title:$.file},$.location||$.file),e.default.createElement("p",{className:"episode-stats"},no($.duration)," \xB7 ",ao($.mtime)," \xB7 \u5DF2\u542C ",Math.round(Ke($)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:le},ne&&h?.id===$.id?"\u6682\u505C":"\u64AD\u653E"),e.default.createElement("button",{className:"btn ghost",onClick:me,disabled:C==="queued"||C==="running"},I?"\u91CD\u65B0\u8F6C\u5199":C==="queued"||C==="running"?"\u8F6C\u5199\u4E2D\u2026":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(so,{inline:!0,transcript:I,status:C,elapsed:ue,error:B,position:Q,onSeek:je,onClose:()=>U(null),onStart:me,target:Ne,job:Ce,onChangeTarget:eo,onOpenSettings:()=>$e(!0)})))):e.default.createElement(e.default.Fragment,null,u==="all"&&!N&&Ae.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Ae.map(o=>{let t=Ke(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${h?.id===o.id?"is-current":""}`,onClick:()=>oo(o,!0)},e.default.createElement(De,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),de?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ie.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>P(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},ie.map((o,t)=>{let l=Ke(o),c=h?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${c?"is-current":""} ${Le(o)?"is-finished":""}`,onClick:()=>oo(o,!0)},e.default.createElement("span",{className:"col-index row-index"},c&&ne?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(De,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",ao(o.mtime)))),e.default.createElement("span",{className:"col-duration row-duration"},no(o.duration)),e.default.createElement("span",{className:"col-progress row-progress"},Le(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(j,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),ke&&h&&!$?e.default.createElement(so,{transcript:I,status:C,elapsed:ue,error:B,position:Q,onSeek:je,onClose:()=>ve(!1),onStart:me,target:Ne,job:Ce,onChangeTarget:eo,onOpenSettings:()=>$e(!0)}):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${M?Math.min(100,Math.max(0,Q/M*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:M||0,step:.05,value:Math.min(Q,M||0),onChange:o=>je(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},h?e.default.createElement(e.default.Fragment,null,e.default.createElement(De,{item:h,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:h.title},h.title),e.default.createElement("div",{className:"now-artist"},h.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Oe(-1)},e.default.createElement(j,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>we(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:le,disabled:!h&&ie.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(j,{name:ne?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>we(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Oe(1)},e.default.createElement(j,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${ke?"active":""}`,onClick:uo,disabled:!h,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(j,{name:"wave",size:15}),e.default.createElement("span",null,I?"\u5B57\u5E55":C==="queued"||C==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Be(Q)," / ",Be(M)),e.default.createElement("button",{className:"rate-btn",onClick:ho,title:"\u64AD\u653E\u901F\u5EA6"},w.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:wo,title:"\u9759\u97F3"},e.default.createElement(j,{name:w.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:w.volume,onChange:o=>Se(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),xe?e.default.createElement(Uo,{onClose:()=>P(!1),onSubmit:ko,onPick:No}):null,po?e.default.createElement(qo,{config:io,onClose:()=>$e(!1),onSave:async o=>{let t=await V(`${m}/translate/settings`,"PUT",o);Ve(t),$e(!1),E("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,be?e.default.createElement("div",{className:"toast"},be):null,e.default.createElement("audio",{ref:D,preload:"metadata",onPlay:()=>ae(!0),onPause:()=>{ae(!1);let o=D.current;f.current&&o&&o.currentTime>0&&!o.ended&&oe(f.current.id,o.currentTime,o.duration||Y.current,!0)},onTimeUpdate:xo,onLoadedMetadata:bo,onEnded:yo,onError:()=>{ae(!1),E("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=Ue(require("react"),1);var te="/podwave/api";async function Ee(r){let s=await fetch(r),a=await s.json().catch(()=>({}));if(!s.ok)throw new Error(a.error||`\u8BF7\u6C42\u5931\u8D25 ${s.status}`);return a}async function Je(r,s,a){let d=await fetch(r,{method:s,headers:{"content-type":"application/json"},body:JSON.stringify(a??{})}),p=await d.json().catch(()=>({}));if(!d.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25 ${d.status}`);return p}function Bo(r){let s=Math.max(0,Math.round(Number(r)||0)),a=Math.floor(s/3600),d=Math.floor(s%3600/60);return a>0?`${a} \u5C0F\u65F6 ${d} \u5206`:`${d} \u5206\u949F`}function Ho(r){if(!r)return"";let s=new Date(r),a=d=>String(d).padStart(2,"0");return`${s.getFullYear()}-${a(s.getMonth()+1)}-${a(s.getDate())} ${a(s.getHours())}:${a(s.getMinutes())}`}function Ze(){let[r,s]=(0,n.useState)([]),[a,d]=(0,n.useState)([]),[p,g]=(0,n.useState)({asrModel:"",translateModel:""}),[v,T]=(0,n.useState)(null),[w,z]=(0,n.useState)(null),[N,O]=(0,n.useState)({showSidebarPanel:!0}),[x,L]=(0,n.useState)("api"),[u,F]=(0,n.useState)("https://api.deepseek.com"),[k,U]=(0,n.useState)("deepseek-chat"),[h,re]=(0,n.useState)(""),[ne,ae]=(0,n.useState)(""),[Q,J]=(0,n.useState)(""),[M,q]=(0,n.useState)(""),[de,pe]=(0,n.useState)(""),[xe,P]=(0,n.useState)(""),ce=(0,n.useCallback)(async()=>{try{let[i,B,K,ke]=await Promise.all([Ee(`${te}/history`),Ee(`${te}/models`),Ee(`${te}/translate/settings`),Ee(`${te}/ui-settings`)]);O({showSidebarPanel:ke?.showSidebarPanel!==!1}),s(i.items||[]),d(B.models||[]),g(B.config||{asrModel:"",translateModel:""}),T(B.transcribe||null),ae(B.config?.asrModel||""),J(B.config?.translateModel||""),z(K),L(K.provider||"api"),F(K.apiBase||"https://api.deepseek.com"),U(K.apiModel||"deepseek-chat"),re(""),P("")}catch(i){P(i.message)}},[]);(0,n.useEffect)(()=>{ce()},[ce]);let W=i=>{pe(i),window.setTimeout(()=>pe(""),2400)},be=async()=>{q("api"),P("");try{let i={provider:x,apiBase:u,apiModel:k};h.trim()&&(i.apiKey=h.trim());let B=await Je(`${te}/translate/settings`,"PUT",i);z(B),re(""),W("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){P(i.message)}finally{q("")}},ye=async()=>{q("models"),P("");try{let i=await Je(`${te}/models`,"PUT",{asrModel:ne,translateModel:Q});g(i.config),d(i.models||[]),T(i.transcribe||null),W("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(i){P(i.message)}finally{q("")}},I=a.length?a:[{name:p.asrModel||"qwen3-asr-1.7b-8bit",ready:v?.modelReady},{name:p.translateModel||"qwen3-8b-4bit",ready:w?.localReady}],X=I.filter(i=>/asr/i.test(i.name)),C=I.filter(i=>!/asr/i.test(i.name)),se=async()=>{q("ui"),P("");try{let i=await Je(`${te}/ui-settings`,"PUT",{showSidebarPanel:N.showSidebarPanel});O({showSidebarPanel:i.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:i})),W("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){P(i.message)}finally{q("")}},ue=I;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Pe),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),xe?n.default.createElement("div",{className:"banner error",onClick:()=>P("")},xe):null,de?n.default.createElement("div",{className:"settings-message"},de):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(i=>n.default.createElement("li",{key:i.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},i.title),n.default.createElement("span",{className:"history-meta"},i.artist?`${i.artist} \xB7 `:"",i.duration?`${Bo(i.duration)} \xB7 `:"",i.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",i.lines," \u884C",i.translations?.length?` \xB7 \u5DF2\u7FFB ${i.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Ho(i.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:x,onChange:i=>L(i.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:u,onChange:i=>F(i.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:k,onChange:i=>U(i.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:h,onChange:i=>re(i.target.value),placeholder:w?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${w.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:be,disabled:M==="api"},M==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},w?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:N.showSidebarPanel,onChange:i=>O({showSidebarPanel:i.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:se,disabled:M==="ui"},M==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:ne,onChange:i=>ae(i.target.value)},(X.length?X:ue).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},v?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Q,onChange:i=>J(i.target.value)},(C.length?C:ue).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},w?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ye,disabled:M==="models"},M==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Jo({size:r=16}){return H.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},H.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),H.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),H.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),H.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),H.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Zo(){return H.default.createElement("div",{className:"podwave-root"},H.default.createElement("style",null,Pe),H.default.createElement(He,null))}function Vo(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Zo)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Ze));let s=null,a="podwave-hide-nav",d=g=>{if(typeof document>"u")return;let v=document.getElementById(a);g&&!v?(v=document.createElement("style"),v.id=a,v.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(v)):!g&&v&&v.remove()},p=g=>{if(d(!g),g&&!s)s=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Jo);else if(!g&&s){let v=s;s=null;try{typeof v?.dispose=="function"?v.dispose():typeof v=="function"?v():typeof v?.dispose>"u"&&typeof v?.unregister=="function"&&v.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>p(g?.showSidebarPanel!==!1)).catch(()=>p(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{p(g?.detail?.showSidebarPanel!==!1)})}var Qo=["slots"];

return module.exports}})
