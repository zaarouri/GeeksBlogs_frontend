import React from 'react';
import '/Users/mac/geeksblogs/src/components/intro.js';

const Intro = () => {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-content container">
        <div className="intro-text">
          <h1>As a Geek you will not find a better App</h1>
          <p>
            GeeksBlogs gives you access to tutorials, examples, and features tailored for modern developers.
            Start your journey today and build smarter, faster, and stronger!
          </p>
          <a href="#features" className="btn btn-primary mt-3">Get Started</a>
        </div>
        <div className="intro-image">
          <img src="/images/intro.jpg" alt="Intro" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
