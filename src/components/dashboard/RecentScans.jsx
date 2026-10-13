import "./RecentScans.css";

function RecentScans({ onViewHistory }) {
  const transactions = [
    {
      id: "#10284",
      merchant: "Amazon Pay",
      amount: "₹2,500",
      score: 18,
      status: "Safe",
      type: "safe",
    },
    {
      id: "#10283",
      merchant: "Unknown Merchant",
      amount: "₹18,900",
      score: 76,
      status: "High Risk",
      type: "danger",
    },
    {
      id: "#10282",
      merchant: "Flipkart",
      amount: "₹4,200",
      score: 42,
      status: "Review",
      type: "warning",
    },
    {
      id: "#10281",
      merchant: "Swiggy",
      amount: "₹1,240",
      score: 12,
      status: "Safe",
      type: "safe",
    },
  ];

  return (
    <section className="recent-scans">
      <div className="recent-scans-header">
        <div>
          <h3>Recent Scans</h3>
          <p>Latest UPI transactions analyzed by SentriqAI</p>
        </div>

        <button
          className="view-history-button"
          type="button"
          onClick={onViewHistory}
        >
          View All →
        </button>
      </div>

      <div className="recent-table-wrapper">
        <div className="recent-table">
          <div className="recent-table-row recent-table-heading">
            <span>Transaction</span>
            <span>Amount</span>
            <span>Risk Score</span>
            <span>Status</span>
          </div>

          {transactions.map((transaction) => (
            <div
              className="recent-table-row"
              key={transaction.id}
            >
              <div className="transaction-cell">
                <strong>{transaction.merchant}</strong>
                <span>UPI Payment {transaction.id}</span>
              </div>

              <span className="amount-cell">
                {transaction.amount}
              </span>

              <span
                className={`score-cell ${transaction.type}`}
              >
                {transaction.score}/100
              </span>

              <span
                className={`status-badge ${transaction.type}`}
              >
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentScans;