import "./TransactionRisk.css";

function TransactionRisk({ result }) {
  if (!result) {
    return (
      <section className="transaction-risk-card transaction-risk-empty">
        <div className="transaction-risk-icon">◉</div>

        <h3>Transaction Risk</h3>

        <p>
          Enter transaction details and run the analysis to see
          the risk assessment.
        </p>
      </section>
    );
  }

  return (
    <section className="transaction-risk-card">
      <div className="transaction-risk-header">
        <div>
          <span>RISK ASSESSMENT</span>
          <h3>Transaction Analysis</h3>
        </div>

        <div className={`transaction-status ${result.type}`}>
          {result.status}
        </div>
      </div>

      <div className="transaction-score">
        <div
          className={`transaction-score-ring ${result.type}`}
          style={{
            "--risk-progress": `${result.score * 3.6}deg`,
          }}
        >
          <div className="transaction-score-center">
            <strong>{result.score}</strong>
            <span>/100</span>
          </div>
        </div>

        <div className="transaction-score-details">
          <span>Overall Risk Score</span>
          <h4>{result.level}</h4>
          <p>{result.summary}</p>
        </div>
      </div>

      <div className="transaction-indicators">
        <h4>Risk Indicators</h4>

        {result.indicators.map((indicator, index) => (
          <div className="transaction-indicator" key={index}>
            <span className="indicator-mark">!</span>

            <div>
              <strong>{indicator.title}</strong>
              <span>{indicator.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="transaction-meta">
        <div>
          <span>Amount</span>
          <strong>₹{result.amount}</strong>
        </div>

        <div>
          <span>Beneficiary</span>
          <strong>{result.beneficiary}</strong>
        </div>

        <div>
          <span>Confidence</span>
          <strong>{result.confidence}%</strong>
        </div>
      </div>
    </section>
  );
}

export default TransactionRisk;