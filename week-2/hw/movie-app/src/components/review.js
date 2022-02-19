//What's the difference between review and review-form exactly?
//Review probably stores the reviews submitted

//reviewer name
//review text
//date and time? Necessary? See test-app-pt2 

import React from 'react';

export default class Review extends React.Component {
    render() {
        //Pull in reviews from review form here?
        //Use hard coded reviews to test? Test code reused from test-app-pt2
        let reviews = [
            {
                content: "This is David Hasselhoff's review: 'It was great fun and to this day around the world kids stop me and say, 'Are you David Hasselhoff?' because I was the only human in the picture. It's amazing - so many of the kids were so young and didn't see Baywatch and Knight Rider so I got a whole new legion of fans.'",
                username: 'TheHoff52',
                date: '2-19-2022'
            },
            {
                content: "This is Scarlett Johansson's review: 'The coolest thing about being a mermaid is wearing a seashell bra.'",
                username: 'ScarJo1',
                date: '2-17-2022'
            },
            {
                content: "This is Alec Baldwin's review",
                username: 'ThinningNotBald63',
                date: '12-19-2018'
            },
        ];

        return (
            <div className="container">
                {/* Pass comments into the props that go into this post. Format: spread operator > comments: inside of object has comments array > then content: with string passed in, refers back to contructor(props) in post.js */}
                <Post {...{comments: comments, content: "This is my post content!"}}/>
                <Post {...{content: "Here is another post!!!"}}/>
                <Post />
            </div>
        );
    }
}