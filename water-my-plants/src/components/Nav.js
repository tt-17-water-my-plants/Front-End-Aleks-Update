import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Styles/NavStyle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setLoggedIn(true);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("UserId");
  };

  return (
    <Container>
      <h1> Water My Plant</h1>
      <div className={isOpen ? "navLinks open" : "navLinks"}>
        {!loggedIn ? (
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
        ) : (
          <NavLink className="navLink" to="/userpage">
            Home
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
        )}
        {loggedIn && (
          <NavLink className="navLink" to="/userpage">
            My Plants
          </NavLink>
        )}
        {loggedIn && (
          <NavLink className="navLink" to="/profile">
            Profile
          </NavLink>
        )}
        {loggedIn && (
          <NavLink className="navLink" to="/login" onClick={handleLogout}>
            Logout
          </NavLink>
        )}
      </div>
      <div
        className={isOpen ? "burger toggle" : "burger"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </Container>
  );
};

export default Nav;
