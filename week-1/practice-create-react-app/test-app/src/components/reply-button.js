import React from 'react';

//Straight up React - REACT COMPONENTS VIDEO
// export default class LikeButton extends React.Component {
//     render() {
//          return React.createElement('button', {class: 'btn btn-primary'}, 'Reply'); //Takes in 3 arguments: Element, Props object, Content/Children
//     }
// }

//JSX - JSX VIDEO NOTES
export default class LikeButton extends React.Component {
    render() {
        return <button className='btn btn-primary'>Reply</button>;
    }
}