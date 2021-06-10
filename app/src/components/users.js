import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      {/* <TextField source="website" /> */}
      <UrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export default UserList;
