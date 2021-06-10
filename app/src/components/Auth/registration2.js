import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from '../../layout/TextInputGroup';
import classnames from 'classnames';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentStep: 1,
      // email: '',
      title: '',
      isLoading: false,
      // username: '',
      // password: '',
      // projectname: '',
      user: JSON.parse(localStorage.getItem('user')),
      workspace: JSON.parse(localStorage.getItem('workspace')),
      errors: {},
    };
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { email, title, username, text, projectname, password } = this.state;

    const project = {
      title: this.state.title,
      // workspace_id:localStorage.getItem('user_id').toString(),
      workspace_id: this.state.workspace.id,
      user_id: this.state.user.id,
    };
    

    axios.post('http://localhost:8000/api/storeProject', project).then(
      (response) => {
        console.log(response);
        localStorage.setItem(
          'workspace',
          JSON.stringify(response.data.workspace)
        );

        // this.setState({ isLoading: false });
        setTimeout(() => {
          this.setState({ isLoading: true });
        }, 2000);
        this.props.history.push({
          pathname: '/go-to-channel',
          // search: '?query=go-to-channel',
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

  //   axios.post('http://localhost:8000/api/storeProject', project).then(
  //     (response) => {
  //       console.log(response);
  //       // Swal.fire('Good job!', 'Workspace Added Successfully', 'success');
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   this.setState({
  //     email: '',
  //     title: '',
  //     username: '',
  //     password: '',
  //     projectname: '',
  //   });

  //   this.props.history.push('/go-to-channel');
  // };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { errors } = this.state;
    const isLoading = this.state.isLoading;
    // const info = localStorage.getItem('workspace_info').toString();

    return (
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-md-6 mt-5 mx-auto ">
            {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
            <form onSubmit={this.handleSubmit}>
              <div className="text-left">
                <h1 className="h5 mb-1 font-weight-normal">
                  What's a project your team is working on?
                </h1>
              </div>
              <div className="text-left align-items-center ">
                <TextInputGroup
                  name="title"
                  type="text"
                  required="required"
                  placeholder="Eg. Tech"
                  //   defaultValue={this.state.text}
                  //   onChange={this.onChange}
                  //   error={errors.email}
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary btn-block"
                >
                  Next
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
                {/* <p className="mt-3 text-left p-signin_form">
                  By continuing you're agreeing to our
                  <a href=""> Customer Terms of Service.</a>
                  <br></br> <a href=""> Privacy Policy </a> and{' '}
                  <a href="">Cookie Policy</a>
                </p> */}
              </div>
            </form>
          </div>

          <div className="col-md-6 mt-0 bg-light mx-auto">
            {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
            <img src="img-hero-remote.jpg" className="img-fluid" alt="" />

            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Register2;
