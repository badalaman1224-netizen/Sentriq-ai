import "./StatsCards.css";

function StatsCards() {
  const stats = [
    {
      title: "Total Scans",
      value: "1,284",
      change: "+12.8%",
      description: "this month",
      icon: "⌁",
      type: "blue",
    },
    {
      title: "Frauds Detected",
      value: "87",
      change: "+6.4%",
      description: "detection rate",
      icon: "⚠",
      type: "red",
    },
    {
      title: "Safe Transactions",
      value: "1,197",
      change: "93.2%",
      description: "classified safe",
      icon: "✓",
      type: "green",
    },
    {
      title: "Average Risk Score",
      value: "32/100",
      change: "Low",
      description: "overall risk",
      icon: "◉",
      type: "purple",
    },
  ];

  return (
    <section className="stats-cards">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.title}>
          <div className={`stat-icon ${stat.type}`}>
            {stat.icon}
          </div>

          <div className="stat-info">
            <span className="stat-title">{stat.title}</span>

            <strong className="stat-value">
              {stat.value}
            </strong>

            <div className="stat-bottom">
              <span className={`stat-change ${stat.type}`}>
                {stat.change}
              </span>

              <span className="stat-description">
                {stat.description}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default StatsCards;