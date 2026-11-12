window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ft=Object.create;var oo=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var wt=Object.getPrototypeOf,bt=Object.prototype.hasOwnProperty;var yt=(r,l)=>{for(var a in l)oo(r,a,{get:l[a],enumerable:!0})},Jo=(r,l,a,c)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of xt(l))!bt.call(r,u)&&u!==a&&oo(r,u,{get:()=>l[u],enumerable:!(c=ht(l,u))||c.enumerable});return r};var Ie=(r,l,a)=>(a=r!=null?ft(wt(r)):{},Jo(l||!r||!r.__esModule?oo(a,"default",{value:r,enumerable:!0}):a,r)),kt=r=>Jo(oo({},"__esModule",{value:!0}),r);var Dt={};yt(Dt,{apply:()=>Et,inject:()=>It});module.exports=kt(Dt);var ne=Ie(require("react"),1);var to=`.podwave-root {
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
`;var e=Ie(require("react"),1);var v=Ie(require("react"),1);function I({name:r,size:l=18}){let a={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"play":return v.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return v.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},v.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),v.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return v.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),v.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return v.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},v.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),v.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return v.default.createElement("svg",{...a},v.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),v.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),v.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),v.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return v.default.createElement("svg",{...a,fill:"currentColor",stroke:"none"},v.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),v.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),v.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),v.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),v.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return v.default.createElement("svg",{...a},v.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));default:return null}}var xo=Ie(require("react"),1);function Je(r){if(!Number.isFinite(r)||r<0)return"0:00";let l=Math.floor(r),a=Math.floor(l/3600),c=Math.floor(l%3600/60),u=l%60;return a>0?`${a}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`:`${c}:${String(u).padStart(2,"0")}`}function fo(r){if(!r)return"\u2014";let l=Math.floor(r/3600),a=Math.round(r%3600/60);return l>0?`${l} \u5C0F\u65F6 ${a} \u5206`:`${Math.max(1,a)} \u5206\u949F`}function ho(r){if(!r)return"";let l=new Date(r),a=Date.now()-r;return a<60*1e3?"\u521A\u521A":a<3600*1e3?`${Math.floor(a/6e4)} \u5206\u949F\u524D`:a<1440*60*1e3?`${Math.floor(a/36e5)} \u5C0F\u65F6\u524D`:a<10080*60*1e3?`${Math.floor(a/864e5)} \u5929\u524D`:`${l.getMonth()+1} \u6708 ${l.getDate()} \u65E5`}function Vo(r){let a=String(r||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return a?a[0].toUpperCase():"\u266B"}function Zo(r){let l=String(r).split("/").filter(Boolean);return l.length<=2?`/${l.join("/")}`:`${l.slice(-2).join("/")}`}var $t="/podwave/api";function De({item:r,size:l=44,className:a=""}){let c={width:l,height:l};return r&&r.hasCover?xo.default.createElement("img",{className:`cover ${a}`,style:c,src:`${$t}/episodes/${r.id}/cover`,alt:"",loading:"lazy",draggable:!1}):xo.default.createElement("div",{className:`cover cover-fallback ${a}`,style:c,"aria-hidden":!0},Vo(r&&r.title))}var d=Ie(require("react"),1);var Qo="/podwave/api";function ro({transcript:r,status:l,progress:a,stage:c,chunks:u,queued:y,elapsed:x,error:O,position:T,onSeek:q,onClose:E,onStart:F,onCancel:w,target:H,job:h,onChangeTarget:Q,onOpenSettings:_,inline:ce=!1,editingId:G=null,draft:B="",onDraftChange:k,onEditLine:xe,onSaveLine:ae,onCancelEdit:se,onSplitLine:R,onMergeLine:W,onUndo:K,onValidate:ie,issues:ee=[]}){let le=(0,d.useRef)(null),we=(0,d.useRef)(null),X=r?.lines?.findIndex(g=>T>=g.start&&T<g.end)??-1;(0,d.useEffect)(()=>{if(X<0||!le.current)return;le.current.querySelector(`[data-seg="${X}"]`)?.scrollIntoView({block:"nearest"})},[X]);let j=l==="queued"||l==="running";return d.default.createElement("section",{className:`transcript-panel ${ce?"inline":""}`},d.default.createElement("header",{className:"transcript-head"},d.default.createElement("h3",null,"\u5B57\u5E55"),r?d.default.createElement("span",{className:"transcript-meta"},r.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",r.lines.length," \u884C",r.speakers?.length?` \xB7 ${r.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,d.default.createElement("div",{className:"transcript-actions"},d.default.createElement("select",{className:"tr-select",value:H,onChange:g=>Q(g.target.value),title:"\u5B57\u5E55\u5BF9\u7167"},d.default.createElement("option",{value:""},"\u5BF9\u7167"),d.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u5BF9\u7167"),d.default.createElement("option",{value:"en"},"English")),d.default.createElement("button",{className:"mini-link",onClick:_},"\u8BBE\u7F6E"),r?d.default.createElement(d.default.Fragment,null,d.default.createElement("button",{className:"mini-link",onClick:K,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\u7F16\u8F91"},"\u64A4\u9500"),d.default.createElement("button",{className:"mini-link",onClick:ie,title:"\u5BFC\u51FA\u524D\u68C0\u67E5\u5B57\u5E55"},"\u6821\u9A8C"),d.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${r.id}/transcript/export?format=srt`,download:!0},"SRT"),d.default.createElement("a",{className:"mini-link",href:`${Qo}/episodes/${r.id}/transcript/export?format=md`,download:!0},"Markdown")):null,ce?null:d.default.createElement("button",{className:"transcript-close",onClick:E,title:"\u6536\u8D77"},"\xD7"))),d.default.createElement("div",{className:"transcript-body",ref:le},r&&j?d.default.createElement("div",{className:"tr-strip"},d.default.createElement("span",null,l==="queued"?"\u6392\u961F\u4E2D\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":c==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",a?.percent!=null?` ${a.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min((u.done||0)+1,u.total)}/${u.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${r.lines.length} \u884C`),w?d.default.createElement("button",{className:"seg-tool",onClick:w},"\u53D6\u6D88"):null):null,r&&ee?.length?d.default.createElement("div",{className:"tr-issues"},ee.slice(0,5).map(g=>d.default.createElement("div",{key:g},"\xB7 ",g)),ee.length>5?d.default.createElement("div",null,"\u2026\u5171 ",ee.length," \u6761"):null):null,h?.status==="running"?d.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026"):null,h?.status==="error"?d.default.createElement("div",{className:"tr-running err"},h.error):null,r?r.lines.map((g,de)=>d.default.createElement("div",{key:g.id,"data-seg":de,className:`seg-row ${de===X?"active":""} ${G===g.id?"is-editing":""}`,onClick:()=>q(g.start)},d.default.createElement("span",{className:"seg-time"},Je(g.start)),G===g.id?d.default.createElement("span",{className:"seg-edit",onClick:S=>S.stopPropagation()},d.default.createElement("textarea",{ref:we,value:B,rows:Math.min(4,Math.max(2,Math.ceil((B.length||1)/40))),onChange:S=>k(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&ae(g.id),S.key==="Escape"&&se()}}),d.default.createElement("span",{className:"seg-edit-actions"},d.default.createElement("button",{className:"seg-tool",onClick:()=>ae(g.id)},"\u4FDD\u5B58"),d.default.createElement("button",{className:"seg-tool",onClick:()=>R(g.id,we.current?.selectionStart??Math.floor(B.length/2))},"\u62C6\u5206"),d.default.createElement("button",{className:"seg-tool",onClick:se},"\u53D6\u6D88"))):d.default.createElement(d.default.Fragment,null,g.speaker!=null?d.default.createElement("span",{className:`seg-speaker spk-${g.speaker%5}`},r.speakers?.[g.speaker]?.label||`\u8BF4\u8BDD\u4EBA ${g.speaker+1}`):null,d.default.createElement("span",{className:"seg-text"},g.text,g.translations?.[H]?d.default.createElement("span",{className:"seg-trans"},g.translations[H]):null),d.default.createElement("span",{className:"seg-tools"},d.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:S=>{S.stopPropagation(),xe(g)}},"\u270E"),de<r.lines.length-1?d.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:S=>{S.stopPropagation(),W(g.id)}},"\u21E3"):null)))):j?d.default.createElement("div",{className:"transcript-status"},l==="queued"?"\u6392\u961F\u4E2D\u2026":c==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":c==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",a?.percent!=null?` ${a.percent}%`:"",u?.total?` \xB7 \u7B2C ${Math.min(u.done+1,u.total)}/${u.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((x||0)/1e3)+" \u79D2",a?.percent!=null?d.default.createElement("span",{className:"tx-progress"},d.default.createElement("span",{style:{width:`${a.percent}%`}})):null,d.default.createElement("br",null),d.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),d.default.createElement("br",null),w?d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:w},"\u53D6\u6D88\u8F6C\u5199"):null):O?d.default.createElement("div",{className:"transcript-status"},d.default.createElement("span",{className:"err"},O),d.default.createElement("br",null),d.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:F},"\u91CD\u8BD5")):d.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",d.default.createElement("br",null),d.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:F},"\u5F00\u59CB\u8F6C\u5199"))))}function Wo(r){let l=r.progress?.percent,a=r.chunks?.total?` \xB7 ${r.chunks.done}/${r.chunks.total} \u5757`:"";return r.status==="done"?`\u5B8C\u6210${r.lineCount?` \xB7 ${r.lineCount} \u884C`:""}${r.language?` \xB7 ${r.language}`:""}`:r.status==="error"||r.status==="interrupted"?r.error||"\u5931\u8D25":r.status==="cancelled"?r.error||"\u5DF2\u53D6\u6D88":r.status==="queued"?"\u6392\u961F\u4E2D":`${r.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":r.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":r.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${l!=null?` ${l}%`:""}${a}`}var m="/podwave/api",wo=[.75,1,1.25,1.5,1.75,2];async function V(r){let l=await fetch(r);if(!l.ok){let a=await l.json().catch(()=>({}));throw new Error(a.error||l.statusText)}return l.json()}async function D(r,l,a){let c=await fetch(r,{method:l,headers:a?{"Content-Type":"application/json"}:void 0,body:a?JSON.stringify(a):void 0});if(!c.ok){let u=await c.json().catch(()=>({}));throw new Error(u.error||c.statusText)}return c.json()}function Ct({onSubmit:r,onPick:l,onClose:a}){let[c,u]=(0,e.useState)(""),[y,x]=(0,e.useState)(!1),[O,T]=(0,e.useState)(!1),[q,E]=(0,e.useState)(""),F=(0,e.useRef)(null);return(0,e.useEffect)(()=>{F.current?.focus();let h=Q=>{Q.key==="Escape"&&a()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[a]),e.default.createElement("div",{className:"overlay",onMouseDown:h=>{h.target===h.currentTarget&&a()}},e.default.createElement("form",{className:"dialog",onSubmit:async h=>{if(h.preventDefault(),!(!c.trim()||y)){x(!0),E("");try{await r(c.trim()),a()}catch(Q){E(Q.message),x(!1)}}}},e.default.createElement("h2",null,"\u6DFB\u52A0\u6587\u4EF6\u5939"),e.default.createElement("p",{className:"dialog-hint"},"Podwave \u53EA\u8BFB\u53D6\u97F3\u9891\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u4FEE\u6539\u5B83\u4EEC\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u97F3\u9891\u6587\u4EF6\u62D6\u8FDB\u9762\u677F\u3002"),e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:a},"\u53D6\u6D88"),e.default.createElement("button",{type:"button",className:"btn primary",onClick:async()=>{if(!O){T(!0),E("");try{let h=await l();if(h?.canceled)return;if(h?.error)throw new Error(h.error);h?.path&&(await r(h.path),a())}catch(h){E(h.message)}finally{T(!1)}}},disabled:O,autoFocus:!0},O?"\u6253\u5F00\u9009\u62E9\u5668\u2026":"\u9009\u62E9\u6587\u4EF6\u5939\u2026")),e.default.createElement("div",{className:"path-row"},e.default.createElement("input",{ref:F,value:c,onChange:h=>u(h.target.value),placeholder:"\u6216\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/\u64AD\u5BA2",spellCheck:!1}),e.default.createElement("button",{type:"submit",className:"btn ghost",disabled:y||!c.trim()},y?"\u8BFB\u53D6\u4E2D\u2026":"\u6DFB\u52A0")),q?e.default.createElement("div",{className:"dialog-error"},q):null))}function zt({config:r,onClose:l,onSave:a}){let[c,u]=(0,e.useState)(r?.provider||"api"),[y,x]=(0,e.useState)(""),[O,T]=(0,e.useState)(!1),[q,E]=(0,e.useState)("");return e.default.createElement("div",{className:"overlay",onMouseDown:w=>{w.target===w.currentTarget&&l()}},e.default.createElement("form",{className:"dialog",onSubmit:async w=>{w.preventDefault(),T(!0),E("");try{await a({provider:c,apiKey:y||void 0})}catch(H){E(H.message),T(!1)}}},e.default.createElement("h2",null,"\u7FFB\u8BD1\u8BBE\u7F6E"),e.default.createElement("p",{className:"dialog-hint"},"\u76EE\u6807\u8BED\u8A00\u5728\u5B57\u5E55\u9762\u677F\u91CC\u9009\u3002API \u8D70 DeepSeek\uFF0C\u672C\u5730\u6A21\u578B\u662F ",r?.localModel||"Qwen3-8B-4bit","\u3002"),e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),e.default.createElement("select",{value:c,onChange:w=>u(w.target.value)},e.default.createElement("option",{value:"api"},"DeepSeek API"),e.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),c==="api"?e.default.createElement("label",{className:"field"},e.default.createElement("span",null,"API Key"),e.default.createElement("input",{type:"password",value:y,onChange:w=>x(w.target.value),placeholder:r?.apiKeyMasked||"sk-...",spellCheck:!1})):e.default.createElement("p",{className:"dialog-hint"},r?.localReady?"\u672C\u5730\u6A21\u578B\u5DF2\u5C31\u7EEA\u3002":"\u672C\u5730\u6A21\u578B\u8FD8\u5728\u4E0B\u8F7D\u6216\u672A\u5B89\u88C5\uFF0C\u5B8C\u6210\u540E\u53EF\u7528\u3002"),q?e.default.createElement("div",{className:"dialog-error"},q):null,e.default.createElement("div",{className:"dialog-actions"},e.default.createElement("button",{type:"button",className:"btn ghost",onClick:l},"\u53D6\u6D88"),e.default.createElement("button",{type:"submit",className:"btn primary",disabled:O},"\u4FDD\u5B58"))))}function bo(){let[r,l]=(0,e.useState)([]),[a,c]=(0,e.useState)([]),[u,y]=(0,e.useState)({}),[x,O]=(0,e.useState)({running:!1}),[T,q]=(0,e.useState)({rate:1,volume:.9,lastEpisodeId:null}),[E,F]=(0,e.useState)(""),[w,H]=(0,e.useState)("recent"),[h,Q]=(0,e.useState)("all"),[_,ce]=(0,e.useState)("all"),[G,B]=(0,e.useState)(null),[k,xe]=(0,e.useState)(null),[ae,se]=(0,e.useState)(!1),[R,W]=(0,e.useState)(0),[K,ie]=(0,e.useState)(0),[ee,le]=(0,e.useState)(!0),[we,X]=(0,e.useState)(!1),[j,g]=(0,e.useState)(""),[de,S]=(0,e.useState)(""),[N,$]=(0,e.useState)(null),[L,Y]=(0,e.useState)("none"),[Ve,Ae]=(0,e.useState)(0),[Ne,oe]=(0,e.useState)(""),[Oe,be]=(0,e.useState)(!1),[Ze,Qe]=(0,e.useState)(null),[$e,We]=(0,e.useState)(""),[i,C]=(0,e.useState)({status:"none"}),[te,Ce]=(0,e.useState)(!1),[ze,Te]=(0,e.useState)(!1),[ko,no]=(0,e.useState)(!1),[ue,No]=(0,e.useState)(null),[$o,Co]=(0,e.useState)(!1),[Xe,zo]=(0,e.useState)([]),[qe,ao]=(0,e.useState)(!1),[re,Me]=(0,e.useState)([]),[Se,Be]=(0,e.useState)(null),[Ye,so]=(0,e.useState)(""),[To,Mo]=(0,e.useState)([]),U=(0,e.useRef)(null),b=(0,e.useRef)(null),ge=(0,e.useRef)(0),ye=(0,e.useRef)(T),Ke=(0,e.useRef)(0),So=(0,e.useRef)(0),Po=(0,e.useRef)(0),Xo=(0,e.useRef)(!1);(0,e.useEffect)(()=>{ye.current=T},[T]),(0,e.useEffect)(()=>{b.current=k},[k]),(0,e.useEffect)(()=>{ge.current=K},[K]),(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await V(`${m}/ui-settings`);!o&&t&&Te(!!t.sidebarCollapsed)}catch{}})(),()=>{o=!0}},[]);let Eo=(0,e.useCallback)(()=>{Te(o=>{let t=!o;return fetch(`${m}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:t})}).catch(()=>{}),t})},[]),f=(0,e.useCallback)(o=>{S(o),window.clearTimeout(Po.current),Po.current=window.setTimeout(()=>S(""),2600)},[]),ve=(0,e.useCallback)(async()=>{let o=await V(`${m}/episodes`);return l(o.items||[]),c(o.folders||[]),y(o.progress||{}),O(o.scan||{running:!1}),o},[]);(0,e.useEffect)(()=>{let o=!1;return(async()=>{try{let t=await V(`${m}/state`);if(o)return;q(t.settings),c(t.folders||[]);let s=await ve();if(o)return;let p=t.settings?.lastEpisodeId,z=p?(s.items||[]).find(A=>A.id===p):null;if(z){xe(z),ie(z.duration||0);let A=s.progress?.[z.id]?.position||0;Ke.current=A>5?A:0,W(Ke.current);let he=U.current;he&&(he.src=`${m}/episodes/${z.id}/audio`,he.load(),he.playbackRate=t.settings?.rate||1,he.volume=t.settings?.volume??.9)}le(!1),Xo.current=!0}catch(t){o||(g(t.message),le(!1))}})(),()=>{o=!0}},[ve]),(0,e.useEffect)(()=>{if(!x.running)return;let o=setInterval(()=>{ve().catch(()=>{})},1500);return()=>clearInterval(o)},[x.running,ve]),(0,e.useEffect)(()=>{let o=!1;return $(null),oe(""),Ae(0),k?.id?((async()=>{try{let t=await V(`${m}/episodes/${k.id}/transcript`);if(o)return;Y(t.status),No(t.status==="queued"||t.status==="running"?t:null),t.status==="done"&&t.transcript?$(t.transcript):t.status==="queued"||t.status==="running"?(Ae(t.elapsedMs||0),t.transcript&&$(t.transcript)):t.status==="error"&&oe(t.error||"\u8F6C\u5199\u5931\u8D25")}catch(t){o||oe(t.message)}})(),()=>{o=!0}):(Y("none"),()=>{o=!0})},[k?.id]),(0,e.useEffect)(()=>{V(`${m}/translate/settings`).then(Qe).catch(()=>{})},[]),(0,e.useEffect)(()=>{if(L!=="queued"&&L!=="running")return;let o=!1,t=setInterval(async()=>{let s=b.current?.id;if(s)try{let p=await V(`${m}/episodes/${s}/transcript`);if(o)return;Y(p.status),No(p.status==="queued"||p.status==="running"?p:null),Ae(p.elapsedMs||0),(p.status==="queued"||p.status==="running")&&p.transcript?$(p.transcript):p.status==="done"&&p.transcript?($(p.transcript),be(!0),f("\u8F6C\u5199\u5B8C\u6210")):p.status==="error"&&oe(p.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[L,f]),(0,e.useEffect)(()=>{if(i.status!=="running")return;let o=!1,t=setInterval(async()=>{let s=b.current?.id;if(s)try{let p=await V(`${m}/episodes/${s}/translate?target=${$e}`);if(o)return;if(C(p),p.status==="done"){let z=await V(`${m}/episodes/${s}/transcript`);!o&&z.transcript&&$(z.transcript),f("\u7FFB\u8BD1\u5B8C\u6210")}}catch{}},2e3);return()=>{o=!0,clearInterval(t)}},[i.status,$e,f]),(0,e.useEffect)(()=>{let o=!1,t=async()=>{try{let p=await V(`${m}/jobs`);o||zo(p.items||[])}catch{}};t();let s=setInterval(t,2500);return()=>{o=!0,clearInterval(s)}},[]);let ke=(0,e.useCallback)((o,t,s,p=!1)=>{if(!o)return;let z=Date.now();!p&&z-So.current<4e3||(So.current=z,D(`${m}/progress/${o}`,"PUT",{position:t,duration:s}).catch(()=>{}),y(A=>({...A,[o]:{position:t,duration:s,updatedAt:z}})))},[]),me=(0,e.useCallback)(o=>{q(t=>({...t,...o})),D(`${m}/settings`,"PATCH",o).catch(()=>{})},[]),Ue=(0,e.useCallback)(async()=>{if(b.current){oe(""),be(!0);try{let o=await D(`${m}/episodes/${b.current.id}/transcribe`,"POST",{});Y(o.status||"queued")}catch(o){oe(o.message)}}},[]),Yo=(0,e.useCallback)(()=>{if(N){be(o=>!o);return}if(L==="queued"||L==="running"){be(!0);return}Ue()},[N,L,Ue]),io=(0,e.useCallback)(async()=>{if(b.current)try{await D(`${m}/episodes/${b.current.id}/transcribe/cancel`,"POST",{}),f("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(o){oe(o.message)}},[f]),lo=(0,e.useCallback)(async(o,t)=>{try{t==="cancel"?await D(`${m}/episodes/${o.episodeId}/transcribe/cancel`,"POST",{}):t==="retry"?await D(`${m}/episodes/${o.episodeId}/transcribe`,"POST",{resume:!0}):t==="clear"&&await D(`${m}/jobs`,"DELETE",{key:o.key})}catch{}let s=await V(`${m}/jobs`).catch(()=>({items:[]}));zo(s.items||[])},[]),_e=(0,e.useCallback)(async o=>{let t=[...new Set(o)];if(t.length)try{let s=await D(`${m}/transcribe/batch`,"POST",{ids:t});f(`\u5DF2\u6392\u961F ${s.queued} \u96C6${s.skipped?`\uFF0C\u8DF3\u8FC7 ${s.skipped} \u96C6`:""}${s.errors?.length?`\uFF0C\u5931\u8D25 ${s.errors.length} \u96C6`:""}`),Me([]),ao(!1)}catch(s){f(s.message)}},[f]),_o=(0,e.useCallback)(o=>{Me(t=>t.includes(o)?t.filter(s=>s!==o):[...t,o])},[]),fe=(0,e.useCallback)(async(o,t,s)=>{try{let p=await D(`${m}${o}`,t,s||{});return p?.transcript&&$(p.transcript),p}catch(p){return f(p.message),null}},[f]),Io=(0,e.useCallback)(o=>{Be(o.id),so(o.text),Mo([])},[]),Do=(0,e.useCallback)(async o=>{if(!N)return;await fe(`/episodes/${N.id}/transcript/lines/${o??Se}`,"PUT",{text:Ye})&&(Be(null),f("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[N,Se,Ye,fe,f]),jo=(0,e.useCallback)(async(o,t)=>{if(!N)return;await fe(`/episodes/${N.id}/transcript/lines/${o??Se}/split`,"POST",{offset:t})&&(Be(null),f("\u5DF2\u62C6\u6210\u4E24\u884C"))},[N,Se,fe,f]),Lo=(0,e.useCallback)(async o=>{if(!N)return;await fe(`/episodes/${N.id}/transcript/lines/${o}/merge`,"POST",{})&&f("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[N,fe,f]),Ao=(0,e.useCallback)(async()=>{if(!N)return;await fe(`/episodes/${N.id}/transcript/undo`,"POST",{})&&f("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")},[N,fe,f]),Oo=(0,e.useCallback)(async()=>{if(N)try{let o=await V(`${m}/episodes/${N.id}/transcript/validate`);Mo(o.issues||[]),f(o.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(o.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(o){f(o.message)}},[N,f]),Ge=(0,e.useCallback)(async()=>{let o=b.current?.id;if(!o)return;let t=await V(`${m}/episodes/${o}/transcript`);t.transcript&&$(t.transcript)},[]),qo=(0,e.useCallback)(async o=>{if(b.current?.id){C({status:"running"});try{let t=await D(`${m}/episodes/${b.current.id}/translate`,"POST",{target:o});C(t),t.status==="done"&&(await Ge(),f("\u7FFB\u8BD1\u5B8C\u6210"))}catch(t){C({status:"error",error:t.message})}}},[Ge,f]),Bo=(0,e.useCallback)(async o=>{if(We(o),!o)return;if(N?.lines?.some(s=>s.translations?.[o])){C({status:"done"}),await Ge();return}await qo(o)},[N,qo,Ge]),Go=o=>{let t=!o.favorite;l(s=>s.map(p=>p.id===o.id?{...p,favorite:t}:p)),D(`${m}/episodes/${o.id}/favorite`,"PUT",{favorite:t}).catch(s=>f(s.message))},Ko=async o=>{if(o.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${o.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let t of o)try{await fetch(`${m}/episodes/${t}`,{method:"DELETE"})}catch{}l(t=>t.filter(s=>!o.includes(s.id))),Me([]),o.includes(G)&&B(null),f(`\u5DF2\u79FB\u9664 ${o.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},J=(0,e.useMemo)(()=>{let o=[...r];return w==="title"?o.sort((t,s)=>t.title.localeCompare(s.title,"zh-Hans-CN")):w==="duration"?o.sort((t,s)=>(s.duration||0)-(t.duration||0)):o.sort((t,s)=>s.mtime-t.mtime),o},[r,w]),pe=(0,e.useMemo)(()=>{let o=E.trim().toLowerCase();return J.filter(t=>{if(o&&!`${t.title} ${t.artist} ${t.album}`.toLowerCase().includes(o))return!1;let p=u[t.id]?.position||0,z=t.duration||0,A=z?p/z:0;return h==="inprogress"?p>5&&A<.97:h==="finished"?A>=.97:_==="unheard"?p<=5:_==="transcribed"?!!t.hasTranscript:_==="favorites"?!!t.favorite:!0})},[J,E,h,_,u]),Uo=(0,e.useMemo)(()=>Xe.filter(o=>o.status==="queued"||o.status==="running"),[Xe]),Pe=(0,e.useMemo)(()=>pe.filter(o=>!o.hasTranscript),[pe]),po=(0,e.useMemo)(()=>r.filter(o=>{let t=u[o.id];return!t||!t.position||t.position<5?!1:o.duration?t.position/o.duration<.97:!0}).sort((o,t)=>(u[t.id]?.updatedAt||0)-(u[o.id]?.updatedAt||0)).slice(0,4),[r,u]),Ro=(0,e.useMemo)(()=>r.reduce((o,t)=>o+(t.duration||0),0),[r]),et=Math.round(Ro/3600*10)/10,ot=h==="inprogress"?"\u7EE7\u7EED\u6536\u542C":h==="finished"?"\u5DF2\u64AD\u5B8C":"\u5168\u90E8\u5355\u96C6",P=G?r.find(o=>o.id===G)||(k?.id===G?k:null):null,tt=ee?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":x.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":`${pe.length} \u96C6 \xB7 \u5171 ${et} \u5C0F\u65F6 \xB7 ${a.length} \u4E2A\u6587\u4EF6\u5939`,jt=(0,e.useMemo)(()=>k?J.findIndex(o=>o.id===k.id):-1,[J,k]),Ee=(0,e.useCallback)(()=>{let o=U.current;if(o){if(!b.current){let t=pe[0]||J[0];t&&Fe(t,!0);return}o.paused?o.play().catch(()=>{}):o.pause()}},[pe,J]),Fe=(0,e.useCallback)((o,t=!0)=>{let s=U.current;if(!s||!o)return;if(b.current&&b.current.id===o.id){t&&Ee();return}b.current&&!s.ended&&s.currentTime>1&&ke(b.current.id,s.currentTime,s.duration||ge.current,!0),b.current=o,xe(o),B(A=>A&&o.id),ie(o.duration||0);let p=u[o.id]?.position||0,z=p>5&&(!o.duration||p<o.duration-10)?p:0;Ke.current=z,W(z),s.src=`${m}/episodes/${o.id}/audio`,s.load(),s.playbackRate=ye.current.rate||1,s.volume=ye.current.volume??.9,t&&s.play().catch(()=>{}),me({lastEpisodeId:o.id})},[u,ke,me,Ee]),Fo=(0,e.useCallback)((o,t=!0)=>{o&&(Fe(o,t),B(o.id))},[Fe]),co=(0,e.useCallback)(o=>{let t=U.current;if(!t||!b.current)return;let s=Math.max(0,Math.min(o,t.duration||o));t.currentTime=s,W(s),ke(b.current.id,s,t.duration||ge.current,!0)},[ke]),He=(0,e.useCallback)(o=>{let t=U.current;if(!t||!b.current)return;let s=Math.max(0,Math.min((t.currentTime||0)+o,(t.duration||ge.current||0)-1));t.currentTime=s,W(s)},[]),uo=(0,e.useCallback)(o=>{if(!J.length)return;let s=((b.current?J.findIndex(p=>p.id===b.current.id):-1)+o+J.length)%J.length;Fe(J[s],!0)},[J,Fe]),rt=(0,e.useCallback)(()=>{let o=wo.indexOf(ye.current.rate),t=wo[(o+1)%wo.length],s=U.current;s&&(s.playbackRate=t),me({rate:t})},[me]),Re=(0,e.useCallback)(o=>{let t=Math.max(0,Math.min(1,o)),s=U.current;s&&(s.volume=t),me({volume:t})},[me]),nt=(0,e.useCallback)(()=>{let o=U.current,t=ye.current.volume>0?0:.9;o&&(o.volume=t),me({volume:t})},[me]),at=()=>{let o=U.current;!o||!b.current||(W(o.currentTime),ke(b.current.id,o.currentTime,o.duration||ge.current))},st=()=>{let o=U.current,t=b.current;if(!o||!t)return;let s=Number.isFinite(o.duration)?o.duration:t.duration||0;ie(s);let p=Ke.current;Ke.current=0,p>0&&p<s-1&&(o.currentTime=p,W(p))},it=()=>{let o=U.current;b.current&&ke(b.current.id,o?.duration||ge.current||0,o?.duration||ge.current||0,!0),uo(1)},lt=async o=>{await D(`${m}/folders`,"POST",{path:o}),await ve(),f("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},dt=async()=>{let o=await fetch(`${m}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),t=await o.json().catch(()=>({}));if(!o.ok)throw new Error(t.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return t},pt=o=>{[...o.dataTransfer?.types||[]].includes("Files")&&(o.preventDefault(),ko||no(!0))},ct=o=>{o.currentTarget.contains(o.relatedTarget)||no(!1)},ut=async o=>{o.preventDefault(),no(!1);let t=o.dataTransfer,s=[...t?.files||[]],p=s.map(M=>M.path).filter(M=>typeof M=="string"&&M),z=String(t?.getData("text/uri-list")||"").split(/\r?\n/).map(M=>M.trim()).filter(M=>M.startsWith("file://")).map(M=>decodeURIComponent(M.replace(/^file:\/\//,""))),A=[...new Set([...p,...z])];if(A.length){try{let M=await D(`${m}/import/paths`,"POST",{paths:A});await ve(),f(M.added?`\u5DF2\u6DFB\u52A0 ${M.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(M){g(M.message)}return}let he=s.filter(M=>M.size>0);if(!he.length){f("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let vt=`drop-${Date.now()}`,eo="",mo=0;for(let M of he)try{let Ho=await fetch(`${m}/import/upload?name=${encodeURIComponent(M.name)}&batch=${vt}`,{method:"POST",body:M}),mt=await Ho.json();Ho.ok&&(eo=mt.folder||eo,mo+=1)}catch{}if(eo)try{await D(`${m}/folders`,"POST",{path:eo})}catch{}await ve(),f(mo?`\u5DF2\u5BFC\u5165 ${mo} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},gt=async o=>{if(window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${o}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`))try{await D(`${m}/folders`,"DELETE",{path:o}),await ve(),f("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(t){g(t.message)}};(0,e.useEffect)(()=>{let o=t=>{let s=t.target?.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||t.metaKey||t.ctrlKey||t.altKey||(t.code==="Space"?(t.preventDefault(),Ee()):t.key==="ArrowRight"?(t.preventDefault(),He(15)):t.key==="ArrowLeft"?(t.preventDefault(),He(-15)):t.key==="ArrowUp"?(t.preventDefault(),Re(ye.current.volume+.05)):t.key==="ArrowDown"?(t.preventDefault(),Re(ye.current.volume-.05)):t.key==="/"&&(t.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Ee,He,Re]);let go=o=>{let t=u[o.id];return!t||!o.duration?!1:t.position/o.duration>=.97},vo=o=>{let t=u[o.id];return!t||!o.duration?0:Math.min(100,Math.max(0,t.position/o.duration*100))};return e.default.createElement("div",{className:`shell ${ze?"nav-collapsed":""}`,onDragOver:pt,onDragLeave:ct,onDrop:ut},ko?e.default.createElement("div",{className:"drop-hint"},e.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),e.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,ze?e.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(I,{name:"chevron-right",size:16})):null,e.default.createElement("aside",{className:"sidebar"},e.default.createElement("div",{className:"brand"},e.default.createElement("span",{className:"brand-mark"},e.default.createElement(I,{name:"wave",size:20})),e.default.createElement("span",{className:"brand-name"},"Podwave"),e.default.createElement("span",{className:"brand-version"},"0.9"),e.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:Eo},e.default.createElement(I,{name:"chevron-left",size:16}))),e.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",po.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(go).length]].map(([o,t,s])=>e.default.createElement("button",{key:o,className:`nav-item ${h===o?"active":""}`,onClick:()=>Q(o)},e.default.createElement("span",null,t),e.default.createElement("span",{className:"nav-count"},s||"")))),e.default.createElement("div",{className:"side-section"},e.default.createElement("div",{className:"side-head"},e.default.createElement("span",null,"\u6587\u4EF6\u5939"),e.default.createElement("button",{className:"icon-btn",title:"\u6DFB\u52A0\u6587\u4EF6\u5939",onClick:()=>X(!0)},e.default.createElement(I,{name:"plus",size:16}))),a.length===0?e.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6587\u4EF6\u5939\u3002",e.default.createElement("br",null),"\u6DFB\u52A0\u4E00\u4E2A\u64AD\u5BA2\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u3002"):e.default.createElement("ul",{className:"folder-list"},a.map(o=>e.default.createElement("li",{key:o,title:o},e.default.createElement(I,{name:"folder",size:16}),e.default.createElement("span",{className:"folder-name"},Zo(o)),e.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:()=>gt(o)},"\xD7"))))),e.default.createElement("div",{className:"side-foot"},e.default.createElement("strong",null,"\u672C\u5730\u64AD\u653E"),e.default.createElement("span",null,"\u97F3\u9891\u53EA\u4ECE\u4F60\u7684\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),e.default.createElement("main",{className:"main"},e.default.createElement("header",{className:"topbar"},e.default.createElement("div",null,e.default.createElement("h1",null,ot),e.default.createElement("p",{className:"subline"},tt)),e.default.createElement("div",{className:"tools"},e.default.createElement("button",{className:`tool-btn ${$o?"is-on":""}`,onClick:()=>Co(o=>!o),title:"\u8F6C\u5199\u4EFB\u52A1"},e.default.createElement(I,{name:"tasks",size:16}),e.default.createElement("span",null,"\u4EFB\u52A1",Uo.length?` ${Uo.length}`:"")),e.default.createElement("button",{className:`tool-btn ${qe?"is-on":""}`,onClick:()=>{ao(o=>!o),Me([])},title:"\u6279\u91CF\u9009\u62E9"},e.default.createElement(I,{name:"check",size:16}),e.default.createElement("span",null,"\u9009\u62E9")),e.default.createElement("label",{className:"search"},e.default.createElement(I,{name:"search",size:16}),e.default.createElement("input",{value:E,onChange:o=>F(o.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),e.default.createElement("select",{className:"sort",value:w,onChange:o=>H(o.target.value)},e.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),e.default.createElement("option",{value:"title"},"\u6807\u9898"),e.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),qe?e.default.createElement("div",{className:"batch-bar"},e.default.createElement("span",null,"\u5DF2\u9009 ",re.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",onClick:()=>Me(pe.map(o=>o.id))},"\u5168\u9009\u5F53\u524D"),e.default.createElement("button",{className:"btn ghost",disabled:!Pe.length,onClick:()=>_e(Pe.map(o=>o.id))},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684 ",Pe.length," \u96C6"),e.default.createElement("button",{className:"btn primary",disabled:!re.length,onClick:()=>_e(re)},"\u8F6C\u5199\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost danger",disabled:!re.length,onClick:()=>Ko(re)},"\u79FB\u9664\u9009\u4E2D"),e.default.createElement("button",{className:"btn ghost",onClick:()=>{Me([]),ao(!1)}},"\u53D6\u6D88")):null,j?e.default.createElement("div",{className:"banner error",onClick:()=>g("")},j," ",e.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,P?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"detail-top"},e.default.createElement("button",{className:"back-link",onClick:()=>B(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),e.default.createElement("span",{className:"detail-count"},P.artist,P.album?` \xB7 ${P.album}`:"")),e.default.createElement("div",{className:"episode-view"},e.default.createElement("div",{className:"episode-left"},e.default.createElement("div",{className:"episode-cover"},e.default.createElement(De,{item:P,size:288})),e.default.createElement("h2",{className:"episode-title"},P.title),e.default.createElement("p",{className:"episode-sub"},P.artist,P.album?` \xB7 ${P.album}`:""),e.default.createElement("p",{className:"episode-path",title:P.file},P.location||P.file),e.default.createElement("p",{className:"episode-stats"},fo(P.duration)," \xB7 ",ho(P.mtime)," \xB7 \u5DF2\u542C ",Math.round(vo(P)),"%"),e.default.createElement("div",{className:"episode-actions"},e.default.createElement("button",{className:"btn primary",onClick:Ee},ae&&k?.id===P.id?"\u6682\u505C":"\u64AD\u653E"),L==="queued"||L==="running"?e.default.createElement("button",{className:"btn ghost",onClick:io},"\u53D6\u6D88\u8F6C\u5199"):e.default.createElement("button",{className:"btn ghost",onClick:Ue},N?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),e.default.createElement("button",{className:"btn ghost danger",onClick:()=>Ko([P.id])},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))),e.default.createElement("div",{className:"episode-right"},e.default.createElement(ro,{inline:!0,transcript:N,status:L,progress:ue?.progress,stage:ue?.stage,chunks:ue?.chunks,queued:ue?.queued,elapsed:Ve,editingId:Se,draft:Ye,onDraftChange:so,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Be(null),onSplitLine:jo,onMergeLine:Lo,onUndo:Ao,onValidate:Oo,issues:To,onCancel:io,error:Ne,position:R,onSeek:co,onClose:()=>B(null),onStart:Ue,target:$e,job:i,onChangeTarget:Bo,onOpenSettings:()=>Ce(!0)})))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([o,t])=>e.default.createElement("button",{key:o,className:`chip ${_===o?"is-on":""}`,onClick:()=>ce(o)},t))),h==="all"&&!E&&po.length>0?e.default.createElement("section",{className:"continue"},e.default.createElement("h2",null,"\u63A5\u7740\u542C"),e.default.createElement("div",{className:"continue-row"},po.map(o=>{let t=vo(o);return e.default.createElement("button",{key:o.id,className:`continue-card ${k?.id===o.id?"is-current":""}`,onClick:()=>Fo(o,!0)},e.default.createElement(De,{item:o,size:64}),e.default.createElement("div",{className:"continue-text"},e.default.createElement("div",{className:"continue-title"},o.title),e.default.createElement("div",{className:"continue-meta"},o.artist),e.default.createElement("div",{className:"mini-track"},e.default.createElement("div",{style:{width:`${t}%`}}))))}))):null,e.default.createElement("section",{className:"list-section"},e.default.createElement("div",{className:"list-head"},e.default.createElement("span",{className:"col-index"},"#"),e.default.createElement("span",null,"\u5355\u96C6"),e.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),e.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),ee?e.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):pe.length===0?e.default.createElement("div",{className:"empty"},e.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),e.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?e.default.createElement("button",{className:"btn primary",onClick:()=>X(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null):e.default.createElement("div",{className:"episode-list"},pe.map((o,t)=>{let s=vo(o),p=k?.id===o.id;return e.default.createElement("button",{key:o.id,className:`row ${p?"is-current":""} ${go(o)?"is-finished":""} ${qe&&re.includes(o.id)?"is-selected":""}`,onClick:()=>qe?_o(o.id):Fo(o,!0)},e.default.createElement("span",{className:"col-index row-index"},qe?re.includes(o.id)?e.default.createElement("span",{className:"row-check"},e.default.createElement(I,{name:"check",size:14})):null:p&&ae?e.default.createElement("span",{className:"playing-bars"},e.default.createElement("i",null),e.default.createElement("i",null),e.default.createElement("i",null)):t+1),e.default.createElement("span",{className:"row-main"},e.default.createElement(De,{item:o,size:40}),e.default.createElement("span",{className:"row-text"},e.default.createElement("span",{className:"row-title"},o.title),e.default.createElement("span",{className:"row-meta"},o.artist,o.album?` \xB7 ${o.album}`:""," \xB7 ",ho(o.mtime),o.hasTranscript?e.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null))),e.default.createElement("span",{className:"col-duration row-duration"},fo(o.duration)),e.default.createElement("span",{className:`row-star ${o.favorite?"is-on":""}`,role:"button",title:o.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:z=>{z.stopPropagation(),Go(o)}},"\u2605"),e.default.createElement("span",{className:"col-progress row-progress"},go(o)?e.default.createElement("span",{className:"finished-mark"},e.default.createElement(I,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):s>0?e.default.createElement("span",{className:"mini-track"},e.default.createElement("span",{style:{width:`${s}%`}})):null))}))))),Oe&&k&&!P?e.default.createElement(ro,{transcript:N,status:L,progress:ue?.progress,stage:ue?.stage,chunks:ue?.chunks,queued:ue?.queued,elapsed:Ve,editingId:Se,draft:Ye,onDraftChange:so,onEditLine:Io,onSaveLine:Do,onCancelEdit:()=>Be(null),onSplitLine:jo,onMergeLine:Lo,onUndo:Ao,onValidate:Oo,issues:To,onCancel:io,error:Ne,position:R,onSeek:co,onClose:()=>be(!1),onStart:Ue,target:$e,job:i,onChangeTarget:Bo,onOpenSettings:()=>Ce(!0)}):null,$o?e.default.createElement("section",{className:"jobs-panel"},e.default.createElement("header",{className:"jobs-head"},e.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),e.default.createElement("button",{className:"mini-link",onClick:()=>Co(!1)},"\u5173\u95ED")),e.default.createElement("div",{className:"jobs-body"},Xe.length===0?e.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Xe.map(o=>e.default.createElement("div",{key:o.key,className:`job-row job-${o.status}`},e.default.createElement("div",{className:"job-main"},e.default.createElement("span",{className:"job-title"},o.episodeTitle||o.episodeId),e.default.createElement("span",{className:"job-meta"},Wo(o)),o.status==="running"&&o.progress?.percent!=null?e.default.createElement("span",{className:"job-bar"},e.default.createElement("span",{style:{width:`${o.progress.percent}%`}})):null),e.default.createElement("div",{className:"job-actions"},o.status==="queued"||o.status==="running"?e.default.createElement("button",{className:"mini-link",onClick:()=>lo(o,"cancel")},"\u53D6\u6D88"):null,o.status==="error"||o.status==="interrupted"||o.status==="cancelled"?e.default.createElement("button",{className:"mini-link",onClick:()=>lo(o,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(o.status)?e.default.createElement("button",{className:"mini-link",onClick:()=>lo(o,"clear")},"\u6E05\u9664"):null)))),e.default.createElement("footer",{className:"jobs-foot"},e.default.createElement("button",{className:"btn primary",disabled:!Pe.length,onClick:()=>_e(Pe.map(o=>o.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",Pe.length," \u96C6"),e.default.createElement("button",{className:"btn ghost",disabled:!re.length,onClick:()=>_e(re)},"\u8F6C\u5199\u5DF2\u9009 ",re.length," \u96C6"))):null,e.default.createElement("footer",{className:"player"},e.default.createElement("div",{className:"seek-wrap"},e.default.createElement("div",{className:"seek-track"},e.default.createElement("div",{className:"seek-fill",style:{width:`${K?Math.min(100,Math.max(0,R/K*100)):0}%`}})),e.default.createElement("input",{className:"seek",type:"range",min:0,max:K||0,step:.05,value:Math.min(R,K||0),onChange:o=>co(Number(o.target.value)),"aria-label":"\u64AD\u653E\u8FDB\u5EA6"})),e.default.createElement("div",{className:"player-body"},e.default.createElement("div",{className:"now"},k?e.default.createElement(e.default.Fragment,null,e.default.createElement(De,{item:k,size:48}),e.default.createElement("div",{className:"now-text"},e.default.createElement("div",{className:"now-title",title:k.title},k.title),e.default.createElement("div",{className:"now-artist"},k.artist))):e.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),e.default.createElement("div",{className:"transport"},e.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>uo(-1)},e.default.createElement(I,{name:"prev"})),e.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>He(-15)},"\u221215"),e.default.createElement("button",{className:"play-btn",onClick:Ee,disabled:!k&&pe.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},e.default.createElement(I,{name:ae?"pause":"play",size:20})),e.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>He(15)},"+15"),e.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>uo(1)},e.default.createElement(I,{name:"next"}))),e.default.createElement("div",{className:"player-right"},e.default.createElement("button",{className:`subs-btn ${Oe?"active":""}`,onClick:Yo,disabled:!k,title:"\u5B57\u5E55\u4E0E\u8F6C\u5199"},e.default.createElement(I,{name:"wave",size:15}),e.default.createElement("span",null,N?"\u5B57\u5E55":L==="queued"||L==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),e.default.createElement("span",{className:"time"},Je(R)," / ",Je(K)),e.default.createElement("button",{className:"rate-btn",onClick:rt,title:"\u64AD\u653E\u901F\u5EA6"},T.rate,"\xD7"),e.default.createElement("button",{className:"icon-btn",onClick:nt,title:"\u9759\u97F3"},e.default.createElement(I,{name:T.volume>0?"volume":"mute"})),e.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:T.volume,onChange:o=>Re(Number(o.target.value)),"aria-label":"\u97F3\u91CF"})))),we?e.default.createElement(Ct,{onClose:()=>X(!1),onSubmit:lt,onPick:dt}):null,te?e.default.createElement(zt,{config:Ze,onClose:()=>Ce(!1),onSave:async o=>{let t=await D(`${m}/translate/settings`,"PUT",o);Qe(t),Ce(!1),f("\u7FFB\u8BD1\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}}):null,de?e.default.createElement("div",{className:"toast"},de):null,e.default.createElement("audio",{ref:U,preload:"metadata",onPlay:()=>se(!0),onPause:()=>{se(!1);let o=U.current;b.current&&o&&o.currentTime>0&&!o.ended&&ke(b.current.id,o.currentTime,o.duration||ge.current,!0)},onTimeUpdate:at,onLoadedMetadata:st,onEnded:it,onError:()=>{se(!1),f("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var n=Ie(require("react"),1);var Z="/podwave/api";async function je(r){let l=await fetch(r),a=await l.json().catch(()=>({}));if(!l.ok)throw new Error(a.error||`\u8BF7\u6C42\u5931\u8D25 ${l.status}`);return a}async function Le(r,l,a){let c=await fetch(r,{method:l,headers:{"content-type":"application/json"},body:JSON.stringify(a??{})}),u=await c.json().catch(()=>({}));if(!c.ok)throw new Error(u.error||`\u8BF7\u6C42\u5931\u8D25 ${c.status}`);return u}function Tt(r){let l=Math.max(0,Math.round(Number(r)||0)),a=Math.floor(l/3600),c=Math.floor(l%3600/60);return a>0?`${a} \u5C0F\u65F6 ${c} \u5206`:`${c} \u5206\u949F`}function Mt(r){if(!r)return"";let l=new Date(r),a=c=>String(c).padStart(2,"0");return`${l.getFullYear()}-${a(l.getMonth()+1)}-${a(l.getDate())} ${a(l.getHours())}:${a(l.getMinutes())}`}function yo(){let[r,l]=(0,n.useState)([]),[a,c]=(0,n.useState)([]),[u,y]=(0,n.useState)({asrModel:"",translateModel:""}),[x,O]=(0,n.useState)(null),[T,q]=(0,n.useState)(null),[E,F]=(0,n.useState)({showSidebarPanel:!0}),[w,H]=(0,n.useState)({mode:"copy",orphans:0,orphanBytes:0}),[h,Q]=(0,n.useState)(""),[_,ce]=(0,n.useState)(15),[G,B]=(0,n.useState)(!0),[k,xe]=(0,n.useState)("api"),[ae,se]=(0,n.useState)("https://api.deepseek.com"),[R,W]=(0,n.useState)("deepseek-chat"),[K,ie]=(0,n.useState)(""),[ee,le]=(0,n.useState)(""),[we,X]=(0,n.useState)(""),[j,g]=(0,n.useState)(""),[de,S]=(0,n.useState)(""),[N,$]=(0,n.useState)(""),L=(0,n.useCallback)(async()=>{try{let[i,C,te,Ce,ze,Te]=await Promise.all([je(`${Z}/history`),je(`${Z}/models`),je(`${Z}/translate/settings`),je(`${Z}/ui-settings`),je(`${Z}/transcribe/settings`),je(`${Z}/import/settings`)]);H({mode:Te.mode||"copy",orphans:Te.orphans||0,orphanBytes:Te.orphanBytes||0}),F({showSidebarPanel:Ce?.showSidebarPanel!==!1}),Q((ze.hotwords||[]).join(" ")),ce(ze.chunkMinutes||15),B(ze.diarize!==!1),l(i.items||[]),c(C.models||[]),y(C.config||{asrModel:"",translateModel:""}),O(C.transcribe||null),le(C.config?.asrModel||""),X(C.config?.translateModel||""),q(te),xe(te.provider||"api"),se(te.apiBase||"https://api.deepseek.com"),W(te.apiModel||"deepseek-chat"),ie(""),$("")}catch(i){$(i.message)}},[]);(0,n.useEffect)(()=>{L()},[L]);let Y=i=>{S(i),window.setTimeout(()=>S(""),2400)},Ve=async()=>{g("api"),$("");try{let i={provider:k,apiBase:ae,apiModel:R};K.trim()&&(i.apiKey=K.trim());let C=await Le(`${Z}/translate/settings`,"PUT",i);q(C),ie(""),Y("API \u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){$(i.message)}finally{g("")}},Ae=async()=>{g("models"),$("");try{let i=await Le(`${Z}/models`,"PUT",{asrModel:ee,translateModel:we});y(i.config),c(i.models||[]),O(i.transcribe||null),Y("\u6A21\u578B\u9009\u62E9\u5DF2\u4FDD\u5B58")}catch(i){$(i.message)}finally{g("")}},Ne=a.length?a:[{name:u.asrModel||"qwen3-asr-1.7b-8bit",ready:x?.modelReady},{name:u.translateModel||"hy-mt2-1.8b-4bit",ready:T?.localReady}],oe=Ne.filter(i=>/asr/i.test(i.name)&&i.ready!==!1),Oe=Ne.filter(i=>!/asr|diarization/i.test(i.name)&&i.ready!==!1),be=async()=>{g("ui"),$("");try{let i=await Le(`${Z}/ui-settings`,"PUT",{showSidebarPanel:E.showSidebarPanel});F({showSidebarPanel:i.showSidebarPanel!==!1}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:i})),Y("\u754C\u9762\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){$(i.message)}finally{g("")}},Ze=async i=>{g("import"),$("");try{let C=await Le(`${Z}/import/settings`,"PUT",{mode:i});H(te=>({...te,mode:C.mode})),Y("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(C){$(C.message)}finally{g("")}},Qe=async()=>{if(w.orphans&&window.confirm(`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u6279\u6B21\uFF1F\u53EA\u5220 imports/ \u4E0B\u7684\u526F\u672C\u3002`)){g("imports"),$("");try{let i=await Le(`${Z}/imports/orphans`,"DELETE",{});H(C=>({...C,orphans:0,orphanBytes:0})),Y(`\u5DF2\u6E05\u7406 ${i.removed||0} \u4E2A\u6279\u6B21`)}catch(i){$(i.message)}finally{g("")}}},$e=async()=>{g("transcribe"),$("");try{let i=h.split(/[\s,，、]+/).map(te=>te.trim()).filter(Boolean).slice(0,500),C=await Le(`${Z}/transcribe/settings`,"PUT",{hotwords:i,chunkMinutes:Math.min(60,Math.max(1,Number(_)||15)),diarize:G});Q((C.hotwords||[]).join(" ")),ce(C.chunkMinutes||15),B(C.diarize!==!1),Y("\u8F6C\u5199\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")}catch(i){$(i.message)}finally{g("")}},We=Ne;return n.default.createElement("div",{className:"podwave-root",style:{height:"auto",overflow:"visible",background:"transparent",color:"inherit"}},n.default.createElement("style",null,to),n.default.createElement("div",{className:"podwave-settings"},n.default.createElement("header",{className:"settings-head"},n.default.createElement("h1",null,"\u64AD\u5BA2"),n.default.createElement("p",null,"\u672C\u5730\u64AD\u653E\u3001\u8F6C\u5199\u3001\u53CC\u8BED\u5B57\u5E55\u4E0E\u7FFB\u8BD1\u3002\u6570\u636E\u90FD\u5728 ~/.podwave\u3002")),N?n.default.createElement("div",{className:"banner error",onClick:()=>$("")},N):null,de?n.default.createElement("div",{className:"settings-message"},de):null,n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5386\u53F2\u8BB0\u5F55"),n.default.createElement("p",{className:"settings-hint"},"\u5DF2\u7ECF\u5B8C\u6210\u8F6C\u5199\u7684\u5355\u96C6\uFF0C\u5171 ",r.length," \u6761\u3002"),r.length?n.default.createElement("ul",{className:"history-list"},r.map(i=>n.default.createElement("li",{key:i.id,className:"history-row"},n.default.createElement("div",{className:"history-main"},n.default.createElement("span",{className:"history-title"},i.title),n.default.createElement("span",{className:"history-meta"},i.artist?`${i.artist} \xB7 `:"",i.duration?`${Tt(i.duration)} \xB7 `:"",i.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",i.lines," \u884C",i.translations?.length?` \xB7 \u5DF2\u7FFB ${i.translations.join(" / ")}`:"")),n.default.createElement("span",{className:"history-date"},Mt(i.completedAt))))):n.default.createElement("p",{className:"settings-empty"},"\u8FD8\u6CA1\u6709\u5B8C\u6210\u8FC7\u8F6C\u5199\u3002\u5728\u300C\u64AD\u5BA2\u300D\u9762\u677F\u91CC\u6253\u5F00\u4E00\u96C6\uFF0C\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\u3002")),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u8F6C\u5199"),n.default.createElement("p",{className:"settings-hint"},"\u70ED\u8BCD\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\uFF0C\u4F1A\u4F5C\u4E3A --context \u4F20\u7ED9\u6A21\u578B\uFF0C\u4E13\u6709\u540D\u8BCD\u66F4\u51C6\u3002\u957F\u64AD\u5BA2\u6309\u5206\u949F\u5207\u5757\uFF0C\u5931\u8D25\u53EA\u91CD\u8DD1\u90A3\u4E00\u5757\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u70ED\u8BCD"),n.default.createElement("input",{value:h,onChange:i=>Q(i.target.value),placeholder:"\u4F8B\u5982\uFF1ADeepSeek Harness \u64AD\u5BA2 \u7845\u8C37"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u5206\u5757\u65F6\u957F\uFF08\u5206\u949F\uFF09"),n.default.createElement("input",{type:"number",min:"1",max:"60",value:_,onChange:i=>ce(i.target.value)})),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:G,onChange:i=>B(i.target.checked)}),n.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08\u672C\u5730\u58F0\u7EB9\uFF0C\u5206\u79BB\u5931\u8D25\u4E0D\u5F71\u54CD\u8F6C\u5199\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:$e,disabled:j==="transcribe"},j==="transcribe"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8F6C\u5199\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u70ED\u8BCD\u6700\u591A 500 \u4E2A"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u5BFC\u5165\u4E0E\u6E05\u7406"),n.default.createElement("p",{className:"settings-hint"},"\u62D6\u62FD\u97F3\u9891\u9ED8\u8BA4\u590D\u5236\u5230 ~/.podwave/imports/\uFF1B\u9009\u62E9\u6587\u4EF6\u5939\u662F\u539F\u5730\u5F15\u7528\u3002\u6E05\u7406\u53EA\u5220\u6CA1\u6709\u6587\u4EF6\u5939\u5F15\u7528\u7684\u526F\u672C\uFF0C\u4E0D\u78B0\u539F\u59CB\u6587\u4EF6\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="copy",onChange:()=>Ze("copy")}),n.default.createElement("span",null,"\u590D\u5236\u5230 imports/\uFF08\u63A8\u8350\uFF0C\u5220\u9664\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\u64AD\u653E\uFF09")),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"radio",name:"import-mode",checked:w.mode==="reference",onChange:()=>Ze("reference")}),n.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\uFF0C\u76F4\u63A5\u5F15\u7528\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF09"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Qe,disabled:j==="imports"||!w.orphans},w.orphans?`\u6E05\u7406 ${w.orphans} \u4E2A\u672A\u5F15\u7528\u6279\u6B21\uFF08${(w.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5BFC\u5165\u526F\u672C"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"API \u4E0E\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("p",{className:"settings-hint"},"\u5B57\u5E55\u7FFB\u8BD1\u53EF\u4EE5\u8D70 DeepSeek API\uFF0C\u4E5F\u53EF\u4EE5\u7528\u672C\u673A\u6A21\u578B\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),n.default.createElement("select",{value:k,onChange:i=>xe(i.target.value)},n.default.createElement("option",{value:"api"},"DeepSeek API"),n.default.createElement("option",{value:"local"},"\u672C\u5730\u6A21\u578B"))),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u5730\u5740"),n.default.createElement("input",{value:ae,onChange:i=>se(i.target.value),placeholder:"https://api.deepseek.com"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API \u6A21\u578B"),n.default.createElement("input",{value:R,onChange:i=>W(i.target.value),placeholder:"deepseek-chat"})),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"API Key"),n.default.createElement("input",{type:"password",value:K,onChange:i=>ie(i.target.value),placeholder:T?.hasApiKey?`\u5DF2\u4FDD\u5B58 ${T.apiKeyMasked}\uFF08\u7559\u7A7A\u4E0D\u4FEE\u6539\uFF09`:"sk-..."}))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ve,disabled:j==="api"},j==="api"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58 API \u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},T?.hasApiKey?"API Key \u5DF2\u4FDD\u5B58":"\u5C1A\u672A\u586B\u5199 API Key"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u754C\u9762"),n.default.createElement("p",{className:"settings-hint"},"\u63A7\u5236\u64AD\u5BA2\u5165\u53E3\u5728 DSH \u4E3B\u754C\u9762\u7684\u663E\u793A\u65B9\u5F0F\u3002"),n.default.createElement("label",{className:"check-row"},n.default.createElement("input",{type:"checkbox",checked:E.showSidebarPanel,onChange:i=>F({showSidebarPanel:i.target.checked})}),n.default.createElement("span",null,"\u5728\u4E3B\u754C\u9762\u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3")),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:be,disabled:j==="ui"},j==="ui"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u754C\u9762\u8BBE\u7F6E"),n.default.createElement("span",{className:"settings-status"},"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548"))),n.default.createElement("section",{className:"settings-card"},n.default.createElement("h2",null,"\u6A21\u578B"),n.default.createElement("p",{className:"settings-hint"},"\u6A21\u578B\u653E\u5728 ~/.podwave/models/ \u4E0B\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u9700\u8981\u6709 model.safetensors\u3002"),n.default.createElement("div",{className:"settings-fields"},n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u8F6C\u5199\u6A21\u578B\uFF08ASR\uFF09"),n.default.createElement("select",{value:ee,onChange:i=>le(i.target.value)},(oe.length?oe:We).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},x?.modelReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA")),n.default.createElement("label",{className:"field-row"},n.default.createElement("span",null,"\u7FFB\u8BD1\u6A21\u578B"),n.default.createElement("select",{value:we,onChange:i=>X(i.target.value)},(Oe.length?Oe:We).map(i=>n.default.createElement("option",{key:i.name,value:i.name},i.name,i.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))),n.default.createElement("span",{className:"settings-status"},T?.localReady?"\u5C31\u7EEA":"\u672A\u5C31\u7EEA"))),n.default.createElement("div",{className:"settings-actions"},n.default.createElement("button",{className:"settings-btn",onClick:Ae,disabled:j==="models"},j==="models"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u6A21\u578B\u9009\u62E9")))))}function St({size:r=16}){return ne.default.createElement("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},ne.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),ne.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ne.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),ne.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),ne.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function Pt(){return ne.default.createElement("div",{className:"podwave-root"},ne.default.createElement("style",null,to),ne.default.createElement(bo,null))}function Et(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"podwave"},Pt)),r.slots.inject("settings.section",()=>r.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},yo));let l=null,a="podwave-hide-nav",c=y=>{if(typeof document>"u")return;let x=document.getElementById(a);y&&!x?(x=document.createElement("style"),x.id=a,x.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(x)):!y&&x&&x.remove()},u=y=>{if(c(!y),y&&!l)l=r.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},St);else if(!y&&l){let x=l;l=null;try{typeof x?.dispose=="function"?x.dispose():typeof x=="function"?x():typeof x?.dispose>"u"&&typeof x?.unregister=="function"&&x.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(y=>y.ok?y.json():null).then(y=>u(y?.showSidebarPanel!==!1)).catch(()=>u(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",y=>{u(y?.detail?.showSidebarPanel!==!1)})}var It=["slots"];

return module.exports}})
