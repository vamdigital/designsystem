import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/scss/app.scss';

const el = document.querySelector('#app');
console.log('Using Reactwebpackboilerplate created by Vaibhav Shringarpure');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  el
);
