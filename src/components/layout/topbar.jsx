import "./Topbar.css";

function Topbar({ activePage }) {
  return (
    <header className="topbar">
      <div className="topbar-heading">
        <p>UPI FRAUD INTELLIGENCE</p>
        <h2>{activePage}</h2>
      </div>
      <div className="topbar-actions">
        <button className="notification-button" type="button">
          <span>🔔</span>
          <b></b>
        </button>
        <div className="topbar-profile">
          <div className="topbar-avatar"> </div>
          <div className="topbar-user">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
          <span className="profile-arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}
export default Topbar;