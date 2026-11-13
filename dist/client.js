window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var qo=Object.create;var yt=Object.defineProperty;var Ho=Object.getOwnPropertyDescriptor;var Jo=Object.getOwnPropertyNames;var Vo=Object.getPrototypeOf,Zo=Object.prototype.hasOwnProperty;var Xo=(n,i)=>{for(var s in i)yt(n,s,{get:i[s],enumerable:!0})},lo=(n,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let m of Jo(i))!Zo.call(n,m)&&m!==s&&yt(n,m,{get:()=>i[m],enumerable:!(c=Ho(i,m))||c.enumerable});return n};var Ye=(n,i,s)=>(s=n!=null?qo(Vo(n)):{},lo(i||!n||!n.__esModule?yt(s,"default",{value:n,enumerable:!0}):s,n)),Wo=n=>lo(yt({},"__esModule",{value:!0}),n);var lr={};Xo(lr,{apply:()=>sr,inject:()=>ir});module.exports=Wo(lr);var Pe=Ye(require("react"),1);var kt=`
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
`;var e=Ye(require("react"),1);var h=Ye(require("react"),1);function Q({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),h.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),h.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),h.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return h.default.createElement("svg",{...s},h.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),h.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),h.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),h.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),h.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),h.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Bt=Ye(require("react"),1);function Ee(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),c=Math.floor(i%3600/60),m=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${c}:${String(m).padStart(2,"0")}`}function At(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Ot(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function po(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function co(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Yo="/podwave/api";function at({item:n,size:i=44,className:s=""}){let c={width:i,height:i};return n&&n.hasCover?Bt.default.createElement("img",{className:`cover ${s}`,style:c,src:`${Yo}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Bt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},po(n&&n.title))}var u=Ye(require("react"),1);var uo="/podwave/api";function Nt({transcript:n,status:i,progress:s,stage:c,chunks:m,queued:g,elapsed:f,error:M,position:T,onSeek:U,onClose:A,onStart:te,onCancel:k,target:O,job:N,onChangeTarget:x,onOpenSettings:ne,inline:le=!1,editingId:Z=null,draft:ye="",onDraftChange:ve,onEditLine:ke,onSaveLine:de,onCancelEdit:V,onSplitLine:z,onMergeLine:ae,onUndo:se,onValidate:oe,issues:B=[]}){let X=(0,u.useRef)(null),E=(0,u.useRef)(null),_=n?.lines?.findIndex(w=>T>=w.start&&T<w.end)??-1;(0,u.useEffect)(()=>{if(_<0||!X.current)return;X.current.querySelector(`[data-seg="${_}"]`)?.scrollIntoView({block:"nearest"})},[_]);let pe=i==="queued"||i==="running";return u.default.createElement("section",{className:`transcript-panel ${le?"inline":""}`},u.default.createElement("header",{className:"transcript-head"},u.default.createElement("h3",null,"\u5B57\u5E55"),n?u.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,u.default.createElement("div",{className:"transcript-actions"},u.default.createElement("select",{className:"tr-select",value:O,onChange:w=>x(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},u.default.createElement("option",{value:""},"\u5BF9\u7167"),u.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),u.default.createElement("option",{value:"en"},"English")),u.default.createElement("button",{className:"mini-link",onClick:ne},"\u8BBE\u7F6E"),n?u.default.createElement(u.default.Fragment,null,u.default.createElement("button",{className:"mini-link",onClick:se,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),u.default.createElement("button",{className:"mini-link",onClick:oe,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),u.default.createElement("a",{className:"mini-link",href:`${uo}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),u.default.createElement("a",{className:"mini-link",href:`${uo}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,le?null:u.default.createElement("button",{className:"transcript-close",onClick:A,title:"\u6536\u8D77"},"\xD7"))),u.default.createElement("div",{className:"transcript-body",ref:X},n&&pe?u.default.createElement("div",{className:"tr-strip"},u.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min((m.done||0)+1,m.total)}/${m.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),k?u.default.createElement("button",{className:"seg-tool",onClick:k},"\u53D6\u6D88"):null):null,n&&B?.length?u.default.createElement("div",{className:"tr-issues"},B.slice(0,5).map(w=>u.default.createElement("div",{key:w},"\xB7 ",w)),B.length>5?u.default.createElement("div",null,"\u2026\u5171 ",B.length," \u6761"):null):null,N?.status==="running"?u.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,N?.status==="error"?u.default.createElement("div",{className:"tr-running err"},N.error):null,n?n.lines.map((w,ce)=>u.default.createElement("div",{key:w.id,"data-seg":ce,className:`seg-row ${ce===_?"active":""} ${Z===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ee(w.start)}`,onClick:()=>U(w.start),onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),U(w.start))}},u.default.createElement("span",{className:"seg-time"},Ee(w.start)),Z===w.id?u.default.createElement("span",{className:"seg-edit",onClick:I=>I.stopPropagation()},u.default.createElement("textarea",{ref:E,value:ye,rows:Math.min(4,Math.max(2,Math.ceil((ye.length||1)/40))),onChange:I=>ve(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.metaKey||I.ctrlKey)&&de(w.id),I.key==="Escape"&&V()}}),u.default.createElement("span",{className:"seg-edit-actions"},u.default.createElement("button",{className:"seg-tool",onClick:()=>de(w.id)},"\u4FDD\u5B58"),u.default.createElement("button",{className:"seg-tool",onClick:()=>z(w.id,E.current?.selectionStart??Math.floor(ye.length/2))},"\u62C6\u5206"),u.default.createElement("button",{className:"seg-tool",onClick:V},"\u53D6\u6D88"))):u.default.createElement(u.default.Fragment,null,w.speaker!=null?u.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},n.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,u.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[O]?u.default.createElement("span",{className:"seg-trans"},w.translations[O]):null),u.default.createElement("span",{className:"seg-tools"},u.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:I=>{I.stopPropagation(),ke(w)}},"\u270E"),ce<n.lines.length-1?u.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:I=>{I.stopPropagation(),ae(w.id)}},"\u21E3"):null)))):pe?u.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min(m.done+1,m.total)}/${m.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?u.default.createElement("span",{className:"tx-progress"},u.default.createElement("span",{style:{width:`${s.percent}%`}})):null,u.default.createElement("br",null),u.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),u.default.createElement("br",null),k?u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:k},"\u53D6\u6D88\u8F6C\u5199"):null):M?u.default.createElement("div",{className:"transcript-status"},u.default.createElement("span",{className:"err"},M),u.default.createElement("br",null),u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:te},"\u91CD\u8BD5")):u.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",u.default.createElement("br",null),u.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:te},"\u5F00\u59CB\u8F6C\u5199"))))}var l=Ye(require("react"),1),xe="/podwave/api";async function Qe(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function ct(n,i){let s=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function vo(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function mo(n){if(!n)return"";let i=new Date(n);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Kt({onPlay:n,currentId:i}){let[s,c]=(0,l.useState)(null),[m,g]=(0,l.useState)(""),[f,M]=(0,l.useState)(""),[T,U]=(0,l.useState)(""),[A,te]=(0,l.useState)(""),[k,O]=(0,l.useState)(0),[N,x]=(0,l.useState)(!1),[ne,le]=(0,l.useState)(""),[Z,ye]=(0,l.useState)(""),[ve,ke]=(0,l.useState)([]),[de,V]=(0,l.useState)(!1),[z,ae]=(0,l.useState)(null),[se,oe]=(0,l.useState)([]),[B,X]=(0,l.useState)(null),[E,_]=(0,l.useState)(!1),[pe,w]=(0,l.useState)(""),[ce,I]=(0,l.useState)(null),[De,Ne]=(0,l.useState)(!1),ze=(0,l.useCallback)(async()=>{V(!0);try{let p=await Qe(`${xe}/xyz/subscriptions`);ke(p.items||[])}catch(p){q(p)}finally{V(!1)}},[]);function q(p){let j=String(p?.message||"");if(j.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Ue=>({...Ue||{},loggedIn:!1})),ke([]),ae(null),oe([]),le(""),g("\u767B\u5F55\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u7C98\u8D34 refresh token \u6216 access token\u3002");return}g(C(j))}function C(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6539\u7528 refresh token \u767B\u5F55\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function ue(){try{await ct(`${xe}/xyz/open-web`,{})}catch(p){q(p)}}(0,l.useEffect)(()=>{Qe(`${xe}/xyz/status`).then(p=>{c(p),p.loggedIn&&ze()}).catch(p=>q(p))},[ze]),(0,l.useEffect)(()=>{if(!k)return;let p=setInterval(()=>O(j=>Math.max(0,j-1)),1e3);return()=>clearInterval(p)},[k]);async function W(){if(g(""),!/^1\d{10}$/.test(T.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let p=await ct(`${xe}/xyz/auth/send-code`,{phone:T.trim(),areaCode:"+86"});O(60),p.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){q(p)}finally{M("")}}async function Ie(){if(g(""),!T.trim()||!A.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await ct(`${xe}/xyz/auth/login`,{phone:T.trim(),code:A.trim(),areaCode:"+86"});let p=await Qe(`${xe}/xyz/status`);c(p),await ze()}catch(p){q(p)}finally{M("")}}async function Ke(){if(g(""),!ne.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await ct(`${xe}/xyz/auth/token`,{refreshToken:ne.trim(),deviceId:Z.trim()});let p=await Qe(`${xe}/xyz/status`);c(p),le(""),await ze()}catch(p){q(p)}finally{M("")}}async function re(){M("logout");try{await ct(`${xe}/xyz/auth/logout`,{}),c({loggedIn:!1}),ke([]),ae(null),oe([])}catch(p){q(p)}finally{M("")}}async function G(p){ae(p),oe([]),X(null),_(!0),g("");try{let j=await Qe(`${xe}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);oe(j.items||[]),X(j.loadMoreKey||null)}catch(j){q(j)}finally{_(!1)}}async function me(){if(!(!z||!B||E)){_(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:B}),j=await Qe(`${xe}/xyz/podcast/${encodeURIComponent(z.pid)}/episodes?${p}`);oe(Ue=>[...Ue,...j.items||[]]),X(j.loadMoreKey||null)}catch(p){q(p)}finally{_(!1)}}}async function Fe(p){M(`play:${p.eid}`),g("");try{await n(p)}catch(j){q(j)}finally{M("")}}async function $e(){if(g(""),!pe.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}Ne(!0);try{let p=await Qe(`${xe}/xyz/public/podcast?url=${encodeURIComponent(pe.trim())}`);I(p.podcast)}catch(p){q(p)}finally{Ne(!1)}}async function D(p){M(`pplay:${p.eid}`),g("");try{await n({...p,public:!0})}catch(j){q(j)}finally{M("")}}return s?s.loggedIn?z?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{ae(null),oe([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},z.title)),E&&se.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},se.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},mo(p.pubDate)," \xB7 ",vo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${p.eid}`,onClick:()=>Fe(p)},f===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!E&&se.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,B?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:E,onClick:me},E?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:re},"\u9000\u51FA\u767B\u5F55")),de?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},ve.map(p=>l.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>G(p)},p.cover?l.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},p.title),l.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!de&&ve.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u7528\u4F60\u8D26\u53F7\u7684 refresh token \u8BFB\u53D6\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u7528\u624B\u673A App \u626B\u7801\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:ue},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:ne,onChange:p=>le(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"})),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Z,onChange:p=>ye(p.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:Ke},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>x(p=>!p)},N?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),N?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:T,onChange:p=>U(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||k>0,onClick:W},k>0?`${k}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:A,onChange:p=>te(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:Ie},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u4EFB\u610F\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:pe,onChange:p=>w(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:De,onClick:$e},De?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ce?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},ce.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ce.author)),ce.episodes.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},mo(p.pubDate)," \xB7 ",vo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${p.eid}`,onClick:()=>D(p)},f===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),m?l.default.createElement("p",{className:"xyz-error"},m):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function go(n){if(n.type==="download")return n.status==="done"?"\u5DF2\u4E0B\u8F7D":n.status==="error"||n.status==="interrupted"?n.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${n.progress?` ${n.progress}%`:""}`;let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var b="/podwave/api",Qo=[.5,.75,1,1.25,1.5,1.75,2];async function ie(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function ee(n,i,s){let c=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let m=await c.json().catch(()=>({}));throw new Error(m.error||c.statusText)}return c.json()}function _o({onSubmit:n,onPick:i,onClose:s}){let[c,m]=(0,e.useState)(""),[g,f]=(0,e.useState)(!1),[M,T]=(0,e.useState)(!1),[U,A]=(0,e.useState)(""),te=(0,e.useRef)(null);return(0,e.useEffect)(()=>{te.current?.focus();let N=x=>{x.key==="Escape"&&s()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:N=>{N.target===N.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async N=>{if(N.preventDefault(),!(!c.trim()||g)){f(!0),A("");try{await n(c.trim()),s()}catch(x){A(x.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){T(!0),A("");try{let N=await i();if(N?.canceled)return;if(N?.error)throw new Error(N.error);N?.path&&(await n(N.path),s())}catch(N){A(N.message)}finally{T(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:te,value:c,onChange:N=>m(N.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),U?e.default.createElement("div",{className:"dialog-error"},U):null))}function Ro({config:n,onClose:i,onSave:s}){let[c,m]=(0,e.useState)(n?.provider||"api"),[g,f]=(0,e.useState)(""),[M,T]=(0,e.useState)(!1),[U,A]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:k=>{k.target===k.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async k=>{k.preventDefault(),T(!0),A("");try{await s({provider:c,apiKey:g||void 0})}catch(O){A(O.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:k=>m(k.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:k=>f(k.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),U?e.default.createElement("div",{className:"dialog-error"},U):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Ft(){let[n,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[m,g]=(0,e.useState)({}),[f,M]=(0,e.useState)({running:!1}),[T,U]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[A,te]=(0,e.useState)(!1),[k,O]=(0,e.useState)(""),[N,x]=(0,e.useState)([]),[ne,le]=(0,e.useState)("recent"),[Z,ye]=(0,e.useState)("all"),[ve,ke]=(0,e.useState)("all"),[de,V]=(0,e.useState)(null),[z,ae]=(0,e.useState)(null),[se,oe]=(0,e.useState)(!1),[B,X]=(0,e.useState)(0),[E,_]=(0,e.useState)(0),[pe,w]=(0,e.useState)(!0),[ce,I]=(0,e.useState)(!1),[De,Ne]=(0,e.useState)(""),[ze,q]=(0,e.useState)(""),[C,ue]=(0,e.useState)(null),[W,Ie]=(0,e.useState)("none"),[Ke,re]=(0,e.useState)(0),[G,me]=(0,e.useState)(""),[Fe,$e]=(0,e.useState)(!1),[D,p]=(0,e.useState)(null),[j,Ue]=(0,e.useState)(""),[Y,qe]=(0,e.useState)({status:"none"}),[Ct,_e]=(0,e.useState)(!1),[ut,Re]=(0,e.useState)(!1),[it,et]=(0,e.useState)(!1),[Ce,lt]=(0,e.useState)(null),[tt,vt]=(0,e.useState)(!1),[He,a]=(0,e.useState)([]),[$,H]=(0,e.useState)(!1),[ge,Se]=(0,e.useState)([]),[Me,Le]=(0,e.useState)(null),[mt,St]=(0,e.useState)(""),[qt,Ht]=(0,e.useState)([]),R=(0,e.useRef)(null),Je=(0,e.useRef)(""),Jt=(0,e.useRef)(null),S=(0,e.useRef)(null),be=(0,e.useRef)(0),ot=(0,e.useRef)(T),Ve=(0,e.useRef)(0),Vt=(0,e.useRef)(0),Zt=(0,e.useRef)(0),Xt=(0,e.useRef)(0),xo=(0,e.useRef)(!1),Mt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{ot.current=T},[T]),(0,e.useEffect)(()=>{S.current=z},[z]),(0,e.useEffect)(()=>{be.current=E},[E]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await ie(`${b}/ui-settings`);!t&&o&&Re(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Wt=(0,e.useCallback)(()=>{Re(t=>{let o=!t;return fetch(`${b}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),y=(0,e.useCallback)(t=>{q(t),window.clearTimeout(Xt.current),Xt.current=window.setTimeout(()=>q(""),2600)},[]),Te=(0,e.useCallback)(async()=>{let t=await ie(`${b}/episodes`);return i(t.items||[]),c(t.folders||[]),g(t.progress||{}),M(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await ie(`${b}/health`).catch(()=>({}));o.mediaBase&&(Je.current=o.mediaBase);let d=await ie(`${b}/state`);if(t)return;U(d.settings),c(d.folders||[]);let v=await Te();if(t)return;let P=d.settings?.lastEpisodeId,L=P?(v.items||[]).find(We=>We.id===P):null;if(L){ae(L),_(L.duration||0);let We=v.progress?.[L.id]?.position||0;Ve.current=We>5?We:0,X(Ve.current);let Ge=R.current;Ge&&(Ge.src=Je.current?`${Je.current}/episodes/${L.id}/audio`:`${b}/episodes/${L.id}/audio`,Ge.load(),Ge.playbackRate=d.settings?.rate||1,Ge.volume=d.settings?.volume??.9)}w(!1),xo.current=!0}catch(o){t||(Ne(o.message),w(!1))}})(),()=>{t=!0}},[Te]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{Te().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,Te]),(0,e.useEffect)(()=>{let t=!1;return ue(null),me(""),re(0),z?.id?((async()=>{try{let o=await ie(`${b}/episodes/${z.id}/transcript`);if(t)return;Ie(o.status),lt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?ue(o.transcript):o.status==="queued"||o.status==="running"?(re(o.elapsedMs||0),o.transcript&&ue(o.transcript)):o.status==="error"&&me(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||me(o.message)}})(),()=>{t=!0}):(Ie("none"),()=>{t=!0})},[z?.id]),(0,e.useEffect)(()=>{ie(`${b}/translate/settings`).then(p).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(W!=="queued"&&W!=="running")return;let t=!1,o=setInterval(async()=>{let d=S.current?.id;if(d)try{let v=await ie(`${b}/episodes/${d}/transcript`);if(t)return;Ie(v.status),lt(v.status==="queued"||v.status==="running"?v:null),re(v.elapsedMs||0),(v.status==="queued"||v.status==="running")&&v.transcript?ue(v.transcript):v.status==="done"&&v.transcript?(ue(v.transcript),$e(!0),y("\u8F6C\u5199\u5B8C\u6210")):v.status==="error"&&me(v.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[W,y]),(0,e.useEffect)(()=>{if(Y.status!=="running")return;let t=!1,o=setInterval(async()=>{let d=S.current?.id;if(d)try{let v=await ie(`${b}/episodes/${d}/translate?target=${j}`);if(t)return;if(qe(v),v.status==="done"){let P=await ie(`${b}/episodes/${d}/transcript`);!t&&P.transcript&&ue(P.transcript),y("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[Y.status,j,y]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let v=await ie(`${b}/jobs`);t||a(v.items||[])}catch{}};o();let d=setInterval(o,tt?2500:2e4);return()=>{t=!0,clearInterval(d)}},[tt]);let Ze=(0,e.useCallback)((t,o,d,v=!1)=>{if(!t)return;let P=Date.now();!v&&P-Zt.current<4e3||(Zt.current=P,ee(`${b}/progress/${t}`,"PUT",{position:o,duration:d}).catch(()=>{}),g(L=>({...L,[t]:{position:o,duration:d,updatedAt:P}})))},[]),Ae=(0,e.useCallback)(t=>{U(o=>({...o,...t})),ee(`${b}/settings`,"PATCH",t).catch(()=>{})},[]),dt=(0,e.useCallback)(async()=>{if(S.current){me(""),$e(!0);try{let t=await ee(`${b}/episodes/${S.current.id}/transcribe`,"POST",{});Ie(t.status||"queued")}catch(t){me(t.message)}}},[]),ho=(0,e.useCallback)(()=>{if(C){$e(t=>!t);return}if(W==="queued"||W==="running"){$e(!0);return}dt()},[C,W,dt]),Tt=(0,e.useCallback)(async()=>{if(S.current)try{await ee(`${b}/episodes/${S.current.id}/transcribe/cancel`,"POST",{}),y("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){me(t.message)}},[y]),Pt=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await ee(`${b}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await ee(`${b}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await ee(`${b}/jobs`,"DELETE",{key:t.key})}catch{}let d=await ie(`${b}/jobs`).catch(()=>({items:[]}));a(d.items||[])},[]),gt=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let d=await ee(`${b}/transcribe/batch`,"POST",{ids:o});y(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),Se([]),H(!1)}catch(d){y(d.message)}},[y]),bo=(0,e.useCallback)(t=>{Se(o=>o.includes(t)?o.filter(d=>d!==t):[...o,t])},[]),Oe=(0,e.useCallback)(async(t,o,d)=>{try{let v=await ee(`${b}${t}`,o,d||{});return v?.transcript&&ue(v.transcript),v}catch(v){return y(v.message),null}},[y]),Gt=(0,e.useCallback)(t=>{Le(t.id),St(t.text),Ht([])},[]),Yt=(0,e.useCallback)(async t=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t??Me}`,"PUT",{text:mt})&&(Le(null),y("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[C,Me,mt,Oe,y]),Qt=(0,e.useCallback)(async(t,o)=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t??Me}/split`,"POST",{offset:o})&&(Le(null),y("\u5DF2\u62C6\u6210\u4E24\u884C"))},[C,Me,Oe,y]),_t=(0,e.useCallback)(async t=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t}/merge`,"POST",{})&&y("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[C,Oe,y]),Rt=(0,e.useCallback)(async()=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/undo`,"POST",{})&&y("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[C,Oe,y]),eo=(0,e.useCallback)(async()=>{if(C)try{let t=await ie(`${b}/episodes/${C.id}/transcript/validate`);Ht(t.issues||[]),y(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){y(t.message)}},[C,y]),ft=(0,e.useCallback)(async()=>{let t=S.current?.id;if(!t)return;let o=await ie(`${b}/episodes/${t}/transcript`);o.transcript&&ue(o.transcript)},[]),to=(0,e.useCallback)(async t=>{if(S.current?.id){qe({status:"running"});try{let o=await ee(`${b}/episodes/${S.current.id}/translate`,"POST",{target:t});qe(o),o.status==="done"&&(await ft(),y("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){qe({status:"error",error:o.message})}}},[ft,y]),oo=(0,e.useCallback)(async t=>{if(Ue(t),!t)return;if(C?.lines?.some(d=>d.translations?.[t])){qe({status:"done"}),await ft();return}await to(t)},[C,to,ft]),wo=t=>{let o=!t.favorite;i(d=>d.map(v=>v.id===t.id?{...v,favorite:o}:v)),ee(`${b}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(d=>y(d.message))},ro=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${b}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(d=>!t.includes(d.id))),Se([]),t.includes(de)&&V(null),y(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},fe=(0,e.useMemo)(()=>{let t=[...n];return ne==="title"?t.sort((o,d)=>o.title.localeCompare(d.title,"zh-Hans-CN")):ne==="duration"?t.sort((o,d)=>(d.duration||0)-(o.duration||0)):t.sort((o,d)=>d.mtime-o.mtime),t},[n,ne]),je=(0,e.useMemo)(()=>{let t=k.trim().toLowerCase();return fe.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let v=m[o.id]?.position||0,P=o.duration||0,L=P?v/P:0;return Z==="inprogress"?v>5&&L<.97:Z==="finished"?L>=.97:ve==="unheard"?v<=5:ve==="transcribed"?!!o.hasTranscript:ve==="favorites"?!!o.favorite:!0})},[fe,k,Z,ve,m]),no=(0,e.useMemo)(()=>He.filter(t=>t.status==="queued"||t.status==="running"),[He]),rt=(0,e.useMemo)(()=>je.filter(t=>!t.hasTranscript),[je]),It=(0,e.useMemo)(()=>n.filter(t=>{let o=m[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(m[o.id]?.updatedAt||0)-(m[t.id]?.updatedAt||0)).slice(0,4),[n,m]),yo=(0,e.useMemo)(()=>n.reduce((t,o)=>t+(o.duration||0),0),[n]),ko=Math.round(yo/3600*10)/10,No=Z==="inprogress"?"\u7EE7\u7EED\u6536\u542C":Z==="finished"?"\u5DF2\u64AD\u5B8C":Z==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",J=de?n.find(t=>t.id===de)||(z?.id===de?z:null):null,zo=pe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${je.length} \u96C6 \xB7 \u5171 ${ko} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,dr=(0,e.useMemo)(()=>z?fe.findIndex(t=>t.id===z.id):-1,[fe,z]),nt=(0,e.useCallback)(()=>{let t=R.current;if(t){if(!S.current){let o=je[0]||fe[0];o&&Xe(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[je,fe]),Xe=(0,e.useCallback)((t,o=!0)=>{let d=R.current;if(!d||!t)return;if(S.current&&S.current.id===t.id){o&&nt();return}S.current&&!d.ended&&d.currentTime>1&&Ze(S.current.id,d.currentTime,d.duration||be.current,!0),S.current=t,ae(t),V(L=>L&&t.id),_(t.duration||0);let v=m[t.id]?.position||0,P=v>5&&(!t.duration||v<t.duration-10)?v:0;Ve.current=P,X(P),t.source==="xyz"?d.src=Je.current?`${Je.current}/xyz/${t.id.slice(3)}/audio`:`${b}/episodes/${t.id}/audio`:d.src=Je.current?`${Je.current}/episodes/${t.id}/audio`:`${b}/episodes/${t.id}/audio`,d.load(),d.playbackRate=ot.current.rate||1,d.volume=ot.current.volume??.9,o&&d.play().catch(()=>{}),Ae({lastEpisodeId:t.id})},[m,Ze,Ae,nt]),$o=(0,e.useCallback)(async t=>{let o=t.public?`${b}/xyz/public/play`:`${b}/xyz/episodes/${encodeURIComponent(t.eid)}/play`,d=t.public?{pid:t.pid,eid:t.eid}:{},v=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),P=await v.json().catch(()=>({}));if(!v.ok)throw new Error(P.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Te(),Xe(P.item,!0)},[Te,Xe]);(0,e.useEffect)(()=>{let t=k.trim();if(t.length<2){x([]);return}let o=window.setTimeout(()=>{ie(`${b}/search?q=${encodeURIComponent(t)}`).then(d=>x(Array.isArray(d.items)?d.items:[])).catch(()=>x([]))},250);return()=>window.clearTimeout(o)},[k]);let xt=(0,e.useCallback)((t,o=!0)=>{t&&(Xe(t,o),V(t.id))},[Xe]),we=(0,e.useCallback)(t=>{let o=R.current;if(!o||!S.current)return;let d=Number(t);if(!Number.isFinite(d))return;let v=Number(be.current)||0,P=Number.isFinite(o.duration)&&o.duration>0?o.duration:v,L=Math.max(0,P>0?Math.min(d,P):d);try{o.currentTime=L}catch{Ve.current=L;return}X(L),Ze(S.current.id,L,P||v,!0)},[Ze]),Co=(0,e.useCallback)(t=>{let o=n.find(d=>d.id===t.episodeId);if(o){if(S.current?.id===t.episodeId){we(t.start),V(o.id);return}Ve.current=t.start,xt(o,!1)}},[n,xt,we]),ao=(0,e.useCallback)(t=>{let o=Jt.current;if(!o)return null;let d=o.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(t.clientX-d.left)/d.width)):null},[]),ht=(0,e.useCallback)(t=>{let o=ao(t),d=Number.isFinite(be.current)&&be.current>0?be.current:Number.isFinite(R.current?.duration)?R.current.duration:0;o==null||!d||we(o*d)},[ao,we]),So=(0,e.useCallback)(t=>{t.preventDefault(),Mt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}ht(t)},[ht]),Mo=(0,e.useCallback)(t=>{Mt.current&&ht(t)},[ht]),so=(0,e.useCallback)(t=>{Mt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),To=(0,e.useCallback)(t=>{let o=R.current;if(!o)return;let d=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),we((o.currentTime||0)-d)),t.key==="ArrowRight"&&(t.preventDefault(),we((o.currentTime||0)+d)),t.key==="Home"&&(t.preventDefault(),we(0)),t.key==="End"&&(t.preventDefault(),we(Number.isFinite(o.duration)?o.duration:0))},[we]),pt=(0,e.useCallback)(t=>{let o=R.current;if(!o||!S.current)return;let d=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||be.current||0)-1));o.currentTime=d,X(d)},[]),jt=(0,e.useCallback)(t=>{if(!fe.length)return;let d=((S.current?fe.findIndex(v=>v.id===S.current.id):-1)+t+fe.length)%fe.length;Xe(fe[d],!0)},[fe,Xe]),Po=(0,e.useCallback)(t=>{let o=R.current;o&&(o.playbackRate=t),Ae({rate:t}),te(!1)},[Ae]);(0,e.useEffect)(()=>{if(!A)return;let t=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||te(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[A]);let bt=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),d=R.current;d&&(d.volume=o),Ae({volume:o})},[Ae]),Io=(0,e.useCallback)(()=>{let t=R.current,o=ot.current.volume>0?0:.9;t&&(t.volume=o),Ae({volume:o})},[Ae]),jo=()=>{let t=R.current;if(!t||!S.current)return;let o=performance.now();o-(Vt.current||0)<400||(Vt.current=o,X(t.currentTime),Ze(S.current.id,t.currentTime,t.duration||be.current))},Eo=()=>{let t=R.current,o=S.current;if(!t||!o)return;let d=Number.isFinite(t.duration)?t.duration:o.duration||0;_(d);let v=Ve.current;Ve.current=0,v>0&&v<d-1&&(t.currentTime=v,X(v))},Do=()=>{let t=R.current;S.current&&Ze(S.current.id,t?.duration||be.current||0,t?.duration||be.current||0,!0),jt(1)},Lo=async t=>{await ee(`${b}/folders`,"POST",{path:t}),await Te(),y("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Ao=async()=>{let t=await fetch(`${b}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Oo=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),it||et(!0))},Bo=t=>{t.currentTarget.contains(t.relatedTarget)||et(!1)},Ko=async t=>{t.preventDefault(),et(!1);let o=t.dataTransfer,d=[...o?.files||[]],v=d.map(K=>K.path).filter(K=>typeof K=="string"&&K),P=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(K=>K.trim()).filter(K=>K.startsWith("file://")).map(K=>decodeURIComponent(K.replace(/^file:\/\//,""))),L=[...new Set([...v,...P])];if(L.length){try{let K=await ee(`${b}/import/paths`,"POST",{paths:L});await Te(),y(K.added?`\u5DF2\u6DFB\u52A0 ${K.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(K){Ne(K.message)}return}let We=d.filter(K=>K.size>0);if(!We.length){y("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Ge=`drop-${Date.now()}`,wt="",Lt=0;for(let K of We)try{let io=await fetch(`${b}/import/upload?name=${encodeURIComponent(K.name)}&batch=${Ge}`,{method:"POST",body:K}),Uo=await io.json();io.ok&&(wt=Uo.folder||wt,Lt+=1)}catch{}if(wt)try{await ee(`${b}/folders`,"POST",{path:wt})}catch{}await Te(),y(Lt?`\u5DF2\u5BFC\u5165 ${Lt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Fo=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await ee(`${b}/folders`,"DELETE",{path:t}),await Te(),y("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Ne(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let d=o.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),nt()):o.key==="ArrowRight"?(o.preventDefault(),pt(15)):o.key==="ArrowLeft"?(o.preventDefault(),pt(-15)):o.key==="ArrowUp"?(o.preventDefault(),bt(ot.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),bt(ot.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[nt,pt,bt]);let Et=t=>{let o=m[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},Dt=t=>{let o=m[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${ut?"nav-collapsed":""}`,onDragOver:Oo,onDragLeave:Bo,onDrop:Ko},it?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,ut?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Wt},e.default.createElement(Q,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(Q,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.11"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Wt},e.default.createElement(Q,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",It.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(Et).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([t,o,d])=>e.default.createElement("button",{key:t,className:`nav-item ${Z===t?"active":""}`,onClick:()=>ye(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},d||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>I(!0)},e.default.createElement(Q,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(Q,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},co(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Fo(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,No),e.default.createElement("p",{className:"subline"},zo)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${tt?"is-on":""}`,onClick:()=>vt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(Q,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",no.length?` ${no.length}`:"")),e.default.createElement("button",{className:`tool-btn ${$?"is-on":""}`,onClick:()=>{H(t=>!t),Se([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(Q,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(Q,{name:"search",size:16}),e.default.createElement("input",{value:k,onChange:t=>O(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:ne,onChange:t=>le(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),$?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ge.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>Se(je.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!rt.length,onClick:()=>gt(rt.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",rt.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ge.length,onClick:()=>gt(ge)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!ge.length,onClick:()=>ro(ge)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{Se([]),H(!1)}},"\u53D6\u6D88")):null,De?e.default.createElement("div",{className:"banner error",onClick:()=>Ne("")},De," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,J?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>V(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},J.artist,J.album?` \xB7 ${J.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(at,{item:J,size:288})),e.default.createElement("h2",{className:"episode-title"},J.title),e.default.createElement("p",{className:"episode-sub"},J.artist,J.album?` \xB7 ${J.album}`:""),e.default.createElement("p",{className:"episode-path",title:J.file},J.location||J.file),e.default.createElement("p",{className:"episode-stats"},At(J.duration)," \xB7 ",Ot(J.mtime)," \xB7 \u5DF2\u542C ",Math.round(Dt(J)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:nt},se&&z?.id===J.id?"\u6682\u505C":"\u64AD\u653E"),W==="queued"||W==="running"?e.default.createElement("button",{className:"btn ghost",onClick:Tt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:dt},J.source==="xyz"?C?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":C?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>ro([J.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Nt,{inline:!0,transcript:C,status:W,progress:Ce?.progress,stage:Ce?.stage,chunks:Ce?.chunks,queued:Ce?.queued,elapsed:Ke,editingId:Me,draft:mt,onDraftChange:St,onEditLine:Gt,onSaveLine:Yt,onCancelEdit:()=>Le(null),onSplitLine:Qt,onMergeLine:_t,onUndo:Rt,onValidate:eo,issues:qt,onCancel:Tt,error:G,position:B,onSeek:we,onClose:()=>V(null),onStart:dt,target:j,job:Y,onChangeTarget:oo,onOpenSettings:()=>_e(!0)})))):Z==="xyz"?e.default.createElement(Kt,{onPlay:$o,currentId:z?.id}):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${ve===t?"is-on":""}`,onClick:()=>ke(t)},o))),Z==="all"&&!k&&It.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},It.map(t=>{let o=Dt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${z?.id===t.id?"is-current":""}`,onClick:()=>xt(t,!0)},e.default.createElement(at,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,k.trim().length>=2&&N.length>0?e.default.createElement("section",{className:"search-hits"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),e.default.createElement("span",{className:"col-duration"},N.length)),N.map(t=>e.default.createElement("button",{key:`${t.episodeId}-${t.lineId}`,className:"hit-row",onClick:()=>Co(t)},e.default.createElement("span",{className:"hit-time"},Ee(t.start)),e.default.createElement("span",{className:"hit-text"},t.text),e.default.createElement("span",{className:"hit-title"},t.title)))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),pe?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):je.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>I(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},je.map((t,o)=>{let d=Dt(t),v=z?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${v?"is-current":""} ${Et(t)?"is-finished":""} ${$&&ge.includes(t.id)?"is-selected":""}`,onClick:()=>$?bo(t.id):xt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},$?ge.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(Q,{name:"check",size:14})):null:v&&se?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(at,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Ot(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},At(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:P=>{P.stopPropagation(),wo(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},Et(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(Q,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),Fe&&z&&!J?e.default.createElement(Nt,{transcript:C,status:W,progress:Ce?.progress,stage:Ce?.stage,chunks:Ce?.chunks,queued:Ce?.queued,elapsed:Ke,editingId:Me,draft:mt,onDraftChange:St,onEditLine:Gt,onSaveLine:Yt,onCancelEdit:()=>Le(null),onSplitLine:Qt,onMergeLine:_t,onUndo:Rt,onValidate:eo,issues:qt,onCancel:Tt,error:G,position:B,onSeek:we,onClose:()=>$e(!1),onStart:dt,target:j,job:Y,onChangeTarget:oo,onOpenSettings:()=>_e(!0)}):null,tt?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>vt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},He.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):He.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},go(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!rt.length,onClick:()=>gt(rt.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",rt.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ge.length,onClick:()=>gt(ge)},"\u8F6C\u5199\u5DF2\u9009 ",ge.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:Jt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(E||0),"aria-valuenow":Math.round(B||0),"aria-valuetext":`${Ee(B)} / ${Ee(E)}`,onPointerDown:So,onPointerMove:Mo,onPointerUp:so,onPointerCancel:so,onKeyDown:To},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${E?Math.min(100,Math.max(0,B/E*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${E?Math.min(100,Math.max(0,B/E*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},z?e.default.createElement("button",{className:"now-open",onClick:()=>V(z.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(at,{item:z,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:z.title},z.title),e.default.createElement("div",{className:"now-artist"},z.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>jt(-1)},e.default.createElement(Q,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>pt(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:nt,disabled:!z&&je.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(Q,{name:se?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>pt(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>jt(1)},e.default.createElement(Q,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Fe?"active":""}`,onClick:ho,disabled:!z,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(Q,{name:"wave",size:15}),e.default.createElement("span",null,C?"\u5B57\u5E55":W==="queued"||W==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Ee(B)," / ",Ee(E)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>te(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":A},T.rate,"\xD7"),A?e.default.createElement("span",{className:"rate-menu",role:"menu"},Qo.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===T.rate,className:t===T.rate?"is-on":"",onClick:()=>Po(t)},t,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:Io,title:"\u9759\u97F3"},e.default.createElement(Q,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:t=>bt(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),ce?e.default.createElement(_o,{onClose:()=>I(!1),onSubmit:Lo,onPick:Ao}):null,Ct?e.default.createElement(Ro,{config:D,onClose:()=>_e(!1),onSave:async t=>{let o=await ee(`${b}/translate/settings`,"PUT",t);p(o),_e(!1),y("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ze?e.default.createElement("div",{className:"toast"},ze):null,e.default.createElement("audio",{ref:R,preload:"metadata",onPlay:()=>oe(!0),onPause:()=>{oe(!1);let t=R.current;S.current&&t&&t.currentTime>0&&!t.ended&&Ze(S.current.id,t.currentTime,t.duration||be.current,!0)},onTimeUpdate:jo,onLoadedMetadata:Eo,onEnded:Do,onError:()=>{oe(!1),y("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var zt=require("react");function er(n){let i=String(n||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(m=>Number.parseFloat(m));if(s.length<3||s.length>3&&s[3]===0)return null;let c=m=>{let g=m/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function tr(){for(let n of[document.body,document.documentElement]){if(!n)continue;let i=getComputedStyle(n).backgroundColor,s=er(i);if(s!==null)return s}return null}function fo(){let n=tr();if(n!==null)return n>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function $t(){let[n,i]=(0,zt.useState)(fo);return(0,zt.useEffect)(()=>{let s=()=>i(fo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let m=window.matchMedia("(prefers-color-scheme: light)");return m.addEventListener?.("change",s),()=>{c.disconnect(),m.removeEventListener?.("change",s)}},[]),n}var r=Ye(require("react"),1);var F="/podwave/api";async function he(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Be(n,i,s){let c=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),m=await c.json().catch(()=>({}));if(!c.ok)throw new Error(m.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return m}function or(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function st(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function rr(n){if(!n)return"";let i=new Date(n),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Ut(){let n=$t(),[i,s]=(0,r.useState)([]),[c,m]=(0,r.useState)([]),[g,f]=(0,r.useState)({asrModel:"",translateModel:""}),[M,T]=(0,r.useState)(null),[U,A]=(0,r.useState)(null),[te,k]=(0,r.useState)({showSidebarPanel:!0}),[O,N]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[x,ne]=(0,r.useState)(null),[le,Z]=(0,r.useState)(null),[ye,ve]=(0,r.useState)(null),[ke,de]=(0,r.useState)(!1),[V,z]=(0,r.useState)("auto"),[ae,se]=(0,r.useState)(!1),[oe,B]=(0,r.useState)(""),[X,E]=(0,r.useState)(15),[_,pe]=(0,r.useState)(!0),[w,ce]=(0,r.useState)("api"),[I,De]=(0,r.useState)("https://api.deepseek.com"),[Ne,ze]=(0,r.useState)("deepseek-chat"),[q,C]=(0,r.useState)(""),[ue,W]=(0,r.useState)(""),[Ie,Ke]=(0,r.useState)(""),[re,G]=(0,r.useState)(""),[me,Fe]=(0,r.useState)(""),[$e,D]=(0,r.useState)(""),p=(0,r.useCallback)(async()=>{try{let[a,$,H,ge,Se,Me,Le]=await Promise.all([he(`${F}/history`),he(`${F}/models`),he(`${F}/translate/settings`),he(`${F}/ui-settings`),he(`${F}/transcribe/settings`),he(`${F}/import/settings`),he(`${F}/setup`)]);ne(Le),Le?.job?.status==="running"&&se(!0),N({mode:Me.mode||"copy",orphans:Me.orphans||0,orphanBytes:Me.orphanBytes||0}),k({showSidebarPanel:ge?.showSidebarPanel!==!1}),B((Se.hotwords||[]).join(" ")),E(Se.chunkMinutes||15),pe(Se.diarize!==!1),s(a.items||[]),m($.models||[]),f($.config||{asrModel:"",translateModel:""}),T($.transcribe||null),W($.config?.asrModel||""),Ke($.config?.translateModel||""),A(H),ce(H.provider||"api"),De(H.apiBase||"https://api.deepseek.com"),ze(H.apiModel||"deepseek-chat"),C(""),D("")}catch(a){D(a.message)}},[]);(0,r.useEffect)(()=>{p()},[p]),(0,r.useEffect)(()=>{let a=!1;return he(`${F}/setup/plan?source=${V}`).then($=>{a||Z($)}).catch(()=>{}),()=>{a=!0}},[V,x?.job?.status]),(0,r.useEffect)(()=>{if(!ae&&x?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let $=await he(`${F}/setup`);ne($),$.job?.status!=="running"&&se(!1)}catch{}},2500);return()=>window.clearInterval(a)},[ae,x?.job?.status]);let j=async()=>{D(""),se(!0);try{await Be(`${F}/setup/install`,"POST",{source:V});let a=await he(`${F}/setup`);ne(a),Y("\u5F00\u59CB\u5B89\u88C5")}catch(a){se(!1),D(a.message)}},Ue=async()=>{try{await Be(`${F}/setup/cancel`,"POST",{}),Y("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){D(a.message)}},Y=a=>{Fe(a),window.setTimeout(()=>Fe(""),2400)},qe=async()=>{de(!0);try{let a=await he(`${F}/setup/verify`);ve(a),Y(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){Y(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{de(!1)}},Ct=async()=>{try{let a=await he(`${F}/setup/diagnose`),$=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText($)}catch{let H=document.createElement("textarea");H.value=$,H.style.position="fixed",H.style.opacity="0",document.body.appendChild(H),H.select(),document.execCommand("copy"),H.remove()}Y("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){Y(a.message||"\u590D\u5236\u5931\u8D25")}},_e=async()=>{G("api"),D("");try{let a={provider:w,apiBase:I,apiModel:Ne};q.trim()&&(a.apiKey=q.trim());let $=await Be(`${F}/translate/settings`,"PUT",a);A($),C(""),Y("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){D(a.message)}finally{G("")}},ut=async()=>{G("models"),D("");try{let a=await Be(`${F}/models`,"PUT",{asrModel:ue,translateModel:Ie});f(a.config),m(a.models||[]),T(a.transcribe||null),Y("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){D(a.message)}finally{G("")}},Re=c.length?c:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:M?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:U?.localReady}],it=Re.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),et=Re.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),Ce=async()=>{G("ui"),D("");try{let a=await Be(`${F}/ui-settings`,"PUT",{showSidebarPanel:te.showSidebarPanel});k({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),Y("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){D(a.message)}finally{G("")}},lt=async a=>{G("import"),D("");try{let $=await Be(`${F}/import/settings`,"PUT",{mode:a});N(H=>({...H,mode:$.mode})),Y("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch($){D($.message)}finally{G("")}},tt=async()=>{if(O.orphans&&window.confirm(`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){G("imports"),D("");try{let a=await Be(`${F}/imports/orphans`,"DELETE",{});N($=>({...$,orphans:0,orphanBytes:0})),Y(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){D(a.message)}finally{G("")}}},vt=async()=>{G("transcribe"),D("");try{let a=oe.split(/[\s,，、]+/).map(H=>H.trim()).filter(Boolean).slice(0,500),$=await Be(`${F}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(X)||15)),diarize:_});B(($.hotwords||[]).join(" ")),E($.chunkMinutes||15),pe($.diarize!==!1),Y("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){D(a.message)}finally{G("")}},He=Re;return r.default.createElement("div",{className:"podwave-root","data-pw-theme":n,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,kt),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),$e?r.default.createElement("div",{className:"banner error",onClick:()=>D("")},$e):null,me?r.default.createElement("div",{className:"settings-message"},me):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),x?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},x.platform?.osLabel," \xB7 ",x.platform?.arch," \xB7 ",x.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",x.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",x.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:Ct},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:ke,onClick:qe},ke?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),ye?r.default.createElement("ul",{className:"setup-components"},ye.checks.map(a=>r.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(x.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},st(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:V,onChange:a=>z(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),le?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",st(le.totalBytes)," \xB7 ",le.items.length," \u9879"),r.default.createElement("ul",null,le.items.map(a=>r.default.createElement("li",{key:a.id},r.default.createElement("span",null,a.label),r.default.createElement("span",null,a.bytes?st(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:ae||x.job?.status==="running",onClick:j},ae||x.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),x.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:Ue},"\u53D6\u6D88"):null),x.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,x.job.stage||x.job.status),r.default.createElement("span",null,x.job.progress||0,"% \xB7 ",st(x.job.bytes)," / ",st(x.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${x.job.progress||0}%`}})),x.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",x.job.error):null,x.job.status==="done"&&(!x.job.summary||!x.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(x.job.summary)&&x.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},x.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",st(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?r.default.createElement("ul",{className:"history-list"},i.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${or(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},rr(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:oe,onChange:a=>B(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:X,onChange:a=>E(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:_,onChange:a=>pe(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:vt,disabled:re==="transcribe"},re==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="copy",onChange:()=>lt("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="reference",onChange:()=>lt("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:tt,disabled:re==="imports"||!O.orphans},O.orphans?`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(O.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:w,onChange:a=>ce(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:I,onChange:a=>De(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:Ne,onChange:a=>ze(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:q,onChange:a=>C(a.target.value),placeholder:U?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${U.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:_e,disabled:re==="api"},re==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},U?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:te.showSidebarPanel,onChange:a=>k({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Ce,disabled:re==="ui"},re==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:ue,onChange:a=>W(a.target.value)},(it.length?it:He).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},M?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Ie,onChange:a=>Ke(a.target.value)},(et.length?et:He).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},U?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ut,disabled:re==="models"},re==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function nr({size:n=16}){return Pe.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Pe.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Pe.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Pe.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Pe.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Pe.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ar(){let n=$t();return Pe.default.createElement("div",{className:"podwave-root","data-pw-theme":n},Pe.default.createElement("style",null,kt),Pe.default.createElement(Ft,null))}function sr(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},ar)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Ut));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},m=g=>{if(c(!g),g&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},nr);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>m(g?.showSidebarPanel!==!1)).catch(()=>m(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{m(g?.detail?.showSidebarPanel!==!1)})}var ir=["slots"];

return module.exports}})
