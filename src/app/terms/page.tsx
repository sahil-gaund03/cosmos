export const metadata = {
  title: "Terms of Service | NEXUS COSMOS",
  description: "Terms and conditions for utilizing the NEXUS COSMOS space operating system dashboard.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <span className="text-label-caps text-tertiary mb-2 block">MEMORANDUM OF OPERATIONS</span>
          <h1 className="font-[Sora] text-4xl md:text-5xl font-bold tracking-[0.02em] text-on-surface mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-on-surface-variant/80">
            Last Updated: May 2026 • Version: 1.0.0
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">rule</span>
                1. Acceptance of Terms & Use Case
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                By launching the NEXUS COSMOS platform, you acknowledge and agree to these terms of service. This dashboard is provided as-is for educational purposes, scientific hobbyists, and showcase demonstrations.
              </p>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">cloud_download</span>
                2. API Usage & Intellectual Property
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The content rendered throughout this application consists of code created by NEXUS COSMOS contributors and public scientific assets:
              </p>
              <ul className="list-disc list-inside text-on-surface-variant/90 space-y-2 ml-2 mb-4">
                <li><strong>NASA API Data:</strong> The NASA APIs (APOD, Asteroids/NeoWs, Image Libraries) provide data subject to NASA's public media guidelines. NASA does not endorse this application.</li>
                <li><strong>ISS Location Coordinates:</strong> Open-Notify API data is public telemetry tracked in real-time.</li>
                <li><strong>WebGL & Three.js Orbits:</strong> 3D planetary rendering is calculated programmatically using physical orbit parameters.</li>
              </ul>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">gavel</span>
                3. Code License & Limitations
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The software codebase is licensed under the open-source MIT License. You may clone and modify it. However:
              </p>
              <ul className="list-disc list-inside text-on-surface-variant/90 space-y-2 ml-2">
                <li>Commercial redistribution of proprietary elements requires proper attribution.</li>
                <li>API keys included in personal forks are the sole responsibility of the user.</li>
                <li>We make no guarantees of uptime or accuracy for external telemetry feeds.</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50">
              <h3 className="font-[Sora] text-md font-bold text-on-surface mb-3 uppercase tracking-wider">
                Platform Rules
              </h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-green-400 text-[20px] shrink-0">check_circle</span>
                  <span>Feel free to use it for training and portfolio showcases.</span>
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-red-400 text-[20px] shrink-0">cancel</span>
                  <span>Do not send automated high-frequency requests that scrape NASA servers through our dashboard.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}