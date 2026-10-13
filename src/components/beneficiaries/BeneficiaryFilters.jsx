import "./BeneficiaryFilters.css";

function BeneficiaryFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  riskFilter,
  setRiskFilter,
}) {
  return (
    <section className="beneficiary-filters">
      {/* SEARCH */}
      <div className="beneficiary-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search beneficiary or UPI ID..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* STATUS FILTER */}
      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Trusted">Trusted</option>
        <option value="Review">Review</option>
        <option value="Risky">Risky</option>
      </select>

      {/* RISK FILTER */}
      <select
        value={riskFilter}
        onChange={(event) => setRiskFilter(event.target.value)}
      >
        <option value="All">All Risk Levels</option>
        <option value="Low">Low Risk</option>
        <option value="Medium">Medium Risk</option>
        <option value="High">High Risk</option>
      </select>
    </section>
  );
}

export default BeneficiaryFilters;