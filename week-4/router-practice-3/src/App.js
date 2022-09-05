//REACT ROUTER AND REACT BOOTSTRAP VIDEO NOTES
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Alert, Card, Container } from 'react-bootstrap';
// Best to import bootstrap components separately to reduce code served to client (see below), but that's not compatible with my version of React Bootstrap for some reason
// import { Button } from 'react-bootstrap/Button';
// import { ButtonGroup } from 'react-bootstrap/ButtonGroup';
// import { Alert } from 'react-bootstrap/Alert';
// import { Card } from 'react-bootstrap/Card';
// import { Container } from 'react-bootstrap/Container';


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

  return(
    <Container>
      <Router>
          <div>
            <ButtonGroup>
              <Button variant="outline-secondary"> 
                <Link to="/">Home</Link>
              </Button>
              <Button variant="outline-secondary">
                <Link to="/friends">Friends</Link>
              </Button>
              <Button variant="outline-secondary">
                <Link to="/posts">Posts</Link>
              </Button>
            </ButtonGroup>
            <Switch>
                <Route path="/posts">
                    <Posts posts={posts} />
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
    </Container>
  );  
}

function Home() {
  return <h2>Home</h2>
}

function Friends(props) {
  const {names} = props;

  return (
    <div>
      <h2>Friends</h2>
      <ul>
        {names.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

//POSTS COMPONENT
function Posts({posts}) {
  const match = useRouteMatch();
  const findPostById = (id) => 
    posts.filter((post) => post.id == id)[0];

  return (
    <div>
      <h2>Posts</h2>
      
        {posts.map((post, index) => {
          return (
            <Alert key={index} variant='primary'>
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </Alert>
          );
        })}
      
      <Switch>
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post
              {...props}
              data={findPostById(props.match.params.postId)}
            />
          )}
        />
        <Route path={match.path}>
          <h3>Please select a post</h3>
        </Route>
      </Switch>
    </div>
  );
}

//POST COMPONENT
function Post(props) {
  const {data} = props;
  // If data is undefined, then return h1 with 404 error, otherwise return the card and data
  return data == undefined ? <h1>404 Post Not Found</h1> : (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}