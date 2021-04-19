import React from 'react';
import classes from './PanelBlock.module.css';
import { NavLink } from "react-router-dom";

const { wrapper, header, blockItems} = classes;

const PanelBlock = (props) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <h3><NavLink to="/">{props.blockName}</NavLink></h3>
      </div>
      <div className={blockItems}>

        {props.blockContent}
      </div>
    </div>
  );
};

export default PanelBlock;
