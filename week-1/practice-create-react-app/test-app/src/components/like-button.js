import React from 'react'

export default class LikeButton extends React.Component {
    render() {
         return React.createElement('button', {class: 'btn btn-primary'}, 'Like'); //Takes in 3 arguments: Element, Props object, Content/Children
    }
}