"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LaunchPadMapProps {
  center: [number, number];
  padName: string;
}

// Recenter map when launch pad changes
function MapRecenter({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13, { animate: true, duration: 1.5 }); // zoom in on launchpad!
  }, [center, map]);
  return null;
}

export default function LaunchPadMap({ center, padName }: LaunchPadMapProps) {
  // Custom HUD crosshair target icon for Leaflet
  const crosshairIcon = L.divIcon({
    className: "launchpad-crosshair-wrapper",
    html: `
      <div class="relative flex items-center justify-center w-[60px] h-[60px] -left-5 -top-5">
        <!-- Pulse circles -->
        <div class="absolute w-[40px] h-[40px] rounded-full border-2 border-[#ffb4ab] animate-ping opacity-60"></div>
        <div class="absolute w-[20px] h-[20px] rounded-full border border-[#ffb4ab]/80 bg-[#ffb4ab]/10"></div>
        
        <!-- Crosshair lines -->
        <div class="absolute w-[30px] h-[1px] bg-[#ffb4ab]/80"></div>
        <div class="absolute h-[30px] w-[1px] bg-[#ffb4ab]/80"></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
  const attribution = "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, GeoEye, IGN, and the GIS User Community";

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={center}
        zoom={13}
        zoomControl={false}
        className="w-full h-full bg-[#0d0d17]"
        minZoom={3}
        maxZoom={16}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
      >
        <TileLayer url={tileUrl} attribution={attribution} />
        
        <MapRecenter center={center} />
        
        <Marker position={center} icon={crosshairIcon} />
      </MapContainer>

      {/* Minipad HUD Overlay info text */}
      <div className="absolute bottom-3 left-3 z-10 bg-[#0d0d17]/80 border border-outline-variant/30 px-3 py-1.5 rounded font-mono text-[9px] text-[#ffb4ab] tracking-wider pointer-events-none">
        PAD LOCK: {center[0].toFixed(4)}°, {center[1].toFixed(4)}°
      </div>
    </div>
  );
}
