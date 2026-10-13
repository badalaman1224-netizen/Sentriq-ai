import "./BeneficiaryCard.css";

function BeneficiaryCard({ beneficiary }) {
  return (
    <article className="beneficiary-card">
      <div className="beneficiary-avatar">
        {beneficiary.name.charAt(0).toUpperCase()}
      </div>

      <div className="beneficiary-content">
        <div className="beneficiary-title-row">
          <div>
            <h3>{beneficiary.name}</h3>
            <span>{beneficiary.upiId}</span>
          </div>

          <span
            className={`beneficiary-status ${beneficiary.statusType}`}
          >
            {beneficiary.status}
          </span>
        </div>

        <div className="beneficiary-details">
          <div>
            <span>Transactions</span>
            <strong>{beneficiary.transactions}</strong>
          </div>

          <div>
            <span>Total Volume</span>
            <strong>{beneficiary.volume}</strong>
          </div>

          <div>
            <span>Risk Score</span>
            <strong className={beneficiary.riskType}>
              {beneficiary.riskScore}/100
            </strong>
          </div>

          <div>
            <span>Last Payment</span>
            <strong>{beneficiary.lastPayment}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BeneficiaryCard;