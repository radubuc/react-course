//reviewer name
//review text
//date and time? Necessary? See test-app-pt2 

import React from 'react';
//Does review need access to Movie component eventually?

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            username: props.username,
            content: props.content,
            rating: props.rating,
            date: props.date,
            id: props.id
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.onClick(e)
    }

    render() {
        return (
            <form className='container'>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Username</label>
                    <input type="text" className="form-control" id="Input1" placeholder="Ex: SpongeRobert22" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">What did you think about the movie?</label>
                    <textarea className="form-control" id="Textarea1" rows="3" placeholder="Write your review here"></textarea>
                </div>

                <p>How many stars would you give it?</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="OneStar" />
                    <label className="form-check-label" htmlFor="inlineRadio1">⭐</label>&emsp;
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="TwoStars" />
                    <label className="form-check-label" htmlFor="inlineRadio2">⭐⭐</label>&emsp;
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="ThreeStars"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐</label>&emsp;
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="FourStars"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐⭐</label>&emsp;
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="FiveStars"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐⭐⭐</label>
                </div>
                <br /><br />

                <button className="btn btn-primary mb-2"  onClick={this.handleClick} name={this.state.name} username={this.state.username} content={this.state.content} rating={this.state.rating} date={this.state.date} id={this.state.id}>Submit review</button>
                <br /><br />
            </form>
        );
    }
}


//Note: "for" is a reserved keyword in JS, so use 'htmlFor' on <label> tag instead


// {/* <div className="form-group">
//                     <label htmlFor="exampleFormControlSelect1">Select the movie you'd like to review</label>
//                     <select className="form-control" id="exampleFormControlSelect1">
//                         <option>The SpongeBob SquarePants Movie</option>
//                         <option>Carol</option>
//                         <option>Rocketman</option>
//                     </select>
//                 </div> */}








