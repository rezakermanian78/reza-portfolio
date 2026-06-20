import { motion } from "framer-motion";
import { FaReact, FaBrain, FaPenNib, FaChartLine } from "react-icons/fa";
import "./Expertise.css";

const expertiseItems = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    text: "Focused on LLMs, RAG systems, machine learning concepts, and intelligent automation for real-world applications.",
  },
  {
    icon: <FaReact />,
    title: "Modern Web Development",
    text: "Building responsive, scalable, and elegant applications using React, JavaScript, APIs, and clean frontend architecture.",
  },
  {
    icon: <FaPenNib />,
    title: "Research & Technical Writing",
    text: "Transforming complex AI, technology, and software engineering concepts into structured research-driven content.",
  },
  {
    icon: <FaChartLine />,
    title: "Trading & Market Systems",
    text: "Combining market analysis, trading experience, risk management, and AI-assisted thinking for financial systems.",
  },
];

function Expertise() {
  return (
    <section className="expertise-section section">
      <div className="container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-kicker">Core Expertise</span>

          <h2 className="section-title">
            A multi-disciplinary profile for{" "}
            <span className="gradient-text">global opportunities</span>
          </h2>

          <p className="section-subtitle">
            My professional identity combines software engineering, artificial
            intelligence, technical research, and financial market thinking.
          </p>
        </motion.div>

        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <motion.div
              className="expertise-card"
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;