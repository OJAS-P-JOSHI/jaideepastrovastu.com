import React, { useState } from 'react';
import Login from './Login'; // Import the Login component
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import MessageList from './MessageList';
import './Admin.css';

const Admin = () => {
  const [auth, setAuth] = useState(false);

  if (!auth) {
    return <Login setAuth={setAuth} />;
  }

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <BlogForm />
      <BlogList />
      <MessageList />
    </div>
  );
};

export default Admin;
