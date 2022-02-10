import React from "react";
import ReplyButton from './reply-button'; //Comment must be able to access both Reply and Like Button
import LikeButton from "./like-button";

let e = React.createElement; //Creating a variable here so we don't have to type out as much every time

//Straight up React - REACT COMPONENTS VIDEO
// export default class Comment extends React.Component {
//     render() {
//         return e('div',
//             {class: 'card w-75'},
//             e('div', //Creates a div inside a div
//                 {class: 'card-header bg-success text-white'},
//                 'Username and Time'),
//             e('div',
//                 {class: 'card-body'},
//                 'Comment Content'),
//             e('div',
//                 {class: 'card-footer'},
//                 e(LikeButton, {}, null), //Automatically pulls in everything inside render method in like-button.js
//                 e('span', {}, ' '), //Adds a space between the 2 buttons
//                 e(ReplyButton, {}, null) //Automatically pulls in everything inside render method in reply-button.js
//             )
//         );
//     }
// }

//JSX - JSX VIDEO NOTES
export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    &nbsp;
                    <ReplyButton />
                </div>
            </div>
        );
    }
}