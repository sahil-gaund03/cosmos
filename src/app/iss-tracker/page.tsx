import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";
import ISSTrackingHUD from "@/components/tracking/ISSTrackingHUD";

export const metadata: Metadata = {
  title: "ISS Tracking System | NEXUS COSMOS",
  description:
    "Real-time International Space Station co-orbital tracking and downlink telemetry. Live orbital position updates, mapping tiles, and mission control logs.",
};

export default function ISSTrackerPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.2em]">
            SYSTEM LEVEL: ALPHA // PHASE 2 ONLINE
          </span>
        </div>
        <h1 className="font-headline-display text-[28px] md:text-[36px] font-semibold text-on-surface uppercase tracking-tight">
          Co-Orbital Platform Telemetry Hub
        </h1>
        <p className="text-body-md text-on-surface-variant max-w-3xl">
          Tracking the International Space Station in real-time. Live coordinates, speed, and altitude telemetry derived from NASA telecommunications relays.
        </p>
      </div>

      {/* Main Interactive HUD Dashboard */}
      <ISSTrackingHUD />
    </SectionContainer>
  );
}
