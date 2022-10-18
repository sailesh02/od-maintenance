import React from "react";
import "./Maintenance.css";

const Maintenance = () => {
  return <div className="maintenance-screen">
    <div className="main-card">
      <div className="main-img-cntr">
        <div className="main-img-wrpr">
          <img className="main-img" src="images/technical-support.png" alt="Maintenance Icon" />
        </div>
      </div>
      <div className="main-bdy-cntr">
        <h1 className="main-txt h1-txt">The system is currently under maintenance.</h1>
        <h3 className="main-txt h3-txt">Please try after sometime.</h3>
      </div>
      
    </div>
  </div>;
};

export default Maintenance;