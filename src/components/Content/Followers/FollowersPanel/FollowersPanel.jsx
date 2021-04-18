import React from 'react';
import classes from './FollowersPanel.module.css';
import FollowersPanelItem from "../FollowersPanelItem/FollowersPanelItem";
import { NavLink } from "react-router-dom";

const { wrapper, header, followers} = classes;

const FollowersPanel = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <h3><NavLink to="/">Friends</NavLink></h3>
      </div>
      <div className={followers}>

        <FollowersPanelItem/>
        <FollowersPanelItem/>
        <FollowersPanelItem/>
        <FollowersPanelItem/>

      </div>
    </div>
  );
};

export default FollowersPanel;
