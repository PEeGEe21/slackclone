import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from '../../layout/TextInputGroup';
import classnames from 'classnames';
import Swal from 'sweetalert2';

class Register3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      text: '',
      username: '',
      password: '',
      projectname: '',
      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onsubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      Swal.fire('Good job!', 'User and Workspace Added Successfully', 'success');
    }, 1000);

    this.props.history.push({
      pathname: '/home',
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { errors } = this.state;
    // const info = localStorage.getItem('workspace_info').toString();


    return (
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-md-6 mt-5 mx-auto ">
            <form onSubmit={this.handleSubmit}>
              <div className="text-left">
                <h1 className="h3 mb-3 font-weight-normal">
                  Tada! Meet your team's first channel:
                </h1>

                <h5 className="text-muted h6 mb-2">
                  You're leaving those unending email threads in the past.
                  Channels give every project, topic, and team a dedicated space
                  for all their messages and files.
                </h5>
              </div>
              <div className="text-left align-items-center ">
                <button
                  className="btn btn-success btn-block"
                  onClick={this.onsubmit}
                >
                  See Your Channel in Our App
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 mt-0 bg-light mx-auto">
            <img src="img-hero-remote.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register3;

{
  /* <div className="col-md-6 mt-0 bg-light mx-auto">
            <form noValidate onSubmit={this.onSubmit} className="reg-1 ">
              <div className="text-center">
                <h1 className="display-5 mb-3 font-weight-normal">
                  First, enter your email
                </h1>
                <h5 className="text-muted mb-5">
                  Just one more email — a quick confirmation — before you say
                  goodbye to overstuffed inboxes for good.
                </h5>
              </div>
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                required="required"
                placeholder="Enter Email"
                defaultValue={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                text="
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji."
              />
              <button
                type="submit"
                className="btn btn-md btn-primary btn-block"
              >
                Confirm
              </button>
            </form>
          </div>
         */
}

{
  /*
        <div className="row vh-100">
          <div className="col-md-6 mt-5 mx-auto ">
            <form noValidate onSubmit={this.onSubmit} className="reg-1 ">
              <div className="text-left">
                <h1 className="h3 mb-3 font-weight-normal">
                  Tada! Meet your team's first channel: #great-breads-to-bake
                </h1>

                <h5 className="text-muted h6 mb-2">
                  You're leaving those unending email threads in the past.
                  Channels give every project, topic, and team a dedicated space
                  for all their messages and files.
                </h5>
              </div>
              <div className="text-left align-items-center ">
                 <TextInputGroup
                  name="text"
                  type="text"
                  required="required"
                  placeholder="Eg. Tech"
                  defaultValue={this.state.text}
                  onChange={this.onChange}
                  error={errors.email}
                />}
                <button
                  type="submit"
                  className="btn btn-md btn-primary btn-block"
                >
                  See Your Channel in Slack
                </button>
                {/* <p className="mt-3 text-left p-signin_form">
                  By continuing you're agreeing to our
                  <a href=""> Customer Terms of Service.</a>
                  <br></br> <a href=""> Privacy Policy </a> and{' '}
                  <a href="">Cookie Policy</a>
                </p> 
                
              </div>
              
            </form>
          </div>
          

          </div>
          */
}
