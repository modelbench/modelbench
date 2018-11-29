import { Link } from "react-router-dom";
import React from "react";

export default () => {
  return (
    <div className="lots padded">
      <h1>The page you are looking for was not found.</h1>
      <Link to="/" className="button margin nosides">
        Go back home
      </Link>
    </div>
  );
};
