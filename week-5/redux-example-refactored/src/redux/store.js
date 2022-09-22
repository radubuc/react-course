import { createStore } from "redux"; //Deprecated, but still works
import reducer from "./reducers/counter"; //Now that code has been refactored and correct folder structure is set up, we must import the reducer

//Following this article to troubleshoot "Could not find "store" in the context of "Connect(Counter)"" error: https://daveceddia.com/how-does-redux-work/#:~:text=Errors%20Mean%20Progress,to%20%22Connect(Counter)%22. Note: article says index.js, but it should go in my app.js It worked!

export const store = createStore(reducer); //createStore() is deprecated now, but video used it
//Now that code has been refactored and correct folder structure is set up, we must export the store. Can be done in the same line as initializing the store variable. Note: The "default" keyword isn't used here. It will break it. Instead of importing "store" in the app.js, import "{ store }" to get around.
