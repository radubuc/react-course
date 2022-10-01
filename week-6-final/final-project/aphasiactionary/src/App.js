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
  var entries = [
    {
      key1: value1,
      key2: value2,
    }
  ];

  <p id="demo"></p>

  entries.new_value2 = "new_value";
  entries["another_new_geeks"] = "another_value";

  var to_show = "var dict = { <br />";

  for (var key in entries) {
    to_show += `"${key}" : ${entries[key]} ${<br />}`;
  }

  to_show += " }; <br />";

  document.getElementById("demo").innerHTML = to_show;

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

//Set up array as props, pass props into Entries component when finished setting up props

//I am modifying my origin JS entries object format to use key value pairs. I am loosely following this G4G tutorial: https://www.geeksforgeeks.org/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
//Don't I need an id though to update and delete?

//Going to need a loop to iterate thru all entries

//See to do list example Kristina sent: https://github.com/KristinaMacias/bootstrap-carousel

// Components 
// 1. CreateEntryBtn
// 2. CreateEntryForm (Create)
// 3. DeleteEntry (Delete)
// 4. EditEntry (Update)
// 5. ViewAllEntries (Read)
// 6. Entry? Maybe not needed anymore
// 7. Footer
// 8. HeaderNav
// 9. UtilityNav
// 10. Router

//Note: Login and Sign up buttons are present in nav, but they are not hooked up yet, so they don't count towards the 10 component requirement


