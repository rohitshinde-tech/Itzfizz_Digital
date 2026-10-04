# ITZFIZZ DIGITAL — Scroll-Driven Hero Section

A modern, interactive **scroll-driven hero section** built using **React, Tailwind CSS, GSAP ScrollTrigger, and Lenis Smooth Scroll**.

The project focuses on creating a premium web experience with **smooth scrolling, scroll-based animations, animated statistics, responsive layouts, and performance-optimized interactions**.

* **Live Demo:** https://rohitshinde-tech.github.io/Itzfizz_Digital/
* **Repository:** https://github.com/rohitshinde-tech/Itzfizz_Digital

## ✨ Features

* **Full-screen hero section** that fills the first screen above the fold.
* **Letter-spaced headline**:

  * `W E L C O M E  I T Z F I Z Z`
* **Staggered letter animation** on page load.
* Letters smoothly **rise and fade into view**.
* **Animated statistics** that appear sequentially.
* Statistics include **animated counters** that count from `0` to their target values.
* **Scroll-driven main visual** controlled by the user's scroll position.
* Main visual **moves, scales, and rotates** according to scroll progress.
* **Pinned hero section** using GSAP ScrollTrigger.
* **Scrubbed GSAP timeline** for smooth scroll-linked animation.
* **Lenis smooth scrolling** for a premium scrolling experience.
* **Parallax effects** for statistics and other elements.
* **Scroll progress indicator** showing the current scroll position.
* **Responsive design** for:

  * Desktop
  * Tablet
  * Mobile
* **Reduced-motion support** using `prefers-reduced-motion`.
* **Performance optimized** using transform and opacity-based animations.
* **Extra filler sections** to demonstrate the complete scroll experience.

---

## 🛠️ Tech Stack

### Frontend

* **React 18** — Component-based UI development.
* **Vite** — Fast development server and production build tool.
* **Tailwind CSS 3** — Utility-first CSS framework.
* **HTML5** — Page structure and semantic markup.
* **CSS3** — Custom styling and responsive design.
* **JavaScript** — Application logic and interactions.

### Animation

* **GSAP** — High-performance animation library.
* **GSAP ScrollTrigger** — Scroll-based and pinned animations.
* **@gsap/react** — React integration using `useGSAP`.
* **Lenis** — Smooth and inertia-based scrolling.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js 18 or higher**
* **npm 9 or higher**
* **Git**

You can verify your versions using:

```bash
node --version
npm --version
git --version
```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/rohitshinde-tech/Itzfizz_Digital.git
```

### 2. Navigate to the project

```bash
cd Itzfizz_Digital
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the local development URL shown in your terminal, typically:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Starts the development server        |
| `npm run build`   | Creates the production build         |
| `npm run preview` | Previews the production build        |
| `npm run deploy`  | Deploys the project using `gh-pages` |

---

## 🎬 How the Animation Works

The project uses two main animation systems:

### 1. Intro Animation

The intro animation is handled by:

```text
src/hooks/useIntroAnimation.js
```

It controls the animations that happen when the page loads.

The animation sequence includes:

* **Navbar**

  * Fades in.
  * Slides down slightly.

* **Headline**

  * Individual letters are animated separately.
  * Letters rise from an overflow-hidden mask.
  * A stagger effect creates a smooth sequence.

* **Main Visual**

  * Fades into view.
  * Scales up smoothly.
  * Overlaps the headline for a dynamic effect.

* **Statistics**

  * Cards slide upward one by one.
  * Numbers animate from `0` to their target values.

### Animation Easing

The project uses GSAP easing functions such as:

```text
power3.out
expo.out
```

These provide smoother and more natural motion.

---

## 🖱️ Scroll Animation

The scroll animation is handled by:

```text
src/hooks/useScrollAnimation.js
```

The hero section is pinned while the user scrolls through the animation.

During scrolling:

