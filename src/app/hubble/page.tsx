import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Hubble Explorer | NEXUS COSMOS",
  description: "Immersive deep-space exploration through Hubble's eye — galaxies, nebulae, black holes, and cosmic phenomena.",
};

export default function HubblePage() {
  return (
    <PlaceholderPage
      title="Hubble Observatory Explorer"
      subtitle="Deep Space Immersive Experience"
      icon="auto_awesome"
      description="Voyage through the cosmic horizons captured by Hubble — galaxies, nebulae, black holes, and the deepest corners of observable space."
      features={[
        "Galaxy Gallery",
        "Nebula Explorer",
        "Black Hole Archive",
        "Scientific Panels",
        "Fullscreen Viewer",
        "Space Storytelling",
      ]}
    />
  );
}
