import React from "react";
import "../styles/Home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} FinWise. All rights reserved.</p>
        <p>
          Made with 💡 by <strong>Team FinWise</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
