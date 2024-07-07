import React, { useState, useEffect } from 'react';
import './Admin.css';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('https://jaideepastrovastu.onrender.com/api/messages');
      const data = await response.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  return (
    <div className="message-list-container">
      <h2>Messages</h2>
      {messages.map(message => (
        <div key={message._id} className="message-item">
          <h3>{message.name}</h3>
          <p>{message.email}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
