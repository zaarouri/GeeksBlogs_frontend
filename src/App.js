import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from '../src/components/intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
