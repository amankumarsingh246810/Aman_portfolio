import { portfolioData } from "../data/portfolioData";

export default function Hero() {

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="availability">
          <span></span>
          Open to opportunities
        </div>

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          {portfolioData.name}
        </h1>

        <h2>
          {portfolioData.role}
          <span> & </span>
          {portfolioData.secondaryRole}
        </h2>

        <p className="hero-description">
          {portfolioData.description}
        </p>

        <div className="hero-actions">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
            <span>↗</span>
          </a>

          <a
            href="/Aman_Kumar_Singh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Download Resume
          </a>

        </div>

        <div className="hero-socials">

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a href={`mailto:${portfolioData.email}`}>
            Email
          </a>

        </div>

      </div>

      <div className="hero-visual">

        <div className="code-window">

          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">

            <p>
              <span className="purple">const</span>{" "}
              developer = {"{"}
            </p>

            <p className="indent">
              name: <span className="green">"Aman Kumar Singh"</span>,
            </p>

            <p className="indent">
              role: <span className="green">"Software Developer"</span>,
            </p>

            <p className="indent">
              skills: [
            </p>

            <p className="indent2">
              <span className="green">"React"</span>,
            </p>

            <p className="indent2">
              <span className="green">"JavaScript"</span>,
            </p>

            <p className="indent2">
              <span className="green">"Node.js"</span>,
            </p>

            <p className="indent2">
              <span className="green">"Express.js"</span>
            </p>

            <p className="indent">
              ]
            </p>

            <p>
              {"}"};
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}