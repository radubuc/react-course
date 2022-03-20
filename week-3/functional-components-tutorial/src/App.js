import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Tom" age="32"/>
      <Person name="Sally" age="34"/>
    </div>
  );
}

//const name is Pascal case, so React understand the const with name of Person is what goes inside the Person component
const Person = (props) => {
  const {name, age} = props; //Destructures props into name and age
  return (
    <div>
      <h1>{name}</h1>
      <h2>Person Age: {age}</h2>
    </div>
  );
}; //Div needed because you always need parent component

export default App;

//FUNCTIONAL COMPONENTS VIDEO NOTES
//Notes: Class components that extend React.Component are good for components that need to store state or make use of lifecycle methods. If we don't need to set state, use state, or store state, then use Functional Component (AKA Stateless Component). FC is a function that returns JSX. FC don't have lifecycle methods. Can still use logic