import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import './react-pro-sidebar/dist/css/';

import { useMediaQuery } from '@material-ui/core';
import {
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const Sidebar = ({ onMenuClick, logout }) => {
  // const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <ProSidebar className="prosidebar" style={{ height: '100%' }}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent className="mr-4">
        <Menu iconShape="none">
          <MenuItem icon={<FaTachometerAlt />}>
            Home
            <Link to="/ProfileUser" />
          </MenuItem>
          <SubMenu title="Components" icon={<FaHeart />} popperArrow="true">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaGem />}>
            Account & profile
            <Link to="/setting" />
          </MenuItem>
          <MenuItem icon={<FaList />}>
            Configure apps <Link to="/posts" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />}>
            Analytics <Link to="/posts" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Customize <Link to="/users" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            About this workspace <Link to="/users" />
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarContent className="mr-4">
        <Menu iconShape="none">
          <MenuItem icon={<FiUser />}>
            Users <Link to="/users2" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Settings & permissions
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Manage members
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            User groups
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Invitations
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Billing
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Authentication
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Deprecations
            <Link to="#" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Support for Transport Layer Security (TLS)
            <Link to="#" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="mt-5">My Footer</SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;

// import React from "react";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import Collapse from "@material-ui/core/Collapse";

// function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
//   const [collapsed, setCollapsed] = React.useState(true);
//   const { label, items, Icon, onClick: onClickProp, path } = item;

//   function toggleCollapse() {
//     setCollapsed(prevValue => !prevValue);
//   }

//   function onClick(e) {
//     if (Array.isArray(items)) {
//       toggleCollapse();
//     }
//     if (onClickProp) {
//       onClickProp(e, item);
//     }
//   }

//   let expandIcon;

//   if (Array.isArray(items) && items.length) {
//     expandIcon = !collapsed ? (
//       <ExpandLessIcon
//         className={
//           "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
//         }
//       />
//     ) : (
//       <ExpandMoreIcon className="sidebar-item-expand-arrow" />
//     );
//   }

//   return (
//     <>
//       <ListItem
//         className="sidebar-item"
//         onClick={onClick}
//         button
//         dense
//         {...rest}
//       >
//         <div
//           style={{ paddingLeft: depth * depthStep }}
//           className="sidebar-item-content"
//         >
//           {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
//           <div className="sidebar-item-text">{label}</div>
//         </div>
//         {expandIcon}
//       </ListItem>
//       <Collapse in={!collapsed} timeout="auto" unmountOnExit>
//         {Array.isArray(items) ? (
//           <List disablePadding dense>
//             {items.map((subItem, index) => (
//               <React.Fragment key={`${subItem.name}${index}`}>
//                 {subItem === "divider" ? (
//                   <Divider style={{ margin: "6px 0" }} />
//                 ) : (
//                   <SidebarItem
//                     depth={depth + 1}
//                     depthStep={depthStep}
//                     item={subItem}
//                   />
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         ) : null}
//       </Collapse>
//     </>
//   );
// }

// function Sidebar({ items, depthStep, depth, expanded }) {
//   return (
//     <div className="sidebar">
//       <List disablePadding dense>
//         {items.map((sidebarItem, index) => (
//           <React.Fragment key={`${sidebarItem.name}${index}`}>
//             {sidebarItem === "divider" ? (
//               <Divider style={{ margin: "6px 0" }} />
//             ) : (
//               <SidebarItem
//                 depthStep={depthStep}
//                 depth={depth}
//                 expanded={expanded}
//                 item={sidebarItem}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default Sidebar;

// // import React, { Component } from 'react'
// // import { Link } from 'react-router-dom'
// // import AppBar from '@material-ui/core/AppBar'
// // import Drawer from '@material-ui/core/Drawer'
// // import MenuItem from '@material-ui/core/MenuItem'
// // import IconButton from '@material-ui/core/IconButton'

// // class App extends Component {

// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       open: false
// //     }
// //   }

// //   toggleDrawer = () => this.setState({ open: !this.state.open })

// //   render() {
// //     return (
// //       <div>
// //         <AppBar
// //           title="Title"
// //           iconClassNameRight="muidocs-icon-navigation-expand-more"
// //           onLeftIconButtonTouchTap={this.toggleDrawer}
// //         />

// //         <Drawer
// //           docked={false}
// //           width={300}
// //           onRequestChange={this.toggleDrawer}
// //           open={this.state.open}
// //         >
// //           <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleDrawer} />
// //           <MenuItem
// //             primaryText="home"
// //             containerElement={<Link to="/" />}
// //             onTouchTap={() => {
// //               console.log('going home')
// //               alert('going home!')
// //               this.toggleDrawer()
// //             }}
// //           />
// //           <MenuItem
// //             primaryText="about"
// //             containerElement={<Link to="/about" />}
// //             onTouchTap={() => {
// //               console.log('about')
// //               alert('going to about page!')
// //               this.toggleDrawer()
// //             }}
// //           />
// //         </Drawer>

// //         <div style={{ textAlign: 'center' }}>
// //           {this.props.children}

// //           <IconButton
// //             label="Toggle Drawer"
// //             onTouchTap={this.toggleDrawer}
// //           />
// //         </div>

// //       </div>
// //     )
// //   }
// // }

// // export default App
