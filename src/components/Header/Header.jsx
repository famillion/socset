import React from 'react';
import classes from './Header.module.css';
import logodogo from './../../img/logo/logodogo.png';

const {wrapper, logo, search, logout} = classes;

const Header = () => {
  return (
    <div className={wrapper}>
      <div className={logo}>
        <img src={logodogo} alt="logo"/>
      </div>
      <div className={search}>
        <input type="text"/>
        <button>search</button>
      </div>
      <div className={logout}>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Header;
