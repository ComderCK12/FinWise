import React from "react";
import CreditScoreCalculator from "../components/creditScore/CreditScoreCalculator";
import CreditScoreManual from "../components/creditScore/CreditScoreManual";
import "../styles/CreditScorePage.css";

const CreditScorePage = () => {
  return (
    <div className="credit-page-wrapper">
      <div className="credit-page-layout">
        <div className="left-panel">
          <CreditScoreManual />
        </div>
        <div className="right-panel">
          <CreditScoreCalculator />
        </div>
      </div>
    </div>
  );
};

export default CreditScorePage;
