export const metadata = {
  title: "Disclaimer | NEXUS COSMOS",
  description: "Scientific and operational disclaimer for NEXUS COSMOS.",
};

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <span className="text-label-caps text-tertiary mb-2 block">LIMITATION OF LIABILITY</span>
          <h1 className="font-[Sora] text-4xl md:text-5xl font-bold tracking-[0.02em] text-on-surface mb-4">
            Disclaimer
          </h1>
          <p className="text-sm text-on-surface-variant/80">
            Last Updated: May 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/30">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">warning</span>
                Educational & Non-Critical Simulation Only
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                All celestial tracking data, including International Space Station (ISS) orbital position, planetary trajectories, solar wind velocities, auroral coordinates, and launches telemetry, are gathered from public feeds or calculated programmatically.
              </p>
              <div className="bg-red-950/20 border border-red-500/30 p-4 rounded-xl text-red-200/90 text-sm flex gap-3 items-start">
                <span className="material-symbols-outlined text-red-400 shrink-0">info</span>
                <span>
                  <strong>CRITICAL MISSION DISCLAIMER:</strong> Do not attempt to use NEXUS COSMOS or its underlying data streams for actual satellite orbits management, professional aeronautical operations, scientific papers, astronomical navigation, or any life-critical aerospace task.
                </span>
              </div>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                AI Assistant Accuracy
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                The AI Space Assistant provides recommendations, astronomy trivia, and physical explanations using the Gemini Large Language Model. LLMs are prone to occasional hallucinations or incorrect mathematical calculations regarding space anomalies. Always verify AI-provided celestial parameters with primary scientific literature (e.g., NASA, ESA, JPL databases).
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50 text-xs text-on-surface-variant/70 leading-relaxed">
              <span className="font-bold text-on-surface mb-2 block uppercase text-[10px] tracking-wider text-tertiary">
                AFFILIATION
              </span>
              This project is completely unaffiliated, unendorsed, and unassociated with NASA (National Aeronautics and Space Administration), ESA, ISRO, SpaceX, or the Government of the United States. All NASA logos and imagery displayed inside the dashboard are the property of their respective owners.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}