"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";
import type { SolarFlare } from "@/lib/services/spaceWeatherService";

interface FlareEventCardProps {
  flare: SolarFlare;
  isSelected?: boolean;
  onClick?: () => void;
  index?: number;
}

function getSeverityColor(classType: SolarFlare["classType"]) {
  switch (classType) {
    case "X":
      return {
        border: "border-error/60",
        bg: "bg-error/10",
        text: "text-error",
        glow: "shadow-[0_0_12px_rgba(255,180,171,0.2)]",
      };
    case "M":
      return {
        border: "border-primary/60",
        bg: "bg-primary/10",
        text: "text-primary",
        glow: "shadow-[0_0_12px_rgba(187,195,255,0.2)]",
      };
    case "C":
      return {
        border: "border-secondary/40",
        bg: "bg-secondary/10",
        text: "text-secondary",
        glow: "",
      };
  }
}

function formatTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
      hour12: false,
    }) + " UTC";
  } catch {
    return iso;
  }
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return iso;
  }
}

export default function FlareEventCard({
  flare,
  isSelected = false,
  onClick,
  index = 0,
}: FlareEventCardProps) {
  const colors = getSeverityColor(flare.classType);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={cn(
        "glass-panel rounded-lg p-3 border cursor-pointer transition-all duration-300",
        colors.border,
        colors.glow,
        isSelected
          ? "bg-surface-container-high border-primary ring-1 ring-primary/30"
          : "hover:bg-surface-container-high/50"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        {/* Classification Badge */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center justify-center w-10 h-6 rounded font-mono text-[13px] font-bold tracking-wider",
              colors.bg,
              colors.text
            )}
          >
            {flare.classLevel}
          </span>
          <span className="text-[11px] text-on-surface-variant font-mono tracking-wide">
            {flare.activeRegion}
          </span>
        </div>

        {/* CME Indicator */}
        {flare.linkedCME && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error/10 text-[10px] text-error font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" />
            CME
          </span>
        )}
      </div>

      {/* Timing Info */}
      <div className="flex items-center gap-3 text-[11px] text-on-surface-variant">
        <span className="font-mono">{formatDate(flare.peakTime)}</span>
        <span className="text-outline">|</span>
        <span className="font-mono">
          PEAK {formatTime(flare.peakTime)}
        </span>
      </div>

      {/* Source Location */}
      <div className="flex items-center gap-2 mt-1.5">
        <span className="material-symbols-outlined text-[14px] text-tertiary">
          my_location
        </span>
        <span className="text-[11px] text-tertiary font-mono">
          {flare.sourceLocation}
        </span>
        <span className="text-[10px] text-on-surface-variant ml-auto font-mono">
          {flare.xrayFlux.toExponential(1)} W/m²
        </span>
      </div>
    </motion.div>
  );
}
