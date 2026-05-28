"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, defaultTransition } from "@/lib/motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const variants = directionVariants[direction] || fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
