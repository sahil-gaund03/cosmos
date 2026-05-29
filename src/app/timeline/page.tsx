import React from "react";

import { getTimelineEvents, getTimelineEras, getTimelineMilestones } from "@/lib/services/timelineService";

export const metadata = {
  title: "Deep Space Timeline | NEXUS COSMOS",
  description: "Chronological journey through space exploration milestones.",
};

export default async function TimelinePage() {
  const events = await getTimelineEvents();
  const eras = await getTimelineEras();
  const milestones = await getTimelineMilestones();

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-mono text-primary text-sm tracking-widest mb-2">SYSTEM LEVEL: ALPHA // PHASE 10 ONLINE</h2>
        <h1 className="text-4xl md:text-5xl font-[Geist] font-bold text-on-surface mb-4">Historical Intelligence Archive</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">Chronological journey through space exploration milestones and key missions.</p>
      </div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="bg-surface/30 border border-outline/10 p-4 rounded-xl flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-2xl">{milestone.icon}</span>
            <div>
              <div className="font-[Geist] text-[9px] tracking-widest text-tertiary">{milestone.label.toUpperCase()}</div>
              <div className="font-mono text-xl text-on-surface font-semibold">{milestone.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
        {/* Central Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform -translate-x-1/2 z-0" />
        
        {/* Left Line for Mobile */}
        <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-outline-variant/30 z-0" />

        {eras.map((era) => {
          const eraEvents = events.filter(e => e.era === era.id).sort((a, b) => a.year - b.year);
          if (eraEvents.length === 0) return null;

          return (
            <div key={era.id} className="mb-16 relative z-10">
              
              {/* Era Header */}
              <div className="flex flex-col items-center mb-12 text-center relative z-20 bg-[#020205] py-4 rounded-full border-y border-outline/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="inline-flex items-center justify-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary">{era.icon}</span>
                  <span className="font-mono text-xs text-tertiary tracking-widest">[{era.startYear} - {era.endYear}]</span>
                </div>
                <h2 className="text-2xl font-[Geist] font-bold text-on-surface">{era.name}</h2>
                <div className="text-xs text-on-surface-variant max-w-lg mt-2 px-4">{era.description}</div>
              </div>

              {/* Events inside this era */}
              <div className="space-y-12 md:space-y-24 relative">
                {eraEvents.map((event, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={event.id} className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary z-20 shadow-[0_0_10px_rgba(187,195,255,0.8)] border-2 border-[#020205]" />

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-[45%]" />

                      {/* Event Card */}
                      <div className="w-full pl-8 md:pl-0 md:w-[45%]">
                        <div className="bg-surface/50 border border-outline/20 p-6 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors group">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs rounded">
                              {event.date}
                            </span>
                            <span className="px-2 py-1 bg-surface-variant text-on-surface-variant font-mono text-[10px] rounded tracking-wider">
                              {event.agency}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-[Geist] text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary text-[18px]">{event.icon}</span>
                            {event.title}
                          </h3>
                          
                          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                            {event.description}
                          </p>
                          
                          <div className="border-t border-outline-variant/30 pt-3 text-xs italic text-tertiary">
                            {event.significance}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
