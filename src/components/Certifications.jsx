import { Award, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel";

function Certifications() {
  return (
    <section
      id="journey"
      className="section-shell content-section journey-section"
    >
      <div className="reveal">
        <SectionLabel number="04">ALWAYS MOVING FORWARD</SectionLabel>
        <h2>
          A solid foundation.
          <br />
          An <span className="serif-accent">open horizon.</span>
        </h2>
        <p className="journey-intro">
          Learning doesn’t stop at a qualification.
          <br />
          It’s how I stay ready for what comes next.
        </p>
        <div className="certifications">
          <div>
            <span className="credential-icon">
              <Award />
            </span>
            <p>
              <strong>Project Management Professional</strong>
              <span>PMP® Certified · August 2026</span>
            </p>
            <ArrowUpRight size={18} />
          </div>
          <div>
            <span className="credential-icon">
              <GraduationCap />
            </span>
            <p>
              <strong>BTech, Computer Engineering</strong>
              <span>LAUTECH · 2024</span>
            </p>
            <ArrowUpRight size={18} />
          </div>
        </div>
        <p className="service-note">
          <span className="status-dot" /> Currently completing NYSC · Finishing
          December 2026
        </p>
      </div>
      <div className="learning-card reveal">
        <div className="learning-heading">
          <Sparkles size={19} />
          <span className="mono">CURRENTLY LEARNING / NEXT UP</span>
          <span className="live-indicator" />
        </div>
        {[
          {
            title: "AI & automation",
            description:
              "Building with n8n: bookings, order sorting, and customer support workflows.",
            tag: "EXPLORING & BUILDING",
          },
          {
            title: "Deeper fintech architecture",
            description:
              "Advanced solutions architecture, data localization, and the CBN compliance space.",
            tag: "GOING DEEPER",
          },
          {
            title: "A global next chapter",
            description:
              "Exploring master’s programs in Management / Project Management in Poland and Germany.",
            tag: "ON THE HORIZON",
          },
          {
            title: "Impact at scale",
            description:
              "Growing grant-funded EdTech and talent-development initiatives.",
            tag: "THINKING BIGGER",
          },
        ].map((item, index) => (
          <div className="learning-item" key={item.title}>
            <span className="learning-number">0{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="learning-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
