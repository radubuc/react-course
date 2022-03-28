import React, { useState } from 'react';

export const NewRoomForm = (props) => { //Functional component
    const [name, setName] = useState(''); //Using hooks, set to empty string to start
    const [area, setArea] = useState(undefined); //Using hooks, set to undefined number to start

    //Validation to ensure area entered is a valid number
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10); //Take in rarget value and round to nearest 10th (not 0.10th)
        setArea(int >= 0 ? int : ''); //Set area as long as it's > 0, otherwise pass in empty string
    }

    const onSubmit = (e) => { //On form submit...
        e.preventDefault(); //Prevent page reload
        if (name && area) { //If name and area are true...
            props.addNewRoom({name, area}); //Call addNewRoom() method from props getting passed in
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
};