"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "live" | "status" | "tag";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-[Geist] text-[12px] font-semibold tracking-[0.1em] uppercase",
        {
          "px-4 py-1 border border-primary/30 bg-primary/10 text-primary":
            variant === "default",
          "px-2 py-0.5 bg-primary/20 text-[10px] text-primary pulse-dot font-bold":
            variant === "live",
          "px-3 py-1 bg-surface-container-high text-on-surface-variant border border-outline-variant/40":
            variant === "status",
          "px-3 py-1 border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(82,102,235,0.3)] transition-all cursor-pointer":
            variant === "tag",
        },
        className
      )}
    >
      {variant === "live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
      )}
      {children}
    </span>
  );
}
