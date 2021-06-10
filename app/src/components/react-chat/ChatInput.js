import React, { useState, Component } from 'react';
import { withRouter, useParams, Route } from 'react-router-dom';
import Echo from 'laravel-echo'

import './ChatInput.css';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { FaRegSmile } from 'react-icons/fa';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    let receiver = JSON.parse(localStorage.getItem('receiver'));
    // let     const { roomId } = this.props.match.params;

    // State
    this.state = {
      message: '',
      id: '',
      showEmojis: false,
      conversation_id: this.props.conversation_id,
      user_id: this.props.user_id,
      user: JSON.parse(localStorage.getItem('user')),
      receiver: receiver ? receiver.id : 1,
    };
  }

  // const [input, setInput] = useState('');

  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };

  closeMenu = e => {
    // console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      conversation_id: nextProps.conversation_id,
      user_id: nextProps.user_id
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    // this.setState(
    //   {
    //     showEmojis: true
    //   },
    //   () => document.addEventListener("click", this.closeMenu)
    // );
  };

  addEmoji = (e) => {
    // console.log(e.native);
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
  };


  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     this.setState({ isLoading: true });
  //     const { email, title, username, text, projectname, password } = this.state;

  //     const workspace = {
  //       title: this.state.title,
  //       user_id: localStorage.getItem('user_id').toString(),
  //     };

  //     axios.post('http://localhost:8000/api/send-user-message/' + , workspace).then(
  //       (response) => {
  //         console.log(response);
  //         // this.setState({ isLoading: false });
  //         var id = response.data.workspace.id;
  //         localStorage.setItem('workspace_id', id);
  //         // localStorage.setItem('workspace_info', (response.data.workspace.title));

  //         setTimeout(() => {
  //           this.setState({ isLoading: true });
  //         }, 2000);
  //         this.props.history.push({
  //           pathname: '/setup-channels',
  //           search: '?query=setup-channels',
  //         });
  //       },
  //       (error) => {
  //         setTimeout(() => {
  //           this.setState({ isLoading: false });
  //         }, 2000);
  //         console.log(error);
  //       }
  //     );
  //   };

  onSubmit(e) {
    console.log(this.state.user);
    console.log(this.props.match.params);

    e.preventDefault();

    const Messages = {
      message: this.state.message,
      id: this.state.id,

      // name: this.state.name,
      // admin: this.state.admin,
      // description: this.state.description,
    };

    axios
      .post(
        'http://localhost:8000/api/send-channel-message/' +
          this.state.user.id +
          '/' +
          this.props.match.params.roomId,
        Messages
      )

      .then((res) => {
        console.log(res.data);
        console.log('Message sent Succesfully');
        // window.location.replace(`/newchat/${this.props.match.params.roomId}`);

        // this.setState({
        //     messages: res.data.message,
        // });
        // console.log(this.state.messages);
        // axios
        //   .get(
        //     'http://localhost:8000/api/get-channel-message/' +
        //       this.props.match.params.roomId,
        //     Messages
        //   )
        //   .then(
        //     (res) => {
        //       // console.log(res.data);
        //       this.setState({
        //         messages: res.data,
        //       });
        //       console.log(this.state.messages);
        //     },
        //     (error) => {
        //       console.log(error);
        //     }
        //   );
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ message: '' });
  }

  //   onsendMessage = (e) => {
  //     e.preventDefault();
  //     axios.post('http://localhost:8000/api/send-user-message/1/2').then(
  //       (response) => {
  //         console.log(response);
  //         this.props.history.push({
  //           pathname: '/setup-channels',
  //           search: '?query=setup-channels',
  //         });
  //       },
  //       (error) => {
  //         setTimeout(() => {
  //           this.setState({ isLoading: false });
  //         }, 2000);
  //         console.log(error);
  //       }
  //     );
  //   };
  render() {
    return (
      <div>
      <div className="chatInput">
        <form onSubmit={this.onSubmit}>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter a text"
            fullwidth="true"
            multiline="true"
            variant="outlined" 
            cols="30" 
            rows="1"

            
          />
          <button type="submit" className="submit_button" onClick={this.onSubmit}>
            SEND
          </button>
        </form>
        
        </div>
        {this.state.showEmojis ? (
          <span style={styles.emojiPicker} ref={el => (this.emojiPicker = el)}>
            <Picker
              onSelect={this.addEmoji}
              emojiTooltip={true}
              title="weChat"
            />
          </span>
        ) : (
          <p style={styles.getEmojiButton} onClick={this.showEmojis}>
            {/* {String.fromCodePoint(0x1f60a)} */}
            <FaRegSmile />
          </p>
        )}
      </div>
    );
  }
}
export default withRouter(ChatInput);
const styles = {
  // container: {
  //   padding: 20,
  //   borderTop: "1px #4C758F solid",
  //   marginBottom: 20
  // },

  // input: {
  //   color: "inherit",
  //   background: "none",
  //   outline: "none",
  //   border: "none",
  //   flex: 1,
  //   fontSize: 16
  // },
  getEmojiButton: {
    cssFloat: "left",
    border: "none",
    margin: 0,
    cursor: "pointer",
    color:"purple",
  },
  emojiPicker: {
    position: "absolute",
    bottom: 10,
    right: 0,
    cssFloat: "right",
    marginLeft: "200px"
  }
};

const customEmojis = [
  {
    name: "Octocat",
    short_names: ["octocat"],
    text: "",
    emoticons: [],
    keywords: ["github"],
    imageUrl: "https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7"
  }
];

// type="text" placeholder={`Message #${channelName?.toLowerCase()}`}/>
