import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap";
import '../styles.css';


const CreateEntryForm = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Form>
                    <Row>
                        <Col>
                            <h2>What they say</h2>
                            <Form.Control type="text" placeholder="Word or phrase" />
                        </Col>
                        <Col>
                            <h2>What they may mean</h2>
                            <Form.Control as="textarea" placeholder="Word, phrase or example" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button as="input" type="submit" value="Create Entry" className="custom-btn" />
                        </Col>

                    </Row>

                </Form>
            </div>
        </div>



    );
}

export default CreateEntryForm;

//Is this an HOC? Do I need 1, 2, or 3 button components? I need Login, Sign Up and Create Entry buttons