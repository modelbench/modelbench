import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import React from "react";
import pkg from "../../../package.json";

const version = pkg.version;

export default function About({ title = "Hello", name = "concerto.ml" }) {
  return (
    <div className="full">
      <div className="centered">
        <h1>About</h1>
        <div class="padded small nosides">
          <p>&copy; Alex Kreidler {new Date().getFullYear()}</p>
          <p>
            {name}: v{version}
          </p>
          <p>Chrome: v{window.process.versions.chrome}</p>
          <p>Electron: v{window.process.versions.electron}</p>
        </div>
        <Link to="/app" className="button">
          Go
        </Link>
      </div>
    </div>
  );
}
