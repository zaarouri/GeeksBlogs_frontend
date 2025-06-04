import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Intro from './components/intro';
import Features from './components/Features';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
=======
import Intro from '../src/components/intro';
import Blog from '../src/components/Blog';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



>>>>>>> ab5460a3bd30318fafeff5e84b62a18e9443f183

function App() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <Router>
<<<<<<< HEAD
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
=======
      <Routes>
        <Route path="/" element={<Navigate to="/blog" />} />
>>>>>>> ab5460a3bd30318fafeff5e84b62a18e9443f183
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
