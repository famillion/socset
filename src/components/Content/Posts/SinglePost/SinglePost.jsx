import React from 'react';
import classes from './SinglePost.module.css';

const { wrapper, author, avatar, name, timeDate, post, footer, btns } = classes;

const avaURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg'

const SinglePost = () => {
  return (
    <div className={wrapper}>
      <div className={author}>
        <div className={avatar}>
          <img src={avaURL} alt="ava"/>
        </div>
        <div className={name}>
          Elon Mask
        </div>
        <div className={timeDate}>
          <div>
            17:45
          </div>
          <div>
            21.01.2021
          </div>
        </div>
      </div>
      <div className={post}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugiat maxime mollitia nemo quasi quo
        ratione sequi tempore tenetur totam! Dignissimos enim facilis ipsa, iste laborum laudantium odit omnis quam
        rerum sint vel veniam veritatis voluptas! Architecto blanditiis neque omnis?
      </div>
      <div className={footer}>
        <div className={btns}>
          <button>Like</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
