import React, { Component } from 'react';
import axios from 'axios';
// import { login } from '../UserFunctions';

class Login1 extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

  


    // fetch('http://127.0.0.1:8000/api/login', {
    //   method: 'post',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then(function (response) {
    //   response.json().then(function (resp) {
    //     console.log(resp);
    //   });
    // });

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    // axios.post('http://localhost:8000/api/login', user).then((response) => {
    //  if (response) {
    //     this.props.history.push(`/profile`);
    //   } 
    //   console.log(response);
    //   // this.props.history.push(`/login1`);
    // }, (error) => {
    //   console.log(error);
    // });

     axios.post('http://localhost:8000/api/login',
      {
        email: user.email,
        password: user.password,
      },
      {
        // headers: { 'Content-Type': 'application/json' }
        headers: { Authorization: "Basic {secret_key}" },
      }
    ).then( async response => {
      localStorage.setItem('usertoken', JSON.stringify(response.data));

      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    // login(user).then((res) => {
    //   if (res) {
    //     this.props.history.push(`/profile`);
    //   }
    // });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Let's find your team
              </h1>
              <p className="h6 text-muted">
                Start by choosing the Google account or email you use for work
              </p>
              <div className="form-group">
                <button className="btn btn-outline-primary">
                  <i className="fa fa-Google"></i>
                  {''} Continue with Google
                </button>
                <p>OR</p>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  defaultValue={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  defaultValue={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-md btn-primary btn-block" 
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login1;
