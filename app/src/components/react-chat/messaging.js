import React, { useState, useEffect, useRef, Component } from 'react';



export default class Messaging extends Component {
    constructor() {
      super();
      this.videoRef = React.createRef();
      this.localPeerConnection = '';
    }
  
    componentDidMount() {
        // let localPeerConnection;
        const servers = 'meet.jit.si';

        this.localPeerConnection = new RTCPeerConnection(servers);
        // this.localPeerConnection.addEventListener('icecandidate', handleConnection);
    //     this.localPeerConnection.addEventListener(
    // 'iceconnectionstatechange', handleConnectionChange);


//     navigator.mediaDevices.getUserMedia(mediaStreamConstraints).
//   then(gotLocalMediaStream).
//   catch(handleLocalMediaStreamError);

// function gotLocalMediaStream(mediaStream) {
//   localVideo.srcObject = mediaStream;
//   localStream = mediaStream;
//   trace('Received local stream.');
//   callButton.disabled = false;  // Enable call button.
// }
      const video = this.videoRef.current;
      const constraints = { 
        video: true,
        audio: true, 
        // video: { width: 500, height: 720 },  
      }


      const handleLocalMediaStreamError = function(error) {
        console.log('navigator.getUserMedia error: ', error);
      };



        navigator.mediaDevices.getUserMedia(constraints).then(
        (stream) => { video.srcObject = stream }).
        catch(handleLocalMediaStreamError);
        }
    render() {
      return (
        <div>
          <video autoPlay={true} ref={this.videoRef} />
          <h1>Realtime communication with WebRTC</h1>

            <video id="localVideo" autoPlay playsInline></video>
            <video id="remoteVideo" autoPlay playsInline></video>

            <div>
                <button id="startButton">Start</button>
                <button id="callButton">Call</button>
                <button id="hangupButton">Hang Up</button>
            </div>
        </div>
      )
    }
  }