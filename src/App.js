import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from '../src/components/intro';
import Blog from '../src/components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Blog />
    </div>
  );
}

export default App;
