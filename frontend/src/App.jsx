import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NetWorthPage from "./pages/NetWorthPage";
import TaxPage from "./pages/TaxPage";
import CreditScorePage from "./pages/CreditScorePage";
import BlogsPage from "./pages/BlogsPage";
// Add other components/pages as needed
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlanALoanPage from "./pages/PlanALoanPage";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/networth" element={<NetWorthPage />} />
          <Route path="/tax" element={<TaxPage />} />
          <Route path="/credit" element={<CreditScorePage />} />
          <Route path="/planaloan" element={<PlanALoanPage />} />
          {/* Add <Route path="/blogs" ...> if you have a Blogs component */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
