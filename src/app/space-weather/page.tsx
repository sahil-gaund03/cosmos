import React from "react";

import { getSpaceWeatherSummary } from "@/lib/services/spaceWeatherService";

export const metadata = {
  title: "Space Weather Intelligence | NEXUS COSMOS",
  description: "Track solar flares, geomagnetic storms, and aurora forecasts in real-time.",
};

export default async function SpaceWeatherPage() {
  const weather = await getSpaceWeatherSummary();

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-mono text-primary text-sm tracking-widest mb-2">SYSTEM LEVEL: ALPHA // PHASE 8 ONLINE</h2>
        <h1 className="text-4xl md:text-5xl font-[Geist] font-bold text-on-surface mb-4">Space Weather Intelligence System</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">Real-time monitoring of solar flares, geomagnetic storms, and magnetosphere activity.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Solar Activity */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface/50 border border-outline/20 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-[Geist] tracking-widest text-xs text-tertiary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">solar_power</span>
              SOLAR FLUX TELEMETRY
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-3 w-3 rounded-full animate-pulse ${weather.solarWind.speed > 500 ? 'bg-error' : 'bg-primary'}`} />
              <div className="font-mono text-sm">STATUS: {weather.solarWind.speed > 500 ? "ACTIVE" : "NOMINAL"}</div>
            </div>
            <div className="space-y-4">
              {weather.solarFlares.slice(0, 3).map((flare) => (
                <div key={flare.id} className="border-l-2 border-primary/50 pl-4 py-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-on-surface-variant">{flare.classLevel} CLASS</span>
                    <span className="font-mono text-[10px] text-tertiary">{new Date(flare.peakTime).toLocaleTimeString()}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{flare.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: Solar Wind Gauge */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface/50 border border-outline/20 p-6 rounded-xl backdrop-blur-md h-full flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative w-48 h-48 rounded-full border-4 border-surface-variant flex items-center justify-center">
               <div className="absolute inset-[-4px] rounded-full border-4 border-transparent border-t-primary animate-spin" style={{ animationDuration: '3s' }} />
               <div className="text-center">
                 <div className="font-mono text-4xl text-primary font-bold">{weather.solarWind.speed.toFixed(0)}</div>
                 <div className="font-[Geist] text-[10px] tracking-widest text-tertiary mt-1">KM/S</div>
               </div>
             </div>
             <div className="mt-8 text-center space-y-2">
               <div className="font-mono text-xs text-on-surface-variant flex items-center justify-center gap-2">
                 <span>DENSITY:</span>
                 <span className="text-on-surface">{weather.solarWind.density} p/cm³</span>
               </div>
               <div className="font-mono text-xs text-on-surface-variant flex items-center justify-center gap-2">
                 <span>Bz COMPONENT:</span>
                 <span className={weather.solarWind.bz < 0 ? 'text-error' : 'text-primary'}>
                   {weather.solarWind.bz} nT
                 </span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column: Aurora Forecast */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface/50 border border-outline/20 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-[Geist] tracking-widest text-xs text-tertiary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">radar</span>
              AURORA PROBABILITY
            </h3>
            
            <div className="flex items-end gap-2 mb-6 border-b border-outline-variant/30 pb-4">
              <span className="font-mono text-4xl text-primary">{weather.aurora.probability}%</span>
              <span className="font-mono text-xs text-tertiary mb-1">VISIBILITY LIKELIHOOD</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] text-tertiary mb-1">HEMISPHERE TARGET</div>
                <div className="font-mono text-sm">{weather.aurora.hemisphere}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-tertiary mb-1">VISIBLE LATITUDES</div>
                <div className="font-mono text-sm">{weather.aurora.visibleLatitudes}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-tertiary mb-1">REQUIRED Kp</div>
                <div className="font-mono text-sm">{weather.aurora.kpRequired}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
