import React, { Component, useState, useEffect } from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import { Spinner } from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';

function validateEmail(email) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

function UserTable() {}

class Create extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      id: '',
      isLoading: false,
      errors: {},
      errormessages: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { email, id } = this.state;

    const userEmail = {
      email: this.state.email,
      id: this.state.id,
    };

    axios.post('http://localhost:8000/api/storeUserEmail', userEmail).then(
      (response) => {
        console.log(response);
        // var user = response.data.user;
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('isLoggedIn', true);

        // localStorage.setItem('user', user);
        setTimeout(() => {
          this.setState({ isLoading: true });
        }, 2000);

        this.props.history.push({
          pathname: '/get-workspace',
          // search: '?query=get-workspace',
        });
      },
      (error) => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
        console.log(error);
      }
    );
  };

  // axios.post('http://localhost:8000/api/storeUserEmail', userEmail).then(
  //   (response) => {
  //     console.log(response);
  //     // this.setState({ isLoading: false });
  //     var id = response.data.workspace.id;
  //     localStorage.setItem('workspace_id', id);
  //     setTimeout(() => {
  //       this.setState({ isLoading: true });
  //     }, 2000);
  //     this.props.history.push({
  //       pathname: '/setup-channels',
  //       search: '?query=setup-channels',
  //     });
  //   },
  //   (error) => {
  //     setTimeout(() => {
  //       this.setState({ isLoading: false });
  //     }, 2000);
  //     console.log(error);
  //   }
  // );

  // axios.post('http://localhost:8000/api/storeUserEmail', userEmail).then(
  //   (response) => {
  //     console.log(response);
  //     // console.log(response.data.user.id);
  //     var id = response.data.user.id;
  //     localStorage.setItem('user_id',id);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  // this.setState({
  //   email: '',
  // });

  // this.props.history.push({
  //   pathname: '/get-workspace',
  //   search: '?query=get-workspace',
  //   state: { data: id },
  // });
  // this.props.history.push('/get-workspace');

  render() {
    const { errors } = this.state;
    const isLoading = this.state.isLoading;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
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
                value={this.state.email}
                onChange={this.handleChange}
                text="
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji."
              />
              <button
                type="submit"
                className="btn btn-md btn-primary btn-block"
              >
                Confirm
                {isLoading ? (
                  <span className="ml-3">
                    <Spinner
                      animation="border"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <span></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
