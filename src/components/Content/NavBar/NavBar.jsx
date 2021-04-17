import React from 'react';
import classes from './NavBar.module.css';

const { wrapper, navbar } = classes;

const NavBar = () => {
  return (
    <div className={wrapper}>
      <div className={navbar}>
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Posts</a>
        </div>
        <div>
          <a href="">Photos</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
