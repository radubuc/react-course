//CardBody is just UI, no logic. Logic is handled in parent component (Counter)
import React from "react";

const CardBody = (props) => {
    return (
        <div className="card-body">
            <p className="card-text">Click Count: {props.count}</p>
            <button className="btn btn-primary" onClick={props.handleIncrement}>Increment</button>{" "}
            <button className="btn btn-danger" onClick={props.handleDecrement}>Decrement</button>
        </div>
    ); //Add onClick attribute in CardBody component, but logic will be built in parent component (Counter), then passed in as props from parent
}

export default CardBody;