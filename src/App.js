import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from '../src/components/intro';
import Blog from '../src/components/Blog';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/blog" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
