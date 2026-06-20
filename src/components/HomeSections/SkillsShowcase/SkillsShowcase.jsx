import { motion } from "framer-motion";
import skills from "../../../data/skills";
import "./SkillsShowcase.css";

function SkillsShowcase() {
  return (
    <section className="skills-showcase section">
      <div className="container skills-showcase-container">
        <motion.div
          className="skills-showcase-content"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-kicker">Professional Skills</span>

          <h2 className="section-title">
            Technical strength with{" "}
            <span className="gradient-text">real-world execution</span>
          </h2>

          <p className="section-subtitle">
            My skill set combines backend engineering, artificial intelligence,
            modern web development, research-oriented thinking, and financial
            market systems.
          </p>
        </motion.div>

        <div className="skills-showcase-list">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-progress-card"
              key={skill.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="skill-progress-top">
                <div className="skill-progress-title">
                  <span>{skill.icon}</span>
                  <h3>{skill.title}</h3>
                </div>

                <strong>{skill.level}%</strong>
              </div>

              <div className="skill-progress-track">
                <motion.div
                  className="skill-progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsShowcase;