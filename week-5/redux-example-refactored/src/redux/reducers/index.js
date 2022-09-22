//REDUX 7 VIDEO NOTES
import { combineReducers } from "redux"; //{} means importing a function
import counterReducer from "./counter";
import counterPlusTwoReducer from "./counter-plus-two";

//Call combineReducers (a built-in Redux function that takes object with name of the reducers as an arg), combine them, then send to store. Must export function here, then import in store.js
export default combineReducers({
    counterReducer,
    counterPlusTwoReducer
}); //These are 2 different states being maintained. Don't need counter: counterReducer.
