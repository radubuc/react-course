import React from "react";
import Post from './post';

let e = React.createElement;

//Straight up React - REACT COMPONENTS VIDEO
// export default class NewsFeed extends React.Component {
//     render() {
//         return e('div',
//             {class: 'container'},
//             e(Post, {}, null),
//             e(Post, {}, null),
//             e(Post, {}, null),
//         );
//     }
// }

//JSX - JSX VIDEO NOTES
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