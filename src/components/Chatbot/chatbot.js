import React, { useState, useEffect } from 'react';
import './chatbot.css'; // Import your CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      content: "Hi there 👋 \nHow can I help you today?",
      type: "incoming"
    }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const inputInitHeight = 55; // Set initial height of input

  const handleChat = () => {
    const newMessage = userMessage.trim();
    if (!newMessage) return;
    const newMessages = [...messages, { content: newMessage, type: "outgoing" }];
    setMessages(newMessages);
    setUserMessage('');
    setTimeout(() => {
      const incomingMessage = "Thinking..."; // Placeholder for response
      setMessages([...newMessages, { content: incomingMessage, type: "incoming" }]);
      // Call your API for response here and update the messages state accordingly
    }, 600);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChat();
      }
    };

    const chatInput = document.querySelector(".chat-input textarea");
    chatInput.addEventListener("keydown", handleKeyDown);

    return () => {
      chatInput.removeEventListener("keydown", handleKeyDown);
    };
  }, [messages, userMessage]);

  return (
    <div className="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span className="close-btn material-symbols-outlined">close</span>
      </header>
      <ul className="chatbox">
        {messages.map((message, index) => (
          <li key={index} className={`chat ${message.type}`}>
            {message.type === "incoming" && (
              <span className="material-symbols-outlined">smart_toy</span>
            )}
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          value={userMessage}
          onChange={handleInputChange}
          style={{ height: `${inputInitHeight}px` }}
          required
        ></textarea>
        <span className="material-symbols-outlined" onClick={handleChat}>send</span>
      </div>
    </div>
  );
};

export default Chatbot;