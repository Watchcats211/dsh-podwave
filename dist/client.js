window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ga=Object.create;var Ro=Object.defineProperty;var fa=Object.getOwnPropertyDescriptor;var ha=Object.getOwnPropertyNames;var xa=Object.getPrototypeOf,ba=Object.prototype.hasOwnProperty;var wa=(r,s)=>{for(var i in s)Ro(r,i,{get:s[i],enumerable:!0})},gr=(r,s,i,p)=>{if(s&&typeof s=="object"||typeof s=="function")for(let u of ha(s))!ba.call(r,u)&&u!==i&&Ro(r,u,{get:()=>s[u],enumerable:!(p=fa(s,u))||p.enumerable});return r};var rt=(r,s,i)=>(i=r!=null?ga(xa(r)):{},gr(s||!r||!r.__esModule?Ro(i,"default",{value:r,enumerable:!0}):i,r)),ya=r=>gr(Ro({},"__esModule",{value:!0}),r);var Wa={};wa(Wa,{apply:()=>Fa,inject:()=>Ha});module.exports=ya(Wa);var vt=rt(require("react"),1);var en=`
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
`;var t=rt(require("react"),1);var B=rt(require("react"),1);function se({name:r,size:s=18}){let i={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return B.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},B.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return B.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},B.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),B.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return B.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},B.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),B.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return B.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},B.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),B.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return B.default.createElement("svg",{...i},B.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),B.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),B.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),B.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return B.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},B.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),B.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),B.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),B.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),B.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));case"close":return B.default.createElement("svg",{...i},B.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));default:return null}}var Pn=rt(require("react"),1);function Ee(r){if(!Number.isFinite(r)||r<0)return"0:00";let s=Math.floor(r),i=Math.floor(s/3600),p=Math.floor(s%3600/60),u=s%60;return i>0?`${i}:${String(p).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${p}:${String(u).padStart(2,"0")}`}function Sn(r){if(!r)return"\u2014";let s=Math.floor(r/3600),i=Math.round(r%3600/60);return s>0?`${s} \u5C0F\u65F6 ${i} \u5206`:`${Math.max(1,i)} \u5206\u949F`}function Mn(r){if(!r)return"";let s=new Date(r),i=Date.now()-r;return i<60*1e3?"\u521A\u521A":i<3600*1e3?`${Math.floor(i/6e4)} \u5206\u949F\u524D`:i<1440*60*1e3?`${Math.floor(i/36e5)} \u5C0F\u65F6\u524D`:i<10080*60*1e3?`${Math.floor(i/864e5)} \u5929\u524D`:`${s.getMonth()+1} \u6708 ${s.getDate()} \u65E5`}function fr(r){let i=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return i?i[0].toUpperCase():"\u266B"}function tn(r){let s=String(r).split("/").filter(Boolean);return s.length<=2?`/${s.join("/")}`:`${s.slice(-2).join("/")}`}var Na="/podwave/api";function po({item:r,size:s=44,className:i=""}){let p={width:s,height:s};if(r&&r.hasCover){let u=r.coverAt?`?v=${r.coverAt}`:"";return Pn.default.createElement("img",{className:`cover ${i}`,style:p,src:`${Na}/episodes/${r.id}/cover${u}`,alt:"",loading:"lazy",draggable:!1})}return Pn.default.createElement("div",{className:`cover cover-fallback ${i}`,style:p,"aria-hidden":!0},fr(r&&r.title))}var g=rt(require("react"),1);var Se=rt(require("react"),1);function ht({trigger:r,title:s,align:i="end",placement:p="down",className:u="",buttonClassName:v="",disabled:N=!1,children:C}){let[f,w]=(0,Se.useState)(!1),H=(0,Se.useRef)(null);(0,Se.useEffect)(()=>{if(!f)return;let O=x=>{H.current?.contains(x.target)||w(!1)},T=x=>{x.key==="Escape"&&w(!1)};return document.addEventListener("pointerdown",O),document.addEventListener("keydown",T),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",T)}},[f]),(0,Se.useEffect)(()=>{N&&f&&w(!1)},[N,f]);let _=["pop-panel",i==="start"?"is-start":"",p==="up"?"is-up":""].filter(Boolean).join(" ");return Se.default.createElement("span",{className:`pop-wrap ${u}`,ref:H},Se.default.createElement("button",{type:"button",className:v||"pop-btn",onClick:()=>w(O=>!O),title:s,disabled:N,"aria-haspopup":"menu","aria-expanded":f},r),f?Se.default.createElement("span",{className:_,role:"menu"},C({close:()=>w(!1)})):null)}function Fe({children:r,hint:s,checked:i=!1,danger:p=!1,disabled:u=!1,onSelect:v}){let N=["pop-item",i?"is-on":"",p?"is-danger":""].filter(Boolean).join(" ");return Se.default.createElement("button",{type:"button",className:N,role:i?"menuitemcheckbox":"menuitem","aria-checked":i||void 0,disabled:u,onClick:v},Se.default.createElement("span",null,r),s?Se.default.createElement("span",{className:"pop-hint"},s):null)}function Tn({children:r,hint:s,href:i,onSelect:p}){return Se.default.createElement("a",{className:"pop-item",role:"menuitem",href:i,download:!0,onClick:p},Se.default.createElement("span",null,r),s?Se.default.createElement("span",{className:"pop-hint"},s):null)}var So=rt(require("react"),1);function Mo({value:r,onChange:s,compact:i=!1}){let p=Number.isFinite(Number(r))?Number(r):15;return So.default.createElement("label",{className:`sub-size ${i?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},So.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),So.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:p,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:u=>s(Number(u.target.value))}),So.default.createElement("span",{className:"sub-size-value"},p))}var hr="/podwave/api";function on({transcript:r,status:s,progress:i,stage:p,chunks:u,queued:v,elapsed:N,error:C,position:f,onSeek:w,onClose:H,onStart:_,onCancel:O,target:T,job:x,onChangeTarget:W,onTranslate:Q,onRetranslate:oe=null,onRetranslateLine:Ne=null,onOpenSettings:ce,inline:R=!1,editingId:ze=null,draft:Y="",onDraftChange:ne,onEditLine:fe,onSaveLine:re,onCancelEdit:he,onSplitLine:S,onMergeLine:h,onValidate:I,onResegment:E,issues:P=[],fontSize:we=15,onFontSize:Oe=null,width:De=null,height:Ae=null,onResize:ue=null}){let $e=(0,g.useRef)(null),F=(0,g.useRef)(null),Ie=(0,g.useRef)(null),Pe=(0,g.useRef)(null),[je,Z]=(0,g.useState)(!1),A=r?.lines?.findIndex(y=>f>=y.start&&f<y.end)??-1;(0,g.useEffect)(()=>{if(A<0||!$e.current)return;$e.current.querySelector(`[data-seg="${A}"]`)?.scrollIntoView({block:"nearest"})},[A]);let Ce=y=>{let z=Pe.current;if(!z)return null;let L=y.clientX-z.startX,G=y.clientY-z.startY,c=Math.max(320,window.innerWidth-60),U=Math.max(220,window.innerHeight-(R?160:140));return R?{width:null,height:Math.round(Math.min(U,Math.max(240,z.height+G)))}:{width:Math.round(Math.min(c,Math.max(320,z.width-L))),height:Math.round(Math.min(U,Math.max(200,z.height-G)))}},Ve=y=>{if(y.button!==void 0&&y.button!==0)return;let z=Ie.current;if(!z||!ue)return;y.preventDefault();let L=z.getBoundingClientRect();Pe.current={startX:y.clientX,startY:y.clientY,width:L.width,height:L.height},y.currentTarget.setPointerCapture?.(y.pointerId)},Ke=y=>{if(!Pe.current)return;let z=Ce(y);z&&ue(z.width,z.height,!1)},Ue=y=>{if(!Pe.current)return;let z=Ce(y);Pe.current=null,y.currentTarget.releasePointerCapture?.(y.pointerId),z&&ue(z.width,z.height,!0)},it=s==="queued"||s==="running",et=x?.status==="running"||x?.status==="queued",tt=x?.missing??0,qe=et?`\u7FFB\u8BD1\u4E2D${x?.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""}`:x?.status==="partial"?"\u7EED\u7FFB":x?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",lt=async()=>{let z=(r?.lines||[]).map(L=>{let G=Ee(L.start),c=T?L.translations?.[T]:"";return c?`${G} ${L.text}
${" ".repeat(G.length+1)}${c}`:`${G} ${L.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(z);else{let L=document.createElement("textarea");L.value=z,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L)}Z(!0),setTimeout(()=>Z(!1),1600)}catch{Z(!1)}};return g.default.createElement("section",{ref:Ie,className:`transcript-panel ${R?"inline":""} ${Ae?"is-sized":""}`,style:{"--sub-size":`${we}px`,width:!R&&De?`${De}px`:void 0,height:Ae?`${Ae}px`:void 0,maxHeight:Ae?"none":void 0}},g.default.createElement("header",{className:"transcript-head"},g.default.createElement("h3",null,"\u5B57\u5E55"),r?g.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,g.default.createElement("div",{className:"transcript-actions"},g.default.createElement("select",{className:"tr-select",value:T,onChange:y=>W(y.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},g.default.createElement("option",{value:""},"\u5BF9\u7167"),g.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),g.default.createElement("option",{value:"en"},"English")),Oe?g.default.createElement(ht,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${we}px`,align:"end"},()=>g.default.createElement("span",{className:"pop-fs"},g.default.createElement(Mo,{value:we,onChange:Oe}))):null,r&&T&&Q?et?g.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},qe):tt>0?g.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Q,title:`\u8FD8\u6709 ${tt} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},qe):null:null,g.default.createElement(ht,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:y})=>g.default.createElement(g.default.Fragment,null,r?g.default.createElement(Fe,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{y(),I()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&E?g.default.createElement(Fe,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{y(),E()}},"\u6574\u7406\u65AD\u53E5"):null,r&&T&&oe?g.default.createElement(Fe,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{y(),oe()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,g.default.createElement(Fe,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{y(),ce()}},"\u8BBE\u7F6E"))),r?g.default.createElement(ht,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:y})=>g.default.createElement(g.default.Fragment,null,g.default.createElement(Tn,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${hr}/episodes/${r.id}/transcript/export?format=srt`,onSelect:y},"\u5B57\u5E55\u6587\u4EF6 .srt"),g.default.createElement(Tn,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${hr}/episodes/${r.id}/transcript/export?format=md`,onSelect:y},"\u6587\u7A3F .md"),g.default.createElement(Fe,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:lt},je?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,R?null:g.default.createElement("button",{className:"transcript-close",onClick:H,title:"\u6536\u8D77"},"\xD7"))),g.default.createElement("div",{className:"transcript-body",ref:$e},r&&it?g.default.createElement("div",{className:"tr-strip"},g.default.createElement("span",null,s==="queued"?"\u6392\u961F\u4E2D\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":p==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min((u.done||0)+1,u.total)}/${u.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),O?g.default.createElement("button",{className:"seg-tool",onClick:O},"\u53D6\u6D88"):null):null,r&&P?.length?g.default.createElement("div",{className:"tr-issues"},P.slice(0,5).map(y=>g.default.createElement("div",{key:y},"\xB7 ",y)),P.length>5?g.default.createElement("div",null,"\u2026\u5171 ",P.length," \u6761"):null):null,x?.status==="running"||x?.status==="queued"?g.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",x.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""):null,x?.status==="error"?g.default.createElement("div",{className:"tr-running err"},x.error,"\u5F85\u7FFB ",x.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,x?.status==="partial"?g.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",x.translated??0,"/",x.total??0," \u884C\uFF0C\u8FD8\u7F3A ",x.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,x?.status==="none"&&T&&r&&(x.missing??0)>0?g.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",x.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,r?r.lines.map((y,z)=>g.default.createElement("div",{key:y.id,"data-seg":z,className:`seg-row ${z===A?"active":""} ${ze===y.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ee(y.start)}`,onClick:()=>w(y.start),onKeyDown:L=>{(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),w(y.start))}},g.default.createElement("span",{className:"seg-time"},Ee(y.start)),ze===y.id?g.default.createElement("span",{className:"seg-edit",onClick:L=>L.stopPropagation()},g.default.createElement("textarea",{ref:F,value:Y,rows:Math.min(4,Math.max(2,Math.ceil((Y.length||1)/40))),onChange:L=>ne(L.target.value),onKeyDown:L=>{L.key==="Enter"&&(L.metaKey||L.ctrlKey)&&re(y.id),L.key==="Escape"&&he()}}),g.default.createElement("span",{className:"seg-edit-actions"},g.default.createElement("button",{className:"seg-tool",onClick:()=>re(y.id)},"\u4FDD\u5B58"),g.default.createElement("button",{className:"seg-tool",onClick:()=>S(y.id,F.current?.selectionStart??Math.floor(Y.length/2))},"\u62C6\u5206"),T&&Ne?g.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>Ne(y)},"\u91CD\u7FFB"):null,g.default.createElement("button",{className:"seg-tool",onClick:he},"\u53D6\u6D88"))):g.default.createElement(g.default.Fragment,null,y.speaker!=null?g.default.createElement("span",{className:`seg-speaker spk-${y.speaker%5}`},r.speakers?.[y.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${y.speaker+1}`):null,g.default.createElement("span",{className:"seg-text"},y.text,y.translations?.[T]?g.default.createElement("span",{className:"seg-trans"},y.translations[T]):null),g.default.createElement("span",{className:"seg-tools"},g.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:L=>{L.stopPropagation(),fe(y)}},"\u270E"),z<r.lines.length-1?g.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:L=>{L.stopPropagation(),h(y.id)}},"\u21E3"):null)))):it?g.default.createElement("div",{className:"transcript-status"},s==="queued"?"\u6392\u961F\u4E2D\u2026":p==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((N||0)/1e3)+" \u79D2",i?.percent!=null?g.default.createElement("span",{className:"tx-progress"},g.default.createElement("span",{style:{width:`${i.percent}%`}})):null,g.default.createElement("br",null),g.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),g.default.createElement("br",null),O?g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:O},"\u53D6\u6D88\u8F6C\u5199"):null):C?g.default.createElement("div",{className:"transcript-status"},g.default.createElement("span",{className:"err"},C),g.default.createElement("br",null),g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:_},"\u91CD\u8BD5")):g.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",g.default.createElement("br",null),g.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:_},"\u5F00\u59CB\u8F6C\u5199"))),ue?g.default.createElement(g.default.Fragment,null,R?null:g.default.createElement(g.default.Fragment,null,g.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:Ve,onPointerMove:Ke,onPointerUp:Ue,onPointerCancel:Ue,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),g.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:Ve,onPointerMove:Ke,onPointerUp:Ue,onPointerCancel:Ue,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),g.default.createElement("span",{className:`transcript-resize ${R?"is-inline":""}`,onPointerDown:Ve,onPointerMove:Ke,onPointerUp:Ue,onPointerCancel:Ue,onDoubleClick:()=>ue(null,null,!0),title:R?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var J=rt(require("react"),1);function Dn({line:r,target:s,fontSize:i,onFontSize:p,x:u,y:v,width:N,height:C,onMove:f,onResize:w,onClose:H,onSeek:_,speakerLabel:O,status:T}){let x=(0,J.useRef)(null),W=(0,J.useRef)(null),Q=(0,J.useRef)(null),oe=(0,J.useCallback)((S,h)=>{let I=x.current,E=I?.offsetWidth||420,P=I?.offsetHeight||120,we=Math.max(8,window.innerWidth-E-8),Oe=Math.max(8,window.innerHeight-P-8);return{x:Math.min(we,Math.max(8,S)),y:Math.min(Oe,Math.max(8,h))}},[]),Ne=(0,J.useCallback)(S=>{if(S.button!==void 0&&S.button!==0)return;let h=x.current;if(!h)return;let I=h.getBoundingClientRect();W.current={dx:S.clientX-I.left,dy:S.clientY-I.top},S.currentTarget.setPointerCapture?.(S.pointerId)},[]),ce=(0,J.useCallback)(S=>{let h=W.current;if(!h)return;let I=oe(S.clientX-h.dx,S.clientY-h.dy);f(I.x,I.y,!1)},[oe,f]),R=(0,J.useCallback)(S=>{let h=W.current;if(!h)return;W.current=null,S.currentTarget.releasePointerCapture?.(S.pointerId);let I=oe(S.clientX-h.dx,S.clientY-h.dy);f(I.x,I.y,!0)},[oe,f]),ze=(0,J.useCallback)(S=>{if(S.button!==void 0&&S.button!==0)return;S.stopPropagation();let h=x.current;if(!h)return;let I=h.getBoundingClientRect();Q.current={startX:S.clientX,startY:S.clientY,width:I.width,height:I.height},S.currentTarget.setPointerCapture?.(S.pointerId)},[]),Y=(0,J.useCallback)(S=>{let h=Q.current;if(!h)return null;let I=Math.max(240,window.innerWidth-(u==null?16:u+8)),E=Math.max(92,window.innerHeight-(v==null?16:v+8));return{width:Math.round(Math.min(I,Math.max(240,h.width+(S.clientX-h.startX)))),height:Math.round(Math.min(E,Math.max(92,h.height+(S.clientY-h.startY))))}},[u,v]),ne=(0,J.useCallback)(S=>{if(!Q.current)return;S.stopPropagation();let h=Y(S);h&&w(h.width,h.height,!1)},[w,Y]),fe=(0,J.useCallback)(S=>{if(!Q.current)return;S.stopPropagation();let h=Y(S);Q.current=null,S.currentTarget.releasePointerCapture?.(S.pointerId),h&&w(h.width,h.height,!0)},[w,Y]);(0,J.useEffect)(()=>{let S=h=>{h.key==="Escape"&&H()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[H]);let re=r&&s?r.translations?.[s]:"",he=T==="queued"||T==="running";return J.default.createElement("div",{ref:x,className:`caption-overlay ${C?"is-sized":""}`,style:{left:u??void 0,top:v??void 0,right:u==null?void 0:"auto",bottom:v==null?void 0:"auto",width:N?`${N}px`:void 0,height:C?`${C}px`:void 0,"--sub-size":`${i||15}px`}},J.default.createElement("div",{className:"caption-head",onPointerDown:Ne,onPointerMove:ce,onPointerUp:R,onPointerCancel:R,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},J.default.createElement(se,{name:"wave",size:13}),J.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),J.default.createElement(Mo,{value:i,onChange:p,compact:!0}),J.default.createElement("button",{className:"caption-close",onClick:H,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),J.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?_(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:S=>{r&&(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),_(r.start))},title:r?`\u8DF3\u5230 ${Ee(r.start)}`:void 0},r?J.default.createElement(J.default.Fragment,null,O?J.default.createElement("span",{className:"caption-speaker"},O):null,J.default.createElement("div",{className:"caption-text"},r.text),re?J.default.createElement("div",{className:"caption-trans"},re):null):J.default.createElement("div",{className:"caption-hint"},he?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),J.default.createElement("span",{className:"caption-resize",onPointerDown:ze,onPointerMove:ne,onPointerUp:fe,onPointerCancel:fe,onDoubleClick:()=>w(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var D=rt(require("react"),1);function In({lines:r=[],status:s="listening",error:i="",device:p="",count:u=0,elapsed:v=0,fontSize:N=15,native:C=!1,level:f=0,hint:w="",opacity:H=.78,styleSize:_=18,width:O=780,onStyle:T,onStop:x,onSave:W,onClose:Q}){let oe=(0,D.useRef)(null),Ne=(0,D.useRef)(null),ce=(0,D.useRef)(null),[R,ze]=(0,D.useState)(null),Y=r.slice(-6);(0,D.useEffect)(()=>{let h=oe.current;h&&(h.scrollTop=h.scrollHeight)},[r.length]);let ne=(h,I)=>{let E=Ne.current,P=E?.offsetWidth||520,we=E?.offsetHeight||160;return{x:Math.min(Math.max(8,h),Math.max(8,window.innerWidth-P-8)),y:Math.min(Math.max(8,I),Math.max(8,window.innerHeight-we-8))}},fe=h=>{if(h.button!==void 0&&h.button!==0)return;let I=Ne.current;if(!I)return;let E=I.getBoundingClientRect();ce.current={dx:h.clientX-E.left,dy:h.clientY-E.top},h.currentTarget.setPointerCapture?.(h.pointerId)},re=h=>{let I=ce.current;I&&ze(ne(h.clientX-I.dx,h.clientY-I.dy))},he=h=>{ce.current&&(ce.current=null,h.currentTarget.releasePointerCapture?.(h.pointerId))},S=s==="asking";return D.default.createElement("div",{ref:Ne,className:"live-caption",style:R?{left:R.x,top:R.y,bottom:"auto",transform:"none"}:void 0},D.default.createElement("div",{className:"live-caption-head",onPointerDown:fe,onPointerMove:re,onPointerUp:he,title:"\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u4F4D\u7F6E"},D.default.createElement("span",{className:"live-caption-dot","data-live":s==="listening"?"on":"off","aria-hidden":"true"}),D.default.createElement("span",{className:"live-caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),D.default.createElement("span",{className:"live-caption-meta"},s==="starting"?"\u6B63\u5728\u6253\u5F00\u8BBE\u5907\u2026":null,s==="listening"?`${p||"\u7CFB\u7EDF\u58F0\u97F3"} \xB7 ${u} \u53E5 \xB7 ${Ee(v)}`:null,s==="saving"?"\u6B63\u5728\u4FDD\u5B58\u2026":null,S?`\u5DF2\u505C\u6B62 \xB7 \u5171 ${u} \u53E5`:null),D.default.createElement("button",{className:"icon-btn live-caption-close",title:S?"\u5173\u6389":"\u505C\u6B62\u5E76\u5173\u95ED",onClick:S?Q:x},D.default.createElement(se,{name:"close",size:14}))),D.default.createElement("div",{className:`live-meter ${f>.004?"is-live":""}`,title:"\u8F93\u5165\u7535\u5E73\uFF08\u8BF4\u8BDD\u65F6\u4F1A\u8DF3\uFF09"},D.default.createElement("span",{style:{width:`${Math.min(100,Math.max(2,f*400))}%`}})),D.default.createElement("div",{className:"live-caption-body",ref:oe},C?D.default.createElement("p",{className:"live-caption-note"},"\u5B57\u5E55\u753B\u5728\u5C4F\u5E55\u4E0A\u7684\u72EC\u7ACB\u5C0F\u7A97\u91CC\uFF08\u7F6E\u9876\uFF0C\u4E0D\u4F1A\u88AB\u522B\u7684\u5E94\u7528\u6321\u4F4F\uFF09\u3002\u8FD9\u91CC\u7559\u7740\u63A7\u5236\uFF1A\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u8FD9\u4E2A\u9762\u677F\uFF0C\u70B9\u300C\u505C\u6B62\u300D\u7ED3\u675F\u3002"):Y.length?Y.map(h=>{let I=h.translations?.zh||h.translations?.en||"";return D.default.createElement("div",{key:h.id,className:"live-line"},D.default.createElement("p",{className:"live-line-text",style:{fontSize:N}},h.text),I?D.default.createElement("p",{className:"live-line-tr",style:{fontSize:Math.round(N*.84)}},I):null)}):D.default.createElement("p",{className:"live-caption-empty"},s==="starting"?"\u6B63\u5728\u6253\u5F00\u97F3\u9891\u8BBE\u5907\u2026":"\u7B49\u7740\u542C\u2026",s==="listening"?" \u64AD\u653E\u4EFB\u4F55\u58F0\u97F3\uFF0C\u5B57\u5E55\u4F1A\u4E00\u53E5\u4E00\u53E5\u51FA\u73B0\u3002":"")),C?D.default.createElement("div",{className:"live-style"},D.default.createElement("label",{title:"\u53EA\u6539\u5E95\u677F\u900F\u660E\u5EA6\uFF0C\u6587\u5B57\u59CB\u7EC8\u6E05\u6670"},D.default.createElement("span",null,"\u4E0D\u900F\u660E\u5EA6"),D.default.createElement("input",{type:"range",min:"15",max:"100",step:"1",value:Math.round(H*100),onChange:h=>T?.({opacity:Number(h.target.value)/100})}),D.default.createElement("span",{className:"live-style-value"},Math.round(H*100),"%")),D.default.createElement("label",null,D.default.createElement("span",null,"\u5B57\u53F7"),D.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:_,onChange:h=>T?.({fontSize:Number(h.target.value)})}),D.default.createElement("span",{className:"live-style-value"},_)),D.default.createElement("label",null,D.default.createElement("span",null,"\u5BBD\u5EA6"),D.default.createElement("input",{type:"range",min:"380",max:"1200",step:"10",value:O,onChange:h=>T?.({width:Number(h.target.value)})}),D.default.createElement("span",{className:"live-style-value"},O))):null,w&&!i?D.default.createElement("p",{className:"live-caption-note"},w):null,i?D.default.createElement("p",{className:"live-caption-error"},i):null,D.default.createElement("div",{className:"live-caption-foot"},S?D.default.createElement(D.default.Fragment,null,D.default.createElement("span",{className:"live-caption-ask"},"\u4FDD\u5B58\u8FD9\u6B21\u5B57\u5E55\uFF1F"),D.default.createElement("button",{className:"btn ghost",onClick:()=>W(!1)},"\u4E0D\u7528"),D.default.createElement("button",{className:"btn primary",onClick:()=>W(!0)},"\u4FDD\u5B58")):D.default.createElement(D.default.Fragment,null,D.default.createElement("span",{className:"live-caption-tip"},"\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6"),D.default.createElement("button",{className:"btn ghost",onClick:x,disabled:s==="saving"},"\u505C\u6B62"))))}function En(r){if(!r||!r.length)return 0;let s=0;for(let i=0;i<r.length;i+=1)s+=r[i]*r[i];return Math.sqrt(s/r.length)}function Ln(r){return Math.round((Number(r)||0)*1e3)/1e3}var za=/blackhole|loopback|vb-?audio|vb-?cable|stereo ?mix|立体声混音|soundflower|virtual|existential|parrot|oray/i,$a=/microphone|麦克风|mic\b/i;function xr(r){let s=String(r?.label||""),i=String(r?.deviceId||""),p=0;return za.test(s)&&(p+=100),$a.test(s)&&(p-=10),s||(p-=5),(i==="default"||i==="communications")&&(p-=30),p}function On(r){let s=(r||[]).filter(i=>i&&i.kind==="audioinput"&&i.deviceId);return s.length?[...s].sort((i,p)=>xr(p)-xr(i))[0]:null}var nn=class{constructor({sampleRate:s=16e3,silenceMs:i=600,maxMs:p=12e3,minMs:u=400,prerollMs:v=300}={}){this.sampleRate=s,this.silenceMs=i,this.maxMs=p,this.minMs=u,this.prerollMs=v,this.total=0,this.noise=null,this.inSpeech=!1,this.preroll=[],this.segment=[],this.segmentStart=0,this.silence=0,this.lastVoiced=0,this.firstVoiced=0}get threshold(){let s=this.noise===null?.005:this.noise;return Math.max(.005,Math.min(.05,s*2.5))}get seconds(){return this.total/this.sampleRate}push(s){let i=[];if(!s||!s.length)return i;let p=this.total;this.total+=s.length;let u=En(s);this.noise===null&&(this.noise=u);let v=u>=this.threshold;if(!this.inSpeech)return v?(this.segment=this.preroll.slice(),this.segmentStart=this.segment.length?this.segment[0].at:p,this.preroll=[],this.segment.push({at:p,data:s}),this.inSpeech=!0,this.silence=0,this.firstVoiced=p,this.lastVoiced=this.total,i):(this.noise=this.noise*.9+u*.1,this.preroll.push({at:p,data:s}),this.trimPreroll(),i);this.segment.push({at:p,data:s}),v?(this.silence=0,this.lastVoiced=this.total):this.silence+=s.length;let N=(this.total-this.segmentStart)/this.sampleRate*1e3;if(this.silence/this.sampleRate*1e3>=this.silenceMs){let f=this.cut("silence");return f&&i.push(f),i}if(N>=this.maxMs){let f=this.cut("max");f&&i.push(f)}return i}flush(){if(!this.inSpeech)return[];let s=this.cut("flush");return s?[s]:[]}cut(s){let i=this.segmentStart/this.sampleRate,p=(this.lastVoiced-this.segmentStart)/this.sampleRate,u=this.segment.reduce((w,H)=>w+H.data.length,0),v=new Float32Array(u),N=0;for(let w of this.segment)v.set(w.data,N),N+=w.data.length;let C=Math.max(i+.2,i+Math.min(p+.12,u/this.sampleRate)),f=(this.lastVoiced-this.firstVoiced)/this.sampleRate*1e3;return this.inSpeech=!1,this.segment=[],this.silence=0,s==="silence"&&f<this.minMs?null:{samples:v,start:Ln(i),end:Ln(C),seconds:Ln(C-i),reason:s}}trimPreroll(){let s=Math.round(this.prerollMs/1e3*this.sampleRate),i=0;for(let p=this.preroll.length-1;p>=0;p-=1)if(i+=this.preroll[p].data.length,i>s){this.preroll=this.preroll.slice(p);return}}};function br(r,s=16e3){let i=r instanceof Float32Array?r:Float32Array.from(r||[]),p=new ArrayBuffer(44+i.length*2),u=new DataView(p),v=(C,f)=>{for(let w=0;w<f.length;w+=1)u.setUint8(C+w,f.charCodeAt(w))};v(0,"RIFF"),u.setUint32(4,36+i.length*2,!0),v(8,"WAVE"),v(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,1,!0),u.setUint32(24,s,!0),u.setUint32(28,s*2,!0),u.setUint16(32,2,!0),u.setUint16(34,16,!0),v(36,"data"),u.setUint32(40,i.length*2,!0);let N=44;for(let C=0;C<i.length;C+=1){let f=Math.max(-1,Math.min(1,i[C]));u.setInt16(N,f<0?f*32768:f*32767,!0),N+=2}return new Uint8Array(p)}var Ca=`
class PodwaveTap extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]
    const channel = input && input[0]
    if (channel && channel.length) this.port.postMessage(channel.slice(0))
    return true
  }
}
registerProcessor('podwave-tap', PodwaveTap)
`;async function yr(){if(!navigator.mediaDevices?.enumerateDevices)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\u5217\u8868\uFF08\u9700\u8981\u5B89\u5168\u4E0A\u4E0B\u6587\uFF09");return(await navigator.mediaDevices.enumerateDevices()).filter(s=>s.kind==="audioinput")}async function kr({deviceId:r="",onSegment:s,onLevel:i,segmenterOptions:p={}}={}){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u62FF\u4E0D\u5230\u97F3\u9891\u8F93\u5165\u63A5\u53E3");let u;try{u=await navigator.mediaDevices.getUserMedia({audio:{...r?{deviceId:{exact:r}}:{},channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch(T){if(T?.name==="OverconstrainedError"&&r)u=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});else throw new Error(Sa(T))}let v;try{v=new AudioContext({sampleRate:16e3})}catch{v=new AudioContext}let N=v.sampleRate||16e3,C=new nn({...p,sampleRate:N}),f=T=>{s?.({wav:br(T.samples,N),start:T.start,end:T.end,seconds:T.seconds,reason:T.reason})},w=T=>{if(T){i?.(En(T));for(let x of C.push(T))f(x)}},H=v.createMediaStreamSource(u),_;try{let T=URL.createObjectURL(new Blob([Ca],{type:"application/javascript"}));await v.audioWorklet.addModule(T),URL.revokeObjectURL(T),_=new AudioWorkletNode(v,"podwave-tap",{numberOfInputs:1,numberOfOutputs:1,channelCount:1,channelCountMode:"explicit"}),_.port.onmessage=x=>w(x.data)}catch{_=v.createScriptProcessor(2048,1,1),_.onaudioprocess=T=>w(new Float32Array(T.inputBuffer.getChannelData(0)))}let O=v.createGain();return O.gain.value=0,H.connect(_),_.connect(O),O.connect(v.destination),await v.resume().catch(()=>{}),{label:u.getAudioTracks()[0]?.label||"",sampleRate:N,async stop(){try{for(let T of C.flush())f(T)}catch{}try{_.port&&(_.port.onmessage=null),_.onaudioprocess=null}catch{}for(let T of[H,_,O])try{T.disconnect()}catch{}for(let T of u.getTracks())T.stop();await v.close().catch(()=>{})}}}function Sa(r){let s=String(r?.name||"");return s==="NotAllowedError"||s==="SecurityError"?"\u6CA1\u6709\u97F3\u9891\u6743\u9650\u3002\u5728\u7CFB\u7EDF\u91CC\u5141\u8BB8 DSH \u4F7F\u7528\u9EA6\u514B\u98CE/\u97F3\u9891\u8F93\u5165\u4E4B\u540E\u518D\u8BD5":s==="NotFoundError"||s==="DevicesNotFoundError"?"\u627E\u4E0D\u5230\u8FD9\u4E2A\u97F3\u9891\u8BBE\u5907\u3002\u5148\u88C5\u865A\u62DF\u58F0\u5361\uFF08macOS \u7528 BlackHole\uFF09\uFF0C\u518D\u56DE\u6765\u9009\u5B83":s==="NotReadableError"?"\u8FD9\u4E2A\u8BBE\u5907\u88AB\u522B\u7684\u7A0B\u5E8F\u5360\u7528\u4E86\uFF0C\u6362\u4E00\u4E2A\u8F93\u5165\u8BBE\u5907\u8BD5\u8BD5":r?.message||"\u6253\u4E0D\u5F00\u97F3\u9891\u8BBE\u5907"}var d=rt(require("react"),1),Me="/podwave/api";async function at(r){let s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return i}async function co(r,s){let i=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(s||{})}),p=await i.json().catch(()=>({}));if(!i.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return p}function Nr(r){let s=Math.max(0,Math.round(Number(r)||0)),i=Math.floor(s/3600),p=Math.floor(s%3600/60);return i?`${i} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function zr(r){if(!r)return"";let s=new Date(r);return Number.isNaN(s.getTime())?"":`${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()}`}function An({onPlay:r,currentId:s}){let[i,p]=(0,d.useState)(null),[u,v]=(0,d.useState)(""),[N,C]=(0,d.useState)(""),[f,w]=(0,d.useState)(""),[H,_]=(0,d.useState)(""),[O,T]=(0,d.useState)(0),[x,W]=(0,d.useState)(!1),[Q,oe]=(0,d.useState)(""),[Ne,ce]=(0,d.useState)(""),[R,ze]=(0,d.useState)([]),[Y,ne]=(0,d.useState)(!1),[fe,re]=(0,d.useState)(null),[he,S]=(0,d.useState)([]),[h,I]=(0,d.useState)(null),[E,P]=(0,d.useState)(!1),[we,Oe]=(0,d.useState)(""),[De,Ae]=(0,d.useState)(null),[ue,$e]=(0,d.useState)(!1),[F,Ie]=(0,d.useState)(null),[Pe,je]=(0,d.useState)(!1),Z=(0,d.useCallback)(async(c=!1)=>{ne(!0);try{let U=await at(`${Me}/xyz/subscriptions${c?"?refresh=1":""}`);ze(U.items||[])}catch(U){A(U)}finally{ne(!1)}},[]);function A(c){let U=String(c?.message||"");if(U.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||U.includes("\u767B\u5F55\u5DF2\u5931\u6548")){p(pt=>({...pt||{},loggedIn:!1})),ze([]),re(null),S([]),oe(""),v("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}v(Ce(U))}function Ce(c){return c?c.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":c:"\u767B\u5F55\u5931\u8D25"}async function Ve(){try{await co(`${Me}/xyz/open-web`,{})}catch(c){A(c)}}(0,d.useEffect)(()=>{at(`${Me}/xyz/status`).then(c=>{p(c),c.loggedIn&&Z()}).catch(c=>A(c)),at(`${Me}/xyz/local-app`).then(c=>Ie(c)).catch(()=>Ie({available:!1}))},[Z]),(0,d.useEffect)(()=>{if(!O)return;let c=setInterval(()=>T(U=>Math.max(0,U-1)),1e3);return()=>clearInterval(c)},[O]);async function Ke(){if(v(""),!/^1\d{10}$/.test(f.trim())){v("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}C("send");try{let c=await co(`${Me}/xyz/auth/send-code`,{phone:f.trim(),areaCode:"+86"});T(60),c.devCode&&v(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${c.devCode}`)}catch(c){A(c)}finally{C("")}}async function Ue(){if(v(""),!f.trim()||!H.trim()){v("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}C("login");try{await co(`${Me}/xyz/auth/login`,{phone:f.trim(),code:H.trim(),areaCode:"+86"});let c=await at(`${Me}/xyz/status`);p(c),await Z()}catch(c){A(c)}finally{C("")}}async function it(){if(v(""),!Q.trim()){v("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}C("token");try{await co(`${Me}/xyz/auth/token`,{refreshToken:Q.trim(),deviceId:Ne.trim()});let c=await at(`${Me}/xyz/status`);p(c),oe(""),await Z()}catch(c){A(c)}finally{C("")}}async function et(){v("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let c=await navigator.clipboard.readText();if(!c.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");oe(c.trim())}catch(c){v(c?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function tt(){v(""),C("app");try{await co(`${Me}/xyz/auth/from-app`,{});let c=await at(`${Me}/xyz/status`);p(c),await Z(!0)}catch(c){A(c)}finally{at(`${Me}/xyz/local-app`).then(c=>Ie(c)).catch(()=>{}),C("")}}async function qe(){C("logout");try{await co(`${Me}/xyz/auth/logout`,{}),p({loggedIn:!1}),ze([]),re(null),S([])}catch(c){A(c)}finally{C("")}}async function lt(c){re(c),S([]),I(null),P(!0),v("");try{let U=await at(`${Me}/xyz/podcast/${encodeURIComponent(c.pid)}/episodes?limit=30`);S(U.items||[]),I(U.loadMoreKey||null)}catch(U){A(U)}finally{P(!1)}}async function y(){if(!(!fe||!h||E)){P(!0);try{let c=new URLSearchParams({limit:"30",loadMoreKey:h}),U=await at(`${Me}/xyz/podcast/${encodeURIComponent(fe.pid)}/episodes?${c}`);S(pt=>[...pt,...U.items||[]]),I(U.loadMoreKey||null)}catch(c){A(c)}finally{P(!1)}}}async function z(c){C(`play:${c.eid}`),v("");try{await r(c)}catch(U){A(U)}finally{C("")}}async function L(){if(v(""),!we.trim()){v("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}$e(!0);try{let c=we.trim();if(/\/episode\//i.test(c)){let U=await at(`${Me}/xyz/public/episode?url=${encodeURIComponent(c)}`);Ae({pid:U.podcast.pid,title:U.podcast.title,author:U.podcast.author,episodes:[U.episode]})}else{let U=await at(`${Me}/xyz/public/podcast?url=${encodeURIComponent(c)}`);Ae(U.podcast)}}catch(c){A(c)}finally{$e(!1)}}async function G(c){C(`pplay:${c.eid}`),v("");try{await r({...c,public:!0})}catch(U){A(U)}finally{C("")}}return i?i.loggedIn?fe?d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("button",{className:"btn ghost",onClick:()=>{re(null),S([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),d.default.createElement("div",{className:"xyz-podcast-title"},fe.title)),E&&he.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,d.default.createElement("div",{className:"xyz-eps"},he.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${s===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},zr(c.pubDate)," \xB7 ",Nr(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:N===`play:${c.eid}`,onClick:()=>z(c)},N===`play:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!E&&he.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,h?d.default.createElement("button",{className:"btn ghost xyz-more",disabled:E,onClick:y},E?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("div",null,d.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),d.default.createElement("div",{className:"xyz-hint"},i.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${i.profile.nickname}`:"\u5DF2\u767B\u5F55",(i.profile?.avatar,""))),d.default.createElement("div",{className:"xyz-head-actions"},d.default.createElement("button",{className:"btn ghost",disabled:Y,onClick:()=>Z(!0)},Y?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),d.default.createElement("button",{className:"btn ghost",disabled:N==="logout",onClick:qe},"\u9000\u51FA\u767B\u5F55"))),Y?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,d.default.createElement("div",{className:"xyz-subs"},R.map(c=>d.default.createElement("button",{key:c.pid,className:"xyz-sub-card",onClick:()=>lt(c)},c.cover?d.default.createElement("img",{className:"xyz-cover",src:c.cover,alt:"",loading:"lazy"}):d.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),d.default.createElement("div",{className:"xyz-sub-text"},d.default.createElement("div",{className:"xyz-sub-title"},c.title),d.default.createElement("div",{className:"xyz-sub-meta"},c.author||""))))),!Y&&R.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-login"},d.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),d.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn primary",disabled:N==="app",onClick:tt},N==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),d.default.createElement("p",{className:"xyz-hint"},F===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":F.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${F.deviceId?`\uFF08\u8BBE\u5907 ${F.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${F.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),d.default.createElement("button",{className:"xyz-link",onClick:()=>je(c=>!c)},Pe?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),Pe?d.default.createElement(d.default.Fragment,null,d.default.createElement("ol",{className:"xyz-steps"},d.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),d.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),d.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",d.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",d.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),d.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn ghost",onClick:Ve},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),d.default.createElement("div",{className:"xyz-advanced"},d.default.createElement("label",null,d.default.createElement("span",null,"refresh token \u6216 access token"),d.default.createElement("input",{value:Q,onChange:c=>oe(c.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),d.default.createElement("button",{className:"xyz-link",type:"button",onClick:et},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),d.default.createElement("label",null,d.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),d.default.createElement("input",{value:Ne,onChange:c=>ce(c.target.value),placeholder:"x-jike-device-id"})),d.default.createElement("button",{className:"btn primary",disabled:N==="token",onClick:it},N==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),d.default.createElement("button",{className:"xyz-link",onClick:()=>W(c=>!c)},x?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),x?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u624B\u673A\u53F7"),d.default.createElement("input",{value:f,onChange:c=>w(c.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),d.default.createElement("button",{className:"btn ghost",disabled:N==="send"||O>0,onClick:Ke},O>0?`${O}s \u540E\u91CD\u53D1`:N==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),d.default.createElement("input",{value:H,onChange:c=>_(c.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),d.default.createElement("button",{className:"btn primary",disabled:N==="login",onClick:Ue},N==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,d.default.createElement("div",{className:"xyz-public"},d.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),d.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),d.default.createElement("input",{value:we,onChange:c=>Oe(c.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),d.default.createElement("button",{className:"btn ghost",disabled:ue,onClick:L},ue?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),De?d.default.createElement("div",{className:"xyz-eps"},d.default.createElement("div",{className:"xyz-ep-title"},De.title,d.default.createElement("span",{className:"xyz-hint"}," \xB7 ",De.author)),De.episodes.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${s===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},zr(c.pubDate)," \xB7 ",Nr(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:N===`pplay:${c.eid}`,onClick:()=>G(c)},N===`pplay:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),u?d.default.createElement("p",{className:"xyz-error"},u):null)):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function jn(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function $r(r,s){let i=jn(s),p=i?`${i}/`:"",u=new Map;for(let v of r){let N=jn(v?.rel);if(!N||p&&!N.startsWith(p))continue;let f=N.slice(p.length).split("/")[0];if(!f)continue;let w=p?`${p}${f}`:f,H=u.get(w)||{rel:w,name:f,count:0};H.count+=1,u.set(w,H)}return[...u.values()].sort((v,N)=>v.name.localeCompare(N.name,"zh-Hans-CN"))}function Cr(r,s){let i=[{rel:"",label:r}],p=jn(s);if(!p)return i;let u="";for(let v of p.split("/").filter(Boolean))u=u?`${u}/${v}`:v,i.push({rel:u,label:v});return i}function Sr(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let s=r.progress?.percent,i=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${s!=null?` ${s}%`:""}${i}`}var M="/podwave/api",Ma=[.5,.75,1,1.25,1.5,1.75,2];async function be(r){let s=await fetch(r);if(!s.ok){let i=await s.json().catch(()=>({}));throw new Error(i.error||s.statusText)}return s.json()}async function te(r,s,i){let p=await fetch(r,{method:s,headers:i?{"Content-Type":"application/json"}:void 0,body:i?JSON.stringify(i):void 0});if(!p.ok){let u=await p.json().catch(()=>({}));throw new Error(u.error||p.statusText)}return p.json()}async function Pa(r,s=1200){let i=await createImageBitmap(r),p=Math.min(1,s/Math.max(i.width,i.height)),u=Math.max(1,Math.round(i.width*p)),v=Math.max(1,Math.round(i.height*p)),N=document.createElement("canvas");N.width=u,N.height=v;let C=N.getContext("2d");C.fillStyle="#16161a",C.fillRect(0,0,u,v),C.drawImage(i,0,0,u,v),typeof i.close=="function"&&i.close();let f=await new Promise(w=>N.toBlob(w,"image/jpeg",.9));if(!f)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return f}function Ta({onSubmit:r,onPick:s,onClose:i}){let[p,u]=(0,t.useState)(""),[v,N]=(0,t.useState)(!1),[C,f]=(0,t.useState)(!1),[w,H]=(0,t.useState)(""),_=(0,t.useRef)(null);return(0,t.useEffect)(()=>{_.current?.focus();let x=W=>{W.key==="Escape"&&i()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[i]),t.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async x=>{if(x.preventDefault(),!(!p.trim()||v)){N(!0),H("");try{await r(p.trim()),i()}catch(W){H(W.message),N(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!C){f(!0),H("");try{let x=await s();if(x?.canceled)return;if(x?.error)throw new Error(x.error);x?.path&&(await r(x.path),i())}catch(x){H(x.message)}finally{f(!1)}}},disabled:C,autoFocus:!0},C?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:_,value:p,onChange:x=>u(x.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:v||!p.trim()},v?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),w?t.default.createElement("div",{className:"dialog-error"},w):null))}function Da({config:r,onClose:s,onSave:i}){let[p,u]=(0,t.useState)(r?.provider||"api"),[v,N]=(0,t.useState)(""),[C,f]=(0,t.useState)(!1),[w,H]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:O=>{O.target===O.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async O=>{O.preventDefault(),f(!0),H("");try{await i({provider:p,apiKey:v||void 0})}catch(T){H(T.message),f(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:p,onChange:O=>u(O.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:v,onChange:O=>N(O.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),w?t.default.createElement("div",{className:"dialog-error"},w):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:C},"\u4FDD\u5B58"))))}function Un(){let[r,s]=(0,t.useState)([]),[i,p]=(0,t.useState)([]),[u,v]=(0,t.useState)({}),[N,C]=(0,t.useState)({running:!1}),[f,w]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[H,_]=(0,t.useState)(!1),[O,T]=(0,t.useState)(!1),[x,W]=(0,t.useState)(0),[Q,oe]=(0,t.useState)(0),[Ne,ce]=(0,t.useState)(0),[R,ze]=(0,t.useState)(!1),[Y,ne]=(0,t.useState)(""),[fe,re]=(0,t.useState)([]),[he,S]=(0,t.useState)("recent"),[h,I]=(0,t.useState)("all"),[E,P]=(0,t.useState)(""),[we,Oe]=(0,t.useState)(""),[De,Ae]=(0,t.useState)("all"),[ue,$e]=(0,t.useState)(null),[F,Ie]=(0,t.useState)(null),[Pe,je]=(0,t.useState)(!1),[Z,A]=(0,t.useState)(0),[Ce,Ve]=(0,t.useState)(0),[Ke,Ue]=(0,t.useState)(!0),[it,et]=(0,t.useState)(!1),[tt,qe]=(0,t.useState)(""),[lt,y]=(0,t.useState)(""),[z,L]=(0,t.useState)(null),[G,c]=(0,t.useState)("none"),[U,pt]=(0,t.useState)(null),Po=(0,t.useRef)(new Set),[xt,Xt]=(0,t.useState)(15),[Dt,It]=(0,t.useState)(!1),[To,Do]=(0,t.useState)({x:null,y:null}),[uo,mo]=(0,t.useState)({width:null,height:null}),[Lt,vo]=(0,t.useState)({width:null,height:null}),[go,Et]=(0,t.useState)(null),fo=(0,t.useRef)(null),[Io,dt]=(0,t.useState)(!1),[Xe,Ot]=(0,t.useState)(0),[Jt,ct]=(0,t.useState)(""),[He,gt]=(0,t.useState)(!1),[Yt,Zt]=(0,t.useState)(null),[me,Lo]=(0,t.useState)(""),[ot,nt]=(0,t.useState)({status:"none"}),[Fn,ft]=(0,t.useState)(!1),[Eo,ln]=(0,t.useState)(!1),[Gt,Qt]=(0,t.useState)(!1),[Je,ho]=(0,t.useState)(null),[ye,xe]=(0,t.useState)(!1),[At,xo]=(0,t.useState)([]),[bt,q]=(0,t.useState)(!1),[Le,wt]=(0,t.useState)([]),[yt,kt]=(0,t.useState)(null),[jt,bo]=(0,t.useState)(""),[Oo,Ao]=(0,t.useState)([]),[ie,ut]=(0,t.useState)("idle"),[pe,Nt]=(0,t.useState)([]),[pn,Ut]=(0,t.useState)(""),[dn,Rt]=(0,t.useState)(""),[jo,eo]=(0,t.useState)(0),[wo,Uo]=(0,t.useState)(0),[to,cn]=(0,t.useState)(0),[oo,no]=(0,t.useState)(""),[zt,Bt]=(0,t.useState)(!1),[Ft,Ht]=(0,t.useState)(!1),[un,Bo]=(0,t.useState)(null),[yo,mn]=(0,t.useState)(!0),[vn,$t]=(0,t.useState)(!1),[gn,Fo]=(0,t.useState)(.78),[Ho,Wo]=(0,t.useState)(18),[a,b]=(0,t.useState)(780),$=(0,t.useRef)(null),le=(0,t.useRef)(""),Ye=(0,t.useRef)(null),X=(0,t.useRef)(null),ko=(0,t.useRef)(null),We=(0,t.useRef)(0),ke=(0,t.useRef)(f),_e=(0,t.useRef)(0),Ct=(0,t.useRef)(0),Hn=(0,t.useRef)(0),Wn=(0,t.useRef)(0),Tr=(0,t.useRef)(!1),fn=(0,t.useRef)(!1),_o=(0,t.useRef)(null),Wt=(0,t.useRef)([]),Vo=(0,t.useRef)(!1),St=(0,t.useRef)(""),de=(0,t.useRef)([]),hn=(0,t.useRef)(0),No=(0,t.useRef)(0),Mt=(0,t.useRef)(0),_n=(0,t.useRef)(!0),Vn=(0,t.useRef)(0);(0,t.useEffect)(()=>{T(!1)},[ue]),(0,t.useEffect)(()=>{ke.current=f},[f]),(0,t.useEffect)(()=>{X.current=F},[F]),(0,t.useEffect)(()=>{ko.current=z},[z]),(0,t.useEffect)(()=>{We.current=Ce},[Ce]),(0,t.useEffect)(()=>{let e=!1;return be(`${M}/transcribe/settings`).then(o=>{e||pt(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await be(`${M}/ui-settings`);!e&&o&&(ln(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&Xt(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&It(o.captionOpen),Do({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),mo({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}),vo({width:Number.isFinite(Number(o.transcriptW))&&o.transcriptW!==null?Number(o.transcriptW):null,height:Number.isFinite(Number(o.transcriptH))&&o.transcriptH!==null?Number(o.transcriptH):null}),Number.isFinite(Number(o.episodeLeftW))&&o.episodeLeftW!==null&&Et(Number(o.episodeLeftW)))}catch{}})(),()=>{e=!0}},[]);let Be=(0,t.useCallback)(e=>{fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),xn=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));Xt(o),Be({subtitleSize:o})},[Be]),Dr=(0,t.useCallback)((e,o,l)=>{Do({x:e,y:o}),l&&Be({captionX:e,captionY:o})},[Be]),Ir=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};mo(m),l&&Be({captionW:m.width,captionH:m.height})},[Be]),Kn=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};vo(m),l&&Be({transcriptW:m.width,transcriptH:m.height})},[Be]),Ko=(0,t.useRef)(null),qn=(0,t.useRef)(null),Xn=e=>{let o=Ko.current;return o?Math.round(Math.min(460,Math.max(140,o.width+(e.clientX-o.startX)))):null},Lr=e=>{if(e.button!==void 0&&e.button!==0)return;let o=qn.current;o&&(e.preventDefault(),Ko.current={startX:e.clientX,width:o.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},Er=e=>{let o=Xn(e);o!=null&&Et(o)},Jn=e=>{if(!Ko.current)return;let o=Xn(e);Ko.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),o!=null&&(Et(o),Be({episodeLeftW:o}))},Or=()=>{Et(null),Be({episodeLeftW:null})},Ar=()=>fo.current?.click(),jr=async e=>{if(!(!e||!ue)){dt(!0);try{let o=await Pa(e),l=await fetch(`${M}/episodes/${encodeURIComponent(ue)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:o});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||"\u6362\u5C01\u9762\u5931\u8D25")}await Ze(),k("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(o){k(String(o.message||o))}finally{dt(!1)}}},Ur=async()=>{if(ue){dt(!0);try{let e=await fetch(`${M}/episodes/${encodeURIComponent(ue)}/cover`,{method:"DELETE"});if(!e.ok){let o=await e.json().catch(()=>({}));throw new Error(o.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await Ze(),k("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){k(String(e.message||e))}finally{dt(!1)}}},Br=(0,t.useCallback)(()=>{It(e=>{let o=!e;return Be({captionOpen:o}),o})},[Be]),Fr=(0,t.useCallback)(()=>{It(!1),Be({captionOpen:!1})},[Be]),zo=(0,t.useMemo)(()=>{let e=z?.lines;return e?.length&&e.find(o=>Z>=o.start&&Z<o.end)||null},[z,Z]),Hr=zo&&zo.speaker!=null?z?.speakers?.[zo.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${zo.speaker+1}`:"",Yn=(0,t.useCallback)(()=>{ln(e=>{let o=!e;return fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{y(e),window.clearTimeout(Wn.current),Wn.current=window.setTimeout(()=>y(""),2600)},[]);(0,t.useEffect)(()=>{if(ie!=="listening"&&ie!=="asking")return;Uo(Date.now());let e=window.setInterval(()=>Uo(Date.now()),1e3);return()=>window.clearInterval(e)},[ie]),(0,t.useEffect)(()=>{if(ie!=="listening")return;let e=window.setInterval(()=>cn(hn.current),200);return()=>window.clearInterval(e)},[ie]),(0,t.useEffect)(()=>{if(ie!=="listening")return;let e=window.setInterval(()=>{let o=Date.now()-(No.current||0);o>6e3&&de.current.length===0?no("\u6CA1\u6536\u5230\u58F0\u97F3\u3002\u7CFB\u7EDF\u8F93\u51FA\u8981\u9009\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF08\u626C\u58F0\u5668 + BlackHole 2ch\uFF09\uFF0C\u53EA\u9009\u626C\u58F0\u5668\u7684\u8BDD\u63D2\u4EF6\u542C\u4E0D\u5230"):o<1500&&no("")},1200);return()=>window.clearInterval(e)},[ie]);let _t=(0,t.useCallback)(e=>{fetch(`${M}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"update",payload:e})}).catch(()=>{})},[]),Zn=(0,t.useCallback)(async()=>{if(!Vo.current){Vo.current=!0;try{for(;Wt.current.length;){let e=Wt.current.shift(),o=St.current;if(!o)break;try{let l=await fetch(`${M}/live/segment?session=${encodeURIComponent(o)}&start=${e.start}&end=${e.end}`,{method:"POST",headers:{"content-type":"audio/wav"},body:e.wav}),m=await l.json().catch(()=>({}));if(!l.ok)throw new Error(m.error||l.statusText);if(m.lines?.length){de.current=[...de.current,...m.lines],Nt(de.current);let j=de.current,V=j[j.length-1],ee=j[j.length-2];_t({text:V?.text||"",translation:V?.translations?.zh||V?.translations?.en||"",previous:ee?.text||"",previousTranslation:ee?.translations?.zh||ee?.translations?.en||"",status:"listening",hint:""})}Ut(m.lastError||"")}catch(l){Ut(l.message||String(l))}}}finally{Vo.current=!1}}},[_t]),Wr=(0,t.useCallback)(e=>{Number.isFinite(Number(e.opacity))&&Fo(Number(e.opacity)),Number.isFinite(Number(e.fontSize))&&Wo(Number(e.fontSize)),Number.isFinite(Number(e.width))&&b(Number(e.width)),_t(e),window.clearTimeout(Vn.current),Vn.current=window.setTimeout(()=>{te(`${M}/live/settings`,"PUT",e).catch(()=>{})},600)},[_t]),ro=(0,t.useCallback)(async e=>{ut("saving");let o=St.current;St.current="";try{let l=await te(`${M}/live/stop`,"POST",{session:o,save:!!e});l.saved?k(`\u5B57\u5E55\u5DF2\u4FDD\u5B58\uFF1A${l.files.md}`):k("\u5B9E\u65F6\u5B57\u5E55\u5DF2\u7ED3\u675F")}catch(l){k(`\u7ED3\u675F\u5B9E\u65F6\u5B57\u5E55\u5931\u8D25\uFF1A${l.message||l}`)}finally{fetch(`${M}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"close"})}).catch(()=>{}),Bt(!1),Ht(!1),$t(!1),Mt.current=0,Wt.current=[],de.current=[],ut("idle"),Nt([]),Ut(""),Rt(""),eo(0)}},[k]),Gn=(0,t.useCallback)(async()=>{if(Ft){try{await te(`${M}/live/tap`,"POST",{action:"stop",keep:!0})}catch{}try{let l=await be(`${M}/live/lines?since=${Mt.current}`);Array.isArray(l?.lines)&&l.lines.length&&(de.current=[...de.current,...l.lines],Nt(de.current),Mt.current=de.current[de.current.length-1]?.id||Mt.current)}catch{}de.current.length?await ro(yo):await ro(!1);return}let e=_o.current;_o.current=null,e&&await e.stop().catch(()=>{});let o=Date.now()+5e3;for(;(Wt.current.length||Vo.current)&&Date.now()<o;)await new Promise(l=>setTimeout(l,150));de.current.length&&!zt?ut("asking"):await ro(de.current.length?yo:!1)},[ro,zt,yo,Ft]);(0,t.useEffect)(()=>{if(!Ft||ie!=="listening")return;let e=!1,o=window.setInterval(async()=>{try{let l=await be(`${M}/live/lines?since=${Mt.current}`);if(e)return;Array.isArray(l?.lines)&&l.lines.length&&(de.current=[...de.current,...l.lines],Nt(de.current),Mt.current=de.current[de.current.length-1]?.id||Mt.current),Number.isFinite(Number(l?.level))&&(hn.current=Number(l.level),Number(l.level)>.004&&(No.current=Date.now())),typeof l?.hint=="string"&&l.hint!==oo&&no(l.hint),l?.alive===!1&&(Mt.current=0,de.current=[],Nt([]),Bt(!1),Ht(!1),ut("idle"),Rt(""),eo(0),no(""))}catch{}},600);return()=>{e=!0,window.clearInterval(o)}},[Ft,ie,oo]);let Qn=(0,t.useCallback)(async(e={})=>{try{let o=Number.isFinite(Number(e.opacity))?Number(e.opacity):.78,l=Number.isFinite(Number(e.fontSize))?Number(e.fontSize):18,m=Number.isFinite(Number(e.width))?Number(e.width):780;Fo(o),Wo(l),b(m);let j=await te(`${M}/live/window`,"POST",{action:"open"});if(j?.ok)return Bt(!0),_t({text:"",status:"listening",hint:"\u542C\u7740\u5462\uFF0C\u64AD\u653E\u58F0\u97F3\u5C31\u4F1A\u51FA\u5B57\u5E55",opacity:o,fontSize:l,width:m,saveOnStop:_n.current}),!0;Bt(!1),j?.error&&k(`\u72EC\u7ACB\u5B57\u5E55\u7A97\u6CA1\u6253\u5F00\uFF0C\u5B57\u5E55\u663E\u793A\u5728\u5361\u7247\u91CC\uFF1A${j.error}`)}catch{Bt(!1)}return!1},[k,_t]),_r=(0,t.useCallback)(async()=>{if(!(ie==="starting"||ie==="listening")){Ut(""),Nt([]),de.current=[],ut("starting");try{let e=await be(`${M}/live`);if(mn(e.saveOnStop!==!1),_n.current=e.saveOnStop!==!1,!e.ready)throw new Error("\u8FD8\u6CA1\u6709\u586B DeepSeek API key\u3002\u8BBE\u7F6E \u2192\u300C\u7FFB\u8BD1\u300D\u91CC\u586B\u4E00\u4E2A\uFF0C\u8F6C\u5199\u548C\u5B9E\u65F6\u5B57\u5E55\u90FD\u80FD\u7528");let o=e.deviceId||"",l=e.deviceLabel||"";if(!o){let ee=await yr().catch(()=>[]),Re=On(ee);Re&&(o=Re.deviceId,l=Re.label||"")}if(e.tap?.supported!==!1&&e.source!=="browser"){$t(!0);try{let ee=await te(`${M}/live/tap`,"POST",{target:e.target||"zh",chunkMs:500});if(ee?.ok){Bo(ee),Ht(!0),St.current=ee.session?.id||"",Rt("\u7CFB\u7EDF\u97F3\u9891"),eo(Date.now()),ut("listening"),No.current=Date.now(),await Qn(e)||$t(!1);return}$t(!1),k(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ee?.error||"\u672A\u77E5\u539F\u56E0"}`)}catch(ee){$t(!1),k(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ee.message||ee}`)}}Ht(!1);let j=await te(`${M}/live/start`,"POST",{target:e.target||"zh"});if(!j?.session?.id)throw new Error("\u5BBF\u4E3B\u6CA1\u7ED9\u51FA\u4F1A\u8BDD id");St.current=j.session.id;let V=await kr({deviceId:o,onLevel:ee=>{hn.current=ee,ee>.004&&(No.current=Date.now())},onSegment:ee=>{Wt.current.length>8&&Wt.current.shift(),Wt.current.push(ee),Zn()}});_o.current=V,Rt(V.label||l||"\u7CFB\u7EDF\u58F0\u97F3"),eo(Date.now()),ut("listening"),No.current=Date.now(),await Qn(e),o&&(o!==e.deviceId||(V.label||l)!==e.deviceLabel)&&te(`${M}/live/settings`,"PUT",{deviceId:o,deviceLabel:V.label||l}).catch(()=>{})}catch(e){St.current&&te(`${M}/live/stop`,"POST",{session:St.current,save:!1}).catch(()=>{}),St.current="",_o.current=null,ut("idle");let o=e.message||String(e);Ut(o),k(`\u5B9E\u65F6\u5B57\u5E55\u6CA1\u8D77\u6765\uFF1A${o}`)}}},[k,ie,Zn,_t,xt]),Ze=(0,t.useCallback)(async()=>{let e=await be(`${M}/episodes`);return s(e.items||[]),p(e.folders||[]),v(e.progress||{}),C(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await be(`${M}/health`).catch(()=>({}));o.mediaBase&&(le.current=o.mediaBase);let l=await be(`${M}/state`);if(e)return;w(l.settings),p(l.folders||[]);let m=await Ze();if(e)return;let j=l.settings?.lastEpisodeId,V=j?(m.items||[]).find(ee=>ee.id===j):null;if(V){Ie(V),Ve(V.duration||0);let ee=m.progress?.[V.id]?.position||0;_e.current=ee>5?ee:0,A(_e.current);let Re=$.current;Re&&(Re.src=le.current?`${le.current}/episodes/${V.id}/audio`:`${M}/episodes/${V.id}/audio`,Re.load(),Re.playbackRate=l.settings?.rate||1,Re.volume=l.settings?.volume??.9)}Ue(!1),Tr.current=!0}catch(o){e||(qe(o.message),Ue(!1))}})(),()=>{e=!0}},[Ze]),(0,t.useEffect)(()=>{if(!N.running)return;let e=setInterval(()=>{Ze().catch(()=>{})},1500);return()=>clearInterval(e)},[N.running,Ze]),(0,t.useEffect)(()=>{let e=!1;return L(null),ct(""),Ot(0),F?.id?((async()=>{try{let o=await be(`${M}/episodes/${F.id}/transcript`);if(e)return;c(o.status),ho(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?L(o.transcript):o.status==="queued"||o.status==="running"?(Ot(o.elapsedMs||0),o.transcript&&L(o.transcript)):o.status==="error"&&ct(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||ct(o.message)}})(),()=>{e=!0}):(c("none"),()=>{e=!0})},[F?.id]),(0,t.useEffect)(()=>{be(`${M}/translate/settings`).then(Zt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=F?.id;return!o||!me?(nt({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await be(`${M}/episodes/${o}/translate?target=${me}`);e||nt(l)}catch{e||nt({status:"none"})}})(),()=>{e=!0})},[F?.id,me]),(0,t.useEffect)(()=>{if(G!=="queued"&&G!=="running")return;let e=!1,o=setInterval(async()=>{let l=X.current?.id;if(l)try{let m=await be(`${M}/episodes/${l}/transcript`);if(e)return;c(m.status),ho(m.status==="queued"||m.status==="running"?m:null),Ot(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?L(m.transcript):m.status==="done"&&m.transcript?(L(m.transcript),gt(!0),k("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&ct(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[G,k]),(0,t.useEffect)(()=>{if(ot.status!=="running"&&ot.status!=="queued")return;let e=!1,o=async m=>{let j=await be(`${M}/episodes/${m}/translate?target=${me}`);if(!e){nt(j),j.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let V=await be(`${M}/episodes/${m}/transcript`);!e&&V.transcript&&L(V.transcript)}catch{}}},l=setInterval(()=>{let m=X.current?.id;m&&o(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[ot.status,me,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let m=await be(`${M}/jobs`);e||xo(m.items||[])}catch{}};o();let l=setInterval(o,ye?2500:2e4);return()=>{e=!0,clearInterval(l)}},[ye]);let Vt=(0,t.useCallback)((e,o,l,m=!1)=>{if(!e)return;let j=Date.now();!m&&j-Hn.current<4e3||(Hn.current=j,te(`${M}/progress/${e}`,"PUT",{position:o,duration:l}).catch(()=>{}),v(V=>({...V,[e]:{position:o,duration:l,updatedAt:j}})))},[]),Pt=(0,t.useCallback)(e=>{w(o=>({...o,...e})),te(`${M}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!Pe||!F||U?.realtime===!1||U?.provider==="local"||z&&!z.partial||G==="queued"||G==="running")return;let e=F.id;Po.current.has(e)||(Po.current.add(e),te(`${M}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&c("queued")}).catch(()=>{}))},[Pe,F,z,G,U]);let $o=(0,t.useCallback)(async()=>{let e=X.current;if(!e)return;ct(""),gt(!0);let o=ko.current,l=!!o&&!o.partial;if(l){let m=Array.isArray(o.lines)?o.lines.length:0,j=(U?.provider||"api")==="api",V=[`\u91CD\u65B0\u8F6C\u5199\u8FD9\u4E00\u96C6\uFF1F\u73B0\u6709\u5B57\u5E55\uFF08${m} \u884C\uFF09\u4F1A\u88AB\u8986\u76D6\u3002`,"",j?"\u8D70\u4E91\u7AEF\u8F6C\u5199\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u8D39\u4E00\u6B21\u3002":"\u8D70\u672C\u5730\u6A21\u578B\uFF0C\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1\uFF0C\u4F46\u4F1A\u5360 CPU/GPU\u3002"].join(`
`);if(!window.confirm(V))return}try{let m=await te(`${M}/episodes/${e.id}/transcribe`,"POST",l?{force:!0}:{});c(m.status||"queued"),l&&k("\u91CD\u65B0\u8F6C\u5199\u5DF2\u5F00\u59CB")}catch(m){ct(m.message)}},[k,U]),Vr=(0,t.useCallback)(()=>{if(z){gt(e=>!e);return}if(G==="queued"||G==="running"){gt(!0);return}$o()},[z,G,$o]),bn=(0,t.useCallback)(async()=>{if(X.current)try{await te(`${M}/episodes/${X.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){ct(e.message)}},[k]),wn=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let m=await te(`${M}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?k("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):k(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await te(`${M}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await te(`${M}/jobs`,"DELETE",{key:e.key})}catch(m){k(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let l=await be(`${M}/jobs`).catch(()=>({items:[]}));xo(l.items||[])},[k]),qo=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let l=await te(`${M}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),wt([]),q(!1)}catch(l){k(l.message)}},[k]),Kr=(0,t.useCallback)(e=>{wt(o=>o.includes(e)?o.filter(l=>l!==e):[...o,e])},[]),Tt=(0,t.useCallback)(async(e,o,l)=>{try{let m=await te(`${M}${e}`,o,l||{});return m?.transcript&&L(m.transcript),m}catch(m){return k(m.message),null}},[k]),Rn=(0,t.useCallback)(e=>{kt(e.id),bo(e.text),Ao([])},[]),er=(0,t.useCallback)(async e=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e??yt}`,"PUT",{text:jt})&&(kt(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[z,yt,jt,Tt,k]),tr=(0,t.useCallback)(async(e,o)=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e??yt}/split`,"POST",{offset:o})&&(kt(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[z,yt,Tt,k]),or=(0,t.useCallback)(async e=>{if(!z)return;await Tt(`/episodes/${z.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[z,Tt,k]),nr=(0,t.useCallback)(async()=>{if(!z)return;let e=await Tt(`/episodes/${z.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(nt({status:"none",missing:e.after}),k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[z,Tt,k]),rr=(0,t.useCallback)(async()=>{if(z)try{let e=await be(`${M}/episodes/${z.id}/transcript/validate`);Ao(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[z,k]),Xo=(0,t.useCallback)(async()=>{let e=X.current?.id;if(!e)return;let o=await be(`${M}/episodes/${e}/transcript`);o.transcript&&L(o.transcript)},[]),Jo=(0,t.useCallback)(async(e=!1)=>{let o=X.current?.id,l=me;if(!(!o||!l)&&!(ot.status==="running"||ot.status==="queued")){nt({status:"running"});try{let m=await te(`${M}/episodes/${o}/translate`,"POST",{target:l,force:e});nt(m),m.status==="done"&&(await Xo(),k(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){nt(j=>({...j,status:"error",error:m.message}))}}},[me,ot.status,Xo,k]),ar=(0,t.useCallback)(()=>Jo(!1),[Jo]),sr=(0,t.useCallback)(()=>{let e=me==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&Jo(!0)},[Jo,me]),ir=(0,t.useCallback)(async e=>{let o=X.current?.id;if(!(!o||!me||!e?.id))try{await te(`${M}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:me}),await Xo(),k("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){k(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[me,Xo,k]),lr=(0,t.useCallback)(e=>{Lo(e||"")},[]),qr=async()=>{if(ae?.eid)try{await fetch(`${M}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${ae.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Xr=e=>{let o=!e.favorite;s(l=>l.map(m=>m.id===e.id?{...m,favorite:o}:m)),te(`${M}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(l=>k(l.message))},pr=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${M}/episodes/${o}`,{method:"DELETE"})}catch{}s(o=>o.filter(l=>!e.includes(l.id))),wt([]),e.includes(ue)&&$e(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ge=(0,t.useMemo)(()=>{let e=[...r];return he==="title"?e.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):he==="duration"?e.sort((o,l)=>(l.duration||0)-(o.duration||0)):e.sort((o,l)=>l.mtime-o.mtime),e},[r,he]),ao=E?we:"",dr=(0,t.useMemo)(()=>E?r.filter(e=>e.root===E):[],[r,E]),so=(0,t.useMemo)(()=>E?$r(dr,ao):[],[dr,E,ao]),mt=(0,t.useMemo)(()=>{let e=Y.trim().toLowerCase();return Ge.filter(o=>{if(E&&o.root!==E||E&&(o.rel||"")!==ao||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let m=u[o.id]?.position||0,j=o.duration||0,V=j?m/j:0;return h==="inprogress"?m>5&&V<.97:h==="finished"?V>=.97:De==="unheard"?m<=5:De==="transcribed"?!!o.hasTranscript:De==="favorites"?!!o.favorite:!0})},[Ge,Y,h,De,u,E,ao]),cr=(0,t.useMemo)(()=>At.filter(e=>e.status==="queued"||e.status==="running"),[At]),Kt=(0,t.useMemo)(()=>mt.filter(e=>!e.hasTranscript),[mt]),yn=(0,t.useMemo)(()=>r.filter(e=>{let o=u[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(u[o.id]?.updatedAt||0)-(u[e.id]?.updatedAt||0)).slice(0,4),[r,u]),Jr=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),Yr=Math.round(Jr/3600*10)/10,io=(0,t.useMemo)(()=>E?Cr(tn(E),ao):[],[E,ao]),Zr=E?io.length>1?io[io.length-1].label:tn(E):h==="inprogress"?"\u7EE7\u7EED\u6536\u542C":h==="finished"?"\u5DF2\u64AD\u5B8C":h==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",ae=ue?r.find(e=>e.id===ue)||(F?.id===ue?F:null):null,Gr=Ke?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":N.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":E?`${mt.length} \u96C6${so.length?` \xB7 ${so.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${mt.length} \u96C6 \xB7 \u5171 ${Yr} \u5C0F\u65F6 \xB7 ${i.length} \u4E2A\u6587\u4EF6\u5939`,_a=(0,t.useMemo)(()=>F?Ge.findIndex(e=>e.id===F.id):-1,[Ge,F]),lo=(0,t.useCallback)(()=>{let e=$.current;if(e){if(!X.current){let o=mt[0]||Ge[0];o&&qt(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[mt,Ge]),qt=(0,t.useCallback)((e,o=!0)=>{let l=$.current;if(!l||!e)return;if(X.current&&X.current.id===e.id){o&&lo();return}X.current&&!l.ended&&l.currentTime>1&&Vt(X.current.id,l.currentTime,l.duration||We.current,!0),X.current=e,Ie(e),$e(V=>V&&e.id),Ve(e.duration||0);let m=u[e.id]?.position||0,j=m>5&&(!e.duration||m<e.duration-10)?m:0;_e.current=j,A(j),e.source==="xyz"?l.src=le.current?`${le.current}/xyz/${e.id.slice(3)}/audio`:`${M}/episodes/${e.id}/audio`:l.src=le.current?`${le.current}/episodes/${e.id}/audio`:`${M}/episodes/${e.id}/audio`,l.load(),l.playbackRate=ke.current.rate||1,l.volume=ke.current.volume??.9,o&&l.play().catch(()=>{}),Pt({lastEpisodeId:e.id})},[u,Vt,Pt,lo]),Qr=(0,t.useCallback)(async e=>{let o=e.public?`${M}/xyz/public/play`:`${M}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),j=await m.json().catch(()=>({}));if(!m.ok)throw new Error(j.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ze(),qt(j.item,!0)},[Ze,qt]);(0,t.useEffect)(()=>{let e=Y.trim();if(e.length<2){re([]);return}let o=window.setTimeout(()=>{be(`${M}/search?q=${encodeURIComponent(e)}`).then(l=>re(Array.isArray(l.items)?l.items:[])).catch(()=>re([]))},250);return()=>window.clearTimeout(o)},[Y]);let Yo=(0,t.useCallback)((e,o=!0)=>{e&&(qt(e,o),$e(e.id))},[qt]),Qe=(0,t.useCallback)(e=>{let o=$.current;if(!o||!X.current)return;let l=Number(e);if(!Number.isFinite(l))return;let m=Number(We.current)||0,j=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,V=Math.max(0,j>0?Math.min(l,j):l);try{o.currentTime=V}catch{_e.current=V;return}A(V),Vt(X.current.id,V,j||m,!0)},[Vt]),Rr=(0,t.useCallback)(e=>{let o=r.find(l=>l.id===e.episodeId);if(o){if(X.current?.id===e.episodeId){Qe(e.start),$e(o.id);return}_e.current=e.start,Yo(o,!1)}},[r,Yo,Qe]),ur=(0,t.useCallback)(e=>{let o=Ye.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),Zo=(0,t.useCallback)(e=>{let o=ur(e),l=Number.isFinite(We.current)&&We.current>0?We.current:Number.isFinite($.current?.duration)?$.current.duration:0;o==null||!l||Qe(o*l)},[ur,Qe]),ea=(0,t.useCallback)(e=>{e.preventDefault(),fn.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Zo(e)},[Zo]),ta=(0,t.useCallback)(e=>{fn.current&&Zo(e)},[Zo]),mr=(0,t.useCallback)(e=>{fn.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),oa=(0,t.useCallback)(e=>{let o=$.current;if(!o)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Qe((o.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),Qe((o.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),Qe(0)),e.key==="End"&&(e.preventDefault(),Qe(Number.isFinite(o.duration)?o.duration:0))},[Qe]),Co=(0,t.useCallback)(e=>{let o=$.current;if(!o||!X.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||We.current||0)-1));o.currentTime=l,A(l)},[]),kn=(0,t.useCallback)(e=>{if(!Ge.length)return;let l=((X.current?Ge.findIndex(m=>m.id===X.current.id):-1)+e+Ge.length)%Ge.length;qt(Ge[l],!0)},[Ge,qt]),na=(0,t.useCallback)(e=>{let o=$.current;o&&(o.playbackRate=e),Pt({rate:e}),_(!1)},[Pt]);(0,t.useEffect)(()=>{if(!H)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||_(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[H]),(0,t.useEffect)(()=>{if(!Q)return;let e=()=>{let l=Math.max(0,Math.round((Q-Date.now())/1e3));if(ce(l),l<=0){let m=$.current;m&&!m.paused&&m.pause(),oe(0),W(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Q,k]),(0,t.useEffect)(()=>{if(!R)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||ze(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[R]);let Nn=(0,t.useCallback)(e=>{if(ze(!1),e==="off"){oe(0),W(0),ce(0);return}if(e==="end"){oe(0),W(-1),ce(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}W(e),oe(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),Go=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),l=$.current;l&&(l.volume=o),Pt({volume:o})},[Pt]),ra=(0,t.useCallback)(()=>{let e=$.current,o=ke.current.volume>0?0:.9;e&&(e.volume=o),Pt({volume:o})},[Pt]),aa=()=>{let e=$.current;if(!e||!X.current)return;let o=performance.now();o-(Ct.current||0)<400||(Ct.current=o,A(e.currentTime),Vt(X.current.id,e.currentTime,e.duration||We.current))},sa=()=>{let e=$.current,o=X.current;if(!e||!o)return;let l=Number.isFinite(e.duration)?e.duration:o.duration||0;Ve(l);let m=_e.current;_e.current=0,m>0&&m<l-1&&(e.currentTime=m,A(m))},ia=()=>{let e=$.current;if(X.current&&Vt(X.current.id,e?.duration||We.current||0,e?.duration||We.current||0,!0),x===-1){W(0),oe(0),ce(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}kn(1)},la=async e=>{await te(`${M}/folders`,"POST",{path:e}),await Ze(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},pa=async()=>{let e=await fetch(`${M}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},da=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Gt||Qt(!0))},ca=e=>{e.currentTarget.contains(e.relatedTarget)||Qt(!1)},ua=async e=>{e.preventDefault(),Qt(!1);let o=e.dataTransfer,l=[...o?.files||[]],m=l.map(ve=>ve.path).filter(ve=>typeof ve=="string"&&ve),j=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ve=>ve.trim()).filter(ve=>ve.startsWith("file://")).map(ve=>decodeURIComponent(ve.replace(/^file:\/\//,""))),V=[...new Set([...m,...j])];if(V.length){try{let ve=await te(`${M}/import/paths`,"POST",{paths:V});await Ze(),k(ve.added?`\u5DF2\u6DFB\u52A0 ${ve.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ve){qe(ve.message)}return}let ee=l.filter(ve=>ve.size>0);if(!ee.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Re=`drop-${Date.now()}`,Qo="",Cn=0;for(let ve of ee)try{let vr=await fetch(`${M}/import/upload?name=${encodeURIComponent(ve.name)}&batch=${Re}`,{method:"POST",body:ve}),va=await vr.json();vr.ok&&(Qo=va.folder||Qo,Cn+=1)}catch{}if(Qo)try{await te(`${M}/folders`,"POST",{path:Qo})}catch{}await Ze(),k(Cn?`\u5DF2\u5BFC\u5165 ${Cn} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},ma=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await te(`${M}/folders`,"DELETE",{path:e}),P(o=>o===e?"":o),await Ze(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){qe(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),lo()):o.key==="ArrowRight"?(o.preventDefault(),Co(15)):o.key==="ArrowLeft"?(o.preventDefault(),Co(-15)):o.key==="ArrowUp"?(o.preventDefault(),Go(ke.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Go(ke.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[lo,Co,Go]);let zn=e=>{let o=u[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},$n=e=>{let o=u[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${Eo?"nav-collapsed":""}`,onDragOver:da,onDragLeave:ca,onDrop:ua},Gt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,Eo?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Yn},t.default.createElement(se,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(se,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Yn},t.default.createElement(se,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",yn.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(zn).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,l])=>t.default.createElement("button",{key:e,className:`nav-item ${h===e&&!E?"active":""}`,onClick:()=>{P(""),I(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>et(!0)},t.default.createElement(se,{name:"plus",size:16}))),i.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},i.map(e=>t.default.createElement("li",{key:e,title:e,className:E===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{I("all"),Ae("all"),ne(""),P(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),I("all"),Ae("all"),ne(""),P(l=>l===e?"":e))}},t.default.createElement(se,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},tn(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),ma(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Zr),t.default.createElement("p",{className:"subline"},Gr)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${ie!=="idle"?"is-on":""}`,onClick:()=>{ie==="idle"?_r():ie==="listening"&&Gn()},disabled:ie==="starting"||ie==="saving",title:"\u5B9E\u65F6\u5B57\u5E55\uFF1A\u542C\u7CFB\u7EDF\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\u90FD\u80FD\u7528\uFF09"},t.default.createElement(se,{name:"wave",size:16}),t.default.createElement("span",null,ie==="starting"?"\u6253\u5F00\u5B57\u5E55\u7A97\u2026":"\u5B9E\u65F6\u5B57\u5E55")),t.default.createElement("button",{className:`tool-btn ${ye?"is-on":""}`,onClick:()=>xe(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(se,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",cr.length?` ${cr.length}`:"")),t.default.createElement("button",{className:`tool-btn ${bt?"is-on":""}`,onClick:()=>{q(e=>!e),wt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(se,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(se,{name:"search",size:16}),t.default.createElement("input",{value:Y,onChange:e=>ne(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:he,onChange:e=>S(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),bt?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Le.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>wt(mt.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(ht,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!Kt.length&&!Le.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Fe,{hint:`${Kt.length} \u96C6`,disabled:!Kt.length,onSelect:()=>{e(),qo(Kt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(Fe,{hint:`${Le.length} \u96C6`,disabled:!Le.length,onSelect:()=>{e(),qo(Le)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!Le.length,onClick:()=>pr(Le)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{wt([]),q(!1)}},"\u53D6\u6D88")):null,tt?t.default.createElement("div",{className:"banner error",onClick:()=>qe("")},tt," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,ae?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>$e(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},ae.artist,ae.album?` \xB7 ${ae.album}`:"")),t.default.createElement("div",{className:"episode-view",style:go?{"--episode-left-w":`${go}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:qn},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:Ar,disabled:Io,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(po,{item:ae,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},Io?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:fo,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let o=e.target.files?.[0];e.target.value="",jr(o)}})),t.default.createElement("h2",{className:"episode-title"},ae.title),t.default.createElement("p",{className:"episode-sub"},ae.artist,ae.album?` \xB7 ${ae.album}`:""),t.default.createElement("p",{className:"episode-path",title:ae.file},ae.location||ae.file),t.default.createElement("p",{className:"episode-stats"},Sn(ae.duration)," \xB7 ",Mn(ae.mtime)," \xB7 \u5DF2\u542C ",Math.round($n(ae)),"%"),ae.shownotes?t.default.createElement("div",{className:`episode-notes ${O?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>T(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",O?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},ae.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:lo},Pe&&F?.id===ae.id?"\u6682\u505C":"\u64AD\u653E"),G==="queued"||G==="running"?t.default.createElement("button",{className:"btn ghost",onClick:bn},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:$o},ae.source==="xyz"?z?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":z?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(ht,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,ae.source==="xyz"?t.default.createElement(Fe,{onSelect:()=>{e(),qr()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,ae.hasCover?t.default.createElement(Fe,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),Ur()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(Fe,{danger:!0,onSelect:()=>{e(),pr([ae.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:Lr,onPointerMove:Er,onPointerUp:Jn,onPointerCancel:Jn,onDoubleClick:Or,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement(on,{inline:!0,transcript:z,status:G,progress:Je?.progress,stage:Je?.stage,chunks:Je?.chunks,queued:Je?.queued,elapsed:Xe,editingId:yt,draft:jt,onDraftChange:bo,onEditLine:Rn,onSaveLine:er,onCancelEdit:()=>kt(null),onSplitLine:tr,onMergeLine:or,onValidate:rr,onResegment:nr,issues:Oo,onCancel:bn,error:Jt,position:Z,fontSize:xt,onFontSize:xn,width:Lt.width,height:Lt.height,onResize:Kn,onSeek:Qe,onClose:()=>$e(null),onStart:$o,target:me,job:ot,onChangeTarget:lr,onTranslate:ar,onRetranslate:sr,onRetranslateLine:ir,onOpenSettings:()=>ft(!0)})))):h==="xyz"?t.default.createElement(An,{onPlay:Qr,currentId:F?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${De===e?"is-on":""}`,onClick:()=>Ae(e)},o))),h==="all"&&!Y&&yn.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},yn.map(e=>{let o=$n(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${F?.id===e.id?"is-current":""}`,onClick:()=>Yo(e,!0)},t.default.createElement(po,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,Y.trim().length>=2&&fe.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},fe.length)),fe.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Rr(e)},t.default.createElement("span",{className:"hit-time"},Ee(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,E?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},io.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(se,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===io.length-1?"is-current":""}`,onClick:()=>Oe(e.rel),disabled:o===io.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Ke&&E&&so.length>0&&!Y?t.default.createElement("div",{className:"folder-rows"},so.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Oe(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(se,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Ke?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):mt.length===0&&!(E&&so.length>0&&!Y)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":E?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${so.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>et(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&E?t.default.createElement("button",{className:"btn",onClick:()=>P("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},mt.map((e,o)=>{let l=$n(e),m=F?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${zn(e)?"is-finished":""} ${bt&&Le.includes(e.id)?"is-selected":""}`,onClick:()=>bt?Kr(e.id):Yo(e,!0)},t.default.createElement("span",{className:"col-index row-index"},bt?Le.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(se,{name:"check",size:14})):null:m&&Pe?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(po,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Mn(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Sn(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:j=>{j.stopPropagation(),Xr(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},zn(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(se,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),He&&F&&!ae?t.default.createElement(on,{transcript:z,status:G,progress:Je?.progress,stage:Je?.stage,chunks:Je?.chunks,queued:Je?.queued,elapsed:Xe,editingId:yt,draft:jt,onDraftChange:bo,onEditLine:Rn,onSaveLine:er,onCancelEdit:()=>kt(null),onSplitLine:tr,onMergeLine:or,onValidate:rr,onResegment:nr,issues:Oo,onCancel:bn,error:Jt,position:Z,fontSize:xt,onFontSize:xn,width:Lt.width,height:Lt.height,onResize:Kn,onSeek:Qe,onClose:()=>gt(!1),onStart:$o,target:me,job:ot,onChangeTarget:lr,onTranslate:ar,onRetranslate:sr,onRetranslateLine:ir,onOpenSettings:()=>ft(!0)}):null,ye?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>xe(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},At.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):At.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Sr(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>wn(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!Kt.length,onClick:()=>qo(Kt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Kt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Le.length,onClick:()=>qo(Le)},"\u8F6C\u5199\u5DF2\u9009 ",Le.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:Ye,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(Ce||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Ee(Z)} / ${Ee(Ce)}`,onPointerDown:ea,onPointerMove:ta,onPointerUp:mr,onPointerCancel:mr,onKeyDown:oa},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${Ce?Math.min(100,Math.max(0,Z/Ce*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${Ce?Math.min(100,Math.max(0,Z/Ce*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},F?t.default.createElement("button",{className:"now-open",onClick:()=>$e(F.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(po,{item:F,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:F.title},F.title),t.default.createElement("div",{className:"now-artist"},F.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>kn(-1)},t.default.createElement(se,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Co(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:lo,disabled:!F&&mt.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(se,{name:Pe?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Co(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>kn(1)},t.default.createElement(se,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(ht,{className:`player-subs ${He||Dt?"is-active":""}`,buttonClassName:`subs-btn ${He||Dt?"active":""}`,placement:"up",disabled:!F,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(se,{name:"wave",size:15}),t.default.createElement("span",null,z?"\u5B57\u5E55":G==="queued"||G==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Fe,{checked:He,hint:z?`${z.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),Vr()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(Fe,{checked:Dt,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),Br()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Ee(Z)," / ",Ee(Ce)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>_(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":H},f.rate,"\xD7"),H?t.default.createElement("span",{className:"rate-menu",role:"menu"},Ma.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===f.rate,className:e===f.rate?"is-on":"",onClick:()=>na(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Q?"active":""}`,onClick:()=>ze(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":R},t.default.createElement(se,{name:"moon",size:14}),Q?t.default.createElement("span",{className:"sleep-left"},Ee(Ne)):null),R?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Q&&x!==-1,className:!Q&&x!==-1?"is-on":"",onClick:()=>Nn("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":x===e,className:x===e?"is-on":"",onClick:()=>Nn(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":x===-1,className:x===-1?"is-on":"",onClick:()=>Nn("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:ra,title:"\u9759\u97F3"},t.default.createElement(se,{name:f.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:f.volume,onChange:e=>Go(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),it?t.default.createElement(Ta,{onClose:()=>et(!1),onSubmit:la,onPick:pa}):null,Fn?t.default.createElement(Da,{config:Yt,onClose:()=>ft(!1),onSave:async e=>{let o=await te(`${M}/translate/settings`,"PUT",e);Zt(o),ft(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,lt?t.default.createElement("div",{className:"toast"},lt):null,Dt?t.default.createElement(Dn,{line:zo,speakerLabel:Hr,target:me,status:G,fontSize:xt,onFontSize:xn,x:To.x,y:To.y,width:uo.width,height:uo.height,onMove:Dr,onResize:Ir,onClose:Fr,onSeek:Qe}):null,ie!=="idle"&&!zt&&!vn?t.default.createElement(In,{lines:pe,status:ie,error:pn,device:dn,count:pe.length,elapsed:jo?Math.max(0,Math.round((wo-jo)/1e3)):0,fontSize:xt,native:zt,level:to,hint:oo,opacity:gn,styleSize:Ho,width:a,onStyle:Wr,onStop:Gn,onSave:ro,onClose:()=>ro(!1)}):null,t.default.createElement("audio",{ref:$,preload:"metadata",onPlay:()=>je(!0),onPause:()=>{je(!1);let e=$.current;X.current&&e&&e.currentTime>0&&!e.ended&&Vt(X.current.id,e.currentTime,e.duration||We.current,!0)},onTimeUpdate:aa,onLoadedMetadata:sa,onEnded:ia,onError:()=>{je(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var rn=require("react");function Ia(r){let s=String(r||"").match(/rgba?\(([^)]+)\)/);if(!s)return null;let i=s[1].split(",").map(u=>Number.parseFloat(u));if(i.length<3||i.length>3&&i[3]===0)return null;let p=u=>{let v=u/255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};return .2126*p(i[0])+.7152*p(i[1])+.0722*p(i[2])}function La(){for(let r of[document.body,document.documentElement]){if(!r)continue;let s=getComputedStyle(r).backgroundColor,i=Ia(s);if(i!==null)return i}return null}function Mr(){let r=La();if(r!==null)return r>.5?"light":"dark";let s=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(s)?"light":"dark"}function an(){let[r,s]=(0,rn.useState)(Mr);return(0,rn.useEffect)(()=>{let i=()=>s(Mr());i();let p=new MutationObserver(i);p.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&p.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let u=window.matchMedia("(prefers-color-scheme: light)");return u.addEventListener?.("change",i),()=>{p.disconnect(),u.removeEventListener?.("change",i)}},[]),r}var n=rt(require("react"),1);var sn="0.11.65";var K="/podwave/api";async function Te(r){let s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25 ${s.status}`);return i}async function ge(r,s,i){let p=await fetch(r,{method:s,headers:{"content-type":"application/json"},body:JSON.stringify(i??{})}),u=await p.json().catch(()=>({}));if(!p.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return u}function Ea(r){let s=Math.max(0,Math.round(Number(r)||0)),i=Math.floor(s/3600),p=Math.floor(s%3600/60);return i>0?`${i} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function st(r){let s=Number(r)||0;return s?s<1024**2?`${Math.round(s/1024)} KB`:s<1024**3?`${(s/1024**2).toFixed(1)} MB`:`${(s/1024**3).toFixed(1)} GB`:"0 B"}function Oa(r){if(!r)return"";let s=new Date(r),i=p=>String(p).padStart(2,"0");return`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())} ${i(s.getHours())}:${i(s.getMinutes())}`}function Aa(r){let s=r?.projectDir;return s?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${s}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${s}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function ja(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function Ua(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Bn(){let r=an(),[s,i]=(0,n.useState)([]),[p,u]=(0,n.useState)(""),[v,N]=(0,n.useState)(0),[C,f]=(0,n.useState)(!1),[w,H]=(0,n.useState)(!1),[_,O]=(0,n.useState)(!1),[T,x]=(0,n.useState)([]),[W,Q]=(0,n.useState)(null),[oe,Ne]=(0,n.useState)(""),[ce,R]=(0,n.useState)(!1),[ze,Y]=(0,n.useState)({asrModel:"",translateModel:""}),[ne,fe]=(0,n.useState)(null),[re,he]=(0,n.useState)(null),[S,h]=(0,n.useState)({showSidebarPanel:!0}),[I,E]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[P,we]=(0,n.useState)(null),[Oe,De]=(0,n.useState)(null),[Ae,ue]=(0,n.useState)(null),[$e,F]=(0,n.useState)(!1),[Ie,Pe]=(0,n.useState)("auto"),[je,Z]=(0,n.useState)(!1),[A,Ce]=(0,n.useState)(null),[Ve,Ke]=(0,n.useState)(!1),[Ue,it]=(0,n.useState)(""),[et,tt]=(0,n.useState)(15),[qe,lt]=(0,n.useState)(!0),[y,z]=(0,n.useState)("api"),[L,G]=(0,n.useState)(!0),[c,U]=(0,n.useState)(""),[pt,Po]=(0,n.useState)([]),[xt,Xt]=(0,n.useState)(!0),[Dt,It]=(0,n.useState)("auto"),[To,Do]=(0,n.useState)(!0),[uo,mo]=(0,n.useState)(.78),[Lt,vo]=(0,n.useState)(18),[go,Et]=(0,n.useState)(780),fo=(0,n.useRef)(0),[Io,dt]=(0,n.useState)(""),[Xe,Ot]=(0,n.useState)("api"),[Jt,ct]=(0,n.useState)("https://api.deepseek.com"),[He,gt]=(0,n.useState)("deepseek-chat"),[Yt,Zt]=(0,n.useState)(""),[me,Lo]=(0,n.useState)([]),[ot,nt]=(0,n.useState)(!1),[Fn,ft]=(0,n.useState)(""),[Eo,ln]=(0,n.useState)(!1),[Gt,Qt]=(0,n.useState)(""),[Je,ho]=(0,n.useState)(""),[ye,xe]=(0,n.useState)(""),[At,xo]=(0,n.useState)(""),[bt,q]=(0,n.useState)(""),Le=(0,n.useCallback)(async()=>{try{let[a,b,$,le,Ye,X,ko,We,ke]=await Promise.all([Te(`${K}/history`),Te(`${K}/models`),Te(`${K}/translate/settings`),Te(`${K}/ui-settings`),Te(`${K}/transcribe/settings`),Te(`${K}/import/settings`),Te(`${K}/setup`),Te(`${K}/update`),Te(`${K}/live`)]);we(ko),Ce(We),ko?.job?.status==="running"&&Z(!0),E({mode:X.mode||"copy",orphans:X.orphans||0,orphanBytes:X.orphanBytes||0}),h({showSidebarPanel:le?.showSidebarPanel!==!1}),it((Ye.hotwords||[]).join(" ")),tt(Ye.chunkMinutes||15),lt(Ye.diarize!==!1),z(Ye.provider||"api"),G(Ye.realtime!==!1),U(ke?.deviceId||""),Xt(ke?.saveOnStop!==!1),It(ke?.source||"auto"),Number.isFinite(Number(ke?.opacity))&&mo(Number(ke.opacity)),Number.isFinite(Number(ke?.fontSize))&&vo(Number(ke.fontSize)),Number.isFinite(Number(ke?.width))&&Et(Number(ke.width)),Do(ke?.tap?.supported!==!1),ke?.ready||dt("\u8FD8\u6CA1\u6709 DeepSeek API key\uFF0C\u5B9E\u65F6\u5B57\u5E55\u8981\u5148\u7528\u4E91\u7AEF\u8BC6\u522B"),oo().then(_e=>{_e.length&&!_e.some(Ct=>Ct.label)&&dt("\u8BBE\u5907\u540D\u8FD8\u662F\u7A7A\u7684\uFF0C\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u6388\u6743\u4E00\u6B21\u5C31\u80FD\u770B\u5230\u540D\u5B57")}),i(a.items||[]),u(a.dir||""),N(Number(a.bytes)||0),f(le?.historyOpen===!0),H(le?.envOpen===!0),O(le?.modelsOpen===!0),x(b.models||[]),Q(b.storage||null),Ne(b.storage?.dir||""),Y(b.config||{asrModel:"",translateModel:""}),fe(b.transcribe||null),Qt(b.config?.asrModel||""),ho(b.config?.translateModel||""),he($),Ot($.provider||"api"),ct($.apiBase||"https://api.deepseek.com"),gt($.apiModel||"deepseek-chat"),ge(`${K}/translate/models`,"POST",{base:$.apiBase,key:void 0}).then(_e=>{let Ct=Array.isArray(_e?.models)?_e.models:[];Lo(Ct),ft(Ct.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${Ct.length} \u4E2A\u6A21\u578B`:"")}).catch(()=>{}),Zt(""),q("")}catch(a){q(a.message)}},[]);(0,n.useEffect)(()=>{Le()},[Le]),(0,n.useEffect)(()=>{let a=!1;return Te(`${K}/setup/plan?source=${Ie}&mode=${y==="local"?"local":"basic"}`).then(b=>{a||De(b)}).catch(()=>{}),()=>{a=!0}},[Ie,y,P?.job?.status]),(0,n.useEffect)(()=>{if(!je&&P?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let b=await Te(`${K}/setup`);we(b),b.job?.status!=="running"&&Z(!1)}catch{}},2500);return()=>window.clearInterval(a)},[je,P?.job?.status]);let wt=async()=>{q(""),Z(!0);try{await ge(`${K}/setup/install`,"POST",{source:Ie});let a=await Te(`${K}/setup`);we(a),pe("\u5F00\u59CB\u5B89\u88C5")}catch(a){Z(!1),q(a.message)}},yt=()=>{let a=!C;f(a),ge(`${K}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},kt=(a,b,$)=>{let le=!b;$(le),ge(`${K}/ui-settings`,"PUT",{[a]:le}).catch(()=>{})},jt=Array.isArray(P?.missing)?P.missing.length:0,bo=P?jt?`${jt} \u9879\u5F85\u5B89\u88C5`:"\u5168\u90E8\u5C31\u7EEA":"\u6B63\u5728\u626B\u63CF\u2026",Oo=W?`${W.items?.length||0} \u4E2A \xB7 ${st(W.totalBytes)}`:"",Ao=async()=>{try{await ge(`${K}/history/open`,"POST",{})}catch(a){q(a.message)}},ie=async()=>{q(""),Z(!0);try{await ge(`${K}/setup/install`,"POST",{source:Ie,mode:"local"});let a=await Te(`${K}/setup`);we(a),pe("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){Z(!1),q(a.message)}},ut=async()=>{try{await ge(`${K}/setup/cancel`,"POST",{}),pe("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){q(a.message)}},pe=a=>{xo(a),window.setTimeout(()=>xo(""),2400)},Nt=async()=>{F(!0);try{let a=await Te(`${K}/setup/verify`);ue(a),pe(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){pe(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{F(!1)}},pn=async()=>{try{let a=await Te(`${K}/setup/diagnose`),b=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(b)}catch{let $=document.createElement("textarea");$.value=b,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),$.remove()}pe("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){pe(a.message||"\u590D\u5236\u5931\u8D25")}},Ut=async({silent:a=!1}={})=>{a||nt(!0),a||ft("");try{let b=await ge(`${K}/translate/models`,"POST",{base:Jt,key:Yt.trim()||void 0}),$=Array.isArray(b?.models)?b.models:[];return Lo($),a||ft($.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${$.length} \u4E2A\u6A21\u578B`:"\u8FD9\u4E2A\u5730\u5740\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u6A21\u578B"),$}catch(b){return a||ft(b.message||"\u5217\u8868\u83B7\u53D6\u5931\u8D25"),[]}finally{a||nt(!1)}},dn=async a=>{let b=Xe;Ot(a);try{let $=await ge(`${K}/translate/settings`,"PUT",{provider:a});he($)}catch($){Ot(b),q($.message)}},Rt=async()=>{xe("api"),q("");try{let a={apiBase:Jt,apiModel:He};Xe==="api"&&(a.provider="api"),Yt.trim()&&(a.apiKey=Yt.trim());let b=await ge(`${K}/translate/settings`,"PUT",a);he(b),Zt(""),pe("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{xe("")}},jo=async()=>{xe("models"),q("");try{let a=await ge(`${K}/models`,"PUT",{asrModel:Gt,translateModel:Je});Y(a.config),x(a.models||[]),fe(a.transcribe||null),pe("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{xe("")}},eo=async()=>{try{await ge(`${K}/models/open`,"POST",{})}catch(a){q(a.message)}},wo=async(a,b=!0)=>{R(!0),q("");try{let $=await ge(`${K}/models/dir`,"POST",{dir:a,move:b});Q($.storage||null),x($.models||[]),Ne($.storage?.dir||"");let le=($.moved||[]).length,Ye=($.skipped||[]).length;pe(le||Ye?`\u5DF2\u8FC1\u79FB ${le} \u4E2A\u6A21\u578B${Ye?`\uFF0C${Ye} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch($){q($.message)}finally{R(!1)}},Uo=async a=>{xe(`model:${a}`),q("");try{let b=await ge(`${K}/models/remove`,"POST",{name:a});Q(b||null),x(b.models||[]),pe(`\u5DF2\u5220\u9664 ${a}`)}catch(b){q(b.message)}finally{xe("")}},to=T.length?T:[{name:ze.asrModel||"qwen3-asr-1.7b-8bit",ready:ne?.modelReady},{name:ze.translateModel||"hy-mt2-1.8b-4bit",ready:re?.localReady}],cn=async()=>{Ke(!0);try{Ce(await Te(`${K}/update?force=1`))}catch{pe("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Ke(!1)}},oo=async()=>{try{let b=(await navigator.mediaDevices.enumerateDevices()).filter($=>$.kind==="audioinput");return Po(b),b}catch{return[]}},no=async()=>{dt("\u6B63\u5728\u8981\u4E00\u6B21\u97F3\u9891\u6743\u9650\u2026");try{let b=await navigator.mediaDevices.getUserMedia({audio:!0});for(let $ of b.getTracks())$.stop()}catch(b){dt(`\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\uFF1A${b.message||b}`);return}let a=await oo();dt(a.length?`\u627E\u5230 ${a.length} \u4E2A\u97F3\u9891\u8F93\u5165\uFF0C\u9009\u865A\u62DF\u58F0\u5361\uFF08BlackHole / VB-Cable\uFF09`:"\u6CA1\u627E\u5230\u97F3\u9891\u8F93\u5165\u8BBE\u5907")},zt=a=>{Number.isFinite(Number(a.opacity))&&mo(Number(a.opacity)),Number.isFinite(Number(a.fontSize))&&vo(Number(a.fontSize)),Number.isFinite(Number(a.width))&&Et(Number(a.width)),window.clearTimeout(fo.current),fo.current=window.setTimeout(()=>{ge(`${K}/live/settings`,"PUT",a).catch(b=>q(b.message))},400)},Bt=async()=>{xe("live"),q("");try{let a=pt.find($=>$.deviceId===c)?.label||"",b=await ge(`${K}/live/settings`,"PUT",{deviceId:c,deviceLabel:a,saveOnStop:xt,source:Dt});U(b.deviceId||""),Xt(b.saveOnStop!==!1),It(b.source||"auto"),pe("\u5B9E\u65F6\u5B57\u5E55\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{xe("")}},Ft=a=>a.kind||(/asr|sensevoice|sherpa|moss/i.test(a.name)?"asr":/^hy-mt/i.test(a.name)?"translate":""),Ht=to.filter(a=>Ft(a)==="asr"&&a.ready!==!1),un=to.filter(a=>Ft(a)==="translate"&&a.ready!==!1),Bo=(a,b)=>{if(!b||a.some(le=>le.name===b))return a;let $=to.find(le=>le.name===b);return[{name:b,ready:$?$.ready!==!1:!1,kind:$?.kind||"",missing:!0},...a]},yo=Bo(Ht.length?Ht:Ho,Gt),mn=Bo(un.length?un:Ho,Je),vn=async()=>{xe("ui"),q("");try{let a=await ge(`${K}/ui-settings`,"PUT",{showSidebarPanel:S.showSidebarPanel});h({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),pe("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{xe("")}},$t=async a=>{xe("import"),q("");try{let b=await ge(`${K}/import/settings`,"PUT",{mode:a});E($=>({...$,mode:b.mode})),pe("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(b){q(b.message)}finally{xe("")}},gn=async()=>{if(I.orphans&&window.confirm(`\u6E05\u7406 ${I.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){xe("imports"),q("");try{let a=await ge(`${K}/imports/orphans`,"DELETE",{});E(b=>({...b,orphans:0,orphanBytes:0})),pe(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){q(a.message)}finally{xe("")}}},Fo=async()=>{xe("transcribe"),q("");try{let a=Ue.split(/[\s,，、]+/).map($=>$.trim()).filter(Boolean).slice(0,500),b=await ge(`${K}/transcribe/settings`,"PUT",{provider:y,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(et)||15)),diarize:qe,realtime:L});it((b.hotwords||[]).join(" ")),tt(b.chunkMinutes||15),lt(b.diarize!==!1),z(b.provider||"api"),b.runtime&&fe(b.runtime),pe("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{xe("")}},Ho=to,Wo=!!(sn&&P?.version&&P.version!==sn);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,en),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Wo?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",sn,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",P.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,bt?n.default.createElement("div",{className:"banner error",onClick:()=>q("")},bt):null,At?n.default.createElement("div",{className:"settings-message"},At):null,n.default.createElement("section",{className:`settings-card collapsible ${w?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>kt("envOpen",w,H),"aria-expanded":w,title:w?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},bo),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),w?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),P?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},P.platform?.osLabel," \xB7 ",P.platform?.arch," \xB7 ",P.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",P.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",P.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:pn},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:$e,onClick:Nt},$e?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),Ae?n.default.createElement("ul",{className:"setup-components"},Ae.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(P.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},st(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:Ie,onChange:a=>Pe(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),Oe?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",st(Oe.totalBytes)," \xB7 ",Oe.items.length," \u9879"),n.default.createElement("ul",null,Oe.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?st(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:je||P.job?.status==="running",onClick:wt},je||P.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),P.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:ut},"\u53D6\u6D88"):null),P.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,P.job.stage||P.job.status),n.default.createElement("span",null,P.job.progress||0,"% \xB7 ",st(P.job.bytes)," / ",st(P.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${P.job.progress||0}%`}})),P.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",P.job.error):null,P.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},P.job.warning):null,P.job.status==="done"&&(!P.job.summary||!P.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,P.job.status==="done"&&P.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",P.job.modelsDir):null,Array.isArray(P.job.summary)&&P.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},P.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":st(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5B9E\u65F6\u5B57\u5E55\uFF08\u7CFB\u7EDF\u58F0\u97F3\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u542C\u7535\u8111\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\uFF09\uFF0C\u4E00\u53E5\u4E00\u53E5\u6EDA\u51FA\u4E2D\u6587\uFF0C\u8DDF\u64AD\u5BA2\u7684\u8FDB\u5EA6\u65E0\u5173\u3002 \u5148\u5728\u7CFB\u7EDF\u91CC\u5EFA\u4E00\u4E2A\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF0C\u628A\u58F0\u97F3\u540C\u65F6\u9001\u5230\u626C\u58F0\u5668\u548C\u865A\u62DF\u58F0\u5361\uFF1AmacOS \u7528 BlackHole\uFF0C Windows \u7528 VB-Cable \u6216\u300C\u7ACB\u4F53\u58F0\u6DF7\u97F3\u300D\u3002\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u91C7\u96C6\u65B9\u5F0F"),n.default.createElement("select",{value:Dt,onChange:a=>It(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\uFF08\u4F18\u5148\u7CFB\u7EDF\u97F3\u9891\uFF0C\u4E0D\u9700\u8981\u865A\u62DF\u58F0\u5361\uFF09"),n.default.createElement("option",{value:"tap"},"\u53EA\u770B\u7CFB\u7EDF\u97F3\u9891\uFF08macOS 14.2+\uFF09"),n.default.createElement("option",{value:"browser"},"\u865A\u62DF\u58F0\u5361 / \u9EA6\u514B\u98CE\uFF08BlackHole\uFF09"))),To?null:n.default.createElement("p",{className:"settings-hint"},"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u7CFB\u7EDF\u97F3\u9891\u91C7\u96C6\uFF08\u9700\u8981 macOS 14.2+\uFF09\uFF0C\u53EA\u80FD\u7528\u865A\u62DF\u58F0\u5361\u6216\u9EA6\u514B\u98CE\u3002"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F93\u5165\u8BBE\u5907"),n.default.createElement("select",{value:c,onChange:a=>U(a.target.value)},n.default.createElement("option",{value:""},"\u81EA\u52A8\u9009\uFF08\u4F18\u5148\u865A\u62DF\u58F0\u5361\uFF09"),pt.map((a,b)=>n.default.createElement("option",{key:a.deviceId||b,value:a.deviceId},a.label||`\u97F3\u9891\u8F93\u5165 ${b+1}`)))),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:xt,onChange:a=>Xt(a.target.checked)}),n.default.createElement("span",null,"\u505C\u6B62\u65F6\u95EE\u6211\u8981\u4E0D\u8981\u628A\u8FD9\u6B21\u5B57\u5E55\u5B58\u4E0B\u6765"))),n.default.createElement("div",{className:"settings-fields",style:{marginTop:10}},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6846\u7684\u4E0D\u900F\u660E\u5EA6"),n.default.createElement("input",{type:"range",min:"15",max:"100",step:"1",value:Math.round(uo*100),onChange:a=>zt({opacity:Number(a.target.value)/100}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},Math.round(uo*100),"%")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5B57\u53F7"),n.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:Lt,onChange:a=>zt({fontSize:Number(a.target.value)}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},Lt)),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6846\u7684\u5BBD\u5EA6"),n.default.createElement("input",{type:"range",min:"380",max:"1200",step:"10",value:go,onChange:a=>zt({width:Number(a.target.value)}),style:{flex:"1 1 auto",maxWidth:320}}),n.default.createElement("span",{className:"settings-status"},go)),n.default.createElement("p",{className:"settings-hint",style:{margin:0}},"\u53EA\u5F71\u54CD\u5C4F\u5E55\u4E0A\u90A3\u5757\u5B57\u5E55\u6846\uFF0C\u62D6\u52A8\u5373\u65F6\u751F\u6548\uFF1B\u6587\u5B57\u59CB\u7EC8\u4E0D\u900F\u660E\uFF0C\u53EA\u6709\u5E95\u677F\u4F1A\u53D8\u901A\u900F\u3002")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:no},"\u68C0\u6D4B\u8BBE\u5907"),n.default.createElement("button",{className:"settings-btn primary",onClick:Bt,disabled:ye==="live"},ye==="live"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"),n.default.createElement("span",{className:"settings-status"},Io||(pt.length?`${pt.length} \u4E2A\u97F3\u9891\u8F93\u5165`:"\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u8BFB\u53D6\u8BBE\u5907\u540D")))),n.default.createElement("section",{className:`settings-card history-card ${C?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>yt(),"aria-expanded":C,title:C?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",s.length," \u6761",v?` \xB7 ${st(v)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),C?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",s.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),s.length?n.default.createElement("ul",{className:"history-list"},s.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Ea(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Oa(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ao,disabled:!p},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},p?`${p}${v?` \xB7 ${st(v)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:y,onChange:a=>z(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),y==="api"?n.default.createElement("p",{className:"settings-status"},ne?.api?.hasKey?"\u7528\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u91CC\u90A3\u628A API key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 API key \u2014\u2014 \u53BB\u4E0B\u9762\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u5C31\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},ne?.installed&&ne?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${ne.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:Ue,onChange:a=>it(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:et,onChange:a=>tt(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:L,onChange:a=>G(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:qe,onChange:a=>lt(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Fo,disabled:ye==="transcribe"},ye==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),y==="local"&&!(ne?.installed&&ne?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:ie,disabled:je},je?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:I.mode==="copy",onChange:()=>$t("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:I.mode==="reference",onChange:()=>$t("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:gn,disabled:ye==="imports"||!I.orphans},I.orphans?`\u6E05\u7406 ${I.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(I.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7FFB\u8BD1"),n.default.createElement("p",{className:"settings-hint"},"\u9ED8\u8BA4\u7528 DSH \u91CC\u6B63\u5728\u7528\u7684\u90A3\u4E2A\u6A21\u578B\u7FFB\u8BD1\uFF0C\u4E0D\u7528\u5728\u8FD9\u91CC\u518D\u586B\u4E00\u904D\u5BC6\u94A5\u548C\u6A21\u578B\u540D\u3002\u60F3\u79BB\u7EBF\u5C31\u5207\u6210\u672C\u5730\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u7528"),n.default.createElement("select",{value:Xe,onChange:a=>dn(a.target.value)},n.default.createElement("option",{value:"dsh"},"DSH \u5F53\u524D\u6A21\u578B"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u79BB\u7EBF\uFF09"),n.default.createElement("option",{value:"api"},"\u81EA\u5B9A\u4E49 API"))),Xe==="dsh"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},re?.dshReady?re.dshLabel:"DSH \u91CC\u8FD8\u6CA1\u6709\u9009\u6A21\u578B")),Xe==="local"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u672C\u5730\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},re?.localReady?`${re.localModel}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u8FD8\u6CA1\u4E0B\u8F7D\u672C\u5730\u7FFB\u8BD1\u6A21\u578B")),(Xe==="api"||y==="api")&&n.default.createElement(n.default.Fragment,null,n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Jt,onChange:a=>ct(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),Eo||!me.length?n.default.createElement("input",{value:He,onChange:a=>gt(a.target.value),placeholder:"deepseek-chat"}):n.default.createElement("select",{value:me.includes(He)?He:He?"__saved":"",onChange:a=>gt(a.target.value)},!me.includes(He)&&He&&n.default.createElement("option",{value:"__saved"},He,"\uFF08\u5F53\u524D\uFF0C\u5217\u8868\u91CC\u6CA1\u6709\uFF09"),me.map(a=>n.default.createElement("option",{key:a,value:a},a))),n.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:()=>Ut(),disabled:ot},ot?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u6A21\u578B\u5217\u8868")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:Yt,onChange:a=>Zt(a.target.value),placeholder:re?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${re.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."})))),n.default.createElement("div",{className:"settings-actions"},(Xe==="api"||y==="api")&&n.default.createElement("button",{className:"settings-btn",onClick:Rt,disabled:ye==="api"},ye==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},Xe==="dsh"?"\u8DDF\u968F DSH \u7684\u6A21\u578B\u9009\u62E9\uFF0C\u6362\u6A21\u578B\u5728 DSH \u8BBE\u7F6E\u91CC\u6539":Xe==="local"?"\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1":"\u8D70\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5BC6\u94A5"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:S.showSidebarPanel,onChange:a=>h({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:vn,disabled:ye==="ui"},ye==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:`settings-card collapsible ${_?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>kt("modelsOpen",_,O),"aria-expanded":_,title:_?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},Oo),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),_?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},Aa(W),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),W?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:W.dir},W.dir),n.default.createElement("span",{className:"model-path-size"},Ua(W)," \xB7 \u5171 ",st(W.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:oe,onChange:a=>Ne(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:ce||oe.trim()===W.dir,onClick:()=>wo(oe,!0)},ce?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:eo},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),W.projectDir&&W.dir!==W.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:ce,onClick:()=>wo(W.projectDir,!0)},ja(W)):null,W.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:ce,onClick:()=>wo("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),T.length?n.default.createElement("ul",{className:"model-list"},T.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",st(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||ye===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>Uo(a.name)},ye===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,ne?.modelProblem?n.default.createElement("p",{className:"settings-stale"},ne.modelProblem):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Gt,onChange:a=>Qt(a.target.value)},yo.map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.missing?"\uFF08\u5F53\u524D\uFF0C\u4E0D\u662F\u8F6C\u5199\u6A21\u578B\uFF09":a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:`settings-status ${ne?.modelProblem?"is-warn":""}`},ne?.modelProblem?"\u4E0D\u80FD\u7528":ne?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Je,onChange:a=>ho(a.target.value)},mn.map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.missing?"\uFF08\u5F53\u524D\uFF0C\u4E0D\u662F\u7FFB\u8BD1\u6A21\u578B\uFF09":a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},re?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:jo,disabled:ye==="models"},ye==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},A?.current?`v${A.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},A?.latest?`v${A.latest}`:A?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},A?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":A?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${A.error}\uFF09\u3002`:A?.latest?A?.current&&A?.latest&&A.current!==A.latest&&A.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:cn,disabled:Ve},Ve?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),A?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(A.checkedAt).toLocaleString()):null))))}function Pr({size:r=16}){return vt.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},vt.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),vt.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),vt.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),vt.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),vt.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ba(){let r=an();return vt.default.createElement("div",{className:"podwave-root","data-pw-theme":r},vt.default.createElement("style",null,en),vt.default.createElement(Un,null))}function Fa(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Ba)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Bn));let s=null,i=!0,p=!1,u=!1,v="podwave-hide-nav",N=f=>{if(typeof document>"u")return;let w=document.getElementById(v);f&&!w?(w=document.createElement("style"),w.id=v,w.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(w)):!f&&w&&w.remove()};r.slots.inject("sidebar.panellist",()=>{if(p=!0,!(!i||s))return s=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Pr),u=!0,()=>{s=null,u=!1}});let C=f=>{if(N(!f),i=f,f&&p&&!s)s=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Pr),u=!0;else if(!f&&s){let w=s;s=null;try{typeof w?.dispose=="function"?w.dispose():typeof w=="function"?w():typeof w?.dispose>"u"&&typeof w?.unregister=="function"&&w.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>C(f?.showSidebarPanel!==!1)).catch(()=>C(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{C(f?.detail?.showSidebarPanel!==!1)})}var Ha=["slots"];

return module.exports}})
