import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

export default function App() {
  const posts = [
    {
      id: 1,
      title: "Hello World!",
      date: "05-15-2022",
      content: "Hello world, I'm here and I'm queer!"
    },
    {
      id: 2,
      title: "Posting to my wall",
      date: "05-16-2022",
      content: "That's not how it works! That's not how any of this works!"
    },
    {
      id: 3,
      title: "Covfefe",
      date: "05-17-2022",
      content: "Despite the constant negative press covfefe"
    },
  ];

  return (
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
          <Route path='/posts'>
            <Posts posts={posts} />
          </Route>
          <Route path='friends'>
            <Friends names={["Chantel", "Ricky", "Sabeen"]} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function Friends() {
  return <h2>Friends</h2>
}

function Posts() {
  return <h2>Posts</h2>
}