export const metadata = {
  title: "License Info | NEXUS COSMOS",
  description: "Licensing and code distribution guidelines for NEXUS COSMOS.",
};

export default function LicensePage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <span className="text-label-caps text-tertiary mb-2 block">OPEN SOURCE STANDARDS</span>
          <h1 className="font-[Sora] text-4xl md:text-5xl font-bold tracking-[0.02em] text-on-surface mb-4">
            License & Attributions
          </h1>
          <p className="text-sm text-on-surface-variant/80">
            Open-Source Codebase • MIT License
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">code</span>
                MIT Software License
              </h2>
              <div className="bg-surface-container-lowest/50 border border-outline-variant/20 p-5 rounded-xl font-mono text-xs text-on-surface-variant/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`MIT License

Copyright (c) 2026 NEXUS COSMOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS-IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
              </div>
            </section>

            <section className="glass-panel p-6 md:p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <h2 className="font-[Sora] text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">photo_camera</span>
                NASA Media & Gallery License
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Images, video, and audio assets compiled in the NASA Gallery are retrieved from NASA libraries and archives. According to United States copyright law, works created by the U.S. government are generally in the public domain. Content is used in accordance with the NASA Media Usage Guidelines. No commercial ownership of NASA assets is claimed or implied.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/50 text-xs text-on-surface-variant/70 leading-relaxed">
              <span className="font-bold text-on-surface mb-2 block uppercase text-[10px] tracking-wider text-tertiary">
                CONTRIBUTORS
              </span>
              All third-party modules (Three.js, Framer Motion, Tailwind, Lucide equivalents, React, Next.js) are property of their respective creators and used under permissive open-source licenses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}