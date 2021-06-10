import React, { Component } from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QuestionMenu from './question-menu';


class Header extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      channels: [],
      id: '',
      Open: false,
      channelsData: [],
      users: [],
      user: JSON.parse(localStorage.getItem('user')),
      workspace: JSON.parse(localStorage.getItem('workspace')),
    };
  }

  render() {
    const workspace = JSON.parse(localStorage.getItem('workspace'));

    return (
      <div className="header">
        <div className="header_left">
          <Avatar className="header_avatar" alt="praise" src="" />
          <AccessTimeIcon />
        </div>
        <div className="header_search">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <SearchIcon />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder={`Search ${workspace.title}`}
            />
          </div>
        </div>

        <div className="header_right">
          {/* <HelpOutlineIcon /> */}
         <QuestionMenu/> 
        </div>
      </div>
    );
  }
}

export default Header;
