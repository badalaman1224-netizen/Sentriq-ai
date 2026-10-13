import { useMemo, useState } from "react";

import BeneficiaryFilters from "../components/beneficiaries/BeneficiaryFilters";
import BeneficiaryCard from "../components/beneficiaries/BeneficiaryCard";

import "./BeneficiariesPage.css";

function BeneficiariesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");

  const beneficiaries = [
    {
      id: 1,
      name: "Rahul Verma",
      upiId: "rahulverma@upi",
      status: "Trusted",
      statusType: "trusted",
      transactions: 48,
      volume: "₹86,400",
      riskScore: 12,
      riskType: "safe",
      lastPayment: "Today",
    },
    {
      id: 2,
      name: "Priya Singh",
      upiId: "priyasingh@upi",
      status: "Trusted",
      statusType: "trusted",
      transactions: 31,
      volume: "₹42,800",
      riskScore: 18,
      riskType: "safe",
      lastPayment: "Yesterday",
    },
    {
      id: 3,
      name: "Amit Kumar",
      upiId: "amitkumar@upi",
      status: "Review",
      statusType: "review",
      transactions: 9,
      volume: "₹24,500",
      riskScore: 46,
      riskType: "medium",
      lastPayment: "2 days ago",
    },
    {
      id: 4,
      name: "Unknown Merchant",
      upiId: "merchant847@upi",
      status: "Risky",
      statusType: "risky",
      transactions: 2,
      volume: "₹31,700",
      riskScore: 81,
      riskType: "high",
      lastPayment: "3 days ago",
    },
    {
      id: 5,
      name: "Neha Sharma",
      upiId: "nehasharma@upi",
      status: "Trusted",
      statusType: "trusted",
      transactions: 27,
      volume: "₹38,200",
      riskScore: 21,
      riskType: "safe",
      lastPayment: "4 days ago",
    },
    {
      id: 6,
      name: "New UPI Contact",
      upiId: "newcontact92@upi",
      status: "Review",
      statusType: "review",
      transactions: 4,
      volume: "₹11,900",
      riskScore: 57,
      riskType: "medium",
      lastPayment: "5 days ago",
    },
  ];

  const filteredBeneficiaries = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return beneficiaries.filter((beneficiary) => {
      const matchesSearch =
        searchValue === "" ||
        beneficiary.name.toLowerCase().includes(searchValue) ||
        beneficiary.upiId.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        beneficiary.status === statusFilter;

      const matchesRisk =
        riskFilter === "All" ||
        (riskFilter === "Low" && beneficiary.riskScore < 30) ||
        (riskFilter === "Medium" &&
          beneficiary.riskScore >= 30 &&
          beneficiary.riskScore < 60) ||
        (riskFilter === "High" && beneficiary.riskScore >= 60);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesRisk
      );
    });
  }, [search, statusFilter, riskFilter]);

  const trustedCount = beneficiaries.filter(
    (beneficiary) => beneficiary.status === "Trusted"
  ).length;

  const reviewCount = beneficiaries.filter(
    (beneficiary) => beneficiary.status === "Review"
  ).length;

  const riskyCount = beneficiaries.filter(
    (beneficiary) => beneficiary.status === "Risky"
  ).length;

  return (
    <div className="beneficiaries-page">
      {/* PAGE HEADER */}
      <header className="beneficiaries-page-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>

          <h1>Beneficiaries</h1>

          <p>
            Monitor UPI contacts and identify beneficiaries
            that may require additional verification.
          </p>
        </div>

        <div className="beneficiary-summary">
          <div>
            <span>Total</span>
            <strong>{beneficiaries.length}</strong>
          </div>

          <div>
            <span>Trusted</span>
            <strong>{trustedCount}</strong>
          </div>

          <div>
            <span>Review</span>
            <strong>{reviewCount}</strong>
          </div>

          <div>
            <span>Risky</span>
            <strong>{riskyCount}</strong>
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <BeneficiaryFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        riskFilter={riskFilter}
        setRiskFilter={setRiskFilter}
      />

      {/* BENEFICIARY LIST */}
      <section className="beneficiary-list-section">
        <div className="beneficiary-list-header">
          <div>
            <h2>Saved Beneficiaries</h2>
            <p>
              Showing {filteredBeneficiaries.length} of{" "}
              {beneficiaries.length} beneficiaries
            </p>
          </div>
        </div>

        {filteredBeneficiaries.length > 0 ? (
          <div className="beneficiary-list">
            {filteredBeneficiaries.map((beneficiary) => (
              <BeneficiaryCard
                key={beneficiary.id}
                beneficiary={beneficiary}
              />
            ))}
          </div>
        ) : (
          <div className="beneficiary-empty">
            <div className="beneficiary-empty-icon">
              ⌕
            </div>

            <h3>No beneficiaries found</h3>

            <p>
              Try changing your search or filter options.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default BeneficiariesPage;