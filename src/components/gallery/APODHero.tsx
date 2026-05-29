"use client";

import { useState } from "react";
import { APODData } from "@/lib/services/nasaService";
import GlassPanel from "@/components/ui/GlassPanel";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

interface APODHeroProps {
  apod: APODData;
}

export default function APODHero({ apod }: APODHeroProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <GlassPanel glow className="relative w-full min-h-[350px] md:min-h-[500px] rounded-xl overflow-hidden flex flex-col justify-end select-none group border border-outline-variant/30">
      {/* Background APOD Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={apod.url}
          alt={apod.title}
          fill
          className="object-cover opacity-70 transition-transform duration-[2s] ease-out group-hover:scale-105"
          priority
          sizes="100vw"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/50 via-transparent to-surface/30 pointer-events-none" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 p-6 md:p-8 space-y-4 max-w-4xl">
        <div className="flex items-center gap-2">
          <Badge variant="live">APOD ACTIVE FEED</Badge>
          <span className="text-[10px] font-mono text-outline/80">DATE: {apod.date}</span>
        </div>

        <div className="space-y-2">
          <h2 className="font-[Sora] text-2xl md:text-4xl lg:text-5xl font-semibold tracking-[0.02em] text-on-surface leading-tight">
            {apod.title}
          </h2>
          {apod.copyright && (
            <p className="text-[10px] font-mono text-tertiary">CREDITS: {apod.copyright}</p>
          )}
        </div>

        {/* Expandable Explanation block */}
        <div className="space-y-3">
          <div
            className={`text-body-md text-on-surface-variant leading-relaxed transition-all duration-500 overflow-hidden
              ${expanded ? "max-h-[500px]" : "max-h-[60px] line-clamp-2"}`}
          >
            {apod.explanation}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 mt-2 text-xs font-[Geist] tracking-[0.1em] text-primary hover:text-primary-fixed border border-primary/20 hover:border-primary/50 bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-[16px]">
              {expanded ? "expand_less" : "expand_more"}
            </span>
            {expanded ? "COLLAPSE DOSSIER" : "READ FULL SCIENTIFIC DOSSIER"}
          </button>
        </div>
      </div>
    </GlassPanel>
  );
}
