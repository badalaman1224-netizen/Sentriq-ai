import "./AlertCard.css";

function AlertCard({ alert, onMarkRead }) {
  return (
    <article
      className={`alert-card ${alert.severity.toLowerCase()} ${
        alert.unread ? "unread" : ""
      }`}
    >
      <div className={`alert-icon ${alert.severity.toLowerCase()}`}>
        {alert.severity === "High"
          ? "!"
          : alert.severity === "Medium"
            ? "⚠"
            : "i"}
      </div>

      <div className="alert-content">
        <div className="alert-title-row">
          <div>
            <h3>{alert.title}</h3>

            <div className="alert-meta">
              <span>{alert.transactionId}</span>
              <span>•</span>
              <span>{alert.time}</span>
            </div>
          </div>

          <span
            className={`alert-severity ${alert.severity.toLowerCase()}`}
          >
            {alert.severity}
          </span>
        </div>

        <p>{alert.message}</p>

        <div className="alert-bottom">
          <div className="alert-risk">
            <span>Risk Score</span>
            <strong>{alert.riskScore}/100</strong>
          </div>

          <div className="alert-reason">
            <span>Reason</span>
            <strong>{alert.reason}</strong>
          </div>

          {alert.unread && (
            <button
              className="mark-read-button"
              type="button"
              onClick={() => onMarkRead(alert.id)}
            >
              Mark as read
            </button>
          )}
        </div>
      </div>

      {alert.unread && <span className="unread-dot"></span>}
    </article>
  );
}

export default AlertCard;