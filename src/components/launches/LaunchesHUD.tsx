"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { getUpcomingLaunches, LaunchMission } from "@/lib/services/launchService";
import GlassPanel from "@/components/ui/GlassPanel";
import SectionContainer from "@/components/ui/SectionContainer";
import LaunchList from "./LaunchList";
import LaunchCountdown from "./LaunchCountdown";
import RocketSpecs from "./RocketSpecs";

// Dynamically import Leaflet Map to prevent SSR compilation errors
const LaunchPadMap = dynamic(() => import("./LaunchPadMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-lowest gap-3 border border-outline-variant/30 rounded-lg">
      <span className="material-symbols-outlined text-[32px] text-[#ffb4ab] animate-spin">
        progress_activity
      </span>
      <span className="text-label-caps text-tertiary">RESOLVING SITE COORDINATES...</span>
    </div>
  ),
});

export default function LaunchesHUD() {
  const [launches, setLaunches] = useState<LaunchMission[]>([]);
  const [selectedLaunch, setSelectedLaunch] = useState<LaunchMission | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLaunches = async () => {
      try {
        setIsLoading(true);
        const data = await getUpcomingLaunches();
        setLaunches(data);
        if (data.length > 0) {
          setSelectedLaunch(data[0]);
        }
      } catch (err) {
        setError("FAILED TO RESOLVE LAUNCH NETWORK PACKETS");
      } finally {
        setIsLoading(false);
      }
    };
    loadLaunches();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] gap-4 select-none">
        <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
          progress_activity
        </span>
        <span className="text-label-caps text-tertiary tracking-widest animate-pulse">
          INTERCEPTING SPACE DEVS COMMS ENVELOPE...
        </span>
      </div>
    );
  }

  if (error || !selectedLaunch) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] gap-4 select-none text-[#ffb4ab]">
        <span className="material-symbols-outlined text-[48px]">warning</span>
        <span className="text-label-caps font-semibold">
          {error || "ERROR: NO LAUNCH TELEMETRY LOGS COMPILATION FOUND"}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
    >
      {/* 1. Left Launches Navigation Cards list (Columns 1-4) */}
      <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-6">
        <LaunchList
          launches={launches}
          selectedId={selectedLaunch.id}
          onSelect={setSelectedLaunch}
        />
      </motion.div>

      {/* 2. Right Detailed Mission Console (Columns 5-12) */}
      <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-6">
        {/* Countdown Banner */}
        <LaunchCountdown launch={selectedLaunch} />

        {/* Specs, Maps & Live Stream Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Technical Spec sheet */}
          <RocketSpecs launch={selectedLaunch} />

          {/* Map and Webcast widgets */}
          <div className="flex flex-col gap-6">
            {/* Launch Site Map Card */}
            <div className="h-[200px] border border-outline-variant/40 rounded-lg overflow-hidden relative shadow-md">
              <LaunchPadMap
                center={[selectedLaunch.launchpad.latitude, selectedLaunch.launchpad.longitude]}
                padName={selectedLaunch.launchpad.name}
              />
            </div>

            {/* Video Webcast Feed */}
            <GlassPanel className="p-4 flex flex-col gap-3 justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono text-outline/80 border-b border-outline-variant/20 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
                <span>RELAY LINK: Webcast Live stream feed</span>
              </div>
              <div className="relative aspect-video rounded overflow-hidden border border-outline-variant/30 bg-[#0d0d17]">
                {selectedLaunch.livestreamUrl ? (
                  <iframe
                    src={selectedLaunch.livestreamUrl}
                    title="Launch Webcast Feed"
                    className="w-full h-full border-0 opacity-80"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-outline/40 font-mono text-[9px] gap-2">
                    <span className="material-symbols-outlined text-[24px]">no_photography</span>
                    NO LIVE FEED SIGNAL ATTACHED
                  </div>
                )}
              </div>
            </GlassPanel>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
