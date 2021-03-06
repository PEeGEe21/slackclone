import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      msg: '',
      isLoading: false,
      redirect: false,
      errMsgEmail: '',
      errMsg: '',
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    console.log('look at me');

    axios
      .post('http://localhost:8000/api/sign-in', {
        email: this.state.email,
      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 'true') {
          localStorage.setItem('isLoggedIn', true);
          // localStorage.setItem('userData', response.data.details.email);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('workspace', JSON.stringify(response.data.workspace));
          console.log(response.data);
          this.setState({
            msg: response.data.message,
            redirect: true,
          });
        }
        if (
          response.data.status === 'failed' &&
          response.data.success === undefined
        ) {
          this.setState({
            errMsgEmail: response.data.validation_error.email,
          });
          setTimeout(() => {
            this.setState({ errMsgEmail: '', errMsgPwd: '' });
          }, 2000);
        } else if (
          response.data.status === 'failed' &&
          response.data.success === false
        ) {
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: '' });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == true) {
      return <Redirect to="/home" />;
    }
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    const isLoading = this.state.isLoading;
    return (
      <div>
        <div className="container">
          <div className="row login_box">
            <div className="col-md-6 mt-5 mx-auto">
              <form
                noValidate
                onSubmit={this.onSignInHandler}
                className="login-form"
              >
                <div className="text-center align-items-center">
                  <h1 className="display-4 mb-3 font-weight-normal">
                    Let's find your team
                  </h1>
                  <p className="h6 text-muted">
                    Start by choosing the Google account or email you use for
                    work
                  </p>
                </div>
                <div className="text-center align-items-center px-5">
                  <button className="mt-4 btn btn-outline-primary btn-block">
                    <i className="fa fa-Google"></i>
                    <span className="img-fluid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        style={{ height: '20px', lineHeight: '1px' }}
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                        <path fill="none" d="M0 0h48v48H0z" />
                      </svg>
                    </span>
                    {''} Continue with Google
                  </button>
                  <span className="my-4 heading">OR</span>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChangehandler}
                    />
                    <span className="text-left text-danger ">
                      {this.state.msg}
                    </span>
                    <span className="text-left text-danger ">
                      {this.state.errMsgEmail}
                    </span>
                  </div>
                  <p className="text-danger text-left">{this.state.errMsg}</p>
                  {/* <button type="submit" className=""></button> */}

                  <Button
                    className="btn btn-md btn-primary btn-block text-center mb-4"
                    color="success"
                    // type="submit"
                    onClick={this.onSignInHandler}
                  >
                    Continue with Email
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm ml-5"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import { login } from '../UserFunctions';

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       errors: {},
//     };
//     // this.onChange = this.onChange.bind(this);
//     // this.onChange = this.onSubmit.bind(this);
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);

//     fetch('http://127.0.0.1:8000/api/register', {
//       method: 'post',
//       body: JSON.stringify(this.state),
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     }).then(function (response) {
//       response.json().then(function (resp) {
//         console.log(resp);
//       });
//     });

//     const user = {
//       email: this.state.email,
//       password: this.state.password,
//     };

//     login(user).then((res) => {
//       if (res) {
//         this.props.history.push(`/profile`);
//       }
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="row login_box">
//           <div className="col-md-6 mt-5 mx-auto">
//             <form noValidate onSubmit={this.onSubmit} className="login-form">
//               <div className="text-center align-items-center">
//                 <h1 className="display-4 mb-3 font-weight-normal">
//                   Let's find your team
//                 </h1>
//                 <p className="h6 text-muted">
//                   Start by choosing the Google account or email you use for work
//                 </p>
//               </div>
//               <div className="text-center align-items-center px-5">
//                 <button className="mt-4 btn btn-outline-primary btn-block">
//                   <i className="fa fa-Google"></i>
//                   <span className="img-fluid" >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{height:'20px', lineHeight:'1px'}}>
//                       <path
//                         fill="#EA4335"
//                         d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
//                       />
//                       <path
//                         fill="#4285F4"
//                         d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
//                       />
//                       <path
//                         fill="#FBBC05"
//                         d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
//                       />
//                       <path
//                         fill="#34A853"
//                         d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
//                       />
//                       <path fill="none" d="M0 0h48v48H0z" />
//                     </svg>
//                   </span>
//                   {''} Continue with Google
//                 </button>
//                 <span className="my-4 heading">OR</span>

//                 <div className="form-group">
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     placeholder="Enter Email"
//                     defaultValue={this.state.email}
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-md btn-primary btn-block"
//                 >
//                   Continue with Email
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
