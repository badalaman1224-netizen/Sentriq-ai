import { useState } from "react";

import ScreenshotUploader from "../components/analyzer/ScreenshotUploader";
import ScreenshotPreview from "../components/analyzer/ScreenshotPreview";
import FraudResult from "../components/analyzer/FraudResult";

import "./ScreenshotAnalyzerPage.css";

function ScreenshotAnalyzerPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
                                                        
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setAnalysisResult(null);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setAnalysisResult(null);
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      setAnalysisResult({
        score: 30,
        level: "Low Risk",
        status: "Safe",
        statusType: "low",
        summary:
          "The transaction does not contains any  patterns that require careful verification before proceeding.",
        reasons: [
          "Transaction amount is unusually high",
          "Beneficiary appears unfamiliar",
          "Transaction pattern requires additional verification",
        ],
        amount: "₹1900",
        transactionStatus: "Needs Review",
        confidence: 91,
      });

      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="screenshot-analyzer-page">
      <div className="analyzer-page-header">
        <div>
          <span>FRAUD INTELLIGENCE</span>
          <h1>Screenshot Analyzer</h1>
          <p>
            Upload a UPI payment screenshot and analyze its
            potential fraud risk.
          </p>
        </div>
      </div>

      {!selectedFile && (
        <ScreenshotUploader onFileSelect={handleFileSelect} />
      )}

      {selectedFile && (
        <div className="analyzer-workspace">
          <div className="analyzer-left">
            <ScreenshotPreview
              file={selectedFile}
              onRemove={handleRemove}
            />

            <button
              className="analyze-button"
              type="button"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing
                ? "Analyzing Transaction..."
                : "Analyze Screenshot"}
            </button>
          </div>

          <div className="analyzer-right">
            <FraudResult result={analysisResult} />
          </div>
        </div>
      )}
    </div>
  );
}
export default ScreenshotAnalyzerPage;