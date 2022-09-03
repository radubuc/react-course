import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import ContactUs from './ContactUs';
 
class NavBar extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/friends">Friends</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/posts">
                            <Posts posts={Posts} />
                        </Route>
                        <Route path="/friends">
                          <Friends names={["Chantel", "Ricky", "Sabeen"]} />
                        </Route>
                        <Route path="/">
                          <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>        
        )  
    }
}
 
export default NavBar;
 
function Child() {
    //We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    const posts = [
        {
          id: 1,
          title: 'My First Post',
          date: '4-7-2020',
          content: 'This is my first post!'
        },
        {
          id: 2,
          title: 'Checking In',
          date: '4-8-2020',
          content: 'This week sucked.'
        },
        {
          id: 3,
          title: 'Vacation Time',
          date: '4-9-2020',
          content: 'TGIF'
        }
      ];
   
    return (
      <div>
        <h2>Item ID: {id}</h2>


      </div>
    );
  }

  
  function Home() {
    return <h2>Home</h2>
  }
  
  function Friends() {
    return <h2><ContactUs /></h2>
  }
  
  function Posts() {
    return <h2>Posts</h2>
  }