import "./RiskFactors.css";

function RiskFactors() {
  const riskFactors = [
    {
      title: "Unusual Transaction Amount",
      description:
        "Transaction amount is significantly higher than the user's typical payment pattern.",
      severity: "High",
      type: "high",
    },
    {
      title: "Unknown Beneficiary",
      description:
        "Payment is being made to a beneficiary that is not recognized in the user's known payment history.",
      severity: "Medium",
      type: "medium",
    },
    {
      title: "Unusual Transaction Timing",
      description:
        "Transaction activity occurred outside the user's commonly observed transaction period.",
      severity: "Medium",
      type: "medium",
    },
    {
      title: "Transaction Pattern",
      description:
        "Recent payment behavior contains characteristics that may require additional verification.",
      severity: "Low",
      type: "low",
    },
  ];

  return (
    <section className="risk-factors">
      <div className="risk-factors-header">
        <div>
          <h3>Risk Factors</h3>
          <p>
            Key indicators contributing to transaction risk assessments
          </p>
        </div>

        <span className="factor-count">
          {riskFactors.length} Indicators
        </span>
      </div>

      <div className="risk-factor-list">
        {riskFactors.map((factor) => (
          <div className="risk-factor-item" key={factor.title}>
            <div className={`factor-icon ${factor.type}`}>
              !
            </div>

            <div className="factor-content">
              <div className="factor-title-row">
                <strong>{factor.title}</strong>

                <span className={`factor-severity ${factor.type}`}>
                  {factor.severity}
                </span>
              </div>

              <p>{factor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskFactors;