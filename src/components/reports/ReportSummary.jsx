import "./ReportSummary.css";

function ReportSummary() {
  const summaryItems = [
    {
      label: "Total Transactions",
      value: "1,284",
      detail: "Analyzed",
      type: "blue",
    },
    {
      label: "Frauds Detected",
      value: "87",
      detail: "6.8% of total",
      type: "red",
    },
    {
      label: "Safe Transactions",
      value: "1,197",
      detail: "93.2% of total",
      type: "green",
    },
    {
      label: "Average Risk",
      value: "32/100",
      detail: "Low overall risk",
      type: "purple",
    },
  ];

  return (
    <section className="report-summary">
      {summaryItems.map((item) => (
        <div className="report-summary-card" key={item.label}>
          <span className={`report-summary-icon ${item.type}`}>
            {item.type === "red"
              ? "!"
              : item.type === "green"
                ? "✓"
                : item.type === "purple"
                  ? "◉"
                  : "▦"}
          </span>

          <div>
            <span className="report-summary-label">
              {item.label}
            </span>

            <strong>{item.value}</strong>

            <small>{item.detail}</small>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ReportSummary;