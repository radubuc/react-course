//What's the difference between review and review-form exactly?
//Review probably stores the reviews submitted

//reviewer name
//review text
//date and time? Necessary? See test-app-pt2 

import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }

    render() {
        //Pull in reviews from review form here?
        //Use hard coded reviews to test? Test code reused from test-app-pt2
        //How do I add reviews to a specific movie?
        //How do I get star rating pulled in? Hardcoding it for now
        //Should I call this array Spongebob Movie-only reviews?
        let reviews = [
            {
                movie: "The Spongebob Squarepants Movie",
                username: 'ThinningNotBald63',
                content: "Alec Baldwin has no comment.",
                rating: "⭐",
                date: '2-20-2022'
            },
            {
                movie: "The Spongebob Squarepants Movie",
                username: 'TheHoff52',
                content: "This is David Hasselhoff's review: 'It was great fun and to this day around the world kids stop me and say, 'Are you David Hasselhoff?' because I was the only human in the picture. It's amazing - so many of the kids were so young and didn't see Baywatch and Knight Rider so I got a whole new legion of fans.'",
                rating: "⭐⭐⭐⭐⭐",
                date: '2-19-2022'
            },
            {
                movie: "The Spongebob Squarepants Movie",
                username: 'ScarJo1',
                content: "This is Scarlett Johansson's review: 'The coolest thing about being a mermaid is wearing a seashell bra.'",
                rating: "⭐⭐⭐⭐⭐",
                date: '2-17-2022'
            },
            
        ];

        let reviewsArray;

        return (
            <ul>
                <li></li>
                {reviewsArray}
            </ul>

            // <div className="container">
            //     {/* Pass comments into the props that go into this post. Format: spread operator > comments: inside of object has comments array > then content: with string passed in, refers back to contructor(props) in post.js */}
            //     <Post {...{comments: comments, content: "This is my post content!"}}/>
            //     <Post {...{content: "Here is another post!!!"}}/>
            //     <Post />
            // </div>
        );
    }
}