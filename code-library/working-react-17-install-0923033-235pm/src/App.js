import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import NavBar from './components/test';

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Test</p>
    </div>
  );
}

export default App;
