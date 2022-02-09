import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; //Note the path to bootstrap
import './index.css';
import App from './App';
import NewsFeed from './components/news-feed';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement(NewsFeed, {}, null), //Create and render NewsFeed, then strap it to the div with the id 'root'
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
