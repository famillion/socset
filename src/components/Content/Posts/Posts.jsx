import React from 'react';
import classes from './Posts.module.css';
import SinglePost from "./SinglePost/SinglePost";
import AddPost from "./AddPost/AddPost";

const { wrapper, addPost } = classes;

const Posts = (props) => {
  const { allPosts, newPostText } = props.posts;
  return (
    <div className={wrapper}>
      <div className={addPost}>
        <AddPost/>
      </div>
      {
        allPosts.map(post=>(<SinglePost post={post} key={post.id}/>))
      }
    </div>
  );
};

export default Posts;

