import React from 'react';
import classes from './Homepage.module.css';
import ProfileNav from "../ProfileNav/ProfileNav";
import AddPost from "../AddPost/AddPost";
import FollowersPanel from "../Followers/FollowersPanel/FollowersPanel";

const { wrapper, header, followers, addPost, posts } = classes;

const Homepage = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <ProfileNav/>
      </div>
      <div className={followers}>
        <FollowersPanel/>
      </div>
      <div className={addPost}>
        <AddPost/>
      </div>
      <div className={posts}>

      </div>
    </div>
  );
};

export default Homepage;