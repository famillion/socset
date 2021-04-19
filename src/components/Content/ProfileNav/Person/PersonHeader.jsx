import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './../ProfileNav.module.css';
import PersonName from "./PersonName/PersonName";

const { header, bg, personOptions, messages, optionsBtns, imageName } = classes;

const PersonHeader = (props) => {
  return (
    <div className={header}>
      <div className={bg}>
        <img
          src="https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/anastasiia-krutota-flodfxm-l_4-unsplash_3.jpg"
          alt="bg"/>
      </div>
      <div className={imageName}>
        <PersonName/>
      </div>
      <div className={personOptions}>
        <div className={messages}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={optionsBtns}>
          <button>Settings</button>
        </div>
      </div>

    </div>
  );
};

export default PersonHeader;
