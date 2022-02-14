import React from "react";
import Post from './post';

//STATE VIDEO NOTES
export default class NewsFeed extends React.Component {
    render() {
        //Add comments from post.js from Props video as an array here:
        let comments = [
            {
                content: "This is Tommy's comment",
                username: 'Tommy',
                date: '12-12-2018'
            },
            {
                content: "This is Sammy's comment",
                username: 'Sammy',
                date: '12-17-2018'
            },
            {
                content: "This is Sally's comment",
                username: 'Sally',
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