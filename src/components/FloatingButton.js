import React from 'react';

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-1/2 right-0 bg-green-600 text-white p-3 shadow-lg -rotate-90 -m-3"
      onClick={() => {
        // Add functionality for the button click here
        console.log('Floating button clicked!');
      }}
    >
      {/* <FaPlus size={20} /> */}
      DONATE
    </button>
  );
};

export default FloatingButton;