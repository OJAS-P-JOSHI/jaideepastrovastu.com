import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://jaideepastrovastu-com.onrender.com/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleExpanded = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Close if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked blog
    }
  };

  return (
    <div className="blog-main-container">
      <h1 className="heading">My Blogs</h1>
      {blogs.map((blog, index) => (
        <div className="blog" key={blog._id}>
          <span className="blog-id">{blog._id}</span>
          <h2 className="blog-heading">
            {blog.title}
          </h2>
          <p className={`blog-detail ${expandedIndex === index ? 'expanded' : ''}`}>
            {expandedIndex !== index ? `${blog.content.split(' ').slice(0, 25).join(' ')}...` : blog.content}
          </p>
          <button className="learn-more-button" onClick={() => toggleExpanded(index)}>
            {expandedIndex === index ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
