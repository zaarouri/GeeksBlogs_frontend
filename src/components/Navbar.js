import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GeeksBlogs</div>
      <ul className="nav-links">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#examples">Examples</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
