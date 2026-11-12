window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var po=Object.create;var le=Object.defineProperty;var co=Object.getOwnPropertyDescriptor;var uo=Object.getOwnPropertyNames;var vo=Object.getPrototypeOf,go=Object.prototype.hasOwnProperty;var mo=(r,i)=>{for(var a in i)le(r,a,{get:i[a],enumerable:!0})},Ke=(r,i,a,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let d of uo(i))!go.call(r,d)&&d!==a&&le(r,d,{get:()=>i[d],enumerable:!(p=co(i,d))||p.enumerable});return r};var Ue=(r,i,a)=>(a=r!=null?po(vo(r)):{},Ke(i||!r||!r.__esModule?le(a,"default",{value:r,enumerable:!0}):a,r)),fo=r=>Ke(le({},"__esModule",{value:!0}),r);var Co={};mo(Co,{apply:()=>zo,inject:()=>$o});module.exports=fo(Co);var S=Ue(require("react"),1);var Ze=`.podwave-root {
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
`;var e=Ue(require("react"),1),v="/podwave/api",ke=[.75,1,1.25,1.5,1.75,2];async function L(r){let i=await fetch(r);if(!i.ok){let a=await i.json().catch(()=>({}));throw new Error(a.error||i.statusText)}return i.json()}async function F(r,i,a){let p=await fetch(r,{method:i,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!p.ok){let d=await p.json().catch(()=>({}));throw new Error(d.error||p.statusText)}return p.json()}function Ne(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),a=Math.floor(i/3600),p=Math.floor(i%3600/60),d=i%60;return a>0?`${a}:${String(p).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${p}:${String(d).padStart(2,"0")}`}function Be(r){if(!r)return"\u2014";let i=Math.floor(r/3600),a=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function He(r){if(!r)return"";let i=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function ho(r){let i=String(r||"").trim();return i?i.charAt(0).toUpperCase():"\xB7"}function wo(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}function pe({item:r,size:i=44,className:a=""}){let p={width:i,height:i};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${a}`,style:p,src:`${v}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${a}`,style:p,"aria-hidden":!0},ho(r&&r.title))}function M({name:r,size:i=18}){let a={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...a},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"check":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));default:return null}}function bo({onSubmit:r,onClose:i}){let[a,p]=(0,e.useState)(""),[d,z]=(0,e.useState)(!1),[$,E]=(0,e.useState)(""),h=(0,e.useRef)(null);return(0,e.useEffect)(()=>{h.current?.focus();let u=j=>{j.key==="Escape"&&i()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[i]),e.default.createElement("div",{className:"overlay",onMouseDown:u=>{u.target===u.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async u=>{if(u.preventDefault(),!(!a.trim()||d)){z(!0),E("");try{await r(a.trim()),i()}catch(j){E(j.message),z(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u3001\u4E0A\u4F20\u6216\u4FEE\u6539\u5B83\u4EEC\u3002"),e.default.createElement("input",{ref:h,value:a,onChange:u=>p(u.target.value),placeholder:"~/Music/\u64AD\u5BA2 \u6216 /Users/\u4F60/Downloads/\u8282\u76EE",spellCheck:!1}),$?e.default.createElement("div",{className:"dialog-error"},$):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:d||!a.trim()},d?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0"))))}function Ve({transcript:r,status:i,elapsed:a,error:p,position:d,onSeek:z,onClose:$,onStart:E,target:h,translations:P,job:u,onChangeTarget:j,onOpenSettings:x,inline:K=!1}){let N=(0,e.useRef)(null),U=r?.segments?.findIndex(m=>d>=m.start&&d<m.end)??-1;(0,e.useEffect)(()=>{if(U<0||!N.current)return;N.current.querySelector(`[data-seg="${U}"]`)?.scrollIntoView({block:"nearest"})},[U]);let X=i==="queued"||i==="running";return e.default.createElement("section",{className:`transcript-panel ${K?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.segments.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:h,onChange:m=>j(m.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:x},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("a",{className:"mini-link",href:`${v}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${v}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,K?null:e.default.createElement("button",{className:"transcript-close",onClick:$,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:N},u?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,u?.status==="error"?e.default.createElement("div",{className:"tr-running err"},u.error):null,r?r.segments.map((m,c)=>e.default.createElement("button",{key:m.id,"data-seg":c,className:`seg-row ${c===U?"active":""}`,onClick:()=>z(m.start)},e.default.createElement("span",{className:"seg-time"},Ne(m.start)),e.default.createElement("span",{className:"seg-text"},m.text,P?.[m.id]?e.default.createElement("span",{className:"seg-trans"},P[m.id]):null))):X?e.default.createElement("div",{className:"transcript-status"},"\u6B63\u5728\u8F6C\u5199\u2026 \u5DF2\u7528 ",Math.round((a||0)/1e3)," \u79D2",e.default.createElement("br",null),"\u957F\u64AD\u5BA2\u9700\u8981\u51E0\u5206\u949F\uFF0C\u5148\u653E\u7740\u542C\u4E5F\u884C\uFF0C\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"):p?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},p),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:E},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:E},"\u5F00\u59CB\u8F6C\u5199"))))}function yo({config:r,onClose:i,onSave:a}){let[p,d]=(0,e.useState)(r?.provider||"api"),[z,$]=(0,e.useState)(""),[E,h]=(0,e.useState)(!1),[P,u]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async x=>{x.preventDefault(),h(!0),u("");try{await a({provider:p,apiKey:z||void 0})}catch(K){u(K.message),h(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:p,onChange:x=>d(x.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:z,onChange:x=>$(x.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),P?e.default.createElement("div",{className:"dialog-error"},P):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:E},"\u4FDD\u5B58"))))}function ze(){let[r,i]=(0,e.useState)([]),[a,p]=(0,e.useState)([]),[d,z]=(0,e.useState)({}),[$,E]=(0,e.useState)({running:!1}),[h,P]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[u,j]=(0,e.useState)(""),[x,K]=(0,e.useState)("recent"),[N,U]=(0,e.useState)("all"),[X,m]=(0,e.useState)(null),[c,$e]=(0,e.useState)(null),[ce,ue]=(0,e.useState)(!1),[W,Z]=(0,e.useState)(0),[A,ve]=(0,e.useState)(0),[Ce,Te]=(0,e.useState)(!0),[Je,ge]=(0,e.useState)(!1),[Me,me]=(0,e.useState)(""),[Se,Ee]=(0,e.useState)(""),[C,G]=(0,e.useState)(null),[w,ne]=(0,e.useState)("none"),[Pe,fe]=(0,e.useState)(0),[je,B]=(0,e.useState)(""),[Ie,Y]=(0,e.useState)(!1),[Qe,De]=(0,e.useState)(null),[H,Xe]=(0,e.useState)(""),[ae,_]=(0,e.useState)({status:"none"}),[We,ie]=(0,e.useState)(!1),b=(0,e.useRef)(null),l=(0,e.useRef)(null),I=(0,e.useRef)(0),O=(0,e.useRef)(h),R=(0,e.useRef)(0),Le=(0,e.useRef)(0),Ae=(0,e.useRef)(0),Ge=(0,e.useRef)(!1);(0,e.useEffect)(()=>{O.current=h},[h]),(0,e.useEffect)(()=>{l.current=c},[c]),(0,e.useEffect)(()=>{I.current=A},[A]);let T=(0,e.useCallback)(o=>{Ee(o),window.clearTimeout(Ae.current),Ae.current=window.setTimeout(()=>Ee(""),2600)},[]),V=(0,e.useCallback)(async()=>{let o=await L(`${v}/episodes`);return i(o.items||[]),p(o.folders||[]),z(o.progress||{}),E(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await L(`${v}/state`);if(o)return;P(t.settings),p(t.folders||[]);let n=await V();if(o)return;let s=t.settings?.lastEpisodeId,g=s?(n.items||[]).find(k=>k.id===s):null;if(g){$e(g),ve(g.duration||0);let k=n.progress?.[g.id]?.position||0;R.current=k>5?k:0,Z(R.current);let re=b.current;re&&(re.src=`${v}/episodes/${g.id}/audio`,re.load(),re.playbackRate=t.settings?.rate||1,re.volume=t.settings?.volume??.9)}Te(!1),Ge.current=!0}catch(t){o||(me(t.message),Te(!1))}})(),()=>{o=!0}},[V]),(0,e.useEffect)(()=>{if(!$.running)return;let o=setInterval(()=>{V().catch(()=>{})},1500);return()=>clearInterval(o)},[$.running,V]),(0,e.useEffect)(()=>{let o=!1;return G(null),B(""),fe(0),c?.id?((async()=>{try{let t=await L(`${v}/episodes/${c.id}/transcript`);if(o)return;ne(t.status),t.status==="done"&&t.transcript?G(t.transcript):t.status==="queued"||t.status==="running"?fe(t.elapsedMs||0):t.status==="error"&&B(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||B(t.message)}})(),()=>{o=!0}):(ne("none"),()=>{o=!0})},[c?.id]),(0,e.useEffect)(()=>{L(`${v}/translate/settings`).then(De).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(w!=="queued"&&w!=="running")return;let o=!1,t=setInterval(async()=>{let n=l.current?.id;if(n)try{let s=await L(`${v}/episodes/${n}/transcript`);if(o)return;ne(s.status),fe(s.elapsedMs||0),s.status==="done"&&s.transcript?(G(s.transcript),Y(!0),T("\u8F6C\u5199\u5B8C\u6210")):s.status==="error"&&B(s.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[w,T]),(0,e.useEffect)(()=>{if(ae.status!=="running")return;let o=!1,t=setInterval(async()=>{let n=l.current?.id;if(n)try{let s=await L(`${v}/episodes/${n}/translate?target=${H}`);if(o)return;if(_(s),s.status==="done"){let g=await L(`${v}/episodes/${n}/transcript`);!o&&g.transcript&&G(g.transcript),T("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[ae.status,H,T]);let q=(0,e.useCallback)((o,t,n,s=!1)=>{if(!o)return;let g=Date.now();!s&&g-Le.current<4e3||(Le.current=g,F(`${v}/progress/${o}`,"PUT",{position:t,duration:n}).catch(()=>{}),z(k=>({...k,[o]:{position:t,duration:n,updatedAt:g}})))},[]),D=(0,e.useCallback)(o=>{P(t=>({...t,...o})),F(`${v}/settings`,"PATCH",o).catch(()=>{})},[]),ee=(0,e.useCallback)(async()=>{if(l.current){B(""),Y(!0);try{let o=await F(`${v}/episodes/${l.current.id}/transcribe`,"POST",{});ne(o.status||"queued")}catch(o){B(o.message)}}},[]),Ye=(0,e.useCallback)(()=>{if(C){Y(o=>!o);return}if(w==="queued"||w==="running"){Y(!0);return}ee()},[C,w,ee]),se=(0,e.useCallback)(async()=>{let o=l.current?.id;if(!o)return;let t=await L(`${v}/episodes/${o}/transcript`);t.transcript&&G(t.transcript)},[]),Oe=(0,e.useCallback)(async o=>{if(l.current?.id){_({status:"running"});try{let t=await F(`${v}/episodes/${l.current.id}/translate`,"POST",{target:o});_(t),t.status==="done"&&(await se(),T("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){_({status:"error",error:t.message})}}},[se,T]),qe=(0,e.useCallback)(async o=>{if(Xe(o),!o)return;let t=C?.translations?.[o];if(t&&Object.keys(t).length){_({status:"done"}),await se();return}await Oe(o)},[C,Oe,se]),y=(0,e.useMemo)(()=>{let o=[...r];return x==="title"?o.sort((t,n)=>t.title.localeCompare(n.title,"zh-Hans-CN")):x==="duration"?o.sort((t,n)=>(n.duration||0)-(t.duration||0)):o.sort((t,n)=>n.mtime-t.mtime),o},[r,x]),J=(0,e.useMemo)(()=>{let o=u.trim().toLowerCase();return y.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let s=d[t.id]?.position||0,g=t.duration||0,k=g?s/g:0;return N==="inprogress"?s>5&&k<.97:N==="finished"?k>=.97:!0})},[y,u,N,d]),xe=(0,e.useMemo)(()=>r.filter(o=>{let t=d[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(d[t.id]?.updatedAt||0)-(d[o.id]?.updatedAt||0)).slice(0,4),[r,d]),_e=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),Re=Math.round(_e/3600*10)/10,eo=N==="inprogress"?"\u7EE7\u7EED\u6536\u542C":N==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",f=X?r.find(o=>o.id===X)||(c?.id===X?c:null):null,oo=Ce?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":$.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${J.length} \u96C6 \xB7 \u5171 ${Re} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,To=(0,e.useMemo)(()=>c?y.findIndex(o=>o.id===c.id):-1,[y,c]),Q=(0,e.useCallback)(()=>{let o=b.current;if(o){if(!l.current){let t=J[0]||y[0];t&&oe(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[J,y]),oe=(0,e.useCallback)((o,t=!0)=>{let n=b.current;if(!n||!o)return;if(l.current&&l.current.id===o.id){t&&Q();return}l.current&&!n.ended&&n.currentTime>1&&q(l.current.id,n.currentTime,n.duration||I.current,!0),l.current=o,$e(o),m(k=>k&&o.id),ve(o.duration||0);let s=d[o.id]?.position||0,g=s>5&&(!o.duration||s<o.duration-10)?s:0;R.current=g,Z(g),n.src=`${v}/episodes/${o.id}/audio`,n.load(),n.playbackRate=O.current.rate||1,n.volume=O.current.volume??.9,t&&n.play().catch(()=>{}),D({lastEpisodeId:o.id})},[d,q,D,Q]),Fe=(0,e.useCallback)((o,t=!0)=>{o&&(oe(o,t),m(o.id))},[oe]),he=(0,e.useCallback)(o=>{let t=b.current;if(!t||!l.current)return;let n=Math.max(0,Math.min(o,t.duration||o));t.currentTime=n,Z(n),q(l.current.id,n,t.duration||I.current,!0)},[q]),te=(0,e.useCallback)(o=>{let t=b.current;if(!t||!l.current)return;let n=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||I.current||0)-1));t.currentTime=n,Z(n)},[]),we=(0,e.useCallback)(o=>{if(!y.length)return;let n=((l.current?y.findIndex(s=>s.id===l.current.id):-1)+o+y.length)%y.length;oe(y[n],!0)},[y,oe]),to=(0,e.useCallback)(()=>{let o=ke.indexOf(O.current.rate),t=ke[(o+1)%ke.length],n=b.current;n&&(n.playbackRate=t),D({rate:t})},[D]),de=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),n=b.current;n&&(n.volume=t),D({volume:t})},[D]),ro=(0,e.useCallback)(()=>{let o=b.current,t=O.current.volume>0?0:.9;o&&(o.volume=t),D({volume:t})},[D]),no=()=>{let o=b.current;!o||!l.current||(Z(o.currentTime),q(l.current.id,o.currentTime,o.duration||I.current))},ao=()=>{let o=b.current,t=l.current;if(!o||!t)return;let n=Number.isFinite(o.duration)?o.duration:t.duration||0;ve(n);let s=R.current;R.current=0,s>0&&s<n-1&&(o.currentTime=s,Z(s))},io=()=>{let o=b.current;l.current&&q(l.current.id,o?.duration||I.current||0,o?.duration||I.current||0,!0),we(1)},so=async o=>{await F(`${v}/folders`,"POST",{path:o}),await V(),T("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},lo=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await F(`${v}/folders`,"DELETE",{path:o}),await V(),T("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){me(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let n=t.target?.tagName;n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),Q()):t.key==="ArrowRight"?(t.preventDefault(),te(15)):t.key==="ArrowLeft"?(t.preventDefault(),te(-15)):t.key==="ArrowUp"?(t.preventDefault(),de(O.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),de(O.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Q,te,de]);let be=o=>{let t=d[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},ye=o=>{let t=d[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:"shell"},e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(M,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.2")),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",xe.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(be).length]].map(([o,t,n])=>e.default.createElement("button",{key:o,className:`nav-item ${N===o?"active":""}`,onClick:()=>U(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},n||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>ge(!0)},e.default.createElement(M,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(M,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},wo(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>lo(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,eo),e.default.createElement("p",{className:"subline"},oo)),e.default.createElement("div",{className:"tools"},e.default.createElement("label",{className:"search"},e.default.createElement(M,{name:"search",size:16}),e.default.createElement("input",{value:u,onChange:o=>j(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:x,onChange:o=>K(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Me?e.default.createElement("div",{className:"banner error",onClick:()=>me("")},Me," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,f?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>m(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},f.artist,f.album?` \xB7 ${f.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(pe,{item:f,size:288})),e.default.createElement("h2",{className:"episode-title"},f.title),e.default.createElement("p",{className:"episode-sub"},f.artist,f.album?` \xB7 ${f.album}`:""),e.default.createElement("p",{className:"episode-path",title:f.file},f.location||f.file),e.default.createElement("p",{className:"episode-stats"},Be(f.duration)," \xB7 ",He(f.mtime)," \xB7 \u5DF2\u542C ",Math.round(ye(f)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Q},ce&&c?.id===f.id?"\u6682\u505C":"\u64AD\u653E"),e.default.createElement("button",{className:"btn ghost",onClick:ee,disabled:w==="queued"||w==="running"},C?"\u91CD\u65B0\u8F6C\u5199":w==="queued"||w==="running"?"\u8F6C\u5199\u4E2D\u2026":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Ve,{inline:!0,transcript:C,status:w,elapsed:Pe,error:je,position:W,onSeek:he,onClose:()=>m(null),onStart:ee,target:H,translations:C?.translations?.[H]||null,job:ae,onChangeTarget:qe,onOpenSettings:()=>ie(!0)})))):e.default.createElement(e.default.Fragment,null,N==="all"&&!u&&xe.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},xe.map(o=>{let t=ye(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${c?.id===o.id?"is-current":""}`,onClick:()=>Fe(o,!0)},e.default.createElement(pe,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),Ce?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):J.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>ge(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},J.map((o,t)=>{let n=ye(o),s=c?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${s?"is-current":""} ${be(o)?"is-finished":""}`,onClick:()=>Fe(o,!0)},e.default.createElement("span",{className:"col-index row-index"},s&&ce?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(pe,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",He(o.mtime)))),e.default.createElement("span",{className:"col-duration row-duration"},Be(o.duration)),e.default.createElement("span",{className:"col-progress row-progress"},be(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(M,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):n>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${n}%`}})):null))}))))),Ie&&c&&!f?e.default.createElement(Ve,{transcript:C,status:w,elapsed:Pe,error:je,position:W,onSeek:he,onClose:()=>Y(!1),onStart:ee,target:H,translations:C?.translations?.[H]||null,job:ae,onChangeTarget:qe,onOpenSettings:()=>ie(!0)}):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${A?Math.min(100,Math.max(0,W/A*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:A||0,step:.05,value:Math.min(W,A||0),onChange:o=>he(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},c?e.default.createElement(e.default.Fragment,null,e.default.createElement(pe,{item:c,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:c.title},c.title),e.default.createElement("div",{className:"now-artist"},c.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>we(-1)},e.default.createElement(M,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>te(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Q,disabled:!c&&J.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(M,{name:ce?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>te(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>we(1)},e.default.createElement(M,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Ie?"active":""}`,onClick:Ye,disabled:!c,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(M,{name:"wave",size:15}),e.default.createElement("span",null,C?"\u5B57\u5E55":w==="queued"||w==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Ne(W)," / ",Ne(A)),e.default.createElement("button",{className:"rate-btn",onClick:to,title:"\u64AD\u653E\u901F\u5EA6"},h.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:ro,title:"\u9759\u97F3"},e.default.createElement(M,{name:h.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:h.volume,onChange:o=>de(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),Je?e.default.createElement(bo,{onClose:()=>ge(!1),onSubmit:so}):null,We?e.default.createElement(yo,{config:Qe,onClose:()=>ie(!1),onSave:async o=>{let t=await F(`${v}/translate/settings`,"PUT",o);De(t),ie(!1),T("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Se?e.default.createElement("div",{className:"toast"},Se):null,e.default.createElement("audio",{ref:b,preload:"metadata",onPlay:()=>ue(!0),onPause:()=>{ue(!1);let o=b.current;l.current&&o&&o.currentTime>0&&!o.ended&&q(l.current.id,o.currentTime,o.duration||I.current,!0)},onTimeUpdate:no,onLoadedMetadata:ao,onEnded:io,onError:()=>{ue(!1),T("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}function ko({size:r=16}){return S.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},S.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),S.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),S.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),S.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),S.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function No(){return S.default.createElement("div",{className:"podwave-root"},S.default.createElement("style",null,Ze),S.default.createElement(ze,null))}function zo(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},No)),r.slots.inject("sidebar.panellist",()=>r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},ko))}var $o=["slots"];

return module.exports}})
