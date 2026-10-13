import { useMemo, useState } from "react";

import HistoryFilters from "../components/history/HistoryFilters";
import HistoryTable from "../components/history/HistoryTable";

import "./HistoryPage.css";

function HistoryPage() {
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const transactions = [
    {
      id: "UPI10284",
      merchant: "Amazon Pay",
      type: "Screenshot",
      amount: "₹2,500",
      score: 18,
      status: "Safe",
      riskType: "safe",
      date: "05 Sep 2026",
    },
    {
      id: "UPI10283",
      merchant: "Unknown Merchant",
      type: "Screenshot",
      amount: "₹18,900",
      score: 76,
      status: "High Risk",
      riskType: "high",
      date: "05 Sep 2026",
    },
    {
      id: "UPI10282",
      merchant: "Flipkart",
      type: "Transaction",
      amount: "₹4,200",
      score: 42,
      status: "Review",
      riskType: "medium",
      date: "04 Sep 2026",
    },
    {
      id: "UPI10281",
      merchant: "Swiggy",
      type: "Screenshot",
      amount: "₹1,240",
      score: 12,
      status: "Safe",
      riskType: "safe",
      date: "04 Sep 2026",
    },
    {
      id: "UPI10280",
      merchant: "Unknown UPI ID",
      type: "Transaction",
      amount: "₹9,800",
      score: 64,
      status: "High Risk",
      riskType: "high",
      date: "03 Sep 2026",
    },
    {
      id: "UPI10279",
      merchant: "Zomato",
      type: "Screenshot",
      amount: "₹860",
      score: 21,
      status: "Safe",
      riskType: "safe",
      date: "03 Sep 2026",
    },
  ];

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        searchValue === "" ||
        transaction.merchant.toLowerCase().includes(searchValue) ||
        transaction.id.toLowerCase().includes(searchValue);

      const matchesRisk =
        riskFilter === "All" ||
        transaction.status === riskFilter;

      const matchesType =
        typeFilter === "All" ||
        transaction.type === typeFilter;

      return matchesSearch && matchesRisk && matchesType;
    });
  }, [search, riskFilter, typeFilter]);

  return (
    <div className="history-page">
      <header className="history-page-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>

          <h1>Transaction History</h1>

          <p>
            Review and search all UPI transactions analyzed
            by SentriqAI.
          </p>
        </div>
      </header>

      <HistoryFilters
        search={search}
        setSearch={setSearch}
        riskFilter={riskFilter}
        setRiskFilter={setRiskFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <HistoryTable
        transactions={filteredTransactions}
      />
    </div>
  );
}

export default HistoryPage;