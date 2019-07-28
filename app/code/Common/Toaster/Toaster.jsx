import React from 'react';

const Toaster = ({ message, isVisible }) => {
  return (
    <div className={`toaster ${isVisible ? 'toaster--in' : ''}`}>
      <div className="container">
        <p className="toaster__text">{message}</p>
      </div>
    </div>
  );
};

export default Toaster;
