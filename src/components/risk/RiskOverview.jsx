import "./RiskOverview.css";

function RiskOverview() {
  return (
    <section className="risk-overview">
      <div className="risk-overview-header">
        <div>
          <span>OVERALL SECURITY STATUS</span>
          <h3>Risk Overview</h3>
          <p>
            Current fraud-risk condition based on analyzed
            UPI transactions.
          </p>
        </div>

        <div className="risk-overview-status">
          <span className="status-dot"></span>
          Monitoring Active
        </div>
      </div>

      <div className="risk-overview-content">
        <div className="overall-risk-meter">
          <div className="overall-risk-circle">
            <div>
              <strong>32</strong>
              <span>/100</span>
            </div>
          </div>

          <div className="overall-risk-label">
            <span>Overall Risk Level</span>
            <strong>Low Risk</strong>
          </div>
        </div>

        <div className="risk-overview-stats">
          <div>
            <span>Transactions Analyzed</span>
            <strong>1,284</strong>
          </div>

          <div>
            <span>Suspicious Transactions</span>
            <strong>87</strong>
          </div>

          <div>
            <span>Detection Rate</span>
            <strong>6.8%</strong>
          </div>

          <div>
            <span>Average Confidence</span>
            <strong>91%</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskOverview;