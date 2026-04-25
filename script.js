/* ============================================================
   ModVault — Fabric 1.21.5 | Full Redesign CSS
   ============================================================ */

/* ── Variables ─────────────────────────────────────────────── */
:root {
  /* Dark theme (default) */
  --bg: #080b12;
  --bg2: #0e1320;
  --bg3: #141926;
  --surface: #141926;
  --surface2: #1c2236;
  --surface3: #232d44;
  --border: rgba(0, 229, 160, 0.12);
  --border2: rgba(255,255,255,0.06);
  --accent: #00e5a0;
  --accent2: #00b87a;
  --accent-dim: rgba(0, 229, 160, 0.12);
  --accent-glow: rgba(0, 229, 160, 0.25);
  --text: #e8eaf0;
  --text2: #9ba3b8;
  --text3: #5c6479;
  --danger: #ff4757;
  --warning: #ffa502;
  --info: #5352ed;
  --purple: #9c88ff;
  --orange: #ff6348;
  --red: #ff4757;
  --green: #2ed573;

  /* Compat badge colors */
  --compat-fabric: #2ed573;
  --compat-quilt: #9c88ff;
  --compat-forge: #ff6348;
  --compat-neoforge: #ffa502;

  /* Category badge colors */
  --cat-fps: #00e5a0;
  --cat-utility: #5352ed;
  --cat-ui: #ff6b9d;
  --cat-shader: #ffd32a;
  --cat-optional: #5c6479;
  --cat-favorites: #ffd32a;

  --radius: 10px;
  --radius-sm: 6px;
  --transition: 0.2s ease;
  --font-main: 'Oxanium', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

[data-theme="light"] {
  --bg: #f0f2f8;
  --bg2: #e4e8f4;
  --bg3: #d8dded;
  --surface: #ffffff;
  --surface2: #f4f6fc;
  --surface3: #eaecf8;
  --border: rgba(0, 160, 110, 0.15);
  --border2: rgba(0,0,0,0.07);
  --accent: #00a06e;
  --accent2: #007d54;
  --accent-dim: rgba(0, 160, 110, 0.1);
  --accent-glow: rgba(0, 160, 110, 0.2);
  --text: #1a1f2e;
  --text2: #4a5168;
  --text3: #9ba3b8;
  --compat-fabric: #00a06e;
  --compat-quilt: #6c5ce7;
  --compat-forge: #d63031;
  --compat-neoforge: #e67e22;
}

/* ── Reset ──────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }

body {
  font-family: var(--font-main);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  transition: background var(--transition), color var(--transition);
}

/* ── Background Effects ─────────────────────────────────────── */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--border2) 1px, transparent 1px),
    linear-gradient(90deg, var(--border2) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  pointer-events: none;
}

.bg-glow {
  position: fixed;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
  filter: blur(40px);
  animation: glowPulse 8s ease-in-out infinite alternate;
}

@keyframes glowPulse {
  from { opacity: 0.5; transform: translateX(-50%) scale(1); }
  to   { opacity: 1;   transform: translateX(-50%) scale(1.1); }
}

/* ── Header ─────────────────────────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 11, 18, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 0 1.5rem;
}

[data-theme="light"] .site-header {
  background: rgba(240, 242, 248, 0.85);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 0.75rem;
  gap: 1rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 2rem;
  color: var(--accent);
  line-height: 1;
  filter: drop-shadow(0 0 8px var(--accent-glow));
  animation: spin6 12s linear infinite;
}

@keyframes spin6 {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: 0.05em;
}

.logo-sub {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 2px;
}

.version-pill {
  background: var(--accent-dim);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 20px;
  letter-spacing: 0.1em;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ── Buttons ─────────────────────────────────────────────────── */
.btn-icon {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text2);
  font-family: var(--font-main);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.03em;
}

.btn-icon:hover {
  background: var(--surface3);
  border-color: var(--accent);
  color: var(--accent);
}

.btn-sm {
  background: var(--surface3);
  border: 1px solid var(--border2);
  color: var(--text2);
  font-family: var(--font-main);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition);
}

