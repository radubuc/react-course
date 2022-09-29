import React from 'react';
import '../styles.css';

const Footer = () => {

    const today = new Date()

    return (
        <div>
            <footer className="d-flex justify-content-center">
                <p>Aphasiactionary &#169; {today.getFullYear()} Ren&eacute;e Dubuc</p>
            </footer>
        </div>

    )
};

export default Footer;