import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/blogs') 
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Erreur lors de la récupération des blogs:', err));
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Blog</h2>
        <div className="row">
          {blogs.map((post) => (
            <BlogCard
              key={post._id}
              id={post._id}
              title={post.title}
              description={(post.comments && post.comments.length > 0) ? post.comments[0].body : 'No description'}
              image={post.picture || 'https://via.placeholder.com/300'} // par défaut une image générique
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
