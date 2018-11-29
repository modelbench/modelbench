import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { Component } from "react";

import NotFound from "./components/NotFound/NotFound";
import { Routes } from "./routes";

const electron = window.require("electron"); // little trick to import electron in react
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateReady: false
    };
    ipcRenderer.on("updateReady", (event, text) => {
      this.setState({ updateReady: true });
    });
  }

  render() {
    return (
      <Router>
        <div className="router-page">
          <Switch>
            {Routes}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
