import { useState } from "react";
import "./TransactionForm.css";

function TransactionForm({ onAnalyze, isAnalyzing }) {
  const [formData, setFormData] = useState({
    amount: "",
    sender: "",
    receiver: "",
    transactionId: "",
    date: "",
    time: "",
    transactionType: "UPI Payment",
    beneficiaryType: "Unknown",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAnalyze(formData);
  };

  return (
    <section className="transaction-form-card">
      <div className="transaction-form-header">
        <div>
          <span>TRANSACTION INPUT</span>
          <h3>Enter Transaction Details</h3>
          <p>
            Provide transaction information for risk assessment.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="amount">Transaction Amount</label>
            <div className="input-with-prefix">
              <span>₹</span>
              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="transactionId">Transaction ID</label>
            <input
              id="transactionId"
              name="transactionId"
              type="text"
              placeholder="e.g. UPI123456789"
              value={formData.transactionId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sender">Sender</label>
            <input
              id="sender"
              name="sender"
              type="text"
              placeholder="Sender name / UPI ID"
              value={formData.sender}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="receiver">Receiver</label>
            <input
              id="receiver"
              name="receiver"
              type="text"
              placeholder="Receiver name / UPI ID"
              value={formData.receiver}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Transaction Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Transaction Time</label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="transactionType">
              Transaction Type
            </label>

            <select
              id="transactionType"
              name="transactionType"
              value={formData.transactionType}
              onChange={handleChange}
            >
              <option>UPI Payment</option>
              <option>UPI Collect</option>
              <option>UPI Transfer</option>
              <option>QR Payment</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="beneficiaryType">
              Beneficiary
            </label>

            <select
              id="beneficiaryType"
              name="beneficiaryType"
              value={formData.beneficiaryType}
              onChange={handleChange}
            >
              <option>Unknown</option>
              <option>New Beneficiary</option>
              <option>Known Beneficiary</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="transaction-analyze-button"
            disabled={isAnalyzing}
          >
            {isAnalyzing
              ? "Analyzing..."
              : "Analyze Transaction"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TransactionForm;