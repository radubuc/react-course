//SPREAD OPERATOR VIDEO NOTES
function doSomething(a, b, c) {
	console.log(a, b, c);
}
doSomething(1, 2, 3);

let array = [5, 6, 7]
doSomething(array);
//Logs [5, 6, 7] undefined undefined
//JS counts array of 5, 6, 7 as one value, not 3. Makes sense because only aray is passed into function call, nothing more */

doSomething(...array);
//Logs 5 6 7
//Spread operator spreads 5, 6, 7 across different arguments*/


/* Cloning an object */
let obj1 = {
	name: 'o1',
  value1: 1,
  value2: 2
};

//let clone = {...obj1};
//Spread obj1 across clone object. Will take all properties from obj1

let clone = {...obj1, name: 'o2'}; /* This is an object literal */
// Takes all properties from obj1, but also defines the name

console.log(clone);