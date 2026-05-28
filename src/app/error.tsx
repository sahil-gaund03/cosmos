"use client";

import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      {/* Error Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-error/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-error text-5xl">
            warning
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-error-container flex items-center justify-center">
          <span className="text-on-error-container text-xs font-bold">!</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-[Sora] text-3xl md:text-4xl font-semibold tracking-[0.05em] text-error mb-4">
        SYSTEM MALFUNCTION
      </h1>

      {/* Error message */}
      <p className="text-body-md text-on-surface-variant mb-2 max-w-md">
        An unexpected error occurred in the system.
      </p>

      {/* Error details in telemetry style */}
      <div className="glass-panel border border-outline-variant/40 rounded-lg p-4 mb-8 max-w-md">
        <span className="text-label-caps text-tertiary block mb-1">
          ERROR LOG
        </span>
        <p className="text-telemetry-data text-error/80 font-mono text-xs break-all">
          {error.message || "Unknown error"}
        </p>
        {error.digest && (
          <p className="text-[10px] text-tertiary-container mt-2">
            DIGEST: {error.digest}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button onClick={reset} variant="primary">
          Retry System
        </Button>
        <Button href="/" variant="secondary">
          Return to Base
        </Button>
      </div>
    </div>
  );
}
