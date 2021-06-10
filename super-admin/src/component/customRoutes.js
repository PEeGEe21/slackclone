// in src/customRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Foo from './Foo';
import test from './test';
import overview from './overview';
import ChartApp from './chart-app';
import MasterForm from './form';
import CreateWorkspace from './create-workspace';
import EditWorkspace from './edit-workspace';
import WorkspaceTable from './workspace-listing';
import UserTable from './users-list';


// import Bar from './Bar';
// import Baz from './Baz';

export default [
  <Route exact path="/foo" component={Foo} />,
  <Route exact path="/test" component={test} />,
  <Route exact path="/overview" component={overview} />,
  <Route exact path="/chart-app" component={ChartApp} />,
  <Route path="/create-workspace" component={CreateWorkspace} />,
  <Route path="/edit-workspace/:id" component={EditWorkspace} />,
  // <Route path="/workspace-listing" component={WorkspaceTableRow} />,
  // <Route path="/workspace-table" component={WorkspaceList} />,
  <Route path="/workspaces" component={WorkspaceTable} />,
  <Route path="/users2" component={UserTable} />,
  
  <Route path="/form" component={MasterForm} />,

  //   <Route exact path="/bar" component={Bar} />,
  //   <Route exact path="/baz" component={Baz} noLayout />,
];
