window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Vo=Object.create;var St=Object.defineProperty;var Zo=Object.getOwnPropertyDescriptor;var Xo=Object.getOwnPropertyNames;var Wo=Object.getPrototypeOf,Go=Object.prototype.hasOwnProperty;var Yo=(r,i)=>{for(var s in i)St(r,s,{get:i[s],enumerable:!0})},co=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of Xo(i))!Go.call(r,v)&&v!==s&&St(r,v,{get:()=>i[v],enumerable:!(c=Zo(i,v))||c.enumerable});return r};var Re=(r,i,s)=>(s=r!=null?Vo(Wo(r)):{},co(i||!r||!r.__esModule?St(s,"default",{value:r,enumerable:!0}):s,r)),Qo=r=>co(St({},"__esModule",{value:!0}),r);var un={};Yo(un,{apply:()=>pn,inject:()=>cn});module.exports=Qo(un);var ze=Re(require("react"),1);var Tt=`
.podwave-root[data-pw-theme="light"] {
  color-scheme: light;
  --bg: #fbfbfc;
  --sidebar: #f5f5f7;
  --elev: #ffffff;
  --hover: #f0f0f3;
  --line: #e4e4e9;
  --line-soft: #ededf1;
  --line-strong: #d4d4db;
  --text: #1d1d21;
  --muted: #66666f;
  --dim: #92929b;
  --accent: #b26a12;
  --accent-soft: rgba(178, 106, 18, 0.12);
  --accent-ink: #ffffff;
  --danger: #c0392b;
}

.podwave-root {
  position: relative;
  container-type: inline-size;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  --bg: #0c0c0f;
  --sidebar: #09090c;
  --elev: #131318;
  --hover: var(--hover);
  --line: #212129;
  --line-soft: var(--line-soft);
  --line-strong: var(--line-strong);
  --text: var(--text);
  --muted: #8f8f9a;
  --dim: #63636d;
  --accent: var(--accent);
  --accent-soft: rgba(230, 165, 74, 0.12);
  --accent-ink: var(--accent-ink);
  --danger: var(--danger);
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
  color: var(--danger);
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
  background: var(--line);
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
  background: var(--elev);
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
  background: var(--sidebar);
  border-top: 1px solid var(--line);
  padding: 0 22px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 20;
}

.podwave-root .seek-wrap {
  position: relative;
  height: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
  border-radius: 6px;
  outline: none;
}

.podwave-root .seek-wrap:focus-visible { box-shadow: 0 0 0 2px var(--line); }

.podwave-root .seek-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4px;
  margin-top: -2px;
  background: var(--line);
  border-radius: 4px;
  overflow: hidden;
  pointer-events: none;
}

.podwave-root .seek-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 4px;
}

.podwave-root .seek-thumb {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  margin-top: -6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px rgba(12, 12, 15, 0.9);
  pointer-events: none;
  transition: transform 0.1s ease;
}

.podwave-root .seek-wrap:hover .seek-thumb { transform: scale(1.15); }

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
  color: var(--accent-ink);
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

.podwave-root .rate-btn:hover { color: var(--text); border-color: var(--line-strong); }

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
  background: var(--elev);
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
  background: var(--bg);
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

.podwave-root .btn.primary { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
.podwave-root .btn.primary:hover { filter: brightness(1.05); }
.podwave-root .btn.primary:disabled { opacity: 0.45; cursor: default; }

.podwave-root .btn.ghost { background: transparent; border-color: var(--line); color: var(--muted); }
.podwave-root .btn.ghost:hover { color: var(--text); border-color: var(--line-strong); }

.podwave-root .toast {
  position: absolute;
  left: 50%;
  bottom: calc(var(--player-h) + 14px);
  transform: translateX(-50%);
  background: var(--line-soft);
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 12.5px;
  padding: 9px 14px;
  border-radius: 8px;
  z-index: 30;
}

/* ---------- scrollbars / responsive ---------- */

.podwave-root ::-webkit-scrollbar { width: 10px; height: 10px; }
.podwave-root ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 6px; border: 2px solid var(--bg); }
.podwave-root ::-webkit-scrollbar-thumb:hover { background: var(--line-strong); }
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
  border: 1px solid var(--line-strong);
  background: var(--hover);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;
}
.podwave-root .subs-btn:hover { background: var(--hover); }
.podwave-root .subs-btn.active { border-color: var(--accent); color: var(--accent); }
.podwave-root .subs-btn:disabled { opacity: .45; cursor: default; }

.podwave-root .transcript-panel {
  position: absolute;
  right: 18px;
  bottom: 104px;
  width: min(560px, 52%);
  max-height: 58%;
  display: flex;
  flex-direction: column;
  background: var(--elev);
  border: 1px solid var(--line);
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
  border-bottom: 1px solid var(--line);
}
.podwave-root .transcript-head h3 { margin: 0; font-size: 13px; font-weight: 600; color: var(--text); }
.podwave-root .transcript-meta { color: var(--muted); font-size: 12px; }
.podwave-root .transcript-actions { margin-left: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.podwave-root .mini-link {
  color: var(--text);
  font-size: 12px;
  text-decoration: none;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  padding: 3px 8px;
}
.podwave-root .mini-link:hover { border-color: var(--accent); color: var(--accent); }
.podwave-root .transcript-close { border: 0; background: none; color: var(--muted); cursor: pointer; font-size: 16px; line-height: 1; padding: 2px 4px; }
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
.podwave-root .seg-row:hover { background: var(--hover); }
.podwave-root .seg-row.active { background: var(--accent-soft); }
.podwave-root .seg-time { flex: none; width: 56px; color: var(--muted); font-variant-numeric: tabular-nums; font-size: 12px; padding-top: 2px; }
.podwave-root .seg-text { font-size: 13px; line-height: 1.55; color: var(--text); }
.podwave-root .seg-row.active .seg-text { color: var(--text); }
.podwave-root .transcript-status { padding: 16px; font-size: 13px; color: var(--muted); line-height: 1.6; }
.podwave-root .transcript-status .err { color: var(--danger); white-space: pre-wrap; }


/* \u7FFB\u8BD1 */
.podwave-root .tr-select {
  height: 26px;
  border-radius: 6px;
  border: 1px solid var(--line-strong);
  background: var(--hover);
  color: var(--text);
  font-size: 12px;
  padding: 0 4px;
}
.podwave-root .seg-trans { display: block; margin-top: 2px; color: var(--muted); font-size: 12px; line-height: 1.5; }
.podwave-root .tr-running { padding: 8px 12px; color: var(--accent); font-size: 12px; }
.podwave-root .tr-running.err { color: var(--danger); white-space: pre-wrap; }
.podwave-root .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; font-size: 12px; color: var(--muted); }
.podwave-root .field select, .podwave-root .field input {
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--line-strong);
  background: var(--hover);
  color: var(--text);
  padding: 0 10px;
  font-size: 13px;
}

/* \u5355\u96C6\u8BE6\u60C5\uFF1A\u5C01\u9762 + \u5B57\u5E55\u5E76\u6392 */
.podwave-root .detail-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.podwave-root .back-link { border: 0; background: none; color: #9a9aa6; font-size: 13px; padding: 4px 0; cursor: pointer; }
.podwave-root .back-link:hover { color: var(--text); }
.podwave-root .detail-count { color: var(--muted); font-size: 12px; }
.podwave-root .episode-view { display: flex; gap: 26px; align-items: flex-start; }
.podwave-root .episode-left { flex: 0 0 240px; width: 240px; display: flex; flex-direction: column; gap: 8px; }
.podwave-root .episode-cover { width: 100%; aspect-ratio: 1 / 1; border-radius: 14px; overflow: hidden; border: 1px solid var(--line); background: var(--hover); }
.podwave-root .episode-cover .cover { width: 100% !important; height: 100% !important; object-fit: cover; border-radius: 0; }
.podwave-root .episode-title { margin: 8px 0 0; font-size: 19px; line-height: 1.35; color: var(--text); }
.podwave-root .episode-sub { margin: 0; color: #b9b9c4; font-size: 13px; }
.podwave-root .episode-path { margin: 0; color: var(--muted); font-size: 11.5px; word-break: break-all; }
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
.podwave-root .podwave-settings .field-row select option { color: var(--text); background: #2c2c2e; }
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
  grid-template-columns: 46px minmax(0, 1fr);
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

/* ---- P2\uFF1A\u5B57\u5E55\u884C\u7F16\u8F91 ---- */
.podwave-root .seg-row { align-items: flex-start; }
.podwave-root .seg-row.is-editing { background: #1b1b23; cursor: default; }
.podwave-root .seg-tools { display: flex; gap: 2px; margin-left: auto; opacity: 0; transition: opacity .12s ease; }
.podwave-root .seg-row:hover .seg-tools, .podwave-root .seg-row:focus-within .seg-tools { opacity: 1; }
.podwave-root .seg-tool { border: 0; background: none; color: var(--muted); font-size: 12px; padding: 1px 4px; cursor: pointer; border-radius: 4px; }
.podwave-root .seg-tool:hover { color: var(--accent); background: rgba(230,165,74,.12); }
.podwave-root .seg-edit { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 0; }
.podwave-root .seg-edit textarea { width: 100%; resize: vertical; border: 1px solid var(--line-strong); border-radius: 7px; background: #101015; color: #ececf2; font: inherit; font-size: 13px; line-height: 1.55; padding: 7px 9px; }
.podwave-root .seg-edit textarea:focus { outline: none; border-color: rgba(230,165,74,.6); }
.podwave-root .seg-edit-actions { display: flex; gap: 12px; }
.podwave-root .tr-issues { margin: 6px 12px 8px; padding: 8px 10px; border: 1px solid rgba(224,122,95,.35); border-radius: 8px; background: rgba(224,122,95,.08); color: #e0927c; font-size: 12px; line-height: 1.6; }

.podwave-root .seg-speaker { flex: none; align-self: flex-start; margin-top: 1px; padding: 1px 7px; border-radius: 999px; font-size: 11px; line-height: 1.5; background: #1c1c24; color: #9aa4b2; white-space: nowrap; }
.podwave-root .spk-0 { color: #7aa2f7; background: rgba(122, 162, 247, 0.12); }
.podwave-root .spk-1 { color: #9ece6a; background: rgba(158, 206, 106, 0.12); }
.podwave-root .spk-2 { color: #e0af68; background: rgba(224, 175, 104, 0.12); }
.podwave-root .spk-3 { color: #bb9af7; background: rgba(187, 154, 247, 0.12); }
.podwave-root .spk-4 { color: #f7768e; background: rgba(247, 118, 142, 0.12); }

/* P4 \u5A92\u4F53\u5E93\uFF1A\u7B5B\u9009\u3001\u6536\u85CF\u3001\u79FB\u9664 */
.podwave-root .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 2px 0 14px; }
.podwave-root .chip { padding: 4px 11px; border-radius: 999px; border: 1px solid var(--line); background: transparent; color: var(--muted); font-size: 12px; cursor: pointer; }
.podwave-root .chip:hover { color: var(--text); border-color: #3a3a44; }
.podwave-root .chip.is-on { background: rgba(230, 165, 74, 0.12); border-color: rgba(230, 165, 74, 0.45); color: #f0c98a; }
.podwave-root .row-star { flex: none; width: 22px; text-align: center; color: #34343e; font-size: 15px; line-height: 1; cursor: pointer; }
.podwave-root .row-star:hover { color: #c8a45c; }
.podwave-root .row-star.is-on { color: var(--accent); }
.podwave-root .btn.danger { color: #f08a8a; border-color: rgba(240, 138, 138, 0.35); }

.podwave-root .tr-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 2px 0 8px;
  padding: 7px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #15151b;
  color: #a9a9b4;
  font-size: 12px;
  position: sticky;
  top: 0;
  z-index: 2;
}

/* \u73AF\u5883\u4E0E\u6A21\u578B\u5B89\u88C5 */
.podwave-root .setup-platform {
  margin: 2px 0 12px;
  font-size: 12px;
  color: var(--muted);
}
.podwave-root .setup-components {
  list-style: none;
  margin: 0 0 14px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.podwave-root .setup-component {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
}
.podwave-root .setup-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b05252;
  flex: none;
}
.podwave-root .setup-component.ready .setup-dot {
  background: #4f9c6f;
}
.podwave-root .setup-component-label {
  color: var(--text);
  min-width: 148px;
}
.podwave-root .setup-component-detail {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.podwave-root .setup-component-size {
  flex: none;
}
.podwave-root .setup-job {
  margin-top: 14px;
}
.podwave-root .setup-job-line {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
}
.podwave-root .setup-progress {
  height: 4px;
  background: #1d1d24;
  border-radius: 2px;
  overflow: hidden;
}
.podwave-root .setup-progress span {
  display: block;
  height: 100%;
  background: var(--accent);
  transition: width 0.3s;
}
.podwave-root .setup-summary {
  margin: 8px 0 0;
  padding-left: 16px;
  font-size: 12px;
  color: var(--muted);
}

/* \u5B89\u88C5\u8BA1\u5212\u9884\u89C8 */
.podwave-root .setup-plan { margin: 10px 0 4px; font-size: 12px; color: var(--muted); }
.podwave-root .setup-plan summary { cursor: pointer; color: var(--text); font-size: 13px; }
.podwave-root .setup-plan ul { list-style: none; margin: 8px 0 0; padding: 0; }
.podwave-root .setup-plan li { display: flex; justify-content: space-between; gap: 16px; padding: 4px 0; border-bottom: 1px solid color-mix(in srgb, var(--line) 55%, transparent); }
.podwave-root .setup-plan li:last-child { border-bottom: 0; }

.podwave-root .rate-wrap { position: relative; display: inline-flex; }
.podwave-root .rate-menu {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 72px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #17171c;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
}
.podwave-root .rate-menu button {
  height: 26px;
  padding: 0 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  text-align: left;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}
.podwave-root .rate-menu button:hover { background: #22222a; color: var(--text); }
.podwave-root .rate-menu button.is-on { color: var(--accent); }

.podwave-root .now-open {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
}
.podwave-root .now-open:hover .now-title { color: var(--accent); }
.podwave-root .now-open:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.podwave-root .now-open .now-text { min-width: 0; }

/* \u5B57\u5E55\u641C\u7D22\u7ED3\u679C */
.podwave-root .search-hits { border: 1px solid var(--line); border-radius: 10px; margin: 0 0 18px; overflow: hidden; background: var(--elev); }
.podwave-root .search-hits .list-head { display: flex; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid var(--line); font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
.podwave-root .hit-row { display: grid; grid-template-columns: 54px minmax(0, 1fr) auto; gap: 10px; align-items: center; width: 100%; padding: 8px 12px; background: none; border: 0; border-bottom: 1px solid var(--line-soft); color: inherit; text-align: left; cursor: pointer; font: inherit; }
.podwave-root .hit-row:last-child { border-bottom: 0; }
.podwave-root .hit-row:hover { background: var(--hover); }
.podwave-root .hit-time { font-variant-numeric: tabular-nums; color: var(--muted); font-size: 12px; }
.podwave-root .hit-text { font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.podwave-root .hit-title { font-size: 11px; color: var(--dim); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* \u5C0F\u5B87\u5B99 */
.podwave-root .hint-text { font-size: 12px; color: var(--dim); line-height: 1.6; }
.podwave-root .xyz-panel { padding: 4px 2px 72px; max-width: 1040px; }
.podwave-root .xyz-hint { color: var(--muted); font-size: 13px; margin: 10px 0; }
.podwave-root .xyz-error { color: var(--danger); font-size: 13px; margin-top: 12px; }
.podwave-root .xyz-notice { color: var(--muted); font-size: 13px; line-height: 1.7; background: var(--line-soft); border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px; }
.podwave-root .xyz-login { max-width: 560px; background: var(--elev); border: 1px solid var(--line); border-radius: 14px; padding: 22px 24px; margin-top: 12px; }
.podwave-root .xyz-login h2 { font-size: 18px; margin: 0 0 10px; }
.podwave-root .xyz-fields { display: flex; gap: 10px; align-items: flex-end; margin-top: 14px; }
.podwave-root .xyz-fields label, .podwave-root .xyz-advanced label { flex: 1; display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--muted); }
.podwave-root .xyz-fields input, .podwave-root .xyz-advanced input { background: var(--bg); border: 1px solid var(--line); border-radius: 8px; color: var(--text); padding: 9px 11px; font-size: 13px; outline: none; }
.podwave-root .xyz-fields input:focus, .podwave-root .xyz-advanced input:focus { border-color: var(--accent); }
.podwave-root .xyz-link { background: none; border: 0; color: var(--accent); font-size: 12px; padding: 12px 0 0; cursor: pointer; }
.podwave-root .xyz-advanced { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.podwave-root .xyz-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin: 4px 0 14px; }
.podwave-root .xyz-podcast-title { font-size: 19px; font-weight: 650; }
.podwave-root .xyz-subs { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; margin-top: 12px; }
.podwave-root .xyz-sub-card { display: flex; gap: 12px; align-items: center; text-align: left; background: var(--elev); border: 1px solid var(--line); border-radius: 12px; padding: 10px; cursor: pointer; color: var(--text); }
.podwave-root .xyz-sub-card:hover { background: var(--hover); }
.podwave-root .xyz-cover { width: 56px; height: 56px; border-radius: 9px; object-fit: cover; background: var(--line-soft); flex: none; }
.podwave-root .xyz-cover-empty { background: var(--line-soft); }
.podwave-root .xyz-sub-text { min-width: 0; }
.podwave-root .xyz-sub-title { font-size: 13.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.podwave-root .xyz-sub-meta { font-size: 12px; color: var(--muted); margin-top: 3px; }
.podwave-root .xyz-eps { display: flex; flex-direction: column; gap: 8px; }
.podwave-root .xyz-ep { display: flex; align-items: center; gap: 14px; justify-content: space-between; background: var(--elev); border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px; }
.podwave-root .xyz-ep.is-current { border-color: var(--accent); }
.podwave-root .xyz-ep-main { min-width: 0; }
.podwave-root .xyz-ep-title { font-size: 14px; font-weight: 600; }
.podwave-root .xyz-ep-meta { font-size: 12px; color: var(--muted); margin-top: 4px; }
.podwave-root .xyz-more { align-self: center; margin-top: 8px; }
.podwave-root .xyz-steps { margin: 14px 0 6px; padding-left: 20px; color: var(--muted); font-size: 13px; line-height: 1.9; }
.podwave-root .xyz-steps code { background: var(--line-soft); border: 1px solid var(--line); border-radius: 4px; padding: 1px 5px; font-size: 12px; }
.podwave-root .xyz-actions { margin-top: 12px; }
.podwave-root .xyz-public {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.podwave-root .xyz-public h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}
.podwave-root .xyz-public .xyz-eps {
  margin-top: 6px;
}
.podwave-root .xyz-head-actions { display: flex; gap: 8px; align-items: center; }
.podwave-root .episode-notes { margin-top: 12px; border-top: 1px solid var(--line); padding-top: 10px; }
.podwave-root .notes-head { background: none; border: 0; color: var(--accent); font-size: 12px; padding: 0; cursor: pointer; }
.podwave-root .notes-head:hover { text-decoration: underline; }
.podwave-root .notes-body { margin: 8px 0 0; color: var(--muted); font-size: 12.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; max-height: 96px; overflow: hidden; mask-image: linear-gradient(#000 55%, transparent); }
.podwave-root .episode-notes.is-open .notes-body { max-height: none; mask-image: none; }
`;var e=Re(require("react"),1);var x=Re(require("react"),1);function Q({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return x.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},x.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return x.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},x.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),x.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return x.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},x.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),x.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return x.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},x.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),x.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return x.default.createElement("svg",{...s},x.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),x.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),x.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),x.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return x.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},x.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),x.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),x.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),x.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),x.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return x.default.createElement("svg",{...s},x.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var qt=Re(require("react"),1);function Me(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function Kt(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Ft(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function uo(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function mo(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Ro="/podwave/api";function it({item:r,size:i=44,className:s=""}){let c={width:i,height:i};return r&&r.hasCover?qt.default.createElement("img",{className:`cover ${s}`,style:c,src:`${Ro}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):qt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},uo(r&&r.title))}var u=Re(require("react"),1);var vo="/podwave/api";function Mt({transcript:r,status:i,progress:s,stage:c,chunks:v,queued:g,elapsed:f,error:T,position:M,onSeek:J,onClose:U,onStart:oe,onCancel:S,target:K,job:y,onChangeTarget:b,onOpenSettings:ue,inline:ne=!1,editingId:me=null,draft:we="",onDraftChange:_,onEditLine:ye,onSaveLine:R,onCancelEdit:ve,onSplitLine:ie,onMergeLine:V,onUndo:k,onValidate:E,issues:re=[]}){let le=(0,u.useRef)(null),Z=(0,u.useRef)(null),X=r?.lines?.findIndex(w=>M>=w.start&&M<w.end)??-1;(0,u.useEffect)(()=>{if(X<0||!le.current)return;le.current.querySelector(`[data-seg="${X}"]`)?.scrollIntoView({block:"nearest"})},[X]);let F=i==="queued"||i==="running";return u.default.createElement("section",{className:`transcript-panel ${ne?"inline":""}`},u.default.createElement("header",{className:"transcript-head"},u.default.createElement("h3",null,"\u5B57\u5E55"),r?u.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,u.default.createElement("div",{className:"transcript-actions"},u.default.createElement("select",{className:"tr-select",value:K,onChange:w=>b(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},u.default.createElement("option",{value:""},"\u5BF9\u7167"),u.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),u.default.createElement("option",{value:"en"},"English")),u.default.createElement("button",{className:"mini-link",onClick:ue},"\u8BBE\u7F6E"),r?u.default.createElement(u.default.Fragment,null,u.default.createElement("button",{className:"mini-link",onClick:k,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),u.default.createElement("button",{className:"mini-link",onClick:E,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),u.default.createElement("a",{className:"mini-link",href:`${vo}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),u.default.createElement("a",{className:"mini-link",href:`${vo}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,ne?null:u.default.createElement("button",{className:"transcript-close",onClick:U,title:"\u6536\u8D77"},"\xD7"))),u.default.createElement("div",{className:"transcript-body",ref:le},r&&F?u.default.createElement("div",{className:"tr-strip"},u.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),S?u.default.createElement("button",{className:"seg-tool",onClick:S},"\u53D6\u6D88"):null):null,r&&re?.length?u.default.createElement("div",{className:"tr-issues"},re.slice(0,5).map(w=>u.default.createElement("div",{key:w},"\xB7 ",w)),re.length>5?u.default.createElement("div",null,"\u2026\u5171 ",re.length," \u6761"):null):null,y?.status==="running"?u.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,y?.status==="error"?u.default.createElement("div",{className:"tr-running err"},y.error):null,r?r.lines.map((w,ae)=>u.default.createElement("div",{key:w.id,"data-seg":ae,className:`seg-row ${ae===X?"active":""} ${me===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Me(w.start)}`,onClick:()=>J(w.start),onKeyDown:D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),J(w.start))}},u.default.createElement("span",{className:"seg-time"},Me(w.start)),me===w.id?u.default.createElement("span",{className:"seg-edit",onClick:D=>D.stopPropagation()},u.default.createElement("textarea",{ref:Z,value:we,rows:Math.min(4,Math.max(2,Math.ceil((we.length||1)/40))),onChange:D=>_(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.metaKey||D.ctrlKey)&&R(w.id),D.key==="Escape"&&ve()}}),u.default.createElement("span",{className:"seg-edit-actions"},u.default.createElement("button",{className:"seg-tool",onClick:()=>R(w.id)},"\u4FDD\u5B58"),u.default.createElement("button",{className:"seg-tool",onClick:()=>ie(w.id,Z.current?.selectionStart??Math.floor(we.length/2))},"\u62C6\u5206"),u.default.createElement("button",{className:"seg-tool",onClick:ve},"\u53D6\u6D88"))):u.default.createElement(u.default.Fragment,null,w.speaker!=null?u.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},r.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,u.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[K]?u.default.createElement("span",{className:"seg-trans"},w.translations[K]):null),u.default.createElement("span",{className:"seg-tools"},u.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:D=>{D.stopPropagation(),ye(w)}},"\u270E"),ae<r.lines.length-1?u.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:D=>{D.stopPropagation(),V(w.id)}},"\u21E3"):null)))):F?u.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?u.default.createElement("span",{className:"tx-progress"},u.default.createElement("span",{style:{width:`${s.percent}%`}})):null,u.default.createElement("br",null),u.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),u.default.createElement("br",null),S?u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:S},"\u53D6\u6D88\u8F6C\u5199"):null):T?u.default.createElement("div",{className:"transcript-status"},u.default.createElement("span",{className:"err"},T),u.default.createElement("br",null),u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:oe},"\u91CD\u8BD5")):u.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",u.default.createElement("br",null),u.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:oe},"\u5F00\u59CB\u8F6C\u5199"))))}var l=Re(require("react"),1),fe="/podwave/api";async function et(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function mt(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function go(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function fo(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Ht({onPlay:r,currentId:i}){let[s,c]=(0,l.useState)(null),[v,g]=(0,l.useState)(""),[f,T]=(0,l.useState)(""),[M,J]=(0,l.useState)(""),[U,oe]=(0,l.useState)(""),[S,K]=(0,l.useState)(0),[y,b]=(0,l.useState)(!1),[ue,ne]=(0,l.useState)(""),[me,we]=(0,l.useState)(""),[_,ye]=(0,l.useState)([]),[R,ve]=(0,l.useState)(!1),[ie,V]=(0,l.useState)(null),[k,E]=(0,l.useState)([]),[re,le]=(0,l.useState)(null),[Z,X]=(0,l.useState)(!1),[F,w]=(0,l.useState)(""),[ae,D]=(0,l.useState)(null),[Pe,$e]=(0,l.useState)(!1),he=(0,l.useCallback)(async(p=!1)=>{ve(!0);try{let I=await et(`${fe}/xyz/subscriptions${p?"?refresh=1":""}`);ye(I.items||[])}catch(I){q(I)}finally{ve(!1)}},[]);function q(p){let I=String(p?.message||"");if(I.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Se=>({...Se||{},loggedIn:!1})),ye([]),V(null),E([]),ne(""),g("\u767B\u5F55\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u7C98\u8D34 refresh token \u6216 access token\u3002");return}g(Ae(I))}function Ae(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6539\u7528 refresh token \u767B\u5F55\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function Oe(){try{await mt(`${fe}/xyz/open-web`,{})}catch(p){q(p)}}(0,l.useEffect)(()=>{et(`${fe}/xyz/status`).then(p=>{c(p),p.loggedIn&&he()}).catch(p=>q(p))},[he]),(0,l.useEffect)(()=>{if(!S)return;let p=setInterval(()=>K(I=>Math.max(0,I-1)),1e3);return()=>clearInterval(p)},[S]);async function $(){if(g(""),!/^1\d{10}$/.test(M.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}T("send");try{let p=await mt(`${fe}/xyz/auth/send-code`,{phone:M.trim(),areaCode:"+86"});K(60),p.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){q(p)}finally{T("")}}async function de(){if(g(""),!M.trim()||!U.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}T("login");try{await mt(`${fe}/xyz/auth/login`,{phone:M.trim(),code:U.trim(),areaCode:"+86"});let p=await et(`${fe}/xyz/status`);c(p),await he()}catch(p){q(p)}finally{T("")}}async function G(){if(g(""),!ue.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}T("token");try{await mt(`${fe}/xyz/auth/token`,{refreshToken:ue.trim(),deviceId:me.trim()});let p=await et(`${fe}/xyz/status`);c(p),ne(""),await he()}catch(p){q(p)}finally{T("")}}async function Ce(){T("logout");try{await mt(`${fe}/xyz/auth/logout`,{}),c({loggedIn:!1}),ye([]),V(null),E([])}catch(p){q(p)}finally{T("")}}async function Be(p){V(p),E([]),le(null),X(!0),g("");try{let I=await et(`${fe}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);E(I.items||[]),le(I.loadMoreKey||null)}catch(I){q(I)}finally{X(!1)}}async function Ie(){if(!(!ie||!re||Z)){X(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:re}),I=await et(`${fe}/xyz/podcast/${encodeURIComponent(ie.pid)}/episodes?${p}`);E(Se=>[...Se,...I.items||[]]),le(I.loadMoreKey||null)}catch(p){q(p)}finally{X(!1)}}}async function Ue(p){T(`play:${p.eid}`),g("");try{await r(p)}catch(I){q(I)}finally{T("")}}async function W(){if(g(""),!F.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}$e(!0);try{let p=await et(`${fe}/xyz/public/podcast?url=${encodeURIComponent(F.trim())}`);D(p.podcast)}catch(p){q(p)}finally{$e(!1)}}async function Y(p){T(`pplay:${p.eid}`),g("");try{await r({...p,public:!0})}catch(I){q(I)}finally{T("")}}return s?s.loggedIn?ie?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{V(null),E([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},ie.title)),Z&&k.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},k.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},fo(p.pubDate)," \xB7 ",go(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${p.eid}`,onClick:()=>Ue(p)},f===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!Z&&k.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,re?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:Z,onClick:Ie},Z?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:R,onClick:()=>he(!0)},R?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:Ce},"\u9000\u51FA\u767B\u5F55"))),R?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},_.map(p=>l.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>Be(p)},p.cover?l.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},p.title),l.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!R&&_.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u7528\u4F60\u8D26\u53F7\u7684 refresh token \u8BFB\u53D6\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u7528\u624B\u673A App \u626B\u7801\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:Oe},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:ue,onChange:p=>ne(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:pasteToken},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:me,onChange:p=>we(p.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:G},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>b(p=>!p)},y?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),y?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:M,onChange:p=>J(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||S>0,onClick:$},S>0?`${S}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:U,onChange:p=>oe(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:de},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u4EFB\u610F\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:F,onChange:p=>w(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Pe,onClick:W},Pe?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ae?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},ae.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ae.author)),ae.episodes.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},fo(p.pubDate)," \xB7 ",go(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${p.eid}`,onClick:()=>Y(p)},f===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?l.default.createElement("p",{className:"xyz-error"},v):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function ho(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var h="/podwave/api",en=[.5,.75,1,1.25,1.5,1.75,2];async function pe(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function te(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}function tn({onSubmit:r,onPick:i,onClose:s}){let[c,v]=(0,e.useState)(""),[g,f]=(0,e.useState)(!1),[T,M]=(0,e.useState)(!1),[J,U]=(0,e.useState)(""),oe=(0,e.useRef)(null);return(0,e.useEffect)(()=>{oe.current?.focus();let y=b=>{b.key==="Escape"&&s()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:y=>{y.target===y.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async y=>{if(y.preventDefault(),!(!c.trim()||g)){f(!0),U("");try{await r(c.trim()),s()}catch(b){U(b.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!T){M(!0),U("");try{let y=await i();if(y?.canceled)return;if(y?.error)throw new Error(y.error);y?.path&&(await r(y.path),s())}catch(y){U(y.message)}finally{M(!1)}}},disabled:T,autoFocus:!0},T?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:oe,value:c,onChange:y=>v(y.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),J?e.default.createElement("div",{className:"dialog-error"},J):null))}function on({config:r,onClose:i,onSave:s}){let[c,v]=(0,e.useState)(r?.provider||"api"),[g,f]=(0,e.useState)(""),[T,M]=(0,e.useState)(!1),[J,U]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:S=>{S.target===S.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async S=>{S.preventDefault(),M(!0),U("");try{await s({provider:c,apiKey:g||void 0})}catch(K){U(K.message),M(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:S=>v(S.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:S=>f(S.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),J?e.default.createElement("div",{className:"dialog-error"},J):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:T},"\u4FDD\u5B58"))))}function Jt(){let[r,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[v,g]=(0,e.useState)({}),[f,T]=(0,e.useState)({running:!1}),[M,J]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[U,oe]=(0,e.useState)(!1),[S,K]=(0,e.useState)(!1),[y,b]=(0,e.useState)(""),[ue,ne]=(0,e.useState)([]),[me,we]=(0,e.useState)("recent"),[_,ye]=(0,e.useState)("all"),[R,ve]=(0,e.useState)("all"),[ie,V]=(0,e.useState)(null),[k,E]=(0,e.useState)(null),[re,le]=(0,e.useState)(!1),[Z,X]=(0,e.useState)(0),[F,w]=(0,e.useState)(0),[ae,D]=(0,e.useState)(!0),[Pe,$e]=(0,e.useState)(!1),[he,q]=(0,e.useState)(""),[Ae,Oe]=(0,e.useState)(""),[$,de]=(0,e.useState)(null),[G,Ce]=(0,e.useState)("none"),[Be,Ie]=(0,e.useState)(0),[Ue,W]=(0,e.useState)(""),[Y,p]=(0,e.useState)(!1),[I,Se]=(0,e.useState)(null),[L,vt]=(0,e.useState)(""),[tt,Ke]=(0,e.useState)({status:"none"}),[se,ot]=(0,e.useState)(!1),[gt,ft]=(0,e.useState)(!1),[ht,Fe]=(0,e.useState)(!1),[ke,dt]=(0,e.useState)(null),[qe,xt]=(0,e.useState)(!1),[He,bt]=(0,e.useState)([]),[Je,nt]=(0,e.useState)(!1),[a,z]=(0,e.useState)([]),[A,Ve]=(0,e.useState)(null),[De,Ze]=(0,e.useState)(""),[pt,wt]=(0,e.useState)([]),ee=(0,e.useRef)(null),Xe=(0,e.useRef)(""),Zt=(0,e.useRef)(null),C=(0,e.useRef)(null),xe=(0,e.useRef)(0),rt=(0,e.useRef)(M),We=(0,e.useRef)(0),Xt=(0,e.useRef)(0),Wt=(0,e.useRef)(0),Gt=(0,e.useRef)(0),bo=(0,e.useRef)(!1),Dt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{K(!1)},[ie]),(0,e.useEffect)(()=>{rt.current=M},[M]),(0,e.useEffect)(()=>{C.current=k},[k]),(0,e.useEffect)(()=>{xe.current=F},[F]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await pe(`${h}/ui-settings`);!t&&o&&ft(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Yt=(0,e.useCallback)(()=>{ft(t=>{let o=!t;return fetch(`${h}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),N=(0,e.useCallback)(t=>{Oe(t),window.clearTimeout(Gt.current),Gt.current=window.setTimeout(()=>Oe(""),2600)},[]),Ne=(0,e.useCallback)(async()=>{let t=await pe(`${h}/episodes`);return i(t.items||[]),c(t.folders||[]),g(t.progress||{}),T(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await pe(`${h}/health`).catch(()=>({}));o.mediaBase&&(Xe.current=o.mediaBase);let d=await pe(`${h}/state`);if(t)return;J(d.settings),c(d.folders||[]);let m=await Ne();if(t)return;let P=d.settings?.lastEpisodeId,O=P?(m.items||[]).find(Qe=>Qe.id===P):null;if(O){E(O),w(O.duration||0);let Qe=m.progress?.[O.id]?.position||0;We.current=Qe>5?Qe:0,X(We.current);let _e=ee.current;_e&&(_e.src=Xe.current?`${Xe.current}/episodes/${O.id}/audio`:`${h}/episodes/${O.id}/audio`,_e.load(),_e.playbackRate=d.settings?.rate||1,_e.volume=d.settings?.volume??.9)}D(!1),bo.current=!0}catch(o){t||(q(o.message),D(!1))}})(),()=>{t=!0}},[Ne]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{Ne().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,Ne]),(0,e.useEffect)(()=>{let t=!1;return de(null),W(""),Ie(0),k?.id?((async()=>{try{let o=await pe(`${h}/episodes/${k.id}/transcript`);if(t)return;Ce(o.status),dt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?de(o.transcript):o.status==="queued"||o.status==="running"?(Ie(o.elapsedMs||0),o.transcript&&de(o.transcript)):o.status==="error"&&W(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||W(o.message)}})(),()=>{t=!0}):(Ce("none"),()=>{t=!0})},[k?.id]),(0,e.useEffect)(()=>{pe(`${h}/translate/settings`).then(Se).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(G!=="queued"&&G!=="running")return;let t=!1,o=setInterval(async()=>{let d=C.current?.id;if(d)try{let m=await pe(`${h}/episodes/${d}/transcript`);if(t)return;Ce(m.status),dt(m.status==="queued"||m.status==="running"?m:null),Ie(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?de(m.transcript):m.status==="done"&&m.transcript?(de(m.transcript),p(!0),N("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&W(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[G,N]),(0,e.useEffect)(()=>{if(tt.status!=="running")return;let t=!1,o=setInterval(async()=>{let d=C.current?.id;if(d)try{let m=await pe(`${h}/episodes/${d}/translate?target=${L}`);if(t)return;if(Ke(m),m.status==="done"){let P=await pe(`${h}/episodes/${d}/transcript`);!t&&P.transcript&&de(P.transcript),N("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[tt.status,L,N]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let m=await pe(`${h}/jobs`);t||bt(m.items||[])}catch{}};o();let d=setInterval(o,qe?2500:2e4);return()=>{t=!0,clearInterval(d)}},[qe]);let Ge=(0,e.useCallback)((t,o,d,m=!1)=>{if(!t)return;let P=Date.now();!m&&P-Wt.current<4e3||(Wt.current=P,te(`${h}/progress/${t}`,"PUT",{position:o,duration:d}).catch(()=>{}),g(O=>({...O,[t]:{position:o,duration:d,updatedAt:P}})))},[]),je=(0,e.useCallback)(t=>{J(o=>({...o,...t})),te(`${h}/settings`,"PATCH",t).catch(()=>{})},[]),ct=(0,e.useCallback)(async()=>{if(C.current){W(""),p(!0);try{let t=await te(`${h}/episodes/${C.current.id}/transcribe`,"POST",{});Ce(t.status||"queued")}catch(t){W(t.message)}}},[]),wo=(0,e.useCallback)(()=>{if($){p(t=>!t);return}if(G==="queued"||G==="running"){p(!0);return}ct()},[$,G,ct]),jt=(0,e.useCallback)(async()=>{if(C.current)try{await te(`${h}/episodes/${C.current.id}/transcribe/cancel`,"POST",{}),N("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){W(t.message)}},[N]),Et=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await te(`${h}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await te(`${h}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await te(`${h}/jobs`,"DELETE",{key:t.key})}catch{}let d=await pe(`${h}/jobs`).catch(()=>({items:[]}));bt(d.items||[])},[]),yt=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let d=await te(`${h}/transcribe/batch`,"POST",{ids:o});N(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),z([]),nt(!1)}catch(d){N(d.message)}},[N]),yo=(0,e.useCallback)(t=>{z(o=>o.includes(t)?o.filter(d=>d!==t):[...o,t])},[]),Ee=(0,e.useCallback)(async(t,o,d)=>{try{let m=await te(`${h}${t}`,o,d||{});return m?.transcript&&de(m.transcript),m}catch(m){return N(m.message),null}},[N]),Qt=(0,e.useCallback)(t=>{Ve(t.id),Ze(t.text),wt([])},[]),_t=(0,e.useCallback)(async t=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t??A}`,"PUT",{text:De})&&(Ve(null),N("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,A,De,Ee,N]),Rt=(0,e.useCallback)(async(t,o)=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t??A}/split`,"POST",{offset:o})&&(Ve(null),N("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,A,Ee,N]),eo=(0,e.useCallback)(async t=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t}/merge`,"POST",{})&&N("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,Ee,N]),to=(0,e.useCallback)(async()=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/undo`,"POST",{})&&N("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,Ee,N]),oo=(0,e.useCallback)(async()=>{if($)try{let t=await pe(`${h}/episodes/${$.id}/transcript/validate`);wt(t.issues||[]),N(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){N(t.message)}},[$,N]),kt=(0,e.useCallback)(async()=>{let t=C.current?.id;if(!t)return;let o=await pe(`${h}/episodes/${t}/transcript`);o.transcript&&de(o.transcript)},[]),no=(0,e.useCallback)(async t=>{if(C.current?.id){Ke({status:"running"});try{let o=await te(`${h}/episodes/${C.current.id}/translate`,"POST",{target:t});Ke(o),o.status==="done"&&(await kt(),N("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){Ke({status:"error",error:o.message})}}},[kt,N]),ro=(0,e.useCallback)(async t=>{if(vt(t),!t)return;if($?.lines?.some(d=>d.translations?.[t])){Ke({status:"done"}),await kt();return}await no(t)},[$,no,kt]),ko=async()=>{if(j?.eid)try{await fetch(`${h}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${j.eid}`})})}catch{N("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},No=t=>{let o=!t.favorite;i(d=>d.map(m=>m.id===t.id?{...m,favorite:o}:m)),te(`${h}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(d=>N(d.message))},ao=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${h}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(d=>!t.includes(d.id))),z([]),t.includes(ie)&&V(null),N(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},ge=(0,e.useMemo)(()=>{let t=[...r];return me==="title"?t.sort((o,d)=>o.title.localeCompare(d.title,"zh-Hans-CN")):me==="duration"?t.sort((o,d)=>(d.duration||0)-(o.duration||0)):t.sort((o,d)=>d.mtime-o.mtime),t},[r,me]),Te=(0,e.useMemo)(()=>{let t=y.trim().toLowerCase();return ge.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let m=v[o.id]?.position||0,P=o.duration||0,O=P?m/P:0;return _==="inprogress"?m>5&&O<.97:_==="finished"?O>=.97:R==="unheard"?m<=5:R==="transcribed"?!!o.hasTranscript:R==="favorites"?!!o.favorite:!0})},[ge,y,_,R,v]),so=(0,e.useMemo)(()=>He.filter(t=>t.status==="queued"||t.status==="running"),[He]),at=(0,e.useMemo)(()=>Te.filter(t=>!t.hasTranscript),[Te]),Lt=(0,e.useMemo)(()=>r.filter(t=>{let o=v[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(v[o.id]?.updatedAt||0)-(v[t.id]?.updatedAt||0)).slice(0,4),[r,v]),zo=(0,e.useMemo)(()=>r.reduce((t,o)=>t+(o.duration||0),0),[r]),$o=Math.round(zo/3600*10)/10,Co=_==="inprogress"?"\u7EE7\u7EED\u6536\u542C":_==="finished"?"\u5DF2\u64AD\u5B8C":_==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",j=ie?r.find(t=>t.id===ie)||(k?.id===ie?k:null):null,So=ae?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${Te.length} \u96C6 \xB7 \u5171 ${$o} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,mn=(0,e.useMemo)(()=>k?ge.findIndex(t=>t.id===k.id):-1,[ge,k]),st=(0,e.useCallback)(()=>{let t=ee.current;if(t){if(!C.current){let o=Te[0]||ge[0];o&&Ye(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[Te,ge]),Ye=(0,e.useCallback)((t,o=!0)=>{let d=ee.current;if(!d||!t)return;if(C.current&&C.current.id===t.id){o&&st();return}C.current&&!d.ended&&d.currentTime>1&&Ge(C.current.id,d.currentTime,d.duration||xe.current,!0),C.current=t,E(t),V(O=>O&&t.id),w(t.duration||0);let m=v[t.id]?.position||0,P=m>5&&(!t.duration||m<t.duration-10)?m:0;We.current=P,X(P),t.source==="xyz"?d.src=Xe.current?`${Xe.current}/xyz/${t.id.slice(3)}/audio`:`${h}/episodes/${t.id}/audio`:d.src=Xe.current?`${Xe.current}/episodes/${t.id}/audio`:`${h}/episodes/${t.id}/audio`,d.load(),d.playbackRate=rt.current.rate||1,d.volume=rt.current.volume??.9,o&&d.play().catch(()=>{}),je({lastEpisodeId:t.id})},[v,Ge,je,st]),To=(0,e.useCallback)(async t=>{let o=t.public?`${h}/xyz/public/play`:`${h}/xyz/episodes/${encodeURIComponent(t.eid)}/play`,d=t.public?{pid:t.pid,eid:t.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),P=await m.json().catch(()=>({}));if(!m.ok)throw new Error(P.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ne(),Ye(P.item,!0)},[Ne,Ye]);(0,e.useEffect)(()=>{let t=y.trim();if(t.length<2){ne([]);return}let o=window.setTimeout(()=>{pe(`${h}/search?q=${encodeURIComponent(t)}`).then(d=>ne(Array.isArray(d.items)?d.items:[])).catch(()=>ne([]))},250);return()=>window.clearTimeout(o)},[y]);let Nt=(0,e.useCallback)((t,o=!0)=>{t&&(Ye(t,o),V(t.id))},[Ye]),be=(0,e.useCallback)(t=>{let o=ee.current;if(!o||!C.current)return;let d=Number(t);if(!Number.isFinite(d))return;let m=Number(xe.current)||0,P=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,O=Math.max(0,P>0?Math.min(d,P):d);try{o.currentTime=O}catch{We.current=O;return}X(O),Ge(C.current.id,O,P||m,!0)},[Ge]),Mo=(0,e.useCallback)(t=>{let o=r.find(d=>d.id===t.episodeId);if(o){if(C.current?.id===t.episodeId){be(t.start),V(o.id);return}We.current=t.start,Nt(o,!1)}},[r,Nt,be]),io=(0,e.useCallback)(t=>{let o=Zt.current;if(!o)return null;let d=o.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(t.clientX-d.left)/d.width)):null},[]),zt=(0,e.useCallback)(t=>{let o=io(t),d=Number.isFinite(xe.current)&&xe.current>0?xe.current:Number.isFinite(ee.current?.duration)?ee.current.duration:0;o==null||!d||be(o*d)},[io,be]),Po=(0,e.useCallback)(t=>{t.preventDefault(),Dt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}zt(t)},[zt]),Io=(0,e.useCallback)(t=>{Dt.current&&zt(t)},[zt]),lo=(0,e.useCallback)(t=>{Dt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),Do=(0,e.useCallback)(t=>{let o=ee.current;if(!o)return;let d=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),be((o.currentTime||0)-d)),t.key==="ArrowRight"&&(t.preventDefault(),be((o.currentTime||0)+d)),t.key==="Home"&&(t.preventDefault(),be(0)),t.key==="End"&&(t.preventDefault(),be(Number.isFinite(o.duration)?o.duration:0))},[be]),ut=(0,e.useCallback)(t=>{let o=ee.current;if(!o||!C.current)return;let d=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||xe.current||0)-1));o.currentTime=d,X(d)},[]),At=(0,e.useCallback)(t=>{if(!ge.length)return;let d=((C.current?ge.findIndex(m=>m.id===C.current.id):-1)+t+ge.length)%ge.length;Ye(ge[d],!0)},[ge,Ye]),jo=(0,e.useCallback)(t=>{let o=ee.current;o&&(o.playbackRate=t),je({rate:t}),oe(!1)},[je]);(0,e.useEffect)(()=>{if(!U)return;let t=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||oe(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[U]);let $t=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),d=ee.current;d&&(d.volume=o),je({volume:o})},[je]),Eo=(0,e.useCallback)(()=>{let t=ee.current,o=rt.current.volume>0?0:.9;t&&(t.volume=o),je({volume:o})},[je]),Lo=()=>{let t=ee.current;if(!t||!C.current)return;let o=performance.now();o-(Xt.current||0)<400||(Xt.current=o,X(t.currentTime),Ge(C.current.id,t.currentTime,t.duration||xe.current))},Ao=()=>{let t=ee.current,o=C.current;if(!t||!o)return;let d=Number.isFinite(t.duration)?t.duration:o.duration||0;w(d);let m=We.current;We.current=0,m>0&&m<d-1&&(t.currentTime=m,X(m))},Oo=()=>{let t=ee.current;C.current&&Ge(C.current.id,t?.duration||xe.current||0,t?.duration||xe.current||0,!0),At(1)},Bo=async t=>{await te(`${h}/folders`,"POST",{path:t}),await Ne(),N("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Uo=async()=>{let t=await fetch(`${h}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Ko=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),ht||Fe(!0))},Fo=t=>{t.currentTarget.contains(t.relatedTarget)||Fe(!1)},qo=async t=>{t.preventDefault(),Fe(!1);let o=t.dataTransfer,d=[...o?.files||[]],m=d.map(H=>H.path).filter(H=>typeof H=="string"&&H),P=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(H=>H.trim()).filter(H=>H.startsWith("file://")).map(H=>decodeURIComponent(H.replace(/^file:\/\//,""))),O=[...new Set([...m,...P])];if(O.length){try{let H=await te(`${h}/import/paths`,"POST",{paths:O});await Ne(),N(H.added?`\u5DF2\u6DFB\u52A0 ${H.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(H){q(H.message)}return}let Qe=d.filter(H=>H.size>0);if(!Qe.length){N("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let _e=`drop-${Date.now()}`,Ct="",Ut=0;for(let H of Qe)try{let po=await fetch(`${h}/import/upload?name=${encodeURIComponent(H.name)}&batch=${_e}`,{method:"POST",body:H}),Jo=await po.json();po.ok&&(Ct=Jo.folder||Ct,Ut+=1)}catch{}if(Ct)try{await te(`${h}/folders`,"POST",{path:Ct})}catch{}await Ne(),N(Ut?`\u5DF2\u5BFC\u5165 ${Ut} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Ho=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await te(`${h}/folders`,"DELETE",{path:t}),await Ne(),N("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){q(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let d=o.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),st()):o.key==="ArrowRight"?(o.preventDefault(),ut(15)):o.key==="ArrowLeft"?(o.preventDefault(),ut(-15)):o.key==="ArrowUp"?(o.preventDefault(),$t(rt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),$t(rt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[st,ut,$t]);let Ot=t=>{let o=v[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},Bt=t=>{let o=v[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${gt?"nav-collapsed":""}`,onDragOver:Ko,onDragLeave:Fo,onDrop:qo},ht?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,gt?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Yt},e.default.createElement(Q,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(Q,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.11"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Yt},e.default.createElement(Q,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Lt.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Ot).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([t,o,d])=>e.default.createElement("button",{key:t,className:`nav-item ${_===t?"active":""}`,onClick:()=>ye(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},d||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>$e(!0)},e.default.createElement(Q,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(Q,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},mo(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Ho(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,Co),e.default.createElement("p",{className:"subline"},So)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${qe?"is-on":""}`,onClick:()=>xt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(Q,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",so.length?` ${so.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Je?"is-on":""}`,onClick:()=>{nt(t=>!t),z([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(Q,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(Q,{name:"search",size:16}),e.default.createElement("input",{value:y,onChange:t=>b(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:me,onChange:t=>we(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Je?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",a.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>z(Te.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!at.length,onClick:()=>yt(at.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",at.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!a.length,onClick:()=>yt(a)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!a.length,onClick:()=>ao(a)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{z([]),nt(!1)}},"\u53D6\u6D88")):null,he?e.default.createElement("div",{className:"banner error",onClick:()=>q("")},he," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,j?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>V(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},j.artist,j.album?` \xB7 ${j.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(it,{item:j,size:288})),e.default.createElement("h2",{className:"episode-title"},j.title),e.default.createElement("p",{className:"episode-sub"},j.artist,j.album?` \xB7 ${j.album}`:""),e.default.createElement("p",{className:"episode-path",title:j.file},j.location||j.file),e.default.createElement("p",{className:"episode-stats"},Kt(j.duration)," \xB7 ",Ft(j.mtime)," \xB7 \u5DF2\u542C ",Math.round(Bt(j)),"%"),j.shownotes?e.default.createElement("div",{className:`episode-notes ${S?"is-open":""}`},e.default.createElement("button",{className:"notes-head",onClick:()=>K(t=>!t)},"\u5355\u96C6\u4ECB\u7ECD ",S?"\u6536\u8D77":"\u5C55\u5F00"),e.default.createElement("p",{className:"notes-body"},j.shownotes)):null,e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:st},re&&k?.id===j.id?"\u6682\u505C":"\u64AD\u653E"),G==="queued"||G==="running"?e.default.createElement("button",{className:"btn ghost",onClick:jt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:ct},j.source==="xyz"?$?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),j.source==="xyz"?e.default.createElement("button",{className:"btn ghost",onClick:ko},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,e.default.createElement("button",{className:"btn ghost danger",onClick:()=>ao([j.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Mt,{inline:!0,transcript:$,status:G,progress:ke?.progress,stage:ke?.stage,chunks:ke?.chunks,queued:ke?.queued,elapsed:Be,editingId:A,draft:De,onDraftChange:Ze,onEditLine:Qt,onSaveLine:_t,onCancelEdit:()=>Ve(null),onSplitLine:Rt,onMergeLine:eo,onUndo:to,onValidate:oo,issues:pt,onCancel:jt,error:Ue,position:Z,onSeek:be,onClose:()=>V(null),onStart:ct,target:L,job:tt,onChangeTarget:ro,onOpenSettings:()=>ot(!0)})))):_==="xyz"?e.default.createElement(Ht,{onPlay:To,currentId:k?.id}):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${R===t?"is-on":""}`,onClick:()=>ve(t)},o))),_==="all"&&!y&&Lt.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Lt.map(t=>{let o=Bt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${k?.id===t.id?"is-current":""}`,onClick:()=>Nt(t,!0)},e.default.createElement(it,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,y.trim().length>=2&&ue.length>0?e.default.createElement("section",{className:"search-hits"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),e.default.createElement("span",{className:"col-duration"},ue.length)),ue.map(t=>e.default.createElement("button",{key:`${t.episodeId}-${t.lineId}`,className:"hit-row",onClick:()=>Mo(t)},e.default.createElement("span",{className:"hit-time"},Me(t.start)),e.default.createElement("span",{className:"hit-text"},t.text),e.default.createElement("span",{className:"hit-title"},t.title)))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ae?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Te.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>$e(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},Te.map((t,o)=>{let d=Bt(t),m=k?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${m?"is-current":""} ${Ot(t)?"is-finished":""} ${Je&&a.includes(t.id)?"is-selected":""}`,onClick:()=>Je?yo(t.id):Nt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},Je?a.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(Q,{name:"check",size:14})):null:m&&re?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(it,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Ft(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},Kt(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:P=>{P.stopPropagation(),No(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},Ot(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(Q,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),Y&&k&&!j?e.default.createElement(Mt,{transcript:$,status:G,progress:ke?.progress,stage:ke?.stage,chunks:ke?.chunks,queued:ke?.queued,elapsed:Be,editingId:A,draft:De,onDraftChange:Ze,onEditLine:Qt,onSaveLine:_t,onCancelEdit:()=>Ve(null),onSplitLine:Rt,onMergeLine:eo,onUndo:to,onValidate:oo,issues:pt,onCancel:jt,error:Ue,position:Z,onSeek:be,onClose:()=>p(!1),onStart:ct,target:L,job:tt,onChangeTarget:ro,onOpenSettings:()=>ot(!0)}):null,qe?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>xt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},He.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):He.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},ho(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!at.length,onClick:()=>yt(at.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",at.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!a.length,onClick:()=>yt(a)},"\u8F6C\u5199\u5DF2\u9009 ",a.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:Zt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(F||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Me(Z)} / ${Me(F)}`,onPointerDown:Po,onPointerMove:Io,onPointerUp:lo,onPointerCancel:lo,onKeyDown:Do},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${F?Math.min(100,Math.max(0,Z/F*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${F?Math.min(100,Math.max(0,Z/F*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},k?e.default.createElement("button",{className:"now-open",onClick:()=>V(k.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(it,{item:k,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:k.title},k.title),e.default.createElement("div",{className:"now-artist"},k.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>At(-1)},e.default.createElement(Q,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>ut(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:st,disabled:!k&&Te.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(Q,{name:re?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>ut(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>At(1)},e.default.createElement(Q,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Y?"active":""}`,onClick:wo,disabled:!k,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(Q,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":G==="queued"||G==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Me(Z)," / ",Me(F)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>oe(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":U},M.rate,"\xD7"),U?e.default.createElement("span",{className:"rate-menu",role:"menu"},en.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===M.rate,className:t===M.rate?"is-on":"",onClick:()=>jo(t)},t,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:Eo,title:"\u9759\u97F3"},e.default.createElement(Q,{name:M.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:M.volume,onChange:t=>$t(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),Pe?e.default.createElement(tn,{onClose:()=>$e(!1),onSubmit:Bo,onPick:Uo}):null,se?e.default.createElement(on,{config:I,onClose:()=>ot(!1),onSave:async t=>{let o=await te(`${h}/translate/settings`,"PUT",t);Se(o),ot(!1),N("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ae?e.default.createElement("div",{className:"toast"},Ae):null,e.default.createElement("audio",{ref:ee,preload:"metadata",onPlay:()=>le(!0),onPause:()=>{le(!1);let t=ee.current;C.current&&t&&t.currentTime>0&&!t.ended&&Ge(C.current.id,t.currentTime,t.duration||xe.current,!0)},onTimeUpdate:Lo,onLoadedMetadata:Ao,onEnded:Oo,onError:()=>{le(!1),N("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Pt=require("react");function nn(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function rn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=nn(i);if(s!==null)return s}return null}function xo(){let r=rn();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function It(){let[r,i]=(0,Pt.useState)(xo);return(0,Pt.useEffect)(()=>{let s=()=>i(xo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var n=Re(require("react"),1);var B="/podwave/api";async function ce(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Le(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function an(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function lt(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function sn(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Vt(){let r=It(),[i,s]=(0,n.useState)([]),[c,v]=(0,n.useState)([]),[g,f]=(0,n.useState)({asrModel:"",translateModel:""}),[T,M]=(0,n.useState)(null),[J,U]=(0,n.useState)(null),[oe,S]=(0,n.useState)({showSidebarPanel:!0}),[K,y]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[b,ue]=(0,n.useState)(null),[ne,me]=(0,n.useState)(null),[we,_]=(0,n.useState)(null),[ye,R]=(0,n.useState)(!1),[ve,ie]=(0,n.useState)("auto"),[V,k]=(0,n.useState)(!1),[E,re]=(0,n.useState)(null),[le,Z]=(0,n.useState)(!1),[X,F]=(0,n.useState)(""),[w,ae]=(0,n.useState)(15),[D,Pe]=(0,n.useState)(!0),[$e,he]=(0,n.useState)("api"),[q,Ae]=(0,n.useState)("https://api.deepseek.com"),[Oe,$]=(0,n.useState)("deepseek-chat"),[de,G]=(0,n.useState)(""),[Ce,Be]=(0,n.useState)(""),[Ie,Ue]=(0,n.useState)(""),[W,Y]=(0,n.useState)(""),[p,I]=(0,n.useState)(""),[Se,L]=(0,n.useState)(""),vt=(0,n.useCallback)(async()=>{try{let[a,z,A,Ve,De,Ze,pt,wt]=await Promise.all([ce(`${B}/history`),ce(`${B}/models`),ce(`${B}/translate/settings`),ce(`${B}/ui-settings`),ce(`${B}/transcribe/settings`),ce(`${B}/import/settings`),ce(`${B}/setup`),ce(`${B}/update`)]);ue(pt),re(wt),pt?.job?.status==="running"&&k(!0),y({mode:Ze.mode||"copy",orphans:Ze.orphans||0,orphanBytes:Ze.orphanBytes||0}),S({showSidebarPanel:Ve?.showSidebarPanel!==!1}),F((De.hotwords||[]).join(" ")),ae(De.chunkMinutes||15),Pe(De.diarize!==!1),s(a.items||[]),v(z.models||[]),f(z.config||{asrModel:"",translateModel:""}),M(z.transcribe||null),Be(z.config?.asrModel||""),Ue(z.config?.translateModel||""),U(A),he(A.provider||"api"),Ae(A.apiBase||"https://api.deepseek.com"),$(A.apiModel||"deepseek-chat"),G(""),L("")}catch(a){L(a.message)}},[]);(0,n.useEffect)(()=>{vt()},[vt]),(0,n.useEffect)(()=>{let a=!1;return ce(`${B}/setup/plan?source=${ve}`).then(z=>{a||me(z)}).catch(()=>{}),()=>{a=!0}},[ve,b?.job?.status]),(0,n.useEffect)(()=>{if(!V&&b?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let z=await ce(`${B}/setup`);ue(z),z.job?.status!=="running"&&k(!1)}catch{}},2500);return()=>window.clearInterval(a)},[V,b?.job?.status]);let tt=async()=>{L(""),k(!0);try{await Le(`${B}/setup/install`,"POST",{source:ve});let a=await ce(`${B}/setup`);ue(a),se("\u5F00\u59CB\u5B89\u88C5")}catch(a){k(!1),L(a.message)}},Ke=async()=>{try{await Le(`${B}/setup/cancel`,"POST",{}),se("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){L(a.message)}},se=a=>{I(a),window.setTimeout(()=>I(""),2400)},ot=async()=>{R(!0);try{let a=await ce(`${B}/setup/verify`);_(a),se(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){se(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{R(!1)}},gt=async()=>{try{let a=await ce(`${B}/setup/diagnose`),z=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(z)}catch{let A=document.createElement("textarea");A.value=z,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}se("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){se(a.message||"\u590D\u5236\u5931\u8D25")}},ft=async()=>{Y("api"),L("");try{let a={provider:$e,apiBase:q,apiModel:Oe};de.trim()&&(a.apiKey=de.trim());let z=await Le(`${B}/translate/settings`,"PUT",a);U(z),G(""),se("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{Y("")}},ht=async()=>{Y("models"),L("");try{let a=await Le(`${B}/models`,"PUT",{asrModel:Ce,translateModel:Ie});f(a.config),v(a.models||[]),M(a.transcribe||null),se("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{Y("")}},Fe=c.length?c:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:T?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:J?.localReady}],ke=async()=>{Z(!0);try{re(await ce(`${B}/update?force=1`))}catch{se("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Z(!1)}},dt=Fe.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),qe=Fe.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),xt=async()=>{Y("ui"),L("");try{let a=await Le(`${B}/ui-settings`,"PUT",{showSidebarPanel:oe.showSidebarPanel});S({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),se("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{Y("")}},He=async a=>{Y("import"),L("");try{let z=await Le(`${B}/import/settings`,"PUT",{mode:a});y(A=>({...A,mode:z.mode})),se("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(z){L(z.message)}finally{Y("")}},bt=async()=>{if(K.orphans&&window.confirm(`\u6E05\u7406 ${K.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){Y("imports"),L("");try{let a=await Le(`${B}/imports/orphans`,"DELETE",{});y(z=>({...z,orphans:0,orphanBytes:0})),se(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){L(a.message)}finally{Y("")}}},Je=async()=>{Y("transcribe"),L("");try{let a=X.split(/[\s,，、]+/).map(A=>A.trim()).filter(Boolean).slice(0,500),z=await Le(`${B}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(w)||15)),diarize:D});F((z.hotwords||[]).join(" ")),ae(z.chunkMinutes||15),Pe(z.diarize!==!1),se("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{Y("")}},nt=Fe;return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Tt),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Se?n.default.createElement("div",{className:"banner error",onClick:()=>L("")},Se):null,p?n.default.createElement("div",{className:"settings-message"},p):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),b?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},b.platform?.osLabel," \xB7 ",b.platform?.arch," \xB7 ",b.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",b.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",b.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:gt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:ye,onClick:ot},ye?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),we?n.default.createElement("ul",{className:"setup-components"},we.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(b.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},lt(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:ve,onChange:a=>ie(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),ne?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",lt(ne.totalBytes)," \xB7 ",ne.items.length," \u9879"),n.default.createElement("ul",null,ne.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?lt(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:V||b.job?.status==="running",onClick:tt},V||b.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),b.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:Ke},"\u53D6\u6D88"):null),b.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,b.job.stage||b.job.status),n.default.createElement("span",null,b.job.progress||0,"% \xB7 ",lt(b.job.bytes)," / ",lt(b.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${b.job.progress||0}%`}})),b.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",b.job.error):null,b.job.status==="done"&&(!b.job.summary||!b.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(b.job.summary)&&b.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},b.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",lt(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${an(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},sn(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:X,onChange:a=>F(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:w,onChange:a=>ae(a.target.value)})),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:D,onChange:a=>Pe(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Je,disabled:W==="transcribe"},W==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:K.mode==="copy",onChange:()=>He("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:K.mode==="reference",onChange:()=>He("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:bt,disabled:W==="imports"||!K.orphans},K.orphans?`\u6E05\u7406 ${K.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(K.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:$e,onChange:a=>he(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:q,onChange:a=>Ae(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:Oe,onChange:a=>$(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:de,onChange:a=>G(a.target.value),placeholder:J?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${J.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ft,disabled:W==="api"},W==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},J?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:oe.showSidebarPanel,onChange:a=>S({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:xt,disabled:W==="ui"},W==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Ce,onChange:a=>Be(a.target.value)},(dt.length?dt:nt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},T?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Ie,onChange:a=>Ue(a.target.value)},(qe.length?qe:nt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},J?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ht,disabled:W==="models"},W==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},E?.current?`v${E.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},E?.latest?`v${E.latest}`:E?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},E?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":E?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${E.error}\uFF09\u3002`:E?.latest?"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ke,disabled:le},le?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),E?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(E.checkedAt).toLocaleString()):null))))}function ln({size:r=16}){return ze.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},ze.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),ze.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ze.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),ze.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ze.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function dn(){let r=It();return ze.default.createElement("div",{className:"podwave-root","data-pw-theme":r},ze.default.createElement("style",null,Tt),ze.default.createElement(Jt,null))}function pn(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},dn)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Vt));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},v=g=>{if(c(!g),g&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},ln);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var cn=["slots"];

return module.exports}})
