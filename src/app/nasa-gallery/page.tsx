import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "NASA Gallery | NEXUS COSMOS",
  description: "Explore NASA's vast archive of astronomical imagery — APOD, Mars Rovers, and the NASA Image Library in museum-grade presentation.",
};

export default function NASAGalleryPage() {
  return (
    <PlaceholderPage
      title="NASA Media Intelligence"
      subtitle="The Universe in Ultra Definition"
      icon="photo_library"
      description="Museum-grade presentation of NASA's vast archive — from Astronomy Picture of the Day to Mars Rover captures and the complete NASA Image Library."
      features={[
        "APOD Integration",
        "Mars Rover Gallery",
        "Infinite Scrolling",
        "Masonry Layout",
        "Fullscreen Viewer",
        "Search & Filters",
      ]}
    />
  );
}
