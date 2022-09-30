import React from 'react';
import CreateEntryForm from './CreateEntryForm';
import ViewAllEntries from './ViewAllEntries';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import '../styles.css';


//Should I use class component or functional component? Depends on if I need to access state I think
const UtilityNav = () => {
    return (
        <Router>
            <div>
                <nav className="d-flex justify-content-center">
                    <Button href="#" className="utility-nav">
                        <Link to="/create-entry" className='link'>Create Entry</Link>
                    </Button>
                    <Button href="#" className="utility-nav">
                        <Link to="/view-all-entries" className='link'>View All Entries</Link>
                    </Button>
                </nav>

                <Switch>
                    <Route path="/create-entry">
                        <CreateEntryForm />
                    </Route>
                    <Route path="/view-all-entries">
                        <ViewAllEntries entries={ViewAllEntries.entries} />
                    </Route>
                    <Route path="/">
                        <CreateEntryForm />
                    </Route>
                </Switch>
            </div>
        </Router>
        //Should I call CreateEntryForm component in Switch above?
        //IDK what to do with entries in Switch. I am likening them to Posts in router-practice-3. I moved my entries object from App.js to Entries component, so I imported ViewAllEntries and used it to access to entries object. IDK if it works yet
        //Can I set / (root) equal to /create-entry to make it the default view?
    )
};

export default UtilityNav;

//Do I need a home? Will it crash at the root without a home? See router-practice-3 

// eslint-disable-next-line
{/* <a href="#" className="utility-nav">Create Entry</a>
<a href="#" className="utility-nav">View All Entries</a> 
<Button href="#" className="utility-nav">View All Entries</Button> */}


//To change react bootstrap component defaults, download SASS?
// https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme
//This sounds like for global default changes, not 1-time overrides. Can you do 1-time react bootstrap component style overrides in regular css?