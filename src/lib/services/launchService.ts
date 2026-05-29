// ============================================
// NEXUS COSMOS — Rocket Launch Intelligence Service
// ============================================

export interface LaunchpadInfo {
  name: string;
  latitude: number;
  longitude: number;
}

export interface RocketSpecsInfo {
  name: string;
  height: string;
  diameter: string;
  thrust: string;
  leoCapacity: string;
  stages: number;
  propellant: string;
  recoveryPlan: string;
}

export interface LaunchMission {
  id: string;
  name: string;
  provider: "NASA" | "SpaceX" | "ISRO" | "Blue Origin";
  windowStart: string; // ISO String
  status: "T-MINUS" | "HOLD" | "T-PLUS" | "COMPLETED";
  rocket: RocketSpecsInfo;
  launchpad: LaunchpadInfo;
  description: string;
  payload: {
    name: string;
    orbit: string;
    weight: string;
  };
  livestreamUrl?: string;
}

// Generate dynamic dates so the countdowns are always ticking down relative to the user's current session
const getDynamicLaunchDate = (daysAhead: number, hoursAhead: number, minsAhead: number) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(d.getHours() + hoursAhead);
  d.setMinutes(d.getMinutes() + minsAhead);
  d.setSeconds(0);
  return d.toISOString();
};

const MOCK_LAUNCHES: LaunchMission[] = [
  {
    id: "artemis-2",
    name: "Artemis II — Crewed Lunar Flyby",
    provider: "NASA",
    windowStart: getDynamicLaunchDate(2, 4, 12),
    status: "T-MINUS",
    description: "The first crewed lunar flight of the Orion spacecraft launched by the Space Launch System. Four astronauts will perform a lunar flyby and return safely.",
    rocket: {
      name: "SLS Block 1",
      height: "98.1 m",
      diameter: "8.4 m",
      thrust: "39,000 kN",
      leoCapacity: "95,000 kg",
      stages: 2,
      propellant: "Liquid Oxygen / Liquid Hydrogen (LOX/LH2)",
      recoveryPlan: "Expendable Launcher Core // Orion Crew Pod Recovery in Pacific",
    },
    launchpad: {
      name: "Launch Complex 39B, Kennedy Space Center, Florida",
      latitude: 28.6272,
      longitude: -80.6210,
    },
    payload: {
      name: "Orion Crew Spacecraft",
      orbit: "Trans-Lunar Injection (TLI)",
      weight: "25,848 kg",
    },
    livestreamUrl: "https://www.youtube.com/embed/21X5lGlDOfg", // NASA live channel placeholder
  },
  {
    id: "crew-10",
    name: "Crew-10 — ISS Expedition 73 Downlink",
    provider: "SpaceX",
    windowStart: getDynamicLaunchDate(5, 18, 30),
    status: "T-MINUS",
    description: "SpaceX Crew-10 mission will launch four crew members on a Crew Dragon spacecraft atop a Falcon 9 rocket to the International Space Station.",
    rocket: {
      name: "Falcon 9 Block 5",
      height: "70.0 m",
      diameter: "3.7 m",
      thrust: "7,607 kN",
      leoCapacity: "22,800 kg",
      stages: 2,
      propellant: "Liquid Oxygen / Rocket Propellant 1 (LOX/RP-1)",
      recoveryPlan: "Booster Landing at ASDS (Autonomous Spaceport Drone Ship) 'JRTI'",
    },
    launchpad: {
      name: "Launch Complex 39A, Kennedy Space Center, Florida",
      latitude: 28.6082,
      longitude: -80.6041,
    },
    payload: {
      name: "Crew Dragon 'Endeavour'",
      orbit: "Low Earth Orbit (LEO) // ISS Docking",
      weight: "12,050 kg",
    },
    livestreamUrl: "https://www.youtube.com/embed/2a_HCNp_a3c", // SpaceX live channel placeholder
  },
  {
    id: "gaganyaan-1",
    name: "Gaganyaan-1 — Indian Human Spaceflight",
    provider: "ISRO",
    windowStart: getDynamicLaunchDate(12, 1, 45),
    status: "T-MINUS",
    description: "The Gaganyaan-1 mission represents the first uncrewed demonstration flight of India's human spaceflight program inside the Gaganyaan capsule.",
    rocket: {
      name: "LVM3 (GSLV Mk III)",
      height: "43.5 m",
      diameter: "4.0 m",
      thrust: "10,200 kN",
      leoCapacity: "8,000 kg",
      stages: 3,
      propellant: "Solid Boosters / UDMH+N2O4 Core / Cryogenic Upper Stage",
      recoveryPlan: "Expendable Launch Vehicle // Capsule Ocean Splashdown",
    },
    launchpad: {
      name: "Second Launch Pad, Satish Dhawan Space Centre, Sriharikota",
      latitude: 13.7200,
      longitude: 80.2300,
    },
    payload: {
      name: "Gaganyaan Crew Module",
      orbit: "Low Earth Orbit (LEO)",
      weight: "3,700 kg",
    },
    livestreamUrl: "https://www.youtube.com/embed/21X5lGlDOfg",
  },
  {
    id: "new-glenn-ns29",
    name: "EscaPADE — New Glenn Inaugural Flight",
    provider: "Blue Origin",
    windowStart: getDynamicLaunchDate(19, 9, 15),
    status: "HOLD",
    description: "Launching NASA's twin EscaPADE spacecraft to Mars using the large-capacity reusable New Glenn launcher. It tracks Martian atmospheric magnetic feeds.",
    rocket: {
      name: "New Glenn",
      height: "98.0 m",
      diameter: "7.0 m",
      thrust: "17,000 kN",
      leoCapacity: "45,000 kg",
      stages: 2,
      propellant: "Liquid Oxygen / Liquid Natural Gas (LOX/LNG)",
      recoveryPlan: "Booster Recovery on offshore ocean landing platform 'L.P. Jacklyn'",
    },
    launchpad: {
      name: "Space Launch Complex 36, Cape Canaveral, Florida",
      latitude: 28.4775,
      longitude: -80.5422,
    },
    payload: {
      name: "EscaPADE Mars Orbiters (Blue & Gold)",
      orbit: "Heliocentric Mars Transfer Orbit",
      weight: "1,100 kg (Combined)",
    },
    livestreamUrl: "https://www.youtube.com/embed/21X5lGlDOfg",
  },
];

