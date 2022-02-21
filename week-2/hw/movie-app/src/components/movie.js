//title
//director
//year
//synopsis
//rating-gets passed in dynamically

import React from 'react';
import ReviewList from './review-list-container';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: props.title,
            // director: props.director,
            // year: props.year,
            // synopsis: props.synopsis,

            movies: props.movies
        }
    }

    render() {
        // let movies = [
        //     {
        //         title: 'The Spongebob Squarepants Movie',
        //         director: 'Stephen Hillenburg',
        //         year: '2004',
        //         synopsis: "In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune's crown, but numerous obstacles stand (or float) in their way."
        //     } //Pass in movie as a props to Movie component
        // ];

        return ( //Need to call movie component with props
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{movies.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{movies.director} | {movies.year}</h6>
                    <p className="card-text">{movies.synopsis}</p>
                </div>
                <ReviewList reviews={movies.reviews} />
            </div>
        );

        // return (
        //     <div className="card" style={{width: '18rem'}}>
        //         <div className="card-body">
        //             <h5 className="card-title">{this.state.title}</h5>
        //             <h6 className="card-subtitle mb-2 text-muted">{this.state.director} | {this.state.year}</h6>
        //             <p className="card-text">{this.state.synopsis}</p>
        //         </div>
        //     </div>
        // );
    }
}

//{this.state.title}
//{this.state.director} | {this.state.year}
//{this.state.synopsis}