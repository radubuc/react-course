import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
    //Will create new room form later, but for now

    render() { //For now, use JSX instead of creating room component
        const rooms = this.props.data.rooms //If there are rooms...
        ? this.props.data.rooms.map((room, index) => 
            <li key={index}>
                {room.name} Area: {room.area}
                <button onClick={e =>
                    this.props.deleteRoom(e, this.props.data, room) //We have access to deleteRoom() method because we passed it in as a prop to deleteRoom in App.js line 25 
                }>Delete</button>    
            </li>) //<li> is the room, button will delete the room
        : null; //If there are no rooms, assign null

        return (
            <div>
                <h1>{this.props.data.name}</h1> 
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm 
                    addNewRoom={this.props.addNewRoom} data={this.props.data} />
            </div>
        );
        // Data we pass in above is the house itself.
        // The <ul> holds the <li> we made in the render()
        // NewRoomForm has a props of addNewRoom
        // We include a data prop so the form has access to all the house data, so it knows which data to add for the request

    } 
}

//Overview: Iterate over rooms and create <li> out of them, add them to a list, show the name and add the NewRoomForm to it

//Don't forget to import House on App.js!