import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  {
    number: "5+",
    label: "Years in Programming",
  },
  {
    number: "10+",
    label: "Years Trading Experience",
  },
  {
    number: "15+",
    label: "Technologies & Tools",
  },
  {
    number: "3",
    label: "Core Professional Fields",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={item.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;