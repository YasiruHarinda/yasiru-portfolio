# Yasiru Edirimanna — Portfolio

🌐 [yasiru-portfolio-blj2.vercel.app](https://yasiru-portfolio-blj2.vercel.app/)

Personal portfolio of a software engineer and Computer Engineering graduate: a single-page site with
a WebGL hero, scroll-driven animations and a featured case study of [OrderFlow](https://github.com/YasiruHarinda/orderflow).

## Tech stack
- React 19 + Vite
- Tailwind CSS
- GSAP + ScrollTrigger (scroll animations) and Lenis (smooth scrolling)
- Three.js (hero network scene, lazy-loaded)
- Framer Motion (navigation and project-filter transitions)

## Run locally
```bash
npm install
npm run dev
```

## Editing content
All text lives in `src/data/portfolio.js`: profile, experience, projects, tech stack, education,
certifications and activities. Project images go in `public/images/projects/`.

## Accessibility & performance
- Respects `prefers-reduced-motion` (no smooth scroll, no scroll animations, static 3D scene)
- 3D scene pauses when off-screen and is code-split from the main bundle
- Keyboard focus styles and a skip link
