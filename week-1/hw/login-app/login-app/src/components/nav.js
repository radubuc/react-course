import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className='container-fluid border-bottom border-secondary'>
                <h1 className='text-left'>
                    <span style={{color: '#FF0000'}}>You</span><span style={{color: '#1DA1F2'}}>Twit</span><span style={{color: '#4267B2'}}>Face</span>.
                </h1>

                <div className='row'>
                    <div className='col-6 mx-auto flexbox-container'>
                        <a href="#" className='px-2'>Dumpster Fire Live Stream</a> |
                        <a href="#" className='px-2'>Fake News</a> |
                        <a href="#" className='px-2'>Click Here to Get Scammed</a>
                    </div>
                </div>
            </div>
            
        );
    }
}

//Note, if doing inline styles, need a {{ }} around attribute and ' ' around value.
//Example: https://www.codegrepper.com/code-examples/javascript/react+style+span+tag





