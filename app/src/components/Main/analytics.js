import React, { Component } from 'react';
import Sidebar from './Layout/index';
import Chart from 'react-apexcharts';
// import Sidebar from './Sidebar';
// import Appbar2 from './Appbar2';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SettingsIcon from '@material-ui/icons/Settings';

export default class Analytics extends Component {
  // function configure() {

  constructor(props) {
    super(props);

    this.state = {
      readingChart: {
        series: [
          {
            name: 'Members who posted',
            data: [0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0],
          },
          {
            name: 'Weekly Active Members',
            data: [0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0],
          },
          // {
          //   name: 'Total Visits',
          //   data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          // },
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
            // curve: 'stepline',
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
            // size: 0,
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
              // {
              //   title: {
              //     formatter: function (val) {
              //       return val;
              //     },
              //   },
              // },
            ],
          },
          grid: {
            borderColor: '#f1f1f1',
          },
        },
      },

      trafficChart: {
        series: [
          {
            name: 'Members who posted',
            data: [0, 0, 0, 0, 0, 120, 120, 120, 0, 0, 0, 0],
          },
          {
            name: 'Weekly Active Members',
            data: [0, 0, 0, 0, 120, 120, 120, 120, 0, 0, 0, 0],
          },
          // {
          //   name: 'Total Visits',
          //   data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          // },
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
            // curve: 'stepline',
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
              // {
              //   title: {
              //     formatter: function (val) {
              //       return val;
              //     },
              //   },
              // },
            ],
          },
          grid: {
            borderColor: '#f1f1f1',
          },
        },
      },

      dailychart: {
        series: [
          {
            data: [0, 0, 0, 0, 0, 43, 33, 0, 0, 66, 58],
          },
        ],
        options: {
          chart: {
            type: 'line',
            height: 350,
          },
          stroke: {
            curve: 'stepline',
          },

          dataLabels: {
            enabled: true,
          },
          title: {
            text: 'Stepline Chart',
            align: 'left',
          },
          markers: {
            hover: {
              sizeOffset: 4,
            },
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
      },

      weeklychart: {
        series: [
          {
            data: [0, 0, 0, 0, 0, 43, 33, 0, 0, 66, 58],
          },
        ],
        options: {
          chart: {
            type: 'line',
            height: 350,
          },
          stroke: {
            curve: 'stepline',
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Stepline Chart',
            align: 'left',
          },
          markers: {
            hover: {
              sizeOffset: 4,
            },
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
      },
    };
  }

  render() {
    return (
      <div>
        <Sidebar>
          <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-tachometer-alt mr-3"></i>Analytics
            </h1>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="overview-tab"
                  data-toggle="tab"
                  href="#overview"
                  role="tab"
                  aria-controls="overview"
                  aria-selected="true"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="channels-tab"
                  data-toggle="tab"
                  href="#channel-panel"
                  role="tab"
                  aria-controls="channels"
                  aria-selected="false"
                >
                  Channels
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="members-tab"
                  data-toggle="tab"
                  href="#members-panel"
                  role="tab"
                  aria-controls="members"
                  aria-selected="false"
                >
                  Members
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="overview"
                role="tabpanel"
                aria-labelledby="overview-tab"
              >
                <div className="analytics-card">
                  <h5 className="mt-3">
                    <i className="fa fa-magic mr-2"></i>All Time Usage
                  </h5>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card app-content mb-4 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Messages sent</h5>{' '}
                          </div>
                          <div>
                            <div className="ent_callout__big_number d-inline-block">
                              4
                            </div>
                            {/* <div className="ent_callout__big_number--secondary d-inline-block">
                            bytes
                          </div> */}
                          </div>
                          <div data-ent-analytics-usage-callout-limit-file_storage="">
                            <div className="ent_callout__limit">
                              out of 10,000 messages
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
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card app-content mb-4 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Storage Used</h5>{' '}
                          </div>
                          <div>
                            <div className="ent_callout__big_number d-inline-block">
                              0
                            </div>
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
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card app-content mb-4 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Apps and Integrations Installed</h5>{' '}
                          </div>
                          <div>
                            <div className="ent_callout__big_number d-inline-block">
                              0
                            </div>
                            {/* <div className="ent_callout__big_number--secondary d-inline-block">
                            bytes
                          </div> */}
                          </div>
                          <div data-ent-analytics-usage-callout-limit-file_storage="">
                            <div className="ent_callout__limit">
                              out of 10{' '}
                              <a
                                href="/files"
                                target="_blank"
                                data-clog-click="true"
                                data-clog-event="WEBSITE_CLICK"
                                data-clog-params="action=click,step=team_stats_overview,ui_element=file_storage_link"
                              >
                                apps and integrations
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="analytics-card">
                  <div className="row">
                    <div className="col-lg-5">
                      <h5 className="mt-3">
                        <i className="fa fa-user mr-2"></i>Active members
                      </h5>
                      <p>
                        See how many people are active — meaning they posted a
                        message or read at least one channel or direct message.
                      </p>
                    </div>
                  </div>

                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="Weekly-tab"
                        data-toggle="tab"
                        href="#Weekly"
                        role="tab"
                        aria-controls="Weekly"
                        aria-selected="true"
                      >
                        Weekly
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="daily-tab"
                        data-toggle="tab"
                        href="#daily"
                        role="tab"
                        aria-controls="daily"
                        aria-selected="true"
                      >
                        Daily
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="Weekly"
                      role="tabpanel"
                      aria-labelledby="Weekly-tab"
                    >
                      <div className="row">
                        <div id="chart">
                          <Chart
                            options={this.state.trafficChart.options}
                            series={this.state.trafficChart.series}
                            type="line"
                            height={350}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="daily"
                      role="tabpanel"
                      aria-labelledby="daily-tab"
                    >
                      <div className="row">
                        <div id="chart">
                          <Chart
                            options={this.state.dailychart.options}
                            series={this.state.dailychart.series}
                            type="line"
                            height={350}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                          >
                            1. What is HTML?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <p>
                            HTML stands for HyperText Markup Language. HTML is
                            the standard markup language for describing the
                            structure of web pages.{' '}
                            <a
                              href="https://www.tutorialrepublic.com/html-tutorial/"
                              target="_blank"
                            >
                              Learn more.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                          >
                            2. What is Bootstrap?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse show"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <p>
                            Bootstrap is a sleek, intuitive, and powerful
                            front-end framework for faster and easier web
                            development. It is a collection of CSS and HTML
                            conventions.{' '}
                            <a
                              href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                              target="_blank"
                            >
                              Learn more.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          >
                            3. What is CSS?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <p>
                            CSS stands for Cascading Style Sheet. CSS allows you
                            to specify various style properties for a given HTML
                            element such as colors, backgrounds, fonts etc.{' '}
                            <a
                              href="https://www.tutorialrepublic.com/css-tutorial/"
                              target="_blank"
                            >
                              Learn more.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                 */}
                </div>

                <div className="analytics-card">
                  <div className="row">
                    <div className="col-lg-5">
                      <h5 className="mt-3">
                        <i className="fa fa-glasses mr-2"></i>Public and Private
                      </h5>
                      <p>
                        Understand where your members have conversations, and
                        where messages are most commonly read. Most messages
                        will have multiple readers.
                      </p>
                    </div>
                  </div>

                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="reading-tab"
                        data-toggle="tab"
                        href="#reading"
                        role="tab"
                        aria-controls="reading"
                        aria-selected="true"
                      >
                        Where people are reading
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="sent-tab"
                        data-toggle="tab"
                        href="#sent"
                        role="tab"
                        aria-controls="sent"
                        aria-selected="true"
                      >
                        Where messages are sent
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="reading"
                      role="tabpanel"
                      aria-labelledby="reading-tab"
                    >
                      <div className="row">
                        <div id="chart">
                          <Chart
                            options={this.state.readingChart.options}
                            series={this.state.readingChart.series}
                            type="line"
                            height={350}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="sent"
                      role="tabpanel"
                      aria-labelledby="sent-tab"
                    >
                      <div className="row">
                        <div id="chart">
                          <Chart
                            options={this.state.dailychart.options}
                            series={this.state.dailychart.series}
                            type="line"
                            height={350}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="channel-panel"
                role="tabpanel"
                aria-labelledby="channels"
              >
                channels
              </div>
              <div
                className="tab-pane fade"
                id="members-panel"
                role="tabpanel"
                aria-labelledby="members-tab"
              >
                members
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }
}

// function analytics() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Analytics</div>
//       </Sidebar>
//     </div>
//   );
// }

// export default analytics;
