import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
 
class NavBar extends React.Component{
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/item/1" className="nav-link">Item 1</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/item/2" className="nav-link">Item 2</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/item/3" className="nav-link">Item 3</Link>
                                    </li>
                                </ul>
                            </nav>
                            <br />
                            <Switch>
                                <Route path="/item/:id" children={<Child />} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default NavBar;
 
function Child() {
    //We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
   
    return (
      <div>
        <h2>Item ID: {id}</h2>
      </div>
    );
  }