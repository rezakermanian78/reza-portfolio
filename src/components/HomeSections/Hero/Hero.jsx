import { motion } from "framer-motion";
import "./Hero.css";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="hero-tag">
            AI • Web • Research • Trading
          </span>

          <h1 className="hero-title">
            Reza{" "}
            <span className="gradient-text">
              Kermanian
            </span>
          </h1>

          <h2 className="hero-subtitle">
            AI Developer & Modern Web Engineer
          </h2>

          <p className="hero-description">
            Building intelligent digital systems with modern web technologies,
            artificial intelligence, research-oriented thinking, and scalable architecture.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>

            <Link to="/resume" className="secondary-btn">
              View Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >

          <div className="hero-glow"></div>

          <div className="hero-card">

            <div className="hero-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-code">

{`const developer = {
  name: "Reza",
  skills: ["AI", "React", "LLM"],
  mindset: "Research Driven",
  focus: "Global Innovation"
}`}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;