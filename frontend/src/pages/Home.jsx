import Navbar from "../components/Navbar";
import Dashboard from "../components/DashBoard";
import "../styles/Home.css";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import HeroSection from "../components/HeroSection";
import FinanceNewsSection from "../components/FinanceNewsSection";

const Home = () => {
  console.log("Home page");
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Dashboad section */}
      <div className="user-welcome">Hello World from home page</div>

      <FinanceNewsSection />

      {/* <section className="finance-news-section">
        <h2 className="section-title">Latest Finance News</h2>
        <div className="news-cards">
          <div className="news-card">
            <h3>Stock Market Hits All-Time High</h3>
            <p>The Sensex surged 500 points as tech and banking stocks rallied...</p>
          </div>
          <div className="news-card">
            <h3>RBI Keeps Interest Rates Unchanged</h3>
            <p>The Reserve Bank of India has kept repo rates steady amid inflation concerns...</p>
          </div>
        </div>
      </section> */}

      <section className="finance-tips-section">
        <h2 className="section-title">Smart Finance Tips</h2>
        <div className="tips-cards">
          <div className="tip-card">
            <h3>Start an Emergency Fund</h3>
            <p>
              Save at least 3-6 months of living expenses in a high-interest
              savings account.
            </p>
          </div>
          <div className="tip-card">
            <h3>Use the 50/30/20 Budget Rule</h3>
            <p>
              Spend 50% on needs, 30% on wants, and save 20% of your income.
            </p>
          </div>
        </div>
      </section>

      {/* <Dashboard /> */}
      {/* <IncomeExpenseChart /> */}
    </div>
  );
};

export default Home;
