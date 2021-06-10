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

const Menu2 = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <ProSidebar>
      <SidebarHeader></SidebarHeader>

      <SidebarContent className="mr-4">
        <Menu iconShape="circle" >
          <MenuItem icon={<FaTachometerAlt />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <SubMenu title="Components" icon={<FaHeart />} popperArrow="true">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaGem />}>
            Workspaces <Link to="/workspaces" />
          </MenuItem>
          <MenuItem icon={<FaList />}>
            Posts <Link to="/posts" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Users <Link to="/users" />
          </MenuItem>
          <MenuItem icon={<FiUser />}>
            Users <Link to="/users2" />
          </MenuItem>

          <MenuItem>{isXSmall && logout}</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>My Footer</SidebarFooter>
    </ProSidebar>
  );
};

export default Menu2;

// //in src/Menu.js
// import * as React from 'react';
// import { createElement } from 'react';
// import { useSelector } from 'react-redux';
// import { useMediaQuery } from '@material-ui/core';
// import { MenuItemLink, getResources } from 'react-admin';
// import DefaultIcon from '@material-ui/icons/ViewList';
// import LabelIcon from '@material-ui/icons/Label';
// import LayersIcon from '@material-ui/icons/Layers';
// import { useTranslate, DashboardMenuItem } from 'react-admin';

// const Menu = ({ onMenuClick, logout }) => {
//   const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
//   const open = useSelector((state) => state.admin.ui.sidebarOpen);
//   const resources = useSelector(getResources);
//   return (
//     <div>
//       <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
//       {resources.map((resource) => (
//         <MenuItemLink
//           key={resource.name}
//           to={`/${resource.name}`}
//           primaryText={
//             (resource.options && resource.options.label) || resource.name
//           }
//           leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
//           onClick={onMenuClick}
//           sidebarIsOpen={open}
//         />
//       ))}

//       <MenuItemLink
//         to="/custom-route"
//         primaryText={'Miscellaneous'}
//         leftIcon={<LabelIcon />}
//         onClick={onMenuClick}
//         sidebarIsOpen={open}
//       />

//       <MenuItemLink
//         to="/workspace-listing"
//         primaryText="Workspaces"
//         leftIcon={<LayersIcon />}
//         onClick={onMenuClick}
//         sidebarIsOpen={open}
//       />
//       {/* <MenuItemLink
//         to="/overview"
//         primaryText="Overview"
//         leftIcon={<LabelIcon />}
//         onClick={onMenuClick}
//         sidebarIsOpen={open}
//       /> */}

//       {/* <MenuItemLink
//         to="/test"
//         primaryText="test"
//         leftIcon={<LabelIcon />}
//         onClick={onMenuClick}
//         sidebarIsOpen={open}
//       /> */}

//       {isXSmall && logout}
//     </div>
//   );
// };

// export default Menu;
