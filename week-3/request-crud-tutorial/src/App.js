//REQUEST CRUD TUTORIAL VIDEO NOTES
import React from 'react';
import { render } from 'react-dom';
import './App.css';

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
		updateHouse(house) //Will add method later

	}
}

function updateHouse(house) { //Take house to update, then make API call
	return fetch(`${HOUSES-ENDPOINT}/${house._id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(house); //Whatever house passed into method, send PUT request with it
	});
}
//9:49