"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassPanel from "@/components/ui/GlassPanel";
import TelemetryCard from "@/components/ui/TelemetryCard";
import TelemetryConsole from "./TelemetryConsole";
import RadarHUDOverlay from "./RadarHUDOverlay";

// Dynamically import Leaflet Map to avoid SSR errors
const ISSMap = dynamic(() => import("./ISSMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-lowest gap-3 border border-outline-variant/30 rounded-lg">
      <span className="material-symbols-outlined text-[32px] text-primary animate-spin">
        progress_activity
      </span>
      <span className="text-label-caps text-tertiary">INITIALIZING GEOMAP SCANNER...</span>
    </div>
  ),
});

interface TelemetryData {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  timestamp: number;
}

export default function ISSTrackingHUD() {
  const [telemetry, setTelemetry] = useState<TelemetryData>(() => ({
    latitude: 0,
    longitude: 0,
    altitude: 420,
    velocity: 27600,
    visibility: "day",
    timestamp: Date.now() / 1000,
  }));

  const [country, setCountry] = useState<string>("DETECTING SUB-POINT COORDS...");
  const [history, setHistory] = useState<[number, number][]>([]);
  const [mapStyle, setMapStyle] = useState<"tactical" | "satellite">("tactical");
  const [isOrbitLocked, setIsOrbitLocked] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(true);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [lastFetched, setLastFetched] = useState<string>("NEVER");

  // Calculate full co-orbital path based on ISS parameters
  // Creates a beautiful sine-wave shape mapping historical and predicted orbits
  const calculateOrbitalPath = (currentLat: number, currentLon: number) => {
    const coords: [number, number][] = [];
    const inclination = 51.64; // ISS orbital inclination in degrees
    
    // We trace backward and forward by 45 minutes (~half orbit in each direction)
    // to draw a continuous co-orbital loop on a flat map.
    // 92.9 mins = full period.
    const steps = 60;
    const periodInMins = 92.9;
    
    for (let i = -steps / 2; i <= steps / 2; i++) {
      const timeDiffMins = (i * periodInMins) / steps;
      // Earth rotates at 0.25 degrees per minute.
      const earthRotationOffset = timeDiffMins * 0.25; 
      
      // Calculate orbital angle
      const angle = (timeDiffMins / periodInMins) * 2 * Math.PI;
      
      // Basic sinusoidal projection of latitude
      const lat = inclination * Math.sin(angle + Math.asin(currentLat / inclination || 0.1));
      
      // Standard longitudinal drift due to orbit + Earth rotation
      let lon = currentLon + (timeDiffMins / periodInMins) * 360 - earthRotationOffset;
      
      // Normalize longitude within [-180, 180]
      while (lon > 180) lon -= 360;
      while (lon < -180) lon += 360;
      
      if (!isNaN(lat) && !isNaN(lon)) {
        coords.push([lat, lon]);
      }
    }
    return coords;
  };

  // Poll current ISS coordinates
  useEffect(() => {

    const fetchTelemetry = async () => {
      try {
        const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
        if (!response.ok) throw new Error("API downlink lost");
        
        const data = await response.json();
        
        const nextTelemetry: TelemetryData = {
          latitude: parseFloat(data.latitude.toFixed(4)),
          longitude: parseFloat(data.longitude.toFixed(4)),
          altitude: parseFloat(data.altitude.toFixed(2)),
          velocity: parseFloat(data.velocity.toFixed(2)),
          visibility: data.visibility,
          timestamp: data.timestamp,
        };

        setTelemetry(nextTelemetry);
        setLastFetched(new Date().toLocaleTimeString());
        setErrorCount(0);

        // Update historical orbit trace
        const orbitPath = calculateOrbitalPath(nextTelemetry.latitude, nextTelemetry.longitude);
        setHistory(orbitPath);

        // Fetch geocoded location
        try {
          const geoResponse = await fetch(
            `https://api.wheretheiss.at/v1/coordinates/${nextTelemetry.latitude},${nextTelemetry.longitude}`
          );
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            if (geoData.country_code && geoData.country_code !== "??") {
              setCountry(`OVER LAND REGION // TERRITORY: ${geoData.country_code.toUpperCase()} (${geoData.timezone_id})`);
            } else {
              setCountry("OVER OPEN WATER // OCEANIC EXPANSE");
            }
          } else {
            setCountry("OVER OPEN WATER // OCEANIC EXPANSE");
          }
        } catch {
          setCountry("OVER OPEN WATER // OCEANIC EXPANSE");
        }

      } catch (err) {
        setErrorCount((prev) => prev + 1);
        if (errorCount > 3) {
          setIsLive(false);
          setCountry("SATCOM DOWNLINK SYSTEM ERROR // SIGNAL LOST");
        }
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 4000);

    return () => clearInterval(interval);
  }, [errorCount]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
    >
      {/* 1. Left Control Panel (Columns 1-3) */}
      <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-6">
        <GlassPanel glow className="flex flex-col gap-5 p-6 h-full justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-3">
              <span className="material-symbols-outlined text-primary text-xl">satellite_alt</span>
              <h2 className="font-label-caps text-label-caps text-on-surface">RADAR COMMS</h2>
            </div>

            {/* Downlink Status */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-tertiary">DOWNLINK STATUS</span>
                <Badge variant={isLive ? "live" : "status"}>
                  {isLive ? "NOMINAL" : "SIGNAL LOST"}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-tertiary">SIGNAL LEVEL</span>
                <span className="font-mono text-primary font-bold">
                  {isLive ? `${100 - errorCount * 15}%` : "0%"}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-tertiary">LAST HEARD</span>
                <span className="font-mono text-on-surface-variant">{lastFetched}</span>
              </div>
            </div>

            {/* Geocode indicator */}
            <div className="border-t border-outline-variant/30 pt-4 space-y-2">
              <span className="text-[10px] font-label-caps text-tertiary">SUB-SATELLITE POSITION</span>
              <div className="p-3 bg-surface-container-low/60 border border-outline-variant/20 rounded font-mono text-[10px] text-primary/90 leading-normal break-words">
                {country}
              </div>
            </div>

            {/* Visibility Mode */}
            <div className="border-t border-outline-variant/30 pt-4 space-y-2">
              <span className="text-[10px] font-label-caps text-tertiary">POSITION ORBIT MODE</span>
              <div className="flex items-center gap-3 text-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  {telemetry.visibility === "day" ? "light_mode" : "dark_mode"}
                </span>
                <span className="font-mono text-on-surface uppercase">
                  LOCAL VISIBILITY: {telemetry.visibility}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive controls */}
          <div className="border-t border-outline-variant/30 pt-4 space-y-3">
            <button
              onClick={() => setIsOrbitLocked(!isOrbitLocked)}
              className={`w-full py-2.5 px-4 rounded-full text-label-caps text-[11px] font-semibold border flex items-center justify-center gap-2 transition-all duration-300
                ${
                  isOrbitLocked
                    ? "bg-primary-container border-primary/20 text-on-primary-container shadow-[0_0_15px_rgba(82,102,235,0.4)]"
                    : "border-outline text-on-surface hover:bg-surface-variant/30"
                }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isOrbitLocked ? "gps_fixed" : "gps_not_fixed"}
              </span>
              {isOrbitLocked ? "ORBIT LOCK ACTIVE" : "LOCK SATELLITE"}
            </button>

            <button
              onClick={() => setMapStyle(mapStyle === "tactical" ? "satellite" : "tactical")}
              className="w-full py-2.5 px-4 rounded-full text-label-caps text-[11px] border border-outline text-on-surface hover:bg-surface-variant/30 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[16px]">layers</span>
              STYLE: {mapStyle === "tactical" ? "TACTICAL DARK" : "SATELLITE IMAGES"}
            </button>
          </div>
        </GlassPanel>
      </motion.div>

      {/* 2. Map Center Component (Columns 4-9) */}
      <motion.div variants={fadeInUp} className="lg:col-span-6 flex flex-col gap-6">
        <div className="relative h-[380px] md:h-[500px] border border-outline-variant/40 rounded-lg overflow-hidden bg-surface-container-lowest shadow-2xl">
          {/* Leaflet map */}
          <ISSMap
            center={[telemetry.latitude, telemetry.longitude]}
            history={history}
            mapStyle={mapStyle}
            isOrbitLocked={isOrbitLocked}
          />
          
          {/* Target HUD Graphics Layer */}
          <RadarHUDOverlay latitude={telemetry.latitude} longitude={telemetry.longitude} />
        </div>
      </motion.div>

      {/* 3. Live Telemetry Panel Widgets (Columns 10-12) */}
      <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-6 justify-between">
        <div className="space-y-4">
          <TelemetryCard
            label="SATELLITE VELOCITY"
            value={telemetry.velocity.toLocaleString()}
            unit="km/h"
            live
          />
          <TelemetryCard
            label="ORBITAL ALTITUDE"
            value={telemetry.altitude.toLocaleString()}
            unit="km"
          />
          <TelemetryCard
            label="COORDINATE LATITUDE"
            value={`${Math.abs(telemetry.latitude)}° ${telemetry.latitude >= 0 ? "N" : "S"}`}
          />
          <TelemetryCard
            label="COORDINATE LONGITUDE"
            value={`${Math.abs(telemetry.longitude)}° ${telemetry.longitude >= 0 ? "E" : "W"}`}
          />
        </div>

        {/* Live Raw Terminal Console */}
        <div className="mt-4 flex-1">
          <TelemetryConsole />
        </div>
      </motion.div>
    </motion.div>
  );
}
