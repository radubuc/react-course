import React from "react";
import Post from './post';

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Post />
                <Post />
            </div>
        );
    }
}