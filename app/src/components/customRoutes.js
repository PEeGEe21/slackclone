// in src/customRoutes.js
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Dashboard from '../components/Main/Dashboard';
import ProfileUser from '../components/Main/Profile';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <div className="">
              <Switch>
                <Route path="/ProfileUser" component={ProfileUser} />,
                <Route path="/setting" component={Dashboard} />,
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Layout;
