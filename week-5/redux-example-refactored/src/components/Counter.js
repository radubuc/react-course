//Parent component of CardBody component
import React from "react";
import { connect } from "react-redux";
import CardBody from "./CardBody";
import { incrementCounter, decrementCounter } from "../redux/actions";

//Added in Redux 4 Video for refactoring code, line 23 was the original in Redux 3 video.
//Need to replace dispatch argument with increment and decrement args from mapDispatchToProps method below on lines 57-58
const Counter = ({ count, increment, decrement }) => {
    //Removed custom handleIncrement and handleDecrement custom functions because no longer needed
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody
                count={count}
                handleIncrement={increment} //Passed in from props above. Can now delete handleIncrement and handleDecrement arrow functions before return statement
                handleDecrement={decrement} /> 

        </div>
    );
}

//Adding mapDispatchToProps (2nd, optional argument of connect() function) method in Redux 4 Video for refactoring code. 
const mapDispatchToProps = dispatch => { //Converts dispatch() function into props and send to component. Returns object with 2 functions. Note {} not () after return
    return {
        increment: () => dispatch(incrementCounter()), //This now uses action creator
        decrement: () => dispatch(decrementCounter()) 
    };
}

//mapStateToProps function tells Redux once state is updated, send updated state to Counter component. This method is optional in some projects, but if you don't have it, you can't receive updated count value in const Counter function line 6 and in UI! We need it here, but if you don't need it on another project, don't use it 
const mapStateToProps = state => ({
    //Takes state to be received an convert into props. With Redux, you can't have individual states inside a component
    count: state.counterReducer.count //Since we have the 2nd reducer file, need specify which reducer the state variable "count" belongs to by adding counterReducer from /reducers/index.js to the chain
});
    
//Short way - 1 line, means the same thing. Adding in optional arguments in connect() function to receive updated state. Remember connect() is a HOF, needs to take another function in -- created on line 37
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//If you don't have connect() function, Redux won't connect the component to the Redux store