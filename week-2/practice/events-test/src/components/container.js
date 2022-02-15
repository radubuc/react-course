import React from 'react';
import Counter from './counter';

//EVENTS PART 3 VIDEO NOTES
//How to display name of button with most clicks above the buttons
export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;

            if(state.counts[name] > state.highestCount) { //If state x is higher than highest state...
                state.highestCount = state.counts[name]; //...then set highest count = state x...
                state.highestCountName = name; //...and set highest count name = new name
            }
            return state;
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.highestCountName}</h2> 
                <br />
                <Counter 
                    name="One"
                    count={this.state.counts.one} 
                    action={this.countClicks}
                />
                &nbsp;
                <Counter 
                    name="Two"
                    count={this.state.counts.one} 
                    action={this.countClicks}
                />
                &nbsp;
                <Counter 
                    name="Three"
                    count={this.state.counts.one} 
                    action={this.countClicks}
                />
            </div>
        ); //Displays highest count name
    }
}


//EVENTS PART 2 DOUBLE FIRING SOLUTION VIDEO NOTES
//Note: If you see "JSX expressions must have one parent element" error message, put components in a <div>! And don't forget to import Container in index.js and put <Container /> inside <React.StrictMode></React.StrictMode>

//EVENTS PART 1 VIDEO NOTES
// export default class Container extends React.Component {
//     render() {
//         return (
//             <div>
//                 <br />
//                 <Counter name="One" />
//                 &nbsp;
//                 <Counter name="Two" />
//                 &nbsp;
//                 <Counter name="Three" />
//             </div>
//         );
//     }
// }

