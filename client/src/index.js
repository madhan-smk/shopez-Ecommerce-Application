import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeContext  from './Context/HomeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomeContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HomeContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
