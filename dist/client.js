window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ma=Object.create;var Ro=Object.defineProperty;var va=Object.getOwnPropertyDescriptor;var ga=Object.getOwnPropertyNames;var fa=Object.getPrototypeOf,ha=Object.prototype.hasOwnProperty;var xa=(a,s)=>{for(var i in s)Ro(a,i,{get:s[i],enumerable:!0})},mr=(a,s,i,p)=>{if(s&&typeof s=="object"||typeof s=="function")for(let u of ga(s))!ha.call(a,u)&&u!==i&&Ro(a,u,{get:()=>s[u],enumerable:!(p=va(s,u))||p.enumerable});return a};var ot=(a,s,i)=>(i=a!=null?ma(fa(a)):{},mr(s||!a||!a.__esModule?Ro(i,"default",{value:a,enumerable:!0}):i,a)),ba=a=>mr(Ro({},"__esModule",{value:!0}),a);var Fa={};xa(Fa,{apply:()=>Ua,inject:()=>Ba});module.exports=ba(Fa);var ut=ot(require("react"),1);var en=`
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
  --hover: #1a1a20;
  --line: #212129;
  --line-soft: #1a1a21;
  --line-strong: #2b2b33;
  --text: #ececef;
  --muted: #8f8f9a;
  --dim: #63636d;
  --accent: #e6a54a;
  --accent-soft: rgba(230, 165, 74, 0.12);
  --accent-ink: #191204;
  --danger: #e08a8a;
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
  cursor: pointer;
}

.podwave-root .folder-list li:hover { background: var(--hover); color: var(--text); }

.podwave-root .folder-list li.is-active {
  background: var(--accent-soft);
  color: var(--text);
  box-shadow: inset 2px 0 0 var(--accent);
}

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

/* \u76EE\u5F55\u9762\u5305\u5C51\u4E0E\u5B50\u6587\u4EF6\u5939\u884C\uFF1A\u70B9\u8FDB\u6587\u4EF6\u5939\u53EA\u770B\u90A3\u4E00\u5C42\u7684\u97F3\u9891 */
.podwave-root .crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: 10px 10px 8px;
  font-size: 13px;
  color: var(--dim);
}

.podwave-root .crumb-item { display: inline-flex; align-items: center; gap: 2px; }

.podwave-root .crumb {
  padding: 2px 6px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--text);
  font: inherit;
  cursor: pointer;
}

.podwave-root .crumb:hover:not(:disabled) { background: var(--hover); }

.podwave-root .crumb.is-current { color: var(--dim); cursor: default; }

.podwave-root .crumb-sep { color: var(--dim); opacity: 0.6; }

.podwave-root .folder-row .row-title { font-weight: 500; }

.podwave-root .folder-row .col-duration { color: var(--dim); }

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

.podwave-root .side-head .icon-btn { color: var(--text); }

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
  /* \u5DE5\u5177\u680F\u7684\u5F39\u51FA\u83DC\u5355\u8981\u80FD\u76D6\u5230\u9762\u677F\u5916\u9762\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E0D\u88C1\uFF1B\u6EDA\u52A8\u533A\u57DF\u81EA\u5DF1\u88C1\u3002 */
  overflow: visible;
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
.podwave-root .transcript-close { border: 0; background: none; color: var(--muted); cursor: pointer; font-size: 16px; line-height: 1; padding: 2px 4px; }
/* \u8FB9\u7F18\u70ED\u533A\uFF1A\u9F20\u6807\u79FB\u5230\u5DE6/\u4E0A\u8FB9\u7F18\u624D\u51FA\u73B0\u4E00\u6761\u9AD8\u4EAE\u7EBF\uFF0C\u62D6\u5B83\u5C31\u80FD\u6539\u5927\u5C0F\u3002 */
.podwave-root .transcript-grip { position: absolute; z-index: 2; }
.podwave-root .transcript-grip.is-left { left: 0; top: 16px; bottom: 16px; width: 7px; cursor: ew-resize; }
.podwave-root .transcript-grip.is-top { top: 0; left: 16px; right: 16px; height: 7px; cursor: ns-resize; }
.podwave-root .transcript-grip.is-left { background: linear-gradient(90deg, color-mix(in srgb, var(--line-strong) 80%, transparent), transparent); }
.podwave-root .transcript-grip.is-top { background: linear-gradient(180deg, color-mix(in srgb, var(--line-strong) 80%, transparent), transparent); }
.podwave-root .transcript-grip.is-left:hover { background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 60%, transparent), transparent); }
.podwave-root .transcript-grip.is-top:hover { background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 60%, transparent), transparent); }

/* \u53F3\u4E0B\u89D2\u533A\u57DF\u62D6\u4E0D\u52A8\uFF08\u9762\u677F\u951A\u5728\u53F3\u4E0B\uFF09\uFF0C\u6240\u4EE5\u628A\u624B\u653E\u5DE6\u4E0B\u89D2\uFF1A\u5411\u5DE6\u53D8\u5BBD\u3001\u5411\u4E0A\u53D8\u9AD8\u3002
   \u505A\u5F97\u660E\u663E\u4E00\u70B9\u2014\u2014\u900F\u660E\u7684\u628A\u624B\u7B49\u4E8E\u6CA1\u6709\u628A\u624B\uFF0C\u7528\u6237\u6839\u672C\u4E0D\u4F1A\u53BB\u731C\u90A3\u513F\u80FD\u62D6\u3002 */
.podwave-root .transcript-resize {
  position: absolute;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  width: 22px;
  height: 22px;
  border: 0;
  padding: 0;
  border-bottom-left-radius: 12px;
  opacity: 1;
  cursor: nesw-resize;
  touch-action: none;
  background-image: repeating-linear-gradient(135deg, var(--muted) 0 1.5px, transparent 1.5px 5px);
  -webkit-mask-image: linear-gradient(135deg, transparent 40%, #000 40%);
  mask-image: linear-gradient(135deg, transparent 40%, #000 40%);
}
.podwave-root .transcript-resize:hover {
  background-image: repeating-linear-gradient(135deg, var(--accent) 0 1.5px, transparent 1.5px 5px);
}
/* \u5185\u5D4C\u9762\u677F\u5BBD\u5EA6\u7531\u8BE6\u60C5\u9875\u90A3\u4E00\u680F\u51B3\u5B9A\uFF0C\u53EA\u7ED9\u4E00\u6761\u5E95\u8FB9\u628A\u624B\u6539\u9AD8\u5EA6\u3002 */
.podwave-root .transcript-resize.is-inline {
  left: 50%;
  bottom: 3px;
  z-index: 2;
  width: 56px;
  height: 5px;
  transform: translateX(-50%);
  border-radius: 999px;
  background-image: none;
  background-color: var(--muted);
  opacity: .55;
  cursor: ns-resize;
}
.podwave-root .transcript-resize.is-inline:hover {
  background-color: var(--accent);
  opacity: 1;
}
.podwave-root .transcript-body { overflow-y: auto; padding: 6px 0; border-radius: 0 0 12px 12px; flex: 1 1 auto; min-height: 0; }
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
.podwave-root .seg-text { font-size: var(--sub-size, 15px); line-height: 1.55; color: var(--text); }
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
.podwave-root .seg-trans { display: block; margin-top: 2px; color: var(--muted); font-size: calc(var(--sub-size, 15px) * 0.84); line-height: 1.5; }
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
.podwave-root .episode-view { position: relative; display: flex; gap: 26px; align-items: flex-start; }
.podwave-root .episode-left {
  position: relative;
  flex: 0 0 var(--episode-left-w, 240px);
  width: var(--episode-left-w, 240px);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
/* \u4E2D\u95F4\u90A3\u6761\u5206\u9694\u7EBF\uFF1A\u5F80\u5DE6\u53F3\u62D6\u80FD\u6539\u5DE6\u680F\u5BBD\u5EA6\uFF0C\u5C01\u9762\u8DDF\u7740\u7F29\u653E\u3002 */
.podwave-root .episode-split {
  position: absolute;
  top: 0;
  bottom: 0;
  /* \u6302\u5728\u5B57\u5E55\u680F\u5185\u90E8\u3001\u5F80\u5DE6\u63A2\u8FDB\u4E24\u680F\u4E4B\u95F4\u90A3 26px \u7684\u95F4\u8DDD\uFF1A
     \u6574\u6761\u95F4\u8DDD\u90FD\u80FD\u62D6\uFF1Btop/bottom \u8DDF\u7740\u672C\u680F\u9AD8\u5EA6\uFF0C\u4E0D\u4F1A\u5728\u9762\u677F\u4E0B\u9762\u62D6\u51FA\u5C3E\u5DF4\u3002 */
  left: -27px;
  width: 28px;
  z-index: 6;
  border: 0;
  padding: 0;
  background: none;
  cursor: ew-resize;
  touch-action: none;
}
.podwave-root .episode-split::after {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 12px;
  width: 3px;
  border-radius: 999px;
  background: var(--line-strong);
  opacity: .7;
  transition: background .15s, opacity .15s;
}
.podwave-root .episode-split:hover::after { background: var(--accent); opacity: 1; }
.podwave-root .episode-cover { width: 100%; aspect-ratio: 1 / 1; border-radius: 14px; overflow: hidden; border: 1px solid var(--line); background: var(--hover); position: relative; }
.podwave-root .episode-cover .cover { width: 100% !important; height: 100% !important; object-fit: cover; border-radius: 0; }
/* \u70B9\u5C01\u9762\u6362\u56FE\uFF1A\u6574\u5757\u53EF\u70B9\uFF0Chover \u624D\u6D6E\u51FA\u63D0\u793A\uFF0C\u5E73\u65F6\u4E0D\u6253\u6270 */
.podwave-root .cover-swap { position: relative; display: block; width: 100%; height: 100%; padding: 0; border: 0; background: none; cursor: pointer; color: inherit; }
.podwave-root .cover-swap:disabled { cursor: progress; }
.podwave-root .cover-swap-hint {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 26px 0 10px;
  font-size: 12.5px; letter-spacing: .02em; text-align: center; color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, .74), rgba(0, 0, 0, 0));
  opacity: 0; transition: opacity .16s ease;
}
.podwave-root .cover-swap:hover .cover-swap-hint,
.podwave-root .cover-swap:focus-visible .cover-swap-hint { opacity: 1; }
.podwave-root .cover-swap:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.podwave-root .episode-title { margin: 8px 0 0; font-size: 19px; line-height: 1.35; color: var(--text); }
.podwave-root .episode-sub { margin: 0; color: #b9b9c4; font-size: 13px; }
.podwave-root .episode-path { margin: 0; color: var(--muted); font-size: 11.5px; word-break: break-all; }
.podwave-root .episode-stats { margin: 0; color: #8a8a96; font-size: 12px; }
.podwave-root .episode-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
.podwave-root .episode-right { position: relative; flex: 1; min-width: 0; }
.podwave-root .transcript-panel.inline {
  /* \u6D6E\u52A8\u7248\u9760 right/bottom \u8D34\u53F3\u4E0B\u89D2\uFF1B\u5185\u5D4C\u65F6\u5FC5\u987B\u628A\u8FD9\u56DB\u4E2A\u504F\u79FB\u6E05\u6389\uFF0C
     \u5426\u5219 position: relative \u4F1A\u6309 right/bottom \u628A\u6574\u5757\u9762\u677F\u4F4D\u79FB\u51FA\u53BB
     \uFF08\u5386\u53F2\u4E0A\u5B83\u4E00\u76F4\u88AB\u9876\u4E0A\u53BB 104px\u3001\u5F80\u5DE6 18px\uFF0C\u6B63\u597D\u538B\u4F4F\u5C01\u9762\u90A3\u680F\uFF09\u3002 */
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  width: auto;
  max-height: none;
  height: min(560px, calc(100vh - 300px));
  min-height: 340px;
  box-shadow: none;
}
@media (max-width: 1024px) {
  .podwave-root .episode-view { flex-direction: column; align-items: stretch; }
  .podwave-root .episode-left { flex: auto; width: 100%; }
  .podwave-root .episode-cover { max-width: 240px; }
  .podwave-root .episode-right { width: 100%; flex: none; }
  .podwave-root .episode-split { display: none; }
  .podwave-root .transcript-panel.inline { width: 100%; height: 420px; }
}

/* \u8BBE\u7F6E\u9875\uFF1A\u8DDF\u968F DSH \u8BBE\u7F6E\u9762\u677F\u7684\u914D\u8272\u4E0E\u6392\u7248\uFF0C\u4E0D\u8986\u76D6\u80CC\u666F */
.podwave-root .podwave-settings { height: auto; overflow: visible; padding: 4px 0 24px; color: inherit; font-size: 14px; }
.podwave-root .podwave-settings .settings-head h1 { margin: 0 0 4px; font-size: 15px; font-weight: 600; color: inherit; }
.podwave-root .podwave-settings .settings-head p { margin: 0; font-size: 13px; color: color-mix(in srgb, currentColor 58%, transparent); }
.podwave-root .podwave-settings .settings-stale {
  margin: 12px 0 4px;
  padding: 10px 12px;
  border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
  border-left-width: 3px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: inherit;
  font-size: 13px;
  line-height: 1.6;
}
.podwave-root .podwave-settings .settings-stale strong { font-weight: 600; }
.podwave-root .podwave-settings .settings-message { margin-top: 10px; font-size: 13px; color: color-mix(in srgb, currentColor 75%, transparent); }
.podwave-root .podwave-settings .settings-card { margin-top: 0; padding: 18px 0 4px; border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent); }
.podwave-root .podwave-settings .settings-card:first-of-type { margin-top: 16px; }
.podwave-root .podwave-settings .settings-card h2 { margin: 0 0 4px; font-size: 14px; font-weight: 600; color: inherit; }
/* \u53EF\u6536\u8D77\u7684\u5361\u7247\uFF08\u76EE\u524D\u53EA\u6709\u300C\u5386\u53F2\u8BB0\u5F55\u300D\uFF09\uFF1A\u6807\u9898\u6574\u884C\u53EF\u70B9\uFF0C\u53F3\u8FB9\u6302\u6761\u6570\u548C\u7BAD\u5934 */
.podwave-root .podwave-settings .card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.podwave-root .podwave-settings .card-head h2 { margin: 0; }
.podwave-root .podwave-settings .card-head:hover h2 { color: var(--accent); }
.podwave-root .podwave-settings .card-badge { margin-left: auto; color: color-mix(in srgb, currentColor 55%, transparent); font-size: 12px; }
.podwave-root .podwave-settings .card-caret { color: color-mix(in srgb, currentColor 55%, transparent); font-size: 11px; line-height: 1; transition: transform .15s ease; }
.podwave-root .podwave-settings .collapsible.is-open .card-caret { transform: rotate(180deg); }
.podwave-root .podwave-settings .collapsible:not(.is-open) { padding-bottom: 6px; }
.podwave-root .podwave-settings .settings-hint { margin: 0 0 12px; font-size: 13px; color: color-mix(in srgb, currentColor 55%, transparent); }
/* \u53EF\u9009\u7EC4\u4EF6\u88AB\u8DF3\u8FC7\u8FD9\u7C7B\u300C\u88C5\u597D\u4E86\u4F46\u6709\u7F3A\u53E3\u300D\u7684\u63D0\u793A\uFF0C\u7528\u8B66\u544A\u8272\uFF0C\u4E0D\u80FD\u548C\u666E\u901A\u8BF4\u660E\u6DF7\u5728\u4E00\u8D77 */
.podwave-root .podwave-settings .setup-warning { color: var(--accent); font-size: 13px; }
.podwave-root .podwave-settings .settings-empty { margin: 4px 0 0; font-size: 13px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-list { list-style: none; margin: 2px 0 0; padding: 0; }
.podwave-root .podwave-settings .history-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 9px 0; border-top: 1px solid color-mix(in srgb, currentColor 8%, transparent); }
.podwave-root .podwave-settings .history-row:first-child { border-top: 0; padding-top: 2px; }
.podwave-root .podwave-settings .history-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .history-title { font-size: 13.5px; color: inherit; }
.podwave-root .podwave-settings .history-meta { font-size: 12.5px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-date { font-size: 12.5px; white-space: nowrap; color: color-mix(in srgb, currentColor 45%, transparent); }
/* \u6A21\u578B\u5B58\u653E\u4F4D\u7F6E\uFF1A\u8DEF\u5F84\u8981\u80FD\u6574\u6761\u8BFB\u51FA\u6765\uFF08\u53EF\u80FD\u5F88\u957F\uFF09\uFF0C\u4F53\u79EF\u5355\u72EC\u4E00\u5217 */
.podwave-root .podwave-settings .model-path { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px; padding: 10px 12px; margin: 0 0 12px; border-radius: 9px; background: color-mix(in srgb, currentColor 6%, transparent); }
.podwave-root .podwave-settings .model-path-text { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12.5px; line-height: 1.5; word-break: break-all; }
.podwave-root .podwave-settings .model-path-size { font-size: 12.5px; white-space: nowrap; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .model-list { list-style: none; margin: 12px 0 0; padding: 0; }
.podwave-root .podwave-settings .model-row { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 9px 0; border-top: 1px solid color-mix(in srgb, currentColor 8%, transparent); }
.podwave-root .podwave-settings .model-row:first-child { border-top: 0; }
.podwave-root .podwave-settings .model-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .model-name { font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.podwave-root .podwave-settings .model-meta { font-size: 12.5px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .model-remove { flex: 0 0 auto; }
.podwave-root .podwave-settings .settings-fields { display: flex; flex-direction: column; gap: 10px; }
.podwave-root .podwave-settings .field-row { display: flex; align-items: center; gap: 12px; min-width: 0; }
.podwave-root .podwave-settings .field-row > span:first-child { flex: 0 0 118px; font-size: 13px; color: color-mix(in srgb, currentColor 75%, transparent); }
.podwave-root .podwave-settings .field-row select,
.podwave-root .podwave-settings .field-row input { min-width: 0; flex: 1 1 auto; max-width: 320px; height: 32px; padding: 0 10px; color: inherit; background: color-mix(in srgb, currentColor 6%, transparent); border: 1px solid color-mix(in srgb, currentColor 13%, transparent); border-radius: 8px; font-size: 13.5px; outline: none; }
.podwave-root .podwave-settings .field-row select:focus,
.podwave-root .podwave-settings .field-row input:focus { border-color: color-mix(in srgb, currentColor 34%, transparent); }
.podwave-root .podwave-settings .field-row select option { color: var(--text); background: #2c2c2e; }
.podwave-root .podwave-settings .settings-status { flex: none; font-size: 12.5px; color: color-mix(in srgb, currentColor 50%, transparent); }
/* \u6A21\u578B\u9009\u9519\u7528\u9014\uFF08\u7528\u7FFB\u8BD1\u6A21\u578B\u8F6C\u5199\uFF09\u8FD9\u7C7B\u786C\u9519\u8BEF\uFF0C\u72B6\u6001\u7528\u8B66\u793A\u8272\uFF0C\u522B\u548C\u300C\u672A\u5C31\u7EEA\u300D\u6DF7\u6210\u4E00\u7247\u7070 */
.podwave-root .podwave-settings .settings-status.is-warn { color: var(--danger); }
.podwave-root .podwave-settings .settings-actions { display: flex; align-items: center; gap: 12px; margin-top: 14px; }
.podwave-root .podwave-settings .settings-btn { height: 30px; padding: 0 14px; border: 0; border-radius: 8px; color: inherit; background: color-mix(in srgb, currentColor 11%, transparent); font-size: 13.5px; font-weight: 500; cursor: pointer; }
.podwave-root .podwave-settings .settings-btn:hover { background: color-mix(in srgb, currentColor 17%, transparent); }
.podwave-root .podwave-settings .settings-btn:disabled { opacity: 0.5; cursor: default; }
.podwave-root .podwave-settings .settings-btn.is-mini { height: 28px; padding: 0 10px; font-size: 12.5px; flex: none; }
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
  .podwave-root .episode-split { display: none; }
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
.podwave-root .topbar .tool-btn { display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 11px; border: 1px solid var(--line); border-radius: 9px; background: var(--elev); color: var(--text); font-size: 12.5px; cursor: pointer; white-space: nowrap; }
.podwave-root .topbar .tool-btn:hover { color: var(--text); background: var(--hover); }
.podwave-root .topbar .tool-btn.is-on { color: var(--accent); border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); background: color-mix(in srgb, var(--accent) 12%, var(--elev)); }
.podwave-root .batch-bar { display: flex; align-items: center; gap: 10px; margin: 0 0 14px; padding: 10px 12px; border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line)); border-radius: 10px; background: color-mix(in srgb, var(--accent) 8%, var(--elev)); font-size: 12.5px; color: var(--muted); }
.podwave-root .batch-bar > span:first-child { margin-right: auto; }
.podwave-root .row.is-selected { background: color-mix(in srgb, var(--accent) 12%, transparent); }
.podwave-root .row-check { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 6px; background: var(--accent); color: #1b1206; }
.podwave-root .row-badge { display: inline-block; margin-left: 7px; padding: 1px 6px; border-radius: 5px; background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); font-size: 10.5px; vertical-align: 1px; }
.podwave-root .tx-progress { display: block; height: 4px; margin: 8px 0 6px; border-radius: 2px; background: var(--line); overflow: hidden; }
.podwave-root .tx-progress > span { display: block; height: 100%; background: var(--accent); transition: width .3s ease; }
.podwave-root .tx-hint { color: var(--muted); font-size: 12px; }
.podwave-root .jobs-panel {
  position: absolute;
  top: 96px;
  right: 24px;
  width: min(380px, calc(100% - 48px));
  max-height: calc(100% - 120px);
  z-index: 30;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--elev);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}
.podwave-root .jobs-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.podwave-root .jobs-head h3 { margin: 0; font-size: 13px; font-weight: 600; }
.podwave-root .jobs-body { max-height: min(300px, calc(100vh - 260px)); overflow-y: auto; padding: 6px 8px; }
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
/* \u5DE5\u5177\u680F\u91CC\u7684\u7FFB\u8BD1\u6309\u94AE\uFF1A\u6709\u6D3B\u8981\u5E72\u65F6\u7528\u4E3B\u8272\u63D0\u9192\uFF0C\u8DD1\u8D77\u6765\u5C31\u53D8\u6210\u72B6\u6001\u6587\u5B57 */
.podwave-root .mini-link.is-primary { color: var(--accent); font-weight: 600; }
.podwave-root .mini-link.is-busy { cursor: default; opacity: .66; }
.podwave-root .mini-link.is-busy:hover { color: var(--muted); }

/* \u5F39\u51FA\u83DC\u5355\uFF1A\u5DE5\u5177\u680F\u4E0A\u7684\u300C\u22EF\u300D\u300C\u5BFC\u51FA\u300D\u300CAa\u300D\u5171\u7528\u4E00\u4E2A\u58F3\uFF0C\u7701\u5F97\u4E00\u6392\u6309\u94AE\u94FA\u6EE1\u4E00\u884C\u3002 */
.podwave-root .pop-wrap { position: relative; display: inline-flex; }
.podwave-root .pop-btn {
  border: 0;
  background: none;
  padding: 2px 6px;
  border-radius: 6px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
  cursor: pointer;
}
.podwave-root .pop-btn:hover { color: var(--accent); background: var(--hover); }
.podwave-root .pop-wrap.tr-fs .pop-btn { font-size: 13px; letter-spacing: .02em; }
.podwave-root .pop-panel {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 45;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 168px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #17171c;
  box-shadow: 0 14px 34px rgba(0, 0, 0, .45);
}
.podwave-root .pop-panel.is-start { right: auto; left: 0; }
.podwave-root .pop-panel.is-up { top: auto; bottom: calc(100% + 6px); }
.podwave-root .pop-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  padding: 6px 8px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--text);
  font-size: 12.5px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.podwave-root .pop-item:hover:not(:disabled) { background: #22222a; color: var(--accent); }
.podwave-root .pop-item.is-on > span:first-child::before { content: '\u2713 '; color: var(--accent); }
.podwave-root .pop-item.is-danger { color: #e07a5f; }
.podwave-root .pop-item.is-danger:hover:not(:disabled) { background: #2a1c1c; color: #f08a70; }
.podwave-root .pop-item:disabled { color: var(--muted); opacity: .55; cursor: default; }
.podwave-root .pop-item:disabled .pop-hint { opacity: .8; }
.podwave-root .pop-hint { color: var(--muted); font-size: 11px; }
/* \u64AD\u653E\u6761\u4E0A\u90A3\u4E2A\u300C\u5B57\u5E55\u300D\u83DC\u5355\u9760\u53F3\uFF0C\u522B\u88AB\u89C6\u53E3\u5207\u6389 */
.podwave-root .player-subs .pop-panel { min-width: 190px; }
.podwave-root .batch-transcribe .pop-panel { min-width: 186px; }
.podwave-root .detail-more .pop-panel { min-width: 152px; }
.podwave-root .pop-fs { display: flex; align-items: center; padding: 4px 6px 2px; }

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
.podwave-root .sleep-wrap { position: relative; display: inline-flex; }
.podwave-root .sleep-btn { display: inline-flex; align-items: center; gap: 4px; }
.podwave-root .sleep-btn.active { color: var(--accent); }
.podwave-root .sleep-left { font-size: 11px; letter-spacing: 0.02em; }
.podwave-root .sleep-menu { position: absolute; bottom: calc(100% + 8px); right: 0; z-index: 40; min-width: 124px; padding: 6px; display: flex; flex-direction: column; background: var(--elev); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35); }
.podwave-root .sleep-menu button { text-align: left; background: none; border: 0; color: var(--text); padding: 7px 10px; border-radius: 7px; cursor: pointer; font-size: 12.5px; }
.podwave-root .sleep-menu button:hover { background: var(--hover); }
.podwave-root .sleep-menu button.is-on { color: var(--accent); }

/* \u5B57\u5E55\u5B57\u53F7\u62D6\u52A8\u6761 + \u60AC\u6D6E\u5B57\u5E55 */
.podwave-root .sub-size {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
}
.podwave-root .sub-size input[type="range"] {
  width: 92px;
  height: 4px;
  margin: 0;
  accent-color: var(--accent);
  cursor: pointer;
}
.podwave-root .sub-size.compact input[type="range"] { width: 64px; }
.podwave-root .sub-size-value {
  min-width: 18px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--text);
}
.podwave-root .sub-size.compact .sub-size-label { display: none; }

.podwave-root .caption-overlay {
  position: fixed;
  right: 24px;
  bottom: 132px;
  width: min(620px, calc(100vw - 48px));
  display: flex;
  flex-direction: column;
  background: var(--elev);
  background: color-mix(in srgb, var(--elev) 94%, transparent);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, .55);
  z-index: 60;
  overflow: hidden;
  backdrop-filter: blur(6px);
}
/* \u5B9A\u9AD8\u4E4B\u540E\u6B63\u6587\u81EA\u5DF1\u6EDA\uFF0C\u6807\u9898\u680F\u548C\u628A\u624B\u4E0D\u8DDF\u7740\u52A8 */
.podwave-root .caption-overlay.is-sized .caption-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
.podwave-root .caption-resize {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  touch-action: none;
  opacity: .55;
  background:
    linear-gradient(135deg, transparent 46%, var(--muted) 46%, var(--muted) 54%, transparent 54%) no-repeat,
    linear-gradient(135deg, transparent 68%, var(--muted) 68%, var(--muted) 74%, transparent 74%) no-repeat;
  background-size: 100% 100%;
}
.podwave-root .caption-resize:hover { opacity: 1; }
.podwave-root .caption-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 12px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}
.podwave-root .caption-head:active { cursor: grabbing; }
.podwave-root .caption-title { color: var(--text); }
.podwave-root .caption-head .sub-size { margin-left: auto; }
.podwave-root .caption-close {
  border: 0;
  background: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0 2px;
}
.podwave-root .caption-close:hover { color: var(--text); }
.podwave-root .caption-body {
  padding: 10px 14px 12px;
  cursor: pointer;
  outline: none;
}
.podwave-root .caption-body.empty { cursor: default; }
.podwave-root .caption-speaker {
  display: inline-block;
  margin-bottom: 4px;
  padding: 1px 6px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 12px;
}
.podwave-root .caption-text {
  font-size: calc(var(--sub-size, 15px) + 3px);
  line-height: 1.5;
  color: var(--text);
}
.podwave-root .caption-trans {
  margin-top: 4px;
  font-size: var(--sub-size, 15px);
  line-height: 1.5;
  color: var(--muted);
}
.podwave-root .caption-hint { font-size: 13px; color: var(--muted); }

/* \u5B9E\u65F6\u5B57\u5E55\uFF08\u542C\u7CFB\u7EDF\u58F0\u97F3\uFF09\uFF1A\u8D34\u5E95\u5C45\u4E2D\u7684\u60AC\u6D6E\u7A97\uFF0C\u62D6\u6807\u9898\u680F\u53EF\u4EE5\u632A\u8D70\u3002 */
.podwave-root .live-caption {
  position: fixed;
  left: 50%;
  bottom: 96px;
  transform: translateX(-50%);
  z-index: 70;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(680px, calc(100vw - 40px));
  max-height: min(46vh, 460px);
  padding: 10px 12px;
  background: color-mix(in srgb, var(--elev) 97%, transparent);
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, .45);
  backdrop-filter: blur(10px);
}
.podwave-root .live-caption-head { display: flex; align-items: center; gap: 8px; cursor: grab; user-select: none; }
.podwave-root .live-caption-head:active { cursor: grabbing; }
.podwave-root .live-caption-dot { flex: 0 0 auto; width: 7px; height: 7px; border-radius: 50%; background: var(--dim); }
/* \u300C\u6B63\u5728\u542C\u300D\u65F6\u7ED9\u4E00\u70B9\u547C\u5438\u611F\uFF1A\u8FD9\u662F\u552F\u4E00\u80FD\u8BF4\u660E\u5B83\u8FD8\u5728\u5DE5\u4F5C\u7684\u4FE1\u53F7\u3002 */
.podwave-root .live-caption-dot[data-live="on"] { background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); animation: pw-live-pulse 1.9s ease-in-out infinite; }
@keyframes pw-live-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
.podwave-root .live-caption-title { font-size: 12.5px; font-weight: 600; letter-spacing: .02em; }
.podwave-root .live-caption-meta { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--muted); font-size: 12px; font-variant-numeric: tabular-nums; }
.podwave-root .live-caption-close { flex: 0 0 auto; margin-left: auto; }
.podwave-root .live-caption-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 2px 2px 4px; }
.podwave-root .live-line { display: flex; flex-direction: column; gap: 2px; }
.podwave-root .live-line-text { margin: 0; color: var(--text); line-height: 1.45; }
.podwave-root .live-line-tr { margin: 0; color: var(--muted); line-height: 1.4; }
.podwave-root .live-caption-empty { margin: 0; padding: 10px 2px; color: var(--dim); font-size: 13px; }
.podwave-root .live-caption-error { margin: 0; color: var(--danger); font-size: 12.5px; }
.podwave-root .live-caption-foot { display: flex; align-items: center; gap: 8px; padding-top: 7px; border-top: 1px solid var(--line-soft); }
.podwave-root .live-caption-tip { flex: 1 1 auto; min-width: 0; color: var(--dim); font-size: 12px; }
.podwave-root .live-caption-ask { flex: 1 1 auto; min-width: 0; color: var(--text); font-size: 12.5px; }

/* \u5B9E\u65F6\u5B57\u5E55\u7684\u7535\u5E73\u6761\uFF1A\u6709\u6CA1\u6709\u58F0\u97F3\u8FDB\u6765\uFF0C\u4E00\u773C\u80FD\u770B\u51FA\u6765 */
.podwave-root .live-meter {
  height: 3px;
  border-radius: 999px;
  background: var(--line-soft);
  overflow: hidden;
}
.podwave-root .live-meter span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--dim);
  transition: width .18s linear;
}
.podwave-root .live-meter.is-live span { background: var(--accent); }
.podwave-root .live-caption-note { margin: 0; font-size: 12.5px; line-height: 1.55; color: var(--muted); }

/* \u72EC\u7ACB\u5B57\u5E55\u7A97\u7684\u5916\u89C2\uFF1A\u4E09\u884C\u7D27\u51D1\u6ED1\u5757\uFF08\u4E0D\u900F\u660E\u5EA6 / \u5B57\u53F7 / \u5BBD\u5EA6\uFF09 */
.podwave-root .live-style { display: flex; flex-direction: column; gap: 6px; padding-top: 6px; border-top: 1px solid var(--line-soft); }
.podwave-root .live-style label { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted); }
.podwave-root .live-style label > span:first-child { flex: 0 0 62px; }
.podwave-root .live-style input[type="range"] { flex: 1 1 auto; min-width: 0; accent-color: var(--accent); height: 16px; }
.podwave-root .live-style-value { flex: 0 0 44px; text-align: right; color: var(--dim); font-variant-numeric: tabular-nums; }
`;var t=ot(require("react"),1);var F=ot(require("react"),1);function se({name:a,size:s=18}){let i={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(a){case"play":return F.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},F.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return F.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},F.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),F.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return F.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},F.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),F.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return F.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},F.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),F.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return F.default.createElement("svg",{...i},F.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),F.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),F.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),F.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return F.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},F.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),F.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),F.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),F.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),F.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));case"close":return F.default.createElement("svg",{...i},F.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));default:return null}}var Pn=ot(require("react"),1);function Le(a){if(!Number.isFinite(a)||a<0)return"0:00";let s=Math.floor(a),i=Math.floor(s/3600),p=Math.floor(s%3600/60),u=s%60;return i>0?`${i}:${String(p).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${p}:${String(u).padStart(2,"0")}`}function Sn(a){if(!a)return"\u2014";let s=Math.floor(a/3600),i=Math.round(a%3600/60);return s>0?`${s} \u5C0F\u65F6 ${i} \u5206`:`${Math.max(1,i)} \u5206\u949F`}function Mn(a){if(!a)return"";let s=new Date(a),i=Date.now()-a;return i<60*1e3?"\u521A\u521A":i<3600*1e3?`${Math.floor(i/6e4)} \u5206\u949F\u524D`:i<1440*60*1e3?`${Math.floor(i/36e5)} \u5C0F\u65F6\u524D`:i<10080*60*1e3?`${Math.floor(i/864e5)} \u5929\u524D`:`${s.getMonth()+1} \u6708 ${s.getDate()} \u65E5`}function vr(a){let i=String(a||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return i?i[0].toUpperCase():"\u266B"}function tn(a){let s=String(a).split("/").filter(Boolean);return s.length<=2?`/${s.join("/")}`:`${s.slice(-2).join("/")}`}var ya="/podwave/api";function po({item:a,size:s=44,className:i=""}){let p={width:s,height:s};if(a&&a.hasCover){let u=a.coverAt?`?v=${a.coverAt}`:"";return Pn.default.createElement("img",{className:`cover ${i}`,style:p,src:`${ya}/episodes/${a.id}/cover${u}`,alt:"",loading:"lazy",draggable:!1})}return Pn.default.createElement("div",{className:`cover cover-fallback ${i}`,style:p,"aria-hidden":!0},vr(a&&a.title))}var g=ot(require("react"),1);var $e=ot(require("react"),1);function ht({trigger:a,title:s,align:i="end",placement:p="down",className:u="",buttonClassName:v="",disabled:N=!1,children:$}){let[f,w]=(0,$e.useState)(!1),W=(0,$e.useRef)(null);(0,$e.useEffect)(()=>{if(!f)return;let A=b=>{W.current?.contains(b.target)||w(!1)},P=b=>{b.key==="Escape"&&w(!1)};return document.addEventListener("pointerdown",A),document.addEventListener("keydown",P),()=>{document.removeEventListener("pointerdown",A),document.removeEventListener("keydown",P)}},[f]),(0,$e.useEffect)(()=>{N&&f&&w(!1)},[N,f]);let V=["pop-panel",i==="start"?"is-start":"",p==="up"?"is-up":""].filter(Boolean).join(" ");return $e.default.createElement("span",{className:`pop-wrap ${u}`,ref:W},$e.default.createElement("button",{type:"button",className:v||"pop-btn",onClick:()=>w(A=>!A),title:s,disabled:N,"aria-haspopup":"menu","aria-expanded":f},a),f?$e.default.createElement("span",{className:V,role:"menu"},$({close:()=>w(!1)})):null)}function Fe({children:a,hint:s,checked:i=!1,danger:p=!1,disabled:u=!1,onSelect:v}){let N=["pop-item",i?"is-on":"",p?"is-danger":""].filter(Boolean).join(" ");return $e.default.createElement("button",{type:"button",className:N,role:i?"menuitemcheckbox":"menuitem","aria-checked":i||void 0,disabled:u,onClick:v},$e.default.createElement("span",null,a),s?$e.default.createElement("span",{className:"pop-hint"},s):null)}function Tn({children:a,hint:s,href:i,onSelect:p}){return $e.default.createElement("a",{className:"pop-item",role:"menuitem",href:i,download:!0,onClick:p},$e.default.createElement("span",null,a),s?$e.default.createElement("span",{className:"pop-hint"},s):null)}var So=ot(require("react"),1);function Mo({value:a,onChange:s,compact:i=!1}){let p=Number.isFinite(Number(a))?Number(a):15;return So.default.createElement("label",{className:`sub-size ${i?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},So.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),So.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:p,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:u=>s(Number(u.target.value))}),So.default.createElement("span",{className:"sub-size-value"},p))}var gr="/podwave/api";function on({transcript:a,status:s,progress:i,stage:p,chunks:u,queued:v,elapsed:N,error:$,position:f,onSeek:w,onClose:W,onStart:V,onCancel:A,target:P,job:b,onChangeTarget:_,onTranslate:Q,onRetranslate:oe=null,onRetranslateLine:ye=null,onOpenSettings:pe,inline:R=!1,editingId:ke=null,draft:Y="",onDraftChange:ne,onEditLine:ve,onSaveLine:re,onCancelEdit:ge,onSplitLine:C,onMergeLine:h,onValidate:I,onResegment:E,issues:M=[],fontSize:be=15,onFontSize:Ee=null,width:Pe=null,height:Oe=null,onResize:de=null}){let Ne=(0,g.useRef)(null),H=(0,g.useRef)(null),Te=(0,g.useRef)(null),Se=(0,g.useRef)(null),[Ae,Z]=(0,g.useState)(!1),j=a?.lines?.findIndex(y=>f>=y.start&&f<y.end)??-1;(0,g.useEffect)(()=>{if(j<0||!Ne.current)return;Ne.current.querySelector(`[data-seg="${j}"]`)?.scrollIntoView({block:"nearest"})},[j]);let ze=y=>{let z=Se.current;if(!z)return null;let L=y.clientX-z.startX,G=y.clientY-z.startY,c=Math.max(320,window.innerWidth-60),B=Math.max(220,window.innerHeight-(R?160:140));return R?{width:null,height:Math.round(Math.min(B,Math.max(240,z.height+G)))}:{width:Math.round(Math.min(c,Math.max(320,z.width-L))),height:Math.round(Math.min(B,Math.max(200,z.height-G)))}},We=y=>{if(y.button!==void 0&&y.button!==0)return;let z=Te.current;if(!z||!de)return;y.preventDefault();let L=z.getBoundingClientRect();Se.current={startX:y.clientX,startY:y.clientY,width:L.width,height:L.height},y.currentTarget.setPointerCapture?.(y.pointerId)},_e=y=>{if(!Se.current)return;let z=ze(y);z&&de(z.width,z.height,!1)},je=y=>{if(!Se.current)return;let z=ze(y);Se.current=null,y.currentTarget.releasePointerCapture?.(y.pointerId),z&&de(z.width,z.height,!0)},at=s==="queued"||s==="running",Ge=b?.status==="running"||b?.status==="queued",Qe=b?.missing??0,Ve=Ge?`\u7FFB\u8BD1\u4E2D${b?.progress?.total?` ${b.progress.done||0}/${b.progress.total}`:""}`:b?.status==="partial"?"\u7EED\u7FFB":b?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",st=async()=>{let z=(a?.lines||[]).map(L=>{let G=Le(L.start),c=P?L.translations?.[P]:"";return c?`${G} ${L.text}
${" ".repeat(G.length+1)}${c}`:`${G} ${L.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(z);else{let L=document.createElement("textarea");L.value=z,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L)}Z(!0),setTimeout(()=>Z(!1),1600)}catch{Z(!1)}};return g.default.createElement("section",{ref:Te,className:`transcript-panel ${R?"inline":""} ${Oe?"is-sized":""}`,style:{"--sub-size":`${be}px`,width:!R&&Pe?`${Pe}px`:void 0,height:Oe?`${Oe}px`:void 0,maxHeight:Oe?"none":void 0}},g.default.createElement("header",{className:"transcript-head"},g.default.createElement("h3",null,"\u5B57\u5E55"),a?g.default.createElement("span",{className:"transcript-meta"},a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines.length," \u884C",a.speakers?.length?` \xB7 ${a.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,g.default.createElement("div",{className:"transcript-actions"},g.default.createElement("select",{className:"tr-select",value:P,onChange:y=>_(y.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},g.default.createElement("option",{value:""},"\u5BF9\u7167"),g.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),g.default.createElement("option",{value:"en"},"English")),Ee?g.default.createElement(ht,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${be}px`,align:"end"},()=>g.default.createElement("span",{className:"pop-fs"},g.default.createElement(Mo,{value:be,onChange:Ee}))):null,a&&P&&Q?Ge?g.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},Ve):Qe>0?g.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Q,title:`\u8FD8\u6709 ${Qe} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},Ve):null:null,g.default.createElement(ht,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:y})=>g.default.createElement(g.default.Fragment,null,a?g.default.createElement(Fe,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{y(),I()}},"\u6821\u9A8C\u5B57\u5E55"):null,a&&E?g.default.createElement(Fe,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{y(),E()}},"\u6574\u7406\u65AD\u53E5"):null,a&&P&&oe?g.default.createElement(Fe,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{y(),oe()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,g.default.createElement(Fe,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{y(),pe()}},"\u8BBE\u7F6E"))),a?g.default.createElement(ht,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:y})=>g.default.createElement(g.default.Fragment,null,g.default.createElement(Tn,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${gr}/episodes/${a.id}/transcript/export?format=srt`,onSelect:y},"\u5B57\u5E55\u6587\u4EF6 .srt"),g.default.createElement(Tn,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${gr}/episodes/${a.id}/transcript/export?format=md`,onSelect:y},"\u6587\u7A3F .md"),g.default.createElement(Fe,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:st},Ae?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,R?null:g.default.createElement("button",{className:"transcript-close",onClick:W,title:"\u6536\u8D77"},"\xD7"))),g.default.createElement("div",{className:"transcript-body",ref:Ne},a&&at?g.default.createElement("div",{className:"tr-strip"},g.default.createElement("span",null,s==="queued"?"\u6392\u961F\u4E2D\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":p==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min((u.done||0)+1,u.total)}/${u.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${a.lines.length} \u884C`),A?g.default.createElement("button",{className:"seg-tool",onClick:A},"\u53D6\u6D88"):null):null,a&&M?.length?g.default.createElement("div",{className:"tr-issues"},M.slice(0,5).map(y=>g.default.createElement("div",{key:y},"\xB7 ",y)),M.length>5?g.default.createElement("div",null,"\u2026\u5171 ",M.length," \u6761"):null):null,b?.status==="running"||b?.status==="queued"?g.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",b.progress?.total?` ${b.progress.done||0}/${b.progress.total}`:""):null,b?.status==="error"?g.default.createElement("div",{className:"tr-running err"},b.error,"\u5F85\u7FFB ",b.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,b?.status==="partial"?g.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",b.translated??0,"/",b.total??0," \u884C\uFF0C\u8FD8\u7F3A ",b.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,b?.status==="none"&&P&&a&&(b.missing??0)>0?g.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",b.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,a?a.lines.map((y,z)=>g.default.createElement("div",{key:y.id,"data-seg":z,className:`seg-row ${z===j?"active":""} ${ke===y.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Le(y.start)}`,onClick:()=>w(y.start),onKeyDown:L=>{(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),w(y.start))}},g.default.createElement("span",{className:"seg-time"},Le(y.start)),ke===y.id?g.default.createElement("span",{className:"seg-edit",onClick:L=>L.stopPropagation()},g.default.createElement("textarea",{ref:H,value:Y,rows:Math.min(4,Math.max(2,Math.ceil((Y.length||1)/40))),onChange:L=>ne(L.target.value),onKeyDown:L=>{L.key==="Enter"&&(L.metaKey||L.ctrlKey)&&re(y.id),L.key==="Escape"&&ge()}}),g.default.createElement("span",{className:"seg-edit-actions"},g.default.createElement("button",{className:"seg-tool",onClick:()=>re(y.id)},"\u4FDD\u5B58"),g.default.createElement("button",{className:"seg-tool",onClick:()=>C(y.id,H.current?.selectionStart??Math.floor(Y.length/2))},"\u62C6\u5206"),P&&ye?g.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>ye(y)},"\u91CD\u7FFB"):null,g.default.createElement("button",{className:"seg-tool",onClick:ge},"\u53D6\u6D88"))):g.default.createElement(g.default.Fragment,null,y.speaker!=null?g.default.createElement("span",{className:`seg-speaker spk-${y.speaker%5}`},a.speakers?.[y.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${y.speaker+1}`):null,g.default.createElement("span",{className:"seg-text"},y.text,y.translations?.[P]?g.default.createElement("span",{className:"seg-trans"},y.translations[P]):null),g.default.createElement("span",{className:"seg-tools"},g.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:L=>{L.stopPropagation(),ve(y)}},"\u270E"),z<a.lines.length-1?g.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:L=>{L.stopPropagation(),h(y.id)}},"\u21E3"):null)))):at?g.default.createElement("div",{className:"transcript-status"},s==="queued"?"\u6392\u961F\u4E2D\u2026":p==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((N||0)/1e3)+" \u79D2",i?.percent!=null?g.default.createElement("span",{className:"tx-progress"},g.default.createElement("span",{style:{width:`${i.percent}%`}})):null,g.default.createElement("br",null),g.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),g.default.createElement("br",null),A?g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:A},"\u53D6\u6D88\u8F6C\u5199"):null):$?g.default.createElement("div",{className:"transcript-status"},g.default.createElement("span",{className:"err"},$),g.default.createElement("br",null),g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:V},"\u91CD\u8BD5")):g.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",g.default.createElement("br",null),g.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:V},"\u5F00\u59CB\u8F6C\u5199"))),de?g.default.createElement(g.default.Fragment,null,R?null:g.default.createElement(g.default.Fragment,null,g.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:We,onPointerMove:_e,onPointerUp:je,onPointerCancel:je,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),g.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:We,onPointerMove:_e,onPointerUp:je,onPointerCancel:je,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),g.default.createElement("span",{className:`transcript-resize ${R?"is-inline":""}`,onPointerDown:We,onPointerMove:_e,onPointerUp:je,onPointerCancel:je,onDoubleClick:()=>de(null,null,!0),title:R?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var J=ot(require("react"),1);function Dn({line:a,target:s,fontSize:i,onFontSize:p,x:u,y:v,width:N,height:$,onMove:f,onResize:w,onClose:W,onSeek:V,speakerLabel:A,status:P}){let b=(0,J.useRef)(null),_=(0,J.useRef)(null),Q=(0,J.useRef)(null),oe=(0,J.useCallback)((C,h)=>{let I=b.current,E=I?.offsetWidth||420,M=I?.offsetHeight||120,be=Math.max(8,window.innerWidth-E-8),Ee=Math.max(8,window.innerHeight-M-8);return{x:Math.min(be,Math.max(8,C)),y:Math.min(Ee,Math.max(8,h))}},[]),ye=(0,J.useCallback)(C=>{if(C.button!==void 0&&C.button!==0)return;let h=b.current;if(!h)return;let I=h.getBoundingClientRect();_.current={dx:C.clientX-I.left,dy:C.clientY-I.top},C.currentTarget.setPointerCapture?.(C.pointerId)},[]),pe=(0,J.useCallback)(C=>{let h=_.current;if(!h)return;let I=oe(C.clientX-h.dx,C.clientY-h.dy);f(I.x,I.y,!1)},[oe,f]),R=(0,J.useCallback)(C=>{let h=_.current;if(!h)return;_.current=null,C.currentTarget.releasePointerCapture?.(C.pointerId);let I=oe(C.clientX-h.dx,C.clientY-h.dy);f(I.x,I.y,!0)},[oe,f]),ke=(0,J.useCallback)(C=>{if(C.button!==void 0&&C.button!==0)return;C.stopPropagation();let h=b.current;if(!h)return;let I=h.getBoundingClientRect();Q.current={startX:C.clientX,startY:C.clientY,width:I.width,height:I.height},C.currentTarget.setPointerCapture?.(C.pointerId)},[]),Y=(0,J.useCallback)(C=>{let h=Q.current;if(!h)return null;let I=Math.max(240,window.innerWidth-(u==null?16:u+8)),E=Math.max(92,window.innerHeight-(v==null?16:v+8));return{width:Math.round(Math.min(I,Math.max(240,h.width+(C.clientX-h.startX)))),height:Math.round(Math.min(E,Math.max(92,h.height+(C.clientY-h.startY))))}},[u,v]),ne=(0,J.useCallback)(C=>{if(!Q.current)return;C.stopPropagation();let h=Y(C);h&&w(h.width,h.height,!1)},[w,Y]),ve=(0,J.useCallback)(C=>{if(!Q.current)return;C.stopPropagation();let h=Y(C);Q.current=null,C.currentTarget.releasePointerCapture?.(C.pointerId),h&&w(h.width,h.height,!0)},[w,Y]);(0,J.useEffect)(()=>{let C=h=>{h.key==="Escape"&&W()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[W]);let re=a&&s?a.translations?.[s]:"",ge=P==="queued"||P==="running";return J.default.createElement("div",{ref:b,className:`caption-overlay ${$?"is-sized":""}`,style:{left:u??void 0,top:v??void 0,right:u==null?void 0:"auto",bottom:v==null?void 0:"auto",width:N?`${N}px`:void 0,height:$?`${$}px`:void 0,"--sub-size":`${i||15}px`}},J.default.createElement("div",{className:"caption-head",onPointerDown:ye,onPointerMove:pe,onPointerUp:R,onPointerCancel:R,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},J.default.createElement(se,{name:"wave",size:13}),J.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),J.default.createElement(Mo,{value:i,onChange:p,compact:!0}),J.default.createElement("button",{className:"caption-close",onClick:W,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),J.default.createElement("div",{className:`caption-body ${a?"":"empty"}`,onClick:()=>a?V(a.start):null,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:C=>{a&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),V(a.start))},title:a?`\u8DF3\u5230 ${Le(a.start)}`:void 0},a?J.default.createElement(J.default.Fragment,null,A?J.default.createElement("span",{className:"caption-speaker"},A):null,J.default.createElement("div",{className:"caption-text"},a.text),re?J.default.createElement("div",{className:"caption-trans"},re):null):J.default.createElement("div",{className:"caption-hint"},ge?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),J.default.createElement("span",{className:"caption-resize",onPointerDown:ke,onPointerMove:ne,onPointerUp:ve,onPointerCancel:ve,onDoubleClick:()=>w(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var T=ot(require("react"),1);function In({lines:a=[],status:s="listening",error:i="",device:p="",count:u=0,elapsed:v=0,fontSize:N=15,native:$=!1,level:f=0,hint:w="",opacity:W=.78,styleSize:V=18,width:A=780,onStyle:P,onStop:b,onSave:_,onClose:Q}){let oe=(0,T.useRef)(null),ye=(0,T.useRef)(null),pe=(0,T.useRef)(null),[R,ke]=(0,T.useState)(null),Y=a.slice(-6);(0,T.useEffect)(()=>{let h=oe.current;h&&(h.scrollTop=h.scrollHeight)},[a.length]);let ne=(h,I)=>{let E=ye.current,M=E?.offsetWidth||520,be=E?.offsetHeight||160;return{x:Math.min(Math.max(8,h),Math.max(8,window.innerWidth-M-8)),y:Math.min(Math.max(8,I),Math.max(8,window.innerHeight-be-8))}},ve=h=>{if(h.button!==void 0&&h.button!==0)return;let I=ye.current;if(!I)return;let E=I.getBoundingClientRect();pe.current={dx:h.clientX-E.left,dy:h.clientY-E.top},h.currentTarget.setPointerCapture?.(h.pointerId)},re=h=>{let I=pe.current;I&&ke(ne(h.clientX-I.dx,h.clientY-I.dy))},ge=h=>{pe.current&&(pe.current=null,h.currentTarget.releasePointerCapture?.(h.pointerId))},C=s==="asking";return T.default.createElement("div",{ref:ye,className:"live-caption",style:R?{left:R.x,top:R.y,bottom:"auto",transform:"none"}:void 0},T.default.createElement("div",{className:"live-caption-head",onPointerDown:ve,onPointerMove:re,onPointerUp:ge,title:"\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u4F4D\u7F6E"},T.default.createElement("span",{className:"live-caption-dot","data-live":s==="listening"?"on":"off","aria-hidden":"true"}),T.default.createElement("span",{className:"live-caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),T.default.createElement("span",{className:"live-caption-meta"},s==="starting"?"\u6B63\u5728\u6253\u5F00\u8BBE\u5907\u2026":null,s==="listening"?`${p||"\u7CFB\u7EDF\u58F0\u97F3"} \xB7 ${u} \u53E5 \xB7 ${Le(v)}`:null,s==="saving"?"\u6B63\u5728\u4FDD\u5B58\u2026":null,C?`\u5DF2\u505C\u6B62 \xB7 \u5171 ${u} \u53E5`:null),T.default.createElement("button",{className:"icon-btn live-caption-close",title:C?"\u5173\u6389":"\u505C\u6B62\u5E76\u5173\u95ED",onClick:C?Q:b},T.default.createElement(se,{name:"close",size:14}))),T.default.createElement("div",{className:`live-meter ${f>.004?"is-live":""}`,title:"\u8F93\u5165\u7535\u5E73\uFF08\u8BF4\u8BDD\u65F6\u4F1A\u8DF3\uFF09"},T.default.createElement("span",{style:{width:`${Math.min(100,Math.max(2,f*400))}%`}})),T.default.createElement("div",{className:"live-caption-body",ref:oe},$?T.default.createElement("p",{className:"live-caption-note"},"\u5B57\u5E55\u753B\u5728\u5C4F\u5E55\u4E0A\u7684\u72EC\u7ACB\u5C0F\u7A97\u91CC\uFF08\u7F6E\u9876\uFF0C\u4E0D\u4F1A\u88AB\u522B\u7684\u5E94\u7528\u6321\u4F4F\uFF09\u3002\u8FD9\u91CC\u7559\u7740\u63A7\u5236\uFF1A\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u8FD9\u4E2A\u9762\u677F\uFF0C\u70B9\u300C\u505C\u6B62\u300D\u7ED3\u675F\u3002"):Y.length?Y.map(h=>{let I=h.translations?.zh||h.translations?.en||"";return T.default.createElement("div",{key:h.id,className:"live-line"},T.default.createElement("p",{className:"live-line-text",style:{fontSize:N}},h.text),I?T.default.createElement("p",{className:"live-line-tr",style:{fontSize:Math.round(N*.84)}},I):null)}):T.default.createElement("p",{className:"live-caption-empty"},s==="starting"?"\u6B63\u5728\u6253\u5F00\u97F3\u9891\u8BBE\u5907\u2026":"\u7B49\u7740\u542C\u2026",s==="listening"?" \u64AD\u653E\u4EFB\u4F55\u58F0\u97F3\uFF0C\u5B57\u5E55\u4F1A\u4E00\u53E5\u4E00\u53E5\u51FA\u73B0\u3002":"")),$?T.default.createElement("div",{className:"live-style"},T.default.createElement("label",{title:"\u53EA\u6539\u5E95\u677F\u900F\u660E\u5EA6\uFF0C\u6587\u5B57\u59CB\u7EC8\u6E05\u6670"},T.default.createElement("span",null,"\u4E0D\u900F\u660E\u5EA6"),T.default.createElement("input",{type:"range",min:"15",max:"100",step:"1",value:Math.round(W*100),onChange:h=>P?.({opacity:Number(h.target.value)/100})}),T.default.createElement("span",{className:"live-style-value"},Math.round(W*100),"%")),T.default.createElement("label",null,T.default.createElement("span",null,"\u5B57\u53F7"),T.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:V,onChange:h=>P?.({fontSize:Number(h.target.value)})}),T.default.createElement("span",{className:"live-style-value"},V)),T.default.createElement("label",null,T.default.createElement("span",null,"\u5BBD\u5EA6"),T.default.createElement("input",{type:"range",min:"380",max:"1200",step:"10",value:A,onChange:h=>P?.({width:Number(h.target.value)})}),T.default.createElement("span",{className:"live-style-value"},A))):null,w&&!i?T.default.createElement("p",{className:"live-caption-note"},w):null,i?T.default.createElement("p",{className:"live-caption-error"},i):null,T.default.createElement("div",{className:"live-caption-foot"},C?T.default.createElement(T.default.Fragment,null,T.default.createElement("span",{className:"live-caption-ask"},"\u4FDD\u5B58\u8FD9\u6B21\u5B57\u5E55\uFF1F"),T.default.createElement("button",{className:"btn ghost",onClick:()=>_(!1)},"\u4E0D\u7528"),T.default.createElement("button",{className:"btn primary",onClick:()=>_(!0)},"\u4FDD\u5B58")):T.default.createElement(T.default.Fragment,null,T.default.createElement("span",{className:"live-caption-tip"},"\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6"),T.default.createElement("button",{className:"btn ghost",onClick:b,disabled:s==="saving"},"\u505C\u6B62"))))}function En(a){if(!a||!a.length)return 0;let s=0;for(let i=0;i<a.length;i+=1)s+=a[i]*a[i];return Math.sqrt(s/a.length)}function Ln(a){return Math.round((Number(a)||0)*1e3)/1e3}var ka=/blackhole|loopback|vb-?audio|vb-?cable|stereo ?mix|立体声混音|soundflower|virtual|existential|parrot|oray/i,Na=/microphone|麦克风|mic\b/i;function fr(a){let s=String(a?.label||""),i=String(a?.deviceId||""),p=0;return ka.test(s)&&(p+=100),Na.test(s)&&(p-=10),s||(p-=5),(i==="default"||i==="communications")&&(p-=30),p}function On(a){let s=(a||[]).filter(i=>i&&i.kind==="audioinput"&&i.deviceId);return s.length?[...s].sort((i,p)=>fr(p)-fr(i))[0]:null}var nn=class{constructor({sampleRate:s=16e3,silenceMs:i=600,maxMs:p=12e3,minMs:u=400,prerollMs:v=300}={}){this.sampleRate=s,this.silenceMs=i,this.maxMs=p,this.minMs=u,this.prerollMs=v,this.total=0,this.noise=null,this.inSpeech=!1,this.preroll=[],this.segment=[],this.segmentStart=0,this.silence=0,this.lastVoiced=0,this.firstVoiced=0}get threshold(){let s=this.noise===null?.005:this.noise;return Math.max(.005,Math.min(.05,s*2.5))}get seconds(){return this.total/this.sampleRate}push(s){let i=[];if(!s||!s.length)return i;let p=this.total;this.total+=s.length;let u=En(s);this.noise===null&&(this.noise=u);let v=u>=this.threshold;if(!this.inSpeech)return v?(this.segment=this.preroll.slice(),this.segmentStart=this.segment.length?this.segment[0].at:p,this.preroll=[],this.segment.push({at:p,data:s}),this.inSpeech=!0,this.silence=0,this.firstVoiced=p,this.lastVoiced=this.total,i):(this.noise=this.noise*.9+u*.1,this.preroll.push({at:p,data:s}),this.trimPreroll(),i);this.segment.push({at:p,data:s}),v?(this.silence=0,this.lastVoiced=this.total):this.silence+=s.length;let N=(this.total-this.segmentStart)/this.sampleRate*1e3;if(this.silence/this.sampleRate*1e3>=this.silenceMs){let f=this.cut("silence");return f&&i.push(f),i}if(N>=this.maxMs){let f=this.cut("max");f&&i.push(f)}return i}flush(){if(!this.inSpeech)return[];let s=this.cut("flush");return s?[s]:[]}cut(s){let i=this.segmentStart/this.sampleRate,p=(this.lastVoiced-this.segmentStart)/this.sampleRate,u=this.segment.reduce((w,W)=>w+W.data.length,0),v=new Float32Array(u),N=0;for(let w of this.segment)v.set(w.data,N),N+=w.data.length;let $=Math.max(i+.2,i+Math.min(p+.12,u/this.sampleRate)),f=(this.lastVoiced-this.firstVoiced)/this.sampleRate*1e3;return this.inSpeech=!1,this.segment=[],this.silence=0,s==="silence"&&f<this.minMs?null:{samples:v,start:Ln(i),end:Ln($),seconds:Ln($-i),reason:s}}trimPreroll(){let s=Math.round(this.prerollMs/1e3*this.sampleRate),i=0;for(let p=this.preroll.length-1;p>=0;p-=1)if(i+=this.preroll[p].data.length,i>s){this.preroll=this.preroll.slice(p);return}}};function hr(a,s=16e3){let i=a instanceof Float32Array?a:Float32Array.from(a||[]),p=new ArrayBuffer(44+i.length*2),u=new DataView(p),v=($,f)=>{for(let w=0;w<f.length;w+=1)u.setUint8($+w,f.charCodeAt(w))};v(0,"RIFF"),u.setUint32(4,36+i.length*2,!0),v(8,"WAVE"),v(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,1,!0),u.setUint32(24,s,!0),u.setUint32(28,s*2,!0),u.setUint16(32,2,!0),u.setUint16(34,16,!0),v(36,"data"),u.setUint32(40,i.length*2,!0);let N=44;for(let $=0;$<i.length;$+=1){let f=Math.max(-1,Math.min(1,i[$]));u.setInt16(N,f<0?f*32768:f*32767,!0),N+=2}return new Uint8Array(p)}var za=`
class PodwaveTap extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]
    const channel = input && input[0]
    if (channel && channel.length) this.port.postMessage(channel.slice(0))
    return true
  }
}
registerProcessor('podwave-tap', PodwaveTap)
`;async function br(){if(!navigator.mediaDevices?.enumerateDevices)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\u5217\u8868\uFF08\u9700\u8981\u5B89\u5168\u4E0A\u4E0B\u6587\uFF09");return(await navigator.mediaDevices.enumerateDevices()).filter(s=>s.kind==="audioinput")}async function wr({deviceId:a="",onSegment:s,onLevel:i,segmenterOptions:p={}}={}){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u62FF\u4E0D\u5230\u97F3\u9891\u8F93\u5165\u63A5\u53E3");let u;try{u=await navigator.mediaDevices.getUserMedia({audio:{...a?{deviceId:{exact:a}}:{},channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch(P){if(P?.name==="OverconstrainedError"&&a)u=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});else throw new Error($a(P))}let v;try{v=new AudioContext({sampleRate:16e3})}catch{v=new AudioContext}let N=v.sampleRate||16e3,$=new nn({...p,sampleRate:N}),f=P=>{s?.({wav:hr(P.samples,N),start:P.start,end:P.end,seconds:P.seconds,reason:P.reason})},w=P=>{if(P){i?.(En(P));for(let b of $.push(P))f(b)}},W=v.createMediaStreamSource(u),V;try{let P=URL.createObjectURL(new Blob([za],{type:"application/javascript"}));await v.audioWorklet.addModule(P),URL.revokeObjectURL(P),V=new AudioWorkletNode(v,"podwave-tap",{numberOfInputs:1,numberOfOutputs:1,channelCount:1,channelCountMode:"explicit"}),V.port.onmessage=b=>w(b.data)}catch{V=v.createScriptProcessor(2048,1,1),V.onaudioprocess=P=>w(new Float32Array(P.inputBuffer.getChannelData(0)))}let A=v.createGain();return A.gain.value=0,W.connect(V),V.connect(A),A.connect(v.destination),await v.resume().catch(()=>{}),{label:u.getAudioTracks()[0]?.label||"",sampleRate:N,async stop(){try{for(let P of $.flush())f(P)}catch{}try{V.port&&(V.port.onmessage=null),V.onaudioprocess=null}catch{}for(let P of[W,V,A])try{P.disconnect()}catch{}for(let P of u.getTracks())P.stop();await v.close().catch(()=>{})}}}function $a(a){let s=String(a?.name||"");return s==="NotAllowedError"||s==="SecurityError"?"\u6CA1\u6709\u97F3\u9891\u6743\u9650\u3002\u5728\u7CFB\u7EDF\u91CC\u5141\u8BB8 DSH \u4F7F\u7528\u9EA6\u514B\u98CE/\u97F3\u9891\u8F93\u5165\u4E4B\u540E\u518D\u8BD5":s==="NotFoundError"||s==="DevicesNotFoundError"?"\u627E\u4E0D\u5230\u8FD9\u4E2A\u97F3\u9891\u8BBE\u5907\u3002\u5148\u88C5\u865A\u62DF\u58F0\u5361\uFF08macOS \u7528 BlackHole\uFF09\uFF0C\u518D\u56DE\u6765\u9009\u5B83":s==="NotReadableError"?"\u8FD9\u4E2A\u8BBE\u5907\u88AB\u522B\u7684\u7A0B\u5E8F\u5360\u7528\u4E86\uFF0C\u6362\u4E00\u4E2A\u8F93\u5165\u8BBE\u5907\u8BD5\u8BD5":a?.message||"\u6253\u4E0D\u5F00\u97F3\u9891\u8BBE\u5907"}var d=ot(require("react"),1),Ce="/podwave/api";async function nt(a){let s=await fetch(a),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return i}async function co(a,s){let i=await fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(s||{})}),p=await i.json().catch(()=>({}));if(!i.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return p}function yr(a){let s=Math.max(0,Math.round(Number(a)||0)),i=Math.floor(s/3600),p=Math.floor(s%3600/60);return i?`${i} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function kr(a){if(!a)return"";let s=new Date(a);return Number.isNaN(s.getTime())?"":`${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()}`}function An({onPlay:a,currentId:s}){let[i,p]=(0,d.useState)(null),[u,v]=(0,d.useState)(""),[N,$]=(0,d.useState)(""),[f,w]=(0,d.useState)(""),[W,V]=(0,d.useState)(""),[A,P]=(0,d.useState)(0),[b,_]=(0,d.useState)(!1),[Q,oe]=(0,d.useState)(""),[ye,pe]=(0,d.useState)(""),[R,ke]=(0,d.useState)([]),[Y,ne]=(0,d.useState)(!1),[ve,re]=(0,d.useState)(null),[ge,C]=(0,d.useState)([]),[h,I]=(0,d.useState)(null),[E,M]=(0,d.useState)(!1),[be,Ee]=(0,d.useState)(""),[Pe,Oe]=(0,d.useState)(null),[de,Ne]=(0,d.useState)(!1),[H,Te]=(0,d.useState)(null),[Se,Ae]=(0,d.useState)(!1),Z=(0,d.useCallback)(async(c=!1)=>{ne(!0);try{let B=await nt(`${Ce}/xyz/subscriptions${c?"?refresh=1":""}`);ke(B.items||[])}catch(B){j(B)}finally{ne(!1)}},[]);function j(c){let B=String(c?.message||"");if(B.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||B.includes("\u767B\u5F55\u5DF2\u5931\u6548")){p(it=>({...it||{},loggedIn:!1})),ke([]),re(null),C([]),oe(""),v("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}v(ze(B))}function ze(c){return c?c.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":c:"\u767B\u5F55\u5931\u8D25"}async function We(){try{await co(`${Ce}/xyz/open-web`,{})}catch(c){j(c)}}(0,d.useEffect)(()=>{nt(`${Ce}/xyz/status`).then(c=>{p(c),c.loggedIn&&Z()}).catch(c=>j(c)),nt(`${Ce}/xyz/local-app`).then(c=>Te(c)).catch(()=>Te({available:!1}))},[Z]),(0,d.useEffect)(()=>{if(!A)return;let c=setInterval(()=>P(B=>Math.max(0,B-1)),1e3);return()=>clearInterval(c)},[A]);async function _e(){if(v(""),!/^1\d{10}$/.test(f.trim())){v("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}$("send");try{let c=await co(`${Ce}/xyz/auth/send-code`,{phone:f.trim(),areaCode:"+86"});P(60),c.devCode&&v(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${c.devCode}`)}catch(c){j(c)}finally{$("")}}async function je(){if(v(""),!f.trim()||!W.trim()){v("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}$("login");try{await co(`${Ce}/xyz/auth/login`,{phone:f.trim(),code:W.trim(),areaCode:"+86"});let c=await nt(`${Ce}/xyz/status`);p(c),await Z()}catch(c){j(c)}finally{$("")}}async function at(){if(v(""),!Q.trim()){v("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}$("token");try{await co(`${Ce}/xyz/auth/token`,{refreshToken:Q.trim(),deviceId:ye.trim()});let c=await nt(`${Ce}/xyz/status`);p(c),oe(""),await Z()}catch(c){j(c)}finally{$("")}}async function Ge(){v("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let c=await navigator.clipboard.readText();if(!c.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");oe(c.trim())}catch(c){v(c?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function Qe(){v(""),$("app");try{await co(`${Ce}/xyz/auth/from-app`,{});let c=await nt(`${Ce}/xyz/status`);p(c),await Z(!0)}catch(c){j(c)}finally{nt(`${Ce}/xyz/local-app`).then(c=>Te(c)).catch(()=>{}),$("")}}async function Ve(){$("logout");try{await co(`${Ce}/xyz/auth/logout`,{}),p({loggedIn:!1}),ke([]),re(null),C([])}catch(c){j(c)}finally{$("")}}async function st(c){re(c),C([]),I(null),M(!0),v("");try{let B=await nt(`${Ce}/xyz/podcast/${encodeURIComponent(c.pid)}/episodes?limit=30`);C(B.items||[]),I(B.loadMoreKey||null)}catch(B){j(B)}finally{M(!1)}}async function y(){if(!(!ve||!h||E)){M(!0);try{let c=new URLSearchParams({limit:"30",loadMoreKey:h}),B=await nt(`${Ce}/xyz/podcast/${encodeURIComponent(ve.pid)}/episodes?${c}`);C(it=>[...it,...B.items||[]]),I(B.loadMoreKey||null)}catch(c){j(c)}finally{M(!1)}}}async function z(c){$(`play:${c.eid}`),v("");try{await a(c)}catch(B){j(B)}finally{$("")}}async function L(){if(v(""),!be.trim()){v("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}Ne(!0);try{let c=be.trim();if(/\/episode\//i.test(c)){let B=await nt(`${Ce}/xyz/public/episode?url=${encodeURIComponent(c)}`);Oe({pid:B.podcast.pid,title:B.podcast.title,author:B.podcast.author,episodes:[B.episode]})}else{let B=await nt(`${Ce}/xyz/public/podcast?url=${encodeURIComponent(c)}`);Oe(B.podcast)}}catch(c){j(c)}finally{Ne(!1)}}async function G(c){$(`pplay:${c.eid}`),v("");try{await a({...c,public:!0})}catch(B){j(B)}finally{$("")}}return i?i.loggedIn?ve?d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("button",{className:"btn ghost",onClick:()=>{re(null),C([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),d.default.createElement("div",{className:"xyz-podcast-title"},ve.title)),E&&ge.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,d.default.createElement("div",{className:"xyz-eps"},ge.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${s===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},kr(c.pubDate)," \xB7 ",yr(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:N===`play:${c.eid}`,onClick:()=>z(c)},N===`play:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!E&&ge.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,h?d.default.createElement("button",{className:"btn ghost xyz-more",disabled:E,onClick:y},E?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("div",null,d.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),d.default.createElement("div",{className:"xyz-hint"},i.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${i.profile.nickname}`:"\u5DF2\u767B\u5F55",(i.profile?.avatar,""))),d.default.createElement("div",{className:"xyz-head-actions"},d.default.createElement("button",{className:"btn ghost",disabled:Y,onClick:()=>Z(!0)},Y?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),d.default.createElement("button",{className:"btn ghost",disabled:N==="logout",onClick:Ve},"\u9000\u51FA\u767B\u5F55"))),Y?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,d.default.createElement("div",{className:"xyz-subs"},R.map(c=>d.default.createElement("button",{key:c.pid,className:"xyz-sub-card",onClick:()=>st(c)},c.cover?d.default.createElement("img",{className:"xyz-cover",src:c.cover,alt:"",loading:"lazy"}):d.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),d.default.createElement("div",{className:"xyz-sub-text"},d.default.createElement("div",{className:"xyz-sub-title"},c.title),d.default.createElement("div",{className:"xyz-sub-meta"},c.author||""))))),!Y&&R.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-login"},d.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),d.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn primary",disabled:N==="app",onClick:Qe},N==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),d.default.createElement("p",{className:"xyz-hint"},H===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":H.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${H.deviceId?`\uFF08\u8BBE\u5907 ${H.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${H.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),d.default.createElement("button",{className:"xyz-link",onClick:()=>Ae(c=>!c)},Se?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),Se?d.default.createElement(d.default.Fragment,null,d.default.createElement("ol",{className:"xyz-steps"},d.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),d.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),d.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",d.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",d.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),d.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn ghost",onClick:We},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),d.default.createElement("div",{className:"xyz-advanced"},d.default.createElement("label",null,d.default.createElement("span",null,"refresh token \u6216 access token"),d.default.createElement("input",{value:Q,onChange:c=>oe(c.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),d.default.createElement("button",{className:"xyz-link",type:"button",onClick:Ge},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),d.default.createElement("label",null,d.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),d.default.createElement("input",{value:ye,onChange:c=>pe(c.target.value),placeholder:"x-jike-device-id"})),d.default.createElement("button",{className:"btn primary",disabled:N==="token",onClick:at},N==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),d.default.createElement("button",{className:"xyz-link",onClick:()=>_(c=>!c)},b?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),b?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u624B\u673A\u53F7"),d.default.createElement("input",{value:f,onChange:c=>w(c.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),d.default.createElement("button",{className:"btn ghost",disabled:N==="send"||A>0,onClick:_e},A>0?`${A}s \u540E\u91CD\u53D1`:N==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),d.default.createElement("input",{value:W,onChange:c=>V(c.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),d.default.createElement("button",{className:"btn primary",disabled:N==="login",onClick:je},N==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,d.default.createElement("div",{className:"xyz-public"},d.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),d.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),d.default.createElement("input",{value:be,onChange:c=>Ee(c.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),d.default.createElement("button",{className:"btn ghost",disabled:de,onClick:L},de?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),Pe?d.default.createElement("div",{className:"xyz-eps"},d.default.createElement("div",{className:"xyz-ep-title"},Pe.title,d.default.createElement("span",{className:"xyz-hint"}," \xB7 ",Pe.author)),Pe.episodes.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${s===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},kr(c.pubDate)," \xB7 ",yr(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:N===`pplay:${c.eid}`,onClick:()=>G(c)},N===`pplay:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),u?d.default.createElement("p",{className:"xyz-error"},u):null)):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function jn(a){return String(a||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function Nr(a,s){let i=jn(s),p=i?`${i}/`:"",u=new Map;for(let v of a){let N=jn(v?.rel);if(!N||p&&!N.startsWith(p))continue;let f=N.slice(p.length).split("/")[0];if(!f)continue;let w=p?`${p}${f}`:f,W=u.get(w)||{rel:w,name:f,count:0};W.count+=1,u.set(w,W)}return[...u.values()].sort((v,N)=>v.name.localeCompare(N.name,"zh-Hans-CN"))}function zr(a,s){let i=[{rel:"",label:a}],p=jn(s);if(!p)return i;let u="";for(let v of p.split("/").filter(Boolean))u=u?`${u}/${v}`:v,i.push({rel:u,label:v});return i}function $r(a){if(a.type==="download")return a.status==="done"?"\u5DF2\u4E0B\u8F7D":a.status==="error"||a.status==="interrupted"?a.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${a.progress?` ${a.progress}%`:""}`;let s=a.progress?.percent,i=a.chunks?.total?` \xB7 ${a.chunks.done}/${a.chunks.total} \u5757`:"";return a.status==="done"?`\u5B8C\u6210${a.lineCount?` \xB7 ${a.lineCount} \u884C`:""}${a.language?` \xB7 ${a.language}`:""}`:a.status==="error"||a.status==="interrupted"?a.error||"\u5931\u8D25":a.status==="cancelled"?a.error||"\u5DF2\u53D6\u6D88":a.status==="queued"?"\u6392\u961F\u4E2D":`${a.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":a.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":a.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${s!=null?` ${s}%`:""}${i}`}var S="/podwave/api",Ca=[.5,.75,1,1.25,1.5,1.75,2];async function xe(a){let s=await fetch(a);if(!s.ok){let i=await s.json().catch(()=>({}));throw new Error(i.error||s.statusText)}return s.json()}async function te(a,s,i){let p=await fetch(a,{method:s,headers:i?{"Content-Type":"application/json"}:void 0,body:i?JSON.stringify(i):void 0});if(!p.ok){let u=await p.json().catch(()=>({}));throw new Error(u.error||p.statusText)}return p.json()}async function Sa(a,s=1200){let i=await createImageBitmap(a),p=Math.min(1,s/Math.max(i.width,i.height)),u=Math.max(1,Math.round(i.width*p)),v=Math.max(1,Math.round(i.height*p)),N=document.createElement("canvas");N.width=u,N.height=v;let $=N.getContext("2d");$.fillStyle="#16161a",$.fillRect(0,0,u,v),$.drawImage(i,0,0,u,v),typeof i.close=="function"&&i.close();let f=await new Promise(w=>N.toBlob(w,"image/jpeg",.9));if(!f)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return f}function Ma({onSubmit:a,onPick:s,onClose:i}){let[p,u]=(0,t.useState)(""),[v,N]=(0,t.useState)(!1),[$,f]=(0,t.useState)(!1),[w,W]=(0,t.useState)(""),V=(0,t.useRef)(null);return(0,t.useEffect)(()=>{V.current?.focus();let b=_=>{_.key==="Escape"&&i()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[i]),t.default.createElement("div",{className:"overlay",onMouseDown:b=>{b.target===b.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async b=>{if(b.preventDefault(),!(!p.trim()||v)){N(!0),W("");try{await a(p.trim()),i()}catch(_){W(_.message),N(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!$){f(!0),W("");try{let b=await s();if(b?.canceled)return;if(b?.error)throw new Error(b.error);b?.path&&(await a(b.path),i())}catch(b){W(b.message)}finally{f(!1)}}},disabled:$,autoFocus:!0},$?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:V,value:p,onChange:b=>u(b.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:v||!p.trim()},v?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),w?t.default.createElement("div",{className:"dialog-error"},w):null))}function Pa({config:a,onClose:s,onSave:i}){let[p,u]=(0,t.useState)(a?.provider||"api"),[v,N]=(0,t.useState)(""),[$,f]=(0,t.useState)(!1),[w,W]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:A=>{A.target===A.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async A=>{A.preventDefault(),f(!0),W("");try{await i({provider:p,apiKey:v||void 0})}catch(P){W(P.message),f(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",a?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:p,onChange:A=>u(A.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:v,onChange:A=>N(A.target.value),placeholder:a?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},a?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),w?t.default.createElement("div",{className:"dialog-error"},w):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:$},"\u4FDD\u5B58"))))}function Un(){let[a,s]=(0,t.useState)([]),[i,p]=(0,t.useState)([]),[u,v]=(0,t.useState)({}),[N,$]=(0,t.useState)({running:!1}),[f,w]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[W,V]=(0,t.useState)(!1),[A,P]=(0,t.useState)(!1),[b,_]=(0,t.useState)(0),[Q,oe]=(0,t.useState)(0),[ye,pe]=(0,t.useState)(0),[R,ke]=(0,t.useState)(!1),[Y,ne]=(0,t.useState)(""),[ve,re]=(0,t.useState)([]),[ge,C]=(0,t.useState)("recent"),[h,I]=(0,t.useState)("all"),[E,M]=(0,t.useState)(""),[be,Ee]=(0,t.useState)(""),[Pe,Oe]=(0,t.useState)("all"),[de,Ne]=(0,t.useState)(null),[H,Te]=(0,t.useState)(null),[Se,Ae]=(0,t.useState)(!1),[Z,j]=(0,t.useState)(0),[ze,We]=(0,t.useState)(0),[_e,je]=(0,t.useState)(!0),[at,Ge]=(0,t.useState)(!1),[Qe,Ve]=(0,t.useState)(""),[st,y]=(0,t.useState)(""),[z,L]=(0,t.useState)(null),[G,c]=(0,t.useState)("none"),[B,it]=(0,t.useState)(null),Po=(0,t.useRef)(new Set),[xt,Xt]=(0,t.useState)(15),[Dt,It]=(0,t.useState)(!1),[To,Do]=(0,t.useState)({x:null,y:null}),[uo,mo]=(0,t.useState)({width:null,height:null}),[Lt,vo]=(0,t.useState)({width:null,height:null}),[go,Et]=(0,t.useState)(null),fo=(0,t.useRef)(null),[Io,lt]=(0,t.useState)(!1),[Ke,Ot]=(0,t.useState)(0),[Jt,pt]=(0,t.useState)(""),[He,mt]=(0,t.useState)(!1),[Yt,Zt]=(0,t.useState)(null),[ce,Lo]=(0,t.useState)(""),[Re,et]=(0,t.useState)({status:"none"}),[Fn,vt]=(0,t.useState)(!1),[Eo,ln]=(0,t.useState)(!1),[Gt,Qt]=(0,t.useState)(!1),[qe,ho]=(0,t.useState)(null),[we,fe]=(0,t.useState)(!1),[At,xo]=(0,t.useState)([]),[bt,X]=(0,t.useState)(!1),[De,wt]=(0,t.useState)([]),[yt,kt]=(0,t.useState)(null),[jt,bo]=(0,t.useState)(""),[Oo,Ao]=(0,t.useState)([]),[he,dt]=(0,t.useState)("idle"),[ie,Nt]=(0,t.useState)([]),[pn,Ut]=(0,t.useState)(""),[dn,Rt]=(0,t.useState)(""),[jo,eo]=(0,t.useState)(0),[wo,Uo]=(0,t.useState)(0),[to,cn]=(0,t.useState)(0),[oo,no]=(0,t.useState)(""),[zt,Bt]=(0,t.useState)(!1),[Ft,Ht]=(0,t.useState)(!1),[un,Bo]=(0,t.useState)(null),[yo,mn]=(0,t.useState)(!0),[vn,ko]=(0,t.useState)(.78),[gn,Fo]=(0,t.useState)(18),[Ho,Wo]=(0,t.useState)(780),r=(0,t.useRef)(null),x=(0,t.useRef)(""),D=(0,t.useRef)(null),O=(0,t.useRef)(null),Xe=(0,t.useRef)(null),Ie=(0,t.useRef)(0),gt=(0,t.useRef)(f),ft=(0,t.useRef)(0),Ue=(0,t.useRef)(0),$t=(0,t.useRef)(0),Ct=(0,t.useRef)(0),Mr=(0,t.useRef)(!1),fn=(0,t.useRef)(!1),_o=(0,t.useRef)(null),Wt=(0,t.useRef)([]),Vo=(0,t.useRef)(!1),St=(0,t.useRef)(""),le=(0,t.useRef)([]),hn=(0,t.useRef)(0),No=(0,t.useRef)(0),Mt=(0,t.useRef)(0),Hn=(0,t.useRef)(!0),Wn=(0,t.useRef)(0);(0,t.useEffect)(()=>{P(!1)},[de]),(0,t.useEffect)(()=>{gt.current=f},[f]),(0,t.useEffect)(()=>{O.current=H},[H]),(0,t.useEffect)(()=>{Xe.current=z},[z]),(0,t.useEffect)(()=>{Ie.current=ze},[ze]),(0,t.useEffect)(()=>{let e=!1;return xe(`${S}/transcribe/settings`).then(o=>{e||it(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await xe(`${S}/ui-settings`);!e&&o&&(ln(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&Xt(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&It(o.captionOpen),Do({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),mo({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}),vo({width:Number.isFinite(Number(o.transcriptW))&&o.transcriptW!==null?Number(o.transcriptW):null,height:Number.isFinite(Number(o.transcriptH))&&o.transcriptH!==null?Number(o.transcriptH):null}),Number.isFinite(Number(o.episodeLeftW))&&o.episodeLeftW!==null&&Et(Number(o.episodeLeftW)))}catch{}})(),()=>{e=!0}},[]);let Be=(0,t.useCallback)(e=>{fetch(`${S}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),xn=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));Xt(o),Be({subtitleSize:o})},[Be]),Pr=(0,t.useCallback)((e,o,l)=>{Do({x:e,y:o}),l&&Be({captionX:e,captionY:o})},[Be]),Tr=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};mo(m),l&&Be({captionW:m.width,captionH:m.height})},[Be]),_n=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};vo(m),l&&Be({transcriptW:m.width,transcriptH:m.height})},[Be]),Ko=(0,t.useRef)(null),Vn=(0,t.useRef)(null),Kn=e=>{let o=Ko.current;return o?Math.round(Math.min(460,Math.max(140,o.width+(e.clientX-o.startX)))):null},Dr=e=>{if(e.button!==void 0&&e.button!==0)return;let o=Vn.current;o&&(e.preventDefault(),Ko.current={startX:e.clientX,width:o.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},Ir=e=>{let o=Kn(e);o!=null&&Et(o)},qn=e=>{if(!Ko.current)return;let o=Kn(e);Ko.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),o!=null&&(Et(o),Be({episodeLeftW:o}))},Lr=()=>{Et(null),Be({episodeLeftW:null})},Er=()=>fo.current?.click(),Or=async e=>{if(!(!e||!de)){lt(!0);try{let o=await Sa(e),l=await fetch(`${S}/episodes/${encodeURIComponent(de)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:o});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||"\u6362\u5C01\u9762\u5931\u8D25")}await Je(),k("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(o){k(String(o.message||o))}finally{lt(!1)}}},Ar=async()=>{if(de){lt(!0);try{let e=await fetch(`${S}/episodes/${encodeURIComponent(de)}/cover`,{method:"DELETE"});if(!e.ok){let o=await e.json().catch(()=>({}));throw new Error(o.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await Je(),k("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){k(String(e.message||e))}finally{lt(!1)}}},jr=(0,t.useCallback)(()=>{It(e=>{let o=!e;return Be({captionOpen:o}),o})},[Be]),Ur=(0,t.useCallback)(()=>{It(!1),Be({captionOpen:!1})},[Be]),zo=(0,t.useMemo)(()=>{let e=z?.lines;return e?.length&&e.find(o=>Z>=o.start&&Z<o.end)||null},[z,Z]),Br=zo&&zo.speaker!=null?z?.speakers?.[zo.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${zo.speaker+1}`:"",Xn=(0,t.useCallback)(()=>{ln(e=>{let o=!e;return fetch(`${S}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{y(e),window.clearTimeout(Ct.current),Ct.current=window.setTimeout(()=>y(""),2600)},[]);(0,t.useEffect)(()=>{if(he!=="listening"&&he!=="asking")return;Uo(Date.now());let e=window.setInterval(()=>Uo(Date.now()),1e3);return()=>window.clearInterval(e)},[he]),(0,t.useEffect)(()=>{if(he!=="listening")return;let e=window.setInterval(()=>cn(hn.current),200);return()=>window.clearInterval(e)},[he]),(0,t.useEffect)(()=>{if(he!=="listening")return;let e=window.setInterval(()=>{let o=Date.now()-(No.current||0);o>6e3&&le.current.length===0?no("\u6CA1\u6536\u5230\u58F0\u97F3\u3002\u7CFB\u7EDF\u8F93\u51FA\u8981\u9009\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF08\u626C\u58F0\u5668 + BlackHole 2ch\uFF09\uFF0C\u53EA\u9009\u626C\u58F0\u5668\u7684\u8BDD\u63D2\u4EF6\u542C\u4E0D\u5230"):o<1500&&no("")},1200);return()=>window.clearInterval(e)},[he]);let _t=(0,t.useCallback)(e=>{fetch(`${S}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"update",payload:e})}).catch(()=>{})},[]),Jn=(0,t.useCallback)(async()=>{if(!Vo.current){Vo.current=!0;try{for(;Wt.current.length;){let e=Wt.current.shift(),o=St.current;if(!o)break;try{let l=await fetch(`${S}/live/segment?session=${encodeURIComponent(o)}&start=${e.start}&end=${e.end}`,{method:"POST",headers:{"content-type":"audio/wav"},body:e.wav}),m=await l.json().catch(()=>({}));if(!l.ok)throw new Error(m.error||l.statusText);if(m.lines?.length){le.current=[...le.current,...m.lines],Nt(le.current);let U=le.current,K=U[U.length-1],ee=U[U.length-2];_t({text:K?.text||"",translation:K?.translations?.zh||K?.translations?.en||"",previous:ee?.text||"",previousTranslation:ee?.translations?.zh||ee?.translations?.en||"",status:"listening",hint:""})}Ut(m.lastError||"")}catch(l){Ut(l.message||String(l))}}}finally{Vo.current=!1}}},[_t]),Fr=(0,t.useCallback)(e=>{Number.isFinite(Number(e.opacity))&&ko(Number(e.opacity)),Number.isFinite(Number(e.fontSize))&&Fo(Number(e.fontSize)),Number.isFinite(Number(e.width))&&Wo(Number(e.width)),_t(e),window.clearTimeout(Wn.current),Wn.current=window.setTimeout(()=>{te(`${S}/live/settings`,"PUT",e).catch(()=>{})},600)},[_t]),ro=(0,t.useCallback)(async e=>{dt("saving");let o=St.current;St.current="";try{let l=await te(`${S}/live/stop`,"POST",{session:o,save:!!e});l.saved?k(`\u5B57\u5E55\u5DF2\u4FDD\u5B58\uFF1A${l.files.md}`):k("\u5B9E\u65F6\u5B57\u5E55\u5DF2\u7ED3\u675F")}catch(l){k(`\u7ED3\u675F\u5B9E\u65F6\u5B57\u5E55\u5931\u8D25\uFF1A${l.message||l}`)}finally{fetch(`${S}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"close"})}).catch(()=>{}),Bt(!1),Ht(!1),Mt.current=0,Wt.current=[],le.current=[],dt("idle"),Nt([]),Ut(""),Rt(""),eo(0)}},[k]),Yn=(0,t.useCallback)(async()=>{if(Ft){try{await te(`${S}/live/tap`,"POST",{action:"stop",keep:!0})}catch{}try{let l=await xe(`${S}/live/lines?since=${Mt.current}`);Array.isArray(l?.lines)&&l.lines.length&&(le.current=[...le.current,...l.lines],Nt(le.current),Mt.current=le.current[le.current.length-1]?.id||Mt.current)}catch{}le.current.length?await ro(yo):await ro(!1);return}let e=_o.current;_o.current=null,e&&await e.stop().catch(()=>{});let o=Date.now()+5e3;for(;(Wt.current.length||Vo.current)&&Date.now()<o;)await new Promise(l=>setTimeout(l,150));le.current.length&&!zt?dt("asking"):await ro(le.current.length?yo:!1)},[ro,zt,yo,Ft]);(0,t.useEffect)(()=>{if(!Ft||he!=="listening")return;let e=!1,o=window.setInterval(async()=>{try{let l=await xe(`${S}/live/lines?since=${Mt.current}`);if(e)return;Array.isArray(l?.lines)&&l.lines.length&&(le.current=[...le.current,...l.lines],Nt(le.current),Mt.current=le.current[le.current.length-1]?.id||Mt.current),Number.isFinite(Number(l?.level))&&(hn.current=Number(l.level),Number(l.level)>.004&&(No.current=Date.now())),typeof l?.hint=="string"&&l.hint!==oo&&no(l.hint),l?.alive===!1&&(Mt.current=0,le.current=[],Nt([]),Bt(!1),Ht(!1),dt("idle"),Rt(""),eo(0),no(""))}catch{}},600);return()=>{e=!0,window.clearInterval(o)}},[Ft,he,oo]);let Zn=(0,t.useCallback)(async(e={})=>{try{let o=Number.isFinite(Number(e.opacity))?Number(e.opacity):.78,l=Number.isFinite(Number(e.fontSize))?Number(e.fontSize):18,m=Number.isFinite(Number(e.width))?Number(e.width):780;ko(o),Fo(l),Wo(m);let U=await te(`${S}/live/window`,"POST",{action:"open"});if(U?.ok)return Bt(!0),_t({text:"",status:"listening",hint:"\u542C\u7740\u5462\uFF0C\u64AD\u653E\u58F0\u97F3\u5C31\u4F1A\u51FA\u5B57\u5E55",opacity:o,fontSize:l,width:m,saveOnStop:Hn.current}),!0;Bt(!1),U?.error&&k(`\u72EC\u7ACB\u5B57\u5E55\u7A97\u6CA1\u6253\u5F00\uFF0C\u5B57\u5E55\u663E\u793A\u5728\u5361\u7247\u91CC\uFF1A${U.error}`)}catch{Bt(!1)}return!1},[k,_t]),Hr=(0,t.useCallback)(async()=>{if(!(he==="starting"||he==="listening")){Ut(""),Nt([]),le.current=[],dt("starting");try{let e=await xe(`${S}/live`);if(mn(e.saveOnStop!==!1),Hn.current=e.saveOnStop!==!1,!e.ready)throw new Error("\u8FD8\u6CA1\u6709\u586B DeepSeek API key\u3002\u8BBE\u7F6E \u2192\u300C\u7FFB\u8BD1\u300D\u91CC\u586B\u4E00\u4E2A\uFF0C\u8F6C\u5199\u548C\u5B9E\u65F6\u5B57\u5E55\u90FD\u80FD\u7528");let o=e.deviceId||"",l=e.deviceLabel||"";if(!o){let ee=await br().catch(()=>[]),tt=On(ee);tt&&(o=tt.deviceId,l=tt.label||"")}if(e.tap?.supported!==!1&&e.source!=="browser")try{let ee=await te(`${S}/live/tap`,"POST",{target:e.target||"zh",chunkMs:500});if(ee?.ok){Bo(ee),Ht(!0),St.current=ee.session?.id||"",Rt("\u7CFB\u7EDF\u97F3\u9891"),eo(Date.now()),dt("listening"),No.current=Date.now(),await Zn(e);return}k(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ee?.error||"\u672A\u77E5\u539F\u56E0"}`)}catch(ee){k(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ee.message||ee}`)}Ht(!1);let U=await te(`${S}/live/start`,"POST",{target:e.target||"zh"});if(!U?.session?.id)throw new Error("\u5BBF\u4E3B\u6CA1\u7ED9\u51FA\u4F1A\u8BDD id");St.current=U.session.id;let K=await wr({deviceId:o,onLevel:ee=>{hn.current=ee,ee>.004&&(No.current=Date.now())},onSegment:ee=>{Wt.current.length>8&&Wt.current.shift(),Wt.current.push(ee),Jn()}});_o.current=K,Rt(K.label||l||"\u7CFB\u7EDF\u58F0\u97F3"),eo(Date.now()),dt("listening"),No.current=Date.now(),await Zn(e),o&&(o!==e.deviceId||(K.label||l)!==e.deviceLabel)&&te(`${S}/live/settings`,"PUT",{deviceId:o,deviceLabel:K.label||l}).catch(()=>{})}catch(e){St.current&&te(`${S}/live/stop`,"POST",{session:St.current,save:!1}).catch(()=>{}),St.current="",_o.current=null,dt("idle");let o=e.message||String(e);Ut(o),k(`\u5B9E\u65F6\u5B57\u5E55\u6CA1\u8D77\u6765\uFF1A${o}`)}}},[k,he,Jn,_t,xt]),Je=(0,t.useCallback)(async()=>{let e=await xe(`${S}/episodes`);return s(e.items||[]),p(e.folders||[]),v(e.progress||{}),$(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await xe(`${S}/health`).catch(()=>({}));o.mediaBase&&(x.current=o.mediaBase);let l=await xe(`${S}/state`);if(e)return;w(l.settings),p(l.folders||[]);let m=await Je();if(e)return;let U=l.settings?.lastEpisodeId,K=U?(m.items||[]).find(ee=>ee.id===U):null;if(K){Te(K),We(K.duration||0);let ee=m.progress?.[K.id]?.position||0;ft.current=ee>5?ee:0,j(ft.current);let tt=r.current;tt&&(tt.src=x.current?`${x.current}/episodes/${K.id}/audio`:`${S}/episodes/${K.id}/audio`,tt.load(),tt.playbackRate=l.settings?.rate||1,tt.volume=l.settings?.volume??.9)}je(!1),Mr.current=!0}catch(o){e||(Ve(o.message),je(!1))}})(),()=>{e=!0}},[Je]),(0,t.useEffect)(()=>{if(!N.running)return;let e=setInterval(()=>{Je().catch(()=>{})},1500);return()=>clearInterval(e)},[N.running,Je]),(0,t.useEffect)(()=>{let e=!1;return L(null),pt(""),Ot(0),H?.id?((async()=>{try{let o=await xe(`${S}/episodes/${H.id}/transcript`);if(e)return;c(o.status),ho(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?L(o.transcript):o.status==="queued"||o.status==="running"?(Ot(o.elapsedMs||0),o.transcript&&L(o.transcript)):o.status==="error"&&pt(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||pt(o.message)}})(),()=>{e=!0}):(c("none"),()=>{e=!0})},[H?.id]),(0,t.useEffect)(()=>{xe(`${S}/translate/settings`).then(Zt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=H?.id;return!o||!ce?(et({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await xe(`${S}/episodes/${o}/translate?target=${ce}`);e||et(l)}catch{e||et({status:"none"})}})(),()=>{e=!0})},[H?.id,ce]),(0,t.useEffect)(()=>{if(G!=="queued"&&G!=="running")return;let e=!1,o=setInterval(async()=>{let l=O.current?.id;if(l)try{let m=await xe(`${S}/episodes/${l}/transcript`);if(e)return;c(m.status),ho(m.status==="queued"||m.status==="running"?m:null),Ot(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?L(m.transcript):m.status==="done"&&m.transcript?(L(m.transcript),mt(!0),k("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&pt(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[G,k]),(0,t.useEffect)(()=>{if(Re.status!=="running"&&Re.status!=="queued")return;let e=!1,o=async m=>{let U=await xe(`${S}/episodes/${m}/translate?target=${ce}`);if(!e){et(U),U.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let K=await xe(`${S}/episodes/${m}/transcript`);!e&&K.transcript&&L(K.transcript)}catch{}}},l=setInterval(()=>{let m=O.current?.id;m&&o(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[Re.status,ce,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let m=await xe(`${S}/jobs`);e||xo(m.items||[])}catch{}};o();let l=setInterval(o,we?2500:2e4);return()=>{e=!0,clearInterval(l)}},[we]);let Vt=(0,t.useCallback)((e,o,l,m=!1)=>{if(!e)return;let U=Date.now();!m&&U-$t.current<4e3||($t.current=U,te(`${S}/progress/${e}`,"PUT",{position:o,duration:l}).catch(()=>{}),v(K=>({...K,[e]:{position:o,duration:l,updatedAt:U}})))},[]),Pt=(0,t.useCallback)(e=>{w(o=>({...o,...e})),te(`${S}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!Se||!H||B?.realtime===!1||B?.provider==="local"||z&&!z.partial||G==="queued"||G==="running")return;let e=H.id;Po.current.has(e)||(Po.current.add(e),te(`${S}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&c("queued")}).catch(()=>{}))},[Se,H,z,G,B]);let $o=(0,t.useCallback)(async()=>{let e=O.current;if(!e)return;pt(""),mt(!0);let o=Xe.current,l=!!o&&!o.partial;if(l){let m=Array.isArray(o.lines)?o.lines.length:0,U=(B?.provider||"api")==="api",K=[`\u91CD\u65B0\u8F6C\u5199\u8FD9\u4E00\u96C6\uFF1F\u73B0\u6709\u5B57\u5E55\uFF08${m} \u884C\uFF09\u4F1A\u88AB\u8986\u76D6\u3002`,"",U?"\u8D70\u4E91\u7AEF\u8F6C\u5199\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u8D39\u4E00\u6B21\u3002":"\u8D70\u672C\u5730\u6A21\u578B\uFF0C\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1\uFF0C\u4F46\u4F1A\u5360 CPU/GPU\u3002"].join(`
`);if(!window.confirm(K))return}try{let m=await te(`${S}/episodes/${e.id}/transcribe`,"POST",l?{force:!0}:{});c(m.status||"queued"),l&&k("\u91CD\u65B0\u8F6C\u5199\u5DF2\u5F00\u59CB")}catch(m){pt(m.message)}},[k,B]),Wr=(0,t.useCallback)(()=>{if(z){mt(e=>!e);return}if(G==="queued"||G==="running"){mt(!0);return}$o()},[z,G,$o]),bn=(0,t.useCallback)(async()=>{if(O.current)try{await te(`${S}/episodes/${O.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){pt(e.message)}},[k]),wn=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let m=await te(`${S}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?k("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):k(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await te(`${S}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await te(`${S}/jobs`,"DELETE",{key:e.key})}catch(m){k(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let l=await xe(`${S}/jobs`).catch(()=>({items:[]}));xo(l.items||[])},[k]),qo=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let l=await te(`${S}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),wt([]),X(!1)}catch(l){k(l.message)}},[k]),_r=(0,t.useCallback)(e=>{wt(o=>o.includes(e)?o.filter(l=>l!==e):[...o,e])},[]),Tt=(0,t.useCallback)(async(e,o,l)=>{try{let m=await te(`${S}${e}`,o,l||{});return m?.transcript&&L(m.transcript),m}catch(m){return k(m.message),null}},[k]),Gn=(0,t.useCallback)(e=>{kt(e.id),bo(e.text),Ao([])},[]),Qn=(0,t.useCallback)(async e=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e??yt}`,"PUT",{text:jt})&&(kt(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[z,yt,jt,Tt,k]),Rn=(0,t.useCallback)(async(e,o)=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e??yt}/split`,"POST",{offset:o})&&(kt(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[z,yt,Tt,k]),er=(0,t.useCallback)(async e=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[z,Tt,k]),tr=(0,t.useCallback)(async()=>{if(!z)return;let e=await Tt(`/episodes/${z.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(et({status:"none",missing:e.after}),k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[z,Tt,k]),or=(0,t.useCallback)(async()=>{if(z)try{let e=await xe(`${S}/episodes/${z.id}/transcript/validate`);Ao(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[z,k]),Xo=(0,t.useCallback)(async()=>{let e=O.current?.id;if(!e)return;let o=await xe(`${S}/episodes/${e}/transcript`);o.transcript&&L(o.transcript)},[]),Jo=(0,t.useCallback)(async(e=!1)=>{let o=O.current?.id,l=ce;if(!(!o||!l)&&!(Re.status==="running"||Re.status==="queued")){et({status:"running"});try{let m=await te(`${S}/episodes/${o}/translate`,"POST",{target:l,force:e});et(m),m.status==="done"&&(await Xo(),k(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){et(U=>({...U,status:"error",error:m.message}))}}},[ce,Re.status,Xo,k]),nr=(0,t.useCallback)(()=>Jo(!1),[Jo]),rr=(0,t.useCallback)(()=>{let e=ce==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&Jo(!0)},[Jo,ce]),ar=(0,t.useCallback)(async e=>{let o=O.current?.id;if(!(!o||!ce||!e?.id))try{await te(`${S}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:ce}),await Xo(),k("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){k(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[ce,Xo,k]),sr=(0,t.useCallback)(e=>{Lo(e||"")},[]),Vr=async()=>{if(ae?.eid)try{await fetch(`${S}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${ae.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Kr=e=>{let o=!e.favorite;s(l=>l.map(m=>m.id===e.id?{...m,favorite:o}:m)),te(`${S}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(l=>k(l.message))},ir=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${S}/episodes/${o}`,{method:"DELETE"})}catch{}s(o=>o.filter(l=>!e.includes(l.id))),wt([]),e.includes(de)&&Ne(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ye=(0,t.useMemo)(()=>{let e=[...a];return ge==="title"?e.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):ge==="duration"?e.sort((o,l)=>(l.duration||0)-(o.duration||0)):e.sort((o,l)=>l.mtime-o.mtime),e},[a,ge]),ao=E?be:"",lr=(0,t.useMemo)(()=>E?a.filter(e=>e.root===E):[],[a,E]),so=(0,t.useMemo)(()=>E?Nr(lr,ao):[],[lr,E,ao]),ct=(0,t.useMemo)(()=>{let e=Y.trim().toLowerCase();return Ye.filter(o=>{if(E&&o.root!==E||E&&(o.rel||"")!==ao||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let m=u[o.id]?.position||0,U=o.duration||0,K=U?m/U:0;return h==="inprogress"?m>5&&K<.97:h==="finished"?K>=.97:Pe==="unheard"?m<=5:Pe==="transcribed"?!!o.hasTranscript:Pe==="favorites"?!!o.favorite:!0})},[Ye,Y,h,Pe,u,E,ao]),pr=(0,t.useMemo)(()=>At.filter(e=>e.status==="queued"||e.status==="running"),[At]),Kt=(0,t.useMemo)(()=>ct.filter(e=>!e.hasTranscript),[ct]),yn=(0,t.useMemo)(()=>a.filter(e=>{let o=u[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(u[o.id]?.updatedAt||0)-(u[e.id]?.updatedAt||0)).slice(0,4),[a,u]),qr=(0,t.useMemo)(()=>a.reduce((e,o)=>e+(o.duration||0),0),[a]),Xr=Math.round(qr/3600*10)/10,io=(0,t.useMemo)(()=>E?zr(tn(E),ao):[],[E,ao]),Jr=E?io.length>1?io[io.length-1].label:tn(E):h==="inprogress"?"\u7EE7\u7EED\u6536\u542C":h==="finished"?"\u5DF2\u64AD\u5B8C":h==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",ae=de?a.find(e=>e.id===de)||(H?.id===de?H:null):null,Yr=_e?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":N.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":E?`${ct.length} \u96C6${so.length?` \xB7 ${so.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${ct.length} \u96C6 \xB7 \u5171 ${Xr} \u5C0F\u65F6 \xB7 ${i.length} \u4E2A\u6587\u4EF6\u5939`,Ha=(0,t.useMemo)(()=>H?Ye.findIndex(e=>e.id===H.id):-1,[Ye,H]),lo=(0,t.useCallback)(()=>{let e=r.current;if(e){if(!O.current){let o=ct[0]||Ye[0];o&&qt(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[ct,Ye]),qt=(0,t.useCallback)((e,o=!0)=>{let l=r.current;if(!l||!e)return;if(O.current&&O.current.id===e.id){o&&lo();return}O.current&&!l.ended&&l.currentTime>1&&Vt(O.current.id,l.currentTime,l.duration||Ie.current,!0),O.current=e,Te(e),Ne(K=>K&&e.id),We(e.duration||0);let m=u[e.id]?.position||0,U=m>5&&(!e.duration||m<e.duration-10)?m:0;ft.current=U,j(U),e.source==="xyz"?l.src=x.current?`${x.current}/xyz/${e.id.slice(3)}/audio`:`${S}/episodes/${e.id}/audio`:l.src=x.current?`${x.current}/episodes/${e.id}/audio`:`${S}/episodes/${e.id}/audio`,l.load(),l.playbackRate=gt.current.rate||1,l.volume=gt.current.volume??.9,o&&l.play().catch(()=>{}),Pt({lastEpisodeId:e.id})},[u,Vt,Pt,lo]),Zr=(0,t.useCallback)(async e=>{let o=e.public?`${S}/xyz/public/play`:`${S}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),U=await m.json().catch(()=>({}));if(!m.ok)throw new Error(U.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Je(),qt(U.item,!0)},[Je,qt]);(0,t.useEffect)(()=>{let e=Y.trim();if(e.length<2){re([]);return}let o=window.setTimeout(()=>{xe(`${S}/search?q=${encodeURIComponent(e)}`).then(l=>re(Array.isArray(l.items)?l.items:[])).catch(()=>re([]))},250);return()=>window.clearTimeout(o)},[Y]);let Yo=(0,t.useCallback)((e,o=!0)=>{e&&(qt(e,o),Ne(e.id))},[qt]),Ze=(0,t.useCallback)(e=>{let o=r.current;if(!o||!O.current)return;let l=Number(e);if(!Number.isFinite(l))return;let m=Number(Ie.current)||0,U=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,K=Math.max(0,U>0?Math.min(l,U):l);try{o.currentTime=K}catch{ft.current=K;return}j(K),Vt(O.current.id,K,U||m,!0)},[Vt]),Gr=(0,t.useCallback)(e=>{let o=a.find(l=>l.id===e.episodeId);if(o){if(O.current?.id===e.episodeId){Ze(e.start),Ne(o.id);return}ft.current=e.start,Yo(o,!1)}},[a,Yo,Ze]),dr=(0,t.useCallback)(e=>{let o=D.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),Zo=(0,t.useCallback)(e=>{let o=dr(e),l=Number.isFinite(Ie.current)&&Ie.current>0?Ie.current:Number.isFinite(r.current?.duration)?r.current.duration:0;o==null||!l||Ze(o*l)},[dr,Ze]),Qr=(0,t.useCallback)(e=>{e.preventDefault(),fn.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Zo(e)},[Zo]),Rr=(0,t.useCallback)(e=>{fn.current&&Zo(e)},[Zo]),cr=(0,t.useCallback)(e=>{fn.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),ea=(0,t.useCallback)(e=>{let o=r.current;if(!o)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Ze((o.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),Ze((o.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),Ze(0)),e.key==="End"&&(e.preventDefault(),Ze(Number.isFinite(o.duration)?o.duration:0))},[Ze]),Co=(0,t.useCallback)(e=>{let o=r.current;if(!o||!O.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||Ie.current||0)-1));o.currentTime=l,j(l)},[]),kn=(0,t.useCallback)(e=>{if(!Ye.length)return;let l=((O.current?Ye.findIndex(m=>m.id===O.current.id):-1)+e+Ye.length)%Ye.length;qt(Ye[l],!0)},[Ye,qt]),ta=(0,t.useCallback)(e=>{let o=r.current;o&&(o.playbackRate=e),Pt({rate:e}),V(!1)},[Pt]);(0,t.useEffect)(()=>{if(!W)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||V(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[W]),(0,t.useEffect)(()=>{if(!Q)return;let e=()=>{let l=Math.max(0,Math.round((Q-Date.now())/1e3));if(pe(l),l<=0){let m=r.current;m&&!m.paused&&m.pause(),oe(0),_(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Q,k]),(0,t.useEffect)(()=>{if(!R)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||ke(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[R]);let Nn=(0,t.useCallback)(e=>{if(ke(!1),e==="off"){oe(0),_(0),pe(0);return}if(e==="end"){oe(0),_(-1),pe(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}_(e),oe(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),Go=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),l=r.current;l&&(l.volume=o),Pt({volume:o})},[Pt]),oa=(0,t.useCallback)(()=>{let e=r.current,o=gt.current.volume>0?0:.9;e&&(e.volume=o),Pt({volume:o})},[Pt]),na=()=>{let e=r.current;if(!e||!O.current)return;let o=performance.now();o-(Ue.current||0)<400||(Ue.current=o,j(e.currentTime),Vt(O.current.id,e.currentTime,e.duration||Ie.current))},ra=()=>{let e=r.current,o=O.current;if(!e||!o)return;let l=Number.isFinite(e.duration)?e.duration:o.duration||0;We(l);let m=ft.current;ft.current=0,m>0&&m<l-1&&(e.currentTime=m,j(m))},aa=()=>{let e=r.current;if(O.current&&Vt(O.current.id,e?.duration||Ie.current||0,e?.duration||Ie.current||0,!0),b===-1){_(0),oe(0),pe(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}kn(1)},sa=async e=>{await te(`${S}/folders`,"POST",{path:e}),await Je(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},ia=async()=>{let e=await fetch(`${S}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},la=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Gt||Qt(!0))},pa=e=>{e.currentTarget.contains(e.relatedTarget)||Qt(!1)},da=async e=>{e.preventDefault(),Qt(!1);let o=e.dataTransfer,l=[...o?.files||[]],m=l.map(ue=>ue.path).filter(ue=>typeof ue=="string"&&ue),U=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ue=>ue.trim()).filter(ue=>ue.startsWith("file://")).map(ue=>decodeURIComponent(ue.replace(/^file:\/\//,""))),K=[...new Set([...m,...U])];if(K.length){try{let ue=await te(`${S}/import/paths`,"POST",{paths:K});await Je(),k(ue.added?`\u5DF2\u6DFB\u52A0 ${ue.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ue){Ve(ue.message)}return}let ee=l.filter(ue=>ue.size>0);if(!ee.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let tt=`drop-${Date.now()}`,Qo="",Cn=0;for(let ue of ee)try{let ur=await fetch(`${S}/import/upload?name=${encodeURIComponent(ue.name)}&batch=${tt}`,{method:"POST",body:ue}),ua=await ur.json();ur.ok&&(Qo=ua.folder||Qo,Cn+=1)}catch{}if(Qo)try{await te(`${S}/folders`,"POST",{path:Qo})}catch{}await Je(),k(Cn?`\u5DF2\u5BFC\u5165 ${Cn} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},ca=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await te(`${S}/folders`,"DELETE",{path:e}),M(o=>o===e?"":o),await Je(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Ve(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),lo()):o.key==="ArrowRight"?(o.preventDefault(),Co(15)):o.key==="ArrowLeft"?(o.preventDefault(),Co(-15)):o.key==="ArrowUp"?(o.preventDefault(),Go(gt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Go(gt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[lo,Co,Go]);let zn=e=>{let o=u[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},$n=e=>{let o=u[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${Eo?"nav-collapsed":""}`,onDragOver:la,onDragLeave:pa,onDrop:da},Gt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,Eo?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Xn},t.default.createElement(se,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(se,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Xn},t.default.createElement(se,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",a.length],["inprogress","\u7EE7\u7EED\u6536\u542C",yn.length],["finished","\u5DF2\u64AD\u5B8C",a.filter(zn).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,l])=>t.default.createElement("button",{key:e,className:`nav-item ${h===e&&!E?"active":""}`,onClick:()=>{M(""),I(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Ge(!0)},t.default.createElement(se,{name:"plus",size:16}))),i.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},i.map(e=>t.default.createElement("li",{key:e,title:e,className:E===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{I("all"),Oe("all"),ne(""),M(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),I("all"),Oe("all"),ne(""),M(l=>l===e?"":e))}},t.default.createElement(se,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},tn(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),ca(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Jr),t.default.createElement("p",{className:"subline"},Yr)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${he!=="idle"?"is-on":""}`,onClick:()=>{he==="idle"?Hr():he==="listening"&&Yn()},title:"\u5B9E\u65F6\u5B57\u5E55\uFF1A\u542C\u7CFB\u7EDF\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\u90FD\u80FD\u7528\uFF09"},t.default.createElement(se,{name:"wave",size:16}),t.default.createElement("span",null,"\u5B9E\u65F6\u5B57\u5E55")),t.default.createElement("button",{className:`tool-btn ${we?"is-on":""}`,onClick:()=>fe(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(se,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",pr.length?` ${pr.length}`:"")),t.default.createElement("button",{className:`tool-btn ${bt?"is-on":""}`,onClick:()=>{X(e=>!e),wt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(se,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(se,{name:"search",size:16}),t.default.createElement("input",{value:Y,onChange:e=>ne(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:ge,onChange:e=>C(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),bt?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",De.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>wt(ct.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(ht,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!Kt.length&&!De.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Fe,{hint:`${Kt.length} \u96C6`,disabled:!Kt.length,onSelect:()=>{e(),qo(Kt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(Fe,{hint:`${De.length} \u96C6`,disabled:!De.length,onSelect:()=>{e(),qo(De)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!De.length,onClick:()=>ir(De)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{wt([]),X(!1)}},"\u53D6\u6D88")):null,Qe?t.default.createElement("div",{className:"banner error",onClick:()=>Ve("")},Qe," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,ae?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>Ne(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},ae.artist,ae.album?` \xB7 ${ae.album}`:"")),t.default.createElement("div",{className:"episode-view",style:go?{"--episode-left-w":`${go}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:Vn},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:Er,disabled:Io,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(po,{item:ae,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},Io?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:fo,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let o=e.target.files?.[0];e.target.value="",Or(o)}})),t.default.createElement("h2",{className:"episode-title"},ae.title),t.default.createElement("p",{className:"episode-sub"},ae.artist,ae.album?` \xB7 ${ae.album}`:""),t.default.createElement("p",{className:"episode-path",title:ae.file},ae.location||ae.file),t.default.createElement("p",{className:"episode-stats"},Sn(ae.duration)," \xB7 ",Mn(ae.mtime)," \xB7 \u5DF2\u542C ",Math.round($n(ae)),"%"),ae.shownotes?t.default.createElement("div",{className:`episode-notes ${A?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>P(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",A?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},ae.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:lo},Se&&H?.id===ae.id?"\u6682\u505C":"\u64AD\u653E"),G==="queued"||G==="running"?t.default.createElement("button",{className:"btn ghost",onClick:bn},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:$o},ae.source==="xyz"?z?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":z?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(ht,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,ae.source==="xyz"?t.default.createElement(Fe,{onSelect:()=>{e(),Vr()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,ae.hasCover?t.default.createElement(Fe,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),Ar()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(Fe,{danger:!0,onSelect:()=>{e(),ir([ae.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:Dr,onPointerMove:Ir,onPointerUp:qn,onPointerCancel:qn,onDoubleClick:Lr,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement(on,{inline:!0,transcript:z,status:G,progress:qe?.progress,stage:qe?.stage,chunks:qe?.chunks,queued:qe?.queued,elapsed:Ke,editingId:yt,draft:jt,onDraftChange:bo,onEditLine:Gn,onSaveLine:Qn,onCancelEdit:()=>kt(null),onSplitLine:Rn,onMergeLine:er,onValidate:or,onResegment:tr,issues:Oo,onCancel:bn,error:Jt,position:Z,fontSize:xt,onFontSize:xn,width:Lt.width,height:Lt.height,onResize:_n,onSeek:Ze,onClose:()=>Ne(null),onStart:$o,target:ce,job:Re,onChangeTarget:sr,onTranslate:nr,onRetranslate:rr,onRetranslateLine:ar,onOpenSettings:()=>vt(!0)})))):h==="xyz"?t.default.createElement(An,{onPlay:Zr,currentId:H?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${Pe===e?"is-on":""}`,onClick:()=>Oe(e)},o))),h==="all"&&!Y&&yn.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},yn.map(e=>{let o=$n(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${H?.id===e.id?"is-current":""}`,onClick:()=>Yo(e,!0)},t.default.createElement(po,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,Y.trim().length>=2&&ve.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ve.length)),ve.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Gr(e)},t.default.createElement("span",{className:"hit-time"},Le(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,E?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},io.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(se,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===io.length-1?"is-current":""}`,onClick:()=>Ee(e.rel),disabled:o===io.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!_e&&E&&so.length>0&&!Y?t.default.createElement("div",{className:"folder-rows"},so.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Ee(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(se,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,_e?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ct.length===0&&!(E&&so.length>0&&!Y)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,a.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},a.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":E?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${so.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),a.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Ge(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,a.length>0&&E?t.default.createElement("button",{className:"btn",onClick:()=>M("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},ct.map((e,o)=>{let l=$n(e),m=H?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${zn(e)?"is-finished":""} ${bt&&De.includes(e.id)?"is-selected":""}`,onClick:()=>bt?_r(e.id):Yo(e,!0)},t.default.createElement("span",{className:"col-index row-index"},bt?De.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(se,{name:"check",size:14})):null:m&&Se?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(po,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Mn(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Sn(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:U=>{U.stopPropagation(),Kr(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},zn(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(se,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),He&&H&&!ae?t.default.createElement(on,{transcript:z,status:G,progress:qe?.progress,stage:qe?.stage,chunks:qe?.chunks,queued:qe?.queued,elapsed:Ke,editingId:yt,draft:jt,onDraftChange:bo,onEditLine:Gn,onSaveLine:Qn,onCancelEdit:()=>kt(null),onSplitLine:Rn,onMergeLine:er,onValidate:or,onResegment:tr,issues:Oo,onCancel:bn,error:Jt,position:Z,fontSize:xt,onFontSize:xn,width:Lt.width,height:Lt.height,onResize:_n,onSeek:Ze,onClose:()=>mt(!1),onStart:$o,target:ce,job:Re,onChangeTarget:sr,onTranslate:nr,onRetranslate:rr,onRetranslateLine:ar,onOpenSettings:()=>vt(!0)}):null,we?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>fe(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},At.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):At.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},$r(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!Kt.length,onClick:()=>qo(Kt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Kt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!De.length,onClick:()=>qo(De)},"\u8F6C\u5199\u5DF2\u9009 ",De.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:D,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ze||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Le(Z)} / ${Le(ze)}`,onPointerDown:Qr,onPointerMove:Rr,onPointerUp:cr,onPointerCancel:cr,onKeyDown:ea},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ze?Math.min(100,Math.max(0,Z/ze*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ze?Math.min(100,Math.max(0,Z/ze*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},H?t.default.createElement("button",{className:"now-open",onClick:()=>Ne(H.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(po,{item:H,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:H.title},H.title),t.default.createElement("div",{className:"now-artist"},H.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>kn(-1)},t.default.createElement(se,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Co(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:lo,disabled:!H&&ct.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(se,{name:Se?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Co(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>kn(1)},t.default.createElement(se,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(ht,{className:`player-subs ${He||Dt?"is-active":""}`,buttonClassName:`subs-btn ${He||Dt?"active":""}`,placement:"up",disabled:!H,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(se,{name:"wave",size:15}),t.default.createElement("span",null,z?"\u5B57\u5E55":G==="queued"||G==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Fe,{checked:He,hint:z?`${z.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),Wr()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(Fe,{checked:Dt,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),jr()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Le(Z)," / ",Le(ze)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>V(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":W},f.rate,"\xD7"),W?t.default.createElement("span",{className:"rate-menu",role:"menu"},Ca.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===f.rate,className:e===f.rate?"is-on":"",onClick:()=>ta(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Q?"active":""}`,onClick:()=>ke(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":R},t.default.createElement(se,{name:"moon",size:14}),Q?t.default.createElement("span",{className:"sleep-left"},Le(ye)):null),R?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Q&&b!==-1,className:!Q&&b!==-1?"is-on":"",onClick:()=>Nn("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":b===e,className:b===e?"is-on":"",onClick:()=>Nn(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":b===-1,className:b===-1?"is-on":"",onClick:()=>Nn("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:oa,title:"\u9759\u97F3"},t.default.createElement(se,{name:f.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:f.volume,onChange:e=>Go(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),at?t.default.createElement(Ma,{onClose:()=>Ge(!1),onSubmit:sa,onPick:ia}):null,Fn?t.default.createElement(Pa,{config:Yt,onClose:()=>vt(!1),onSave:async e=>{let o=await te(`${S}/translate/settings`,"PUT",e);Zt(o),vt(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,st?t.default.createElement("div",{className:"toast"},st):null,Dt?t.default.createElement(Dn,{line:zo,speakerLabel:Br,target:ce,status:G,fontSize:xt,onFontSize:xn,x:To.x,y:To.y,width:uo.width,height:uo.height,onMove:Pr,onResize:Tr,onClose:Ur,onSeek:Ze}):null,he!=="idle"&&!zt?t.default.createElement(In,{lines:ie,status:he,error:pn,device:dn,count:ie.length,elapsed:jo?Math.max(0,Math.round((wo-jo)/1e3)):0,fontSize:xt,native:zt,level:to,hint:oo,opacity:vn,styleSize:gn,width:Ho,onStyle:Fr,onStop:Yn,onSave:ro,onClose:()=>ro(!1)}):null,t.default.createElement("audio",{ref:r,preload:"metadata",onPlay:()=>Ae(!0),onPause:()=>{Ae(!1);let e=r.current;O.current&&e&&e.currentTime>0&&!e.ended&&Vt(O.current.id,e.currentTime,e.duration||Ie.current,!0)},onTimeUpdate:na,onLoadedMetadata:ra,onEnded:aa,onError:()=>{Ae(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var rn=require("react");function Ta(a){let s=String(a||"").match(/rgba?\(([^)]+)\)/);if(!s)return null;let i=s[1].split(",").map(u=>Number.parseFloat(u));if(i.length<3||i.length>3&&i[3]===0)return null;let p=u=>{let v=u/255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};return .2126*p(i[0])+.7152*p(i[1])+.0722*p(i[2])}function Da(){for(let a of[document.body,document.documentElement]){if(!a)continue;let s=getComputedStyle(a).backgroundColor,i=Ta(s);if(i!==null)return i}return null}function Cr(){let a=Da();if(a!==null)return a>.5?"light":"dark";let s=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(s)?"light":"dark"}function an(){let[a,s]=(0,rn.useState)(Cr);return(0,rn.useEffect)(()=>{let i=()=>s(Cr());i();let p=new MutationObserver(i);p.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&p.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let u=window.matchMedia("(prefers-color-scheme: light)");return u.addEventListener?.("change",i),()=>{p.disconnect(),u.removeEventListener?.("change",i)}},[]),a}var n=ot(require("react"),1);var sn="0.11.64";var q="/podwave/api";async function Me(a){let s=await fetch(a),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25 ${s.status}`);return i}async function me(a,s,i){let p=await fetch(a,{method:s,headers:{"content-type":"application/json"},body:JSON.stringify(i??{})}),u=await p.json().catch(()=>({}));if(!p.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return u}function Ia(a){let s=Math.max(0,Math.round(Number(a)||0)),i=Math.floor(s/3600),p=Math.floor(s%3600/60);return i>0?`${i} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function rt(a){let s=Number(a)||0;return s?s<1024**2?`${Math.round(s/1024)} KB`:s<1024**3?`${(s/1024**2).toFixed(1)} MB`:`${(s/1024**3).toFixed(1)} GB`:"0 B"}function La(a){if(!a)return"";let s=new Date(a),i=p=>String(p).padStart(2,"0");return`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())} ${i(s.getHours())}:${i(s.getMinutes())}`}function Ea(a){let s=a?.projectDir;return s?a?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${s}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${s}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function Oa(a){return a?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function Aa(a){return a?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":a?.projectDir&&a.dir===a.projectDir?a.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":a?.legacyDir&&a.dir===a.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Bn(){let a=an(),[s,i]=(0,n.useState)([]),[p,u]=(0,n.useState)(""),[v,N]=(0,n.useState)(0),[$,f]=(0,n.useState)(!1),[w,W]=(0,n.useState)(!1),[V,A]=(0,n.useState)(!1),[P,b]=(0,n.useState)([]),[_,Q]=(0,n.useState)(null),[oe,ye]=(0,n.useState)(""),[pe,R]=(0,n.useState)(!1),[ke,Y]=(0,n.useState)({asrModel:"",translateModel:""}),[ne,ve]=(0,n.useState)(null),[re,ge]=(0,n.useState)(null),[C,h]=(0,n.useState)({showSidebarPanel:!0}),[I,E]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[M,be]=(0,n.useState)(null),[Ee,Pe]=(0,n.useState)(null),[Oe,de]=(0,n.useState)(null),[Ne,H]=(0,n.useState)(!1),[Te,Se]=(0,n.useState)("auto"),[Ae,Z]=(0,n.useState)(!1),[j,ze]=(0,n.useState)(null),[We,_e]=(0,n.useState)(!1),[je,at]=(0,n.useState)(""),[Ge,Qe]=(0,n.useState)(15),[Ve,st]=(0,n.useState)(!0),[y,z]=(0,n.useState)("api"),[L,G]=(0,n.useState)(!0),[c,B]=(0,n.useState)(""),[it,Po]=(0,n.useState)([]),[xt,Xt]=(0,n.useState)(!0),[Dt,It]=(0,n.useState)("auto"),[To,Do]=(0,n.useState)(!0),[uo,mo]=(0,n.useState)(.78),[Lt,vo]=(0,n.useState)(18),[go,Et]=(0,n.useState)(780),fo=(0,n.useRef)(0),[Io,lt]=(0,n.useState)(""),[Ke,Ot]=(0,n.useState)("api"),[Jt,pt]=(0,n.useState)("https://api.deepseek.com"),[He,mt]=(0,n.useState)("deepseek-chat"),[Yt,Zt]=(0,n.useState)(""),[ce,Lo]=(0,n.useState)([]),[Re,et]=(0,n.useState)(!1),[Fn,vt]=(0,n.useState)(""),[Eo,ln]=(0,n.useState)(!1),[Gt,Qt]=(0,n.useState)(""),[qe,ho]=(0,n.useState)(""),[we,fe]=(0,n.useState)(""),[At,xo]=(0,n.useState)(""),[bt,X]=(0,n.useState)(""),De=(0,n.useCallback)(async()=>{try{let[r,x,D,O,Xe,Ie,gt,ft,Ue]=await Promise.all([Me(`${q}/history`),Me(`${q}/models`),Me(`${q}/translate/settings`),Me(`${q}/ui-settings`),Me(`${q}/transcribe/settings`),Me(`${q}/import/settings`),Me(`${q}/setup`),Me(`${q}/update`),Me(`${q}/live`)]);be(gt),ze(ft),gt?.job?.status==="running"&&Z(!0),E({mode:Ie.mode||"copy",orphans:Ie.orphans||0,orphanBytes:Ie.orphanBytes||0}),h({showSidebarPanel:O?.showSidebarPanel!==!1}),at((Xe.hotwords||[]).join(" ")),Qe(Xe.chunkMinutes||15),st(Xe.diarize!==!1),z(Xe.provider||"api"),G(Xe.realtime!==!1),B(Ue?.deviceId||""),Xt(Ue?.saveOnStop!==!1),It(Ue?.source||"auto"),Number.isFinite(Number(Ue?.opacity))&&mo(Number(Ue.opacity)),Number.isFinite(Number(Ue?.fontSize))&&vo(Number(Ue.fontSize)),Number.isFinite(Number(Ue?.width))&&Et(Number(Ue.width)),Do(Ue?.tap?.supported!==!1),Ue?.ready||lt("\u8FD8\u6CA1\u6709 DeepSeek API key\uFF0C\u5B9E\u65F6\u5B57\u5E55\u8981\u5148\u7528\u4E91\u7AEF\u8BC6\u522B"),oo().then($t=>{$t.length&&!$t.some(Ct=>Ct.label)&&lt("\u8BBE\u5907\u540D\u8FD8\u662F\u7A7A\u7684\uFF0C\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u6388\u6743\u4E00\u6B21\u5C31\u80FD\u770B\u5230\u540D\u5B57")}),i(r.items||[]),u(r.dir||""),N(Number(r.bytes)||0),f(O?.historyOpen===!0),W(O?.envOpen===!0),A(O?.modelsOpen===!0),b(x.models||[]),Q(x.storage||null),ye(x.storage?.dir||""),Y(x.config||{asrModel:"",translateModel:""}),ve(x.transcribe||null),Qt(x.config?.asrModel||""),ho(x.config?.translateModel||""),ge(D),Ot(D.provider||"api"),pt(D.apiBase||"https://api.deepseek.com"),mt(D.apiModel||"deepseek-chat"),me(`${q}/translate/models`,"POST",{base:D.apiBase,key:void 0}).then($t=>{let Ct=Array.isArray($t?.models)?$t.models:[];Lo(Ct),vt(Ct.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${Ct.length} \u4E2A\u6A21\u578B`:"")}).catch(()=>{}),Zt(""),X("")}catch(r){X(r.message)}},[]);(0,n.useEffect)(()=>{De()},[De]),(0,n.useEffect)(()=>{let r=!1;return Me(`${q}/setup/plan?source=${Te}&mode=${y==="local"?"local":"basic"}`).then(x=>{r||Pe(x)}).catch(()=>{}),()=>{r=!0}},[Te,y,M?.job?.status]),(0,n.useEffect)(()=>{if(!Ae&&M?.job?.status!=="running")return;let r=window.setInterval(async()=>{try{let x=await Me(`${q}/setup`);be(x),x.job?.status!=="running"&&Z(!1)}catch{}},2500);return()=>window.clearInterval(r)},[Ae,M?.job?.status]);let wt=async()=>{X(""),Z(!0);try{await me(`${q}/setup/install`,"POST",{source:Te});let r=await Me(`${q}/setup`);be(r),ie("\u5F00\u59CB\u5B89\u88C5")}catch(r){Z(!1),X(r.message)}},yt=()=>{let r=!$;f(r),me(`${q}/ui-settings`,"PUT",{historyOpen:r}).catch(()=>{})},kt=(r,x,D)=>{let O=!x;D(O),me(`${q}/ui-settings`,"PUT",{[r]:O}).catch(()=>{})},jt=Array.isArray(M?.missing)?M.missing.length:0,bo=M?jt?`${jt} \u9879\u5F85\u5B89\u88C5`:"\u5168\u90E8\u5C31\u7EEA":"\u6B63\u5728\u626B\u63CF\u2026",Oo=_?`${_.items?.length||0} \u4E2A \xB7 ${rt(_.totalBytes)}`:"",Ao=async()=>{try{await me(`${q}/history/open`,"POST",{})}catch(r){X(r.message)}},he=async()=>{X(""),Z(!0);try{await me(`${q}/setup/install`,"POST",{source:Te,mode:"local"});let r=await Me(`${q}/setup`);be(r),ie("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(r){Z(!1),X(r.message)}},dt=async()=>{try{await me(`${q}/setup/cancel`,"POST",{}),ie("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(r){X(r.message)}},ie=r=>{xo(r),window.setTimeout(()=>xo(""),2400)},Nt=async()=>{H(!0);try{let r=await Me(`${q}/setup/verify`);de(r),ie(r.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(r){ie(r.message||"\u68C0\u67E5\u5931\u8D25")}finally{H(!1)}},pn=async()=>{try{let r=await Me(`${q}/setup/diagnose`),x=JSON.stringify(r,null,2);try{await navigator.clipboard.writeText(x)}catch{let D=document.createElement("textarea");D.value=x,D.style.position="fixed",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),D.remove()}ie("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(r){ie(r.message||"\u590D\u5236\u5931\u8D25")}},Ut=async({silent:r=!1}={})=>{r||et(!0),r||vt("");try{let x=await me(`${q}/translate/models`,"POST",{base:Jt,key:Yt.trim()||void 0}),D=Array.isArray(x?.models)?x.models:[];return Lo(D),r||vt(D.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${D.length} \u4E2A\u6A21\u578B`:"\u8FD9\u4E2A\u5730\u5740\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u6A21\u578B"),D}catch(x){return r||vt(x.message||"\u5217\u8868\u83B7\u53D6\u5931\u8D25"),[]}finally{r||et(!1)}},dn=async r=>{let x=Ke;Ot(r);try{let D=await me(`${q}/translate/settings`,"PUT",{provider:r});ge(D)}catch(D){Ot(x),X(D.message)}},Rt=async()=>{fe("api"),X("");try{let r={apiBase:Jt,apiModel:He};Ke==="api"&&(r.provider="api"),Yt.trim()&&(r.apiKey=Yt.trim());let x=await me(`${q}/translate/settings`,"PUT",r);ge(x),Zt(""),ie("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){X(r.message)}finally{fe("")}},jo=async()=>{fe("models"),X("");try{let r=await me(`${q}/models`,"PUT",{asrModel:Gt,translateModel:qe});Y(r.config),b(r.models||[]),ve(r.transcribe||null),ie("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(r){X(r.message)}finally{fe("")}},eo=async()=>{try{await me(`${q}/models/open`,"POST",{})}catch(r){X(r.message)}},wo=async(r,x=!0)=>{R(!0),X("");try{let D=await me(`${q}/models/dir`,"POST",{dir:r,move:x});Q(D.storage||null),b(D.models||[]),ye(D.storage?.dir||"");let O=(D.moved||[]).length,Xe=(D.skipped||[]).length;ie(O||Xe?`\u5DF2\u8FC1\u79FB ${O} \u4E2A\u6A21\u578B${Xe?`\uFF0C${Xe} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(D){X(D.message)}finally{R(!1)}},Uo=async r=>{fe(`model:${r}`),X("");try{let x=await me(`${q}/models/remove`,"POST",{name:r});Q(x||null),b(x.models||[]),ie(`\u5DF2\u5220\u9664 ${r}`)}catch(x){X(x.message)}finally{fe("")}},to=P.length?P:[{name:ke.asrModel||"qwen3-asr-1.7b-8bit",ready:ne?.modelReady},{name:ke.translateModel||"hy-mt2-1.8b-4bit",ready:re?.localReady}],cn=async()=>{_e(!0);try{ze(await Me(`${q}/update?force=1`))}catch{ie("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{_e(!1)}},oo=async()=>{try{let x=(await navigator.mediaDevices.enumerateDevices()).filter(D=>D.kind==="audioinput");return Po(x),x}catch{return[]}},no=async()=>{lt("\u6B63\u5728\u8981\u4E00\u6B21\u97F3\u9891\u6743\u9650\u2026");try{let x=await navigator.mediaDevices.getUserMedia({audio:!0});for(let D of x.getTracks())D.stop()}catch(x){lt(`\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\uFF1A${x.message||x}`);return}let r=await oo();lt(r.length?`\u627E\u5230 ${r.length} \u4E2A\u97F3\u9891\u8F93\u5165\uFF0C\u9009\u865A\u62DF\u58F0\u5361\uFF08BlackHole / VB-Cable\uFF09`:"\u6CA1\u627E\u5230\u97F3\u9891\u8F93\u5165\u8BBE\u5907")},zt=r=>{Number.isFinite(Number(r.opacity))&&mo(Number(r.opacity)),Number.isFinite(Number(r.fontSize))&&vo(Number(r.fontSize)),Number.isFinite(Number(r.width))&&Et(Number(r.width)),window.clearTimeout(fo.current),fo.current=window.setTimeout(()=>{me(`${q}/live/settings`,"PUT",r).catch(x=>X(x.message))},400)},Bt=async()=>{fe("live"),X("");try{let r=it.find(D=>D.deviceId===c)?.label||"",x=await me(`${q}/live/settings`,"PUT",{deviceId:c,deviceLabel:r,saveOnStop:xt,source:Dt});B(x.deviceId||""),Xt(x.saveOnStop!==!1),It(x.source||"auto"),ie("\u5B9E\u65F6\u5B57\u5E55\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){X(r.message)}finally{fe("")}},Ft=r=>r.kind||(/asr|sensevoice|sherpa|moss/i.test(r.name)?"asr":/^hy-mt/i.test(r.name)?"translate":""),Ht=to.filter(r=>Ft(r)==="asr"&&r.ready!==!1),un=to.filter(r=>Ft(r)==="translate"&&r.ready!==!1),Bo=(r,x)=>{if(!x||r.some(O=>O.name===x))return r;let D=to.find(O=>O.name===x);return[{name:x,ready:D?D.ready!==!1:!1,kind:D?.kind||"",missing:!0},...r]},yo=Bo(Ht.length?Ht:Ho,Gt),mn=Bo(un.length?un:Ho,qe),vn=async()=>{fe("ui"),X("");try{let r=await me(`${q}/ui-settings`,"PUT",{showSidebarPanel:C.showSidebarPanel});h({showSidebarPanel:r.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:r})),ie("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){X(r.message)}finally{fe("")}},ko=async r=>{fe("import"),X("");try{let x=await me(`${q}/import/settings`,"PUT",{mode:r});E(D=>({...D,mode:x.mode})),ie("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(x){X(x.message)}finally{fe("")}},gn=async()=>{if(I.orphans&&window.confirm(`\u6E05\u7406 ${I.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){fe("imports"),X("");try{let r=await me(`${q}/imports/orphans`,"DELETE",{});E(x=>({...x,orphans:0,orphanBytes:0})),ie(`\u5DF2\u6E05\u7406 ${r.removed||0} \u4E2A\u6279\u6B21`)}catch(r){X(r.message)}finally{fe("")}}},Fo=async()=>{fe("transcribe"),X("");try{let r=je.split(/[\s,，、]+/).map(D=>D.trim()).filter(Boolean).slice(0,500),x=await me(`${q}/transcribe/settings`,"PUT",{provider:y,hotwords:r,chunkMinutes:Math.min(60,Math.max(1,Number(Ge)||15)),diarize:Ve,realtime:L});at((x.hotwords||[]).join(" ")),Qe(x.chunkMinutes||15),st(x.diarize!==!1),z(x.provider||"api"),x.runtime&&ve(x.runtime),ie("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){X(r.message)}finally{fe("")}},Ho=to,Wo=!!(sn&&M?.version&&M.version!==sn);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":a,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,en),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Wo?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",sn,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",M.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,bt?n.default.createElement("div",{className:"banner error",onClick:()=>X("")},bt):null,At?n.default.createElement("div",{className:"settings-message"},At):null,n.default.createElement("section",{className:`settings-card collapsible ${w?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>kt("envOpen",w,W),"aria-expanded":w,title:w?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},bo),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),w?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),M?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},M.platform?.osLabel," \xB7 ",M.platform?.arch," \xB7 ",M.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",M.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",M.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:pn},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:Ne,onClick:Nt},Ne?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),Oe?n.default.createElement("ul",{className:"setup-components"},Oe.checks.map(r=>n.default.createElement("li",{key:r.id,className:r.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},r.label),n.default.createElement("span",{className:"setup-component-detail"},r.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(M.components||[]).map(r=>n.default.createElement("li",{key:r.id,className:r.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},r.label),n.default.createElement("span",{className:"setup-component-detail"},r.detail),!r.ready&&r.bytes?n.default.createElement("span",{className:"setup-component-size"},rt(r.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:Te,onChange:r=>Se(r.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),Ee?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",rt(Ee.totalBytes)," \xB7 ",Ee.items.length," \u9879"),n.default.createElement("ul",null,Ee.items.map(r=>n.default.createElement("li",{key:r.id},n.default.createElement("span",null,r.label),n.default.createElement("span",null,r.bytes?rt(r.bytes):r.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:Ae||M.job?.status==="running",onClick:wt},Ae||M.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),M.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:dt},"\u53D6\u6D88"):null),M.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,M.job.stage||M.job.status),n.default.createElement("span",null,M.job.progress||0,"% \xB7 ",rt(M.job.bytes)," / ",rt(M.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${M.job.progress||0}%`}})),M.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",M.job.error):null,M.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},M.job.warning):null,M.job.status==="done"&&(!M.job.summary||!M.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,M.job.status==="done"&&M.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",M.job.modelsDir):null,Array.isArray(M.job.summary)&&M.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},M.job.summary.map(r=>n.default.createElement("li",{key:r.id},r.label," \xB7 ",r.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":rt(r.bytes),r.source?` \xB7 ${r.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5B9E\u65F6\u5B57\u5E55\uFF08\u7CFB\u7EDF\u58F0\u97F3\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u542C\u7535\u8111\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\uFF09\uFF0C\u4E00\u53E5\u4E00\u53E5\u6EDA\u51FA\u4E2D\u6587\uFF0C\u8DDF\u64AD\u5BA2\u7684\u8FDB\u5EA6\u65E0\u5173\u3002 \u5148\u5728\u7CFB\u7EDF\u91CC\u5EFA\u4E00\u4E2A\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF0C\u628A\u58F0\u97F3\u540C\u65F6\u9001\u5230\u626C\u58F0\u5668\u548C\u865A\u62DF\u58F0\u5361\uFF1AmacOS \u7528 BlackHole\uFF0C Windows \u7528 VB-Cable \u6216\u300C\u7ACB\u4F53\u58F0\u6DF7\u97F3\u300D\u3002\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u91C7\u96C6\u65B9\u5F0F"),n.default.createElement("select",{value:Dt,onChange:r=>It(r.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\uFF08\u4F18\u5148\u7CFB\u7EDF\u97F3\u9891\uFF0C\u4E0D\u9700\u8981\u865A\u62DF\u58F0\u5361\uFF09"),n.default.createElement("option",{value:"tap"},"\u53EA\u770B\u7CFB\u7EDF\u97F3\u9891\uFF08macOS 14.2+\uFF09"),n.default.createElement("option",{value:"browser"},"\u865A\u62DF\u58F0\u5361 / \u9EA6\u514B\u98CE\uFF08BlackHole\uFF09"))),To?null:n.default.createElement("p",{className:"settings-hint"},"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u7CFB\u7EDF\u97F3\u9891\u91C7\u96C6\uFF08\u9700\u8981 macOS 14.2+\uFF09\uFF0C\u53EA\u80FD\u7528\u865A\u62DF\u58F0\u5361\u6216\u9EA6\u514B\u98CE\u3002"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F93\u5165\u8BBE\u5907"),n.default.createElement("select",{value:c,onChange:r=>B(r.target.value)},n.default.createElement("option",{value:""},"\u81EA\u52A8\u9009\uFF08\u4F18\u5148\u865A\u62DF\u58F0\u5361\uFF09"),it.map((r,x)=>n.default.createElement("option",{key:r.deviceId||x,value:r.deviceId},r.label||`\u97F3\u9891\u8F93\u5165 ${x+1}`)))),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:xt,onChange:r=>Xt(r.target.checked)}),n.default.createElement("span",null,"\u505C\u6B62\u65F6\u95EE\u6211\u8981\u4E0D\u8981\u628A\u8FD9\u6B21\u5B57\u5E55\u5B58\u4E0B\u6765"))),n.default.createElement("div",{className:"settings-fields",style:{marginTop:10}},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6846\u7684\u4E0D\u900F\u660E\u5EA6"),n.default.createElement("input",{type:"range",min:"15",max:"100",step:"1",value:Math.round(uo*100),onChange:r=>zt({opacity:Number(r.target.value)/100}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},Math.round(uo*100),"%")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5B57\u53F7"),n.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:Lt,onChange:r=>zt({fontSize:Number(r.target.value)}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},Lt)),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6846\u7684\u5BBD\u5EA6"),n.default.createElement("input",{type:"range",min:"380",max:"1200",step:"10",value:go,onChange:r=>zt({width:Number(r.target.value)}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},go)),n.default.createElement("p",{className:"settings-hint",style:{margin:0}},"\u53EA\u5F71\u54CD\u5C4F\u5E55\u4E0A\u90A3\u5757\u5B57\u5E55\u6846\uFF0C\u62D6\u52A8\u5373\u65F6\u751F\u6548\uFF1B\u6587\u5B57\u59CB\u7EC8\u4E0D\u900F\u660E\uFF0C\u53EA\u6709\u5E95\u677F\u4F1A\u53D8\u901A\u900F\u3002")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:no},"\u68C0\u6D4B\u8BBE\u5907"),n.default.createElement("button",{className:"settings-btn primary",onClick:Bt,disabled:we==="live"},we==="live"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"),n.default.createElement("span",{className:"settings-status"},Io||(it.length?`${it.length} \u4E2A\u97F3\u9891\u8F93\u5165`:"\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u8BFB\u53D6\u8BBE\u5907\u540D")))),n.default.createElement("section",{className:`settings-card history-card ${$?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>yt(),"aria-expanded":$,title:$?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",s.length," \u6761",v?` \xB7 ${rt(v)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),$?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",s.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),s.length?n.default.createElement("ul",{className:"history-list"},s.map(r=>n.default.createElement("li",{key:r.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},r.title),n.default.createElement("span",{className:"history-meta"},r.artist?`${r.artist} \xB7 `:"",r.duration?`${Ia(r.duration)} \xB7 `:"",r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines," \u884C",r.translations?.length?` \xB7 \u5DF2\u7FFB ${r.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},La(r.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ao,disabled:!p},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},p?`${p}${v?` \xB7 ${rt(v)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:y,onChange:r=>z(r.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),y==="api"?n.default.createElement("p",{className:"settings-status"},ne?.api?.hasKey?"\u7528\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u91CC\u90A3\u628A API key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 API key \u2014\u2014 \u53BB\u4E0B\u9762\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u5C31\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},ne?.installed&&ne?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${ne.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:je,onChange:r=>at(r.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:Ge,onChange:r=>Qe(r.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:L,onChange:r=>G(r.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Ve,onChange:r=>st(r.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Fo,disabled:we==="transcribe"},we==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),y==="local"&&!(ne?.installed&&ne?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:he,disabled:Ae},Ae?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:I.mode==="copy",onChange:()=>ko("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:I.mode==="reference",onChange:()=>ko("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:gn,disabled:we==="imports"||!I.orphans},I.orphans?`\u6E05\u7406 ${I.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(I.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7FFB\u8BD1"),n.default.createElement("p",{className:"settings-hint"},"\u9ED8\u8BA4\u7528 DSH \u91CC\u6B63\u5728\u7528\u7684\u90A3\u4E2A\u6A21\u578B\u7FFB\u8BD1\uFF0C\u4E0D\u7528\u5728\u8FD9\u91CC\u518D\u586B\u4E00\u904D\u5BC6\u94A5\u548C\u6A21\u578B\u540D\u3002\u60F3\u79BB\u7EBF\u5C31\u5207\u6210\u672C\u5730\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u7528"),n.default.createElement("select",{value:Ke,onChange:r=>dn(r.target.value)},n.default.createElement("option",{value:"dsh"},"DSH \u5F53\u524D\u6A21\u578B"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u79BB\u7EBF\uFF09"),n.default.createElement("option",{value:"api"},"\u81EA\u5B9A\u4E49 API"))),Ke==="dsh"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},re?.dshReady?re.dshLabel:"DSH \u91CC\u8FD8\u6CA1\u6709\u9009\u6A21\u578B")),Ke==="local"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u672C\u5730\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},re?.localReady?`${re.localModel}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u8FD8\u6CA1\u4E0B\u8F7D\u672C\u5730\u7FFB\u8BD1\u6A21\u578B")),(Ke==="api"||y==="api")&&n.default.createElement(n.default.Fragment,null,n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Jt,onChange:r=>pt(r.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),Eo||!ce.length?n.default.createElement("input",{value:He,onChange:r=>mt(r.target.value),placeholder:"deepseek-chat"}):n.default.createElement("select",{value:ce.includes(He)?He:He?"__saved":"",onChange:r=>mt(r.target.value)},!ce.includes(He)&&He&&n.default.createElement("option",{value:"__saved"},He,"\uFF08\u5F53\u524D\uFF0C\u5217\u8868\u91CC\u6CA1\u6709\uFF09"),ce.map(r=>n.default.createElement("option",{key:r,value:r},r))),n.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:()=>Ut(),disabled:Re},Re?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u6A21\u578B\u5217\u8868")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:Yt,onChange:r=>Zt(r.target.value),placeholder:re?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${re.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."})))),n.default.createElement("div",{className:"settings-actions"},(Ke==="api"||y==="api")&&n.default.createElement("button",{className:"settings-btn",onClick:Rt,disabled:we==="api"},we==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},Ke==="dsh"?"\u8DDF\u968F DSH \u7684\u6A21\u578B\u9009\u62E9\uFF0C\u6362\u6A21\u578B\u5728 DSH \u8BBE\u7F6E\u91CC\u6539":Ke==="local"?"\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1":"\u8D70\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5BC6\u94A5"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:C.showSidebarPanel,onChange:r=>h({showSidebarPanel:r.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:vn,disabled:we==="ui"},we==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:`settings-card collapsible ${V?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>kt("modelsOpen",V,A),"aria-expanded":V,title:V?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},Oo),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),V?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},Ea(_),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),_?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:_.dir},_.dir),n.default.createElement("span",{className:"model-path-size"},Aa(_)," \xB7 \u5171 ",rt(_.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:oe,onChange:r=>ye(r.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:pe||oe.trim()===_.dir,onClick:()=>wo(oe,!0)},pe?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:eo},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),_.projectDir&&_.dir!==_.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:pe,onClick:()=>wo(_.projectDir,!0)},Oa(_)):null,_.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:pe,onClick:()=>wo("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),P.length?n.default.createElement("ul",{className:"model-list"},P.map(r=>n.default.createElement("li",{key:r.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},r.name),n.default.createElement("span",{className:"model-meta"},r.kindLabel," \xB7 ",rt(r.bytes),r.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",r.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:r.inUse||we===`model:${r.name}`,title:r.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${r.name}`,onClick:()=>Uo(r.name)},we===`model:${r.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,ne?.modelProblem?n.default.createElement("p",{className:"settings-stale"},ne.modelProblem):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Gt,onChange:r=>Qt(r.target.value)},yo.map(r=>n.default.createElement("option",{key:r.name,value:r.name},r.name,r.missing?"\uFF08\u5F53\u524D\uFF0C\u4E0D\u662F\u8F6C\u5199\u6A21\u578B\uFF09":r.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:`settings-status ${ne?.modelProblem?"is-warn":""}`},ne?.modelProblem?"\u4E0D\u80FD\u7528":ne?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:qe,onChange:r=>ho(r.target.value)},mn.map(r=>n.default.createElement("option",{key:r.name,value:r.name},r.name,r.missing?"\uFF08\u5F53\u524D\uFF0C\u4E0D\u662F\u7FFB\u8BD1\u6A21\u578B\uFF09":r.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},re?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:jo,disabled:we==="models"},we==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},j?.current?`v${j.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},j?.latest?`v${j.latest}`:j?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},j?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":j?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${j.error}\uFF09\u3002`:j?.latest?j?.current&&j?.latest&&j.current!==j.latest&&j.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:cn,disabled:We},We?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),j?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(j.checkedAt).toLocaleString()):null))))}function Sr({size:a=16}){return ut.default.createElement("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},ut.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),ut.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ut.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),ut.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ut.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ja(){let a=an();return ut.default.createElement("div",{className:"podwave-root","data-pw-theme":a},ut.default.createElement("style",null,en),ut.default.createElement(Un,null))}function Ua(a){a.slots.inject("main",()=>a.slots.register({name:"main",key:"podwave"},ja)),a.slots.inject("settings.section",()=>a.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Bn));let s=null,i=!0,p=!1,u=!1,v="podwave-hide-nav",N=f=>{if(typeof document>"u")return;let w=document.getElementById(v);f&&!w?(w=document.createElement("style"),w.id=v,w.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(w)):!f&&w&&w.remove()};a.slots.inject("sidebar.panellist",()=>{if(p=!0,!(!i||s))return s=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Sr),u=!0,()=>{s=null,u=!1}});let $=f=>{if(N(!f),i=f,f&&p&&!s)s=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Sr),u=!0;else if(!f&&s){let w=s;s=null;try{typeof w?.dispose=="function"?w.dispose():typeof w=="function"?w():typeof w?.dispose>"u"&&typeof w?.unregister=="function"&&w.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>$(f?.showSidebarPanel!==!1)).catch(()=>$(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{$(f?.detail?.showSidebarPanel!==!1)})}var Ba=["slots"];

return module.exports}})
