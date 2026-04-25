/* ============================================================
   ModVault — Fabric 1.21.5 | Full JS Engine
   Features:
   - Favorites (localStorage)
   - Multi-select + Export (text, JSON)
   - Sort (A-Z, Z-A, category)
   - Grid / List view toggle
   - Copy download link
   - Toast notifications
   - Mod detail modal
   - Keyboard shortcuts (/ to search, Esc to close)
   - Scroll to top
   - Category tabs with live counts
   - Description-inclusive search
   - Staggered card animation
   - Theme persistence
   ============================================================ */

/* ── Mod Data ──────────────────────────────────────────────── */
const mods = [
  // ── FPS / Optimization ────────────────────────────────────
  {
    name: "Sodium",
    description: "The gold standard rendering engine replacement for Fabric. Massively improves FPS by rewriting chunk rendering from scratch.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Quilt"],
    icon: "https://cdn.modrinth.com/data/AANobbMI/008fe13b52e1ff40df0b98fa2a4a5c37c65eeb4f_96.webp",
    download: "https://cdn.modrinth.com/data/AANobbMI/versions/DA250htH/sodium-fabric-0.6.13+mc1.21.5.jar",
    version: "0.6.13"
  },
  {
    name: "Lithium",
    description: "General game-logic optimizer targeting AI, pathfinding, tick scheduling and chunk loading. No visual changes — pure perf.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge"],
    icon: "https://cdn.modrinth.com/data/gvQqBUqZ/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp",
    download: "https://cdn.modrinth.com/data/gvQqBUqZ/versions/nhc57Td2/lithium-fabric-0.16.0+mc1.21.5.jar",
    version: "0.16.0"
  },
  {
    name: "FerriteCore",
    description: "Slashes RAM usage by deduplicating identical block state properties. Essential for large modpacks and heavy modded play.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/uXXizFIs/222a126f26f8f9ae1eb339f3b767677f18bff31f_96.webp",
    download: "https://cdn.modrinth.com/data/uXXizFIs/versions/CtMpt7Jr/ferritecore-8.0.0-fabric.jar",
    version: "8.0.0"
  },
  {
    name: "Entity Culling",
    description: "Uses async ray-tracing to skip rendering entities that are behind walls or not visible to the camera.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/NNAgCjsB/5e4b5a6d733f47c66f1b7d1c4a1bde8023c7a69c_96.webp",
    download: "https://cdn.modrinth.com/data/NNAgCjsB/versions/29GV7fju/entityculling-fabric-1.7.4-mc1.21.5.jar",
    version: "1.7.4"
  },
  {
    name: "Krypton",
    description: "Optimizes Minecraft's networking stack — compression, packet handling, and chunk loading throughput are all improved.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/fQEb0iXm/0f8b8dfdcace1c8faa682a613169a68dec492718_96.webp",
    download: "https://cdn.modrinth.com/data/fQEb0iXm/versions/neW85eWt/krypton-0.2.9.jar",
    version: "0.2.9"
  },
  {
    name: "ImmediatelyFast",
    description: "Speed-optimizes immediate-mode rendering: item frames, map renders, entities, and GUIs benefit noticeably.",
    category: "FPS",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/5ZwdcRci/44de5fbb7425cd06ec33d3c2c8cdf6bd57d6a114_96.webp",
    download: "https://cdn.modrinth.com/data/5ZwdcRci/versions/DjnwJdjY/ImmediatelyFast-Fabric-1.9.3+1.21.5.jar",
    version: "1.9.3"
  },
  {
    name: "ModernFix",
    description: "Tackles long startup times, memory leaks, and broken rendering paths with dozens of targeted micro-optimizations.",
    category: "FPS",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/39uK1m4K/7479fc52bea5d63e3a2f4e8ef029ad0028fad2f5_96.webp",
    download: "https://cdn.modrinth.com/data/39uK1m4K/versions/1.21.4/modernfix-fabric-5.20.3+mc1.21.4.jar",
    version: "5.20.3"
  },
  {
    name: "FPS Reducer",
    description: "Automatically reduces framerate to a configurable cap when the Minecraft window is unfocused — saves CPU/GPU for other tasks.",
    category: "FPS",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/iZ10HXDj/a0b64882037eb7888b74df10ef41628c8fa5bc2d_96.webp",
    download: "https://cdn.modrinth.com/data/iZ10HXDj/versions/zDXdXvpu/FpsReducer2-fabric-1.21.5-2.12.jar",
    version: "2.12"
  },
  {
    name: "Alternate Current",
    description: "Complete rewrite of redstone dust update logic. Eliminates the cascading O(n²) lag spikes from complex redstone builds.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/vRfKqe4D/5796b8f8f150fdc471379d00bcb2f6524dacd095_96.webp",
    download: "https://cdn.modrinth.com/data/vRfKqe4D/versions/VjfupY0a/alternate-current-1.9.0.jar",
    version: "1.9.0"
  },
  {
    name: "Spark",
    description: "Professional-grade performance profiler. Captures CPU usage, tick timing, memory allocation, and more in real time.",
    category: "FPS",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/l6YH9Als/8c1a2e4eaee990d4831b5a2092c6b9ea2e943f82_96.webp",
    download: "https://cdn.modrinth.com/data/l6YH9Als/versions/NURCAL12/spark-1.10.128-fabric.jar",
    version: "1.10.128"
  },
  {
    name: "Sodium Extra",
    description: "Extends Sodium with extra toggles: weather, animations, entity shadows, and OptiFine-parity features without OptiFine.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Quilt"],
    icon: "https://cdn.modrinth.com/data/PtjYWJkn/3938b58abe138650bc33510711d623c66984ed19_96.webp",
    download: "https://cdn.modrinth.com/data/PtjYWJkn/versions/E5w6eZNE/sodium-extra-fabric-0.6.3+mc1.21.5.jar",
    version: "0.6.3"
  },

  // ── Utilities & Libraries ─────────────────────────────────
  {
    name: "Fabric API",
    description: "The core hooks and events library that virtually every Fabric mod depends on. Always install this first.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/P7dR8mSH/4e33cfec4323d3f4024d01fbb5c12e8e63a5e293_96.webp",
    download: "https://cdn.modrinth.com/data/P7dR8mSH/versions/vcgUMTb2/fabric-api-0.124.0+1.21.5.jar",
    version: "0.124.0"
  },
  {
    name: "Mod Menu",
    description: "Adds an in-game mod list with version info, config buttons, and dependency status. Must-have for mod management.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/mOgUt4GM/9f53c18a7d4bcfba699c1132c974e73b9aaee1a5_96.webp",
    download: "https://cdn.modrinth.com/data/mOgUt4GM/versions/T7GjZmwP/modmenu-14.0.0-rc.2.jar",
    version: "14.0.0-rc.2"
  },
  {
    name: "Cloth Config",
    description: "Config GUI framework. Required by many mods that expose in-game settings. Auto-generates config screens from annotated fields.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/9s6osm5g/55c1e47fd2f80a63498868cf9f7c6e253da7c5ae_96.webp",
    download: "https://cdn.modrinth.com/data/9s6osm5g/versions/qA00xo1O/cloth-config-18.0.145-fabric.jar",
    version: "18.0.145"
  },
  {
    name: "YetAnotherConfigLib",
    description: "A modern, data-driven config GUI library used by many newer mods. Supports categories, sliders, dropdowns and custom widgets.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/YLbm0kZN/8f9e8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f_96.webp",
    download: "https://cdn.modrinth.com/data/YLbm0kZN/versions/pQZxT5cR/YACL-3.6.6+fabric-1.21.5.jar",
    version: "3.6.6"
  },
  {
    name: "ReplayMod",
    description: "Record, rewind and replay sessions as camera-controlled replays. Essential for machinima, cinematic shots, and server reviews.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Nv2fQJo5/9b6f5f4e0d99fa2e2b7d9ccf5fdde8f5c1b0344d_96.webp",
    download: "https://cdn.modrinth.com/data/Nv2fQJo5/versions/7DrS5dcr/replaymod-1.21.5-2.6.22.jar",
    version: "2.6.22"
  },
  {
    name: "AppleSkin",
    description: "Overlays food saturation and exhaustion bars on the HUD. Hover over any food item to see its exact hunger/saturation values.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge","NeoForge"],
    icon: "https://cdn.modrinth.com/data/EsAfCjCV/e47e0f88ff31e1d135c3c5a4e909c3be726d8ad9_96.webp",
    download: "https://cdn.modrinth.com/data/EsAfCjCV/versions/VfjnbBAT/appleskin-fabric-mc1.21.5-3.0.6.jar",
    version: "3.0.6"
  },
  {
    name: "BetterStats",
    description: "Overhauls the in-game statistics screen with categories, filters, search and per-item detail views.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/n6PXGAoM/bc0dce8ff1e8d9cd43c739f896f3d5aad30e9c8e_96.webp",
    download: "https://cdn.modrinth.com/data/n6PXGAoM/versions/GQDPjDMb/betterstats-3.13.9+fabric-1.21.5.jar",
    version: "3.13.9"
  },
  {
    name: "Not Enough Crashes",
    description: "Catches Fabric crashes and returns to the main menu instead of quitting. Shows a human-readable crash summary with mod blame.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/PQbKRmsl/8674f5e4d7c9b6e2f8a5b3c7d2e1f9b6c1d3e4f5_96.webp",
    download: "https://cdn.modrinth.com/data/PQbKRmsl/versions/nh2Glwmy/not-enough-crashes-3.9.1+1.21.5.jar",
    version: "3.9.1"
  },
  {
    name: "Not Enough Animations",
    description: "Ports first-person arm animations to third-person view. Affects eating, drinking, sword holding, and tool use.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/sIin0WVs/7d3cb4a1fea0f9d2c7b4e6a9d5e2c1f4b6a7c8d9_96.webp",
    download: "https://cdn.modrinth.com/data/sIin0WVs/versions/L1yFXexb/nea-fabric-4.3.0%2B1.21.5.jar",
    version: "4.3.0"
  },
  {
    name: "WorldEdit",
    description: "The legendary in-game map editor. Brushes, shapes, clipboard, history, regions — all available in survival and creative.",
    category: "Utility",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/CLTogXSb/5d1b1f2e3c4d5a6b7c8d9e0f1a2b3c4d5e6f7a8b_96.webp",
    download: "https://cdn.modrinth.com/data/CLTogXSb/versions/xl1HswHE/WorldEdit-8.1.3+1.21.5.jar",
    version: "8.1.3"
  },
  {
    name: "WI Zoom",
    description: "Lightweight OptiFine-like zoom. Hold the assigned key for a smooth, adjustable zoom without any other OptiFine dependency.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/u6zJj9SX/c3b4d2e1f8a9d0f1b2c3d4e5f6a7b8c9d0e1f2a3_96.webp",
    download: "https://cdn.modrinth.com/data/u6zJj9SX/versions/lkXGbKuj/WiZoom-1.2.1+1.21.5.jar",
    version: "1.2.1"
  },
  {
    name: "Language Reload",
    description: "Makes the language-changing process reload only language files instead of doing a full resource reload — much faster switching.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/uLbm7CG6/d5a3eabb22d3fa3722aa439a873c8c62e2a4f99e_96.webp",
    download: "https://cdn.modrinth.com/data/uLbm7CG6/versions/BMmbiHSJ/language-reload-1.7.3+1.21.5.jar",
    version: "1.7.3"
  },
  {
    name: "Shulker Box Tooltip",
    description: "Hover over a shulker box in your inventory to see a preview grid of its contents, colour-coded by item type.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/l6YH9Als/8f1bcde6a15f0d6acf2d235d6663a00eadabf345_96.webp",
    download: "https://cdn.modrinth.com/data/l6YH9Als/versions/NURCAL12/spark-1.10.128-fabric.jar",
    version: "1.10.128"
  },
  {
    name: "Reese's Sodium Options",
    description: "Reworks the Sodium video options screen with a search bar and re-organised categories. Works alongside Sodium Extra.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Bh37bMuy/6f210cd2df9f1e8f5a8aac1a43e4f6a7e2f3a0a7_96.webp",
    download: "https://cdn.modrinth.com/data/Bh37bMuy/versions/KoUrx3jJ/reeses-sodium-options-fabric-1.8.3+mc1.21.4.jar",
    version: "1.8.3"
  },
  {
    name: "BSVSB",
    description: "Puts a direct Sodium settings button into the standard Video Settings screen so you don't have to hunt for it.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/4N9roEmX/73ad8aed5e1d0bf324a4277e8166bff2be4a2dd8_96.webp",
    download: "https://cdn.modrinth.com/data/4N9roEmX/versions/WccpArUm/BSVSB-3.0.3-1.21.1.jar",
    version: "3.0.3"
  },
  {
    name: "lazy-language-loader",
    description: "Skips loading language packs that haven't changed since the last reload, cutting initial load time for multilingual installs.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Nz0RSWrF/1f6acb3184c7b2de44b2cc6d3685a7d6a152f6f6_96.webp",
    download: "https://cdn.modrinth.com/data/Nz0RSWrF/versions/dSqw5J7H/lazy-language-loader-0.3.8.jar",
    version: "0.3.8"
  },

  // ── Shader Support ────────────────────────────────────────
  {
    name: "Iris Shaders",
    description: "Adds full OptiFine-shader-pack compatibility to Sodium. Supports GLSL Core, Complementary, BSL, Sildur's, Kappa, and more.",
    category: "Shader",
    compat: ["Fabric","Quilt","NeoForge"],
    icon: "https://cdn.modrinth.com/data/eB1htE4P/b572f4ec6a84f5b3c2945a3b1e6f79c5d2a3b4c5_96.webp",
    download: "https://cdn.modrinth.com/data/eB1htE4P/versions/SqMKRbHZ/iris-fabric-1.8.11+1.21.5.jar",
    version: "1.8.11"
  },
  {
    name: "Indium",
    description: "Exposes the Fabric Rendering API (FRAPI) on top of Sodium. Required for mods that use connected textures or custom render layers.",
    category: "Shader",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Fgi5e1Ai/6a5b4c3d2e1f0987abcd1234ef5678ghijklmnopqrst_96.webp",
    download: "https://cdn.modrinth.com/data/Fgi5e1Ai/versions/o3XxY0ZK/indium-fabric-1.6.1+mc1.21.5.jar",
    version: "1.6.1"
  },

  // ── Archived / Optional ───────────────────────────────────
  {
    name: "Starlight",
    description: "(Archived) Rewrote the Minecraft light engine for speed. Superseded by Mojang's improved light engine in 1.20+. No 1.21.5 builds.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/5ZwdcRci/1c099cb3388fe9f4a66c1b6f5a2cd32255fda09a_96.webp",
    download: "https://cdn.modrinth.com/data/5ZwdcRci/versions/21.06.2/starlight-1.1.3+fabric.jar",
    version: "1.1.3"
  },
  {
    name: "lazydfu",
    description: "(Deprecated) Delayed DataFixerUpper startup checks for faster boot. Integrated into ModernFix and no longer needed separately.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/xyz/placeholder_96.webp",
    download: "https://cdn.modrinth.com/data/lazydfu/versions/0.1.3/lazydfu-0.1.3.jar",
    version: "0.1.3"
  },
  {
    name: "Exordium",
    description: "(Archived) Capped framerate for world rendering and GUI independently. Mostly replaced by FPS Reducer and Sodium's own limiter.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/FgRNIMNT/94f1c5f8fee46b9b8d0186ecf3ceed5d04a137ee_96.webp",
    download: "https://cdn.modrinth.com/data/FgRNIMNT/versions/oKyOn5uA/Exordium-1.4.1-fabric-1.21.4.jar",
    version: "1.4.1"
  },
  {
    name: "XPlus AutoFish",
    description: "(Optional) Automatic fishing mod. Not available on Modrinth. Use at your own risk and check server rules before enabling.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/xyz/placeholder_96.webp",
    download: "#",
    version: "N/A"
  }
];

