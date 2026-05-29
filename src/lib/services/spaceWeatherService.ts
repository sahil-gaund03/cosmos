// ============================================
// NEXUS COSMOS — Space Weather Intelligence Service
// NASA DONKI API + Rich Mock Data Fallback
// ============================================

// ---- Interfaces ----

export interface SolarFlare {
  id: string;
  classType: "C" | "M" | "X";
  classLevel: string; // e.g. "X2.1", "M5.3", "C7.8"
  peakTime: string; // ISO date string
  beginTime: string;
  endTime: string;
  sourceLocation: string; // e.g. "N14W35"
  activeRegion: string; // e.g. "AR3664"
  xrayFlux: number; // W/m²
  linkedCME: boolean;
  note: string;
}

export interface GeomagneticStorm {
  id: string;
  kpIndex: number; // 0-9
  dstValue: number; // nT (nanotesla)
  startTime: string;
  severity: "MINOR" | "MODERATE" | "STRONG" | "SEVERE" | "EXTREME";
  source: string;
  linkedFlareId?: string;
}

export interface SolarWind {
  speed: number; // km/s
  density: number; // protons/cm³
  bz: number; // nT — negative = southward (geoeffective)
  bt: number; // nT — total IMF
  temperature: number; // Kelvin
  timestamp: string;
}

export interface AuroraForecast {
  probability: number; // 0-100
  hemisphere: "NORTHERN" | "SOUTHERN";
  visibleLatitudes: string; // e.g. "≥55° N"
  kpRequired: number;
  peakWindow: string;
  ovalExpansion: "CONTRACTED" | "NOMINAL" | "EXPANDED" | "EXTREME";
}

export interface RadiationAlert {
  level: "NONE" | "S1" | "S2" | "S3" | "S4" | "S5";
  protonFlux: number; // pfu
  description: string;
  riskToSpacecraft: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
  riskToAstronauts: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
}

export interface KpHistoryEntry {
  timestamp: string;
  kp: number;
}

export type SolarActivityLevel = "QUIET" | "MODERATE" | "ACTIVE" | "EXTREME";

export interface SpaceWeatherSummary {
  activityLevel: SolarActivityLevel;
  solarFlares: SolarFlare[];
  geomagneticStorms: GeomagneticStorm[];
  solarWind: SolarWind;
  aurora: AuroraForecast;
  radiation: RadiationAlert;
  kpHistory: KpHistoryEntry[];
  lastUpdated: string;
}

// ---- Mock Data ----

const MOCK_SOLAR_FLARES: SolarFlare[] = [
  {
    id: "FLR-2026-001",
    classType: "X",
    classLevel: "X2.8",
    peakTime: "2026-05-28T14:32:00Z",
    beginTime: "2026-05-28T14:18:00Z",
    endTime: "2026-05-28T14:47:00Z",
    sourceLocation: "S14W28",
    activeRegion: "AR3842",
    xrayFlux: 2.8e-4,
    linkedCME: true,
    note: "Halo CME observed. Earth-directed component confirmed by LASCO C2/C3.",
  },
  {
    id: "FLR-2026-002",
    classType: "M",
    classLevel: "M7.4",
    peakTime: "2026-05-28T09:15:00Z",
    beginTime: "2026-05-28T08:58:00Z",
    endTime: "2026-05-28T09:33:00Z",
    sourceLocation: "N22W05",
    activeRegion: "AR3841",
    xrayFlux: 7.4e-5,
    linkedCME: true,
    note: "Partial halo CME. Type II radio sweep detected at 09:21 UTC.",
  },
  {
    id: "FLR-2026-003",
    classType: "M",
    classLevel: "M3.1",
    peakTime: "2026-05-27T22:45:00Z",
    beginTime: "2026-05-27T22:31:00Z",
    endTime: "2026-05-27T23:02:00Z",
    sourceLocation: "S08E12",
    activeRegion: "AR3842",
    xrayFlux: 3.1e-5,
    linkedCME: false,
    note: "Confined eruption. No significant CME signature observed.",
  },
  {
    id: "FLR-2026-004",
    classType: "X",
    classLevel: "X1.2",
    peakTime: "2026-05-27T06:12:00Z",
    beginTime: "2026-05-27T05:55:00Z",
    endTime: "2026-05-27T06:28:00Z",
    sourceLocation: "N16W42",
    activeRegion: "AR3839",
    xrayFlux: 1.2e-4,
    linkedCME: true,
    note: "Full halo CME. ETA at L1: ~36 hours. Geomagnetic storm watch issued.",
  },
  {
    id: "FLR-2026-005",
    classType: "C",
    classLevel: "C9.4",
    peakTime: "2026-05-26T17:33:00Z",
    beginTime: "2026-05-26T17:20:00Z",
    endTime: "2026-05-26T17:45:00Z",
    sourceLocation: "S22E30",
    activeRegion: "AR3840",
    xrayFlux: 9.4e-6,
    linkedCME: false,
    note: "Sub-threshold event. Minor radio blackout R1 on sunlit hemisphere.",
  },
  {
    id: "FLR-2026-006",
    classType: "C",
    classLevel: "C4.7",
    peakTime: "2026-05-26T03:08:00Z",
    beginTime: "2026-05-26T02:55:00Z",
    endTime: "2026-05-26T03:19:00Z",
    sourceLocation: "N10E55",
    activeRegion: "AR3838",
    xrayFlux: 4.7e-6,
    linkedCME: false,
    note: "Background-level event. No Earth-directed impact expected.",
  },
];

