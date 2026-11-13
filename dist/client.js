window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var qo=Object.create;var wt=Object.defineProperty;var Ho=Object.getOwnPropertyDescriptor;var Jo=Object.getOwnPropertyNames;var Vo=Object.getPrototypeOf,Zo=Object.prototype.hasOwnProperty;var Xo=(n,i)=>{for(var s in i)wt(n,s,{get:i[s],enumerable:!0})},lo=(n,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of Jo(i))!Zo.call(n,v)&&v!==s&&wt(n,v,{get:()=>i[v],enumerable:!(c=Ho(i,v))||c.enumerable});return n};var Ge=(n,i,s)=>(s=n!=null?qo(Vo(n)):{},lo(i||!n||!n.__esModule?wt(s,"default",{value:n,enumerable:!0}):s,n)),Wo=n=>lo(wt({},"__esModule",{value:!0}),n);var lr={};Xo(lr,{apply:()=>sr,inject:()=>ir});module.exports=Wo(lr);var Me=Ge(require("react"),1);var yt=`
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
`;var e=Ge(require("react"),1);var h=Ge(require("react"),1);function Y({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),h.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),h.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),h.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return h.default.createElement("svg",{...s},h.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),h.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),h.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return h.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},h.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),h.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),h.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),h.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),h.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return h.default.createElement("svg",{...s},h.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Bt=Ge(require("react"),1);function je(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function At(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Ot(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function po(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function co(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Yo="/podwave/api";function nt({item:n,size:i=44,className:s=""}){let c={width:i,height:i};return n&&n.hasCover?Bt.default.createElement("img",{className:`cover ${s}`,style:c,src:`${Yo}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Bt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},po(n&&n.title))}var u=Ge(require("react"),1);var uo="/podwave/api";function kt({transcript:n,status:i,progress:s,stage:c,chunks:v,queued:g,elapsed:f,error:M,position:T,onSeek:K,onClose:D,onStart:ee,onCancel:k,target:L,job:N,onChangeTarget:x,onOpenSettings:oe,inline:ce=!1,editingId:V=null,draft:we="",onDraftChange:ue,onEditLine:Te,onSaveLine:se,onCancelEdit:J,onSplitLine:z,onMergeLine:ie,onUndo:re,onValidate:ne,issues:A=[]}){let Z=(0,u.useRef)(null),j=(0,u.useRef)(null),Q=n?.lines?.findIndex(w=>T>=w.start&&T<w.end)??-1;(0,u.useEffect)(()=>{if(Q<0||!Z.current)return;Z.current.querySelector(`[data-seg="${Q}"]`)?.scrollIntoView({block:"nearest"})},[Q]);let le=i==="queued"||i==="running";return u.default.createElement("section",{className:`transcript-panel ${ce?"inline":""}`},u.default.createElement("header",{className:"transcript-head"},u.default.createElement("h3",null,"\u5B57\u5E55"),n?u.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,u.default.createElement("div",{className:"transcript-actions"},u.default.createElement("select",{className:"tr-select",value:L,onChange:w=>x(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},u.default.createElement("option",{value:""},"\u5BF9\u7167"),u.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),u.default.createElement("option",{value:"en"},"English")),u.default.createElement("button",{className:"mini-link",onClick:oe},"\u8BBE\u7F6E"),n?u.default.createElement(u.default.Fragment,null,u.default.createElement("button",{className:"mini-link",onClick:re,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),u.default.createElement("button",{className:"mini-link",onClick:ne,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),u.default.createElement("a",{className:"mini-link",href:`${uo}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),u.default.createElement("a",{className:"mini-link",href:`${uo}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,ce?null:u.default.createElement("button",{className:"transcript-close",onClick:D,title:"\u6536\u8D77"},"\xD7"))),u.default.createElement("div",{className:"transcript-body",ref:Z},n&&le?u.default.createElement("div",{className:"tr-strip"},u.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),k?u.default.createElement("button",{className:"seg-tool",onClick:k},"\u53D6\u6D88"):null):null,n&&A?.length?u.default.createElement("div",{className:"tr-issues"},A.slice(0,5).map(w=>u.default.createElement("div",{key:w},"\xB7 ",w)),A.length>5?u.default.createElement("div",null,"\u2026\u5171 ",A.length," \u6761"):null):null,N?.status==="running"?u.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,N?.status==="error"?u.default.createElement("div",{className:"tr-running err"},N.error):null,n?n.lines.map((w,de)=>u.default.createElement("div",{key:w.id,"data-seg":de,className:`seg-row ${de===Q?"active":""} ${V===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${je(w.start)}`,onClick:()=>K(w.start),onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),K(w.start))}},u.default.createElement("span",{className:"seg-time"},je(w.start)),V===w.id?u.default.createElement("span",{className:"seg-edit",onClick:I=>I.stopPropagation()},u.default.createElement("textarea",{ref:j,value:we,rows:Math.min(4,Math.max(2,Math.ceil((we.length||1)/40))),onChange:I=>ue(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.metaKey||I.ctrlKey)&&se(w.id),I.key==="Escape"&&J()}}),u.default.createElement("span",{className:"seg-edit-actions"},u.default.createElement("button",{className:"seg-tool",onClick:()=>se(w.id)},"\u4FDD\u5B58"),u.default.createElement("button",{className:"seg-tool",onClick:()=>z(w.id,j.current?.selectionStart??Math.floor(we.length/2))},"\u62C6\u5206"),u.default.createElement("button",{className:"seg-tool",onClick:J},"\u53D6\u6D88"))):u.default.createElement(u.default.Fragment,null,w.speaker!=null?u.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},n.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,u.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[L]?u.default.createElement("span",{className:"seg-trans"},w.translations[L]):null),u.default.createElement("span",{className:"seg-tools"},u.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:I=>{I.stopPropagation(),Te(w)}},"\u270E"),de<n.lines.length-1?u.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:I=>{I.stopPropagation(),ie(w.id)}},"\u21E3"):null)))):le?u.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?u.default.createElement("span",{className:"tx-progress"},u.default.createElement("span",{style:{width:`${s.percent}%`}})):null,u.default.createElement("br",null),u.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),u.default.createElement("br",null),k?u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:k},"\u53D6\u6D88\u8F6C\u5199"):null):M?u.default.createElement("div",{className:"transcript-status"},u.default.createElement("span",{className:"err"},M),u.default.createElement("br",null),u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:ee},"\u91CD\u8BD5")):u.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",u.default.createElement("br",null),u.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:ee},"\u5F00\u59CB\u8F6C\u5199"))))}var l=Ge(require("react"),1),fe="/podwave/api";async function Ye(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function pt(n,i){let s=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function mo(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function vo(n){if(!n)return"";let i=new Date(n);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Kt({onPlay:n,currentId:i}){let[s,c]=(0,l.useState)(null),[v,g]=(0,l.useState)(""),[f,M]=(0,l.useState)(""),[T,K]=(0,l.useState)(""),[D,ee]=(0,l.useState)(""),[k,L]=(0,l.useState)(0),[N,x]=(0,l.useState)(!1),[oe,ce]=(0,l.useState)(""),[V,we]=(0,l.useState)(""),[ue,Te]=(0,l.useState)([]),[se,J]=(0,l.useState)(!1),[z,ie]=(0,l.useState)(null),[re,ne]=(0,l.useState)([]),[A,Z]=(0,l.useState)(null),[j,Q]=(0,l.useState)(!1),[le,w]=(0,l.useState)(""),[de,I]=(0,l.useState)(null),[Ee,ye]=(0,l.useState)(!1),ke=(0,l.useCallback)(async()=>{J(!0);try{let d=await Ye(`${fe}/xyz/subscriptions`);Te(d.items||[])}catch(d){g(F(d.message))}finally{J(!1)}},[]);function F(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6539\u7528 refresh token \u767B\u5F55\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function C(){try{await pt(`${fe}/xyz/open-web`,{})}catch(d){g(F(d.message))}}(0,l.useEffect)(()=>{Ye(`${fe}/xyz/status`).then(d=>{c(d),d.loggedIn&&ke()}).catch(d=>g(F(d.message)))},[ke]),(0,l.useEffect)(()=>{if(!k)return;let d=setInterval(()=>L(U=>Math.max(0,U-1)),1e3);return()=>clearInterval(d)},[k]);async function pe(){if(g(""),!/^1\d{10}$/.test(T.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let d=await pt(`${fe}/xyz/auth/send-code`,{phone:T.trim(),areaCode:"+86"});L(60),d.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){g(F(d.message))}finally{M("")}}async function X(){if(g(""),!T.trim()||!D.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await pt(`${fe}/xyz/auth/login`,{phone:T.trim(),code:D.trim(),areaCode:"+86"});let d=await Ye(`${fe}/xyz/status`);c(d),await ke()}catch(d){g(F(d.message))}finally{M("")}}async function Pe(){if(g(""),!oe.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await pt(`${fe}/xyz/auth/token`,{refreshToken:oe.trim(),deviceId:V.trim()});let d=await Ye(`${fe}/xyz/status`);c(d),ce(""),await ke()}catch(d){g(F(d.message))}finally{M("")}}async function Ke(){M("logout");try{await pt(`${fe}/xyz/auth/logout`,{}),c({loggedIn:!1}),Te([]),ie(null),ne([])}catch(d){g(F(d.message))}finally{M("")}}async function te(d){ie(d),ne([]),Z(null),Q(!0),g("");try{let U=await Ye(`${fe}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);ne(U.items||[]),Z(U.loadMoreKey||null)}catch(U){g(F(U.message))}finally{Q(!1)}}async function W(){if(!(!z||!A||j)){Q(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:A}),U=await Ye(`${fe}/xyz/podcast/${encodeURIComponent(z.pid)}/episodes?${d}`);ne(De=>[...De,...U.items||[]]),Z(U.loadMoreKey||null)}catch(d){g(F(d.message))}finally{Q(!1)}}}async function me(d){M(`play:${d.eid}`),g("");try{await n(d)}catch(U){g(F(U.message))}finally{M("")}}async function Fe(){if(g(""),!le.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}ye(!0);try{let d=await Ye(`${fe}/xyz/public/podcast?url=${encodeURIComponent(le.trim())}`);I(d.podcast)}catch(d){g(F(d.message))}finally{ye(!1)}}async function Ne(d){M(`pplay:${d.eid}`),g("");try{await n({...d,public:!0})}catch(U){g(F(U.message))}finally{M("")}}return s?s.loggedIn?z?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{ie(null),ne([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},z.title)),j&&re.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},re.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},vo(d.pubDate)," \xB7 ",mo(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${d.eid}`,onClick:()=>me(d)},f===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!j&&re.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,A?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:j,onClick:W},j?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:Ke},"\u9000\u51FA\u767B\u5F55")),se?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},ue.map(d=>l.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>te(d)},d.cover?l.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},d.title),l.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!se&&ue.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u7528\u4F60\u8D26\u53F7\u7684 refresh token \u8BFB\u53D6\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u7528\u624B\u673A App \u626B\u7801\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:C},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:oe,onChange:d=>ce(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"})),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:V,onChange:d=>we(d.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:Pe},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>x(d=>!d)},N?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),N?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:T,onChange:d=>K(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||k>0,onClick:pe},k>0?`${k}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:D,onChange:d=>ee(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:X},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u4EFB\u610F\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:le,onChange:d=>w(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Ee,onClick:Fe},Ee?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),de?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},de.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",de.author)),de.episodes.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},vo(d.pubDate)," \xB7 ",mo(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${d.eid}`,onClick:()=>Ne(d)},f===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?l.default.createElement("p",{className:"xyz-error"},v):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function go(n){if(n.type==="download")return n.status==="done"?"\u5DF2\u4E0B\u8F7D":n.status==="error"||n.status==="interrupted"?n.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${n.progress?` ${n.progress}%`:""}`;let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var b="/podwave/api",Qo=[.5,.75,1,1.25,1.5,1.75,2];async function ae(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function R(n,i,s){let c=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}function _o({onSubmit:n,onPick:i,onClose:s}){let[c,v]=(0,e.useState)(""),[g,f]=(0,e.useState)(!1),[M,T]=(0,e.useState)(!1),[K,D]=(0,e.useState)(""),ee=(0,e.useRef)(null);return(0,e.useEffect)(()=>{ee.current?.focus();let N=x=>{x.key==="Escape"&&s()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:N=>{N.target===N.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async N=>{if(N.preventDefault(),!(!c.trim()||g)){f(!0),D("");try{await n(c.trim()),s()}catch(x){D(x.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){T(!0),D("");try{let N=await i();if(N?.canceled)return;if(N?.error)throw new Error(N.error);N?.path&&(await n(N.path),s())}catch(N){D(N.message)}finally{T(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:ee,value:c,onChange:N=>v(N.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),K?e.default.createElement("div",{className:"dialog-error"},K):null))}function Ro({config:n,onClose:i,onSave:s}){let[c,v]=(0,e.useState)(n?.provider||"api"),[g,f]=(0,e.useState)(""),[M,T]=(0,e.useState)(!1),[K,D]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:k=>{k.target===k.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async k=>{k.preventDefault(),T(!0),D("");try{await s({provider:c,apiKey:g||void 0})}catch(L){D(L.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:k=>v(k.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:k=>f(k.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),K?e.default.createElement("div",{className:"dialog-error"},K):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Ft(){let[n,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[v,g]=(0,e.useState)({}),[f,M]=(0,e.useState)({running:!1}),[T,K]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[D,ee]=(0,e.useState)(!1),[k,L]=(0,e.useState)(""),[N,x]=(0,e.useState)([]),[oe,ce]=(0,e.useState)("recent"),[V,we]=(0,e.useState)("all"),[ue,Te]=(0,e.useState)("all"),[se,J]=(0,e.useState)(null),[z,ie]=(0,e.useState)(null),[re,ne]=(0,e.useState)(!1),[A,Z]=(0,e.useState)(0),[j,Q]=(0,e.useState)(0),[le,w]=(0,e.useState)(!0),[de,I]=(0,e.useState)(!1),[Ee,ye]=(0,e.useState)(""),[ke,F]=(0,e.useState)(""),[C,pe]=(0,e.useState)(null),[X,Pe]=(0,e.useState)("none"),[Ke,te]=(0,e.useState)(0),[W,me]=(0,e.useState)(""),[Fe,Ne]=(0,e.useState)(!1),[d,U]=(0,e.useState)(null),[De,$t]=(0,e.useState)(""),[G,Ue]=(0,e.useState)({status:"none"}),[Ct,Qe]=(0,e.useState)(!1),[ct,_e]=(0,e.useState)(!1),[st,Re]=(0,e.useState)(!1),[ze,it]=(0,e.useState)(null),[et,ut]=(0,e.useState)(!1),[qe,a]=(0,e.useState)([]),[$,q]=(0,e.useState)(!1),[ve,$e]=(0,e.useState)([]),[Ce,Le]=(0,e.useState)(null),[mt,St]=(0,e.useState)(""),[qt,Ht]=(0,e.useState)([]),_=(0,e.useRef)(null),He=(0,e.useRef)(""),Jt=(0,e.useRef)(null),S=(0,e.useRef)(null),he=(0,e.useRef)(0),tt=(0,e.useRef)(T),Je=(0,e.useRef)(0),Vt=(0,e.useRef)(0),Zt=(0,e.useRef)(0),Xt=(0,e.useRef)(0),xo=(0,e.useRef)(!1),Mt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{tt.current=T},[T]),(0,e.useEffect)(()=>{S.current=z},[z]),(0,e.useEffect)(()=>{he.current=j},[j]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await ae(`${b}/ui-settings`);!t&&o&&_e(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Wt=(0,e.useCallback)(()=>{_e(t=>{let o=!t;return fetch(`${b}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),y=(0,e.useCallback)(t=>{F(t),window.clearTimeout(Xt.current),Xt.current=window.setTimeout(()=>F(""),2600)},[]),Se=(0,e.useCallback)(async()=>{let t=await ae(`${b}/episodes`);return i(t.items||[]),c(t.folders||[]),g(t.progress||{}),M(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await ae(`${b}/health`).catch(()=>({}));o.mediaBase&&(He.current=o.mediaBase);let p=await ae(`${b}/state`);if(t)return;K(p.settings),c(p.folders||[]);let m=await Se();if(t)return;let P=p.settings?.lastEpisodeId,E=P?(m.items||[]).find(Xe=>Xe.id===P):null;if(E){ie(E),Q(E.duration||0);let Xe=m.progress?.[E.id]?.position||0;Je.current=Xe>5?Xe:0,Z(Je.current);let We=_.current;We&&(We.src=He.current?`${He.current}/episodes/${E.id}/audio`:`${b}/episodes/${E.id}/audio`,We.load(),We.playbackRate=p.settings?.rate||1,We.volume=p.settings?.volume??.9)}w(!1),xo.current=!0}catch(o){t||(ye(o.message),w(!1))}})(),()=>{t=!0}},[Se]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{Se().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,Se]),(0,e.useEffect)(()=>{let t=!1;return pe(null),me(""),te(0),z?.id?((async()=>{try{let o=await ae(`${b}/episodes/${z.id}/transcript`);if(t)return;Pe(o.status),it(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?pe(o.transcript):o.status==="queued"||o.status==="running"?(te(o.elapsedMs||0),o.transcript&&pe(o.transcript)):o.status==="error"&&me(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||me(o.message)}})(),()=>{t=!0}):(Pe("none"),()=>{t=!0})},[z?.id]),(0,e.useEffect)(()=>{ae(`${b}/translate/settings`).then(U).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(X!=="queued"&&X!=="running")return;let t=!1,o=setInterval(async()=>{let p=S.current?.id;if(p)try{let m=await ae(`${b}/episodes/${p}/transcript`);if(t)return;Pe(m.status),it(m.status==="queued"||m.status==="running"?m:null),te(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?pe(m.transcript):m.status==="done"&&m.transcript?(pe(m.transcript),Ne(!0),y("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&me(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[X,y]),(0,e.useEffect)(()=>{if(G.status!=="running")return;let t=!1,o=setInterval(async()=>{let p=S.current?.id;if(p)try{let m=await ae(`${b}/episodes/${p}/translate?target=${De}`);if(t)return;if(Ue(m),m.status==="done"){let P=await ae(`${b}/episodes/${p}/transcript`);!t&&P.transcript&&pe(P.transcript),y("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[G.status,De,y]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let m=await ae(`${b}/jobs`);t||a(m.items||[])}catch{}};o();let p=setInterval(o,et?2500:2e4);return()=>{t=!0,clearInterval(p)}},[et]);let Ve=(0,e.useCallback)((t,o,p,m=!1)=>{if(!t)return;let P=Date.now();!m&&P-Zt.current<4e3||(Zt.current=P,R(`${b}/progress/${t}`,"PUT",{position:o,duration:p}).catch(()=>{}),g(E=>({...E,[t]:{position:o,duration:p,updatedAt:P}})))},[]),Ae=(0,e.useCallback)(t=>{K(o=>({...o,...t})),R(`${b}/settings`,"PATCH",t).catch(()=>{})},[]),lt=(0,e.useCallback)(async()=>{if(S.current){me(""),Ne(!0);try{let t=await R(`${b}/episodes/${S.current.id}/transcribe`,"POST",{});Pe(t.status||"queued")}catch(t){me(t.message)}}},[]),ho=(0,e.useCallback)(()=>{if(C){Ne(t=>!t);return}if(X==="queued"||X==="running"){Ne(!0);return}lt()},[C,X,lt]),Tt=(0,e.useCallback)(async()=>{if(S.current)try{await R(`${b}/episodes/${S.current.id}/transcribe/cancel`,"POST",{}),y("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){me(t.message)}},[y]),Pt=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await R(`${b}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await R(`${b}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await R(`${b}/jobs`,"DELETE",{key:t.key})}catch{}let p=await ae(`${b}/jobs`).catch(()=>({items:[]}));a(p.items||[])},[]),vt=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let p=await R(`${b}/transcribe/batch`,"POST",{ids:o});y(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),$e([]),q(!1)}catch(p){y(p.message)}},[y]),bo=(0,e.useCallback)(t=>{$e(o=>o.includes(t)?o.filter(p=>p!==t):[...o,t])},[]),Oe=(0,e.useCallback)(async(t,o,p)=>{try{let m=await R(`${b}${t}`,o,p||{});return m?.transcript&&pe(m.transcript),m}catch(m){return y(m.message),null}},[y]),Gt=(0,e.useCallback)(t=>{Le(t.id),St(t.text),Ht([])},[]),Yt=(0,e.useCallback)(async t=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t??Ce}`,"PUT",{text:mt})&&(Le(null),y("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[C,Ce,mt,Oe,y]),Qt=(0,e.useCallback)(async(t,o)=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t??Ce}/split`,"POST",{offset:o})&&(Le(null),y("\u5DF2\u62C6\u6210\u4E24\u884C"))},[C,Ce,Oe,y]),_t=(0,e.useCallback)(async t=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/lines/${t}/merge`,"POST",{})&&y("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[C,Oe,y]),Rt=(0,e.useCallback)(async()=>{if(!C)return;await Oe(`/episodes/${C.id}/transcript/undo`,"POST",{})&&y("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[C,Oe,y]),eo=(0,e.useCallback)(async()=>{if(C)try{let t=await ae(`${b}/episodes/${C.id}/transcript/validate`);Ht(t.issues||[]),y(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){y(t.message)}},[C,y]),gt=(0,e.useCallback)(async()=>{let t=S.current?.id;if(!t)return;let o=await ae(`${b}/episodes/${t}/transcript`);o.transcript&&pe(o.transcript)},[]),to=(0,e.useCallback)(async t=>{if(S.current?.id){Ue({status:"running"});try{let o=await R(`${b}/episodes/${S.current.id}/translate`,"POST",{target:t});Ue(o),o.status==="done"&&(await gt(),y("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){Ue({status:"error",error:o.message})}}},[gt,y]),oo=(0,e.useCallback)(async t=>{if($t(t),!t)return;if(C?.lines?.some(p=>p.translations?.[t])){Ue({status:"done"}),await gt();return}await to(t)},[C,to,gt]),wo=t=>{let o=!t.favorite;i(p=>p.map(m=>m.id===t.id?{...m,favorite:o}:m)),R(`${b}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(p=>y(p.message))},ro=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${b}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(p=>!t.includes(p.id))),$e([]),t.includes(se)&&J(null),y(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},ge=(0,e.useMemo)(()=>{let t=[...n];return oe==="title"?t.sort((o,p)=>o.title.localeCompare(p.title,"zh-Hans-CN")):oe==="duration"?t.sort((o,p)=>(p.duration||0)-(o.duration||0)):t.sort((o,p)=>p.mtime-o.mtime),t},[n,oe]),Ie=(0,e.useMemo)(()=>{let t=k.trim().toLowerCase();return ge.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let m=v[o.id]?.position||0,P=o.duration||0,E=P?m/P:0;return V==="inprogress"?m>5&&E<.97:V==="finished"?E>=.97:ue==="unheard"?m<=5:ue==="transcribed"?!!o.hasTranscript:ue==="favorites"?!!o.favorite:!0})},[ge,k,V,ue,v]),no=(0,e.useMemo)(()=>qe.filter(t=>t.status==="queued"||t.status==="running"),[qe]),ot=(0,e.useMemo)(()=>Ie.filter(t=>!t.hasTranscript),[Ie]),It=(0,e.useMemo)(()=>n.filter(t=>{let o=v[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(v[o.id]?.updatedAt||0)-(v[t.id]?.updatedAt||0)).slice(0,4),[n,v]),yo=(0,e.useMemo)(()=>n.reduce((t,o)=>t+(o.duration||0),0),[n]),ko=Math.round(yo/3600*10)/10,No=V==="inprogress"?"\u7EE7\u7EED\u6536\u542C":V==="finished"?"\u5DF2\u64AD\u5B8C":V==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",H=se?n.find(t=>t.id===se)||(z?.id===se?z:null):null,zo=le?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${Ie.length} \u96C6 \xB7 \u5171 ${ko} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,dr=(0,e.useMemo)(()=>z?ge.findIndex(t=>t.id===z.id):-1,[ge,z]),rt=(0,e.useCallback)(()=>{let t=_.current;if(t){if(!S.current){let o=Ie[0]||ge[0];o&&Ze(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[Ie,ge]),Ze=(0,e.useCallback)((t,o=!0)=>{let p=_.current;if(!p||!t)return;if(S.current&&S.current.id===t.id){o&&rt();return}S.current&&!p.ended&&p.currentTime>1&&Ve(S.current.id,p.currentTime,p.duration||he.current,!0),S.current=t,ie(t),J(E=>E&&t.id),Q(t.duration||0);let m=v[t.id]?.position||0,P=m>5&&(!t.duration||m<t.duration-10)?m:0;Je.current=P,Z(P),t.source==="xyz"?p.src=He.current?`${He.current}/xyz/${t.id.slice(3)}/audio`:`${b}/episodes/${t.id}/audio`:p.src=He.current?`${He.current}/episodes/${t.id}/audio`:`${b}/episodes/${t.id}/audio`,p.load(),p.playbackRate=tt.current.rate||1,p.volume=tt.current.volume??.9,o&&p.play().catch(()=>{}),Ae({lastEpisodeId:t.id})},[v,Ve,Ae,rt]),$o=(0,e.useCallback)(async t=>{let o=t.public?`${b}/xyz/public/play`:`${b}/xyz/episodes/${encodeURIComponent(t.eid)}/play`,p=t.public?{pid:t.pid,eid:t.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),P=await m.json().catch(()=>({}));if(!m.ok)throw new Error(P.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Se(),Ze(P.item,!0)},[Se,Ze]);(0,e.useEffect)(()=>{let t=k.trim();if(t.length<2){x([]);return}let o=window.setTimeout(()=>{ae(`${b}/search?q=${encodeURIComponent(t)}`).then(p=>x(Array.isArray(p.items)?p.items:[])).catch(()=>x([]))},250);return()=>window.clearTimeout(o)},[k]);let ft=(0,e.useCallback)((t,o=!0)=>{t&&(Ze(t,o),J(t.id))},[Ze]),be=(0,e.useCallback)(t=>{let o=_.current;if(!o||!S.current)return;let p=Number(t);if(!Number.isFinite(p))return;let m=Number(he.current)||0,P=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,E=Math.max(0,P>0?Math.min(p,P):p);try{o.currentTime=E}catch{Je.current=E;return}Z(E),Ve(S.current.id,E,P||m,!0)},[Ve]),Co=(0,e.useCallback)(t=>{let o=n.find(p=>p.id===t.episodeId);if(o){if(S.current?.id===t.episodeId){be(t.start),J(o.id);return}Je.current=t.start,ft(o,!1)}},[n,ft,be]),ao=(0,e.useCallback)(t=>{let o=Jt.current;if(!o)return null;let p=o.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(t.clientX-p.left)/p.width)):null},[]),xt=(0,e.useCallback)(t=>{let o=ao(t),p=Number.isFinite(he.current)&&he.current>0?he.current:Number.isFinite(_.current?.duration)?_.current.duration:0;o==null||!p||be(o*p)},[ao,be]),So=(0,e.useCallback)(t=>{t.preventDefault(),Mt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}xt(t)},[xt]),Mo=(0,e.useCallback)(t=>{Mt.current&&xt(t)},[xt]),so=(0,e.useCallback)(t=>{Mt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),To=(0,e.useCallback)(t=>{let o=_.current;if(!o)return;let p=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),be((o.currentTime||0)-p)),t.key==="ArrowRight"&&(t.preventDefault(),be((o.currentTime||0)+p)),t.key==="Home"&&(t.preventDefault(),be(0)),t.key==="End"&&(t.preventDefault(),be(Number.isFinite(o.duration)?o.duration:0))},[be]),dt=(0,e.useCallback)(t=>{let o=_.current;if(!o||!S.current)return;let p=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||he.current||0)-1));o.currentTime=p,Z(p)},[]),jt=(0,e.useCallback)(t=>{if(!ge.length)return;let p=((S.current?ge.findIndex(m=>m.id===S.current.id):-1)+t+ge.length)%ge.length;Ze(ge[p],!0)},[ge,Ze]),Po=(0,e.useCallback)(t=>{let o=_.current;o&&(o.playbackRate=t),Ae({rate:t}),ee(!1)},[Ae]);(0,e.useEffect)(()=>{if(!D)return;let t=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||ee(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[D]);let ht=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),p=_.current;p&&(p.volume=o),Ae({volume:o})},[Ae]),Io=(0,e.useCallback)(()=>{let t=_.current,o=tt.current.volume>0?0:.9;t&&(t.volume=o),Ae({volume:o})},[Ae]),jo=()=>{let t=_.current;if(!t||!S.current)return;let o=performance.now();o-(Vt.current||0)<400||(Vt.current=o,Z(t.currentTime),Ve(S.current.id,t.currentTime,t.duration||he.current))},Eo=()=>{let t=_.current,o=S.current;if(!t||!o)return;let p=Number.isFinite(t.duration)?t.duration:o.duration||0;Q(p);let m=Je.current;Je.current=0,m>0&&m<p-1&&(t.currentTime=m,Z(m))},Do=()=>{let t=_.current;S.current&&Ve(S.current.id,t?.duration||he.current||0,t?.duration||he.current||0,!0),jt(1)},Lo=async t=>{await R(`${b}/folders`,"POST",{path:t}),await Se(),y("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Ao=async()=>{let t=await fetch(`${b}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Oo=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),st||Re(!0))},Bo=t=>{t.currentTarget.contains(t.relatedTarget)||Re(!1)},Ko=async t=>{t.preventDefault(),Re(!1);let o=t.dataTransfer,p=[...o?.files||[]],m=p.map(O=>O.path).filter(O=>typeof O=="string"&&O),P=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(O=>O.trim()).filter(O=>O.startsWith("file://")).map(O=>decodeURIComponent(O.replace(/^file:\/\//,""))),E=[...new Set([...m,...P])];if(E.length){try{let O=await R(`${b}/import/paths`,"POST",{paths:E});await Se(),y(O.added?`\u5DF2\u6DFB\u52A0 ${O.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(O){ye(O.message)}return}let Xe=p.filter(O=>O.size>0);if(!Xe.length){y("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let We=`drop-${Date.now()}`,bt="",Lt=0;for(let O of Xe)try{let io=await fetch(`${b}/import/upload?name=${encodeURIComponent(O.name)}&batch=${We}`,{method:"POST",body:O}),Uo=await io.json();io.ok&&(bt=Uo.folder||bt,Lt+=1)}catch{}if(bt)try{await R(`${b}/folders`,"POST",{path:bt})}catch{}await Se(),y(Lt?`\u5DF2\u5BFC\u5165 ${Lt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Fo=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await R(`${b}/folders`,"DELETE",{path:t}),await Se(),y("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){ye(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let p=o.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),rt()):o.key==="ArrowRight"?(o.preventDefault(),dt(15)):o.key==="ArrowLeft"?(o.preventDefault(),dt(-15)):o.key==="ArrowUp"?(o.preventDefault(),ht(tt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),ht(tt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[rt,dt,ht]);let Et=t=>{let o=v[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},Dt=t=>{let o=v[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${ct?"nav-collapsed":""}`,onDragOver:Oo,onDragLeave:Bo,onDrop:Ko},st?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,ct?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Wt},e.default.createElement(Y,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(Y,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.11"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Wt},e.default.createElement(Y,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",It.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(Et).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([t,o,p])=>e.default.createElement("button",{key:t,className:`nav-item ${V===t?"active":""}`,onClick:()=>we(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},p||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>I(!0)},e.default.createElement(Y,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(Y,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},co(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Fo(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,No),e.default.createElement("p",{className:"subline"},zo)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${et?"is-on":""}`,onClick:()=>ut(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(Y,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",no.length?` ${no.length}`:"")),e.default.createElement("button",{className:`tool-btn ${$?"is-on":""}`,onClick:()=>{q(t=>!t),$e([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(Y,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(Y,{name:"search",size:16}),e.default.createElement("input",{value:k,onChange:t=>L(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:oe,onChange:t=>ce(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),$?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ve.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>$e(Ie.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!ot.length,onClick:()=>vt(ot.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",ot.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ve.length,onClick:()=>vt(ve)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!ve.length,onClick:()=>ro(ve)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{$e([]),q(!1)}},"\u53D6\u6D88")):null,Ee?e.default.createElement("div",{className:"banner error",onClick:()=>ye("")},Ee," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,H?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>J(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},H.artist,H.album?` \xB7 ${H.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(nt,{item:H,size:288})),e.default.createElement("h2",{className:"episode-title"},H.title),e.default.createElement("p",{className:"episode-sub"},H.artist,H.album?` \xB7 ${H.album}`:""),e.default.createElement("p",{className:"episode-path",title:H.file},H.location||H.file),e.default.createElement("p",{className:"episode-stats"},At(H.duration)," \xB7 ",Ot(H.mtime)," \xB7 \u5DF2\u542C ",Math.round(Dt(H)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:rt},re&&z?.id===H.id?"\u6682\u505C":"\u64AD\u653E"),X==="queued"||X==="running"?e.default.createElement("button",{className:"btn ghost",onClick:Tt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:lt},H.source==="xyz"?C?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":C?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>ro([H.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(kt,{inline:!0,transcript:C,status:X,progress:ze?.progress,stage:ze?.stage,chunks:ze?.chunks,queued:ze?.queued,elapsed:Ke,editingId:Ce,draft:mt,onDraftChange:St,onEditLine:Gt,onSaveLine:Yt,onCancelEdit:()=>Le(null),onSplitLine:Qt,onMergeLine:_t,onUndo:Rt,onValidate:eo,issues:qt,onCancel:Tt,error:W,position:A,onSeek:be,onClose:()=>J(null),onStart:lt,target:De,job:G,onChangeTarget:oo,onOpenSettings:()=>Qe(!0)})))):V==="xyz"?e.default.createElement(Kt,{onPlay:$o,currentId:z?.id}):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${ue===t?"is-on":""}`,onClick:()=>Te(t)},o))),V==="all"&&!k&&It.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},It.map(t=>{let o=Dt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${z?.id===t.id?"is-current":""}`,onClick:()=>ft(t,!0)},e.default.createElement(nt,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,k.trim().length>=2&&N.length>0?e.default.createElement("section",{className:"search-hits"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),e.default.createElement("span",{className:"col-duration"},N.length)),N.map(t=>e.default.createElement("button",{key:`${t.episodeId}-${t.lineId}`,className:"hit-row",onClick:()=>Co(t)},e.default.createElement("span",{className:"hit-time"},je(t.start)),e.default.createElement("span",{className:"hit-text"},t.text),e.default.createElement("span",{className:"hit-title"},t.title)))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),le?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Ie.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>I(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},Ie.map((t,o)=>{let p=Dt(t),m=z?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${m?"is-current":""} ${Et(t)?"is-finished":""} ${$&&ve.includes(t.id)?"is-selected":""}`,onClick:()=>$?bo(t.id):ft(t,!0)},e.default.createElement("span",{className:"col-index row-index"},$?ve.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(Y,{name:"check",size:14})):null:m&&re?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(nt,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Ot(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},At(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:P=>{P.stopPropagation(),wo(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},Et(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(Y,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),Fe&&z&&!H?e.default.createElement(kt,{transcript:C,status:X,progress:ze?.progress,stage:ze?.stage,chunks:ze?.chunks,queued:ze?.queued,elapsed:Ke,editingId:Ce,draft:mt,onDraftChange:St,onEditLine:Gt,onSaveLine:Yt,onCancelEdit:()=>Le(null),onSplitLine:Qt,onMergeLine:_t,onUndo:Rt,onValidate:eo,issues:qt,onCancel:Tt,error:W,position:A,onSeek:be,onClose:()=>Ne(!1),onStart:lt,target:De,job:G,onChangeTarget:oo,onOpenSettings:()=>Qe(!0)}):null,et?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>ut(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},qe.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):qe.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},go(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Pt(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!ot.length,onClick:()=>vt(ot.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",ot.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ve.length,onClick:()=>vt(ve)},"\u8F6C\u5199\u5DF2\u9009 ",ve.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:Jt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(j||0),"aria-valuenow":Math.round(A||0),"aria-valuetext":`${je(A)} / ${je(j)}`,onPointerDown:So,onPointerMove:Mo,onPointerUp:so,onPointerCancel:so,onKeyDown:To},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${j?Math.min(100,Math.max(0,A/j*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${j?Math.min(100,Math.max(0,A/j*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},z?e.default.createElement("button",{className:"now-open",onClick:()=>J(z.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(nt,{item:z,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:z.title},z.title),e.default.createElement("div",{className:"now-artist"},z.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>jt(-1)},e.default.createElement(Y,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>dt(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:rt,disabled:!z&&Ie.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(Y,{name:re?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>dt(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>jt(1)},e.default.createElement(Y,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Fe?"active":""}`,onClick:ho,disabled:!z,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(Y,{name:"wave",size:15}),e.default.createElement("span",null,C?"\u5B57\u5E55":X==="queued"||X==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},je(A)," / ",je(j)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>ee(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":D},T.rate,"\xD7"),D?e.default.createElement("span",{className:"rate-menu",role:"menu"},Qo.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===T.rate,className:t===T.rate?"is-on":"",onClick:()=>Po(t)},t,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:Io,title:"\u9759\u97F3"},e.default.createElement(Y,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:t=>ht(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),de?e.default.createElement(_o,{onClose:()=>I(!1),onSubmit:Lo,onPick:Ao}):null,Ct?e.default.createElement(Ro,{config:d,onClose:()=>Qe(!1),onSave:async t=>{let o=await R(`${b}/translate/settings`,"PUT",t);U(o),Qe(!1),y("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ke?e.default.createElement("div",{className:"toast"},ke):null,e.default.createElement("audio",{ref:_,preload:"metadata",onPlay:()=>ne(!0),onPause:()=>{ne(!1);let t=_.current;S.current&&t&&t.currentTime>0&&!t.ended&&Ve(S.current.id,t.currentTime,t.duration||he.current,!0)},onTimeUpdate:jo,onLoadedMetadata:Eo,onEnded:Do,onError:()=>{ne(!1),y("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Nt=require("react");function er(n){let i=String(n||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function tr(){for(let n of[document.body,document.documentElement]){if(!n)continue;let i=getComputedStyle(n).backgroundColor,s=er(i);if(s!==null)return s}return null}function fo(){let n=tr();if(n!==null)return n>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function zt(){let[n,i]=(0,Nt.useState)(fo);return(0,Nt.useEffect)(()=>{let s=()=>i(fo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),n}var r=Ge(require("react"),1);var B="/podwave/api";async function xe(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Be(n,i,s){let c=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function or(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function at(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function rr(n){if(!n)return"";let i=new Date(n),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Ut(){let n=zt(),[i,s]=(0,r.useState)([]),[c,v]=(0,r.useState)([]),[g,f]=(0,r.useState)({asrModel:"",translateModel:""}),[M,T]=(0,r.useState)(null),[K,D]=(0,r.useState)(null),[ee,k]=(0,r.useState)({showSidebarPanel:!0}),[L,N]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[x,oe]=(0,r.useState)(null),[ce,V]=(0,r.useState)(null),[we,ue]=(0,r.useState)(null),[Te,se]=(0,r.useState)(!1),[J,z]=(0,r.useState)("auto"),[ie,re]=(0,r.useState)(!1),[ne,A]=(0,r.useState)(""),[Z,j]=(0,r.useState)(15),[Q,le]=(0,r.useState)(!0),[w,de]=(0,r.useState)("api"),[I,Ee]=(0,r.useState)("https://api.deepseek.com"),[ye,ke]=(0,r.useState)("deepseek-chat"),[F,C]=(0,r.useState)(""),[pe,X]=(0,r.useState)(""),[Pe,Ke]=(0,r.useState)(""),[te,W]=(0,r.useState)(""),[me,Fe]=(0,r.useState)(""),[Ne,d]=(0,r.useState)(""),U=(0,r.useCallback)(async()=>{try{let[a,$,q,ve,$e,Ce,Le]=await Promise.all([xe(`${B}/history`),xe(`${B}/models`),xe(`${B}/translate/settings`),xe(`${B}/ui-settings`),xe(`${B}/transcribe/settings`),xe(`${B}/import/settings`),xe(`${B}/setup`)]);oe(Le),Le?.job?.status==="running"&&re(!0),N({mode:Ce.mode||"copy",orphans:Ce.orphans||0,orphanBytes:Ce.orphanBytes||0}),k({showSidebarPanel:ve?.showSidebarPanel!==!1}),A(($e.hotwords||[]).join(" ")),j($e.chunkMinutes||15),le($e.diarize!==!1),s(a.items||[]),v($.models||[]),f($.config||{asrModel:"",translateModel:""}),T($.transcribe||null),X($.config?.asrModel||""),Ke($.config?.translateModel||""),D(q),de(q.provider||"api"),Ee(q.apiBase||"https://api.deepseek.com"),ke(q.apiModel||"deepseek-chat"),C(""),d("")}catch(a){d(a.message)}},[]);(0,r.useEffect)(()=>{U()},[U]),(0,r.useEffect)(()=>{let a=!1;return xe(`${B}/setup/plan?source=${J}`).then($=>{a||V($)}).catch(()=>{}),()=>{a=!0}},[J,x?.job?.status]),(0,r.useEffect)(()=>{if(!ie&&x?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let $=await xe(`${B}/setup`);oe($),$.job?.status!=="running"&&re(!1)}catch{}},2500);return()=>window.clearInterval(a)},[ie,x?.job?.status]);let De=async()=>{d(""),re(!0);try{await Be(`${B}/setup/install`,"POST",{source:J});let a=await xe(`${B}/setup`);oe(a),G("\u5F00\u59CB\u5B89\u88C5")}catch(a){re(!1),d(a.message)}},$t=async()=>{try{await Be(`${B}/setup/cancel`,"POST",{}),G("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){d(a.message)}},G=a=>{Fe(a),window.setTimeout(()=>Fe(""),2400)},Ue=async()=>{se(!0);try{let a=await xe(`${B}/setup/verify`);ue(a),G(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){G(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{se(!1)}},Ct=async()=>{try{let a=await xe(`${B}/setup/diagnose`),$=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText($)}catch{let q=document.createElement("textarea");q.value=$,q.style.position="fixed",q.style.opacity="0",document.body.appendChild(q),q.select(),document.execCommand("copy"),q.remove()}G("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){G(a.message||"\u590D\u5236\u5931\u8D25")}},Qe=async()=>{W("api"),d("");try{let a={provider:w,apiBase:I,apiModel:ye};F.trim()&&(a.apiKey=F.trim());let $=await Be(`${B}/translate/settings`,"PUT",a);D($),C(""),G("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){d(a.message)}finally{W("")}},ct=async()=>{W("models"),d("");try{let a=await Be(`${B}/models`,"PUT",{asrModel:pe,translateModel:Pe});f(a.config),v(a.models||[]),T(a.transcribe||null),G("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){d(a.message)}finally{W("")}},_e=c.length?c:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:M?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:K?.localReady}],st=_e.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),Re=_e.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),ze=async()=>{W("ui"),d("");try{let a=await Be(`${B}/ui-settings`,"PUT",{showSidebarPanel:ee.showSidebarPanel});k({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),G("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){d(a.message)}finally{W("")}},it=async a=>{W("import"),d("");try{let $=await Be(`${B}/import/settings`,"PUT",{mode:a});N(q=>({...q,mode:$.mode})),G("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch($){d($.message)}finally{W("")}},et=async()=>{if(L.orphans&&window.confirm(`\u6E05\u7406 ${L.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){W("imports"),d("");try{let a=await Be(`${B}/imports/orphans`,"DELETE",{});N($=>({...$,orphans:0,orphanBytes:0})),G(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){d(a.message)}finally{W("")}}},ut=async()=>{W("transcribe"),d("");try{let a=ne.split(/[\s,，、]+/).map(q=>q.trim()).filter(Boolean).slice(0,500),$=await Be(`${B}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(Z)||15)),diarize:Q});A(($.hotwords||[]).join(" ")),j($.chunkMinutes||15),le($.diarize!==!1),G("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){d(a.message)}finally{W("")}},qe=_e;return r.default.createElement("div",{className:"podwave-root","data-pw-theme":n,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,yt),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Ne?r.default.createElement("div",{className:"banner error",onClick:()=>d("")},Ne):null,me?r.default.createElement("div",{className:"settings-message"},me):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),x?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},x.platform?.osLabel," \xB7 ",x.platform?.arch," \xB7 ",x.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",x.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",x.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:Ct},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:Te,onClick:Ue},Te?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),we?r.default.createElement("ul",{className:"setup-components"},we.checks.map(a=>r.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(x.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},at(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:J,onChange:a=>z(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),ce?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",at(ce.totalBytes)," \xB7 ",ce.items.length," \u9879"),r.default.createElement("ul",null,ce.items.map(a=>r.default.createElement("li",{key:a.id},r.default.createElement("span",null,a.label),r.default.createElement("span",null,a.bytes?at(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:ie||x.job?.status==="running",onClick:De},ie||x.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),x.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:$t},"\u53D6\u6D88"):null),x.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,x.job.stage||x.job.status),r.default.createElement("span",null,x.job.progress||0,"% \xB7 ",at(x.job.bytes)," / ",at(x.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${x.job.progress||0}%`}})),x.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",x.job.error):null,x.job.status==="done"&&(!x.job.summary||!x.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(x.job.summary)&&x.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},x.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",at(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?r.default.createElement("ul",{className:"history-list"},i.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${or(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},rr(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:ne,onChange:a=>A(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:Z,onChange:a=>j(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:Q,onChange:a=>le(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ut,disabled:te==="transcribe"},te==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:L.mode==="copy",onChange:()=>it("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:L.mode==="reference",onChange:()=>it("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:et,disabled:te==="imports"||!L.orphans},L.orphans?`\u6E05\u7406 ${L.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(L.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:w,onChange:a=>de(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:I,onChange:a=>Ee(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:ye,onChange:a=>ke(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:F,onChange:a=>C(a.target.value),placeholder:K?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${K.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Qe,disabled:te==="api"},te==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},K?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:ee.showSidebarPanel,onChange:a=>k({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ze,disabled:te==="ui"},te==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:pe,onChange:a=>X(a.target.value)},(st.length?st:qe).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},M?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Pe,onChange:a=>Ke(a.target.value)},(Re.length?Re:qe).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},K?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ct,disabled:te==="models"},te==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function nr({size:n=16}){return Me.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Me.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Me.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Me.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Me.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Me.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ar(){let n=zt();return Me.default.createElement("div",{className:"podwave-root","data-pw-theme":n},Me.default.createElement("style",null,yt),Me.default.createElement(Ft,null))}function sr(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},ar)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Ut));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},v=g=>{if(c(!g),g&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},nr);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var ir=["slots"];

return module.exports}})
