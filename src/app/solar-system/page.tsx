import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";
import SolarHUD from "@/components/solar/SolarHUD";

export const metadata: Metadata = {
  title: "Solar System Explorer | NEXUS COSMOS",
  description: "Interactive 3D solar system explorer with real-time WebGL planetary orbits, rotation, target zoom focus, and educational metrics.",
};

export default function SolarSystemPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.2em]">
            SYSTEM LEVEL: ALPHA // PHASE 7 ONLINE
          </span>
        </div>
        <h1 className="font-headline-display text-[28px] md:text-[36px] font-semibold text-on-surface uppercase tracking-tight">
          3D Planetary Orbit & Telemetry Explorer
        </h1>
        <p className="text-body-md text-on-surface-variant max-w-3xl">
          Visualizing orbits, radii, atmospheric conditions, and physical telemetry for the Sun and major solar system planets using a client-side WebGL simulation framework.
        </p>
      </div>

      {/* Main Interactive HUD Dashboard */}
      <SolarHUD />
    </SectionContainer>
  );
}

