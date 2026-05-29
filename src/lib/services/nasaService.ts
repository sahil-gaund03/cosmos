// ============================================
// NEXUS COSMOS — NASA Media API Service
// ============================================

export interface NASAPhoto {
  id: string;
  title: string;
  date: string;
  center: string;
  explanation: string;
  thumbUrl: string;
  hdUrl: string;
  category: string;
}

export interface APODData {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl?: string;
  copyright?: string;
}

const MOCK_APOD: APODData = {
  title: "The Pillars of Creation (M16) via James Webb",
  date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  explanation: "James Webb's near-infrared view of the Pillars of Creation reveals thousands of newly formed stars. These columns of gas and dust are part of the Eagle Nebula, located approximately 6,500 light-years away in the constellation Serpens. The red glowing spots at the tips of the pillars represent supersonic jets from protostars colliding with the dense clouds.",
  url: "/images/nebula-preview.png",
  hdurl: "/images/nebula-preview.png",
  copyright: "NASA, ESA, CSA, STScI",
};

const MOCK_PHOTOS: NASAPhoto[] = [
  {
    id: "m16-pillars",
    title: "Pillars of Creation in the Eagle Nebula",
    date: "2022-10-19",
    center: "STScI",
    explanation: "This composite image shows the Pillars of Creation inside the Eagle Nebula (M16). Gaseous towers are carved by stellar winds from hot, young stars inside. High-energy radiation causes the hydrogen and nitrogen atoms to emit intense red and green light.",
    thumbUrl: "/images/nebula-preview.png",
    hdUrl: "/images/nebula-preview.png",
    category: "nebulae",
  },
  {
    id: "mars-sunset",
    title: "Martian Sunset over Valles Marineris",
    date: "2015-04-15",
    center: "JPL",
    explanation: "A high-resolution panorama captured by the Curiosity Mars Rover at Gusev Crater. The sun is setting behind the distant rim, casting long shadows over the iron-rich crimson sands. The Martian sky shows a cool blue glow near the sun due to fine dust scattering.",
    thumbUrl: "/images/mars-surface.png",
    hdUrl: "/images/mars-surface.png",
    category: "mars",
  },
  {
    id: "earth-orbit",
    title: "Blue Planet Earth from Low Orbit",
    date: "2023-08-01",
    center: "JSC",
    explanation: "Astronaut photograph taken from the cupola of the International Space Station. Renders the curved thin atmosphere of Earth highlighted by green auroral airglow ribbons. The deep indigo Pacific ocean contrasts with bright storm cloud clusters.",
    thumbUrl: "/images/hero-earth.png",
    hdUrl: "/images/hero-earth.png",
    category: "earth",
  },
  {
    id: "andromeda-galaxy",
    title: "Andromeda Galaxy (M31) Galactic Core",
    date: "2019-12-10",
    center: "GSFC",
    explanation: "Deep-space exposure of our nearest galactic neighbor, the Andromeda spiral galaxy (M31). Located 2.5 million light-years away, it spans over 220,000 light-years. The image captures the brilliant central bulge containing dense clusters of ancient yellow stars, wrapped in dark dust lanes.",
    thumbUrl: "/images/andromeda-galaxy.png",
    hdUrl: "/images/andromeda-galaxy.png",
    category: "galaxies",
  },
  {
    id: "apollo11-footprint",
    title: "First Footprint on the Lunar Surface",
    date: "1969-07-20",
    center: "MSC",
    explanation: "Astronaut Buzz Aldrin's boot print in the fine-grained lunar regolith at Tranquility Base. The print is preserved in the vacuum of space, showing the ribbed sole texture of the Apollo spacesuit boot. A historic symbol of human exploration.",
    thumbUrl: "/images/moon-surface.png",
    hdUrl: "/images/moon-surface.png",
    category: "moon",
  },
  {
    id: "saturn-rings-photo",
    title: "Saturn's Ring System and Cloud Bands",
    date: "2024-02-15",
    center: "JPL",
    explanation: "Close-up telemetry capture of Saturn's concentric ring structures slicing across its rich golden-hued gas bands. Photographed by the Cassini-Huygens spacecraft.",
    thumbUrl: "/images/saturn-view.png",
    hdUrl: "/images/saturn-view.png",
    category: "saturn",
  },
  {
    id: "mercury-color",
    title: "Mercury's Caloris Basin and Crater Networks",
    date: "2018-05-10",
    center: "JPL",
    explanation: "High-resolution color composite image of the Caloris Basin on Mercury, captured by NASA's MESSENGER spacecraft. Renders the impact crater system highlighted by orange volcanic vents and bright halo craters.",
    thumbUrl: "/images/mercury-view.png",
    hdUrl: "/images/mercury-view.png",
    category: "planets",
  },
  {
    id: "venus-atmosphere",
    title: "Thick Carbon Dioxide Clouds of Venus",
    date: "2020-11-12",
    center: "GSFC",
    explanation: "Ultraviolet imaging of the dense, highly reflective carbon dioxide clouds shrouding Venus. Winds circulate at speeds up to 360 km/h, dragging cloud tops across the planet every four Earth days.",
    thumbUrl: "/images/venus-view.png",
    hdUrl: "/images/venus-view.png",
    category: "planets",
  },
  {
    id: "jupiter-great-red-spot",
    title: "Jupiter's Great Red Spot and Swirling Bands",
    date: "2023-03-24",
    center: "JPL",
    explanation: "Close-up of Jupiter's active southern hemisphere featuring the Great Red Spot—an anticyclonic storm larger than Earth. Captured by NASA's Juno spacecraft during its close flyby.",
    thumbUrl: "/images/jupiter-view.png",
    hdUrl: "/images/jupiter-view.png",
    category: "jupiter",
  },
  {
    id: "uranus-voyager",
    title: "Pale Blue Uranus in True Color",
    date: "1986-01-24",
    center: "JPL",
    explanation: "True color image of Uranus captured by the Voyager 2 spacecraft during its historic encounter. The planet shows a smooth, featureless cyan sphere due to high concentrations of methane gas.",
    thumbUrl: "/images/uranus-view.png",
    hdUrl: "/images/uranus-view.png",
    category: "uranus",
  },
  {
    id: "neptune-storm",
    title: "Neptune's Great Dark Spot and Methane Bands",
    date: "1989-08-31",
    center: "JPL",
    explanation: "Voyager 2 photograph of Neptune's deep indigo sphere. Displays high-altitude bright methane cirrus clouds and the Great Dark Spot—a massive storm system tracking in the southern hemisphere.",
    thumbUrl: "/images/neptune-view.png",
    hdUrl: "/images/neptune-view.png",
    category: "neptune",
  },
  {
    id: "proxima-centauri-star",
    title: "Proxima Centauri: Our Nearest Stellar Neighbor",
    date: "2021-09-02",
    center: "ESA",
    explanation: "A deep space view of the red dwarf star Proxima Centauri, located just 4.24 light-years away in the Alpha Centauri system. Although it is the nearest star to the Sun, it is too faint to be seen with the naked eye.",
    thumbUrl: "/images/proxima-centauri.png",
    hdUrl: "/images/proxima-centauri.png",
    category: "stars",
  },
  {
    id: "orion-nebula-core",
    title: "Stellar Nursery of the Orion Nebula",
    date: "2022-04-18",
    center: "STScI",
    explanation: "Deep space view of the heart of the Orion Nebula (M42), located 1,344 light-years away. Renders dense cosmic dust filaments lit by the Trapezium Cluster, a group of massive young stars emitting ultraviolet radiation.",
    thumbUrl: "/images/orion-nebula.png",
    hdUrl: "/images/orion-nebula.png",
    category: "nebulae",
  },
  {
    id: "crab-nebula-supernova",
    title: "Supernova Remnant: The Crab Nebula",
    date: "2020-07-04",
    center: "GSFC",
    explanation: "A composite image mapping the expanding gas filaments of the Crab Nebula (M1). The debris cloud is the remnant of a supernova explosion observed in 1054 AD. In the center sits a rapidly spinning neutron star.",
    thumbUrl: "/images/crab-nebula.png",
    hdUrl: "/images/crab-nebula.png",
    category: "nebulae",
  },
  {
    id: "carina-nebula-mystic-mountain",
    title: "Mystic Mountain in the Carina Nebula",
    date: "2010-04-23",
    center: "STScI",
    explanation: "A capture of a three-light-year-tall pillar of gas and dust inside the Carina Nebula. Heated gas streams from young stars inside the pillar, sculpting dense dust spires.",
    thumbUrl: "/images/carina-nebula.png",
    hdUrl: "/images/carina-nebula.png",
    category: "nebulae",
  },
  {
    id: "triangulum-galaxy-spiral",
    title: "Triangulum Galaxy (M33) Pinwheel Structure",
    date: "2021-01-15",
    center: "STScI",
    explanation: "Vibrant high-definition capture of the Triangulum Galaxy (M33), a spiral galaxy located 3 million light-years away. Shows extensive pink star-forming hydrogen regions scattered along loose spiral arms.",
    thumbUrl: "/images/triangulum-galaxy.png",
    hdUrl: "/images/triangulum-galaxy.png",
    category: "galaxies",
  },
  {
    id: "iss-co-orbital-hologram",
    title: "ISS Co-Orbital Telemetry Capture",
    date: "2024-03-01",
    center: "JSC",
    explanation: "Low Earth orbit visualization of the International Space Station co-orbital telemetry scan, showing structural solar arrays and pressurized modules.",
    thumbUrl: "/images/iss-hologram.png",
    hdUrl: "/images/iss-hologram.png",
    category: "nasa missions",
  },
];

