import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatBox from './ChatBox';
import ChatBox2 from './ChatBox2';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Chat.css';
import { Redirect } from 'react-router-dom';
import ChatInput from './ChatInput';

class Chat2 extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const workspace = JSON.parse(localStorage.getItem('workspace'));
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      return <Redirect to="/find" push={true} />;
    }
    return (
      //   <div className="Chat">
      // <div className="Chat-header"></div>

      <div className="app_app_body">
        <Router>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/newchat/user/:roomId">
                <ChatBox2 />
              </Route>
              <Route path="/newchat/:roomId">
                <ChatBox />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Chat2;
