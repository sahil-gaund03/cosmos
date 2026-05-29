// ============================================
// NEXUS COSMOS — Deep Space Timeline Intelligence Service
// Historical Archive of Humanity's Journey Beyond Earth
// ============================================

export type EraId = "space-race" | "shuttle-era" | "new-space-age";

export interface TimelineEra {
  id: EraId;
  name: string;
  dateRange: string;
  startYear: number;
  endYear: number | null; // null = ongoing
  description: string;
  icon: string; // Material Symbol name
  eventCount: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  displayDate: string; // Human-readable "Month DD, YYYY"
  year: number;
  era: EraId;
  description: string;
  significance: string;
  icon: string; // Material Symbol name
  agency: string;
  imageUrl?: string;
}

export interface TimelineMilestone {
  label: string;
  value: string;
  icon: string;
}

// ---- Era Definitions ----

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: "space-race",
    name: "The Space Race",
    dateRange: "1957 – 1972",
    startYear: 1957,
    endYear: 1972,
    description:
      "The era of first contact with the cosmos — superpower rivalry propelled humanity from the first artificial satellite to boot-prints on the Moon.",
    icon: "flag",
    eventCount: 4,
  },
  {
    id: "shuttle-era",
    name: "The Shuttle Era",
    dateRange: "1981 – 2011",
    startYear: 1981,
    endYear: 2011,
    description:
      "Reusable spacecraft, orbital telescopes, and the construction of a permanent human outpost in low-Earth orbit defined three decades of methodical expansion.",
    icon: "flight_takeoff",
    eventCount: 4,
  },
  {
    id: "new-space-age",
    name: "The New Space Age",
    dateRange: "2012 – Present",
    startYear: 2012,
    endYear: null,
    description:
      "Private launch providers, autonomous Mars rovers, and next-generation observatories have ushered in a commercial and scientific renaissance beyond Earth.",
    icon: "auto_awesome",
    eventCount: 7,
  },
];

// ---- Mock Event Archive ----

