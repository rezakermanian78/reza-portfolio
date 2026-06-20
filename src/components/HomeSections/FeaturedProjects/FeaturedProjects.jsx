import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import projects from "../../../data/projects";

import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <section className="featured-projects section">

      <div className="container">

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="section-kicker">
            Featured Work
          </span>

          <h2 className="section-title">
            Selected{" "}
            <span className="gradient-text">
              Projects & Systems
            </span>
          </h2>

          <p className="section-subtitle">
            A collection of projects demonstrating modern web engineering,
            artificial intelligence integration, research-driven development,
            and scalable architecture design.
          </p>

        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >

              <div className="project-category">
                {project.category}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-technologies">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <button className="project-button">

                View Project

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;