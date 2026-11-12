window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var dt=Object.create;var Ye=Object.defineProperty;var pt=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var ut=Object.getPrototypeOf,gt=Object.prototype.hasOwnProperty;var vt=(r,l)=>{for(var a in l)Ye(r,a,{get:l[a],enumerable:!0})},qo=(r,l,a,c)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of ct(l))!gt.call(r,u)&&u!==a&&Ye(r,u,{get:()=>l[u],enumerable:!(c=pt(l,u))||c.enumerable});return r};var co=(r,l,a)=>(a=r!=null?dt(ut(r)):{},qo(l||!r||!r.__esModule?Ye(a,"default",{value:r,enumerable:!0}):a,r)),mt=r=>qo(Ye({},"__esModule",{value:!0}),r);var Mt={};vt(Mt,{apply:()=>zt,inject:()=>Tt});module.exports=mt(Mt);var te=co(require("react"),1);var _e=`.podwave-root {
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
`;var e=co(require("react"),1),g="/podwave/api",uo=[.75,1,1.25,1.5,1.75,2];async function H(r){let l=await fetch(r);if(!l.ok){let a=await l.json().catch(()=>({}));throw new Error(a.error||l.statusText)}return l.json()}async function P(r,l,a){let c=await fetch(r,{method:l,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!c.ok){let u=await c.json().catch(()=>({}));throw new Error(u.error||c.statusText)}return c.json()}function go(r){if(!Number.isFinite(r)||r<0)return"0:00";let l=Math.floor(r),a=Math.floor(l/3600),c=Math.floor(l%3600/60),u=l%60;return a>0?`${a}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${c}:${String(u).padStart(2,"0")}`}function Bo(r){if(!r)return"\u2014";let l=Math.floor(r/3600),a=Math.round(r%3600/60);return l>0?`${l} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function Ko(r){if(!r)return"";let l=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function ft(r){let a=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return a?a[0].toUpperCase():"\u266B"}function wt(r){let l=String(r).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}function Ge({item:r,size:l=44,className:a=""}){let c={width:l,height:l};return r&&r.hasCover?e.default.createElement("img",{className:`cover ${a}`,style:c,src:`${g}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):e.default.createElement("div",{className:`cover cover-fallback ${a}`,style:c,"aria-hidden":!0},ft(r&&r.title))}function bt(r){let l=r.progress?.percent,a=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${a}`}function I({name:r,size:l=18}){let a={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),e.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),e.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),e.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return e.default.createElement("svg",{...a},e.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),e.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),e.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return e.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},e.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),e.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),e.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),e.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),e.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return e.default.createElement("svg",{...a},e.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}function xt({onSubmit:r,onPick:l,onClose:a}){let[c,u]=(0,e.useState)(""),[w,h]=(0,e.useState)(!1),[L,C]=(0,e.useState)(!1),[A,S]=(0,e.useState)(""),K=(0,e.useRef)(null);return(0,e.useEffect)(()=>{K.current?.focus();let m=V=>{V.key==="Escape"&&a()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:m=>{m.target===m.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async m=>{if(m.preventDefault(),!(!c.trim()||w)){h(!0),S("");try{await r(c.trim()),a()}catch(V){S(V.message),h(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!L){C(!0),S("");try{let m=await l();if(m?.canceled)return;if(m?.error)throw new Error(m.error);m?.path&&(await r(m.path),a())}catch(m){S(m.message)}finally{C(!1)}}},disabled:L,autoFocus:!0},L?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:K,value:c,onChange:m=>u(m.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:w||!c.trim()},w?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),A?e.default.createElement("div",{className:"dialog-error"},A):null))}function Uo({transcript:r,status:l,progress:a,stage:c,chunks:u,queued:w,elapsed:h,error:L,position:C,onSeek:A,onClose:S,onStart:K,onCancel:b,target:U,job:m,onChangeTarget:V,onOpenSettings:X,inline:de=!1,editingId:Y=null,draft:O="",onDraftChange:x,onEditLine:he,onSaveLine:re,onCancelEdit:ne,onSplitLine:_,onMergeLine:Z,onUndo:q,onValidate:ae,issues:G=[]}){let se=(0,e.useRef)(null),fe=(0,e.useRef)(null),Q=r?.lines?.findIndex(p=>C>=p.start&&C<p.end)??-1;(0,e.useEffect)(()=>{if(Q<0||!se.current)return;se.current.querySelector(`[data-seg="${Q}"]`)?.scrollIntoView({block:"nearest"})},[Q]);let j=l==="queued"||l==="running";return e.default.createElement("section",{className:`transcript-panel ${de?"inline":""}`},e.default.createElement("header",{className:"transcript-head"},e.default.createElement("h3",null,"\u5B57\u5E55"),r?e.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,e.default.createElement("div",{className:"transcript-actions"},e.default.createElement("select",{className:"tr-select",value:U,onChange:p=>V(p.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},e.default.createElement("option",{value:""},"\u5BF9\u7167"),e.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),e.default.createElement("option",{value:"en"},"English")),e.default.createElement("button",{className:"mini-link",onClick:X},"\u8BBE\u7F6E"),r?e.default.createElement(e.default.Fragment,null,e.default.createElement("button",{className:"mini-link",onClick:q,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),e.default.createElement("button",{className:"mini-link",onClick:ae,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),e.default.createElement("a",{className:"mini-link",href:`${g}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),e.default.createElement("a",{className:"mini-link",href:`${g}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,de?null:e.default.createElement("button",{className:"transcript-close",onClick:S,title:"\u6536\u8D77"},"\xD7"))),e.default.createElement("div",{className:"transcript-body",ref:se},r&&G?.length?e.default.createElement("div",{className:"tr-issues"},G.slice(0,5).map(p=>e.default.createElement("div",{key:p},"\xB7 ",p)),G.length>5?e.default.createElement("div",null,"\u2026\u5171 ",G.length," \u6761"):null):null,m?.status==="running"?e.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,m?.status==="error"?e.default.createElement("div",{className:"tr-running err"},m.error):null,r?r.lines.map((p,ie)=>e.default.createElement("div",{key:p.id,"data-seg":ie,className:`seg-row ${ie===Q?"active":""} ${Y===p.id?"is-editing":""}`,onClick:()=>A(p.start)},e.default.createElement("span",{className:"seg-time"},go(p.start)),Y===p.id?e.default.createElement("span",{className:"seg-edit",onClick:T=>T.stopPropagation()},e.default.createElement("textarea",{ref:fe,value:O,rows:Math.min(4,Math.max(2,Math.ceil((O.length||1)/40))),onChange:T=>x(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&re(p.id),T.key==="Escape"&&ne()}}),e.default.createElement("span",{className:"seg-edit-actions"},e.default.createElement("button",{className:"seg-tool",onClick:()=>re(p.id)},"\u4FDD\u5B58"),e.default.createElement("button",{className:"seg-tool",onClick:()=>_(p.id,fe.current?.selectionStart??Math.floor(O.length/2))},"\u62C6\u5206"),e.default.createElement("button",{className:"seg-tool",onClick:ne},"\u53D6\u6D88"))):e.default.createElement(e.default.Fragment,null,p.speaker!=null?e.default.createElement("span",{className:`seg-speaker spk-${p.speaker%5}`},r.speakers?.[p.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${p.speaker+1}`):null,e.default.createElement("span",{className:"seg-text"},p.text,p.translations?.[U]?e.default.createElement("span",{className:"seg-trans"},p.translations[U]):null),e.default.createElement("span",{className:"seg-tools"},e.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:T=>{T.stopPropagation(),he(p)}},"\u270E"),ie<r.lines.length-1?e.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:T=>{T.stopPropagation(),Z(p.id)}},"\u21E3"):null)))):j?e.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",a?.percent!=null?` ${a.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((h||0)/1e3)+" \u79D2",a?.percent!=null?e.default.createElement("span",{className:"tx-progress"},e.default.createElement("span",{style:{width:`${a.percent}%`}})):null,e.default.createElement("br",null),e.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),e.default.createElement("br",null),b?e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:b},"\u53D6\u6D88\u8F6C\u5199"):null):L?e.default.createElement("div",{className:"transcript-status"},e.default.createElement("span",{className:"err"},L),e.default.createElement("br",null),e.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:K},"\u91CD\u8BD5")):e.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",e.default.createElement("br",null),e.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:K},"\u5F00\u59CB\u8F6C\u5199"))))}function yt({config:r,onClose:l,onSave:a}){let[c,u]=(0,e.useState)(r?.provider||"api"),[w,h]=(0,e.useState)(""),[L,C]=(0,e.useState)(!1),[A,S]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:b=>{b.target===b.currentTarget&&l()}},e.default.createElement("form",{className:"dialog",onSubmit:async b=>{b.preventDefault(),C(!0),S("");try{await a({provider:c,apiKey:w||void 0})}catch(U){S(U.message),C(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:b=>u(b.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:w,onChange:b=>h(b.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),A?e.default.createElement("div",{className:"dialog-error"},A):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:L},"\u4FDD\u5B58"))))}function vo(){let[r,l]=(0,e.useState)([]),[a,c]=(0,e.useState)([]),[u,w]=(0,e.useState)({}),[h,L]=(0,e.useState)({running:!1}),[C,A]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[S,K]=(0,e.useState)(""),[b,U]=(0,e.useState)("recent"),[m,V]=(0,e.useState)("all"),[X,de]=(0,e.useState)("all"),[Y,O]=(0,e.useState)(null),[x,he]=(0,e.useState)(null),[re,ne]=(0,e.useState)(!1),[_,Z]=(0,e.useState)(0),[q,ae]=(0,e.useState)(0),[G,se]=(0,e.useState)(!0),[fe,Q]=(0,e.useState)(!1),[j,p]=(0,e.useState)(""),[ie,T]=(0,e.useState)(""),[y,N]=(0,e.useState)(null),[E,W]=(0,e.useState)("none"),[Ke,De]=(0,e.useState)(0),[ye,R]=(0,e.useState)(""),[Ie,we]=(0,e.useState)(!1),[Ue,Fe]=(0,e.useState)(null),[ke,He]=(0,e.useState)(""),[i,k]=(0,e.useState)({status:"none"}),[ee,Ne]=(0,e.useState)(!1),[$e,Ce]=(0,e.useState)(!1),[ho,Re]=(0,e.useState)(!1),[pe,fo]=(0,e.useState)(null),[wo,bo]=(0,e.useState)(!1),[Je,xo]=(0,e.useState)([]),[je,eo]=(0,e.useState)(!1),[oe,ze]=(0,e.useState)([]),[Te,Le]=(0,e.useState)(null),[Ve,oo]=(0,e.useState)(""),[yo,ko]=(0,e.useState)([]),B=(0,e.useRef)(null),f=(0,e.useRef)(null),ce=(0,e.useRef)(0),be=(0,e.useRef)(C),Ae=(0,e.useRef)(0),No=(0,e.useRef)(0),$o=(0,e.useRef)(0),Fo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{be.current=C},[C]),(0,e.useEffect)(()=>{f.current=x},[x]),(0,e.useEffect)(()=>{ce.current=q},[q]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await H(`${g}/ui-settings`);!o&&t&&Ce(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Co=(0,e.useCallback)(()=>{Ce(o=>{let t=!o;return fetch(`${g}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),v=(0,e.useCallback)(o=>{T(o),window.clearTimeout($o.current),$o.current=window.setTimeout(()=>T(""),2600)},[]),ue=(0,e.useCallback)(async()=>{let o=await H(`${g}/episodes`);return l(o.items||[]),c(o.folders||[]),w(o.progress||{}),L(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await H(`${g}/state`);if(o)return;A(t.settings),c(t.folders||[]);let s=await ue();if(o)return;let d=t.settings?.lastEpisodeId,$=d?(s.items||[]).find(D=>D.id===d):null;if($){he($),ae($.duration||0);let D=s.progress?.[$.id]?.position||0;Ae.current=D>5?D:0,Z(Ae.current);let me=B.current;me&&(me.src=`${g}/episodes/${$.id}/audio`,me.load(),me.playbackRate=t.settings?.rate||1,me.volume=t.settings?.volume??.9)}se(!1),Fo.current=!0}catch(t){o||(p(t.message),se(!1))}})(),()=>{o=!0}},[ue]),(0,e.useEffect)(()=>{if(!h.running)return;let o=setInterval(()=>{ue().catch(()=>{})},1500);return()=>clearInterval(o)},[h.running,ue]),(0,e.useEffect)(()=>{let o=!1;return N(null),R(""),De(0),x?.id?((async()=>{try{let t=await H(`${g}/episodes/${x.id}/transcript`);if(o)return;W(t.status),fo(t.status==="queued"||t.status==="running"?t:null),t.status==="done"&&t.transcript?N(t.transcript):t.status==="queued"||t.status==="running"?De(t.elapsedMs||0):t.status==="error"&&R(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||R(t.message)}})(),()=>{o=!0}):(W("none"),()=>{o=!0})},[x?.id]),(0,e.useEffect)(()=>{H(`${g}/translate/settings`).then(Fe).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(E!=="queued"&&E!=="running")return;let o=!1,t=setInterval(async()=>{let s=f.current?.id;if(s)try{let d=await H(`${g}/episodes/${s}/transcript`);if(o)return;W(d.status),fo(d.status==="queued"||d.status==="running"?d:null),De(d.elapsedMs||0),d.status==="done"&&d.transcript?(N(d.transcript),we(!0),v("\u8F6C\u5199\u5B8C\u6210")):d.status==="error"&&R(d.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[E,v]),(0,e.useEffect)(()=>{if(i.status!=="running")return;let o=!1,t=setInterval(async()=>{let s=f.current?.id;if(s)try{let d=await H(`${g}/episodes/${s}/translate?target=${ke}`);if(o)return;if(k(d),d.status==="done"){let $=await H(`${g}/episodes/${s}/transcript`);!o&&$.transcript&&N($.transcript),v("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[i.status,ke,v]),(0,e.useEffect)(()=>{let o=!1,t=async()=>{try{let d=await H(`${g}/jobs`);o||xo(d.items||[])}catch{}};t();let s=setInterval(t,2500);return()=>{o=!0,clearInterval(s)}},[]);let xe=(0,e.useCallback)((o,t,s,d=!1)=>{if(!o)return;let $=Date.now();!d&&$-No.current<4e3||(No.current=$,P(`${g}/progress/${o}`,"PUT",{position:t,duration:s}).catch(()=>{}),w(D=>({...D,[o]:{position:t,duration:s,updatedAt:$}})))},[]),ge=(0,e.useCallback)(o=>{A(t=>({...t,...o})),P(`${g}/settings`,"PATCH",o).catch(()=>{})},[]),Oe=(0,e.useCallback)(async()=>{if(f.current){R(""),we(!0);try{let o=await P(`${g}/episodes/${f.current.id}/transcribe`,"POST",{});W(o.status||"queued")}catch(o){R(o.message)}}},[]),Ho=(0,e.useCallback)(()=>{if(y){we(o=>!o);return}if(E==="queued"||E==="running"){we(!0);return}Oe()},[y,E,Oe]),to=(0,e.useCallback)(async()=>{if(f.current)try{await P(`${g}/episodes/${f.current.id}/transcribe/cancel`,"POST",{}),v("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(o){R(o.message)}},[v]),ro=(0,e.useCallback)(async(o,t)=>{try{t==="cancel"?await P(`${g}/episodes/${o.episodeId}/transcribe/cancel`,"POST",{}):t==="retry"?await P(`${g}/episodes/${o.episodeId}/transcribe`,"POST",{resume:!0}):t==="clear"&&await P(`${g}/jobs`,"DELETE",{key:o.key})}catch{}let s=await H(`${g}/jobs`).catch(()=>({items:[]}));xo(s.items||[])},[]),Ze=(0,e.useCallback)(async o=>{let t=[...new Set(o)];if(t.length)try{let s=await P(`${g}/transcribe/batch`,"POST",{ids:t});v(`\u5DF2\u6392\u961F ${s.queued} \u96C6${s.skipped?`\uFF0C\u8DF3\u8FC7 ${s.skipped} \u96C6`:""}${s.errors?.length?`\uFF0C\u5931\u8D25 ${s.errors.length} \u96C6`:""}`),ze([]),eo(!1)}catch(s){v(s.message)}},[v]),Jo=(0,e.useCallback)(o=>{ze(t=>t.includes(o)?t.filter(s=>s!==o):[...t,o])},[]),ve=(0,e.useCallback)(async(o,t,s)=>{try{let d=await P(`${g}${o}`,t,s||{});return d?.transcript&&N(d.transcript),d}catch(d){return v(d.message),null}},[v]),zo=(0,e.useCallback)(o=>{Le(o.id),oo(o.text),ko([])},[]),To=(0,e.useCallback)(async o=>{if(!y)return;await ve(`/episodes/${y.id}/transcript/lines/${o??Te}`,"PUT",{text:Ve})&&(Le(null),v("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[y,Te,Ve,ve,v]),Mo=(0,e.useCallback)(async(o,t)=>{if(!y)return;await ve(`/episodes/${y.id}/transcript/lines/${o??Te}/split`,"POST",{offset:t})&&(Le(null),v("\u5DF2\u62C6\u6210\u4E24\u884C"))},[y,Te,ve,v]),So=(0,e.useCallback)(async o=>{if(!y)return;await ve(`/episodes/${y.id}/transcript/lines/${o}/merge`,"POST",{})&&v("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[y,ve,v]),Po=(0,e.useCallback)(async()=>{if(!y)return;await ve(`/episodes/${y.id}/transcript/undo`,"POST",{})&&v("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[y,ve,v]),Eo=(0,e.useCallback)(async()=>{if(y)try{let o=await H(`${g}/episodes/${y.id}/transcript/validate`);ko(o.issues||[]),v(o.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(o.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(o){v(o.message)}},[y,v]),Qe=(0,e.useCallback)(async()=>{let o=f.current?.id;if(!o)return;let t=await H(`${g}/episodes/${o}/transcript`);t.transcript&&N(t.transcript)},[]),Do=(0,e.useCallback)(async o=>{if(f.current?.id){k({status:"running"});try{let t=await P(`${g}/episodes/${f.current.id}/translate`,"POST",{target:o});k(t),t.status==="done"&&(await Qe(),v("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){k({status:"error",error:t.message})}}},[Qe,v]),Io=(0,e.useCallback)(async o=>{if(He(o),!o)return;if(y?.lines?.some(s=>s.translations?.[o])){k({status:"done"}),await Qe();return}await Do(o)},[y,Do,Qe]),Vo=o=>{let t=!o.favorite;l(s=>s.map(d=>d.id===o.id?{...d,favorite:t}:d)),P(`${g}/episodes/${o.id}/favorite`,"PUT",{favorite:t}).catch(s=>v(s.message))},jo=async o=>{if(o.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${o.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let t of o)try{await fetch(`${g}/episodes/${t}`,{method:"DELETE"})}catch{}l(t=>t.filter(s=>!o.includes(s.id))),ze([]),o.includes(Y)&&O(null),v(`\u5DF2\u79FB\u9664 ${o.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},F=(0,e.useMemo)(()=>{let o=[...r];return b==="title"?o.sort((t,s)=>t.title.localeCompare(s.title,"zh-Hans-CN")):b==="duration"?o.sort((t,s)=>(s.duration||0)-(t.duration||0)):o.sort((t,s)=>s.mtime-t.mtime),o},[r,b]),le=(0,e.useMemo)(()=>{let o=S.trim().toLowerCase();return F.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let d=u[t.id]?.position||0,$=t.duration||0,D=$?d/$:0;return m==="inprogress"?d>5&&D<.97:m==="finished"?D>=.97:X==="unheard"?d<=5:X==="transcribed"?!!t.hasTranscript:X==="favorites"?!!t.favorite:!0})},[F,S,m,X,u]),Lo=(0,e.useMemo)(()=>Je.filter(o=>o.status==="queued"||o.status==="running"),[Je]),Me=(0,e.useMemo)(()=>le.filter(o=>!o.hasTranscript),[le]),no=(0,e.useMemo)(()=>r.filter(o=>{let t=u[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(u[t.id]?.updatedAt||0)-(u[o.id]?.updatedAt||0)).slice(0,4),[r,u]),Zo=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),Qo=Math.round(Zo/3600*10)/10,Wo=m==="inprogress"?"\u7EE7\u7EED\u6536\u542C":m==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",M=Y?r.find(o=>o.id===Y)||(x?.id===Y?x:null):null,Xo=G?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":h.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${le.length} \u96C6 \xB7 \u5171 ${Qo} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,St=(0,e.useMemo)(()=>x?F.findIndex(o=>o.id===x.id):-1,[F,x]),Se=(0,e.useCallback)(()=>{let o=B.current;if(o){if(!f.current){let t=le[0]||F[0];t&&qe(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[le,F]),qe=(0,e.useCallback)((o,t=!0)=>{let s=B.current;if(!s||!o)return;if(f.current&&f.current.id===o.id){t&&Se();return}f.current&&!s.ended&&s.currentTime>1&&xe(f.current.id,s.currentTime,s.duration||ce.current,!0),f.current=o,he(o),O(D=>D&&o.id),ae(o.duration||0);let d=u[o.id]?.position||0,$=d>5&&(!o.duration||d<o.duration-10)?d:0;Ae.current=$,Z($),s.src=`${g}/episodes/${o.id}/audio`,s.load(),s.playbackRate=be.current.rate||1,s.volume=be.current.volume??.9,t&&s.play().catch(()=>{}),ge({lastEpisodeId:o.id})},[u,xe,ge,Se]),Ao=(0,e.useCallback)((o,t=!0)=>{o&&(qe(o,t),O(o.id))},[qe]),ao=(0,e.useCallback)(o=>{let t=B.current;if(!t||!f.current)return;let s=Math.max(0,Math.min(o,t.duration||o));t.currentTime=s,Z(s),xe(f.current.id,s,t.duration||ce.current,!0)},[xe]),Be=(0,e.useCallback)(o=>{let t=B.current;if(!t||!f.current)return;let s=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||ce.current||0)-1));t.currentTime=s,Z(s)},[]),so=(0,e.useCallback)(o=>{if(!F.length)return;let s=((f.current?F.findIndex(d=>d.id===f.current.id):-1)+o+F.length)%F.length;qe(F[s],!0)},[F,qe]),Yo=(0,e.useCallback)(()=>{let o=uo.indexOf(be.current.rate),t=uo[(o+1)%uo.length],s=B.current;s&&(s.playbackRate=t),ge({rate:t})},[ge]),We=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),s=B.current;s&&(s.volume=t),ge({volume:t})},[ge]),_o=(0,e.useCallback)(()=>{let o=B.current,t=be.current.volume>0?0:.9;o&&(o.volume=t),ge({volume:t})},[ge]),Go=()=>{let o=B.current;!o||!f.current||(Z(o.currentTime),xe(f.current.id,o.currentTime,o.duration||ce.current))},Ro=()=>{let o=B.current,t=f.current;if(!o||!t)return;let s=Number.isFinite(o.duration)?o.duration:t.duration||0;ae(s);let d=Ae.current;Ae.current=0,d>0&&d<s-1&&(o.currentTime=d,Z(d))},et=()=>{let o=B.current;f.current&&xe(f.current.id,o?.duration||ce.current||0,o?.duration||ce.current||0,!0),so(1)},ot=async o=>{await P(`${g}/folders`,"POST",{path:o}),await ue(),v("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},tt=async()=>{let o=await fetch(`${g}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},rt=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),ho||Re(!0))},nt=o=>{o.currentTarget.contains(o.relatedTarget)||Re(!1)},at=async o=>{o.preventDefault(),Re(!1);let t=o.dataTransfer,s=[...t?.files||[]],d=s.map(z=>z.path).filter(z=>typeof z=="string"&&z),$=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(z=>z.trim()).filter(z=>z.startsWith("file://")).map(z=>decodeURIComponent(z.replace(/^file:\/\//,""))),D=[...new Set([...d,...$])];if(D.length){try{let z=await P(`${g}/import/paths`,"POST",{paths:D});await ue(),v(z.added?`\u5DF2\u6DFB\u52A0 ${z.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(z){p(z.message)}return}let me=s.filter(z=>z.size>0);if(!me.length){v("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let it=`drop-${Date.now()}`,Xe="",po=0;for(let z of me)try{let Oo=await fetch(`${g}/import/upload?name=${encodeURIComponent(z.name)}&batch=${it}`,{method:"POST",body:z}),lt=await Oo.json();Oo.ok&&(Xe=lt.folder||Xe,po+=1)}catch{}if(Xe)try{await P(`${g}/folders`,"POST",{path:Xe})}catch{}await ue(),v(po?`\u5DF2\u5BFC\u5165 ${po} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},st=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await P(`${g}/folders`,"DELETE",{path:o}),await ue(),v("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){p(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let s=t.target?.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),Se()):t.key==="ArrowRight"?(t.preventDefault(),Be(15)):t.key==="ArrowLeft"?(t.preventDefault(),Be(-15)):t.key==="ArrowUp"?(t.preventDefault(),We(be.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),We(be.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Se,Be,We]);let io=o=>{let t=u[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},lo=o=>{let t=u[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${$e?"nav-collapsed":""}`,onDragOver:rt,onDragLeave:nt,onDrop:at},ho?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,$e?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Co},e.default.createElement(I,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(I,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.7"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Co},e.default.createElement(I,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",no.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(io).length]].map(([o,t,s])=>e.default.createElement("button",{key:o,className:`nav-item ${m===o?"active":""}`,onClick:()=>V(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},s||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>Q(!0)},e.default.createElement(I,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(I,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},wt(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>st(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,Wo),e.default.createElement("p",{className:"subline"},Xo)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${wo?"is-on":""}`,onClick:()=>bo(o=>!o),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(I,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Lo.length?` ${Lo.length}`:"")),e.default.createElement("button",{className:`tool-btn ${je?"is-on":""}`,onClick:()=>{eo(o=>!o),ze([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(I,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(I,{name:"search",size:16}),e.default.createElement("input",{value:S,onChange:o=>K(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:b,onChange:o=>U(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),je?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",oe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>ze(le.map(o=>o.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Me.length,onClick:()=>Ze(Me.map(o=>o.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Me.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!oe.length,onClick:()=>Ze(oe)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!oe.length,onClick:()=>jo(oe)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{ze([]),eo(!1)}},"\u53D6\u6D88")):null,j?e.default.createElement("div",{className:"banner error",onClick:()=>p("")},j," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,M?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>O(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},M.artist,M.album?` \xB7 ${M.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(Ge,{item:M,size:288})),e.default.createElement("h2",{className:"episode-title"},M.title),e.default.createElement("p",{className:"episode-sub"},M.artist,M.album?` \xB7 ${M.album}`:""),e.default.createElement("p",{className:"episode-path",title:M.file},M.location||M.file),e.default.createElement("p",{className:"episode-stats"},Bo(M.duration)," \xB7 ",Ko(M.mtime)," \xB7 \u5DF2\u542C ",Math.round(lo(M)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Se},re&&x?.id===M.id?"\u6682\u505C":"\u64AD\u653E"),E==="queued"||E==="running"?e.default.createElement("button",{className:"btn ghost",onClick:to},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:Oe},y?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>jo([M.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(Uo,{inline:!0,transcript:y,status:E,progress:pe?.progress,stage:pe?.stage,chunks:pe?.chunks,queued:pe?.queued,elapsed:Ke,editingId:Te,draft:Ve,onDraftChange:oo,onEditLine:zo,onSaveLine:To,onCancelEdit:()=>Le(null),onSplitLine:Mo,onMergeLine:So,onUndo:Po,onValidate:Eo,issues:yo,onCancel:to,error:ye,position:_,onSeek:ao,onClose:()=>O(null),onStart:Oe,target:ke,job:i,onChangeTarget:Io,onOpenSettings:()=>Ne(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([o,t])=>e.default.createElement("button",{key:o,className:`chip ${X===o?"is-on":""}`,onClick:()=>de(o)},t))),m==="all"&&!S&&no.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},no.map(o=>{let t=lo(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${x?.id===o.id?"is-current":""}`,onClick:()=>Ao(o,!0)},e.default.createElement(Ge,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),G?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):le.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>Q(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},le.map((o,t)=>{let s=lo(o),d=x?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${d?"is-current":""} ${io(o)?"is-finished":""} ${je&&oe.includes(o.id)?"is-selected":""}`,onClick:()=>je?Jo(o.id):Ao(o,!0)},e.default.createElement("span",{className:"col-index row-index"},je?oe.includes(o.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(I,{name:"check",size:14})):null:d&&re?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(Ge,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",Ko(o.mtime),o.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},Bo(o.duration)),e.default.createElement("span",{className:`row-star ${o.favorite?"is-on":""}`,role:"button",title:o.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:$=>{$.stopPropagation(),Vo(o)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},io(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(I,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):s>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${s}%`}})):null))}))))),Ie&&x&&!M?e.default.createElement(Uo,{transcript:y,status:E,progress:pe?.progress,stage:pe?.stage,chunks:pe?.chunks,queued:pe?.queued,elapsed:Ke,editingId:Te,draft:Ve,onDraftChange:oo,onEditLine:zo,onSaveLine:To,onCancelEdit:()=>Le(null),onSplitLine:Mo,onMergeLine:So,onUndo:Po,onValidate:Eo,issues:yo,onCancel:to,error:ye,position:_,onSeek:ao,onClose:()=>we(!1),onStart:Oe,target:ke,job:i,onChangeTarget:Io,onOpenSettings:()=>Ne(!0)}):null,wo?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>bo(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Je.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Je.map(o=>e.default.createElement("div",{key:o.key,className:`job-row job-${o.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},o.episodeTitle||o.episodeId),e.default.createElement("span",{className:"job-meta"},bt(o)),o.status==="running"&&o.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${o.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},o.status==="queued"||o.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>ro(o,"cancel")},"\u53D6\u6D88"):null,o.status==="error"||o.status==="interrupted"||o.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>ro(o,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(o.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>ro(o,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Me.length,onClick:()=>Ze(Me.map(o=>o.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Me.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!oe.length,onClick:()=>Ze(oe)},"\u8F6C\u5199\u5DF2\u9009 ",oe.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${q?Math.min(100,Math.max(0,_/q*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:q||0,step:.05,value:Math.min(_,q||0),onChange:o=>ao(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},x?e.default.createElement(e.default.Fragment,null,e.default.createElement(Ge,{item:x,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:x.title},x.title),e.default.createElement("div",{className:"now-artist"},x.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>so(-1)},e.default.createElement(I,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Be(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Se,disabled:!x&&le.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(I,{name:re?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Be(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>so(1)},e.default.createElement(I,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Ie?"active":""}`,onClick:Ho,disabled:!x,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(I,{name:"wave",size:15}),e.default.createElement("span",null,y?"\u5B57\u5E55":E==="queued"||E==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},go(_)," / ",go(q)),e.default.createElement("button",{className:"rate-btn",onClick:Yo,title:"\u64AD\u653E\u901F\u5EA6"},C.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:_o,title:"\u9759\u97F3"},e.default.createElement(I,{name:C.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:C.volume,onChange:o=>We(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),fe?e.default.createElement(xt,{onClose:()=>Q(!1),onSubmit:ot,onPick:tt}):null,ee?e.default.createElement(yt,{config:Ue,onClose:()=>Ne(!1),onSave:async o=>{let t=await P(`${g}/translate/settings`,"PUT",o);Fe(t),Ne(!1),v("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,ie?e.default.createElement("div",{className:"toast"},ie):null,e.default.createElement("audio",{ref:B,preload:"metadata",onPlay:()=>ne(!0),onPause:()=>{ne(!1);let o=B.current;f.current&&o&&o.currentTime>0&&!o.ended&&xe(f.current.id,o.currentTime,o.duration||ce.current,!0)},onTimeUpdate:Go,onLoadedMetadata:Ro,onEnded:et,onError:()=>{ne(!1),v("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=co(require("react"),1);var J="/podwave/api";async function Pe(r){let l=await fetch(r),a=await l.json().catch(()=>({}));if(!l.ok)throw new Error(a.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return a}async function Ee(r,l,a){let c=await fetch(r,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(a??{})}),u=await c.json().catch(()=>({}));if(!c.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return u}function kt(r){let l=Math.max(0,Math.round(Number(r)||0)),a=Math.floor(l/3600),c=Math.floor(l%3600/60);return a>0?`${a} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Nt(r){if(!r)return"";let l=new Date(r),a=c=>String(c).padStart(2,"0");return`${l.getFullYear()}-${a(l.getMonth()+1)}-${a(l.getDate())} ${a(l.getHours())}:${a(l.getMinutes())}`}function mo(){let[r,l]=(0,n.useState)([]),[a,c]=(0,n.useState)([]),[u,w]=(0,n.useState)({asrModel:"",translateModel:""}),[h,L]=(0,n.useState)(null),[C,A]=(0,n.useState)(null),[S,K]=(0,n.useState)({showSidebarPanel:!0}),[b,U]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[m,V]=(0,n.useState)(""),[X,de]=(0,n.useState)(15),[Y,O]=(0,n.useState)(!0),[x,he]=(0,n.useState)("api"),[re,ne]=(0,n.useState)("https://api.deepseek.com"),[_,Z]=(0,n.useState)("deepseek-chat"),[q,ae]=(0,n.useState)(""),[G,se]=(0,n.useState)(""),[fe,Q]=(0,n.useState)(""),[j,p]=(0,n.useState)(""),[ie,T]=(0,n.useState)(""),[y,N]=(0,n.useState)(""),E=(0,n.useCallback)(async()=>{try{let[i,k,ee,Ne,$e,Ce]=await Promise.all([Pe(`${J}/history`),Pe(`${J}/models`),Pe(`${J}/translate/settings`),Pe(`${J}/ui-settings`),Pe(`${J}/transcribe/settings`),Pe(`${J}/import/settings`)]);U({mode:Ce.mode||"copy",orphans:Ce.orphans||0,orphanBytes:Ce.orphanBytes||0}),K({showSidebarPanel:Ne?.showSidebarPanel!==!1}),V(($e.hotwords||[]).join(" ")),de($e.chunkMinutes||15),O($e.diarize!==!1),l(i.items||[]),c(k.models||[]),w(k.config||{asrModel:"",translateModel:""}),L(k.transcribe||null),se(k.config?.asrModel||""),Q(k.config?.translateModel||""),A(ee),he(ee.provider||"api"),ne(ee.apiBase||"https://api.deepseek.com"),Z(ee.apiModel||"deepseek-chat"),ae(""),N("")}catch(i){N(i.message)}},[]);(0,n.useEffect)(()=>{E()},[E]);let W=i=>{T(i),window.setTimeout(()=>T(""),2400)},Ke=async()=>{p("api"),N("");try{let i={provider:x,apiBase:re,apiModel:_};q.trim()&&(i.apiKey=q.trim());let k=await Ee(`${J}/translate/settings`,"PUT",i);A(k),ae(""),W("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){N(i.message)}finally{p("")}},De=async()=>{p("models"),N("");try{let i=await Ee(`${J}/models`,"PUT",{asrModel:G,translateModel:fe});w(i.config),c(i.models||[]),L(i.transcribe||null),W("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(i){N(i.message)}finally{p("")}},ye=a.length?a:[{name:u.asrModel||"qwen3-asr-1.7b-8bit",ready:h?.modelReady},{name:u.translateModel||"qwen3-8b-4bit",ready:C?.localReady}],R=ye.filter(i=>/asr/i.test(i.name)),Ie=ye.filter(i=>!/asr/i.test(i.name)),we=async()=>{p("ui"),N("");try{let i=await Ee(`${J}/ui-settings`,"PUT",{showSidebarPanel:S.showSidebarPanel});K({showSidebarPanel:i.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:i})),W("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){N(i.message)}finally{p("")}},Ue=async i=>{p("import"),N("");try{let k=await Ee(`${J}/import/settings`,"PUT",{mode:i});U(ee=>({...ee,mode:k.mode})),W("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(k){N(k.message)}finally{p("")}},Fe=async()=>{if(b.orphans&&window.confirm(`\u6E05\u7406 ${b.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){p("imports"),N("");try{let i=await Ee(`${J}/imports/orphans`,"DELETE",{});U(k=>({...k,orphans:0,orphanBytes:0})),W(`\u5DF2\u6E05\u7406 ${i.removed||0} \u4E2A\u6279\u6B21`)}catch(i){N(i.message)}finally{p("")}}},ke=async()=>{p("transcribe"),N("");try{let i=m.split(/[\s,，、]+/).map(ee=>ee.trim()).filter(Boolean).slice(0,500),k=await Ee(`${J}/transcribe/settings`,"PUT",{hotwords:i,chunkMinutes:Math.min(60,Math.max(1,Number(X)||15)),diarize:Y});V((k.hotwords||[]).join(" ")),de(k.chunkMinutes||15),O(k.diarize!==!1),W("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){N(i.message)}finally{p("")}},He=ye;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,_e),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),y?n.default.createElement("div",{className:"banner error",onClick:()=>N("")},y):null,ie?n.default.createElement("div",{className:"settings-message"},ie):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(i=>n.default.createElement("li",{key:i.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},i.title),n.default.createElement("span",{className:"history-meta"},i.artist?`${i.artist} \xB7 `:"",i.duration?`${kt(i.duration)} \xB7 `:"",i.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",i.lines," \u884C",i.translations?.length?` \xB7 \u5DF2\u7FFB ${i.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Nt(i.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:m,onChange:i=>V(i.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:X,onChange:i=>de(i.target.value)})),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:Y,onChange:i=>O(i.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:ke,disabled:j==="transcribe"},j==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:b.mode==="copy",onChange:()=>Ue("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:b.mode==="reference",onChange:()=>Ue("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Fe,disabled:j==="imports"||!b.orphans},b.orphans?`\u6E05\u7406 ${b.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(b.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:x,onChange:i=>he(i.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:re,onChange:i=>ne(i.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:_,onChange:i=>Z(i.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:q,onChange:i=>ae(i.target.value),placeholder:C?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${C.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ke,disabled:j==="api"},j==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},C?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:S.showSidebarPanel,onChange:i=>K({showSidebarPanel:i.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:we,disabled:j==="ui"},j==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:G,onChange:i=>se(i.target.value)},(R.length?R:He).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},h?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:fe,onChange:i=>Q(i.target.value)},(Ie.length?Ie:He).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},C?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:De,disabled:j==="models"},j==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function $t({size:r=16}){return te.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},te.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),te.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),te.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),te.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),te.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Ct(){return te.default.createElement("div",{className:"podwave-root"},te.default.createElement("style",null,_e),te.default.createElement(vo,null))}function zt(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Ct)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},mo));let l=null,a="podwave-hide-nav",c=w=>{if(typeof document>"u")return;let h=document.getElementById(a);w&&!h?(h=document.createElement("style"),h.id=a,h.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(h)):!w&&h&&h.remove()},u=w=>{if(c(!w),w&&!l)l=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},$t);else if(!w&&l){let h=l;l=null;try{typeof h?.dispose=="function"?h.dispose():typeof h=="function"?h():typeof h?.dispose>"u"&&typeof h?.unregister=="function"&&h.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(w=>w.ok?w.json():null).then(w=>u(w?.showSidebarPanel!==!1)).catch(()=>u(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",w=>{u(w?.detail?.showSidebarPanel!==!1)})}var Tt=["slots"];

return module.exports}})