const MOCK_GEOMAGNETIC_STORMS: GeomagneticStorm[] = [
  {
    id: "GST-2026-001",
    kpIndex: 7,
    dstValue: -128,
    startTime: "2026-05-28T18:00:00Z",
    severity: "STRONG",
    source: "CME arrival from AR3842 X2.8 flare",
    linkedFlareId: "FLR-2026-001",
  },
  {
    id: "GST-2026-002",
    kpIndex: 5,
    dstValue: -65,
    startTime: "2026-05-27T12:00:00Z",
    severity: "MINOR",
    source: "CIR-driven compression from coronal hole CH78",
  },
];

const MOCK_SOLAR_WIND: SolarWind = {
  speed: 687,
  density: 12.4,
  bz: -8.3,
  bt: 14.7,
  temperature: 285000,
  timestamp: "2026-05-29T01:42:00Z",
};

const MOCK_AURORA_FORECAST: AuroraForecast = {
  probability: 72,
  hemisphere: "NORTHERN",
  visibleLatitudes: "≥50° N",
  kpRequired: 6,
  peakWindow: "2026-05-29 02:00–08:00 UTC",
  ovalExpansion: "EXPANDED",
};

const MOCK_RADIATION_ALERT: RadiationAlert = {
  level: "S2",
  protonFlux: 420,
  description: "Moderate solar radiation storm in progress. Elevated proton flux at >10 MeV threshold.",
  riskToSpacecraft: "MODERATE",
  riskToAstronauts: "MODERATE",
};

const MOCK_KP_HISTORY: KpHistoryEntry[] = [
  { timestamp: "2026-05-28T21:00:00Z", kp: 7 },
  { timestamp: "2026-05-28T18:00:00Z", kp: 6 },
  { timestamp: "2026-05-28T15:00:00Z", kp: 5 },
  { timestamp: "2026-05-28T12:00:00Z", kp: 4 },
  { timestamp: "2026-05-28T09:00:00Z", kp: 3 },
  { timestamp: "2026-05-28T06:00:00Z", kp: 5 },
  { timestamp: "2026-05-28T03:00:00Z", kp: 6 },
  { timestamp: "2026-05-28T00:00:00Z", kp: 4 },
];

// ---- Helpers ----

function determineSolarActivityLevel(flares: SolarFlare[], kpIndex: number): SolarActivityLevel {
  const hasXFlare = flares.some((f) => f.classType === "X");
  const hasMFlare = flares.some((f) => f.classType === "M");

  if (hasXFlare && kpIndex >= 7) return "EXTREME";
  if (hasXFlare || kpIndex >= 6) return "ACTIVE";
  if (hasMFlare || kpIndex >= 4) return "MODERATE";
  return "QUIET";
}

