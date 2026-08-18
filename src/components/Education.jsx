import { portfolioData } from "../data/portfolioData";

export default function Experience() {

  return (
    <section id="education" className="section">

      <div className="section-heading">
        <span>03 / JOURNEY</span>
        <h2>Education & Background.</h2>
      </div>

      <div className="timeline">

        {portfolioData.education.map((item) => (

          <div className="timeline-item" key={item.year}>

            <div className="timeline-date">
              {item.year}
            </div>

            <div className="timeline-content">

              <h3>{item.degree}</h3>

              <p className="timeline-institute">
                {item.institute}
              </p>

              <p>
                {item.result}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}