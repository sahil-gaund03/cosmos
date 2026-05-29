"use client";

import { motion } from "framer-motion";

interface RadarHUDOverlayProps {
  latitude: number;
  longitude: number;
}

export default function RadarHUDOverlay({ latitude, longitude }: RadarHUDOverlayProps) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
      {/* Target Radar Grid overlay lines */}
      <div className="absolute inset-0 border border-primary/5 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(13,13,23,0.3)_100%)]" />

      {/* Screen Corners brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/20" />

      {/* Vertical & Horizontal Center HUD Reticle */}
      <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-primary/5 -translate-y-1/2" />
      <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-primary/5 -translate-x-1/2" />

      {/* Circular Target Radar Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dashed border-primary/5" />

      {/* Dynamic Radar Sweep Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,rgba(187,195,255,0.06)_0deg,transparent_120deg,transparent_360deg)]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating System HUD Info Overlay (Tactical Coordinates) */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-1 font-mono text-[9px] text-primary/60 tracking-wider">
        <div>TARGET LOCK STATE: ATTACHED</div>
        <div>GRID LAT_INC: 15.0000°</div>
        <div>ANTENNA ELEVATION: 42.1°</div>
      </div>

      <div className="absolute top-6 right-6 flex flex-col gap-1 font-mono text-[9px] text-[#ffb4ab]/80 tracking-wider">
        <div className="flex items-center gap-1.5 justify-end">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
          SATCOM: ONL
        </div>
        <div>RTT / DOWNLINK: 42ms</div>
      </div>
    </div>
  );
}
