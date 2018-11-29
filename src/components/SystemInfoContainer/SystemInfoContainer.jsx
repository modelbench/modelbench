import React, { Component } from "react";

import SystemInfo from "../SystemInfo/SystemInfo";

const si = window.require("systeminformation");

export default class SystemInfoContainer extends Component {
  constructor() {
    super();

    let p = [];
    const keys = ["cpu", "graphics", "mem", "osInfo", "fsSize"];
    for (const item of keys) {
      let promise = si[item]();

      p.push(promise);
    }

    Promise.all(p).then(vals => {
      for (let idx = 0; idx < vals.length; idx++) {
        const el = vals[idx];
        const key = keys[idx];
        let stateObj = {};
        stateObj[key] = el;
        this.setState(stateObj);
      }
      this.setState({ loaded: true });
    });
  }
  render() {
    return (
      <div>
        <SystemInfo {...this.state} />
      </div>
    );
  }
}
