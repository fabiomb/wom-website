/* WOM — Warriors of Metal: i18n + UI */
(function () {
  "use strict";

  var I18N = {
    es: {
      "nav.features": "El juego",
      "nav.screenshots": "Capturas",
      "nav.multiplayer": "Multijugador",
      "nav.download": "Descargar",
      "nav.requirements": "Requisitos",
      "nav.contribute": "Colaborar",

      "hero.kicker": "Gratis · Open source · Windows, Linux y macOS",
      "hero.tagline": "Estrategia militar 2D por turnos: conquistá un mapa generado al azar, dirigí batallas en tiempo real y enfrentate a la IA, a otros humanos… o a un modelo de lenguaje.",
      "hero.download": "Descargar",
      "hero.github": "Ver en GitHub",
      "hero.platforms": "Windows · Linux · macOS (Apple Silicon) — hecho en Python + pygame-ce, licencia GPL-2.0",

      "features.title": "El juego",
      "features.lead": "Cada partida es un mapa nuevo, la misma seed es la misma guerra: todo el azar es determinista, del terreno a la última flecha.",
      "features.map.title": "Mapa aleatorio coherente",
      "features.map.text": "Cadenas montañosas, bosques en manchas, lagos y ríos con vados. Misma seed, mismo mapa — y misma partida completa.",
      "features.units.title": "Cuatro clases de unidad",
      "features.units.text": "Partisano, soldado, caballero y arquero: piedra-papel-tijera entre clases y bonus de terreno. Los arqueros ignoran la defensa de los fuertes.",
      "features.economy.title": "Economía de guerra",
      "features.economy.text": "Los pueblos producen comida y los fuertes la convierten en tropas de reserva, que salen al mapa cuando creás o reabastecés un ejército.",
      "features.battle.title": "Zoom de batalla en tiempo real",
      "features.battle.text": "Auto-resolvé el choque o dirigilo en un mini-RTS: elegí formación de despliegue y da órdenes en vivo, en campo abierto o asaltando un fuerte. También en multijugador.",
      "features.ai.title": "Tres niveles de IA",
      "features.ai.text": "Fácil, medio y difícil sobre un mismo motor de scoring de objetivos, balanceados por simulación masiva de partidas.",
      "features.victory.title": "Tres modos de victoria",
      "features.victory.text": "Conquista total, captura de banderas o límite de turnos: elegí cómo se gana antes de empezar.",
      "features.mp.title": "Multijugador de 2 a 4",
      "features.mp.text": "Por LAN o por Internet con servidor dedicado: lobby con chat, varias partidas a la vez, reconexión y chat en partida.",
      "features.llm.title": "Un LLM como rival",
      "features.llm.text": "Gemini, Claude, ChatGPT o modelos locales (Ollama, LM Studio) pueden ocupar un lugar en la partida y jugar como un cliente de red más.",
      "features.music.title": "Banda sonora y animaciones",
      "features.music.text": "Tropas animadas en mapa y batalla, movimiento en tres fases y reproductor de música configurable dentro del juego.",
      "features.saves.title": "Guardado exacto",
      "features.saves.text": "Partidas guardadas en JSON: una partida cargada continúa exactamente igual, generador de azar incluido.",

      "units.title": "Las cuatro clases",
      "units.partisan": "Partisano",
      "units.soldier": "Soldado",
      "units.knight": "Caballero",
      "units.archer": "Arquero",

      "shots.title": "Capturas",
      "shots.map": "Partida sobre el mapa generado",
      "shots.battle": "Zoom de batalla en tiempo real",
      "shots.mp": "Partida multijugador con chat",
      "shots.menu": "Menú principal",
      "shots.new": "Nueva partida",
      "shots.lobby": "Crear partida en red",

      "mp.title": "Multijugador serio",
      "mp.p1": "De 2 a 4 jugadores por red local o por Internet con un servidor dedicado: lobby con chat global, catálogo de partidas simultáneas y reconexión si te caés (la IA cubre tu lugar mientras tanto).",
      "mp.p2": "Bajo el capó es lockstep determinista: ambos clientes simulan el mismo turno con las mismas órdenes y seed, así que por la red solo viajan las órdenes. El servidor es un proceso stand-alone de solo stdlib, con rate-limit y protección anti-DDOS.",
      "mp.llmTitle": "¿Y contra una IA de verdad?",
      "mp.llmText": "Conectá un modelo de lenguaje como rival: observa el tablero como ASCII, planifica y emite órdenes de alto nivel. Sirve para medir qué modelo juega mejor a la estrategia — local u online, sin SDKs externos.",

      "dl.title": "Descargar",
      "dl.lead": "Gratis, sin instalador y portable: descomprimí y jugá. Los guardados y la configuración se crean junto al ejecutable.",
      "dl.win": "Windows 10 u 11, 64 bits",
      "dl.linux": "Distros 64 bits actuales",
      "dl.mac": "Apple Silicon (M1 o superior)",
      "dl.all": "Todas las versiones y changelogs en GitHub Releases →",

      "req.title": "Requisitos",
      "req.lead": "WOM es un juego 2D liviano: si tu máquina abre un navegador, corre WOM.",
      "req.hwTitle": "Hardware mínimo",
      "req.hw1": "CPU de dos núcleos (x86-64 o Apple Silicon)",
      "req.hw2": "2 GB de RAM",
      "req.hw3": "500 MB de espacio en disco",
      "req.hw4": "Pantalla de 1280×720 — no requiere GPU dedicada",
      "req.hw5": "Mouse (rueda para zoom) y teclado",
      "req.hw6": "Conexión de red solo para multijugador",
      "req.swTitle": "Software",
      "req.sw1": "Windows 10/11 de 64 bits",
      "req.sw2": "Linux de 64 bits (glibc reciente)",
      "req.sw3": "macOS 12+ en Apple Silicon",
      "req.sw4": "Los binarios no necesitan nada más: Python y las dependencias van incluidos",
      "req.sw5": "Desde el código fuente: Python 3.13 + pygame-ce",

      "dev.title": "Participá del desarrollo",
      "dev.lead": "WOM es software libre (GPL-2.0), escrito en Python 3.13 con pygame-ce y con una arquitectura en capas estricta: la lógica del juego no importa pygame — y hay un test que lo verifica.",
      "dev.codeTitle": "Corré el código",
      "dev.codeText": "La suite de tests corre con pytest y el balance de la IA se valida con simulación masiva de partidas por consola.",
      "dev.helpTitle": "Cómo ayudar",
      "dev.help1": "Reportá bugs o ideas en los issues de GitHub",
      "dev.help2": "Enviá pull requests: balance, IA, red, UI o arte",
      "dev.help3": "El arte se reemplaza soltando archivos del mismo nombre y tamaño en data/assets/",
      "dev.help4": "Todo el balance vive en JSON editable (clases, batalla, IA)",
      "dev.help5": "Documentación técnica completa en docs/",
      "dev.cta": "Ir al repositorio",

      "footer.license": "Licencia GPL-2.0",
      "footer.releases": "Descargas",

      "meta.title": "WOM — Warriors of Metal | Juego de estrategia por turnos, open source",
      "meta.description": "Warriors of Metal (WOM): juego de estrategia militar 2D por turnos, gratis y open source. Mapas aleatorios, batallas en tiempo real, multijugador LAN/online y hasta un LLM como rival. Windows, Linux y macOS."
    },

    en: {
      "nav.features": "The game",
      "nav.screenshots": "Screenshots",
      "nav.multiplayer": "Multiplayer",
      "nav.download": "Download",
      "nav.requirements": "Requirements",
      "nav.contribute": "Contribute",

      "hero.kicker": "Free · Open source · Windows, Linux & macOS",
      "hero.tagline": "2D turn-based military strategy: conquer a randomly generated map, command real-time battles, and face the AI, other humans… or a large language model.",
      "hero.download": "Download",
      "hero.github": "View on GitHub",
      "hero.platforms": "Windows · Linux · macOS (Apple Silicon) — built with Python + pygame-ce, GPL-2.0 licensed",

      "features.title": "The game",
      "features.lead": "Every match is a new map, and the same seed is the same war: all randomness is deterministic, from the terrain to the last arrow.",
      "features.map.title": "Coherent random maps",
      "features.map.text": "Mountain ranges, forest patches, lakes and rivers with fords. Same seed, same map — and the same full match.",
      "features.units.title": "Four unit classes",
      "features.units.text": "Partisan, soldier, knight and archer: rock-paper-scissors between classes plus terrain bonuses. Archers ignore fort defenses.",
      "features.economy.title": "War economy",
      "features.economy.text": "Towns produce food and forts turn it into reserve troops, which enter the map when you create or resupply an army.",
      "features.battle.title": "Real-time battle zoom",
      "features.battle.text": "Auto-resolve the clash or command it in a mini-RTS: pick a deployment formation and give live orders, in open field or storming a fort. Works in multiplayer too.",
      "features.ai.title": "Three AI levels",
      "features.ai.text": "Easy, medium and hard on a single objective-scoring engine, balanced through massive game simulation.",
      "features.victory.title": "Three victory modes",
      "features.victory.text": "Total conquest, flag capture or turn limit: choose how the war is won before it starts.",
      "features.mp.title": "2–4 player multiplayer",
      "features.mp.text": "Over LAN or the Internet with a dedicated server: lobby with chat, multiple simultaneous games, reconnection and in-game chat.",
      "features.llm.title": "An LLM as your rival",
      "features.llm.text": "Gemini, Claude, ChatGPT or local models (Ollama, LM Studio) can take a player slot and join the match as just another network client.",
      "features.music.title": "Soundtrack & animations",
      "features.music.text": "Animated troops on the map and in battle, three-phase movement, and a configurable in-game music player.",
      "features.saves.title": "Exact save games",
      "features.saves.text": "Games saved as JSON: a loaded game continues exactly as it was, random number generator included.",

      "units.title": "The four classes",
      "units.partisan": "Partisan",
      "units.soldier": "Soldier",
      "units.knight": "Knight",
      "units.archer": "Archer",

      "shots.title": "Screenshots",
      "shots.map": "A match on the generated map",
      "shots.battle": "Real-time battle zoom",
      "shots.mp": "Multiplayer match with chat",
      "shots.menu": "Main menu",
      "shots.new": "New game",
      "shots.lobby": "Creating a network game",

      "mp.title": "Serious multiplayer",
      "mp.p1": "2 to 4 players over LAN or the Internet with a dedicated server: a lobby with global chat, a catalog of simultaneous games, and reconnection if you drop (the AI covers your seat meanwhile).",
      "mp.p2": "Under the hood it's deterministic lockstep: both clients simulate the same turn with the same orders and seed, so only orders travel over the network. The server is a stdlib-only standalone process, with rate limiting and anti-DDoS protection.",
      "mp.llmTitle": "What about a real AI?",
      "mp.llmText": "Plug in a language model as your rival: it observes the board as ASCII, plans, and issues high-level orders. Great for measuring which model plays strategy best — local or online, no external SDKs.",

      "dl.title": "Download",
      "dl.lead": "Free, no installer, fully portable: unzip and play. Saves and settings are created next to the executable.",
      "dl.win": "Windows 10 or 11, 64-bit",
      "dl.linux": "Current 64-bit distros",
      "dl.mac": "Apple Silicon (M1 or later)",
      "dl.all": "All versions and changelogs on GitHub Releases →",

      "req.title": "Requirements",
      "req.lead": "WOM is a lightweight 2D game: if your machine can open a browser, it can run WOM.",
      "req.hwTitle": "Minimum hardware",
      "req.hw1": "Dual-core CPU (x86-64 or Apple Silicon)",
      "req.hw2": "2 GB of RAM",
      "req.hw3": "500 MB of disk space",
      "req.hw4": "1280×720 display — no dedicated GPU required",
      "req.hw5": "Mouse (wheel for zoom) and keyboard",
      "req.hw6": "Network connection only for multiplayer",
      "req.swTitle": "Software",
      "req.sw1": "Windows 10/11, 64-bit",
      "req.sw2": "64-bit Linux (recent glibc)",
      "req.sw3": "macOS 12+ on Apple Silicon",
      "req.sw4": "The binaries need nothing else: Python and all dependencies are bundled",
      "req.sw5": "From source: Python 3.13 + pygame-ce",

      "dev.title": "Join the development",
      "dev.lead": "WOM is free software (GPL-2.0), written in Python 3.13 with pygame-ce, with a strict layered architecture: the game logic never imports pygame — and a test enforces it.",
      "dev.codeTitle": "Run the code",
      "dev.codeText": "The test suite runs on pytest, and AI balance is validated through massive headless game simulation.",
      "dev.helpTitle": "How to help",
      "dev.help1": "Report bugs or ideas in the GitHub issues",
      "dev.help2": "Send pull requests: balance, AI, networking, UI or art",
      "dev.help3": "Art is replaced by dropping same-name, same-size files into data/assets/",
      "dev.help4": "All game balance lives in editable JSON (classes, battle, AI)",
      "dev.help5": "Full technical documentation in docs/",
      "dev.cta": "Go to the repository",

      "footer.license": "GPL-2.0 License",
      "footer.releases": "Downloads",

      "meta.title": "WOM — Warriors of Metal | Open source turn-based strategy game",
      "meta.description": "Warriors of Metal (WOM): free & open source 2D turn-based military strategy game. Random maps, real-time battles, LAN/online multiplayer and even an LLM opponent. Windows, Linux & macOS."
    }
  };

  function setLang(lang) {
    if (!I18N[lang]) lang = "es";
    var dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key]) el.setAttribute("alt", dict[key]);
    });

    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem("wom-lang", lang); } catch (e) { /* private mode */ }
  }

  // Initial language: saved > browser > Spanish
  var initial = null;
  try { initial = localStorage.getItem("wom-lang"); } catch (e) { /* private mode */ }
  if (!initial) {
    initial = (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }
  setLang(initial);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  // Mobile nav
  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Lightbox for screenshots
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox.querySelector("img");
  document.querySelectorAll(".shot img").forEach(function (img) {
    img.parentElement.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.body.style.overflow = "";
  }
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  // Latest release: update version badge, file names and direct download links.
  // Falls back silently to the hardcoded version if the API is unreachable.
  fetch("https://api.github.com/repos/fabiomb/WOM/releases/latest")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rel) {
      if (!rel || !rel.tag_name) return;
      document.querySelectorAll(".btn-primary .ver").forEach(function (el) {
        el.textContent = rel.tag_name;
      });
      var patterns = { windows: "windows", linux: "linux", macos: "macos" };
      document.querySelectorAll(".dl-card[data-platform]").forEach(function (card) {
        var key = patterns[card.getAttribute("data-platform")];
        var asset = (rel.assets || []).filter(function (a) {
          return a.name.indexOf(key) !== -1;
        })[0];
        if (asset) {
          card.href = asset.browser_download_url;
          var file = card.querySelector(".dl-file");
          if (file) file.textContent = asset.name;
        }
      });
    })
    .catch(function () { /* offline or rate-limited: keep static links */ });
})();
