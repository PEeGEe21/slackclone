import React, {Component} from 'react';
import Sidebar from './Layout/index';


export default class Setting extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-cog mr-3"></i>Settings and Permissions

            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}

