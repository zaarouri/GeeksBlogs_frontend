import React from 'react';
import hooksImage from '../assets/images/file_1737026922989_geeks-logo.jpg';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'React Basics',
    description: 'An introduction to React fundamentals.',
    image: hooksImage,
  },
  {
    id: 2,
    title: 'Using Bootstrap with React',
    description: 'How to style your React apps using Bootstrap classes.',
    image: hooksImage,
  },
  {
    id: 3,
    title: 'Hooks in React',
    description: 'Understanding useState, useEffect, and custom hooks.',
    image: hooksImage,
  },
];

function Blog() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Blog</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
