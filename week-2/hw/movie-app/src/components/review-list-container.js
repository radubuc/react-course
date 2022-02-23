import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }

    render() {
        return(
            <div>
                <Review reviews={this.state.reviews} />
            </div>
        )
    }
}