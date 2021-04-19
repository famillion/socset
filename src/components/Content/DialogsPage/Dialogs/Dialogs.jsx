import React from 'react';
import classes from './Dialogs.module.css';
import DialogHeader from "../DialogHeader/DialogHeader";
import PanelBlock from "../../LeftPanel/PanelBlock";
import FriendsDialogsPanel from "../../Friends/FriendsDialogsPanel/FriendsDialogsPanel";

const { wrapper, header, dialogsItems, messages } = classes;

const Dialogs = (props) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <DialogHeader/>
      </div>
      <div className={dialogsItems}>
        <PanelBlock blockName="Dialogs" blockContent={<FriendsDialogsPanel/>}/>
      </div>
      <div className={messages}>
        MESSAGES
      </div>
    </div>
  );
};

export default Dialogs;
