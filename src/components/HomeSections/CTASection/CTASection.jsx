import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section section">

      <div className="container">

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="cta-glow"></div>

          <div className="cta-content">

            <span className="section-kicker">
              Let’s Build Together
            </span>

            <h2 className="section-title">
              Designing intelligent digital systems for{" "}
              <span className="gradient-text">
                global opportunities
              </span>
            </h2>

            <p className="section-subtitle">
              Open to freelance collaborations, AI-driven applications,
              backend engineering projects, research opportunities,
              and innovative technology partnerships worldwide.
            </p>

            <div className="cta-buttons">

              <Link to="/contact" className="cta-primary-btn">
                Contact Me
              </Link>

              <Link to="/resume" className="cta-secondary-btn">
                View Resume
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;