import React, { useContext, useState } from 'react';

// import { aphasiactionaryAPI } from './RestApi';

import App from '../App.js';

import { InputContext } from "../App.js"
import CreateEntryBtn from "./CreateEntryBtn";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import '../styles.css';
import { propTypes } from 'react-bootstrap/esm/Image.js';

//In Dictionary API example, his header does the work on my CreateEntryForm

const CreateEntryForm = () => {
    // const [value, setValue] = useState("");
    const [wordKey, setWordKey] = useState("");
    const [wordValue, setWordValue] = useState("");
    const { inputText, setInputText } = useContext(InputContext);
    // console.log(inputText)

    //Handle input text in form on change
    const handleInputText = (e) => {
        setInputText(e.target.value);
    }

    //Should onSubmit go here or in CreateEntry Btn?
    //Goal: When the button is clicked, the word and definition created should populate in table in ViewAllEntries component
    // const handleSubmit = () => {
    //     setInputText(value);
    //     setValue(""); //Resets entry form to blank after submit


    //     // console.log("handleSubmit event:", event);
    //     // event.preventDefault();
    //     // console.log("handleSubmit entry", entry);
    //     // aphasiactionaryAPI.post(entry);

    //     // setEntry(""); //setEntry or setCurrentEntry?? I think entry/setEntry will be used for creating a new entry and currentEntry/setCurrentEntry will be for updating an entry. Resets entry form to blank after submit
    //     // updateEntry(entry);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (wordKey && wordValue) {
            props.addNewEntry({ wordKey, wordValue });
            setWordKey("");
            setWordValue("");
        } else {
            console.log("Invalid input");
        }
    };

    //Allows user to submit form with Enter key instead of clicking button. Note I only have it applied to the What They May Mean field because we wouldn't want them to be able to submit a definition w/o entering a word
    // const handleInputKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         setInputText(value);
    //         setValue("");
    //     }
    // }

    return (
        <div className="wrapper"> 
        {/* Try class name "container mx-auto" or "mx-auto" depending on where I try it */}
            <Container>
                <Form onClick={handleSubmit}>
                    <Row>
                        <Col>
                            <h2>What they say</h2>
                            <Form.Control as="input" type="text" placeholder="Word or phrase" onChange={handleInputText} newEntry={App.newEntry} setNewEntry={App.setNewEntry} />
                        </Col>
                        {/* ADD A REQUIREMENT TO BOTH FIELDS | inputText={App.inputText} */}
                    </Row>
                    <Row>
                        <Col>
                            <h2>What they may mean</h2>
                            <Form.Control as="input" type="textarea" placeholder="Word, phrase or example" onChange={handleInputText} />
                            {/* value={value} onKeyDown={handleInputKeyDown} */}
                        </Col>
                        {/* entries={App.entries} */}
                    </Row>
                    <Row>
                        <Col>
                            <CreateEntryBtn />
                        </Col>

                    </Row>

                </Form>
            </Container>
        </div>
    );
}

export default CreateEntryForm;

//Make POST request in CreateEntryForm. Make GET request in ViewAllEntries


//Should I pass in currentEntry or entries on line 24?

//Is this an HOC? Do I need 1, 2, or 3 button components? I need Login, Sign Up and Create Entry buttons

//<Button as="input" type="submit" value="Create Entry" className="custom-btn" />