import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const { wrapper, navbar } = classes;

const NavBar = () => {
  return (
    <div className={wrapper}>
      <div className={navbar}>
        <div>
          <NavLink to="/">Profile</NavLink>
        </div>
        <div>
          <NavLink to="/posts">Posts</NavLink>
        </div>
        <div>
          <NavLink to="/">Photos</NavLink>
        </div>
        <div>
          <NavLink to="/">News</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
