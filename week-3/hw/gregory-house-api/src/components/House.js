import React from 'react';
import {NewRoomForm} from './NewRoomForm.js'; 

export const House = (props) => { 
    const {house, updateHouse} = props; //Deconstructing props to get our house (All the data that represents this house) and updateHouse method (so I can call method from this component)

    const deleteRoom = (roomId) => {
        const updatedHouse = { 
            ...house, //Spread operator on the house represented on line 5, which takes all values from it, except any  explictly declared after. Rooms will get updated to different value on next line (actually same value & array, minus roomId)
            rooms: house.rooms.filter((x) => x._id !== roomId) //Delete a room = update a house. Need to find room using filter(), then set updated house to the results that come back when I filter out room with matching id from array. Line 10 says filter out rooms that do NOT match passed in ID. New, updated array will get spit out
        };
        updateHouse(updatedHouse); //Pass updated house into updateHouse() method that was passed down from HousesList.js, which will call put() method from HousesApi.js (calling the HTTP request update)
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});
    //Return updateHouse() with house & new room passed in as an object. To illustrate--Passed in: Spread house, and rooms. Rooms will consist of new array (w/ all values from old array) spread from house, then add new room, and return

    //Going to create component inside component for rooms below--keep inside house instead of creating own component file because they should be separated logically, but only related to house
    const rooms = () => ( // Rooms component will create instance of each room as an <li> below
        <ul>
            {house.rooms.map((room, index) => ( //Map each room and index into this function
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>&nbsp;
                    <button onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                </li>
            ))}
        </ul>
        //Line 29 creates a label with room name and area
        //Line 30 creates a button with onClick that will delete room with id passed in. We already have access to house needed (we're already in house)
    );

    return ( //Returns entire an house with rooms
        <div>
            <h1>{house.name}</h1>
            {
                rooms({rooms, houseId: house._id, deleteRoom}) //This is JS to show rooms, passing props into rooms function. Even though funct on line 25, doesn't require arguments, pass in props of all rooms, house ID, and deleteRoom method.
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};
