import React from 'react';
import classes from './FriendDialogItem.module.css';
import { NavLink } from "react-router-dom";

const { wrapper, avatar, name, toDialogBTN } = classes;

const FriendDialogItem = () => {
  return (
    <NavLink to={'/test'}>
      <div className={wrapper}>
        <div className={avatar}>
          <img src="https://i.imgur.com/G9jXjMU.png" alt="followr"/>
        </div>
        <div className={name}>
          Ababagalamaga Alibaba
        </div>
        <div className={toDialogBTN}>
          <button>to dialog</button>
        </div>
      </div>
    </NavLink>

  );
};

export default FriendDialogItem;
