//For logic to make a network call for the house's endpoint. Accessible to any class that needs access to api calls, more reuasable this way.

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi { //Does NOT extend react!
    get = async () => { //GET house
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Oops, looks like fetchHouses had an oopsie.", e);
        }
        
    }

    put = async (house) => { //UPDATE house
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        });
        return await resp.json(); //Could also assign to variable and return variable like in GET method above
        //left off REFACTOR APP PART 1, 5:49
    }
}