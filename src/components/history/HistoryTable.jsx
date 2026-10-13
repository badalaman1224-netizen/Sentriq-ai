import "./HistoryTable.css";

function HistoryTable({ transactions }) {
  if (transactions.length === 0) {
    return (
      <section className="history-table-card">
        <div className="history-empty">
          <div className="history-empty-icon">⌕</div>

          <h3>No transactions found</h3>

          <p>
            Try changing your search or filter options.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="history-table-card">
      <div className="history-table-header">
        <div>
          <h3>Transaction History</h3>
          <p>All recent analyses performed by SentriqAI</p>
        </div>

        <span className="history-count">
          {transactions.length} Records
        </span>
      </div>

      <div className="history-table-wrapper">
        <div className="history-table">

          {/* TABLE HEADING */}
          <div className="history-row history-heading">
            <span>Transaction</span>
            <span>Type</span>
            <span>Amount</span>
            <span>Risk Score</span>
            <span>Status</span>
            <span>Date</span>
          </div>

          {/* TABLE DATA */}
          {transactions.map((transaction) => (
            <div
              className="history-row"
              key={transaction.id}
            >
              <div className="history-transaction">
                <strong>{transaction.merchant}</strong>
                <span>{transaction.id}</span>
              </div>

              <span className="history-type">
                {transaction.type}
              </span>

              <span className="history-amount">
                {transaction.amount}
              </span>

              <span
                className={`history-score ${transaction.riskType}`}
              >
                {transaction.score}/100
              </span>

              <span
                className={`history-status ${transaction.riskType}`}
              >
                {transaction.status}
              </span>

              <span className="history-date">
                {transaction.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistoryTable;