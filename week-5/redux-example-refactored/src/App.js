//REDUX 5-7 VIDEO NOTES

import React from "react";
import Counter from "./components/Counter";
import CounterByTwo from "./components/CounterByTwo"; //Don't forget to import this!
import { Provider } from 'react-redux';
import { store } from "./redux/store"; //Now that code has been refactored and correct folder structure is set up, we must import the store. Since we didn't use the "default" keyword in the store.js export statement, we must include braces {} around store. In fact, testing w/o the {} triggers the error "export 'default' (imported as 'store') was not found in './redux/store' (possible exports: store)". Also tested adding "default" keyword to export statement in store.js and it crashed hard.

function App() {
  return (
    <Provider store={store}> 
      <Counter />
      <CounterByTwo />
    </Provider>

  ); //Provider sends down info to child components, built into React Redux. It's the parent of all child components in the app
}

export default App;

//Note, in real dev, Redux stuff not used in app.js. It will have a separate folder structure. Will be refactored in next video
