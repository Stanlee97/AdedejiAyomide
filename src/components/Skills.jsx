import { Layers3, Code2, Users } from "lucide-react";
import { skills } from "../data";
import SectionLabel from "./SectionLabel";

function Skills() {
  const icons = { delivery: <Layers3 />, code: <Code2 />, people: <Users /> };
  return (
    <section
      id="expertise"
      className="section-shell content-section expertise-section"
    >
      <div className="section-heading reveal">
        <div>
          <SectionLabel number="02">WHAT I BRING TO THE TABLE</SectionLabel>
          <h2>
            Big-picture thinking.
            <br />
            <span className="serif-accent">Hands-on doing.</span>
          </h2>
        </div>
        <p>
          Across delivery, development, and people.
          <br />
          The right mix to move a project forward.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className="skill-card reveal" key={skill.title}>
            <div className="skill-card-top">
              <span className="skill-icon">{icons[skill.icon]}</span>
              <span className="mono">0{index + 1}</span>
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.subtitle}</p>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
            <div className="skill-track" aria-hidden="true">
              <span />
            </div>
          </article>
        ))}
      </div>
      <div className="tool-cloud reveal">
        <span className="mono">IN MY TOOLKIT</span>
        {[
          "Moodle",
          "React",
          "AI tools",
          "n8n ↗",
          "Python",
          "scikit-learn",
          "Streamlit",
          "BRDs & RAG reporting",
        ].map((tool) => (
          <span className="tool-pill" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
