import React from "react";

import { getAstronautStats, getCurrentCrewInOrbit, getAstronauts } from "@/lib/services/astronautService";
import Image from "next/image";

export const metadata = {
  title: "Astronaut Intelligence | NEXUS COSMOS",
  description: "Track active orbital crew and access historical astronaut dossiers.",
};

export default async function AstronautsPage() {
  const stats = await getAstronautStats();
  const crew = await getCurrentCrewInOrbit();
  const allAstronauts = await getAstronauts();

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-mono text-primary text-sm tracking-widest mb-2">SYSTEM LEVEL: BETA // PHASE 9 ONLINE</h2>
        <h1 className="text-4xl md:text-5xl font-[Geist] font-bold text-on-surface mb-4">Astronaut Intelligence Dashboard</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">Active crew tracking, orbital personnel manifests, and historical spacewalk statistics.</p>
      </div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "CREW IN ORBIT", value: stats.totalCrewInOrbit, icon: "groups" },
          { label: "NATIONS REPD", value: stats.nationsRepresented, icon: "public" },
          { label: "ACTIVE MISSIONS", value: stats.activeMissions, icon: "rocket_launch" },
          { label: "EVA HOURS (TOTAL)", value: stats.totalSpacewalkHoursAll, icon: "schedule" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface/30 border border-outline/10 p-4 rounded-xl flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
            <div>
              <div className="font-[Geist] text-[9px] tracking-widest text-tertiary">{stat.label}</div>
              <div className="font-mono text-xl text-on-surface font-semibold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Crew Section */}
      <div className="mb-12">
        <h3 className="font-[Geist] tracking-widest text-sm text-primary mb-6 border-b border-primary/20 pb-2">
          ACTIVE ORBITAL CREW // ISS EXPEDITION
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {crew.map((astronaut) => (
            <div key={astronaut.id} className="bg-surface/50 border border-outline/20 p-5 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 text-primary font-mono font-bold text-lg">
                  {astronaut.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-[Geist] text-sm font-semibold text-on-surface">{astronaut.name}</div>
                  <div className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span>{astronaut.nationalityFlag}</span>
                    <span>{astronaut.agency}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-tertiary font-[Geist] tracking-wider text-[10px]">MISSION</span>
                  <span className="text-on-surface-variant font-mono">{astronaut.currentMission}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-tertiary font-[Geist] tracking-wider text-[10px]">TIME IN SPACE</span>
                  <span className="text-on-surface-variant font-mono">{astronaut.totalTimeInSpace}d</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Database */}
      <div>
        <h3 className="font-[Geist] tracking-widest text-sm text-tertiary mb-6 border-b border-outline-variant/30 pb-2">
          HISTORICAL ASTRONAUT DATABASE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allAstronauts.filter(a => !a.isCurrentlyInOrbit).map((astronaut) => (
            <div key={astronaut.id} className="bg-surface-container-lowest/50 border border-outline/10 p-4 rounded-xl flex items-center gap-4 hover:bg-surface/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-mono text-xs">
                {astronaut.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="font-[Geist] text-sm text-on-surface">{astronaut.name}</div>
                <div className="text-[10px] text-tertiary font-mono">{astronaut.agency} • {astronaut.spacewalks} EVAs</div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-sm">
                chevron_right
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
