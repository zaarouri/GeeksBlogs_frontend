import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/intro';
import Features from './components/Features';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <Router>
      <Navbar setShowFeatures={setShowFeatures} />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={
            showFeatures ? <Features /> : <Intro />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
