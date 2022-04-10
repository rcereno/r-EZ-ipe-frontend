import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Demo />
  </React.StrictMode>,
  document.getElementById('root'),
  document.querySelector('root')
);
reportWebVitals();

