window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Bn=Object.create;var to=Object.defineProperty;var Un=Object.getOwnPropertyDescriptor;var Fn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var Hn=(r,i)=>{for(var s in i)to(r,s,{get:i[s],enumerable:!0})},Qo=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let m of Fn(i))!qn.call(r,m)&&m!==s&&to(r,m,{get:()=>i[m],enumerable:!(c=Un(i,m))||c.enumerable});return r};var Je=(r,i,s)=>(s=r!=null?Bn(Kn(r)):{},Qo(i||!r||!r.__esModule?to(s,"default",{value:r,enumerable:!0}):s,r)),Jn=r=>Qo(to({},"__esModule",{value:!0}),r);var ir={};Hn(ir,{apply:()=>ar,inject:()=>sr});module.exports=Jn(ir);var Xe=Je(require("react"),1);var oo=`
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
.podwave-root .transcript-body { overflow-y: auto; padding: 6px 0; border-radius: 0 0 12px 12px; }
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
  width: min(560px, calc(100vw - 48px));
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
`;var t=Je(require("react"),1);var S=Je(require("react"),1);function Q({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),S.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),S.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),S.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return S.default.createElement("svg",{...s},S.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),S.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),S.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),S.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),S.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),S.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),S.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),S.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var zo=Je(require("react"),1);function Se(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),m=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${c}:${String(m).padStart(2,"0")}`}function ko(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function No(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Ro(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function no(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Xn="/podwave/api";function Et({item:r,size:i=44,className:s=""}){let c={width:i,height:i};return r&&r.hasCover?zo.default.createElement("img",{className:`cover ${s}`,style:c,src:`${Xn}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):zo.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},Ro(r&&r.title))}var u=Je(require("react"),1);var ce=Je(require("react"),1);function Qe({trigger:r,title:i,align:s="end",placement:c="down",className:m="",buttonClassName:g="",disabled:f=!1,children:M}){let[C,O]=(0,ce.useState)(!1),j=(0,ce.useRef)(null);(0,ce.useEffect)(()=>{if(!C)return;let T=x=>{j.current?.contains(x.target)||O(!1)},K=x=>{x.key==="Escape"&&O(!1)};return document.addEventListener("pointerdown",T),document.addEventListener("keydown",K),()=>{document.removeEventListener("pointerdown",T),document.removeEventListener("keydown",K)}},[C]),(0,ce.useEffect)(()=>{f&&C&&O(!1)},[f,C]);let A=["pop-panel",s==="start"?"is-start":"",c==="up"?"is-up":""].filter(Boolean).join(" ");return ce.default.createElement("span",{className:`pop-wrap ${m}`,ref:j},ce.default.createElement("button",{type:"button",className:g||"pop-btn",onClick:()=>O(T=>!T),title:i,disabled:f,"aria-haspopup":"menu","aria-expanded":C},r),C?ce.default.createElement("span",{className:A,role:"menu"},M({close:()=>O(!1)})):null)}function Ae({children:r,hint:i,checked:s=!1,danger:c=!1,disabled:m=!1,onSelect:g}){let f=["pop-item",s?"is-on":"",c?"is-danger":""].filter(Boolean).join(" ");return ce.default.createElement("button",{type:"button",className:f,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:m,onClick:g},ce.default.createElement("span",null,r),i?ce.default.createElement("span",{className:"pop-hint"},i):null)}function $o({children:r,hint:i,href:s,onSelect:c}){return ce.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:c},ce.default.createElement("span",null,r),i?ce.default.createElement("span",{className:"pop-hint"},i):null)}var Jt=Je(require("react"),1);function Vt({value:r,onChange:i,compact:s=!1}){let c=Number.isFinite(Number(r))?Number(r):15;return Jt.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},Jt.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),Jt.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:c,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:m=>i(Number(m.target.value))}),Jt.default.createElement("span",{className:"sub-size-value"},c))}var en="/podwave/api";function ro({transcript:r,status:i,progress:s,stage:c,chunks:m,queued:g,elapsed:f,error:M,position:C,onSeek:O,onClose:j,onStart:A,onCancel:T,target:K,job:x,onChangeTarget:oe,onTranslate:W,onOpenSettings:se,inline:Me=!1,editingId:$=null,draft:L="",onDraftChange:q,onEditLine:R,onSaveLine:we,onCancelEdit:le,onSplitLine:ee,onMergeLine:ye,onUndo:w,onValidate:ne,onResegment:fe,issues:D=[],fontSize:pe=15,onFontSize:Ue=null}){let Oe=(0,u.useRef)(null),ve=(0,u.useRef)(null),[ke,Ne]=(0,u.useState)(!1),G=r?.lines?.findIndex(b=>C>=b.start&&C<b.end)??-1;(0,u.useEffect)(()=>{if(G<0||!Oe.current)return;Oe.current.querySelector(`[data-seg="${G}"]`)?.scrollIntoView({block:"nearest"})},[G]);let k=i==="queued"||i==="running",X=async()=>{let xe=(r?.lines||[]).map(h=>{let H=Se(h.start),ie=K?h.translations?.[K]:"";return ie?`${H} ${h.text}
${" ".repeat(H.length+1)}${ie}`:`${H} ${h.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(xe);else{let h=document.createElement("textarea");h.value=xe,h.style.position="fixed",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h)}Ne(!0),setTimeout(()=>Ne(!1),1600)}catch{Ne(!1)}};return u.default.createElement("section",{className:`transcript-panel ${Me?"inline":""}`,style:{"--sub-size":`${pe}px`}},u.default.createElement("header",{className:"transcript-head"},u.default.createElement("h3",null,"\u5B57\u5E55"),r?u.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,u.default.createElement("div",{className:"transcript-actions"},u.default.createElement("select",{className:"tr-select",value:K,onChange:b=>oe(b.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},u.default.createElement("option",{value:""},"\u5BF9\u7167"),u.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),u.default.createElement("option",{value:"en"},"English")),Ue?u.default.createElement(Qe,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${pe}px`,align:"end"},()=>u.default.createElement("span",{className:"pop-fs"},u.default.createElement(Vt,{value:pe,onChange:Ue}))):null,r?u.default.createElement("button",{className:"mini-link",onClick:w,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"):null,u.default.createElement(Qe,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:b})=>u.default.createElement(u.default.Fragment,null,r?u.default.createElement(Ae,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{b(),ne()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&fe?u.default.createElement(Ae,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{b(),fe()}},"\u6574\u7406\u65AD\u53E5"):null,u.default.createElement(Ae,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{b(),se()}},"\u8BBE\u7F6E"))),r?u.default.createElement(Qe,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:b})=>u.default.createElement(u.default.Fragment,null,u.default.createElement($o,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${en}/episodes/${r.id}/transcript/export?format=srt`,onSelect:b},"\u5B57\u5E55\u6587\u4EF6 .srt"),u.default.createElement($o,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${en}/episodes/${r.id}/transcript/export?format=md`,onSelect:b},"\u6587\u7A3F .md"),u.default.createElement(Ae,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:X},ke?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,Me?null:u.default.createElement("button",{className:"transcript-close",onClick:j,title:"\u6536\u8D77"},"\xD7"))),u.default.createElement("div",{className:"transcript-body",ref:Oe},r&&k?u.default.createElement("div",{className:"tr-strip"},u.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min((m.done||0)+1,m.total)}/${m.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),T?u.default.createElement("button",{className:"seg-tool",onClick:T},"\u53D6\u6D88"):null):null,r&&D?.length?u.default.createElement("div",{className:"tr-issues"},D.slice(0,5).map(b=>u.default.createElement("div",{key:b},"\xB7 ",b)),D.length>5?u.default.createElement("div",null,"\u2026\u5171 ",D.length," \u6761"):null):null,x?.status==="running"||x?.status==="queued"?u.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",x.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""):null,x?.status==="error"?u.default.createElement("div",{className:"tr-running err"},x.error,"\u5F85\u7FFB ",x.missing??0," \u884C",W?u.default.createElement("button",{className:"seg-tool",onClick:W},"\u91CD\u8BD5"):null):null,x?.status==="partial"?u.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",x.translated??0,"/",x.total??0," \u884C\uFF0C\u8FD8\u7F3A ",x.missing??0," \u884C",W?u.default.createElement("button",{className:"seg-tool",onClick:W},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,x?.status==="none"&&K&&r&&(x.missing??0)>0?u.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",x.missing," \u884C\u5F85\u7FFB\uFF09",W?u.default.createElement("button",{className:"seg-tool",onClick:W},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((b,xe)=>u.default.createElement("div",{key:b.id,"data-seg":xe,className:`seg-row ${xe===G?"active":""} ${$===b.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Se(b.start)}`,onClick:()=>O(b.start),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),O(b.start))}},u.default.createElement("span",{className:"seg-time"},Se(b.start)),$===b.id?u.default.createElement("span",{className:"seg-edit",onClick:h=>h.stopPropagation()},u.default.createElement("textarea",{ref:ve,value:L,rows:Math.min(4,Math.max(2,Math.ceil((L.length||1)/40))),onChange:h=>q(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.metaKey||h.ctrlKey)&&we(b.id),h.key==="Escape"&&le()}}),u.default.createElement("span",{className:"seg-edit-actions"},u.default.createElement("button",{className:"seg-tool",onClick:()=>we(b.id)},"\u4FDD\u5B58"),u.default.createElement("button",{className:"seg-tool",onClick:()=>ee(b.id,ve.current?.selectionStart??Math.floor(L.length/2))},"\u62C6\u5206"),u.default.createElement("button",{className:"seg-tool",onClick:le},"\u53D6\u6D88"))):u.default.createElement(u.default.Fragment,null,b.speaker!=null?u.default.createElement("span",{className:`seg-speaker spk-${b.speaker%5}`},r.speakers?.[b.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${b.speaker+1}`):null,u.default.createElement("span",{className:"seg-text"},b.text,b.translations?.[K]?u.default.createElement("span",{className:"seg-trans"},b.translations[K]):null),u.default.createElement("span",{className:"seg-tools"},u.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:h=>{h.stopPropagation(),R(b)}},"\u270E"),xe<r.lines.length-1?u.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:h=>{h.stopPropagation(),ye(b.id)}},"\u21E3"):null)))):k?u.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min(m.done+1,m.total)}/${m.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?u.default.createElement("span",{className:"tx-progress"},u.default.createElement("span",{style:{width:`${s.percent}%`}})):null,u.default.createElement("br",null),u.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),u.default.createElement("br",null),T?u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:T},"\u53D6\u6D88\u8F6C\u5199"):null):M?u.default.createElement("div",{className:"transcript-status"},u.default.createElement("span",{className:"err"},M),u.default.createElement("br",null),u.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:A},"\u91CD\u8BD5")):u.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",u.default.createElement("br",null),u.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:A},"\u5F00\u59CB\u8F6C\u5199"))))}var Z=Je(require("react"),1);function Co({line:r,target:i,fontSize:s,onFontSize:c,x:m,y:g,onMove:f,onClose:M,onSeek:C,speakerLabel:O,status:j}){let A=(0,Z.useRef)(null),T=(0,Z.useRef)(null),K=(0,Z.useCallback)(($,L)=>{let q=A.current,R=q?.offsetWidth||420,we=q?.offsetHeight||120,le=Math.max(8,window.innerWidth-R-8),ee=Math.max(8,window.innerHeight-we-8);return{x:Math.min(le,Math.max(8,$)),y:Math.min(ee,Math.max(8,L))}},[]),x=(0,Z.useCallback)($=>{if($.button!==void 0&&$.button!==0)return;let L=A.current;if(!L)return;let q=L.getBoundingClientRect();T.current={dx:$.clientX-q.left,dy:$.clientY-q.top},$.currentTarget.setPointerCapture?.($.pointerId)},[]),oe=(0,Z.useCallback)($=>{let L=T.current;if(!L)return;let q=K($.clientX-L.dx,$.clientY-L.dy);f(q.x,q.y,!1)},[K,f]),W=(0,Z.useCallback)($=>{let L=T.current;if(!L)return;T.current=null,$.currentTarget.releasePointerCapture?.($.pointerId);let q=K($.clientX-L.dx,$.clientY-L.dy);f(q.x,q.y,!0)},[K,f]);(0,Z.useEffect)(()=>{let $=L=>{L.key==="Escape"&&M()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[M]);let se=r&&i?r.translations?.[i]:"",Me=j==="queued"||j==="running";return Z.default.createElement("div",{ref:A,className:"caption-overlay",style:{left:m??void 0,top:g??void 0,right:m==null?void 0:"auto",bottom:g==null?void 0:"auto","--sub-size":`${s||15}px`}},Z.default.createElement("div",{className:"caption-head",onPointerDown:x,onPointerMove:oe,onPointerUp:W,onPointerCancel:W,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},Z.default.createElement(Q,{name:"wave",size:13}),Z.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),Z.default.createElement(Vt,{value:s,onChange:c,compact:!0}),Z.default.createElement("button",{className:"caption-close",onClick:M,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),Z.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?C(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:$=>{r&&($.key==="Enter"||$.key===" ")&&($.preventDefault(),C(r.start))},title:r?`\u8DF3\u5230 ${Se(r.start)}`:void 0},r?Z.default.createElement(Z.default.Fragment,null,O?Z.default.createElement("span",{className:"caption-speaker"},O):null,Z.default.createElement("div",{className:"caption-text"},r.text),se?Z.default.createElement("div",{className:"caption-trans"},se):null):Z.default.createElement("div",{className:"caption-hint"},Me?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")))}var l=Je(require("react"),1),ue="/podwave/api";async function Be(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function It(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function tn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function on(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function So({onPlay:r,currentId:i}){let[s,c]=(0,l.useState)(null),[m,g]=(0,l.useState)(""),[f,M]=(0,l.useState)(""),[C,O]=(0,l.useState)(""),[j,A]=(0,l.useState)(""),[T,K]=(0,l.useState)(0),[x,oe]=(0,l.useState)(!1),[W,se]=(0,l.useState)(""),[Me,$]=(0,l.useState)(""),[L,q]=(0,l.useState)([]),[R,we]=(0,l.useState)(!1),[le,ee]=(0,l.useState)(null),[ye,w]=(0,l.useState)([]),[ne,fe]=(0,l.useState)(null),[D,pe]=(0,l.useState)(!1),[Ue,Oe]=(0,l.useState)(""),[ve,ke]=(0,l.useState)(null),[Ne,G]=(0,l.useState)(!1),[k,X]=(0,l.useState)(null),[b,xe]=(0,l.useState)(!1),h=(0,l.useCallback)(async(d=!1)=>{we(!0);try{let E=await Be(`${ue}/xyz/subscriptions${d?"?refresh=1":""}`);q(E.items||[])}catch(E){H(E)}finally{we(!1)}},[]);function H(d){let E=String(d?.message||"");if(E.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||E.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Ye=>({...Ye||{},loggedIn:!1})),q([]),ee(null),w([]),se(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(ie(E))}function ie(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function Re(){try{await It(`${ue}/xyz/open-web`,{})}catch(d){H(d)}}(0,l.useEffect)(()=>{Be(`${ue}/xyz/status`).then(d=>{c(d),d.loggedIn&&h()}).catch(d=>H(d)),Be(`${ue}/xyz/local-app`).then(d=>X(d)).catch(()=>X({available:!1}))},[h]),(0,l.useEffect)(()=>{if(!T)return;let d=setInterval(()=>K(E=>Math.max(0,E-1)),1e3);return()=>clearInterval(d)},[T]);async function _e(){if(g(""),!/^1\d{10}$/.test(C.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let d=await It(`${ue}/xyz/auth/send-code`,{phone:C.trim(),areaCode:"+86"});K(60),d.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){H(d)}finally{M("")}}async function rt(){if(g(""),!C.trim()||!j.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await It(`${ue}/xyz/auth/login`,{phone:C.trim(),code:j.trim(),areaCode:"+86"});let d=await Be(`${ue}/xyz/status`);c(d),await h()}catch(d){H(d)}finally{M("")}}async function at(){if(g(""),!W.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await It(`${ue}/xyz/auth/token`,{refreshToken:W.trim(),deviceId:Me.trim()});let d=await Be(`${ue}/xyz/status`);c(d),se(""),await h()}catch(d){H(d)}finally{M("")}}async function Pe(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");se(d.trim())}catch(d){g(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function et(){g(""),M("app");try{await It(`${ue}/xyz/auth/from-app`,{});let d=await Be(`${ue}/xyz/status`);c(d),await h(!0)}catch(d){H(d)}finally{Be(`${ue}/xyz/local-app`).then(d=>X(d)).catch(()=>{}),M("")}}async function We(){M("logout");try{await It(`${ue}/xyz/auth/logout`,{}),c({loggedIn:!1}),q([]),ee(null),w([])}catch(d){H(d)}finally{M("")}}async function st(d){ee(d),w([]),fe(null),pe(!0),g("");try{let E=await Be(`${ue}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);w(E.items||[]),fe(E.loadMoreKey||null)}catch(E){H(E)}finally{pe(!1)}}async function it(){if(!(!le||!ne||D)){pe(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:ne}),E=await Be(`${ue}/xyz/podcast/${encodeURIComponent(le.pid)}/episodes?${d}`);w(Ye=>[...Ye,...E.items||[]]),fe(E.loadMoreKey||null)}catch(d){H(d)}finally{pe(!1)}}}async function P(d){M(`play:${d.eid}`),g("");try{await r(d)}catch(E){H(E)}finally{M("")}}async function Ce(){if(g(""),!Ue.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}G(!0);try{let d=Ue.trim();if(/\/episode\//i.test(d)){let E=await Be(`${ue}/xyz/public/episode?url=${encodeURIComponent(d)}`);ke({pid:E.podcast.pid,title:E.podcast.title,author:E.podcast.author,episodes:[E.episode]})}else{let E=await Be(`${ue}/xyz/public/podcast?url=${encodeURIComponent(d)}`);ke(E.podcast)}}catch(d){H(d)}finally{G(!1)}}async function te(d){M(`pplay:${d.eid}`),g("");try{await r({...d,public:!0})}catch(E){H(E)}finally{M("")}}return s?s.loggedIn?le?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{ee(null),w([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},le.title)),D&&ye.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},ye.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},on(d.pubDate)," \xB7 ",tn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${d.eid}`,onClick:()=>P(d)},f===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!D&&ye.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,ne?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:D,onClick:it},D?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:R,onClick:()=>h(!0)},R?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:We},"\u9000\u51FA\u767B\u5F55"))),R?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},L.map(d=>l.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>st(d)},d.cover?l.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},d.title),l.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!R&&L.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn primary",disabled:f==="app",onClick:et},f==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),l.default.createElement("p",{className:"xyz-hint"},k===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":k.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${k.deviceId?`\uFF08\u8BBE\u5907 ${k.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${k.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),l.default.createElement("button",{className:"xyz-link",onClick:()=>xe(d=>!d)},b?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),b?l.default.createElement(l.default.Fragment,null,l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:Re},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:W,onChange:d=>se(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:Pe},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Me,onChange:d=>$(d.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:at},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>oe(d=>!d)},x?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),x?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:C,onChange:d=>O(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||T>0,onClick:_e},T>0?`${T}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:j,onChange:d=>A(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:rt},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:Ue,onChange:d=>Oe(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Ne,onClick:Ce},Ne?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ve?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},ve.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ve.author)),ve.episodes.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},on(d.pubDate)," \xB7 ",tn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${d.eid}`,onClick:()=>te(d)},f===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),m?l.default.createElement("p",{className:"xyz-error"},m):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Mo(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function nn(r,i){let s=Mo(i),c=s?`${s}/`:"",m=new Map;for(let g of r){let f=Mo(g?.rel);if(!f||c&&!f.startsWith(c))continue;let C=f.slice(c.length).split("/")[0];if(!C)continue;let O=c?`${c}${C}`:C,j=m.get(O)||{rel:O,name:C,count:0};j.count+=1,m.set(O,j)}return[...m.values()].sort((g,f)=>g.name.localeCompare(f.name,"zh-Hans-CN"))}function rn(r,i){let s=[{rel:"",label:r}],c=Mo(i);if(!c)return s;let m="";for(let g of c.split("/").filter(Boolean))m=m?`${m}/${g}`:g,s.push({rel:m,label:g});return s}function an(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var N="/podwave/api",_n=[.5,.75,1,1.25,1.5,1.75,2];async function ge(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function me(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let m=await c.json().catch(()=>({}));throw new Error(m.error||c.statusText)}return c.json()}function Wn({onSubmit:r,onPick:i,onClose:s}){let[c,m]=(0,t.useState)(""),[g,f]=(0,t.useState)(!1),[M,C]=(0,t.useState)(!1),[O,j]=(0,t.useState)(""),A=(0,t.useRef)(null);return(0,t.useEffect)(()=>{A.current?.focus();let x=oe=>{oe.key==="Escape"&&s()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async x=>{if(x.preventDefault(),!(!c.trim()||g)){f(!0),j("");try{await r(c.trim()),s()}catch(oe){j(oe.message),f(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){C(!0),j("");try{let x=await i();if(x?.canceled)return;if(x?.error)throw new Error(x.error);x?.path&&(await r(x.path),s())}catch(x){j(x.message)}finally{C(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:A,value:c,onChange:x=>m(x.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),O?t.default.createElement("div",{className:"dialog-error"},O):null))}function Yn({config:r,onClose:i,onSave:s}){let[c,m]=(0,t.useState)(r?.provider||"api"),[g,f]=(0,t.useState)(""),[M,C]=(0,t.useState)(!1),[O,j]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:T=>{T.target===T.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async T=>{T.preventDefault(),C(!0),j("");try{await s({provider:c,apiKey:g||void 0})}catch(K){j(K.message),C(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:c,onChange:T=>m(T.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:g,onChange:T=>f(T.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),O?t.default.createElement("div",{className:"dialog-error"},O):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Po(){let[r,i]=(0,t.useState)([]),[s,c]=(0,t.useState)([]),[m,g]=(0,t.useState)({}),[f,M]=(0,t.useState)({running:!1}),[C,O]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[j,A]=(0,t.useState)(!1),[T,K]=(0,t.useState)(!1),[x,oe]=(0,t.useState)(0),[W,se]=(0,t.useState)(0),[Me,$]=(0,t.useState)(0),[L,q]=(0,t.useState)(!1),[R,we]=(0,t.useState)(""),[le,ee]=(0,t.useState)([]),[ye,w]=(0,t.useState)("recent"),[ne,fe]=(0,t.useState)("all"),[D,pe]=(0,t.useState)(""),[Ue,Oe]=(0,t.useState)(""),[ve,ke]=(0,t.useState)("all"),[Ne,G]=(0,t.useState)(null),[k,X]=(0,t.useState)(null),[b,xe]=(0,t.useState)(!1),[h,H]=(0,t.useState)(0),[ie,Re]=(0,t.useState)(0),[_e,rt]=(0,t.useState)(!0),[at,Pe]=(0,t.useState)(!1),[et,We]=(0,t.useState)(""),[st,it]=(0,t.useState)(""),[P,Ce]=(0,t.useState)(null),[te,d]=(0,t.useState)("none"),[E,Ye]=(0,t.useState)(null),bt=(0,t.useRef)(new Set),[wt,jt]=(0,t.useState)(15),[lt,yt]=(0,t.useState)(!1),[ze,de]=(0,t.useState)({x:null,y:null}),[At,kt]=(0,t.useState)(0),[Ot,I]=(0,t.useState)(""),[pt,dt]=(0,t.useState)(!1),[lo,Xt]=(0,t.useState)(null),[Te,po]=(0,t.useState)(""),[J,Fe]=(0,t.useState)({status:"none"}),[co,Nt]=(0,t.useState)(!1),[_t,Wt]=(0,t.useState)(!1),[zt,Lt]=(0,t.useState)(!1),[De,Yt]=(0,t.useState)(null),[ct,Bt]=(0,t.useState)(!1),[$t,Ut]=(0,t.useState)([]),[ut,Ft]=(0,t.useState)(!1),[he,tt]=(0,t.useState)([]),[a,z]=(0,t.useState)(null),[U,Ze]=(0,t.useState)(""),[Ee,Ct]=(0,t.useState)([]),re=(0,t.useRef)(null),Ge=(0,t.useRef)(""),Do=(0,t.useRef)(null),F=(0,t.useRef)(null),Le=(0,t.useRef)(0),St=(0,t.useRef)(C),mt=(0,t.useRef)(0),Eo=(0,t.useRef)(0),Io=(0,t.useRef)(0),jo=(0,t.useRef)(0),ln=(0,t.useRef)(!1),uo=(0,t.useRef)(!1);(0,t.useEffect)(()=>{K(!1)},[Ne]),(0,t.useEffect)(()=>{St.current=C},[C]),(0,t.useEffect)(()=>{F.current=k},[k]),(0,t.useEffect)(()=>{Le.current=ie},[ie]),(0,t.useEffect)(()=>{let e=!1;return ge(`${N}/transcribe/settings`).then(o=>{e||Ye(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ge(`${N}/ui-settings`);!e&&o&&(Wt(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&jt(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&yt(o.captionOpen),de({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}))}catch{}})(),()=>{e=!0}},[]);let ot=(0,t.useCallback)(e=>{fetch(`${N}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),mo=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));jt(o),ot({subtitleSize:o})},[ot]),pn=(0,t.useCallback)((e,o,p)=>{de({x:e,y:o}),p&&ot({captionX:e,captionY:o})},[ot]),dn=(0,t.useCallback)(()=>{yt(e=>{let o=!e;return ot({captionOpen:o}),o})},[ot]),cn=(0,t.useCallback)(()=>{yt(!1),ot({captionOpen:!1})},[ot]),Kt=(0,t.useMemo)(()=>{let e=P?.lines;return e?.length&&e.find(o=>h>=o.start&&h<o.end)||null},[P,h]),un=Kt&&Kt.speaker!=null?P?.speakers?.[Kt.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${Kt.speaker+1}`:"",Ao=(0,t.useCallback)(()=>{Wt(e=>{let o=!e;return fetch(`${N}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),y=(0,t.useCallback)(e=>{it(e),window.clearTimeout(jo.current),jo.current=window.setTimeout(()=>it(""),2600)},[]),Ke=(0,t.useCallback)(async()=>{let e=await ge(`${N}/episodes`);return i(e.items||[]),c(e.folders||[]),g(e.progress||{}),M(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await ge(`${N}/health`).catch(()=>({}));o.mediaBase&&(Ge.current=o.mediaBase);let p=await ge(`${N}/state`);if(e)return;O(p.settings),c(p.folders||[]);let v=await Ke();if(e)return;let V=p.settings?.lastEpisodeId,_=V?(v.items||[]).find(xt=>xt.id===V):null;if(_){X(_),Re(_.duration||0);let xt=v.progress?.[_.id]?.position||0;mt.current=xt>5?xt:0,H(mt.current);let ht=re.current;ht&&(ht.src=Ge.current?`${Ge.current}/episodes/${_.id}/audio`:`${N}/episodes/${_.id}/audio`,ht.load(),ht.playbackRate=p.settings?.rate||1,ht.volume=p.settings?.volume??.9)}rt(!1),ln.current=!0}catch(o){e||(We(o.message),rt(!1))}})(),()=>{e=!0}},[Ke]),(0,t.useEffect)(()=>{if(!f.running)return;let e=setInterval(()=>{Ke().catch(()=>{})},1500);return()=>clearInterval(e)},[f.running,Ke]),(0,t.useEffect)(()=>{let e=!1;return Ce(null),I(""),kt(0),k?.id?((async()=>{try{let o=await ge(`${N}/episodes/${k.id}/transcript`);if(e)return;d(o.status),Yt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?Ce(o.transcript):o.status==="queued"||o.status==="running"?(kt(o.elapsedMs||0),o.transcript&&Ce(o.transcript)):o.status==="error"&&I(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||I(o.message)}})(),()=>{e=!0}):(d("none"),()=>{e=!0})},[k?.id]),(0,t.useEffect)(()=>{ge(`${N}/translate/settings`).then(Xt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=k?.id;return!o||!Te?(Fe({status:"none"}),()=>{e=!0}):((async()=>{try{let p=await ge(`${N}/episodes/${o}/translate?target=${Te}`);e||Fe(p)}catch{e||Fe({status:"none"})}})(),()=>{e=!0})},[k?.id,Te]),(0,t.useEffect)(()=>{if(te!=="queued"&&te!=="running")return;let e=!1,o=setInterval(async()=>{let p=F.current?.id;if(p)try{let v=await ge(`${N}/episodes/${p}/transcript`);if(e)return;d(v.status),Yt(v.status==="queued"||v.status==="running"?v:null),kt(v.elapsedMs||0),(v.status==="queued"||v.status==="running")&&v.transcript?Ce(v.transcript):v.status==="done"&&v.transcript?(Ce(v.transcript),dt(!0),y("\u8F6C\u5199\u5B8C\u6210")):v.status==="error"&&I(v.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[te,y]),(0,t.useEffect)(()=>{if(J.status!=="running"&&J.status!=="queued")return;let e=!1,o=async v=>{let V=await ge(`${N}/episodes/${v}/translate?target=${Te}`);if(!e){Fe(V),V.status==="done"&&y("\u7FFB\u8BD1\u5B8C\u6210");try{let _=await ge(`${N}/episodes/${v}/transcript`);!e&&_.transcript&&Ce(_.transcript)}catch{}}},p=setInterval(()=>{let v=F.current?.id;v&&o(v).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(p)}},[J.status,Te,y]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let v=await ge(`${N}/jobs`);e||Ut(v.items||[])}catch{}};o();let p=setInterval(o,ct?2500:2e4);return()=>{e=!0,clearInterval(p)}},[ct]);let vt=(0,t.useCallback)((e,o,p,v=!1)=>{if(!e)return;let V=Date.now();!v&&V-Io.current<4e3||(Io.current=V,me(`${N}/progress/${e}`,"PUT",{position:o,duration:p}).catch(()=>{}),g(_=>({..._,[e]:{position:o,duration:p,updatedAt:V}})))},[]),nt=(0,t.useCallback)(e=>{O(o=>({...o,...e})),me(`${N}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!b||!k||E?.realtime===!1||E?.provider==="local"||P&&!P.partial||te==="queued"||te==="running")return;let e=k.id;bt.current.has(e)||(bt.current.add(e),me(`${N}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&d("queued")}).catch(()=>{}))},[b,k,P,te,E]);let qt=(0,t.useCallback)(async()=>{if(F.current){I(""),dt(!0);try{let e=await me(`${N}/episodes/${F.current.id}/transcribe`,"POST",{});d(e.status||"queued")}catch(e){I(e.message)}}},[]),mn=(0,t.useCallback)(()=>{if(P){dt(e=>!e);return}if(te==="queued"||te==="running"){dt(!0);return}qt()},[P,te,qt]),vo=(0,t.useCallback)(async()=>{if(F.current)try{await me(`${N}/episodes/${F.current.id}/transcribe/cancel`,"POST",{}),y("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){I(e.message)}},[y]),go=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let v=await me(`${N}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});v?.status==="none"?y("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):y(v?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await me(`${N}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await me(`${N}/jobs`,"DELETE",{key:e.key})}catch(v){y(`\u64CD\u4F5C\u5931\u8D25\uFF1A${v.message}`)}let p=await ge(`${N}/jobs`).catch(()=>({items:[]}));Ut(p.items||[])},[y]),Zt=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let p=await me(`${N}/transcribe/batch`,"POST",{ids:o});y(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),tt([]),Ft(!1)}catch(p){y(p.message)}},[y]),vn=(0,t.useCallback)(e=>{tt(o=>o.includes(e)?o.filter(p=>p!==e):[...o,e])},[]),qe=(0,t.useCallback)(async(e,o,p)=>{try{let v=await me(`${N}${e}`,o,p||{});return v?.transcript&&Ce(v.transcript),v}catch(v){return y(v.message),null}},[y]),Oo=(0,t.useCallback)(e=>{z(e.id),Ze(e.text),Ct([])},[]),Lo=(0,t.useCallback)(async e=>{if(!P)return;await qe(`/episodes/${P.id}/transcript/lines/${e??a}`,"PUT",{text:U})&&(z(null),y("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[P,a,U,qe,y]),Bo=(0,t.useCallback)(async(e,o)=>{if(!P)return;await qe(`/episodes/${P.id}/transcript/lines/${e??a}/split`,"POST",{offset:o})&&(z(null),y("\u5DF2\u62C6\u6210\u4E24\u884C"))},[P,a,qe,y]),Uo=(0,t.useCallback)(async e=>{if(!P)return;await qe(`/episodes/${P.id}/transcript/lines/${e}/merge`,"POST",{})&&y("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[P,qe,y]),Fo=(0,t.useCallback)(async()=>{if(!P)return;await qe(`/episodes/${P.id}/transcript/undo`,"POST",{})&&y("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[P,qe,y]),Ko=(0,t.useCallback)(async()=>{if(!P)return;let e=await qe(`/episodes/${P.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(Fe({status:"none",missing:e.after}),y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[P,qe,y]),qo=(0,t.useCallback)(async()=>{if(P)try{let e=await ge(`${N}/episodes/${P.id}/transcript/validate`);Ct(e.issues||[]),y(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){y(e.message)}},[P,y]),Ho=(0,t.useCallback)(async()=>{let e=F.current?.id;if(!e)return;let o=await ge(`${N}/episodes/${e}/transcript`);o.transcript&&Ce(o.transcript)},[]),Jo=(0,t.useCallback)(async()=>{let e=F.current?.id,o=Te;if(!(!e||!o)&&!(J.status==="running"||J.status==="queued")){Fe({status:"running"});try{let p=await me(`${N}/episodes/${e}/translate`,"POST",{target:o});Fe(p),p.status==="done"&&(await Ho(),y("\u7FFB\u8BD1\u5B8C\u6210"))}catch(p){Fe(v=>({...v,status:"error",error:p.message}))}}},[Te,J.status,Ho,y]),Vo=(0,t.useCallback)(e=>{po(e||"")},[]),gn=async()=>{if(Y?.eid)try{await fetch(`${N}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${Y.eid}`})})}catch{y("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},fn=e=>{let o=!e.favorite;i(p=>p.map(v=>v.id===e.id?{...v,favorite:o}:v)),me(`${N}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(p=>y(p.message))},Xo=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${N}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(p=>!e.includes(p.id))),tt([]),e.includes(Ne)&&G(null),y(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ie=(0,t.useMemo)(()=>{let e=[...r];return ye==="title"?e.sort((o,p)=>o.title.localeCompare(p.title,"zh-Hans-CN")):ye==="duration"?e.sort((o,p)=>(p.duration||0)-(o.duration||0)):e.sort((o,p)=>p.mtime-o.mtime),e},[r,ye]),Mt=D?Ue:"",_o=(0,t.useMemo)(()=>D?r.filter(e=>e.root===D):[],[r,D]),Pt=(0,t.useMemo)(()=>D?nn(_o,Mt):[],[_o,D,Mt]),He=(0,t.useMemo)(()=>{let e=R.trim().toLowerCase();return Ie.filter(o=>{if(D&&o.root!==D||D&&(o.rel||"")!==Mt||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let v=m[o.id]?.position||0,V=o.duration||0,_=V?v/V:0;return ne==="inprogress"?v>5&&_<.97:ne==="finished"?_>=.97:ve==="unheard"?v<=5:ve==="transcribed"?!!o.hasTranscript:ve==="favorites"?!!o.favorite:!0})},[Ie,R,ne,ve,m,D,Mt]),Wo=(0,t.useMemo)(()=>$t.filter(e=>e.status==="queued"||e.status==="running"),[$t]),gt=(0,t.useMemo)(()=>He.filter(e=>!e.hasTranscript),[He]),fo=(0,t.useMemo)(()=>r.filter(e=>{let o=m[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(m[o.id]?.updatedAt||0)-(m[e.id]?.updatedAt||0)).slice(0,4),[r,m]),xn=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),hn=Math.round(xn/3600*10)/10,Tt=(0,t.useMemo)(()=>D?rn(no(D),Mt):[],[D,Mt]),bn=D?Tt.length>1?Tt[Tt.length-1].label:no(D):ne==="inprogress"?"\u7EE7\u7EED\u6536\u542C":ne==="finished"?"\u5DF2\u64AD\u5B8C":ne==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",Y=Ne?r.find(e=>e.id===Ne)||(k?.id===Ne?k:null):null,wn=_e?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":D?`${He.length} \u96C6${Pt.length?` \xB7 ${Pt.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${He.length} \u96C6 \xB7 \u5171 ${hn} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,lr=(0,t.useMemo)(()=>k?Ie.findIndex(e=>e.id===k.id):-1,[Ie,k]),Dt=(0,t.useCallback)(()=>{let e=re.current;if(e){if(!F.current){let o=He[0]||Ie[0];o&&ft(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[He,Ie]),ft=(0,t.useCallback)((e,o=!0)=>{let p=re.current;if(!p||!e)return;if(F.current&&F.current.id===e.id){o&&Dt();return}F.current&&!p.ended&&p.currentTime>1&&vt(F.current.id,p.currentTime,p.duration||Le.current,!0),F.current=e,X(e),G(_=>_&&e.id),Re(e.duration||0);let v=m[e.id]?.position||0,V=v>5&&(!e.duration||v<e.duration-10)?v:0;mt.current=V,H(V),e.source==="xyz"?p.src=Ge.current?`${Ge.current}/xyz/${e.id.slice(3)}/audio`:`${N}/episodes/${e.id}/audio`:p.src=Ge.current?`${Ge.current}/episodes/${e.id}/audio`:`${N}/episodes/${e.id}/audio`,p.load(),p.playbackRate=St.current.rate||1,p.volume=St.current.volume??.9,o&&p.play().catch(()=>{}),nt({lastEpisodeId:e.id})},[m,vt,nt,Dt]),yn=(0,t.useCallback)(async e=>{let o=e.public?`${N}/xyz/public/play`:`${N}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,p=e.public?{pid:e.pid,eid:e.eid}:{},v=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),V=await v.json().catch(()=>({}));if(!v.ok)throw new Error(V.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ke(),ft(V.item,!0)},[Ke,ft]);(0,t.useEffect)(()=>{let e=R.trim();if(e.length<2){ee([]);return}let o=window.setTimeout(()=>{ge(`${N}/search?q=${encodeURIComponent(e)}`).then(p=>ee(Array.isArray(p.items)?p.items:[])).catch(()=>ee([]))},250);return()=>window.clearTimeout(o)},[R]);let Gt=(0,t.useCallback)((e,o=!0)=>{e&&(ft(e,o),G(e.id))},[ft]),je=(0,t.useCallback)(e=>{let o=re.current;if(!o||!F.current)return;let p=Number(e);if(!Number.isFinite(p))return;let v=Number(Le.current)||0,V=Number.isFinite(o.duration)&&o.duration>0?o.duration:v,_=Math.max(0,V>0?Math.min(p,V):p);try{o.currentTime=_}catch{mt.current=_;return}H(_),vt(F.current.id,_,V||v,!0)},[vt]),kn=(0,t.useCallback)(e=>{let o=r.find(p=>p.id===e.episodeId);if(o){if(F.current?.id===e.episodeId){je(e.start),G(o.id);return}mt.current=e.start,Gt(o,!1)}},[r,Gt,je]),Yo=(0,t.useCallback)(e=>{let o=Do.current;if(!o)return null;let p=o.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(e.clientX-p.left)/p.width)):null},[]),Qt=(0,t.useCallback)(e=>{let o=Yo(e),p=Number.isFinite(Le.current)&&Le.current>0?Le.current:Number.isFinite(re.current?.duration)?re.current.duration:0;o==null||!p||je(o*p)},[Yo,je]),Nn=(0,t.useCallback)(e=>{e.preventDefault(),uo.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Qt(e)},[Qt]),zn=(0,t.useCallback)(e=>{uo.current&&Qt(e)},[Qt]),Zo=(0,t.useCallback)(e=>{uo.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),$n=(0,t.useCallback)(e=>{let o=re.current;if(!o)return;let p=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),je((o.currentTime||0)-p)),e.key==="ArrowRight"&&(e.preventDefault(),je((o.currentTime||0)+p)),e.key==="Home"&&(e.preventDefault(),je(0)),e.key==="End"&&(e.preventDefault(),je(Number.isFinite(o.duration)?o.duration:0))},[je]),Ht=(0,t.useCallback)(e=>{let o=re.current;if(!o||!F.current)return;let p=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||Le.current||0)-1));o.currentTime=p,H(p)},[]),xo=(0,t.useCallback)(e=>{if(!Ie.length)return;let p=((F.current?Ie.findIndex(v=>v.id===F.current.id):-1)+e+Ie.length)%Ie.length;ft(Ie[p],!0)},[Ie,ft]),Cn=(0,t.useCallback)(e=>{let o=re.current;o&&(o.playbackRate=e),nt({rate:e}),A(!1)},[nt]);(0,t.useEffect)(()=>{if(!j)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||A(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[j]),(0,t.useEffect)(()=>{if(!W)return;let e=()=>{let p=Math.max(0,Math.round((W-Date.now())/1e3));if($(p),p<=0){let v=re.current;v&&!v.paused&&v.pause(),se(0),oe(0),y("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[W,y]),(0,t.useEffect)(()=>{if(!L)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||q(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[L]);let ho=(0,t.useCallback)(e=>{if(q(!1),e==="off"){se(0),oe(0),$(0);return}if(e==="end"){se(0),oe(-1),$(0),y("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}oe(e),se(Date.now()+e*6e4),y(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[y]),Rt=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),p=re.current;p&&(p.volume=o),nt({volume:o})},[nt]),Sn=(0,t.useCallback)(()=>{let e=re.current,o=St.current.volume>0?0:.9;e&&(e.volume=o),nt({volume:o})},[nt]),Mn=()=>{let e=re.current;if(!e||!F.current)return;let o=performance.now();o-(Eo.current||0)<400||(Eo.current=o,H(e.currentTime),vt(F.current.id,e.currentTime,e.duration||Le.current))},Pn=()=>{let e=re.current,o=F.current;if(!e||!o)return;let p=Number.isFinite(e.duration)?e.duration:o.duration||0;Re(p);let v=mt.current;mt.current=0,v>0&&v<p-1&&(e.currentTime=v,H(v))},Tn=()=>{let e=re.current;if(F.current&&vt(F.current.id,e?.duration||Le.current||0,e?.duration||Le.current||0,!0),x===-1){oe(0),se(0),$(0),y("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}xo(1)},Dn=async e=>{await me(`${N}/folders`,"POST",{path:e}),await Ke(),y("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},En=async()=>{let e=await fetch(`${N}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},In=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),zt||Lt(!0))},jn=e=>{e.currentTarget.contains(e.relatedTarget)||Lt(!1)},An=async e=>{e.preventDefault(),Lt(!1);let o=e.dataTransfer,p=[...o?.files||[]],v=p.map(ae=>ae.path).filter(ae=>typeof ae=="string"&&ae),V=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ae=>ae.trim()).filter(ae=>ae.startsWith("file://")).map(ae=>decodeURIComponent(ae.replace(/^file:\/\//,""))),_=[...new Set([...v,...V])];if(_.length){try{let ae=await me(`${N}/import/paths`,"POST",{paths:_});await Ke(),y(ae.added?`\u5DF2\u6DFB\u52A0 ${ae.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ae){We(ae.message)}return}let xt=p.filter(ae=>ae.size>0);if(!xt.length){y("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let ht=`drop-${Date.now()}`,eo="",yo=0;for(let ae of xt)try{let Go=await fetch(`${N}/import/upload?name=${encodeURIComponent(ae.name)}&batch=${ht}`,{method:"POST",body:ae}),Ln=await Go.json();Go.ok&&(eo=Ln.folder||eo,yo+=1)}catch{}if(eo)try{await me(`${N}/folders`,"POST",{path:eo})}catch{}await Ke(),y(yo?`\u5DF2\u5BFC\u5165 ${yo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},On=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await me(`${N}/folders`,"DELETE",{path:e}),pe(o=>o===e?"":o),await Ke(),y("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){We(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let p=o.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),Dt()):o.key==="ArrowRight"?(o.preventDefault(),Ht(15)):o.key==="ArrowLeft"?(o.preventDefault(),Ht(-15)):o.key==="ArrowUp"?(o.preventDefault(),Rt(St.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Rt(St.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Dt,Ht,Rt]);let bo=e=>{let o=m[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},wo=e=>{let o=m[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${_t?"nav-collapsed":""}`,onDragOver:In,onDragLeave:jn,onDrop:An},zt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,_t?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Ao},t.default.createElement(Q,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(Q,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Ao},t.default.createElement(Q,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",fo.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(bo).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,p])=>t.default.createElement("button",{key:e,className:`nav-item ${ne===e&&!D?"active":""}`,onClick:()=>{pe(""),fe(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},p||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Pe(!0)},t.default.createElement(Q,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:D===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{fe("all"),ke("all"),we(""),pe(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),fe("all"),ke("all"),we(""),pe(p=>p===e?"":e))}},t.default.createElement(Q,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},no(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),On(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,bn),t.default.createElement("p",{className:"subline"},wn)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${ct?"is-on":""}`,onClick:()=>Bt(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(Q,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",Wo.length?` ${Wo.length}`:"")),t.default.createElement("button",{className:`tool-btn ${ut?"is-on":""}`,onClick:()=>{Ft(e=>!e),tt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(Q,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(Q,{name:"search",size:16}),t.default.createElement("input",{value:R,onChange:e=>we(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:ye,onChange:e=>w(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),ut?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",he.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>tt(He.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(Qe,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!gt.length&&!he.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Ae,{hint:`${gt.length} \u96C6`,disabled:!gt.length,onSelect:()=>{e(),Zt(gt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(Ae,{hint:`${he.length} \u96C6`,disabled:!he.length,onSelect:()=>{e(),Zt(he)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!he.length,onClick:()=>Xo(he)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{tt([]),Ft(!1)}},"\u53D6\u6D88")):null,et?t.default.createElement("div",{className:"banner error",onClick:()=>We("")},et," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,Y?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>G(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},Y.artist,Y.album?` \xB7 ${Y.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(Et,{item:Y,size:288})),t.default.createElement("h2",{className:"episode-title"},Y.title),t.default.createElement("p",{className:"episode-sub"},Y.artist,Y.album?` \xB7 ${Y.album}`:""),t.default.createElement("p",{className:"episode-path",title:Y.file},Y.location||Y.file),t.default.createElement("p",{className:"episode-stats"},ko(Y.duration)," \xB7 ",No(Y.mtime)," \xB7 \u5DF2\u542C ",Math.round(wo(Y)),"%"),Y.shownotes?t.default.createElement("div",{className:`episode-notes ${T?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>K(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",T?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},Y.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:Dt},b&&k?.id===Y.id?"\u6682\u505C":"\u64AD\u653E"),te==="queued"||te==="running"?t.default.createElement("button",{className:"btn ghost",onClick:vo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:qt},Y.source==="xyz"?P?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":P?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(Qe,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,Y.source==="xyz"?t.default.createElement(Ae,{onSelect:()=>{e(),gn()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement(Ae,{danger:!0,onSelect:()=>{e(),Xo([Y.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(ro,{inline:!0,transcript:P,status:te,progress:De?.progress,stage:De?.stage,chunks:De?.chunks,queued:De?.queued,elapsed:At,editingId:a,draft:U,onDraftChange:Ze,onEditLine:Oo,onSaveLine:Lo,onCancelEdit:()=>z(null),onSplitLine:Bo,onMergeLine:Uo,onUndo:Fo,onValidate:qo,onResegment:Ko,issues:Ee,onCancel:vo,error:Ot,position:h,fontSize:wt,onFontSize:mo,onSeek:je,onClose:()=>G(null),onStart:qt,target:Te,job:J,onChangeTarget:Vo,onTranslate:Jo,onOpenSettings:()=>Nt(!0)})))):ne==="xyz"?t.default.createElement(So,{onPlay:yn,currentId:k?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${ve===e?"is-on":""}`,onClick:()=>ke(e)},o))),ne==="all"&&!R&&fo.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},fo.map(e=>{let o=wo(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${k?.id===e.id?"is-current":""}`,onClick:()=>Gt(e,!0)},t.default.createElement(Et,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,R.trim().length>=2&&le.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},le.length)),le.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>kn(e)},t.default.createElement("span",{className:"hit-time"},Se(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,D?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},Tt.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(Q,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===Tt.length-1?"is-current":""}`,onClick:()=>Oe(e.rel),disabled:o===Tt.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!_e&&D&&Pt.length>0&&!R?t.default.createElement("div",{className:"folder-rows"},Pt.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Oe(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(Q,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,_e?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):He.length===0&&!(D&&Pt.length>0&&!R)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":D?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${Pt.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Pe(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&D?t.default.createElement("button",{className:"btn",onClick:()=>pe("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},He.map((e,o)=>{let p=wo(e),v=k?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${v?"is-current":""} ${bo(e)?"is-finished":""} ${ut&&he.includes(e.id)?"is-selected":""}`,onClick:()=>ut?vn(e.id):Gt(e,!0)},t.default.createElement("span",{className:"col-index row-index"},ut?he.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(Q,{name:"check",size:14})):null:v&&b?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Et,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",No(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},ko(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:V=>{V.stopPropagation(),fn(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},bo(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(Q,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),pt&&k&&!Y?t.default.createElement(ro,{transcript:P,status:te,progress:De?.progress,stage:De?.stage,chunks:De?.chunks,queued:De?.queued,elapsed:At,editingId:a,draft:U,onDraftChange:Ze,onEditLine:Oo,onSaveLine:Lo,onCancelEdit:()=>z(null),onSplitLine:Bo,onMergeLine:Uo,onUndo:Fo,onValidate:qo,onResegment:Ko,issues:Ee,onCancel:vo,error:Ot,position:h,fontSize:wt,onFontSize:mo,onSeek:je,onClose:()=>dt(!1),onStart:qt,target:Te,job:J,onChangeTarget:Vo,onTranslate:Jo,onOpenSettings:()=>Nt(!0)}):null,ct?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>Bt(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},$t.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):$t.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},an(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>go(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>go(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>go(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!gt.length,onClick:()=>Zt(gt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",gt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!he.length,onClick:()=>Zt(he)},"\u8F6C\u5199\u5DF2\u9009 ",he.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:Do,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ie||0),"aria-valuenow":Math.round(h||0),"aria-valuetext":`${Se(h)} / ${Se(ie)}`,onPointerDown:Nn,onPointerMove:zn,onPointerUp:Zo,onPointerCancel:Zo,onKeyDown:$n},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ie?Math.min(100,Math.max(0,h/ie*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ie?Math.min(100,Math.max(0,h/ie*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},k?t.default.createElement("button",{className:"now-open",onClick:()=>G(k.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Et,{item:k,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:k.title},k.title),t.default.createElement("div",{className:"now-artist"},k.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>xo(-1)},t.default.createElement(Q,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Ht(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:Dt,disabled:!k&&He.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(Q,{name:b?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Ht(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>xo(1)},t.default.createElement(Q,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(Qe,{className:`player-subs ${pt||lt?"is-active":""}`,buttonClassName:`subs-btn ${pt||lt?"active":""}`,placement:"up",disabled:!k,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(Q,{name:"wave",size:15}),t.default.createElement("span",null,P?"\u5B57\u5E55":te==="queued"||te==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(Ae,{checked:pt,hint:P?`${P.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),mn()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(Ae,{checked:lt,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),dn()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Se(h)," / ",Se(ie)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>A(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":j},C.rate,"\xD7"),j?t.default.createElement("span",{className:"rate-menu",role:"menu"},_n.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===C.rate,className:e===C.rate?"is-on":"",onClick:()=>Cn(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${W?"active":""}`,onClick:()=>q(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":L},t.default.createElement(Q,{name:"moon",size:14}),W?t.default.createElement("span",{className:"sleep-left"},Se(Me)):null),L?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!W&&x!==-1,className:!W&&x!==-1?"is-on":"",onClick:()=>ho("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":x===e,className:x===e?"is-on":"",onClick:()=>ho(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":x===-1,className:x===-1?"is-on":"",onClick:()=>ho("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Sn,title:"\u9759\u97F3"},t.default.createElement(Q,{name:C.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:C.volume,onChange:e=>Rt(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),at?t.default.createElement(Wn,{onClose:()=>Pe(!1),onSubmit:Dn,onPick:En}):null,co?t.default.createElement(Yn,{config:lo,onClose:()=>Nt(!1),onSave:async e=>{let o=await me(`${N}/translate/settings`,"PUT",e);Xt(o),Nt(!1),y("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,st?t.default.createElement("div",{className:"toast"},st):null,lt?t.default.createElement(Co,{line:Kt,speakerLabel:un,target:Te,status:te,fontSize:wt,onFontSize:mo,x:ze.x,y:ze.y,onMove:pn,onClose:cn,onSeek:je}):null,t.default.createElement("audio",{ref:re,preload:"metadata",onPlay:()=>xe(!0),onPause:()=>{xe(!1);let e=re.current;F.current&&e&&e.currentTime>0&&!e.ended&&vt(F.current.id,e.currentTime,e.duration||Le.current,!0)},onTimeUpdate:Mn,onLoadedMetadata:Pn,onEnded:Tn,onError:()=>{xe(!1),y("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var ao=require("react");function Zn(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(m=>Number.parseFloat(m));if(s.length<3||s.length>3&&s[3]===0)return null;let c=m=>{let g=m/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function Gn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=Zn(i);if(s!==null)return s}return null}function sn(){let r=Gn();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function so(){let[r,i]=(0,ao.useState)(sn);return(0,ao.useEffect)(()=>{let s=()=>i(sn());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let m=window.matchMedia("(prefers-color-scheme: light)");return m.addEventListener?.("change",s),()=>{c.disconnect(),m.removeEventListener?.("change",s)}},[]),r}var n=Je(require("react"),1);var io="0.11.33";var B="/podwave/api";async function be(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function $e(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),m=await c.json().catch(()=>({}));if(!c.ok)throw new Error(m.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return m}function Qn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Ve(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Rn(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function er(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function tr(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function or(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function To(){let r=so(),[i,s]=(0,n.useState)([]),[c,m]=(0,n.useState)(""),[g,f]=(0,n.useState)(0),[M,C]=(0,n.useState)(!1),[O,j]=(0,n.useState)([]),[A,T]=(0,n.useState)(null),[K,x]=(0,n.useState)(""),[oe,W]=(0,n.useState)(!1),[se,Me]=(0,n.useState)({asrModel:"",translateModel:""}),[$,L]=(0,n.useState)(null),[q,R]=(0,n.useState)(null),[we,le]=(0,n.useState)({showSidebarPanel:!0}),[ee,ye]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[w,ne]=(0,n.useState)(null),[fe,D]=(0,n.useState)(null),[pe,Ue]=(0,n.useState)(null),[Oe,ve]=(0,n.useState)(!1),[ke,Ne]=(0,n.useState)("auto"),[G,k]=(0,n.useState)(!1),[X,b]=(0,n.useState)(null),[xe,h]=(0,n.useState)(!1),[H,ie]=(0,n.useState)(""),[Re,_e]=(0,n.useState)(15),[rt,at]=(0,n.useState)(!0),[Pe,et]=(0,n.useState)("api"),[We,st]=(0,n.useState)(!0),[it,P]=(0,n.useState)("api"),[Ce,te]=(0,n.useState)("https://api.deepseek.com"),[d,E]=(0,n.useState)("deepseek-chat"),[Ye,bt]=(0,n.useState)(""),[wt,jt]=(0,n.useState)(""),[lt,yt]=(0,n.useState)(""),[ze,de]=(0,n.useState)(""),[At,kt]=(0,n.useState)(""),[Ot,I]=(0,n.useState)(""),pt=(0,n.useCallback)(async()=>{try{let[a,z,U,Ze,Ee,Ct,re,Ge]=await Promise.all([be(`${B}/history`),be(`${B}/models`),be(`${B}/translate/settings`),be(`${B}/ui-settings`),be(`${B}/transcribe/settings`),be(`${B}/import/settings`),be(`${B}/setup`),be(`${B}/update`)]);ne(re),b(Ge),re?.job?.status==="running"&&k(!0),ye({mode:Ct.mode||"copy",orphans:Ct.orphans||0,orphanBytes:Ct.orphanBytes||0}),le({showSidebarPanel:Ze?.showSidebarPanel!==!1}),ie((Ee.hotwords||[]).join(" ")),_e(Ee.chunkMinutes||15),at(Ee.diarize!==!1),et(Ee.provider||"api"),st(Ee.realtime!==!1),s(a.items||[]),m(a.dir||""),f(Number(a.bytes)||0),C(Ze?.historyOpen===!0),j(z.models||[]),T(z.storage||null),x(z.storage?.dir||""),Me(z.config||{asrModel:"",translateModel:""}),L(z.transcribe||null),jt(z.config?.asrModel||""),yt(z.config?.translateModel||""),R(U),P(U.provider||"api"),te(U.apiBase||"https://api.deepseek.com"),E(U.apiModel||"deepseek-chat"),bt(""),I("")}catch(a){I(a.message)}},[]);(0,n.useEffect)(()=>{pt()},[pt]),(0,n.useEffect)(()=>{let a=!1;return be(`${B}/setup/plan?source=${ke}&mode=${Pe==="local"?"local":"basic"}`).then(z=>{a||D(z)}).catch(()=>{}),()=>{a=!0}},[ke,Pe,w?.job?.status]),(0,n.useEffect)(()=>{if(!G&&w?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let z=await be(`${B}/setup`);ne(z),z.job?.status!=="running"&&k(!1)}catch{}},2500);return()=>window.clearInterval(a)},[G,w?.job?.status]);let dt=async()=>{I(""),k(!0);try{await $e(`${B}/setup/install`,"POST",{source:ke});let a=await be(`${B}/setup`);ne(a),J("\u5F00\u59CB\u5B89\u88C5")}catch(a){k(!1),I(a.message)}},lo=()=>{let a=!M;C(a),$e(`${B}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},Xt=async()=>{try{await $e(`${B}/history/open`,"POST",{})}catch(a){I(a.message)}},Te=async()=>{I(""),k(!0);try{await $e(`${B}/setup/install`,"POST",{source:ke,mode:"local"});let a=await be(`${B}/setup`);ne(a),J("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){k(!1),I(a.message)}},po=async()=>{try{await $e(`${B}/setup/cancel`,"POST",{}),J("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){I(a.message)}},J=a=>{kt(a),window.setTimeout(()=>kt(""),2400)},Fe=async()=>{ve(!0);try{let a=await be(`${B}/setup/verify`);Ue(a),J(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){J(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{ve(!1)}},co=async()=>{try{let a=await be(`${B}/setup/diagnose`),z=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(z)}catch{let U=document.createElement("textarea");U.value=z,U.style.position="fixed",U.style.opacity="0",document.body.appendChild(U),U.select(),document.execCommand("copy"),U.remove()}J("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){J(a.message||"\u590D\u5236\u5931\u8D25")}},Nt=async()=>{de("api"),I("");try{let a={provider:it,apiBase:Ce,apiModel:d};Ye.trim()&&(a.apiKey=Ye.trim());let z=await $e(`${B}/translate/settings`,"PUT",a);R(z),bt(""),J("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){I(a.message)}finally{de("")}},_t=async()=>{de("models"),I("");try{let a=await $e(`${B}/models`,"PUT",{asrModel:wt,translateModel:lt});Me(a.config),j(a.models||[]),L(a.transcribe||null),J("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){I(a.message)}finally{de("")}},Wt=async()=>{try{await $e(`${B}/models/open`,"POST",{})}catch(a){I(a.message)}},zt=async(a,z=!0)=>{W(!0),I("");try{let U=await $e(`${B}/models/dir`,"POST",{dir:a,move:z});T(U.storage||null),j(U.models||[]),x(U.storage?.dir||"");let Ze=(U.moved||[]).length,Ee=(U.skipped||[]).length;J(Ze||Ee?`\u5DF2\u8FC1\u79FB ${Ze} \u4E2A\u6A21\u578B${Ee?`\uFF0C${Ee} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(U){I(U.message)}finally{W(!1)}},Lt=async a=>{de(`model:${a}`),I("");try{let z=await $e(`${B}/models/remove`,"POST",{name:a});T(z||null),j(z.models||[]),J(`\u5DF2\u5220\u9664 ${a}`)}catch(z){I(z.message)}finally{de("")}},De=O.length?O:[{name:se.asrModel||"qwen3-asr-1.7b-8bit",ready:$?.modelReady},{name:se.translateModel||"hy-mt2-1.8b-4bit",ready:q?.localReady}],Yt=async()=>{h(!0);try{b(await be(`${B}/update?force=1`))}catch{J("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{h(!1)}},ct=De.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),Bt=De.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),$t=async()=>{de("ui"),I("");try{let a=await $e(`${B}/ui-settings`,"PUT",{showSidebarPanel:we.showSidebarPanel});le({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),J("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){I(a.message)}finally{de("")}},Ut=async a=>{de("import"),I("");try{let z=await $e(`${B}/import/settings`,"PUT",{mode:a});ye(U=>({...U,mode:z.mode})),J("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(z){I(z.message)}finally{de("")}},ut=async()=>{if(ee.orphans&&window.confirm(`\u6E05\u7406 ${ee.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){de("imports"),I("");try{let a=await $e(`${B}/imports/orphans`,"DELETE",{});ye(z=>({...z,orphans:0,orphanBytes:0})),J(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){I(a.message)}finally{de("")}}},Ft=async()=>{de("transcribe"),I("");try{let a=H.split(/[\s,，、]+/).map(U=>U.trim()).filter(Boolean).slice(0,500),z=await $e(`${B}/transcribe/settings`,"PUT",{provider:Pe,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(Re)||15)),diarize:rt,realtime:We});ie((z.hotwords||[]).join(" ")),_e(z.chunkMinutes||15),at(z.diarize!==!1),et(z.provider||"api"),z.runtime&&L(z.runtime),J("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){I(a.message)}finally{de("")}},he=De,tt=!!(io&&w?.version&&w.version!==io);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,oo),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),tt?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",io,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",w.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,Ot?n.default.createElement("div",{className:"banner error",onClick:()=>I("")},Ot):null,At?n.default.createElement("div",{className:"settings-message"},At):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),w?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},w.platform?.osLabel," \xB7 ",w.platform?.arch," \xB7 ",w.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",w.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",w.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:co},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:Oe,onClick:Fe},Oe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),pe?n.default.createElement("ul",{className:"setup-components"},pe.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(w.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},Ve(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:ke,onChange:a=>Ne(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),fe?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Ve(fe.totalBytes)," \xB7 ",fe.items.length," \u9879"),n.default.createElement("ul",null,fe.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?Ve(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:G||w.job?.status==="running",onClick:dt},G||w.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),w.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:po},"\u53D6\u6D88"):null),w.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,w.job.stage||w.job.status),n.default.createElement("span",null,w.job.progress||0,"% \xB7 ",Ve(w.job.bytes)," / ",Ve(w.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${w.job.progress||0}%`}})),w.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",w.job.error):null,w.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},w.job.warning):null,w.job.status==="done"&&(!w.job.summary||!w.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,w.job.status==="done"&&w.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",w.job.modelsDir):null,Array.isArray(w.job.summary)&&w.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},w.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":Ve(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:`settings-card history-card ${M?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>lo(),"aria-expanded":M,title:M?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",g?` \xB7 ${Ve(g)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),M?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Qn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Rn(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Xt,disabled:!c},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},c?`${c}${g?` \xB7 ${Ve(g)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:Pe,onChange:a=>et(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),Pe==="api"?n.default.createElement("p",{className:"settings-status"},$?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},$?.installed&&$?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${$.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:H,onChange:a=>ie(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:Re,onChange:a=>_e(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:We,onChange:a=>st(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:rt,onChange:a=>at(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ft,disabled:ze==="transcribe"},ze==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),Pe==="local"&&!($?.installed&&$?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:Te,disabled:G},G?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:ee.mode==="copy",onChange:()=>Ut("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:ee.mode==="reference",onChange:()=>Ut("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ut,disabled:ze==="imports"||!ee.orphans},ee.orphans?`\u6E05\u7406 ${ee.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(ee.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:it,onChange:a=>P(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Ce,onChange:a=>te(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:d,onChange:a=>E(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:Ye,onChange:a=>bt(a.target.value),placeholder:q?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${q.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Nt,disabled:ze==="api"},ze==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},q?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:we.showSidebarPanel,onChange:a=>le({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:$t,disabled:ze==="ui"},ze==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},er(A),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),A?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:A.dir},A.dir),n.default.createElement("span",{className:"model-path-size"},or(A)," \xB7 \u5171 ",Ve(A.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:K,onChange:a=>x(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:oe||K.trim()===A.dir,onClick:()=>zt(K,!0)},oe?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:Wt},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),A.projectDir&&A.dir!==A.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:oe,onClick:()=>zt(A.projectDir,!0)},tr(A)):null,A.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:oe,onClick:()=>zt("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),O.length?n.default.createElement("ul",{className:"model-list"},O.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",Ve(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||ze===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>Lt(a.name)},ze===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:wt,onChange:a=>jt(a.target.value)},(ct.length?ct:he).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},$?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:lt,onChange:a=>yt(a.target.value)},(Bt.length?Bt:he).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},q?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:_t,disabled:ze==="models"},ze==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},X?.current?`v${X.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},X?.latest?`v${X.latest}`:X?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},X?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":X?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${X.error}\uFF09\u3002`:X?.latest?X?.current&&X?.latest&&X.current!==X.latest&&X.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Yt,disabled:xe},xe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),X?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(X.checkedAt).toLocaleString()):null))))}function nr({size:r=16}){return Xe.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Xe.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Xe.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Xe.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Xe.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Xe.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function rr(){let r=so();return Xe.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Xe.default.createElement("style",null,oo),Xe.default.createElement(Po,null))}function ar(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},rr)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},To));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},m=g=>{if(c(!g),g&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},nr);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>m(g?.showSidebarPanel!==!1)).catch(()=>m(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{m(g?.detail?.showSidebarPanel!==!1)})}var sr=["slots"];

return module.exports}})
