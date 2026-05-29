import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";
import GalleryHUD from "@/components/gallery/GalleryHUD";

export const metadata: Metadata = {
  title: "NASA Media Intelligence | NEXUS COSMOS",
  description:
    "Explore NASA's APOD (Astronomy Picture of the Day) and deep-space archives. Search astronomical photography, view HD descriptions, and curate favorites.",
};

export default function NASAGalleryPage() {
  return (
    <SectionContainer className="pt-28 pb-16 min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-caps text-primary tracking-[0.2em]">
            SYSTEM LEVEL: BETA // PHASE 4 ONLINE
          </span>
        </div>
        <h1 className="font-headline-display text-[28px] md:text-[36px] font-semibold text-on-surface uppercase tracking-tight">
          NASA Media Intelligence Archive
        </h1>
        <p className="text-body-md text-on-surface-variant max-w-3xl">
          Search the vast visual library compiled by NASA’s deep-space sensors. Preview high-definition imagery, explore detailed scientific breakdowns, and bookmark your favorite astronomical discoveries.
        </p>
      </div>

      {/* Main Gallery Dashboard */}
      <GalleryHUD />
    </SectionContainer>
  );
}
