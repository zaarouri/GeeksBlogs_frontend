import React from 'react';
import image from '../assets/img2.jpg';
import './Feature.css';

function Feature() {
  return (
    <article className="recent-posts-article">
      <div className="post-img">
        <img
          src={image}
          alt="Climatiseur split mural"
          className="img-fluid"
        />
      </div>
      <h4 className="text-center" style={{ margin: 0 }}>
        Climatiseurs Split Inverter
      </h4>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </article>
  );
}

export default Feature;
