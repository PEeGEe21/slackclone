import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from '../../layout/TextInputGroup';
import classnames from 'classnames';

class getStarted extends Component {
  onChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      // <div className=" create mx-auto ">
      //   <div className="create-add">
      //     <h3>Try Our App with your team, for free</h3>
      //     <p>Create a brand-new workspace for you and your team.</p>
      //     <a href="" className="btn btn-outline-secondary btn-block">
      //       <i className="fa fa-plus mr-1"></i>
      //       Create a workspace
      //     </a>
      //   </div>
      //   <div className=" create-add">
      //     <h3>Is your team already using Our App?</h3>
      //     <p>Find and sign in to your team’s existing workspace.</p>
      //     <a href="" className="btn btn-secondary btn-block">
      //       Sign In
      //     </a>
      //   </div>
      // </div>
      <div className="login-bx">
        <div className="container">
          <div className="row text-center create-sub">
            <div className="col-lg-6">
              <h3>Try Our App with your team, for free</h3>
              <p>Create a brand-new workspace for you and your team.</p>
              <a
                href="get-started/create"
                className="btn btn-outline-secondary btn-block"
              >
                <i className="fa fa-plus mr-1"></i>
                Create a workspace
              </a>
            </div>
            <div className="col-lg-6 bg-secondary text-white">
              <h3>Is your team already using Our App?</h3>
              <p>Find and sign in to your team’s existing workspace.</p>
              <a
                href="/find"
                className="btn btn-light btn-block"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default getStarted;
