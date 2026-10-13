import "./RiskCategories.css";

function RiskCategories() {
  const categories = [
    {
      title: "Safe Transactions",
      percentage: 93,
      count: "1,197",
      description: "Transactions with low-risk indicators",
      type: "safe",
    },
    {
      title: "Medium Risk",
      percentage: 5,
      count: "64",
      description: "Transactions requiring verification",
      type: "medium",
    },
    {
      title: "High Risk",
      percentage: 2,
      count: "23",
      description: "Transactions with strong risk indicators",
      type: "high",
    },
  ];

  return (
    <section className="risk-categories">
      <div className="risk-categories-header">
        <div>
          <h3>Risk Categories</h3>
          <p>Distribution of analyzed transactions by risk level</p>
        </div>
      </div>

      <div className="risk-category-list">
        {categories.map((category) => (
          <div
            className={`risk-category-item ${category.type}`}
            key={category.title}
          >
            <div className="risk-category-top">
              <div className="risk-category-title">
                <span
                  className={`category-dot ${category.type}`}
                ></span>

                <strong>{category.title}</strong>
              </div>

              <strong className="category-percentage">
                {category.percentage}%
              </strong>
            </div>

            <div className="category-progress">
              <div
                className={`category-progress-fill ${category.type}`}
                style={{
                  width: `${category.percentage}%`,
                }}
              ></div>
            </div>

            <div className="risk-category-bottom">
              <span>{category.description}</span>
              <strong>{category.count} transactions</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskCategories;