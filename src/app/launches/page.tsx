import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Rocket Launches | NEXUS COSMOS",
  description: "Track upcoming and historical rocket launches from SpaceX, NASA, ISRO, and Blue Origin with mission-control grade telemetry.",
};

export default function LaunchesPage() {
  return (
    <PlaceholderPage
      title="Rocket Launch Intelligence"
      subtitle="Mission Control Grade Tracking"
      icon="rocket_launch"
      description="Track upcoming and historical rocket launches from SpaceX, NASA, ISRO, and Blue Origin with countdown timers, telemetry, and mission analytics."
      features={[
        "Countdown Timers",
        "Mission Dashboards",
        "Rocket Profiles",
        "Launch Telemetry",
        "Livestream Support",
        "Launch Analytics",
      ]}
    />
  );
}
