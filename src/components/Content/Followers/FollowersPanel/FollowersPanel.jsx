import React from 'react';
import classes from './FollowersPanel.module.css';

const { wrapper, header, followers, followersItem, followerName, fAva } = classes;

const FollowersPanel = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <h3><a href="">Followers</a></h3>
      </div>
      <div className={followers}>
        <div className={followersItem}>
          <div className={fAva}>
            <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
          </div>
          <div className={followerName}>
            Ababagalamaga Alibaba
          </div>
        </div>
        <div className={followersItem}>
          <div className={fAva}>
            <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
          </div>
          <div className={followerName}>
            Ababagalamaga Alibaba
          </div>
        </div>
        <div className={followersItem}>
          <div className={fAva}>
            <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
          </div>
          <div className={followerName}>
            Ababagalamaga Alibaba
          </div>
        </div>
        <div className={followersItem}>
          <div className={fAva}>
            <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
          </div>
          <div className={followerName}>
            Ababagalamaga Alibaba
          </div>
        </div>
        <div className={followersItem}>
          <div className={fAva}>
            <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
          </div>
          <div className={followerName}>
            Ababagalamaga Alibaba
          </div>
        </div>

      </div>
    </div>
  );
};

export default FollowersPanel;
