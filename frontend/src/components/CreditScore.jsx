import React from "react";
import "../styles/Cards.css";
import CountUp from "react-countup";

const CreditScore = () => {
  return (
    <div className="card">
      <h3>Credit Score</h3>
      <p className="creditScore">
        <CountUp end={760} />
      </p>
    </div>
  );
};

export default CreditScore;
