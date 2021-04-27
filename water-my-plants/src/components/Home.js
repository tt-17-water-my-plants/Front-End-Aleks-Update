import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/createaccount">
        <button>Create Account</button>
      </Link>
    </div>
  );
};

export default Home;
