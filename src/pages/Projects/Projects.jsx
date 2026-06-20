import projects from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-page section">
      <div className="container">
        <span className="section-kicker">Projects</span>

        <h1 className="section-title">
          Real-world systems in{" "}
          <span className="gradient-text">AI, web, backend, and trading</span>
        </h1>

        <p className="projects-page-intro">
          This page presents selected professional and research-driven projects,
          including full-stack platforms, AI systems, trading technologies, and
          intelligent backend architectures.
        </p>

        <div className="projects-page-grid">
          {projects.map((project, index) => (
            <article className="projects-page-card" key={project.id}>
              <div className="project-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span className="project-category-label">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="projects-page-tags">
                {project.technologies.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>

              <button className="project-details-btn">View Project Details</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;