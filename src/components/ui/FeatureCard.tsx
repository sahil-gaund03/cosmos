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
        className={`group relative block h-full p-8 rounded-lg border border-outline-variant/40 bg-surface-container overflow-hidden
          hover:border-primary/50 transition-all duration-500
          cursor-pointer ${className || ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="p-3 rounded-full bg-surface-bright border border-outline-variant/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
            arrow_forward
          </span>
        </div>
        <div className="relative z-10 mt-4">
          <h4 className="text-label-caps text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">{title}</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors duration-300">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
