import { useState, useEffect } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import {
  Code2,
  Users,
  Layers3,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  MapPin,
  Globe2,
} from "lucide-react";
const roles = [
  "Project Manager",
  "Solutions Architect",
  "Full-Stack Builder",
  "PMP Certified",
  "AI-Powered Builder",
];

function OrbitArt() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="art-cross cross-one">+</div>
      <div className="art-cross cross-two">+</div>
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <div className="orbital-path">
        <span />
      </div>
      <div className="core-halo" />
      <div className="core-object">
        <div className="core-inner">
          <span>✳</span>
        </div>
      </div>
      <div className="orbit-tag tag-build">
        <Code2 size={16} />
        <span>build.</span>
        <i />
      </div>
      <div className="orbit-tag tag-lead">
        <Users size={16} />
        <span>lead.</span>
        <i />
      </div>
      <div className="orbit-tag tag-connect">
        <Layers3 size={16} />
        <span>connect.</span>
        <i />
      </div>
      <span className="art-caption">IDEAS → SYSTEMS → IMPACT</span>
      <span className="art-coordinate">6.5244° N / 3.3792° E</span>
    </div>
  );
}

function Hero() {
  const [role, setRole] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(
      () => setRole((value) => (value + 1) % roles.length),
      3000,
    );
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <section id="home" className="hero section-shell">
      <m.div
        className="hero-copy"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability-pill">
          <span className="status-dot" /> OPEN TO REMOTE & HYBRID OPPORTUNITIES
        </div>
        <div className="hero-intro">
          HI, I’M ADEDEJI AYOMIDE <span className="small-wave">↗</span>
        </div>
        <h1>
          Turning
          <br />
          complexity
          <br />
          into <span className="serif-accent">progress.</span>
        </h1>
        <div className="role-line">
          <span className="role-dash" />
          <AnimatePresence mode="wait">
            <m.span
              key={role}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {roles[role]}
            </m.span>
          </AnimatePresence>
          <span className="text-cursor" />
        </div>
        <p className="hero-description">
          I lead teams, architect solutions, and build software.
          <br className="desktop-break" /> Connecting the dots between a good
          idea and a great delivery.
        </p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowUpRight size={18} />
          </a>
          <a className="button button-quiet" href="#contact">
            Let’s build something <ArrowRight size={17} />
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={14} /> Lagos, Nigeria <span>·</span>
          <Globe2 size={14} /> Working globally
        </div>
      </m.div>
      <m.div
        className="hero-visual"
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <OrbitArt />
        <div className="visual-note">
          <span className="note-line" />
          <p>
            A manager’s perspective.
            <br />
            <strong>A builder’s instinct.</strong>
          </p>
        </div>
      </m.div>
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-icon">
            <ArrowDown size={13} />
          </span>{" "}
          SCROLL TO EXPLORE
        </a>
        <span>THOUGHTFUL LEADERSHIP. TANGIBLE IMPACT.</span>
      </div>
    </section>
  );
}

export default Hero;
