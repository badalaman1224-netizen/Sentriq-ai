import ReportSummary from "../components/reports/ReportSummary";
import ReportTable from "../components/reports/ReportTable";

import "./ReportsPage.css";

function ReportsPage() {
  return (
    <div className="reports-page">
      <header className="reports-page-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>

          <h1>Reports</h1>

          <p>
            Generate and review security reports from
            SentriqAI analysis data.
          </p>
        </div>

        <button
          className="export-report-button"
          type="button"
        >
          Export Data
        </button>
      </header>

      <ReportSummary />

      <ReportTable />
    </div>
  );
}

export default ReportsPage;