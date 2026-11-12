window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var wo=Object.create;var Se=Object.defineProperty;var xo=Object.getOwnPropertyDescriptor;var bo=Object.getOwnPropertyNames;var yo=Object.getPrototypeOf,ko=Object.prototype.hasOwnProperty;var No=(r,a)=>{for(var s in a)Se(r,s,{get:a[s],enumerable:!0})},_e=(r,a,s,p)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of bo(a))!ko.call(r,d)&&d!==s&&Se(r,d,{get:()=>a[d],enumerable:!(p=xo(a,d))||p.enumerable});return r};var Le=(r,a,s)=>(s=r!=null?wo(yo(r)):{},_e(a||!r||!r.__esModule?Se(s,"default",{value:r,enumerable:!0}):s,r)),Co=r=>_e(Se({},"__esModule",{value:!0}),r);var Lo={};No(Lo,{apply:()=>Do,inject:()=>jo});module.exports=Co(Lo);var U=Le(require("react"),1);var Me=`.podwave-root {
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
`;var e=Le(require("react"),1),h="/podwave/api",Oe=[.75,1,1.25,1.5,1.75,2];async function F(r){let a=await fetch(r);if(!a.ok){let s=await a.json().catch(()=>({}));throw new Error(s.error||a.statusText)}return a.json()}async function G(r,a,s){let p=await fetch(r,{method:a,headers:s?{"Content-Type":"application/json"}:void 0,body:s?JSON.stringify(s):void 0});if(!p.ok){let d=await p.json().catch(()=>({}));throw new Error(d.error||p.statusText)}return p.json()}function Ke(r){if(!Number.isFinite(r)||r<0)return"0:00";let a=Math.floor(r),s=Math.floor(a/3600),p=Math.floor(a%3600/60),d=a%60;return s>0?`${s}:${String(p).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${p}:${String(d).padStart(2,"0")}`}function Ge(r){if(!r)return"\u2014";let a=Math.floor(r/3600),s=Math.round(r%3600/60);return a>0?`${a} \u5C0F\u65F6 ${s} \u5206`:`${Math.max(1,s)} \u5206\u949F`}function Re(r){if(!r)return"";let a=new Date(r),s=Date.now()-r;return s<60*1e3?"\u521A\u521A":s<3600*1e3?`${Math.floor(s/6e4)} \u5206\u949F\u524D`:s<1440*60*1e3?`${Math.floor(s/36e5)} \u5C0F\u65F6\u524D`:s<10080*60*1e3?`${Math.floor(s/864e5)} \u5929\u524D`:`${a.getMonth()+1} \u6708 ${a.getDate()} \u65E5`}function $o(r){let a=String(r||"").trim();return a?a.charAt(0).toUpperCase():"\xB7"}function So(r){let a=String(r).split("/").filter(Boolean);return a.length<=2?`/${a.join("/")}`:`${a.slice(-2).join("/")}`}function Te({item:r,size:a=44,className:s=""}){let p={width:a,height:a};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${s}`,style:p,src:`${h}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${s}`,style:p,"aria-hidden":!0},$o(r&&r.title))}function D({name:r,size:a=18}){let s={width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...s},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"check":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...s,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return e.default.createElement("svg",{...s},e.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}function Mo({onSubmit:r,onClose:a}){let[s,p]=(0,e.useState)(""),[d,g]=(0,e.useState)(!1),[u,T]=(0,e.useState)(""),w=(0,e.useRef)(null);return(0,e.useEffect)(()=>{w.current?.focus();let f=E=>{E.key==="Escape"&&a()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:f=>{f.target===f.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async f=>{if(f.preventDefault(),!(!s.trim()||d)){g(!0),T("");try{await r(s.trim()),a()}catch(E){T(E.message),g(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u3001\u4E0A\u4F20\u6216\u4FEE\u6539\u5B83\u4EEC\u3002"),e.default.createElement("input",{ref:w,value:s,onChange:f=>p(f.target.value),placeholder:"~/Music/\u64AD\u5BA2 \u6216 /Users/\u4F60/Downloads/\u8282\u76EE",spellCheck:!1}),u?e.default.createElement("div",{className:"dialog-error"},u):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:d||!s.trim()},d?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0"))))}function eo({transcript:r,status:a,elapsed:s,error:p,position:d,onSeek:g,onClose:u,onStart:T,target:w,translations:P,job:f,onChangeTarget:E,onOpenSettings:b,inline:q=!1}){let C=(0,e.useRef)(null),B=r?.segments?.findIndex(x=>d>=x.start&&d<x.end)??-1;(0,e.useEffect)(()=>{if(B<0||!C.current)return;C.current.querySelector(`[data-seg="${B}"]`)?.scrollIntoView({block:"nearest"})},[B]);let J=a==="queued"||a==="running";return e.default.createElement("section",{className:`transcript-panel ${q?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.segments.length," \u884C"):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:w,onChange:x=>E(x.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:b},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("a",{className:"mini-link",href:`${h}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${h}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,q?null:e.default.createElement("button",{className:"transcript-close",onClick:u,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:C},f?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,f?.status==="error"?e.default.createElement("div",{className:"tr-running err"},f.error):null,r?r.segments.map((x,v)=>e.default.createElement("button",{key:x.id,"data-seg":v,className:`seg-row ${v===B?"active":""}`,onClick:()=>g(x.start)},e.default.createElement("span",{className:"seg-time"},Ke(x.start)),e.default.createElement("span",{className:"seg-text"},x.text,P?.[x.id]?e.default.createElement("span",{className:"seg-trans"},P[x.id]):null))):J?e.default.createElement("div",{className:"transcript-status"},"\u6B63\u5728\u8F6C\u5199\u2026 \u5DF2\u7528 ",Math.round((s||0)/1e3)," \u79D2",e.default.createElement("br",null),"\u957F\u64AD\u5BA2\u9700\u8981\u51E0\u5206\u949F\uFF0C\u5148\u653E\u7740\u542C\u4E5F\u884C\uFF0C\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"):p?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},p),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:T},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:T},"\u5F00\u59CB\u8F6C\u5199"))))}function To({config:r,onClose:a,onSave:s}){let[p,d]=(0,e.useState)(r?.provider||"api"),[g,u]=(0,e.useState)(""),[T,w]=(0,e.useState)(!1),[P,f]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:b=>{b.target===b.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async b=>{b.preventDefault(),w(!0),f("");try{await s({provider:p,apiKey:g||void 0})}catch(q){f(q.message),w(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:p,onChange:b=>d(b.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),p==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:g,onChange:b=>u(b.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),P?e.default.createElement("div",{className:"dialog-error"},P):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:T},"\u4FDD\u5B58"))))}function Ue(){let[r,a]=(0,e.useState)([]),[s,p]=(0,e.useState)([]),[d,g]=(0,e.useState)({}),[u,T]=(0,e.useState)({running:!1}),[w,P]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[f,E]=(0,e.useState)(""),[b,q]=(0,e.useState)("recent"),[C,B]=(0,e.useState)("all"),[J,x]=(0,e.useState)(null),[v,ee]=(0,e.useState)(null),[oe,te]=(0,e.useState)(!1),[Z,H]=(0,e.useState)(0),[z,L]=(0,e.useState)(0),[le,de]=(0,e.useState)(!0),[xe,S]=(0,e.useState)(!1),[pe,Y]=(0,e.useState)(""),[be,ye]=(0,e.useState)(""),[$,V]=(0,e.useState)(null),[k,re]=(0,e.useState)("none"),[ce,i]=(0,e.useState)(0),[O,j]=(0,e.useState)(""),[ke,ue]=(0,e.useState)(!1),[oo,He]=(0,e.useState)(null),[ne,to]=(0,e.useState)(""),[Ne,ve]=(0,e.useState)({status:"none"}),[ro,Ce]=(0,e.useState)(!1),[Fe,Je]=(0,e.useState)(!1),M=(0,e.useRef)(null),m=(0,e.useRef)(null),Q=(0,e.useRef)(0),W=(0,e.useRef)(w),ge=(0,e.useRef)(0),Ze=(0,e.useRef)(0),Ve=(0,e.useRef)(0),no=(0,e.useRef)(!1);(0,e.useEffect)(()=>{W.current=w},[w]),(0,e.useEffect)(()=>{m.current=v},[v]),(0,e.useEffect)(()=>{Q.current=z},[z]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await F(`${h}/ui-settings`);!o&&t&&Je(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Qe=(0,e.useCallback)(()=>{Je(o=>{let t=!o;return fetch(`${h}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),K=(0,e.useCallback)(o=>{ye(o),window.clearTimeout(Ve.current),Ve.current=window.setTimeout(()=>ye(""),2600)},[]),ae=(0,e.useCallback)(async()=>{let o=await F(`${h}/episodes`);return a(o.items||[]),p(o.folders||[]),g(o.progress||{}),T(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await F(`${h}/state`);if(o)return;P(t.settings),p(t.folders||[]);let l=await ae();if(o)return;let c=t.settings?.lastEpisodeId,y=c?(l.items||[]).find(A=>A.id===c):null;if(y){ee(y),L(y.duration||0);let A=l.progress?.[y.id]?.position||0;ge.current=A>5?A:0,H(ge.current);let we=M.current;we&&(we.src=`${h}/episodes/${y.id}/audio`,we.load(),we.playbackRate=t.settings?.rate||1,we.volume=t.settings?.volume??.9)}de(!1),no.current=!0}catch(t){o||(Y(t.message),de(!1))}})(),()=>{o=!0}},[ae]),(0,e.useEffect)(()=>{if(!u.running)return;let o=setInterval(()=>{ae().catch(()=>{})},1500);return()=>clearInterval(o)},[u.running,ae]),(0,e.useEffect)(()=>{let o=!1;return V(null),j(""),i(0),v?.id?((async()=>{try{let t=await F(`${h}/episodes/${v.id}/transcript`);if(o)return;re(t.status),t.status==="done"&&t.transcript?V(t.transcript):t.status==="queued"||t.status==="running"?i(t.elapsedMs||0):t.status==="error"&&j(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||j(t.message)}})(),()=>{o=!0}):(re("none"),()=>{o=!0})},[v?.id]),(0,e.useEffect)(()=>{F(`${h}/translate/settings`).then(He).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(k!=="queued"&&k!=="running")return;let o=!1,t=setInterval(async()=>{let l=m.current?.id;if(l)try{let c=await F(`${h}/episodes/${l}/transcript`);if(o)return;re(c.status),i(c.elapsedMs||0),c.status==="done"&&c.transcript?(V(c.transcript),ue(!0),K("\u8F6C\u5199\u5B8C\u6210")):c.status==="error"&&j(c.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[k,K]),(0,e.useEffect)(()=>{if(Ne.status!=="running")return;let o=!1,t=setInterval(async()=>{let l=m.current?.id;if(l)try{let c=await F(`${h}/episodes/${l}/translate?target=${ne}`);if(o)return;if(ve(c),c.status==="done"){let y=await F(`${h}/episodes/${l}/transcript`);!o&&y.transcript&&V(y.transcript),K("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[Ne.status,ne,K]);let _=(0,e.useCallback)((o,t,l,c=!1)=>{if(!o)return;let y=Date.now();!c&&y-Ze.current<4e3||(Ze.current=y,G(`${h}/progress/${o}`,"PUT",{position:t,duration:l}).catch(()=>{}),g(A=>({...A,[o]:{position:t,duration:l,updatedAt:y}})))},[]),X=(0,e.useCallback)(o=>{P(t=>({...t,...o})),G(`${h}/settings`,"PATCH",o).catch(()=>{})},[]),me=(0,e.useCallback)(async()=>{if(m.current){j(""),ue(!0);try{let o=await G(`${h}/episodes/${m.current.id}/transcribe`,"POST",{});re(o.status||"queued")}catch(o){j(o.message)}}},[]),ao=(0,e.useCallback)(()=>{if($){ue(o=>!o);return}if(k==="queued"||k==="running"){ue(!0);return}me()},[$,k,me]),ze=(0,e.useCallback)(async()=>{let o=m.current?.id;if(!o)return;let t=await F(`${h}/episodes/${o}/transcript`);t.transcript&&V(t.transcript)},[]),Xe=(0,e.useCallback)(async o=>{if(m.current?.id){ve({status:"running"});try{let t=await G(`${h}/episodes/${m.current.id}/translate`,"POST",{target:o});ve(t),t.status==="done"&&(await ze(),K("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){ve({status:"error",error:t.message})}}},[ze,K]),Ye=(0,e.useCallback)(async o=>{if(to(o),!o)return;let t=$?.translations?.[o];if(t&&Object.keys(t).length){ve({status:"done"}),await ze();return}await Xe(o)},[$,Xe,ze]),I=(0,e.useMemo)(()=>{let o=[...r];return b==="title"?o.sort((t,l)=>t.title.localeCompare(l.title,"zh-Hans-CN")):b==="duration"?o.sort((t,l)=>(l.duration||0)-(t.duration||0)):o.sort((t,l)=>l.mtime-t.mtime),o},[r,b]),se=(0,e.useMemo)(()=>{let o=f.trim().toLowerCase();return I.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let c=d[t.id]?.position||0,y=t.duration||0,A=y?c/y:0;return C==="inprogress"?c>5&&A<.97:C==="finished"?A>=.97:!0})},[I,f,C,d]),Ee=(0,e.useMemo)(()=>r.filter(o=>{let t=d[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(d[t.id]?.updatedAt||0)-(d[o.id]?.updatedAt||0)).slice(0,4),[r,d]),so=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),io=Math.round(so/3600*10)/10,lo=C==="inprogress"?"\u7EE7\u7EED\u6536\u542C":C==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",N=J?r.find(o=>o.id===J)||(v?.id===J?v:null):null,po=le?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":u.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${se.length} \u96C6 \xB7 \u5171 ${io} \u5C0F\u65F6 \xB7 ${s.length} \u4E2A\u6587\u4EF6\u5939`,Oo=(0,e.useMemo)(()=>v?I.findIndex(o=>o.id===v.id):-1,[I,v]),ie=(0,e.useCallback)(()=>{let o=M.current;if(o){if(!m.current){let t=se[0]||I[0];t&&fe(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[se,I]),fe=(0,e.useCallback)((o,t=!0)=>{let l=M.current;if(!l||!o)return;if(m.current&&m.current.id===o.id){t&&ie();return}m.current&&!l.ended&&l.currentTime>1&&_(m.current.id,l.currentTime,l.duration||Q.current,!0),m.current=o,ee(o),x(A=>A&&o.id),L(o.duration||0);let c=d[o.id]?.position||0,y=c>5&&(!o.duration||c<o.duration-10)?c:0;ge.current=y,H(y),l.src=`${h}/episodes/${o.id}/audio`,l.load(),l.playbackRate=W.current.rate||1,l.volume=W.current.volume??.9,t&&l.play().catch(()=>{}),X({lastEpisodeId:o.id})},[d,_,X,ie]),We=(0,e.useCallback)((o,t=!0)=>{o&&(fe(o,t),x(o.id))},[fe]),Ie=(0,e.useCallback)(o=>{let t=M.current;if(!t||!m.current)return;let l=Math.max(0,Math.min(o,t.duration||o));t.currentTime=l,H(l),_(m.current.id,l,t.duration||Q.current,!0)},[_]),he=(0,e.useCallback)(o=>{let t=M.current;if(!t||!m.current)return;let l=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||Q.current||0)-1));t.currentTime=l,H(l)},[]),Ae=(0,e.useCallback)(o=>{if(!I.length)return;let l=((m.current?I.findIndex(c=>c.id===m.current.id):-1)+o+I.length)%I.length;fe(I[l],!0)},[I,fe]),co=(0,e.useCallback)(()=>{let o=Oe.indexOf(W.current.rate),t=Oe[(o+1)%Oe.length],l=M.current;l&&(l.playbackRate=t),X({rate:t})},[X]),$e=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),l=M.current;l&&(l.volume=t),X({volume:t})},[X]),uo=(0,e.useCallback)(()=>{let o=M.current,t=W.current.volume>0?0:.9;o&&(o.volume=t),X({volume:t})},[X]),vo=()=>{let o=M.current;!o||!m.current||(H(o.currentTime),_(m.current.id,o.currentTime,o.duration||Q.current))},go=()=>{let o=M.current,t=m.current;if(!o||!t)return;let l=Number.isFinite(o.duration)?o.duration:t.duration||0;L(l);let c=ge.current;ge.current=0,c>0&&c<l-1&&(o.currentTime=c,H(c))},mo=()=>{let o=M.current;m.current&&_(m.current.id,o?.duration||Q.current||0,o?.duration||Q.current||0,!0),Ae(1)},fo=async o=>{await G(`${h}/folders`,"POST",{path:o}),await ae(),K("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},ho=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await G(`${h}/folders`,"DELETE",{path:o}),await ae(),K("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){Y(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let l=t.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),ie()):t.key==="ArrowRight"?(t.preventDefault(),he(15)):t.key==="ArrowLeft"?(t.preventDefault(),he(-15)):t.key==="ArrowUp"?(t.preventDefault(),$e(W.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),$e(W.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[ie,he,$e]);let De=o=>{let t=d[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},je=o=>{let t=d[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${Fe?"nav-collapsed":""}`},Fe?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Qe},e.default.createElement(D,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(D,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.2"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Qe},e.default.createElement(D,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Ee.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(De).length]].map(([o,t,l])=>e.default.createElement("button",{key:o,className:`nav-item ${C===o?"active":""}`,onClick:()=>B(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},l||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>S(!0)},e.default.createElement(D,{name:"plus",size:16}))),s.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},s.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(D,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},So(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>ho(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,lo),e.default.createElement("p",{className:"subline"},po)),e.default.createElement("div",{className:"tools"},e.default.createElement("label",{className:"search"},e.default.createElement(D,{name:"search",size:16}),e.default.createElement("input",{value:f,onChange:o=>E(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:b,onChange:o=>q(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),pe?e.default.createElement("div",{className:"banner error",onClick:()=>Y("")},pe," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,N?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>x(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},N.artist,N.album?` \xB7 ${N.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Te,{item:N,size:288})),e.default.createElement("h2",{className:"episode-title"},N.title),e.default.createElement("p",{className:"episode-sub"},N.artist,N.album?` \xB7 ${N.album}`:""),e.default.createElement("p",{className:"episode-path",title:N.file},N.location||N.file),e.default.createElement("p",{className:"episode-stats"},Ge(N.duration)," \xB7 ",Re(N.mtime)," \xB7 \u5DF2\u542C ",Math.round(je(N)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:ie},oe&&v?.id===N.id?"\u6682\u505C":"\u64AD\u653E"),e.default.createElement("button",{className:"btn ghost",onClick:me,disabled:k==="queued"||k==="running"},$?"\u91CD\u65B0\u8F6C\u5199":k==="queued"||k==="running"?"\u8F6C\u5199\u4E2D\u2026":"\u8F6C\u5199\u5B57\u5E55"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(eo,{inline:!0,transcript:$,status:k,elapsed:ce,error:O,position:Z,onSeek:Ie,onClose:()=>x(null),onStart:me,target:ne,translations:$?.translations?.[ne]||null,job:Ne,onChangeTarget:Ye,onOpenSettings:()=>Ce(!0)})))):e.default.createElement(e.default.Fragment,null,C==="all"&&!f&&Ee.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},Ee.map(o=>{let t=je(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${v?.id===o.id?"is-current":""}`,onClick:()=>We(o,!0)},e.default.createElement(Te,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),le?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):se.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>S(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},se.map((o,t)=>{let l=je(o),c=v?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${c?"is-current":""} ${De(o)?"is-finished":""}`,onClick:()=>We(o,!0)},e.default.createElement("span",{className:"col-index row-index"},c&&oe?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Te,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",Re(o.mtime)))),e.default.createElement("span",{className:"col-duration row-duration"},Ge(o.duration)),e.default.createElement("span",{className:"col-progress row-progress"},De(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(D,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),ke&&v&&!N?e.default.createElement(eo,{transcript:$,status:k,elapsed:ce,error:O,position:Z,onSeek:Ie,onClose:()=>ue(!1),onStart:me,target:ne,translations:$?.translations?.[ne]||null,job:Ne,onChangeTarget:Ye,onOpenSettings:()=>Ce(!0)}):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${z?Math.min(100,Math.max(0,Z/z*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:z||0,step:.05,value:Math.min(Z,z||0),onChange:o=>Ie(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},v?e.default.createElement(e.default.Fragment,null,e.default.createElement(Te,{item:v,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:v.title},v.title),e.default.createElement("div",{className:"now-artist"},v.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>Ae(-1)},e.default.createElement(D,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>he(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:ie,disabled:!v&&se.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(D,{name:oe?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>he(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>Ae(1)},e.default.createElement(D,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${ke?"active":""}`,onClick:ao,disabled:!v,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(D,{name:"wave",size:15}),e.default.createElement("span",null,$?"\u5B57\u5E55":k==="queued"||k==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Ke(Z)," / ",Ke(z)),e.default.createElement("button",{className:"rate-btn",onClick:co,title:"\u64AD\u653E\u901F\u5EA6"},w.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:uo,title:"\u9759\u97F3"},e.default.createElement(D,{name:w.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:w.volume,onChange:o=>$e(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),xe?e.default.createElement(Mo,{onClose:()=>S(!1),onSubmit:fo}):null,ro?e.default.createElement(To,{config:oo,onClose:()=>Ce(!1),onSave:async o=>{let t=await G(`${h}/translate/settings`,"PUT",o);He(t),Ce(!1),K("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,be?e.default.createElement("div",{className:"toast"},be):null,e.default.createElement("audio",{ref:M,preload:"metadata",onPlay:()=>te(!0),onPause:()=>{te(!1);let o=M.current;m.current&&o&&o.currentTime>0&&!o.ended&&_(m.current.id,o.currentTime,o.duration||Q.current,!0)},onTimeUpdate:vo,onLoadedMetadata:go,onEnded:mo,onError:()=>{te(!1),K("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=Le(require("react"),1);var R="/podwave/api";async function Pe(r){let a=await fetch(r),s=await a.json().catch(()=>({}));if(!a.ok)throw new Error(s.error||`\u8BF7\u6C42\u5931\u8D25 ${a.status}`);return s}async function qe(r,a,s){let p=await fetch(r,{method:a,headers:{"content-type":"application/json"},body:JSON.stringify(s??{})}),d=await p.json().catch(()=>({}));if(!p.ok)throw new Error(d.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return d}function Po(r){let a=Math.max(0,Math.round(Number(r)||0)),s=Math.floor(a/3600),p=Math.floor(a%3600/60);return s>0?`${s} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function Eo(r){if(!r)return"";let a=new Date(r),s=p=>String(p).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())} ${s(a.getHours())}:${s(a.getMinutes())}`}function Be(){let[r,a]=(0,n.useState)([]),[s,p]=(0,n.useState)([]),[d,g]=(0,n.useState)({asrModel:"",translateModel:""}),[u,T]=(0,n.useState)(null),[w,P]=(0,n.useState)(null),[f,E]=(0,n.useState)({showSidebarPanel:!0}),[b,q]=(0,n.useState)("api"),[C,B]=(0,n.useState)("https://api.deepseek.com"),[J,x]=(0,n.useState)("deepseek-chat"),[v,ee]=(0,n.useState)(""),[oe,te]=(0,n.useState)(""),[Z,H]=(0,n.useState)(""),[z,L]=(0,n.useState)(""),[le,de]=(0,n.useState)(""),[xe,S]=(0,n.useState)(""),pe=(0,n.useCallback)(async()=>{try{let[i,O,j,ke]=await Promise.all([Pe(`${R}/history`),Pe(`${R}/models`),Pe(`${R}/translate/settings`),Pe(`${R}/ui-settings`)]);E({showSidebarPanel:ke?.showSidebarPanel!==!1}),a(i.items||[]),p(O.models||[]),g(O.config||{asrModel:"",translateModel:""}),T(O.transcribe||null),te(O.config?.asrModel||""),H(O.config?.translateModel||""),P(j),q(j.provider||"api"),B(j.apiBase||"https://api.deepseek.com"),x(j.apiModel||"deepseek-chat"),ee(""),S("")}catch(i){S(i.message)}},[]);(0,n.useEffect)(()=>{pe()},[pe]);let Y=i=>{de(i),window.setTimeout(()=>de(""),2400)},be=async()=>{L("api"),S("");try{let i={provider:b,apiBase:C,apiModel:J};v.trim()&&(i.apiKey=v.trim());let O=await qe(`${R}/translate/settings`,"PUT",i);P(O),ee(""),Y("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){S(i.message)}finally{L("")}},ye=async()=>{L("models"),S("");try{let i=await qe(`${R}/models`,"PUT",{asrModel:oe,translateModel:Z});g(i.config),p(i.models||[]),T(i.transcribe||null),Y("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(i){S(i.message)}finally{L("")}},$=s.length?s:[{name:d.asrModel||"qwen3-asr-1.7b-8bit",ready:u?.modelReady},{name:d.translateModel||"qwen3-8b-4bit",ready:w?.localReady}],V=$.filter(i=>/asr/i.test(i.name)),k=$.filter(i=>!/asr/i.test(i.name)),re=async()=>{L("ui"),S("");try{let i=await qe(`${R}/ui-settings`,"PUT",{showSidebarPanel:f.showSidebarPanel});E({showSidebarPanel:i.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:i})),Y("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){S(i.message)}finally{L("")}},ce=$;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,Me),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),xe?n.default.createElement("div",{className:"banner error",onClick:()=>S("")},xe):null,le?n.default.createElement("div",{className:"settings-message"},le):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(i=>n.default.createElement("li",{key:i.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},i.title),n.default.createElement("span",{className:"history-meta"},i.artist?`${i.artist} \xB7 `:"",i.duration?`${Po(i.duration)} \xB7 `:"",i.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",i.segments," \u884C",i.translations?.length?` \xB7 \u5DF2\u7FFB ${i.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Eo(i.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:b,onChange:i=>q(i.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:C,onChange:i=>B(i.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:J,onChange:i=>x(i.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:v,onChange:i=>ee(i.target.value),placeholder:w?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${w.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:be,disabled:z==="api"},z==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},w?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:f.showSidebarPanel,onChange:i=>E({showSidebarPanel:i.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:re,disabled:z==="ui"},z==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:oe,onChange:i=>te(i.target.value)},(V.length?V:ce).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},u?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:Z,onChange:i=>H(i.target.value)},(k.length?k:ce).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},w?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ye,disabled:z==="models"},z==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function Io({size:r=16}){return U.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},U.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),U.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),U.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),U.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),U.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ao(){return U.default.createElement("div",{className:"podwave-root"},U.default.createElement("style",null,Me),U.default.createElement(Ue,null))}function Do(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Ao)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Be));let a=null,s="podwave-hide-nav",p=g=>{if(typeof document>"u")return;let u=document.getElementById(s);g&&!u?(u=document.createElement("style"),u.id=s,u.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(u)):!g&&u&&u.remove()},d=g=>{if(p(!g),g&&!a)a=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Io);else if(!g&&a){let u=a;a=null;try{typeof u?.dispose=="function"?u.dispose():typeof u=="function"?u():typeof u?.dispose>"u"&&typeof u?.unregister=="function"&&u.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(g=>g.ok?g.json():null).then(g=>d(g?.showSidebarPanel!==!1)).catch(()=>d(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",g=>{d(g?.detail?.showSidebarPanel!==!1)})}var jo=["slots"];

return module.exports}})
