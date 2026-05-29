"use client";

import { useEffect, useState } from "react";
import { LaunchMission } from "@/lib/services/launchService";
import GlassPanel from "@/components/ui/GlassPanel";
import Badge from "@/components/ui/Badge";

interface LaunchCountdownProps {
  launch: LaunchMission;
}

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  totalMs: number;
}

export default function LaunchCountdown({ launch }: LaunchCountdownProps) {
  const [time, setTime] = useState<TimeRemaining>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    totalMs: 0,
  });

  const [systemAlert, setSystemAlert] = useState<string>("PROPULSION SYSTEMS ACTIVE");

  // Telemetry statuses that cycle on the countdown panel
  useEffect(() => {
    const alerts = [
      "PROPULSION SYSTEMS: ACTIVE",
      "GUIDANCE NAVIGATION: NOMINAL",
      "FLIGHT TELEMETRY LINK: STABLE",
      "RANGE CLEARANCE STATUS: GRANTED",
      "CRYOGENIC FLUID VENTING: STANDBY",
      "AUTOPILOT CO-INTEGRATION: VALID",
    ];

    const interval = setInterval(() => {
      setSystemAlert(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Update ticking time remaining
  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(launch.windowStart).getTime() - Date.now();
      
      if (diff <= 0) {
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          totalMs: diff,
        });
        return;
      }

      const daysVal = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursVal = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesVal = Math.floor((diff / (1000 * 60)) % 60);
      const secondsVal = Math.floor((diff / 1000) % 60);

      setTime({
        days: String(daysVal).padStart(2, "0"),
        hours: String(hoursVal).padStart(2, "0"),
        minutes: String(minutesVal).padStart(2, "0"),
        seconds: String(secondsVal).padStart(2, "0"),
        totalMs: diff,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [launch.windowStart]);

  const isLunched = time.totalMs <= 0;

  return (
    <GlassPanel glow className="relative p-6 md:p-8 flex flex-col gap-6 overflow-hidden select-none">
      {/* Scanline filter overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline z-10" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4 z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-[10px] font-label-caps text-primary tracking-widest">
              MISSION DOSSIER // CORE SYSTEM LOCK
            </span>
          </div>
          <h2 className="font-headline-lg text-lg md:text-xl font-bold tracking-tight text-on-surface">
            {launch.name}
          </h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] font-mono text-outline/80">LAUNCHPAD STATUS:</span>
          <Badge variant={launch.status === "HOLD" ? "status" : "live"}>
            {launch.status === "HOLD" ? "SYSTEM HOLD" : "T-MINUS RUN"}
          </Badge>
        </div>
      </div>

      {/* Massive Countdown HUD */}
      <div className="py-6 flex flex-col items-center justify-center border-y border-outline-variant/20 relative z-10">
        {/* Glow backdrop */}
        <div className="absolute w-[80%] h-[80%] bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
        
        <span className="text-[10px] font-label-caps text-tertiary tracking-[0.3em] uppercase mb-4">
          T-MINUS COUNTDOWN TIME
        </span>

        {/* Counter digits */}
        <div className="flex items-center gap-3 md:gap-6 font-mono text-[36px] sm:text-[54px] md:text-[64px] text-primary font-medium tracking-tight drop-shadow-[0_0_20px_rgba(187,195,255,0.4)]">
          <div className="flex flex-col items-center">
            <span>{time.days}</span>
            <span className="text-[8px] sm:text-[10px] font-label-caps text-outline/70 mt-1">days</span>
          </div>
          <span className="text-outline/40 -mt-4 animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span>{time.hours}</span>
            <span className="text-[8px] sm:text-[10px] font-label-caps text-outline/70 mt-1">hrs</span>
          </div>
          <span className="text-outline/40 -mt-4 animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span>{time.minutes}</span>
            <span className="text-[8px] sm:text-[10px] font-label-caps text-outline/70 mt-1">mins</span>
          </div>
          <span className="text-outline/40 -mt-4 animate-pulse">:</span>
          <div className="flex flex-col items-center text-[#ffb4ab]">
            <span>{time.seconds}</span>
            <span className="text-[8px] sm:text-[10px] font-label-caps text-[#ffb4ab]/70 mt-1">secs</span>
          </div>
        </div>

        {isLunched && (
          <div className="mt-4 text-[#ffb4ab] font-mono text-[11px] font-bold tracking-widest animate-blink">
            LAUNCH DETECTED // LIFTOFF PROFILES IN PROGRESS
          </div>
        )}
      </div>

      {/* Dynamic Telemetry Alert Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#0d0d17]/60 border border-outline-variant/20 rounded z-10 font-mono text-[10px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#bbc3ff] animate-ping" />
          <span className="text-tertiary">SYSTEM MATRIX:</span>
          <span className="text-primary font-bold uppercase">{systemAlert}</span>
        </div>
        <div className="text-outline/60 flex items-center gap-1.5 justify-end">
          <span>COMMS LINK STRENGTH:</span>
          <span className="text-primary font-semibold">99.8%</span>
        </div>
      </div>
    </GlassPanel>
  );
}