function getStormSeverity(kp: number): GeomagneticStorm["severity"] {
  if (kp >= 9) return "EXTREME";
  if (kp >= 8) return "SEVERE";
  if (kp >= 7) return "STRONG";
  if (kp >= 6) return "MODERATE";
  return "MINOR";
}

// ---- NASA DONKI API Integration ----

interface DONKIFlareResponse {
  flrID: string;
  classType: string;
  beginTime: string;
  peakTime: string;
  endTime: string;
  sourceLocation: string;
  activeRegionNum: number;
  linkedEvents?: { activityID: string }[];
  note: string;
}

function parseDONKIClassType(classType: string): "C" | "M" | "X" {
  const upper = classType.toUpperCase();
  if (upper.startsWith("X")) return "X";
  if (upper.startsWith("M")) return "M";
  return "C";
}

function parseDONKIXrayFlux(classType: string): number {
  const letter = classType.charAt(0).toUpperCase();
  const num = parseFloat(classType.substring(1)) || 1.0;
  switch (letter) {
    case "X": return num * 1e-4;
    case "M": return num * 1e-5;
    case "C": return num * 1e-6;
    default: return num * 1e-7;
  }
}

async function fetchDONKIFlares(): Promise<SolarFlare[] | null> {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const fmt = (d: Date) => d.toISOString().split("T")[0];
    const url = `https://api.nasa.gov/DONKI/FLR?startDate=${fmt(startDate)}&endDate=${fmt(endDate)}&api_key=DEMO_KEY`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const data: DONKIFlareResponse[] = await res.json();

    if (!Array.isArray(data) || data.length === 0) return null;

    return data.slice(0, 8).map((flr, i) => ({
      id: flr.flrID || `FLR-API-${i}`,
      classType: parseDONKIClassType(flr.classType),
      classLevel: flr.classType,
      peakTime: flr.peakTime,
      beginTime: flr.beginTime,
      endTime: flr.endTime || flr.peakTime,
      sourceLocation: flr.sourceLocation || "N/A",
      activeRegion: flr.activeRegionNum ? `AR${flr.activeRegionNum}` : "N/A",
      xrayFlux: parseDONKIXrayFlux(flr.classType),
      linkedCME: Array.isArray(flr.linkedEvents) && flr.linkedEvents.length > 0,
      note: flr.note || "No additional details available.",
    }));
  } catch {
    return null;
  }
}

// ---- Public API ----

export async function getSpaceWeatherSummary(): Promise<SpaceWeatherSummary> {
  // Attempt live API fetch for solar flares
  const liveFlares = await fetchDONKIFlares();
  const flares = liveFlares || MOCK_SOLAR_FLARES;

  // Always use mock for non-flare data (additional APIs would be needed for live)
  const storms = MOCK_GEOMAGNETIC_STORMS;
  const wind = MOCK_SOLAR_WIND;
  const aurora = MOCK_AURORA_FORECAST;
  const radiation = MOCK_RADIATION_ALERT;
  const kpHistory = MOCK_KP_HISTORY;

  const latestKp = kpHistory[0]?.kp ?? 3;
  const activityLevel = determineSolarActivityLevel(flares, latestKp);

  // Simulate network latency for mock data path
  if (!liveFlares) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 600));
  }

  return {
    activityLevel,
    solarFlares: flares,
    geomagneticStorms: storms,
    solarWind: wind,
    aurora,
    radiation,
    kpHistory,
    lastUpdated: new Date().toISOString(),
  };
}

export async function getSolarFlares(): Promise<SolarFlare[]> {
  const live = await fetchDONKIFlares();
  if (live) return live;
  await new Promise((resolve) => setTimeout(() => resolve(true), 400));
  return MOCK_SOLAR_FLARES;
}

export async function getCurrentSolarWind(): Promise<SolarWind> {
  await new Promise((resolve) => setTimeout(() => resolve(true), 300));
  return MOCK_SOLAR_WIND;
}

export async function getAuroraForecast(): Promise<AuroraForecast> {
  await new Promise((resolve) => setTimeout(() => resolve(true), 300));
  return MOCK_AURORA_FORECAST;
}

// ---- Utility Exports ----

export { determineSolarActivityLevel, getStormSeverity };
