"use client";

import { useState, useEffect } from "react";
import { LaunchMission } from "@/lib/services/launchService";
import GlassPanel from "@/components/ui/GlassPanel";
import Badge from "@/components/ui/Badge";

interface LaunchListProps {
  launches: LaunchMission[];
  selectedId: string;
  onSelect: (launch: LaunchMission) => void;
}

// Sub-component to render a live ticking T-minus string inside each card
function MiniCountdown({ dateStr }: { dateStr: string }) {
  const [timeText, setTimeText] = useState("T-00:00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const diff = new Date(dateStr).getTime() - Date.now();
      if (diff <= 0) {
        setTimeText("L-LAUNCHED");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      
      const d = String(days).padStart(2, "0");
      const h = String(hours).padStart(2, "0");
      const m = String(mins).padStart(2, "0");
      const s = String(secs).padStart(2, "0");
      
      setTimeText(`T-${d}d:${h}h:${m}m:${s}s`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [dateStr]);

  return <span className="font-mono text-[10px] text-primary/80 font-semibold">{timeText}</span>;
}

export default function LaunchList({ launches, selectedId, onSelect }: LaunchListProps) {
  const [providerFilter, setProviderFilter] = useState<string>("ALL");

  const providers = ["ALL", "NASA", "SpaceX", "ISRO", "Blue Origin"];

  const filteredLaunches = launches.filter((launch) => {
    if (providerFilter === "ALL") return true;
    return launch.provider.toLowerCase() === providerFilter.toLowerCase();
  });

  return (
    <GlassPanel className="flex flex-col gap-4 p-5 h-full max-h-[600px] lg:max-h-[850px] overflow-hidden select-none">
      {/* Search Header */}
      <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-3">
        <span className="material-symbols-outlined text-primary text-xl">schedule</span>
        <h2 className="font-label-caps text-label-caps text-on-surface">LAUNCH FEEDS</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 py-1">
        {providers.map((prov) => (
          <button
            key={prov}
            onClick={() => setProviderFilter(prov)}
            className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider font-[Geist] uppercase border transition-all duration-300
              ${
                providerFilter === prov
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "border-outline-variant/20 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30"
              }`}
          >
            {prov}
          </button>
        ))}
      </div>

      {/* Launch items list */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
        {filteredLaunches.length === 0 ? (
          <div className="text-center py-12 text-xs text-outline/60 font-mono">
            NO COMMS SIGNALS DETECTED IN SECTOR
          </div>
        ) : (
          filteredLaunches.map((launch) => {
            const isSelected = launch.id === selectedId;
            return (
              <div
                key={launch.id}
                onClick={() => onSelect(launch)}
                className={`group p-4 rounded-lg border cursor-pointer transition-all duration-300 flex flex-col gap-2 hover:scale-[1.01]
                  ${
                    isSelected
                      ? "bg-surface-container border-primary/50 shadow-[0_0_15px_rgba(187,195,255,0.1)]"
                      : "bg-surface-container-low/40 border-outline-variant/20 hover:border-outline-variant/60 hover:bg-surface-container-low/80"
                  }`}
              >
                {/* Provider and mini countdown */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-label-caps text-tertiary">
                    {launch.provider.toUpperCase()}
                  </span>
                  <MiniCountdown dateStr={launch.windowStart} />
                </div>

                {/* Mission Name */}
                <h3
                  className={`font-semibold text-xs leading-snug transition-colors group-hover:text-primary
                    ${isSelected ? "text-primary" : "text-on-surface"}`}
                >
                  {launch.name.split(" — ")[0]}
                </h3>

                {/* Rocket and Status badge */}
                <div className="flex justify-between items-center mt-1 border-t border-outline-variant/10 pt-2 text-[10px]">
                  <span className="font-mono text-on-surface-variant/70">
                    {launch.rocket.name}
                  </span>
                  <Badge variant={launch.status === "HOLD" ? "status" : "live"}>
                    {launch.status}
                  </Badge>
                </div>
              </div>
            );
          })
        )}
      </div>
    </GlassPanel>
  );
}
