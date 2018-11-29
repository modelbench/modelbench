import "./NewProblem.css";

import DropZone from "../DropZone/DropZone";
import React from "react";
import { params } from "../../specs/parameters";
import { withRouter } from "react-router";

class NewProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { name: null }, model: { name: null }, params: {} };
  }

  handleFiles = (f, type) => {
    if (!f) {
      return;
    }
    let e = f[0];
    if (typeof e == "string") {
      let c = e;
      e = { name: c };
    } else {
      e = { name: e.path };
      console.log(e);
    }
    let s = {};
    s[type] = e;
    this.setState(s);
  };

  render() {
    let p = [];
    for (let param in params) {
      p.push(
        <div className="param" key={param}>
          <p className="label">{param}</p>
          <input
            type="number"
            placeholder="Value"
            value={this.state.params[params] || undefined}
            onChange={e => {
              let p = {};
              p[param] = e.target.value;
              this.setState({
                params: Object.assign({}, this.state.params, p)
              });
            }}
          />
        </div>
      );
    }

    return (
      <div className="new-problem">
        <h1>Create a problem</h1>
        <p>Select the model, data, and parameters below</p>
        <DropZone
          label={this.state.model.name || "Model"}
          cb={f => this.handleFiles(f, "model")}
          onClick={() => {
            const { dialog } = window.require("electron").remote;
            dialog.showOpenDialog(
              {
                properties: ["openFile", "openDirectory", "multiSelections"]
              },
              f => this.handleFiles(f, "model")
            );
          }}
        />
        <DropZone
          label={this.state.data.name || "Data"}
          cb={f => this.handleFiles(f, "data")}
          onClick={() => {
            const { dialog } = window.require("electron").remote;
            dialog.showOpenDialog(
              {
                properties: ["openFile", "openDirectory", "multiSelections"]
              },
              f => this.handleFiles(f, "data")
            );
          }}
        />
        <div className="parameters">
          <h3 style={{ marginBottom: "1rem" }}>Parameters</h3>
          {p}
        </div>

        <div
          className="button"
          onClick={() => {
            console.log(this.state);
            if (
              this.state.model.name &&
              this.state.model.name.includes(".py")
            ) {
              // this.props.history.push('/some/path')
              console.log(this.props);
              this.props.history.push({
                pathname: "/output",
                details: this.state
              });
              //   child_process.spawn("python3", [this.state.model.name]);
            }
          }}
        >
          Go
        </div>
      </div>
    );
  }
}
export default withRouter(NewProblem);