.btn-sm:hover { border-color: var(--accent); color: var(--accent); }
.btn-danger:hover { border-color: var(--danger) !important; color: var(--danger) !important; }
.btn-accent {
  background: var(--accent);
  border: 1px solid var(--accent);
  color: #000;
  font-family: var(--font-main);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.04em;
}

.btn-accent:hover {
  background: var(--accent2);
  border-color: var(--accent2);
  box-shadow: 0 0 20px var(--accent-glow);
}

/* ── Controls Row ───────────────────────────────────────────── */
.controls-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  flex-wrap: wrap;
}

.search-wrap {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text3);
  font-size: 1.1rem;
  pointer-events: none;
}

#search {
  width: 100%;
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text);
  font-family: var(--font-main);
  font-size: 0.9rem;
  padding: 0.55rem 2.8rem 0.55rem 2.2rem;
  border-radius: var(--radius-sm);
  outline: none;
  transition: all var(--transition);
}

#search:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
  background: var(--surface3);
}

#search::placeholder { color: var(--text3); }

.search-kbd {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--surface3);
  border: 1px solid var(--border2);
  color: var(--text3);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 1px 5px;
  border-radius: 3px;
  pointer-events: none;
}

#search:focus + .search-kbd { display: none; }

.control-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

select {
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text);
  font-family: var(--font-main);
  font-size: 0.82rem;
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
  outline: none;
  cursor: pointer;
  transition: all var(--transition);
  min-width: 130px;
}

select:hover, select:focus {
  border-color: var(--accent);
}

.view-toggle {
  display: flex;
  background: var(--surface2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.view-btn {
  background: none;
  border: none;
  color: var(--text3);
  font-size: 1rem;
  padding: 0.45rem 0.7rem;
  cursor: pointer;
  transition: all var(--transition);
  line-height: 1;
}

.view-btn:hover { color: var(--text); }
.view-btn.active { background: var(--accent-dim); color: var(--accent); }

/* ── Category Tabs ───────────────────────────────────────────── */
.cat-tabs-wrap {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: 0 -1.5rem;
  padding: 0 1.5rem;
}

.cat-tabs-wrap::-webkit-scrollbar { display: none; }

.cat-tabs {
  display: flex;
  gap: 0.25rem;
  padding-bottom: 0.5rem;
  white-space: nowrap;
}

.cat-tab {
  background: none;
  border: 1px solid transparent;
  color: var(--text3);
  font-family: var(--font-main);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all var(--transition);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
  letter-spacing: 0.03em;
}

.cat-tab:hover {
  border-color: var(--border);
  color: var(--text);
  background: var(--surface2);
}

.cat-tab.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
}

.fav-tab.active { background: rgba(255,211,42,0.12); border-color: #ffd32a; color: #ffd32a; }
.optional-tab.active { background: var(--surface2); border-color: var(--text3); color: var(--text2); }

.tab-count {
  background: var(--surface3);
  color: var(--text3);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 1px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  transition: all var(--transition);
}

.cat-tab.active .tab-count {
  background: var(--accent-dim);
  color: var(--accent);
}

/* ── Stats Bar ───────────────────────────────────────────────── */
.stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text3);
  gap: 0.75rem;
  flex-wrap: wrap;
}

.bulk-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity var(--transition);
}

.bulk-actions.has-selection { opacity: 1; }

#selectedCount {
  color: var(--accent);
  font-size: 0.72rem;
}

/* ── Mod Grid / List ─────────────────────────────────────────── */
.main-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  min-height: calc(100vh - 250px);
}

/* Grid View */
.mod-list.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

/* List View */
.mod-list.list-view {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ── Cards ───────────────────────────────────────────────────── */
@keyframes cardIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  animation: cardIn 0.35s ease both;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 8px 32px rgba(0, 229, 160, 0.12), 0 0 0 1px var(--accent);
}

.card.selected {
  border-color: var(--accent);
  background: var(--surface2);
  box-shadow: 0 0 0 2px var(--accent);
}

