import React, { Component } from 'react';
import { register } from '../UserFunctions';
import TextInputGroup from '../../layout/TextInputGroup';
import classnames from 'classnames';

class Register extends Component {
  // state = {
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  // };
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };




  

  onSubmit = (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, errors } = this.state;

    if (first_name === '') {
      this.setState({ errors: { first_name: 'First Name is required' } });
      return;
    }

    if (last_name === '') {
      this.setState({ errors: { last_name: 'Last Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }

    const newUser = {
      name: this.state.first_name + '' + this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      this.props.history.push(`/register`);
    });

    // Clear State
    // this.setState({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   errors: {},
    // });
  };

  render() {
    // const { first_name, last_name, email, password, errors } = this.state;
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>

              <TextInputGroup
                label="First Name"
                name="first_name"
                placeholder="Enter First Name"
                defaultValue={this.state.first_name}
                onChange={this.onChange}
                error={errors.first_name}
              />

              <TextInputGroup
                label="Last Name"
                name="Last_name"
                placeholder="Enter Last Name"
                defaultValue={this.state.last_name}
                onChange={this.onChange}
                error={errors.last_name}
              />

              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                defaultValue={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextInputGroup
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Password"
                defaultValue={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />

              {/* <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className={classnames('form-control', {
                    'is-invalid': errors,
                  })}
                  name="first_name"
                  placeholder="Enter First Name"
                  defaultValue={this.state.first_name}
                  onChange={this.onChange}
                  error={errors.first_name}
                />
                {error && <div className="invalid-feedback">{error}</div>}
              </div>

                

              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter Last Name"
                  defaultValue={this.state.last_name}
                  onChange={this.onChange}
                  error={errors.last_name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  defaultValue={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
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
                  error={errors.password}
                />
              </div>
              */}

              <button
                type="submit"
                className="btn btn-md btn-primary btn-block"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
