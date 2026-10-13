import "./RiskDistribution.css";

function RiskDistribution() {
  const riskData = [
    {
      label: "Safe",
      percentage: 93,
      count: "1,197",
      type: "safe",
    },
    {
      label: "Medium",
      percentage: 5,
      count: "64",
      type: "medium",
    },
    {
      label: "High Risk",
      percentage: 2,
      count: "23",
      type: "high",
    },
  ];

  return (
    <section className="risk-distribution">
      <div className="risk-distribution-header">
        <div>
          <h3>Risk Distribution</h3>
          <p>Current transaction classification</p>
        </div>
      </div>

      <div className="risk-distribution-content">
        <div className="risk-donut">
          <div className="risk-donut-center">
            <strong>93%</strong>
            <span>Safe</span>
          </div>
        </div>

        <div className="risk-legend">
          {riskData.map((item) => (
            <div className="risk-legend-item" key={item.label}>
              <div className="risk-legend-name">
                <span
                  className={`risk-legend-dot ${item.type}`}
                ></span>

                <span>{item.label}</span>
              </div>

              <div className="risk-legend-value">
                <strong>{item.percentage}%</strong>
                <span>{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RiskDistribution;