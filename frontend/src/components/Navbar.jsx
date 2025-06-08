import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ProfileImg from "../assets/images/profile.jpg";
import { useAuth } from "../context/AuthContext"; // 👈 Import AuthContext
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // 👈 Import auth instance

const Navbar = () => {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("User logged out");
    }).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          <Link to="/">FinWise</Link>
        </h1>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/networth">Networth</Link></li>
          <li><Link to="/tax">Tax</Link></li>
          <li><Link to="/credit">Credit Score</Link></li>
          <li><Link to="/planaloan">Plan a Loan</Link></li>
        </ul>

        {currentUser ? (
          <div className="auth-section">
            <div className="user-info">
              <span>{currentUser.displayName || currentUser.email}</span>
              <div className="profile-img">
                <img src={ProfileImg} alt="Profile" />
              </div>
            </div>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
