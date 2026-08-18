import { portfolioData } from "../data/portfolioData";

export default function Contact() {

  return (
    <section id="contact" className="contact-section">

      <div className="contact-inner">

        <span className="contact-label">
          05 / CONTACT
        </span>

        <h2>
          Let's build something
          <br />
          <span>great together.</span>
        </h2>

        <p>
          I'm always interested in discussing new opportunities,
          interesting projects and ideas.
        </p>

        <a
          href={`mailto:${portfolioData.email}`}
          className="contact-email"
        >
          {portfolioData.email} ↗
        </a>

        <div className="contact-socials">

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}