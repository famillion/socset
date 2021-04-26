import React from 'react';
import classes from './SinglePost.module.css';
import { useDispatch } from "react-redux";
import { likePost } from "../../../../redux/posts/postsActions";

const { wrapper, author, avatar, name, timeDate, post, footer, btns } = classes;

const SinglePost = (props) => {

  const { id, avatarURL, username, body, likesCount, commentsCount, time, date } = props.post;

  const action = useDispatch();

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
          <button
            onClick={() => {
              action(likePost(id))
            }}>
            Like {likesCount}
          </button>
          <button>Comments {commentsCount}</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
