window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Kn=Object.create;var no=Object.defineProperty;var Hn=Object.getOwnPropertyDescriptor;var qn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Vn=Object.prototype.hasOwnProperty;var Xn=(r,i)=>{for(var s in i)no(r,s,{get:i[s],enumerable:!0})},en=(r,i,s,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let m of qn(i))!Vn.call(r,m)&&m!==s&&no(r,m,{get:()=>i[m],enumerable:!(u=Hn(i,m))||u.enumerable});return r};var Ye=(r,i,s)=>(s=r!=null?Kn(Jn(r)):{},en(i||!r||!r.__esModule?no(s,"default",{value:r,enumerable:!0}):s,r)),Wn=r=>en(no({},"__esModule",{value:!0}),r);var dr={};Xn(dr,{apply:()=>lr,inject:()=>pr});module.exports=Wn(dr);var Ze=Ye(require("react"),1);var ro=`
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
`;var t=Ye(require("react"),1);var S=Ye(require("react"),1);function te({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),S.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),S.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),S.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return S.default.createElement("svg",{...s},S.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),S.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),S.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),S.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return S.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},S.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),S.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),S.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),S.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),S.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return S.default.createElement("svg",{...s},S.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Co=Ye(require("react"),1);function Pe(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),u=Math.floor(i%3600/60),m=i%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${u}:${String(m).padStart(2,"0")}`}function zo(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function $o(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function tn(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function ao(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var _n="/podwave/api";function Dt({item:r,size:i=44,className:s=""}){let u={width:i,height:i};return r&&r.hasCover?Co.default.createElement("img",{className:`cover ${s}`,style:u,src:`${_n}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Co.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},tn(r&&r.title))}var v=Ye(require("react"),1);var ue=Ye(require("react"),1);function et({trigger:r,title:i,align:s="end",placement:u="down",className:m="",buttonClassName:f="",disabled:b=!1,children:M}){let[$,I]=(0,ue.useState)(!1),A=(0,ue.useRef)(null);(0,ue.useEffect)(()=>{if(!$)return;let D=h=>{A.current?.contains(h.target)||I(!1)},q=h=>{h.key==="Escape"&&I(!1)};return document.addEventListener("pointerdown",D),document.addEventListener("keydown",q),()=>{document.removeEventListener("pointerdown",D),document.removeEventListener("keydown",q)}},[$]),(0,ue.useEffect)(()=>{b&&$&&I(!1)},[b,$]);let O=["pop-panel",s==="start"?"is-start":"",u==="up"?"is-up":""].filter(Boolean).join(" ");return ue.default.createElement("span",{className:`pop-wrap ${m}`,ref:A},ue.default.createElement("button",{type:"button",className:f||"pop-btn",onClick:()=>I(D=>!D),title:i,disabled:b,"aria-haspopup":"menu","aria-expanded":$},r),$?ue.default.createElement("span",{className:O,role:"menu"},M({close:()=>I(!1)})):null)}function je({children:r,hint:i,checked:s=!1,danger:u=!1,disabled:m=!1,onSelect:f}){let b=["pop-item",s?"is-on":"",u?"is-danger":""].filter(Boolean).join(" ");return ue.default.createElement("button",{type:"button",className:b,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:m,onClick:f},ue.default.createElement("span",null,r),i?ue.default.createElement("span",{className:"pop-hint"},i):null)}function So({children:r,hint:i,href:s,onSelect:u}){return ue.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:u},ue.default.createElement("span",null,r),i?ue.default.createElement("span",{className:"pop-hint"},i):null)}var Xt=Ye(require("react"),1);function Wt({value:r,onChange:i,compact:s=!1}){let u=Number.isFinite(Number(r))?Number(r):15;return Xt.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},Xt.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),Xt.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:u,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:m=>i(Number(m.target.value))}),Xt.default.createElement("span",{className:"sub-size-value"},u))}var on="/podwave/api";function so({transcript:r,status:i,progress:s,stage:u,chunks:m,queued:f,elapsed:b,error:M,position:$,onSeek:I,onClose:A,onStart:O,onCancel:D,target:q,job:h,onChangeTarget:_,onTranslate:Z,onOpenSettings:ne,inline:Te=!1,editingId:re=null,draft:ie="",onDraftChange:pe,onEditLine:W,onSaveLine:be,onCancelEdit:le,onSplitLine:G,onMergeLine:ve,onUndo:c,onValidate:w,onResegment:j,issues:C=[],fontSize:se=15,onFontSize:De=null}){let Ce=(0,v.useRef)(null),fe=(0,v.useRef)(null),[we,ye]=(0,v.useState)(!1),Q=r?.lines?.findIndex(x=>$>=x.start&&$<x.end)??-1;(0,v.useEffect)(()=>{if(Q<0||!Ce.current)return;Ce.current.querySelector(`[data-seg="${Q}"]`)?.scrollIntoView({block:"nearest"})},[Q]);let k=i==="queued"||i==="running",J=h?.status==="running"||h?.status==="queued",ke=h?.missing??0,Oe=J?`\u7FFB\u8BD1\u4E2D${h?.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""}`:h?.status==="partial"?"\u7EED\u7FFB":h?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",R=async()=>{let ee=(r?.lines||[]).map(T=>{let Se=Pe(T.start),Ke=q?T.translations?.[q]:"";return Ke?`${Se} ${T.text}
${" ".repeat(Se.length+1)}${Ke}`:`${Se} ${T.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(ee);else{let T=document.createElement("textarea");T.value=ee,T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),document.body.removeChild(T)}ye(!0),setTimeout(()=>ye(!1),1600)}catch{ye(!1)}};return v.default.createElement("section",{className:`transcript-panel ${Te?"inline":""}`,style:{"--sub-size":`${se}px`}},v.default.createElement("header",{className:"transcript-head"},v.default.createElement("h3",null,"\u5B57\u5E55"),r?v.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,v.default.createElement("div",{className:"transcript-actions"},v.default.createElement("select",{className:"tr-select",value:q,onChange:x=>_(x.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},v.default.createElement("option",{value:""},"\u5BF9\u7167"),v.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),v.default.createElement("option",{value:"en"},"English")),De?v.default.createElement(et,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${se}px`,align:"end"},()=>v.default.createElement("span",{className:"pop-fs"},v.default.createElement(Wt,{value:se,onChange:De}))):null,r&&q&&Z?J?v.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},Oe):ke>0?v.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Z,title:`\u8FD8\u6709 ${ke} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},Oe):null:null,r?v.default.createElement("button",{className:"mini-link",onClick:c,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"):null,v.default.createElement(et,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:x})=>v.default.createElement(v.default.Fragment,null,r?v.default.createElement(je,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{x(),w()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&j?v.default.createElement(je,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{x(),j()}},"\u6574\u7406\u65AD\u53E5"):null,v.default.createElement(je,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{x(),ne()}},"\u8BBE\u7F6E"))),r?v.default.createElement(et,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:x})=>v.default.createElement(v.default.Fragment,null,v.default.createElement(So,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${on}/episodes/${r.id}/transcript/export?format=srt`,onSelect:x},"\u5B57\u5E55\u6587\u4EF6 .srt"),v.default.createElement(So,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${on}/episodes/${r.id}/transcript/export?format=md`,onSelect:x},"\u6587\u7A3F .md"),v.default.createElement(je,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:R},we?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,Te?null:v.default.createElement("button",{className:"transcript-close",onClick:A,title:"\u6536\u8D77"},"\xD7"))),v.default.createElement("div",{className:"transcript-body",ref:Ce},r&&k?v.default.createElement("div",{className:"tr-strip"},v.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min((m.done||0)+1,m.total)}/${m.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),D?v.default.createElement("button",{className:"seg-tool",onClick:D},"\u53D6\u6D88"):null):null,r&&C?.length?v.default.createElement("div",{className:"tr-issues"},C.slice(0,5).map(x=>v.default.createElement("div",{key:x},"\xB7 ",x)),C.length>5?v.default.createElement("div",null,"\u2026\u5171 ",C.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?v.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?v.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,h?.status==="partial"?v.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,h?.status==="none"&&q&&r&&(h.missing??0)>0?v.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,r?r.lines.map((x,ee)=>v.default.createElement("div",{key:x.id,"data-seg":ee,className:`seg-row ${ee===Q?"active":""} ${re===x.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Pe(x.start)}`,onClick:()=>I(x.start),onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),I(x.start))}},v.default.createElement("span",{className:"seg-time"},Pe(x.start)),re===x.id?v.default.createElement("span",{className:"seg-edit",onClick:T=>T.stopPropagation()},v.default.createElement("textarea",{ref:fe,value:ie,rows:Math.min(4,Math.max(2,Math.ceil((ie.length||1)/40))),onChange:T=>pe(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&be(x.id),T.key==="Escape"&&le()}}),v.default.createElement("span",{className:"seg-edit-actions"},v.default.createElement("button",{className:"seg-tool",onClick:()=>be(x.id)},"\u4FDD\u5B58"),v.default.createElement("button",{className:"seg-tool",onClick:()=>G(x.id,fe.current?.selectionStart??Math.floor(ie.length/2))},"\u62C6\u5206"),v.default.createElement("button",{className:"seg-tool",onClick:le},"\u53D6\u6D88"))):v.default.createElement(v.default.Fragment,null,x.speaker!=null?v.default.createElement("span",{className:`seg-speaker spk-${x.speaker%5}`},r.speakers?.[x.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${x.speaker+1}`):null,v.default.createElement("span",{className:"seg-text"},x.text,x.translations?.[q]?v.default.createElement("span",{className:"seg-trans"},x.translations[q]):null),v.default.createElement("span",{className:"seg-tools"},v.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:T=>{T.stopPropagation(),W(x)}},"\u270E"),ee<r.lines.length-1?v.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:T=>{T.stopPropagation(),ve(x.id)}},"\u21E3"):null)))):k?v.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",m?.total?` \xB7 \u7B2C ${Math.min(m.done+1,m.total)}/${m.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",s?.percent!=null?v.default.createElement("span",{className:"tx-progress"},v.default.createElement("span",{style:{width:`${s.percent}%`}})):null,v.default.createElement("br",null),v.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),v.default.createElement("br",null),D?v.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:D},"\u53D6\u6D88\u8F6C\u5199"):null):M?v.default.createElement("div",{className:"transcript-status"},v.default.createElement("span",{className:"err"},M),v.default.createElement("br",null),v.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:O},"\u91CD\u8BD5")):v.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",v.default.createElement("br",null),v.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:O},"\u5F00\u59CB\u8F6C\u5199"))))}var U=Ye(require("react"),1);function Mo({line:r,target:i,fontSize:s,onFontSize:u,x:m,y:f,width:b,height:M,onMove:$,onResize:I,onClose:A,onSeek:O,speakerLabel:D,status:q}){let h=(0,U.useRef)(null),_=(0,U.useRef)(null),Z=(0,U.useRef)(null),ne=(0,U.useCallback)((c,w)=>{let j=h.current,C=j?.offsetWidth||420,se=j?.offsetHeight||120,De=Math.max(8,window.innerWidth-C-8),Ce=Math.max(8,window.innerHeight-se-8);return{x:Math.min(De,Math.max(8,c)),y:Math.min(Ce,Math.max(8,w))}},[]),Te=(0,U.useCallback)(c=>{if(c.button!==void 0&&c.button!==0)return;let w=h.current;if(!w)return;let j=w.getBoundingClientRect();_.current={dx:c.clientX-j.left,dy:c.clientY-j.top},c.currentTarget.setPointerCapture?.(c.pointerId)},[]),re=(0,U.useCallback)(c=>{let w=_.current;if(!w)return;let j=ne(c.clientX-w.dx,c.clientY-w.dy);$(j.x,j.y,!1)},[ne,$]),ie=(0,U.useCallback)(c=>{let w=_.current;if(!w)return;_.current=null,c.currentTarget.releasePointerCapture?.(c.pointerId);let j=ne(c.clientX-w.dx,c.clientY-w.dy);$(j.x,j.y,!0)},[ne,$]),pe=(0,U.useCallback)(c=>{if(c.button!==void 0&&c.button!==0)return;c.stopPropagation();let w=h.current;if(!w)return;let j=w.getBoundingClientRect();Z.current={startX:c.clientX,startY:c.clientY,width:j.width,height:j.height},c.currentTarget.setPointerCapture?.(c.pointerId)},[]),W=(0,U.useCallback)(c=>{let w=Z.current;if(!w)return null;let j=Math.max(240,window.innerWidth-(m==null?16:m+8)),C=Math.max(92,window.innerHeight-(f==null?16:f+8));return{width:Math.round(Math.min(j,Math.max(240,w.width+(c.clientX-w.startX)))),height:Math.round(Math.min(C,Math.max(92,w.height+(c.clientY-w.startY))))}},[m,f]),be=(0,U.useCallback)(c=>{if(!Z.current)return;c.stopPropagation();let w=W(c);w&&I(w.width,w.height,!1)},[I,W]),le=(0,U.useCallback)(c=>{if(!Z.current)return;c.stopPropagation();let w=W(c);Z.current=null,c.currentTarget.releasePointerCapture?.(c.pointerId),w&&I(w.width,w.height,!0)},[I,W]);(0,U.useEffect)(()=>{let c=w=>{w.key==="Escape"&&A()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[A]);let G=r&&i?r.translations?.[i]:"",ve=q==="queued"||q==="running";return U.default.createElement("div",{ref:h,className:`caption-overlay ${M?"is-sized":""}`,style:{left:m??void 0,top:f??void 0,right:m==null?void 0:"auto",bottom:f==null?void 0:"auto",width:b?`${b}px`:void 0,height:M?`${M}px`:void 0,"--sub-size":`${s||15}px`}},U.default.createElement("div",{className:"caption-head",onPointerDown:Te,onPointerMove:re,onPointerUp:ie,onPointerCancel:ie,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},U.default.createElement(te,{name:"wave",size:13}),U.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),U.default.createElement(Wt,{value:s,onChange:u,compact:!0}),U.default.createElement("button",{className:"caption-close",onClick:A,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),U.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?O(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:c=>{r&&(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),O(r.start))},title:r?`\u8DF3\u5230 ${Pe(r.start)}`:void 0},r?U.default.createElement(U.default.Fragment,null,D?U.default.createElement("span",{className:"caption-speaker"},D):null,U.default.createElement("div",{className:"caption-text"},r.text),G?U.default.createElement("div",{className:"caption-trans"},G):null):U.default.createElement("div",{className:"caption-hint"},ve?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),U.default.createElement("span",{className:"caption-resize",onPointerDown:pe,onPointerMove:be,onPointerUp:le,onPointerCancel:le,onDoubleClick:()=>I(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var l=Ye(require("react"),1),me="/podwave/api";async function Fe(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Et(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),u=await s.json().catch(()=>({}));if(!s.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return u}function nn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function rn(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Po({onPlay:r,currentId:i}){let[s,u]=(0,l.useState)(null),[m,f]=(0,l.useState)(""),[b,M]=(0,l.useState)(""),[$,I]=(0,l.useState)(""),[A,O]=(0,l.useState)(""),[D,q]=(0,l.useState)(0),[h,_]=(0,l.useState)(!1),[Z,ne]=(0,l.useState)(""),[Te,re]=(0,l.useState)(""),[ie,pe]=(0,l.useState)([]),[W,be]=(0,l.useState)(!1),[le,G]=(0,l.useState)(null),[ve,c]=(0,l.useState)([]),[w,j]=(0,l.useState)(null),[C,se]=(0,l.useState)(!1),[De,Ce]=(0,l.useState)(""),[fe,we]=(0,l.useState)(null),[ye,Q]=(0,l.useState)(!1),[k,J]=(0,l.useState)(null),[ke,Oe]=(0,l.useState)(!1),R=(0,l.useCallback)(async(d=!1)=>{be(!0);try{let E=await Fe(`${me}/xyz/subscriptions${d?"?refresh=1":""}`);pe(E.items||[])}catch(E){x(E)}finally{be(!1)}},[]);function x(d){let E=String(d?.message||"");if(E.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||E.includes("\u767B\u5F55\u5DF2\u5931\u6548")){u(Qe=>({...Qe||{},loggedIn:!1})),pe([]),G(null),c([]),ne(""),f("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}f(ee(E))}function ee(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function T(){try{await Et(`${me}/xyz/open-web`,{})}catch(d){x(d)}}(0,l.useEffect)(()=>{Fe(`${me}/xyz/status`).then(d=>{u(d),d.loggedIn&&R()}).catch(d=>x(d)),Fe(`${me}/xyz/local-app`).then(d=>J(d)).catch(()=>J({available:!1}))},[R]),(0,l.useEffect)(()=>{if(!D)return;let d=setInterval(()=>q(E=>Math.max(0,E-1)),1e3);return()=>clearInterval(d)},[D]);async function Se(){if(f(""),!/^1\d{10}$/.test($.trim())){f("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}M("send");try{let d=await Et(`${me}/xyz/auth/send-code`,{phone:$.trim(),areaCode:"+86"});q(60),d.devCode&&f(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){x(d)}finally{M("")}}async function Ke(){if(f(""),!$.trim()||!A.trim()){f("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}M("login");try{await Et(`${me}/xyz/auth/login`,{phone:$.trim(),code:A.trim(),areaCode:"+86"});let d=await Fe(`${me}/xyz/status`);u(d),await R()}catch(d){x(d)}finally{M("")}}async function rt(){if(f(""),!Z.trim()){f("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}M("token");try{await Et(`${me}/xyz/auth/token`,{refreshToken:Z.trim(),deviceId:Te.trim()});let d=await Fe(`${me}/xyz/status`);u(d),ne(""),await R()}catch(d){x(d)}finally{M("")}}async function Ee(){f("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");ne(d.trim())}catch(d){f(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function tt(){f(""),M("app");try{await Et(`${me}/xyz/auth/from-app`,{});let d=await Fe(`${me}/xyz/status`);u(d),await R(!0)}catch(d){x(d)}finally{Fe(`${me}/xyz/local-app`).then(d=>J(d)).catch(()=>{}),M("")}}async function Ge(){M("logout");try{await Et(`${me}/xyz/auth/logout`,{}),u({loggedIn:!1}),pe([]),G(null),c([])}catch(d){x(d)}finally{M("")}}async function at(d){G(d),c([]),j(null),se(!0),f("");try{let E=await Fe(`${me}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);c(E.items||[]),j(E.loadMoreKey||null)}catch(E){x(E)}finally{se(!1)}}async function st(){if(!(!le||!w||C)){se(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:w}),E=await Fe(`${me}/xyz/podcast/${encodeURIComponent(le.pid)}/episodes?${d}`);c(Qe=>[...Qe,...E.items||[]]),j(E.loadMoreKey||null)}catch(d){x(d)}finally{se(!1)}}}async function P(d){M(`play:${d.eid}`),f("");try{await r(d)}catch(E){x(E)}finally{M("")}}async function Me(){if(f(""),!De.trim()){f("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}Q(!0);try{let d=De.trim();if(/\/episode\//i.test(d)){let E=await Fe(`${me}/xyz/public/episode?url=${encodeURIComponent(d)}`);we({pid:E.podcast.pid,title:E.podcast.title,author:E.podcast.author,episodes:[E.episode]})}else{let E=await Fe(`${me}/xyz/public/podcast?url=${encodeURIComponent(d)}`);we(E.podcast)}}catch(d){x(d)}finally{Q(!1)}}async function oe(d){M(`pplay:${d.eid}`),f("");try{await r({...d,public:!0})}catch(E){x(E)}finally{M("")}}return s?s.loggedIn?le?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{G(null),c([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},le.title)),C&&ve.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},ve.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},rn(d.pubDate)," \xB7 ",nn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:b===`play:${d.eid}`,onClick:()=>P(d)},b===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!C&&ve.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,w?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:C,onClick:st},C?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:W,onClick:()=>R(!0)},W?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:b==="logout",onClick:Ge},"\u9000\u51FA\u767B\u5F55"))),W?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},ie.map(d=>l.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>at(d)},d.cover?l.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},d.title),l.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!W&&ie.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,m?l.default.createElement("p",{className:"xyz-error"},m):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn primary",disabled:b==="app",onClick:tt},b==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),l.default.createElement("p",{className:"xyz-hint"},k===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":k.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${k.deviceId?`\uFF08\u8BBE\u5907 ${k.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${k.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),l.default.createElement("button",{className:"xyz-link",onClick:()=>Oe(d=>!d)},ke?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),ke?l.default.createElement(l.default.Fragment,null,l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:T},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:Z,onChange:d=>ne(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:Ee},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Te,onChange:d=>re(d.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:b==="token",onClick:rt},b==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>_(d=>!d)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:$,onChange:d=>I(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:b==="send"||D>0,onClick:Se},D>0?`${D}s \u540E\u91CD\u53D1`:b==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:A,onChange:d=>O(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:b==="login",onClick:Ke},b==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:De,onChange:d=>Ce(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:ye,onClick:Me},ye?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),fe?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},fe.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",fe.author)),fe.episodes.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},rn(d.pubDate)," \xB7 ",nn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:b===`pplay:${d.eid}`,onClick:()=>oe(d)},b===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),m?l.default.createElement("p",{className:"xyz-error"},m):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function To(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function an(r,i){let s=To(i),u=s?`${s}/`:"",m=new Map;for(let f of r){let b=To(f?.rel);if(!b||u&&!b.startsWith(u))continue;let $=b.slice(u.length).split("/")[0];if(!$)continue;let I=u?`${u}${$}`:$,A=m.get(I)||{rel:I,name:$,count:0};A.count+=1,m.set(I,A)}return[...m.values()].sort((f,b)=>f.name.localeCompare(b.name,"zh-Hans-CN"))}function sn(r,i){let s=[{rel:"",label:r}],u=To(i);if(!u)return s;let m="";for(let f of u.split("/").filter(Boolean))m=m?`${m}/${f}`:f,s.push({rel:m,label:f});return s}function ln(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var z="/podwave/api",Zn=[.5,.75,1,1.25,1.5,1.75,2];async function he(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function ge(r,i,s){let u=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let m=await u.json().catch(()=>({}));throw new Error(m.error||u.statusText)}return u.json()}function Gn({onSubmit:r,onPick:i,onClose:s}){let[u,m]=(0,t.useState)(""),[f,b]=(0,t.useState)(!1),[M,$]=(0,t.useState)(!1),[I,A]=(0,t.useState)(""),O=(0,t.useRef)(null);return(0,t.useEffect)(()=>{O.current?.focus();let h=_=>{_.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!u.trim()||f)){b(!0),A("");try{await r(u.trim()),s()}catch(_){A(_.message),b(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!M){$(!0),A("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),s())}catch(h){A(h.message)}finally{$(!1)}}},disabled:M,autoFocus:!0},M?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:O,value:u,onChange:h=>m(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:f||!u.trim()},f?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),I?t.default.createElement("div",{className:"dialog-error"},I):null))}function Qn({config:r,onClose:i,onSave:s}){let[u,m]=(0,t.useState)(r?.provider||"api"),[f,b]=(0,t.useState)(""),[M,$]=(0,t.useState)(!1),[I,A]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:D=>{D.target===D.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async D=>{D.preventDefault(),$(!0),A("");try{await s({provider:u,apiKey:f||void 0})}catch(q){A(q.message),$(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:u,onChange:D=>m(D.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:f,onChange:D=>b(D.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),I?t.default.createElement("div",{className:"dialog-error"},I):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:M},"\u4FDD\u5B58"))))}function Do(){let[r,i]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[m,f]=(0,t.useState)({}),[b,M]=(0,t.useState)({running:!1}),[$,I]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[A,O]=(0,t.useState)(!1),[D,q]=(0,t.useState)(!1),[h,_]=(0,t.useState)(0),[Z,ne]=(0,t.useState)(0),[Te,re]=(0,t.useState)(0),[ie,pe]=(0,t.useState)(!1),[W,be]=(0,t.useState)(""),[le,G]=(0,t.useState)([]),[ve,c]=(0,t.useState)("recent"),[w,j]=(0,t.useState)("all"),[C,se]=(0,t.useState)(""),[De,Ce]=(0,t.useState)(""),[fe,we]=(0,t.useState)("all"),[ye,Q]=(0,t.useState)(null),[k,J]=(0,t.useState)(null),[ke,Oe]=(0,t.useState)(!1),[R,x]=(0,t.useState)(0),[ee,T]=(0,t.useState)(0),[Se,Ke]=(0,t.useState)(!0),[rt,Ee]=(0,t.useState)(!1),[tt,Ge]=(0,t.useState)(""),[at,st]=(0,t.useState)(""),[P,Me]=(0,t.useState)(null),[oe,d]=(0,t.useState)("none"),[E,Qe]=(0,t.useState)(null),ht=(0,t.useRef)(new Set),[xt,It]=(0,t.useState)(15),[it,bt]=(0,t.useState)(!1),[Ne,de]=(0,t.useState)({x:null,y:null}),[At,jt]=(0,t.useState)({width:null,height:null}),[Ot,L]=(0,t.useState)(0),[Lt,Re]=(0,t.useState)(""),[wt,lt]=(0,t.useState)(!1),[co,Yt]=(0,t.useState)(null),[K,uo]=(0,t.useState)(""),[He,qe]=(0,t.useState)({status:"none"}),[mo,yt]=(0,t.useState)(!1),[kt,_t]=(0,t.useState)(!1),[Nt,Bt]=(0,t.useState)(!1),[Le,Ut]=(0,t.useState)(null),[zt,Ft]=(0,t.useState)(!1),[$t,Zt]=(0,t.useState)([]),[ot,Kt]=(0,t.useState)(!1),[a,N]=(0,t.useState)([]),[B,Be]=(0,t.useState)(null),[ze,pt]=(0,t.useState)(""),[Ht,Gt]=(0,t.useState)([]),ce=(0,t.useRef)(null),dt=(0,t.useRef)(""),Io=(0,t.useRef)(null),H=(0,t.useRef)(null),Ue=(0,t.useRef)(0),Ct=(0,t.useRef)($),ct=(0,t.useRef)(0),Ao=(0,t.useRef)(0),jo=(0,t.useRef)(0),Oo=(0,t.useRef)(0),dn=(0,t.useRef)(!1),go=(0,t.useRef)(!1);(0,t.useEffect)(()=>{q(!1)},[ye]),(0,t.useEffect)(()=>{Ct.current=$},[$]),(0,t.useEffect)(()=>{H.current=k},[k]),(0,t.useEffect)(()=>{Ue.current=ee},[ee]),(0,t.useEffect)(()=>{let e=!1;return he(`${z}/transcribe/settings`).then(o=>{e||Qe(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await he(`${z}/ui-settings`);!e&&o&&(_t(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&It(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&bt(o.captionOpen),de({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),jt({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}))}catch{}})(),()=>{e=!0}},[]);let Je=(0,t.useCallback)(e=>{fetch(`${z}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),vo=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));It(o),Je({subtitleSize:o})},[Je]),cn=(0,t.useCallback)((e,o,p)=>{de({x:e,y:o}),p&&Je({captionX:e,captionY:o})},[Je]),un=(0,t.useCallback)((e,o,p)=>{let g={width:e??null,height:o??null};jt(g),p&&Je({captionW:g.width,captionH:g.height})},[Je]),mn=(0,t.useCallback)(()=>{bt(e=>{let o=!e;return Je({captionOpen:o}),o})},[Je]),gn=(0,t.useCallback)(()=>{bt(!1),Je({captionOpen:!1})},[Je]),qt=(0,t.useMemo)(()=>{let e=P?.lines;return e?.length&&e.find(o=>R>=o.start&&R<o.end)||null},[P,R]),vn=qt&&qt.speaker!=null?P?.speakers?.[qt.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${qt.speaker+1}`:"",Lo=(0,t.useCallback)(()=>{_t(e=>{let o=!e;return fetch(`${z}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),y=(0,t.useCallback)(e=>{st(e),window.clearTimeout(Oo.current),Oo.current=window.setTimeout(()=>st(""),2600)},[]),Ve=(0,t.useCallback)(async()=>{let e=await he(`${z}/episodes`);return i(e.items||[]),u(e.folders||[]),f(e.progress||{}),M(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await he(`${z}/health`).catch(()=>({}));o.mediaBase&&(dt.current=o.mediaBase);let p=await he(`${z}/state`);if(e)return;I(p.settings),u(p.folders||[]);let g=await Ve();if(e)return;let V=p.settings?.lastEpisodeId,X=V?(g.items||[]).find(vt=>vt.id===V):null;if(X){J(X),T(X.duration||0);let vt=g.progress?.[X.id]?.position||0;ct.current=vt>5?vt:0,x(ct.current);let ft=ce.current;ft&&(ft.src=dt.current?`${dt.current}/episodes/${X.id}/audio`:`${z}/episodes/${X.id}/audio`,ft.load(),ft.playbackRate=p.settings?.rate||1,ft.volume=p.settings?.volume??.9)}Ke(!1),dn.current=!0}catch(o){e||(Ge(o.message),Ke(!1))}})(),()=>{e=!0}},[Ve]),(0,t.useEffect)(()=>{if(!b.running)return;let e=setInterval(()=>{Ve().catch(()=>{})},1500);return()=>clearInterval(e)},[b.running,Ve]),(0,t.useEffect)(()=>{let e=!1;return Me(null),Re(""),L(0),k?.id?((async()=>{try{let o=await he(`${z}/episodes/${k.id}/transcript`);if(e)return;d(o.status),Ut(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?Me(o.transcript):o.status==="queued"||o.status==="running"?(L(o.elapsedMs||0),o.transcript&&Me(o.transcript)):o.status==="error"&&Re(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||Re(o.message)}})(),()=>{e=!0}):(d("none"),()=>{e=!0})},[k?.id]),(0,t.useEffect)(()=>{he(`${z}/translate/settings`).then(Yt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=k?.id;return!o||!K?(qe({status:"none"}),()=>{e=!0}):((async()=>{try{let p=await he(`${z}/episodes/${o}/translate?target=${K}`);e||qe(p)}catch{e||qe({status:"none"})}})(),()=>{e=!0})},[k?.id,K]),(0,t.useEffect)(()=>{if(oe!=="queued"&&oe!=="running")return;let e=!1,o=setInterval(async()=>{let p=H.current?.id;if(p)try{let g=await he(`${z}/episodes/${p}/transcript`);if(e)return;d(g.status),Ut(g.status==="queued"||g.status==="running"?g:null),L(g.elapsedMs||0),(g.status==="queued"||g.status==="running")&&g.transcript?Me(g.transcript):g.status==="done"&&g.transcript?(Me(g.transcript),lt(!0),y("\u8F6C\u5199\u5B8C\u6210")):g.status==="error"&&Re(g.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[oe,y]),(0,t.useEffect)(()=>{if(He.status!=="running"&&He.status!=="queued")return;let e=!1,o=async g=>{let V=await he(`${z}/episodes/${g}/translate?target=${K}`);if(!e){qe(V),V.status==="done"&&y("\u7FFB\u8BD1\u5B8C\u6210");try{let X=await he(`${z}/episodes/${g}/transcript`);!e&&X.transcript&&Me(X.transcript)}catch{}}},p=setInterval(()=>{let g=H.current?.id;g&&o(g).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(p)}},[He.status,K,y]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let g=await he(`${z}/jobs`);e||Zt(g.items||[])}catch{}};o();let p=setInterval(o,zt?2500:2e4);return()=>{e=!0,clearInterval(p)}},[zt]);let ut=(0,t.useCallback)((e,o,p,g=!1)=>{if(!e)return;let V=Date.now();!g&&V-jo.current<4e3||(jo.current=V,ge(`${z}/progress/${e}`,"PUT",{position:o,duration:p}).catch(()=>{}),f(X=>({...X,[e]:{position:o,duration:p,updatedAt:V}})))},[]),nt=(0,t.useCallback)(e=>{I(o=>({...o,...e})),ge(`${z}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!ke||!k||E?.realtime===!1||E?.provider==="local"||P&&!P.partial||oe==="queued"||oe==="running")return;let e=k.id;ht.current.has(e)||(ht.current.add(e),ge(`${z}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&d("queued")}).catch(()=>{}))},[ke,k,P,oe,E]);let Jt=(0,t.useCallback)(async()=>{if(H.current){Re(""),lt(!0);try{let e=await ge(`${z}/episodes/${H.current.id}/transcribe`,"POST",{});d(e.status||"queued")}catch(e){Re(e.message)}}},[]),fn=(0,t.useCallback)(()=>{if(P){lt(e=>!e);return}if(oe==="queued"||oe==="running"){lt(!0);return}Jt()},[P,oe,Jt]),fo=(0,t.useCallback)(async()=>{if(H.current)try{await ge(`${z}/episodes/${H.current.id}/transcribe/cancel`,"POST",{}),y("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){Re(e.message)}},[y]),ho=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let g=await ge(`${z}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});g?.status==="none"?y("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):y(g?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await ge(`${z}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await ge(`${z}/jobs`,"DELETE",{key:e.key})}catch(g){y(`\u64CD\u4F5C\u5931\u8D25\uFF1A${g.message}`)}let p=await he(`${z}/jobs`).catch(()=>({items:[]}));Zt(p.items||[])},[y]),Qt=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let p=await ge(`${z}/transcribe/batch`,"POST",{ids:o});y(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),N([]),Kt(!1)}catch(p){y(p.message)}},[y]),hn=(0,t.useCallback)(e=>{N(o=>o.includes(e)?o.filter(p=>p!==e):[...o,e])},[]),Xe=(0,t.useCallback)(async(e,o,p)=>{try{let g=await ge(`${z}${e}`,o,p||{});return g?.transcript&&Me(g.transcript),g}catch(g){return y(g.message),null}},[y]),Bo=(0,t.useCallback)(e=>{Be(e.id),pt(e.text),Gt([])},[]),Uo=(0,t.useCallback)(async e=>{if(!P)return;await Xe(`/episodes/${P.id}/transcript/lines/${e??B}`,"PUT",{text:ze})&&(Be(null),y("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[P,B,ze,Xe,y]),Fo=(0,t.useCallback)(async(e,o)=>{if(!P)return;await Xe(`/episodes/${P.id}/transcript/lines/${e??B}/split`,"POST",{offset:o})&&(Be(null),y("\u5DF2\u62C6\u6210\u4E24\u884C"))},[P,B,Xe,y]),Ko=(0,t.useCallback)(async e=>{if(!P)return;await Xe(`/episodes/${P.id}/transcript/lines/${e}/merge`,"POST",{})&&y("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[P,Xe,y]),Ho=(0,t.useCallback)(async()=>{if(!P)return;await Xe(`/episodes/${P.id}/transcript/undo`,"POST",{})&&y("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[P,Xe,y]),qo=(0,t.useCallback)(async()=>{if(!P)return;let e=await Xe(`/episodes/${P.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(qe({status:"none",missing:e.after}),y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[P,Xe,y]),Jo=(0,t.useCallback)(async()=>{if(P)try{let e=await he(`${z}/episodes/${P.id}/transcript/validate`);Gt(e.issues||[]),y(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){y(e.message)}},[P,y]),Vo=(0,t.useCallback)(async()=>{let e=H.current?.id;if(!e)return;let o=await he(`${z}/episodes/${e}/transcript`);o.transcript&&Me(o.transcript)},[]),Xo=(0,t.useCallback)(async()=>{let e=H.current?.id,o=K;if(!(!e||!o)&&!(He.status==="running"||He.status==="queued")){qe({status:"running"});try{let p=await ge(`${z}/episodes/${e}/translate`,"POST",{target:o});qe(p),p.status==="done"&&(await Vo(),y("\u7FFB\u8BD1\u5B8C\u6210"))}catch(p){qe(g=>({...g,status:"error",error:p.message}))}}},[K,He.status,Vo,y]),Wo=(0,t.useCallback)(e=>{uo(e||"")},[]),xn=async()=>{if(Y?.eid)try{await fetch(`${z}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${Y.eid}`})})}catch{y("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},bn=e=>{let o=!e.favorite;i(p=>p.map(g=>g.id===e.id?{...g,favorite:o}:g)),ge(`${z}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(p=>y(p.message))},Yo=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${z}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(p=>!e.includes(p.id))),N([]),e.includes(ye)&&Q(null),y(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ie=(0,t.useMemo)(()=>{let e=[...r];return ve==="title"?e.sort((o,p)=>o.title.localeCompare(p.title,"zh-Hans-CN")):ve==="duration"?e.sort((o,p)=>(p.duration||0)-(o.duration||0)):e.sort((o,p)=>p.mtime-o.mtime),e},[r,ve]),St=C?De:"",_o=(0,t.useMemo)(()=>C?r.filter(e=>e.root===C):[],[r,C]),Mt=(0,t.useMemo)(()=>C?an(_o,St):[],[_o,C,St]),We=(0,t.useMemo)(()=>{let e=W.trim().toLowerCase();return Ie.filter(o=>{if(C&&o.root!==C||C&&(o.rel||"")!==St||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let g=m[o.id]?.position||0,V=o.duration||0,X=V?g/V:0;return w==="inprogress"?g>5&&X<.97:w==="finished"?X>=.97:fe==="unheard"?g<=5:fe==="transcribed"?!!o.hasTranscript:fe==="favorites"?!!o.favorite:!0})},[Ie,W,w,fe,m,C,St]),Zo=(0,t.useMemo)(()=>$t.filter(e=>e.status==="queued"||e.status==="running"),[$t]),mt=(0,t.useMemo)(()=>We.filter(e=>!e.hasTranscript),[We]),xo=(0,t.useMemo)(()=>r.filter(e=>{let o=m[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(m[o.id]?.updatedAt||0)-(m[e.id]?.updatedAt||0)).slice(0,4),[r,m]),wn=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),yn=Math.round(wn/3600*10)/10,Pt=(0,t.useMemo)(()=>C?sn(ao(C),St):[],[C,St]),kn=C?Pt.length>1?Pt[Pt.length-1].label:ao(C):w==="inprogress"?"\u7EE7\u7EED\u6536\u542C":w==="finished"?"\u5DF2\u64AD\u5B8C":w==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",Y=ye?r.find(e=>e.id===ye)||(k?.id===ye?k:null):null,Nn=Se?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":C?`${We.length} \u96C6${Mt.length?` \xB7 ${Mt.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${We.length} \u96C6 \xB7 \u5171 ${yn} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,cr=(0,t.useMemo)(()=>k?Ie.findIndex(e=>e.id===k.id):-1,[Ie,k]),Tt=(0,t.useCallback)(()=>{let e=ce.current;if(e){if(!H.current){let o=We[0]||Ie[0];o&&gt(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[We,Ie]),gt=(0,t.useCallback)((e,o=!0)=>{let p=ce.current;if(!p||!e)return;if(H.current&&H.current.id===e.id){o&&Tt();return}H.current&&!p.ended&&p.currentTime>1&&ut(H.current.id,p.currentTime,p.duration||Ue.current,!0),H.current=e,J(e),Q(X=>X&&e.id),T(e.duration||0);let g=m[e.id]?.position||0,V=g>5&&(!e.duration||g<e.duration-10)?g:0;ct.current=V,x(V),e.source==="xyz"?p.src=dt.current?`${dt.current}/xyz/${e.id.slice(3)}/audio`:`${z}/episodes/${e.id}/audio`:p.src=dt.current?`${dt.current}/episodes/${e.id}/audio`:`${z}/episodes/${e.id}/audio`,p.load(),p.playbackRate=Ct.current.rate||1,p.volume=Ct.current.volume??.9,o&&p.play().catch(()=>{}),nt({lastEpisodeId:e.id})},[m,ut,nt,Tt]),zn=(0,t.useCallback)(async e=>{let o=e.public?`${z}/xyz/public/play`:`${z}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,p=e.public?{pid:e.pid,eid:e.eid}:{},g=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),V=await g.json().catch(()=>({}));if(!g.ok)throw new Error(V.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ve(),gt(V.item,!0)},[Ve,gt]);(0,t.useEffect)(()=>{let e=W.trim();if(e.length<2){G([]);return}let o=window.setTimeout(()=>{he(`${z}/search?q=${encodeURIComponent(e)}`).then(p=>G(Array.isArray(p.items)?p.items:[])).catch(()=>G([]))},250);return()=>window.clearTimeout(o)},[W]);let Rt=(0,t.useCallback)((e,o=!0)=>{e&&(gt(e,o),Q(e.id))},[gt]),Ae=(0,t.useCallback)(e=>{let o=ce.current;if(!o||!H.current)return;let p=Number(e);if(!Number.isFinite(p))return;let g=Number(Ue.current)||0,V=Number.isFinite(o.duration)&&o.duration>0?o.duration:g,X=Math.max(0,V>0?Math.min(p,V):p);try{o.currentTime=X}catch{ct.current=X;return}x(X),ut(H.current.id,X,V||g,!0)},[ut]),$n=(0,t.useCallback)(e=>{let o=r.find(p=>p.id===e.episodeId);if(o){if(H.current?.id===e.episodeId){Ae(e.start),Q(o.id);return}ct.current=e.start,Rt(o,!1)}},[r,Rt,Ae]),Go=(0,t.useCallback)(e=>{let o=Io.current;if(!o)return null;let p=o.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(e.clientX-p.left)/p.width)):null},[]),eo=(0,t.useCallback)(e=>{let o=Go(e),p=Number.isFinite(Ue.current)&&Ue.current>0?Ue.current:Number.isFinite(ce.current?.duration)?ce.current.duration:0;o==null||!p||Ae(o*p)},[Go,Ae]),Cn=(0,t.useCallback)(e=>{e.preventDefault(),go.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}eo(e)},[eo]),Sn=(0,t.useCallback)(e=>{go.current&&eo(e)},[eo]),Qo=(0,t.useCallback)(e=>{go.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),Mn=(0,t.useCallback)(e=>{let o=ce.current;if(!o)return;let p=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Ae((o.currentTime||0)-p)),e.key==="ArrowRight"&&(e.preventDefault(),Ae((o.currentTime||0)+p)),e.key==="Home"&&(e.preventDefault(),Ae(0)),e.key==="End"&&(e.preventDefault(),Ae(Number.isFinite(o.duration)?o.duration:0))},[Ae]),Vt=(0,t.useCallback)(e=>{let o=ce.current;if(!o||!H.current)return;let p=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||Ue.current||0)-1));o.currentTime=p,x(p)},[]),bo=(0,t.useCallback)(e=>{if(!Ie.length)return;let p=((H.current?Ie.findIndex(g=>g.id===H.current.id):-1)+e+Ie.length)%Ie.length;gt(Ie[p],!0)},[Ie,gt]),Pn=(0,t.useCallback)(e=>{let o=ce.current;o&&(o.playbackRate=e),nt({rate:e}),O(!1)},[nt]);(0,t.useEffect)(()=>{if(!A)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||O(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[A]),(0,t.useEffect)(()=>{if(!Z)return;let e=()=>{let p=Math.max(0,Math.round((Z-Date.now())/1e3));if(re(p),p<=0){let g=ce.current;g&&!g.paused&&g.pause(),ne(0),_(0),y("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Z,y]),(0,t.useEffect)(()=>{if(!ie)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||pe(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[ie]);let wo=(0,t.useCallback)(e=>{if(pe(!1),e==="off"){ne(0),_(0),re(0);return}if(e==="end"){ne(0),_(-1),re(0),y("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}_(e),ne(Date.now()+e*6e4),y(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[y]),to=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),p=ce.current;p&&(p.volume=o),nt({volume:o})},[nt]),Tn=(0,t.useCallback)(()=>{let e=ce.current,o=Ct.current.volume>0?0:.9;e&&(e.volume=o),nt({volume:o})},[nt]),Dn=()=>{let e=ce.current;if(!e||!H.current)return;let o=performance.now();o-(Ao.current||0)<400||(Ao.current=o,x(e.currentTime),ut(H.current.id,e.currentTime,e.duration||Ue.current))},En=()=>{let e=ce.current,o=H.current;if(!e||!o)return;let p=Number.isFinite(e.duration)?e.duration:o.duration||0;T(p);let g=ct.current;ct.current=0,g>0&&g<p-1&&(e.currentTime=g,x(g))},In=()=>{let e=ce.current;if(H.current&&ut(H.current.id,e?.duration||Ue.current||0,e?.duration||Ue.current||0,!0),h===-1){_(0),ne(0),re(0),y("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}bo(1)},An=async e=>{await ge(`${z}/folders`,"POST",{path:e}),await Ve(),y("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},jn=async()=>{let e=await fetch(`${z}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},On=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Nt||Bt(!0))},Ln=e=>{e.currentTarget.contains(e.relatedTarget)||Bt(!1)},Bn=async e=>{e.preventDefault(),Bt(!1);let o=e.dataTransfer,p=[...o?.files||[]],g=p.map(ae=>ae.path).filter(ae=>typeof ae=="string"&&ae),V=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ae=>ae.trim()).filter(ae=>ae.startsWith("file://")).map(ae=>decodeURIComponent(ae.replace(/^file:\/\//,""))),X=[...new Set([...g,...V])];if(X.length){try{let ae=await ge(`${z}/import/paths`,"POST",{paths:X});await Ve(),y(ae.added?`\u5DF2\u6DFB\u52A0 ${ae.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ae){Ge(ae.message)}return}let vt=p.filter(ae=>ae.size>0);if(!vt.length){y("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let ft=`drop-${Date.now()}`,oo="",No=0;for(let ae of vt)try{let Ro=await fetch(`${z}/import/upload?name=${encodeURIComponent(ae.name)}&batch=${ft}`,{method:"POST",body:ae}),Fn=await Ro.json();Ro.ok&&(oo=Fn.folder||oo,No+=1)}catch{}if(oo)try{await ge(`${z}/folders`,"POST",{path:oo})}catch{}await Ve(),y(No?`\u5DF2\u5BFC\u5165 ${No} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Un=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await ge(`${z}/folders`,"DELETE",{path:e}),se(o=>o===e?"":o),await Ve(),y("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Ge(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let p=o.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),Tt()):o.key==="ArrowRight"?(o.preventDefault(),Vt(15)):o.key==="ArrowLeft"?(o.preventDefault(),Vt(-15)):o.key==="ArrowUp"?(o.preventDefault(),to(Ct.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),to(Ct.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Tt,Vt,to]);let yo=e=>{let o=m[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},ko=e=>{let o=m[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${kt?"nav-collapsed":""}`,onDragOver:On,onDragLeave:Ln,onDrop:Bn},Nt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,kt?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Lo},t.default.createElement(te,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(te,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Lo},t.default.createElement(te,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",xo.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(yo).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,p])=>t.default.createElement("button",{key:e,className:`nav-item ${w===e&&!C?"active":""}`,onClick:()=>{se(""),j(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},p||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Ee(!0)},t.default.createElement(te,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:C===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{j("all"),we("all"),be(""),se(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),j("all"),we("all"),be(""),se(p=>p===e?"":e))}},t.default.createElement(te,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},ao(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),Un(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,kn),t.default.createElement("p",{className:"subline"},Nn)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${zt?"is-on":""}`,onClick:()=>Ft(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(te,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",Zo.length?` ${Zo.length}`:"")),t.default.createElement("button",{className:`tool-btn ${ot?"is-on":""}`,onClick:()=>{Kt(e=>!e),N([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(te,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(te,{name:"search",size:16}),t.default.createElement("input",{value:W,onChange:e=>be(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:ve,onChange:e=>c(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),ot?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",a.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>N(We.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(et,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!mt.length&&!a.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(je,{hint:`${mt.length} \u96C6`,disabled:!mt.length,onSelect:()=>{e(),Qt(mt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(je,{hint:`${a.length} \u96C6`,disabled:!a.length,onSelect:()=>{e(),Qt(a)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!a.length,onClick:()=>Yo(a)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{N([]),Kt(!1)}},"\u53D6\u6D88")):null,tt?t.default.createElement("div",{className:"banner error",onClick:()=>Ge("")},tt," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,Y?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>Q(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},Y.artist,Y.album?` \xB7 ${Y.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(Dt,{item:Y,size:288})),t.default.createElement("h2",{className:"episode-title"},Y.title),t.default.createElement("p",{className:"episode-sub"},Y.artist,Y.album?` \xB7 ${Y.album}`:""),t.default.createElement("p",{className:"episode-path",title:Y.file},Y.location||Y.file),t.default.createElement("p",{className:"episode-stats"},zo(Y.duration)," \xB7 ",$o(Y.mtime)," \xB7 \u5DF2\u542C ",Math.round(ko(Y)),"%"),Y.shownotes?t.default.createElement("div",{className:`episode-notes ${D?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>q(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",D?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},Y.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:Tt},ke&&k?.id===Y.id?"\u6682\u505C":"\u64AD\u653E"),oe==="queued"||oe==="running"?t.default.createElement("button",{className:"btn ghost",onClick:fo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:Jt},Y.source==="xyz"?P?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":P?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(et,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,Y.source==="xyz"?t.default.createElement(je,{onSelect:()=>{e(),xn()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement(je,{danger:!0,onSelect:()=>{e(),Yo([Y.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(so,{inline:!0,transcript:P,status:oe,progress:Le?.progress,stage:Le?.stage,chunks:Le?.chunks,queued:Le?.queued,elapsed:Ot,editingId:B,draft:ze,onDraftChange:pt,onEditLine:Bo,onSaveLine:Uo,onCancelEdit:()=>Be(null),onSplitLine:Fo,onMergeLine:Ko,onUndo:Ho,onValidate:Jo,onResegment:qo,issues:Ht,onCancel:fo,error:Lt,position:R,fontSize:xt,onFontSize:vo,onSeek:Ae,onClose:()=>Q(null),onStart:Jt,target:K,job:He,onChangeTarget:Wo,onTranslate:Xo,onOpenSettings:()=>yt(!0)})))):w==="xyz"?t.default.createElement(Po,{onPlay:zn,currentId:k?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${fe===e?"is-on":""}`,onClick:()=>we(e)},o))),w==="all"&&!W&&xo.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},xo.map(e=>{let o=ko(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${k?.id===e.id?"is-current":""}`,onClick:()=>Rt(e,!0)},t.default.createElement(Dt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,W.trim().length>=2&&le.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},le.length)),le.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>$n(e)},t.default.createElement("span",{className:"hit-time"},Pe(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,C?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},Pt.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(te,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===Pt.length-1?"is-current":""}`,onClick:()=>Ce(e.rel),disabled:o===Pt.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Se&&C&&Mt.length>0&&!W?t.default.createElement("div",{className:"folder-rows"},Mt.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Ce(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(te,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,Se?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):We.length===0&&!(C&&Mt.length>0&&!W)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":C?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${Mt.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Ee(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&C?t.default.createElement("button",{className:"btn",onClick:()=>se("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},We.map((e,o)=>{let p=ko(e),g=k?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${g?"is-current":""} ${yo(e)?"is-finished":""} ${ot&&a.includes(e.id)?"is-selected":""}`,onClick:()=>ot?hn(e.id):Rt(e,!0)},t.default.createElement("span",{className:"col-index row-index"},ot?a.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(te,{name:"check",size:14})):null:g&&ke?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Dt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",$o(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},zo(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:V=>{V.stopPropagation(),bn(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},yo(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(te,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),wt&&k&&!Y?t.default.createElement(so,{transcript:P,status:oe,progress:Le?.progress,stage:Le?.stage,chunks:Le?.chunks,queued:Le?.queued,elapsed:Ot,editingId:B,draft:ze,onDraftChange:pt,onEditLine:Bo,onSaveLine:Uo,onCancelEdit:()=>Be(null),onSplitLine:Fo,onMergeLine:Ko,onUndo:Ho,onValidate:Jo,onResegment:qo,issues:Ht,onCancel:fo,error:Lt,position:R,fontSize:xt,onFontSize:vo,onSeek:Ae,onClose:()=>lt(!1),onStart:Jt,target:K,job:He,onChangeTarget:Wo,onTranslate:Xo,onOpenSettings:()=>yt(!0)}):null,zt?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>Ft(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},$t.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):$t.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},ln(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>ho(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>ho(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>ho(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!mt.length,onClick:()=>Qt(mt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",mt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!a.length,onClick:()=>Qt(a)},"\u8F6C\u5199\u5DF2\u9009 ",a.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:Io,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ee||0),"aria-valuenow":Math.round(R||0),"aria-valuetext":`${Pe(R)} / ${Pe(ee)}`,onPointerDown:Cn,onPointerMove:Sn,onPointerUp:Qo,onPointerCancel:Qo,onKeyDown:Mn},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ee?Math.min(100,Math.max(0,R/ee*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ee?Math.min(100,Math.max(0,R/ee*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},k?t.default.createElement("button",{className:"now-open",onClick:()=>Q(k.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Dt,{item:k,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:k.title},k.title),t.default.createElement("div",{className:"now-artist"},k.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>bo(-1)},t.default.createElement(te,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Vt(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:Tt,disabled:!k&&We.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(te,{name:ke?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Vt(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>bo(1)},t.default.createElement(te,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(et,{className:`player-subs ${wt||it?"is-active":""}`,buttonClassName:`subs-btn ${wt||it?"active":""}`,placement:"up",disabled:!k,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(te,{name:"wave",size:15}),t.default.createElement("span",null,P?"\u5B57\u5E55":oe==="queued"||oe==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(je,{checked:wt,hint:P?`${P.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),fn()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement(je,{checked:it,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),mn()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Pe(R)," / ",Pe(ee)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>O(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":A},$.rate,"\xD7"),A?t.default.createElement("span",{className:"rate-menu",role:"menu"},Zn.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===$.rate,className:e===$.rate?"is-on":"",onClick:()=>Pn(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Z?"active":""}`,onClick:()=>pe(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":ie},t.default.createElement(te,{name:"moon",size:14}),Z?t.default.createElement("span",{className:"sleep-left"},Pe(Te)):null),ie?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Z&&h!==-1,className:!Z&&h!==-1?"is-on":"",onClick:()=>wo("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":h===e,className:h===e?"is-on":"",onClick:()=>wo(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>wo("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Tn,title:"\u9759\u97F3"},t.default.createElement(te,{name:$.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:$.volume,onChange:e=>to(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),rt?t.default.createElement(Gn,{onClose:()=>Ee(!1),onSubmit:An,onPick:jn}):null,mo?t.default.createElement(Qn,{config:co,onClose:()=>yt(!1),onSave:async e=>{let o=await ge(`${z}/translate/settings`,"PUT",e);Yt(o),yt(!1),y("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,at?t.default.createElement("div",{className:"toast"},at):null,it?t.default.createElement(Mo,{line:qt,speakerLabel:vn,target:K,status:oe,fontSize:xt,onFontSize:vo,x:Ne.x,y:Ne.y,width:At.width,height:At.height,onMove:cn,onResize:un,onClose:gn,onSeek:Ae}):null,t.default.createElement("audio",{ref:ce,preload:"metadata",onPlay:()=>Oe(!0),onPause:()=>{Oe(!1);let e=ce.current;H.current&&e&&e.currentTime>0&&!e.ended&&ut(H.current.id,e.currentTime,e.duration||Ue.current,!0)},onTimeUpdate:Dn,onLoadedMetadata:En,onEnded:In,onError:()=>{Oe(!1),y("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var io=require("react");function Rn(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(m=>Number.parseFloat(m));if(s.length<3||s.length>3&&s[3]===0)return null;let u=m=>{let f=m/255;return f<=.03928?f/12.92:((f+.055)/1.055)**2.4};return .2126*u(s[0])+.7152*u(s[1])+.0722*u(s[2])}function er(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=Rn(i);if(s!==null)return s}return null}function pn(){let r=er();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function lo(){let[r,i]=(0,io.useState)(pn);return(0,io.useEffect)(()=>{let s=()=>i(pn());s();let u=new MutationObserver(s);u.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&u.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let m=window.matchMedia("(prefers-color-scheme: light)");return m.addEventListener?.("change",s),()=>{u.disconnect(),m.removeEventListener?.("change",s)}},[]),r}var n=Ye(require("react"),1);var po="0.11.35";var F="/podwave/api";async function xe(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function $e(r,i,s){let u=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),m=await u.json().catch(()=>({}));if(!u.ok)throw new Error(m.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return m}function tr(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function _e(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function or(r){if(!r)return"";let i=new Date(r),s=u=>String(u).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function nr(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function rr(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function ar(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Eo(){let r=lo(),[i,s]=(0,n.useState)([]),[u,m]=(0,n.useState)(""),[f,b]=(0,n.useState)(0),[M,$]=(0,n.useState)(!1),[I,A]=(0,n.useState)([]),[O,D]=(0,n.useState)(null),[q,h]=(0,n.useState)(""),[_,Z]=(0,n.useState)(!1),[ne,Te]=(0,n.useState)({asrModel:"",translateModel:""}),[re,ie]=(0,n.useState)(null),[pe,W]=(0,n.useState)(null),[be,le]=(0,n.useState)({showSidebarPanel:!0}),[G,ve]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[c,w]=(0,n.useState)(null),[j,C]=(0,n.useState)(null),[se,De]=(0,n.useState)(null),[Ce,fe]=(0,n.useState)(!1),[we,ye]=(0,n.useState)("auto"),[Q,k]=(0,n.useState)(!1),[J,ke]=(0,n.useState)(null),[Oe,R]=(0,n.useState)(!1),[x,ee]=(0,n.useState)(""),[T,Se]=(0,n.useState)(15),[Ke,rt]=(0,n.useState)(!0),[Ee,tt]=(0,n.useState)("api"),[Ge,at]=(0,n.useState)(!0),[st,P]=(0,n.useState)("api"),[Me,oe]=(0,n.useState)("https://api.deepseek.com"),[d,E]=(0,n.useState)("deepseek-chat"),[Qe,ht]=(0,n.useState)(""),[xt,It]=(0,n.useState)(""),[it,bt]=(0,n.useState)(""),[Ne,de]=(0,n.useState)(""),[At,jt]=(0,n.useState)(""),[Ot,L]=(0,n.useState)(""),Lt=(0,n.useCallback)(async()=>{try{let[a,N,B,Be,ze,pt,Ht,Gt]=await Promise.all([xe(`${F}/history`),xe(`${F}/models`),xe(`${F}/translate/settings`),xe(`${F}/ui-settings`),xe(`${F}/transcribe/settings`),xe(`${F}/import/settings`),xe(`${F}/setup`),xe(`${F}/update`)]);w(Ht),ke(Gt),Ht?.job?.status==="running"&&k(!0),ve({mode:pt.mode||"copy",orphans:pt.orphans||0,orphanBytes:pt.orphanBytes||0}),le({showSidebarPanel:Be?.showSidebarPanel!==!1}),ee((ze.hotwords||[]).join(" ")),Se(ze.chunkMinutes||15),rt(ze.diarize!==!1),tt(ze.provider||"api"),at(ze.realtime!==!1),s(a.items||[]),m(a.dir||""),b(Number(a.bytes)||0),$(Be?.historyOpen===!0),A(N.models||[]),D(N.storage||null),h(N.storage?.dir||""),Te(N.config||{asrModel:"",translateModel:""}),ie(N.transcribe||null),It(N.config?.asrModel||""),bt(N.config?.translateModel||""),W(B),P(B.provider||"api"),oe(B.apiBase||"https://api.deepseek.com"),E(B.apiModel||"deepseek-chat"),ht(""),L("")}catch(a){L(a.message)}},[]);(0,n.useEffect)(()=>{Lt()},[Lt]),(0,n.useEffect)(()=>{let a=!1;return xe(`${F}/setup/plan?source=${we}&mode=${Ee==="local"?"local":"basic"}`).then(N=>{a||C(N)}).catch(()=>{}),()=>{a=!0}},[we,Ee,c?.job?.status]),(0,n.useEffect)(()=>{if(!Q&&c?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let N=await xe(`${F}/setup`);w(N),N.job?.status!=="running"&&k(!1)}catch{}},2500);return()=>window.clearInterval(a)},[Q,c?.job?.status]);let Re=async()=>{L(""),k(!0);try{await $e(`${F}/setup/install`,"POST",{source:we});let a=await xe(`${F}/setup`);w(a),K("\u5F00\u59CB\u5B89\u88C5")}catch(a){k(!1),L(a.message)}},wt=()=>{let a=!M;$(a),$e(`${F}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},lt=async()=>{try{await $e(`${F}/history/open`,"POST",{})}catch(a){L(a.message)}},co=async()=>{L(""),k(!0);try{await $e(`${F}/setup/install`,"POST",{source:we,mode:"local"});let a=await xe(`${F}/setup`);w(a),K("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){k(!1),L(a.message)}},Yt=async()=>{try{await $e(`${F}/setup/cancel`,"POST",{}),K("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){L(a.message)}},K=a=>{jt(a),window.setTimeout(()=>jt(""),2400)},uo=async()=>{fe(!0);try{let a=await xe(`${F}/setup/verify`);De(a),K(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){K(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{fe(!1)}},He=async()=>{try{let a=await xe(`${F}/setup/diagnose`),N=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(N)}catch{let B=document.createElement("textarea");B.value=N,B.style.position="fixed",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}K("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){K(a.message||"\u590D\u5236\u5931\u8D25")}},qe=async()=>{de("api"),L("");try{let a={provider:st,apiBase:Me,apiModel:d};Qe.trim()&&(a.apiKey=Qe.trim());let N=await $e(`${F}/translate/settings`,"PUT",a);W(N),ht(""),K("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{de("")}},mo=async()=>{de("models"),L("");try{let a=await $e(`${F}/models`,"PUT",{asrModel:xt,translateModel:it});Te(a.config),A(a.models||[]),ie(a.transcribe||null),K("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{de("")}},yt=async()=>{try{await $e(`${F}/models/open`,"POST",{})}catch(a){L(a.message)}},kt=async(a,N=!0)=>{Z(!0),L("");try{let B=await $e(`${F}/models/dir`,"POST",{dir:a,move:N});D(B.storage||null),A(B.models||[]),h(B.storage?.dir||"");let Be=(B.moved||[]).length,ze=(B.skipped||[]).length;K(Be||ze?`\u5DF2\u8FC1\u79FB ${Be} \u4E2A\u6A21\u578B${ze?`\uFF0C${ze} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(B){L(B.message)}finally{Z(!1)}},_t=async a=>{de(`model:${a}`),L("");try{let N=await $e(`${F}/models/remove`,"POST",{name:a});D(N||null),A(N.models||[]),K(`\u5DF2\u5220\u9664 ${a}`)}catch(N){L(N.message)}finally{de("")}},Nt=I.length?I:[{name:ne.asrModel||"qwen3-asr-1.7b-8bit",ready:re?.modelReady},{name:ne.translateModel||"hy-mt2-1.8b-4bit",ready:pe?.localReady}],Bt=async()=>{R(!0);try{ke(await xe(`${F}/update?force=1`))}catch{K("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{R(!1)}},Le=Nt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),Ut=Nt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),zt=async()=>{de("ui"),L("");try{let a=await $e(`${F}/ui-settings`,"PUT",{showSidebarPanel:be.showSidebarPanel});le({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),K("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{de("")}},Ft=async a=>{de("import"),L("");try{let N=await $e(`${F}/import/settings`,"PUT",{mode:a});ve(B=>({...B,mode:N.mode})),K("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(N){L(N.message)}finally{de("")}},$t=async()=>{if(G.orphans&&window.confirm(`\u6E05\u7406 ${G.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){de("imports"),L("");try{let a=await $e(`${F}/imports/orphans`,"DELETE",{});ve(N=>({...N,orphans:0,orphanBytes:0})),K(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){L(a.message)}finally{de("")}}},Zt=async()=>{de("transcribe"),L("");try{let a=x.split(/[\s,，、]+/).map(B=>B.trim()).filter(Boolean).slice(0,500),N=await $e(`${F}/transcribe/settings`,"PUT",{provider:Ee,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(T)||15)),diarize:Ke,realtime:Ge});ee((N.hotwords||[]).join(" ")),Se(N.chunkMinutes||15),rt(N.diarize!==!1),tt(N.provider||"api"),N.runtime&&ie(N.runtime),K("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){L(a.message)}finally{de("")}},ot=Nt,Kt=!!(po&&c?.version&&c.version!==po);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,ro),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Kt?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",po,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",c.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,Ot?n.default.createElement("div",{className:"banner error",onClick:()=>L("")},Ot):null,At?n.default.createElement("div",{className:"settings-message"},At):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),c?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},c.platform?.osLabel," \xB7 ",c.platform?.arch," \xB7 ",c.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",c.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",c.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:He},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:Ce,onClick:uo},Ce?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),se?n.default.createElement("ul",{className:"setup-components"},se.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(c.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},_e(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:we,onChange:a=>ye(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),j?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",_e(j.totalBytes)," \xB7 ",j.items.length," \u9879"),n.default.createElement("ul",null,j.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?_e(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:Q||c.job?.status==="running",onClick:Re},Q||c.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),c.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:Yt},"\u53D6\u6D88"):null),c.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,c.job.stage||c.job.status),n.default.createElement("span",null,c.job.progress||0,"% \xB7 ",_e(c.job.bytes)," / ",_e(c.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${c.job.progress||0}%`}})),c.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",c.job.error):null,c.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},c.job.warning):null,c.job.status==="done"&&(!c.job.summary||!c.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,c.job.status==="done"&&c.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",c.job.modelsDir):null,Array.isArray(c.job.summary)&&c.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},c.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":_e(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:`settings-card history-card ${M?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>wt(),"aria-expanded":M,title:M?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",f?` \xB7 ${_e(f)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),M?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${tr(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},or(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:lt,disabled:!u},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},u?`${u}${f?` \xB7 ${_e(f)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:Ee,onChange:a=>tt(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),Ee==="api"?n.default.createElement("p",{className:"settings-status"},re?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},re?.installed&&re?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${re.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:x,onChange:a=>ee(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:T,onChange:a=>Se(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Ge,onChange:a=>at(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Ke,onChange:a=>rt(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Zt,disabled:Ne==="transcribe"},Ne==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),Ee==="local"&&!(re?.installed&&re?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:co,disabled:Q},Q?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:G.mode==="copy",onChange:()=>Ft("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:G.mode==="reference",onChange:()=>Ft("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:$t,disabled:Ne==="imports"||!G.orphans},G.orphans?`\u6E05\u7406 ${G.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(G.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:st,onChange:a=>P(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Me,onChange:a=>oe(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:d,onChange:a=>E(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:Qe,onChange:a=>ht(a.target.value),placeholder:pe?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${pe.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:qe,disabled:Ne==="api"},Ne==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},pe?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:be.showSidebarPanel,onChange:a=>le({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:zt,disabled:Ne==="ui"},Ne==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},nr(O),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),O?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:O.dir},O.dir),n.default.createElement("span",{className:"model-path-size"},ar(O)," \xB7 \u5171 ",_e(O.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:q,onChange:a=>h(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:_||q.trim()===O.dir,onClick:()=>kt(q,!0)},_?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:yt},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),O.projectDir&&O.dir!==O.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>kt(O.projectDir,!0)},rr(O)):null,O.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>kt("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),I.length?n.default.createElement("ul",{className:"model-list"},I.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",_e(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||Ne===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>_t(a.name)},Ne===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:xt,onChange:a=>It(a.target.value)},(Le.length?Le:ot).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},re?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:it,onChange:a=>bt(a.target.value)},(Ut.length?Ut:ot).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},pe?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:mo,disabled:Ne==="models"},Ne==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.current?`v${J.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.latest?`v${J.latest}`:J?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},J?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":J?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${J.error}\uFF09\u3002`:J?.latest?J?.current&&J?.latest&&J.current!==J.latest&&J.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Bt,disabled:Oe},Oe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),J?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(J.checkedAt).toLocaleString()):null))))}function sr({size:r=16}){return Ze.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Ze.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Ze.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ze.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Ze.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ze.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function ir(){let r=lo();return Ze.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Ze.default.createElement("style",null,ro),Ze.default.createElement(Do,null))}function lr(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},ir)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Eo));let i=null,s="podwave-hide-nav",u=f=>{if(typeof document>"u")return;let b=document.getElementById(s);f&&!b?(b=document.createElement("style"),b.id=s,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!f&&b&&b.remove()},m=f=>{if(u(!f),f&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},sr);else if(!f&&i){let b=i;i=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>m(f?.showSidebarPanel!==!1)).catch(()=>m(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{m(f?.detail?.showSidebarPanel!==!1)})}var pr=["slots"];

return module.exports}})
