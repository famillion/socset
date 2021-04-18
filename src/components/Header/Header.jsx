import React from 'react';
import classes from './Header.module.css';
import logodogo from './../../img/logo/logodogo.png';
import { NavLink } from "react-router-dom";

const {wrapper, logo, search, logout, nav} = classes;

const Header = () => {
  return (
    <div className={wrapper}>
      <div className={nav}>
        <div className={logo}>
          <img src={logodogo} alt="logo"/>
        </div>
        <div className={search}>
          <input type="text"/>
          <button>search</button>
        </div>
        <div className={logout}>
          <div>
            <NavLink to={'/'} >Home</NavLink>
          </div>
          <button>logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
