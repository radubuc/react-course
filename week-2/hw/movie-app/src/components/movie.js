//title
//director
//year
//synopsis
//rating-gets passed in dynamically

import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            director: props.director,
            year: props.year,
            synopsis: props.synopsis
        }
    }

    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.director} | {this.state.year}</h6>
                    <p className="card-text">{this.state.synopsis}</p>
                </div>
            </div>
        );
    }
}