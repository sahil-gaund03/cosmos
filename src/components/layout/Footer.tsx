"use client";

import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import RevealOnScroll from "@/components/effects/RevealOnScroll";

export default function Footer() {
  return (
    <RevealOnScroll>
      <footer className="relative w-full mt-24 border-t border-outline-variant/30 glass-panel">
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 relative z-10">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 mb-16">
            
            {/* Column 1: Brand & Socials */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <div className="font-[Sora] text-primary text-[28px] md:text-[32px] font-medium tracking-[0.02em] mb-3">
                  {SITE_CONFIG.name}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
                  {SITE_CONFIG.description}
                </p>
              </div>

              {/* Social and Repository Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sahil-gaund03/cosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-panel-heavy flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="GitHub Repository"
                >
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <a
                  href="https://twitter.com/nexus_cosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-panel-heavy flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Twitter X"
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <a
                  href="mailto:support@nexus-cosmos.dev"
                  className="w-10 h-10 rounded-full glass-panel-heavy flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Support Mail"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </a>
              </div>
            </div>

            {/* Column 2: Dashboard Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-label-caps text-tertiary mb-5 font-bold tracking-wider">
                CORE SYSTEM PAGES
              </h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="material-symbols-outlined text-[16px] text-tertiary-container group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact & Attributions */}
            <div className="md:col-span-2">
              <h4 className="text-label-caps text-tertiary mb-5 font-bold tracking-wider">
                CREDITS & DATA
              </h4>
              <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
                <p>NASA Open APIs</p>
                <p>TLE Orbit Telemetry</p>
                <p>Three.js WebGL</p>
                <p>Gemini LLM</p>
              </div>
            </div>

            {/* Column 4: System Operational Status */}
            <div className="md:col-span-3">
              <h4 className="text-label-caps text-tertiary mb-5 font-bold tracking-wider">
                TELEMETRY STATUS
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot shrink-0" />
                  <span className="text-sm text-on-surface-variant font-medium">
                    All Core Nodes Online
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary pulse-dot shrink-0" />
                  <span className="text-sm text-on-surface-variant font-medium">
                    ISS Orbit Telemetry Live
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary pulse-dot shrink-0" />
                  <span className="text-sm text-on-surface-variant font-medium">
                    Space Weather Feed Operational
                  </span>
                </div>
                <div className="text-xs text-tertiary-container/80 pt-2 font-mono">
                  PLATFORM CORE: v1.0.0-beta
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant/10 pt-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-caps text-tertiary-container hover:text-primary transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-label-caps text-tertiary-container/70 text-center text-xs tracking-wider">
              {SITE_CONFIG.copyright}
            </p>
          </div>

        </div>
      </footer>
    </RevealOnScroll>
  );
}
