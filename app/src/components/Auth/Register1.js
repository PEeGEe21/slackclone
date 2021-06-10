import React, { Component, isValidElement } from 'react';
// import { register } from '../UserFunctions';
import axios from 'axios';
import Swal from 'sweetalert2';

const emailRegex = RegExp();

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class Registertrial extends Component {
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
      formErrors: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
    };
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    switch (name) {
      case 'first_name':
        formErrors.first_name =
          value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'last_name':
        formErrors.last_name =
          value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'password':
        formErrors.password =
          value.length < 6 && value.length > 0
            ? 'minimum 6 characters required'
            : '';
        break;
      default:
        break;
    }
    
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.first_name + '' + this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    if (formValid(this.state.formErrors)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.first_name}
      Last Name: ${this.state.last_name}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }

    // (newUser).then((res) => {
    //   this.props.history.push(`/`);
    // });
    // const register = (newUser) => {

    Swal.fire({
      title: 'Are you sure?',
      text: 'User will have Admin Privileges',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then(
      axios
        .post('http://localhost:8000/api/register', newUser, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(
          (response) => {
            console.log(response);
            // this.props.history.push(`login1`);
          },
          (error) => {
            console.log(error);
          }
        )
    );

    // Swal.fire('Good job!', 'You have successfully registered', 'success');

    this.setState({ name: '', email: '', password: '' });
    // console.log(this.state);
    //  fetch('http://127.0.0.1:8000/api/register', {
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
  };

  render() {
    // const { first_name, last_name, email, password } = this.state;
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>

              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter First Name"
                  defaultValue={this.state.first_name}
                  onChange={this.onChange}
                />
                {formErrors.first_name.length > 0 && (
                  <span className="errorMessage">{formErrors.first_name}</span>
                )}
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
                />
                {formErrors.first_name.length > 0 && (
                  <span className="errorMessage">{formErrors.last_name}</span>
                )}
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
                />
                {formErrors.first_name.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
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
                {formErrors.first_name.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
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

export default Registertrial;
