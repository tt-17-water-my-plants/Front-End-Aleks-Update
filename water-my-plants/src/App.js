import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import NewPlantForm from "./components/NewPlantForm";
import UserPage from "./components/UserPage";
import UserProfile from "./components/UserProfile";
import "./App.css";
import { Switch, Route } from "react-router";
import CreateAccount from "./components/CreateAccount";
import EditPlantForm from "./components/EditPlantForm";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <PrivateRoute path='/userpage/items/:id' component={ItemPage} /> */}
        <PrivateRoute path="/userpage" component={UserPage} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/newplantform" component={NewPlantForm} />
        <PrivateRoute path="/plants/:id" component={EditPlantForm} />
        <PrivateRoute path="/editprofile" component={EditProfile} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
