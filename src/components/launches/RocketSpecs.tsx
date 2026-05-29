"use client";

import { LaunchMission } from "@/lib/services/launchService";
import GlassPanel from "@/components/ui/GlassPanel";

interface RocketSpecsProps {
  launch: LaunchMission;
}

export default function RocketSpecs({ launch }: RocketSpecsProps) {
  const { rocket, payload } = launch;

  return (
    <GlassPanel className="p-6 flex flex-col gap-5 h-full justify-between select-none">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-3">
        <span className="material-symbols-outlined text-primary text-xl">build</span>
        <h3 className="font-label-caps text-label-caps text-on-surface">VEHICLE DATA SHEET</h3>
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Launcher name */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">LAUNCH VEHICLE</span>
          <span className="font-mono text-xs text-primary font-bold">{rocket.name}</span>
        </div>

        {/* Height */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">STRUCTURE HEIGHT</span>
          <span className="font-mono text-xs text-on-surface">{rocket.height}</span>
        </div>

        {/* Diameter */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">STAGE DIAMETER</span>
          <span className="font-mono text-xs text-on-surface">{rocket.diameter}</span>
        </div>

        {/* Liftoff Thrust */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">LIFTOFF THRUST</span>
          <span className="font-mono text-xs text-primary font-semibold">{rocket.thrust}</span>
        </div>

        {/* LEO Payload capacity */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">LEO payload CAPACITY</span>
          <span className="font-mono text-xs text-on-surface">{rocket.leoCapacity}</span>
        </div>

        {/* Stages */}
        <div className="p-3 bg-surface-container-low/40 border border-outline-variant/20 rounded flex flex-col gap-1">
          <span className="text-[9px] font-label-caps text-tertiary">FLIGHT STAGES</span>
          <span className="font-mono text-xs text-on-surface">{rocket.stages} STAGE(S)</span>
        </div>
      </div>

      {/* Propellant and Payload details */}
      <div className="space-y-4 border-t border-outline-variant/20 pt-4 font-mono text-[10px]">
        {/* Propellant */}
        <div className="flex justify-between items-start gap-4">
          <span className="text-tertiary shrink-0">PROPELLANT SYSTEM:</span>
          <span className="text-on-surface-variant text-right">{rocket.propellant}</span>
        </div>

        {/* Recovery Plan */}
        <div className="flex justify-between items-start gap-4 border-t border-outline-variant/10 pt-3">
          <span className="text-tertiary shrink-0">BOOSTER RECOVERY PROFILE:</span>
          <span className="text-primary text-right font-bold">{rocket.recoveryPlan}</span>
        </div>

        {/* Payload */}
        <div className="flex justify-between items-start gap-4 border-t border-outline-variant/10 pt-3">
          <span className="text-tertiary shrink-0">PAYLOAD DETAILS:</span>
          <span className="text-on-surface-variant text-right">
            {payload.name} ({payload.weight}) // TARGET ORBIT: {payload.orbit}
          </span>
        </div>
      </div>
    </GlassPanel>
  );
}
