"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issues (Leaflet defaults looking for images in local folder)
// Since we are using L.divIcon, this is less critical, but good practice.
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

interface ISSMapProps {
  center: [number, number];
  history: [number, number][];
  mapStyle: "tactical" | "satellite";
  isOrbitLocked: boolean;
  zoom?: number;
}

// Sub-component to handle map centering and panning
function MapRecenter({ center, lock }: { center: [number, number]; lock: boolean }) {
  const map = useMap();
  useEffect(() => {
    if (lock) {
      map.setView(center, map.getZoom(), { animate: true, duration: 1.5 });
    }
  }, [center, lock, map]);
  return null;
}

export default function ISSMap({
  center,
  history,
  mapStyle,
  isOrbitLocked,
  zoom = 4,
}: ISSMapProps) {
  // Define custom animated radar marker for ISS
  const issIcon = L.divIcon({
    className: "iss-custom-marker-wrapper",
    html: `
      <div class="relative flex items-center justify-center w-[50px] h-[50px] -left-3 -top-3">
        <!-- Double pulsating wave -->
        <div class="absolute w-[60px] h-[60px] rounded-full border border-primary/40 bg-primary/5 animate-[ping_3s_infinite] opacity-60"></div>
        <div class="absolute w-[40px] h-[40px] rounded-full border-2 border-primary bg-primary/10 animate-[ping_2s_infinite] opacity-80"></div>
        
        <!-- Center station node -->
        <div class="absolute w-[24px] h-[24px] rounded-full border border-primary/60 bg-[#12121c] flex items-center justify-center shadow-[0_0_15px_rgba(187,195,255,0.6)]">
          <span class="material-symbols-outlined text-[15px] text-primary font-bold">radar</span>
        </div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const tileUrl =
    mapStyle === "tactical"
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

  const attribution =
    mapStyle === "tactical"
      ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      : "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, GeoEye, IGN, and the GIS User Community";

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        className="w-full h-full bg-[#0d0d17]"
        minZoom={2}
        maxZoom={10}
      >
        <TileLayer url={tileUrl} attribution={attribution} />
        
        {/* Recenter helper component */}
        <MapRecenter center={center} lock={isOrbitLocked} />
        
        {/* Dotted polyline representing the ISS historical orbital trajectory */}
        {history.length > 1 && (
          <Polyline
            positions={history}
            pathOptions={{
              color: "#bbc3ff",
              weight: 2,
              dashArray: "6, 6",
              opacity: 0.8,
            }}
          />
        )}
        
        {/* Current ISS Location Node */}
        <Marker position={center} icon={issIcon} />
      </MapContainer>
    </div>
  );
}
