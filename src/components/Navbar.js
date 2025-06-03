import React from 'react';
import './Navbar.css';
import logo from '../assets/geeks-logo.jpg'; // Make sure the image exists in this path
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side links */}
      <ul className="nav-links">
        <li><a href="#intro"><i className="bi bi-house-door"></i> Intro</a></li>
        <li><a href="#features"><i className="bi bi-grid"></i> Features</a></li>
        <li><a href="#examples"><i className="bi bi-images"></i> Examples</a></li>
      </ul>

      {/* Center logo */}
      <div className="logo">
        <img src={logo} alt="GeeksBlogs Logo" className="logo-img" />
      </div>

      {/* Right side icons */}
      <ul className="nav-links">
        <li><i className="bi bi-person-circle"></i></li>
        <li><i className="bi bi-bell"></i></li>
        <li><i className="bi bi-gear"></i></li>
        <Link to="/login">Logout</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
