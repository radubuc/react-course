import React from "react";
import withRedBorder from './withRedBorder';

const Hello = () => {
    return (
        <>
            Hello, World! 
        </> //This is a React fragment, short syntax
    )
}

export default withRedBorder(Hello); //Sends Helloimage.png component into HOC
//More common to import HOC inside the component, not the app.js