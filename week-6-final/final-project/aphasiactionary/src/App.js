import React from 'react';

import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

function App() {
  // const entries = [
  //   {
  //     id: 1,
  //     key: "test word",
  //     value: "test definition"
  //   },
  // ]

  return (
    <Container fluid>
      <Router>
        <div>
          <HeaderNav />
          <UtilityNav />


          <Footer />
        </div>

      </Router>
    </Container>



  );
}

export default App;

//CreateEntryForm will be the default view

//Set up array as props, pass props into Entries component when finished setting up props

// Components 
// 1. CreateEntryBtn
// 2. CreateEntryForm (Create)
// 3. DeleteEntry (Delete)
// 4. EditEntry (Update)
// 5. Entries (Read)
// 6. Entry? Maybe not needed anymore
// 7. Footer
// 8. HeaderNav
// 9. UtilityNav
// 10. Router

//Note: Login and Sign up buttons are present in nav, but they are not hooked up yet, so they don't count towards the 10 component requirement


