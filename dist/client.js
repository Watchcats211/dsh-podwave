window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var on=Object.create;var It=Object.defineProperty;var nn=Object.getOwnPropertyDescriptor;var rn=Object.getOwnPropertyNames;var an=Object.getPrototypeOf,sn=Object.prototype.hasOwnProperty;var ln=(r,l)=>{for(var s in l)It(r,s,{get:l[s],enumerable:!0})},No=(r,l,s,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let v of rn(l))!sn.call(r,v)&&v!==s&&It(r,v,{get:()=>l[v],enumerable:!(u=nn(l,v))||u.enumerable});return r};var et=(r,l,s)=>(s=r!=null?on(an(r)):{},No(l||!r||!r.__esModule?It(s,"default",{value:r,enumerable:!0}):s,r)),dn=r=>No(It({},"__esModule",{value:!0}),r);var Nn={};ln(Nn,{apply:()=>yn,inject:()=>kn});module.exports=dn(Nn);var Ee=et(require("react"),1);var Et=`
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
.podwave-root .podwave-settings .settings-empty { margin: 4px 0 0; font-size: 13px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-list { list-style: none; margin: 2px 0 0; padding: 0; }
.podwave-root .podwave-settings .history-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 9px 0; border-top: 1px solid color-mix(in srgb, currentColor 8%, transparent); }
.podwave-root .podwave-settings .history-row:first-child { border-top: 0; padding-top: 2px; }
.podwave-root .podwave-settings .history-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .history-title { font-size: 13.5px; color: inherit; }
.podwave-root .podwave-settings .history-meta { font-size: 12.5px; color: color-mix(in srgb, currentColor 55%, transparent); }
.podwave-root .podwave-settings .history-date { font-size: 12.5px; white-space: nowrap; color: color-mix(in srgb, currentColor 45%, transparent); }
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
  background: var(--panel);
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
`;var t=et(require("react"),1);var z=et(require("react"),1);function W({name:r,size:l=18}){let s={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return z.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},z.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return z.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},z.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),z.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return z.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},z.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),z.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return z.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},z.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),z.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return z.default.createElement("svg",{...s},z.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),z.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),z.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),z.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return z.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},z.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),z.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),z.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),z.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),z.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return z.default.createElement("svg",{...s},z.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Qt=et(require("react"),1);function Ie(r){if(!Number.isFinite(r)||r<0)return"0:00";let l=Math.floor(r),s=Math.floor(l/3600),u=Math.floor(l%3600/60),v=l%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${u}:${String(v).padStart(2,"0")}`}function Wt(r){if(!r)return"\u2014";let l=Math.floor(r/3600),s=Math.round(r%3600/60);return l>0?`${l} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Gt(r){if(!r)return"";let l=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function zo(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Yt(r){let l=String(r).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}var cn="/podwave/api";function ct({item:r,size:l=44,className:s=""}){let u={width:l,height:l};return r&&r.hasCover?Qt.default.createElement("img",{className:`cover ${s}`,style:u,src:`${cn}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Qt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},zo(r&&r.title))}var m=et(require("react"),1);var $o="/podwave/api";function Dt({transcript:r,status:l,progress:s,stage:u,chunks:v,queued:g,elapsed:b,error:S,position:I,onSeek:J,onClose:K,onStart:re,onCancel:T,target:O,job:x,onChangeTarget:y,onTranslate:B,onOpenSettings:G,inline:De=!1,editingId:fe=null,draft:ce="",onDraftChange:xe,onEditLine:Y,onSaveLine:de,onCancelEdit:ue,onSplitLine:ae,onMergeLine:se,onUndo:U,onValidate:Z,issues:ie=[]}){let A=(0,m.useRef)(null),te=(0,m.useRef)(null),X=r?.lines?.findIndex(w=>I>=w.start&&I<w.end)??-1;(0,m.useEffect)(()=>{if(X<0||!A.current)return;A.current.querySelector(`[data-seg="${X}"]`)?.scrollIntoView({block:"nearest"})},[X]);let we=l==="queued"||l==="running";return m.default.createElement("section",{className:`transcript-panel ${De?"inline":""}`},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),r?m.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:O,onChange:w=>y(w.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),m.default.createElement("button",{className:"mini-link",onClick:G},"\u8BBE\u7F6E"),r?m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{className:"mini-link",onClick:U,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),m.default.createElement("button",{className:"mini-link",onClick:Z,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),m.default.createElement("a",{className:"mini-link",href:`${$o}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),m.default.createElement("a",{className:"mini-link",href:`${$o}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,De?null:m.default.createElement("button",{className:"transcript-close",onClick:K,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:A},r&&we?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),T?m.default.createElement("button",{className:"seg-tool",onClick:T},"\u53D6\u6D88"):null):null,r&&ie?.length?m.default.createElement("div",{className:"tr-issues"},ie.slice(0,5).map(w=>m.default.createElement("div",{key:w},"\xB7 ",w)),ie.length>5?m.default.createElement("div",null,"\u2026\u5171 ",ie.length," \u6761"):null):null,x?.status==="running"||x?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",x.progress?.total?` ${x.progress.done||0}/${x.progress.total}`:""):null,x?.status==="error"?m.default.createElement("div",{className:"tr-running err"},x.error,"\u5F85\u7FFB ",x.missing??0," \u884C",B?m.default.createElement("button",{className:"seg-tool",onClick:B},"\u91CD\u8BD5"):null):null,x?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",x.translated??0,"/",x.total??0," \u884C\uFF0C\u8FD8\u7F3A ",x.missing??0," \u884C",B?m.default.createElement("button",{className:"seg-tool",onClick:B},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,x?.status==="none"&&O&&r&&(x.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",x.missing," \u884C\u5F85\u7FFB\uFF09",B?m.default.createElement("button",{className:"seg-tool",onClick:B},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((w,Q)=>m.default.createElement("div",{key:w.id,"data-seg":Q,className:`seg-row ${Q===X?"active":""} ${fe===w.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ie(w.start)}`,onClick:()=>J(w.start),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),J(w.start))}},m.default.createElement("span",{className:"seg-time"},Ie(w.start)),fe===w.id?m.default.createElement("span",{className:"seg-edit",onClick:f=>f.stopPropagation()},m.default.createElement("textarea",{ref:te,value:ce,rows:Math.min(4,Math.max(2,Math.ceil((ce.length||1)/40))),onChange:f=>xe(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&de(w.id),f.key==="Escape"&&ue()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>de(w.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>ae(w.id,te.current?.selectionStart??Math.floor(ce.length/2))},"\u62C6\u5206"),m.default.createElement("button",{className:"seg-tool",onClick:ue},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,w.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${w.speaker%5}`},r.speakers?.[w.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${w.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},w.text,w.translations?.[O]?m.default.createElement("span",{className:"seg-trans"},w.translations[O]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:f=>{f.stopPropagation(),Y(w)}},"\u270E"),Q<r.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:f=>{f.stopPropagation(),se(w.id)}},"\u21E3"):null)))):we?m.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),T?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:T},"\u53D6\u6D88\u8F6C\u5199"):null):S?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},S),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:re},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:re},"\u5F00\u59CB\u8F6C\u5199"))))}var i=et(require("react"),1),ee="/podwave/api";async function Ce(r){let l=await fetch(r),s=await l.json().catch(()=>({}));if(!l.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${l.status}\uFF09`);return s}async function ut(r,l){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l||{})}),u=await s.json().catch(()=>({}));if(!s.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return u}function Co(r){let l=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(l/3600),u=Math.floor(l%3600/60);return s?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function So(r){if(!r)return"";let l=new Date(r);return Number.isNaN(l.getTime())?"":`${l.getFullYear()}/${l.getMonth()+1}/${l.getDate()}`}function _t({onPlay:r,currentId:l}){let[s,u]=(0,i.useState)(null),[v,g]=(0,i.useState)(""),[b,S]=(0,i.useState)(""),[I,J]=(0,i.useState)(""),[K,re]=(0,i.useState)(""),[T,O]=(0,i.useState)(0),[x,y]=(0,i.useState)(!1),[B,G]=(0,i.useState)(""),[De,fe]=(0,i.useState)(""),[ce,xe]=(0,i.useState)([]),[Y,de]=(0,i.useState)(!1),[ue,ae]=(0,i.useState)(null),[se,U]=(0,i.useState)([]),[Z,ie]=(0,i.useState)(null),[A,te]=(0,i.useState)(!1),[X,we]=(0,i.useState)(""),[w,Q]=(0,i.useState)(null),[f,Ae]=(0,i.useState)(!1),[he,Se]=(0,i.useState)(null),[me,ye]=(0,i.useState)(!1),V=(0,i.useCallback)(async(p=!1)=>{de(!0);try{let h=await Ce(`${ee}/xyz/subscriptions${p?"?refresh=1":""}`);xe(h.items||[])}catch(h){q(h)}finally{de(!1)}},[]);function q(p){let h=String(p?.message||"");if(h.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||h.includes("\u767B\u5F55\u5DF2\u5931\u6548")){u(ge=>({...ge||{},loggedIn:!1})),xe([]),ae(null),U([]),G(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(Oe(h))}function Oe(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function He(){try{await ut(`${ee}/xyz/open-web`,{})}catch(p){q(p)}}(0,i.useEffect)(()=>{Ce(`${ee}/xyz/status`).then(p=>{u(p),p.loggedIn&&V()}).catch(p=>q(p)),Ce(`${ee}/xyz/local-app`).then(p=>Se(p)).catch(()=>Se({available:!1}))},[V]),(0,i.useEffect)(()=>{if(!T)return;let p=setInterval(()=>O(h=>Math.max(0,h-1)),1e3);return()=>clearInterval(p)},[T]);async function tt(){if(g(""),!/^1\d{10}$/.test(I.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}S("send");try{let p=await ut(`${ee}/xyz/auth/send-code`,{phone:I.trim(),areaCode:"+86"});O(60),p.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){q(p)}finally{S("")}}async function Be(){if(g(""),!I.trim()||!K.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}S("login");try{await ut(`${ee}/xyz/auth/login`,{phone:I.trim(),code:K.trim(),areaCode:"+86"});let p=await Ce(`${ee}/xyz/status`);u(p),await V()}catch(p){q(p)}finally{S("")}}async function Je(){if(g(""),!B.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}S("token");try{await ut(`${ee}/xyz/auth/token`,{refreshToken:B.trim(),deviceId:De.trim()});let p=await Ce(`${ee}/xyz/status`);u(p),G(""),await V()}catch(p){q(p)}finally{S("")}}async function oe(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let p=await navigator.clipboard.readText();if(!p.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");G(p.trim())}catch(p){g(p?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function _(){g(""),S("app");try{await ut(`${ee}/xyz/auth/from-app`,{});let p=await Ce(`${ee}/xyz/status`);u(p),await V(!0)}catch(p){q(p)}finally{Ce(`${ee}/xyz/local-app`).then(p=>Se(p)).catch(()=>{}),S("")}}async function Ve(){S("logout");try{await ut(`${ee}/xyz/auth/logout`,{}),u({loggedIn:!1}),xe([]),ae(null),U([])}catch(p){q(p)}finally{S("")}}async function P(p){ae(p),U([]),ie(null),te(!0),g("");try{let h=await Ce(`${ee}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);U(h.items||[]),ie(h.loadMoreKey||null)}catch(h){q(h)}finally{te(!1)}}async function ve(){if(!(!ue||!Z||A)){te(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:Z}),h=await Ce(`${ee}/xyz/podcast/${encodeURIComponent(ue.pid)}/episodes?${p}`);U(ge=>[...ge,...h.items||[]]),ie(h.loadMoreKey||null)}catch(p){q(p)}finally{te(!1)}}}async function $(p){S(`play:${p.eid}`),g("");try{await r(p)}catch(h){q(h)}finally{S("")}}async function je(){if(g(""),!X.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}Ae(!0);try{let p=X.trim();if(/\/episode\//i.test(p)){let h=await Ce(`${ee}/xyz/public/episode?url=${encodeURIComponent(p)}`);Q({pid:h.podcast.pid,title:h.podcast.title,author:h.podcast.author,episodes:[h.episode]})}else{let h=await Ce(`${ee}/xyz/public/podcast?url=${encodeURIComponent(p)}`);Q(h.podcast)}}catch(p){q(p)}finally{Ae(!1)}}async function ot(p){S(`pplay:${p.eid}`),g("");try{await r({...p,public:!0})}catch(h){q(h)}finally{S("")}}return s?s.loggedIn?ue?i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-head"},i.default.createElement("button",{className:"btn ghost",onClick:()=>{ae(null),U([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),i.default.createElement("div",{className:"xyz-podcast-title"},ue.title)),A&&se.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,i.default.createElement("div",{className:"xyz-eps"},se.map(p=>i.default.createElement("div",{key:p.eid,className:`xyz-ep ${l===`xyz${p.eid}`?"is-current":""}`},i.default.createElement("div",{className:"xyz-ep-main"},i.default.createElement("div",{className:"xyz-ep-title"},p.title),i.default.createElement("div",{className:"xyz-ep-meta"},So(p.pubDate)," \xB7 ",Co(p.duration))),i.default.createElement("button",{className:"btn primary",disabled:b===`play:${p.eid}`,onClick:()=>$(p)},b===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!A&&se.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,Z?i.default.createElement("button",{className:"btn ghost xyz-more",disabled:A,onClick:ve},A?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?i.default.createElement("p",{className:"xyz-error"},v):null):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-head"},i.default.createElement("div",null,i.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),i.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),i.default.createElement("div",{className:"xyz-head-actions"},i.default.createElement("button",{className:"btn ghost",disabled:Y,onClick:()=>V(!0)},Y?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),i.default.createElement("button",{className:"btn ghost",disabled:b==="logout",onClick:Ve},"\u9000\u51FA\u767B\u5F55"))),Y?i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,i.default.createElement("div",{className:"xyz-subs"},ce.map(p=>i.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>P(p)},p.cover?i.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):i.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),i.default.createElement("div",{className:"xyz-sub-text"},i.default.createElement("div",{className:"xyz-sub-title"},p.title),i.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!Y&&ce.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?i.default.createElement("p",{className:"xyz-error"},v):null):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-login"},i.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),i.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),i.default.createElement("div",{className:"xyz-actions"},i.default.createElement("button",{className:"btn primary",disabled:b==="app",onClick:_},b==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),i.default.createElement("p",{className:"xyz-hint"},he===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":he.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${he.deviceId?`\uFF08\u8BBE\u5907 ${he.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${he.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),i.default.createElement("button",{className:"xyz-link",onClick:()=>ye(p=>!p)},me?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),me?i.default.createElement(i.default.Fragment,null,i.default.createElement("ol",{className:"xyz-steps"},i.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),i.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),i.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",i.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",i.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),i.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),i.default.createElement("div",{className:"xyz-actions"},i.default.createElement("button",{className:"btn ghost",onClick:He},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),i.default.createElement("div",{className:"xyz-advanced"},i.default.createElement("label",null,i.default.createElement("span",null,"refresh token \u6216 access token"),i.default.createElement("input",{value:B,onChange:p=>G(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),i.default.createElement("button",{className:"xyz-link",type:"button",onClick:oe},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),i.default.createElement("label",null,i.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),i.default.createElement("input",{value:De,onChange:p=>fe(p.target.value),placeholder:"x-jike-device-id"})),i.default.createElement("button",{className:"btn primary",disabled:b==="token",onClick:Je},b==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),i.default.createElement("button",{className:"xyz-link",onClick:()=>y(p=>!p)},x?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),x?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u624B\u673A\u53F7"),i.default.createElement("input",{value:I,onChange:p=>J(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),i.default.createElement("button",{className:"btn ghost",disabled:b==="send"||T>0,onClick:tt},T>0?`${T}s \u540E\u91CD\u53D1`:b==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),i.default.createElement("input",{value:K,onChange:p=>re(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),i.default.createElement("button",{className:"btn primary",disabled:b==="login",onClick:Be},b==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,i.default.createElement("div",{className:"xyz-public"},i.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),i.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),i.default.createElement("input",{value:X,onChange:p=>we(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),i.default.createElement("button",{className:"btn ghost",disabled:f,onClick:je},f?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),w?i.default.createElement("div",{className:"xyz-eps"},i.default.createElement("div",{className:"xyz-ep-title"},w.title,i.default.createElement("span",{className:"xyz-hint"}," \xB7 ",w.author)),w.episodes.map(p=>i.default.createElement("div",{key:p.eid,className:`xyz-ep ${l===`xyz${p.eid}`?"is-current":""}`},i.default.createElement("div",{className:"xyz-ep-main"},i.default.createElement("div",{className:"xyz-ep-title"},p.title),i.default.createElement("div",{className:"xyz-ep-meta"},So(p.pubDate)," \xB7 ",Co(p.duration))),i.default.createElement("button",{className:"btn primary",disabled:b===`pplay:${p.eid}`,onClick:()=>ot(p)},b===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?i.default.createElement("p",{className:"xyz-error"},v):null)):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Mo(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let l=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${s}`}var k="/podwave/api",un=[.5,.75,1,1.25,1.5,1.75,2];async function le(r){let l=await fetch(r);if(!l.ok){let s=await l.json().catch(()=>({}));throw new Error(s.error||l.statusText)}return l.json()}async function ne(r,l,s){let u=await fetch(r,{method:l,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||u.statusText)}return u.json()}function mn({onSubmit:r,onPick:l,onClose:s}){let[u,v]=(0,t.useState)(""),[g,b]=(0,t.useState)(!1),[S,I]=(0,t.useState)(!1),[J,K]=(0,t.useState)(""),re=(0,t.useRef)(null);return(0,t.useEffect)(()=>{re.current?.focus();let x=y=>{y.key==="Escape"&&s()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:x=>{x.target===x.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async x=>{if(x.preventDefault(),!(!u.trim()||g)){b(!0),K("");try{await r(u.trim()),s()}catch(y){K(y.message),b(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!S){I(!0),K("");try{let x=await l();if(x?.canceled)return;if(x?.error)throw new Error(x.error);x?.path&&(await r(x.path),s())}catch(x){K(x.message)}finally{I(!1)}}},disabled:S,autoFocus:!0},S?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:re,value:u,onChange:x=>v(x.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!u.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),J?t.default.createElement("div",{className:"dialog-error"},J):null))}function vn({config:r,onClose:l,onSave:s}){let[u,v]=(0,t.useState)(r?.provider||"api"),[g,b]=(0,t.useState)(""),[S,I]=(0,t.useState)(!1),[J,K]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:T=>{T.target===T.currentTarget&&l()}},t.default.createElement("form",{className:"dialog",onSubmit:async T=>{T.preventDefault(),I(!0),K("");try{await s({provider:u,apiKey:g||void 0})}catch(O){K(O.message),I(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:u,onChange:T=>v(T.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:g,onChange:T=>b(T.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),J?t.default.createElement("div",{className:"dialog-error"},J):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:S},"\u4FDD\u5B58"))))}function Rt(){let[r,l]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[v,g]=(0,t.useState)({}),[b,S]=(0,t.useState)({running:!1}),[I,J]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[K,re]=(0,t.useState)(!1),[T,O]=(0,t.useState)(!1),[x,y]=(0,t.useState)(0),[B,G]=(0,t.useState)(0),[De,fe]=(0,t.useState)(0),[ce,xe]=(0,t.useState)(!1),[Y,de]=(0,t.useState)(""),[ue,ae]=(0,t.useState)([]),[se,U]=(0,t.useState)("recent"),[Z,ie]=(0,t.useState)("all"),[A,te]=(0,t.useState)(""),[X,we]=(0,t.useState)("all"),[w,Q]=(0,t.useState)(null),[f,Ae]=(0,t.useState)(null),[he,Se]=(0,t.useState)(!1),[me,ye]=(0,t.useState)(0),[V,q]=(0,t.useState)(0),[Oe,He]=(0,t.useState)(!0),[tt,Be]=(0,t.useState)(!1),[Je,oe]=(0,t.useState)(""),[_,Ve]=(0,t.useState)(""),[P,ve]=(0,t.useState)(null),[$,je]=(0,t.useState)("none"),[ot,p]=(0,t.useState)(0),[h,ge]=(0,t.useState)(""),[bt,Ze]=(0,t.useState)(!1),[At,nt]=(0,t.useState)(null),[ke,wt]=(0,t.useState)(""),[Ne,Le]=(0,t.useState)({status:"none"}),[yt,rt]=(0,t.useState)(!1),[kt,vt]=(0,t.useState)(!1),[a,C]=(0,t.useState)(!1),[j,Nt]=(0,t.useState)(null),[Ue,at]=(0,t.useState)(!1),[Xe,zt]=(0,t.useState)([]),[gt,Ot]=(0,t.useState)(!1),[Me,st]=(0,t.useState)([]),[it,ft]=(0,t.useState)(null),[$t,Bt]=(0,t.useState)(""),[to,oo]=(0,t.useState)([]),R=(0,t.useRef)(null),We=(0,t.useRef)(""),no=(0,t.useRef)(null),M=(0,t.useRef)(null),ze=(0,t.useRef)(0),lt=(0,t.useRef)(I),Ge=(0,t.useRef)(0),ro=(0,t.useRef)(0),ao=(0,t.useRef)(0),so=(0,t.useRef)(0),Po=(0,t.useRef)(!1),Ut=(0,t.useRef)(!1);(0,t.useEffect)(()=>{O(!1)},[w]),(0,t.useEffect)(()=>{lt.current=I},[I]),(0,t.useEffect)(()=>{M.current=f},[f]),(0,t.useEffect)(()=>{ze.current=V},[V]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await le(`${k}/ui-settings`);!e&&o&&vt(!!o.sidebarCollapsed)}catch{}})(),()=>{e=!0}},[]);let io=(0,t.useCallback)(()=>{vt(e=>{let o=!e;return fetch(`${k}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),N=(0,t.useCallback)(e=>{Ve(e),window.clearTimeout(so.current),so.current=window.setTimeout(()=>Ve(""),2600)},[]),Te=(0,t.useCallback)(async()=>{let e=await le(`${k}/episodes`);return l(e.items||[]),u(e.folders||[]),g(e.progress||{}),S(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await le(`${k}/health`).catch(()=>({}));o.mediaBase&&(We.current=o.mediaBase);let d=await le(`${k}/state`);if(e)return;J(d.settings),u(d.folders||[]);let c=await Te();if(e)return;let E=d.settings?.lastEpisodeId,D=E?(c.items||[]).find(_e=>_e.id===E):null;if(D){Ae(D),q(D.duration||0);let _e=c.progress?.[D.id]?.position||0;Ge.current=_e>5?_e:0,ye(Ge.current);let Re=R.current;Re&&(Re.src=We.current?`${We.current}/episodes/${D.id}/audio`:`${k}/episodes/${D.id}/audio`,Re.load(),Re.playbackRate=d.settings?.rate||1,Re.volume=d.settings?.volume??.9)}He(!1),Po.current=!0}catch(o){e||(oe(o.message),He(!1))}})(),()=>{e=!0}},[Te]),(0,t.useEffect)(()=>{if(!b.running)return;let e=setInterval(()=>{Te().catch(()=>{})},1500);return()=>clearInterval(e)},[b.running,Te]),(0,t.useEffect)(()=>{let e=!1;return ve(null),ge(""),p(0),f?.id?((async()=>{try{let o=await le(`${k}/episodes/${f.id}/transcript`);if(e)return;je(o.status),Nt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?ve(o.transcript):o.status==="queued"||o.status==="running"?(p(o.elapsedMs||0),o.transcript&&ve(o.transcript)):o.status==="error"&&ge(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||ge(o.message)}})(),()=>{e=!0}):(je("none"),()=>{e=!0})},[f?.id]),(0,t.useEffect)(()=>{le(`${k}/translate/settings`).then(nt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=f?.id;return!o||!ke?(Le({status:"none"}),()=>{e=!0}):((async()=>{try{let d=await le(`${k}/episodes/${o}/translate?target=${ke}`);e||Le(d)}catch{e||Le({status:"none"})}})(),()=>{e=!0})},[f?.id,ke]),(0,t.useEffect)(()=>{if($!=="queued"&&$!=="running")return;let e=!1,o=setInterval(async()=>{let d=M.current?.id;if(d)try{let c=await le(`${k}/episodes/${d}/transcript`);if(e)return;je(c.status),Nt(c.status==="queued"||c.status==="running"?c:null),p(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?ve(c.transcript):c.status==="done"&&c.transcript?(ve(c.transcript),Ze(!0),N("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&ge(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[$,N]),(0,t.useEffect)(()=>{if(Ne.status!=="running"&&Ne.status!=="queued")return;let e=!1,o=async c=>{let E=await le(`${k}/episodes/${c}/translate?target=${ke}`);if(!e){Le(E),E.status==="done"&&N("\u7FFB\u8BD1\u5B8C\u6210");try{let D=await le(`${k}/episodes/${c}/transcript`);!e&&D.transcript&&ve(D.transcript)}catch{}}},d=setInterval(()=>{let c=M.current?.id;c&&o(c).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(d)}},[Ne.status,ke,N]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let c=await le(`${k}/jobs`);e||zt(c.items||[])}catch{}};o();let d=setInterval(o,Ue?2500:2e4);return()=>{e=!0,clearInterval(d)}},[Ue]);let Ye=(0,t.useCallback)((e,o,d,c=!1)=>{if(!e)return;let E=Date.now();!c&&E-ao.current<4e3||(ao.current=E,ne(`${k}/progress/${e}`,"PUT",{position:o,duration:d}).catch(()=>{}),g(D=>({...D,[e]:{position:o,duration:d,updatedAt:E}})))},[]),Fe=(0,t.useCallback)(e=>{J(o=>({...o,...e})),ne(`${k}/settings`,"PATCH",e).catch(()=>{})},[]),xt=(0,t.useCallback)(async()=>{if(M.current){ge(""),Ze(!0);try{let e=await ne(`${k}/episodes/${M.current.id}/transcribe`,"POST",{});je(e.status||"queued")}catch(e){ge(e.message)}}},[]),Io=(0,t.useCallback)(()=>{if(P){Ze(e=>!e);return}if($==="queued"||$==="running"){Ze(!0);return}xt()},[P,$,xt]),Ft=(0,t.useCallback)(async()=>{if(M.current)try{await ne(`${k}/episodes/${M.current.id}/transcribe/cancel`,"POST",{}),N("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){ge(e.message)}},[N]),Kt=(0,t.useCallback)(async(e,o)=>{try{o==="cancel"?await ne(`${k}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await ne(`${k}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await ne(`${k}/jobs`,"DELETE",{key:e.key})}catch{}let d=await le(`${k}/jobs`).catch(()=>({items:[]}));zt(d.items||[])},[]),Ct=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let d=await ne(`${k}/transcribe/batch`,"POST",{ids:o});N(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),st([]),Ot(!1)}catch(d){N(d.message)}},[N]),Eo=(0,t.useCallback)(e=>{st(o=>o.includes(e)?o.filter(d=>d!==e):[...o,e])},[]),Ke=(0,t.useCallback)(async(e,o,d)=>{try{let c=await ne(`${k}${e}`,o,d||{});return c?.transcript&&ve(c.transcript),c}catch(c){return N(c.message),null}},[N]),lo=(0,t.useCallback)(e=>{ft(e.id),Bt(e.text),oo([])},[]),po=(0,t.useCallback)(async e=>{if(!P)return;await Ke(`/episodes/${P.id}/transcript/lines/${e??it}`,"PUT",{text:$t})&&(ft(null),N("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[P,it,$t,Ke,N]),co=(0,t.useCallback)(async(e,o)=>{if(!P)return;await Ke(`/episodes/${P.id}/transcript/lines/${e??it}/split`,"POST",{offset:o})&&(ft(null),N("\u5DF2\u62C6\u6210\u4E24\u884C"))},[P,it,Ke,N]),uo=(0,t.useCallback)(async e=>{if(!P)return;await Ke(`/episodes/${P.id}/transcript/lines/${e}/merge`,"POST",{})&&N("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[P,Ke,N]),mo=(0,t.useCallback)(async()=>{if(!P)return;await Ke(`/episodes/${P.id}/transcript/undo`,"POST",{})&&N("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[P,Ke,N]),vo=(0,t.useCallback)(async()=>{if(P)try{let e=await le(`${k}/episodes/${P.id}/transcript/validate`);oo(e.issues||[]),N(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){N(e.message)}},[P,N]),go=(0,t.useCallback)(async()=>{let e=M.current?.id;if(!e)return;let o=await le(`${k}/episodes/${e}/transcript`);o.transcript&&ve(o.transcript)},[]),fo=(0,t.useCallback)(async()=>{let e=M.current?.id,o=ke;if(!(!e||!o)&&!(Ne.status==="running"||Ne.status==="queued")){Le({status:"running"});try{let d=await ne(`${k}/episodes/${e}/translate`,"POST",{target:o});Le(d),d.status==="done"&&(await go(),N("\u7FFB\u8BD1\u5B8C\u6210"))}catch(d){Le(c=>({...c,status:"error",error:d.message}))}}},[ke,Ne.status,go,N]),xo=(0,t.useCallback)(e=>{wt(e||"")},[]),Do=async()=>{if(L?.eid)try{await fetch(`${k}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${L.eid}`})})}catch{N("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},jo=e=>{let o=!e.favorite;l(d=>d.map(c=>c.id===e.id?{...c,favorite:o}:c)),ne(`${k}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(d=>N(d.message))},ho=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${k}/episodes/${o}`,{method:"DELETE"})}catch{}l(o=>o.filter(d=>!e.includes(d.id))),st([]),e.includes(w)&&Q(null),N(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},be=(0,t.useMemo)(()=>{let e=[...r];return se==="title"?e.sort((o,d)=>o.title.localeCompare(d.title,"zh-Hans-CN")):se==="duration"?e.sort((o,d)=>(d.duration||0)-(o.duration||0)):e.sort((o,d)=>d.mtime-o.mtime),e},[r,se]),Pe=(0,t.useMemo)(()=>{let e=Y.trim().toLowerCase();return be.filter(o=>{if(A&&o.root!==A||e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let c=v[o.id]?.position||0,E=o.duration||0,D=E?c/E:0;return Z==="inprogress"?c>5&&D<.97:Z==="finished"?D>=.97:X==="unheard"?c<=5:X==="transcribed"?!!o.hasTranscript:X==="favorites"?!!o.favorite:!0})},[be,Y,Z,X,v,A]),bo=(0,t.useMemo)(()=>Xe.filter(e=>e.status==="queued"||e.status==="running"),[Xe]),dt=(0,t.useMemo)(()=>Pe.filter(e=>!e.hasTranscript),[Pe]),qt=(0,t.useMemo)(()=>r.filter(e=>{let o=v[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(v[o.id]?.updatedAt||0)-(v[e.id]?.updatedAt||0)).slice(0,4),[r,v]),Lo=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),Ao=Math.round(Lo/3600*10)/10,Oo=A?Yt(A):Z==="inprogress"?"\u7EE7\u7EED\u6536\u542C":Z==="finished"?"\u5DF2\u64AD\u5B8C":Z==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",L=w?r.find(e=>e.id===w)||(f?.id===w?f:null):null,Bo=Oe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":A?`${Pe.length} \u96C6 \xB7 \u53EA\u663E\u793A\u8FD9\u4E2A\u6587\u4EF6\u5939`:`${Pe.length} \u96C6 \xB7 \u5171 ${Ao} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,zn=(0,t.useMemo)(()=>f?be.findIndex(e=>e.id===f.id):-1,[be,f]),pt=(0,t.useCallback)(()=>{let e=R.current;if(e){if(!M.current){let o=Pe[0]||be[0];o&&Qe(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Pe,be]),Qe=(0,t.useCallback)((e,o=!0)=>{let d=R.current;if(!d||!e)return;if(M.current&&M.current.id===e.id){o&&pt();return}M.current&&!d.ended&&d.currentTime>1&&Ye(M.current.id,d.currentTime,d.duration||ze.current,!0),M.current=e,Ae(e),Q(D=>D&&e.id),q(e.duration||0);let c=v[e.id]?.position||0,E=c>5&&(!e.duration||c<e.duration-10)?c:0;Ge.current=E,ye(E),e.source==="xyz"?d.src=We.current?`${We.current}/xyz/${e.id.slice(3)}/audio`:`${k}/episodes/${e.id}/audio`:d.src=We.current?`${We.current}/episodes/${e.id}/audio`:`${k}/episodes/${e.id}/audio`,d.load(),d.playbackRate=lt.current.rate||1,d.volume=lt.current.volume??.9,o&&d.play().catch(()=>{}),Fe({lastEpisodeId:e.id})},[v,Ye,Fe,pt]),Uo=(0,t.useCallback)(async e=>{let o=e.public?`${k}/xyz/public/play`:`${k}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,d=e.public?{pid:e.pid,eid:e.eid}:{},c=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),E=await c.json().catch(()=>({}));if(!c.ok)throw new Error(E.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Te(),Qe(E.item,!0)},[Te,Qe]);(0,t.useEffect)(()=>{let e=Y.trim();if(e.length<2){ae([]);return}let o=window.setTimeout(()=>{le(`${k}/search?q=${encodeURIComponent(e)}`).then(d=>ae(Array.isArray(d.items)?d.items:[])).catch(()=>ae([]))},250);return()=>window.clearTimeout(o)},[Y]);let St=(0,t.useCallback)((e,o=!0)=>{e&&(Qe(e,o),Q(e.id))},[Qe]),$e=(0,t.useCallback)(e=>{let o=R.current;if(!o||!M.current)return;let d=Number(e);if(!Number.isFinite(d))return;let c=Number(ze.current)||0,E=Number.isFinite(o.duration)&&o.duration>0?o.duration:c,D=Math.max(0,E>0?Math.min(d,E):d);try{o.currentTime=D}catch{Ge.current=D;return}ye(D),Ye(M.current.id,D,E||c,!0)},[Ye]),Fo=(0,t.useCallback)(e=>{let o=r.find(d=>d.id===e.episodeId);if(o){if(M.current?.id===e.episodeId){$e(e.start),Q(o.id);return}Ge.current=e.start,St(o,!1)}},[r,St,$e]),wo=(0,t.useCallback)(e=>{let o=no.current;if(!o)return null;let d=o.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(e.clientX-d.left)/d.width)):null},[]),Mt=(0,t.useCallback)(e=>{let o=wo(e),d=Number.isFinite(ze.current)&&ze.current>0?ze.current:Number.isFinite(R.current?.duration)?R.current.duration:0;o==null||!d||$e(o*d)},[wo,$e]),Ko=(0,t.useCallback)(e=>{e.preventDefault(),Ut.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Mt(e)},[Mt]),qo=(0,t.useCallback)(e=>{Ut.current&&Mt(e)},[Mt]),yo=(0,t.useCallback)(e=>{Ut.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),Ho=(0,t.useCallback)(e=>{let o=R.current;if(!o)return;let d=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),$e((o.currentTime||0)-d)),e.key==="ArrowRight"&&(e.preventDefault(),$e((o.currentTime||0)+d)),e.key==="Home"&&(e.preventDefault(),$e(0)),e.key==="End"&&(e.preventDefault(),$e(Number.isFinite(o.duration)?o.duration:0))},[$e]),ht=(0,t.useCallback)(e=>{let o=R.current;if(!o||!M.current)return;let d=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||ze.current||0)-1));o.currentTime=d,ye(d)},[]),Ht=(0,t.useCallback)(e=>{if(!be.length)return;let d=((M.current?be.findIndex(c=>c.id===M.current.id):-1)+e+be.length)%be.length;Qe(be[d],!0)},[be,Qe]),Jo=(0,t.useCallback)(e=>{let o=R.current;o&&(o.playbackRate=e),Fe({rate:e}),re(!1)},[Fe]);(0,t.useEffect)(()=>{if(!K)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||re(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[K]),(0,t.useEffect)(()=>{if(!B)return;let e=()=>{let d=Math.max(0,Math.round((B-Date.now())/1e3));if(fe(d),d<=0){let c=R.current;c&&!c.paused&&c.pause(),G(0),y(0),N("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[B,N]),(0,t.useEffect)(()=>{if(!ce)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||xe(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[ce]);let Jt=(0,t.useCallback)(e=>{if(xe(!1),e==="off"){G(0),y(0),fe(0);return}if(e==="end"){G(0),y(-1),fe(0),N("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}y(e),G(Date.now()+e*6e4),N(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[N]),Tt=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),d=R.current;d&&(d.volume=o),Fe({volume:o})},[Fe]),Vo=(0,t.useCallback)(()=>{let e=R.current,o=lt.current.volume>0?0:.9;e&&(e.volume=o),Fe({volume:o})},[Fe]),Zo=()=>{let e=R.current;if(!e||!M.current)return;let o=performance.now();o-(ro.current||0)<400||(ro.current=o,ye(e.currentTime),Ye(M.current.id,e.currentTime,e.duration||ze.current))},Xo=()=>{let e=R.current,o=M.current;if(!e||!o)return;let d=Number.isFinite(e.duration)?e.duration:o.duration||0;q(d);let c=Ge.current;Ge.current=0,c>0&&c<d-1&&(e.currentTime=c,ye(c))},Wo=()=>{let e=R.current;if(M.current&&Ye(M.current.id,e?.duration||ze.current||0,e?.duration||ze.current||0,!0),x===-1){y(0),G(0),fe(0),N("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}Ht(1)},Go=async e=>{await ne(`${k}/folders`,"POST",{path:e}),await Te(),N("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Yo=async()=>{let e=await fetch(`${k}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Qo=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),a||C(!0))},_o=e=>{e.currentTarget.contains(e.relatedTarget)||C(!1)},Ro=async e=>{e.preventDefault(),C(!1);let o=e.dataTransfer,d=[...o?.files||[]],c=d.map(H=>H.path).filter(H=>typeof H=="string"&&H),E=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(H=>H.trim()).filter(H=>H.startsWith("file://")).map(H=>decodeURIComponent(H.replace(/^file:\/\//,""))),D=[...new Set([...c,...E])];if(D.length){try{let H=await ne(`${k}/import/paths`,"POST",{paths:D});await Te(),N(H.added?`\u5DF2\u6DFB\u52A0 ${H.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(H){oe(H.message)}return}let _e=d.filter(H=>H.size>0);if(!_e.length){N("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let Re=`drop-${Date.now()}`,Pt="",Xt=0;for(let H of _e)try{let ko=await fetch(`${k}/import/upload?name=${encodeURIComponent(H.name)}&batch=${Re}`,{method:"POST",body:H}),tn=await ko.json();ko.ok&&(Pt=tn.folder||Pt,Xt+=1)}catch{}if(Pt)try{await ne(`${k}/folders`,"POST",{path:Pt})}catch{}await Te(),N(Xt?`\u5DF2\u5BFC\u5165 ${Xt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},en=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await ne(`${k}/folders`,"DELETE",{path:e}),te(o=>o===e?"":o),await Te(),N("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){oe(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let d=o.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),pt()):o.key==="ArrowRight"?(o.preventDefault(),ht(15)):o.key==="ArrowLeft"?(o.preventDefault(),ht(-15)):o.key==="ArrowUp"?(o.preventDefault(),Tt(lt.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Tt(lt.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[pt,ht,Tt]);let Vt=e=>{let o=v[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},Zt=e=>{let o=v[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${kt?"nav-collapsed":""}`,onDragOver:Qo,onDragLeave:_o,onDrop:Ro},a?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,kt?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:io},t.default.createElement(W,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(W,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11.19"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:io},t.default.createElement(W,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",qt.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Vt).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,d])=>t.default.createElement("button",{key:e,className:`nav-item ${Z===e&&!A?"active":""}`,onClick:()=>{te(""),ie(e)}},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},d||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Be(!0)},t.default.createElement(W,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:A===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{ie("all"),we("all"),de(""),te(o=>o===e?"":e)},onKeyDown:o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),ie("all"),we("all"),de(""),te(d=>d===e?"":e))}},t.default.createElement(W,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},Yt(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:o=>{o.stopPropagation(),en(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Oo),t.default.createElement("p",{className:"subline"},Bo)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${Ue?"is-on":""}`,onClick:()=>at(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(W,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",bo.length?` ${bo.length}`:"")),t.default.createElement("button",{className:`tool-btn ${gt?"is-on":""}`,onClick:()=>{Ot(e=>!e),st([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(W,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(W,{name:"search",size:16}),t.default.createElement("input",{value:Y,onChange:e=>de(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:se,onChange:e=>U(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),gt?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Me.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>st(Pe.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement("button",{className:"btn ghost",disabled:!dt.length,onClick:()=>Ct(dt.map(e=>e.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",dt.length," \u96C6"),t.default.createElement("button",{className:"btn primary",disabled:!Me.length,onClick:()=>Ct(Me)},"\u8F6C\u5199\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost danger",disabled:!Me.length,onClick:()=>ho(Me)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{st([]),Ot(!1)}},"\u53D6\u6D88")):null,Je?t.default.createElement("div",{className:"banner error",onClick:()=>oe("")},Je," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,L?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>Q(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},L.artist,L.album?` \xB7 ${L.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(ct,{item:L,size:288})),t.default.createElement("h2",{className:"episode-title"},L.title),t.default.createElement("p",{className:"episode-sub"},L.artist,L.album?` \xB7 ${L.album}`:""),t.default.createElement("p",{className:"episode-path",title:L.file},L.location||L.file),t.default.createElement("p",{className:"episode-stats"},Wt(L.duration)," \xB7 ",Gt(L.mtime)," \xB7 \u5DF2\u542C ",Math.round(Zt(L)),"%"),L.shownotes?t.default.createElement("div",{className:`episode-notes ${T?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>O(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",T?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},L.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:pt},he&&f?.id===L.id?"\u6682\u505C":"\u64AD\u653E"),$==="queued"||$==="running"?t.default.createElement("button",{className:"btn ghost",onClick:Ft},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:xt},L.source==="xyz"?P?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":P?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),L.source==="xyz"?t.default.createElement("button",{className:"btn ghost",onClick:Do},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement("button",{className:"btn ghost danger",onClick:()=>ho([L.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(Dt,{inline:!0,transcript:P,status:$,progress:j?.progress,stage:j?.stage,chunks:j?.chunks,queued:j?.queued,elapsed:ot,editingId:it,draft:$t,onDraftChange:Bt,onEditLine:lo,onSaveLine:po,onCancelEdit:()=>ft(null),onSplitLine:co,onMergeLine:uo,onUndo:mo,onValidate:vo,issues:to,onCancel:Ft,error:h,position:me,onSeek:$e,onClose:()=>Q(null),onStart:xt,target:ke,job:Ne,onChangeTarget:xo,onTranslate:fo,onOpenSettings:()=>rt(!0)})))):Z==="xyz"?t.default.createElement(_t,{onPlay:Uo,currentId:f?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${X===e?"is-on":""}`,onClick:()=>we(e)},o))),Z==="all"&&!Y&&qt.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},qt.map(e=>{let o=Zt(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${f?.id===e.id?"is-current":""}`,onClick:()=>St(e,!0)},t.default.createElement(ct,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,Y.trim().length>=2&&ue.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ue.length)),ue.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Fo(e)},t.default.createElement("span",{className:"hit-time"},Ie(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),Oe?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Pe.length===0?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":A?"\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5185\u5BB9\u3002\u70B9\u300C\u5168\u90E8\u5355\u96C6\u300D\u770B\u5176\u5B83\u6587\u4EF6\u5939\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Be(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&A?t.default.createElement("button",{className:"btn",onClick:()=>te("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},Pe.map((e,o)=>{let d=Zt(e),c=f?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${c?"is-current":""} ${Vt(e)?"is-finished":""} ${gt&&Me.includes(e.id)?"is-selected":""}`,onClick:()=>gt?Eo(e.id):St(e,!0)},t.default.createElement("span",{className:"col-index row-index"},gt?Me.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(W,{name:"check",size:14})):null:c&&he?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(ct,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Gt(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Wt(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:E=>{E.stopPropagation(),jo(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},Vt(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(W,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),bt&&f&&!L?t.default.createElement(Dt,{transcript:P,status:$,progress:j?.progress,stage:j?.stage,chunks:j?.chunks,queued:j?.queued,elapsed:ot,editingId:it,draft:$t,onDraftChange:Bt,onEditLine:lo,onSaveLine:po,onCancelEdit:()=>ft(null),onSplitLine:co,onMergeLine:uo,onUndo:mo,onValidate:vo,issues:to,onCancel:Ft,error:h,position:me,onSeek:$e,onClose:()=>Ze(!1),onStart:xt,target:ke,job:Ne,onChangeTarget:xo,onTranslate:fo,onOpenSettings:()=>rt(!0)}):null,Ue?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>at(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Xe.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Xe.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Mo(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},e.status==="queued"||e.status==="running"?t.default.createElement("button",{className:"mini-link",onClick:()=>Kt(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Kt(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Kt(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!dt.length,onClick:()=>Ct(dt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",dt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Me.length,onClick:()=>Ct(Me)},"\u8F6C\u5199\u5DF2\u9009 ",Me.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:no,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(V||0),"aria-valuenow":Math.round(me||0),"aria-valuetext":`${Ie(me)} / ${Ie(V)}`,onPointerDown:Ko,onPointerMove:qo,onPointerUp:yo,onPointerCancel:yo,onKeyDown:Ho},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${V?Math.min(100,Math.max(0,me/V*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${V?Math.min(100,Math.max(0,me/V*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},f?t.default.createElement("button",{className:"now-open",onClick:()=>Q(f.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(ct,{item:f,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:f.title},f.title),t.default.createElement("div",{className:"now-artist"},f.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Ht(-1)},t.default.createElement(W,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>ht(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:pt,disabled:!f&&Pe.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(W,{name:he?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>ht(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Ht(1)},t.default.createElement(W,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement("button",{className:`subs-btn ${bt?"active":""}`,onClick:Io,disabled:!f,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},t.default.createElement(W,{name:"wave",size:15}),t.default.createElement("span",null,P?"\u5B57\u5E55":$==="queued"||$==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),t.default.createElement("span",{className:"time"},Ie(me)," / ",Ie(V)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>re(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":K},I.rate,"\xD7"),K?t.default.createElement("span",{className:"rate-menu",role:"menu"},un.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===I.rate,className:e===I.rate?"is-on":"",onClick:()=>Jo(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${B?"active":""}`,onClick:()=>xe(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":ce},t.default.createElement(W,{name:"moon",size:14}),B?t.default.createElement("span",{className:"sleep-left"},Ie(De)):null),ce?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!B&&x!==-1,className:!B&&x!==-1?"is-on":"",onClick:()=>Jt("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":x===e,className:x===e?"is-on":"",onClick:()=>Jt(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":x===-1,className:x===-1?"is-on":"",onClick:()=>Jt("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Vo,title:"\u9759\u97F3"},t.default.createElement(W,{name:I.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:I.volume,onChange:e=>Tt(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),tt?t.default.createElement(mn,{onClose:()=>Be(!1),onSubmit:Go,onPick:Yo}):null,yt?t.default.createElement(vn,{config:At,onClose:()=>rt(!1),onSave:async e=>{let o=await ne(`${k}/translate/settings`,"PUT",e);nt(o),rt(!1),N("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,_?t.default.createElement("div",{className:"toast"},_):null,t.default.createElement("audio",{ref:R,preload:"metadata",onPlay:()=>Se(!0),onPause:()=>{Se(!1);let e=R.current;M.current&&e&&e.currentTime>0&&!e.ended&&Ye(M.current.id,e.currentTime,e.duration||ze.current,!0)},onTimeUpdate:Zo,onLoadedMetadata:Xo,onEnded:Wo,onError:()=>{Se(!1),N("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var jt=require("react");function gn(r){let l=String(r||"").match(/rgba?\(([^)]+)\)/);if(!l)return null;let s=l[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let u=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*u(s[0])+.7152*u(s[1])+.0722*u(s[2])}function fn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let l=getComputedStyle(r).backgroundColor,s=gn(l);if(s!==null)return s}return null}function To(){let r=fn();if(r!==null)return r>.5?"light":"dark";let l=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(l)?"light":"dark"}function Lt(){let[r,l]=(0,jt.useState)(To);return(0,jt.useEffect)(()=>{let s=()=>l(To());s();let u=new MutationObserver(s);u.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&u.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{u.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var n=et(require("react"),1);var F="/podwave/api";async function pe(r){let l=await fetch(r),s=await l.json().catch(()=>({}));if(!l.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return s}async function qe(r,l,s){let u=await fetch(r,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await u.json().catch(()=>({}));if(!u.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return v}function xn(r){let l=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(l/3600),u=Math.floor(l%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function mt(r){let l=Number(r)||0;return l?l<1024**2?`${Math.round(l/1024)} KB`:l<1024**3?`${(l/1024**2).toFixed(1)} MB`:`${(l/1024**3).toFixed(1)} GB`:"0 B"}function hn(r){if(!r)return"";let l=new Date(r),s=u=>String(u).padStart(2,"0");return`${l.getFullYear()}-${s(l.getMonth()+1)}-${s(l.getDate())} ${s(l.getHours())}:${s(l.getMinutes())}`}function eo(){let r=Lt(),[l,s]=(0,n.useState)([]),[u,v]=(0,n.useState)([]),[g,b]=(0,n.useState)({asrModel:"",translateModel:""}),[S,I]=(0,n.useState)(null),[J,K]=(0,n.useState)(null),[re,T]=(0,n.useState)({showSidebarPanel:!0}),[O,x]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[y,B]=(0,n.useState)(null),[G,De]=(0,n.useState)(null),[fe,ce]=(0,n.useState)(null),[xe,Y]=(0,n.useState)(!1),[de,ue]=(0,n.useState)("auto"),[ae,se]=(0,n.useState)(!1),[U,Z]=(0,n.useState)(null),[ie,A]=(0,n.useState)(!1),[te,X]=(0,n.useState)(""),[we,w]=(0,n.useState)(15),[Q,f]=(0,n.useState)(!0),[Ae,he]=(0,n.useState)("api"),[Se,me]=(0,n.useState)("https://api.deepseek.com"),[ye,V]=(0,n.useState)("deepseek-chat"),[q,Oe]=(0,n.useState)(""),[He,tt]=(0,n.useState)(""),[Be,Je]=(0,n.useState)(""),[oe,_]=(0,n.useState)(""),[Ve,P]=(0,n.useState)(""),[ve,$]=(0,n.useState)(""),je=(0,n.useCallback)(async()=>{try{let[a,C,j,Nt,Ue,at,Xe,zt]=await Promise.all([pe(`${F}/history`),pe(`${F}/models`),pe(`${F}/translate/settings`),pe(`${F}/ui-settings`),pe(`${F}/transcribe/settings`),pe(`${F}/import/settings`),pe(`${F}/setup`),pe(`${F}/update`)]);B(Xe),Z(zt),Xe?.job?.status==="running"&&se(!0),x({mode:at.mode||"copy",orphans:at.orphans||0,orphanBytes:at.orphanBytes||0}),T({showSidebarPanel:Nt?.showSidebarPanel!==!1}),X((Ue.hotwords||[]).join(" ")),w(Ue.chunkMinutes||15),f(Ue.diarize!==!1),s(a.items||[]),v(C.models||[]),b(C.config||{asrModel:"",translateModel:""}),I(C.transcribe||null),tt(C.config?.asrModel||""),Je(C.config?.translateModel||""),K(j),he(j.provider||"api"),me(j.apiBase||"https://api.deepseek.com"),V(j.apiModel||"deepseek-chat"),Oe(""),$("")}catch(a){$(a.message)}},[]);(0,n.useEffect)(()=>{je()},[je]),(0,n.useEffect)(()=>{let a=!1;return pe(`${F}/setup/plan?source=${de}`).then(C=>{a||De(C)}).catch(()=>{}),()=>{a=!0}},[de,y?.job?.status]),(0,n.useEffect)(()=>{if(!ae&&y?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let C=await pe(`${F}/setup`);B(C),C.job?.status!=="running"&&se(!1)}catch{}},2500);return()=>window.clearInterval(a)},[ae,y?.job?.status]);let ot=async()=>{$(""),se(!0);try{await qe(`${F}/setup/install`,"POST",{source:de});let a=await pe(`${F}/setup`);B(a),h("\u5F00\u59CB\u5B89\u88C5")}catch(a){se(!1),$(a.message)}},p=async()=>{try{await qe(`${F}/setup/cancel`,"POST",{}),h("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){$(a.message)}},h=a=>{P(a),window.setTimeout(()=>P(""),2400)},ge=async()=>{Y(!0);try{let a=await pe(`${F}/setup/verify`);ce(a),h(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){h(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{Y(!1)}},bt=async()=>{try{let a=await pe(`${F}/setup/diagnose`),C=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(C)}catch{let j=document.createElement("textarea");j.value=C,j.style.position="fixed",j.style.opacity="0",document.body.appendChild(j),j.select(),document.execCommand("copy"),j.remove()}h("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){h(a.message||"\u590D\u5236\u5931\u8D25")}},Ze=async()=>{_("api"),$("");try{let a={provider:Ae,apiBase:Se,apiModel:ye};q.trim()&&(a.apiKey=q.trim());let C=await qe(`${F}/translate/settings`,"PUT",a);K(C),Oe(""),h("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{_("")}},At=async()=>{_("models"),$("");try{let a=await qe(`${F}/models`,"PUT",{asrModel:He,translateModel:Be});b(a.config),v(a.models||[]),I(a.transcribe||null),h("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{_("")}},nt=u.length?u:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:S?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:J?.localReady}],ke=async()=>{A(!0);try{Z(await pe(`${F}/update?force=1`))}catch{h("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{A(!1)}},wt=nt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),Ne=nt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Le=async()=>{_("ui"),$("");try{let a=await qe(`${F}/ui-settings`,"PUT",{showSidebarPanel:re.showSidebarPanel});T({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),h("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{_("")}},yt=async a=>{_("import"),$("");try{let C=await qe(`${F}/import/settings`,"PUT",{mode:a});x(j=>({...j,mode:C.mode})),h("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(C){$(C.message)}finally{_("")}},rt=async()=>{if(O.orphans&&window.confirm(`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){_("imports"),$("");try{let a=await qe(`${F}/imports/orphans`,"DELETE",{});x(C=>({...C,orphans:0,orphanBytes:0})),h(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){$(a.message)}finally{_("")}}},kt=async()=>{_("transcribe"),$("");try{let a=te.split(/[\s,，、]+/).map(j=>j.trim()).filter(Boolean).slice(0,500),C=await qe(`${F}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(we)||15)),diarize:Q});X((C.hotwords||[]).join(" ")),w(C.chunkMinutes||15),f(C.diarize!==!1),h("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{_("")}},vt=nt;return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Et),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),ve?n.default.createElement("div",{className:"banner error",onClick:()=>$("")},ve):null,Ve?n.default.createElement("div",{className:"settings-message"},Ve):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),y?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},y.platform?.osLabel," \xB7 ",y.platform?.arch," \xB7 ",y.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",y.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",y.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:bt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:xe,onClick:ge},xe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),fe?n.default.createElement("ul",{className:"setup-components"},fe.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(y.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},mt(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:de,onChange:a=>ue(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),G?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",mt(G.totalBytes)," \xB7 ",G.items.length," \u9879"),n.default.createElement("ul",null,G.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?mt(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:ae||y.job?.status==="running",onClick:ot},ae||y.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),y.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:p},"\u53D6\u6D88"):null),y.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,y.job.stage||y.job.status),n.default.createElement("span",null,y.job.progress||0,"% \xB7 ",mt(y.job.bytes)," / ",mt(y.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${y.job.progress||0}%`}})),y.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",y.job.error):null,y.job.status==="done"&&(!y.job.summary||!y.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(y.job.summary)&&y.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},y.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",mt(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",l.length," \u6761\u3002"),l.length?n.default.createElement("ul",{className:"history-list"},l.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${xn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},hn(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:te,onChange:a=>X(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:we,onChange:a=>w(a.target.value)})),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Q,onChange:a=>f(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:kt,disabled:oe==="transcribe"},oe==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="copy",onChange:()=>yt("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:O.mode==="reference",onChange:()=>yt("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:rt,disabled:oe==="imports"||!O.orphans},O.orphans?`\u6E05\u7406 ${O.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(O.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:Ae,onChange:a=>he(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:Se,onChange:a=>me(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:ye,onChange:a=>V(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:q,onChange:a=>Oe(a.target.value),placeholder:J?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${J.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ze,disabled:oe==="api"},oe==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},J?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:re.showSidebarPanel,onChange:a=>T({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Le,disabled:oe==="ui"},oe==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:He,onChange:a=>tt(a.target.value)},(wt.length?wt:vt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},S?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Be,onChange:a=>Je(a.target.value)},(Ne.length?Ne:vt).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},J?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:At,disabled:oe==="models"},oe==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},U?.current?`v${U.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},U?.latest?`v${U.latest}`:U?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},U?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":U?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${U.error}\uFF09\u3002`:U?.latest?"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ke,disabled:ie},ie?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),U?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(U.checkedAt).toLocaleString()):null))))}function bn({size:r=16}){return Ee.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Ee.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Ee.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ee.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Ee.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ee.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function wn(){let r=Lt();return Ee.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Ee.default.createElement("style",null,Et),Ee.default.createElement(Rt,null))}function yn(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},wn)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},eo));let l=null,s="podwave-hide-nav",u=g=>{if(typeof document>"u")return;let b=document.getElementById(s);g&&!b?(b=document.createElement("style"),b.id=s,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!g&&b&&b.remove()},v=g=>{if(u(!g),g&&!l)l=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},bn);else if(!g&&l){let b=l;l=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var kn=["slots"];

return module.exports}})
