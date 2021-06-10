// import * as React from 'react';
import React, { Component, useState } from 'react';
import { ChartApp } from './chart-app';
import CountUp from 'react-countup';
import {
  //   Card,
  //   CardContent,
  //   CardHeader,
  Container, Link,
  //   Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { FiUser } from 'react-icons/fi';

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
} from 'react-admin';
import Table from 'react-bootstrap/Table';
import Chart from 'react-apexcharts';
import { Title } from 'react-admin';
import { UserList } from './users';
import WorkspaceList from './workspace-listing';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trafficChart: {
        series: [
          {
            name: 'Session Duration',
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          },
          {
            name: 'Page Views',
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
          },
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5],
          },
          title: {
            text: 'App Statistics',
            align: 'left',
          },
          legend: {
            tooltipHoverFormatter: function (val, opts) {
              return (
                val +
                ' - ' +
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                ''
              );
            },
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6,
            },
          },
          xaxis: {
            categories: [
              '01 Jan',
              '02 Jan',
              '03 Jan',
              '04 Jan',
              '05 Jan',
              '06 Jan',
              '07 Jan',
              '08 Jan',
              '09 Jan',
              '10 Jan',
              '11 Jan',
              '12 Jan',
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + ' (mins)';
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val + ' per session';
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  },
                },
              },
            ],
          },
          grid: {
            borderColor: '#f1f1f1',
          },
        },
      },
      barchart: {
        options: {
          chart: {
            id: 'basic-bar',
          },
          xaxis: {
            categories: [
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
            ],
          },
        },
        series: [
          {
            name: 'Workspaces',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 35, 45],
          },
          {
            name: 'Users',
            data: [50, 10, 25, 60, 79, 10, 60, 41, 66, 79],
          },
        ],
      },

      messageschart: {
        series2: [
          {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
          },
        ],
        options2: {
          chart: {
            type: 'line',
            width: 100,
            height: 35,
            sparkline: {
              enabled: true,
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return '';
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      userchart: {
        series6: [
          {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
          },
        ],
        options6: {
          chart: {
            type: 'bar',
            width: 100,
            height: 35,
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: '80%',
            },
          },
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return '';
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },

      piechart: {
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      },

      donutchart: {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      },
    };
  }
  render() {
    return (
      <Container>
        <Title title="My Page" />
        <div className="section content">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2>Dashboard</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fa fa-home"></i> Dashboard
                    </a>
                  </li>
                  {/* <li className="breadcrumb-item active">Dashboard</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix mb-4">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card widget_2 big_icon traffic bg-light-danger mb-4 mb-lg-0">
                <div className="body d-flex align-items-center justify-content-between">
                  <div>
                    <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>
                          Stockholm-icons / Communication / Urgent-mail
                        </title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g
                          id="Stockholm-icons-/-Communication-/-Urgent-mail"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            id="bound"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <path
                            d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                            id="Combined-Shape"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <h6>Messages Sent</h6>
                    <h2>{/* 20 <small className="info">of 1Tb</small> */}</h2>
                    <small>2% higher than last month</small>
                  </div>
                  {/* <div className="progress">
                      <div
                        className="progress-bar l-amber"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '45%' }}
                      ></div>
                    </div> */}

                  {/* <div className="mixed-chart">
                    <Chart
                      options={this.state.barchart.options}
                      series={this.state.barchart.series}
                      type="line"
                      width="80%"
                      height="150px"
                    />
                  </div> */}

                  <div id="chart-2">
                    <Chart
                      options={this.state.messageschart.options2}
                      series={this.state.messageschart.series2}
                      type="line"
                      height={50}
                      width={120}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card widget_2 big_icon sales bg-light-primary mb-4 mb-lg-0">
                <div className="body d-flex align-items-center justify-content-between">
                  <div>
                    <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>
                          Stockholm-icons / Communication / Add-user
                        </title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g
                          id="Stockholm-icons-/-Communication-/-Add-user"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon
                            id="Shape"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            id="Mask-Copy"
                            fill="#000000"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <h6>Users</h6>
                    <h2>{/* 12% <small className="info">of 100</small> */}</h2>
                    <small>6% higher than last month</small>
                    {/* <div className="progress">
                      <div
                        className="progress-bar l-blue"
                        role="progressbar"
                        aria-valuenow="38"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '38%' }}
                      ></div>
                    </div> */}
                  </div>
                  <div id="chart-6">
                    <Chart
                      options={this.state.userchart.options6}
                      series={this.state.userchart.series6}
                      type="bar"
                      height={50}
                      width={120}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card widget_2 big_icon email bg-light-warning mb-4 mb-lg-0">
                <div className="body">
                  <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Stockholm-icons / Design / Layers</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Stockholm-icons-/-Design-/-Layers"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon
                          id="Bound"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                          id="Shape"
                          fill="#000000"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                          id="Path"
                          fill="#000000"
                          opacity="0.3"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <h6>Workspaces</h6>
                  <h2>{/* 39 <small className="info">of 100</small> */}</h2>
                  <small>Total Registered Workspaces</small>
                  {/* <div className="progress">
                    <div
                      className="progress-bar l-purple"
                      role="progressbar"
                      aria-valuenow="39"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '39%' }}
                    ></div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card widget_2 big_icon bg-light-success mb-4">
                <div className="body">
                  <h6>Domains</h6>
                  <h2>{/* 8 <small className="info">of 10</small> }</h2>
                  <small>Total Registered Domain</small>
                  <div className="progress">
                    <div
                      className="progress-bar l-green"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '89%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row mb-4">
            <div className="col-sm-12 col-lg-12">
              <div className="card">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.barchart.options}
                    series={this.state.barchart.series}
                    type="bar"
                    width="100%"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix mb-4">
            <div className="col-sm-12 col-lg-4">
              <div className="card app-content mb-4 mb-lg-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Visits Today</h5>{' '}
                    <div className="dropdown dropdown-inline">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                      <div
                        className="dropdown-menu"
                        //   aria-labelledby="dropdownMenu2"
                      >
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
                  </div>

                  <div>
                    <div className="ent_callout__big_number d-inline-block">0</div>
                    {/* <div className="ent_callout__big_number--secondary d-inline-block">
                      bytes
                    </div> */}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="align-items-center">
                      <div>Registrations</div>
                      <div>
                      <CountUp end={860} duration={10} start={-1234}/>
                      </div>
                    </div>{' '}
                    <div className="align-items-center">
                      <div>Sign Out</div>
                      <div>32</div>
                    </div>{' '}
                    <div className="align-items-center">
                      <div>Rate </div>
                      <div>3.25%</div>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card app-content mb-4 mb-lg-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Storage Used</h5>{' '}
                    <div className="dropdown dropdown-inline">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                      <div
                        className="dropdown-menu"
                        //   aria-labelledby="dropdownMenu2"
                      >
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
                  </div>
                  <div>
                    <div className="ent_callout__big_number d-inline-block">0</div>
                    <div className="ent_callout__big_number--secondary d-inline-block">
                      bytes
                    </div>
                  </div>
                  <div data-ent-analytics-usage-callout-limit-file_storage="">
                    <div className="ent_callout__limit">
                      out of 5.0 GB of{' '}
                      <a
                        href="/files"
                        target="_blank"
                        data-clog-click="true"
                        data-clog-event="WEBSITE_CLICK"
                        data-clog-params="action=click,step=team_stats_overview,ui_element=file_storage_link"
                      >
                        file storage
                      </a>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar l-amber"
                      role="progressbar"
                      aria-valuenow="1"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '1%' }}
                    ></div>
                  </div>
                  {/* <div className="d-flex align-items-center justify-content-between">
                    <div className="align-items-center">
                      <p>Registrations</p>
                      <p>860</p>
                    </div>{' '}
                    <div className="align-items-center">
                      <p>Sign Out</p>
                      <p>32</p>
                    </div>{' '}
                    <div className="align-items-center">
                      <p>Rate </p>
                      <p>3.25%</p>
                    </div>{' '}
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card app-content">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>App Performance</h5>{' '}
                    <div className="dropdown dropdown-inline">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                      <div
                        // className="dropdown-menu"
                        x-placement="bottom-end"
                        aria-labelledby=""
                        className="dropdown-menu dropdown-menu-sm dropdown-menu-right"
                        //   aria-labelledby="dropdownMenu2"
                      >
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
                  </div>
                  12, 678
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="align-items-center">
                      <p>Registrations</p>
                      <p>860</p>
                    </div>{' '}
                    <div className="align-items-center">
                      <p>Sign Out</p>
                      <p>32</p>
                    </div>{' '}
                    <div className="align-items-center">
                      <p>Rate </p>
                      <p>3.25%</p>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-12 col-lg-12">
              <div className="card">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.trafficChart.options}
                    series={this.state.trafficChart.series}
                    type="line"
                    height={350}
                  />
                </div>
                {/* <Chart
                    options={this.state.barchart.options}
                    series={this.state.barchart.series}
                    type="bar"
                    width="100%"
                    height="400"
                  /> */}
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card mb-4 " style={{ height: 'auto' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>App Performance</h5>{' '}
                    <span>
                      <div className="dropdown dropdown-inline">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div
                          x-placement="bottom-end"
                          aria-labelledby=""
                          className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                          //   aria-labelledby="dropdownMenu2"
                        >
                          <a
                            href="/get-started/create"
                            className="dropdown-item"
                          >
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
                    </span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-2 my-2"
                    style={{ height: '18rem' }}
                  >
                    <div id="chart">
                      <Chart
                        options={this.state.piechart.options}
                        series={this.state.piechart.series}
                        type="pie"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card mb-4" style={{ height: 'auto' }}>
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    Recent Users
                    <span>
                      <div className="dropdown dropdown-inline">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div
                          x-placement="bottom-end"
                          aria-labelledby=""
                          className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                          //   aria-labelledby="dropdownMenu2"
                        >
                          <a
                            href="/get-started/create"
                            className="dropdown-item"
                          >
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
                    </span>
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="d-flex align-items-center mt-3 mb-3">
                    <div className="symbol symbol-40 symbol-light-success mr-3">
                      <span className="symbol-label">
                        <i className="fas fa-user fa-1x"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1">
                      <a
                        href="#"
                        className="text-dark text-hover-primary font-size-lg"
                      >
                        Peegee Udeh
                      </a>
                      {/* <span className="text-muted">
                        PHP, SQLite, Artisan CLI
                      </span> */}
                    </div>
                    <div className="dropdown-inline dropdown">
                      <a className="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="symbol symbol-40 symbol-light-success mr-3">
                      <span className="symbol-label">
                        <i className="fas fa-user fa-1x"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary font-size-lg"
                      >
                        Anne Clarc
                      </a>
                      {/* <span className="text-muted">
                        PHP, SQLite, Artisan CLI
                      </span> */}
                    </div>
                    <div className="dropdown-inline dropdown">
                      <a className="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="symbol symbol-40 symbol-light-success mr-3">
                      <span className="symbol-label">
                        <i className="fas fa-user fa-1x"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary font-size-lg"
                      >
                        Kristaps Zumman
                      </a>
                      {/* <span className="text-muted">
                        PHP, SQLite, Artisan CLI
                      </span> */}
                    </div>
                    <div className="dropdown-inline dropdown">
                      <a className="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="symbol symbol-40 symbol-light-success mr-3">
                      <span className="symbol-label">
                        <i className="fas fa-user fa-1x"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary font-size-lg"
                      >
                        Ricky Hunt
                      </a>
                      {/* <span className="text-muted">
                        PHP, SQLite, Artisan CLI
                      </span> */}
                    </div>
                    <div className="dropdown-inline dropdown">
                      <a className="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="symbol symbol-40 symbol-light-success mr-3">
                      <span className="symbol-label">
                        <i className="fas fa-user fa-1x"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary font-size-lg"
                      >
                        Carles Puyol
                      </a>
                      {/* <span className="text-muted">
                        PHP, SQLite, Artisan CLI
                      </span> */}
                    </div>

                    <div className="dropdown-inline dropdown">
                      <a className="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-end flex-column ">
                    <div className="pt-2 mt-4 mb-1">
                     
                       <a className="btn btn-default" href="#/users2">
                        View all Users(01776481){' '}
                        {/* <span className="ml-xs badge badge-danger">13</span> */}



                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 ">
              <div className="card mb-4 " style={{ height: 'auto' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>App Performance</h5>{' '}
                    <span>
                      <div className="dropdown dropdown-inline">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div
                          x-placement="bottom-end"
                          aria-labelledby=""
                          className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                          //   aria-labelledby="dropdownMenu2"
                        >
                          <a
                            href="/get-started/create"
                            className="dropdown-item"
                          >
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
                    </span>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between py-2 my-2"
                    style={{ height: '18rem' }}
                  >
                    <div id="chart">
                      <Chart
                        options={this.state.donutchart.options}
                        series={this.state.donutchart.series}
                        type="donut"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="card mb-4" style={{ height: 'auto' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>App Performance</h5>{' '}
                    <span>
                      <div className="dropdown dropdown-inline">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div
                          x-placement="bottom-end"
                          aria-labelledby=""
                          className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                          //   aria-labelledby="dropdownMenu2"
                        >
                          <a
                            href="/get-started/create"
                            className="dropdown-item"
                          >
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
                    </span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between py-2 my-2">
                    <div
                      id="chart"
                      style={{ height: '18rem' }}
                    >
                      <Chart
                        options={this.state.donutchart.options}
                        series={this.state.donutchart.series}
                        type="donut"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="row h-100">
                <div className="col-lg-12"> */}
              {/* </div>

                </div> */}
            </div>
          </div>
          {/* <div className="col-lg-12">
                  <div className="card mb-4" style={{ height: 'auto' }}>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>App Performance</h5>{' '}
                        <span>
                          <div className="dropdown dropdown-inline">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              type="button"
                              id="dropdownMenu2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-h"></i>
                            </button>
                            <div
                              x-placement="bottom-end"
                              aria-labelledby=""
                              className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                              //   aria-labelledby="dropdownMenu2"
                            >
                              <a
                                href="/get-started/create"
                                className="dropdown-item"
                              >
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
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div id="chart">
                          <Chart
                            options={this.state.donutchart.options}
                            series={this.state.donutchart.series}
                            type="donut"
                            height="auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

          <div className="row clearfix mb-4">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="card card-custom card-stretch gutter-b">
                <div className="card-header d-flex justify-content-between border-0 pt-2">
                  <h4 className="card-title d-flex align-items-start flex-column">
                    {/* <span className="card-label text-dark"> */}
                    New Users
                    {/* </span> */}
                  </h4>
                  <span>
                    <div className="dropdown dropdown-inline">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v"></i>
                      </button>
                      <div
                        x-placement="bottom-end"
                        aria-labelledby=""
                        className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                        //   aria-labelledby="dropdownMenu2"
                      >
                        <a
                          href="http://localhost:3000/#/create-workspace"
                          className="dropdown-item"
                        >
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
                  </span>
                </div>
                {/* <WorkspaceList> </WorkspaceList> */}
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="card card-custom card-stretch gutter-b mb-4"
                style={{ height: '550px' }}
              >
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    Recent Workspaces
                    <span>
                    <div className="dropdown dropdown-inline">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v"></i>
                      </button>
                      <div
                        x-placement="bottom-end"
                        aria-labelledby=""
                        className="dropdown-menu dropdown-menu-sm dropdown-menu-right"

                        //   aria-labelledby="dropdownMenu2"
                      >
                        <a
                          href="http://localhost:3000/#/create-workspace"
                          className="dropdown-item"
                        >
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
                  </span>
                </div>
                </div>

                <div className="card-body pt-2">
                  <div className="d-flex align-items-center mb-4">
                    <div className="symbol symbol-40 symbol-light-primary mr-5">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-primary">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-75 align-self-end"
                          >
                            <title>Stockholm-icons / Home / Library</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Stockholm-icons-/-Home-/-Library"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                id="bound"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                id="Combined-Shape"
                                fill="#000000"
                              ></path>
                              <rect
                                id="Rectangle-Copy-2"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                                x="16.3255682"
                                y="2.94551858"
                                width="3"
                                height="18"
                                rx="1"
                              ></rect>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1 font-size-lg"
                      >
                        Project Briefing
                      </a>
                      <span className="text-muted">Project Manager</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="symbol symbol-40 symbol-light-warning mr-5">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-warning">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-75 align-self-end"
                          >
                            <title>
                              Stockholm-icons / Communication / Write
                            </title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Stockholm-icons-/-Communication-/-Write"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                id="bound"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                id="Path-11"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                              ></path>
                              <path
                                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                id="Path-57"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1 font-size-lg"
                      >
                        Concept Design
                      </a>
                      <span className="text-muted">Art Director</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="symbol symbol-40 symbol-light-success mr-5">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-success">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-75 align-self-end"
                          >
                            <title>
                              Stockholm-icons / Communication / Group-chat
                            </title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Stockholm-icons-/-Communication-/-Group-chat"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                id="bound"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                id="Combined-Shape"
                                fill="#000000"
                              ></path>
                              <path
                                d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1 font-size-lg"
                      >
                        Functional Logics
                      </a>
                      <span className="text-muted">Lead Developer</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="symbol symbol-40 symbol-light-danger mr-5">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-danger">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-75 align-self-end"
                          >
                            <title>
                              Stockholm-icons / General / Attachment2
                            </title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Stockholm-icons-/-General-/-Attachment2"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                id="bound"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) "
                              ></path>
                              <path
                                d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                                id="Combined-Shape-Copy"
                                fill="#000000"
                                transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) "
                              ></path>
                              <path
                                d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) "
                              ></path>
                              <path
                                d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                                id="Combined-Shape-Copy-2"
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) "
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1 font-size-lg"
                      >
                        Development
                      </a>
                      <span className="text-muted">DevOps</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="symbol symbol-40 symbol-light-info mr-5">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-lg  svg-icon-info">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-75 align-self-end"
                          >
                            <title>
                              Stockholm-icons / Communication / Shield-user
                            </title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Stockholm-icons-/-Communication-/-Shield-user"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                id="bound"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                id="Path-50"
                                fill="#000000"
                                opacity="0.3"
                              ></path>
                              <path
                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                                id="Mask"
                                fill="#000000"
                                opacity="0.3"
                              ></path>
                              <path
                                d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                id="Mask-Copy"
                                fill="#000000"
                                opacity="0.3"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1 font-size-lg"
                      >
                        Testing
                      </a>
                      <span className="text-muted">QA Managers</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-end">
                    <a className="btn btn-default mt-auto" href="#/app/posts">
                      View all Users{' '}
                      {/* <span className="ml-xs badge badge-danger">13</span> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Dashboard;
