import React from "react";
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

//Straight up React - REACT COMPONENTS VIDEO
// let e = React.createElement;

// export default class Post extends React.Component {
//     render() {
//         return e('div',
//         {class: 'card w-75'},
//         e('div', //Creates a div inside a div
//             {class: 'card-header bg-success text-white'},
//             'Username and Time'),
//         e('div',
//             {class: 'card-body'},
//             'Post Content'),
//         e('div',
//             {class: 'card-footer'},
//             e(LikeButton, {}, null), //Automatically pulls in everything inside render method in like-button.js
//             e('span', {}, ' '), //Adds a space between the 2 buttons
//             e(ReplyButton, {}, null), //Automatically pulls in everything inside render method in reply-button.js
//             e('br', {}, null),
//             e(Comment, {}, null),
//             e(Comment, {}, null)
//             )
//         );
//     }
// }

//JSX - JSX VIDEO NOTES
export default class Post extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is where our content goes!
                </div>
                <div className="card-footer">
                    <LikeButton />
                    &nbsp;
                    <ReplyButton />
                    &nbsp;
                    <Comment />
                    &nbsp;
                    <Comment />
                    &nbsp;
                    <Comment />
                </div>
            </div>
        );
    }
}