import React from "react";

import Button from "react-bootstrap/Button";

import '../styles.css';

const CreateEntryBtn = () => {
    //Function to handle entry creation
    // const createEntryHandler = (e) => {
    //     e.preventDefault(); //prevent reload of page
    //     //setEntries should update the state to the user's input and give entry an unique id. How to make ID increment by 1 each time? i += 1?
    //     setEntries([
    //         ...entries,
    //         { text: inputText, id: 1}, 
    //     ]);
    //     setInputText(""); //Resets input field after creating new word
    // } 

    return (
        <Button as="input" type="submit" value="Create Entry" className="custom-btn" />

    );

}

export default CreateEntryBtn;


//Make props and useState(""). Define onClick onClick={createEntryHandler}

//I think CreateEntryBtn (or CreateEntryForm) will have to somehow communicate with Entries component to add a new word & definition to table in Entries component. Or will I need an intermediary component to act as a middleman? I think the onClick in the CreateEntryBtn should do the job. Matt will look and confirm