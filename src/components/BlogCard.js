import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <Link to={`/blog/${id}`} className="btn btn-primary mt-auto">
            Read More
          </Link>
          
          <Link to={`/blog/${id}`} className="btn btn-primary mt-auto">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
