import React from 'react';
import { House } from './House'; //Will create House later
import { housesApi } from '../rest/HousesApi.js';

export class HouseList extends React.Component {
    state = { //State is now object and no longer in constructor
        houses = [] //Empty array to start
    };

    componentDidMount() { //Why componentDidMount?
        this.fetchHouses();
    };

    //Get all houses
    fetchHouses = async () => {
        const houses = await housesApi.get(); //Assign houses the response from await. We're using get() method from HousesApi.js we imported. Can use in anywhere in application as long as I import it first
        this.setState({ houses }); //Once response comes back, set state = to houses
    };

    updateHouse = async (updatedHouse) => { //Take arg called UpdatedHouse
        await housesApi.put(updatedHouse); //Await response
        this.fetchHouses(); //Once response comes back, call fetchHouses() method, which will run and then set state = to all houses again with update included
    };

    render() {
        return (
            <div className='house-list'> 
                {this.state.houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        ) //Class for CSS added, but not going to style now. Go to App.css if I want to style. Remember {} inside JSX = JavaScript!
        //Line 28: Map each house from our state's houses. With each instance of House (component not created yet), house name and ID (passed in as props) are being mapped. Then pass in updateHouse() method, so we can pass down from a child
    }
}

//Left off at Refactor App Part 1, 15:56