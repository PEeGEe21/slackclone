import React, { Component } from 'react';
import Sidebar from './Layout/index';

export default class User_groups extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
          <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-users mr-3"></i>User Group
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}
