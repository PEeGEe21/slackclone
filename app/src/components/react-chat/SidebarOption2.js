import React, { useState } from 'react';
import './SidebarOption.css';
import './SidebarOption2.css';
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
import { FaCircle } from 'react-icons/fa';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


function SidebarOption2({ Icon, title, id, addUser }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState();

  let history = useHistory();
  const { roomId } = useParams();

  const selectUser = () => {
    if (id) {
      console.log(id);
      // history.push(`/newchat/user/${id}`);
      window.location.replace(`/newchat/user/${id}`);
    } else {
      window.location.replace(title);
    }
  };
  // const selectChannel = () => {
  //   if (id) {
  //     console.log(id);
  //     history.push(`/newchat/${id}`);
  //   } else {
  //     history.push(title);
  //   }
  // npx browserslist@latest --update-db
  // };

  // const selectUser = () => {
  //   alert("helloooo" + id)
  // };

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

//   const onSubmit = (event) => {
//     event.preventDefault();
//     let data = {
//       channel: channel,
//       workspace_id: workspace.id,
//     };

//     console.log(data);

//     axios.post('http://127.0.0.1:8000/api/channels', data).then(
//       (response) => {
//         // console.log(response.data);
//         // var channel = response.data.channel;
//         // localStorage.setItem('user_id', id);
//       },

//       (error) => {
//         console.log(error);
//       }
//     );
//     setChannel('');
//   };

  // console.log('workspace >>>>>>', workspace);

  return (
    <div>
      <div
        className="sidebarOption userh3"
        onClick={selectUser}
      >
        {Icon && <Icon className="sidebarOption_icon" />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3>
            <span className="sidebarOption_hash"><RadioButtonUncheckedIcon/></span> {title}
          </h3>
        )}
      </div>
      
    </div>
  );
}

export default SidebarOption2;
