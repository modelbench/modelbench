import "./Navbar.css";

import React from "react";

export default function Navbar({ name = "Model Bench", title = "", Toolbar }) {
  return (
    <div className="navbar">
      <div className="left">
        <h3 className="head">{title}</h3>
      </div>
      <div className="right no-shrink">
        <Toolbar className="toolbar" />
        <span className="primary"><h3 className="head">{name}</h3></span>
      </div>
    </div>
  );
}
