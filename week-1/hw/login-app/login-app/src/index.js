import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/nav';
import LoginForm from './components/login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<div>
  <NavBar />
  <LoginForm />
</div>,
//Note: Cannot pass more than 2 params using render() in index.js. Get around it for now by putting components in a div
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
