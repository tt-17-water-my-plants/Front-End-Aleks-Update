import React from "react";

import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import "./App.css";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <PrivateRoute /> */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
