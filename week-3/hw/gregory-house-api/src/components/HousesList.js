import React from 'react';
import { House } from './House.js';
import { housesApi } from '../rest/HousesApi.js';

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    //Get all houses
    fetchHouses = async () => {
        const houses = await housesApi.get(); //Assign houses the response from await
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => { 
        await housesApi.put(updatedHouse); 
        this.fetchHouses(); //Once response comes back, call fetchHouses() method, which runs and sets state = to all houses again with update included
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
        ) 
        //Lines 28-33: Map each house from our state's houses. With each instance of House, house name and ID (passed in as props) are being mapped. Then pass in updateHouse() method, so I can pass down from a child
    }
}

