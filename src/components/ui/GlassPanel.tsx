"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { scaleIn, hoverGlow } from "@/lib/motion";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverable?: boolean;
  border?: boolean;
  as?: "div" | "section" | "article";
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const MotionDiv = motion.div;
const MotionSection = motion.section;
const MotionArticle = motion.article;

export default function GlassPanel({
  children,
  className,
  glow = false,
  hoverable = false,
  border = true,
  as: Component = "div",
  onClick,
}: GlassPanelProps) {
  const MotionComponent = Component === "section" 
    ? MotionSection 
    : Component === "article" 
    ? MotionArticle 
    : MotionDiv;

  return (
    <MotionComponent
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={hoverable ? hoverGlow : undefined}
      onClick={onClick}
      className={cn(
        "glass-panel rounded-lg",
        border && "border border-outline-variant/40",
        glow && "mercury-glow",
        hoverable && "cursor-pointer transition-colors hover:border-primary/50",
        className
      )}
    >
      {children}
    </MotionComponent>
  );
}
