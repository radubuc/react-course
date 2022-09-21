//REDUX 3 VIDEO NOTES

import React from "react";
import { createStore } from "redux"; //Originally legacy_ was not included. I added this for troubleshooting
import Counter from "./components/Counter";
import { Provider } from 'react-redux';

//Following this article to troubleshoot "Could not find "store" in the context of "Connect(Counter)"" error: https://daveceddia.com/how-does-redux-work/#:~:text=Errors%20Mean%20Progress,to%20%22Connect(Counter)%22. Note: article says index.js, but it should go in my app.js It worked!


//initialState object needed. Need to set to 0, otherwise would be null on first run and trigger errors
const initialState = {
  count: 0
};

//Reducer will be argument in createStore(). Will receive action dictated by Counter component. Updates state by dispatching action, but doesn't receive new, updated state yet. Need optional argument in export statement for Counter component for that. Reducer listens to when state update happens. It receives action. Based on what action it receives (increment or decrement), it updates state accordingly.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };
    
    default:
      return state; //If we somehow pass in something other than INCREMENT or DECREMENT, return original state (AKA don't increment or decrement). Good practice to prevent code from crashing
  }
}

const store = createStore(reducer); //createStore() is deprecated now, but video used it

function App() {
  return (
    <Provider store={store}> 
      <Counter />
    </Provider>

  ); //Provider sends down info to child components, built into React Redux. It's the parent of all child components in the app
}

export default App;

//Note, in real dev, Redux stuff not used in app.js. It will have a separate folder structure. Will be refactored in next video