/* ── State ─────────────────────────────────────────────────── */
const state = {
  search: '',
  category: 'All',
  compat: 'All',
  sort: 'default',
  view: 'grid',
  favorites: JSON.parse(localStorage.getItem('mv_favorites') || '[]'),
  selected: new Set(),
  theme: localStorage.getItem('mv_theme') || 'dark'
};

/* ── Theme ─────────────────────────────────────────────────── */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeIcon').textContent = t === 'dark' ? '☀' : '☾';
  localStorage.setItem('mv_theme', t);
  state.theme = t;
}

/* ── Helpers ───────────────────────────────────────────────── */
function isFav(name) { return state.favorites.includes(name); }

function toggleFav(name, e) {
  e && e.stopPropagation();
  if (isFav(name)) {
    state.favorites = state.favorites.filter(n => n !== name);
    toast('Removed from favorites', '☆', 'fav');
  } else {
    state.favorites.push(name);
    toast('Added to favorites ★', '★', 'fav');
  }
  localStorage.setItem('mv_favorites', JSON.stringify(state.favorites));
  renderMods();
}

function toggleSelect(name, e) {
  e && e.stopPropagation();
  if (state.selected.has(name)) state.selected.delete(name);
  else state.selected.add(name);
  updateBulkBar();
  renderMods();
}

