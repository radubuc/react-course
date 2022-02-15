import React from 'react';

//EVENTS PART 1 VIDEO NOTES

//1. Trigger an event by putting a function directly in the onClick attribute of one JSX button
// export default class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         //To use named method in place of onClick, bind "this" object to method. Need to bind or else you can't use this.handleClick, it will represent something different than what we want
//         this.handleClick = this.handleClick.bind(this);
//     }

//     //Create handleClick named method to use in place of setState in onClick on line 23
//     handleClick() {
//         this.setState(state => ({count: state.count + 1}));
//     }

//     render() {
//         return (
//             <button
//                 className='btn btn-primary'
//                 // onClick={() => this.setState(state => ({count: state.count + 1}))}> //Option 1, anonymous function
//                 onClick={this.handleClick}> {/*Option 2 with named method*/}
//                 Counter {this.state.count}
//             </button>
//         ); //Note: onClick is camel case, instead of lowercase in HTML. Need to use arrow function so this keyword works properly in function. This way uses an anonymous function. Another option is to used named functions and methods, option 2 above. Benefit of named method is reusability
//     }
// }

//2. Using same button in multiple places, but with different names inside button HTML each time: Take a prop for name and create container component to house multiple buttons
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({count: state.count + 1}));
    }

    render() {
        return (
            <button
                className='btn btn-primary'
                onClick={this.handleClick}>
                {this.state.name} {this.state.count}
            </button>
        ); //{this.state.name} dynamically pulls in name
    }
} //See container.js