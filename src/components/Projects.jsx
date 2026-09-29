import { useState, useRef, useEffect } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Check, Users, Layers3, X, Plus } from "lucide-react";
import { projects } from "../data";
import SectionLabel from "./SectionLabel";

function ProjectVisual({ type }) {
  if (type === "school")
    return (
      <div className="project-visual school-visual" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-topbar">
            <span className="mock-brand">
              <span>▧</span> abiasmart
            </span>
            <span className="mock-avatar">A</span>
          </div>
          <div className="school-dashboard">
            <div className="mock-sidebar">
              <span className="selected">▦</span>
              <span>▤</span>
              <span>▧</span>
              <span>♧</span>
            </div>
            <div className="mock-content">
              <div className="mock-greeting">
                A brighter school day.<span>Learning, connected.</span>
              </div>
              <div className="mock-stat-row">
                <div>
                  Students<strong>Learning</strong>
                  <i />
                </div>
                <div>
                  Classrooms<strong>Connected</strong>
                  <i />
                </div>
                <div>
                  Possibilities<strong>Limitless</strong>
                  <i />
                </div>
              </div>
              <div className="mock-chart">
                <span>Learning activity</span>
                <div>
                  {[28, 42, 35, 62, 52, 75, 66, 85, 74, 96, 82, 100].map(
                    (height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="visual-caption">SCHOOL MANAGEMENT, REIMAGINED.</span>
      </div>
    );
  if (type === "bank")
    return (
      <div className="project-visual bank-visual" aria-hidden="true">
        <div className="bank-circles" />
        <div className="bank-card">
          <span>
            BcKash<span>◉</span>
          </span>
          <div className="card-chip" />
          <strong>
            Possibility.
            <br />
            In your hands.
          </strong>
          <div className="bank-card-bottom">
            <span>DIGITAL BANKING</span>
            <ArrowUpRight size={24} />
          </div>
        </div>
        <div className="bank-float">
          <span className="success-icon">
            <Check size={13} />
          </span>
          <span>
            Made for your next step.<small>Simple. Accessible. Digital.</small>
          </span>
        </div>
      </div>
    );
  if (type === "community")
    return (
      <div className="project-visual community-visual" aria-hidden="true">
        <div className="community-orbit orbit-a" />
        <div className="community-orbit orbit-b" />
        <div className="community-orbit orbit-c" />
        <div className="community-center">
          <Users size={28} />
        </div>
        {["AD", "JO", "EN", "MO", "KA", "TI"].map((person, i) => (
          <div className={`community-person person-${i}`} key={person}>
            {person}
          </div>
        ))}
        <div className="community-label">
          <span className="status-dot" /> Together, wherever.
        </div>
      </div>
    );
  return (
    <div className="project-visual generic-visual" aria-hidden="true">
      <Layers3 size={56} />
      <span>FROM VISION TO DELIVERY.</span>
    </div>
  );
}

function ProjectDialog({ project, onClose, returnFocus }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      element.close();
      returnFocus?.focus();
    };
  }, [returnFocus]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="project-dialog-title"
    >
      <div className="dialog-inner">
        <button
          autoFocus
          className="icon-button dialog-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X />
        </button>
        <span className="eyebrow">{project.type}</span>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="dialog-summary">{project.summary}</p>
        <p>{project.description}</p>
        <div className="dialog-role">
          <span className="mono">MY CONTRIBUTION</span>
          <strong>{project.role}</strong>
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.url && (
          <a className="button button-primary" href={project.url} target="_blank" rel="noopener noreferrer">
            View project <ArrowUpRight size={17} />
          </a>
        )}
        <a className="button button-primary" href="#contact" onClick={onClose}>
          Have something similar in mind? <ArrowUpRight size={17} />
        </a>
      </div>
    </dialog>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All work");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const triggerRef = useRef(null);
  const filtered =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);
  const visible =
    expanded || filter !== "All work" ? filtered : filtered.filter((project) => project.featured);
  return (
    <section id="work" className="section-shell content-section work-section">
      <div className="section-heading reveal">
        <div>
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <h2>
            Good ideas.
            <br />
            <span className="serif-accent">Real-world impact.</span>
          </h2>
        </div>
        <p>
          A few things I’ve helped bring to life.
          <br />
          Built with purpose. Delivered with care.
        </p>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {["All work", "EdTech", "Fintech", "Platforms", "People & Data"].map(
          (category) => (
            <button
              className={
                filter === category ? "filter-button selected" : "filter-button"
              }
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
              {category === "All work" && <span>{projects.length}</span>}
            </button>
          ),
        )}
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <m.article
            layout
            className="project-card"
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="project-open"
              aria-label={`View details for ${project.name}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelected(project);
              }}
            >
            <ProjectVisual type={project.visual} />
            <div className="project-card-copy">
              <span className="eyebrow">{project.type}</span>
              <div className="project-title">
                <h3>{project.name}</h3>
                <span className="project-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <p>{project.summary}</p>
              <p className="project-card-role">{project.role}</p>
              <div className="project-tags">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="project-details-label">View details <Plus size={13} /></span>
            </div>
            </button>
            {project.url && (
              <a className="project-live-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.name}`}>
                View project <ArrowUpRight size={15} />
              </a>
            )}
          </m.article>
        ))}
      </div>
      <div className="work-bottom">
        <span>
          {filter === "All work" && !expanded
            ? `A selection from a portfolio of ${projects.length} projects.`
            : `${visible.length} projects · Every delivery has a story.`}
        </span>
        {filter === "All work" && (
          <button
            className="text-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show selected work" : "Explore all projects"}
            {expanded ? <ArrowUpRight size={17} /> : <Plus size={17} />}
          </button>
        )}
      </div>
      {selected && (
        <ProjectDialog
          project={selected}
          onClose={() => setSelected(null)}
          returnFocus={triggerRef.current}
        />
      )}
    </section>
  );
}

export default Projects;
