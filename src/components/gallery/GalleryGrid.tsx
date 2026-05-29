"use client";

import { NASAPhoto } from "@/lib/services/nasaService";
import GlassPanel from "@/components/ui/GlassPanel";
import Image from "next/image";

interface GalleryGridProps {
  photos: NASAPhoto[];
  onCardClick: (photo: NASAPhoto) => void;
}

export default function GalleryGrid({ photos, onCardClick }: GalleryGridProps) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-20 font-mono text-xs text-outline/60 w-full border border-dashed border-outline-variant/30 rounded-lg">
        NO RETRIEVAL RESULTS IN ARCHIVE COMS ENVELOPE
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 select-none">
      {photos.map((photo, i) => {
        // Vary the image container height for the masonry effect
        const heights = ["h-[220px]", "h-[300px]", "h-[380px]", "h-[260px]"];
        const randomHeight = heights[i % heights.length];

        return (
        <GlassPanel
          key={photo.id}
          onClick={() => onCardClick(photo)}
          className="group relative rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 cursor-pointer flex flex-col justify-between transition-all duration-500 bg-surface-container break-inside-avoid"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
          <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-700 ease-out z-20" />
          {/* Card Image */}
          <div className={`relative w-full ${randomHeight} overflow-hidden`}>
            <Image
              src={photo.thumbUrl}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              sizes="(max-w-768px) 100vw, 33vw"
            />
            {/* Category tag */}
            <div className="absolute top-3 left-3 z-10 bg-surface/90 backdrop-blur-md border border-outline-variant/40 px-2 py-1 rounded font-mono text-[9px] text-primary tracking-wider uppercase shadow-lg shadow-black/50">
              {photo.category}
            </div>
          </div>

          {/* Card footer details */}
          <div className="p-5 flex-1 flex flex-col justify-between bg-surface-container/20 group-hover:bg-surface-container/80 transition-colors duration-500 relative z-10">
            <div className="space-y-2">
              <h3 className="font-[Geist] font-semibold text-sm leading-snug text-on-surface line-clamp-2 group-hover:text-primary transition-colors">
                {photo.title}
              </h3>
              <p className="text-[11px] text-on-surface-variant/80 line-clamp-3 leading-relaxed font-sans opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {photo.explanation}
              </p>
            </div>
            
            <div className="flex justify-between items-center text-[10px] font-mono text-outline border-t border-outline-variant/20 pt-3 mt-3 group-hover:border-primary/20 transition-colors">
              <span>DATE: {photo.date}</span>
              <span className="uppercase tracking-widest">{photo.center}</span>
            </div>
          </div>
        </GlassPanel>
        );
      })}
    </div>
  );
}
