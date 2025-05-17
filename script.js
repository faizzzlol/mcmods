// script.js
const mods = [
  { name: "Lithium",
    description: "General-purpose optimization mod that improves physics, AI, and tick management:contentReference[oaicite:14]{index=14}.",
    category: "FPS",
    compat: ["Fabric", "Quilt", "NeoForge"],
    icon: "https://cdn.modrinth.com/data/gvQqBUqZ/bcc8686c13af0143adf4285d741256af824f70b7_96.webp",
    download: "https://cdn.modrinth.com/data/gvQqBUqZ/versions/VWYoZjBF/lithium-fabric-0.16.2+mc1.21.5.jar"
  },
  { name: "Sodium",
    description: "Rendering optimization mod for the client, greatly improving frame rates and reducing stutter:contentReference[oaicite:15]{index=15}.",
    category: "FPS",
    compat: ["Fabric", "NeoForge", "Quilt"],
    icon: "https://cdn.modrinth.com/data/AANobbMI/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp",
    download: "https://cdn.modrinth.com/data/AANobbMI/versions/VX9hkTEZ/sodium-fabric-0.5.11+mc1.21.5.jar"
  },
  { name: "FerriteCore",
    description: "Memory usage optimization mod that reduces the game's RAM usage without impacting gameplay:contentReference[oaicite:16]{index=16}.",
    category: "FPS",
    compat: ["Fabric", "Quilt", "NeoForge", "Forge"],
    icon: "https://cdn.modrinth.com/data/uXXizFIs/222a126f26f8f9ae1eb339f3b767677f18bff31f_96.webp",
    download: "https://cdn.modrinth.com/data/uXXizFIs/versions/V01YPCFb/ferritecore-8.0.0-fabric.jar"
  },
  { name: "Entity Culling",
    description: "Hides blocks and entities that are not visible via async path-tracing, boosting performance:contentReference[oaicite:17]{index=17}.",
    category: "FPS",
    compat: ["Fabric", "NeoForge", "Quilt", "Forge"],
    icon: "https://cdn.modrinth.com/data/NNAgCjsB/7873452d6cede4daed12da3d7d8c193ab88b4fd6_96.webp",
    download: "https://cdn.modrinth.com/data/NNAgCjsB/versions/VJ9J4cWw/entityculling-1.7.4.jar"
  },
  { name: "ScalableLux",
    description: "Light engine optimization mod (based on Starlight) that improves light updates in Minecraft:contentReference[oaicite:18]{index=18}.",
    category: "FPS",
    compat: ["Fabric", "NeoForge"],
    icon: "https://cdn.modrinth.com/data/Ps1zyz6x/27133942a1a58af1bb11b087957ea4cc14414dd3_96.webp",
    download: "https://cdn.modrinth.com/data/Ps1zyz6x/versions/V1Db96CO/scalablelux-0.1.3.jar"
  },
  { name: "AppleSkin",
    description: "Adds various food-related HUD improvements (hunger/saturation tooltips and visualizations):contentReference[oaicite:19]{index=19}.",
    category: "UI",
    compat: ["Fabric", "Quilt", "NeoForge", "Forge"],
    icon: "https://raw.githubusercontent.com/squeek502/AppLe/3.0.6/apple.png",
    download: "https://cdn.modrinth.com/data/EsAfCjCV/versions/V0AC0ccs/appleskin-fabric-mc1.21.5-3.0.6.jar"
  },
  { name: "Controlling",
    description: "Adds a search bar to the Key-Bindings menu to easily find keybinds:contentReference[oaicite:20]{index=20}.",
    category: "UI",
    compat: ["Fabric", "NeoForge", "Forge"],
    icon: "https://cdn.modrinth.com/data/xv94TkTM/bdb6feb3d04ca37da4ed5aa73fef062a39d8b3e5_96.webp",
    download: "https://cdn.modrinth.com/data/xv94TkTM/versions/VjjTIrEB/controlling-fabric-23.0.2.jar"
  },
  { name: "Jade",
    description: "Modern replacement for Waila/Hwyla showing block/entity info as HUD overlay:contentReference[oaicite:21]{index=21}.",
    category: "UI",
    compat: ["Fabric", "Quilt", "NeoForge", "Forge"],
    icon: "https://cdn.modrinth.com/data/nvQzSEkH/b04217bc2b7dc524c4d12f81ff42cc1cefb9b0fc_96.webp",
    download: "https://cdn.modrinth.com/data/nvQzSEkH/versions/VX1XcL4h/jade-18.2.0-fabric.jar"
  },
  { name: "MiniHUD",
    description: "\"Mini-F3\" HUD mod with overlays for light levels, spawn/slime chunks, etc:contentReference[oaicite:22]{index=22}.",
    category: "UI",
    compat: ["Fabric", "Forge"],
    icon: "https://cdn.modrinth.com/data/UMxybHE8/4adf057a251f694983af139a06839e33bcd7a419.png",
    download: "https://cdn.modrinth.com/data/UMxybHE8/versions/V3W3C7Qi/minihud-fabric-0.35.0.jar"
  },
  { name: "Fabric API",
    description: "Lightweight and modular API providing hooks and inter-compatibility for Fabric mods:contentReference[oaicite:23]{index=23}.",
    category: "Utility",
    compat: ["Fabric"],
    icon: "https://cdn.modrinth.com/data/P7dR8mSH/icon.png",
    download: "https://cdn.modrinth.com/data/P7dR8mSH/versions/V0zVLLk9/fabric-api-0.124.0+1.21.5.jar"
  },
  { name: "Mod Menu",
    description: "Adds an in-game menu listing all installed mods and quick config access:contentReference[oaicite:24]{index=24}.",
    category: "Utility",
    compat: ["Fabric", "Quilt"],
    icon: "https://cdn.modrinth.com/data/mOgUt4GM/1bfe2006b38340e9d064700e41adf84a8abb1bd4_96.webp",
    download: "https://cdn.modrinth.com/data/mOgUt4GM/versions/V90AyvFI/modmenu-14.0.0-rc.2.jar"
  },
  { name: "Roughly Enough Items (REI)",
    description: "Clean, customizable item and recipe viewing mod (alternative to JEI):contentReference[oaicite:25]{index=25}.",
    category: "Utility",
    compat: ["Fabric", "Quilt", "NeoForge", "Forge"],
    icon: "https://cdn.modrinth.com/data/nfn13YXA/54ac5daa4166011bae713448e84413987316433a_96.webp",
    download: "https://cdn.modrinth.com/data/nfn13YXA/versions/V4wK98Js/rei-19.0.806.jar"
  },
  { name: "Iris Shaders",
    description: "Shader pack loader compatible with OptiFine shaders, enabling shader support on Fabric:contentReference[oaicite:26]{index=26}.",
    category: "Shader",
    compat: ["Fabric", "Quilt", "NeoForge"],
    icon: "https://raw.githubusercontent.com/IrisShaders/Iris/multiloader-new/docs/banner.png",
    download: "https://cdn.modrinth.com/data/YL57xq9U/versions/V0zGO7pZ/iris-1.8.11.jar"
  }
];

function renderMods() {
  const container = document.getElementById('modList');
  container.innerHTML = '';
  const searchText = document.getElementById('search').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const compatFilter = document.getElementById('compatFilter').value;

  mods.forEach(mod => {
    if (searchText && !mod.name.toLowerCase().includes(searchText)) return;
    if (categoryFilter !== "All" && mod.category !== categoryFilter) return;
    if (compatFilter !== "All" && !mod.compat.includes(compatFilter)) return;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${mod.icon}" alt="${mod.name} icon">
      <div class="card-body">
        <h3 class="card-title">${mod.name}</h3>
        <p class="card-desc">${mod.description}</p>
        <div class="card-tags"><span class="category">${mod.category}</span>
          ${mod.compat.map(c => `<span>${c}</span>`).join('')}
        </div>
        <a class="card-download" href="${mod.download}" target="_blank">Download</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initial render and event setup
document.addEventListener('DOMContentLoaded', () => {
  renderMods();
  document.getElementById('search').addEventListener('input', renderMods);
  document.getElementById('categoryFilter').addEventListener('change', renderMods);
  document.getElementById('compatFilter').addEventListener('change', renderMods);
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
