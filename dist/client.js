window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var no=Object.create;var He=Object.defineProperty;var ao=Object.getOwnPropertyDescriptor;var so=Object.getOwnPropertyNames;var io=Object.getPrototypeOf,lo=Object.prototype.hasOwnProperty;var po=(r,i)=>{for(var a in i)He(r,a,{get:i[a],enumerable:!0})},It=(r,i,a,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of so(i))!lo.call(r,c)&&c!==a&&He(r,c,{get:()=>i[c],enumerable:!(p=ao(i,c))||p.enumerable});return r};var at=(r,i,a)=>(a=r!=null?no(io(r)):{},It(i||!r||!r.__esModule?He(a,"default",{value:r,enumerable:!0}):a,r)),co=r=>It(He({},"__esModule",{value:!0}),r);var $o={};po($o,{apply:()=>ko,inject:()=>No});module.exports=co($o);var X=at(require("react"),1);var Je=`.podwave-root {
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
`;var e=at(require("react"),1),g="/podwave/api",st=[.75,1,1.25,1.5,1.75,2];async function V(r){let i=await fetch(r);if(!i.ok){let a=await i.json().catch(()=>({}));throw new Error(a.error||i.statusText)}return i.json()}async function D(r,i,a){let p=await fetch(r,{method:i,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!p.ok){let c=await p.json().catch(()=>({}));throw new Error(c.error||p.statusText)}return p.json()}function it(r){if(!Number.isFinite(r)||r<0)return"0:00";let i=Math.floor(r),a=Math.floor(i/3600),p=Math.floor(i%3600/60),c=i%60;return a>0?`${a}:${String(p).padStart(2,"0")}:${String(c).padStart(2,"0")}`:`${p}:${String(c).padStart(2,"0")}`}function jt(r){if(!r)return"\u2014";let i=Math.floor(r/3600),a=Math.round(r%3600/60);return i>0?`${i} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function Lt(r){if(!r)return"";let i=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function go(r){let a=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return a?a[0].toUpperCase():"\u266B"}function vo(r){let i=String(r).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}function Ve({item:r,size:i=44,className:a=""}){let p={width:i,height:i};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${a}`,style:p,src:`${g}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${a}`,style:p,"aria-hidden":!0},go(r&&r.title))}function mo(r){let i=r.progress?.percent,a=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${a}`}function E({name:r,size:i=18}){let a={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...a},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}function ho({onSubmit:r,onPick:i,onClose:a}){let[p,c]=(0,e.useState)(""),[x,f]=(0,e.useState)(!1),[j,k]=(0,e.useState)(!1),[L,z]=(0,e.useState)(""),K=(0,e.useRef)(null);return(0,e.useEffect)(()=>{K.current?.focus();let v=Z=>{Z.key==="Escape"&&a()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:v=>{v.target===v.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async v=>{if(v.preventDefault(),!(!p.trim()||x)){f(!0),z("");try{await r(p.trim()),a()}catch(Z){z(Z.message),f(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!j){k(!0),z("");try{let v=await i();if(v?.canceled)return;if(v?.error)throw new Error(v.error);v?.path&&(await r(v.path),a())}catch(v){z(v.message)}finally{k(!1)}}},disabled:j,autoFocus:!0},j?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:K,value:p,onChange:v=>c(v.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:x||!p.trim()},x?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),L?e.default.createElement("div",{className:"dialog-error"},L):null))}function At({transcript:r,status:i,progress:a,stage:p,chunks:c,queued:x,elapsed:f,error:j,position:k,onSeek:L,onClose:z,onStart:K,onCancel:N,target:U,job:v,onChangeTarget:Z,onOpenSettings:ee,inline:W=!1,editingId:b=null,draft:Y="",onDraftChange:te,onEditLine:oe,onSaveLine:B,onCancelEdit:A,onSplitLine:F,onMergeLine:re,onUndo:ge,onValidate:ve,issues:T=[]}){let S=(0,e.useRef)(null),ne=(0,e.useRef)(null),H=r?.lines?.findIndex(u=>k>=u.start&&k<u.end)??-1;(0,e.useEffect)(()=>{if(H<0||!S.current)return;S.current.querySelector(`[data-seg="${H}"]`)?.scrollIntoView({block:"nearest"})},[H]);let me=i==="queued"||i==="running";return e.default.createElement("section",{className:`transcript-panel ${W?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:U,onChange:u=>Z(u.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:ee},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("button",{className:"mini-link",onClick:ge,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),e.default.createElement("button",{className:"mini-link",onClick:ve,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),e.default.createElement("a",{className:"mini-link",href:`${g}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${g}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,W?null:e.default.createElement("button",{className:"transcript-close",onClick:z,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:S},r&&T?.length?e.default.createElement("div",{className:"tr-issues"},T.slice(0,5).map(u=>e.default.createElement("div",{key:u},"\xB7 ",u)),T.length>5?e.default.createElement("div",null,"\u2026\u5171 ",T.length," \u6761"):null):null,v?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,v?.status==="error"?e.default.createElement("div",{className:"tr-running err"},v.error):null,r?r.lines.map((u,h)=>e.default.createElement("div",{key:u.id,"data-seg":h,className:`seg-row ${h===H?"active":""} ${b===u.id?"is-editing":""}`,onClick:()=>L(u.start)},e.default.createElement("span",{className:"seg-time"},it(u.start)),b===u.id?e.default.createElement("span",{className:"seg-edit",onClick:y=>y.stopPropagation()},e.default.createElement("textarea",{ref:ne,value:Y,rows:Math.min(4,Math.max(2,Math.ceil((Y.length||1)/40))),onChange:y=>te(y.target.value),onKeyDown:y=>{y.key==="Enter"&&(y.metaKey||y.ctrlKey)&&B(u.id),y.key==="Escape"&&A()}}),e.default.createElement("span",{className:"seg-edit-actions"},e.default.createElement("button",{className:"seg-tool",onClick:()=>B(u.id)},"\u4FDD\u5B58"),e.default.createElement("button",{className:"seg-tool",onClick:()=>F(u.id,ne.current?.selectionStart??Math.floor(Y.length/2))},"\u62C6\u5206"),e.default.createElement("button",{className:"seg-tool",onClick:A},"\u53D6\u6D88"))):e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"seg-text"},u.text,u.translations?.[U]?e.default.createElement("span",{className:"seg-trans"},u.translations[U]):null),e.default.createElement("span",{className:"seg-tools"},e.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:y=>{y.stopPropagation(),oe(u)}},"\u270E"),h<r.lines.length-1?e.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:y=>{y.stopPropagation(),re(u.id)}},"\u21E3"):null)))):me?e.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":p==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",a?.percent!=null?` ${a.percent}%`:"",c?.total?` \xB7 \u7B2C ${Math.min(c.done+1,c.total)}/${c.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((f||0)/1e3)+" \u79D2",a?.percent!=null?e.default.createElement("span",{className:"tx-progress"},e.default.createElement("span",{style:{width:`${a.percent}%`}})):null,e.default.createElement("br",null),e.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),e.default.createElement("br",null),N?e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:N},"\u53D6\u6D88\u8F6C\u5199"):null):j?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},j),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:K},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:K},"\u5F00\u59CB\u8F6C\u5199"))))}function fo({config:r,onClose:i,onSave:a}){let[p,c]=(0,e.useState)(r?.provider||"api"),[x,f]=(0,e.useState)(""),[j,k]=(0,e.useState)(!1),[L,z]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:N=>{N.target===N.currentTarget&&i()}},e.default.createElement("form",{className:"dialog",onSubmit:async N=>{N.preventDefault(),k(!0),z("");try{await a({provider:p,apiKey:x||void 0})}catch(U){z(U.message),k(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:p,onChange:N=>c(N.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:x,onChange:N=>f(N.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),L?e.default.createElement("div",{className:"dialog-error"},L):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:i},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:j},"\u4FDD\u5B58"))))}function lt(){let[r,i]=(0,e.useState)([]),[a,p]=(0,e.useState)([]),[c,x]=(0,e.useState)({}),[f,j]=(0,e.useState)({running:!1}),[k,L]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[z,K]=(0,e.useState)(""),[N,U]=(0,e.useState)("recent"),[v,Z]=(0,e.useState)("all"),[ee,W]=(0,e.useState)(null),[b,Y]=(0,e.useState)(null),[te,oe]=(0,e.useState)(!1),[B,A]=(0,e.useState)(0),[F,re]=(0,e.useState)(0),[ge,ve]=(0,e.useState)(!0),[T,S]=(0,e.useState)(!1),[ne,H]=(0,e.useState)(""),[me,u]=(0,e.useState)(""),[h,y]=(0,e.useState)(null),[I,xe]=(0,e.useState)("none"),[be,ye]=(0,e.useState)(0),[Ce,_]=(0,e.useState)(""),[Le,ae]=(0,e.useState)(!1),[l,O]=(0,e.useState)(null),[Q,Qe]=(0,e.useState)(""),[he,ze]=(0,e.useState)({status:"none"}),[Ot,Ae]=(0,e.useState)(!1),[pt,ct]=(0,e.useState)(!1),[ut,We]=(0,e.useState)(!1),[se,gt]=(0,e.useState)(null),[vt,mt]=(0,e.useState)(!1),[Oe,ht]=(0,e.useState)([]),[Me,Xe]=(0,e.useState)(!1),[ie,Se]=(0,e.useState)([]),[ke,Te]=(0,e.useState)(null),[qe,Ye]=(0,e.useState)(""),[ft,wt]=(0,e.useState)([]),q=(0,e.useRef)(null),w=(0,e.useRef)(null),le=(0,e.useRef)(0),fe=(0,e.useRef)(k),Pe=(0,e.useRef)(0),xt=(0,e.useRef)(0),bt=(0,e.useRef)(0),qt=(0,e.useRef)(!1);(0,e.useEffect)(()=>{fe.current=k},[k]),(0,e.useEffect)(()=>{w.current=b},[b]),(0,e.useEffect)(()=>{le.current=F},[F]),(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await V(`${g}/ui-settings`);!t&&o&&ct(!!o.sidebarCollapsed)}catch{}})(),()=>{t=!0}},[]);let yt=(0,e.useCallback)(()=>{ct(t=>{let o=!t;return fetch(`${g}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:o})}).catch(()=>{}),o})},[]),m=(0,e.useCallback)(t=>{u(t),window.clearTimeout(bt.current),bt.current=window.setTimeout(()=>u(""),2600)},[]),de=(0,e.useCallback)(async()=>{let t=await V(`${g}/episodes`);return i(t.items||[]),p(t.folders||[]),x(t.progress||{}),j(t.scan||{running:!1}),t},[]);(0,e.useEffect)(()=>{let t=!1;return(async()=>{try{let o=await V(`${g}/state`);if(t)return;L(o.settings),p(o.folders||[]);let s=await de();if(t)return;let d=o.settings?.lastEpisodeId,$=d?(s.items||[]).find(P=>P.id===d):null;if($){Y($),re($.duration||0);let P=s.progress?.[$.id]?.position||0;Pe.current=P>5?P:0,A(Pe.current);let ue=q.current;ue&&(ue.src=`${g}/episodes/${$.id}/audio`,ue.load(),ue.playbackRate=o.settings?.rate||1,ue.volume=o.settings?.volume??.9)}ve(!1),qt.current=!0}catch(o){t||(H(o.message),ve(!1))}})(),()=>{t=!0}},[de]),(0,e.useEffect)(()=>{if(!f.running)return;let t=setInterval(()=>{de().catch(()=>{})},1500);return()=>clearInterval(t)},[f.running,de]),(0,e.useEffect)(()=>{let t=!1;return y(null),_(""),ye(0),b?.id?((async()=>{try{let o=await V(`${g}/episodes/${b.id}/transcript`);if(t)return;xe(o.status),gt(o.status==="queued"||o.status==="running"?o:null),o.status==="done"&&o.transcript?y(o.transcript):o.status==="queued"||o.status==="running"?ye(o.elapsedMs||0):o.status==="error"&&_(o.error||"\u8F6C\u5199\u5931\u8D25")}catch(o){t||_(o.message)}})(),()=>{t=!0}):(xe("none"),()=>{t=!0})},[b?.id]),(0,e.useEffect)(()=>{V(`${g}/translate/settings`).then(O).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(I!=="queued"&&I!=="running")return;let t=!1,o=setInterval(async()=>{let s=w.current?.id;if(s)try{let d=await V(`${g}/episodes/${s}/transcript`);if(t)return;xe(d.status),gt(d.status==="queued"||d.status==="running"?d:null),ye(d.elapsedMs||0),d.status==="done"&&d.transcript?(y(d.transcript),ae(!0),m("\u8F6C\u5199\u5B8C\u6210")):d.status==="error"&&_(d.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[I,m]),(0,e.useEffect)(()=>{if(he.status!=="running")return;let t=!1,o=setInterval(async()=>{let s=w.current?.id;if(s)try{let d=await V(`${g}/episodes/${s}/translate?target=${Q}`);if(t)return;if(ze(d),d.status==="done"){let $=await V(`${g}/episodes/${s}/transcript`);!t&&$.transcript&&y($.transcript),m("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{t=!0,clearInterval(o)}},[he.status,Q,m]),(0,e.useEffect)(()=>{let t=!1,o=async()=>{try{let d=await V(`${g}/jobs`);t||ht(d.items||[])}catch{}};o();let s=setInterval(o,2500);return()=>{t=!0,clearInterval(s)}},[]);let we=(0,e.useCallback)((t,o,s,d=!1)=>{if(!t)return;let $=Date.now();!d&&$-xt.current<4e3||(xt.current=$,D(`${g}/progress/${t}`,"PUT",{position:o,duration:s}).catch(()=>{}),x(P=>({...P,[t]:{position:o,duration:s,updatedAt:$}})))},[]),pe=(0,e.useCallback)(t=>{L(o=>({...o,...t})),D(`${g}/settings`,"PATCH",t).catch(()=>{})},[]),De=(0,e.useCallback)(async()=>{if(w.current){_(""),ae(!0);try{let t=await D(`${g}/episodes/${w.current.id}/transcribe`,"POST",{});xe(t.status||"queued")}catch(t){_(t.message)}}},[]),Kt=(0,e.useCallback)(()=>{if(h){ae(t=>!t);return}if(I==="queued"||I==="running"){ae(!0);return}De()},[h,I,De]),_e=(0,e.useCallback)(async()=>{if(w.current)try{await D(`${g}/episodes/${w.current.id}/transcribe/cancel`,"POST",{}),m("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(t){_(t.message)}},[m]),Ge=(0,e.useCallback)(async(t,o)=>{try{o==="cancel"?await D(`${g}/episodes/${t.episodeId}/transcribe/cancel`,"POST",{}):o==="retry"?await D(`${g}/episodes/${t.episodeId}/transcribe`,"POST",{resume:!0}):o==="clear"&&await D(`${g}/jobs`,"DELETE",{key:t.key})}catch{}let s=await V(`${g}/jobs`).catch(()=>({items:[]}));ht(s.items||[])},[]),Ke=(0,e.useCallback)(async t=>{let o=[...new Set(t)];if(o.length)try{let s=await D(`${g}/transcribe/batch`,"POST",{ids:o});m(`\u5DF2\u6392\u961F ${s.queued} \u96C6${s.skipped?`\uFF0C\u8DF3\u8FC7 ${s.skipped} \u96C6`:""}${s.errors?.length?`\uFF0C\u5931\u8D25 ${s.errors.length} \u96C6`:""}`),Se([]),Xe(!1)}catch(s){m(s.message)}},[m]),Ut=(0,e.useCallback)(t=>{Se(o=>o.includes(t)?o.filter(s=>s!==t):[...o,t])},[]),ce=(0,e.useCallback)(async(t,o,s)=>{try{let d=await D(`${g}${t}`,o,s||{});return d?.transcript&&y(d.transcript),d}catch(d){return m(d.message),null}},[m]),kt=(0,e.useCallback)(t=>{Te(t.id),Ye(t.text),wt([])},[]),Nt=(0,e.useCallback)(async t=>{if(!h)return;await ce(`/episodes/${h.id}/transcript/lines/${t??ke}`,"PUT",{text:qe})&&(Te(null),m("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[h,ke,qe,ce,m]),$t=(0,e.useCallback)(async(t,o)=>{if(!h)return;await ce(`/episodes/${h.id}/transcript/lines/${t??ke}/split`,"POST",{offset:o})&&(Te(null),m("\u5DF2\u62C6\u6210\u4E24\u884C"))},[h,ke,ce,m]),Ct=(0,e.useCallback)(async t=>{if(!h)return;await ce(`/episodes/${h.id}/transcript/lines/${t}/merge`,"POST",{})&&m("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[h,ce,m]),zt=(0,e.useCallback)(async()=>{if(!h)return;await ce(`/episodes/${h.id}/transcript/undo`,"POST",{})&&m("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[h,ce,m]),Mt=(0,e.useCallback)(async()=>{if(h)try{let t=await V(`${g}/episodes/${h.id}/transcript/validate`);wt(t.issues||[]),m(t.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(t.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(t){m(t.message)}},[h,m]),Ue=(0,e.useCallback)(async()=>{let t=w.current?.id;if(!t)return;let o=await V(`${g}/episodes/${t}/transcript`);o.transcript&&y(o.transcript)},[]),St=(0,e.useCallback)(async t=>{if(w.current?.id){ze({status:"running"});try{let o=await D(`${g}/episodes/${w.current.id}/translate`,"POST",{target:t});ze(o),o.status==="done"&&(await Ue(),m("\u7FFB\u8BD1\u5B8C\u6210"))}catch(o){ze({status:"error",error:o.message})}}},[Ue,m]),Tt=(0,e.useCallback)(async t=>{if(Qe(t),!t)return;if(h?.lines?.some(s=>s.translations?.[t])){ze({status:"done"}),await Ue();return}await St(t)},[h,St,Ue]),J=(0,e.useMemo)(()=>{let t=[...r];return N==="title"?t.sort((o,s)=>o.title.localeCompare(s.title,"zh-Hans-CN")):N==="duration"?t.sort((o,s)=>(s.duration||0)-(o.duration||0)):t.sort((o,s)=>s.mtime-o.mtime),t},[r,N]),G=(0,e.useMemo)(()=>{let t=z.trim().toLowerCase();return J.filter(o=>{if(t&&!`${o.title} ${o.artist} ${o.album}`.toLowerCase().includes(t))return!1;let d=c[o.id]?.position||0,$=o.duration||0,P=$?d/$:0;return v==="inprogress"?d>5&&P<.97:v==="finished"?P>=.97:!0})},[J,z,v,c]),Pt=(0,e.useMemo)(()=>Oe.filter(t=>t.status==="queued"||t.status==="running"),[Oe]),Ne=(0,e.useMemo)(()=>G.filter(t=>!t.hasTranscript),[G]),Re=(0,e.useMemo)(()=>r.filter(t=>{let o=c[t.id];return!o||!o.position||o.position<5?!1:t.duration?o.position/t.duration<.97:!0}).sort((t,o)=>(c[o.id]?.updatedAt||0)-(c[t.id]?.updatedAt||0)).slice(0,4),[r,c]),Bt=(0,e.useMemo)(()=>r.reduce((t,o)=>t+(o.duration||0),0),[r]),Ft=Math.round(Bt/3600*10)/10,Ht=v==="inprogress"?"\u7EE7\u7EED\u6536\u542C":v==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",M=ee?r.find(t=>t.id===ee)||(b?.id===ee?b:null):null,Jt=ge?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":f.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${G.length} \u96C6 \xB7 \u5171 ${Ft} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,Co=(0,e.useMemo)(()=>b?J.findIndex(t=>t.id===b.id):-1,[J,b]),$e=(0,e.useCallback)(()=>{let t=q.current;if(t){if(!w.current){let o=G[0]||J[0];o&&Ee(o,!0);return}t.paused?t.play().catch(()=>{}):t.pause()}},[G,J]),Ee=(0,e.useCallback)((t,o=!0)=>{let s=q.current;if(!s||!t)return;if(w.current&&w.current.id===t.id){o&&$e();return}w.current&&!s.ended&&s.currentTime>1&&we(w.current.id,s.currentTime,s.duration||le.current,!0),w.current=t,Y(t),W(P=>P&&t.id),re(t.duration||0);let d=c[t.id]?.position||0,$=d>5&&(!t.duration||d<t.duration-10)?d:0;Pe.current=$,A($),s.src=`${g}/episodes/${t.id}/audio`,s.load(),s.playbackRate=fe.current.rate||1,s.volume=fe.current.volume??.9,o&&s.play().catch(()=>{}),pe({lastEpisodeId:t.id})},[c,we,pe,$e]),Dt=(0,e.useCallback)((t,o=!0)=>{t&&(Ee(t,o),W(t.id))},[Ee]),et=(0,e.useCallback)(t=>{let o=q.current;if(!o||!w.current)return;let s=Math.max(0,Math.min(t,o.duration||t));o.currentTime=s,A(s),we(w.current.id,s,o.duration||le.current,!0)},[we]),Ie=(0,e.useCallback)(t=>{let o=q.current;if(!o||!w.current)return;let s=Math.max(0,Math.min((o.currentTime||0)+t,(o.duration||le.current||0)-1));o.currentTime=s,A(s)},[]),tt=(0,e.useCallback)(t=>{if(!J.length)return;let s=((w.current?J.findIndex(d=>d.id===w.current.id):-1)+t+J.length)%J.length;Ee(J[s],!0)},[J,Ee]),Vt=(0,e.useCallback)(()=>{let t=st.indexOf(fe.current.rate),o=st[(t+1)%st.length],s=q.current;s&&(s.playbackRate=o),pe({rate:o})},[pe]),Be=(0,e.useCallback)(t=>{let o=Math.max(0,Math.min(1,t)),s=q.current;s&&(s.volume=o),pe({volume:o})},[pe]),Zt=(0,e.useCallback)(()=>{let t=q.current,o=fe.current.volume>0?0:.9;t&&(t.volume=o),pe({volume:o})},[pe]),Qt=()=>{let t=q.current;!t||!w.current||(A(t.currentTime),we(w.current.id,t.currentTime,t.duration||le.current))},Wt=()=>{let t=q.current,o=w.current;if(!t||!o)return;let s=Number.isFinite(t.duration)?t.duration:o.duration||0;re(s);let d=Pe.current;Pe.current=0,d>0&&d<s-1&&(t.currentTime=d,A(d))},Xt=()=>{let t=q.current;w.current&&we(w.current.id,t?.duration||le.current||0,t?.duration||le.current||0,!0),tt(1)},Yt=async t=>{await D(`${g}/folders`,"POST",{path:t}),await de(),m("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},_t=async()=>{let t=await fetch(`${g}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),o=await t.json().catch(()=>({}));if(!t.ok)throw new Error(o.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return o},Gt=t=>{[...t.dataTransfer?.types||[]].includes("Files")&&(t.preventDefault(),ut||We(!0))},Rt=t=>{t.currentTarget.contains(t.relatedTarget)||We(!1)},eo=async t=>{t.preventDefault(),We(!1);let o=t.dataTransfer,s=[...o?.files||[]],d=s.map(C=>C.path).filter(C=>typeof C=="string"&&C),$=String(o?.getData("text/uri-list")||"").split(/\r?\n/).map(C=>C.trim()).filter(C=>C.startsWith("file://")).map(C=>decodeURIComponent(C.replace(/^file:\/\//,""))),P=[...new Set([...d,...$])];if(P.length){try{let C=await D(`${g}/import/paths`,"POST",{paths:P});await de(),m(C.added?`\u5DF2\u6DFB\u52A0 ${C.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(C){H(C.message)}return}let ue=s.filter(C=>C.size>0);if(!ue.length){m("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let oo=`drop-${Date.now()}`,Fe="",nt=0;for(let C of ue)try{let Et=await fetch(`${g}/import/upload?name=${encodeURIComponent(C.name)}&batch=${oo}`,{method:"POST",body:C}),ro=await Et.json();Et.ok&&(Fe=ro.folder||Fe,nt+=1)}catch{}if(Fe)try{await D(`${g}/folders`,"POST",{path:Fe})}catch{}await de(),m(nt?`\u5DF2\u5BFC\u5165 ${nt} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},to=async t=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${t}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await D(`${g}/folders`,"DELETE",{path:t}),await de(),m("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(o){H(o.message)}};(0,e.useEffect)(()=>{let t=o=>{let s=o.target?.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||o.metaKey||o.ctrlKey||o.altKey||(o.code==="Space"?(o.preventDefault(),$e()):o.key==="ArrowRight"?(o.preventDefault(),Ie(15)):o.key==="ArrowLeft"?(o.preventDefault(),Ie(-15)):o.key==="ArrowUp"?(o.preventDefault(),Be(fe.current.volume+.05)):o.key==="ArrowDown"?(o.preventDefault(),Be(fe.current.volume-.05)):o.key==="/"&&(o.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[$e,Ie,Be]);let ot=t=>{let o=c[t.id];return!o||!t.duration?!1:o.position/t.duration>=.97},rt=t=>{let o=c[t.id];return!o||!t.duration?0:Math.min(100,Math.max(0,o.position/t.duration*100))};return e.default.createElement("div",{className:`shell ${pt?"nav-collapsed":""}`,onDragOver:Gt,onDragLeave:Rt,onDrop:eo},ut?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,pt?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:yt},e.default.createElement(E,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(E,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.5"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:yt},e.default.createElement(E,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Re.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(ot).length]].map(([t,o,s])=>e.default.createElement("button",{key:t,className:`nav-item ${v===t?"active":""}`,onClick:()=>Z(t)},e.default.createElement("span",null,o),e.default.createElement("span",{className:"nav-count"},s||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>S(!0)},e.default.createElement(E,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(t=>e.default.createElement("li",{key:t,title:t},e.default.createElement(E,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},vo(t)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>to(t)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,Ht),e.default.createElement("p",{className:"subline"},Jt)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${vt?"is-on":""}`,onClick:()=>mt(t=>!t),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(E,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Pt.length?` ${Pt.length}`:"")),e.default.createElement("button",{className:`tool-btn ${Me?"is-on":""}`,onClick:()=>{Xe(t=>!t),Se([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(E,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(E,{name:"search",size:16}),e.default.createElement("input",{value:z,onChange:t=>K(t.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:N,onChange:t=>U(t.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Me?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",ie.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>Se(G.map(t=>t.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Ne.length,onClick:()=>Ke(Ne.map(t=>t.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Ne.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!ie.length,onClick:()=>Ke(ie)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{Se([]),Xe(!1)}},"\u53D6\u6D88")):null,ne?e.default.createElement("div",{className:"banner error",onClick:()=>H("")},ne," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,M?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>W(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},M.artist,M.album?` \xB7 ${M.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ve,{item:M,size:288})),e.default.createElement("h2",{className:"episode-title"},M.title),e.default.createElement("p",{className:"episode-sub"},M.artist,M.album?` \xB7 ${M.album}`:""),e.default.createElement("p",{className:"episode-path",title:M.file},M.location||M.file),e.default.createElement("p",{className:"episode-stats"},jt(M.duration)," \xB7 ",Lt(M.mtime)," \xB7 \u5DF2\u542C ",Math.round(rt(M)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:$e},te&&b?.id===M.id?"\u6682\u505C":"\u64AD\u653E"),I==="queued"||I==="running"?e.default.createElement("button",{className:"btn ghost",onClick:_e},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:De},h?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(At,{inline:!0,transcript:h,status:I,progress:se?.progress,stage:se?.stage,chunks:se?.chunks,queued:se?.queued,elapsed:be,editingId:ke,draft:qe,onDraftChange:Ye,onEditLine:kt,onSaveLine:Nt,onCancelEdit:()=>Te(null),onSplitLine:$t,onMergeLine:Ct,onUndo:zt,onValidate:Mt,issues:ft,onCancel:_e,error:Ce,position:B,onSeek:et,onClose:()=>W(null),onStart:De,target:Q,job:he,onChangeTarget:Tt,onOpenSettings:()=>Ae(!0)})))):e.default.createElement(e.default.Fragment,null,v==="all"&&!z&&Re.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Re.map(t=>{let o=rt(t);return e.default.createElement("button",{key:t.id,className:`continue-card ${b?.id===t.id?"is-current":""}`,onClick:()=>Dt(t,!0)},e.default.createElement(Ve,{item:t,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},t.title),e.default.createElement("div",{className:"continue-meta"},t.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${o}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ge?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):G.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>S(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},G.map((t,o)=>{let s=rt(t),d=b?.id===t.id;return e.default.createElement("button",{key:t.id,className:`row ${d?"is-current":""} ${ot(t)?"is-finished":""} ${Me&&ie.includes(t.id)?"is-selected":""}`,onClick:()=>Me?Ut(t.id):Dt(t,!0)},e.default.createElement("span",{className:"col-index row-index"},Me?ie.includes(t.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(E,{name:"check",size:14})):null:d&&te?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):o+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ve,{item:t,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},t.title),e.default.createElement("span",{className:"row-meta"},t.artist,t.album?` \xB7 ${t.album}`:""," \xB7 ",Lt(t.mtime),t.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},jt(t.duration)),e.default.createElement("span",{className:"col-progress row-progress"},ot(t)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(E,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):s>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${s}%`}})):null))}))))),Le&&b&&!M?e.default.createElement(At,{transcript:h,status:I,progress:se?.progress,stage:se?.stage,chunks:se?.chunks,queued:se?.queued,elapsed:be,editingId:ke,draft:qe,onDraftChange:Ye,onEditLine:kt,onSaveLine:Nt,onCancelEdit:()=>Te(null),onSplitLine:$t,onMergeLine:Ct,onUndo:zt,onValidate:Mt,issues:ft,onCancel:_e,error:Ce,position:B,onSeek:et,onClose:()=>ae(!1),onStart:De,target:Q,job:he,onChangeTarget:Tt,onOpenSettings:()=>Ae(!0)}):null,vt?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>mt(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Oe.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Oe.map(t=>e.default.createElement("div",{key:t.key,className:`job-row job-${t.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},t.episodeTitle||t.episodeId),e.default.createElement("span",{className:"job-meta"},mo(t)),t.status==="running"&&t.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${t.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},t.status==="queued"||t.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>Ge(t,"cancel")},"\u53D6\u6D88"):null,t.status==="error"||t.status==="interrupted"||t.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>Ge(t,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(t.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>Ge(t,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Ne.length,onClick:()=>Ke(Ne.map(t=>t.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Ne.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!ie.length,onClick:()=>Ke(ie)},"\u8F6C\u5199\u5DF2\u9009 ",ie.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${F?Math.min(100,Math.max(0,B/F*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:F||0,step:.05,value:Math.min(B,F||0),onChange:t=>et(Number(t.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},b?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ve,{item:b,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:b.title},b.title),e.default.createElement("div",{className:"now-artist"},b.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>tt(-1)},e.default.createElement(E,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Ie(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:$e,disabled:!b&&G.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(E,{name:te?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Ie(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>tt(1)},e.default.createElement(E,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Le?"active":""}`,onClick:Kt,disabled:!b,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(E,{name:"wave",size:15}),e.default.createElement("span",null,h?"\u5B57\u5E55":I==="queued"||I==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},it(B)," / ",it(F)),e.default.createElement("button",{className:"rate-btn",onClick:Vt,title:"\u64AD\u653E\u901F\u5EA6"},k.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:Zt,title:"\u9759\u97F3"},e.default.createElement(E,{name:k.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:k.volume,onChange:t=>Be(Number(t.target.value)),"aria-label":"\u97F3\u91CF"})))),T?e.default.createElement(ho,{onClose:()=>S(!1),onSubmit:Yt,onPick:_t}):null,Ot?e.default.createElement(fo,{config:l,onClose:()=>Ae(!1),onSave:async t=>{let o=await D(`${g}/translate/settings`,"PUT",t);O(o),Ae(!1),m("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,me?e.default.createElement("div",{className:"toast"},me):null,e.default.createElement("audio",{ref:q,preload:"metadata",onPlay:()=>oe(!0),onPause:()=>{oe(!1);let t=q.current;w.current&&t&&t.currentTime>0&&!t.ended&&we(w.current.id,t.currentTime,t.duration||le.current,!0)},onTimeUpdate:Qt,onLoadedMetadata:Wt,onEnded:Xt,onError:()=>{oe(!1),m("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=at(require("react"),1);var R="/podwave/api";async function je(r){let i=await fetch(r),a=await i.json().catch(()=>({}));if(!i.ok)throw new Error(a.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return a}async function Ze(r,i,a){let p=await fetch(r,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(a??{})}),c=await p.json().catch(()=>({}));if(!p.ok)throw new Error(c.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return c}function wo(r){let i=Math.max(0,Math.round(Number(r)||0)),a=Math.floor(i/3600),p=Math.floor(i%3600/60);return a>0?`${a} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function xo(r){if(!r)return"";let i=new Date(r),a=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${a(i.getMonth()+1)}-${a(i.getDate())} ${a(i.getHours())}:${a(i.getMinutes())}`}function dt(){let[r,i]=(0,n.useState)([]),[a,p]=(0,n.useState)([]),[c,x]=(0,n.useState)({asrModel:"",translateModel:""}),[f,j]=(0,n.useState)(null),[k,L]=(0,n.useState)(null),[z,K]=(0,n.useState)({showSidebarPanel:!0}),[N,U]=(0,n.useState)(""),[v,Z]=(0,n.useState)(15),[ee,W]=(0,n.useState)("api"),[b,Y]=(0,n.useState)("https://api.deepseek.com"),[te,oe]=(0,n.useState)("deepseek-chat"),[B,A]=(0,n.useState)(""),[F,re]=(0,n.useState)(""),[ge,ve]=(0,n.useState)(""),[T,S]=(0,n.useState)(""),[ne,H]=(0,n.useState)(""),[me,u]=(0,n.useState)(""),h=(0,n.useCallback)(async()=>{try{let[l,O,Q,Qe,he]=await Promise.all([je(`${R}/history`),je(`${R}/models`),je(`${R}/translate/settings`),je(`${R}/ui-settings`),je(`${R}/transcribe/settings`)]);K({showSidebarPanel:Qe?.showSidebarPanel!==!1}),U((he.hotwords||[]).join(" ")),Z(he.chunkMinutes||15),i(l.items||[]),p(O.models||[]),x(O.config||{asrModel:"",translateModel:""}),j(O.transcribe||null),re(O.config?.asrModel||""),ve(O.config?.translateModel||""),L(Q),W(Q.provider||"api"),Y(Q.apiBase||"https://api.deepseek.com"),oe(Q.apiModel||"deepseek-chat"),A(""),u("")}catch(l){u(l.message)}},[]);(0,n.useEffect)(()=>{h()},[h]);let y=l=>{H(l),window.setTimeout(()=>H(""),2400)},I=async()=>{S("api"),u("");try{let l={provider:ee,apiBase:b,apiModel:te};B.trim()&&(l.apiKey=B.trim());let O=await Ze(`${R}/translate/settings`,"PUT",l);L(O),A(""),y("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){u(l.message)}finally{S("")}},xe=async()=>{S("models"),u("");try{let l=await Ze(`${R}/models`,"PUT",{asrModel:F,translateModel:ge});x(l.config),p(l.models||[]),j(l.transcribe||null),y("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(l){u(l.message)}finally{S("")}},be=a.length?a:[{name:c.asrModel||"qwen3-asr-1.7b-8bit",ready:f?.modelReady},{name:c.translateModel||"qwen3-8b-4bit",ready:k?.localReady}],ye=be.filter(l=>/asr/i.test(l.name)),Ce=be.filter(l=>!/asr/i.test(l.name)),_=async()=>{S("ui"),u("");try{let l=await Ze(`${R}/ui-settings`,"PUT",{showSidebarPanel:z.showSidebarPanel});K({showSidebarPanel:l.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:l})),y("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){u(l.message)}finally{S("")}},Le=async()=>{S("transcribe"),u("");try{let l=N.split(/[\s,，、]+/).map(Q=>Q.trim()).filter(Boolean).slice(0,500),O=await Ze(`${R}/transcribe/settings`,"PUT",{hotwords:l,chunkMinutes:Math.min(60,Math.max(1,Number(v)||15))});U((O.hotwords||[]).join(" ")),Z(O.chunkMinutes||15),y("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(l){u(l.message)}finally{S("")}},ae=be;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Je),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),me?n.default.createElement("div",{className:"banner error",onClick:()=>u("")},me):null,ne?n.default.createElement("div",{className:"settings-message"},ne):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(l=>n.default.createElement("li",{key:l.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},l.title),n.default.createElement("span",{className:"history-meta"},l.artist?`${l.artist} \xB7 `:"",l.duration?`${wo(l.duration)} \xB7 `:"",l.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",l.lines," \u884C",l.translations?.length?` \xB7 \u5DF2\u7FFB ${l.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},xo(l.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:N,onChange:l=>U(l.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:v,onChange:l=>Z(l.target.value)}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Le,disabled:T==="transcribe"},T==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:ee,onChange:l=>W(l.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:b,onChange:l=>Y(l.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:te,onChange:l=>oe(l.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:B,onChange:l=>A(l.target.value),placeholder:k?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${k.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:I,disabled:T==="api"},T==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},k?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:z.showSidebarPanel,onChange:l=>K({showSidebarPanel:l.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:_,disabled:T==="ui"},T==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:F,onChange:l=>re(l.target.value)},(ye.length?ye:ae).map(l=>n.default.createElement("option",{key:l.name,value:l.name},l.name,l.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},f?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:ge,onChange:l=>ve(l.target.value)},(Ce.length?Ce:ae).map(l=>n.default.createElement("option",{key:l.name,value:l.name},l.name,l.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},k?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:xe,disabled:T==="models"},T==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function bo({size:r=16}){return X.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},X.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),X.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),X.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),X.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),X.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function yo(){return X.default.createElement("div",{className:"podwave-root"},X.default.createElement("style",null,Je),X.default.createElement(lt,null))}function ko(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},yo)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},dt));let i=null,a="podwave-hide-nav",p=x=>{if(typeof document>"u")return;let f=document.getElementById(a);x&&!f?(f=document.createElement("style"),f.id=a,f.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(f)):!x&&f&&f.remove()},c=x=>{if(p(!x),x&&!i)i=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},bo);else if(!x&&i){let f=i;i=null;try{typeof f?.dispose=="function"?f.dispose():typeof f=="function"?f():typeof f?.dispose>"u"&&typeof f?.unregister=="function"&&f.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(x=>x.ok?x.json():null).then(x=>c(x?.showSidebarPanel!==!1)).catch(()=>c(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",x=>{c(x?.detail?.showSidebarPanel!==!1)})}var No=["slots"];

return module.exports}})