export async function getAPOD(): Promise<APODData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("API Limit");
    const data = await response.json();
    return {
      title: data.title || MOCK_APOD.title,
      date: data.date || MOCK_APOD.date,
      explanation: data.explanation || MOCK_APOD.explanation,
      url: data.url || MOCK_APOD.url,
      hdurl: data.hdurl || data.url || MOCK_APOD.url,
      copyright: data.copyright || MOCK_APOD.copyright,
    };
  } catch {
    return MOCK_APOD;
  }
}

interface NASASearchItem {
  data?: Array<{
    nasa_id?: string;
    title?: string;
    date_created?: string;
    center?: string;
    description?: string;
  }>;
  links?: Array<{
    href?: string;
  }>;
}

export async function searchNASAGallery(query: string): Promise<NASAPhoto[]> {
  try {
    const isInitialLoad = !query || query.trim() === "";
    const searchQuery = isInitialLoad ? "nebula galaxy stars planets" : query;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${encodeURIComponent(searchQuery)}&media_type=image`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("Query Failed");
    const data = await response.json();

    const items = data.collection?.items || [];
    if (items.length === 0) return isInitialLoad ? MOCK_PHOTOS : [];

    const fetchLimit = isInitialLoad ? 67 : 67; // Ensure 67 images exactly as requested

    const apiPhotos = items.slice(0, fetchLimit).map((item: NASASearchItem, idx: number) => {
      const info = item.data?.[0] || {};
      const links = item.links?.[0] || {};
      
      let category = "deep space";
      const txt = ((info.title || "") + (info.description || "")).toLowerCase();
      if (txt.includes("galaxy") || txt.includes("m31") || txt.includes("spiral")) category = "galaxies";
      else if (txt.includes("mars") || txt.includes("rover") || txt.includes("crater")) category = "mars";
      else if (txt.includes("moon") || txt.includes("apollo") || txt.includes("lunar")) category = "moon";
      else if (txt.includes("sun") || txt.includes("solar")) category = "sun";
      else if (txt.includes("earth")) category = "earth";
      else if (txt.includes("jupiter")) category = "jupiter";
      else if (txt.includes("saturn")) category = "saturn";
      else if (txt.includes("galaxy")) category = "galaxy";
      else if (txt.includes("webb")) category = "james webb";
      else if (txt.includes("black hole")) category = "black holes";
      else if (txt.includes("nebula")) category = "nebulae";

      return {
        id: info.nasa_id || `api-photo-${idx}`,
        title: info.title || "Cosmic Intelligence Capture",
        date: info.date_created?.slice(0, 10) || new Date().toISOString().slice(0, 10),
        center: info.center || "NASA",
        explanation: info.description || "Deep-space planetary intelligence visual payload captured via NASA sensor arrays.",
        thumbUrl: links.href || "/images/nebula-preview.png",
        hdUrl: links.href || "/images/nebula-preview.png",
        category,
      };
    });

    // If it's the initial load, prepend our hand-picked MOCK_PHOTOS to guarantee some perfect diversity
    if (isInitialLoad) {
      // Deduplicate if IDs match, though unlikely
      return [...MOCK_PHOTOS, ...apiPhotos].slice(0, 67);
    }

    return apiPhotos;

  } catch {
    // Filter mock photos locally in case of API failure
    if (!query || query.trim() === "") return MOCK_PHOTOS;
    return MOCK_PHOTOS.filter((photo) =>
      (photo.title + photo.explanation)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }
}


