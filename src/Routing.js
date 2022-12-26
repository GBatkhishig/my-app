import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import IndexPage from "./pages";
import NotFoundPage from "./pages/404";
import AboutPage from "./pages/about";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routing;
