import React from 'react';
import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEntryForm from './components/CreateEntryForm';

function App() {
  return (
    <div className='container-fluid'>
      <HeaderNav />
      <UtilityNav />
      <CreateEntryForm />

      
      
      <Footer />
    </div>
  
  );
}

export default App;

//CreateEntryForm will be the default view

{/* <p>THIS IS A SPACER</p>
<p>THIS IS A SPACER</p> */}
