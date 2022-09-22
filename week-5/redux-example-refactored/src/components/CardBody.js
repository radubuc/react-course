//CardBody is just UI, no logic. Logic is handled in parent component (Counter)
import React from "react";

const CardBody = (props) => {
    return (
        <div className="card-body">
            <p className="card-text">Click Count: {props.count}</p>
            <button className="btn btn-primary" onClick={props.handleIncrement}>Increment</button>{" "}
            <button className="btn btn-danger" onClick={props.handleDecrement}>Decrement</button>
            {/* <br /><br />
            <button className="btn btn-primary" onClick={props.handleIncrement}>Increment by 2</button>{" "}
            <button className="btn btn-danger" onClick={props.handleDecrement}>Decrement by 2</button> */} {/* If I used a single reducer, I could add extra buttons for increment/decrement by 2, but that's not the purpose of Redux 7, though it would be better */}
        </div>
    ); //Add onClick attribute in CardBody component, but logic will be built in parent component (Counter), then passed in as props from parent
}

export default CardBody;