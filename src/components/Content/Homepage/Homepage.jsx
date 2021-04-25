import React from 'react';
import classes from './Homepage.module.css';
import ProfileNav from "../ProfileNav/ProfileNav";
import Posts from "../Posts/Posts";
import PanelBlock from "../LeftPanel/PanelBlock";
import FriendsBlockPanel from "../Friends/FriendsBlockPanel/FriendsBlockPanel";
import { connect } from "react-redux";

const { wrapper, header, panel, posts } = classes;

const Homepage = () => {
  return (
      <div className={wrapper}>
        <div className={header}>
          <ProfileNav/>
        </div>
        <div className={panel}>
          <PanelBlock blockName = "Friends" blockContent = {<FriendsBlockPanel/> }/>

        </div>
        <div className={posts}>
          <PostsContainer>
            <Posts/>
          </PostsContainer>
        </div>
      </div>
  );
};

const PostsContainer = connect((state) => {
  return { posts: state.postsReducer.homepage.posts }
})(Posts);

export default Homepage;
