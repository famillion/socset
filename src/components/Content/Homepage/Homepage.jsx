import React from 'react';
import classes from './Homepage.module.css';
import ProfileNav from "../ProfileNav/ProfileNav";
import Posts from "../Posts/Posts";
import PanelBlock from "../LeftPanel/PanelBlock";
import FriendsBlockPanel from "../Friends/FriendsBlockPanel/FriendsBlockPanel";

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
            <Posts/>
        </div>
      </div>
  );
};


export default Homepage;
