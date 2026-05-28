import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "ISS Tracker | NEXUS COSMOS",
  description: "Real-time International Space Station tracking with live telemetry, orbital visualization, and mission-control interface.",
};

export default function ISSTrackerPage() {
  return (
    <PlaceholderPage
      title="ISS Tracking System"
      subtitle="Real-Time Orbital Intelligence"
      icon="satellite_alt"
      description="Live position tracking, orbital visualization, and telemetry systems for the International Space Station. Mission-control grade precision."
      features={[
        "Live Coordinates",
        "Globe Visualization",
        "Orbit Path Rendering",
        "Speed & Altitude",
        "Country Detection",
        "Mission Control HUD",
      ]}
    />
  );
}
