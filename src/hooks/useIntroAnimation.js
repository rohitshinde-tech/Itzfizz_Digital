import { useEffect } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Enhanced Master Intro Animation Hook.
 * Choreographs the cinematic power-on sequence: navbar reveal, 3D letter rise,
 * car entrance with headlight flash, telemetry badge boot-up, and DOM metric counters.
 */
export function useIntroAnimation({
  containerRef,
  navRef,
  headlineRef,
  visualRef,
  statsRef,
  numberRefs,
  prefersReducedMotion,
  onComplete,
}) {
  useEffect(() => {
    if (!containerRef.current) return;

    // Accessibility bypass for prefers-reduced-motion
    if (prefersReducedMotion) {
      if (navRef.current) gsap.set(navRef.current, { opacity: 1, y: 0 });
      if (visualRef.current) gsap.set(visualRef.current, { opacity: 1, scale: 1, x: 0, y: 0 });
      if (headlineRef.current) {
        const letters = headlineRef.current.querySelectorAll('.letter-char');
        gsap.set(letters, { opacity: 1, y: 0, rotateX: 0, skewY: 0 });
      }
      if (statsRef.current) {
        const cards = statsRef.current.querySelectorAll('.stat-card');
        gsap.set(cards, { opacity: 1, y: 0 });
      }
      if (numberRefs?.current) {
        numberRefs.current.forEach((el) => {
          if (!el) return;
          const target = el.getAttribute('data-target') || '0';
          const suffix = el.getAttribute('data-suffix') || '';
          el.textContent = `${target}${suffix}`;
        });
      }
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const letters = headlineRef.current
        ? headlineRef.current.querySelectorAll('.letter-char')
        : [];
      const cards = statsRef.current
        ? statsRef.current.querySelectorAll('.stat-card')
        : [];
      const visualEl = visualRef.current;
      const headlightFlare = visualEl?.querySelector('.headlight-flare');
      const hudBadges = visualEl?.querySelectorAll('.hud-badge');

      // 1. Initial State setup (strictly GPU-accelerated)
      if (navRef.current) {
        gsap.set(navRef.current, { opacity: 0, y: -22, force3D: true });
      }
      if (visualEl) {
        gsap.set(visualEl, {
          opacity: 0,
          scale: 0.92,
          x: 45,
          y: 35,
          force3D: true,
        });
      }
      if (headlightFlare) {
        gsap.set(headlightFlare, { opacity: 0, scale: 0.4 });
      }
      if (hudBadges && hudBadges.length > 0) {
        gsap.set(hudBadges, { opacity: 0, scale: 0.85, y: 15 });
      }
      if (letters.length > 0) {
        gsap.set(letters, {
          opacity: 0,
          y: 75,
          rotateX: 30,
          skewY: 3,
          force3D: true,
        });
      }
      if (cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 35, force3D: true });
      }

      // Initialize counter DOM textContent to 0
      if (numberRefs?.current) {
        numberRefs.current.forEach((el) => {
          if (!el) return;
          const suffix = el.getAttribute('data-suffix') || '';
          el.textContent = `0${suffix}`;
        });
      }

      // 2. Master Load Timeline
      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Step A: Navbar glide in
      if (navRef.current) {
        masterTl.to(
          navRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
          },
          0
        );
      }

      // Step B: Staggered rising letter reveal with 3D tilt & skew recovery
      if (letters.length > 0) {
        masterTl.to(
          letters,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            skewY: 0,
            duration: 1.05,
            stagger: 0.055,
            ease: 'expo.out',
          },
          0.12
        );
      }

      // Step C: Hypercar entrance (glides in, suspension settles, overlaps headline by 40%)
      if (visualEl) {
        masterTl.to(
          visualEl,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.25,
            ease: 'power3.out',
          },
          '-=0.65'
        );

        // Electric headlight flash upon ignition
        if (headlightFlare) {
          masterTl.to(
            headlightFlare,
            {
              opacity: 0.85,
              scale: 1.4,
              duration: 0.35,
              ease: 'power2.out',
            },
            '-=0.45'
          ).to(headlightFlare, {
            opacity: 0.25,
            scale: 1.0,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        }

        // HUD telemetry badges boot up
        if (hudBadges && hudBadges.length > 0) {
          masterTl.to(
            hudBadges,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: 'back.out(1.5)',
            },
            '-=0.4'
          );
        }
      }

      // Step D: Stats cards emerge and numbers count up swiftly
      if (cards.length > 0) {
        masterTl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.45'
        );

        if (numberRefs?.current) {
          numberRefs.current.forEach((el) => {
            if (!el) return;
            const targetVal = parseFloat(el.getAttribute('data-target')) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            const counterObj = { val: 0 };

            masterTl.to(
              counterObj,
              {
                val: targetVal,
                duration: 1.5,
                ease: 'power2.out',
                snap: { val: 1 },
                onUpdate: () => {
                  el.textContent = `${Math.round(counterObj.val)}${suffix}`;
                },
              },
              '-=0.75'
            );
          });
        }
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);
}

export default useIntroAnimation;
