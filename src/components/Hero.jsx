import React, { useRef } from 'react';
import HeroHeadline from './HeroHeadline';
import HeroVisual from './HeroVisual';
import StatsRow from './StatsRow';
import { useIntroAnimation } from '../hooks/useIntroAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Hero section component.
 * Coordinates all sub-components, DOM references, intro timeline, and scrubbed ScrollTrigger.
 * Enforces 100svh (with 100vh fallback) and zero horizontal overflow.
 */
export default function Hero({ navRef }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const numberRefs = useRef([]);
  const bgGlowRef = useRef(null);

  const prefersReducedMotion = useReducedMotion();

  // 1. Initial entrance timeline (runs on mount)
  useIntroAnimation({
    containerRef: heroRef,
    navRef,
    headlineRef,
    visualRef,
    statsRef,
    numberRefs,
    prefersReducedMotion,
  });

  // 2. Scroll-driven scrubbed timeline (runs on scroll)
  useScrollAnimation({
    heroRef,
    headlineRef,
    visualRef,
    statsRef,
    bgGlowRef,
    prefersReducedMotion,
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen min-h-[100svh] w-full flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-4 sm:pb-8 px-4 bg-dark-950 select-none"
      aria-label="Hero Introduction"
    >
      {/* Subtle Ambient Parallax Background Layer */}
      <div
        ref={bgGlowRef}
        className="absolute inset-0 pointer-events-none bg-radial-hero opacity-80 will-change-transform"
        aria-hidden="true"
      />

      {/* Grid Pattern Overlay for Depth */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Center Group: Headline & Concept Visual */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center my-auto z-10">
        {/* Giant Letter-Spaced Headline */}
        <HeroHeadline ref={headlineRef} />

        {/* Centered Main Visual Element with Bloom & Ground Shadow */}
        <HeroVisual ref={visualRef} />
      </div>

      {/* Bottom Group: Impact Statistics */}
      <StatsRow ref={statsRef} numberRefs={numberRefs} />
    </section>
  );
}
