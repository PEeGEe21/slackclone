import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken'); 
    this.props.history.push(`/`);
  }





  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Launch App
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <a href="/login" className="dropdown-item">
                Sign into another workspace
              </a>
              <a href="/register" className="dropdown-item">
                create a new workspace
              </a>

              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="\profile" className="nav-link">
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            LogOut
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li> */}

              <li className="nav-item">
                <a href="" className="nav-link">
                  Why Our App?
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Enterprise
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Launch App
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <a href="/get-started/create" className="dropdown-item">
                      create a new workspace
                    </a>

                    <a href="/find" className="dropdown-item">
                      Sign into your workspace
                    </a>

                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            {/* {localStorage.usertoken ? userLink : loginRegLink} */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