const MOCK_EVENTS: TimelineEvent[] = [
  // ===== ERA 1: THE SPACE RACE (1957-1972) =====
  {
    id: "sputnik-1",
    title: "Sputnik 1 — First Artificial Satellite",
    date: "1957-10-04T00:00:00Z",
    displayDate: "October 4, 1957",
    year: 1957,
    era: "space-race",
    description:
      "The Soviet Union launched Sputnik 1, a 58-cm polished metal sphere, into low-Earth orbit aboard an R-7 rocket. Its radio pulses were detected worldwide, confirming that humanity had placed an object in space for the first time. The event triggered the Space Race and catalyzed the creation of NASA.",
    significance:
      "Humanity's first object in orbit — the shot heard around the cosmos.",
    icon: "satellite_alt",
    agency: "Soviet Space Program",
  },
  {
    id: "vostok-1",
    title: "Vostok 1 — Yuri Gagarin Orbits Earth",
    date: "1961-04-12T00:00:00Z",
    displayDate: "April 12, 1961",
    year: 1961,
    era: "space-race",
    description:
      "Cosmonaut Yuri Alekseyevich Gagarin became the first human to journey into outer space, completing a single orbit of Earth aboard Vostok 1 in 108 minutes. His call sign 'Kedr' (Cedar) was broadcast live, and he ejected from the capsule at 7 km altitude, parachuting to a safe landing in Saratov Oblast. The flight proved human physiology could endure microgravity.",
    significance:
      "The first human being in space — 108 minutes that redefined our species.",
    icon: "public",
    agency: "Soviet Space Program",
  },
  {
    id: "apollo-11",
    title: "Apollo 11 — First Humans on the Moon",
    date: "1969-07-20T00:00:00Z",
    displayDate: "July 20, 1969",
    year: 1969,
    era: "space-race",
    description:
      "Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Eagle on the Sea of Tranquility while Michael Collins orbited above in Columbia. Armstrong's first step at 02:56 UTC was watched by an estimated 600 million people. The crew returned 21.5 kg of lunar samples and deployed seismic and laser-ranging experiments.",
    significance:
      "One small step — the defining achievement of the 20th century.",
    icon: "flag",
    agency: "NASA",
  },
  {
    id: "apollo-17",
    title: "Apollo 17 — Final Moon Mission",
    date: "1972-12-11T00:00:00Z",
    displayDate: "December 11, 1972",
    year: 1972,
    era: "space-race",
    description:
      "The last crewed mission to the lunar surface carried geologist Harrison Schmitt and Commander Eugene Cernan to the Taurus-Littrow valley. They spent over 22 hours on EVA, collected 110.5 kg of samples, and drove the Lunar Roving Vehicle 35.9 km. Cernan's final footprints remain on the Moon to this day.",
    significance:
      "The last human footprints on the Moon — a chapter left open for 50 years.",
    icon: "history",
    agency: "NASA",
  },

  // ===== ERA 2: THE SHUTTLE ERA (1981-2011) =====
  {
    id: "sts-1",
    title: "STS-1 — Space Shuttle Columbia",
    date: "1981-04-12T00:00:00Z",
    displayDate: "April 12, 1981",
    year: 1981,
    era: "shuttle-era",
    description:
      "Columbia became the first reusable orbital spacecraft to reach space, launching from Kennedy Space Center with astronauts John Young and Robert Crippen. The two-day maiden flight validated the Shuttle's thermal protection system and glide-landing capability. It opened an era of routine access to orbit.",
    significance:
      "The dawn of reusable spaceflight — wings in orbit for the first time.",
    icon: "flight_takeoff",
    agency: "NASA",
  },
  {
    id: "iss-construction",
    title: "ISS Construction Begins — Zarya Module",
    date: "1998-11-20T00:00:00Z",
    displayDate: "November 20, 1998",
    year: 1998,
    era: "shuttle-era",
    description:
      "A Russian Proton-K rocket launched the Zarya control module, the first component of the International Space Station. Two weeks later, STS-88 Endeavour attached the Unity node. Over the next 13 years, 15 partner nations assembled the football-field-sized laboratory in over 40 assembly flights.",
    significance:
      "The first piece of humanity's permanent outpost in orbit — a city among the stars.",
    icon: "space_dashboard",
    agency: "NASA / Roscosmos",
  },
  {
    id: "shuttle-program-ends",
    title: "Space Shuttle Program Ends — STS-135",
    date: "2011-07-21T00:00:00Z",
    displayDate: "July 21, 2011",
    year: 2011,
    era: "shuttle-era",
    description:
      "Atlantis touched down at Kennedy Space Center after a 13-day ISS resupply mission, ending 30 years and 135 flights of the Space Shuttle program. The fleet logged 542 million miles, carried 355 individuals from 16 countries, and built the International Space Station. The program's retirement cleared the runway for commercial crew vehicles.",
    significance:
      "End of an era — 135 missions, 542 million miles, and a legacy beyond measure.",
    icon: "history",
    agency: "NASA",
  },

  // ===== ERA 3: THE NEW SPACE AGE (2012-PRESENT) =====
  {
    id: "curiosity-landing",
    title: "Curiosity Rover Lands on Mars",
    date: "2012-08-06T00:00:00Z",
    displayDate: "August 6, 2012",
    year: 2012,
    era: "new-space-age",
    description:
      "NASA's Mars Science Laboratory mission delivered the Curiosity rover to Gale Crater using a revolutionary sky-crane descent system. The car-sized rover carried 10 scientific instruments and discovered ancient riverbeds, organic molecules, and seasonal methane variations — evidence that Mars once harbored conditions suitable for microbial life.",
    significance:
      "A nuclear-powered laboratory on Mars — proving the Red Planet was once habitable.",
    icon: "smart_toy",
    agency: "NASA / JPL",
  },
  {
    id: "spacex-booster-landing",
    title: "SpaceX First Orbital Booster Landing",
    date: "2015-12-22T00:00:00Z",
    displayDate: "December 22, 2015",
    year: 2015,
    era: "new-space-age",
    description:
      "A Falcon 9 first stage returned to Landing Zone 1 at Cape Canaveral after deploying 11 ORBCOMM satellites, marking the first-ever orbital-class rocket booster to land vertically. The achievement slashed launch costs and proved that rapid rocket reuse was commercially viable, fundamentally altering the economics of spaceflight.",
    significance:
      "Rockets that land themselves — the economics of space changed forever.",
    icon: "rocket_launch",
    agency: "SpaceX",
  },
  {
    id: "first-black-hole-image",
    title: "First Image of a Black Hole — M87*",
    date: "2019-04-10T00:00:00Z",
    displayDate: "April 10, 2019",
    year: 2019,
    era: "new-space-age",
    description:
      "The Event Horizon Telescope collaboration released the first direct image of a supermassive black hole in galaxy Messier 87, 55 million light-years away. Eight radio telescopes across the globe were synchronized to create an Earth-sized virtual dish, resolving the bright accretion ring surrounding a 6.5-billion-solar-mass singularity.",
    significance:
      "Seeing the unseeable — Einstein's shadow confirmed at cosmic scale.",
    icon: "auto_awesome",
    agency: "EHT Collaboration",
  },
  {
    id: "jwst-launch",
    title: "James Webb Space Telescope Launch",
    date: "2021-12-25T00:00:00Z",
    displayDate: "December 25, 2021",
    year: 2021,
    era: "new-space-age",
    description:
      "An Ariane 5 rocket launched JWST to the Sun-Earth L2 Lagrange point, 1.5 million km from Earth. The $10-billion infrared observatory features a 6.5-meter gold-coated mirror and a tennis-court-sized sunshield. Its first deep-field image revealed thousands of galaxies from the first 500 million years after the Big Bang.",
    significance:
      "The deepest infrared eye ever built — rewriting the origin story of the universe.",
    icon: "visibility",
    agency: "NASA / ESA / CSA",
  },
  {
    id: "artemis-1",
    title: "Artemis I — Uncrewed Moon Mission",
    date: "2022-11-16T00:00:00Z",
    displayDate: "November 16, 2022",
    year: 2022,
    era: "new-space-age",
    description:
      "NASA's Space Launch System rocket sent an uncrewed Orion capsule on a 25.5-day journey around the Moon and back, traveling 1.4 million miles. Artemis I validated the heat shield at lunar re-entry speeds of 24,500 mph and demonstrated the SLS as the most powerful rocket ever flown. It paved the way for crewed Artemis II.",
    significance:
      "Return to the Moon begins — the SLS roars to life after a 50-year hiatus.",
    icon: "rocket_launch",
    agency: "NASA",
  },
  {
    id: "chandrayaan-3",
    title: "Chandrayaan-3 — India Lands on the Moon",
    date: "2023-08-23T00:00:00Z",
    displayDate: "August 23, 2023",
    year: 2023,
    era: "new-space-age",
    description:
      "ISRO's Vikram lander touched down near the lunar south pole, making India the fourth country to soft-land on the Moon and the first to reach the south-polar region. The Pragyan rover deployed minutes later, detecting sulfur, aluminum, and other elements in the regolith. The mission was achieved at a fraction of the cost of comparable programs.",
    significance:
      "India reaches the lunar south pole — cost-effective exploration redefining access to space.",
    icon: "flag",
    agency: "ISRO",
  },
  {
    id: "starship-orbital-test",
    title: "SpaceX Starship Orbital Flight Test",
    date: "2024-03-14T00:00:00Z",
    displayDate: "March 14, 2024",
    year: 2024,
    era: "new-space-age",
    description:
      "SpaceX launched the fully stacked Starship — the tallest and most powerful rocket ever built — from Starbase, Boca Chica. The Super Heavy booster achieved stage separation, and the Starship upper stage reached orbital velocity before a controlled re-entry over the Indian Ocean. The test demonstrated propellant transfer ports and heat-shield performance at hypersonic speeds.",
    significance:
      "The largest rocket ever flown — opening the door to Mars colonization.",
    icon: "rocket_launch",
    agency: "SpaceX",
  },
];

