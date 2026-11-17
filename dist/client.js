window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Wn=Object.create;var io=Object.defineProperty;var Yn=Object.getOwnPropertyDescriptor;var _n=Object.getOwnPropertyNames;var Zn=Object.getPrototypeOf,Gn=Object.prototype.hasOwnProperty;var Qn=(r,i)=>{for(var s in i)io(r,s,{get:i[s],enumerable:!0})},sn=(r,i,s,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of _n(i))!Gn.call(r,v)&&v!==s&&io(r,v,{get:()=>i[v],enumerable:!(c=Yn(i,v))||c.enumerable});return r};var Ge=(r,i,s)=>(s=r!=null?Wn(Zn(r)):{},sn(i||!r||!r.__esModule?io(s,"default",{value:r,enumerable:!0}):s,r)),Rn=r=>sn(io({},"__esModule",{value:!0}),r);var hr={};Qn(hr,{apply:()=>vr,inject:()=>fr});module.exports=Rn(hr);var et=Ge(require("react"),1);var lo=`
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
`;var t=Ge(require("react"),1);var P=Ge(require("react"),1);function R({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),P.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),P.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),P.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return P.default.createElement("svg",{...s},P.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),P.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),P.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),P.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return P.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},P.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),P.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),P.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),P.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),P.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return P.default.createElement("svg",{...s},P.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Mo=Ge(require("react"),1);function Ie(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),c=Math.floor(i%3600/60),v=i%60;return s>0?`${s}:${String(c).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${c}:${String(v).padStart(2,"0")}`}function Co(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function So(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function ln(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function po(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var tr="/podwave/api";function Tt({item:r,size:i=44,className:s=""}){let c={width:i,height:i};return r&&r.hasCover?Mo.default.createElement("img",{className:`cover ${s}`,style:c,src:`${tr}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Mo.default.createElement("div",{className:`cover cover-fallback ${s}`,style:c,"aria-hidden":!0},ln(r&&r.title))}var g=Ge(require("react"),1);var he=Ge(require("react"),1);function Qe({trigger:r,title:i,align:s="end",placement:c="down",className:v="",buttonClassName:f="",disabled:x=!1,children:T}){let[z,A]=(0,he.useState)(!1),j=(0,he.useRef)(null);(0,he.useEffect)(()=>{if(!z)return;let I=h=>{j.current?.contains(h.target)||A(!1)},K=h=>{h.key==="Escape"&&A(!1)};return document.addEventListener("pointerdown",I),document.addEventListener("keydown",K),()=>{document.removeEventListener("pointerdown",I),document.removeEventListener("keydown",K)}},[z]),(0,he.useEffect)(()=>{x&&z&&A(!1)},[x,z]);let O=["pop-panel",s==="start"?"is-start":"",c==="up"?"is-up":""].filter(Boolean).join(" ");return he.default.createElement("span",{className:`pop-wrap ${v}`,ref:j},he.default.createElement("button",{type:"button",className:f||"pop-btn",onClick:()=>A(I=>!I),title:i,disabled:x,"aria-haspopup":"menu","aria-expanded":z},r),z?he.default.createElement("span",{className:O,role:"menu"},T({close:()=>A(!1)})):null)}function $e({children:r,hint:i,checked:s=!1,danger:c=!1,disabled:v=!1,onSelect:f}){let x=["pop-item",s?"is-on":"",c?"is-danger":""].filter(Boolean).join(" ");return he.default.createElement("button",{type:"button",className:x,role:s?"menuitemcheckbox":"menuitem","aria-checked":s||void 0,disabled:v,onClick:f},he.default.createElement("span",null,r),i?he.default.createElement("span",{className:"pop-hint"},i):null)}function Po({children:r,hint:i,href:s,onSelect:c}){return he.default.createElement("a",{className:"pop-item",role:"menuitem",href:s,download:!0,onClick:c},he.default.createElement("span",null,r),i?he.default.createElement("span",{className:"pop-hint"},i):null)}var Xt=Ge(require("react"),1);function Wt({value:r,onChange:i,compact:s=!1}){let c=Number.isFinite(Number(r))?Number(r):15;return Xt.default.createElement("label",{className:`sub-size ${s?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},Xt.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),Xt.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:c,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:v=>i(Number(v.target.value))}),Xt.default.createElement("span",{className:"sub-size-value"},c))}var pn="/podwave/api";function or(r){let i=new Date(Number(r)||Date.now()),s=c=>String(c).padStart(2,"0");return`${s(i.getHours())}:${s(i.getMinutes())}`}function co({transcript:r,status:i,progress:s,stage:c,chunks:v,queued:f,elapsed:x,error:T,position:z,onSeek:A,onClose:j,onStart:O,onCancel:I,target:K,job:h,onChangeTarget:_,onTranslate:Z,onRetranslate:ee=null,onRetranslateLine:Ae=null,onOpenSettings:re,inline:de=!1,editingId:se=null,draft:V="",onDraftChange:Te,onEditLine:ce,onSaveLine:G,onCancelEdit:ue,onSplitLine:u,onMergeLine:b,onUndo:L,undoSteps:C=[],onValidate:me,onResegment:je,issues:Se=[],fontSize:ge=15,onFontSize:ze=null}){let Me=(0,g.useRef)(null),te=(0,g.useRef)(null),[$,J]=(0,g.useState)(!1),we=r?.lines?.findIndex(w=>z>=w.start&&z<w.end)??-1;(0,g.useEffect)(()=>{if(we<0||!Me.current)return;Me.current.querySelector(`[data-seg="${we}"]`)?.scrollIntoView({block:"nearest"})},[we]);let Ue=i==="queued"||i==="running",Q=h?.status==="running"||h?.status==="queued",X=h?.missing??0,ie=Q?`\u7FFB\u8BD1\u4E2D${h?.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""}`:h?.status==="partial"?"\u7EED\u7FFB":h?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",qe=async()=>{let oe=(r?.lines||[]).map(D=>{let ye=Ie(D.start),Fe=K?D.translations?.[K]:"";return Fe?`${ye} ${D.text}
${" ".repeat(ye.length+1)}${Fe}`:`${ye} ${D.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(oe);else{let D=document.createElement("textarea");D.value=oe,D.style.position="fixed",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),document.body.removeChild(D)}J(!0),setTimeout(()=>J(!1),1600)}catch{J(!1)}};return g.default.createElement("section",{className:`transcript-panel ${de?"inline":""}`,style:{"--sub-size":`${ge}px`}},g.default.createElement("header",{className:"transcript-head"},g.default.createElement("h3",null,"\u5B57\u5E55"),r?g.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,g.default.createElement("div",{className:"transcript-actions"},g.default.createElement("select",{className:"tr-select",value:K,onChange:w=>_(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},g.default.createElement("option",{value:""},"\u5BF9\u7167"),g.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),g.default.createElement("option",{value:"en"},"English")),ze?g.default.createElement(Qe,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${ge}px`,align:"end"},()=>g.default.createElement("span",{className:"pop-fs"},g.default.createElement(Wt,{value:ge,onChange:ze}))):null,r&&K&&Z?Q?g.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},ie):X>0?g.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:Z,title:`\u8FD8\u6709 ${X} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},ie):null:null,r?g.default.createElement(Qe,{className:"tr-undo",trigger:"\u64A4\u9500",title:C.length?`\u8FD8\u80FD\u64A4\u9500 ${C.length} \u6B65`:"\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u4FEE\u6539",align:"end",disabled:!C.length},({close:w})=>g.default.createElement(g.default.Fragment,null,C.length?C.map(oe=>g.default.createElement($e,{key:oe.id,hint:`${or(oe.at)} \xB7 ${oe.lineCount} \u884C`,onSelect:()=>{w(),L(oe.id)}},"\u64A4\u9500\u300C",oe.action,"\u300D")):g.default.createElement($e,{disabled:!0,hint:"\u6539\u884C\u3001\u62C6\u5206\u3001\u5408\u5E76\u3001\u6574\u7406\u65AD\u53E5\u3001\u7FFB\u8BD1\u90FD\u4F1A\u8BB0\u4E00\u6B65"},"\u8FD8\u6CA1\u6709\u53EF\u4EE5\u64A4\u9500\u7684\u64CD\u4F5C"))):null,g.default.createElement(Qe,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:w})=>g.default.createElement(g.default.Fragment,null,r?g.default.createElement($e,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{w(),me()}},"\u6821\u9A8C\u5B57\u5E55"):null,r&&je?g.default.createElement($e,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{w(),je()}},"\u6574\u7406\u65AD\u53E5"):null,r&&K&&ee?g.default.createElement($e,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{w(),ee()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,g.default.createElement($e,{hint:"\u8F6C\u5199\u4E0E\u7FFB\u8BD1",onSelect:()=>{w(),re()}},"\u8BBE\u7F6E"))),r?g.default.createElement(Qe,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:w})=>g.default.createElement(g.default.Fragment,null,g.default.createElement(Po,{hint:"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${pn}/episodes/${r.id}/transcript/export?format=srt`,onSelect:w},"\u5B57\u5E55\u6587\u4EF6 .srt"),g.default.createElement(Po,{hint:"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${pn}/episodes/${r.id}/transcript/export?format=md`,onSelect:w},"\u6587\u7A3F .md"),g.default.createElement($e,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:qe},$?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,de?null:g.default.createElement("button",{className:"transcript-close",onClick:j,title:"\u6536\u8D77"},"\xD7"))),g.default.createElement("div",{className:"transcript-body",ref:Me},r&&Ue?g.default.createElement("div",{className:"tr-strip"},g.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),I?g.default.createElement("button",{className:"seg-tool",onClick:I},"\u53D6\u6D88"):null):null,r&&Se?.length?g.default.createElement("div",{className:"tr-issues"},Se.slice(0,5).map(w=>g.default.createElement("div",{key:w},"\xB7 ",w)),Se.length>5?g.default.createElement("div",null,"\u2026\u5171 ",Se.length," \u6761"):null):null,h?.status==="running"||h?.status==="queued"?g.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",h.progress?.total?` ${h.progress.done||0}/${h.progress.total}`:""):null,h?.status==="error"?g.default.createElement("div",{className:"tr-running err"},h.error,"\u5F85\u7FFB ",h.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,h?.status==="partial"?g.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",h.translated??0,"/",h.total??0," \u884C\uFF0C\u8FD8\u7F3A ",h.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,h?.status==="none"&&K&&r&&(h.missing??0)>0?g.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",h.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,r?r.lines.map((w,oe)=>g.default.createElement("div",{key:w.id,"data-seg":oe,className:`seg-row ${oe===we?"active":""} ${se===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ie(w.start)}`,onClick:()=>A(w.start),onKeyDown:D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),A(w.start))}},g.default.createElement("span",{className:"seg-time"},Ie(w.start)),se===w.id?g.default.createElement("span",{className:"seg-edit",onClick:D=>D.stopPropagation()},g.default.createElement("textarea",{ref:te,value:V,rows:Math.min(4,Math.max(2,Math.ceil((V.length||1)/40))),onChange:D=>Te(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.metaKey||D.ctrlKey)&&G(w.id),D.key==="Escape"&&ue()}}),g.default.createElement("span",{className:"seg-edit-actions"},g.default.createElement("button",{className:"seg-tool",onClick:()=>G(w.id)},"\u4FDD\u5B58"),g.default.createElement("button",{className:"seg-tool",onClick:()=>u(w.id,te.current?.selectionStart??Math.floor(V.length/2))},"\u62C6\u5206"),K&&Ae?g.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>Ae(w)},"\u91CD\u7FFB"):null,g.default.createElement("button",{className:"seg-tool",onClick:ue},"\u53D6\u6D88"))):g.default.createElement(g.default.Fragment,null,w.speaker!=null?g.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},r.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,g.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[K]?g.default.createElement("span",{className:"seg-trans"},w.translations[K]):null),g.default.createElement("span",{className:"seg-tools"},g.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:D=>{D.stopPropagation(),ce(w)}},"\u270E"),oe<r.lines.length-1?g.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:D=>{D.stopPropagation(),b(w.id)}},"\u21E3"):null)))):Ue?g.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((x||0)/1e3)+" \u79D2",s?.percent!=null?g.default.createElement("span",{className:"tx-progress"},g.default.createElement("span",{style:{width:`${s.percent}%`}})):null,g.default.createElement("br",null),g.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),g.default.createElement("br",null),I?g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:I},"\u53D6\u6D88\u8F6C\u5199"):null):T?g.default.createElement("div",{className:"transcript-status"},g.default.createElement("span",{className:"err"},T),g.default.createElement("br",null),g.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:O},"\u91CD\u8BD5")):g.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",g.default.createElement("br",null),g.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:O},"\u5F00\u59CB\u8F6C\u5199"))))}var B=Ge(require("react"),1);function To({line:r,target:i,fontSize:s,onFontSize:c,x:v,y:f,width:x,height:T,onMove:z,onResize:A,onClose:j,onSeek:O,speakerLabel:I,status:K}){let h=(0,B.useRef)(null),_=(0,B.useRef)(null),Z=(0,B.useRef)(null),ee=(0,B.useCallback)((u,b)=>{let L=h.current,C=L?.offsetWidth||420,me=L?.offsetHeight||120,je=Math.max(8,window.innerWidth-C-8),Se=Math.max(8,window.innerHeight-me-8);return{x:Math.min(je,Math.max(8,u)),y:Math.min(Se,Math.max(8,b))}},[]),Ae=(0,B.useCallback)(u=>{if(u.button!==void 0&&u.button!==0)return;let b=h.current;if(!b)return;let L=b.getBoundingClientRect();_.current={dx:u.clientX-L.left,dy:u.clientY-L.top},u.currentTarget.setPointerCapture?.(u.pointerId)},[]),re=(0,B.useCallback)(u=>{let b=_.current;if(!b)return;let L=ee(u.clientX-b.dx,u.clientY-b.dy);z(L.x,L.y,!1)},[ee,z]),de=(0,B.useCallback)(u=>{let b=_.current;if(!b)return;_.current=null,u.currentTarget.releasePointerCapture?.(u.pointerId);let L=ee(u.clientX-b.dx,u.clientY-b.dy);z(L.x,L.y,!0)},[ee,z]),se=(0,B.useCallback)(u=>{if(u.button!==void 0&&u.button!==0)return;u.stopPropagation();let b=h.current;if(!b)return;let L=b.getBoundingClientRect();Z.current={startX:u.clientX,startY:u.clientY,width:L.width,height:L.height},u.currentTarget.setPointerCapture?.(u.pointerId)},[]),V=(0,B.useCallback)(u=>{let b=Z.current;if(!b)return null;let L=Math.max(240,window.innerWidth-(v==null?16:v+8)),C=Math.max(92,window.innerHeight-(f==null?16:f+8));return{width:Math.round(Math.min(L,Math.max(240,b.width+(u.clientX-b.startX)))),height:Math.round(Math.min(C,Math.max(92,b.height+(u.clientY-b.startY))))}},[v,f]),Te=(0,B.useCallback)(u=>{if(!Z.current)return;u.stopPropagation();let b=V(u);b&&A(b.width,b.height,!1)},[A,V]),ce=(0,B.useCallback)(u=>{if(!Z.current)return;u.stopPropagation();let b=V(u);Z.current=null,u.currentTarget.releasePointerCapture?.(u.pointerId),b&&A(b.width,b.height,!0)},[A,V]);(0,B.useEffect)(()=>{let u=b=>{b.key==="Escape"&&j()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[j]);let G=r&&i?r.translations?.[i]:"",ue=K==="queued"||K==="running";return B.default.createElement("div",{ref:h,className:`caption-overlay ${T?"is-sized":""}`,style:{left:v??void 0,top:f??void 0,right:v==null?void 0:"auto",bottom:f==null?void 0:"auto",width:x?`${x}px`:void 0,height:T?`${T}px`:void 0,"--sub-size":`${s||15}px`}},B.default.createElement("div",{className:"caption-head",onPointerDown:Ae,onPointerMove:re,onPointerUp:de,onPointerCancel:de,title:"\u62D6\u52A8\u53EF\u4EE5\u6362\u4F4D\u7F6E"},B.default.createElement(R,{name:"wave",size:13}),B.default.createElement("span",{className:"caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),B.default.createElement(Wt,{value:s,onChange:c,compact:!0}),B.default.createElement("button",{className:"caption-close",onClick:j,title:"\u5173\u95ED\uFF08Esc\uFF09"},"\xD7")),B.default.createElement("div",{className:`caption-body ${r?"":"empty"}`,onClick:()=>r?O(r.start):null,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:u=>{r&&(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),O(r.start))},title:r?`\u8DF3\u5230 ${Ie(r.start)}`:void 0},r?B.default.createElement(B.default.Fragment,null,I?B.default.createElement("span",{className:"caption-speaker"},I):null,B.default.createElement("div",{className:"caption-text"},r.text),G?B.default.createElement("div",{className:"caption-trans"},G):null):B.default.createElement("div",{className:"caption-hint"},ue?"\u6B63\u5728\u8BC6\u522B\uFF0C\u9A6C\u4E0A\u5C31\u51FA\u5B57\u5E55\u2026":"\u64AD\u653E\u5230\u6709\u5B57\u5E55\u7684\u4F4D\u7F6E\u5C31\u4F1A\u663E\u793A\u8FD9\u4E00\u53E5")),B.default.createElement("span",{className:"caption-resize",onPointerDown:se,onPointerMove:Te,onPointerUp:ce,onPointerCancel:ce,onDoubleClick:()=>A(null,null,!0),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}var l=Ge(require("react"),1),xe="/podwave/api";async function Ke(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function Dt(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),c=await s.json().catch(()=>({}));if(!s.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return c}function dn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function cn(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Do({onPlay:r,currentId:i}){let[s,c]=(0,l.useState)(null),[v,f]=(0,l.useState)(""),[x,T]=(0,l.useState)(""),[z,A]=(0,l.useState)(""),[j,O]=(0,l.useState)(""),[I,K]=(0,l.useState)(0),[h,_]=(0,l.useState)(!1),[Z,ee]=(0,l.useState)(""),[Ae,re]=(0,l.useState)(""),[de,se]=(0,l.useState)([]),[V,Te]=(0,l.useState)(!1),[ce,G]=(0,l.useState)(null),[ue,u]=(0,l.useState)([]),[b,L]=(0,l.useState)(null),[C,me]=(0,l.useState)(!1),[je,Se]=(0,l.useState)(""),[ge,ze]=(0,l.useState)(null),[Me,te]=(0,l.useState)(!1),[$,J]=(0,l.useState)(null),[we,Ue]=(0,l.useState)(!1),Q=(0,l.useCallback)(async(d=!1)=>{Te(!0);try{let k=await Ke(`${xe}/xyz/subscriptions${d?"?refresh=1":""}`);se(k.items||[])}catch(k){X(k)}finally{Te(!1)}},[]);function X(d){let k=String(d?.message||"");if(k.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||k.includes("\u767B\u5F55\u5DF2\u5931\u6548")){c(Ee=>({...Ee||{},loggedIn:!1})),se([]),G(null),u([]),ee(""),f("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}f(ie(k))}function ie(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function qe(){try{await Dt(`${xe}/xyz/open-web`,{})}catch(d){X(d)}}(0,l.useEffect)(()=>{Ke(`${xe}/xyz/status`).then(d=>{c(d),d.loggedIn&&Q()}).catch(d=>X(d)),Ke(`${xe}/xyz/local-app`).then(d=>J(d)).catch(()=>J({available:!1}))},[Q]),(0,l.useEffect)(()=>{if(!I)return;let d=setInterval(()=>K(k=>Math.max(0,k-1)),1e3);return()=>clearInterval(d)},[I]);async function w(){if(f(""),!/^1\d{10}$/.test(z.trim())){f("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}T("send");try{let d=await Dt(`${xe}/xyz/auth/send-code`,{phone:z.trim(),areaCode:"+86"});K(60),d.devCode&&f(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){X(d)}finally{T("")}}async function oe(){if(f(""),!z.trim()||!j.trim()){f("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}T("login");try{await Dt(`${xe}/xyz/auth/login`,{phone:z.trim(),code:j.trim(),areaCode:"+86"});let d=await Ke(`${xe}/xyz/status`);c(d),await Q()}catch(d){X(d)}finally{T("")}}async function D(){if(f(""),!Z.trim()){f("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}T("token");try{await Dt(`${xe}/xyz/auth/token`,{refreshToken:Z.trim(),deviceId:Ae.trim()});let d=await Ke(`${xe}/xyz/status`);c(d),ee(""),await Q()}catch(d){X(d)}finally{T("")}}async function ye(){f("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");ee(d.trim())}catch(d){f(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function Fe(){f(""),T("app");try{await Dt(`${xe}/xyz/auth/from-app`,{});let d=await Ke(`${xe}/xyz/status`);c(d),await Q(!0)}catch(d){X(d)}finally{Ke(`${xe}/xyz/local-app`).then(d=>J(d)).catch(()=>{}),T("")}}async function tt(){T("logout");try{await Dt(`${xe}/xyz/auth/logout`,{}),c({loggedIn:!1}),se([]),G(null),u([])}catch(d){X(d)}finally{T("")}}async function at(d){G(d),u([]),L(null),me(!0),f("");try{let k=await Ke(`${xe}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);u(k.items||[]),L(k.loadMoreKey||null)}catch(k){X(k)}finally{me(!1)}}async function st(){if(!(!ce||!b||C)){me(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:b}),k=await Ke(`${xe}/xyz/podcast/${encodeURIComponent(ce.pid)}/episodes?${d}`);u(Ee=>[...Ee,...k.items||[]]),L(k.loadMoreKey||null)}catch(d){X(d)}finally{me(!1)}}}async function M(d){T(`play:${d.eid}`),f("");try{await r(d)}catch(k){X(k)}finally{T("")}}async function De(){if(f(""),!je.trim()){f("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}te(!0);try{let d=je.trim();if(/\/episode\//i.test(d)){let k=await Ke(`${xe}/xyz/public/episode?url=${encodeURIComponent(d)}`);ze({pid:k.podcast.pid,title:k.podcast.title,author:k.podcast.author,episodes:[k.episode]})}else{let k=await Ke(`${xe}/xyz/public/podcast?url=${encodeURIComponent(d)}`);ze(k.podcast)}}catch(d){X(d)}finally{te(!1)}}async function it(d){T(`pplay:${d.eid}`),f("");try{await r({...d,public:!0})}catch(k){X(k)}finally{T("")}}return s?s.loggedIn?ce?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{G(null),u([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},ce.title)),C&&ue.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},ue.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},cn(d.pubDate)," \xB7 ",dn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:x===`play:${d.eid}`,onClick:()=>M(d)},x===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!C&&ue.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,b?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:C,onClick:st},C?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:V,onClick:()=>Q(!0)},V?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:x==="logout",onClick:tt},"\u9000\u51FA\u767B\u5F55"))),V?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},de.map(d=>l.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>at(d)},d.cover?l.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},d.title),l.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!V&&de.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?l.default.createElement("p",{className:"xyz-error"},v):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn primary",disabled:x==="app",onClick:Fe},x==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),l.default.createElement("p",{className:"xyz-hint"},$===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":$.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${$.deviceId?`\uFF08\u8BBE\u5907 ${$.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${$.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),l.default.createElement("button",{className:"xyz-link",onClick:()=>Ue(d=>!d)},we?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),we?l.default.createElement(l.default.Fragment,null,l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:qe},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:Z,onChange:d=>ee(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:ye},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Ae,onChange:d=>re(d.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:x==="token",onClick:D},x==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>_(d=>!d)},h?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),h?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:z,onChange:d=>A(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:x==="send"||I>0,onClick:w},I>0?`${I}s \u540E\u91CD\u53D1`:x==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:j,onChange:d=>O(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:x==="login",onClick:oe},x==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:je,onChange:d=>Se(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:Me,onClick:De},Me?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ge?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},ge.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ge.author)),ge.episodes.map(d=>l.default.createElement("div",{key:d.eid,className:`xyz-ep ${i===`xyz${d.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},d.title),l.default.createElement("div",{className:"xyz-ep-meta"},cn(d.pubDate)," \xB7 ",dn(d.duration))),l.default.createElement("button",{className:"btn primary",disabled:x===`pplay:${d.eid}`,onClick:()=>it(d)},x===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?l.default.createElement("p",{className:"xyz-error"},v):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Eo(r){return String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function un(r,i){let s=Eo(i),c=s?`${s}/`:"",v=new Map;for(let f of r){let x=Eo(f?.rel);if(!x||c&&!x.startsWith(c))continue;let z=x.slice(c.length).split("/")[0];if(!z)continue;let A=c?`${c}${z}`:z,j=v.get(A)||{rel:A,name:z,count:0};j.count+=1,v.set(A,j)}return[...v.values()].sort((f,x)=>f.name.localeCompare(x.name,"zh-Hans-CN"))}function mn(r,i){let s=[{rel:"",label:r}],c=Eo(i);if(!c)return s;let v="";for(let f of c.split("/").filter(Boolean))v=v?`${v}/${f}`:f,s.push({rel:v,label:f});return s}function gn(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var N="/podwave/api",nr=[.5,.75,1,1.25,1.5,1.75,2];async function be(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function pe(r,i,s){let c=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!c.ok){let v=await c.json().catch(()=>({}));throw new Error(v.error||c.statusText)}return c.json()}function rr({onSubmit:r,onPick:i,onClose:s}){let[c,v]=(0,t.useState)(""),[f,x]=(0,t.useState)(!1),[T,z]=(0,t.useState)(!1),[A,j]=(0,t.useState)(""),O=(0,t.useRef)(null);return(0,t.useEffect)(()=>{O.current?.focus();let h=_=>{_.key==="Escape"&&s()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!c.trim()||f)){x(!0),j("");try{await r(c.trim()),s()}catch(_){j(_.message),x(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!T){z(!0),j("");try{let h=await i();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),s())}catch(h){j(h.message)}finally{z(!1)}}},disabled:T,autoFocus:!0},T?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:O,value:c,onChange:h=>v(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:f||!c.trim()},f?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),A?t.default.createElement("div",{className:"dialog-error"},A):null))}function ar({config:r,onClose:i,onSave:s}){let[c,v]=(0,t.useState)(r?.provider||"api"),[f,x]=(0,t.useState)(""),[T,z]=(0,t.useState)(!1),[A,j]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:I=>{I.target===I.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async I=>{I.preventDefault(),z(!0),j("");try{await s({provider:c,apiKey:f||void 0})}catch(K){j(K.message),z(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:c,onChange:I=>v(I.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:f,onChange:I=>x(I.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),A?t.default.createElement("div",{className:"dialog-error"},A):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:T},"\u4FDD\u5B58"))))}function Io(){let[r,i]=(0,t.useState)([]),[s,c]=(0,t.useState)([]),[v,f]=(0,t.useState)({}),[x,T]=(0,t.useState)({running:!1}),[z,A]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[j,O]=(0,t.useState)(!1),[I,K]=(0,t.useState)(!1),[h,_]=(0,t.useState)(0),[Z,ee]=(0,t.useState)(0),[Ae,re]=(0,t.useState)(0),[de,se]=(0,t.useState)(!1),[V,Te]=(0,t.useState)(""),[ce,G]=(0,t.useState)([]),[ue,u]=(0,t.useState)("recent"),[b,L]=(0,t.useState)("all"),[C,me]=(0,t.useState)(""),[je,Se]=(0,t.useState)(""),[ge,ze]=(0,t.useState)("all"),[Me,te]=(0,t.useState)(null),[$,J]=(0,t.useState)(null),[we,Ue]=(0,t.useState)(!1),[Q,X]=(0,t.useState)(0),[ie,qe]=(0,t.useState)(0),[w,oe]=(0,t.useState)(!0),[D,ye]=(0,t.useState)(!1),[Fe,tt]=(0,t.useState)(""),[at,st]=(0,t.useState)(""),[M,De]=(0,t.useState)(null),[it,d]=(0,t.useState)([]),[k,Ee]=(0,t.useState)("none"),[lt,Yt]=(0,t.useState)(null),Et=(0,t.useRef)(new Set),[bt,It]=(0,t.useState)(15),[ke,le]=(0,t.useState)(!1),[At,jt]=(0,t.useState)({x:null,y:null}),[Ot,U]=(0,t.useState)({width:null,height:null}),[Lt,Bt]=(0,t.useState)(0),[_t,ot]=(0,t.useState)(""),[wt,pt]=(0,t.useState)(!1),[ae,Zt]=(0,t.useState)(null),[ve,vo]=(0,t.useState)(""),[Je,Ve]=(0,t.useState)({status:"none"}),[Ut,yt]=(0,t.useState)(!1),[kt,Gt]=(0,t.useState)(!1),[Ft,Nt]=(0,t.useState)(!1),[Xe,Ht]=(0,t.useState)(null),[zt,Qt]=(0,t.useState)(!1),[dt,Rt]=(0,t.useState)([]),[a,S]=(0,t.useState)(!1),[E,Oe]=(0,t.useState)([]),[Ne,nt]=(0,t.useState)(null),[ct,Kt]=(0,t.useState)(""),[jo,Oo]=(0,t.useState)([]),fe=(0,t.useRef)(null),ut=(0,t.useRef)(""),Lo=(0,t.useRef)(null),F=(0,t.useRef)(null),He=(0,t.useRef)(0),$t=(0,t.useRef)(z),mt=(0,t.useRef)(0),Bo=(0,t.useRef)(0),Uo=(0,t.useRef)(0),Fo=(0,t.useRef)(0),fn=(0,t.useRef)(!1),fo=(0,t.useRef)(!1);(0,t.useEffect)(()=>{K(!1)},[Me]),(0,t.useEffect)(()=>{$t.current=z},[z]),(0,t.useEffect)(()=>{F.current=$},[$]),(0,t.useEffect)(()=>{He.current=ie},[ie]),(0,t.useEffect)(()=>{let e=!1;return be(`${N}/transcribe/settings`).then(o=>{e||Yt(o||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await be(`${N}/ui-settings`);!e&&o&&(Gt(!!o.sidebarCollapsed),Number.isFinite(Number(o.subtitleSize))&&It(Number(o.subtitleSize)),typeof o.captionOpen=="boolean"&&le(o.captionOpen),jt({x:Number.isFinite(Number(o.captionX))?Number(o.captionX):null,y:Number.isFinite(Number(o.captionY))?Number(o.captionY):null}),U({width:Number.isFinite(Number(o.captionW))&&o.captionW!==null?Number(o.captionW):null,height:Number.isFinite(Number(o.captionH))&&o.captionH!==null?Number(o.captionH):null}))}catch{}})(),()=>{e=!0}},[]);let We=(0,t.useCallback)(e=>{fetch(`${N}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),ho=(0,t.useCallback)(e=>{let o=Math.max(12,Math.min(42,Math.round(Number(e)||15)));It(o),We({subtitleSize:o})},[We]),hn=(0,t.useCallback)((e,o,p)=>{jt({x:e,y:o}),p&&We({captionX:e,captionY:o})},[We]),xn=(0,t.useCallback)((e,o,p)=>{let m={width:e??null,height:o??null};U(m),p&&We({captionW:m.width,captionH:m.height})},[We]),bn=(0,t.useCallback)(()=>{le(e=>{let o=!e;return We({captionOpen:o}),o})},[We]),wn=(0,t.useCallback)(()=>{le(!1),We({captionOpen:!1})},[We]),qt=(0,t.useMemo)(()=>{let e=M?.lines;return e?.length&&e.find(o=>Q>=o.start&&Q<o.end)||null},[M,Q]),yn=qt&&qt.speaker!=null?M?.speakers?.[qt.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${qt.speaker+1}`:"",Ho=(0,t.useCallback)(()=>{Gt(e=>{let o=!e;return fetch(`${N}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),y=(0,t.useCallback)(e=>{st(e),window.clearTimeout(Fo.current),Fo.current=window.setTimeout(()=>st(""),2600)},[]),Ye=(0,t.useCallback)(async()=>{let e=await be(`${N}/episodes`);return i(e.items||[]),c(e.folders||[]),f(e.progress||{}),T(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await be(`${N}/health`).catch(()=>({}));o.mediaBase&&(ut.current=o.mediaBase);let p=await be(`${N}/state`);if(e)return;A(p.settings),c(p.folders||[]);let m=await Ye();if(e)return;let q=p.settings?.lastEpisodeId,W=q?(m.items||[]).find(ht=>ht.id===q):null;if(W){J(W),qe(W.duration||0);let ht=m.progress?.[W.id]?.position||0;mt.current=ht>5?ht:0,X(mt.current);let xt=fe.current;xt&&(xt.src=ut.current?`${ut.current}/episodes/${W.id}/audio`:`${N}/episodes/${W.id}/audio`,xt.load(),xt.playbackRate=p.settings?.rate||1,xt.volume=p.settings?.volume??.9)}oe(!1),fn.current=!0}catch(o){e||(tt(o.message),oe(!1))}})(),()=>{e=!0}},[Ye]),(0,t.useEffect)(()=>{if(!x.running)return;let e=setInterval(()=>{Ye().catch(()=>{})},1500);return()=>clearInterval(e)},[x.running,Ye]),(0,t.useEffect)(()=>{let e=!1;return De(null),ot(""),Bt(0),$?.id?((async()=>{try{let o=await be(`${N}/episodes/${$.id}/transcript`);if(e)return;Ee(o.status),Ht(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?De(o.transcript):o.status==="queued"||o.status==="running"?(Bt(o.elapsedMs||0),o.transcript&&De(o.transcript)):o.status==="error"&&ot(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||ot(o.message)}})(),()=>{e=!0}):(Ee("none"),()=>{e=!0})},[$?.id]),(0,t.useEffect)(()=>{be(`${N}/translate/settings`).then(Zt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=$?.id;return!o||!ve?(Ve({status:"none"}),()=>{e=!0}):((async()=>{try{let p=await be(`${N}/episodes/${o}/translate?target=${ve}`);e||Ve(p)}catch{e||Ve({status:"none"})}})(),()=>{e=!0})},[$?.id,ve]),(0,t.useEffect)(()=>{if(k!=="queued"&&k!=="running")return;let e=!1,o=setInterval(async()=>{let p=F.current?.id;if(p)try{let m=await be(`${N}/episodes/${p}/transcript`);if(e)return;Ee(m.status),Ht(m.status==="queued"||m.status==="running"?m:null),Bt(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?De(m.transcript):m.status==="done"&&m.transcript?(De(m.transcript),pt(!0),y("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&ot(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[k,y]),(0,t.useEffect)(()=>{if(Je.status!=="running"&&Je.status!=="queued")return;let e=!1,o=async m=>{let q=await be(`${N}/episodes/${m}/translate?target=${ve}`);if(!e){Ve(q),q.status==="done"&&y("\u7FFB\u8BD1\u5B8C\u6210");try{let W=await be(`${N}/episodes/${m}/transcript`);!e&&W.transcript&&De(W.transcript)}catch{}}},p=setInterval(()=>{let m=F.current?.id;m&&o(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(p)}},[Je.status,ve,y]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let m=await be(`${N}/jobs`);e||Rt(m.items||[])}catch{}};o();let p=setInterval(o,zt?2500:2e4);return()=>{e=!0,clearInterval(p)}},[zt]);let gt=(0,t.useCallback)((e,o,p,m=!1)=>{if(!e)return;let q=Date.now();!m&&q-Uo.current<4e3||(Uo.current=q,pe(`${N}/progress/${e}`,"PUT",{position:o,duration:p}).catch(()=>{}),f(W=>({...W,[e]:{position:o,duration:p,updatedAt:q}})))},[]),rt=(0,t.useCallback)(e=>{A(o=>({...o,...e})),pe(`${N}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!we||!$||lt?.realtime===!1||lt?.provider==="local"||M&&!M.partial||k==="queued"||k==="running")return;let e=$.id;Et.current.has(e)||(Et.current.add(e),pe(`${N}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(o=>{o?.status==="queued"&&Ee("queued")}).catch(()=>{}))},[we,$,M,k,lt]);let Jt=(0,t.useCallback)(async()=>{if(F.current){ot(""),pt(!0);try{let e=await pe(`${N}/episodes/${F.current.id}/transcribe`,"POST",{});Ee(e.status||"queued")}catch(e){ot(e.message)}}},[]),kn=(0,t.useCallback)(()=>{if(M){pt(e=>!e);return}if(k==="queued"||k==="running"){pt(!0);return}Jt()},[M,k,Jt]),xo=(0,t.useCallback)(async()=>{if(F.current)try{await pe(`${N}/episodes/${F.current.id}/transcribe/cancel`,"POST",{}),y("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){ot(e.message)}},[y]),bo=(0,t.useCallback)(async(e,o)=>{try{if(o==="cancel"){let m=await pe(`${N}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?y("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):y(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else o==="retry"?await pe(`${N}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await pe(`${N}/jobs`,"DELETE",{key:e.key})}catch(m){y(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let p=await be(`${N}/jobs`).catch(()=>({items:[]}));Rt(p.items||[])},[y]),eo=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let p=await pe(`${N}/transcribe/batch`,"POST",{ids:o});y(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),Oe([]),S(!1)}catch(p){y(p.message)}},[y]),Nn=(0,t.useCallback)(e=>{Oe(o=>o.includes(e)?o.filter(p=>p!==e):[...o,e])},[]),_e=(0,t.useCallback)(async(e,o,p)=>{try{let m=await pe(`${N}${e}`,o,p||{});return m?.transcript&&De(m.transcript),m}catch(m){return y(m.message),null}},[y]),Ko=(0,t.useCallback)(e=>{nt(e.id),Kt(e.text),Oo([])},[]),qo=(0,t.useCallback)(async e=>{if(!M)return;await _e(`/episodes/${M.id}/transcript/lines/${e??Ne}`,"PUT",{text:ct})&&(nt(null),y("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[M,Ne,ct,_e,y]),Jo=(0,t.useCallback)(async(e,o)=>{if(!M)return;await _e(`/episodes/${M.id}/transcript/lines/${e??Ne}/split`,"POST",{offset:o})&&(nt(null),y("\u5DF2\u62C6\u6210\u4E24\u884C"))},[M,Ne,_e,y]),Vo=(0,t.useCallback)(async e=>{if(!M)return;await _e(`/episodes/${M.id}/transcript/lines/${e}/merge`,"POST",{})&&y("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[M,_e,y]),Xo=(0,t.useCallback)(async e=>{if(!M)return;let o=await _e(`/episodes/${M.id}/transcript/undo`,"POST",e?{stepId:e}:{});if(!o)return;d(Array.isArray(o.steps)?o.steps:[]);let p=o.action?`\u300C${o.action}\u300D`:"",m=o.remaining>0?`\uFF0C\u8FD8\u80FD\u518D\u64A4\u9500 ${o.remaining} \u6B65`:"";y(p?`\u5DF2\u64A4\u9500${p}\u4E4B\u524D\u7684\u4FEE\u6539${m}`:`\u5DF2\u64A4\u9500${m||"\uFF08\u6CA1\u6709\u66F4\u65E9\u7684\u8BB0\u5F55\u4E86\uFF09"}`)},[M,_e,y]),Wo=(0,t.useCallback)(async()=>{if(!M)return;let e=await _e(`/episodes/${M.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(Ve({status:"none",missing:e.after}),y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):y(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[M,_e,y]),Yo=(0,t.useCallback)(async()=>{if(M)try{let e=await be(`${N}/episodes/${M.id}/transcript/validate`);Oo(e.issues||[]),y(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){y(e.message)}},[M,y]),to=(0,t.useCallback)(async()=>{let e=F.current?.id;if(!e)return;let o=await be(`${N}/episodes/${e}/transcript`);o.transcript&&De(o.transcript)},[]),_o=(0,t.useCallback)(async e=>{if(!e){d([]);return}try{let o=await be(`${N}/episodes/${e}/transcript/undo`);d(Array.isArray(o?.steps)?o.steps:[])}catch{d([])}},[]);(0,t.useEffect)(()=>{_o(M?.id)},[M,_o]);let oo=(0,t.useCallback)(async(e=!1)=>{let o=F.current?.id,p=ve;if(!(!o||!p)&&!(Je.status==="running"||Je.status==="queued")){Ve({status:"running"});try{let m=await pe(`${N}/episodes/${o}/translate`,"POST",{target:p,force:e});Ve(m),m.status==="done"&&(await to(),y(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){Ve(q=>({...q,status:"error",error:m.message}))}}},[ve,Je.status,to,y]),Zo=(0,t.useCallback)(()=>oo(!1),[oo]),Go=(0,t.useCallback)(()=>{let e=ve==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&oo(!0)},[oo,ve]),Qo=(0,t.useCallback)(async e=>{let o=F.current?.id;if(!(!o||!ve||!e?.id))try{await pe(`${N}/episodes/${o}/translate/line`,"POST",{lineId:e.id,target:ve}),await to(),y("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(p){y(p.message||"\u91CD\u7FFB\u5931\u8D25")}},[ve,to,y]),Ro=(0,t.useCallback)(e=>{vo(e||"")},[]),zn=async()=>{if(Y?.eid)try{await fetch(`${N}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${Y.eid}`})})}catch{y("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},$n=e=>{let o=!e.favorite;i(p=>p.map(m=>m.id===e.id?{...m,favorite:o}:m)),pe(`${N}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(p=>y(p.message))},en=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${N}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(p=>!e.includes(p.id))),Oe([]),e.includes(Me)&&te(null),y(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Le=(0,t.useMemo)(()=>{let e=[...r];return ue==="title"?e.sort((o,p)=>o.title.localeCompare(p.title,"zh-Hans-CN")):ue==="duration"?e.sort((o,p)=>(p.duration||0)-(o.duration||0)):e.sort((o,p)=>p.mtime-o.mtime),e},[r,ue]),Ct=C?je:"",tn=(0,t.useMemo)(()=>C?r.filter(e=>e.root===C):[],[r,C]),St=(0,t.useMemo)(()=>C?un(tn,Ct):[],[tn,C,Ct]),Ze=(0,t.useMemo)(()=>{let e=V.trim().toLowerCase();return Le.filter(o=>{if(C&&o.root!==C||C&&(o.rel||"")!==Ct||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let m=v[o.id]?.position||0,q=o.duration||0,W=q?m/q:0;return b==="inprogress"?m>5&&W<.97:b==="finished"?W>=.97:ge==="unheard"?m<=5:ge==="transcribed"?!!o.hasTranscript:ge==="favorites"?!!o.favorite:!0})},[Le,V,b,ge,v,C,Ct]),on=(0,t.useMemo)(()=>dt.filter(e=>e.status==="queued"||e.status==="running"),[dt]),vt=(0,t.useMemo)(()=>Ze.filter(e=>!e.hasTranscript),[Ze]),wo=(0,t.useMemo)(()=>r.filter(e=>{let o=v[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(v[o.id]?.updatedAt||0)-(v[e.id]?.updatedAt||0)).slice(0,4),[r,v]),Cn=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),Sn=Math.round(Cn/3600*10)/10,Mt=(0,t.useMemo)(()=>C?mn(po(C),Ct):[],[C,Ct]),Mn=C?Mt.length>1?Mt[Mt.length-1].label:po(C):b==="inprogress"?"\u7EE7\u7EED\u6536\u542C":b==="finished"?"\u5DF2\u64AD\u5B8C":b==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",Y=Me?r.find(e=>e.id===Me)||($?.id===Me?$:null):null,Pn=w?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":x.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":C?`${Ze.length} \u96C6${St.length?` \xB7 ${St.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${Ze.length} \u96C6 \xB7 \u5171 ${Sn} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,xr=(0,t.useMemo)(()=>$?Le.findIndex(e=>e.id===$.id):-1,[Le,$]),Pt=(0,t.useCallback)(()=>{let e=fe.current;if(e){if(!F.current){let o=Ze[0]||Le[0];o&&ft(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Ze,Le]),ft=(0,t.useCallback)((e,o=!0)=>{let p=fe.current;if(!p||!e)return;if(F.current&&F.current.id===e.id){o&&Pt();return}F.current&&!p.ended&&p.currentTime>1&&gt(F.current.id,p.currentTime,p.duration||He.current,!0),F.current=e,J(e),te(W=>W&&e.id),qe(e.duration||0);let m=v[e.id]?.position||0,q=m>5&&(!e.duration||m<e.duration-10)?m:0;mt.current=q,X(q),e.source==="xyz"?p.src=ut.current?`${ut.current}/xyz/${e.id.slice(3)}/audio`:`${N}/episodes/${e.id}/audio`:p.src=ut.current?`${ut.current}/episodes/${e.id}/audio`:`${N}/episodes/${e.id}/audio`,p.load(),p.playbackRate=$t.current.rate||1,p.volume=$t.current.volume??.9,o&&p.play().catch(()=>{}),rt({lastEpisodeId:e.id})},[v,gt,rt,Pt]),Tn=(0,t.useCallback)(async e=>{let o=e.public?`${N}/xyz/public/play`:`${N}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,p=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),q=await m.json().catch(()=>({}));if(!m.ok)throw new Error(q.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Ye(),ft(q.item,!0)},[Ye,ft]);(0,t.useEffect)(()=>{let e=V.trim();if(e.length<2){G([]);return}let o=window.setTimeout(()=>{be(`${N}/search?q=${encodeURIComponent(e)}`).then(p=>G(Array.isArray(p.items)?p.items:[])).catch(()=>G([]))},250);return()=>window.clearTimeout(o)},[V]);let no=(0,t.useCallback)((e,o=!0)=>{e&&(ft(e,o),te(e.id))},[ft]),Be=(0,t.useCallback)(e=>{let o=fe.current;if(!o||!F.current)return;let p=Number(e);if(!Number.isFinite(p))return;let m=Number(He.current)||0,q=Number.isFinite(o.duration)&&o.duration>0?o.duration:m,W=Math.max(0,q>0?Math.min(p,q):p);try{o.currentTime=W}catch{mt.current=W;return}X(W),gt(F.current.id,W,q||m,!0)},[gt]),Dn=(0,t.useCallback)(e=>{let o=r.find(p=>p.id===e.episodeId);if(o){if(F.current?.id===e.episodeId){Be(e.start),te(o.id);return}mt.current=e.start,no(o,!1)}},[r,no,Be]),nn=(0,t.useCallback)(e=>{let o=Lo.current;if(!o)return null;let p=o.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(e.clientX-p.left)/p.width)):null},[]),ro=(0,t.useCallback)(e=>{let o=nn(e),p=Number.isFinite(He.current)&&He.current>0?He.current:Number.isFinite(fe.current?.duration)?fe.current.duration:0;o==null||!p||Be(o*p)},[nn,Be]),En=(0,t.useCallback)(e=>{e.preventDefault(),fo.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}ro(e)},[ro]),In=(0,t.useCallback)(e=>{fo.current&&ro(e)},[ro]),rn=(0,t.useCallback)(e=>{fo.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),An=(0,t.useCallback)(e=>{let o=fe.current;if(!o)return;let p=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Be((o.currentTime||0)-p)),e.key==="ArrowRight"&&(e.preventDefault(),Be((o.currentTime||0)+p)),e.key==="Home"&&(e.preventDefault(),Be(0)),e.key==="End"&&(e.preventDefault(),Be(Number.isFinite(o.duration)?o.duration:0))},[Be]),Vt=(0,t.useCallback)(e=>{let o=fe.current;if(!o||!F.current)return;let p=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||He.current||0)-1));o.currentTime=p,X(p)},[]),yo=(0,t.useCallback)(e=>{if(!Le.length)return;let p=((F.current?Le.findIndex(m=>m.id===F.current.id):-1)+e+Le.length)%Le.length;ft(Le[p],!0)},[Le,ft]),jn=(0,t.useCallback)(e=>{let o=fe.current;o&&(o.playbackRate=e),rt({rate:e}),O(!1)},[rt]);(0,t.useEffect)(()=>{if(!j)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||O(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[j]),(0,t.useEffect)(()=>{if(!Z)return;let e=()=>{let p=Math.max(0,Math.round((Z-Date.now())/1e3));if(re(p),p<=0){let m=fe.current;m&&!m.paused&&m.pause(),ee(0),_(0),y("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[Z,y]),(0,t.useEffect)(()=>{if(!de)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||se(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[de]);let ko=(0,t.useCallback)(e=>{if(se(!1),e==="off"){ee(0),_(0),re(0);return}if(e==="end"){ee(0),_(-1),re(0),y("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}_(e),ee(Date.now()+e*6e4),y(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[y]),ao=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),p=fe.current;p&&(p.volume=o),rt({volume:o})},[rt]),On=(0,t.useCallback)(()=>{let e=fe.current,o=$t.current.volume>0?0:.9;e&&(e.volume=o),rt({volume:o})},[rt]),Ln=()=>{let e=fe.current;if(!e||!F.current)return;let o=performance.now();o-(Bo.current||0)<400||(Bo.current=o,X(e.currentTime),gt(F.current.id,e.currentTime,e.duration||He.current))},Bn=()=>{let e=fe.current,o=F.current;if(!e||!o)return;let p=Number.isFinite(e.duration)?e.duration:o.duration||0;qe(p);let m=mt.current;mt.current=0,m>0&&m<p-1&&(e.currentTime=m,X(m))},Un=()=>{let e=fe.current;if(F.current&&gt(F.current.id,e?.duration||He.current||0,e?.duration||He.current||0,!0),h===-1){_(0),ee(0),re(0),y("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}yo(1)},Fn=async e=>{await pe(`${N}/folders`,"POST",{path:e}),await Ye(),y("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Hn=async()=>{let e=await fetch(`${N}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Kn=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Ft||Nt(!0))},qn=e=>{e.currentTarget.contains(e.relatedTarget)||Nt(!1)},Jn=async e=>{e.preventDefault(),Nt(!1);let o=e.dataTransfer,p=[...o?.files||[]],m=p.map(ne=>ne.path).filter(ne=>typeof ne=="string"&&ne),q=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(ne=>ne.trim()).filter(ne=>ne.startsWith("file://")).map(ne=>decodeURIComponent(ne.replace(/^file:\/\//,""))),W=[...new Set([...m,...q])];if(W.length){try{let ne=await pe(`${N}/import/paths`,"POST",{paths:W});await Ye(),y(ne.added?`\u5DF2\u6DFB\u52A0 ${ne.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(ne){tt(ne.message)}return}let ht=p.filter(ne=>ne.size>0);if(!ht.length){y("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let xt=`drop-${Date.now()}`,so="",$o=0;for(let ne of ht)try{let an=await fetch(`${N}/import/upload?name=${encodeURIComponent(ne.name)}&batch=${xt}`,{method:"POST",body:ne}),Xn=await an.json();an.ok&&(so=Xn.folder||so,$o+=1)}catch{}if(so)try{await pe(`${N}/folders`,"POST",{path:so})}catch{}await Ye(),y($o?`\u5DF2\u5BFC\u5165 ${$o} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Vn=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await pe(`${N}/folders`,"DELETE",{path:e}),me(o=>o===e?"":o),await Ye(),y("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){tt(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let p=o.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),Pt()):o.key==="ArrowRight"?(o.preventDefault(),Vt(15)):o.key==="ArrowLeft"?(o.preventDefault(),Vt(-15)):o.key==="ArrowUp"?(o.preventDefault(),ao($t.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),ao($t.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Pt,Vt,ao]);let No=e=>{let o=v[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},zo=e=>{let o=v[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${kt?"nav-collapsed":""}`,onDragOver:Kn,onDragLeave:qn,onDrop:Jn},Ft?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,kt?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Ho},t.default.createElement(R,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(R,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Ho},t.default.createElement(R,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",wo.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(No).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,p])=>t.default.createElement("button",{key:e,className:`nav-item ${b===e&&!C?"active":""}`,onClick:()=>{me(""),L(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},p||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>ye(!0)},t.default.createElement(R,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:C===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{L("all"),ze("all"),Te(""),me(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),L("all"),ze("all"),Te(""),me(p=>p===e?"":e))}},t.default.createElement(R,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},po(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),Vn(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Mn),t.default.createElement("p",{className:"subline"},Pn)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${zt?"is-on":""}`,onClick:()=>Qt(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(R,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",on.length?` ${on.length}`:"")),t.default.createElement("button",{className:`tool-btn ${a?"is-on":""}`,onClick:()=>{S(e=>!e),Oe([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(R,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(R,{name:"search",size:16}),t.default.createElement("input",{value:V,onChange:e=>Te(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:ue,onChange:e=>u(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),a?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",E.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>Oe(Ze.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(Qe,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!vt.length&&!E.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement($e,{hint:`${vt.length} \u96C6`,disabled:!vt.length,onSelect:()=>{e(),eo(vt.map(o=>o.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement($e,{hint:`${E.length} \u96C6`,disabled:!E.length,onSelect:()=>{e(),eo(E)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!E.length,onClick:()=>en(E)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{Oe([]),S(!1)}},"\u53D6\u6D88")):null,Fe?t.default.createElement("div",{className:"banner error",onClick:()=>tt("")},Fe," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,Y?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>te(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},Y.artist,Y.album?` \xB7 ${Y.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(Tt,{item:Y,size:288})),t.default.createElement("h2",{className:"episode-title"},Y.title),t.default.createElement("p",{className:"episode-sub"},Y.artist,Y.album?` \xB7 ${Y.album}`:""),t.default.createElement("p",{className:"episode-path",title:Y.file},Y.location||Y.file),t.default.createElement("p",{className:"episode-stats"},Co(Y.duration)," \xB7 ",So(Y.mtime)," \xB7 \u5DF2\u542C ",Math.round(zo(Y)),"%"),Y.shownotes?t.default.createElement("div",{className:`episode-notes ${I?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>K(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",I?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},Y.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:Pt},we&&$?.id===Y.id?"\u6682\u505C":"\u64AD\u653E"),k==="queued"||k==="running"?t.default.createElement("button",{className:"btn ghost",onClick:xo},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:Jt},Y.source==="xyz"?M?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":M?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(Qe,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,Y.source==="xyz"?t.default.createElement($e,{onSelect:()=>{e(),zn()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement($e,{danger:!0,onSelect:()=>{e(),en([Y.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(co,{inline:!0,transcript:M,status:k,progress:Xe?.progress,stage:Xe?.stage,chunks:Xe?.chunks,queued:Xe?.queued,elapsed:Lt,editingId:Ne,draft:ct,onDraftChange:Kt,onEditLine:Ko,onSaveLine:qo,onCancelEdit:()=>nt(null),onSplitLine:Jo,onMergeLine:Vo,onUndo:Xo,undoSteps:it,onValidate:Yo,onResegment:Wo,issues:jo,onCancel:xo,error:_t,position:Q,fontSize:bt,onFontSize:ho,onSeek:Be,onClose:()=>te(null),onStart:Jt,target:ve,job:Je,onChangeTarget:Ro,onTranslate:Zo,onRetranslate:Go,onRetranslateLine:Qo,onOpenSettings:()=>yt(!0)})))):b==="xyz"?t.default.createElement(Do,{onPlay:Tn,currentId:$?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${ge===e?"is-on":""}`,onClick:()=>ze(e)},o))),b==="all"&&!V&&wo.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},wo.map(e=>{let o=zo(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${$?.id===e.id?"is-current":""}`,onClick:()=>no(e,!0)},t.default.createElement(Tt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,V.trim().length>=2&&ce.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ce.length)),ce.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Dn(e)},t.default.createElement("span",{className:"hit-time"},Ie(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,C?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},Mt.map((e,o)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},o>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(R,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${o===Mt.length-1?"is-current":""}`,onClick:()=>Se(e.rel),disabled:o===Mt.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!w&&C&&St.length>0&&!V?t.default.createElement("div",{className:"folder-rows"},St.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>Se(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(R,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A")))):null,w?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Ze.length===0&&!(C&&St.length>0&&!V)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":C?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${St.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>ye(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&C?t.default.createElement("button",{className:"btn",onClick:()=>me("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},Ze.map((e,o)=>{let p=zo(e),m=$?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${No(e)?"is-finished":""} ${a&&E.includes(e.id)?"is-selected":""}`,onClick:()=>a?Nn(e.id):no(e,!0)},t.default.createElement("span",{className:"col-index row-index"},a?E.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(R,{name:"check",size:14})):null:m&&we?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Tt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",So(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Co(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:q=>{q.stopPropagation(),$n(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},No(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(R,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),wt&&$&&!Y?t.default.createElement(co,{transcript:M,status:k,progress:Xe?.progress,stage:Xe?.stage,chunks:Xe?.chunks,queued:Xe?.queued,elapsed:Lt,editingId:Ne,draft:ct,onDraftChange:Kt,onEditLine:Ko,onSaveLine:qo,onCancelEdit:()=>nt(null),onSplitLine:Jo,onMergeLine:Vo,onUndo:Xo,undoSteps:it,onValidate:Yo,onResegment:Wo,issues:jo,onCancel:xo,error:_t,position:Q,fontSize:bt,onFontSize:ho,onSeek:Be,onClose:()=>pt(!1),onStart:Jt,target:ve,job:Je,onChangeTarget:Ro,onTranslate:Zo,onRetranslate:Go,onRetranslateLine:Qo,onOpenSettings:()=>yt(!0)}):null,zt?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>Qt(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},dt.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):dt.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},gn(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>bo(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>bo(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>bo(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!vt.length,onClick:()=>eo(vt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",vt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!E.length,onClick:()=>eo(E)},"\u8F6C\u5199\u5DF2\u9009 ",E.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:Lo,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ie||0),"aria-valuenow":Math.round(Q||0),"aria-valuetext":`${Ie(Q)} / ${Ie(ie)}`,onPointerDown:En,onPointerMove:In,onPointerUp:rn,onPointerCancel:rn,onKeyDown:An},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ie?Math.min(100,Math.max(0,Q/ie*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ie?Math.min(100,Math.max(0,Q/ie*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},$?t.default.createElement("button",{className:"now-open",onClick:()=>te($.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Tt,{item:$,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:$.title},$.title),t.default.createElement("div",{className:"now-artist"},$.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>yo(-1)},t.default.createElement(R,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Vt(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:Pt,disabled:!$&&Ze.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(R,{name:we?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Vt(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>yo(1)},t.default.createElement(R,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement(Qe,{className:`player-subs ${wt||ke?"is-active":""}`,buttonClassName:`subs-btn ${wt||ke?"active":""}`,placement:"up",disabled:!$,title:"\u5B57\u5E55",trigger:t.default.createElement(t.default.Fragment,null,t.default.createElement(R,{name:"wave",size:15}),t.default.createElement("span",null,M?"\u5B57\u5E55":k==="queued"||k==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199"))},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement($e,{checked:wt,hint:M?`${M.lines.length} \u884C`:"\u8FD8\u6CA1\u8F6C\u5199",onSelect:()=>{e(),kn()}},"\u5B57\u5E55\u9762\u677F"),t.default.createElement($e,{checked:ke,hint:"\u6D6E\u5728\u5C4F\u5E55\u4E0A",onSelect:()=>{e(),bn()}},"\u60AC\u6D6E\u5B57\u5E55\u7A97"))),t.default.createElement("span",{className:"time"},Ie(Q)," / ",Ie(ie)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>O(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":j},z.rate,"\xD7"),j?t.default.createElement("span",{className:"rate-menu",role:"menu"},nr.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===z.rate,className:e===z.rate?"is-on":"",onClick:()=>jn(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Z?"active":""}`,onClick:()=>se(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":de},t.default.createElement(R,{name:"moon",size:14}),Z?t.default.createElement("span",{className:"sleep-left"},Ie(Ae)):null),de?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Z&&h!==-1,className:!Z&&h!==-1?"is-on":"",onClick:()=>ko("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":h===e,className:h===e?"is-on":"",onClick:()=>ko(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":h===-1,className:h===-1?"is-on":"",onClick:()=>ko("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:On,title:"\u9759\u97F3"},t.default.createElement(R,{name:z.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:z.volume,onChange:e=>ao(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),D?t.default.createElement(rr,{onClose:()=>ye(!1),onSubmit:Fn,onPick:Hn}):null,Ut?t.default.createElement(ar,{config:ae,onClose:()=>yt(!1),onSave:async e=>{let o=await pe(`${N}/translate/settings`,"PUT",e);Zt(o),yt(!1),y("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,at?t.default.createElement("div",{className:"toast"},at):null,ke?t.default.createElement(To,{line:qt,speakerLabel:yn,target:ve,status:k,fontSize:bt,onFontSize:ho,x:At.x,y:At.y,width:Ot.width,height:Ot.height,onMove:hn,onResize:xn,onClose:wn,onSeek:Be}):null,t.default.createElement("audio",{ref:fe,preload:"metadata",onPlay:()=>Ue(!0),onPause:()=>{Ue(!1);let e=fe.current;F.current&&e&&e.currentTime>0&&!e.ended&&gt(F.current.id,e.currentTime,e.duration||He.current,!0)},onTimeUpdate:Ln,onLoadedMetadata:Bn,onEnded:Un,onError:()=>{Ue(!1),y("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var uo=require("react");function sr(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let c=v=>{let f=v/255;return f<=.03928?f/12.92:((f+.055)/1.055)**2.4};return .2126*c(s[0])+.7152*c(s[1])+.0722*c(s[2])}function ir(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=sr(i);if(s!==null)return s}return null}function vn(){let r=ir();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function mo(){let[r,i]=(0,uo.useState)(vn);return(0,uo.useEffect)(()=>{let s=()=>i(vn());s();let c=new MutationObserver(s);c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&c.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{c.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var n=Ge(require("react"),1);var go="0.11.38";var H="/podwave/api";async function Ce(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function Pe(r,i,s){let c=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await c.json().catch(()=>({}));if(!c.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return v}function lr(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),c=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Re(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function pr(r){if(!r)return"";let i=new Date(r),s=c=>String(c).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function dr(r){let i=r?.projectDir;return i?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function cr(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function ur(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function Ao(){let r=mo(),[i,s]=(0,n.useState)([]),[c,v]=(0,n.useState)(""),[f,x]=(0,n.useState)(0),[T,z]=(0,n.useState)(!1),[A,j]=(0,n.useState)([]),[O,I]=(0,n.useState)(null),[K,h]=(0,n.useState)(""),[_,Z]=(0,n.useState)(!1),[ee,Ae]=(0,n.useState)({asrModel:"",translateModel:""}),[re,de]=(0,n.useState)(null),[se,V]=(0,n.useState)(null),[Te,ce]=(0,n.useState)({showSidebarPanel:!0}),[G,ue]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[u,b]=(0,n.useState)(null),[L,C]=(0,n.useState)(null),[me,je]=(0,n.useState)(null),[Se,ge]=(0,n.useState)(!1),[ze,Me]=(0,n.useState)("auto"),[te,$]=(0,n.useState)(!1),[J,we]=(0,n.useState)(null),[Ue,Q]=(0,n.useState)(!1),[X,ie]=(0,n.useState)(""),[qe,w]=(0,n.useState)(15),[oe,D]=(0,n.useState)(!0),[ye,Fe]=(0,n.useState)("api"),[tt,at]=(0,n.useState)(!0),[st,M]=(0,n.useState)("api"),[De,it]=(0,n.useState)("https://api.deepseek.com"),[d,k]=(0,n.useState)("deepseek-chat"),[Ee,lt]=(0,n.useState)(""),[Yt,Et]=(0,n.useState)(""),[bt,It]=(0,n.useState)(""),[ke,le]=(0,n.useState)(""),[At,jt]=(0,n.useState)(""),[Ot,U]=(0,n.useState)(""),Lt=(0,n.useCallback)(async()=>{try{let[a,S,E,Oe,Ne,nt,ct,Kt]=await Promise.all([Ce(`${H}/history`),Ce(`${H}/models`),Ce(`${H}/translate/settings`),Ce(`${H}/ui-settings`),Ce(`${H}/transcribe/settings`),Ce(`${H}/import/settings`),Ce(`${H}/setup`),Ce(`${H}/update`)]);b(ct),we(Kt),ct?.job?.status==="running"&&$(!0),ue({mode:nt.mode||"copy",orphans:nt.orphans||0,orphanBytes:nt.orphanBytes||0}),ce({showSidebarPanel:Oe?.showSidebarPanel!==!1}),ie((Ne.hotwords||[]).join(" ")),w(Ne.chunkMinutes||15),D(Ne.diarize!==!1),Fe(Ne.provider||"api"),at(Ne.realtime!==!1),s(a.items||[]),v(a.dir||""),x(Number(a.bytes)||0),z(Oe?.historyOpen===!0),j(S.models||[]),I(S.storage||null),h(S.storage?.dir||""),Ae(S.config||{asrModel:"",translateModel:""}),de(S.transcribe||null),Et(S.config?.asrModel||""),It(S.config?.translateModel||""),V(E),M(E.provider||"api"),it(E.apiBase||"https://api.deepseek.com"),k(E.apiModel||"deepseek-chat"),lt(""),U("")}catch(a){U(a.message)}},[]);(0,n.useEffect)(()=>{Lt()},[Lt]),(0,n.useEffect)(()=>{let a=!1;return Ce(`${H}/setup/plan?source=${ze}&mode=${ye==="local"?"local":"basic"}`).then(S=>{a||C(S)}).catch(()=>{}),()=>{a=!0}},[ze,ye,u?.job?.status]),(0,n.useEffect)(()=>{if(!te&&u?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let S=await Ce(`${H}/setup`);b(S),S.job?.status!=="running"&&$(!1)}catch{}},2500);return()=>window.clearInterval(a)},[te,u?.job?.status]);let Bt=async()=>{U(""),$(!0);try{await Pe(`${H}/setup/install`,"POST",{source:ze});let a=await Ce(`${H}/setup`);b(a),ae("\u5F00\u59CB\u5B89\u88C5")}catch(a){$(!1),U(a.message)}},_t=()=>{let a=!T;z(a),Pe(`${H}/ui-settings`,"PUT",{historyOpen:a}).catch(()=>{})},ot=async()=>{try{await Pe(`${H}/history/open`,"POST",{})}catch(a){U(a.message)}},wt=async()=>{U(""),$(!0);try{await Pe(`${H}/setup/install`,"POST",{source:ze,mode:"local"});let a=await Ce(`${H}/setup`);b(a),ae("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){$(!1),U(a.message)}},pt=async()=>{try{await Pe(`${H}/setup/cancel`,"POST",{}),ae("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){U(a.message)}},ae=a=>{jt(a),window.setTimeout(()=>jt(""),2400)},Zt=async()=>{ge(!0);try{let a=await Ce(`${H}/setup/verify`);je(a),ae(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){ae(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{ge(!1)}},ve=async()=>{try{let a=await Ce(`${H}/setup/diagnose`),S=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(S)}catch{let E=document.createElement("textarea");E.value=S,E.style.position="fixed",E.style.opacity="0",document.body.appendChild(E),E.select(),document.execCommand("copy"),E.remove()}ae("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){ae(a.message||"\u590D\u5236\u5931\u8D25")}},vo=async()=>{le("api"),U("");try{let a={provider:st,apiBase:De,apiModel:d};Ee.trim()&&(a.apiKey=Ee.trim());let S=await Pe(`${H}/translate/settings`,"PUT",a);V(S),lt(""),ae("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){U(a.message)}finally{le("")}},Je=async()=>{le("models"),U("");try{let a=await Pe(`${H}/models`,"PUT",{asrModel:Yt,translateModel:bt});Ae(a.config),j(a.models||[]),de(a.transcribe||null),ae("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){U(a.message)}finally{le("")}},Ve=async()=>{try{await Pe(`${H}/models/open`,"POST",{})}catch(a){U(a.message)}},Ut=async(a,S=!0)=>{Z(!0),U("");try{let E=await Pe(`${H}/models/dir`,"POST",{dir:a,move:S});I(E.storage||null),j(E.models||[]),h(E.storage?.dir||"");let Oe=(E.moved||[]).length,Ne=(E.skipped||[]).length;ae(Oe||Ne?`\u5DF2\u8FC1\u79FB ${Oe} \u4E2A\u6A21\u578B${Ne?`\uFF0C${Ne} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(E){U(E.message)}finally{Z(!1)}},yt=async a=>{le(`model:${a}`),U("");try{let S=await Pe(`${H}/models/remove`,"POST",{name:a});I(S||null),j(S.models||[]),ae(`\u5DF2\u5220\u9664 ${a}`)}catch(S){U(S.message)}finally{le("")}},kt=A.length?A:[{name:ee.asrModel||"qwen3-asr-1.7b-8bit",ready:re?.modelReady},{name:ee.translateModel||"hy-mt2-1.8b-4bit",ready:se?.localReady}],Gt=async()=>{Q(!0);try{we(await Ce(`${H}/update?force=1`))}catch{ae("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{Q(!1)}},Ft=kt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),Nt=kt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Xe=async()=>{le("ui"),U("");try{let a=await Pe(`${H}/ui-settings`,"PUT",{showSidebarPanel:Te.showSidebarPanel});ce({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),ae("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){U(a.message)}finally{le("")}},Ht=async a=>{le("import"),U("");try{let S=await Pe(`${H}/import/settings`,"PUT",{mode:a});ue(E=>({...E,mode:S.mode})),ae("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(S){U(S.message)}finally{le("")}},zt=async()=>{if(G.orphans&&window.confirm(`\u6E05\u7406 ${G.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){le("imports"),U("");try{let a=await Pe(`${H}/imports/orphans`,"DELETE",{});ue(S=>({...S,orphans:0,orphanBytes:0})),ae(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){U(a.message)}finally{le("")}}},Qt=async()=>{le("transcribe"),U("");try{let a=X.split(/[\s,，、]+/).map(E=>E.trim()).filter(Boolean).slice(0,500),S=await Pe(`${H}/transcribe/settings`,"PUT",{provider:ye,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(qe)||15)),diarize:oe,realtime:tt});ie((S.hotwords||[]).join(" ")),w(S.chunkMinutes||15),D(S.diarize!==!1),Fe(S.provider||"api"),S.runtime&&de(S.runtime),ae("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){U(a.message)}finally{le("")}},dt=kt,Rt=!!(go&&u?.version&&u.version!==go);return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,lo),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Rt?n.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5230 ",go,"\uFF0C\u4F46\u6B63\u5728\u8FD0\u884C\u7684\u5BBF\u4E3B\u8FD8\u662F ",u.version,"\u3002",n.default.createElement("strong",null,"\u91CD\u542F DSH")," \u4E4B\u540E\u65B0\u529F\u80FD\u624D\u4F1A\u5168\u90E8\u751F\u6548\uFF08\u73B0\u5728\u80FD\u770B\u5230\u7684\u754C\u9762\u662F\u65B0\u7684\uFF0C\u540E\u53F0\u63A5\u53E3\u8FD8\u662F\u65E7\u7684\uFF09\u3002"):null,Ot?n.default.createElement("div",{className:"banner error",onClick:()=>U("")},Ot):null,At?n.default.createElement("div",{className:"settings-message"},At):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),u?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},u.platform?.osLabel," \xB7 ",u.platform?.arch," \xB7 ",u.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",u.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",u.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:ve},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:Se,onClick:Zt},Se?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),me?n.default.createElement("ul",{className:"setup-components"},me.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(u.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},Re(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:ze,onChange:a=>Me(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),L?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Re(L.totalBytes)," \xB7 ",L.items.length," \u9879"),n.default.createElement("ul",null,L.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?Re(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:te||u.job?.status==="running",onClick:Bt},te||u.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),u.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:pt},"\u53D6\u6D88"):null),u.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,u.job.stage||u.job.status),n.default.createElement("span",null,u.job.progress||0,"% \xB7 ",Re(u.job.bytes)," / ",Re(u.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${u.job.progress||0}%`}})),u.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",u.job.error):null,u.job.warning?n.default.createElement("p",{className:"settings-hint setup-warning"},u.job.warning):null,u.job.status==="done"&&(!u.job.summary||!u.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,u.job.status==="done"&&u.job.modelsDir?n.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",u.job.modelsDir):null,Array.isArray(u.job.summary)&&u.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},u.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":Re(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:`settings-card history-card ${T?"is-open":""}`},n.default.createElement("button",{type:"button",className:"card-head",onClick:()=>_t(),"aria-expanded":T,title:T?"\u6536\u8D77":"\u5C55\u5F00"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("span",{className:"card-badge"},"\u5171 ",i.length," \u6761",f?` \xB7 ${Re(f)}`:""),n.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),T?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002\u5B57\u5E55\u548C\u8BD1\u6587\u90FD\u5B58\u5728\u672C\u673A\uFF0C\u5173\u6389\u63D2\u4EF6\u3001\u91CD\u88C5\u63D2\u4EF6\u90FD\u8FD8\u5728\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${lr(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},pr(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ot,disabled:!c},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939"),n.default.createElement("span",{className:"settings-status"},c?`${c}${f?` \xB7 ${Re(f)}`:""}`:""))):null),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),n.default.createElement("select",{value:ye,onChange:a=>Fe(a.target.value)},n.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),ye==="api"?n.default.createElement("p",{className:"settings-status"},re?.api?.hasKey?"\u7528\u4E0B\u9762 DeepSeek API \u91CC\u90A3\u628A key\uFF0C\u5DF2\u7ECF\u5728\u7528\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 DeepSeek key \u2014\u2014 \u53BB\u4E0B\u9762\u300CDeepSeek API\u300D\u5361\u7247\u586B\u4E00\u6B21\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u90FD\u80FD\u7528"):n.default.createElement("p",{className:"settings-status"},re?.installed&&re?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${re.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:X,onChange:a=>ie(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:qe,onChange:a=>w(a.target.value)})),n.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u6574\u6BB5\u8F6C\u5199\u7528 100 \u79D2\u4E00\u5757\uFF0C\u5B9E\u65F6\u8DDF\u64AD\u7528 12 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:tt,onChange:a=>at(a.target.checked)}),n.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF API\uFF0C\u64AD\u653E\u65F6\u6309 12 \u79D2\u5C0F\u5757\u6EDA\u52A8\u8BC6\u522B\uFF0C\u5B57\u5E55/\u8BD1\u6587/\u8BF4\u8BDD\u4EBA\u8DDF\u7740\u64AD\u653E\u8FDB\u5EA6\u51FA\u73B0\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:oe,onChange:a=>D(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Qt,disabled:ke==="transcribe"},ke==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),ye==="local"&&!(re?.installed&&re?.modelReady)?n.default.createElement("button",{className:"settings-btn",onClick:wt,disabled:te},te?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:G.mode==="copy",onChange:()=>Ht("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:G.mode==="reference",onChange:()=>Ht("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:zt,disabled:ke==="imports"||!G.orphans},G.orphans?`\u6E05\u7406 ${G.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(G.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"DeepSeek API\uFF08\u8F6C\u5199\u4E0E\u7FFB\u8BD1\u5171\u7528\uFF09"),n.default.createElement("p",{className:"settings-hint"},"\u8F6C\u5199\u548C\u7FFB\u8BD1\u7528\u540C\u4E00\u628A key\uFF0C\u586B\u4E00\u6B21\u5C31\u591F\u3002\u5B57\u5E55\u7FFB\u8BD1\u4E5F\u53EF\u4EE5\u6539\u7528\u672C\u673A\u6A21\u578B\uFF0C\u90A3\u65F6\u7528\u4E0D\u7740 key\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:st,onChange:a=>M(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:De,onChange:a=>it(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:d,onChange:a=>k(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:Ee,onChange:a=>lt(a.target.value),placeholder:se?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${se.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:vo,disabled:ke==="api"},ke==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},se?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Te.showSidebarPanel,onChange:a=>ce({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Xe,disabled:ke==="ui"},ke==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},dr(O),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),O?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"model-path"},n.default.createElement("code",{className:"model-path-text",title:O.dir},O.dir),n.default.createElement("span",{className:"model-path-size"},ur(O)," \xB7 \u5171 ",Re(O.totalBytes))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),n.default.createElement("input",{value:K,onChange:a=>h(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:_||K.trim()===O.dir,onClick:()=>Ut(K,!0)},_?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),n.default.createElement("button",{className:"settings-btn ghost",onClick:Ve},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),O.projectDir&&O.dir!==O.projectDir?n.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>Ut(O.projectDir,!0)},cr(O)):null,O.custom?n.default.createElement("button",{className:"settings-btn ghost",disabled:_,onClick:()=>Ut("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),A.length?n.default.createElement("ul",{className:"model-list"},A.map(a=>n.default.createElement("li",{key:a.name,className:"model-row"},n.default.createElement("div",{className:"model-main"},n.default.createElement("span",{className:"model-name"},a.name),n.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",Re(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),n.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||ke===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>yt(a.name)},ke===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Yt,onChange:a=>Et(a.target.value)},(Ft.length?Ft:dt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},re?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:bt,onChange:a=>It(a.target.value)},(Nt.length?Nt:dt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},se?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Je,disabled:ke==="models"},ke==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.current?`v${J.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},J?.latest?`v${J.latest}`:J?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},J?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":J?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${J.error}\uFF09\u3002`:J?.latest?J?.current&&J?.latest&&J.current!==J.latest&&J.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Gt,disabled:Ue},Ue?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),J?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(J.checkedAt).toLocaleString()):null))))}function mr({size:r=16}){return et.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},et.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),et.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),et.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),et.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),et.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function gr(){let r=mo();return et.default.createElement("div",{className:"podwave-root","data-pw-theme":r},et.default.createElement("style",null,lo),et.default.createElement(Io,null))}function vr(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},gr)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Ao));let i=null,s="podwave-hide-nav",c=f=>{if(typeof document>"u")return;let x=document.getElementById(s);f&&!x?(x=document.createElement("style"),x.id=s,x.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(x)):!f&&x&&x.remove()},v=f=>{if(c(!f),f&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},mr);else if(!f&&i){let x=i;i=null;try{typeof x?.dispose=="function"?x.dispose():typeof x=="function"?x():typeof x?.dispose>"u"&&typeof x?.unregister=="function"&&x.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(f=>f.ok?f.json():null).then(f=>v(f?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",f=>{v(f?.detail?.showSidebarPanel!==!1)})}var fr=["slots"];

return module.exports}})
