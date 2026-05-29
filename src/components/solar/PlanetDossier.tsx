"use client";

import { motion } from "framer-motion";
import { PlanetPhysics } from "@/lib/services/solarService";
import GlassPanel from "@/components/ui/GlassPanel";

interface PlanetDossierProps {
  planet: PlanetPhysics | null;
}

export default function PlanetDossier({ planet }: PlanetDossierProps) {
  if (!planet) {
    return (
      <GlassPanel className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[400px] border border-outline-variant/30">
        <div className="space-y-4 max-w-xs flex flex-col items-center">
          <span className="material-symbols-outlined text-[48px] text-tertiary animate-pulse">
            radar
          </span>
          <h3 className="font-label-caps text-label-caps text-on-surface text-sm tracking-widest">
            NO PLANET LOADED
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Select a celestial body from the interactive terminal list or WebGL viewport to acquire high-gain downlink telemetry.
          </p>
        </div>
      </GlassPanel>
    );
  }

  // Generate catalog ID based on name or index
  const getCatalogId = (id: string) => {
    switch (id) {
      case "sun": return "SOL-000";
      case "mercury": return "MER-001";
      case "venus": return "VEN-002";
      case "earth": return "ERT-003";
      case "mars": return "MRS-004";
      case "jupiter": return "JPT-005";
      case "saturn": return "SAT-006";
      case "uranus": return "URN-007";
      case "neptune": return "NPT-008";
      default: return "UNK-999";
    }
  };

  const catalogId = getCatalogId(planet.id);

  return (
    <GlassPanel className="p-6 flex flex-col gap-6 h-full relative overflow-hidden border border-outline-variant/30" glow>
      {/* Scanning Sweep Effect */}
      <div className="absolute inset-x-0 left-0 top-0 h-[2px] bg-primary/20 animate-scanline pointer-events-none z-10" />

      {/* Header */}
      <div className="flex flex-col gap-1 border-b border-outline-variant/30 pb-4 relative z-20">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-primary tracking-widest font-bold">
            DOWNLINK STREAMING // {catalogId}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE DETECT
          </span>
        </div>
        
        <h2 className="font-headline-display text-2xl md:text-3xl font-semibold text-on-surface tracking-tight uppercase flex items-center gap-2 mt-1">
          <span 
            className="w-4 h-4 rounded-full border border-outline-variant/40 shadow-sm" 
            style={{ backgroundColor: planet.color, boxShadow: `0 0 10px ${planet.color}` }}
          />
          {planet.name}
        </h2>
      </div>

      {/* Physics Stats Grid */}
      <div className="grid grid-cols-2 gap-4 relative z-20">
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">DISTANCE FROM SUN</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.distanceFromSun}</div>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">DIAMETER</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.diameter}</div>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">MASS</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.mass}</div>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">SURFACE GRAVITY</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.gravity}</div>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">ORBIT PERIOD</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.orbitPeriod}</div>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-label-caps text-tertiary">ROTATIONAL DAY</span>
          <div className="font-mono text-sm text-on-surface font-semibold">{planet.dayLength}</div>
        </div>
      </div>

      {/* Surface Temperature Section */}
      <div className="border-t border-outline-variant/30 pt-4 flex gap-6 relative z-20">
        <div>
          <span className="text-[9px] font-label-caps text-tertiary block mb-1">SURFACE TEMP</span>
          <div className="font-mono text-base text-primary font-bold">{planet.temperature}</div>
        </div>
        <div>
          <span className="text-[9px] font-label-caps text-tertiary block mb-1">MOONS DETECTED</span>
          <div className="font-mono text-base text-primary font-bold">{planet.moons}</div>
        </div>
      </div>

      {/* Fun Facts & NASA Info */}
      <div className="border-t border-outline-variant/30 pt-4 relative z-20 flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-5">
        
        {/* Fun Facts */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[14px] text-tertiary">info</span>
            <span className="text-[10px] font-label-caps text-tertiary">PLANETARY INTEL</span>
          </div>
          <ul className="space-y-2">
            {planet.funFacts?.map((fact, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="text-xs text-on-surface-variant flex items-start gap-2"
              >
                <span className="text-primary mt-0.5">•</span>
                <span className="leading-relaxed">{fact}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* NASA Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[14px] text-primary">satellite_alt</span>
            <span className="text-[10px] font-label-caps text-primary tracking-widest">NASA DIRECTIVE</span>
          </div>
          <p className="text-xs text-on-surface leading-relaxed">
            {planet.nasaInfo}
          </p>
        </div>

      </div>

      {/* Footer telemetry sign-off */}
      <div className="border-t border-outline-variant/30 pt-3 flex justify-between items-center text-[10px] font-mono text-on-surface-variant relative z-20">
        <span>TELEMETRY SYNC STATUS: OK</span>
        <span>LATENCY: 1.25s</span>
      </div>
    </GlassPanel>
  );
}
