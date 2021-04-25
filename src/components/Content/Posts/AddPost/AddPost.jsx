import React from 'react';
import classes from './AddPost.module.css';

const { wrapper, textArea, postForm, sendPost } = classes;

const AddPost = (props) => {
  let { onSendBTNClick, onChangeText, text } = props;

  return (
    <div className={wrapper}>
      <div className={postForm}>
        <div className={textArea}>
          <textarea onChange={onChangeText} value={text}/>
        </div>
        <div className={sendPost}>
          <button onClick={onSendBTNClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
