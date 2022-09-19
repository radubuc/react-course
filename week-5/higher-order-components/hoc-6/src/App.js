import React from "react";
import Hello from "./components/Hello";

function App() {
  // const HelloWithRedBorder = withRedBorder(Hello); //Not needed if you put HOC in Hello component instead of app.js

  return (
    <Hello />
  );
}

export default App;
