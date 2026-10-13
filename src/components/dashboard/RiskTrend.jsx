import "./RiskTrend.css";

function RiskTrend() {
  const riskData = [
    { day: "Mon", value: 35 },
    { day: "Tue", value: 48 },
    { day: "Wed", value: 42 },
    { day: "Thu", value: 68 },
    { day: "Fri", value: 54 },
    { day: "Sat", value: 76 },
    { day: "Sun", value: 61 },
  ];

  return (
    <section className="risk-trend">
      <div className="risk-trend-header">
        <div>
          <h3>Risk Trend</h3>
          <p>Fraud risk activity over time</p>
        </div>

        <select className="risk-period" defaultValue="7">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div className="risk-chart">
        <div className="chart-y-axis">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        <div className="chart-area">
          <div className="chart-grid-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="chart-bars">
            {riskData.map((item) => (
              <div className="chart-column" key={item.day}>
                <div
                  className="risk-bar"
                  style={{ height: `${item.value}%` }}
                  title={`${item.value}% risk`}
                ></div>

                <span>{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskTrend;