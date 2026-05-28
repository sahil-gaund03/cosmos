import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Solar System | NEXUS COSMOS",
  description: "Interactive 3D solar system explorer with real-time planetary orbits, rotation, zoom, and educational overlays.",
};

export default function SolarSystemPage() {
  return (
    <PlaceholderPage
      title="3D Solar System Explorer"
      subtitle="Cinematic Planetary Experience"
      icon="public"
      description="Interactive 3D solar system with real-time planetary orbits, rotation, zoom exploration, educational overlays, and cinematic space camera."
      features={[
        "Planet Orbits",
        "Real-Time Rotation",
        "Interactive Zoom",
        "Educational Overlays",
        "Planet Statistics",
        "Cinematic Camera",
      ]}
    />
  );
}
