"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { navbarVariants } from "@/lib/motion";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={isHidden ? "hidden" : "visible"}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] rounded-full
          ${isScrolled ? "glass-panel-heavy shadow-lg shadow-black/20" : "bg-transparent"}
          border ${isScrolled ? "border-outline-variant/50" : "border-transparent"}
          flex justify-between items-center px-6 md:px-8 py-3 md:py-4 z-[100]
          transition-all duration-500`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-[Sora] text-xl md:text-[32px] font-medium leading-[1.2] tracking-[0.02em] text-primary hover:text-primary-fixed transition-colors"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-label-caps transition-colors duration-300
                ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Desktop Icons */}
          <div className="hidden xl:flex gap-4 mr-2">
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Profile">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Notifications">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Settings">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>

          {/* CTA Button */}
          <Link
            href="/iss-tracker"
            className="hidden sm:inline-flex bg-primary-container text-on-primary-container px-5 md:px-6 py-2 rounded-full
              text-label-caps
              transition-all duration-300
              hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(82,102,235,0.4)]
              active:scale-95"
          >
            Launch Mission
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-on-surface-variant hover:text-primary transition-colors p-1"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
