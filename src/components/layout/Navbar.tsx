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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  // Split navigation links to prevent overflow on desktop
  const primaryLinks = NAV_LINKS.filter(link => 
    ["Home", "ISS Tracker", "NASA Gallery", "AI Assistant", "Solar System"].includes(link.label)
  );
  
  const dropdownLinks = NAV_LINKS.filter(link => 
    !["Home", "ISS Tracker", "NASA Gallery", "AI Assistant", "Solar System"].includes(link.label)
  );

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={isHidden ? "hidden" : "visible"}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] rounded-full
          ${isScrolled ? "glass-panel-heavy shadow-lg shadow-black/20" : "bg-transparent"}
          border ${isScrolled ? "border-outline-variant/50" : "border-transparent"}
          flex justify-between items-center px-4 md:px-6 py-3 z-[100]
          transition-all duration-500`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-[Sora] text-lg sm:text-xl md:text-2xl font-semibold leading-none tracking-[0.02em] text-primary hover:text-primary-fixed transition-colors whitespace-nowrap shrink-0 mr-4"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-wider font-semibold uppercase transition-colors duration-300 whitespace-nowrap
                ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Systems Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`text-[11px] tracking-wider font-semibold uppercase flex items-center gap-1 transition-colors duration-300 whitespace-nowrap pb-1
                ${
                  dropdownLinks.some(link => pathname === link.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
            >
              <span>More</span>
              <span className="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl
              glass-panel-heavy border border-outline-variant/40 shadow-2xl p-2 z-[110]
              transition-all duration-300 origin-top
              ${isDropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              {dropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-[11px] tracking-wider font-semibold uppercase
                    ${
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20"
                    }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0 ml-4">
          {/* CTA Button */}
          <Link
            href="/iss-tracker"
            className="hidden sm:inline-flex bg-primary-container text-on-primary-container px-4 py-2 rounded-full
              text-[11px] font-semibold tracking-wider uppercase
              transition-all duration-300
              hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(82,102,235,0.4)]
              active:scale-95 whitespace-nowrap"
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
