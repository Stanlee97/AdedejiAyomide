import { useState } from "react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { contact } from "../data";
import SectionLabel from "./SectionLabel";
import Availability from "./Availability";

function Contact() {
  const [notice, setNotice] = useState("");
  const placeholder = (label, Icon, value) =>
    value ? (
      <a className="contact-link" href={value} target={value.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
        <Icon size={18} />
        {label}
        <ArrowUpRight size={16} />
      </a>
    ) : (
      <button
        className="contact-link"
        onClick={() =>
          setNotice(
            `${label} details are coming soon. Please check back for an updated contact link.`,
          )
        }
      >
        <Icon size={18} />
        {label}
        <ArrowUpRight size={16} />
      </button>
    );
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <div className="reveal">
          <SectionLabel number="05">HAVE A CHALLENGE IN MIND?</SectionLabel>
          <div className="contact-main">
            <h2>
              Let’s build
              <br />
              <span className="serif-accent">something that matters.</span>
            </h2>
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="contact-big-arrow"
                aria-label="Email Adedeji Ayomide"
              >
                <ArrowUpRight />
              </a>
            ) : (
              <button
                className="contact-big-arrow"
                aria-label="Contact Adedeji Ayomide"
                onClick={() =>
                  setNotice(
                    "Email details are coming soon. Please check back for an updated contact link.",
                  )
                }
              >
                <ArrowUpRight />
              </button>
            )}
          </div>
          <div className="contact-bottom">
            <div>
              <Availability />
              <p>Great teams and meaningful projects can come from anywhere.</p>
            </div>
            <div className="contact-links">
              {placeholder(
                "Email",
                Mail,
                contact.email ? `mailto:${contact.email}` : null,
              )}
              {placeholder("LinkedIn", Linkedin, contact.linkedin)}
              {placeholder("GitHub", Github, contact.github)}
            </div>
          </div>
          <p className="contact-notice" role="status">
            {notice}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
