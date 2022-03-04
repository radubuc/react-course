import React from 'react';
import Movie from './movie.js';

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: 'The Spongebob Squarepants Movie',
                director: 'Stephen Hillenburg',
                year: '2004',
                synopsis: "In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune's crown, but numerous obstacles stand (or float) in their way.",
                reviews: []
            },
            {
                title: 'Carol',
                director: 'Todd Haynes',
                year: '2015',
                synopsis: "Therese Belivet (Rooney Mara) spots the beautiful, elegant Carol (Cate Blanchett) perusing the doll displays in a 1950s Manhattan department store. The two women develop a fast bond that becomes a love with complicated consequences.",
                reviews: []
            },
            {
                title: 'Rocketman',
                director: 'Dexter Fletcher',
                year: '2019',
                synopsis: "Young Reginald Dwight changes his name to Elton John and collaborates with singer-songwriter Bernie Taupin to become one of the most iconic figures in pop history. Set to his most beloved songs, it's the epic musical story of Elton John, his breakthrough years in the 1970s and his fantastical transformation from shy piano prodigy to international superstar.",
                reviews: []
            },
        ];

        let array;
        array = movies.map((movie, index) =>
            <Movie title={movie.title} director={movie.director} year={movie.year} synopsis={movie.synopsis} reviews={movie.reviews} key={index} />
        )  

        // console.log(movies);
        return (
            <div>
                {array}
            </div>
        );
    }
}