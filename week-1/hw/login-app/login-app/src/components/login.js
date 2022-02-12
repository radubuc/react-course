import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='container border border-primary'>
                <h3 className='text-center'>
                    Login to YouTwitFace
                </h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Username</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username" />
                            <small id="usernameHelp" class="form-text text-muted">BTW, we're going to sell your email address.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I give you permission to watch my every move</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>

        );
    }
}