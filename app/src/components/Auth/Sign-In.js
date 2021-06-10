import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from '../../layout/TextInputGroup';
import classnames from 'classnames';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',

      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password, errors } = this.state;

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }

    console.log(this.state);
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
      response.json().then(function (resp) {
        console.log(resp);
      });
    });

    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);

    // const newUser = {
    //   name: this.state.first_name + '' + this.state.last_name,
    //   email: this.state.email,
    //   password: this.state.password,
    // };

    // register(newUser).then((res) => {
    //   this.props.history.push(`/emailsignup`);
    // });
  };

  onChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row signin_form">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="text-center">
                <h1 className="display-5 mb-3 font-weight-normal">
                  Sign in to your workspace
                </h1>
                <h5 className="text-muted mb-5">Enter your workspace's URL</h5>
              </div>
              <div className="px-5">
                <TextInputGroup
                  label="Email"
                  name="email"
                  type="email"
                  required="required"
                  placeholder="Your-workspace-URL"
                  defaultValue={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary btn-block mb-4"
                >
                  Continue
                </button>
                <p className="text-left p-signin_form">
                  Dont know your workspace URL?{' '}
                  <a href="">Find your worspaces</a>
                </p>

                <p className="text-left p-signin_form">
                  Looking to create a workspace instead?{' '}
                  <a href="">Create a new workspace</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
