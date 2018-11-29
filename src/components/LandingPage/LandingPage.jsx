import "./LandingPage.css";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import React from "react";

export default function LandingPage({ title = "Hello", name = "Model Bench" }) {
  return (
    <div className="full landing-page spaced">
      <div className="centered">
        <h1 className="header">{title}</h1>
        <p>
          Welcome to <span className=" bold">{name}</span>.
        </p>
        <p className="inset">
          You can help your favorite projects and researchers by donating CPU
          and GPU compute time to help solve the world's most challenging
          problems.
        </p>
        <Link to="/app" className="button">
          Go
        </Link>
      </div>
    </div>
  );
}
