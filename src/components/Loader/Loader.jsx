import "./Loader.css";

import React from "react";
import classNames from "classnames";

export default function Loader({ className, ...props }) {
  return (
    <div>
      <div {...props} className={classNames("lds-ring", className)}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
