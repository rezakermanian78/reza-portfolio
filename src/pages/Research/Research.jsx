import activity from "../../data/activity";
import "./Research.css";

function Research() {
  const researchItems = activity.filter((item) => item.type === "Research");

  return (
    <section className="research-page section">
      <div className="container">
        <span className="section-kicker">Research & Articles</span>

        <h1 className="section-title">
          Research-focused work in{" "}
          <span className="gradient-text">AI, XAI, LLMs, and Edge Computing</span>
        </h1>

        <p className="research-intro">
          This section presents my academic and research-oriented activities,
          focused on artificial intelligence, explainable AI, compiler
          optimization, intrusion detection systems, and fog/edge computing.
        </p>

        <div className="research-list">
          {researchItems.map((item) => (
            <article className="research-card" key={item.title}>
              <div className="research-year">{item.year}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;