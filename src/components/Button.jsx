import React from 'react';

function Button({ text = 'Click Me', className = '', onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
