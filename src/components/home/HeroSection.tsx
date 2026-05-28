"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden" ref={imageRef}>
        <motion.div
          className="w-[110%] h-[110%] -ml-[5%] -mt-[5%]"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)`,
            transition: "transform 0.1s ease-out",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/hero-earth.png"
            alt="Cinematic Earth from orbit"
            fill
            className="object-cover opacity-80"
            priority
            sizes="110vw"
          />
        </motion.div>

        {/* Gradient overlay — bottom fade to surface */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface/30 via-transparent to-surface/30" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 md:px-16 max-w-4xl"
      >
        {/* Tagline Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-label-caps text-primary">
              AI-Powered Space Intelligence
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-headline-display text-on-surface mb-6"
        >
          Explore Space Intelligence{" "}
          <span className="text-primary">in Real Time</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto"
        >
          Track the ISS, explore NASA imagery, and interact with AI-powered
          astronomy systems. The universe, decoded.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Button variant="primary" size="lg" href="/iss-tracker">
            Launch Dashboard
          </Button>
          <Button variant="secondary" size="lg" href="/iss-tracker">
            Track ISS Live
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-tertiary-container tracking-[0.2em] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="material-symbols-outlined text-tertiary-container text-[20px]">
            expand_more
          </span>
        </motion.div>
      </motion.div>
    </header>
  );
}
