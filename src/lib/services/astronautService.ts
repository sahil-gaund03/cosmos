// ============================================
// NEXUS COSMOS — Astronaut Intelligence Service
// Crew Manifest & Orbital Personnel Tracking
// ============================================

export type Agency = "NASA" | "ESA" | "ROSCOSMOS" | "JAXA" | "CNSA" | "CSA";

export interface SpaceMission {
  id: string;
  name: string;
  vehicle: string;
  launchDate: string;
  endDate?: string;
  durationDays: number;
  role: string;
  destination: string;
}

export interface Astronaut {
  id: string;
  name: string;
  nationality: string;
  nationalityFlag: string;
  agency: Agency;
  currentMission: string | null;
  totalTimeInSpace: number; // days
  spacewalks: number;
  spacewalkHours: number;
  bio: string;
  imageUrl: string;
  isCurrentlyInOrbit: boolean;
  rank: string;
  missions: SpaceMission[];
  specialization: string;
  orbitStartDate?: string; // ISO string for current orbit start
}

export interface AstronautStats {
  totalCrewInOrbit: number;
  totalSpacewalkHoursAll: number;
  nationsRepresented: number;
  activeMissions: number;
  totalMissionsCompleted: number;
  averageDaysInSpace: number;
}

// ---- Mock Astronaut Database ----

