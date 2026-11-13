window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Po=Object.create;var ft=Object.defineProperty;var Eo=Object.getOwnPropertyDescriptor;var jo=Object.getOwnPropertyNames;var Do=Object.getPrototypeOf,Io=Object.prototype.hasOwnProperty;var Lo=(n,i)=>{for(var s in i)ft(n,s,{get:i[s],enumerable:!0})},eo=(n,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of jo(i))!Io.call(n,u)&&u!==s&&ft(n,u,{get:()=>i[u],enumerable:!(c=Eo(i,u))||c.enumerable});return n};var Je=(n,i,s)=>(s=n!=null?Po(Do(n)):{},eo(i||!n||!n.__esModule?ft(s,"default",{value:n,enumerable:!0}):s,n)),Ao=n=>eo(ft({},"__esModule",{value:!0}),n);var Wo={};Lo(Wo,{apply:()=>Xo,inject:()=>Qo});module.exports=Ao(Wo);var de=Je(require("react"),1);var ht=`
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
`;var e=Je(require("react"),1);var g=Je(require("react"),1);function K({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return g.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},g.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return g.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},g.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),g.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return g.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},g.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),g.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return g.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},g.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),g.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return g.default.createElement("svg",{...s},g.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),g.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),g.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),g.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return g.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},g.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),g.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),g.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),g.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),g.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return g.default.createElement("svg",{...s},g.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Et=Je(require("react"),1);function ze(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),c=Math.floor(i%3600/60),u=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${c}:${String(u).padStart(2,"0")}`}function Mt(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Pt(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function to(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function oo(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Bo="/podwave/api";function Ve({item:n,size:i=44,className:s=""}){let c={width:i,height:i};return n&&n.hasCover?Et.default.createElement("img",{className:`cover ${s}`,style:c,src:`${Bo}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Et.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},to(n&&n.title))}var d=Je(require("react"),1);var ro="/podwave/api";function bt({transcript:n,status:i,progress:s,stage:c,chunks:u,queued:x,elapsed:y,error:G,position:E,onSeek:A,onClose:O,onStart:X,onCancel:z,target:B,job:w,onChangeTarget:m,onOpenSettings:Q,inline:pe=!1,editingId:ne=null,draft:fe="",onDraftChange:he,onEditLine:ee,onSaveLine:k,onCancelEdit:ae,onSplitLine:Te,onMergeLine:se,onUndo:V,onValidate:te,issues:I=[]}){let ie=(0,d.useRef)(null),ce=(0,d.useRef)(null),le=n?.lines?.findIndex(f=>E>=f.start&&E<f.end)??-1;(0,d.useEffect)(()=>{if(le<0||!ie.current)return;ie.current.querySelector(`[data-seg="${le}"]`)?.scrollIntoView({block:"nearest"})},[le]);let be=i==="queued"||i==="running";return d.default.createElement("section",{className:`transcript-panel ${pe?"inline":""}`},d.default.createElement("header",{className:"transcript-head"},d.default.createElement("h3",null,"\u5B57\u5E55"),n?d.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,d.default.createElement("div",{className:"transcript-actions"},d.default.createElement("select",{className:"tr-select",value:B,onChange:f=>m(f.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},d.default.createElement("option",{value:""},"\u5BF9\u7167"),d.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),d.default.createElement("option",{value:"en"},"English")),d.default.createElement("button",{className:"mini-link",onClick:Q},"\u8BBE\u7F6E"),n?d.default.createElement(d.default.Fragment,null,d.default.createElement("button",{className:"mini-link",onClick:V,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),d.default.createElement("button",{className:"mini-link",onClick:te,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),d.default.createElement("a",{className:"mini-link",href:`${ro}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),d.default.createElement("a",{className:"mini-link",href:`${ro}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,pe?null:d.default.createElement("button",{className:"transcript-close",onClick:O,title:"\u6536\u8D77"},"\xD7"))),d.default.createElement("div",{className:"transcript-body",ref:ie},n&&be?d.default.createElement("div",{className:"tr-strip"},d.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min((u.done||0)+1,u.total)}/${u.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),z?d.default.createElement("button",{className:"seg-tool",onClick:z},"\u53D6\u6D88"):null):null,n&&I?.length?d.default.createElement("div",{className:"tr-issues"},I.slice(0,5).map(f=>d.default.createElement("div",{key:f},"\xB7 ",f)),I.length>5?d.default.createElement("div",null,"\u2026\u5171 ",I.length," \u6761"):null):null,w?.status==="running"?d.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,w?.status==="error"?d.default.createElement("div",{className:"tr-running err"},w.error):null,n?n.lines.map((f,ue)=>d.default.createElement("div",{key:f.id,"data-seg":ue,className:`seg-row ${ue===le?"active":""} ${ne===f.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${ze(f.start)}`,onClick:()=>A(f.start),onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),A(f.start))}},d.default.createElement("span",{className:"seg-time"},ze(f.start)),ne===f.id?d.default.createElement("span",{className:"seg-edit",onClick:C=>C.stopPropagation()},d.default.createElement("textarea",{ref:ce,value:fe,rows:Math.min(4,Math.max(2,Math.ceil((fe.length||1)/40))),onChange:C=>he(C.target.value),onKeyDown:C=>{C.key==="Enter"&&(C.metaKey||C.ctrlKey)&&k(f.id),C.key==="Escape"&&ae()}}),d.default.createElement("span",{className:"seg-edit-actions"},d.default.createElement("button",{className:"seg-tool",onClick:()=>k(f.id)},"\u4FDD\u5B58"),d.default.createElement("button",{className:"seg-tool",onClick:()=>Te(f.id,ce.current?.selectionStart??Math.floor(fe.length/2))},"\u62C6\u5206"),d.default.createElement("button",{className:"seg-tool",onClick:ae},"\u53D6\u6D88"))):d.default.createElement(d.default.Fragment,null,f.speaker!=null?d.default.createElement("span",{className:`seg-speaker spk-${f.speaker%5}`},n.speakers?.[f.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${f.speaker+1}`):null,d.default.createElement("span",{className:"seg-text"},f.text,f.translations?.[B]?d.default.createElement("span",{className:"seg-trans"},f.translations[B]):null),d.default.createElement("span",{className:"seg-tools"},d.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:C=>{C.stopPropagation(),ee(f)}},"\u270E"),ue<n.lines.length-1?d.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:C=>{C.stopPropagation(),se(f.id)}},"\u21E3"):null)))):be?d.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((y||0)/1e3)+" \u79D2",s?.percent!=null?d.default.createElement("span",{className:"tx-progress"},d.default.createElement("span",{style:{width:`${s.percent}%`}})):null,d.default.createElement("br",null),d.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),d.default.createElement("br",null),z?d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:z},"\u53D6\u6D88\u8F6C\u5199"):null):G?d.default.createElement("div",{className:"transcript-status"},d.default.createElement("span",{className:"err"},G),d.default.createElement("br",null),d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:X},"\u91CD\u8BD5")):d.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",d.default.createElement("br",null),d.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:X},"\u5F00\u59CB\u8F6C\u5199"))))}function no(n){let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var h="/podwave/api",Fo=[.5,.75,1,1.25,1.5,1.75,2];async function W(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function H(n,i,s){let c=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let u=await c.json().catch(()=>({}));throw new Error(u.error||c.statusText)}return c.json()}function Ko({onSubmit:n,onPick:i,onClose:s}){let[c,u]=(0,e.useState)(""),[x,y]=(0,e.useState)(!1),[G,E]=(0,e.useState)(!1),[A,O]=(0,e.useState)(""),X=(0,e.useRef)(null);return(0,e.useEffect)(()=>{X.current?.focus();let w=m=>{m.key==="Escape"&&s()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{if(w.preventDefault(),!(!c.trim()||x)){y(!0),O("");try{await n(c.trim()),s()}catch(m){O(m.message),y(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!G){E(!0),O("");try{let w=await i();if(w?.canceled)return;if(w?.error)throw new Error(w.error);w?.path&&(await n(w.path),s())}catch(w){O(w.message)}finally{E(!1)}}},disabled:G,autoFocus:!0},G?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:X,value:c,onChange:w=>u(w.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:x||!c.trim()},x?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),A?e.default.createElement("div",{className:"dialog-error"},A):null))}function qo({config:n,onClose:i,onSave:s}){let[c,u]=(0,e.useState)(n?.provider||"api"),[x,y]=(0,e.useState)(""),[G,E]=(0,e.useState)(!1),[A,O]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:z=>{z.target===z.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async z=>{z.preventDefault(),E(!0),O("");try{await s({provider:c,apiKey:x||void 0})}catch(B){O(B.message),E(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:z=>u(z.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:x,onChange:z=>y(z.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),A?e.default.createElement("div",{className:"dialog-error"},A):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:G},"\u4FDD\u5B58"))))}function jt(){let[n,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[u,x]=(0,e.useState)({}),[y,G]=(0,e.useState)({running:!1}),[E,A]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[O,X]=(0,e.useState)(!1),[z,B]=(0,e.useState)(""),[w,m]=(0,e.useState)("recent"),[Q,pe]=(0,e.useState)("all"),[ne,fe]=(0,e.useState)("all"),[he,ee]=(0,e.useState)(null),[k,ae]=(0,e.useState)(null),[Te,se]=(0,e.useState)(!1),[V,te]=(0,e.useState)(0),[I,ie]=(0,e.useState)(0),[ce,le]=(0,e.useState)(!0),[be,f]=(0,e.useState)(!1),[ue,C]=(0,e.useState)(""),[Ge,Xe]=(0,e.useState)(""),[$,Y]=(0,e.useState)(null),[q,Me]=(0,e.useState)("none"),[Qe,Le]=(0,e.useState)(0),[We,F]=(0,e.useState)(""),[J,xe]=(0,e.useState)(!1),[nt,Ye]=(0,e.useState)(null),[S,at]=(0,e.useState)(""),[Ae,Pe]=(0,e.useState)({status:"none"}),[Z,Oe]=(0,e.useState)(!1),[st,it]=(0,e.useState)(!1),[lt,Ee]=(0,e.useState)(!1),[oe,_e]=(0,e.useState)(null),[dt,Re]=(0,e.useState)(!1),[Be,pt]=(0,e.useState)([]),[we,a]=(0,e.useState)(!1),[v,M]=(0,e.useState)([]),[ye,ge]=(0,e.useState)(null),[ke,Fe]=(0,e.useState)(""),[It,Lt]=(0,e.useState)([]),U=(0,e.useRef)(null),et=(0,e.useRef)(""),At=(0,e.useRef)(null),N=(0,e.useRef)(null),re=(0,e.useRef)(0),Ke=(0,e.useRef)(E),qe=(0,e.useRef)(0),Ot=(0,e.useRef)(0),Bt=(0,e.useRef)(0),so=(0,e.useRef)(!1),yt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{Ke.current=E},[E]),(0,e.useEffect)(()=>{N.current=k},[k]),(0,e.useEffect)(()=>{re.current=I},[I]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await W(`${h}/ui-settings`);!t&&o&&it(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Ft=(0,e.useCallback)(()=>{it(t=>{let o=!t;return fetch(`${h}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),b=(0,e.useCallback)(t=>{Xe(t),window.clearTimeout(Bt.current),Bt.current=window.setTimeout(()=>Xe(""),2600)},[]),Ne=(0,e.useCallback)(async()=>{let t=await W(`${h}/episodes`);return i(t.items||[]),c(t.folders||[]),x(t.progress||{}),G(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await W(`${h}/health`).catch(()=>({}));o.mediaBase&&(et.current=o.mediaBase);let l=await W(`${h}/state`);if(t)return;A(l.settings),c(l.folders||[]);let p=await Ne();if(t)return;let T=l.settings?.lastEpisodeId,P=T?(p.items||[]).find(De=>De.id===T):null;if(P){ae(P),ie(P.duration||0);let De=p.progress?.[P.id]?.position||0;qe.current=De>5?De:0,te(qe.current);let Ie=U.current;Ie&&(Ie.src=et.current?`${et.current}/episodes/${P.id}/audio`:`${h}/episodes/${P.id}/audio`,Ie.load(),Ie.playbackRate=l.settings?.rate||1,Ie.volume=l.settings?.volume??.9)}le(!1),so.current=!0}catch(o){t||(C(o.message),le(!1))}})(),()=>{t=!0}},[Ne]),(0,e.useEffect)(()=>{if(!y.running)return;let t=setInterval(()=>{Ne().catch(()=>{})},1500);return()=>clearInterval(t)},[y.running,Ne]),(0,e.useEffect)(()=>{let t=!1;return Y(null),F(""),Le(0),k?.id?((async()=>{try{let o=await W(`${h}/episodes/${k.id}/transcript`);if(t)return;Me(o.status),_e(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?Y(o.transcript):o.status==="queued"||o.status==="running"?(Le(o.elapsedMs||0),o.transcript&&Y(o.transcript)):o.status==="error"&&F(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||F(o.message)}})(),()=>{t=!0}):(Me("none"),()=>{t=!0})},[k?.id]),(0,e.useEffect)(()=>{W(`${h}/translate/settings`).then(Ye).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(q!=="queued"&&q!=="running")return;let t=!1,o=setInterval(async()=>{let l=N.current?.id;if(l)try{let p=await W(`${h}/episodes/${l}/transcript`);if(t)return;Me(p.status),_e(p.status==="queued"||p.status==="running"?p:null),Le(p.elapsedMs||0),(p.status==="queued"||p.status==="running")&&p.transcript?Y(p.transcript):p.status==="done"&&p.transcript?(Y(p.transcript),xe(!0),b("\u8F6C\u5199\u5B8C\u6210")):p.status==="error"&&F(p.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[q,b]),(0,e.useEffect)(()=>{if(Ae.status!=="running")return;let t=!1,o=setInterval(async()=>{let l=N.current?.id;if(l)try{let p=await W(`${h}/episodes/${l}/translate?target=${S}`);if(t)return;if(Pe(p),p.status==="done"){let T=await W(`${h}/episodes/${l}/transcript`);!t&&T.transcript&&Y(T.transcript),b("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[Ae.status,S,b]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let p=await W(`${h}/jobs`);t||pt(p.items||[])}catch{}};o();let l=setInterval(o,2500);return()=>{t=!0,clearInterval(l)}},[]);let je=(0,e.useCallback)((t,o,l,p=!1)=>{if(!t)return;let T=Date.now();!p&&T-Ot.current<4e3||(Ot.current=T,H(`${h}/progress/${t}`,"PUT",{position:o,duration:l}).catch(()=>{}),x(P=>({...P,[t]:{position:o,duration:l,updatedAt:T}})))},[]),$e=(0,e.useCallback)(t=>{A(o=>({...o,...t})),H(`${h}/settings`,"PATCH",t).catch(()=>{})},[]),tt=(0,e.useCallback)(async()=>{if(N.current){F(""),xe(!0);try{let t=await H(`${h}/episodes/${N.current.id}/transcribe`,"POST",{});Me(t.status||"queued")}catch(t){F(t.message)}}},[]),io=(0,e.useCallback)(()=>{if($){xe(t=>!t);return}if(q==="queued"||q==="running"){xe(!0);return}tt()},[$,q,tt]),kt=(0,e.useCallback)(async()=>{if(N.current)try{await H(`${h}/episodes/${N.current.id}/transcribe/cancel`,"POST",{}),b("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){F(t.message)}},[b]),Nt=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await H(`${h}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await H(`${h}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await H(`${h}/jobs`,"DELETE",{key:t.key})}catch{}let l=await W(`${h}/jobs`).catch(()=>({items:[]}));pt(l.items||[])},[]),ct=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let l=await H(`${h}/transcribe/batch`,"POST",{ids:o});b(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),M([]),a(!1)}catch(l){b(l.message)}},[b]),lo=(0,e.useCallback)(t=>{M(o=>o.includes(t)?o.filter(l=>l!==t):[...o,t])},[]),Ce=(0,e.useCallback)(async(t,o,l)=>{try{let p=await H(`${h}${t}`,o,l||{});return p?.transcript&&Y(p.transcript),p}catch(p){return b(p.message),null}},[b]),Kt=(0,e.useCallback)(t=>{ge(t.id),Fe(t.text),Lt([])},[]),qt=(0,e.useCallback)(async t=>{if(!$)return;await Ce(`/episodes/${$.id}/transcript/lines/${t??ye}`,"PUT",{text:ke})&&(ge(null),b("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,ye,ke,Ce,b]),Ut=(0,e.useCallback)(async(t,o)=>{if(!$)return;await Ce(`/episodes/${$.id}/transcript/lines/${t??ye}/split`,"POST",{offset:o})&&(ge(null),b("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,ye,Ce,b]),Ht=(0,e.useCallback)(async t=>{if(!$)return;await Ce(`/episodes/${$.id}/transcript/lines/${t}/merge`,"POST",{})&&b("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,Ce,b]),Jt=(0,e.useCallback)(async()=>{if(!$)return;await Ce(`/episodes/${$.id}/transcript/undo`,"POST",{})&&b("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,Ce,b]),Vt=(0,e.useCallback)(async()=>{if($)try{let t=await W(`${h}/episodes/${$.id}/transcript/validate`);Lt(t.issues||[]),b(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){b(t.message)}},[$,b]),ut=(0,e.useCallback)(async()=>{let t=N.current?.id;if(!t)return;let o=await W(`${h}/episodes/${t}/transcript`);o.transcript&&Y(o.transcript)},[]),Zt=(0,e.useCallback)(async t=>{if(N.current?.id){Pe({status:"running"});try{let o=await H(`${h}/episodes/${N.current.id}/translate`,"POST",{target:t});Pe(o),o.status==="done"&&(await ut(),b("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){Pe({status:"error",error:o.message})}}},[ut,b]),Gt=(0,e.useCallback)(async t=>{if(at(t),!t)return;if($?.lines?.some(l=>l.translations?.[t])){Pe({status:"done"}),await ut();return}await Zt(t)},[$,Zt,ut]),po=t=>{let o=!t.favorite;i(l=>l.map(p=>p.id===t.id?{...p,favorite:o}:p)),H(`${h}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(l=>b(l.message))},Xt=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${h}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(l=>!t.includes(l.id))),M([]),t.includes(he)&&ee(null),b(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},_=(0,e.useMemo)(()=>{let t=[...n];return w==="title"?t.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):w==="duration"?t.sort((o,l)=>(l.duration||0)-(o.duration||0)):t.sort((o,l)=>l.mtime-o.mtime),t},[n,w]),me=(0,e.useMemo)(()=>{let t=z.trim().toLowerCase();return _.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let p=u[o.id]?.position||0,T=o.duration||0,P=T?p/T:0;return Q==="inprogress"?p>5&&P<.97:Q==="finished"?P>=.97:ne==="unheard"?p<=5:ne==="transcribed"?!!o.hasTranscript:ne==="favorites"?!!o.favorite:!0})},[_,z,Q,ne,u]),Qt=(0,e.useMemo)(()=>Be.filter(t=>t.status==="queued"||t.status==="running"),[Be]),Ue=(0,e.useMemo)(()=>me.filter(t=>!t.hasTranscript),[me]),$t=(0,e.useMemo)(()=>n.filter(t=>{let o=u[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(u[o.id]?.updatedAt||0)-(u[t.id]?.updatedAt||0)).slice(0,4),[n,u]),co=(0,e.useMemo)(()=>n.reduce((t,o)=>t+(o.duration||0),0),[n]),uo=Math.round(co/3600*10)/10,go=Q==="inprogress"?"\u7EE7\u7EED\u6536\u542C":Q==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",L=he?n.find(t=>t.id===he)||(k?.id===he?k:null):null,mo=ce?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":y.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${me.length} \u96C6 \xB7 \u5171 ${uo} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Yo=(0,e.useMemo)(()=>k?_.findIndex(t=>t.id===k.id):-1,[_,k]),He=(0,e.useCallback)(()=>{let t=U.current;if(t){if(!N.current){let o=me[0]||_[0];o&&ot(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[me,_]),ot=(0,e.useCallback)((t,o=!0)=>{let l=U.current;if(!l||!t)return;if(N.current&&N.current.id===t.id){o&&He();return}N.current&&!l.ended&&l.currentTime>1&&je(N.current.id,l.currentTime,l.duration||re.current,!0),N.current=t,ae(t),ee(P=>P&&t.id),ie(t.duration||0);let p=u[t.id]?.position||0,T=p>5&&(!t.duration||p<t.duration-10)?p:0;qe.current=T,te(T),l.src=et.current?`${et.current}/episodes/${t.id}/audio`:`${h}/episodes/${t.id}/audio`,l.load(),l.playbackRate=Ke.current.rate||1,l.volume=Ke.current.volume??.9,o&&l.play().catch(()=>{}),$e({lastEpisodeId:t.id})},[u,je,$e,He]),Wt=(0,e.useCallback)((t,o=!0)=>{t&&(ot(t,o),ee(t.id))},[ot]),ve=(0,e.useCallback)(t=>{let o=U.current;if(!o||!N.current)return;let l=Number(t);if(!Number.isFinite(l))return;let p=Number(re.current)||0,T=Number.isFinite(o.duration)&&o.duration>0?o.duration:p,P=Math.max(0,T>0?Math.min(l,T):l);try{o.currentTime=P}catch{qe.current=P;return}te(P),je(N.current.id,P,T||p,!0)},[je]),Yt=(0,e.useCallback)(t=>{let o=At.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(t.clientX-l.left)/l.width)):null},[]),gt=(0,e.useCallback)(t=>{let o=Yt(t),l=Number.isFinite(re.current)&&re.current>0?re.current:Number.isFinite(U.current?.duration)?U.current.duration:0;o==null||!l||ve(o*l)},[Yt,ve]),vo=(0,e.useCallback)(t=>{t.preventDefault(),yt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}gt(t)},[gt]),fo=(0,e.useCallback)(t=>{yt.current&&gt(t)},[gt]),_t=(0,e.useCallback)(t=>{yt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),ho=(0,e.useCallback)(t=>{let o=U.current;if(!o)return;let l=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),ve((o.currentTime||0)-l)),t.key==="ArrowRight"&&(t.preventDefault(),ve((o.currentTime||0)+l)),t.key==="Home"&&(t.preventDefault(),ve(0)),t.key==="End"&&(t.preventDefault(),ve(Number.isFinite(o.duration)?o.duration:0))},[ve]),rt=(0,e.useCallback)(t=>{let o=U.current;if(!o||!N.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||re.current||0)-1));o.currentTime=l,te(l)},[]),Ct=(0,e.useCallback)(t=>{if(!_.length)return;let l=((N.current?_.findIndex(p=>p.id===N.current.id):-1)+t+_.length)%_.length;ot(_[l],!0)},[_,ot]),bo=(0,e.useCallback)(t=>{let o=U.current;o&&(o.playbackRate=t),$e({rate:t}),X(!1)},[$e]);(0,e.useEffect)(()=>{if(!O)return;let t=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||X(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[O]);let mt=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),l=U.current;l&&(l.volume=o),$e({volume:o})},[$e]),xo=(0,e.useCallback)(()=>{let t=U.current,o=Ke.current.volume>0?0:.9;t&&(t.volume=o),$e({volume:o})},[$e]),wo=()=>{let t=U.current;!t||!N.current||(te(t.currentTime),je(N.current.id,t.currentTime,t.duration||re.current))},yo=()=>{let t=U.current,o=N.current;if(!t||!o)return;let l=Number.isFinite(t.duration)?t.duration:o.duration||0;ie(l);let p=qe.current;qe.current=0,p>0&&p<l-1&&(t.currentTime=p,te(p))},ko=()=>{let t=U.current;N.current&&je(N.current.id,t?.duration||re.current||0,t?.duration||re.current||0,!0),Ct(1)},No=async t=>{await H(`${h}/folders`,"POST",{path:t}),await Ne(),b("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},$o=async()=>{let t=await fetch(`${h}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Co=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),lt||Ee(!0))},zo=t=>{t.currentTarget.contains(t.relatedTarget)||Ee(!1)},So=async t=>{t.preventDefault(),Ee(!1);let o=t.dataTransfer,l=[...o?.files||[]],p=l.map(j=>j.path).filter(j=>typeof j=="string"&&j),T=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(j=>j.trim()).filter(j=>j.startsWith("file://")).map(j=>decodeURIComponent(j.replace(/^file:\/\//,""))),P=[...new Set([...p,...T])];if(P.length){try{let j=await H(`${h}/import/paths`,"POST",{paths:P});await Ne(),b(j.added?`\u5DF2\u6DFB\u52A0 ${j.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(j){C(j.message)}return}let De=l.filter(j=>j.size>0);if(!De.length){b("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Ie=`drop-${Date.now()}`,vt="",Tt=0;for(let j of De)try{let Rt=await fetch(`${h}/import/upload?name=${encodeURIComponent(j.name)}&batch=${Ie}`,{method:"POST",body:j}),Mo=await Rt.json();Rt.ok&&(vt=Mo.folder||vt,Tt+=1)}catch{}if(vt)try{await H(`${h}/folders`,"POST",{path:vt})}catch{}await Ne(),b(Tt?`\u5DF2\u5BFC\u5165 ${Tt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},To=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await H(`${h}/folders`,"DELETE",{path:t}),await Ne(),b("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){C(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),He()):o.key==="ArrowRight"?(o.preventDefault(),rt(15)):o.key==="ArrowLeft"?(o.preventDefault(),rt(-15)):o.key==="ArrowUp"?(o.preventDefault(),mt(Ke.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),mt(Ke.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[He,rt,mt]);let zt=t=>{let o=u[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},St=t=>{let o=u[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${st?"nav-collapsed":""}`,onDragOver:Co,onDragLeave:zo,onDrop:So},lt?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,st?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Ft},e.default.createElement(K,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(K,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.10"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Ft},e.default.createElement(K,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",$t.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(zt).length]].map(([t,o,l])=>e.default.createElement("button",{key:t,className:`nav-item ${Q===t?"active":""}`,onClick:()=>pe(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},l||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>f(!0)},e.default.createElement(K,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(K,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},oo(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>To(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,go),e.default.createElement("p",{className:"subline"},mo)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${dt?"is-on":""}`,onClick:()=>Re(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(K,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Qt.length?` ${Qt.length}`:"")),e.default.createElement("button",{className:`tool-btn ${we?"is-on":""}`,onClick:()=>{a(t=>!t),M([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(K,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(K,{name:"search",size:16}),e.default.createElement("input",{value:z,onChange:t=>B(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:t=>m(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),we?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",v.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>M(me.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Ue.length,onClick:()=>ct(Ue.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Ue.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!v.length,onClick:()=>ct(v)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!v.length,onClick:()=>Xt(v)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{M([]),a(!1)}},"\u53D6\u6D88")):null,ue?e.default.createElement("div",{className:"banner error",onClick:()=>C("")},ue," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,L?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>ee(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},L.artist,L.album?` \xB7 ${L.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ve,{item:L,size:288})),e.default.createElement("h2",{className:"episode-title"},L.title),e.default.createElement("p",{className:"episode-sub"},L.artist,L.album?` \xB7 ${L.album}`:""),e.default.createElement("p",{className:"episode-path",title:L.file},L.location||L.file),e.default.createElement("p",{className:"episode-stats"},Mt(L.duration)," \xB7 ",Pt(L.mtime)," \xB7 \u5DF2\u542C ",Math.round(St(L)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:He},Te&&k?.id===L.id?"\u6682\u505C":"\u64AD\u653E"),q==="queued"||q==="running"?e.default.createElement("button",{className:"btn ghost",onClick:kt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:tt},$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Xt([L.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(bt,{inline:!0,transcript:$,status:q,progress:oe?.progress,stage:oe?.stage,chunks:oe?.chunks,queued:oe?.queued,elapsed:Qe,editingId:ye,draft:ke,onDraftChange:Fe,onEditLine:Kt,onSaveLine:qt,onCancelEdit:()=>ge(null),onSplitLine:Ut,onMergeLine:Ht,onUndo:Jt,onValidate:Vt,issues:It,onCancel:kt,error:We,position:V,onSeek:ve,onClose:()=>ee(null),onStart:tt,target:S,job:Ae,onChangeTarget:Gt,onOpenSettings:()=>Oe(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${ne===t?"is-on":""}`,onClick:()=>fe(t)},o))),Q==="all"&&!z&&$t.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},$t.map(t=>{let o=St(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${k?.id===t.id?"is-current":""}`,onClick:()=>Wt(t,!0)},e.default.createElement(Ve,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ce?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):me.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>f(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},me.map((t,o)=>{let l=St(t),p=k?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${p?"is-current":""} ${zt(t)?"is-finished":""} ${we&&v.includes(t.id)?"is-selected":""}`,onClick:()=>we?lo(t.id):Wt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},we?v.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(K,{name:"check",size:14})):null:p&&Te?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ve,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Pt(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},Mt(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:T=>{T.stopPropagation(),po(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},zt(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(K,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),J&&k&&!L?e.default.createElement(bt,{transcript:$,status:q,progress:oe?.progress,stage:oe?.stage,chunks:oe?.chunks,queued:oe?.queued,elapsed:Qe,editingId:ye,draft:ke,onDraftChange:Fe,onEditLine:Kt,onSaveLine:qt,onCancelEdit:()=>ge(null),onSplitLine:Ut,onMergeLine:Ht,onUndo:Jt,onValidate:Vt,issues:It,onCancel:kt,error:We,position:V,onSeek:ve,onClose:()=>xe(!1),onStart:tt,target:S,job:Ae,onChangeTarget:Gt,onOpenSettings:()=>Oe(!0)}):null,dt?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>Re(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Be.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Be.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},no(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Nt(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Nt(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Nt(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Ue.length,onClick:()=>ct(Ue.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Ue.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!v.length,onClick:()=>ct(v)},"\u8F6C\u5199\u5DF2\u9009 ",v.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:At,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(I||0),"aria-valuenow":Math.round(V||0),"aria-valuetext":`${ze(V)} / ${ze(I)}`,onPointerDown:vo,onPointerMove:fo,onPointerUp:_t,onPointerCancel:_t,onKeyDown:ho},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${I?Math.min(100,Math.max(0,V/I*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${I?Math.min(100,Math.max(0,V/I*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},k?e.default.createElement("button",{className:"now-open",onClick:()=>ee(k.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(Ve,{item:k,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:k.title},k.title),e.default.createElement("div",{className:"now-artist"},k.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Ct(-1)},e.default.createElement(K,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>rt(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:He,disabled:!k&&me.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(K,{name:Te?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>rt(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Ct(1)},e.default.createElement(K,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${J?"active":""}`,onClick:io,disabled:!k,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(K,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":q==="queued"||q==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},ze(V)," / ",ze(I)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>X(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":O},E.rate,"\xD7"),O?e.default.createElement("span",{className:"rate-menu",role:"menu"},Fo.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===E.rate,className:t===E.rate?"is-on":"",onClick:()=>bo(t)},t,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:xo,title:"\u9759\u97F3"},e.default.createElement(K,{name:E.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:E.volume,onChange:t=>mt(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),be?e.default.createElement(Ko,{onClose:()=>f(!1),onSubmit:No,onPick:$o}):null,Z?e.default.createElement(qo,{config:nt,onClose:()=>Oe(!1),onSave:async t=>{let o=await H(`${h}/translate/settings`,"PUT",t);Ye(o),Oe(!1),b("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ge?e.default.createElement("div",{className:"toast"},Ge):null,e.default.createElement("audio",{ref:U,preload:"metadata",onPlay:()=>se(!0),onPause:()=>{se(!1);let t=U.current;N.current&&t&&t.currentTime>0&&!t.ended&&je(N.current.id,t.currentTime,t.duration||re.current,!0)},onTimeUpdate:wo,onLoadedMetadata:yo,onEnded:ko,onError:()=>{se(!1),b("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var xt=require("react");function Uo(n){let i=String(n||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(u=>Number.parseFloat(u));if(s.length<3||s.length>3&&s[3]===0)return null;let c=u=>{let x=u/255;return x<=.03928?x/12.92:((x+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function Ho(){for(let n of[document.body,document.documentElement]){if(!n)continue;let i=getComputedStyle(n).backgroundColor,s=Uo(i);if(s!==null)return s}return null}function ao(){let n=Ho();if(n!==null)return n>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function wt(){let[n,i]=(0,xt.useState)(ao);return(0,xt.useEffect)(()=>{let s=()=>i(ao());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let u=window.matchMedia("(prefers-color-scheme: light)");return u.addEventListener?.("change",s),()=>{c.disconnect(),u.removeEventListener?.("change",s)}},[]),n}var r=Je(require("react"),1);var D="/podwave/api";async function R(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Se(n,i,s){let c=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),u=await c.json().catch(()=>({}));if(!c.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return u}function Jo(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Ze(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Vo(n){if(!n)return"";let i=new Date(n),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Dt(){let n=wt(),[i,s]=(0,r.useState)([]),[c,u]=(0,r.useState)([]),[x,y]=(0,r.useState)({asrModel:"",translateModel:""}),[G,E]=(0,r.useState)(null),[A,O]=(0,r.useState)(null),[X,z]=(0,r.useState)({showSidebarPanel:!0}),[B,w]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[m,Q]=(0,r.useState)(null),[pe,ne]=(0,r.useState)(null),[fe,he]=(0,r.useState)(null),[ee,k]=(0,r.useState)(!1),[ae,Te]=(0,r.useState)("auto"),[se,V]=(0,r.useState)(!1),[te,I]=(0,r.useState)(""),[ie,ce]=(0,r.useState)(15),[le,be]=(0,r.useState)(!0),[f,ue]=(0,r.useState)("api"),[C,Ge]=(0,r.useState)("https://api.deepseek.com"),[Xe,$]=(0,r.useState)("deepseek-chat"),[Y,q]=(0,r.useState)(""),[Me,Qe]=(0,r.useState)(""),[Le,We]=(0,r.useState)(""),[F,J]=(0,r.useState)(""),[xe,nt]=(0,r.useState)(""),[Ye,S]=(0,r.useState)(""),at=(0,r.useCallback)(async()=>{try{let[a,v,M,ye,ge,ke,Fe]=await Promise.all([R(`${D}/history`),R(`${D}/models`),R(`${D}/translate/settings`),R(`${D}/ui-settings`),R(`${D}/transcribe/settings`),R(`${D}/import/settings`),R(`${D}/setup`)]);Q(Fe),Fe?.job?.status==="running"&&V(!0),w({mode:ke.mode||"copy",orphans:ke.orphans||0,orphanBytes:ke.orphanBytes||0}),z({showSidebarPanel:ye?.showSidebarPanel!==!1}),I((ge.hotwords||[]).join(" ")),ce(ge.chunkMinutes||15),be(ge.diarize!==!1),s(a.items||[]),u(v.models||[]),y(v.config||{asrModel:"",translateModel:""}),E(v.transcribe||null),Qe(v.config?.asrModel||""),We(v.config?.translateModel||""),O(M),ue(M.provider||"api"),Ge(M.apiBase||"https://api.deepseek.com"),$(M.apiModel||"deepseek-chat"),q(""),S("")}catch(a){S(a.message)}},[]);(0,r.useEffect)(()=>{at()},[at]),(0,r.useEffect)(()=>{let a=!1;return R(`${D}/setup/plan?source=${ae}`).then(v=>{a||ne(v)}).catch(()=>{}),()=>{a=!0}},[ae,m?.job?.status]),(0,r.useEffect)(()=>{if(!se&&m?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let v=await R(`${D}/setup`);Q(v),v.job?.status!=="running"&&V(!1)}catch{}},2500);return()=>window.clearInterval(a)},[se,m?.job?.status]);let Ae=async()=>{S(""),V(!0);try{await Se(`${D}/setup/install`,"POST",{source:ae});let a=await R(`${D}/setup`);Q(a),Z("\u5F00\u59CB\u5B89\u88C5")}catch(a){V(!1),S(a.message)}},Pe=async()=>{try{await Se(`${D}/setup/cancel`,"POST",{}),Z("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){S(a.message)}},Z=a=>{nt(a),window.setTimeout(()=>nt(""),2400)},Oe=async()=>{k(!0);try{let a=await R(`${D}/setup/verify`);he(a),Z(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){Z(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{k(!1)}},st=async()=>{try{let a=await R(`${D}/setup/diagnose`),v=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(v)}catch{let M=document.createElement("textarea");M.value=v,M.style.position="fixed",M.style.opacity="0",document.body.appendChild(M),M.select(),document.execCommand("copy"),M.remove()}Z("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){Z(a.message||"\u590D\u5236\u5931\u8D25")}},it=async()=>{J("api"),S("");try{let a={provider:f,apiBase:C,apiModel:Xe};Y.trim()&&(a.apiKey=Y.trim());let v=await Se(`${D}/translate/settings`,"PUT",a);O(v),q(""),Z("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{J("")}},lt=async()=>{J("models"),S("");try{let a=await Se(`${D}/models`,"PUT",{asrModel:Me,translateModel:Le});y(a.config),u(a.models||[]),E(a.transcribe||null),Z("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{J("")}},Ee=c.length?c:[{name:x.asrModel||"qwen3-asr-1.7b-8bit",ready:G?.modelReady},{name:x.translateModel||"hy-mt2-1.8b-4bit",ready:A?.localReady}],oe=Ee.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),_e=Ee.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),dt=async()=>{J("ui"),S("");try{let a=await Se(`${D}/ui-settings`,"PUT",{showSidebarPanel:X.showSidebarPanel});z({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),Z("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{J("")}},Re=async a=>{J("import"),S("");try{let v=await Se(`${D}/import/settings`,"PUT",{mode:a});w(M=>({...M,mode:v.mode})),Z("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(v){S(v.message)}finally{J("")}},Be=async()=>{if(B.orphans&&window.confirm(`\u6E05\u7406 ${B.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){J("imports"),S("");try{let a=await Se(`${D}/imports/orphans`,"DELETE",{});w(v=>({...v,orphans:0,orphanBytes:0})),Z(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){S(a.message)}finally{J("")}}},pt=async()=>{J("transcribe"),S("");try{let a=te.split(/[\s,，、]+/).map(M=>M.trim()).filter(Boolean).slice(0,500),v=await Se(`${D}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(ie)||15)),diarize:le});I((v.hotwords||[]).join(" ")),ce(v.chunkMinutes||15),be(v.diarize!==!1),Z("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{J("")}},we=Ee;return r.default.createElement("div",{className:"podwave-root","data-pw-theme":n,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,ht),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Ye?r.default.createElement("div",{className:"banner error",onClick:()=>S("")},Ye):null,xe?r.default.createElement("div",{className:"settings-message"},xe):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),m?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},m.platform?.osLabel," \xB7 ",m.platform?.arch," \xB7 ",m.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",m.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",m.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:st},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:ee,onClick:Oe},ee?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),fe?r.default.createElement("ul",{className:"setup-components"},fe.checks.map(a=>r.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(m.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},Ze(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:ae,onChange:a=>Te(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),pe?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Ze(pe.totalBytes)," \xB7 ",pe.items.length," \u9879"),r.default.createElement("ul",null,pe.items.map(a=>r.default.createElement("li",{key:a.id},r.default.createElement("span",null,a.label),r.default.createElement("span",null,a.bytes?Ze(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:se||m.job?.status==="running",onClick:Ae},se||m.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),m.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:Pe},"\u53D6\u6D88"):null),m.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,m.job.stage||m.job.status),r.default.createElement("span",null,m.job.progress||0,"% \xB7 ",Ze(m.job.bytes)," / ",Ze(m.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${m.job.progress||0}%`}})),m.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",m.job.error):null,m.job.status==="done"&&(!m.job.summary||!m.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(m.job.summary)&&m.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},m.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",Ze(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?r.default.createElement("ul",{className:"history-list"},i.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Jo(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},Vo(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:te,onChange:a=>I(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:ie,onChange:a=>ce(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:le,onChange:a=>be(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:pt,disabled:F==="transcribe"},F==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:B.mode==="copy",onChange:()=>Re("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:B.mode==="reference",onChange:()=>Re("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Be,disabled:F==="imports"||!B.orphans},B.orphans?`\u6E05\u7406 ${B.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(B.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:f,onChange:a=>ue(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:C,onChange:a=>Ge(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:Xe,onChange:a=>$(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:Y,onChange:a=>q(a.target.value),placeholder:A?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${A.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:it,disabled:F==="api"},F==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},A?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:X.showSidebarPanel,onChange:a=>z({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:dt,disabled:F==="ui"},F==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:Me,onChange:a=>Qe(a.target.value)},(oe.length?oe:we).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},G?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Le,onChange:a=>We(a.target.value)},(_e.length?_e:we).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},A?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:lt,disabled:F==="models"},F==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Zo({size:n=16}){return de.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},de.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),de.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),de.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Go(){let n=wt();return de.default.createElement("div",{className:"podwave-root","data-pw-theme":n},de.default.createElement("style",null,ht),de.default.createElement(jt,null))}function Xo(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},Go)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Dt));let i=null,s="podwave-hide-nav",c=x=>{if(typeof document>"u")return;let y=document.getElementById(s);x&&!y?(y=document.createElement("style"),y.id=s,y.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(y)):!x&&y&&y.remove()},u=x=>{if(c(!x),x&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Zo);else if(!x&&i){let y=i;i=null;try{typeof y?.dispose=="function"?y.dispose():typeof y=="function"?y():typeof y?.dispose>"u"&&typeof y?.unregister=="function"&&y.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(x=>x.ok?x.json():null).then(x=>u(x?.showSidebarPanel!==!1)).catch(()=>u(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",x=>{u(x?.detail?.showSidebarPanel!==!1)})}var Qo=["slots"];

return module.exports}})
