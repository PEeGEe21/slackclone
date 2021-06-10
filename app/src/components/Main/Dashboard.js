// import * as React from 'react';

import React, { Component } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
// import Sidebar from './Sidebar';
// import Appbar2 from './Appbar2';

import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Sidebar from './Layout';
import { FaCog, FaTachometerAlt } from 'react-icons/fa';

export default class Home extends Component {
  state = {
    navigate: false,
  };

  onLogoutHandler = () => {
    // localStorage.clear();
    localStorage.setItem('isLoggedIn', false);
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const workspace = JSON.parse(localStorage.getItem("workspace"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === true;
    // const info = localStorage.getItem('workspace_info');
    console.log(user);
    const { navigate } = this.state;
    if (navigate || isLoggedIn) {
      return <Redirect to="/find" push={true} />;
    }
    if (workspace == null) {
      return <Redirect to="/get-workspace" />;
    }
    return (
      <div className="">
        <Sidebar>
          <div className="container home-dash">
            <div className="row">
              <div className="col-xl-7 col-sm-12 col-md-9 text-dark">
                <h3>HomePage</h3>
                <h5>Welcome, {user.email} </h5> You have Logged in successfully to
                your workspace.
              </div>
              <div className="col-xl-5 col-sm-12 col-md-3">
                <Button
                  className="btn btn-primary text-right"
                  onClick={this.onLogoutHandler}
                >
                  Logout
                </Button>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-xl-10 col-sm-12 col-md-9">
                <div className="card home_card clearfix">
                  <a href="/account" className="plastic_row">
                    <i className="fa fa-chevron-right chevron"></i>
                    <i className="fa fa-cog clear_blue_bg icon"></i>
                    {/* <FaCog className="clear_blue_bg icon"/> */}
                    <h3>Account Settings</h3>
                    <span className="description">
                      Edit your profile, update your username and password, and
                      manage other account settings.
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card home_card clearfix">
                {/* <div className="card home_card clearfix"> */}
                <a href="/settings_and_permissions" className="plastic_row">
                  <i className="fa fa-chevron-right chevron"></i>
                  <i className="fa fa-cogs clear_blue_bg icon"></i>
                  <h3>Settings &amp; Permissions</h3>{' '}
                  <span className="description">
                    Configure your workspace settings, permissions, and
                    authentication preferences.
                  </span>
                </a>

                {/* </div> */}

                {/* <div className="card home_card clearfix"> */}
                <a href="/admin" className="plastic_row">
                  <i className="fa fa-chevron-right chevron"></i>
                  <i className="fa fa-user yolk_orange_bg icon"></i>
                  <h3>Manage Your Workspace</h3>{' '}
                  <span className="description">
                    Invite new members and manage user permissions.
                  </span>
                </a>

                <div className="plastic_row">
                  <a
                    className="home_row_link_overlay"
                    href="/admin/billing?ui_element=15&amp;ui_step=33"
                    data-clog-event="GROWTH_PRICING"
                    data-clog-ui-element="upgrade_row"
                    data-clog-ui-action="click"
                    data-clog-ui-step="home"
                  ></a>

                  <i className="fa fa-credit-card seafoam_green_bg icon"></i>
                  <i className="fa fa-chevron-right chevron"></i>
                  <h3>Billing</h3>
                  <span className="description indifferent_grey small_bottom_margin">
                    Your workspace is on the <strong>Free plan</strong>.
                  </span>
                  <span className="description indifferent_grey small_bottom_margin">
                    Upgrade to the <strong>Standard plan</strong> or{' '}
                    <a
                      href="/pricing/plus?ui_step=27&amp;ui_element=4"
                      data-clog-event="GROWTH_PRICING"
                      data-clog-ui-element="pricing_plus_link"
                      data-clog-ui-action="click"
                      data-clog-ui-step="home"
                    >
                      <strong>Plus plan</strong>
                    </a>{' '}
                    for additional features, including:
                  </span>
                  <span className="description indifferent_grey bottom_margin">
                    <ul>
                      <li>Unlimited message archives and search</li>
                      <li> Unlimited integrations with external services</li>
                      <li>Premium support</li>
                      <li>Guest accounts</li>
                      <li> Voice and video calls for groups</li>
                      <li>Screen sharing</li>
                    </ul>
                  </span>
                  <form action="/checkout/router" method="post">
                    <input
                      type="hidden"
                      name="crumb"
                      value="s-1600283371-fd461bcd8945a2e34549de4a1aacdbd60e523dae6c3d7c91c3d348d1e01202c4-☃"
                    />
                    <input type="hidden" name="product_id" value="std_y" />
                    <input type="hidden" name="step" value="1" />
                    <input
                      type="hidden"
                      name="referring_step"
                      value="page_home"
                    />
                    <input
                      type="hidden"
                      name="referring_ui_element"
                      value="checkout_button"
                    />
                    <button
                      type="submit"
                      className="btn small_right_margin inline_block"
                      data-clog-event="GROWTH_PRICING"
                      data-clog-ui-element="checkout_button"
                      data-clog-ui-action="click"
                      data-clog-ui-step="home"
                    >
                      Upgrade your team
                    </button>
                    <a
                      href="/pricing?ui_step=27&amp;ui_element=11"
                      className="btn btn_outline inline_block"
                      data-clog-event="GROWTH_PRICING"
                      data-clog-ui-element="pricing_button"
                      data-clog-ui-action="click"
                      data-clog-ui-step="home"
                      data-qa="billing_compare_plans"
                    >
                      Compare Plans
                    </a>
                  </form>
                </div>
                <hr className="small_right_margin small_left_margin"></hr>
                <a href="/customize" className="plastic_row">
                  <i className="fa fa-chevron-right chevron"></i>
                  <i className="fa fa-magic seafoam_green_bg icon"></i>
                  <h3>Customize My App</h3>{' '}
                  <span className="description">
                    Use these settings to make Our App your own.
                  </span>
                </a>

                <a href="/stats" className="plastic_row">
                  <i className="fa fa-chevron-right chevron"></i>
                  {/* <i className="fal fa-tachometer " aria-hidden="true"></i> */}
                  <FaTachometerAlt className="burnt_violet_bg icon" />
                  {/* <i className="fab fa-tachometer burnt_violet_bg "></i> */}
                  <h3>Analytics</h3>{' '}
                  <span className="description">
                    View stats for your workspace, including activity, files,
                    and integrations.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }
}

// export default () => (
//   <Card>
//     <CardHeader title="Welcome to the administration" />
//     <CardContent>Lorem ipsum sic dolor amet...</CardContent>
//   </Card>
// );
