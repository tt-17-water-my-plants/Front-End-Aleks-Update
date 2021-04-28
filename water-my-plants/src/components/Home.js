import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/createaccount">
          <button>Create Account</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
