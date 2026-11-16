window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var un=Object.create;var Kt=Object.defineProperty;var mn=Object.getOwnPropertyDescriptor;var vn=Object.getOwnPropertyNames;var gn=Object.getPrototypeOf,fn=Object.prototype.hasOwnProperty;var hn=(r,i)=>{for(var s in i)Kt(r,s,{get:i[s],enumerable:!0})},Po=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of vn(i))!fn.call(r,v)&&v!==s&&Kt(r,v,{get:()=>i[v],enumerable:!(c=mn(i,v))||c.enumerable});return r};var ut=(r,i,s)=>(s=r!=null?un(gn(r)):{},Po(i||!r||!r.__esModule?Kt(s,"default",{value:r,enumerable:!0}):s,r)),xn=r=>Po(Kt({},"__esModule",{value:!0}),r);var An={};hn(An,{apply:()=>En,inject:()=>jn});module.exports=xn(An);var Oe=ut(require("react"),1);var qt=`
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
.podwave-root .batch-bar span { margin-right: auto; }
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
`;var e=ut(require("react"),1);var N=ut(require("react"),1);function G({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),N.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),N.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),N.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return N.default.createElement("svg",{...s},N.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),N.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),N.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),N.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),N.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),N.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),N.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),N.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var ao=ut(require("react"),1);function Le(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function no(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function ro(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Do(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Ht(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var wn="/podwave/api";function kt({item:r,size:i=44,className:s=""}){let c={width:i,height:i};return r&&r.hasCover?ao.default.createElement("img",{className:`cover ${s}`,style:c,src:`${wn}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):ao.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},Do(r&&r.title))}var m=ut(require("react"),1);var Io="/podwave/api";function Jt({transcript:r,status:i,progress:s,stage:c,chunks:v,queued:g,elapsed:f,error:P,position:M,onSeek:D,onClose:U,onStart:ae,onCancel:j,target:Q,job:h,onChangeTarget:se,onTranslate:J,onOpenSettings:V,inline:Se=!1,editingId:de=null,draft:xe="",onDraftChange:$e,onEditLine:Z,onSaveLine:_,onCancelEdit:ce,onSplitLine:x,onMergeLine:ue,onUndo:me,onValidate:te,issues:ve=[]}){let z=(0,m.useRef)(null),ie=(0,m.useRef)(null),we=r?.lines?.findIndex(w=>M>=w.start&&M<w.end)??-1;(0,m.useEffect)(()=>{if(we<0||!z.current)return;z.current.querySelector(`[data-seg="${we}"]`)?.scrollIntoView({block:"nearest"})},[we]);let ye=i==="queued"||i==="running";return m.default.createElement("section",{className:`transcript-panel ${Se?"inline":""}`},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),r?m.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:Q,onChange:w=>se(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),m.default.createElement("button",{className:"mini-link",onClick:V},"\u8BBE\u7F6E"),r?m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{className:"mini-link",onClick:me,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),m.default.createElement("button",{className:"mini-link",onClick:te,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),m.default.createElement("a",{className:"mini-link",href:`${Io}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),m.default.createElement("a",{className:"mini-link",href:`${Io}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Se?null:m.default.createElement("button",{className:"transcript-close",onClick:U,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:z},r&&ye?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),j?m.default.createElement("button",{className:"seg-tool",onClick:j},"\u53D6\u6D88"):null):null,r&&ve?.length?m.default.createElement("div",{className:"tr-issues"},ve.slice(0,5).map(w=>m.default.createElement("div",{key:w},"\xB7 ",w)),ve.length>5?m.default.createElement("div",null,"\u2026\u5171 ",ve.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?m.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C",J?m.default.createElement("button",{className:"seg-tool",onClick:J},"\u91CD\u8BD5"):null):null,h?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C",J?m.default.createElement("button",{className:"seg-tool",onClick:J},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,h?.status==="none"&&Q&&r&&(h.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09",J?m.default.createElement("button",{className:"seg-tool",onClick:J},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((w,oe)=>m.default.createElement("div",{key:w.id,"data-seg":oe,className:`seg-row ${oe===we?"active":""} ${de===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Le(w.start)}`,onClick:()=>D(w.start),onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),D(w.start))}},m.default.createElement("span",{className:"seg-time"},Le(w.start)),de===w.id?m.default.createElement("span",{className:"seg-edit",onClick:T=>T.stopPropagation()},m.default.createElement("textarea",{ref:ie,value:xe,rows:Math.min(4,Math.max(2,Math.ceil((xe.length||1)/40))),onChange:T=>$e(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&_(w.id),T.key==="Escape"&&ce()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>_(w.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>x(w.id,ie.current?.selectionStart??Math.floor(xe.length/2))},"\u62C6\u5206"),m.default.createElement("button",{className:"seg-tool",onClick:ce},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,w.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},r.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[Q]?m.default.createElement("span",{className:"seg-trans"},w.translations[Q]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:T=>{T.stopPropagation(),Z(w)}},"\u270E"),oe<r.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:T=>{T.stopPropagation(),ue(w.id)}},"\u21E3"):null)))):ye?m.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),j?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:j},"\u53D6\u6D88\u8F6C\u5199"):null):P?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},P),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:ae},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:ae},"\u5F00\u59CB\u8F6C\u5199"))))}var l=ut(require("react"),1),re="/podwave/api";async function Pe(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Nt(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function Eo(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function jo(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function so({onPlay:r,currentId:i}){let[s,c]=(0,l.useState)(null),[v,g]=(0,l.useState)(""),[f,P]=(0,l.useState)(""),[M,D]=(0,l.useState)(""),[U,ae]=(0,l.useState)(""),[j,Q]=(0,l.useState)(0),[h,se]=(0,l.useState)(!1),[J,V]=(0,l.useState)(""),[Se,de]=(0,l.useState)(""),[xe,$e]=(0,l.useState)([]),[Z,_]=(0,l.useState)(!1),[ce,x]=(0,l.useState)(null),[ue,me]=(0,l.useState)([]),[te,ve]=(0,l.useState)(null),[z,ie]=(0,l.useState)(!1),[we,ye]=(0,l.useState)(""),[w,oe]=(0,l.useState)(null),[T,A]=(0,l.useState)(!1),[C,Be]=(0,l.useState)(null),[Ue,Ve]=(0,l.useState)(!1),R=(0,l.useCallback)(async(d=!1)=>{_(!0);try{let S=await Pe(`${re}/xyz/subscriptions${d?"?refresh=1":""}`);$e(S.items||[])}catch(S){q(S)}finally{_(!1)}},[]);function q(d){let S=String(d?.message||"");if(S.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||S.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(De=>({...De||{},loggedIn:!1})),$e([]),x(null),me([]),V(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(ge(S))}function ge(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function Ze(){try{await Nt(`${re}/xyz/open-web`,{})}catch(d){q(d)}}(0,l.useEffect)(()=>{Pe(`${re}/xyz/status`).then(d=>{c(d),d.loggedIn&&R()}).catch(d=>q(d)),Pe(`${re}/xyz/local-app`).then(d=>Be(d)).catch(()=>Be({available:!1}))},[R]),(0,l.useEffect)(()=>{if(!j)return;let d=setInterval(()=>Q(S=>Math.max(0,S-1)),1e3);return()=>clearInterval(d)},[j]);async function Fe(){if(g(""),!/^1\d{10}$/.test(M.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}P("send");try{let d=await Nt(`${re}/xyz/auth/send-code`,{phone:M.trim(),areaCode:"+86"});Q(60),d.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){q(d)}finally{P("")}}async function Me(){if(g(""),!M.trim()||!U.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}P("login");try{await Nt(`${re}/xyz/auth/login`,{phone:M.trim(),code:U.trim(),areaCode:"+86"});let d=await Pe(`${re}/xyz/status`);c(d),await R()}catch(d){q(d)}finally{P("")}}async function tt(){if(g(""),!J.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}P("token");try{await Nt(`${re}/xyz/auth/token`,{refreshToken:J.trim(),deviceId:Se.trim()});let d=await Pe(`${re}/xyz/status`);c(d),V(""),await R()}catch(d){q(d)}finally{P("")}}async function We(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");V(d.trim())}catch(d){g(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function ot(){g(""),P("app");try{await Nt(`${re}/xyz/auth/from-app`,{});let d=await Pe(`${re}/xyz/status`);c(d),await R(!0)}catch(d){q(d)}finally{Pe(`${re}/xyz/local-app`).then(d=>Be(d)).catch(()=>{}),P("")}}async function Ke(){P("logout");try{await Nt(`${re}/xyz/auth/logout`,{}),c({loggedIn:!1}),$e([]),x(null),me([])}catch(d){q(d)}finally{P("")}}async function nt(d){x(d),me([]),ve(null),ie(!0),g("");try{let S=await Pe(`${re}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);me(S.items||[]),ve(S.loadMoreKey||null)}catch(S){q(S)}finally{ie(!1)}}async function rt(){if(!(!ce||!te||z)){ie(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:te}),S=await Pe(`${re}/xyz/podcast/${encodeURIComponent(ce.pid)}/episodes?${d}`);me(De=>[...De,...S.items||[]]),ve(S.loadMoreKey||null)}catch(d){q(d)}finally{ie(!1)}}}async function L(d){P(`play:${d.eid}`),g("");try{await r(d)}catch(S){q(S)}finally{P("")}}async function be(){if(g(""),!we.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}A(!0);try{let d=we.trim();if(/\/episode\//i.test(d)){let S=await Pe(`${re}/xyz/public/episode?url=${encodeURIComponent(d)}`);oe({pid:S.podcast.pid,title:S.podcast.title,author:S.podcast.author,episodes:[S.episode]})}else{let S=await Pe(`${re}/xyz/public/podcast?url=${encodeURIComponent(d)}`);oe(S.podcast)}}catch(d){q(d)}finally{A(!1)}}async function ee(d){P(`pplay:${d.eid}`),g("");try{await r({...d,public:!0})}catch(S){q(S)}finally{P("")}}return s?s.loggedIn?ce?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{x(null),me([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},ce.title)),z&&ue.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},ue.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},jo(d.pubDate)," \xB7 ",Eo(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${d.eid}`,onClick:()=>L(d)},f===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!z&&ue.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,te?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:z,onClick:rt},z?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:Z,onClick:()=>R(!0)},Z?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:Ke},"\u9000\u51FA\u767B\u5F55"))),Z?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},xe.map(d=>l.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>nt(d)},d.cover?l.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},d.title),l.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!Z&&xe.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn primary",disabled:f==="app",onClick:ot},f==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),l.default.createElement("p",{className:"xyz-hint"},C===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":C.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${C.deviceId?`\uFF08\u8BBE\u5907 ${C.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${C.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),l.default.createElement("button",{className:"xyz-link",onClick:()=>Ve(d=>!d)},Ue?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),Ue?l.default.createElement(l.default.Fragment,null,l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:Ze},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:J,onChange:d=>V(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:We},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Se,onChange:d=>de(d.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:tt},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>se(d=>!d)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:M,onChange:d=>D(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||j>0,onClick:Fe},j>0?`${j}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:U,onChange:d=>ae(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:Me},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:we,onChange:d=>ye(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:T,onClick:be},T?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),w?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},w.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",w.author)),w.episodes.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},jo(d.pubDate)," \xB7 ",Eo(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${d.eid}`,onClick:()=>ee(d)},f===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?l.default.createElement("p",{className:"xyz-error"},v):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function io(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function Ao(r,i){let s=io(i),c=s?`${s}/`:"",v=new Map;for(let g of r){let f=io(g?.rel);if(!f||c&&!f.startsWith(c))continue;let M=f.slice(c.length).split("/")[0];if(!M)continue;let D=c?`${c}${M}`:M,U=v.get(D)||{rel:D,name:M,count:0};U.count+=1,v.set(D,U)}return[...v.values()].sort((g,f)=>g.name.localeCompare(f.name,"zh-Hans-CN"))}function Lo(r,i){let s=[{rel:"",label:r}],c=io(i);if(!c)return s;let v="";for(let g of c.split("/").filter(Boolean))v=v?`${v}/${g}`:g,s.push({rel:v,label:g});return s}function Oo(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var y="/podwave/api",yn=[.5,.75,1,1.25,1.5,1.75,2];async function fe(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function pe(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}function kn({onSubmit:r,onPick:i,onClose:s}){let[c,v]=(0,e.useState)(""),[g,f]=(0,e.useState)(!1),[P,M]=(0,e.useState)(!1),[D,U]=(0,e.useState)(""),ae=(0,e.useRef)(null);return(0,e.useEffect)(()=>{ae.current?.focus();let h=se=>{se.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!c.trim()||g)){f(!0),U("");try{await r(c.trim()),s()}catch(se){U(se.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!P){M(!0),U("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),s())}catch(h){U(h.message)}finally{M(!1)}}},disabled:P,autoFocus:!0},P?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:ae,value:c,onChange:h=>v(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),D?e.default.createElement("div",{className:"dialog-error"},D):null))}function Nn({config:r,onClose:i,onSave:s}){let[c,v]=(0,e.useState)(r?.provider||"api"),[g,f]=(0,e.useState)(""),[P,M]=(0,e.useState)(!1),[D,U]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:j=>{j.target===j.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async j=>{j.preventDefault(),M(!0),U("");try{await s({provider:c,apiKey:g||void 0})}catch(Q){U(Q.message),M(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:j=>v(j.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:j=>f(j.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),D?e.default.createElement("div",{className:"dialog-error"},D):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:P},"\u4FDD\u5B58"))))}function lo(){let[r,i]=(0,e.useState)([]),[s,c]=(0,e.useState)([]),[v,g]=(0,e.useState)({}),[f,P]=(0,e.useState)({running:!1}),[M,D]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[U,ae]=(0,e.useState)(!1),[j,Q]=(0,e.useState)(!1),[h,se]=(0,e.useState)(0),[J,V]=(0,e.useState)(0),[Se,de]=(0,e.useState)(0),[xe,$e]=(0,e.useState)(!1),[Z,_]=(0,e.useState)(""),[ce,x]=(0,e.useState)([]),[ue,me]=(0,e.useState)("recent"),[te,ve]=(0,e.useState)("all"),[z,ie]=(0,e.useState)(""),[we,ye]=(0,e.useState)(""),[w,oe]=(0,e.useState)("all"),[T,A]=(0,e.useState)(null),[C,Be]=(0,e.useState)(null),[Ue,Ve]=(0,e.useState)(!1),[R,q]=(0,e.useState)(0),[ge,Ze]=(0,e.useState)(0),[Fe,Me]=(0,e.useState)(!0),[tt,We]=(0,e.useState)(!1),[ot,Ke]=(0,e.useState)(""),[nt,rt]=(0,e.useState)(""),[L,be]=(0,e.useState)(null),[ee,d]=(0,e.useState)("none"),[S,De]=(0,e.useState)(0),[$t,Y]=(0,e.useState)(""),[ne,Xe]=(0,e.useState)(!1),[Tt,zt]=(0,e.useState)(null),[$,Pt]=(0,e.useState)(""),[Ie,qe]=(0,e.useState)({status:"none"}),[Wt,mt]=(0,e.useState)(!1),[W,Dt]=(0,e.useState)(!1),[It,Ct]=(0,e.useState)(!1),[Ee,Et]=(0,e.useState)(null),[Ge,jt]=(0,e.useState)(!1),[Ye,At]=(0,e.useState)([]),[Qe,vt]=(0,e.useState)(!1),[ze,He]=(0,e.useState)([]),[_e,at]=(0,e.useState)(null),[st,a]=(0,e.useState)(""),[k,O]=(0,e.useState)([]),H=(0,e.useRef)(null),le=(0,e.useRef)(""),gt=(0,e.useRef)(null),I=(0,e.useRef)(null),ke=(0,e.useRef)(0),ft=(0,e.useRef)(M),it=(0,e.useRef)(0),co=(0,e.useRef)(0),uo=(0,e.useRef)(0),mo=(0,e.useRef)(0),Uo=(0,e.useRef)(!1),Xt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{Q(!1)},[T]),(0,e.useEffect)(()=>{ft.current=M},[M]),(0,e.useEffect)(()=>{I.current=C},[C]),(0,e.useEffect)(()=>{ke.current=ge},[ge]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let n=await fe(`${y}/ui-settings`);!t&&n&&Dt(!!n.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let vo=(0,e.useCallback)(()=>{Dt(t=>{let n=!t;return fetch(`${y}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:n})}).catch(()=>{}),n})},[]),b=(0,e.useCallback)(t=>{rt(t),window.clearTimeout(mo.current),mo.current=window.setTimeout(()=>rt(""),2600)},[]),je=(0,e.useCallback)(async()=>{let t=await fe(`${y}/episodes`);return i(t.items||[]),c(t.folders||[]),g(t.progress||{}),P(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let n=await fe(`${y}/health`).catch(()=>({}));n.mediaBase&&(le.current=n.mediaBase);let p=await fe(`${y}/state`);if(t)return;D(p.settings),c(p.folders||[]);let u=await je();if(t)return;let B=p.settings?.lastEpisodeId,F=B?(u.items||[]).find(dt=>dt.id===B):null;if(F){Be(F),Ze(F.duration||0);let dt=u.progress?.[F.id]?.position||0;it.current=dt>5?dt:0,q(it.current);let ct=H.current;ct&&(ct.src=le.current?`${le.current}/episodes/${F.id}/audio`:`${y}/episodes/${F.id}/audio`,ct.load(),ct.playbackRate=p.settings?.rate||1,ct.volume=p.settings?.volume??.9)}Me(!1),Uo.current=!0}catch(n){t||(Ke(n.message),Me(!1))}})(),()=>{t=!0}},[je]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{je().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,je]),(0,e.useEffect)(()=>{let t=!1;return be(null),Y(""),De(0),C?.id?((async()=>{try{let n=await fe(`${y}/episodes/${C.id}/transcript`);if(t)return;d(n.status),Et(n.status==="queued"||n.status==="running"?n:null),n.status==="done"&&n.transcript?be(n.transcript):n.status==="queued"||n.status==="running"?(De(n.elapsedMs||0),n.transcript&&be(n.transcript)):n.status==="error"&&Y(n.error||"\u8F6C\u5199\u5931\u8D25")}catch(n){t||Y(n.message)}})(),()=>{t=!0}):(d("none"),()=>{t=!0})},[C?.id]),(0,e.useEffect)(()=>{fe(`${y}/translate/settings`).then(zt).catch(()=>{})},[]),(0,e.useEffect)(()=>{let t=!1,n=C?.id;return!n||!$?(qe({status:"none"}),()=>{t=!0}):((async()=>{try{let p=await fe(`${y}/episodes/${n}/translate?target=${$}`);t||qe(p)}catch{t||qe({status:"none"})}})(),()=>{t=!0})},[C?.id,$]),(0,e.useEffect)(()=>{if(ee!=="queued"&&ee!=="running")return;let t=!1,n=setInterval(async()=>{let p=I.current?.id;if(p)try{let u=await fe(`${y}/episodes/${p}/transcript`);if(t)return;d(u.status),Et(u.status==="queued"||u.status==="running"?u:null),De(u.elapsedMs||0),(u.status==="queued"||u.status==="running")&&u.transcript?be(u.transcript):u.status==="done"&&u.transcript?(be(u.transcript),Xe(!0),b("\u8F6C\u5199\u5B8C\u6210")):u.status==="error"&&Y(u.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(n)}},[ee,b]),(0,e.useEffect)(()=>{if(Ie.status!=="running"&&Ie.status!=="queued")return;let t=!1,n=async u=>{let B=await fe(`${y}/episodes/${u}/translate?target=${$}`);if(!t){qe(B),B.status==="done"&&b("\u7FFB\u8BD1\u5B8C\u6210");try{let F=await fe(`${y}/episodes/${u}/transcript`);!t&&F.transcript&&be(F.transcript)}catch{}}},p=setInterval(()=>{let u=I.current?.id;u&&n(u).catch(()=>{})},2e3);return()=>{t=!0,clearInterval(p)}},[Ie.status,$,b]),(0,e.useEffect)(()=>{let t=!1,n=async()=>{try{let u=await fe(`${y}/jobs`);t||At(u.items||[])}catch{}};n();let p=setInterval(n,Ge?2500:2e4);return()=>{t=!0,clearInterval(p)}},[Ge]);let lt=(0,e.useCallback)((t,n,p,u=!1)=>{if(!t)return;let B=Date.now();!u&&B-uo.current<4e3||(uo.current=B,pe(`${y}/progress/${t}`,"PUT",{position:n,duration:p}).catch(()=>{}),g(F=>({...F,[t]:{position:n,duration:p,updatedAt:B}})))},[]),Re=(0,e.useCallback)(t=>{D(n=>({...n,...t})),pe(`${y}/settings`,"PATCH",t).catch(()=>{})},[]),St=(0,e.useCallback)(async()=>{if(I.current){Y(""),Xe(!0);try{let t=await pe(`${y}/episodes/${I.current.id}/transcribe`,"POST",{});d(t.status||"queued")}catch(t){Y(t.message)}}},[]),Fo=(0,e.useCallback)(()=>{if(L){Xe(t=>!t);return}if(ee==="queued"||ee==="running"){Xe(!0);return}St()},[L,ee,St]),Gt=(0,e.useCallback)(async()=>{if(I.current)try{await pe(`${y}/episodes/${I.current.id}/transcribe/cancel`,"POST",{}),b("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){Y(t.message)}},[b]),Yt=(0,e.useCallback)(async(t,n)=>{try{if(n==="cancel"){let u=await pe(`${y}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{});u?.status==="none"?b("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):b(u?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else n==="retry"?await pe(`${y}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):n==="clear"&&await pe(`${y}/jobs`,"DELETE",{key:t.key})}catch(u){b(`\u64CD\u4F5C\u5931\u8D25\uFF1A${u.message}`)}let p=await fe(`${y}/jobs`).catch(()=>({items:[]}));At(p.items||[])},[b]),Lt=(0,e.useCallback)(async t=>{let n=[...new Set(t)];if(n.length)try{let p=await pe(`${y}/transcribe/batch`,"POST",{ids:n});b(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),He([]),vt(!1)}catch(p){b(p.message)}},[b]),Ko=(0,e.useCallback)(t=>{He(n=>n.includes(t)?n.filter(p=>p!==t):[...n,t])},[]),et=(0,e.useCallback)(async(t,n,p)=>{try{let u=await pe(`${y}${t}`,n,p||{});return u?.transcript&&be(u.transcript),u}catch(u){return b(u.message),null}},[b]),go=(0,e.useCallback)(t=>{at(t.id),a(t.text),O([])},[]),fo=(0,e.useCallback)(async t=>{if(!L)return;await et(`/episodes/${L.id}/transcript/lines/${t??_e}`,"PUT",{text:st})&&(at(null),b("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[L,_e,st,et,b]),ho=(0,e.useCallback)(async(t,n)=>{if(!L)return;await et(`/episodes/${L.id}/transcript/lines/${t??_e}/split`,"POST",{offset:n})&&(at(null),b("\u5DF2\u62C6\u6210\u4E24\u884C"))},[L,_e,et,b]),xo=(0,e.useCallback)(async t=>{if(!L)return;await et(`/episodes/${L.id}/transcript/lines/${t}/merge`,"POST",{})&&b("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[L,et,b]),bo=(0,e.useCallback)(async()=>{if(!L)return;await et(`/episodes/${L.id}/transcript/undo`,"POST",{})&&b("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[L,et,b]),wo=(0,e.useCallback)(async()=>{if(L)try{let t=await fe(`${y}/episodes/${L.id}/transcript/validate`);O(t.issues||[]),b(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){b(t.message)}},[L,b]),yo=(0,e.useCallback)(async()=>{let t=I.current?.id;if(!t)return;let n=await fe(`${y}/episodes/${t}/transcript`);n.transcript&&be(n.transcript)},[]),ko=(0,e.useCallback)(async()=>{let t=I.current?.id,n=$;if(!(!t||!n)&&!(Ie.status==="running"||Ie.status==="queued")){qe({status:"running"});try{let p=await pe(`${y}/episodes/${t}/translate`,"POST",{target:n});qe(p),p.status==="done"&&(await yo(),b("\u7FFB\u8BD1\u5B8C\u6210"))}catch(p){qe(u=>({...u,status:"error",error:p.message}))}}},[$,Ie.status,yo,b]),No=(0,e.useCallback)(t=>{Pt(t||"")},[]),qo=async()=>{if(K?.eid)try{await fetch(`${y}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${K.eid}`})})}catch{b("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Ho=t=>{let n=!t.favorite;i(p=>p.map(u=>u.id===t.id?{...u,favorite:n}:u)),pe(`${y}/episodes/${t.id}/favorite`,"PUT",{favorite:n}).catch(p=>b(p.message))},$o=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let n of t)try{await fetch(`${y}/episodes/${n}`,{method:"DELETE"})}catch{}i(n=>n.filter(p=>!t.includes(p.id))),He([]),t.includes(T)&&A(null),b(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ce=(0,e.useMemo)(()=>{let t=[...r];return ue==="title"?t.sort((n,p)=>n.title.localeCompare(p.title,"zh-Hans-CN")):ue==="duration"?t.sort((n,p)=>(p.duration||0)-(n.duration||0)):t.sort((n,p)=>p.mtime-n.mtime),t},[r,ue]),ht=z?we:"",zo=(0,e.useMemo)(()=>z?r.filter(t=>t.root===z):[],[r,z]),xt=(0,e.useMemo)(()=>z?Ao(zo,ht):[],[zo,z,ht]),Ae=(0,e.useMemo)(()=>{let t=Z.trim().toLowerCase();return Ce.filter(n=>{if(z&&n.root!==z||z&&(n.rel||"")!==ht||t&&!`${n.title} ${n.artist} ${n.album}`.toLowerCase().includes(t))return!1;let u=v[n.id]?.position||0,B=n.duration||0,F=B?u/B:0;return te==="inprogress"?u>5&&F<.97:te==="finished"?F>=.97:w==="unheard"?u<=5:w==="transcribed"?!!n.hasTranscript:w==="favorites"?!!n.favorite:!0})},[Ce,Z,te,w,v,z,ht]),Co=(0,e.useMemo)(()=>Ye.filter(t=>t.status==="queued"||t.status==="running"),[Ye]),bt=(0,e.useMemo)(()=>Ae.filter(t=>!t.hasTranscript),[Ae]),Qt=(0,e.useMemo)(()=>r.filter(t=>{let n=v[t.id];return!n||!n.position||n.position<5?!1:t.duration?n.position/t.duration<.97:!0}).sort((t,n)=>(v[n.id]?.updatedAt||0)-(v[t.id]?.updatedAt||0)).slice(0,4),[r,v]),Jo=(0,e.useMemo)(()=>r.reduce((t,n)=>t+(n.duration||0),0),[r]),Vo=Math.round(Jo/3600*10)/10,wt=(0,e.useMemo)(()=>z?Lo(Ht(z),ht):[],[z,ht]),Zo=z?wt.length>1?wt[wt.length-1].label:Ht(z):te==="inprogress"?"\u7EE7\u7EED\u6536\u542C":te==="finished"?"\u5DF2\u64AD\u5B8C":te==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",K=T?r.find(t=>t.id===T)||(C?.id===T?C:null):null,Wo=Fe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":z?`${Ae.length} \u96C6${xt.length?` \xB7 ${xt.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${Ae.length} \u96C6 \xB7 \u5171 ${Vo} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Ln=(0,e.useMemo)(()=>C?Ce.findIndex(t=>t.id===C.id):-1,[Ce,C]),yt=(0,e.useCallback)(()=>{let t=H.current;if(t){if(!I.current){let n=Ae[0]||Ce[0];n&&pt(n,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[Ae,Ce]),pt=(0,e.useCallback)((t,n=!0)=>{let p=H.current;if(!p||!t)return;if(I.current&&I.current.id===t.id){n&&yt();return}I.current&&!p.ended&&p.currentTime>1&&lt(I.current.id,p.currentTime,p.duration||ke.current,!0),I.current=t,Be(t),A(F=>F&&t.id),Ze(t.duration||0);let u=v[t.id]?.position||0,B=u>5&&(!t.duration||u<t.duration-10)?u:0;it.current=B,q(B),t.source==="xyz"?p.src=le.current?`${le.current}/xyz/${t.id.slice(3)}/audio`:`${y}/episodes/${t.id}/audio`:p.src=le.current?`${le.current}/episodes/${t.id}/audio`:`${y}/episodes/${t.id}/audio`,p.load(),p.playbackRate=ft.current.rate||1,p.volume=ft.current.volume??.9,n&&p.play().catch(()=>{}),Re({lastEpisodeId:t.id})},[v,lt,Re,yt]),Xo=(0,e.useCallback)(async t=>{let n=t.public?`${y}/xyz/public/play`:`${y}/xyz/episodes/${encodeURIComponent(t.eid)}/play`,p=t.public?{pid:t.pid,eid:t.eid}:{},u=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),B=await u.json().catch(()=>({}));if(!u.ok)throw new Error(B.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await je(),pt(B.item,!0)},[je,pt]);(0,e.useEffect)(()=>{let t=Z.trim();if(t.length<2){x([]);return}let n=window.setTimeout(()=>{fe(`${y}/search?q=${encodeURIComponent(t)}`).then(p=>x(Array.isArray(p.items)?p.items:[])).catch(()=>x([]))},250);return()=>window.clearTimeout(n)},[Z]);let Ot=(0,e.useCallback)((t,n=!0)=>{t&&(pt(t,n),A(t.id))},[pt]),Te=(0,e.useCallback)(t=>{let n=H.current;if(!n||!I.current)return;let p=Number(t);if(!Number.isFinite(p))return;let u=Number(ke.current)||0,B=Number.isFinite(n.duration)&&n.duration>0?n.duration:u,F=Math.max(0,B>0?Math.min(p,B):p);try{n.currentTime=F}catch{it.current=F;return}q(F),lt(I.current.id,F,B||u,!0)},[lt]),Go=(0,e.useCallback)(t=>{let n=r.find(p=>p.id===t.episodeId);if(n){if(I.current?.id===t.episodeId){Te(t.start),A(n.id);return}it.current=t.start,Ot(n,!1)}},[r,Ot,Te]),So=(0,e.useCallback)(t=>{let n=gt.current;if(!n)return null;let p=n.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(t.clientX-p.left)/p.width)):null},[]),Bt=(0,e.useCallback)(t=>{let n=So(t),p=Number.isFinite(ke.current)&&ke.current>0?ke.current:Number.isFinite(H.current?.duration)?H.current.duration:0;n==null||!p||Te(n*p)},[So,Te]),Yo=(0,e.useCallback)(t=>{t.preventDefault(),Xt.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}Bt(t)},[Bt]),Qo=(0,e.useCallback)(t=>{Xt.current&&Bt(t)},[Bt]),Mo=(0,e.useCallback)(t=>{Xt.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),_o=(0,e.useCallback)(t=>{let n=H.current;if(!n)return;let p=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),Te((n.currentTime||0)-p)),t.key==="ArrowRight"&&(t.preventDefault(),Te((n.currentTime||0)+p)),t.key==="Home"&&(t.preventDefault(),Te(0)),t.key==="End"&&(t.preventDefault(),Te(Number.isFinite(n.duration)?n.duration:0))},[Te]),Mt=(0,e.useCallback)(t=>{let n=H.current;if(!n||!I.current)return;let p=Math.max(0,Math.min((n.currentTime||0)+t,(n.duration||ke.current||0)-1));n.currentTime=p,q(p)},[]),_t=(0,e.useCallback)(t=>{if(!Ce.length)return;let p=((I.current?Ce.findIndex(u=>u.id===I.current.id):-1)+t+Ce.length)%Ce.length;pt(Ce[p],!0)},[Ce,pt]),Ro=(0,e.useCallback)(t=>{let n=H.current;n&&(n.playbackRate=t),Re({rate:t}),ae(!1)},[Re]);(0,e.useEffect)(()=>{if(!U)return;let t=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".rate-wrap")||ae(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[U]),(0,e.useEffect)(()=>{if(!J)return;let t=()=>{let p=Math.max(0,Math.round((J-Date.now())/1e3));if(de(p),p<=0){let u=H.current;u&&!u.paused&&u.pause(),V(0),se(0),b("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};t();let n=window.setInterval(t,1e3);return()=>window.clearInterval(n)},[J,b]),(0,e.useEffect)(()=>{if(!xe)return;let t=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".sleep-wrap")||$e(!1)};return document.addEventListener("pointerdown",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}},[xe]);let Rt=(0,e.useCallback)(t=>{if($e(!1),t==="off"){V(0),se(0),de(0);return}if(t==="end"){V(0),se(-1),de(0),b("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}se(t),V(Date.now()+t*6e4),b(`\u5C06\u5728 ${t} \u5206\u949F\u540E\u6682\u505C`)},[b]),Ut=(0,e.useCallback)(t=>{let n=Math.max(0,Math.min(1,t)),p=H.current;p&&(p.volume=n),Re({volume:n})},[Re]),en=(0,e.useCallback)(()=>{let t=H.current,n=ft.current.volume>0?0:.9;t&&(t.volume=n),Re({volume:n})},[Re]),tn=()=>{let t=H.current;if(!t||!I.current)return;let n=performance.now();n-(co.current||0)<400||(co.current=n,q(t.currentTime),lt(I.current.id,t.currentTime,t.duration||ke.current))},on=()=>{let t=H.current,n=I.current;if(!t||!n)return;let p=Number.isFinite(t.duration)?t.duration:n.duration||0;Ze(p);let u=it.current;it.current=0,u>0&&u<p-1&&(t.currentTime=u,q(u))},nn=()=>{let t=H.current;if(I.current&&lt(I.current.id,t?.duration||ke.current||0,t?.duration||ke.current||0,!0),h===-1){se(0),V(0),de(0),b("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}_t(1)},rn=async t=>{await pe(`${y}/folders`,"POST",{path:t}),await je(),b("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},an=async()=>{let t=await fetch(`${y}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(n.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return n},sn=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),It||Ct(!0))},ln=t=>{t.currentTarget.contains(t.relatedTarget)||Ct(!1)},pn=async t=>{t.preventDefault(),Ct(!1);let n=t.dataTransfer,p=[...n?.files||[]],u=p.map(X=>X.path).filter(X=>typeof X=="string"&&X),B=String(n?.getData("text/uri-list")||"").split(/\r?\n/).map(X=>X.trim()).filter(X=>X.startsWith("file://")).map(X=>decodeURIComponent(X.replace(/^file:\/\//,""))),F=[...new Set([...u,...B])];if(F.length){try{let X=await pe(`${y}/import/paths`,"POST",{paths:F});await je(),b(X.added?`\u5DF2\u6DFB\u52A0 ${X.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(X){Ke(X.message)}return}let dt=p.filter(X=>X.size>0);if(!dt.length){b("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let ct=`drop-${Date.now()}`,Ft="",oo=0;for(let X of dt)try{let To=await fetch(`${y}/import/upload?name=${encodeURIComponent(X.name)}&batch=${ct}`,{method:"POST",body:X}),cn=await To.json();To.ok&&(Ft=cn.folder||Ft,oo+=1)}catch{}if(Ft)try{await pe(`${y}/folders`,"POST",{path:Ft})}catch{}await je(),b(oo?`\u5DF2\u5BFC\u5165 ${oo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},dn=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await pe(`${y}/folders`,"DELETE",{path:t}),ie(n=>n===t?"":n),await je(),b("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(n){Ke(n.message)}};(0,e.useEffect)(()=>{let t=n=>{let p=n.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||n.metaKey||n.ctrlKey||n.altKey||(n.code==="Space"?(n.preventDefault(),yt()):n.key==="ArrowRight"?(n.preventDefault(),Mt(15)):n.key==="ArrowLeft"?(n.preventDefault(),Mt(-15)):n.key==="ArrowUp"?(n.preventDefault(),Ut(ft.current.volume+.05)):n.key==="ArrowDown"?(n.preventDefault(),Ut(ft.current.volume-.05)):n.key==="/"&&(n.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[yt,Mt,Ut]);let eo=t=>{let n=v[t.id];return!n||!t.duration?!1:n.position/t.duration>=.97},to=t=>{let n=v[t.id];return!n||!t.duration?0:Math.min(100,Math.max(0,n.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${W?"nav-collapsed":""}`,onDragOver:sn,onDragLeave:ln,onDrop:pn},It?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,W?e.default.createElement("div",{className:"nav-rail"},e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:vo},e.default.createElement(G,{name:"chevron-right",size:16}))):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(G,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.11"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:vo},e.default.createElement(G,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Qt.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(eo).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([t,n,p])=>e.default.createElement("button",{key:t,className:`nav-item ${te===t&&!z?"active":""}`,onClick:()=>{ie(""),ve(t)}},e.default.createElement("span",null,n),e.default.createElement("span",{className:"nav-count"},p||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>We(!0)},e.default.createElement(G,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(t=>e.default.createElement("li",{key:t,title:t,className:z===t?"is-active":"",role:"button",tabIndex:0,onClick:()=>{ve("all"),oe("all"),_(""),ie(n=>n===t?"":t)},onKeyDown:n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),ve("all"),oe("all"),_(""),ie(p=>p===t?"":t))}},e.default.createElement(G,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Ht(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:n=>{n.stopPropagation(),dn(t)}},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,Zo),e.default.createElement("p",{className:"subline"},Wo)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${Ge?"is-on":""}`,onClick:()=>jt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(G,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Co.length?` ${Co.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Qe?"is-on":""}`,onClick:()=>{vt(t=>!t),He([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(G,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(G,{name:"search",size:16}),e.default.createElement("input",{value:Z,onChange:t=>_(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:ue,onChange:t=>me(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Qe?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ze.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>He(Ae.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!bt.length,onClick:()=>Lt(bt.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",bt.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ze.length,onClick:()=>Lt(ze)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!ze.length,onClick:()=>$o(ze)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{He([]),vt(!1)}},"\u53D6\u6D88")):null,ot?e.default.createElement("div",{className:"banner error",onClick:()=>Ke("")},ot," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,K?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>A(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},K.artist,K.album?` \xB7 ${K.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(kt,{item:K,size:288})),e.default.createElement("h2",{className:"episode-title"},K.title),e.default.createElement("p",{className:"episode-sub"},K.artist,K.album?` \xB7 ${K.album}`:""),e.default.createElement("p",{className:"episode-path",title:K.file},K.location||K.file),e.default.createElement("p",{className:"episode-stats"},no(K.duration)," \xB7 ",ro(K.mtime)," \xB7 \u5DF2\u542C ",Math.round(to(K)),"%"),K.shownotes?e.default.createElement("div",{className:`episode-notes ${j?"is-open":""}`},e.default.createElement("button",{className:"notes-head",onClick:()=>Q(t=>!t)},"\u5355\u96C6\u4ECB\u7ECD ",j?"\u6536\u8D77":"\u5C55\u5F00"),e.default.createElement("p",{className:"notes-body"},K.shownotes)):null,e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:yt},Ue&&C?.id===K.id?"\u6682\u505C":"\u64AD\u653E"),ee==="queued"||ee==="running"?e.default.createElement("button",{className:"btn ghost",onClick:Gt},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:St},K.source==="xyz"?L?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":L?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),K.source==="xyz"?e.default.createElement("button",{className:"btn ghost",onClick:qo},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,e.default.createElement("button",{className:"btn ghost danger",onClick:()=>$o([K.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Jt,{inline:!0,transcript:L,status:ee,progress:Ee?.progress,stage:Ee?.stage,chunks:Ee?.chunks,queued:Ee?.queued,elapsed:S,editingId:_e,draft:st,onDraftChange:a,onEditLine:go,onSaveLine:fo,onCancelEdit:()=>at(null),onSplitLine:ho,onMergeLine:xo,onUndo:bo,onValidate:wo,issues:k,onCancel:Gt,error:$t,position:R,onSeek:Te,onClose:()=>A(null),onStart:St,target:$,job:Ie,onChangeTarget:No,onTranslate:ko,onOpenSettings:()=>mt(!0)})))):te==="xyz"?e.default.createElement(so,{onPlay:Xo,currentId:C?.id}):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,n])=>e.default.createElement("button",{key:t,className:`chip ${w===t?"is-on":""}`,onClick:()=>oe(t)},n))),te==="all"&&!Z&&Qt.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Qt.map(t=>{let n=to(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${C?.id===t.id?"is-current":""}`,onClick:()=>Ot(t,!0)},e.default.createElement(kt,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${n}%`}}))))}))):null,Z.trim().length>=2&&ce.length>0?e.default.createElement("section",{className:"search-hits"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),e.default.createElement("span",{className:"col-duration"},ce.length)),ce.map(t=>e.default.createElement("button",{key:`${t.episodeId}-${t.lineId}`,className:"hit-row",onClick:()=>Go(t)},e.default.createElement("span",{className:"hit-time"},Le(t.start)),e.default.createElement("span",{className:"hit-text"},t.text),e.default.createElement("span",{className:"hit-title"},t.title)))):null,z?e.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},wt.map((t,n)=>e.default.createElement("span",{key:t.rel||"root",className:"crumb-item"},n>0?e.default.createElement("span",{className:"crumb-sep"},"/"):e.default.createElement(G,{name:"folder",size:14}),e.default.createElement("button",{className:`crumb ${n===wt.length-1?"is-current":""}`,onClick:()=>ye(t.rel),disabled:n===wt.length-1},t.label)))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Fe&&z&&xt.length>0&&!Z?e.default.createElement("div",{className:"folder-rows"},xt.map(t=>e.default.createElement("button",{key:t.rel,className:"row folder-row",onClick:()=>ye(t.rel),title:t.name},e.default.createElement("span",{className:"col-index row-index"},e.default.createElement(G,{name:"folder",size:16})),e.default.createElement("span",{className:"row-main"},e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.name),e.default.createElement("span",{className:"row-meta"},t.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),e.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Fe?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Ae.length===0&&!(z&&xt.length>0&&!Z)?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":z?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${xt.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>We(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&z?e.default.createElement("button",{className:"btn",onClick:()=>ie("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):e.default.createElement("div",{className:"episode-list"},Ae.map((t,n)=>{let p=to(t),u=C?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${u?"is-current":""} ${eo(t)?"is-finished":""} ${Qe&&ze.includes(t.id)?"is-selected":""}`,onClick:()=>Qe?Ko(t.id):Ot(t,!0)},e.default.createElement("span",{className:"col-index row-index"},Qe?ze.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(G,{name:"check",size:14})):null:u&&Ue?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):n+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(kt,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",ro(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},no(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:B=>{B.stopPropagation(),Ho(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},eo(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(G,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),ne&&C&&!K?e.default.createElement(Jt,{transcript:L,status:ee,progress:Ee?.progress,stage:Ee?.stage,chunks:Ee?.chunks,queued:Ee?.queued,elapsed:S,editingId:_e,draft:st,onDraftChange:a,onEditLine:go,onSaveLine:fo,onCancelEdit:()=>at(null),onSplitLine:ho,onMergeLine:xo,onUndo:bo,onValidate:wo,issues:k,onCancel:Gt,error:$t,position:R,onSeek:Te,onClose:()=>Xe(!1),onStart:St,target:$,job:Ie,onChangeTarget:No,onTranslate:ko,onOpenSettings:()=>mt(!0)}):null,Ge?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>jt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Ye.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ye.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},Oo(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Yt(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Yt(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Yt(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!bt.length,onClick:()=>Lt(bt.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",bt.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ze.length,onClick:()=>Lt(ze)},"\u8F6C\u5199\u5DF2\u9009 ",ze.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:gt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ge||0),"aria-valuenow":Math.round(R||0),"aria-valuetext":`${Le(R)} / ${Le(ge)}`,onPointerDown:Yo,onPointerMove:Qo,onPointerUp:Mo,onPointerCancel:Mo,onKeyDown:_o},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${ge?Math.min(100,Math.max(0,R/ge*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${ge?Math.min(100,Math.max(0,R/ge*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},C?e.default.createElement("button",{className:"now-open",onClick:()=>A(C.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},e.default.createElement(kt,{item:C,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:C.title},C.title),e.default.createElement("div",{className:"now-artist"},C.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>_t(-1)},e.default.createElement(G,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Mt(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:yt,disabled:!C&&Ae.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(G,{name:Ue?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Mt(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>_t(1)},e.default.createElement(G,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${ne?"active":""}`,onClick:Fo,disabled:!C,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(G,{name:"wave",size:15}),e.default.createElement("span",null,L?"\u5B57\u5E55":ee==="queued"||ee==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Le(R)," / ",Le(ge)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>ae(t=>!t),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":U},M.rate,"\xD7"),U?e.default.createElement("span",{className:"rate-menu",role:"menu"},yn.map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":t===M.rate,className:t===M.rate?"is-on":"",onClick:()=>Ro(t)},t,"\xD7"))):null),e.default.createElement("span",{className:"sleep-wrap"},e.default.createElement("button",{className:`rate-btn sleep-btn ${J?"active":""}`,onClick:()=>$e(t=>!t),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":xe},e.default.createElement(G,{name:"moon",size:14}),J?e.default.createElement("span",{className:"sleep-left"},Le(Se)):null),xe?e.default.createElement("span",{className:"sleep-menu",role:"menu"},e.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!J&&h!==-1,className:!J&&h!==-1?"is-on":"",onClick:()=>Rt("off")},"\u5173\u95ED"),[15,30,45,60].map(t=>e.default.createElement("button",{key:t,type:"button",role:"menuitemradio","aria-checked":h===t,className:h===t?"is-on":"",onClick:()=>Rt(t)},t," \u5206\u949F")),e.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>Rt("end")},"\u672C\u96C6\u7ED3\u675F")):null),e.default.createElement("button",{className:"icon-btn",onClick:en,title:"\u9759\u97F3"},e.default.createElement(G,{name:M.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:M.volume,onChange:t=>Ut(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),tt?e.default.createElement(kn,{onClose:()=>We(!1),onSubmit:rn,onPick:an}):null,Wt?e.default.createElement(Nn,{config:Tt,onClose:()=>mt(!1),onSave:async t=>{let n=await pe(`${y}/translate/settings`,"PUT",t);zt(n),mt(!1),b("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,nt?e.default.createElement("div",{className:"toast"},nt):null,e.default.createElement("audio",{ref:H,preload:"metadata",onPlay:()=>Ve(!0),onPause:()=>{Ve(!1);let t=H.current;I.current&&t&&t.currentTime>0&&!t.ended&&lt(I.current.id,t.currentTime,t.duration||ke.current,!0)},onTimeUpdate:tn,onLoadedMetadata:on,onEnded:nn,onError:()=>{Ve(!1),b("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Vt=require("react");function $n(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function zn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=$n(i);if(s!==null)return s}return null}function Bo(){let r=zn();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function Zt(){let[r,i]=(0,Vt.useState)(Bo);return(0,Vt.useEffect)(()=>{let s=()=>i(Bo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var o=ut(require("react"),1);var E="/podwave/api";async function he(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Ne(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function Cn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Je(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Sn(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Mn(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function Tn(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function Pn(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function po(){let r=Zt(),[i,s]=(0,o.useState)([]),[c,v]=(0,o.useState)(""),[g,f]=(0,o.useState)(0),[P,M]=(0,o.useState)([]),[D,U]=(0,o.useState)(null),[ae,j]=(0,o.useState)(""),[Q,h]=(0,o.useState)(!1),[se,J]=(0,o.useState)({asrModel:"",translateModel:""}),[V,Se]=(0,o.useState)(null),[de,xe]=(0,o.useState)(null),[$e,Z]=(0,o.useState)({showSidebarPanel:!0}),[_,ce]=(0,o.useState)({mode:"copy",orphans:0,orphanBytes:0}),[x,ue]=(0,o.useState)(null),[me,te]=(0,o.useState)(null),[ve,z]=(0,o.useState)(null),[ie,we]=(0,o.useState)(!1),[ye,w]=(0,o.useState)("auto"),[oe,T]=(0,o.useState)(!1),[A,C]=(0,o.useState)(null),[Be,Ue]=(0,o.useState)(!1),[Ve,R]=(0,o.useState)(""),[q,ge]=(0,o.useState)(15),[Ze,Fe]=(0,o.useState)(!0),[Me,tt]=(0,o.useState)("api"),[We,ot]=(0,o.useState)("api"),[Ke,nt]=(0,o.useState)("https://api.deepseek.com"),[rt,L]=(0,o.useState)("deepseek-chat"),[be,ee]=(0,o.useState)(""),[d,S]=(0,o.useState)(""),[De,$t]=(0,o.useState)(""),[Y,ne]=(0,o.useState)(""),[Xe,Tt]=(0,o.useState)(""),[zt,$]=(0,o.useState)(""),Pt=(0,o.useCallback)(async()=>{try{let[a,k,O,H,le,gt,I,ke]=await Promise.all([he(`${E}/history`),he(`${E}/models`),he(`${E}/translate/settings`),he(`${E}/ui-settings`),he(`${E}/transcribe/settings`),he(`${E}/import/settings`),he(`${E}/setup`),he(`${E}/update`)]);ue(I),C(ke),I?.job?.status==="running"&&T(!0),ce({mode:gt.mode||"copy",orphans:gt.orphans||0,orphanBytes:gt.orphanBytes||0}),Z({showSidebarPanel:H?.showSidebarPanel!==!1}),R((le.hotwords||[]).join(" ")),ge(le.chunkMinutes||15),Fe(le.diarize!==!1),tt(le.provider||"api"),s(a.items||[]),v(a.dir||""),f(Number(a.bytes)||0),M(k.models||[]),U(k.storage||null),j(k.storage?.dir||""),J(k.config||{asrModel:"",translateModel:""}),Se(k.transcribe||null),S(k.config?.asrModel||""),$t(k.config?.translateModel||""),xe(O),ot(O.provider||"api"),nt(O.apiBase||"https://api.deepseek.com"),L(O.apiModel||"deepseek-chat"),ee(""),$("")}catch(a){$(a.message)}},[]);(0,o.useEffect)(()=>{Pt()},[Pt]),(0,o.useEffect)(()=>{let a=!1;return he(`${E}/setup/plan?source=${ye}&mode=${Me==="local"?"local":"basic"}`).then(k=>{a||te(k)}).catch(()=>{}),()=>{a=!0}},[ye,Me,x?.job?.status]),(0,o.useEffect)(()=>{if(!oe&&x?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let k=await he(`${E}/setup`);ue(k),k.job?.status!=="running"&&T(!1)}catch{}},2500);return()=>window.clearInterval(a)},[oe,x?.job?.status]);let Ie=async()=>{$(""),T(!0);try{await Ne(`${E}/setup/install`,"POST",{source:ye});let a=await he(`${E}/setup`);ue(a),W("\u5F00\u59CB\u5B89\u88C5")}catch(a){T(!1),$(a.message)}},qe=async()=>{try{await Ne(`${E}/history/open`,"POST",{})}catch(a){$(a.message)}},Wt=async()=>{$(""),T(!0);try{await Ne(`${E}/setup/install`,"POST",{source:ye,mode:"local"});let a=await he(`${E}/setup`);ue(a),W("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){T(!1),$(a.message)}},mt=async()=>{try{await Ne(`${E}/setup/cancel`,"POST",{}),W("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){$(a.message)}},W=a=>{Tt(a),window.setTimeout(()=>Tt(""),2400)},Dt=async()=>{we(!0);try{let a=await he(`${E}/setup/verify`);z(a),W(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){W(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{we(!1)}},It=async()=>{try{let a=await he(`${E}/setup/diagnose`),k=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(k)}catch{let O=document.createElement("textarea");O.value=k,O.style.position="fixed",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),O.remove()}W("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){W(a.message||"\u590D\u5236\u5931\u8D25")}},Ct=async()=>{ne("api"),$("");try{let a={provider:We,apiBase:Ke,apiModel:rt};be.trim()&&(a.apiKey=be.trim());let k=await Ne(`${E}/translate/settings`,"PUT",a);xe(k),ee(""),W("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{ne("")}},Ee=async()=>{ne("models"),$("");try{let a=await Ne(`${E}/models`,"PUT",{asrModel:d,translateModel:De});J(a.config),M(a.models||[]),Se(a.transcribe||null),W("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{ne("")}},Et=async()=>{try{await Ne(`${E}/models/open`,"POST",{})}catch(a){$(a.message)}},Ge=async(a,k=!0)=>{h(!0),$("");try{let O=await Ne(`${E}/models/dir`,"POST",{dir:a,move:k});U(O.storage||null),M(O.models||[]),j(O.storage?.dir||"");let H=(O.moved||[]).length,le=(O.skipped||[]).length;W(H||le?`\u5DF2\u8FC1\u79FB ${H} \u4E2A\u6A21\u578B${le?`\uFF0C${le} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(O){$(O.message)}finally{h(!1)}},jt=async a=>{ne(`model:${a}`),$("");try{let k=await Ne(`${E}/models/remove`,"POST",{name:a});U(k||null),M(k.models||[]),W(`\u5DF2\u5220\u9664 ${a}`)}catch(k){$(k.message)}finally{ne("")}},Ye=P.length?P:[{name:se.asrModel||"qwen3-asr-1.7b-8bit",ready:V?.modelReady},{name:se.translateModel||"hy-mt2-1.8b-4bit",ready:de?.localReady}],At=async()=>{Ue(!0);try{C(await he(`${E}/update?force=1`))}catch{W("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Ue(!1)}},Qe=Ye.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),vt=Ye.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),ze=async()=>{ne("ui"),$("");try{let a=await Ne(`${E}/ui-settings`,"PUT",{showSidebarPanel:$e.showSidebarPanel});Z({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),W("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{ne("")}},He=async a=>{ne("import"),$("");try{let k=await Ne(`${E}/import/settings`,"PUT",{mode:a});ce(O=>({...O,mode:k.mode})),W("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(k){$(k.message)}finally{ne("")}},_e=async()=>{if(_.orphans&&window.confirm(`\u6E05\u7406 ${_.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){ne("imports"),$("");try{let a=await Ne(`${E}/imports/orphans`,"DELETE",{});ce(k=>({...k,orphans:0,orphanBytes:0})),W(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){$(a.message)}finally{ne("")}}},at=async()=>{ne("transcribe"),$("");try{let a=Ve.split(/[\s,，、]+/).map(O=>O.trim()).filter(Boolean).slice(0,500),k=await Ne(`${E}/transcribe/settings`,"PUT",{provider:Me,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(q)||15)),diarize:Ze});R((k.hotwords||[]).join(" ")),ge(k.chunkMinutes||15),Fe(k.diarize!==!1),tt(k.provider||"api"),k.runtime&&Se(k.runtime),W("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{ne("")}},st=Ye;return o.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},o.default.createElement("style",null,qt),o.default.createElement("div",{className:"podwave-settings"},o.default.createElement("header",{className:"settings-head"},o.default.createElement("h1",null,"\u64AD\u5BA2"),o.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),zt?o.default.createElement("div",{className:"banner error",onClick:()=>$("")},zt):null,Xe?o.default.createElement("div",{className:"settings-message"},Xe):null,o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),x?o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{className:"setup-platform"},x.platform?.osLabel," \xB7 ",x.platform?.arch," \xB7 ",x.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",x.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",x.engine?.label),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn ghost",onClick:It},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),o.default.createElement("button",{className:"settings-btn ghost",disabled:ie,onClick:Dt},ie?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),ve?o.default.createElement("ul",{className:"setup-components"},ve.checks.map(a=>o.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,o.default.createElement("ul",{className:"setup-components"},(x.components||[]).map(a=>o.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?o.default.createElement("span",{className:"setup-component-size"},Je(a.bytes)):null))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),o.default.createElement("select",{value:ye,onChange:a=>w(a.target.value)},o.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),o.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),o.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),me?.items?.length?o.default.createElement("details",{className:"setup-plan",open:!0},o.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Je(me.totalBytes)," \xB7 ",me.items.length," \u9879"),o.default.createElement("ul",null,me.items.map(a=>o.default.createElement("li",{key:a.id},o.default.createElement("span",null,a.label),o.default.createElement("span",null,a.bytes?Je(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):o.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:oe||x.job?.status==="running",onClick:Ie},oe||x.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),x.job?.status==="running"?o.default.createElement("button",{className:"settings-btn ghost",onClick:mt},"\u53D6\u6D88"):null),x.job?o.default.createElement("div",{className:"setup-job"},o.default.createElement("div",{className:"setup-job-line"},o.default.createElement("span",null,x.job.stage||x.job.status),o.default.createElement("span",null,x.job.progress||0,"% \xB7 ",Je(x.job.bytes)," / ",Je(x.job.expected))),o.default.createElement("div",{className:"setup-progress"},o.default.createElement("span",{style:{width:`${x.job.progress||0}%`}})),x.job.error?o.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",x.job.error):null,x.job.warning?o.default.createElement("p",{className:"settings-hint setup-warning"},x.job.warning):null,x.job.status==="done"&&(!x.job.summary||!x.job.summary.length)?o.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,x.job.status==="done"&&x.job.modelsDir?o.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",x.job.modelsDir):null,Array.isArray(x.job.summary)&&x.job.summary.length?o.default.createElement("ul",{className:"setup-summary"},x.job.summary.map(a=>o.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":Je(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):o.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),o.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?o.default.createElement("ul",{className:"history-list"},i.map(a=>o.default.createElement("li",{key:a.id,className:"history-row"},o.default.createElement("div",{className:"history-main"},o.default.createElement("span",{className:"history-title"},a.title),o.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Cn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),o.default.createElement("span",{className:"history-date"},Sn(a.completedAt))))):o.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:qe,disabled:!c},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),o.default.createElement("span",{className:"settings-status"},c?`${c}${g?` \xB7 ${Je(g)}`:""}`:""))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u8F6C\u5199"),o.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),o.default.createElement("select",{value:Me,onChange:a=>tt(a.target.value)},o.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),Me==="api"?o.default.createElement("p",{className:"settings-status"},V?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):o.default.createElement("p",{className:"settings-status"},V?.installed&&V?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${V.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u70ED\u8BCD"),o.default.createElement("input",{value:Ve,onChange:a=>R(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),o.default.createElement("input",{type:"number",min:"1",max:"60",value:q,onChange:a=>ge(a.target.value)})),o.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u8F6C\u5199\u56FA\u5B9A 30 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:Ze,onChange:a=>Fe(a.target.checked)}),o.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:at,disabled:Y==="transcribe"},Y==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),Me==="local"&&!(V?.installed&&V?.modelReady)?o.default.createElement("button",{className:"settings-btn",onClick:Wt,disabled:oe},oe?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,o.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),o.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:_.mode==="copy",onChange:()=>He("copy")}),o.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:_.mode==="reference",onChange:()=>He("reference")}),o.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:_e,disabled:Y==="imports"||!_.orphans},_.orphans?`\u6E05\u7406 ${_.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(_.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),o.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),o.default.createElement("select",{value:We,onChange:a=>ot(a.target.value)},o.default.createElement("option",{value:"api"},"DeepSeek API"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u5730\u5740"),o.default.createElement("input",{value:Ke,onChange:a=>nt(a.target.value),placeholder:"https://api.deepseek.com"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u6A21\u578B"),o.default.createElement("input",{value:rt,onChange:a=>L(a.target.value),placeholder:"deepseek-chat"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API Key"),o.default.createElement("input",{type:"password",value:be,onChange:a=>ee(a.target.value),placeholder:de?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${de.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Ct,disabled:Y==="api"},Y==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},de?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u754C\u9762"),o.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:$e.showSidebarPanel,onChange:a=>Z({showSidebarPanel:a.target.checked})}),o.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:ze,disabled:Y==="ui"},Y==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},Mn(D),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),D?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"model-path"},o.default.createElement("code",{className:"model-path-text",title:D.dir},D.dir),o.default.createElement("span",{className:"model-path-size"},Pn(D)," \xB7 \u5171 ",Je(D.totalBytes))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),o.default.createElement("input",{value:ae,onChange:a=>j(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:Q||ae.trim()===D.dir,onClick:()=>Ge(ae,!0)},Q?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),o.default.createElement("button",{className:"settings-btn ghost",onClick:Et},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),D.projectDir&&D.dir!==D.projectDir?o.default.createElement("button",{className:"settings-btn ghost",disabled:Q,onClick:()=>Ge(D.projectDir,!0)},Tn(D)):null,D.custom?o.default.createElement("button",{className:"settings-btn ghost",disabled:Q,onClick:()=>Ge("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),P.length?o.default.createElement("ul",{className:"model-list"},P.map(a=>o.default.createElement("li",{key:a.name,className:"model-row"},o.default.createElement("div",{className:"model-main"},o.default.createElement("span",{className:"model-name"},a.name),o.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",Je(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),o.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||Y===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>jt(a.name)},Y===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),o.default.createElement("select",{value:d,onChange:a=>S(a.target.value)},(Qe.length?Qe:st).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},V?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),o.default.createElement("select",{value:De,onChange:a=>$t(a.target.value)},(vt.length?vt:st).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},de?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Ee,disabled:Y==="models"},Y==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),o.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},A?.current?`v${A.current}`:"\u2014")),o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},A?.latest?`v${A.latest}`:A?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),o.default.createElement("p",{className:"settings-hint"},A?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":A?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${A.error}\uFF09\u3002`:A?.latest?A?.current&&A?.latest&&A.current!==A.latest&&A.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:At,disabled:Be},Be?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),A?.checkedAt?o.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(A.checkedAt).toLocaleString()):null))))}function Dn({size:r=16}){return Oe.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Oe.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Oe.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Oe.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Oe.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Oe.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function In(){let r=Zt();return Oe.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Oe.default.createElement("style",null,qt),Oe.default.createElement(lo,null))}function En(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},In)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},po));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},v=g=>{if(c(!g),g&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Dn);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var jn=["slots"];

return module.exports}})
