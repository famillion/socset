import React from 'react';
import classes from './AddPost.module.css';

const {wrapper, textArea, postForm, sendPost} = classes;

const AddPost = () => {
  return (
    <div className={wrapper}>
      <div className={postForm}>
        <div className={textArea}>
          <textarea name="postText"/>
        </div>
        <div className={sendPost}>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
