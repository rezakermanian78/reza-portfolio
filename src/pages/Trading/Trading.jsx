import "./Trading.css";

const tradingHighlights = [
  "Professional experience in Forex, crypto, stocks, and global indices",
  "Special focus on XAUUSD and financial market behavior",
  "AI-assisted thinking for trading strategy development",
  "Trading robot design using deep learning concepts",
  "Risk management, technical analysis, and market structure awareness",
];

const tradingSystems = [
  {
    title: "AI-Powered MetaTrader Trading Robot",
    text: "Designed an intelligent trading robot concept using CNN, LSTM, GAN, indicators, and AI-based forecasting logic for XAUUSD analysis.",
  },
  {
    title: "Market Strategy Development",
    text: "Built trading strategies based on technical indicators, trend behavior, risk control, and structured decision-making.",
  },
  {
    title: "Financial Market Research",
    text: "Studied global financial markets including Forex, crypto, stocks, commodities, and indices with a data-driven mindset.",
  },
];

function Trading() {
  return (
    <section className="trading-page section">
      <div className="container">
        <span className="section-kicker">Trading Technologies</span>

        <h1 className="section-title">
          Combining <span className="gradient-text">AI systems</span> with
          financial market thinking
        </h1>

        <p className="trading-intro">
          My trading background is focused on analytical thinking, strategy
          design, risk management, and AI-assisted trading systems. This section
          presents my experience in financial markets and algorithmic trading
          concepts.
        </p>

        <div className="trading-grid">
          <div className="trading-panel">
            <h2>Trading Profile</h2>

            <ul>
              {tradingHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="trading-cards">
            {tradingSystems.map((item) => (
              <article className="trading-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trading;