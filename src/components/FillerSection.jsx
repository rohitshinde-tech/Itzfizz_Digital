import React from 'react';

/**
 * Filler sections providing substantial scroll length so the pinned hero
 * scrubs through its full animation sequence and scrolls smoothly out of view.
 */
export default function FillerSection() {
  return (
    <div className="relative z-30 bg-dark-950 text-white">
      {/* Section 1: Capabilities */}
      <section
        id="capabilities"
        className="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 border-t border-white/[0.06] bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Core Capabilities
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-3xl">
            Engineered For Speed, Velocity & Kinetic Interaction.
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed">
            We bridge ultra-precise GPU-accelerated motion choreography with production-grade web architecture, creating immersive brand interactions that drive measurable conversion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-2xl hover:border-accent/30 transition-all duration-300">
              <span className="font-mono text-xs text-accent">01 / ARCHITECTURE</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2 text-white">
                Scroll-Driven Physics
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Hardware-accelerated scrubbed timelines linked with sub-pixel rendering pipelines for 60fps buttery fluidity.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:border-accent/30 transition-all duration-300">
              <span className="font-mono text-xs text-accent">02 / VISUAL SYSTEM</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2 text-white">
                Kinetic Typography
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Responsive clamp-scaled letterforms with overflow masks and multi-dimensional optical letter spacing.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:border-accent/30 transition-all duration-300">
              <span className="font-mono text-xs text-accent">03 / METRICS</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2 text-white">
                Live Data Telemetry
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Direct DOM text interpolation counters bypassing component render cycles for peak Lighthouse performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Selected Impact Work */}
      <section
        id="impact"
        className="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 border-t border-white/[0.06] bg-gradient-to-b from-dark-950 via-dark-850 to-dark-950"
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Selected Impact
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-3xl">
            Where Brand Emotion Meets Technical Rigor.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="group relative rounded-2xl p-8 glass-panel overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-300">
              <div className="h-48 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  Telemetry Engine Preview
                </span>
              </div>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Automotive & Mobility</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1 mb-3">
                Autonomous Fleet Navigation
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Engineered the next-generation control cockpit and interactive telemetry interface for Europe's leading autonomous transport consortium.
              </p>
            </div>

            <div className="group relative rounded-2xl p-8 glass-panel overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-300">
              <div className="h-48 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  Spatial Platform Preview
                </span>
              </div>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Luxury E-Commerce</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1 mb-3">
                Hypercar Configurator 3D
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Built real-time interactive product customization experiences reaching 1.2M active monthly collectors worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Agency & CTA */}
      <section
        id="agency"
        className="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 border-t border-white/[0.06] bg-dark-950"
      >
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <span className="inline-block px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full mb-6">
            Ready To Launch
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Let's Build Something <span className="text-accent underline decoration-accent/40 decoration-wavy">Iconic</span>.
          </h2>

          <p className="font-sans text-base sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Partner with ITZFIZZ to craft high-conversion digital flagships, scroll-driven interactive narratives, and motion systems.
          </p>

          <div id="contact" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@itzfizz.digital"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-mono font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300"
            >
              Start A Conversation
            </a>
            <a
              href="#hero"
              className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-mono text-sm tracking-wider uppercase rounded-full hover:border-accent/40 transition-all duration-300"
            >
              Back To Top ↑
            </a>
          </div>

          <footer className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
            <p>© {new Date().getFullYear()} ITZFIZZ DIGITAL. All rights reserved.</p>
            <p>Designed with GSAP + ScrollTrigger + Lenis Smooth Scroll</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
