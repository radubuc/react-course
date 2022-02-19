//reviewer name
//review text
//date and time? Necessary? See test-app-pt2 

import React from 'react';
//Does review need access to Movie component eventually?

export default class ReviewForm extends React.Component {
    render() {
        return (
            <form className='container'>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ex: SpongeRobert22" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">What did you think about the movie?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your review here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit review</button>
            </form>
        );
    }
}

//Note: "for" is a reserved keyword in JS, so use 'htmlFor' on <label> tag instead








