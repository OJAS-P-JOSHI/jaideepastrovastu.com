import React, { useState, useEffect } from 'react';
import './Admin.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('https://jaideepastrovastu-com.onrender.com/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://jaideepastrovastu-com.onrender.com/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id));
        alert('Blog deleted successfully!');
      } else {
        alert('Failed to delete blog.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="blog-list-container">
      <h2>Blog List</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
