import React from 'react';
import Styles from './Toaster.scss';

const Toaster = ({ message, isVisible }) => {
  return (
    <div
      className={`${Styles['toaster']} ${
        isVisible ? Styles['toaster--in'] : ''
      }`}
    >
      <div className="container">
        <p className={Styles['toaster__text']}>{message}</p>
      </div>
    </div>
  );
};

export default Toaster;
