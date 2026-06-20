import skills from "../../data/skills";
import profile from "../../data/profile";
import "./Resume.css";

const technicalGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Django", "FastAPI", "React", "Next.js"],
  },
  {
    title: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Model Integration"],
  },
  {
    title: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "Pandas", "NumPy", "Data Processing"],
  },
  {
    title: "DevOps & APIs",
    items: ["Docker", "Git", "REST APIs", "WebSocket Integration"],
  },
  {
    title: "Core Concepts",
    items: ["Algorithms", "Scalable Architecture", "API Design", "Async Systems"],
  },
];

const strengths = [
  "Strong analytical thinking and problem-solving skills",
  "Expertise in scalable and maintainable systems",
  "Ability to work independently in remote teams",
  "Clear communication with technical and non-technical stakeholders",
  "Continuous learning in emerging AI technologies",
];

function Resume() {
  return (
    <section className="resume-page section">
      <div className="container">
        <span className="section-kicker">Resume</span>

        <h1 className="section-title">
          Professional <span className="gradient-text">CV Overview</span>
        </h1>

        <div className="resume-summary-box">
          <h2>{profile.title}</h2>
          <p>{profile.summary}</p>
        </div>

        <div className="resume-section-block">
          <h2>Technical Skills</h2>

          <div className="resume-tech-grid">
            {technicalGroups.map((group) => (
              <article className="resume-tech-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="resume-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-section-block">
          <h2>Professional Skill Levels</h2>

          <div className="resume-skill-grid">
            {skills.map((skill) => (
              <div className="resume-skill-card" key={skill.title}>
                <div>
                  <span>{skill.icon}</span>
                  <h3>{skill.title}</h3>
                </div>

                <strong>{skill.level}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-two-columns">
          <div className="resume-info-card">
            <h2>Professional Experience</h2>
            <h3>Freelance AI & Backend Developer</h3>

            <ul>
              <li>Designed and developed scalable backend systems using Python and Django.</li>
              <li>Built AI-powered applications using ML, NLP, and LLM technologies.</li>
              <li>Developed RESTful APIs and integrated third-party services.</li>
              <li>Implemented data pipelines for structured and unstructured data.</li>
              <li>Focused on clean code, performance optimization, and production readiness.</li>
            </ul>
          </div>

          <div className="resume-info-card">
            <h2>Education & Interests</h2>

            <h3>Education</h3>
            <p>
              Bachelor’s Degree or equivalent practical experience in Computer
              Science / Software Engineering.
            </p>

            <h3>Interests</h3>
            <p>
              Artificial Intelligence, Algorithmic Systems, Trading Technologies,
              Scalable Backend Systems, and Data-Driven Applications.
            </p>
          </div>
        </div>

        <div className="resume-section-block">
          <h2>Strengths</h2>

          <div className="resume-strength-grid">
            {strengths.map((item) => (
              <div className="resume-strength-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;