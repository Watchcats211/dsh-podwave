window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ir=Object.create;var bn=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var Br=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty;var Fr=(a,i)=>{for(var r in i)bn(a,r,{get:i[r],enumerable:!0})},Pa=(a,i,r,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let v of Or(i))!jr.call(a,v)&&v!==r&&bn(a,v,{get:()=>i[v],enumerable:!(p=Ar(i,v))||p.enumerable});return a};var it=(a,i,r)=>(r=a!=null?Ir(Br(a)):{},Pa(i||!a||!a.__esModule?bn(r,"default",{value:a,enumerable:!0}):r,a)),Ur=a=>Pa(bn({},"__esModule",{value:!0}),a);var ps={};Fr(ps,{apply:()=>ls,inject:()=>ds});module.exports=Ur(ps);var kt=it(require("react"),1);var xn=`/* Podwave \xB7 Direction 1: \u58F0\u97F3\u5DE5\u4F5C\u53F0\uFF08Studio Deck\uFF09\u5168\u91CF\u8BBE\u8BA1\u7CFB\u7EDF */

.podwave-root {
  color-scheme: dark;
  position: relative;
  container-type: inline-size;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Noto Sans SC", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-synthesis: none;
  line-break: strict;
  -webkit-font-smoothing: antialiased;
  accent-color: var(--accent);

  /* \u6DF1\u8272\uFF1A\u9633\u6781\u6C27\u5316\u77F3\u58A8\u673A\u58F3\uFF08L 0.12 - 0.24\uFF09+ VU \u4FE1\u53F7\u6731\u7EA2 + \u76D1\u542C\u84DD\u9752 */
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  --bg: #121316;
  --rack: #17191D;
  --sidebar: var(--rack);
  --surface: #1C1E23;
  --elev: var(--surface);
  --surface-2: #24272E;
  --hover: var(--surface-2);
  --deck: #15171B;
  --line: #2C3039;
  --line-soft: #23262E;
  --line-strong: #404654;
  --text: #F2F1ED;
  --muted: #B8BCC6;
  --dim: #898E9B;
  --accent: #F05E3D;
  --accent-hover: #FF704F;
  --accent-soft: rgba(240, 94, 61, 0.16);
  --accent-ink: #121316;
  --teal: #57BDD4;
  --teal-soft: rgba(87, 189, 212, 0.15);
  --ok: #4DC484;
  --ok-soft: rgba(77, 196, 132, 0.15);
  --danger: #EC6C61;
  --danger-soft: rgba(236, 108, 97, 0.14);
  --bevel: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  --shadow-card: 0 10px 28px rgba(0, 0, 0, 0.42);
  --shadow-modal: 0 28px 72px rgba(0, 0, 0, 0.65), 0 0 0 1px #323743;
  --radius: 6px;
  --player-h: 92px;
  --scrollbar-thumb: #3A3F4B;
  --scrollbar-track: transparent;
}

.podwave-root[data-pw-theme="light"] {
  color-scheme: light;
  /* \u6D45\u8272\uFF1A\u62C9\u4E1D\u6696\u7070\u94DD\u9762\uFF08L 0.96 - 0.90\uFF09+ \u4FE1\u53F7\u6731\u7EA2 + \u76D1\u542C\u84DD\u9752 */
  --bg: #F3F2EE;
  --rack: #EAE8E2;
  --sidebar: var(--rack);
  --surface: #FCFBF9;
  --elev: var(--surface);
  --surface-2: #F0EFEA;
  --hover: var(--surface-2);
  --deck: #E7E5DE;
  --line: #D5D2C9;
  --line-soft: #E3E0D8;
  --line-strong: #B9B4A7;
  --text: #161719;
  --muted: #4B4D52;
  --dim: #6C6E75;
  --accent: #D64526;
  --accent-hover: #BD381B;
  --accent-soft: rgba(214, 69, 38, 0.11);
  --accent-ink: #FFFFFF;
  --teal: #15748A;
  --teal-soft: rgba(21, 116, 138, 0.12);
  --ok: #1D7F4E;
  --ok-soft: rgba(29, 127, 78, 0.12);
  --danger: #C2362B;
  --danger-soft: rgba(194, 54, 43, 0.10);
  --bevel: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  --shadow-card: 0 10px 26px rgba(22, 23, 25, 0.12);
  --shadow-modal: 0 24px 60px rgba(22, 23, 25, 0.22), 0 2px 8px rgba(22, 23, 25, 0.08);
  --scrollbar-thumb: #C2BEB3;
  --scrollbar-track: transparent;
}

.podwave-root.podwave-settings-host {
  max-width: 860px;
  background: var(--bg);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 20px 24px 28px;
}

.podwave-root * { box-sizing: border-box; }
.podwave-root h1, .podwave-root h2, .podwave-root h3 { text-wrap: balance; }
.podwave-root button, .podwave-root input, .podwave-root select, .podwave-root textarea { font-family: inherit; color: inherit; }
.podwave-root button { cursor: pointer; }

.podwave-root button:focus-visible,
.podwave-root input:focus-visible,
.podwave-root select:focus-visible,
.podwave-root textarea:focus-visible,
.podwave-root [role="button"]:focus-visible,
.podwave-root [role="slider"]:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* \u6EDA\u52A8\u6761\u7EDF\u4E00\u8DDF\u968F\u660E\u6697\u8272\u503C\uFF08\u4E0D\u505A color \u52A8\u753B\u4EE5\u89C4\u907F WebKit \u95EA\u70C1\uFF09 */
.podwave-root .sidebar,
.podwave-root .main,
.podwave-root .transcript-body,
.podwave-root .jobs-body,
.podwave-root .folder-list,
.podwave-root .folder-dialog .dlg-body {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

@supports not (scrollbar-color: auto) {
  .podwave-root ::-webkit-scrollbar { width: 9px; height: 9px; }
  .podwave-root ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 5px; border: 2px solid transparent; background-clip: content-box; }
  .podwave-root ::-webkit-scrollbar-track { background: transparent; }
}

.podwave-root .shell {
  display: grid;
  grid-template-columns: 244px minmax(0, 1fr);
  height: 100%;
  min-height: 0;
  padding-bottom: var(--player-h);
  position: relative;
  background: var(--bg);
}

/* ---------- \u5DE6\u4FA7\u8BBE\u5907\u673A\u67B6 ---------- */

.podwave-root .sidebar {
  background: var(--rack);
  border-right: 1px solid var(--line);
  padding: 16px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  min-height: 0;
  overflow-y: auto;
}

.podwave-root .brand {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 4px 6px 12px;
  border-bottom: 1px solid var(--line);
}

.podwave-root .brand-mark {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  box-shadow: var(--bevel);
  display: inline-grid;
  place-items: center;
  color: var(--accent);
  flex-shrink: 0;
}

.podwave-root .brand-name {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.podwave-root .brand-version {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

.podwave-root .brand-collapse {
  margin-left: auto;
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
  height: 36px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
}

.podwave-root .nav-item:hover { background: var(--surface-2); color: var(--text); }

.podwave-root .nav-item.active {
  background: var(--surface);
  border-color: var(--line-strong);
  box-shadow: var(--bevel);
  color: var(--text);
  font-weight: 600;
}

.podwave-root .nav-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
}

.podwave-root .nav-led {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: transparent;
  flex-shrink: 0;
}

.podwave-root .nav-item.active .nav-led {
  background: var(--accent);
}

.podwave-root .nav-count {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

/* \u5DE6\u4FA7\u5377\u69FD\u5F0F\u76EE\u5F55\u5217\u8868 */

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
  padding: 0 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dim);
}

.podwave-root .rack-add-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 26px;
  padding: 0 8px;
  border-radius: 5px;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
}

.podwave-root .rack-add-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.podwave-root .side-empty-card {
  padding: 12px;
  border-radius: 6px;
  border: 1px dashed var(--line-strong);
  background: var(--surface);
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.podwave-root .side-empty {
  margin: 0;
  font-size: 12.5px;
  color: var(--dim);
  line-height: 1.55;
}

.podwave-root .side-empty-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  font-size: 12.5px;
}

.podwave-root .folder-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
}

.podwave-root .folder-list li {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--muted);
  cursor: pointer;
  transition: border-color 0.12s, background 0.12s;
}

.podwave-root .folder-list li:hover {
  border-color: var(--line-strong);
  color: var(--text);
}

.podwave-root .folder-list li.is-active {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--text);
}

.podwave-root .slot-dot {
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--ok);
  flex-shrink: 0;
}

.podwave-root .slot-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.podwave-root .folder-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .slot-path {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

.podwave-root .folder-remove {
  border: 0;
  background: transparent;
  color: var(--dim);
  font-size: 16px;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.12s, color 0.12s, background 0.12s;
}

.podwave-root .folder-list li:hover .folder-remove,
.podwave-root .folder-list li:focus-within .folder-remove { opacity: 1; }
.podwave-root .folder-remove:hover { color: var(--danger); background: var(--danger-soft); }

/* \u4FA7\u680F\u5E95\u90E8\uFF1A\u6D45\u8272 / \u6DF1\u8272 / \u7CFB\u7EDF \u4E09\u6001\u62E8\u7247 */

.podwave-root .side-foot {
  border-top: 1px solid var(--line);
  padding: 12px 2px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  color: var(--dim);
}

.podwave-root .side-foot strong {
  color: var(--muted);
  font-weight: 600;
  font-size: 12px;
}

.podwave-root .theme-switch {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
  margin-bottom: 4px;
}

.podwave-root .theme-seg {
  height: 28px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  transition: background 0.12s, color 0.12s;
}

.podwave-root .theme-seg:hover { color: var(--text); }

.podwave-root .theme-seg.is-on {
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
}

/* ---------- \u4FA7\u680F\u6536\u8D77 ---------- */

.podwave-root .shell.nav-collapsed { grid-template-columns: 48px minmax(0, 1fr); }
.podwave-root .shell.nav-collapsed .sidebar { display: none; }
.podwave-root .nav-rail { position: relative; }

.podwave-root .nav-reopen {
  position: absolute;
  top: 16px;
  left: 10px;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--muted);
}

.podwave-root .nav-reopen:hover { color: var(--text); background: var(--surface-2); }

/* ---------- \u53F3\u4FA7\u4E3B\u5DE5\u4F5C\u533A ---------- */

.podwave-root .main {
  padding: 20px 26px 42px;
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow-y: auto;
  background: var(--bg);
}

.podwave-root .topbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 16px;
  padding: 14px 18px;
  margin-bottom: 18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--bevel);
}

.podwave-root .topbar > div:first-child {
  min-width: 0;
}

.podwave-root .topbar h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.podwave-root .subline {
  margin: 4px 0 0;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}

.podwave-root .tools {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  justify-content: flex-end;
  min-width: 0;
  flex-wrap: wrap;
}

.podwave-root .search {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--dim);
}

.podwave-root .search:focus-within { border-color: var(--accent); }

.podwave-root .search input {
  width: 172px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font-size: 14px;
}

.podwave-root .search input::placeholder { color: var(--dim); }

.podwave-root .sort {
  height: 34px;
  padding: 0 9px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  font-size: 13px;
  cursor: pointer;
}

.podwave-root .topbar .tool-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

.podwave-root .topbar .tool-btn:hover { background: var(--surface-2); }

.podwave-root .topbar .tool-btn.is-on {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}

.podwave-root .live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dim);
  flex-shrink: 0;
}

.podwave-root .topbar .tool-btn.is-live .live-dot {
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.podwave-root .banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius);
  font-size: 13px;
  margin-bottom: 16px;
  cursor: pointer;
}

.podwave-root .banner.error {
  color: var(--danger);
  background: var(--danger-soft);
  border: 1px solid var(--danger);
}

.podwave-root .banner-dismiss { color: var(--dim); font-size: 12px; }

/* ---------- \u7B5B\u9009\u4E0E\u7EE7\u7EED\u6536\u542C ---------- */

.podwave-root .filter-chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 16px; }

.podwave-root .chip {
  height: 30px;
  padding: 0 12px;
  border-radius: 5px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
}

.podwave-root .chip:hover { color: var(--text); border-color: var(--line-strong); }

.podwave-root .chip.is-on {
  background: var(--text);
  border-color: var(--text);
  color: var(--surface);
  font-weight: 600;
}

.podwave-root .continue { margin-bottom: 20px; }

.podwave-root .continue h2 {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
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
  padding: 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  text-align: left;
  min-width: 0;
  transition: border-color 0.12s;
}

.podwave-root .continue-card:hover { border-color: var(--line-strong); background: var(--surface-2); }
.podwave-root .continue-card.is-current { border-color: var(--accent); background: var(--accent-soft); }

.podwave-root .continue-text { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 3px; }

.podwave-root .continue-title {
  font-size: 13.5px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .continue-meta {
  font-size: 12px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .continue-text .mini-track { margin-top: 4px; }

/* \u76EE\u5F55\u9762\u5305\u5C51\u4E0E\u5B50\u6587\u4EF6\u5939\u884C */

.podwave-root .crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  margin-bottom: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  font-size: 13px;
  color: var(--dim);
}

.podwave-root .crumb-item { display: inline-flex; align-items: center; gap: 4px; }

.podwave-root .crumb {
  padding: 2px 7px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--text);
  font-weight: 500;
}

.podwave-root .crumb:hover:not(:disabled) { background: var(--surface-2); }
.podwave-root .crumb.is-current { color: var(--dim); cursor: default; font-weight: 400; }
.podwave-root .crumb-sep { color: var(--dim); }

.podwave-root .folder-row .row-title { font-weight: 600; }
.podwave-root .folder-row .col-duration { color: var(--dim); }

/* ---------- \u5355\u96C6\u7CBE\u5BC6\u5217\u8868 ---------- */

.podwave-root .list-section {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.podwave-root .list-head,
.podwave-root .row {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 88px 28px 110px;
  gap: 12px;
  align-items: center;
  padding: 0 14px;
}

.podwave-root .list-head {
  height: 36px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dim);
  background: var(--surface-2);
  border-bottom: 1px solid var(--line);
}

.podwave-root .col-index { text-align: right; }
.podwave-root .col-duration { text-align: right; }
.podwave-root .col-progress { text-align: right; }

.podwave-root .episode-list { display: flex; flex-direction: column; }

.podwave-root .row {
  width: 100%;
  min-height: 62px;
  padding-top: 9px;
  padding-bottom: 9px;
  border: 0;
  border-bottom: 1px solid var(--line-soft);
  background: transparent;
  color: var(--text);
  text-align: left;
  transition: background 0.1s;
}

.podwave-root .row:last-child { border-bottom: 0; }
.podwave-root .row:hover { background: var(--surface-2); }

.podwave-root .row.is-current { background: var(--accent-soft); }
.podwave-root .row.is-current .row-title { color: var(--accent); }
.podwave-root .row.is-selected { background: var(--accent-soft); }

.podwave-root .row-index {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
  text-align: right;
  padding-right: 2px;
}

.podwave-root .row.is-current .row-index { color: var(--accent); font-weight: 700; }

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
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .row-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  font-size: 12px;
  color: var(--dim);
}

.podwave-root .row-meta-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.podwave-root .row-duration {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.podwave-root .row-progress { display: flex; justify-content: flex-end; align-items: center; }

.podwave-root .mini-track {
  display: block;
  width: 100%;
  max-width: 100px;
  height: 4px;
  border-radius: 2px;
  background: var(--surface-2);
  overflow: hidden;
}

.podwave-root .mini-track > span,
.podwave-root .mini-track > div {
  display: block;
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
}

.podwave-root .finished-mark {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--ok);
  font-weight: 500;
}

.podwave-root .row-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: var(--accent);
  color: var(--accent-ink);
}

.podwave-root .row-badge {
  display: inline-block;
  flex-shrink: 0;
  margin-left: 0;
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid var(--line);
  background: var(--surface-2);
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.45;
  white-space: nowrap;
}

.podwave-root .row-badge.is-bilingual {
  border-color: transparent;
  background: var(--teal-soft);
  color: var(--teal);
  font-weight: 600;
}

.podwave-root .row-star {
  flex: none;
  width: 22px;
  text-align: center;
  color: var(--line-strong);
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
}

.podwave-root .row-star:hover { color: var(--accent); }
.podwave-root .row-star.is-on { color: var(--accent); }

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
  animation: pw-bars 1s ease-in-out infinite;
}

.podwave-root .playing-bars i:nth-child(2) { animation-delay: 0.25s; }
.podwave-root .playing-bars i:nth-child(3) { animation-delay: 0.5s; }

@keyframes pw-bars {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}

/* ---------- \u5C01\u9762 ---------- */

.podwave-root .cover {
  border-radius: 5px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--surface-2);
  border: 1px solid var(--line);
  display: block;
}

.podwave-root .cover-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  background: var(--surface-2);
  font-size: 15px;
  font-weight: 700;
  user-select: none;
}

/* ---------- \u7A7A\u72B6\u6001 ---------- */

.podwave-root .empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 64px 24px;
  color: var(--muted);
  font-size: 15px;
  font-weight: 500;
}

.podwave-root .empty p { margin: 0; }
.podwave-root .empty-hint { color: var(--dim); font-size: 13px; max-width: 400px; text-align: center; font-weight: 400; line-height: 1.6; }
.podwave-root .empty .btn { margin-top: 8px; }

/* ---------- \u5E95\u90E8\u7CBE\u5BC6\u523B\u5EA6\u8D70\u5E26\u63A7\u5236\u53F0 ---------- */

.podwave-root .player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--player-h);
  background: var(--deck);
  border-top: 1px solid var(--line-strong);
  padding: 0 22px 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
  z-index: 40;
}

.podwave-root .seek-wrap {
  position: relative;
  height: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
  border-radius: 4px;
  outline: none;
}

.podwave-root .seek-ticks {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    90deg,
    var(--line-strong) 0 1px,
    transparent 1px 16px
  );
  opacity: 0.48;
  mask-image: linear-gradient(180deg, transparent 58%, #000 58%);
  pointer-events: none;
}

.podwave-root .seek-track {
  position: relative;
  width: 100%;
  height: 4px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
  pointer-events: none;
}

.podwave-root .seek-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
}

.podwave-root .seek-thumb {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 14px;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background: var(--text);
  border: 1.5px solid var(--accent);
  pointer-events: none;
  transition: transform 0.1s ease;
}

.podwave-root .seek-wrap:hover .seek-thumb { transform: translate(-50%, -50%) scale(1.12); }

.podwave-root .player-body {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) auto auto;
  align-items: center;
  gap: 12px;
  height: 58px;
}

.podwave-root .now {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.podwave-root .now-open {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  border-radius: 6px;
}

.podwave-root .now-open:hover .now-title { color: var(--accent); }
.podwave-root .now-text { min-width: 0; flex: 1 1 auto; }

.podwave-root .now-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .now-artist {
  font-size: 12px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .now-empty { color: var(--dim); font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.podwave-root .transport {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.podwave-root .icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  white-space: nowrap;
}

.podwave-root .icon-btn:hover { background: var(--surface-2); color: var(--text); }
.podwave-root .transport .icon-btn {
  border-color: var(--line);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
}
.podwave-root .transport .icon-btn:hover { border-color: var(--line-strong); }

.podwave-root .skip-btn {
  flex-shrink: 0;
  height: 34px;
  min-width: 42px;
  padding: 0 9px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.podwave-root .skip-btn:hover { border-color: var(--muted); background: var(--surface-2); }

.podwave-root .play-btn {
  flex-shrink: 0;
  width: 46px;
  height: 38px;
  border-radius: 6px;
  border: 1px solid var(--accent);
  background: var(--accent);
  color: var(--accent-ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: background 0.1s ease, transform 0.1s ease;
}

.podwave-root .play-btn:hover { background: var(--accent-hover); }
.podwave-root .play-btn:active { transform: scale(0.97); }
.podwave-root .play-btn:disabled { opacity: 0.4; cursor: default; transform: none; }

.podwave-root .player-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-shrink: 0;
  min-width: 0;
}

.podwave-root .time {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 4px 8px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.podwave-root .rate-btn {
  flex-shrink: 0;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.podwave-root .rate-btn:hover { border-color: var(--muted); background: var(--surface-2); }

.podwave-root .volume {
  flex-shrink: 0;
  width: 72px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* ---------- \u901A\u7528\u6309\u94AE & \u539F\u751F\u6587\u4EF6\u5939\u7BA1\u7406\u5F39\u7A97 ---------- */

.podwave-root .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: var(--radius);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.podwave-root .btn:hover:not(:disabled) { background: var(--surface-2); }
.podwave-root .btn:disabled { opacity: 0.45; cursor: default; }

.podwave-root .btn.primary {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
  box-shadow: none;
  font-weight: 600;
}

.podwave-root .btn.primary:hover:not(:disabled) { background: var(--accent-hover); border-color: var(--accent-hover); }

.podwave-root .btn.ghost {
  background: var(--surface);
  border-color: var(--line-strong);
  color: var(--text);
}

.podwave-root .btn.danger { color: var(--danger); border-color: var(--danger); }
.podwave-root .btn.danger:hover:not(:disabled) { background: var(--danger-soft); }

/* \u539F\u751F\u6A21\u6001 <dialog closedby="any"> */
.podwave-root dialog.folder-dialog {
  width: min(640px, calc(100vw - 32px));
  max-height: min(86vh, 760px);
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-modal);
  overflow: hidden;
}

.podwave-root dialog.folder-dialog[open] {
  display: flex;
  flex-direction: column;
}

.podwave-root dialog.folder-dialog:modal {
  overscroll-behavior: contain;
}

.podwave-root dialog.folder-dialog::backdrop {
  background: rgba(12, 13, 16, 0.56);
  backdrop-filter: blur(5px);
  overflow: hidden;
  overscroll-behavior: contain;
}

.podwave-root .dlg-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--line);
  flex-shrink: 0;
}

.podwave-root .dlg-head-title {
  display: flex;
  align-items: center;
  gap: 9px;
}

.podwave-root .dlg-head-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
}

.podwave-root .dlg-head h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.podwave-root .dlg-close {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  display: grid;
  place-items: center;
}

.podwave-root .dlg-close:hover { color: var(--text); border-color: var(--line-strong); }

.podwave-root .dlg-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
}

.podwave-root .drop-zone {
  border: 1.5px dashed var(--line-strong);
  border-radius: 8px;
  background: var(--bg);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: border-color 0.14s, background 0.14s;
}

.podwave-root .drop-zone.is-over {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.podwave-root .drop-left {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.podwave-root .drop-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: var(--accent-soft);
  color: var(--accent);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.podwave-root .drop-left strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}

.podwave-root .drop-left span {
  display: block;
  font-size: 13px;
  color: var(--dim);
  margin-top: 2px;
}

.podwave-root .dlg-sec-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.podwave-root .dlg-sec-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--dim);
}

.podwave-root .dlg-sec-meta {
  font-size: 12px;
  color: var(--dim);
}

.podwave-root .dlg-muted {
  margin: 0;
  font-size: 13px;
  color: var(--dim);
}

.podwave-root .suggest-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.podwave-root .suggest-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--bg);
  text-align: left;
  transition: border-color 0.12s, background 0.12s;
}

.podwave-root .suggest-item:hover:not(:disabled) { border-color: var(--accent); }
.podwave-root .suggest-item.is-added { border-color: var(--ok); background: var(--ok-soft); }
.podwave-root .suggest-item.is-overlap { opacity: 0.55; cursor: not-allowed; }

.podwave-root .suggest-info { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px; }
.podwave-root .suggest-name { font-size: 14px; font-weight: 600; color: var(--text); }
.podwave-root .suggest-path {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.podwave-root .suggest-badge {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.podwave-root .suggest-item.is-added .suggest-badge {
  background: var(--ok);
  border-color: var(--ok);
  color: #FFFFFF;
}

.podwave-root .dlg-rescan-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 26px;
  padding: 0 9px;
  border-radius: 5px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--muted);
  font-size: 12px;
}

.podwave-root .dlg-rescan-btn:hover:not(:disabled) { color: var(--text); border-color: var(--line-strong); }

.podwave-root .mounted-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--bg);
  overflow: hidden;
}

.podwave-root .mounted-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-bottom: 1px solid var(--line-soft);
}

.podwave-root .mounted-row:last-child { border-bottom: 0; }
.podwave-root .mounted-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.podwave-root .mounted-name { font-size: 13.5px; font-weight: 600; color: var(--text); }
.podwave-root .mounted-path {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.podwave-root .mounted-count { font-family: var(--font-mono); font-size: 12px; color: var(--muted); font-variant-numeric: tabular-nums; }
.podwave-root .mounted-del {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  border-radius: 5px;
  height: 26px;
  padding: 0 9px;
  font-size: 12px;
}
.podwave-root .mounted-del:hover { color: var(--danger); border-color: var(--danger); background: var(--danger-soft); }

.podwave-root .path-row {
  display: flex;
  gap: 8px;
}

.podwave-root .path-row input {
  flex: 1;
  min-width: 0;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 13px;
  outline: 0;
}

.podwave-root .path-row input:focus { border-color: var(--accent); }
.podwave-root .path-row input::placeholder { color: var(--dim); font-family: inherit; }

.podwave-root .preview-strip {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}

.podwave-root .preview-strip.is-pending { background: var(--surface-2); color: var(--dim); }
.podwave-root .preview-strip.is-ok { background: var(--ok-soft); color: var(--ok); }
.podwave-root .preview-strip.is-err { background: var(--danger-soft); color: var(--danger); }
.podwave-root .preview-code { font-family: var(--font-mono); font-size: 12px; font-weight: 600; flex-shrink: 0; }

.podwave-root .dialog-error { color: var(--danger); font-size: 13px; }

.podwave-root .dlg-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--line);
  background: var(--surface-2);
  font-size: 12px;
  color: var(--dim);
  flex-shrink: 0;
}

.podwave-root .toast {
  position: absolute;
  left: 50%;
  bottom: calc(var(--player-h) + 14px);
  transform: translateX(-50%);
  background: var(--surface);
  border: 1px solid var(--line-strong);
  box-shadow: var(--shadow-card);
  color: var(--text);
  font-size: 13px;
  padding: 9px 14px;
  border-radius: 6px;
  z-index: 35;
  pointer-events: none;
}

/* ---------- \u5B57\u5E55\u9762\u677F & \u53CC\u8BED\u9605\u8BFB ---------- */

.podwave-root .subs-btn {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;
  height: 30px;
  padding: 0 10px;
  border-radius: var(--radius);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  box-shadow: var(--bevel);
  color: var(--text);
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
}
.podwave-root .subs-btn:hover:not(:disabled) { background: var(--surface-2); }
.podwave-root .subs-btn.active { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
.podwave-root .subs-btn:disabled { opacity: 0.45; cursor: default; }

.podwave-root .transcript-panel {
  position: absolute;
  right: 18px;
  bottom: 104px;
  width: min(560px, 52%);
  max-height: 58%;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  box-shadow: var(--shadow-card);
  z-index: 30;
  overflow: visible;
}

.podwave-root .transcript-head {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--line);
  border-radius: 8px 8px 0 0;
}

.podwave-root .transcript-head h3 { margin: 0; font-size: 14px; font-weight: 700; color: var(--text); }
.podwave-root .transcript-meta { color: var(--dim); font-family: var(--font-mono); font-size: 12px; font-variant-numeric: tabular-nums; }
.podwave-root .transcript-actions { margin-left: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.podwave-root .transcript-close { border: 0; background: none; color: var(--muted); font-size: 18px; line-height: 1; padding: 2px 5px; border-radius: 4px; }
.podwave-root .transcript-close:hover { color: var(--text); background: var(--surface); }

.podwave-root .transcript-grip { position: absolute; z-index: 2; }
.podwave-root .transcript-grip.is-left { left: 0; top: 16px; bottom: 16px; width: 7px; cursor: ew-resize; }
.podwave-root .transcript-grip.is-top { top: 0; left: 16px; right: 16px; height: 7px; cursor: ns-resize; }
.podwave-root .transcript-grip.is-left:hover { background: linear-gradient(90deg, var(--accent-soft), transparent); }
.podwave-root .transcript-grip.is-top:hover { background: linear-gradient(180deg, var(--accent-soft), transparent); }

.podwave-root .transcript-resize {
  position: absolute;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  width: 22px;
  height: 22px;
  border: 0;
  padding: 0;
  border-bottom-left-radius: 8px;
  cursor: nesw-resize;
  touch-action: none;
  background-image: repeating-linear-gradient(135deg, var(--muted) 0 1.5px, transparent 1.5px 5px);
  -webkit-mask-image: linear-gradient(135deg, transparent 40%, #000 40%);
  mask-image: linear-gradient(135deg, transparent 40%, #000 40%);
}
.podwave-root .transcript-resize:hover { background-image: repeating-linear-gradient(135deg, var(--accent) 0 1.5px, transparent 1.5px 5px); }

.podwave-root .transcript-resize.is-inline {
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: 12px;
  border-radius: 0 0 8px 8px;
  background-image: none;
  background-color: transparent;
  cursor: ns-resize;
}
.podwave-root .transcript-resize.is-inline::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 3px;
  width: 56px;
  height: 4px;
  transform: translateX(-50%);
  border-radius: 999px;
  background-color: var(--line-strong);
  transition: background-color 0.15s ease, width 0.15s ease;
}
.podwave-root .transcript-resize.is-inline:hover::after {
  width: 84px;
  background-color: var(--accent);
}

.podwave-root .transcript-body { overflow-y: auto; padding: 8px; border-radius: 0 0 8px 8px; flex: 1 1 auto; min-height: 0; }

.podwave-root .seg-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
}
.podwave-root .seg-row:hover { background: var(--surface-2); }
.podwave-root .seg-row.active { background: var(--accent-soft); border-color: var(--accent); }
.podwave-root .seg-row.is-editing { background: var(--surface-2); cursor: default; }

.podwave-root .seg-time {
  flex: none;
  width: 56px;
  color: var(--dim);
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  padding-top: 3px;
}
.podwave-root .seg-row.active .seg-time { color: var(--accent); font-weight: 600; }

.podwave-root .seg-text { font-size: var(--sub-size, 15px); line-height: 1.6; color: var(--text); min-width: 0; flex: 1; }
.podwave-root .seg-trans { display: block; margin-top: 4px; color: var(--muted); font-size: calc(var(--sub-size, 15px) * 0.9); line-height: 1.55; }

.podwave-root .transcript-status { padding: 20px; font-size: 13.5px; color: var(--muted); line-height: 1.65; }
.podwave-root .transcript-status .err { color: var(--danger); white-space: pre-wrap; }

.podwave-root .tr-select {
  height: 28px;
  border-radius: 5px;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  color: var(--text);
  font-size: 12.5px;
  padding: 0 7px;
}

.podwave-root .tr-running { padding: 8px 12px; color: var(--accent); font-size: 12.5px; }
.podwave-root .tr-running.err { color: var(--danger); white-space: pre-wrap; }

.podwave-root .seg-tools { display: flex; gap: 2px; margin-left: auto; opacity: 0; transition: opacity 0.12s ease; }
.podwave-root .seg-row:hover .seg-tools, .podwave-root .seg-row:focus-within .seg-tools { opacity: 1; }
.podwave-root .seg-tool { border: 0; background: none; color: var(--dim); font-size: 12px; padding: 2px 5px; border-radius: 4px; }
.podwave-root .seg-tool:hover { color: var(--accent); background: var(--accent-soft); }
.podwave-root .seg-edit { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 0; }
.podwave-root .seg-edit textarea {
  width: 100%;
  resize: vertical;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--bg);
  color: var(--text);
  font: inherit;
  font-size: 13.5px;
  line-height: 1.55;
  padding: 7px 10px;
}
.podwave-root .seg-edit textarea:focus { outline: none; border-color: var(--accent); }
.podwave-root .seg-edit-actions { display: flex; gap: 12px; }
.podwave-root .tr-issues { margin: 6px 12px 8px; padding: 8px 10px; border: 1px solid var(--danger); border-radius: 6px; background: var(--danger-soft); color: var(--danger); font-size: 12.5px; line-height: 1.6; }

/* \u8BF4\u8BDD\u4EBA\u6807\u7B7E\uFF1A\u9002\u914D\u660E\u6697\u4E24\u79CD\u5BF9\u6BD4\u5EA6 */
.podwave-root .seg-speaker {
  flex: none;
  align-self: flex-start;
  margin-top: 2px;
  padding: 1px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  background: var(--surface-2);
  color: var(--muted);
  white-space: nowrap;
}
.podwave-root .spk-0 { color: var(--teal); background: var(--teal-soft); }
.podwave-root .spk-1 { color: var(--accent); background: var(--accent-soft); }
.podwave-root .spk-2 { color: var(--ok); background: var(--ok-soft); }
.podwave-root .spk-3 { color: var(--text); background: var(--surface-2); border: 1px solid var(--line); }
.podwave-root .spk-4 { color: var(--danger); background: var(--danger-soft); }

.podwave-root .tr-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 2px 4px 8px;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 12.5px;
  position: sticky;
  top: 0;
  z-index: 2;
}

/* ---------- \u5355\u96C6\u8BE6\u60C5\u9875 ---------- */

.podwave-root .detail-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.podwave-root .back-link { border: 0; background: none; color: var(--muted); font-size: 13.5px; font-weight: 500; padding: 4px 0; }
.podwave-root .back-link:hover { color: var(--text); }
.podwave-root .detail-count { color: var(--dim); font-size: 12.5px; }

.podwave-root .episode-view { position: relative; display: flex; gap: 26px; align-items: flex-start; }
.podwave-root .episode-left {
  position: relative;
  flex: 0 0 var(--episode-left-w, 256px);
  width: var(--episode-left-w, 256px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--bevel);
}

.podwave-root .episode-split {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -27px;
  width: 28px;
  z-index: 6;
  border: 0;
  padding: 0;
  background: none;
  cursor: ew-resize;
  touch-action: none;
}
.podwave-root .episode-split::after {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 12px;
  width: 3px;
  border-radius: 999px;
  background: var(--line-strong);
  opacity: 0.7;
  transition: background 0.15s, opacity 0.15s;
}
.podwave-root .episode-split:hover::after { background: var(--accent); opacity: 1; }

.podwave-root .episode-cover { width: 100%; aspect-ratio: 1 / 1; border-radius: 6px; overflow: hidden; border: 1px solid var(--line); background: var(--surface-2); position: relative; }
.podwave-root .episode-cover .cover { width: 100% !important; height: 100% !important; object-fit: cover; border-radius: 0; border: 0; }

.podwave-root .cover-swap { position: relative; display: block; width: 100%; height: 100%; padding: 0; border: 0; background: none; color: inherit; }
.podwave-root .cover-swap:disabled { cursor: progress; }
.podwave-root .cover-swap-hint {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 26px 0 10px;
  font-size: 12.5px; text-align: center; color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0));
  opacity: 0; transition: opacity 0.16s ease;
}
.podwave-root .cover-swap:hover .cover-swap-hint,
.podwave-root .cover-swap:focus-visible .cover-swap-hint { opacity: 1; }

.podwave-root .episode-title { margin: 4px 0 0; font-size: 18px; font-weight: 700; line-height: 1.35; color: var(--text); }
.podwave-root .episode-sub { margin: 0; color: var(--muted); font-size: 13px; }
.podwave-root .episode-path { margin: 0; color: var(--dim); font-family: var(--font-mono); font-size: 12px; word-break: break-all; }
.podwave-root .episode-stats { margin: 0; color: var(--dim); font-family: var(--font-mono); font-size: 12px; font-variant-numeric: tabular-nums; }
.podwave-root .episode-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; }
.podwave-root .episode-right { position: relative; flex: 1; min-width: 0; }

.podwave-root .transcript-panel.inline {
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  width: auto;
  max-height: none;
  height: min(580px, calc(100vh - 280px));
  min-height: 360px;
  box-shadow: none;
}

.podwave-root .episode-notes { margin-top: 8px; border-top: 1px solid var(--line); padding-top: 10px; }
.podwave-root .notes-head { background: none; border: 0; color: var(--accent); font-size: 12.5px; font-weight: 500; padding: 0; }
.podwave-root .notes-head:hover { text-decoration: underline; }
.podwave-root .notes-body { margin: 8px 0 0; color: var(--muted); font-size: 13px; line-height: 1.65; white-space: pre-line; word-break: break-word; max-height: 96px; overflow: hidden; mask-image: linear-gradient(#000 55%, transparent); }
.podwave-root .episode-notes.is-open .notes-body { max-height: none; mask-image: none; }

@media (max-width: 1024px) {
  .podwave-root .episode-view { flex-direction: column; align-items: stretch; }
  .podwave-root .episode-left { flex: auto; width: 100%; }
  .podwave-root .episode-cover { max-width: 240px; }
  .podwave-root .episode-right { width: 100%; flex: none; }
  .podwave-root .episode-split { display: none; }
  .podwave-root .transcript-panel.inline { width: 100%; height: 420px; }
}

/* ---------- \u5F39\u51FA\u83DC\u5355 / \u500D\u901F / \u7761\u7720 / \u4EFB\u52A1\u9762\u677F ---------- */

.podwave-root .pop-wrap { position: relative; display: inline-flex; }
.podwave-root .pop-btn {
  border: 1px solid transparent;
  background: none;
  padding: 3px 7px;
  border-radius: 5px;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.5;
}
.podwave-root .pop-btn:hover { color: var(--text); background: var(--surface); border-color: var(--line); }

.podwave-root .pop-panel,
.podwave-root .rate-menu,
.podwave-root .sleep-menu {
  position: absolute;
  right: 0;
  z-index: 45;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
}

.podwave-root .pop-panel { top: calc(100% + 6px); min-width: 176px; }
.podwave-root .pop-panel.is-start { right: auto; left: 0; }
.podwave-root .pop-panel.is-up { top: auto; bottom: calc(100% + 6px); }
.podwave-root .rate-wrap, .podwave-root .sleep-wrap { position: relative; display: inline-flex; flex-shrink: 0; }
.podwave-root .rate-menu { bottom: calc(100% + 8px); min-width: 76px; }
.podwave-root .sleep-menu { bottom: calc(100% + 8px); min-width: 128px; }

.podwave-root .pop-item,
.podwave-root .rate-menu button,
.podwave-root .sleep-menu button {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 6px 9px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--text);
  font-size: 13px;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
}

.podwave-root .pop-item:hover:not(:disabled),
.podwave-root .rate-menu button:hover,
.podwave-root .sleep-menu button:hover { background: var(--surface-2); color: var(--accent); }

.podwave-root .pop-item.is-on > span:first-child::before { content: '\u2713 '; color: var(--accent); }
.podwave-root .rate-menu button.is-on,
.podwave-root .sleep-menu button.is-on { color: var(--accent); font-weight: 600; }
.podwave-root .pop-item.is-danger { color: var(--danger); }
.podwave-root .pop-item.is-danger:hover:not(:disabled) { background: var(--danger-soft); color: var(--danger); }
.podwave-root .pop-item:disabled { color: var(--dim); opacity: 0.55; cursor: default; }
.podwave-root .pop-hint { color: var(--dim); font-size: 12px; }
.podwave-root .pop-fs { display: flex; align-items: center; padding: 4px 6px 2px; }

.podwave-root .batch-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  padding: 10px 14px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background: var(--accent-soft);
  font-size: 13px;
  color: var(--text);
}
.podwave-root .batch-bar > span:first-child { margin-right: auto; font-weight: 600; }

.podwave-root .jobs-panel {
  position: absolute;
  top: 90px;
  right: 26px;
  width: min(390px, calc(100% - 52px));
  max-height: calc(100% - 120px);
  z-index: 30;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
.podwave-root .jobs-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: var(--surface-2); border-bottom: 1px solid var(--line); }
.podwave-root .jobs-head h3 { margin: 0; font-size: 13.5px; font-weight: 700; }
.podwave-root .jobs-body { max-height: min(300px, calc(100vh - 260px)); overflow-y: auto; padding: 6px 8px; }
.podwave-root .jobs-empty { margin: 10px 8px; color: var(--dim); font-size: 13px; }
.podwave-root .job-row { display: flex; align-items: center; gap: 10px; padding: 9px 8px; border-radius: 6px; }
.podwave-root .job-row + .job-row { border-top: 1px solid var(--line-soft); }
.podwave-root .job-row:hover { background: var(--surface-2); }
.podwave-root .job-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.podwave-root .job-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; font-weight: 500; }
.podwave-root .job-meta { color: var(--dim); font-size: 12px; }
.podwave-root .job-bar { display: block; width: 100%; height: 4px; margin-top: 4px; border-radius: 2px; background: var(--line); overflow: hidden; }
.podwave-root .job-bar > span { display: block; height: 100%; background: var(--accent); transition: width 0.3s ease; }
.podwave-root .job-actions { display: flex; gap: 10px; flex: none; }
.podwave-root .job-done .job-meta { color: var(--ok); }
.podwave-root .job-error .job-meta, .podwave-root .job-interrupted .job-meta { color: var(--danger); }
.podwave-root .jobs-foot { display: flex; gap: 10px; padding: 12px 14px; background: var(--surface-2); border-top: 1px solid var(--line); flex-wrap: wrap; }
.podwave-root .mini-link { border: 0; background: none; padding: 2px 4px; color: var(--muted); font-size: 12.5px; }
.podwave-root .mini-link:hover { color: var(--accent); }
.podwave-root .mini-link.is-primary { color: var(--accent); font-weight: 600; }
.podwave-root .mini-link.is-busy { cursor: default; opacity: 0.66; }

/* \u5B57\u5E55\u641C\u7D22\u7ED3\u679C & \u5C0F\u5B87\u5B99 & \u5B9E\u65F6\u8BB0\u5F55 */

.podwave-root .search-hits { border: 1px solid var(--line); border-radius: 8px; margin: 0 0 18px; overflow: hidden; background: var(--surface); }
.podwave-root .search-hits .list-head { display: flex; justify-content: space-between; padding: 8px 14px; border-bottom: 1px solid var(--line); font-size: 12px; color: var(--dim); }
.podwave-root .hit-row { display: grid; grid-template-columns: 58px minmax(0, 1fr) auto; gap: 10px; align-items: center; width: 100%; padding: 9px 14px; background: none; border: 0; border-bottom: 1px solid var(--line-soft); color: inherit; text-align: left; }
.podwave-root .hit-row:last-child { border-bottom: 0; }
.podwave-root .hit-row:hover { background: var(--surface-2); }
.podwave-root .hit-time { font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--dim); font-size: 12px; }
.podwave-root .hit-text { font-size: 13.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.podwave-root .hit-title { font-size: 12px; color: var(--dim); max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.podwave-root .xyz-panel { padding: 4px 0 72px; max-width: 1040px; }
.podwave-root .xyz-hint { color: var(--muted); font-size: 13px; margin: 10px 0; }
.podwave-root .xyz-error { color: var(--danger); font-size: 13px; margin-top: 12px; }
.podwave-root .xyz-notice { color: var(--muted); font-size: 13px; line-height: 1.7; background: var(--surface-2); border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; }
.podwave-root .xyz-login { max-width: 560px; background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 22px 24px; margin-top: 8px; }
.podwave-root .xyz-login h2 { font-size: 18px; margin: 0 0 10px; }
.podwave-root .xyz-fields { display: flex; gap: 10px; align-items: flex-end; margin-top: 14px; }
.podwave-root .xyz-fields label, .podwave-root .xyz-advanced label { flex: 1; display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; color: var(--muted); }
.podwave-root .xyz-fields input, .podwave-root .xyz-advanced input { background: var(--bg); border: 1px solid var(--line-strong); border-radius: 6px; color: var(--text); padding: 9px 11px; font-size: 13.5px; outline: none; }
.podwave-root .xyz-fields input:focus, .podwave-root .xyz-advanced input:focus { border-color: var(--accent); }
.podwave-root .xyz-link { background: none; border: 0; color: var(--accent); font-size: 12.5px; padding: 12px 0 0; }
.podwave-root .xyz-advanced { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.podwave-root .xyz-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin: 4px 0 14px; }
.podwave-root .xyz-podcast-title { font-size: 19px; font-weight: 700; }
.podwave-root .xyz-subs { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; margin-top: 12px; }
.podwave-root .xyz-sub-card { display: flex; gap: 12px; align-items: center; text-align: left; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 11px; color: var(--text); box-shadow: var(--bevel); }
.podwave-root .xyz-sub-card:hover { background: var(--surface-2); border-color: var(--line-strong); }
.podwave-root .xyz-cover { width: 54px; height: 54px; border-radius: 6px; object-fit: cover; background: var(--surface-2); border: 1px solid var(--line); flex: none; }
.podwave-root .xyz-cover-empty { background: var(--surface-2); }
.podwave-root .xyz-sub-text { min-width: 0; }
.podwave-root .xyz-sub-title { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.podwave-root .xyz-sub-meta { font-size: 12px; color: var(--dim); margin-top: 3px; }
.podwave-root .xyz-eps { display: flex; flex-direction: column; gap: 8px; }
.podwave-root .xyz-ep { display: flex; align-items: center; gap: 14px; justify-content: space-between; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; }
.podwave-root .xyz-ep.is-current { border-color: var(--accent); background: var(--accent-soft); }
.podwave-root .xyz-ep-main { min-width: 0; }
.podwave-root .xyz-ep-title { font-size: 14px; font-weight: 600; }
.podwave-root .xyz-ep-meta { font-size: 12px; color: var(--dim); margin-top: 4px; }
.podwave-root .xyz-more { align-self: center; margin-top: 8px; }
.podwave-root .xyz-steps { margin: 14px 0 6px; padding-left: 20px; color: var(--muted); font-size: 13px; line-height: 1.9; }
.podwave-root .xyz-steps code { background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px; padding: 1px 5px; font-family: var(--font-mono); font-size: 12px; }
.podwave-root .xyz-actions { margin-top: 12px; }
.podwave-root .xyz-public { margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 10px; }
.podwave-root .xyz-public h3 { margin: 0; font-size: 14px; font-weight: 700; }
.podwave-root .xyz-head-actions { display: flex; gap: 8px; align-items: center; }

.podwave-root .live-history-panel { padding-top: 4px; }
.podwave-root .live-history-list { display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; overflow: hidden; }
.podwave-root .live-history-card { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 14px 16px; border-bottom: 1px solid var(--line-soft); cursor: pointer; }
.podwave-root .live-history-card:last-child { border-bottom: 0; }
.podwave-root .live-history-card:hover { background: var(--surface-2); }
.podwave-root .live-history-card-main { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 4px; }
.podwave-root .live-history-card-title { font-size: 14.5px; font-weight: 600; color: var(--text); }
.podwave-root .live-history-card-meta { font-family: var(--font-mono); font-size: 12px; color: var(--dim); font-variant-numeric: tabular-nums; }
.podwave-root .live-history-card-preview { font-size: 13px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.podwave-root .live-history-card-ops { display: flex; gap: 10px; flex: none; align-items: center; }
.podwave-root .live-history-detail { display: flex; flex-direction: column; gap: 10px; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 18px 20px; }
.podwave-root .live-history-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-left: auto; }
.podwave-root .live-history-title { margin: 4px 0 0; font-size: 18px; font-weight: 700; color: var(--text); }
.podwave-root .live-history-sub { margin: 0 0 6px; font-size: 12.5px; color: var(--dim); }
.podwave-root .live-history-lines { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.podwave-root .live-history-line { display: flex; gap: 12px; padding: 10px 6px; border-bottom: 1px solid var(--line-soft); }

/* \u5B9E\u65F6\u5B57\u5E55\u5185\u5D4C\u964D\u7EA7\u6D6E\u5C42 + \u5B57\u53F7\u6ED1\u5757 */

.podwave-root .sub-size { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--muted); white-space: nowrap; }
.podwave-root .sub-size input[type="range"] { width: 92px; height: 4px; margin: 0; accent-color: var(--accent); cursor: pointer; }
.podwave-root .sub-size.compact input[type="range"] { width: 64px; }
.podwave-root .sub-size-value { min-width: 18px; text-align: right; font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--text); }
.podwave-root .sub-size.compact .sub-size-label { display: none; }

.podwave-root .live-caption {
  position: fixed;
  left: 50%;
  bottom: 102px;
  transform: translateX(-50%);
  z-index: 70;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(680px, calc(100vw - 40px));
  max-height: min(46vh, 460px);
  padding: 11px 14px;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  box-shadow: var(--shadow-modal);
}
.podwave-root .live-caption-head { display: flex; align-items: center; gap: 8px; cursor: grab; user-select: none; }
.podwave-root .live-caption-head:active { cursor: grabbing; }
.podwave-root .live-caption-dot { flex: 0 0 auto; width: 7px; height: 7px; border-radius: 50%; background: var(--dim); }
.podwave-root .live-caption-dot[data-live="on"] { background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
.podwave-root .live-caption-title { font-size: 13px; font-weight: 700; }
.podwave-root .live-caption-meta { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dim); font-family: var(--font-mono); font-size: 12px; font-variant-numeric: tabular-nums; }
.podwave-root .live-caption-close { flex: 0 0 auto; margin-left: auto; }
.podwave-root .live-caption-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 2px 2px 4px; }
.podwave-root .live-line { display: flex; flex-direction: column; gap: 2px; }
.podwave-root .live-line-text { margin: 0; color: var(--text); line-height: 1.5; }
.podwave-root .live-line-tr { margin: 0; color: var(--muted); line-height: 1.45; }
.podwave-root .live-caption-empty { margin: 0; padding: 10px 2px; color: var(--dim); font-size: 13px; }
.podwave-root .live-caption-error { margin: 0; color: var(--danger); font-size: 12.5px; }
.podwave-root .live-caption-foot { display: flex; align-items: center; gap: 8px; padding-top: 8px; border-top: 1px solid var(--line); }
.podwave-root .live-caption-ask { flex: 1 1 auto; min-width: 0; color: var(--text); font-size: 13px; }

.podwave-root .live-mode-switch {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border-radius: 6px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  margin-right: auto;
}
.podwave-root .live-mode-switch button {
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  padding: 3px 9px;
}
.podwave-root .live-mode-switch button:hover { color: var(--text); }
.podwave-root .live-mode-switch button.is-on { background: var(--surface); color: var(--accent); font-weight: 600; }

.podwave-root .live-meter { height: 3px; border-radius: 999px; background: var(--line); overflow: hidden; }
.podwave-root .live-meter span { display: block; height: 100%; border-radius: 999px; background: var(--dim); transition: width 0.18s linear; }
.podwave-root .live-meter.is-live span { background: var(--accent); }
.podwave-root .live-caption-note { margin: 0; font-size: 12.5px; line-height: 1.55; color: var(--muted); }

.podwave-root .caption-resize {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  touch-action: none;
  opacity: 0.65;
  background:
    linear-gradient(135deg, transparent 46%, var(--muted) 46%, var(--muted) 54%, transparent 54%) no-repeat,
    linear-gradient(135deg, transparent 68%, var(--muted) 68%, var(--muted) 74%, transparent 74%) no-repeat;
}
.podwave-root .caption-resize:hover { opacity: 1; }

.podwave-root .drop-hint {
  position: absolute;
  inset: 10px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--accent);
  border-radius: 10px;
  background: var(--surface);
  opacity: 0.94;
  color: var(--accent);
  font-size: 16px;
  font-weight: 600;
  pointer-events: none;
  text-align: center;
}
.podwave-root .drop-hint span:last-child { font-size: 13px; color: var(--muted); font-weight: 400; }

/* ---------- \u8BBE\u7F6E\u9875\uFF08Studio Deck \u5361\u7247\u4F53\u7CFB + \u5916\u89C2\u4E09\u6001\u9884\u89C8\uFF09 ---------- */

.podwave-root .podwave-settings { height: auto; overflow: visible; padding: 0; color: var(--text); font-size: 14px; max-width: 820px; }
.podwave-root .podwave-settings .settings-head { margin-bottom: 16px; }
.podwave-root .podwave-settings .settings-head h1 { margin: 0 0 4px; font-size: 18px; font-weight: 700; color: var(--text); }
.podwave-root .podwave-settings .settings-head p { margin: 0; font-size: 13px; color: var(--dim); }

.podwave-root .podwave-settings .settings-stale {
  margin: 0 0 14px;
  padding: 11px 14px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background: var(--accent-soft);
  color: var(--text);
  font-size: 13px;
  line-height: 1.6;
}
.podwave-root .podwave-settings .settings-message {
  margin: 0 0 12px;
  padding: 8px 12px;
  border-radius: 6px;
  background: var(--ok-soft);
  color: var(--ok);
  font-size: 13px;
  font-weight: 500;
}

.podwave-root .podwave-settings .settings-card {
  margin-top: 14px;
  padding: 18px 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--bevel);
}
.podwave-root .podwave-settings .settings-card:first-of-type { margin-top: 0; }
.podwave-root .podwave-settings .settings-card h2 { margin: 0 0 4px; font-size: 15.5px; font-weight: 700; color: var(--text); }
.podwave-root .podwave-settings .settings-hint { margin: 0 0 14px; font-size: 13px; color: var(--dim); }

/* \u5916\u89C2\u6A21\u5F0F\u9884\u89C8\u5361\u7247 */
.podwave-root .podwave-settings .theme-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.podwave-root .podwave-settings .theme-card {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: var(--bg);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.14s, background 0.14s;
}

.podwave-root .podwave-settings .theme-card:hover { border-color: var(--line-strong); }
.podwave-root .podwave-settings .theme-card.is-active {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}

.podwave-root .podwave-settings .theme-swatch {
  height: 54px;
  border-radius: 5px;
  border: 1px solid var(--line);
  overflow: hidden;
  display: grid;
  grid-template-columns: 32% 68%;
}
.podwave-root .podwave-settings .theme-swatch.sw-sys { grid-template-columns: 1fr 1fr; }
.podwave-root .podwave-settings .sw-light-l { background: #EAE8E2; border-right: 1px solid #D5D2C9; }
.podwave-root .podwave-settings .sw-light-r { background: #FCFBF9; padding: 8px; display: flex; flex-direction: column; gap: 6px; }
.podwave-root .podwave-settings .sw-dark-l { background: #17191D; border-right: 1px solid #2C3039; }
.podwave-root .podwave-settings .sw-dark-r { background: #1C1E23; padding: 8px; display: flex; flex-direction: column; gap: 6px; }
.podwave-root .podwave-settings .sw-bar { height: 7px; border-radius: 2px; }
.podwave-root .podwave-settings .sw-bar.is-a { background: #D64526; width: 46%; }
.podwave-root .podwave-settings .sw-bar.is-b { background: #C9C5B9; width: 82%; }
.podwave-root .podwave-settings .sw-bar.is-c { background: #DEDBD2; width: 60%; }
.podwave-root .podwave-settings .sw-bar.is-a-dark { background: #F05E3D; width: 46%; }
.podwave-root .podwave-settings .sw-bar.is-b-dark { background: #404654; width: 82%; }
.podwave-root .podwave-settings .sw-bar.is-c-dark { background: #2C3039; width: 60%; }
.podwave-root .podwave-settings .theme-card-txt strong { display: block; font-size: 14px; font-weight: 600; color: var(--text); }
.podwave-root .podwave-settings .theme-card-txt span { display: block; font-size: 12px; color: var(--dim); margin-top: 2px; }

.podwave-root .podwave-settings .card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
}
.podwave-root .podwave-settings .card-head h2 { margin: 0; }
.podwave-root .podwave-settings .card-head:hover h2 { color: var(--accent); }
.podwave-root .podwave-settings .card-badge { margin-left: auto; color: var(--dim); font-size: 12px; }
.podwave-root .podwave-settings .card-caret { color: var(--dim); font-size: 12px; line-height: 1; transition: transform 0.15s ease; }
.podwave-root .podwave-settings .collapsible.is-open .card-caret { transform: rotate(180deg); }

.podwave-root .podwave-settings .setup-warning { color: var(--accent); font-size: 13px; }
.podwave-root .podwave-settings .settings-empty { margin: 4px 0 0; font-size: 13px; color: var(--dim); }
.podwave-root .podwave-settings .history-list { list-style: none; margin: 4px 0 0; padding: 0; }
.podwave-root .podwave-settings .history-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 9px 0; border-top: 1px solid var(--line-soft); }
.podwave-root .podwave-settings .history-row:first-child { border-top: 0; padding-top: 2px; }
.podwave-root .podwave-settings .history-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .history-title { font-size: 13.5px; color: var(--text); }
.podwave-root .podwave-settings .history-meta { font-size: 12px; color: var(--dim); }
.podwave-root .podwave-settings .history-date { font-family: var(--font-mono); font-size: 12px; white-space: nowrap; color: var(--dim); }

.podwave-root .podwave-settings .model-path { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px; padding: 10px 12px; margin: 0 0 12px; border-radius: 6px; background: var(--bg); border: 1px solid var(--line); }
.podwave-root .podwave-settings .model-path-text { font-family: var(--font-mono); font-size: 12.5px; line-height: 1.5; word-break: break-all; }
.podwave-root .podwave-settings .model-path-size { font-size: 12px; white-space: nowrap; color: var(--dim); }
.podwave-root .podwave-settings .model-list { list-style: none; margin: 12px 0 0; padding: 0; }
.podwave-root .podwave-settings .model-row { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 9px 0; border-top: 1px solid var(--line-soft); }
.podwave-root .podwave-settings .model-row:first-child { border-top: 0; }
.podwave-root .podwave-settings .model-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.podwave-root .podwave-settings .model-name { font-size: 13px; font-family: var(--font-mono); }
.podwave-root .podwave-settings .model-meta { font-size: 12px; color: var(--dim); }
.podwave-root .podwave-settings .model-remove { flex: 0 0 auto; }

.podwave-root .podwave-settings .settings-fields { display: flex; flex-direction: column; gap: 10px; }
.podwave-root .podwave-settings .field-row { display: flex; align-items: center; gap: 12px; min-width: 0; }
.podwave-root .podwave-settings .field-row > span:first-child { flex: 0 0 118px; font-size: 13px; color: var(--muted); }
.podwave-root .podwave-settings .field-row select,
.podwave-root .podwave-settings .field-row input[type="text"],
.podwave-root .podwave-settings .field-row input[type="password"],
.podwave-root .podwave-settings .field-row input[type="number"],
.podwave-root .podwave-settings .field-row input:not([type]) {
  min-width: 0;
  flex: 1 1 auto;
  max-width: 340px;
  height: 34px;
  padding: 0 10px;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  font-size: 13.5px;
  outline: none;
}
.podwave-root .podwave-settings .field-row input[type="range"] {
  flex: 1 1 auto;
  max-width: 320px;
  accent-color: var(--accent);
}
.podwave-root .podwave-settings .field-row select:focus,
.podwave-root .podwave-settings .field-row input:focus { border-color: var(--accent); }
.podwave-root .podwave-settings .field-row select option { color: var(--text); background: var(--surface); }

.podwave-root .podwave-settings .settings-status { flex: none; font-family: var(--font-mono); font-size: 12px; color: var(--dim); font-variant-numeric: tabular-nums; }
.podwave-root .podwave-settings .settings-status.is-warn { color: var(--danger); }
.podwave-root .podwave-settings .settings-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.podwave-root .podwave-settings .settings-btn {
  height: 32px;
  padding: 0 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  color: var(--text);
  background: var(--surface-2);
  font-size: 13px;
  font-weight: 500;
}
.podwave-root .podwave-settings .settings-btn:hover:not(:disabled) { border-color: var(--accent); }
.podwave-root .podwave-settings .settings-btn:disabled { opacity: 0.45; cursor: default; }
.podwave-root .podwave-settings .settings-btn.ghost { background: var(--bg); }
.podwave-root .podwave-settings .settings-btn.is-mini { height: 28px; padding: 0 10px; font-size: 12px; flex: none; }
.podwave-root .podwave-settings .check-row { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: var(--text); cursor: pointer; }
.podwave-root .podwave-settings .check-row input { width: 15px; height: 15px; accent-color: var(--accent); }

.podwave-root .podwave-settings .preset-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-bottom: 12px; }
@media (max-width: 680px) {
  .podwave-root .podwave-settings .preset-grid,
  .podwave-root .podwave-settings .theme-cards { grid-template-columns: 1fr; }
}

.podwave-root .podwave-settings .preset-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 13px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  text-align: left;
  transition: border-color 0.14s, background 0.14s;
}
.podwave-root .podwave-settings .preset-card:hover:not(:disabled) { border-color: var(--line-strong); background: var(--surface-2); }
.podwave-root .podwave-settings .preset-card.is-active { border-color: var(--accent); background: var(--accent-soft); }
.podwave-root .podwave-settings .preset-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.podwave-root .podwave-settings .preset-title { font-size: 14px; font-weight: 600; }
.podwave-root .podwave-settings .preset-tag { padding: 1px 7px; border-radius: 4px; font-size: 12px; color: var(--muted); background: var(--surface-2); border: 1px solid var(--line); }
.podwave-root .podwave-settings .preset-tag.is-active { color: var(--accent-ink); background: var(--accent); border-color: var(--accent); font-weight: 600; }
.podwave-root .podwave-settings .preset-desc { margin: 0; font-size: 12.5px; line-height: 1.5; color: var(--muted); }
.podwave-root .podwave-settings .preset-summary { display: flex; flex-wrap: wrap; gap: 8px; font-size: 12.5px; color: var(--dim); }

.podwave-root .podwave-settings .advanced-body { display: flex; flex-direction: column; gap: 18px; margin-top: 16px; }
.podwave-root .podwave-settings .adv-group { padding-top: 14px; border-top: 1px solid var(--line-soft); }
.podwave-root .podwave-settings .adv-group:first-child { padding-top: 0; border-top: 0; }
.podwave-root .podwave-settings .adv-group h3 { margin: 0 0 10px; font-size: 13.5px; font-weight: 700; color: var(--text); }

.podwave-root .setup-platform { margin: 2px 0 12px; font-size: 12.5px; color: var(--muted); }
.podwave-root .setup-components { list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 7px; }
.podwave-root .setup-component { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--muted); }
.podwave-root .setup-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--danger); flex: none; }
.podwave-root .setup-component.ready .setup-dot { background: var(--ok); }
.podwave-root .setup-component-label { color: var(--text); min-width: 148px; }
.podwave-root .setup-component-detail { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.podwave-root .setup-component-size { flex: none; font-family: var(--font-mono); font-size: 12px; }
.podwave-root .setup-job { margin-top: 14px; }
.podwave-root .setup-job-line { display: flex; justify-content: space-between; font-size: 12.5px; color: var(--muted); margin-bottom: 6px; }
.podwave-root .setup-progress { height: 4px; background: var(--line); border-radius: 2px; overflow: hidden; }
.podwave-root .setup-progress span { display: block; height: 100%; background: var(--accent); transition: width 0.3s; }

/* ---------- \u5BB9\u5668\u67E5\u8BE2 & \u54CD\u5E94\u5F0F ---------- */

@container (max-width: 1120px) {
  .podwave-root .volume { width: 56px; }
}

@container (max-width: 980px) {
  .podwave-root .volume { display: none; }
  .podwave-root .player { padding: 0 14px 8px; }
  .podwave-root .player-body { gap: 10px; }
  .podwave-root .continue-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .podwave-root .shell { grid-template-columns: 210px minmax(0, 1fr); }
  .podwave-root .main { padding: 18px 18px 38px; }
  .podwave-root .suggest-grid { grid-template-columns: 1fr; }
}

@container (max-width: 900px) {
  .podwave-root .episode-view { flex-direction: column; align-items: stretch; gap: 18px; }
  .podwave-root .episode-left { flex: none; width: 100%; max-width: 360px; }
  .podwave-root .episode-split { display: none; }
  .podwave-root .episode-right { flex: none; width: 100%; }
  .podwave-root .transcript-panel.inline { width: 100%; height: 420px; min-height: 0; }
}

@container (max-width: 820px) {
  .podwave-root .shell { grid-template-columns: minmax(0, 1fr); }
  .podwave-root .sidebar { display: none; }
  .podwave-root .main { min-width: 0; }
  .podwave-root .player-right .sleep-wrap { display: none; }
  .podwave-root .tools .search input { width: 130px; }
  .podwave-root .list-head, .podwave-root .row { grid-template-columns: 28px minmax(0, 1fr) 76px 22px; }
  .podwave-root .row-progress, .podwave-root .list-head .col-progress { display: none; }
}

@container (max-width: 680px) {
  .podwave-root .player-right .time { display: none; }
  .podwave-root .skip-btn { display: none; }
  .podwave-root .podwave-settings .preset-grid,
  .podwave-root .podwave-settings .theme-cards { grid-template-columns: 1fr; }
}

@container (max-width: 540px) {
  .podwave-root .player-right .rate-wrap { display: none; }
}

@media (max-width: 980px) {
  .podwave-root .continue-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .podwave-root .shell { grid-template-columns: 210px minmax(0, 1fr); }
  .podwave-root .main { padding: 18px 18px 38px; }
  .podwave-root .suggest-grid { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .podwave-root .shell { grid-template-columns: 1fr; }
  .podwave-root .sidebar { display: none; }
  .podwave-root .tools .search input { width: 120px; }
  .podwave-root .list-head, .podwave-root .row { grid-template-columns: 28px minmax(0, 1fr) 76px 22px; }
  .podwave-root .row-progress, .podwave-root .list-head .col-progress { display: none; }
  .podwave-root .player-right .sleep-wrap,
  .podwave-root .player-right .volume { display: none; }
}
`;var t=it(require("react"),1);var D=it(require("react"),1);function pe({name:a,size:i=18}){let r={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};switch(a){case"play":return D.default.createElement("svg",{...r,fill:"currentColor",stroke:"none"},D.default.createElement("path",{d:"M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z"}));case"pause":return D.default.createElement("svg",{...r,fill:"currentColor",stroke:"none"},D.default.createElement("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:"1"}),D.default.createElement("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:"1"}));case"prev":return D.default.createElement("svg",{...r,fill:"currentColor",stroke:"none"},D.default.createElement("path",{d:"M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z"}),D.default.createElement("path",{d:"M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z"}));case"next":return D.default.createElement("svg",{...r,fill:"currentColor",stroke:"none"},D.default.createElement("path",{d:"M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z"}),D.default.createElement("path",{d:"M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z"}));case"plus":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M12 5v14M5 12h14"}));case"search":return D.default.createElement("svg",{...r},D.default.createElement("circle",{cx:"10.5",cy:"10.5",r:"6"}),D.default.createElement("path",{d:"m15 15 4 4"}));case"folder":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}));case"volume":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),D.default.createElement("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"}));case"mute":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z",fill:"currentColor",stroke:"none"}),D.default.createElement("path",{d:"m16 9.5 5 5M21 9.5l-5 5"}));case"tasks":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"}));case"check":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"m5 12.5 4.5 4.5L19 7"}));case"wave":return D.default.createElement("svg",{...r,fill:"currentColor",stroke:"none"},D.default.createElement("rect",{x:"4",y:"10",width:"2",height:"4",rx:"1"}),D.default.createElement("rect",{x:"8",y:"7",width:"2",height:"10",rx:"1"}),D.default.createElement("rect",{x:"12",y:"4",width:"2",height:"16",rx:"1"}),D.default.createElement("rect",{x:"16",y:"8",width:"2",height:"8",rx:"1"}),D.default.createElement("rect",{x:"20",y:"11",width:"2",height:"2",rx:"1"}));case"chevron-left":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"m14.5 6-6 6 6 6"}));case"chevron-right":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"m9.5 6 6 6-6 6"}));case"close":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));case"sun":return D.default.createElement("svg",{...r},D.default.createElement("circle",{cx:"12",cy:"12",r:"4"}),D.default.createElement("path",{d:"M12 2.5v2M12 19.5v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2.5 12h2M19.5 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"}));case"moon":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"}));case"monitor":return D.default.createElement("svg",{...r},D.default.createElement("rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}),D.default.createElement("path",{d:"M8 20h8M12 16v4"}));case"folder-plus":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z"}),D.default.createElement("path",{d:"M12 10.5v4.5M9.75 12.75h4.5"}));case"refresh":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M20 11a8 8 0 0 0-14.5-4.5M4 4v3.5h3.5"}),D.default.createElement("path",{d:"M4 13a8 8 0 0 0 14.5 4.5M20 20v-3.5h-3.5"}));case"trash":return D.default.createElement("svg",{...r},D.default.createElement("path",{d:"M4 7h16M9.5 4h5M10 11v6M14 11v6"}),D.default.createElement("path",{d:"M6.5 7l.8 11.2c.1 1 .9 1.8 1.9 1.8h5.6c1 0 1.8-.8 1.9-1.8L17.5 7"}));default:return null}}var jn=it(require("react"),1);function He(a){if(!Number.isFinite(a)||a<0)return"0:00";let i=Math.floor(a),r=Math.floor(i/3600),p=Math.floor(i%3600/60),v=i%60;return r>0?`${r}:${String(p).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${p}:${String(v).padStart(2,"0")}`}function Ro(a){if(!a)return"\u2014";let i=Math.floor(a/3600),r=Math.round(a%3600/60);return i>0?`${i} \u5C0F\u65F6 ${r} \u5206`:`${Math.max(1,r)} \u5206\u949F`}function Ao(a){if(!a)return"";let i=new Date(a),r=Date.now()-a;return r<60*1e3?"\u521A\u521A":r<3600*1e3?`${Math.floor(r/6e4)} \u5206\u949F\u524D`:r<1440*60*1e3?`${Math.floor(r/36e5)} \u5C0F\u65F6\u524D`:r<10080*60*1e3?`${Math.floor(r/864e5)} \u5929\u524D`:`${i.getMonth()+1} \u6708 ${i.getDate()} \u65E5`}function La(a){let r=String(a||"").trim().match(/[A-Za-z\u3400-\u9fff]/);return r?r[0].toUpperCase():"\u266B"}function Oo(a){let i=String(a).split("/").filter(Boolean);return i.length<=2?`/${i.join("/")}`:`${i.slice(-2).join("/")}`}var Vr="/podwave/api";function Bo({item:a,size:i=44,className:r=""}){let p={width:i,height:i};if(a&&a.hasCover){let v=a.coverAt?`?v=${a.coverAt}`:"";return jn.default.createElement("img",{className:`cover ${r}`,style:p,src:`${Vr}/episodes/${a.id}/cover${v}`,alt:"",loading:"lazy",draggable:!1})}return jn.default.createElement("div",{className:`cover cover-fallback ${r}`,style:p,"aria-hidden":!0},La(a&&a.title))}var y=it(require("react"),1);var Ia="/podwave/api";async function _r(a){let i=await fetch(a),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(r.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return r}async function Kr(a,i){let r=await fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i??{})}),p=await r.json().catch(()=>({}));if(!r.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${r.status}\uFF09`);return p}function Fn({folders:a=[],items:i=[],onSubmit:r,onPick:p,onRemoveFolder:v,onRescan:g,onDropFiles:h,onClose:z}){let N=(0,y.useRef)(null),C=(0,y.useRef)(null),I=(0,y.useRef)(z);I.current=z;let[L,j]=(0,y.useState)(""),[$,k]=(0,y.useState)(!1),[A,K]=(0,y.useState)(!1),[oe,Z]=(0,y.useState)(!1),[he,fe]=(0,y.useState)(""),[we,X]=(0,y.useState)(!1),[Se,Y]=(0,y.useState)(""),[Ce,ke]=(0,y.useState)([]),[Me,Ae]=(0,y.useState)([]),[Ve,R]=(0,y.useState)(!0),[W,b]=(0,y.useState)(null),[H,ne]=(0,y.useState)(!1),me=(0,y.useMemo)(()=>{let f=new Map;for(let J of i)J?.root&&f.set(J.root,(f.get(J.root)||0)+1);return f},[i]),ee=(0,y.useCallback)(async()=>{R(!0);try{let f=await _r(`${Ia}/folders/suggestions`);ke(Array.isArray(f?.suggestions)?f.suggestions:[]),Ae(Array.isArray(f?.folders)?f.folders:[])}catch{ke([])}finally{R(!1)}},[]);(0,y.useEffect)(()=>{ee()},[ee,a.length]),(0,y.useEffect)(()=>{let f=N.current;if(!f)return;f.open||f.showModal?.();let J=()=>{f.returnValue="",I.current?.()};f.addEventListener("close",J);let ue=null;if(!("closedBy"in HTMLDialogElement.prototype)){let Ne=xe=>{let Xe=f.getBoundingClientRect();return xe.clientX<Xe.left||xe.clientX>Xe.right||xe.clientY<Xe.top||xe.clientY>Xe.bottom},Je=!1,Ge=xe=>{Je=Ne(xe)},et=xe=>{Je&&Ne(xe)&&f.close()};f.addEventListener("pointerdown",Ge),f.addEventListener("pointerup",et),ue=()=>{f.removeEventListener("pointerdown",Ge),f.removeEventListener("pointerup",et)}}return()=>{f.removeEventListener("close",J),ue?.(),f.open&&f.close()}},[]),(0,y.useEffect)(()=>{let f=L.trim();if(!f){b(null),ne(!1);return}let J=!1;ne(!0);let ue=window.setTimeout(async()=>{try{let Ne=await Kr(`${Ia}/folders/preview`,{path:f});J||b(Ne)}catch(Ne){J||b({ok:!1,error:Ne.message})}finally{J||ne(!1)}},250);return()=>{J=!0,window.clearTimeout(ue)}},[L]);let _e=()=>{let f=N.current;f?.open?f.close():z?.()},ge=async()=>{if(!A){K(!0),Y("");try{let f=await p();if(f?.canceled)return;if(f?.error)throw new Error(f.error);f?.path&&(await r(f.path),await ee())}catch(f){Y(f.message)}finally{K(!1)}}},be=async f=>{if(!he){Y(""),fe(f.path);try{if(f.alreadyAdded)await v?.(f.path,{skipConfirm:!0});else{if(f.overlap)throw new Error(`\u4E0E\u5DF2\u6302\u8F7D\u76EE\u5F55\u91CD\u53E0\uFF1A${f.overlap}`);await r(f.path)}await ee()}catch(J){Y(J.message)}finally{fe("")}}},F=async f=>{f.preventDefault();let J=L.trim();if(!(!J||$)){k(!0),Y("");try{await r(J),j(""),b(null),await ee()}catch(ue){Y(ue.message)}finally{k(!1)}}},Re=async()=>{if(!(!g||oe)){Z(!0);try{await g(),await ee()}catch(f){Y(f.message)}finally{Z(!1)}}},Te=async f=>{if(f.preventDefault(),f.stopPropagation(),X(!1),!!h)try{await h(f.dataTransfer),await ee()}catch(J){Y(J.message)}},te=Me.length?Me:a.map(f=>({path:f,displayPath:f,name:Oo(f),count:me.get(f)||0}));return y.default.createElement("dialog",{ref:N,className:"folder-dialog",closedby:"any","aria-labelledby":"pw-folder-dialog-title"},y.default.createElement("div",{className:"dlg-head"},y.default.createElement("div",{className:"dlg-head-title"},y.default.createElement("span",{className:"dlg-head-dot","aria-hidden":"true"}),y.default.createElement("h1",{id:"pw-folder-dialog-title"},"\u6DFB\u52A0\u4E0E\u7BA1\u7406\u64AD\u5BA2\u6587\u4EF6\u5939")),y.default.createElement("button",{type:"button",className:"dlg-close",onClick:_e,"aria-label":"\u5173\u95ED\u5F39\u7A97",title:"\u5173\u95ED (Esc)"},y.default.createElement(pe,{name:"close",size:16}))),y.default.createElement("div",{className:"dlg-body"},y.default.createElement("div",{className:`drop-zone ${we?"is-over":""}`,onDragOver:f=>{[...f.dataTransfer?.types||[]].includes("Files")&&(f.preventDefault(),f.stopPropagation(),we||X(!0))},onDragLeave:f=>{f.currentTarget.contains(f.relatedTarget)||X(!1)},onDrop:Te},y.default.createElement("div",{className:"drop-left"},y.default.createElement("div",{className:"drop-icon","aria-hidden":"true"},y.default.createElement(pe,{name:"folder-plus",size:22})),y.default.createElement("div",null,y.default.createElement("strong",null,we?"\u677E\u5F00\u4EE5\u6DFB\u52A0\u76EE\u5F55\u6216\u97F3\u9891":"\u4ECE\u7CFB\u7EDF\u9009\u62E9\u5668\u6D4F\u89C8\u6587\u4EF6\u5939"),y.default.createElement("span",null,"\u6216\u76F4\u63A5\u628A\u672C\u5730\u6587\u4EF6\u5939 / \u97F3\u9891\u62D6\u5230\u8FD9\u91CC\uFF0C\u81EA\u52A8\u76D1\u6D4B\u65B0\u589E\u5355\u96C6"))),y.default.createElement("button",{type:"button",className:"btn primary",onClick:ge,disabled:A,autoFocus:!0},A?"\u6253\u5F00\u4E2D\u2026":"\u9009\u62E9\u6587\u4EF6\u5939")),y.default.createElement("div",null,y.default.createElement("div",{className:"dlg-sec-head"},y.default.createElement("span",{className:"dlg-sec-label"},"\u672C\u673A\u5E38\u7528\u76EE\u5F55\uFF08\u70B9\u51FB\u4E00\u952E\u6302\u8F7D / \u53D6\u6D88\uFF09"),Ve?y.default.createElement("span",{className:"dlg-sec-meta"},"\u63A2\u6D4B\u4E2D\u2026"):null),Ce.length?y.default.createElement("div",{className:"suggest-grid"},Ce.map(f=>{let ue=he===f.path?"\u5904\u7406\u4E2D\u2026":f.alreadyAdded?`\u5DF2\u6302\u8F7D${f.audioCount?` \xB7 ${f.audioCount}${f.truncated?"+":""}`:""}`:f.overlap?"\u8DEF\u5F84\u91CD\u53E0":f.audioCount>0?`\u53D1\u73B0 ${f.audioCount}${f.truncated?"+":""} \u97F3\u9891`:"\u70B9\u51FB\u6302\u8F7D";return y.default.createElement("button",{key:f.path,type:"button",className:`suggest-item ${f.alreadyAdded?"is-added":""} ${f.overlap?"is-overlap":""}`,disabled:!!he||!!f.overlap,onClick:()=>be(f),title:f.overlap?`\u4E0E\u5DF2\u6302\u8F7D\u76EE\u5F55\u91CD\u53E0\uFF1A${f.overlap}`:f.path},y.default.createElement("span",{className:"suggest-info"},y.default.createElement("span",{className:"suggest-name"},f.label),y.default.createElement("span",{className:"suggest-path"},f.displayPath)),y.default.createElement("span",{className:"suggest-badge"},ue))})):Ve?null:y.default.createElement("p",{className:"dlg-muted"},"\u672A\u63A2\u6D4B\u5230\u5E38\u89C1\u672C\u5730\u76EE\u5F55\uFF0C\u8BF7\u4F7F\u7528\u4E0A\u65B9\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D\u6216\u4E0B\u65B9\u624B\u52A8\u8F93\u5165\u8DEF\u5F84\u3002")),te.length>0?y.default.createElement("div",null,y.default.createElement("div",{className:"dlg-sec-head"},y.default.createElement("span",{className:"dlg-sec-label"},"\u5DF2\u6302\u8F7D\u76EE\u5F55\uFF08",te.length,"\uFF09"),g?y.default.createElement("button",{type:"button",className:"dlg-rescan-btn",onClick:Re,disabled:oe},y.default.createElement(pe,{name:"refresh",size:13}),y.default.createElement("span",null,oe?"\u626B\u63CF\u4E2D\u2026":"\u91CD\u65B0\u626B\u63CF\u5168\u90E8")):null),y.default.createElement("ul",{className:"mounted-list"},te.map(f=>y.default.createElement("li",{key:f.path,className:"mounted-row",title:f.path},y.default.createElement("span",{className:"slot-dot","aria-hidden":"true"}),y.default.createElement("span",{className:"mounted-info"},y.default.createElement("span",{className:"mounted-name"},f.name),y.default.createElement("span",{className:"mounted-path"},f.displayPath)),y.default.createElement("span",{className:"mounted-count"},f.count," \u96C6"),y.default.createElement("button",{type:"button",className:"mounted-del",onClick:async()=>{await v?.(f.path),await ee()},title:"\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8BE5\u6587\u4EF6\u5939\uFF08\u4E0D\u5220\u9664\u672C\u5730\u6587\u4EF6\uFF09"},"\u79FB\u9664"))))):null,y.default.createElement("form",{onSubmit:F},y.default.createElement("div",{className:"dlg-sec-head"},y.default.createElement("span",{className:"dlg-sec-label"},"\u624B\u52A8\u8DEF\u5F84\u6302\u8F7D\u4E0E\u5B9E\u65F6\u68C0\u6D4B")),y.default.createElement("div",{className:"path-row"},y.default.createElement("input",{ref:C,value:L,onChange:f=>{j(f.target.value),Y("")},placeholder:"\u8F93\u5165\u6216\u7C98\u8D34\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u4F8B\u5982 ~/Music/Podcasts",spellCheck:!1,"aria-label":"\u6587\u4EF6\u5939\u8DEF\u5F84"}),y.default.createElement("button",{type:"submit",className:"btn primary",disabled:$||!L.trim()||W&&W.ok===!1},$?"\u6302\u8F7D\u4E2D\u2026":"\u6302\u8F7D\u76EE\u5F55")),H&&L.trim()?y.default.createElement("div",{className:"preview-strip is-pending"},"\u6B63\u5728\u68C0\u67E5\u76EE\u5F55\u8DEF\u5F84\u4E0E\u97F3\u9891\u6570\u91CF\u2026"):W&&L.trim()?W.ok?y.default.createElement("div",{className:"preview-strip is-ok"},y.default.createElement("span",null,W.alreadyAdded?`\u8BE5\u76EE\u5F55\u5DF2\u5728\u5A92\u4F53\u5E93\u4E2D\uFF1A${W.displayPath}\uFF08\u7EA6 ${W.audioCount}${W.truncated?"+":""} \u4E2A\u97F3\u9891\uFF09`:`\u76EE\u5F55\u6709\u6548\uFF1A\u68C0\u6D4B\u5230 ${W.audioCount}${W.truncated?"+":""} \u4E2A\u97F3\u9891\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u6302\u8F7D`),y.default.createElement("span",{className:"preview-code"},"READY")):y.default.createElement("div",{className:"preview-strip is-err"},y.default.createElement("span",null,W.error||"\u65E0\u6CD5\u8BFB\u53D6\u8BE5\u76EE\u5F55"),y.default.createElement("span",{className:"preview-code"},"ERR")):null),Se?y.default.createElement("div",{className:"dialog-error"},Se):null),y.default.createElement("div",{className:"dlg-foot"},y.default.createElement("span",null,"Podwave \u4EC5\u8BFB\u53D6\u97F3\u9891\u5143\u6570\u636E\uFF0C\u7EDD\u4E0D\u79FB\u52A8\u3001\u6539\u540D\u6216\u4E0A\u4F20\u539F\u59CB\u6587\u4EF6"),y.default.createElement("button",{type:"button",className:"btn ghost",onClick:_e},"\u5B8C\u6210")))}var x=it(require("react"),1);var Be=it(require("react"),1);function Yt({trigger:a,title:i,align:r="end",placement:p="down",className:v="",buttonClassName:g="",disabled:h=!1,children:z}){let[N,C]=(0,Be.useState)(!1),I=(0,Be.useRef)(null);(0,Be.useEffect)(()=>{if(!N)return;let j=k=>{I.current?.contains(k.target)||C(!1)},$=k=>{k.key==="Escape"&&C(!1)};return document.addEventListener("pointerdown",j),document.addEventListener("keydown",$),()=>{document.removeEventListener("pointerdown",j),document.removeEventListener("keydown",$)}},[N]),(0,Be.useEffect)(()=>{h&&N&&C(!1)},[h,N]);let L=["pop-panel",r==="start"?"is-start":"",p==="up"?"is-up":""].filter(Boolean).join(" ");return Be.default.createElement("span",{className:`pop-wrap ${v}`,ref:I},Be.default.createElement("button",{type:"button",className:g||"pop-btn",onClick:()=>C(j=>!j),title:i,disabled:h,"aria-haspopup":"menu","aria-expanded":N},a),N?Be.default.createElement("span",{className:L,role:"menu"},z({close:()=>C(!1)})):null)}function lt({children:a,hint:i,checked:r=!1,danger:p=!1,disabled:v=!1,onSelect:g}){let h=["pop-item",r?"is-on":"",p?"is-danger":""].filter(Boolean).join(" ");return Be.default.createElement("button",{type:"button",className:h,role:r?"menuitemcheckbox":"menuitem","aria-checked":r||void 0,disabled:v,onClick:g},Be.default.createElement("span",null,a),i?Be.default.createElement("span",{className:"pop-hint"},i):null)}function Un({children:a,hint:i,href:r,onSelect:p}){return Be.default.createElement("a",{className:"pop-item",role:"menuitem",href:r,download:!0,onClick:p},Be.default.createElement("span",null,a),i?Be.default.createElement("span",{className:"pop-hint"},i):null)}var en=it(require("react"),1);function Hn({value:a,onChange:i,compact:r=!1}){let p=Number.isFinite(Number(a))?Number(a):15;return en.default.createElement("label",{className:`sub-size ${r?"compact":""}`,title:"\u8C03\u6574\u5B57\u5E55\u5B57\u53F7\uFF08\u9762\u677F\u548C\u60AC\u6D6E\u5B57\u5E55\u5171\u7528\uFF09"},en.default.createElement("span",{className:"sub-size-label"},"\u5B57\u53F7"),en.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:p,"aria-label":"\u5B57\u5E55\u5B57\u53F7",onChange:v=>i(Number(v.target.value))}),en.default.createElement("span",{className:"sub-size-value"},p))}function Aa(a,i=[]){if(a==null||a==="")return null;if(typeof a=="number"&&Number.isFinite(a)){let g=Math.max(0,Math.floor(a)),h=Array.isArray(i)?i[g]||i.find(N=>N&&N.id===g):null,z=h&&typeof h=="object"&&h.label?h.label:`\u8BF4\u8BDD\u4EBA ${g+1}`;return{index:g,label:z}}let r=String(a).trim();if(!r)return null;if(Array.isArray(i)){let g=i.findIndex(h=>h&&typeof h=="object"&&(String(h.id)===r||String(h.raw)===r));if(g>=0){let h=i[g];return{index:Number.isFinite(Number(h.id))?Number(h.id):g,label:h.label||`\u8BF4\u8BDD\u4EBA ${g+1}`}}}let p=/^S0*(\d+)$/i.exec(r);if(p){let g=Math.max(1,Number(p[1]));return{index:g-1,label:`\u8BF4\u8BDD\u4EBA ${g}`}}if(/^\d+$/.test(r)){let g=Number(r);return{index:g,label:`\u8BF4\u8BDD\u4EBA ${g+1}`}}let v=Array.isArray(i)?i.indexOf(r):-1;return{index:v>=0?v:Math.abs(r.charCodeAt(0))%5,label:r}}function Oa(a){let i=String(a||"");return i?i.replace(/<\s*br\s*\/?>/gi,`
`).replace(/<\/\s*(p|div|li|h[1-6]|blockquote)\s*>/gi,`
`).replace(/<\s*li[^>]*>/gi,"\u2022 ").replace(/<[^>]+>/g,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&#39;|&#x27;/gi,"'").replace(/\n{3,}/g,`

