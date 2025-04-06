import React, { useState } from 'react';

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" bottom-5 right-5 cursor-pointer z-50"
      >
        <img src="img/chat.png" alt="Chat Icon" className="w-12 h-12" />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-2  bg-[#F26922] text-white rounded-t-lg">
            <h2 className="font-semibold">Chat with Cypher</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>

          <div className="py-4 h-60 overflow-y-auto text-sm text-gray-700">
                    <div className='flex flex-col gap-4 px-3'>
                    <p>Chat with Cypher</p>
                    <p className='justify-end flex p-3 bg-gray-400 text-white rounded-2xl'>Lorem ipsum dolar sit general </p>
                    <p className='justify-start flex'>Lorem ipsum dolar sit general </p>
                    <p className='justify-end flex'>Lorem ipsum dolar sit general </p>
                    <p className='justify-start flex'>Lorem ipsum dolar sit general </p>
                    <p className='justify-end flex'>Lorem ipsum dolar sit general </p>
                   
                    </div>
            {/* Add more chat messages here */}
          </div>

          <div className="p-3  flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none"
            />
            
          </div>
          {/*  */}

          <div className='flex justify-between py-3'>
          <div className='flex'>
            <img src="img/cam-icon.png" alt="" />
            <img src="img/img-icon.png" alt="" />
            <img src="img/link-icon.png" alt="" />
          </div>
          <div>
          <button className="bg-[#F26922] text-white px-5 py-2 rounded-2xl text-sm">
              Send
            </button>
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
