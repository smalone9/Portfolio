import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Switch>
        <Route exact path="/">
          component={Home}
        </Route>
        <Route exact path="/portfolio">
          component={Portfolio}
        </Route>
        <Route exact path="/contact">
          component={Contact}
        </Route>
        <Route exact path="/resume">
          component={Resume}
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
