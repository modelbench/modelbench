import { Link, Route } from "react-router-dom";
import React, { Component } from "react";

import About from "./components/About/About";
import Charts from "./components/Charts/Charts";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import NewProblem from "./components/NewProblem/NewProblem";
import Output from "./components/Output/Output";
import Page from "./components/Page/Page";
import ProblemsToolbar from "./components/ProblemsToolbar/ProblemsToolbar";
import Project from "./components/Project/Project";
import Projects from "./components/Projects/Projects";
import SystemInfo from "./components/SystemInfoContainer/SystemInfoContainer";

const spec = [
  { name: "Home", location: "/app", component: Home },
  {
    name: "Problems",
    location: "/projects",
    component: Projects,
    exact: true,
    toolbar: ProblemsToolbar
  },
  {
    name: "System Information",
    location: "/systeminfo",
    component: SystemInfo
  },
  { name: "Settings", location: "/app" },
  {
    name: "About",
    location: "/about",
    component: About,
    noPage: true,
    bottom: true
  },
  {
    name: "Landing Page",
    location: "/",
    component: LandingPage,
    bottom: true,
    exact: true,
    noPage: true
  },
  {
    name: "Problem",
    location: "/projects/:projectID",
    component: Project,
    external: false
  },
  {
    name: "New Problem",
    location: "/new-problem",
    component: NewProblem,
    external: false
  },
  {
    name: "Output",
    location: "/output",
    component: Output,
    external: false
  },
  {
    name: "Charts",
    location: "/charts",
    component: Charts,
    external: false
  }
];

{
  /* <Route exact path="/" component={LandingPage} />
<Route path="/app" component={Home} />
<Route path="/systeminfo" component={SystemInfo} />
<Route exact path="/projects" component={Projects} />
<Route path="/projects/:projectID" component={Project} /> */
}
let Routes = [];

function withPage(Content, name, toolbar) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(Content);
      return (
        <Page name={name} toolbar={toolbar}>
          <Content {...this.props} />
        </Page>
      );
    }
  };
}

for (const page of spec) {
  let c = page.component;

  if (!c) {
    console.log(page);
    continue;
  }
  if (page.noPage === undefined || !page.noPage) {
    c = withPage(c, page.name, page.toolbar);
  }
  Routes.push(
    <Route
      key={page.location}
      exact={page.exact}
      path={page.location}
      component={c}
    />
  );
}

const cleanSpec = spec.filter(i => {
  let z = true;
  if (i.external != undefined) {
    z = i.external;
  }
  return z;
});

export { cleanSpec as spec, Routes };
