import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='text-left'>
                    YouTwitFace.
                </div>
                <div>
                    <a href="#">Embarrassing Videos</a>
                    <a href="#">Dumpster Fire News</a>
                    <a href="#">Click Here to Get Scammed</a>
                </div>
            </div>
            
        );
    }
}