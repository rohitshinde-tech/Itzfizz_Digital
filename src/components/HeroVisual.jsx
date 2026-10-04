import React, { forwardRef } from 'react';
import carImage from '../assets/hero-car.jpg';

/**
 * HeroVisual component featuring the proper hypercar concept asset,
 * dynamic aerodynamic HUD telemetry overlays, animated speed streaks,
 * and high-fidelity volumetric lighting.
 */
const HeroVisual = forwardRef(function HeroVisual(props, ref) {
  return (
    <div
      ref={ref}
      className="hero-visual-container relative w-full max-w-[940px] aspect-[16/9] flex items-center justify-center pointer-events-none z-20 will-change-transform my-[-2vh] sm:my-[-3vh]"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 1. Volumetric Ambient Glow Core */}
      <div
        className="visual-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[75%] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(204, 255, 0, 0.22) 0%, rgba(204, 255, 0, 0.05) 45%, transparent 75%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* 2. Kinetic Speed Trails (Behind Car) */}
      <div className="speed-lines absolute inset-0 overflow-hidden pointer-events-none opacity-40" aria-hidden="true">
        <div className="speed-line absolute top-[28%] left-[-20%] w-[60%] h-[1.5px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="speed-line absolute top-[45%] left-[-10%] w-[75%] h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="speed-line absolute top-[62%] left-[-30%] w-[90%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="speed-line absolute top-[74%] left-[-15%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* 3. Deep Contact Floor Shadow */}
      <div
        className="visual-shadow absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[85%] h-[16%] rounded-[100%] pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.75) 40%, transparent 75%)',
          filter: 'blur(12px)',
        }}
        aria-hidden="true"
      />

      {/* 4. High-Resolution Hypercar Vehicle Layer */}
      <div className="car-inner-wrap relative w-full h-full flex items-center justify-center">
        <img
          src={carImage}
          alt="ITZFIZZ Autonomous Electric Hypercar Concept with aerodynamic carbon fiber body and neon lime contours"
          className="car-image w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] select-none"
          style={{
            // Radial feather mask so outer studio borders blend smoothly into viewport background
            maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 72%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 72%, transparent 100%)',
          }}
          loading="eager"
        />

        {/* Laser Headlight Flare Element */}
        <div
          className="headlight-flare absolute left-[6%] top-[55%] w-24 h-24 rounded-full pointer-events-none opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(204,255,0,0.9) 0%, rgba(204,255,0,0.4) 30%, transparent 70%)',
            filter: 'blur(8px)',
          }}
          aria-hidden="true"
        />

        {/* 5. Holographic Telemetry Badges (Floating HUD) */}
        {/* Left Telemetry: Aero Efficiency */}
        <div className="hud-badge hud-left hidden sm:flex absolute left-[3%] top-[22%] items-center gap-2.5 px-3 py-1.5 rounded-lg glass-panel border border-accent/25 shadow-[0_0_20px_rgba(204,255,0,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
              Downforce Aero
            </span>
            <span className="font-mono text-xs font-bold text-accent tracking-wide">
              1,240 KG · 98.4%
            </span>
          </div>
        </div>

        {/* Right Telemetry: Acceleration Velocity */}
        <div className="hud-badge hud-right hidden sm:flex absolute right-[3%] top-[20%] items-center gap-2.5 px-3 py-1.5 rounded-lg glass-panel border border-accent/25 shadow-[0_0_20px_rgba(204,255,0,0.12)]">
          <div className="flex flex-col text-right">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
              Kinetic Acceleration
            </span>
            <span className="font-mono text-xs font-bold text-accent tracking-wide">
              0-100 KM/H · 1.84S
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#CCFF00]" />
        </div>
      </div>
    </div>
  );
});

export default HeroVisual;
