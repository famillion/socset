import React from 'react';
import classes from './MessagesBlock.module.css';
import AddPost from "../../Posts/AddPost/AddPost";
import MessageItem from "./MessageItem/MessageItem";

const { wrapper, messages, addMessage } = classes;

const MessagesBlock = () => {
  return (
    <div className={wrapper}>
      <div className={messages}>
        <MessageItem/>
        <MessageItem isMyMessage={true}/>
        <MessageItem/>
        <MessageItem isMyMessage={true}/>
        <MessageItem/>
        <MessageItem isMyMessage={true}/>
        <MessageItem/>
        <MessageItem isMyMessage={true}/>
        <MessageItem/>
      </div>
      <div className={addMessage}>
        <AddPost/>
      </div>
    </div>
  );
};

export default MessagesBlock;
