window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ht=Object.create;var io=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var xt=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty;var kt=(n,i)=>{for(var s in i)io(n,s,{get:i[s],enumerable:!0})},Vo=(n,i,s,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let g of wt(i))!yt.call(n,g)&&g!==s&&io(n,g,{get:()=>i[g],enumerable:!(u=bt(i,g))||u.enumerable});return n};var qe=(n,i,s)=>(s=n!=null?ht(xt(n)):{},Vo(i||!n||!n.__esModule?io(s,"default",{value:n,enumerable:!0}):s,n)),Nt=n=>Vo(io({},"__esModule",{value:!0}),n);var Dt={};kt(Dt,{apply:()=>Et,inject:()=>It});module.exports=Nt(Dt);var ie=qe(require("react"),1);var lo=`.podwave-root {
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
`;var e=qe(require("react"),1);var v=qe(require("react"),1);function A({name:n,size:i=18}){let s={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(n){case"play":return v.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return v.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},v.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),v.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return v.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),v.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return v.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),v.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return v.default.createElement("svg",{...s},v.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),v.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),v.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),v.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return v.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},v.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),v.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),v.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),v.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),v.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return v.default.createElement("svg",{...s},v.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var $o=qe(require("react"),1);function Ye(n){if(!Number.isFinite(n)||n<0)return"0:00";let i=Math.floor(n),s=Math.floor(i/3600),u=Math.floor(i%3600/60),g=i%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(g).padStart(2,"0")}`:`${u}:${String(g).padStart(2,"0")}`}function ko(n){if(!n)return"\u2014";let i=Math.floor(n/3600),s=Math.round(n%3600/60);return i>0?`${i} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function No(n){if(!n)return"";let i=new Date(n),s=Date.now()-n;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function Zo(n){let s=String(n||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return s?s[0].toUpperCase():"\u266B"}function Go(n){let i=String(n).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Ct="/podwave/api";function Ke({item:n,size:i=44,className:s=""}){let u={width:i,height:i};return n&&n.hasCover?$o.default.createElement("img",{className:`cover ${s}`,style:u,src:`${Ct}/episodes/${n.id}/cover`,alt:"",loading:"lazy",draggable:!1}):$o.default.createElement("div",{className:`cover cover-fallback ${s}`,style:u,"aria-hidden":!0},Zo(n&&n.title))}var d=qe(require("react"),1);var Qo="/podwave/api";function po({transcript:n,status:i,progress:s,stage:u,chunks:g,queued:y,elapsed:b,error:K,position:T,onSeek:F,onClose:D,onStart:J,onCancel:w,target:V,job:p,onChangeTarget:Y,onOpenSettings:oe,inline:Te=!1,editingId:Z=null,draft:q="",onDraftChange:k,onEditLine:me,onSaveLine:le,onCancelEdit:te,onSplitLine:re,onMergeLine:G,onUndo:Q,onValidate:fe,issues:ne=[]}){let de=(0,d.useRef)(null),Ne=(0,d.useRef)(null),_=n?.lines?.findIndex(m=>T>=m.start&&T<m.end)??-1;(0,d.useEffect)(()=>{if(_<0||!de.current)return;de.current.querySelector(`[data-seg="${_}"]`)?.scrollIntoView({block:"nearest"})},[_]);let pe=i==="queued"||i==="running";return d.default.createElement("section",{className:`transcript-panel ${Te?"inline":""}`},d.default.createElement("header",{className:"transcript-head"},d.default.createElement("h3",null,"\u5B57\u5E55"),n?d.default.createElement("span",{className:"transcript-meta"},n.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",n.lines.length," \u884C",n.speakers?.length?` \xB7 ${n.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,d.default.createElement("div",{className:"transcript-actions"},d.default.createElement("select",{className:"tr-select",value:V,onChange:m=>Y(m.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},d.default.createElement("option",{value:""},"\u5BF9\u7167"),d.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),d.default.createElement("option",{value:"en"},"English")),d.default.createElement("button",{className:"mini-link",onClick:oe},"\u8BBE\u7F6E"),n?d.default.createElement(d.default.Fragment,null,d.default.createElement("button",{className:"mini-link",onClick:Q,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),d.default.createElement("button",{className:"mini-link",onClick:fe,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),d.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${n.id}/transcript/export?format=srt`,download:!0},"SRT"),d.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${n.id}/transcript/export?format=md`,download:!0},"Markdown")):null,Te?null:d.default.createElement("button",{className:"transcript-close",onClick:D,title:"\u6536\u8D77"},"\xD7"))),d.default.createElement("div",{className:"transcript-body",ref:de},n&&pe?d.default.createElement("div",{className:"tr-strip"},d.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":u==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min((g.done||0)+1,g.total)}/${g.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${n.lines.length} \u884C`),w?d.default.createElement("button",{className:"seg-tool",onClick:w},"\u53D6\u6D88"):null):null,n&&ne?.length?d.default.createElement("div",{className:"tr-issues"},ne.slice(0,5).map(m=>d.default.createElement("div",{key:m},"\xB7 ",m)),ne.length>5?d.default.createElement("div",null,"\u2026\u5171 ",ne.length," \u6761"):null):null,p?.status==="running"?d.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,p?.status==="error"?d.default.createElement("div",{className:"tr-running err"},p.error):null,n?n.lines.map((m,ce)=>d.default.createElement("div",{key:m.id,"data-seg":ce,className:`seg-row ${ce===_?"active":""} ${Z===m.id?"is-editing":""}`,onClick:()=>F(m.start)},d.default.createElement("span",{className:"seg-time"},Ye(m.start)),Z===m.id?d.default.createElement("span",{className:"seg-edit",onClick:P=>P.stopPropagation()},d.default.createElement("textarea",{ref:Ne,value:q,rows:Math.min(4,Math.max(2,Math.ceil((q.length||1)/40))),onChange:P=>k(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(P.metaKey||P.ctrlKey)&&le(m.id),P.key==="Escape"&&te()}}),d.default.createElement("span",{className:"seg-edit-actions"},d.default.createElement("button",{className:"seg-tool",onClick:()=>le(m.id)},"\u4FDD\u5B58"),d.default.createElement("button",{className:"seg-tool",onClick:()=>re(m.id,Ne.current?.selectionStart??Math.floor(q.length/2))},"\u62C6\u5206"),d.default.createElement("button",{className:"seg-tool",onClick:te},"\u53D6\u6D88"))):d.default.createElement(d.default.Fragment,null,m.speaker!=null?d.default.createElement("span",{className:`seg-speaker spk-${m.speaker%5}`},n.speakers?.[m.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${m.speaker+1}`):null,d.default.createElement("span",{className:"seg-text"},m.text,m.translations?.[V]?d.default.createElement("span",{className:"seg-trans"},m.translations[V]):null),d.default.createElement("span",{className:"seg-tools"},d.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:P=>{P.stopPropagation(),me(m)}},"\u270E"),ce<n.lines.length-1?d.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:P=>{P.stopPropagation(),G(m.id)}},"\u21E3"):null)))):pe?d.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":u==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":u==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",s?.percent!=null?` ${s.percent}%`:"",g?.total?` \xB7 \u7B2C ${Math.min(g.done+1,g.total)}/${g.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((b||0)/1e3)+" \u79D2",s?.percent!=null?d.default.createElement("span",{className:"tx-progress"},d.default.createElement("span",{style:{width:`${s.percent}%`}})):null,d.default.createElement("br",null),d.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),d.default.createElement("br",null),w?d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:w},"\u53D6\u6D88\u8F6C\u5199"):null):K?d.default.createElement("div",{className:"transcript-status"},d.default.createElement("span",{className:"err"},K),d.default.createElement("br",null),d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:J},"\u91CD\u8BD5")):d.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",d.default.createElement("br",null),d.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:J},"\u5F00\u59CB\u8F6C\u5199"))))}function Wo(n){let i=n.progress?.percent,s=n.chunks?.total?` \xB7 ${n.chunks.done}/${n.chunks.total} \u5757`:"";return n.status==="done"?`\u5B8C\u6210${n.lineCount?` \xB7 ${n.lineCount} \u884C`:""}${n.language?` \xB7 ${n.language}`:""}`:n.status==="error"||n.status==="interrupted"?n.error||"\u5931\u8D25":n.status==="cancelled"?n.error||"\u5DF2\u53D6\u6D88":n.status==="queued"?"\u6392\u961F\u4E2D":`${n.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":n.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":n.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${s}`}var f="/podwave/api",Co=[.75,1,1.25,1.5,1.75,2];async function X(n){let i=await fetch(n);if(!i.ok){let s=await i.json().catch(()=>({}));throw new Error(s.error||i.statusText)}return i.json()}async function O(n,i,s){let u=await fetch(n,{method:i,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!u.ok){let g=await u.json().catch(()=>({}));throw new Error(g.error||u.statusText)}return u.json()}function zt({onSubmit:n,onPick:i,onClose:s}){let[u,g]=(0,e.useState)(""),[y,b]=(0,e.useState)(!1),[K,T]=(0,e.useState)(!1),[F,D]=(0,e.useState)(""),J=(0,e.useRef)(null);return(0,e.useEffect)(()=>{J.current?.focus();let p=Y=>{Y.key==="Escape"&&s()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[s]),e.default.createElement("div",{className:"overlay",onMouseDown:p=>{p.target===p.currentTarget&&s()}},e.default.createElement("form",{className:"dialog",onSubmit:async p=>{if(p.preventDefault(),!(!u.trim()||y)){b(!0),D("");try{await n(u.trim()),s()}catch(Y){D(Y.message),b(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:s},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!K){T(!0),D("");try{let p=await i();if(p?.canceled)return;if(p?.error)throw new Error(p.error);p?.path&&(await n(p.path),s())}catch(p){D(p.message)}finally{T(!1)}}},disabled:K,autoFocus:!0},K?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:J,value:u,onChange:p=>g(p.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:y||!u.trim()},y?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),F?e.default.createElement("div",{className:"dialog-error"},F):null))}function St({config:n,onClose:i,onSave:s}){let[u,g]=(0,e.useState)(n?.provider||"api"),[y,b]=(0,e.useState)(""),[K,T]=(0,e.useState)(!1),[F,D]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{w.preventDefault(),T(!0),D("");try{await s({provider:u,apiKey:y||void 0})}catch(V){D(V.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",n?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:u,onChange:w=>g(w.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),u==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:y,onChange:w=>b(w.target.value),placeholder:n?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},n?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),F?e.default.createElement("div",{className:"dialog-error"},F):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:K},"\u4FDD\u5B58"))))}function zo(){let[n,i]=(0,e.useState)([]),[s,u]=(0,e.useState)([]),[g,y]=(0,e.useState)({}),[b,K]=(0,e.useState)({running:!1}),[T,F]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[D,J]=(0,e.useState)(""),[w,V]=(0,e.useState)("recent"),[p,Y]=(0,e.useState)("all"),[oe,Te]=(0,e.useState)("all"),[Z,q]=(0,e.useState)(null),[k,me]=(0,e.useState)(null),[le,te]=(0,e.useState)(!1),[re,G]=(0,e.useState)(0),[Q,fe]=(0,e.useState)(0),[ne,de]=(0,e.useState)(!0),[Ne,_]=(0,e.useState)(!1),[pe,m]=(0,e.useState)(""),[ce,P]=(0,e.useState)(""),[N,R]=(0,e.useState)(null),[z,L]=(0,e.useState)("none"),[Fe,Me]=(0,e.useState)(0),[Ue,$]=(0,e.useState)(""),[He,$e]=(0,e.useState)(!1),[co,U]=(0,e.useState)(null),[Pe,uo]=(0,e.useState)(""),[je,ue]=(0,e.useState)({status:"none"}),[Re,Ce]=(0,e.useState)(!1),[eo,Je]=(0,e.useState)(!1),[oo,Ve]=(0,e.useState)(!1),[ee,a]=(0,e.useState)(null),[C,j]=(0,e.useState)(!1),[Ee,Ie]=(0,e.useState)([]),[ge,De]=(0,e.useState)(!1),[ae,Le]=(0,e.useState)([]),[Ae,Ze]=(0,e.useState)(null),[to,go]=(0,e.useState)(""),[To,Mo]=(0,e.useState)([]),H=(0,e.useRef)(null),x=(0,e.useRef)(null),he=(0,e.useRef)(0),ze=(0,e.useRef)(T),Ge=(0,e.useRef)(0),Po=(0,e.useRef)(0),jo=(0,e.useRef)(0),Xo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{ze.current=T},[T]),(0,e.useEffect)(()=>{x.current=k},[k]),(0,e.useEffect)(()=>{he.current=Q},[Q]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await X(`${f}/ui-settings`);!o&&t&&Je(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Eo=(0,e.useCallback)(()=>{Je(o=>{let t=!o;return fetch(`${f}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),h=(0,e.useCallback)(o=>{P(o),window.clearTimeout(jo.current),jo.current=window.setTimeout(()=>P(""),2600)},[]),be=(0,e.useCallback)(async()=>{let o=await X(`${f}/episodes`);return i(o.items||[]),u(o.folders||[]),y(o.progress||{}),K(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await X(`${f}/state`);if(o)return;F(t.settings),u(t.folders||[]);let l=await be();if(o)return;let c=t.settings?.lastEpisodeId,S=c?(l.items||[]).find(B=>B.id===c):null;if(S){me(S),fe(S.duration||0);let B=l.progress?.[S.id]?.position||0;Ge.current=B>5?B:0,G(Ge.current);let ye=H.current;ye&&(ye.src=`${f}/episodes/${S.id}/audio`,ye.load(),ye.playbackRate=t.settings?.rate||1,ye.volume=t.settings?.volume??.9)}de(!1),Xo.current=!0}catch(t){o||(m(t.message),de(!1))}})(),()=>{o=!0}},[be]),(0,e.useEffect)(()=>{if(!b.running)return;let o=setInterval(()=>{be().catch(()=>{})},1500);return()=>clearInterval(o)},[b.running,be]),(0,e.useEffect)(()=>{let o=!1;return R(null),$(""),Me(0),k?.id?((async()=>{try{let t=await X(`${f}/episodes/${k.id}/transcript`);if(o)return;L(t.status),a(t.status==="queued"||t.status==="running"?t:null),t.status==="done"&&t.transcript?R(t.transcript):t.status==="queued"||t.status==="running"?(Me(t.elapsedMs||0),t.transcript&&R(t.transcript)):t.status==="error"&&$(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||$(t.message)}})(),()=>{o=!0}):(L("none"),()=>{o=!0})},[k?.id]),(0,e.useEffect)(()=>{X(`${f}/translate/settings`).then(U).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(z!=="queued"&&z!=="running")return;let o=!1,t=setInterval(async()=>{let l=x.current?.id;if(l)try{let c=await X(`${f}/episodes/${l}/transcript`);if(o)return;L(c.status),a(c.status==="queued"||c.status==="running"?c:null),Me(c.elapsedMs||0),(c.status==="queued"||c.status==="running")&&c.transcript?R(c.transcript):c.status==="done"&&c.transcript?(R(c.transcript),$e(!0),h("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&$(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[z,h]),(0,e.useEffect)(()=>{if(je.status!=="running")return;let o=!1,t=setInterval(async()=>{let l=x.current?.id;if(l)try{let c=await X(`${f}/episodes/${l}/translate?target=${Pe}`);if(o)return;if(ue(c),c.status==="done"){let S=await X(`${f}/episodes/${l}/transcript`);!o&&S.transcript&&R(S.transcript),h("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[je.status,Pe,h]),(0,e.useEffect)(()=>{let o=!1,t=async()=>{try{let c=await X(`${f}/jobs`);o||Ie(c.items||[])}catch{}};t();let l=setInterval(t,2500);return()=>{o=!0,clearInterval(l)}},[]);let Se=(0,e.useCallback)((o,t,l,c=!1)=>{if(!o)return;let S=Date.now();!c&&S-Po.current<4e3||(Po.current=S,O(`${f}/progress/${o}`,"PUT",{position:t,duration:l}).catch(()=>{}),y(B=>({...B,[o]:{position:t,duration:l,updatedAt:S}})))},[]),we=(0,e.useCallback)(o=>{F(t=>({...t,...o})),O(`${f}/settings`,"PATCH",o).catch(()=>{})},[]),Qe=(0,e.useCallback)(async()=>{if(x.current){$(""),$e(!0);try{let o=await O(`${f}/episodes/${x.current.id}/transcribe`,"POST",{});L(o.status||"queued")}catch(o){$(o.message)}}},[]),Yo=(0,e.useCallback)(()=>{if(N){$e(o=>!o);return}if(z==="queued"||z==="running"){$e(!0);return}Qe()},[N,z,Qe]),vo=(0,e.useCallback)(async()=>{if(x.current)try{await O(`${f}/episodes/${x.current.id}/transcribe/cancel`,"POST",{}),h("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(o){$(o.message)}},[h]),mo=(0,e.useCallback)(async(o,t)=>{try{t==="cancel"?await O(`${f}/episodes/${o.episodeId}/transcribe/cancel`,"POST",{}):t==="retry"?await O(`${f}/episodes/${o.episodeId}/transcribe`,"POST",{resume:!0}):t==="clear"&&await O(`${f}/jobs`,"DELETE",{key:o.key})}catch{}let l=await X(`${f}/jobs`).catch(()=>({items:[]}));Ie(l.items||[])},[]),ro=(0,e.useCallback)(async o=>{let t=[...new Set(o)];if(t.length)try{let l=await O(`${f}/transcribe/batch`,"POST",{ids:t});h(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),Le([]),De(!1)}catch(l){h(l.message)}},[h]),_o=(0,e.useCallback)(o=>{Le(t=>t.includes(o)?t.filter(l=>l!==o):[...t,o])},[]),xe=(0,e.useCallback)(async(o,t,l)=>{try{let c=await O(`${f}${o}`,t,l||{});return c?.transcript&&R(c.transcript),c}catch(c){return h(c.message),null}},[h]),Io=(0,e.useCallback)(o=>{Ze(o.id),go(o.text),Mo([])},[]),Do=(0,e.useCallback)(async o=>{if(!N)return;await xe(`/episodes/${N.id}/transcript/lines/${o??Ae}`,"PUT",{text:to})&&(Ze(null),h("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[N,Ae,to,xe,h]),Lo=(0,e.useCallback)(async(o,t)=>{if(!N)return;await xe(`/episodes/${N.id}/transcript/lines/${o??Ae}/split`,"POST",{offset:t})&&(Ze(null),h("\u5DF2\u62C6\u6210\u4E24\u884C"))},[N,Ae,xe,h]),Ao=(0,e.useCallback)(async o=>{if(!N)return;await xe(`/episodes/${N.id}/transcript/lines/${o}/merge`,"POST",{})&&h("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[N,xe,h]),Oo=(0,e.useCallback)(async()=>{if(!N)return;await xe(`/episodes/${N.id}/transcript/undo`,"POST",{})&&h("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[N,xe,h]),Bo=(0,e.useCallback)(async()=>{if(N)try{let o=await X(`${f}/episodes/${N.id}/transcript/validate`);Mo(o.issues||[]),h(o.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(o.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(o){h(o.message)}},[N,h]),no=(0,e.useCallback)(async()=>{let o=x.current?.id;if(!o)return;let t=await X(`${f}/episodes/${o}/transcript`);t.transcript&&R(t.transcript)},[]),qo=(0,e.useCallback)(async o=>{if(x.current?.id){ue({status:"running"});try{let t=await O(`${f}/episodes/${x.current.id}/translate`,"POST",{target:o});ue(t),t.status==="done"&&(await no(),h("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){ue({status:"error",error:t.message})}}},[no,h]),Ko=(0,e.useCallback)(async o=>{if(uo(o),!o)return;if(N?.lines?.some(l=>l.translations?.[o])){ue({status:"done"}),await no();return}await qo(o)},[N,qo,no]),Ro=o=>{let t=!o.favorite;i(l=>l.map(c=>c.id===o.id?{...c,favorite:t}:c)),O(`${f}/episodes/${o.id}/favorite`,"PUT",{favorite:t}).catch(l=>h(l.message))},Fo=async o=>{if(o.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${o.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let t of o)try{await fetch(`${f}/episodes/${t}`,{method:"DELETE"})}catch{}i(t=>t.filter(l=>!o.includes(l.id))),Le([]),o.includes(Z)&&q(null),h(`\u5DF2\u79FB\u9664 ${o.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},W=(0,e.useMemo)(()=>{let o=[...n];return w==="title"?o.sort((t,l)=>t.title.localeCompare(l.title,"zh-Hans-CN")):w==="duration"?o.sort((t,l)=>(l.duration||0)-(t.duration||0)):o.sort((t,l)=>l.mtime-t.mtime),o},[n,w]),ve=(0,e.useMemo)(()=>{let o=D.trim().toLowerCase();return W.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let c=g[t.id]?.position||0,S=t.duration||0,B=S?c/S:0;return p==="inprogress"?c>5&&B<.97:p==="finished"?B>=.97:oe==="unheard"?c<=5:oe==="transcribed"?!!t.hasTranscript:oe==="favorites"?!!t.favorite:!0})},[W,D,p,oe,g]),Uo=(0,e.useMemo)(()=>Ee.filter(o=>o.status==="queued"||o.status==="running"),[Ee]),Oe=(0,e.useMemo)(()=>ve.filter(o=>!o.hasTranscript),[ve]),fo=(0,e.useMemo)(()=>n.filter(o=>{let t=g[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(g[t.id]?.updatedAt||0)-(g[o.id]?.updatedAt||0)).slice(0,4),[n,g]),et=(0,e.useMemo)(()=>n.reduce((o,t)=>o+(t.duration||0),0),[n]),ot=Math.round(et/3600*10)/10,tt=p==="inprogress"?"\u7EE7\u7EED\u6536\u542C":p==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",E=Z?n.find(o=>o.id===Z)||(k?.id===Z?k:null):null,rt=ne?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":b.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${ve.length} \u96C6 \xB7 \u5171 ${ot} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Lt=(0,e.useMemo)(()=>k?W.findIndex(o=>o.id===k.id):-1,[W,k]),Be=(0,e.useCallback)(()=>{let o=H.current;if(o){if(!x.current){let t=ve[0]||W[0];t&&We(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[ve,W]),We=(0,e.useCallback)((o,t=!0)=>{let l=H.current;if(!l||!o)return;if(x.current&&x.current.id===o.id){t&&Be();return}x.current&&!l.ended&&l.currentTime>1&&Se(x.current.id,l.currentTime,l.duration||he.current,!0),x.current=o,me(o),q(B=>B&&o.id),fe(o.duration||0);let c=g[o.id]?.position||0,S=c>5&&(!o.duration||c<o.duration-10)?c:0;Ge.current=S,G(S),l.src=`${f}/episodes/${o.id}/audio`,l.load(),l.playbackRate=ze.current.rate||1,l.volume=ze.current.volume??.9,t&&l.play().catch(()=>{}),we({lastEpisodeId:o.id})},[g,Se,we,Be]),Ho=(0,e.useCallback)((o,t=!0)=>{o&&(We(o,t),q(o.id))},[We]),ho=(0,e.useCallback)(o=>{let t=H.current;if(!t||!x.current)return;let l=Math.max(0,Math.min(o,t.duration||o));t.currentTime=l,G(l),Se(x.current.id,l,t.duration||he.current,!0)},[Se]),Xe=(0,e.useCallback)(o=>{let t=H.current;if(!t||!x.current)return;let l=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||he.current||0)-1));t.currentTime=l,G(l)},[]),bo=(0,e.useCallback)(o=>{if(!W.length)return;let l=((x.current?W.findIndex(c=>c.id===x.current.id):-1)+o+W.length)%W.length;We(W[l],!0)},[W,We]),nt=(0,e.useCallback)(()=>{let o=Co.indexOf(ze.current.rate),t=Co[(o+1)%Co.length],l=H.current;l&&(l.playbackRate=t),we({rate:t})},[we]),ao=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),l=H.current;l&&(l.volume=t),we({volume:t})},[we]),at=(0,e.useCallback)(()=>{let o=H.current,t=ze.current.volume>0?0:.9;o&&(o.volume=t),we({volume:t})},[we]),st=()=>{let o=H.current;!o||!x.current||(G(o.currentTime),Se(x.current.id,o.currentTime,o.duration||he.current))},it=()=>{let o=H.current,t=x.current;if(!o||!t)return;let l=Number.isFinite(o.duration)?o.duration:t.duration||0;fe(l);let c=Ge.current;Ge.current=0,c>0&&c<l-1&&(o.currentTime=c,G(c))},lt=()=>{let o=H.current;x.current&&Se(x.current.id,o?.duration||he.current||0,o?.duration||he.current||0,!0),bo(1)},dt=async o=>{await O(`${f}/folders`,"POST",{path:o}),await be(),h("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},pt=async()=>{let o=await fetch(`${f}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},ct=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),oo||Ve(!0))},ut=o=>{o.currentTarget.contains(o.relatedTarget)||Ve(!1)},gt=async o=>{o.preventDefault(),Ve(!1);let t=o.dataTransfer,l=[...t?.files||[]],c=l.map(M=>M.path).filter(M=>typeof M=="string"&&M),S=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(M=>M.trim()).filter(M=>M.startsWith("file://")).map(M=>decodeURIComponent(M.replace(/^file:\/\//,""))),B=[...new Set([...c,...S])];if(B.length){try{let M=await O(`${f}/import/paths`,"POST",{paths:B});await be(),h(M.added?`\u5DF2\u6DFB\u52A0 ${M.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(M){m(M.message)}return}let ye=l.filter(M=>M.size>0);if(!ye.length){h("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let mt=`drop-${Date.now()}`,so="",yo=0;for(let M of ye)try{let Jo=await fetch(`${f}/import/upload?name=${encodeURIComponent(M.name)}&batch=${mt}`,{method:"POST",body:M}),ft=await Jo.json();Jo.ok&&(so=ft.folder||so,yo+=1)}catch{}if(so)try{await O(`${f}/folders`,"POST",{path:so})}catch{}await be(),h(yo?`\u5DF2\u5BFC\u5165 ${yo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},vt=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await O(`${f}/folders`,"DELETE",{path:o}),await be(),h("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){m(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let l=t.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),Be()):t.key==="ArrowRight"?(t.preventDefault(),Xe(15)):t.key==="ArrowLeft"?(t.preventDefault(),Xe(-15)):t.key==="ArrowUp"?(t.preventDefault(),ao(ze.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),ao(ze.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Be,Xe,ao]);let wo=o=>{let t=g[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},xo=o=>{let t=g[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${eo?"nav-collapsed":""}`,onDragOver:ct,onDragLeave:ut,onDrop:gt},oo?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,eo?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(A,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(A,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.10.3"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(A,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",n.length],["inprogress","\u7EE7\u7EED\u6536\u542C",fo.length],["finished","\u5DF2\u64AD\u5B8C",n.filter(wo).length]].map(([o,t,l])=>e.default.createElement("button",{key:o,className:`nav-item ${p===o?"active":""}`,onClick:()=>Y(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},l||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>_(!0)},e.default.createElement(A,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(A,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Go(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>vt(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,tt),e.default.createElement("p",{className:"subline"},rt)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${C?"is-on":""}`,onClick:()=>j(o=>!o),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(A,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Uo.length?` ${Uo.length}`:"")),e.default.createElement("button",{className:`tool-btn ${ge?"is-on":""}`,onClick:()=>{De(o=>!o),Le([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(A,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(A,{name:"search",size:16}),e.default.createElement("input",{value:D,onChange:o=>J(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:o=>V(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),ge?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ae.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>Le(ve.map(o=>o.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Oe.length,onClick:()=>ro(Oe.map(o=>o.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Oe.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ae.length,onClick:()=>ro(ae)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!ae.length,onClick:()=>Fo(ae)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{Le([]),De(!1)}},"\u53D6\u6D88")):null,pe?e.default.createElement("div",{className:"banner error",onClick:()=>m("")},pe," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,E?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>q(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},E.artist,E.album?` \xB7 ${E.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ke,{item:E,size:288})),e.default.createElement("h2",{className:"episode-title"},E.title),e.default.createElement("p",{className:"episode-sub"},E.artist,E.album?` \xB7 ${E.album}`:""),e.default.createElement("p",{className:"episode-path",title:E.file},E.location||E.file),e.default.createElement("p",{className:"episode-stats"},ko(E.duration)," \xB7 ",No(E.mtime)," \xB7 \u5DF2\u542C ",Math.round(xo(E)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Be},le&&k?.id===E.id?"\u6682\u505C":"\u64AD\u653E"),z==="queued"||z==="running"?e.default.createElement("button",{className:"btn ghost",onClick:vo},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:Qe},N?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Fo([E.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(po,{inline:!0,transcript:N,status:z,progress:ee?.progress,stage:ee?.stage,chunks:ee?.chunks,queued:ee?.queued,elapsed:Fe,editingId:Ae,draft:to,onDraftChange:go,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Ze(null),onSplitLine:Lo,onMergeLine:Ao,onUndo:Oo,onValidate:Bo,issues:To,onCancel:vo,error:Ue,position:re,onSeek:ho,onClose:()=>q(null),onStart:Qe,target:Pe,job:je,onChangeTarget:Ko,onOpenSettings:()=>Ce(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([o,t])=>e.default.createElement("button",{key:o,className:`chip ${oe===o?"is-on":""}`,onClick:()=>Te(o)},t))),p==="all"&&!D&&fo.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},fo.map(o=>{let t=xo(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${k?.id===o.id?"is-current":""}`,onClick:()=>Ho(o,!0)},e.default.createElement(Ke,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ne?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):ve.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,n.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},n.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),n.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>_(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},ve.map((o,t)=>{let l=xo(o),c=k?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${c?"is-current":""} ${wo(o)?"is-finished":""} ${ge&&ae.includes(o.id)?"is-selected":""}`,onClick:()=>ge?_o(o.id):Ho(o,!0)},e.default.createElement("span",{className:"col-index row-index"},ge?ae.includes(o.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(A,{name:"check",size:14})):null:c&&le?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ke,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",No(o.mtime),o.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},ko(o.duration)),e.default.createElement("span",{className:`row-star ${o.favorite?"is-on":""}`,role:"button",title:o.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:S=>{S.stopPropagation(),Ro(o)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},wo(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(A,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),He&&k&&!E?e.default.createElement(po,{transcript:N,status:z,progress:ee?.progress,stage:ee?.stage,chunks:ee?.chunks,queued:ee?.queued,elapsed:Fe,editingId:Ae,draft:to,onDraftChange:go,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Ze(null),onSplitLine:Lo,onMergeLine:Ao,onUndo:Oo,onValidate:Bo,issues:To,onCancel:vo,error:Ue,position:re,onSeek:ho,onClose:()=>$e(!1),onStart:Qe,target:Pe,job:je,onChangeTarget:Ko,onOpenSettings:()=>Ce(!0)}):null,C?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>j(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Ee.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Ee.map(o=>e.default.createElement("div",{key:o.key,className:`job-row job-${o.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},o.episodeTitle||o.episodeId),e.default.createElement("span",{className:"job-meta"},Wo(o)),o.status==="running"&&o.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${o.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},o.status==="queued"||o.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>mo(o,"cancel")},"\u53D6\u6D88"):null,o.status==="error"||o.status==="interrupted"||o.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>mo(o,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(o.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>mo(o,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Oe.length,onClick:()=>ro(Oe.map(o=>o.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Oe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ae.length,onClick:()=>ro(ae)},"\u8F6C\u5199\u5DF2\u9009 ",ae.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${Q?Math.min(100,Math.max(0,re/Q*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:Q||0,step:.05,value:Math.min(re,Q||0),onChange:o=>ho(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},k?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ke,{item:k,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:k.title},k.title),e.default.createElement("div",{className:"now-artist"},k.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>bo(-1)},e.default.createElement(A,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Xe(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Be,disabled:!k&&ve.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(A,{name:le?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Xe(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>bo(1)},e.default.createElement(A,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${He?"active":""}`,onClick:Yo,disabled:!k,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(A,{name:"wave",size:15}),e.default.createElement("span",null,N?"\u5B57\u5E55":z==="queued"||z==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Ye(re)," / ",Ye(Q)),e.default.createElement("button",{className:"rate-btn",onClick:nt,title:"\u64AD\u653E\u901F\u5EA6"},T.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:at,title:"\u9759\u97F3"},e.default.createElement(A,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:o=>ao(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),Ne?e.default.createElement(zt,{onClose:()=>_(!1),onSubmit:dt,onPick:pt}):null,Re?e.default.createElement(St,{config:co,onClose:()=>Ce(!1),onSave:async o=>{let t=await O(`${f}/translate/settings`,"PUT",o);U(t),Ce(!1),h("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ce?e.default.createElement("div",{className:"toast"},ce):null,e.default.createElement("audio",{ref:H,preload:"metadata",onPlay:()=>te(!0),onPause:()=>{te(!1);let o=H.current;x.current&&o&&o.currentTime>0&&!o.ended&&Se(x.current.id,o.currentTime,o.duration||he.current,!0)},onTimeUpdate:st,onLoadedMetadata:it,onEnded:lt,onError:()=>{te(!1),h("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var r=qe(require("react"),1);var I="/podwave/api";async function se(n){let i=await fetch(n),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return s}async function ke(n,i,s){let u=await fetch(n,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),g=await u.json().catch(()=>({}));if(!u.ok)throw new Error(g.error||`\u8BF7\u6C42\u5931\u8D25 ${u.status}`);return g}function Tt(n){let i=Math.max(0,Math.round(Number(n)||0)),s=Math.floor(i/3600),u=Math.floor(i%3600/60);return s>0?`${s} \u5C0F\u65F6 ${u} \u5206`:`${u} \u5206\u949F`}function _e(n){let i=Number(n)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function Mt(n){if(!n)return"";let i=new Date(n),s=u=>String(u).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())} ${s(i.getHours())}:${s(i.getMinutes())}`}function So(){let[n,i]=(0,r.useState)([]),[s,u]=(0,r.useState)([]),[g,y]=(0,r.useState)({asrModel:"",translateModel:""}),[b,K]=(0,r.useState)(null),[T,F]=(0,r.useState)(null),[D,J]=(0,r.useState)({showSidebarPanel:!0}),[w,V]=(0,r.useState)({mode:"copy",orphans:0,orphanBytes:0}),[p,Y]=(0,r.useState)(null),[oe,Te]=(0,r.useState)("auto"),[Z,q]=(0,r.useState)(!1),[k,me]=(0,r.useState)(""),[le,te]=(0,r.useState)(15),[re,G]=(0,r.useState)(!0),[Q,fe]=(0,r.useState)("api"),[ne,de]=(0,r.useState)("https://api.deepseek.com"),[Ne,_]=(0,r.useState)("deepseek-chat"),[pe,m]=(0,r.useState)(""),[ce,P]=(0,r.useState)(""),[N,R]=(0,r.useState)(""),[z,L]=(0,r.useState)(""),[Fe,Me]=(0,r.useState)(""),[Ue,$]=(0,r.useState)(""),He=(0,r.useCallback)(async()=>{try{let[a,C,j,Ee,Ie,ge,De]=await Promise.all([se(`${I}/history`),se(`${I}/models`),se(`${I}/translate/settings`),se(`${I}/ui-settings`),se(`${I}/transcribe/settings`),se(`${I}/import/settings`),se(`${I}/setup`)]);Y(De),De?.job?.status==="running"&&q(!0),V({mode:ge.mode||"copy",orphans:ge.orphans||0,orphanBytes:ge.orphanBytes||0}),J({showSidebarPanel:Ee?.showSidebarPanel!==!1}),me((Ie.hotwords||[]).join(" ")),te(Ie.chunkMinutes||15),G(Ie.diarize!==!1),i(a.items||[]),u(C.models||[]),y(C.config||{asrModel:"",translateModel:""}),K(C.transcribe||null),P(C.config?.asrModel||""),R(C.config?.translateModel||""),F(j),fe(j.provider||"api"),de(j.apiBase||"https://api.deepseek.com"),_(j.apiModel||"deepseek-chat"),m(""),$("")}catch(a){$(a.message)}},[]);(0,r.useEffect)(()=>{He()},[He]),(0,r.useEffect)(()=>{if(!Z&&p?.job?.status!=="running")return;let a=window.setInterval(async()=>{try{let C=await se(`${I}/setup`);Y(C),C.job?.status!=="running"&&q(!1)}catch{}},2500);return()=>window.clearInterval(a)},[Z,p?.job?.status]);let $e=async()=>{$(""),q(!0);try{await ke(`${I}/setup/install`,"POST",{source:oe});let a=await se(`${I}/setup`);Y(a),U("\u5F00\u59CB\u5B89\u88C5")}catch(a){q(!1),$(a.message)}},co=async()=>{try{await ke(`${I}/setup/cancel`,"POST",{}),U("\u5DF2\u8BF7\u6C42\u53D6\u6D88")}catch(a){$(a.message)}},U=a=>{Me(a),window.setTimeout(()=>Me(""),2400)},Pe=async()=>{try{let a=await se(`${I}/setup/diagnose`),C=JSON.stringify(a,null,2);try{await navigator.clipboard.writeText(C)}catch{let j=document.createElement("textarea");j.value=C,j.style.position="fixed",j.style.opacity="0",document.body.appendChild(j),j.select(),document.execCommand("copy"),j.remove()}U("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34\u7ED9\u6211")}catch(a){U(a.message||"\u590D\u5236\u5931\u8D25")}},uo=async()=>{L("api"),$("");try{let a={provider:Q,apiBase:ne,apiModel:Ne};pe.trim()&&(a.apiKey=pe.trim());let C=await ke(`${I}/translate/settings`,"PUT",a);F(C),m(""),U("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{L("")}},je=async()=>{L("models"),$("");try{let a=await ke(`${I}/models`,"PUT",{asrModel:ce,translateModel:N});y(a.config),u(a.models||[]),K(a.transcribe||null),U("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{L("")}},ue=s.length?s:[{name:g.asrModel||"qwen3-asr-1.7b-8bit",ready:b?.modelReady},{name:g.translateModel||"hy-mt2-1.8b-4bit",ready:T?.localReady}],Re=ue.filter(a=>/asr/i.test(a.name)&&a.ready!==!1),Ce=ue.filter(a=>!/asr|diarization/i.test(a.name)&&a.ready!==!1),eo=async()=>{L("ui"),$("");try{let a=await ke(`${I}/ui-settings`,"PUT",{showSidebarPanel:D.showSidebarPanel});J({showSidebarPanel:a.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:a})),U("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{L("")}},Je=async a=>{L("import"),$("");try{let C=await ke(`${I}/import/settings`,"PUT",{mode:a});V(j=>({...j,mode:C.mode})),U("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(C){$(C.message)}finally{L("")}},oo=async()=>{if(w.orphans&&window.confirm(`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){L("imports"),$("");try{let a=await ke(`${I}/imports/orphans`,"DELETE",{});V(C=>({...C,orphans:0,orphanBytes:0})),U(`\u5DF2\u6E05\u7406 ${a.removed||0} \u4E2A\u6279\u6B21`)}catch(a){$(a.message)}finally{L("")}}},Ve=async()=>{L("transcribe"),$("");try{let a=k.split(/[\s,，、]+/).map(j=>j.trim()).filter(Boolean).slice(0,500),C=await ke(`${I}/transcribe/settings`,"PUT",{hotwords:a,chunkMinutes:Math.min(60,Math.max(1,Number(le)||15)),diarize:re});me((C.hotwords||[]).join(" ")),te(C.chunkMinutes||15),G(C.diarize!==!1),U("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(a){$(a.message)}finally{L("")}},ee=ue;return r.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},r.default.createElement("style",null,lo),r.default.createElement("div",{className:"podwave-settings"},r.default.createElement("header",{className:"settings-head"},r.default.createElement("h1",null,"\u64AD\u5BA2"),r.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),Ue?r.default.createElement("div",{className:"banner error",onClick:()=>$("")},Ue):null,Fe?r.default.createElement("div",{className:"settings-message"},Fe):null,r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u73AF\u5883\u4E0E\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6362\u7535\u8111\u6216\u6362\u7CFB\u7EDF\u65F6\uFF0C\u5148\u626B\u63CF\u672C\u673A\u7F3A\u4EC0\u4E48\uFF1B\u6A21\u578B\u4E0B\u8F7D\u652F\u6301\u56FD\u9645\u4E0E\u56FD\u5185\u4E24\u6761\u7EBF\u8DEF\uFF0C\u5B89\u88C5\u5B8C\u4F1A\u5217\u51FA\u4E0B\u8F7D\u5185\u5BB9\u4E0E\u4F53\u79EF\u3002"),p?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:"setup-platform"},p.platform?.osLabel," \xB7 ",p.platform?.arch," \xB7 ",p.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",p.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",p.engine?.label),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn ghost",onClick:Pe},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F")),r.default.createElement("ul",{className:"setup-components"},(p.components||[]).map(a=>r.default.createElement("li",{key:a.id,className:a.ready?"setup-component ready":"setup-component"},r.default.createElement("span",{className:"setup-dot"}),r.default.createElement("span",{className:"setup-component-label"},a.label),r.default.createElement("span",{className:"setup-component-detail"},a.detail),!a.ready&&a.bytes?r.default.createElement("span",{className:"setup-component-size"},_e(a.bytes)):null))),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),r.default.createElement("select",{value:oe,onChange:a=>Te(a.target.value)},r.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),r.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),r.default.createElement("option",{value:"cn"},"\u56FD\u5185\uFF08hf-mirror / gh-proxy / ModelScope\uFF09")))),r.default.createElement("p",{className:"settings-hint"},"\u9884\u8BA1\u4E0B\u8F7D ",_e(p.downloadBytes),"\uFF0C\u5B89\u88C5\u5230 ~/.podwave/models\u3002"),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",disabled:Z||p.job?.status==="running",onClick:$e},Z||p.job?.status==="running"?"\u5B89\u88C5\u4E2D\u2026":"\u4E00\u952E\u5B89\u88C5"),p.job?.status==="running"?r.default.createElement("button",{className:"settings-btn ghost",onClick:co},"\u53D6\u6D88"):null),p.job?r.default.createElement("div",{className:"setup-job"},r.default.createElement("div",{className:"setup-job-line"},r.default.createElement("span",null,p.job.stage||p.job.status),r.default.createElement("span",null,p.job.progress||0,"% \xB7 ",_e(p.job.bytes)," / ",_e(p.job.expected))),r.default.createElement("div",{className:"setup-progress"},r.default.createElement("span",{style:{width:`${p.job.progress||0}%`}})),p.job.error?r.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",p.job.error):null,p.job.status==="done"&&(!p.job.summary||!p.job.summary.length)?r.default.createElement("p",{className:"settings-empty"},"\u6240\u6709\u7EC4\u4EF6\u5DF2\u5C31\u7EEA\uFF0C\u6CA1\u6709\u9700\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9\u3002"):null,Array.isArray(p.job.summary)&&p.job.summary.length?r.default.createElement("ul",{className:"setup-summary"},p.job.summary.map(a=>r.default.createElement("li",{key:a.id},a.label," \xB7 ",_e(a.bytes),a.source?` \xB7 ${a.source}`:""))):null):null):r.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u2026")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),r.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",n.length," \u6761\u3002"),n.length?r.default.createElement("ul",{className:"history-list"},n.map(a=>r.default.createElement("li",{key:a.id,className:"history-row"},r.default.createElement("div",{className:"history-main"},r.default.createElement("span",{className:"history-title"},a.title),r.default.createElement("span",{className:"history-meta"},a.artist?`${a.artist} \xB7 `:"",a.duration?`${Tt(a.duration)} \xB7 `:"",a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines," \u884C",a.translations?.length?` \xB7 \u5DF2\u7FFB ${a.translations.join(" / ")}`:"")),r.default.createElement("span",{className:"history-date"},Mt(a.completedAt))))):r.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u8F6C\u5199"),r.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u70ED\u8BCD"),r.default.createElement("input",{value:k,onChange:a=>me(a.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),r.default.createElement("input",{type:"number",min:"1",max:"60",value:le,onChange:a=>te(a.target.value)})),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:re,onChange:a=>G(a.target.checked)}),r.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:Ve,disabled:z==="transcribe"},z==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),r.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="copy",onChange:()=>Je("copy")}),r.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="reference",onChange:()=>Je("reference")}),r.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:oo,disabled:z==="imports"||!w.orphans},w.orphans?`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(w.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),r.default.createElement("select",{value:Q,onChange:a=>fe(a.target.value)},r.default.createElement("option",{value:"api"},"DeepSeek API"),r.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u5730\u5740"),r.default.createElement("input",{value:ne,onChange:a=>de(a.target.value),placeholder:"https://api.deepseek.com"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API \u6A21\u578B"),r.default.createElement("input",{value:Ne,onChange:a=>_(a.target.value),placeholder:"deepseek-chat"})),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"API Key"),r.default.createElement("input",{type:"password",value:pe,onChange:a=>m(a.target.value),placeholder:T?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${T.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:uo,disabled:z==="api"},z==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},T?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u754C\u9762"),r.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),r.default.createElement("label",{className:"check-row"},r.default.createElement("input",{type:"checkbox",checked:D.showSidebarPanel,onChange:a=>J({showSidebarPanel:a.target.checked})}),r.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:eo,disabled:z==="ui"},z==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),r.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),r.default.createElement("section",{className:"settings-card"},r.default.createElement("h2",null,"\u6A21\u578B"),r.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),r.default.createElement("div",{className:"settings-fields"},r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),r.default.createElement("select",{value:ce,onChange:a=>P(a.target.value)},(Re.length?Re:ee).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},b?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),r.default.createElement("label",{className:"field-row"},r.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),r.default.createElement("select",{value:N,onChange:a=>R(a.target.value)},(Ce.length?Ce:ee).map(a=>r.default.createElement("option",{key:a.name,value:a.name},a.name,a.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),r.default.createElement("span",{className:"settings-status"},T?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),r.default.createElement("div",{className:"settings-actions"},r.default.createElement("button",{className:"settings-btn",onClick:je,disabled:z==="models"},z==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Pt({size:n=16}){return ie.default.createElement("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},ie.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),ie.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ie.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),ie.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ie.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function jt(){return ie.default.createElement("div",{className:"podwave-root"},ie.default.createElement("style",null,lo),ie.default.createElement(zo,null))}function Et(n){n.slots.inject("main",()=>n.slots.register({name:"main",key:"podwave"},jt)),n.slots.inject("settings.section",()=>n.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},So));let i=null,s="podwave-hide-nav",u=y=>{if(typeof document>"u")return;let b=document.getElementById(s);y&&!b?(b=document.createElement("style"),b.id=s,b.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(b)):!y&&b&&b.remove()},g=y=>{if(u(!y),y&&!i)i=n.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Pt);else if(!y&&i){let b=i;i=null;try{typeof b?.dispose=="function"?b.dispose():typeof b=="function"?b():typeof b?.dispose>"u"&&typeof b?.unregister=="function"&&b.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(y=>y.ok?y.json():null).then(y=>g(y?.showSidebarPanel!==!1)).catch(()=>g(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",y=>{g(y?.detail?.showSidebarPanel!==!1)})}var It=["slots"];

return module.exports}})
