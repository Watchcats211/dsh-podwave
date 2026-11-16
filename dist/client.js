window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var fn=Object.create;var Ht=Object.defineProperty;var hn=Object.getOwnPropertyDescriptor;var xn=Object.getOwnPropertyNames;var bn=Object.getPrototypeOf,wn=Object.prototype.hasOwnProperty;var yn=(r,i)=>{for(var s in i)Ht(r,s,{get:i[s],enumerable:!0})},jo=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of xn(i))!wn.call(r,v)&&v!==s&&Ht(r,v,{get:()=>i[v],enumerable:!(c=hn(i,v))||c.enumerable});return r};var ct=(r,i,s)=>(s=r!=null?fn(bn(r)):{},jo(i||!r||!r.__esModule?Ht(s,"default",{value:r,enumerable:!0}):s,r)),kn=r=>jo(Ht({},"__esModule",{value:!0}),r);var Un={};yn(Un,{apply:()=>On,inject:()=>Bn});module.exports=kn(Un);var Fe=ct(require("react"),1);var Jt=`
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
`;var t=ct(require("react"),1);var $=ct(require("react"),1);function Y({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),$.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),$.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),$.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return $.default.createElement("svg",{...s},$.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),$.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),$.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),$.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),$.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),$.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),$.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),$.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var lo=ct(require("react"),1);function Ue(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function so(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function io(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Ao(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Vt(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var $n="/podwave/api";function Nt({item:r,size:i=44,className:s=""}){let c={width:i,height:i};return r&&r.hasCover?lo.default.createElement("img",{className:`cover ${s}`,style:c,src:`${$n}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):lo.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},Ao(r&&r.title))}var m=ct(require("react"),1);var Lo="/podwave/api";function Zt({transcript:r,status:i,progress:s,stage:c,chunks:v,queued:g,elapsed:f,error:P,position:M,onSeek:D,onClose:U,onStart:ae,onCancel:A,target:_,job:h,onChangeTarget:se,onTranslate:V,onOpenSettings:Z,inline:ze=!1,editingId:le=null,draft:fe="",onDraftChange:ke,onEditLine:W,onSaveLine:R,onCancelEdit:pe,onSplitLine:b,onMergeLine:de,onUndo:ce,onValidate:te,onResegment:xe,issues:C=[]}){let oe=(0,m.useRef)(null),Ce=(0,m.useRef)(null),ue=r?.lines?.findIndex(k=>M>=k.start&&M<k.end)??-1;(0,m.useEffect)(()=>{if(ue<0||!oe.current)return;oe.current.querySelector(`[data-seg="${ue}"]`)?.scrollIntoView({block:"nearest"})},[ue]);let me=i==="queued"||i==="running";return m.default.createElement("section",{className:`transcript-panel ${ze?"inline":""}`},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),r?m.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:_,onChange:k=>se(k.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),m.default.createElement("button",{className:"mini-link",onClick:Z},"\u8BBE\u7F6E"),r?m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{className:"mini-link",onClick:ce,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),m.default.createElement("button",{className:"mini-link",onClick:te,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),xe?m.default.createElement("button",{className:"mini-link",onClick:xe,title:"\u628A\u788E\u7247\u884C\u6309\u6807\u70B9\u91CD\u65B0\u62FC\u6210\u6574\u53E5\uFF0C\u65B9\u4FBF\u7FFB\u8BD1"},"\u6574\u7406\u65AD\u53E5"):null,m.default.createElement("a",{className:"mini-link",href:`${Lo}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),m.default.createElement("a",{className:"mini-link",href:`${Lo}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,ze?null:m.default.createElement("button",{className:"transcript-close",onClick:U,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:oe},r&&me?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),A?m.default.createElement("button",{className:"seg-tool",onClick:A},"\u53D6\u6D88"):null):null,r&&C?.length?m.default.createElement("div",{className:"tr-issues"},C.slice(0,5).map(k=>m.default.createElement("div",{key:k},"\xB7 ",k)),C.length>5?m.default.createElement("div",null,"\u2026\u5171 ",C.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?m.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C",V?m.default.createElement("button",{className:"seg-tool",onClick:V},"\u91CD\u8BD5"):null):null,h?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C",V?m.default.createElement("button",{className:"seg-tool",onClick:V},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,h?.status==="none"&&_&&r&&(h.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09",V?m.default.createElement("button",{className:"seg-tool",onClick:V},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((k,Q)=>m.default.createElement("div",{key:k.id,"data-seg":Q,className:`seg-row ${Q===ue?"active":""} ${le===k.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ue(k.start)}`,onClick:()=>D(k.start),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),D(k.start))}},m.default.createElement("span",{className:"seg-time"},Ue(k.start)),le===k.id?m.default.createElement("span",{className:"seg-edit",onClick:w=>w.stopPropagation()},m.default.createElement("textarea",{ref:Ce,value:fe,rows:Math.min(4,Math.max(2,Math.ceil((fe.length||1)/40))),onChange:w=>ke(w.target.value),onKeyDown:w=>{w.key==="Enter"&&(w.metaKey||w.ctrlKey)&&R(k.id),w.key==="Escape"&&pe()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>R(k.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>b(k.id,Ce.current?.selectionStart??Math.floor(fe.length/2))},"\u62C6\u5206"),m.default.createElement("button",{className:"seg-tool",onClick:pe},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,k.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${k.speaker%5}`},r.speakers?.[k.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${k.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},k.text,k.translations?.[_]?m.default.createElement("span",{className:"seg-trans"},k.translations[_]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:w=>{w.stopPropagation(),W(k)}},"\u270E"),Q<r.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:w=>{w.stopPropagation(),de(k.id)}},"\u21E3"):null)))):me?m.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),A?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:A},"\u53D6\u6D88\u8F6C\u5199"):null):P?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},P),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:ae},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:ae},"\u5F00\u59CB\u8F6C\u5199"))))}var l=ct(require("react"),1),ne="/podwave/api";async function Ie(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function $t(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function Oo(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Bo(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function po({onPlay:r,currentId:i}){let[s,c]=(0,l.useState)(null),[v,g]=(0,l.useState)(""),[f,P]=(0,l.useState)(""),[M,D]=(0,l.useState)(""),[U,ae]=(0,l.useState)(""),[A,_]=(0,l.useState)(0),[h,se]=(0,l.useState)(!1),[V,Z]=(0,l.useState)(""),[ze,le]=(0,l.useState)(""),[fe,ke]=(0,l.useState)([]),[W,R]=(0,l.useState)(!1),[pe,b]=(0,l.useState)(null),[de,ce]=(0,l.useState)([]),[te,xe]=(0,l.useState)(null),[C,oe]=(0,l.useState)(!1),[Ce,ue]=(0,l.useState)(""),[me,k]=(0,l.useState)(null),[Q,w]=(0,l.useState)(!1),[z,Ke]=(0,l.useState)(null),[Se,Ve]=(0,l.useState)(!1),ee=(0,l.useCallback)(async(p=!1)=>{R(!0);try{let S=await Ie(`${ne}/xyz/subscriptions${p?"?refresh=1":""}`);ke(S.items||[])}catch(S){q(S)}finally{R(!1)}},[]);function q(p){let S=String(p?.message||"");if(S.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||S.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Xe=>({...Xe||{},loggedIn:!1})),ke([]),b(null),ce([]),Z(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(ve(S))}function ve(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function Ze(){try{await $t(`${ne}/xyz/open-web`,{})}catch(p){q(p)}}(0,l.useEffect)(()=>{Ie(`${ne}/xyz/status`).then(p=>{c(p),p.loggedIn&&ee()}).catch(p=>q(p)),Ie(`${ne}/xyz/local-app`).then(p=>Ke(p)).catch(()=>Ke({available:!1}))},[ee]),(0,l.useEffect)(()=>{if(!A)return;let p=setInterval(()=>_(S=>Math.max(0,S-1)),1e3);return()=>clearInterval(p)},[A]);async function qe(){if(g(""),!/^1\d{10}$/.test(M.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}P("send");try{let p=await $t(`${ne}/xyz/auth/send-code`,{phone:M.trim(),areaCode:"+86"});_(60),p.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){q(p)}finally{P("")}}async function Me(){if(g(""),!M.trim()||!U.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}P("login");try{await $t(`${ne}/xyz/auth/login`,{phone:M.trim(),code:U.trim(),areaCode:"+86"});let p=await Ie(`${ne}/xyz/status`);c(p),await ee()}catch(p){q(p)}finally{P("")}}async function tt(){if(g(""),!V.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}P("token");try{await $t(`${ne}/xyz/auth/token`,{refreshToken:V.trim(),deviceId:ze.trim()});let p=await Ie(`${ne}/xyz/status`);c(p),Z(""),await ee()}catch(p){q(p)}finally{P("")}}async function We(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let p=await navigator.clipboard.readText();if(!p.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");Z(p.trim())}catch(p){g(p?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function ot(){g(""),P("app");try{await $t(`${ne}/xyz/auth/from-app`,{});let p=await Ie(`${ne}/xyz/status`);c(p),await ee(!0)}catch(p){q(p)}finally{Ie(`${ne}/xyz/local-app`).then(p=>Ke(p)).catch(()=>{}),P("")}}async function He(){P("logout");try{await $t(`${ne}/xyz/auth/logout`,{}),c({loggedIn:!1}),ke([]),b(null),ce([])}catch(p){q(p)}finally{P("")}}async function nt(p){b(p),ce([]),xe(null),oe(!0),g("");try{let S=await Ie(`${ne}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);ce(S.items||[]),xe(S.loadMoreKey||null)}catch(S){q(S)}finally{oe(!1)}}async function rt(){if(!(!pe||!te||C)){oe(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:te}),S=await Ie(`${ne}/xyz/podcast/${encodeURIComponent(pe.pid)}/episodes?${p}`);ce(Xe=>[...Xe,...S.items||[]]),xe(S.loadMoreKey||null)}catch(p){q(p)}finally{oe(!1)}}}async function T(p){P(`play:${p.eid}`),g("");try{await r(p)}catch(S){q(S)}finally{P("")}}async function be(){if(g(""),!Ce.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}w(!0);try{let p=Ce.trim();if(/\/episode\//i.test(p)){let S=await Ie(`${ne}/xyz/public/episode?url=${encodeURIComponent(p)}`);k({pid:S.podcast.pid,title:S.podcast.title,author:S.podcast.author,episodes:[S.episode]})}else{let S=await Ie(`${ne}/xyz/public/podcast?url=${encodeURIComponent(p)}`);k(S.podcast)}}catch(p){q(p)}finally{w(!1)}}async function X(p){P(`pplay:${p.eid}`),g("");try{await r({...p,public:!0})}catch(S){q(S)}finally{P("")}}return s?s.loggedIn?pe?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{b(null),ce([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},pe.title)),C&&de.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},de.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},Bo(p.pubDate)," \xB7 ",Oo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`play:${p.eid}`,onClick:()=>T(p)},f===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!C&&de.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,te?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:C,onClick:rt},C?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:W,onClick:()=>ee(!0)},W?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:f==="logout",onClick:He},"\u9000\u51FA\u767B\u5F55"))),W?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},fe.map(p=>l.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>nt(p)},p.cover?l.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},p.title),l.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!W&&fe.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn primary",disabled:f==="app",onClick:ot},f==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),l.default.createElement("p",{className:"xyz-hint"},z===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":z.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${z.deviceId?`\uFF08\u8BBE\u5907 ${z.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${z.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),l.default.createElement("button",{className:"xyz-link",onClick:()=>Ve(p=>!p)},Se?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),Se?l.default.createElement(l.default.Fragment,null,l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:Ze},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:V,onChange:p=>Z(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:We},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:ze,onChange:p=>le(p.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:f==="token",onClick:tt},f==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>se(p=>!p)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:M,onChange:p=>D(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:f==="send"||A>0,onClick:qe},A>0?`${A}s \u540E\u91CD\u53D1`:f==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:U,onChange:p=>ae(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:f==="login",onClick:Me},f==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:Ce,onChange:p=>ue(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Q,onClick:be},Q?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),me?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},me.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",me.author)),me.episodes.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},Bo(p.pubDate)," \xB7 ",Oo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:f===`pplay:${p.eid}`,onClick:()=>X(p)},f===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?l.default.createElement("p",{className:"xyz-error"},v):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function co(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function Uo(r,i){let s=co(i),c=s?`${s}/`:"",v=new Map;for(let g of r){let f=co(g?.rel);if(!f||c&&!f.startsWith(c))continue;let M=f.slice(c.length).split("/")[0];if(!M)continue;let D=c?`${c}${M}`:M,U=v.get(D)||{rel:D,name:M,count:0};U.count+=1,v.set(D,U)}return[...v.values()].sort((g,f)=>g.name.localeCompare(f.name,"zh-Hans-CN"))}function Fo(r,i){let s=[{rel:"",label:r}],c=co(i);if(!c)return s;let v="";for(let g of c.split("/").filter(Boolean))v=v?`${v}/${g}`:g,s.push({rel:v,label:g});return s}function Ko(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var y="/podwave/api",zn=[.5,.75,1,1.25,1.5,1.75,2];async function ie(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function re(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}function Cn({onSubmit:r,onPick:i,onClose:s}){let[c,v]=(0,t.useState)(""),[g,f]=(0,t.useState)(!1),[P,M]=(0,t.useState)(!1),[D,U]=(0,t.useState)(""),ae=(0,t.useRef)(null);return(0,t.useEffect)(()=>{ae.current?.focus();let h=se=>{se.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!c.trim()||g)){f(!0),U("");try{await r(c.trim()),s()}catch(se){U(se.message),f(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!P){M(!0),U("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),s())}catch(h){U(h.message)}finally{M(!1)}}},disabled:P,autoFocus:!0},P?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:ae,value:c,onChange:h=>v(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!c.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),D?t.default.createElement("div",{className:"dialog-error"},D):null))}function Sn({config:r,onClose:i,onSave:s}){let[c,v]=(0,t.useState)(r?.provider||"api"),[g,f]=(0,t.useState)(""),[P,M]=(0,t.useState)(!1),[D,U]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:A=>{A.target===A.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async A=>{A.preventDefault(),M(!0),U("");try{await s({provider:c,apiKey:g||void 0})}catch(_){U(_.message),M(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:c,onChange:A=>v(A.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:g,onChange:A=>f(A.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),D?t.default.createElement("div",{className:"dialog-error"},D):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:P},"\u4FDD\u5B58"))))}function uo(){let[r,i]=(0,t.useState)([]),[s,c]=(0,t.useState)([]),[v,g]=(0,t.useState)({}),[f,P]=(0,t.useState)({running:!1}),[M,D]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[U,ae]=(0,t.useState)(!1),[A,_]=(0,t.useState)(!1),[h,se]=(0,t.useState)(0),[V,Z]=(0,t.useState)(0),[ze,le]=(0,t.useState)(0),[fe,ke]=(0,t.useState)(!1),[W,R]=(0,t.useState)(""),[pe,b]=(0,t.useState)([]),[de,ce]=(0,t.useState)("recent"),[te,xe]=(0,t.useState)("all"),[C,oe]=(0,t.useState)(""),[Ce,ue]=(0,t.useState)(""),[me,k]=(0,t.useState)("all"),[Q,w]=(0,t.useState)(null),[z,Ke]=(0,t.useState)(null),[Se,Ve]=(0,t.useState)(!1),[ee,q]=(0,t.useState)(0),[ve,Ze]=(0,t.useState)(0),[qe,Me]=(0,t.useState)(!0),[tt,We]=(0,t.useState)(!1),[ot,He]=(0,t.useState)(""),[nt,rt]=(0,t.useState)(""),[T,be]=(0,t.useState)(null),[X,p]=(0,t.useState)("none"),[S,Xe]=(0,t.useState)(null),zt=(0,t.useRef)(new Set),[Ct,ut]=(0,t.useState)(0),[he,H]=(0,t.useState)(""),[St,Ge]=(0,t.useState)(!1),[jt,E]=(0,t.useState)(null),[Ne,Gt]=(0,t.useState)(""),[Ee,je]=(0,t.useState)({status:"none"}),[Yt,J]=(0,t.useState)(!1),[At,Lt]=(0,t.useState)(!1),[Ot,Mt]=(0,t.useState)(!1),[Ae,mt]=(0,t.useState)(null),[vt,gt]=(0,t.useState)(!1),[ft,Tt]=(0,t.useState)([]),[Ye,Pt]=(0,t.useState)(!1),[we,Qe]=(0,t.useState)([]),[_e,Re]=(0,t.useState)(null),[a,N]=(0,t.useState)(""),[O,at]=(0,t.useState)([]),L=(0,t.useRef)(null),Te=(0,t.useRef)(""),Dt=(0,t.useRef)(null),I=(0,t.useRef)(null),Pe=(0,t.useRef)(0),ht=(0,t.useRef)(M),st=(0,t.useRef)(0),vo=(0,t.useRef)(0),go=(0,t.useRef)(0),fo=(0,t.useRef)(0),Ho=(0,t.useRef)(!1),Qt=(0,t.useRef)(!1);(0,t.useEffect)(()=>{_(!1)},[Q]),(0,t.useEffect)(()=>{ht.current=M},[M]),(0,t.useEffect)(()=>{I.current=z},[z]),(0,t.useEffect)(()=>{Pe.current=ve},[ve]),(0,t.useEffect)(()=>{let e=!1;return ie(`${y}/transcribe/settings`).then(n=>{e||Xe(n||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await ie(`${y}/ui-settings`);!e&&n&&Lt(!!n.sidebarCollapsed)}catch{}})(),()=>{e=!0}},[]);let ho=(0,t.useCallback)(()=>{Lt(e=>{let n=!e;return fetch(`${y}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:n})}).catch(()=>{}),n})},[]),x=(0,t.useCallback)(e=>{rt(e),window.clearTimeout(fo.current),fo.current=window.setTimeout(()=>rt(""),2600)},[]),Le=(0,t.useCallback)(async()=>{let e=await ie(`${y}/episodes`);return i(e.items||[]),c(e.folders||[]),g(e.progress||{}),P(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await ie(`${y}/health`).catch(()=>({}));n.mediaBase&&(Te.current=n.mediaBase);let d=await ie(`${y}/state`);if(e)return;D(d.settings),c(d.folders||[]);let u=await Le();if(e)return;let B=d.settings?.lastEpisodeId,F=B?(u.items||[]).find(pt=>pt.id===B):null;if(F){Ke(F),Ze(F.duration||0);let pt=u.progress?.[F.id]?.position||0;st.current=pt>5?pt:0,q(st.current);let dt=L.current;dt&&(dt.src=Te.current?`${Te.current}/episodes/${F.id}/audio`:`${y}/episodes/${F.id}/audio`,dt.load(),dt.playbackRate=d.settings?.rate||1,dt.volume=d.settings?.volume??.9)}Me(!1),Ho.current=!0}catch(n){e||(He(n.message),Me(!1))}})(),()=>{e=!0}},[Le]),(0,t.useEffect)(()=>{if(!f.running)return;let e=setInterval(()=>{Le().catch(()=>{})},1500);return()=>clearInterval(e)},[f.running,Le]),(0,t.useEffect)(()=>{let e=!1;return be(null),H(""),ut(0),z?.id?((async()=>{try{let n=await ie(`${y}/episodes/${z.id}/transcript`);if(e)return;p(n.status),mt(n.status==="queued"||n.status==="running"?n:null),n.status==="done"&&n.transcript?be(n.transcript):n.status==="queued"||n.status==="running"?(ut(n.elapsedMs||0),n.transcript&&be(n.transcript)):n.status==="error"&&H(n.error||"\u8F6C\u5199\u5931\u8D25")}catch(n){e||H(n.message)}})(),()=>{e=!0}):(p("none"),()=>{e=!0})},[z?.id]),(0,t.useEffect)(()=>{ie(`${y}/translate/settings`).then(E).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,n=z?.id;return!n||!Ne?(je({status:"none"}),()=>{e=!0}):((async()=>{try{let d=await ie(`${y}/episodes/${n}/translate?target=${Ne}`);e||je(d)}catch{e||je({status:"none"})}})(),()=>{e=!0})},[z?.id,Ne]),(0,t.useEffect)(()=>{if(X!=="queued"&&X!=="running")return;let e=!1,n=setInterval(async()=>{let d=I.current?.id;if(d)try{let u=await ie(`${y}/episodes/${d}/transcript`);if(e)return;p(u.status),mt(u.status==="queued"||u.status==="running"?u:null),ut(u.elapsedMs||0),(u.status==="queued"||u.status==="running")&&u.transcript?be(u.transcript):u.status==="done"&&u.transcript?(be(u.transcript),Ge(!0),x("\u8F6C\u5199\u5B8C\u6210")):u.status==="error"&&H(u.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(n)}},[X,x]),(0,t.useEffect)(()=>{if(Ee.status!=="running"&&Ee.status!=="queued")return;let e=!1,n=async u=>{let B=await ie(`${y}/episodes/${u}/translate?target=${Ne}`);if(!e){je(B),B.status==="done"&&x("\u7FFB\u8BD1\u5B8C\u6210");try{let F=await ie(`${y}/episodes/${u}/transcript`);!e&&F.transcript&&be(F.transcript)}catch{}}},d=setInterval(()=>{let u=I.current?.id;u&&n(u).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(d)}},[Ee.status,Ne,x]),(0,t.useEffect)(()=>{let e=!1,n=async()=>{try{let u=await ie(`${y}/jobs`);e||Tt(u.items||[])}catch{}};n();let d=setInterval(n,vt?2500:2e4);return()=>{e=!0,clearInterval(d)}},[vt]);let it=(0,t.useCallback)((e,n,d,u=!1)=>{if(!e)return;let B=Date.now();!u&&B-go.current<4e3||(go.current=B,re(`${y}/progress/${e}`,"PUT",{position:n,duration:d}).catch(()=>{}),g(F=>({...F,[e]:{position:n,duration:d,updatedAt:B}})))},[]),et=(0,t.useCallback)(e=>{D(n=>({...n,...e})),re(`${y}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!Se||!z||S?.realtime===!1||S?.provider==="local"||T&&!T.partial||X==="queued"||X==="running")return;let e=z.id;zt.current.has(e)||(zt.current.add(e),re(`${y}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(n=>{n?.status==="queued"&&p("queued")}).catch(()=>{}))},[Se,z,T,X,S]);let It=(0,t.useCallback)(async()=>{if(I.current){H(""),Ge(!0);try{let e=await re(`${y}/episodes/${I.current.id}/transcribe`,"POST",{});p(e.status||"queued")}catch(e){H(e.message)}}},[]),Jo=(0,t.useCallback)(()=>{if(T){Ge(e=>!e);return}if(X==="queued"||X==="running"){Ge(!0);return}It()},[T,X,It]),_t=(0,t.useCallback)(async()=>{if(I.current)try{await re(`${y}/episodes/${I.current.id}/transcribe/cancel`,"POST",{}),x("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){H(e.message)}},[x]),Rt=(0,t.useCallback)(async(e,n)=>{try{if(n==="cancel"){let u=await re(`${y}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});u?.status==="none"?x("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):x(u?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else n==="retry"?await re(`${y}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):n==="clear"&&await re(`${y}/jobs`,"DELETE",{key:e.key})}catch(u){x(`\u64CD\u4F5C\u5931\u8D25\uFF1A${u.message}`)}let d=await ie(`${y}/jobs`).catch(()=>({items:[]}));Tt(d.items||[])},[x]),Bt=(0,t.useCallback)(async e=>{let n=[...new Set(e)];if(n.length)try{let d=await re(`${y}/transcribe/batch`,"POST",{ids:n});x(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),Qe([]),Pt(!1)}catch(d){x(d.message)}},[x]),Vo=(0,t.useCallback)(e=>{Qe(n=>n.includes(e)?n.filter(d=>d!==e):[...n,e])},[]),Oe=(0,t.useCallback)(async(e,n,d)=>{try{let u=await re(`${y}${e}`,n,d||{});return u?.transcript&&be(u.transcript),u}catch(u){return x(u.message),null}},[x]),xo=(0,t.useCallback)(e=>{Re(e.id),N(e.text),at([])},[]),bo=(0,t.useCallback)(async e=>{if(!T)return;await Oe(`/episodes/${T.id}/transcript/lines/${e??_e}`,"PUT",{text:a})&&(Re(null),x("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[T,_e,a,Oe,x]),wo=(0,t.useCallback)(async(e,n)=>{if(!T)return;await Oe(`/episodes/${T.id}/transcript/lines/${e??_e}/split`,"POST",{offset:n})&&(Re(null),x("\u5DF2\u62C6\u6210\u4E24\u884C"))},[T,_e,Oe,x]),yo=(0,t.useCallback)(async e=>{if(!T)return;await Oe(`/episodes/${T.id}/transcript/lines/${e}/merge`,"POST",{})&&x("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[T,Oe,x]),ko=(0,t.useCallback)(async()=>{if(!T)return;await Oe(`/episodes/${T.id}/transcript/undo`,"POST",{})&&x("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[T,Oe,x]),No=(0,t.useCallback)(async()=>{if(!T)return;let e=await Oe(`/episodes/${T.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(je({status:"none",missing:e.after}),x(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):x(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[T,Oe,x]),$o=(0,t.useCallback)(async()=>{if(T)try{let e=await ie(`${y}/episodes/${T.id}/transcript/validate`);at(e.issues||[]),x(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){x(e.message)}},[T,x]),zo=(0,t.useCallback)(async()=>{let e=I.current?.id;if(!e)return;let n=await ie(`${y}/episodes/${e}/transcript`);n.transcript&&be(n.transcript)},[]),Co=(0,t.useCallback)(async()=>{let e=I.current?.id,n=Ne;if(!(!e||!n)&&!(Ee.status==="running"||Ee.status==="queued")){je({status:"running"});try{let d=await re(`${y}/episodes/${e}/translate`,"POST",{target:n});je(d),d.status==="done"&&(await zo(),x("\u7FFB\u8BD1\u5B8C\u6210"))}catch(d){je(u=>({...u,status:"error",error:d.message}))}}},[Ne,Ee.status,zo,x]),So=(0,t.useCallback)(e=>{Gt(e||"")},[]),Zo=async()=>{if(K?.eid)try{await fetch(`${y}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${K.eid}`})})}catch{x("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Wo=e=>{let n=!e.favorite;i(d=>d.map(u=>u.id===e.id?{...u,favorite:n}:u)),re(`${y}/episodes/${e.id}/favorite`,"PUT",{favorite:n}).catch(d=>x(d.message))},Mo=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let n of e)try{await fetch(`${y}/episodes/${n}`,{method:"DELETE"})}catch{}i(n=>n.filter(d=>!e.includes(d.id))),Qe([]),e.includes(Q)&&w(null),x(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},$e=(0,t.useMemo)(()=>{let e=[...r];return de==="title"?e.sort((n,d)=>n.title.localeCompare(d.title,"zh-Hans-CN")):de==="duration"?e.sort((n,d)=>(d.duration||0)-(n.duration||0)):e.sort((n,d)=>d.mtime-n.mtime),e},[r,de]),xt=C?Ce:"",To=(0,t.useMemo)(()=>C?r.filter(e=>e.root===C):[],[r,C]),bt=(0,t.useMemo)(()=>C?Uo(To,xt):[],[To,C,xt]),Be=(0,t.useMemo)(()=>{let e=W.trim().toLowerCase();return $e.filter(n=>{if(C&&n.root!==C||C&&(n.rel||"")!==xt||e&&!`${n.title} ${n.artist} ${n.album}`.toLowerCase().includes(e))return!1;let u=v[n.id]?.position||0,B=n.duration||0,F=B?u/B:0;return te==="inprogress"?u>5&&F<.97:te==="finished"?F>=.97:me==="unheard"?u<=5:me==="transcribed"?!!n.hasTranscript:me==="favorites"?!!n.favorite:!0})},[$e,W,te,me,v,C,xt]),Po=(0,t.useMemo)(()=>ft.filter(e=>e.status==="queued"||e.status==="running"),[ft]),wt=(0,t.useMemo)(()=>Be.filter(e=>!e.hasTranscript),[Be]),eo=(0,t.useMemo)(()=>r.filter(e=>{let n=v[e.id];return!n||!n.position||n.position<5?!1:e.duration?n.position/e.duration<.97:!0}).sort((e,n)=>(v[n.id]?.updatedAt||0)-(v[e.id]?.updatedAt||0)).slice(0,4),[r,v]),Xo=(0,t.useMemo)(()=>r.reduce((e,n)=>e+(n.duration||0),0),[r]),Go=Math.round(Xo/3600*10)/10,yt=(0,t.useMemo)(()=>C?Fo(Vt(C),xt):[],[C,xt]),Yo=C?yt.length>1?yt[yt.length-1].label:Vt(C):te==="inprogress"?"\u7EE7\u7EED\u6536\u542C":te==="finished"?"\u5DF2\u64AD\u5B8C":te==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",K=Q?r.find(e=>e.id===Q)||(z?.id===Q?z:null):null,Qo=qe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":C?`${Be.length} \u96C6${bt.length?` \xB7 ${bt.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${Be.length} \u96C6 \xB7 \u5171 ${Go} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Fn=(0,t.useMemo)(()=>z?$e.findIndex(e=>e.id===z.id):-1,[$e,z]),kt=(0,t.useCallback)(()=>{let e=L.current;if(e){if(!I.current){let n=Be[0]||$e[0];n&&lt(n,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Be,$e]),lt=(0,t.useCallback)((e,n=!0)=>{let d=L.current;if(!d||!e)return;if(I.current&&I.current.id===e.id){n&&kt();return}I.current&&!d.ended&&d.currentTime>1&&it(I.current.id,d.currentTime,d.duration||Pe.current,!0),I.current=e,Ke(e),w(F=>F&&e.id),Ze(e.duration||0);let u=v[e.id]?.position||0,B=u>5&&(!e.duration||u<e.duration-10)?u:0;st.current=B,q(B),e.source==="xyz"?d.src=Te.current?`${Te.current}/xyz/${e.id.slice(3)}/audio`:`${y}/episodes/${e.id}/audio`:d.src=Te.current?`${Te.current}/episodes/${e.id}/audio`:`${y}/episodes/${e.id}/audio`,d.load(),d.playbackRate=ht.current.rate||1,d.volume=ht.current.volume??.9,n&&d.play().catch(()=>{}),et({lastEpisodeId:e.id})},[v,it,et,kt]),_o=(0,t.useCallback)(async e=>{let n=e.public?`${y}/xyz/public/play`:`${y}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,d=e.public?{pid:e.pid,eid:e.eid}:{},u=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),B=await u.json().catch(()=>({}));if(!u.ok)throw new Error(B.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Le(),lt(B.item,!0)},[Le,lt]);(0,t.useEffect)(()=>{let e=W.trim();if(e.length<2){b([]);return}let n=window.setTimeout(()=>{ie(`${y}/search?q=${encodeURIComponent(e)}`).then(d=>b(Array.isArray(d.items)?d.items:[])).catch(()=>b([]))},250);return()=>window.clearTimeout(n)},[W]);let Ut=(0,t.useCallback)((e,n=!0)=>{e&&(lt(e,n),w(e.id))},[lt]),De=(0,t.useCallback)(e=>{let n=L.current;if(!n||!I.current)return;let d=Number(e);if(!Number.isFinite(d))return;let u=Number(Pe.current)||0,B=Number.isFinite(n.duration)&&n.duration>0?n.duration:u,F=Math.max(0,B>0?Math.min(d,B):d);try{n.currentTime=F}catch{st.current=F;return}q(F),it(I.current.id,F,B||u,!0)},[it]),Ro=(0,t.useCallback)(e=>{let n=r.find(d=>d.id===e.episodeId);if(n){if(I.current?.id===e.episodeId){De(e.start),w(n.id);return}st.current=e.start,Ut(n,!1)}},[r,Ut,De]),Do=(0,t.useCallback)(e=>{let n=Dt.current;if(!n)return null;let d=n.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(e.clientX-d.left)/d.width)):null},[]),Ft=(0,t.useCallback)(e=>{let n=Do(e),d=Number.isFinite(Pe.current)&&Pe.current>0?Pe.current:Number.isFinite(L.current?.duration)?L.current.duration:0;n==null||!d||De(n*d)},[Do,De]),en=(0,t.useCallback)(e=>{e.preventDefault(),Qt.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Ft(e)},[Ft]),tn=(0,t.useCallback)(e=>{Qt.current&&Ft(e)},[Ft]),Io=(0,t.useCallback)(e=>{Qt.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),on=(0,t.useCallback)(e=>{let n=L.current;if(!n)return;let d=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),De((n.currentTime||0)-d)),e.key==="ArrowRight"&&(e.preventDefault(),De((n.currentTime||0)+d)),e.key==="Home"&&(e.preventDefault(),De(0)),e.key==="End"&&(e.preventDefault(),De(Number.isFinite(n.duration)?n.duration:0))},[De]),Et=(0,t.useCallback)(e=>{let n=L.current;if(!n||!I.current)return;let d=Math.max(0,Math.min((n.currentTime||0)+e,(n.duration||Pe.current||0)-1));n.currentTime=d,q(d)},[]),to=(0,t.useCallback)(e=>{if(!$e.length)return;let d=((I.current?$e.findIndex(u=>u.id===I.current.id):-1)+e+$e.length)%$e.length;lt($e[d],!0)},[$e,lt]),nn=(0,t.useCallback)(e=>{let n=L.current;n&&(n.playbackRate=e),et({rate:e}),ae(!1)},[et]);(0,t.useEffect)(()=>{if(!U)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".rate-wrap")||ae(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[U]),(0,t.useEffect)(()=>{if(!V)return;let e=()=>{let d=Math.max(0,Math.round((V-Date.now())/1e3));if(le(d),d<=0){let u=L.current;u&&!u.paused&&u.pause(),Z(0),se(0),x("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let n=window.setInterval(e,1e3);return()=>window.clearInterval(n)},[V,x]),(0,t.useEffect)(()=>{if(!fe)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".sleep-wrap")||ke(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[fe]);let oo=(0,t.useCallback)(e=>{if(ke(!1),e==="off"){Z(0),se(0),le(0);return}if(e==="end"){Z(0),se(-1),le(0),x("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}se(e),Z(Date.now()+e*6e4),x(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[x]),Kt=(0,t.useCallback)(e=>{let n=Math.max(0,Math.min(1,e)),d=L.current;d&&(d.volume=n),et({volume:n})},[et]),rn=(0,t.useCallback)(()=>{let e=L.current,n=ht.current.volume>0?0:.9;e&&(e.volume=n),et({volume:n})},[et]),an=()=>{let e=L.current;if(!e||!I.current)return;let n=performance.now();n-(vo.current||0)<400||(vo.current=n,q(e.currentTime),it(I.current.id,e.currentTime,e.duration||Pe.current))},sn=()=>{let e=L.current,n=I.current;if(!e||!n)return;let d=Number.isFinite(e.duration)?e.duration:n.duration||0;Ze(d);let u=st.current;st.current=0,u>0&&u<d-1&&(e.currentTime=u,q(u))},ln=()=>{let e=L.current;if(I.current&&it(I.current.id,e?.duration||Pe.current||0,e?.duration||Pe.current||0,!0),h===-1){se(0),Z(0),le(0),x("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}to(1)},pn=async e=>{await re(`${y}/folders`,"POST",{path:e}),await Le(),x("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},dn=async()=>{let e=await fetch(`${y}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return n},cn=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Ot||Mt(!0))},un=e=>{e.currentTarget.contains(e.relatedTarget)||Mt(!1)},mn=async e=>{e.preventDefault(),Mt(!1);let n=e.dataTransfer,d=[...n?.files||[]],u=d.map(G=>G.path).filter(G=>typeof G=="string"&&G),B=String(n?.getData("text/uri-list")||"").split(/\r?\n/).map(G=>G.trim()).filter(G=>G.startsWith("file://")).map(G=>decodeURIComponent(G.replace(/^file:\/\//,""))),F=[...new Set([...u,...B])];if(F.length){try{let G=await re(`${y}/import/paths`,"POST",{paths:F});await Le(),x(G.added?`\u5DF2\u6DFB\u52A0 ${G.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(G){He(G.message)}return}let pt=d.filter(G=>G.size>0);if(!pt.length){x("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let dt=`drop-${Date.now()}`,qt="",ao=0;for(let G of pt)try{let Eo=await fetch(`${y}/import/upload?name=${encodeURIComponent(G.name)}&batch=${dt}`,{method:"POST",body:G}),gn=await Eo.json();Eo.ok&&(qt=gn.folder||qt,ao+=1)}catch{}if(qt)try{await re(`${y}/folders`,"POST",{path:qt})}catch{}await Le(),x(ao?`\u5DF2\u5BFC\u5165 ${ao} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},vn=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await re(`${y}/folders`,"DELETE",{path:e}),oe(n=>n===e?"":n),await Le(),x("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(n){He(n.message)}};(0,t.useEffect)(()=>{let e=n=>{let d=n.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||n.metaKey||n.ctrlKey||n.altKey||(n.code==="Space"?(n.preventDefault(),kt()):n.key==="ArrowRight"?(n.preventDefault(),Et(15)):n.key==="ArrowLeft"?(n.preventDefault(),Et(-15)):n.key==="ArrowUp"?(n.preventDefault(),Kt(ht.current.volume+.05)):n.key==="ArrowDown"?(n.preventDefault(),Kt(ht.current.volume-.05)):n.key==="/"&&(n.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[kt,Et,Kt]);let no=e=>{let n=v[e.id];return!n||!e.duration?!1:n.position/e.duration>=.97},ro=e=>{let n=v[e.id];return!n||!e.duration?0:Math.min(100,Math.max(0,n.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${At?"nav-collapsed":""}`,onDragOver:cn,onDragLeave:un,onDrop:mn},Ot?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,At?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:ho},t.default.createElement(Y,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(Y,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:ho},t.default.createElement(Y,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",eo.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(no).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,n,d])=>t.default.createElement("button",{key:e,className:`nav-item ${te===e&&!C?"active":""}`,onClick:()=>{oe(""),xe(e)}},t.default.createElement("span",null,n),t.default.createElement("span",{className:"nav-count"},d||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>We(!0)},t.default.createElement(Y,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:C===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{xe("all"),k("all"),R(""),oe(n=>n===e?"":e)},onKeyDown:n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),xe("all"),k("all"),R(""),oe(d=>d===e?"":e))}},t.default.createElement(Y,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},Vt(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:n=>{n.stopPropagation(),vn(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Yo),t.default.createElement("p",{className:"subline"},Qo)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${vt?"is-on":""}`,onClick:()=>gt(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(Y,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",Po.length?` ${Po.length}`:"")),t.default.createElement("button",{className:`tool-btn ${Ye?"is-on":""}`,onClick:()=>{Pt(e=>!e),Qe([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(Y,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(Y,{name:"search",size:16}),t.default.createElement("input",{value:W,onChange:e=>R(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:de,onChange:e=>ce(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Ye?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",we.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>Qe(Be.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement("button",{className:"btn ghost",disabled:!wt.length,onClick:()=>Bt(wt.map(e=>e.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",wt.length," \u96C6"),t.default.createElement("button",{className:"btn primary",disabled:!we.length,onClick:()=>Bt(we)},"\u8F6C\u5199\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost danger",disabled:!we.length,onClick:()=>Mo(we)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{Qe([]),Pt(!1)}},"\u53D6\u6D88")):null,ot?t.default.createElement("div",{className:"banner error",onClick:()=>He("")},ot," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,K?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>w(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},K.artist,K.album?` \xB7 ${K.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(Nt,{item:K,size:288})),t.default.createElement("h2",{className:"episode-title"},K.title),t.default.createElement("p",{className:"episode-sub"},K.artist,K.album?` \xB7 ${K.album}`:""),t.default.createElement("p",{className:"episode-path",title:K.file},K.location||K.file),t.default.createElement("p",{className:"episode-stats"},so(K.duration)," \xB7 ",io(K.mtime)," \xB7 \u5DF2\u542C ",Math.round(ro(K)),"%"),K.shownotes?t.default.createElement("div",{className:`episode-notes ${A?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>_(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",A?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},K.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:kt},Se&&z?.id===K.id?"\u6682\u505C":"\u64AD\u653E"),X==="queued"||X==="running"?t.default.createElement("button",{className:"btn ghost",onClick:_t},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:It},K.source==="xyz"?T?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":T?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),K.source==="xyz"?t.default.createElement("button",{className:"btn ghost",onClick:Zo},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement("button",{className:"btn ghost danger",onClick:()=>Mo([K.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(Zt,{inline:!0,transcript:T,status:X,progress:Ae?.progress,stage:Ae?.stage,chunks:Ae?.chunks,queued:Ae?.queued,elapsed:Ct,editingId:_e,draft:a,onDraftChange:N,onEditLine:xo,onSaveLine:bo,onCancelEdit:()=>Re(null),onSplitLine:wo,onMergeLine:yo,onUndo:ko,onValidate:$o,onResegment:No,issues:O,onCancel:_t,error:he,position:ee,onSeek:De,onClose:()=>w(null),onStart:It,target:Ne,job:Ee,onChangeTarget:So,onTranslate:Co,onOpenSettings:()=>J(!0)})))):te==="xyz"?t.default.createElement(po,{onPlay:_o,currentId:z?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,n])=>t.default.createElement("button",{key:e,className:`chip ${me===e?"is-on":""}`,onClick:()=>k(e)},n))),te==="all"&&!W&&eo.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},eo.map(e=>{let n=ro(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${z?.id===e.id?"is-current":""}`,onClick:()=>Ut(e,!0)},t.default.createElement(Nt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${n}%`}}))))}))):null,W.trim().length>=2&&pe.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},pe.length)),pe.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Ro(e)},t.default.createElement("span",{className:"hit-time"},Ue(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,C?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},yt.map((e,n)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},n>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(Y,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${n===yt.length-1?"is-current":""}`,onClick:()=>ue(e.rel),disabled:n===yt.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!qe&&C&&bt.length>0&&!W?t.default.createElement("div",{className:"folder-rows"},bt.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>ue(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(Y,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,qe?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Be.length===0&&!(C&&bt.length>0&&!W)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":C?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${bt.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>We(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&C?t.default.createElement("button",{className:"btn",onClick:()=>oe("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},Be.map((e,n)=>{let d=ro(e),u=z?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${u?"is-current":""} ${no(e)?"is-finished":""} ${Ye&&we.includes(e.id)?"is-selected":""}`,onClick:()=>Ye?Vo(e.id):Ut(e,!0)},t.default.createElement("span",{className:"col-index row-index"},Ye?we.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(Y,{name:"check",size:14})):null:u&&Se?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):n+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Nt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",io(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},so(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:B=>{B.stopPropagation(),Wo(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},no(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(Y,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),St&&z&&!K?t.default.createElement(Zt,{transcript:T,status:X,progress:Ae?.progress,stage:Ae?.stage,chunks:Ae?.chunks,queued:Ae?.queued,elapsed:Ct,editingId:_e,draft:a,onDraftChange:N,onEditLine:xo,onSaveLine:bo,onCancelEdit:()=>Re(null),onSplitLine:wo,onMergeLine:yo,onUndo:ko,onValidate:$o,onResegment:No,issues:O,onCancel:_t,error:he,position:ee,onSeek:De,onClose:()=>Ge(!1),onStart:It,target:Ne,job:Ee,onChangeTarget:So,onTranslate:Co,onOpenSettings:()=>J(!0)}):null,vt?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>gt(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},ft.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):ft.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Ko(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Rt(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Rt(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Rt(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!wt.length,onClick:()=>Bt(wt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",wt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!we.length,onClick:()=>Bt(we)},"\u8F6C\u5199\u5DF2\u9009 ",we.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:Dt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ve||0),"aria-valuenow":Math.round(ee||0),"aria-valuetext":`${Ue(ee)} / ${Ue(ve)}`,onPointerDown:en,onPointerMove:tn,onPointerUp:Io,onPointerCancel:Io,onKeyDown:on},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ve?Math.min(100,Math.max(0,ee/ve*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ve?Math.min(100,Math.max(0,ee/ve*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},z?t.default.createElement("button",{className:"now-open",onClick:()=>w(z.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Nt,{item:z,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:z.title},z.title),t.default.createElement("div",{className:"now-artist"},z.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>to(-1)},t.default.createElement(Y,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Et(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:kt,disabled:!z&&Be.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(Y,{name:Se?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Et(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>to(1)},t.default.createElement(Y,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement("button",{className:`subs-btn ${St?"active":""}`,onClick:Jo,disabled:!z,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},t.default.createElement(Y,{name:"wave",size:15}),t.default.createElement("span",null,T?"\u5B57\u5E55":X==="queued"||X==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),t.default.createElement("span",{className:"time"},Ue(ee)," / ",Ue(ve)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>ae(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":U},M.rate,"\xD7"),U?t.default.createElement("span",{className:"rate-menu",role:"menu"},zn.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===M.rate,className:e===M.rate?"is-on":"",onClick:()=>nn(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${V?"active":""}`,onClick:()=>ke(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":fe},t.default.createElement(Y,{name:"moon",size:14}),V?t.default.createElement("span",{className:"sleep-left"},Ue(ze)):null),fe?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!V&&h!==-1,className:!V&&h!==-1?"is-on":"",onClick:()=>oo("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":h===e,className:h===e?"is-on":"",onClick:()=>oo(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>oo("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:rn,title:"\u9759\u97F3"},t.default.createElement(Y,{name:M.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:M.volume,onChange:e=>Kt(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),tt?t.default.createElement(Cn,{onClose:()=>We(!1),onSubmit:pn,onPick:dn}):null,Yt?t.default.createElement(Sn,{config:jt,onClose:()=>J(!1),onSave:async e=>{let n=await re(`${y}/translate/settings`,"PUT",e);E(n),J(!1),x("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,nt?t.default.createElement("div",{className:"toast"},nt):null,t.default.createElement("audio",{ref:L,preload:"metadata",onPlay:()=>Ve(!0),onPause:()=>{Ve(!1);let e=L.current;I.current&&e&&e.currentTime>0&&!e.ended&&it(I.current.id,e.currentTime,e.duration||Pe.current,!0)},onTimeUpdate:an,onLoadedMetadata:sn,onEnded:ln,onError:()=>{Ve(!1),x("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Wt=require("react");function Mn(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function Tn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=Mn(i);if(s!==null)return s}return null}function qo(){let r=Tn();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function Xt(){let[r,i]=(0,Wt.useState)(qo);return(0,Wt.useEffect)(()=>{let s=()=>i(qo());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var o=ct(require("react"),1);var j="/podwave/api";async function ge(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function ye(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function Pn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Je(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Dn(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function In(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function En(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function jn(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function mo(){let r=Xt(),[i,s]=(0,o.useState)([]),[c,v]=(0,o.useState)(""),[g,f]=(0,o.useState)(0),[P,M]=(0,o.useState)([]),[D,U]=(0,o.useState)(null),[ae,A]=(0,o.useState)(""),[_,h]=(0,o.useState)(!1),[se,V]=(0,o.useState)({asrModel:"",translateModel:""}),[Z,ze]=(0,o.useState)(null),[le,fe]=(0,o.useState)(null),[ke,W]=(0,o.useState)({showSidebarPanel:!0}),[R,pe]=(0,o.useState)({mode:"copy",orphans:0,orphanBytes:0}),[b,de]=(0,o.useState)(null),[ce,te]=(0,o.useState)(null),[xe,C]=(0,o.useState)(null),[oe,Ce]=(0,o.useState)(!1),[ue,me]=(0,o.useState)("auto"),[k,Q]=(0,o.useState)(!1),[w,z]=(0,o.useState)(null),[Ke,Se]=(0,o.useState)(!1),[Ve,ee]=(0,o.useState)(""),[q,ve]=(0,o.useState)(15),[Ze,qe]=(0,o.useState)(!0),[Me,tt]=(0,o.useState)("api"),[We,ot]=(0,o.useState)(!0),[He,nt]=(0,o.useState)("api"),[rt,T]=(0,o.useState)("https://api.deepseek.com"),[be,X]=(0,o.useState)("deepseek-chat"),[p,S]=(0,o.useState)(""),[Xe,zt]=(0,o.useState)(""),[Ct,ut]=(0,o.useState)(""),[he,H]=(0,o.useState)(""),[St,Ge]=(0,o.useState)(""),[jt,E]=(0,o.useState)(""),Ne=(0,o.useCallback)(async()=>{try{let[a,N,O,at,L,Te,Dt,I]=await Promise.all([ge(`${j}/history`),ge(`${j}/models`),ge(`${j}/translate/settings`),ge(`${j}/ui-settings`),ge(`${j}/transcribe/settings`),ge(`${j}/import/settings`),ge(`${j}/setup`),ge(`${j}/update`)]);de(Dt),z(I),Dt?.job?.status==="running"&&Q(!0),pe({mode:Te.mode||"copy",orphans:Te.orphans||0,orphanBytes:Te.orphanBytes||0}),W({showSidebarPanel:at?.showSidebarPanel!==!1}),ee((L.hotwords||[]).join(" ")),ve(L.chunkMinutes||15),qe(L.diarize!==!1),tt(L.provider||"api"),ot(L.realtime!==!1),s(a.items||[]),v(a.dir||""),f(Number(a.bytes)||0),M(N.models||[]),U(N.storage||null),A(N.storage?.dir||""),V(N.config||{asrModel:"",translateModel:""}),ze(N.transcribe||null),zt(N.config?.asrModel||""),ut(N.config?.translateModel||""),fe(O),nt(O.provider||"api"),T(O.apiBase||"https://api.deepseek.com"),X(O.apiModel||"deepseek-chat"),S(""),E("")}catch(a){E(a.message)}},[]);(0,o.useEffect)(()=>{Ne()},[Ne]),(0,o.useEffect)(()=>{let a=!1;return ge(`${j}/setup/plan?source=${ue}&mode=${Me==="local"?"local":"basic"}`).then(N=>{a||te(N)}).catch(()=>{}),()=>{a=!0}},[ue,Me,b?.job?.status]),(0,o.useEffect)(()=>{if(!k&&b?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let N=await ge(`${j}/setup`);de(N),N.job?.status!=="running"&&Q(!1)}catch{}},2500);return()=>window.clearInterval(a)},[k,b?.job?.status]);let Gt=async()=>{E(""),Q(!0);try{await ye(`${j}/setup/install`,"POST",{source:ue});let a=await ge(`${j}/setup`);de(a),J("\u5F00\u59CB\u5B89\u88C5")}catch(a){Q(!1),E(a.message)}},Ee=async()=>{try{await ye(`${j}/history/open`,"POST",{})}catch(a){E(a.message)}},je=async()=>{E(""),Q(!0);try{await ye(`${j}/setup/install`,"POST",{source:ue,mode:"local"});let a=await ge(`${j}/setup`);de(a),J("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){Q(!1),E(a.message)}},Yt=async()=>{try{await ye(`${j}/setup/cancel`,"POST",{}),J("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){E(a.message)}},J=a=>{Ge(a),window.setTimeout(()=>Ge(""),2400)},At=async()=>{Ce(!0);try{let a=await ge(`${j}/setup/verify`);C(a),J(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){J(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{Ce(!1)}},Lt=async()=>{try{let a=await ge(`${j}/setup/diagnose`),N=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(N)}catch{let O=document.createElement("textarea");O.value=N,O.style.position="fixed",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),O.remove()}J("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){J(a.message||"\u590D\u5236\u5931\u8D25")}},Ot=async()=>{H("api"),E("");try{let a={provider:He,apiBase:rt,apiModel:be};p.trim()&&(a.apiKey=p.trim());let N=await ye(`${j}/translate/settings`,"PUT",a);fe(N),S(""),J("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{H("")}},Mt=async()=>{H("models"),E("");try{let a=await ye(`${j}/models`,"PUT",{asrModel:Xe,translateModel:Ct});V(a.config),M(a.models||[]),ze(a.transcribe||null),J("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{H("")}},Ae=async()=>{try{await ye(`${j}/models/open`,"POST",{})}catch(a){E(a.message)}},mt=async(a,N=!0)=>{h(!0),E("");try{let O=await ye(`${j}/models/dir`,"POST",{dir:a,move:N});U(O.storage||null),M(O.models||[]),A(O.storage?.dir||"");let at=(O.moved||[]).length,L=(O.skipped||[]).length;J(at||L?`\u5DF2\u8FC1\u79FB ${at} \u4E2A\u6A21\u578B${L?`\uFF0C${L} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(O){E(O.message)}finally{h(!1)}},vt=async a=>{H(`model:${a}`),E("");try{let N=await ye(`${j}/models/remove`,"POST",{name:a});U(N||null),M(N.models||[]),J(`\u5DF2\u5220\u9664 ${a}`)}catch(N){E(N.message)}finally{H("")}},gt=P.length?P:[{name:se.asrModel||"qwen3-asr-1.7b-8bit",ready:Z?.modelReady},{name:se.translateModel||"hy-mt2-1.8b-4bit",ready:le?.localReady}],ft=async()=>{Se(!0);try{z(await ge(`${j}/update?force=1`))}catch{J("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Se(!1)}},Tt=gt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),Ye=gt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Pt=async()=>{H("ui"),E("");try{let a=await ye(`${j}/ui-settings`,"PUT",{showSidebarPanel:ke.showSidebarPanel});W({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),J("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{H("")}},we=async a=>{H("import"),E("");try{let N=await ye(`${j}/import/settings`,"PUT",{mode:a});pe(O=>({...O,mode:N.mode})),J("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(N){E(N.message)}finally{H("")}},Qe=async()=>{if(R.orphans&&window.confirm(`\u6E05\u7406 ${R.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){H("imports"),E("");try{let a=await ye(`${j}/imports/orphans`,"DELETE",{});pe(N=>({...N,orphans:0,orphanBytes:0})),J(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){E(a.message)}finally{H("")}}},_e=async()=>{H("transcribe"),E("");try{let a=Ve.split(/[\s,，、]+/).map(O=>O.trim()).filter(Boolean).slice(0,500),N=await ye(`${j}/transcribe/settings`,"PUT",{provider:Me,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(q)||15)),diarize:Ze,realtime:We});ee((N.hotwords||[]).join(" ")),ve(N.chunkMinutes||15),qe(N.diarize!==!1),tt(N.provider||"api"),N.runtime&&ze(N.runtime),J("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){E(a.message)}finally{H("")}},Re=gt;return o.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},o.default.createElement("style",null,Jt),o.default.createElement("div",{className:"podwave-settings"},o.default.createElement("header",{className:"settings-head"},o.default.createElement("h1",null,"\u64AD\u5BA2"),o.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),jt?o.default.createElement("div",{className:"banner error",onClick:()=>E("")},jt):null,St?o.default.createElement("div",{className:"settings-message"},St):null,o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),b?o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{className:"setup-platform"},b.platform?.osLabel," \xB7 ",b.platform?.arch," \xB7 ",b.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",b.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",b.engine?.label),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn ghost",onClick:Lt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),o.default.createElement("button",{className:"settings-btn ghost",disabled:oe,onClick:At},oe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),xe?o.default.createElement("ul",{className:"setup-components"},xe.checks.map(a=>o.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,o.default.createElement("ul",{className:"setup-components"},(b.components||[]).map(a=>o.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?o.default.createElement("span",{className:"setup-component-size"},Je(a.bytes)):null))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),o.default.createElement("select",{value:ue,onChange:a=>me(a.target.value)},o.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),o.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),o.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),ce?.items?.length?o.default.createElement("details",{className:"setup-plan",open:!0},o.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Je(ce.totalBytes)," \xB7 ",ce.items.length," \u9879"),o.default.createElement("ul",null,ce.items.map(a=>o.default.createElement("li",{key:a.id},o.default.createElement("span",null,a.label),o.default.createElement("span",null,a.bytes?Je(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):o.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:k||b.job?.status==="running",onClick:Gt},k||b.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),b.job?.status==="running"?o.default.createElement("button",{className:"settings-btn ghost",onClick:Yt},"\u53D6\u6D88"):null),b.job?o.default.createElement("div",{className:"setup-job"},o.default.createElement("div",{className:"setup-job-line"},o.default.createElement("span",null,b.job.stage||b.job.status),o.default.createElement("span",null,b.job.progress||0,"% \xB7 ",Je(b.job.bytes)," / ",Je(b.job.expected))),o.default.createElement("div",{className:"setup-progress"},o.default.createElement("span",{style:{width:`${b.job.progress||0}%`}})),b.job.error?o.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",b.job.error):null,b.job.warning?o.default.createElement("p",{className:"settings-hint setup-warning"},b.job.warning):null,b.job.status==="done"&&(!b.job.summary||!b.job.summary.length)?o.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,b.job.status==="done"&&b.job.modelsDir?o.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",b.job.modelsDir):null,Array.isArray(b.job.summary)&&b.job.summary.length?o.default.createElement("ul",{className:"setup-summary"},b.job.summary.map(a=>o.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":Je(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):o.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),o.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?o.default.createElement("ul",{className:"history-list"},i.map(a=>o.default.createElement("li",{key:a.id,className:"history-row"},o.default.createElement("div",{className:"history-main"},o.default.createElement("span",{className:"history-title"},a.title),o.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Pn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),o.default.createElement("span",{className:"history-date"},Dn(a.completedAt))))):o.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Ee,disabled:!c},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),o.default.createElement("span",{className:"settings-status"},c?`${c}${g?` \xB7 ${Je(g)}`:""}`:""))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u8F6C\u5199"),o.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),o.default.createElement("select",{value:Me,onChange:a=>tt(a.target.value)},o.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),Me==="api"?o.default.createElement("p",{className:"settings-status"},Z?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):o.default.createElement("p",{className:"settings-status"},Z?.installed&&Z?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${Z.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u70ED\u8BCD"),o.default.createElement("input",{value:Ve,onChange:a=>ee(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),o.default.createElement("input",{type:"number",min:"1",max:"60",value:q,onChange:a=>ve(a.target.value)})),o.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:We,onChange:a=>ot(a.target.checked)}),o.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:Ze,onChange:a=>qe(a.target.checked)}),o.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:_e,disabled:he==="transcribe"},he==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),Me==="local"&&!(Z?.installed&&Z?.modelReady)?o.default.createElement("button",{className:"settings-btn",onClick:je,disabled:k},k?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,o.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),o.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:R.mode==="copy",onChange:()=>we("copy")}),o.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:R.mode==="reference",onChange:()=>we("reference")}),o.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Qe,disabled:he==="imports"||!R.orphans},R.orphans?`\u6E05\u7406 ${R.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(R.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),o.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),o.default.createElement("select",{value:He,onChange:a=>nt(a.target.value)},o.default.createElement("option",{value:"api"},"DeepSeek API"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u5730\u5740"),o.default.createElement("input",{value:rt,onChange:a=>T(a.target.value),placeholder:"https://api.deepseek.com"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u6A21\u578B"),o.default.createElement("input",{value:be,onChange:a=>X(a.target.value),placeholder:"deepseek-chat"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API Key"),o.default.createElement("input",{type:"password",value:p,onChange:a=>S(a.target.value),placeholder:le?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${le.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Ot,disabled:he==="api"},he==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},le?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u754C\u9762"),o.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:ke.showSidebarPanel,onChange:a=>W({showSidebarPanel:a.target.checked})}),o.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Pt,disabled:he==="ui"},he==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},In(D),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),D?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"model-path"},o.default.createElement("code",{className:"model-path-text",title:D.dir},D.dir),o.default.createElement("span",{className:"model-path-size"},jn(D)," \xB7 \u5171 ",Je(D.totalBytes))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),o.default.createElement("input",{value:ae,onChange:a=>A(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:_||ae.trim()===D.dir,onClick:()=>mt(ae,!0)},_?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),o.default.createElement("button",{className:"settings-btn ghost",onClick:Ae},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),D.projectDir&&D.dir!==D.projectDir?o.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>mt(D.projectDir,!0)},En(D)):null,D.custom?o.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>mt("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),P.length?o.default.createElement("ul",{className:"model-list"},P.map(a=>o.default.createElement("li",{key:a.name,className:"model-row"},o.default.createElement("div",{className:"model-main"},o.default.createElement("span",{className:"model-name"},a.name),o.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",Je(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),o.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||he===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>vt(a.name)},he===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),o.default.createElement("select",{value:Xe,onChange:a=>zt(a.target.value)},(Tt.length?Tt:Re).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},Z?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),o.default.createElement("select",{value:Ct,onChange:a=>ut(a.target.value)},(Ye.length?Ye:Re).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},le?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Mt,disabled:he==="models"},he==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),o.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},w?.current?`v${w.current}`:"\u2014")),o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},w?.latest?`v${w.latest}`:w?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),o.default.createElement("p",{className:"settings-hint"},w?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":w?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${w.error}\uFF09\u3002`:w?.latest?w?.current&&w?.latest&&w.current!==w.latest&&w.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:ft,disabled:Ke},Ke?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),w?.checkedAt?o.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(w.checkedAt).toLocaleString()):null))))}function An({size:r=16}){return Fe.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Fe.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Fe.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Fe.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Fe.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Fe.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ln(){let r=Xt();return Fe.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Fe.default.createElement("style",null,Jt),Fe.default.createElement(uo,null))}function On(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Ln)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},mo));let i=null,s="podwave-hide-nav",c=g=>{if(typeof document>"u")return;let f=document.getElementById(s);g&&!f?(f=document.createElement("style"),f.id=s,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!g&&f&&f.remove()},v=g=>{if(c(!g),g&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},An);else if(!g&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var Bn=["slots"];

return module.exports}})
