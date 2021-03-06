import React, { useEffect, useRef } from 'react';
import classes from './MessagesBlock.module.css';
import AddPost from "../../Posts/AddPost/AddPost";
import MessageItem from "./MessageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessage, updateNewMessage } from "../../../../redux/messages/messagesActions";

const { wrapper, messages, addMessage, nullMessage } = classes;

const MessagesBlock = () => {

  const { allMessages, newMessageText } = useSelector(({messageReducer}) => messageReducer);
  const actions = useDispatch();
  const massageBlock = useRef(null);

  useEffect(() => {
    massageBlock.current.scrollTop = massageBlock.current.scrollHeight;
  });

  const onSendBTN = () =>{
    const testMessage = {
      id: Math.random()*100000000,
      user_id: 1,
      username: 'Elon Mask',
      time: '17:45',
      body:'',
      date: '21.01.2021',
      avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg'
    };
    actions(addNewMessage(testMessage));
  }

  const onChangeText = (e) => {
    const body = e.target.value;
    actions(updateNewMessage(body));
  };

  return (
    <div className={wrapper}>
      <div className={messages} ref={massageBlock}>
        <div className={nullMessage}></div>
        {
          allMessages.map(message => <MessageItem message={message} key={message.id}/>)
        }
        {/*<MessageItem isMyMessage={true}/>*/}
      </div>
      <div className={addMessage}>
        <AddPost newPost={newMessageText} actions={{onSendBTN,onChangeText}}/>
      </div>
    </div>
  );
};

export default MessagesBlock;
