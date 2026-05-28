import HeroSection from "@/components/home/HeroSection";
import FeatureOverview from "@/components/home/FeatureOverview";
import ISSPreviewSection from "@/components/home/ISSPreviewSection";
import NASAGalleryPreview from "@/components/home/NASAGalleryPreview";
import AIAssistantPreview from "@/components/home/AIAssistantPreview";
import TelemetryPreview from "@/components/home/TelemetryPreview";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. ISS Telemetry Overview (overlaps hero) */}
      <FeatureOverview />

      {/* 3. ISS Tracker + Feature Cards Preview */}
      <ISSPreviewSection />

      {/* 4. NASA Gallery Preview */}
      <NASAGalleryPreview />

      {/* 5. AI Assistant Preview */}
      <AIAssistantPreview />

      {/* 6. Space Telemetry Preview */}
      <TelemetryPreview />
    </>
  );
}
