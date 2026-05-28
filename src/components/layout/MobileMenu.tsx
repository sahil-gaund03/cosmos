"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { mobileMenuVariants, menuItemVariants } from "@/lib/motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
          />

          {/* Menu Panel */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-[85%] max-w-[400px]
              bg-surface-container-lowest/95 backdrop-blur-xl
              border-l border-outline-variant/30
              z-[200] flex flex-col p-8 pt-20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>

            {/* Logo */}
            <div className="font-[Sora] text-2xl font-medium text-primary tracking-[0.02em] mb-10">
              {SITE_CONFIG.name}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-200
                      ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary border-l-2 border-primary"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20"
                      }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {link.icon}
                    </span>
                    <span className="text-label-caps">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="mt-auto pt-8 border-t border-outline-variant/20">
              <Link
                href="/iss-tracker"
                onClick={onClose}
                className="block w-full text-center bg-primary-container text-on-primary-container
                  px-6 py-3 rounded-full text-label-caps
                  transition-all duration-300
                  hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(82,102,235,0.4)]"
              >
                Launch Mission
              </Link>
              <p className="text-[10px] text-tertiary-container text-center mt-4 tracking-wider uppercase">
                {SITE_CONFIG.copyright}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
