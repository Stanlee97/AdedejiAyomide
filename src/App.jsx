import { useState, useEffect } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  useReducedMotion,
} from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CredentialStrip from "./components/CredentialStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  const reduced = useReducedMotion();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("adedeji-ayomide-theme", theme);
    } catch {
      /* Storage is optional. */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#141612" : "#f6f5ef");
  }, [theme]);
  useEffect(() => {
    if (reduced) return;
    let disposed = false;
    let context;
    let resizeObserver;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        context = gsap.context(() => {
          gsap.utils.toArray(".reveal").forEach((element) => {
            gsap.fromTo(
              element,
              { y: 25, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  once: true,
                },
              },
            );
          });
          gsap.utils.toArray(".skill-track span").forEach((element, index) =>
            gsap.fromTo(
              element,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1.2,
                delay: index * 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 96%",
                  once: true,
                },
              },
            ),
          );
        });
        resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
        resizeObserver.observe(document.getElementById("main"));
      })
      .catch(() => {
        /* Page content remains visible if optional animations cannot load. */
      });
    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      context?.revert();
    };
  }, [reduced]);
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation theme={theme} setTheme={setTheme} />
        <main id="main">
          <Hero />
          <CredentialStrip />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}
