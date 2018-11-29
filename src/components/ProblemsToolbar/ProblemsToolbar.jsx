import { Link } from "react-router-dom";
import React from "react";

export default function ProblemsToolbar(props) {
  return (
    <div style={{ display: "inline-block" }} {...props}>

      {/* <div class="button small">+</div> */}
      <Link to="/new-problem" className="buttonAdd buttonTwo">+</Link>
      <div style={{ width:"4rem" }}></div>
    </div>
  );
}
