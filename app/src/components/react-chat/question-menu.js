import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import './question-menu.css'
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { TiContacts } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


export default function QuestionMenu() {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      {/* <a
        className="menu-button"
        aria-controls="question-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          <HelpOutlineIcon />
          </a> */}
        {/* <MoreVertIcon className="sidebarOption_icon" /> <span>Browse App</span> */}
      
        <div className="nav-item dropdown helpOutline">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><HelpOutlineIcon /></a>
            <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">Get Help</a>
                <a href="#" className="dropdown-item">Quick Start Guide</a>
                <a href="#" className="dropdown-item">What's new</a>
                {/* <div class="dropdown-divider"></div> */}
                <a href="#"className="dropdown-item">Keyboard Shortcuts</a>
            </div>
        </div>

      {/* <Divider />
      {/* hello */}
      {/* <MenuList>
        <ListSubheader component="div" id="nested-list-subheader">
          Account
        </ListSubheader>

        <MenuItem component={Link} to="/newchat">
          <UndoIcon className="mr-3" />
          Back to the App
        </MenuItem>
    </MenuList> */}


      {/* <Menu
        id="question-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: '600px' }}
      >
        <div className="simple_menu">
          {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" /> 
          <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>
          <MenuItem component={Link} to="/newchat">
          Back to the App
        </MenuItem>
          </div>
          <Divider />
          <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>
          <MenuItem component={Link} to="/newchat">
          Back to the App
        </MenuItem>
          </div>
          <Divider />

          <MenuItem component={Link} to="/newchat">
          Back to the App
        </MenuItem>
        </div>
      </Menu>
     */}
    </div>
  );
}
