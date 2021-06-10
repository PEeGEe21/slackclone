import * as React from 'react';
import { Layout } from 'react-admin';
import Menu from './menu';
import PrimarySearchAppBar from './Appbar';
// import PrimarySearchAppBar from './Appbar';

const MyLayout = (props) => (
  <div>
    <Layout {...props} menu={Menu} appBar={PrimarySearchAppBar} />
  </div>
);

export default MyLayout;
