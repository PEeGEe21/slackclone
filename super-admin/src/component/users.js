import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

export const UserList = (props) => (
  <div>
    <div className="section content">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="custom-card">
            <ul className="nav nav-tabs " role="tablist">
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link active"
                  data-toggle="tab"
                  data-target="#kt_tab_1_1"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a href="#kt_tab_1_2" className="nav-link" data-toggle="tab">
                  Workspaces
                </a>
              </li>
              <li className="nav-item">
                <a href="#kt_tab_1_3" className="nav-link" data-toggle="tab">
                  Admins
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="kt_tab_1_1" role="tabpanel">
                LOrem Ipsum tab 1
              </div>

              <div className="tab-pane" id="kt_tab_1_2" role="tabpanel">
                LOrem Ipsum tab 2
              </div>
              <div className="tab-pane" id="kt_tab_1_3" role="tabpanel">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  //   <List {...props}>
  //     <Datagrid rowClick="edit">
  //       <TextField source="id" />
  //       <TextField source="name" />
  //       {/* <TextField source="username" /> */}
  //       <EmailField source="email" />
  //       {/* <TextField source="address.street" /> */}
  //       <TextField source="phone" />
  //       {/* <TextField source="website" /> */}
  //       <UrlField source="website" />
  //       <TextField source="company.name" />
  //     </Datagrid>
  //   </List>
);

export default UserList;
