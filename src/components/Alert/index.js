import React from 'react';

const Alert = ({ message, subMessage }) => (
  <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white border-l-4 border-blue-600 text-blue-800 p-4 z-50 w-full max-w-md mx-auto mt-2 shadow-lg">
    <p className="font-bold">{message}</p>
    <p>{subMessage}</p>
  </div>
);

export default Alert;
