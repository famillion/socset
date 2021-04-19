import React from 'react';
import classes from './ProfileNav.module.css';
import NavBar from "./NavBar/NavBar";
import PersonHeader from "./Person/PersonHeader";

const {
  wrapper
} = classes;

const ProfileNav = (props) => {
  return (
    <div className={wrapper}>
      <PersonHeader/>
      <div>
        <NavBar/>
      </div>
    </div>
  );
};

export default ProfileNav;
