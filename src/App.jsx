import React, { useRef, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './lib/gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FillerSection from './components/FillerSection';
import ScrollProgress from './components/ScrollProgress';
import { useReducedMotion } from './hooks/useReducedMotion';

/**
 * Root Application component.
 * Integrates Lenis inertia smooth scrolling synchronized directly with the GSAP ticker
 * and ScrollTrigger update cycle.
 */
export default function App() {
  const navRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If the user prefers reduced motion, skip inertia smoothing and rely on native scrolling
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis scroll position with ScrollTrigger calculation cycle
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis RAF loop through GSAP's central ticker
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    // Prevent lag jump after tab switching
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-dark-950 text-white selection:bg-accent selection:text-black">
      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Agency Navigation */}
      <Navbar ref={navRef} />

      {/* Main Content Area */}
      <main id="main-content" role="main">
        {/* Core Hero Experience */}
        <Hero navRef={navRef} />

        {/* Narrative Filler Sections for Scroll Depth */}
        <FillerSection />
      </main>
    </div>
  );
}
