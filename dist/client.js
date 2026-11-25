window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Hr=Object.create;var Fo=Object.defineProperty;var Fr=Object.getOwnPropertyDescriptor;var _r=Object.getOwnPropertyNames;var Vr=Object.getPrototypeOf,Wr=Object.prototype.hasOwnProperty;var Kr=(r,i)=>{for(var s in i)Fo(r,s,{get:i[s],enumerable:!0})},Vn=(r,i,s,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of _r(i))!Wr.call(r,u)&&u!==s&&Fo(r,u,{get:()=>i[u],enumerable:!(p=Fr(i,u))||p.enumerable});return r};var Re=(r,i,s)=>(s=r!=null?Hr(Vr(r)):{},Vn(i||!r||!r.__esModule?Fo(s,"default",{value:r,enumerable:!0}):s,r)),qr=r=>Vn(Fo({},"__esModule",{value:!0}),r);var ga={};Kr(ga,{apply:()=>ua,inject:()=>ma});module.exports=qr(ga);var it=Re(require("react"),1);var _o=`
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
`;var t=Re(require("react"),1);var A=Re(require("react"),1);function re({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),A.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),A.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),A.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return A.default.createElement("svg",{...s},A.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),A.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),A.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),A.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return A.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},A.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),A.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),A.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),A.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),A.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));case"close":return A.default.createElement("svg",{...s},A.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));default:return null}}var pn=Re(require("react"),1);function Te(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),p=Math.floor(i%3600/60),u=i%60;return s>0?`${s}:${String(p).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${p}:${String(u).padStart(2,"0")}`}function sn(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function ln(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Wn(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Vo(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Yr="/podwave/api";function Gt({item:r,size:i=44,className:s=""}){let p={width:i,height:i};if(r&&r.hasCover){let u=r.coverAt?`?v=${r.coverAt}`:"";return pn.default.createElement("img",{className:`cover ${s}`,style:p,src:`${Yr}/episodes/${r.id}/cover${u}`,alt:"",loading:"lazy",draggable:!1})}return pn.default.createElement("div",{className:`cover cover-fallback ${s}`,style:p,"aria-hidden":!0},Wn(r&&r.title))}var h=Re(require("react"),1);var be=Re(require("react"),1);function ut({trigger:r,title:i,align:s="end",placement:p="down",className:u="",buttonClassName:g="",disabled:f=!1,children:N}){let[w,S]=(0,be.useState)(!1),U=(0,be.useRef)(null);(0,be.useEffect)(()=>{if(!w)return;let D=x=>{U.current?.contains(x.target)||S(!1)},z=x=>{x.key==="Escape"&&S(!1)};return document.addEventListener("pointerdown",D),document.addEventListener("keydown",z),()=>{document.removeEventListener("pointerdown",D),document.removeEventListener("keydown",z)}},[w]),(0,be.useEffect)(()=>{f&&w&&S(!1)},[f,w]);let H=["pop-panel",s==="start"?"is-start":"",p==="up"?"is-up":""].filter(Boolean).join(" ");return be.default.createElement("span",{className:`pop-wrap ${u}`,ref:U},be.default.createElement("button",{type:"button",className:g||"pop-btn",onClick:()=>S(D=>!D),title:i,disabled:f,"aria-haspopup":"menu","aria-expanded":w},r),w?be.default.createElement("span",{className:H,role:"menu"},N({close:()=>S(!1)})):null)}function je({children:r,hint:i,checked:s=!1,danger:p=!1,disabled:u=!1,onSelect:g}){let f=["pop-item",s?"is-on":"",p?"is-danger":""].filter(Boolean).join(" ");return be.default.createElement("button",{type:"button",className:f,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:u,onClick:g},be.default.createElement("span",null,r),i?be.default.createElement("span",{className:"pop-hint"},i):null)}function dn({children:r,hint:i,href:s,onSelect:p}){return be.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:p},be.default.createElement("span",null,r),i?be.default.createElement("span",{className:"pop-hint"},i):null)}var vo=Re(require("react"),1);function ho({value:r,onChange:i,compact:s=!1}){let p=Number.isFinite(Number(r))?Number(r):15;return vo.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},vo.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),vo.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:p,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:u=>i(Number(u.target.value))}),vo.default.createElement("span",{className:"sub-size-value"},p))}var Kn="/podwave/api";function Wo({transcript:r,status:i,progress:s,stage:p,chunks:u,queued:g,elapsed:f,error:N,position:w,onSeek:S,onClose:U,onStart:H,onCancel:D,target:z,job:x,onChangeTarget:F,onTranslate:R,onRetranslate:ae=null,onRetranslateLine:Ce=null,onOpenSettings:ve,inline:Q=!1,editingId:B=null,draft:_="",onDraftChange:ee,onEditLine:ue,onSaveLine:te,onCancelEdit:he,onSplitLine:C,onMergeLine:P,onValidate:V,onResegment:O,issues:$=[],fontSize:ke=15,onFontSize:De=null,width:Me=null,height:Ee=null,onResize:pe=null}){let fe=(0,h.useRef)(null),j=(0,h.useRef)(null),Se=(0,h.useRef)(null),Ne=(0,h.useRef)(null),[Ie,Z]=(0,h.useState)(!1),I=r?.lines?.findIndex(b=>w>=b.start&&w<b.end)??-1;(0,h.useEffect)(()=>{if(I<0||!fe.current)return;fe.current.querySelector(`[data-seg="${I}"]`)?.scrollIntoView({block:"nearest"})},[I]);let xe=b=>{let y=Ne.current;if(!y)return null;let T=b.clientX-y.startX,G=b.clientY-y.startY,c=Math.max(320,window.innerWidth-60),L=Math.max(220,window.innerHeight-(Q?160:140));return Q?{width:null,height:Math.round(Math.min(L,Math.max(240,y.height+G)))}:{width:Math.round(Math.min(c,Math.max(320,y.width-T))),height:Math.round(Math.min(L,Math.max(200,y.height-G)))}},He=b=>{if(b.button!==void 0&&b.button!==0)return;let y=Se.current;if(!y||!pe)return;b.preventDefault();let T=y.getBoundingClientRect();Ne.current={startX:b.clientX,startY:b.clientY,width:T.width,height:T.height},b.currentTarget.setPointerCapture?.(b.pointerId)},Fe=b=>{if(!Ne.current)return;let y=xe(b);y&&pe(y.width,y.height,!1)},Le=b=>{if(!Ne.current)return;let y=xe(b);Ne.current=null,b.currentTarget.releasePointerCapture?.(b.pointerId),y&&pe(y.width,y.height,!0)},ot=i==="queued"||i==="running",Xe=x?.status==="running"||x?.status==="queued",Ye=x?.missing??0,_e=Xe?`\u7FFB\u8BD1\u4E2D${x?.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""}`:x?.status==="partial"?"\u7EED\u7FFB":x?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",nt=async()=>{let y=(r?.lines||[]).map(T=>{let G=Te(T.start),c=z?T.translations?.[z]:"";return c?`${G} ${T.text}
${" ".repeat(G.length+1)}${c}`:`${G} ${T.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(y);else{let T=document.createElement("textarea");T.value=y,T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),document.body.removeChild(T)}Z(!0),setTimeout(()=>Z(!1),1600)}catch{Z(!1)}};return h.default.createElement("section",{ref:Se,className:`transcript-panel ${Q?"inline":""} ${Ee?"is-sized":""}`,style:{"--sub-size":`${ke}px`,width:!Q&&Me?`${Me}px`:void 0,height:Ee?`${Ee}px`:void 0,maxHeight:Ee?"none":void 0}},h.default.createElement("header",{className:"transcript-head"},h.default.createElement("h3",null,"\u5B57\u5E55"),r?h.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,h.default.createElement("div",{className:"transcript-actions"},h.default.createElement("select",{className:"tr-select",value:z,onChange:b=>F(b.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},h.default.createElement("option",{value:""},"\u5BF9\u7167"),h.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),h.default.createElement("option",{value:"en"},"English")),De?h.default.createElement(ut,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${ke}px`,align:"end"},()=>h.default.createElement("span",{className:"pop-fs"},h.default.createElement(ho,{value:ke,onChange:De}))):null,r&&z&&R?Xe?h.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},_e):Ye>0?h.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:R,title:`\u8FD8\u6709 ${Ye} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},_e):null:null,h.default.createElement(ut,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:b})=>h.default.createElement(h.default.Fragment,null,r?h.default.createElement(je,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{b(),V()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&O?h.default.createElement(je,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{b(),O()}},"\u6574\u7406\u65AD\u53E5"):null,r&&z&&ae?h.default.createElement(je,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{b(),ae()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,h.default.createElement(je,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{b(),ve()}},"\u8BBE\u7F6E"))),r?h.default.createElement(ut,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:b})=>h.default.createElement(h.default.Fragment,null,h.default.createElement(dn,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${Kn}/episodes/${r.id}/transcript/export?format=srt`,onSelect:b},"\u5B57\u5E55\u6587\u4EF6 .srt"),h.default.createElement(dn,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${Kn}/episodes/${r.id}/transcript/export?format=md`,onSelect:b},"\u6587\u7A3F .md"),h.default.createElement(je,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:nt},Ie?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,Q?null:h.default.createElement("button",{className:"transcript-close",onClick:U,title:"\u6536\u8D77"},"\xD7"))),h.default.createElement("div",{className:"transcript-body",ref:fe},r&&ot?h.default.createElement("div",{className:"tr-strip"},h.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":p==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min((u.done||0)+1,u.total)}/${u.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),D?h.default.createElement("button",{className:"seg-tool",onClick:D},"\u53D6\u6D88"):null):null,r&&$?.length?h.default.createElement("div",{className:"tr-issues"},$.slice(0,5).map(b=>h.default.createElement("div",{key:b},"\xB7 ",b)),$.length>5?h.default.createElement("div",null,"\u2026\u5171 ",$.length," \u6761"):null):null,x?.status==="running"||x?.status==="queued"?h.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",x.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""):null,x?.status==="error"?h.default.createElement("div",{className:"tr-running err"},x.error,"\u5F85\u7FFB ",x.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,x?.status==="partial"?h.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",x.translated??0,"/",x.total??0," \u884C\uFF0C\u8FD8\u7F3A ",x.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,x?.status==="none"&&z&&r&&(x.missing??0)>0?h.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",x.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,r?r.lines.map((b,y)=>h.default.createElement("div",{key:b.id,"data-seg":y,className:`seg-row ${y===I?"active":""} ${B===b.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Te(b.start)}`,onClick:()=>S(b.start),onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),S(b.start))}},h.default.createElement("span",{className:"seg-time"},Te(b.start)),B===b.id?h.default.createElement("span",{className:"seg-edit",onClick:T=>T.stopPropagation()},h.default.createElement("textarea",{ref:j,value:_,rows:Math.min(4,Math.max(2,Math.ceil((_.length||1)/40))),onChange:T=>ee(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&te(b.id),T.key==="Escape"&&he()}}),h.default.createElement("span",{className:"seg-edit-actions"},h.default.createElement("button",{className:"seg-tool",onClick:()=>te(b.id)},"\u4FDD\u5B58"),h.default.createElement("button",{className:"seg-tool",onClick:()=>C(b.id,j.current?.selectionStart??Math.floor(_.length/2))},"\u62C6\u5206"),z&&Ce?h.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>Ce(b)},"\u91CD\u7FFB"):null,h.default.createElement("button",{className:"seg-tool",onClick:he},"\u53D6\u6D88"))):h.default.createElement(h.default.Fragment,null,b.speaker!=null?h.default.createElement("span",{className:`seg-speaker spk-${b.speaker%5}`},r.speakers?.[b.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${b.speaker+1}`):null,h.default.createElement("span",{className:"seg-text"},b.text,b.translations?.[z]?h.default.createElement("span",{className:"seg-trans"},b.translations[z]):null),h.default.createElement("span",{className:"seg-tools"},h.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:T=>{T.stopPropagation(),ue(b)}},"\u270E"),y<r.lines.length-1?h.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:T=>{T.stopPropagation(),P(b.id)}},"\u21E3"):null)))):ot?h.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":p==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?h.default.createElement("span",{className:"tx-progress"},h.default.createElement("span",{style:{width:`${s.percent}%`}})):null,h.default.createElement("br",null),h.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),h.default.createElement("br",null),D?h.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:D},"\u53D6\u6D88\u8F6C\u5199"):null):N?h.default.createElement("div",{className:"transcript-status"},h.default.createElement("span",{className:"err"},N),h.default.createElement("br",null),h.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:H},"\u91CD\u8BD5")):h.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",h.default.createElement("br",null),h.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:H},"\u5F00\u59CB\u8F6C\u5199"))),pe?h.default.createElement(h.default.Fragment,null,Q?null:h.default.createElement(h.default.Fragment,null,h.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:He,onPointerMove:Fe,onPointerUp:Le,onPointerCancel:Le,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),h.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:He,onPointerMove:Fe,onPointerUp:Le,onPointerCancel:Le,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),h.default.createElement("span",{className:`transcript-resize ${Q?"is-inline":""}`,onPointerDown:He,onPointerMove:Fe,onPointerUp:Le,onPointerCancel:Le,onDoubleClick:()=>pe(null,null,!0),title:Q?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var J=Re(require("react"),1);function cn({line:r,target:i,fontSize:s,onFontSize:p,x:u,y:g,width:f,height:N,onMove:w,onResize:S,onClose:U,onSeek:H,speakerLabel:D,status:z}){let x=(0,J.useRef)(null),F=(0,J.useRef)(null),R=(0,J.useRef)(null),ae=(0,J.useCallback)((C,P)=>{let V=x.current,O=V?.offsetWidth||420,$=V?.offsetHeight||120,ke=Math.max(8,window.innerWidth-O-8),De=Math.max(8,window.innerHeight-$-8);return{x:Math.min(ke,Math.max(8,C)),y:Math.min(De,Math.max(8,P))}},[]),Ce=(0,J.useCallback)(C=>{if(C.button!==void 0&&C.button!==0)return;let P=x.current;if(!P)return;let V=P.getBoundingClientRect();F.current={dx:C.clientX-V.left,dy:C.clientY-V.top},C.currentTarget.setPointerCapture?.(C.pointerId)},[]),ve=(0,J.useCallback)(C=>{let P=F.current;if(!P)return;let V=ae(C.clientX-P.dx,C.clientY-P.dy);w(V.x,V.y,!1)},[ae,w]),Q=(0,J.useCallback)(C=>{let P=F.current;if(!P)return;F.current=null,C.currentTarget.releasePointerCapture?.(C.pointerId);let V=ae(C.clientX-P.dx,C.clientY-P.dy);w(V.x,V.y,!0)},[ae,w]),B=(0,J.useCallback)(C=>{if(C.button!==void 0&&C.button!==0)return;C.stopPropagation();let P=x.current;if(!P)return;let V=P.getBoundingClientRect();R.current={startX:C.clientX,startY:C.clientY,width:V.width,height:V.height},C.currentTarget.setPointerCapture?.(C.pointerId)},[]),_=(0,J.useCallback)(C=>{let P=R.current;if(!P)return null;let V=Math.max(240,window.innerWidth-(u==null?16:u+8)),O=Math.max(92,window.innerHeight-(g==null?16:g+8));return{width:Math.round(Math.min(V,Math.max(240,P.width+(C.clientX-P.startX)))),height:Math.round(Math.min(O,Math.max(92,P.height+(C.clientY-P.startY))))}},[u,g]),ee=(0,J.useCallback)(C=>{if(!R.current)return;C.stopPropagation();let P=_(C);P&&S(P.width,P.height,!1)},[S,_]),ue=(0,J.useCallback)(C=>{if(!R.current)return;C.stopPropagation();let P=_(C);R.current=null,C.currentTarget.releasePointerCapture?.(C.pointerId),P&&S(P.width,P.height,!0)},[S,_]);(0,J.useEffect)(()=>{let C=P=>{P.key==="Escape"&&U()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[U]);let te=r&&i?r.translations?.[i]:"",he=z==="queued"||z==="running";return J.default.createElement("div",{ref:x,className:`caption-overlay ${N?"is-sized":""}`,style:{left:u??void 0,top:g??void 0,right:u==null?void 0:"auto",bottom:g==null?void 0:"auto",width:f?`${f}px`:void 0,height:N?`${N}px`:void 0,"--sub-size":`${s||15}px`}},J.default.createElement("div",{className:"caption-head",onPointerDown:Ce,onPointerMove:ve,onPointerUp:Q,onPointerCancel:Q,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},J.default.createElement(re,{name:"wave",size:13}),J.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),J.default.createElement(ho,{value:s,onChange:p,compact:!0}),J.default.createElement("button",{className:"caption-close",onClick:U,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),J.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?H(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:C=>{r&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),H(r.start))},title:r?`\u8DF3\u5230 ${Te(r.start)}`:void 0},r?J.default.createElement(J.default.Fragment,null,D?J.default.createElement("span",{className:"caption-speaker"},D):null,J.default.createElement("div",{className:"caption-text"},r.text),te?J.default.createElement("div",{className:"caption-trans"},te):null):J.default.createElement("div",{className:"caption-hint"},he?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),J.default.createElement("span",{className:"caption-resize",onPointerDown:B,onPointerMove:ee,onPointerUp:ue,onPointerCancel:ue,onDoubleClick:()=>S(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var X=Re(require("react"),1);function un({lines:r=[],status:i="listening",error:s="",device:p="",count:u=0,elapsed:g=0,fontSize:f=15,onStop:N,onSave:w,onClose:S}){let U=(0,X.useRef)(null),H=(0,X.useRef)(null),D=(0,X.useRef)(null),[z,x]=(0,X.useState)(null),F=r.slice(-6);(0,X.useEffect)(()=>{let B=U.current;B&&(B.scrollTop=B.scrollHeight)},[r.length]);let R=(B,_)=>{let ee=H.current,ue=ee?.offsetWidth||520,te=ee?.offsetHeight||160;return{x:Math.min(Math.max(8,B),Math.max(8,window.innerWidth-ue-8)),y:Math.min(Math.max(8,_),Math.max(8,window.innerHeight-te-8))}},ae=B=>{if(B.button!==void 0&&B.button!==0)return;let _=H.current;if(!_)return;let ee=_.getBoundingClientRect();D.current={dx:B.clientX-ee.left,dy:B.clientY-ee.top},B.currentTarget.setPointerCapture?.(B.pointerId)},Ce=B=>{let _=D.current;_&&x(R(B.clientX-_.dx,B.clientY-_.dy))},ve=B=>{D.current&&(D.current=null,B.currentTarget.releasePointerCapture?.(B.pointerId))},Q=i==="asking";return X.default.createElement("div",{ref:H,className:"live-caption",style:z?{left:z.x,top:z.y,bottom:"auto",transform:"none"}:void 0},X.default.createElement("div",{className:"live-caption-head",onPointerDown:ae,onPointerMove:Ce,onPointerUp:ve,title:"\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u4F4D\u7F6E"},X.default.createElement("span",{className:"live-caption-dot","data-live":i==="listening"?"on":"off","aria-hidden":"true"}),X.default.createElement("span",{className:"live-caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),X.default.createElement("span",{className:"live-caption-meta"},i==="starting"?"\u6B63\u5728\u6253\u5F00\u8BBE\u5907\u2026":null,i==="listening"?`${p||"\u7CFB\u7EDF\u58F0\u97F3"} \xB7 ${u} \u53E5 \xB7 ${Te(g)}`:null,i==="saving"?"\u6B63\u5728\u4FDD\u5B58\u2026":null,Q?`\u5DF2\u505C\u6B62 \xB7 \u5171 ${u} \u53E5`:null),X.default.createElement("button",{className:"icon-btn live-caption-close",title:Q?"\u5173\u6389":"\u505C\u6B62\u5E76\u5173\u95ED",onClick:Q?S:N},X.default.createElement(re,{name:"close",size:14}))),X.default.createElement("div",{className:"live-caption-body",ref:U},F.length?F.map(B=>{let _=B.translations?.zh||B.translations?.en||"";return X.default.createElement("div",{key:B.id,className:"live-line"},X.default.createElement("p",{className:"live-line-text",style:{fontSize:f}},B.text),_?X.default.createElement("p",{className:"live-line-tr",style:{fontSize:Math.round(f*.84)}},_):null)}):X.default.createElement("p",{className:"live-caption-empty"},i==="starting"?"\u6B63\u5728\u6253\u5F00\u97F3\u9891\u8BBE\u5907\u2026":"\u7B49\u7740\u542C\u2026",i==="listening"?" \u64AD\u653E\u4EFB\u4F55\u58F0\u97F3\uFF0C\u5B57\u5E55\u4F1A\u4E00\u53E5\u4E00\u53E5\u51FA\u73B0\u3002":"")),s?X.default.createElement("p",{className:"live-caption-error"},s):null,X.default.createElement("div",{className:"live-caption-foot"},Q?X.default.createElement(X.default.Fragment,null,X.default.createElement("span",{className:"live-caption-ask"},"\u4FDD\u5B58\u8FD9\u6B21\u5B57\u5E55\uFF1F"),X.default.createElement("button",{className:"btn ghost",onClick:()=>w(!1)},"\u4E0D\u7528"),X.default.createElement("button",{className:"btn primary",onClick:()=>w(!0)},"\u4FDD\u5B58")):X.default.createElement(X.default.Fragment,null,X.default.createElement("span",{className:"live-caption-tip"},"\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6"),X.default.createElement("button",{className:"btn ghost",onClick:N,disabled:i==="saving"},"\u505C\u6B62"))))}function gn(r){if(!r||!r.length)return 0;let i=0;for(let s=0;s<r.length;s+=1)i+=r[s]*r[s];return Math.sqrt(i/r.length)}function mn(r){return Math.round((Number(r)||0)*1e3)/1e3}var Jr=/blackhole|loopback|vb-?audio|vb-?cable|stereo ?mix|立体声混音|soundflower|virtual|existential|parrot|oray/i,Zr=/microphone|麦克风|mic\b/i;function qn(r){let i=String(r?.label||""),s=String(r?.deviceId||""),p=0;return Jr.test(i)&&(p+=100),Zr.test(i)&&(p-=10),i||(p-=5),(s==="default"||s==="communications")&&(p-=30),p}function vn(r){let i=(r||[]).filter(s=>s&&s.kind==="audioinput"&&s.deviceId);return i.length?[...i].sort((s,p)=>qn(p)-qn(s))[0]:null}var Ko=class{constructor({sampleRate:i=16e3,silenceMs:s=600,maxMs:p=12e3,minMs:u=400,prerollMs:g=300}={}){this.sampleRate=i,this.silenceMs=s,this.maxMs=p,this.minMs=u,this.prerollMs=g,this.total=0,this.noise=null,this.inSpeech=!1,this.preroll=[],this.segment=[],this.segmentStart=0,this.silence=0,this.lastVoiced=0,this.firstVoiced=0}get threshold(){let i=this.noise===null?.005:this.noise;return Math.max(.005,Math.min(.05,i*2.5))}get seconds(){return this.total/this.sampleRate}push(i){let s=[];if(!i||!i.length)return s;let p=this.total;this.total+=i.length;let u=gn(i);this.noise===null&&(this.noise=u);let g=u>=this.threshold;if(!this.inSpeech)return g?(this.segment=this.preroll.slice(),this.segmentStart=this.segment.length?this.segment[0].at:p,this.preroll=[],this.segment.push({at:p,data:i}),this.inSpeech=!0,this.silence=0,this.firstVoiced=p,this.lastVoiced=this.total,s):(this.noise=this.noise*.9+u*.1,this.preroll.push({at:p,data:i}),this.trimPreroll(),s);this.segment.push({at:p,data:i}),g?(this.silence=0,this.lastVoiced=this.total):this.silence+=i.length;let f=(this.total-this.segmentStart)/this.sampleRate*1e3;if(this.silence/this.sampleRate*1e3>=this.silenceMs){let w=this.cut("silence");return w&&s.push(w),s}if(f>=this.maxMs){let w=this.cut("max");w&&s.push(w)}return s}flush(){if(!this.inSpeech)return[];let i=this.cut("flush");return i?[i]:[]}cut(i){let s=this.segmentStart/this.sampleRate,p=(this.lastVoiced-this.segmentStart)/this.sampleRate,u=this.segment.reduce((S,U)=>S+U.data.length,0),g=new Float32Array(u),f=0;for(let S of this.segment)g.set(S.data,f),f+=S.data.length;let N=Math.max(s+.2,s+Math.min(p+.12,u/this.sampleRate)),w=(this.lastVoiced-this.firstVoiced)/this.sampleRate*1e3;return this.inSpeech=!1,this.segment=[],this.silence=0,i==="silence"&&w<this.minMs?null:{samples:g,start:mn(s),end:mn(N),seconds:mn(N-s),reason:i}}trimPreroll(){let i=Math.round(this.prerollMs/1e3*this.sampleRate),s=0;for(let p=this.preroll.length-1;p>=0;p-=1)if(s+=this.preroll[p].data.length,s>i){this.preroll=this.preroll.slice(p);return}}};function Xn(r,i=16e3){let s=r instanceof Float32Array?r:Float32Array.from(r||[]),p=new ArrayBuffer(44+s.length*2),u=new DataView(p),g=(N,w)=>{for(let S=0;S<w.length;S+=1)u.setUint8(N+S,w.charCodeAt(S))};g(0,"RIFF"),u.setUint32(4,36+s.length*2,!0),g(8,"WAVE"),g(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,1,!0),u.setUint32(24,i,!0),u.setUint32(28,i*2,!0),u.setUint16(32,2,!0),u.setUint16(34,16,!0),g(36,"data"),u.setUint32(40,s.length*2,!0);let f=44;for(let N=0;N<s.length;N+=1){let w=Math.max(-1,Math.min(1,s[N]));u.setInt16(f,w<0?w*32768:w*32767,!0),f+=2}return new Uint8Array(p)}var Gr=`
class PodwaveTap extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]
    const channel = input && input[0]
    if (channel && channel.length) this.port.postMessage(channel.slice(0))
    return true
  }
}
registerProcessor('podwave-tap', PodwaveTap)
`;async function Jn(){if(!navigator.mediaDevices?.enumerateDevices)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\u5217\u8868\uFF08\u9700\u8981\u5B89\u5168\u4E0A\u4E0B\u6587\uFF09");return(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="audioinput")}async function Zn({deviceId:r="",onSegment:i,onLevel:s,segmenterOptions:p={}}={}){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u62FF\u4E0D\u5230\u97F3\u9891\u8F93\u5165\u63A5\u53E3");let u;try{u=await navigator.mediaDevices.getUserMedia({audio:{...r?{deviceId:{exact:r}}:{},channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch(z){if(z?.name==="OverconstrainedError"&&r)u=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});else throw new Error(Qr(z))}let g;try{g=new AudioContext({sampleRate:16e3})}catch{g=new AudioContext}let f=g.sampleRate||16e3,N=new Ko({...p,sampleRate:f}),w=z=>{i?.({wav:Xn(z.samples,f),start:z.start,end:z.end,seconds:z.seconds,reason:z.reason})},S=z=>{if(z){s?.(gn(z));for(let x of N.push(z))w(x)}},U=g.createMediaStreamSource(u),H;try{let z=URL.createObjectURL(new Blob([Gr],{type:"application/javascript"}));await g.audioWorklet.addModule(z),URL.revokeObjectURL(z),H=new AudioWorkletNode(g,"podwave-tap",{numberOfInputs:1,numberOfOutputs:1,channelCount:1,channelCountMode:"explicit"}),H.port.onmessage=x=>S(x.data)}catch{H=g.createScriptProcessor(2048,1,1),H.onaudioprocess=z=>S(new Float32Array(z.inputBuffer.getChannelData(0)))}let D=g.createGain();return D.gain.value=0,U.connect(H),H.connect(D),D.connect(g.destination),await g.resume().catch(()=>{}),{label:u.getAudioTracks()[0]?.label||"",sampleRate:f,async stop(){try{for(let z of N.flush())w(z)}catch{}try{H.port&&(H.port.onmessage=null),H.onaudioprocess=null}catch{}for(let z of[U,H,D])try{z.disconnect()}catch{}for(let z of u.getTracks())z.stop();await g.close().catch(()=>{})}}}function Qr(r){let i=String(r?.name||"");return i==="NotAllowedError"||i==="SecurityError"?"\u6CA1\u6709\u97F3\u9891\u6743\u9650\u3002\u5728\u7CFB\u7EDF\u91CC\u5141\u8BB8 DSH \u4F7F\u7528\u9EA6\u514B\u98CE/\u97F3\u9891\u8F93\u5165\u4E4B\u540E\u518D\u8BD5":i==="NotFoundError"||i==="DevicesNotFoundError"?"\u627E\u4E0D\u5230\u8FD9\u4E2A\u97F3\u9891\u8BBE\u5907\u3002\u5148\u88C5\u865A\u62DF\u58F0\u5361\uFF08macOS \u7528 BlackHole\uFF09\uFF0C\u518D\u56DE\u6765\u9009\u5B83":i==="NotReadableError"?"\u8FD9\u4E2A\u8BBE\u5907\u88AB\u522B\u7684\u7A0B\u5E8F\u5360\u7528\u4E86\uFF0C\u6362\u4E00\u4E2A\u8F93\u5165\u8BBE\u5907\u8BD5\u8BD5":r?.message||"\u6253\u4E0D\u5F00\u97F3\u9891\u8BBE\u5907"}var d=Re(require("react"),1),we="/podwave/api";async function et(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Qt(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),p=await s.json().catch(()=>({}));if(!s.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return p}function Gn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),p=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function Qn(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function hn({onPlay:r,currentId:i}){let[s,p]=(0,d.useState)(null),[u,g]=(0,d.useState)(""),[f,N]=(0,d.useState)(""),[w,S]=(0,d.useState)(""),[U,H]=(0,d.useState)(""),[D,z]=(0,d.useState)(0),[x,F]=(0,d.useState)(!1),[R,ae]=(0,d.useState)(""),[Ce,ve]=(0,d.useState)(""),[Q,B]=(0,d.useState)([]),[_,ee]=(0,d.useState)(!1),[ue,te]=(0,d.useState)(null),[he,C]=(0,d.useState)([]),[P,V]=(0,d.useState)(null),[O,$]=(0,d.useState)(!1),[ke,De]=(0,d.useState)(""),[Me,Ee]=(0,d.useState)(null),[pe,fe]=(0,d.useState)(!1),[j,Se]=(0,d.useState)(null),[Ne,Ie]=(0,d.useState)(!1),Z=(0,d.useCallback)(async(c=!1)=>{ee(!0);try{let L=await et(`${we}/xyz/subscriptions${c?"?refresh=1":""}`);B(L.items||[])}catch(L){I(L)}finally{ee(!1)}},[]);function I(c){let L=String(c?.message||"");if(L.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||L.includes("\u767B\u5F55\u5DF2\u5931\u6548")){p(rt=>({...rt||{},loggedIn:!1})),B([]),te(null),C([]),ae(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(xe(L))}function xe(c){return c?c.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":c:"\u767B\u5F55\u5931\u8D25"}async function He(){try{await Qt(`${we}/xyz/open-web`,{})}catch(c){I(c)}}(0,d.useEffect)(()=>{et(`${we}/xyz/status`).then(c=>{p(c),c.loggedIn&&Z()}).catch(c=>I(c)),et(`${we}/xyz/local-app`).then(c=>Se(c)).catch(()=>Se({available:!1}))},[Z]),(0,d.useEffect)(()=>{if(!D)return;let c=setInterval(()=>z(L=>Math.max(0,L-1)),1e3);return()=>clearInterval(c)},[D]);async function Fe(){if(g(""),!/^1\d{10}$/.test(w.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}N("send");try{let c=await Qt(`${we}/xyz/auth/send-code`,{phone:w.trim(),areaCode:"+86"});z(60),c.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${c.devCode}`)}catch(c){I(c)}finally{N("")}}async function Le(){if(g(""),!w.trim()||!U.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}N("login");try{await Qt(`${we}/xyz/auth/login`,{phone:w.trim(),code:U.trim(),areaCode:"+86"});let c=await et(`${we}/xyz/status`);p(c),await Z()}catch(c){I(c)}finally{N("")}}async function ot(){if(g(""),!R.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}N("token");try{await Qt(`${we}/xyz/auth/token`,{refreshToken:R.trim(),deviceId:Ce.trim()});let c=await et(`${we}/xyz/status`);p(c),ae(""),await Z()}catch(c){I(c)}finally{N("")}}async function Xe(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let c=await navigator.clipboard.readText();if(!c.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");ae(c.trim())}catch(c){g(c?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function Ye(){g(""),N("app");try{await Qt(`${we}/xyz/auth/from-app`,{});let c=await et(`${we}/xyz/status`);p(c),await Z(!0)}catch(c){I(c)}finally{et(`${we}/xyz/local-app`).then(c=>Se(c)).catch(()=>{}),N("")}}async function _e(){N("logout");try{await Qt(`${we}/xyz/auth/logout`,{}),p({loggedIn:!1}),B([]),te(null),C([])}catch(c){I(c)}finally{N("")}}async function nt(c){te(c),C([]),V(null),$(!0),g("");try{let L=await et(`${we}/xyz/podcast/${encodeURIComponent(c.pid)}/episodes?limit=30`);C(L.items||[]),V(L.loadMoreKey||null)}catch(L){I(L)}finally{$(!1)}}async function b(){if(!(!ue||!P||O)){$(!0);try{let c=new URLSearchParams({limit:"30",loadMoreKey:P}),L=await et(`${we}/xyz/podcast/${encodeURIComponent(ue.pid)}/episodes?${c}`);C(rt=>[...rt,...L.items||[]]),V(L.loadMoreKey||null)}catch(c){I(c)}finally{$(!1)}}}async function y(c){N(`play:${c.eid}`),g("");try{await r(c)}catch(L){I(L)}finally{N("")}}async function T(){if(g(""),!ke.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}fe(!0);try{let c=ke.trim();if(/\/episode\//i.test(c)){let L=await et(`${we}/xyz/public/episode?url=${encodeURIComponent(c)}`);Ee({pid:L.podcast.pid,title:L.podcast.title,author:L.podcast.author,episodes:[L.episode]})}else{let L=await et(`${we}/xyz/public/podcast?url=${encodeURIComponent(c)}`);Ee(L.podcast)}}catch(c){I(c)}finally{fe(!1)}}async function G(c){N(`pplay:${c.eid}`),g("");try{await r({...c,public:!0})}catch(L){I(L)}finally{N("")}}return s?s.loggedIn?ue?d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("button",{className:"btn ghost",onClick:()=>{te(null),C([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),d.default.createElement("div",{className:"xyz-podcast-title"},ue.title)),O&&he.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,d.default.createElement("div",{className:"xyz-eps"},he.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${i===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},Qn(c.pubDate)," \xB7 ",Gn(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:f===`play:${c.eid}`,onClick:()=>y(c)},f===`play:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!O&&he.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,P?d.default.createElement("button",{className:"btn ghost xyz-more",disabled:O,onClick:b},O?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-head"},d.default.createElement("div",null,d.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),d.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),d.default.createElement("div",{className:"xyz-head-actions"},d.default.createElement("button",{className:"btn ghost",disabled:_,onClick:()=>Z(!0)},_?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),d.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:_e},"\u9000\u51FA\u767B\u5F55"))),_?d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,d.default.createElement("div",{className:"xyz-subs"},Q.map(c=>d.default.createElement("button",{key:c.pid,className:"xyz-sub-card",onClick:()=>nt(c)},c.cover?d.default.createElement("img",{className:"xyz-cover",src:c.cover,alt:"",loading:"lazy"}):d.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),d.default.createElement("div",{className:"xyz-sub-text"},d.default.createElement("div",{className:"xyz-sub-title"},c.title),d.default.createElement("div",{className:"xyz-sub-meta"},c.author||""))))),!_&&Q.length===0?d.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,u?d.default.createElement("p",{className:"xyz-error"},u):null):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("div",{className:"xyz-login"},d.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),d.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn primary",disabled:f==="app",onClick:Ye},f==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),d.default.createElement("p",{className:"xyz-hint"},j===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":j.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${j.deviceId?`\uFF08\u8BBE\u5907 ${j.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${j.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),d.default.createElement("button",{className:"xyz-link",onClick:()=>Ie(c=>!c)},Ne?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),Ne?d.default.createElement(d.default.Fragment,null,d.default.createElement("ol",{className:"xyz-steps"},d.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),d.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),d.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",d.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",d.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),d.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),d.default.createElement("div",{className:"xyz-actions"},d.default.createElement("button",{className:"btn ghost",onClick:He},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),d.default.createElement("div",{className:"xyz-advanced"},d.default.createElement("label",null,d.default.createElement("span",null,"refresh token \u6216 access token"),d.default.createElement("input",{value:R,onChange:c=>ae(c.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),d.default.createElement("button",{className:"xyz-link",type:"button",onClick:Xe},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),d.default.createElement("label",null,d.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),d.default.createElement("input",{value:Ce,onChange:c=>ve(c.target.value),placeholder:"x-jike-device-id"})),d.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:ot},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),d.default.createElement("button",{className:"xyz-link",onClick:()=>F(c=>!c)},x?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),x?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u624B\u673A\u53F7"),d.default.createElement("input",{value:w,onChange:c=>S(c.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),d.default.createElement("button",{className:"btn ghost",disabled:f==="send"||D>0,onClick:Fe},D>0?`${D}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),d.default.createElement("input",{value:U,onChange:c=>H(c.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),d.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:Le},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,d.default.createElement("div",{className:"xyz-public"},d.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),d.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),d.default.createElement("div",{className:"xyz-fields"},d.default.createElement("label",null,d.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),d.default.createElement("input",{value:ke,onChange:c=>De(c.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),d.default.createElement("button",{className:"btn ghost",disabled:pe,onClick:T},pe?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),Me?d.default.createElement("div",{className:"xyz-eps"},d.default.createElement("div",{className:"xyz-ep-title"},Me.title,d.default.createElement("span",{className:"xyz-hint"}," \xB7 ",Me.author)),Me.episodes.map(c=>d.default.createElement("div",{key:c.eid,className:`xyz-ep ${i===`xyz${c.eid}`?"is-current":""}`},d.default.createElement("div",{className:"xyz-ep-main"},d.default.createElement("div",{className:"xyz-ep-title"},c.title),d.default.createElement("div",{className:"xyz-ep-meta"},Qn(c.pubDate)," \xB7 ",Gn(c.duration))),d.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${c.eid}`,onClick:()=>G(c)},f===`pplay:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),u?d.default.createElement("p",{className:"xyz-error"},u):null)):d.default.createElement("div",{className:"xyz-panel"},d.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function fn(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function Rn(r,i){let s=fn(i),p=s?`${s}/`:"",u=new Map;for(let g of r){let f=fn(g?.rel);if(!f||p&&!f.startsWith(p))continue;let w=f.slice(p.length).split("/")[0];if(!w)continue;let S=p?`${p}${w}`:w,U=u.get(S)||{rel:S,name:w,count:0};U.count+=1,u.set(S,U)}return[...u.values()].sort((g,f)=>g.name.localeCompare(f.name,"zh-Hans-CN"))}function er(r,i){let s=[{rel:"",label:r}],p=fn(i);if(!p)return s;let u="";for(let g of p.split("/").filter(Boolean))u=u?`${u}/${g}`:g,s.push({rel:u,label:g});return s}function tr(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var M="/podwave/api",Rr=[.5,.75,1,1.25,1.5,1.75,2];async function ye(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function le(r,i,s){let p=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!p.ok){let u=await p.json().catch(()=>({}));throw new Error(u.error||p.statusText)}return p.json()}async function ea(r,i=1200){let s=await createImageBitmap(r),p=Math.min(1,i/Math.max(s.width,s.height)),u=Math.max(1,Math.round(s.width*p)),g=Math.max(1,Math.round(s.height*p)),f=document.createElement("canvas");f.width=u,f.height=g;let N=f.getContext("2d");N.fillStyle="#16161a",N.fillRect(0,0,u,g),N.drawImage(s,0,0,u,g),typeof s.close=="function"&&s.close();let w=await new Promise(S=>f.toBlob(S,"image/jpeg",.9));if(!w)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return w}function ta({onSubmit:r,onPick:i,onClose:s}){let[p,u]=(0,t.useState)(""),[g,f]=(0,t.useState)(!1),[N,w]=(0,t.useState)(!1),[S,U]=(0,t.useState)(""),H=(0,t.useRef)(null);return(0,t.useEffect)(()=>{H.current?.focus();let x=F=>{F.key==="Escape"&&s()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async x=>{if(x.preventDefault(),!(!p.trim()||g)){f(!0),U("");try{await r(p.trim()),s()}catch(F){U(F.message),f(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!N){w(!0),U("");try{let x=await i();if(x?.canceled)return;if(x?.error)throw new Error(x.error);x?.path&&(await r(x.path),s())}catch(x){U(x.message)}finally{w(!1)}}},disabled:N,autoFocus:!0},N?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:H,value:p,onChange:x=>u(x.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!p.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),S?t.default.createElement("div",{className:"dialog-error"},S):null))}function oa({config:r,onClose:i,onSave:s}){let[p,u]=(0,t.useState)(r?.provider||"api"),[g,f]=(0,t.useState)(""),[N,w]=(0,t.useState)(!1),[S,U]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:D=>{D.target===D.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async D=>{D.preventDefault(),w(!0),U("");try{await s({provider:p,apiKey:g||void 0})}catch(z){U(z.message),w(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:p,onChange:D=>u(D.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:g,onChange:D=>f(D.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),S?t.default.createElement("div",{className:"dialog-error"},S):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:N},"\u4FDD\u5B58"))))}function xn(){let[r,i]=(0,t.useState)([]),[s,p]=(0,t.useState)([]),[u,g]=(0,t.useState)({}),[f,N]=(0,t.useState)({running:!1}),[w,S]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[U,H]=(0,t.useState)(!1),[D,z]=(0,t.useState)(!1),[x,F]=(0,t.useState)(0),[R,ae]=(0,t.useState)(0),[Ce,ve]=(0,t.useState)(0),[Q,B]=(0,t.useState)(!1),[_,ee]=(0,t.useState)(""),[ue,te]=(0,t.useState)([]),[he,C]=(0,t.useState)("recent"),[P,V]=(0,t.useState)("all"),[O,$]=(0,t.useState)(""),[ke,De]=(0,t.useState)(""),[Me,Ee]=(0,t.useState)("all"),[pe,fe]=(0,t.useState)(null),[j,Se]=(0,t.useState)(null),[Ne,Ie]=(0,t.useState)(!1),[Z,I]=(0,t.useState)(0),[xe,He]=(0,t.useState)(0),[Fe,Le]=(0,t.useState)(!0),[ot,Xe]=(0,t.useState)(!1),[Ye,_e]=(0,t.useState)(""),[nt,b]=(0,t.useState)(""),[y,T]=(0,t.useState)(null),[G,c]=(0,t.useState)("none"),[L,rt]=(0,t.useState)(null),fo=(0,t.useRef)(new Set),[bt,At]=(0,t.useState)(15),[Ot,lt]=(0,t.useState)(!1),[Ve,jt]=(0,t.useState)({x:null,y:null}),[Ut,Rt]=(0,t.useState)({width:null,height:null}),[Ue,Bt]=(0,t.useState)({width:null,height:null}),[wt,mt]=(0,t.useState)(null),yt=(0,t.useRef)(null),[eo,kt]=(0,t.useState)(!1),[to,xo]=(0,t.useState)(0),[Nt,pt]=(0,t.useState)(""),[oo,gt]=(0,t.useState)(!1),[bo,no]=(0,t.useState)(null),[ge,Pe]=(0,t.useState)(""),[oe,Je]=(0,t.useState)({status:"none"}),[wo,zt]=(0,t.useState)(!1),[q,ro]=(0,t.useState)(!1),[yo,ao]=(0,t.useState)(!1),[Ze,so]=(0,t.useState)(null),[Ht,ko]=(0,t.useState)(!1),[Ft,No]=(0,t.useState)([]),[$t,se]=(0,t.useState)(!1),[Ae,vt]=(0,t.useState)([]),[ht,Ct]=(0,t.useState)(null),[_t,io]=(0,t.useState)(""),[zo,Vt]=(0,t.useState)([]),[Be,at]=(0,t.useState)("idle"),[$o,Wt]=(0,t.useState)([]),[Jo,Mt]=(0,t.useState)(""),[Co,lo]=(0,t.useState)(""),[Mo,po]=(0,t.useState)(0),[Zo,So]=(0,t.useState)(0),de=(0,t.useRef)(null),dt=(0,t.useRef)(""),a=(0,t.useRef)(null),v=(0,t.useRef)(null),E=(0,t.useRef)(null),ie=(0,t.useRef)(0),ze=(0,t.useRef)(w),Ge=(0,t.useRef)(0),co=(0,t.useRef)(0),Po=(0,t.useRef)(0),Kt=(0,t.useRef)(0),St=(0,t.useRef)(!1),ct=(0,t.useRef)(!1),To=(0,t.useRef)(null),Pt=(0,t.useRef)([]),Do=(0,t.useRef)(!1),Tt=(0,t.useRef)(""),qt=(0,t.useRef)([]);(0,t.useEffect)(()=>{z(!1)},[pe]),(0,t.useEffect)(()=>{ze.current=w},[w]),(0,t.useEffect)(()=>{v.current=j},[j]),(0,t.useEffect)(()=>{E.current=y},[y]),(0,t.useEffect)(()=>{ie.current=xe},[xe]),(0,t.useEffect)(()=>{let e=!1;return ye(`${M}/transcribe/settings`).then(o=>{e||rt(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ye(`${M}/ui-settings`);!e&&o&&(ro(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&At(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&lt(o.captionOpen),jt({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),Rt({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}),Bt({width:Number.isFinite(Number(o.transcriptW))&&o.transcriptW!==null?Number(o.transcriptW):null,height:Number.isFinite(Number(o.transcriptH))&&o.transcriptH!==null?Number(o.transcriptH):null}),Number.isFinite(Number(o.episodeLeftW))&&o.episodeLeftW!==null&&mt(Number(o.episodeLeftW)))}catch{}})(),()=>{e=!0}},[]);let Oe=(0,t.useCallback)(e=>{fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),Go=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));At(o),Oe({subtitleSize:o})},[Oe]),nr=(0,t.useCallback)((e,o,l)=>{jt({x:e,y:o}),l&&Oe({captionX:e,captionY:o})},[Oe]),rr=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};Rt(m),l&&Oe({captionW:m.width,captionH:m.height})},[Oe]),wn=(0,t.useCallback)((e,o,l)=>{let m={width:e??null,height:o??null};Bt(m),l&&Oe({transcriptW:m.width,transcriptH:m.height})},[Oe]),Eo=(0,t.useRef)(null),yn=(0,t.useRef)(null),kn=e=>{let o=Eo.current;return o?Math.round(Math.min(460,Math.max(140,o.width+(e.clientX-o.startX)))):null},ar=e=>{if(e.button!==void 0&&e.button!==0)return;let o=yn.current;o&&(e.preventDefault(),Eo.current={startX:e.clientX,width:o.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},sr=e=>{let o=kn(e);o!=null&&mt(o)},Nn=e=>{if(!Eo.current)return;let o=kn(e);Eo.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),o!=null&&(mt(o),Oe({episodeLeftW:o}))},ir=()=>{mt(null),Oe({episodeLeftW:null})},lr=()=>yt.current?.click(),pr=async e=>{if(!(!e||!pe)){kt(!0);try{let o=await ea(e),l=await fetch(`${M}/episodes/${encodeURIComponent(pe)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:o});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||"\u6362\u5C01\u9762\u5931\u8D25")}await We(),k("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(o){k(String(o.message||o))}finally{kt(!1)}}},dr=async()=>{if(pe){kt(!0);try{let e=await fetch(`${M}/episodes/${encodeURIComponent(pe)}/cover`,{method:"DELETE"});if(!e.ok){let o=await e.json().catch(()=>({}));throw new Error(o.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await We(),k("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){k(String(e.message||e))}finally{kt(!1)}}},cr=(0,t.useCallback)(()=>{lt(e=>{let o=!e;return Oe({captionOpen:o}),o})},[Oe]),ur=(0,t.useCallback)(()=>{lt(!1),Oe({captionOpen:!1})},[Oe]),uo=(0,t.useMemo)(()=>{let e=y?.lines;return e?.length&&e.find(o=>Z>=o.start&&Z<o.end)||null},[y,Z]),mr=uo&&uo.speaker!=null?y?.speakers?.[uo.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${uo.speaker+1}`:"",zn=(0,t.useCallback)(()=>{ro(e=>{let o=!e;return fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{b(e),window.clearTimeout(Kt.current),Kt.current=window.setTimeout(()=>b(""),2600)},[]);(0,t.useEffect)(()=>{if(Be!=="listening"&&Be!=="asking")return;So(Date.now());let e=window.setInterval(()=>So(Date.now()),1e3);return()=>window.clearInterval(e)},[Be]);let $n=(0,t.useCallback)(async()=>{if(!Do.current){Do.current=!0;try{for(;Pt.current.length;){let e=Pt.current.shift(),o=Tt.current;if(!o)break;try{let l=await fetch(`${M}/live/segment?session=${encodeURIComponent(o)}&start=${e.start}&end=${e.end}`,{method:"POST",headers:{"content-type":"audio/wav"},body:e.wav}),m=await l.json().catch(()=>({}));if(!l.ok)throw new Error(m.error||l.statusText);m.lines?.length&&(qt.current=[...qt.current,...m.lines],Wt(qt.current)),Mt(m.lastError||"")}catch(l){Mt(l.message||String(l))}}}finally{Do.current=!1}}},[]),Io=(0,t.useCallback)(async e=>{at("saving");let o=Tt.current;Tt.current="";try{let l=await le(`${M}/live/stop`,"POST",{session:o,save:!!e});l.saved?k(`\u5B57\u5E55\u5DF2\u4FDD\u5B58\uFF1A${l.files.md}`):k("\u5B9E\u65F6\u5B57\u5E55\u5DF2\u7ED3\u675F")}catch(l){k(`\u7ED3\u675F\u5B9E\u65F6\u5B57\u5E55\u5931\u8D25\uFF1A${l.message||l}`)}finally{Pt.current=[],qt.current=[],at("idle"),Wt([]),Mt(""),lo(""),po(0)}},[k]),Cn=(0,t.useCallback)(async()=>{let e=To.current;To.current=null,e&&await e.stop().catch(()=>{});let o=Date.now()+5e3;for(;(Pt.current.length||Do.current)&&Date.now()<o;)await new Promise(l=>setTimeout(l,150));qt.current.length?at("asking"):await Io(!1)},[Io]),gr=(0,t.useCallback)(async()=>{if(!(Be==="starting"||Be==="listening")){Mt(""),Wt([]),qt.current=[],at("starting");try{let e=await ye(`${M}/live`);if(!e.ready)throw new Error("\u8FD8\u6CA1\u6709\u586B DeepSeek API key\u3002\u8BBE\u7F6E \u2192\u300C\u7FFB\u8BD1\u300D\u91CC\u586B\u4E00\u4E2A\uFF0C\u8F6C\u5199\u548C\u5B9E\u65F6\u5B57\u5E55\u90FD\u80FD\u7528");let o=e.deviceId||"",l=e.deviceLabel||"";if(!o){let Y=await Jn().catch(()=>[]),Qe=vn(Y);Qe&&(o=Qe.deviceId,l=Qe.label||"")}let m=await le(`${M}/live/start`,"POST",{target:e.target||"zh"});if(!m?.session?.id)throw new Error("\u5BBF\u4E3B\u6CA1\u7ED9\u51FA\u4F1A\u8BDD id");Tt.current=m.session.id;let W=await Zn({deviceId:o,onSegment:Y=>{Pt.current.length>8&&Pt.current.shift(),Pt.current.push(Y),$n()}});To.current=W,lo(W.label||l||"\u7CFB\u7EDF\u58F0\u97F3"),po(Date.now()),at("listening"),o&&(o!==e.deviceId||(W.label||l)!==e.deviceLabel)&&le(`${M}/live/settings`,"PUT",{deviceId:o,deviceLabel:W.label||l}).catch(()=>{})}catch(e){Tt.current&&le(`${M}/live/stop`,"POST",{session:Tt.current,save:!1}).catch(()=>{}),Tt.current="",To.current=null,at("idle");let o=e.message||String(e);Mt(o),k(`\u5B9E\u65F6\u5B57\u5E55\u6CA1\u8D77\u6765\uFF1A${o}`)}}},[k,Be,$n]),We=(0,t.useCallback)(async()=>{let e=await ye(`${M}/episodes`);return i(e.items||[]),p(e.folders||[]),g(e.progress||{}),N(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ye(`${M}/health`).catch(()=>({}));o.mediaBase&&(dt.current=o.mediaBase);let l=await ye(`${M}/state`);if(e)return;S(l.settings),p(l.folders||[]);let m=await We();if(e)return;let W=l.settings?.lastEpisodeId,Y=W?(m.items||[]).find(Qe=>Qe.id===W):null;if(Y){Se(Y),He(Y.duration||0);let Qe=m.progress?.[Y.id]?.position||0;Ge.current=Qe>5?Qe:0,I(Ge.current);let Lt=de.current;Lt&&(Lt.src=dt.current?`${dt.current}/episodes/${Y.id}/audio`:`${M}/episodes/${Y.id}/audio`,Lt.load(),Lt.playbackRate=l.settings?.rate||1,Lt.volume=l.settings?.volume??.9)}Le(!1),St.current=!0}catch(o){e||(_e(o.message),Le(!1))}})(),()=>{e=!0}},[We]),(0,t.useEffect)(()=>{if(!f.running)return;let e=setInterval(()=>{We().catch(()=>{})},1500);return()=>clearInterval(e)},[f.running,We]),(0,t.useEffect)(()=>{let e=!1;return T(null),pt(""),xo(0),j?.id?((async()=>{try{let o=await ye(`${M}/episodes/${j.id}/transcript`);if(e)return;c(o.status),so(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?T(o.transcript):o.status==="queued"||o.status==="running"?(xo(o.elapsedMs||0),o.transcript&&T(o.transcript)):o.status==="error"&&pt(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||pt(o.message)}})(),()=>{e=!0}):(c("none"),()=>{e=!0})},[j?.id]),(0,t.useEffect)(()=>{ye(`${M}/translate/settings`).then(no).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=j?.id;return!o||!ge?(Je({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await ye(`${M}/episodes/${o}/translate?target=${ge}`);e||Je(l)}catch{e||Je({status:"none"})}})(),()=>{e=!0})},[j?.id,ge]),(0,t.useEffect)(()=>{if(G!=="queued"&&G!=="running")return;let e=!1,o=setInterval(async()=>{let l=v.current?.id;if(l)try{let m=await ye(`${M}/episodes/${l}/transcript`);if(e)return;c(m.status),so(m.status==="queued"||m.status==="running"?m:null),xo(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?T(m.transcript):m.status==="done"&&m.transcript?(T(m.transcript),gt(!0),k("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&pt(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[G,k]),(0,t.useEffect)(()=>{if(oe.status!=="running"&&oe.status!=="queued")return;let e=!1,o=async m=>{let W=await ye(`${M}/episodes/${m}/translate?target=${ge}`);if(!e){Je(W),W.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let Y=await ye(`${M}/episodes/${m}/transcript`);!e&&Y.transcript&&T(Y.transcript)}catch{}}},l=setInterval(()=>{let m=v.current?.id;m&&o(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[oe.status,ge,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let m=await ye(`${M}/jobs`);e||No(m.items||[])}catch{}};o();let l=setInterval(o,Ht?2500:2e4);return()=>{e=!0,clearInterval(l)}},[Ht]);let Dt=(0,t.useCallback)((e,o,l,m=!1)=>{if(!e)return;let W=Date.now();!m&&W-Po.current<4e3||(Po.current=W,le(`${M}/progress/${e}`,"PUT",{position:o,duration:l}).catch(()=>{}),g(Y=>({...Y,[e]:{position:o,duration:l,updatedAt:W}})))},[]),ft=(0,t.useCallback)(e=>{S(o=>({...o,...e})),le(`${M}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!Ne||!j||L?.realtime===!1||L?.provider==="local"||y&&!y.partial||G==="queued"||G==="running")return;let e=j.id;fo.current.has(e)||(fo.current.add(e),le(`${M}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&c("queued")}).catch(()=>{}))},[Ne,j,y,G,L]);let mo=(0,t.useCallback)(async()=>{let e=v.current;if(!e)return;pt(""),gt(!0);let o=E.current,l=!!o&&!o.partial;if(l){let m=Array.isArray(o.lines)?o.lines.length:0,W=(L?.provider||"api")==="api",Y=[`\u91CD\u65B0\u8F6C\u5199\u8FD9\u4E00\u96C6\uFF1F\u73B0\u6709\u5B57\u5E55\uFF08${m} \u884C\uFF09\u4F1A\u88AB\u8986\u76D6\u3002`,"",W?"\u8D70\u4E91\u7AEF\u8F6C\u5199\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u8D39\u4E00\u6B21\u3002":"\u8D70\u672C\u5730\u6A21\u578B\uFF0C\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1\uFF0C\u4F46\u4F1A\u5360 CPU/GPU\u3002"].join(`
`);if(!window.confirm(Y))return}try{let m=await le(`${M}/episodes/${e.id}/transcribe`,"POST",l?{force:!0}:{});c(m.status||"queued"),l&&k("\u91CD\u65B0\u8F6C\u5199\u5DF2\u5F00\u59CB")}catch(m){pt(m.message)}},[k,L]),vr=(0,t.useCallback)(()=>{if(y){gt(e=>!e);return}if(G==="queued"||G==="running"){gt(!0);return}mo()},[y,G,mo]),Qo=(0,t.useCallback)(async()=>{if(v.current)try{await le(`${M}/episodes/${v.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){pt(e.message)}},[k]),Ro=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let m=await le(`${M}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?k("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):k(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await le(`${M}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await le(`${M}/jobs`,"DELETE",{key:e.key})}catch(m){k(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let l=await ye(`${M}/jobs`).catch(()=>({items:[]}));No(l.items||[])},[k]),Lo=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let l=await le(`${M}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),vt([]),se(!1)}catch(l){k(l.message)}},[k]),hr=(0,t.useCallback)(e=>{vt(o=>o.includes(e)?o.filter(l=>l!==e):[...o,e])},[]),xt=(0,t.useCallback)(async(e,o,l)=>{try{let m=await le(`${M}${e}`,o,l||{});return m?.transcript&&T(m.transcript),m}catch(m){return k(m.message),null}},[k]),Mn=(0,t.useCallback)(e=>{Ct(e.id),io(e.text),Vt([])},[]),Sn=(0,t.useCallback)(async e=>{if(!y)return;await xt(`/episodes/${y.id}/transcript/lines/${e??ht}`,"PUT",{text:_t})&&(Ct(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[y,ht,_t,xt,k]),Pn=(0,t.useCallback)(async(e,o)=>{if(!y)return;await xt(`/episodes/${y.id}/transcript/lines/${e??ht}/split`,"POST",{offset:o})&&(Ct(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[y,ht,xt,k]),Tn=(0,t.useCallback)(async e=>{if(!y)return;await xt(`/episodes/${y.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[y,xt,k]),Dn=(0,t.useCallback)(async()=>{if(!y)return;let e=await xt(`/episodes/${y.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(Je({status:"none",missing:e.after}),k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):k(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[y,xt,k]),En=(0,t.useCallback)(async()=>{if(y)try{let e=await ye(`${M}/episodes/${y.id}/transcript/validate`);Vt(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[y,k]),Ao=(0,t.useCallback)(async()=>{let e=v.current?.id;if(!e)return;let o=await ye(`${M}/episodes/${e}/transcript`);o.transcript&&T(o.transcript)},[]),Oo=(0,t.useCallback)(async(e=!1)=>{let o=v.current?.id,l=ge;if(!(!o||!l)&&!(oe.status==="running"||oe.status==="queued")){Je({status:"running"});try{let m=await le(`${M}/episodes/${o}/translate`,"POST",{target:l,force:e});Je(m),m.status==="done"&&(await Ao(),k(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){Je(W=>({...W,status:"error",error:m.message}))}}},[ge,oe.status,Ao,k]),In=(0,t.useCallback)(()=>Oo(!1),[Oo]),Ln=(0,t.useCallback)(()=>{let e=ge==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&Oo(!0)},[Oo,ge]),An=(0,t.useCallback)(async e=>{let o=v.current?.id;if(!(!o||!ge||!e?.id))try{await le(`${M}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:ge}),await Ao(),k("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){k(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[ge,Ao,k]),On=(0,t.useCallback)(e=>{Pe(e||"")},[]),fr=async()=>{if(ne?.eid)try{await fetch(`${M}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${ne.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},xr=e=>{let o=!e.favorite;i(l=>l.map(m=>m.id===e.id?{...m,favorite:o}:m)),le(`${M}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(l=>k(l.message))},jn=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${M}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(l=>!e.includes(l.id))),vt([]),e.includes(pe)&&fe(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ke=(0,t.useMemo)(()=>{let e=[...r];return he==="title"?e.sort((o,l)=>o.title.localeCompare(l.title,"zh-Hans-CN")):he==="duration"?e.sort((o,l)=>(l.duration||0)-(o.duration||0)):e.sort((o,l)=>l.mtime-o.mtime),e},[r,he]),Xt=O?ke:"",Un=(0,t.useMemo)(()=>O?r.filter(e=>e.root===O):[],[r,O]),Yt=(0,t.useMemo)(()=>O?Rn(Un,Xt):[],[Un,O,Xt]),st=(0,t.useMemo)(()=>{let e=_.trim().toLowerCase();return Ke.filter(o=>{if(O&&o.root!==O||O&&(o.rel||"")!==Xt||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let m=u[o.id]?.position||0,W=o.duration||0,Y=W?m/W:0;return P==="inprogress"?m>5&&Y<.97:P==="finished"?Y>=.97:Me==="unheard"?m<=5:Me==="transcribed"?!!o.hasTranscript:Me==="favorites"?!!o.favorite:!0})},[Ke,_,P,Me,u,O,Xt]),Bn=(0,t.useMemo)(()=>Ft.filter(e=>e.status==="queued"||e.status==="running"),[Ft]),Et=(0,t.useMemo)(()=>st.filter(e=>!e.hasTranscript),[st]),en=(0,t.useMemo)(()=>r.filter(e=>{let o=u[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(u[o.id]?.updatedAt||0)-(u[e.id]?.updatedAt||0)).slice(0,4),[r,u]),br=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),wr=Math.round(br/3600*10)/10,Jt=(0,t.useMemo)(()=>O?er(Vo(O),Xt):[],[O,Xt]),yr=O?Jt.length>1?Jt[Jt.length-1].label:Vo(O):P==="inprogress"?"\u7EE7\u7EED\u6536\u542C":P==="finished"?"\u5DF2\u64AD\u5B8C":P==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",ne=pe?r.find(e=>e.id===pe)||(j?.id===pe?j:null):null,kr=Fe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":O?`${st.length} \u96C6${Yt.length?` \xB7 ${Yt.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${st.length} \u96C6 \xB7 \u5171 ${wr} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,va=(0,t.useMemo)(()=>j?Ke.findIndex(e=>e.id===j.id):-1,[Ke,j]),Zt=(0,t.useCallback)(()=>{let e=de.current;if(e){if(!v.current){let o=st[0]||Ke[0];o&&It(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[st,Ke]),It=(0,t.useCallback)((e,o=!0)=>{let l=de.current;if(!l||!e)return;if(v.current&&v.current.id===e.id){o&&Zt();return}v.current&&!l.ended&&l.currentTime>1&&Dt(v.current.id,l.currentTime,l.duration||ie.current,!0),v.current=e,Se(e),fe(Y=>Y&&e.id),He(e.duration||0);let m=u[e.id]?.position||0,W=m>5&&(!e.duration||m<e.duration-10)?m:0;Ge.current=W,I(W),e.source==="xyz"?l.src=dt.current?`${dt.current}/xyz/${e.id.slice(3)}/audio`:`${M}/episodes/${e.id}/audio`:l.src=dt.current?`${dt.current}/episodes/${e.id}/audio`:`${M}/episodes/${e.id}/audio`,l.load(),l.playbackRate=ze.current.rate||1,l.volume=ze.current.volume??.9,o&&l.play().catch(()=>{}),ft({lastEpisodeId:e.id})},[u,Dt,ft,Zt]),Nr=(0,t.useCallback)(async e=>{let o=e.public?`${M}/xyz/public/play`:`${M}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),W=await m.json().catch(()=>({}));if(!m.ok)throw new Error(W.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await We(),It(W.item,!0)},[We,It]);(0,t.useEffect)(()=>{let e=_.trim();if(e.length<2){te([]);return}let o=window.setTimeout(()=>{ye(`${M}/search?q=${encodeURIComponent(e)}`).then(l=>te(Array.isArray(l.items)?l.items:[])).catch(()=>te([]))},250);return()=>window.clearTimeout(o)},[_]);let jo=(0,t.useCallback)((e,o=!0)=>{e&&(It(e,o),fe(e.id))},[It]),qe=(0,t.useCallback)(e=>{let o=de.current;if(!o||!v.current)return;let l=Number(e);if(!Number.isFinite(l))return;let m=Number(ie.current)||0,W=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,Y=Math.max(0,W>0?Math.min(l,W):l);try{o.currentTime=Y}catch{Ge.current=Y;return}I(Y),Dt(v.current.id,Y,W||m,!0)},[Dt]),zr=(0,t.useCallback)(e=>{let o=r.find(l=>l.id===e.episodeId);if(o){if(v.current?.id===e.episodeId){qe(e.start),fe(o.id);return}Ge.current=e.start,jo(o,!1)}},[r,jo,qe]),Hn=(0,t.useCallback)(e=>{let o=a.current;if(!o)return null;let l=o.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),Uo=(0,t.useCallback)(e=>{let o=Hn(e),l=Number.isFinite(ie.current)&&ie.current>0?ie.current:Number.isFinite(de.current?.duration)?de.current.duration:0;o==null||!l||qe(o*l)},[Hn,qe]),$r=(0,t.useCallback)(e=>{e.preventDefault(),ct.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Uo(e)},[Uo]),Cr=(0,t.useCallback)(e=>{ct.current&&Uo(e)},[Uo]),Fn=(0,t.useCallback)(e=>{ct.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),Mr=(0,t.useCallback)(e=>{let o=de.current;if(!o)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),qe((o.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),qe((o.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),qe(0)),e.key==="End"&&(e.preventDefault(),qe(Number.isFinite(o.duration)?o.duration:0))},[qe]),go=(0,t.useCallback)(e=>{let o=de.current;if(!o||!v.current)return;let l=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||ie.current||0)-1));o.currentTime=l,I(l)},[]),tn=(0,t.useCallback)(e=>{if(!Ke.length)return;let l=((v.current?Ke.findIndex(m=>m.id===v.current.id):-1)+e+Ke.length)%Ke.length;It(Ke[l],!0)},[Ke,It]),Sr=(0,t.useCallback)(e=>{let o=de.current;o&&(o.playbackRate=e),ft({rate:e}),H(!1)},[ft]);(0,t.useEffect)(()=>{if(!U)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||H(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[U]),(0,t.useEffect)(()=>{if(!R)return;let e=()=>{let l=Math.max(0,Math.round((R-Date.now())/1e3));if(ve(l),l<=0){let m=de.current;m&&!m.paused&&m.pause(),ae(0),F(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[R,k]),(0,t.useEffect)(()=>{if(!Q)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||B(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[Q]);let on=(0,t.useCallback)(e=>{if(B(!1),e==="off"){ae(0),F(0),ve(0);return}if(e==="end"){ae(0),F(-1),ve(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}F(e),ae(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),Bo=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),l=de.current;l&&(l.volume=o),ft({volume:o})},[ft]),Pr=(0,t.useCallback)(()=>{let e=de.current,o=ze.current.volume>0?0:.9;e&&(e.volume=o),ft({volume:o})},[ft]),Tr=()=>{let e=de.current;if(!e||!v.current)return;let o=performance.now();o-(co.current||0)<400||(co.current=o,I(e.currentTime),Dt(v.current.id,e.currentTime,e.duration||ie.current))},Dr=()=>{let e=de.current,o=v.current;if(!e||!o)return;let l=Number.isFinite(e.duration)?e.duration:o.duration||0;He(l);let m=Ge.current;Ge.current=0,m>0&&m<l-1&&(e.currentTime=m,I(m))},Er=()=>{let e=de.current;if(v.current&&Dt(v.current.id,e?.duration||ie.current||0,e?.duration||ie.current||0,!0),x===-1){F(0),ae(0),ve(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}tn(1)},Ir=async e=>{await le(`${M}/folders`,"POST",{path:e}),await We(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Lr=async()=>{let e=await fetch(`${M}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Ar=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),yo||ao(!0))},Or=e=>{e.currentTarget.contains(e.relatedTarget)||ao(!1)},jr=async e=>{e.preventDefault(),ao(!1);let o=e.dataTransfer,l=[...o?.files||[]],m=l.map(ce=>ce.path).filter(ce=>typeof ce=="string"&&ce),W=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ce=>ce.trim()).filter(ce=>ce.startsWith("file://")).map(ce=>decodeURIComponent(ce.replace(/^file:\/\//,""))),Y=[...new Set([...m,...W])];if(Y.length){try{let ce=await le(`${M}/import/paths`,"POST",{paths:Y});await We(),k(ce.added?`\u5DF2\u6DFB\u52A0 ${ce.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ce){_e(ce.message)}return}let Qe=l.filter(ce=>ce.size>0);if(!Qe.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Lt=`drop-${Date.now()}`,Ho="",an=0;for(let ce of Qe)try{let _n=await fetch(`${M}/import/upload?name=${encodeURIComponent(ce.name)}&batch=${Lt}`,{method:"POST",body:ce}),Br=await _n.json();_n.ok&&(Ho=Br.folder||Ho,an+=1)}catch{}if(Ho)try{await le(`${M}/folders`,"POST",{path:Ho})}catch{}await We(),k(an?`\u5DF2\u5BFC\u5165 ${an} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Ur=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await le(`${M}/folders`,"DELETE",{path:e}),$(o=>o===e?"":o),await We(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){_e(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let l=o.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),Zt()):o.key==="ArrowRight"?(o.preventDefault(),go(15)):o.key==="ArrowLeft"?(o.preventDefault(),go(-15)):o.key==="ArrowUp"?(o.preventDefault(),Bo(ze.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Bo(ze.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Zt,go,Bo]);let nn=e=>{let o=u[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},rn=e=>{let o=u[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${q?"nav-collapsed":""}`,onDragOver:Ar,onDragLeave:Or,onDrop:jr},yo?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,q?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:zn},t.default.createElement(re,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(re,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:zn},t.default.createElement(re,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",en.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(nn).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,l])=>t.default.createElement("button",{key:e,className:`nav-item ${P===e&&!O?"active":""}`,onClick:()=>{$(""),V(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Xe(!0)},t.default.createElement(re,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:O===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{V("all"),Ee("all"),ee(""),$(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),V("all"),Ee("all"),ee(""),$(l=>l===e?"":e))}},t.default.createElement(re,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},Vo(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),Ur(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,yr),t.default.createElement("p",{className:"subline"},kr)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${Be!=="idle"?"is-on":""}`,onClick:()=>{Be==="idle"?gr():Be==="listening"&&Cn()},title:"\u5B9E\u65F6\u5B57\u5E55\uFF1A\u542C\u7CFB\u7EDF\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\u90FD\u80FD\u7528\uFF09"},t.default.createElement(re,{name:"wave",size:16}),t.default.createElement("span",null,"\u5B9E\u65F6\u5B57\u5E55")),t.default.createElement("button",{className:`tool-btn ${Ht?"is-on":""}`,onClick:()=>ko(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(re,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",Bn.length?` ${Bn.length}`:"")),t.default.createElement("button",{className:`tool-btn ${$t?"is-on":""}`,onClick:()=>{se(e=>!e),vt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(re,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(re,{name:"search",size:16}),t.default.createElement("input",{value:_,onChange:e=>ee(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:he,onChange:e=>C(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),$t?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Ae.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>vt(st.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(ut,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!Et.length&&!Ae.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(je,{hint:`${Et.length} \u96C6`,disabled:!Et.length,onSelect:()=>{e(),Lo(Et.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(je,{hint:`${Ae.length} \u96C6`,disabled:!Ae.length,onSelect:()=>{e(),Lo(Ae)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!Ae.length,onClick:()=>jn(Ae)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{vt([]),se(!1)}},"\u53D6\u6D88")):null,Ye?t.default.createElement("div",{className:"banner error",onClick:()=>_e("")},Ye," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,ne?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>fe(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},ne.artist,ne.album?` \xB7 ${ne.album}`:"")),t.default.createElement("div",{className:"episode-view",style:wt?{"--episode-left-w":`${wt}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:yn},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:lr,disabled:eo,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(Gt,{item:ne,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},eo?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:yt,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let o=e.target.files?.[0];e.target.value="",pr(o)}})),t.default.createElement("h2",{className:"episode-title"},ne.title),t.default.createElement("p",{className:"episode-sub"},ne.artist,ne.album?` \xB7 ${ne.album}`:""),t.default.createElement("p",{className:"episode-path",title:ne.file},ne.location||ne.file),t.default.createElement("p",{className:"episode-stats"},sn(ne.duration)," \xB7 ",ln(ne.mtime)," \xB7 \u5DF2\u542C ",Math.round(rn(ne)),"%"),ne.shownotes?t.default.createElement("div",{className:`episode-notes ${D?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>z(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",D?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},ne.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:Zt},Ne&&j?.id===ne.id?"\u6682\u505C":"\u64AD\u653E"),G==="queued"||G==="running"?t.default.createElement("button",{className:"btn ghost",onClick:Qo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:mo},ne.source==="xyz"?y?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":y?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(ut,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,ne.source==="xyz"?t.default.createElement(je,{onSelect:()=>{e(),fr()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,ne.hasCover?t.default.createElement(je,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),dr()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(je,{danger:!0,onSelect:()=>{e(),jn([ne.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:ar,onPointerMove:sr,onPointerUp:Nn,onPointerCancel:Nn,onDoubleClick:ir,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement(Wo,{inline:!0,transcript:y,status:G,progress:Ze?.progress,stage:Ze?.stage,chunks:Ze?.chunks,queued:Ze?.queued,elapsed:to,editingId:ht,draft:_t,onDraftChange:io,onEditLine:Mn,onSaveLine:Sn,onCancelEdit:()=>Ct(null),onSplitLine:Pn,onMergeLine:Tn,onValidate:En,onResegment:Dn,issues:zo,onCancel:Qo,error:Nt,position:Z,fontSize:bt,onFontSize:Go,width:Ue.width,height:Ue.height,onResize:wn,onSeek:qe,onClose:()=>fe(null),onStart:mo,target:ge,job:oe,onChangeTarget:On,onTranslate:In,onRetranslate:Ln,onRetranslateLine:An,onOpenSettings:()=>zt(!0)})))):P==="xyz"?t.default.createElement(hn,{onPlay:Nr,currentId:j?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${Me===e?"is-on":""}`,onClick:()=>Ee(e)},o))),P==="all"&&!_&&en.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},en.map(e=>{let o=rn(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${j?.id===e.id?"is-current":""}`,onClick:()=>jo(e,!0)},t.default.createElement(Gt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,_.trim().length>=2&&ue.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ue.length)),ue.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>zr(e)},t.default.createElement("span",{className:"hit-time"},Te(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,O?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},Jt.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(re,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===Jt.length-1?"is-current":""}`,onClick:()=>De(e.rel),disabled:o===Jt.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Fe&&O&&Yt.length>0&&!_?t.default.createElement("div",{className:"folder-rows"},Yt.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>De(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(re,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Fe?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):st.length===0&&!(O&&Yt.length>0&&!_)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":O?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${Yt.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Xe(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&O?t.default.createElement("button",{className:"btn",onClick:()=>$("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},st.map((e,o)=>{let l=rn(e),m=j?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${nn(e)?"is-finished":""} ${$t&&Ae.includes(e.id)?"is-selected":""}`,onClick:()=>$t?hr(e.id):jo(e,!0)},t.default.createElement("span",{className:"col-index row-index"},$t?Ae.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(re,{name:"check",size:14})):null:m&&Ne?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Gt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",ln(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},sn(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:W=>{W.stopPropagation(),xr(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},nn(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(re,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),oo&&j&&!ne?t.default.createElement(Wo,{transcript:y,status:G,progress:Ze?.progress,stage:Ze?.stage,chunks:Ze?.chunks,queued:Ze?.queued,elapsed:to,editingId:ht,draft:_t,onDraftChange:io,onEditLine:Mn,onSaveLine:Sn,onCancelEdit:()=>Ct(null),onSplitLine:Pn,onMergeLine:Tn,onValidate:En,onResegment:Dn,issues:zo,onCancel:Qo,error:Nt,position:Z,fontSize:bt,onFontSize:Go,width:Ue.width,height:Ue.height,onResize:wn,onSeek:qe,onClose:()=>gt(!1),onStart:mo,target:ge,job:oe,onChangeTarget:On,onTranslate:In,onRetranslate:Ln,onRetranslateLine:An,onOpenSettings:()=>zt(!0)}):null,Ht?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>ko(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Ft.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ft.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},tr(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Ro(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Ro(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Ro(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!Et.length,onClick:()=>Lo(Et.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Et.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Ae.length,onClick:()=>Lo(Ae)},"\u8F6C\u5199\u5DF2\u9009 ",Ae.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:a,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(xe||0),"aria-valuenow":Math.round(Z||0),"aria-valuetext":`${Te(Z)} / ${Te(xe)}`,onPointerDown:$r,onPointerMove:Cr,onPointerUp:Fn,onPointerCancel:Fn,onKeyDown:Mr},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${xe?Math.min(100,Math.max(0,Z/xe*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${xe?Math.min(100,Math.max(0,Z/xe*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},j?t.default.createElement("button",{className:"now-open",onClick:()=>fe(j.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Gt,{item:j,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:j.title},j.title),t.default.createElement("div",{className:"now-artist"},j.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>tn(-1)},t.default.createElement(re,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>go(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:Zt,disabled:!j&&st.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(re,{name:Ne?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>go(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>tn(1)},t.default.createElement(re,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(ut,{className:`player-subs ${oo||Ot?"is-active":""}`,buttonClassName:`subs-btn ${oo||Ot?"active":""}`,placement:"up",disabled:!j,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(re,{name:"wave",size:15}),t.default.createElement("span",null,y?"\u5B57\u5E55":G==="queued"||G==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(je,{checked:oo,hint:y?`${y.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),vr()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(je,{checked:Ot,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),cr()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Te(Z)," / ",Te(xe)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>H(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":U},w.rate,"\xD7"),U?t.default.createElement("span",{className:"rate-menu",role:"menu"},Rr.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===w.rate,className:e===w.rate?"is-on":"",onClick:()=>Sr(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${R?"active":""}`,onClick:()=>B(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":Q},t.default.createElement(re,{name:"moon",size:14}),R?t.default.createElement("span",{className:"sleep-left"},Te(Ce)):null),Q?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!R&&x!==-1,className:!R&&x!==-1?"is-on":"",onClick:()=>on("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":x===e,className:x===e?"is-on":"",onClick:()=>on(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":x===-1,className:x===-1?"is-on":"",onClick:()=>on("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Pr,title:"\u9759\u97F3"},t.default.createElement(re,{name:w.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:w.volume,onChange:e=>Bo(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),ot?t.default.createElement(ta,{onClose:()=>Xe(!1),onSubmit:Ir,onPick:Lr}):null,wo?t.default.createElement(oa,{config:bo,onClose:()=>zt(!1),onSave:async e=>{let o=await le(`${M}/translate/settings`,"PUT",e);no(o),zt(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,nt?t.default.createElement("div",{className:"toast"},nt):null,Ot?t.default.createElement(cn,{line:uo,speakerLabel:mr,target:ge,status:G,fontSize:bt,onFontSize:Go,x:Ve.x,y:Ve.y,width:Ut.width,height:Ut.height,onMove:nr,onResize:rr,onClose:ur,onSeek:qe}):null,Be!=="idle"?t.default.createElement(un,{lines:$o,status:Be,error:Jo,device:Co,count:$o.length,elapsed:Mo?Math.max(0,Math.round((Zo-Mo)/1e3)):0,fontSize:bt,onStop:Cn,onSave:Io,onClose:()=>Io(!1)}):null,t.default.createElement("audio",{ref:de,preload:"metadata",onPlay:()=>Ie(!0),onPause:()=>{Ie(!1);let e=de.current;v.current&&e&&e.currentTime>0&&!e.ended&&Dt(v.current.id,e.currentTime,e.duration||ie.current,!0)},onTimeUpdate:Tr,onLoadedMetadata:Dr,onEnded:Er,onError:()=>{Ie(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var qo=require("react");function na(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(u=>Number.parseFloat(u));if(s.length<3||s.length>3&&s[3]===0)return null;let p=u=>{let g=u/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*p(s[0])+.7152*p(s[1])+.0722*p(s[2])}function ra(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=na(i);if(s!==null)return s}return null}function or(){let r=ra();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function Xo(){let[r,i]=(0,qo.useState)(or);return(0,qo.useEffect)(()=>{let s=()=>i(or());s();let p=new MutationObserver(s);p.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&p.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let u=window.matchMedia("(prefers-color-scheme: light)");return u.addEventListener?.("change",s),()=>{p.disconnect(),u.removeEventListener?.("change",s)}},[]),r}var n=Re(require("react"),1);var Yo="0.11.58";var K="/podwave/api";async function $e(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function me(r,i,s){let p=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),u=await p.json().catch(()=>({}));if(!p.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return u}function aa(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),p=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function tt(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function sa(r){if(!r)return"";let i=new Date(r),s=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function ia(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function la(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function pa(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function bn(){let r=Xo(),[i,s]=(0,n.useState)([]),[p,u]=(0,n.useState)(""),[g,f]=(0,n.useState)(0),[N,w]=(0,n.useState)(!1),[S,U]=(0,n.useState)(!1),[H,D]=(0,n.useState)(!1),[z,x]=(0,n.useState)([]),[F,R]=(0,n.useState)(null),[ae,Ce]=(0,n.useState)(""),[ve,Q]=(0,n.useState)(!1),[B,_]=(0,n.useState)({asrModel:"",translateModel:""}),[ee,ue]=(0,n.useState)(null),[te,he]=(0,n.useState)(null),[C,P]=(0,n.useState)({showSidebarPanel:!0}),[V,O]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[$,ke]=(0,n.useState)(null),[De,Me]=(0,n.useState)(null),[Ee,pe]=(0,n.useState)(null),[fe,j]=(0,n.useState)(!1),[Se,Ne]=(0,n.useState)("auto"),[Ie,Z]=(0,n.useState)(!1),[I,xe]=(0,n.useState)(null),[He,Fe]=(0,n.useState)(!1),[Le,ot]=(0,n.useState)(""),[Xe,Ye]=(0,n.useState)(15),[_e,nt]=(0,n.useState)(!0),[b,y]=(0,n.useState)("api"),[T,G]=(0,n.useState)(!0),[c,L]=(0,n.useState)(""),[rt,fo]=(0,n.useState)([]),[bt,At]=(0,n.useState)(!0),[Ot,lt]=(0,n.useState)(""),[Ve,jt]=(0,n.useState)("api"),[Ut,Rt]=(0,n.useState)("https://api.deepseek.com"),[Ue,Bt]=(0,n.useState)("deepseek-chat"),[wt,mt]=(0,n.useState)(""),[yt,eo]=(0,n.useState)([]),[kt,to]=(0,n.useState)(!1),[xo,Nt]=(0,n.useState)(""),[pt,oo]=(0,n.useState)(!1),[gt,bo]=(0,n.useState)(""),[no,ge]=(0,n.useState)(""),[Pe,oe]=(0,n.useState)(""),[Je,wo]=(0,n.useState)(""),[zt,q]=(0,n.useState)(""),ro=(0,n.useCallback)(async()=>{try{let[a,v,E,ie,ze,Ge,co,Po,Kt]=await Promise.all([$e(`${K}/history`),$e(`${K}/models`),$e(`${K}/translate/settings`),$e(`${K}/ui-settings`),$e(`${K}/transcribe/settings`),$e(`${K}/import/settings`),$e(`${K}/setup`),$e(`${K}/update`),$e(`${K}/live`)]);ke(co),xe(Po),co?.job?.status==="running"&&Z(!0),O({mode:Ge.mode||"copy",orphans:Ge.orphans||0,orphanBytes:Ge.orphanBytes||0}),P({showSidebarPanel:ie?.showSidebarPanel!==!1}),ot((ze.hotwords||[]).join(" ")),Ye(ze.chunkMinutes||15),nt(ze.diarize!==!1),y(ze.provider||"api"),G(ze.realtime!==!1),L(Kt?.deviceId||""),At(Kt?.saveOnStop!==!1),Kt?.ready||lt("\u8FD8\u6CA1\u6709 DeepSeek API key\uFF0C\u5B9E\u65F6\u5B57\u5E55\u8981\u5148\u7528\u4E91\u7AEF\u8BC6\u522B"),Wt().then(St=>{St.length&&!St.some(ct=>ct.label)&&lt("\u8BBE\u5907\u540D\u8FD8\u662F\u7A7A\u7684\uFF0C\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u6388\u6743\u4E00\u6B21\u5C31\u80FD\u770B\u5230\u540D\u5B57")}),s(a.items||[]),u(a.dir||""),f(Number(a.bytes)||0),w(ie?.historyOpen===!0),U(ie?.envOpen===!0),D(ie?.modelsOpen===!0),x(v.models||[]),R(v.storage||null),Ce(v.storage?.dir||""),_(v.config||{asrModel:"",translateModel:""}),ue(v.transcribe||null),bo(v.config?.asrModel||""),ge(v.config?.translateModel||""),he(E),jt(E.provider||"api"),Rt(E.apiBase||"https://api.deepseek.com"),Bt(E.apiModel||"deepseek-chat"),me(`${K}/translate/models`,"POST",{base:E.apiBase,key:void 0}).then(St=>{let ct=Array.isArray(St?.models)?St.models:[];eo(ct),Nt(ct.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${ct.length} \u4E2A\u6A21\u578B`:"")}).catch(()=>{}),mt(""),q("")}catch(a){q(a.message)}},[]);(0,n.useEffect)(()=>{ro()},[ro]),(0,n.useEffect)(()=>{let a=!1;return $e(`${K}/setup/plan?source=${Se}&mode=${b==="local"?"local":"basic"}`).then(v=>{a||Me(v)}).catch(()=>{}),()=>{a=!0}},[Se,b,$?.job?.status]),(0,n.useEffect)(()=>{if(!Ie&&$?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let v=await $e(`${K}/setup`);ke(v),v.job?.status!=="running"&&Z(!1)}catch{}},2500);return()=>window.clearInterval(a)},[Ie,$?.job?.status]);let yo=async()=>{q(""),Z(!0);try{await me(`${K}/setup/install`,"POST",{source:Se});let a=await $e(`${K}/setup`);ke(a),se("\u5F00\u59CB\u5B89\u88C5")}catch(a){Z(!1),q(a.message)}},ao=()=>{let a=!N;w(a),me(`${K}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},Ze=(a,v,E)=>{let ie=!v;E(ie),me(`${K}/ui-settings`,"PUT",{[a]:ie}).catch(()=>{})},so=Array.isArray($?.missing)?$.missing.length:0,Ht=$?so?`${so} \u9879\u5F85\u5B89\u88C5`:"\u5168\u90E8\u5C31\u7EEA":"\u6B63\u5728\u626B\u63CF\u2026",ko=F?`${F.items?.length||0} \u4E2A \xB7 ${tt(F.totalBytes)}`:"",Ft=async()=>{try{await me(`${K}/history/open`,"POST",{})}catch(a){q(a.message)}},No=async()=>{q(""),Z(!0);try{await me(`${K}/setup/install`,"POST",{source:Se,mode:"local"});let a=await $e(`${K}/setup`);ke(a),se("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){Z(!1),q(a.message)}},$t=async()=>{try{await me(`${K}/setup/cancel`,"POST",{}),se("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){q(a.message)}},se=a=>{wo(a),window.setTimeout(()=>wo(""),2400)},Ae=async()=>{j(!0);try{let a=await $e(`${K}/setup/verify`);pe(a),se(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){se(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{j(!1)}},vt=async()=>{try{let a=await $e(`${K}/setup/diagnose`),v=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(v)}catch{let E=document.createElement("textarea");E.value=v,E.style.position="fixed",E.style.opacity="0",document.body.appendChild(E),E.select(),document.execCommand("copy"),E.remove()}se("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){se(a.message||"\u590D\u5236\u5931\u8D25")}},ht=async({silent:a=!1}={})=>{a||to(!0),a||Nt("");try{let v=await me(`${K}/translate/models`,"POST",{base:Ut,key:wt.trim()||void 0}),E=Array.isArray(v?.models)?v.models:[];return eo(E),a||Nt(E.length?`\u8FD9\u4E2A\u5730\u5740\u4E0B\u6709 ${E.length} \u4E2A\u6A21\u578B`:"\u8FD9\u4E2A\u5730\u5740\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u6A21\u578B"),E}catch(v){return a||Nt(v.message||"\u5217\u8868\u83B7\u53D6\u5931\u8D25"),[]}finally{a||to(!1)}},Ct=async a=>{let v=Ve;jt(a);try{let E=await me(`${K}/translate/settings`,"PUT",{provider:a});he(E)}catch(E){jt(v),q(E.message)}},_t=async()=>{oe("api"),q("");try{let a={apiBase:Ut,apiModel:Ue};Ve==="api"&&(a.provider="api"),wt.trim()&&(a.apiKey=wt.trim());let v=await me(`${K}/translate/settings`,"PUT",a);he(v),mt(""),se("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{oe("")}},io=async()=>{oe("models"),q("");try{let a=await me(`${K}/models`,"PUT",{asrModel:gt,translateModel:no});_(a.config),x(a.models||[]),ue(a.transcribe||null),se("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{oe("")}},zo=async()=>{try{await me(`${K}/models/open`,"POST",{})}catch(a){q(a.message)}},Vt=async(a,v=!0)=>{Q(!0),q("");try{let E=await me(`${K}/models/dir`,"POST",{dir:a,move:v});R(E.storage||null),x(E.models||[]),Ce(E.storage?.dir||"");let ie=(E.moved||[]).length,ze=(E.skipped||[]).length;se(ie||ze?`\u5DF2\u8FC1\u79FB ${ie} \u4E2A\u6A21\u578B${ze?`\uFF0C${ze} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(E){q(E.message)}finally{Q(!1)}},Be=async a=>{oe(`model:${a}`),q("");try{let v=await me(`${K}/models/remove`,"POST",{name:a});R(v||null),x(v.models||[]),se(`\u5DF2\u5220\u9664 ${a}`)}catch(v){q(v.message)}finally{oe("")}},at=z.length?z:[{name:B.asrModel||"qwen3-asr-1.7b-8bit",ready:ee?.modelReady},{name:B.translateModel||"hy-mt2-1.8b-4bit",ready:te?.localReady}],$o=async()=>{Fe(!0);try{xe(await $e(`${K}/update?force=1`))}catch{se("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Fe(!1)}},Wt=async()=>{try{let v=(await navigator.mediaDevices.enumerateDevices()).filter(E=>E.kind==="audioinput");return fo(v),v}catch{return[]}},Jo=async()=>{lt("\u6B63\u5728\u8981\u4E00\u6B21\u97F3\u9891\u6743\u9650\u2026");try{let v=await navigator.mediaDevices.getUserMedia({audio:!0});for(let E of v.getTracks())E.stop()}catch(v){lt(`\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\uFF1A${v.message||v}`);return}let a=await Wt();lt(a.length?`\u627E\u5230 ${a.length} \u4E2A\u97F3\u9891\u8F93\u5165\uFF0C\u9009\u865A\u62DF\u58F0\u5361\uFF08BlackHole / VB-Cable\uFF09`:"\u6CA1\u627E\u5230\u97F3\u9891\u8F93\u5165\u8BBE\u5907")},Mt=async()=>{oe("live"),q("");try{let a=rt.find(E=>E.deviceId===c)?.label||"",v=await me(`${K}/live/settings`,"PUT",{deviceId:c,deviceLabel:a,saveOnStop:bt});L(v.deviceId||""),At(v.saveOnStop!==!1),se("\u5B9E\u65F6\u5B57\u5E55\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{oe("")}},Co=at.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),lo=at.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Mo=async()=>{oe("ui"),q("");try{let a=await me(`${K}/ui-settings`,"PUT",{showSidebarPanel:C.showSidebarPanel});P({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),se("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{oe("")}},po=async a=>{oe("import"),q("");try{let v=await me(`${K}/import/settings`,"PUT",{mode:a});O(E=>({...E,mode:v.mode})),se("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(v){q(v.message)}finally{oe("")}},Zo=async()=>{if(V.orphans&&window.confirm(`\u6E05\u7406 ${V.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){oe("imports"),q("");try{let a=await me(`${K}/imports/orphans`,"DELETE",{});O(v=>({...v,orphans:0,orphanBytes:0})),se(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){q(a.message)}finally{oe("")}}},So=async()=>{oe("transcribe"),q("");try{let a=Le.split(/[\s,，、]+/).map(E=>E.trim()).filter(Boolean).slice(0,500),v=await me(`${K}/transcribe/settings`,"PUT",{provider:b,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(Xe)||15)),diarize:_e,realtime:T});ot((v.hotwords||[]).join(" ")),Ye(v.chunkMinutes||15),nt(v.diarize!==!1),y(v.provider||"api"),v.runtime&&ue(v.runtime),se("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){q(a.message)}finally{oe("")}},de=at,dt=!!(Yo&&$?.version&&$.version!==Yo);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,_o),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),dt?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",Yo,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",$.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,zt?n.default.createElement("div",{className:"banner error",onClick:()=>q("")},zt):null,Je?n.default.createElement("div",{className:"settings-message"},Je):null,n.default.createElement("section",{className:`settings-card collapsible ${S?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Ze("envOpen",S,U),"aria-expanded":S,title:S?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},Ht),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),S?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),$?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},$.platform?.osLabel," \xB7 ",$.platform?.arch," \xB7 ",$.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",$.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",$.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:vt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:fe,onClick:Ae},fe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),Ee?n.default.createElement("ul",{className:"setup-components"},Ee.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},($.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},tt(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:Se,onChange:a=>Ne(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),De?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",tt(De.totalBytes)," \xB7 ",De.items.length," \u9879"),n.default.createElement("ul",null,De.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?tt(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:Ie||$.job?.status==="running",onClick:yo},Ie||$.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),$.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:$t},"\u53D6\u6D88"):null),$.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,$.job.stage||$.job.status),n.default.createElement("span",null,$.job.progress||0,"% \xB7 ",tt($.job.bytes)," / ",tt($.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${$.job.progress||0}%`}})),$.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",$.job.error):null,$.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},$.job.warning):null,$.job.status==="done"&&(!$.job.summary||!$.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,$.job.status==="done"&&$.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",$.job.modelsDir):null,Array.isArray($.job.summary)&&$.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},$.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":tt(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5B9E\u65F6\u5B57\u5E55\uFF08\u7CFB\u7EDF\u58F0\u97F3\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u542C\u7535\u8111\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\uFF09\uFF0C\u4E00\u53E5\u4E00\u53E5\u6EDA\u51FA\u4E2D\u6587\uFF0C\u8DDF\u64AD\u5BA2\u7684\u8FDB\u5EA6\u65E0\u5173\u3002 \u5148\u5728\u7CFB\u7EDF\u91CC\u5EFA\u4E00\u4E2A\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF0C\u628A\u58F0\u97F3\u540C\u65F6\u9001\u5230\u626C\u58F0\u5668\u548C\u865A\u62DF\u58F0\u5361\uFF1AmacOS \u7528 BlackHole\uFF0C Windows \u7528 VB-Cable \u6216\u300C\u7ACB\u4F53\u58F0\u6DF7\u97F3\u300D\u3002\u8BC6\u522B\u8D70 DeepSeek \u4E91\u7AEF\uFF0C\u7EA6 \xA50.4/\u5C0F\u65F6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F93\u5165\u8BBE\u5907"),n.default.createElement("select",{value:c,onChange:a=>L(a.target.value)},n.default.createElement("option",{value:""},"\u81EA\u52A8\u9009\uFF08\u4F18\u5148\u865A\u62DF\u58F0\u5361\uFF09"),rt.map((a,v)=>n.default.createElement("option",{key:a.deviceId||v,value:a.deviceId},a.label||`\u97F3\u9891\u8F93\u5165 ${v+1}`)))),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:bt,onChange:a=>At(a.target.checked)}),n.default.createElement("span",null,"\u505C\u6B62\u65F6\u95EE\u6211\u8981\u4E0D\u8981\u628A\u8FD9\u6B21\u5B57\u5E55\u5B58\u4E0B\u6765"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Jo},"\u68C0\u6D4B\u8BBE\u5907"),n.default.createElement("button",{className:"settings-btn primary",onClick:Mt,disabled:Pe==="live"},Pe==="live"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"),n.default.createElement("span",{className:"settings-status"},Ot||(rt.length?`${rt.length} \u4E2A\u97F3\u9891\u8F93\u5165`:"\u70B9\u300C\u68C0\u6D4B\u8BBE\u5907\u300D\u8BFB\u53D6\u8BBE\u5907\u540D")))),n.default.createElement("section",{className:`settings-card history-card ${N?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>ao(),"aria-expanded":N,title:N?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",g?` \xB7 ${tt(g)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),N?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${aa(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},sa(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ft,disabled:!p},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},p?`${p}${g?` \xB7 ${tt(g)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:b,onChange:a=>y(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),b==="api"?n.default.createElement("p",{className:"settings-status"},ee?.api?.hasKey?"\u7528\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u91CC\u90A3\u628A API key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 API key \u2014\u2014 \u53BB\u4E0B\u9762\u300C\u7FFB\u8BD1\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u5C31\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},ee?.installed&&ee?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${ee.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:Le,onChange:a=>ot(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:Xe,onChange:a=>Ye(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:T,onChange:a=>G(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:_e,onChange:a=>nt(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:So,disabled:Pe==="transcribe"},Pe==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),b==="local"&&!(ee?.installed&&ee?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:No,disabled:Ie},Ie?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:V.mode==="copy",onChange:()=>po("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:V.mode==="reference",onChange:()=>po("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Zo,disabled:Pe==="imports"||!V.orphans},V.orphans?`\u6E05\u7406 ${V.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(V.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7FFB\u8BD1"),n.default.createElement("p",{className:"settings-hint"},"\u9ED8\u8BA4\u7528 DSH \u91CC\u6B63\u5728\u7528\u7684\u90A3\u4E2A\u6A21\u578B\u7FFB\u8BD1\uFF0C\u4E0D\u7528\u5728\u8FD9\u91CC\u518D\u586B\u4E00\u904D\u5BC6\u94A5\u548C\u6A21\u578B\u540D\u3002\u60F3\u79BB\u7EBF\u5C31\u5207\u6210\u672C\u5730\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u7528"),n.default.createElement("select",{value:Ve,onChange:a=>Ct(a.target.value)},n.default.createElement("option",{value:"dsh"},"DSH \u5F53\u524D\u6A21\u578B"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u79BB\u7EBF\uFF09"),n.default.createElement("option",{value:"api"},"\u81EA\u5B9A\u4E49 API"))),Ve==="dsh"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},te?.dshReady?te.dshLabel:"DSH \u91CC\u8FD8\u6CA1\u6709\u9009\u6A21\u578B")),Ve==="local"&&n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u672C\u5730\u6A21\u578B"),n.default.createElement("span",{className:"settings-status"},te?.localReady?`${te.localModel}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u8FD8\u6CA1\u4E0B\u8F7D\u672C\u5730\u7FFB\u8BD1\u6A21\u578B")),(Ve==="api"||b==="api")&&n.default.createElement(n.default.Fragment,null,n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Ut,onChange:a=>Rt(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),pt||!yt.length?n.default.createElement("input",{value:Ue,onChange:a=>Bt(a.target.value),placeholder:"deepseek-chat"}):n.default.createElement("select",{value:yt.includes(Ue)?Ue:Ue?"__saved":"",onChange:a=>Bt(a.target.value)},!yt.includes(Ue)&&Ue&&n.default.createElement("option",{value:"__saved"},Ue,"\uFF08\u5F53\u524D\uFF0C\u5217\u8868\u91CC\u6CA1\u6709\uFF09"),yt.map(a=>n.default.createElement("option",{key:a,value:a},a))),n.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:()=>ht(),disabled:kt},kt?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u6A21\u578B\u5217\u8868")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:wt,onChange:a=>mt(a.target.value),placeholder:te?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${te.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."})))),n.default.createElement("div",{className:"settings-actions"},(Ve==="api"||b==="api")&&n.default.createElement("button",{className:"settings-btn",onClick:_t,disabled:Pe==="api"},Pe==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},Ve==="dsh"?"\u8DDF\u968F DSH \u7684\u6A21\u578B\u9009\u62E9\uFF0C\u6362\u6A21\u578B\u5728 DSH \u8BBE\u7F6E\u91CC\u6539":Ve==="local"?"\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1":"\u8D70\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5BC6\u94A5"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:C.showSidebarPanel,onChange:a=>P({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Mo,disabled:Pe==="ui"},Pe==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:`settings-card collapsible ${H?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>Ze("modelsOpen",H,D),"aria-expanded":H,title:H?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("span",{className:"card-badge"},ko),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),H?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},ia(F),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),F?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:F.dir},F.dir),n.default.createElement("span",{className:"model-path-size"},pa(F)," \xB7 \u5171 ",tt(F.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:ae,onChange:a=>Ce(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:ve||ae.trim()===F.dir,onClick:()=>Vt(ae,!0)},ve?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:zo},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),F.projectDir&&F.dir!==F.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:ve,onClick:()=>Vt(F.projectDir,!0)},la(F)):null,F.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:ve,onClick:()=>Vt("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),z.length?n.default.createElement("ul",{className:"model-list"},z.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",tt(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||Pe===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>Be(a.name)},Pe===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:gt,onChange:a=>bo(a.target.value)},(Co.length?Co:de).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},ee?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:no,onChange:a=>ge(a.target.value)},(lo.length?lo:de).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},te?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:io,disabled:Pe==="models"},Pe==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},I?.current?`v${I.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},I?.latest?`v${I.latest}`:I?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},I?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":I?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${I.error}\uFF09\u3002`:I?.latest?I?.current&&I?.latest&&I.current!==I.latest&&I.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:$o,disabled:He},He?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),I?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(I.checkedAt).toLocaleString()):null))))}function da({size:r=16}){return it.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},it.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),it.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),it.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),it.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),it.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ca(){let r=Xo();return it.default.createElement("div",{className:"podwave-root","data-pw-theme":r},it.default.createElement("style",null,_o),it.default.createElement(xn,null))}function ua(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},ca)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},bn));let i=null,s="podwave-hide-nav",p=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},u=g=>{if(p(!g),g&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},da);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>u(g?.showSidebarPanel!==!1)).catch(()=>u(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{u(g?.detail?.showSidebarPanel!==!1)})}var ma=["slots"];

return module.exports}})
