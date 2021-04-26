import React from 'react';
import classes from './MessageItem.module.css';

const { wrapper, messageText, timeField, avatar, rightOrientation, leftOrient } = classes;

const MessageItem = (props) => {
  const {time, avatarURL, body } = props.message;

  return (
    <div className={
     /* props.isMyMessage ? rightOrientation :*/ leftOrient
    }>
      <div className={wrapper}>
        <div className={avatar}>
          <img
            src={avatarURL}
            alt="ava"/>
        </div>
        <div className={messageText}>
          {body}
        </div>
        <div className={timeField}>{time}</div>
      </div>
    </div>
  );
};

export default MessageItem;
