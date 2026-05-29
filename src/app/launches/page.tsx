import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";
import LaunchesHUD from "@/components/launches/LaunchesHUD";

export const metadata: Metadata = {
  title: "Rocket Launch Intelligence | NEXUS COSMOS",
  description:
    "Real-time rocket launch count tracker, vehicle specifications, satellite launch pad maps, and live feeds from SpaceX, NASA, ISRO, and Blue Origin.",
};

export default function LaunchesPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.2em]">
            SYSTEM LEVEL: BETA // PHASE 3 ONLINE
          </span>
        </div>
        <h1 className="font-headline-display text-[28px] md:text-[36px] font-semibold text-on-surface uppercase tracking-tight">
          Rocket Launch Intelligence System
        </h1>
        <p className="text-body-md text-on-surface-variant max-w-3xl">
          Comprehensive telemetry tracking of global space flights. Monitor countdown times, explore launcher technical specifications, zoom in on satellite pad complexes, and watch live webcasts.
        </p>
      </div>

      {/* Main Orchestrator Dashboard */}
      <LaunchesHUD />
    </SectionContainer>
  );
}
