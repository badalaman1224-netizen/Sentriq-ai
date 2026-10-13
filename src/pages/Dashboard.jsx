import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import RiskTrend from "../components/dashboard/RiskTrend";
import RiskDistribution from "../components/dashboard/RiskDistribution";
import RecentScans from "../components/dashboard/RecentScans";

function Dashboard({ setActivePage }) {
  return (
    <div className="dashboard-page">
      <WelcomeCard
        onAnalyze={() => setActivePage("Screenshot Analyzer")}
      />
 
      <StatsCards />

      <div className="dashboard-charts">
        <RiskTrend />
        <RiskDistribution />
      </div>

      <RecentScans
        onViewHistory={() => setActivePage("History")}
      />
    </div>
  );
}

export default Dashboard;