import React, { forwardRef } from 'react';

/**
 * Single Stat Item component.
 * Exposes a ref directly to the numeric value DOM node so GSAP can count up from 0
 * via onUpdate textContent mutation without triggering React component re-renders.
 */
const StatItem = forwardRef(function StatItem({ stat, index }, ref) {
  return (
    <li
      className="stat-card glass-panel group relative rounded-xl p-3.5 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-dark-800/80 will-change-transform"
      style={{
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
    >
      {/* Subtle Accent Edge Glow on Hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="flex items-baseline gap-1 mb-1">
        <span
          ref={ref}
          className="stat-number font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          data-target={stat.value}
          data-suffix={stat.suffix}
        >
          0{stat.suffix}
        </span>
      </div>

      <div>
        <p className="font-sans text-xs sm:text-sm font-medium text-zinc-300 leading-snug">
          {stat.label}
        </p>
        <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 mt-1 uppercase tracking-wider hidden sm:block">
          {stat.detail}
        </p>
      </div>
    </li>
  );
});

export default StatItem;
