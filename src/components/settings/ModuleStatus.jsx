import "./ModuleStatus.css";

function ModuleStatus({ onNavigate }) {
    const modules = [
        "Dashboard",
        "Screenshot Analyzer",
        "Transaction Analyzer",
        "History",
        "Risk Analysis",
        "Alerts",
        "Beneficiaries",
        "Reports",
        "ML Insights",
    ];

    return (
        <section className="module-status">
            <div className="module-status-header">
                <div>
                    <span>PROJECT HEALTH</span>
                    <h3>SentriqAI Modules</h3>
                    <p>
                        Open each module to verify that the page is working
                        correctly.
                    </p>
                </div>
            </div>

            <div className="module-list">
                {modules.map((module) => (
                    <div className="module-item" key={module}>
                        <div className="module-icon">✓</div>

                        <div className="module-info">
                            <strong>{module}</strong>
                            <span>Open and test this module</span>
                        </div>

                        <span className="module-status-badge">
                            Ready
                        </span>

                        <button
                            type="button"
                            className="module-open-button"
                            onClick={() => onNavigate(module)}
                        >
                            Open →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ModuleStatus;