import "./AlertFilters.css";

function AlertFilters({
  search,
  setSearch,
  severity,
  setSeverity,
  status,
  setStatus,
}) {
  return (
    <section className="alert-filters">
      <div className="alert-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search alerts..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <select
        value={severity}
        onChange={(event) => setSeverity(event.target.value)}
      >
        <option value="All">All Severity</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Unread">Unread</option>
        <option value="Read">Read</option>
      </select>
    </section>
  );
}

export default AlertFilters;