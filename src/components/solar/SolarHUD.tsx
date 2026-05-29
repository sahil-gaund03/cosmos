"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import GlassPanel from "@/components/ui/GlassPanel";
import { PlanetPhysics, getPlanets } from "@/lib/services/solarService";
import PlanetDossier from "./PlanetDossier";

// Dynamically import Three.js Canvas to prevent SSR (Window object) errors in Next.js
const SolarSystemCanvas = dynamic(() => import("./SolarSystemCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex flex-col items-center justify-center bg-surface-container-lowest gap-3 border border-outline-variant/30 rounded-lg shadow-inner">
      <span className="material-symbols-outlined text-[32px] text-primary animate-spin">
        progress_activity
      </span>
      <span className="text-label-caps text-tertiary">INITIALIZING WEBGL 3D SCANNER...</span>
    </div>
  ),
});

export default function SolarHUD() {
  const [planets, setPlanets] = useState<PlanetPhysics[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetPhysics | null>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch planetary catalog database on mount
  useEffect(() => {
    let active = true;
    getPlanets().then((data) => {
      if (active) {
        setPlanets(data);
        setLoading(false);
        // Default select to Sun
        if (data.length > 0) {
          setSelectedPlanet(data[0]);
        }
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const handleSelectPlanet = (planet: PlanetPhysics) => {
    setSelectedPlanet(planet);
  };

  const handleClearSelection = () => {
    setSelectedPlanet(null);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
        <span className="material-symbols-outlined text-[40px] text-primary animate-spin">
          progress_activity
        </span>
        <span className="text-label-caps text-primary tracking-[0.2em] text-xs">
          SYNCING PLANETARY SIMULATOR DATABASE...
        </span>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full"
    >
      {/* 1. Left Control Panel: Planet Selection & Shortcuts (Col 1-3) */}
      <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-6">
        <GlassPanel className="p-6 flex flex-col gap-5 h-full border border-outline-variant/30" glow>
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-3">
            <span className="material-symbols-outlined text-primary text-xl">travel_explore</span>
            <h2 className="font-label-caps text-label-caps text-on-surface text-[13px] tracking-widest">
              CELESTIAL NODES
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-2 max-h-[380px] lg:max-h-none overflow-y-auto pr-1">
            {planets.map((p) => {
              const isSelected = selectedPlanet?.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPlanet(p)}
                  className={`w-full py-2.5 px-4 rounded-lg border font-mono text-left flex justify-between items-center transition-all duration-300 group
                    ${
                      isSelected
                        ? "bg-primary-container/20 border-primary text-primary shadow-[0_0_15px_rgba(82,102,235,0.15)]"
                        : "border-outline-variant/30 text-on-surface hover:bg-surface-variant/20 hover:border-outline-variant/60"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-outline-variant/20 transition-transform group-hover:scale-125"
                      style={{
                        backgroundColor: p.color,
                        boxShadow: isSelected ? `0 0 8px ${p.color}` : "none",
                      }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider">{p.name}</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">
                    {p.id === "sun" ? "STAR" : p.moons > 0 ? `${p.moons} Moons` : "0 Moons"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-outline-variant/30 pt-4">
            <button
              onClick={handleClearSelection}
              className={`w-full py-2.5 px-4 rounded-full text-label-caps text-[11px] font-semibold border flex items-center justify-center gap-2 transition-all duration-300
                ${
                  selectedPlanet === null
                    ? "bg-primary-container border-primary/20 text-on-primary-container shadow-[0_0_15px_rgba(82,102,235,0.4)]"
                    : "border-outline text-on-surface hover:bg-surface-variant/30"
                }`}
            >
              <span className="material-symbols-outlined text-[16px]">zoom_out_map</span>
              {selectedPlanet === null ? "FREE VIEW ACTIVE" : "FREE CAMERA VIEW"}
            </button>
          </div>
        </GlassPanel>
      </motion.div>

      {/* 2. Center Panel: Three.js WebGL Port & Timelines (Col 4-9) */}
      <motion.div variants={fadeInUp} className="lg:col-span-6 flex flex-col gap-6">
        <div className="relative h-[420px] md:h-[500px] border border-outline-variant/40 rounded-lg overflow-hidden bg-surface-container-lowest shadow-2xl z-0 flex items-stretch">
          <SolarSystemCanvas
            planets={planets}
            selectedPlanet={selectedPlanet}
            speedMultiplier={speedMultiplier}
            isPaused={isPaused}
            onSelectPlanet={handleSelectPlanet}
          />
          
          {/* Subtle Viewport Hud Overlays */}
          <div className="absolute top-4 left-4 pointer-events-none z-10 font-mono text-[10px] text-primary/80 bg-surface-container-lowest/80 border border-outline-variant/30 rounded px-2.5 py-1.5 backdrop-blur-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              WebGL RENDER ENGINE V1.0 // ACTIVE
            </span>
          </div>

          {selectedPlanet && (
            <div className="absolute bottom-4 right-4 pointer-events-none z-10 font-mono text-[10px] text-tertiary bg-surface-container-lowest/80 border border-outline-variant/30 rounded px-2.5 py-1.5 backdrop-blur-sm">
              FOCUS POINT: {selectedPlanet.name.toUpperCase()} (LOCKED)
            </div>
          )}
        </div>

        {/* Timeline Simulation HUD Panel */}
        <GlassPanel className="p-5 border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePause}
              className="w-10 h-10 rounded-full border border-primary/40 bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container/20 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isPaused ? "play_arrow" : "pause"}
              </span>
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-label-caps text-tertiary">SIMULATION STATUS</span>
              <span className="font-mono text-xs font-semibold text-on-surface">
                {isPaused ? "TIMESTOP LOCK ACTIVE" : "PROPAGATING ORBITS..."}
              </span>
            </div>
          </div>

          {/* Orbit Speed Multiplier Slider */}
          <div className="flex-1 max-w-sm w-full flex items-center gap-4">
            <span className="text-[10px] font-label-caps text-tertiary whitespace-nowrap">ORBIT SPEED</span>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
              disabled={isPaused}
              className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary disabled:opacity-30"
            />
            <span className="font-mono text-xs text-primary font-bold w-12 text-right">
              {isPaused ? "0.0" : speedMultiplier.toFixed(1)}x
            </span>
          </div>
        </GlassPanel>
      </motion.div>

      {/* 3. Right Control Panel: Detailed Specifications Dossier (Col 10-12) */}
      <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-6">
        <PlanetDossier planet={selectedPlanet} />
      </motion.div>
    </motion.div>
  );
}
