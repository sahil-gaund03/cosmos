export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-surface">
      {/* Glow ring */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-outline-variant/30 animate-spin" style={{ borderTopColor: '#bbc3ff' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
        </div>
      </div>

      {/* Logo */}
      <h1 className="font-[Sora] text-2xl md:text-3xl font-semibold tracking-[0.05em] text-primary mb-4">
        NEXUS COSMOS
      </h1>

      {/* Status text */}
      <div className="flex items-center gap-2">
        <span className="text-label-caps text-tertiary-container">
          INITIALIZING SYSTEMS
        </span>
        <span className="flex gap-1">
          <span className="w-1 h-1 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: '0s' }} />
          <span className="w-1 h-1 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: '0.2s' }} />
          <span className="w-1 h-1 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: '0.4s' }} />
        </span>
      </div>
    </div>
  );
}
