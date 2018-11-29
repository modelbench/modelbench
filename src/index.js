import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./utilities/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