const MOCK_ASTRONAUTS: Astronaut[] = [
  {
    id: "ast-001",
    name: "Matthew Dominick",
    nationality: "American",
    nationalityFlag: "🇺🇸",
    agency: "NASA",
    currentMission: "ISS Expedition 71",
    totalTimeInSpace: 216,
    spacewalks: 4,
    spacewalkHours: 26.5,
    bio: "Commander Matthew Dominick is a NASA astronaut and U.S. Navy fighter pilot with over 1,600 hours of flight time in 28 aircraft types. Selected as a NASA astronaut in 2017, he launched aboard SpaceX Crew-8 and serves as Commander of the International Space Station for Expedition 71.",
    imageUrl: "/images/astronauts/dominick.jpg",
    isCurrentlyInOrbit: true,
    rank: "Commander",
    specialization: "Flight Engineering & Orbital Maneuvers",
    orbitStartDate: new Date(Date.now() - 86_400_000 * 142).toISOString(),
    missions: [
      {
        id: "m-001a",
        name: "SpaceX Crew-8",
        vehicle: "Crew Dragon Endeavour",
        launchDate: "2024-03-04",
        durationDays: 216,
        role: "Commander",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-002",
    name: "Jeanette Epps",
    nationality: "American",
    nationalityFlag: "🇺🇸",
    agency: "NASA",
    currentMission: "ISS Expedition 71",
    totalTimeInSpace: 188,
    spacewalks: 2,
    spacewalkHours: 14.2,
    bio: "Dr. Jeanette Epps is a NASA astronaut and former CIA technical intelligence officer. She holds a Ph.D. in aerospace engineering from the University of Maryland. Flying aboard Boeing Starliner-1, she became the first African American crew member to live long-term aboard the ISS.",
    imageUrl: "/images/astronauts/epps.jpg",
    isCurrentlyInOrbit: true,
    rank: "Flight Engineer",
    specialization: "Technical Intelligence & Materials Science",
    orbitStartDate: new Date(Date.now() - 86_400_000 * 98).toISOString(),
    missions: [
      {
        id: "m-002a",
        name: "Boeing Starliner CFT-1",
        vehicle: "Starliner Calypso",
        launchDate: "2024-06-05",
        durationDays: 188,
        role: "Mission Specialist",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-003",
    name: "Alexander Grebenkin",
    nationality: "Russian",
    nationalityFlag: "🇷🇺",
    agency: "ROSCOSMOS",
    currentMission: "ISS Expedition 71",
    totalTimeInSpace: 312,
    spacewalks: 6,
    spacewalkHours: 39.1,
    bio: "Cosmonaut Alexander Grebenkin is a ROSCOSMOS veteran who previously served on Expedition 65. With extensive EVA experience, he specializes in external station maintenance and systems repair. He holds the rank of Colonel in the Russian Air Force.",
    imageUrl: "/images/astronauts/grebenkin.jpg",
    isCurrentlyInOrbit: true,
    rank: "Flight Engineer",
    specialization: "EVA Operations & Station Maintenance",
    orbitStartDate: new Date(Date.now() - 86_400_000 * 165).toISOString(),
    missions: [
      {
        id: "m-003a",
        name: "Soyuz MS-24",
        vehicle: "Soyuz MS-24",
        launchDate: "2023-09-15",
        durationDays: 180,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-003b",
        name: "SpaceX Crew-8",
        vehicle: "Crew Dragon Endeavour",
        launchDate: "2024-03-04",
        durationDays: 132,
        role: "Mission Specialist",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-004",
    name: "Satoshi Furukawa",
    nationality: "Japanese",
    nationalityFlag: "🇯🇵",
    agency: "JAXA",
    currentMission: "ISS Expedition 71",
    totalTimeInSpace: 532,
    spacewalks: 3,
    spacewalkHours: 18.7,
    bio: "Dr. Satoshi Furukawa is a JAXA astronaut and surgeon specializing in gastrointestinal medicine. He first flew to the ISS aboard Soyuz TMA-02M in 2011, conducting medical experiments and operating the Japanese Kibo laboratory module. He returned for his second long-duration mission in 2024.",
    imageUrl: "/images/astronauts/furukawa.jpg",
    isCurrentlyInOrbit: true,
    rank: "Flight Engineer",
    specialization: "Biomedical Research & Kibo Module Operations",
    orbitStartDate: new Date(Date.now() - 86_400_000 * 110).toISOString(),
    missions: [
      {
        id: "m-004a",
        name: "Soyuz TMA-02M / Expedition 28/29",
        vehicle: "Soyuz TMA-02M",
        launchDate: "2011-06-08",
        durationDays: 167,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-004b",
        name: "Soyuz MS-25 / Expedition 70/71",
        vehicle: "Soyuz MS-25",
        launchDate: "2024-03-23",
        durationDays: 365,
        role: "Flight Engineer",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-005",
    name: "Andreas Mogensen",
    nationality: "Danish",
    nationalityFlag: "🇩🇰",
    agency: "ESA",
    currentMission: null,
    totalTimeInSpace: 210,
    spacewalks: 1,
    spacewalkHours: 7.0,
    bio: "Andreas Mogensen is an ESA astronaut and the first Dane in space. With a background in aerospace engineering from Imperial College London and the University of Texas at Austin, he served as Commander of the ISS Expedition 70, carrying out extensive European research programs.",
    imageUrl: "/images/astronauts/mogensen.jpg",
    isCurrentlyInOrbit: false,
    rank: "Commander",
    specialization: "Robotics & European Research Payloads",
    missions: [
      {
        id: "m-005a",
        name: "Soyuz TMA-18M (iriss)",
        vehicle: "Soyuz TMA-18M",
        launchDate: "2015-09-02",
        durationDays: 10,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-005b",
        name: "SpaceX Crew-7 / Expedition 69/70",
        vehicle: "Crew Dragon Endurance",
        launchDate: "2023-08-26",
        durationDays: 200,
        role: "Commander",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-006",
    name: "Wang Yaping",
    nationality: "Chinese",
    nationalityFlag: "🇨🇳",
    agency: "CNSA",
    currentMission: null,
    totalTimeInSpace: 197,
    spacewalks: 1,
    spacewalkHours: 6.5,
    bio: "Wang Yaping is a CNSA taikonaut and the first Chinese woman to perform a spacewalk. A former military transport pilot, she flew aboard Shenzhou 10 and Shenzhou 13, conducting science lectures from the Tiangong space station that were broadcast to millions of Chinese students.",
    imageUrl: "/images/astronauts/yaping.jpg",
    isCurrentlyInOrbit: false,
    rank: "Mission Specialist",
    specialization: "Science Communication & Orbital Research",
    missions: [
      {
        id: "m-006a",
        name: "Shenzhou 10",
        vehicle: "Shenzhou 10",
        launchDate: "2013-06-11",
        durationDays: 15,
        role: "Mission Specialist",
        destination: "Tiangong-1",
      },
      {
        id: "m-006b",
        name: "Shenzhou 13",
        vehicle: "Shenzhou 13",
        launchDate: "2021-10-16",
        durationDays: 182,
        role: "Mission Specialist",
        destination: "Tiangong Space Station",
      },
    ],
  },
  {
    id: "ast-007",
    name: "Oleg Kononenko",
    nationality: "Russian",
    nationalityFlag: "🇷🇺",
    agency: "ROSCOSMOS",
    currentMission: null,
    totalTimeInSpace: 1_110,
    spacewalks: 7,
    spacewalkHours: 46.1,
    bio: "Oleg Kononenko is a ROSCOSMOS cosmonaut and the all-time record holder for the most cumulative days spent in space. Over five missions to the ISS, he has logged over 1,110 days in orbit, surpassing Gennady Padalka's previous record in February 2024.",
    imageUrl: "/images/astronauts/kononenko.jpg",
    isCurrentlyInOrbit: false,
    rank: "Commander",
    specialization: "Long-Duration Spaceflight & Systems Engineering",
    missions: [
      {
        id: "m-007a",
        name: "Soyuz TMA-12 / Expedition 17",
        vehicle: "Soyuz TMA-12",
        launchDate: "2008-04-08",
        durationDays: 199,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-007b",
        name: "Soyuz TMA-03M / Expedition 30/31",
        vehicle: "Soyuz TMA-03M",
        launchDate: "2011-12-21",
        durationDays: 191,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-007c",
        name: "Soyuz TMA-14M / Expedition 41/42",
        vehicle: "Soyuz TMA-14M",
        launchDate: "2014-09-26",
        durationDays: 169,
        role: "Commander",
        destination: "ISS",
      },
      {
        id: "m-007d",
        name: "Soyuz MS-11 / Expedition 58/59",
        vehicle: "Soyuz MS-11",
        launchDate: "2018-12-03",
        durationDays: 203,
        role: "Commander",
        destination: "ISS",
      },
      {
        id: "m-007e",
        name: "Soyuz MS-24 / Expedition 70/71",
        vehicle: "Soyuz MS-24",
        launchDate: "2023-09-15",
        durationDays: 374,
        role: "Commander",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-008",
    name: "Jeremy Hansen",
    nationality: "Canadian",
    nationalityFlag: "🇨🇦",
    agency: "CSA",
    currentMission: null,
    totalTimeInSpace: 0,
    spacewalks: 0,
    spacewalkHours: 0,
    bio: "Colonel Jeremy Hansen is a CSA astronaut and former CF-18 fighter pilot selected for the Artemis II mission — humanity's first crewed mission beyond low Earth orbit since Apollo 17. He will become the first Canadian to fly to the Moon.",
    imageUrl: "/images/astronauts/hansen.jpg",
    isCurrentlyInOrbit: false,
    rank: "Mission Specialist",
    specialization: "Lunar Operations & Fighter Aviation",
    missions: [
      {
        id: "m-008a",
        name: "Artemis II — Lunar Flyby",
        vehicle: "SLS Block 1 / Orion",
        launchDate: "2025-09-01",
        durationDays: 10,
        role: "Mission Specialist",
        destination: "Lunar Free-Return Trajectory",
      },
    ],
  },
  {
    id: "ast-009",
    name: "Samantha Cristoforetti",
    nationality: "Italian",
    nationalityFlag: "🇮🇹",
    agency: "ESA",
    currentMission: null,
    totalTimeInSpace: 370,
    spacewalks: 1,
    spacewalkHours: 7.0,
    bio: "Samantha Cristoforetti is an ESA astronaut, Italian Air Force pilot, and engineer. She held the record for the longest single spaceflight by a European astronaut after her first mission on Expedition 42/43. On her second flight, she became the first European woman to command the ISS.",
    imageUrl: "/images/astronauts/cristoforetti.jpg",
    isCurrentlyInOrbit: false,
    rank: "Commander",
    specialization: "Station Command & Crew Operations",
    missions: [
      {
        id: "m-009a",
        name: "Soyuz TMA-15M / Expedition 42/43 (Futura)",
        vehicle: "Soyuz TMA-15M",
        launchDate: "2014-11-24",
        durationDays: 200,
        role: "Flight Engineer",
        destination: "ISS",
      },
      {
        id: "m-009b",
        name: "SpaceX Crew-4 / Expedition 67 (Minerva)",
        vehicle: "Crew Dragon Freedom",
        launchDate: "2022-04-27",
        durationDays: 170,
        role: "Mission Specialist / Commander",
        destination: "ISS",
      },
    ],
  },
  {
    id: "ast-010",
    name: "Ye Guangfu",
    nationality: "Chinese",
    nationalityFlag: "🇨🇳",
    agency: "CNSA",
    currentMission: null,
    totalTimeInSpace: 187,
    spacewalks: 2,
    spacewalkHours: 12.3,
    bio: "Ye Guangfu is a CNSA taikonaut who flew aboard Shenzhou 13 as part of the second crewed mission to the Chinese Space Station. A former People's Liberation Army Air Force fighter pilot, he trained at ESA's European Astronaut Centre as part of cooperative exchange programs.",
    imageUrl: "/images/astronauts/guangfu.jpg",
    isCurrentlyInOrbit: false,
    rank: "Flight Engineer",
    specialization: "International Cooperation & Station Assembly",
    missions: [
      {
        id: "m-010a",
        name: "Shenzhou 13 / Tiangong",
        vehicle: "Shenzhou 13",
        launchDate: "2021-10-16",
        durationDays: 182,
        role: "Flight Engineer",
        destination: "Tiangong Space Station",
      },
    ],
  },
];

// ---- API Integration ----

interface OpenNotifyResponse {
  message: string;
  number: number;
  people: Array<{
    name: string;
    craft: string;
  }>;
}

export async function getAstronauts(): Promise<Astronaut[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch("http://api.open-notify.org/astros.json", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("Open Notify API unavailable");

    const data: OpenNotifyResponse = await response.json();

    // Cross-reference live crew with our database and enrich
    const liveNames = new Set(data.people.map((p) => p.name.toLowerCase()));
    const enriched = MOCK_ASTRONAUTS.map((ast) => {
      const isLive = liveNames.has(ast.name.toLowerCase());
      return {
        ...ast,
        isCurrentlyInOrbit: isLive || ast.isCurrentlyInOrbit,
      };
    });

    // Add any live crew we don't already have in our database
    data.people.forEach((person, idx) => {
      const exists = enriched.some(
        (a) => a.name.toLowerCase() === person.name.toLowerCase()
      );
      if (!exists) {
        enriched.push({
          id: `ast-live-${idx}`,
          name: person.name,
          nationality: "International",
          nationalityFlag: "🌍",
          agency: "NASA",
          currentMission: person.craft,
          totalTimeInSpace: 0,
          spacewalks: 0,
          spacewalkHours: 0,
          bio: `Currently serving aboard ${person.craft}. Detailed dossier pending intelligence downlink.`,
          imageUrl: "/images/astronauts/default.jpg",
          isCurrentlyInOrbit: true,
          rank: "Crew Member",
          specialization: "Classified",
          missions: [],
          orbitStartDate: new Date().toISOString(),
        });
      }
    });

    return enriched;
  } catch {
    // Fallback to our highly detailed mock database
    return new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_ASTRONAUTS), 600)
    );
  }
}

export async function getCurrentCrewInOrbit(): Promise<Astronaut[]> {
  const all = await getAstronauts();
  return all.filter((a) => a.isCurrentlyInOrbit);
}

export async function getAstronautStats(): Promise<AstronautStats> {
  const all = await getAstronauts();
  const inOrbit = all.filter((a) => a.isCurrentlyInOrbit);
  const nations = new Set(all.map((a) => a.nationality));
  const activeMissions = new Set(
    inOrbit.map((a) => a.currentMission).filter(Boolean)
  );

  const totalSpacewalkHours = all.reduce(
    (sum, a) => sum + a.spacewalkHours,
    0
  );
  const totalMissions = all.reduce((sum, a) => sum + a.missions.length, 0);
  const avgDays =
    all.length > 0
      ? Math.round(
          all.reduce((sum, a) => sum + a.totalTimeInSpace, 0) / all.length
        )
      : 0;

  return {
    totalCrewInOrbit: inOrbit.length,
    totalSpacewalkHoursAll: Math.round(totalSpacewalkHours * 10) / 10,
    nationsRepresented: nations.size,
    activeMissions: activeMissions.size,
    totalMissionsCompleted: totalMissions,
    averageDaysInSpace: avgDays,
  };
}
