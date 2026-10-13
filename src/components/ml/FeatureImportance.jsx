import "./FeatureImportance.css";

function FeatureImportance() {
  const features = [
    {
      name: "Transaction Amount",
      importance: 88,
      description: "Amount deviation from normal behavior",
      type: "high",
    },
    {
      name: "Beneficiary History",
      importance: 76,
      description: "Trust and previous interaction history",
      type: "high",
    },
    {
      name: "Transaction Frequency",
      importance: 64,
      description: "Unusual increase in payment activity",
      type: "medium",
    },
    {
      name: "Transaction Timing",
      importance: 52,
      description: "Deviation from normal transaction hours",
      type: "medium",
    },
    {
      name: "Device / Session Pattern",
      importance: 41,
      description: "Changes in observed session behavior",
      type: "low",
    },
    {
      name: "Payment Type",
      importance: 29,
      description: "Contribution from transaction type",
      type: "low",
    },
  ];

  return (
    <section className="feature-importance">
      <div className="feature-importance-header">
        <div>
          <h3>Feature Importance</h3>

          <p>
            Factors contributing to the model's fraud-risk prediction.
          </p>
        </div>

        <span className="feature-info-badge">
          Model Features
        </span>
      </div>

      <div className="feature-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={feature.name}>
            <div className="feature-rank">
              #{index + 1}
            </div>

            <div className="feature-main">
              <div className="feature-title-row">
                <strong>{feature.name}</strong>

                <span>{feature.importance}%</span>
              </div>

              <div className="feature-progress">
                <div
                  className={`feature-progress-fill ${feature.type}`}
                  style={{
                    width: `${feature.importance}%`,
                  }}
                ></div>
              </div>

              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureImportance;