import React, { forwardRef } from 'react';

/**
 * Hero Headline component.
 * Renders "WELCOME ITZFIZZ" with accessible aria-label and individual letter spans
 * encased in overflow-hidden masks.
 * Words have dedicated container hooks for spatial depth split on scroll.
 */
const WORDS = [
  { text: 'WELCOME', id: 'word-welcome', className: 'word-welcome' },
  { text: 'ITZFIZZ', id: 'word-itzfizz', className: 'word-itzfizz text-white' },
];

const HeroHeadline = forwardRef(function HeroHeadline(props, ref) {
  return (
    <h1
      ref={ref}
      className="hero-headline font-display font-black text-center text-white tracking-wide select-none leading-none z-10 relative flex flex-wrap items-center justify-center gap-x-[0.35em] sm:gap-x-[0.5em] md:gap-x-[0.65em] gap-y-1 sm:gap-y-2 pointer-events-none"
      style={{
        fontSize: 'clamp(2.4rem, 7.8vw, 8.5rem)',
        lineHeight: 0.95,
        perspective: '1000px',
      }}
      aria-label="WELCOME ITZFIZZ"
    >
      {WORDS.map((wordObj, wordIndex) => (
        <span
          key={wordObj.id}
          className={`word-group ${wordObj.className} inline-flex items-center tracking-[0.14em] sm:tracking-[0.2em] md:tracking-[0.26em] lg:tracking-[0.32em] will-change-transform`}
        >
          {wordObj.text.split('').map((char, charIndex) => {
            const totalIndex = wordIndex === 0 ? charIndex : 7 + charIndex;
            const centerOffset = totalIndex - 6.5;

            return (
              <span
                key={`${wordObj.id}-${charIndex}`}
                className="letter-mask overflow-hidden inline-block py-[0.05em] px-[0.025em]"
              >
                <span
                  className="letter-char inline-block will-change-transform"
                  data-char-index={totalIndex}
                  data-offset={centerOffset}
                  aria-hidden="true"
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
});

export default HeroHeadline;
