import "./DetectionMetrics.css";

function DetectionMetrics() {
  const metrics = [
    {
      label: "Accuracy",
      value: 94.7,
      description: "Overall prediction accuracy",
      type: "accuracy",
    },
    {
      label: "Precision",
      value: 92.8,
      description: "Correct fraud predictions",
      type: "precision",
    },
    {
      label: "Recall",
      value: 91.4,
      description: "Fraud cases detected",
      type: "recall",
    },
    {
      label: "F1 Score",
      value: 92.1,
      description: "Balanced performance",
      type: "f1",
    },
  ];

  return (
    <section className="detection-metrics">
      <div className="detection-metrics-header">
        <div>
          <h3>Detection Performance</h3>

          <p>
            Performance metrics of the current fraud detection model.
          </p>
        </div>

        <span className="metrics-period">
          Validation Set
        </span>
      </div>

      <div className="metrics-list">
        {metrics.map((metric) => (
          <div className="metric-item" key={metric.label}>
            <div className="metric-info">
              <div className="metric-title">
                <strong>{metric.label}</strong>

                <span>{metric.value}%</span>
              </div>

              <div className="metric-progress">
                <div
                  className={`metric-progress-fill ${metric.type}`}
                  style={{
                    width: `${metric.value}%`,
                  }}
                ></div>
              </div>

              <p>{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="metric-footer">
        <div>
          <span>False Positive Rate</span>
          <strong>3.1%</strong>
        </div>

        <div>
          <span>False Negative Rate</span>
          <strong>4.2%</strong>
        </div>

        <div>
          <span>Predictions Today</span>
          <strong>2,481</strong>
        </div>
      </div>
    </section>
  );
}

export default DetectionMetrics;