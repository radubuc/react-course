//Will this be a HOC? It will take in Login and SignUp components
import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import logo from '../assets/aphasiactionary-logo-300dpi-opt.png'

//Should I use class component or functional component? Depends on if I need to access state I think
const HeaderNav = () => {
    return (
        <div>
            <header className="d-flex justify-content-around align-items-center">
                <div>
                    <img src={logo} alt="Aphasiactionary logo" />
                </div>
                <div>
                    <Button variant="outline-light">Login</Button>{" "}
                    <Button variant="light">Sign up</Button>
                </div>
            </header>
            
        </div>
    )
}

export default HeaderNav;


//Note: Button variant styling may get moved into Button Component? Do I need 1, 2, or 3 button components? I need Login, Sign Up and Create Entry buttons

// Note: How can I modify react bootstrap button component styling? Can I use padding instead of a janky space?
