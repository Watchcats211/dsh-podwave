window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Zt=Object.create;var Ke=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var Qt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,Xt=Object.prototype.hasOwnProperty;var Yt=(r,s)=>{for(var a in s)Ke(r,a,{get:s[a],enumerable:!0})},bt=(r,s,a,d)=>{if(s&&typeof s=="object"||typeof s=="function")for(let p of Qt(s))!Xt.call(r,p)&&p!==a&&Ke(r,p,{get:()=>s[p],enumerable:!(d=Vt(s,p))||d.enumerable});return r};var et=(r,s,a)=>(a=r!=null?Zt(Wt(r)):{},bt(s||!r||!r.__esModule?Ke(a,"default",{value:r,enumerable:!0}):a,r)),_t=r=>bt(Ke({},"__esModule",{value:!0}),r);var co={};Yt(co,{apply:()=>lo,inject:()=>po});module.exports=_t(co);var Y=et(require("react"),1);var Be=`.podwave-root {
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

/* ---- P1\uFF1A\u4EFB\u52A1\u9762\u677F / \u6279\u91CF\u9009\u62E9 / \u8FDB\u5EA6 ---- */
.podwave-root .topbar .tool-btn { display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 11px; border: 1px solid var(--line); border-radius: 9px; background: var(--elev); color: var(--muted); font-size: 12.5px; cursor: pointer; white-space: nowrap; }
.podwave-root .topbar .tool-btn:hover { color: var(--text); background: var(--hover); }
.podwave-root .topbar .tool-btn.is-on { color: var(--accent); border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); background: color-mix(in srgb, var(--accent) 12%, var(--elev)); }
.podwave-root .batch-bar { display: flex; align-items: center; gap: 10px; margin: 0 0 14px; padding: 10px 12px; border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line)); border-radius: 10px; background: color-mix(in srgb, var(--accent) 8%, var(--elev)); font-size: 12.5px; color: var(--muted); }
.podwave-root .batch-bar span { margin-right: auto; }
.podwave-root .row.is-selected { background: color-mix(in srgb, var(--accent) 12%, transparent); }
.podwave-root .row-check { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 6px; background: var(--accent); color: #1b1206; }
.podwave-root .row-badge { display: inline-block; margin-left: 7px; padding: 1px 6px; border-radius: 5px; background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); font-size: 10.5px; vertical-align: 1px; }
.podwave-root .tx-progress { display: block; height: 4px; margin: 8px 0 6px; border-radius: 2px; background: var(--line); overflow: hidden; }
.podwave-root .tx-progress > span { display: block; height: 100%; background: var(--accent); transition: width .3s ease; }
.podwave-root .tx-hint { color: var(--muted); font-size: 12px; }
.podwave-root .jobs-panel { margin: 0 0 16px; border: 1px solid var(--line); border-radius: 12px; background: var(--panel); overflow: hidden; }
.podwave-root .jobs-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.podwave-root .jobs-head h3 { margin: 0; font-size: 13px; font-weight: 600; }
.podwave-root .jobs-body { max-height: 300px; overflow-y: auto; padding: 6px 8px; }
.podwave-root .jobs-empty { margin: 10px 8px; color: var(--muted); font-size: 12.5px; }
.podwave-root .job-row { display: flex; align-items: center; gap: 10px; padding: 9px 8px; border-radius: 8px; }
.podwave-root .job-row + .job-row { border-top: 1px solid color-mix(in srgb, var(--line) 55%, transparent); }
.podwave-root .job-row:hover { background: var(--hover); }
.podwave-root .job-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.podwave-root .job-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12.5px; }
.podwave-root .job-meta { color: var(--muted); font-size: 11.5px; }
.podwave-root .job-bar { display: block; width: 100%; height: 4px; margin-top: 4px; border-radius: 2px; background: var(--line); overflow: hidden; }
.podwave-root .job-bar > span { display: block; height: 100%; background: var(--accent); transition: width .3s ease; }
.podwave-root .job-actions { display: flex; gap: 10px; flex: none; }
.podwave-root .job-done .job-meta { color: color-mix(in srgb, var(--accent) 70%, var(--muted)); }
.podwave-root .job-error .job-meta, .podwave-root .job-interrupted .job-meta { color: #e07a5f; }
.podwave-root .jobs-foot { display: flex; gap: 10px; padding: 12px 14px; border-top: 1px solid var(--line); flex-wrap: wrap; }
.podwave-root .mini-link { border: 0; background: none; padding: 2px 4px; color: var(--muted); font-size: 12px; cursor: pointer; }
.podwave-root .mini-link:hover { color: var(--accent); }
`;var e=et(require("react"),1),u="/podwave/api",tt=[.75,1,1.25,1.5,1.75,2];async function H(r){let s=await fetch(r);if(!s.ok){let a=await s.json().catch(()=>({}));throw new Error(a.error||s.statusText)}return s.json()}async function P(r,s,a){let d=await fetch(r,{method:s,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!d.ok){let p=await d.json().catch(()=>({}));throw new Error(p.error||d.statusText)}return d.json()}function ot(r){if(!Number.isFinite(r)||r<0)return"0:00";let s=Math.floor(r),a=Math.floor(s/3600),d=Math.floor(s%3600/60),p=s%60;return a>0?`${a}:${String(d).padStart(2,"0")}:${String(p).padStart(2,"0")}`:`${d}:${String(p).padStart(2,"0")}`}function yt(r){if(!r)return"\u2014";let s=Math.floor(r/3600),a=Math.round(r%3600/60);return s>0?`${s} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function kt(r){if(!r)return"";let s=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${s.getMonth()+1} \u6708 ${s.getDate()} \u65E5`}function Rt(r){let s=String(r||"").trim();return s?s.charAt(0).toUpperCase():"\xB7"}function eo(r){let s=String(r).split("/").filter(Boolean);return s.length<=2?`/${s.join("/")}`:`${s.slice(-2).join("/")}`}function Ue({item:r,size:s=44,className:a=""}){let d={width:s,height:s};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${a}`,style:d,src:`${u}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${a}`,style:d,"aria-hidden":!0},Rt(r&&r.title))}function to(r){let s=r.progress?.percent,a=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${s!=null?` ${s}%`:""}${a}`}function M({name:r,size:s=18}){let a={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...a},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}function oo({onSubmit:r,onPick:s,onClose:a}){let[d,p]=(0,e.useState)(""),[f,v]=(0,e.useState)(!1),[D,w]=(0,e.useState)(!1),[I,$]=(0,e.useState)(""),A=(0,e.useRef)(null);return(0,e.useEffect)(()=>{A.current?.focus();let g=B=>{B.key==="Escape"&&a()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:g=>{g.target===g.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async g=>{if(g.preventDefault(),!(!d.trim()||f)){v(!0),$("");try{await r(d.trim()),a()}catch(B){$(B.message),v(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!D){w(!0),$("");try{let g=await s();if(g?.canceled)return;if(g?.error)throw new Error(g.error);g?.path&&(await r(g.path),a())}catch(g){$(g.message)}finally{w(!1)}}},disabled:D,autoFocus:!0},D?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:A,value:d,onChange:g=>p(g.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:f||!d.trim()},f?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),I?e.default.createElement("div",{className:"dialog-error"},I):null))}function Nt({transcript:r,status:s,progress:a,stage:d,chunks:p,queued:f,elapsed:v,error:D,position:w,onSeek:I,onClose:$,onStart:A,onCancel:x,target:O,job:g,onChangeTarget:B,onOpenSettings:ee,inline:J=!1}){let m=(0,e.useRef)(null),Z=r?.lines?.findIndex(k=>w>=k.start&&w<k.end)??-1;(0,e.useEffect)(()=>{if(Z<0||!m.current)return;m.current.querySelector(`[data-seg="${Z}"]`)?.scrollIntoView({block:"nearest"})},[Z]);let te=s==="queued"||s==="running";return e.default.createElement("section",{className:`transcript-panel ${J?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:O,onChange:k=>B(k.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:ee},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("a",{className:"mini-link",href:`${u}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${u}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,J?null:e.default.createElement("button",{className:"transcript-close",onClick:$,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:m},g?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,g?.status==="error"?e.default.createElement("div",{className:"tr-running err"},g.error):null,r?r.lines.map((k,L)=>e.default.createElement("button",{key:k.id,"data-seg":L,className:`seg-row ${L===Z?"active":""}`,onClick:()=>I(k.start)},e.default.createElement("span",{className:"seg-time"},ot(k.start)),e.default.createElement("span",{className:"seg-text"},k.text,k.translations?.[O]?e.default.createElement("span",{className:"seg-trans"},k.translations[O]):null))):te?e.default.createElement("div",{className:"transcript-status"},s==="queued"?"\u6392\u961F\u4E2D\u2026":d==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":d==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",a?.percent!=null?` ${a.percent}%`:"",p?.total?` \xB7 \u7B2C ${Math.min(p.done+1,p.total)}/${p.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((v||0)/1e3)+" \u79D2",a?.percent!=null?e.default.createElement("span",{className:"tx-progress"},e.default.createElement("span",{style:{width:`${a.percent}%`}})):null,e.default.createElement("br",null),e.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),e.default.createElement("br",null),x?e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:x},"\u53D6\u6D88\u8F6C\u5199"):null):D?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},D),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:A},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:A},"\u5F00\u59CB\u8F6C\u5199"))))}function ro({config:r,onClose:s,onSave:a}){let[d,p]=(0,e.useState)(r?.provider||"api"),[f,v]=(0,e.useState)(""),[D,w]=(0,e.useState)(!1),[I,$]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async x=>{x.preventDefault(),w(!0),$("");try{await a({provider:d,apiKey:f||void 0})}catch(O){$(O.message),w(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:d,onChange:x=>p(x.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),d==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:f,onChange:x=>v(x.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),I?e.default.createElement("div",{className:"dialog-error"},I):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:D},"\u4FDD\u5B58"))))}function rt(){let[r,s]=(0,e.useState)([]),[a,d]=(0,e.useState)([]),[p,f]=(0,e.useState)({}),[v,D]=(0,e.useState)({running:!1}),[w,I]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[$,A]=(0,e.useState)(""),[x,O]=(0,e.useState)("recent"),[g,B]=(0,e.useState)("all"),[ee,J]=(0,e.useState)(null),[m,Z]=(0,e.useState)(null),[te,k]=(0,e.useState)(!1),[L,V]=(0,e.useState)(0),[Q,ge]=(0,e.useState)(0),[xe,be]=(0,e.useState)(!0),[W,q]=(0,e.useState)(!1),[ye,de]=(0,e.useState)(""),[ke,S]=(0,e.useState)(""),[U,X]=(0,e.useState)(null),[T,ve]=(0,e.useState)("none"),[me,he]=(0,e.useState)(0),[Ne,_]=(0,e.useState)(""),[Ie,oe]=(0,e.useState)(!1),[l,E]=(0,e.useState)(null),[F,He]=(0,e.useState)(""),[pe,$e]=(0,e.useState)({status:"none"}),[$t,Ee]=(0,e.useState)(!1),[at,st]=(0,e.useState)(!1),[it,Je]=(0,e.useState)(!1),[re,lt]=(0,e.useState)(null),[dt,pt]=(0,e.useState)(!1),[je,ct]=(0,e.useState)([]),[Ce,Ze]=(0,e.useState)(!1),[ne,ze]=(0,e.useState)([]),j=(0,e.useRef)(null),h=(0,e.useRef)(null),ae=(0,e.useRef)(0),ce=(0,e.useRef)(w),Me=(0,e.useRef)(0),ut=(0,e.useRef)(0),gt=(0,e.useRef)(0),Ct=(0,e.useRef)(!1);(0,e.useEffect)(()=>{ce.current=w},[w]),(0,e.useEffect)(()=>{h.current=m},[m]),(0,e.useEffect)(()=>{ae.current=Q},[Q]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await H(`${u}/ui-settings`);!t&&o&&st(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let vt=(0,e.useCallback)(()=>{st(t=>{let o=!t;return fetch(`${u}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),N=(0,e.useCallback)(t=>{S(t),window.clearTimeout(gt.current),gt.current=window.setTimeout(()=>S(""),2600)},[]),se=(0,e.useCallback)(async()=>{let t=await H(`${u}/episodes`);return s(t.items||[]),d(t.folders||[]),f(t.progress||{}),D(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await H(`${u}/state`);if(t)return;I(o.settings),d(o.folders||[]);let i=await se();if(t)return;let c=o.settings?.lastEpisodeId,b=c?(i.items||[]).find(z=>z.id===c):null;if(b){Z(b),ge(b.duration||0);let z=i.progress?.[b.id]?.position||0;Me.current=z>5?z:0,V(Me.current);let le=j.current;le&&(le.src=`${u}/episodes/${b.id}/audio`,le.load(),le.playbackRate=o.settings?.rate||1,le.volume=o.settings?.volume??.9)}be(!1),Ct.current=!0}catch(o){t||(de(o.message),be(!1))}})(),()=>{t=!0}},[se]),(0,e.useEffect)(()=>{if(!v.running)return;let t=setInterval(()=>{se().catch(()=>{})},1500);return()=>clearInterval(t)},[v.running,se]),(0,e.useEffect)(()=>{let t=!1;return X(null),_(""),he(0),m?.id?((async()=>{try{let o=await H(`${u}/episodes/${m.id}/transcript`);if(t)return;ve(o.status),lt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?X(o.transcript):o.status==="queued"||o.status==="running"?he(o.elapsedMs||0):o.status==="error"&&_(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||_(o.message)}})(),()=>{t=!0}):(ve("none"),()=>{t=!0})},[m?.id]),(0,e.useEffect)(()=>{H(`${u}/translate/settings`).then(E).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(T!=="queued"&&T!=="running")return;let t=!1,o=setInterval(async()=>{let i=h.current?.id;if(i)try{let c=await H(`${u}/episodes/${i}/transcript`);if(t)return;ve(c.status),lt(c.status==="queued"||c.status==="running"?c:null),he(c.elapsedMs||0),c.status==="done"&&c.transcript?(X(c.transcript),oe(!0),N("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&_(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[T,N]),(0,e.useEffect)(()=>{if(pe.status!=="running")return;let t=!1,o=setInterval(async()=>{let i=h.current?.id;if(i)try{let c=await H(`${u}/episodes/${i}/translate?target=${F}`);if(t)return;if($e(c),c.status==="done"){let b=await H(`${u}/episodes/${i}/transcript`);!t&&b.transcript&&X(b.transcript),N("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[pe.status,F,N]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let c=await H(`${u}/jobs`);t||ct(c.items||[])}catch{}};o();let i=setInterval(o,2500);return()=>{t=!0,clearInterval(i)}},[]);let ue=(0,e.useCallback)((t,o,i,c=!1)=>{if(!t)return;let b=Date.now();!c&&b-ut.current<4e3||(ut.current=b,P(`${u}/progress/${t}`,"PUT",{position:o,duration:i}).catch(()=>{}),f(z=>({...z,[t]:{position:o,duration:i,updatedAt:b}})))},[]),ie=(0,e.useCallback)(t=>{I(o=>({...o,...t})),P(`${u}/settings`,"PATCH",t).catch(()=>{})},[]),Se=(0,e.useCallback)(async()=>{if(h.current){_(""),oe(!0);try{let t=await P(`${u}/episodes/${h.current.id}/transcribe`,"POST",{});ve(t.status||"queued")}catch(t){_(t.message)}}},[]),zt=(0,e.useCallback)(()=>{if(U){oe(t=>!t);return}if(T==="queued"||T==="running"){oe(!0);return}Se()},[U,T,Se]),Ve=(0,e.useCallback)(async()=>{if(h.current)try{await P(`${u}/episodes/${h.current.id}/transcribe/cancel`,"POST",{}),N("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){_(t.message)}},[N]),Qe=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await P(`${u}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await P(`${u}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await P(`${u}/jobs`,"DELETE",{key:t.key})}catch{}let i=await H(`${u}/jobs`).catch(()=>({items:[]}));ct(i.items||[])},[]),Ae=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let i=await P(`${u}/transcribe/batch`,"POST",{ids:o});N(`\u5DF2\u6392\u961F ${i.queued} \u96C6${i.skipped?`\uFF0C\u8DF3\u8FC7 ${i.skipped} \u96C6`:""}${i.errors?.length?`\uFF0C\u5931\u8D25 ${i.errors.length} \u96C6`:""}`),ze([]),Ze(!1)}catch(i){N(i.message)}},[N]),Mt=(0,e.useCallback)(t=>{ze(o=>o.includes(t)?o.filter(i=>i!==t):[...o,t])},[]),Oe=(0,e.useCallback)(async()=>{let t=h.current?.id;if(!t)return;let o=await H(`${u}/episodes/${t}/transcript`);o.transcript&&X(o.transcript)},[]),mt=(0,e.useCallback)(async t=>{if(h.current?.id){$e({status:"running"});try{let o=await P(`${u}/episodes/${h.current.id}/translate`,"POST",{target:t});$e(o),o.status==="done"&&(await Oe(),N("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){$e({status:"error",error:o.message})}}},[Oe,N]),ht=(0,e.useCallback)(async t=>{if(He(t),!t)return;if(U?.lines?.some(i=>i.translations?.[t])){$e({status:"done"}),await Oe();return}await mt(t)},[U,mt,Oe]),K=(0,e.useMemo)(()=>{let t=[...r];return x==="title"?t.sort((o,i)=>o.title.localeCompare(i.title,"zh-Hans-CN")):x==="duration"?t.sort((o,i)=>(i.duration||0)-(o.duration||0)):t.sort((o,i)=>i.mtime-o.mtime),t},[r,x]),G=(0,e.useMemo)(()=>{let t=$.trim().toLowerCase();return K.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let c=p[o.id]?.position||0,b=o.duration||0,z=b?c/b:0;return g==="inprogress"?c>5&&z<.97:g==="finished"?z>=.97:!0})},[K,$,g,p]),ft=(0,e.useMemo)(()=>je.filter(t=>t.status==="queued"||t.status==="running"),[je]),fe=(0,e.useMemo)(()=>G.filter(t=>!t.hasTranscript),[G]),We=(0,e.useMemo)(()=>r.filter(t=>{let o=p[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(p[o.id]?.updatedAt||0)-(p[t.id]?.updatedAt||0)).slice(0,4),[r,p]),St=(0,e.useMemo)(()=>r.reduce((t,o)=>t+(o.duration||0),0),[r]),Tt=Math.round(St/3600*10)/10,Pt=g==="inprogress"?"\u7EE7\u7EED\u6536\u542C":g==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",C=ee?r.find(t=>t.id===ee)||(m?.id===ee?m:null):null,Dt=xe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":v.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${G.length} \u96C6 \xB7 \u5171 ${Tt} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,uo=(0,e.useMemo)(()=>m?K.findIndex(t=>t.id===m.id):-1,[K,m]),we=(0,e.useCallback)(()=>{let t=j.current;if(t){if(!h.current){let o=G[0]||K[0];o&&Te(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[G,K]),Te=(0,e.useCallback)((t,o=!0)=>{let i=j.current;if(!i||!t)return;if(h.current&&h.current.id===t.id){o&&we();return}h.current&&!i.ended&&i.currentTime>1&&ue(h.current.id,i.currentTime,i.duration||ae.current,!0),h.current=t,Z(t),J(z=>z&&t.id),ge(t.duration||0);let c=p[t.id]?.position||0,b=c>5&&(!t.duration||c<t.duration-10)?c:0;Me.current=b,V(b),i.src=`${u}/episodes/${t.id}/audio`,i.load(),i.playbackRate=ce.current.rate||1,i.volume=ce.current.volume??.9,o&&i.play().catch(()=>{}),ie({lastEpisodeId:t.id})},[p,ue,ie,we]),wt=(0,e.useCallback)((t,o=!0)=>{t&&(Te(t,o),J(t.id))},[Te]),Xe=(0,e.useCallback)(t=>{let o=j.current;if(!o||!h.current)return;let i=Math.max(0,Math.min(t,o.duration||t));o.currentTime=i,V(i),ue(h.current.id,i,o.duration||ae.current,!0)},[ue]),Pe=(0,e.useCallback)(t=>{let o=j.current;if(!o||!h.current)return;let i=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||ae.current||0)-1));o.currentTime=i,V(i)},[]),Ye=(0,e.useCallback)(t=>{if(!K.length)return;let i=((h.current?K.findIndex(c=>c.id===h.current.id):-1)+t+K.length)%K.length;Te(K[i],!0)},[K,Te]),It=(0,e.useCallback)(()=>{let t=tt.indexOf(ce.current.rate),o=tt[(t+1)%tt.length],i=j.current;i&&(i.playbackRate=o),ie({rate:o})},[ie]),Le=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),i=j.current;i&&(i.volume=o),ie({volume:o})},[ie]),Et=(0,e.useCallback)(()=>{let t=j.current,o=ce.current.volume>0?0:.9;t&&(t.volume=o),ie({volume:o})},[ie]),jt=()=>{let t=j.current;!t||!h.current||(V(t.currentTime),ue(h.current.id,t.currentTime,t.duration||ae.current))},At=()=>{let t=j.current,o=h.current;if(!t||!o)return;let i=Number.isFinite(t.duration)?t.duration:o.duration||0;ge(i);let c=Me.current;Me.current=0,c>0&&c<i-1&&(t.currentTime=c,V(c))},Ot=()=>{let t=j.current;h.current&&ue(h.current.id,t?.duration||ae.current||0,t?.duration||ae.current||0,!0),Ye(1)},Lt=async t=>{await P(`${u}/folders`,"POST",{path:t}),await se(),N("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},qt=async()=>{let t=await fetch(`${u}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Kt=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),it||Je(!0))},Bt=t=>{t.currentTarget.contains(t.relatedTarget)||Je(!1)},Ut=async t=>{t.preventDefault(),Je(!1);let o=t.dataTransfer,i=[...o?.files||[]],c=i.map(y=>y.path).filter(y=>typeof y=="string"&&y),b=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(y=>y.trim()).filter(y=>y.startsWith("file://")).map(y=>decodeURIComponent(y.replace(/^file:\/\//,""))),z=[...new Set([...c,...b])];if(z.length){try{let y=await P(`${u}/import/paths`,"POST",{paths:z});await se(),N(y.added?`\u5DF2\u6DFB\u52A0 ${y.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(y){de(y.message)}return}let le=i.filter(y=>y.size>0);if(!le.length){N("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Ht=`drop-${Date.now()}`,qe="",Re=0;for(let y of le)try{let xt=await fetch(`${u}/import/upload?name=${encodeURIComponent(y.name)}&batch=${Ht}`,{method:"POST",body:y}),Jt=await xt.json();xt.ok&&(qe=Jt.folder||qe,Re+=1)}catch{}if(qe)try{await P(`${u}/folders`,"POST",{path:qe})}catch{}await se(),N(Re?`\u5DF2\u5BFC\u5165 ${Re} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Ft=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await P(`${u}/folders`,"DELETE",{path:t}),await se(),N("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){de(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let i=o.target?.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),we()):o.key==="ArrowRight"?(o.preventDefault(),Pe(15)):o.key==="ArrowLeft"?(o.preventDefault(),Pe(-15)):o.key==="ArrowUp"?(o.preventDefault(),Le(ce.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Le(ce.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[we,Pe,Le]);let _e=t=>{let o=p[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},Ge=t=>{let o=p[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${at?"nav-collapsed":""}`,onDragOver:Kt,onDragLeave:Bt,onDrop:Ut},it?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,at?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:vt},e.default.createElement(M,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(M,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.4"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:vt},e.default.createElement(M,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",We.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(_e).length]].map(([t,o,i])=>e.default.createElement("button",{key:t,className:`nav-item ${g===t?"active":""}`,onClick:()=>B(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},i||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>q(!0)},e.default.createElement(M,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(M,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},eo(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Ft(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,Pt),e.default.createElement("p",{className:"subline"},Dt)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${dt?"is-on":""}`,onClick:()=>pt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(M,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",ft.length?` ${ft.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Ce?"is-on":""}`,onClick:()=>{Ze(t=>!t),ze([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(M,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(M,{name:"search",size:16}),e.default.createElement("input",{value:$,onChange:t=>A(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:x,onChange:t=>O(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Ce?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ne.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>ze(G.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!fe.length,onClick:()=>Ae(fe.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",fe.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ne.length,onClick:()=>Ae(ne)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{ze([]),Ze(!1)}},"\u53D6\u6D88")):null,ye?e.default.createElement("div",{className:"banner error",onClick:()=>de("")},ye," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,C?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>J(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},C.artist,C.album?` \xB7 ${C.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ue,{item:C,size:288})),e.default.createElement("h2",{className:"episode-title"},C.title),e.default.createElement("p",{className:"episode-sub"},C.artist,C.album?` \xB7 ${C.album}`:""),e.default.createElement("p",{className:"episode-path",title:C.file},C.location||C.file),e.default.createElement("p",{className:"episode-stats"},yt(C.duration)," \xB7 ",kt(C.mtime)," \xB7 \u5DF2\u542C ",Math.round(Ge(C)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:we},te&&m?.id===C.id?"\u6682\u505C":"\u64AD\u653E"),T==="queued"||T==="running"?e.default.createElement("button",{className:"btn ghost",onClick:Ve},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:Se},U?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Nt,{inline:!0,transcript:U,status:T,progress:re?.progress,stage:re?.stage,chunks:re?.chunks,queued:re?.queued,elapsed:me,onCancel:Ve,error:Ne,position:L,onSeek:Xe,onClose:()=>J(null),onStart:Se,target:F,job:pe,onChangeTarget:ht,onOpenSettings:()=>Ee(!0)})))):e.default.createElement(e.default.Fragment,null,g==="all"&&!$&&We.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},We.map(t=>{let o=Ge(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${m?.id===t.id?"is-current":""}`,onClick:()=>wt(t,!0)},e.default.createElement(Ue,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),xe?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):G.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>q(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},G.map((t,o)=>{let i=Ge(t),c=m?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${c?"is-current":""} ${_e(t)?"is-finished":""} ${Ce&&ne.includes(t.id)?"is-selected":""}`,onClick:()=>Ce?Mt(t.id):wt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},Ce?ne.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(M,{name:"check",size:14})):null:c&&te?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ue,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",kt(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},yt(t.duration)),e.default.createElement("span",{className:"col-progress row-progress"},_e(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(M,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):i>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${i}%`}})):null))}))))),Ie&&m&&!C?e.default.createElement(Nt,{transcript:U,status:T,progress:re?.progress,stage:re?.stage,chunks:re?.chunks,queued:re?.queued,elapsed:me,onCancel:Ve,error:Ne,position:L,onSeek:Xe,onClose:()=>oe(!1),onStart:Se,target:F,job:pe,onChangeTarget:ht,onOpenSettings:()=>Ee(!0)}):null,dt?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>pt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},je.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):je.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},to(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Qe(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Qe(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Qe(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!fe.length,onClick:()=>Ae(fe.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",fe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ne.length,onClick:()=>Ae(ne)},"\u8F6C\u5199\u5DF2\u9009 ",ne.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${Q?Math.min(100,Math.max(0,L/Q*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:Q||0,step:.05,value:Math.min(L,Q||0),onChange:t=>Xe(Number(t.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},m?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ue,{item:m,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:m.title},m.title),e.default.createElement("div",{className:"now-artist"},m.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Ye(-1)},e.default.createElement(M,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Pe(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:we,disabled:!m&&G.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(M,{name:te?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Pe(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Ye(1)},e.default.createElement(M,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Ie?"active":""}`,onClick:zt,disabled:!m,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(M,{name:"wave",size:15}),e.default.createElement("span",null,U?"\u5B57\u5E55":T==="queued"||T==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},ot(L)," / ",ot(Q)),e.default.createElement("button",{className:"rate-btn",onClick:It,title:"\u64AD\u653E\u901F\u5EA6"},w.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:Et,title:"\u9759\u97F3"},e.default.createElement(M,{name:w.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:w.volume,onChange:t=>Le(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),W?e.default.createElement(oo,{onClose:()=>q(!1),onSubmit:Lt,onPick:qt}):null,$t?e.default.createElement(ro,{config:l,onClose:()=>Ee(!1),onSave:async t=>{let o=await P(`${u}/translate/settings`,"PUT",t);E(o),Ee(!1),N("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ke?e.default.createElement("div",{className:"toast"},ke):null,e.default.createElement("audio",{ref:j,preload:"metadata",onPlay:()=>k(!0),onPause:()=>{k(!1);let t=j.current;h.current&&t&&t.currentTime>0&&!t.ended&&ue(h.current.id,t.currentTime,t.duration||ae.current,!0)},onTimeUpdate:jt,onLoadedMetadata:At,onEnded:Ot,onError:()=>{k(!1),N("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=et(require("react"),1);var R="/podwave/api";async function De(r){let s=await fetch(r),a=await s.json().catch(()=>({}));if(!s.ok)throw new Error(a.error||`\u8BF7\u6C42\u5931\u8D25 ${s.status}`);return a}async function Fe(r,s,a){let d=await fetch(r,{method:s,headers:{"content-type":"application/json"},body:JSON.stringify(a??{})}),p=await d.json().catch(()=>({}));if(!d.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25 ${d.status}`);return p}function no(r){let s=Math.max(0,Math.round(Number(r)||0)),a=Math.floor(s/3600),d=Math.floor(s%3600/60);return a>0?`${a} \u5C0F\u65F6 ${d} \u5206`:`${d} \u5206\u949F`}function ao(r){if(!r)return"";let s=new Date(r),a=d=>String(d).padStart(2,"0");return`${s.getFullYear()}-${a(s.getMonth()+1)}-${a(s.getDate())} ${a(s.getHours())}:${a(s.getMinutes())}`}function nt(){let[r,s]=(0,n.useState)([]),[a,d]=(0,n.useState)([]),[p,f]=(0,n.useState)({asrModel:"",translateModel:""}),[v,D]=(0,n.useState)(null),[w,I]=(0,n.useState)(null),[$,A]=(0,n.useState)({showSidebarPanel:!0}),[x,O]=(0,n.useState)(""),[g,B]=(0,n.useState)(15),[ee,J]=(0,n.useState)("api"),[m,Z]=(0,n.useState)("https://api.deepseek.com"),[te,k]=(0,n.useState)("deepseek-chat"),[L,V]=(0,n.useState)(""),[Q,ge]=(0,n.useState)(""),[xe,be]=(0,n.useState)(""),[W,q]=(0,n.useState)(""),[ye,de]=(0,n.useState)(""),[ke,S]=(0,n.useState)(""),U=(0,n.useCallback)(async()=>{try{let[l,E,F,He,pe]=await Promise.all([De(`${R}/history`),De(`${R}/models`),De(`${R}/translate/settings`),De(`${R}/ui-settings`),De(`${R}/transcribe/settings`)]);A({showSidebarPanel:He?.showSidebarPanel!==!1}),O((pe.hotwords||[]).join(" ")),B(pe.chunkMinutes||15),s(l.items||[]),d(E.models||[]),f(E.config||{asrModel:"",translateModel:""}),D(E.transcribe||null),ge(E.config?.asrModel||""),be(E.config?.translateModel||""),I(F),J(F.provider||"api"),Z(F.apiBase||"https://api.deepseek.com"),k(F.apiModel||"deepseek-chat"),V(""),S("")}catch(l){S(l.message)}},[]);(0,n.useEffect)(()=>{U()},[U]);let X=l=>{de(l),window.setTimeout(()=>de(""),2400)},T=async()=>{q("api"),S("");try{let l={provider:ee,apiBase:m,apiModel:te};L.trim()&&(l.apiKey=L.trim());let E=await Fe(`${R}/translate/settings`,"PUT",l);I(E),V(""),X("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){S(l.message)}finally{q("")}},ve=async()=>{q("models"),S("");try{let l=await Fe(`${R}/models`,"PUT",{asrModel:Q,translateModel:xe});f(l.config),d(l.models||[]),D(l.transcribe||null),X("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(l){S(l.message)}finally{q("")}},me=a.length?a:[{name:p.asrModel||"qwen3-asr-1.7b-8bit",ready:v?.modelReady},{name:p.translateModel||"qwen3-8b-4bit",ready:w?.localReady}],he=me.filter(l=>/asr/i.test(l.name)),Ne=me.filter(l=>!/asr/i.test(l.name)),_=async()=>{q("ui"),S("");try{let l=await Fe(`${R}/ui-settings`,"PUT",{showSidebarPanel:$.showSidebarPanel});A({showSidebarPanel:l.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:l})),X("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){S(l.message)}finally{q("")}},Ie=async()=>{q("transcribe"),S("");try{let l=x.split(/[\s,，、]+/).map(F=>F.trim()).filter(Boolean).slice(0,500),E=await Fe(`${R}/transcribe/settings`,"PUT",{hotwords:l,chunkMinutes:Math.min(60,Math.max(1,Number(g)||15))});O((E.hotwords||[]).join(" ")),B(E.chunkMinutes||15),X("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){S(l.message)}finally{q("")}},oe=me;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Be),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),ke?n.default.createElement("div",{className:"banner error",onClick:()=>S("")},ke):null,ye?n.default.createElement("div",{className:"settings-message"},ye):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(l=>n.default.createElement("li",{key:l.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},l.title),n.default.createElement("span",{className:"history-meta"},l.artist?`${l.artist} \xB7 `:"",l.duration?`${no(l.duration)} \xB7 `:"",l.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",l.lines," \u884C",l.translations?.length?` \xB7 \u5DF2\u7FFB ${l.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},ao(l.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:x,onChange:l=>O(l.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:g,onChange:l=>B(l.target.value)}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ie,disabled:W==="transcribe"},W==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:ee,onChange:l=>J(l.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:m,onChange:l=>Z(l.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:te,onChange:l=>k(l.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:L,onChange:l=>V(l.target.value),placeholder:w?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${w.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:T,disabled:W==="api"},W==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},w?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:$.showSidebarPanel,onChange:l=>A({showSidebarPanel:l.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:_,disabled:W==="ui"},W==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Q,onChange:l=>ge(l.target.value)},(he.length?he:oe).map(l=>n.default.createElement("option",{key:l.name,value:l.name},l.name,l.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},v?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:xe,onChange:l=>be(l.target.value)},(Ne.length?Ne:oe).map(l=>n.default.createElement("option",{key:l.name,value:l.name},l.name,l.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},w?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ve,disabled:W==="models"},W==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function so({size:r=16}){return Y.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Y.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Y.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Y.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Y.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Y.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function io(){return Y.default.createElement("div",{className:"podwave-root"},Y.default.createElement("style",null,Be),Y.default.createElement(rt,null))}function lo(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},io)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},nt));let s=null,a="podwave-hide-nav",d=f=>{if(typeof document>"u")return;let v=document.getElementById(a);f&&!v?(v=document.createElement("style"),v.id=a,v.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(v)):!f&&v&&v.remove()},p=f=>{if(d(!f),f&&!s)s=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},so);else if(!f&&s){let v=s;s=null;try{typeof v?.dispose=="function"?v.dispose():typeof v=="function"?v():typeof v?.dispose>"u"&&typeof v?.unregister=="function"&&v.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>p(f?.showSidebarPanel!==!1)).catch(()=>p(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{p(f?.detail?.showSidebarPanel!==!1)})}var po=["slots"];

return module.exports}})
