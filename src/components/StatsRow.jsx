import React, { forwardRef } from 'react';
import StatItem from './StatItem';
import { heroStats } from '../data/stats';

/**
 * Stats row container displaying 4 key metrics at the bottom of the hero section.
 * Renders an accessible semantic <ul> list with responsive 2x2 to 4x1 grid layout.
 */
const StatsRow = forwardRef(function StatsRow({ numberRefs }, ref) {
  return (
    <ul
      ref={ref}
      className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-6xl mx-auto px-4 sm:px-6 z-20 pointer-events-auto list-none mb-4 sm:mb-6"
      aria-label="Impact metrics and performance statistics"
    >
      {heroStats.map((stat, index) => (
        <StatItem
          key={stat.id}
          stat={stat}
          index={index}
          ref={(el) => {
            if (numberRefs && numberRefs.current) {
              numberRefs.current[index] = el;
            }
          }}
        />
      ))}
    </ul>
  );
});

export default StatsRow;
