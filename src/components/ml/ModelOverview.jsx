import "./ModelOverview.css";

function ModelOverview() {
  return (
    <section className="model-overview">
      <div className="model-overview-header">
        <div>
          <span>AI FRAUD ENGINE</span>

          <h3>Model Overview</h3>

          <p>
            Current machine-learning model used by SentriqAI
            for fraud-risk classification.
          </p>
        </div>

        <div className="model-status">
          <span></span>
          Model Online
        </div>
      </div>

      <div className="model-overview-grid">
        <div className="model-score-card">
          <span>Model Accuracy</span>

          <strong>94.7%</strong>

          <small>Based on validation data</small>
        </div>

        <div className="model-score-card">
          <span>Precision</span>

          <strong>92.8%</strong>

          <small>Fraud prediction precision</small>
        </div>

        <div className="model-score-card">
          <span>Recall</span>

          <strong>91.4%</strong>

          <small>Fraud detection recall</small>
        </div>

        <div className="model-score-card">
          <span>F1 Score</span>

          <strong>92.1%</strong>

          <small>Balanced model performance</small>
        </div>
      </div>

      <div className="model-information">
        <div>
          <span>Model Version</span>
          <strong>Sentriq-Fraud-v1.0</strong>
        </div>

        <div>
          <span>Last Trained</span>
          <strong>01 Sep 2026</strong>
        </div>

        <div>
          <span>Training Samples</span>
          <strong>125,480</strong>
        </div>

        <div>
          <span>Features Used</span>
          <strong>27</strong>
        </div>
      </div>
    </section>
  );
}

export default ModelOverview;