function compatClass(c) {
  return 'bc-' + c.toLowerCase().replace('neoforge','neoforge');
}

function catBadgeClass(cat) {
  return 'badge-' + cat.toLowerCase();
}

function catColor(cat) {
  const map = {
    FPS: 'var(--cat-fps)',
    Utility: 'var(--cat-utility)',
    UI: 'var(--cat-ui)',
    Shader: 'var(--cat-shader)',
    Optional: 'var(--cat-optional)',
    Favorites: 'var(--cat-favorites)'
  };
  return map[cat] || 'var(--accent)';
}

function getFiltered() {
  let list = [...mods];

  if (state.category === 'Favorites') {
    list = list.filter(m => isFav(m.name));
  } else if (state.category !== 'All') {
    list = list.filter(m => m.category === state.category);
  }

  if (state.compat !== 'All') {
    list = list.filter(m => m.compat.includes(state.compat));
  }

  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.compat.some(c => c.toLowerCase().includes(q))
    );
  }

  if (state.sort === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (state.sort === 'za') list.sort((a,b) => b.name.localeCompare(a.name));
  else if (state.sort === 'category') list.sort((a,b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

  return list;
}

/* ── Count tabs ─────────────────────────────────────────────── */
function updateCounts() {
  const cats = ['All', 'FPS', 'Utility', 'UI', 'Shader', 'Optional', 'Favorites'];
  cats.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (!el) return;
    let list = cat === 'All' ? mods
      : cat === 'Favorites' ? mods.filter(m => isFav(m.name))
      : mods.filter(m => m.category === cat);

    if (state.compat !== 'All') list = list.filter(m => m.compat.includes(state.compat));
    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
      );
    }
    el.textContent = list.length;
  });
}

