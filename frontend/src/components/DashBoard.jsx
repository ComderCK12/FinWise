import React from 'react';
import NetWorth from './NetWorth';
import EstimatedTax from './EstimatedTax';
import CreditScore from './CreditScore';
// import LineGraph from './LineGraph';
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-containers">
        <NetWorth />
        <EstimatedTax />
        <CreditScore />
      </div>
      {/* <LineGraph /> */}
    </div>
  );
};

export default Dashboard;
