import React from 'react';

const Entry = ({entries, entry}) => {
    console.log("Entry test", entry);
    console.log("Entries test:", entries);

    // console.log("MyEntry", props.myEntry);
    // const { entry, updateEntry } = props;

    // const addNewEntry = (room) => {
    //     return updateEntry({ ...entry, wordKey: [...entry.wordKey, wordKey], wordValue: [...entry.wordValue, wordValue]}) //IDK? Modeling after houseAPI example
    // };
    
    // const deleteEntry = async (id) => {
    //     console.log("deleteEntry ID:", id);
    //     await aphasiactionaryAPI.delete(id);
    //     updateEntry(); //Updates state after deleting entry and updating current entries
    // }

    return (
        console.log("state variable test 2", entries),
        // <div>
        //     <h1>{entry}</h1>
        // </div>

        <div>
            <tr key={entry.id}>
                <td>{entry.wordKey}</td>
                <td>{entry.wordValue}</td>
                <td><button>Edit Placeholder</button></td>
                <td><button>Delete Placeholder</button></td>
            </tr>
        </div>
    )
    
}

export default Entry;


//Wait, what is my structure here??? In Houses example, House is the parent, Room is the child. I was initially thinking of Entry as a parent, then I introduced wordKey and wordValue as separate children. Then I was thinking of wordKey and wordValue as independent on Entry. Maybe wordKey should be the parent and wordValue the child to model the HousesAPI example?