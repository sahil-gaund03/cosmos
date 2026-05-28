"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features?: string[];
}

export default function PlaceholderPage({
  title,
  subtitle,
  icon,
  description,
  features = [],
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        {/* Icon */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-primary text-5xl">
              {icon}
            </span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <Badge variant="status">Coming Soon — Phase Integration</Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-headline-display text-on-surface mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-headline-lg-mobile text-primary mb-6"
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-body-lg text-on-surface-variant mb-8 max-w-lg mx-auto"
        >
          {description}
        </motion.p>

        {/* Features Preview */}
        {features.length > 0 && (
          <motion.div
            variants={fadeInUp}
            className="glass-panel border border-outline-variant/40 rounded-lg p-6 mb-8"
          >
            <span className="text-label-caps text-tertiary block mb-4">
              PLANNED CAPABILITIES
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-full border border-outline-variant/40 text-xs text-on-surface-variant"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div variants={fadeInUp}>
          <Button href="/" variant="secondary" icon="arrow_back">
            Return to Base
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
