import { useEffect, useLayoutEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Experience from "./components/Experience";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { gsap, prefersReducedMotion, ScrollTrigger, startSmoothScroll } from "./lib/scroll";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-signal" />;
}

export default function App() {
  useEffect(() => startSmoothScroll(), []);

  // Anything marked data-reveal fades up the first time it scrolls into view.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set("[data-reveal]", { y: 40, opacity: 0 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });
    });
    // Images and web fonts change layout after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div className="grain relative min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Work />
        <TechStack />
        <Education />
      </main>
      <Contact />
    </div>
  );
}
