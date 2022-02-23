//title
//director
//year
//synopsis
//rating-gets passed in dynamically

import React from 'react';
import ReviewForm from './review-form';
import ReviewList from './review-list-container';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            director: props.director,
            year: props.year,
            synopsis: props.synopsis,
            reviews: props.reviews

            // movies: props.movies
        }
    }

    postReview(evt) {
        console.log(evt.target.parentElement);
        //Find best path for grabbing review out of review text box and put into review list for movie
        // e.target.previousElementSibling.previousElementSibling.previousElementSibling.value 
        evt.preventDefault();

        this.setState(state => {
            if (state.title === evt.target.name) {
                console.log(state.title)
            }
        })

        // return {reviews: state.reviews.push(newReview) }

        
    }

    render() {
        return ( //Need to call movie component with props
            <div className="card my-4 container" style={{width: '70%'}}>
                <div className="card-body">
                    <h2 className="card-title">{this.state.title}</h2>
                    <h3 className="card-subtitle mb-2">{this.state.director} | {this.state.year}</h3>
                    <p className="card-text">{this.state.synopsis}</p>
                </div>
                <hr />
                <ReviewList reviews={this.state.reviews} />
                <hr />
                <ReviewForm onClick={(evt) => this.postReview(evt)} name={this.state.title} />
                
            </div>
        );
    }
}

