"use client";

import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import RevealOnScroll from "@/components/effects/RevealOnScroll";

export default function Footer() {
  return (
    <RevealOnScroll>
      <footer className="relative w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="font-[Sora] text-primary text-[28px] md:text-[32px] font-medium tracking-[0.02em] mb-4">
                {SITE_CONFIG.name}
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-4">
              <h4 className="text-label-caps text-tertiary mb-4">
                NAVIGATION
              </h4>
              <nav className="grid grid-cols-2 gap-2">
                {NAV_LINKS.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* System Status */}
            <div className="md:col-span-4">
              <h4 className="text-label-caps text-tertiary mb-4">
                SYSTEM STATUS
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
                  <span className="text-sm text-on-surface-variant">
                    All Systems Operational
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
                  <span className="text-sm text-on-surface-variant">
                    ISS Telemetry Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
                  <span className="text-sm text-on-surface-variant">
                    AI Neural Engine Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant/10 pt-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-6">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-caps text-tertiary-container hover:text-on-tertiary-container transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-label-caps text-tertiary text-center">
              {SITE_CONFIG.copyright}
            </p>
          </div>
        </div>
      </footer>
    </RevealOnScroll>
  );
}
