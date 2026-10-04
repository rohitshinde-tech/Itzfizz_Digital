import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once centrally to prevent duplicate registrations
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Configure global GSAP defaults
  gsap.config({
    autoSleep: 60,
    force3D: true, // Guarantees hardware-accelerated transforms (GPU layers)
  });
}

export { gsap, ScrollTrigger };
export default gsap;
