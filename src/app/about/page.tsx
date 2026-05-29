import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "About the Project & Technical Docs | NEXUS COSMOS",
  description:
    "Explore the architectural telemetry, software systems, and data flow mechanisms behind the NEXUS COSMOS AI-powered space intelligence platform.",
  keywords: [
    "space operating system documentation",
    "ISS tracking architecture",
    "WebGL astronomy calculations",
    "NASA API telemetry",
    "Gemini AI space logic",
  ],
  alternates: {
    canonical: "https://nexus-cosmos.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-10 max-w-6xl mx-auto z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-outline-variant/30 pb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.25em]">
            SYSTEM COMPENDIUM // DOCUMENTATION HUB
          </span>
        </div>
        <h1 className="font-[Sora] text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
          About NEXUS COSMOS
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          NEXUS COSMOS is a next-generation orbital control and space intelligence simulation console. We aggregate deep-space streams, live telemetry vectors, and AI-driven reasoning to create a cohesive dashboard of the cosmos.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Main Content Articles */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Article 1 */}
          <section className="glass-panel p-6 md:p-8 rounded-3xl border border-outline-variant/20 space-y-4">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider block">FEEDS & TELEMETRY</span>
            <h2 className="font-[Sora] text-xl md:text-2xl font-bold text-on-surface">
              How We Track the ISS in Real-Time
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              The International Space Station traverses the globe at 27,600 km/h, orbiting the Earth once every 92.9 minutes. NEXUS COSMOS queries public TLE (Two-Line Element) trackers via REST relays. The coordinates are calculated and mapped onto an interactive Leaflet mapping array on our <Link href="/iss-tracker" className="text-primary hover:underline font-semibold">Real-Time ISS Tracker</Link>.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Telemetry values (speed, altitude, latitude/longitude, and crew count) are parsed and rendered onto a simulated military radar interface using SVG-driven sweeps. This allows users to determine when the station is in sight.
            </p>
          </section>

          {/* Article 2 */}
          <section className="glass-panel p-6 md:p-8 rounded-3xl border border-outline-variant/20 space-y-4">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider block">VISUAL COMPUTING</span>
            <h2 className="font-[Sora] text-xl md:text-2xl font-bold text-on-surface">
              WebGL-Driven Orbital Mechanics
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              The <Link href="/solar-system" className="text-primary hover:underline font-semibold">3D Solar System Explorer</Link> is engineered using Three.js via React Three Fiber. In contrast to static graphics, our planets rotate on their relative axis tilts and progress along dynamic orbital paths calculated using Keplerian equations.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              High-resolution UV texture mapping, Saturnian ring math models, and atmospheric bloom shaders combine to render realistic physical planetary surfaces. Detailed dossiers contain planetary specifications retrieved from astronomical databases.
            </p>
          </section>

          {/* Article 3 */}
          <section className="glass-panel p-6 md:p-8 rounded-3xl border border-outline-variant/20 space-y-4">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider block">AI CO-PILOT LOGIC</span>
            <h2 className="font-[Sora] text-xl md:text-2xl font-bold text-on-surface">
              Gemini-Powered Space Exploration Chat
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              The <Link href="/ai-assistant" className="text-primary hover:underline font-semibold">AI Space Assistant</Link> serves as a digital co-pilot. Utilizing the Google Gemini v2 Large Language Model via secure API proxies, users can submit complex physics prompts (e.g., Hawking Radiation, Lagrange points, Hohmann trajectories) to receive scientific breakdowns.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              The chat interface supports real-time streaming, Markdown syntax formatting, and has a dedicated fallback system that operates offline in case of key rate limits.
            </p>
          </section>

          {/* Article 4 */}
          <section className="glass-panel p-6 md:p-8 rounded-3xl border border-outline-variant/20 space-y-4">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider block">SOLAR DYNAMICS</span>
            <h2 className="font-[Sora] text-xl md:text-2xl font-bold text-on-surface">
              Magnetosphere Telemetry & Solar Winds
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              The <Link href="/space-weather" className="text-primary hover:underline font-semibold">Space Weather Dashboard</Link> interfaces with real-time geomagnetic indices. Solar wind velocity readings, aurora occurrence probabilities, and NOAA solar flare triggers are mapped to live indicators so users can track space storms and solar flare events as they occur.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Credits */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50">
            <h3 className="font-[Sora] text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">
              System Modules
            </h3>
            <nav className="flex flex-col gap-2 text-xs font-semibold">
              <Link href="/nasa-gallery" className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-variant/20 hover:text-primary transition-all">
                <span>NASA GALLERY</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="/launches" className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-variant/20 hover:text-primary transition-all">
                <span>ROCKET LAUNCHES</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="/astronauts" className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-variant/20 hover:text-primary transition-all">
                <span>ASTRONAUT MANIFEST</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="/timeline" className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-variant/20 hover:text-primary transition-all">
                <span>SPACE TIMELINE</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </nav>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50 text-xs text-on-surface-variant/80 space-y-4">
            <h3 className="font-[Sora] text-[10px] font-bold text-tertiary uppercase tracking-wider">
              Data & API Attributions
            </h3>
            <p className="leading-relaxed">
              NEXUS COSMOS retrieves assets and parameters from several open databases. We extend our thanks and credit to:
            </p>
            <ul className="list-disc list-inside space-y-2 font-mono text-[10px]">
              <li>
                <a href="https://api.nasa.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  NASA APIs (APOD, NeoWs)
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Vercel Cloud Deploy
                </a>
              </li>
              <li>
                <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Three.js WebGL Engine
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
