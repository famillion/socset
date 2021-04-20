import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './LinkButton.module.css';

const LinkButton = (props) => {
  const {url, text} = props.linkBTN;
  return (
    <div className={classes.messages}>
      <NavLink to={`/${url}`}>{text}</NavLink>
    </div>
  );
};

export default LinkButton;
