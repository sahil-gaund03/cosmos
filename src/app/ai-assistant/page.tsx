import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";
import AIChatConsole from "@/components/ai/AIChatConsole";

export const metadata: Metadata = {
  title: "AI Space Assistant | NEXUS COSMOS",
  description:
    "Interactive Gemini-powered AI Space Assistant. Query orbital trajectory calculations, NASA mission descriptions, and celestial object details in real-time.",
};

export default function AIAssistantPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.2em]">
            SYSTEM LEVEL: BETA // PHASE 6 ONLINE
          </span>
        </div>
        <h1 className="font-headline-display text-[28px] md:text-[36px] font-semibold text-on-surface uppercase tracking-tight">
          AI Space Assistant Command Center
        </h1>
        <p className="text-body-md text-on-surface-variant max-w-3xl">
          Interact with our Gemini-powered co-pilot. Submit queries regarding Hohmann transfer orbits, spacecraft payloads, Hawking radiation, or telemetry nodes to receive streamed scientific analysis.
        </p>
      </div>

      {/* Main AI Chat Console */}
      <div className="max-w-4xl mx-auto w-full">
        <AIChatConsole />
      </div>
    </SectionContainer>
  );
}