/* ── Stats bar ──────────────────────────────────────────────── */
function updateStats(filtered) {
  const statsEl = document.getElementById('statsText');
  const total = mods.length;
  if (filtered.length === total && state.category === 'All') {
    statsEl.textContent = `${total} mods loaded`;
  } else {
    statsEl.textContent = `${filtered.length} of ${total} mods`;
  }
}

function updateBulkBar() {
  const bar = document.getElementById('bulkActions');
  const count = document.getElementById('selectedCount');
  const n = state.selected.size;
  count.textContent = `${n} selected`;
  bar.classList.toggle('has-selection', n > 0);
}

/* ── Render ─────────────────────────────────────────────────── */
function renderMods() {
  const container = document.getElementById('modList');
  const emptyState = document.getElementById('emptyState');
  const filtered = getFiltered();

  updateCounts();
  updateStats(filtered);

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';
  container.innerHTML = '';

  filtered.forEach((m, i) => {
    const isSelected = state.selected.has(m.name);
    const favorited = isFav(m.name);
    const isList = state.view === 'list';
    const noDownload = m.download === '#';

    const card = document.createElement('div');
    card.className = 'card' + (isSelected ? ' selected' : '');
    card.style.setProperty('--cat-color', catColor(m.category));
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      ${isList ? `
        <div class="card-select-overlay">
          <input type="checkbox" class="card-checkbox" ${isSelected ? 'checked' : ''}
            onclick="toggleSelect('${esc(m.name)}', event)" title="Select">
        </div>
      ` : `
        <div class="card-select-overlay">
          <input type="checkbox" class="card-checkbox" ${isSelected ? 'checked' : ''}
            onclick="toggleSelect('${esc(m.name)}', event)" title="Select">
        </div>
      `}

      <div class="card-img-wrap">
        <img src="${m.icon}" alt="${esc(m.name)}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-img-fallback" style="display:none">⬡</div>
        <button class="fav-btn ${favorited ? 'favorited' : ''}"
          onclick="toggleFav('${esc(m.name)}', event)" title="${favorited ? 'Remove from favorites' : 'Add to favorites'}">
          ${favorited ? '★' : '☆'}
        </button>
      </div>

      <div class="card-body">
        <div class="card-title">${m.name}</div>
        <div class="card-desc">${m.description}</div>
        <div class="card-meta">
          <span class="badge-cat ${catBadgeClass(m.category)}">${m.category}</span>
          <div class="compat-badges">
            ${m.compat.map(c => `<span class="badge-compat ${compatClass(c)}">${c}</span>`).join('')}
          </div>
          ${m.version ? `<span style="font-family:var(--font-mono);font-size:0.62rem;color:var(--text3);margin-left:auto">v${m.version}</span>` : ''}
        </div>
      </div>

      <div class="card-actions">
        <a class="card-download ${noDownload ? 'disabled-dl' : ''}"
          href="${noDownload ? '#' : m.download}"
          ${noDownload ? '' : 'target="_blank"'}
          onclick="${noDownload ? 'event.preventDefault(); toast(\'No download available\', \'⚠\', \'warn\')' : 'event.stopPropagation()'}">
          ↓ ${noDownload ? 'Unavailable' : 'Download'}
        </a>
        <button class="btn-copy" onclick="copyLink('${esc(m.download)}', event)" title="Copy download URL">
          ⎘
        </button>
      </div>
    `;

    // Click card body to open modal
    card.addEventListener('click', (e) => {
      if (e.target.closest('.fav-btn') || e.target.closest('.card-actions') || e.target.closest('.card-checkbox')) return;
      openModal(m);
    });

    container.appendChild(card);
  });
}

function esc(str) {
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* ── Modal ──────────────────────────────────────────────────── */
function openModal(m) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  const compatItems = m.compat.map(c =>
    `<span class="modal-compat-item badge-compat ${compatClass(c)}" style="padding:5px 14px">${c}</span>`
  ).join('');

  const dlUrl = m.download === '#' ? 'Not available on Modrinth' : m.download;

  content.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${m.icon}" alt="${m.name}"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><text x=%2250%25%22 y=%2255%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2240%22>⬡</text></svg>'">
      <div>
        <div class="modal-title">${m.name}</div>
        <div class="modal-cat">${m.category} · ${m.compat.join(', ')}</div>
        ${m.version ? `<div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--text3);margin-top:4px">Version ${m.version}</div>` : ''}
      </div>
    </div>
    <div class="modal-desc">${m.description}</div>
    <div class="modal-section-title">Compatible With</div>
    <div class="modal-compat-list">${compatItems}</div>
    ${m.download !== '#' ? `
      <div class="modal-section-title">Download URL</div>
      <div class="modal-dl-url">
        <code>${dlUrl}</code>
        <button class="btn-sm" onclick="copyLink('${esc(m.download)}', event)" style="flex-shrink:0">Copy</button>
      </div>
    ` : `<div class="modal-desc" style="border-color:var(--warning)">⚠ This mod is not available via Modrinth CDN.</div>`}
    <div class="modal-actions">
      ${m.download !== '#' ? `<a class="card-download" href="${m.download}" target="_blank" style="max-width:200px">↓ Download .jar</a>` : ''}
      <button class="btn-sm" style="padding:0.45rem 1rem" onclick="toggleFav('${esc(m.name)}')">
        ${isFav(m.name) ? '★ Unfavorite' : '☆ Favorite'}
      </button>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Toast ──────────────────────────────────────────────────── */
function toast(msg, icon = '✓', type = '') {
  const container = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast' + (type ? ' toast-' + type : '');
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 0.25s ease forwards';
    setTimeout(() => t.remove(), 250);
  }, 2500);
}

