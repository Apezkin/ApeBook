import React from 'react';
import './App.css';
import NewPost from "./NewPost";
import Posts from "./Posts";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return ( //Routes for different main page and new post page
    <Router>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts" component={Posts} />
        <Route path="/newPost" component={NewPost}/>
      </Switch>
    </Router>
  );
}

export default App;
