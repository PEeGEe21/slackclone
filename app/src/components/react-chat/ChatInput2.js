import React, { useState, Component } from 'react';
import { withRouter, useParams, Route } from 'react-router-dom';
import Echo from 'laravel-echo';

import './ChatInput.css';
import { Button } from '@material-ui/core';
import axios from 'axios';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { FaRegSmile } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { MdAttachFile } from 'react-icons/md';

import ReactQuill, {Quill, Mixin, Toolbar} from 'react-quill'
// import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'react-quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const CustomHeart = () => <span>♥</span>;

function insertHeart() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "♥");
  this.quill.setSelection(cursorPosition + 1);
}




const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">
      <CustomHeart />
    </button>
  </div>
);


// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);


// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);


class ChatInput2 extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addEmoji = this.addEmoji.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    let receiver = JSON.parse(localStorage.getItem('receiver'));
    // let     const { roomId } = this.props.match.params;

    // State
    this.state = {
      message: '',
      id: '',
      user: JSON.parse(localStorage.getItem('user')),
      // receiver: receiver ? receiver.id : 1,
      receiver: this.props.match.params,
      showEmojis: false,
      conversation_id: this.props.conversation_id,
      user_id: this.props.user_id,
      selectedFile:null,

    };
  }

  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertHeart: insertHeart
      }
    }
  };

  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];


  onFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0] });
  }

  onFileUpload =() => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    // axios
    //   .post("api/uploadfile", formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log('File sent Succesfully');
    //     // window.location.replace(`/newchat/user/${this.state.receiver.roomId}`);
        
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  fileData = () => {
    if (this.state.selectedFile){
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified: {""}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>
            Choose a file
          </h4>
        </div>
      )
    }
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
    console.log("roomId......",this.props.match.params);
    console.log("receiver......",this.state.receiver.roomId);

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
        'http://localhost:8000/api/send-user-message/' +
          this.state.user.id +
          '/' +
          this.state.receiver.roomId,
        Messages
      )

      .then((res) => {
        console.log(res.data);
        console.log('Message sent Succesfully');
        // window.location.replace(`/newchat/user/${this.state.receiver.roomId}`);
        
      })
      .catch((error) => {
        console.log(error);
      });
      
      // window.Echo.channel('Message').listen('NewMessage', (Messages)=>{
      //   console.log(Messages);
      // })
      this.setState({ message: '' });

    }

    // listen(){
    //   Echo.channel('send-user-message.'+this.state.user.id+'./.'+this.state.receiver.roomId).listen('NewMessage', (message) => {
    //     this.state.message;
    //   })
    // };

    
  

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
      <div className="">

        <div className="chatInput">
          <form onSubmit={this.onSubmit}>
          <textarea 
          className="form-control w-100" 
          name="message" 
          id="message" 
          value={this.state.message}
          cols="30" 
          rows="1" 
          onChange={this.handleChange}
          type="text"
          // onFocus="this.placeholder = ''" 
          // onBlur="this.placeholder = 'Enter Message'"
          placeholder="Enter a text">

          </textarea>
            {/* <input
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter a text"
            /> */}
            
            <button type="submit" className="submit_button" onClick={this.onSubmit}>
                  <GrSend/>
                  {/* SEND */}
            </button>
          </form>
          
          {/* <input type="file" onChange={this.onFileChange} />
            <button onClick={this.onFileUpload}>upload</button> */}
        </div>
            <div>
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
              {/* <Quill /> */}
           
            </div>

            
      </div>
    );
  }
}
export default withRouter(ChatInput2);

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
    cursor: "pointer"
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
