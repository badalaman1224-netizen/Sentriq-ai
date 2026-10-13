import "./ReportTable.css";

function ReportTable() {
  const reports = [
    {
      id: "RPT-2026-001",
      name: "Weekly Fraud Analysis",
      type: "Risk Analysis",
      period: "01–05 Sep 2026",
      status: "Ready",
    },
    {
      id: "RPT-2026-002",
      name: "Transaction Security Report",
      type: "Transaction",
      period: "01–05 Sep 2026",
      status: "Ready",
    },
    {
      id: "RPT-2026-003",
      name: "UPI Fraud Summary",
      type: "Fraud Summary",
      period: "August 2026",
      status: "Ready",
    },
    {
      id: "RPT-2026-004",
      name: "ML Detection Performance",
      type: "ML Insights",
      period: "August 2026",
      status: "Processing",
    },
  ];

  return (
    <section className="report-table-card">
      <div className="report-table-header">
        <div>
          <h3>Generated Reports</h3>
          <p>Reports created from SentriqAI analysis data.</p>
        </div>

        <button className="generate-report-button" type="button">
          + Generate Report
        </button>
      </div>

      <div className="report-table-wrapper">
        <div className="report-table">
          <div className="report-row report-heading">
            <span>Report</span>
            <span>Type</span>
            <span>Period</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {reports.map((report) => (
            <div className="report-row" key={report.id}>
              <div className="report-name">
                <strong>{report.name}</strong>
                <span>{report.id}</span>
              </div>

              <span className="report-type">{report.type}</span>

              <span className="report-period">
                {report.period}
              </span>

              <span
                className={`report-status ${
                  report.status === "Ready"
                    ? "ready"
                    : "processing"
                }`}
              >
                {report.status}
              </span>

              <button
                className="report-action"
                type="button"
                disabled={report.status !== "Ready"}
              >
                {report.status === "Ready"
                  ? "View"
                  : "Processing"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReportTable;