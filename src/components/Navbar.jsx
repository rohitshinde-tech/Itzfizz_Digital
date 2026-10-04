import React, { forwardRef } from 'react';

/**
 * Slim agency navigation bar.
 * Uses forwardRef so the master intro animation timeline can coordinate its entrance.
 */
const Navbar = forwardRef(function Navbar(props, ref) {
  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-16 py-5 transition-colors duration-300 pointer-events-auto"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-white no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="ITZFIZZ Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#CCFF00] group-hover:scale-125 transition-transform duration-300" />
          <span className="font-display font-extrabold text-xl tracking-wider text-white">
            ITZFIZZ<span className="text-accent">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-zinc-500 uppercase ml-1 border border-zinc-800 rounded px-1.5 py-0.5">
            STUDIO
          </span>
        </a>

        {/* Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-zinc-400"
          aria-label="Primary Navigation"
        >
          <a
            href="#capabilities"
            className="hover:text-white transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:text-accent"
          >
            Capabilities
          </a>
          <a
            href="#impact"
            className="hover:text-white transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:text-accent"
          >
            Impact
          </a>
          <a
            href="#agency"
            className="hover:text-white transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:text-accent"
          >
            Agency
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 text-xs font-mono font-semibold tracking-wider uppercase text-black bg-accent rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
          >
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
