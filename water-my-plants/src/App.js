import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import NewPlantForm from "./components/NewPlantForm";
import UserPage from "./components/UserPage";
import UserProfile from "./components/UserProfile";
import "./App.css";
import { Switch } from "react-router";
import CreateAccount from "./components/CreateAccount";
import EditPlantForm from "./components/EditPlantForm";
import EditProfile from "./components/EditProfile";
import HiddenRoute from './utils/HiddenRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute path='/userpage/items/:id' component={ItemPage} /> */}
        <PrivateRoute path="/userpage" component={UserPage} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/newplantform" component={NewPlantForm} />
        <PrivateRoute path="/plants/:id" component={EditPlantForm} />
        <PrivateRoute path="/editprofile" component={EditProfile} />
        <HiddenRoute path="/createaccount" component={CreateAccount} />
        <HiddenRoute path="/login" component={Login} />
        <HiddenRoute exact path="/" component={Home} />
        {/* <Route
          path="/"
          component={() => {
            window.location.href = "https://marketing-page-three.vercel.app/";
          }}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
