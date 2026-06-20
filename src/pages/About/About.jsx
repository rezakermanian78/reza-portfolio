import profile from "../../data/profile";
import "./About.css";

const aboutValues = [
  {
    title: "Engineering Mindset",
    text: "I approach software as a system of clean architecture, maintainability, performance, and long-term scalability.",
  },
  {
    title: "AI-Oriented Thinking",
    text: "My work is strongly connected to Machine Learning, Deep Learning, NLP, LLMs, RAG systems, and real-world AI applications.",
  },
  {
    title: "Research Discipline",
    text: "I study and write about advanced technical topics such as Explainable AI, compiler optimization, intrusion detection, and fog computing.",
  },
  {
    title: "Financial Intelligence",
    text: "My trading background helps me think analytically about risk, data, probability, automation, and decision-support systems.",
  },
];

function About() {
  return (
    <section className="about-page section">
      <div className="container">
        <span className="section-kicker">About Me</span>

        <h1 className="section-title">
          A multi-disciplinary engineer focused on{" "}
          <span className="gradient-text">AI, scalable systems, and global impact</span>
        </h1>

        <p className="about-lead">{profile.summary}</p>

        <div className="about-story">
          <div>
            <h2>Who I Am</h2>
            <p>
              I am Reza Kermanian, an AI & Backend Engineer with a strong
              background in Python, Django, FastAPI, React, Next.js, scalable
              backend architecture, and intelligent digital systems.
            </p>

            <p>
              My professional profile combines software engineering, artificial
              intelligence, research writing, and financial market experience.
              This combination allows me to design systems that are not only
              technically strong, but also analytical, practical, and
              business-oriented.
            </p>
          </div>

          <div>
            <h2>What I Build</h2>
            <p>
              I build AI-powered platforms, backend systems, web applications,
              portfolio systems, data-driven tools, and trading-related
              automation concepts. My focus is always on clean code,
              production-readiness, performance, and real-world usability.
            </p>

            <p>
              I am especially interested in LLMs, RAG systems, explainable AI,
              scalable APIs, financial technologies, and intelligent
              decision-support applications.
            </p>
          </div>
        </div>

        <div className="about-values-grid">
          {aboutValues.map((item) => (
            <article className="about-value-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;