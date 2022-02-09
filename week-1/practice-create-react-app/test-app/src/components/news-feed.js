import React from "react";
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return e('div',
            {class: 'container'},
            e(Post, {}, null),
            e(Post, {}, null),
            e(Post, {}, null),
        );
    }
}