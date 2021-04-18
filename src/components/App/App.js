import React from "react";
import './App.css';
import Header from "../Header/Header";
import Homepage from "../Content/Homepage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "../Content/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="app-header-fix">
        <Header/>
      </div>
      <div className="app-wrapper">
        <div className="app-header">
        </div>
        <div className="app-content">
          <Switch>
            <Route path='/posts' component={Posts}/>
            <Route path='/' component={Homepage}/>
          </Switch>
        </div>
        <div className="app-footer">
          footer
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
