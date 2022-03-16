import React from "react";

export default class NewRoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '', //Values on new room
            areaValue: ''
        } //Input field will be mapped to nameValue and areaValue on NewRoomForm state

        this.handleNameChange = this.handleNameChange.bind(this); 
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this); //Need to bind this keyword
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value}); //Set nameValue equal to value of event target
    }

    handleAreaChange(e) {
        this.setState({areaValue : e.target.value});
    }

    handleClick(e) {
        this.props.addNewRoom(e, this.props.data, //Calls addNewRoom method that was passed in on props. Pass in event and data of specific house
            {name: this.state.nameValue, area: this.state.areaValue}); //Pass in info on new room (which is an object)
        this.setState({nameValue: '', areaValue: ''}); //Make name and value inputs empty after clicking for good UX
    } 

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areaValue} />
                <button onClick={this.handleClick}>Add New Room</button>
            </div>
        ) //Markup includes markup for name and area inputs and a button to add new room. Ties value of input to nameValue and areaValue variables in the constructor (lines 7 & 8). Handle the click and take event and that's how it gets data on that event
    }
}

//Don't forget to import NewRoomForm on House.js!