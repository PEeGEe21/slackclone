import React, { Component } from 'react';
import Sidebar from './Layout/index';
import { FaUser } from 'react-icons/fa';
export default class Account extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
          <div id="page_contents">
            {/* <h1>
              <FaUser className="mr-3 seafoam_green icon mb-3" />
              Account
            </h1> */}

            <h1 className="mb-4">
              <i className="fa fa-user seafoam_green mr-3"></i>Account
            </h1>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-toggle="tab"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>

              <li className="nav-item ml-auto">
                <a
                  className="nav-link"
                  id="access-tab"
                  data-toggle="tab"
                  href="#access"
                  role="tab"
                  aria-controls="access"
                  aria-selected="false"
                >
                  Access Logs
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          1. What is HTML?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          HTML stands for HyperText Markup Language. HTML is the
                          standard markup language for describing the structure
                          of web pages.{' '}
                          <a
                            href="https://www.tutorialrepublic.com/html-tutorial/"
                            target="_blank"
                          >
                            Learn more.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                        >
                          2. What is Bootstrap?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Bootstrap is a sleek, intuitive, and powerful
                          front-end framework for faster and easier web
                          development. It is a collection of CSS and HTML
                          conventions.{' '}
                          <a
                            href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                            target="_blank"
                          >
                            Learn more.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          3. What is CSS?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          CSS stands for Cascading Style Sheet. CSS allows you
                          to specify various style properties for a given HTML
                          element such as colors, backgrounds, fonts etc.{' '}
                          <a
                            href="https://www.tutorialrepublic.com/css-tutorial/"
                            target="_blank"
                          >
                            Learn more.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                notifications
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Profile
              </div>

              <div
                className="tab-pane fade"
                id="access"
                role="tabpanel"
                aria-labelledby="access-tab"
              >
                Access log
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }
}
// function account() {
//   return (
//     <div>
//       <Sidebar>
//         {/* <div className="account_tab_set tab_set on_neutral_grey">
//           <a href="/account/settings" className="selected">

//           </a>
//           <a href="/account/notifications"></a>
//           <a href="/account/profile"></a>
//           <a href="/account/logs" className="secondary ">

//           </a>
//           <i className="tab_caret ts_icon ts_icon_caret_down"></i>
//           <i className="tab_caret ts_icon ts_icon_caret_up"></i>
//         </div> */}
//         <h3 className="mb-4">
//           <i className="fa fa-user seafoam_green mr-3"></i>Account
//         </h3>
//         <ul className="nav nav-tabs" id="myTab" role="tablist">
//           <li className="nav-item">
//             <a
//               className="nav-link active"
//               id="home-tab"
//               data-toggle="tab"
//               href="#home"
//               role="tab"
//               aria-controls="home"
//               aria-selected="true"
//             >
//               Settings
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               id="notification-tab"
//               data-toggle="tab"
//               href="#notification"
//               role="tab"
//               aria-controls="notification"
//               aria-selected="false"
//             >
//               Notifications
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               id="profile-tab"
//               data-toggle="tab"
//               href="#profile"
//               role="tab"
//               aria-controls="profile"
//               aria-selected="false"
//             >
//               Profile
//             </a>
//           </li>

//           <li className="nav-item ml-auto">
//             <a
//               className="nav-link"
//               id="access-tab"
//               data-toggle="tab"
//               href="#access"
//               role="tab"
//               aria-controls="access"
//               aria-selected="false"
//             >
//               Access Logs
//             </a>
//           </li>
//         </ul>

//         <div className="tab-content">
//           <div
//             className="tab-pane fade show active"
//             id="home"
//             role="tabpanel"
//             aria-labelledby="home-tab"
//           >
//             <div id="change_password" className="accordion">
//               <button
//                 className="accordion_expand btn btn_outline "
//                 onclick=""
//                 tabindex="0"
//               >
//                 expand
//               </button>
//               <h4>
//                 <a onclick="">Password</a>
//               </h4>
//               <div
//                 className="accordion_subsection top_margin"
//                 style={{ display: 'none' }}
//               >
//                 <form
//                   action="/account/settings"
//                   method="post"
//                   accept-charset="UTF-8"
//                   className="col span_1_of_2"
//                 >
//                   <input type="hidden" name="change_password" value="1" />
//                   <input
//                     type="hidden"
//                     name="crumb"
//                     value="s-1600422501-62090212a57c96ba323aae930c08443c2911012ff3f1a4ea28f63a633fa8cead-☃"
//                   />
//                   <p className="small_bottom_margin">
//                     <label for="old_password">Current Password</label>
//                     <input
//                       type="password"
//                       id="old_password"
//                       name="old_password"
//                       value=""
//                     />
//                   </p>
//                   <p className="large_bottom_margin">
//                     <label for="password">New Password</label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       value=""
//                     />
//                   </p>
//                   <p>
//                     <button
//                       type="submit"
//                       className="btn ladda-button"
//                       data-style="expand-right"
//                     >
//                       <span className="ladda-label">Save Password</span>
//                     </button>
//                   </p>
//                 </form>
//                 <div className="clear_both"></div>
//                 <form
//                   action="/account/settings"
//                   method="post"
//                   accept-charset="UTF-8"
//                 >
//                   <input type="hidden" name="reset_password" value="1" />
//                   <input
//                     type="hidden"
//                     name="crumb"
//                     value="s-1600422501-62090212a57c96ba323aae930c08443c2911012ff3f1a4ea28f63a633fa8cead-☃"
//                   />
//                   <p>
//                     <span className="small_right_margin">
//                       Can't remember your current password?
//                     </span>
//                     <button type="submit" className="btn btn_small btn_outline">
//                       Reset your password by email
//                     </button>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div
//             className="tab-pane fade"
//             id="notification"
//             role="tabpanel"
//             aria-labelledby="notification-tab"
//           >
//             notifications
//           </div>
//           <div
//             className="tab-pane fade"
//             id="profile"
//             role="tabpanel"
//             aria-labelledby="profile-tab"
//           >
//             Profile
//           </div>

//           <div
//             className="tab-pane fade"
//             id="access"
//             role="tabpanel"
//             aria-labelledby="access-tab"
//           >
//             Access log
//           </div>
//         </div>
//       </Sidebar>
//     </div>
//   );
// }

// export default account;
