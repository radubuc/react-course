import React from 'react';
import SecondsCounter from './seconds-counter';

//LIFECYCLE METHODS DEMO VIDEO NOTES
export default class SecondsCounterContainer extends React.Component {
    constructor() { //Does not take a props!
        super();
        this.state = { //Uses a boolean to switch counter on and off
            showCounter: true
        };
    }

    render() {
        return (
            <div>
                {this.state.showCounter ? <SecondsCounter /> : null}
            </div>
        ); //If showCounter is set to true, then we'll show SecondsCounter component. If it's not true, be null/don't show anything
    }

    componentDidMount() {
        setInterval(() => { //When this is mounted, set interval to start
            this.setState({
                showCounter: false //After x seconds, interval is going to turn the showCounter state property off
            });
        }, 11000); //Turns off after 11 sec
    }
    //Start in browser, counter will count by 2s, until 11 seconds. Counter will disappear, then console will show this error: "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method at SecondsCounter". 
    
    //This is as expected because we can't perform update on unmounted component, , but we can improve this! Order of logs shows order of each render and method. Will see 2 shouldComponentUpdates, then a render because we have log set to every 2 seconds before rerendering. ComponentWillUnmount turns off counter. Going to clear out timer intervals now in seconds-counter.js. Since setInterval still exists, it tried to update something that was no longer mounted
}