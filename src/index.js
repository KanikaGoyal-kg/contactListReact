import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactList from './pages/ContactList';

// import Modal from 'antd/lib/modal/Modal';

ReactDOM.render(
  <React.StrictMode>
    <ContactList />
  </React.StrictMode>,
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
