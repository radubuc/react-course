//HIGHER ORDER COMPONENTS 2 VIDEO NOTES

//Higher order function (HOF) - Ex that takes a function as a parameter
const functionOne = (func, message) => {
    console.log(message);
    func(message);
}

//Ex below is not a HOF because it doesn't take in another function or return another function
const functionTwo = message => {
    console.log(`Message from functionTwo: ${message}`);
}

//HOF ex that returns an anonymous (unnamed) function
const functionThree = message => {
    return () => {console.log(`${message} from functionThree`)};
}

//Pass in functionTwo into functionOne
functionOne(functionTwo, "Message from functionOne");

//Call functionThree by saving in a variable - Line 23 alone doesn't show "Message from functionThree" in terminal because functionThree is returning another function. Need to call anonymous function on line 16 below on line 24
const func = functionThree("Message");
func();

//Shorter, more common way to call functionThree. Means calling functionThree, which returns anonymous function. Then recall the function that gets returned again using the empty parentheses
functionThree("Message")();


//HIGHER ORDER COMPONENTS 4 VIDEO NOTES, builds on HOC2VN?

let lannisters = ["Cersei", "Jaime", "Tyrion"];

//Creating an updateLannisters function definition because map() funct needs another funct passed in to work. Has 3 optional params: value, index, or array itself. Goal: Update each element in array with last name
// const updateLannisters = value => value += " Lannister" //Says take each value (name) in array and add space plus Lannister after

//Map function is an HOF because it takes another function as an argument. Then returns new array. 
// let newLannisters = lannisters.map(updateLannisters);

// console.log(newLannisters);
//Returns [ 'Cersei Lannister', 'Jaime Lannister', 'Tyrion Lannister' ] correctly

//Now do the same map function on the Lannisters but much simpler by passing in funct directly
let newLannisters = lannisters.map(value => value += " Lannister");

console.log(newLannisters); //Returns same result described on line 41

//Remember, if you have only one param in arrow function syntax, you don't need () around it. If you are only returning one line, you don't need {}
