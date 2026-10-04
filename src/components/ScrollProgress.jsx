import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * Global scroll progress indicator pinned to top of viewport.
 * Uses transform: scaleX for optimal GPU composite rendering.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useGSAP(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: barRef });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-white/[0.05]"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full bg-accent origin-left w-full shadow-[0_0_12px_#CCFF00]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
