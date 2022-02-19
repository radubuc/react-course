import React from 'react';
import Movie from './movie.js';

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: 'The Spongebob Squarepants Movie',
                director: 'Stephen Hillenburg',
                year: '2004',
                synopsis: "In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune's crown, but numerous obstacles stand (or float) in their way."
            } //Pass in movie as a props to Movie component
        ];

        console.log(movies);
        return (
            <div>
                {movies.map((m, i) => {
                    console.log(m);
                    <Movie movie={m} />
                } //Adds a key to each movie
                    

                )}
                
            </div>
        );
    }
}