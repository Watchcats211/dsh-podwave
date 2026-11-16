window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var on=Object.create;var Lt=Object.defineProperty;var nn=Object.getOwnPropertyDescriptor;var rn=Object.getOwnPropertyNames;var an=Object.getPrototypeOf,sn=Object.prototype.hasOwnProperty;var ln=(r,l)=>{for(var s in l)Lt(r,s,{get:l[s],enumerable:!0})},No=(r,l,s,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let v of rn(l))!sn.call(r,v)&&v!==s&&Lt(r,v,{get:()=>l[v],enumerable:!(u=nn(l,v))||u.enumerable});return r};var pt=(r,l,s)=>(s=r!=null?on(an(r)):{},No(l||!r||!r.__esModule?Lt(s,"default",{value:r,enumerable:!0}):s,r)),pn=r=>No(Lt({},"__esModule",{value:!0}),r);var Cn={};ln(Cn,{apply:()=>zn,inject:()=>$n});module.exports=pn(Cn);var Ke=pt(require("react"),1);var Ot=`
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
`;var t=pt(require("react"),1);var $=pt(require("react"),1);function ee({name:r,size:l=18}){let s={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),$.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),$.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),$.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return $.default.createElement("svg",{...s},$.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),$.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),$.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),$.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return $.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},$.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),$.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),$.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),$.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),$.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return $.default.createElement("svg",{...s},$.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var eo=pt(require("react"),1);function Be(r){if(!Number.isFinite(r)||r<0)return"0:00";let l=Math.floor(r),s=Math.floor(l/3600),u=Math.floor(l%3600/60),v=l%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${u}:${String(v).padStart(2,"0")}`}function Qt(r){if(!r)return"\u2014";let l=Math.floor(r/3600),s=Math.round(r%3600/60);return l>0?`${l} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function _t(r){if(!r)return"";let l=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function zo(r){let s=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Rt(r){let l=String(r).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}var cn="/podwave/api";function wt({item:r,size:l=44,className:s=""}){let u={width:l,height:l};return r&&r.hasCover?eo.default.createElement("img",{className:`cover ${s}`,style:u,src:`${cn}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):eo.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},zo(r&&r.title))}var m=pt(require("react"),1);var $o="/podwave/api";function Bt({transcript:r,status:l,progress:s,stage:u,chunks:v,queued:g,elapsed:x,error:P,position:T,onSeek:Y,onClose:F,onStart:ie,onCancel:E,target:O,job:f,onChangeTarget:G,onTranslate:q,onOpenSettings:le,inline:Me=!1,editingId:Q=null,draft:pe="",onDraftChange:w,onEditLine:W,onSaveLine:ue,onCancelEdit:fe,onSplitLine:he,onMergeLine:ke,onUndo:xe,onValidate:_,issues:R=[]}){let U=(0,m.useRef)(null),J=(0,m.useRef)(null),H=r?.lines?.findIndex(y=>T>=y.start&&T<y.end)??-1;(0,m.useEffect)(()=>{if(H<0||!U.current)return;U.current.querySelector(`[data-seg="${H}"]`)?.scrollIntoView({block:"nearest"})},[H]);let A=l==="queued"||l==="running";return m.default.createElement("section",{className:`transcript-panel ${Me?"inline":""}`},m.default.createElement("header",{className:"transcript-head"},m.default.createElement("h3",null,"\u5B57\u5E55"),r?m.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,m.default.createElement("div",{className:"transcript-actions"},m.default.createElement("select",{className:"tr-select",value:O,onChange:y=>G(y.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},m.default.createElement("option",{value:""},"\u5BF9\u7167"),m.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),m.default.createElement("option",{value:"en"},"English")),m.default.createElement("button",{className:"mini-link",onClick:le},"\u8BBE\u7F6E"),r?m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{className:"mini-link",onClick:xe,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),m.default.createElement("button",{className:"mini-link",onClick:_,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),m.default.createElement("a",{className:"mini-link",href:`${$o}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),m.default.createElement("a",{className:"mini-link",href:`${$o}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Me?null:m.default.createElement("button",{className:"transcript-close",onClick:F,title:"\u6536\u8D77"},"\xD7"))),m.default.createElement("div",{className:"transcript-body",ref:U},r&&A?m.default.createElement("div",{className:"tr-strip"},m.default.createElement("span",null,l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),E?m.default.createElement("button",{className:"seg-tool",onClick:E},"\u53D6\u6D88"):null):null,r&&R?.length?m.default.createElement("div",{className:"tr-issues"},R.slice(0,5).map(y=>m.default.createElement("div",{key:y},"\xB7 ",y)),R.length>5?m.default.createElement("div",null,"\u2026\u5171 ",R.length," \u6761"):null):null,f?.status==="running"||f?.status==="queued"?m.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",f.progress?.total?` ${f.progress.done||0}/${f.progress.total}`:""):null,f?.status==="error"?m.default.createElement("div",{className:"tr-running err"},f.error,"\u5F85\u7FFB ",f.missing??0," \u884C",q?m.default.createElement("button",{className:"seg-tool",onClick:q},"\u91CD\u8BD5"):null):null,f?.status==="partial"?m.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",f.translated??0,"/",f.total??0," \u884C\uFF0C\u8FD8\u7F3A ",f.missing??0," \u884C",q?m.default.createElement("button",{className:"seg-tool",onClick:q},"\u8865\u7FFB\u7F3A\u5931\u90E8\u5206"):null):null,f?.status==="none"&&O&&r&&(f.missing??0)>0?m.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",f.missing," \u884C\u5F85\u7FFB\uFF09",q?m.default.createElement("button",{className:"seg-tool",onClick:q},"\u5F00\u59CB\u7FFB\u8BD1"):null):null,r?r.lines.map((y,te)=>m.default.createElement("div",{key:y.id,"data-seg":te,className:`seg-row ${te===H?"active":""} ${Q===y.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Be(y.start)}`,onClick:()=>Y(y.start),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),Y(y.start))}},m.default.createElement("span",{className:"seg-time"},Be(y.start)),Q===y.id?m.default.createElement("span",{className:"seg-edit",onClick:h=>h.stopPropagation()},m.default.createElement("textarea",{ref:J,value:pe,rows:Math.min(4,Math.max(2,Math.ceil((pe.length||1)/40))),onChange:h=>w(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.metaKey||h.ctrlKey)&&ue(y.id),h.key==="Escape"&&fe()}}),m.default.createElement("span",{className:"seg-edit-actions"},m.default.createElement("button",{className:"seg-tool",onClick:()=>ue(y.id)},"\u4FDD\u5B58"),m.default.createElement("button",{className:"seg-tool",onClick:()=>he(y.id,J.current?.selectionStart??Math.floor(pe.length/2))},"\u62C6\u5206"),m.default.createElement("button",{className:"seg-tool",onClick:fe},"\u53D6\u6D88"))):m.default.createElement(m.default.Fragment,null,y.speaker!=null?m.default.createElement("span",{className:`seg-speaker spk-${y.speaker%5}`},r.speakers?.[y.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${y.speaker+1}`):null,m.default.createElement("span",{className:"seg-text"},y.text,y.translations?.[O]?m.default.createElement("span",{className:"seg-trans"},y.translations[O]):null),m.default.createElement("span",{className:"seg-tools"},m.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:h=>{h.stopPropagation(),W(y)}},"\u270E"),te<r.lines.length-1?m.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:h=>{h.stopPropagation(),ke(y.id)}},"\u21E3"):null)))):A?m.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((x||0)/1e3)+" \u79D2",s?.percent!=null?m.default.createElement("span",{className:"tx-progress"},m.default.createElement("span",{style:{width:`${s.percent}%`}})):null,m.default.createElement("br",null),m.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),m.default.createElement("br",null),E?m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:E},"\u53D6\u6D88\u8F6C\u5199"):null):P?m.default.createElement("div",{className:"transcript-status"},m.default.createElement("span",{className:"err"},P),m.default.createElement("br",null),m.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:ie},"\u91CD\u8BD5")):m.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",m.default.createElement("br",null),m.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:ie},"\u5F00\u59CB\u8F6C\u5199"))))}var i=pt(require("react"),1),re="/podwave/api";async function De(r){let l=await fetch(r),s=await l.json().catch(()=>({}));if(!l.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${l.status}\uFF09`);return s}async function yt(r,l){let s=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l||{})}),u=await s.json().catch(()=>({}));if(!s.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${s.status}\uFF09`);return u}function Co(r){let l=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(l/3600),u=Math.floor(l%3600/60);return s?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function So(r){if(!r)return"";let l=new Date(r);return Number.isNaN(l.getTime())?"":`${l.getFullYear()}/${l.getMonth()+1}/${l.getDate()}`}function to({onPlay:r,currentId:l}){let[s,u]=(0,i.useState)(null),[v,g]=(0,i.useState)(""),[x,P]=(0,i.useState)(""),[T,Y]=(0,i.useState)(""),[F,ie]=(0,i.useState)(""),[E,O]=(0,i.useState)(0),[f,G]=(0,i.useState)(!1),[q,le]=(0,i.useState)(""),[Me,Q]=(0,i.useState)(""),[pe,w]=(0,i.useState)([]),[W,ue]=(0,i.useState)(!1),[fe,he]=(0,i.useState)(null),[ke,xe]=(0,i.useState)([]),[_,R]=(0,i.useState)(null),[U,J]=(0,i.useState)(!1),[H,A]=(0,i.useState)(""),[y,te]=(0,i.useState)(null),[h,qe]=(0,i.useState)(!1),[be,Ie]=(0,i.useState)(null),[me,Pe]=(0,i.useState)(!1),V=(0,i.useCallback)(async(d=!1)=>{ue(!0);try{let C=await De(`${re}/xyz/subscriptions${d?"?refresh=1":""}`);w(C.items||[])}catch(C){B(C)}finally{ue(!1)}},[]);function B(d){let C=String(d?.message||"");if(C.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||C.includes("\u767B\u5F55\u5DF2\u5931\u6548")){u(ve=>({...ve||{},loggedIn:!1})),w([]),he(null),xe([]),le(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(He(C))}function He(d){return d?d.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":d:"\u767B\u5F55\u5931\u8D25"}async function _e(){try{await yt(`${re}/xyz/open-web`,{})}catch(d){B(d)}}(0,i.useEffect)(()=>{De(`${re}/xyz/status`).then(d=>{u(d),d.loggedIn&&V()}).catch(d=>B(d)),De(`${re}/xyz/local-app`).then(d=>Ie(d)).catch(()=>Ie({available:!1}))},[V]),(0,i.useEffect)(()=>{if(!E)return;let d=setInterval(()=>O(C=>Math.max(0,C-1)),1e3);return()=>clearInterval(d)},[E]);async function Re(){if(g(""),!/^1\d{10}$/.test(T.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}P("send");try{let d=await yt(`${re}/xyz/auth/send-code`,{phone:T.trim(),areaCode:"+86"});O(60),d.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${d.devCode}`)}catch(d){B(d)}finally{P("")}}async function Je(){if(g(""),!T.trim()||!F.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}P("login");try{await yt(`${re}/xyz/auth/login`,{phone:T.trim(),code:F.trim(),areaCode:"+86"});let d=await De(`${re}/xyz/status`);u(d),await V()}catch(d){B(d)}finally{P("")}}async function Ve(){if(g(""),!q.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}P("token");try{await yt(`${re}/xyz/auth/token`,{refreshToken:q.trim(),deviceId:Me.trim()});let d=await De(`${re}/xyz/status`);u(d),le(""),await V()}catch(d){B(d)}finally{P("")}}async function Ue(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let d=await navigator.clipboard.readText();if(!d.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");le(d.trim())}catch(d){g(d?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function et(){g(""),P("app");try{await yt(`${re}/xyz/auth/from-app`,{});let d=await De(`${re}/xyz/status`);u(d),await V(!0)}catch(d){B(d)}finally{De(`${re}/xyz/local-app`).then(d=>Ie(d)).catch(()=>{}),P("")}}async function tt(){P("logout");try{await yt(`${re}/xyz/auth/logout`,{}),u({loggedIn:!1}),w([]),he(null),xe([])}catch(d){B(d)}finally{P("")}}async function D(d){he(d),xe([]),R(null),J(!0),g("");try{let C=await De(`${re}/xyz/podcast/${encodeURIComponent(d.pid)}/episodes?limit=30`);xe(C.items||[]),R(C.loadMoreKey||null)}catch(C){B(C)}finally{J(!1)}}async function we(){if(!(!fe||!_||U)){J(!0);try{let d=new URLSearchParams({limit:"30",loadMoreKey:_}),C=await De(`${re}/xyz/podcast/${encodeURIComponent(fe.pid)}/episodes?${d}`);xe(ve=>[...ve,...C.items||[]]),R(C.loadMoreKey||null)}catch(d){B(d)}finally{J(!1)}}}async function oe(d){P(`play:${d.eid}`),g("");try{await r(d)}catch(C){B(C)}finally{P("")}}async function Ee(){if(g(""),!H.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}qe(!0);try{let d=H.trim();if(/\/episode\//i.test(d)){let C=await De(`${re}/xyz/public/episode?url=${encodeURIComponent(d)}`);te({pid:C.podcast.pid,title:C.podcast.title,author:C.podcast.author,episodes:[C.episode]})}else{let C=await De(`${re}/xyz/public/podcast?url=${encodeURIComponent(d)}`);te(C.podcast)}}catch(d){B(d)}finally{qe(!1)}}async function Ze(d){P(`pplay:${d.eid}`),g("");try{await r({...d,public:!0})}catch(C){B(C)}finally{P("")}}return s?s.loggedIn?fe?i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-head"},i.default.createElement("button",{className:"btn ghost",onClick:()=>{he(null),xe([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),i.default.createElement("div",{className:"xyz-podcast-title"},fe.title)),U&&ke.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,i.default.createElement("div",{className:"xyz-eps"},ke.map(d=>i.default.createElement("div",{key:d.eid,className:`xyz-ep ${l===`xyz${d.eid}`?"is-current":""}`},i.default.createElement("div",{className:"xyz-ep-main"},i.default.createElement("div",{className:"xyz-ep-title"},d.title),i.default.createElement("div",{className:"xyz-ep-meta"},So(d.pubDate)," \xB7 ",Co(d.duration))),i.default.createElement("button",{className:"btn primary",disabled:x===`play:${d.eid}`,onClick:()=>oe(d)},x===`play:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!U&&ke.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,_?i.default.createElement("button",{className:"btn ghost xyz-more",disabled:U,onClick:we},U?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?i.default.createElement("p",{className:"xyz-error"},v):null):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-head"},i.default.createElement("div",null,i.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),i.default.createElement("div",{className:"xyz-hint"},s.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${s.profile.nickname}`:"\u5DF2\u767B\u5F55",(s.profile?.avatar,""))),i.default.createElement("div",{className:"xyz-head-actions"},i.default.createElement("button",{className:"btn ghost",disabled:W,onClick:()=>V(!0)},W?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),i.default.createElement("button",{className:"btn ghost",disabled:x==="logout",onClick:tt},"\u9000\u51FA\u767B\u5F55"))),W?i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,i.default.createElement("div",{className:"xyz-subs"},pe.map(d=>i.default.createElement("button",{key:d.pid,className:"xyz-sub-card",onClick:()=>D(d)},d.cover?i.default.createElement("img",{className:"xyz-cover",src:d.cover,alt:"",loading:"lazy"}):i.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),i.default.createElement("div",{className:"xyz-sub-text"},i.default.createElement("div",{className:"xyz-sub-title"},d.title),i.default.createElement("div",{className:"xyz-sub-meta"},d.author||""))))),!W&&pe.length===0?i.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?i.default.createElement("p",{className:"xyz-error"},v):null):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("div",{className:"xyz-login"},i.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),i.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),i.default.createElement("div",{className:"xyz-actions"},i.default.createElement("button",{className:"btn primary",disabled:x==="app",onClick:et},x==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),i.default.createElement("p",{className:"xyz-hint"},be===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":be.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${be.deviceId?`\uFF08\u8BBE\u5907 ${be.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${be.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),i.default.createElement("button",{className:"xyz-link",onClick:()=>Pe(d=>!d)},me?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),me?i.default.createElement(i.default.Fragment,null,i.default.createElement("ol",{className:"xyz-steps"},i.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),i.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),i.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",i.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",i.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),i.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),i.default.createElement("div",{className:"xyz-actions"},i.default.createElement("button",{className:"btn ghost",onClick:_e},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),i.default.createElement("div",{className:"xyz-advanced"},i.default.createElement("label",null,i.default.createElement("span",null,"refresh token \u6216 access token"),i.default.createElement("input",{value:q,onChange:d=>le(d.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),i.default.createElement("button",{className:"xyz-link",type:"button",onClick:Ue},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),i.default.createElement("label",null,i.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),i.default.createElement("input",{value:Me,onChange:d=>Q(d.target.value),placeholder:"x-jike-device-id"})),i.default.createElement("button",{className:"btn primary",disabled:x==="token",onClick:Ve},x==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),i.default.createElement("button",{className:"xyz-link",onClick:()=>G(d=>!d)},f?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),f?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u624B\u673A\u53F7"),i.default.createElement("input",{value:T,onChange:d=>Y(d.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),i.default.createElement("button",{className:"btn ghost",disabled:x==="send"||E>0,onClick:Re},E>0?`${E}s \u540E\u91CD\u53D1`:x==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),i.default.createElement("input",{value:F,onChange:d=>ie(d.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),i.default.createElement("button",{className:"btn primary",disabled:x==="login",onClick:Je},x==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,i.default.createElement("div",{className:"xyz-public"},i.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),i.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),i.default.createElement("div",{className:"xyz-fields"},i.default.createElement("label",null,i.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),i.default.createElement("input",{value:H,onChange:d=>A(d.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),i.default.createElement("button",{className:"btn ghost",disabled:h,onClick:Ee},h?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),y?i.default.createElement("div",{className:"xyz-eps"},i.default.createElement("div",{className:"xyz-ep-title"},y.title,i.default.createElement("span",{className:"xyz-hint"}," \xB7 ",y.author)),y.episodes.map(d=>i.default.createElement("div",{key:d.eid,className:`xyz-ep ${l===`xyz${d.eid}`?"is-current":""}`},i.default.createElement("div",{className:"xyz-ep-main"},i.default.createElement("div",{className:"xyz-ep-title"},d.title),i.default.createElement("div",{className:"xyz-ep-meta"},So(d.pubDate)," \xB7 ",Co(d.duration))),i.default.createElement("button",{className:"btn primary",disabled:x===`pplay:${d.eid}`,onClick:()=>Ze(d)},x===`pplay:${d.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?i.default.createElement("p",{className:"xyz-error"},v):null)):i.default.createElement("div",{className:"xyz-panel"},i.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}function Mo(r){if(r.type==="download")return r.status==="done"?"\u5DF2\u4E0B\u8F7D":r.status==="error"||r.status==="interrupted"?r.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${r.progress?` ${r.progress}%`:""}`;let l=r.progress?.percent,s=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${s}`}var z="/podwave/api",un=[.5,.75,1,1.25,1.5,1.75,2];async function de(r){let l=await fetch(r);if(!l.ok){let s=await l.json().catch(()=>({}));throw new Error(s.error||l.statusText)}return l.json()}async function se(r,l,s){let u=await fetch(r,{method:l,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||u.statusText)}return u.json()}function mn({onSubmit:r,onPick:l,onClose:s}){let[u,v]=(0,t.useState)(""),[g,x]=(0,t.useState)(!1),[P,T]=(0,t.useState)(!1),[Y,F]=(0,t.useState)(""),ie=(0,t.useRef)(null);return(0,t.useEffect)(()=>{ie.current?.focus();let f=G=>{G.key==="Escape"&&s()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),t.default.createElement("div",{className:"overlay",onMouseDown:f=>{f.target===f.currentTarget&&s()}},t.default.createElement("form",{className:"dialog",onSubmit:async f=>{if(f.preventDefault(),!(!u.trim()||g)){x(!0),F("");try{await r(u.trim()),s()}catch(G){F(G.message),x(!1)}}}},t.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),t.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),t.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!P){T(!0),F("");try{let f=await l();if(f?.canceled)return;if(f?.error)throw new Error(f.error);f?.path&&(await r(f.path),s())}catch(f){F(f.message)}finally{T(!1)}}},disabled:P,autoFocus:!0},P?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),t.default.createElement("div",{className:"path-row"},t.default.createElement("input",{ref:ie,value:u,onChange:f=>v(f.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),t.default.createElement("button",{type:"submit",className:"btn ghost",disabled:g||!u.trim()},g?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),Y?t.default.createElement("div",{className:"dialog-error"},Y):null))}function vn({config:r,onClose:l,onSave:s}){let[u,v]=(0,t.useState)(r?.provider||"api"),[g,x]=(0,t.useState)(""),[P,T]=(0,t.useState)(!1),[Y,F]=(0,t.useState)("");return t.default.createElement("div",{className:"overlay",onMouseDown:E=>{E.target===E.currentTarget&&l()}},t.default.createElement("form",{className:"dialog",onSubmit:async E=>{E.preventDefault(),T(!0),F("");try{await s({provider:u,apiKey:g||void 0})}catch(O){F(O.message),T(!1)}}},t.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),t.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),t.default.createElement("select",{value:u,onChange:E=>v(E.target.value)},t.default.createElement("option",{value:"api"},"DeepSeek API"),t.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?t.default.createElement("label",{className:"field"},t.default.createElement("span",null,"API Key"),t.default.createElement("input",{type:"password",value:g,onChange:E=>x(E.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):t.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),Y?t.default.createElement("div",{className:"dialog-error"},Y):null,t.default.createElement("div",{className:"dialog-actions"},t.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),t.default.createElement("button",{type:"submit",className:"btn primary",disabled:P},"\u4FDD\u5B58"))))}function oo(){let[r,l]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[v,g]=(0,t.useState)({}),[x,P]=(0,t.useState)({running:!1}),[T,Y]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[F,ie]=(0,t.useState)(!1),[E,O]=(0,t.useState)(!1),[f,G]=(0,t.useState)(0),[q,le]=(0,t.useState)(0),[Me,Q]=(0,t.useState)(0),[pe,w]=(0,t.useState)(!1),[W,ue]=(0,t.useState)(""),[fe,he]=(0,t.useState)([]),[ke,xe]=(0,t.useState)("recent"),[_,R]=(0,t.useState)("all"),[U,J]=(0,t.useState)(""),[H,A]=(0,t.useState)("all"),[y,te]=(0,t.useState)(null),[h,qe]=(0,t.useState)(null),[be,Ie]=(0,t.useState)(!1),[me,Pe]=(0,t.useState)(0),[V,B]=(0,t.useState)(0),[He,_e]=(0,t.useState)(!0),[Re,Je]=(0,t.useState)(!1),[Ve,Ue]=(0,t.useState)(""),[et,tt]=(0,t.useState)(""),[D,we]=(0,t.useState)(null),[oe,Ee]=(0,t.useState)("none"),[Ze,d]=(0,t.useState)(0),[C,ve]=(0,t.useState)(""),[kt,ne]=(0,t.useState)(!1),[ae,Nt]=(0,t.useState)(null),[Ne,St]=(0,t.useState)(""),[S,je]=(0,t.useState)({status:"none"}),[Ft,dt]=(0,t.useState)(!1),[Mt,Z]=(0,t.useState)(!1),[Pt,zt]=(0,t.useState)(!1),[Ae,Tt]=(0,t.useState)(null),[ct,ut]=(0,t.useState)(!1),[mt,vt]=(0,t.useState)([]),[ot,gt]=(0,t.useState)(!1),[ye,Xe]=(0,t.useState)([]),[Fe,nt]=(0,t.useState)(null),[ft,ht]=(0,t.useState)(""),[a,k]=(0,t.useState)([]),N=(0,t.useRef)(null),ze=(0,t.useRef)(""),$e=(0,t.useRef)(null),M=(0,t.useRef)(null),ge=(0,t.useRef)(0),Ge=(0,t.useRef)(T),rt=(0,t.useRef)(0),ro=(0,t.useRef)(0),ao=(0,t.useRef)(0),so=(0,t.useRef)(0),To=(0,t.useRef)(!1),qt=(0,t.useRef)(!1);(0,t.useEffect)(()=>{O(!1)},[y]),(0,t.useEffect)(()=>{Ge.current=T},[T]),(0,t.useEffect)(()=>{M.current=h},[h]),(0,t.useEffect)(()=>{ge.current=V},[V]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await de(`${z}/ui-settings`);!e&&n&&Z(!!n.sidebarCollapsed)}catch{}})(),()=>{e=!0}},[]);let io=(0,t.useCallback)(()=>{Z(e=>{let n=!e;return fetch(`${z}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:n})}).catch(()=>{}),n})},[]),b=(0,t.useCallback)(e=>{tt(e),window.clearTimeout(so.current),so.current=window.setTimeout(()=>tt(""),2600)},[]),Le=(0,t.useCallback)(async()=>{let e=await de(`${z}/episodes`);return l(e.items||[]),u(e.folders||[]),g(e.progress||{}),P(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await de(`${z}/health`).catch(()=>({}));n.mediaBase&&(ze.current=n.mediaBase);let p=await de(`${z}/state`);if(e)return;Y(p.settings),u(p.folders||[]);let c=await Le();if(e)return;let j=p.settings?.lastEpisodeId,L=j?(c.items||[]).find(it=>it.id===j):null;if(L){qe(L),B(L.duration||0);let it=c.progress?.[L.id]?.position||0;rt.current=it>5?it:0,Pe(rt.current);let lt=N.current;lt&&(lt.src=ze.current?`${ze.current}/episodes/${L.id}/audio`:`${z}/episodes/${L.id}/audio`,lt.load(),lt.playbackRate=p.settings?.rate||1,lt.volume=p.settings?.volume??.9)}_e(!1),To.current=!0}catch(n){e||(Ue(n.message),_e(!1))}})(),()=>{e=!0}},[Le]),(0,t.useEffect)(()=>{if(!x.running)return;let e=setInterval(()=>{Le().catch(()=>{})},1500);return()=>clearInterval(e)},[x.running,Le]),(0,t.useEffect)(()=>{let e=!1;return we(null),ve(""),d(0),h?.id?((async()=>{try{let n=await de(`${z}/episodes/${h.id}/transcript`);if(e)return;Ee(n.status),Tt(n.status==="queued"||n.status==="running"?n:null),n.status==="done"&&n.transcript?we(n.transcript):n.status==="queued"||n.status==="running"?(d(n.elapsedMs||0),n.transcript&&we(n.transcript)):n.status==="error"&&ve(n.error||"\u8F6C\u5199\u5931\u8D25")}catch(n){e||ve(n.message)}})(),()=>{e=!0}):(Ee("none"),()=>{e=!0})},[h?.id]),(0,t.useEffect)(()=>{de(`${z}/translate/settings`).then(Nt).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,n=h?.id;return!n||!Ne?(je({status:"none"}),()=>{e=!0}):((async()=>{try{let p=await de(`${z}/episodes/${n}/translate?target=${Ne}`);e||je(p)}catch{e||je({status:"none"})}})(),()=>{e=!0})},[h?.id,Ne]),(0,t.useEffect)(()=>{if(oe!=="queued"&&oe!=="running")return;let e=!1,n=setInterval(async()=>{let p=M.current?.id;if(p)try{let c=await de(`${z}/episodes/${p}/transcript`);if(e)return;Ee(c.status),Tt(c.status==="queued"||c.status==="running"?c:null),d(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?we(c.transcript):c.status==="done"&&c.transcript?(we(c.transcript),ne(!0),b("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&ve(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(n)}},[oe,b]),(0,t.useEffect)(()=>{if(S.status!=="running"&&S.status!=="queued")return;let e=!1,n=async c=>{let j=await de(`${z}/episodes/${c}/translate?target=${Ne}`);if(!e){je(j),j.status==="done"&&b("\u7FFB\u8BD1\u5B8C\u6210");try{let L=await de(`${z}/episodes/${c}/transcript`);!e&&L.transcript&&we(L.transcript)}catch{}}},p=setInterval(()=>{let c=M.current?.id;c&&n(c).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(p)}},[S.status,Ne,b]),(0,t.useEffect)(()=>{let e=!1,n=async()=>{try{let c=await de(`${z}/jobs`);e||vt(c.items||[])}catch{}};n();let p=setInterval(n,ct?2500:2e4);return()=>{e=!0,clearInterval(p)}},[ct]);let at=(0,t.useCallback)((e,n,p,c=!1)=>{if(!e)return;let j=Date.now();!c&&j-ao.current<4e3||(ao.current=j,se(`${z}/progress/${e}`,"PUT",{position:n,duration:p}).catch(()=>{}),g(L=>({...L,[e]:{position:n,duration:p,updatedAt:j}})))},[]),We=(0,t.useCallback)(e=>{Y(n=>({...n,...e})),se(`${z}/settings`,"PATCH",e).catch(()=>{})},[]),$t=(0,t.useCallback)(async()=>{if(M.current){ve(""),ne(!0);try{let e=await se(`${z}/episodes/${M.current.id}/transcribe`,"POST",{});Ee(e.status||"queued")}catch(e){ve(e.message)}}},[]),Do=(0,t.useCallback)(()=>{if(D){ne(e=>!e);return}if(oe==="queued"||oe==="running"){ne(!0);return}$t()},[D,oe,$t]),Ht=(0,t.useCallback)(async()=>{if(M.current)try{await se(`${z}/episodes/${M.current.id}/transcribe/cancel`,"POST",{}),b("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){ve(e.message)}},[b]),Jt=(0,t.useCallback)(async(e,n)=>{try{if(n==="cancel"){let c=await se(`${z}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});c?.status==="none"?b("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):b(c?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else n==="retry"?await se(`${z}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):n==="clear"&&await se(`${z}/jobs`,"DELETE",{key:e.key})}catch(c){b(`\u64CD\u4F5C\u5931\u8D25\uFF1A${c.message}`)}let p=await de(`${z}/jobs`).catch(()=>({items:[]}));vt(p.items||[])},[b]),Dt=(0,t.useCallback)(async e=>{let n=[...new Set(e)];if(n.length)try{let p=await se(`${z}/transcribe/batch`,"POST",{ids:n});b(`\u5DF2\u6392\u961F ${p.queued} \u96C6${p.skipped?`\uFF0C\u8DF3\u8FC7 ${p.skipped} \u96C6`:""}${p.errors?.length?`\uFF0C\u5931\u8D25 ${p.errors.length} \u96C6`:""}`),Xe([]),gt(!1)}catch(p){b(p.message)}},[b]),Io=(0,t.useCallback)(e=>{Xe(n=>n.includes(e)?n.filter(p=>p!==e):[...n,e])},[]),Ye=(0,t.useCallback)(async(e,n,p)=>{try{let c=await se(`${z}${e}`,n,p||{});return c?.transcript&&we(c.transcript),c}catch(c){return b(c.message),null}},[b]),lo=(0,t.useCallback)(e=>{nt(e.id),ht(e.text),k([])},[]),po=(0,t.useCallback)(async e=>{if(!D)return;await Ye(`/episodes/${D.id}/transcript/lines/${e??Fe}`,"PUT",{text:ft})&&(nt(null),b("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[D,Fe,ft,Ye,b]),co=(0,t.useCallback)(async(e,n)=>{if(!D)return;await Ye(`/episodes/${D.id}/transcript/lines/${e??Fe}/split`,"POST",{offset:n})&&(nt(null),b("\u5DF2\u62C6\u6210\u4E24\u884C"))},[D,Fe,Ye,b]),uo=(0,t.useCallback)(async e=>{if(!D)return;await Ye(`/episodes/${D.id}/transcript/lines/${e}/merge`,"POST",{})&&b("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[D,Ye,b]),mo=(0,t.useCallback)(async()=>{if(!D)return;await Ye(`/episodes/${D.id}/transcript/undo`,"POST",{})&&b("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[D,Ye,b]),vo=(0,t.useCallback)(async()=>{if(D)try{let e=await de(`${z}/episodes/${D.id}/transcript/validate`);k(e.issues||[]),b(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){b(e.message)}},[D,b]),go=(0,t.useCallback)(async()=>{let e=M.current?.id;if(!e)return;let n=await de(`${z}/episodes/${e}/transcript`);n.transcript&&we(n.transcript)},[]),fo=(0,t.useCallback)(async()=>{let e=M.current?.id,n=Ne;if(!(!e||!n)&&!(S.status==="running"||S.status==="queued")){je({status:"running"});try{let p=await se(`${z}/episodes/${e}/translate`,"POST",{target:n});je(p),p.status==="done"&&(await go(),b("\u7FFB\u8BD1\u5B8C\u6210"))}catch(p){je(c=>({...c,status:"error",error:p.message}))}}},[Ne,S.status,go,b]),ho=(0,t.useCallback)(e=>{St(e||"")},[]),Eo=async()=>{if(K?.eid)try{await fetch(`${z}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${K.eid}`})})}catch{b("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},jo=e=>{let n=!e.favorite;l(p=>p.map(c=>c.id===e.id?{...c,favorite:n}:c)),se(`${z}/episodes/${e.id}/favorite`,"PUT",{favorite:n}).catch(p=>b(p.message))},xo=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let n of e)try{await fetch(`${z}/episodes/${n}`,{method:"DELETE"})}catch{}l(n=>n.filter(p=>!e.includes(p.id))),Xe([]),e.includes(y)&&te(null),b(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Ce=(0,t.useMemo)(()=>{let e=[...r];return ke==="title"?e.sort((n,p)=>n.title.localeCompare(p.title,"zh-Hans-CN")):ke==="duration"?e.sort((n,p)=>(p.duration||0)-(n.duration||0)):e.sort((n,p)=>p.mtime-n.mtime),e},[r,ke]),Oe=(0,t.useMemo)(()=>{let e=W.trim().toLowerCase();return Ce.filter(n=>{if(U&&n.root!==U||e&&!`${n.title} ${n.artist} ${n.album}`.toLowerCase().includes(e))return!1;let c=v[n.id]?.position||0,j=n.duration||0,L=j?c/j:0;return _==="inprogress"?c>5&&L<.97:_==="finished"?L>=.97:H==="unheard"?c<=5:H==="transcribed"?!!n.hasTranscript:H==="favorites"?!!n.favorite:!0})},[Ce,W,_,H,v,U]),bo=(0,t.useMemo)(()=>mt.filter(e=>e.status==="queued"||e.status==="running"),[mt]),xt=(0,t.useMemo)(()=>Oe.filter(e=>!e.hasTranscript),[Oe]),Vt=(0,t.useMemo)(()=>r.filter(e=>{let n=v[e.id];return!n||!n.position||n.position<5?!1:e.duration?n.position/e.duration<.97:!0}).sort((e,n)=>(v[n.id]?.updatedAt||0)-(v[e.id]?.updatedAt||0)).slice(0,4),[r,v]),Ao=(0,t.useMemo)(()=>r.reduce((e,n)=>e+(n.duration||0),0),[r]),Lo=Math.round(Ao/3600*10)/10,Oo=U?Rt(U):_==="inprogress"?"\u7EE7\u7EED\u6536\u542C":_==="finished"?"\u5DF2\u64AD\u5B8C":_==="xyz"?"\u5C0F\u5B87\u5B99":"\u5168\u90E8\u5355\u96C6",K=y?r.find(e=>e.id===y)||(h?.id===y?h:null):null,Bo=He?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":x.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":U?`${Oe.length} \u96C6 \xB7 \u53EA\u663E\u793A\u8FD9\u4E2A\u6587\u4EF6\u5939`:`${Oe.length} \u96C6 \xB7 \u5171 ${Lo} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Sn=(0,t.useMemo)(()=>h?Ce.findIndex(e=>e.id===h.id):-1,[Ce,h]),bt=(0,t.useCallback)(()=>{let e=N.current;if(e){if(!M.current){let n=Oe[0]||Ce[0];n&&st(n,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[Oe,Ce]),st=(0,t.useCallback)((e,n=!0)=>{let p=N.current;if(!p||!e)return;if(M.current&&M.current.id===e.id){n&&bt();return}M.current&&!p.ended&&p.currentTime>1&&at(M.current.id,p.currentTime,p.duration||ge.current,!0),M.current=e,qe(e),te(L=>L&&e.id),B(e.duration||0);let c=v[e.id]?.position||0,j=c>5&&(!e.duration||c<e.duration-10)?c:0;rt.current=j,Pe(j),e.source==="xyz"?p.src=ze.current?`${ze.current}/xyz/${e.id.slice(3)}/audio`:`${z}/episodes/${e.id}/audio`:p.src=ze.current?`${ze.current}/episodes/${e.id}/audio`:`${z}/episodes/${e.id}/audio`,p.load(),p.playbackRate=Ge.current.rate||1,p.volume=Ge.current.volume??.9,n&&p.play().catch(()=>{}),We({lastEpisodeId:e.id})},[v,at,We,bt]),Ko=(0,t.useCallback)(async e=>{let n=e.public?`${z}/xyz/public/play`:`${z}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,p=e.public?{pid:e.pid,eid:e.eid}:{},c=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)}),j=await c.json().catch(()=>({}));if(!c.ok)throw new Error(j.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await Le(),st(j.item,!0)},[Le,st]);(0,t.useEffect)(()=>{let e=W.trim();if(e.length<2){he([]);return}let n=window.setTimeout(()=>{de(`${z}/search?q=${encodeURIComponent(e)}`).then(p=>he(Array.isArray(p.items)?p.items:[])).catch(()=>he([]))},250);return()=>window.clearTimeout(n)},[W]);let It=(0,t.useCallback)((e,n=!0)=>{e&&(st(e,n),te(e.id))},[st]),Te=(0,t.useCallback)(e=>{let n=N.current;if(!n||!M.current)return;let p=Number(e);if(!Number.isFinite(p))return;let c=Number(ge.current)||0,j=Number.isFinite(n.duration)&&n.duration>0?n.duration:c,L=Math.max(0,j>0?Math.min(p,j):p);try{n.currentTime=L}catch{rt.current=L;return}Pe(L),at(M.current.id,L,j||c,!0)},[at]),Uo=(0,t.useCallback)(e=>{let n=r.find(p=>p.id===e.episodeId);if(n){if(M.current?.id===e.episodeId){Te(e.start),te(n.id);return}rt.current=e.start,It(n,!1)}},[r,It,Te]),wo=(0,t.useCallback)(e=>{let n=$e.current;if(!n)return null;let p=n.getBoundingClientRect();return p.width?Math.min(1,Math.max(0,(e.clientX-p.left)/p.width)):null},[]),Et=(0,t.useCallback)(e=>{let n=wo(e),p=Number.isFinite(ge.current)&&ge.current>0?ge.current:Number.isFinite(N.current?.duration)?N.current.duration:0;n==null||!p||Te(n*p)},[wo,Te]),Fo=(0,t.useCallback)(e=>{e.preventDefault(),qt.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}Et(e)},[Et]),qo=(0,t.useCallback)(e=>{qt.current&&Et(e)},[Et]),yo=(0,t.useCallback)(e=>{qt.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),Ho=(0,t.useCallback)(e=>{let n=N.current;if(!n)return;let p=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),Te((n.currentTime||0)-p)),e.key==="ArrowRight"&&(e.preventDefault(),Te((n.currentTime||0)+p)),e.key==="Home"&&(e.preventDefault(),Te(0)),e.key==="End"&&(e.preventDefault(),Te(Number.isFinite(n.duration)?n.duration:0))},[Te]),Ct=(0,t.useCallback)(e=>{let n=N.current;if(!n||!M.current)return;let p=Math.max(0,Math.min((n.currentTime||0)+e,(n.duration||ge.current||0)-1));n.currentTime=p,Pe(p)},[]),Zt=(0,t.useCallback)(e=>{if(!Ce.length)return;let p=((M.current?Ce.findIndex(c=>c.id===M.current.id):-1)+e+Ce.length)%Ce.length;st(Ce[p],!0)},[Ce,st]),Jo=(0,t.useCallback)(e=>{let n=N.current;n&&(n.playbackRate=e),We({rate:e}),ie(!1)},[We]);(0,t.useEffect)(()=>{if(!F)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".rate-wrap")||ie(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[F]),(0,t.useEffect)(()=>{if(!q)return;let e=()=>{let p=Math.max(0,Math.round((q-Date.now())/1e3));if(Q(p),p<=0){let c=N.current;c&&!c.paused&&c.pause(),le(0),G(0),b("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let n=window.setInterval(e,1e3);return()=>window.clearInterval(n)},[q,b]),(0,t.useEffect)(()=>{if(!pe)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".sleep-wrap")||w(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[pe]);let Xt=(0,t.useCallback)(e=>{if(w(!1),e==="off"){le(0),G(0),Q(0);return}if(e==="end"){le(0),G(-1),Q(0),b("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}G(e),le(Date.now()+e*6e4),b(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[b]),jt=(0,t.useCallback)(e=>{let n=Math.max(0,Math.min(1,e)),p=N.current;p&&(p.volume=n),We({volume:n})},[We]),Vo=(0,t.useCallback)(()=>{let e=N.current,n=Ge.current.volume>0?0:.9;e&&(e.volume=n),We({volume:n})},[We]),Zo=()=>{let e=N.current;if(!e||!M.current)return;let n=performance.now();n-(ro.current||0)<400||(ro.current=n,Pe(e.currentTime),at(M.current.id,e.currentTime,e.duration||ge.current))},Xo=()=>{let e=N.current,n=M.current;if(!e||!n)return;let p=Number.isFinite(e.duration)?e.duration:n.duration||0;B(p);let c=rt.current;rt.current=0,c>0&&c<p-1&&(e.currentTime=c,Pe(c))},Go=()=>{let e=N.current;if(M.current&&at(M.current.id,e?.duration||ge.current||0,e?.duration||ge.current||0,!0),f===-1){G(0),le(0),Q(0),b("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}Zt(1)},Wo=async e=>{await se(`${z}/folders`,"POST",{path:e}),await Le(),b("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Yo=async()=>{let e=await fetch(`${z}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return n},Qo=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),Pt||zt(!0))},_o=e=>{e.currentTarget.contains(e.relatedTarget)||zt(!1)},Ro=async e=>{e.preventDefault(),zt(!1);let n=e.dataTransfer,p=[...n?.files||[]],c=p.map(X=>X.path).filter(X=>typeof X=="string"&&X),j=String(n?.getData("text/uri-list")||"").split(/\r?\n/).map(X=>X.trim()).filter(X=>X.startsWith("file://")).map(X=>decodeURIComponent(X.replace(/^file:\/\//,""))),L=[...new Set([...c,...j])];if(L.length){try{let X=await se(`${z}/import/paths`,"POST",{paths:L});await Le(),b(X.added?`\u5DF2\u6DFB\u52A0 ${X.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(X){Ue(X.message)}return}let it=p.filter(X=>X.size>0);if(!it.length){b("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let lt=`drop-${Date.now()}`,At="",Yt=0;for(let X of it)try{let ko=await fetch(`${z}/import/upload?name=${encodeURIComponent(X.name)}&batch=${lt}`,{method:"POST",body:X}),tn=await ko.json();ko.ok&&(At=tn.folder||At,Yt+=1)}catch{}if(At)try{await se(`${z}/folders`,"POST",{path:At})}catch{}await Le(),b(Yt?`\u5DF2\u5BFC\u5165 ${Yt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},en=async e=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await se(`${z}/folders`,"DELETE",{path:e}),J(n=>n===e?"":n),await Le(),b("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(n){Ue(n.message)}};(0,t.useEffect)(()=>{let e=n=>{let p=n.target?.tagName;p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||n.metaKey||n.ctrlKey||n.altKey||(n.code==="Space"?(n.preventDefault(),bt()):n.key==="ArrowRight"?(n.preventDefault(),Ct(15)):n.key==="ArrowLeft"?(n.preventDefault(),Ct(-15)):n.key==="ArrowUp"?(n.preventDefault(),jt(Ge.current.volume+.05)):n.key==="ArrowDown"?(n.preventDefault(),jt(Ge.current.volume-.05)):n.key==="/"&&(n.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[bt,Ct,jt]);let Gt=e=>{let n=v[e.id];return!n||!e.duration?!1:n.position/e.duration>=.97},Wt=e=>{let n=v[e.id];return!n||!e.duration?0:Math.min(100,Math.max(0,n.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${Mt?"nav-collapsed":""}`,onDragOver:Qo,onDragLeave:_o,onDrop:Ro},Pt?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,Mt?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:io},t.default.createElement(ee,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(ee,{name:"wave",size:20})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.11"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:io},t.default.createElement(ee,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Vt.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(Gt).length],["xyz","\u5C0F\u5B87\u5B99",""]].map(([e,n,p])=>t.default.createElement("button",{key:e,className:`nav-item ${_===e&&!U?"active":""}`,onClick:()=>{J(""),R(e)}},t.default.createElement("span",null,n),t.default.createElement("span",{className:"nav-count"},p||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u6587\u4EF6\u5939"),t.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Je(!0)},t.default.createElement(ee,{name:"plus",size:16}))),s.length===0?t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",t.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):t.default.createElement("ul",{className:"folder-list"},s.map(e=>t.default.createElement("li",{key:e,title:e,className:U===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{R("all"),A("all"),ue(""),J(n=>n===e?"":e)},onKeyDown:n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),R("all"),A("all"),ue(""),J(p=>p===e?"":e))}},t.default.createElement(ee,{name:"folder",size:16}),t.default.createElement("span",{className:"folder-name"},Rt(e)),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:n=>{n.stopPropagation(),en(e)}},"\xD7"))))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,Oo),t.default.createElement("p",{className:"subline"},Bo)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:`tool-btn ${ct?"is-on":""}`,onClick:()=>ut(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(ee,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",bo.length?` ${bo.length}`:"")),t.default.createElement("button",{className:`tool-btn ${ot?"is-on":""}`,onClick:()=>{gt(e=>!e),Xe([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(ee,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(ee,{name:"search",size:16}),t.default.createElement("input",{value:W,onChange:e=>ue(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:ke,onChange:e=>xe(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),ot?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",ye.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>Xe(Oe.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement("button",{className:"btn ghost",disabled:!xt.length,onClick:()=>Dt(xt.map(e=>e.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",xt.length," \u96C6"),t.default.createElement("button",{className:"btn primary",disabled:!ye.length,onClick:()=>Dt(ye)},"\u8F6C\u5199\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost danger",disabled:!ye.length,onClick:()=>xo(ye)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{Xe([]),gt(!1)}},"\u53D6\u6D88")):null,Ve?t.default.createElement("div",{className:"banner error",onClick:()=>Ue("")},Ve," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,K?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>te(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},K.artist,K.album?` \xB7 ${K.album}`:"")),t.default.createElement("div",{className:"episode-view"},t.default.createElement("div",{className:"episode-left"},t.default.createElement("div",{className:"episode-cover"},t.default.createElement(wt,{item:K,size:288})),t.default.createElement("h2",{className:"episode-title"},K.title),t.default.createElement("p",{className:"episode-sub"},K.artist,K.album?` \xB7 ${K.album}`:""),t.default.createElement("p",{className:"episode-path",title:K.file},K.location||K.file),t.default.createElement("p",{className:"episode-stats"},Qt(K.duration)," \xB7 ",_t(K.mtime)," \xB7 \u5DF2\u542C ",Math.round(Wt(K)),"%"),K.shownotes?t.default.createElement("div",{className:`episode-notes ${E?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>O(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",E?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},K.shownotes)):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:bt},be&&h?.id===K.id?"\u6682\u505C":"\u64AD\u653E"),oe==="queued"||oe==="running"?t.default.createElement("button",{className:"btn ghost",onClick:Ht},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:$t},K.source==="xyz"?D?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":D?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),K.source==="xyz"?t.default.createElement("button",{className:"btn ghost",onClick:Eo},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,t.default.createElement("button",{className:"btn ghost danger",onClick:()=>xo([K.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),t.default.createElement("div",{className:"episode-right"},t.default.createElement(Bt,{inline:!0,transcript:D,status:oe,progress:Ae?.progress,stage:Ae?.stage,chunks:Ae?.chunks,queued:Ae?.queued,elapsed:Ze,editingId:Fe,draft:ft,onDraftChange:ht,onEditLine:lo,onSaveLine:po,onCancelEdit:()=>nt(null),onSplitLine:co,onMergeLine:uo,onUndo:mo,onValidate:vo,issues:a,onCancel:Ht,error:C,position:me,onSeek:Te,onClose:()=>te(null),onStart:$t,target:Ne,job:S,onChangeTarget:ho,onTranslate:fo,onOpenSettings:()=>dt(!0)})))):_==="xyz"?t.default.createElement(to,{onPlay:Ko,currentId:h?.id}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,n])=>t.default.createElement("button",{key:e,className:`chip ${H===e?"is-on":""}`,onClick:()=>A(e)},n))),_==="all"&&!W&&Vt.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},Vt.map(e=>{let n=Wt(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${h?.id===e.id?"is-current":""}`,onClick:()=>It(e,!0)},t.default.createElement(wt,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${n}%`}}))))}))):null,W.trim().length>=2&&fe.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},fe.length)),fe.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>Uo(e)},t.default.createElement("span",{className:"hit-time"},Be(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),He?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):Oe.length===0?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":U?"\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5185\u5BB9\u3002\u70B9\u300C\u5168\u90E8\u5355\u96C6\u300D\u770B\u5176\u5B83\u6587\u4EF6\u5939\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>Je(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&U?t.default.createElement("button",{className:"btn",onClick:()=>J("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},Oe.map((e,n)=>{let p=Wt(e),c=h?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${c?"is-current":""} ${Gt(e)?"is-finished":""} ${ot&&ye.includes(e.id)?"is-selected":""}`,onClick:()=>ot?Io(e.id):It(e,!0)},t.default.createElement("span",{className:"col-index row-index"},ot?ye.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(ee,{name:"check",size:14})):null:c&&be?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):n+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(wt,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",_t(e.mtime),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Qt(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:j=>{j.stopPropagation(),jo(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},Gt(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(ee,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):p>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${p}%`}})):null))}))))),kt&&h&&!K?t.default.createElement(Bt,{transcript:D,status:oe,progress:Ae?.progress,stage:Ae?.stage,chunks:Ae?.chunks,queued:Ae?.queued,elapsed:Ze,editingId:Fe,draft:ft,onDraftChange:ht,onEditLine:lo,onSaveLine:po,onCancelEdit:()=>nt(null),onSplitLine:co,onMergeLine:uo,onUndo:mo,onValidate:vo,issues:a,onCancel:Ht,error:C,position:me,onSeek:Te,onClose:()=>ne(!1),onStart:$t,target:Ne,job:S,onChangeTarget:ho,onTranslate:fo,onOpenSettings:()=>dt(!0)}):null,ct?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>ut(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},mt.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):mt.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Mo(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Jt(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Jt(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Jt(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!xt.length,onClick:()=>Dt(xt.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",xt.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!ye.length,onClick:()=>Dt(ye)},"\u8F6C\u5199\u5DF2\u9009 ",ye.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:$e,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(V||0),"aria-valuenow":Math.round(me||0),"aria-valuetext":`${Be(me)} / ${Be(V)}`,onPointerDown:Fo,onPointerMove:qo,onPointerUp:yo,onPointerCancel:yo,onKeyDown:Ho},t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${V?Math.min(100,Math.max(0,me/V*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${V?Math.min(100,Math.max(0,me/V*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},h?t.default.createElement("button",{className:"now-open",onClick:()=>te(h.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(wt,{item:h,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:h.title},h.title),t.default.createElement("div",{className:"now-artist"},h.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Zt(-1)},t.default.createElement(ee,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Ct(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:bt,disabled:!h&&Oe.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(ee,{name:be?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Ct(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Zt(1)},t.default.createElement(ee,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement("button",{className:`subs-btn ${kt?"active":""}`,onClick:Do,disabled:!h,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},t.default.createElement(ee,{name:"wave",size:15}),t.default.createElement("span",null,D?"\u5B57\u5E55":oe==="queued"||oe==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),t.default.createElement("span",{className:"time"},Be(me)," / ",Be(V)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>ie(e=>!e),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":F},T.rate,"\xD7"),F?t.default.createElement("span",{className:"rate-menu",role:"menu"},un.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===T.rate,className:e===T.rate?"is-on":"",onClick:()=>Jo(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${q?"active":""}`,onClick:()=>w(e=>!e),title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":pe},t.default.createElement(ee,{name:"moon",size:14}),q?t.default.createElement("span",{className:"sleep-left"},Be(Me)):null),pe?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!q&&f!==-1,className:!q&&f!==-1?"is-on":"",onClick:()=>Xt("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":f===e,className:f===e?"is-on":"",onClick:()=>Xt(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":f===-1,className:f===-1?"is-on":"",onClick:()=>Xt("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:Vo,title:"\u9759\u97F3"},t.default.createElement(ee,{name:T.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:e=>jt(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),Re?t.default.createElement(mn,{onClose:()=>Je(!1),onSubmit:Wo,onPick:Yo}):null,Ft?t.default.createElement(vn,{config:ae,onClose:()=>dt(!1),onSave:async e=>{let n=await se(`${z}/translate/settings`,"PUT",e);Nt(n),dt(!1),b("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,et?t.default.createElement("div",{className:"toast"},et):null,t.default.createElement("audio",{ref:N,preload:"metadata",onPlay:()=>Ie(!0),onPause:()=>{Ie(!1);let e=N.current;M.current&&e&&e.currentTime>0&&!e.ended&&at(M.current.id,e.currentTime,e.duration||ge.current,!0)},onTimeUpdate:Zo,onLoadedMetadata:Xo,onEnded:Go,onError:()=>{Ie(!1),b("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var Kt=require("react");function gn(r){let l=String(r||"").match(/rgba?\(([^)]+)\)/);if(!l)return null;let s=l[1].split(",").map(v=>Number.parseFloat(v));if(s.length<3||s.length>3&&s[3]===0)return null;let u=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*u(s[0])+.7152*u(s[1])+.0722*u(s[2])}function fn(){for(let r of[document.body,document.documentElement]){if(!r)continue;let l=getComputedStyle(r).backgroundColor,s=gn(l);if(s!==null)return s}return null}function Po(){let r=fn();if(r!==null)return r>.5?"light":"dark";let l=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(l)?"light":"dark"}function Ut(){let[r,l]=(0,Kt.useState)(Po);return(0,Kt.useEffect)(()=>{let s=()=>l(Po());s();let u=new MutationObserver(s);u.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&u.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let v=window.matchMedia("(prefers-color-scheme: light)");return v.addEventListener?.("change",s),()=>{u.disconnect(),v.removeEventListener?.("change",s)}},[]),r}var o=pt(require("react"),1);var I="/podwave/api";async function ce(r){let l=await fetch(r),s=await l.json().catch(()=>({}));if(!l.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return s}async function Se(r,l,s){let u=await fetch(r,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),v=await u.json().catch(()=>({}));if(!u.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return v}function hn(r){let l=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(l/3600),u=Math.floor(l%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function Qe(r){let l=Number(r)||0;return l?l<1024**2?`${Math.round(l/1024)} KB`:l<1024**3?`${(l/1024**2).toFixed(1)} MB`:`${(l/1024**3).toFixed(1)} GB`:"0 B"}function xn(r){if(!r)return"";let l=new Date(r),s=u=>String(u).padStart(2,"0");return`${l.getFullYear()}-${s(l.getMonth()+1)}-${s(l.getDate())} ${s(l.getHours())}:${s(l.getMinutes())}`}function bn(r){let l=r?.projectDir;return l?r?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${l}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\uFF08${l}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function wn(r){return r?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function yn(r){return r?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":r?.projectDir&&r.dir===r.projectDir?r.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":r?.legacyDir&&r.dir===r.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}function no(){let r=Ut(),[l,s]=(0,o.useState)([]),[u,v]=(0,o.useState)([]),[g,x]=(0,o.useState)(null),[P,T]=(0,o.useState)(""),[Y,F]=(0,o.useState)(!1),[ie,E]=(0,o.useState)({asrModel:"",translateModel:""}),[O,f]=(0,o.useState)(null),[G,q]=(0,o.useState)(null),[le,Me]=(0,o.useState)({showSidebarPanel:!0}),[Q,pe]=(0,o.useState)({mode:"copy",orphans:0,orphanBytes:0}),[w,W]=(0,o.useState)(null),[ue,fe]=(0,o.useState)(null),[he,ke]=(0,o.useState)(null),[xe,_]=(0,o.useState)(!1),[R,U]=(0,o.useState)("auto"),[J,H]=(0,o.useState)(!1),[A,y]=(0,o.useState)(null),[te,h]=(0,o.useState)(!1),[qe,be]=(0,o.useState)(""),[Ie,me]=(0,o.useState)(15),[Pe,V]=(0,o.useState)(!0),[B,He]=(0,o.useState)("api"),[_e,Re]=(0,o.useState)("https://api.deepseek.com"),[Je,Ve]=(0,o.useState)(""),[Ue,et]=(0,o.useState)("api"),[tt,D]=(0,o.useState)("https://api.deepseek.com"),[we,oe]=(0,o.useState)("deepseek-chat"),[Ee,Ze]=(0,o.useState)(""),[d,C]=(0,o.useState)(""),[ve,kt]=(0,o.useState)(""),[ne,ae]=(0,o.useState)(""),[Nt,Ne]=(0,o.useState)(""),[St,S]=(0,o.useState)(""),je=(0,o.useCallback)(async()=>{try{let[a,k,N,ze,$e,M,ge,Ge]=await Promise.all([ce(`${I}/history`),ce(`${I}/models`),ce(`${I}/translate/settings`),ce(`${I}/ui-settings`),ce(`${I}/transcribe/settings`),ce(`${I}/import/settings`),ce(`${I}/setup`),ce(`${I}/update`)]);W(ge),y(Ge),ge?.job?.status==="running"&&H(!0),pe({mode:M.mode||"copy",orphans:M.orphans||0,orphanBytes:M.orphanBytes||0}),Me({showSidebarPanel:ze?.showSidebarPanel!==!1}),be(($e.hotwords||[]).join(" ")),me($e.chunkMinutes||15),V($e.diarize!==!1),He($e.provider||"api"),Re($e.apiBase||"https://api.deepseek.com"),Ve(""),s(a.items||[]),v(k.models||[]),x(k.storage||null),T(k.storage?.dir||""),E(k.config||{asrModel:"",translateModel:""}),f(k.transcribe||null),C(k.config?.asrModel||""),kt(k.config?.translateModel||""),q(N),et(N.provider||"api"),D(N.apiBase||"https://api.deepseek.com"),oe(N.apiModel||"deepseek-chat"),Ze(""),S("")}catch(a){S(a.message)}},[]);(0,o.useEffect)(()=>{je()},[je]),(0,o.useEffect)(()=>{let a=!1;return ce(`${I}/setup/plan?source=${R}&mode=${B==="local"?"local":"basic"}`).then(k=>{a||fe(k)}).catch(()=>{}),()=>{a=!0}},[R,B,w?.job?.status]),(0,o.useEffect)(()=>{if(!J&&w?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let k=await ce(`${I}/setup`);W(k),k.job?.status!=="running"&&H(!1)}catch{}},2500);return()=>window.clearInterval(a)},[J,w?.job?.status]);let Ft=async()=>{S(""),H(!0);try{await Se(`${I}/setup/install`,"POST",{source:R});let a=await ce(`${I}/setup`);W(a),Z("\u5F00\u59CB\u5B89\u88C5")}catch(a){H(!1),S(a.message)}},dt=async()=>{S(""),H(!0);try{await Se(`${I}/setup/install`,"POST",{source:R,mode:"local"});let a=await ce(`${I}/setup`);W(a),Z("\u5F00\u59CB\u4E0B\u8F7D\u672C\u5730\u6A21\u578B")}catch(a){H(!1),S(a.message)}},Mt=async()=>{try{await Se(`${I}/setup/cancel`,"POST",{}),Z("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){S(a.message)}},Z=a=>{Ne(a),window.setTimeout(()=>Ne(""),2400)},Pt=async()=>{_(!0);try{let a=await ce(`${I}/setup/verify`);ke(a),Z(a.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(a){Z(a.message||"\u68C0\u67E5\u5931\u8D25")}finally{_(!1)}},zt=async()=>{try{let a=await ce(`${I}/setup/diagnose`),k=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(k)}catch{let N=document.createElement("textarea");N.value=k,N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.select(),document.execCommand("copy"),N.remove()}Z("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){Z(a.message||"\u590D\u5236\u5931\u8D25")}},Ae=async()=>{ae("api"),S("");try{let a={provider:Ue,apiBase:tt,apiModel:we};Ee.trim()&&(a.apiKey=Ee.trim());let k=await Se(`${I}/translate/settings`,"PUT",a);q(k),Ze(""),Z("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{ae("")}},Tt=async()=>{ae("models"),S("");try{let a=await Se(`${I}/models`,"PUT",{asrModel:d,translateModel:ve});E(a.config),v(a.models||[]),f(a.transcribe||null),Z("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{ae("")}},ct=async()=>{try{await Se(`${I}/models/open`,"POST",{})}catch(a){S(a.message)}},ut=async(a,k=!0)=>{F(!0),S("");try{let N=await Se(`${I}/models/dir`,"POST",{dir:a,move:k});x(N.storage||null),v(N.models||[]),T(N.storage?.dir||"");let ze=(N.moved||[]).length,$e=(N.skipped||[]).length;Z(ze||$e?`\u5DF2\u8FC1\u79FB ${ze} \u4E2A\u6A21\u578B${$e?`\uFF0C${$e} \u4E2A\u56E0\u76EE\u6807\u5DF2\u5B58\u5728\u8DF3\u8FC7`:""}`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(N){S(N.message)}finally{F(!1)}},mt=async a=>{ae(`model:${a}`),S("");try{let k=await Se(`${I}/models/remove`,"POST",{name:a});x(k||null),v(k.models||[]),Z(`\u5DF2\u5220\u9664 ${a}`)}catch(k){S(k.message)}finally{ae("")}},vt=u.length?u:[{name:ie.asrModel||"qwen3-asr-1.7b-8bit",ready:O?.modelReady},{name:ie.translateModel||"hy-mt2-1.8b-4bit",ready:G?.localReady}],ot=async()=>{h(!0);try{y(await ce(`${I}/update?force=1`))}catch{Z("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{h(!1)}},gt=vt.filter(a=>/asr|sensevoice|sherpa/i.test(a.name)&&a.ready!==!1),ye=vt.filter(a=>!/asr|sensevoice|sherpa|diarization/i.test(a.name)&&a.ready!==!1),Xe=async()=>{ae("ui"),S("");try{let a=await Se(`${I}/ui-settings`,"PUT",{showSidebarPanel:le.showSidebarPanel});Me({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),Z("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{ae("")}},Fe=async a=>{ae("import"),S("");try{let k=await Se(`${I}/import/settings`,"PUT",{mode:a});pe(N=>({...N,mode:k.mode})),Z("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(k){S(k.message)}finally{ae("")}},nt=async()=>{if(Q.orphans&&window.confirm(`\u6E05\u7406 ${Q.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){ae("imports"),S("");try{let a=await Se(`${I}/imports/orphans`,"DELETE",{});pe(k=>({...k,orphans:0,orphanBytes:0})),Z(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){S(a.message)}finally{ae("")}}},ft=async()=>{ae("transcribe"),S("");try{let a=qe.split(/[\s,，、]+/).map(N=>N.trim()).filter(Boolean).slice(0,500),k=await Se(`${I}/transcribe/settings`,"PUT",{provider:B,apiBase:_e,apiKey:Je,hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(Ie)||15)),diarize:Pe});be((k.hotwords||[]).join(" ")),me(k.chunkMinutes||15),V(k.diarize!==!1),He(k.provider||"api"),Re(k.apiBase||"https://api.deepseek.com"),Ve(""),k.runtime&&f(k.runtime),Z("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){S(a.message)}finally{ae("")}},ht=vt;return o.default.createElement("div",{className:"podwave-root","data-pw-theme":r,style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},o.default.createElement("style",null,Ot),o.default.createElement("div",{className:"podwave-settings"},o.default.createElement("header",{className:"settings-head"},o.default.createElement("h1",null,"\u64AD\u5BA2"),o.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),St?o.default.createElement("div",{className:"banner error",onClick:()=>S("")},St):null,Nt?o.default.createElement("div",{className:"settings-message"},Nt):null,o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),w?o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{className:"setup-platform"},w.platform?.osLabel," \xB7 ",w.platform?.arch," \xB7 ",w.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",w.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",w.engine?.label),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn ghost",onClick:zt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),o.default.createElement("button",{className:"settings-btn ghost",disabled:xe,onClick:Pt},xe?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),he?o.default.createElement("ul",{className:"setup-components"},he.checks.map(a=>o.default.createElement("li",{key:a.id,className:a.ok?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail)))):null,o.default.createElement("ul",{className:"setup-components"},(w.components||[]).map(a=>o.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},a.label),o.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?o.default.createElement("span",{className:"setup-component-size"},Qe(a.bytes)):null))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),o.default.createElement("select",{value:R,onChange:a=>U(a.target.value)},o.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),o.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),o.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),ue?.items?.length?o.default.createElement("details",{className:"setup-plan",open:!0},o.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Qe(ue.totalBytes)," \xB7 ",ue.items.length," \u9879"),o.default.createElement("ul",null,ue.items.map(a=>o.default.createElement("li",{key:a.id},o.default.createElement("span",null,a.label),o.default.createElement("span",null,a.bytes?Qe(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):o.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:J||w.job?.status==="running",onClick:Ft},J||w.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),w.job?.status==="running"?o.default.createElement("button",{className:"settings-btn ghost",onClick:Mt},"\u53D6\u6D88"):null),w.job?o.default.createElement("div",{className:"setup-job"},o.default.createElement("div",{className:"setup-job-line"},o.default.createElement("span",null,w.job.stage||w.job.status),o.default.createElement("span",null,w.job.progress||0,"% \xB7 ",Qe(w.job.bytes)," / ",Qe(w.job.expected))),o.default.createElement("div",{className:"setup-progress"},o.default.createElement("span",{style:{width:`${w.job.progress||0}%`}})),w.job.error?o.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",w.job.error):null,w.job.warning?o.default.createElement("p",{className:"settings-hint setup-warning"},w.job.warning):null,w.job.status==="done"&&(!w.job.summary||!w.job.summary.length)?o.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,w.job.status==="done"&&w.job.modelsDir?o.default.createElement("p",{className:"settings-hint setup-warning"},"\u6A21\u578B\u5DF2\u88C5\u5728 ",w.job.modelsDir):null,Array.isArray(w.job.summary)&&w.job.summary.length?o.default.createElement("ul",{className:"setup-summary"},w.job.summary.map(a=>o.default.createElement("li",{key:a.id},a.label," \xB7 ",a.skipped?"\u5DF2\u8DF3\u8FC7\uFF08\u53EF\u9009\u7EC4\u4EF6\uFF09":Qe(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):o.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),o.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",l.length," \u6761\u3002"),l.length?o.default.createElement("ul",{className:"history-list"},l.map(a=>o.default.createElement("li",{key:a.id,className:"history-row"},o.default.createElement("div",{className:"history-main"},o.default.createElement("span",{className:"history-title"},a.title),o.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${hn(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),o.default.createElement("span",{className:"history-date"},xn(a.completedAt))))):o.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u8F6C\u5199"),o.default.createElement("p",{className:"settings-hint"},"\u4E91\u7AEF API \u88C5\u597D\u5C31\u80FD\u7528\uFF0C\u6309\u8BC6\u522B\u65F6\u957F\u4ED8\u8D39\uFF08DeepSeek \u8BED\u97F3\u8BC6\u522B\u7EA6 \xA50.4/\u5C0F\u65F6\uFF0C\u4E00\u96C6 1 \u5C0F\u65F6\u7684\u64AD\u5BA2\u51E0\u6BDB\u94B1\uFF09\uFF1B\u672C\u5730\u6A21\u578B\u514D\u8D39\uFF0C\u4F46\u8981\u5148\u4E0B\u8F7D\u7EA6 2.4 GB\uFF0C\u5E76\u4E14\u7528\u4F60\u81EA\u5DF1\u7684\u7535\u8111\u7B97\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u65B9\u5F0F"),o.default.createElement("select",{value:B,onChange:a=>He(a.target.value)},o.default.createElement("option",{value:"api"},"\u4E91\u7AEF API\uFF08DeepSeek\uFF0C\u6309\u91CF\u4ED8\u8D39\uFF09"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B\uFF08\u514D\u8D39\uFF0C\u9700\u4E0B\u8F7D\uFF09"))),B==="api"?o.default.createElement(o.default.Fragment,null,o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u5730\u5740"),o.default.createElement("input",{value:_e,onChange:a=>Re(a.target.value),placeholder:"https://api.deepseek.com"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API Key"),o.default.createElement("input",{type:"password",value:Je,onChange:a=>Ve(a.target.value),placeholder:O?.api?.reusedKey?"\u7559\u7A7A = \u590D\u7528\u300CAPI \u4E0E\u7FFB\u8BD1\u5F15\u64CE\u300D\u91CC\u7684 key":"sk-..."})),o.default.createElement("p",{className:"settings-status"},O?.api?.hasKey?O.api.reusedKey?"\u5DF2\u590D\u7528\u300CAPI \u4E0E\u7FFB\u8BD1\u5F15\u64CE\u300D\u91CC\u7684 DeepSeek key\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"API Key \u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u5199":"\u8FD8\u6CA1\u6709 API Key\uFF0C\u8F6C\u5199\u65F6\u4F1A\u63D0\u793A\u53BB\u586B")):o.default.createElement("p",{className:"settings-status"},O?.installed&&O?.modelReady?`\u672C\u5730\u8FD0\u884C\u65F6\u548C\u6A21\u578B\u5DF2\u5C31\u7EEA\uFF08${O.modelName||"\u672C\u5730\u6A21\u578B"}\uFF09\uFF0C\u8F6C\u5199\u4E0D\u82B1\u94B1`:"\u672C\u5730\u8FD0\u884C\u65F6\u6216\u6A21\u578B\u8FD8\u6CA1\u88C5\u597D\uFF0C\u70B9\u4E0B\u9762\u300C\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B\u300D"),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u70ED\u8BCD"),o.default.createElement("input",{value:qe,onChange:a=>be(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),o.default.createElement("input",{type:"number",min:"1",max:"60",value:Ie,onChange:a=>me(a.target.value)})),o.default.createElement("p",{className:"settings-status"},"\u5206\u5757\u65F6\u957F\u53EA\u5BF9\u672C\u5730\u6A21\u578B\u751F\u6548\uFF1B\u4E91\u7AEF\u8F6C\u5199\u56FA\u5B9A 30 \u79D2\u4E00\u5757\uFF08\u63A5\u53E3\u5355\u6B21\u4E0A\u9650 120 \u79D2\uFF09\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:Pe,onChange:a=>V(a.target.checked)}),o.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u9700\u8981\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:ft,disabled:ne==="transcribe"},ne==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),B==="local"&&!(O?.installed&&O?.modelReady)?o.default.createElement("button",{className:"settings-btn",onClick:dt,disabled:J},J?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5\u672C\u5730\u6A21\u578B"):null,o.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),o.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:Q.mode==="copy",onChange:()=>Fe("copy")}),o.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:Q.mode==="reference",onChange:()=>Fe("reference")}),o.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:nt,disabled:ne==="imports"||!Q.orphans},Q.orphans?`\u6E05\u7406 ${Q.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(Q.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),o.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),o.default.createElement("select",{value:Ue,onChange:a=>et(a.target.value)},o.default.createElement("option",{value:"api"},"DeepSeek API"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u5730\u5740"),o.default.createElement("input",{value:tt,onChange:a=>D(a.target.value),placeholder:"https://api.deepseek.com"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u6A21\u578B"),o.default.createElement("input",{value:we,onChange:a=>oe(a.target.value),placeholder:"deepseek-chat"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API Key"),o.default.createElement("input",{type:"password",value:Ee,onChange:a=>Ze(a.target.value),placeholder:G?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${G.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Ae,disabled:ne==="api"},ne==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},G?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u754C\u9762"),o.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:le.showSidebarPanel,onChange:a=>Me({showSidebarPanel:a.target.checked})}),o.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Xe,disabled:ne==="ui"},ne==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),o.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u6A21\u578B"),o.default.createElement("p",{className:"settings-hint"},bn(g),"\uFF0C\u53EF\u4EE5\u6539\u6210\u4EFB\u610F\u76EE\u5F55\uFF08\u6BD4\u5982\u5916\u7F6E\u786C\u76D8\uFF09\uFF0C\u6539\u5B8C\u4F1A\u628A\u5DF2\u6709\u6A21\u578B\u4E00\u8D77\u642C\u8FC7\u53BB\u3002"),g?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"model-path"},o.default.createElement("code",{className:"model-path-text",title:g.dir},g.dir),o.default.createElement("span",{className:"model-path-size"},yn(g)," \xB7 \u5171 ",Qe(g.totalBytes))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u6A21\u578B\u5B58\u653E\u4F4D\u7F6E"),o.default.createElement("input",{value:P,onChange:a=>T(a.target.value),placeholder:"~/Models/podwave",spellCheck:!1}))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:Y||P.trim()===g.dir,onClick:()=>ut(P,!0)},Y?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB\u5230\u65B0\u4F4D\u7F6E"),o.default.createElement("button",{className:"settings-btn ghost",onClick:ct},"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00"),g.projectDir&&g.dir!==g.projectDir?o.default.createElement("button",{className:"settings-btn ghost",disabled:Y,onClick:()=>ut(g.projectDir,!0)},wn(g)):null,g.custom?o.default.createElement("button",{className:"settings-btn ghost",disabled:Y,onClick:()=>ut("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),u.length?o.default.createElement("ul",{className:"model-list"},u.map(a=>o.default.createElement("li",{key:a.name,className:"model-row"},o.default.createElement("div",{className:"model-main"},o.default.createElement("span",{className:"model-name"},a.name),o.default.createElement("span",{className:"model-meta"},a.kindLabel," \xB7 ",Qe(a.bytes),a.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",a.ready?"":" \xB7 \u672A\u5C31\u7EEA")),o.default.createElement("button",{className:"settings-btn ghost model-remove",disabled:a.inUse||ne===`model:${a.name}`,title:a.inUse?"\u6B63\u5728\u4F7F\u7528\u7684\u6A21\u578B\u4E0D\u80FD\u5220\u9664":`\u5220\u9664 ${a.name}`,onClick:()=>mt(a.name)},ne===`model:${a.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null,o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),o.default.createElement("select",{value:d,onChange:a=>C(a.target.value)},(gt.length?gt:ht).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},O?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),o.default.createElement("select",{value:ve,onChange:a=>kt(a.target.value)},(ye.length?ye:ht).map(a=>o.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),o.default.createElement("span",{className:"settings-status"},G?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:Tt,disabled:ne==="models"},ne==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9"))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u7248\u672C\u4E0E\u66F4\u65B0"),o.default.createElement("p",{className:"settings-hint"},"\u63D2\u4EF6\u4ECE npm \u68C0\u67E5\u65B0\u7248\u672C\uFF1B\u66F4\u65B0\u65B9\u5F0F\uFF1ADSH \u2192 \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u5F53\u524D\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},A?.current?`v${A.current}`:"\u2014")),o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u6700\u65B0\u7248\u672C"),o.default.createElement("span",{className:"settings-status"},A?.latest?`v${A.latest}`:A?.error?"\u6682\u65F6\u65E0\u6CD5\u68C0\u67E5":"\u2014"))),o.default.createElement("p",{className:"settings-hint"},A?.updateAvailable?"\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF1A\u5728 DSH \u63D2\u4EF6\u5E02\u573A\u66F4\u65B0\uFF0C\u6216\u8BA9\u52A9\u624B\u91CD\u65B0\u5B89\u88C5\u63D2\u4EF6\u5305\u3002":A?.error?`\u79BB\u7EBF\u6216\u7F51\u7EDC\u53D7\u9650\u65F6\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF08${A.error}\uFF09\u3002`:A?.latest?A?.current&&A?.latest&&A.current!==A.latest&&A.updateAvailable===!1?"\u672C\u5730\u7248\u672C\u6BD4\u5E02\u573A\u4E0A\u7684\u66F4\u65B0\uFF08\u8FD8\u6CA1\u53D1\u5E03\uFF09\u3002":"\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002":""),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",onClick:ot,disabled:te},te?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),A?.checkedAt?o.default.createElement("span",{className:"settings-status"},"\u4E0A\u6B21\u68C0\u67E5\uFF1A",new Date(A.checkedAt).toLocaleString()):null))))}function kn({size:r=16}){return Ke.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},Ke.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),Ke.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ke.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),Ke.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),Ke.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Nn(){let r=Ut();return Ke.default.createElement("div",{className:"podwave-root","data-pw-theme":r},Ke.default.createElement("style",null,Ot),Ke.default.createElement(oo,null))}function zn(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Nn)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},no));let l=null,s="podwave-hide-nav",u=g=>{if(typeof document>"u")return;let x=document.getElementById(s);g&&!x?(x=document.createElement("style"),x.id=s,x.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(x)):!g&&x&&x.remove()},v=g=>{if(u(!g),g&&!l)l=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},kn);else if(!g&&l){let x=l;l=null;try{typeof x?.dispose=="function"?x.dispose():typeof x=="function"?x():typeof x?.dispose>"u"&&typeof x?.unregister=="function"&&x.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>v(g?.showSidebarPanel!==!1)).catch(()=>v(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{v(g?.detail?.showSidebarPanel!==!1)})}var $n=["slots"];

return module.exports}})
