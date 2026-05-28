"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import { PLATFORM_STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  inView,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TelemetryPreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <SectionContainer className="py-24 md:py-32" id="telemetry-preview">
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-headline-display text-on-surface mb-4">
          Space <span className="text-primary">by the Numbers</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Real-time data streams from across the solar system, aggregated and
          visualized for exploration.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        ref={sectionRef}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {PLATFORM_STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="glass-panel border border-outline-variant/40 rounded-lg p-6 md:p-8 text-center
              hover:border-primary/50 transition-colors group"
          >
            <div className="font-[Geist] text-[36px] md:text-[48px] font-semibold text-primary mb-2 tracking-tight">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                inView={isInView}
                duration={2000 + index * 300}
              />
            </div>
            <span className="text-label-caps text-tertiary group-hover:text-on-surface-variant transition-colors">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16"
      >
        {[
          {
            icon: "satellite_alt",
            title: "Real-Time Tracking",
            desc: "Live telemetry from the ISS and 7,800+ satellites in Earth orbit.",
          },
          {
            icon: "analytics",
            title: "Data Analytics",
            desc: "Advanced visualizations of asteroid trajectories, Mars weather, and exoplanets.",
          },
          {
            icon: "neurology",
            title: "AI Intelligence",
            desc: "Gemini-powered analysis engine for astronomical data interpretation.",
          },
        ].map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            className="glass-panel border border-outline-variant/40 rounded-lg p-6 md:p-8
              hover:border-primary/30 hover:bg-surface-container/60 transition-all group"
          >
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">
              {feature.icon}
            </span>
            <h4 className="text-label-caps text-on-surface mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
