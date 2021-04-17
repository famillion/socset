import React from 'react';
import classes from './ProfileNav.module.css';
import NavBar from "../NavBar/NavBar";

const {
  wrapper, header, person, avatar, name, personOptions,
  messages, optionsBtns, bg
} = classes;

const ProfileNav = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={bg}>
          <img src="https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/anastasiia-krutota-flodfxm-l_4-unsplash_3.jpg" alt="bg"/>
        </div>
        <div className={person}>
          <div className={avatar}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg" alt="ava"/>
          </div>
          <div className={name}>
            Elon Mask
          </div>
        </div>
        <div className={personOptions}>
          <div className={messages}>
            <button>Messages</button>
          </div>
          <div className={optionsBtns}>
            <button>Settings</button>
          </div>
        </div>

      </div>
      <div>
        <NavBar/>
      </div>
    </div>
  );
};

export default ProfileNav;
