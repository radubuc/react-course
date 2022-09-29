import React from 'react';
import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container-fluid'>
      <HeaderNav />
      <UtilityNav />

      <p>THIS IS A SPACER</p>
      <p>THIS IS A SPACER</p>
      <p>THIS IS A SPACER</p>
      <p>THIS IS A SPACER</p>
      <Footer />
    </div>
  
  );
}

export default App;
