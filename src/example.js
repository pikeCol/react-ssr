import React from "react";
// import PropTypes from 'prop-types';
import { Route, Link, Switch } from "react-router-dom";
// import { StaticRouter } from "react-router";
import Topics from './components/topics'
// import axios from 'axios';
function BasicExample () {

  // axios.get('/api/userInfo').then(res => {
  //   console.log(res)
  // })
  return (
    <Switch>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </React.Fragment>
    </Switch>
  );
}

function Home () {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About () {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}




export default BasicExample;
