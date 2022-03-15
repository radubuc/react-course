import React from "react";

export default class House extends React.Component {
    //Will create new room form later, but for now

    render() { //For now, use JSX only, don't need to create room component
        const rooms = this.props.data.rooms //If there are rooms...
        ? this.props.data.rooms.map((room, index) => 
        <li key={index}>
            {room.name} Area: {room.area}
            <button onClick={e =>
                this.props.deleteRoom(e, this.props.data, room)
            }</button>    
        </li>)
    }
}