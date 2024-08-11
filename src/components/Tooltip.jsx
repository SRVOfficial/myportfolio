import React from 'react';

const Tooltip = ({ message }) => {
  return (
    <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-auto p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
      {message}
    </div>
  );
};

export default Tooltip;
