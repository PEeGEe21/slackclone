import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

import './Sidebar.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SidebarOption from './SidebarOption';
import SimpleMenu from './menu';
import QuestionMenu from './question-menu';
import SidebarOption2 from './SidebarOption2';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FiEdit } from 'react-icons/fi';
import { data } from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Echo from 'laravel-echo';

const api = axios.create({
  baseURL: `http://localhost:8000/api`,
});



// const options = {
//   broadcaster: 'pusher',
//   key: 'ac1f7ab3d4689ef9a6c5',
//   // wsHost: '45.149.78.4',
//   // wsPort: 6001,
//   disableStats: true,
//   // authEndpoint: 'http://xxx.xxx.net/broadcasting/auth',
//   // auth: {
//   //     headers: {
//   //         // Authorization: `Bearer ${token}`,
//   //         Accept: 'application/json'
//   //     }
//   // }
// };

// const options = {
//   broadcaster: 'pusher',
//   key: 'rapio1',
  // wsHost: '45.149.78.4',
  // wsPort: 6001,
  // host: 'http://backend.rapio',
  // authEndpoint: 'http://backend.rapio/broadcasting/auth',
  // auth: {
    // headers: {
      // Authorization: `Bearer ${token}`,
      // Accept: 'application/json',
    // },
  // }
  // encrypted: true
// };

// const echo = new Echo(options);

