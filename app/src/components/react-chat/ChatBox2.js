import React, { useState, Component } from 'react';
import './ChatBox.css';
import axios from 'axios';
import ChatInput2 from './ChatInput2';
import './ChatInput.css';
import Sidebar from './Sidebar';

import { withRouter, useParams, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PhoneIcon from '@material-ui/icons/Phone';
import { useEffect } from 'react';
import Message from './Message';
import SidebarOption2 from './SidebarOption2';

// const api = axios.create({
//   baseURL: `http://localhost:8000/api`,
// });

// function ChatBox() {
//   const { roomId } = useParams();
//   const [roomDetails, setRoomDetails] = useState();
//   const [messages, setMessages] = useState([]);
//   const api = `http://localhost:8000/api/get-channel-message/:roomId`

//   useEffect(() => {
//     loadMessage();
//   }, []);

//   const loadMessage = async () => {
//     const response = await fetch(api);
//     const data = await response.json();
//     setMessages(data.messages);
//     console.log(data.messages);
//   };

//   // useEffect(() => {
//   //   // if(roomId){
//   //   fetch(
//   //     '/get-user-message/' + this.state.user.id + '/' + this.state.receiver
//   //   ).then(
//   //     (res) => {
//   //       console.log(res);
//   //       setMessages(res.data.messages);
//   //       console.log(res.data);
//   //     },
//   //     (error) => {
//   //       console.log(error);
//   //     }
//   //   );
//   // }, []);
//   // }, [roomId])
//   console.log(roomDetails);

//   return (
//     <div className="chatBox">
//       {/* <h2>You are in the {roomId} room</h2> */}
//       <div className="chat_header">
//         <div className="chat_headerLeft">
//           <h4 className="chat_channelName">
//             <strong># {roomId}</strong>
//             <StarBorderOutlinedIcon />
//           </h4>
//         </div>
//         <div className="chat_headerRight">
//           <p>
//             <InfoOutlinedIcon /> Details
//           </p>
//         </div>
//       </div>

//       <div className="chat_messages"></div>
//       <div>
//         <ChatInput />
//       </div>
//     </div>
//   );
// }

// export default withRouter(ChatBox);

class ChatBox2 extends Component {
  constructor(props) {
    super(props);

    let receiver = JSON.parse(localStorage.getItem('receiver'));
    let userId = this.props.match.params;
    let roomId = this.props.match.params;

    this.state = {
      messages: [],
      channels: '',
      id: '',
      messagesData: [],
      user: JSON.parse(localStorage.getItem('user')),
      // receiver: receiver ? receiver.id : 1,
      receiver: this.props.match.params,
      // selectedFile:null,

    };
  }

  componentDidMount() {
    setInterval(() => {
    const Messages = {
      message: this.state.messages,
      id: this.state.id,
    };

    axios
      .get(
        'http://localhost:8000/api/get-user-message/' +
          this.state.user.id +
          '/' +
          this.state.receiver.roomId,
        Messages
      )
      .then(
        (res) => {
          // console.log(res.data);
          this.setState({
            messages: res.data.messages,
          });
          console.log(this.state.messages);
        },
        (error) => {
          console.log(error);
        }
      );
    }, 2000);
  }
  DataTable() {
    if (this.state.messages.length > 0) {
      return this.state.messages.map((response, index) => {
        // console.log(response);
        return (
          <Message
            obj={response}
            key={response.id}
            message={response.message}
            timestamp={response.created_at}
            user={response.user.name ? response.user.name : response.user.email}

          />
        );
      });
    }
  }

  // DataTable() {
  //   {
  //     messages &&
  //       messages.map((response) => {
  //         // itemsToRender = messages.map((response, index) => {
  //         return (
  //           <Message
  //             obj={response}
  //             key={response.id}
  //             message={response.message}
  //             timestamp={response.timestamp}
  //             user={response.user}
  //           />
  //         );
  //       });
  //   }
  // }

  render() {
    // const { roomId } = useParams();
    const { userId } = this.props.match.params;
    const { roomId } = this.props.match.params;

    // const [channels, setChannels] = useState();
    // const [messages, setMessages] = useState();
    return (
      <div className="chatBox">
        {/* <h2>You are in the {roomId} room</h2> */}
        <div className="chat_header">
          <div className="chat_headerLeft">
            <div className="chat_channelName">
              <h4>
                <strong>
                  <RadioButtonUncheckedIcon /> {roomId}
                </strong>
              </h4>
              <div className="chat_star">
                <StarBorderOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="p-ia__view_header__spacer"></div>
          {/* <div className="chat_headerRight"> */}
          <span className="chat_button--calls">
            <div className="d-flex">
              <PhoneIcon />
            </div>
          </span>
          <span className="chat_button--info">
            <div className="d-flex">
              <InfoOutlinedIcon />
            </div>
          </span>
          {/* </div> */}
        </div>

          <div className="chat_messages">
          
            {this.DataTable()}
          
          </div>
        <div className="chat_main_box">
          <ChatInput2 />

        </div>
      </div>
    );
  }
}
export default withRouter(ChatBox2);

// function ChatBox() {
//   const { roomId } = useParams();
//   const [channels, setChannels] = useState();
//   const [messages, setMessages] = useState();

//   useEffect(() => {
//     if (roomId) {
//       axios.get('http://localhost:8000/api/channels', channels).then(
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
//     axios.get('http://localhost:8000/api/get-user-message/2/1').then(
//       (response) => {
//         console.log('Data ',response.data.messages);
//         // var channel = response.data.channel;
//         setMessages({
//           messagesData: response.data.messages,
//         });

//         // localStorage.setItem('user_id', id);
//       },

//       (error) => {
//         console.log(error);
//       }
//     );
//   }, []);

//   console.log(channels);
//   console.log(channels);
//   console.log('MESSAGES >>>', messages);
// //   console.log('MESSAGES >>>', messagesData);

//   let itemsToRender;
//   if (messages) {
//     itemsToRender = messages.map(response => {

//         console.log(response)
//         return (
//             <Message
//               obj={response}
//               key={response.id}
//               message={response.message}
//               timestamp={response.timestamp}
//               user={response.user}
//             />
//           );
//     });
//   } else { itemsToRender = "Loading...";  }

// //   let itemsToRender;
//   // if(messages){ '

//   // )} else {
//   //     itemsToRender = "Loading...";
//   //   }

//   // let itemsToRender;
//   // if (items) {
//   //   itemsToRender = items.map(item => {
//   //     return <div key={item.id}>{item.title}</div>;
//   //   });
//   // }

//   return (
//     <div className="chatBox">
//       {/* <h2>You are in the {roomId} room</h2> */}
//       <div className="chat_header">
//         <div className="chat_headerLeft">
//           <h4 className="chat_channelName">
//             <strong># {roomId}</strong>
//             <StarBorderOutlinedIcon />
//           </h4>
//         </div>
//         <div className="chat_headerRight">
//           <p>
//             <InfoOutlinedIcon /> Details
//           </p>
//         </div>
//       </div>

// <div className="chat_messages">
//     {itemsToRender}
// </div>
//       <div>
//         <ChatInput channelName={roomId}/>
//       </div>

//     </div>
//   );
// }

// export default ChatBox;

/* <div>
        {messages &&
          messages.map((response) => {
            // itemsToRender = messages.map((response, index) => {
            return (
              <Message
                obj={response}
                key={response.id}
                message={response.message}
                timestamp={response.timestamp}
                user={response.user}
              />
            );
          })}
      </div> */

// class ChatBox extends Component {
//     // function Sidebar() {
//     constructor(props) {
//       super(props);

//       // Setting up state
//       this.state = {
//         channels: [],
//         id: '',
//         channelsData: [],
//       };
//     }

//     componentDidMount() {
//       const channels = {
//         channel: this.state.channels,
//         // user_id: localStorage.getItem('user_id').toString()
//       };
//       axios.get('http://localhost:8000/api/channels', channels).then(
//         (response) => {
//           // console.log(response.data);
//           // var channel = response.data.channel;
//           this.setState({
//             channelsData: response.data,
//           });
//           // console.log(this.state);

//           // localStorage.setItem('user_id', id);
//         },

//         (error) => {
//           console.log(error);
//         }
//       );
//     }

//     DataTable() {
//       if (this.state.channelsData.length > 0) {
//         return this.state.channelsData.map((response, index) => {
//           console.log(response)
//           return (

//             <strong>#{response.channel}</strong>
//             // <SidebarOption
//             //   obj={response}
//             //   key={response.id}
//             //   title={response.channel}
//             //   id={response.channel}
//             // />
//           );
//         });
//       }
//     }

//     render() {
//         return (
//             <div className="chatBox">
//               {/* <h2>You are in the {roomId} room</h2> */}
//               <div className="chat_header">
//                 <div className="chat_headerLeft">
//                   <h4 className="chat_channelName">
//                     {/* <strong>#{channels?.id}</strong> */}
//                     {this.DataTable()}
//                     <strong>#{this.state.channelsData.channel}</strong>
//                     <StarBorderOutlinedIcon />
//                   </h4>
//                 </div>
//                 <div className="chat_headerRight">
//                     <p>
//                         <InfoOutlinedIcon /> Details
//                     </p>
//                 </div>
//               </div>
//             </div>
//           );
//     }
//   }

//   export default ChatBox;
