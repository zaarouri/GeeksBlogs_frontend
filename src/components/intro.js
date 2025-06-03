import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <section className="intro-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="intro-title">
          As a <span className="highlight">Geek</span>, you will not find a better App
        </h1>
        <button className="btn btn-primary btn-lg mt-4">Get Started</button>
      </div>
    </section>
  );
};

export default Intro;
