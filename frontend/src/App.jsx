// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NetWorthPage from "./pages/NetWorthPage";
// import TaxPage from "./pages/TaxPage";
// import CreditScorePage from "./pages/CreditScorePage";
// import BlogsPage from "./pages/BlogsPage";
// // Add other components/pages as needed
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import PlanALoanPage from "./pages/PlanALoanPage";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="app-container">
//         {/* <main> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/networth" element={<NetWorthPage />} />
//           <Route path="/tax" element={<TaxPage />} />
//           <Route path="/credit" element={<CreditScorePage />} />
//           <Route path="/planaloan" element={<PlanALoanPage />} />
//         </Routes>
//         {/* </main> */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NetWorthPage from "./pages/NetWorthPage";
import TaxPage from "./pages/TaxPage";
import CreditScorePage from "./pages/CreditScorePage";
import BlogsPage from "./pages/BlogsPage";
import PlanALoanPage from "./pages/PlanALoanPage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/networth" element={<NetWorthPage />} />
            <Route path="/tax" element={<TaxPage />} />
            <Route path="/credit" element={<CreditScorePage />} />
            <Route path="/planaloan" element={<PlanALoanPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
