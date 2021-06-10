import * as React from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import { Button} from 'react-bootstrap';

// import circleLoader from '../circleLoader';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
// import Navbar from '../../components/Navbar';

class Register1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentStep: 1,
      // email: '',
      id: '',
      title: '',
      isLoading: false,
      msg: '',
      user: JSON.parse(localStorage.getItem("user")),
      // username: '',
      // password: '',
      // projectname: '',
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
    this.setState({ isLoading: true });
    const { email, title, username, text, projectname, password } = this.state;

    const workspace = {
      title: this.state.title,
      // user_id: localStorage.getItem('user').id.toString(),
      user_id: this.state.user.id,
    };

    axios.post('http://localhost:8000/api/storeWorkspace', workspace).then(
      (response) => {
        console.log(response);
        // this.setState({ isLoading: false });
        // var id = response.data.workspace.id;
        // // localStorage.setItem('workspace_id', id);
        // localStorage.setItem('workspace', response.data.workspace);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('workspace', JSON.stringify(response.data.workspace));

        setTimeout(() => {
          this.setState({ isLoading: true });
        }, 2000);
        this.props.history.push({
          pathname: '/setup-channels',
          // search: '?query=setup-channels',
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

  // axios.post('http://localhost:8000/api/storeWorkspace', workspace).then(
  //   (response) => {
  //     console.log(response);
  //     this.setState({ isLoading: false });

  //     // console.log(response.data.workspace.id);
  //     var id = response.data.workspace.id;
  //     localStorage.setItem('workspace_id', id);
  //   },
  //   (error) => {
  //     this.setState({ isLoading: false });
  //     console.log(error);
  //   }
  // );

  // //console.log(isLoading);

  // this.setState({
  //   title: '',
  // });
  // this.props.history.push({
  //   pathname: '/setup-channels',
  //   search: '?query=setup-channels',
  // });

  //this.props.history.push('/get-project');

  render() {
    // const { errors } = this.state;
    // console.log(localStorage.getItem('user_id').toString());
    const isLoading = this.state.isLoading;

    return (
      <div>
        {/* <Navbar /> */}
        <div className="container">
          <div className="row align-items-center vh-100">
            <div className="col-md-6 mt-5 mx-auto ">
              {/* <form noValidate onSubmit={this.onSubmit} className="reg-1 "> */}
              <form onSubmit={this.handleSubmit}>
                <div className="text-left">
                  <h1 className="h5 mb-2 font-weight-normal">
                    What's the name of your company or team
                  </h1>
                </div>
                <div className="text-left align-items-center ">
                  <TextInputGroup
                    name="title"
                    type="text"
                    required="required"
                    placeholder="Eg. Acme or Acme Marketing"
                    id="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <p className="text-white">{this.state.msg}</p>
                  <Button 
                    className="btn btn-md btn-primary btn-block text-center mb-4"
                    color="success" 
                    // type="submit"
                    onClick={this.handleSubmit}
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
                  </Button>
                  <p className="mt-3 text-left p-signin_form">
                    By continuing you're agreeing to our
                    <a href=""> Customer Terms of Service.</a>
                    <br></br> <a href=""> Privacy Policy </a> and{' '}
                    <a href="">Cookie Policy</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="col-md-6 mt-0 bg-light mx-auto">
              <img src="img-hero-remote.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register1;

{
  /* <div className="row align-items-center vh-100">
          <div className="col-md-6 mt-5 mx-auto ">
            
            <form noValidate onSubmit={this.onSubmit} className="reg-1 ">
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
                  defaultValue={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary btn-block"
                >
                  Next
                </button>
                <p className="mt-3 text-left p-signin_form">
                  By continuing you're agreeing to our
                  <a href=""> Customer Terms of Service.</a>
                  <br></br> <a href=""> Privacy Policy </a> and{' '}
                  <a href="">Cookie Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="col-md-6 mt-0 bg-light mx-auto">
            <img src="img-hero-remote.jpg" class="img-fluid" alt="" />
          </div>
        </div>
       */
}
