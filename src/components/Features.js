import React from 'react';
import Feature from './Feature';
import './Feature.css';

function Features() {
  return (
    <div className="container py-5">
      <div className="row gy-4">
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
        <div className="col-md-6 col-lg-4">
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default Features;
