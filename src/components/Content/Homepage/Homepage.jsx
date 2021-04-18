import React from 'react';
import classes from './Homepage.module.css';
import ProfileNav from "../ProfileNav/ProfileNav";
import FollowersPanel from "../Followers/FollowersPanel/FollowersPanel";
import Posts from "../Posts/Posts";

const { wrapper, header, panel, posts } = classes;

const Homepage = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <ProfileNav/>
      </div>
      <div className={panel}>
        <FollowersPanel/>
      </div>
      <div className={posts}>
        <Posts/>
      </div>
    </div>
  );
};

export default Homepage;
