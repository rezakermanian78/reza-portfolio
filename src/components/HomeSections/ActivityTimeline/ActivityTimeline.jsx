import { motion } from "framer-motion";
import activity from "../../../data/activity";
import "./ActivityTimeline.css";

function ActivityTimeline() {
  return (
    <section className="activity-timeline section">
      <div className="container">
        <div className="activity-header">
          <span className="section-kicker">Activity History</span>

          <h2 className="section-title">
            A timeline of <span className="gradient-text">research, projects, and trading systems</span>
          </h2>

          <p className="section-subtitle">
            A structured overview of my professional development across AI research,
            full-stack platforms, backend engineering, and financial technologies.
          </p>
        </div>

        <div className="timeline-list">
          {activity.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="timeline-year">{item.year}</div>

              <div className="timeline-content">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivityTimeline;