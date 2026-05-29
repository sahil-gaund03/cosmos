import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const FALLBACK_ANSWERS: Record<string, string> = {
  mars: "A Hohmann Transfer Orbit to Mars requires aligning the launch window when Mars is approximately 44 degrees ahead of Earth in its orbit. The transit duration is roughly 200–250 days with a delta-v budget of ~3.6 km/s for Trans-Mars Injection (TMI). Blue Origin's EscaPADE mission represents a dual-orbiter science mission designed to analyze Martian magnetosphere interactions with solar wind.",
  artemis: "NASA's Artemis II mission is the first crewed lunar flyby of the Orion spacecraft launched atop the Space Launch System (SLS) Block 1 rocket. The flight profile uses a hybrid free-return trajectory. Artemis III will target a landing site near the lunar South Pole to explore permanently shadowed craters containing water-ice deposits.",
  orbit: "Orbital mechanics rely on Kepler's laws. A low Earth orbit (LEO) operates at altitudes between 160–2,000 km with velocities of ~7.8 km/s and a period of 90 minutes. Transitioning between orbits requires a Hohmann transfer—applying two propulsive burns at perigee and apogee to raise altitudes efficiently.",
  blackhole: "Sagittarius A* (Sgr A*) is the supermassive black hole at the center of the Milky Way, possessing 4.3 million solar masses. Material orbiting Sgr A* in the accretion disk reaches velocities up to 30% the speed of light. Extreme gravitational lensing warps light rays, producing the characteristic glowing ring around the event horizon.",
  hubble: "The Hubble Space Telescope orbits at ~540 km. It features a 2.4-meter primary mirror and narrow-band filters like Hydrogen-alpha (656 nm), Oxygen-III (501 nm), and Sulfur-II (672 nm). These enable astronomers to map gas distributions and ionization states in deep-space nebulae.",
  iss: "The International Space Station orbits at an average altitude of 420 km and travels at 27,600 km/h. It completes 15.54 orbits per day. Main telemetry relays track structural vibration, cabin pressure, water recycling efficiency, and local magnetosphere fields.",
};

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are Nexus Cosmos, a highly intelligent space intelligence co-pilot. Use markdown formatting. Keep responses highly scientific, structured, and space-tech themed. Answer the user's prompt: ${prompt}`
        });

        if (response.text) {
          return NextResponse.json({ response: response.text });
        }
      } catch (aiErr) {
        console.error("Gemini API Error", aiErr);
      }
    }

    // Fallback Mock Assistant generator if API key is not present or fails
    await new Promise((resolve) => setTimeout(resolve, 800));

    const cleanPrompt = String(prompt).toLowerCase();
    let text = "Telemetry received. Analysis of prompt index did not match predefined registry filters. Searching deep-space database: Quantum fluctuations, dark matter matrices, and cosmological constants remain nominal. Please query specific nodes: **'Mars Transfer Orbit'**, **'Artemis payload'**, **'Black Hole horizon'**, or **'ISS telemetry'**.";

    if (cleanPrompt.includes("mars") || cleanPrompt.includes("transfer")) {
      text = FALLBACK_ANSWERS.mars;
    } else if (cleanPrompt.includes("artemis") || cleanPrompt.includes("lunar")) {
      text = FALLBACK_ANSWERS.artemis;
    } else if (cleanPrompt.includes("orbit") || cleanPrompt.includes("mechanic")) {
      text = FALLBACK_ANSWERS.orbit;
    } else if (cleanPrompt.includes("black hole") || cleanPrompt.includes("event horizon") || cleanPrompt.includes("sgr")) {
      text = FALLBACK_ANSWERS.blackhole;
    } else if (cleanPrompt.includes("hubble") || cleanPrompt.includes("viewfinder") || cleanPrompt.includes("spectrum")) {
      text = FALLBACK_ANSWERS.hubble;
    } else if (cleanPrompt.includes("iss") || cleanPrompt.includes("station") || cleanPrompt.includes("speed")) {
      text = FALLBACK_ANSWERS.iss;
    }

    return NextResponse.json({ response: text });

  } catch (err) {
    return NextResponse.json(
      { error: "TELEMETRY TRANSCEIVER FAILURE // CONNECTION TERMINATED" },
      { status: 500 }
    );
  }
}
