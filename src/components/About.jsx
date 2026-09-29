import SectionLabel from "./SectionLabel";

function About() {
  return (
    <section id="about" className="section-shell content-section about-section">
      <div className="reveal">
        <SectionLabel number="01">THE PERSON BEHIND THE PROJECTS</SectionLabel>
        <h2>
          Many hats.
          <br />
          One <span className="serif-accent">clear purpose.</span>
        </h2>
        <div className="about-signature">
          Adedeji Ayomide<span>↗</span>
        </div>
      </div>
      <div className="about-copy reveal">
        <p className="large-copy">
          Make complex things work.
          <br />
          And bring people along for the journey.
        </p>
        <p>
          I’m a Software Development Manager, Project Manager, and Solutions
          Architect based in Lagos. Since 2024, I’ve led client-facing technical
          delivery across a portfolio of software projects at{" "}
          <strong>TWPC Tech’s Digital Services division.</strong>
        </p>
        <p>
          In 2025, I founded <strong>Stanfield Group Limited</strong>, my
          independent practice for web development, business analysis, and
          solutions architecture. I’m as comfortable shaping a delivery plan as
          I am writing code or finding the right tool to ship faster—including
          AI.
        </p>
        <p>
          The human side matters just as much. From training senior staff at the{" "}
          <strong>Lagos Inland Revenue Service</strong> to helping teachers use
          new school software, I make technology understandable and useful.
        </p>
        <div className="about-footnote">
          <span className="status-dot" />
          <span>Curious by default. Hands-on by choice.</span>
        </div>
      </div>
    </section>
  );
}

export default About;
