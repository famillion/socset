import React from 'react';
import classes from './Posts.module.css';
import SinglePost from "./SinglePost/SinglePost";
import AddPost from "./AddPost/AddPost";

const {wrapper, addPost} = classes;

const Posts = () => {
  return (
    <div className={wrapper}>
      <div className={addPost}>
        <AddPost/>
      </div>
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
