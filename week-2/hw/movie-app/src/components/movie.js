import React from 'react';
import MovieList from './movie-list-container';
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
        }
        this.postReview = this.postReview.bind(this)
    }

    postReview(evt) {
        // console.log(evt.target);
        // console.log(evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling); //Gives me username
        // console.log(evt.target.parentElement.childElementCount); //Gives me 13 children under parent (or 9 with form group 3 added)
        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling); //Gives me form group for content
        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling); //Gives me Write your review here text area!!!
        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling); //Gives me How many stars would you give it?

        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild); //Gives me ⭐ if I choose 1Star radio button

        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild); //Give me ⭐⭐ if I choose 2Star radio button

        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild); //Give me ⭐⭐⭐ if I choose 3Star radio button

        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild); //Give me ⭐⭐⭐⭐ if I choose 4Star radio button

        // console.log(evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild); //Give me ⭐⭐⭐⭐⭐ if I choose 5Star radio button

        // let rating = evt.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value;

        let username = evt.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.value;
        let content = evt.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
        
        let rating = getRating();
        // console.log(rating);

        this.setState(state => {
            if(state.title === evt.target.name) {
                // console.log(state.title)
                return {reviews: state.reviews.push(username, content, rating)}
            }
        })

        function getRating() {
            let rating = null;

            // console.log(document.getElementById("OneStar"));
            // console.log(document.getElementById("TwoStars"));
            // console.log(document.getElementById("ThreeStars"));
            // console.log(document.getElementById("FourStars"));
            // console.log(document.getElementById("FiveStars"));

            if(document.getElementById('OneStar').checked) {
                rating = "⭐";
    
            } else if(document.getElementById('TwoStars').checked) {
                rating = "⭐⭐";
    
            } else if(document.getElementById('ThreeStars').checked) {
                rating = "⭐⭐⭐";
    
            } else if(document.getElementById('FourStars').checked) {
                rating = "⭐⭐⭐⭐";
    
            } else if(document.getElementById('FiveStars').checked) {
                rating = "⭐⭐⭐⭐⭐";
    
            }
            return rating;
        }      
    }

    render() {
        return (
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



//Resources:
// https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript

// https://developer.mozilla.org/en-US/docs/Web/API/Element

// https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild

// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
