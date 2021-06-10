import * as React from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import Swal from 'sweetalert2';
import axios from 'axios';

class MasterForm extends React.Component {
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
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, text, projectname, password } = this.state;

    const workspace = {
      email: this.state.email,
      text: this.state.text,
      projectname: this.state.projectname,
    };

    axios.post('http://localhost:8000/api/workspaces', workspace).then(
      (response) => {
        console.log(response);
        Swal.fire('Good job!', 'Workspace Added Successfully', 'success');
      },
      (error) => {
        console.log(error);
      }
    );
    // Swal.fire(
    //   'Good job!',
    //   'Workspace Added Successfully',
    //   'success'
    // )

    // Redirect to Workspace List
    // this.props.history.push('/');

    // alert(`Your registration detail: \n
    //          Email: ${email} \n
    //          workspace: ${text} \n
    //          projectname: ${projectname}`);

    this.setState({
      email: '',
      text: '',
      username: '',
      password: '',
      projectname: '',
    });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            {/* 
          render the form steps and pass required props in
        */}
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              text={this.state.text}
            />

            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              text={this.state.text}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              //   password={this.state.password}
            />
            {/* <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
            /> */}
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          {/* <form noValidate onSubmit={this.onSubmit}> */}
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
            id="email"
            required="required"
            placeholder="Enter Email"
            //   defaultValue={this.state.email}
            value={props.email}
            onChange={props.handleChange}
            // onChange={this.onChange}
            // error={errors.email}
            text="
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji."
          />
          <button type="submit" className="btn btn-md btn-primary btn-block">
            Confirm
          </button>
          {/* </form> */}
        </div>
      </div>

      {/* <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div> */}
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <div className="row align-items-center vh-100">
        <div className="col-md-6 mt-5 mx-auto ">
          {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
          <div className="text-left">
            <h1 className="h5 mb-2 font-weight-normal">
              What's the name of your company or team
            </h1>
          </div>
          <div className="text-left align-items-center ">
            <TextInputGroup
              name="text"
              type="text"
              required="required"
              placeholder="Eg. Acme or Acme Marketing"
              id="text"
              value={props.text}
              onChange={props.handleChange}
              //   defaultValue={this.state.text}
              //   onChange={this.onChange}
              // error={errors.text}
            />
            <button type="submit" className="btn btn-md btn-primary btn-block">
              Next
            </button>
            <p className="mt-3 text-left p-signin_form">
              By continuing you're agreeing to our
              <a href=""> Customer Terms of Service.</a>
              <br></br> <a href=""> Privacy Policy </a> and{' '}
              <a href="">Cookie Policy</a>
            </p>
          </div>
          {/* </form> */}
        </div>

        <div className="col-md-6 mt-0 bg-light mx-auto">
          <img src="img-hero-remote.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>

    // <div className="form-group">
    //   <label htmlFor="username">Username</label>
    //   <input
    //     className="form-control"
    //     id="username"
    //     name="username"
    //     type="text"
    //     placeholder="Enter username"
    //     value={props.username}
    //     onChange={props.handleChange}
    //   />
    // </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="row align-items-center vh-100">
        <div className="col-md-6 mt-5 mx-auto ">
          {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
          <div className="text-left">
            <h1 className="h5 mb-1 font-weight-normal">
              What's a project your team is working on?
            </h1>
          </div>
          <div className="text-left align-items-center ">
            <TextInputGroup
              name="projectname"
              type="text"
              required="required"
              placeholder="Eg. Tech"
              //   defaultValue={this.state.text}
              //   onChange={this.onChange}
              //   error={errors.email}
              value={props.projectname}
              onChange={props.handleChange}
            />
            <button type="submit" className="btn btn-md btn-primary btn-block">
              Next
            </button>
            {/* <p className="mt-3 text-left p-signin_form">
                  By continuing you're agreeing to our
                  <a href=""> Customer Terms of Service.</a>
                  <br></br> <a href=""> Privacy Policy </a> and{' '}
                  <a href="">Cookie Policy</a>
                </p> */}
          </div>
          {/* </form> */}
        </div>

        <div className="col-md-6 mt-0 bg-light mx-auto">
          {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
          <img src="img-hero-remote.jpg" className="img-fluid" alt="" />

          {/* </form> */}
        </div>
      </div>

      {/* <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button> */}
    </React.Fragment>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }

  // alert(`Your registration detail: \n
  //          Email: ${email} \n
  //          workspace: ${text} \n
  //          projectname: ${projectname}`);

  return (
    <React.Fragment>
      <div className="row align-items-center vh-100">
        <div className="col-md-6 mt-5 mx-auto ">
          {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
          <div className="text-left">
            <h1 className="h3 mb-3 font-weight-normal">
              Tada! Meet your team's first channel:
            </h1>

            <h5 className="text-muted h6 mb-2">
              You're leaving those unending email threads in the past. Channels
              give every project, topic, and team a dedicated space for all
              their messages and files.
            </h5>
          </div>
          <div className="text-left align-items-center ">
            {/* <TextInputGroup
                  name="text"
                  type="text"
                  required="required"
                  placeholder="Eg. Tech"
                  defaultValue={this.state.text}
                  onChange={this.onChange}
                  error={errors.email}
                /> */}
            {/* <button type="submit" className="btn btn-md btn-primary btn-block">
              See Your Channel in Slack
            </button> */}
            <button className="btn btn-success btn-block">
              See Your Channel in Our App
            </button>

            {/* <p className="mt-3 text-left p-signin_form">
                  By continuing you're agreeing to our
                  <a href=""> Customer Terms of Service.</a>
                  <br></br> <a href=""> Privacy Policy </a> and{' '}
                  <a href="">Cookie Policy</a>
                </p> */}
          </div>
          {/* </form> */}
        </div>

        <div className="col-md-6 mt-0 bg-light mx-auto">
          <img src="img-hero-remote.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

// function Step4(props) {
//   if (props.currentStep !== 4) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
// }

export default MasterForm;
