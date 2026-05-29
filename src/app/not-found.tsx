import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 text-center z-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-xl glass-panel p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-2xl">
        {/* 404 number with glow */}
        <div className="relative mb-6">
          <h1 className="font-[Sora] text-[100px] md:text-[140px] font-bold text-primary/15 leading-none select-none tracking-[0.05em]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-6xl md:text-7xl animate-pulse">
              satellite_alt
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-[Sora] text-2xl md:text-3xl font-semibold tracking-[0.05em] text-on-surface mb-3 uppercase">
          SIGNAL DEGRADED
        </h2>

        {/* Description */}
        <p className="text-body text-on-surface-variant mb-6 max-w-sm mx-auto leading-relaxed">
          The requested coordinate cluster or telemetric data link is out of range. Check transmitter frequency.
        </p>

        {/* Console Log Panel */}
        <div className="w-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl p-4 mb-8 text-left font-mono text-[11px] text-tertiary-container/90 leading-normal space-y-1">
          <div>[SYS] CONNECTING TO ORBITAL NODE...</div>
          <div className="text-red-400">[ERR] TIMEOUT: ADDR NOT RESPONDING</div>
          <div>[SYS] BEACON EMITTING AT 404.00 MHz</div>
          <div>[SYS] SEEKING STABLE APOGEE...</div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" icon="home">
            Return to Bridge
          </Button>
          <Button href="/iss-tracker" variant="secondary" icon="satellite_alt">
            Locate ISS
          </Button>
        </div>
      </div>
    </div>
  );
}
