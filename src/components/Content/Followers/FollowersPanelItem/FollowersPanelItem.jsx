import React from 'react';
import classes from './FollowersPanelItem.module.css';

const { wrapper, avatar, name } = classes;

const FollowersPanelItem = () => {
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

export default FollowersPanelItem;
