import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import UndoIcon from '@material-ui/icons/Undo';
import MenuIcon from '@material-ui/icons/Menu';
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaHome,
  FaCog,
  FaBook,
  FaRegUser,
  FaUserPlus,
  FaCreditCard,
  FaKey,
  FaLock,
  FaUsers,
  FaUserAlt,
  FaUser,
  FaPlug,
  FaMagic,
  FaInfoCircle,
  FaStackpath,
  FaInfo,
  FaSignOutAlt,
} from 'react-icons/fa';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const user = JSON.parse(localStorage.getItem('user'));
const workspace = JSON.parse(localStorage.getItem('workspace'));
const currentWorkspace = JSON.parse(localStorage.getItem('currentWorkspace'));

console.log(workspace);

// const info = localStorage.getItem('workspace_info');
// console.log(user);
// const { navigate } = this.state;
//   if (navigate) {
//     return <Redirect to="/find" push={true} />;
//   }

// const [open, setOpen] = useState(false);

function Sidebar(props) {
  const {
    children,
    location: { pathname },
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      {/* hello */}
      <MenuList>
        <ListSubheader component="div" id="nested-list-subheader">
          Account
        </ListSubheader>

        <MenuItem component={Link} to="/newchat">
          <UndoIcon className="mr-3" />
          Back to the App
        </MenuItem>

        <MenuItem component={Link} to="/home" selected={'/home' === pathname}>
          <FaHome className="mr-3" />
          Home
        </MenuItem>
        <MenuItem
          component={Link}
          to="/ProfileUser"
          selected={'/ProfileUser' === pathname}
        >
          <FaHeart className="mr-3" />
          Demo
        </MenuItem>

        <MenuItem
          component={Link}
          to="/account"
          selected={'/account' === pathname}
        >
          <FaUser className="mr-3" />
          Account & profile
        </MenuItem>
        <MenuItem
          component={Link}
          to="/configure"
          selected={'/configure' === pathname}
        >
          <FaPlug className="mr-3" />
          Configure apps
        </MenuItem>
        <MenuItem component={Link} to="/stats" selected={'/stats' === pathname}>
          <FaTachometerAlt className="mr-3" />
          Analytics
        </MenuItem>
        <MenuItem
          component={Link}
          to="/customize"
          selected={'/customize' === pathname}
        >
          <ListItemIcon>
            <FaMagic className="mr-3" variant="inherit" fontSize="big" />
          </ListItemIcon>
          <Typography variant="inherit">Customize</Typography>
        </MenuItem>

        <MenuItem component={Link} to="/about" selected={'/about' === pathname}>
          <FaInfoCircle className="mr-3" />
          About this workspace
        </MenuItem>
      </MenuList>

      <MenuList>
        <ListSubheader id="nested-list-subheader2">
          Administration
        </ListSubheader>
        <MenuItem
          component={Link}
          to="/settings_and_permissions"
          selected={'/settings_and_permissions' === pathname}
        >
          <FaCog className="mr-3" />
          Settings & permissions
        </MenuItem>
        <MenuItem
          component={Link}
          to="/members"
          selected={'/members' === pathname}
        >
          <FaBook className="mr-3" />
          Manage members
        </MenuItem>

        <MenuItem
          component={Link}
          to="/user_group"
          selected={'/user_group' === pathname}
        >
          <FaUsers className="mr-3" />
          User groups
        </MenuItem>
        <MenuItem
          component={Link}
          to="/invitations"
          selected={'/invitations' === pathname}
        >
          <FaUserPlus className="mr-3" />
          Invitations
        </MenuItem>

        <MenuItem
          component={Link}
          to="/billing"
          selected={'/billing' === pathname}
        >
          <FaCreditCard className="mr-3" />
          Billing
        </MenuItem>
        <MenuItem
          component={Link}
          to="/authentication"
          selected={'/authentication' === pathname}
        >
          <ListItemIcon>
            <FaKey className="mr-3" variant="inherit" fontSize="big" />
          </ListItemIcon>
          <Typography variant="inherit">Authentication</Typography>
        </MenuItem>

        <MenuItem
          component={Link}
          to="/deprecation"
          selected={'/deprecation' === pathname}
        >
          <FaInfo className="mr-3" />
          Deprecations
        </MenuItem>
        <MenuItem
          component={Link}
          to="/support"
          selected={'/support' === pathname}
        >
          <FaLock className="mr-3" />
          Support for Transport <br /> Layer Security (TLS)
        </MenuItem>
      </MenuList>

      <MenuList>
        <ListSubheader component="div" id="nested-list-subheader3">
          Other
        </ListSubheader>
        <MenuItem component={Link} to="/tour" selected={'/tour' === pathname}>
          Tour{' '}
        </MenuItem>
        <MenuItem component={Link} to="/apps" selected={'/apps' === pathname}>
          Download apps
        </MenuItem>

        <MenuItem
          component={Link}
          to="/brand_guidelines"
          selected={'/brand_guidelines' === pathname}
        >
          Brand guidelines
        </MenuItem>
        <MenuItem component={Link} to="/help" selected={'/help' === pathname}>
          Help
        </MenuItem>

        <MenuItem component={Link} to="/api" selected={'/api' === pathname}>
          API
        </MenuItem>
        <MenuItem
          component={Link}
          to="/gateways"
          selected={'/gateways' === pathname}
        >
          <Typography variant="inherit"> Gateways</Typography>
        </MenuItem>

        <MenuItem
          component={Link}
          to="/pricing"
          selected={'/pricing' === pathname}
        >
          Pricing
        </MenuItem>
        <MenuItem
          component={Link}
          to="/contact"
          selected={'/contact' === pathname}
        >
          Contact
        </MenuItem>

        <MenuItem
          component={Link}
          to="/policies"
          selected={'/policies' === pathname}
        >
          Policies
        </MenuItem>
        <MenuItem component={Link} to="/blog" selected={'/blog' === pathname}>
          Our blog
        </MenuItem>
        <MenuItem component={Link} to="" selected={'' === pathname}>
          Sign out
          <ListItemIcon>
            <FaSignOutAlt className="ml-2" variant="inherit" fontSize="big" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <FaHome className="mr-3" /> {workspace.title}
          </Typography>

          <Typography variant="h6" className="ml-auto">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Launch App
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <a href="/get-started/create" className="dropdown-item">
                  create a new workspace
                </a>

                <a href="/signin" className="dropdown-item">
                  Sign into another workspace
                </a>

                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            //   container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
      </main>
    </div>
  );
}

export default compose(withRouter)(Sidebar);