* The **main visual moves along a curved path**.
* The visual **scales and rotates**.
* The **ground shadow shrinks and softens**.
* The **headline letters spread outward**.
* The headline gradually **fades away**.
* The **statistics move upward** using a parallax effect.
* The animation is connected directly to **scroll progress**.
* Scrolling upward **reverses the animation smoothly**.

The animation uses a **scrubbed ScrollTrigger timeline**, allowing the animation to follow the user's scroll position.

---

## 🌊 Lenis Smooth Scrolling

The project uses **Lenis** to create smooth and inertia-based scrolling.

Lenis is synchronized with the GSAP ticker so that:

* Smooth scrolling works together with GSAP.
* ScrollTrigger receives accurate scroll updates.
* Animations remain synchronized with scrolling.
* The overall interaction feels more fluid.

---

## 📱 Responsive Design

The animation is optimized for different screen sizes.

### Desktop

* Larger animation distances.
* Full-size hero visual.
* Longer scroll animation.
* More pronounced parallax effects.

### Tablet

* Adjusted spacing and animation distances.
* Responsive typography.
* Optimized visual positioning.

### Mobile

* Reduced animation distances.
* Shorter pin duration.
* Smaller visual scale.
* Touch-friendly layout.
* Optimized performance.

---

## ♿ Accessibility

The project respects the user's system-level:

```text
prefers-reduced-motion
```

When reduced motion is enabled, animations are reduced or disabled to provide a more accessible experience.

---

## ⚡ Performance

Performance was considered throughout the implementation.

### Optimization Techniques

* Animates mainly **transform and opacity** properties.
* Uses **GPU-friendly transforms**.
* Uses `will-change` where appropriate.
* Uses GSAP's `force3D` for animated layers.
* Avoids unnecessary layout calculations during scrolling.
* Avoids React re-renders on every animation frame.
* Counter values are updated directly in the DOM.
* Uses `useGSAP` for proper animation lifecycle management.
* Animations are safely cleaned up when components unmount.
* Optimized animation distances for mobile devices.

---

## 📂 Project Structure

```text
Itzfizz_Digital/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── 404.html
│   └── favicon.svg
│
├── screenshots/
│   ├── desktop-initial.png
│   ├── desktop-mid.png
│   ├── desktop-deep.png
│   ├── mobile-initial.png
│   ├── mobile-scrolled.png
│   └── tablet-initial.png
│
├── src/
│   ├── assets/
│   │   └── hero-car.jpg
│   │
│   ├── components/
│   │   ├── FillerSection.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroHeadline.jsx
│   │   ├── HeroVisual.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── StatItem.jsx
│   │   └── StatsRow.jsx
│   │
│   ├── data/
│   │   └── stats.js
│   │
│   ├── hooks/
│   │   ├── useIntroAnimation.js
│   │   ├── useReducedMotion.js
│   │   └── useScrollAnimation.js
│   │
│   ├── lib/
│   │   └── gsap.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## 🎯 Learning Outcomes

This project helped demonstrate practical implementation of:

* **React component architecture**
* **GSAP animation timelines**
* **ScrollTrigger**
* **Scroll-based animation**
* **Pinned sections**
* **Scrubbed animations**
* **Parallax effects**
* **Smooth scrolling with Lenis**
* **Responsive animation design**
* **Performance optimization**
* **Accessibility with reduced-motion support**
* **GitHub Pages deployment**
* **Vite production builds**

---

## 🔮 Future Improvements

Possible future improvements include:

* Add more interactive 3D effects.
* Add advanced mouse-following interactions.
* Add WebGL-based visual effects.
* Add more sections with scroll-driven animations.
* Add dark/light theme support.
* Improve mobile-specific animations.
* Add more interactive statistics.
* Add page transition animations.

---

## 👨‍💻 Author

**Rohit Rajendra Shinde**
Gmail:- rohitshinde1728@gmail.com

* **GitHub:** https://github.com/rohitshinde-tech
* **Portfolio:** https://rohitshinde.xyz

---
