window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ir=Object.create;var mo=Object.defineProperty;var lr=Object.getOwnPropertyDescriptor;var pr=Object.getOwnPropertyNames;var dr=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var ur=(r,i)=>{for(var s in i)mo(r,s,{get:i[s],enumerable:!0})},vn=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of pr(i))!cr.call(r,v)&&v!==s&&mo(r,v,{get:()=>i[v],enumerable:!(c=lr(i,v))||c.enumerable});return r};var Re=(r,i,s)=>(s=r!=null?ir(dr(r)):{},vn(i||!r||!r.__esModule?mo(s,"default",{value:r,enumerable:!0}):s,r)),mr=r=>vn(mo({},"__esModule",{value:!0}),r);var Dr={};ur(Dr,{apply:()=>Pr,inject:()=>Tr});module.exports=mr(Dr);var tt=Re(require("react"),1);var go=`
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
.podwave-root .podwave-settings .history-card.is-open .card-caret { transform: rotate(180deg); }
.podwave-root .podwave-settings .history-card:not(.is-open) { padding-bottom: 6px; }
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
`;var t=Re(require("react"),1);var P=Re(require("react"),1);function te({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),P.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),P.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),P.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return P.default.createElement("svg",{...s},P.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),P.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),P.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),P.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),P.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),P.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),P.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),P.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Ao=Re(require("react"),1);function Ae(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function Io(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Eo(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function fn(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function vo(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var vr="/podwave/api";function Lt({item:r,size:i=44,className:s=""}){let c={width:i,height:i};if(r&&r.hasCover){let v=r.coverAt?`?v=${r.coverAt}`:"";return Ao.default.createElement("img",{className:`cover ${s}`,style:c,src:`${vr}/episodes/${r.id}/cover${v}`,alt:"",loading:"lazy",draggable:!1})}return Ao.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},fn(r&&r.title))}var g=Re(require("react"),1);var be=Re(require("react"),1);function st({trigger:r,title:i,align:s="end",placement:c="down",className:v="",buttonClassName:f="",disabled:b=!1,children:M}){let[$,I]=(0,be.useState)(!1),A=(0,be.useRef)(null);(0,be.useEffect)(()=>{if(!$)return;let E=h=>{A.current?.contains(h.target)||I(!1)},H=h=>{h.key==="Escape"&&I(!1)};return document.addEventListener("pointerdown",E),document.addEventListener("keydown",H),()=>{document.removeEventListener("pointerdown",E),document.removeEventListener("keydown",H)}},[$]),(0,be.useEffect)(()=>{b&&$&&I(!1)},[b,$]);let j=["pop-panel",s==="start"?"is-start":"",c==="up"?"is-up":""].filter(Boolean).join(" ");return be.default.createElement("span",{className:`pop-wrap ${v}`,ref:A},be.default.createElement("button",{type:"button",className:f||"pop-btn",onClick:()=>I(E=>!E),title:i,disabled:b,"aria-haspopup":"menu","aria-expanded":$},r),$?be.default.createElement("span",{className:j,role:"menu"},M({close:()=>I(!1)})):null)}function Pe({children:r,hint:i,checked:s=!1,danger:c=!1,disabled:v=!1,onSelect:f}){let b=["pop-item",s?"is-on":"",c?"is-danger":""].filter(Boolean).join(" ");return be.default.createElement("button",{type:"button",className:b,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:v,onClick:f},be.default.createElement("span",null,r),i?be.default.createElement("span",{className:"pop-hint"},i):null)}function jo({children:r,hint:i,href:s,onSelect:c}){return be.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:c},be.default.createElement("span",null,r),i?be.default.createElement("span",{className:"pop-hint"},i):null)}var Yt=Re(require("react"),1);function _t({value:r,onChange:i,compact:s=!1}){let c=Number.isFinite(Number(r))?Number(r):15;return Yt.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},Yt.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),Yt.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:c,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:v=>i(Number(v.target.value))}),Yt.default.createElement("span",{className:"sub-size-value"},c))}var hn="/podwave/api";function fo({transcript:r,status:i,progress:s,stage:c,chunks:v,queued:f,elapsed:b,error:M,position:$,onSeek:I,onClose:A,onStart:j,onCancel:E,target:H,job:h,onChangeTarget:G,onTranslate:Q,onRetranslate:oe=null,onRetranslateLine:je=null,onOpenSettings:le,inline:R=!1,editingId:pe=null,draft:X="",onDraftChange:De,onEditLine:ue,onSaveLine:ee,onCancelEdit:me,onSplitLine:u,onMergeLine:y,onValidate:L,onResegment:T,issues:ae=[],fontSize:Ie=15,onFontSize:Le=null,width:ye=null,height:ge=null,onResize:se=null}){let ne=(0,g.useRef)(null),C=(0,g.useRef)(null),J=(0,g.useRef)(null),ve=(0,g.useRef)(null),[Ve,Z]=(0,g.useState)(!1),K=r?.lines?.findIndex(x=>$>=x.start&&$<x.end)??-1;(0,g.useEffect)(()=>{if(K<0||!ne.current)return;ne.current.querySelector(`[data-seg="${K}"]`)?.scrollIntoView({block:"nearest"})},[K]);let de=x=>{let w=ve.current;if(!w)return null;let N=x.clientX-w.startX,q=x.clientY-w.startY,d=Math.max(320,window.innerWidth-60),D=Math.max(220,window.innerHeight-(R?160:140));return R?{width:null,height:Math.round(Math.min(D,Math.max(240,w.height+q)))}:{width:Math.round(Math.min(d,Math.max(320,w.width-N))),height:Math.round(Math.min(D,Math.max(200,w.height-q)))}},Oe=x=>{if(x.button!==void 0&&x.button!==0)return;let w=J.current;if(!w||!se)return;x.preventDefault();let N=w.getBoundingClientRect();ve.current={startX:x.clientX,startY:x.clientY,width:N.width,height:N.height},x.currentTarget.setPointerCapture?.(x.pointerId)},Ee=x=>{if(!ve.current)return;let w=de(x);w&&se(w.width,w.height,!1)},$e=x=>{if(!ve.current)return;let w=de(x);ve.current=null,x.currentTarget.releasePointerCapture?.(x.pointerId),w&&se(w.width,w.height,!0)},Ye=i==="queued"||i==="running",Ne=h?.status==="running"||h?.status==="queued",qe=h?.missing??0,Be=Ne?`\u7FFB\u8BD1\u4E2D${h?.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""}`:h?.status==="partial"?"\u7EED\u7FFB":h?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",ot=async()=>{let w=(r?.lines||[]).map(N=>{let q=Ae(N.start),d=H?N.translations?.[H]:"";return d?`${q} ${N.text}
${" ".repeat(q.length+1)}${d}`:`${q} ${N.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(w);else{let N=document.createElement("textarea");N.value=w,N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N)}Z(!0),setTimeout(()=>Z(!1),1600)}catch{Z(!1)}};return g.default.createElement("section",{ref:J,className:`transcript-panel ${R?"inline":""} ${ge?"is-sized":""}`,style:{"--sub-size":`${Ie}px`,width:!R&&ye?`${ye}px`:void 0,height:ge?`${ge}px`:void 0,maxHeight:ge?"none":void 0}},g.default.createElement("header",{className:"transcript-head"},g.default.createElement("h3",null,"\u5B57\u5E55"),r?g.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,g.default.createElement("div",{className:"transcript-actions"},g.default.createElement("select",{className:"tr-select",value:H,onChange:x=>G(x.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},g.default.createElement("option",{value:""},"\u5BF9\u7167"),g.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),g.default.createElement("option",{value:"en"},"English")),Le?g.default.createElement(st,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${Ie}px`,align:"end"},()=>g.default.createElement("span",{className:"pop-fs"},g.default.createElement(_t,{value:Ie,onChange:Le}))):null,r&&H&&Q?Ne?g.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},Be):qe>0?g.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Q,title:`\u8FD8\u6709 ${qe} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},Be):null:null,g.default.createElement(st,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:x})=>g.default.createElement(g.default.Fragment,null,r?g.default.createElement(Pe,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{x(),L()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&T?g.default.createElement(Pe,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{x(),T()}},"\u6574\u7406\u65AD\u53E5"):null,r&&H&&oe?g.default.createElement(Pe,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{x(),oe()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,g.default.createElement(Pe,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{x(),le()}},"\u8BBE\u7F6E"))),r?g.default.createElement(st,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:x})=>g.default.createElement(g.default.Fragment,null,g.default.createElement(jo,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${hn}/episodes/${r.id}/transcript/export?format=srt`,onSelect:x},"\u5B57\u5E55\u6587\u4EF6 .srt"),g.default.createElement(jo,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${hn}/episodes/${r.id}/transcript/export?format=md`,onSelect:x},"\u6587\u7A3F .md"),g.default.createElement(Pe,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:ot},Ve?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,R?null:g.default.createElement("button",{className:"transcript-close",onClick:A,title:"\u6536\u8D77"},"\xD7"))),g.default.createElement("div",{className:"transcript-body",ref:ne},r&&Ye?g.default.createElement("div",{className:"tr-strip"},g.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),E?g.default.createElement("button",{className:"seg-tool",onClick:E},"\u53D6\u6D88"):null):null,r&&ae?.length?g.default.createElement("div",{className:"tr-issues"},ae.slice(0,5).map(x=>g.default.createElement("div",{key:x},"\xB7 ",x)),ae.length>5?g.default.createElement("div",null,"\u2026\u5171 ",ae.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?g.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?g.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,h?.status==="partial"?g.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,h?.status==="none"&&H&&r&&(h.missing??0)>0?g.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,r?r.lines.map((x,w)=>g.default.createElement("div",{key:x.id,"data-seg":w,className:`seg-row ${w===K?"active":""} ${pe===x.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ae(x.start)}`,onClick:()=>I(x.start),onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),I(x.start))}},g.default.createElement("span",{className:"seg-time"},Ae(x.start)),pe===x.id?g.default.createElement("span",{className:"seg-edit",onClick:N=>N.stopPropagation()},g.default.createElement("textarea",{ref:C,value:X,rows:Math.min(4,Math.max(2,Math.ceil((X.length||1)/40))),onChange:N=>De(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.metaKey||N.ctrlKey)&&ee(x.id),N.key==="Escape"&&me()}}),g.default.createElement("span",{className:"seg-edit-actions"},g.default.createElement("button",{className:"seg-tool",onClick:()=>ee(x.id)},"\u4FDD\u5B58"),g.default.createElement("button",{className:"seg-tool",onClick:()=>u(x.id,C.current?.selectionStart??Math.floor(X.length/2))},"\u62C6\u5206"),H&&je?g.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>je(x)},"\u91CD\u7FFB"):null,g.default.createElement("button",{className:"seg-tool",onClick:me},"\u53D6\u6D88"))):g.default.createElement(g.default.Fragment,null,x.speaker!=null?g.default.createElement("span",{className:`seg-speaker spk-${x.speaker%5}`},r.speakers?.[x.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${x.speaker+1}`):null,g.default.createElement("span",{className:"seg-text"},x.text,x.translations?.[H]?g.default.createElement("span",{className:"seg-trans"},x.translations[H]):null),g.default.createElement("span",{className:"seg-tools"},g.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:N=>{N.stopPropagation(),ue(x)}},"\u270E"),w<r.lines.length-1?g.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:N=>{N.stopPropagation(),y(x.id)}},"\u21E3"):null)))):Ye?g.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",s?.percent!=null?g.default.createElement("span",{className:"tx-progress"},g.default.createElement("span",{style:{width:`${s.percent}%`}})):null,g.default.createElement("br",null),g.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),g.default.createElement("br",null),E?g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:E},"\u53D6\u6D88\u8F6C\u5199"):null):M?g.default.createElement("div",{className:"transcript-status"},g.default.createElement("span",{className:"err"},M),g.default.createElement("br",null),g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:j},"\u91CD\u8BD5")):g.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",g.default.createElement("br",null),g.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:j},"\u5F00\u59CB\u8F6C\u5199"))),se?g.default.createElement(g.default.Fragment,null,R?null:g.default.createElement(g.default.Fragment,null,g.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:Oe,onPointerMove:Ee,onPointerUp:$e,onPointerCancel:$e,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),g.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:Oe,onPointerMove:Ee,onPointerUp:$e,onPointerCancel:$e,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),g.default.createElement("span",{className:`transcript-resize ${R?"is-inline":""}`,onPointerDown:Oe,onPointerMove:Ee,onPointerUp:$e,onPointerCancel:$e,onDoubleClick:()=>se(null,null,!0),title:R?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var O=Re(require("react"),1);function Lo({line:r,target:i,fontSize:s,onFontSize:c,x:v,y:f,width:b,height:M,onMove:$,onResize:I,onClose:A,onSeek:j,speakerLabel:E,status:H}){let h=(0,O.useRef)(null),G=(0,O.useRef)(null),Q=(0,O.useRef)(null),oe=(0,O.useCallback)((u,y)=>{let L=h.current,T=L?.offsetWidth||420,ae=L?.offsetHeight||120,Ie=Math.max(8,window.innerWidth-T-8),Le=Math.max(8,window.innerHeight-ae-8);return{x:Math.min(Ie,Math.max(8,u)),y:Math.min(Le,Math.max(8,y))}},[]),je=(0,O.useCallback)(u=>{if(u.button!==void 0&&u.button!==0)return;let y=h.current;if(!y)return;let L=y.getBoundingClientRect();G.current={dx:u.clientX-L.left,dy:u.clientY-L.top},u.currentTarget.setPointerCapture?.(u.pointerId)},[]),le=(0,O.useCallback)(u=>{let y=G.current;if(!y)return;let L=oe(u.clientX-y.dx,u.clientY-y.dy);$(L.x,L.y,!1)},[oe,$]),R=(0,O.useCallback)(u=>{let y=G.current;if(!y)return;G.current=null,u.currentTarget.releasePointerCapture?.(u.pointerId);let L=oe(u.clientX-y.dx,u.clientY-y.dy);$(L.x,L.y,!0)},[oe,$]),pe=(0,O.useCallback)(u=>{if(u.button!==void 0&&u.button!==0)return;u.stopPropagation();let y=h.current;if(!y)return;let L=y.getBoundingClientRect();Q.current={startX:u.clientX,startY:u.clientY,width:L.width,height:L.height},u.currentTarget.setPointerCapture?.(u.pointerId)},[]),X=(0,O.useCallback)(u=>{let y=Q.current;if(!y)return null;let L=Math.max(240,window.innerWidth-(v==null?16:v+8)),T=Math.max(92,window.innerHeight-(f==null?16:f+8));return{width:Math.round(Math.min(L,Math.max(240,y.width+(u.clientX-y.startX)))),height:Math.round(Math.min(T,Math.max(92,y.height+(u.clientY-y.startY))))}},[v,f]),De=(0,O.useCallback)(u=>{if(!Q.current)return;u.stopPropagation();let y=X(u);y&&I(y.width,y.height,!1)},[I,X]),ue=(0,O.useCallback)(u=>{if(!Q.current)return;u.stopPropagation();let y=X(u);Q.current=null,u.currentTarget.releasePointerCapture?.(u.pointerId),y&&I(y.width,y.height,!0)},[I,X]);(0,O.useEffect)(()=>{let u=y=>{y.key==="Escape"&&A()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[A]);let ee=r&&i?r.translations?.[i]:"",me=H==="queued"||H==="running";return O.default.createElement("div",{ref:h,className:`caption-overlay ${M?"is-sized":""}`,style:{left:v??void 0,top:f??void 0,right:v==null?void 0:"auto",bottom:f==null?void 0:"auto",width:b?`${b}px`:void 0,height:M?`${M}px`:void 0,"--sub-size":`${s||15}px`}},O.default.createElement("div",{className:"caption-head",onPointerDown:je,onPointerMove:le,onPointerUp:R,onPointerCancel:R,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},O.default.createElement(te,{name:"wave",size:13}),O.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),O.default.createElement(_t,{value:s,onChange:c,compact:!0}),O.default.createElement("button",{className:"caption-close",onClick:A,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),O.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?j(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:u=>{r&&(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),j(r.start))},title:r?`\u8DF3\u5230 ${Ae(r.start)}`:void 0},r?O.default.createElement(O.default.Fragment,null,E?O.default.createElement("span",{className:"caption-speaker"},E):null,O.default.createElement("div",{className:"caption-text"},r.text),ee?O.default.createElement("div",{className:"caption-trans"},ee):null):O.default.createElement("div",{className:"caption-hint"},me?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),O.default.createElement("span",{className:"caption-resize",onPointerDown:pe,onPointerMove:De,onPointerUp:ue,onPointerCancel:ue,onDoubleClick:()=>I(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var p=Re(require("react"),1),we="/podwave/api";async function Je(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Ot(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function xn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function bn(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Oo({onPlay:r,currentId:i}){let[s,c]=(0,p.useState)(null),[v,f]=(0,p.useState)(""),[b,M]=(0,p.useState)(""),[$,I]=(0,p.useState)(""),[A,j]=(0,p.useState)(""),[E,H]=(0,p.useState)(0),[h,G]=(0,p.useState)(!1),[Q,oe]=(0,p.useState)(""),[je,le]=(0,p.useState)(""),[R,pe]=(0,p.useState)([]),[X,De]=(0,p.useState)(!1),[ue,ee]=(0,p.useState)(null),[me,u]=(0,p.useState)([]),[y,L]=(0,p.useState)(null),[T,ae]=(0,p.useState)(!1),[Ie,Le]=(0,p.useState)(""),[ye,ge]=(0,p.useState)(null),[se,ne]=(0,p.useState)(!1),[C,J]=(0,p.useState)(null),[ve,Ve]=(0,p.useState)(!1),Z=(0,p.useCallback)(async(d=!1)=>{De(!0);try{let D=await Je(`${we}/xyz/subscriptions${d?"?refresh=1":""}`);pe(D.items||[])}catch(D){K(D)}finally{De(!1)}},[]);function K(d){let D=String(d?.message||"");if(D.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||D.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(nt=>({...nt||{},loggedIn:!1})),pe([]),ee(null),u([]),oe(""),f("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}f(de(D))}function de(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function Oe(){try{await Ot(`${we}/xyz/open-web`,{})}catch(d){K(d)}}(0,p.useEffect)(()=>{Je(`${we}/xyz/status`).then(d=>{c(d),d.loggedIn&&Z()}).catch(d=>K(d)),Je(`${we}/xyz/local-app`).then(d=>J(d)).catch(()=>J({available:!1}))},[Z]),(0,p.useEffect)(()=>{if(!E)return;let d=setInterval(()=>H(D=>Math.max(0,D-1)),1e3);return()=>clearInterval(d)},[E]);async function Ee(){if(f(""),!/^1\d{10}$/.test($.trim())){f("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let d=await Ot(`${we}/xyz/auth/send-code`,{phone:$.trim(),areaCode:"+86"});H(60),d.devCode&&f(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){K(d)}finally{M("")}}async function $e(){if(f(""),!$.trim()||!A.trim()){f("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await Ot(`${we}/xyz/auth/login`,{phone:$.trim(),code:A.trim(),areaCode:"+86"});let d=await Je(`${we}/xyz/status`);c(d),await Z()}catch(d){K(d)}finally{M("")}}async function Ye(){if(f(""),!Q.trim()){f("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await Ot(`${we}/xyz/auth/token`,{refreshToken:Q.trim(),deviceId:je.trim()});let d=await Je(`${we}/xyz/status`);c(d),oe(""),await Z()}catch(d){K(d)}finally{M("")}}async function Ne(){f("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");oe(d.trim())}catch(d){f(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function qe(){f(""),M("app");try{await Ot(`${we}/xyz/auth/from-app`,{});let d=await Je(`${we}/xyz/status`);c(d),await Z(!0)}catch(d){K(d)}finally{Je(`${we}/xyz/local-app`).then(d=>J(d)).catch(()=>{}),M("")}}async function Be(){M("logout");try{await Ot(`${we}/xyz/auth/logout`,{}),c({loggedIn:!1}),pe([]),ee(null),u([])}catch(d){K(d)}finally{M("")}}async function ot(d){ee(d),u([]),L(null),ae(!0),f("");try{let D=await Je(`${we}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);u(D.items||[]),L(D.loadMoreKey||null)}catch(D){K(D)}finally{ae(!1)}}async function x(){if(!(!ue||!y||T)){ae(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:y}),D=await Je(`${we}/xyz/podcast/${encodeURIComponent(ue.pid)}/episodes?${d}`);u(nt=>[...nt,...D.items||[]]),L(D.loadMoreKey||null)}catch(d){K(d)}finally{ae(!1)}}}async function w(d){M(`play:${d.eid}`),f("");try{await r(d)}catch(D){K(D)}finally{M("")}}async function N(){if(f(""),!Ie.trim()){f("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}ne(!0);try{let d=Ie.trim();if(/\/episode\//i.test(d)){let D=await Je(`${we}/xyz/public/episode?url=${encodeURIComponent(d)}`);ge({pid:D.podcast.pid,title:D.podcast.title,author:D.podcast.author,episodes:[D.episode]})}else{let D=await Je(`${we}/xyz/public/podcast?url=${encodeURIComponent(d)}`);ge(D.podcast)}}catch(d){K(d)}finally{ne(!1)}}async function q(d){M(`pplay:${d.eid}`),f("");try{await r({...d,public:!0})}catch(D){K(D)}finally{M("")}}return s?s.loggedIn?ue?p.default.createElement("div",{className:"xyz-panel"},p.default.createElement("div",{className:"xyz-head"},p.default.createElement("button",{className:"btn ghost",onClick:()=>{ee(null),u([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),p.default.createElement("div",{className:"xyz-podcast-title"},ue.title)),T&&me.length===0?p.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,p.default.createElement("div",{className:"xyz-eps"},me.map(d=>p.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},p.default.createElement("div",{className:"xyz-ep-main"},p.default.createElement("div",{className:"xyz-ep-title"},d.title),p.default.createElement("div",{className:"xyz-ep-meta"},bn(d.pubDate)," \xB7 ",xn(d.duration))),p.default.createElement("button",{className:"btn primary",disabled:b===`play:${d.eid}`,onClick:()=>w(d)},b===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!T&&me.length===0?p.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,y?p.default.createElement("button",{className:"btn ghost xyz-more",disabled:T,onClick:x},T?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?p.default.createElement("p",{className:"xyz-error"},v):null):p.default.createElement("div",{className:"xyz-panel"},p.default.createElement("div",{className:"xyz-head"},p.default.createElement("div",null,p.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),p.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),p.default.createElement("div",{className:"xyz-head-actions"},p.default.createElement("button",{className:"btn ghost",disabled:X,onClick:()=>Z(!0)},X?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),p.default.createElement("button",{className:"btn ghost",disabled:b==="logout",onClick:Be},"\u9000\u51FA\u767B\u5F55"))),X?p.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,p.default.createElement("div",{className:"xyz-subs"},R.map(d=>p.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>ot(d)},d.cover?p.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):p.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),p.default.createElement("div",{className:"xyz-sub-text"},p.default.createElement("div",{className:"xyz-sub-title"},d.title),p.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!X&&R.length===0?p.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?p.default.createElement("p",{className:"xyz-error"},v):null):p.default.createElement("div",{className:"xyz-panel"},p.default.createElement("div",{className:"xyz-login"},p.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),p.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),p.default.createElement("div",{className:"xyz-actions"},p.default.createElement("button",{className:"btn primary",disabled:b==="app",onClick:qe},b==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),p.default.createElement("p",{className:"xyz-hint"},C===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":C.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${C.deviceId?`\uFF08\u8BBE\u5907 ${C.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${C.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),p.default.createElement("button",{className:"xyz-link",onClick:()=>Ve(d=>!d)},ve?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),ve?p.default.createElement(p.default.Fragment,null,p.default.createElement("ol",{className:"xyz-steps"},p.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),p.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),p.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",p.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",p.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),p.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),p.default.createElement("div",{className:"xyz-actions"},p.default.createElement("button",{className:"btn ghost",onClick:Oe},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),p.default.createElement("div",{className:"xyz-advanced"},p.default.createElement("label",null,p.default.createElement("span",null,"refresh token \u6216 access token"),p.default.createElement("input",{value:Q,onChange:d=>oe(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),p.default.createElement("button",{className:"xyz-link",type:"button",onClick:Ne},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),p.default.createElement("label",null,p.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),p.default.createElement("input",{value:je,onChange:d=>le(d.target.value),placeholder:"x-jike-device-id"})),p.default.createElement("button",{className:"btn primary",disabled:b==="token",onClick:Ye},b==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),p.default.createElement("button",{className:"xyz-link",onClick:()=>G(d=>!d)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"xyz-fields"},p.default.createElement("label",null,p.default.createElement("span",null,"\u624B\u673A\u53F7"),p.default.createElement("input",{value:$,onChange:d=>I(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),p.default.createElement("button",{className:"btn ghost",disabled:b==="send"||E>0,onClick:Ee},E>0?`${E}s \u540E\u91CD\u53D1`:b==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),p.default.createElement("div",{className:"xyz-fields"},p.default.createElement("label",null,p.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),p.default.createElement("input",{value:A,onChange:d=>j(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),p.default.createElement("button",{className:"btn primary",disabled:b==="login",onClick:$e},b==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,p.default.createElement("div",{className:"xyz-public"},p.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),p.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),p.default.createElement("div",{className:"xyz-fields"},p.default.createElement("label",null,p.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),p.default.createElement("input",{value:Ie,onChange:d=>Le(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),p.default.createElement("button",{className:"btn ghost",disabled:se,onClick:N},se?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ye?p.default.createElement("div",{className:"xyz-eps"},p.default.createElement("div",{className:"xyz-ep-title"},ye.title,p.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ye.author)),ye.episodes.map(d=>p.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},p.default.createElement("div",{className:"xyz-ep-main"},p.default.createElement("div",{className:"xyz-ep-title"},d.title),p.default.createElement("div",{className:"xyz-ep-meta"},bn(d.pubDate)," \xB7 ",xn(d.duration))),p.default.createElement("button",{className:"btn primary",disabled:b===`pplay:${d.eid}`,onClick:()=>q(d)},b===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?p.default.createElement("p",{className:"xyz-error"},v):null)):p.default.createElement("div",{className:"xyz-panel"},p.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Bo(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function wn(r,i){let s=Bo(i),c=s?`${s}/`:"",v=new Map;for(let f of r){let b=Bo(f?.rel);if(!b||c&&!b.startsWith(c))continue;let $=b.slice(c.length).split("/")[0];if(!$)continue;let I=c?`${c}${$}`:$,A=v.get(I)||{rel:I,name:$,count:0};A.count+=1,v.set(I,A)}return[...v.values()].sort((f,b)=>f.name.localeCompare(b.name,"zh-Hans-CN"))}function yn(r,i){let s=[{rel:"",label:r}],c=Bo(i);if(!c)return s;let v="";for(let f of c.split("/").filter(Boolean))v=v?`${v}/${f}`:f,s.push({rel:v,label:f});return s}function kn(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var z="/podwave/api",fr=[.5,.75,1,1.25,1.5,1.75,2];async function ke(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function ce(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}async function hr(r,i=1200){let s=await createImageBitmap(r),c=Math.min(1,i/Math.max(s.width,s.height)),v=Math.max(1,Math.round(s.width*c)),f=Math.max(1,Math.round(s.height*c)),b=document.createElement("canvas");b.width=v,b.height=f;let M=b.getContext("2d");M.fillStyle="#16161a",M.fillRect(0,0,v,f),M.drawImage(s,0,0,v,f),typeof s.close=="function"&&s.close();let $=await new Promise(I=>b.toBlob(I,"image/jpeg",.9));if(!$)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return $}function xr({onSubmit:r,onPick:i,onClose:s}){let[c,v]=(0,t.useState)(""),[f,b]=(0,t.useState)(!1),[M,$]=(0,t.useState)(!1),[I,A]=(0,t.useState)(""),j=(0,t.useRef)(null);return(0,t.useEffect)(()=>{j.current?.focus();let h=G=>{G.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!c.trim()||f)){b(!0),A("");try{await r(c.trim()),s()}catch(G){A(G.message),b(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){$(!0),A("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),s())}catch(h){A(h.message)}finally{$(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:j,value:c,onChange:h=>v(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:f||!c.trim()},f?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),I?t.default.createElement("div",{className:"dialog-error"},I):null))}function br({config:r,onClose:i,onSave:s}){let[c,v]=(0,t.useState)(r?.provider||"api"),[f,b]=(0,t.useState)(""),[M,$]=(0,t.useState)(!1),[I,A]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:E=>{E.target===E.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async E=>{E.preventDefault(),$(!0),A("");try{await s({provider:c,apiKey:f||void 0})}catch(H){A(H.message),$(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:c,onChange:E=>v(E.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:f,onChange:E=>b(E.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),I?t.default.createElement("div",{className:"dialog-error"},I):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Uo(){let[r,i]=(0,t.useState)([]),[s,c]=(0,t.useState)([]),[v,f]=(0,t.useState)({}),[b,M]=(0,t.useState)({running:!1}),[$,I]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[A,j]=(0,t.useState)(!1),[E,H]=(0,t.useState)(!1),[h,G]=(0,t.useState)(0),[Q,oe]=(0,t.useState)(0),[je,le]=(0,t.useState)(0),[R,pe]=(0,t.useState)(!1),[X,De]=(0,t.useState)(""),[ue,ee]=(0,t.useState)([]),[me,u]=(0,t.useState)("recent"),[y,L]=(0,t.useState)("all"),[T,ae]=(0,t.useState)(""),[Ie,Le]=(0,t.useState)(""),[ye,ge]=(0,t.useState)("all"),[se,ne]=(0,t.useState)(null),[C,J]=(0,t.useState)(null),[ve,Ve]=(0,t.useState)(!1),[Z,K]=(0,t.useState)(0),[de,Oe]=(0,t.useState)(0),[Ee,$e]=(0,t.useState)(!0),[Ye,Ne]=(0,t.useState)(!1),[qe,Be]=(0,t.useState)(""),[ot,x]=(0,t.useState)(""),[w,N]=(0,t.useState)(null),[q,d]=(0,t.useState)("none"),[D,nt]=(0,t.useState)(null),bt=(0,t.useRef)(new Set),[wt,Bt]=(0,t.useState)(15),[pt,yt]=(0,t.useState)(!1),[Ce,fe]=(0,t.useState)({x:null,y:null}),[Ut,Ft]=(0,t.useState)({width:null,height:null}),[dt,B]=(0,t.useState)({width:null,height:null}),[Ht,kt]=(0,t.useState)(null),Zt=(0,t.useRef)(null),[Gt,Nt]=(0,t.useState)(!1),[Qt,re]=(0,t.useState)(0),[Rt,rt]=(0,t.useState)(""),[zt,ct]=(0,t.useState)(!1),[wo,$t]=(0,t.useState)(null),[he,Kt]=(0,t.useState)(""),[_e,We]=(0,t.useState)({status:"none"}),[eo,Ct]=(0,t.useState)(!1),[qt,to]=(0,t.useState)(!1),[oo,Mt]=(0,t.useState)(!1),[Ze,a]=(0,t.useState)(null),[S,V]=(0,t.useState)(!1),[Ge,Ue]=(0,t.useState)([]),[at,St]=(0,t.useState)(!1),[Me,Pt]=(0,t.useState)([]),[Tt,Wt]=(0,t.useState)(null),[no,yo]=(0,t.useState)(""),[Ho,Ko]=(0,t.useState)([]),xe=(0,t.useRef)(null),ut=(0,t.useRef)(""),qo=(0,t.useRef)(null),U=(0,t.useRef)(null),Xe=(0,t.useRef)(0),Dt=(0,t.useRef)($),mt=(0,t.useRef)(0),Wo=(0,t.useRef)(0),Xo=(0,t.useRef)(0),Jo=(0,t.useRef)(0),zn=(0,t.useRef)(!1),ko=(0,t.useRef)(!1);(0,t.useEffect)(()=>{H(!1)},[se]),(0,t.useEffect)(()=>{Dt.current=$},[$]),(0,t.useEffect)(()=>{U.current=C},[C]),(0,t.useEffect)(()=>{Xe.current=de},[de]),(0,t.useEffect)(()=>{let e=!1;return ke(`${z}/transcribe/settings`).then(o=>{e||nt(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ke(`${z}/ui-settings`);!e&&o&&(to(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&Bt(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&yt(o.captionOpen),fe({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),Ft({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}),B({width:Number.isFinite(Number(o.transcriptW))&&o.transcriptW!==null?Number(o.transcriptW):null,height:Number.isFinite(Number(o.transcriptH))&&o.transcriptH!==null?Number(o.transcriptH):null}),Number.isFinite(Number(o.episodeLeftW))&&o.episodeLeftW!==null&&kt(Number(o.episodeLeftW)))}catch{}})(),()=>{e=!0}},[]);let Se=(0,t.useCallback)(e=>{fetch(`${z}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),No=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));Bt(o),Se({subtitleSize:o})},[Se]),$n=(0,t.useCallback)((e,o,l)=>{fe({x:e,y:o}),l&&Se({captionX:e,captionY:o})},[Se]),Cn=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};Ft(m),l&&Se({captionW:m.width,captionH:m.height})},[Se]),Vo=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};B(m),l&&Se({transcriptW:m.width,transcriptH:m.height})},[Se]),ro=(0,t.useRef)(null),Yo=(0,t.useRef)(null),_o=e=>{let o=ro.current;return o?Math.round(Math.min(460,Math.max(140,o.width+(e.clientX-o.startX)))):null},Mn=e=>{if(e.button!==void 0&&e.button!==0)return;let o=Yo.current;o&&(e.preventDefault(),ro.current={startX:e.clientX,width:o.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},Sn=e=>{let o=_o(e);o!=null&&kt(o)},Zo=e=>{if(!ro.current)return;let o=_o(e);ro.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),o!=null&&(kt(o),Se({episodeLeftW:o}))},Pn=()=>{kt(null),Se({episodeLeftW:null})},Tn=()=>Zt.current?.click(),Dn=async e=>{if(!(!e||!se)){Nt(!0);try{let o=await hr(e),l=await fetch(`${z}/episodes/${encodeURIComponent(se)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:o});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||"\u6362\u5C01\u9762\u5931\u8D25")}await Fe(),k("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(o){k(String(o.message||o))}finally{Nt(!1)}}},In=async()=>{if(se){Nt(!0);try{let e=await fetch(`${z}/episodes/${encodeURIComponent(se)}/cover`,{method:"DELETE"});if(!e.ok){let o=await e.json().catch(()=>({}));throw new Error(o.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await Fe(),k("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){k(String(e.message||e))}finally{Nt(!1)}}},En=(0,t.useCallback)(()=>{yt(e=>{let o=!e;return Se({captionOpen:o}),o})},[Se]),An=(0,t.useCallback)(()=>{yt(!1),Se({captionOpen:!1})},[Se]),Xt=(0,t.useMemo)(()=>{let e=w?.lines;return e?.length&&e.find(o=>Z>=o.start&&Z<o.end)||null},[w,Z]),jn=Xt&&Xt.speaker!=null?w?.speakers?.[Xt.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${Xt.speaker+1}`:"",Go=(0,t.useCallback)(()=>{to(e=>{let o=!e;return fetch(`${z}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{x(e),window.clearTimeout(Jo.current),Jo.current=window.setTimeout(()=>x(""),2600)},[]),Fe=(0,t.useCallback)(async()=>{let e=await ke(`${z}/episodes`);return i(e.items||[]),c(e.folders||[]),f(e.progress||{}),M(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ke(`${z}/health`).catch(()=>({}));o.mediaBase&&(ut.current=o.mediaBase);let l=await ke(`${z}/state`);if(e)return;I(l.settings),c(l.folders||[]);let m=await Fe();if(e)return;let W=l.settings?.lastEpisodeId,_=W?(m.items||[]).find(ht=>ht.id===W):null;if(_){J(_),Oe(_.duration||0);let ht=m.progress?.[_.id]?.position||0;mt.current=ht>5?ht:0,K(mt.current);let xt=xe.current;xt&&(xt.src=ut.current?`${ut.current}/episodes/${_.id}/audio`:`${z}/episodes/${_.id}/audio`,xt.load(),xt.playbackRate=l.settings?.rate||1,xt.volume=l.settings?.volume??.9)}$e(!1),zn.current=!0}catch(o){e||(Be(o.message),$e(!1))}})(),()=>{e=!0}},[Fe]),(0,t.useEffect)(()=>{if(!b.running)return;let e=setInterval(()=>{Fe().catch(()=>{})},1500);return()=>clearInterval(e)},[b.running,Fe]),(0,t.useEffect)(()=>{let e=!1;return N(null),rt(""),re(0),C?.id?((async()=>{try{let o=await ke(`${z}/episodes/${C.id}/transcript`);if(e)return;d(o.status),a(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?N(o.transcript):o.status==="queued"||o.status==="running"?(re(o.elapsedMs||0),o.transcript&&N(o.transcript)):o.status==="error"&&rt(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||rt(o.message)}})(),()=>{e=!0}):(d("none"),()=>{e=!0})},[C?.id]),(0,t.useEffect)(()=>{ke(`${z}/translate/settings`).then($t).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=C?.id;return!o||!he?(We({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await ke(`${z}/episodes/${o}/translate?target=${he}`);e||We(l)}catch{e||We({status:"none"})}})(),()=>{e=!0})},[C?.id,he]),(0,t.useEffect)(()=>{if(q!=="queued"&&q!=="running")return;let e=!1,o=setInterval(async()=>{let l=U.current?.id;if(l)try{let m=await ke(`${z}/episodes/${l}/transcript`);if(e)return;d(m.status),a(m.status==="queued"||m.status==="running"?m:null),re(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?N(m.transcript):m.status==="done"&&m.transcript?(N(m.transcript),ct(!0),k("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&rt(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[q,k]),(0,t.useEffect)(()=>{if(_e.status!=="running"&&_e.status!=="queued")return;let e=!1,o=async m=>{let W=await ke(`${z}/episodes/${m}/translate?target=${he}`);if(!e){We(W),W.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let _=await ke(`${z}/episodes/${m}/transcript`);!e&&_.transcript&&N(_.transcript)}catch{}}},l=setInterval(()=>{let m=U.current?.id;m&&o(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[_e.status,he,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let m=await ke(`${z}/jobs`);e||Ue(m.items||[])}catch{}};o();let l=setInterval(o,S?2500:2e4);return()=>{e=!0,clearInterval(l)}},[S]);let gt=(0,t.useCallback)((e,o,l,m=!1)=>{if(!e)return;let W=Date.now();!m&&W-Xo.current<4e3||(Xo.current=W,ce(`${z}/progress/${e}`,"PUT",{position:o,duration:l}).catch(()=>{}),f(_=>({..._,[e]:{position:o,duration:l,updatedAt:W}})))},[]),it=(0,t.useCallback)(e=>{I(o=>({...o,...e})),ce(`${z}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!ve||!C||D?.realtime===!1||D?.provider==="local"||w&&!w.partial||q==="queued"||q==="running")return;let e=C.id;bt.current.has(e)||(bt.current.add(e),ce(`${z}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&d("queued")}).catch(()=>{}))},[ve,C,w,q,D]);let Jt=(0,t.useCallback)(async()=>{if(U.current){rt(""),ct(!0);try{let e=await ce(`${z}/episodes/${U.current.id}/transcribe`,"POST",{});d(e.status||"queued")}catch(e){rt(e.message)}}},[]),Ln=(0,t.useCallback)(()=>{if(w){ct(e=>!e);return}if(q==="queued"||q==="running"){ct(!0);return}Jt()},[w,q,Jt]),zo=(0,t.useCallback)(async()=>{if(U.current)try{await ce(`${z}/episodes/${U.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){rt(e.message)}},[k]),$o=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let m=await ce(`${z}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?k("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):k(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await ce(`${z}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await ce(`${z}/jobs`,"DELETE",{key:e.key})}catch(m){k(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let l=await ke(`${z}/jobs`).catch(()=>({items:[]}));Ue(l.items||[])},[k]),ao=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let l=await ce(`${z}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),Pt([]),St(!1)}catch(l){k(l.message)}},[k]),On=(0,t.useCallback)(e=>{Pt(o=>o.includes(e)?o.filter(l=>l!==e):[...o,e])},[]),lt=(0,t.useCallback)(async(e,o,l)=>{try{let m=await ce(`${z}${e}`,o,l||{});return m?.transcript&&N(m.transcript),m}catch(m){return k(m.message),null}},[k]),Qo=(0,t.useCallback)(e=>{Wt(e.id),yo(e.text),Ko([])},[]),Ro=(0,t.useCallback)(async e=>{if(!w)return;await lt(`/episodes/${w.id}/transcript/lines/${e??Tt}`,"PUT",{text:no})&&(Wt(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[w,Tt,no,lt,k]),en=(0,t.useCallback)(async(e,o)=>{if(!w)return;await lt(`/episodes/${w.id}/transcript/lines/${e??Tt}/split`,"POST",{offset:o})&&(Wt(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[w,Tt,lt,k]),tn=(0,t.useCallback)(async e=>{if(!w)return;await lt(`/episodes/${w.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[w,lt,k]),on=(0,t.useCallback)(async()=>{if(!w)return;let e=await lt(`/episodes/${w.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(We({status:"none",missing:e.after}),k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[w,lt,k]),nn=(0,t.useCallback)(async()=>{if(w)try{let e=await ke(`${z}/episodes/${w.id}/transcript/validate`);Ko(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[w,k]),so=(0,t.useCallback)(async()=>{let e=U.current?.id;if(!e)return;let o=await ke(`${z}/episodes/${e}/transcript`);o.transcript&&N(o.transcript)},[]),io=(0,t.useCallback)(async(e=!1)=>{let o=U.current?.id,l=he;if(!(!o||!l)&&!(_e.status==="running"||_e.status==="queued")){We({status:"running"});try{let m=await ce(`${z}/episodes/${o}/translate`,"POST",{target:l,force:e});We(m),m.status==="done"&&(await so(),k(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){We(W=>({...W,status:"error",error:m.message}))}}},[he,_e.status,so,k]),rn=(0,t.useCallback)(()=>io(!1),[io]),an=(0,t.useCallback)(()=>{let e=he==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&io(!0)},[io,he]),sn=(0,t.useCallback)(async e=>{let o=U.current?.id;if(!(!o||!he||!e?.id))try{await ce(`${z}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:he}),await so(),k("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){k(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[he,so,k]),ln=(0,t.useCallback)(e=>{Kt(e||"")},[]),Bn=async()=>{if(Y?.eid)try{await fetch(`${z}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${Y.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Un=e=>{let o=!e.favorite;i(l=>l.map(m=>m.id===e.id?{...m,favorite:o}:m)),ce(`${z}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(l=>k(l.message))},pn=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${z}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(l=>!e.includes(l.id))),Pt([]),e.includes(se)&&ne(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},He=(0,t.useMemo)(()=>{let e=[...r];return me==="title"?e.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):me==="duration"?e.sort((o,l)=>(l.duration||0)-(o.duration||0)):e.sort((o,l)=>l.mtime-o.mtime),e},[r,me]),It=T?Ie:"",dn=(0,t.useMemo)(()=>T?r.filter(e=>e.root===T):[],[r,T]),Et=(0,t.useMemo)(()=>T?wn(dn,It):[],[dn,T,It]),Qe=(0,t.useMemo)(()=>{let e=X.trim().toLowerCase();return He.filter(o=>{if(T&&o.root!==T||T&&(o.rel||"")!==It||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let m=v[o.id]?.position||0,W=o.duration||0,_=W?m/W:0;return y==="inprogress"?m>5&&_<.97:y==="finished"?_>=.97:ye==="unheard"?m<=5:ye==="transcribed"?!!o.hasTranscript:ye==="favorites"?!!o.favorite:!0})},[He,X,y,ye,v,T,It]),cn=(0,t.useMemo)(()=>Ge.filter(e=>e.status==="queued"||e.status==="running"),[Ge]),vt=(0,t.useMemo)(()=>Qe.filter(e=>!e.hasTranscript),[Qe]),Co=(0,t.useMemo)(()=>r.filter(e=>{let o=v[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(v[o.id]?.updatedAt||0)-(v[e.id]?.updatedAt||0)).slice(0,4),[r,v]),Fn=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),Hn=Math.round(Fn/3600*10)/10,At=(0,t.useMemo)(()=>T?yn(vo(T),It):[],[T,It]),Kn=T?At.length>1?At[At.length-1].label:vo(T):y==="inprogress"?"\u7EE7\u7EED\u6536\u542C":y==="finished"?"\u5DF2\u64AD\u5B8C":y==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",Y=se?r.find(e=>e.id===se)||(C?.id===se?C:null):null,qn=Ee?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":T?`${Qe.length} \u96C6${Et.length?` \xB7 ${Et.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${Qe.length} \u96C6 \xB7 \u5171 ${Hn} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Ir=(0,t.useMemo)(()=>C?He.findIndex(e=>e.id===C.id):-1,[He,C]),jt=(0,t.useCallback)(()=>{let e=xe.current;if(e){if(!U.current){let o=Qe[0]||He[0];o&&ft(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Qe,He]),ft=(0,t.useCallback)((e,o=!0)=>{let l=xe.current;if(!l||!e)return;if(U.current&&U.current.id===e.id){o&&jt();return}U.current&&!l.ended&&l.currentTime>1&&gt(U.current.id,l.currentTime,l.duration||Xe.current,!0),U.current=e,J(e),ne(_=>_&&e.id),Oe(e.duration||0);let m=v[e.id]?.position||0,W=m>5&&(!e.duration||m<e.duration-10)?m:0;mt.current=W,K(W),e.source==="xyz"?l.src=ut.current?`${ut.current}/xyz/${e.id.slice(3)}/audio`:`${z}/episodes/${e.id}/audio`:l.src=ut.current?`${ut.current}/episodes/${e.id}/audio`:`${z}/episodes/${e.id}/audio`,l.load(),l.playbackRate=Dt.current.rate||1,l.volume=Dt.current.volume??.9,o&&l.play().catch(()=>{}),it({lastEpisodeId:e.id})},[v,gt,it,jt]),Wn=(0,t.useCallback)(async e=>{let o=e.public?`${z}/xyz/public/play`:`${z}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),W=await m.json().catch(()=>({}));if(!m.ok)throw new Error(W.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Fe(),ft(W.item,!0)},[Fe,ft]);(0,t.useEffect)(()=>{let e=X.trim();if(e.length<2){ee([]);return}let o=window.setTimeout(()=>{ke(`${z}/search?q=${encodeURIComponent(e)}`).then(l=>ee(Array.isArray(l.items)?l.items:[])).catch(()=>ee([]))},250);return()=>window.clearTimeout(o)},[X]);let lo=(0,t.useCallback)((e,o=!0)=>{e&&(ft(e,o),ne(e.id))},[ft]),Ke=(0,t.useCallback)(e=>{let o=xe.current;if(!o||!U.current)return;let l=Number(e);if(!Number.isFinite(l))return;let m=Number(Xe.current)||0,W=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,_=Math.max(0,W>0?Math.min(l,W):l);try{o.currentTime=_}catch{mt.current=_;return}K(_),gt(U.current.id,_,W||m,!0)},[gt]),Xn=(0,t.useCallback)(e=>{let o=r.find(l=>l.id===e.episodeId);if(o){if(U.current?.id===e.episodeId){Ke(e.start),ne(o.id);return}mt.current=e.start,lo(o,!1)}},[r,lo,Ke]),un=(0,t.useCallback)(e=>{let o=qo.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),po=(0,t.useCallback)(e=>{let o=un(e),l=Number.isFinite(Xe.current)&&Xe.current>0?Xe.current:Number.isFinite(xe.current?.duration)?xe.current.duration:0;o==null||!l||Ke(o*l)},[un,Ke]),Jn=(0,t.useCallback)(e=>{e.preventDefault(),ko.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}po(e)},[po]),Vn=(0,t.useCallback)(e=>{ko.current&&po(e)},[po]),mn=(0,t.useCallback)(e=>{ko.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),Yn=(0,t.useCallback)(e=>{let o=xe.current;if(!o)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Ke((o.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),Ke((o.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),Ke(0)),e.key==="End"&&(e.preventDefault(),Ke(Number.isFinite(o.duration)?o.duration:0))},[Ke]),Vt=(0,t.useCallback)(e=>{let o=xe.current;if(!o||!U.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||Xe.current||0)-1));o.currentTime=l,K(l)},[]),Mo=(0,t.useCallback)(e=>{if(!He.length)return;let l=((U.current?He.findIndex(m=>m.id===U.current.id):-1)+e+He.length)%He.length;ft(He[l],!0)},[He,ft]),_n=(0,t.useCallback)(e=>{let o=xe.current;o&&(o.playbackRate=e),it({rate:e}),j(!1)},[it]);(0,t.useEffect)(()=>{if(!A)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||j(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[A]),(0,t.useEffect)(()=>{if(!Q)return;let e=()=>{let l=Math.max(0,Math.round((Q-Date.now())/1e3));if(le(l),l<=0){let m=xe.current;m&&!m.paused&&m.pause(),oe(0),G(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Q,k]),(0,t.useEffect)(()=>{if(!R)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||pe(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[R]);let So=(0,t.useCallback)(e=>{if(pe(!1),e==="off"){oe(0),G(0),le(0);return}if(e==="end"){oe(0),G(-1),le(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}G(e),oe(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),co=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),l=xe.current;l&&(l.volume=o),it({volume:o})},[it]),Zn=(0,t.useCallback)(()=>{let e=xe.current,o=Dt.current.volume>0?0:.9;e&&(e.volume=o),it({volume:o})},[it]),Gn=()=>{let e=xe.current;if(!e||!U.current)return;let o=performance.now();o-(Wo.current||0)<400||(Wo.current=o,K(e.currentTime),gt(U.current.id,e.currentTime,e.duration||Xe.current))},Qn=()=>{let e=xe.current,o=U.current;if(!e||!o)return;let l=Number.isFinite(e.duration)?e.duration:o.duration||0;Oe(l);let m=mt.current;mt.current=0,m>0&&m<l-1&&(e.currentTime=m,K(m))},Rn=()=>{let e=xe.current;if(U.current&&gt(U.current.id,e?.duration||Xe.current||0,e?.duration||Xe.current||0,!0),h===-1){G(0),oe(0),le(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}Mo(1)},er=async e=>{await ce(`${z}/folders`,"POST",{path:e}),await Fe(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},tr=async()=>{let e=await fetch(`${z}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},or=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),oo||Mt(!0))},nr=e=>{e.currentTarget.contains(e.relatedTarget)||Mt(!1)},rr=async e=>{e.preventDefault(),Mt(!1);let o=e.dataTransfer,l=[...o?.files||[]],m=l.map(ie=>ie.path).filter(ie=>typeof ie=="string"&&ie),W=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ie=>ie.trim()).filter(ie=>ie.startsWith("file://")).map(ie=>decodeURIComponent(ie.replace(/^file:\/\//,""))),_=[...new Set([...m,...W])];if(_.length){try{let ie=await ce(`${z}/import/paths`,"POST",{paths:_});await Fe(),k(ie.added?`\u5DF2\u6DFB\u52A0 ${ie.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ie){Be(ie.message)}return}let ht=l.filter(ie=>ie.size>0);if(!ht.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let xt=`drop-${Date.now()}`,uo="",Do=0;for(let ie of ht)try{let gn=await fetch(`${z}/import/upload?name=${encodeURIComponent(ie.name)}&batch=${xt}`,{method:"POST",body:ie}),sr=await gn.json();gn.ok&&(uo=sr.folder||uo,Do+=1)}catch{}if(uo)try{await ce(`${z}/folders`,"POST",{path:uo})}catch{}await Fe(),k(Do?`\u5DF2\u5BFC\u5165 ${Do} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},ar=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await ce(`${z}/folders`,"DELETE",{path:e}),ae(o=>o===e?"":o),await Fe(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Be(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),jt()):o.key==="ArrowRight"?(o.preventDefault(),Vt(15)):o.key==="ArrowLeft"?(o.preventDefault(),Vt(-15)):o.key==="ArrowUp"?(o.preventDefault(),co(Dt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),co(Dt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[jt,Vt,co]);let Po=e=>{let o=v[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},To=e=>{let o=v[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${qt?"nav-collapsed":""}`,onDragOver:or,onDragLeave:nr,onDrop:rr},oo?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,qt?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Go},t.default.createElement(te,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(te,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Go},t.default.createElement(te,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Co.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Po).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,l])=>t.default.createElement("button",{key:e,className:`nav-item ${y===e&&!T?"active":""}`,onClick:()=>{ae(""),L(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Ne(!0)},t.default.createElement(te,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:T===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{L("all"),ge("all"),De(""),ae(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),L("all"),ge("all"),De(""),ae(l=>l===e?"":e))}},t.default.createElement(te,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},vo(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),ar(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Kn),t.default.createElement("p",{className:"subline"},qn)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${S?"is-on":""}`,onClick:()=>V(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(te,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",cn.length?` ${cn.length}`:"")),t.default.createElement("button",{className:`tool-btn ${at?"is-on":""}`,onClick:()=>{St(e=>!e),Pt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(te,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(te,{name:"search",size:16}),t.default.createElement("input",{value:X,onChange:e=>De(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:me,onChange:e=>u(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),at?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Me.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>Pt(Qe.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(st,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!vt.length&&!Me.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Pe,{hint:`${vt.length} \u96C6`,disabled:!vt.length,onSelect:()=>{e(),ao(vt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(Pe,{hint:`${Me.length} \u96C6`,disabled:!Me.length,onSelect:()=>{e(),ao(Me)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!Me.length,onClick:()=>pn(Me)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{Pt([]),St(!1)}},"\u53D6\u6D88")):null,qe?t.default.createElement("div",{className:"banner error",onClick:()=>Be("")},qe," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,Y?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>ne(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},Y.artist,Y.album?` \xB7 ${Y.album}`:"")),t.default.createElement("div",{className:"episode-view",style:Ht?{"--episode-left-w":`${Ht}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:Yo},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:Tn,disabled:Gt,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(Lt,{item:Y,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},Gt?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:Zt,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let o=e.target.files?.[0];e.target.value="",Dn(o)}})),t.default.createElement("h2",{className:"episode-title"},Y.title),t.default.createElement("p",{className:"episode-sub"},Y.artist,Y.album?` \xB7 ${Y.album}`:""),t.default.createElement("p",{className:"episode-path",title:Y.file},Y.location||Y.file),t.default.createElement("p",{className:"episode-stats"},Io(Y.duration)," \xB7 ",Eo(Y.mtime)," \xB7 \u5DF2\u542C ",Math.round(To(Y)),"%"),Y.shownotes?t.default.createElement("div",{className:`episode-notes ${E?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>H(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",E?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},Y.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:jt},ve&&C?.id===Y.id?"\u6682\u505C":"\u64AD\u653E"),q==="queued"||q==="running"?t.default.createElement("button",{className:"btn ghost",onClick:zo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:Jt},Y.source==="xyz"?w?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":w?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(st,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,Y.source==="xyz"?t.default.createElement(Pe,{onSelect:()=>{e(),Bn()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,Y.hasCover?t.default.createElement(Pe,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),In()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(Pe,{danger:!0,onSelect:()=>{e(),pn([Y.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:Mn,onPointerMove:Sn,onPointerUp:Zo,onPointerCancel:Zo,onDoubleClick:Pn,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement(fo,{inline:!0,transcript:w,status:q,progress:Ze?.progress,stage:Ze?.stage,chunks:Ze?.chunks,queued:Ze?.queued,elapsed:Qt,editingId:Tt,draft:no,onDraftChange:yo,onEditLine:Qo,onSaveLine:Ro,onCancelEdit:()=>Wt(null),onSplitLine:en,onMergeLine:tn,onValidate:nn,onResegment:on,issues:Ho,onCancel:zo,error:Rt,position:Z,fontSize:wt,onFontSize:No,width:dt.width,height:dt.height,onResize:Vo,onSeek:Ke,onClose:()=>ne(null),onStart:Jt,target:he,job:_e,onChangeTarget:ln,onTranslate:rn,onRetranslate:an,onRetranslateLine:sn,onOpenSettings:()=>Ct(!0)})))):y==="xyz"?t.default.createElement(Oo,{onPlay:Wn,currentId:C?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${ye===e?"is-on":""}`,onClick:()=>ge(e)},o))),y==="all"&&!X&&Co.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},Co.map(e=>{let o=To(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${C?.id===e.id?"is-current":""}`,onClick:()=>lo(e,!0)},t.default.createElement(Lt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,X.trim().length>=2&&ue.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ue.length)),ue.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Xn(e)},t.default.createElement("span",{className:"hit-time"},Ae(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,T?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},At.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(te,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===At.length-1?"is-current":""}`,onClick:()=>Le(e.rel),disabled:o===At.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Ee&&T&&Et.length>0&&!X?t.default.createElement("div",{className:"folder-rows"},Et.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Le(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(te,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Ee?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Qe.length===0&&!(T&&Et.length>0&&!X)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":T?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${Et.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Ne(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&T?t.default.createElement("button",{className:"btn",onClick:()=>ae("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},Qe.map((e,o)=>{let l=To(e),m=C?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${Po(e)?"is-finished":""} ${at&&Me.includes(e.id)?"is-selected":""}`,onClick:()=>at?On(e.id):lo(e,!0)},t.default.createElement("span",{className:"col-index row-index"},at?Me.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(te,{name:"check",size:14})):null:m&&ve?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Lt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Eo(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Io(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:W=>{W.stopPropagation(),Un(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},Po(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(te,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),zt&&C&&!Y?t.default.createElement(fo,{transcript:w,status:q,progress:Ze?.progress,stage:Ze?.stage,chunks:Ze?.chunks,queued:Ze?.queued,elapsed:Qt,editingId:Tt,draft:no,onDraftChange:yo,onEditLine:Qo,onSaveLine:Ro,onCancelEdit:()=>Wt(null),onSplitLine:en,onMergeLine:tn,onValidate:nn,onResegment:on,issues:Ho,onCancel:zo,error:Rt,position:Z,fontSize:wt,onFontSize:No,width:dt.width,height:dt.height,onResize:Vo,onSeek:Ke,onClose:()=>ct(!1),onStart:Jt,target:he,job:_e,onChangeTarget:ln,onTranslate:rn,onRetranslate:an,onRetranslateLine:sn,onOpenSettings:()=>Ct(!0)}):null,S?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>V(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Ge.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ge.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},kn(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>$o(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>$o(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>$o(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!vt.length,onClick:()=>ao(vt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",vt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Me.length,onClick:()=>ao(Me)},"\u8F6C\u5199\u5DF2\u9009 ",Me.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:qo,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(de||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Ae(Z)} / ${Ae(de)}`,onPointerDown:Jn,onPointerMove:Vn,onPointerUp:mn,onPointerCancel:mn,onKeyDown:Yn},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${de?Math.min(100,Math.max(0,Z/de*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${de?Math.min(100,Math.max(0,Z/de*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},C?t.default.createElement("button",{className:"now-open",onClick:()=>ne(C.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Lt,{item:C,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:C.title},C.title),t.default.createElement("div",{className:"now-artist"},C.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Mo(-1)},t.default.createElement(te,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Vt(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:jt,disabled:!C&&Qe.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(te,{name:ve?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Vt(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Mo(1)},t.default.createElement(te,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(st,{className:`player-subs ${zt||pt?"is-active":""}`,buttonClassName:`subs-btn ${zt||pt?"active":""}`,placement:"up",disabled:!C,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(te,{name:"wave",size:15}),t.default.createElement("span",null,w?"\u5B57\u5E55":q==="queued"||q==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Pe,{checked:zt,hint:w?`${w.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),Ln()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(Pe,{checked:pt,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),En()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Ae(Z)," / ",Ae(de)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>j(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":A},$.rate,"\xD7"),A?t.default.createElement("span",{className:"rate-menu",role:"menu"},fr.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===$.rate,className:e===$.rate?"is-on":"",onClick:()=>_n(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Q?"active":""}`,onClick:()=>pe(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":R},t.default.createElement(te,{name:"moon",size:14}),Q?t.default.createElement("span",{className:"sleep-left"},Ae(je)):null),R?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Q&&h!==-1,className:!Q&&h!==-1?"is-on":"",onClick:()=>So("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":h===e,className:h===e?"is-on":"",onClick:()=>So(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>So("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Zn,title:"\u9759\u97F3"},t.default.createElement(te,{name:$.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:$.volume,onChange:e=>co(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),Ye?t.default.createElement(xr,{onClose:()=>Ne(!1),onSubmit:er,onPick:tr}):null,eo?t.default.createElement(br,{config:wo,onClose:()=>Ct(!1),onSave:async e=>{let o=await ce(`${z}/translate/settings`,"PUT",e);$t(o),Ct(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ot?t.default.createElement("div",{className:"toast"},ot):null,pt?t.default.createElement(Lo,{line:Xt,speakerLabel:jn,target:he,status:q,fontSize:wt,onFontSize:No,x:Ce.x,y:Ce.y,width:Ut.width,height:Ut.height,onMove:$n,onResize:Cn,onClose:An,onSeek:Ke}):null,t.default.createElement("audio",{ref:xe,preload:"metadata",onPlay:()=>Ve(!0),onPause:()=>{Ve(!1);let e=xe.current;U.current&&e&&e.currentTime>0&&!e.ended&&gt(U.current.id,e.currentTime,e.duration||Xe.current,!0)},onTimeUpdate:Gn,onLoadedMetadata:Qn,onEnded:Rn,onError:()=>{Ve(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var ho=require("react");function wr(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let f=v/255;return f<=.03928?f/12.92:((f+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function yr(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=wr(i);if(s!==null)return s}return null}function Nn(){let r=yr();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function xo(){let[r,i]=(0,ho.useState)(Nn);return(0,ho.useEffect)(()=>{let s=()=>i(Nn());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var n=Re(require("react"),1);var bo="0.11.49";var F="/podwave/api";async function ze(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Te(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function kr(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function et(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Nr(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function zr(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function $r(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function Cr(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Fo(){let r=xo(),[i,s]=(0,n.useState)([]),[c,v]=(0,n.useState)(""),[f,b]=(0,n.useState)(0),[M,$]=(0,n.useState)(!1),[I,A]=(0,n.useState)([]),[j,E]=(0,n.useState)(null),[H,h]=(0,n.useState)(""),[G,Q]=(0,n.useState)(!1),[oe,je]=(0,n.useState)({asrModel:"",translateModel:""}),[le,R]=(0,n.useState)(null),[pe,X]=(0,n.useState)(null),[De,ue]=(0,n.useState)({showSidebarPanel:!0}),[ee,me]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[u,y]=(0,n.useState)(null),[L,T]=(0,n.useState)(null),[ae,Ie]=(0,n.useState)(null),[Le,ye]=(0,n.useState)(!1),[ge,se]=(0,n.useState)("auto"),[ne,C]=(0,n.useState)(!1),[J,ve]=(0,n.useState)(null),[Ve,Z]=(0,n.useState)(!1),[K,de]=(0,n.useState)(""),[Oe,Ee]=(0,n.useState)(15),[$e,Ye]=(0,n.useState)(!0),[Ne,qe]=(0,n.useState)("api"),[Be,ot]=(0,n.useState)(!0),[x,w]=(0,n.useState)("api"),[N,q]=(0,n.useState)("https://api.deepseek.com"),[d,D]=(0,n.useState)("deepseek-chat"),[nt,bt]=(0,n.useState)(""),[wt,Bt]=(0,n.useState)(""),[pt,yt]=(0,n.useState)(""),[Ce,fe]=(0,n.useState)(""),[Ut,Ft]=(0,n.useState)(""),[dt,B]=(0,n.useState)(""),Ht=(0,n.useCallback)(async()=>{try{let[a,S,V,Ge,Ue,at,St,Me]=await Promise.all([ze(`${F}/history`),ze(`${F}/models`),ze(`${F}/translate/settings`),ze(`${F}/ui-settings`),ze(`${F}/transcribe/settings`),ze(`${F}/import/settings`),ze(`${F}/setup`),ze(`${F}/update`)]);y(St),ve(Me),St?.job?.status==="running"&&C(!0),me({mode:at.mode||"copy",orphans:at.orphans||0,orphanBytes:at.orphanBytes||0}),ue({showSidebarPanel:Ge?.showSidebarPanel!==!1}),de((Ue.hotwords||[]).join(" ")),Ee(Ue.chunkMinutes||15),Ye(Ue.diarize!==!1),qe(Ue.provider||"api"),ot(Ue.realtime!==!1),s(a.items||[]),v(a.dir||""),b(Number(a.bytes)||0),$(Ge?.historyOpen===!0),A(S.models||[]),E(S.storage||null),h(S.storage?.dir||""),je(S.config||{asrModel:"",translateModel:""}),R(S.transcribe||null),Bt(S.config?.asrModel||""),yt(S.config?.translateModel||""),X(V),w(V.provider||"api"),q(V.apiBase||"https://api.deepseek.com"),D(V.apiModel||"deepseek-chat"),bt(""),B("")}catch(a){B(a.message)}},[]);(0,n.useEffect)(()=>{Ht()},[Ht]),(0,n.useEffect)(()=>{let a=!1;return ze(`${F}/setup/plan?source=${ge}&mode=${Ne==="local"?"local":"basic"}`).then(S=>{a||T(S)}).catch(()=>{}),()=>{a=!0}},[ge,Ne,u?.job?.status]),(0,n.useEffect)(()=>{if(!ne&&u?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let S=await ze(`${F}/setup`);y(S),S.job?.status!=="running"&&C(!1)}catch{}},2500);return()=>window.clearInterval(a)},[ne,u?.job?.status]);let kt=async()=>{B(""),C(!0);try{await Te(`${F}/setup/install`,"POST",{source:ge});let a=await ze(`${F}/setup`);y(a),re("\u5F00\u59CB\u5B89\u88C5")}catch(a){C(!1),B(a.message)}},Zt=()=>{let a=!M;$(a),Te(`${F}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},Gt=async()=>{try{await Te(`${F}/history/open`,"POST",{})}catch(a){B(a.message)}},Nt=async()=>{B(""),C(!0);try{await Te(`${F}/setup/install`,"POST",{source:ge,mode:"local"});let a=await ze(`${F}/setup`);y(a),re("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){C(!1),B(a.message)}},Qt=async()=>{try{await Te(`${F}/setup/cancel`,"POST",{}),re("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){B(a.message)}},re=a=>{Ft(a),window.setTimeout(()=>Ft(""),2400)},Rt=async()=>{ye(!0);try{let a=await ze(`${F}/setup/verify`);Ie(a),re(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){re(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{ye(!1)}},rt=async()=>{try{let a=await ze(`${F}/setup/diagnose`),S=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(S)}catch{let V=document.createElement("textarea");V.value=S,V.style.position="fixed",V.style.opacity="0",document.body.appendChild(V),V.select(),document.execCommand("copy"),V.remove()}re("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){re(a.message||"\u590D\u5236\u5931\u8D25")}},zt=async()=>{fe("api"),B("");try{let a={provider:x,apiBase:N,apiModel:d};nt.trim()&&(a.apiKey=nt.trim());let S=await Te(`${F}/translate/settings`,"PUT",a);X(S),bt(""),re("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){B(a.message)}finally{fe("")}},ct=async()=>{fe("models"),B("");try{let a=await Te(`${F}/models`,"PUT",{asrModel:wt,translateModel:pt});je(a.config),A(a.models||[]),R(a.transcribe||null),re("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){B(a.message)}finally{fe("")}},wo=async()=>{try{await Te(`${F}/models/open`,"POST",{})}catch(a){B(a.message)}},$t=async(a,S=!0)=>{Q(!0),B("");try{let V=await Te(`${F}/models/dir`,"POST",{dir:a,move:S});E(V.storage||null),A(V.models||[]),h(V.storage?.dir||"");let Ge=(V.moved||[]).length,Ue=(V.skipped||[]).length;re(Ge||Ue?`\u5DF2\u8FC1\u79FB ${Ge} \u4E2A\u6A21\u578B${Ue?`\uFF0C${Ue} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(V){B(V.message)}finally{Q(!1)}},he=async a=>{fe(`model:${a}`),B("");try{let S=await Te(`${F}/models/remove`,"POST",{name:a});E(S||null),A(S.models||[]),re(`\u5DF2\u5220\u9664 ${a}`)}catch(S){B(S.message)}finally{fe("")}},Kt=I.length?I:[{name:oe.asrModel||"qwen3-asr-1.7b-8bit",ready:le?.modelReady},{name:oe.translateModel||"hy-mt2-1.8b-4bit",ready:pe?.localReady}],_e=async()=>{Z(!0);try{ve(await ze(`${F}/update?force=1`))}catch{re("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Z(!1)}},We=Kt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),eo=Kt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Ct=async()=>{fe("ui"),B("");try{let a=await Te(`${F}/ui-settings`,"PUT",{showSidebarPanel:De.showSidebarPanel});ue({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),re("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){B(a.message)}finally{fe("")}},qt=async a=>{fe("import"),B("");try{let S=await Te(`${F}/import/settings`,"PUT",{mode:a});me(V=>({...V,mode:S.mode})),re("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(S){B(S.message)}finally{fe("")}},to=async()=>{if(ee.orphans&&window.confirm(`\u6E05\u7406 ${ee.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){fe("imports"),B("");try{let a=await Te(`${F}/imports/orphans`,"DELETE",{});me(S=>({...S,orphans:0,orphanBytes:0})),re(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){B(a.message)}finally{fe("")}}},oo=async()=>{fe("transcribe"),B("");try{let a=K.split(/[\s,，、]+/).map(V=>V.trim()).filter(Boolean).slice(0,500),S=await Te(`${F}/transcribe/settings`,"PUT",{provider:Ne,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(Oe)||15)),diarize:$e,realtime:Be});de((S.hotwords||[]).join(" ")),Ee(S.chunkMinutes||15),Ye(S.diarize!==!1),qe(S.provider||"api"),S.runtime&&R(S.runtime),re("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){B(a.message)}finally{fe("")}},Mt=Kt,Ze=!!(bo&&u?.version&&u.version!==bo);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,go),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Ze?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",bo,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",u.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,dt?n.default.createElement("div",{className:"banner error",onClick:()=>B("")},dt):null,Ut?n.default.createElement("div",{className:"settings-message"},Ut):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),u?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},u.platform?.osLabel," \xB7 ",u.platform?.arch," \xB7 ",u.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",u.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",u.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:rt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:Le,onClick:Rt},Le?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),ae?n.default.createElement("ul",{className:"setup-components"},ae.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(u.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},et(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:ge,onChange:a=>se(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),L?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",et(L.totalBytes)," \xB7 ",L.items.length," \u9879"),n.default.createElement("ul",null,L.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?et(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:ne||u.job?.status==="running",onClick:kt},ne||u.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),u.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:Qt},"\u53D6\u6D88"):null),u.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,u.job.stage||u.job.status),n.default.createElement("span",null,u.job.progress||0,"% \xB7 ",et(u.job.bytes)," / ",et(u.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${u.job.progress||0}%`}})),u.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",u.job.error):null,u.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},u.job.warning):null,u.job.status==="done"&&(!u.job.summary||!u.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,u.job.status==="done"&&u.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",u.job.modelsDir):null,Array.isArray(u.job.summary)&&u.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},u.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":et(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:`settings-card history-card ${M?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Zt(),"aria-expanded":M,title:M?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",f?` \xB7 ${et(f)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),M?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${kr(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Nr(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Gt,disabled:!c},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},c?`${c}${f?` \xB7 ${et(f)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:Ne,onChange:a=>qe(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),Ne==="api"?n.default.createElement("p",{className:"settings-status"},le?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},le?.installed&&le?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${le.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:K,onChange:a=>de(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:Oe,onChange:a=>Ee(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Be,onChange:a=>ot(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:$e,onChange:a=>Ye(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:oo,disabled:Ce==="transcribe"},Ce==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),Ne==="local"&&!(le?.installed&&le?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:Nt,disabled:ne},ne?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:ee.mode==="copy",onChange:()=>qt("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:ee.mode==="reference",onChange:()=>qt("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:to,disabled:Ce==="imports"||!ee.orphans},ee.orphans?`\u6E05\u7406 ${ee.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(ee.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:x,onChange:a=>w(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:N,onChange:a=>q(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:d,onChange:a=>D(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:nt,onChange:a=>bt(a.target.value),placeholder:pe?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${pe.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:zt,disabled:Ce==="api"},Ce==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},pe?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:De.showSidebarPanel,onChange:a=>ue({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ct,disabled:Ce==="ui"},Ce==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},zr(j),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),j?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:j.dir},j.dir),n.default.createElement("span",{className:"model-path-size"},Cr(j)," \xB7 \u5171 ",et(j.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:H,onChange:a=>h(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:G||H.trim()===j.dir,onClick:()=>$t(H,!0)},G?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:wo},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),j.projectDir&&j.dir!==j.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:G,onClick:()=>$t(j.projectDir,!0)},$r(j)):null,j.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:G,onClick:()=>$t("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),I.length?n.default.createElement("ul",{className:"model-list"},I.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",et(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||Ce===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>he(a.name)},Ce===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:wt,onChange:a=>Bt(a.target.value)},(We.length?We:Mt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},le?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:pt,onChange:a=>yt(a.target.value)},(eo.length?eo:Mt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},pe?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ct,disabled:Ce==="models"},Ce==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.current?`v${J.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.latest?`v${J.latest}`:J?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},J?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":J?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${J.error}\uFF09\u3002`:J?.latest?J?.current&&J?.latest&&J.current!==J.latest&&J.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:_e,disabled:Ve},Ve?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),J?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(J.checkedAt).toLocaleString()):null))))}function Mr({size:r=16}){return tt.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},tt.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),tt.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),tt.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),tt.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),tt.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Sr(){let r=xo();return tt.default.createElement("div",{className:"podwave-root","data-pw-theme":r},tt.default.createElement("style",null,go),tt.default.createElement(Uo,null))}function Pr(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Sr)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Fo));let i=null,s="podwave-hide-nav",c=f=>{if(typeof document>"u")return;let b=document.getElementById(s);f&&!b?(b=document.createElement("style"),b.id=s,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!f&&b&&b.remove()},v=f=>{if(c(!f),f&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Mr);else if(!f&&i){let b=i;i=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>v(f?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{v(f?.detail?.showSidebarPanel!==!1)})}var Tr=["slots"];

return module.exports}})
