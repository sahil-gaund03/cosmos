// ============================================
// NEXUS COSMOS — Motion System
// Framer Motion Variants & Configurations
// ============================================

import type { Variants, Transition } from "framer-motion";

// ---- Transition Presets ----

export const defaultTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const gentleTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

// ---- Animation Variants ----

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// ---- Container Variants (for staggering children) ----

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ---- Hover Animations ----

export const hoverScale = {
  scale: 1.02,
  transition: snappySpring,
};

export const hoverGlow = {
  scale: 1.02,
  boxShadow: "0 0 30px 6px rgba(82, 102, 235, 0.3)",
  transition: snappySpring,
};

export const tapScale = {
  scale: 0.98,
};

// ---- Page Transition Variants ----

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// ---- Navbar Variants ----

export const navbarVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: smoothSpring,
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: smoothSpring,
  },
};

// ---- Mobile Menu Variants ----

export const mobileMenuVariants: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 30,
  },
  open: {
    opacity: 1,
    x: 0,
  },
};
