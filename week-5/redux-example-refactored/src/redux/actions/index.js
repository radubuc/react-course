//REDUX 6 & 7 VIDEO NOTES

//JS and node.JS feature: If there is an index.js file, it automatically gets imported w/o mentioning file name, just folder it's in.

//Action Types - Remember actions are JS objects
//Creating constants to replace action type of string in Counter component. String more prone to typos. This is standard practice.
export const INCREMENT = "INCREMENT"; //Could even change string value and variable won't break. Good future proofing
export const DECREMENT = "DECREMENT";

export const INCREMENT_BY_TWO = "INCREMENT_BY_TWO";
export const DECREMENT_BY_TWO = "DENCREMENT_BY_TWO";

//Action creators - Functions that return action type
export const incrementCounter = () => ({ type: INCREMENT }); //Now I'm accessing the variable, not the string value.
export const decrementCounter = () => ({ type: DECREMENT });

export const incrementByTwoCounter = () => ({ type: INCREMENT_BY_TWO }); 
export const decrementByTwoCounter = () => ({ type: DECREMENT_BY_TWO });


