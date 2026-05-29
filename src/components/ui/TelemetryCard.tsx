"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TelemetryCardProps {
  label: string;
  value: string;
  unit?: string;
  live?: boolean;
  delay?: number;
  className?: string;
}

export default function TelemetryCard({
  label,
  value,
  unit,
  live = false,
  delay = 0,
  className,
}: TelemetryCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={cn(
        "glass-panel border border-outline-variant/40 border-l-[3px] border-l-primary/60 p-6 rounded-lg flex flex-col gap-2 relative overflow-hidden group",
        "hover:border-primary/50 hover:border-l-primary transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-label-caps text-tertiary">{label}</span>
        {live && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
              LIVE
            </span>
          </div>
        )}
      </div>
      <div className="font-[Geist] text-[32px] font-medium tracking-[0.05em] leading-[1.2] text-primary">
        {value}{" "}
        {unit && (
          <span className="text-label-caps text-tertiary-container">
            {unit}
          </span>
        )}
      </div>
    </motion.div>
  );
}
