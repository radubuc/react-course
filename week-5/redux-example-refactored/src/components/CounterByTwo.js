//REDUX 7 VIDEO NOTES
import React from "react";
import { connect } from "react-redux";
import CardBody from "./CardBody";
import { incrementByTwoCounter, decrementByTwoCounter } from "../redux/actions";

//No state needed
const CounterByTwo = ({ countByTwo, incrementByTwo, decrementByTwo }) => {
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody
                count={countByTwo}
                handleIncrement={incrementByTwo} //Passed in from props above. Can now delete handleIncrement and handleDecrement arrow functions before return statement
                handleDecrement={decrementByTwo} />

        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        incrementByTwo: () => dispatch(incrementByTwoCounter()),
        decrementByTwo: () => dispatch(decrementByTwoCounter())
    };
};

const mapStateToProps = state => ({ countByTwo: state.counterPlusTwoReducer.countByTwo });

export default connect(mapStateToProps, mapDispatchToProps)(CounterByTwo);