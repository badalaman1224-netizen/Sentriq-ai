import "./FraudResult.css";

function FraudResult({ result }) {
  if (!result) {
    return (
      <section className="fraud-result fraud-result-empty">
        <div className="result-empty-icon">✦</div>

        <h3>Analysis Result</h3>

        <p>
          Upload a screenshot and run the analysis to see the
          fraud-risk assessment here.
        </p>
      </section>
    );
  }

  return (
    <section className="fraud-result">
      <div className="fraud-result-header">
        <div>
          <span className="result-label">SENTRIQAI ANALYSIS</span>
          <h3>Fraud Risk Assessment</h3>
        </div>

        <span className={`result-status ${result.statusType}`}>
          {result.status}
        </span>
      </div>

      <div className="risk-score-section">
        <div className="risk-score-circle">
          <div>
            <strong>{result.score}</strong>
            <span>/100</span>
          </div>
        </div>

        <div className="risk-score-info">
          <span>Overall Risk Score</span>

          <h4>{result.level}</h4>

          <p>{result.summary}</p>
        </div>
      </div>

      <div className="fraud-reasons">
        <h4>Fraud Indicators</h4>

        <div className="reason-list">
          {result.reasons.map((reason, index) => (
            <div className="reason-item" key={index}>
              <span className="reason-icon">!</span>
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="analysis-details">
        <div>
          <span>Transaction Amount</span>
          <strong>{result.amount}</strong>
        </div>

        <div>
          <span>Transaction Status</span>
          <strong>{result.transactionStatus}</strong>
        </div>

        <div>
          <span>Confidence</span>
          <strong>{result.confidence}%</strong>
        </div>
      </div>
    </section>
  );
}

export default FraudResult;