//title
//director
//year
//synopsis
//rating-gets passed in dynamically

import React from 'react';
// import Review from './review';
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
        this.postReview = this.postReview.bind(this)
    }

    postReview(evt) {
        console.log(evt.target);
        console.log(evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling); //Gives me username
        console.log(evt.target.parentElement.childElementCount); //Gives me 13 children under parent
        console.log(evt.target.parentElement.firstElementChild.nextElementSibling); //Gives me form group for content
        console.log(evt.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling); //Gives me Write your review here text area!!!
        console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling); //Gives me How many stars would you give it?
        console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild); //Gives me 1Star if I choose 1Star radio button
        
        

        //Not nextElementSibling or nextSibling or firstElementChild.firstElementChild.nextElementSibling or firstElementChild.nextElementSibling

        let username = evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.value;
        let content = evt.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
        let rating = evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
        // // let newReview = this.state.reviews
        // evt.preventDefault();

        this.setState(state => {
            if (state.title === evt.target.name) {
                console.log(state.title)
                return {reviews: state.reviews.push(username, content, rating)}
            }
        })
    }

    //Unofficial class with Jeff 3/1/22 -- Spit out username!
    // postReview(evt) {
    //     console.log(evt.target);
    //     console.log(evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling);
        
    //     //Find best path for grabbing review out of review text box and put into review list for movie
    //     // e.target.previousElementSibling.previousElementSibling.previousElementSibling.value 
    //     //or evt.target.firstChildElement.firstChildElement.value

    //     let newReview = evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.value;
    //     // // let newReview = this.state.reviews
    //     // evt.preventDefault();

    //     this.setState(state => {
    //         if (state.title === evt.target.name) {
    //             console.log(state.title)
    //             return {reviews: state.reviews.push(newReview)}
    //         }
    //     })
    // }

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
                <ReviewForm onClick={(evt) => this.postReview(evt)} name={this.state.title}/>
                
            </div>
        );
    }
}



