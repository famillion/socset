import React from 'react';
import classes from './MessageItem.module.css';

const { wrapper, messageText, time, avatar, rightOrientation, leftOrient } = classes;

const MessageItem = (props) => {
  return (
    <div className={
      props.isMyMessage ? rightOrientation : leftOrient
    }>
      <div className={wrapper}>
        <div className={avatar}>
          <img
            src="https://banner2.cleanpng.com/20180626/uuw/kisspng-dogecoin-cryptocurrency-bitcoin-litecoin-our-mission-5b31f72f8c6f70.5175671215300011995752.jpg"
            alt="ava"/>
        </div>
        <div className={messageText}>
          Lorem ipsum dolor sit
        </div>
        <div className={time}>13:11</div>
      </div>
    </div>
  );
};

export default MessageItem;
