// ============================================
// NEXUS COSMOS — Constants & Configuration
// ============================================

export const SITE_CONFIG = {
  name: "NEXUS COSMOS",
  tagline: "AI-Powered Space Intelligence Operating System",
  description:
    "Track the ISS, explore NASA imagery, and interact with AI-powered astronomy systems. The universe, decoded.",
  url: "https://nexus-cosmos.dev",
  copyright: `© ${new Date().getFullYear()} NEXUS COSMOS. ALL SYSTEMS NOMINAL.`,
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "ISS Tracker", href: "/iss-tracker", icon: "satellite_alt" },
  { label: "NASA Gallery", href: "/nasa-gallery", icon: "photo_library" },
  { label: "AI Assistant", href: "/ai-assistant", icon: "smart_toy" },
  { label: "Launches", href: "/launches", icon: "rocket_launch" },
  { label: "Solar System", href: "/solar-system", icon: "public" },
  { label: "Space Weather", href: "/space-weather", icon: "solar_power" },
  { label: "Astronauts", href: "/astronauts", icon: "person" },
  { label: "Timeline", href: "/timeline", icon: "history" },
] as const;

// Footer links
export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "License", href: "/license" },
] as const;

// Telemetry data for the hero section
export const ISS_TELEMETRY = [
  {
    label: "ISS SPEED",
    value: "27,600",
    unit: "km/h",
    live: true,
  },
  {
    label: "ALTITUDE",
    value: "420",
    unit: "km",
    live: false,
  },
  {
    label: "ORBITAL PERIOD",
    value: "92.9",
    unit: "min",
    live: false,
  },
  {
    label: "MISSION STATUS",
    value: "ACTIVE",
    unit: undefined,
    live: true,
  },
] as const;

// Platform features for the overview section
export const PLATFORM_FEATURES = [
  {
    icon: "satellite_alt",
    title: "ISS Tracking",
    description: "Real-time position, speed, and orbital telemetry from the International Space Station.",
    href: "/iss-tracker",
  },
  {
    icon: "photo_library",
    title: "NASA Media Gallery",
    description: "Archival imagery and live deep-space feeds from NASA's vast media library.",
    href: "/nasa-gallery",
  },

  {
    icon: "smart_toy",
    title: "AI Space Assistant",
    description: "Gemini-powered astronomy companion for exploration and learning.",
    href: "/ai-assistant",
  },
  {
    icon: "rocket_launch",
    title: "Launch Intelligence",
    description: "Track upcoming and historical rocket launches from SpaceX, NASA, and ISRO.",
    href: "/launches",
  },
  {
    icon: "public",
    title: "Solar System",
    description: "Interactive 3D planetary exploration with real-time orbital mechanics.",
    href: "/solar-system",
  },
  {
    icon: "solar_power",
    title: "Space Weather",
    description: "Monitor solar flares, geomagnetic storms, and aurora forecasts in real-time.",
    href: "/space-weather",
  },
  {
    icon: "person",
    title: "Astronaut Intel",
    description: "Track current orbital crew, mission histories, and spacewalk statistics.",
    href: "/astronauts",
  },
  {
    icon: "history",
    title: "Space Timeline",
    description: "Cinematic chronological journey through humanity's greatest space milestones.",
    href: "/timeline",
  },
] as const;

// Stats for the telemetry preview section
export const PLATFORM_STATS = [
  { label: "Active Satellites", value: 7842, suffix: "+" },
  { label: "Days ISS In Orbit", value: 9245, suffix: "" },
  { label: "NASA Missions", value: 1473, suffix: "+" },
  { label: "Galaxies Observed", value: 2500, suffix: "+" },
] as const;
