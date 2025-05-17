const mods = [
  // FPS / Optimization
  {
    name: "FerriteCore",
    description: "Memory-use optimizer, reduces RAM footprint.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/uXXizFIs/222a126f26f8f9ae1eb339f3b767677f18bff31f_96.webp",
    download: "https://cdn.modrinth.com/data/uXXizFIs/versions/CtMpt7Jr/ferritecore-8.0.0-fabric.jar"
  },
  {
    name: "FPS Reducer",
    description: "Drops framerate when unfocused to save CPU/GPU.",
    category: "FPS",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/iZ10HXDj/a0b64882037eb7888b74df10ef41628c8fa5bc2d_96.webp",
    download: "https://cdn.modrinth.com/data/iZ10HXDj/versions/zDXdXvpu/FpsReducer2-fabric-1.21.5-2.12.jar"
  },
  {
    name: "ImmediatelyFast",
    description: "Tweaks GUI/tick behavior for snappier menus.",
    category: "FPS",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/5ZwdcRci/44de5fbb7425cd06ec33d3c2c8cdf6bd57d6a114_96.webp",
    download: "https://cdn.modrinth.com/data/5ZwdcRci/versions/DjnwJdjY/ImmediatelyFast-Fabric-1.9.3+1.21.5.jar"
  },
  {
    name: "Krypton",
    description: "Network compression for faster chunk loading.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/fQEb0iXm/0f8b8dfdcace1c8faa682a613169a68dec492718_96.webp",
    download: "https://cdn.modrinth.com/data/fQEb0iXm/versions/neW85eWt/krypton-0.2.9.jar"
  },
  {
    name: "Lithium",
    description: "General game-logic optimizer (ticks, AI, etc.).",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge"],
    icon: "https://cdn.modrinth.com/data/gvQqBUqZ/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp",
    download: "https://cdn.modrinth.com/data/gvQqBUqZ/versions/nhc57Td2/lithium-fabric-0.16.0+mc1.21.5.jar"
  },
  {
    name: "ModernFix",
    description: "Rendering fixes and micro-optimizations.",
    category: "FPS",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/39uK1m4K/7479fc52bea5d63e3a2f4e8ef029ad0028fad2f5_96.webp",
    download: "https://cdn.modrinth.com/data/39uK1m4K/versions/1.21.4/modernfix-fabric-5.20.3+mc1.21.4.jar"
  },
  {
    name: "Alternate Current",
    description: "Optimizes redstone dust updates for less lag.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/vRfKqe4D/5796b8f8f150fdc471379d00bcb2f6524dacd095_96.webp",
    download: "https://cdn.modrinth.com/data/vRfKqe4D/versions/VjfupY0a/alternate-current-1.9.0.jar"
  },
  {
    name: "Entity Culling",
    description: "Skips rendering of off-screen entities.",
    category: "FPS",
    compat: ["Fabric","Quilt","NeoForge","Forge"],
    icon: "https://cdn.modrinth.com/data/NNAgCjsB/5e4b5a6d733f47c66f1b7d1c4a1bde8023c7a69c_96.webp",
    download: "https://cdn.modrinth.com/data/NNAgCjsB/versions/29GV7fju/entityculling-fabric-1.7.4-mc1.21.5.jar"
  },
  {
    name: "Exordium",
    description: "World-and-GUI FPS capping tweaks (archived).",
    category: "FPS",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/FgRNIMNT/94f1c5f8fee46b9b8d0186ecf3ceed5d04a137ee_96.webp",
    download: "https://cdn.modrinth.com/data/FgRNIMNT/versions/oKyOn5uA/Exordium-1.4.1-fabric-1.21.4.jar"
  },
  {
    name: "Sodium",
    description: "High-performance rendering optimization.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Quilt"],
    icon: "https://cdn.modrinth.com/data/AANobbMI/008fe13b52e1ff40df0b98fa2a4a5c37c65eeb4f_96.webp",
    download: "https://cdn.modrinth.com/data/AANobbMI/versions/DA250htH/sodium-fabric-0.6.13+mc1.21.5.jar"
  },
  {
    name: "Sodium Extra",
    description: "Adds OptiFine‑like features to Sodium.",
    category: "FPS",
    compat: ["Fabric","NeoForge","Quilt"],
    icon: "https://cdn.modrinth.com/data/PtjYWJkn/3938b58abe138650bc33510711d623c66984ed19_96.webp",
    download: "https://cdn.modrinth.com/data/PtjYWJkn/versions/E5w6eZNE/sodium-extra-fabric-0.6.3+mc1.21.5.jar"
  },
  {
    name: "Spark",
    description: "Client/server performance profiler.",
    category: "FPS",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/l6YH9Als/8c1a2e4eaee990d4831b5a2092c6b9ea2e943f82_96.webp",
    download: "https://cdn.modrinth.com/data/l6YH9Als/versions/NURCAL12/spark-1.10.128-fabric.jar"
  },
  {
    name: "Starlight",
    description: "Rewritten light engine (archived).",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/5ZwdcRci/1c099cb3388fe9f4a66c1b6f5a2cd32255fda09a_96.webp",
    download: "https://cdn.modrinth.com/data/5ZwdcRci/versions/21.06.2/starlight-1.1.3+fabric.jar"
  },

  // Utilities & Libraries
  {
    name: "AppleSkin",
    description: "Shows saturation & exhaustion on food tooltips.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge","NeoForge"],
    icon: "https://cdn.modrinth.com/data/EsAfCjCV/e47e0f88ff31e1d135c3c5a4e909c3be726d8ad9_96.webp",
    download: "https://cdn.modrinth.com/data/EsAfCjCV/versions/VfjnbBAT/appleskin-fabric-mc1.21.5-3.0.6.jar"
  },
  {
    name: "BetterStats",
    description: "Enhanced statistics screen layout & filters.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/n6PXGAoM/bc0dce8ff1e8d9cd43c739f896f3d5aad30e9c8e_96.webp",
    download: "https://cdn.modrinth.com/data/n6PXGAoM/versions/GQDPjDMb/betterstats-3.13.9+fabric-1.21.5.jar"
  },
  {
    name: "BSVSB",
    description: "Better Sodium Settings Button in video options.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/4N9roEmX/73ad8aed5e1d0bf324a4277e8166bff2be4a2dd8_96.webp",
    download: "https://cdn.modrinth.com/data/4N9roEmX/versions/WccpArUm/BSVSB-3.0.3-1.21.1.jar"
  },
  {
    name: "Cloth Config",
    description: "In‑game configuration GUI library.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/9s6osm5g/55c1e47fd2f80a63498868cf9f7c6e253da7c5ae_96.webp",
    download: "https://cdn.modrinth.com/data/9s6osm5g/versions/qA00xo1O/cloth-config-18.0.145-fabric.jar"
  },
  {
    name: "Fabric API",
    description: "Core library for Fabric mods.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/P7dR8mSH/4e33cfec4323d3f4024d01fbb5c12e8e63a5e293_96.webp",
    download: "https://cdn.modrinth.com/data/P7dR8mSH/versions/vcgUMTb2/fabric-api-0.124.0+1.21.5.jar"
  },
  {
    name: "Language Reload",
    description: "Reload only language files when changing lang.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/uLbm7CG6/d5a3eabb22d3fa3722aa439a873c8c62e2a4f99e_96.webp",
    download: "https://cdn.modrinth.com/data/uLbm7CG6/versions/BMmbiHSJ/language-reload-1.7.3+1.21.5.jar"
  },
  {
    name: "lazy-language-loader",
    description: "Skips unchanged languages on reload to speed up.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Nz0RSWrF/1f6acb3184c7b2de44b2cc6d3685a7d6a152f6f6_96.webp",
    download: "https://cdn.modrinth.com/data/Nz0RSWrF/versions/dSqw5J7H/lazy-language-loader-0.3.8.jar"
  },
  {
    name: "Mod Menu",
    description: "In‑game list of installed mods & quick config access.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/mOgUt4GM/9f53c18a7d4bcfba699c1132c974e73b9aaee1a5_96.webp",
    download: "https://cdn.modrinth.com/data/mOgUt4GM/versions/T7GjZmwP/modmenu-14.0.0-rc.2.jar"
  },
  {
    name: "Reese’s Sodium Options",
    description: "Searchable Sodium settings menu.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Bh37bMuy/6f210cd2df9f1e8f5a8aac1a43e4f6a7e2f3a0a7_96.webp",
    download: "https://cdn.modrinth.com/data/Bh37bMuy/versions/KoUrx3jJ/reeses-sodium-options-fabric-1.8.3+mc1.21.4.jar"
  },
  {
    name: "ReplayMod",
    description: "In‑game recording & replay tool.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Nv2fQJo5/9b6f5f4e0d99fa2e2b7d9ccf5fdde8f5c1b0344d_96.webp",
    download: "https://cdn.modrinth.com/data/Nv2fQJo5/versions/7DrS5dcr/replaymod-1.21.5-2.6.22.jar"
  },
  {
    name: "Shulker Box Tooltip",
    description: "Preview shulker box contents in tooltip.",
    category: "Utility",
    compat: ["Fabric","Quilt","Forge"],
    icon: "https://cdn.modrinth.com/data/l6YH9Als/8f1bcde6a15f0d6acf2d235d6663a00eadabf345_96.webp",
    download: "https://cdn.modrinth.com/data/l6YH9Als/versions/NURCAL12/spark-1.10.128-fabric.jar"
  },
  {
    name: "Not Enough Crashes",
    description: "Enhanced crash reports & title‑screen return.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/PQbKRmsl/8674f5e4d7c9b6e2f8a5b3c7d2e1f9b6c1d3e4f5_96.webp",
    download: "https://cdn.modrinth.com/data/PQbKRmsl/versions/nh2Glwmy/not-enough-crashes-3.9.1+1.21.5.jar"
  },
  {
    name: "Not Enough Animations",
    description: "Improves first‑person animations in third‑person.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/sIin0WVs/7d3cb4a1fea0f9d2c7b4e6a9d5e2c1f4b6a7c8d9_96.webp",
    download: "https://cdn.modrinth.com/data/sIin0WVs/versions/L1yFXexb/nea-fabric-4.3.0%2B1.21.5.jar"
  },
  {
    name: "WI Zoom",
    description: "Hold zoom key for a closer look.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/u6zJj9SX/c3b4d2e1f8a9d0f1b2c3d4e5f6a7b8c9d0e1f2a3_96.webp",
    download: "https://cdn.modrinth.com/data/u6zJj9SX/versions/lkXGbKuj/WiZoom-1.2.1+1.21.5.jar"
  },
  {
    name: "WorldEdit",
    description: "Powerful in‑game world editing toolset.",
    category: "Utility",
    compat: ["Fabric","NeoForge"],
    icon: "https://cdn.modrinth.com/data/CLTogXSb/5d1b1f2e3c4d5a6b7c8d9e0f1a2b3c4d5e6f7a8b_96.webp",
    download: "https://cdn.modrinth.com/data/CLTogXSb/versions/xl1HswHE/WorldEdit-8.1.3+1.21.5.jar"
  },
  {
    name: "YetAnotherConfigLib",
    description: "Advanced, data‑driven config GUI library.",
    category: "Utility",
    compat: ["Fabric","Quilt"],
    icon: "https://cdn.modrinth.com/data/YLbm0kZN/8f9e8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f_96.webp",
    download: "https://cdn.modrinth.com/data/YLbm0kZN/versions/pQZxT5cR/YACL-3.6.6+fabric-1.21.5.jar"
  },

  // Shader Support
  {
    name: "Indium",
    description: "FRAPI compatibility for modern Fabric render pipeline.",
    category: "Shader",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/Fgi5e1Ai/6a5b4c3d2e1f0987abcd1234ef5678ghijklmnopqrst_96.webp",
    download: "https://cdn.modrinth.com/data/Fgi5e1Ai/versions/o3XxY0ZK/indium-fabric-1.6.1+mc1.21.5.jar"
  },
  {
    name: "Iris Shaders",
    description: "Shader loader for Fabric, supports OptiFine packs.",
    category: "Shader",
    compat: ["Fabric","Quilt","NeoForge"],
    icon: "https://cdn.modrinth.com/data/eB1htE4P/b572f4ec6a84f5b3c2945a3b1e6f79c5d2a3b4c5_96.webp",
    download: "https://cdn.modrinth.com/data/eB1htE4P/versions/SqMKRbHZ/iris-fabric-1.8.11+1.21.5.jar"
  },
  {
    name: "Sodium Extra",
    description: "OptiFine‑like enhancements for Sodium.",
    category: "Shader",
    compat: ["Fabric","Quilt","NeoForge"],
    icon: "https://cdn.modrinth.com/data/PtjYWJkn/ba2c3d4e5f6a7b8c9d0e1f2a3b4c5e6f7d8c9e0f_96.webp",
    download: "https://cdn.modrinth.com/data/PtjYWJkn/versions/E5w6eZNE/sodium-extra-fabric-0.6.3+mc1.21.5.jar"
  },

  // Archived/Optional
  {
    name: "lazydfu",
    description: "Deprecated: skips DFU checks on startup.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/xyz/placeholder_96.webp",
    download: "https://cdn.modrinth.com/data/lazydfu/versions/0.1.3/lazydfu-0.1.3.jar"
  },
  {
    name: "BSVSB",
    description: "Also optional entry for Sodium button tweak.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/4N9roEmX/placeholder_96.webp",
    download: "https://cdn.modrinth.com/data/4N9roEmX/versions/WccpArUm/BSVSB-3.0.3-1.21.1.jar"
  },
  {
    name: "Starlight",
    description: "Archived light engine rewrite, no 1.21.5 support.",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/5ZwdcRci/placeholder_96.webp",
    download: "https://cdn.modrinth.com/data/5ZwdcRci/versions/21.06.2/starlight-1.1.3+fabric.jar"
  },
  {
    name: "XPlus AutoFish",
    description: "Optional auto‑fishing (not on Modrinth).",
    category: "Optional",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/xyz/placeholder_96.webp",
    download: "#"
  }
];

// Render & filter logic
function renderMods() {
  const container = document.getElementById('modList');
  container.innerHTML = '';
  const search = document.getElementById('search').value.toLowerCase();
  const cat = document.getElementById('categoryFilter').value;
  const comp = document.getElementById('compatFilter').value;

  mods.forEach(m => {
    if (search && !m.name.toLowerCase().includes(search)) return;
    if (cat!=='All' && m.category!==cat) return;
    if (comp!=='All' && !m.compat.includes(comp)) return;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${m.icon}" alt="${m.name}">
      <div class="card-body">
        <h3 class="card-title">${m.name}</h3>
        <p class="card-desc">${m.description}</p>
        <div class="card-tags">
          <span>${m.category}</span>
          ${m.compat.map(c=>`<span>${c}</span>`).join('')}
        </div>
        <a class="card-download" href="${m.download}" target="_blank">Download</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMods();
  document.getElementById('search').addEventListener('input', renderMods);
  document.getElementById('categoryFilter').addEventListener('change', renderMods);
  document.getElementById('compatFilter').addEventListener('change', renderMods);
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