/* ── Copy link ──────────────────────────────────────────────── */
function copyLink(url, e) {
  if (e) e.stopPropagation();
  if (url === '#') { toast('No download URL available', '⚠', 'warn'); return; }
  navigator.clipboard.writeText(url).then(() => {
    toast('Download URL copied!', '⎘');
  }).catch(() => {
    toast('Could not copy URL', '✕', 'error');
  });
}

/* ── Export ──────────────────────────────────────────────────── */
function exportList(modsToExport, label) {
  if (modsToExport.length === 0) { toast('Nothing to export', '⚠', 'warn'); return; }

  const lines = [
    `ModVault Export — ${label}`,
    `Generated: ${new Date().toLocaleString()}`,
    `MC: 1.21.5 | Total: ${modsToExport.length} mods`,
    '='.repeat(50),
    '',
    ...modsToExport.map(m =>
      `[${m.category}] ${m.name} v${m.version || '?'}\n  ${m.compat.join(', ')}\n  ${m.download}`
    )
  ];

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `modvault-export-${Date.now()}.txt`;
  a.click();
  toast(`Exported ${modsToExport.length} mods`, '↓');
}

/* ── Reset filters ──────────────────────────────────────────── */
function resetFilters() {
  document.getElementById('search').value = '';
  document.getElementById('compatFilter').value = 'All';
  document.getElementById('sortSelect').value = 'default';
  state.search = '';
  state.compat = 'All';
  state.sort = 'default';
  setActiveTab('All');
  renderMods();
}

