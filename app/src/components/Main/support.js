import React, {Component} from 'react';
import Sidebar from './Layout/index';


export default class Support extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-lock mr-3"></i>Support
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}

