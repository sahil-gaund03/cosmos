"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tapScale } from "@/lib/motion";
import Link from "next/link";
import React from "react";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  className?: string;
};

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-[Geist] text-[12px] font-semibold tracking-[0.1em] uppercase",
    "transition-all duration-300 ease-out",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    {
      // Primary: solid Mercury Blue with glow
      "bg-primary text-on-primary mercury-glow hover:scale-105":
        variant === "primary",
      // Secondary: outline with ghost fill on hover
      "border border-outline text-on-surface hover:bg-surface-variant/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(187,195,255,0.2)]":
        variant === "secondary",
      // Ghost: no border, subtle hover
      "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20":
        variant === "ghost",
    },
    {
      "px-4 py-2 text-[11px]": size === "sm",
      "px-8 py-3": size === "md",
      "px-10 py-4": size === "lg",
    },
    className
  );

  const content = (
    <>
      {icon && (
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.div whileTap={tapScale}>
        <Link href={href} className={baseClasses} {...(props as any)}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={tapScale}
      className={baseClasses}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