export async function getUpcomingLaunches(): Promise<LaunchMission[]> {
  try {
    // Attempt to query LLDev public upcoming space missions API
    // We add a short timeout to prevent blocking in case the API is unresponsive
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=4",
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("API rate-limited or unavailable");
    const data = await response.json();
    
    // Parse LLDev structure into our clean UI model
    return data.results.map((launch: any, idx: number) => {
      // Map names to match providers
      let provider: LaunchMission["provider"] = "SpaceX";
      const agencyName = launch.launch_service_provider?.name?.toLowerCase() || "";
      if (agencyName.includes("nasa")) provider = "NASA";
      else if (agencyName.includes("isro")) provider = "ISRO";
      else if (agencyName.includes("blue origin")) provider = "Blue Origin";

      // Reconstruct clean object structure
      const parsedLaunch: LaunchMission = {
        id: launch.id || `api-launch-${idx}`,
        name: launch.name || "Classified Orbital Flight",
        provider,
        windowStart: launch.window_start || getDynamicLaunchDate(1 + idx, 2, 0),
        status: launch.status?.abbrev === "Hold" ? "HOLD" : "T-MINUS",
        description: launch.mission?.description || "Space intelligence payload deployment into specified orbital altitude.",
        rocket: {
          name: launch.rocket?.configuration?.name || "Tactical Heavy Lifter",
          height: "70.0 m",
          diameter: "5.0 m",
          thrust: "8,500 kN",
          leoCapacity: "25,000 kg",
          stages: 2,
          propellant: "Liquid Fuel Cryogenic",
          recoveryPlan: launch.rocket?.configuration?.reusable
            ? "Booster landing scheduled at pad or ocean recovery ship"
            : "Expendable vehicle launch profile",
        },
        launchpad: {
          name: launch.pad?.name || "Cape Canaveral Launchpad",
          latitude: parseFloat(launch.pad?.latitude || 28.5),
          longitude: parseFloat(launch.pad?.longitude || -80.5),
        },
        payload: {
          name: launch.mission?.name || "COSMIC_SAT_CARRIER",
          orbit: launch.mission?.orbit?.name || "Low Earth Orbit (LEO)",
          weight: "TBD",
        },
        livestreamUrl: launch.webcast_live ? launch.webcast_live : "https://www.youtube.com/embed/21X5lGlDOfg",
      };
      return parsedLaunch;
    });

  } catch {
    // If the API call fails or times out, return our highly detailed mock database
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_LAUNCHES), 600));
  }
}
