import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="h5 lined text-white mb-4">About</h2>
            <p className="text-muted text-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-muted text-small">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link className="social-link" to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <a className="social-link" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link" href="#">
                  <i className="fab fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-2 mb-4 mb-lg-0">
            <h2 className="h5 text-white lined mb-4">Quick Links</h2>
            <div className="d-flex">
              <ul className="list-unstyled d-inline-block mr-4 mb-0">
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="">
                    Security
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Trust
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Customer Stories
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Our App Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 mb-4 mb-lg-0">
            <h2 className="h5 text-white lined mb-4">Our App FOR TEAMS</h2>
            <div className="d-flex">
              <ul className="list-unstyled d-inline-block mb-0">
                <li className="mb-2">
                  <a className="footer-link" href="index.html">
                    Engineering
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="about.html">
                    Financial Services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="contact.html">
                    Sales
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    IT
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Customer Support
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Human Resources
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Project Management
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Media
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 mb-4 mb-lg-0">
            <h2 className="h5 text-white lined mb-4">RESOURCES</h2>
            <div className="d-flex">
              <ul className="list-unstyled d-inline-block mb-0">
                <li className="mb-2">
                  <a className="footer-link" href="index.html">
                    Resources Library
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="about.html">
                    Our App Tips
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="contact.html">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Events
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Our App Certified Program
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    API
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    App Directory
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Download Our App
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 mb-4 mb-lg-0">
            <h2 className="h5 text-white lined mb-4">COMPANY</h2>
            <div className="d-flex">
              <ul className="list-unstyled d-inline-block mb-0">
                <li className="mb-2">
                  <a className="footer-link" href="index.html">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="about.html">
                    Leadership
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="contact.html">
                    News{' '}
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Media Kit
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="footer-link" href="#">
                    Our App Swag Store
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div class="c-nav--footer__legal">
            <div class="o-content-container">
              <span>
                {' '}
                © Copyright 2020 Slack Technologies, Inc. All rights reserved.
                Various trademarks held by their respective owners.
              </span>
            </div>
          </div> */}

          {/* <div className="copyrights">
            <div className="container">
              <div className="text-center py-4">
                <p className="text-center mb-0 text-muted">
                  &copy;{' '}
                  <script>document.write(new Date().getFullYear());</script>
                  ,&nbsp;My App. Designed by <a href="#">SpaceFlex</a>.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="text-center py-4">
            <p className="text-center mb-0 text-muted">
              &copy; {new Date().getFullYear()} {''}My App. Designed by{' '}
              <a href="#">Meeee</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default withRouter(Footer);
