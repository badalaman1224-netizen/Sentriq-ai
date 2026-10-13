import "./Sidebar.css";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Screenshot Analyzer", icon: "▣" },
    { name: "Transaction Analyzer", icon: "↔" },
    { name: "History", icon: "◷" },
    { name: "Risk Analysis", icon: "◉" },
    { name: "Alerts", icon: "♢" },
    { name: "Beneficiaries", icon: "♙" },
    { name: "Reports", icon: "▤" },
    { name: "ML Insights", icon: "✦" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <aside className="sidebar">
      {/* BRAND */}
      <div className="sidebar-brand">
        <div className="brand-logo">S</div>

        <div className="brand-text">
          <h1>SentriqAI</h1>
          <span>Fraud Intelligence</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="sidebar-navigation">
        <p className="sidebar-title">MAIN MENU</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`sidebar-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* SECURITY STATUS */}
      <div className="sidebar-footer">
        <div className="security-status">
          <div className="security-indicator"></div>

          <div>
            <strong>System Secure</strong>
            <span>AI engine online</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;