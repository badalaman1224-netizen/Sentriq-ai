import { useState } from "react";

import TransactionForm from "../components/analyzer/TransactionForm";
import TransactionRisk from "../components/analyzer/TransactionRisk";

import "./TransactionAnalyzerPage.css";

function TransactionAnalyzerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [riskResult, setRiskResult] = useState(null);

  const handleAnalyze = (transaction) => {
    setIsAnalyzing(true);
    setRiskResult(null);

    setTimeout(() => {
      const amount = Number(transaction.amount);

      let score = 20;
      let level = "Low Risk";
      let status = "Safe";
      let type = "safe";

      if (amount >= 10000) {
        score = 78;
        level = "High Risk";
        status = "Suspicious";
        type = "high";
      } else if (
        amount >= 5000 ||
        transaction.beneficiaryType !== "Known Beneficiary"
      ) {
        score = 48;
        level = "Medium Risk";
        status = "Review";
        type = "medium";
      }

      const indicators = [];

      if (amount >= 10000) {
        indicators.push({
          title: "High transaction amount",
          description:
            "The amount is significantly higher than a typical transaction.",
        });
      }

      if (transaction.beneficiaryType === "Unknown") {
        indicators.push({
          title: "Unknown beneficiary",
          description:
            "The selected beneficiary is not recognized as a known contact.",
        });
      }

      if (transaction.beneficiaryType === "New Beneficiary") {
        indicators.push({
          title: "New beneficiary",
          description:
            "The transaction is being made to a recently added beneficiary.",
        });
      }

      if (indicators.length === 0) {
        indicators.push({
          title: "No major risk indicators",
          description:
            "The provided transaction details do not show obvious high-risk patterns.",
        });
      }

      setRiskResult({
        score,
        level,
        status,
        type,
        summary:
          type === "high"
            ? "Several transaction characteristics require additional verification."
            : type === "medium"
              ? "Some transaction characteristics should be reviewed before proceeding."
              : "The provided transaction details currently appear relatively low risk.",
        indicators,
        amount: transaction.amount,
        beneficiary: transaction.beneficiary,
        confidence: type === "high" ? 91 : type === "medium" ? 78 : 94,
      });

      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="transaction-analyzer-page">
      <header className="transaction-page-header">
        <span>FRAUD INTELLIGENCE</span>

        <h1>Transaction Analyzer</h1>

        <p>
          Analyze UPI transaction details and identify suspicious
          payment patterns.
        </p>
      </header>

      <div className="transaction-workspace">
        <TransactionForm
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
        />

        <TransactionRisk result={riskResult} />
      </div>
    </div>
  );
}

export default TransactionAnalyzerPage;