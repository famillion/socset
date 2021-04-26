import React from 'react';
import classes from './Posts.module.css';
import SinglePost from "./SinglePost/SinglePost";
import AddPost from "./AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { addPostAction, updateNewPostTextAction } from "../../../redux/posts/postsActions";

const { wrapper, addPost } = classes;

const Posts = () => {

  const { allPosts, newPostText } = useSelector(({ postsReducer }) => postsReducer);
  const actions = useDispatch();

  const onChangeText = (e) => {
    const b = e.target.value;
    actions(updateNewPostTextAction(b));
  };

  const onSendBTN = () => {
    const testPost = {
      id: 3,
      user_id: 1,
      username: 'Elon Mask',
      time: '17:45',
      date: '21.01.2021',
      likesCount: 0,
      comments: [],
      commentsCount: 0,
      avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg'
    };
    actions(addPostAction(testPost));
  };

  return (
    <div className={wrapper}>
      <div className={addPost}>
        <AddPost newPost={newPostText} actions={{ onChangeText, onSendBTN }}/>
      </div>
      {
        allPosts.map(post => (<SinglePost post={post} key={post.id}/>))
      }
    </div>
  );
};

export default Posts;

