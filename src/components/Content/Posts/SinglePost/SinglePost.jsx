import React from 'react';
import classes from './SinglePost.module.css';

const { wrapper, author, avatar, name, timeDate, post, footer, btns } = classes;

const SinglePost = (props) => {

  const { avatarURL, username, body, likesCount, commentsCount, time, date } = props.post;

  return (
    <div className={wrapper}>
      <div className={author}>
        <div className={avatar}>
          <img src={avatarURL} alt="ava"/>
        </div>
        <div className={name}>
          {username}
        </div>
        <div className={timeDate}>
          <div>
            {time}
          </div>
          <div>
            {date}
          </div>
        </div>
      </div>
      <div className={post}>
        {body}
      </div>
      <div className={footer}>
        <div className={btns}>
          <button>Like {likesCount}</button>
          <button>Comments {commentsCount}</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
