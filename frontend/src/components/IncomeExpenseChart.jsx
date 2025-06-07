import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../styles/Home.css";

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 5000, expenses: 3800 },
  { month: "Apr", income: 4780, expenses: 2908 },
  { month: "May", income: 5890, expenses: 4800 },
  { month: "Jun", income: 6390, expenses: 4300 },
  { month: "Jul", income: 9000, expenses: 5500 },
  // Add more months as needed
];

const IncomeExpenseChart = () => {
  console.log("HEy");
  return (
    <div>
      <h2 className="chart-intro">
        Track your montly income and expenses gradients
      </h2>
      <div className="chart-container">
        <h2 className="chart-title">Monthly Income vs Expenses</h2>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#FFA500"
                strokeWidth={2}
                name="Total Income"
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#0000FF"
                strokeWidth={2}
                name="Total Expenses"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
