import { useMemo, useState } from "react";

import AlertFilters from "../components/alerts/AlertFilters";
import AlertCard from "../components/alerts/AlertCard";

import "./AlertsPage.css";

function AlertsPage() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");
  const [status, setStatus] = useState("All");

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "High-Risk Transaction Detected",
      transactionId: "UPI10283",
      time: "10 minutes ago",
      severity: "High",
      riskScore: 87,
      reason: "Unusual transaction amount",
      message:
        "SentriqAI detected multiple characteristics associated with elevated transaction risk.",
      unread: true,
    },
    {
      id: 2,
      title: "Unknown Beneficiary Detected",
      transactionId: "UPI10280",
      time: "42 minutes ago",
      severity: "Medium",
      riskScore: 64,
      reason: "New beneficiary",
      message:
        "The transaction was initiated with a beneficiary that is not commonly observed in the transaction history.",
      unread: true,
    },
    {
      id: 3,
      title: "Unusual Transaction Pattern",
      transactionId: "UPI10276",
      time: "2 hours ago",
      severity: "Medium",
      riskScore: 51,
      reason: "Unusual timing",
      message:
        "The transaction timing differs from the commonly observed payment pattern.",
      unread: false,
    },
    {
      id: 4,
      title: "Transaction Reviewed",
      transactionId: "UPI10271",
      time: "5 hours ago",
      severity: "Low",
      riskScore: 24,
      reason: "Low-risk activity",
      message:
        "The transaction was analyzed and no significant fraud indicators were detected.",
      unread: false,
    },
  ]);

  const handleMarkRead = (alertId) => {
    setAlerts((previousAlerts) =>
      previousAlerts.map((alert) =>
        alert.id === alertId
          ? { ...alert, unread: false }
          : alert
      )
    );
  };

  const filteredAlerts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return alerts.filter((alert) => {
      const matchesSearch =
        searchValue === "" ||
        alert.title.toLowerCase().includes(searchValue) ||
        alert.transactionId.toLowerCase().includes(searchValue) ||
        alert.reason.toLowerCase().includes(searchValue);

      const matchesSeverity =
        severity === "All" ||
        alert.severity === severity;

      const matchesStatus =
        status === "All" ||
        (status === "Unread" && alert.unread) ||
        (status === "Read" && !alert.unread);

      return (
        matchesSearch &&
        matchesSeverity &&
        matchesStatus
      );
    });
  }, [alerts, search, severity, status]);

  const unreadCount = alerts.filter(
    (alert) => alert.unread
  ).length;

  return (
    <div className="alerts-page">
      {/* PAGE HEADER */}
      <header className="alerts-page-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>

          <h1>Alerts</h1>

          <p>
            Monitor suspicious activity and important security
            events detected by SentriqAI.
          </p>
        </div>

        <div className="alerts-summary">
          <span>UNREAD ALERTS</span>
          <strong>{unreadCount}</strong>
        </div>
      </header>

      {/* FILTERS */}
      <AlertFilters
        search={search}
        setSearch={setSearch}
        severity={severity}
        setSeverity={setSeverity}
        status={status}
        setStatus={setStatus}
      />

      {/* ALERT LIST */}
      <section className="alerts-list">
        <div className="alerts-list-header">
          <div>
            <h2>Security Alerts</h2>
            <p>
              Showing {filteredAlerts.length} alert
              {filteredAlerts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {filteredAlerts.length > 0 ? (
          <div className="alert-cards">
            {filteredAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                alert={alert}
                onMarkRead={handleMarkRead}
              />
            ))}
          </div>
        ) : (
          <div className="alerts-empty">
            <div className="alerts-empty-icon">✓</div>

            <h3>No alerts found</h3>

            <p>
              Try changing your search or filter options.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default AlertsPage;