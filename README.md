# ITZFIZZ DIGITAL — Next-Gen Scroll-Driven Hero Animation

A production-grade, scroll-driven interactive hero section engineered with **React**, **Tailwind CSS**, **GSAP (ScrollTrigger)**, and **Lenis** smooth scroll. Built with an obsessive focus on 60fps rendering performance, sub-pixel motion precision, accessibility, and modern frontend architecture.

[![Deploy to GitHub Pages](https://github.com/rohitshinde/Itzfizz_Digital/actions/workflows/deploy.yml/badge.svg)](https://github.com/rohitshinde/Itzfizz_Digital/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-CCFF00.svg)](LICENSE)

---

## ⚡ Live Demo & Visuals

- **Live URL**: [https://<username>.github.io/Itzfizz_Digital/](https://rohitshinde.github.io/Itzfizz_Digital/) *(Replace with your GitHub repository URL)*
- **Interactive Showcase**:
  - High-precision per-letter masked typographic rising reveal (`WELCOME ITZFIZZ`)
  - Multi-axis curved scroll-driven speedform vector navigation
  - Zero-re-render direct DOM numeric counter interpolation
  - Lenis scroll inertia synchronized with GSAP's central RAF ticker
  - Fully responsive `matchMedia` choreography for desktop and mobile viewports

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose | Implementation Highlight |
|---|---|---|
| **React 18** | UI component architecture | Declarative modularity, strict refs isolation |
| **Vite 6** | Build toolchain & dev server | Instant HMR, optimized Rollup bundling |
| **GSAP 3.12** | Motion orchestration & physics | Master intro timeline & pinned ScrollTrigger |
| **@gsap/react** | React integration | Safe lifecycle-bound cleanup (`useGSAP` / `gsap.context`) |
| **Lenis** | Inertia smooth scrolling | Driven directly by `gsap.ticker` to prevent frame drift |
| **Tailwind CSS 3** | Atomic styling & theme design | Obsidian dark palette, electric lime (`#CCFF00`) accent |
| **SVG Vector Engine** | Bespoke aerodynamic concept | Scalable 4K vector with bloom & dynamic contact shadow |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/<username>/Itzfizz_Digital.git
cd Itzfizz_Digital

# 2. Install dependencies
npm install

# 3. Start the local development server (with HMR)
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build & Preview

```bash
# Build optimized production bundle to /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

This project is configured with two ready-to-use deployment paths:

### Method A: Automated GitHub Actions (Recommended)
The repository includes `.github/workflows/deploy.yml` which deploys automatically on every push to `main` or `master`:
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete scroll-driven hero experience"
   git branch -M main
   git remote add origin https://github.com/<username>/Itzfizz_Digital.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The workflow will automatically build and publish your site at `https://<username>.github.io/<repo-name>/`.

### Method B: Manual CLI Deploy (`gh-pages`)
```bash
# Deploys the dist folder to the gh-pages branch directly
npm run deploy
```

> **Note on Base Path**: `vite.config.js` is configured with `base: process.env.BASE_PATH || './'`, ensuring all assets load with relative paths seamlessly across any GitHub Pages repository subpath or custom domain.

---

## 🎬 Animation Choreography & Timeline Breakdown

### 1. Initial Load Master Timeline (`useIntroAnimation.js`)
Configured with `{ ease: "power3.out" }` and an overall duration of ~2.8 seconds:
1. **Navigation Bar**: Slips into view from `y: -20px` with `opacity: 0 -> 1` (`0.8s`).
2. **Letter-Masked Headline**:
   - Each letter is isolated in an `overflow: hidden` mask.
   - Letters reveal in a staggered sequence (`stagger: 0.055s`, `ease: "expo.out"`) rising from `y: 75px` to `0` with a subtle `rotateX: 25deg` pitch.
3. **Aerodynamic Concept Visual**:
   - Fades and scales from `scale: 0.9, y: 35px` to `scale: 1, y: 0` (`duration: 1.1s`), overlapping the headline at 40% of its duration (`"-=0.6s"`).
4. **Metrics & Counter Interpolation**:
   - Stat cards slide up with `stagger: 0.14s`.
   - Numeric counters animate from `0` to target (e.g. `58%`, `23%`, `27%`, `40%`) via a GSAP tween on a plain JavaScript object with `snap: { val: 1 }`.
   - Values are updated via direct DOM `textContent` mutations in `onUpdate`, completely bypassing React component re-rendering cycles.

### 2. Scroll-Driven Pinned Timeline (`useScrollAnimation.js`)
Configured with `ScrollTrigger.create({ pin: true, anticipatePin: 1, scrub: 1.2, end: "+=200%" })`:
- **Main Visual Path**: Moves along a multi-axis trajectory (`x: 16vw`, `y: -10vh`, `scale: 1.26`, `rotation: 6.5deg`), simulating forward velocity.
- **Dynamic Contact Ground Shadow**: Scales down (`scaleX: 0.88, scaleY: 0.75`) and softens (`opacity: 0.35`) as the vehicle lifts into perspective.
- **Kinetic Letter-Spacing**: Headline letters expand outward symmetrically based on their distance from center (`x: offset * 18px`), accompanied by a soft fade.
- **Stats Parallax**: Metric cards lift upward (`y: -80px`) and fade out before the pin boundary.
- **Lenis Inertia Sync**: Lenis scroll coordinates trigger `ScrollTrigger.update`, and GSAP's central `ticker` drives `lenis.raf`.

---

## ⚡ Performance Engineering (Transform-Only Rules)

To ensure sustained **60fps/120fps** performance on ProMotion and mobile devices:
1. **Transform & Opacity Exclusivity**:
   - Animated properties are strictly limited to `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. No layout properties (`top`, `left`, `width`, `height`, `margin`) are animated.
2. **Composite Layer Promotion**:
   - Key animated elements utilize `will-change: transform` and `force3D: true` to allocate dedicated GPU memory buffers.
3. **Zero Layout Thrashing**:
   - No `getBoundingClientRect` or `offsetHeight` reads occur inside scroll frames.
   - Numbers count up by targeting DOM nodes directly, avoiding 60 React reconciliation passes per second.
4. **Clean Garbage Collection & React StrictMode Safety**:
   - All ScrollTriggers and GSAP timelines are wrapped in `gsap.context()` / `useGSAP()`, ensuring comprehensive teardown on component unmount and preventing memory leaks or orphaned event listeners.
5. **Accessibility (`prefers-reduced-motion`)**:
   - When the user's OS has reduced motion enabled, scrubbed pinning and staggers are disabled, presenting immediate clean static layouts.

---

## 📂 Project Directory Structure

```
Itzfizz_Digital/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment automation
├── public/
│   ├── 404.html                  # GitHub Pages SPA fallback
│   └── favicon.svg               # Brand favicon
├── src/
│   ├── components/
│   │   ├── FillerSection.jsx     # Narrative case studies & CTA sections
│   │   ├── Hero.jsx              # Hero orchestrator with ref containment
│   │   ├── HeroHeadline.jsx      # Fluid clamp() "WELCOME ITZFIZZ" letter spans
│   │   ├── HeroVisual.jsx        # Aerodynamic concept hypercar SVG with bloom & shadow
│   │   ├── Navbar.jsx            # Sleek agency navbar with CTA
│   │   ├── ScrollProgress.jsx    # Top neon scroll progress indicator
│   │   ├── StatItem.jsx          # Single metric card with DOM counter ref
│   │   └── StatsRow.jsx          # Semantic <ul> impact metrics grid
│   ├── data/
│   │   └── stats.js              # Performance statistics dataset
│   ├── hooks/
│   │   ├── useIntroAnimation.js  # Master GSAP load timeline & counter tween
│   │   ├── useReducedMotion.js   # OS accessibility motion preference detector
│   │   └── useScrollAnimation.js # Responsive ScrollTrigger scrub timeline
│   ├── lib/
│   │   └── gsap.js               # Centralized GSAP & ScrollTrigger configuration
│   ├── App.jsx                   # Lenis smooth scroll & ticker coordinator
│   ├── index.css                 # CSS variables, letter-masking, glassmorphism
│   └── main.jsx                  # Application entry point
├── index.html                    # HTML shell with Google Fonts preconnect
├── package.json                  # Dependencies & npm scripts
├── postcss.config.js             # PostCSS Tailwind integration
├── tailwind.config.js            # Custom color palette & typography
└── vite.config.js                # Vite build configuration with relative base
```

---

## 💡 Architecture Extension Notes

### Alternative: Bootstrap Integration
Tailwind CSS was selected for this project to maintain strict utility-first optimization and zero CSS bloat. However, if your team prefers Bootstrap:
- Replace the utility grid in `StatsRow.jsx` with `.container`, `.row`, and `.col-6 .col-lg-3`.
- Replace `Navbar.jsx` with standard Bootstrap `.navbar`, `.navbar-brand`, and `.nav-link` classes.
- *Best practice warning*: Avoid loading Bootstrap CSS simultaneously with Tailwind CSS due to conflicting reset layers and specificity collisions.

### CMS Integration: WordPress Theme Conversion
To adapt this hero experience into a custom WordPress theme:
1. **Asset Enqueuing (`functions.php`)**:
   ```php
   function itzfizz_enqueue_scripts() {
       wp_enqueue_style('itzfizz-main', get_template_directory_uri() . '/dist/assets/index.css', array(), '1.0.0');
       wp_enqueue_script('itzfizz-bundle', get_template_directory_uri() . '/dist/assets/index.js', array(), '1.0.0', true);
   }
   add_action('wp_enqueue_scripts', 'itzfizz_enqueue_scripts');
   ```
2. **Template Placement (`front-page.php`)**:
   Mount the `#root` container within `front-page.php` or render the semantic HTML shell with data-attributes populated by ACF (Advanced Custom Fields) for dynamic metric editing by marketing teams.

---

## 📄 License

Distributed under the MIT License. Created by Rohit Shinde for ITZFIZZ Digital.
