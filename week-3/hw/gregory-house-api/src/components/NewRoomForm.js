import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined); 

    //Validation to ensure area entered is a valid number
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10); //Round to nearest 10th (not 0.10th)
        setArea(int >= 0 ? int : ''); //Set area as long as it's > 0, otherwise pass in empty string
    }

    const onSubmit = (e) => { //On form submit...
        e.preventDefault(); //Prevent page reload
        if (name && area) { //If name and area are true...
            props.addNewRoom({name, area}); //Call addNewRoom() method from props getting passed in and pass in object with name and area
            setName(''); //After submit, set name in form back to blank
            setArea(''); //After submit, set area in form back to blank
        } else { //If either name or area are falsy...
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
             <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)} //When text in this input changes, call setName method and set name (from hook on line 4) to target value. 
                    value={name} // OnChange updates state value, then state value updates value in input field, so they stay tied together both ways
                />&nbsp; &nbsp;
                <input
                    type='text'
                    placeholder='Area'
                    onChange={handleAreaInput} //When text in this input changes, call handleAreaInput() method defined starting on line 8.
                    value={area} 
                />&nbsp; &nbsp;
                <button type='submit'>Add Room</button> 
                <br /><br /><br />
            </form>
        </div>
    )
};