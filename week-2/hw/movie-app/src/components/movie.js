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
            title: props.title,
            director: props.director,
            year: props.year,
            synopsis: props.synopsis,
            //reviews: props.reviews

            // movies: props.movies
        }
    }

    render() {
        return ( //Need to call movie component with props
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.director} | {this.state.year}</h6>
                    <p className="card-text">{this.state.synopsis}</p>
                </div>
                {/* <ReviewList reviews={this.movies.reviews} /> */}
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