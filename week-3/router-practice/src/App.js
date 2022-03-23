import React, {useState, useEffect} from 'react';

export default function App() {
  //First const is destructured pair in an array. isOn is value in state (boolean). setIsOn is name of method that will update state property. False is default value as a parameter. When we call setIsOn, we can pass in new useState value.

  //Second const is click counter for button
  const [isOn, setIsOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  //Hook is like the class component equivalent of performing an HTTP request in componentDidMount lifecycle method.
  useEffect(() => {
	  document.title = isOn ? 'ON' : 'OFF'; //Changes title of browser tab based on evaluation of isOn
  });


  return (
    <div>
      <p>{isOn ? 'Yes, it is on!' : 'OFF'}</p>
      <p>Times Clicked: {clickCount}</p>
      <button onClick={() => {
        	setIsOn(!isOn);
			setClickCount(clickCount + 1);
        }
      }>Switch</button>
    </div>
  ); //Markup in <p> says "If isOn is true, output 'Yes, it is on!'. If it's false, output 'OFF'." When button is clicked, it takes opposite of isOn and updates value. Times Clicked markup dynamically pulls in how many times was clicked and displays. 
}


