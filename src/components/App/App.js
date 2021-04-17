import React from "react";
import './App.css';
import Header from "../Header/Header";
import Homepage from "../Content/Homepage/Homepage";

function App() {
  return (
    <div>
      <div className="app-header-fix">
        <Header/>
      </div>
      <div className="app-wrapper">
        <div className="app-header">
        </div>
        <div className="app-content">
          <Homepage/>
        </div>
        <div className="app-footer">

        </div>
      </div>
    </div>

  );
}

export default App;
