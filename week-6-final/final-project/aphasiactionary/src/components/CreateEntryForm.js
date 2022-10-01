import React from "react";

import App from "../App.js"
import CreateEntryBtn from "./CreateEntryBtn";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import '../styles.css';


const CreateEntryForm = () => {
    return (
        <div className="wrapper">
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <h2>What they say</h2>
                            <Form.Control type="text" placeholder="Word or phrase">inputText={App.inputText}</Form.Control>
                        </Col>
                        <Col>
                            <h2>What they may mean</h2>
                            <Form.Control as="textarea" placeholder="Word, phrase or example">entries={App.entries}</Form.Control>
                        </Col>
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

//Should I pass in currentEntry or entries on line 24?

//Is this an HOC? Do I need 1, 2, or 3 button components? I need Login, Sign Up and Create Entry buttons

//<Button as="input" type="submit" value="Create Entry" className="custom-btn" />