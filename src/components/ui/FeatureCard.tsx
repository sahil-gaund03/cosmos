"use client";

import { motion } from "framer-motion";
import { fadeInUp, hoverGlow } from "@/lib/motion";
import Link from "next/link";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  delay = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={hoverGlow}
    >
      <Link
        href={href}
        className={`group block h-full p-8 rounded-lg border border-outline-variant/40 bg-surface-container
          hover:bg-surface-bright hover:border-primary/30 transition-all duration-300
          cursor-pointer ${className || ""}`}
      >
        <div className="flex justify-between items-start mb-6">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors duration-300">
            arrow_forward
          </span>
        </div>
        <div>
          <h4 className="text-label-caps text-on-surface mb-2">{title}</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
