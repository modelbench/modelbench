
import "./Sidebar.css"

import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png"

export default function Sidebar({ items }) {
  let els = [];
  for (let item of items) {
    els.push(
      <div
        key={item.name}
        className={"sidebar-item" + (item.bottom ? " bottom" : "")}
      >
        <Link to={item.location}>{item.name}</Link>
      </div>
    );
  }
  return <div className="sidebar"><img src={logo}  width="160px"></img>{els}</div>;
}
