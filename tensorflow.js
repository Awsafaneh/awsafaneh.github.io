import React, { useState } from 'react';
import { useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // إضافة رسالة ترحيبية من البوت عند بدء المحادثة
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Hello! How can I assist you today?", sender: "bot" }
    ]);
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" }
    ]);
    setUserInput("");

    // تحليل المدخلات باستخدام الذكاء الاصطناعي (مستقبلاً يتم دمجه مع TensorFlow.js)
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Let me check that for you.", sender: "bot" }
    ]);
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
