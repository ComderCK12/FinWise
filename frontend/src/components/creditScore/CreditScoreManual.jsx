import React from "react";
import "../../styles/CreditScorePage.css";

const CreditScoreManual = () => {
  return (
    <div className="credit-manual-wrapper">
      <h1>Understanding Your Credit Score</h1>

      {/* === Parameter Guidance Section === */}
      <section className="manual-section">
        <h2>📌 Input Guide: What Each Parameter Means</h2>
        <p>
          Read this before using the calculator to understand how to rate
          yourself.
        </p>

        <div className="credit-factor">
          <h3>1️⃣ Payment History (35%)</h3>
          <p>
            <strong>What it means:</strong> Whether you've paid credit bills on
            time.
          </p>
          <p>
            <strong>How to rate:</strong>
          </p>
          <ul>
            <li>90–100: Always on time</li>
            <li>70–89: A few late payments</li>
            <li>50–69: Frequent delays</li>
            <li>Below 50: Often miss payments</li>
          </ul>
        </div>

        <div className="credit-factor">
          <h3>2️⃣ Credit Utilization (30%)</h3>
          <p>
            <strong>What it means:</strong> How much of your total credit limit
            you're using.
          </p>
          <p>
            <strong>How to rate:</strong>
          </p>
          <ul>
            <li>90–100: Utilization below 10%</li>
            <li>70–89: Between 10%–30%</li>
            <li>50–69: Between 30%–50%</li>
            <li>Below 50: Over 50%</li>
          </ul>
        </div>

        <div className="credit-factor">
          <h3>3️⃣ Credit Age (15%)</h3>
          <p>
            <strong>What it means:</strong> How long you've been using credit.
          </p>
          <p>
            <strong>How to rate:</strong>
          </p>
          <ul>
            <li>90–100: Credit age greater than 8 years</li>
            <li>70–89: 5–8 years</li>
            <li>50–69: 2–5 years</li>
            <li>Below 50: Less than 2 years</li>
          </ul>
        </div>

        <div className="credit-factor">
          <h3>4️⃣ Credit Mix (10%)</h3>
          <p>
            <strong>What it means:</strong> The variety of credit types you have
            (cards, loans, etc.).
          </p>
          <p>
            <strong>How to rate:</strong>
          </p>
          <ul>
            <li>90–100: Revolving + installment credit</li>
            <li>70–89: More than one type</li>
            <li>50–69: Only one credit type</li>
            <li>Below 50: No mix or single short-term loan</li>
          </ul>
        </div>

        <div className="credit-factor">
          <h3>5️⃣ Hard Inquiries (10%)</h3>
          <p>
            <strong>What it means:</strong> Number of credit checks by lenders
            recently.
          </p>
          <p>
            <strong>How to rate:</strong>
          </p>
          <ul>
            <li>90–100: 0–1 inquiry in last 12 months</li>
            <li>70–89: 2 inquiries</li>
            <li>50–69: 3–4 inquiries</li>
            <li>Below 50: 5+ inquiries</li>
          </ul>
        </div>
      </section>

      {/* === General Credit Manual Section === */}
      <section className="manual-section">
        <h2>📘 What is a Credit Score?</h2>
        <p>
          A credit score is a 3-digit number (300 to 850) that reflects your
          creditworthiness. Higher scores mean you're a lower risk for lenders.
        </p>
      </section>

      <section className="manual-section">
        <h2>💡 Why Does It Matter?</h2>
        <ul>
          <li>✔️ Better loan approval chances</li>
          <li>✔️ Lower interest rates</li>
          <li>✔️ Easier apartment or credit card approvals</li>
          <li>✔️ Lower insurance premiums (sometimes)</li>
        </ul>
      </section>

      <section className="manual-section">
        <h2>📈 What is a Good Credit Score?</h2>
        <table className="score-table">
          <thead>
            <tr>
              <th>Score Range</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>800–850</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>740–799</td>
              <td>Very Good</td>
            </tr>
            <tr>
              <td>670–739</td>
              <td>Good</td>
            </tr>
            <tr>
              <td>580–669</td>
              <td>Fair</td>
            </tr>
            <tr>
              <td>300–579</td>
              <td>Poor</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CreditScoreManual;