/* Card top accent line by category */
.card::before {
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  background: var(--cat-color, var(--accent));
  opacity: 0.6;
  flex-shrink: 0;
}

/* Card image */
.card-img-wrap {
  position: relative;
  height: 80px;
  background: var(--surface2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

.card-img-wrap img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  image-rendering: pixelated;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
  transition: transform 0.25s ease;
}

.card:hover .card-img-wrap img {
  transform: scale(1.08);
}

/* Favicon-style fallback */
.card-img-fallback {
  width: 60px;
  height: 60px;
  background: var(--surface3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--accent);
}

/* Favorite button on card */
.fav-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  background: var(--surface);
  border: 1px solid var(--border2);
  color: var(--text3);
  font-size: 0.9rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  z-index: 2;
  line-height: 1;
}

.fav-btn:hover { color: #ffd32a; border-color: #ffd32a; }
.fav-btn.favorited { color: #ffd32a; border-color: #ffd32a; background: rgba(255,211,42,0.12); }

/* Select checkbox overlay */
.card-select-overlay {
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 2;
}

.card-checkbox {
  width: 18px;
  height: 18px;
  accent-color: var(--accent);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--transition);
}

.card:hover .card-checkbox,
.card.selected .card-checkbox {
  opacity: 1;
}

/* Card body */
.card-body {
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.02em;
  line-height: 1.2;
}

.card-desc {
  font-size: 0.78rem;
  color: var(--text2);
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  margin-top: 0.15rem;
}

/* Category badge */
.badge-cat {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-fps    { background: rgba(0,229,160,0.12); color: var(--accent); border: 1px solid rgba(0,229,160,0.3); }
.badge-utility { background: rgba(83,82,237,0.12); color: #9190ff; border: 1px solid rgba(83,82,237,0.3); }
.badge-ui     { background: rgba(255,107,157,0.12); color: #ff6b9d; border: 1px solid rgba(255,107,157,0.3); }
.badge-shader { background: rgba(255,211,42,0.12); color: #ffd32a; border: 1px solid rgba(255,211,42,0.3); }
.badge-optional { background: rgba(92,100,121,0.15); color: var(--text3); border: 1px solid rgba(92,100,121,0.3); }
.badge-fav    { background: rgba(255,211,42,0.15); color: #ffd32a; border: 1px solid rgba(255,211,42,0.3); }

/* Compat badges */
.compat-badges { display: flex; gap: 3px; flex-wrap: wrap; }

.badge-compat {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 500;
}

.bc-fabric  { background: rgba(46,213,115,0.15); color: var(--compat-fabric); }
.bc-quilt   { background: rgba(156,136,255,0.15); color: var(--compat-quilt); }
.bc-forge   { background: rgba(255,99,72,0.15); color: var(--compat-forge); }
.bc-neoforge { background: rgba(255,165,2,0.15); color: var(--compat-neoforge); }

/* Card actions */
.card-actions {
  display: flex;
  gap: 0.4rem;
  padding: 0 0.9rem 0.9rem;
}

.card-download {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  text-decoration: none;
  background: var(--accent);
  color: #000;
  font-family: var(--font-main);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.45rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  letter-spacing: 0.04em;
}

.card-download:hover {
  background: var(--accent2);
  box-shadow: 0 0 16px var(--accent-glow);
}

.card-download.disabled-dl {
  background: var(--surface3);
  color: var(--text3);
  cursor: not-allowed;
  pointer-events: none;
}

.btn-copy {
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text2);
  font-size: 0.85rem;
  width: 34px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  flex-shrink: 0;
}

.btn-copy:hover { border-color: var(--accent); color: var(--accent); }

/* ── List View Card Override ─────────────────────────────────── */
.list-view .card {
  flex-direction: row;
  align-items: center;
}

.list-view .card::before {
  width: 3px;
  height: auto;
  align-self: stretch;
  flex-shrink: 0;
}

.list-view .card-img-wrap {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 0;
}

.list-view .card-img-wrap img {
  width: 44px;
  height: 44px;
}

.list-view .card-body {
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  padding: 0.75rem;
}

.list-view .card-title { min-width: 140px; }
.list-view .card-desc  { flex: 1; -webkit-line-clamp: 1; }
.list-view .card-meta  { margin: 0; }

.list-view .card-actions {
  padding: 0 0.75rem 0 0;
  gap: 0.35rem;
}

.list-view .fav-btn {
  position: static;
}

.list-view .card-select-overlay {
  position: static;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}

.list-view .card-checkbox { opacity: 1; }

/* ── Empty State ─────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 5rem 2rem;
  animation: cardIn 0.35s ease;
}

.empty-icon {
  font-size: 4rem;
  color: var(--text3);
  display: block;
  margin-bottom: 1rem;
  filter: grayscale(1);
  opacity: 0.4;
}

.empty-state h3 {
  font-size: 1.3rem;
  color: var(--text2);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.empty-state p {
  color: var(--text3);
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

/* ── Toast Notifications ─────────────────────────────────────── */
.toast-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: none;
}

.toast {
  background: var(--surface2);
  border: 1px solid var(--accent);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  animation: toastIn 0.25s ease;
  pointer-events: auto;
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toast.toast-error { border-color: var(--danger); }
.toast.toast-warn  { border-color: var(--warning); }
.toast.toast-fav   { border-color: #ffd32a; }

.toast-icon { font-size: 1rem; flex-shrink: 0; }

@keyframes toastIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes toastOut {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(20px); }
}

/* ── Modal ───────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-overlay.open { display: flex; }

.modal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  max-width: 540px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: cardIn 0.25s ease;
  box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--accent);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text2);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover { border-color: var(--danger); color: var(--danger); }

.modal-content { padding: 2rem; }

.modal-img-wrap {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.modal-img-wrap img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 12px;
  background: var(--surface2);
  padding: 8px;
  image-rendering: pixelated;
}

.modal-title { font-size: 1.6rem; font-weight: 800; margin-bottom: 0.3rem; }
.modal-cat   { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); }

.modal-desc {
  color: var(--text2);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: var(--surface2);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--accent);
}

.modal-section-title {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--text3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.modal-compat-list {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.modal-compat-item {
  padding: 4px 12px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
}

.modal-dl-url {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--surface2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  margin-bottom: 1.25rem;
  overflow: hidden;
}

.modal-dl-url code {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text3);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
}

/* ── Scroll to top ───────────────────────────────────────────── */
.scroll-top {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background: var(--surface2);
  border: 1px solid var(--accent);
  color: var(--accent);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

.scroll-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.scroll-top:hover {
  background: var(--accent);
  color: #000;
  box-shadow: 0 0 20px var(--accent-glow);
}

/* ── Footer ──────────────────────────────────────────────────── */
.site-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text3);
  border-top: 1px solid var(--border2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.site-footer kbd {
  background: var(--surface2);
  border: 1px solid var(--border2);
  padding: 1px 5px;
  border-radius: 3px;
}

/* ── Keyboard shortcuts hint ─────────────────────────────────── */
kbd {
  font-family: var(--font-mono);
  font-size: 0.7em;
}

/* ── Scrollbar ───────────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--surface3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 768px) {
  .site-header { padding: 0 1rem; }
  .main-content { padding: 1rem; }
  .logo-title { font-size: 1.1rem; }
  .version-pill { display: none; }
  #exportBtn span { display: none; }

  .list-view .card-body { flex-wrap: wrap; }
  .list-view .card-desc { width: 100%; -webkit-line-clamp: 1; }
  .list-view .card-title { min-width: unset; }

  .mod-list.grid-view {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .site-footer { justify-content: center; }
  .site-footer span:last-child { display: none; }
}

@media (max-width: 480px) {
  .controls-row { flex-direction: column; align-items: stretch; }
  .control-group { justify-content: space-between; }
  .mod-list.grid-view { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
  .card-img-wrap { height: 60px; }
  .card-img-wrap img { width: 44px; height: 44px; }
}
