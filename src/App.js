import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from '../src/components/intro';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      < Features/>
      <Blog/>
    </div>
  );
}

export default App;
