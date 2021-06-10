import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/umd/popper';
import '@fortawesome/fontawesome-free/css/all.css';
import 'fontsource-roboto';
import Swal from 'sweetalert2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Login from './components/Auth/find';
import Register from './components/Auth/Register';
import Registertrial from './components/Auth/Register1';
import Login1 from './components/Auth/login1';
import Create from './components/Auth/registration';
// import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoute from './components/ProtectedRoute';

import Register1 from './components/Auth/registration1';
import Register2 from './components/Auth/registration2';
import Register3 from './components/Auth/registration3';

import MasterForm from './components/Auth/form';

import CreateWorkspace from './components/Profile';

import getStarted from './components/Auth/get-started';
import SignIn from './components/Auth/Sign-In';
import customRoutes from './components/customRoutes';

import My404Component from './components/404';
import NotFound from './components/NotFound';

import { Admin, Resource } from 'react-admin';

import Sidebar2 from './components/Main/Layout/index';
import ProfileUser from './components/Main/Profile';
import Analytics from './components/Main/analytics';
import Customize from './components/Main/customize';
import About from './components/Main/about';
import Configure from './components/Main/configure';
import Account from './components/Main/account';
import Dashboard from './components/Main/Dashboard';
import Billing from './components/Main/billing';
import Authentication from './components/Main/authentication';
import Deprecation from './components/Main/deprecation';
import User_groups from './components/Main/user_group';
import Support from './components/Main/support';
import Members from './components/Main/members';
import Invitations from './components/Main/invitations';
import Setting from './components/Main/settings_and_permissions';

import authProvider from './components/authProvider';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList } from './components/users';

import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

//chat app
// import chatApp from './components/chat/chat-app';
import Chat from './components/chat/Chat';
import chatApplication from './components/chat/chatApp3';
import Chat2 from './components/react-chat/chat2';
import JitsiMeetComponent from './components/react-chat/jitsi-meet';
import Main from './components/react-chat/main';
import Messaging from './components/react-chat/messaging';
import ChatBox from './components/react-chat/ChatBox';
import ChatBox2 from './components/react-chat/ChatBox2';
import Header from './components/react-chat/Header';
import Sidebar from './components/react-chat/Sidebar';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';




const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  // componentDidMount() {
  //   fetch('http://127.0.0.1:8000/api/test').then(function (response) {
  //     response.json().then(function (resp) {
  //       console.log(resp);
  //     });
  //   });
  // }
  state = { redirect: null };
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <div className="">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/register1" component={Registertrial} />
                <Route exact path="/login1" component={Login1} />
                <Route exact path="/find" component={Login} />
                <Route exact path="/get-started/find" component={Login} />
                <Route exact path="/signin" component={SignIn} />
                {/* <Route exact path="/get-started/create" component={Create} /> */}
                <Route exact path="/get-started" component={getStarted} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/get-workspace" component={Register1} />
                <Route exact path="/setup-channels" component={Register2} />
                <Route exact path="/go-to-channel" component={Register3} />
                <Route path="/profile" component={CreateWorkspace} />,
                <Route path="/get-started/create" component={Create} />,
                {/* <Route path="/chat" component={chatApp} />, */}
                <Route path="/chat2" component={Chat} />,
                <Route path="/chat3" component={chatApplication} />,
                <Route path="/newchat" component={Chat2} />,
                <Route path="/jitsi-meet" component={JitsiMeetComponent} />,
                <Route path="/main-video" component={Main} />,
                <Route path="/messaging" component={Messaging} />,
            
                <ProtectedRoute path="/home">
                  <Dashboard />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/ProfileUser">
                  <ProfileUser />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/account">
                  <Account />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/configure">
                  <Configure />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/stats">
                  <Analytics />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/customize">
                  <Customize />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/about">
                  <About />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/settings_and_permissions">
                  <Setting />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/members">
                  <Members />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/user_group">
                  <User_groups />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/invitations">
                  <Invitations />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/billing">
                  <Billing />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/authentication">
                  <Authentication />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/deprecation">
                  <Deprecation />
                </ProtectedRoute>
                ,
                <ProtectedRoute path="/support">
                  <Support />
                </ProtectedRoute>
                ,
                <Route path="*" component={NotFound} />,
                {/* <Route component={My404Component} /> */}
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
