import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from '../src/components/intro';
import Features from '../src/components/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      < Features/>
      
    </div>
  );
}

export default App;
