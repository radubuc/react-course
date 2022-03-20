//DESTRUCTURING VIDEO NOTES
let array = [3, 5, 7, 9];
let object = {
	propertyOne: 'p-one',
  propertyTwo: 'p-two',
  propertyThree: 'p-three'
};

//Destructuring an array
let [a, b, c] = array;
//Assign values in array by position to a and b.
//a will be 3, b will be 5, c will be 7

console.log(a);
console.log(b);
console.log(c);

//Destructuring an object - need to use names, not variables
let {propertyOne, propertyThree} = object;

console.log(propertyThree);

//To prove that propertyThree is being pulled from variable created by destructuring, instead of from onject, run:
//console.log(propertyTwo);
//Will get "propertyTwo is not defined error"

import {Component} from 'react'; //Allows us to use the component instead of React.Component outside of that
//OR can import multiple things at once separated by comma like below
/* import React, {Component} from 'react'; */
//Can also import multiple things inside of destructered variables