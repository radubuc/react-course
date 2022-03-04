import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            username: props.username,
            content: props.content,
            rating: props.rating,
            id: props.id
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(e) {
        // console.log(this);

        this.props.onClick(e);
        e.preventDefault();

        // console.log('test inside handleclick');
        // console.log(e);
    }

    render() {
        return (
            <form className='container' onSubmit={this.handleClick}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Username</label>
                    <input type="text" className="form-control" id="Input1" placeholder="Ex: SpongeRobert22" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">What did you think about the movie?</label>
                    <textarea className="form-control" id="Textarea1" rows="3" placeholder="Write your review here"></textarea>
                </div>

                <p>How many stars would you give it?</p>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="OneStar" value="⭐" />
                        <label className="form-check-label" htmlFor="inlineRadio1">⭐</label>&emsp;
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="TwoStars" value="⭐⭐" />
                        <label className="form-check-label" htmlFor="inlineRadio2">⭐⭐</label>&emsp;
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ThreeStars" value="⭐⭐⭐" />
                        <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐</label>&emsp;
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="FourStars" value="⭐⭐⭐⭐" />
                        <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐⭐</label>&emsp;
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="FiveStars" value="⭐⭐⭐⭐⭐" />
                        <label className="form-check-label" htmlFor="inlineRadio3">⭐⭐⭐⭐⭐</label>
                    </div>
                </div>
                <br />
                <button className="btn btn-primary mb-2" onClick={this.handleClick} name={this.state.name} username={this.state.username} content={this.state.content} rating={this.state.rating} id={this.state.id}>Submit your review</button>
                <br /><br />
            </form>
        );
    }
}








