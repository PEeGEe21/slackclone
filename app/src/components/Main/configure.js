import React, { Component } from 'react';
import Sidebar from './Layout/index';
// import Sidebar from './Sidebar';
// import Appbar2 from './Appbar2';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SettingsIcon from '@material-ui/icons/Settings';

export default class Configure extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-plug mr-3"></i>Configure apps

            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}

// export default configure;
