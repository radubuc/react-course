import React from "react";

import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';

import '../styles.css';

//Since the entries will change, I don't think I should use a const. I think I should make it a function to grab all the entries? function name() {} or arrow function?
function ViewAllEntries() {

    return (
        <div className="wrapper">
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>What they say</th>
                            <th>What they may mean</th>
                            <th>Edit definition</th>
                            <th>Delete word</th>
                        </tr>
                    </thead>
                    {/* <tr>
                        <td>entries={entries}</td>
                        <td>setEntries={setEntries}</td>
                        <td>isEditing={isEditing}</td>
                        <td>setIsEditing={setIsEditing}</td>
                    </tr> */}
                </Table>
            </Container>
        </div>
    );
}

export default ViewAllEntries;

//From App.js for reference
// const [inputText, setInputText] = useState("");
// const [entries, setEntries] = useState("");
// const [currentEntry, setCurrentEntry] = useState({}); //Do I need something for current Entry? Maybe for editing the word
// const [isEditing, setIsEditing] = useState(false);

//3 views required. Create Entry is 1, View All Entries is 2, either Edit or Delete will need to change the view to fulfill project requirements

//Does the Entries component add the entry to the dictionary or does the CreateEntryBtn or CreateEntryForm? I would think the CreateEntryBtn
