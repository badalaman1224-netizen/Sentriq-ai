import ModelOverview from "../components/ml/ModelOverview";
import DetectionMetrics from "../components/ml/DetectionMetrics";
import FeatureImportance from "../components/ml/FeatureImportance";

import "./MLInsightsPage.css";

function MLInsightsPage() {
  return (
    <div className="ml-insights-page">
      {/* PAGE HEADER */}
      <header className="ml-insights-header">
        <div>
          <span>AI FRAUD INTELLIGENCE</span>

          <h1>ML Insights</h1>

          <p>
            Monitor model performance and understand how
            SentriqAI evaluates transaction fraud risk.
          </p>
        </div>

        <div className="ml-engine-status">
          <span></span>
          AI Engine Online
        </div>
      </header>

      {/* MODEL OVERVIEW */}
      <ModelOverview />

      {/* PERFORMANCE + FEATURES */}
      <div className="ml-insights-grid">
        <DetectionMetrics />

        <FeatureImportance />
      </div>
    </div>
  );
}

export default MLInsightsPage;