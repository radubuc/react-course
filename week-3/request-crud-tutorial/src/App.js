//REQUEST CRUD TUTORIAL VIDEO NOTES

//Get all houses, iterate over them when they come back, create a house element for each, and then display. We will pass data through to each house

import React from 'react';
import './App.css';
import House from './house';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
	  super(props);
	  this.addNewRoom = this.addNewRoom.bind(this);
	  this.deleteRoom = this.deleteRoom.bind(this);
  } //Going to refactor later

render() {
	const houses = this.state //If state is not null
		? this.state.houses.map((house, index) => //Then map over houses
			<House 
				key={index}
				data={house}
				addNewRoom = {this.addNewRoom}
				deleteRoom = {this.deleteRoom} />)
		: null;
		//If state is not null, it returns a house component with a key, house for this iteration of the map loop, and passes methods down to each house. If state is null, we won't render anything.

		return (
			<div>
				{houses}
			</div>
		);
	}

	componentDidMount() { //Where we call HTTP requests and asynch calls
		fetch(HOUSES_ENDPOINT)
			.then(res => res.json()) //Change to JSON so we can use
			.then(data => { //Data we get back from request will become the houses in our state
				this.setState({
					houses: data
				});
			});
	}

	deleteRoom(e, house, room) { //e is default action that comes back when browser fires off event. Need to take in house and room to delete the right room
		const index = house.rooms.indexOf(room); //Uniquely IDs each room to be deleted
		house.rooms.splice(index, 1); //Removes 1 element from index position from the rooms array
		updateHouse(house) //Will add method later on line 82 (top down)
			.then(() => {
				this.setState(state => { //Take previous state...
					for (let h of state.houses) { //Iterate thru each house...
						if (h._id === house._id) { //When you reach house with ID we want..
							let h = house; //Set h to house, which becomes new state object AKA updated house
							break;
						}
					}
					return state;
				});
			});
			e.preventDefault(); //Need to prevent page reload on button click
	}

	addNewRoom(e, house, room) { 
		house.rooms.push(room)
		updateHouse(house) 
			.then(() => {
				this.setState(state => { //Take previous state...
					for (let h of state.houses) { //Iterate thru each house...
						if (h._id === house._id) { //When you reach house with ID we want..
							let h = house; //Set h to house, which becomes new state object AKA updated house
							break;
						}
					}
					return state;
				});
			});
			e.preventDefault(); //Need to prevent page reload on button click
	}
}

function updateHouse(house) { //Take house to update, then make API call
	return fetch(`${HOUSES_ENDPOINT}/${house._id}`, { //URL: /Houses endpoint in URL/house id
		method: 'PUT', //PUT method whether adding or deleting room
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(house) //Whatever house passed into method, send PUT request with it. Send house back to server to be updated in DB
	});
} //Now go back to where updateHouse() is called on line 46


