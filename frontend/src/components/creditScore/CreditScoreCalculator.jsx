import React, { useState } from "react";
import axios from "axios";
import "../../styles/CreditScorePage.css";

const CreditScoreCalculator = () => {
  const [formData, setFormData] = useState({
    paymentHistory: "",
    creditUtilization: "",
    creditAge: "",
    creditMix: "",
    hardInquiries: "",
  });
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/credit/calculate",
        formData
      );
      setScore(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to calculate credit score");
    }
    setLoading(false);
  };

  const inputs = [
    { label: "Payment History", name: "paymentHistory" },
    { label: "Credit Utilization", name: "creditUtilization" },
    { label: "Credit Age", name: "creditAge" },
    { label: "Credit Mix", name: "creditMix" },
    { label: "Hard Inquiries", name: "hardInquiries" },
  ];

  return (
    <div className="card calculator">
      <h1 className="title">Credit Score Calculator</h1>
      <form onSubmit={handleSubmit} className="form">
        {inputs.map(({ label, name }) => (
          <div key={name} className="form-group">
            <label htmlFor={name} className="label">
              {label}
            </label>
            <input
              id={name}
              type="number"
              name={name}
              min="0"
              max="100"
              required
              placeholder={`Enter ${label.toLowerCase()} (0-100)`}
              value={formData[name]}
              onChange={handleChange}
              className="input"
            />
          </div>
        ))}
        <button type="submit" disabled={loading} className="btn">
          {loading ? "Calculating..." : "Calculate Score"}
        </button>
      </form>
      {score !== null && (
        <div className="result">
          <p>Your estimated credit score is:</p>
          <p className="result-score">{score}</p>
        </div>
      )}
    </div>
  );
};

export default CreditScoreCalculator;
