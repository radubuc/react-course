import React from 'react';

import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //Using state and hooks to add word to dictionary
  const [inputText, setInputText] = useState("");
  const [entries, setEntries] = useState("");
  const [currentEntry, setCurrentEntry] = useState({}); //Do I need something for current Entry? Maybe for editing the word
  const [isEditing, setIsEditing] = useState(false);

  // var entries = [
  //   {
  //     id: "1",
  //     word: "test",
  //     definition: "test definition"
  //   }
  // ];

  return (
    <Container fluid>
        <div>
          <HeaderNav />
          <UtilityNav />

          <Footer />
        </div>

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


