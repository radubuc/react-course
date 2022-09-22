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

  //Now that code has been refactored and correct folder structure is set up, we must export the reducer
  export default reducer;