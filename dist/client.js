window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var lr=Object.create;var ko=Object.defineProperty;var pr=Object.getOwnPropertyDescriptor;var dr=Object.getOwnPropertyNames;var cr=Object.getPrototypeOf,ur=Object.prototype.hasOwnProperty;var mr=(a,i)=>{for(var s in i)ko(a,s,{get:i[s],enumerable:!0})},hn=(a,i,s,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let g of dr(i))!ur.call(a,g)&&g!==s&&ko(a,g,{get:()=>i[g],enumerable:!(u=pr(i,g))||u.enumerable});return a};var nt=(a,i,s)=>(s=a!=null?lr(cr(a)):{},hn(i||!a||!a.__esModule?ko(s,"default",{value:a,enumerable:!0}):s,a)),gr=a=>hn(ko({},"__esModule",{value:!0}),a);var Er={};mr(Er,{apply:()=>Tr,inject:()=>Dr});module.exports=gr(Er);var rt=nt(require("react"),1);var No=`
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
`;var t=nt(require("react"),1);var A=nt(require("react"),1);function te({name:a,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(a){case"play":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),A.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),A.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),A.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return A.default.createElement("svg",{...s},A.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),A.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),A.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),A.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),A.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),A.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),A.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),A.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Ko=nt(require("react"),1);function Le(a){if(!Number.isFinite(a)||a<0)return"0:00";let i=Math.floor(a),s=Math.floor(i/3600),u=Math.floor(i%3600/60),g=i%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function Ho(a){if(!a)return"\u2014";let i=Math.floor(a/3600),s=Math.round(a%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Fo(a){if(!a)return"";let i=new Date(a),s=Date.now()-a;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function xn(a){let s=String(a||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function zo(a){let i=String(a).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var fr="/podwave/api";function Lt({item:a,size:i=44,className:s=""}){let u={width:i,height:i};if(a&&a.hasCover){let g=a.coverAt?`?v=${a.coverAt}`:"";return Ko.default.createElement("img",{className:`cover ${s}`,style:u,src:`${fr}/episodes/${a.id}/cover${g}`,alt:"",loading:"lazy",draggable:!1})}return Ko.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},xn(a&&a.title))}var m=nt(require("react"),1);var he=nt(require("react"),1);function it({trigger:a,title:i,align:s="end",placement:u="down",className:g="",buttonClassName:v="",disabled:b=!1,children:P}){let[S,j]=(0,he.useState)(!1),H=(0,he.useRef)(null);(0,he.useEffect)(()=>{if(!S)return;let B=h=>{H.current?.contains(h.target)||j(!1)},q=h=>{h.key==="Escape"&&j(!1)};return document.addEventListener("pointerdown",B),document.addEventListener("keydown",q),()=>{document.removeEventListener("pointerdown",B),document.removeEventListener("keydown",q)}},[S]),(0,he.useEffect)(()=>{b&&S&&j(!1)},[b,S]);let G=["pop-panel",s==="start"?"is-start":"",u==="up"?"is-up":""].filter(Boolean).join(" ");return he.default.createElement("span",{className:`pop-wrap ${g}`,ref:H},he.default.createElement("button",{type:"button",className:v||"pop-btn",onClick:()=>j(B=>!B),title:i,disabled:b,"aria-haspopup":"menu","aria-expanded":S},a),S?he.default.createElement("span",{className:G,role:"menu"},P({close:()=>j(!1)})):null)}function Ae({children:a,hint:i,checked:s=!1,danger:u=!1,disabled:g=!1,onSelect:v}){let b=["pop-item",s?"is-on":"",u?"is-danger":""].filter(Boolean).join(" ");return he.default.createElement("button",{type:"button",className:b,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:g,onClick:v},he.default.createElement("span",null,a),i?he.default.createElement("span",{className:"pop-hint"},i):null)}function qo({children:a,hint:i,href:s,onSelect:u}){return he.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:u},he.default.createElement("span",null,a),i?he.default.createElement("span",{className:"pop-hint"},i):null)}var eo=nt(require("react"),1);function to({value:a,onChange:i,compact:s=!1}){let u=Number.isFinite(Number(a))?Number(a):15;return eo.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},eo.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),eo.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:u,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:g=>i(Number(g.target.value))}),eo.default.createElement("span",{className:"sub-size-value"},u))}var bn="/podwave/api";function $o({transcript:a,status:i,progress:s,stage:u,chunks:g,queued:v,elapsed:b,error:P,position:S,onSeek:j,onClose:H,onStart:G,onCancel:B,target:q,job:h,onChangeTarget:L,onTranslate:Z,onRetranslate:R=null,onRetranslateLine:je=null,onOpenSettings:ke,inline:ee=!1,editingId:Ne=null,draft:Y="",onDraftChange:ae,onEditLine:pe,onSaveLine:Q,onCancelEdit:de,onSplitLine:y,onMergeLine:N,onValidate:O,onResegment:E,issues:w=[],fontSize:be=15,onFontSize:Se=null,width:ze=null,height:Pe=null,onResize:ne=null}){let ce=(0,m.useRef)(null),I=(0,m.useRef)(null),$e=(0,m.useRef)(null),we=(0,m.useRef)(null),[Te,X]=(0,m.useState)(!1),T=a?.lines?.findIndex(f=>S>=f.start&&S<f.end)??-1;(0,m.useEffect)(()=>{if(T<0||!ce.current)return;ce.current.querySelector(`[data-seg="${T}"]`)?.scrollIntoView({block:"nearest"})},[T]);let ue=f=>{let x=we.current;if(!x)return null;let $=f.clientX-x.startX,J=f.clientY-x.startY,p=Math.max(320,window.innerWidth-60),D=Math.max(220,window.innerHeight-(ee?160:140));return ee?{width:null,height:Math.round(Math.min(D,Math.max(240,x.height+J)))}:{width:Math.round(Math.min(p,Math.max(320,x.width-$))),height:Math.round(Math.min(D,Math.max(200,x.height-J)))}},Oe=f=>{if(f.button!==void 0&&f.button!==0)return;let x=$e.current;if(!x||!ne)return;f.preventDefault();let $=x.getBoundingClientRect();we.current={startX:f.clientX,startY:f.clientY,width:$.width,height:$.height},f.currentTarget.setPointerCapture?.(f.pointerId)},Be=f=>{if(!we.current)return;let x=ue(f);x&&ne(x.width,x.height,!1)},De=f=>{if(!we.current)return;let x=ue(f);we.current=null,f.currentTarget.releasePointerCapture?.(f.pointerId),x&&ne(x.width,x.height,!0)},Ze=i==="queued"||i==="running",We=h?.status==="running"||h?.status==="queued",Xe=h?.missing??0,Ue=We?`\u7FFB\u8BD1\u4E2D${h?.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""}`:h?.status==="partial"?"\u7EED\u7FFB":h?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",Ge=async()=>{let x=(a?.lines||[]).map($=>{let J=Le($.start),p=q?$.translations?.[q]:"";return p?`${J} ${$.text}
${" ".repeat(J.length+1)}${p}`:`${J} ${$.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(x);else{let $=document.createElement("textarea");$.value=x,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}X(!0),setTimeout(()=>X(!1),1600)}catch{X(!1)}};return m.default.createElement("section",{ref:$e,className:`transcript-panel ${ee?"inline":""} ${Pe?"is-sized":""}`,style:{"--sub-size":`${be}px`,width:!ee&&ze?`${ze}px`:void 0,height:Pe?`${Pe}px`:void 0,maxHeight:Pe?"none":void 0}},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),a?m.default.createElement("span",{className:"transcript-meta"},a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines.length," \u884C",a.speakers?.length?` \xB7 ${a.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:q,onChange:f=>L(f.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),Se?m.default.createElement(it,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${be}px`,align:"end"},()=>m.default.createElement("span",{className:"pop-fs"},m.default.createElement(to,{value:be,onChange:Se}))):null,a&&q&&Z?We?m.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},Ue):Xe>0?m.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Z,title:`\u8FD8\u6709 ${Xe} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},Ue):null:null,m.default.createElement(it,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:f})=>m.default.createElement(m.default.Fragment,null,a?m.default.createElement(Ae,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{f(),O()}},"\u6821\u9A8C\u5B57\u5E55"):null,a&&E?m.default.createElement(Ae,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{f(),E()}},"\u6574\u7406\u65AD\u53E5"):null,a&&q&&R?m.default.createElement(Ae,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{f(),R()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,m.default.createElement(Ae,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{f(),ke()}},"\u8BBE\u7F6E"))),a?m.default.createElement(it,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:f})=>m.default.createElement(m.default.Fragment,null,m.default.createElement(qo,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${bn}/episodes/${a.id}/transcript/export?format=srt`,onSelect:f},"\u5B57\u5E55\u6587\u4EF6 .srt"),m.default.createElement(qo,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${bn}/episodes/${a.id}/transcript/export?format=md`,onSelect:f},"\u6587\u7A3F .md"),m.default.createElement(Ae,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:Ge},Te?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,ee?null:m.default.createElement("button",{className:"transcript-close",onClick:H,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:ce},a&&Ze?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${a.lines.length} \u884C`),B?m.default.createElement("button",{className:"seg-tool",onClick:B},"\u53D6\u6D88"):null):null,a&&w?.length?m.default.createElement("div",{className:"tr-issues"},w.slice(0,5).map(f=>m.default.createElement("div",{key:f},"\xB7 ",f)),w.length>5?m.default.createElement("div",null,"\u2026\u5171 ",w.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?m.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,h?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,h?.status==="none"&&q&&a&&(h.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,a?a.lines.map((f,x)=>m.default.createElement("div",{key:f.id,"data-seg":x,className:`seg-row ${x===T?"active":""} ${Ne===f.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Le(f.start)}`,onClick:()=>j(f.start),onKeyDown:$=>{($.key==="Enter"||$.key===" ")&&($.preventDefault(),j(f.start))}},m.default.createElement("span",{className:"seg-time"},Le(f.start)),Ne===f.id?m.default.createElement("span",{className:"seg-edit",onClick:$=>$.stopPropagation()},m.default.createElement("textarea",{ref:I,value:Y,rows:Math.min(4,Math.max(2,Math.ceil((Y.length||1)/40))),onChange:$=>ae($.target.value),onKeyDown:$=>{$.key==="Enter"&&($.metaKey||$.ctrlKey)&&Q(f.id),$.key==="Escape"&&de()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>Q(f.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>y(f.id,I.current?.selectionStart??Math.floor(Y.length/2))},"\u62C6\u5206"),q&&je?m.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>je(f)},"\u91CD\u7FFB"):null,m.default.createElement("button",{className:"seg-tool",onClick:de},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,f.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${f.speaker%5}`},a.speakers?.[f.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${f.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},f.text,f.translations?.[q]?m.default.createElement("span",{className:"seg-trans"},f.translations[q]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:$=>{$.stopPropagation(),pe(f)}},"\u270E"),x<a.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:$=>{$.stopPropagation(),N(f.id)}},"\u21E3"):null)))):Ze?m.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),B?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:B},"\u53D6\u6D88\u8F6C\u5199"):null):P?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},P),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:G},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:G},"\u5F00\u59CB\u8F6C\u5199"))),ne?m.default.createElement(m.default.Fragment,null,ee?null:m.default.createElement(m.default.Fragment,null,m.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:Oe,onPointerMove:Be,onPointerUp:De,onPointerCancel:De,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),m.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:Oe,onPointerMove:Be,onPointerUp:De,onPointerCancel:De,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),m.default.createElement("span",{className:`transcript-resize ${ee?"is-inline":""}`,onPointerDown:Oe,onPointerMove:Be,onPointerUp:De,onPointerCancel:De,onDoubleClick:()=>ne(null,null,!0),title:ee?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var K=nt(require("react"),1);function Wo({line:a,target:i,fontSize:s,onFontSize:u,x:g,y:v,width:b,height:P,onMove:S,onResize:j,onClose:H,onSeek:G,speakerLabel:B,status:q}){let h=(0,K.useRef)(null),L=(0,K.useRef)(null),Z=(0,K.useRef)(null),R=(0,K.useCallback)((y,N)=>{let O=h.current,E=O?.offsetWidth||420,w=O?.offsetHeight||120,be=Math.max(8,window.innerWidth-E-8),Se=Math.max(8,window.innerHeight-w-8);return{x:Math.min(be,Math.max(8,y)),y:Math.min(Se,Math.max(8,N))}},[]),je=(0,K.useCallback)(y=>{if(y.button!==void 0&&y.button!==0)return;let N=h.current;if(!N)return;let O=N.getBoundingClientRect();L.current={dx:y.clientX-O.left,dy:y.clientY-O.top},y.currentTarget.setPointerCapture?.(y.pointerId)},[]),ke=(0,K.useCallback)(y=>{let N=L.current;if(!N)return;let O=R(y.clientX-N.dx,y.clientY-N.dy);S(O.x,O.y,!1)},[R,S]),ee=(0,K.useCallback)(y=>{let N=L.current;if(!N)return;L.current=null,y.currentTarget.releasePointerCapture?.(y.pointerId);let O=R(y.clientX-N.dx,y.clientY-N.dy);S(O.x,O.y,!0)},[R,S]),Ne=(0,K.useCallback)(y=>{if(y.button!==void 0&&y.button!==0)return;y.stopPropagation();let N=h.current;if(!N)return;let O=N.getBoundingClientRect();Z.current={startX:y.clientX,startY:y.clientY,width:O.width,height:O.height},y.currentTarget.setPointerCapture?.(y.pointerId)},[]),Y=(0,K.useCallback)(y=>{let N=Z.current;if(!N)return null;let O=Math.max(240,window.innerWidth-(g==null?16:g+8)),E=Math.max(92,window.innerHeight-(v==null?16:v+8));return{width:Math.round(Math.min(O,Math.max(240,N.width+(y.clientX-N.startX)))),height:Math.round(Math.min(E,Math.max(92,N.height+(y.clientY-N.startY))))}},[g,v]),ae=(0,K.useCallback)(y=>{if(!Z.current)return;y.stopPropagation();let N=Y(y);N&&j(N.width,N.height,!1)},[j,Y]),pe=(0,K.useCallback)(y=>{if(!Z.current)return;y.stopPropagation();let N=Y(y);Z.current=null,y.currentTarget.releasePointerCapture?.(y.pointerId),N&&j(N.width,N.height,!0)},[j,Y]);(0,K.useEffect)(()=>{let y=N=>{N.key==="Escape"&&H()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[H]);let Q=a&&i?a.translations?.[i]:"",de=q==="queued"||q==="running";return K.default.createElement("div",{ref:h,className:`caption-overlay ${P?"is-sized":""}`,style:{left:g??void 0,top:v??void 0,right:g==null?void 0:"auto",bottom:v==null?void 0:"auto",width:b?`${b}px`:void 0,height:P?`${P}px`:void 0,"--sub-size":`${s||15}px`}},K.default.createElement("div",{className:"caption-head",onPointerDown:je,onPointerMove:ke,onPointerUp:ee,onPointerCancel:ee,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},K.default.createElement(te,{name:"wave",size:13}),K.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),K.default.createElement(to,{value:s,onChange:u,compact:!0}),K.default.createElement("button",{className:"caption-close",onClick:H,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),K.default.createElement("div",{className:`caption-body ${a?"":"empty"}`,onClick:()=>a?G(a.start):null,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:y=>{a&&(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),G(a.start))},title:a?`\u8DF3\u5230 ${Le(a.start)}`:void 0},a?K.default.createElement(K.default.Fragment,null,B?K.default.createElement("span",{className:"caption-speaker"},B):null,K.default.createElement("div",{className:"caption-text"},a.text),Q?K.default.createElement("div",{className:"caption-trans"},Q):null):K.default.createElement("div",{className:"caption-hint"},de?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),K.default.createElement("span",{className:"caption-resize",onPointerDown:Ne,onPointerMove:ae,onPointerUp:pe,onPointerCancel:pe,onDoubleClick:()=>j(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var d=nt(require("react"),1),xe="/podwave/api";async function Ye(a){let i=await fetch(a),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Ot(a,i){let s=await fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),u=await s.json().catch(()=>({}));if(!s.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return u}function wn(a){let i=Math.max(0,Math.round(Number(a)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function yn(a){if(!a)return"";let i=new Date(a);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Xo({onPlay:a,currentId:i}){let[s,u]=(0,d.useState)(null),[g,v]=(0,d.useState)(""),[b,P]=(0,d.useState)(""),[S,j]=(0,d.useState)(""),[H,G]=(0,d.useState)(""),[B,q]=(0,d.useState)(0),[h,L]=(0,d.useState)(!1),[Z,R]=(0,d.useState)(""),[je,ke]=(0,d.useState)(""),[ee,Ne]=(0,d.useState)([]),[Y,ae]=(0,d.useState)(!1),[pe,Q]=(0,d.useState)(null),[de,y]=(0,d.useState)([]),[N,O]=(0,d.useState)(null),[E,w]=(0,d.useState)(!1),[be,Se]=(0,d.useState)(""),[ze,Pe]=(0,d.useState)(null),[ne,ce]=(0,d.useState)(!1),[I,$e]=(0,d.useState)(null),[we,Te]=(0,d.useState)(!1),X=(0,d.useCallback)(async(p=!1)=>{ae(!0);try{let D=await Ye(`${xe}/xyz/subscriptions${p?"?refresh=1":""}`);Ne(D.items||[])}catch(D){T(D)}finally{ae(!1)}},[]);function T(p){let D=String(p?.message||"");if(D.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||D.includes("\u767B\u5F55\u5DF2\u5931\u6548")){u(at=>({...at||{},loggedIn:!1})),Ne([]),Q(null),y([]),R(""),v("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}v(ue(D))}function ue(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function Oe(){try{await Ot(`${xe}/xyz/open-web`,{})}catch(p){T(p)}}(0,d.useEffect)(()=>{Ye(`${xe}/xyz/status`).then(p=>{u(p),p.loggedIn&&X()}).catch(p=>T(p)),Ye(`${xe}/xyz/local-app`).then(p=>$e(p)).catch(()=>$e({available:!1}))},[X]),(0,d.useEffect)(()=>{if(!B)return;let p=setInterval(()=>q(D=>Math.max(0,D-1)),1e3);return()=>clearInterval(p)},[B]);async function Be(){if(v(""),!/^1\d{10}$/.test(S.trim())){v("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}P("send");try{let p=await Ot(`${xe}/xyz/auth/send-code`,{phone:S.trim(),areaCode:"+86"});q(60),p.devCode&&v(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){T(p)}finally{P("")}}async function De(){if(v(""),!S.trim()||!H.trim()){v("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}P("login");try{await Ot(`${xe}/xyz/auth/login`,{phone:S.trim(),code:H.trim(),areaCode:"+86"});let p=await Ye(`${xe}/xyz/status`);u(p),await X()}catch(p){T(p)}finally{P("")}}async function Ze(){if(v(""),!Z.trim()){v("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}P("token");try{await Ot(`${xe}/xyz/auth/token`,{refreshToken:Z.trim(),deviceId:je.trim()});let p=await Ye(`${xe}/xyz/status`);u(p),R(""),await X()}catch(p){T(p)}finally{P("")}}async function We(){v("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let p=await navigator.clipboard.readText();if(!p.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");R(p.trim())}catch(p){v(p?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function Xe(){v(""),P("app");try{await Ot(`${xe}/xyz/auth/from-app`,{});let p=await Ye(`${xe}/xyz/status`);u(p),await X(!0)}catch(p){T(p)}finally{Ye(`${xe}/xyz/local-app`).then(p=>$e(p)).catch(()=>{}),P("")}}async function Ue(){P("logout");try{await Ot(`${xe}/xyz/auth/logout`,{}),u({loggedIn:!1}),Ne([]),Q(null),y([])}catch(p){T(p)}finally{P("")}}async function Ge(p){Q(p),y([]),O(null),w(!0),v("");try{let D=await Ye(`${xe}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);y(D.items||[]),O(D.loadMoreKey||null)}catch(D){T(D)}finally{w(!1)}}async function f(){if(!(!pe||!N||E)){w(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:N}),D=await Ye(`${xe}/xyz/podcast/${encodeURIComponent(pe.pid)}/episodes?${p}`);y(at=>[...at,...D.items||[]]),O(D.loadMoreKey||null)}catch(p){T(p)}finally{w(!1)}}}async function x(p){P(`play:${p.eid}`),v("");try{await a(p)}catch(D){T(D)}finally{P("")}}async function $(){if(v(""),!be.trim()){v("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}ce(!0);try{let p=be.trim();if(/\/episode\//i.test(p)){let D=await Ye(`${xe}/xyz/public/episode?url=${encodeURIComponent(p)}`);Pe({pid:D.podcast.pid,title:D.podcast.title,author:D.podcast.author,episodes:[D.episode]})}else{let D=await Ye(`${xe}/xyz/public/podcast?url=${encodeURIComponent(p)}`);Pe(D.podcast)}}catch(p){T(p)}finally{ce(!1)}}async function J(p){P(`pplay:${p.eid}`),v("");try{await a({...p,public:!0})}catch(D){T(D)}finally{P("")}}return s?s.loggedIn?pe?d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("button",{className:"btn ghost",onClick:()=>{Q(null),y([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),d.default.createElement("div",{className:"xyz-podcast-title"},pe.title)),E&&de.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,d.default.createElement("div",{className:"xyz-eps"},de.map(p=>d.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},p.title),d.default.createElement("div",{className:"xyz-ep-meta"},yn(p.pubDate)," \xB7 ",wn(p.duration))),d.default.createElement("button",{className:"btn primary",disabled:b===`play:${p.eid}`,onClick:()=>x(p)},b===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!E&&de.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,N?d.default.createElement("button",{className:"btn ghost xyz-more",disabled:E,onClick:f},E?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),g?d.default.createElement("p",{className:"xyz-error"},g):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("div",null,d.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),d.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),d.default.createElement("div",{className:"xyz-head-actions"},d.default.createElement("button",{className:"btn ghost",disabled:Y,onClick:()=>X(!0)},Y?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),d.default.createElement("button",{className:"btn ghost",disabled:b==="logout",onClick:Ue},"\u9000\u51FA\u767B\u5F55"))),Y?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,d.default.createElement("div",{className:"xyz-subs"},ee.map(p=>d.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>Ge(p)},p.cover?d.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):d.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),d.default.createElement("div",{className:"xyz-sub-text"},d.default.createElement("div",{className:"xyz-sub-title"},p.title),d.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!Y&&ee.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,g?d.default.createElement("p",{className:"xyz-error"},g):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-login"},d.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),d.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn primary",disabled:b==="app",onClick:Xe},b==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),d.default.createElement("p",{className:"xyz-hint"},I===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":I.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${I.deviceId?`\uFF08\u8BBE\u5907 ${I.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${I.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),d.default.createElement("button",{className:"xyz-link",onClick:()=>Te(p=>!p)},we?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),we?d.default.createElement(d.default.Fragment,null,d.default.createElement("ol",{className:"xyz-steps"},d.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),d.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),d.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",d.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",d.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),d.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn ghost",onClick:Oe},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),d.default.createElement("div",{className:"xyz-advanced"},d.default.createElement("label",null,d.default.createElement("span",null,"refresh token \u6216 access token"),d.default.createElement("input",{value:Z,onChange:p=>R(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),d.default.createElement("button",{className:"xyz-link",type:"button",onClick:We},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),d.default.createElement("label",null,d.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),d.default.createElement("input",{value:je,onChange:p=>ke(p.target.value),placeholder:"x-jike-device-id"})),d.default.createElement("button",{className:"btn primary",disabled:b==="token",onClick:Ze},b==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),d.default.createElement("button",{className:"xyz-link",onClick:()=>L(p=>!p)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u624B\u673A\u53F7"),d.default.createElement("input",{value:S,onChange:p=>j(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),d.default.createElement("button",{className:"btn ghost",disabled:b==="send"||B>0,onClick:Be},B>0?`${B}s \u540E\u91CD\u53D1`:b==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),d.default.createElement("input",{value:H,onChange:p=>G(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),d.default.createElement("button",{className:"btn primary",disabled:b==="login",onClick:De},b==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,d.default.createElement("div",{className:"xyz-public"},d.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),d.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),d.default.createElement("input",{value:be,onChange:p=>Se(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),d.default.createElement("button",{className:"btn ghost",disabled:ne,onClick:$},ne?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ze?d.default.createElement("div",{className:"xyz-eps"},d.default.createElement("div",{className:"xyz-ep-title"},ze.title,d.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ze.author)),ze.episodes.map(p=>d.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},p.title),d.default.createElement("div",{className:"xyz-ep-meta"},yn(p.pubDate)," \xB7 ",wn(p.duration))),d.default.createElement("button",{className:"btn primary",disabled:b===`pplay:${p.eid}`,onClick:()=>J(p)},b===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),g?d.default.createElement("p",{className:"xyz-error"},g):null)):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Jo(a){return String(a||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function kn(a,i){let s=Jo(i),u=s?`${s}/`:"",g=new Map;for(let v of a){let b=Jo(v?.rel);if(!b||u&&!b.startsWith(u))continue;let S=b.slice(u.length).split("/")[0];if(!S)continue;let j=u?`${u}${S}`:S,H=g.get(j)||{rel:j,name:S,count:0};H.count+=1,g.set(j,H)}return[...g.values()].sort((v,b)=>v.name.localeCompare(b.name,"zh-Hans-CN"))}function Nn(a,i){let s=[{rel:"",label:a}],u=Jo(i);if(!u)return s;let g="";for(let v of u.split("/").filter(Boolean))g=g?`${g}/${v}`:v,s.push({rel:g,label:v});return s}function zn(a){if(a.type==="download")return a.status==="done"?"\u5DF2\u4E0B\u8F7D":a.status==="error"||a.status==="interrupted"?a.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${a.progress?` ${a.progress}%`:""}`;let i=a.progress?.percent,s=a.chunks?.total?` \xB7 ${a.chunks.done}/${a.chunks.total} \u5757`:"";return a.status==="done"?`\u5B8C\u6210${a.lineCount?` \xB7 ${a.lineCount} \u884C`:""}${a.language?` \xB7 ${a.language}`:""}`:a.status==="error"||a.status==="interrupted"?a.error||"\u5931\u8D25":a.status==="cancelled"?a.error||"\u5DF2\u53D6\u6D88":a.status==="queued"?"\u6392\u961F\u4E2D":`${a.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":a.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":a.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var M="/podwave/api",hr=[.5,.75,1,1.25,1.5,1.75,2];async function ye(a){let i=await fetch(a);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function ie(a,i,s){let u=await fetch(a,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}async function xr(a,i=1200){let s=await createImageBitmap(a),u=Math.min(1,i/Math.max(s.width,s.height)),g=Math.max(1,Math.round(s.width*u)),v=Math.max(1,Math.round(s.height*u)),b=document.createElement("canvas");b.width=g,b.height=v;let P=b.getContext("2d");P.fillStyle="#16161a",P.fillRect(0,0,g,v),P.drawImage(s,0,0,g,v),typeof s.close=="function"&&s.close();let S=await new Promise(j=>b.toBlob(j,"image/jpeg",.9));if(!S)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return S}function br({onSubmit:a,onPick:i,onClose:s}){let[u,g]=(0,t.useState)(""),[v,b]=(0,t.useState)(!1),[P,S]=(0,t.useState)(!1),[j,H]=(0,t.useState)(""),G=(0,t.useRef)(null);return(0,t.useEffect)(()=>{G.current?.focus();let h=L=>{L.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!u.trim()||v)){b(!0),H("");try{await a(u.trim()),s()}catch(L){H(L.message),b(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!P){S(!0),H("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await a(h.path),s())}catch(h){H(h.message)}finally{S(!1)}}},disabled:P,autoFocus:!0},P?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:G,value:u,onChange:h=>g(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:v||!u.trim()},v?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),j?t.default.createElement("div",{className:"dialog-error"},j):null))}function wr({config:a,onClose:i,onSave:s}){let[u,g]=(0,t.useState)(a?.provider||"api"),[v,b]=(0,t.useState)(""),[P,S]=(0,t.useState)(!1),[j,H]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:B=>{B.target===B.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async B=>{B.preventDefault(),S(!0),H("");try{await s({provider:u,apiKey:v||void 0})}catch(q){H(q.message),S(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",a?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:u,onChange:B=>g(B.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:v,onChange:B=>b(B.target.value),placeholder:a?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},a?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),j?t.default.createElement("div",{className:"dialog-error"},j):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:P},"\u4FDD\u5B58"))))}function Vo(){let[a,i]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[g,v]=(0,t.useState)({}),[b,P]=(0,t.useState)({running:!1}),[S,j]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[H,G]=(0,t.useState)(!1),[B,q]=(0,t.useState)(!1),[h,L]=(0,t.useState)(0),[Z,R]=(0,t.useState)(0),[je,ke]=(0,t.useState)(0),[ee,Ne]=(0,t.useState)(!1),[Y,ae]=(0,t.useState)(""),[pe,Q]=(0,t.useState)([]),[de,y]=(0,t.useState)("recent"),[N,O]=(0,t.useState)("all"),[E,w]=(0,t.useState)(""),[be,Se]=(0,t.useState)(""),[ze,Pe]=(0,t.useState)("all"),[ne,ce]=(0,t.useState)(null),[I,$e]=(0,t.useState)(null),[we,Te]=(0,t.useState)(!1),[X,T]=(0,t.useState)(0),[ue,Oe]=(0,t.useState)(0),[Be,De]=(0,t.useState)(!0),[Ze,We]=(0,t.useState)(!1),[Xe,Ue]=(0,t.useState)(""),[Ge,f]=(0,t.useState)(""),[x,$]=(0,t.useState)(null),[J,p]=(0,t.useState)("none"),[D,at]=(0,t.useState)(null),Bt=(0,t.useRef)(new Set),[He,Mt]=(0,t.useState)(15),[st,mt]=(0,t.useState)(!1),[gt,Ut]=(0,t.useState)({x:null,y:null}),[Ht,Ft]=(0,t.useState)({width:null,height:null}),[Kt,vt]=(0,t.useState)({width:null,height:null}),[oo,qt]=(0,t.useState)(null),Wt=(0,t.useRef)(null),[Xt,ft]=(0,t.useState)(!1),[Jt,Ce]=(0,t.useState)(0),[me,Qe]=(0,t.useState)(""),[ht,lt]=(0,t.useState)(!1),[W,Vt]=(0,t.useState)(null),[ge,Po]=(0,t.useState)(""),[Je,Ve]=(0,t.useState)({status:"none"}),[To,St]=(0,t.useState)(!1),[no,ro]=(0,t.useState)(!1),[ao,oe]=(0,t.useState)(!1),[Re,so]=(0,t.useState)(null),[Pt,io]=(0,t.useState)(!1),[Tt,lo]=(0,t.useState)([]),[xt,bt]=(0,t.useState)(!1),[Ee,et]=(0,t.useState)([]),[pt,dt]=(0,t.useState)(null),[wt,Yt]=(0,t.useState)(""),[_t,po]=(0,t.useState)([]),se=(0,t.useRef)(null),tt=(0,t.useRef)(""),co=(0,t.useRef)(null),r=(0,t.useRef)(null),z=(0,t.useRef)(null),C=(0,t.useRef)(0),ve=(0,t.useRef)(S),fe=(0,t.useRef)(0),Dt=(0,t.useRef)(0),Zt=(0,t.useRef)(0),uo=(0,t.useRef)(0),mo=(0,t.useRef)(!1),yt=(0,t.useRef)(!1);(0,t.useEffect)(()=>{q(!1)},[ne]),(0,t.useEffect)(()=>{ve.current=S},[S]),(0,t.useEffect)(()=>{r.current=I},[I]),(0,t.useEffect)(()=>{z.current=x},[x]),(0,t.useEffect)(()=>{C.current=ue},[ue]),(0,t.useEffect)(()=>{let e=!1;return ye(`${M}/transcribe/settings`).then(o=>{e||at(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ye(`${M}/ui-settings`);!e&&o&&(ro(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&Mt(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&mt(o.captionOpen),Ut({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),Ft({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}),vt({width:Number.isFinite(Number(o.transcriptW))&&o.transcriptW!==null?Number(o.transcriptW):null,height:Number.isFinite(Number(o.transcriptH))&&o.transcriptH!==null?Number(o.transcriptH):null}),Number.isFinite(Number(o.episodeLeftW))&&o.episodeLeftW!==null&&qt(Number(o.episodeLeftW)))}catch{}})(),()=>{e=!0}},[]);let Ie=(0,t.useCallback)(e=>{fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),Do=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));Mt(o),Ie({subtitleSize:o})},[Ie]),Cn=(0,t.useCallback)((e,o,l)=>{Ut({x:e,y:o}),l&&Ie({captionX:e,captionY:o})},[Ie]),Mn=(0,t.useCallback)((e,o,l)=>{let c={width:e??null,height:o??null};Ft(c),l&&Ie({captionW:c.width,captionH:c.height})},[Ie]),_o=(0,t.useCallback)((e,o,l)=>{let c={width:e??null,height:o??null};vt(c),l&&Ie({transcriptW:c.width,transcriptH:c.height})},[Ie]),go=(0,t.useRef)(null),Zo=(0,t.useRef)(null),Go=e=>{let o=go.current;return o?Math.round(Math.min(460,Math.max(140,o.width+(e.clientX-o.startX)))):null},Sn=e=>{if(e.button!==void 0&&e.button!==0)return;let o=Zo.current;o&&(e.preventDefault(),go.current={startX:e.clientX,width:o.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},Pn=e=>{let o=Go(e);o!=null&&qt(o)},Qo=e=>{if(!go.current)return;let o=Go(e);go.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),o!=null&&(qt(o),Ie({episodeLeftW:o}))},Tn=()=>{qt(null),Ie({episodeLeftW:null})},Dn=()=>Wt.current?.click(),En=async e=>{if(!(!e||!ne)){ft(!0);try{let o=await xr(e),l=await fetch(`${M}/episodes/${encodeURIComponent(ne)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:o});if(!l.ok){let c=await l.json().catch(()=>({}));throw new Error(c.error||"\u6362\u5C01\u9762\u5931\u8D25")}await Fe(),k("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(o){k(String(o.message||o))}finally{ft(!1)}}},In=async()=>{if(ne){ft(!0);try{let e=await fetch(`${M}/episodes/${encodeURIComponent(ne)}/cover`,{method:"DELETE"});if(!e.ok){let o=await e.json().catch(()=>({}));throw new Error(o.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await Fe(),k("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){k(String(e.message||e))}finally{ft(!1)}}},An=(0,t.useCallback)(()=>{mt(e=>{let o=!e;return Ie({captionOpen:o}),o})},[Ie]),jn=(0,t.useCallback)(()=>{mt(!1),Ie({captionOpen:!1})},[Ie]),Gt=(0,t.useMemo)(()=>{let e=x?.lines;return e?.length&&e.find(o=>X>=o.start&&X<o.end)||null},[x,X]),Ln=Gt&&Gt.speaker!=null?x?.speakers?.[Gt.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${Gt.speaker+1}`:"",Ro=(0,t.useCallback)(()=>{ro(e=>{let o=!e;return fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{f(e),window.clearTimeout(uo.current),uo.current=window.setTimeout(()=>f(""),2600)},[]),Fe=(0,t.useCallback)(async()=>{let e=await ye(`${M}/episodes`);return i(e.items||[]),u(e.folders||[]),v(e.progress||{}),P(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ye(`${M}/health`).catch(()=>({}));o.mediaBase&&(tt.current=o.mediaBase);let l=await ye(`${M}/state`);if(e)return;j(l.settings),u(l.folders||[]);let c=await Fe();if(e)return;let F=l.settings?.lastEpisodeId,V=F?(c.items||[]).find($t=>$t.id===F):null;if(V){$e(V),Oe(V.duration||0);let $t=c.progress?.[V.id]?.position||0;fe.current=$t>5?$t:0,T(fe.current);let Ct=se.current;Ct&&(Ct.src=tt.current?`${tt.current}/episodes/${V.id}/audio`:`${M}/episodes/${V.id}/audio`,Ct.load(),Ct.playbackRate=l.settings?.rate||1,Ct.volume=l.settings?.volume??.9)}De(!1),mo.current=!0}catch(o){e||(Ue(o.message),De(!1))}})(),()=>{e=!0}},[Fe]),(0,t.useEffect)(()=>{if(!b.running)return;let e=setInterval(()=>{Fe().catch(()=>{})},1500);return()=>clearInterval(e)},[b.running,Fe]),(0,t.useEffect)(()=>{let e=!1;return $(null),Qe(""),Ce(0),I?.id?((async()=>{try{let o=await ye(`${M}/episodes/${I.id}/transcript`);if(e)return;p(o.status),so(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?$(o.transcript):o.status==="queued"||o.status==="running"?(Ce(o.elapsedMs||0),o.transcript&&$(o.transcript)):o.status==="error"&&Qe(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||Qe(o.message)}})(),()=>{e=!0}):(p("none"),()=>{e=!0})},[I?.id]),(0,t.useEffect)(()=>{ye(`${M}/translate/settings`).then(Vt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=I?.id;return!o||!ge?(Ve({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await ye(`${M}/episodes/${o}/translate?target=${ge}`);e||Ve(l)}catch{e||Ve({status:"none"})}})(),()=>{e=!0})},[I?.id,ge]),(0,t.useEffect)(()=>{if(J!=="queued"&&J!=="running")return;let e=!1,o=setInterval(async()=>{let l=r.current?.id;if(l)try{let c=await ye(`${M}/episodes/${l}/transcript`);if(e)return;p(c.status),so(c.status==="queued"||c.status==="running"?c:null),Ce(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?$(c.transcript):c.status==="done"&&c.transcript?($(c.transcript),lt(!0),k("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&Qe(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[J,k]),(0,t.useEffect)(()=>{if(Je.status!=="running"&&Je.status!=="queued")return;let e=!1,o=async c=>{let F=await ye(`${M}/episodes/${c}/translate?target=${ge}`);if(!e){Ve(F),F.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let V=await ye(`${M}/episodes/${c}/transcript`);!e&&V.transcript&&$(V.transcript)}catch{}}},l=setInterval(()=>{let c=r.current?.id;c&&o(c).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[Je.status,ge,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let c=await ye(`${M}/jobs`);e||lo(c.items||[])}catch{}};o();let l=setInterval(o,Pt?2500:2e4);return()=>{e=!0,clearInterval(l)}},[Pt]);let kt=(0,t.useCallback)((e,o,l,c=!1)=>{if(!e)return;let F=Date.now();!c&&F-Zt.current<4e3||(Zt.current=F,ie(`${M}/progress/${e}`,"PUT",{position:o,duration:l}).catch(()=>{}),v(V=>({...V,[e]:{position:o,duration:l,updatedAt:F}})))},[]),ct=(0,t.useCallback)(e=>{j(o=>({...o,...e})),ie(`${M}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!we||!I||D?.realtime===!1||D?.provider==="local"||x&&!x.partial||J==="queued"||J==="running")return;let e=I.id;Bt.current.has(e)||(Bt.current.add(e),ie(`${M}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&p("queued")}).catch(()=>{}))},[we,I,x,J,D]);let Qt=(0,t.useCallback)(async()=>{let e=r.current;if(!e)return;Qe(""),lt(!0);let o=z.current,l=!!o&&!o.partial;if(l){let c=Array.isArray(o.lines)?o.lines.length:0,F=(D?.provider||"api")==="api",V=[`\u91CD\u65B0\u8F6C\u5199\u8FD9\u4E00\u96C6\uFF1F\u73B0\u6709\u5B57\u5E55\uFF08${c} \u884C\uFF09\u4F1A\u88AB\u8986\u76D6\u3002`,"",F?"\u8D70\u4E91\u7AEF\u8F6C\u5199\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u8D39\u4E00\u6B21\u3002":"\u8D70\u672C\u5730\u6A21\u578B\uFF0C\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1\uFF0C\u4F46\u4F1A\u5360 CPU/GPU\u3002"].join(`
`);if(!window.confirm(V))return}try{let c=await ie(`${M}/episodes/${e.id}/transcribe`,"POST",l?{force:!0}:{});p(c.status||"queued"),l&&k("\u91CD\u65B0\u8F6C\u5199\u5DF2\u5F00\u59CB")}catch(c){Qe(c.message)}},[k,D]),On=(0,t.useCallback)(()=>{if(x){lt(e=>!e);return}if(J==="queued"||J==="running"){lt(!0);return}Qt()},[x,J,Qt]),Eo=(0,t.useCallback)(async()=>{if(r.current)try{await ie(`${M}/episodes/${r.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){Qe(e.message)}},[k]),Io=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let c=await ie(`${M}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});c?.status==="none"?k("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):k(c?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await ie(`${M}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await ie(`${M}/jobs`,"DELETE",{key:e.key})}catch(c){k(`\u64CD\u4F5C\u5931\u8D25\uFF1A${c.message}`)}let l=await ye(`${M}/jobs`).catch(()=>({items:[]}));lo(l.items||[])},[k]),vo=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let l=await ie(`${M}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),et([]),bt(!1)}catch(l){k(l.message)}},[k]),Bn=(0,t.useCallback)(e=>{et(o=>o.includes(e)?o.filter(l=>l!==e):[...o,e])},[]),ut=(0,t.useCallback)(async(e,o,l)=>{try{let c=await ie(`${M}${e}`,o,l||{});return c?.transcript&&$(c.transcript),c}catch(c){return k(c.message),null}},[k]),en=(0,t.useCallback)(e=>{dt(e.id),Yt(e.text),po([])},[]),tn=(0,t.useCallback)(async e=>{if(!x)return;await ut(`/episodes/${x.id}/transcript/lines/${e??pt}`,"PUT",{text:wt})&&(dt(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[x,pt,wt,ut,k]),on=(0,t.useCallback)(async(e,o)=>{if(!x)return;await ut(`/episodes/${x.id}/transcript/lines/${e??pt}/split`,"POST",{offset:o})&&(dt(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[x,pt,ut,k]),nn=(0,t.useCallback)(async e=>{if(!x)return;await ut(`/episodes/${x.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[x,ut,k]),rn=(0,t.useCallback)(async()=>{if(!x)return;let e=await ut(`/episodes/${x.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(Ve({status:"none",missing:e.after}),k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[x,ut,k]),an=(0,t.useCallback)(async()=>{if(x)try{let e=await ye(`${M}/episodes/${x.id}/transcript/validate`);po(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[x,k]),fo=(0,t.useCallback)(async()=>{let e=r.current?.id;if(!e)return;let o=await ye(`${M}/episodes/${e}/transcript`);o.transcript&&$(o.transcript)},[]),ho=(0,t.useCallback)(async(e=!1)=>{let o=r.current?.id,l=ge;if(!(!o||!l)&&!(Je.status==="running"||Je.status==="queued")){Ve({status:"running"});try{let c=await ie(`${M}/episodes/${o}/translate`,"POST",{target:l,force:e});Ve(c),c.status==="done"&&(await fo(),k(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(c){Ve(F=>({...F,status:"error",error:c.message}))}}},[ge,Je.status,fo,k]),sn=(0,t.useCallback)(()=>ho(!1),[ho]),ln=(0,t.useCallback)(()=>{let e=ge==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&ho(!0)},[ho,ge]),pn=(0,t.useCallback)(async e=>{let o=r.current?.id;if(!(!o||!ge||!e?.id))try{await ie(`${M}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:ge}),await fo(),k("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){k(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[ge,fo,k]),dn=(0,t.useCallback)(e=>{Po(e||"")},[]),Un=async()=>{if(_?.eid)try{await fetch(`${M}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${_.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Hn=e=>{let o=!e.favorite;i(l=>l.map(c=>c.id===e.id?{...c,favorite:o}:c)),ie(`${M}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(l=>k(l.message))},cn=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${M}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(l=>!e.includes(l.id))),et([]),e.includes(ne)&&ce(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ke=(0,t.useMemo)(()=>{let e=[...a];return de==="title"?e.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):de==="duration"?e.sort((o,l)=>(l.duration||0)-(o.duration||0)):e.sort((o,l)=>l.mtime-o.mtime),e},[a,de]),Et=E?be:"",un=(0,t.useMemo)(()=>E?a.filter(e=>e.root===E):[],[a,E]),It=(0,t.useMemo)(()=>E?kn(un,Et):[],[un,E,Et]),ot=(0,t.useMemo)(()=>{let e=Y.trim().toLowerCase();return Ke.filter(o=>{if(E&&o.root!==E||E&&(o.rel||"")!==Et||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let c=g[o.id]?.position||0,F=o.duration||0,V=F?c/F:0;return N==="inprogress"?c>5&&V<.97:N==="finished"?V>=.97:ze==="unheard"?c<=5:ze==="transcribed"?!!o.hasTranscript:ze==="favorites"?!!o.favorite:!0})},[Ke,Y,N,ze,g,E,Et]),mn=(0,t.useMemo)(()=>Tt.filter(e=>e.status==="queued"||e.status==="running"),[Tt]),Nt=(0,t.useMemo)(()=>ot.filter(e=>!e.hasTranscript),[ot]),Ao=(0,t.useMemo)(()=>a.filter(e=>{let o=g[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(g[o.id]?.updatedAt||0)-(g[e.id]?.updatedAt||0)).slice(0,4),[a,g]),Fn=(0,t.useMemo)(()=>a.reduce((e,o)=>e+(o.duration||0),0),[a]),Kn=Math.round(Fn/3600*10)/10,At=(0,t.useMemo)(()=>E?Nn(zo(E),Et):[],[E,Et]),qn=E?At.length>1?At[At.length-1].label:zo(E):N==="inprogress"?"\u7EE7\u7EED\u6536\u542C":N==="finished"?"\u5DF2\u64AD\u5B8C":N==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",_=ne?a.find(e=>e.id===ne)||(I?.id===ne?I:null):null,Wn=Be?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":E?`${ot.length} \u96C6${It.length?` \xB7 ${It.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${ot.length} \u96C6 \xB7 \u5171 ${Kn} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Ir=(0,t.useMemo)(()=>I?Ke.findIndex(e=>e.id===I.id):-1,[Ke,I]),jt=(0,t.useCallback)(()=>{let e=se.current;if(e){if(!r.current){let o=ot[0]||Ke[0];o&&zt(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[ot,Ke]),zt=(0,t.useCallback)((e,o=!0)=>{let l=se.current;if(!l||!e)return;if(r.current&&r.current.id===e.id){o&&jt();return}r.current&&!l.ended&&l.currentTime>1&&kt(r.current.id,l.currentTime,l.duration||C.current,!0),r.current=e,$e(e),ce(V=>V&&e.id),Oe(e.duration||0);let c=g[e.id]?.position||0,F=c>5&&(!e.duration||c<e.duration-10)?c:0;fe.current=F,T(F),e.source==="xyz"?l.src=tt.current?`${tt.current}/xyz/${e.id.slice(3)}/audio`:`${M}/episodes/${e.id}/audio`:l.src=tt.current?`${tt.current}/episodes/${e.id}/audio`:`${M}/episodes/${e.id}/audio`,l.load(),l.playbackRate=ve.current.rate||1,l.volume=ve.current.volume??.9,o&&l.play().catch(()=>{}),ct({lastEpisodeId:e.id})},[g,kt,ct,jt]),Xn=(0,t.useCallback)(async e=>{let o=e.public?`${M}/xyz/public/play`:`${M}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},c=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),F=await c.json().catch(()=>({}));if(!c.ok)throw new Error(F.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Fe(),zt(F.item,!0)},[Fe,zt]);(0,t.useEffect)(()=>{let e=Y.trim();if(e.length<2){Q([]);return}let o=window.setTimeout(()=>{ye(`${M}/search?q=${encodeURIComponent(e)}`).then(l=>Q(Array.isArray(l.items)?l.items:[])).catch(()=>Q([]))},250);return()=>window.clearTimeout(o)},[Y]);let xo=(0,t.useCallback)((e,o=!0)=>{e&&(zt(e,o),ce(e.id))},[zt]),qe=(0,t.useCallback)(e=>{let o=se.current;if(!o||!r.current)return;let l=Number(e);if(!Number.isFinite(l))return;let c=Number(C.current)||0,F=Number.isFinite(o.duration)&&o.duration>0?o.duration:c,V=Math.max(0,F>0?Math.min(l,F):l);try{o.currentTime=V}catch{fe.current=V;return}T(V),kt(r.current.id,V,F||c,!0)},[kt]),Jn=(0,t.useCallback)(e=>{let o=a.find(l=>l.id===e.episodeId);if(o){if(r.current?.id===e.episodeId){qe(e.start),ce(o.id);return}fe.current=e.start,xo(o,!1)}},[a,xo,qe]),gn=(0,t.useCallback)(e=>{let o=co.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),bo=(0,t.useCallback)(e=>{let o=gn(e),l=Number.isFinite(C.current)&&C.current>0?C.current:Number.isFinite(se.current?.duration)?se.current.duration:0;o==null||!l||qe(o*l)},[gn,qe]),Vn=(0,t.useCallback)(e=>{e.preventDefault(),yt.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}bo(e)},[bo]),Yn=(0,t.useCallback)(e=>{yt.current&&bo(e)},[bo]),vn=(0,t.useCallback)(e=>{yt.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),_n=(0,t.useCallback)(e=>{let o=se.current;if(!o)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),qe((o.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),qe((o.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),qe(0)),e.key==="End"&&(e.preventDefault(),qe(Number.isFinite(o.duration)?o.duration:0))},[qe]),Rt=(0,t.useCallback)(e=>{let o=se.current;if(!o||!r.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||C.current||0)-1));o.currentTime=l,T(l)},[]),jo=(0,t.useCallback)(e=>{if(!Ke.length)return;let l=((r.current?Ke.findIndex(c=>c.id===r.current.id):-1)+e+Ke.length)%Ke.length;zt(Ke[l],!0)},[Ke,zt]),Zn=(0,t.useCallback)(e=>{let o=se.current;o&&(o.playbackRate=e),ct({rate:e}),G(!1)},[ct]);(0,t.useEffect)(()=>{if(!H)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||G(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[H]),(0,t.useEffect)(()=>{if(!Z)return;let e=()=>{let l=Math.max(0,Math.round((Z-Date.now())/1e3));if(ke(l),l<=0){let c=se.current;c&&!c.paused&&c.pause(),R(0),L(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Z,k]),(0,t.useEffect)(()=>{if(!ee)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||Ne(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[ee]);let Lo=(0,t.useCallback)(e=>{if(Ne(!1),e==="off"){R(0),L(0),ke(0);return}if(e==="end"){R(0),L(-1),ke(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}L(e),R(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),wo=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),l=se.current;l&&(l.volume=o),ct({volume:o})},[ct]),Gn=(0,t.useCallback)(()=>{let e=se.current,o=ve.current.volume>0?0:.9;e&&(e.volume=o),ct({volume:o})},[ct]),Qn=()=>{let e=se.current;if(!e||!r.current)return;let o=performance.now();o-(Dt.current||0)<400||(Dt.current=o,T(e.currentTime),kt(r.current.id,e.currentTime,e.duration||C.current))},Rn=()=>{let e=se.current,o=r.current;if(!e||!o)return;let l=Number.isFinite(e.duration)?e.duration:o.duration||0;Oe(l);let c=fe.current;fe.current=0,c>0&&c<l-1&&(e.currentTime=c,T(c))},er=()=>{let e=se.current;if(r.current&&kt(r.current.id,e?.duration||C.current||0,e?.duration||C.current||0,!0),h===-1){L(0),R(0),ke(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}jo(1)},tr=async e=>{await ie(`${M}/folders`,"POST",{path:e}),await Fe(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},or=async()=>{let e=await fetch(`${M}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},nr=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),ao||oe(!0))},rr=e=>{e.currentTarget.contains(e.relatedTarget)||oe(!1)},ar=async e=>{e.preventDefault(),oe(!1);let o=e.dataTransfer,l=[...o?.files||[]],c=l.map(re=>re.path).filter(re=>typeof re=="string"&&re),F=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(re=>re.trim()).filter(re=>re.startsWith("file://")).map(re=>decodeURIComponent(re.replace(/^file:\/\//,""))),V=[...new Set([...c,...F])];if(V.length){try{let re=await ie(`${M}/import/paths`,"POST",{paths:V});await Fe(),k(re.added?`\u5DF2\u6DFB\u52A0 ${re.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(re){Ue(re.message)}return}let $t=l.filter(re=>re.size>0);if(!$t.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Ct=`drop-${Date.now()}`,yo="",Uo=0;for(let re of $t)try{let fn=await fetch(`${M}/import/upload?name=${encodeURIComponent(re.name)}&batch=${Ct}`,{method:"POST",body:re}),ir=await fn.json();fn.ok&&(yo=ir.folder||yo,Uo+=1)}catch{}if(yo)try{await ie(`${M}/folders`,"POST",{path:yo})}catch{}await Fe(),k(Uo?`\u5DF2\u5BFC\u5165 ${Uo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},sr=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await ie(`${M}/folders`,"DELETE",{path:e}),w(o=>o===e?"":o),await Fe(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Ue(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),jt()):o.key==="ArrowRight"?(o.preventDefault(),Rt(15)):o.key==="ArrowLeft"?(o.preventDefault(),Rt(-15)):o.key==="ArrowUp"?(o.preventDefault(),wo(ve.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),wo(ve.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[jt,Rt,wo]);let Oo=e=>{let o=g[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},Bo=e=>{let o=g[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${no?"nav-collapsed":""}`,onDragOver:nr,onDragLeave:rr,onDrop:ar},ao?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,no?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Ro},t.default.createElement(te,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(te,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Ro},t.default.createElement(te,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",a.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Ao.length],["finished","\u5DF2\u64AD\u5B8C",a.filter(Oo).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,l])=>t.default.createElement("button",{key:e,className:`nav-item ${N===e&&!E?"active":""}`,onClick:()=>{w(""),O(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>We(!0)},t.default.createElement(te,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:E===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{O("all"),Pe("all"),ae(""),w(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),O("all"),Pe("all"),ae(""),w(l=>l===e?"":e))}},t.default.createElement(te,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},zo(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),sr(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,qn),t.default.createElement("p",{className:"subline"},Wn)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${Pt?"is-on":""}`,onClick:()=>io(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(te,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",mn.length?` ${mn.length}`:"")),t.default.createElement("button",{className:`tool-btn ${xt?"is-on":""}`,onClick:()=>{bt(e=>!e),et([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(te,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(te,{name:"search",size:16}),t.default.createElement("input",{value:Y,onChange:e=>ae(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:de,onChange:e=>y(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),xt?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Ee.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>et(ot.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(it,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!Nt.length&&!Ee.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Ae,{hint:`${Nt.length} \u96C6`,disabled:!Nt.length,onSelect:()=>{e(),vo(Nt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(Ae,{hint:`${Ee.length} \u96C6`,disabled:!Ee.length,onSelect:()=>{e(),vo(Ee)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!Ee.length,onClick:()=>cn(Ee)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{et([]),bt(!1)}},"\u53D6\u6D88")):null,Xe?t.default.createElement("div",{className:"banner error",onClick:()=>Ue("")},Xe," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,_?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>ce(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},_.artist,_.album?` \xB7 ${_.album}`:"")),t.default.createElement("div",{className:"episode-view",style:oo?{"--episode-left-w":`${oo}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:Zo},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:Dn,disabled:Xt,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(Lt,{item:_,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},Xt?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:Wt,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let o=e.target.files?.[0];e.target.value="",En(o)}})),t.default.createElement("h2",{className:"episode-title"},_.title),t.default.createElement("p",{className:"episode-sub"},_.artist,_.album?` \xB7 ${_.album}`:""),t.default.createElement("p",{className:"episode-path",title:_.file},_.location||_.file),t.default.createElement("p",{className:"episode-stats"},Ho(_.duration)," \xB7 ",Fo(_.mtime)," \xB7 \u5DF2\u542C ",Math.round(Bo(_)),"%"),_.shownotes?t.default.createElement("div",{className:`episode-notes ${B?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>q(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",B?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},_.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:jt},we&&I?.id===_.id?"\u6682\u505C":"\u64AD\u653E"),J==="queued"||J==="running"?t.default.createElement("button",{className:"btn ghost",onClick:Eo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:Qt},_.source==="xyz"?x?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":x?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(it,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,_.source==="xyz"?t.default.createElement(Ae,{onSelect:()=>{e(),Un()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,_.hasCover?t.default.createElement(Ae,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),In()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(Ae,{danger:!0,onSelect:()=>{e(),cn([_.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:Sn,onPointerMove:Pn,onPointerUp:Qo,onPointerCancel:Qo,onDoubleClick:Tn,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement($o,{inline:!0,transcript:x,status:J,progress:Re?.progress,stage:Re?.stage,chunks:Re?.chunks,queued:Re?.queued,elapsed:Jt,editingId:pt,draft:wt,onDraftChange:Yt,onEditLine:en,onSaveLine:tn,onCancelEdit:()=>dt(null),onSplitLine:on,onMergeLine:nn,onValidate:an,onResegment:rn,issues:_t,onCancel:Eo,error:me,position:X,fontSize:He,onFontSize:Do,width:Kt.width,height:Kt.height,onResize:_o,onSeek:qe,onClose:()=>ce(null),onStart:Qt,target:ge,job:Je,onChangeTarget:dn,onTranslate:sn,onRetranslate:ln,onRetranslateLine:pn,onOpenSettings:()=>St(!0)})))):N==="xyz"?t.default.createElement(Xo,{onPlay:Xn,currentId:I?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${ze===e?"is-on":""}`,onClick:()=>Pe(e)},o))),N==="all"&&!Y&&Ao.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},Ao.map(e=>{let o=Bo(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${I?.id===e.id?"is-current":""}`,onClick:()=>xo(e,!0)},t.default.createElement(Lt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,Y.trim().length>=2&&pe.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},pe.length)),pe.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Jn(e)},t.default.createElement("span",{className:"hit-time"},Le(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,E?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},At.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(te,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===At.length-1?"is-current":""}`,onClick:()=>Se(e.rel),disabled:o===At.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Be&&E&&It.length>0&&!Y?t.default.createElement("div",{className:"folder-rows"},It.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Se(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(te,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Be?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ot.length===0&&!(E&&It.length>0&&!Y)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,a.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},a.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":E?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${It.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),a.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>We(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,a.length>0&&E?t.default.createElement("button",{className:"btn",onClick:()=>w("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},ot.map((e,o)=>{let l=Bo(e),c=I?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${c?"is-current":""} ${Oo(e)?"is-finished":""} ${xt&&Ee.includes(e.id)?"is-selected":""}`,onClick:()=>xt?Bn(e.id):xo(e,!0)},t.default.createElement("span",{className:"col-index row-index"},xt?Ee.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(te,{name:"check",size:14})):null:c&&we?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Lt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Fo(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Ho(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:F=>{F.stopPropagation(),Hn(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},Oo(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(te,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),ht&&I&&!_?t.default.createElement($o,{transcript:x,status:J,progress:Re?.progress,stage:Re?.stage,chunks:Re?.chunks,queued:Re?.queued,elapsed:Jt,editingId:pt,draft:wt,onDraftChange:Yt,onEditLine:en,onSaveLine:tn,onCancelEdit:()=>dt(null),onSplitLine:on,onMergeLine:nn,onValidate:an,onResegment:rn,issues:_t,onCancel:Eo,error:me,position:X,fontSize:He,onFontSize:Do,width:Kt.width,height:Kt.height,onResize:_o,onSeek:qe,onClose:()=>lt(!1),onStart:Qt,target:ge,job:Je,onChangeTarget:dn,onTranslate:sn,onRetranslate:ln,onRetranslateLine:pn,onOpenSettings:()=>St(!0)}):null,Pt?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>io(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Tt.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Tt.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},zn(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Io(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Io(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Io(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!Nt.length,onClick:()=>vo(Nt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Nt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Ee.length,onClick:()=>vo(Ee)},"\u8F6C\u5199\u5DF2\u9009 ",Ee.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:co,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ue||0),"aria-valuenow":Math.round(X||0),"aria-valuetext":`${Le(X)} / ${Le(ue)}`,onPointerDown:Vn,onPointerMove:Yn,onPointerUp:vn,onPointerCancel:vn,onKeyDown:_n},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ue?Math.min(100,Math.max(0,X/ue*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ue?Math.min(100,Math.max(0,X/ue*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},I?t.default.createElement("button",{className:"now-open",onClick:()=>ce(I.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Lt,{item:I,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:I.title},I.title),t.default.createElement("div",{className:"now-artist"},I.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>jo(-1)},t.default.createElement(te,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Rt(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:jt,disabled:!I&&ot.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(te,{name:we?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Rt(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>jo(1)},t.default.createElement(te,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(it,{className:`player-subs ${ht||st?"is-active":""}`,buttonClassName:`subs-btn ${ht||st?"active":""}`,placement:"up",disabled:!I,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(te,{name:"wave",size:15}),t.default.createElement("span",null,x?"\u5B57\u5E55":J==="queued"||J==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Ae,{checked:ht,hint:x?`${x.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),On()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(Ae,{checked:st,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),An()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Le(X)," / ",Le(ue)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>G(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":H},S.rate,"\xD7"),H?t.default.createElement("span",{className:"rate-menu",role:"menu"},hr.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===S.rate,className:e===S.rate?"is-on":"",onClick:()=>Zn(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Z?"active":""}`,onClick:()=>Ne(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":ee},t.default.createElement(te,{name:"moon",size:14}),Z?t.default.createElement("span",{className:"sleep-left"},Le(je)):null),ee?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Z&&h!==-1,className:!Z&&h!==-1?"is-on":"",onClick:()=>Lo("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":h===e,className:h===e?"is-on":"",onClick:()=>Lo(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>Lo("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Gn,title:"\u9759\u97F3"},t.default.createElement(te,{name:S.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:S.volume,onChange:e=>wo(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),Ze?t.default.createElement(br,{onClose:()=>We(!1),onSubmit:tr,onPick:or}):null,To?t.default.createElement(wr,{config:W,onClose:()=>St(!1),onSave:async e=>{let o=await ie(`${M}/translate/settings`,"PUT",e);Vt(o),St(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ge?t.default.createElement("div",{className:"toast"},Ge):null,st?t.default.createElement(Wo,{line:Gt,speakerLabel:Ln,target:ge,status:J,fontSize:He,onFontSize:Do,x:gt.x,y:gt.y,width:Ht.width,height:Ht.height,onMove:Cn,onResize:Mn,onClose:jn,onSeek:qe}):null,t.default.createElement("audio",{ref:se,preload:"metadata",onPlay:()=>Te(!0),onPause:()=>{Te(!1);let e=se.current;r.current&&e&&e.currentTime>0&&!e.ended&&kt(r.current.id,e.currentTime,e.duration||C.current,!0)},onTimeUpdate:Qn,onLoadedMetadata:Rn,onEnded:er,onError:()=>{Te(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Co=require("react");function yr(a){let i=String(a||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(g=>Number.parseFloat(g));if(s.length<3||s.length>3&&s[3]===0)return null;let u=g=>{let v=g/255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};return .2126*u(s[0])+.7152*u(s[1])+.0722*u(s[2])}function kr(){for(let a of[document.body,document.documentElement]){if(!a)continue;let i=getComputedStyle(a).backgroundColor,s=yr(i);if(s!==null)return s}return null}function $n(){let a=kr();if(a!==null)return a>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function Mo(){let[a,i]=(0,Co.useState)($n);return(0,Co.useEffect)(()=>{let s=()=>i($n());s();let u=new MutationObserver(s);u.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&u.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let g=window.matchMedia("(prefers-color-scheme: light)");return g.addEventListener?.("change",s),()=>{u.disconnect(),g.removeEventListener?.("change",s)}},[]),a}var n=nt(require("react"),1);var So="0.11.56";var U="/podwave/api";async function Me(a){let i=await fetch(a),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function le(a,i,s){let u=await fetch(a,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function Nr(a){let i=Math.max(0,Math.round(Number(a)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function _e(a){let i=Number(a)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function zr(a){if(!a)return"";let i=new Date(a),s=u=>String(u).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function $r(a){let i=a?.projectDir;return i?a?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function Cr(a){return a?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function Mr(a){return a?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":a?.projectDir&&a.dir===a.projectDir?a.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":a?.legacyDir&&a.dir===a.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Yo(){let a=Mo(),[i,s]=(0,n.useState)([]),[u,g]=(0,n.useState)(""),[v,b]=(0,n.useState)(0),[P,S]=(0,n.useState)(!1),[j,H]=(0,n.useState)(!1),[G,B]=(0,n.useState)(!1),[q,h]=(0,n.useState)([]),[L,Z]=(0,n.useState)(null),[R,je]=(0,n.useState)(""),[ke,ee]=(0,n.useState)(!1),[Ne,Y]=(0,n.useState)({asrModel:"",translateModel:""}),[ae,pe]=(0,n.useState)(null),[Q,de]=(0,n.useState)(null),[y,N]=(0,n.useState)({showSidebarPanel:!0}),[O,E]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[w,be]=(0,n.useState)(null),[Se,ze]=(0,n.useState)(null),[Pe,ne]=(0,n.useState)(null),[ce,I]=(0,n.useState)(!1),[$e,we]=(0,n.useState)("auto"),[Te,X]=(0,n.useState)(!1),[T,ue]=(0,n.useState)(null),[Oe,Be]=(0,n.useState)(!1),[De,Ze]=(0,n.useState)(""),[We,Xe]=(0,n.useState)(15),[Ue,Ge]=(0,n.useState)(!0),[f,x]=(0,n.useState)("api"),[$,J]=(0,n.useState)(!0),[p,D]=(0,n.useState)("api"),[at,Bt]=(0,n.useState)("https://api.deepseek.com"),[He,Mt]=(0,n.useState)("deepseek-chat"),[st,mt]=(0,n.useState)(""),[gt,Ut]=(0,n.useState)([]),[Ht,Ft]=(0,n.useState)(!1),[Kt,vt]=(0,n.useState)(""),[oo,qt]=(0,n.useState)(!1),[Wt,Xt]=(0,n.useState)(""),[ft,Jt]=(0,n.useState)(""),[Ce,me]=(0,n.useState)(""),[Qe,ht]=(0,n.useState)(""),[lt,W]=(0,n.useState)(""),Vt=(0,n.useCallback)(async()=>{try{let[r,z,C,ve,fe,Dt,Zt,uo]=await Promise.all([Me(`${U}/history`),Me(`${U}/models`),Me(`${U}/translate/settings`),Me(`${U}/ui-settings`),Me(`${U}/transcribe/settings`),Me(`${U}/import/settings`),Me(`${U}/setup`),Me(`${U}/update`)]);be(Zt),ue(uo),Zt?.job?.status==="running"&&X(!0),E({mode:Dt.mode||"copy",orphans:Dt.orphans||0,orphanBytes:Dt.orphanBytes||0}),N({showSidebarPanel:ve?.showSidebarPanel!==!1}),Ze((fe.hotwords||[]).join(" ")),Xe(fe.chunkMinutes||15),Ge(fe.diarize!==!1),x(fe.provider||"api"),J(fe.realtime!==!1),s(r.items||[]),g(r.dir||""),b(Number(r.bytes)||0),S(ve?.historyOpen===!0),H(ve?.envOpen===!0),B(ve?.modelsOpen===!0),h(z.models||[]),Z(z.storage||null),je(z.storage?.dir||""),Y(z.config||{asrModel:"",translateModel:""}),pe(z.transcribe||null),Xt(z.config?.asrModel||""),Jt(z.config?.translateModel||""),de(C),D(C.provider||"api"),Bt(C.apiBase||"https://api.deepseek.com"),Mt(C.apiModel||"deepseek-chat"),le(`${U}/translate/models`,"POST",{base:C.apiBase,key:void 0}).then(mo=>{let yt=Array.isArray(mo?.models)?mo.models:[];Ut(yt),vt(yt.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${yt.length} \u4E2A\u6A21\u578B`:"")}).catch(()=>{}),mt(""),W("")}catch(r){W(r.message)}},[]);(0,n.useEffect)(()=>{Vt()},[Vt]),(0,n.useEffect)(()=>{let r=!1;return Me(`${U}/setup/plan?source=${$e}&mode=${f==="local"?"local":"basic"}`).then(z=>{r||ze(z)}).catch(()=>{}),()=>{r=!0}},[$e,f,w?.job?.status]),(0,n.useEffect)(()=>{if(!Te&&w?.job?.status!=="running")return;let r=window.setInterval(async()=>{try{let z=await Me(`${U}/setup`);be(z),z.job?.status!=="running"&&X(!1)}catch{}},2500);return()=>window.clearInterval(r)},[Te,w?.job?.status]);let ge=async()=>{W(""),X(!0);try{await le(`${U}/setup/install`,"POST",{source:$e});let r=await Me(`${U}/setup`);be(r),oe("\u5F00\u59CB\u5B89\u88C5")}catch(r){X(!1),W(r.message)}},Po=()=>{let r=!P;S(r),le(`${U}/ui-settings`,"PUT",{historyOpen:r}).catch(()=>{})},Je=(r,z,C)=>{let ve=!z;C(ve),le(`${U}/ui-settings`,"PUT",{[r]:ve}).catch(()=>{})},Ve=Array.isArray(w?.missing)?w.missing.length:0,To=w?Ve?`${Ve} \u9879\u5F85\u5B89\u88C5`:"\u5168\u90E8\u5C31\u7EEA":"\u6B63\u5728\u626B\u63CF\u2026",St=L?`${L.items?.length||0} \u4E2A \xB7 ${_e(L.totalBytes)}`:"",no=async()=>{try{await le(`${U}/history/open`,"POST",{})}catch(r){W(r.message)}},ro=async()=>{W(""),X(!0);try{await le(`${U}/setup/install`,"POST",{source:$e,mode:"local"});let r=await Me(`${U}/setup`);be(r),oe("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(r){X(!1),W(r.message)}},ao=async()=>{try{await le(`${U}/setup/cancel`,"POST",{}),oe("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(r){W(r.message)}},oe=r=>{ht(r),window.setTimeout(()=>ht(""),2400)},Re=async()=>{I(!0);try{let r=await Me(`${U}/setup/verify`);ne(r),oe(r.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(r){oe(r.message||"\u68C0\u67E5\u5931\u8D25")}finally{I(!1)}},so=async()=>{try{let r=await Me(`${U}/setup/diagnose`),z=JSON.stringify(r,null,2);try{await navigator.clipboard.writeText(z)}catch{let C=document.createElement("textarea");C.value=z,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}oe("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(r){oe(r.message||"\u590D\u5236\u5931\u8D25")}},Pt=async({silent:r=!1}={})=>{r||Ft(!0),r||vt("");try{let z=await le(`${U}/translate/models`,"POST",{base:at,key:st.trim()||void 0}),C=Array.isArray(z?.models)?z.models:[];return Ut(C),r||vt(C.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${C.length} \u4E2A\u6A21\u578B`:"\u8FD9\u4E2A\u5730\u5740\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u6A21\u578B"),C}catch(z){return r||vt(z.message||"\u5217\u8868\u83B7\u53D6\u5931\u8D25"),[]}finally{r||Ft(!1)}},io=async r=>{let z=p;D(r);try{let C=await le(`${U}/translate/settings`,"PUT",{provider:r});de(C)}catch(C){D(z),W(C.message)}},Tt=async()=>{me("api"),W("");try{let r={apiBase:at,apiModel:He};p==="api"&&(r.provider="api"),st.trim()&&(r.apiKey=st.trim());let z=await le(`${U}/translate/settings`,"PUT",r);de(z),mt(""),oe("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){W(r.message)}finally{me("")}},lo=async()=>{me("models"),W("");try{let r=await le(`${U}/models`,"PUT",{asrModel:Wt,translateModel:ft});Y(r.config),h(r.models||[]),pe(r.transcribe||null),oe("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(r){W(r.message)}finally{me("")}},xt=async()=>{try{await le(`${U}/models/open`,"POST",{})}catch(r){W(r.message)}},bt=async(r,z=!0)=>{ee(!0),W("");try{let C=await le(`${U}/models/dir`,"POST",{dir:r,move:z});Z(C.storage||null),h(C.models||[]),je(C.storage?.dir||"");let ve=(C.moved||[]).length,fe=(C.skipped||[]).length;oe(ve||fe?`\u5DF2\u8FC1\u79FB ${ve} \u4E2A\u6A21\u578B${fe?`\uFF0C${fe} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(C){W(C.message)}finally{ee(!1)}},Ee=async r=>{me(`model:${r}`),W("");try{let z=await le(`${U}/models/remove`,"POST",{name:r});Z(z||null),h(z.models||[]),oe(`\u5DF2\u5220\u9664 ${r}`)}catch(z){W(z.message)}finally{me("")}},et=q.length?q:[{name:Ne.asrModel||"qwen3-asr-1.7b-8bit",ready:ae?.modelReady},{name:Ne.translateModel||"hy-mt2-1.8b-4bit",ready:Q?.localReady}],pt=async()=>{Be(!0);try{ue(await Me(`${U}/update?force=1`))}catch{oe("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Be(!1)}},dt=et.filter(r=>/asr|sensevoice|sherpa/i.test(r.name)&&r.ready!==!1),wt=et.filter(r=>!/asr|sensevoice|sherpa|diarization/i.test(r.name)&&r.ready!==!1),Yt=async()=>{me("ui"),W("");try{let r=await le(`${U}/ui-settings`,"PUT",{showSidebarPanel:y.showSidebarPanel});N({showSidebarPanel:r.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:r})),oe("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){W(r.message)}finally{me("")}},_t=async r=>{me("import"),W("");try{let z=await le(`${U}/import/settings`,"PUT",{mode:r});E(C=>({...C,mode:z.mode})),oe("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(z){W(z.message)}finally{me("")}},po=async()=>{if(O.orphans&&window.confirm(`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){me("imports"),W("");try{let r=await le(`${U}/imports/orphans`,"DELETE",{});E(z=>({...z,orphans:0,orphanBytes:0})),oe(`\u5DF2\u6E05\u7406 ${r.removed||0} \u4E2A\u6279\u6B21`)}catch(r){W(r.message)}finally{me("")}}},se=async()=>{me("transcribe"),W("");try{let r=De.split(/[\s,，、]+/).map(C=>C.trim()).filter(Boolean).slice(0,500),z=await le(`${U}/transcribe/settings`,"PUT",{provider:f,hotwords:r,chunkMinutes:Math.min(60,Math.max(1,Number(We)||15)),diarize:Ue,realtime:$});Ze((z.hotwords||[]).join(" ")),Xe(z.chunkMinutes||15),Ge(z.diarize!==!1),x(z.provider||"api"),z.runtime&&pe(z.runtime),oe("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(r){W(r.message)}finally{me("")}},tt=et,co=!!(So&&w?.version&&w.version!==So);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":a,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,No),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),co?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",So,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",w.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,lt?n.default.createElement("div",{className:"banner error",onClick:()=>W("")},lt):null,Qe?n.default.createElement("div",{className:"settings-message"},Qe):null,n.default.createElement("section",{className:`settings-card collapsible ${j?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Je("envOpen",j,H),"aria-expanded":j,title:j?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},To),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),j?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),w?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},w.platform?.osLabel," \xB7 ",w.platform?.arch," \xB7 ",w.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",w.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",w.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:so},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:ce,onClick:Re},ce?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),Pe?n.default.createElement("ul",{className:"setup-components"},Pe.checks.map(r=>n.default.createElement("li",{key:r.id,className:r.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},r.label),n.default.createElement("span",{className:"setup-component-detail"},r.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(w.components||[]).map(r=>n.default.createElement("li",{key:r.id,className:r.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},r.label),n.default.createElement("span",{className:"setup-component-detail"},r.detail),!r.ready&&r.bytes?n.default.createElement("span",{className:"setup-component-size"},_e(r.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:$e,onChange:r=>we(r.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),Se?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",_e(Se.totalBytes)," \xB7 ",Se.items.length," \u9879"),n.default.createElement("ul",null,Se.items.map(r=>n.default.createElement("li",{key:r.id},n.default.createElement("span",null,r.label),n.default.createElement("span",null,r.bytes?_e(r.bytes):r.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:Te||w.job?.status==="running",onClick:ge},Te||w.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),w.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:ao},"\u53D6\u6D88"):null),w.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,w.job.stage||w.job.status),n.default.createElement("span",null,w.job.progress||0,"% \xB7 ",_e(w.job.bytes)," / ",_e(w.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${w.job.progress||0}%`}})),w.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",w.job.error):null,w.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},w.job.warning):null,w.job.status==="done"&&(!w.job.summary||!w.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,w.job.status==="done"&&w.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",w.job.modelsDir):null,Array.isArray(w.job.summary)&&w.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},w.job.summary.map(r=>n.default.createElement("li",{key:r.id},r.label," \xB7 ",r.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":_e(r.bytes),r.source?` \xB7 ${r.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")):null),n.default.createElement("section",{className:`settings-card history-card ${P?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Po(),"aria-expanded":P,title:P?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",v?` \xB7 ${_e(v)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),P?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(r=>n.default.createElement("li",{key:r.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},r.title),n.default.createElement("span",{className:"history-meta"},r.artist?`${r.artist} \xB7 `:"",r.duration?`${Nr(r.duration)} \xB7 `:"",r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines," \u884C",r.translations?.length?` \xB7 \u5DF2\u7FFB ${r.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},zr(r.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:no,disabled:!u},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},u?`${u}${v?` \xB7 ${_e(v)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:f,onChange:r=>x(r.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),f==="api"?n.default.createElement("p",{className:"settings-status"},ae?.api?.hasKey?"\u7528\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u91CC\u90A3\u628A API key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 API key \u2014\u2014 \u53BB\u4E0B\u9762\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u5C31\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},ae?.installed&&ae?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${ae.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:De,onChange:r=>Ze(r.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:We,onChange:r=>Xe(r.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:$,onChange:r=>J(r.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Ue,onChange:r=>Ge(r.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:se,disabled:Ce==="transcribe"},Ce==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),f==="local"&&!(ae?.installed&&ae?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:ro,disabled:Te},Te?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="copy",onChange:()=>_t("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="reference",onChange:()=>_t("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:po,disabled:Ce==="imports"||!O.orphans},O.orphans?`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(O.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7FFB\u8BD1"),n.default.createElement("p",{className:"settings-hint"},"\u9ED8\u8BA4\u7528 DSH \u91CC\u6B63\u5728\u7528\u7684\u90A3\u4E2A\u6A21\u578B\u7FFB\u8BD1\uFF0C\u4E0D\u7528\u5728\u8FD9\u91CC\u518D\u586B\u4E00\u904D\u5BC6\u94A5\u548C\u6A21\u578B\u540D\u3002\u60F3\u79BB\u7EBF\u5C31\u5207\u6210\u672C\u5730\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u7528"),n.default.createElement("select",{value:p,onChange:r=>io(r.target.value)},n.default.createElement("option",{value:"dsh"},"DSH \u5F53\u524D\u6A21\u578B"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u79BB\u7EBF\uFF09"),n.default.createElement("option",{value:"api"},"\u81EA\u5B9A\u4E49 API"))),p==="dsh"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},Q?.dshReady?Q.dshLabel:"DSH \u91CC\u8FD8\u6CA1\u6709\u9009\u6A21\u578B")),p==="local"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u672C\u5730\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},Q?.localReady?`${Q.localModel}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u8FD8\u6CA1\u4E0B\u8F7D\u672C\u5730\u7FFB\u8BD1\u6A21\u578B")),(p==="api"||f==="api")&&n.default.createElement(n.default.Fragment,null,n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:at,onChange:r=>Bt(r.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),oo||!gt.length?n.default.createElement("input",{value:He,onChange:r=>Mt(r.target.value),placeholder:"deepseek-chat"}):n.default.createElement("select",{value:gt.includes(He)?He:He?"__saved":"",onChange:r=>Mt(r.target.value)},!gt.includes(He)&&He&&n.default.createElement("option",{value:"__saved"},He,"\uFF08\u5F53\u524D\uFF0C\u5217\u8868\u91CC\u6CA1\u6709\uFF09"),gt.map(r=>n.default.createElement("option",{key:r,value:r},r))),n.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:()=>Pt(),disabled:Ht},Ht?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u6A21\u578B\u5217\u8868")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:st,onChange:r=>mt(r.target.value),placeholder:Q?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${Q.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."})))),n.default.createElement("div",{className:"settings-actions"},(p==="api"||f==="api")&&n.default.createElement("button",{className:"settings-btn",onClick:Tt,disabled:Ce==="api"},Ce==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},p==="dsh"?"\u8DDF\u968F DSH \u7684\u6A21\u578B\u9009\u62E9\uFF0C\u6362\u6A21\u578B\u5728 DSH \u8BBE\u7F6E\u91CC\u6539":p==="local"?"\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1":"\u8D70\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5BC6\u94A5"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:y.showSidebarPanel,onChange:r=>N({showSidebarPanel:r.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Yt,disabled:Ce==="ui"},Ce==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:`settings-card collapsible ${G?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Je("modelsOpen",G,B),"aria-expanded":G,title:G?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},St),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),G?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},$r(L),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),L?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:L.dir},L.dir),n.default.createElement("span",{className:"model-path-size"},Mr(L)," \xB7 \u5171 ",_e(L.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:R,onChange:r=>je(r.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:ke||R.trim()===L.dir,onClick:()=>bt(R,!0)},ke?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:xt},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),L.projectDir&&L.dir!==L.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:ke,onClick:()=>bt(L.projectDir,!0)},Cr(L)):null,L.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:ke,onClick:()=>bt("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),q.length?n.default.createElement("ul",{className:"model-list"},q.map(r=>n.default.createElement("li",{key:r.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},r.name),n.default.createElement("span",{className:"model-meta"},r.kindLabel," \xB7 ",_e(r.bytes),r.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",r.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:r.inUse||Ce===`model:${r.name}`,title:r.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${r.name}`,onClick:()=>Ee(r.name)},Ce===`model:${r.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Wt,onChange:r=>Xt(r.target.value)},(dt.length?dt:tt).map(r=>n.default.createElement("option",{key:r.name,value:r.name},r.name,r.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},ae?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:ft,onChange:r=>Jt(r.target.value)},(wt.length?wt:tt).map(r=>n.default.createElement("option",{key:r.name,value:r.name},r.name,r.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},Q?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:lo,disabled:Ce==="models"},Ce==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},T?.current?`v${T.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},T?.latest?`v${T.latest}`:T?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},T?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":T?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${T.error}\uFF09\u3002`:T?.latest?T?.current&&T?.latest&&T.current!==T.latest&&T.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:pt,disabled:Oe},Oe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),T?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(T.checkedAt).toLocaleString()):null))))}function Sr({size:a=16}){return rt.default.createElement("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},rt.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),rt.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),rt.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),rt.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),rt.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Pr(){let a=Mo();return rt.default.createElement("div",{className:"podwave-root","data-pw-theme":a},rt.default.createElement("style",null,No),rt.default.createElement(Vo,null))}function Tr(a){a.slots.inject("main",()=>a.slots.register({name:"main",key:"podwave"},Pr)),a.slots.inject("settings.section",()=>a.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Yo));let i=null,s="podwave-hide-nav",u=v=>{if(typeof document>"u")return;let b=document.getElementById(s);v&&!b?(b=document.createElement("style"),b.id=s,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!v&&b&&b.remove()},g=v=>{if(u(!v),v&&!i)i=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Sr);else if(!v&&i){let b=i;i=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(v=>v.ok?v.json():null).then(v=>g(v?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",v=>{g(v?.detail?.showSidebarPanel!==!1)})}var Dr=["slots"];

return module.exports}})
