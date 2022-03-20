import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
    </div>
  );
}

//const name is Pascal case
const Person = () => {
  return (
    <div>
      <h1>Person Name</h1>
      <h2>Person Age</h2>
    </div>
  );
};



export default App;

//FUNCTIONAL COMPONENTS VIDEO NOTES
//Notes: Class components that extend React.Component are good for components that need to store state or make use of lifecycle methods. If we don't need to set state, use state, or store state, then use Functional Component (AKA Stateless Component). FC is a function that returns JSX. FC don't have lifecycle methods. Can still use logic