import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { IoIosChatbubbles } from 'react-icons/io';
import { GoMention } from 'react-icons/go';
import { BiBookmark } from 'react-icons/bi';
import { BiAlignLeft } from 'react-icons/bi';
import { RiStackLine } from 'react-icons/ri';
import { IoMdApps } from 'react-icons/io';
import { GrApps } from 'react-icons/gr';
import { FiHash } from 'react-icons/fi';
import { TiContacts } from 'react-icons/ti';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a
        className="menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className="sidebarOption_icon" /> <span>More</span>
      </a>

      {/* <Divider />
      {/* hello */}
      {/* <MenuList>
        <ListSubheader component="div" id="nested-list-subheader">
          Account
        </ListSubheader>

        <MenuItem component={Link} to="/newchat">
          <UndoIcon className="mr-3" />
          Back to the App
        </MenuItem> */}

      <Menu
        // id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: '600px' }}
      >
        <div className="simple_menu">
          {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" /> */}
          <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>
            <SidebarOption Icon={BiAlignLeft} title="All Unreads" />

            <SidebarOption Icon={IoIosChatbubbles} title="All DMs" />

            <SidebarOption Icon={GoMention} title="Mentions & reactions" />

            <SidebarOption Icon={BiBookmark} title="Saved Items" />
          </div>
          <Divider />
          <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>
            <SidebarOption Icon={FiHash} title="Channel browser" />

            <SidebarOption Icon={RiStackLine} title="File browser" />

            <SidebarOption Icon={TiContacts} title="People & user groups" />

            <SidebarOption Icon={IoMdApps} title="Apps" />
          </div>
          <Divider />

          <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        </div>
      </Menu>
    </div>
  );
}
