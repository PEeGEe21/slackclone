import React, { useState } from 'react';
import './SidebarOption.css';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from 'react-bootstrap';
import { FiHash } from 'react-icons/fi';

import Echo from 'laravel-echo'
import pusher from 'pusher-js'

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState();

  const history = useHistory();
  const { roomId } = useParams();

  const selectChannel = () => {
    if (id) {
      console.log(id);
      // history.push(`/newchat/${id}`);
      window.location.replace(`/newchat/${id}`);
    } else {
      window.location.replace(title);
    }
  };


// const token = window.localStorage.getItem('access_token');


// const options = {
//     broadcaster: 'pusher',
//     key: 'ac1f7ab3d4689ef9a6c5',
//     wsHost: '45.149.78.4',
//     wsPort: 6001,
//     disableStats: true,
//     authEndpoint: 'http://xxx.xxx.net/broadcasting/auth',
//     auth: {
//         headers: {
//             // Authorization: `Bearer ${token}`,
//             Accept: 'application/json'
//         }
//     }
// };

// const echo = new Echo(options);


// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'c24075c7da33a453cb16',
//     cluster: 'eu',
//     encrypted: true
// });

  // const selectChannel = () => {
  //   if (id) {
  //     console.log(id);
  //     history.push(`/newchat/${id}`);
  //   } else {
  //     history.push(title);
  //   }
  // };

  const addChannel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  //   const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  //   const addChannel = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const addChannel = () => {
  //     const channelName = prompt('Please enter the channel name');
  //     if (roomId) {
  //       axios.post('http://localhost:8000/api/channels', channels).then(
  //         (response) => {
  //           console.log(response.data);
  //           // var channel = response.data.channel;
  //           setChannels({
  //             channelsData: response.data,
  //           });

  //           // localStorage.setItem('user_id', id);
  //         },

  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   };

  // const workspace = {
  //   title: this.state.title,
  //   user_id: localStorage.getItem('user_id').toString(),
  // };

  const [channel, setChannel] = useState('');
  const workspace = JSON.parse(localStorage.getItem('workspace'));

  // const newChannel = {
  //     name: this.state.first_name + '' + this.state.last_name,
  //     email: this.state.email,
  //     password: this.state.password,
  //   };

  // const addItem = event => {
  //   event.preventDefault();
  //   setItems([
  //     ...items,
  //     {
  //       id: items.length,
  //       name: itemName
  //     }
  //   ]);
  //   setItemName("");
  // };

  const onSubmit = (event) => {
    // event.preventDefault();
    let data = {
      channel: channel,
      workspace_id: workspace.id,
    };

    console.log(data);

    axios.post('http://127.0.0.1:8000/api/channels', data).then(
      (response) => {
        console.log(response.data);
        // var channel = response.data.channel;
        // localStorage.setItem('user_id', id);
        // window.Echo.channel('channels').listen('NewChannel', (channel) =>{
        //   console.lo('doneeee')
        // })
      },

      (error) => {
        console.log(error);
      }
    );
    setChannel('');
    setOpen(false);

  };

  // window.Echo.channel('channels').listen('NewChannel', (channel) =>{
  //   console.lo('doneeee')
  // })

  // console.log('workspace >>>>>>', workspace);

  return (
    <div>
      <div
        className="sidebarOption"
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon className="sidebarOption_icon" />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3>
            <span className="sidebarOption_hash">#</span> {title}
          </h3>
        )}
      </div>
      <Form onSubmit={onSubmit}>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        
      >
        <DialogTitle id="form-dialog-title">Create a Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
          channels are where your team communicates. They're best when organized around a topic - #marketing, for example.
          </DialogContentText>
            <TextField
              name="channel"
              autoFocus
              margin="dense"
              id="name"
              label="Enter a Channel"
              type="text"
              fullWidth
              value={channel}
              required
              onChange={(e) => setChannel(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
      </Form>

    </div>
  );
}

export default SidebarOption;
