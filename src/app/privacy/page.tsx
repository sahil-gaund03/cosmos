export const metadata = {
  title: "Privacy Policy | NEXUS COSMOS",
  description: "Privacy policy and telemetry details for the NEXUS COSMOS orbital platform.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <span className="text-label-caps text-tertiary mb-2 block">DATA SECURITY PROTOCOL</span>
          <h1 className="font-[Sora] text-4xl md:text-5xl font-bold tracking-[0.02em] text-on-surface mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-on-surface-variant/80">
            Last Updated: May 2026 • Platform Status: Operational
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                1. Data Collection & Telemetry
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                NEXUS COSMOS is designed as an open-source educational dashboard and AI space intelligence system. We do not sell or monetize user data.
              </p>
              <ul className="list-disc list-inside text-on-surface-variant/90 space-y-2 ml-2">
                <li><strong>Local Session Cache:</strong> NASA API responses and layout states are cached locally in your browser's session storage.</li>
                <li><strong>Anonymous Server Logs:</strong> Standard request logs (IP address, user-agent, timestamp) may be collected for security monitoring and rate-limiting.</li>
                <li><strong>AI Assistant Queries:</strong> Questions asked to the AI Space Assistant are processed through the Gemini API. No personally identifying info is attached to these requests.</li>
              </ul>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">cookie</span>
                2. Cookies & Local Storage
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                We use browser standard cookies and Local Storage strictly to enhance platform performance and retain user preferences.
              </p>
              <table className="w-full text-left border-collapse text-sm text-on-surface-variant mt-4">
                <thead>
                  <tr className="border-b border-outline-variant/20">
                    <th className="py-2 font-bold text-on-surface">Storage Key</th>
                    <th className="py-2 font-bold text-on-surface">Purpose</th>
                    <th className="py-2 font-bold text-on-surface">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-3 font-mono text-tertiary">nexus_theme</td>
                    <td className="py-3">Saves light/dark aesthetic configuration.</td>
                    <td className="py-3">Persistent</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-3 font-mono text-tertiary">nasa_cache_*</td>
                    <td className="py-3">Caches NASA images locally to reduce API quota consumption.</td>
                    <td className="py-3">24 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-tertiary">nexus_auth_token</td>
                    <td className="py-3">Secures telemetry endpoints and panel permissions.</td>
                    <td className="py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shield</span>
                3. Data Security & Third-Party APIs
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                External APIs (NASA Open APIs, Open-Notify, OpenWeatherMap, Gemini API) are invoked directly or via secure system proxies to fetch live space parameters. Your geographic location, when provided for Space Weather auroral tracking, is processed locally and never stored on external databases.
              </p>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50">
              <h3 className="font-[Sora] text-md font-bold text-on-surface mb-3 uppercase tracking-wider">
                Support & Contact
              </h3>
              <p className="text-sm text-on-surface-variant/90 mb-4 leading-relaxed">
                If you have questions about our data policies or security practices, reach out to our team:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>security@nexus-cosmos.dev</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                  <span>github.com/sahil-gaund03/cosmos</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50 text-xs text-on-surface-variant/70 leading-relaxed">
              <span className="font-bold text-on-surface mb-2 block uppercase">Note for Recruiters & Demos:</span>
              This system compiles to static production-ready bundles optimized for Vercel, ensuring zero security leak paths for secrets. All access tokens are routed through next.js proxy headers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}