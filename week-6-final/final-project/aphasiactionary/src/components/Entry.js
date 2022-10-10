import React from 'react';

import { aphasiactionaryAPI } from './components/RestApi';

const Entry = (props) => {
    const { entry, updateEntry } = props;

    const addNewEntry = (room) => {
        return updateEntry({ ...entry, wordKey: [...entry.wordKey, wordKey], wordValue: [...entry.wordValue, wordValue]}) //IDK? Modeling after houseAPI example
    };
    
    const deleteEntry = async (id) => {
        console.log("deleteEntry ID:", id);
        await aphasiactionaryAPI.delete(id);
        updateEntry(); //Updates state after deleting entry and updating current entries
    }
    
}


//Wait, what is my structure here??? In Houses example, House is the parent, Room is the child. I was initially thinking of Entry as a parent, then I introduced wordKey and wordValue as separate children. Then I was thinking of wordKey and wordValue as independent on Entry. Maybe wordKey should be the parent and wordValue the child to model the HousesAPI example?