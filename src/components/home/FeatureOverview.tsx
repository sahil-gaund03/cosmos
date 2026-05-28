"use client";

import { ISS_TELEMETRY } from "@/lib/constants";
import TelemetryCard from "@/components/ui/TelemetryCard";
import SectionContainer from "@/components/ui/SectionContainer";

export default function FeatureOverview() {
  return (
    <SectionContainer className="relative z-20 py-16 -mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {ISS_TELEMETRY.map((item, index) => (
          <TelemetryCard
            key={item.label}
            label={item.label}
            value={item.value}
            unit={item.unit}
            live={item.live}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
