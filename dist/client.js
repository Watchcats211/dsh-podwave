window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Co=Object.create;var ut=Object.defineProperty;var zo=Object.getOwnPropertyDescriptor;var So=Object.getOwnPropertyNames;var To=Object.getPrototypeOf,Mo=Object.prototype.hasOwnProperty;var Po=(a,l)=>{for(var i in l)ut(a,i,{get:l[i],enumerable:!0})},Qt=(a,l,i,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let g of So(l))!Mo.call(a,g)&&g!==i&&ut(a,g,{get:()=>l[g],enumerable:!(u=zo(l,g))||u.enumerable});return a};var Ue=(a,l,i)=>(i=a!=null?Co(To(a)):{},Qt(l||!a||!a.__esModule?ut(i,"default",{value:a,enumerable:!0}):i,a)),jo=a=>Qt(ut({},"__esModule",{value:!0}),a);var Uo={};Po(Uo,{apply:()=>qo,inject:()=>Fo});module.exports=jo(Uo);var de=Ue(require("react"),1);var gt=`.podwave-root {
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
`;var e=Ue(require("react"),1);var m=Ue(require("react"),1);function O({name:a,size:l=18}){let i={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(a){case"play":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),m.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),m.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),m.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return m.default.createElement("svg",{...i},m.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),m.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return m.default.createElement("svg",{...i,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),m.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),m.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),m.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),m.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return m.default.createElement("svg",{...i},m.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var zt=Ue(require("react"),1);function Ne(a){if(!Number.isFinite(a)||a<0)return"0:00";let l=Math.floor(a),i=Math.floor(l/3600),u=Math.floor(l%3600/60),g=l%60;return i>0?`${i}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function $t(a){if(!a)return"\u2014";let l=Math.floor(a/3600),i=Math.round(a%3600/60);return l>0?`${l} \u5C0F\u65F6 ${i} \u5206`:`${Math.max(1,i)} \u5206\u949F`}function Ct(a){if(!a)return"";let l=new Date(a),i=Date.now()-a;return i<60*1e3?"\u521A\u521A":i<3600*1e3?`${Math.floor(i/6e4)} \u5206\u949F\u524D`:i<1440*60*1e3?`${Math.floor(i/36e5)} \u5C0F\u65F6\u524D`:i<10080*60*1e3?`${Math.floor(i/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function Wt(a){let i=String(a||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return i?i[0].toUpperCase():"\u266B"}function Yt(a){let l=String(a).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}var Io="/podwave/api";function He({item:a,size:l=44,className:i=""}){let u={width:l,height:l};return a&&a.hasCover?zt.default.createElement("img",{className:`cover ${i}`,style:u,src:`${Io}/episodes/${a.id}/cover`,alt:"",loading:"lazy",draggable:!1}):zt.default.createElement("div",{className:`cover cover-fallback ${i}`,style:u,"aria-hidden":!0},Wt(a&&a.title))}var p=Ue(require("react"),1);var _t="/podwave/api";function mt({transcript:a,status:l,progress:i,stage:u,chunks:g,queued:k,elapsed:x,error:J,position:T,onSeek:F,onClose:A,onStart:Z,onCancel:w,target:G,job:d,onChangeTarget:te,onOpenSettings:X,inline:Le=!1,editingId:se=null,draft:oe="",onDraftChange:N,onEditLine:Ce,onSaveLine:re,onCancelEdit:ve,onSplitLine:U,onMergeLine:V,onUndo:H,onValidate:ce,issues:ie=[]}){let le=(0,p.useRef)(null),ze=(0,p.useRef)(null),Q=a?.lines?.findIndex(v=>T>=v.start&&T<v.end)??-1;(0,p.useEffect)(()=>{if(Q<0||!le.current)return;le.current.querySelector(`[data-seg="${Q}"]`)?.scrollIntoView({block:"nearest"})},[Q]);let fe=l==="queued"||l==="running";return p.default.createElement("section",{className:`transcript-panel ${Le?"inline":""}`},p.default.createElement("header",{className:"transcript-head"},p.default.createElement("h3",null,"\u5B57\u5E55"),a?p.default.createElement("span",{className:"transcript-meta"},a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines.length," \u884C",a.speakers?.length?` \xB7 ${a.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,p.default.createElement("div",{className:"transcript-actions"},p.default.createElement("select",{className:"tr-select",value:G,onChange:v=>te(v.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},p.default.createElement("option",{value:""},"\u5BF9\u7167"),p.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),p.default.createElement("option",{value:"en"},"English")),p.default.createElement("button",{className:"mini-link",onClick:X},"\u8BBE\u7F6E"),a?p.default.createElement(p.default.Fragment,null,p.default.createElement("button",{className:"mini-link",onClick:H,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),p.default.createElement("button",{className:"mini-link",onClick:ce,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),p.default.createElement("a",{className:"mini-link",href:`${_t}/episodes/${a.id}/transcript/export?format=srt`,download:!0},"SRT"),p.default.createElement("a",{className:"mini-link",href:`${_t}/episodes/${a.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Le?null:p.default.createElement("button",{className:"transcript-close",onClick:A,title:"\u6536\u8D77"},"\xD7"))),p.default.createElement("div",{className:"transcript-body",ref:le},a&&fe?p.default.createElement("div",{className:"tr-strip"},p.default.createElement("span",null,l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${a.lines.length} \u884C`),w?p.default.createElement("button",{className:"seg-tool",onClick:w},"\u53D6\u6D88"):null):null,a&&ie?.length?p.default.createElement("div",{className:"tr-issues"},ie.slice(0,5).map(v=>p.default.createElement("div",{key:v},"\xB7 ",v)),ie.length>5?p.default.createElement("div",null,"\u2026\u5171 ",ie.length," \u6761"):null):null,d?.status==="running"?p.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,d?.status==="error"?p.default.createElement("div",{className:"tr-running err"},d.error):null,a?a.lines.map((v,ue)=>p.default.createElement("div",{key:v.id,"data-seg":ue,className:`seg-row ${ue===Q?"active":""} ${se===v.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${Ne(v.start)}`,onClick:()=>F(v.start),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),F(v.start))}},p.default.createElement("span",{className:"seg-time"},Ne(v.start)),se===v.id?p.default.createElement("span",{className:"seg-edit",onClick:z=>z.stopPropagation()},p.default.createElement("textarea",{ref:ze,value:oe,rows:Math.min(4,Math.max(2,Math.ceil((oe.length||1)/40))),onChange:z=>N(z.target.value),onKeyDown:z=>{z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&re(v.id),z.key==="Escape"&&ve()}}),p.default.createElement("span",{className:"seg-edit-actions"},p.default.createElement("button",{className:"seg-tool",onClick:()=>re(v.id)},"\u4FDD\u5B58"),p.default.createElement("button",{className:"seg-tool",onClick:()=>U(v.id,ze.current?.selectionStart??Math.floor(oe.length/2))},"\u62C6\u5206"),p.default.createElement("button",{className:"seg-tool",onClick:ve},"\u53D6\u6D88"))):p.default.createElement(p.default.Fragment,null,v.speaker!=null?p.default.createElement("span",{className:`seg-speaker spk-${v.speaker%5}`},a.speakers?.[v.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${v.speaker+1}`):null,p.default.createElement("span",{className:"seg-text"},v.text,v.translations?.[G]?p.default.createElement("span",{className:"seg-trans"},v.translations[G]):null),p.default.createElement("span",{className:"seg-tools"},p.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:z=>{z.stopPropagation(),Ce(v)}},"\u270E"),ue<a.lines.length-1?p.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:z=>{z.stopPropagation(),V(v.id)}},"\u21E3"):null)))):fe?p.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",i?.percent!=null?` ${i.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((x||0)/1e3)+" \u79D2",i?.percent!=null?p.default.createElement("span",{className:"tx-progress"},p.default.createElement("span",{style:{width:`${i.percent}%`}})):null,p.default.createElement("br",null),p.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),p.default.createElement("br",null),w?p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:w},"\u53D6\u6D88\u8F6C\u5199"):null):J?p.default.createElement("div",{className:"transcript-status"},p.default.createElement("span",{className:"err"},J),p.default.createElement("br",null),p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:Z},"\u91CD\u8BD5")):p.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",p.default.createElement("br",null),p.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:Z},"\u5F00\u59CB\u8F6C\u5199"))))}function Rt(a){let l=a.progress?.percent,i=a.chunks?.total?` \xB7 ${a.chunks.done}/${a.chunks.total} \u5757`:"";return a.status==="done"?`\u5B8C\u6210${a.lineCount?` \xB7 ${a.lineCount} \u884C`:""}${a.language?` \xB7 ${a.language}`:""}`:a.status==="error"||a.status==="interrupted"?a.error||"\u5931\u8D25":a.status==="cancelled"?a.error||"\u5DF2\u53D6\u6D88":a.status==="queued"?"\u6392\u961F\u4E2D":`${a.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":a.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":a.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${i}`}var f="/podwave/api",St=[.75,1,1.25,1.5,1.75,2];async function R(a){let l=await fetch(a);if(!l.ok){let i=await l.json().catch(()=>({}));throw new Error(i.error||l.statusText)}return l.json()}async function q(a,l,i){let u=await fetch(a,{method:l,headers:i?{"Content-Type":"application/json"}:void 0,body:i?JSON.stringify(i):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}function Eo({onSubmit:a,onPick:l,onClose:i}){let[u,g]=(0,e.useState)(""),[k,x]=(0,e.useState)(!1),[J,T]=(0,e.useState)(!1),[F,A]=(0,e.useState)(""),Z=(0,e.useRef)(null);return(0,e.useEffect)(()=>{Z.current?.focus();let d=te=>{te.key==="Escape"&&i()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[i]),e.default.createElement("div",{className:"overlay",onMouseDown:d=>{d.target===d.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async d=>{if(d.preventDefault(),!(!u.trim()||k)){x(!0),A("");try{await a(u.trim()),i()}catch(te){A(te.message),x(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!J){T(!0),A("");try{let d=await l();if(d?.canceled)return;if(d?.error)throw new Error(d.error);d?.path&&(await a(d.path),i())}catch(d){A(d.message)}finally{T(!1)}}},disabled:J,autoFocus:!0},J?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:Z,value:u,onChange:d=>g(d.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:k||!u.trim()},k?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),F?e.default.createElement("div",{className:"dialog-error"},F):null))}function Ao({config:a,onClose:l,onSave:i}){let[u,g]=(0,e.useState)(a?.provider||"api"),[k,x]=(0,e.useState)(""),[J,T]=(0,e.useState)(!1),[F,A]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&l()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{w.preventDefault(),T(!0),A("");try{await i({provider:u,apiKey:k||void 0})}catch(G){A(G.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",a?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:u,onChange:w=>g(w.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:k,onChange:w=>x(w.target.value),placeholder:a?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},a?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),F?e.default.createElement("div",{className:"dialog-error"},F):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:J},"\u4FDD\u5B58"))))}function Tt(){let[a,l]=(0,e.useState)([]),[i,u]=(0,e.useState)([]),[g,k]=(0,e.useState)({}),[x,J]=(0,e.useState)({running:!1}),[T,F]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[A,Z]=(0,e.useState)(""),[w,G]=(0,e.useState)("recent"),[d,te]=(0,e.useState)("all"),[X,Le]=(0,e.useState)("all"),[se,oe]=(0,e.useState)(null),[N,Ce]=(0,e.useState)(null),[re,ve]=(0,e.useState)(!1),[U,V]=(0,e.useState)(0),[H,ce]=(0,e.useState)(0),[ie,le]=(0,e.useState)(!0),[ze,Q]=(0,e.useState)(!1),[fe,v]=(0,e.useState)(""),[ue,z]=(0,e.useState)(""),[$,ne]=(0,e.useState)(null),[B,he]=(0,e.useState)("none"),[Ve,Oe]=(0,e.useState)(0),[Ze,pe]=(0,e.useState)(""),[W,I]=(0,e.useState)(!1),[tt,Ge]=(0,e.useState)(null),[Se,M]=(0,e.useState)(""),[Te,Me]=(0,e.useState)({status:"none"}),[vt,L]=(0,e.useState)(!1),[ot,rt]=(0,e.useState)(!1),[nt,Xe]=(0,e.useState)(!1),[Y,Qe]=(0,e.useState)(null),[We,at]=(0,e.useState)(!1),[Pe,st]=(0,e.useState)([]),[je,Be]=(0,e.useState)(!1),[n,b]=(0,e.useState)([]),[S,De]=(0,e.useState)(null),[be,Ie]=(0,e.useState)(""),[Ye,Pt]=(0,e.useState)([]),K=(0,e.useRef)(null),jt=(0,e.useRef)(null),y=(0,e.useRef)(null),ae=(0,e.useRef)(0),Ee=(0,e.useRef)(T),Ke=(0,e.useRef)(0),Dt=(0,e.useRef)(0),It=(0,e.useRef)(0),eo=(0,e.useRef)(!1),ft=(0,e.useRef)(!1);(0,e.useEffect)(()=>{Ee.current=T},[T]),(0,e.useEffect)(()=>{y.current=N},[N]),(0,e.useEffect)(()=>{ae.current=H},[H]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await R(`${f}/ui-settings`);!t&&o&&rt(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let Et=(0,e.useCallback)(()=>{rt(t=>{let o=!t;return fetch(`${f}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),h=(0,e.useCallback)(t=>{z(t),window.clearTimeout(It.current),It.current=window.setTimeout(()=>z(""),2600)},[]),xe=(0,e.useCallback)(async()=>{let t=await R(`${f}/episodes`);return l(t.items||[]),u(t.folders||[]),k(t.progress||{}),J(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await R(`${f}/state`);if(t)return;F(o.settings),u(o.folders||[]);let s=await xe();if(t)return;let c=o.settings?.lastEpisodeId,C=c?(s.items||[]).find(P=>P.id===c):null;if(C){Ce(C),ce(C.duration||0);let P=s.progress?.[C.id]?.position||0;Ke.current=P>5?P:0,V(Ke.current);let ke=K.current;ke&&(ke.src=`${f}/episodes/${C.id}/audio`,ke.load(),ke.playbackRate=o.settings?.rate||1,ke.volume=o.settings?.volume??.9)}le(!1),eo.current=!0}catch(o){t||(v(o.message),le(!1))}})(),()=>{t=!0}},[xe]),(0,e.useEffect)(()=>{if(!x.running)return;let t=setInterval(()=>{xe().catch(()=>{})},1500);return()=>clearInterval(t)},[x.running,xe]),(0,e.useEffect)(()=>{let t=!1;return ne(null),pe(""),Oe(0),N?.id?((async()=>{try{let o=await R(`${f}/episodes/${N.id}/transcript`);if(t)return;he(o.status),Qe(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?ne(o.transcript):o.status==="queued"||o.status==="running"?(Oe(o.elapsedMs||0),o.transcript&&ne(o.transcript)):o.status==="error"&&pe(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||pe(o.message)}})(),()=>{t=!0}):(he("none"),()=>{t=!0})},[N?.id]),(0,e.useEffect)(()=>{R(`${f}/translate/settings`).then(Ge).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(B!=="queued"&&B!=="running")return;let t=!1,o=setInterval(async()=>{let s=y.current?.id;if(s)try{let c=await R(`${f}/episodes/${s}/transcript`);if(t)return;he(c.status),Qe(c.status==="queued"||c.status==="running"?c:null),Oe(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?ne(c.transcript):c.status==="done"&&c.transcript?(ne(c.transcript),I(!0),h("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&pe(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[B,h]),(0,e.useEffect)(()=>{if(Te.status!=="running")return;let t=!1,o=setInterval(async()=>{let s=y.current?.id;if(s)try{let c=await R(`${f}/episodes/${s}/translate?target=${Se}`);if(t)return;if(Me(c),c.status==="done"){let C=await R(`${f}/episodes/${s}/transcript`);!t&&C.transcript&&ne(C.transcript),h("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[Te.status,Se,h]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let c=await R(`${f}/jobs`);t||st(c.items||[])}catch{}};o();let s=setInterval(o,2500);return()=>{t=!0,clearInterval(s)}},[]);let Ae=(0,e.useCallback)((t,o,s,c=!1)=>{if(!t)return;let C=Date.now();!c&&C-Dt.current<4e3||(Dt.current=C,q(`${f}/progress/${t}`,"PUT",{position:o,duration:s}).catch(()=>{}),k(P=>({...P,[t]:{position:o,duration:s,updatedAt:C}})))},[]),we=(0,e.useCallback)(t=>{F(o=>({...o,...t})),q(`${f}/settings`,"PATCH",t).catch(()=>{})},[]),_e=(0,e.useCallback)(async()=>{if(y.current){pe(""),I(!0);try{let t=await q(`${f}/episodes/${y.current.id}/transcribe`,"POST",{});he(t.status||"queued")}catch(t){pe(t.message)}}},[]),to=(0,e.useCallback)(()=>{if($){I(t=>!t);return}if(B==="queued"||B==="running"){I(!0);return}_e()},[$,B,_e]),ht=(0,e.useCallback)(async()=>{if(y.current)try{await q(`${f}/episodes/${y.current.id}/transcribe/cancel`,"POST",{}),h("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){pe(t.message)}},[h]),bt=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await q(`${f}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await q(`${f}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await q(`${f}/jobs`,"DELETE",{key:t.key})}catch{}let s=await R(`${f}/jobs`).catch(()=>({items:[]}));st(s.items||[])},[]),it=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let s=await q(`${f}/transcribe/batch`,"POST",{ids:o});h(`\u5DF2\u6392\u961F ${s.queued} \u96C6${s.skipped?`\uFF0C\u8DF3\u8FC7 ${s.skipped} \u96C6`:""}${s.errors?.length?`\uFF0C\u5931\u8D25 ${s.errors.length} \u96C6`:""}`),b([]),Be(!1)}catch(s){h(s.message)}},[h]),oo=(0,e.useCallback)(t=>{b(o=>o.includes(t)?o.filter(s=>s!==t):[...o,t])},[]),ye=(0,e.useCallback)(async(t,o,s)=>{try{let c=await q(`${f}${t}`,o,s||{});return c?.transcript&&ne(c.transcript),c}catch(c){return h(c.message),null}},[h]),At=(0,e.useCallback)(t=>{De(t.id),Ie(t.text),Pt([])},[]),Lt=(0,e.useCallback)(async t=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${t??S}`,"PUT",{text:be})&&(De(null),h("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,S,be,ye,h]),Ot=(0,e.useCallback)(async(t,o)=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${t??S}/split`,"POST",{offset:o})&&(De(null),h("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,S,ye,h]),Bt=(0,e.useCallback)(async t=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/lines/${t}/merge`,"POST",{})&&h("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,ye,h]),Kt=(0,e.useCallback)(async()=>{if(!$)return;await ye(`/episodes/${$.id}/transcript/undo`,"POST",{})&&h("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,ye,h]),qt=(0,e.useCallback)(async()=>{if($)try{let t=await R(`${f}/episodes/${$.id}/transcript/validate`);Pt(t.issues||[]),h(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){h(t.message)}},[$,h]),lt=(0,e.useCallback)(async()=>{let t=y.current?.id;if(!t)return;let o=await R(`${f}/episodes/${t}/transcript`);o.transcript&&ne(o.transcript)},[]),Ft=(0,e.useCallback)(async t=>{if(y.current?.id){Me({status:"running"});try{let o=await q(`${f}/episodes/${y.current.id}/translate`,"POST",{target:t});Me(o),o.status==="done"&&(await lt(),h("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){Me({status:"error",error:o.message})}}},[lt,h]),Ut=(0,e.useCallback)(async t=>{if(M(t),!t)return;if($?.lines?.some(s=>s.translations?.[t])){Me({status:"done"}),await lt();return}await Ft(t)},[$,Ft,lt]),ro=t=>{let o=!t.favorite;l(s=>s.map(c=>c.id===t.id?{...c,favorite:o}:c)),q(`${f}/episodes/${t.id}/favorite`,"PUT",{favorite:o}).catch(s=>h(s.message))},Ht=async t=>{if(t.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${t.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let o of t)try{await fetch(`${f}/episodes/${o}`,{method:"DELETE"})}catch{}l(o=>o.filter(s=>!t.includes(s.id))),b([]),t.includes(se)&&oe(null),h(`\u5DF2\u79FB\u9664 ${t.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},_=(0,e.useMemo)(()=>{let t=[...a];return w==="title"?t.sort((o,s)=>o.title.localeCompare(s.title,"zh-Hans-CN")):w==="duration"?t.sort((o,s)=>(s.duration||0)-(o.duration||0)):t.sort((o,s)=>s.mtime-o.mtime),t},[a,w]),ge=(0,e.useMemo)(()=>{let t=A.trim().toLowerCase();return _.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let c=g[o.id]?.position||0,C=o.duration||0,P=C?c/C:0;return d==="inprogress"?c>5&&P<.97:d==="finished"?P>=.97:X==="unheard"?c<=5:X==="transcribed"?!!o.hasTranscript:X==="favorites"?!!o.favorite:!0})},[_,A,d,X,g]),Jt=(0,e.useMemo)(()=>Pe.filter(t=>t.status==="queued"||t.status==="running"),[Pe]),qe=(0,e.useMemo)(()=>ge.filter(t=>!t.hasTranscript),[ge]),xt=(0,e.useMemo)(()=>a.filter(t=>{let o=g[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(g[o.id]?.updatedAt||0)-(g[t.id]?.updatedAt||0)).slice(0,4),[a,g]),no=(0,e.useMemo)(()=>a.reduce((t,o)=>t+(o.duration||0),0),[a]),ao=Math.round(no/3600*10)/10,so=d==="inprogress"?"\u7EE7\u7EED\u6536\u542C":d==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",E=se?a.find(t=>t.id===se)||(N?.id===se?N:null):null,io=ie?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":x.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${ge.length} \u96C6 \xB7 \u5171 ${ao} \u5C0F\u65F6 \xB7 ${i.length} \u4E2A\u6587\u4EF6\u5939`,Ho=(0,e.useMemo)(()=>N?_.findIndex(t=>t.id===N.id):-1,[_,N]),Fe=(0,e.useCallback)(()=>{let t=K.current;if(t){if(!y.current){let o=ge[0]||_[0];o&&Re(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[ge,_]),Re=(0,e.useCallback)((t,o=!0)=>{let s=K.current;if(!s||!t)return;if(y.current&&y.current.id===t.id){o&&Fe();return}y.current&&!s.ended&&s.currentTime>1&&Ae(y.current.id,s.currentTime,s.duration||ae.current,!0),y.current=t,Ce(t),oe(P=>P&&t.id),ce(t.duration||0);let c=g[t.id]?.position||0,C=c>5&&(!t.duration||c<t.duration-10)?c:0;Ke.current=C,V(C),s.src=`${f}/episodes/${t.id}/audio`,s.load(),s.playbackRate=Ee.current.rate||1,s.volume=Ee.current.volume??.9,o&&s.play().catch(()=>{}),we({lastEpisodeId:t.id})},[g,Ae,we,Fe]),Vt=(0,e.useCallback)((t,o=!0)=>{t&&(Re(t,o),oe(t.id))},[Re]),me=(0,e.useCallback)(t=>{let o=K.current;if(!o||!y.current)return;let s=Number(t);if(!Number.isFinite(s))return;let c=Number(ae.current)||0,C=Number.isFinite(o.duration)&&o.duration>0?o.duration:c,P=Math.max(0,C>0?Math.min(s,C):s);try{o.currentTime=P}catch{Ke.current=P;return}V(P),Ae(y.current.id,P,C||c,!0)},[Ae]),Zt=(0,e.useCallback)(t=>{let o=jt.current;if(!o)return null;let s=o.getBoundingClientRect();return s.width?Math.min(1,Math.max(0,(t.clientX-s.left)/s.width)):null},[]),pt=(0,e.useCallback)(t=>{let o=Zt(t),s=Number.isFinite(ae.current)&&ae.current>0?ae.current:Number.isFinite(K.current?.duration)?K.current.duration:0;o==null||!s||me(o*s)},[Zt,me]),lo=(0,e.useCallback)(t=>{t.preventDefault(),ft.current=!0;try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}pt(t)},[pt]),po=(0,e.useCallback)(t=>{ft.current&&pt(t)},[pt]),Gt=(0,e.useCallback)(t=>{ft.current=!1;try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},[]),co=(0,e.useCallback)(t=>{let o=K.current;if(!o)return;let s=t.shiftKey?30:5;t.key==="ArrowLeft"&&(t.preventDefault(),me((o.currentTime||0)-s)),t.key==="ArrowRight"&&(t.preventDefault(),me((o.currentTime||0)+s)),t.key==="Home"&&(t.preventDefault(),me(0)),t.key==="End"&&(t.preventDefault(),me(Number.isFinite(o.duration)?o.duration:0))},[me]),et=(0,e.useCallback)(t=>{let o=K.current;if(!o||!y.current)return;let s=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||ae.current||0)-1));o.currentTime=s,V(s)},[]),wt=(0,e.useCallback)(t=>{if(!_.length)return;let s=((y.current?_.findIndex(c=>c.id===y.current.id):-1)+t+_.length)%_.length;Re(_[s],!0)},[_,Re]),uo=(0,e.useCallback)(()=>{let t=St.indexOf(Ee.current.rate),o=St[(t+1)%St.length],s=K.current;s&&(s.playbackRate=o),we({rate:o})},[we]),dt=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),s=K.current;s&&(s.volume=o),we({volume:o})},[we]),go=(0,e.useCallback)(()=>{let t=K.current,o=Ee.current.volume>0?0:.9;t&&(t.volume=o),we({volume:o})},[we]),mo=()=>{let t=K.current;!t||!y.current||(V(t.currentTime),Ae(y.current.id,t.currentTime,t.duration||ae.current))},vo=()=>{let t=K.current,o=y.current;if(!t||!o)return;let s=Number.isFinite(t.duration)?t.duration:o.duration||0;ce(s);let c=Ke.current;Ke.current=0,c>0&&c<s-1&&(t.currentTime=c,V(c))},fo=()=>{let t=K.current;y.current&&Ae(y.current.id,t?.duration||ae.current||0,t?.duration||ae.current||0,!0),wt(1)},ho=async t=>{await q(`${f}/folders`,"POST",{path:t}),await xe(),h("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},bo=async()=>{let t=await fetch(`${f}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},xo=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),nt||Xe(!0))},wo=t=>{t.currentTarget.contains(t.relatedTarget)||Xe(!1)},yo=async t=>{t.preventDefault(),Xe(!1);let o=t.dataTransfer,s=[...o?.files||[]],c=s.map(j=>j.path).filter(j=>typeof j=="string"&&j),C=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(j=>j.trim()).filter(j=>j.startsWith("file://")).map(j=>decodeURIComponent(j.replace(/^file:\/\//,""))),P=[...new Set([...c,...C])];if(P.length){try{let j=await q(`${f}/import/paths`,"POST",{paths:P});await xe(),h(j.added?`\u5DF2\u6DFB\u52A0 ${j.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(j){v(j.message)}return}let ke=s.filter(j=>j.size>0);if(!ke.length){h("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let No=`drop-${Date.now()}`,ct="",Nt=0;for(let j of ke)try{let Xt=await fetch(`${f}/import/upload?name=${encodeURIComponent(j.name)}&batch=${No}`,{method:"POST",body:j}),$o=await Xt.json();Xt.ok&&(ct=$o.folder||ct,Nt+=1)}catch{}if(ct)try{await q(`${f}/folders`,"POST",{path:ct})}catch{}await xe(),h(Nt?`\u5DF2\u5BFC\u5165 ${Nt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},ko=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await q(`${f}/folders`,"DELETE",{path:t}),await xe(),h("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){v(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let s=o.target?.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),Fe()):o.key==="ArrowRight"?(o.preventDefault(),et(15)):o.key==="ArrowLeft"?(o.preventDefault(),et(-15)):o.key==="ArrowUp"?(o.preventDefault(),dt(Ee.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),dt(Ee.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[Fe,et,dt]);let yt=t=>{let o=g[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},kt=t=>{let o=g[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${ot?"nav-collapsed":""}`,onDragOver:xo,onDragLeave:wo,onDrop:yo},nt?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,ot?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Et},e.default.createElement(O,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(O,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.10"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Et},e.default.createElement(O,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",a.length],["inprogress","\u7EE7\u7EED\u6536\u542C",xt.length],["finished","\u5DF2\u64AD\u5B8C",a.filter(yt).length]].map(([t,o,s])=>e.default.createElement("button",{key:t,className:`nav-item ${d===t?"active":""}`,onClick:()=>te(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},s||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Q(!0)},e.default.createElement(O,{name:"plus",size:16}))),i.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},i.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(O,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Yt(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>ko(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,so),e.default.createElement("p",{className:"subline"},io)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${We?"is-on":""}`,onClick:()=>at(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(O,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Jt.length?` ${Jt.length}`:"")),e.default.createElement("button",{className:`tool-btn ${je?"is-on":""}`,onClick:()=>{Be(t=>!t),b([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(O,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(O,{name:"search",size:16}),e.default.createElement("input",{value:A,onChange:t=>Z(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:t=>G(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),je?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",n.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>b(ge.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!qe.length,onClick:()=>it(qe.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",qe.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!n.length,onClick:()=>it(n)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!n.length,onClick:()=>Ht(n)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{b([]),Be(!1)}},"\u53D6\u6D88")):null,fe?e.default.createElement("div",{className:"banner error",onClick:()=>v("")},fe," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,E?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>oe(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},E.artist,E.album?` \xB7 ${E.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(He,{item:E,size:288})),e.default.createElement("h2",{className:"episode-title"},E.title),e.default.createElement("p",{className:"episode-sub"},E.artist,E.album?` \xB7 ${E.album}`:""),e.default.createElement("p",{className:"episode-path",title:E.file},E.location||E.file),e.default.createElement("p",{className:"episode-stats"},$t(E.duration)," \xB7 ",Ct(E.mtime)," \xB7 \u5DF2\u542C ",Math.round(kt(E)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Fe},re&&N?.id===E.id?"\u6682\u505C":"\u64AD\u653E"),B==="queued"||B==="running"?e.default.createElement("button",{className:"btn ghost",onClick:ht},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:_e},$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Ht([E.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(mt,{inline:!0,transcript:$,status:B,progress:Y?.progress,stage:Y?.stage,chunks:Y?.chunks,queued:Y?.queued,elapsed:Ve,editingId:S,draft:be,onDraftChange:Ie,onEditLine:At,onSaveLine:Lt,onCancelEdit:()=>De(null),onSplitLine:Ot,onMergeLine:Bt,onUndo:Kt,onValidate:qt,issues:Ye,onCancel:ht,error:Ze,position:U,onSeek:me,onClose:()=>oe(null),onStart:_e,target:Se,job:Te,onChangeTarget:Ut,onOpenSettings:()=>L(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([t,o])=>e.default.createElement("button",{key:t,className:`chip ${X===t?"is-on":""}`,onClick:()=>Le(t)},o))),d==="all"&&!A&&xt.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},xt.map(t=>{let o=kt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${N?.id===t.id?"is-current":""}`,onClick:()=>Vt(t,!0)},e.default.createElement(He,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ie?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ge.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,a.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},a.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),a.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>Q(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},ge.map((t,o)=>{let s=kt(t),c=N?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${c?"is-current":""} ${yt(t)?"is-finished":""} ${je&&n.includes(t.id)?"is-selected":""}`,onClick:()=>je?oo(t.id):Vt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},je?n.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(O,{name:"check",size:14})):null:c&&re?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(He,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Ct(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},$t(t.duration)),e.default.createElement("span",{className:`row-star ${t.favorite?"is-on":""}`,role:"button",title:t.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:C=>{C.stopPropagation(),ro(t)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},yt(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(O,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):s>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${s}%`}})):null))}))))),W&&N&&!E?e.default.createElement(mt,{transcript:$,status:B,progress:Y?.progress,stage:Y?.stage,chunks:Y?.chunks,queued:Y?.queued,elapsed:Ve,editingId:S,draft:be,onDraftChange:Ie,onEditLine:At,onSaveLine:Lt,onCancelEdit:()=>De(null),onSplitLine:Ot,onMergeLine:Bt,onUndo:Kt,onValidate:qt,issues:Ye,onCancel:ht,error:Ze,position:U,onSeek:me,onClose:()=>I(!1),onStart:_e,target:Se,job:Te,onChangeTarget:Ut,onOpenSettings:()=>L(!0)}):null,We?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>at(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Pe.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Pe.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},Rt(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>bt(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>bt(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>bt(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!qe.length,onClick:()=>it(qe.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",qe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!n.length,onClick:()=>it(n)},"\u8F6C\u5199\u5DF2\u9009 ",n.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap",ref:jt,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(H||0),"aria-valuenow":Math.round(U||0),"aria-valuetext":`${Ne(U)} / ${Ne(H)}`,onPointerDown:lo,onPointerMove:po,onPointerUp:Gt,onPointerCancel:Gt,onKeyDown:co},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${H?Math.min(100,Math.max(0,U/H*100)):0}%`}})),e.default.createElement("div",{className:"seek-thumb",style:{left:`${H?Math.min(100,Math.max(0,U/H*100)):0}%`}})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},N?e.default.createElement(e.default.Fragment,null,e.default.createElement(He,{item:N,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:N.title},N.title),e.default.createElement("div",{className:"now-artist"},N.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>wt(-1)},e.default.createElement(O,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>et(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Fe,disabled:!N&&ge.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(O,{name:re?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>et(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>wt(1)},e.default.createElement(O,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${W?"active":""}`,onClick:to,disabled:!N,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(O,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":B==="queued"||B==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Ne(U)," / ",Ne(H)),e.default.createElement("button",{className:"rate-btn",onClick:uo,title:"\u64AD\u653E\u901F\u5EA6"},T.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:go,title:"\u9759\u97F3"},e.default.createElement(O,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:t=>dt(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),ze?e.default.createElement(Eo,{onClose:()=>Q(!1),onSubmit:ho,onPick:bo}):null,vt?e.default.createElement(Ao,{config:tt,onClose:()=>L(!1),onSave:async t=>{let o=await q(`${f}/translate/settings`,"PUT",t);Ge(o),L(!1),h("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ue?e.default.createElement("div",{className:"toast"},ue):null,e.default.createElement("audio",{ref:K,preload:"metadata",onPlay:()=>ve(!0),onPause:()=>{ve(!1);let t=K.current;y.current&&t&&t.currentTime>0&&!t.ended&&Ae(y.current.id,t.currentTime,t.duration||ae.current,!0)},onTimeUpdate:mo,onLoadedMetadata:vo,onEnded:fo,onError:()=>{ve(!1),h("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var r=Ue(require("react"),1);var D="/podwave/api";async function ee(a){let l=await fetch(a),i=await l.json().catch(()=>({}));if(!l.ok)throw new Error(i.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return i}async function $e(a,l,i){let u=await fetch(a,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(i??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function Lo(a){let l=Math.max(0,Math.round(Number(a)||0)),i=Math.floor(l/3600),u=Math.floor(l%3600/60);return i>0?`${i} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function Je(a){let l=Number(a)||0;return l?l<1024**2?`${Math.round(l/1024)} KB`:l<1024**3?`${(l/1024**2).toFixed(1)} MB`:`${(l/1024**3).toFixed(1)} GB`:"0 B"}function Oo(a){if(!a)return"";let l=new Date(a),i=u=>String(u).padStart(2,"0");return`${l.getFullYear()}-${i(l.getMonth()+1)}-${i(l.getDate())} ${i(l.getHours())}:${i(l.getMinutes())}`}function Mt(){let[a,l]=(0,r.useState)([]),[i,u]=(0,r.useState)([]),[g,k]=(0,r.useState)({asrModel:"",translateModel:""}),[x,J]=(0,r.useState)(null),[T,F]=(0,r.useState)(null),[A,Z]=(0,r.useState)({showSidebarPanel:!0}),[w,G]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[d,te]=(0,r.useState)(null),[X,Le]=(0,r.useState)(null),[se,oe]=(0,r.useState)(null),[N,Ce]=(0,r.useState)(!1),[re,ve]=(0,r.useState)("auto"),[U,V]=(0,r.useState)(!1),[H,ce]=(0,r.useState)(""),[ie,le]=(0,r.useState)(15),[ze,Q]=(0,r.useState)(!0),[fe,v]=(0,r.useState)("api"),[ue,z]=(0,r.useState)("https://api.deepseek.com"),[$,ne]=(0,r.useState)("deepseek-chat"),[B,he]=(0,r.useState)(""),[Ve,Oe]=(0,r.useState)(""),[Ze,pe]=(0,r.useState)(""),[W,I]=(0,r.useState)(""),[tt,Ge]=(0,r.useState)(""),[Se,M]=(0,r.useState)(""),Te=(0,r.useCallback)(async()=>{try{let[n,b,S,De,be,Ie,Ye]=await Promise.all([ee(`${D}/history`),ee(`${D}/models`),ee(`${D}/translate/settings`),ee(`${D}/ui-settings`),ee(`${D}/transcribe/settings`),ee(`${D}/import/settings`),ee(`${D}/setup`)]);te(Ye),Ye?.job?.status==="running"&&V(!0),G({mode:Ie.mode||"copy",orphans:Ie.orphans||0,orphanBytes:Ie.orphanBytes||0}),Z({showSidebarPanel:De?.showSidebarPanel!==!1}),ce((be.hotwords||[]).join(" ")),le(be.chunkMinutes||15),Q(be.diarize!==!1),l(n.items||[]),u(b.models||[]),k(b.config||{asrModel:"",translateModel:""}),J(b.transcribe||null),Oe(b.config?.asrModel||""),pe(b.config?.translateModel||""),F(S),v(S.provider||"api"),z(S.apiBase||"https://api.deepseek.com"),ne(S.apiModel||"deepseek-chat"),he(""),M("")}catch(n){M(n.message)}},[]);(0,r.useEffect)(()=>{Te()},[Te]),(0,r.useEffect)(()=>{let n=!1;return ee(`${D}/setup/plan?source=${re}`).then(b=>{n||Le(b)}).catch(()=>{}),()=>{n=!0}},[re,d?.job?.status]),(0,r.useEffect)(()=>{if(!U&&d?.job?.status!=="running")return;let n=window.setInterval(async()=>{try{let b=await ee(`${D}/setup`);te(b),b.job?.status!=="running"&&V(!1)}catch{}},2500);return()=>window.clearInterval(n)},[U,d?.job?.status]);let Me=async()=>{M(""),V(!0);try{await $e(`${D}/setup/install`,"POST",{source:re});let n=await ee(`${D}/setup`);te(n),L("\u5F00\u59CB\u5B89\u88C5")}catch(n){V(!1),M(n.message)}},vt=async()=>{try{await $e(`${D}/setup/cancel`,"POST",{}),L("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(n){M(n.message)}},L=n=>{Ge(n),window.setTimeout(()=>Ge(""),2400)},ot=async()=>{Ce(!0);try{let n=await ee(`${D}/setup/verify`);oe(n),L(n.ok?"\u5B89\u88C5\u68C0\u67E5\u901A\u8FC7":"\u6709\u68C0\u67E5\u9879\u672A\u901A\u8FC7\uFF0C\u89C1\u4E0B\u65B9\u5217\u8868")}catch(n){L(n.message||"\u68C0\u67E5\u5931\u8D25")}finally{Ce(!1)}},rt=async()=>{try{let n=await ee(`${D}/setup/diagnose`),b=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(b)}catch{let S=document.createElement("textarea");S.value=b,S.style.position="fixed",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),S.remove()}L("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(n){L(n.message||"\u590D\u5236\u5931\u8D25")}},nt=async()=>{I("api"),M("");try{let n={provider:fe,apiBase:ue,apiModel:$};B.trim()&&(n.apiKey=B.trim());let b=await $e(`${D}/translate/settings`,"PUT",n);F(b),he(""),L("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){M(n.message)}finally{I("")}},Xe=async()=>{I("models"),M("");try{let n=await $e(`${D}/models`,"PUT",{asrModel:Ve,translateModel:Ze});k(n.config),u(n.models||[]),J(n.transcribe||null),L("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(n){M(n.message)}finally{I("")}},Y=i.length?i:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:x?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:T?.localReady}],Qe=Y.filter(n=>/asr/i.test(n.name)&&n.ready!==!1),We=Y.filter(n=>!/asr|diarization/i.test(n.name)&&n.ready!==!1),at=async()=>{I("ui"),M("");try{let n=await $e(`${D}/ui-settings`,"PUT",{showSidebarPanel:A.showSidebarPanel});Z({showSidebarPanel:n.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:n})),L("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){M(n.message)}finally{I("")}},Pe=async n=>{I("import"),M("");try{let b=await $e(`${D}/import/settings`,"PUT",{mode:n});G(S=>({...S,mode:b.mode})),L("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(b){M(b.message)}finally{I("")}},st=async()=>{if(w.orphans&&window.confirm(`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){I("imports"),M("");try{let n=await $e(`${D}/imports/orphans`,"DELETE",{});G(b=>({...b,orphans:0,orphanBytes:0})),L(`\u5DF2\u6E05\u7406 ${n.removed||0} \u4E2A\u6279\u6B21`)}catch(n){M(n.message)}finally{I("")}}},je=async()=>{I("transcribe"),M("");try{let n=H.split(/[\s,，、]+/).map(S=>S.trim()).filter(Boolean).slice(0,500),b=await $e(`${D}/transcribe/settings`,"PUT",{hotwords:n,chunkMinutes:Math.min(60,Math.max(1,Number(ie)||15)),diarize:ze});ce((b.hotwords||[]).join(" ")),le(b.chunkMinutes||15),Q(b.diarize!==!1),L("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(n){M(n.message)}finally{I("")}},Be=Y;return r.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,gt),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Se?r.default.createElement("div",{className:"banner error",onClick:()=>M("")},Se):null,tt?r.default.createElement("div",{className:"settings-message"},tt):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),d?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},d.platform?.osLabel," \xB7 ",d.platform?.arch," \xB7 ",d.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",d.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",d.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:rt},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F"),r.default.createElement("button",{className:"settings-btn ghost",disabled:N,onClick:ot},N?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5")),se?r.default.createElement("ul",{className:"setup-components"},se.checks.map(n=>r.default.createElement("li",{key:n.id,className:n.ok?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},n.label),r.default.createElement("span",{className:"setup-component-detail"},n.detail)))):null,r.default.createElement("ul",{className:"setup-components"},(d.components||[]).map(n=>r.default.createElement("li",{key:n.id,className:n.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},n.label),r.default.createElement("span",{className:"setup-component-detail"},n.detail),!n.ready&&n.bytes?r.default.createElement("span",{className:"setup-component-size"},Je(n.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:re,onChange:n=>ve(n.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),X?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Je(X.totalBytes)," \xB7 ",X.items.length," \u9879"),r.default.createElement("ul",null,X.items.map(n=>r.default.createElement("li",{key:n.id},r.default.createElement("span",null,n.label),r.default.createElement("span",null,n.bytes?Je(n.bytes):n.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:U||d.job?.status==="running",onClick:Me},U||d.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),d.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:vt},"\u53D6\u6D88"):null),d.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,d.job.stage||d.job.status),r.default.createElement("span",null,d.job.progress||0,"% \xB7 ",Je(d.job.bytes)," / ",Je(d.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${d.job.progress||0}%`}})),d.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",d.job.error):null,d.job.status==="done"&&(!d.job.summary||!d.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(d.job.summary)&&d.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},d.job.summary.map(n=>r.default.createElement("li",{key:n.id},n.label," \xB7 ",Je(n.bytes),n.source?` \xB7 ${n.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",a.length," \u6761\u3002"),a.length?r.default.createElement("ul",{className:"history-list"},a.map(n=>r.default.createElement("li",{key:n.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},n.title),r.default.createElement("span",{className:"history-meta"},n.artist?`${n.artist} \xB7 `:"",n.duration?`${Lo(n.duration)} \xB7 `:"",n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines," \u884C",n.translations?.length?` \xB7 \u5DF2\u7FFB ${n.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},Oo(n.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:H,onChange:n=>ce(n.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:ie,onChange:n=>le(n.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:ze,onChange:n=>Q(n.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:je,disabled:W==="transcribe"},W==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="copy",onChange:()=>Pe("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="reference",onChange:()=>Pe("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:st,disabled:W==="imports"||!w.orphans},w.orphans?`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(w.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:fe,onChange:n=>v(n.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:ue,onChange:n=>z(n.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:$,onChange:n=>ne(n.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:B,onChange:n=>he(n.target.value),placeholder:T?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${T.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:nt,disabled:W==="api"},W==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},T?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:A.showSidebarPanel,onChange:n=>Z({showSidebarPanel:n.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:at,disabled:W==="ui"},W==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:Ve,onChange:n=>Oe(n.target.value)},(Qe.length?Qe:Be).map(n=>r.default.createElement("option",{key:n.name,value:n.name},n.name,n.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},x?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:Ze,onChange:n=>pe(n.target.value)},(We.length?We:Be).map(n=>r.default.createElement("option",{key:n.name,value:n.name},n.name,n.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},T?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Xe,disabled:W==="models"},W==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Bo({size:a=16}){return de.default.createElement("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},de.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),de.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),de.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ko(){return de.default.createElement("div",{className:"podwave-root"},de.default.createElement("style",null,gt),de.default.createElement(Tt,null))}function qo(a){a.slots.inject("main",()=>a.slots.register({name:"main",key:"podwave"},Ko)),a.slots.inject("settings.section",()=>a.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Mt));let l=null,i="podwave-hide-nav",u=k=>{if(typeof document>"u")return;let x=document.getElementById(i);k&&!x?(x=document.createElement("style"),x.id=i,x.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(x)):!k&&x&&x.remove()},g=k=>{if(u(!k),k&&!l)l=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Bo);else if(!k&&l){let x=l;l=null;try{typeof x?.dispose=="function"?x.dispose():typeof x=="function"?x():typeof x?.dispose>"u"&&typeof x?.unregister=="function"&&x.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(k=>k.ok?k.json():null).then(k=>g(k?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",k=>{g(k?.detail?.showSidebarPanel!==!1)})}var Fo=["slots"];

return module.exports}})
