import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import classnames from 'classnames';

class My404Component extends Component {
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
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            yooohello
            {/* <form noValidate onSubmit={this.onSubmit}>
              <div className="text-center">
                <h1 className="display-5 mb-3 font-weight-normal">
                  First, enter your email
                </h1>
                <h5 class="text-muted mb-5">
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
           */}
          </div>
        </div>
      </div>
    );
  }
}

export default My404Component;
