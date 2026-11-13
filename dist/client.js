window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ht=Object.create;var lo=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var wt=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty;var kt=(n,i)=>{for(var s in i)lo(n,s,{get:i[s],enumerable:!0})},Vo=(n,i,s,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let g of xt(i))!yt.call(n,g)&&g!==s&&lo(n,g,{get:()=>i[g],enumerable:!(u=bt(i,g))||u.enumerable});return n};var qe=(n,i,s)=>(s=n!=null?ht(wt(n)):{},Vo(i||!n||!n.__esModule?lo(s,"default",{value:n,enumerable:!0}):s,n)),Nt=n=>Vo(lo({},"__esModule",{value:!0}),n);var Dt={};kt(Dt,{apply:()=>Et,inject:()=>It});module.exports=Nt(Dt);var de=qe(require("react"),1);var po=`.podwave-root {
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

.podwave-root .seek-wrap { position: relative; height: 16px; display: flex; align-items: center; }

.podwave-root .seek-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 3px;
  margin-top: -1.5px;
  background: #26262e;
  border-radius: 3px;
  overflow: hidden;
  pointer-events: none;
}

.podwave-root .seek-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
}

.podwave-root .seek {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 14px;
  margin: 0;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
}

.podwave-root .seek::-webkit-slider-runnable-track { height: 3px; background: transparent; }
.podwave-root .seek::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: -4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  border: 0;
  opacity: 0;
  transition: opacity 0.12s ease;
}

.podwave-root .player:hover .seek::-webkit-slider-thumb { opacity: 1; }

.podwave-root .seek::-moz-range-track { height: 3px; background: transparent; }
.podwave-root .seek::-moz-range-thumb {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  border: 0;
  opacity: 0;
}

.podwave-root .player:hover .seek::-moz-range-thumb { opacity: 1; }

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
`;var e=qe(require("react"),1);var m=qe(require("react"),1);function D({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return m.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return m.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),m.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return m.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),m.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return m.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},m.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),m.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return m.default.createElement("svg",{...s},m.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),m.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),m.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return m.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},m.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),m.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),m.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),m.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),m.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return m.default.createElement("svg",{...s},m.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var $o=qe(require("react"),1);function _e(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),u=Math.floor(i%3600/60),g=i%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function ko(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function No(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Zo(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Go(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Ct="/podwave/api";function Ke({item:n,size:i=44,className:s=""}){let u={width:i,height:i};return n&&n.hasCover?$o.default.createElement("img",{className:`cover ${s}`,style:u,src:`${Ct}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):$o.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},Zo(n&&n.title))}var p=qe(require("react"),1);var Qo="/podwave/api";function co({transcript:n,status:i,progress:s,stage:u,chunks:g,queued:N,elapsed:x,error:K,position:S,onSeek:F,onClose:I,onStart:H,onCancel:w,target:J,job:d,onChangeTarget:R,onOpenSettings:V,inline:Ee=!1,editingId:Z=null,draft:ee="",onDraftChange:y,onEditLine:ce,onSaveLine:ue,onCancelEdit:ne,onSplitLine:ae,onMergeLine:G,onUndo:Q,onValidate:ge,issues:se=[]}){let me=(0,p.useRef)(null),Ce=(0,p.useRef)(null),oe=n?.lines?.findIndex(v=>S>=v.start&&S<v.end)??-1;(0,p.useEffect)(()=>{if(oe<0||!me.current)return;me.current.querySelector(`[data-seg="${oe}"]`)?.scrollIntoView({block:"nearest"})},[oe]);let he=i==="queued"||i==="running";return p.default.createElement("section",{className:`transcript-panel ${Ee?"inline":""}`},p.default.createElement("header",{className:"transcript-head"},p.default.createElement("h3",null,"\u5B57\u5E55"),n?p.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,p.default.createElement("div",{className:"transcript-actions"},p.default.createElement("select",{className:"tr-select",value:J,onChange:v=>R(v.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},p.default.createElement("option",{value:""},"\u5BF9\u7167"),p.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),p.default.createElement("option",{value:"en"},"English")),p.default.createElement("button",{className:"mini-link",onClick:V},"\u8BBE\u7F6E"),n?p.default.createElement(p.default.Fragment,null,p.default.createElement("button",{className:"mini-link",onClick:Q,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),p.default.createElement("button",{className:"mini-link",onClick:ge,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),p.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),p.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Ee?null:p.default.createElement("button",{className:"transcript-close",onClick:I,title:"\u6536\u8D77"},"\xD7"))),p.default.createElement("div",{className:"transcript-body",ref:me},n&&he?p.default.createElement("div",{className:"tr-strip"},p.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),w?p.default.createElement("button",{className:"seg-tool",onClick:w},"\u53D6\u6D88"):null):null,n&&se?.length?p.default.createElement("div",{className:"tr-issues"},se.slice(0,5).map(v=>p.default.createElement("div",{key:v},"\xB7 ",v)),se.length>5?p.default.createElement("div",null,"\u2026\u5171 ",se.length," \u6761"):null):null,d?.status==="running"?p.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,d?.status==="error"?p.default.createElement("div",{className:"tr-running err"},d.error):null,n?n.lines.map((v,ie)=>p.default.createElement("div",{key:v.id,"data-seg":ie,className:`seg-row ${ie===oe?"active":""} ${Z===v.id?"is-editing":""}`,onClick:()=>F(v.start)},p.default.createElement("span",{className:"seg-time"},_e(v.start)),Z===v.id?p.default.createElement("span",{className:"seg-edit",onClick:M=>M.stopPropagation()},p.default.createElement("textarea",{ref:Ce,value:ee,rows:Math.min(4,Math.max(2,Math.ceil((ee.length||1)/40))),onChange:M=>y(M.target.value),onKeyDown:M=>{M.key==="Enter"&&(M.metaKey||M.ctrlKey)&&ue(v.id),M.key==="Escape"&&ne()}}),p.default.createElement("span",{className:"seg-edit-actions"},p.default.createElement("button",{className:"seg-tool",onClick:()=>ue(v.id)},"\u4FDD\u5B58"),p.default.createElement("button",{className:"seg-tool",onClick:()=>ae(v.id,Ce.current?.selectionStart??Math.floor(ee.length/2))},"\u62C6\u5206"),p.default.createElement("button",{className:"seg-tool",onClick:ne},"\u53D6\u6D88"))):p.default.createElement(p.default.Fragment,null,v.speaker!=null?p.default.createElement("span",{className:`seg-speaker spk-${v.speaker%5}`},n.speakers?.[v.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${v.speaker+1}`):null,p.default.createElement("span",{className:"seg-text"},v.text,v.translations?.[J]?p.default.createElement("span",{className:"seg-trans"},v.translations[J]):null),p.default.createElement("span",{className:"seg-tools"},p.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:M=>{M.stopPropagation(),ce(v)}},"\u270E"),ie<n.lines.length-1?p.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:M=>{M.stopPropagation(),G(v.id)}},"\u21E3"):null)))):he?p.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((x||0)/1e3)+" \u79D2",s?.percent!=null?p.default.createElement("span",{className:"tx-progress"},p.default.createElement("span",{style:{width:`${s.percent}%`}})):null,p.default.createElement("br",null),p.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),p.default.createElement("br",null),w?p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:w},"\u53D6\u6D88\u8F6C\u5199"):null):K?p.default.createElement("div",{className:"transcript-status"},p.default.createElement("span",{className:"err"},K),p.default.createElement("br",null),p.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:H},"\u91CD\u8BD5")):p.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",p.default.createElement("br",null),p.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:H},"\u5F00\u59CB\u8F6C\u5199"))))}function Wo(n){let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var f="/podwave/api",Co=[.75,1,1.25,1.5,1.75,2];async function _(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function A(n,i,s){let u=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}function zt({onSubmit:n,onPick:i,onClose:s}){let[u,g]=(0,e.useState)(""),[N,x]=(0,e.useState)(!1),[K,S]=(0,e.useState)(!1),[F,I]=(0,e.useState)(""),H=(0,e.useRef)(null);return(0,e.useEffect)(()=>{H.current?.focus();let d=R=>{R.key==="Escape"&&s()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:d=>{d.target===d.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async d=>{if(d.preventDefault(),!(!u.trim()||N)){x(!0),I("");try{await n(u.trim()),s()}catch(R){I(R.message),x(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!K){S(!0),I("");try{let d=await i();if(d?.canceled)return;if(d?.error)throw new Error(d.error);d?.path&&(await n(d.path),s())}catch(d){I(d.message)}finally{S(!1)}}},disabled:K,autoFocus:!0},K?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:H,value:u,onChange:d=>g(d.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:N||!u.trim()},N?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),F?e.default.createElement("div",{className:"dialog-error"},F):null))}function St({config:n,onClose:i,onSave:s}){let[u,g]=(0,e.useState)(n?.provider||"api"),[N,x]=(0,e.useState)(""),[K,S]=(0,e.useState)(!1),[F,I]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{w.preventDefault(),S(!0),I("");try{await s({provider:u,apiKey:N||void 0})}catch(J){I(J.message),S(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:u,onChange:w=>g(w.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:N,onChange:w=>x(w.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),F?e.default.createElement("div",{className:"dialog-error"},F):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:K},"\u4FDD\u5B58"))))}function zo(){let[n,i]=(0,e.useState)([]),[s,u]=(0,e.useState)([]),[g,N]=(0,e.useState)({}),[x,K]=(0,e.useState)({running:!1}),[S,F]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[I,H]=(0,e.useState)(""),[w,J]=(0,e.useState)("recent"),[d,R]=(0,e.useState)("all"),[V,Ee]=(0,e.useState)("all"),[Z,ee]=(0,e.useState)(null),[y,ce]=(0,e.useState)(null),[ue,ne]=(0,e.useState)(!1),[ae,G]=(0,e.useState)(0),[Q,ge]=(0,e.useState)(0),[se,me]=(0,e.useState)(!0),[Ce,oe]=(0,e.useState)(!1),[he,v]=(0,e.useState)(""),[ie,M]=(0,e.useState)(""),[$,te]=(0,e.useState)(null),[O,ze]=(0,e.useState)("none"),[W,L]=(0,e.useState)(0),[Ue,le]=(0,e.useState)(""),[He,C]=(0,e.useState)(!1),[Re,eo]=(0,e.useState)(null),[Ie,X]=(0,e.useState)(""),[De,Se]=(0,e.useState)({status:"none"}),[uo,be]=(0,e.useState)(!1),[Je,Ve]=(0,e.useState)(!1),[oo,Le]=(0,e.useState)(!1),[pe,to]=(0,e.useState)(null),[Ze,a]=(0,e.useState)(!1),[b,j]=(0,e.useState)([]),[Te,Me]=(0,e.useState)(!1),[q,ve]=(0,e.useState)([]),[Ae,Ge]=(0,e.useState)(null),[ro,go]=(0,e.useState)(""),[To,Mo]=(0,e.useState)([]),U=(0,e.useRef)(null),k=(0,e.useRef)(null),xe=(0,e.useRef)(0),Pe=(0,e.useRef)(S),Qe=(0,e.useRef)(0),Po=(0,e.useRef)(0),jo=(0,e.useRef)(0),Xo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{Pe.current=S},[S]),(0,e.useEffect)(()=>{k.current=y},[y]),(0,e.useEffect)(()=>{xe.current=Q},[Q]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await _(`${f}/ui-settings`);!o&&t&&Ve(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Eo=(0,e.useCallback)(()=>{Ve(o=>{let t=!o;return fetch(`${f}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),h=(0,e.useCallback)(o=>{M(o),window.clearTimeout(jo.current),jo.current=window.setTimeout(()=>M(""),2600)},[]),we=(0,e.useCallback)(async()=>{let o=await _(`${f}/episodes`);return i(o.items||[]),u(o.folders||[]),N(o.progress||{}),K(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await _(`${f}/state`);if(o)return;F(t.settings),u(t.folders||[]);let l=await we();if(o)return;let c=t.settings?.lastEpisodeId,z=c?(l.items||[]).find(B=>B.id===c):null;if(z){ce(z),ge(z.duration||0);let B=l.progress?.[z.id]?.position||0;Qe.current=B>5?B:0,G(Qe.current);let Ne=U.current;Ne&&(Ne.src=`${f}/episodes/${z.id}/audio`,Ne.load(),Ne.playbackRate=t.settings?.rate||1,Ne.volume=t.settings?.volume??.9)}me(!1),Xo.current=!0}catch(t){o||(v(t.message),me(!1))}})(),()=>{o=!0}},[we]),(0,e.useEffect)(()=>{if(!x.running)return;let o=setInterval(()=>{we().catch(()=>{})},1500);return()=>clearInterval(o)},[x.running,we]),(0,e.useEffect)(()=>{let o=!1;return te(null),le(""),L(0),y?.id?((async()=>{try{let t=await _(`${f}/episodes/${y.id}/transcript`);if(o)return;ze(t.status),to(t.status==="queued"||t.status==="running"?t:null),t.status==="done"&&t.transcript?te(t.transcript):t.status==="queued"||t.status==="running"?(L(t.elapsedMs||0),t.transcript&&te(t.transcript)):t.status==="error"&&le(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||le(t.message)}})(),()=>{o=!0}):(ze("none"),()=>{o=!0})},[y?.id]),(0,e.useEffect)(()=>{_(`${f}/translate/settings`).then(eo).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(O!=="queued"&&O!=="running")return;let o=!1,t=setInterval(async()=>{let l=k.current?.id;if(l)try{let c=await _(`${f}/episodes/${l}/transcript`);if(o)return;ze(c.status),to(c.status==="queued"||c.status==="running"?c:null),L(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?te(c.transcript):c.status==="done"&&c.transcript?(te(c.transcript),C(!0),h("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&le(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[O,h]),(0,e.useEffect)(()=>{if(De.status!=="running")return;let o=!1,t=setInterval(async()=>{let l=k.current?.id;if(l)try{let c=await _(`${f}/episodes/${l}/translate?target=${Ie}`);if(o)return;if(Se(c),c.status==="done"){let z=await _(`${f}/episodes/${l}/transcript`);!o&&z.transcript&&te(z.transcript),h("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[De.status,Ie,h]),(0,e.useEffect)(()=>{let o=!1,t=async()=>{try{let c=await _(`${f}/jobs`);o||j(c.items||[])}catch{}};t();let l=setInterval(t,2500);return()=>{o=!0,clearInterval(l)}},[]);let je=(0,e.useCallback)((o,t,l,c=!1)=>{if(!o)return;let z=Date.now();!c&&z-Po.current<4e3||(Po.current=z,A(`${f}/progress/${o}`,"PUT",{position:t,duration:l}).catch(()=>{}),N(B=>({...B,[o]:{position:t,duration:l,updatedAt:z}})))},[]),ye=(0,e.useCallback)(o=>{F(t=>({...t,...o})),A(`${f}/settings`,"PATCH",o).catch(()=>{})},[]),We=(0,e.useCallback)(async()=>{if(k.current){le(""),C(!0);try{let o=await A(`${f}/episodes/${k.current.id}/transcribe`,"POST",{});ze(o.status||"queued")}catch(o){le(o.message)}}},[]),Yo=(0,e.useCallback)(()=>{if($){C(o=>!o);return}if(O==="queued"||O==="running"){C(!0);return}We()},[$,O,We]),mo=(0,e.useCallback)(async()=>{if(k.current)try{await A(`${f}/episodes/${k.current.id}/transcribe/cancel`,"POST",{}),h("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(o){le(o.message)}},[h]),vo=(0,e.useCallback)(async(o,t)=>{try{t==="cancel"?await A(`${f}/episodes/${o.episodeId}/transcribe/cancel`,"POST",{}):t==="retry"?await A(`${f}/episodes/${o.episodeId}/transcribe`,"POST",{resume:!0}):t==="clear"&&await A(`${f}/jobs`,"DELETE",{key:o.key})}catch{}let l=await _(`${f}/jobs`).catch(()=>({items:[]}));j(l.items||[])},[]),no=(0,e.useCallback)(async o=>{let t=[...new Set(o)];if(t.length)try{let l=await A(`${f}/transcribe/batch`,"POST",{ids:t});h(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),ve([]),Me(!1)}catch(l){h(l.message)}},[h]),_o=(0,e.useCallback)(o=>{ve(t=>t.includes(o)?t.filter(l=>l!==o):[...t,o])},[]),ke=(0,e.useCallback)(async(o,t,l)=>{try{let c=await A(`${f}${o}`,t,l||{});return c?.transcript&&te(c.transcript),c}catch(c){return h(c.message),null}},[h]),Io=(0,e.useCallback)(o=>{Ge(o.id),go(o.text),Mo([])},[]),Do=(0,e.useCallback)(async o=>{if(!$)return;await ke(`/episodes/${$.id}/transcript/lines/${o??Ae}`,"PUT",{text:ro})&&(Ge(null),h("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[$,Ae,ro,ke,h]),Lo=(0,e.useCallback)(async(o,t)=>{if(!$)return;await ke(`/episodes/${$.id}/transcript/lines/${o??Ae}/split`,"POST",{offset:t})&&(Ge(null),h("\u5DF2\u62C6\u6210\u4E24\u884C"))},[$,Ae,ke,h]),Ao=(0,e.useCallback)(async o=>{if(!$)return;await ke(`/episodes/${$.id}/transcript/lines/${o}/merge`,"POST",{})&&h("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[$,ke,h]),Oo=(0,e.useCallback)(async()=>{if(!$)return;await ke(`/episodes/${$.id}/transcript/undo`,"POST",{})&&h("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[$,ke,h]),Bo=(0,e.useCallback)(async()=>{if($)try{let o=await _(`${f}/episodes/${$.id}/transcript/validate`);Mo(o.issues||[]),h(o.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(o.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(o){h(o.message)}},[$,h]),ao=(0,e.useCallback)(async()=>{let o=k.current?.id;if(!o)return;let t=await _(`${f}/episodes/${o}/transcript`);t.transcript&&te(t.transcript)},[]),qo=(0,e.useCallback)(async o=>{if(k.current?.id){Se({status:"running"});try{let t=await A(`${f}/episodes/${k.current.id}/translate`,"POST",{target:o});Se(t),t.status==="done"&&(await ao(),h("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){Se({status:"error",error:t.message})}}},[ao,h]),Ko=(0,e.useCallback)(async o=>{if(X(o),!o)return;if($?.lines?.some(l=>l.translations?.[o])){Se({status:"done"}),await ao();return}await qo(o)},[$,qo,ao]),Ro=o=>{let t=!o.favorite;i(l=>l.map(c=>c.id===o.id?{...c,favorite:t}:c)),A(`${f}/episodes/${o.id}/favorite`,"PUT",{favorite:t}).catch(l=>h(l.message))},Fo=async o=>{if(o.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${o.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let t of o)try{await fetch(`${f}/episodes/${t}`,{method:"DELETE"})}catch{}i(t=>t.filter(l=>!o.includes(l.id))),ve([]),o.includes(Z)&&ee(null),h(`\u5DF2\u79FB\u9664 ${o.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},Y=(0,e.useMemo)(()=>{let o=[...n];return w==="title"?o.sort((t,l)=>t.title.localeCompare(l.title,"zh-Hans-CN")):w==="duration"?o.sort((t,l)=>(l.duration||0)-(t.duration||0)):o.sort((t,l)=>l.mtime-t.mtime),o},[n,w]),fe=(0,e.useMemo)(()=>{let o=I.trim().toLowerCase();return Y.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let c=g[t.id]?.position||0,z=t.duration||0,B=z?c/z:0;return d==="inprogress"?c>5&&B<.97:d==="finished"?B>=.97:V==="unheard"?c<=5:V==="transcribed"?!!t.hasTranscript:V==="favorites"?!!t.favorite:!0})},[Y,I,d,V,g]),Uo=(0,e.useMemo)(()=>b.filter(o=>o.status==="queued"||o.status==="running"),[b]),Oe=(0,e.useMemo)(()=>fe.filter(o=>!o.hasTranscript),[fe]),fo=(0,e.useMemo)(()=>n.filter(o=>{let t=g[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(g[t.id]?.updatedAt||0)-(g[o.id]?.updatedAt||0)).slice(0,4),[n,g]),et=(0,e.useMemo)(()=>n.reduce((o,t)=>o+(t.duration||0),0),[n]),ot=Math.round(et/3600*10)/10,tt=d==="inprogress"?"\u7EE7\u7EED\u6536\u542C":d==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",E=Z?n.find(o=>o.id===Z)||(y?.id===Z?y:null):null,rt=se?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":x.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${fe.length} \u96C6 \xB7 \u5171 ${ot} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Lt=(0,e.useMemo)(()=>y?Y.findIndex(o=>o.id===y.id):-1,[Y,y]),Be=(0,e.useCallback)(()=>{let o=U.current;if(o){if(!k.current){let t=fe[0]||Y[0];t&&Xe(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[fe,Y]),Xe=(0,e.useCallback)((o,t=!0)=>{let l=U.current;if(!l||!o)return;if(k.current&&k.current.id===o.id){t&&Be();return}k.current&&!l.ended&&l.currentTime>1&&je(k.current.id,l.currentTime,l.duration||xe.current,!0),k.current=o,ce(o),ee(B=>B&&o.id),ge(o.duration||0);let c=g[o.id]?.position||0,z=c>5&&(!o.duration||c<o.duration-10)?c:0;Qe.current=z,G(z),l.src=`${f}/episodes/${o.id}/audio`,l.load(),l.playbackRate=Pe.current.rate||1,l.volume=Pe.current.volume??.9,t&&l.play().catch(()=>{}),ye({lastEpisodeId:o.id})},[g,je,ye,Be]),Ho=(0,e.useCallback)((o,t=!0)=>{o&&(Xe(o,t),ee(o.id))},[Xe]),ho=(0,e.useCallback)(o=>{let t=U.current;if(!t||!k.current)return;let l=Math.max(0,Math.min(o,t.duration||o));t.currentTime=l,G(l),je(k.current.id,l,t.duration||xe.current,!0)},[je]),Ye=(0,e.useCallback)(o=>{let t=U.current;if(!t||!k.current)return;let l=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||xe.current||0)-1));t.currentTime=l,G(l)},[]),bo=(0,e.useCallback)(o=>{if(!Y.length)return;let l=((k.current?Y.findIndex(c=>c.id===k.current.id):-1)+o+Y.length)%Y.length;Xe(Y[l],!0)},[Y,Xe]),nt=(0,e.useCallback)(()=>{let o=Co.indexOf(Pe.current.rate),t=Co[(o+1)%Co.length],l=U.current;l&&(l.playbackRate=t),ye({rate:t})},[ye]),so=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),l=U.current;l&&(l.volume=t),ye({volume:t})},[ye]),at=(0,e.useCallback)(()=>{let o=U.current,t=Pe.current.volume>0?0:.9;o&&(o.volume=t),ye({volume:t})},[ye]),st=()=>{let o=U.current;!o||!k.current||(G(o.currentTime),je(k.current.id,o.currentTime,o.duration||xe.current))},it=()=>{let o=U.current,t=k.current;if(!o||!t)return;let l=Number.isFinite(o.duration)?o.duration:t.duration||0;ge(l);let c=Qe.current;Qe.current=0,c>0&&c<l-1&&(o.currentTime=c,G(c))},lt=()=>{let o=U.current;k.current&&je(k.current.id,o?.duration||xe.current||0,o?.duration||xe.current||0,!0),bo(1)},pt=async o=>{await A(`${f}/folders`,"POST",{path:o}),await we(),h("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},dt=async()=>{let o=await fetch(`${f}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},ct=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),oo||Le(!0))},ut=o=>{o.currentTarget.contains(o.relatedTarget)||Le(!1)},gt=async o=>{o.preventDefault(),Le(!1);let t=o.dataTransfer,l=[...t?.files||[]],c=l.map(T=>T.path).filter(T=>typeof T=="string"&&T),z=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(T=>T.trim()).filter(T=>T.startsWith("file://")).map(T=>decodeURIComponent(T.replace(/^file:\/\//,""))),B=[...new Set([...c,...z])];if(B.length){try{let T=await A(`${f}/import/paths`,"POST",{paths:B});await we(),h(T.added?`\u5DF2\u6DFB\u52A0 ${T.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(T){v(T.message)}return}let Ne=l.filter(T=>T.size>0);if(!Ne.length){h("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let vt=`drop-${Date.now()}`,io="",yo=0;for(let T of Ne)try{let Jo=await fetch(`${f}/import/upload?name=${encodeURIComponent(T.name)}&batch=${vt}`,{method:"POST",body:T}),ft=await Jo.json();Jo.ok&&(io=ft.folder||io,yo+=1)}catch{}if(io)try{await A(`${f}/folders`,"POST",{path:io})}catch{}await we(),h(yo?`\u5DF2\u5BFC\u5165 ${yo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},mt=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await A(`${f}/folders`,"DELETE",{path:o}),await we(),h("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){v(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let l=t.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),Be()):t.key==="ArrowRight"?(t.preventDefault(),Ye(15)):t.key==="ArrowLeft"?(t.preventDefault(),Ye(-15)):t.key==="ArrowUp"?(t.preventDefault(),so(Pe.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),so(Pe.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Be,Ye,so]);let xo=o=>{let t=g[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},wo=o=>{let t=g[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${Je?"nav-collapsed":""}`,onDragOver:ct,onDragLeave:ut,onDrop:gt},oo?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,Je?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(D,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(D,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.10.4"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(D,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",fo.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(xo).length]].map(([o,t,l])=>e.default.createElement("button",{key:o,className:`nav-item ${d===o?"active":""}`,onClick:()=>R(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},l||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>oe(!0)},e.default.createElement(D,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(D,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Go(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>mt(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,tt),e.default.createElement("p",{className:"subline"},rt)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${Ze?"is-on":""}`,onClick:()=>a(o=>!o),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(D,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Uo.length?` ${Uo.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Te?"is-on":""}`,onClick:()=>{Me(o=>!o),ve([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(D,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(D,{name:"search",size:16}),e.default.createElement("input",{value:I,onChange:o=>H(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:o=>J(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Te?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",q.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>ve(fe.map(o=>o.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Oe.length,onClick:()=>no(Oe.map(o=>o.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Oe.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!q.length,onClick:()=>no(q)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!q.length,onClick:()=>Fo(q)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{ve([]),Me(!1)}},"\u53D6\u6D88")):null,he?e.default.createElement("div",{className:"banner error",onClick:()=>v("")},he," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,E?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>ee(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},E.artist,E.album?` \xB7 ${E.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ke,{item:E,size:288})),e.default.createElement("h2",{className:"episode-title"},E.title),e.default.createElement("p",{className:"episode-sub"},E.artist,E.album?` \xB7 ${E.album}`:""),e.default.createElement("p",{className:"episode-path",title:E.file},E.location||E.file),e.default.createElement("p",{className:"episode-stats"},ko(E.duration)," \xB7 ",No(E.mtime)," \xB7 \u5DF2\u542C ",Math.round(wo(E)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Be},ue&&y?.id===E.id?"\u6682\u505C":"\u64AD\u653E"),O==="queued"||O==="running"?e.default.createElement("button",{className:"btn ghost",onClick:mo},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:We},$?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Fo([E.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(co,{inline:!0,transcript:$,status:O,progress:pe?.progress,stage:pe?.stage,chunks:pe?.chunks,queued:pe?.queued,elapsed:W,editingId:Ae,draft:ro,onDraftChange:go,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Ge(null),onSplitLine:Lo,onMergeLine:Ao,onUndo:Oo,onValidate:Bo,issues:To,onCancel:mo,error:Ue,position:ae,onSeek:ho,onClose:()=>ee(null),onStart:We,target:Ie,job:De,onChangeTarget:Ko,onOpenSettings:()=>be(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([o,t])=>e.default.createElement("button",{key:o,className:`chip ${V===o?"is-on":""}`,onClick:()=>Ee(o)},t))),d==="all"&&!I&&fo.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},fo.map(o=>{let t=wo(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${y?.id===o.id?"is-current":""}`,onClick:()=>Ho(o,!0)},e.default.createElement(Ke,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),se?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):fe.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>oe(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},fe.map((o,t)=>{let l=wo(o),c=y?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${c?"is-current":""} ${xo(o)?"is-finished":""} ${Te&&q.includes(o.id)?"is-selected":""}`,onClick:()=>Te?_o(o.id):Ho(o,!0)},e.default.createElement("span",{className:"col-index row-index"},Te?q.includes(o.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(D,{name:"check",size:14})):null:c&&ue?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ke,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",No(o.mtime),o.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},ko(o.duration)),e.default.createElement("span",{className:`row-star ${o.favorite?"is-on":""}`,role:"button",title:o.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:z=>{z.stopPropagation(),Ro(o)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},xo(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(D,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),He&&y&&!E?e.default.createElement(co,{transcript:$,status:O,progress:pe?.progress,stage:pe?.stage,chunks:pe?.chunks,queued:pe?.queued,elapsed:W,editingId:Ae,draft:ro,onDraftChange:go,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Ge(null),onSplitLine:Lo,onMergeLine:Ao,onUndo:Oo,onValidate:Bo,issues:To,onCancel:mo,error:Ue,position:ae,onSeek:ho,onClose:()=>C(!1),onStart:We,target:Ie,job:De,onChangeTarget:Ko,onOpenSettings:()=>be(!0)}):null,Ze?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>a(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},b.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):b.map(o=>e.default.createElement("div",{key:o.key,className:`job-row job-${o.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},o.episodeTitle||o.episodeId),e.default.createElement("span",{className:"job-meta"},Wo(o)),o.status==="running"&&o.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${o.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},o.status==="queued"||o.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>vo(o,"cancel")},"\u53D6\u6D88"):null,o.status==="error"||o.status==="interrupted"||o.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>vo(o,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(o.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>vo(o,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Oe.length,onClick:()=>no(Oe.map(o=>o.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Oe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!q.length,onClick:()=>no(q)},"\u8F6C\u5199\u5DF2\u9009 ",q.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${Q?Math.min(100,Math.max(0,ae/Q*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:Q||0,step:.05,value:Math.min(ae,Q||0),onChange:o=>ho(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},y?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ke,{item:y,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:y.title},y.title),e.default.createElement("div",{className:"now-artist"},y.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>bo(-1)},e.default.createElement(D,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Ye(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Be,disabled:!y&&fe.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(D,{name:ue?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Ye(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>bo(1)},e.default.createElement(D,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${He?"active":""}`,onClick:Yo,disabled:!y,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(D,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":O==="queued"||O==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},_e(ae)," / ",_e(Q)),e.default.createElement("button",{className:"rate-btn",onClick:nt,title:"\u64AD\u653E\u901F\u5EA6"},S.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:at,title:"\u9759\u97F3"},e.default.createElement(D,{name:S.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:S.volume,onChange:o=>so(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),Ce?e.default.createElement(zt,{onClose:()=>oe(!1),onSubmit:pt,onPick:dt}):null,uo?e.default.createElement(St,{config:Re,onClose:()=>be(!1),onSave:async o=>{let t=await A(`${f}/translate/settings`,"PUT",o);eo(t),be(!1),h("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ie?e.default.createElement("div",{className:"toast"},ie):null,e.default.createElement("audio",{ref:U,preload:"metadata",onPlay:()=>ne(!0),onPause:()=>{ne(!1);let o=U.current;k.current&&o&&o.currentTime>0&&!o.ended&&je(k.current.id,o.currentTime,o.duration||xe.current,!0)},onTimeUpdate:st,onLoadedMetadata:it,onEnded:lt,onError:()=>{ne(!1),h("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var r=qe(require("react"),1);var P="/podwave/api";async function re(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function $e(n,i,s){let u=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function Tt(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function Fe(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Mt(n){if(!n)return"";let i=new Date(n),s=u=>String(u).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function So(){let[n,i]=(0,r.useState)([]),[s,u]=(0,r.useState)([]),[g,N]=(0,r.useState)({asrModel:"",translateModel:""}),[x,K]=(0,r.useState)(null),[S,F]=(0,r.useState)(null),[I,H]=(0,r.useState)({showSidebarPanel:!0}),[w,J]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[d,R]=(0,r.useState)(null),[V,Ee]=(0,r.useState)(null),[Z,ee]=(0,r.useState)("auto"),[y,ce]=(0,r.useState)(!1),[ue,ne]=(0,r.useState)(""),[ae,G]=(0,r.useState)(15),[Q,ge]=(0,r.useState)(!0),[se,me]=(0,r.useState)("api"),[Ce,oe]=(0,r.useState)("https://api.deepseek.com"),[he,v]=(0,r.useState)("deepseek-chat"),[ie,M]=(0,r.useState)(""),[$,te]=(0,r.useState)(""),[O,ze]=(0,r.useState)(""),[W,L]=(0,r.useState)(""),[Ue,le]=(0,r.useState)(""),[He,C]=(0,r.useState)(""),Re=(0,r.useCallback)(async()=>{try{let[a,b,j,Te,Me,q,ve]=await Promise.all([re(`${P}/history`),re(`${P}/models`),re(`${P}/translate/settings`),re(`${P}/ui-settings`),re(`${P}/transcribe/settings`),re(`${P}/import/settings`),re(`${P}/setup`)]);R(ve),ve?.job?.status==="running"&&ce(!0),J({mode:q.mode||"copy",orphans:q.orphans||0,orphanBytes:q.orphanBytes||0}),H({showSidebarPanel:Te?.showSidebarPanel!==!1}),ne((Me.hotwords||[]).join(" ")),G(Me.chunkMinutes||15),ge(Me.diarize!==!1),i(a.items||[]),u(b.models||[]),N(b.config||{asrModel:"",translateModel:""}),K(b.transcribe||null),te(b.config?.asrModel||""),ze(b.config?.translateModel||""),F(j),me(j.provider||"api"),oe(j.apiBase||"https://api.deepseek.com"),v(j.apiModel||"deepseek-chat"),M(""),C("")}catch(a){C(a.message)}},[]);(0,r.useEffect)(()=>{Re()},[Re]),(0,r.useEffect)(()=>{let a=!1;return re(`${P}/setup/plan?source=${Z}`).then(b=>{a||Ee(b)}).catch(()=>{}),()=>{a=!0}},[Z,d?.job?.status]),(0,r.useEffect)(()=>{if(!y&&d?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let b=await re(`${P}/setup`);R(b),b.job?.status!=="running"&&ce(!1)}catch{}},2500);return()=>window.clearInterval(a)},[y,d?.job?.status]);let eo=async()=>{C(""),ce(!0);try{await $e(`${P}/setup/install`,"POST",{source:Z});let a=await re(`${P}/setup`);R(a),X("\u5F00\u59CB\u5B89\u88C5")}catch(a){ce(!1),C(a.message)}},Ie=async()=>{try{await $e(`${P}/setup/cancel`,"POST",{}),X("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){C(a.message)}},X=a=>{le(a),window.setTimeout(()=>le(""),2400)},De=async()=>{try{let a=await re(`${P}/setup/diagnose`),b=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(b)}catch{let j=document.createElement("textarea");j.value=b,j.style.position="fixed",j.style.opacity="0",document.body.appendChild(j),j.select(),document.execCommand("copy"),j.remove()}X("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){X(a.message||"\u590D\u5236\u5931\u8D25")}},Se=async()=>{L("api"),C("");try{let a={provider:se,apiBase:Ce,apiModel:he};ie.trim()&&(a.apiKey=ie.trim());let b=await $e(`${P}/translate/settings`,"PUT",a);F(b),M(""),X("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){C(a.message)}finally{L("")}},uo=async()=>{L("models"),C("");try{let a=await $e(`${P}/models`,"PUT",{asrModel:$,translateModel:O});N(a.config),u(a.models||[]),K(a.transcribe||null),X("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){C(a.message)}finally{L("")}},be=s.length?s:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:x?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:S?.localReady}],Je=be.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),Ve=be.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),oo=async()=>{L("ui"),C("");try{let a=await $e(`${P}/ui-settings`,"PUT",{showSidebarPanel:I.showSidebarPanel});H({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),X("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){C(a.message)}finally{L("")}},Le=async a=>{L("import"),C("");try{let b=await $e(`${P}/import/settings`,"PUT",{mode:a});J(j=>({...j,mode:b.mode})),X("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(b){C(b.message)}finally{L("")}},pe=async()=>{if(w.orphans&&window.confirm(`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){L("imports"),C("");try{let a=await $e(`${P}/imports/orphans`,"DELETE",{});J(b=>({...b,orphans:0,orphanBytes:0})),X(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){C(a.message)}finally{L("")}}},to=async()=>{L("transcribe"),C("");try{let a=ue.split(/[\s,，、]+/).map(j=>j.trim()).filter(Boolean).slice(0,500),b=await $e(`${P}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(ae)||15)),diarize:Q});ne((b.hotwords||[]).join(" ")),G(b.chunkMinutes||15),ge(b.diarize!==!1),X("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){C(a.message)}finally{L("")}},Ze=be;return r.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,po),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),He?r.default.createElement("div",{className:"banner error",onClick:()=>C("")},He):null,Ue?r.default.createElement("div",{className:"settings-message"},Ue):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),d?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},d.platform?.osLabel," \xB7 ",d.platform?.arch," \xB7 ",d.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",d.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",d.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:De},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F")),r.default.createElement("ul",{className:"setup-components"},(d.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},Fe(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:Z,onChange:a=>ee(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),V?.items?.length?r.default.createElement("details",{className:"setup-plan",open:!0},r.default.createElement("summary",null,"\u5C06\u4E0B\u8F7D ",Fe(V.totalBytes)," \xB7 ",V.items.length," \u9879"),r.default.createElement("ul",null,V.items.map(a=>r.default.createElement("li",{key:a.id},r.default.createElement("span",null,a.label),r.default.createElement("span",null,a.bytes?Fe(a.bytes):a.note||"\u6309\u5B9E\u9645\u4E0B\u8F7D"))))):r.default.createElement("p",{className:"settings-hint"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u65E0\u9700\u4E0B\u8F7D\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:y||d.job?.status==="running",onClick:eo},y||d.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),d.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:Ie},"\u53D6\u6D88"):null),d.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,d.job.stage||d.job.status),r.default.createElement("span",null,d.job.progress||0,"% \xB7 ",Fe(d.job.bytes)," / ",Fe(d.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${d.job.progress||0}%`}})),d.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",d.job.error):null,d.job.status==="done"&&(!d.job.summary||!d.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(d.job.summary)&&d.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},d.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",Fe(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",n.length," \u6761\u3002"),n.length?r.default.createElement("ul",{className:"history-list"},n.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Tt(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},Mt(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:ue,onChange:a=>ne(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:ae,onChange:a=>G(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:Q,onChange:a=>ge(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:to,disabled:W==="transcribe"},W==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="copy",onChange:()=>Le("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="reference",onChange:()=>Le("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:pe,disabled:W==="imports"||!w.orphans},w.orphans?`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(w.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:se,onChange:a=>me(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:Ce,onChange:a=>oe(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:he,onChange:a=>v(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:ie,onChange:a=>M(a.target.value),placeholder:S?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${S.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Se,disabled:W==="api"},W==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},S?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:I.showSidebarPanel,onChange:a=>H({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:oo,disabled:W==="ui"},W==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:$,onChange:a=>te(a.target.value)},(Je.length?Je:Ze).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},x?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:O,onChange:a=>ze(a.target.value)},(Ve.length?Ve:Ze).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},S?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:uo,disabled:W==="models"},W==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Pt({size:n=16}){return de.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},de.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),de.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),de.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),de.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function jt(){return de.default.createElement("div",{className:"podwave-root"},de.default.createElement("style",null,po),de.default.createElement(zo,null))}function Et(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},jt)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},So));let i=null,s="podwave-hide-nav",u=N=>{if(typeof document>"u")return;let x=document.getElementById(s);N&&!x?(x=document.createElement("style"),x.id=s,x.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(x)):!N&&x&&x.remove()},g=N=>{if(u(!N),N&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Pt);else if(!N&&i){let x=i;i=null;try{typeof x?.dispose=="function"?x.dispose():typeof x=="function"?x():typeof x?.dispose>"u"&&typeof x?.unregister=="function"&&x.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(N=>N.ok?N.json():null).then(N=>g(N?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",N=>{g(N?.detail?.showSidebarPanel!==!1)})}var It=["slots"];

return module.exports}})
