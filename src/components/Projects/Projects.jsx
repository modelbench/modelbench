import "./Projects.css";

import { Link } from "react-router-dom";
import Page from "../Page/Page";
import React from "react";
import projects from "../../ProjectService.js";

export default function Projects() {
  let colors = `#f2f2f2`
    .split(",")
    .map(i => i.trim());

  function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  let p = [];
  for (let project of projects) {
    p.push(
      <div
        className="project card"
        style={{ backgroundColor: randomElement(colors) }}
      >
        <div className="name">
          <h3 id="colorHead">{project.name}</h3>
        </div>
        <div className="description" id="colorDescr">{project.description}</div>
        
        <Link to={`/projects/${project.id}`} className="button">
          View
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="featured">{p}</div>
      <div className="new" />
    </div>
  );
}
