import React, { useState } from 'react';

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! Chat with Cypher here.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Got it! 👌' }]);
    }, 800);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 cursor-pointer z-50"
      >
        <img src="img/chat.png" alt="Chat Icon" className="w-12 h-12" />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[350px] h-[500px] bg-white rounded-lg shadow-lg z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#F26922] text-white rounded-t-lg">
            <h2 className="font-semibold font-ones">Chat with Cypher</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 text-sm text-gray-700 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="flex flex-col gap-2">
              {messages.map((msg, index) => (
                <p
                  key={index}
                  className={`p-2 rounded-2xl max-w-[80%] ${
                    msg.from === 'user'
                      ? 'bg-gray-400 text-white font-ones self-end'
                      : 'bg-gray-100 text-secondary font-ones self-start'
                  }`}
                >
                  {msg.text}
                </p>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-3 py-2 flex gap-2 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 font-ones border rounded px-3 py-2 text-sm focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-button text-white px-4 py-2 rounded-2xl text-sm font-ones"
              onClick={handleSend}
            >
              Send
            </button>
          </div>

          {/* Icons */}
          <div className="flex justify-start gap-3 px-3 pb-3">
            <img src="img/cam-icon.png" alt="Camera" className="w-5 h-5" />
            <img src="img/img-icon.png" alt="Image" className="w-5 h-5" />
            <img src="img/link-icon.png" alt="Link" className="w-5 h-5" />
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