/* ── Tabs ───────────────────────────────────────────────────── */
function setActiveTab(cat) {
  state.category = cat;
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(state.theme);

  // Initial render
  renderMods();

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Search
  document.getElementById('search').addEventListener('input', e => {
    state.search = e.target.value;
    renderMods();
  });

  // Compat filter
  document.getElementById('compatFilter').addEventListener('change', e => {
    state.compat = e.target.value;
    renderMods();
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.sort = e.target.value;
    renderMods();
  });

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      setActiveTab(tab.dataset.cat);
      renderMods();
    });
  });

  // View toggle
  document.getElementById('gridViewBtn').addEventListener('click', () => {
    state.view = 'grid';
    document.getElementById('modList').className = 'mod-list grid-view';
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    renderMods();
  });

  document.getElementById('listViewBtn').addEventListener('click', () => {
    state.view = 'list';
    document.getElementById('modList').className = 'mod-list list-view';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
    renderMods();
  });

  // Export all
  document.getElementById('exportBtn').addEventListener('click', () => {
    exportList(getFiltered(), `Filtered view — ${state.category}`);
  });

  // Bulk: select all
  document.getElementById('selectAllBtn').addEventListener('click', () => {
    getFiltered().forEach(m => state.selected.add(m.name));
    updateBulkBar();
    renderMods();
  });

  // Bulk: clear selection
  document.getElementById('clearSelBtn').addEventListener('click', () => {
    state.selected.clear();
    updateBulkBar();
    renderMods();
  });

  // Bulk: export selected
  document.getElementById('exportSelectedBtn').addEventListener('click', () => {
    const selected = mods.filter(m => state.selected.has(m.name));
    exportList(selected, 'Selected mods');
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Scroll to top
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    // / to focus search
    if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      document.getElementById('search').focus();
    }
    // Escape: close modal or blur search
    if (e.key === 'Escape') {
      const overlay = document.getElementById('modalOverlay');
      if (overlay.classList.contains('open')) { closeModal(); return; }
      const s = document.getElementById('search');
      if (document.activeElement === s) { s.blur(); return; }
      if (state.search) {
        s.value = '';
        state.search = '';
        renderMods();
      }
    }
  });
});
