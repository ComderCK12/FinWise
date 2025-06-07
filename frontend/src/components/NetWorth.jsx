import React from "react";
import "../styles/Cards.css";
import CountUp from "react-countup";

const NetWorth = () => {
  return (
    <div className="card">
      <h3>Net Worth</h3>
      <p className="networth">
        Rs
        <CountUp end={1000000} />
      </p>
    </div>
  );
};

export default NetWorth;
