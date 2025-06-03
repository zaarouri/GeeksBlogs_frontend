import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/intro';
import Features from './components/Features'; // ✅ Added
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} /> {/* ✅ Added */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
