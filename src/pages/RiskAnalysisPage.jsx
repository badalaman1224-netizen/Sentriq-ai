import RiskOverview from "../components/risk/RiskOverview";
import RiskCategories from "../components/risk/RiskCategories";
import RiskFactors from "../components/risk/RiskFactors";

import "./RiskAnalysisPage.css";

function RiskAnalysisPage() {
  return (
    <div className="risk-analysis-page">
      {/* PAGE HEADER */}
      <header className="risk-analysis-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>

          <h1>Risk Analysis</h1>

          <p>
            Monitor transaction risk, identify fraud indicators,
            and understand overall payment security.
          </p>
        </div>

        <div className="risk-analysis-date">
          <span>LAST UPDATED</span>
          <strong>Today</strong>
        </div>
      </header>

      {/* OVERVIEW */}
      <RiskOverview />

      {/* TWO COLUMN SECTION */}
      <div className="risk-analysis-grid">
        <RiskCategories />
        <RiskFactors />
      </div>
    </div>
  );
}

export default RiskAnalysisPage;