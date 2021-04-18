import React from 'react';
import classes from './Posts.module.css';
import SinglePost from "./SinglePost/SinglePost";

const {wrapper} = classes;

const Posts = () => {
  return (
    <div className={wrapper}>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
    </div>
  );
};

export default Posts;
