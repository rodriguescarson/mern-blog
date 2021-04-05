import React from 'react';
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Post from './Components/Post'
import AddPost from './Components/AddPost'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/posts" component={Post}/>
        <Route exact path="/add-post" component={AddPost}/>
      </Switch>
    </Router>
  );
}

export default App;