import "./SystemInfo.css";

import React, { Component } from "react";

import Loader from "../Loader/Loader";
import Page from "../Page/Page";

const si = window.require("systeminformation");
const bytes = window.require("bytes");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class SystemInfo extends Component {
  render() {
    let categories = [
      { name: "CPU", data: [this.props.cpu] },
      {
        name: "GPU",
        data: this.props.graphics && this.props.graphics.controllers
      },
      { name: "Memory", data: [this.props.mem], transform: i => bytes(i) },
      { name: "OS", data: [this.props.osInfo] },
      {
        name: "Filesystem",
        data: this.props.fsSize,
        transform: i => {
          if (typeof i == "number") {
            return bytes(i);
          } else {
            return i;
          }
        }
      }
    ];
    let c = [];
    for (let cat of categories) {
      let d = [];
      if (!cat.data) {
        break;
      }
      for (let [idx, item] of cat.data.entries()) {
        if (!item) {
          break;
        }
        for (let value in item) {
          if (
            typeof item[value] != "string" &&
            typeof item[value] != "number"
          ) {
            break;
          }
          d.push(
            <div className="detail" key={value + item[value]}>
              <div className="name">{capitalizeFirstLetter(value)}:</div>
              <div className="val">
                {cat.transform ? cat.transform(item[value]) : item[value]}
              </div>
            </div>
          );
        }
        c.push(
          <div className="value" key={cat.name + " - " + idx}>
            <div className="title">
              <h3 className="title">{cat.name} &nbsp;</h3>
              <h3 className="right">#{idx + 1}</h3>
            </div>
            <div className="details">{d}</div>
          </div>
        );
        d = [];
      }
    }
    return (
      <div className="">
        {!this.props.loaded && (
          <div className="max ctrc">
            <Loader className="" />
          </div>
        )}
        <div className="sys-info">{this.props.loaded && c}</div>
      </div>
    );
  }
}
