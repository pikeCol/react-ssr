import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
// import { StaticRouter } from "react-router";
import Topics from './components/topics'
// import axios from 'axios';
// import './assets/normal.scss'
function BasicExample() {
  // axios.get('http://localhost:9000/api/userInfo').then(res => {
  //   console.log(res.data)
  //   console.log(res.status)
  // })
  return (
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </React.Fragment>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default BasicExample
