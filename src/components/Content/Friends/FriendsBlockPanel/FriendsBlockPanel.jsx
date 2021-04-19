import React from 'react';
import classes from './FriendsBlockPanel.module.css';
import FriendItemSmall from "../BlockItemSmall/FriendItemSmall";

const { wrapper, search, blockItems } = classes;

const FriendsBlockPanel = (props) => {
  return (
    <div className={wrapper}>
      <div className={search}>
        <input type="text"/>
        <button>Search</button>
      </div>
      <div className={blockItems}>
        <FriendItemSmall/>
        <FriendItemSmall/>
        <FriendItemSmall/>
        <FriendItemSmall/>
      </div>
    </div>
  );
};

export default FriendsBlockPanel;
