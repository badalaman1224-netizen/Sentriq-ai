import "./HistoryFilters.css";

function HistoryFilters({
  search,
  setSearch,
  riskFilter,
  setRiskFilter,
  typeFilter,
  setTypeFilter,
}) {
  return (
    <section className="history-filters">
      {/* SEARCH */}
      <div className="history-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search transaction or ID..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* RISK FILTER */}
      <select
        value={riskFilter}
        onChange={(event) => setRiskFilter(event.target.value)}
      >
        <option value="All">All Risk Levels</option>
        <option value="Safe">Safe</option>
        <option value="Review">Review</option>
        <option value="High Risk">High Risk</option>
      </select>

      {/* TYPE FILTER */}
      <select
        value={typeFilter}
        onChange={(event) => setTypeFilter(event.target.value)}
      >
        <option value="All">All Types</option>
        <option value="Screenshot">Screenshot</option>
        <option value="Transaction">Transaction</option>
      </select>
    </section>
  );
}

export default HistoryFilters;