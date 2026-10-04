import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * Enhanced Scroll-Driven Animation Hook.
 * Implements a high-impact 3D kinetic drive-by sequence:
 * - Multi-axis spatial acceleration on the hypercar with perspective rotation
 * - Speed lines expanding horizontally to simulate wind tunnel velocity
 * - Split spatial typography: "WELCOME" recedes while "ITZFIZZ" surges with neon intensity
 * - Ground shadow tracks suspension lift and perspective change
 * - Mobile and desktop tailored viewports via gsap.matchMedia
 */
export function useScrollAnimation({
  heroRef,
  headlineRef,
  visualRef,
  statsRef,
  bgGlowRef,
  prefersReducedMotion,
}) {
  useEffect(() => {
    if (!heroRef.current || prefersReducedMotion) return;

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const mm = gsap.matchMedia();

    // ============================================================
    // DESKTOP & TABLET VIEWPORT (>= 769px)
    // ============================================================
    mm.add('(min-width: 769px)', () => {
      const visualEl = visualRef.current;
      const visualShadow = visualEl?.querySelector('.visual-shadow');
      const visualGlow = visualEl?.querySelector('.visual-glow');
      const speedLines = visualEl?.querySelectorAll('.speed-line');
      const hudBadges = visualEl?.querySelectorAll('.hud-badge');

      const headlineEl = headlineRef.current;
      const welcomeWord = headlineEl?.querySelector('.word-welcome');
      const itzfizzWord = headlineEl?.querySelector('.word-itzfizz');
      const letters = headlineEl ? headlineEl.querySelectorAll('.letter-char') : [];
      const statCards = statsRef.current ? statsRef.current.querySelectorAll('.stat-card') : [];

      if (visualEl) {
        gsap.set(visualEl, {
          transformOrigin: '50% 60%',
          force3D: true,
        });
      }

      // Master Pinned Scroll Timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=220%', // 220% viewport scrub for cinematic pacing
          pin: true,
          anticipatePin: 1,
          scrub: 1.2, // 1.2s smooth inertia lerp
          invalidateOnRefresh: true,
        },
      });

      // 1. Hypercar 3D Acceleration Drive-by
      if (visualEl) {
        scrollTl.to(
          visualEl,
          {
            x: '20vw',
            y: '-8vh',
            scale: 1.34,
            rotation: 6.0,
            rotateY: -10, // 3D perspective banking toward camera
            rotateX: 3,
            ease: 'power1.inOut',
          },
          0
        );

        // Ground shadow transforms with car lift & angle
        if (visualShadow) {
          scrollTl.to(
            visualShadow,
            {
              scaleX: 0.82,
              scaleY: 0.65,
              opacity: 0.3,
              y: '4vh',
              ease: 'power1.inOut',
            },
            0
          );
        }

        // Ambient glow tracks and blooms
        if (visualGlow) {
          scrollTl.to(
            visualGlow,
            {
              scale: 1.45,
              opacity: 0.85,
              ease: 'power1.inOut',
            },
            0
          );
        }

        // Kinetic Speed Lines dart across screen
        if (speedLines && speedLines.length > 0) {
          scrollTl.to(
            speedLines,
            {
              x: '-25vw',
              scaleX: 2.2,
              opacity: 0.9,
              stagger: 0.05,
              ease: 'power2.in',
            },
            0
          );
        }

        // HUD badges parallax away
        if (hudBadges && hudBadges.length > 0) {
          scrollTl.to(
            hudBadges,
            {
              y: -50,
              opacity: 0,
              stagger: 0.04,
              ease: 'power1.in',
            },
            0.05
          );
        }
      }

      // 2. Spatial Headline Split: "WELCOME" recedes, "ITZFIZZ" surges
      if (welcomeWord) {
        scrollTl.to(
          welcomeWord,
          {
            x: '-8vw',
            scale: 0.86,
            opacity: 0.2,
            filter: 'blur(4px)',
            ease: 'power1.inOut',
          },
          0
        );
      }

      if (itzfizzWord) {
        scrollTl.to(
          itzfizzWord,
          {
            x: '8vw',
            scale: 1.12,
            color: '#CCFF00', // Shifts to electric neon lime as hypercar surges
            opacity: 0.45,
            ease: 'power1.inOut',
          },
          0
        );
      }

      // Per-letter micro-spacing spread
      if (letters.length > 0) {
        scrollTl.to(
          letters,
          {
            x: (i, target) => {
              const offset = parseFloat(target.getAttribute('data-offset')) || 0;
              return offset * 12;
            },
            stagger: {
              each: 0.012,
              from: 'center',
            },
            ease: 'power1.inOut',
          },
          0
        );
      }

      // 3. Stats Row: Parallax lift and clean exit
      if (statCards.length > 0) {
        scrollTl.to(
          statCards,
          {
            y: -75,
            opacity: 0,
            stagger: 0.03,
            ease: 'power1.in',
          },
          0.08
        );
      }

      // 4. Background Glow Parallax
      if (bgGlowRef?.current) {
        scrollTl.to(
          bgGlowRef.current,
          {
            y: -60,
            scale: 1.2,
            opacity: 0.4,
            ease: 'none',
          },
          0
        );
      }
    });

    // ============================================================
    // MOBILE VIEWPORT (<= 768px)
    // ============================================================
    mm.add('(max-width: 768px)', () => {
      const visualEl = visualRef.current;
      const visualShadow = visualEl?.querySelector('.visual-shadow');
      const headlineEl = headlineRef.current;
      const welcomeWord = headlineEl?.querySelector('.word-welcome');
      const itzfizzWord = headlineEl?.querySelector('.word-itzfizz');
      const statCards = statsRef.current ? statsRef.current.querySelectorAll('.stat-card') : [];

      const mobileScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          anticipatePin: 1,
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
      });

      if (visualEl) {
        mobileScrollTl.to(
          visualEl,
          {
            x: '8vw',
            y: '-5vh',
            scale: 1.18,
            rotation: 3.5,
            ease: 'power1.inOut',
          },
          0
        );

        if (visualShadow) {
          mobileScrollTl.to(
            visualShadow,
            {
              scaleX: 0.88,
              opacity: 0.4,
              ease: 'power1.inOut',
            },
            0
          );
        }
      }

      if (welcomeWord) {
        mobileScrollTl.to(
          welcomeWord,
          {
            x: '-3vw',
            scale: 0.92,
            opacity: 0.25,
            ease: 'power1.inOut',
          },
          0
        );
      }

      if (itzfizzWord) {
        mobileScrollTl.to(
          itzfizzWord,
          {
            x: '3vw',
            scale: 1.05,
            color: '#CCFF00',
            opacity: 0.4,
            ease: 'power1.inOut',
          },
          0
        );
      }

      if (statCards.length > 0) {
        mobileScrollTl.to(
          statCards,
          {
            y: -40,
            opacity: 0,
            ease: 'power1.in',
          },
          0.05
        );
      }
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);
}

export default useScrollAnimation;
