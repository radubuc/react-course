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
            props.addNewRoom({name, area}); //Call addNewRoom() method from props getting passed in and pass in object with name and area
            setName(''); //After, set name in form back to blank
            setArea(''); //After, set area in form back to blank
        } else { //If either name or area are falsy...
            console.log('Invalid input'); //Log this message (could add more validation later)
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
             <form onSubmit={onSubmit}> {/*On submit, call onSubmit() method */}
             {/* Input name field */}
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)} //When text in this input changes, call setName method and set name (from hook on line 4) to target value. This way, the state and UI are tied together. This is 1st way to accomplish this! Inline makes sense here because code is short. Not reusable though
                    value={name} //Last part of tying state variable to value of input. OnChange updates state value, then state value updates value in input field, so they stay tied together both ways
                />&nbsp;
                {/* Input area field */}
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput} //When text in this input changes, call handleAreaInput() method we defined starting on line 8. This is 2nd way to accomplish this! Easier to refer to method here, rather than putting all the code here since its more complex. And it's reusable!
                    value={area} //Last part of tying state variable to value of input. OnChange updates state value, then state value updates value in input field, so they stay tied together both ways
                />&nbsp;
                <button type='submit'>Add Room</button> 
            </form>
        </div>
    )
};