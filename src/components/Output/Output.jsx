import "./Output.css";

import React from "react";
// import Terminal from "react-console-emulator";
import Terminal from "../Terminal/Terminal";
import { basename } from "path";
import { callbackify } from "util";
import { codeBlock } from "common-tags";
import { params } from "../../specs/parameters.js";
import { withRouter } from "react-router";

const child_process = window.require("child_process");
class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      scriptname: null,
      stages: {},
      stageOrder: [],
      currentStage: null
    };
    if (!props.location.details) {
      return;
    } else if (!props.location.details.model || !props.location.details.data) {
      return <p>No input specified. Error</p>;
    }
    const details = props.location.details;

    const s = ["data", "model"];
    for (let stage of s) {
      console.log(details);

      console.log(details[stage]);

      if (!details[stage]) {
        continue;
      }
      this.state.stages[stage] = {
        scriptname: details[stage].name,
        done: false,
        run: () => {
          this.runScript(details[stage].name).then(() => {
            console.log("DONE");

            this.setState((state, props) => {
              state.stages[stage].done = true;
              return state;
            });
          });
        },
        running: false
      };
      this.state.stageOrder.push(stage);
    }
    this.addStage("done", {
      run: () => {
        console.log("FINAL DONe");
        this.props.history.push({
          pathname: "/charts",
          details: {
            fileLocation: this.state.model
          }
        });
      }
    });
    this.state.currentStage = 0;
    this.runCurrentStage();
  }

  addStage = (name, stage) => {
    let s = {};
    s[name] = stage;
    Object.assign(this.state.stages, s);
    this.state.stageOrder.push(name);
  };

  runCurrentStage = () => {
    const currentStage = this.state.stages[
      this.state.stageOrder[this.state.currentStage + 1]
    ];
    currentStage.run();
  };
  runAndIncrementStage = () => {
    this.setState((state, props) => {
      return { currentStage: state.currentStage + 1 };
    }, this.runCurrentStage);
  };

  runScript = async scriptname => {
    let args = [];
    if (!this.props.location.details) {
      return null;
    }

    for (let param in this.props.location.details.params) {
      console.log(param, params[param]);
      args.push(`-${params[param]}`);
      args.push(this.props.location.details.params[param]);
    }
    this.state.messages = `python3 ${scriptname} ${args.join(" ")}`;
    let proc = child_process.spawn("python3", [scriptname, ...args]);
    console.log(proc);

    const addMessage = message => {
      this.setState({ messages: `${this.state.messages}\n${message}` });
    };
    if (!proc.stdout || !proc.stderr) {
      return null;
    }
    proc.stdout.on("data", d => {
      addMessage(`${d}`);
    });
    proc.stderr.on("data", d => {
      addMessage(`${d}`);
    });
    proc.on("exit", c => {
      addMessage("Exited with code " + c);
      return c;
    });
    this.state.scriptname = scriptname;
  };

  render() {
    const currentStage = this.state.stages[
      this.state.stageOrder[this.state.currentStage]
    ];
    if (!currentStage) {
      return null;
    }
    // this.runIfNecessary();
    return (
      <div className="output">
        <h1>{basename(this.state.scriptname)}</h1>
        <div className="terminal">
          <Terminal messages={this.state.messages} />
        </div>
        <div
          hidden={currentStage ? !currentStage.done : false}
          className="button"
          onClick={this.runAndIncrementStage}
        >
          Next Step
        </div>
      </div>
    );
  }
}

export default withRouter(Output);
