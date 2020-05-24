import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Welcome from './Welcome';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import { fakeAuth } from '../Auth/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/home' component={Home} />
        </div>
      </Router>
    );
  }
}
