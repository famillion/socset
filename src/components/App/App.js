import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Homepage from "../Content/Homepage/Homepage";
import Posts from "../Content/Posts/Posts";
import Dialogs from "../Content/DialogsPage/Dialogs/Dialogs";

const App = (props) => {
  return (
    <div>
      <div className="app-header-fix">
        <Header/>
      </div>
      <div className="app-wrapper">
        <div className="app-header">
        </div>
        <div className="app-content">
          <Switch>
            <Route path='/posts' render={() => <Posts/>}/>
            <Route path='/dialogs' render={() => <Dialogs/>}/>
            <Route path='/' render={() => <Homepage/>}/>
          </Switch>
        </div>
        <div className="app-footer">
          footer
        </div>
      </div>
    </div>

  );
}

export default App;
