import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/scss/styling.scss';
// import 'react-pro-sidebar/dist/scss/styles.scss';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/umd/popper';
import '@fortawesome/fontawesome-free/css/all.css';
import CountUp from 'react-countup';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';

import Swal from 'sweetalert2';
import { Admin, Resource } from 'react-admin';
import Dashboard from './component/Dashboard';
// import dataProvider from './dataProvider';
import authProvider from './component/authProvider';
import { PostList, PostEdit, PostCreate, PostShow } from './component/posts';
import { UserList } from './component/users';
import overview from './component/overview';
import Test from './component/test';
import MasterForm from './component/form';

// import PrimarySearchAppBar from './component/Appbar';

import { WorkspaceList } from './component/workspace-listing';
// import { WorkspaceTableRow } from './component/WorkspaceTableRow';
import WorkspaceTable from './component/workspace-listing';
// import {  WorkspaceTable } from './component/WorkspaceTableRow';
import { CreateWorkspace } from './component/create-workspace';
import { EditWorkspace } from './component/edit-workspace';
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import NotFound from './component/NotFound';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import customRoutes from './component/customRoutes';
import MyLayout from './component/MyLayout';
import Chart from 'react-apexcharts';
import chartApp from './component/chart-app';

// import MyLayout from './component/MyLayout';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#1d1d1d',
      // main: '#11cb5f',
    },
  },
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin
          catchAll={NotFound}
          dashboard={Dashboard}
          authProvider={authProvider}
          dataProvider={dataProvider}
          theme={theme}
          icon={HomeIcon}
          title=""
          customRoutes={customRoutes}
          layout={MyLayout}
          // appLayout={MyLayout}
        >
          <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
            show={PostShow}
          />
          <Resource name="users" list={UserList} icon={UserIcon} />
          {/* <Resource name="overview" {...overview} icon={UserIcon} />
          <Resource name="test" {...Test} icon={UserIcon} />
          <Resource name="test" {...Test} icon={UserIcon} /> */}

          {/* <Resource name="invoices" {...invoices} /> */}
        </Admin>
      </div>
    );
  }
}

export default App;
