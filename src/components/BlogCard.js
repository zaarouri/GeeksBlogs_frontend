import React from 'react';

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a href="#" className="btn btn-primary mt-auto">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
