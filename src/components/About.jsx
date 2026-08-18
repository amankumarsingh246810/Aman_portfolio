import { portfolioData } from "../data/portfolioData";

export default function About() {

  return (
    <section id="about" className="section">

      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>Building things that solve problems.</h2>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <p>
            {portfolioData.about}
          </p>

          <p>
            I am particularly interested in frontend engineering,
            full-stack development and building intuitive user
            experiences.
          </p>

        </div>

        <div className="about-details">

          <div>
            <span>Location</span>
            <strong>{portfolioData.location}</strong>
          </div>

          <div>
            <span>Education</span>
            <strong>B.Tech</strong>
          </div>

          <div>
            <span>Primary Focus</span>
            <strong>Web Development</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{portfolioData.email}</strong>
          </div>

        </div>

      </div>

    </section>
  );
}