// ---- Computed Milestone Stats ----

function computeMilestones(events: TimelineEvent[]): TimelineMilestone[] {
  const uniqueAgencies = new Set(events.map((e) => e.agency));
  const firstYear = Math.min(...events.map((e) => e.year));
  const lastYear = Math.max(...events.map((e) => e.year));

  return [
    {
      label: "Total Missions Cataloged",
      value: String(events.length),
      icon: "rocket_launch",
    },
    {
      label: "Years of Exploration",
      value: String(lastYear - firstYear),
      icon: "schedule",
    },
    {
      label: "Agencies Involved",
      value: String(uniqueAgencies.size),
      icon: "groups",
    },
    {
      label: "Milestones Achieved",
      value: String(events.length),
      icon: "flag",
    },
  ];
}

// ---- Public API ----

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  // In production this would fetch from a CMS or historical-data API.
  // For now we return the curated mock archive with a simulated latency.
  return new Promise((resolve) =>
    setTimeout(() => resolve(MOCK_EVENTS), 600)
  );
}

export async function getTimelineEras(): Promise<TimelineEra[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(TIMELINE_ERAS), 300)
  );
}

export async function getTimelineMilestones(): Promise<TimelineMilestone[]> {
  const events = await getTimelineEvents();
  return computeMilestones(events);
}

// Synchronous accessors for client-side usage (pre-loaded data)
export function getStaticEvents(): TimelineEvent[] {
  return MOCK_EVENTS;
}

export function getStaticEras(): TimelineEra[] {
  return TIMELINE_ERAS;
}

export function getStaticMilestones(): TimelineMilestone[] {
  return computeMilestones(MOCK_EVENTS);
}
