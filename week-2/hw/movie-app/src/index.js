import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './components/movie';
import MovieList from './components/movie-list-container';
import ReviewForm from './components/review-form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <MovieList />
  </div>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
