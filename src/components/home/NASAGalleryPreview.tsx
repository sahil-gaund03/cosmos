"use client";

import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import RevealOnScroll from "@/components/effects/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function NASAGalleryPreview() {
  const previewImages = [
    {
      src: "/images/nebula-preview.png",
      alt: "Deep space nebula captured by Hubble Space Telescope",
      title: "Carina Nebula",
      span: "row-span-2",
    },
    {
      src: "/images/mars-surface.png",
      alt: "Mars surface landscape from NASA rovers",
      title: "Mars Surface",
      span: "",
    },
    {
      src: "/images/hero-earth.png",
      alt: "Earth from orbit showing aurora and atmosphere",
      title: "Earth Atmosphere",
      span: "",
    },
  ];

  return (
    <SectionContainer className="py-24 md:py-32">
      {/* Section Header */}
      <RevealOnScroll className="text-center mb-12 md:mb-16">
        <Badge variant="default" className="mb-6">
          NASA Media Intelligence
        </Badge>
        <h2 className="text-headline-display text-on-surface mb-4">
          The Universe in{" "}
          <span className="text-primary">Ultra Definition</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore NASA&apos;s vast archive of astronomical imagery — from Mars
          rovers to deep-space telescopes.
        </p>
      </RevealOnScroll>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {previewImages.map((image, index) => (
          <RevealOnScroll key={image.title} delay={index * 0.1}>
            <Link
              href="/nasa-gallery"
              className={`group relative block overflow-hidden rounded-lg border border-outline-variant/40
                bg-surface-container ${image.span}
                ${index === 0 ? "h-[350px] md:h-full md:min-h-[480px]" : "h-[250px] md:h-[230px]"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="text-label-caps text-primary mb-1 block">
                    {image.title}
                  </span>
                  <span className="material-symbols-outlined text-on-surface text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {/* CTA */}
      <RevealOnScroll className="text-center">
        <Button variant="secondary" href="/nasa-gallery" icon="arrow_forward">
          Explore Full Gallery
        </Button>
      </RevealOnScroll>
    </SectionContainer>
  );
}
