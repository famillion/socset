import React from 'react';
import classes from './AddPost.module.css';

const { wrapper, textArea, postForm, sendPost } = classes;

const AddPost = ({ newPost, actions: { onSendBTN, onChangeText } }) => {

  return (
    <div className={wrapper}>
      <div className={postForm}>
        <div className={textArea}>
          <textarea onChange={onChangeText} wrap="hard" cols="5"
                    value={newPost}/>
        </div>
        <div className={sendPost}>
          <button
            onClick={() => onSendBTN()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
