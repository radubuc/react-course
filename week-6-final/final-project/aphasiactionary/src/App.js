import React, { useState, createContext } from 'react';

import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

//Following Dictionary w/ React tutorial: https://www.youtube.com/watch?v=BfnbPwqHhfY up to 17:25
//Create Context - IDK what this means exactly
export const InputContext = createContext();

function App() {
  //Using state and hooks to input user's text to dictionary
  const [inputText, setInputText] = useState("");
  // console.log(inputValue); //Checks if user's input is logged to console

  const value = {
    inputText, setInputText
  }



  // const [entries, setEntries] = useState("");
  // const [currentEntry, setCurrentEntry] = useState({}); //Do I need something for current Entry? Maybe for editing the word
  // const [entry, setEntry] = useState({}); //I think entry/setEntry will be used for creating a new entry and currentEntry/setCurrentEntry will be for updating an entry
  // const [isEditing, setIsEditing] = useState(false);

  // var entries = [
  //   {
  //     id: "1",
  //     word: "test",
  //     definition: "test definition"
  //   }
  // ];

  return (
    <InputContext.Provider value={value}>
      <Container fluid>
        <div>
          <HeaderNav />
          <UtilityNav />

          <Footer />
        </div>

      </Container>
    </InputContext.Provider>

  );
  //<InputContext value={value}> allows the text the user enters in the What They Say and What They May Mean to be used elsewhere
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
// 6. Entry?
// 7. Footer
// 8. HeaderNav
// 9. UtilityNav
// 10. RestApi
// 11. Router, Switch, Route and Link

//Note: Login and Sign up buttons are present in nav, but they are not hooked up yet, so they don't count towards the 10 component requirement


