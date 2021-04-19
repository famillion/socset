import React from 'react';
import classes from './FriendItemSmall.module.css';

const { wrapper, avatar, name } = classes;

const FriendItemSmall = (props) => {
  return (
    <div className={wrapper}>
      <div className={avatar}>
        <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
      </div>
      <div className={name}>
        Ababagalamaga Alibaba
      </div>
    </div>
  );
};

export default FriendItemSmall;
