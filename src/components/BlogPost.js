import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/blogs/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur de récupération du blog :', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading...</div>;

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
          src={post.picture || 'https://via.placeholder.com/600x300'} 
          alt={post.title} 
          className="card-img-top rounded-top" 
          style={{ maxHeight: '400px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-primary">{post.title}</h1>
          <p className="card-text fs-5 mb-4">
            {(post.comments && post.comments.length > 0)
              ? post.comments[0].body
              : 'No description available.'}
          </p>
          <hr />
          <p className="card-text text-muted fst-italic">
            Article ajouté le {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
