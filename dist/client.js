window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Jo=Object.create;var St=Object.defineProperty;var Vo=Object.getOwnPropertyDescriptor;var Zo=Object.getOwnPropertyNames;var Xo=Object.getPrototypeOf,Wo=Object.prototype.hasOwnProperty;var Go=(n,i)=>{for(var s in i)St(n,s,{get:i[s],enumerable:!0})},co=(n,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let m of Zo(i))!Wo.call(n,m)&&m!==s&&St(n,m,{get:()=>i[m],enumerable:!(c=Vo(i,m))||c.enumerable});return n};var Re=(n,i,s)=>(s=n!=null?Jo(Xo(n)):{},co(i||!n||!n.__esModule?St(s,"default",{value:n,enumerable:!0}):s,n)),Yo=n=>co(St({},"__esModule",{value:!0}),n);var pr={};Go(pr,{apply:()=>lr,inject:()=>dr});module.exports=Yo(pr);var ze=Re(require("react"),1);var Mt=`
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
`;var e=Re(require("react"),1);var h=Re(require("react"),1);function Q({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),h.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),h.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),h.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return h.default.createElement("svg",{...s},h.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),h.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),h.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),h.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),h.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),h.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var qt=Re(require("react"),1);function Te(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),c=Math.floor(i%3600/60),m=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${c}:${String(m).padStart(2,"0")}`}function Kt(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Ft(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function uo(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function vo(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var _o="/podwave/api";function it({item:n,size:i=44,className:s=""}){let c={width:i,height:i};return n&&n.hasCover?qt.default.createElement("img",{className:`cover ${s}`,style:c,src:`${_o}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):qt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},uo(n&&n.title))}var u=Re(require("react"),1);var mo="/podwave/api";function Tt({transcript:n,status:i,progress:s,stage:c,chunks:m,queued:g,elapsed:f,error:M,position:T,onSeek:J,onClose:B,onStart:oe,onCancel:S,target:U,job:y,onChangeTarget:b,onOpenSettings:ue,inline:re=!1,editingId:ve=null,draft:we="",onDraftChange:_,onEditLine:ye,onSaveLine:R,onCancelEdit:me,onSplitLine:ie,onMergeLine:V,onUndo:k,onValidate:j,issues:ne=[]}){let le=(0,u.useRef)(null),Z=(0,u.useRef)(null),X=n?.lines?.findIndex(w=>T>=w.start&&T<w.end)??-1;(0,u.useEffect)(()=>{if(X<0||!le.current)return;le.current.querySelector(`[data-seg="${X}"]`)?.scrollIntoView({block:"nearest"})},[X]);let F=i==="queued"||i==="running";return u.default.createElement("section",{className:`transcript-panel ${re?"inline":""}`},u.default.createElement("header",{className:"transcript-head"},u.default.createElement("h3",null,"\u5B57\u5E55"),n?u.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,u.default.createElement("div",{className:"transcript-actions"},u.default.createElement("select",{className:"tr-select",value:U,onChange:w=>b(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},u.default.createElement("option",{value:""},"\u5BF9\u7167"),u.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),u.default.createElement("option",{value:"en"},"English")),u.default.createElement("button",{className:"mini-link",onClick:ue},"\u8BBE\u7F6E"),n?u.default.createElement(u.default.Fragment,null,u.default.createElement("button",{className:"mini-link",onClick:k,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),u.default.createElement("button",{className:"mini-link",onClick:j,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),u.default.createElement("a",{className:"mini-link",href:`${mo}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),u.default.createElement("a",{className:"mini-link",href:`${mo}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,re?null:u.default.createElement("button",{className:"transcript-close",onClick:B,title:"\u6536\u8D77"},"\xD7"))),u.default.createElement("div",{className:"transcript-body",ref:le},n&&F?u.default.createElement("div",{className:"tr-strip"},u.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min((m.done||0)+1,m.total)}/${m.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),S?u.default.createElement("button",{className:"seg-tool",onClick:S},"\u53D6\u6D88"):null):null,n&&ne?.length?u.default.createElement("div",{className:"tr-issues"},ne.slice(0,5).map(w=>u.default.createElement("div",{key:w},"\xB7 ",w)),ne.length>5?u.default.createElement("div",null,"\u2026\u5171 ",ne.length," \u6761"):null):null,y?.status==="running"?u.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,y?.status==="error"?u.default.createElement("div",{className:"tr-running err"},y.error):null,n?n.lines.map((w,ae)=>u.default.createElement("div",{key:w.id,"data-seg":ae,className:`seg-row ${ae===X?"active":""} ${ve===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Te(w.start)}`,onClick:()=>J(w.start),onKeyDown:D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),J(w.start))}},u.default.createElement("span",{className:"seg-time"},Te(w.start)),ve===w.id?u.default.createElement("span",{className:"seg-edit",onClick:D=>D.stopPropagation()},u.default.createElement("textarea",{ref:Z,value:we,rows:Math.min(4,Math.max(2,Math.ceil((we.length||1)/40))),onChange:D=>_(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.metaKey||D.ctrlKey)&&R(w.id),D.key==="Escape"&&me()}}),u.default.createElement("span",{className:"seg-edit-actions"},u.default.createElement("button",{className:"seg-tool",onClick:()=>R(w.id)},"\u4FDD\u5B58"),u.default.createElement("button",{className:"seg-tool",onClick:()=>ie(w.id,Z.current?.selectionStart??Math.floor(we.length/2))},"\u62C6\u5206"),u.default.createElement("button",{className:"seg-tool",onClick:me},"\u53D6\u6D88"))):u.default.createElement(u.default.Fragment,null,w.speaker!=null?u.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},n.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,u.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[U]?u.default.createElement("span",{className:"seg-trans"},w.translations[U]):null),u.default.createElement("span",{className:"seg-tools"},u.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:D=>{D.stopPropagation(),ye(w)}},"\u270E"),ae<n.lines.length-1?u.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:D=>{D.stopPropagation(),V(w.id)}},"\u21E3"):null)))):F?u.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min(m.done+1,m.total)}/${m.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?u.default.createElement("span",{className:"tx-progress"},u.default.createElement("span",{style:{width:`${s.percent}%`}})):null,u.default.createElement("br",null),u.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),u.default.createElement("br",null),S?u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:S},"\u53D6\u6D88\u8F6C\u5199"):null):M?u.default.createElement("div",{className:"transcript-status"},u.default.createElement("span",{className:"err"},M),u.default.createElement("br",null),u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:oe},"\u91CD\u8BD5")):u.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",u.default.createElement("br",null),u.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:oe},"\u5F00\u59CB\u8F6C\u5199"))))}var l=Re(require("react"),1),fe="/podwave/api";async function et(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function vt(n,i){let s=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function go(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function fo(n){if(!n)return"";let i=new Date(n);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Ht({onPlay:n,currentId:i}){let[s,c]=(0,l.useState)(null),[m,g]=(0,l.useState)(""),[f,M]=(0,l.useState)(""),[T,J]=(0,l.useState)(""),[B,oe]=(0,l.useState)(""),[S,U]=(0,l.useState)(0),[y,b]=(0,l.useState)(!1),[ue,re]=(0,l.useState)(""),[ve,we]=(0,l.useState)(""),[_,ye]=(0,l.useState)([]),[R,me]=(0,l.useState)(!1),[ie,V]=(0,l.useState)(null),[k,j]=(0,l.useState)([]),[ne,le]=(0,l.useState)(null),[Z,X]=(0,l.useState)(!1),[F,w]=(0,l.useState)(""),[ae,D]=(0,l.useState)(null),[Pe,$e]=(0,l.useState)(!1),he=(0,l.useCallback)(async(p=!1)=>{me(!0);try{let I=await et(`${fe}/xyz/subscriptions${p?"?refresh=1":""}`);ye(I.items||[])}catch(I){q(I)}finally{me(!1)}},[]);function q(p){let I=String(p?.message||"");if(I.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Se=>({...Se||{},loggedIn:!1})),ye([]),V(null),j([]),re(""),g("\u767B\u5F55\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u7C98\u8D34 refresh token \u6216 access token\u3002");return}g(Ae(I))}function Ae(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6539\u7528 refresh token \u767B\u5F55\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function Oe(){try{await vt(`${fe}/xyz/open-web`,{})}catch(p){q(p)}}(0,l.useEffect)(()=>{et(`${fe}/xyz/status`).then(p=>{c(p),p.loggedIn&&he()}).catch(p=>q(p))},[he]),(0,l.useEffect)(()=>{if(!S)return;let p=setInterval(()=>U(I=>Math.max(0,I-1)),1e3);return()=>clearInterval(p)},[S]);async function $(){if(g(""),!/^1\d{10}$/.test(T.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let p=await vt(`${fe}/xyz/auth/send-code`,{phone:T.trim(),areaCode:"+86"});U(60),p.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){q(p)}finally{M("")}}async function de(){if(g(""),!T.trim()||!B.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await vt(`${fe}/xyz/auth/login`,{phone:T.trim(),code:B.trim(),areaCode:"+86"});let p=await et(`${fe}/xyz/status`);c(p),await he()}catch(p){q(p)}finally{M("")}}async function G(){if(g(""),!ue.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await vt(`${fe}/xyz/auth/token`,{refreshToken:ue.trim(),deviceId:ve.trim()});let p=await et(`${fe}/xyz/status`);c(p),re(""),await he()}catch(p){q(p)}finally{M("")}}async function Ce(){M("logout");try{await vt(`${fe}/xyz/auth/logout`,{}),c({loggedIn:!1}),ye([]),V(null),j([])}catch(p){q(p)}finally{M("")}}async function Be(p){V(p),j([]),le(null),X(!0),g("");try{let I=await et(`${fe}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);j(I.items||[]),le(I.loadMoreKey||null)}catch(I){q(I)}finally{X(!1)}}async function Ie(){if(!(!ie||!ne||Z)){X(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:ne}),I=await et(`${fe}/xyz/podcast/${encodeURIComponent(ie.pid)}/episodes?${p}`);j(Se=>[...Se,...I.items||[]]),le(I.loadMoreKey||null)}catch(p){q(p)}finally{X(!1)}}}async function Ue(p){M(`play:${p.eid}`),g("");try{await n(p)}catch(I){q(I)}finally{M("")}}async function W(){if(g(""),!F.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}$e(!0);try{let p=await et(`${fe}/xyz/public/podcast?url=${encodeURIComponent(F.trim())}`);D(p.podcast)}catch(p){q(p)}finally{$e(!1)}}async function Y(p){M(`pplay:${p.eid}`),g("");try{await n({...p,public:!0})}catch(I){q(I)}finally{M("")}}return s?s.loggedIn?ie?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{V(null),j([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},ie.title)),Z&&k.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},k.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},fo(p.pubDate)," \xB7 ",go(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${p.eid}`,onClick:()=>Ue(p)},f===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!Z&&k.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,ne?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:Z,onClick:Ie},Z?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:R,onClick:()=>he(!0)},R?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:Ce},"\u9000\u51FA\u767B\u5F55"))),R?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},_.map(p=>l.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>Be(p)},p.cover?l.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},p.title),l.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!R&&_.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u7528\u4F60\u8D26\u53F7\u7684 refresh token \u8BFB\u53D6\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u7528\u624B\u673A App \u626B\u7801\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:Oe},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:ue,onChange:p=>re(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"})),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:ve,onChange:p=>we(p.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:G},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>b(p=>!p)},y?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),y?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:T,onChange:p=>J(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||S>0,onClick:$},S>0?`${S}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:B,onChange:p=>oe(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:de},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u4EFB\u610F\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:F,onChange:p=>w(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Pe,onClick:W},Pe?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ae?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},ae.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ae.author)),ae.episodes.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},fo(p.pubDate)," \xB7 ",go(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${p.eid}`,onClick:()=>Y(p)},f===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),m?l.default.createElement("p",{className:"xyz-error"},m):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function ho(n){if(n.type==="download")return n.status==="done"?"\u5DF2\u4E0B\u8F7D":n.status==="error"||n.status==="interrupted"?n.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${n.progress?` ${n.progress}%`:""}`;let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var x="/podwave/api",Ro=[.5,.75,1,1.25,1.5,1.75,2];async function pe(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function te(n,i,s){let c=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let m=await c.json().catch(()=>({}));throw new Error(m.error||c.statusText)}return c.json()}function er({onSubmit:n,onPick:i,onClose:s}){let[c,m]=(0,e.useState)(""),[g,f]=(0,e.useState)(!1),[M,T]=(0,e.useState)(!1),[J,B]=(0,e.useState)(""),oe=(0,e.useRef)(null);return(0,e.useEffect)(()=>{oe.current?.focus();let y=b=>{b.key==="Escape"&&s()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:y=>{y.target===y.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async y=>{if(y.preventDefault(),!(!c.trim()||g)){f(!0),B("");try{await n(c.trim()),s()}catch(b){B(b.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){T(!0),B("");try{let y=await i();if(y?.canceled)return;if(y?.error)throw new Error(y.error);y?.path&&(await n(y.path),s())}catch(y){B(y.message)}finally{T(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:oe,value:c,onChange:y=>m(y.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),J?e.default.createElement("div",{className:"dialog-error"},J):null))}function tr({config:n,onClose:i,onSave:s}){let[c,m]=(0,e.useState)(n?.provider||"api"),[g,f]=(0,e.useState)(""),[M,T]=(0,e.useState)(!1),[J,B]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:S=>{S.target===S.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async S=>{S.preventDefault(),T(!0),B("");try{await s({provider:c,apiKey:g||void 0})}catch(U){B(U.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:S=>m(S.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:S=>f(S.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),J?e.default.createElement("div",{className:"dialog-error"},J):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Jt(){let[n,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[m,g]=(0,e.useState)({}),[f,M]=(0,e.useState)({running:!1}),[T,J]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[B,oe]=(0,e.useState)(!1),[S,U]=(0,e.useState)(!1),[y,b]=(0,e.useState)(""),[ue,re]=(0,e.useState)([]),[ve,we]=(0,e.useState)("recent"),[_,ye]=(0,e.useState)("all"),[R,me]=(0,e.useState)("all"),[ie,V]=(0,e.useState)(null),[k,j]=(0,e.useState)(null),[ne,le]=(0,e.useState)(!1),[Z,X]=(0,e.useState)(0),[F,w]=(0,e.useState)(0),[ae,D]=(0,e.useState)(!0),[Pe,$e]=(0,e.useState)(!1),[he,q]=(0,e.useState)(""),[Ae,Oe]=(0,e.useState)(""),[$,de]=(0,e.useState)(null),[G,Ce]=(0,e.useState)("none"),[Be,Ie]=(0,e.useState)(0),[Ue,W]=(0,e.useState)(""),[Y,p]=(0,e.useState)(!1),[I,Se]=(0,e.useState)(null),[E,mt]=(0,e.useState)(""),[tt,Ke]=(0,e.useState)({status:"none"}),[se,ot]=(0,e.useState)(!1),[gt,ft]=(0,e.useState)(!1),[ht,Fe]=(0,e.useState)(!1),[ke,dt]=(0,e.useState)(null),[qe,xt]=(0,e.useState)(!1),[He,bt]=(0,e.useState)([]),[Je,rt]=(0,e.useState)(!1),[a,z]=(0,e.useState)([]),[L,Ve]=(0,e.useState)(null),[De,Ze]=(0,e.useState)(""),[pt,wt]=(0,e.useState)([]),ee=(0,e.useRef)(null),Xe=(0,e.useRef)(""),Zt=(0,e.useRef)(null),C=(0,e.useRef)(null),xe=(0,e.useRef)(0),nt=(0,e.useRef)(T),We=(0,e.useRef)(0),Xt=(0,e.useRef)(0),Wt=(0,e.useRef)(0),Gt=(0,e.useRef)(0),bo=(0,e.useRef)(!1),Dt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{U(!1)},[ie]),(0,e.useEffect)(()=>{nt.current=T},[T]),(0,e.useEffect)(()=>{C.current=k},[k]),(0,e.useEffect)(()=>{xe.current=F},[F]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await pe(`${x}/ui-settings`);!t&&o&&ft(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Yt=(0,e.useCallback)(()=>{ft(t=>{let o=!t;return fetch(`${x}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),N=(0,e.useCallback)(t=>{Oe(t),window.clearTimeout(Gt.current),Gt.current=window.setTimeout(()=>Oe(""),2600)},[]),Ne=(0,e.useCallback)(async()=>{let t=await pe(`${x}/episodes`);return i(t.items||[]),c(t.folders||[]),g(t.progress||{}),M(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await pe(`${x}/health`).catch(()=>({}));o.mediaBase&&(Xe.current=o.mediaBase);let d=await pe(`${x}/state`);if(t)return;J(d.settings),c(d.folders||[]);let v=await Ne();if(t)return;let P=d.settings?.lastEpisodeId,A=P?(v.items||[]).find(Qe=>Qe.id===P):null;if(A){j(A),w(A.duration||0);let Qe=v.progress?.[A.id]?.position||0;We.current=Qe>5?Qe:0,X(We.current);let _e=ee.current;_e&&(_e.src=Xe.current?`${Xe.current}/episodes/${A.id}/audio`:`${x}/episodes/${A.id}/audio`,_e.load(),_e.playbackRate=d.settings?.rate||1,_e.volume=d.settings?.volume??.9)}D(!1),bo.current=!0}catch(o){t||(q(o.message),D(!1))}})(),()=>{t=!0}},[Ne]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{Ne().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,Ne]),(0,e.useEffect)(()=>{let t=!1;return de(null),W(""),Ie(0),k?.id?((async()=>{try{let o=await pe(`${x}/episodes/${k.id}/transcript`);if(t)return;Ce(o.status),dt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?de(o.transcript):o.status==="queued"||o.status==="running"?(Ie(o.elapsedMs||0),o.transcript&&de(o.transcript)):o.status==="error"&&W(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||W(o.message)}})(),()=>{t=!0}):(Ce("none"),()=>{t=!0})},[k?.id]),(0,e.useEffect)(()=>{pe(`${x}/translate/settings`).then(Se).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(G!=="queued"&&G!=="running")return;let t=!1,o=setInterval(async()=>{let d=C.current?.id;if(d)try{let v=await pe(`${x}/episodes/${d}/transcript`);if(t)return;Ce(v.status),dt(v.status==="queued"||v.status==="running"?v:null),Ie(v.elapsedMs||0),(v.status==="queued"||v.status==="running")&&v.transcript?de(v.transcript):v.status==="done"&&v.transcript?(de(v.transcript),p(!0),N("\u8F6C\u5199\u5B8C\u6210")):v.status==="error"&&W(v.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[G,N]),(0,e.useEffect)(()=>{if(tt.status!=="running")return;let t=!1,o=setInterval(async()=>{let d=C.current?.id;if(d)try{let v=await pe(`${x}/episodes/${d}/translate?target=${E}`);if(t)return;if(Ke(v),v.status==="done"){let P=await pe(`${x}/episodes/${d}/transcript`);!t&&P.transcript&&de(P.transcript),N("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[tt.status,E,N]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let v=await pe(`${x}/jobs`);t||bt(v.items||[])}catch{}};o();let d=setInterval(o,qe?2500:2e4);return()=>{t=!0,clearInterval(d)}},[qe]);let Ge=(0,e.useCallback)((t,o,d,v=!1)=>{if(!t)return;let P=Date.now();!v&&P-Wt.current<4e3||(Wt.current=P,te(`${x}/progress/${t}`,"PUT",{position:o,duration:d}).catch(()=>{}),g(A=>({...A,[t]:{position:o,duration:d,updatedAt:P}})))},[]),je=(0,e.useCallback)(t=>{J(o=>({...o,...t})),te(`${x}/settings`,"PATCH",t).catch(()=>{})},[]),ct=(0,e.useCallback)(async()=>{if(C.current){W(""),p(!0);try{let t=await te(`${x}/episodes/${C.current.id}/transcribe`,"POST",{});Ce(t.status||"queued")}catch(t){W(t.message)}}},[]),wo=(0,e.useCallback)(()=>{if($){p(t=>!t);return}if(G==="queued"||G==="running"){p(!0);return}ct()},[$,G,ct]),jt=(0,e.useCallback)(async()=>{if(C.current)try{await te(`${x}/episodes/${C.current.id}/transcribe/cancel`,"POST",{}),N("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){W(t.message)}},[N]),Et=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await te(`${x}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await te(`${x}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await te(`${x}/jobs`,"DELETE",{key:t.key})}catch{}let d=await pe(`${x}/jobs`).catch(()=>({items:[]}));bt(d.items||[])},[]),yt=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let d=await te(`${x}/transcribe/batch`,"POST",{ids:o});N(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),z([]),rt(!1)}catch(d){N(d.message)}},[N]),yo=(0,e.useCallback)(t=>{z(o=>o.includes(t)?o.filter(d=>d!==t):[...o,t])},[]),Ee=(0,e.useCallback)(async(t,o,d)=>{try{let v=await te(`${x}${t}`,o,d||{});return v?.transcript&&de(v.transcript),v}catch(v){return N(v.message),null}},[N]),Qt=(0,e.useCallback)(t=>{Ve(t.id),Ze(t.text),wt([])},[]),_t=(0,e.useCallback)(async t=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t??L}`,"PUT",{text:De})&&(Ve(null),N("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,L,De,Ee,N]),Rt=(0,e.useCallback)(async(t,o)=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t??L}/split`,"POST",{offset:o})&&(Ve(null),N("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,L,Ee,N]),eo=(0,e.useCallback)(async t=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/lines/${t}/merge`,"POST",{})&&N("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,Ee,N]),to=(0,e.useCallback)(async()=>{if(!$)return;await Ee(`/episodes/${$.id}/transcript/undo`,"POST",{})&&N("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,Ee,N]),oo=(0,e.useCallback)(async()=>{if($)try{let t=await pe(`${x}/episodes/${$.id}/transcript/validate`);wt(t.issues||[]),N(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){N(t.message)}},[$,N]),kt=(0,e.useCallback)(async()=>{let t=C.current?.id;if(!t)return;let o=await pe(`${x}/episodes/${t}/transcript`);o.transcript&&de(o.transcript)},[]),ro=(0,e.useCallback)(async t=>{if(C.current?.id){Ke({status:"running"});try{let o=await te(`${x}/episodes/${C.current.id}/translate`,"POST",{target:t});Ke(o),o.status==="done"&&(await kt(),N("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){Ke({status:"error",error:o.message})}}},[kt,N]),no=(0,e.useCallback)(async t=>{if(mt(t),!t)return;if($?.lines?.some(d=>d.translations?.[t])){Ke({status:"done"}),await kt();return}await ro(t)},[$,ro,kt]),ko=t=>{let o=!t.favorite;i(d=>d.map(v=>v.id===t.id?{...v,favorite:o}:v)),te(`${x}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(d=>N(d.message))},ao=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${x}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(d=>!t.includes(d.id))),z([]),t.includes(ie)&&V(null),N(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},ge=(0,e.useMemo)(()=>{let t=[...n];return ve==="title"?t.sort((o,d)=>o.title.localeCompare(d.title,"zh-Hans-CN")):ve==="duration"?t.sort((o,d)=>(d.duration||0)-(o.duration||0)):t.sort((o,d)=>d.mtime-o.mtime),t},[n,ve]),Me=(0,e.useMemo)(()=>{let t=y.trim().toLowerCase();return ge.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let v=m[o.id]?.position||0,P=o.duration||0,A=P?v/P:0;return _==="inprogress"?v>5&&A<.97:_==="finished"?A>=.97:R==="unheard"?v<=5:R==="transcribed"?!!o.hasTranscript:R==="favorites"?!!o.favorite:!0})},[ge,y,_,R,m]),so=(0,e.useMemo)(()=>He.filter(t=>t.status==="queued"||t.status==="running"),[He]),at=(0,e.useMemo)(()=>Me.filter(t=>!t.hasTranscript),[Me]),Lt=(0,e.useMemo)(()=>n.filter(t=>{let o=m[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(m[o.id]?.updatedAt||0)-(m[t.id]?.updatedAt||0)).slice(0,4),[n,m]),No=(0,e.useMemo)(()=>n.reduce((t,o)=>t+(o.duration||0),0),[n]),zo=Math.round(No/3600*10)/10,$o=_==="inprogress"?"\u7EE7\u7EED\u6536\u542C":_==="finished"?"\u5DF2\u64AD\u5B8C":_==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",K=ie?n.find(t=>t.id===ie)||(k?.id===ie?k:null):null,Co=ae?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${Me.length} \u96C6 \xB7 \u5171 ${zo} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,cr=(0,e.useMemo)(()=>k?ge.findIndex(t=>t.id===k.id):-1,[ge,k]),st=(0,e.useCallback)(()=>{let t=ee.current;if(t){if(!C.current){let o=Me[0]||ge[0];o&&Ye(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[Me,ge]),Ye=(0,e.useCallback)((t,o=!0)=>{let d=ee.current;if(!d||!t)return;if(C.current&&C.current.id===t.id){o&&st();return}C.current&&!d.ended&&d.currentTime>1&&Ge(C.current.id,d.currentTime,d.duration||xe.current,!0),C.current=t,j(t),V(A=>A&&t.id),w(t.duration||0);let v=m[t.id]?.position||0,P=v>5&&(!t.duration||v<t.duration-10)?v:0;We.current=P,X(P),t.source==="xyz"?d.src=Xe.current?`${Xe.current}/xyz/${t.id.slice(3)}/audio`:`${x}/episodes/${t.id}/audio`:d.src=Xe.current?`${Xe.current}/episodes/${t.id}/audio`:`${x}/episodes/${t.id}/audio`,d.load(),d.playbackRate=nt.current.rate||1,d.volume=nt.current.volume??.9,o&&d.play().catch(()=>{}),je({lastEpisodeId:t.id})},[m,Ge,je,st]),So=(0,e.useCallback)(async t=>{let o=t.public?`${x}/xyz/public/play`:`${x}/xyz/episodes/${encodeURIComponent(t.eid)}/play`,d=t.public?{pid:t.pid,eid:t.eid}:{},v=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),P=await v.json().catch(()=>({}));if(!v.ok)throw new Error(P.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ne(),Ye(P.item,!0)},[Ne,Ye]);(0,e.useEffect)(()=>{let t=y.trim();if(t.length<2){re([]);return}let o=window.setTimeout(()=>{pe(`${x}/search?q=${encodeURIComponent(t)}`).then(d=>re(Array.isArray(d.items)?d.items:[])).catch(()=>re([]))},250);return()=>window.clearTimeout(o)},[y]);let Nt=(0,e.useCallback)((t,o=!0)=>{t&&(Ye(t,o),V(t.id))},[Ye]),be=(0,e.useCallback)(t=>{let o=ee.current;if(!o||!C.current)return;let d=Number(t);if(!Number.isFinite(d))return;let v=Number(xe.current)||0,P=Number.isFinite(o.duration)&&o.duration>0?o.duration:v,A=Math.max(0,P>0?Math.min(d,P):d);try{o.currentTime=A}catch{We.current=A;return}X(A),Ge(C.current.id,A,P||v,!0)},[Ge]),Mo=(0,e.useCallback)(t=>{let o=n.find(d=>d.id===t.episodeId);if(o){if(C.current?.id===t.episodeId){be(t.start),V(o.id);return}We.current=t.start,Nt(o,!1)}},[n,Nt,be]),io=(0,e.useCallback)(t=>{let o=Zt.current;if(!o)return null;let d=o.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(t.clientX-d.left)/d.width)):null},[]),zt=(0,e.useCallback)(t=>{let o=io(t),d=Number.isFinite(xe.current)&&xe.current>0?xe.current:Number.isFinite(ee.current?.duration)?ee.current.duration:0;o==null||!d||be(o*d)},[io,be]),To=(0,e.useCallback)(t=>{t.preventDefault(),Dt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}zt(t)},[zt]),Po=(0,e.useCallback)(t=>{Dt.current&&zt(t)},[zt]),lo=(0,e.useCallback)(t=>{Dt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),Io=(0,e.useCallback)(t=>{let o=ee.current;if(!o)return;let d=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),be((o.currentTime||0)-d)),t.key==="ArrowRight"&&(t.preventDefault(),be((o.currentTime||0)+d)),t.key==="Home"&&(t.preventDefault(),be(0)),t.key==="End"&&(t.preventDefault(),be(Number.isFinite(o.duration)?o.duration:0))},[be]),ut=(0,e.useCallback)(t=>{let o=ee.current;if(!o||!C.current)return;let d=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||xe.current||0)-1));o.currentTime=d,X(d)},[]),At=(0,e.useCallback)(t=>{if(!ge.length)return;let d=((C.current?ge.findIndex(v=>v.id===C.current.id):-1)+t+ge.length)%ge.length;Ye(ge[d],!0)},[ge,Ye]),Do=(0,e.useCallback)(t=>{let o=ee.current;o&&(o.playbackRate=t),je({rate:t}),oe(!1)},[je]);(0,e.useEffect)(()=>{if(!B)return;let t=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||oe(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[B]);let $t=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),d=ee.current;d&&(d.volume=o),je({volume:o})},[je]),jo=(0,e.useCallback)(()=>{let t=ee.current,o=nt.current.volume>0?0:.9;t&&(t.volume=o),je({volume:o})},[je]),Eo=()=>{let t=ee.current;if(!t||!C.current)return;let o=performance.now();o-(Xt.current||0)<400||(Xt.current=o,X(t.currentTime),Ge(C.current.id,t.currentTime,t.duration||xe.current))},Lo=()=>{let t=ee.current,o=C.current;if(!t||!o)return;let d=Number.isFinite(t.duration)?t.duration:o.duration||0;w(d);let v=We.current;We.current=0,v>0&&v<d-1&&(t.currentTime=v,X(v))},Ao=()=>{let t=ee.current;C.current&&Ge(C.current.id,t?.duration||xe.current||0,t?.duration||xe.current||0,!0),At(1)},Oo=async t=>{await te(`${x}/folders`,"POST",{path:t}),await Ne(),N("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Bo=async()=>{let t=await fetch(`${x}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Uo=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),ht||Fe(!0))},Ko=t=>{t.currentTarget.contains(t.relatedTarget)||Fe(!1)},Fo=async t=>{t.preventDefault(),Fe(!1);let o=t.dataTransfer,d=[...o?.files||[]],v=d.map(H=>H.path).filter(H=>typeof H=="string"&&H),P=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(H=>H.trim()).filter(H=>H.startsWith("file://")).map(H=>decodeURIComponent(H.replace(/^file:\/\//,""))),A=[...new Set([...v,...P])];if(A.length){try{let H=await te(`${x}/import/paths`,"POST",{paths:A});await Ne(),N(H.added?`\u5DF2\u6DFB\u52A0 ${H.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(H){q(H.message)}return}let Qe=d.filter(H=>H.size>0);if(!Qe.length){N("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let _e=`drop-${Date.now()}`,Ct="",Ut=0;for(let H of Qe)try{let po=await fetch(`${x}/import/upload?name=${encodeURIComponent(H.name)}&batch=${_e}`,{method:"POST",body:H}),Ho=await po.json();po.ok&&(Ct=Ho.folder||Ct,Ut+=1)}catch{}if(Ct)try{await te(`${x}/folders`,"POST",{path:Ct})}catch{}await Ne(),N(Ut?`\u5DF2\u5BFC\u5165 ${Ut} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},qo=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await te(`${x}/folders`,"DELETE",{path:t}),await Ne(),N("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){q(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let d=o.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),st()):o.key==="ArrowRight"?(o.preventDefault(),ut(15)):o.key==="ArrowLeft"?(o.preventDefault(),ut(-15)):o.key==="ArrowUp"?(o.preventDefault(),$t(nt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),$t(nt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[st,ut,$t]);let Ot=t=>{let o=m[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},Bt=t=>{let o=m[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${gt?"nav-collapsed":""}`,onDragOver:Uo,onDragLeave:Ko,onDrop:Fo},ht?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,gt?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Yt},e.default.createElement(Q,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(Q,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.11"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Yt},e.default.createElement(Q,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Lt.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(Ot).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([t,o,d])=>e.default.createElement("button",{key:t,className:`nav-item ${_===t?"active":""}`,onClick:()=>ye(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},d||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>$e(!0)},e.default.createElement(Q,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(Q,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},vo(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>qo(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,$o),e.default.createElement("p",{className:"subline"},Co)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${qe?"is-on":""}`,onClick:()=>xt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(Q,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",so.length?` ${so.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Je?"is-on":""}`,onClick:()=>{rt(t=>!t),z([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(Q,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(Q,{name:"search",size:16}),e.default.createElement("input",{value:y,onChange:t=>b(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:ve,onChange:t=>we(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Je?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",a.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>z(Me.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!at.length,onClick:()=>yt(at.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",at.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!a.length,onClick:()=>yt(a)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!a.length,onClick:()=>ao(a)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{z([]),rt(!1)}},"\u53D6\u6D88")):null,he?e.default.createElement("div",{className:"banner error",onClick:()=>q("")},he," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,K?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>V(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},K.artist,K.album?` \xB7 ${K.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(it,{item:K,size:288})),e.default.createElement("h2",{className:"episode-title"},K.title),e.default.createElement("p",{className:"episode-sub"},K.artist,K.album?` \xB7 ${K.album}`:""),e.default.createElement("p",{className:"episode-path",title:K.file},K.location||K.file),e.default.createElement("p",{className:"episode-stats"},Kt(K.duration)," \xB7 ",Ft(K.mtime)," \xB7 \u5DF2\u542C ",Math.round(Bt(K)),"%"),K.shownotes?e.default.createElement("div",{className:`episode-notes ${S?"is-open":""}`},e.default.createElement("button",{className:"notes-head",onClick:()=>U(t=>!t)},"\u5355\u96C6\u4ECB\u7ECD ",S?"\u6536\u8D77":"\u5C55\u5F00"),e.default.createElement("p",{className:"notes-body"},K.shownotes)):null,e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:st},ne&&k?.id===K.id?"\u6682\u505C":"\u64AD\u653E"),G==="queued"||G==="running"?e.default.createElement("button",{className:"btn ghost",onClick:jt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:ct},K.source==="xyz"?$?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>ao([K.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Tt,{inline:!0,transcript:$,status:G,progress:ke?.progress,stage:ke?.stage,chunks:ke?.chunks,queued:ke?.queued,elapsed:Be,editingId:L,draft:De,onDraftChange:Ze,onEditLine:Qt,onSaveLine:_t,onCancelEdit:()=>Ve(null),onSplitLine:Rt,onMergeLine:eo,onUndo:to,onValidate:oo,issues:pt,onCancel:jt,error:Ue,position:Z,onSeek:be,onClose:()=>V(null),onStart:ct,target:E,job:tt,onChangeTarget:no,onOpenSettings:()=>ot(!0)})))):_==="xyz"?e.default.createElement(Ht,{onPlay:So,currentId:k?.id}):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${R===t?"is-on":""}`,onClick:()=>me(t)},o))),_==="all"&&!y&&Lt.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Lt.map(t=>{let o=Bt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${k?.id===t.id?"is-current":""}`,onClick:()=>Nt(t,!0)},e.default.createElement(it,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,y.trim().length>=2&&ue.length>0?e.default.createElement("section",{className:"search-hits"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),e.default.createElement("span",{className:"col-duration"},ue.length)),ue.map(t=>e.default.createElement("button",{key:`${t.episodeId}-${t.lineId}`,className:"hit-row",onClick:()=>Mo(t)},e.default.createElement("span",{className:"hit-time"},Te(t.start)),e.default.createElement("span",{className:"hit-text"},t.text),e.default.createElement("span",{className:"hit-title"},t.title)))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ae?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Me.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>$e(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},Me.map((t,o)=>{let d=Bt(t),v=k?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${v?"is-current":""} ${Ot(t)?"is-finished":""} ${Je&&a.includes(t.id)?"is-selected":""}`,onClick:()=>Je?yo(t.id):Nt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},Je?a.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(Q,{name:"check",size:14})):null:v&&ne?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(it,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Ft(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},Kt(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:P=>{P.stopPropagation(),ko(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},Ot(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(Q,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),Y&&k&&!K?e.default.createElement(Tt,{transcript:$,status:G,progress:ke?.progress,stage:ke?.stage,chunks:ke?.chunks,queued:ke?.queued,elapsed:Be,editingId:L,draft:De,onDraftChange:Ze,onEditLine:Qt,onSaveLine:_t,onCancelEdit:()=>Ve(null),onSplitLine:Rt,onMergeLine:eo,onUndo:to,onValidate:oo,issues:pt,onCancel:jt,error:Ue,position:Z,onSeek:be,onClose:()=>p(!1),onStart:ct,target:E,job:tt,onChangeTarget:no,onOpenSettings:()=>ot(!0)}):null,qe?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>xt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},He.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):He.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},ho(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Et(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!at.length,onClick:()=>yt(at.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",at.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!a.length,onClick:()=>yt(a)},"\u8F6C\u5199\u5DF2\u9009 ",a.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:Zt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(F||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Te(Z)} / ${Te(F)}`,onPointerDown:To,onPointerMove:Po,onPointerUp:lo,onPointerCancel:lo,onKeyDown:Io},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${F?Math.min(100,Math.max(0,Z/F*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${F?Math.min(100,Math.max(0,Z/F*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},k?e.default.createElement("button",{className:"now-open",onClick:()=>V(k.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(it,{item:k,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:k.title},k.title),e.default.createElement("div",{className:"now-artist"},k.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>At(-1)},e.default.createElement(Q,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>ut(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:st,disabled:!k&&Me.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(Q,{name:ne?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>ut(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>At(1)},e.default.createElement(Q,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Y?"active":""}`,onClick:wo,disabled:!k,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(Q,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":G==="queued"||G==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Te(Z)," / ",Te(F)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>oe(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":B},T.rate,"\xD7"),B?e.default.createElement("span",{className:"rate-menu",role:"menu"},Ro.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===T.rate,className:t===T.rate?"is-on":"",onClick:()=>Do(t)},t,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:jo,title:"\u9759\u97F3"},e.default.createElement(Q,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:t=>$t(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),Pe?e.default.createElement(er,{onClose:()=>$e(!1),onSubmit:Oo,onPick:Bo}):null,se?e.default.createElement(tr,{config:I,onClose:()=>ot(!1),onSave:async t=>{let o=await te(`${x}/translate/settings`,"PUT",t);Se(o),ot(!1),N("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ae?e.default.createElement("div",{className:"toast"},Ae):null,e.default.createElement("audio",{ref:ee,preload:"metadata",onPlay:()=>le(!0),onPause:()=>{le(!1);let t=ee.current;C.current&&t&&t.currentTime>0&&!t.ended&&Ge(C.current.id,t.currentTime,t.duration||xe.current,!0)},onTimeUpdate:Eo,onLoadedMetadata:Lo,onEnded:Ao,onError:()=>{le(!1),N("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Pt=require("react");function or(n){let i=String(n||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(m=>Number.parseFloat(m));if(s.length<3||s.length>3&&s[3]===0)return null;let c=m=>{let g=m/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function rr(){for(let n of[document.body,document.documentElement]){if(!n)continue;let i=getComputedStyle(n).backgroundColor,s=or(i);if(s!==null)return s}return null}function xo(){let n=rr();if(n!==null)return n>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function It(){let[n,i]=(0,Pt.useState)(xo);return(0,Pt.useEffect)(()=>{let s=()=>i(xo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let m=window.matchMedia("(prefers-color-scheme: light)");return m.addEventListener?.("change",s),()=>{c.disconnect(),m.removeEventListener?.("change",s)}},[]),n}var r=Re(require("react"),1);var O="/podwave/api";async function ce(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Le(n,i,s){let c=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),m=await c.json().catch(()=>({}));if(!c.ok)throw new Error(m.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return m}function nr(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function lt(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function ar(n){if(!n)return"";let i=new Date(n),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Vt(){let n=It(),[i,s]=(0,r.useState)([]),[c,m]=(0,r.useState)([]),[g,f]=(0,r.useState)({asrModel:"",translateModel:""}),[M,T]=(0,r.useState)(null),[J,B]=(0,r.useState)(null),[oe,S]=(0,r.useState)({showSidebarPanel:!0}),[U,y]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[b,ue]=(0,r.useState)(null),[re,ve]=(0,r.useState)(null),[we,_]=(0,r.useState)(null),[ye,R]=(0,r.useState)(!1),[me,ie]=(0,r.useState)("auto"),[V,k]=(0,r.useState)(!1),[j,ne]=(0,r.useState)(null),[le,Z]=(0,r.useState)(!1),[X,F]=(0,r.useState)(""),[w,ae]=(0,r.useState)(15),[D,Pe]=(0,r.useState)(!0),[$e,he]=(0,r.useState)("api"),[q,Ae]=(0,r.useState)("https://api.deepseek.com"),[Oe,$]=(0,r.useState)("deepseek-chat"),[de,G]=(0,r.useState)(""),[Ce,Be]=(0,r.useState)(""),[Ie,Ue]=(0,r.useState)(""),[W,Y]=(0,r.useState)(""),[p,I]=(0,r.useState)(""),[Se,E]=(0,r.useState)(""),mt=(0,r.useCallback)(async()=>{try{let[a,z,L,Ve,De,Ze,pt,wt]=await Promise.all([ce(`${O}/history`),ce(`${O}/models`),ce(`${O}/translate/settings`),ce(`${O}/ui-settings`),ce(`${O}/transcribe/settings`),ce(`${O}/import/settings`),ce(`${O}/setup`),ce(`${O}/update`)]);ue(pt),ne(wt),pt?.job?.status==="running"&&k(!0),y({mode:Ze.mode||"copy",orphans:Ze.orphans||0,orphanBytes:Ze.orphanBytes||0}),S({showSidebarPanel:Ve?.showSidebarPanel!==!1}),F((De.hotwords||[]).join(" ")),ae(De.chunkMinutes||15),Pe(De.diarize!==!1),s(a.items||[]),m(z.models||[]),f(z.config||{asrModel:"",translateModel:""}),T(z.transcribe||null),Be(z.config?.asrModel||""),Ue(z.config?.translateModel||""),B(L),he(L.provider||"api"),Ae(L.apiBase||"https://api.deepseek.com"),$(L.apiModel||"deepseek-chat"),G(""),E("")}catch(a){E(a.message)}},[]);(0,r.useEffect)(()=>{mt()},[mt]),(0,r.useEffect)(()=>{let a=!1;return ce(`${O}/setup/plan?source=${me}`).then(z=>{a||ve(z)}).catch(()=>{}),()=>{a=!0}},[me,b?.job?.status]),(0,r.useEffect)(()=>{if(!V&&b?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let z=await ce(`${O}/setup`);ue(z),z.job?.status!=="running"&&k(!1)}catch{}},2500);return()=>window.clearInterval(a)},[V,b?.job?.status]);let tt=async()=>{E(""),k(!0);try{await Le(`${O}/setup/install`,"POST",{source:me});let a=await ce(`${O}/setup`);ue(a),se("\u5F00\u59CB\u5B89\u88C5")}catch(a){k(!1),E(a.message)}},Ke=async()=>{try{await Le(`${O}/setup/cancel`,"POST",{}),se("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){E(a.message)}},se=a=>{I(a),window.setTimeout(()=>I(""),2400)},ot=async()=>{R(!0);try{let a=await ce(`${O}/setup/verify`);_(a),se(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){se(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{R(!1)}},gt=async()=>{try{let a=await ce(`${O}/setup/diagnose`),z=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(z)}catch{let L=document.createElement("textarea");L.value=z,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),L.remove()}se("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){se(a.message||"\u590D\u5236\u5931\u8D25")}},ft=async()=>{Y("api"),E("");try{let a={provider:$e,apiBase:q,apiModel:Oe};de.trim()&&(a.apiKey=de.trim());let z=await Le(`${O}/translate/settings`,"PUT",a);B(z),G(""),se("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{Y("")}},ht=async()=>{Y("models"),E("");try{let a=await Le(`${O}/models`,"PUT",{asrModel:Ce,translateModel:Ie});f(a.config),m(a.models||[]),T(a.transcribe||null),se("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{Y("")}},Fe=c.length?c:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:M?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:J?.localReady}],ke=async()=>{Z(!0);try{ne(await ce(`${O}/update?force=1`))}catch{se("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Z(!1)}},dt=Fe.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),qe=Fe.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),xt=async()=>{Y("ui"),E("");try{let a=await Le(`${O}/ui-settings`,"PUT",{showSidebarPanel:oe.showSidebarPanel});S({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),se("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{Y("")}},He=async a=>{Y("import"),E("");try{let z=await Le(`${O}/import/settings`,"PUT",{mode:a});y(L=>({...L,mode:z.mode})),se("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(z){E(z.message)}finally{Y("")}},bt=async()=>{if(U.orphans&&window.confirm(`\u6E05\u7406 ${U.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){Y("imports"),E("");try{let a=await Le(`${O}/imports/orphans`,"DELETE",{});y(z=>({...z,orphans:0,orphanBytes:0})),se(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){E(a.message)}finally{Y("")}}},Je=async()=>{Y("transcribe"),E("");try{let a=X.split(/[\s,，、]+/).map(L=>L.trim()).filter(Boolean).slice(0,500),z=await Le(`${O}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(w)||15)),diarize:D});F((z.hotwords||[]).join(" ")),ae(z.chunkMinutes||15),Pe(z.diarize!==!1),se("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{Y("")}},rt=Fe;return r.default.createElement("div",{className:"podwave-root","data-pw-theme":n,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,Mt),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Se?r.default.createElement("div",{className:"banner error",onClick:()=>E("")},Se):null,p?r.default.createElement("div",{className:"settings-message"},p):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),b?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},b.platform?.osLabel," \xB7 ",b.platform?.arch," \xB7 ",b.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",b.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",b.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:gt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:ye,onClick:ot},ye?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),we?r.default.createElement("ul",{className:"setup-components"},we.checks.map(a=>r.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(b.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},lt(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:me,onChange:a=>ie(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),re?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",lt(re.totalBytes)," \xB7 ",re.items.length," \u9879"),r.default.createElement("ul",null,re.items.map(a=>r.default.createElement("li",{key:a.id},r.default.createElement("span",null,a.label),r.default.createElement("span",null,a.bytes?lt(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:V||b.job?.status==="running",onClick:tt},V||b.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),b.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:Ke},"\u53D6\u6D88"):null),b.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,b.job.stage||b.job.status),r.default.createElement("span",null,b.job.progress||0,"% \xB7 ",lt(b.job.bytes)," / ",lt(b.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${b.job.progress||0}%`}})),b.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",b.job.error):null,b.job.status==="done"&&(!b.job.summary||!b.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(b.job.summary)&&b.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},b.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",lt(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?r.default.createElement("ul",{className:"history-list"},i.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${nr(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},ar(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:X,onChange:a=>F(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:w,onChange:a=>ae(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:D,onChange:a=>Pe(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Je,disabled:W==="transcribe"},W==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:U.mode==="copy",onChange:()=>He("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:U.mode==="reference",onChange:()=>He("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:bt,disabled:W==="imports"||!U.orphans},U.orphans?`\u6E05\u7406 ${U.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(U.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:$e,onChange:a=>he(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:q,onChange:a=>Ae(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:Oe,onChange:a=>$(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:de,onChange:a=>G(a.target.value),placeholder:J?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${J.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ft,disabled:W==="api"},W==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},J?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:oe.showSidebarPanel,onChange:a=>S({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:xt,disabled:W==="ui"},W==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:Ce,onChange:a=>Be(a.target.value)},(dt.length?dt:rt).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},M?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Ie,onChange:a=>Ue(a.target.value)},(qe.length?qe:rt).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},J?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ht,disabled:W==="models"},W==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),r.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("div",{className:"field-row"},r.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),r.default.createElement("span",{className:"settings-status"},j?.current?`v${j.current}`:"\u2014")),r.default.createElement("div",{className:"field-row"},r.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),r.default.createElement("span",{className:"settings-status"},j?.latest?`v${j.latest}`:j?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),r.default.createElement("p",{className:"settings-hint"},j?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":j?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${j.error}\uFF09\u3002`:j?.latest?"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ke,disabled:le},le?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),j?.checkedAt?r.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(j.checkedAt).toLocaleString()):null))))}function sr({size:n=16}){return ze.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},ze.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),ze.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ze.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),ze.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ze.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ir(){let n=It();return ze.default.createElement("div",{className:"podwave-root","data-pw-theme":n},ze.default.createElement("style",null,Mt),ze.default.createElement(Jt,null))}function lr(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},ir)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Vt));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},m=g=>{if(c(!g),g&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},sr);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>m(g?.showSidebarPanel!==!1)).catch(()=>m(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{m(g?.detail?.showSidebarPanel!==!1)})}var dr=["slots"];

return module.exports}})
