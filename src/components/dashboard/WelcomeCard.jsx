import "./WelcomeCard.css";

function WelcomeCard({ onAnalyze }) {
  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <span className="welcome-label">WELCOME BACK</span>

        <h1>Protect every UPI transaction with AI.</h1>

        <p>
          Analyze UPI screenshots and transaction data to identify
          suspicious payment activity with SentriqAI.
        </p>

        <button
          className="welcome-button"
          type="button"
          onClick={onAnalyze}
        >
          Analyze Screenshot
          <span>→</span>
        </button>
      </div>

      <div className="welcome-visual">
        <div className="welcome-orbit orbit-one"></div>
        <div className="welcome-orbit orbit-two"></div>

        <div className="welcome-shield">
          🛡️
        </div>
      </div>
    </section>
  );
}

export default WelcomeCard;