import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import Nav from "./Nav";

const initialUser = {
  username: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState(initialUser);
  const { push } = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/users/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("UserId", res.data.user_id);
        push("/userpage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Nav />
      <form id="login-form" onSubmit={onSubmit}>
        <h2>Sign In</h2>
        <label>
          Username
          <input
            value={user.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            value={user.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>
        <button>Sign In</button>
      </form>
    </>
  );
}

export default Login;
