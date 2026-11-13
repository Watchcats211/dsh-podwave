window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var en=Object.create;var Pt=Object.defineProperty;var tn=Object.getOwnPropertyDescriptor;var on=Object.getOwnPropertyNames;var nn=Object.getPrototypeOf,rn=Object.prototype.hasOwnProperty;var an=(r,i)=>{for(var s in i)Pt(r,s,{get:i[s],enumerable:!0})},wo=(r,i,s,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let g of on(i))!rn.call(r,g)&&g!==s&&Pt(r,g,{get:()=>i[g],enumerable:!(u=tn(i,g))||u.enumerable});return r};var Re=(r,i,s)=>(s=r!=null?en(nn(r)):{},wo(i||!r||!r.__esModule?Pt(s,"default",{value:r,enumerable:!0}):s,r)),sn=r=>wo(Pt({},"__esModule",{value:!0}),r);var yn={};an(yn,{apply:()=>bn,inject:()=>wn});module.exports=sn(yn);var Se=Re(require("react"),1);var It=`
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
}

.podwave-root .folder-list li:hover { background: var(--hover); color: var(--text); }

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
`;var t=Re(require("react"),1);var N=Re(require("react"),1);function X({name:r,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),N.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),N.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),N.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return N.default.createElement("svg",{...s},N.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),N.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),N.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),N.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return N.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},N.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),N.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),N.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),N.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),N.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return N.default.createElement("svg",{...s},N.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Wt=Re(require("react"),1);function Ce(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),s=Math.floor(i/3600),u=Math.floor(i%3600/60),g=i%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function Zt(r){if(!r)return"\u2014";let i=Math.floor(r/3600),s=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Xt(r){if(!r)return"";let i=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function yo(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function ko(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var dn="/podwave/api";function dt({item:r,size:i=44,className:s=""}){let u={width:i,height:i};return r&&r.hasCover?Wt.default.createElement("img",{className:`cover ${s}`,style:u,src:`${dn}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Wt.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},yo(r&&r.title))}var m=Re(require("react"),1);var No="/podwave/api";function Et({transcript:r,status:i,progress:s,stage:u,chunks:g,queued:x,elapsed:w,error:T,position:P,onSeek:H,onClose:U,onStart:ee,onCancel:S,target:j,job:f,onChangeTarget:b,onTranslate:L,onOpenSettings:Y,inline:Me=!1,editingId:ue=null,draft:le="",onDraftChange:me,onEditLine:W,onSaveLine:ve,onCancelEdit:de,onSplitLine:te,onMergeLine:oe,onUndo:A,onValidate:J,issues:pe=[]}){let V=(0,m.useRef)(null),ge=(0,m.useRef)(null),Z=r?.lines?.findIndex(v=>P>=v.start&&P<v.end)??-1;(0,m.useEffect)(()=>{if(Z<0||!V.current)return;V.current.querySelector(`[data-seg="${Z}"]`)?.scrollIntoView({block:"nearest"})},[Z]);let ne=i==="queued"||i==="running";return m.default.createElement("section",{className:`transcript-panel ${Me?"inline":""}`},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),r?m.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:j,onChange:v=>b(v.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),m.default.createElement("button",{className:"mini-link",onClick:Y},"\u8BBE\u7F6E"),r?m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{className:"mini-link",onClick:A,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),m.default.createElement("button",{className:"mini-link",onClick:J,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),m.default.createElement("a",{className:"mini-link",href:`${No}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),m.default.createElement("a",{className:"mini-link",href:`${No}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Me?null:m.default.createElement("button",{className:"transcript-close",onClick:U,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:V},r&&ne?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),S?m.default.createElement("button",{className:"seg-tool",onClick:S},"\u53D6\u6D88"):null):null,r&&pe?.length?m.default.createElement("div",{className:"tr-issues"},pe.slice(0,5).map(v=>m.default.createElement("div",{key:v},"\xB7 ",v)),pe.length>5?m.default.createElement("div",null,"\u2026\u5171 ",pe.length," \u6761"):null):null,f?.status==="running"||f?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",f.progress?.total?` ${f.progress.done||0}/${f.progress.total}`:""):null,f?.status==="error"?m.default.createElement("div",{className:"tr-running err"},f.error,"\u5F85\u7FFB ",f.missing??0," \u884C",L?m.default.createElement("button",{className:"seg-tool",onClick:L},"\u91CD\u8BD5"):null):null,f?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",f.translated??0,"/",f.total??0," \u884C\uFF0C\u8FD8\u7F3A ",f.missing??0," \u884C",L?m.default.createElement("button",{className:"seg-tool",onClick:L},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,f?.status==="none"&&j&&r&&(f.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",f.missing," \u884C\u5F85\u7FFB\uFF09",L?m.default.createElement("button",{className:"seg-tool",onClick:L},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((v,fe)=>m.default.createElement("div",{key:v.id,"data-seg":fe,className:`seg-row ${fe===Z?"active":""} ${ue===v.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ce(v.start)}`,onClick:()=>H(v.start),onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),H(v.start))}},m.default.createElement("span",{className:"seg-time"},Ce(v.start)),ue===v.id?m.default.createElement("span",{className:"seg-edit",onClick:M=>M.stopPropagation()},m.default.createElement("textarea",{ref:ge,value:le,rows:Math.min(4,Math.max(2,Math.ceil((le.length||1)/40))),onChange:M=>me(M.target.value),onKeyDown:M=>{M.key==="Enter"&&(M.metaKey||M.ctrlKey)&&ve(v.id),M.key==="Escape"&&de()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>ve(v.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>te(v.id,ge.current?.selectionStart??Math.floor(le.length/2))},"\u62C6\u5206"),m.default.createElement("button",{className:"seg-tool",onClick:de},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,v.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${v.speaker%5}`},r.speakers?.[v.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${v.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},v.text,v.translations?.[j]?m.default.createElement("span",{className:"seg-trans"},v.translations[j]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:M=>{M.stopPropagation(),W(v)}},"\u270E"),fe<r.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:M=>{M.stopPropagation(),oe(v.id)}},"\u21E3"):null)))):ne?m.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((w||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),S?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:S},"\u53D6\u6D88\u8F6C\u5199"):null):T?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},T),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:ee},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:ee},"\u5F00\u59CB\u8F6C\u5199"))))}var l=Re(require("react"),1),ce="/podwave/api";async function Ke(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return s}async function xt(r,i){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),u=await s.json().catch(()=>({}));if(!s.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return u}function zo(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function $o(r){if(!r)return"";let i=new Date(r);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function Gt({onPlay:r,currentId:i}){let[s,u]=(0,l.useState)(null),[g,x]=(0,l.useState)(""),[w,T]=(0,l.useState)(""),[P,H]=(0,l.useState)(""),[U,ee]=(0,l.useState)(""),[S,j]=(0,l.useState)(0),[f,b]=(0,l.useState)(!1),[L,Y]=(0,l.useState)(""),[Me,ue]=(0,l.useState)(""),[le,me]=(0,l.useState)([]),[W,ve]=(0,l.useState)(!1),[de,te]=(0,l.useState)(null),[oe,A]=(0,l.useState)([]),[J,pe]=(0,l.useState)(null),[V,ge]=(0,l.useState)(!1),[Z,ne]=(0,l.useState)(""),[v,fe]=(0,l.useState)(null),[M,Te]=(0,l.useState)(!1),Q=(0,l.useCallback)(async(p=!1)=>{ve(!0);try{let h=await Ke(`${ce}/xyz/subscriptions${p?"?refresh=1":""}`);me(h.items||[])}catch(h){O(h)}finally{ve(!1)}},[]);function O(p){let h=String(p?.message||"");if(h.includes("\u767B\u5F55\u5DF2\u5931\u6548")){u(he=>({...he||{},loggedIn:!1})),me([]),te(null),A([]),Y(""),x("\u767B\u5F55\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u7C98\u8D34 refresh token \u6216 access token\u3002");return}x(ae(h))}function ae(p){return p?p.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6539\u7528 refresh token \u767B\u5F55\u3002":p:"\u767B\u5F55\u5931\u8D25"}async function De(){try{await xt(`${ce}/xyz/open-web`,{})}catch(p){O(p)}}(0,l.useEffect)(()=>{Ke(`${ce}/xyz/status`).then(p=>{u(p),p.loggedIn&&Q()}).catch(p=>O(p))},[Q]),(0,l.useEffect)(()=>{if(!S)return;let p=setInterval(()=>j(h=>Math.max(0,h-1)),1e3);return()=>clearInterval(p)},[S]);async function Fe(){if(x(""),!/^1\d{10}$/.test(P.trim())){x("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}T("send");try{let p=await xt(`${ce}/xyz/auth/send-code`,{phone:P.trim(),areaCode:"+86"});j(60),p.devCode&&x(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${p.devCode}`)}catch(p){O(p)}finally{T("")}}async function je(){if(x(""),!P.trim()||!U.trim()){x("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}T("login");try{await xt(`${ce}/xyz/auth/login`,{phone:P.trim(),code:U.trim(),areaCode:"+86"});let p=await Ke(`${ce}/xyz/status`);u(p),await Q()}catch(p){O(p)}finally{T("")}}async function He(){if(x(""),!L.trim()){x("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}T("token");try{await xt(`${ce}/xyz/auth/token`,{refreshToken:L.trim(),deviceId:Me.trim()});let p=await Ke(`${ce}/xyz/status`);u(p),Y(""),await Q()}catch(p){O(p)}finally{T("")}}async function Le(){T("logout");try{await xt(`${ce}/xyz/auth/logout`,{}),u({loggedIn:!1}),me([]),te(null),A([])}catch(p){O(p)}finally{T("")}}async function Je(p){te(p),A([]),pe(null),ge(!0),x("");try{let h=await Ke(`${ce}/xyz/podcast/${encodeURIComponent(p.pid)}/episodes?limit=30`);A(h.items||[]),pe(h.loadMoreKey||null)}catch(h){O(h)}finally{ge(!1)}}async function Pe(){if(!(!de||!J||V)){ge(!0);try{let p=new URLSearchParams({limit:"30",loadMoreKey:J}),h=await Ke(`${ce}/xyz/podcast/${encodeURIComponent(de.pid)}/episodes?${p}`);A(he=>[...he,...h.items||[]]),pe(h.loadMoreKey||null)}catch(p){O(p)}finally{ge(!1)}}}async function Ve(p){T(`play:${p.eid}`),x("");try{await r(p)}catch(h){O(h)}finally{T("")}}async function se(){if(x(""),!Z.trim()){x("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}Te(!0);try{let p=Z.trim();if(/\/episode\//i.test(p)){let h=await Ke(`${ce}/xyz/public/episode?url=${encodeURIComponent(p)}`);fe({pid:h.podcast.pid,title:h.podcast.title,author:h.podcast.author,episodes:[h.episode]})}else{let h=await Ke(`${ce}/xyz/public/podcast?url=${encodeURIComponent(p)}`);fe(h.podcast)}}catch(p){O(p)}finally{Te(!1)}}async function z(p){T(`pplay:${p.eid}`),x("");try{await r({...p,public:!0})}catch(h){O(h)}finally{T("")}}return s?s.loggedIn?de?l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("button",{className:"btn ghost",onClick:()=>{te(null),A([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),l.default.createElement("div",{className:"xyz-podcast-title"},de.title)),V&&oe.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,l.default.createElement("div",{className:"xyz-eps"},oe.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},$o(p.pubDate)," \xB7 ",zo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:w===`play:${p.eid}`,onClick:()=>Ve(p)},w===`play:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!V&&oe.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,J?l.default.createElement("button",{className:"btn ghost xyz-more",disabled:V,onClick:Pe},V?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),g?l.default.createElement("p",{className:"xyz-error"},g):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-head"},l.default.createElement("div",null,l.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),l.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),l.default.createElement("div",{className:"xyz-head-actions"},l.default.createElement("button",{className:"btn ghost",disabled:W,onClick:()=>Q(!0)},W?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),l.default.createElement("button",{className:"btn ghost",disabled:w==="logout",onClick:Le},"\u9000\u51FA\u767B\u5F55"))),W?l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,l.default.createElement("div",{className:"xyz-subs"},le.map(p=>l.default.createElement("button",{key:p.pid,className:"xyz-sub-card",onClick:()=>Je(p)},p.cover?l.default.createElement("img",{className:"xyz-cover",src:p.cover,alt:"",loading:"lazy"}):l.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),l.default.createElement("div",{className:"xyz-sub-text"},l.default.createElement("div",{className:"xyz-sub-title"},p.title),l.default.createElement("div",{className:"xyz-sub-meta"},p.author||""))))),!W&&le.length===0?l.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,g?l.default.createElement("p",{className:"xyz-error"},g):null):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("div",{className:"xyz-login"},l.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),l.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u7528\u4F60\u8D26\u53F7\u7684 refresh token \u8BFB\u53D6\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),l.default.createElement("ol",{className:"xyz-steps"},l.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u7528\u624B\u673A App \u626B\u7801\u767B\u5F55\u3002"),l.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),l.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",l.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",l.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),l.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),l.default.createElement("div",{className:"xyz-actions"},l.default.createElement("button",{className:"btn ghost",onClick:De},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),l.default.createElement("div",{className:"xyz-advanced"},l.default.createElement("label",null,l.default.createElement("span",null,"refresh token \u6216 access token"),l.default.createElement("input",{value:L,onChange:p=>Y(p.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),l.default.createElement("button",{className:"xyz-link",type:"button",onClick:pasteToken},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),l.default.createElement("label",null,l.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),l.default.createElement("input",{value:Me,onChange:p=>ue(p.target.value),placeholder:"x-jike-device-id"})),l.default.createElement("button",{className:"btn primary",disabled:w==="token",onClick:He},w==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),l.default.createElement("button",{className:"xyz-link",onClick:()=>b(p=>!p)},f?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),f?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u624B\u673A\u53F7"),l.default.createElement("input",{value:P,onChange:p=>H(p.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),l.default.createElement("button",{className:"btn ghost",disabled:w==="send"||S>0,onClick:Fe},S>0?`${S}s \u540E\u91CD\u53D1`:w==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),l.default.createElement("input",{value:U,onChange:p=>ee(p.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),l.default.createElement("button",{className:"btn primary",disabled:w==="login",onClick:je},w==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null,l.default.createElement("div",{className:"xyz-public"},l.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),l.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),l.default.createElement("div",{className:"xyz-fields"},l.default.createElement("label",null,l.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),l.default.createElement("input",{value:Z,onChange:p=>ne(p.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),l.default.createElement("button",{className:"btn ghost",disabled:M,onClick:se},M?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),v?l.default.createElement("div",{className:"xyz-eps"},l.default.createElement("div",{className:"xyz-ep-title"},v.title,l.default.createElement("span",{className:"xyz-hint"}," \xB7 ",v.author)),v.episodes.map(p=>l.default.createElement("div",{key:p.eid,className:`xyz-ep ${i===`xyz${p.eid}`?"is-current":""}`},l.default.createElement("div",{className:"xyz-ep-main"},l.default.createElement("div",{className:"xyz-ep-title"},p.title),l.default.createElement("div",{className:"xyz-ep-meta"},$o(p.pubDate)," \xB7 ",zo(p.duration))),l.default.createElement("button",{className:"btn primary",disabled:w===`pplay:${p.eid}`,onClick:()=>z(p)},w===`pplay:${p.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),g?l.default.createElement("p",{className:"xyz-error"},g):null)):l.default.createElement("div",{className:"xyz-panel"},l.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Co(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let i=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var y="/podwave/api",pn=[.5,.75,1,1.25,1.5,1.75,2];async function re(r){let i=await fetch(r);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function R(r,i,s){let u=await fetch(r,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}function cn({onSubmit:r,onPick:i,onClose:s}){let[u,g]=(0,t.useState)(""),[x,w]=(0,t.useState)(!1),[T,P]=(0,t.useState)(!1),[H,U]=(0,t.useState)(""),ee=(0,t.useRef)(null);return(0,t.useEffect)(()=>{ee.current?.focus();let f=b=>{b.key==="Escape"&&s()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:f=>{f.target===f.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async f=>{if(f.preventDefault(),!(!u.trim()||x)){w(!0),U("");try{await r(u.trim()),s()}catch(b){U(b.message),w(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!T){P(!0),U("");try{let f=await i();if(f?.canceled)return;if(f?.error)throw new Error(f.error);f?.path&&(await r(f.path),s())}catch(f){U(f.message)}finally{P(!1)}}},disabled:T,autoFocus:!0},T?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:ee,value:u,onChange:f=>g(f.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:x||!u.trim()},x?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),H?t.default.createElement("div",{className:"dialog-error"},H):null))}function un({config:r,onClose:i,onSave:s}){let[u,g]=(0,t.useState)(r?.provider||"api"),[x,w]=(0,t.useState)(""),[T,P]=(0,t.useState)(!1),[H,U]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:S=>{S.target===S.currentTarget&&i()}},t.default.createElement("form",{className:"dialog",onSubmit:async S=>{S.preventDefault(),P(!0),U("");try{await s({provider:u,apiKey:x||void 0})}catch(j){U(j.message),P(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:u,onChange:S=>g(S.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:x,onChange:S=>w(S.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),H?t.default.createElement("div",{className:"dialog-error"},H):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:T},"\u4FDD\u5B58"))))}function Yt(){let[r,i]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[g,x]=(0,t.useState)({}),[w,T]=(0,t.useState)({running:!1}),[P,H]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[U,ee]=(0,t.useState)(!1),[S,j]=(0,t.useState)(!1),[f,b]=(0,t.useState)(0),[L,Y]=(0,t.useState)(0),[Me,ue]=(0,t.useState)(0),[le,me]=(0,t.useState)(!1),[W,ve]=(0,t.useState)(""),[de,te]=(0,t.useState)([]),[oe,A]=(0,t.useState)("recent"),[J,pe]=(0,t.useState)("all"),[V,ge]=(0,t.useState)("all"),[Z,ne]=(0,t.useState)(null),[v,fe]=(0,t.useState)(null),[M,Te]=(0,t.useState)(!1),[Q,O]=(0,t.useState)(0),[ae,De]=(0,t.useState)(0),[Fe,je]=(0,t.useState)(!0),[He,Le]=(0,t.useState)(!1),[Je,Pe]=(0,t.useState)(""),[Ve,se]=(0,t.useState)(""),[z,p]=(0,t.useState)(null),[h,he]=(0,t.useState)("none"),[K,et]=(0,t.useState)(0),[ht,Ie]=(0,t.useState)(""),[_,Ze]=(0,t.useState)(!1),[Lt,bt]=(0,t.useState)(null),[be,ct]=(0,t.useState)(""),[ke,Ne]=(0,t.useState)({status:"none"}),[wt,tt]=(0,t.useState)(!1),[ut,yt]=(0,t.useState)(!1),[kt,ot]=(0,t.useState)(!1),[a,$]=(0,t.useState)(null),[q,Nt]=(0,t.useState)(!1),[Ae,nt]=(0,t.useState)([]),[Oe,mt]=(0,t.useState)(!1),[ze,rt]=(0,t.useState)([]),[at,vt]=(0,t.useState)(null),[zt,At]=(0,t.useState)(""),[_t,Rt]=(0,t.useState)([]),G=(0,t.useRef)(null),Xe=(0,t.useRef)(""),eo=(0,t.useRef)(null),C=(0,t.useRef)(null),we=(0,t.useRef)(0),st=(0,t.useRef)(P),We=(0,t.useRef)(0),to=(0,t.useRef)(0),oo=(0,t.useRef)(0),no=(0,t.useRef)(0),Mo=(0,t.useRef)(!1),Ot=(0,t.useRef)(!1);(0,t.useEffect)(()=>{j(!1)},[Z]),(0,t.useEffect)(()=>{st.current=P},[P]),(0,t.useEffect)(()=>{C.current=v},[v]),(0,t.useEffect)(()=>{we.current=ae},[ae]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await re(`${y}/ui-settings`);!e&&o&&yt(!!o.sidebarCollapsed)}catch{}})(),()=>{e=!0}},[]);let ro=(0,t.useCallback)(()=>{yt(e=>{let o=!e;return fetch(`${y}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),k=(0,t.useCallback)(e=>{se(e),window.clearTimeout(no.current),no.current=window.setTimeout(()=>se(""),2600)},[]),$e=(0,t.useCallback)(async()=>{let e=await re(`${y}/episodes`);return i(e.items||[]),u(e.folders||[]),x(e.progress||{}),T(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let o=await re(`${y}/health`).catch(()=>({}));o.mediaBase&&(Xe.current=o.mediaBase);let d=await re(`${y}/state`);if(e)return;H(d.settings),u(d.folders||[]);let c=await $e();if(e)return;let I=d.settings?.lastEpisodeId,E=I?(c.items||[]).find(Qe=>Qe.id===I):null;if(E){fe(E),De(E.duration||0);let Qe=c.progress?.[E.id]?.position||0;We.current=Qe>5?Qe:0,O(We.current);let _e=G.current;_e&&(_e.src=Xe.current?`${Xe.current}/episodes/${E.id}/audio`:`${y}/episodes/${E.id}/audio`,_e.load(),_e.playbackRate=d.settings?.rate||1,_e.volume=d.settings?.volume??.9)}je(!1),Mo.current=!0}catch(o){e||(Pe(o.message),je(!1))}})(),()=>{e=!0}},[$e]),(0,t.useEffect)(()=>{if(!w.running)return;let e=setInterval(()=>{$e().catch(()=>{})},1500);return()=>clearInterval(e)},[w.running,$e]),(0,t.useEffect)(()=>{let e=!1;return p(null),Ie(""),et(0),v?.id?((async()=>{try{let o=await re(`${y}/episodes/${v.id}/transcript`);if(e)return;he(o.status),$(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?p(o.transcript):o.status==="queued"||o.status==="running"?(et(o.elapsedMs||0),o.transcript&&p(o.transcript)):o.status==="error"&&Ie(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){e||Ie(o.message)}})(),()=>{e=!0}):(he("none"),()=>{e=!0})},[v?.id]),(0,t.useEffect)(()=>{re(`${y}/translate/settings`).then(bt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,o=v?.id;return!o||!be?(Ne({status:"none"}),()=>{e=!0}):((async()=>{try{let d=await re(`${y}/episodes/${o}/translate?target=${be}`);e||Ne(d)}catch{e||Ne({status:"none"})}})(),()=>{e=!0})},[v?.id,be]),(0,t.useEffect)(()=>{if(h!=="queued"&&h!=="running")return;let e=!1,o=setInterval(async()=>{let d=C.current?.id;if(d)try{let c=await re(`${y}/episodes/${d}/transcript`);if(e)return;he(c.status),$(c.status==="queued"||c.status==="running"?c:null),et(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?p(c.transcript):c.status==="done"&&c.transcript?(p(c.transcript),Ze(!0),k("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&Ie(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(o)}},[h,k]),(0,t.useEffect)(()=>{if(ke.status!=="running"&&ke.status!=="queued")return;let e=!1,o=async c=>{let I=await re(`${y}/episodes/${c}/translate?target=${be}`);if(!e){Ne(I),I.status==="done"&&k("\u7FFB\u8BD1\u5B8C\u6210");try{let E=await re(`${y}/episodes/${c}/transcript`);!e&&E.transcript&&p(E.transcript)}catch{}}},d=setInterval(()=>{let c=C.current?.id;c&&o(c).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(d)}},[ke.status,be,k]),(0,t.useEffect)(()=>{let e=!1,o=async()=>{try{let c=await re(`${y}/jobs`);e||nt(c.items||[])}catch{}};o();let d=setInterval(o,q?2500:2e4);return()=>{e=!0,clearInterval(d)}},[q]);let Ge=(0,t.useCallback)((e,o,d,c=!1)=>{if(!e)return;let I=Date.now();!c&&I-oo.current<4e3||(oo.current=I,R(`${y}/progress/${e}`,"PUT",{position:o,duration:d}).catch(()=>{}),x(E=>({...E,[e]:{position:o,duration:d,updatedAt:I}})))},[]),Be=(0,t.useCallback)(e=>{H(o=>({...o,...e})),R(`${y}/settings`,"PATCH",e).catch(()=>{})},[]),gt=(0,t.useCallback)(async()=>{if(C.current){Ie(""),Ze(!0);try{let e=await R(`${y}/episodes/${C.current.id}/transcribe`,"POST",{});he(e.status||"queued")}catch(e){Ie(e.message)}}},[]),To=(0,t.useCallback)(()=>{if(z){Ze(e=>!e);return}if(h==="queued"||h==="running"){Ze(!0);return}gt()},[z,h,gt]),Bt=(0,t.useCallback)(async()=>{if(C.current)try{await R(`${y}/episodes/${C.current.id}/transcribe/cancel`,"POST",{}),k("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){Ie(e.message)}},[k]),Ut=(0,t.useCallback)(async(e,o)=>{try{o==="cancel"?await R(`${y}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await R(`${y}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await R(`${y}/jobs`,"DELETE",{key:e.key})}catch{}let d=await re(`${y}/jobs`).catch(()=>({items:[]}));nt(d.items||[])},[]),$t=(0,t.useCallback)(async e=>{let o=[...new Set(e)];if(o.length)try{let d=await R(`${y}/transcribe/batch`,"POST",{ids:o});k(`\u5DF2\u6392\u961F ${d.queued} \u96C6${d.skipped?`\uFF0C\u8DF3\u8FC7 ${d.skipped} \u96C6`:""}${d.errors?.length?`\uFF0C\u5931\u8D25 ${d.errors.length} \u96C6`:""}`),rt([]),mt(!1)}catch(d){k(d.message)}},[k]),Po=(0,t.useCallback)(e=>{rt(o=>o.includes(e)?o.filter(d=>d!==e):[...o,e])},[]),Ue=(0,t.useCallback)(async(e,o,d)=>{try{let c=await R(`${y}${e}`,o,d||{});return c?.transcript&&p(c.transcript),c}catch(c){return k(c.message),null}},[k]),ao=(0,t.useCallback)(e=>{vt(e.id),At(e.text),Rt([])},[]),so=(0,t.useCallback)(async e=>{if(!z)return;await Ue(`/episodes/${z.id}/transcript/lines/${e??at}`,"PUT",{text:zt})&&(vt(null),k("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[z,at,zt,Ue,k]),io=(0,t.useCallback)(async(e,o)=>{if(!z)return;await Ue(`/episodes/${z.id}/transcript/lines/${e??at}/split`,"POST",{offset:o})&&(vt(null),k("\u5DF2\u62C6\u6210\u4E24\u884C"))},[z,at,Ue,k]),lo=(0,t.useCallback)(async e=>{if(!z)return;await Ue(`/episodes/${z.id}/transcript/lines/${e}/merge`,"POST",{})&&k("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[z,Ue,k]),po=(0,t.useCallback)(async()=>{if(!z)return;await Ue(`/episodes/${z.id}/transcript/undo`,"POST",{})&&k("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[z,Ue,k]),co=(0,t.useCallback)(async()=>{if(z)try{let e=await re(`${y}/episodes/${z.id}/transcript/validate`);Rt(e.issues||[]),k(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){k(e.message)}},[z,k]),uo=(0,t.useCallback)(async()=>{let e=C.current?.id;if(!e)return;let o=await re(`${y}/episodes/${e}/transcript`);o.transcript&&p(o.transcript)},[]),mo=(0,t.useCallback)(async()=>{let e=C.current?.id,o=be;if(!(!e||!o)&&!(ke.status==="running"||ke.status==="queued")){Ne({status:"running"});try{let d=await R(`${y}/episodes/${e}/translate`,"POST",{target:o});Ne(d),d.status==="done"&&(await uo(),k("\u7FFB\u8BD1\u5B8C\u6210"))}catch(d){Ne(c=>({...c,status:"error",error:d.message}))}}},[be,ke.status,uo,k]),vo=(0,t.useCallback)(e=>{ct(e||"")},[]),Io=async()=>{if(D?.eid)try{await fetch(`${y}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${D.eid}`})})}catch{k("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},Eo=e=>{let o=!e.favorite;i(d=>d.map(c=>c.id===e.id?{...c,favorite:o}:c)),R(`${y}/episodes/${e.id}/favorite`,"PUT",{favorite:o}).catch(d=>k(d.message))},go=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of e)try{await fetch(`${y}/episodes/${o}`,{method:"DELETE"})}catch{}i(o=>o.filter(d=>!e.includes(d.id))),rt([]),e.includes(Z)&&ne(null),k(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},xe=(0,t.useMemo)(()=>{let e=[...r];return oe==="title"?e.sort((o,d)=>o.title.localeCompare(d.title,"zh-Hans-CN")):oe==="duration"?e.sort((o,d)=>(d.duration||0)-(o.duration||0)):e.sort((o,d)=>d.mtime-o.mtime),e},[r,oe]),Ee=(0,t.useMemo)(()=>{let e=W.trim().toLowerCase();return xe.filter(o=>{if(e&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(e))return!1;let c=g[o.id]?.position||0,I=o.duration||0,E=I?c/I:0;return J==="inprogress"?c>5&&E<.97:J==="finished"?E>=.97:V==="unheard"?c<=5:V==="transcribed"?!!o.hasTranscript:V==="favorites"?!!o.favorite:!0})},[xe,W,J,V,g]),fo=(0,t.useMemo)(()=>Ae.filter(e=>e.status==="queued"||e.status==="running"),[Ae]),it=(0,t.useMemo)(()=>Ee.filter(e=>!e.hasTranscript),[Ee]),Kt=(0,t.useMemo)(()=>r.filter(e=>{let o=g[e.id];return!o||!o.position||o.position<5?!1:e.duration?o.position/e.duration<.97:!0}).sort((e,o)=>(g[o.id]?.updatedAt||0)-(g[e.id]?.updatedAt||0)).slice(0,4),[r,g]),Do=(0,t.useMemo)(()=>r.reduce((e,o)=>e+(o.duration||0),0),[r]),jo=Math.round(Do/3600*10)/10,Lo=J==="inprogress"?"\u7EE7\u7EED\u6536\u542C":J==="finished"?"\u5DF2\u64AD\u5B8C":J==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",D=Z?r.find(e=>e.id===Z)||(v?.id===Z?v:null):null,Ao=Fe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":w.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${Ee.length} \u96C6 \xB7 \u5171 ${jo} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,kn=(0,t.useMemo)(()=>v?xe.findIndex(e=>e.id===v.id):-1,[xe,v]),lt=(0,t.useCallback)(()=>{let e=G.current;if(e){if(!C.current){let o=Ee[0]||xe[0];o&&Ye(o,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Ee,xe]),Ye=(0,t.useCallback)((e,o=!0)=>{let d=G.current;if(!d||!e)return;if(C.current&&C.current.id===e.id){o&&lt();return}C.current&&!d.ended&&d.currentTime>1&&Ge(C.current.id,d.currentTime,d.duration||we.current,!0),C.current=e,fe(e),ne(E=>E&&e.id),De(e.duration||0);let c=g[e.id]?.position||0,I=c>5&&(!e.duration||c<e.duration-10)?c:0;We.current=I,O(I),e.source==="xyz"?d.src=Xe.current?`${Xe.current}/xyz/${e.id.slice(3)}/audio`:`${y}/episodes/${e.id}/audio`:d.src=Xe.current?`${Xe.current}/episodes/${e.id}/audio`:`${y}/episodes/${e.id}/audio`,d.load(),d.playbackRate=st.current.rate||1,d.volume=st.current.volume??.9,o&&d.play().catch(()=>{}),Be({lastEpisodeId:e.id})},[g,Ge,Be,lt]),Oo=(0,t.useCallback)(async e=>{let o=e.public?`${y}/xyz/public/play`:`${y}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,d=e.public?{pid:e.pid,eid:e.eid}:{},c=await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}),I=await c.json().catch(()=>({}));if(!c.ok)throw new Error(I.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await $e(),Ye(I.item,!0)},[$e,Ye]);(0,t.useEffect)(()=>{let e=W.trim();if(e.length<2){te([]);return}let o=window.setTimeout(()=>{re(`${y}/search?q=${encodeURIComponent(e)}`).then(d=>te(Array.isArray(d.items)?d.items:[])).catch(()=>te([]))},250);return()=>window.clearTimeout(o)},[W]);let Ct=(0,t.useCallback)((e,o=!0)=>{e&&(Ye(e,o),ne(e.id))},[Ye]),ye=(0,t.useCallback)(e=>{let o=G.current;if(!o||!C.current)return;let d=Number(e);if(!Number.isFinite(d))return;let c=Number(we.current)||0,I=Number.isFinite(o.duration)&&o.duration>0?o.duration:c,E=Math.max(0,I>0?Math.min(d,I):d);try{o.currentTime=E}catch{We.current=E;return}O(E),Ge(C.current.id,E,I||c,!0)},[Ge]),Bo=(0,t.useCallback)(e=>{let o=r.find(d=>d.id===e.episodeId);if(o){if(C.current?.id===e.episodeId){ye(e.start),ne(o.id);return}We.current=e.start,Ct(o,!1)}},[r,Ct,ye]),xo=(0,t.useCallback)(e=>{let o=eo.current;if(!o)return null;let d=o.getBoundingClientRect();return d.width?Math.min(1,Math.max(0,(e.clientX-d.left)/d.width)):null},[]),St=(0,t.useCallback)(e=>{let o=xo(e),d=Number.isFinite(we.current)&&we.current>0?we.current:Number.isFinite(G.current?.duration)?G.current.duration:0;o==null||!d||ye(o*d)},[xo,ye]),Uo=(0,t.useCallback)(e=>{e.preventDefault(),Ot.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}St(e)},[St]),Ko=(0,t.useCallback)(e=>{Ot.current&&St(e)},[St]),ho=(0,t.useCallback)(e=>{Ot.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),qo=(0,t.useCallback)(e=>{let o=G.current;if(!o)return;let d=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),ye((o.currentTime||0)-d)),e.key==="ArrowRight"&&(e.preventDefault(),ye((o.currentTime||0)+d)),e.key==="Home"&&(e.preventDefault(),ye(0)),e.key==="End"&&(e.preventDefault(),ye(Number.isFinite(o.duration)?o.duration:0))},[ye]),ft=(0,t.useCallback)(e=>{let o=G.current;if(!o||!C.current)return;let d=Math.max(0,Math.min((o.currentTime||0)+e,(o.duration||we.current||0)-1));o.currentTime=d,O(d)},[]),qt=(0,t.useCallback)(e=>{if(!xe.length)return;let d=((C.current?xe.findIndex(c=>c.id===C.current.id):-1)+e+xe.length)%xe.length;Ye(xe[d],!0)},[xe,Ye]),Fo=(0,t.useCallback)(e=>{let o=G.current;o&&(o.playbackRate=e),Be({rate:e}),ee(!1)},[Be]);(0,t.useEffect)(()=>{if(!U)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".rate-wrap")||ee(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[U]),(0,t.useEffect)(()=>{if(!L)return;let e=()=>{let d=Math.max(0,Math.round((L-Date.now())/1e3));if(ue(d),d<=0){let c=G.current;c&&!c.paused&&c.pause(),Y(0),b(0),k("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let o=window.setInterval(e,1e3);return()=>window.clearInterval(o)},[L,k]),(0,t.useEffect)(()=>{if(!le)return;let e=o=>{o.type==="keydown"&&o.key!=="Escape"||o.type==="pointerdown"&&o.target.closest?.(".sleep-wrap")||me(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[le]);let Ft=(0,t.useCallback)(e=>{if(me(!1),e==="off"){Y(0),b(0),ue(0);return}if(e==="end"){Y(0),b(-1),ue(0),k("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}b(e),Y(Date.now()+e*6e4),k(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[k]),Mt=(0,t.useCallback)(e=>{let o=Math.max(0,Math.min(1,e)),d=G.current;d&&(d.volume=o),Be({volume:o})},[Be]),Ho=(0,t.useCallback)(()=>{let e=G.current,o=st.current.volume>0?0:.9;e&&(e.volume=o),Be({volume:o})},[Be]),Jo=()=>{let e=G.current;if(!e||!C.current)return;let o=performance.now();o-(to.current||0)<400||(to.current=o,O(e.currentTime),Ge(C.current.id,e.currentTime,e.duration||we.current))},Vo=()=>{let e=G.current,o=C.current;if(!e||!o)return;let d=Number.isFinite(e.duration)?e.duration:o.duration||0;De(d);let c=We.current;We.current=0,c>0&&c<d-1&&(e.currentTime=c,O(c))},Zo=()=>{let e=G.current;if(C.current&&Ge(C.current.id,e?.duration||we.current||0,e?.duration||we.current||0,!0),f===-1){b(0),Y(0),ue(0),k("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}qt(1)},Xo=async e=>{await R(`${y}/folders`,"POST",{path:e}),await $e(),k("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Wo=async()=>{let e=await fetch(`${y}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Go=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),kt||ot(!0))},Yo=e=>{e.currentTarget.contains(e.relatedTarget)||ot(!1)},Qo=async e=>{e.preventDefault(),ot(!1);let o=e.dataTransfer,d=[...o?.files||[]],c=d.map(F=>F.path).filter(F=>typeof F=="string"&&F),I=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(F=>F.trim()).filter(F=>F.startsWith("file://")).map(F=>decodeURIComponent(F.replace(/^file:\/\//,""))),E=[...new Set([...c,...I])];if(E.length){try{let F=await R(`${y}/import/paths`,"POST",{paths:E});await $e(),k(F.added?`\u5DF2\u6DFB\u52A0 ${F.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(F){Pe(F.message)}return}let Qe=d.filter(F=>F.size>0);if(!Qe.length){k("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let _e=`drop-${Date.now()}`,Tt="",Vt=0;for(let F of Qe)try{let bo=await fetch(`${y}/import/upload?name=${encodeURIComponent(F.name)}&batch=${_e}`,{method:"POST",body:F}),Ro=await bo.json();bo.ok&&(Tt=Ro.folder||Tt,Vt+=1)}catch{}if(Tt)try{await R(`${y}/folders`,"POST",{path:Tt})}catch{}await $e(),k(Vt?`\u5DF2\u5BFC\u5165 ${Vt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},_o=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await R(`${y}/folders`,"DELETE",{path:e}),await $e(),k("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){Pe(o.message)}};(0,t.useEffect)(()=>{let e=o=>{let d=o.target?.tagName;d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),lt()):o.key==="ArrowRight"?(o.preventDefault(),ft(15)):o.key==="ArrowLeft"?(o.preventDefault(),ft(-15)):o.key==="ArrowUp"?(o.preventDefault(),Mt(st.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Mt(st.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[lt,ft,Mt]);let Ht=e=>{let o=g[e.id];return!o||!e.duration?!1:o.position/e.duration>=.97},Jt=e=>{let o=g[e.id];return!o||!e.duration?0:Math.min(100,Math.max(0,o.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${ut?"nav-collapsed":""}`,onDragOver:Go,onDragLeave:Yo,onDrop:Qo},kt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,ut?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:ro},t.default.createElement(X,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(X,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11.18"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:ro},t.default.createElement(X,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Kt.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Ht).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,o,d])=>t.default.createElement("button",{key:e,className:`nav-item ${J===e?"active":""}`,onClick:()=>pe(e)},t.default.createElement("span",null,o),t.default.createElement("span",{className:"nav-count"},d||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Le(!0)},t.default.createElement(X,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e},t.default.createElement(X,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},ko(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>_o(e)},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Lo),t.default.createElement("p",{className:"subline"},Ao)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${q?"is-on":""}`,onClick:()=>Nt(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(X,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",fo.length?` ${fo.length}`:"")),t.default.createElement("button",{className:`tool-btn ${Oe?"is-on":""}`,onClick:()=>{mt(e=>!e),rt([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(X,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(X,{name:"search",size:16}),t.default.createElement("input",{value:W,onChange:e=>ve(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:oe,onChange:e=>A(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Oe?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",ze.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>rt(Ee.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement("button",{className:"btn ghost",disabled:!it.length,onClick:()=>$t(it.map(e=>e.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",it.length," \u96C6"),t.default.createElement("button",{className:"btn primary",disabled:!ze.length,onClick:()=>$t(ze)},"\u8F6C\u5199\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost danger",disabled:!ze.length,onClick:()=>go(ze)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{rt([]),mt(!1)}},"\u53D6\u6D88")):null,Je?t.default.createElement("div",{className:"banner error",onClick:()=>Pe("")},Je," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,D?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>ne(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},D.artist,D.album?` \xB7 ${D.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(dt,{item:D,size:288})),t.default.createElement("h2",{className:"episode-title"},D.title),t.default.createElement("p",{className:"episode-sub"},D.artist,D.album?` \xB7 ${D.album}`:""),t.default.createElement("p",{className:"episode-path",title:D.file},D.location||D.file),t.default.createElement("p",{className:"episode-stats"},Zt(D.duration)," \xB7 ",Xt(D.mtime)," \xB7 \u5DF2\u542C ",Math.round(Jt(D)),"%"),D.shownotes?t.default.createElement("div",{className:`episode-notes ${S?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>j(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",S?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},D.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:lt},M&&v?.id===D.id?"\u6682\u505C":"\u64AD\u653E"),h==="queued"||h==="running"?t.default.createElement("button",{className:"btn ghost",onClick:Bt},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:gt},D.source==="xyz"?z?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":z?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),D.source==="xyz"?t.default.createElement("button",{className:"btn ghost",onClick:Io},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement("button",{className:"btn ghost danger",onClick:()=>go([D.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(Et,{inline:!0,transcript:z,status:h,progress:a?.progress,stage:a?.stage,chunks:a?.chunks,queued:a?.queued,elapsed:K,editingId:at,draft:zt,onDraftChange:At,onEditLine:ao,onSaveLine:so,onCancelEdit:()=>vt(null),onSplitLine:io,onMergeLine:lo,onUndo:po,onValidate:co,issues:_t,onCancel:Bt,error:ht,position:Q,onSeek:ye,onClose:()=>ne(null),onStart:gt,target:be,job:ke,onChangeTarget:vo,onTranslate:mo,onOpenSettings:()=>tt(!0)})))):J==="xyz"?t.default.createElement(Gt,{onPlay:Oo,currentId:v?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,o])=>t.default.createElement("button",{key:e,className:`chip ${V===e?"is-on":""}`,onClick:()=>ge(e)},o))),J==="all"&&!W&&Kt.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},Kt.map(e=>{let o=Jt(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${v?.id===e.id?"is-current":""}`,onClick:()=>Ct(e,!0)},t.default.createElement(dt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,W.trim().length>=2&&de.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},de.length)),de.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Bo(e)},t.default.createElement("span",{className:"hit-time"},Ce(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),Fe?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Ee.length===0?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Le(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):t.default.createElement("div",{className:"episode-list"},Ee.map((e,o)=>{let d=Jt(e),c=v?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${c?"is-current":""} ${Ht(e)?"is-finished":""} ${Oe&&ze.includes(e.id)?"is-selected":""}`,onClick:()=>Oe?Po(e.id):Ct(e,!0)},t.default.createElement("span",{className:"col-index row-index"},Oe?ze.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(X,{name:"check",size:14})):null:c&&M?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):o+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(dt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Xt(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Zt(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:I=>{I.stopPropagation(),Eo(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},Ht(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(X,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):d>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${d}%`}})):null))}))))),_&&v&&!D?t.default.createElement(Et,{transcript:z,status:h,progress:a?.progress,stage:a?.stage,chunks:a?.chunks,queued:a?.queued,elapsed:K,editingId:at,draft:zt,onDraftChange:At,onEditLine:ao,onSaveLine:so,onCancelEdit:()=>vt(null),onSplitLine:io,onMergeLine:lo,onUndo:po,onValidate:co,issues:_t,onCancel:Bt,error:ht,position:Q,onSeek:ye,onClose:()=>Ze(!1),onStart:gt,target:be,job:ke,onChangeTarget:vo,onTranslate:mo,onOpenSettings:()=>tt(!0)}):null,q?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>Nt(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Ae.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ae.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Co(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},e.status==="queued"||e.status==="running"?t.default.createElement("button",{className:"mini-link",onClick:()=>Ut(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Ut(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Ut(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!it.length,onClick:()=>$t(it.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",it.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!ze.length,onClick:()=>$t(ze)},"\u8F6C\u5199\u5DF2\u9009 ",ze.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:eo,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ae||0),"aria-valuenow":Math.round(Q||0),"aria-valuetext":`${Ce(Q)} / ${Ce(ae)}`,onPointerDown:Uo,onPointerMove:Ko,onPointerUp:ho,onPointerCancel:ho,onKeyDown:qo},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ae?Math.min(100,Math.max(0,Q/ae*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ae?Math.min(100,Math.max(0,Q/ae*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},v?t.default.createElement("button",{className:"now-open",onClick:()=>ne(v.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(dt,{item:v,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:v.title},v.title),t.default.createElement("div",{className:"now-artist"},v.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>qt(-1)},t.default.createElement(X,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>ft(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:lt,disabled:!v&&Ee.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(X,{name:M?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>ft(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>qt(1)},t.default.createElement(X,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement("button",{className:`subs-btn ${_?"active":""}`,onClick:To,disabled:!v,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},t.default.createElement(X,{name:"wave",size:15}),t.default.createElement("span",null,z?"\u5B57\u5E55":h==="queued"||h==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),t.default.createElement("span",{className:"time"},Ce(Q)," / ",Ce(ae)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>ee(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":U},P.rate,"\xD7"),U?t.default.createElement("span",{className:"rate-menu",role:"menu"},pn.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===P.rate,className:e===P.rate?"is-on":"",onClick:()=>Fo(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${L?"active":""}`,onClick:()=>me(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":le},t.default.createElement(X,{name:"moon",size:14}),L?t.default.createElement("span",{className:"sleep-left"},Ce(Me)):null),le?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!L&&f!==-1,className:!L&&f!==-1?"is-on":"",onClick:()=>Ft("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":f===e,className:f===e?"is-on":"",onClick:()=>Ft(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":f===-1,className:f===-1?"is-on":"",onClick:()=>Ft("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Ho,title:"\u9759\u97F3"},t.default.createElement(X,{name:P.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:P.volume,onChange:e=>Mt(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),He?t.default.createElement(cn,{onClose:()=>Le(!1),onSubmit:Xo,onPick:Wo}):null,wt?t.default.createElement(un,{config:Lt,onClose:()=>tt(!1),onSave:async e=>{let o=await R(`${y}/translate/settings`,"PUT",e);bt(o),tt(!1),k("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ve?t.default.createElement("div",{className:"toast"},Ve):null,t.default.createElement("audio",{ref:G,preload:"metadata",onPlay:()=>Te(!0),onPause:()=>{Te(!1);let e=G.current;C.current&&e&&e.currentTime>0&&!e.ended&&Ge(C.current.id,e.currentTime,e.duration||we.current,!0)},onTimeUpdate:Jo,onLoadedMetadata:Vo,onEnded:Zo,onError:()=>{Te(!1),k("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Dt=require("react");function mn(r){let i=String(r||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let s=i[1].split(",").map(g=>Number.parseFloat(g));if(s.length<3||s.length>3&&s[3]===0)return null;let u=g=>{let x=g/255;return x<=.03928?x/12.92:((x+.055)/1.055)**2.4};return .2126*u(s[0])+.7152*u(s[1])+.0722*u(s[2])}function vn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let i=getComputedStyle(r).backgroundColor,s=mn(i);if(s!==null)return s}return null}function So(){let r=vn();if(r!==null)return r>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":"dark"}function jt(){let[r,i]=(0,Dt.useState)(So);return(0,Dt.useEffect)(()=>{let s=()=>i(So());s();let u=new MutationObserver(s);u.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&u.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let g=window.matchMedia("(prefers-color-scheme: light)");return g.addEventListener?.("change",s),()=>{u.disconnect(),g.removeEventListener?.("change",s)}},[]),r}var n=Re(require("react"),1);var B="/podwave/api";async function ie(r){let i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function qe(r,i,s){let u=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function gn(r){let i=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function pt(r){let i=Number(r)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function fn(r){if(!r)return"";let i=new Date(r),s=u=>String(u).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function Qt(){let r=jt(),[i,s]=(0,n.useState)([]),[u,g]=(0,n.useState)([]),[x,w]=(0,n.useState)({asrModel:"",translateModel:""}),[T,P]=(0,n.useState)(null),[H,U]=(0,n.useState)(null),[ee,S]=(0,n.useState)({showSidebarPanel:!0}),[j,f]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[b,L]=(0,n.useState)(null),[Y,Me]=(0,n.useState)(null),[ue,le]=(0,n.useState)(null),[me,W]=(0,n.useState)(!1),[ve,de]=(0,n.useState)("auto"),[te,oe]=(0,n.useState)(!1),[A,J]=(0,n.useState)(null),[pe,V]=(0,n.useState)(!1),[ge,Z]=(0,n.useState)(""),[ne,v]=(0,n.useState)(15),[fe,M]=(0,n.useState)(!0),[Te,Q]=(0,n.useState)("api"),[O,ae]=(0,n.useState)("https://api.deepseek.com"),[De,Fe]=(0,n.useState)("deepseek-chat"),[je,He]=(0,n.useState)(""),[Le,Je]=(0,n.useState)(""),[Pe,Ve]=(0,n.useState)(""),[se,z]=(0,n.useState)(""),[p,h]=(0,n.useState)(""),[he,K]=(0,n.useState)(""),et=(0,n.useCallback)(async()=>{try{let[a,$,q,Nt,Ae,nt,Oe,mt]=await Promise.all([ie(`${B}/history`),ie(`${B}/models`),ie(`${B}/translate/settings`),ie(`${B}/ui-settings`),ie(`${B}/transcribe/settings`),ie(`${B}/import/settings`),ie(`${B}/setup`),ie(`${B}/update`)]);L(Oe),J(mt),Oe?.job?.status==="running"&&oe(!0),f({mode:nt.mode||"copy",orphans:nt.orphans||0,orphanBytes:nt.orphanBytes||0}),S({showSidebarPanel:Nt?.showSidebarPanel!==!1}),Z((Ae.hotwords||[]).join(" ")),v(Ae.chunkMinutes||15),M(Ae.diarize!==!1),s(a.items||[]),g($.models||[]),w($.config||{asrModel:"",translateModel:""}),P($.transcribe||null),Je($.config?.asrModel||""),Ve($.config?.translateModel||""),U(q),Q(q.provider||"api"),ae(q.apiBase||"https://api.deepseek.com"),Fe(q.apiModel||"deepseek-chat"),He(""),K("")}catch(a){K(a.message)}},[]);(0,n.useEffect)(()=>{et()},[et]),(0,n.useEffect)(()=>{let a=!1;return ie(`${B}/setup/plan?source=${ve}`).then($=>{a||Me($)}).catch(()=>{}),()=>{a=!0}},[ve,b?.job?.status]),(0,n.useEffect)(()=>{if(!te&&b?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let $=await ie(`${B}/setup`);L($),$.job?.status!=="running"&&oe(!1)}catch{}},2500);return()=>window.clearInterval(a)},[te,b?.job?.status]);let ht=async()=>{K(""),oe(!0);try{await qe(`${B}/setup/install`,"POST",{source:ve});let a=await ie(`${B}/setup`);L(a),_("\u5F00\u59CB\u5B89\u88C5")}catch(a){oe(!1),K(a.message)}},Ie=async()=>{try{await qe(`${B}/setup/cancel`,"POST",{}),_("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){K(a.message)}},_=a=>{h(a),window.setTimeout(()=>h(""),2400)},Ze=async()=>{W(!0);try{let a=await ie(`${B}/setup/verify`);le(a),_(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){_(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{W(!1)}},Lt=async()=>{try{let a=await ie(`${B}/setup/diagnose`),$=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText($)}catch{let q=document.createElement("textarea");q.value=$,q.style.position="fixed",q.style.opacity="0",document.body.appendChild(q),q.select(),document.execCommand("copy"),q.remove()}_("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){_(a.message||"\u590D\u5236\u5931\u8D25")}},bt=async()=>{z("api"),K("");try{let a={provider:Te,apiBase:O,apiModel:De};je.trim()&&(a.apiKey=je.trim());let $=await qe(`${B}/translate/settings`,"PUT",a);U($),He(""),_("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){K(a.message)}finally{z("")}},be=async()=>{z("models"),K("");try{let a=await qe(`${B}/models`,"PUT",{asrModel:Le,translateModel:Pe});w(a.config),g(a.models||[]),P(a.transcribe||null),_("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){K(a.message)}finally{z("")}},ct=u.length?u:[{name:x.asrModel||"qwen3-asr-1.7b-8bit",ready:T?.modelReady},{name:x.translateModel||"hy-mt2-1.8b-4bit",ready:H?.localReady}],ke=async()=>{V(!0);try{J(await ie(`${B}/update?force=1`))}catch{_("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{V(!1)}},Ne=ct.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),wt=ct.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),tt=async()=>{z("ui"),K("");try{let a=await qe(`${B}/ui-settings`,"PUT",{showSidebarPanel:ee.showSidebarPanel});S({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),_("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){K(a.message)}finally{z("")}},ut=async a=>{z("import"),K("");try{let $=await qe(`${B}/import/settings`,"PUT",{mode:a});f(q=>({...q,mode:$.mode})),_("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch($){K($.message)}finally{z("")}},yt=async()=>{if(j.orphans&&window.confirm(`\u6E05\u7406 ${j.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){z("imports"),K("");try{let a=await qe(`${B}/imports/orphans`,"DELETE",{});f($=>({...$,orphans:0,orphanBytes:0})),_(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){K(a.message)}finally{z("")}}},kt=async()=>{z("transcribe"),K("");try{let a=ge.split(/[\s,，、]+/).map(q=>q.trim()).filter(Boolean).slice(0,500),$=await qe(`${B}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(ne)||15)),diarize:fe});Z(($.hotwords||[]).join(" ")),v($.chunkMinutes||15),M($.diarize!==!1),_("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){K(a.message)}finally{z("")}},ot=ct;return n.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,It),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),he?n.default.createElement("div",{className:"banner error",onClick:()=>K("")},he):null,p?n.default.createElement("div",{className:"settings-message"},p):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),b?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"setup-platform"},b.platform?.osLabel," \xB7 ",b.platform?.arch," \xB7 ",b.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",b.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",b.engine?.label),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn ghost",onClick:Lt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),n.default.createElement("button",{className:"settings-btn ghost",disabled:me,onClick:Ze},me?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),ue?n.default.createElement("ul",{className:"setup-components"},ue.checks.map(a=>n.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,n.default.createElement("ul",{className:"setup-components"},(b.components||[]).map(a=>n.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},n.default.createElement("span",{className:"setup-dot"}),n.default.createElement("span",{className:"setup-component-label"},a.label),n.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?n.default.createElement("span",{className:"setup-component-size"},pt(a.bytes)):null))),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),n.default.createElement("select",{value:ve,onChange:a=>de(a.target.value)},n.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),n.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),n.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),Y?.items?.length?n.default.createElement("details",{className:"setup-plan",open:!0},n.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",pt(Y.totalBytes)," \xB7 ",Y.items.length," \u9879"),n.default.createElement("ul",null,Y.items.map(a=>n.default.createElement("li",{key:a.id},n.default.createElement("span",null,a.label),n.default.createElement("span",null,a.bytes?pt(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):n.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",disabled:te||b.job?.status==="running",onClick:ht},te||b.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),b.job?.status==="running"?n.default.createElement("button",{className:"settings-btn ghost",onClick:Ie},"\u53D6\u6D88"):null),b.job?n.default.createElement("div",{className:"setup-job"},n.default.createElement("div",{className:"setup-job-line"},n.default.createElement("span",null,b.job.stage||b.job.status),n.default.createElement("span",null,b.job.progress||0,"% \xB7 ",pt(b.job.bytes)," / ",pt(b.job.expected))),n.default.createElement("div",{className:"setup-progress"},n.default.createElement("span",{style:{width:`${b.job.progress||0}%`}})),b.job.error?n.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",b.job.error):null,b.job.status==="done"&&(!b.job.summary||!b.job.summary.length)?n.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(b.job.summary)&&b.job.summary.length?n.default.createElement("ul",{className:"setup-summary"},b.job.summary.map(a=>n.default.createElement("li",{key:a.id},a.label," \xB7 ",pt(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):n.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",i.length," \u6761\u3002"),i.length?n.default.createElement("ul",{className:"history-list"},i.map(a=>n.default.createElement("li",{key:a.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},a.title),n.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${gn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},fn(a.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9 MLX \u5F15\u64CE\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\uFF1BWindows / Linux \u7684 SenseVoice \u5F15\u64CE\u6682\u4E0D\u652F\u6301\u70ED\u8BCD\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:ge,onChange:a=>Z(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:ne,onChange:a=>v(a.target.value)})),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:fe,onChange:a=>M(a.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:kt,disabled:se==="transcribe"},se==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:j.mode==="copy",onChange:()=>ut("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:j.mode==="reference",onChange:()=>ut("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:yt,disabled:se==="imports"||!j.orphans},j.orphans?`\u6E05\u7406 ${j.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(j.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:Te,onChange:a=>Q(a.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:O,onChange:a=>ae(a.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:De,onChange:a=>Fe(a.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:je,onChange:a=>He(a.target.value),placeholder:H?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${H.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:bt,disabled:se==="api"},se==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},H?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:ee.showSidebarPanel,onChange:a=>S({showSidebarPanel:a.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:tt,disabled:se==="ui"},se==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:Le,onChange:a=>Je(a.target.value)},(Ne.length?Ne:ot).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},T?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Pe,onChange:a=>Ve(a.target.value)},(wt.length?wt:ot).map(a=>n.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},H?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:be,disabled:se==="models"},se==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),n.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},A?.current?`v${A.current}`:"\u2014")),n.default.createElement("div",{className:"field-row"},n.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),n.default.createElement("span",{className:"settings-status"},A?.latest?`v${A.latest}`:A?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),n.default.createElement("p",{className:"settings-hint"},A?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":A?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${A.error}\uFF09\u3002`:A?.latest?"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ke,disabled:pe},pe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),A?.checkedAt?n.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(A.checkedAt).toLocaleString()):null))))}function xn({size:r=16}){return Se.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Se.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Se.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Se.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Se.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Se.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function hn(){let r=jt();return Se.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Se.default.createElement("style",null,It),Se.default.createElement(Yt,null))}function bn(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},hn)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Qt));let i=null,s="podwave-hide-nav",u=x=>{if(typeof document>"u")return;let w=document.getElementById(s);x&&!w?(w=document.createElement("style"),w.id=s,w.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(w)):!x&&w&&w.remove()},g=x=>{if(u(!x),x&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},xn);else if(!x&&i){let w=i;i=null;try{typeof w?.dispose=="function"?w.dispose():typeof w=="function"?w():typeof w?.dispose>"u"&&typeof w?.unregister=="function"&&w.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(x=>x.ok?x.json():null).then(x=>g(x?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",x=>{g(x?.detail?.showSidebarPanel!==!1)})}var wn=["slots"];

return module.exports}})
