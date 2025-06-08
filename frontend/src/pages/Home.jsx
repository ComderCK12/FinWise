import Navbar from "../components/Navbar";
import Dashboard from "../components/DashBoard";
import "../styles/Home.css";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import HeroSection from "../components/HeroSection";

const Home = () => {
  console.log("Home page");
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Dashboad section */}
      <div className="user-welcome">Hello World from home page</div>
      <Dashboard />
      <IncomeExpenseChart />
    </div>
  );
};

export default Home;
