"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import RevealOnScroll from "@/components/effects/RevealOnScroll";

export default function ISSPreviewSection() {
  return (
    <SectionContainer className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Large ISS Preview Card */}
        <RevealOnScroll className="lg:col-span-8">
          <Link href="/iss-tracker" className="group block">
            <div className="relative h-[350px] md:h-[500px] rounded-lg overflow-hidden border border-outline-variant/40 bg-surface-container shadow-xl">
              <Image
                src="/images/iss-hologram.png"
                alt="ISS Tracking System Preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
                  <span className="text-label-caps text-primary">
                    LIVE TRACKING
                  </span>
                </div>
                <h3 className="text-headline-lg text-on-surface mb-2">
                  ISS Tracking System
                </h3>
                <p className="text-body-md text-on-surface-variant max-w-md">
                  Precision telemetry and real-time positioning from the
                  International Space Station.
                </p>
              </div>
            </div>
          </Link>
        </RevealOnScroll>

        {/* Side Feature Cards */}
        <RevealOnScroll delay={0.2} className="lg:col-span-4">
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {/* NASA Media Gallery Card */}
            <Link
              href="/nasa-gallery"
              className="group flex-1 min-h-[200px] md:min-h-[234px] p-6 md:p-8 rounded-lg border border-outline-variant/40 bg-surface-container
                flex flex-col justify-between
                hover:bg-surface-bright hover:border-primary/30 transition-all duration-300 cursor-pointer
                hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(82,102,235,0.15)]"
            >
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
                  photo_library
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors duration-300">
                  arrow_forward
                </span>
              </div>
              <div>
                <h4 className="text-label-caps text-on-surface mb-1">
                  NASA Media Gallery
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Archival imagery and live deep space feeds.
                </p>
              </div>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
}
