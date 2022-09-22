//REDUX 7 VIDEO NOTES

//Multiple reducers are optional. Use only if you need. We'll make a second one incrementing and decrementing by 2 just to learn how, but it wouldn't be needed if this were a real case. Could add another state variable in the Counter component. Single reducer reduces confusion

import { INCREMENT_BY_TWO, DECREMENT_BY_TWO } from "../actions"; //Don't need to specify /actions/index because JS/Node JS is smart enough to figure it out

//initialState object needed. Need to set to 0, otherwise would be null on first run and trigger errors
const initialState = {
    countByTwo: 0
  };

//Reducer will be argument in createStore(). Will receive action dictated by Counter component. Updates state by dispatching action, but doesn't receive new, updated state yet. Need optional argument in export statement for Counter component for that. Reducer listens to when state update happens. It receives action. Based on what action it receives (increment or decrement), it updates state accordingly.
export default (state = initialState, action) => {
    switch (action.type) {
      //Cases are now using INCREMENT and DECREMENT variables from actions/index.js, instead of string values. Therefore, need to import them above
      case INCREMENT_BY_TWO:
        return {
            countByTwo: state.countByTwo + 2
        };
  
      case DECREMENT_BY_TWO:
        return {
            countByTwo: state.countByTwo - 2
        };
      
      default:
        return state; //If we somehow pass in something other than INCREMENT or DECREMENT, return original state (AKA don't increment or decrement). Good practice to prevent code from crashing
    }
  }

  //Now that code has been refactored and correct folder structure is set up, we must export the reducer
//   export default reducer; //Don't need anymore, now exporting function directly. This is common practice.
