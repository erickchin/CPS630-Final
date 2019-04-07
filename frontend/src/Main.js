import React, { Component } from 'react';
import Overview from './overview/Overview';
import Login from './login/Login';
import Plan from './plan/Plan';
import Analytics from './analytics/Analytics';
import Home from './home/Home';
import Signup from './signup/signup';
import { Switch, Route } from 'react-router-dom'


class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Plan' component={Plan} />
        <Route path='/Overview' component={Overview} />
        <Route path='/Analytics' component={Analytics} />
        <Route path='/Signup' component={Signup} />
      </Switch>
    );
  }
}

export default Main;