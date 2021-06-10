import React from 'react';
import './Message.css';
import Moment from 'react-moment';
import moment from 'moment';


function Message({ message, timestamp, user, userImage, userId }) {
  return (
    <div className="message">
      <div
        className="c-message_kit__avatar c-avatar c-button-unstyled">
        <img src={userImage} alt="" />
      </div>
      <div className="message_info">
        <h4>
          {user} {" "}
          <span className="message_timestamp">
            <Moment format="Do MMMM - HH:mm">{timestamp}</Moment>
              {/* {moment({timestamp}).format("Do MMMM YYYY - HH:mm")} */}
              
              </span> 
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
