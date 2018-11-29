import "./Home.css";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Page from "../Page/Page";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import routes from "../../routes";

export default function Home({ title = "Hello", name = "concerto.ml" }) {
  return (
    <div className="no-projects">
      {/* <h1>):</h1> */}
      <h3>It's looking a little empty around here</h3>
      <p>You don't have any running projects</p>
    </div>
  );
}
