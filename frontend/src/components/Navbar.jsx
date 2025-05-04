import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../styles/Navbar.css';
import ProfileImg from '../assets/images/profile.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1><Link to="/">FinWise</Link></h1> {/* ✅ Use Link instead of <a> */}
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/networth">Networth</Link></li>
          <li><Link to="/tax">Tax</Link></li>
          <li><Link to="/credit">Credit Score</Link></li>
        </ul>
        <div className="profile-img">
          <img src={ProfileImg} alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
