import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Entry from "./Entry";

import { aphasiactionaryAPI } from "./RestApi";
// import { wordKey, wordValue } from "./CreateEntryForm";

import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';

import '../styles.css';

//Since the entries will change, I don't think I should use a const. I think I should make it a function to grab all the entries? function name() {} or arrow function?
// function ViewAllEntries(props) {
const ViewAllEntries = ({ entries }) => {

    // console.log("ViewAllEntries props:", props.entries);

    // const myEntries = props.entries;
    //In Dictionary API example, his ResultList does the work on my ViewAllEntries
    const { inputText, setInputText } = useContext(InputContext);
    const [response, setResponse] = useState(null); //Null or empty string?
    const [error, setError] = useState("");

    const [wordKey, setWordKey] = useState("");
    const [wordValue, setWordValue] = useState("");

    useEffect(() => {
        // https://www.youtube.com/watch?v=BfnbPwqHhfY 24:01
    }, [])

    //NEED TO ROUTE THRU ENTRY COMPONENT FIRST BEFORE GETTING TO VIEWALLENTRIES COMPONENT??? Makes sense

    // const getMyEntries = () => {
    //     for (let i = 0; i < myEntries.length; i++) {
    //         console.log("Checking state of getMyEntries:", myEntries);
    //         return <Entry entry={myEntries[i]} />
    //     }
    // }


    return (
        console.log("state variable test", entries),
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
                    {/* {getMyEntries} */}
                    {/* <tr key={myEntries[i].id}>
                        <td>{myEntries[i].wordKey}</td>
                        <td>{entry.wordValue}</td>
                        <td>test</td>
                        <td>test</td>
                    </tr> */}
                    {/* {entries.map((entry) => {
                        <Entry entry={entry}/>

                    })} */}
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.wordKey}</td>
                                <td>{entry.wordValue}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>


                </Table>
            </Container>
        </div> //See House.js in HouseAPI example for JSX formatting and logic
    );
    //key={entry.id} entries={entries} line 63
} //INSIDE OR OUTSIDE <td>s?
//isEditing={isEditing}
//setIsEditing={setIsEditing}

export default ViewAllEntries;

//From App.js for reference
// const [inputText, setInputText] = useState("");
// const [entries, setEntries] = useState("");
// const [currentEntry, setCurrentEntry] = useState({}); //Do I need something for current Entry? Maybe for editing the word
// const [isEditing, setIsEditing] = useState(false);

//3 views required. Create Entry is 1, View All Entries is 2, either Edit or Delete will need to change the view to fulfill project requirements

//Does the Entries component add the entry to the dictionary or does the CreateEntryBtn or CreateEntryForm? I would think the CreateEntryBtn

