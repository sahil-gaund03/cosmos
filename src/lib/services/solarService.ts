// ============================================
// NEXUS COSMOS — Solar System Physics Service
// ============================================

export interface AtmosphereGas {
  gas: string;
  percentage: number;
}

export interface PlanetPhysics {
  id: string;
  name: string;
  diameter: string;
  mass: string;
  orbitPeriod: string;
  dayLength: string;
  gravity: string;
  temperature: string;
  moons: number;
  atmosphere: AtmosphereGas[];
  distanceFromSun: string;
  funFacts: string[];
  nasaInfo: string;
  
  // Three.js Rendering parameters
  radius: number; // visual scale size
  orbitRadius: number; // orbit distance in scene
  orbitSpeed: number; // speed coefficient
  color: string; // Hexadecimal hex representation for Three.js material
  hasRings?: boolean;
}

const PLANETARY_DATABASE: PlanetPhysics[] = [
  {
    id: "sun",
    name: "The Sun",
    diameter: "1,392,700 km",
    mass: "333,000 Earths",
    orbitPeriod: "N/A (Galactic Center)",
    dayLength: "25-35 Earth Days",
    gravity: "274.0 m/s²",
    temperature: "5,500°C (Surface)",
    moons: 0,
    atmosphere: [
      { gas: "Hydrogen (H)", percentage: 73.4 },
      { gas: "Helium (He)", percentage: 24.8 },
      { gas: "Oxygen (O)", percentage: 0.77 },
    ],
    distanceFromSun: "0 km (Center)",
    funFacts: [
      "Accounts for 99.86% of the mass in the solar system.",
      "A million Earths could fit inside the Sun.",
      "Will eventually become a white dwarf."
    ],
    nasaInfo: "NASA's Parker Solar Probe has 'touched' the Sun, flying through its upper atmosphere to sample particles and magnetic fields.",
    radius: 2.2,
    orbitRadius: 0,
    orbitSpeed: 0,
    color: "#f59e0b",
  },
  {
    id: "mercury",
    name: "Mercury",
    diameter: "4,879 km",
    mass: "0.055 Earths",
    orbitPeriod: "88 Earth Days",
    dayLength: "59 Earth Days",
    gravity: "3.7 m/s²",
    temperature: "-180°C to 430°C",
    moons: 0,
    atmosphere: [
      { gas: "Oxygen (O2)", percentage: 42.0 },
      { gas: "Sodium (Na)", percentage: 29.0 },
      { gas: "Hydrogen (H2)", percentage: 22.0 },
    ],
    distanceFromSun: "57.9 million km",
    funFacts: [
      "The smallest planet in the solar system.",
      "Has a massive iron core that takes up 85% of its radius.",
      "Experiences the most extreme temperature fluctuations."
    ],
    nasaInfo: "NASA's MESSENGER spacecraft mapped 100% of Mercury's surface and discovered water ice in its permanently shadowed craters.",
    radius: 0.35,
    orbitRadius: 4.5,
    orbitSpeed: 0.03,
    color: "#8f8fa0",
  },
  {
    id: "venus",
    name: "Venus",
    diameter: "12,104 km",
    mass: "0.815 Earths",
    orbitPeriod: "225 Earth Days",
    dayLength: "243 Earth Days",
    gravity: "8.87 m/s²",
    temperature: "460°C (Average)",
    moons: 0,
    atmosphere: [
      { gas: "Carbon Dioxide (CO2)", percentage: 96.5 },
      { gas: "Nitrogen (N2)", percentage: 3.5 },
    ],
    distanceFromSun: "108.2 million km",
    funFacts: [
      "Spins backwards compared to most other planets.",
      "The hottest planet due to a runaway greenhouse effect.",
      "Atmospheric pressure is 92 times that of Earth."
    ],
    nasaInfo: "NASA has selected two upcoming missions to Venus, DAVINCI and VERITAS, to study its atmosphere and geologic features.",
    radius: 0.55,
    orbitRadius: 6.5,
    orbitSpeed: 0.015,
    color: "#e3a857",
  },
  {
    id: "earth",
    name: "Earth",
    diameter: "12,756 km",
    mass: "1.0 Earth",
    orbitPeriod: "365.25 Days",
    dayLength: "24 Hours",
    gravity: "9.81 m/s²",
    temperature: "-88°C to 58°C",
    moons: 1,
    atmosphere: [
      { gas: "Nitrogen (N2)", percentage: 78.1 },
      { gas: "Oxygen (O2)", percentage: 20.9 },
      { gas: "Argon (Ar)", percentage: 0.93 },
    ],
    distanceFromSun: "149.6 million km (1 AU)",
    funFacts: [
      "The only known planet to harbor life.",
      "Earth's rotation is gradually slowing down.",
      "The densest planet in the Solar System."
    ],
    nasaInfo: "NASA operates a fleet of Earth-observing satellites studying climate change, weather patterns, and environmental health.",
    radius: 0.6,
    orbitRadius: 8.8,
    orbitSpeed: 0.01,
    color: "#bbc3ff",
  },
  {
    id: "mars",
    name: "Mars",
    diameter: "6,792 km",
    mass: "0.107 Earths",
    orbitPeriod: "687 Earth Days",
    dayLength: "24.6 Hours",
    gravity: "3.71 m/s²",
    temperature: "-153°C to 20°C",
    moons: 2,
    atmosphere: [
      { gas: "Carbon Dioxide (CO2)", percentage: 95.3 },
      { gas: "Nitrogen (N2)", percentage: 2.7 },
      { gas: "Argon (Ar)", percentage: 1.6 },
    ],
    distanceFromSun: "227.9 million km",
    funFacts: [
      "Home to Olympus Mons, the tallest volcano in the solar system.",
      "Has two tiny moons: Phobos and Deimos.",
      "Sunsets on Mars appear blue."
    ],
    nasaInfo: "NASA's Perseverance rover and Ingenuity helicopter are currently exploring Jezero Crater to seek signs of ancient microbial life.",
    radius: 0.45,
    orbitRadius: 11.5,
    orbitSpeed: 0.008,
    color: "#ffb4ab",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    diameter: "142,984 km",
    mass: "317.8 Earths",
    orbitPeriod: "11.86 Earth Years",
    dayLength: "9.9 Hours",
    gravity: "24.79 m/s²",
    temperature: "-110°C (Average)",
    moons: 95,
    atmosphere: [
      { gas: "Hydrogen (H2)", percentage: 89.8 },
      { gas: "Helium (He)", percentage: 10.2 },
    ],
    distanceFromSun: "778.5 million km",
    funFacts: [
      "The Great Red Spot is a storm that has raged for centuries.",
      "Has the shortest day of all the planets.",
      "Protects inner planets by deflecting comets."
    ],
    nasaInfo: "NASA's Juno spacecraft is orbiting Jupiter, plunging deep into the planet's atmosphere to study its composition and magnetic field.",
    radius: 1.3,
    orbitRadius: 15.5,
    orbitSpeed: 0.003,
    color: "#d4a373",
  },
  {
    id: "saturn",
    name: "Saturn",
    diameter: "120,536 km",
    mass: "95.2 Earths",
    orbitPeriod: "29.45 Earth Years",
    dayLength: "10.7 Hours",
    gravity: "10.44 m/s²",
    temperature: "-140°C (Average)",
    moons: 146,
    atmosphere: [
      { gas: "Hydrogen (H2)", percentage: 96.3 },
      { gas: "Helium (He)", percentage: 3.25 },
    ],
    distanceFromSun: "1.43 billion km",
    funFacts: [
      "Could float in water because its density is so low.",
      "Rings are made mostly of chunks of ice and rock.",
      "Titan, a moon of Saturn, has liquid methane lakes."
    ],
    nasaInfo: "NASA's Cassini mission spent 13 years orbiting Saturn, providing unprecedented discoveries before plunging into the planet's atmosphere.",
    radius: 1.05,
    orbitRadius: 20.0,
    orbitSpeed: 0.0012,
    color: "#e9c46a",
    hasRings: true,
  },
  {
    id: "uranus",
    name: "Uranus",
    diameter: "51,118 km",
    mass: "14.5 Earths",
    orbitPeriod: "84.02 Earth Years",
    dayLength: "17.2 Hours",
    gravity: "8.69 m/s²",
    temperature: "-195°C (Average)",
    moons: 28,
    atmosphere: [
      { gas: "Hydrogen (H2)", percentage: 82.5 },
      { gas: "Helium (He)", percentage: 15.2 },
      { gas: "Methane (CH4)", percentage: 2.3 },
    ],
    distanceFromSun: "2.87 billion km",
    funFacts: [
      "Rotates on its side with an axial tilt of 98 degrees.",
      "Often referred to as an ice giant.",
      "First planet found with the aid of a telescope."
    ],
    nasaInfo: "NASA's Voyager 2 is the only spacecraft to have visited Uranus, conducting a historic flyby in 1986.",
    radius: 0.8,
    orbitRadius: 24.5,
    orbitSpeed: 0.0005,
    color: "#83c5be",
  },
  {
    id: "neptune",
    name: "Neptune",
    diameter: "49,528 km",
    mass: "17.1 Earths",
    orbitPeriod: "164.79 Earth Years",
    dayLength: "16.1 Hours",
    gravity: "11.15 m/s²",
    temperature: "-200°C (Average)",
    moons: 16,
    atmosphere: [
      { gas: "Hydrogen (H2)", percentage: 80.0 },
      { gas: "Helium (He)", percentage: 19.0 },
      { gas: "Methane (CH4)", percentage: 1.5 },
    ],
    distanceFromSun: "4.50 billion km",
    funFacts: [
      "Has the strongest supersonic winds in the solar system.",
      "It takes 165 Earth years to complete one orbit.",
      "Was discovered via mathematical prediction rather than observation."
    ],
    nasaInfo: "NASA's James Webb Space Telescope recently captured the clearest view of Neptune's rings in more than 30 years.",
    radius: 0.8,
    orbitRadius: 28.5,
    orbitSpeed: 0.0002,
    color: "#4895ef",
  },
];

export async function getPlanets(): Promise<PlanetPhysics[]> {
  return new Promise((resolve) => setTimeout(() => resolve(PLANETARY_DATABASE), 400));
}
