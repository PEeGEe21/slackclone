// import React, { useState, useEffect } from 'react';


// export default function main(props) {

// 'use strict';

// // On this codelab, you will be streaming only video (video: true).
// const mediaStreamConstraints = {
//   video: true,
// };

// // Video element where stream will be placed.
// const localVideo = document.querySelector('video');

// console.log("mainjs_showed");

// // Local stream that will be reproduced on the video.
// let localStream;

// // Handles success by adding the MediaStream to the video element.
// function gotLocalMediaStream(mediaStream) {
//   localStream = mediaStream;
//   localVideo.srcObject = mediaStream;
// }

// // Handles error by logging a message to the console with the error message.
// function handleLocalMediaStreamError(error) {
//   console.log('navigator.getUserMedia error: ', error);
// }




import React, { useState, useEffect, useRef, Component } from 'react';
import ProgressComponent from '@material-ui/core/CircularProgress';








// function Main() {
//   // On this codelab, you will be streaming only video (video: true).
// const mediaStreamConstraints = {
//   // video: true,
//   audio: true, 
//   video: { width: 1280, height: 720 }  

// };

// // Video element where stream will be placed.

//   const localVideo = useRef('video');



// console.log("mainjs_showed");

// // Local stream that will be reproduced on the video.
// let localStream;

//  // Handles success by adding the MediaStream to the video element.
// function gotLocalMediaStream(mediaStream) {
//   localStream = mediaStream;
//   localVideo.srcObject = mediaStream;
// }

// const handleLocalMediaStreamError = function(error) {
//   console.log('navigator.getUserMedia error: ', error);

// };

   

//  // Initializes media stream.
//  navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
//  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);


// // }

//  return (
  
//    <div>
//     <video autoPlay playsInline ref={localVideo}></video>
//   </div>

//  );
// }

// export default Main;



export default class Main extends Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;
    const constraints = { 
      video: true,
      audio: true, 
      // video: { width: 500, height: 720 },  
    }
    navigator.mediaDevices.getUserMedia(constraints).then(
      (stream) => { video.srcObject = stream })
  }
  render() {
    return (
      <div>
        <video autoPlay={true} ref={this.videoRef} />
      </div>
    )
  }
}