//HTTP REQUESTS WITH FETCH VIDEO NOTES

//Plug all this code into: jsfiddle.net

const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

//GET request
fetch(ENDPOINT);

//POST request
fetch(ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Fetch House'
    })
});
// Notes: No method = automatic GET request
// {} is a comment?
// method, headers, body and name are objects
// Body = Data we are sending in
// JSON.stringify turns JS object into a JSON string

//GET request
// fetch(ENDPOINT);
// Run GET again to show there are now 2 houses

//DELETE request
fetch(`${ENDPOINT}/622e799bf5ee64001746a147`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
// Template literal needed
// Use house ID pulled from Dev Tools > Network tab > Fetch/XHR
// ID appended to ENDPOINT
// Sends DELETE request to this specific resource's ID, in this case, our Fetch House
//Only need method and headers objects. No body needed because we're not sending any new data

//Run GET again to check if Fetch House was deleted
// fetch(ENDPOINT);

// Don't forget to comment out POST or DELETE each time or else it will run multiple times!

//PUT request - Add room to house. I'm going to make a new house first since I have many Fetch Houses now
fetch(ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Gregory House'
    })
});

//UPDATE request
fetch(`${ENDPOINT}/622e7f1af5ee64001746a152`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Gregory House',
        rooms: [
            {name: 'Front Room', area: 200},
            {name: 'Kitchen', area: 250}
        ]
    })
});
// Make sure to pass in correct house ID
// Passing an object into stringify
// Pass in name, even though not updating
// Rooms is an array. Ours is taking 2 objects here

// How to handle promise returned
fetch(ENDPOINT)
    .then(res => res.json())
    .then(res => {
        // res.forEach(house => document.write(house.name + '<br />'))
        console.log(res);
    });
//1. Call data that comes back res (short for response). Needed to convert data that comes back into JSON. Also returns a promise
//2. Pass in data that resolves from first promise on line 80
//3. For each house, write house name and line break
//4. Could also log each house to console after fat arrow
//OR just log res to console (see line 83) Spoiler: It logs array of houses
// If wanted to see rooms too, could add another loop

//How to access ID of first house
fetch(ENDPOINT)
    .then(res => res.json())
    .then(res => {
        // console.log(res[0]._id);
        console.log(res[0].rooms[0].name); //Gets name of room in house using dot notation to access array
        
    });
// res is an array
// Need ._id
// First example house is named Compose House. First room in Compose House is Redrum

//Best place to send network requests from in React:
// Class based components (w/ extends react.component): componentDidMount lifecycle method
// Functional components: TBD in future video

