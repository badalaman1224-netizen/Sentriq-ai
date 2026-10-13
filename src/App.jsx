import { useEffect, useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/topbar";

import Dashboard from "./pages/Dashboard";
import ScreenshotAnalyzerPage from "./pages/ScreenshotAnalyzerPage";
import TransactionAnalyzerPage from "./pages/TransactionAnalyzerPage";
import HistoryPage from "./pages/HistoryPage";
import RiskAnalysisPage from "./pages/RiskAnalysisPage";
import AlertsPage from "./pages/AlertsPage";
import BeneficiariesPage from "./pages/BeneficiariesPage";
import ReportsPage from "./pages/ReportsPage";
import MLInsightsPage from "./pages/MLInsightsPage";
import SettingsPage from "./pages/SettingsPage";

import "./App.css";

const DEFAULT_SETTINGS = {
  darkMode: false,
  notifications: true,
  highRiskAlerts: true,
  emailReports: false,
  autoAnalysis: true,
  riskSensitivity: "Balanced",
  dataRetention: "90 days",
  fullName: "Admin",
  email: "admin@sentriqai.local",
};

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("sentriqai-settings");

      return saved
        ? {
          ...DEFAULT_SETTINGS,
          ...JSON.parse(saved),
        }
        : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "sentriqai-settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  useEffect(() => {
    document.body.classList.toggle(
      "sentriq-dark",
      settings.darkMode
    );
  }, [settings.darkMode]);

  const updateSettings = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <Dashboard
            setActivePage={setActivePage}
          />
        );

      case "Screenshot Analyzer":
        return <ScreenshotAnalyzerPage />;

      case "Transaction Analyzer":
        return <TransactionAnalyzerPage />;

      case "History":
        return <HistoryPage />;

      case "Risk Analysis":
        return <RiskAnalysisPage />;

      case "Alerts":
        return <AlertsPage />;

      case "Beneficiaries":
        return <BeneficiariesPage />;

      case "Reports":
        return <ReportsPage />;

      case "ML Insights":
        return <MLInsightsPage />;

      case "Settings":
        return (
          <SettingsPage
            settings={settings}
            updateSettings={updateSettings}
            onNavigate={setActivePage}
          />
        );

      default:
        return (
          <Dashboard
            setActivePage={setActivePage}
          />
        );
    }
  };

  return (
    <div
      className={`app-layout ${settings.darkMode ? "dark-mode" : ""
        }`}
    >
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-area">
        <Topbar activePage={activePage} />

        <main className="page-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;