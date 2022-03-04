import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }

    render() {
        let reviewsArray;
        if (this.state.reviews) {
            reviewsArray = this.state.reviews.map((review, index) =>
            <p className='review-p' key={index}>{review}</p>
            )
        }

        return (
            <div>
                <p className='text-center'><b>Reviews</b></p>
                
                {reviewsArray}
                <hr />
            </div>
        );
    }
}