import React from 'react';
import classes from './FriendsDialogsPanel.module.css';
import FriendDialogItem from "../FriendsDialogItem/FriendDialogItem";

const { wrapper, search, blockItems } = classes;

const FriendsDialogsPanel = (props) => {
  return (
    <div className={wrapper}>
      <div className={search}>
        <input type="text"/>
        <button>Search</button>
      </div>
      <div className={blockItems}>
        <FriendDialogItem/>
        <FriendDialogItem/>
        <FriendDialogItem/>
        <FriendDialogItem/>
      </div>
    </div>
  );
};

export default FriendsDialogsPanel;
