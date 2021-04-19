import React from 'react';
import classes from './PersonName.module.css';

const { person, avatar, name } = classes;

const PersonName = (props) => {
  return (
    <div className={person}>
      <div className={avatar}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg"
          alt="ava"/>
      </div>
      <div className={name}>
        Elon Mask
      </div>
    </div>
  );
};

export default PersonName;
