import React from "react";

import Button from "react-bootstrap/Button";

import '../styles.css';

const CreateEntryBtn = () => {
    
    return (
        <Button as="input" type="submit" value="Create Entry" className="custom-btn" />
    );
}

export default CreateEntryBtn;


//Make props and useState. Define onClick

//I think CreateEntryBtn (or CreateEntryForm) will have to somehow communicate with Entries component to add a new word & definition to table in Entries component. Or will I need an intermediary component to act as a middleman? I think the onClick in the CreateEntryBtn should do the job.