class Sidebar extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      channels: [],
      users: [],
      id: '',
      Open: false,
      channelsData: [],
      usersData: [],
      user: JSON.parse(localStorage.getItem('user')),
      workspace: JSON.parse(localStorage.getItem('workspace')),
      itemsToShow: 0,
      usersToShow: 0,
      expanded: false,
      userExpanded: false,
    };

    this.showMore = this.showMore.bind(this);
    this.showMoreUsers = this.showMoreUsers.bind(this);
  }

  onHandleOpen = () => {
    this.setState({
      open: true,
    });
  };

  onHandleClose = () => {
    this.setState({
      open: false,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const channels = {
      channel: this.state.channels,
      // user_id: localStorage.getItem('user_id').toString()
    };
  }



  componentDidMount() {
    setInterval(() => {
      
      const channels = {
        channel: this.state.channels,
      };
      
      axios
        .get(
          'http://localhost:8000/api/channels/' + this.state.workspace.id,
          channels
        )
        .then(
          (response) => {
            this.setState({
              channelsData: response.data,
            });
          },
          (error) => {
            console.log(error);
          }
        );
       
      }, 3000);
    // this.getChannels();
    // this.getusers();
  //  echo.channel('channel.1')
  //       .listen('NewChannel', (e) => {
  //          console.log(e);
  //         // this.channel.unshift(channel);
  //   });
    this.getusers();
    this.showMoreUsers();
    this.showMore();
  }


  // getChannels() {
  //   const channels = {
  //     channel: this.state.channels,
  //   };
    
  //   axios
  //     .get(
  //       'http://localhost:8000/api/channels/' + this.state.workspace.id,
  //       channels
  //     )
  //     .then(
  //       (response) => {
  //         this.setState({
  //           channelsData: response.data,
  //         });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //     }

  getusers() {
    const users = {
      user: this.state.users,
    };

    axios
      .get('http://localhost:8000/api/users', users)
      // .get('http://localhost:8000/api/users/' + this.state.workspace.id, users)
      .then((response) => {
        this.setState({
          usersData: response.data.users,
        });

        console.log(response.data.users);
      })
      .catch((error) => {
        console.log('Error');
      });
  }

  // listen(e) {
  //   Echo.channel('channel.'+this.state.workspace.id)
  //       .listen('NewChannel', (channel) => {
  //          console.log(channel);
  //         // this.channel.unshift(channel);
  //       })
  // }

  // listen(){

  //   window.Echo.channel('channels').listen('NewChannel', (channel) =>{
  //     console.lo('doneeee')
  //   })
  // }

  // DataTable() {
  //   {
  //     this.state.channelsData
  //       .slice(0, this.state.itemsToShow)
  //       .map((response, i) => (
  //         <li key={i}>
  //           {response.channel}
  //           {response.id}
  //         </li>
  //       ));
  //   }
  // }
  showMore() {
    this.state.itemsToShow === 1
      ? this.setState({
          itemsToShow: this.state.channelsData.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 1, expanded: false });
  }

  showMoreUsers() {
    this.state.usersToShow === 4
      ? this.setState({
          usersToShow: this.state.usersData.length,
          userExpanded: true,
        })
      : this.setState({ usersToShow: 4, userExpanded: false });
  }

  // DataTable() {
  //   if (this.state.usersData.length > 0) {
  //     return this.state.usersData.map((response, index) => {
  //       // console.log(response)
  //       return (
  //         <SidebarOption
  //           obj={response}
  //           key={response.id}
  //           name={response.email}
  //           id={response.id}
  //         />
  //       );
  //     });
  //   }
  // }

  render() {
    // const classes = useStyles();
    const { open } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));
    const workspace = JSON.parse(localStorage.getItem('workspace'));

    // const [open, setOpen] = useState(false);

    return (
      <div className="chat_sidebar">
        <div className="sidebar_header">
          <div className="sidebar_info">
            <h2>{workspace.title}</h2>
            <h3>
              <FiberManualRecordIcon />
              {user.name ? user.name : user.email}
            </h3>
          </div>

          {/* <FiEdit className="fiEdit"/> */}
          <CreateIcon />
        </div>
        {/* <PerfectScrollbar> */}
          <SidebarOption Icon={FileCopyIcon} title="Drafts" />
          <SimpleMenu />
          {/* 
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved Items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File brow     ser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" /> */}
          <hr />
          <a
            className="btn sidebarOption d-flex justify-content-between"
            onClick={this.showMore}
            title="Channels"
          >
            {this.state.expanded ? (
              <span>
                {' '}
                <ArrowDropDownIcon /> Channels
              </span>
            ) : (
              <span>
                {' '}
                <ArrowRightIcon /> Channels
              </span>
            )}

            <span title="Add Channel" className="add_button">
              <AddIcon/>
            </span>
          </a>
          <div className="users channel_hash">
            {this.state.channelsData
              .slice(0, this.state.itemsToShow)
              .map((response, i) => (
                <SidebarOption
                  obj={response}
                  key={response.id}
                  title={response.channel}
                  id={response.id}
                />
              ))}
          </div>
          <hr />

          {/* <SidebarOption Icon={ExpandMoreIcon} title="Direct messages" /> */}

          <a
            className="btn sidebarOption"
            onClick={this.showMoreUsers}
            title="Direct messages"
          >
            {this.state.userExpanded ? (
              <span>
                {' '}
                <ArrowDropDownIcon /> Direct messages
              </span>
            ) : (
              <span>
                {' '}
                <ArrowRightIcon /> Direct messages
              </span>
            )}
          </a>
          <div className="users">
            {this.state.usersData
              .slice(0, this.state.usersToShow)
              .map((response, i) => (
                <SidebarOption2
                  obj={response}
                  key={response.id}
                  title={response.name ? response.name : response.email}
                  id={response.id}
                />
                // <SidebarOption2
                //   obj={response}
                //   key={response.user.id}
                //   title={response.user.name ? response.user.name : response.user.email}
                //   id={response.user.id}
                // />
              ))}
          </div>

          <hr />
          <SidebarOption
            Icon={AddIcon}
            addChannelOption
            title="Add Channel"
            onClick={this.onHandleOpen}
          />

          {/* <SidebarOption
          Icon={ExpandMoreIcon}
          title="Channels"
          onClick={this.showMore}
        /> */}
        {/* </PerfectScrollbar> */}
      </div>
    );
  }
}

export default Sidebar;
