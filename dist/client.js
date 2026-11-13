window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var St=Object.create;var mo=Object.defineProperty;var Tt=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Pt=Object.getPrototypeOf,jt=Object.prototype.hasOwnProperty;var Dt=(a,l)=>{for(var i in l)mo(a,i,{get:l[i],enumerable:!0})},Ro=(a,l,i,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let g of Mt(l))!jt.call(a,g)&&g!==i&&mo(a,g,{get:()=>l[g],enumerable:!(u=Tt(l,g))||u.enumerable});return a};var Je=(a,l,i)=>(i=a!=null?St(Pt(a)):{},Ro(l||!a||!a.__esModule?mo(i,"default",{value:a,enumerable:!0}):i,a)),Et=a=>Ro(mo({},"__esModule",{value:!0}),a);var Vt={};Dt(Vt,{apply:()=>Ht,inject:()=>Jt});module.exports=Et(Vt);var de=Je(require("react"),1);var vo=`.podwave-root {
  position: relative;
  container-type: inline-size;
  height: 100%;
  overflow: hidden;
  background: #0c0c0f;
  color: #ececef;
  font-size: 14px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  --bg: #0c0c0f;
  --sidebar: #09090c;
  --elev: #131318;
  --hover: #17171d;
  --line: #212129;
  --line-soft: #1a1a21;
  --text: #ececef;
  --muted: #8f8f9a;
  --dim: #63636d;
  --accent: #e6a54a;
  --accent-soft: rgba(230, 165, 74, 0.12);
  --danger: #e57c7c;
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
  color: #f0aaaa;
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
  background: #26262e;
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
  background: #1c1c23;
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
  background: #0b0b0e;
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
  background: #26262e;
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
  color: #191204;
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

.podwave-root .rate-btn:hover { color: var(--text); border-color: #33333d; }

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
  background: #121216;
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
  background: #0d0d11;
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

.podwave-root .btn.primary { background: var(--accent); color: #191204; border-color: var(--accent); }
.podwave-root .btn.primary:hover { filter: brightness(1.05); }
.podwave-root .btn.primary:disabled { opacity: 0.45; cursor: default; }

.podwave-root .btn.ghost { background: transparent; border-color: var(--line); color: var(--muted); }
.podwave-root .btn.ghost:hover { color: var(--text); border-color: #33333d; }

.podwave-root .toast {
  position: absolute;
  left: 50%;
  bottom: calc(var(--player-h) + 14px);
  transform: translateX(-50%);
  background: #1a1a21;
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 12.5px;
  padding: 9px 14px;
  border-radius: 8px;
  z-index: 30;
}

/* ---------- scrollbars / responsive ---------- */

.podwave-root ::-webkit-scrollbar { width: 10px; height: 10px; }
.podwave-root ::-webkit-scrollbar-thumb { background: #26262e; border-radius: 6px; border: 2px solid var(--bg); }
.podwave-root ::-webkit-scrollbar-thumb:hover { background: #33333d; }
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
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #d8d8de;
  font-size: 12px;
  cursor: pointer;
}
.podwave-root .subs-btn:hover { background: #1f1f27; }
.podwave-root .subs-btn.active { border-color: #e6a54a; color: #e6a54a; }
.podwave-root .subs-btn:disabled { opacity: .45; cursor: default; }

.podwave-root .transcript-panel {
  position: absolute;
  right: 18px;
  bottom: 104px;
  width: min(560px, 52%);
  max-height: 58%;
  display: flex;
  flex-direction: column;
  background: #121217;
  border: 1px solid #2a2a32;
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
  border-bottom: 1px solid #23232b;
}
.podwave-root .transcript-head h3 { margin: 0; font-size: 13px; font-weight: 600; color: #e8e8ee; }
.podwave-root .transcript-meta { color: #8b8b96; font-size: 12px; }
.podwave-root .transcript-actions { margin-left: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.podwave-root .mini-link {
  color: #c9c9d2;
  font-size: 12px;
  text-decoration: none;
  border: 1px solid #2b2b33;
  border-radius: 6px;
  padding: 3px 8px;
}
.podwave-root .mini-link:hover { border-color: #e6a54a; color: #e6a54a; }
.podwave-root .transcript-close { border: 0; background: none; color: #8b8b96; cursor: pointer; font-size: 16px; line-height: 1; padding: 2px 4px; }
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
.podwave-root .seg-row:hover { background: #191920; }
.podwave-root .seg-row.active { background: #201c14; }
.podwave-root .seg-time { flex: none; width: 56px; color: #8b8b96; font-variant-numeric: tabular-nums; font-size: 12px; padding-top: 2px; }
.podwave-root .seg-text { font-size: 13px; line-height: 1.55; color: #dcdce3; }
.podwave-root .seg-row.active .seg-text { color: #f2e7d2; }
.podwave-root .transcript-status { padding: 16px; font-size: 13px; color: #9a9aa5; line-height: 1.6; }
.podwave-root .transcript-status .err { color: #e08a8a; white-space: pre-wrap; }


/* \u7FFB\u8BD1 */
.podwave-root .tr-select {
  height: 26px;
  border-radius: 6px;
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #c9c9d2;
  font-size: 12px;
  padding: 0 4px;
}
.podwave-root .seg-trans { display: block; margin-top: 2px; color: #8f9aa6; font-size: 12px; line-height: 1.5; }
.podwave-root .tr-running { padding: 8px 12px; color: #e6a54a; font-size: 12px; }
.podwave-root .tr-running.err { color: #e08a8a; white-space: pre-wrap; }
.podwave-root .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; font-size: 12px; color: #a8a8b2; }
.podwave-root .field select, .podwave-root .field input {
  height: 34px;
  border-radius: 8px;
  border: 1px solid #2b2b33;
  background: #17171d;
  color: #e6e6ec;
  padding: 0 10px;
  font-size: 13px;
}

/* \u5355\u96C6\u8BE6\u60C5\uFF1A\u5C01\u9762 + \u5B57\u5E55\u5E76\u6392 */
.podwave-root .detail-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.podwave-root .back-link { border: 0; background: none; color: #9a9aa6; font-size: 13px; padding: 4px 0; cursor: pointer; }
.podwave-root .back-link:hover { color: #e8e8ee; }
.podwave-root .detail-count { color: #6f6f7a; font-size: 12px; }
.podwave-root .episode-view { display: flex; gap: 26px; align-items: flex-start; }
.podwave-root .episode-left { flex: 0 0 240px; width: 240px; display: flex; flex-direction: column; gap: 8px; }
.podwave-root .episode-cover { width: 100%; aspect-ratio: 1 / 1; border-radius: 14px; overflow: hidden; border: 1px solid #26262e; background: #17171d; }
.podwave-root .episode-cover .cover { width: 100% !important; height: 100% !important; object-fit: cover; border-radius: 0; }
.podwave-root .episode-title { margin: 8px 0 0; font-size: 19px; line-height: 1.35; color: #f2f2f5; }
.podwave-root .episode-sub { margin: 0; color: #b9b9c4; font-size: 13px; }
.podwave-root .episode-path { margin: 0; color: #6f6f7a; font-size: 11.5px; word-break: break-all; }
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
.podwave-root .podwave-settings .field-row select option { color: #f2f2f5; background: #2c2c2e; }
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
  grid-template-columns: minmax(0, 1fr);
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
.podwave-root .topbar .tool-btn { display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 11px; border: 1px solid var(--line); border-radius: 9px; background: var(--elev); color: var(--muted); font-size: 12.5px; cursor: pointer; white-space: nowrap; }
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
.podwave-root .jobs-panel { margin: 0 0 16px; border: 1px solid var(--line); border-radius: 12px; background: var(--panel); overflow: hidden; }
.podwave-root .jobs-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.podwave-root .jobs-head h3 { margin: 0; font-size: 13px; font-weight: 600; }
.podwave-root .jobs-body { max-height: 300px; overflow-y: auto; padding: 6px 8px; }
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
.podwave-root .seg-tool { border: 0; background: none; color: #8b8b96; font-size: 12px; padding: 1px 4px; cursor: pointer; border-radius: 4px; }
.podwave-root .seg-tool:hover { color: #e6a54a; background: rgba(230,165,74,.12); }
.podwave-root .seg-edit { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 0; }
.podwave-root .seg-edit textarea { width: 100%; resize: vertical; border: 1px solid #33333d; border-radius: 7px; background: #101015; color: #ececf2; font: inherit; font-size: 13px; line-height: 1.55; padding: 7px 9px; }
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
.podwave-root .row-star.is-on { color: #e6a54a; }
.podwave-root .btn.danger { color: #f08a8a; border-color: rgba(240, 138, 138, 0.35); }

.podwave-root .tr-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 2px 0 8px;
  padding: 7px 10px;
  border: 1px solid #23232b;
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
  background: #e6a54a;
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
`;var e=Je(require("react"),1);var m=Je(require("react"),1);function B({name:a,size:l=18}){let i={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(a){case"play":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),m.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),m.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),m.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return m.default.createElement("svg",{...i},m.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),m.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),m.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),m.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),m.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),m.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var Po=Je(require("react"),1);function ke(a){if(!Number.isFinite(a)||a<0)return"0:00";let l=Math.floor(a),i=Math.floor(l/3600),u=Math.floor(l%3600/60),g=l%60;return i>0?`${i}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function To(a){if(!a)return"\u2014";let l=Math.floor(a/3600),i=Math.round(a%3600/60);return l>0?`${l} \u5C0F\u65F6 ${i} \u5206`:`${Math.max(1,i)} \u5206\u949F`}function Mo(a){if(!a)return"";let l=new Date(a),i=Date.now()-a;return i<60*1e3?"\u521A\u521A":i<3600*1e3?`${Math.floor(i/6e4)} \u5206\u949F\u524D`:i<1440*60*1e3?`${Math.floor(i/36e5)} \u5C0F\u65F6\u524D`:i<10080*60*1e3?`${Math.floor(i/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function et(a){let i=String(a||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return i?i[0].toUpperCase():"\u266B"}function ot(a){let l=String(a).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}var Lt="/podwave/api";function Ve({item:a,size:l=44,className:i=""}){let u={width:l,height:l};return a&&a.hasCover?Po.default.createElement("img",{className:`cover ${i}`,style:u,src:`${Lt}/episodes/${a.id}/cover`,alt:"",loading:"lazy",draggable:!1}):Po.default.createElement("div",{className:`cover cover-fallback ${i}`,style:u,"aria-hidden":!0},et(a&&a.title))}var p=Je(require("react"),1);var tt="/podwave/api";function fo({transcript:a,status:l,progress:i,stage:u,chunks:g,queued:N,elapsed:b,error:V,position:S,onSeek:U,onClose:A,onStart:H,onCancel:y,target:G,job:c,onChangeTarget:ee,onOpenSettings:J,inline:Ee=!1,editingId:oe=null,draft:$e="",onDraftChange:ce,onEditLine:se,onSaveLine:x,onCancelEdit:Ce,onSplitLine:ie,onMergeLine:le,onUndo:X,onValidate:Q,issues:O=[]}){let te=(0,p.useRef)(null),fe=(0,p.useRef)(null),re=a?.lines?.findIndex(v=>S>=v.start&&S<v.end)??-1;(0,p.useEffect)(()=>{if(re<0||!te.current)return;te.current.querySelector(`[data-seg="${re}"]`)?.scrollIntoView({block:"nearest"})},[re]);let ze=l==="queued"||l==="running";return p.default.createElement("section",{className:`transcript-panel ${Ee?"inline":""}`},p.default.createElement("header",{className:"transcript-head"},p.default.createElement("h3",null,"\u5B57\u5E55"),a?p.default.createElement("span",{className:"transcript-meta"},a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines.length," \u884C",a.speakers?.length?` \xB7 ${a.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,p.default.createElement("div",{className:"transcript-actions"},p.default.createElement("select",{className:"tr-select",value:G,onChange:v=>ee(v.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},p.default.createElement("option",{value:""},"\u5BF9\u7167"),p.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),p.default.createElement("option",{value:"en"},"English")),p.default.createElement("button",{className:"mini-link",onClick:J},"\u8BBE\u7F6E"),a?p.default.createElement(p.default.Fragment,null,p.default.createElement("button",{className:"mini-link",onClick:X,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),p.default.createElement("button",{className:"mini-link",onClick:Q,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),p.default.createElement("a",{className:"mini-link",href:`${tt}/episodes/${a.id}/transcript/export?format=srt`,download:!0},"SRT"),p.default.createElement("a",{className:"mini-link",href:`${tt}/episodes/${a.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Ee?null:p.default.createElement("button",{className:"transcript-close",onClick:A,title:"\u6536\u8D77"},"\xD7"))),p.default.createElement("div",{className:"transcript-body",ref:te},a&&ze?p.default.createElement("div",{className:"tr-strip"},p.default.createElement("span",null,l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${a.lines.length} \u884C`),y?p.default.createElement("button",{className:"seg-tool",onClick:y},"\u53D6\u6D88"):null):null,a&&O?.length?p.default.createElement("div",{className:"tr-issues"},O.slice(0,5).map(v=>p.default.createElement("div",{key:v},"\xB7 ",v)),O.length>5?p.default.createElement("div",null,"\u2026\u5171 ",O.length," \u6761"):null):null,c?.status==="running"?p.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,c?.status==="error"?p.default.createElement("div",{className:"tr-running err"},c.error):null,a?a.lines.map((v,ue)=>p.default.createElement("div",{key:v.id,"data-seg":ue,className:`seg-row ${ue===re?"active":""} ${oe===v.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${ke(v.start)}`,onClick:()=>U(v.start),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),U(v.start))}},p.default.createElement("span",{className:"seg-time"},ke(v.start)),oe===v.id?p.default.createElement("span",{className:"seg-edit",onClick:z=>z.stopPropagation()},p.default.createElement("textarea",{ref:fe,value:$e,rows:Math.min(4,Math.max(2,Math.ceil(($e.length||1)/40))),onChange:z=>ce(z.target.value),onKeyDown:z=>{z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&x(v.id),z.key==="Escape"&&Ce()}}),p.default.createElement("span",{className:"seg-edit-actions"},p.default.createElement("button",{className:"seg-tool",onClick:()=>x(v.id)},"\u4FDD\u5B58"),p.default.createElement("button",{className:"seg-tool",onClick:()=>ie(v.id,fe.current?.selectionStart??Math.floor($e.length/2))},"\u62C6\u5206"),p.default.createElement("button",{className:"seg-tool",onClick:Ce},"\u53D6\u6D88"))):p.default.createElement(p.default.Fragment,null,v.speaker!=null?p.default.createElement("span",{className:`seg-speaker spk-${v.speaker%5}`},a.speakers?.[v.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${v.speaker+1}`):null,p.default.createElement("span",{className:"seg-text"},v.text,v.translations?.[G]?p.default.createElement("span",{className:"seg-trans"},v.translations[G]):null),p.default.createElement("span",{className:"seg-tools"},p.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:z=>{z.stopPropagation(),se(v)}},"\u270E"),ue<a.lines.length-1?p.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:z=>{z.stopPropagation(),le(v.id)}},"\u21E3"):null)))):ze?p.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",i?.percent!=null?p.default.createElement("span",{className:"tx-progress"},p.default.createElement("span",{style:{width:`${i.percent}%`}})):null,p.default.createElement("br",null),p.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),p.default.createElement("br",null),y?p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:y},"\u53D6\u6D88\u8F6C\u5199"):null):V?p.default.createElement("div",{className:"transcript-status"},p.default.createElement("span",{className:"err"},V),p.default.createElement("br",null),p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:H},"\u91CD\u8BD5")):p.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",p.default.createElement("br",null),p.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:H},"\u5F00\u59CB\u8F6C\u5199"))))}function rt(a){let l=a.progress?.percent,i=a.chunks?.total?` \xB7 ${a.chunks.done}/${a.chunks.total} \u5757`:"";return a.status==="done"?`\u5B8C\u6210${a.lineCount?` \xB7 ${a.lineCount} \u884C`:""}${a.language?` \xB7 ${a.language}`:""}`:a.status==="error"||a.status==="interrupted"?a.error||"\u5931\u8D25":a.status==="cancelled"?a.error||"\u5DF2\u53D6\u6D88":a.status==="queued"?"\u6392\u961F\u4E2D":`${a.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":a.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":a.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${i}`}var f="/podwave/api",At=[.5,.75,1,1.25,1.5,1.75,2];async function Z(a){let l=await fetch(a);if(!l.ok){let i=await l.json().catch(()=>({}));throw new Error(i.error||l.statusText)}return l.json()}async function q(a,l,i){let u=await fetch(a,{method:l,headers:i?{"Content-Type":"application/json"}:void 0,body:i?JSON.stringify(i):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}function Ot({onSubmit:a,onPick:l,onClose:i}){let[u,g]=(0,e.useState)(""),[N,b]=(0,e.useState)(!1),[V,S]=(0,e.useState)(!1),[U,A]=(0,e.useState)(""),H=(0,e.useRef)(null);return(0,e.useEffect)(()=>{H.current?.focus();let c=ee=>{ee.key==="Escape"&&i()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),e.default.createElement("div",{className:"overlay",onMouseDown:c=>{c.target===c.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async c=>{if(c.preventDefault(),!(!u.trim()||N)){b(!0),A("");try{await a(u.trim()),i()}catch(ee){A(ee.message),b(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!V){S(!0),A("");try{let c=await l();if(c?.canceled)return;if(c?.error)throw new Error(c.error);c?.path&&(await a(c.path),i())}catch(c){A(c.message)}finally{S(!1)}}},disabled:V,autoFocus:!0},V?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:H,value:u,onChange:c=>g(c.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:N||!u.trim()},N?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),U?e.default.createElement("div",{className:"dialog-error"},U):null))}function Bt({config:a,onClose:l,onSave:i}){let[u,g]=(0,e.useState)(a?.provider||"api"),[N,b]=(0,e.useState)(""),[V,S]=(0,e.useState)(!1),[U,A]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:y=>{y.target===y.currentTarget&&l()}},e.default.createElement("form",{className:"dialog",onSubmit:async y=>{y.preventDefault(),S(!0),A("");try{await i({provider:u,apiKey:N||void 0})}catch(G){A(G.message),S(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",a?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:u,onChange:y=>g(y.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:N,onChange:y=>b(y.target.value),placeholder:a?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},a?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),U?e.default.createElement("div",{className:"dialog-error"},U):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:V},"\u4FDD\u5B58"))))}function jo(){let[a,l]=(0,e.useState)([]),[i,u]=(0,e.useState)([]),[g,N]=(0,e.useState)({}),[b,V]=(0,e.useState)({running:!1}),[S,U]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[A,H]=(0,e.useState)(!1),[y,G]=(0,e.useState)(""),[c,ee]=(0,e.useState)("recent"),[J,Ee]=(0,e.useState)("all"),[oe,$e]=(0,e.useState)("all"),[ce,se]=(0,e.useState)(null),[x,Ce]=(0,e.useState)(null),[ie,le]=(0,e.useState)(!1),[X,Q]=(0,e.useState)(0),[O,te]=(0,e.useState)(0),[fe,re]=(0,e.useState)(!0),[ze,v]=(0,e.useState)(!1),[ue,z]=(0,e.useState)(""),[Ge,Xe]=(0,e.useState)(""),[$,W]=(0,e.useState)(null),[F,Se]=(0,e.useState)("none"),[Qe,Ie]=(0,e.useState)(0),[Y,j]=(0,e.useState)(""),[We,he]=(0,e.useState)(!1),[ro,P]=(0,e.useState)(null),[Te,ho]=(0,e.useState)(""),[Le,I]=(0,e.useState)({status:"none"}),[bo,Ae]=(0,e.useState)(!1),[no,ao]=(0,e.useState)(!1),[Oe,Be]=(0,e.useState)(!1),[ne,so]=(0,e.useState)(null),[Ye,io]=(0,e.useState)(!1),[Ke,_e]=(0,e.useState)([]),[n,w]=(0,e.useState)(!1),[C,be]=(0,e.useState)([]),[pe,ge]=(0,e.useState)(null),[Me,xo]=(0,e.useState)(""),[Eo,Io]=(0,e.useState)([]),K=(0,e.useRef)(null),Re=(0,e.useRef)(""),Lo=(0,e.useRef)(null),k=(0,e.useRef)(null),ae=(0,e.useRef)(0),qe=(0,e.useRef)(S),Fe=(0,e.useRef)(0),Ao=(0,e.useRef)(0),Oo=(0,e.useRef)(0),nt=(0,e.useRef)(!1),wo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{qe.current=S},[S]),(0,e.useEffect)(()=>{k.current=x},[x]),(0,e.useEffect)(()=>{ae.current=O},[O]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await Z(`${f}/ui-settings`);!o&&t&&ao(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Bo=(0,e.useCallback)(()=>{ao(o=>{let t=!o;return fetch(`${f}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),h=(0,e.useCallback)(o=>{Xe(o),window.clearTimeout(Oo.current),Oo.current=window.setTimeout(()=>Xe(""),2600)},[]),xe=(0,e.useCallback)(async()=>{let o=await Z(`${f}/episodes`);return l(o.items||[]),u(o.folders||[]),N(o.progress||{}),V(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await Z(`${f}/health`).catch(()=>({}));t.mediaBase&&(Re.current=t.mediaBase);let s=await Z(`${f}/state`);if(o)return;U(s.settings),u(s.folders||[]);let d=await xe();if(o)return;let T=s.settings?.lastEpisodeId,M=T?(d.items||[]).find(je=>je.id===T):null;if(M){Ce(M),te(M.duration||0);let je=d.progress?.[M.id]?.position||0;Fe.current=je>5?je:0,Q(Fe.current);let De=K.current;De&&(De.src=Re.current?`${Re.current}/episodes/${M.id}/audio`:`${f}/episodes/${M.id}/audio`,De.load(),De.playbackRate=s.settings?.rate||1,De.volume=s.settings?.volume??.9)}re(!1),nt.current=!0}catch(t){o||(z(t.message),re(!1))}})(),()=>{o=!0}},[xe]),(0,e.useEffect)(()=>{if(!b.running)return;let o=setInterval(()=>{xe().catch(()=>{})},1500);return()=>clearInterval(o)},[b.running,xe]),(0,e.useEffect)(()=>{let o=!1;return W(null),j(""),Ie(0),x?.id?((async()=>{try{let t=await Z(`${f}/episodes/${x.id}/transcript`);if(o)return;Se(t.status),so(t.status==="queued"||t.status==="running"?t:null),t.status==="done"&&t.transcript?W(t.transcript):t.status==="queued"||t.status==="running"?(Ie(t.elapsedMs||0),t.transcript&&W(t.transcript)):t.status==="error"&&j(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||j(t.message)}})(),()=>{o=!0}):(Se("none"),()=>{o=!0})},[x?.id]),(0,e.useEffect)(()=>{Z(`${f}/translate/settings`).then(P).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(F!=="queued"&&F!=="running")return;let o=!1,t=setInterval(async()=>{let s=k.current?.id;if(s)try{let d=await Z(`${f}/episodes/${s}/transcript`);if(o)return;Se(d.status),so(d.status==="queued"||d.status==="running"?d:null),Ie(d.elapsedMs||0),(d.status==="queued"||d.status==="running")&&d.transcript?W(d.transcript):d.status==="done"&&d.transcript?(W(d.transcript),he(!0),h("\u8F6C\u5199\u5B8C\u6210")):d.status==="error"&&j(d.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[F,h]),(0,e.useEffect)(()=>{if(Le.status!=="running")return;let o=!1,t=setInterval(async()=>{let s=k.current?.id;if(s)try{let d=await Z(`${f}/episodes/${s}/translate?target=${Te}`);if(o)return;if(I(d),d.status==="done"){let T=await Z(`${f}/episodes/${s}/transcript`);!o&&T.transcript&&W(T.transcript),h("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[Le.status,Te,h]),(0,e.useEffect)(()=>{let o=!1,t=async()=>{try{let d=await Z(`${f}/jobs`);o||_e(d.items||[])}catch{}};t();let s=setInterval(t,2500);return()=>{o=!0,clearInterval(s)}},[]);let Pe=(0,e.useCallback)((o,t,s,d=!1)=>{if(!o)return;let T=Date.now();!d&&T-Ao.current<4e3||(Ao.current=T,q(`${f}/progress/${o}`,"PUT",{position:t,duration:s}).catch(()=>{}),N(M=>({...M,[o]:{position:t,duration:s,updatedAt:T}})))},[]),we=(0,e.useCallback)(o=>{U(t=>({...t,...o})),q(`${f}/settings`,"PATCH",o).catch(()=>{})},[]),eo=(0,e.useCallback)(async()=>{if(k.current){j(""),he(!0);try{let o=await q(`${f}/episodes/${k.current.id}/transcribe`,"POST",{});Se(o.status||"queued")}catch(o){j(o.message)}}},[]),at=(0,e.useCallback)(()=>{if($){he(o=>!o);return}if(F==="queued"||F==="running"){he(!0);return}eo()},[$,F,eo]),yo=(0,e.useCallback)(async()=>{if(k.current)try{await q(`${f}/episodes/${k.current.id}/transcribe/cancel`,"POST",{}),h("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(o){j(o.message)}},[h]),ko=(0,e.useCallback)(async(o,t)=>{try{t==="cancel"?await q(`${f}/episodes/${o.episodeId}/transcribe/cancel`,"POST",{}):t==="retry"?await q(`${f}/episodes/${o.episodeId}/transcribe`,"POST",{resume:!0}):t==="clear"&&await q(`${f}/jobs`,"DELETE",{key:o.key})}catch{}let s=await Z(`${f}/jobs`).catch(()=>({items:[]}));_e(s.items||[])},[]),lo=(0,e.useCallback)(async o=>{let t=[...new Set(o)];if(t.length)try{let s=await q(`${f}/transcribe/batch`,"POST",{ids:t});h(`\u5DF2\u6392\u961F ${s.queued} \u96C6${s.skipped?`\uFF0C\u8DF3\u8FC7 ${s.skipped} \u96C6`:""}${s.errors?.length?`\uFF0C\u5931\u8D25 ${s.errors.length} \u96C6`:""}`),be([]),w(!1)}catch(s){h(s.message)}},[h]),st=(0,e.useCallback)(o=>{be(t=>t.includes(o)?t.filter(s=>s!==o):[...t,o])},[]),ye=(0,e.useCallback)(async(o,t,s)=>{try{let d=await q(`${f}${o}`,t,s||{});return d?.transcript&&W(d.transcript),d}catch(d){return h(d.message),null}},[h]),Ko=(0,e.useCallback)(o=>{ge(o.id),xo(o.text),Io([])},[]),qo=(0,e.useCallback)(async o=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${o??pe}`,"PUT",{text:Me})&&(ge(null),h("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,pe,Me,ye,h]),Fo=(0,e.useCallback)(async(o,t)=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${o??pe}/split`,"POST",{offset:t})&&(ge(null),h("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,pe,ye,h]),Uo=(0,e.useCallback)(async o=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${o}/merge`,"POST",{})&&h("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,ye,h]),Ho=(0,e.useCallback)(async()=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/undo`,"POST",{})&&h("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,ye,h]),Jo=(0,e.useCallback)(async()=>{if($)try{let o=await Z(`${f}/episodes/${$.id}/transcript/validate`);Io(o.issues||[]),h(o.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(o.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(o){h(o.message)}},[$,h]),po=(0,e.useCallback)(async()=>{let o=k.current?.id;if(!o)return;let t=await Z(`${f}/episodes/${o}/transcript`);t.transcript&&W(t.transcript)},[]),Vo=(0,e.useCallback)(async o=>{if(k.current?.id){I({status:"running"});try{let t=await q(`${f}/episodes/${k.current.id}/translate`,"POST",{target:o});I(t),t.status==="done"&&(await po(),h("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){I({status:"error",error:t.message})}}},[po,h]),Zo=(0,e.useCallback)(async o=>{if(ho(o),!o)return;if($?.lines?.some(s=>s.translations?.[o])){I({status:"done"}),await po();return}await Vo(o)},[$,Vo,po]),it=o=>{let t=!o.favorite;l(s=>s.map(d=>d.id===o.id?{...d,favorite:t}:d)),q(`${f}/episodes/${o.id}/favorite`,"PUT",{favorite:t}).catch(s=>h(s.message))},Go=async o=>{if(o.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${o.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let t of o)try{await fetch(`${f}/episodes/${t}`,{method:"DELETE"})}catch{}l(t=>t.filter(s=>!o.includes(s.id))),be([]),o.includes(ce)&&se(null),h(`\u5DF2\u79FB\u9664 ${o.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},_=(0,e.useMemo)(()=>{let o=[...a];return c==="title"?o.sort((t,s)=>t.title.localeCompare(s.title,"zh-Hans-CN")):c==="duration"?o.sort((t,s)=>(s.duration||0)-(t.duration||0)):o.sort((t,s)=>s.mtime-t.mtime),o},[a,c]),me=(0,e.useMemo)(()=>{let o=y.trim().toLowerCase();return _.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let d=g[t.id]?.position||0,T=t.duration||0,M=T?d/T:0;return J==="inprogress"?d>5&&M<.97:J==="finished"?M>=.97:oe==="unheard"?d<=5:oe==="transcribed"?!!t.hasTranscript:oe==="favorites"?!!t.favorite:!0})},[_,y,J,oe,g]),Xo=(0,e.useMemo)(()=>Ke.filter(o=>o.status==="queued"||o.status==="running"),[Ke]),Ue=(0,e.useMemo)(()=>me.filter(o=>!o.hasTranscript),[me]),No=(0,e.useMemo)(()=>a.filter(o=>{let t=g[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(g[t.id]?.updatedAt||0)-(g[o.id]?.updatedAt||0)).slice(0,4),[a,g]),lt=(0,e.useMemo)(()=>a.reduce((o,t)=>o+(t.duration||0),0),[a]),pt=Math.round(lt/3600*10)/10,dt=J==="inprogress"?"\u7EE7\u7EED\u6536\u542C":J==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",L=ce?a.find(o=>o.id===ce)||(x?.id===ce?x:null):null,ct=fe?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${me.length} \u96C6 \xB7 \u5171 ${pt} \u5C0F\u65F6 \xB7 ${i.length} \u4E2A\u6587\u4EF6\u5939`,Zt=(0,e.useMemo)(()=>x?_.findIndex(o=>o.id===x.id):-1,[_,x]),He=(0,e.useCallback)(()=>{let o=K.current;if(o){if(!k.current){let t=me[0]||_[0];t&&oo(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[me,_]),oo=(0,e.useCallback)((o,t=!0)=>{let s=K.current;if(!s||!o)return;if(k.current&&k.current.id===o.id){t&&He();return}k.current&&!s.ended&&s.currentTime>1&&Pe(k.current.id,s.currentTime,s.duration||ae.current,!0),k.current=o,Ce(o),se(M=>M&&o.id),te(o.duration||0);let d=g[o.id]?.position||0,T=d>5&&(!o.duration||d<o.duration-10)?d:0;Fe.current=T,Q(T),s.src=Re.current?`${Re.current}/episodes/${o.id}/audio`:`${f}/episodes/${o.id}/audio`,s.load(),s.playbackRate=qe.current.rate||1,s.volume=qe.current.volume??.9,t&&s.play().catch(()=>{}),we({lastEpisodeId:o.id})},[g,Pe,we,He]),Qo=(0,e.useCallback)((o,t=!0)=>{o&&(oo(o,t),se(o.id))},[oo]),ve=(0,e.useCallback)(o=>{let t=K.current;if(!t||!k.current)return;let s=Number(o);if(!Number.isFinite(s))return;let d=Number(ae.current)||0,T=Number.isFinite(t.duration)&&t.duration>0?t.duration:d,M=Math.max(0,T>0?Math.min(s,T):s);try{t.currentTime=M}catch{Fe.current=M;return}Q(M),Pe(k.current.id,M,T||d,!0)},[Pe]),Wo=(0,e.useCallback)(o=>{let t=Lo.current;if(!t)return null;let s=t.getBoundingClientRect();return s.width?Math.min(1,Math.max(0,(o.clientX-s.left)/s.width)):null},[]),co=(0,e.useCallback)(o=>{let t=Wo(o),s=Number.isFinite(ae.current)&&ae.current>0?ae.current:Number.isFinite(K.current?.duration)?K.current.duration:0;t==null||!s||ve(t*s)},[Wo,ve]),ut=(0,e.useCallback)(o=>{o.preventDefault(),wo.current=!0;try{o.currentTarget.setPointerCapture(o.pointerId)}catch{}co(o)},[co]),gt=(0,e.useCallback)(o=>{wo.current&&co(o)},[co]),Yo=(0,e.useCallback)(o=>{wo.current=!1;try{o.currentTarget.releasePointerCapture(o.pointerId)}catch{}},[]),mt=(0,e.useCallback)(o=>{let t=K.current;if(!t)return;let s=o.shiftKey?30:5;o.key==="ArrowLeft"&&(o.preventDefault(),ve((t.currentTime||0)-s)),o.key==="ArrowRight"&&(o.preventDefault(),ve((t.currentTime||0)+s)),o.key==="Home"&&(o.preventDefault(),ve(0)),o.key==="End"&&(o.preventDefault(),ve(Number.isFinite(t.duration)?t.duration:0))},[ve]),to=(0,e.useCallback)(o=>{let t=K.current;if(!t||!k.current)return;let s=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||ae.current||0)-1));t.currentTime=s,Q(s)},[]),$o=(0,e.useCallback)(o=>{if(!_.length)return;let s=((k.current?_.findIndex(d=>d.id===k.current.id):-1)+o+_.length)%_.length;oo(_[s],!0)},[_,oo]),vt=(0,e.useCallback)(o=>{let t=K.current;t&&(t.playbackRate=o),we({rate:o}),H(!1)},[we]);(0,e.useEffect)(()=>{if(!A)return;let o=t=>{t.type==="keydown"&&t.key!=="Escape"||t.type==="pointerdown"&&t.target.closest?.(".rate-wrap")||H(!1)};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",o),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",o)}},[A]);let uo=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),s=K.current;s&&(s.volume=t),we({volume:t})},[we]),ft=(0,e.useCallback)(()=>{let o=K.current,t=qe.current.volume>0?0:.9;o&&(o.volume=t),we({volume:t})},[we]),ht=()=>{let o=K.current;!o||!k.current||(Q(o.currentTime),Pe(k.current.id,o.currentTime,o.duration||ae.current))},bt=()=>{let o=K.current,t=k.current;if(!o||!t)return;let s=Number.isFinite(o.duration)?o.duration:t.duration||0;te(s);let d=Fe.current;Fe.current=0,d>0&&d<s-1&&(o.currentTime=d,Q(d))},xt=()=>{let o=K.current;k.current&&Pe(k.current.id,o?.duration||ae.current||0,o?.duration||ae.current||0,!0),$o(1)},wt=async o=>{await q(`${f}/folders`,"POST",{path:o}),await xe(),h("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},yt=async()=>{let o=await fetch(`${f}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},kt=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),Oe||Be(!0))},Nt=o=>{o.currentTarget.contains(o.relatedTarget)||Be(!1)},$t=async o=>{o.preventDefault(),Be(!1);let t=o.dataTransfer,s=[...t?.files||[]],d=s.map(D=>D.path).filter(D=>typeof D=="string"&&D),T=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(D=>D.trim()).filter(D=>D.startsWith("file://")).map(D=>decodeURIComponent(D.replace(/^file:\/\//,""))),M=[...new Set([...d,...T])];if(M.length){try{let D=await q(`${f}/import/paths`,"POST",{paths:M});await xe(),h(D.added?`\u5DF2\u6DFB\u52A0 ${D.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(D){z(D.message)}return}let je=s.filter(D=>D.size>0);if(!je.length){h("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let De=`drop-${Date.now()}`,go="",So=0;for(let D of je)try{let _o=await fetch(`${f}/import/upload?name=${encodeURIComponent(D.name)}&batch=${De}`,{method:"POST",body:D}),zt=await _o.json();_o.ok&&(go=zt.folder||go,So+=1)}catch{}if(go)try{await q(`${f}/folders`,"POST",{path:go})}catch{}await xe(),h(So?`\u5DF2\u5BFC\u5165 ${So} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Ct=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await q(`${f}/folders`,"DELETE",{path:o}),await xe(),h("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){z(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let s=t.target?.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),He()):t.key==="ArrowRight"?(t.preventDefault(),to(15)):t.key==="ArrowLeft"?(t.preventDefault(),to(-15)):t.key==="ArrowUp"?(t.preventDefault(),uo(qe.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),uo(qe.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[He,to,uo]);let Co=o=>{let t=g[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},zo=o=>{let t=g[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${no?"nav-collapsed":""}`,onDragOver:kt,onDragLeave:Nt,onDrop:$t},Oe?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,no?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Bo},e.default.createElement(B,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(B,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.10"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Bo},e.default.createElement(B,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",a.length],["inprogress","\u7EE7\u7EED\u6536\u542C",No.length],["finished","\u5DF2\u64AD\u5B8C",a.filter(Co).length]].map(([o,t,s])=>e.default.createElement("button",{key:o,className:`nav-item ${J===o?"active":""}`,onClick:()=>Ee(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},s||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>v(!0)},e.default.createElement(B,{name:"plus",size:16}))),i.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},i.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(B,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},ot(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>Ct(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,dt),e.default.createElement("p",{className:"subline"},ct)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${Ye?"is-on":""}`,onClick:()=>io(o=>!o),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(B,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Xo.length?` ${Xo.length}`:"")),e.default.createElement("button",{className:`tool-btn ${n?"is-on":""}`,onClick:()=>{w(o=>!o),be([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(B,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(B,{name:"search",size:16}),e.default.createElement("input",{value:y,onChange:o=>G(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:c,onChange:o=>ee(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),n?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",C.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>be(me.map(o=>o.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Ue.length,onClick:()=>lo(Ue.map(o=>o.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Ue.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!C.length,onClick:()=>lo(C)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!C.length,onClick:()=>Go(C)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{be([]),w(!1)}},"\u53D6\u6D88")):null,ue?e.default.createElement("div",{className:"banner error",onClick:()=>z("")},ue," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,L?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>se(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},L.artist,L.album?` \xB7 ${L.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ve,{item:L,size:288})),e.default.createElement("h2",{className:"episode-title"},L.title),e.default.createElement("p",{className:"episode-sub"},L.artist,L.album?` \xB7 ${L.album}`:""),e.default.createElement("p",{className:"episode-path",title:L.file},L.location||L.file),e.default.createElement("p",{className:"episode-stats"},To(L.duration)," \xB7 ",Mo(L.mtime)," \xB7 \u5DF2\u542C ",Math.round(zo(L)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:He},ie&&x?.id===L.id?"\u6682\u505C":"\u64AD\u653E"),F==="queued"||F==="running"?e.default.createElement("button",{className:"btn ghost",onClick:yo},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:eo},$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Go([L.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(fo,{inline:!0,transcript:$,status:F,progress:ne?.progress,stage:ne?.stage,chunks:ne?.chunks,queued:ne?.queued,elapsed:Qe,editingId:pe,draft:Me,onDraftChange:xo,onEditLine:Ko,onSaveLine:qo,onCancelEdit:()=>ge(null),onSplitLine:Fo,onMergeLine:Uo,onUndo:Ho,onValidate:Jo,issues:Eo,onCancel:yo,error:Y,position:X,onSeek:ve,onClose:()=>se(null),onStart:eo,target:Te,job:Le,onChangeTarget:Zo,onOpenSettings:()=>Ae(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([o,t])=>e.default.createElement("button",{key:o,className:`chip ${oe===o?"is-on":""}`,onClick:()=>$e(o)},t))),J==="all"&&!y&&No.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},No.map(o=>{let t=zo(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${x?.id===o.id?"is-current":""}`,onClick:()=>Qo(o,!0)},e.default.createElement(Ve,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),fe?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):me.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,a.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},a.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),a.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>v(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},me.map((o,t)=>{let s=zo(o),d=x?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${d?"is-current":""} ${Co(o)?"is-finished":""} ${n&&C.includes(o.id)?"is-selected":""}`,onClick:()=>n?st(o.id):Qo(o,!0)},e.default.createElement("span",{className:"col-index row-index"},n?C.includes(o.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(B,{name:"check",size:14})):null:d&&ie?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ve,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",Mo(o.mtime),o.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},To(o.duration)),e.default.createElement("span",{className:`row-star ${o.favorite?"is-on":""}`,role:"button",title:o.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:T=>{T.stopPropagation(),it(o)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},Co(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(B,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):s>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${s}%`}})):null))}))))),We&&x&&!L?e.default.createElement(fo,{transcript:$,status:F,progress:ne?.progress,stage:ne?.stage,chunks:ne?.chunks,queued:ne?.queued,elapsed:Qe,editingId:pe,draft:Me,onDraftChange:xo,onEditLine:Ko,onSaveLine:qo,onCancelEdit:()=>ge(null),onSplitLine:Fo,onMergeLine:Uo,onUndo:Ho,onValidate:Jo,issues:Eo,onCancel:yo,error:Y,position:X,onSeek:ve,onClose:()=>he(!1),onStart:eo,target:Te,job:Le,onChangeTarget:Zo,onOpenSettings:()=>Ae(!0)}):null,Ye?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>io(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Ke.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ke.map(o=>e.default.createElement("div",{key:o.key,className:`job-row job-${o.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},o.episodeTitle||o.episodeId),e.default.createElement("span",{className:"job-meta"},rt(o)),o.status==="running"&&o.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${o.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},o.status==="queued"||o.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>ko(o,"cancel")},"\u53D6\u6D88"):null,o.status==="error"||o.status==="interrupted"||o.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>ko(o,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(o.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>ko(o,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Ue.length,onClick:()=>lo(Ue.map(o=>o.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Ue.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!C.length,onClick:()=>lo(C)},"\u8F6C\u5199\u5DF2\u9009 ",C.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:Lo,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(O||0),"aria-valuenow":Math.round(X||0),"aria-valuetext":`${ke(X)} / ${ke(O)}`,onPointerDown:ut,onPointerMove:gt,onPointerUp:Yo,onPointerCancel:Yo,onKeyDown:mt},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${O?Math.min(100,Math.max(0,X/O*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${O?Math.min(100,Math.max(0,X/O*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},x?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ve,{item:x,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:x.title},x.title),e.default.createElement("div",{className:"now-artist"},x.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>$o(-1)},e.default.createElement(B,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>to(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:He,disabled:!x&&me.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(B,{name:ie?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>to(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>$o(1)},e.default.createElement(B,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${We?"active":""}`,onClick:at,disabled:!x,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(B,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":F==="queued"||F==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},ke(X)," / ",ke(O)),e.default.createElement("span",{className:"rate-wrap"},e.default.createElement("button",{className:"rate-btn",onClick:()=>H(o=>!o),title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":A},S.rate,"\xD7"),A?e.default.createElement("span",{className:"rate-menu",role:"menu"},At.map(o=>e.default.createElement("button",{key:o,type:"button",role:"menuitemradio","aria-checked":o===S.rate,className:o===S.rate?"is-on":"",onClick:()=>vt(o)},o,"\xD7"))):null),e.default.createElement("button",{className:"icon-btn",onClick:ft,title:"\u9759\u97F3"},e.default.createElement(B,{name:S.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:S.volume,onChange:o=>uo(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),ze?e.default.createElement(Ot,{onClose:()=>v(!1),onSubmit:wt,onPick:yt}):null,bo?e.default.createElement(Bt,{config:ro,onClose:()=>Ae(!1),onSave:async o=>{let t=await q(`${f}/translate/settings`,"PUT",o);P(t),Ae(!1),h("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,Ge?e.default.createElement("div",{className:"toast"},Ge):null,e.default.createElement("audio",{ref:K,preload:"metadata",onPlay:()=>le(!0),onPause:()=>{le(!1);let o=K.current;k.current&&o&&o.currentTime>0&&!o.ended&&Pe(k.current.id,o.currentTime,o.duration||ae.current,!0)},onTimeUpdate:ht,onLoadedMetadata:bt,onEnded:xt,onError:()=>{le(!1),h("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var r=Je(require("react"),1);var E="/podwave/api";async function R(a){let l=await fetch(a),i=await l.json().catch(()=>({}));if(!l.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return i}async function Ne(a,l,i){let u=await fetch(a,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(i??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function Kt(a){let l=Math.max(0,Math.round(Number(a)||0)),i=Math.floor(l/3600),u=Math.floor(l%3600/60);return i>0?`${i} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function Ze(a){let l=Number(a)||0;return l?l<1024**2?`${Math.round(l/1024)} KB`:l<1024**3?`${(l/1024**2).toFixed(1)} MB`:`${(l/1024**3).toFixed(1)} GB`:"0 B"}function qt(a){if(!a)return"";let l=new Date(a),i=u=>String(u).padStart(2,"0");return`${l.getFullYear()}-${i(l.getMonth()+1)}-${i(l.getDate())} ${i(l.getHours())}:${i(l.getMinutes())}`}function Do(){let[a,l]=(0,r.useState)([]),[i,u]=(0,r.useState)([]),[g,N]=(0,r.useState)({asrModel:"",translateModel:""}),[b,V]=(0,r.useState)(null),[S,U]=(0,r.useState)(null),[A,H]=(0,r.useState)({showSidebarPanel:!0}),[y,G]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[c,ee]=(0,r.useState)(null),[J,Ee]=(0,r.useState)(null),[oe,$e]=(0,r.useState)(null),[ce,se]=(0,r.useState)(!1),[x,Ce]=(0,r.useState)("auto"),[ie,le]=(0,r.useState)(!1),[X,Q]=(0,r.useState)(""),[O,te]=(0,r.useState)(15),[fe,re]=(0,r.useState)(!0),[ze,v]=(0,r.useState)("api"),[ue,z]=(0,r.useState)("https://api.deepseek.com"),[Ge,Xe]=(0,r.useState)("deepseek-chat"),[$,W]=(0,r.useState)(""),[F,Se]=(0,r.useState)(""),[Qe,Ie]=(0,r.useState)(""),[Y,j]=(0,r.useState)(""),[We,he]=(0,r.useState)(""),[ro,P]=(0,r.useState)(""),Te=(0,r.useCallback)(async()=>{try{let[n,w,C,be,pe,ge,Me]=await Promise.all([R(`${E}/history`),R(`${E}/models`),R(`${E}/translate/settings`),R(`${E}/ui-settings`),R(`${E}/transcribe/settings`),R(`${E}/import/settings`),R(`${E}/setup`)]);ee(Me),Me?.job?.status==="running"&&le(!0),G({mode:ge.mode||"copy",orphans:ge.orphans||0,orphanBytes:ge.orphanBytes||0}),H({showSidebarPanel:be?.showSidebarPanel!==!1}),Q((pe.hotwords||[]).join(" ")),te(pe.chunkMinutes||15),re(pe.diarize!==!1),l(n.items||[]),u(w.models||[]),N(w.config||{asrModel:"",translateModel:""}),V(w.transcribe||null),Se(w.config?.asrModel||""),Ie(w.config?.translateModel||""),U(C),v(C.provider||"api"),z(C.apiBase||"https://api.deepseek.com"),Xe(C.apiModel||"deepseek-chat"),W(""),P("")}catch(n){P(n.message)}},[]);(0,r.useEffect)(()=>{Te()},[Te]),(0,r.useEffect)(()=>{let n=!1;return R(`${E}/setup/plan?source=${x}`).then(w=>{n||Ee(w)}).catch(()=>{}),()=>{n=!0}},[x,c?.job?.status]),(0,r.useEffect)(()=>{if(!ie&&c?.job?.status!=="running")return;let n=window.setInterval(async()=>{try{let w=await R(`${E}/setup`);ee(w),w.job?.status!=="running"&&le(!1)}catch{}},2500);return()=>window.clearInterval(n)},[ie,c?.job?.status]);let ho=async()=>{P(""),le(!0);try{await Ne(`${E}/setup/install`,"POST",{source:x});let n=await R(`${E}/setup`);ee(n),I("\u5F00\u59CB\u5B89\u88C5")}catch(n){le(!1),P(n.message)}},Le=async()=>{try{await Ne(`${E}/setup/cancel`,"POST",{}),I("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(n){P(n.message)}},I=n=>{he(n),window.setTimeout(()=>he(""),2400)},bo=async()=>{se(!0);try{let n=await R(`${E}/setup/verify`);$e(n),I(n.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(n){I(n.message||"\u68C0\u67E5\u5931\u8D25")}finally{se(!1)}},Ae=async()=>{try{let n=await R(`${E}/setup/diagnose`),w=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(w)}catch{let C=document.createElement("textarea");C.value=w,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}I("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(n){I(n.message||"\u590D\u5236\u5931\u8D25")}},no=async()=>{j("api"),P("");try{let n={provider:ze,apiBase:ue,apiModel:Ge};$.trim()&&(n.apiKey=$.trim());let w=await Ne(`${E}/translate/settings`,"PUT",n);U(w),W(""),I("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){P(n.message)}finally{j("")}},ao=async()=>{j("models"),P("");try{let n=await Ne(`${E}/models`,"PUT",{asrModel:F,translateModel:Qe});N(n.config),u(n.models||[]),V(n.transcribe||null),I("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(n){P(n.message)}finally{j("")}},Oe=i.length?i:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:b?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:S?.localReady}],Be=Oe.filter(n=>/asr/i.test(n.name)&&n.ready!==!1),ne=Oe.filter(n=>!/asr|diarization/i.test(n.name)&&n.ready!==!1),so=async()=>{j("ui"),P("");try{let n=await Ne(`${E}/ui-settings`,"PUT",{showSidebarPanel:A.showSidebarPanel});H({showSidebarPanel:n.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:n})),I("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){P(n.message)}finally{j("")}},Ye=async n=>{j("import"),P("");try{let w=await Ne(`${E}/import/settings`,"PUT",{mode:n});G(C=>({...C,mode:w.mode})),I("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(w){P(w.message)}finally{j("")}},io=async()=>{if(y.orphans&&window.confirm(`\u6E05\u7406 ${y.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){j("imports"),P("");try{let n=await Ne(`${E}/imports/orphans`,"DELETE",{});G(w=>({...w,orphans:0,orphanBytes:0})),I(`\u5DF2\u6E05\u7406 ${n.removed||0} \u4E2A\u6279\u6B21`)}catch(n){P(n.message)}finally{j("")}}},Ke=async()=>{j("transcribe"),P("");try{let n=X.split(/[\s,，、]+/).map(C=>C.trim()).filter(Boolean).slice(0,500),w=await Ne(`${E}/transcribe/settings`,"PUT",{hotwords:n,chunkMinutes:Math.min(60,Math.max(1,Number(O)||15)),diarize:fe});Q((w.hotwords||[]).join(" ")),te(w.chunkMinutes||15),re(w.diarize!==!1),I("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){P(n.message)}finally{j("")}},_e=Oe;return r.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,vo),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),ro?r.default.createElement("div",{className:"banner error",onClick:()=>P("")},ro):null,We?r.default.createElement("div",{className:"settings-message"},We):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),c?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},c.platform?.osLabel," \xB7 ",c.platform?.arch," \xB7 ",c.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",c.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",c.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:Ae},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:ce,onClick:bo},ce?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),oe?r.default.createElement("ul",{className:"setup-components"},oe.checks.map(n=>r.default.createElement("li",{key:n.id,className:n.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},n.label),r.default.createElement("span",{className:"setup-component-detail"},n.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(c.components||[]).map(n=>r.default.createElement("li",{key:n.id,className:n.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},n.label),r.default.createElement("span",{className:"setup-component-detail"},n.detail),!n.ready&&n.bytes?r.default.createElement("span",{className:"setup-component-size"},Ze(n.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:x,onChange:n=>Ce(n.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),J?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Ze(J.totalBytes)," \xB7 ",J.items.length," \u9879"),r.default.createElement("ul",null,J.items.map(n=>r.default.createElement("li",{key:n.id},r.default.createElement("span",null,n.label),r.default.createElement("span",null,n.bytes?Ze(n.bytes):n.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:ie||c.job?.status==="running",onClick:ho},ie||c.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),c.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:Le},"\u53D6\u6D88"):null),c.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,c.job.stage||c.job.status),r.default.createElement("span",null,c.job.progress||0,"% \xB7 ",Ze(c.job.bytes)," / ",Ze(c.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${c.job.progress||0}%`}})),c.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",c.job.error):null,c.job.status==="done"&&(!c.job.summary||!c.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(c.job.summary)&&c.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},c.job.summary.map(n=>r.default.createElement("li",{key:n.id},n.label," \xB7 ",Ze(n.bytes),n.source?` \xB7 ${n.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",a.length," \u6761\u3002"),a.length?r.default.createElement("ul",{className:"history-list"},a.map(n=>r.default.createElement("li",{key:n.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},n.title),r.default.createElement("span",{className:"history-meta"},n.artist?`${n.artist} \xB7 `:"",n.duration?`${Kt(n.duration)} \xB7 `:"",n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines," \u884C",n.translations?.length?` \xB7 \u5DF2\u7FFB ${n.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},qt(n.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:X,onChange:n=>Q(n.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:O,onChange:n=>te(n.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:fe,onChange:n=>re(n.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Ke,disabled:Y==="transcribe"},Y==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:y.mode==="copy",onChange:()=>Ye("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:y.mode==="reference",onChange:()=>Ye("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:io,disabled:Y==="imports"||!y.orphans},y.orphans?`\u6E05\u7406 ${y.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(y.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:ze,onChange:n=>v(n.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:ue,onChange:n=>z(n.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:Ge,onChange:n=>Xe(n.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:$,onChange:n=>W(n.target.value),placeholder:S?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${S.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:no,disabled:Y==="api"},Y==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},S?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:A.showSidebarPanel,onChange:n=>H({showSidebarPanel:n.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:so,disabled:Y==="ui"},Y==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:F,onChange:n=>Se(n.target.value)},(Be.length?Be:_e).map(n=>r.default.createElement("option",{key:n.name,value:n.name},n.name,n.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},b?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Qe,onChange:n=>Ie(n.target.value)},(ne.length?ne:_e).map(n=>r.default.createElement("option",{key:n.name,value:n.name},n.name,n.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},S?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:ao,disabled:Y==="models"},Y==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Ft({size:a=16}){return de.default.createElement("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},de.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),de.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),de.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ut(){return de.default.createElement("div",{className:"podwave-root"},de.default.createElement("style",null,vo),de.default.createElement(jo,null))}function Ht(a){a.slots.inject("main",()=>a.slots.register({name:"main",key:"podwave"},Ut)),a.slots.inject("settings.section",()=>a.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Do));let l=null,i="podwave-hide-nav",u=N=>{if(typeof document>"u")return;let b=document.getElementById(i);N&&!b?(b=document.createElement("style"),b.id=i,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!N&&b&&b.remove()},g=N=>{if(u(!N),N&&!l)l=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Ft);else if(!N&&l){let b=l;l=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(N=>N.ok?N.json():null).then(N=>g(N?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",N=>{g(N?.detail?.showSidebarPanel!==!1)})}var Jt=["slots"];

return module.exports}})
