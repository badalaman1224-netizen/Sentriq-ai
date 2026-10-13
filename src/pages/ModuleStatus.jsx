import "./ModuleStatus.css";

function ModuleStatus({ onNavigate }) {
    const modules = [
        {
            name: "Dashboard",
            description: "Main fraud intelligence dashboard",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Screenshot Analyzer",
            description: "UPI screenshot analysis interface",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Transaction Analyzer",
            description: "Manual transaction risk analysis",
            status: "Ready",
            type: "ready",
        },
        {
            name: "History",
            description: "Transaction analysis history",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Risk Analysis",
            description: "Risk overview and fraud indicators",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Alerts",
            description: "Security alerts and notifications",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Beneficiaries",
            description: "UPI beneficiary monitoring",
            status: "Ready",
            type: "ready",
        },
        {
            name: "Reports",
            description: "Fraud and security reports",
            status: "Ready",
            type: "ready",
        },
        {
            name: "ML Insights",
            description: "Model performance and feature insights",
            status: "Ready",
            type: "ready",
        },
    ];

    return (
        <section className="module-status">
            <div className="module-status-header">
                <div>
                    <span>PROJECT HEALTH</span>
                    <h3>SentriqAI Modules</h3>
                    <p>
                        Use these links to verify each completed module
                        independently.
                    </p>
                </div>

                <div className="health-badge">
                    <span></span>
                    All Modules Loaded
                </div>
            </div>

            <div className="module-list">
                {modules.map((module) => (
                    <div className="module-item" key={module.name}>
                        <div className={`module-icon ${module.type}`}>
                            ✓
                        </div>

                        <div className="module-info">
                            <strong>{module.name}</strong>
                            <span>{module.description}</span>
                        </div>

                        <span className={`module-status-badge ${module.type}`}>
                            {module.status}
                        </span>

                        <button
                            className="module-open-button"
                            type="button"
                            onClick={() => onNavigate(module.name)}
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