`).trim():""}var Ba="/podwave/api";function yn({transcript:a,status:i,progress:r,stage:p,chunks:v,queued:g,elapsed:h,error:z,position:N,onSeek:C,onClose:I,onStart:L,onCancel:j,target:$,job:k,onChangeTarget:A,onTranslate:K,onRetranslate:oe=null,onRetranslateLine:Z=null,onOpenSettings:he,inline:fe=!1,editingId:we=null,draft:X="",onDraftChange:Se,onEditLine:Y,onSaveLine:Ce,onCancelEdit:ke,onSplitLine:Me,onMergeLine:Ae,onValidate:Ve,onResegment:R,issues:W=[],fontSize:b=15,onFontSize:H=null,width:ne=null,height:me=null,onResize:ee=null}){let _e=(0,x.useRef)(null),ge=(0,x.useRef)(null),be=(0,x.useRef)(null),F=(0,x.useRef)(null),[Re,Te]=(0,x.useState)(!1),te=a?.lines?.findIndex(T=>N>=T.start&&N<T.end)??-1;(0,x.useEffect)(()=>{if(te<0||!_e.current)return;_e.current.querySelector(`[data-seg="${te}"]`)?.scrollIntoView({block:"nearest"})},[te]);let f=T=>{let G=F.current;if(!G)return null;let O=T.clientX-G.startX,V=T.clientY-G.startY,c=Math.max(320,window.innerWidth-60),P=Math.max(220,window.innerHeight-(fe?160:140));return fe?{width:null,height:Math.round(Math.min(P,Math.max(240,G.height+V)))}:{width:Math.round(Math.min(c,Math.max(320,G.width-O))),height:Math.round(Math.min(P,Math.max(200,G.height-V)))}},J=T=>{if(T.button!==void 0&&T.button!==0)return;let G=be.current;if(!G||!ee)return;T.preventDefault();let O=G.getBoundingClientRect();F.current={startX:T.clientX,startY:T.clientY,width:O.width,height:O.height},T.currentTarget.setPointerCapture?.(T.pointerId)},ue=T=>{if(!F.current)return;let G=f(T);G&&ee(G.width,G.height,!1)},Ne=T=>{if(!F.current)return;let G=f(T);F.current=null,T.currentTarget.releasePointerCapture?.(T.pointerId),G&&ee(G.width,G.height,!0)},Je=i==="queued"||i==="running",Ge=k?.status==="running"||k?.status==="queued",et=k?.missing??0,xe=Ge?`\u7FFB\u8BD1\u4E2D${k?.progress?.total?` ${k.progress.done||0}/${k.progress.total}`:""}`:k?.status==="partial"?"\u7EED\u7FFB":k?.status==="error"?"\u91CD\u8BD5\u7FFB\u8BD1":"\u7FFB\u8BD1",Xe=async()=>{let G=(a?.lines||[]).map(O=>{let V=He(O.start),c=$?O.translations?.[$]:"";return c?`${V} ${O.text}
${" ".repeat(V.length+1)}${c}`:`${V} ${O.text}`}).join(`
`);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(G);else{let O=document.createElement("textarea");O.value=G,O.style.position="fixed",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),document.body.removeChild(O)}Te(!0),setTimeout(()=>Te(!1),1600)}catch{Te(!1)}};return x.default.createElement("section",{ref:be,className:`transcript-panel ${fe?"inline":""} ${me?"is-sized":""}`,style:{"--sub-size":`${b}px`,width:!fe&&ne?`${ne}px`:void 0,height:me?`${me}px`:void 0,maxHeight:me?"none":void 0}},x.default.createElement("header",{className:"transcript-head"},x.default.createElement("h3",null,"\u5B57\u5E55"),a?x.default.createElement("span",{className:"transcript-meta"},a.language||"\u672A\u77E5\u8BED\u8A00"," \xB7 ",a.lines.length," \u884C",a.speakers?.length?` \xB7 ${a.speakers.length} \u4F4D\u8BF4\u8BDD\u4EBA`:""):null,x.default.createElement("div",{className:"transcript-actions"},x.default.createElement("select",{className:"tr-select",value:$,onChange:T=>A(T.target.value),title:"\u5B57\u5E55\u663E\u793A\u6A21\u5F0F"},x.default.createElement("option",{value:""},"\u4EC5\u539F\u6587"),x.default.createElement("option",{value:"zh"},"\u4E2D\u6587\u53CC\u8BED"),x.default.createElement("option",{value:"en"},"English")),H?x.default.createElement(Yt,{className:"tr-fs",trigger:"Aa",title:`\u5B57\u5E55\u5B57\u53F7 ${b}px`,align:"end"},()=>x.default.createElement("span",{className:"pop-fs"},x.default.createElement(Hn,{value:b,onChange:H}))):null,a&&$&&K?Ge?x.default.createElement("span",{className:"mini-link tr-translate is-busy",title:"\u6B63\u5728\u7FFB\u8BD1\u5B57\u5E55"},xe):et>0?x.default.createElement("button",{className:"mini-link tr-translate is-primary",onClick:K,title:`\u8FD8\u6709 ${et} \u884C\u6CA1\u6709\u8BD1\u6587\uFF0C\u70B9\u8FD9\u91CC\u7FFB\u8BD1`},xe):null:null,x.default.createElement(Yt,{className:"tr-more",trigger:"\u22EF",title:"\u66F4\u591A"},({close:T})=>x.default.createElement(x.default.Fragment,null,a?x.default.createElement(lt,{hint:"\u67E5\u7A7A\u884C\u4E0E\u65F6\u95F4\u8F74",onSelect:()=>{T(),Ve()}},"\u6821\u9A8C\u5B57\u5E55"):null,a&&R?x.default.createElement(lt,{hint:"\u788E\u7247\u884C\u62FC\u56DE\u6574\u53E5",onSelect:()=>{T(),R()}},"\u6574\u7406\u65AD\u53E5"):null,a&&$&&oe?x.default.createElement(lt,{hint:"\u6574\u7BC7\u8986\u76D6\u91CD\u7FFB\uFF0C\u4F1A\u95EE\u4E00\u53E5",onSelect:()=>{T(),oe()}},"\u91CD\u65B0\u7FFB\u8BD1"):null,he?x.default.createElement(lt,{hint:"\u5728 DSH \u8BBE\u7F6E\u4E2D\u8C03\u6574",onSelect:()=>{T(),he()}},"\u8BBE\u7F6E"):null)),a?x.default.createElement(Yt,{className:"tr-export",trigger:"\u5BFC\u51FA",title:"\u5BFC\u51FA\u5B57\u5E55"},({close:T})=>x.default.createElement(x.default.Fragment,null,x.default.createElement(Un,{hint:$?"\u542B\u65F6\u95F4\u8F74\u4E0E\u53CC\u8BED\u8BD1\u6587":"\u5E26\u65F6\u95F4\u8F74\uFF0C\u526A\u8F91\u8F6F\u4EF6\u7528",href:`${Ba}/episodes/${a.id}/transcript/export?format=srt&target=${$||"none"}`,onSelect:T},"\u5B57\u5E55\u6587\u4EF6 .srt"),x.default.createElement(Un,{hint:$?"\u542B\u65F6\u95F4\u6233\u4E0E\u53CC\u8BED\u8BD1\u6587":"\u5E26\u65F6\u95F4\u6233\u7684\u6587\u7A3F",href:`${Ba}/episodes/${a.id}/transcript/export?format=md&target=${$||"none"}`,onSelect:T},"\u6587\u7A3F .md"),x.default.createElement(lt,{hint:"\u7EAF\u6587\u672C\uFF0C\u8FDE\u8BD1\u6587\u4E00\u8D77",onSelect:Xe},Re?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"))):null,I?x.default.createElement("button",{className:"transcript-close",onClick:I,title:"\u6536\u8D77\u5B57\u5E55\u9762\u677F"},"\xD7"):null)),x.default.createElement("div",{className:"transcript-body",ref:_e},a&&Je?x.default.createElement("div",{className:"tr-strip"},x.default.createElement("span",null,i==="queued"?"\u6392\u961F\u4E2D\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":p==="diarizing"?"\u6B63\u5728\u5206\u79BB\u8BF4\u8BDD\u4EBA\u2026":p==="translating"?"\u6B63\u5728\u81EA\u52A8\u7FFB\u8BD1\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",r?.percent!=null?` ${r.percent}%`:"",p==="translating"&&r?.total?` \xB7 ${r.done||0}/${r.total} \u884C`:v?.total?` \xB7 \u7B2C ${Math.min((v.done||0)+1,v.total)}/${v.total} \u5757`:"",` \xB7 \u5DF2\u51FA ${a.lines.length} \u884C`),j?x.default.createElement("button",{className:"seg-tool",onClick:j},"\u53D6\u6D88"):null):null,a&&W?.length?x.default.createElement("div",{className:"tr-issues"},W.slice(0,5).map(T=>x.default.createElement("div",{key:T},"\xB7 ",T)),W.length>5?x.default.createElement("div",null,"\u2026\u5171 ",W.length," \u6761"):null):null,k?.status==="running"||k?.status==="queued"?x.default.createElement("div",{className:"tr-running"},"\u7FFB\u8BD1\u4E2D\u2026",k.progress?.total?` ${k.progress.done||0}/${k.progress.total}`:""):null,k?.status==="error"?x.default.createElement("div",{className:"tr-running err"},k.error,"\u5F85\u7FFB ",k.missing??0," \u884C\uFF0C\u70B9\u5DE5\u5177\u680F\u7684\u300C\u91CD\u8BD5\u7FFB\u8BD1\u300D\u518D\u8BD5\u4E00\u6B21"):null,k?.status==="partial"?x.default.createElement("div",{className:"tr-running"},"\u5DF2\u7FFB ",k.translated??0,"/",k.total??0," \u884C\uFF0C\u8FD8\u7F3A ",k.missing??0," \u884C \u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7EED\u7FFB\u300D\u63A5\u7740\u7FFB"):null,k?.status==="none"&&$&&a&&(k.missing??0)>0?x.default.createElement("div",{className:"tr-running"},"\u8FD8\u6CA1\u6709\u8BD1\u6587\uFF08\u5171 ",k.missing," \u884C\u5F85\u7FFB\uFF09\u2014\u2014 \u70B9\u5DE5\u5177\u680F\u7684\u300C\u7FFB\u8BD1\u300D\u5F00\u59CB"):null,a?a.lines.map((T,G)=>x.default.createElement("div",{key:T.id,"data-seg":G,className:`seg-row ${G===te?"active":""} ${we===T.id?"is-editing":""}`,role:"button",tabIndex:0,title:`\u8DF3\u8F6C\u5230 ${He(T.start)}`,onClick:()=>C(T.start),onKeyDown:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),C(T.start))}},x.default.createElement("span",{className:"seg-time"},He(T.start)),we===T.id?x.default.createElement("span",{className:"seg-edit",onClick:O=>O.stopPropagation()},x.default.createElement("textarea",{ref:ge,value:X,rows:Math.min(4,Math.max(2,Math.ceil((X.length||1)/40))),onChange:O=>Se(O.target.value),onKeyDown:O=>{O.key==="Enter"&&(O.metaKey||O.ctrlKey)&&Ce(T.id),O.key==="Escape"&&ke()}}),x.default.createElement("span",{className:"seg-edit-actions"},x.default.createElement("button",{className:"seg-tool",onClick:()=>Ce(T.id)},"\u4FDD\u5B58"),x.default.createElement("button",{className:"seg-tool",onClick:()=>Me(T.id,ge.current?.selectionStart??Math.floor(X.length/2))},"\u62C6\u5206"),$&&Z?x.default.createElement("button",{className:"seg-tool",title:"\u53EA\u91CD\u7FFB\u8FD9\u4E00\u884C\u7684\u8BD1\u6587",onClick:()=>Z(T)},"\u91CD\u7FFB"):null,x.default.createElement("button",{className:"seg-tool",onClick:ke},"\u53D6\u6D88"))):x.default.createElement(x.default.Fragment,null,(()=>{let O=Aa(T.speaker,a.speakers);return O?x.default.createElement("span",{className:`seg-speaker spk-${O.index%5}`},O.label):null})(),x.default.createElement("span",{className:"seg-text"},T.text,T.translations?.[$]?x.default.createElement("span",{className:"seg-trans"},T.translations[$]):null),x.default.createElement("span",{className:"seg-tools"},x.default.createElement("button",{className:"seg-tool",title:"\u7F16\u8F91\u8FD9\u4E00\u884C",onClick:O=>{O.stopPropagation(),Y(T)}},"\u270E"),G<a.lines.length-1?x.default.createElement("button",{className:"seg-tool",title:"\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76",onClick:O=>{O.stopPropagation(),Ae(T.id)}},"\u21E3"):null)))):Je?x.default.createElement("div",{className:"transcript-status"},i==="queued"?"\u6392\u961F\u4E2D\u2026":p==="translating"?"\u6B63\u5728\u81EA\u52A8\u7FFB\u8BD1\u2026":p==="merging"?"\u6B63\u5728\u5408\u5E76\u5B57\u5E55\u2026":p==="preparing"?"\u6B63\u5728\u51C6\u5907\u97F3\u9891\u2026":p==="downloading"?"\u6B63\u5728\u4E0B\u8F7D\u97F3\u9891\u2026":"\u6B63\u5728\u8F6C\u5199\u2026",r?.percent!=null?` ${r.percent}%`:"",v?.total?` \xB7 \u7B2C ${Math.min(v.done+1,v.total)}/${v.total} \u5757`:""," \xB7 \u5DF2\u7528 "+Math.round((h||0)/1e3)+" \u79D2",r?.percent!=null?x.default.createElement("span",{className:"tx-progress"},x.default.createElement("span",{style:{width:`${r.percent}%`}})):null,x.default.createElement("br",null),x.default.createElement("span",{className:"tx-hint"},"\u957F\u64AD\u5BA2\u4F1A\u81EA\u52A8\u5207\u5757\u8F6C\u5199\uFF1B\u5173\u6389\u9762\u677F\u4E5F\u4F1A\u7EE7\u7EED\u8DD1\uFF0C\u53EF\u5728\u300C\u4EFB\u52A1\u300D\u91CC\u770B\u8FDB\u5EA6\u3002"),x.default.createElement("br",null),j?x.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:j},"\u53D6\u6D88\u8F6C\u5199"):null):z?x.default.createElement("div",{className:"transcript-status"},x.default.createElement("span",{className:"err"},z),x.default.createElement("br",null),x.default.createElement("button",{className:"btn ghost",style:{marginTop:10},onClick:L},"\u91CD\u8BD5")):x.default.createElement("div",{className:"transcript-status"},"\u8FD8\u6CA1\u6709\u8F6C\u5199\u8FD9\u4E00\u96C6\u3002",x.default.createElement("br",null),x.default.createElement("button",{className:"btn primary",style:{marginTop:10},onClick:L},"\u5F00\u59CB\u8F6C\u5199"))),ee?x.default.createElement(x.default.Fragment,null,fe?null:x.default.createElement(x.default.Fragment,null,x.default.createElement("span",{className:"transcript-grip is-left",onPointerDown:J,onPointerMove:ue,onPointerUp:Ne,onPointerCancel:Ne,title:"\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6"}),x.default.createElement("span",{className:"transcript-grip is-top",onPointerDown:J,onPointerMove:ue,onPointerUp:Ne,onPointerCancel:Ne,title:"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6"})),x.default.createElement("span",{className:`transcript-resize ${fe?"is-inline":""}`,onPointerDown:J,onPointerMove:ue,onPointerUp:Ne,onPointerCancel:Ne,onDoubleClick:()=>ee(null,null,!0),title:fe?"\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"})):null)}var B=it(require("react"),1);var Wr=[["original","\u4EC5\u539F\u6587"],["bilingual","\u539F\u6587 + \u8BD1\u6587"],["translation","\u4EC5\u8BD1\u6587"]];function Vn({lines:a=[],draft:i="",displayMode:r="bilingual",onDisplayMode:p,status:v="listening",error:g="",device:h="",count:z=0,elapsed:N=0,fontSize:C=15,level:I=0,hint:L="",onStop:j,onSave:$,onClose:k}){let A=(0,B.useRef)(null),K=(0,B.useRef)(null),oe=(0,B.useRef)(null),Z=(0,B.useRef)(null),[he,fe]=(0,B.useState)(null),[we,X]=(0,B.useState)(null),Se=a.slice(-6);(0,B.useEffect)(()=>{let b=A.current;b&&(b.scrollTop=b.scrollHeight)},[a.length,i,r]);let Y=(b,H)=>{let ne=K.current,me=ne?.offsetWidth||520,ee=ne?.offsetHeight||160;return{x:Math.min(Math.max(8,b),Math.max(8,window.innerWidth-me-8)),y:Math.min(Math.max(8,H),Math.max(8,window.innerHeight-ee-8))}},Ce=b=>{if(b.button!==void 0&&b.button!==0||b.target instanceof Element&&b.target.closest('button, input, select, a, [role="button"]'))return;let H=K.current;if(!H)return;let ne=H.getBoundingClientRect();oe.current={dx:b.clientX-ne.left,dy:b.clientY-ne.top},b.currentTarget.setPointerCapture?.(b.pointerId)},ke=b=>{let H=oe.current;H&&fe(Y(b.clientX-H.dx,b.clientY-H.dy))},Me=b=>{oe.current&&(oe.current=null,b.currentTarget.releasePointerCapture?.(b.pointerId))},Ae=b=>{if(b.button!==void 0&&b.button!==0)return;b.stopPropagation();let H=K.current;if(!H)return;let ne=H.getBoundingClientRect();Z.current={startX:b.clientX,startY:b.clientY,width:ne.width,height:ne.height},b.currentTarget.setPointerCapture?.(b.pointerId)},Ve=b=>{let H=Z.current;if(!H)return;b.stopPropagation();let ne=Math.round(Math.min(window.innerWidth-24,Math.max(360,H.width+(b.clientX-H.startX)))),me=Math.round(Math.min(window.innerHeight-24,Math.max(140,H.height+(b.clientY-H.startY))));X({width:ne,height:me})},R=b=>{Z.current&&(b.stopPropagation(),Z.current=null,b.currentTarget.releasePointerCapture?.(b.pointerId))},W=v==="asking";return B.default.createElement("div",{ref:K,className:"live-caption",style:{...he?{left:he.x,top:he.y,bottom:"auto",transform:"none"}:{},...we?{width:`${we.width}px`,height:`${we.height}px`,maxHeight:"none"}:{}}},B.default.createElement("div",{className:"live-caption-head",onPointerDown:Ce,onPointerMove:ke,onPointerUp:Me,title:"\u62D6\u52A8\u6807\u9898\u680F\u53EF\u4EE5\u632A\u4F4D\u7F6E"},B.default.createElement("span",{className:"live-caption-dot","data-live":v==="listening"?"on":"off","aria-hidden":"true"}),B.default.createElement("span",{className:"live-caption-title"},"\u5B9E\u65F6\u5B57\u5E55"),B.default.createElement("span",{className:"live-caption-meta"},v==="starting"?"\u6B63\u5728\u6253\u5F00\u8BBE\u5907\u2026":null,v==="listening"?`${h||"\u7CFB\u7EDF\u58F0\u97F3"} \xB7 ${z} \u53E5 \xB7 ${He(N)}`:null,v==="saving"?"\u6B63\u5728\u4FDD\u5B58\u2026":null,W?`\u5DF2\u505C\u6B62 \xB7 \u5171 ${z} \u53E5`:null),B.default.createElement("button",{type:"button",className:"icon-btn live-caption-close",title:W?"\u5173\u6389":"\u505C\u6B62\u5E76\u5173\u95ED",onPointerDown:b=>b.stopPropagation(),onClick:W?k:j},B.default.createElement(pe,{name:"close",size:14}))),B.default.createElement("div",{className:`live-meter ${I>.004?"is-live":""}`,title:"\u8F93\u5165\u7535\u5E73\uFF08\u8BF4\u8BDD\u65F6\u4F1A\u8DF3\uFF09"},B.default.createElement("span",{style:{width:`${Math.min(100,Math.max(2,I*400))}%`}})),B.default.createElement("div",{className:"live-caption-body",ref:A},Se.length||i?B.default.createElement(B.default.Fragment,null,Se.map(b=>{let H=b.translations?.zh||b.translations?.en||"",ne=r!=="translation"||!H,me=r!=="original"&&!!H,ee=r==="translation"&&H?H:b.text;return B.default.createElement("div",{key:b.id,className:"live-line"},B.default.createElement("p",{className:"live-line-text",style:{fontSize:C}},ee),ne&&me?B.default.createElement("p",{className:"live-line-tr",style:{fontSize:Math.round(C*.84)}},H):null)}),i?B.default.createElement("div",{className:"live-line is-draft"},B.default.createElement("p",{className:"live-line-text",style:{fontSize:C,opacity:.72}},i," \u2026")):null):B.default.createElement("p",{className:"live-caption-empty"},v==="starting"?"\u6B63\u5728\u6253\u5F00\u97F3\u9891\u8BBE\u5907\u2026":"\u7B49\u7740\u542C\u2026",v==="listening"?" \u64AD\u653E\u4EFB\u4F55\u58F0\u97F3\uFF0C\u5B57\u5E55\u4F1A\u4E00\u53E5\u4E00\u53E5\u51FA\u73B0\u3002":"")),L&&!g?B.default.createElement("p",{className:"live-caption-note"},L):null,g?B.default.createElement("p",{className:"live-caption-error"},g):null,B.default.createElement("div",{className:"live-caption-foot"},W?B.default.createElement(B.default.Fragment,null,B.default.createElement("span",{className:"live-caption-ask"},"\u4FDD\u5B58\u8FD9\u6B21\u5B57\u5E55\uFF1F"),B.default.createElement("button",{className:"btn ghost",onClick:()=>$(!1)},"\u4E0D\u7528"),B.default.createElement("button",{className:"btn primary",onClick:()=>$(!0)},"\u4FDD\u5B58")):B.default.createElement(B.default.Fragment,null,B.default.createElement("span",{className:"live-mode-switch",role:"group","aria-label":"\u663E\u793A\u5185\u5BB9"},Wr.map(([b,H])=>B.default.createElement("button",{key:b,type:"button",className:r===b?"is-on":"",onClick:()=>p?.(b)},H))),B.default.createElement("button",{className:"btn ghost",onClick:j,disabled:v==="saving"},"\u505C\u6B62"))),B.default.createElement("span",{className:"caption-resize",onPointerDown:Ae,onPointerMove:Ve,onPointerUp:R,onPointerCancel:R,onDoubleClick:()=>X(null),title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}))}function Kn(a){if(!a||!a.length)return 0;let i=0;for(let r=0;r<a.length;r+=1)i+=a[r]*a[r];return Math.sqrt(i/a.length)}function _n(a){return Math.round((Number(a)||0)*1e3)/1e3}var qr=/blackhole|loopback|vb-?audio|vb-?cable|stereo ?mix|立体声混音|soundflower|virtual|existential|parrot|oray/i,Jr=/microphone|麦克风|mic\b/i;function ja(a){let i=String(a?.label||""),r=String(a?.deviceId||""),p=0;return qr.test(i)&&(p+=100),Jr.test(i)&&(p-=10),i||(p-=5),(r==="default"||r==="communications")&&(p-=30),p}function Wn(a){let i=(a||[]).filter(r=>r&&r.kind==="audioinput"&&r.deviceId);return i.length?[...i].sort((r,p)=>ja(p)-ja(r))[0]:null}var kn=class{constructor({sampleRate:i=16e3,silenceMs:r=450,maxMs:p=6e3,minMs:v=400,prerollMs:g=300}={}){this.sampleRate=i,this.silenceMs=r,this.maxMs=p,this.minMs=v,this.prerollMs=g,this.total=0,this.noise=null,this.inSpeech=!1,this.preroll=[],this.segment=[],this.segmentStart=0,this.silence=0,this.lastVoiced=0,this.firstVoiced=0}get threshold(){let i=this.noise===null?.005:this.noise;return Math.max(.005,Math.min(.05,i*2.5))}get seconds(){return this.total/this.sampleRate}push(i){let r=[];if(!i||!i.length)return r;let p=this.total;this.total+=i.length;let v=Kn(i);this.noise===null&&(this.noise=v);let g=v>=this.threshold;if(!this.inSpeech)return g?(this.segment=this.preroll.slice(),this.segmentStart=this.segment.length?this.segment[0].at:p,this.preroll=[],this.segment.push({at:p,data:i}),this.inSpeech=!0,this.silence=0,this.firstVoiced=p,this.lastVoiced=this.total,r):(this.noise=this.noise*.9+v*.1,this.preroll.push({at:p,data:i}),this.trimPreroll(),r);this.segment.push({at:p,data:i}),g?(this.silence=0,this.lastVoiced=this.total):this.silence+=i.length;let h=(this.total-this.segmentStart)/this.sampleRate*1e3;if(this.silence/this.sampleRate*1e3>=this.silenceMs){let N=this.cut("silence");return N&&r.push(N),r}if(h>=this.maxMs){let N=this.cut("max");N&&r.push(N)}return r}flush(){if(!this.inSpeech)return[];let i=this.cut("flush");return i?[i]:[]}peekSamples(i=6){if(!this.inSpeech||!this.segment.length||(this.lastVoiced-this.firstVoiced)/this.sampleRate*1e3<350)return null;let p=this.segment.reduce((I,L)=>I+L.data.length,0),v=Math.round(i*this.sampleRate),g=Math.min(p,v),h=p-g,z=new Float32Array(g),N=0,C=0;for(let I of this.segment){let L=I.data.length;if(N+L<=h){N+=L;continue}let j=Math.max(0,h-N),$=j>0?I.data.subarray(j):I.data;z.set($,C),C+=$.length,N+=L}return z}cut(i){let r=this.segmentStart/this.sampleRate,p=(this.lastVoiced-this.segmentStart)/this.sampleRate,v=this.segment.reduce((C,I)=>C+I.data.length,0),g=new Float32Array(v),h=0;for(let C of this.segment)g.set(C.data,h),h+=C.data.length;let z=Math.max(r+.2,r+Math.min(p+.12,v/this.sampleRate)),N=(this.lastVoiced-this.firstVoiced)/this.sampleRate*1e3;return this.inSpeech=!1,this.segment=[],this.silence=0,i==="silence"&&N<this.minMs?null:{samples:g,start:_n(r),end:_n(z),seconds:_n(z-r),reason:i}}trimPreroll(){let i=Math.round(this.prerollMs/1e3*this.sampleRate),r=0;for(let p=this.preroll.length-1;p>=0;p-=1)if(r+=this.preroll[p].data.length,r>i){this.preroll=this.preroll.slice(p);return}}};function Fa(a,i=16e3){let r=a instanceof Float32Array?a:Float32Array.from(a||[]),p=new ArrayBuffer(44+r.length*2),v=new DataView(p),g=(z,N)=>{for(let C=0;C<N.length;C+=1)v.setUint8(z+C,N.charCodeAt(C))};g(0,"RIFF"),v.setUint32(4,36+r.length*2,!0),g(8,"WAVE"),g(12,"fmt "),v.setUint32(16,16,!0),v.setUint16(20,1,!0),v.setUint16(22,1,!0),v.setUint32(24,i,!0),v.setUint32(28,i*2,!0),v.setUint16(32,2,!0),v.setUint16(34,16,!0),g(36,"data"),v.setUint32(40,r.length*2,!0);let h=44;for(let z=0;z<r.length;z+=1){let N=Math.max(-1,Math.min(1,r[z]));v.setInt16(h,N<0?N*32768:N*32767,!0),h+=2}return new Uint8Array(p)}var Xr=`
class PodwaveTap extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]
    const channel = input && input[0]
    if (channel && channel.length) this.port.postMessage(channel.slice(0))
    return true
  }
}
registerProcessor('podwave-tap', PodwaveTap)
`;async function Ha(){if(!navigator.mediaDevices?.enumerateDevices)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u8BFB\u4E0D\u5230\u97F3\u9891\u8BBE\u5907\u5217\u8868\uFF08\u9700\u8981\u5B89\u5168\u4E0A\u4E0B\u6587\uFF09");return(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="audioinput")}async function Va({deviceId:a="",onSegment:i,onLevel:r,segmenterOptions:p={}}={}){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u8FD9\u4E2A\u73AF\u5883\u62FF\u4E0D\u5230\u97F3\u9891\u8F93\u5165\u63A5\u53E3");let v;try{v=await navigator.mediaDevices.getUserMedia({audio:{...a?{deviceId:{exact:a}}:{},channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch($){if($?.name==="OverconstrainedError"&&a)v=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});else throw new Error(Yr($))}let g;try{g=new AudioContext({sampleRate:16e3})}catch{g=new AudioContext}let h=g.sampleRate||16e3,z=new kn({...p,sampleRate:h}),N=$=>{i?.({wav:Fa($.samples,h),start:$.start,end:$.end,seconds:$.seconds,reason:$.reason})},C=$=>{if($){r?.(Kn($));for(let k of z.push($))N(k)}},I=g.createMediaStreamSource(v),L;try{let $=URL.createObjectURL(new Blob([Xr],{type:"application/javascript"}));await g.audioWorklet.addModule($),URL.revokeObjectURL($),L=new AudioWorkletNode(g,"podwave-tap",{numberOfInputs:1,numberOfOutputs:1,channelCount:1,channelCountMode:"explicit"}),L.port.onmessage=k=>C(k.data)}catch{L=g.createScriptProcessor(2048,1,1),L.onaudioprocess=$=>C(new Float32Array($.inputBuffer.getChannelData(0)))}let j=g.createGain();return j.gain.value=0,I.connect(L),L.connect(j),j.connect(g.destination),await g.resume().catch(()=>{}),{label:v.getAudioTracks()[0]?.label||"",sampleRate:h,async stop(){try{for(let $ of z.flush())N($)}catch{}try{L.port&&(L.port.onmessage=null),L.onaudioprocess=null}catch{}for(let $ of[I,L,j])try{$.disconnect()}catch{}for(let $ of v.getTracks())$.stop();await g.close().catch(()=>{})}}}function Yr(a){let i=String(a?.name||"");return i==="NotAllowedError"||i==="SecurityError"?"\u6CA1\u6709\u97F3\u9891\u6743\u9650\u3002\u5728\u7CFB\u7EDF\u91CC\u5141\u8BB8 DSH \u4F7F\u7528\u9EA6\u514B\u98CE/\u97F3\u9891\u8F93\u5165\u4E4B\u540E\u518D\u8BD5":i==="NotFoundError"||i==="DevicesNotFoundError"?"\u627E\u4E0D\u5230\u8FD9\u4E2A\u97F3\u9891\u8BBE\u5907\u3002\u5148\u88C5\u865A\u62DF\u58F0\u5361\uFF08macOS \u7528 BlackHole\uFF09\uFF0C\u518D\u56DE\u6765\u9009\u5B83":i==="NotReadableError"?"\u8FD9\u4E2A\u8BBE\u5907\u88AB\u522B\u7684\u7A0B\u5E8F\u5360\u7528\u4E86\uFF0C\u6362\u4E00\u4E2A\u8F93\u5165\u8BBE\u5907\u8BD5\u8BD5":a?.message||"\u6253\u4E0D\u5F00\u97F3\u9891\u8BBE\u5907"}var u=it(require("react"),1),je="/podwave/api";async function ut(a){let i=await fetch(a),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(r.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${i.status}\uFF09`);return r}async function jo(a,i){let r=await fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i||{})}),p=await r.json().catch(()=>({}));if(!r.ok)throw new Error(p.error||`\u8BF7\u6C42\u5931\u8D25\uFF08${r.status}\uFF09`);return p}function _a(a){let i=Math.max(0,Math.round(Number(a)||0)),r=Math.floor(i/3600),p=Math.floor(i%3600/60);return r?`${r} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function Ka(a){if(!a)return"";let i=new Date(a);return Number.isNaN(i.getTime())?"":`${i.getFullYear()}/${i.getMonth()+1}/${i.getDate()}`}function qn({onPlay:a,currentId:i}){let[r,p]=(0,u.useState)(null),[v,g]=(0,u.useState)(""),[h,z]=(0,u.useState)(""),[N,C]=(0,u.useState)(""),[I,L]=(0,u.useState)(""),[j,$]=(0,u.useState)(0),[k,A]=(0,u.useState)(!1),[K,oe]=(0,u.useState)(""),[Z,he]=(0,u.useState)(""),[fe,we]=(0,u.useState)([]),[X,Se]=(0,u.useState)(!1),[Y,Ce]=(0,u.useState)(null),[ke,Me]=(0,u.useState)([]),[Ae,Ve]=(0,u.useState)(null),[R,W]=(0,u.useState)(!1),[b,H]=(0,u.useState)(""),[ne,me]=(0,u.useState)(null),[ee,_e]=(0,u.useState)(!1),[ge,be]=(0,u.useState)(null),[F,Re]=(0,u.useState)(!1),Te=(0,u.useCallback)(async(c=!1)=>{Se(!0);try{let P=await ut(`${je}/xyz/subscriptions${c?"?refresh=1":""}`);we(P.items||[])}catch(P){te(P)}finally{Se(!1)}},[]);function te(c){let P=String(c?.message||"");if(P.includes("\u767B\u5F55\u5DF2\u8FC7\u671F")||P.includes("\u767B\u5F55\u5DF2\u5931\u6548")){p(Ke=>({...Ke||{},loggedIn:!1})),we([]),Ce(null),Me([]),oe(""),g("\u5C0F\u5B87\u5B99\u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u6253\u5F00\u5C0F\u5B87\u5B99 App \u786E\u8BA4\u5DF2\u767B\u5F55\uFF0C\u518D\u70B9\u4E0A\u9762\u7684\u6309\u94AE\u91CD\u65B0\u8FDE\u63A5\u3002");return}g(f(P))}function f(c){return c?c.includes("\u8BF7\u5347\u7EA7")?"\u5C0F\u5B87\u5B99\u7684\u77ED\u4FE1\u63A5\u53E3\u8981\u6C42\u65B0\u7248\u5BA2\u6237\u7AEF\u9A8C\u8BC1\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u76F4\u63A5\u8BFB\u53D6 App \u7684\u767B\u5F55\u6001\u3002":c:"\u767B\u5F55\u5931\u8D25"}async function J(){try{await jo(`${je}/xyz/open-web`,{})}catch(c){te(c)}}(0,u.useEffect)(()=>{ut(`${je}/xyz/status`).then(c=>{p(c),c.loggedIn&&Te()}).catch(c=>te(c)),ut(`${je}/xyz/local-app`).then(c=>be(c)).catch(()=>be({available:!1}))},[Te]),(0,u.useEffect)(()=>{if(!j)return;let c=setInterval(()=>$(P=>Math.max(0,P-1)),1e3);return()=>clearInterval(c)},[j]);async function ue(){if(g(""),!/^1\d{10}$/.test(N.trim())){g("\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7");return}z("send");try{let c=await jo(`${je}/xyz/auth/send-code`,{phone:N.trim(),areaCode:"+86"});$(60),c.devCode&&g(`\u5F00\u53D1\u6A21\u5F0F\u9A8C\u8BC1\u7801\uFF1A${c.devCode}`)}catch(c){te(c)}finally{z("")}}async function Ne(){if(g(""),!N.trim()||!I.trim()){g("\u8BF7\u586B\u5199\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801");return}z("login");try{await jo(`${je}/xyz/auth/login`,{phone:N.trim(),code:I.trim(),areaCode:"+86"});let c=await ut(`${je}/xyz/status`);p(c),await Te()}catch(c){te(c)}finally{z("")}}async function Je(){if(g(""),!K.trim()){g("\u8BF7\u7C98\u8D34 refresh token \u6216 access token");return}z("token");try{await jo(`${je}/xyz/auth/token`,{refreshToken:K.trim(),deviceId:Z.trim()});let c=await ut(`${je}/xyz/status`);p(c),oe(""),await Te()}catch(c){te(c)}finally{z("")}}async function Ge(){g("");try{if(!navigator.clipboard?.readText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34");let c=await navigator.clipboard.readText();if(!c.trim())throw new Error("\u526A\u8D34\u677F\u662F\u7A7A\u7684");oe(c.trim())}catch(c){g(c?.message||"\u8BFB\u53D6\u526A\u8D34\u677F\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34")}}async function et(){g(""),z("app");try{await jo(`${je}/xyz/auth/from-app`,{});let c=await ut(`${je}/xyz/status`);p(c),await Te(!0)}catch(c){te(c)}finally{ut(`${je}/xyz/local-app`).then(c=>be(c)).catch(()=>{}),z("")}}async function xe(){z("logout");try{await jo(`${je}/xyz/auth/logout`,{}),p({loggedIn:!1}),we([]),Ce(null),Me([])}catch(c){te(c)}finally{z("")}}async function Xe(c){Ce(c),Me([]),Ve(null),W(!0),g("");try{let P=await ut(`${je}/xyz/podcast/${encodeURIComponent(c.pid)}/episodes?limit=30`);Me(P.items||[]),Ve(P.loadMoreKey||null)}catch(P){te(P)}finally{W(!1)}}async function T(){if(!(!Y||!Ae||R)){W(!0);try{let c=new URLSearchParams({limit:"30",loadMoreKey:Ae}),P=await ut(`${je}/xyz/podcast/${encodeURIComponent(Y.pid)}/episodes?${c}`);Me(Ke=>[...Ke,...P.items||[]]),Ve(P.loadMoreKey||null)}catch(c){te(c)}finally{W(!1)}}}async function G(c){z(`play:${c.eid}`),g("");try{await a(c)}catch(P){te(P)}finally{z("")}}async function O(){if(g(""),!b.trim()){g("\u8BF7\u7C98\u8D34\u64AD\u5BA2\u94FE\u63A5\u6216 24 \u4F4D pid");return}_e(!0);try{let c=b.trim();if(/\/episode\//i.test(c)){let P=await ut(`${je}/xyz/public/episode?url=${encodeURIComponent(c)}`);me({pid:P.podcast.pid,title:P.podcast.title,author:P.podcast.author,episodes:[P.episode]})}else{let P=await ut(`${je}/xyz/public/podcast?url=${encodeURIComponent(c)}`);me(P.podcast)}}catch(c){te(c)}finally{_e(!1)}}async function V(c){z(`pplay:${c.eid}`),g("");try{await a({...c,public:!0})}catch(P){te(P)}finally{z("")}}return r?r.loggedIn?Y?u.default.createElement("div",{className:"xyz-panel"},u.default.createElement("div",{className:"xyz-head"},u.default.createElement("button",{className:"btn ghost",onClick:()=>{Ce(null),Me([])}},"\u2190 \u8FD4\u56DE\u8BA2\u9605"),u.default.createElement("div",{className:"xyz-podcast-title"},Y.title)),R&&ke.length===0?u.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u5355\u96C6\u2026"):null,u.default.createElement("div",{className:"xyz-eps"},ke.map(c=>u.default.createElement("div",{key:c.eid,className:`xyz-ep ${i===`xyz${c.eid}`?"is-current":""}`},u.default.createElement("div",{className:"xyz-ep-main"},u.default.createElement("div",{className:"xyz-ep-title"},c.title),u.default.createElement("div",{className:"xyz-ep-meta"},Ka(c.pubDate)," \xB7 ",_a(c.duration),c.hasTranscript?u.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null,c.hasTranslation?u.default.createElement("span",{className:"row-badge is-bilingual"},"\u53CC\u8BED"):null)),u.default.createElement("button",{className:"btn primary",disabled:h===`play:${c.eid}`,onClick:()=>G(c)},h===`play:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E"))),!R&&ke.length===0?u.default.createElement("p",{className:"xyz-hint"},"\u8FD9\u4E2A\u64AD\u5BA2\u6682\u65F6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u5355\u96C6\u3002"):null,Ae?u.default.createElement("button",{className:"btn ghost xyz-more",disabled:R,onClick:T},R?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"):null),v?u.default.createElement("p",{className:"xyz-error"},v):null):u.default.createElement("div",{className:"xyz-panel"},u.default.createElement("div",{className:"xyz-head"},u.default.createElement("div",null,u.default.createElement("div",{className:"xyz-podcast-title"},"\u5C0F\u5B87\u5B99"),u.default.createElement("div",{className:"xyz-hint"},r.profile?.nickname?`\u5DF2\u767B\u5F55\uFF1A${r.profile.nickname}`:"\u5DF2\u767B\u5F55",(r.profile?.avatar,""))),u.default.createElement("div",{className:"xyz-head-actions"},u.default.createElement("button",{className:"btn ghost",disabled:X,onClick:()=>Te(!0)},X?"\u5237\u65B0\u4E2D\u2026":"\u5237\u65B0\u8BA2\u9605"),u.default.createElement("button",{className:"btn ghost",disabled:h==="logout",onClick:xe},"\u9000\u51FA\u767B\u5F55"))),X?u.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u2026"):null,u.default.createElement("div",{className:"xyz-subs"},fe.map(c=>u.default.createElement("button",{key:c.pid,className:"xyz-sub-card",onClick:()=>Xe(c)},c.cover?u.default.createElement("img",{className:"xyz-cover",src:c.cover,alt:"",loading:"lazy"}):u.default.createElement("div",{className:"xyz-cover xyz-cover-empty"}),u.default.createElement("div",{className:"xyz-sub-text"},u.default.createElement("div",{className:"xyz-sub-title"},c.title),u.default.createElement("div",{className:"xyz-sub-meta"},c.author||""))))),!X&&fe.length===0?u.default.createElement("p",{className:"xyz-hint"},"\u8FD8\u6CA1\u6709\u8BA2\u9605\u64AD\u5BA2\uFF0C\u5148\u53BB\u5C0F\u5B87\u5B99 App \u8BA2\u9605\u51E0\u4E2A\u5427\u3002"):null,v?u.default.createElement("p",{className:"xyz-error"},v):null):u.default.createElement("div",{className:"xyz-panel"},u.default.createElement("div",{className:"xyz-login"},u.default.createElement("h2",null,"\u8FDE\u63A5\u5C0F\u5B87\u5B99"),u.default.createElement("p",{className:"xyz-notice"},"\u5C0F\u5B87\u5B99\u6CA1\u6709\u5F00\u653E API\u3002\u63D2\u4EF6\u8BFB\u53D6\u4F60\u8D26\u53F7\u7684\u767B\u5F55\u6001\u6765\u540C\u6B65\u8BA2\u9605\u5E76\u5728\u7EBF\u64AD\u653E\uFF0Ctoken \u53EA\u4FDD\u5B58\u5728\u672C\u673A\u3002 \u7B2C\u4E09\u65B9\u63A5\u53E3\u6709\u6781\u5C0F\u6982\u7387\u89E6\u53D1\u98CE\u63A7\uFF0C\u8BF7\u81EA\u884C\u5224\u65AD\u662F\u5426\u4F7F\u7528\u3002"),u.default.createElement("div",{className:"xyz-actions"},u.default.createElement("button",{className:"btn primary",disabled:h==="app",onClick:et},h==="app"?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u53D6\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6001")),u.default.createElement("p",{className:"xyz-hint"},ge===null?"\u6B63\u5728\u68C0\u67E5\u672C\u673A\u5C0F\u5B87\u5B99 App\u2026":ge.available?`\u5DF2\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99 App \u7684\u767B\u5F55\u6570\u636E${ge.deviceId?`\uFF08\u8BBE\u5907 ${ge.deviceId.slice(0,8)}\u2026\uFF09`:""}\uFF0C\u70B9\u4E0A\u9762\u6309\u94AE\u5373\u53EF\u8FDE\u63A5\uFF0C\u4E0D\u7528\u518D\u5F00\u7F51\u9875\u6216\u6309 F12\u3002`:`${ge.reason||"\u6CA1\u6709\u627E\u5230\u672C\u673A\u5C0F\u5B87\u5B99\u767B\u5F55\u6001"}\u3002\u5728\u5C0F\u5B87\u5B99 App \u91CC\u767B\u5F55\u540E\u56DE\u5230\u8FD9\u91CC\u518D\u70B9\u4E00\u6B21\u5373\u53EF\u3002`),u.default.createElement("button",{className:"xyz-link",onClick:()=>Re(c=>!c)},F?"\u6536\u8D77\u624B\u52A8\u8FDE\u63A5":"\u624B\u52A8\u8FDE\u63A5\uFF08\u7F51\u9875\u7248\u590D\u5236 token / \u9A8C\u8BC1\u7801\u767B\u5F55\uFF09"),F?u.default.createElement(u.default.Fragment,null,u.default.createElement("ol",{className:"xyz-steps"},u.default.createElement("li",null,"\u70B9\u4E0B\u9762\u6309\u94AE\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875\u7248\uFF0C\u767B\u5F55\u3002"),u.default.createElement("li",null,"\u6309 F12 \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5207\u5230 Network \u9762\u677F\uFF0C\u5237\u65B0\u9875\u9762\u3002"),u.default.createElement("li",null,"\u70B9\u4EFB\u610F\u4E00\u4E2A web-api.xiaoyuzhoufm.com \u7684\u8BF7\u6C42\uFF0C\u5728 Request Headers \u91CC\u590D\u5236 ",u.default.createElement("code",null,"x-jike-refresh-token"),"\uFF08\u62FF\u4E0D\u5230\u5C31\u590D\u5236 ",u.default.createElement("code",null,"x-jike-access-token"),"\uFF0C\u4E5F\u80FD\u4E34\u65F6\u7528\uFF09\u3002"),u.default.createElement("li",null,"\u7C98\u8D34\u5230\u4E0B\u9762\uFF0C\u70B9\u300C\u8FDE\u63A5\u300D\u3002")),u.default.createElement("div",{className:"xyz-actions"},u.default.createElement("button",{className:"btn ghost",onClick:J},"\u6253\u5F00\u5C0F\u5B87\u5B99\u7F51\u9875")),u.default.createElement("div",{className:"xyz-advanced"},u.default.createElement("label",null,u.default.createElement("span",null,"refresh token \u6216 access token"),u.default.createElement("input",{value:K,onChange:c=>oe(c.target.value),placeholder:"x-jike-refresh-token / x-jike-access-token"}),u.default.createElement("button",{className:"xyz-link",type:"button",onClick:Ge},"\u4ECE\u526A\u8D34\u677F\u7C98\u8D34")),u.default.createElement("label",null,u.default.createElement("span",null,"device id\uFF08\u53EF\u9009\uFF0C\u6362\u8BBE\u5907\u65F6\u586B\uFF09"),u.default.createElement("input",{value:Z,onChange:c=>he(c.target.value),placeholder:"x-jike-device-id"})),u.default.createElement("button",{className:"btn primary",disabled:h==="token",onClick:Je},h==="token"?"\u9A8C\u8BC1\u4E2D\u2026":"\u8FDE\u63A5")),u.default.createElement("button",{className:"xyz-link",onClick:()=>A(c=>!c)},k?"\u6536\u8D77":"\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55\uFF08\u5C0F\u5B87\u5B99\u53EF\u80FD\u5DF2\u9650\u5236\uFF0C\u6210\u529F\u7387\u4F4E\uFF09"),k?u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"xyz-fields"},u.default.createElement("label",null,u.default.createElement("span",null,"\u624B\u673A\u53F7"),u.default.createElement("input",{value:N,onChange:c=>C(c.target.value),placeholder:"11 \u4F4D\u624B\u673A\u53F7",inputMode:"numeric"})),u.default.createElement("button",{className:"btn ghost",disabled:h==="send"||j>0,onClick:ue},j>0?`${j}s \u540E\u91CD\u53D1`:h==="send"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u9A8C\u8BC1\u7801")),u.default.createElement("div",{className:"xyz-fields"},u.default.createElement("label",null,u.default.createElement("span",null,"\u9A8C\u8BC1\u7801"),u.default.createElement("input",{value:I,onChange:c=>L(c.target.value),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",inputMode:"numeric"})),u.default.createElement("button",{className:"btn primary",disabled:h==="login",onClick:Ne},h==="login"?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))):null):null,u.default.createElement("div",{className:"xyz-public"},u.default.createElement("h3",null,"\u4E0D\u767B\u5F55\u4E5F\u80FD\u542C\uFF1A\u516C\u5F00\u64AD\u5BA2"),u.default.createElement("p",{className:"xyz-hint"},"\u7C98\u8D34\u5C0F\u5B87\u5B99\u64AD\u5BA2\u94FE\u63A5\uFF08/podcast/\u2026\uFF09\u6216\u5355\u96C6\u94FE\u63A5\uFF08/episode/\u2026\uFF09\uFF0C\u53EF\u76F4\u63A5\u5728\u7EBF\u64AD\u653E\u5E76\u4E0B\u8F7D\u8F6C\u5199\u516C\u5F00\u5355\u96C6\u3002"),u.default.createElement("div",{className:"xyz-fields"},u.default.createElement("label",null,u.default.createElement("span",null,"\u64AD\u5BA2\u94FE\u63A5 / pid"),u.default.createElement("input",{value:b,onChange:c=>H(c.target.value),placeholder:"https://www.xiaoyuzhoufm.com/podcast/\u2026"})),u.default.createElement("button",{className:"btn ghost",disabled:ee,onClick:O},ee?"\u52A0\u8F7D\u4E2D\u2026":"\u6D4F\u89C8")),ne?u.default.createElement("div",{className:"xyz-eps"},u.default.createElement("div",{className:"xyz-ep-title"},ne.title,u.default.createElement("span",{className:"xyz-hint"}," \xB7 ",ne.author)),ne.episodes.map(c=>u.default.createElement("div",{key:c.eid,className:`xyz-ep ${i===`xyz${c.eid}`?"is-current":""}`},u.default.createElement("div",{className:"xyz-ep-main"},u.default.createElement("div",{className:"xyz-ep-title"},c.title),u.default.createElement("div",{className:"xyz-ep-meta"},Ka(c.pubDate)," \xB7 ",_a(c.duration),c.hasTranscript?u.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null,c.hasTranslation?u.default.createElement("span",{className:"row-badge is-bilingual"},"\u53CC\u8BED"):null)),u.default.createElement("button",{className:"btn primary",disabled:h===`pplay:${c.eid}`,onClick:()=>V(c)},h===`pplay:${c.eid}`?"\u6253\u5F00\u4E2D\u2026":"\u64AD\u653E")))):null),v?u.default.createElement("p",{className:"xyz-error"},v):null)):u.default.createElement("div",{className:"xyz-panel"},u.default.createElement("p",{className:"xyz-hint"},"\u6B63\u5728\u8BFB\u53D6\u5C0F\u5B87\u5B99\u767B\u5F55\u72B6\u6001\u2026"))}var _=it(require("react"),1);var tn="/podwave/api";async function Zr(a){let i=await fetch(a),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(r.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return r}function Jn({items:a=[],onRefresh:i,onFlash:r}){let[p,v]=(0,_.useState)(""),[g,h]=(0,_.useState)(null),[z,N]=(0,_.useState)(!1),[C,I]=(0,_.useState)(!1),L=(0,_.useCallback)(async k=>{v(k),N(!0);try{let A=await Zr(`${tn}/live/history/${encodeURIComponent(k)}`);h(A.item||null)}catch(A){r?.(A.message||"\u8BFB\u53D6\u5931\u8D25"),h(null)}finally{N(!1)}},[r]);(0,_.useEffect)(()=>{p&&!a.some(k=>k.id===p)&&(v(""),h(null))},[a,p]);let j=async k=>{if(window.confirm("\u5220\u9664\u8FD9\u6761\u5B9E\u65F6\u5B57\u5E55\u8BB0\u5F55\uFF1F\u4F1A\u540C\u65F6\u5220\u9664\u5BF9\u5E94\u7684 JSON / SRT / MD \u6587\u4EF6\u3002"))try{if(!(await fetch(`${tn}/live/history/${encodeURIComponent(k)}`,{method:"DELETE"})).ok)throw new Error("\u5220\u9664\u5931\u8D25");p===k&&(v(""),h(null)),await i?.(),r?.("\u5DF2\u5220\u9664\u5B9E\u65F6\u5B57\u5E55\u8BB0\u5F55")}catch(A){r?.(A.message||"\u5220\u9664\u5931\u8D25")}},$=async()=>{if(!g?.lines?.length)return;let k=g.target||"zh",A=g.lines.map(K=>{let oe=He(K.start),Z=K.translations?.[k]||K.translations?.zh||K.translations?.en||"";return Z?`${oe} ${K.text}
${" ".repeat(oe.length+1)}${Z}`:`${oe} ${K.text}`}).join(`
`);try{await navigator.clipboard.writeText(A),I(!0),setTimeout(()=>I(!1),1600)}catch{r?.("\u590D\u5236\u5931\u8D25")}};if(g){let k=g.target||"zh";return _.default.createElement("section",{className:"live-history-detail"},_.default.createElement("div",{className:"detail-top"},_.default.createElement("button",{className:"back-link",onClick:()=>{v(""),h(null)}},"\u2190 \u8FD4\u56DE\u5B9E\u65F6\u8BB0\u5F55"),_.default.createElement("div",{className:"live-history-actions"},_.default.createElement("a",{className:"btn ghost",href:`${tn}/live/history/${encodeURIComponent(g.id)}/export?format=srt`},"\u5BFC\u51FA .srt"),_.default.createElement("a",{className:"btn ghost",href:`${tn}/live/history/${encodeURIComponent(g.id)}/export?format=md`},"\u5BFC\u51FA .md"),_.default.createElement("button",{className:"btn ghost",onClick:$},C?"\u5DF2\u590D\u5236":"\u590D\u5236\u5168\u6587"),_.default.createElement("button",{className:"btn ghost danger",onClick:()=>j(g.id)},"\u5220\u9664"))),_.default.createElement("h2",{className:"live-history-title"},g.title),_.default.createElement("p",{className:"live-history-sub"},"\u5171 ",g.lines?.length||0," \u53E5 \xB7 ",Ao(g.createdAt)),_.default.createElement("div",{className:"live-history-lines"},(g.lines||[]).map(A=>{let K=A.translations?.[k]||A.translations?.zh||A.translations?.en||"";return _.default.createElement("div",{key:A.id,className:"live-history-line"},_.default.createElement("span",{className:"seg-time"},He(A.start)),_.default.createElement("span",{className:"seg-text"},A.text,K?_.default.createElement("span",{className:"seg-trans"},K):null))})))}return _.default.createElement("section",{className:"live-history-panel"},z?_.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5F55\u2026"):null,!z&&a.length===0?_.default.createElement("div",{className:"empty"},_.default.createElement("p",null,"\u8FD8\u6CA1\u6709\u4FDD\u5B58\u7684\u5B9E\u65F6\u5B57\u5E55\u8BB0\u5F55"),_.default.createElement("p",{className:"empty-hint"},"\u70B9\u53F3\u4E0A\u89D2\u300C\u5B9E\u65F6\u5B57\u5E55\u300D\u542C\u7535\u8111\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF1B\u5F00\u542F\u300C\u505C\u6B62\u65F6\u81EA\u52A8\u4FDD\u5B58\u300D\u540E\uFF0C\u6BCF\u6B21\u7ED3\u675F\u90FD\u4F1A\u7559\u5728\u8FD9\u91CC\uFF0C\u65B9\u4FBF\u56DE\u770B\u548C\u5BFC\u51FA\u3002")):null,!z&&a.length>0?_.default.createElement("div",{className:"live-history-list"},a.map(k=>_.default.createElement("div",{key:k.id,className:"live-history-card",role:"button",tabIndex:0,onClick:()=>L(k.id),onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),L(k.id))}},_.default.createElement("div",{className:"live-history-card-main"},_.default.createElement("div",{className:"live-history-card-title"},k.title),_.default.createElement("div",{className:"live-history-card-meta"},Ao(k.createdAt)," \xB7 ",k.lines," \u53E5",k.durationSec?` \xB7 ${Ro(k.durationSec)}`:""),k.preview?_.default.createElement("div",{className:"live-history-card-preview"},k.preview):null),_.default.createElement("div",{className:"live-history-card-ops",onClick:A=>A.stopPropagation()},_.default.createElement("a",{className:"mini-link",href:`${tn}/live/history/${encodeURIComponent(k.id)}/export?format=md`},"\u5BFC\u51FA MD"),_.default.createElement("button",{className:"mini-link",onClick:()=>j(k.id)},"\u5220\u9664"))))):null)}var co=require("react"),zn="podwave:themeMode",Nn=new Set(["system","light","dark"]);function Ja(a){return Nn.has(a)?a:"system"}function Wa(){try{let a=window.localStorage?.getItem(zn);return a?Ja(a):"system"}catch{return"system"}}function Xn(a){try{if(!window.localStorage)return;a==="system"?window.localStorage.removeItem(zn):window.localStorage.setItem(zn,a)}catch{}}function Gr(a){let i=String(a||"").match(/rgba?\(([^)]+)\)/);if(!i)return null;let r=i[1].split(",").map(v=>Number.parseFloat(v));if(r.length<3||r.length>3&&r[3]===0)return null;let p=v=>{let g=v/255;return g<=.03928?g/12.92:((g+.055)/1.055)**2.4};return .2126*p(r[0])+.7152*p(r[1])+.0722*p(r[2])}function Qr(){if(typeof document>"u")return null;for(let a of[document.body,document.documentElement]){if(!a)continue;let i=getComputedStyle(a).backgroundColor,r=Gr(i);if(r!==null)return r}return null}function qa(){if(typeof document>"u")return"dark";let a=Qr();if(a!==null)return a>.5?"light":"dark";let i=[document.documentElement.className,document.documentElement.dataset.theme,document.body?.className].filter(Boolean).join(" ").toLowerCase();return/\blight\b/.test(i)?"light":/\bdark\b/.test(i)?"dark":window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark"}function Rr(a,{persistRemote:i=!0}={}){let r=Ja(a);return Xn(r),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:theme-mode",{detail:{mode:r}})),i&&typeof fetch=="function"&&fetch("/podwave/api/ui-settings",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({themeMode:r})}).then(p=>p.ok?p.json():null).then(p=>{p&&typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:p}))}).catch(()=>{}),r}function on(){let[a,i]=(0,co.useState)(qa),[r,p]=(0,co.useState)(Wa);(0,co.useEffect)(()=>{let h=()=>i(qa());h();let z=new MutationObserver(h);z.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.body&&z.observe(document.body,{attributes:!0,attributeFilter:["class","style","data-theme"]});let N=window.matchMedia?.("(prefers-color-scheme: light)"),C=window.matchMedia?.("(prefers-color-scheme: dark)");N?.addEventListener?.("change",h),C?.addEventListener?.("change",h);let I=k=>{let A=k?.detail?.mode;Nn.has(A)&&p(A)},L=k=>{let A=k?.detail?.themeMode;Nn.has(A)&&(Xn(A),p(A))},j=k=>{k.key===zn&&p(Wa())};window.addEventListener("podwave:theme-mode",I),window.addEventListener("podwave:ui-settings",L),window.addEventListener("storage",j);let $=!1;return fetch("/podwave/api/ui-settings").then(k=>k.ok?k.json():null).then(k=>{$||!k||Nn.has(k.themeMode)&&(Xn(k.themeMode),p(k.themeMode))}).catch(()=>{}),()=>{$=!0,z.disconnect(),N?.removeEventListener?.("change",h),C?.removeEventListener?.("change",h),window.removeEventListener("podwave:theme-mode",I),window.removeEventListener("podwave:ui-settings",L),window.removeEventListener("storage",j)}},[]);let v=(0,co.useCallback)(h=>{let z=Rr(h);p(z)},[]);return{theme:r==="system"?a:r,mode:r,systemTheme:a,setMode:v}}function Xa(){return on().theme}function Yn(a){return String(a||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"")}function Ya(a,i){let r=Yn(i),p=r?`${r}/`:"",v=new Map;for(let g of a){let h=Yn(g?.rel);if(!h||p&&!h.startsWith(p))continue;let N=h.slice(p.length).split("/")[0];if(!N)continue;let C=p?`${p}${N}`:N,I=v.get(C)||{rel:C,name:N,count:0};I.count+=1,v.set(C,I)}return[...v.values()].sort((g,h)=>g.name.localeCompare(h.name,"zh-Hans-CN"))}function Za(a,i){let r=[{rel:"",label:a}],p=Yn(i);if(!p)return r;let v="";for(let g of p.split("/").filter(Boolean))v=v?`${v}/${g}`:g,r.push({rel:v,label:g});return r}function Ga(a){if(a.type==="download")return a.status==="done"?"\u5DF2\u4E0B\u8F7D":a.status==="error"||a.status==="interrupted"?a.error||"\u4E0B\u8F7D\u5931\u8D25":`\u4E0B\u8F7D\u4E2D${a.progress?` ${a.progress}%`:""}`;let i=a.progress?.percent,r=a.chunks?.total?` \xB7 ${a.chunks.done}/${a.chunks.total} \u5757`:"";return a.status==="done"?`\u5B8C\u6210${a.lineCount?` \xB7 ${a.lineCount} \u884C`:""}${a.language?` \xB7 ${a.language}`:""}`:a.status==="error"||a.status==="interrupted"?a.error||"\u5931\u8D25":a.status==="cancelled"?a.error||"\u5DF2\u53D6\u6D88":a.status==="queued"?"\u6392\u961F\u4E2D":`${a.stage==="translating"?"\u81EA\u52A8\u7FFB\u8BD1\u4E2D":a.stage==="diarizing"?"\u8BC6\u522B\u8BF4\u8BDD\u4EBA":a.stage==="merging"?"\u5408\u5E76\u5B57\u5E55":a.stage==="preparing"?"\u51C6\u5907\u97F3\u9891":a.stage==="cancelling"?"\u6B63\u5728\u53D6\u6D88":"\u8F6C\u5199\u4E2D"}${i!=null?` ${i}%`:""}${r}`}var M="/podwave/api",es=[.5,.75,1,1.25,1.5,1.75,2];async function $e(a){let i=await fetch(a);if(!i.ok){let r=await i.json().catch(()=>({}));throw new Error(r.error||i.statusText)}return i.json()}async function ce(a,i,r){let p=await fetch(a,{method:i,headers:r?{"Content-Type":"application/json"}:void 0,body:r?JSON.stringify(r):void 0});if(!p.ok){let v=await p.json().catch(()=>({}));throw new Error(v.error||p.statusText)}return p.json()}async function ts(a,i=1200){let r=await createImageBitmap(a),p=Math.min(1,i/Math.max(r.width,r.height)),v=Math.max(1,Math.round(r.width*p)),g=Math.max(1,Math.round(r.height*p)),h=document.createElement("canvas");h.width=v,h.height=g;let z=h.getContext("2d");z.fillStyle="#16161a",z.fillRect(0,0,v,g),z.drawImage(r,0,0,v,g),typeof r.close=="function"&&r.close();let N=await new Promise(C=>h.toBlob(C,"image/jpeg",.9));if(!N)throw new Error("\u8FD9\u5F20\u56FE\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20\u8BD5\u8BD5");return N}function Zn(){let{mode:a,setMode:i}=on(),[r,p]=(0,t.useState)([]),[v,g]=(0,t.useState)([]),[h,z]=(0,t.useState)({}),[N,C]=(0,t.useState)({running:!1}),[I,L]=(0,t.useState)({rate:1,volume:.9,lastEpisodeId:null}),[j,$]=(0,t.useState)(!1),[k,A]=(0,t.useState)(!1),[K,oe]=(0,t.useState)(0),[Z,he]=(0,t.useState)(0),[fe,we]=(0,t.useState)(0),[X,Se]=(0,t.useState)(!1),[Y,Ce]=(0,t.useState)(""),[ke,Me]=(0,t.useState)([]),[Ae,Ve]=(0,t.useState)("recent"),[R,W]=(0,t.useState)("all"),[b,H]=(0,t.useState)(""),[ne,me]=(0,t.useState)(""),[ee,_e]=(0,t.useState)("all"),[ge,be]=(0,t.useState)(null),[F,Re]=(0,t.useState)(null),[Te,te]=(0,t.useState)(!1),[f,J]=(0,t.useState)(0),[ue,Ne]=(0,t.useState)(0),[Je,Ge]=(0,t.useState)(!0),[et,xe]=(0,t.useState)(!1),[Xe,T]=(0,t.useState)(""),[G,O]=(0,t.useState)(""),[V,c]=(0,t.useState)(null),[P,Ke]=(0,t.useState)("none"),[Fo,vo]=(0,t.useState)(null),[Nt,an]=(0,t.useState)(null),mo=(0,t.useRef)(new Set),[go,fo]=(0,t.useState)(15),[zt,Ot]=(0,t.useState)({width:null,height:null}),[Ue,$t]=(0,t.useState)(null),ho=(0,t.useRef)(null),[wo,St]=(0,t.useState)(!1),[Uo,bo]=(0,t.useState)(0),[xo,vt]=(0,t.useState)(""),[mt,Bt]=(0,t.useState)(!1),[jt,dt]=(0,t.useState)(!0),[yo,$n]=(0,t.useState)(null),[ze,tt]=(0,t.useState)("zh"),[Zt,Ho]=(0,t.useState)(!0),[gt,ft]=(0,t.useState)({status:"none"}),[Vo,Sn]=(0,t.useState)([]),[Cn,ko]=(0,t.useState)(""),[rn,se]=(0,t.useState)(!1),[No,zo]=(0,t.useState)(!1),[ht,_o]=(0,t.useState)(null),[$o,Ko]=(0,t.useState)(!1),[Gt,Qt]=(0,t.useState)([]),[Rt,eo]=(0,t.useState)(!1),[Oe,ot]=(0,t.useState)([]),[Ct,Ft]=(0,t.useState)(null),[to,Mt]=(0,t.useState)(""),[Tt,Wo]=(0,t.useState)([]),[ie,nt]=(0,t.useState)("idle"),[ae,Dt]=(0,t.useState)([]),[ye,wt]=(0,t.useState)(""),[So,Co]=(0,t.useState)(""),[sn,bt]=(0,t.useState)(0),[oo,Mo]=(0,t.useState)(0),[To,qo]=(0,t.useState)(0),[no,ao]=(0,t.useState)(""),[Ut,pt]=(0,t.useState)(!1),[Et,Ht]=(0,t.useState)(!1),[Qn,Mn]=(0,t.useState)(null),[Jo,Tn]=(0,t.useState)(!0),[Xo,Vt]=(0,t.useState)(!1),[Dn,ln]=(0,t.useState)(.78),[Rn,dn]=(0,t.useState)(18),[Do,Yo]=(0,t.useState)(780),[pn,ro]=(0,t.useState)("bilingual"),De=(0,t.useRef)(null),Pt=(0,t.useRef)(""),cn=(0,t.useRef)(null),Q=(0,t.useRef)(null),Zo=(0,t.useRef)(null),Qe=(0,t.useRef)(0),xt=(0,t.useRef)(I),Lt=(0,t.useRef)(0),It=(0,t.useRef)(0),s=(0,t.useRef)(0),d=(0,t.useRef)(0),w=(0,t.useRef)(!1),le=(0,t.useRef)(!1),We=(0,t.useRef)(null),Ye=(0,t.useRef)([]),_t=(0,t.useRef)(!1),at=(0,t.useRef)(""),Ee=(0,t.useRef)([]),Le=(0,t.useRef)(0),Kt=(0,t.useRef)(0),rt=(0,t.useRef)(0),ea=(0,t.useRef)(!0),ta=(0,t.useRef)(0),oa=(0,t.useRef)(ze),na=(0,t.useRef)(Zt);(0,t.useEffect)(()=>{A(!1),ge&&dt(!0)},[ge]),(0,t.useEffect)(()=>{xt.current=I},[I]),(0,t.useEffect)(()=>{Q.current=F},[F]),(0,t.useEffect)(()=>{Zo.current=V},[V]),(0,t.useEffect)(()=>{Qe.current=ue},[ue]),(0,t.useEffect)(()=>{oa.current=ze},[ze]),(0,t.useEffect)(()=>{na.current=Zt},[Zt]);let Wt=(0,t.useCallback)(async()=>{try{let e=await $e(`${M}/live/history`);Sn(Array.isArray(e?.items)?e.items:[])}catch{}},[]);(0,t.useEffect)(()=>{Wt()},[Wt]),(0,t.useEffect)(()=>{let e=!1;return $e(`${M}/transcribe/settings`).then(n=>{e||an(n||null)}).catch(()=>{}),()=>{e=!0}},[]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await $e(`${M}/ui-settings`);!e&&n&&(se(!!n.sidebarCollapsed),Number.isFinite(Number(n.subtitleSize))&&fo(Number(n.subtitleSize)),Ot({width:Number.isFinite(Number(n.transcriptW))&&n.transcriptW!==null?Number(n.transcriptW):null,height:Number.isFinite(Number(n.transcriptH))&&n.transcriptH!==null?Number(n.transcriptH):null}),Number.isFinite(Number(n.episodeLeftW))&&n.episodeLeftW!==null&&$t(Number(n.episodeLeftW)),typeof n.autoShowTranslation=="boolean"&&Ho(n.autoShowTranslation),(n.translateTarget===""||n.translateTarget==="zh"||n.translateTarget==="en")&&tt(n.translateTarget))}catch{}})(),()=>{e=!0}},[]);let qt=(0,t.useCallback)(e=>{fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).catch(()=>{})},[]),aa=(0,t.useCallback)(e=>{let n=Math.max(12,Math.min(42,Math.round(Number(e)||15)));fo(n),qt({subtitleSize:n})},[qt]),ra=(0,t.useCallback)((e,n,l)=>{let m={width:e??null,height:n??null};Ot(m),l&&qt({transcriptW:m.width,transcriptH:m.height})},[qt]),un=(0,t.useRef)(null),sa=(0,t.useRef)(null),ia=e=>{let n=un.current;return n?Math.round(Math.min(460,Math.max(140,n.width+(e.clientX-n.startX)))):null},er=e=>{if(e.button!==void 0&&e.button!==0)return;let n=sa.current;n&&(e.preventDefault(),un.current={startX:e.clientX,width:n.getBoundingClientRect().width},e.currentTarget.setPointerCapture?.(e.pointerId))},tr=e=>{let n=ia(e);n!=null&&$t(n)},la=e=>{if(!un.current)return;let n=ia(e);un.current=null,e.currentTarget.releasePointerCapture?.(e.pointerId),n!=null&&($t(n),qt({episodeLeftW:n}))},or=()=>{$t(null),qt({episodeLeftW:null})},nr=()=>ho.current?.click(),ar=async e=>{if(!(!e||!ge)){St(!0);try{let n=await ts(e),l=await fetch(`${M}/episodes/${encodeURIComponent(ge)}/cover`,{method:"POST",headers:{"content-type":"image/jpeg"},body:n});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||"\u6362\u5C01\u9762\u5931\u8D25")}await qe(),S("\u5C01\u9762\u5DF2\u66F4\u65B0")}catch(n){S(String(n.message||n))}finally{St(!1)}}},rr=async()=>{if(ge){St(!0);try{let e=await fetch(`${M}/episodes/${encodeURIComponent(ge)}/cover`,{method:"DELETE"});if(!e.ok){let n=await e.json().catch(()=>({}));throw new Error(n.error||"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762\u5931\u8D25")}await qe(),S("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5C01\u9762")}catch(e){S(String(e.message||e))}finally{St(!1)}}},da=(0,t.useCallback)(()=>{se(e=>{let n=!e;return fetch(`${M}/ui-settings`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({sidebarCollapsed:n})}).catch(()=>{}),n})},[]),S=(0,t.useCallback)(e=>{O(e),window.clearTimeout(d.current),d.current=window.setTimeout(()=>O(""),2600)},[]);(0,t.useEffect)(()=>{if(ie!=="listening"&&ie!=="asking")return;Mo(Date.now());let e=window.setInterval(()=>Mo(Date.now()),1e3);return()=>window.clearInterval(e)},[ie]),(0,t.useEffect)(()=>{if(ie!=="listening")return;let e=window.setInterval(()=>qo(Le.current),200);return()=>window.clearInterval(e)},[ie]),(0,t.useEffect)(()=>{if(ie!=="listening"||Et)return;let e=window.setInterval(()=>{let n=Date.now()-(Kt.current||0);n>6e3&&Ee.current.length===0?ao("\u6CA1\u6536\u5230\u58F0\u97F3\u3002\u7CFB\u7EDF\u8F93\u51FA\u8981\u9009\u300C\u591A\u8F93\u51FA\u8BBE\u5907\u300D\uFF08\u626C\u58F0\u5668 + BlackHole 2ch\uFF09\uFF0C\u53EA\u9009\u626C\u58F0\u5668\u7684\u8BDD\u63D2\u4EF6\u542C\u4E0D\u5230"):n<1500&&ao("")},1200);return()=>window.clearInterval(e)},[ie,Et]);let At=(0,t.useCallback)(e=>{fetch(`${M}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"update",payload:e})}).catch(()=>{})},[]),pa=(0,t.useCallback)(async()=>{if(!_t.current){_t.current=!0;try{for(;Ye.current.length;){let e=Ye.current.shift(),n=at.current;if(!n)break;try{let l=await fetch(`${M}/live/segment?session=${encodeURIComponent(n)}&start=${e.start}&end=${e.end}`,{method:"POST",headers:{"content-type":"audio/wav"},body:e.wav}),m=await l.json().catch(()=>({}));if(!l.ok)throw new Error(m.error||l.statusText);if(m.lines?.length){Ee.current=[...Ee.current,...m.lines],Dt(Ee.current);let E=Ee.current,U=E[E.length-1],re=E[E.length-2];At({text:U?.text||"",translation:U?.translations?.zh||U?.translations?.en||"",previous:re?.text||"",previousTranslation:re?.translations?.zh||re?.translations?.en||"",status:"listening",hint:""})}wt(m.lastError||"")}catch(l){wt(l.message||String(l))}}}finally{_t.current=!1}}},[At]),cs=(0,t.useCallback)(e=>{Number.isFinite(Number(e.opacity))&&ln(Number(e.opacity)),Number.isFinite(Number(e.fontSize))&&dn(Number(e.fontSize)),Number.isFinite(Number(e.width))&&Yo(Number(e.width)),At(e),window.clearTimeout(ta.current),ta.current=window.setTimeout(()=>{ce(`${M}/live/settings`,"PUT",e).catch(()=>{})},600)},[At]),so=(0,t.useCallback)(async e=>{nt("saving");let n=at.current;at.current="",fetch(`${M}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"close"})}).catch(()=>{});try{(await ce(`${M}/live/stop`,"POST",{session:n,save:!!e})).saved?(Wt(),S("\u5B9E\u65F6\u5B57\u5E55\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u5728\u5DE6\u4FA7\u300C\u5B9E\u65F6\u8BB0\u5F55\u300D\u67E5\u770B")):S("\u5B9E\u65F6\u5B57\u5E55\u5DF2\u7ED3\u675F")}catch(l){S(`\u7ED3\u675F\u5B9E\u65F6\u5B57\u5E55\u5931\u8D25\uFF1A${l.message||l}`)}finally{fetch(`${M}/live/window`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"close"})}).catch(()=>{}),pt(!1),Ht(!1),Vt(!1),rt.current=0,Ye.current=[],Ee.current=[],nt("idle"),Dt([]),ko(""),wt(""),Co(""),bt(0)}},[S,Wt]),ca=(0,t.useCallback)(async()=>{if(Et){try{await ce(`${M}/live/tap`,"POST",{action:"stop",keep:!0})}catch{}try{let l=await $e(`${M}/live/lines?since=${rt.current}`);Array.isArray(l?.lines)&&l.lines.length&&(Ee.current=[...Ee.current,...l.lines],Dt(Ee.current),rt.current=Ee.current[Ee.current.length-1]?.id||rt.current)}catch{}Ee.current.length?await so(Jo):await so(!1);return}let e=We.current;We.current=null,e&&await e.stop().catch(()=>{});let n=Date.now()+5e3;for(;(Ye.current.length||_t.current)&&Date.now()<n;)await new Promise(l=>setTimeout(l,150));Ee.current.length&&!Ut?nt("asking"):await so(Ee.current.length?Jo:!1)},[so,Ut,Jo,Et]);(0,t.useEffect)(()=>{if(!Et&&!Ut||ie!=="listening")return;let e=!1,n=window.setInterval(async()=>{try{let l=await $e(`${M}/live/lines?since=${rt.current}`);if(e)return;if(Et){let m=!1,E=[...Ee.current];if(Array.isArray(l?.lines)&&l.lines.length){for(let U of l.lines)E.some(re=>re.id===U.id)||E.push(U);m=!0}if(Array.isArray(l?.recent)&&l.recent.length)for(let U of l.recent){let re=E.findIndex(ve=>ve.id===U.id);re>=0&&U.translations&&JSON.stringify(E[re].translations)!==JSON.stringify(U.translations)&&(E[re]={...E[re],translations:U.translations},m=!0)}m&&(Ee.current=E,Dt(E),rt.current=E[E.length-1]?.id||rt.current),ko(typeof l?.draft=="string"?l.draft:""),["original","bilingual","translation"].includes(l?.displayMode)&&ro(l.displayMode),Number.isFinite(Number(l?.level))&&(Le.current=Number(l.level),Number(l.level)>.004&&(Kt.current=Date.now())),typeof l?.hint=="string"&&l.hint!==no&&ao(l.hint),l?.lastError&&wt(String(l.lastError))}if(l?.alive===!1){let m=We.current;We.current=null,m&&m.stop().catch(()=>{}),at.current="",Ye.current=[],rt.current=0,Ee.current=[],Dt([]),ko(""),pt(!1),Ht(!1),Vt(!1),nt("idle"),Co(""),bt(0),ao(""),Wt()}}catch{}},500);return()=>{e=!0,window.clearInterval(n)}},[Et,Ut,ie,no,Wt]);let sr=(0,t.useCallback)(e=>{["original","bilingual","translation"].includes(e)&&(ro(e),At({displayMode:e}),ce(`${M}/live/settings`,"PUT",{displayMode:e}).catch(()=>{}))},[At]),ua=(0,t.useCallback)(async(e={})=>{try{let n=Number.isFinite(Number(e.opacity))?Number(e.opacity):.78,l=Number.isFinite(Number(e.fontSize))?Number(e.fontSize):18,m=Number.isFinite(Number(e.width))?Number(e.width):780,E=Number.isFinite(Number(e.height))&&Number(e.height)>=88?Number(e.height):0,U=["original","bilingual","translation"].includes(e.displayMode)?e.displayMode:"bilingual";ln(n),dn(l),Yo(m),ro(U);let re=await ce(`${M}/live/window`,"POST",{action:"open"});if(re?.ok)return pt(!0),At({text:"",status:"listening",hint:"\u542C\u7740\u5462\uFF0C\u64AD\u653E\u58F0\u97F3\u5C31\u4F1A\u51FA\u5B57\u5E55",opacity:n,fontSize:l,width:m,height:E,displayMode:U,saveOnStop:ea.current}),!0;pt(!1),re?.error&&S(`\u72EC\u7ACB\u5B57\u5E55\u7A97\u6CA1\u6253\u5F00\uFF0C\u5B57\u5E55\u663E\u793A\u5728\u5361\u7247\u91CC\uFF1A${re.error}`)}catch{pt(!1)}return!1},[S,At]),ir=(0,t.useCallback)(async()=>{if(!(ie==="starting"||ie==="listening")){wt(""),Dt([]),Ee.current=[],nt("starting");try{let e=await $e(`${M}/live`);Tn(e.saveOnStop!==!1),ea.current=e.saveOnStop!==!1;let n=["original","bilingual","translation"].includes(e.displayMode)?e.displayMode:"bilingual";if(ro(n),!e.ready)throw new Error("\u8FD8\u6CA1\u6709\u586B DeepSeek API key\u3002\u8BBE\u7F6E \u2192\u300C\u7FFB\u8BD1\u300D\u91CC\u586B\u4E00\u4E2A\uFF0C\u8F6C\u5199\u548C\u5B9E\u65F6\u5B57\u5E55\u90FD\u80FD\u7528");let l=e.deviceId||"",m=e.deviceLabel||"";if(!l){let ve=await Ha().catch(()=>[]),Ze=Wn(ve);Ze&&(l=Ze.deviceId,m=Ze.label||"")}if(e.tap?.supported!==!1&&e.source!=="browser"){Vt(!0);try{let ve=await ce(`${M}/live/tap`,"POST",{target:e.target||"zh",displayMode:n,chunkMs:200});if(ve?.ok){Mn(ve),Ht(!0),at.current=ve.session?.id||"",Co("\u7CFB\u7EDF\u97F3\u9891"),bt(Date.now()),nt("listening"),Kt.current=Date.now(),await ua(e)||Vt(!1);return}Vt(!1),S(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ve?.error||"\u672A\u77E5\u539F\u56E0"}`)}catch(ve){Vt(!1),S(`\u7CFB\u7EDF\u97F3\u9891\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u865A\u62DF\u58F0\u5361\uFF1A${ve.message||ve}`)}}Ht(!1);let U=await ce(`${M}/live/start`,"POST",{target:e.target||"zh",displayMode:n});if(!U?.session?.id)throw new Error("\u5BBF\u4E3B\u6CA1\u7ED9\u51FA\u4F1A\u8BDD id");at.current=U.session.id;let re=await Va({deviceId:l,onLevel:ve=>{Le.current=ve,ve>.004&&(Kt.current=Date.now())},onSegment:ve=>{Ye.current.length>8&&Ye.current.shift(),Ye.current.push(ve),pa()}});We.current=re,Co(re.label||m||"\u7CFB\u7EDF\u58F0\u97F3"),bt(Date.now()),nt("listening"),Kt.current=Date.now(),await ua(e),l&&(l!==e.deviceId||(re.label||m)!==e.deviceLabel)&&ce(`${M}/live/settings`,"PUT",{deviceId:l,deviceLabel:re.label||m}).catch(()=>{})}catch(e){at.current&&ce(`${M}/live/stop`,"POST",{session:at.current,save:!1}).catch(()=>{}),at.current="",We.current=null,nt("idle");let n=e.message||String(e);wt(n),S(`\u5B9E\u65F6\u5B57\u5E55\u6CA1\u8D77\u6765\uFF1A${n}`)}}},[S,ie,pa,At,go]),qe=(0,t.useCallback)(async()=>{let e=await $e(`${M}/episodes`);return p(e.items||[]),g(e.folders||[]),z(e.progress||{}),C(e.scan||{running:!1}),e},[]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await $e(`${M}/health`).catch(()=>({}));n.mediaBase&&(Pt.current=n.mediaBase);let l=await $e(`${M}/state`);if(e)return;L(l.settings),g(l.folders||[]);let m=await $e(`${M}/live/lines?since=0`).catch(()=>null);!e&&(m?.alive||m?.windowOpen||m?.running)&&(Ht(!!m?.running),pt(!!m?.windowOpen),bt(Date.now()),nt("listening"));let E=await qe();if(e)return;let U=l.settings?.lastEpisodeId,re=U?(E.items||[]).find(ve=>ve.id===U):null;if(re){Re(re),Ne(re.duration||0);let ve=E.progress?.[re.id]?.position||0;Lt.current=ve>5?ve:0,J(Lt.current);let Ze=De.current;Ze&&(Ze.src=Pt.current?`${Pt.current}/episodes/${re.id}/audio`:`${M}/episodes/${re.id}/audio`,Ze.load(),Ze.playbackRate=l.settings?.rate||1,Ze.volume=l.settings?.volume??.9)}Ge(!1),w.current=!0}catch(n){e||(T(n.message),Ge(!1))}})(),()=>{e=!0}},[qe]),(0,t.useEffect)(()=>{if(!N.running)return;let e=setInterval(()=>{qe().catch(()=>{})},1500);return()=>clearInterval(e)},[N.running,qe]),(0,t.useEffect)(()=>{let e=!1;if(c(null),vo(null),vt(""),bo(0),!F?.id)return Ke("none"),()=>{e=!0};let n=F.id;return(async()=>{try{let l=await $e(`${M}/episodes/${n}/transcript`);if(e)return;if(Ke(l.status),_o(l.status==="queued"||l.status==="running"?l:null),l.status==="done"&&l.transcript){if(c(l.transcript),na.current&&!oa.current){let m=Object.keys(l.transcript.providers||{}).filter(E=>E&&E!=="_provider")[0]||(l.transcript.lines?.some(E=>E.translations?.zh)?"zh":l.transcript.lines?.some(E=>E.translations?.en)?"en":"");m&&tt(m)}}else l.status==="queued"||l.status==="running"?(bo(l.elapsedMs||0),l.transcript&&c(l.transcript)):l.status==="error"&&vt(l.error||"\u8F6C\u5199\u5931\u8D25");vo(n)}catch(l){e||(vt(l.message),vo(n))}})(),()=>{e=!0}},[F?.id]),(0,t.useEffect)(()=>{$e(`${M}/translate/settings`).then($n).catch(()=>{})},[]),(0,t.useEffect)(()=>{let e=!1,n=F?.id;return!n||!ze?(ft({status:"none"}),()=>{e=!0}):((async()=>{try{let l=await $e(`${M}/episodes/${n}/translate?target=${ze}`);e||ft(l)}catch{e||ft({status:"none"})}})(),()=>{e=!0})},[F?.id,ze]),(0,t.useEffect)(()=>{if(P!=="queued"&&P!=="running")return;let e=!1,n=setInterval(async()=>{let l=Q.current?.id;if(l)try{let m=await $e(`${M}/episodes/${l}/transcript`);if(e)return;Ke(m.status),_o(m.status==="queued"||m.status==="running"?m:null),bo(m.elapsedMs||0),(m.status==="queued"||m.status==="running")&&m.transcript?c(m.transcript):m.status==="done"&&m.transcript?(c(m.transcript),Bt(!0),qe().catch(()=>{}),S("\u8F6C\u5199\u5B8C\u6210")):m.status==="error"&&vt(m.error||"\u8F6C\u5199\u5931\u8D25")}catch{}},2e3);return()=>{e=!0,clearInterval(n)}},[P,S]),(0,t.useEffect)(()=>{if(gt.status!=="running"&&gt.status!=="queued")return;let e=!1,n=async m=>{let E=await $e(`${M}/episodes/${m}/translate?target=${ze}`);if(!e){ft(E),E.status==="done"&&(qe().catch(()=>{}),S("\u7FFB\u8BD1\u5B8C\u6210"));try{let U=await $e(`${M}/episodes/${m}/transcript`);!e&&U.transcript&&c(U.transcript)}catch{}}},l=setInterval(()=>{let m=Q.current?.id;m&&n(m).catch(()=>{})},2e3);return()=>{e=!0,clearInterval(l)}},[gt.status,ze,S]),(0,t.useEffect)(()=>{let e=!1,n=async()=>{try{let m=await $e(`${M}/jobs`);e||Qt(m.items||[])}catch{}};n();let l=setInterval(n,$o?2500:2e4);return()=>{e=!0,clearInterval(l)}},[$o]);let io=(0,t.useCallback)((e,n,l,m=!1)=>{if(!e)return;let E=Date.now();!m&&E-s.current<4e3||(s.current=E,ce(`${M}/progress/${e}`,"PUT",{position:n,duration:l}).catch(()=>{}),z(U=>({...U,[e]:{position:n,duration:l,updatedAt:E}})))},[]),Jt=(0,t.useCallback)(e=>{L(n=>({...n,...e})),ce(`${M}/settings`,"PATCH",e).catch(()=>{})},[]);(0,t.useEffect)(()=>{if(!Te||!F||Fo!==F.id||Nt?.realtime===!1||Nt?.provider==="local"||P==="done"||P==="queued"||P==="running"||V&&!V.partial)return;let e=F.id;mo.current.has(e)||(mo.current.add(e),ce(`${M}/episodes/${e}/transcribe`,"POST",{realtime:!0}).then(n=>{n?.status==="queued"&&Ke("queued")}).catch(()=>{}))},[Te,F,Fo,V,P,Nt]);let Go=(0,t.useCallback)(async()=>{let e=Q.current;if(!e)return;vt(""),Bt(!0);let n=Zo.current,l=!!n&&!n.partial;if(l){let m=Array.isArray(n.lines)?n.lines.length:0,E=(Nt?.provider||"api")==="api",U=[`\u91CD\u65B0\u8F6C\u5199\u8FD9\u4E00\u96C6\uFF1F\u73B0\u6709\u5B57\u5E55\uFF08${m} \u884C\uFF09\u4F1A\u88AB\u8986\u76D6\u3002`,"",E?"\u8D70\u4E91\u7AEF\u8F6C\u5199\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u8D39\u4E00\u6B21\u3002":"\u8D70\u672C\u5730\u6A21\u578B\uFF0C\u4E0D\u8054\u7F51\u3001\u4E0D\u82B1\u94B1\uFF0C\u4F46\u4F1A\u5360 CPU/GPU\u3002"].join(`
`);if(!window.confirm(U))return}try{let m=await ce(`${M}/episodes/${e.id}/transcribe`,"POST",l?{force:!0}:{});Ke(m.status||"queued"),l&&S("\u91CD\u65B0\u8F6C\u5199\u5DF2\u5F00\u59CB")}catch(m){vt(m.message)}},[S,Nt]),lr=(0,t.useCallback)(()=>{if(ge){dt(e=>!e);return}if(mt){Bt(!1);return}if(V||P==="queued"||P==="running"){Bt(!0);return}Go()},[ge,mt,V,P,Go]),En=(0,t.useCallback)(async()=>{if(Q.current)try{await ce(`${M}/episodes/${Q.current.id}/transcribe/cancel`,"POST",{}),S("\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026")}catch(e){vt(e.message)}},[S]),Pn=(0,t.useCallback)(async(e,n)=>{try{if(n==="cancel"){let m=await ce(`${M}/episodes/${e.episodeId}/transcribe/cancel`,"POST",{});m?.status==="none"?S("\u8FD9\u4E2A\u4EFB\u52A1\u5DF2\u7ECF\u4E0D\u5728\u961F\u5217\u91CC\u4E86"):S(m?.status==="cancelling"?"\u6B63\u5728\u53D6\u6D88\u8F6C\u5199\u2026":"\u5DF2\u53D6\u6D88\u8F6C\u5199")}else n==="retry"?await ce(`${M}/episodes/${e.episodeId}/transcribe`,"POST",{resume:!0}):n==="clear"&&await ce(`${M}/jobs`,"DELETE",{key:e.key})}catch(m){S(`\u64CD\u4F5C\u5931\u8D25\uFF1A${m.message}`)}let l=await $e(`${M}/jobs`).catch(()=>({items:[]}));Qt(l.items||[])},[S]),vn=(0,t.useCallback)(async e=>{let n=[...new Set(e)];if(n.length)try{let l=await ce(`${M}/transcribe/batch`,"POST",{ids:n});S(`\u5DF2\u6392\u961F ${l.queued} \u96C6${l.skipped?`\uFF0C\u8DF3\u8FC7 ${l.skipped} \u96C6`:""}${l.errors?.length?`\uFF0C\u5931\u8D25 ${l.errors.length} \u96C6`:""}`),ot([]),eo(!1)}catch(l){S(l.message)}},[S]),dr=(0,t.useCallback)(e=>{ot(n=>n.includes(e)?n.filter(l=>l!==e):[...n,e])},[]),Xt=(0,t.useCallback)(async(e,n,l)=>{try{let m=await ce(`${M}${e}`,n,l||{});return m?.transcript&&c(m.transcript),m}catch(m){return S(m.message),null}},[S]),va=(0,t.useCallback)(e=>{Ft(e.id),Mt(e.text),Wo([])},[]),ma=(0,t.useCallback)(async e=>{if(!V)return;await Xt(`/episodes/${V.id}/transcript/lines/${e??Ct}`,"PUT",{text:to})&&(Ft(null),S("\u8FD9\u4E00\u884C\u5DF2\u4FDD\u5B58"))},[V,Ct,to,Xt,S]),ga=(0,t.useCallback)(async(e,n)=>{if(!V)return;await Xt(`/episodes/${V.id}/transcript/lines/${e??Ct}/split`,"POST",{offset:n})&&(Ft(null),S("\u5DF2\u62C6\u6210\u4E24\u884C"))},[V,Ct,Xt,S]),fa=(0,t.useCallback)(async e=>{if(!V)return;await Xt(`/episodes/${V.id}/transcript/lines/${e}/merge`,"POST",{})&&S("\u5DF2\u4E0E\u4E0B\u4E00\u884C\u5408\u5E76")},[V,Xt,S]),ha=(0,t.useCallback)(async()=>{if(!V)return;let e=await Xt(`/episodes/${V.id}/transcript/resegment`,"POST",{});e&&(e.cleared?(ft({status:"none",missing:e.after}),S(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C\uFF0C\u65E7\u8BD1\u6587\u5DF2\u5907\u4EFD\uFF0C\u9700\u8981\u91CD\u65B0\u7FFB\u8BD1`)):S(`\u65AD\u53E5\u5DF2\u6574\u7406\uFF1A${e.before} \u884C \u2192 ${e.after} \u884C`))},[V,Xt,S]),wa=(0,t.useCallback)(async()=>{if(V)try{let e=await $e(`${M}/episodes/${V.id}/transcript/validate`);Wo(e.issues||[]),S(e.ok?"\u5B57\u5E55\u6821\u9A8C\u901A\u8FC7":`\u53D1\u73B0 ${(e.issues||[]).length} \u4E2A\u95EE\u9898`)}catch(e){S(e.message)}},[V,S]),mn=(0,t.useCallback)(async()=>{let e=Q.current?.id;if(!e)return;let n=await $e(`${M}/episodes/${e}/transcript`);n.transcript&&c(n.transcript)},[]),gn=(0,t.useCallback)(async(e=!1)=>{let n=Q.current?.id,l=ze;if(!(!n||!l)&&!(gt.status==="running"||gt.status==="queued")){ft({status:"running"});try{let m=await ce(`${M}/episodes/${n}/translate`,"POST",{target:l,force:e});ft(m),m.status==="done"&&(await mn(),S(e?"\u91CD\u65B0\u7FFB\u8BD1\u5B8C\u6210":"\u7FFB\u8BD1\u5B8C\u6210"))}catch(m){ft(E=>({...E,status:"error",error:m.message}))}}},[ze,gt.status,mn,S]),ba=(0,t.useCallback)(()=>gn(!1),[gn]),xa=(0,t.useCallback)(()=>{let e=ze==="en"?"English":"\u4E2D\u6587";window.confirm(`\u91CD\u65B0\u7FFB\u8BD1\u6574\u7BC7\uFF1F

\u73B0\u6709\u7684 ${e} \u8BD1\u6587\u4F1A\u88AB\u5168\u90E8\u8986\u76D6\u91CD\u7FFB\u4E00\u904D\uFF0C\u6309\u6574\u7BC7\u8BA1\u8D39\u3002
\uFF08\u53EA\u60F3\u6539\u67D0\u4E00\u884C\uFF0C\u5C31\u70B9\u90A3\u4E00\u884C\u7684 \u270E\uFF0C\u91CC\u9762\u6709\u300C\u91CD\u7FFB\u300D\u3002\uFF09`)&&gn(!0)},[gn,ze]),ya=(0,t.useCallback)(async e=>{let n=Q.current?.id;if(!(!n||!ze||!e?.id))try{await ce(`${M}/episodes/${n}/translate/line`,"POST",{lineId:e.id,target:ze}),await mn(),S("\u8FD9\u4E00\u884C\u5DF2\u91CD\u7FFB")}catch(l){S(l.message||"\u91CD\u7FFB\u5931\u8D25")}},[ze,mn,S]),ka=(0,t.useCallback)(e=>{let n=e||"";tt(n),qt({translateTarget:n})},[qt]),pr=async()=>{if(de?.eid)try{await fetch(`${M}/xyz/open-web`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:`https://www.xiaoyuzhoufm.com/episode/${de.eid}`})})}catch{S("\u65E0\u6CD5\u6253\u5F00\u6D4F\u89C8\u5668")}},cr=e=>{let n=!e.favorite;p(l=>l.map(m=>m.id===e.id?{...m,favorite:n}:m)),ce(`${M}/episodes/${e.id}/favorite`,"PUT",{favorite:n}).catch(l=>S(l.message))},Na=async e=>{if(e.length&&window.confirm(`\u4ECE\u64AD\u653E\u5668\u79FB\u9664 ${e.length} \u96C6\uFF1F\u53EA\u5220\u7D22\u5F15\uFF0C\u4E0D\u4F1A\u52A8\u6E90\u6587\u4EF6\u3002`)){for(let n of e)try{await fetch(`${M}/episodes/${n}`,{method:"DELETE"})}catch{}p(n=>n.filter(l=>!e.includes(l.id))),ot([]),e.includes(ge)&&be(null),S(`\u5DF2\u79FB\u9664 ${e.length} \u96C6\uFF0C\u6E90\u6587\u4EF6\u672A\u52A8`)}},st=(0,t.useMemo)(()=>{let e=[...r];return Ae==="title"?e.sort((n,l)=>n.title.localeCompare(l.title,"zh-Hans-CN")):Ae==="duration"?e.sort((n,l)=>(l.duration||0)-(n.duration||0)):e.sort((n,l)=>l.mtime-n.mtime),e},[r,Ae]),Eo=b?ne:"",za=(0,t.useMemo)(()=>b?r.filter(e=>e.root===b):[],[r,b]),Po=(0,t.useMemo)(()=>b?Ya(za,Eo):[],[za,b,Eo]),yt=(0,t.useMemo)(()=>{let e=Y.trim().toLowerCase();return st.filter(n=>{if(b&&n.root!==b||b&&(n.rel||"")!==Eo||e&&!`${n.title} ${n.artist} ${n.album}`.toLowerCase().includes(e))return!1;let m=h[n.id]?.position||0,E=n.duration||0,U=E?m/E:0;return R==="inprogress"?m>5&&U<.97:R==="finished"?U>=.97:ee==="unheard"?m<=5:ee==="transcribed"?!!n.hasTranscript:ee==="favorites"?!!n.favorite:!0})},[st,Y,R,ee,h,b,Eo]),$a=(0,t.useMemo)(()=>Gt.filter(e=>e.status==="queued"||e.status==="running"),[Gt]),lo=(0,t.useMemo)(()=>yt.filter(e=>!e.hasTranscript),[yt]),Ln=(0,t.useMemo)(()=>r.filter(e=>{let n=h[e.id];return!n||!n.position||n.position<5?!1:e.duration?n.position/e.duration<.97:!0}).sort((e,n)=>(h[n.id]?.updatedAt||0)-(h[e.id]?.updatedAt||0)),[r,h]),Sa=(0,t.useMemo)(()=>Ln.slice(0,4),[Ln]),ur=(0,t.useMemo)(()=>r.reduce((e,n)=>e+(n.duration||0),0),[r]),vr=Math.round(ur/3600*10)/10,Lo=(0,t.useMemo)(()=>b?Za(Oo(b),Eo):[],[b,Eo]),mr=b?Lo.length>1?Lo[Lo.length-1].label:Oo(b):R==="inprogress"?"\u7EE7\u7EED\u6536\u542C":R==="finished"?"\u5DF2\u64AD\u5B8C":R==="xyz"?"\u5C0F\u5B87\u5B99":R==="live"?"\u5B9E\u65F6\u8BB0\u5F55":"\u5168\u90E8\u5355\u96C6",de=ge?r.find(e=>e.id===ge)||(F?.id===ge?F:null):null,gr=Je?"\u6B63\u5728\u8BFB\u53D6\u5A92\u4F53\u5E93\u2026":R==="live"?`${Vo.length} \u6761\u5DF2\u4FDD\u5B58\u7684\u5B9E\u65F6\u5B57\u5E55`:N.running?"\u6B63\u5728\u626B\u63CF\u6587\u4EF6\u5939\u2026":b?`${yt.length} \u96C6${Po.length?` \xB7 ${Po.length} \u4E2A\u5B50\u6587\u4EF6\u5939`:""} \xB7 \u53EA\u770B\u8FD9\u4E00\u5C42`:`${yt.length} \u96C6 \xB7 \u5171 ${vr} \u5C0F\u65F6 \xB7 ${v.length} \u4E2A\u6587\u4EF6\u5939`,us=(0,t.useMemo)(()=>F?st.findIndex(e=>e.id===F.id):-1,[st,F]),Io=(0,t.useCallback)(()=>{let e=De.current;if(e){if(!Q.current){let n=yt[0]||st[0];n&&po(n,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}},[yt,st]),po=(0,t.useCallback)((e,n=!0)=>{let l=De.current;if(!l||!e)return;if(Q.current&&Q.current.id===e.id){n&&Io();return}Q.current&&!l.ended&&l.currentTime>1&&io(Q.current.id,l.currentTime,l.duration||Qe.current,!0),Q.current=e,Re(e),be(U=>U&&e.id),Ne(e.duration||0);let m=h[e.id]?.position||0,E=m>5&&(!e.duration||m<e.duration-10)?m:0;Lt.current=E,J(E),e.source==="xyz"?l.src=Pt.current?`${Pt.current}/xyz/${e.id.slice(3)}/audio`:`${M}/episodes/${e.id}/audio`:l.src=Pt.current?`${Pt.current}/episodes/${e.id}/audio`:`${M}/episodes/${e.id}/audio`,l.load(),l.playbackRate=xt.current.rate||1,l.volume=xt.current.volume??.9,n&&l.play().catch(()=>{}),Jt({lastEpisodeId:e.id})},[h,io,Jt,Io]),fr=(0,t.useCallback)(async e=>{let n=e.public?`${M}/xyz/public/play`:`${M}/xyz/episodes/${encodeURIComponent(e.eid)}/play`,l=e.public?{pid:e.pid,eid:e.eid}:{},m=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}),E=await m.json().catch(()=>({}));if(!m.ok)throw new Error(E.error||"\u6253\u5F00\u5355\u96C6\u5931\u8D25");await qe(),po(E.item,!0)},[qe,po]);(0,t.useEffect)(()=>{let e=Y.trim();if(e.length<2){Me([]);return}let n=window.setTimeout(()=>{$e(`${M}/search?q=${encodeURIComponent(e)}`).then(l=>Me(Array.isArray(l.items)?l.items:[])).catch(()=>Me([]))},250);return()=>window.clearTimeout(n)},[Y]);let fn=(0,t.useCallback)((e,n=!0)=>{e&&(po(e,n),be(e.id))},[po]),ct=(0,t.useCallback)(e=>{let n=De.current;if(!n||!Q.current)return;let l=Number(e);if(!Number.isFinite(l))return;let m=Number(Qe.current)||0,E=Number.isFinite(n.duration)&&n.duration>0?n.duration:m,U=Math.max(0,E>0?Math.min(l,E):l);try{n.currentTime=U}catch{Lt.current=U;return}J(U),io(Q.current.id,U,E||m,!0)},[io]),hr=(0,t.useCallback)(e=>{let n=r.find(l=>l.id===e.episodeId);if(n){if(Q.current?.id===e.episodeId){ct(e.start),be(n.id);return}Lt.current=e.start,fn(n,!1)}},[r,fn,ct]),Ca=(0,t.useCallback)(e=>{let n=cn.current;if(!n)return null;let l=n.getBoundingClientRect();return l.width?Math.min(1,Math.max(0,(e.clientX-l.left)/l.width)):null},[]),hn=(0,t.useCallback)(e=>{let n=Ca(e),l=Number.isFinite(Qe.current)&&Qe.current>0?Qe.current:Number.isFinite(De.current?.duration)?De.current.duration:0;n==null||!l||ct(n*l)},[Ca,ct]),wr=(0,t.useCallback)(e=>{e.preventDefault(),le.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}hn(e)},[hn]),br=(0,t.useCallback)(e=>{le.current&&hn(e)},[hn]),Ma=(0,t.useCallback)(e=>{le.current=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},[]),xr=(0,t.useCallback)(e=>{let n=De.current;if(!n)return;let l=e.shiftKey?30:5;e.key==="ArrowLeft"&&(e.preventDefault(),ct((n.currentTime||0)-l)),e.key==="ArrowRight"&&(e.preventDefault(),ct((n.currentTime||0)+l)),e.key==="Home"&&(e.preventDefault(),ct(0)),e.key==="End"&&(e.preventDefault(),ct(Number.isFinite(n.duration)?n.duration:0))},[ct]),Qo=(0,t.useCallback)(e=>{let n=De.current;if(!n||!Q.current)return;let l=Math.max(0,Math.min((n.currentTime||0)+e,(n.duration||Qe.current||0)-1));n.currentTime=l,J(l)},[]),In=(0,t.useCallback)(e=>{if(!st.length)return;let l=((Q.current?st.findIndex(m=>m.id===Q.current.id):-1)+e+st.length)%st.length;po(st[l],!0)},[st,po]),yr=(0,t.useCallback)(e=>{let n=De.current;n&&(n.playbackRate=e),Jt({rate:e}),$(!1)},[Jt]);(0,t.useEffect)(()=>{if(!j)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".rate-wrap")||$(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[j]),(0,t.useEffect)(()=>{if(!Z)return;let e=()=>{let l=Math.max(0,Math.round((Z-Date.now())/1e3));if(we(l),l<=0){let m=De.current;m&&!m.paused&&m.pause(),he(0),oe(0),S("\u7761\u7720\u5B9A\u65F6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C")}};e();let n=window.setInterval(e,1e3);return()=>window.clearInterval(n)},[Z,S]),(0,t.useEffect)(()=>{if(!X)return;let e=n=>{n.type==="keydown"&&n.key!=="Escape"||n.type==="pointerdown"&&n.target.closest?.(".sleep-wrap")||Se(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)}},[X]);let An=(0,t.useCallback)(e=>{if(Se(!1),e==="off"){he(0),oe(0),we(0);return}if(e==="end"){he(0),oe(-1),we(0),S("\u672C\u96C6\u64AD\u5B8C\u81EA\u52A8\u6682\u505C");return}oe(e),he(Date.now()+e*6e4),S(`\u5C06\u5728 ${e} \u5206\u949F\u540E\u6682\u505C`)},[S]),wn=(0,t.useCallback)(e=>{let n=Math.max(0,Math.min(1,e)),l=De.current;l&&(l.volume=n),Jt({volume:n})},[Jt]),kr=(0,t.useCallback)(()=>{let e=De.current,n=xt.current.volume>0?0:.9;e&&(e.volume=n),Jt({volume:n})},[Jt]),Nr=()=>{let e=De.current;if(!e||!Q.current)return;let n=performance.now();n-(It.current||0)<400||(It.current=n,J(e.currentTime),io(Q.current.id,e.currentTime,e.duration||Qe.current))},zr=()=>{let e=De.current,n=Q.current;if(!e||!n)return;let l=Number.isFinite(e.duration)?e.duration:n.duration||0;Ne(l);let m=Lt.current;Lt.current=0,m>0&&m<l-1&&(e.currentTime=m,J(m))},$r=()=>{let e=De.current;if(Q.current&&io(Q.current.id,e?.duration||Qe.current||0,e?.duration||Qe.current||0,!0),K===-1){oe(0),he(0),we(0),S("\u672C\u96C6\u7ED3\u675F\uFF0C\u5DF2\u6682\u505C");return}In(1)},Sr=(0,t.useMemo)(()=>{let e=new Map;for(let n of r)n?.root&&e.set(n.root,(e.get(n.root)||0)+1);return e},[r]),Cr=async()=>{await ce(`${M}/scan`,"POST",{}),await qe(),S("\u6B63\u5728\u91CD\u65B0\u626B\u63CF\u5A92\u4F53\u5E93")},Mr=async e=>{await ce(`${M}/folders`,"POST",{path:e}),await qe(),S("\u5DF2\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0C\u6B63\u5728\u626B\u63CF")},Tr=async()=>{let e=await fetch(`${M}/pick-folder`,{method:"POST",headers:{"content-type":"application/json"},body:"{}"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||"\u6253\u5F00\u7CFB\u7EDF\u9009\u62E9\u5668\u5931\u8D25");return n},Dr=e=>{[...e.dataTransfer?.types||[]].includes("Files")&&(e.preventDefault(),No||zo(!0))},Er=e=>{e.currentTarget.contains(e.relatedTarget)||zo(!1)},Ta=async e=>{let n=[...e?.files||[]],l=n.map(Pe=>Pe.path).filter(Pe=>typeof Pe=="string"&&Pe),m=String(e?.getData("text/uri-list")||"").split(/\r?\n/).map(Pe=>Pe.trim()).filter(Pe=>Pe.startsWith("file://")).map(Pe=>decodeURIComponent(Pe.replace(/^file:\/\//,""))),E=[...new Set([...l,...m])];if(E.length){try{let Pe=await ce(`${M}/import/paths`,"POST",{paths:E});await qe(),S(Pe.added?`\u5DF2\u6DFB\u52A0 ${Pe.added} \u4E2A\u6587\u4EF6\u5939`:"\u8FD9\u4E9B\u6587\u4EF6\u5939\u5DF2\u7ECF\u5728\u5A92\u4F53\u5E93\u91CC\u4E86")}catch(Pe){T(Pe.message)}return}let U=n.filter(Pe=>Pe.size>0);if(!U.length){S("\u62D6\u8FDB\u6765\u7684\u662F\u6587\u4EF6\u5939\uFF0C\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D");return}let re=`drop-${Date.now()}`,ve="",Ze=0;for(let Pe of U)try{let Ea=await fetch(`${M}/import/upload?name=${encodeURIComponent(Pe.name)}&batch=${re}`,{method:"POST",body:Pe}),Lr=await Ea.json();Ea.ok&&(ve=Lr.folder||ve,Ze+=1)}catch{}if(ve)try{await ce(`${M}/folders`,"POST",{path:ve})}catch{}await qe(),S(Ze?`\u5DF2\u5BFC\u5165 ${Ze} \u4E2A\u97F3\u9891`:"\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")},Pr=async e=>{e.preventDefault(),zo(!1),await Ta(e.dataTransfer)},Da=async(e,n={})=>{if(!(!n?.skipConfirm&&!window.confirm(`\u4ECE\u5A92\u4F53\u5E93\u79FB\u9664\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1F
${e}

\u4E0D\u4F1A\u5220\u9664\u4F60\u7684\u6587\u4EF6\u3002`)))try{await ce(`${M}/folders`,"DELETE",{path:e}),H(l=>l===e?"":l),await qe(),S("\u5DF2\u79FB\u9664\u6587\u4EF6\u5939")}catch(l){T(l.message)}};(0,t.useEffect)(()=>{let e=n=>{let l=n.target?.tagName;l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||n.metaKey||n.ctrlKey||n.altKey||(n.code==="Space"?(n.preventDefault(),Io()):n.key==="ArrowRight"?(n.preventDefault(),Qo(15)):n.key==="ArrowLeft"?(n.preventDefault(),Qo(-15)):n.key==="ArrowUp"?(n.preventDefault(),wn(xt.current.volume+.05)):n.key==="ArrowDown"?(n.preventDefault(),wn(xt.current.volume-.05)):n.key==="/"&&(n.preventDefault(),document.querySelector(".search input")?.focus()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Io,Qo,wn]);let On=e=>{let n=h[e.id];return!n||!e.duration?!1:n.position/e.duration>=.97},Bn=e=>{let n=h[e.id];return!n||!e.duration?0:Math.min(100,Math.max(0,n.position/e.duration*100))};return t.default.createElement("div",{className:`shell ${rn?"nav-collapsed":""}`,onDragOver:Dr,onDragLeave:Er,onDrop:Pr},No?t.default.createElement("div",{className:"drop-hint"},t.default.createElement("span",null,"\u677E\u5F00\u4EE5\u6DFB\u52A0\u97F3\u9891"),t.default.createElement("span",null,"\u6587\u4EF6\u5939\u8BF7\u7528\u300C\u9009\u62E9\u6587\u4EF6\u5939\u300D")):null,rn?t.default.createElement("div",{className:"nav-rail"},t.default.createElement("button",{className:"nav-reopen",title:"\u5C55\u5F00\u4FA7\u8FB9\u680F",onClick:da},t.default.createElement(pe,{name:"chevron-right",size:16}))):null,t.default.createElement("aside",{className:"sidebar"},t.default.createElement("div",{className:"brand"},t.default.createElement("span",{className:"brand-mark"},t.default.createElement(pe,{name:"wave",size:16})),t.default.createElement("span",{className:"brand-name"},"Podwave"),t.default.createElement("span",{className:"brand-version"},"0.12"),t.default.createElement("button",{className:"icon-btn brand-collapse",title:"\u6536\u8D77\u4FA7\u8FB9\u680F",onClick:da},t.default.createElement(pe,{name:"chevron-left",size:16}))),t.default.createElement("nav",{className:"nav"},[["all","\u5168\u90E8\u5355\u96C6",r.length],["inprogress","\u7EE7\u7EED\u6536\u542C",Ln.length],["finished","\u5DF2\u64AD\u5B8C",r.filter(On).length],["xyz","\u5C0F\u5B87\u5B99",""],["live","\u5B9E\u65F6\u8BB0\u5F55",Vo.length]].map(([e,n,l])=>t.default.createElement("button",{key:e,className:`nav-item ${R===e&&!b?"active":""}`,onClick:()=>{be(null),H(""),me(""),W(e),e==="live"&&Wt()}},t.default.createElement("span",{className:"nav-label"},t.default.createElement("span",{className:"nav-led","aria-hidden":"true"}),t.default.createElement("span",null,n)),t.default.createElement("span",{className:"nav-count"},l||"")))),t.default.createElement("div",{className:"side-section"},t.default.createElement("div",{className:"side-head"},t.default.createElement("span",null,"\u97F3\u9891\u76EE\u5F55"),t.default.createElement("button",{className:"rack-add-btn",title:"\u6DFB\u52A0\u4E0E\u7BA1\u7406\u6587\u4EF6\u5939",onClick:()=>xe(!0)},t.default.createElement(pe,{name:"plus",size:13}),t.default.createElement("span",null,"\u6DFB\u52A0"))),v.length===0?t.default.createElement("div",{className:"side-empty-card"},t.default.createElement("p",{className:"side-empty"},"\u8FD8\u6CA1\u6709\u6DFB\u52A0\u64AD\u5BA2\u76EE\u5F55"),t.default.createElement("button",{type:"button",className:"btn primary side-empty-cta",onClick:()=>xe(!0)},t.default.createElement(pe,{name:"folder-plus",size:14}),t.default.createElement("span",null,"\u9009\u62E9\u6587\u4EF6\u5939"))):t.default.createElement("ul",{className:"folder-list"},v.map(e=>{let n=Sr.get(e)||0;return t.default.createElement("li",{key:e,title:e,className:b===e?"is-active":"",role:"button",tabIndex:0,onClick:()=>{be(null),W("all"),_e("all"),Ce(""),me(""),H(l=>l===e?"":e)},onKeyDown:l=>{l.key!=="Enter"&&l.key!==" "||(l.preventDefault(),be(null),W("all"),_e("all"),Ce(""),me(""),H(m=>m===e?"":e))}},t.default.createElement("span",{className:"slot-dot","aria-hidden":"true"}),t.default.createElement("span",{className:"slot-info"},t.default.createElement("span",{className:"folder-name"},Oo(e)),t.default.createElement("span",{className:"slot-path"},n," \u96C6")),t.default.createElement("button",{className:"folder-remove",title:"\u79FB\u9664",onClick:l=>{l.stopPropagation(),Da(e)}},"\xD7"))}))),t.default.createElement("div",{className:"side-foot"},t.default.createElement("div",{className:"theme-switch",role:"group","aria-label":"\u5916\u89C2\u6A21\u5F0F"},[["light","\u6D45\u8272"],["dark","\u6DF1\u8272"],["system","\u7CFB\u7EDF"]].map(([e,n])=>t.default.createElement("button",{key:e,type:"button",className:`theme-seg ${a===e?"is-on":""}`,"aria-pressed":a===e,onClick:()=>i(e)},n))),t.default.createElement("strong",null,"\u672C\u5730\u53EA\u8BFB\u64AD\u653E"),t.default.createElement("span",null,"\u97F3\u9891\u4EC5\u4ECE\u786C\u76D8\u8BFB\u53D6\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"))),t.default.createElement("main",{className:"main"},t.default.createElement("header",{className:"topbar"},t.default.createElement("div",null,t.default.createElement("h1",null,mr),t.default.createElement("p",{className:"subline"},gr)),t.default.createElement("div",{className:"tools"},t.default.createElement("button",{className:"tool-btn",onClick:()=>xe(!0),title:"\u6DFB\u52A0\u4E0E\u7BA1\u7406\u672C\u5730\u64AD\u5BA2\u6587\u4EF6\u5939"},t.default.createElement(pe,{name:"folder-plus",size:15}),t.default.createElement("span",null,"\u7BA1\u7406\u6587\u4EF6\u5939")),t.default.createElement("button",{className:`tool-btn ${ie!=="idle"?"is-on is-live":""}`,onClick:()=>{ie==="idle"?ir():ie==="listening"?ca():ie==="asking"&&so(!1)},disabled:ie==="starting"||ie==="saving",title:ie==="idle"?"\u5B9E\u65F6\u5B57\u5E55\uFF1A\u542C\u7CFB\u7EDF\u6B63\u5728\u64AD\u653E\u7684\u58F0\u97F3\uFF08YouTube\u3001\u76F4\u64AD\u3001\u4F1A\u8BAE\u90FD\u80FD\u7528\uFF09":"\u505C\u6B62\u5E76\u5173\u95ED\u5B9E\u65F6\u5B57\u5E55"},t.default.createElement("span",{className:"live-dot","aria-hidden":"true"}),t.default.createElement("span",null,ie==="starting"?"\u6253\u5F00\u5B57\u5E55\u7A97\u2026":ie==="saving"?"\u6B63\u5728\u505C\u6B62\u2026":ie!=="idle"?"\u505C\u6B62\u5B57\u5E55":"\u5B9E\u65F6\u5B57\u5E55")),t.default.createElement("button",{className:`tool-btn ${$o?"is-on":""}`,onClick:()=>Ko(e=>!e),title:"\u8F6C\u5199\u4EFB\u52A1"},t.default.createElement(pe,{name:"tasks",size:16}),t.default.createElement("span",null,"\u4EFB\u52A1",$a.length?` ${$a.length}`:"")),t.default.createElement("button",{className:`tool-btn ${Rt?"is-on":""}`,onClick:()=>{eo(e=>!e),ot([])},title:"\u6279\u91CF\u9009\u62E9"},t.default.createElement(pe,{name:"check",size:16}),t.default.createElement("span",null,"\u9009\u62E9")),t.default.createElement("label",{className:"search"},t.default.createElement(pe,{name:"search",size:16}),t.default.createElement("input",{value:Y,onChange:e=>Ce(e.target.value),placeholder:"\u641C\u7D22\u5355\u96C6\u6216\u8282\u76EE"})),t.default.createElement("select",{className:"sort",value:Ae,onChange:e=>Ve(e.target.value)},t.default.createElement("option",{value:"recent"},"\u6700\u8FD1\u6DFB\u52A0"),t.default.createElement("option",{value:"title"},"\u6807\u9898"),t.default.createElement("option",{value:"duration"},"\u65F6\u957F")))),Rt?t.default.createElement("div",{className:"batch-bar"},t.default.createElement("span",null,"\u5DF2\u9009 ",Oe.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",onClick:()=>ot(yt.map(e=>e.id))},"\u5168\u9009\u5F53\u524D"),t.default.createElement(Yt,{className:"batch-transcribe",buttonClassName:"btn primary",title:"\u6279\u91CF\u8F6C\u5199",placement:"down",disabled:!lo.length&&!Oe.length,trigger:"\u8F6C\u5199"},({close:e})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(lt,{hint:`${lo.length} \u96C6`,disabled:!lo.length,onSelect:()=>{e(),vn(lo.map(n=>n.id))}},"\u8F6C\u5199\u672A\u8F6C\u5199\u7684"),t.default.createElement(lt,{hint:`${Oe.length} \u96C6`,disabled:!Oe.length,onSelect:()=>{e(),vn(Oe)}},"\u8F6C\u5199\u9009\u4E2D\u7684"))),t.default.createElement("button",{className:"btn ghost danger",disabled:!Oe.length,onClick:()=>Na(Oe)},"\u79FB\u9664\u9009\u4E2D"),t.default.createElement("button",{className:"btn ghost",onClick:()=>{ot([]),eo(!1)}},"\u53D6\u6D88")):null,Xe?t.default.createElement("div",{className:"banner error",onClick:()=>T("")},Xe," ",t.default.createElement("span",{className:"banner-dismiss"},"\u77E5\u9053\u4E86")):null,de?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"detail-top"},t.default.createElement("button",{className:"back-link",onClick:()=>be(null)},"\u2190 \u5168\u90E8\u5355\u96C6"),t.default.createElement("span",{className:"detail-count"},de.artist,de.album?` \xB7 ${de.album}`:"")),t.default.createElement("div",{className:"episode-view",style:Ue?{"--episode-left-w":`${Ue}px`}:void 0},t.default.createElement("div",{className:"episode-left",ref:sa},t.default.createElement("div",{className:"episode-cover"},t.default.createElement("button",{className:"cover-swap",onClick:nr,disabled:wo,title:"\u70B9\u51FB\u66F4\u6362\u5C01\u9762","aria-label":"\u66F4\u6362\u5C01\u9762"},t.default.createElement(Bo,{item:de,size:288}),t.default.createElement("span",{className:"cover-swap-hint"},wo?"\u4E0A\u4F20\u4E2D\u2026":"\u6362\u5C01\u9762")),t.default.createElement("input",{ref:ho,type:"file",accept:"image/*",hidden:!0,onChange:e=>{let n=e.target.files?.[0];e.target.value="",ar(n)}})),t.default.createElement("h2",{className:"episode-title"},de.title),t.default.createElement("p",{className:"episode-sub"},de.artist,de.album?` \xB7 ${de.album}`:""),t.default.createElement("p",{className:"episode-path",title:de.file},de.location||de.file),t.default.createElement("p",{className:"episode-stats"},Ro(de.duration)," \xB7 ",Ao(de.mtime)," \xB7 \u5DF2\u542C ",Math.round(Bn(de)),"%"),de.shownotes?t.default.createElement("div",{className:`episode-notes ${k?"is-open":""}`},t.default.createElement("button",{className:"notes-head",onClick:()=>A(e=>!e)},"\u5355\u96C6\u4ECB\u7ECD ",k?"\u6536\u8D77":"\u5C55\u5F00"),t.default.createElement("p",{className:"notes-body"},Oa(de.shownotes))):null,t.default.createElement("div",{className:"episode-actions"},t.default.createElement("button",{className:"btn primary",onClick:Io},Te&&F?.id===de.id?"\u6682\u505C":"\u64AD\u653E"),P==="queued"||P==="running"?t.default.createElement("button",{className:"btn ghost",onClick:En},"\u53D6\u6D88\u8F6C\u5199"):t.default.createElement("button",{className:"btn ghost",onClick:Go},de.source==="xyz"?V?"\u91CD\u65B0\u4E0B\u8F7D\u5E76\u8F6C\u5199":"\u4E0B\u8F7D\u5E76\u8F6C\u5199":V?"\u91CD\u65B0\u8F6C\u5199":"\u8F6C\u5199\u5B57\u5E55"),t.default.createElement(Yt,{className:"detail-more",buttonClassName:"btn ghost",title:"\u66F4\u591A\u64CD\u4F5C",placement:"down",trigger:"\u66F4\u591A"},({close:e})=>t.default.createElement(t.default.Fragment,null,de.source==="xyz"?t.default.createElement(lt,{onSelect:()=>{e(),pr()}},"\u5728\u6D4F\u89C8\u5668\u6253\u5F00"):null,de.hasCover?t.default.createElement(lt,{hint:"\u6362\u56DE\u97F3\u9891\u81EA\u5E26\u7684\u56FE",onSelect:()=>{e(),rr()}},"\u6062\u590D\u9ED8\u8BA4\u5C01\u9762"):null,t.default.createElement(lt,{danger:!0,onSelect:()=>{e(),Na([de.id])}},"\u4ECE\u64AD\u653E\u5668\u79FB\u9664"))))),jt?t.default.createElement("div",{className:"episode-right"},t.default.createElement("span",{className:"episode-split",onPointerDown:er,onPointerMove:tr,onPointerUp:la,onPointerCancel:la,onDoubleClick:or,title:"\u5DE6\u53F3\u62D6\u52A8\u8C03\u6574\u5C01\u9762\u680F\u5BBD\u5EA6\uFF08\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4\uFF09"}),t.default.createElement(yn,{inline:!0,transcript:V,status:P,progress:ht?.progress,stage:ht?.stage,chunks:ht?.chunks,queued:ht?.queued,elapsed:Uo,editingId:Ct,draft:to,onDraftChange:Mt,onEditLine:va,onSaveLine:ma,onCancelEdit:()=>Ft(null),onSplitLine:ga,onMergeLine:fa,onValidate:wa,onResegment:ha,issues:Tt,onCancel:En,error:xo,position:f,fontSize:go,onFontSize:aa,width:zt.width,height:zt.height,onResize:ra,onSeek:ct,onClose:()=>dt(!1),onStart:Go,target:ze,job:gt,onChangeTarget:ka,onTranslate:ba,onRetranslate:xa,onRetranslateLine:ya,onOpenSettings:()=>S("\u8BF7\u5728 DSH \u5DE6\u4FA7\u300C\u8BBE\u7F6E \u2192 \u64AD\u5BA2\u300D\u4E2D\u4E00\u952E\u8C03\u6574\u65B9\u6848\u4E0E\u9009\u9879")})):null)):R==="xyz"?t.default.createElement(qn,{onPlay:fr,currentId:F?.id}):R==="live"?t.default.createElement(Jn,{items:Vo,onRefresh:Wt,onFlash:S}):t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"filter-chips"},[["all","\u5168\u90E8"],["unheard","\u672A\u542C"],["transcribed","\u6709\u5B57\u5E55"],["favorites","\u6536\u85CF"]].map(([e,n])=>t.default.createElement("button",{key:e,className:`chip ${ee===e?"is-on":""}`,onClick:()=>_e(e)},n))),R==="all"&&!Y&&Sa.length>0?t.default.createElement("section",{className:"continue"},t.default.createElement("h2",null,"\u63A5\u7740\u542C"),t.default.createElement("div",{className:"continue-row"},Sa.map(e=>{let n=Bn(e);return t.default.createElement("button",{key:e.id,className:`continue-card ${F?.id===e.id?"is-current":""}`,onClick:()=>fn(e,!0)},t.default.createElement(Bo,{item:e,size:64}),t.default.createElement("div",{className:"continue-text"},t.default.createElement("div",{className:"continue-title"},e.title),t.default.createElement("div",{className:"continue-meta"},e.artist),t.default.createElement("div",{className:"mini-track"},t.default.createElement("div",{style:{width:`${n}%`}}))))}))):null,Y.trim().length>=2&&ke.length>0?t.default.createElement("section",{className:"search-hits"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",null,"\u5B57\u5E55\u5339\u914D"),t.default.createElement("span",{className:"col-duration"},ke.length)),ke.map(e=>t.default.createElement("button",{key:`${e.episodeId}-${e.lineId}`,className:"hit-row",onClick:()=>hr(e)},t.default.createElement("span",{className:"hit-time"},He(e.start)),t.default.createElement("span",{className:"hit-text"},e.text),t.default.createElement("span",{className:"hit-title"},e.title)))):null,b?t.default.createElement("nav",{className:"crumbs","aria-label":"\u76EE\u5F55"},Lo.map((e,n)=>t.default.createElement("span",{key:e.rel||"root",className:"crumb-item"},n>0?t.default.createElement("span",{className:"crumb-sep"},"/"):t.default.createElement(pe,{name:"folder",size:14}),t.default.createElement("button",{className:`crumb ${n===Lo.length-1?"is-current":""}`,onClick:()=>me(e.rel),disabled:n===Lo.length-1},e.label)))):null,t.default.createElement("section",{className:"list-section"},t.default.createElement("div",{className:"list-head"},t.default.createElement("span",{className:"col-index"},"#"),t.default.createElement("span",null,"\u5355\u96C6"),t.default.createElement("span",{className:"col-duration"},"\u65F6\u957F"),t.default.createElement("span",{className:"col-star","aria-hidden":"true"}),t.default.createElement("span",{className:"col-progress"},"\u8FDB\u5EA6")),!Je&&b&&Po.length>0&&!Y?t.default.createElement("div",{className:"folder-rows"},Po.map(e=>t.default.createElement("button",{key:e.rel,className:"row folder-row",onClick:()=>me(e.rel),title:e.name},t.default.createElement("span",{className:"col-index row-index"},t.default.createElement(pe,{name:"folder",size:16})),t.default.createElement("span",{className:"row-main"},t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.name),t.default.createElement("span",{className:"row-meta"},e.count," \u4E2A\u97F3\u9891 \xB7 \u70B9\u8FDB\u53BB\u53EA\u770B\u8FD9\u4E2A\u6587\u4EF6\u5939"))),t.default.createElement("span",{className:"col-duration row-duration"},"\u203A"),t.default.createElement("span",{className:"col-star","aria-hidden":"true"}),t.default.createElement("span",{className:"col-progress","aria-hidden":"true"})))):null,Je?t.default.createElement("div",{className:"empty"},"\u6B63\u5728\u8BFB\u53D6\u2026"):yt.length===0&&!(b&&Po.length>0&&!Y)?t.default.createElement("div",{className:"empty"},t.default.createElement("p",null,r.length===0?"\u5A92\u4F53\u5E93\u8FD8\u662F\u7A7A\u7684":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5355\u96C6"),t.default.createElement("p",{className:"empty-hint"},r.length===0?"\u6DFB\u52A0\u4E00\u4E2A\u5B58\u653E\u64AD\u5BA2\u97F3\u9891\u7684\u6587\u4EF6\u5939\uFF0CPodwave \u4F1A\u81EA\u52A8\u5217\u51FA\u6240\u6709\u5355\u96C6\u3002":b?`\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u6CA1\u6709\u76F4\u63A5\u653E\u5728\u8FD9\u91CC\u7684\u97F3\u9891${Po.length?"\uFF0C\u70B9\u4E0A\u9762\u7684\u5B50\u6587\u4EF6\u5939\u8FDB\u53BB\u770B\u770B":"\u3002"}`:"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u5207\u56DE\u5168\u90E8\u5355\u96C6\u3002"),r.length===0?t.default.createElement("button",{className:"btn primary",onClick:()=>xe(!0)},"\u6DFB\u52A0\u6587\u4EF6\u5939"):null,r.length>0&&b?t.default.createElement("button",{className:"btn",onClick:()=>H("")},"\u6E05\u9664\u6587\u4EF6\u5939\u7B5B\u9009"):null):t.default.createElement("div",{className:"episode-list"},yt.map((e,n)=>{let l=Bn(e),m=F?.id===e.id;return t.default.createElement("button",{key:e.id,className:`row ${m?"is-current":""} ${On(e)?"is-finished":""} ${Rt&&Oe.includes(e.id)?"is-selected":""}`,onClick:()=>Rt?dr(e.id):fn(e,!0)},t.default.createElement("span",{className:"col-index row-index"},Rt?Oe.includes(e.id)?t.default.createElement("span",{className:"row-check"},t.default.createElement(pe,{name:"check",size:14})):null:m&&Te?t.default.createElement("span",{className:"playing-bars"},t.default.createElement("i",null),t.default.createElement("i",null),t.default.createElement("i",null)):n+1),t.default.createElement("span",{className:"row-main"},t.default.createElement(Bo,{item:e,size:40}),t.default.createElement("span",{className:"row-text"},t.default.createElement("span",{className:"row-title"},e.title),t.default.createElement("span",{className:"row-meta"},t.default.createElement("span",{className:"row-meta-text"},e.artist,e.album?` \xB7 ${e.album}`:""," \xB7 ",Ao(e.mtime)),e.hasTranscript?t.default.createElement("span",{className:"row-badge"},"\u5B57\u5E55"):null,e.hasTranslation?t.default.createElement("span",{className:"row-badge is-bilingual"},"\u53CC\u8BED"):null))),t.default.createElement("span",{className:"col-duration row-duration"},Ro(e.duration)),t.default.createElement("span",{className:`row-star ${e.favorite?"is-on":""}`,role:"button",title:e.favorite?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",onClick:E=>{E.stopPropagation(),cr(e)}},"\u2605"),t.default.createElement("span",{className:"col-progress row-progress"},On(e)?t.default.createElement("span",{className:"finished-mark"},t.default.createElement(pe,{name:"check",size:14})," \u5DF2\u64AD\u5B8C"):l>0?t.default.createElement("span",{className:"mini-track"},t.default.createElement("span",{style:{width:`${l}%`}})):null))}))))),mt&&F&&!de?t.default.createElement(yn,{transcript:V,status:P,progress:ht?.progress,stage:ht?.stage,chunks:ht?.chunks,queued:ht?.queued,elapsed:Uo,editingId:Ct,draft:to,onDraftChange:Mt,onEditLine:va,onSaveLine:ma,onCancelEdit:()=>Ft(null),onSplitLine:ga,onMergeLine:fa,onValidate:wa,onResegment:ha,issues:Tt,onCancel:En,error:xo,position:f,fontSize:go,onFontSize:aa,width:zt.width,height:zt.height,onResize:ra,onSeek:ct,onClose:()=>Bt(!1),onStart:Go,target:ze,job:gt,onChangeTarget:ka,onTranslate:ba,onRetranslate:xa,onRetranslateLine:ya,onOpenSettings:()=>S("\u8BF7\u5728 DSH \u5DE6\u4FA7\u300C\u8BBE\u7F6E \u2192 \u64AD\u5BA2\u300D\u4E2D\u4E00\u952E\u8C03\u6574\u65B9\u6848\u4E0E\u9009\u9879")}):null,$o?t.default.createElement("section",{className:"jobs-panel"},t.default.createElement("header",{className:"jobs-head"},t.default.createElement("h3",null,"\u8F6C\u5199\u4EFB\u52A1"),t.default.createElement("button",{className:"mini-link",onClick:()=>Ko(!1)},"\u5173\u95ED")),t.default.createElement("div",{className:"jobs-body"},Gt.length===0?t.default.createElement("p",{className:"jobs-empty"},"\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002\u70B9\u300C\u8F6C\u5199\u5B57\u5E55\u300D\uFF0C\u6216\u5728\u4E0B\u9762\u6279\u91CF\u8F6C\u5199\u672A\u8F6C\u5199\u7684\u5355\u96C6\u3002"):Gt.map(e=>t.default.createElement("div",{key:e.key,className:`job-row job-${e.status}`},t.default.createElement("div",{className:"job-main"},t.default.createElement("span",{className:"job-title"},e.episodeTitle||e.episodeId),t.default.createElement("span",{className:"job-meta"},Ga(e)),e.status==="running"&&e.progress?.percent!=null?t.default.createElement("span",{className:"job-bar"},t.default.createElement("span",{style:{width:`${e.progress.percent}%`}})):null),t.default.createElement("div",{className:"job-actions"},["queued","running","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Pn(e,"cancel")},"\u53D6\u6D88"):null,e.status==="error"||e.status==="interrupted"||e.status==="cancelled"?t.default.createElement("button",{className:"mini-link",onClick:()=>Pn(e,"retry")},"\u91CD\u8BD5"):null,["done","error","cancelled","interrupted"].includes(e.status)?t.default.createElement("button",{className:"mini-link",onClick:()=>Pn(e,"clear")},"\u6E05\u9664"):null)))),t.default.createElement("footer",{className:"jobs-foot"},t.default.createElement("button",{className:"btn primary",disabled:!lo.length,onClick:()=>vn(lo.map(e=>e.id))},"\u8F6C\u5199\u5F53\u524D\u89C6\u56FE\u672A\u8F6C\u5199\u7684 ",lo.length," \u96C6"),t.default.createElement("button",{className:"btn ghost",disabled:!Oe.length,onClick:()=>vn(Oe)},"\u8F6C\u5199\u5DF2\u9009 ",Oe.length," \u96C6"))):null,t.default.createElement("footer",{className:"player"},t.default.createElement("div",{className:"seek-wrap",ref:cn,role:"slider",tabIndex:0,"aria-label":"\u64AD\u653E\u8FDB\u5EA6","aria-valuemin":0,"aria-valuemax":Math.round(ue||0),"aria-valuenow":Math.round(f||0),"aria-valuetext":`${He(f)} / ${He(ue)}`,onPointerDown:wr,onPointerMove:br,onPointerUp:Ma,onPointerCancel:Ma,onKeyDown:xr},t.default.createElement("div",{className:"seek-ticks","aria-hidden":"true"}),t.default.createElement("div",{className:"seek-track"},t.default.createElement("div",{className:"seek-fill",style:{width:`${ue?Math.min(100,Math.max(0,f/ue*100)):0}%`}})),t.default.createElement("div",{className:"seek-thumb",style:{left:`${ue?Math.min(100,Math.max(0,f/ue*100)):0}%`}})),t.default.createElement("div",{className:"player-body"},t.default.createElement("div",{className:"now"},F?t.default.createElement("button",{className:"now-open",onClick:()=>be(F.id),"aria-label":"\u6253\u5F00\u5F53\u524D\u5355\u96C6\u8BE6\u60C5",title:"\u6253\u5F00\u8BE6\u60C5"},t.default.createElement(Bo,{item:F,size:48}),t.default.createElement("div",{className:"now-text"},t.default.createElement("div",{className:"now-title",title:F.title},F.title),t.default.createElement("div",{className:"now-artist"},F.artist))):t.default.createElement("div",{className:"now-empty"},"\u9009\u62E9\u4E00\u96C6\u5F00\u59CB\u64AD\u653E")),t.default.createElement("div",{className:"transport"},t.default.createElement("button",{className:"icon-btn",title:"\u4E0A\u4E00\u96C6",onClick:()=>In(-1)},t.default.createElement(pe,{name:"prev"})),t.default.createElement("button",{className:"skip-btn",title:"\u540E\u9000 15 \u79D2",onClick:()=>Qo(-15)},"\u221215"),t.default.createElement("button",{className:"play-btn",onClick:Io,disabled:!F&&yt.length===0,title:"\u64AD\u653E/\u6682\u505C (\u7A7A\u683C)"},t.default.createElement(pe,{name:Te?"pause":"play",size:20})),t.default.createElement("button",{className:"skip-btn",title:"\u524D\u8FDB 15 \u79D2",onClick:()=>Qo(15)},"+15"),t.default.createElement("button",{className:"icon-btn",title:"\u4E0B\u4E00\u96C6",onClick:()=>In(1)},t.default.createElement(pe,{name:"next"}))),t.default.createElement("div",{className:"player-right"},t.default.createElement("button",{className:`subs-btn ${(de?jt:mt)?"active":""}`,disabled:!F,onClick:lr,title:(de?jt:mt)?"\u6536\u8D77\u5B57\u5E55\u9762\u677F":"\u5C55\u5F00\u5B57\u5E55\u9762\u677F"},t.default.createElement(pe,{name:"wave",size:15}),t.default.createElement("span",null,V?"\u5B57\u5E55":P==="queued"||P==="running"?"\u8F6C\u5199\u4E2D":"\u8F6C\u5199")),t.default.createElement("span",{className:"time"},He(f)," / ",He(ue)),t.default.createElement("span",{className:"rate-wrap"},t.default.createElement("button",{className:"rate-btn",onClick:()=>{Se(!1),$(e=>!e)},title:"\u64AD\u653E\u901F\u5EA6","aria-haspopup":"menu","aria-expanded":j},I.rate,"\xD7"),j?t.default.createElement("span",{className:"rate-menu",role:"menu"},es.map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":e===I.rate,className:e===I.rate?"is-on":"",onClick:()=>yr(e)},e,"\xD7"))):null),t.default.createElement("span",{className:"sleep-wrap"},t.default.createElement("button",{className:`rate-btn sleep-btn ${Z?"active":""}`,onClick:()=>{$(!1),Se(e=>!e)},title:"\u7761\u7720\u5B9A\u65F6","aria-haspopup":"menu","aria-expanded":X},t.default.createElement(pe,{name:"moon",size:14}),Z?t.default.createElement("span",{className:"sleep-left"},He(fe)):null),X?t.default.createElement("span",{className:"sleep-menu",role:"menu"},t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":!Z&&K!==-1,className:!Z&&K!==-1?"is-on":"",onClick:()=>An("off")},"\u5173\u95ED"),[15,30,45,60].map(e=>t.default.createElement("button",{key:e,type:"button",role:"menuitemradio","aria-checked":K===e,className:K===e?"is-on":"",onClick:()=>An(e)},e," \u5206\u949F")),t.default.createElement("button",{type:"button",role:"menuitemradio","aria-checked":K===-1,className:K===-1?"is-on":"",onClick:()=>An("end")},"\u672C\u96C6\u7ED3\u675F")):null),t.default.createElement("button",{className:"icon-btn",onClick:kr,title:"\u9759\u97F3"},t.default.createElement(pe,{name:I.volume>0?"volume":"mute"})),t.default.createElement("input",{className:"volume",type:"range",min:0,max:1,step:.05,value:I.volume,onChange:e=>wn(Number(e.target.value)),"aria-label":"\u97F3\u91CF"})))),et?t.default.createElement(Fn,{folders:v,items:r,onClose:()=>xe(!1),onSubmit:Mr,onPick:Tr,onRemoveFolder:Da,onRescan:Cr,onDropFiles:Ta}):null,G?t.default.createElement("div",{className:"toast"},G):null,ie!=="idle"&&!Ut&&!Xo?t.default.createElement(Vn,{lines:ae,draft:Cn,displayMode:pn,onDisplayMode:sr,status:ie,error:ye,device:So,count:ae.length,elapsed:sn?Math.max(0,Math.round((oo-sn)/1e3)):0,fontSize:go,level:To,hint:no,onStop:ca,onSave:so,onClose:()=>so(!1)}):null,t.default.createElement("audio",{ref:De,preload:"metadata",onPlay:()=>te(!0),onPause:()=>{te(!1);let e=De.current;Q.current&&e&&e.currentTime>0&&!e.ended&&io(Q.current.id,e.currentTime,e.duration||Qe.current,!0)},onTimeUpdate:Nr,onLoadedMetadata:zr,onEnded:$r,onError:()=>{te(!1),S("\u8FD9\u4E2A\u6587\u4EF6\u65E0\u6CD5\u64AD\u653E")}}))}var o=it(require("react"),1);var nn="0.12.2";var q="/podwave/api";async function Fe(a){let i=await fetch(a),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(r.error||`\u8BF7\u6C42\u5931\u8D25 ${i.status}`);return r}async function Ie(a,i,r){let p=await fetch(a,{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(r??{})}),v=await p.json().catch(()=>({}));if(!p.ok)throw new Error(v.error||`\u8BF7\u6C42\u5931\u8D25 ${p.status}`);return v}function os(a){let i=Math.max(0,Math.round(Number(a)||0)),r=Math.floor(i/3600),p=Math.floor(i%3600/60);return r>0?`${r} \u5C0F\u65F6 ${p} \u5206`:`${p} \u5206\u949F`}function uo(a){let i=Number(a)||0;return i?i<1024**2?`${Math.round(i/1024)} KB`:i<1024**3?`${(i/1024**2).toFixed(1)} MB`:`${(i/1024**3).toFixed(1)} GB`:"0 B"}function ns(a){if(!a)return"";let i=new Date(a),r=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${r(i.getMonth()+1)}-${r(i.getDate())} ${r(i.getHours())}:${r(i.getMinutes())}`}function as(a){let i=a?.projectDir;return i?a?.projectKind==="workspace"?`\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u5F53\u524D\u5DE5\u4F5C\u533A\u7684 models/\uFF08${i}\uFF09`:`\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u63D2\u4EF6\u76EE\u5F55\uFF08${i}\uFF09`:"\u6A21\u578B\u9ED8\u8BA4\u653E\u5728\u6570\u636E\u76EE\u5F55\u91CC"}function rs(a){return a?.projectKind==="workspace"?"\u7528\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u7528\u9879\u76EE\u6587\u4EF6\u5939"}function ss(a){return a?.custom?"\u81EA\u5B9A\u4E49\u4F4D\u7F6E":a?.projectDir&&a.dir===a.projectDir?a.projectKind==="workspace"?"\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939":"\u9879\u76EE\u6587\u4EF6\u5939":a?.legacyDir&&a.dir===a.legacyDir?"\u539F\u6709\u7684 ~/.podwave/models":"\u9ED8\u8BA4\u4F4D\u7F6E"}var Qa=[{id:"cloud",title:"\u7701\u5FC3\u4E91\u7AEF",tag:"\u63A8\u8350",desc:"\u514D\u4E0B\u8F7D\u5927\u6A21\u578B\uFF0C\u586B\u4E00\u6B21 API Key \u5373\u7528\uFF1B\u7FFB\u8BD1\u8DDF\u968F DSH \u5F53\u524D\u6A21\u578B\u3002"},{id:"offline",title:"\u5B8C\u5168\u79BB\u7EBF\u514D\u8D39",tag:"\u96F6\u8D39\u7528",desc:"\u97F3\u9891\u4E0E\u5B57\u5E55\u4E0D\u51FA\u672C\u673A\uFF0C\u4F7F\u7528\u672C\u5730\u8BED\u97F3\u8BC6\u522B\u4E0E\u672C\u5730\u7FFB\u8BD1\u6A21\u578B\u3002"},{id:"hybrid",title:"\u7701\u94B1\u6DF7\u5408",tag:"\u5747\u8861",desc:"\u672C\u5730\u514D\u8D39\u8F6C\u5199 + DSH \u5F53\u524D\u6A21\u578B\u9AD8\u8D28\u91CF\u7FFB\u8BD1\u3002"}];function Gn(){let{theme:a,mode:i,systemTheme:r,setMode:p}=on(),[v,g]=(0,o.useState)("api"),[h,z]=(0,o.useState)("dsh"),[N,C]=(0,o.useState)("zh"),[I,L]=(0,o.useState)(!0),[j,$]=(0,o.useState)(!0),[k,A]=(0,o.useState)(!0),[K,oe]=(0,o.useState)(""),[Z,he]=(0,o.useState)(null),[fe,we]=(0,o.useState)("https://api.deepseek.com"),[X,Se]=(0,o.useState)("deepseek-chat"),[Y,Ce]=(0,o.useState)(""),[ke,Me]=(0,o.useState)([]),[Ae,Ve]=(0,o.useState)(!1),[R,W]=(0,o.useState)(""),[b,H]=(0,o.useState)(!1),[ne,me]=(0,o.useState)(""),[ee,_e]=(0,o.useState)([]),[ge,be]=(0,o.useState)(!0),[F,Re]=(0,o.useState)("bilingual"),[Te,te]=(0,o.useState)("auto"),[f,J]=(0,o.useState)(!0),[ue,Ne]=(0,o.useState)(!1),[Je,Ge]=(0,o.useState)(.78),[et,xe]=(0,o.useState)(18),[Xe,T]=(0,o.useState)(15),[G,O]=(0,o.useState)(780),[V,c]=(0,o.useState)(""),P=(0,o.useRef)(0),[Ke,Fo]=(0,o.useState)(!1),[vo,Nt]=(0,o.useState)(""),[an,mo]=(0,o.useState)(15),[go,fo]=(0,o.useState)(!0),[zt,Ot]=(0,o.useState)([]),[Ue,$t]=(0,o.useState)(null),[ho,wo]=(0,o.useState)(""),[St,Uo]=(0,o.useState)(!1),[bo,xo]=(0,o.useState)({asrModel:"",translateModel:""}),[vt,mt]=(0,o.useState)(""),[Bt,jt]=(0,o.useState)(""),[dt,yo]=(0,o.useState)(null),[$n,ze]=(0,o.useState)({showSidebarPanel:!0}),[tt,Zt]=(0,o.useState)({mode:"copy",orphans:0,orphanBytes:0}),[Ho,gt]=(0,o.useState)([]),[ft,Vo]=(0,o.useState)(""),[Sn,Cn]=(0,o.useState)(0),[ko,rn]=(0,o.useState)(0),[se,No]=(0,o.useState)(null),[zo,ht]=(0,o.useState)(null),[_o,$o]=(0,o.useState)(null),[Ko,Gt]=(0,o.useState)(!1),[Qt,Rt]=(0,o.useState)("auto"),[eo,Oe]=(0,o.useState)(!1),[ot,Ct]=(0,o.useState)(null),[Ft,to]=(0,o.useState)(!1),[Mt,Tt]=(0,o.useState)(""),[Wo,ie]=(0,o.useState)(""),[nt,ae]=(0,o.useState)(""),Dt=(0,o.useRef)(0),ye=(0,o.useCallback)(s=>{ie(s),window.clearTimeout(Dt.current),Dt.current=window.setTimeout(()=>ie(""),2400)},[]),wt=(0,o.useCallback)(async()=>{try{let d=(await navigator.mediaDevices.enumerateDevices()).filter(w=>w.kind==="audioinput");return _e(d),d}catch{return[]}},[]),So=(0,o.useCallback)(async()=>{try{let[s,d,w,le,We,Ye,_t,at,Ee,Le]=await Promise.all([Fe(`${q}/history`),Fe(`${q}/live/history`).catch(()=>({items:[]})),Fe(`${q}/models`),Fe(`${q}/translate/settings`),Fe(`${q}/ui-settings`),Fe(`${q}/transcribe/settings`),Fe(`${q}/import/settings`),Fe(`${q}/setup`),Fe(`${q}/update`),Fe(`${q}/live`)]);No(at),Ct(Ee),at?.job?.status==="running"&&Oe(!0),Zt({mode:_t.mode||"copy",orphans:_t.orphans||0,orphanBytes:_t.orphanBytes||0}),ze({showSidebarPanel:We?.showSidebarPanel!==!1}),$(We?.autoShowTranslation!==!1),Fo(We?.advancedOpen===!0),Nt((Ye.hotwords||[]).join(" ")),mo(Ye.chunkMinutes||15),fo(Ye.diarize!==!1),g(Ye.provider||"api"),A(Ye.realtime!==!1),me(Le?.deviceId||""),be(Le?.saveOnStop!==!1),Re(["original","bilingual","translation"].includes(Le?.displayMode)?Le.displayMode:"bilingual"),te(Le?.source||"auto"),J(Le?.tap?.supported!==!1),Ne(!!Le?.draft?.available),Number.isFinite(Number(Le?.opacity))&&Ge(Number(Le.opacity)),Number.isFinite(Number(Le?.fontSize))&&xe(Number(Le.fontSize)),Number.isFinite(Number(Le?.translationFontSize))&&T(Number(Le.translationFontSize)),Number.isFinite(Number(Le?.width))&&O(Number(Le.width)),wt(),gt(s.items||[]),Vo(s.dir||""),Cn(Number(s.bytes)||0),rn(Array.isArray(d?.items)?d.items.length:0),Ot(w.models||[]),$t(w.storage||null),wo(w.storage?.dir||""),xo(w.config||{asrModel:"",translateModel:""}),yo(w.transcribe||null),mt(w.config?.asrModel||""),jt(w.config?.translateModel||""),he(le),z(le.provider||"dsh"),C(le.target==="en"?"en":"zh"),L(le.autoAfterTranscribe!==!1),we(le.apiBase||"https://api.deepseek.com"),Se(le.apiModel||"deepseek-chat"),Ce(""),ae(""),le.provider==="api"&&Ie(`${q}/translate/models`,"POST",{base:le.apiBase,key:void 0}).then(Kt=>{let rt=Array.isArray(Kt?.models)?Kt.models:[];Me(rt),W(rt.length?`\u5DF2\u53D1\u73B0 ${rt.length} \u4E2A\u6A21\u578B`:"")}).catch(()=>{})}catch(s){ae(s.message)}},[wt]);(0,o.useEffect)(()=>{So()},[So]),(0,o.useEffect)(()=>{let s=!1;return Fe(`${q}/setup/plan?source=${Qt}&mode=${v==="local"||h==="local"?"local":"basic"}`).then(w=>{s||ht(w)}).catch(()=>{}),()=>{s=!0}},[Qt,v,h,se?.job?.status]),(0,o.useEffect)(()=>{if(!eo&&se?.job?.status!=="running")return;let s=window.setInterval(async()=>{try{let d=await Fe(`${q}/setup`);No(d),d.job?.status!=="running"&&(Oe(!1),So())}catch{}},2500);return()=>window.clearInterval(s)},[eo,se?.job?.status,So]);let Co=v==="api"&&h==="dsh"?"cloud":v==="local"&&h==="local"?"offline":v==="local"&&h==="dsh"?"hybrid":"custom",sn=async s=>{if(!K){oe(s),ae("");try{let d=await Ie(`${q}/preset`,"POST",{preset:s});d.transcribe&&(g(d.transcribe.provider||"api"),d.transcribe.runtime&&yo(d.transcribe.runtime)),d.translate&&(he(d.translate),z(d.translate.provider||"dsh"),L(d.translate.autoAfterTranscribe!==!1)),d.models&&(xo(d.models.config||{asrModel:"",translateModel:""}),mt(d.models.config?.asrModel||""),jt(d.models.config?.translateModel||""),Ot(d.models.models||[]),$t(d.models.storage||null));let w=Qa.find(le=>le.id===s)?.title||s;ye(`\u5DF2\u5207\u6362\u5230\u300C${w}\u300D`)}catch(d){ae(d.message)}finally{oe("")}}},bt=async(s,d="\u5DF2\u81EA\u52A8\u4FDD\u5B58")=>{ae("");try{let w=await Ie(`${q}/transcribe/settings`,"PUT",s);w.provider&&g(w.provider),typeof w.realtime=="boolean"&&A(w.realtime),typeof w.diarize=="boolean"&&fo(w.diarize),Number.isFinite(Number(w.chunkMinutes))&&mo(Number(w.chunkMinutes)),Array.isArray(w.hotwords)&&Nt(w.hotwords.join(" ")),w.runtime&&yo(w.runtime),d&&ye(d)}catch(w){ae(w.message)}},oo=async(s,d="\u5DF2\u81EA\u52A8\u4FDD\u5B58")=>{ae("");try{let w=await Ie(`${q}/translate/settings`,"PUT",s);return he(w),z(w.provider||"dsh"),C(w.target==="en"?"en":"zh"),L(w.autoAfterTranscribe!==!1),w.apiBase&&we(w.apiBase),w.apiModel&&Se(w.apiModel),d&&ye(d),w}catch(w){return ae(w.message),null}},Mo=async(s,d="")=>{try{let w=await Ie(`${q}/ui-settings`,"PUT",s);typeof w?.showSidebarPanel=="boolean"&&ze({showSidebarPanel:w.showSidebarPanel}),typeof w?.autoShowTranslation=="boolean"&&$(w.autoShowTranslation),typeof window<"u"&&window.dispatchEvent(new CustomEvent("podwave:ui-settings",{detail:w})),d&&ye(d)}catch(w){ae(w.message)}},To=async(s,d="\u5DF2\u81EA\u52A8\u4FDD\u5B58")=>{ae("");try{let w=await Ie(`${q}/live/settings`,"PUT",s);typeof w.saveOnStop=="boolean"&&be(w.saveOnStop),["original","bilingual","translation"].includes(w.displayMode)&&Re(w.displayMode),w.source&&te(w.source),typeof w.deviceId=="string"&&me(w.deviceId),d&&ye(d)}catch(w){ae(w.message)}},qo=async()=>{let s=Y.trim();if(!s)return;Tt("key");let d=await oo({apiKey:s},"API Key \u5DF2\u4FDD\u5B58");Tt(""),d&&(Ce(""),Fe(`${q}/transcribe/settings`).then(w=>{w?.runtime&&yo(w.runtime)}).catch(()=>{}))},no=async(s=fe,d=X)=>{let w=String(s||"").trim(),le=String(d||"").trim(),We={};w&&(We.apiBase=w),le&&le!=="__saved"&&(We.apiModel=le),Object.keys(We).length&&await oo(We,"\u7F51\u5173\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")},ao=async()=>{let s=vo.split(/[\s,，、]+/).map(d=>d.trim()).filter(Boolean).slice(0,500);await bt({hotwords:s},"\u70ED\u8BCD\u5DF2\u4FDD\u5B58")},Ut=async s=>{ae("");try{let d=await Ie(`${q}/models`,"PUT",s);xo(d.config),mt(d.config?.asrModel||""),jt(d.config?.translateModel||""),Ot(d.models||[]),yo(d.transcribe||null),d.translate&&he(d.translate),ye("\u6A21\u578B\u5DF2\u5207\u6362")}catch(d){ae(d.message)}},pt=s=>{Number.isFinite(Number(s.opacity))&&Ge(Number(s.opacity)),Number.isFinite(Number(s.fontSize))&&xe(Number(s.fontSize)),Number.isFinite(Number(s.translationFontSize))&&T(Number(s.translationFontSize)),Number.isFinite(Number(s.width))&&O(Number(s.width)),window.clearTimeout(P.current),P.current=window.setTimeout(()=>{Ie(`${q}/live/settings`,"PUT",s).catch(d=>ae(d.message))},300)},Et=async()=>{c("\u6B63\u5728\u8BF7\u6C42\u97F3\u9891\u8BBE\u5907\u6743\u9650\u2026");try{let d=await navigator.mediaDevices.getUserMedia({audio:!0});for(let w of d.getTracks())w.stop()}catch(d){c(`\u65E0\u6CD5\u8BFB\u53D6\u97F3\u9891\u8BBE\u5907\uFF1A${d.message||d}`);return}let s=await wt();c(s.length?`\u627E\u5230 ${s.length} \u4E2A\u97F3\u9891\u8F93\u5165\u8BBE\u5907`:"\u672A\u53D1\u73B0\u97F3\u9891\u8F93\u5165\u8BBE\u5907")},Ht=async(s="basic")=>{ae(""),Oe(!0);try{await Ie(`${q}/setup/install`,"POST",{source:Qt,mode:s});let d=await Fe(`${q}/setup`);No(d),ye(s==="local"?"\u5F00\u59CB\u4E0B\u8F7D\u79BB\u7EBF\u8FD0\u884C\u73AF\u5883\u4E0E\u6A21\u578B\u2026":"\u5F00\u59CB\u5B89\u88C5\u57FA\u7840\u7EC4\u4EF6\u2026")}catch(d){Oe(!1),ae(d.message)}},Qn=async()=>{try{await Ie(`${q}/setup/cancel`,"POST",{}),ye("\u5DF2\u8BF7\u6C42\u53D6\u6D88\u5B89\u88C5")}catch(s){ae(s.message)}},Mn=async()=>{Gt(!0);try{let s=await Fe(`${q}/setup/verify`);$o(s),ye(s.ok?"\u73AF\u5883\u68C0\u67E5\u5168\u90E8\u901A\u8FC7":"\u90E8\u5206\u68C0\u67E5\u9879\u672A\u901A\u8FC7")}catch(s){ye(s.message||"\u68C0\u67E5\u5931\u8D25")}finally{Gt(!1)}},Jo=async()=>{try{let s=await Fe(`${q}/setup/diagnose`),d=JSON.stringify(s,null,2);try{await navigator.clipboard.writeText(d)}catch{let w=document.createElement("textarea");w.value=d,w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}ye("\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236")}catch(s){ye(s.message||"\u590D\u5236\u5931\u8D25")}},Tn=async()=>{Ve(!0),W("");try{let s=await Ie(`${q}/translate/models`,"POST",{base:fe,key:Y.trim()||void 0}),d=Array.isArray(s?.models)?s.models:[];Me(d),W(d.length?`\u5DF2\u53D1\u73B0 ${d.length} \u4E2A\u6A21\u578B`:"\u8BE5\u5730\u5740\u672A\u8FD4\u56DE\u6A21\u578B\u5217\u8868\uFF0C\u53EF\u624B\u52A8\u8F93\u5165")}catch(s){W(s.message||"\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25")}finally{Ve(!1)}},Xo=async(s,d=!0)=>{Uo(!0),ae("");try{let w=await Ie(`${q}/models/dir`,"POST",{dir:s,move:d});$t(w.storage||null),Ot(w.models||[]),wo(w.storage?.dir||"");let le=(w.moved||[]).length;ye(le?`\u5DF2\u8FC1\u79FB ${le} \u4E2A\u6A21\u578B`:"\u6A21\u578B\u76EE\u5F55\u5DF2\u66F4\u65B0")}catch(w){ae(w.message)}finally{Uo(!1)}},Vt=async s=>{Tt(`model:${s}`),ae("");try{let d=await Ie(`${q}/models/remove`,"POST",{name:s});$t(d||null),Ot(d.models||[]),ye(`\u5DF2\u5220\u9664 ${s}`)}catch(d){ae(d.message)}finally{Tt("")}},Dn=async s=>{ae("");try{let d=await Ie(`${q}/import/settings`,"PUT",{mode:s});Zt(w=>({...w,mode:d.mode})),ye("\u5BFC\u5165\u65B9\u5F0F\u5DF2\u4FDD\u5B58")}catch(d){ae(d.message)}},ln=async()=>{if(tt.orphans&&window.confirm(`\u6E05\u7406 ${tt.orphans} \u4E2A\u672A\u5F15\u7528\u7684\u5BFC\u5165\u526F\u672C\uFF1F\u4E0D\u4F1A\u5F71\u54CD\u6E90\u6587\u4EF6\u3002`)){Tt("imports");try{let s=await Ie(`${q}/imports/orphans`,"DELETE",{});Zt(d=>({...d,orphans:0,orphanBytes:0})),ye(`\u5DF2\u6E05\u7406 ${s.removed||0} \u4E2A\u526F\u672C`)}catch(s){ae(s.message)}finally{Tt("")}}},Rn=async()=>{to(!0);try{Ct(await Fe(`${q}/update?force=1`))}catch{ye("\u68C0\u67E5\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}finally{to(!1)}},dn=()=>{let s=!Ke;Fo(s),Ie(`${q}/ui-settings`,"PUT",{advancedOpen:s}).catch(()=>{})},Do=zt.length?zt:[{name:bo.asrModel||"moss-transcribe-diarize",kind:"asr",ready:!!dt?.modelReady},{name:bo.translateModel||"hy-mt3-1.8b-4bit",kind:"translate",ready:!!Z?.localReady}],Yo=s=>s.kind||(/asr|sensevoice|sherpa|moss/i.test(s.name)?"asr":/^hy-mt/i.test(s.name)?"translate":""),pn=Do.filter(s=>Yo(s)==="asr"&&s.ready!==!1),ro=Do.filter(s=>Yo(s)==="translate"&&s.ready!==!1),De=(s,d)=>{if(!d||s.some(le=>le.name===d))return s;let w=Do.find(le=>le.name===d);return[{name:d,ready:w?w.ready!==!1:!1,kind:w?.kind||"",missing:!0},...s]},Pt=De(pn.length?pn:Do,vt),cn=De(ro.length?ro:Do,Bt),Q=!!(dt?.installed&&dt?.modelReady),Zo=!!Z?.localReady,Qe=v==="local"&&!Q||h==="local"&&!Zo,xt=!!(Z?.hasApiKey||dt?.api?.hasKey),Lt=!!(nn&&se?.version&&se.version!==nn),It=!!(eo||se?.job?.status==="running");return o.default.createElement("div",{className:"podwave-root podwave-settings-host","data-pw-theme":a,style:{height:"auto",overflow:"visible"}},o.default.createElement("style",null,xn),o.default.createElement("div",{className:"podwave-settings"},o.default.createElement("header",{className:"settings-head"},o.default.createElement("h1",null,"\u64AD\u5BA2"),o.default.createElement("p",null,"\u6240\u6709\u4FEE\u6539\u81EA\u52A8\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548\u3002")),Lt?o.default.createElement("div",{className:"settings-stale"},"\u63D2\u4EF6\u5DF2\u66F4\u65B0\u5230 v",nn,"\uFF0C\u5F53\u524D\u8FD0\u884C\u7684\u540E\u53F0\u4ECD\u662F v",se.version,"\u3002",o.default.createElement("strong",null,"\u91CD\u542F DSH")," \u540E\u6240\u6709\u65B0\u4F18\u5316\u5C06\u5B8C\u5168\u751F\u6548\u3002"):null,nt?o.default.createElement("div",{className:"banner error",onClick:()=>ae("")},nt):null,Wo?o.default.createElement("div",{className:"settings-message"},Wo):null,o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5916\u89C2\u6A21\u5F0F"),o.default.createElement("p",{className:"settings-hint"},"\u5207\u6362\u6D45\u8272\u3001\u6DF1\u8272\u6216\u81EA\u52A8\u8DDF\u968F\u7CFB\u7EDF\u5916\u89C2\uFF0C\u4E3B\u754C\u9762\u4E0E\u8BBE\u7F6E\u9875\u5B9E\u65F6\u540C\u6B65\u3002"),o.default.createElement("div",{className:"theme-cards",role:"group","aria-label":"\u5916\u89C2\u6A21\u5F0F"},o.default.createElement("button",{type:"button",className:`theme-card ${i==="light"?"is-active":""}`,"aria-pressed":i==="light",onClick:()=>{p("light"),ye("\u5DF2\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F")}},o.default.createElement("div",{className:"theme-swatch","aria-hidden":"true"},o.default.createElement("div",{className:"sw-light-l"}),o.default.createElement("div",{className:"sw-light-r"},o.default.createElement("div",{className:"sw-bar is-a"}),o.default.createElement("div",{className:"sw-bar is-b"}),o.default.createElement("div",{className:"sw-bar is-c"}))),o.default.createElement("div",{className:"theme-card-txt"},o.default.createElement("strong",null,"\u6D45\u8272\u6A21\u5F0F"),o.default.createElement("span",null,"\u62C9\u4E1D\u6696\u7070\u9762\u677F\uFF0C\u65E5\u95F4\u9AD8\u6E05\u6670"))),o.default.createElement("button",{type:"button",className:`theme-card ${i==="dark"?"is-active":""}`,"aria-pressed":i==="dark",onClick:()=>{p("dark"),ye("\u5DF2\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F")}},o.default.createElement("div",{className:"theme-swatch","aria-hidden":"true"},o.default.createElement("div",{className:"sw-dark-l"}),o.default.createElement("div",{className:"sw-dark-r"},o.default.createElement("div",{className:"sw-bar is-a-dark"}),o.default.createElement("div",{className:"sw-bar is-b-dark"}),o.default.createElement("div",{className:"sw-bar is-c-dark"}))),o.default.createElement("div",{className:"theme-card-txt"},o.default.createElement("strong",null,"\u6DF1\u8272\u6A21\u5F0F"),o.default.createElement("span",null,"\u9633\u6781\u77F3\u58A8\u6697\u9762\uFF0C\u591C\u95F4\u4F4E\u7729\u5149"))),o.default.createElement("button",{type:"button",className:`theme-card ${i==="system"?"is-active":""}`,"aria-pressed":i==="system",onClick:()=>{p("system"),ye("\u5DF2\u5207\u6362\u4E3A\u8DDF\u968F\u7CFB\u7EDF")}},o.default.createElement("div",{className:"theme-swatch sw-sys","aria-hidden":"true"},o.default.createElement("div",{className:"sw-light-r"},o.default.createElement("div",{className:"sw-bar is-a"}),o.default.createElement("div",{className:"sw-bar is-b"})),o.default.createElement("div",{className:"sw-dark-r"},o.default.createElement("div",{className:"sw-bar is-a-dark"}),o.default.createElement("div",{className:"sw-bar is-b-dark"}))),o.default.createElement("div",{className:"theme-card-txt"},o.default.createElement("strong",null,"\u8DDF\u968F\u7CFB\u7EDF"),o.default.createElement("span",null,"\u5F53\u524D\u7CFB\u7EDF\u4E3A",r==="dark"?"\u6DF1\u8272":"\u6D45\u8272"))))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u4F7F\u7528\u65B9\u5F0F\uFF08\u4E00\u952E\u914D\u7F6E\uFF09"),o.default.createElement("p",{className:"settings-hint"},"\u9009\u4E00\u79CD\u6700\u987A\u624B\u7684\u65B9\u5F0F\uFF0C\u8F6C\u5199\u548C\u7FFB\u8BD1\u4F1A\u81EA\u52A8\u914D\u5408\u597D\u3002"),o.default.createElement("div",{className:"preset-grid"},Qa.map(s=>{let d=Co===s.id;return o.default.createElement("button",{key:s.id,type:"button",className:`preset-card ${d?"is-active":""}`,disabled:!!K,onClick:()=>sn(s.id)},o.default.createElement("div",{className:"preset-head"},o.default.createElement("span",{className:"preset-title"},s.title),o.default.createElement("span",{className:`preset-tag ${d?"is-active":""}`},d?"\u5F53\u524D":s.tag)),o.default.createElement("p",{className:"preset-desc"},s.desc))})),o.default.createElement("div",{className:"preset-summary"},o.default.createElement("span",null,"\u8F6C\u5199\uFF1A",v==="local"?Q?`\u672C\u5730 ${dt?.modelName||"\u6A21\u578B"}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u672C\u5730\u6A21\u578B\u672A\u5C31\u7EEA":xt?"DeepSeek \u4E91\u7AEF\uFF08\u5DF2\u5C31\u7EEA\uFF09":"DeepSeek \u4E91\u7AEF\uFF08\u5F85\u586B Key\uFF09"),o.default.createElement("span",null,"\xB7"),o.default.createElement("span",null,"\u7FFB\u8BD1\uFF1A",h==="dsh"?Z?.dshReady?`DSH\uFF08${Z.dshLabel}\uFF09`:"DSH \u5F53\u524D\u6A21\u578B":h==="local"?Zo?`\u672C\u5730 ${Z?.localModel||"\u6A21\u578B"}\uFF08\u5DF2\u5C31\u7EEA\uFF09`:"\u672C\u5730\u7FFB\u8BD1\u672A\u5C31\u7EEA":`\u81EA\u5B9A\u4E49 API\uFF08${X}\uFF09`)),Qe?o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{className:"settings-btn",disabled:It,onClick:()=>Ht("local")},It?"\u6B63\u5728\u5B89\u88C5\u79BB\u7EBF\u80FD\u529B\u2026":"\u4E00\u952E\u5B89\u88C5\u79BB\u7EBF\u80FD\u529B"),It?o.default.createElement("button",{className:"settings-btn ghost",onClick:Qn},"\u53D6\u6D88"):o.default.createElement("span",{className:"settings-status"},zo?.totalBytes?`\u7EA6\u9700\u4E0B\u8F7D ${uo(zo.totalBytes)}`:"\u5B89\u88C5 Python \u8FD0\u884C\u73AF\u5883\u4E0E\u63A8\u8350\u672C\u5730\u6A21\u578B")):null,se?.job&&(It||se.job.error)?o.default.createElement("div",{className:"setup-job"},o.default.createElement("div",{className:"setup-job-line"},o.default.createElement("span",null,se.job.stage||se.job.status),o.default.createElement("span",null,se.job.progress||0,"% \xB7 ",uo(se.job.bytes)," / ",uo(se.job.expected))),o.default.createElement("div",{className:"setup-progress"},o.default.createElement("span",{style:{width:`${se.job.progress||0}%`}})),se.job.error?o.default.createElement("p",{className:"settings-empty"},"\u5931\u8D25\uFF1A",se.job.error):null):null,o.default.createElement("div",{className:"settings-fields",style:{marginTop:14}},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"DeepSeek Key"),o.default.createElement("input",{type:"password",value:Y,onChange:s=>Ce(s.target.value),onBlur:qo,onKeyDown:s=>{s.key==="Enter"&&(s.preventDefault(),qo())},placeholder:xt?`\u5DF2\u4FDD\u5B58 ${Z?.apiKeyMasked||"sk-****"}\uFF08\u8F93\u5165\u65B0 Key \u56DE\u8F66\u8986\u76D6\uFF09`:"sk-...\uFF08\u4E91\u7AEF\u8F6C\u5199\u4E0E\u5B9E\u65F6\u5B57\u5E55\u5171\u7528\uFF09",spellCheck:!1}),Y.trim()?o.default.createElement("button",{type:"button",className:"settings-btn is-mini",disabled:Mt==="key",onClick:qo},Mt==="key"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"):o.default.createElement("span",{className:"settings-status"},xt?"\u5DF2\u914D\u7F6E":"\u672A\u586B\u5199")))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5B57\u5E55\u4E0E\u7FFB\u8BD1"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u76EE\u6807\u8BED\u8A00"),o.default.createElement("select",{value:N,onChange:s=>{let d=s.target.value==="en"?"en":"zh";C(d),oo({target:d},"\u76EE\u6807\u8BED\u8A00\u5DF2\u66F4\u65B0"),Mo({translateTarget:d})}},o.default.createElement("option",{value:"zh"},"\u4E2D\u6587\uFF08\u5916\u8BED\u81EA\u52A8\u8BD1\u6210\u4E2D\u6587\uFF09"),o.default.createElement("option",{value:"en"},"English\uFF08\u4E2D\u6587\u81EA\u52A8\u8BD1\u6210\u82F1\u6587\uFF09"))),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:I,onChange:s=>{let d=s.target.checked;L(d),oo({autoAfterTranscribe:d})}}),o.default.createElement("span",null,"\u5916\u8BED\u64AD\u5BA2\u8F6C\u5199\u5B8C\u81EA\u52A8\u7FFB\u8BD1\uFF08\u4E2D\u6587\u64AD\u5BA2\u81EA\u52A8\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u518D\u624B\u52A8\u70B9\u7FFB\u8BD1\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:j,onChange:s=>{let d=s.target.checked;$(d),Mo({autoShowTranslation:d},"\u5DF2\u81EA\u52A8\u4FDD\u5B58")}}),o.default.createElement("span",null,"\u6253\u5F00\u5DF2\u6709\u8BD1\u6587\u7684\u5355\u96C6\u65F6\u9ED8\u8BA4\u5C55\u793A\u53CC\u8BED\u5B57\u5E55")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:k,onChange:s=>{let d=s.target.checked;A(d),bt({realtime:d})}}),o.default.createElement("span",null,"\u8FB9\u64AD\u8FB9\u51FA\u5B57\u5E55\uFF08\u4E91\u7AEF\u8F6C\u5199\u6A21\u5F0F\u4E0B\uFF0C\u64AD\u653E\u65F6\u6309\u8FDB\u5EA6\u6EDA\u52A8\u8BC6\u522B\uFF09")))),o.default.createElement("section",{className:"settings-card"},o.default.createElement("h2",null,"\u5B9E\u65F6\u5B57\u5E55\uFF08\u542C\u7535\u8111\u58F0\u97F3\uFF09"),o.default.createElement("p",{className:"settings-hint"},f?"macOS 14.2+ \u76F4\u63A5\u76D1\u542C\u7CFB\u7EDF\u58F0\u97F3\uFF0C\u65E0\u9700\u865A\u62DF\u58F0\u5361\u3002\u5B57\u5E55\u6846\u53EF\u76F4\u63A5\u62D6\u8FB9\u7F18\u6216\u53F3\u4E0B\u89D2\u6539\u5927\u5C0F\uFF08\u53CC\u51FB\u53F3\u4E0B\u89D2\u6062\u590D\u81EA\u52A8\u9AD8\u5EA6\uFF09\uFF0C\u60AC\u505C\u70B9 \u2699 \u53EF\u968F\u65F6\u5207\u663E\u793A\u5185\u5BB9\u3002":"\u542C\u7535\u8111\u6B63\u5728\u64AD\u653E\u7684\u89C6\u9891\u3001\u76F4\u64AD\u6216\u4F1A\u8BAE\uFF0C\u9700\u8981\u914D\u5408\u865A\u62DF\u58F0\u5361\uFF08\u53EF\u5728\u4E0B\u65B9\u9AD8\u7EA7\u8BBE\u7F6E\u4E2D\u9009\u8BBE\u5907\uFF09\u3002"),o.default.createElement("div",{className:"preset-summary",style:{marginBottom:12}},o.default.createElement("span",null,"\u91C7\u96C6\uFF1A",f?"\u7CFB\u7EDF\u97F3\u9891\u76F4\u91C7\uFF08\u5DF2\u652F\u6301\uFF09":"\u865A\u62DF\u58F0\u5361 / \u9EA6\u514B\u98CE"),o.default.createElement("span",null,"\xB7"),o.default.createElement("span",null,"\u77AC\u65F6\u6EDA\u5B57\u8349\u7A3F\uFF1A",ue?"\u5DF2\u542F\u7528\uFF08\u672C\u5730 SenseVoice\uFF09":"\u672A\u5B89\u88C5 SenseVoice\uFF0C\u4F7F\u7528\u4E91\u7AEF\u76F4\u51FA")),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u663E\u793A\u5185\u5BB9"),o.default.createElement("select",{value:F,onChange:s=>{let d=s.target.value;Re(d),To({displayMode:d},"\u5B57\u5E55\u663E\u793A\u6A21\u5F0F\u5DF2\u66F4\u65B0")}},o.default.createElement("option",{value:"bilingual"},"\u539F\u6587 + \u8BD1\u6587\uFF08\u53CC\u8BED\uFF09"),o.default.createElement("option",{value:"original"},"\u4EC5\u663E\u793A\u539F\u6587\uFF08\u66F4\u5FEB\uFF0C\u4E0D\u8C03\u7528\u7FFB\u8BD1\uFF09"),o.default.createElement("option",{value:"translation"},"\u4EC5\u663E\u793A\u8BD1\u6587\uFF08\u65E0\u8BD1\u6587\u65F6\u5E73\u6ED1\u663E\u793A\u539F\u6587\uFF09"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u5E95\u677F\u4E0D\u900F\u660E\u5EA6"),o.default.createElement("input",{type:"range",min:"15",max:"100",step:"1",value:Math.round(Je*100),onChange:s=>pt({opacity:Number(s.target.value)/100})}),o.default.createElement("span",{className:"settings-status"},Math.round(Je*100),"%")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u539F\u6587\u5B57\u53F7"),o.default.createElement("input",{type:"range",min:"12",max:"42",step:"1",value:et,onChange:s=>pt({fontSize:Number(s.target.value)})}),o.default.createElement("span",{className:"settings-status"},et,"px")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u8BD1\u6587\u5B57\u53F7"),o.default.createElement("input",{type:"range",min:"10",max:"42",step:"1",value:Xe,onChange:s=>pt({translationFontSize:Number(s.target.value)})}),o.default.createElement("span",{className:"settings-status"},Xe,"px")),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7A97\u53E3\u5BBD\u5EA6"),o.default.createElement("input",{type:"range",min:"380",max:"1200",step:"10",value:G,onChange:s=>pt({width:Number(s.target.value)})}),o.default.createElement("span",{className:"settings-status"},G,"px")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:ge,onChange:s=>{let d=s.target.checked;be(d),To({saveOnStop:d})}}),o.default.createElement("span",null,"\u505C\u6B62\u5B9E\u65F6\u5B57\u5E55\u65F6\u81EA\u52A8\u4FDD\u5B58\u8BB0\u5F55\uFF08\u53EF\u5728\u64AD\u5BA2\u5DE6\u4FA7\u300C\u5B9E\u65F6\u8BB0\u5F55\u300D\u56DE\u770B\u4E0E\u5BFC\u51FA\uFF09")))),o.default.createElement("section",{className:`settings-card collapsible ${Ke?"is-open":""}`},o.default.createElement("button",{type:"button",className:"card-head",onClick:dn,"aria-expanded":Ke,title:Ke?"\u6536\u8D77\u9AD8\u7EA7\u8BBE\u7F6E":"\u5C55\u5F00\u9AD8\u7EA7\u8BBE\u7F6E"},o.default.createElement("h2",null,"\u9AD8\u7EA7\u8BBE\u7F6E"),o.default.createElement("span",{className:"card-badge"},"\u6A21\u578B \xB7 \u7F51\u5173 \xB7 \u70ED\u8BCD \xB7 \u8BBE\u5907 \xB7 \u8BCA\u65AD"),o.default.createElement("span",{className:"card-caret","aria-hidden":"true"},"\u25BE")),Ke?o.default.createElement("div",{className:"advanced-body"},o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u7FFB\u8BD1\u5F15\u64CE\u4E0E\u81EA\u5B9A\u4E49\u7F51\u5173"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u7FFB\u8BD1\u5F15\u64CE"),o.default.createElement("select",{value:h,onChange:s=>oo({provider:s.target.value})},o.default.createElement("option",{value:"dsh"},"DSH \u5F53\u524D\u6A21\u578B"),o.default.createElement("option",{value:"local"},"\u672C\u5730\u79BB\u7EBF\u6A21\u578B"),o.default.createElement("option",{value:"api"},"\u81EA\u5B9A\u4E49 OpenAI \u517C\u5BB9 API"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"API \u5730\u5740"),o.default.createElement("input",{value:fe,onChange:s=>we(s.target.value),onBlur:()=>no(fe,X),placeholder:"https://api.deepseek.com",spellCheck:!1})),o.default.createElement("div",{className:"field-row"},o.default.createElement("span",null,"\u5BF9\u8BDD\u6A21\u578B"),b||!ke.length?o.default.createElement("input",{value:X,onChange:s=>Se(s.target.value),onBlur:()=>no(fe,X),placeholder:"deepseek-chat",spellCheck:!1}):o.default.createElement("select",{value:(ke.includes(X),X),onChange:s=>{let d=s.target.value;Se(d),no(fe,d)}},!ke.includes(X)&&X?o.default.createElement("option",{value:X},X,"\uFF08\u5F53\u524D\u5DF2\u4FDD\u5B58\uFF09"):null,ke.map(s=>o.default.createElement("option",{key:s,value:s},s))),o.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:Tn,disabled:Ae},Ae?"\u8BFB\u53D6\u4E2D\u2026":"\u8BFB\u5217\u8868"),ke.length?o.default.createElement("button",{type:"button",className:"settings-btn is-mini ghost",onClick:()=>H(s=>!s)},b?"\u9009\u5217\u8868":"\u624B\u586B"):null),R?o.default.createElement("p",{className:"settings-status"},R):null)),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u8F6C\u5199\u7EC6\u8282"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u4E13\u6709\u70ED\u8BCD"),o.default.createElement("input",{value:vo,onChange:s=>Nt(s.target.value),onBlur:ao,onKeyDown:s=>{s.key==="Enter"&&(s.preventDefault(),ao())},placeholder:"\u7A7A\u683C\u5206\u9694\uFF0C\u4F8B\u5982\uFF1ADeepSeek \u64AD\u5BA2 \u7845\u8C37"})),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u672C\u5730\u5206\u5757\uFF08\u5206\uFF09"),o.default.createElement("input",{type:"number",min:"1",max:"60",value:an,onChange:s=>mo(s.target.value),onBlur:()=>bt({chunkMinutes:Math.min(60,Math.max(1,Number(an)||15))})}),o.default.createElement("span",{className:"settings-status"},"\u4EC5\u672C\u5730\u6A21\u578B\u751F\u6548")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:go,onChange:s=>{let d=s.target.checked;fo(d),bt({diarize:d})}}),o.default.createElement("span",null,"\u81EA\u52A8\u8BC6\u522B\u8BF4\u8BDD\u4EBA\uFF08MOSS \u81EA\u5E26\uFF1B\u5176\u5B83\u5F15\u64CE\u9700\u672C\u5730\u58F0\u7EB9\u6A21\u578B\uFF09")))),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u672C\u5730\u6A21\u578B\u4E0E\u5B58\u50A8\u4F4D\u7F6E"),dt?.modelProblem?o.default.createElement("p",{className:"settings-stale"},dt.modelProblem):null,o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u672C\u5730\u8F6C\u5199\u6A21\u578B"),o.default.createElement("select",{value:vt,onChange:s=>{let d=s.target.value;mt(d),Ut({asrModel:d})}},Pt.map(s=>o.default.createElement("option",{key:s.name,value:s.name},s.name,s.missing?"\uFF08\u4E0D\u53EF\u7528\uFF09":s.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09")))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u672C\u5730\u7FFB\u8BD1\u6A21\u578B"),o.default.createElement("select",{value:Bt,onChange:s=>{let d=s.target.value;jt(d),Ut({translateModel:d})}},cn.map(s=>o.default.createElement("option",{key:s.name,value:s.name},s.name,s.missing?"\uFF08\u4E0D\u53EF\u7528\uFF09":s.ready?"":"\uFF08\u672A\u5C31\u7EEA\uFF09"))))),Ue?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"model-path",style:{marginTop:10}},o.default.createElement("code",{className:"model-path-text",title:Ue.dir},Ue.dir),o.default.createElement("span",{className:"model-path-size"},ss(Ue)," \xB7 \u5171 ",uo(Ue.totalBytes))),o.default.createElement("p",{className:"settings-hint"},as(Ue)),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u66F4\u6539\u5B58\u653E\u4F4D\u7F6E"),o.default.createElement("input",{value:ho,onChange:s=>wo(s.target.value),placeholder:"~/Models/podwave",spellCheck:!1}),o.default.createElement("button",{type:"button",className:"settings-btn is-mini",disabled:St||ho.trim()===Ue.dir,onClick:()=>Xo(ho,!0)},St?"\u8FC1\u79FB\u4E2D\u2026":"\u8FC1\u79FB"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{type:"button",className:"settings-btn ghost",onClick:()=>Ie(`${q}/models/open`,"POST",{}).catch(()=>{})},"\u6253\u5F00\u6A21\u578B\u6587\u4EF6\u5939"),Ue.projectDir&&Ue.dir!==Ue.projectDir?o.default.createElement("button",{type:"button",className:"settings-btn ghost",disabled:St,onClick:()=>Xo(Ue.projectDir,!0)},rs(Ue)):null,Ue.custom?o.default.createElement("button",{type:"button",className:"settings-btn ghost",disabled:St,onClick:()=>Xo("",!0)},"\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E"):null),zt.length?o.default.createElement("ul",{className:"model-list"},zt.map(s=>o.default.createElement("li",{key:s.name,className:"model-row"},o.default.createElement("div",{className:"model-main"},o.default.createElement("span",{className:"model-name"},s.name),o.default.createElement("span",{className:"model-meta"},s.kindLabel," \xB7 ",uo(s.bytes),s.inUse?" \xB7 \u4F7F\u7528\u4E2D":"",s.ready?"":" \xB7 \u672A\u5C31\u7EEA")),o.default.createElement("button",{type:"button",className:"settings-btn ghost model-remove",disabled:s.inUse||Mt===`model:${s.name}`,onClick:()=>Vt(s.name)},Mt===`model:${s.name}`?"\u5220\u9664\u4E2D\u2026":"\u5220\u9664")))):null):null),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u5B9E\u65F6\u5B57\u5E55\u97F3\u9891\u6E90"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u91C7\u96C6\u65B9\u5F0F"),o.default.createElement("select",{value:Te,onChange:s=>{let d=s.target.value;te(d),To({source:d})}},o.default.createElement("option",{value:"auto"},"\u81EA\u52A8\uFF08\u4F18\u5148\u7CFB\u7EDF\u97F3\u9891\uFF09"),o.default.createElement("option",{value:"tap"},"\u4EC5\u7CFB\u7EDF\u97F3\u9891\uFF08macOS 14.2+\uFF09"),o.default.createElement("option",{value:"browser"},"\u865A\u62DF\u58F0\u5361 / \u9EA6\u514B\u98CE\uFF08BlackHole / VB-Cable\uFF09"))),o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u865A\u62DF\u58F0\u5361\u8BBE\u5907"),o.default.createElement("select",{value:ne,onChange:s=>{let d=s.target.value,w=ee.find(le=>le.deviceId===d)?.label||"";me(d),To({deviceId:d,deviceLabel:w})}},o.default.createElement("option",{value:""},"\u81EA\u52A8\u9009\u62E9\uFF08\u4F18\u5148\u865A\u62DF\u58F0\u5361\uFF09"),ee.map((s,d)=>o.default.createElement("option",{key:s.deviceId||d,value:s.deviceId},s.label||`\u97F3\u9891\u8F93\u5165 ${d+1}`))),o.default.createElement("button",{type:"button",className:"settings-btn is-mini",onClick:Et},"\u68C0\u6D4B\u8BBE\u5907")),V?o.default.createElement("p",{className:"settings-status"},V):null)),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u73AF\u5883\u68C0\u67E5\u4E0E\u4F9D\u8D56\u5B89\u88C5"),se?o.default.createElement(o.default.Fragment,null,o.default.createElement("p",{className:"setup-platform"},se.platform?.osLabel," \xB7 ",se.platform?.arch," \xB7 ",se.platform?.memoryGB,"GB \u5185\u5B58 \xB7 ",se.platform?.gpu," \xB7 \u63A8\u8350\uFF1A",se.engine?.label),o.default.createElement("ul",{className:"setup-components"},(se.components||[]).map(s=>o.default.createElement("li",{key:s.id,className:s.ready?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},s.label),o.default.createElement("span",{className:"setup-component-detail"},s.detail),!s.ready&&s.bytes?o.default.createElement("span",{className:"setup-component-size"},uo(s.bytes)):null))),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"field-row"},o.default.createElement("span",null,"\u4E0B\u8F7D\u7EBF\u8DEF"),o.default.createElement("select",{value:Qt,onChange:s=>Rt(s.target.value)},o.default.createElement("option",{value:"auto"},"\u81EA\u52A8\u6D4B\u901F"),o.default.createElement("option",{value:"intl"},"\u56FD\u9645\uFF08Hugging Face / GitHub\uFF09"),o.default.createElement("option",{value:"cn"},"\u56FD\u5185\u955C\u50CF\uFF08hf-mirror / ModelScope\uFF09")))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{type:"button",className:"settings-btn",disabled:It,onClick:()=>Ht("local")},It?"\u5B89\u88C5\u4E2D\u2026":"\u5B89\u88C5/\u8865\u9F50\u79BB\u7EBF\u6A21\u578B"),o.default.createElement("button",{type:"button",className:"settings-btn ghost",disabled:Ko,onClick:Mn},Ko?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u5B89\u88C5"),o.default.createElement("button",{type:"button",className:"settings-btn ghost",onClick:Jo},"\u590D\u5236\u8BCA\u65AD\u4FE1\u606F")),_o?o.default.createElement("ul",{className:"setup-components",style:{marginTop:10}},_o.checks.map(s=>o.default.createElement("li",{key:s.id,className:s.ok?"setup-component ready":"setup-component"},o.default.createElement("span",{className:"setup-dot"}),o.default.createElement("span",{className:"setup-component-label"},s.label),o.default.createElement("span",{className:"setup-component-detail"},s.detail)))):null):o.default.createElement("p",{className:"settings-empty"},"\u6B63\u5728\u626B\u63CF\u672C\u673A\u73AF\u5883\u2026")),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u5BFC\u5165\u7B56\u7565\u4E0E\u5B57\u5E55\u8BB0\u5F55"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:tt.mode==="copy",onChange:()=>Dn("copy")}),o.default.createElement("span",null,"\u62D6\u5165\u97F3\u9891\u65F6\u590D\u5236\u5230 ~/.podwave/imports/\uFF08\u5220\u6E90\u6587\u4EF6\u4E5F\u4E0D\u5F71\u54CD\uFF09")),o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"radio",name:"import-mode",checked:tt.mode==="reference",onChange:()=>Dn("reference")}),o.default.createElement("span",null,"\u539F\u5730\u5F15\u7528\uFF08\u4E0D\u590D\u5236\u6587\u4EF6\uFF09"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{type:"button",className:"settings-btn ghost",onClick:ln,disabled:Mt==="imports"||!tt.orphans},tt.orphans?`\u6E05\u7406 ${tt.orphans} \u4E2A\u5BFC\u5165\u526F\u672C\uFF08${(tt.orphanBytes/1048576).toFixed(1)} MB\uFF09`:"\u65E0\u672A\u5F15\u7528\u526F\u672C"),o.default.createElement("button",{type:"button",className:"settings-btn ghost",onClick:()=>Ie(`${q}/history/open`,"POST",{}).catch(()=>{}),disabled:!ft},"\u6253\u5F00\u5B57\u5E55\u6587\u4EF6\u5939\uFF08",Ho.length," \u96C6 \xB7 ",uo(Sn),"\uFF09"),ko>0?o.default.createElement("span",{className:"settings-status"},"\u542B ",ko," \u6761\u5B9E\u65F6\u5B57\u5E55"):null),Ho.length>0?o.default.createElement("ul",{className:"history-list",style:{marginTop:10}},Ho.slice(0,8).map(s=>o.default.createElement("li",{key:s.id,className:"history-row"},o.default.createElement("div",{className:"history-main"},o.default.createElement("span",{className:"history-title"},s.title),o.default.createElement("span",{className:"history-meta"},s.duration?`${os(s.duration)} \xB7 `:"",s.lines," \u884C",s.translations?.length?` \xB7 \u5DF2\u8BD1 ${s.translations.join("/")}`:"")),o.default.createElement("span",{className:"history-date"},ns(s.completedAt))))):null),o.default.createElement("div",{className:"adv-group"},o.default.createElement("h3",null,"\u754C\u9762\u4E0E\u7248\u672C"),o.default.createElement("div",{className:"settings-fields"},o.default.createElement("label",{className:"check-row"},o.default.createElement("input",{type:"checkbox",checked:$n.showSidebarPanel,onChange:s=>{let d=s.target.checked;ze({showSidebarPanel:d}),Mo({showSidebarPanel:d},"\u754C\u9762\u8BBE\u7F6E\u5DF2\u66F4\u65B0")}}),o.default.createElement("span",null,"\u5728 DSH \u4FA7\u8FB9\u680F\u663E\u793A\u300C\u64AD\u5BA2\u300D\u5165\u53E3"))),o.default.createElement("div",{className:"settings-actions"},o.default.createElement("button",{type:"button",className:"settings-btn ghost",onClick:Rn,disabled:Ft},Ft?"\u68C0\u67E5\u4E2D\u2026":"\u68C0\u67E5\u66F4\u65B0"),o.default.createElement("span",{className:"settings-status"},"\u5F53\u524D v",ot?.current||nn,ot?.updateAvailable&&ot?.latest?` \xB7 \u65B0\u7248\u672C v${ot.latest} \u53EF\u7528`:ot?.latest?" \xB7 \u5DF2\u662F\u6700\u65B0":"")))):null)))}function Ra({size:a=16}){return kt.default.createElement("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},kt.default.createElement("rect",{x:"1.5",y:"6",width:"1.8",height:"4",rx:"0.9",fill:"currentColor",opacity:"0.5"}),kt.default.createElement("rect",{x:"4.4",y:"3.6",width:"1.8",height:"8.8",rx:"0.9",fill:"currentColor",opacity:"0.75"}),kt.default.createElement("rect",{x:"7.3",y:"1.6",width:"1.8",height:"12.8",rx:"0.9",fill:"currentColor"}),kt.default.createElement("rect",{x:"10.2",y:"4.4",width:"1.8",height:"7.2",rx:"0.9",fill:"currentColor",opacity:"0.75"}),kt.default.createElement("rect",{x:"13.1",y:"6.6",width:"1.8",height:"2.8",rx:"0.9",fill:"currentColor",opacity:"0.5"}))}function is(){let a=Xa();return kt.default.createElement("div",{className:"podwave-root","data-pw-theme":a},kt.default.createElement("style",null,xn),kt.default.createElement(Zn,null))}function ls(a){a.slots.inject("main",()=>a.slots.register({name:"main",key:"podwave"},is)),a.slots.inject("settings.section",()=>a.slots.register({name:"settings.section",id:"podwave",order:40,label:()=>"\u64AD\u5BA2"},Gn));let i=null,r=!0,p=!1,v=!1,g="podwave-hide-nav",h=N=>{if(typeof document>"u")return;let C=document.getElementById(g);N&&!C?(C=document.createElement("style"),C.id=g,C.textContent='button[aria-label="\u64AD\u5BA2"]{display:none!important}',document.head.appendChild(C)):!N&&C&&C.remove()};a.slots.inject("sidebar.panellist",()=>{if(p=!0,!(!r||i))return i=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Ra),v=!0,()=>{i=null,v=!1}});let z=N=>{if(h(!N),r=N,N&&p&&!i)i=a.slots.register({name:"sidebar.panellist",id:"podwave",order:8,label:()=>"\u64AD\u5BA2"},Ra),v=!0;else if(!N&&i){let C=i;i=null;try{typeof C?.dispose=="function"?C.dispose():typeof C=="function"?C():typeof C?.dispose>"u"&&typeof C?.unregister=="function"&&C.unregister()}catch{}}};fetch("/podwave/api/ui-settings").then(N=>N.ok?N.json():null).then(N=>z(N?.showSidebarPanel!==!1)).catch(()=>z(!0)),typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("podwave:ui-settings",N=>{z(N?.detail?.showSidebarPanel!==!1)})}var ds=["slots"];

return module.exports}})
