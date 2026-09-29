import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
const sections = ["About", "Expertise", "Work", "Journey", "Contact"];

function Navigation({ theme, setTheme }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    ["Home", ...sections].forEach((name) => {
      const el = document.getElementById(name.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Adedeji Ayomide home">
        Adedeji Ayomide<span>✳</span>
      </a>
      <nav
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {sections.map((name) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            aria-current={
              active === name.toLowerCase() ? "location" : undefined
            }
            className={active === name.toLowerCase() ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="icon-button theme-button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a href="#contact" className="header-cta">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="icon-button mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navigation;
