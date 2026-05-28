import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      {/* 404 number with glow */}
      <div className="relative mb-6">
        <h1 className="font-[Sora] text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-6xl md:text-7xl animate-float">
            signal_disconnected
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-[Sora] text-3xl md:text-4xl font-semibold tracking-[0.05em] text-on-surface mb-4">
        SIGNAL LOST
      </h2>

      {/* Description */}
      <p className="text-body-lg text-on-surface-variant mb-2 max-w-md">
        The requested coordinates could not be located in our system.
      </p>
      <p className="text-sm text-tertiary-container mb-8">
        The signal may have drifted beyond our tracking range.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" variant="primary" icon="home">
          Return to Base
        </Button>
        <Button href="/iss-tracker" variant="secondary" icon="satellite_alt">
          Track ISS
        </Button>
      </div>
    </div>
  );
}
