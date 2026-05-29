// ============================================
// NEXUS COSMOS — Hubble Deep-Space Service
// ============================================

export interface ChemicalSpectrum {
  element: "Hα" | "O-III" | "S-II";
  percentage: number;
  color: string;
}

export interface CelestialObject {
  id: string;
  name: string;
  catalogName: string; // e.g. M16, NGC 1976
  category: "nebulae" | "galaxies" | "black-holes";
  ra: string; // Right Ascension (focal coordinate)
  dec: string; // Declination (focal coordinate)
  distance: string; // ly or Mly
  constellation: string;
  magnitude: string; // Apparent magnitude
  description: string;
  imageUrl: string;
  spectrum: ChemicalSpectrum[];
}

const CELESTIAL_CATALOG: CelestialObject[] = [
  {
    id: "pillars-creation",
    name: "Pillars of Creation",
    catalogName: "M16 // NGC 6611",
    category: "nebulae",
    ra: "18h 18m 48s",
    dec: "-13° 49′ 0″",
    distance: "6,500 Light-Years",
    constellation: "Serpens (The Serpent)",
    magnitude: "+6.0",
    description: "Active star-forming pillars of cold gas and cosmic dust located in the Eagle Nebula. These columns are being eroded by intense radiation from massive young stars inside, sparking the collapse of dense gas nodes to form new protostars.",
    imageUrl: "/images/nebula-preview.png",
    spectrum: [
      { element: "Hα", percentage: 72, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 18, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 10, color: "bg-[#5266eb]" },
    ],
  },
  {
    id: "orion-nebula",
    name: "Orion Stellar Nursery",
    catalogName: "M42 // NGC 1976",
    category: "nebulae",
    ra: "05h 35m 17s",
    dec: "-05° 23′ 28″",
    distance: "1,344 Light-Years",
    constellation: "Orion (The Hunter)",
    magnitude: "+4.0",
    description: "The closest region of massive star formation to Earth. Visible to the naked eye as the middle star in Orion's sword. The nebula is illuminated by the Trapezium Cluster—four hot, massive stars at its core.",
    imageUrl: "/images/nebula-preview.png",
    spectrum: [
      { element: "Hα", percentage: 78, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 15, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 7, color: "bg-[#5266eb]" },
    ],
  },
  {
    id: "sombrero-galaxy",
    name: "Sombrero Galaxy",
    catalogName: "M104 // NGC 4594",
    category: "galaxies",
    ra: "12h 39m 59s",
    dec: "-11° 37′ 23″",
    distance: "28,000,000 Light-Years",
    constellation: "Virgo (The Virgin)",
    magnitude: "+8.0",
    description: "An unbarred spiral galaxy characterized by a large stellar bulge in the center and a prominent dark dust lane wrapping around its disk, giving it the appearance of a wide Mexican sombrero.",
    imageUrl: "/images/mars-surface.png",
    spectrum: [
      { element: "Hα", percentage: 65, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 25, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 10, color: "bg-[#5266eb]" },
    ],
  },
  {
    id: "whirlpool-galaxy",
    name: "Whirlpool Spiral",
    catalogName: "M51 // NGC 5194",
    category: "galaxies",
    ra: "13h 29m 52s",
    dec: "+47° 11′ 43″",
    distance: "23,000,000 Light-Years",
    constellation: "Canes Venatici (Hunting Dogs)",
    magnitude: "+8.4",
    description: "A classic grand design spiral galaxy interacting with a smaller companion dwarf galaxy (NGC 5195) at the tip of one of its arms. The tidal force of the companion triggers active star formation waves along the spiral structures.",
    imageUrl: "/images/hero-earth.png",
    spectrum: [
      { element: "Hα", percentage: 70, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 22, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 8, color: "bg-[#5266eb]" },
    ],
  },
  {
    id: "sagitarius-a",
    name: "Sagittarius A* Core",
    catalogName: "Sgr A* // BH_MILKYWAY",
    category: "black-holes",
    ra: "17h 45m 40s",
    dec: "-29° 00′ 28″",
    distance: "26,000 Light-Years",
    constellation: "Sagittarius (The Archer)",
    magnitude: "N/A (Radio Signal)",
    description: "The supermassive black hole at the center of our Milky Way galaxy. It has a mass equivalent to approximately 4.3 million Suns. Renders a glowing accretion disk of highly ionized, relativistic plasma swirling around the event horizon.",
    imageUrl: "/images/iss-hologram.png",
    spectrum: [
      { element: "Hα", percentage: 10, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 40, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 50, color: "bg-[#5266eb]" },
    ],
  },
  {
    id: "m87-horizon",
    name: "M87* Event Horizon",
    catalogName: "M87 // BH_VIRGOCLUSTER",
    category: "black-holes",
    ra: "12h 30m 49s",
    dec: "+12° 23′ 28″",
    distance: "53,000,000 Light-Years",
    constellation: "Virgo (The Virgin)",
    magnitude: "N/A (Radio Signal)",
    description: "The supermassive black hole at the center of the giant elliptical galaxy M87. It was the first black hole ever imaged directly in 2019. It has an immense mass of 6.5 billion Suns and shoots relativistic plasma jets 5,000 light-years into space.",
    imageUrl: "/images/iss-hologram.png",
    spectrum: [
      { element: "Hα", percentage: 5, color: "bg-[#ffb4ab]" },
      { element: "O-III", percentage: 35, color: "bg-[#bbc3ff]" },
      { element: "S-II", percentage: 60, color: "bg-[#5266eb]" },
    ],
  },
];

export async function getCelestialCatalog(): Promise<CelestialObject[]> {
  // Simulate network latency for cinematic loading effect
  return new Promise((resolve) => setTimeout(() => resolve(CELESTIAL_CATALOG), 600));
}
