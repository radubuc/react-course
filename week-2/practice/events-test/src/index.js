import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import SecondsCounterContainer from './components/seconds-counter-container';
import Container from './components/container';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <SecondsCounterContainer />,
  document.getElementById('root')
); //Note: If counter starts counting by 2s, delete <React.StrictMode></React.StrictMode> component tags. Leave my component there though. If I have more than 1 component, wrap them all with one div

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

