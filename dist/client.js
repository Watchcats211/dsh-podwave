window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var mo=Object.create;var ze=Object.defineProperty;var fo=Object.getOwnPropertyDescriptor;var ho=Object.getOwnPropertyNames;var wo=Object.getPrototypeOf,xo=Object.prototype.hasOwnProperty;var bo=(r,a)=>{for(var s in a)ze(r,s,{get:a[s],enumerable:!0})},Qe=(r,a,s,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let p of ho(a))!xo.call(r,p)&&p!==s&&ze(r,p,{get:()=>a[p],enumerable:!(l=fo(a,p))||l.enumerable});return r};var Ee=(r,a,s)=>(s=r!=null?mo(wo(r)):{},Qe(a||!r||!r.__esModule?ze(s,"default",{value:r,enumerable:!0}):s,r)),yo=r=>Qe(ze({},"__esModule",{value:!0}),r);var Eo={};bo(Eo,{apply:()=>Ao,inject:()=>Io});module.exports=yo(Eo);var K=Ee(require("react"),1);var $e=`.podwave-root {
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

/* \u8BBE\u7F6E\u9875 */
.podwave-root .podwave-settings { height: auto; overflow: visible; padding: 2px 0 32px; }
.podwave-root .podwave-settings .settings-head h1 { margin: 0 0 6px; font-size: 20px; font-weight: 600; color: #f2f2f5; }
.podwave-root .podwave-settings .settings-head p { margin: 0; color: #8b8b96; font-size: 13px; }
.podwave-root .podwave-settings .settings-message { margin-top: 12px; color: #7ec699; font-size: 13px; }
.podwave-root .podwave-settings .settings-card { margin-top: 18px; padding: 16px 18px 18px; background: #121217; border: 1px solid #26262e; border-radius: 12px; }
.podwave-root .podwave-settings .settings-card h2 { margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #e8e8ee; }
.podwave-root .podwave-settings .settings-hint { margin: 0 0 12px; color: #7c7c88; font-size: 12.5px; }
.podwave-root .podwave-settings .settings-empty { margin: 4px 0 0; color: #7c7c88; font-size: 13px; }
.podwave-root .podwave-settings .history-list { list-style: none; margin: 4px 0 0; padding: 0; }
.podwave-root .podwave-settings .history-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 10px 0; border-top: 1px solid #22222a; }
.podwave-root .podwave-settings .history-row:first-child { border-top: 0; padding-top: 2px; }
.podwave-root .podwave-settings .history-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.podwave-root .podwave-settings .history-title { color: #e7e7ec; font-size: 13.5px; }
.podwave-root .podwave-settings .history-meta { color: #7f7f8b; font-size: 12px; }
.podwave-root .podwave-settings .history-date { color: #6d6d78; font-size: 12px; white-space: nowrap; }
.podwave-root .podwave-settings .settings-fields { display: flex; flex-direction: column; gap: 10px; }
.podwave-root .podwave-settings .field-row { display: flex; align-items: center; gap: 12px; }
.podwave-root .podwave-settings .field-row > span:first-child { flex: 0 0 128px; color: #a9a9b4; font-size: 13px; }
.podwave-root .podwave-settings .field-row select,
.podwave-root .podwave-settings .field-row input { min-width: 0; width: 260px; height: 30px; padding: 0 9px; color: #e6e6ea; background: #0d0d11; border: 1px solid #2b2b34; border-radius: 7px; font-size: 13px; outline: none; }
.podwave-root .podwave-settings .field-row select:focus,
.podwave-root .podwave-settings .field-row input:focus { border-color: rgba(230, 165, 74, 0.5); }
.podwave-root .podwave-settings .settings-status { color: #7c7c88; font-size: 12px; }
.podwave-root .podwave-settings .settings-actions { display: flex; align-items: center; gap: 12px; margin-top: 14px; }
`;var e=Ee(require("react"),1),h="/podwave/api",De=[.75,1,1.25,1.5,1.75,2];async function Z(r){let a=await fetch(r);if(!a.ok){let s=await a.json().catch(()=>({}));throw new Error(s.error||a.statusText)}return a.json()}async function W(r,a,s){let l=await fetch(r,{method:a,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!l.ok){let p=await l.json().catch(()=>({}));throw new Error(p.error||l.statusText)}return l.json()}function je(r){if(!Number.isFinite(r)||r<0)return"0:00";let a=Math.floor(r),s=Math.floor(a/3600),l=Math.floor(a%3600/60),p=a%60;return s>0?`${s}:${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}`:`${l}:${String(p).padStart(2,"0")}`}function Xe(r){if(!r)return"\u2014";let a=Math.floor(r/3600),s=Math.round(r%3600/60);return a>0?`${a} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function We(r){if(!r)return"";let a=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${a.getMonth()+1} \u6708 ${a.getDate()} \u65E5`}function No(r){let a=String(r||"").trim();return a?a.charAt(0).toUpperCase():"\xB7"}function zo(r){let a=String(r).split("/").filter(Boolean);return a.length<=2?`/${a.join("/")}`:`${a.slice(-2).join("/")}`}function Ce({item:r,size:a=44,className:s=""}){let l={width:a,height:a};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${s}`,style:l,src:`${h}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${s}`,style:l,"aria-hidden":!0},No(r&&r.title))}function O({name:r,size:a=18}){let s={width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...s},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"check":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));default:return null}}function $o({onSubmit:r,onClose:a}){let[s,l]=(0,e.useState)(""),[p,k]=(0,e.useState)(!1),[N,C]=(0,e.useState)(""),f=(0,e.useRef)(null);return(0,e.useEffect)(()=>{f.current?.focus();let g=A=>{A.key==="Escape"&&a()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:g=>{g.target===g.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async g=>{if(g.preventDefault(),!(!s.trim()||p)){k(!0),C("");try{await r(s.trim()),a()}catch(A){C(A.message),k(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u3001\u4E0A\u4F20\u6216\u4FEE\u6539\u5B83\u4EEC\u3002"),e.default.createElement("input",{ref:f,value:s,onChange:g=>l(g.target.value),placeholder:"~/Music/\u64AD\u5BA2 \u6216 /Users/\u4F60/Downloads/\u8282\u76EE",spellCheck:!1}),N?e.default.createElement("div",{className:"dialog-error"},N):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:p||!s.trim()},p?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0"))))}function Ye({transcript:r,status:a,elapsed:s,error:l,position:p,onSeek:k,onClose:N,onStart:C,target:f,translations:M,job:g,onChangeTarget:A,onOpenSettings:w,inline:q=!1}){let y=(0,e.useRef)(null),F=r?.segments?.findIndex(m=>p>=m.start&&p<m.end)??-1;(0,e.useEffect)(()=>{if(F<0||!y.current)return;y.current.querySelector(`[data-seg="${F}"]`)?.scrollIntoView({block:"nearest"})},[F]);let B=a==="queued"||a==="running";return e.default.createElement("section",{className:`transcript-panel ${q?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.segments.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:f,onChange:m=>A(m.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:w},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("a",{className:"mini-link",href:`${h}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${h}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,q?null:e.default.createElement("button",{className:"transcript-close",onClick:N,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:y},g?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,g?.status==="error"?e.default.createElement("div",{className:"tr-running err"},g.error):null,r?r.segments.map((m,u)=>e.default.createElement("button",{key:m.id,"data-seg":u,className:`seg-row ${u===F?"active":""}`,onClick:()=>k(m.start)},e.default.createElement("span",{className:"seg-time"},je(m.start)),e.default.createElement("span",{className:"seg-text"},m.text,M?.[m.id]?e.default.createElement("span",{className:"seg-trans"},M[m.id]):null))):B?e.default.createElement("div",{className:"transcript-status"},"\u6B63\u5728\u8F6C\u5199\u2026 \u5DF2\u7528 ",Math.round((s||0)/1e3)," \u79D2",e.default.createElement("br",null),"\u957F\u64AD\u5BA2\u9700\u8981\u51E0\u5206\u949F\uFF0C\u5148\u653E\u7740\u542C\u4E5F\u884C\uFF0C\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"):l?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},l),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:C},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:C},"\u5F00\u59CB\u8F6C\u5199"))))}function Co({config:r,onClose:a,onSave:s}){let[l,p]=(0,e.useState)(r?.provider||"api"),[k,N]=(0,e.useState)(""),[C,f]=(0,e.useState)(!1),[M,g]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{w.preventDefault(),f(!0),g("");try{await s({provider:l,apiKey:k||void 0})}catch(q){g(q.message),f(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:l,onChange:w=>p(w.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),l==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:k,onChange:w=>N(w.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),M?e.default.createElement("div",{className:"dialog-error"},M):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:C},"\u4FDD\u5B58"))))}function Le(){let[r,a]=(0,e.useState)([]),[s,l]=(0,e.useState)([]),[p,k]=(0,e.useState)({}),[N,C]=(0,e.useState)({running:!1}),[f,M]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[g,A]=(0,e.useState)(""),[w,q]=(0,e.useState)("recent"),[y,F]=(0,e.useState)("all"),[B,m]=(0,e.useState)(null),[u,se]=(0,e.useState)(null),[Y,G]=(0,e.useState)(!1),[E,I]=(0,e.useState)(0),[D,_]=(0,e.useState)(0),[ie,j]=(0,e.useState)(!0),[we,R]=(0,e.useState)(!1),[xe,de]=(0,e.useState)(""),[ee,le]=(0,e.useState)(""),[z,U]=(0,e.useState)(null),[i,T]=(0,e.useState)("none"),[V,Me]=(0,e.useState)(0),[qe,oe]=(0,e.useState)(""),[Fe,pe]=(0,e.useState)(!1),[_e,Be]=(0,e.useState)(null),[te,Re]=(0,e.useState)(""),[be,ce]=(0,e.useState)({status:"none"}),[eo,ye]=(0,e.useState)(!1),$=(0,e.useRef)(null),v=(0,e.useRef)(null),H=(0,e.useRef)(0),Q=(0,e.useRef)(f),ue=(0,e.useRef)(0),Ue=(0,e.useRef)(0),He=(0,e.useRef)(0),oo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{Q.current=f},[f]),(0,e.useEffect)(()=>{v.current=u},[u]),(0,e.useEffect)(()=>{H.current=D},[D]);let L=(0,e.useCallback)(o=>{le(o),window.clearTimeout(He.current),He.current=window.setTimeout(()=>le(""),2600)},[]),re=(0,e.useCallback)(async()=>{let o=await Z(`${h}/episodes`);return a(o.items||[]),l(o.folders||[]),k(o.progress||{}),C(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await Z(`${h}/state`);if(o)return;M(t.settings),l(t.folders||[]);let d=await re();if(o)return;let c=t.settings?.lastEpisodeId,x=c?(d.items||[]).find(P=>P.id===c):null;if(x){se(x),_(x.duration||0);let P=d.progress?.[x.id]?.position||0;ue.current=P>5?P:0,I(ue.current);let fe=$.current;fe&&(fe.src=`${h}/episodes/${x.id}/audio`,fe.load(),fe.playbackRate=t.settings?.rate||1,fe.volume=t.settings?.volume??.9)}j(!1),oo.current=!0}catch(t){o||(de(t.message),j(!1))}})(),()=>{o=!0}},[re]),(0,e.useEffect)(()=>{if(!N.running)return;let o=setInterval(()=>{re().catch(()=>{})},1500);return()=>clearInterval(o)},[N.running,re]),(0,e.useEffect)(()=>{let o=!1;return U(null),oe(""),Me(0),u?.id?((async()=>{try{let t=await Z(`${h}/episodes/${u.id}/transcript`);if(o)return;T(t.status),t.status==="done"&&t.transcript?U(t.transcript):t.status==="queued"||t.status==="running"?Me(t.elapsedMs||0):t.status==="error"&&oe(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||oe(t.message)}})(),()=>{o=!0}):(T("none"),()=>{o=!0})},[u?.id]),(0,e.useEffect)(()=>{Z(`${h}/translate/settings`).then(Be).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(i!=="queued"&&i!=="running")return;let o=!1,t=setInterval(async()=>{let d=v.current?.id;if(d)try{let c=await Z(`${h}/episodes/${d}/transcript`);if(o)return;T(c.status),Me(c.elapsedMs||0),c.status==="done"&&c.transcript?(U(c.transcript),pe(!0),L("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&oe(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[i,L]),(0,e.useEffect)(()=>{if(be.status!=="running")return;let o=!1,t=setInterval(async()=>{let d=v.current?.id;if(d)try{let c=await Z(`${h}/episodes/${d}/translate?target=${te}`);if(o)return;if(ce(c),c.status==="done"){let x=await Z(`${h}/episodes/${d}/transcript`);!o&&x.transcript&&U(x.transcript),L("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[be.status,te,L]);let X=(0,e.useCallback)((o,t,d,c=!1)=>{if(!o)return;let x=Date.now();!c&&x-Ue.current<4e3||(Ue.current=x,W(`${h}/progress/${o}`,"PUT",{position:t,duration:d}).catch(()=>{}),k(P=>({...P,[o]:{position:t,duration:d,updatedAt:x}})))},[]),J=(0,e.useCallback)(o=>{M(t=>({...t,...o})),W(`${h}/settings`,"PATCH",o).catch(()=>{})},[]),ve=(0,e.useCallback)(async()=>{if(v.current){oe(""),pe(!0);try{let o=await W(`${h}/episodes/${v.current.id}/transcribe`,"POST",{});T(o.status||"queued")}catch(o){oe(o.message)}}},[]),to=(0,e.useCallback)(()=>{if(z){pe(o=>!o);return}if(i==="queued"||i==="running"){pe(!0);return}ve()},[z,i,ve]),ke=(0,e.useCallback)(async()=>{let o=v.current?.id;if(!o)return;let t=await Z(`${h}/episodes/${o}/transcript`);t.transcript&&U(t.transcript)},[]),Je=(0,e.useCallback)(async o=>{if(v.current?.id){ce({status:"running"});try{let t=await W(`${h}/episodes/${v.current.id}/translate`,"POST",{target:o});ce(t),t.status==="done"&&(await ke(),L("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){ce({status:"error",error:t.message})}}},[ke,L]),Ze=(0,e.useCallback)(async o=>{if(Re(o),!o)return;let t=z?.translations?.[o];if(t&&Object.keys(t).length){ce({status:"done"}),await ke();return}await Je(o)},[z,Je,ke]),S=(0,e.useMemo)(()=>{let o=[...r];return w==="title"?o.sort((t,d)=>t.title.localeCompare(d.title,"zh-Hans-CN")):w==="duration"?o.sort((t,d)=>(d.duration||0)-(t.duration||0)):o.sort((t,d)=>d.mtime-t.mtime),o},[r,w]),ne=(0,e.useMemo)(()=>{let o=g.trim().toLowerCase();return S.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let c=p[t.id]?.position||0,x=t.duration||0,P=x?c/x:0;return y==="inprogress"?c>5&&P<.97:y==="finished"?P>=.97:!0})},[S,g,y,p]),Te=(0,e.useMemo)(()=>r.filter(o=>{let t=p[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(p[t.id]?.updatedAt||0)-(p[o.id]?.updatedAt||0)).slice(0,4),[r,p]),ro=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),no=Math.round(ro/3600*10)/10,ao=y==="inprogress"?"\u7EE7\u7EED\u6536\u542C":y==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",b=B?r.find(o=>o.id===B)||(u?.id===B?u:null):null,so=ie?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":N.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${ne.length} \u96C6 \xB7 \u5171 ${no} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Do=(0,e.useMemo)(()=>u?S.findIndex(o=>o.id===u.id):-1,[S,u]),ae=(0,e.useCallback)(()=>{let o=$.current;if(o){if(!v.current){let t=ne[0]||S[0];t&&ge(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[ne,S]),ge=(0,e.useCallback)((o,t=!0)=>{let d=$.current;if(!d||!o)return;if(v.current&&v.current.id===o.id){t&&ae();return}v.current&&!d.ended&&d.currentTime>1&&X(v.current.id,d.currentTime,d.duration||H.current,!0),v.current=o,se(o),m(P=>P&&o.id),_(o.duration||0);let c=p[o.id]?.position||0,x=c>5&&(!o.duration||c<o.duration-10)?c:0;ue.current=x,I(x),d.src=`${h}/episodes/${o.id}/audio`,d.load(),d.playbackRate=Q.current.rate||1,d.volume=Q.current.volume??.9,t&&d.play().catch(()=>{}),J({lastEpisodeId:o.id})},[p,X,J,ae]),Ve=(0,e.useCallback)((o,t=!0)=>{o&&(ge(o,t),m(o.id))},[ge]),Se=(0,e.useCallback)(o=>{let t=$.current;if(!t||!v.current)return;let d=Math.max(0,Math.min(o,t.duration||o));t.currentTime=d,I(d),X(v.current.id,d,t.duration||H.current,!0)},[X]),me=(0,e.useCallback)(o=>{let t=$.current;if(!t||!v.current)return;let d=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||H.current||0)-1));t.currentTime=d,I(d)},[]),Pe=(0,e.useCallback)(o=>{if(!S.length)return;let d=((v.current?S.findIndex(c=>c.id===v.current.id):-1)+o+S.length)%S.length;ge(S[d],!0)},[S,ge]),io=(0,e.useCallback)(()=>{let o=De.indexOf(Q.current.rate),t=De[(o+1)%De.length],d=$.current;d&&(d.playbackRate=t),J({rate:t})},[J]),Ne=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),d=$.current;d&&(d.volume=t),J({volume:t})},[J]),lo=(0,e.useCallback)(()=>{let o=$.current,t=Q.current.volume>0?0:.9;o&&(o.volume=t),J({volume:t})},[J]),po=()=>{let o=$.current;!o||!v.current||(I(o.currentTime),X(v.current.id,o.currentTime,o.duration||H.current))},co=()=>{let o=$.current,t=v.current;if(!o||!t)return;let d=Number.isFinite(o.duration)?o.duration:t.duration||0;_(d);let c=ue.current;ue.current=0,c>0&&c<d-1&&(o.currentTime=c,I(c))},uo=()=>{let o=$.current;v.current&&X(v.current.id,o?.duration||H.current||0,o?.duration||H.current||0,!0),Pe(1)},vo=async o=>{await W(`${h}/folders`,"POST",{path:o}),await re(),L("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},go=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await W(`${h}/folders`,"DELETE",{path:o}),await re(),L("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){de(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let d=t.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),ae()):t.key==="ArrowRight"?(t.preventDefault(),me(15)):t.key==="ArrowLeft"?(t.preventDefault(),me(-15)):t.key==="ArrowUp"?(t.preventDefault(),Ne(Q.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),Ne(Q.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[ae,me,Ne]);let Ae=o=>{let t=p[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},Ie=o=>{let t=p[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:"shell"},e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(O,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.2")),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Te.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Ae).length]].map(([o,t,d])=>e.default.createElement("button",{key:o,className:`nav-item ${y===o?"active":""}`,onClick:()=>F(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},d||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>R(!0)},e.default.createElement(O,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(O,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},zo(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>go(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,ao),e.default.createElement("p",{className:"subline"},so)),e.default.createElement("div",{className:"tools"},e.default.createElement("label",{className:"search"},e.default.createElement(O,{name:"search",size:16}),e.default.createElement("input",{value:g,onChange:o=>A(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:o=>q(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),xe?e.default.createElement("div",{className:"banner error",onClick:()=>de("")},xe," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,b?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>m(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},b.artist,b.album?` \xB7 ${b.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ce,{item:b,size:288})),e.default.createElement("h2",{className:"episode-title"},b.title),e.default.createElement("p",{className:"episode-sub"},b.artist,b.album?` \xB7 ${b.album}`:""),e.default.createElement("p",{className:"episode-path",title:b.file},b.location||b.file),e.default.createElement("p",{className:"episode-stats"},Xe(b.duration)," \xB7 ",We(b.mtime)," \xB7 \u5DF2\u542C ",Math.round(Ie(b)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:ae},Y&&u?.id===b.id?"\u6682\u505C":"\u64AD\u653E"),e.default.createElement("button",{className:"btn ghost",onClick:ve,disabled:i==="queued"||i==="running"},z?"\u91CD\u65B0\u8F6C\u5199":i==="queued"||i==="running"?"\u8F6C\u5199\u4E2D\u2026":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Ye,{inline:!0,transcript:z,status:i,elapsed:V,error:qe,position:E,onSeek:Se,onClose:()=>m(null),onStart:ve,target:te,translations:z?.translations?.[te]||null,job:be,onChangeTarget:Ze,onOpenSettings:()=>ye(!0)})))):e.default.createElement(e.default.Fragment,null,y==="all"&&!g&&Te.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Te.map(o=>{let t=Ie(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${u?.id===o.id?"is-current":""}`,onClick:()=>Ve(o,!0)},e.default.createElement(Ce,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ie?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ne.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>R(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},ne.map((o,t)=>{let d=Ie(o),c=u?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${c?"is-current":""} ${Ae(o)?"is-finished":""}`,onClick:()=>Ve(o,!0)},e.default.createElement("span",{className:"col-index row-index"},c&&Y?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ce,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",We(o.mtime)))),e.default.createElement("span",{className:"col-duration row-duration"},Xe(o.duration)),e.default.createElement("span",{className:"col-progress row-progress"},Ae(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(O,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),Fe&&u&&!b?e.default.createElement(Ye,{transcript:z,status:i,elapsed:V,error:qe,position:E,onSeek:Se,onClose:()=>pe(!1),onStart:ve,target:te,translations:z?.translations?.[te]||null,job:be,onChangeTarget:Ze,onOpenSettings:()=>ye(!0)}):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${D?Math.min(100,Math.max(0,E/D*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:D||0,step:.05,value:Math.min(E,D||0),onChange:o=>Se(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},u?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ce,{item:u,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:u.title},u.title),e.default.createElement("div",{className:"now-artist"},u.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Pe(-1)},e.default.createElement(O,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>me(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:ae,disabled:!u&&ne.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(O,{name:Y?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>me(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Pe(1)},e.default.createElement(O,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Fe?"active":""}`,onClick:to,disabled:!u,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(O,{name:"wave",size:15}),e.default.createElement("span",null,z?"\u5B57\u5E55":i==="queued"||i==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},je(E)," / ",je(D)),e.default.createElement("button",{className:"rate-btn",onClick:io,title:"\u64AD\u653E\u901F\u5EA6"},f.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:lo,title:"\u9759\u97F3"},e.default.createElement(O,{name:f.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:f.volume,onChange:o=>Ne(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),we?e.default.createElement($o,{onClose:()=>R(!1),onSubmit:vo}):null,eo?e.default.createElement(Co,{config:_e,onClose:()=>ye(!1),onSave:async o=>{let t=await W(`${h}/translate/settings`,"PUT",o);Be(t),ye(!1),L("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ee?e.default.createElement("div",{className:"toast"},ee):null,e.default.createElement("audio",{ref:$,preload:"metadata",onPlay:()=>G(!0),onPause:()=>{G(!1);let o=$.current;v.current&&o&&o.currentTime>0&&!o.ended&&X(v.current.id,o.currentTime,o.duration||H.current,!0)},onTimeUpdate:po,onLoadedMetadata:co,onEnded:uo,onError:()=>{G(!1),L("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=Ee(require("react"),1);var he="/podwave/api";async function Oe(r){let a=await fetch(r),s=await a.json().catch(()=>({}));if(!a.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${a.status}`);return s}async function Ge(r,a,s){let l=await fetch(r,{method:a,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),p=await l.json().catch(()=>({}));if(!l.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return p}function Mo(r){let a=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(a/3600),l=Math.floor(a%3600/60);return s>0?`${s} \u5C0F\u65F6 ${l} \u5206`:`${l} \u5206\u949F`}function To(r){if(!r)return"";let a=new Date(r),s=l=>String(l).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())} ${s(a.getHours())}:${s(a.getMinutes())}`}function Ke(){let[r,a]=(0,n.useState)([]),[s,l]=(0,n.useState)([]),[p,k]=(0,n.useState)({asrModel:"",translateModel:""}),[N,C]=(0,n.useState)(null),[f,M]=(0,n.useState)(null),[g,A]=(0,n.useState)("api"),[w,q]=(0,n.useState)("https://api.deepseek.com"),[y,F]=(0,n.useState)("deepseek-chat"),[B,m]=(0,n.useState)(""),[u,se]=(0,n.useState)(""),[Y,G]=(0,n.useState)(""),[E,I]=(0,n.useState)(""),[D,_]=(0,n.useState)(""),[ie,j]=(0,n.useState)(""),we=(0,n.useCallback)(async()=>{try{let[i,T,V]=await Promise.all([Oe(`${he}/history`),Oe(`${he}/models`),Oe(`${he}/translate/settings`)]);a(i.items||[]),l(T.models||[]),k(T.config||{asrModel:"",translateModel:""}),C(T.transcribe||null),se(T.config?.asrModel||""),G(T.config?.translateModel||""),M(V),A(V.provider||"api"),q(V.apiBase||"https://api.deepseek.com"),F(V.apiModel||"deepseek-chat"),m(""),j("")}catch(i){j(i.message)}},[]);(0,n.useEffect)(()=>{we()},[we]);let R=i=>{_(i),window.setTimeout(()=>_(""),2400)},xe=async()=>{I("api"),j("");try{let i={provider:g,apiBase:w,apiModel:y};B.trim()&&(i.apiKey=B.trim());let T=await Ge(`${he}/translate/settings`,"PUT",i);M(T),m(""),R("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){j(i.message)}finally{I("")}},de=async()=>{I("models"),j("");try{let i=await Ge(`${he}/models`,"PUT",{asrModel:u,translateModel:Y});k(i.config),l(i.models||[]),C(i.transcribe||null),R("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(i){j(i.message)}finally{I("")}},ee=s.length?s:[{name:p.asrModel||"qwen3-asr-1.7b-8bit",ready:N?.modelReady},{name:p.translateModel||"qwen3-8b-4bit",ready:f?.localReady}],le=ee.filter(i=>/asr/i.test(i.name)),z=ee.filter(i=>!/asr/i.test(i.name)),U=ee;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible"}},n.default.createElement("style",null,$e),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),ie?n.default.createElement("div",{className:"banner error",onClick:()=>j("")},ie):null,D?n.default.createElement("div",{className:"settings-message"},D):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(i=>n.default.createElement("li",{key:i.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},i.title),n.default.createElement("span",{className:"history-meta"},i.artist?`${i.artist} \xB7 `:"",i.duration?`${Mo(i.duration)} \xB7 `:"",i.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",i.segments," \u884C",i.translations?.length?` \xB7 \u5DF2\u7FFB ${i.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},To(i.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:g,onChange:i=>A(i.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:w,onChange:i=>q(i.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:y,onChange:i=>F(i.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:B,onChange:i=>m(i.target.value),placeholder:f?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${f.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"btn primary",onClick:xe,disabled:E==="api"},E==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},f?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:u,onChange:i=>se(i.target.value)},(le.length?le:U).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},N?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Y,onChange:i=>G(i.target.value)},(z.length?z:U).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},f?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"btn primary",onClick:de,disabled:E==="models"},E==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function So({size:r=16}){return K.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},K.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),K.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),K.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),K.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),K.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Po(){return K.default.createElement("div",{className:"podwave-root"},K.default.createElement("style",null,$e),K.default.createElement(Le,null))}function Ao(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Po)),r.slots.inject("sidebar.panellist",()=>r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},So)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Ke))}var Io=["slots"];

return module.exports}})
