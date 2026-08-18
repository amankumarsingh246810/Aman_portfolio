import { portfolioData } from "../data/portfolioData";

export default function Projects() {

  return (
    <section id="projects" className="section projects-section">

      <div className="section-heading">

        <span>04 / PROJECTS</span>

        <h2>
          Things I've built.
        </h2>

        <p>
          A selection of projects demonstrating my experience
          with frontend, full-stack development and data.
        </p>

      </div>

      <div className="projects-grid">

        {portfolioData.projects.map((project, index) => (

          <article
            className="project-card"
            key={project.title}
          >

            <div className="project-top">

              <span className="project-index">
                0{index + 1}
              </span>

              <div className="project-links">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    GitHub ↗
                  </a>
                )}

              </div>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="project-tech">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

            {project.live !== "#" && (

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-demo"
              >
                View Live Project ↗
              </a>

            )}

          </article>

        ))}

      </div>

      <div className="all-projects">

        <a
          href={portfolioData.github}
          target="_blank"
          rel="noreferrer"
          className="outline-button"
        >
          View More on GitHub ↗
        </a>

      </div>

    </section>
  );
}