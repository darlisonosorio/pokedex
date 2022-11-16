import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomePage from "./modules/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
      </Switch>
    </Router>
  );
};

export default Routes;
