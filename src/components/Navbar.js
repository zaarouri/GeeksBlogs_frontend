import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/geeks-logo.jpg';

const Navbar = ({ setShowFeatures }) => {
  const navigate = useNavigate();

  const goHome = () => {
    setShowFeatures(false);
    navigate('/home');
  };

  const goToFeatures = () => {
    setShowFeatures(true);
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a onClick={goHome}><i className="bi bi-house-door"></i> Home</a></li>
        <li><a onClick={() => navigate('/blog')}><i className="bi bi-grid"></i> Blog</a></li>
        <li><a onClick={goToFeatures}><i className="bi bi-images"></i> Article</a></li>
      </ul>

      <div className="logo">
        <img src={logo} alt="GeeksBlogs Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><i className="bi bi-person-circle"></i></li>
        <li><i className="bi bi-gear"></i></li>
      </ul>
    </nav>
  );
};

export default Navbar;