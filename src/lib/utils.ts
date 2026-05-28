// ============================================
// NEXUS COSMOS — Utility Functions
// ============================================

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names conditionally (simplified clsx replacement)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

/**
 * Delay execution
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
