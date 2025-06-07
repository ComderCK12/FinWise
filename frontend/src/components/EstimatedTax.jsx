import React from "react";
import "../styles/Cards.css";
import CountUp from "react-countup";

const EstimatedTax = () => {
  return (
    <div className="card">
      <h3>Estimated Tax</h3>
      <p className="tax">
        Rs
        <CountUp end={5000} />
      </p>
    </div>
  );
};

export default EstimatedTax;
