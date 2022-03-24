//ASYNC AWAIT VIDEO NOTES
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

//Example with Promises
/* const getHouses = () => {
  fetch(HOUSES_ENDPOINT)
    .then(resp => resp.json())
    .then(resp => console.log(resp));
} */

//Same thing but with async
/* const getHouses = async () => {
  const resp = fetch(HOUSES_ENDPOINT); //Normally how you would write something if you didn't know it was async
  console.log(resp) //Returns promise, not data
  }  */

//Same thing but with async await, returning data minus body
/* const getHouses = async () => {
  const resp = await fetch(HOUSES_ENDPOINT); //Await waits for response before moving onto next line
  console.log(resp) //Returns response with data minus body, not promise
  }  */
    
//Same thing but with async await, returning body of data
const getHouses = async () => {
    const resp = await fetch(HOUSES_ENDPOINT); 
    const json = await resp.json(); //Needed to show body of response
	console.log(json); //Returns response with data plus body, not promise
 } 
 
getHouses();