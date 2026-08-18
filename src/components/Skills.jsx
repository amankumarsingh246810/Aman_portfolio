import { portfolioData } from "../data/portfolioData";

export default function Skills() {

  const categories = [
    ["Frontend", portfolioData.skills.frontend],
    ["Backend", portfolioData.skills.backend],
    ["Database", portfolioData.skills.database],
    ["Tools & DevOps", portfolioData.skills.tools]
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <span>02 / SKILLS</span>
        <h2>Technologies I have hands-on experience with.</h2>
      </div>

      <div className="skills-grid">

        {categories.map(([category, skills]) => (

          <div className="skill-category" key={category}>

            <h3>{category}</h3>

            <div className="skill-list">

              {skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}