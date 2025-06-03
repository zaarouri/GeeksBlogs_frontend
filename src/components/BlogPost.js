import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';



const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) 
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Article not found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
      </div>
    );

  return (
    <div className="container py-5">
      <Link to="/blog" className="btn btn-outline-secondary mb-4">
        &larr; Back to Blog
      </Link>

      <div className="card shadow-sm">
        <img 
          src={post.image} 
          alt={post.title} 
          className="card-img-top rounded-top" 
          style={{ maxHeight: '400px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-primary">{post.title}</h1>
          <p className="card-text fs-5 mb-4">{post.description}</p>
          <hr />
          <p className="card-text text-muted fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae est at dolor condimentum interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <p className="card-text text-muted fst-italic">
            Curabitur sit amet sapien nec leo dictum egestas. Vivamus dapibus est at vehicula faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
