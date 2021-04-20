import React from 'react';
import classes from './DialogHeader.module.css';
import PersonName from "../../ProfileNav/Person/PersonName/PersonName";
import NavBar from "../../ProfileNav/NavBar/NavBar";
import LinkButton from "../../components/LinkButton/LinkButton";

const { wrapper, userBlock, userBTNs, navbar } = classes;

const DialogHeader = (props) => {
  return (
    <div className={wrapper}>
      <div className={userBlock}>
        <PersonName/>
      </div>
      <div className={userBTNs}>
        <LinkButton linkBTN={{url:'', text: 'User Profile'}}/>
        <LinkButton linkBTN={{url:'', text: 'Close'}}/>
      </div>
      <div className={navbar}>
        <NavBar/>
      </div>
    </div>
  );
};

export default DialogHeader;
