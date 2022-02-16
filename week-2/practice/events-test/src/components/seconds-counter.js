import React from 'react';

//LIFECYCLE METHODS DEMO VIDEO NOTES
export default class SecondsCounter extends React.Component {
    constructor(props){
        super(props);
        console.log('constructor'); //Logs out each lifecycle method as a string
        this.state = { //Set equal to state object
            currentCount: props.start || 0 //Starts at first props or 0 if there is nothing in props.start
        };
    }

    render() {
        console.log('render'); //Let's us see which lifecycle methods are being called
        return (
            <p>{this.state.currentCount}</p> //Returns paragraph with current count
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => { //Setting setInterval equal to a variable with name I choose
            this.setState((state) => ({ //Takes a function taking the current state
                currentCount: state.currentCount + 1 //Increments state's current count... 
            }));
        }, 1000); //...every 1 sec (1000ms)

        //First way of setting interval, breaks after 11 sec is up
        // setInterval(() => {
        //     this.setState((state) => ({ //Takes a function taking the current state
        //         currentCount: state.currentCount + 1 //Increments state's current count... 
        //     }));
        // }, 1000); //...every 1 sec (1000ms)
    }

    shouldComponentUpdate(nextProps, nextState) { //Takes next props and next state coming in
        console.log('shouldComponentUpdate');
        return nextState.currentCount % 2 === 0; //Compares current and next values to see if we want to update or not. Will update if evaluates to true, won't update if false. In this case, it will VISIBLY update in the log the even numbers/every 2 sec, but it actually updates every 1 sec
    }

    componentDidUpdate() {
        console.log('componentDidUpdate'); //Just shows update
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        //Second time around, adding clearInterval to clean up, so it doesn't break after 11 sec. If you don't, then it still tries to render if though it got changed to null in DOM in seconds-counter-container.js after unmounting.
        clearInterval(this.timer);
    } //Run it now, and error will no longer occur, and counter will stop properly
}

//First time around:
//Next, going to put seconds-counter component in a container component. Container will control a little bit about how it counts, so whether the counting is being displayed or turned off