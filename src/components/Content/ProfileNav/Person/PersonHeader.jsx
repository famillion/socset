import React from 'react';
import classes from './../ProfileNav.module.css';
import PersonName from "./PersonName/PersonName";
import LinkButton from "../../components/LinkButton/LinkButton";

const { header, bg, personOptions, imageName, optionsInner } = classes;

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
        <div className={optionsInner}>
          <LinkButton linkBTN={{url:'dialogs', text: 'Messages'}}/>
          <LinkButton linkBTN={{url:'settings', text: 'Settings'}}/>
        </div>
      </div>

    </div>
  );
};

export default PersonHeader;
