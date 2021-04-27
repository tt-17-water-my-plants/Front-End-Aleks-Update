import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1> Water My Plant</h1>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/login">Login</NavLink>
      <br />
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
      <br />
      <NavLink to="/newplantform">New Plant Form</NavLink>
    </div>
  );
};

export default Nav;
