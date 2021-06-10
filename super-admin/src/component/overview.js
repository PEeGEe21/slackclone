import * as React from 'react';
// import React, { Component } from 'react';

import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import { Title } from 'react-admin';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const overview = () => (
  <Container>
    <Title title="Overview" />
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
                <div
                  className="tab-pane active"
                  id="kt_tab_1_1"
                  role="tabpanel"
                >
                  LOrem Ipsum tab 1
                </div>

                <div className="tab-pane" id="kt_tab_1_2" role="tabpanel">
                  LOrem Ipsum tab 2
                </div>
                <div className="tab-pane" id="kt_tab_1_3" role="tabpanel">
                  LOrem Ipsum tab 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default overview;
