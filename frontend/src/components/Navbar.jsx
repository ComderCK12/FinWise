import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ProfileImg from "../assets/images/profile.jpg";
import { useAuth } from "../context/AuthContext"; // 👈 Import AuthContext
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // 👈 Import auth instance

const Navbar = () => {
  const { currentUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
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
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/networth">Networth</Link>
          </li>
          <li>
            <Link to="/tax">Tax</Link>
          </li>
          <li>
            <Link to="/credit">Credit Score</Link>
          </li>
          <li>
            <Link to="/planaloan">Plan a Loan</Link>
          </li>
        </ul>

        {currentUser ? (
          <div className="auth-section" ref={dropdownRef}>
            <div className="profile-dropdown">
              <img
                src={currentUser.photoURL || ProfileImg}
                alt="Profile"
                className="profile-img"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <p className="dropdown-name">
                    {currentUser.displayName || currentUser.email}
                  </p>
                  <Link to="/profile">User Profile</Link>
                  <Link to="/contact">Contact Me</Link>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
